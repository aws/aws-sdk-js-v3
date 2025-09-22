// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMedicalScribeJobRequest, GetMedicalScribeJobResponse } from "../models/models_0";
import { GetMedicalScribeJob } from "../schemas/schemas_2_Job";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMedicalScribeJobCommand}.
 */
export interface GetMedicalScribeJobCommandInput extends GetMedicalScribeJobRequest {}
/**
 * @public
 *
 * The output of {@link GetMedicalScribeJobCommand}.
 */
export interface GetMedicalScribeJobCommandOutput extends GetMedicalScribeJobResponse, __MetadataBearer {}

/**
 * <p>Provides information about the specified Medical Scribe job.</p>
 *          <p>To view the status of the specified medical transcription job, check the
 *                 <code>MedicalScribeJobStatus</code> field. If the status is <code>COMPLETED</code>,
 *             the job is finished. You can find the results at the location specified in
 *                 <code>MedicalScribeOutput</code>.
 *                 If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your Medical Scribe job
 *             failed.</p>
 *          <p>To get a list of your Medical Scribe jobs, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetMedicalScribeJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, GetMedicalScribeJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // import type { TranscribeClientConfig } from "@aws-sdk/client-transcribe";
 * const config = {}; // type is TranscribeClientConfig
 * const client = new TranscribeClient(config);
 * const input = { // GetMedicalScribeJobRequest
 *   MedicalScribeJobName: "STRING_VALUE", // required
 * };
 * const command = new GetMedicalScribeJobCommand(input);
 * const response = await client.send(command);
 * // { // GetMedicalScribeJobResponse
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
 * @param GetMedicalScribeJobCommandInput - {@link GetMedicalScribeJobCommandInput}
 * @returns {@link GetMedicalScribeJobCommandOutput}
 * @see {@link GetMedicalScribeJobCommandInput} for command's `input` shape.
 * @see {@link GetMedicalScribeJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>We can't find the requested resource. Check that the specified name is correct and try
 *             your request again.</p>
 *
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 *
 * @public
 */
export class GetMedicalScribeJobCommand extends $Command
  .classBuilder<
    GetMedicalScribeJobCommandInput,
    GetMedicalScribeJobCommandOutput,
    TranscribeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Transcribe", "GetMedicalScribeJob", {})
  .n("TranscribeClient", "GetMedicalScribeJobCommand")
  .sc(GetMedicalScribeJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMedicalScribeJobRequest;
      output: GetMedicalScribeJobResponse;
    };
    sdk: {
      input: GetMedicalScribeJobCommandInput;
      output: GetMedicalScribeJobCommandOutput;
    };
  };
}
