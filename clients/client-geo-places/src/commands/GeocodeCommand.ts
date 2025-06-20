// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GeoPlacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GeoPlacesClient";
import {
  GeocodeRequest,
  GeocodeRequestFilterSensitiveLog,
  GeocodeResponse,
  GeocodeResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GeocodeCommand, se_GeocodeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GeocodeCommand}.
 */
export interface GeocodeCommandInput extends GeocodeRequest {}
/**
 * @public
 *
 * The output of {@link GeocodeCommand}.
 */
export interface GeocodeCommandOutput extends GeocodeResponse, __MetadataBearer {}

/**
 * <p> <code>Geocode</code> converts a textual address or place into geographic coordinates. You can obtain geographic coordinates, address component, and other related information. It supports flexible queries, including free-form text or structured queries with components like street names, postal codes, and regions. The Geocode API can also provide additional features such as time zone information and the inclusion of political views.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GeoPlacesClient, GeocodeCommand } from "@aws-sdk/client-geo-places"; // ES Modules import
 * // const { GeoPlacesClient, GeocodeCommand } = require("@aws-sdk/client-geo-places"); // CommonJS import
 * const client = new GeoPlacesClient(config);
 * const input = { // GeocodeRequest
 *   QueryText: "STRING_VALUE",
 *   QueryComponents: { // GeocodeQueryComponents
 *     Country: "STRING_VALUE",
 *     Region: "STRING_VALUE",
 *     SubRegion: "STRING_VALUE",
 *     Locality: "STRING_VALUE",
 *     District: "STRING_VALUE",
 *     Street: "STRING_VALUE",
 *     AddressNumber: "STRING_VALUE",
 *     PostalCode: "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   BiasPosition: [ // Position
 *     Number("double"),
 *   ],
 *   Filter: { // GeocodeFilter
 *     IncludeCountries: [ // CountryCodeList
 *       "STRING_VALUE",
 *     ],
 *     IncludePlaceTypes: [ // GeocodeFilterPlaceTypeList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   AdditionalFeatures: [ // GeocodeAdditionalFeatureList
 *     "STRING_VALUE",
 *   ],
 *   Language: "STRING_VALUE",
 *   PoliticalView: "STRING_VALUE",
 *   IntendedUse: "STRING_VALUE",
 *   Key: "STRING_VALUE",
 * };
 * const command = new GeocodeCommand(input);
 * const response = await client.send(command);
 * // { // GeocodeResponse
 * //   PricingBucket: "STRING_VALUE", // required
 * //   ResultItems: [ // GeocodeResultItemList
 * //     { // GeocodeResultItem
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
 * //       MatchScores: { // MatchScoreDetails
 * //         Overall: Number("double"),
 * //         Components: { // ComponentMatchScores
 * //           Title: Number("double"),
 * //           Address: { // AddressComponentMatchScores
 * //             Country: Number("double"),
 * //             Region: Number("double"),
 * //             SubRegion: Number("double"),
 * //             Locality: Number("double"),
 * //             District: Number("double"),
 * //             SubDistrict: Number("double"),
 * //             PostalCode: Number("double"),
 * //             Block: Number("double"),
 * //             SubBlock: Number("double"),
 * //             Intersection: [ // MatchScoreList
 * //               Number("double"),
 * //             ],
 * //             AddressNumber: Number("double"),
 * //             Building: Number("double"),
 * //             SecondaryAddressComponents: [ // SecondaryAddressComponentMatchScoreList
 * //               { // SecondaryAddressComponentMatchScore
 * //                 Number: Number("double"),
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //       ParsedQuery: { // GeocodeParsedQuery
 * //         Title: [ // ParsedQueryComponentList
 * //           { // ParsedQueryComponent
 * //             StartIndex: Number("int"),
 * //             EndIndex: Number("int"),
 * //             Value: "STRING_VALUE",
 * //             QueryComponent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         Address: { // GeocodeParsedQueryAddressComponents
 * //           Country: [
 * //             {
 * //               StartIndex: Number("int"),
 * //               EndIndex: Number("int"),
 * //               Value: "STRING_VALUE",
 * //               QueryComponent: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Region: [
 * //             {
 * //               StartIndex: Number("int"),
 * //               EndIndex: Number("int"),
 * //               Value: "STRING_VALUE",
 * //               QueryComponent: "STRING_VALUE",
 * //             },
 * //           ],
 * //           SubRegion: [
 * //             {
 * //               StartIndex: Number("int"),
 * //               EndIndex: Number("int"),
 * //               Value: "STRING_VALUE",
 * //               QueryComponent: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Locality: [
 * //             {
 * //               StartIndex: Number("int"),
 * //               EndIndex: Number("int"),
 * //               Value: "STRING_VALUE",
 * //               QueryComponent: "STRING_VALUE",
 * //             },
 * //           ],
 * //           District: "<ParsedQueryComponentList>",
 * //           SubDistrict: "<ParsedQueryComponentList>",
 * //           PostalCode: "<ParsedQueryComponentList>",
 * //           Block: "<ParsedQueryComponentList>",
 * //           SubBlock: "<ParsedQueryComponentList>",
 * //           Street: "<ParsedQueryComponentList>",
 * //           AddressNumber: "<ParsedQueryComponentList>",
 * //           Building: "<ParsedQueryComponentList>",
 * //           SecondaryAddressComponents: [ // ParsedQuerySecondaryAddressComponentList
 * //             { // ParsedQuerySecondaryAddressComponent
 * //               StartIndex: Number("int"), // required
 * //               EndIndex: Number("int"), // required
 * //               Value: "STRING_VALUE", // required
 * //               Number: "STRING_VALUE", // required
 * //               Designator: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
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
 * //       MainAddress: { // RelatedPlace
 * //         PlaceId: "STRING_VALUE", // required
 * //         PlaceType: "STRING_VALUE", // required
 * //         Title: "STRING_VALUE", // required
 * //         Address: "<Address>",
 * //         Position: "<Position>",
 * //         AccessPoints: "<AccessPointList>",
 * //       },
 * //       SecondaryAddresses: [ // RelatedPlaceList
 * //         {
 * //           PlaceId: "STRING_VALUE", // required
 * //           PlaceType: "STRING_VALUE", // required
 * //           Title: "STRING_VALUE", // required
 * //           Address: "<Address>",
 * //           Position: "<Position>",
 * //           AccessPoints: "<AccessPointList>",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GeocodeCommandInput - {@link GeocodeCommandInput}
 * @returns {@link GeocodeCommandOutput}
 * @see {@link GeocodeCommandInput} for command's `input` shape.
 * @see {@link GeocodeCommandOutput} for command's `response` shape.
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
export class GeocodeCommand extends $Command
  .classBuilder<
    GeocodeCommandInput,
    GeocodeCommandOutput,
    GeoPlacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GeoPlacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PlacesService", "Geocode", {})
  .n("GeoPlacesClient", "GeocodeCommand")
  .f(GeocodeRequestFilterSensitiveLog, GeocodeResponseFilterSensitiveLog)
  .ser(se_GeocodeCommand)
  .de(de_GeocodeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GeocodeRequest;
      output: GeocodeResponse;
    };
    sdk: {
      input: GeocodeCommandInput;
      output: GeocodeCommandOutput;
    };
  };
}
