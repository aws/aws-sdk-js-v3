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

import { StartMedicalTranscriptionJobRequest, StartMedicalTranscriptionJobResponse } from "../models/models_0";
import {
  de_StartMedicalTranscriptionJobCommand,
  se_StartMedicalTranscriptionJobCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartMedicalTranscriptionJobCommand}.
 */
export interface StartMedicalTranscriptionJobCommandInput extends StartMedicalTranscriptionJobRequest {}
/**
 * @public
 *
 * The output of {@link StartMedicalTranscriptionJobCommand}.
 */
export interface StartMedicalTranscriptionJobCommandOutput
  extends StartMedicalTranscriptionJobResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Transcribes the audio from a medical dictation or conversation and applies any
 *             additional Request Parameters you choose to include in your request.</p>
 *          <p>In addition to many standard transcription features, Amazon Transcribe Medical
 *             provides you with a robust medical vocabulary and, optionally, content identification,
 *             which adds flags to personal health information (PHI). To learn more about these
 *             features, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works-med.html">How Amazon Transcribe Medical
 *                 works</a>.</p>
 *          <p>To make a <code>StartMedicalTranscriptionJob</code> request, you must first upload
 *             your media file into an Amazon S3 bucket; you can then specify the S3 location
 *             of the file using the <code>Media</code> parameter.</p>
 *          <p>You must include the following parameters in your
 *                 <code>StartMedicalTranscriptionJob</code> request:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>region</code>: The Amazon Web Services Region where you are making your
 *                     request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and
 *                         quotas</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MedicalTranscriptionJobName</code>: A custom name you create for your
 *                     transcription job that is unique within your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location
 *                     of your media file.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LanguageCode</code>: This must be <code>en-US</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>OutputBucketName</code>: The Amazon S3 bucket where you want
 *                     your transcript stored. If you want your output stored in a sub-folder of this
 *                     bucket, you must also include <code>OutputKey</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Specialty</code>: This must be <code>PRIMARYCARE</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Type</code>: Choose whether your audio is a conversation or a
 *                     dictation.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, StartMedicalTranscriptionJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, StartMedicalTranscriptionJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const input = { // StartMedicalTranscriptionJobRequest
 *   MedicalTranscriptionJobName: "STRING_VALUE", // required
 *   LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE", // required
 *   MediaSampleRateHertz: Number("int"),
 *   MediaFormat: "mp3" || "mp4" || "wav" || "flac" || "ogg" || "amr" || "webm" || "m4a",
 *   Media: { // Media
 *     MediaFileUri: "STRING_VALUE",
 *     RedactedMediaFileUri: "STRING_VALUE",
 *   },
 *   OutputBucketName: "STRING_VALUE", // required
 *   OutputKey: "STRING_VALUE",
 *   OutputEncryptionKMSKeyId: "STRING_VALUE",
 *   KMSEncryptionContext: { // KMSEncryptionContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Settings: { // MedicalTranscriptionSetting
 *     ShowSpeakerLabels: true || false,
 *     MaxSpeakerLabels: Number("int"),
 *     ChannelIdentification: true || false,
 *     ShowAlternatives: true || false,
 *     MaxAlternatives: Number("int"),
 *     VocabularyName: "STRING_VALUE",
 *   },
 *   ContentIdentificationType: "PHI",
 *   Specialty: "PRIMARYCARE", // required
 *   Type: "CONVERSATION" || "DICTATION", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartMedicalTranscriptionJobCommand(input);
 * const response = await client.send(command);
 * // { // StartMedicalTranscriptionJobResponse
 * //   MedicalTranscriptionJob: { // MedicalTranscriptionJob
 * //     MedicalTranscriptionJobName: "STRING_VALUE",
 * //     TranscriptionJobStatus: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //     LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE",
 * //     MediaSampleRateHertz: Number("int"),
 * //     MediaFormat: "mp3" || "mp4" || "wav" || "flac" || "ogg" || "amr" || "webm" || "m4a",
 * //     Media: { // Media
 * //       MediaFileUri: "STRING_VALUE",
 * //       RedactedMediaFileUri: "STRING_VALUE",
 * //     },
 * //     Transcript: { // MedicalTranscript
 * //       TranscriptFileUri: "STRING_VALUE",
 * //     },
 * //     StartTime: new Date("TIMESTAMP"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     CompletionTime: new Date("TIMESTAMP"),
 * //     FailureReason: "STRING_VALUE",
 * //     Settings: { // MedicalTranscriptionSetting
 * //       ShowSpeakerLabels: true || false,
 * //       MaxSpeakerLabels: Number("int"),
 * //       ChannelIdentification: true || false,
 * //       ShowAlternatives: true || false,
 * //       MaxAlternatives: Number("int"),
 * //       VocabularyName: "STRING_VALUE",
 * //     },
 * //     ContentIdentificationType: "PHI",
 * //     Specialty: "PRIMARYCARE",
 * //     Type: "CONVERSATION" || "DICTATION",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param StartMedicalTranscriptionJobCommandInput - {@link StartMedicalTranscriptionJobCommandInput}
 * @returns {@link StartMedicalTranscriptionJobCommandOutput}
 * @see {@link StartMedicalTranscriptionJobCommandInput} for command's `input` shape.
 * @see {@link StartMedicalTranscriptionJobCommandOutput} for command's `response` shape.
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
export class StartMedicalTranscriptionJobCommand extends $Command<
  StartMedicalTranscriptionJobCommandInput,
  StartMedicalTranscriptionJobCommandOutput,
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
  constructor(readonly input: StartMedicalTranscriptionJobCommandInput) {
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
  ): Handler<StartMedicalTranscriptionJobCommandInput, StartMedicalTranscriptionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMedicalTranscriptionJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "StartMedicalTranscriptionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Transcribe",
        operation: "StartMedicalTranscriptionJob",
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
  private serialize(input: StartMedicalTranscriptionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartMedicalTranscriptionJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartMedicalTranscriptionJobCommandOutput> {
    return de_StartMedicalTranscriptionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
