// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { StartCompositionRequest, StartCompositionResponse } from "../models/models_0";
import { de_StartCompositionCommand, se_StartCompositionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartCompositionCommand}.
 */
export interface StartCompositionCommandInput extends StartCompositionRequest {}
/**
 * @public
 *
 * The output of {@link StartCompositionCommand}.
 */
export interface StartCompositionCommandOutput extends StartCompositionResponse, __MetadataBearer {}

/**
 * <p>Starts a Composition from a stage based on the configuration provided in the
 *          request.</p>
 *          <p>A Composition is an ephemeral resource that exists after this operation returns
 *          successfully. Composition stops and the resource is deleted:</p>
 *          <ul>
 *             <li>
 *                <p>When <a>StopComposition</a> is called.</p>
 *             </li>
 *             <li>
 *                <p>After a 1-minute timeout, when all participants are disconnected from the
 *                stage.</p>
 *             </li>
 *             <li>
 *                <p>After a 1-minute timeout, if there are no participants in the stage when
 *                StartComposition is called.</p>
 *             </li>
 *             <li>
 *                <p>When broadcasting to the IVS channel fails and all retries are exhausted.</p>
 *             </li>
 *             <li>
 *                <p>When broadcasting is disconnected and all attempts to reconnect are
 *                exhausted.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, StartCompositionCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, StartCompositionCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * const client = new IVSRealTimeClient(config);
 * const input = { // StartCompositionRequest
 *   stageArn: "STRING_VALUE", // required
 *   idempotencyToken: "STRING_VALUE",
 *   layout: { // LayoutConfiguration
 *     grid: { // GridConfiguration
 *       featuredParticipantAttribute: "STRING_VALUE",
 *       omitStoppedVideo: true || false,
 *       videoAspectRatio: "AUTO" || "VIDEO" || "SQUARE" || "PORTRAIT",
 *       videoFillMode: "FILL" || "COVER" || "CONTAIN",
 *       gridGap: Number("int"),
 *     },
 *     pip: { // PipConfiguration
 *       featuredParticipantAttribute: "STRING_VALUE",
 *       omitStoppedVideo: true || false,
 *       videoFillMode: "FILL" || "COVER" || "CONTAIN",
 *       gridGap: Number("int"),
 *       pipParticipantAttribute: "STRING_VALUE",
 *       pipBehavior: "STATIC" || "DYNAMIC",
 *       pipOffset: Number("int"),
 *       pipPosition: "TOP_LEFT" || "TOP_RIGHT" || "BOTTOM_LEFT" || "BOTTOM_RIGHT",
 *       pipWidth: Number("int"),
 *       pipHeight: Number("int"),
 *     },
 *   },
 *   destinations: [ // DestinationConfigurationList // required
 *     { // DestinationConfiguration
 *       name: "STRING_VALUE",
 *       channel: { // ChannelDestinationConfiguration
 *         channelArn: "STRING_VALUE", // required
 *         encoderConfigurationArn: "STRING_VALUE",
 *       },
 *       s3: { // S3DestinationConfiguration
 *         storageConfigurationArn: "STRING_VALUE", // required
 *         encoderConfigurationArns: [ // EncoderConfigurationArnList // required
 *           "STRING_VALUE",
 *         ],
 *         recordingConfiguration: { // RecordingConfiguration
 *           hlsConfiguration: { // CompositionRecordingHlsConfiguration
 *             targetSegmentDurationSeconds: Number("int"),
 *           },
 *           format: "STRING_VALUE",
 *         },
 *         thumbnailConfigurations: [ // CompositionThumbnailConfigurationList
 *           { // CompositionThumbnailConfiguration
 *             targetIntervalSeconds: Number("int"),
 *             storage: [ // ThumbnailStorageTypeList
 *               "SEQUENTIAL" || "LATEST",
 *             ],
 *           },
 *         ],
 *       },
 *     },
 *   ],
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartCompositionCommand(input);
 * const response = await client.send(command);
 * // { // StartCompositionResponse
 * //   composition: { // Composition
 * //     arn: "STRING_VALUE", // required
 * //     stageArn: "STRING_VALUE", // required
 * //     state: "STRING_VALUE", // required
 * //     layout: { // LayoutConfiguration
 * //       grid: { // GridConfiguration
 * //         featuredParticipantAttribute: "STRING_VALUE",
 * //         omitStoppedVideo: true || false,
 * //         videoAspectRatio: "AUTO" || "VIDEO" || "SQUARE" || "PORTRAIT",
 * //         videoFillMode: "FILL" || "COVER" || "CONTAIN",
 * //         gridGap: Number("int"),
 * //       },
 * //       pip: { // PipConfiguration
 * //         featuredParticipantAttribute: "STRING_VALUE",
 * //         omitStoppedVideo: true || false,
 * //         videoFillMode: "FILL" || "COVER" || "CONTAIN",
 * //         gridGap: Number("int"),
 * //         pipParticipantAttribute: "STRING_VALUE",
 * //         pipBehavior: "STATIC" || "DYNAMIC",
 * //         pipOffset: Number("int"),
 * //         pipPosition: "TOP_LEFT" || "TOP_RIGHT" || "BOTTOM_LEFT" || "BOTTOM_RIGHT",
 * //         pipWidth: Number("int"),
 * //         pipHeight: Number("int"),
 * //       },
 * //     },
 * //     destinations: [ // DestinationList // required
 * //       { // Destination
 * //         id: "STRING_VALUE", // required
 * //         state: "STRING_VALUE", // required
 * //         startTime: new Date("TIMESTAMP"),
 * //         endTime: new Date("TIMESTAMP"),
 * //         configuration: { // DestinationConfiguration
 * //           name: "STRING_VALUE",
 * //           channel: { // ChannelDestinationConfiguration
 * //             channelArn: "STRING_VALUE", // required
 * //             encoderConfigurationArn: "STRING_VALUE",
 * //           },
 * //           s3: { // S3DestinationConfiguration
 * //             storageConfigurationArn: "STRING_VALUE", // required
 * //             encoderConfigurationArns: [ // EncoderConfigurationArnList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             recordingConfiguration: { // RecordingConfiguration
 * //               hlsConfiguration: { // CompositionRecordingHlsConfiguration
 * //                 targetSegmentDurationSeconds: Number("int"),
 * //               },
 * //               format: "STRING_VALUE",
 * //             },
 * //             thumbnailConfigurations: [ // CompositionThumbnailConfigurationList
 * //               { // CompositionThumbnailConfiguration
 * //                 targetIntervalSeconds: Number("int"),
 * //                 storage: [ // ThumbnailStorageTypeList
 * //                   "SEQUENTIAL" || "LATEST",
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         detail: { // DestinationDetail
 * //           s3: { // S3Detail
 * //             recordingPrefix: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param StartCompositionCommandInput - {@link StartCompositionCommandInput}
 * @returns {@link StartCompositionCommandOutput}
 * @see {@link StartCompositionCommandInput} for command's `input` shape.
 * @see {@link StartCompositionCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
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
 * @public
 */
export class StartCompositionCommand extends $Command
  .classBuilder<
    StartCompositionCommandInput,
    StartCompositionCommandOutput,
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
  .s("AmazonInteractiveVideoServiceRealTime", "StartComposition", {})
  .n("IVSRealTimeClient", "StartCompositionCommand")
  .f(void 0, void 0)
  .ser(se_StartCompositionCommand)
  .de(de_StartCompositionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCompositionRequest;
      output: StartCompositionResponse;
    };
    sdk: {
      input: StartCompositionCommandInput;
      output: StartCompositionCommandOutput;
    };
  };
}
