// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { ProbeRequest, ProbeResponse } from "../models/models_2";
import { de_ProbeCommand, se_ProbeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ProbeCommand}.
 */
export interface ProbeCommandInput extends ProbeRequest {}
/**
 * @public
 *
 * The output of {@link ProbeCommand}.
 */
export interface ProbeCommandOutput extends ProbeResponse, __MetadataBearer {}

/**
 * Use Probe to obtain detailed information about your input media files. Probe returns a JSON that includes container, codec, frame rate, resolution, track count, audio layout, captions, and more. You can use this information to learn more about your media files, or to help make decisions while automating your transcoding workflow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, ProbeCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, ProbeCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const input = { // ProbeRequest
 *   InputFiles: [ // __listOfProbeInputFile
 *     { // ProbeInputFile
 *       FileUrl: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ProbeCommand(input);
 * const response = await client.send(command);
 * // { // ProbeResponse
 * //   ProbeResults: [ // __listOfProbeResult
 * //     { // ProbeResult
 * //       Container: { // Container
 * //         Duration: Number("double"),
 * //         Format: "mp4" || "quicktime" || "matroska" || "webm",
 * //         Tracks: [ // __listOfTrack
 * //           { // Track
 * //             AudioProperties: { // AudioProperties
 * //               BitDepth: Number("int"),
 * //               BitRate: Number("int"),
 * //               Channels: Number("int"),
 * //               FrameRate: { // FrameRate
 * //                 Denominator: Number("int"),
 * //                 Numerator: Number("int"),
 * //               },
 * //               LanguageCode: "STRING_VALUE",
 * //               SampleRate: Number("int"),
 * //             },
 * //             Codec: "UNKNOWN" || "AAC" || "AC3" || "EAC3" || "FLAC" || "MP3" || "OPUS" || "PCM" || "VORBIS" || "AV1" || "AVC" || "HEVC" || "MJPEG" || "MP4V" || "MPEG2" || "PRORES" || "THEORA" || "VP8" || "VP9" || "C608" || "C708" || "WEBVTT",
 * //             DataProperties: { // DataProperties
 * //               LanguageCode: "STRING_VALUE",
 * //             },
 * //             Duration: Number("double"),
 * //             Index: Number("int"),
 * //             TrackType: "video" || "audio" || "data",
 * //             VideoProperties: { // VideoProperties
 * //               BitDepth: Number("int"),
 * //               BitRate: Number("int"),
 * //               ColorPrimaries: "ITU_709" || "UNSPECIFIED" || "RESERVED" || "ITU_470M" || "ITU_470BG" || "SMPTE_170M" || "SMPTE_240M" || "GENERIC_FILM" || "ITU_2020" || "SMPTE_428_1" || "SMPTE_431_2" || "SMPTE_EG_432_1" || "IPT" || "SMPTE_2067XYZ" || "EBU_3213_E" || "LAST",
 * //               FrameRate: {
 * //                 Denominator: Number("int"),
 * //                 Numerator: Number("int"),
 * //               },
 * //               Height: Number("int"),
 * //               MatrixCoefficients: "RGB" || "ITU_709" || "UNSPECIFIED" || "RESERVED" || "FCC" || "ITU_470BG" || "SMPTE_170M" || "SMPTE_240M" || "YCgCo" || "ITU_2020_NCL" || "ITU_2020_CL" || "SMPTE_2085" || "CD_NCL" || "CD_CL" || "ITU_2100ICtCp" || "IPT" || "EBU3213" || "LAST",
 * //               TransferCharacteristics: "ITU_709" || "UNSPECIFIED" || "RESERVED" || "ITU_470M" || "ITU_470BG" || "SMPTE_170M" || "SMPTE_240M" || "LINEAR" || "LOG10_2" || "LOC10_2_5" || "IEC_61966_2_4" || "ITU_1361" || "IEC_61966_2_1" || "ITU_2020_10bit" || "ITU_2020_12bit" || "SMPTE_2084" || "SMPTE_428_1" || "ARIB_B67" || "LAST",
 * //               Width: Number("int"),
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       Metadata: { // Metadata
 * //         ETag: "STRING_VALUE",
 * //         FileSize: Number("long"),
 * //         LastModified: new Date("TIMESTAMP"),
 * //         MimeType: "STRING_VALUE",
 * //       },
 * //       TrackMappings: [ // __listOfTrackMapping
 * //         { // TrackMapping
 * //           AudioTrackIndexes: [ // __listOf__integer
 * //             Number("int"),
 * //           ],
 * //           DataTrackIndexes: [
 * //             Number("int"),
 * //           ],
 * //           VideoTrackIndexes: [
 * //             Number("int"),
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ProbeCommandInput - {@link ProbeCommandInput}
 * @returns {@link ProbeCommandOutput}
 * @see {@link ProbeCommandInput} for command's `input` shape.
 * @see {@link ProbeCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for MediaConvertClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The service can't process your request because of a problem in the request. Please check your request form and syntax.
 *
 * @throws {@link ConflictException} (client fault)
 *  The service couldn't complete your request because there is a conflict with the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  You don't have permissions for this action with the credentials you sent.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  The service encountered an unexpected condition and can't fulfill your request.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The resource you requested doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
 *
 * @throws {@link MediaConvertServiceException}
 * <p>Base exception class for all service exceptions from MediaConvert service.</p>
 *
 * @public
 */
export class ProbeCommand extends $Command
  .classBuilder<
    ProbeCommandInput,
    ProbeCommandOutput,
    MediaConvertClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConvertClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConvert", "Probe", {})
  .n("MediaConvertClient", "ProbeCommand")
  .f(void 0, void 0)
  .ser(se_ProbeCommand)
  .de(de_ProbeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ProbeRequest;
      output: ProbeResponse;
    };
    sdk: {
      input: ProbeCommandInput;
      output: ProbeCommandOutput;
    };
  };
}
