// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { GetCompositionRequest, GetCompositionResponse } from "../models/models_0";
import { de_GetCompositionCommand, se_GetCompositionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCompositionCommand}.
 */
export interface GetCompositionCommandInput extends GetCompositionRequest {}
/**
 * @public
 *
 * The output of {@link GetCompositionCommand}.
 */
export interface GetCompositionCommandOutput extends GetCompositionResponse, __MetadataBearer {}

/**
 * <p>Get information about the specified Composition resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, GetCompositionCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, GetCompositionCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // GetCompositionRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetCompositionCommand(input);
 * const response = await client.send(command);
 * // { // GetCompositionResponse
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
 * //         participantOrderAttribute: "STRING_VALUE",
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
 * //         participantOrderAttribute: "STRING_VALUE",
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
 * @param GetCompositionCommandInput - {@link GetCompositionCommandInput}
 * @returns {@link GetCompositionCommandOutput}
 * @see {@link GetCompositionCommandInput} for command's `input` shape.
 * @see {@link GetCompositionCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetCompositionCommand extends $Command
  .classBuilder<
    GetCompositionCommandInput,
    GetCompositionCommandOutput,
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
  .s("AmazonInteractiveVideoServiceRealTime", "GetComposition", {})
  .n("IVSRealTimeClient", "GetCompositionCommand")
  .f(void 0, void 0)
  .ser(se_GetCompositionCommand)
  .de(de_GetCompositionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCompositionRequest;
      output: GetCompositionResponse;
    };
    sdk: {
      input: GetCompositionCommandInput;
      output: GetCompositionCommandOutput;
    };
  };
}
