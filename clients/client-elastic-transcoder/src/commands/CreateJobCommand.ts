// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateJobRequest, CreateJobResponse } from "../models/models_0";
import { de_CreateJobCommand, se_CreateJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateJobCommand}.
 */
export interface CreateJobCommandInput extends CreateJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobCommand}.
 */
export interface CreateJobCommandOutput extends CreateJobResponse, __MetadataBearer {}

/**
 * <p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified
 *             plus information about the job that is created.</p>
 *         <p>If you have specified more than one output for your jobs (for example, one output for the
 *             Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to
 *             list the jobs (as opposed to the AWS Console).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, CreateJobCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, CreateJobCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const input = { // CreateJobRequest
 *   PipelineId: "STRING_VALUE", // required
 *   Input: { // JobInput
 *     Key: "STRING_VALUE",
 *     FrameRate: "STRING_VALUE",
 *     Resolution: "STRING_VALUE",
 *     AspectRatio: "STRING_VALUE",
 *     Interlaced: "STRING_VALUE",
 *     Container: "STRING_VALUE",
 *     Encryption: { // Encryption
 *       Mode: "STRING_VALUE",
 *       Key: "STRING_VALUE",
 *       KeyMd5: "STRING_VALUE",
 *       InitializationVector: "STRING_VALUE",
 *     },
 *     TimeSpan: { // TimeSpan
 *       StartTime: "STRING_VALUE",
 *       Duration: "STRING_VALUE",
 *     },
 *     InputCaptions: { // InputCaptions
 *       MergePolicy: "STRING_VALUE",
 *       CaptionSources: [ // CaptionSources
 *         { // CaptionSource
 *           Key: "STRING_VALUE",
 *           Language: "STRING_VALUE",
 *           TimeOffset: "STRING_VALUE",
 *           Label: "STRING_VALUE",
 *           Encryption: {
 *             Mode: "STRING_VALUE",
 *             Key: "STRING_VALUE",
 *             KeyMd5: "STRING_VALUE",
 *             InitializationVector: "STRING_VALUE",
 *           },
 *         },
 *       ],
 *     },
 *     DetectedProperties: { // DetectedProperties
 *       Width: Number("int"),
 *       Height: Number("int"),
 *       FrameRate: "STRING_VALUE",
 *       FileSize: Number("long"),
 *       DurationMillis: Number("long"),
 *     },
 *   },
 *   Inputs: [ // JobInputs
 *     {
 *       Key: "STRING_VALUE",
 *       FrameRate: "STRING_VALUE",
 *       Resolution: "STRING_VALUE",
 *       AspectRatio: "STRING_VALUE",
 *       Interlaced: "STRING_VALUE",
 *       Container: "STRING_VALUE",
 *       Encryption: "<Encryption>",
 *       TimeSpan: {
 *         StartTime: "STRING_VALUE",
 *         Duration: "STRING_VALUE",
 *       },
 *       InputCaptions: {
 *         MergePolicy: "STRING_VALUE",
 *         CaptionSources: [
 *           {
 *             Key: "STRING_VALUE",
 *             Language: "STRING_VALUE",
 *             TimeOffset: "STRING_VALUE",
 *             Label: "STRING_VALUE",
 *             Encryption: "<Encryption>",
 *           },
 *         ],
 *       },
 *       DetectedProperties: {
 *         Width: Number("int"),
 *         Height: Number("int"),
 *         FrameRate: "STRING_VALUE",
 *         FileSize: Number("long"),
 *         DurationMillis: Number("long"),
 *       },
 *     },
 *   ],
 *   Output: { // CreateJobOutput
 *     Key: "STRING_VALUE",
 *     ThumbnailPattern: "STRING_VALUE",
 *     ThumbnailEncryption: "<Encryption>",
 *     Rotate: "STRING_VALUE",
 *     PresetId: "STRING_VALUE",
 *     SegmentDuration: "STRING_VALUE",
 *     Watermarks: [ // JobWatermarks
 *       { // JobWatermark
 *         PresetWatermarkId: "STRING_VALUE",
 *         InputKey: "STRING_VALUE",
 *         Encryption: "<Encryption>",
 *       },
 *     ],
 *     AlbumArt: { // JobAlbumArt
 *       MergePolicy: "STRING_VALUE",
 *       Artwork: [ // Artworks
 *         { // Artwork
 *           InputKey: "STRING_VALUE",
 *           MaxWidth: "STRING_VALUE",
 *           MaxHeight: "STRING_VALUE",
 *           SizingPolicy: "STRING_VALUE",
 *           PaddingPolicy: "STRING_VALUE",
 *           AlbumArtFormat: "STRING_VALUE",
 *           Encryption: "<Encryption>",
 *         },
 *       ],
 *     },
 *     Composition: [ // Composition
 *       { // Clip
 *         TimeSpan: "<TimeSpan>",
 *       },
 *     ],
 *     Captions: { // Captions
 *       MergePolicy: "STRING_VALUE",
 *       CaptionSources: [
 *         {
 *           Key: "STRING_VALUE",
 *           Language: "STRING_VALUE",
 *           TimeOffset: "STRING_VALUE",
 *           Label: "STRING_VALUE",
 *           Encryption: "<Encryption>",
 *         },
 *       ],
 *       CaptionFormats: [ // CaptionFormats
 *         { // CaptionFormat
 *           Format: "STRING_VALUE",
 *           Pattern: "STRING_VALUE",
 *           Encryption: "<Encryption>",
 *         },
 *       ],
 *     },
 *     Encryption: "<Encryption>",
 *   },
 *   Outputs: [ // CreateJobOutputs
 *     {
 *       Key: "STRING_VALUE",
 *       ThumbnailPattern: "STRING_VALUE",
 *       ThumbnailEncryption: "<Encryption>",
 *       Rotate: "STRING_VALUE",
 *       PresetId: "STRING_VALUE",
 *       SegmentDuration: "STRING_VALUE",
 *       Watermarks: [
 *         {
 *           PresetWatermarkId: "STRING_VALUE",
 *           InputKey: "STRING_VALUE",
 *           Encryption: "<Encryption>",
 *         },
 *       ],
 *       AlbumArt: {
 *         MergePolicy: "STRING_VALUE",
 *         Artwork: [
 *           {
 *             InputKey: "STRING_VALUE",
 *             MaxWidth: "STRING_VALUE",
 *             MaxHeight: "STRING_VALUE",
 *             SizingPolicy: "STRING_VALUE",
 *             PaddingPolicy: "STRING_VALUE",
 *             AlbumArtFormat: "STRING_VALUE",
 *             Encryption: "<Encryption>",
 *           },
 *         ],
 *       },
 *       Composition: [
 *         {
 *           TimeSpan: "<TimeSpan>",
 *         },
 *       ],
 *       Captions: {
 *         MergePolicy: "STRING_VALUE",
 *         CaptionSources: [
 *           {
 *             Key: "STRING_VALUE",
 *             Language: "STRING_VALUE",
 *             TimeOffset: "STRING_VALUE",
 *             Label: "STRING_VALUE",
 *             Encryption: "<Encryption>",
 *           },
 *         ],
 *         CaptionFormats: [
 *           {
 *             Format: "STRING_VALUE",
 *             Pattern: "STRING_VALUE",
 *             Encryption: "<Encryption>",
 *           },
 *         ],
 *       },
 *       Encryption: "<Encryption>",
 *     },
 *   ],
 *   OutputKeyPrefix: "STRING_VALUE",
 *   Playlists: [ // CreateJobPlaylists
 *     { // CreateJobPlaylist
 *       Name: "STRING_VALUE",
 *       Format: "STRING_VALUE",
 *       OutputKeys: [ // OutputKeys
 *         "STRING_VALUE",
 *       ],
 *       HlsContentProtection: { // HlsContentProtection
 *         Method: "STRING_VALUE",
 *         Key: "STRING_VALUE",
 *         KeyMd5: "STRING_VALUE",
 *         InitializationVector: "STRING_VALUE",
 *         LicenseAcquisitionUrl: "STRING_VALUE",
 *         KeyStoragePolicy: "STRING_VALUE",
 *       },
 *       PlayReadyDrm: { // PlayReadyDrm
 *         Format: "STRING_VALUE",
 *         Key: "STRING_VALUE",
 *         KeyMd5: "STRING_VALUE",
 *         KeyId: "STRING_VALUE",
 *         InitializationVector: "STRING_VALUE",
 *         LicenseAcquisitionUrl: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   UserMetadata: { // UserMetadata
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateJobResponse
 * //   Job: { // Job
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     PipelineId: "STRING_VALUE",
 * //     Input: { // JobInput
 * //       Key: "STRING_VALUE",
 * //       FrameRate: "STRING_VALUE",
 * //       Resolution: "STRING_VALUE",
 * //       AspectRatio: "STRING_VALUE",
 * //       Interlaced: "STRING_VALUE",
 * //       Container: "STRING_VALUE",
 * //       Encryption: { // Encryption
 * //         Mode: "STRING_VALUE",
 * //         Key: "STRING_VALUE",
 * //         KeyMd5: "STRING_VALUE",
 * //         InitializationVector: "STRING_VALUE",
 * //       },
 * //       TimeSpan: { // TimeSpan
 * //         StartTime: "STRING_VALUE",
 * //         Duration: "STRING_VALUE",
 * //       },
 * //       InputCaptions: { // InputCaptions
 * //         MergePolicy: "STRING_VALUE",
 * //         CaptionSources: [ // CaptionSources
 * //           { // CaptionSource
 * //             Key: "STRING_VALUE",
 * //             Language: "STRING_VALUE",
 * //             TimeOffset: "STRING_VALUE",
 * //             Label: "STRING_VALUE",
 * //             Encryption: {
 * //               Mode: "STRING_VALUE",
 * //               Key: "STRING_VALUE",
 * //               KeyMd5: "STRING_VALUE",
 * //               InitializationVector: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       DetectedProperties: { // DetectedProperties
 * //         Width: Number("int"),
 * //         Height: Number("int"),
 * //         FrameRate: "STRING_VALUE",
 * //         FileSize: Number("long"),
 * //         DurationMillis: Number("long"),
 * //       },
 * //     },
 * //     Inputs: [ // JobInputs
 * //       {
 * //         Key: "STRING_VALUE",
 * //         FrameRate: "STRING_VALUE",
 * //         Resolution: "STRING_VALUE",
 * //         AspectRatio: "STRING_VALUE",
 * //         Interlaced: "STRING_VALUE",
 * //         Container: "STRING_VALUE",
 * //         Encryption: "<Encryption>",
 * //         TimeSpan: {
 * //           StartTime: "STRING_VALUE",
 * //           Duration: "STRING_VALUE",
 * //         },
 * //         InputCaptions: {
 * //           MergePolicy: "STRING_VALUE",
 * //           CaptionSources: [
 * //             {
 * //               Key: "STRING_VALUE",
 * //               Language: "STRING_VALUE",
 * //               TimeOffset: "STRING_VALUE",
 * //               Label: "STRING_VALUE",
 * //               Encryption: "<Encryption>",
 * //             },
 * //           ],
 * //         },
 * //         DetectedProperties: {
 * //           Width: Number("int"),
 * //           Height: Number("int"),
 * //           FrameRate: "STRING_VALUE",
 * //           FileSize: Number("long"),
 * //           DurationMillis: Number("long"),
 * //         },
 * //       },
 * //     ],
 * //     Output: { // JobOutput
 * //       Id: "STRING_VALUE",
 * //       Key: "STRING_VALUE",
 * //       ThumbnailPattern: "STRING_VALUE",
 * //       ThumbnailEncryption: "<Encryption>",
 * //       Rotate: "STRING_VALUE",
 * //       PresetId: "STRING_VALUE",
 * //       SegmentDuration: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       StatusDetail: "STRING_VALUE",
 * //       Duration: Number("long"),
 * //       Width: Number("int"),
 * //       Height: Number("int"),
 * //       FrameRate: "STRING_VALUE",
 * //       FileSize: Number("long"),
 * //       DurationMillis: Number("long"),
 * //       Watermarks: [ // JobWatermarks
 * //         { // JobWatermark
 * //           PresetWatermarkId: "STRING_VALUE",
 * //           InputKey: "STRING_VALUE",
 * //           Encryption: "<Encryption>",
 * //         },
 * //       ],
 * //       AlbumArt: { // JobAlbumArt
 * //         MergePolicy: "STRING_VALUE",
 * //         Artwork: [ // Artworks
 * //           { // Artwork
 * //             InputKey: "STRING_VALUE",
 * //             MaxWidth: "STRING_VALUE",
 * //             MaxHeight: "STRING_VALUE",
 * //             SizingPolicy: "STRING_VALUE",
 * //             PaddingPolicy: "STRING_VALUE",
 * //             AlbumArtFormat: "STRING_VALUE",
 * //             Encryption: "<Encryption>",
 * //           },
 * //         ],
 * //       },
 * //       Composition: [ // Composition
 * //         { // Clip
 * //           TimeSpan: "<TimeSpan>",
 * //         },
 * //       ],
 * //       Captions: { // Captions
 * //         MergePolicy: "STRING_VALUE",
 * //         CaptionSources: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Language: "STRING_VALUE",
 * //             TimeOffset: "STRING_VALUE",
 * //             Label: "STRING_VALUE",
 * //             Encryption: "<Encryption>",
 * //           },
 * //         ],
 * //         CaptionFormats: [ // CaptionFormats
 * //           { // CaptionFormat
 * //             Format: "STRING_VALUE",
 * //             Pattern: "STRING_VALUE",
 * //             Encryption: "<Encryption>",
 * //           },
 * //         ],
 * //       },
 * //       Encryption: "<Encryption>",
 * //       AppliedColorSpaceConversion: "STRING_VALUE",
 * //     },
 * //     Outputs: [ // JobOutputs
 * //       {
 * //         Id: "STRING_VALUE",
 * //         Key: "STRING_VALUE",
 * //         ThumbnailPattern: "STRING_VALUE",
 * //         ThumbnailEncryption: "<Encryption>",
 * //         Rotate: "STRING_VALUE",
 * //         PresetId: "STRING_VALUE",
 * //         SegmentDuration: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         StatusDetail: "STRING_VALUE",
 * //         Duration: Number("long"),
 * //         Width: Number("int"),
 * //         Height: Number("int"),
 * //         FrameRate: "STRING_VALUE",
 * //         FileSize: Number("long"),
 * //         DurationMillis: Number("long"),
 * //         Watermarks: [
 * //           {
 * //             PresetWatermarkId: "STRING_VALUE",
 * //             InputKey: "STRING_VALUE",
 * //             Encryption: "<Encryption>",
 * //           },
 * //         ],
 * //         AlbumArt: {
 * //           MergePolicy: "STRING_VALUE",
 * //           Artwork: [
 * //             {
 * //               InputKey: "STRING_VALUE",
 * //               MaxWidth: "STRING_VALUE",
 * //               MaxHeight: "STRING_VALUE",
 * //               SizingPolicy: "STRING_VALUE",
 * //               PaddingPolicy: "STRING_VALUE",
 * //               AlbumArtFormat: "STRING_VALUE",
 * //               Encryption: "<Encryption>",
 * //             },
 * //           ],
 * //         },
 * //         Composition: [
 * //           {
 * //             TimeSpan: "<TimeSpan>",
 * //           },
 * //         ],
 * //         Captions: {
 * //           MergePolicy: "STRING_VALUE",
 * //           CaptionSources: [
 * //             {
 * //               Key: "STRING_VALUE",
 * //               Language: "STRING_VALUE",
 * //               TimeOffset: "STRING_VALUE",
 * //               Label: "STRING_VALUE",
 * //               Encryption: "<Encryption>",
 * //             },
 * //           ],
 * //           CaptionFormats: [
 * //             {
 * //               Format: "STRING_VALUE",
 * //               Pattern: "STRING_VALUE",
 * //               Encryption: "<Encryption>",
 * //             },
 * //           ],
 * //         },
 * //         Encryption: "<Encryption>",
 * //         AppliedColorSpaceConversion: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OutputKeyPrefix: "STRING_VALUE",
 * //     Playlists: [ // Playlists
 * //       { // Playlist
 * //         Name: "STRING_VALUE",
 * //         Format: "STRING_VALUE",
 * //         OutputKeys: [ // OutputKeys
 * //           "STRING_VALUE",
 * //         ],
 * //         HlsContentProtection: { // HlsContentProtection
 * //           Method: "STRING_VALUE",
 * //           Key: "STRING_VALUE",
 * //           KeyMd5: "STRING_VALUE",
 * //           InitializationVector: "STRING_VALUE",
 * //           LicenseAcquisitionUrl: "STRING_VALUE",
 * //           KeyStoragePolicy: "STRING_VALUE",
 * //         },
 * //         PlayReadyDrm: { // PlayReadyDrm
 * //           Format: "STRING_VALUE",
 * //           Key: "STRING_VALUE",
 * //           KeyMd5: "STRING_VALUE",
 * //           KeyId: "STRING_VALUE",
 * //           InitializationVector: "STRING_VALUE",
 * //           LicenseAcquisitionUrl: "STRING_VALUE",
 * //         },
 * //         Status: "STRING_VALUE",
 * //         StatusDetail: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Status: "STRING_VALUE",
 * //     UserMetadata: { // UserMetadata
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Timing: { // Timing
 * //       SubmitTimeMillis: Number("long"),
 * //       StartTimeMillis: Number("long"),
 * //       FinishTimeMillis: Number("long"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateJobCommandInput - {@link CreateJobCommandInput}
 * @returns {@link CreateJobCommandOutput}
 * @see {@link CreateJobCommandInput} for command's `input` shape.
 * @see {@link CreateJobCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for ElasticTranscoderClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>General authentication failure. The request was not signed correctly.</p>
 *
 * @throws {@link IncompatibleVersionException} (client fault)
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Too many operations for a given AWS account. For example, the number of pipelines
 *             exceeds the maximum allowed.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist or is not available. For example, the pipeline
 *             to which you're trying to add a job doesn't exist or is still being created.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more required parameter values were not provided in the request.</p>
 *
 * @throws {@link ElasticTranscoderServiceException}
 * <p>Base exception class for all service exceptions from ElasticTranscoder service.</p>
 *
 * @public
 */
export class CreateJobCommand extends $Command
  .classBuilder<
    CreateJobCommandInput,
    CreateJobCommandOutput,
    ElasticTranscoderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElasticTranscoderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EtsCustomerService", "CreateJob", {})
  .n("ElasticTranscoderClient", "CreateJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateJobCommand)
  .de(de_CreateJobCommand)
  .build() {}
