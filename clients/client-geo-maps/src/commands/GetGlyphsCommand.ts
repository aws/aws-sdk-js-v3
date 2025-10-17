// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { GeoMapsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GeoMapsClient";
import { GetGlyphsRequest, GetGlyphsResponse } from "../models/models_0";
import { de_GetGlyphsCommand, se_GetGlyphsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGlyphsCommand}.
 */
export interface GetGlyphsCommandInput extends GetGlyphsRequest {}
/**
 * @public
 */
export type GetGlyphsCommandOutputType = Omit<GetGlyphsResponse, "Blob"> & {
  Blob?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetGlyphsCommand}.
 */
export interface GetGlyphsCommandOutput extends GetGlyphsCommandOutputType, __MetadataBearer {}

/**
 * <p> <code>GetGlyphs</code> returns the map's glyphs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/styling-labels-with-glyphs.html">Style labels with glyphs</a> in the <i>Amazon Location Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GeoMapsClient, GetGlyphsCommand } from "@aws-sdk/client-geo-maps"; // ES Modules import
 * // const { GeoMapsClient, GetGlyphsCommand } = require("@aws-sdk/client-geo-maps"); // CommonJS import
 * // import type { GeoMapsClientConfig } from "@aws-sdk/client-geo-maps";
 * const config = {}; // type is GeoMapsClientConfig
 * const client = new GeoMapsClient(config);
 * const input = { // GetGlyphsRequest
 *   FontStack: "STRING_VALUE", // required
 *   FontUnicodeRange: "STRING_VALUE", // required
 * };
 * const command = new GetGlyphsCommand(input);
 * const response = await client.send(command);
 * // { // GetGlyphsResponse
 * //   Blob: new Uint8Array(),
 * //   ContentType: "STRING_VALUE",
 * //   CacheControl: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGlyphsCommandInput - {@link GetGlyphsCommandInput}
 * @returns {@link GetGlyphsCommandOutput}
 * @see {@link GetGlyphsCommandInput} for command's `input` shape.
 * @see {@link GetGlyphsCommandOutput} for command's `response` shape.
 * @see {@link GeoMapsClientResolvedConfig | config} for GeoMapsClient's `config` shape.
 *
 * @throws {@link GeoMapsServiceException}
 * <p>Base exception class for all service exceptions from GeoMaps service.</p>
 *
 *
 * @public
 */
export class GetGlyphsCommand extends $Command
  .classBuilder<
    GetGlyphsCommandInput,
    GetGlyphsCommandOutput,
    GeoMapsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GeoMapsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MapsService", "GetGlyphs", {})
  .n("GeoMapsClient", "GetGlyphsCommand")
  .f(void 0, void 0)
  .ser(se_GetGlyphsCommand)
  .de(de_GetGlyphsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGlyphsRequest;
      output: GetGlyphsResponse;
    };
    sdk: {
      input: GetGlyphsCommandInput;
      output: GetGlyphsCommandOutput;
    };
  };
}
