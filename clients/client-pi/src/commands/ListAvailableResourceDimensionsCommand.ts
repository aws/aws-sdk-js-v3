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

import {
  ListAvailableResourceDimensionsRequest,
  ListAvailableResourceDimensionsRequestFilterSensitiveLog,
  ListAvailableResourceDimensionsResponse,
  ListAvailableResourceDimensionsResponseFilterSensitiveLog,
} from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import {
  deserializeAws_json1_1ListAvailableResourceDimensionsCommand,
  serializeAws_json1_1ListAvailableResourceDimensionsCommand,
} from "../protocols/Aws_json1_1";

export interface ListAvailableResourceDimensionsCommandInput extends ListAvailableResourceDimensionsRequest {}
export interface ListAvailableResourceDimensionsCommandOutput
  extends ListAvailableResourceDimensionsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, ListAvailableResourceDimensionsCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, ListAvailableResourceDimensionsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const command = new ListAvailableResourceDimensionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAvailableResourceDimensionsCommandInput} for command's `input` shape.
 * @see {@link ListAvailableResourceDimensionsCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 */
export class ListAvailableResourceDimensionsCommand extends $Command<
  ListAvailableResourceDimensionsCommandInput,
  ListAvailableResourceDimensionsCommandOutput,
  PIClientResolvedConfig
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

  constructor(readonly input: ListAvailableResourceDimensionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAvailableResourceDimensionsCommandInput, ListAvailableResourceDimensionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAvailableResourceDimensionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "ListAvailableResourceDimensionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAvailableResourceDimensionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAvailableResourceDimensionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAvailableResourceDimensionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAvailableResourceDimensionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAvailableResourceDimensionsCommandOutput> {
    return deserializeAws_json1_1ListAvailableResourceDimensionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
