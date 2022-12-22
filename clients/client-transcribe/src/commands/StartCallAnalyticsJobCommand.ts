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
  StartCallAnalyticsJobRequest,
  StartCallAnalyticsJobRequestFilterSensitiveLog,
  StartCallAnalyticsJobResponse,
  StartCallAnalyticsJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartCallAnalyticsJobCommand,
  serializeAws_json1_1StartCallAnalyticsJobCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface StartCallAnalyticsJobCommandInput extends StartCallAnalyticsJobRequest {}
export interface StartCallAnalyticsJobCommandOutput extends StartCallAnalyticsJobResponse, __MetadataBearer {}

/**
 * <p>Transcribes the audio from a customer service call and applies any additional Request
 *             Parameters you choose to include in your request.</p>
 *          <p>In addition to many standard transcription features, Call Analytics provides you with
 *             call characteristics, call summarization, speaker sentiment, and optional redaction of
 *             your text transcript and your audio file. You can also apply custom categories to flag
 *             specified conditions. To learn more about these features and insights, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call
 *                 center audio with Call Analytics</a>.</p>
 *          <p>If you want to apply categories to your Call Analytics job, you must create them
 *             before submitting your job request. Categories cannot be retroactively applied to a job.
 *             To create a new category, use the
 *             operation. To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for batch
 *                 transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for
 *                     streaming transcriptions</a>.</p>
 *          <p>To make a <code>StartCallAnalyticsJob</code> request, you must first upload your media
 *             file into an Amazon S3 bucket; you can then specify the Amazon S3
 *             location of the file using the <code>Media</code> parameter.</p>
 *          <p>You must include the following parameters in your <code>StartCallAnalyticsJob</code>
 *             request:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>region</code>: The Amazon Web Services Region where you are making your
 *                     request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and
 *                         quotas</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CallAnalyticsJobName</code>: A custom name that you create for your
 *                     transcription job that's unique within your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DataAccessRoleArn</code>: The Amazon Resource Name (ARN) of an IAM role
 *                     that has permissions to access the Amazon S3 bucket that contains your
 *                     input files.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Media</code> (<code>MediaFileUri</code> or
 *                         <code>RedactedMediaFileUri</code>): The Amazon S3 location of your
 *                     media file.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>With Call Analytics, you can redact the audio contained in your media file by
 *                 including <code>RedactedMediaFileUri</code>, instead of <code>MediaFileUri</code>,
 *                 to specify the location of your input audio. If you choose to redact your audio, you
 *                 can find your redacted media at the location specified in the
 *                     <code>RedactedMediaFileUri</code> field of your response.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, StartCallAnalyticsJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, StartCallAnalyticsJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new StartCallAnalyticsJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartCallAnalyticsJobCommandInput} for command's `input` shape.
 * @see {@link StartCallAnalyticsJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class StartCallAnalyticsJobCommand extends $Command<
  StartCallAnalyticsJobCommandInput,
  StartCallAnalyticsJobCommandOutput,
  TranscribeClientResolvedConfig
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

  constructor(readonly input: StartCallAnalyticsJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartCallAnalyticsJobCommandInput, StartCallAnalyticsJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartCallAnalyticsJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "StartCallAnalyticsJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartCallAnalyticsJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartCallAnalyticsJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartCallAnalyticsJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartCallAnalyticsJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartCallAnalyticsJobCommandOutput> {
    return deserializeAws_json1_1StartCallAnalyticsJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
