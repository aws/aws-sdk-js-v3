// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { GeoMapsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GeoMapsClient";
import { GetStyleDescriptorRequest, GetStyleDescriptorResponse } from "../models/models_0";
import { GetStyleDescriptor } from "../schemas/schemas_1_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> <code>GetStyleDescriptor</code> returns information about the style.</p>
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
export class GetStyleDescriptorCommand extends $Command
  .classBuilder<
    GetStyleDescriptorCommandInput,
    GetStyleDescriptorCommandOutput,
    GeoMapsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GeoMapsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MapsService", "GetStyleDescriptor", {})
  .n("GeoMapsClient", "GetStyleDescriptorCommand")
  .sc(GetStyleDescriptor)
  .build() {
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
