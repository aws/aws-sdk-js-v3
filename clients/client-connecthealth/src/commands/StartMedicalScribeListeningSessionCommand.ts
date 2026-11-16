// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type {
  StartMedicalScribeListeningSessionInput,
  StartMedicalScribeListeningSessionOutput,
} from "../models/models_0";
import { StartMedicalScribeListeningSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMedicalScribeListeningSessionCommand}.
 */
export interface StartMedicalScribeListeningSessionCommandInput extends StartMedicalScribeListeningSessionInput {}
/**
 * @public
 *
 * The output of {@link StartMedicalScribeListeningSessionCommand}.
 */
export interface StartMedicalScribeListeningSessionCommandOutput extends StartMedicalScribeListeningSessionOutput, __MetadataBearer {}

/**
 * <p>Starts a new Medical Scribe listening session for real-time audio transcription</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectHealthClient, StartMedicalScribeListeningSessionCommand } from "@aws-sdk/client-connecthealth"; // ES Modules import
 * // const { ConnectHealthClient, StartMedicalScribeListeningSessionCommand } = require("@aws-sdk/client-connecthealth"); // CommonJS import
 * // import type { ConnectHealthClientConfig } from "@aws-sdk/client-connecthealth";
 * const config = {}; // type is ConnectHealthClientConfig
 * const client = new ConnectHealthClient(config);
 * const input = { // StartMedicalScribeListeningSessionInput
 *   sessionId: "STRING_VALUE", // required
 *   domainId: "STRING_VALUE", // required
 *   subscriptionId: "STRING_VALUE", // required
 *   languageCode: "en-US" || "multi", // required
 *   mediaSampleRateHertz: Number("int"), // required
 *   mediaEncoding: "pcm" || "flac", // required
 *   inputStream: { // MedicalScribeInputStream Union: only one key present
 *     audioEvent: { // MedicalScribeAudioEvent
 *       audioChunk: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *     },
 *     binaryAudioEvent: { // MedicalScribeBinaryAudioEvent
 *       audioChunk: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *     },
 *     sessionControlEvent: { // MedicalScribeSessionControlEvent
 *       type: "END_OF_SESSION",
 *     },
 *     configurationEvent: { // MedicalScribeConfigurationEvent
 *       postStreamActionSettings: { // MedicalScribePostStreamActionSettings
 *         outputS3Uri: "STRING_VALUE", // required
 *         clinicalNoteGenerationSettings: { // ClinicalNoteGenerationSettings
 *           noteTemplateSettings: { // NoteTemplateSettings Union: only one key present
 *             managedTemplate: { // ManagedTemplate
 *               templateType: "HISTORY_AND_PHYSICAL" || "GIRPP" || "DAP" || "SIRP" || "BIRP" || "BEHAVIORAL_SOAP" || "PHYSICAL_SOAP", // required
 *             },
 *             customTemplate: { // CustomTemplate
 *               templateType: "HISTORY_AND_PHYSICAL" || "GIRPP" || "DAP" || "SIRP" || "BIRP" || "BEHAVIORAL_SOAP", // required
 *               templateInstructions: [ // TemplateInstructions // required
 *                 { // TemplateSectionInstruction
 *                   sectionHeader: "STRING_VALUE", // required
 *                   sectionInstruction: "STRING_VALUE", // required
 *                 },
 *               ],
 *             },
 *           },
 *         },
 *         medicalCodeGenerationSettings: { // MedicalCodeGenerationSettings
 *           enabled: true || false, // required
 *         },
 *       },
 *       channelDefinitions: [ // MedicalScribeChannelDefinitions
 *         { // MedicalScribeChannelDefinition
 *           channelId: Number("int"), // required
 *           participantRole: "PATIENT" || "CLINICIAN", // required
 *         },
 *       ],
 *       encounterContext: { // EncounterContext
 *         unstructuredContext: "STRING_VALUE",
 *         medicalCodingContext: { // MedicalCodingContext
 *           sex: "MALE" || "FEMALE" || "NON_BINARY" || "UNKNOWN",
 *           status: "NEW" || "ESTABLISHED",
 *           dateOfBirth: "STRING_VALUE",
 *           encounterType: "TELEHEALTH" || "IN_PERSON",
 *           encounterReason: "STRING_VALUE",
 *           afterHours: true || false,
 *           encounterDate: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new StartMedicalScribeListeningSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartMedicalScribeListeningSessionOutput
 * //   sessionId: "STRING_VALUE",
 * //   domainId: "STRING_VALUE",
 * //   subscriptionId: "STRING_VALUE",
 * //   requestId: "STRING_VALUE",
 * //   languageCode: "en-US" || "multi",
 * //   mediaSampleRateHertz: Number("int"),
 * //   mediaEncoding: "pcm" || "flac",
 * //   responseStream: { // MedicalScribeOutputStream Union: only one key present
 * //     transcriptEvent: { // MedicalScribeTranscriptEvent
 * //       transcriptSegment: { // MedicalScribeTranscriptSegment
 * //         segmentId: "STRING_VALUE",
 * //         audioBeginOffset: Number("double"),
 * //         audioEndOffset: Number("double"),
 * //         isPartial: true || false,
 * //         channelId: "STRING_VALUE",
 * //         content: "STRING_VALUE",
 * //       },
 * //     },
 * //     internalFailureException: { // InternalServerException
 * //       message: "STRING_VALUE",
 * //     },
 * //     validationException: { // ValidationException
 * //       message: "STRING_VALUE",
 * //     },
 * //     periodontalChartEvent: { // MedicalScribePeriodontalChartEvent
 * //       snapshotVersion: Number("long"), // required
 * //       teeth: [ // PeriodontalToothList // required
 * //         { // PeriodontalTooth
 * //           toothNumber: Number("int"), // required
 * //           missing: true || false, // required
 * //           mobility: Number("int"),
 * //           furcation: Number("int"),
 * //           sites: [ // PeriodontalSiteList
 * //             { // PeriodontalSite
 * //               site: "DB" || "B" || "MB" || "DL" || "L" || "ML", // required
 * //               probingDepth: Number("int"),
 * //               recession: Number("int"),
 * //               bleeding: true || false,
 * //               suppuration: true || false,
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       reviewItems: [ // PeriodontalReviewList
 * //         { // PeriodontalReview
 * //           reason: "SITE_NOT_CHARTED" || "VALUE_NOT_CHARTED" || "READING_COUNT_MISMATCH" || "LINE_UNCLEAR" || "TOOTH_UNCLEAR" || "MISSING_TOOTH_CONFLICT" || "MEASUREMENT_NOT_CHARTED" || "SESSION_ISSUE", // required
 * //           toothNumber: Number("int"),
 * //           sites: [ // PeriodontalSiteNameList
 * //             "DB" || "B" || "MB" || "DL" || "L" || "ML",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     checklistEvent: { // MedicalScribeChecklistEvent
 * //       snapshotVersion: Number("long"), // required
 * //       checklists: [ // ChecklistList // required
 * //         { // Checklist
 * //           checklistId: "STRING_VALUE", // required
 * //           items: [ // ChecklistItemList // required
 * //             { // ChecklistItem
 * //               itemKey: "STRING_VALUE", // required
 * //               status: "DISCUSSED" || "PARTIALLY_DISCUSSED" || "NOT_DISCUSSED", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartMedicalScribeListeningSessionCommandInput - {@link StartMedicalScribeListeningSessionCommandInput}
 * @returns {@link StartMedicalScribeListeningSessionCommandOutput}
 * @see {@link StartMedicalScribeListeningSessionCommandInput} for command's `input` shape.
 * @see {@link StartMedicalScribeListeningSessionCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>This error is thrown when the client supplies invalid input to the API.</p>
 *
 * @throws {@link ConnectHealthServiceException}
 * <p>Base exception class for all service exceptions from ConnectHealth service.</p>
 *
 *
 * @public
 */
export class StartMedicalScribeListeningSessionCommand extends command<StartMedicalScribeListeningSessionCommandInput, StartMedicalScribeListeningSessionCommandOutput>(
  _ep0,
  _mw1,
  "StartMedicalScribeListeningSession",
  StartMedicalScribeListeningSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMedicalScribeListeningSessionInput;
      output: StartMedicalScribeListeningSessionOutput;
    };
    sdk: {
      input: StartMedicalScribeListeningSessionCommandInput;
      output: StartMedicalScribeListeningSessionCommandOutput;
    };
  };
}
