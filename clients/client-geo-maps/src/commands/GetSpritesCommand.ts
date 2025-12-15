// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GeoMapsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GeoMapsClient";
import { type GetSpritesRequest, GetSpritesResponse } from "../models/models_0";
import { GetSprites$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSpritesCommand}.
 */
export interface GetSpritesCommandInput extends GetSpritesRequest {}
/**
 * @public
 */
export type GetSpritesCommandOutputType = Omit<GetSpritesResponse, "Blob"> & {
  Blob?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetSpritesCommand}.
 */
export interface GetSpritesCommandOutput extends GetSpritesCommandOutputType, __MetadataBearer {}

/**
 * <p> <code>GetSprites</code> returns the map's sprites.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/styling-iconography-with-sprites.html">Style iconography with sprites</a> in the <i>Amazon Location Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GeoMapsClient, GetSpritesCommand } from "@aws-sdk/client-geo-maps"; // ES Modules import
 * // const { GeoMapsClient, GetSpritesCommand } = require("@aws-sdk/client-geo-maps"); // CommonJS import
 * // import type { GeoMapsClientConfig } from "@aws-sdk/client-geo-maps";
 * const config = {}; // type is GeoMapsClientConfig
 * const client = new GeoMapsClient(config);
 * const input = { // GetSpritesRequest
 *   FileName: "STRING_VALUE", // required
 *   Style: "STRING_VALUE", // required
 *   ColorScheme: "STRING_VALUE", // required
 *   Variant: "STRING_VALUE", // required
 * };
 * const command = new GetSpritesCommand(input);
 * const response = await client.send(command);
 * // { // GetSpritesResponse
 * //   Blob: new Uint8Array(),
 * //   ContentType: "STRING_VALUE",
 * //   CacheControl: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSpritesCommandInput - {@link GetSpritesCommandInput}
 * @returns {@link GetSpritesCommandOutput}
 * @see {@link GetSpritesCommandInput} for command's `input` shape.
 * @see {@link GetSpritesCommandOutput} for command's `response` shape.
 * @see {@link GeoMapsClientResolvedConfig | config} for GeoMapsClient's `config` shape.
 *
 * @throws {@link GeoMapsServiceException}
 * <p>Base exception class for all service exceptions from GeoMaps service.</p>
 *
 *
 * @public
 */
export class GetSpritesCommand extends $Command
  .classBuilder<
    GetSpritesCommandInput,
    GetSpritesCommandOutput,
    GeoMapsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GeoMapsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MapsService", "GetSprites", {})
  .n("GeoMapsClient", "GetSpritesCommand")
  .sc(GetSprites$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSpritesRequest;
      output: GetSpritesResponse;
    };
    sdk: {
      input: GetSpritesCommandInput;
      output: GetSpritesCommandOutput;
    };
  };
}
