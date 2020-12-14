import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { StartContactRecordingRequest, StartContactRecordingResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartContactRecordingCommand,
  serializeAws_restJson1StartContactRecordingCommand,
} from "../protocols/Aws_restJson1";
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

export type StartContactRecordingCommandInput = StartContactRecordingRequest;
export type StartContactRecordingCommandOutput = StartContactRecordingResponse & __MetadataBearer;

/**
 * <p>This API starts recording the contact when the agent joins the call. StartContactRecording
 *    is a one-time action. For example, if you use StopContactRecording to stop recording an ongoing
 *    call, you can't use StartContactRecording to restart it. For scenarios where the recording has
 *    started and you want to suspend and resume it, such as when collecting sensitive information (for
 *    example, a credit card number), use SuspendContactRecording and ResumeContactRecording.</p>
 *          <p>You can use this API to override the recording behavior configured in the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-recording-behavior.html">Set recording
 *     behavior</a> block.</p>
 *          <p>Only voice recordings are supported at this time.</p>
 */
export class StartContactRecordingCommand extends $Command<
  StartContactRecordingCommandInput,
  StartContactRecordingCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartContactRecordingCommandInput) {
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
  ): Handler<StartContactRecordingCommandInput, StartContactRecordingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "StartContactRecordingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartContactRecordingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartContactRecordingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartContactRecordingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartContactRecordingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartContactRecordingCommandOutput> {
    return deserializeAws_restJson1StartContactRecordingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
