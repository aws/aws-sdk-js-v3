// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetStaticMapRequest, GetStaticMapResponse } from "../models/models_0";
import { GetStaticMap$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * `GetStaticMap` provides high-quality static map images with customizable options. You can modify the map's appearance and overlay additional information. It's an ideal solution for applications requiring tailored static map snapshots. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
 *
 * For more information, see the following topics in the *Amazon Location Service Developer Guide*:
 *
 * - [Static maps](https://docs.aws.amazon.com/location/latest/developerguide/static-maps.html)
 * - [Customize static maps](https://docs.aws.amazon.com/location/latest/developerguide/customizing-static-maps.html)
 * - [Overlay on the static map](https://docs.aws.amazon.com/location/latest/developerguide/overlaying-static-map.html)
 *
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
 *   ColorScheme: "Light" || "Dark",
 *   CompactOverlay: "STRING_VALUE",
 *   CropLabels: true || false,
 *   GeoJsonOverlay: "STRING_VALUE",
 *   Height: Number("int"), // required
 *   Key: "STRING_VALUE",
 *   LabelSize: "Small" || "Large",
 *   Language: "STRING_VALUE",
 *   Padding: Number("int"),
 *   PoliticalView: "STRING_VALUE",
 *   PointsOfInterests: "Enabled" || "Disabled",
 *   Radius: Number("long"),
 *   FileName: "STRING_VALUE", // required
 *   ScaleBarUnit: "Kilometers" || "KilometersMiles" || "Miles" || "MilesKilometers",
 *   Style: "Satellite" || "Standard",
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
 *
 * The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link GeoMapsServiceException}
 *
 * Base exception class for all service exceptions from GeoMaps service.
 *
 * @public
 */
export class GetStaticMapCommand extends command<GetStaticMapCommandInput, GetStaticMapCommandOutput>(
  _ep0,
  _mw0,
  "GetStaticMap",
  GetStaticMap$
) {
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
