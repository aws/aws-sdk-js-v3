// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReadPresetRequest, ReadPresetResponse } from "../models/models_0";
import { ReadPreset } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReadPresetCommand}.
 */
export interface ReadPresetCommandInput extends ReadPresetRequest {}
/**
 * @public
 *
 * The output of {@link ReadPresetCommand}.
 */
export interface ReadPresetCommandOutput extends ReadPresetResponse, __MetadataBearer {}

/**
 * <p>The ReadPreset operation gets detailed information about a preset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ReadPresetCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ReadPresetCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * // import type { ElasticTranscoderClientConfig } from "@aws-sdk/client-elastic-transcoder";
 * const config = {}; // type is ElasticTranscoderClientConfig
 * const client = new ElasticTranscoderClient(config);
 * const input = { // ReadPresetRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new ReadPresetCommand(input);
 * const response = await client.send(command);
 * // { // ReadPresetResponse
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
 * // };
 *
 * ```
 *
 * @param ReadPresetCommandInput - {@link ReadPresetCommandInput}
 * @returns {@link ReadPresetCommandOutput}
 * @see {@link ReadPresetCommandInput} for command's `input` shape.
 * @see {@link ReadPresetCommandOutput} for command's `response` shape.
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
export class ReadPresetCommand extends $Command
  .classBuilder<
    ReadPresetCommandInput,
    ReadPresetCommandOutput,
    ElasticTranscoderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticTranscoderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EtsCustomerService", "ReadPreset", {})
  .n("ElasticTranscoderClient", "ReadPresetCommand")
  .sc(ReadPreset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReadPresetRequest;
      output: ReadPresetResponse;
    };
    sdk: {
      input: ReadPresetCommandInput;
      output: ReadPresetCommandOutput;
    };
  };
}
