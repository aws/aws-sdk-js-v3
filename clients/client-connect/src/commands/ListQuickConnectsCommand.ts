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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  ListQuickConnectsRequest,
  ListQuickConnectsRequestFilterSensitiveLog,
  ListQuickConnectsResponse,
  ListQuickConnectsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListQuickConnectsCommand,
  serializeAws_restJson1ListQuickConnectsCommand,
} from "../protocols/Aws_restJson1";

export interface ListQuickConnectsCommandInput extends ListQuickConnectsRequest {}
export interface ListQuickConnectsCommandOutput extends ListQuickConnectsResponse, __MetadataBearer {}

/**
 * <p>Provides information about the quick connects for the specified Amazon Connect instance.
 *   </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListQuickConnectsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListQuickConnectsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListQuickConnectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQuickConnectsCommandInput} for command's `input` shape.
 * @see {@link ListQuickConnectsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class ListQuickConnectsCommand extends $Command<
  ListQuickConnectsCommandInput,
  ListQuickConnectsCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: ListQuickConnectsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListQuickConnectsCommandInput, ListQuickConnectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListQuickConnectsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListQuickConnectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListQuickConnectsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListQuickConnectsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListQuickConnectsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListQuickConnectsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListQuickConnectsCommandOutput> {
    return deserializeAws_restJson1ListQuickConnectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
