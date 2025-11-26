// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPresetsRequest, ListPresetsResponse } from "../models/models_0";
import { ListPresets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPresetsCommand}.
 */
export interface ListPresetsCommandInput extends ListPresetsRequest {}
/**
 * @public
 *
 * The output of {@link ListPresetsCommand}.
 */
export interface ListPresetsCommandOutput extends ListPresetsResponse, __MetadataBearer {}

/**
 * <p>The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that
 *             you've added in an AWS region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ListPresetsCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ListPresetsCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * // import type { ElasticTranscoderClientConfig } from "@aws-sdk/client-elastic-transcoder";
 * const config = {}; // type is ElasticTranscoderClientConfig
 * const client = new ElasticTranscoderClient(config);
 * const input = { // ListPresetsRequest
 *   Ascending: "STRING_VALUE",
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListPresetsCommand(input);
 * const response = await client.send(command);
 * // { // ListPresetsResponse
 * //   Presets: [ // Presets
 * //     { // Preset
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Container: "STRING_VALUE",
 * //       Audio: { // AudioParameters
 * //         Codec: "STRING_VALUE",
 * //         SampleRate: "STRING_VALUE",
 * //         BitRate: "STRING_VALUE",
 * //         Channels: "STRING_VALUE",
 * //         AudioPackingMode: "STRING_VALUE",
 * //         CodecOptions: { // AudioCodecOptions
 * //           Profile: "STRING_VALUE",
 * //           BitDepth: "STRING_VALUE",
 * //           BitOrder: "STRING_VALUE",
 * //           Signed: "STRING_VALUE",
 * //         },
 * //       },
 * //       Video: { // VideoParameters
 * //         Codec: "STRING_VALUE",
 * //         CodecOptions: { // CodecOptions
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         KeyframesMaxDist: "STRING_VALUE",
 * //         FixedGOP: "STRING_VALUE",
 * //         BitRate: "STRING_VALUE",
 * //         FrameRate: "STRING_VALUE",
 * //         MaxFrameRate: "STRING_VALUE",
 * //         Resolution: "STRING_VALUE",
 * //         AspectRatio: "STRING_VALUE",
 * //         MaxWidth: "STRING_VALUE",
 * //         MaxHeight: "STRING_VALUE",
 * //         DisplayAspectRatio: "STRING_VALUE",
 * //         SizingPolicy: "STRING_VALUE",
 * //         PaddingPolicy: "STRING_VALUE",
 * //         Watermarks: [ // PresetWatermarks
 * //           { // PresetWatermark
 * //             Id: "STRING_VALUE",
 * //             MaxWidth: "STRING_VALUE",
 * //             MaxHeight: "STRING_VALUE",
 * //             SizingPolicy: "STRING_VALUE",
 * //             HorizontalAlign: "STRING_VALUE",
 * //             HorizontalOffset: "STRING_VALUE",
 * //             VerticalAlign: "STRING_VALUE",
 * //             VerticalOffset: "STRING_VALUE",
 * //             Opacity: "STRING_VALUE",
 * //             Target: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       Thumbnails: { // Thumbnails
 * //         Format: "STRING_VALUE",
 * //         Interval: "STRING_VALUE",
 * //         Resolution: "STRING_VALUE",
 * //         AspectRatio: "STRING_VALUE",
 * //         MaxWidth: "STRING_VALUE",
 * //         MaxHeight: "STRING_VALUE",
 * //         SizingPolicy: "STRING_VALUE",
 * //         PaddingPolicy: "STRING_VALUE",
 * //       },
 * //       Type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPresetsCommandInput - {@link ListPresetsCommandInput}
 * @returns {@link ListPresetsCommandOutput}
 * @see {@link ListPresetsCommandInput} for command's `input` shape.
 * @see {@link ListPresetsCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more required parameter values were not provided in the request.</p>
 *
 * @throws {@link ElasticTranscoderServiceException}
 * <p>Base exception class for all service exceptions from ElasticTranscoder service.</p>
 *
 *
 * @public
 */
export class ListPresetsCommand extends $Command
  .classBuilder<
    ListPresetsCommandInput,
    ListPresetsCommandOutput,
    ElasticTranscoderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticTranscoderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EtsCustomerService", "ListPresets", {})
  .n("ElasticTranscoderClient", "ListPresetsCommand")
  .sc(ListPresets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPresetsRequest;
      output: ListPresetsResponse;
    };
    sdk: {
      input: ListPresetsCommandInput;
      output: ListPresetsCommandOutput;
    };
  };
}
