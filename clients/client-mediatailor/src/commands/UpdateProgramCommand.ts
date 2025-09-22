// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { UpdateProgramRequest, UpdateProgramResponse } from "../models/models_0";
import { UpdateProgram } from "../schemas/schemas_1_Channel";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProgramCommand}.
 */
export interface UpdateProgramCommandInput extends UpdateProgramRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProgramCommand}.
 */
export interface UpdateProgramCommandOutput extends UpdateProgramResponse, __MetadataBearer {}

/**
 * <p>Updates a program within a channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, UpdateProgramCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, UpdateProgramCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // UpdateProgramRequest
 *   AdBreaks: [ // __listOfAdBreak
 *     { // AdBreak
 *       MessageType: "SPLICE_INSERT" || "TIME_SIGNAL",
 *       OffsetMillis: Number("long"), // required
 *       Slate: { // SlateSource
 *         SourceLocationName: "STRING_VALUE",
 *         VodSourceName: "STRING_VALUE",
 *       },
 *       SpliceInsertMessage: { // SpliceInsertMessage
 *         AvailNum: Number("int"),
 *         AvailsExpected: Number("int"),
 *         SpliceEventId: Number("int"),
 *         UniqueProgramId: Number("int"),
 *       },
 *       TimeSignalMessage: { // TimeSignalMessage
 *         SegmentationDescriptors: [ // SegmentationDescriptorList
 *           { // SegmentationDescriptor
 *             SegmentationEventId: Number("int"),
 *             SegmentationUpidType: Number("int"),
 *             SegmentationUpid: "STRING_VALUE",
 *             SegmentationTypeId: Number("int"),
 *             SegmentNum: Number("int"),
 *             SegmentsExpected: Number("int"),
 *             SubSegmentNum: Number("int"),
 *             SubSegmentsExpected: Number("int"),
 *           },
 *         ],
 *       },
 *       AdBreakMetadata: [ // AdBreakMetadataList
 *         { // KeyValuePair
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   ChannelName: "STRING_VALUE", // required
 *   ProgramName: "STRING_VALUE", // required
 *   ScheduleConfiguration: { // UpdateProgramScheduleConfiguration
 *     Transition: { // UpdateProgramTransition
 *       ScheduledStartTimeMillis: Number("long"),
 *       DurationMillis: Number("long"),
 *     },
 *     ClipRange: { // ClipRange
 *       EndOffsetMillis: Number("long"),
 *       StartOffsetMillis: Number("long"),
 *     },
 *   },
 *   AudienceMedia: [ // __listOfAudienceMedia
 *     { // AudienceMedia
 *       Audience: "STRING_VALUE",
 *       AlternateMedia: [ // __listOfAlternateMedia
 *         { // AlternateMedia
 *           SourceLocationName: "STRING_VALUE",
 *           LiveSourceName: "STRING_VALUE",
 *           VodSourceName: "STRING_VALUE",
 *           ClipRange: {
 *             EndOffsetMillis: Number("long"),
 *             StartOffsetMillis: Number("long"),
 *           },
 *           ScheduledStartTimeMillis: Number("long"),
 *           AdBreaks: [
 *             {
 *               MessageType: "SPLICE_INSERT" || "TIME_SIGNAL",
 *               OffsetMillis: Number("long"), // required
 *               Slate: {
 *                 SourceLocationName: "STRING_VALUE",
 *                 VodSourceName: "STRING_VALUE",
 *               },
 *               SpliceInsertMessage: {
 *                 AvailNum: Number("int"),
 *                 AvailsExpected: Number("int"),
 *                 SpliceEventId: Number("int"),
 *                 UniqueProgramId: Number("int"),
 *               },
 *               TimeSignalMessage: {
 *                 SegmentationDescriptors: [
 *                   {
 *                     SegmentationEventId: Number("int"),
 *                     SegmentationUpidType: Number("int"),
 *                     SegmentationUpid: "STRING_VALUE",
 *                     SegmentationTypeId: Number("int"),
 *                     SegmentNum: Number("int"),
 *                     SegmentsExpected: Number("int"),
 *                     SubSegmentNum: Number("int"),
 *                     SubSegmentsExpected: Number("int"),
 *                   },
 *                 ],
 *               },
 *               AdBreakMetadata: [
 *                 {
 *                   Key: "STRING_VALUE", // required
 *                   Value: "STRING_VALUE", // required
 *                 },
 *               ],
 *             },
 *           ],
 *           DurationMillis: Number("long"),
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateProgramCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProgramResponse
 * //   AdBreaks: [ // __listOfAdBreak
 * //     { // AdBreak
 * //       MessageType: "SPLICE_INSERT" || "TIME_SIGNAL",
 * //       OffsetMillis: Number("long"), // required
 * //       Slate: { // SlateSource
 * //         SourceLocationName: "STRING_VALUE",
 * //         VodSourceName: "STRING_VALUE",
 * //       },
 * //       SpliceInsertMessage: { // SpliceInsertMessage
 * //         AvailNum: Number("int"),
 * //         AvailsExpected: Number("int"),
 * //         SpliceEventId: Number("int"),
 * //         UniqueProgramId: Number("int"),
 * //       },
 * //       TimeSignalMessage: { // TimeSignalMessage
 * //         SegmentationDescriptors: [ // SegmentationDescriptorList
 * //           { // SegmentationDescriptor
 * //             SegmentationEventId: Number("int"),
 * //             SegmentationUpidType: Number("int"),
 * //             SegmentationUpid: "STRING_VALUE",
 * //             SegmentationTypeId: Number("int"),
 * //             SegmentNum: Number("int"),
 * //             SegmentsExpected: Number("int"),
 * //             SubSegmentNum: Number("int"),
 * //             SubSegmentsExpected: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       AdBreakMetadata: [ // AdBreakMetadataList
 * //         { // KeyValuePair
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Arn: "STRING_VALUE",
 * //   ChannelName: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   ProgramName: "STRING_VALUE",
 * //   SourceLocationName: "STRING_VALUE",
 * //   VodSourceName: "STRING_VALUE",
 * //   LiveSourceName: "STRING_VALUE",
 * //   ClipRange: { // ClipRange
 * //     EndOffsetMillis: Number("long"),
 * //     StartOffsetMillis: Number("long"),
 * //   },
 * //   DurationMillis: Number("long"),
 * //   ScheduledStartTime: new Date("TIMESTAMP"),
 * //   AudienceMedia: [ // __listOfAudienceMedia
 * //     { // AudienceMedia
 * //       Audience: "STRING_VALUE",
 * //       AlternateMedia: [ // __listOfAlternateMedia
 * //         { // AlternateMedia
 * //           SourceLocationName: "STRING_VALUE",
 * //           LiveSourceName: "STRING_VALUE",
 * //           VodSourceName: "STRING_VALUE",
 * //           ClipRange: {
 * //             EndOffsetMillis: Number("long"),
 * //             StartOffsetMillis: Number("long"),
 * //           },
 * //           ScheduledStartTimeMillis: Number("long"),
 * //           AdBreaks: [
 * //             {
 * //               MessageType: "SPLICE_INSERT" || "TIME_SIGNAL",
 * //               OffsetMillis: Number("long"), // required
 * //               Slate: {
 * //                 SourceLocationName: "STRING_VALUE",
 * //                 VodSourceName: "STRING_VALUE",
 * //               },
 * //               SpliceInsertMessage: {
 * //                 AvailNum: Number("int"),
 * //                 AvailsExpected: Number("int"),
 * //                 SpliceEventId: Number("int"),
 * //                 UniqueProgramId: Number("int"),
 * //               },
 * //               TimeSignalMessage: {
 * //                 SegmentationDescriptors: [
 * //                   {
 * //                     SegmentationEventId: Number("int"),
 * //                     SegmentationUpidType: Number("int"),
 * //                     SegmentationUpid: "STRING_VALUE",
 * //                     SegmentationTypeId: Number("int"),
 * //                     SegmentNum: Number("int"),
 * //                     SegmentsExpected: Number("int"),
 * //                     SubSegmentNum: Number("int"),
 * //                     SubSegmentsExpected: Number("int"),
 * //                   },
 * //                 ],
 * //               },
 * //               AdBreakMetadata: [
 * //                 {
 * //                   Key: "STRING_VALUE", // required
 * //                   Value: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           DurationMillis: Number("long"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateProgramCommandInput - {@link UpdateProgramCommandInput}
 * @returns {@link UpdateProgramCommandOutput}
 * @see {@link UpdateProgramCommandInput} for command's `input` shape.
 * @see {@link UpdateProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class UpdateProgramCommand extends $Command
  .classBuilder<
    UpdateProgramCommandInput,
    UpdateProgramCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "UpdateProgram", {})
  .n("MediaTailorClient", "UpdateProgramCommand")
  .sc(UpdateProgram)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProgramRequest;
      output: UpdateProgramResponse;
    };
    sdk: {
      input: UpdateProgramCommandInput;
      output: UpdateProgramCommandOutput;
    };
  };
}
