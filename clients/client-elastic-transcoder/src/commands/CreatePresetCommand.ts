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
import { CreatePresetRequest, CreatePresetResponse } from "../models/models_0";
import { de_CreatePresetCommand, se_CreatePresetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePresetCommand}.
 */
export interface CreatePresetCommandInput extends CreatePresetRequest {}
/**
 * @public
 *
 * The output of {@link CreatePresetCommand}.
 */
export interface CreatePresetCommandOutput extends CreatePresetResponse, __MetadataBearer {}

/**
 * <p>The CreatePreset operation creates a preset with settings that you specify.</p>
 *         <important>
 *             <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements
 *             and to determine whether they comply with H.264 standards. If your settings are not
 *             valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and
 *             does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly
 *             compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message
 *             in the response. This helps you determine whether your settings comply with the H.264
 *             standard while giving you greater flexibility with respect to the video that Elastic Transcoder
 *             produces.</p>
 *          </important>
 *         <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International
 *             Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding
 *                 for generic audiovisual services</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, CreatePresetCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, CreatePresetCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const input = { // CreatePresetRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Container: "STRING_VALUE", // required
 *   Video: { // VideoParameters
 *     Codec: "STRING_VALUE",
 *     CodecOptions: { // CodecOptions
 *       "<keys>": "STRING_VALUE",
 *     },
 *     KeyframesMaxDist: "STRING_VALUE",
 *     FixedGOP: "STRING_VALUE",
 *     BitRate: "STRING_VALUE",
 *     FrameRate: "STRING_VALUE",
 *     MaxFrameRate: "STRING_VALUE",
 *     Resolution: "STRING_VALUE",
 *     AspectRatio: "STRING_VALUE",
 *     MaxWidth: "STRING_VALUE",
 *     MaxHeight: "STRING_VALUE",
 *     DisplayAspectRatio: "STRING_VALUE",
 *     SizingPolicy: "STRING_VALUE",
 *     PaddingPolicy: "STRING_VALUE",
 *     Watermarks: [ // PresetWatermarks
 *       { // PresetWatermark
 *         Id: "STRING_VALUE",
 *         MaxWidth: "STRING_VALUE",
 *         MaxHeight: "STRING_VALUE",
 *         SizingPolicy: "STRING_VALUE",
 *         HorizontalAlign: "STRING_VALUE",
 *         HorizontalOffset: "STRING_VALUE",
 *         VerticalAlign: "STRING_VALUE",
 *         VerticalOffset: "STRING_VALUE",
 *         Opacity: "STRING_VALUE",
 *         Target: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   Audio: { // AudioParameters
 *     Codec: "STRING_VALUE",
 *     SampleRate: "STRING_VALUE",
 *     BitRate: "STRING_VALUE",
 *     Channels: "STRING_VALUE",
 *     AudioPackingMode: "STRING_VALUE",
 *     CodecOptions: { // AudioCodecOptions
 *       Profile: "STRING_VALUE",
 *       BitDepth: "STRING_VALUE",
 *       BitOrder: "STRING_VALUE",
 *       Signed: "STRING_VALUE",
 *     },
 *   },
 *   Thumbnails: { // Thumbnails
 *     Format: "STRING_VALUE",
 *     Interval: "STRING_VALUE",
 *     Resolution: "STRING_VALUE",
 *     AspectRatio: "STRING_VALUE",
 *     MaxWidth: "STRING_VALUE",
 *     MaxHeight: "STRING_VALUE",
 *     SizingPolicy: "STRING_VALUE",
 *     PaddingPolicy: "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePresetCommand(input);
 * const response = await client.send(command);
 * // { // CreatePresetResponse
 * //   Preset: { // Preset
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Container: "STRING_VALUE",
 * //     Audio: { // AudioParameters
 * //       Codec: "STRING_VALUE",
 * //       SampleRate: "STRING_VALUE",
 * //       BitRate: "STRING_VALUE",
 * //       Channels: "STRING_VALUE",
 * //       AudioPackingMode: "STRING_VALUE",
 * //       CodecOptions: { // AudioCodecOptions
 * //         Profile: "STRING_VALUE",
 * //         BitDepth: "STRING_VALUE",
 * //         BitOrder: "STRING_VALUE",
 * //         Signed: "STRING_VALUE",
 * //       },
 * //     },
 * //     Video: { // VideoParameters
 * //       Codec: "STRING_VALUE",
 * //       CodecOptions: { // CodecOptions
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       KeyframesMaxDist: "STRING_VALUE",
 * //       FixedGOP: "STRING_VALUE",
 * //       BitRate: "STRING_VALUE",
 * //       FrameRate: "STRING_VALUE",
 * //       MaxFrameRate: "STRING_VALUE",
 * //       Resolution: "STRING_VALUE",
 * //       AspectRatio: "STRING_VALUE",
 * //       MaxWidth: "STRING_VALUE",
 * //       MaxHeight: "STRING_VALUE",
 * //       DisplayAspectRatio: "STRING_VALUE",
 * //       SizingPolicy: "STRING_VALUE",
 * //       PaddingPolicy: "STRING_VALUE",
 * //       Watermarks: [ // PresetWatermarks
 * //         { // PresetWatermark
 * //           Id: "STRING_VALUE",
 * //           MaxWidth: "STRING_VALUE",
 * //           MaxHeight: "STRING_VALUE",
 * //           SizingPolicy: "STRING_VALUE",
 * //           HorizontalAlign: "STRING_VALUE",
 * //           HorizontalOffset: "STRING_VALUE",
 * //           VerticalAlign: "STRING_VALUE",
 * //           VerticalOffset: "STRING_VALUE",
 * //           Opacity: "STRING_VALUE",
 * //           Target: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     Thumbnails: { // Thumbnails
 * //       Format: "STRING_VALUE",
 * //       Interval: "STRING_VALUE",
 * //       Resolution: "STRING_VALUE",
 * //       AspectRatio: "STRING_VALUE",
 * //       MaxWidth: "STRING_VALUE",
 * //       MaxHeight: "STRING_VALUE",
 * //       SizingPolicy: "STRING_VALUE",
 * //       PaddingPolicy: "STRING_VALUE",
 * //     },
 * //     Type: "STRING_VALUE",
 * //   },
 * //   Warning: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePresetCommandInput - {@link CreatePresetCommandInput}
 * @returns {@link CreatePresetCommandOutput}
 * @see {@link CreatePresetCommandInput} for command's `input` shape.
 * @see {@link CreatePresetCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more required parameter values were not provided in the request.</p>
 *
 * @throws {@link ElasticTranscoderServiceException}
 * <p>Base exception class for all service exceptions from ElasticTranscoder service.</p>
 *
 * @public
 */
export class CreatePresetCommand extends $Command
  .classBuilder<
    CreatePresetCommandInput,
    CreatePresetCommandOutput,
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
  .s("EtsCustomerService", "CreatePreset", {})
  .n("ElasticTranscoderClient", "CreatePresetCommand")
  .f(void 0, void 0)
  .ser(se_CreatePresetCommand)
  .de(de_CreatePresetCommand)
  .build() {}
