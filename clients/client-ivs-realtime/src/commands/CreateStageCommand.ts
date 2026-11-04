// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStageRequest, CreateStageResponse } from "../models/models_0";
import { CreateStage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateStageCommand}.
 */
export interface CreateStageCommandInput extends CreateStageRequest {}
/**
 * @public
 *
 * The output of {@link CreateStageCommand}.
 */
export interface CreateStageCommandOutput extends CreateStageResponse, __MetadataBearer {}

/**
 * Creates a new stage (and optionally participant tokens).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, CreateStageCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, CreateStageCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // CreateStageRequest
 *   name: "STRING_VALUE",
 *   participantTokenConfigurations: [ // ParticipantTokenConfigurations
 *     { // ParticipantTokenConfiguration
 *       duration: Number("int"),
 *       userId: "STRING_VALUE",
 *       attributes: { // ParticipantTokenAttributes
 *         "<keys>": "STRING_VALUE",
 *       },
 *       capabilities: [ // ParticipantTokenCapabilities
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   autoParticipantRecordingConfiguration: { // AutoParticipantRecordingConfiguration
 *     storageConfigurationArn: "STRING_VALUE", // required
 *     mediaTypes: [ // ParticipantRecordingMediaTypeList
 *       "AUDIO_VIDEO" || "AUDIO_ONLY" || "NONE",
 *     ],
 *     thumbnailConfiguration: { // ParticipantThumbnailConfiguration
 *       targetIntervalSeconds: Number("int"),
 *       storage: [ // ThumbnailStorageTypeList
 *         "SEQUENTIAL" || "LATEST",
 *       ],
 *       recordingMode: "INTERVAL" || "DISABLED",
 *     },
 *     recordingReconnectWindowSeconds: Number("int"),
 *     hlsConfiguration: { // ParticipantRecordingHlsConfiguration
 *       targetSegmentDurationSeconds: Number("int"),
 *     },
 *     recordParticipantReplicas: true || false,
 *   },
 * };
 * const command = new CreateStageCommand(input);
 * const response = await client.send(command);
 * // { // CreateStageResponse
 * //   stage: { // Stage
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     activeSessionId: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     autoParticipantRecordingConfiguration: { // AutoParticipantRecordingConfiguration
 * //       storageConfigurationArn: "STRING_VALUE", // required
 * //       mediaTypes: [ // ParticipantRecordingMediaTypeList
 * //         "AUDIO_VIDEO" || "AUDIO_ONLY" || "NONE",
 * //       ],
 * //       thumbnailConfiguration: { // ParticipantThumbnailConfiguration
 * //         targetIntervalSeconds: Number("int"),
 * //         storage: [ // ThumbnailStorageTypeList
 * //           "SEQUENTIAL" || "LATEST",
 * //         ],
 * //         recordingMode: "INTERVAL" || "DISABLED",
 * //       },
 * //       recordingReconnectWindowSeconds: Number("int"),
 * //       hlsConfiguration: { // ParticipantRecordingHlsConfiguration
 * //         targetSegmentDurationSeconds: Number("int"),
 * //       },
 * //       recordParticipantReplicas: true || false,
 * //     },
 * //     endpoints: { // StageEndpoints
 * //       events: "STRING_VALUE",
 * //       whip: "STRING_VALUE",
 * //       rtmp: "STRING_VALUE",
 * //       rtmps: "STRING_VALUE",
 * //     },
 * //   },
 * //   participantTokens: [ // ParticipantTokenList
 * //     { // ParticipantToken
 * //       participantId: "STRING_VALUE",
 * //       token: "STRING_VALUE",
 * //       userId: "STRING_VALUE",
 * //       attributes: { // ParticipantTokenAttributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       duration: Number("int"),
 * //       capabilities: [ // ParticipantTokenCapabilities
 * //         "STRING_VALUE",
 * //       ],
 * //       expirationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateStageCommandInput - {@link CreateStageCommandInput}
 * @returns {@link CreateStageCommandOutput}
 * @see {@link CreateStageCommandInput} for command's `input` shape.
 * @see {@link CreateStageCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link PendingVerification} (client fault)
 *
 * Your account is pending verification.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IVSRealTimeServiceException}
 *
 * Base exception class for all service exceptions from IVSRealTime service.
 *
 * @public
 */
export class CreateStageCommand extends command<CreateStageCommandInput, CreateStageCommandOutput>(
  _ep0,
  _mw0,
  "CreateStage",
  CreateStage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStageRequest;
      output: CreateStageResponse;
    };
    sdk: {
      input: CreateStageCommandInput;
      output: CreateStageCommandOutput;
    };
  };
}
