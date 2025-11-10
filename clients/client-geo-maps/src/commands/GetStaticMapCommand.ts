// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { GeoMapsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GeoMapsClient";
import { GetStaticMapRequest, GetStaticMapResponse } from "../models/models_0";
import { GetStaticMap } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStaticMapCommand}.
 */
export interface GetStaticMapCommandInput extends GetStaticMapRequest {}
/**
 * @public
 */
export type GetStaticMapCommandOutputType = Omit<GetStaticMapResponse, "Blob"> & {
  Blob?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetStaticMapCommand}.
 */
export interface GetStaticMapCommandOutput extends GetStaticMapCommandOutputType, __MetadataBearer {}

/**
 * <p> <code>GetStaticMap</code> provides high-quality static map images with customizable options. You can modify the map's appearance and overlay additional information. It's an ideal solution for applications requiring tailored static map snapshots.</p> <p>For more information, see the following topics in the <i>Amazon Location Service Developer Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/static-maps.html">Static maps</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/customizing-static-maps.html">Customize static maps</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/overlaying-static-map.html">Overlay on the static map</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GeoMapsClient, GetStaticMapCommand } from "@aws-sdk/client-geo-maps"; // ES Modules import
 * // const { GeoMapsClient, GetStaticMapCommand } = require("@aws-sdk/client-geo-maps"); // CommonJS import
 * // import type { GeoMapsClientConfig } from "@aws-sdk/client-geo-maps";
 * const config = {}; // type is GeoMapsClientConfig
 * const client = new GeoMapsClient(config);
 * const input = { // GetStaticMapRequest
 *   BoundingBox: "STRING_VALUE",
 *   BoundedPositions: "STRING_VALUE",
 *   Center: "STRING_VALUE",
 *   ColorScheme: "STRING_VALUE",
 *   CompactOverlay: "STRING_VALUE",
 *   CropLabels: true || false,
 *   GeoJsonOverlay: "STRING_VALUE",
 *   Height: Number("int"), // required
 *   Key: "STRING_VALUE",
 *   LabelSize: "STRING_VALUE",
 *   Language: "STRING_VALUE",
 *   Padding: Number("int"),
 *   PoliticalView: "STRING_VALUE",
 *   PointsOfInterests: "STRING_VALUE",
 *   Radius: Number("long"),
 *   FileName: "STRING_VALUE", // required
 *   ScaleBarUnit: "STRING_VALUE",
 *   Style: "STRING_VALUE",
 *   Width: Number("int"), // required
 *   Zoom: Number("float"),
 * };
 * const command = new GetStaticMapCommand(input);
 * const response = await client.send(command);
 * // { // GetStaticMapResponse
 * //   Blob: new Uint8Array(),
 * //   ContentType: "STRING_VALUE",
 * //   CacheControl: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * //   PricingBucket: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetStaticMapCommandInput - {@link GetStaticMapCommandInput}
 * @returns {@link GetStaticMapCommandOutput}
 * @see {@link GetStaticMapCommandInput} for command's `input` shape.
 * @see {@link GetStaticMapCommandOutput} for command's `response` shape.
 * @see {@link GeoMapsClientResolvedConfig | config} for GeoMapsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link GeoMapsServiceException}
 * <p>Base exception class for all service exceptions from GeoMaps service.</p>
 *
 *
 * @public
 */
export class GetStaticMapCommand extends $Command
  .classBuilder<
    GetStaticMapCommandInput,
    GetStaticMapCommandOutput,
    GeoMapsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GeoMapsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MapsService", "GetStaticMap", {})
  .n("GeoMapsClient", "GetStaticMapCommand")
  .sc(GetStaticMap)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStaticMapRequest;
      output: GetStaticMapResponse;
    };
    sdk: {
      input: GetStaticMapCommandInput;
      output: GetStaticMapCommandOutput;
    };
  };
}
