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

import { StartMedicalScribeJobRequest, StartMedicalScribeJobResponse } from "../models/models_0";
import { de_StartMedicalScribeJobCommand, se_StartMedicalScribeJobCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartMedicalScribeJobCommand}.
 */
export interface StartMedicalScribeJobCommandInput extends StartMedicalScribeJobRequest {}
/**
 * @public
 *
 * The output of {@link StartMedicalScribeJobCommand}.
 */
export interface StartMedicalScribeJobCommandOutput extends StartMedicalScribeJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Transcribes patient-clinician conversations and generates clinical notes. </p>
 *          <p>Amazon Web Services HealthScribe automatically provides rich conversation transcripts, identifies speaker roles,
 *             classifies dialogues, extracts medical terms, and generates preliminary clinical notes.
 *             To learn more about these features, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/health-scribe.html">Amazon Web Services HealthScribe</a>.</p>
 *          <p>To make a <code>StartMedicalScribeJob</code> request, you must first upload
 *             your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location
 *             of the file using the <code>Media</code> parameter.</p>
 *          <p>You must include the following parameters in your
 *                 <code>StartMedicalTranscriptionJob</code> request:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DataAccessRoleArn</code>: The ARN of an IAM role with the these minimum permissions: read permission on input file Amazon S3 bucket specified in <code>Media</code>,
 *                 write permission on the Amazon S3 bucket specified in <code>OutputBucketName</code>, and full permissions on the KMS key specified in <code>OutputEncryptionKMSKeyId</code> (if set).
 *                 The role should also allow <code>transcribe.amazonaws.com</code> to assume it.
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location
 *                     of your media file.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MedicalScribeJobName</code>: A custom name you create for your
 *                     MedicalScribe job that is unique within your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>OutputBucketName</code>: The Amazon S3 bucket where you want
 *                     your output files stored.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Settings</code>: A <code>MedicalScribeSettings</code> obect
 *                 that must set exactly one of <code>ShowSpeakerLabels</code> or <code>ChannelIdentification</code> to true.
 *                 If <code>ShowSpeakerLabels</code> is true, <code>MaxSpeakerLabels</code> must also be set.
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ChannelDefinitions</code>: A <code>MedicalScribeChannelDefinitions</code> array should be set if and only if the <code>ChannelIdentification</code>
 *                 value of <code>Settings</code> is set to true.
 *                 </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, StartMedicalScribeJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, StartMedicalScribeJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const input = { // StartMedicalScribeJobRequest
 *   MedicalScribeJobName: "STRING_VALUE", // required
 *   Media: { // Media
 *     MediaFileUri: "STRING_VALUE",
 *     RedactedMediaFileUri: "STRING_VALUE",
 *   },
 *   OutputBucketName: "STRING_VALUE", // required
 *   OutputEncryptionKMSKeyId: "STRING_VALUE",
 *   KMSEncryptionContext: { // KMSEncryptionContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   Settings: { // MedicalScribeSettings
 *     ShowSpeakerLabels: true || false,
 *     MaxSpeakerLabels: Number("int"),
 *     ChannelIdentification: true || false,
 *     VocabularyName: "STRING_VALUE",
 *     VocabularyFilterName: "STRING_VALUE",
 *     VocabularyFilterMethod: "remove" || "mask" || "tag",
 *   },
 *   ChannelDefinitions: [ // MedicalScribeChannelDefinitions
 *     { // MedicalScribeChannelDefinition
 *       ChannelId: Number("int"), // required
 *       ParticipantRole: "PATIENT" || "CLINICIAN", // required
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartMedicalScribeJobCommand(input);
 * const response = await client.send(command);
 * // { // StartMedicalScribeJobResponse
 * //   MedicalScribeJob: { // MedicalScribeJob
 * //     MedicalScribeJobName: "STRING_VALUE",
 * //     MedicalScribeJobStatus: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //     LanguageCode: "en-US",
 * //     Media: { // Media
 * //       MediaFileUri: "STRING_VALUE",
 * //       RedactedMediaFileUri: "STRING_VALUE",
 * //     },
 * //     MedicalScribeOutput: { // MedicalScribeOutput
 * //       TranscriptFileUri: "STRING_VALUE", // required
 * //       ClinicalDocumentUri: "STRING_VALUE", // required
 * //     },
 * //     StartTime: new Date("TIMESTAMP"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     CompletionTime: new Date("TIMESTAMP"),
 * //     FailureReason: "STRING_VALUE",
 * //     Settings: { // MedicalScribeSettings
 * //       ShowSpeakerLabels: true || false,
 * //       MaxSpeakerLabels: Number("int"),
 * //       ChannelIdentification: true || false,
 * //       VocabularyName: "STRING_VALUE",
 * //       VocabularyFilterName: "STRING_VALUE",
 * //       VocabularyFilterMethod: "remove" || "mask" || "tag",
 * //     },
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     ChannelDefinitions: [ // MedicalScribeChannelDefinitions
 * //       { // MedicalScribeChannelDefinition
 * //         ChannelId: Number("int"), // required
 * //         ParticipantRole: "PATIENT" || "CLINICIAN", // required
 * //       },
 * //     ],
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
 * @param StartMedicalScribeJobCommandInput - {@link StartMedicalScribeJobCommandInput}
 * @returns {@link StartMedicalScribeJobCommandOutput}
 * @see {@link StartMedicalScribeJobCommandInput} for command's `input` shape.
 * @see {@link StartMedicalScribeJobCommandOutput} for command's `response` shape.
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
export class StartMedicalScribeJobCommand extends $Command<
  StartMedicalScribeJobCommandInput,
  StartMedicalScribeJobCommandOutput,
  TranscribeClientResolvedConfig
> {
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
  constructor(readonly input: StartMedicalScribeJobCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMedicalScribeJobCommandInput, StartMedicalScribeJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMedicalScribeJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "StartMedicalScribeJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Transcribe",
        operation: "StartMedicalScribeJob",
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
  private serialize(input: StartMedicalScribeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartMedicalScribeJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMedicalScribeJobCommandOutput> {
    return de_StartMedicalScribeJobCommand(output, context);
  }
}
