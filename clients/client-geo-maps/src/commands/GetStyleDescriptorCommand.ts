// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetStyleDescriptorRequest, GetStyleDescriptorResponse } from "../models/models_0";
import { GetStyleDescriptor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetStyleDescriptorCommand}.
 */
export interface GetStyleDescriptorCommandInput extends GetStyleDescriptorRequest {}
/**
 * @public
 */
export type GetStyleDescriptorCommandOutputType = Omit<GetStyleDescriptorResponse, "Blob"> & {
  Blob?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetStyleDescriptorCommand}.
 */
export interface GetStyleDescriptorCommandOutput extends GetStyleDescriptorCommandOutputType, __MetadataBearer {}

/**
 * <p> <code>GetStyleDescriptor</code> returns information about the style.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/styling-dynamic-maps.html">Style dynamic maps</a> in the <i>Amazon Location Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GeoMapsClient, GetStyleDescriptorCommand } from "@aws-sdk/client-geo-maps"; // ES Modules import
 * // const { GeoMapsClient, GetStyleDescriptorCommand } = require("@aws-sdk/client-geo-maps"); // CommonJS import
 * // import type { GeoMapsClientConfig } from "@aws-sdk/client-geo-maps";
 * const config = {}; // type is GeoMapsClientConfig
 * const client = new GeoMapsClient(config);
 * const input = { // GetStyleDescriptorRequest
 *   Style: "STRING_VALUE", // required
 *   ColorScheme: "STRING_VALUE",
 *   PoliticalView: "STRING_VALUE",
 *   Terrain: "STRING_VALUE",
 *   ContourDensity: "STRING_VALUE",
 *   Traffic: "STRING_VALUE",
 *   TravelModes: [ // TravelModeList
 *     "STRING_VALUE",
 *   ],
 *   Buildings: "STRING_VALUE",
 *   Key: "STRING_VALUE",
 * };
 * const command = new GetStyleDescriptorCommand(input);
 * const response = await client.send(command);
 * // { // GetStyleDescriptorResponse
 * //   Blob: new Uint8Array(),
 * //   ContentType: "STRING_VALUE",
 * //   CacheControl: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetStyleDescriptorCommandInput - {@link GetStyleDescriptorCommandInput}
 * @returns {@link GetStyleDescriptorCommandOutput}
 * @see {@link GetStyleDescriptorCommandInput} for command's `input` shape.
 * @see {@link GetStyleDescriptorCommandOutput} for command's `response` shape.
 * @see {@link GeoMapsClientResolvedConfig | config} for GeoMapsClient's `config` shape.
 *
 * @throws {@link GeoMapsServiceException}
 * <p>Base exception class for all service exceptions from GeoMaps service.</p>
 *
 *
 * @public
 */
export class GetStyleDescriptorCommand extends command<GetStyleDescriptorCommandInput, GetStyleDescriptorCommandOutput>(
  _ep0,
  _mw0,
  "GetStyleDescriptor",
  GetStyleDescriptor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStyleDescriptorRequest;
      output: GetStyleDescriptorResponse;
    };
    sdk: {
      input: GetStyleDescriptorCommandInput;
      output: GetStyleDescriptorCommandOutput;
    };
  };
}
