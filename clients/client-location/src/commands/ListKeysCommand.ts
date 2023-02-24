// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  ListKeysRequest,
  ListKeysRequestFilterSensitiveLog,
  ListKeysResponse,
  ListKeysResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListKeysCommand,
  serializeAws_restJson1ListKeysCommand,
} from "../protocols/Aws_restJson1";

export interface ListKeysCommandInput extends ListKeysRequest {}
export interface ListKeysCommandOutput extends ListKeysResponse, __MetadataBearer {}

/**
 * <p>Lists API key resources in your Amazon Web Services account.</p>
 *          <important>
 *             <p>The API keys feature is in preview. We may add, change, or remove
 *             features before announcing general availability. For more information, see
 *             <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListKeysCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListKeysCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListKeysCommandInput} for command's `input` shape.
 * @see {@link ListKeysCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class ListKeysCommand extends $Command<
  ListKeysCommandInput,
  ListKeysCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ListKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListKeysCommandInput, ListKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListKeysCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "ListKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListKeysRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListKeysResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListKeysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListKeysCommandOutput> {
    return deserializeAws_restJson1ListKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
