// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectHealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectHealthClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  StartMedicalScribeListeningSessionInput,
  StartMedicalScribeListeningSessionOutput,
} from "../models/models_0";
import { StartMedicalScribeListeningSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *   languageCode: "en-US", // required
 *   mediaSampleRateHertz: Number("int"), // required
 *   mediaEncoding: "pcm" || "flac", // required
 *   inputStream: { // MedicalScribeInputStream Union: only one key present
 *     audioEvent: { // MedicalScribeAudioEvent
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
 *       },
 *       channelDefinitions: [ // MedicalScribeChannelDefinitions
 *         { // MedicalScribeChannelDefinition
 *           channelId: Number("int"), // required
 *           participantRole: "PATIENT" || "CLINICIAN", // required
 *         },
 *       ],
 *       encounterContext: { // EncounterContext
 *         unstructuredContext: "STRING_VALUE",
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
 * //   languageCode: "en-US",
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
export class StartMedicalScribeListeningSessionCommand extends $Command
  .classBuilder<
    StartMedicalScribeListeningSessionCommandInput,
    StartMedicalScribeListeningSessionCommandOutput,
    ConnectHealthClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectHealthClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEventStreamPlugin(config),
    ];
  })
  .s("ConnectHealth", "StartMedicalScribeListeningSession", {
    /**
     * @internal
     */
    eventStream: {
      input: true,
      output: true,
    },
  })
  .n("ConnectHealthClient", "StartMedicalScribeListeningSessionCommand")
  .sc(StartMedicalScribeListeningSession$)
  .build() {
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
