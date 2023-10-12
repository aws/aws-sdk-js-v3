// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { StartCallAnalyticsJobRequest, StartCallAnalyticsJobResponse } from "../models/models_0";
import { de_StartCallAnalyticsJobCommand, se_StartCallAnalyticsJobCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartCallAnalyticsJobCommand}.
 */
export interface StartCallAnalyticsJobCommandInput extends StartCallAnalyticsJobRequest {}
/**
 * @public
 *
 * The output of {@link StartCallAnalyticsJobCommand}.
 */
export interface StartCallAnalyticsJobCommandOutput extends StartCallAnalyticsJobResponse, __MetadataBearer {}

/**
 * @public
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
 *             operation. To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call
 *                 transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for
 *                     real-time transcriptions</a>.</p>
 *          <p>To make a <code>StartCallAnalyticsJob</code> request, you must first upload your media
 *             file into an Amazon S3 bucket; you can then specify the Amazon S3
 *             location of the file using the <code>Media</code> parameter.</p>
 *          <p>Note that job queuing is enabled by default for Call Analytics jobs.</p>
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
 * const input = { // StartCallAnalyticsJobRequest
 *   CallAnalyticsJobName: "STRING_VALUE", // required
 *   Media: { // Media
 *     MediaFileUri: "STRING_VALUE",
 *     RedactedMediaFileUri: "STRING_VALUE",
 *   },
 *   OutputLocation: "STRING_VALUE",
 *   OutputEncryptionKMSKeyId: "STRING_VALUE",
 *   DataAccessRoleArn: "STRING_VALUE",
 *   Settings: { // CallAnalyticsJobSettings
 *     VocabularyName: "STRING_VALUE",
 *     VocabularyFilterName: "STRING_VALUE",
 *     VocabularyFilterMethod: "remove" || "mask" || "tag",
 *     LanguageModelName: "STRING_VALUE",
 *     ContentRedaction: { // ContentRedaction
 *       RedactionType: "PII", // required
 *       RedactionOutput: "redacted" || "redacted_and_unredacted", // required
 *       PiiEntityTypes: [ // PiiEntityTypes
 *         "BANK_ACCOUNT_NUMBER" || "BANK_ROUTING" || "CREDIT_DEBIT_NUMBER" || "CREDIT_DEBIT_CVV" || "CREDIT_DEBIT_EXPIRY" || "PIN" || "EMAIL" || "ADDRESS" || "NAME" || "PHONE" || "SSN" || "ALL",
 *       ],
 *     },
 *     LanguageOptions: [ // LanguageOptions
 *       "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE",
 *     ],
 *     LanguageIdSettings: { // LanguageIdSettingsMap
 *       "<keys>": { // LanguageIdSettings
 *         VocabularyName: "STRING_VALUE",
 *         VocabularyFilterName: "STRING_VALUE",
 *         LanguageModelName: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   ChannelDefinitions: [ // ChannelDefinitions
 *     { // ChannelDefinition
 *       ChannelId: Number("int"),
 *       ParticipantRole: "AGENT" || "CUSTOMER",
 *     },
 *   ],
 * };
 * const command = new StartCallAnalyticsJobCommand(input);
 * const response = await client.send(command);
 * // { // StartCallAnalyticsJobResponse
 * //   CallAnalyticsJob: { // CallAnalyticsJob
 * //     CallAnalyticsJobName: "STRING_VALUE",
 * //     CallAnalyticsJobStatus: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //     LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE",
 * //     MediaSampleRateHertz: Number("int"),
 * //     MediaFormat: "mp3" || "mp4" || "wav" || "flac" || "ogg" || "amr" || "webm" || "m4a",
 * //     Media: { // Media
 * //       MediaFileUri: "STRING_VALUE",
 * //       RedactedMediaFileUri: "STRING_VALUE",
 * //     },
 * //     Transcript: { // Transcript
 * //       TranscriptFileUri: "STRING_VALUE",
 * //       RedactedTranscriptFileUri: "STRING_VALUE",
 * //     },
 * //     StartTime: new Date("TIMESTAMP"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     CompletionTime: new Date("TIMESTAMP"),
 * //     FailureReason: "STRING_VALUE",
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     IdentifiedLanguageScore: Number("float"),
 * //     Settings: { // CallAnalyticsJobSettings
 * //       VocabularyName: "STRING_VALUE",
 * //       VocabularyFilterName: "STRING_VALUE",
 * //       VocabularyFilterMethod: "remove" || "mask" || "tag",
 * //       LanguageModelName: "STRING_VALUE",
 * //       ContentRedaction: { // ContentRedaction
 * //         RedactionType: "PII", // required
 * //         RedactionOutput: "redacted" || "redacted_and_unredacted", // required
 * //         PiiEntityTypes: [ // PiiEntityTypes
 * //           "BANK_ACCOUNT_NUMBER" || "BANK_ROUTING" || "CREDIT_DEBIT_NUMBER" || "CREDIT_DEBIT_CVV" || "CREDIT_DEBIT_EXPIRY" || "PIN" || "EMAIL" || "ADDRESS" || "NAME" || "PHONE" || "SSN" || "ALL",
 * //         ],
 * //       },
 * //       LanguageOptions: [ // LanguageOptions
 * //         "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE",
 * //       ],
 * //       LanguageIdSettings: { // LanguageIdSettingsMap
 * //         "<keys>": { // LanguageIdSettings
 * //           VocabularyName: "STRING_VALUE",
 * //           VocabularyFilterName: "STRING_VALUE",
 * //           LanguageModelName: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     ChannelDefinitions: [ // ChannelDefinitions
 * //       { // ChannelDefinition
 * //         ChannelId: Number("int"),
 * //         ParticipantRole: "AGENT" || "CUSTOMER",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param StartCallAnalyticsJobCommandInput - {@link StartCallAnalyticsJobCommandInput}
 * @returns {@link StartCallAnalyticsJobCommandOutput}
 * @see {@link StartCallAnalyticsJobCommandInput} for command's `input` shape.
 * @see {@link StartCallAnalyticsJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource already exists with this name. Resource names must be unique within an
 *                 Amazon Web Services account.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 *
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Transcribe",
        operation: "StartCallAnalyticsJob",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StartCallAnalyticsJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartCallAnalyticsJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartCallAnalyticsJobCommandOutput> {
    return de_StartCallAnalyticsJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
