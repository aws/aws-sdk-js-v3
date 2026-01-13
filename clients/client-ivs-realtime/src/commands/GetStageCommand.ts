// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import type { GetStageRequest, GetStageResponse } from "../models/models_0";
import { GetStage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStageCommand}.
 */
export interface GetStageCommandInput extends GetStageRequest {}
/**
 * @public
 *
 * The output of {@link GetStageCommand}.
 */
export interface GetStageCommandOutput extends GetStageResponse, __MetadataBearer {}

/**
 * <p>Gets information for the specified stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, GetStageCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, GetStageCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // GetStageRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetStageCommand(input);
 * const response = await client.send(command);
 * // { // GetStageResponse
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
 * @param GetStageCommandInput - {@link GetStageCommandInput}
 * @returns {@link GetStageCommandOutput}
 * @see {@link GetStageCommandInput} for command's `input` shape.
 * @see {@link GetStageCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
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
export class GetStageCommand extends $Command
  .classBuilder<
    GetStageCommandInput,
    GetStageCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "GetStage", {})
  .n("IVSRealTimeClient", "GetStageCommand")
  .sc(GetStage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStageRequest;
      output: GetStageResponse;
    };
    sdk: {
      input: GetStageCommandInput;
      output: GetStageCommandOutput;
    };
  };
}
