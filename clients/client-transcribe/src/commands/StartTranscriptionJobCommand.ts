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
} from "@smithy/types";

import { StartTranscriptionJobRequest, StartTranscriptionJobResponse } from "../models/models_0";
import { de_StartTranscriptionJobCommand, se_StartTranscriptionJobCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartTranscriptionJobCommand}.
 */
export interface StartTranscriptionJobCommandInput extends StartTranscriptionJobRequest {}
/**
 * @public
 *
 * The output of {@link StartTranscriptionJobCommand}.
 */
export interface StartTranscriptionJobCommandOutput extends StartTranscriptionJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Transcribes the audio from a media file and applies any additional Request Parameters
 *             you choose to include in your request.</p>
 *          <p>To make a <code>StartTranscriptionJob</code> request, you must first upload your media
 *             file into an Amazon S3 bucket; you can then specify the Amazon S3
 *             location of the file using the <code>Media</code> parameter.</p>
 *          <p>You must include the following parameters in your <code>StartTranscriptionJob</code>
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
 *                   <code>TranscriptionJobName</code>: A custom name you create for your
 *                     transcription job that is unique within your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location
 *                     of your media file.</p>
 *             </li>
 *             <li>
 *                <p>One of <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or
 *                         <code>IdentifyMultipleLanguages</code>: If you know the language of your
 *                     media file, specify it using the <code>LanguageCode</code> parameter; you can
 *                     find all valid language codes in the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
 *                         languages</a> table. If you don't know the languages spoken in your
 *                     media, use either <code>IdentifyLanguage</code> or
 *                         <code>IdentifyMultipleLanguages</code> and let Amazon Transcribe identify
 *                     the languages for you.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, StartTranscriptionJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, StartTranscriptionJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const input = { // StartTranscriptionJobRequest
 *   TranscriptionJobName: "STRING_VALUE", // required
 *   LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE",
 *   MediaSampleRateHertz: Number("int"),
 *   MediaFormat: "mp3" || "mp4" || "wav" || "flac" || "ogg" || "amr" || "webm",
 *   Media: { // Media
 *     MediaFileUri: "STRING_VALUE",
 *     RedactedMediaFileUri: "STRING_VALUE",
 *   },
 *   OutputBucketName: "STRING_VALUE",
 *   OutputKey: "STRING_VALUE",
 *   OutputEncryptionKMSKeyId: "STRING_VALUE",
 *   KMSEncryptionContext: { // KMSEncryptionContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Settings: { // Settings
 *     VocabularyName: "STRING_VALUE",
 *     ShowSpeakerLabels: true || false,
 *     MaxSpeakerLabels: Number("int"),
 *     ChannelIdentification: true || false,
 *     ShowAlternatives: true || false,
 *     MaxAlternatives: Number("int"),
 *     VocabularyFilterName: "STRING_VALUE",
 *     VocabularyFilterMethod: "remove" || "mask" || "tag",
 *   },
 *   ModelSettings: { // ModelSettings
 *     LanguageModelName: "STRING_VALUE",
 *   },
 *   JobExecutionSettings: { // JobExecutionSettings
 *     AllowDeferredExecution: true || false,
 *     DataAccessRoleArn: "STRING_VALUE",
 *   },
 *   ContentRedaction: { // ContentRedaction
 *     RedactionType: "PII", // required
 *     RedactionOutput: "redacted" || "redacted_and_unredacted", // required
 *     PiiEntityTypes: [ // PiiEntityTypes
 *       "BANK_ACCOUNT_NUMBER" || "BANK_ROUTING" || "CREDIT_DEBIT_NUMBER" || "CREDIT_DEBIT_CVV" || "CREDIT_DEBIT_EXPIRY" || "PIN" || "EMAIL" || "ADDRESS" || "NAME" || "PHONE" || "SSN" || "ALL",
 *     ],
 *   },
 *   IdentifyLanguage: true || false,
 *   IdentifyMultipleLanguages: true || false,
 *   LanguageOptions: [ // LanguageOptions
 *     "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE",
 *   ],
 *   Subtitles: { // Subtitles
 *     Formats: [ // SubtitleFormats
 *       "vtt" || "srt",
 *     ],
 *     OutputStartIndex: Number("int"),
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   LanguageIdSettings: { // LanguageIdSettingsMap
 *     "<keys>": { // LanguageIdSettings
 *       VocabularyName: "STRING_VALUE",
 *       VocabularyFilterName: "STRING_VALUE",
 *       LanguageModelName: "STRING_VALUE",
 *     },
 *   },
 *   ToxicityDetection: [ // ToxicityDetection
 *     { // ToxicityDetectionSettings
 *       ToxicityCategories: [ // ToxicityCategories // required
 *         "ALL",
 *       ],
 *     },
 *   ],
 * };
 * const command = new StartTranscriptionJobCommand(input);
 * const response = await client.send(command);
 * // { // StartTranscriptionJobResponse
 * //   TranscriptionJob: { // TranscriptionJob
 * //     TranscriptionJobName: "STRING_VALUE",
 * //     TranscriptionJobStatus: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //     LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE",
 * //     MediaSampleRateHertz: Number("int"),
 * //     MediaFormat: "mp3" || "mp4" || "wav" || "flac" || "ogg" || "amr" || "webm",
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
 * //     Settings: { // Settings
 * //       VocabularyName: "STRING_VALUE",
 * //       ShowSpeakerLabels: true || false,
 * //       MaxSpeakerLabels: Number("int"),
 * //       ChannelIdentification: true || false,
 * //       ShowAlternatives: true || false,
 * //       MaxAlternatives: Number("int"),
 * //       VocabularyFilterName: "STRING_VALUE",
 * //       VocabularyFilterMethod: "remove" || "mask" || "tag",
 * //     },
 * //     ModelSettings: { // ModelSettings
 * //       LanguageModelName: "STRING_VALUE",
 * //     },
 * //     JobExecutionSettings: { // JobExecutionSettings
 * //       AllowDeferredExecution: true || false,
 * //       DataAccessRoleArn: "STRING_VALUE",
 * //     },
 * //     ContentRedaction: { // ContentRedaction
 * //       RedactionType: "PII", // required
 * //       RedactionOutput: "redacted" || "redacted_and_unredacted", // required
 * //       PiiEntityTypes: [ // PiiEntityTypes
 * //         "BANK_ACCOUNT_NUMBER" || "BANK_ROUTING" || "CREDIT_DEBIT_NUMBER" || "CREDIT_DEBIT_CVV" || "CREDIT_DEBIT_EXPIRY" || "PIN" || "EMAIL" || "ADDRESS" || "NAME" || "PHONE" || "SSN" || "ALL",
 * //       ],
 * //     },
 * //     IdentifyLanguage: true || false,
 * //     IdentifyMultipleLanguages: true || false,
 * //     LanguageOptions: [ // LanguageOptions
 * //       "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE",
 * //     ],
 * //     IdentifiedLanguageScore: Number("float"),
 * //     LanguageCodes: [ // LanguageCodeList
 * //       { // LanguageCodeItem
 * //         LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE",
 * //         DurationInSeconds: Number("float"),
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Subtitles: { // SubtitlesOutput
 * //       Formats: [ // SubtitleFormats
 * //         "vtt" || "srt",
 * //       ],
 * //       SubtitleFileUris: [ // SubtitleFileUris
 * //         "STRING_VALUE",
 * //       ],
 * //       OutputStartIndex: Number("int"),
 * //     },
 * //     LanguageIdSettings: { // LanguageIdSettingsMap
 * //       "<keys>": { // LanguageIdSettings
 * //         VocabularyName: "STRING_VALUE",
 * //         VocabularyFilterName: "STRING_VALUE",
 * //         LanguageModelName: "STRING_VALUE",
 * //       },
 * //     },
 * //     ToxicityDetection: [ // ToxicityDetection
 * //       { // ToxicityDetectionSettings
 * //         ToxicityCategories: [ // ToxicityCategories // required
 * //           "ALL",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param StartTranscriptionJobCommandInput - {@link StartTranscriptionJobCommandInput}
 * @returns {@link StartTranscriptionJobCommandOutput}
 * @see {@link StartTranscriptionJobCommandInput} for command's `input` shape.
 * @see {@link StartTranscriptionJobCommandOutput} for command's `response` shape.
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
export class StartTranscriptionJobCommand extends $Command<
  StartTranscriptionJobCommandInput,
  StartTranscriptionJobCommandOutput,
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
  constructor(readonly input: StartTranscriptionJobCommandInput) {
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
  ): Handler<StartTranscriptionJobCommandInput, StartTranscriptionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartTranscriptionJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "StartTranscriptionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: StartTranscriptionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartTranscriptionJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTranscriptionJobCommandOutput> {
    return de_StartTranscriptionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
