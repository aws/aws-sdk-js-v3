import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ResumeContactRecordingRequest, ResumeContactRecordingResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ResumeContactRecordingCommand,
  serializeAws_restJson1ResumeContactRecordingCommand,
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

export interface ResumeContactRecordingCommandInput extends ResumeContactRecordingRequest {}
export interface ResumeContactRecordingCommandOutput extends ResumeContactRecordingResponse, __MetadataBearer {}

/**
 * <p>When a contact is being recorded, and the recording has been suspended using
 *    SuspendContactRecording, this API resumes recording the call.</p>
 *
 *          <p>Only voice recordings are supported at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ResumeContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ResumeContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ResumeContactRecordingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeContactRecordingCommandInput} for command's `input` shape.
 * @see {@link ResumeContactRecordingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ResumeContactRecordingCommand extends $Command<
  ResumeContactRecordingCommandInput,
  ResumeContactRecordingCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResumeContactRecordingCommandInput) {
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
  ): Handler<ResumeContactRecordingCommandInput, ResumeContactRecordingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ResumeContactRecordingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResumeContactRecordingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResumeContactRecordingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResumeContactRecordingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ResumeContactRecordingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResumeContactRecordingCommandOutput> {
    return deserializeAws_restJson1ResumeContactRecordingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
