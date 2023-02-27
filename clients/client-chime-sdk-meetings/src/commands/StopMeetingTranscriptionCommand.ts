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

import { ChimeSDKMeetingsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKMeetingsClient";
import { StopMeetingTranscriptionRequest, StopMeetingTranscriptionRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1StopMeetingTranscriptionCommand,
  serializeAws_restJson1StopMeetingTranscriptionCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link StopMeetingTranscriptionCommand}.
 */
export interface StopMeetingTranscriptionCommandInput extends StopMeetingTranscriptionRequest {}
/**
 * The output of {@link StopMeetingTranscriptionCommand}.
 */
export interface StopMeetingTranscriptionCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops transcription for the specified <code>meetingId</code>. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meeting-transcription.html">
 *             Using Amazon Chime SDK live transcription
 *         </a> in the <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          <important>
 *             <p>Amazon Chime SDK live transcription is powered by Amazon Transcribe. Use of Amazon Transcribe is subject to the
 *             <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a>, including the terms specific to the AWS Machine Learning and Artificial Intelligence Services.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, StopMeetingTranscriptionCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, StopMeetingTranscriptionCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * const client = new ChimeSDKMeetingsClient(config);
 * const command = new StopMeetingTranscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopMeetingTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StopMeetingTranscriptionCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMeetingsClientResolvedConfig | config} for ChimeSDKMeetingsClient's `config` shape.
 *
 */
export class StopMeetingTranscriptionCommand extends $Command<
  StopMeetingTranscriptionCommandInput,
  StopMeetingTranscriptionCommandOutput,
  ChimeSDKMeetingsClientResolvedConfig
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

  constructor(readonly input: StopMeetingTranscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMeetingsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopMeetingTranscriptionCommandInput, StopMeetingTranscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopMeetingTranscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMeetingsClient";
    const commandName = "StopMeetingTranscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopMeetingTranscriptionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopMeetingTranscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopMeetingTranscriptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopMeetingTranscriptionCommandOutput> {
    return deserializeAws_restJson1StopMeetingTranscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
