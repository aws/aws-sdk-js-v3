import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { StartSessionRequest, StartSessionResponse } from "../models/models_1";
import {
  deserializeAws_json1_1StartSessionCommand,
  serializeAws_json1_1StartSessionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface StartSessionCommandInput extends StartSessionRequest {}
export interface StartSessionCommandOutput extends StartSessionResponse, __MetadataBearer {}

/**
 * <p>Initiates a connection to a target (for example, an instance) for a Session Manager session. Returns a
 *    URL and token that can be used to open a WebSocket connection for sending input and receiving
 *    outputs.</p>
 *          <note>
 *             <p>Amazon Web Services CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager
 *     plugin to be installed on the client machine making the call. For information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Install
 *      the Session Manager plugin for the Amazon Web Services CLI</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *             <p>Amazon Web Services Tools for PowerShell usage: Start-SSMSession isn't currently supported by Amazon Web Services Tools
 *     for PowerShell on Windows local machines.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartSessionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartSessionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new StartSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSessionCommandInput} for command's `input` shape.
 * @see {@link StartSessionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartSessionCommand extends $Command<
  StartSessionCommandInput,
  StartSessionCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSessionCommandInput, StartSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "StartSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartSessionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSessionCommandOutput> {
    return deserializeAws_json1_1StartSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
