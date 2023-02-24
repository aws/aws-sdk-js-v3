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
  StartContactStreamingRequest,
  StartContactStreamingRequestFilterSensitiveLog,
  StartContactStreamingResponse,
  StartContactStreamingResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1StartContactStreamingCommand,
  serializeAws_restJson1StartContactStreamingCommand,
} from "../protocols/Aws_restJson1";

export interface StartContactStreamingCommandInput extends StartContactStreamingRequest {}
export interface StartContactStreamingCommandOutput extends StartContactStreamingResponse, __MetadataBearer {}

/**
 * <p> Initiates real-time message streaming for a new chat contact.</p>
 *          <p> For more information about message streaming, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html">Enable real-time chat message
 *     streaming</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartContactStreamingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartContactStreamingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new StartContactStreamingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartContactStreamingCommandInput} for command's `input` shape.
 * @see {@link StartContactStreamingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class StartContactStreamingCommand extends $Command<
  StartContactStreamingCommandInput,
  StartContactStreamingCommandOutput,
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

  constructor(readonly input: StartContactStreamingCommandInput) {
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
  ): Handler<StartContactStreamingCommandInput, StartContactStreamingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartContactStreamingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "StartContactStreamingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartContactStreamingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartContactStreamingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartContactStreamingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartContactStreamingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartContactStreamingCommandOutput> {
    return deserializeAws_restJson1StartContactStreamingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
