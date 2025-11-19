// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeScheduleRequest, DescribeScheduleResponse } from "../models/models_1";
import { DescribeSchedule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScheduleCommand}.
 */
export interface DescribeScheduleCommandInput extends DescribeScheduleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScheduleCommand}.
 */
export interface DescribeScheduleCommandOutput extends DescribeScheduleResponse, __MetadataBearer {}

/**
 * Get a channel schedule
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeScheduleCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeScheduleCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeScheduleRequest
 *   ChannelId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeScheduleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScheduleResponse
 * //   NextToken: "STRING_VALUE",
 * //   ScheduleActions: [ // __listOfScheduleAction
 * //     { // ScheduleAction
 * //       ActionName: "STRING_VALUE", // required
 * //       ScheduleActionSettings: { // ScheduleActionSettings
 * //         HlsId3SegmentTaggingSettings: { // HlsId3SegmentTaggingScheduleActionSettings
 * //           Tag: "STRING_VALUE",
 * //           Id3: "STRING_VALUE",
 * //         },
 * //         HlsTimedMetadataSettings: { // HlsTimedMetadataScheduleActionSettings
 * //           Id3: "STRING_VALUE", // required
 * //         },
 * //         InputPrepareSettings: { // InputPrepareScheduleActionSettings
 * //           InputAttachmentNameReference: "STRING_VALUE",
 * //           InputClippingSettings: { // InputClippingSettings
 * //             InputTimecodeSource: "ZEROBASED" || "EMBEDDED", // required
 * //             StartTimecode: { // StartTimecode
 * //               Timecode: "STRING_VALUE",
 * //             },
 * //             StopTimecode: { // StopTimecode
 * //               LastFrameClippingBehavior: "EXCLUDE_LAST_FRAME" || "INCLUDE_LAST_FRAME",
 * //               Timecode: "STRING_VALUE",
 * //             },
 * //           },
 * //           UrlPath: [ // __listOf__string
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         InputSwitchSettings: { // InputSwitchScheduleActionSettings
 * //           InputAttachmentNameReference: "STRING_VALUE", // required
 * //           InputClippingSettings: {
 * //             InputTimecodeSource: "ZEROBASED" || "EMBEDDED", // required
 * //             StartTimecode: {
 * //               Timecode: "STRING_VALUE",
 * //             },
 * //             StopTimecode: {
 * //               LastFrameClippingBehavior: "EXCLUDE_LAST_FRAME" || "INCLUDE_LAST_FRAME",
 * //               Timecode: "STRING_VALUE",
 * //             },
 * //           },
 * //           UrlPath: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         MotionGraphicsImageActivateSettings: { // MotionGraphicsActivateScheduleActionSettings
 * //           Duration: Number("long"),
 * //           PasswordParam: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //           Username: "STRING_VALUE",
 * //         },
 * //         MotionGraphicsImageDeactivateSettings: {},
 * //         PauseStateSettings: { // PauseStateScheduleActionSettings
 * //           Pipelines: [ // __listOfPipelinePauseStateSettings
 * //             { // PipelinePauseStateSettings
 * //               PipelineId: "PIPELINE_0" || "PIPELINE_1", // required
 * //             },
 * //           ],
 * //         },
 * //         Scte35InputSettings: { // Scte35InputScheduleActionSettings
 * //           InputAttachmentNameReference: "STRING_VALUE",
 * //           Mode: "FIXED" || "FOLLOW_ACTIVE", // required
 * //         },
 * //         Scte35ReturnToNetworkSettings: { // Scte35ReturnToNetworkScheduleActionSettings
 * //           SpliceEventId: Number("long"), // required
 * //         },
 * //         Scte35SpliceInsertSettings: { // Scte35SpliceInsertScheduleActionSettings
 * //           Duration: Number("long"),
 * //           SpliceEventId: Number("long"), // required
 * //         },
 * //         Scte35TimeSignalSettings: { // Scte35TimeSignalScheduleActionSettings
 * //           Scte35Descriptors: [ // __listOfScte35Descriptor // required
 * //             { // Scte35Descriptor
 * //               Scte35DescriptorSettings: { // Scte35DescriptorSettings
 * //                 SegmentationDescriptorScte35DescriptorSettings: { // Scte35SegmentationDescriptor
 * //                   DeliveryRestrictions: { // Scte35DeliveryRestrictions
 * //                     ArchiveAllowedFlag: "ARCHIVE_NOT_ALLOWED" || "ARCHIVE_ALLOWED", // required
 * //                     DeviceRestrictions: "NONE" || "RESTRICT_GROUP0" || "RESTRICT_GROUP1" || "RESTRICT_GROUP2", // required
 * //                     NoRegionalBlackoutFlag: "REGIONAL_BLACKOUT" || "NO_REGIONAL_BLACKOUT", // required
 * //                     WebDeliveryAllowedFlag: "WEB_DELIVERY_NOT_ALLOWED" || "WEB_DELIVERY_ALLOWED", // required
 * //                   },
 * //                   SegmentNum: Number("int"),
 * //                   SegmentationCancelIndicator: "SEGMENTATION_EVENT_NOT_CANCELED" || "SEGMENTATION_EVENT_CANCELED", // required
 * //                   SegmentationDuration: Number("long"),
 * //                   SegmentationEventId: Number("long"), // required
 * //                   SegmentationTypeId: Number("int"),
 * //                   SegmentationUpid: "STRING_VALUE",
 * //                   SegmentationUpidType: Number("int"),
 * //                   SegmentsExpected: Number("int"),
 * //                   SubSegmentNum: Number("int"),
 * //                   SubSegmentsExpected: Number("int"),
 * //                 },
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         StaticImageActivateSettings: { // StaticImageActivateScheduleActionSettings
 * //           Duration: Number("int"),
 * //           FadeIn: Number("int"),
 * //           FadeOut: Number("int"),
 * //           Height: Number("int"),
 * //           Image: { // InputLocation
 * //             PasswordParam: "STRING_VALUE",
 * //             Uri: "STRING_VALUE", // required
 * //             Username: "STRING_VALUE",
 * //           },
 * //           ImageX: Number("int"),
 * //           ImageY: Number("int"),
 * //           Layer: Number("int"),
 * //           Opacity: Number("int"),
 * //           Width: Number("int"),
 * //         },
 * //         StaticImageDeactivateSettings: { // StaticImageDeactivateScheduleActionSettings
 * //           FadeOut: Number("int"),
 * //           Layer: Number("int"),
 * //         },
 * //         StaticImageOutputActivateSettings: { // StaticImageOutputActivateScheduleActionSettings
 * //           Duration: Number("int"),
 * //           FadeIn: Number("int"),
 * //           FadeOut: Number("int"),
 * //           Height: Number("int"),
 * //           Image: {
 * //             PasswordParam: "STRING_VALUE",
 * //             Uri: "STRING_VALUE", // required
 * //             Username: "STRING_VALUE",
 * //           },
 * //           ImageX: Number("int"),
 * //           ImageY: Number("int"),
 * //           Layer: Number("int"),
 * //           Opacity: Number("int"),
 * //           OutputNames: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           Width: Number("int"),
 * //         },
 * //         StaticImageOutputDeactivateSettings: { // StaticImageOutputDeactivateScheduleActionSettings
 * //           FadeOut: Number("int"),
 * //           Layer: Number("int"),
 * //           OutputNames: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Id3SegmentTaggingSettings: { // Id3SegmentTaggingScheduleActionSettings
 * //           Id3: "STRING_VALUE",
 * //           Tag: "STRING_VALUE",
 * //         },
 * //         TimedMetadataSettings: { // TimedMetadataScheduleActionSettings
 * //           Id3: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       ScheduleActionStartSettings: { // ScheduleActionStartSettings
 * //         FixedModeScheduleActionStartSettings: { // FixedModeScheduleActionStartSettings
 * //           Time: "STRING_VALUE", // required
 * //         },
 * //         FollowModeScheduleActionStartSettings: { // FollowModeScheduleActionStartSettings
 * //           FollowPoint: "END" || "START", // required
 * //           ReferenceActionName: "STRING_VALUE", // required
 * //         },
 * //         ImmediateModeScheduleActionStartSettings: {},
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeScheduleCommandInput - {@link DescribeScheduleCommandInput}
 * @returns {@link DescribeScheduleCommandOutput}
 * @see {@link DescribeScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduleCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class DescribeScheduleCommand extends $Command
  .classBuilder<
    DescribeScheduleCommandInput,
    DescribeScheduleCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "DescribeSchedule", {})
  .n("MediaLiveClient", "DescribeScheduleCommand")
  .sc(DescribeSchedule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScheduleRequest;
      output: DescribeScheduleResponse;
    };
    sdk: {
      input: DescribeScheduleCommandInput;
      output: DescribeScheduleCommandOutput;
    };
  };
}
