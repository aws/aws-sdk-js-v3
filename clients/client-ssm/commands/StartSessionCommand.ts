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

export type StartSessionCommandInput = StartSessionRequest;
export type StartSessionCommandOutput = StartSessionResponse & __MetadataBearer;

/**
 * <p>Initiates a connection to a target (for example, an instance) for a Session Manager session. Returns a
 *    URL and token that can be used to open a WebSocket connection for sending input and receiving
 *    outputs.</p>
 *          <note>
 *             <p>AWS CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager
 *     plugin to be installed on the client machine making the call. For information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Install
 *      the Session Manager plugin for the AWS CLI</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 *             <p>AWS Tools for PowerShell usage: Start-SSMSession is not currently supported by AWS Tools
 *     for PowerShell on Windows local machines.</p>
 *          </note>
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
