// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartMedicalScribeJobRequest, StartMedicalScribeJobResponse } from "../models/models_0";
import { de_StartMedicalScribeJobCommand, se_StartMedicalScribeJobCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *     ClinicalNoteGenerationSettings: { // ClinicalNoteGenerationSettings
 *       NoteTemplate: "HISTORY_AND_PHYSICAL" || "GIRPP",
 *     },
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
 * //       ClinicalNoteGenerationSettings: { // ClinicalNoteGenerationSettings
 * //         NoteTemplate: "HISTORY_AND_PHYSICAL" || "GIRPP",
 * //       },
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
 * @public
 */
export class StartMedicalScribeJobCommand extends $Command
  .classBuilder<
    StartMedicalScribeJobCommandInput,
    StartMedicalScribeJobCommandOutput,
    TranscribeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Transcribe", "StartMedicalScribeJob", {})
  .n("TranscribeClient", "StartMedicalScribeJobCommand")
  .f(void 0, void 0)
  .ser(se_StartMedicalScribeJobCommand)
  .de(de_StartMedicalScribeJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMedicalScribeJobRequest;
      output: StartMedicalScribeJobResponse;
    };
    sdk: {
      input: StartMedicalScribeJobCommandInput;
      output: StartMedicalScribeJobCommandOutput;
    };
  };
}
