// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMedicalScribeJobRequest, StartMedicalScribeJobResponse } from "../models/models_0";
import { StartMedicalScribeJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Transcribes patient-clinician conversations and generates clinical notes.
 *
 * Amazon Web Services HealthScribe automatically provides rich conversation transcripts, identifies speaker roles, classifies dialogues, extracts medical terms, and generates preliminary clinical notes. To learn more about these features, refer to [Amazon Web Services HealthScribe](https://docs.aws.amazon.com/transcribe/latest/dg/health-scribe.html).
 *
 * To make a `StartMedicalScribeJob` request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the `Media` parameter.
 *
 * You must include the following parameters in your `StartMedicalTranscriptionJob` request:
 *
 * - `DataAccessRoleArn`: The ARN of an IAM role with the these minimum permissions: read permission on input file Amazon S3 bucket specified in `Media`, write permission on the Amazon S3 bucket specified in `OutputBucketName`, and full permissions on the KMS key specified in `OutputEncryptionKMSKeyId` (if set). The role should also allow `transcribe.amazonaws.com` to assume it.
 * - `Media` (`MediaFileUri`): The Amazon S3 location of your media file.
 * - `MedicalScribeJobName`: A custom name you create for your MedicalScribe job that is unique within your Amazon Web Services account.
 * - `OutputBucketName`: The Amazon S3 bucket where you want your output files stored.
 * - `Settings`: A `MedicalScribeSettings` object that must set exactly one of `ShowSpeakerLabels` or `ChannelIdentification` to true. If `ShowSpeakerLabels` is true, `MaxSpeakerLabels` must also be set.
 * - `ChannelDefinitions`: A `MedicalScribeChannelDefinitions` array should be set if and only if the `ChannelIdentification` value of `Settings` is set to true.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, StartMedicalScribeJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, StartMedicalScribeJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // import type { TranscribeClientConfig } from "@aws-sdk/client-transcribe";
 * const config = {}; // type is TranscribeClientConfig
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
 *       NoteTemplate: "HISTORY_AND_PHYSICAL" || "GIRPP" || "BIRP" || "SIRP" || "DAP" || "BEHAVIORAL_SOAP" || "PHYSICAL_SOAP",
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
 *   MedicalScribeContext: { // MedicalScribeContext
 *     PatientContext: { // MedicalScribePatientContext
 *       Pronouns: "HE_HIM" || "SHE_HER" || "THEY_THEM",
 *     },
 *   },
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
 * //         NoteTemplate: "HISTORY_AND_PHYSICAL" || "GIRPP" || "BIRP" || "SIRP" || "DAP" || "BEHAVIORAL_SOAP" || "PHYSICAL_SOAP",
 * //       },
 * //     },
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     ChannelDefinitions: [ // MedicalScribeChannelDefinitions
 * //       { // MedicalScribeChannelDefinition
 * //         ChannelId: Number("int"), // required
 * //         ParticipantRole: "PATIENT" || "CLINICIAN", // required
 * //       },
 * //     ],
 * //     MedicalScribeContextProvided: true || false,
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
 *
 * Your request didn't pass one or more validation tests. This can occur when the entity you're trying to delete doesn't exist or if it's in a non-terminal state (such as `IN PROGRESS`). See the exception message field for more information.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A resource already exists with this name. Resource names must be unique within an Amazon Web Services account.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * There was an internal error. Check the error message, correct the issue, and try your request again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You've either sent too many requests or your input file is too long. Wait before retrying your request, or use a smaller file and try your request again.
 *
 * @throws {@link TranscribeServiceException}
 *
 * Base exception class for all service exceptions from Transcribe service.
 *
 * @public
 */
export class StartMedicalScribeJobCommand extends command<StartMedicalScribeJobCommandInput, StartMedicalScribeJobCommandOutput>(
  _ep0,
  _mw0,
  "StartMedicalScribeJob",
  StartMedicalScribeJob$
) {
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
