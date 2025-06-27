// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { CreateStageRequest, CreateStageResponse, CreateStageResponseFilterSensitiveLog } from "../models/models_0";
import { de_CreateStageCommand, se_CreateStageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a new stage (and optionally participant tokens).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, CreateStageCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, CreateStageCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
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
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 *
 * @public
 */
export class CreateStageCommand extends $Command
  .classBuilder<
    CreateStageCommandInput,
    CreateStageCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "CreateStage", {})
  .n("IVSRealTimeClient", "CreateStageCommand")
  .f(void 0, CreateStageResponseFilterSensitiveLog)
  .ser(se_CreateStageCommand)
  .de(de_CreateStageCommand)
  .build() {
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
