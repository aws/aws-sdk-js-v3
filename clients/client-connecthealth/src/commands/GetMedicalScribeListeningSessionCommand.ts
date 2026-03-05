// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectHealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectHealthClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetMedicalScribeListeningSessionInput, GetMedicalScribeListeningSessionOutput } from "../models/models_0";
import { GetMedicalScribeListeningSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMedicalScribeListeningSessionCommand}.
 */
export interface GetMedicalScribeListeningSessionCommandInput extends GetMedicalScribeListeningSessionInput {}
/**
 * @public
 *
 * The output of {@link GetMedicalScribeListeningSessionCommand}.
 */
export interface GetMedicalScribeListeningSessionCommandOutput extends GetMedicalScribeListeningSessionOutput, __MetadataBearer {}

/**
 * <p>Retrieves details about an existing Medical Scribe listening session</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectHealthClient, GetMedicalScribeListeningSessionCommand } from "@aws-sdk/client-connecthealth"; // ES Modules import
 * // const { ConnectHealthClient, GetMedicalScribeListeningSessionCommand } = require("@aws-sdk/client-connecthealth"); // CommonJS import
 * // import type { ConnectHealthClientConfig } from "@aws-sdk/client-connecthealth";
 * const config = {}; // type is ConnectHealthClientConfig
 * const client = new ConnectHealthClient(config);
 * const input = { // GetMedicalScribeListeningSessionInput
 *   sessionId: "STRING_VALUE", // required
 *   domainId: "STRING_VALUE", // required
 *   subscriptionId: "STRING_VALUE", // required
 * };
 * const command = new GetMedicalScribeListeningSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetMedicalScribeListeningSessionOutput
 * //   medicalScribeListeningSessionDetails: { // MedicalScribeListeningSessionDetails
 * //     sessionId: "STRING_VALUE",
 * //     domainId: "STRING_VALUE",
 * //     subscriptionId: "STRING_VALUE",
 * //     languageCode: "en-US",
 * //     mediaSampleRateHertz: Number("int"),
 * //     mediaEncoding: "pcm" || "flac",
 * //     channelDefinitions: [ // MedicalScribeChannelDefinitions
 * //       { // MedicalScribeChannelDefinition
 * //         channelId: Number("int"), // required
 * //         participantRole: "PATIENT" || "CLINICIAN", // required
 * //       },
 * //     ],
 * //     postStreamActionSettings: { // MedicalScribePostStreamActionSettingsResponse
 * //       outputS3Uri: "STRING_VALUE", // required
 * //       clinicalNoteGenerationSettings: { // ClinicalNoteGenerationSettingsResponse
 * //         noteTemplateSettings: { // NoteTemplateSettingsResponse Union: only one key present
 * //           managedTemplate: { // ManagedTemplateResponse
 * //             templateType: "HISTORY_AND_PHYSICAL" || "GIRPP" || "DAP" || "SIRP" || "BIRP" || "BEHAVIORAL_SOAP" || "PHYSICAL_SOAP",
 * //           },
 * //           customTemplate: { // CustomTemplateResponse
 * //             templateType: "HISTORY_AND_PHYSICAL" || "GIRPP" || "DAP" || "SIRP" || "BIRP" || "BEHAVIORAL_SOAP",
 * //           },
 * //         },
 * //       },
 * //     },
 * //     postStreamActionResult: { // MedicalScribePostStreamActionsResult
 * //       clinicalNoteGenerationResult: { // ClinicalNoteGenerationResult
 * //         noteResult: { // ArtifactDetails
 * //           outputLocation: "STRING_VALUE",
 * //           status: "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //           failureReason: "STRING_VALUE",
 * //         },
 * //         transcriptResult: {
 * //           outputLocation: "STRING_VALUE",
 * //           status: "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //           failureReason: "STRING_VALUE",
 * //         },
 * //         afterVisitSummaryResult: {
 * //           outputLocation: "STRING_VALUE",
 * //           status: "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //           failureReason: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     encounterContextProvided: true || false,
 * //     streamStatus: "IN_PROGRESS" || "PAUSED" || "FAILED" || "COMPLETED",
 * //     streamCreationTime: new Date("TIMESTAMP"),
 * //     streamEndTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMedicalScribeListeningSessionCommandInput - {@link GetMedicalScribeListeningSessionCommandInput}
 * @returns {@link GetMedicalScribeListeningSessionCommandOutput}
 * @see {@link GetMedicalScribeListeningSessionCommandInput} for command's `input` shape.
 * @see {@link GetMedicalScribeListeningSessionCommandOutput} for command's `response` shape.
 * @see {@link ConnectHealthClientResolvedConfig | config} for ConnectHealthClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error is thrown when the client does not supply proper credentials to the API.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error is thrown when a transient error causes our API to fail.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error is thrown when the requested resource is not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error is thrown when the client exceeds the allowed request rate.</p>
 *
 * @throws {@link ConnectHealthServiceException}
 * <p>Base exception class for all service exceptions from ConnectHealth service.</p>
 *
 *
 * @public
 */
export class GetMedicalScribeListeningSessionCommand extends $Command
  .classBuilder<
    GetMedicalScribeListeningSessionCommandInput,
    GetMedicalScribeListeningSessionCommandOutput,
    ConnectHealthClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectHealthClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ConnectHealth", "GetMedicalScribeListeningSession", {})
  .n("ConnectHealthClient", "GetMedicalScribeListeningSessionCommand")
  .sc(GetMedicalScribeListeningSession$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMedicalScribeListeningSessionInput;
      output: GetMedicalScribeListeningSessionOutput;
    };
    sdk: {
      input: GetMedicalScribeListeningSessionCommandInput;
      output: GetMedicalScribeListeningSessionCommandOutput;
    };
  };
}
