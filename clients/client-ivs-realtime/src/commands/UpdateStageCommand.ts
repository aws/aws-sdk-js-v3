// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateStageRequest, UpdateStageResponse } from "../models/models_0";
import { UpdateStage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateStageCommand}.
 */
export interface UpdateStageCommandInput extends UpdateStageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStageCommand}.
 */
export interface UpdateStageCommandOutput extends UpdateStageResponse, __MetadataBearer {}

/**
 * Updates a stage’s configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, UpdateStageCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, UpdateStageCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // UpdateStageRequest
 *   arn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
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
 * const command = new UpdateStageCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStageResponse
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
 * // };
 *
 * ```
 *
 * @param UpdateStageCommandInput - {@link UpdateStageCommandInput}
 * @returns {@link UpdateStageCommandOutput}
 * @see {@link UpdateStageCommandInput} for command's `input` shape.
 * @see {@link UpdateStageCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link PendingVerification} (client fault)
 *
 * Your account is pending verification.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
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
export class UpdateStageCommand extends command<UpdateStageCommandInput, UpdateStageCommandOutput>(
  _ep0,
  _mw0,
  "UpdateStage",
  UpdateStage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStageRequest;
      output: UpdateStageResponse;
    };
    sdk: {
      input: UpdateStageCommandInput;
      output: UpdateStageCommandOutput;
    };
  };
}
