// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSpritesRequest, GetSpritesResponse } from "../models/models_0";
import { GetSprites$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * `GetSprites` returns the map's sprites.
 *
 * For more information, see [Style iconography with sprites](https://docs.aws.amazon.com/location/latest/developerguide/styling-iconography-with-sprites.html) in the *Amazon Location Service Developer Guide*.
 *
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
 *   Style: "Standard" || "Monochrome" || "Hybrid" || "Satellite", // required
 *   ColorScheme: "Light" || "Dark", // required
 *   Variant: "Default", // required
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
 *
 * Base exception class for all service exceptions from GeoMaps service.
 *
 * @public
 */
export class GetSpritesCommand extends command<GetSpritesCommandInput, GetSpritesCommandOutput>(
  _ep0,
  _mw0,
  "GetSprites",
  GetSprites$
) {
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
