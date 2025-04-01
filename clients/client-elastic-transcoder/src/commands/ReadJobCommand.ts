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
import { ReadJobRequest, ReadJobResponse } from "../models/models_0";
import { de_ReadJobCommand, se_ReadJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReadJobCommand}.
 */
export interface ReadJobCommandInput extends ReadJobRequest {}
/**
 * @public
 *
 * The output of {@link ReadJobCommand}.
 */
export interface ReadJobCommandOutput extends ReadJobResponse, __MetadataBearer {}

/**
 * <p>The ReadJob operation returns detailed information about a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ReadJobCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ReadJobCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const input = { // ReadJobRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new ReadJobCommand(input);
 * const response = await client.send(command);
 * // { // ReadJobResponse
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
 * @param ReadJobCommandInput - {@link ReadJobCommandInput}
 * @returns {@link ReadJobCommandOutput}
 * @see {@link ReadJobCommandInput} for command's `input` shape.
 * @see {@link ReadJobCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ReadJobCommand extends $Command
  .classBuilder<
    ReadJobCommandInput,
    ReadJobCommandOutput,
    ElasticTranscoderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticTranscoderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EtsCustomerService", "ReadJob", {})
  .n("ElasticTranscoderClient", "ReadJobCommand")
  .f(void 0, void 0)
  .ser(se_ReadJobCommand)
  .de(de_ReadJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReadJobRequest;
      output: ReadJobResponse;
    };
    sdk: {
      input: ReadJobCommandInput;
      output: ReadJobCommandOutput;
    };
  };
}
