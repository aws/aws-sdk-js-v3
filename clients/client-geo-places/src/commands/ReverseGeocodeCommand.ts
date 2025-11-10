// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GeoPlacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GeoPlacesClient";
import { ReverseGeocodeRequest, ReverseGeocodeResponse } from "../models/models_0";
import { ReverseGeocode } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReverseGeocodeCommand}.
 */
export interface ReverseGeocodeCommandInput extends ReverseGeocodeRequest {}
/**
 * @public
 *
 * The output of {@link ReverseGeocodeCommand}.
 */
export interface ReverseGeocodeCommandOutput extends ReverseGeocodeResponse, __MetadataBearer {}

/**
 * <p> <code>ReverseGeocode</code> converts geographic coordinates into a human-readable address or place. You can obtain address component, and other related information such as place type, category, street information. The Reverse Geocode API supports filtering to on place type so that you can refine result based on your need. Also, The Reverse Geocode API can also provide additional features such as time zone information and the inclusion of political views.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GeoPlacesClient, ReverseGeocodeCommand } from "@aws-sdk/client-geo-places"; // ES Modules import
 * // const { GeoPlacesClient, ReverseGeocodeCommand } = require("@aws-sdk/client-geo-places"); // CommonJS import
 * // import type { GeoPlacesClientConfig } from "@aws-sdk/client-geo-places";
 * const config = {}; // type is GeoPlacesClientConfig
 * const client = new GeoPlacesClient(config);
 * const input = { // ReverseGeocodeRequest
 *   QueryPosition: [ // Position // required
 *     Number("double"),
 *   ],
 *   QueryRadius: Number("long"),
 *   MaxResults: Number("int"),
 *   Filter: { // ReverseGeocodeFilter
 *     IncludePlaceTypes: [ // ReverseGeocodeFilterPlaceTypeList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   AdditionalFeatures: [ // ReverseGeocodeAdditionalFeatureList
 *     "STRING_VALUE",
 *   ],
 *   Language: "STRING_VALUE",
 *   PoliticalView: "STRING_VALUE",
 *   IntendedUse: "STRING_VALUE",
 *   Key: "STRING_VALUE",
 * };
 * const command = new ReverseGeocodeCommand(input);
 * const response = await client.send(command);
 * // { // ReverseGeocodeResponse
 * //   PricingBucket: "STRING_VALUE", // required
 * //   ResultItems: [ // ReverseGeocodeResultItemList
 * //     { // ReverseGeocodeResultItem
 * //       PlaceId: "STRING_VALUE", // required
 * //       PlaceType: "STRING_VALUE", // required
 * //       Title: "STRING_VALUE", // required
 * //       Address: { // Address
 * //         Label: "STRING_VALUE",
 * //         Country: { // Country
 * //           Code2: "STRING_VALUE",
 * //           Code3: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //         Region: { // Region
 * //           Code: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //         SubRegion: { // SubRegion
 * //           Code: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //         Locality: "STRING_VALUE",
 * //         District: "STRING_VALUE",
 * //         SubDistrict: "STRING_VALUE",
 * //         PostalCode: "STRING_VALUE",
 * //         Block: "STRING_VALUE",
 * //         SubBlock: "STRING_VALUE",
 * //         Intersection: [ // IntersectionStreetList
 * //           "STRING_VALUE",
 * //         ],
 * //         Street: "STRING_VALUE",
 * //         StreetComponents: [ // StreetComponentsList
 * //           { // StreetComponents
 * //             BaseName: "STRING_VALUE",
 * //             Type: "STRING_VALUE",
 * //             TypePlacement: "STRING_VALUE",
 * //             TypeSeparator: "STRING_VALUE",
 * //             Prefix: "STRING_VALUE",
 * //             Suffix: "STRING_VALUE",
 * //             Direction: "STRING_VALUE",
 * //             Language: "STRING_VALUE",
 * //           },
 * //         ],
 * //         AddressNumber: "STRING_VALUE",
 * //         Building: "STRING_VALUE",
 * //         SecondaryAddressComponents: [ // SecondaryAddressComponentList
 * //           { // SecondaryAddressComponent
 * //             Number: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       AddressNumberCorrected: true || false,
 * //       PostalCodeDetails: [ // PostalCodeDetailsList
 * //         { // PostalCodeDetails
 * //           PostalCode: "STRING_VALUE",
 * //           PostalAuthority: "STRING_VALUE",
 * //           PostalCodeType: "STRING_VALUE",
 * //           UspsZip: { // UspsZip
 * //             ZipClassificationCode: "STRING_VALUE",
 * //           },
 * //           UspsZipPlus4: { // UspsZipPlus4
 * //             RecordTypeCode: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       Position: [ // Position
 * //         Number("double"),
 * //       ],
 * //       Distance: Number("long"),
 * //       MapView: [ // BoundingBox
 * //         Number("double"),
 * //       ],
 * //       Categories: [ // CategoryList
 * //         { // Category
 * //           Id: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE", // required
 * //           LocalizedName: "STRING_VALUE",
 * //           Primary: true || false,
 * //         },
 * //       ],
 * //       FoodTypes: [ // FoodTypeList
 * //         { // FoodType
 * //           LocalizedName: "STRING_VALUE", // required
 * //           Id: "STRING_VALUE",
 * //           Primary: true || false,
 * //         },
 * //       ],
 * //       AccessPoints: [ // AccessPointList
 * //         { // AccessPoint
 * //           Position: [
 * //             Number("double"),
 * //           ],
 * //         },
 * //       ],
 * //       TimeZone: { // TimeZone
 * //         Name: "STRING_VALUE", // required
 * //         Offset: "STRING_VALUE",
 * //         OffsetSeconds: Number("long"),
 * //       },
 * //       PoliticalView: "STRING_VALUE",
 * //       Intersections: [ // IntersectionList
 * //         { // Intersection
 * //           PlaceId: "STRING_VALUE", // required
 * //           Title: "STRING_VALUE", // required
 * //           Address: {
 * //             Label: "STRING_VALUE",
 * //             Country: {
 * //               Code2: "STRING_VALUE",
 * //               Code3: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //             },
 * //             Region: {
 * //               Code: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //             },
 * //             SubRegion: {
 * //               Code: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //             },
 * //             Locality: "STRING_VALUE",
 * //             District: "STRING_VALUE",
 * //             SubDistrict: "STRING_VALUE",
 * //             PostalCode: "STRING_VALUE",
 * //             Block: "STRING_VALUE",
 * //             SubBlock: "STRING_VALUE",
 * //             Intersection: [
 * //               "STRING_VALUE",
 * //             ],
 * //             Street: "STRING_VALUE",
 * //             StreetComponents: [
 * //               {
 * //                 BaseName: "STRING_VALUE",
 * //                 Type: "STRING_VALUE",
 * //                 TypePlacement: "STRING_VALUE",
 * //                 TypeSeparator: "STRING_VALUE",
 * //                 Prefix: "STRING_VALUE",
 * //                 Suffix: "STRING_VALUE",
 * //                 Direction: "STRING_VALUE",
 * //                 Language: "STRING_VALUE",
 * //               },
 * //             ],
 * //             AddressNumber: "STRING_VALUE",
 * //             Building: "STRING_VALUE",
 * //             SecondaryAddressComponents: [
 * //               {
 * //                 Number: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //           Position: [
 * //             Number("double"),
 * //           ],
 * //           Distance: Number("long"),
 * //           RouteDistance: Number("long"),
 * //           MapView: [
 * //             Number("double"),
 * //           ],
 * //           AccessPoints: [
 * //             {
 * //               Position: "<Position>",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ReverseGeocodeCommandInput - {@link ReverseGeocodeCommandInput}
 * @returns {@link ReverseGeocodeCommandOutput}
 * @see {@link ReverseGeocodeCommandInput} for command's `input` shape.
 * @see {@link ReverseGeocodeCommandOutput} for command's `response` shape.
 * @see {@link GeoPlacesClientResolvedConfig | config} for GeoPlacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
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
 * @throws {@link GeoPlacesServiceException}
 * <p>Base exception class for all service exceptions from GeoPlaces service.</p>
 *
 *
 * @public
 */
export class ReverseGeocodeCommand extends $Command
  .classBuilder<
    ReverseGeocodeCommandInput,
    ReverseGeocodeCommandOutput,
    GeoPlacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GeoPlacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PlacesService", "ReverseGeocode", {})
  .n("GeoPlacesClient", "ReverseGeocodeCommand")
  .sc(ReverseGeocode)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReverseGeocodeRequest;
      output: ReverseGeocodeResponse;
    };
    sdk: {
      input: ReverseGeocodeCommandInput;
      output: ReverseGeocodeCommandOutput;
    };
  };
}
