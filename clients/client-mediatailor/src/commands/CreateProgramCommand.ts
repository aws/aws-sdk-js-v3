// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { CreateProgramRequest, CreateProgramResponse } from "../models/models_0";
import { de_CreateProgramCommand, se_CreateProgramCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProgramCommand}.
 */
export interface CreateProgramCommandInput extends CreateProgramRequest {}
/**
 * @public
 *
 * The output of {@link CreateProgramCommand}.
 */
export interface CreateProgramCommandOutput extends CreateProgramResponse, __MetadataBearer {}

/**
 * <p>Creates a program within a channel. For information about programs, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-programs.html">Working with programs</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, CreateProgramCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, CreateProgramCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // CreateProgramRequest
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
 *   LiveSourceName: "STRING_VALUE",
 *   ProgramName: "STRING_VALUE", // required
 *   ScheduleConfiguration: { // ScheduleConfiguration
 *     Transition: { // Transition
 *       DurationMillis: Number("long"),
 *       RelativePosition: "BEFORE_PROGRAM" || "AFTER_PROGRAM", // required
 *       RelativeProgram: "STRING_VALUE",
 *       ScheduledStartTimeMillis: Number("long"),
 *       Type: "STRING_VALUE", // required
 *     },
 *     ClipRange: { // ClipRange
 *       EndOffsetMillis: Number("long"),
 *       StartOffsetMillis: Number("long"),
 *     },
 *   },
 *   SourceLocationName: "STRING_VALUE", // required
 *   VodSourceName: "STRING_VALUE",
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
 * const command = new CreateProgramCommand(input);
 * const response = await client.send(command);
 * // { // CreateProgramResponse
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
 * //   LiveSourceName: "STRING_VALUE",
 * //   ProgramName: "STRING_VALUE",
 * //   ScheduledStartTime: new Date("TIMESTAMP"),
 * //   SourceLocationName: "STRING_VALUE",
 * //   VodSourceName: "STRING_VALUE",
 * //   ClipRange: { // ClipRange
 * //     EndOffsetMillis: Number("long"),
 * //     StartOffsetMillis: Number("long"),
 * //   },
 * //   DurationMillis: Number("long"),
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
 * @param CreateProgramCommandInput - {@link CreateProgramCommandInput}
 * @returns {@link CreateProgramCommandOutput}
 * @see {@link CreateProgramCommandInput} for command's `input` shape.
 * @see {@link CreateProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 * @public
 */
export class CreateProgramCommand extends $Command
  .classBuilder<
    CreateProgramCommandInput,
    CreateProgramCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaTailor", "CreateProgram", {})
  .n("MediaTailorClient", "CreateProgramCommand")
  .f(void 0, void 0)
  .ser(se_CreateProgramCommand)
  .de(de_CreateProgramCommand)
  .build() {}
