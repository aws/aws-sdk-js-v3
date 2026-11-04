// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AutocompleteRequest, AutocompleteResponse } from "../models/models_0";
import { Autocomplete$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AutocompleteCommand}.
 */
export interface AutocompleteCommandInput extends AutocompleteRequest {}
/**
 * @public
 *
 * The output of {@link AutocompleteCommand}.
 */
export interface AutocompleteCommandOutput extends AutocompleteResponse, __MetadataBearer {}

/**
 * `Autocomplete` completes potential places and addresses as the user types, based on the partial input. The API enhances the efficiency and accuracy of address by completing query based on a few entered keystrokes. It helps you by completing partial queries with valid address completion. Also, the API supports the filtering of results based on geographic location, country, or specific place types, and can be tailored using optional parameters like language and political views. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
 *
 * For more information, see [Autocomplete](https://docs.aws.amazon.com/location/latest/developerguide/autocomplete.html) in the *Amazon Location Service Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GeoPlacesClient, AutocompleteCommand } from "@aws-sdk/client-geo-places"; // ES Modules import
 * // const { GeoPlacesClient, AutocompleteCommand } = require("@aws-sdk/client-geo-places"); // CommonJS import
 * // import type { GeoPlacesClientConfig } from "@aws-sdk/client-geo-places";
 * const config = {}; // type is GeoPlacesClientConfig
 * const client = new GeoPlacesClient(config);
 * const input = { // AutocompleteRequest
 *   QueryText: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   BiasPosition: [ // Position
 *     Number("double"),
 *   ],
 *   Filter: { // AutocompleteFilter
 *     BoundingBox: [ // BoundingBox
 *       Number("double"),
 *     ],
 *     Circle: { // FilterCircle
 *       Center: [ // required
 *         Number("double"),
 *       ],
 *       Radius: Number("long"), // required
 *     },
 *     IncludeCountries: [ // CountryCodeList
 *       "STRING_VALUE",
 *     ],
 *     IncludePlaceTypes: [ // AutocompleteFilterPlaceTypeList
 *       "Locality" || "PostalCode" || "Street" || "Intersection" || "PointAddress" || "InterpolatedAddress" || "Country" || "Region",
 *     ],
 *   },
 *   PostalCodeMode: "MergeAllSpannedLocalities" || "EnumerateSpannedLocalities" || "EnumerateSpannedDistricts",
 *   AdditionalFeatures: [ // AutocompleteAdditionalFeatureList
 *     "Core",
 *   ],
 *   Language: "STRING_VALUE",
 *   PoliticalView: "STRING_VALUE",
 *   IntendedUse: "SingleUse",
 *   Key: "STRING_VALUE",
 * };
 * const command = new AutocompleteCommand(input);
 * const response = await client.send(command);
 * // { // AutocompleteResponse
 * //   PricingBucket: "STRING_VALUE", // required
 * //   ResultItems: [ // AutocompleteResultItemList
 * //     { // AutocompleteResultItem
 * //       PlaceId: "STRING_VALUE", // required
 * //       PlaceType: "Country" || "Region" || "SubRegion" || "Locality" || "District" || "SubDistrict" || "PostalCode" || "Block" || "SubBlock" || "Intersection" || "Street" || "PointOfInterest" || "PointAddress" || "InterpolatedAddress" || "SecondaryAddress" || "InferredSecondaryAddress", // required
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
 * //             TypePlacement: "BeforeBaseName" || "AfterBaseName",
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
 * //             Designator: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       Distance: Number("long"),
 * //       Language: "STRING_VALUE",
 * //       PoliticalView: "STRING_VALUE",
 * //       Highlights: { // AutocompleteHighlights
 * //         Title: [ // HighlightList
 * //           { // Highlight
 * //             StartIndex: Number("int"),
 * //             EndIndex: Number("int"),
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         Address: { // AutocompleteAddressHighlights
 * //           Label: [
 * //             {
 * //               StartIndex: Number("int"),
 * //               EndIndex: Number("int"),
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Country: { // CountryHighlights
 * //             Code: "<HighlightList>",
 * //             Name: "<HighlightList>",
 * //           },
 * //           Region: { // RegionHighlights
 * //             Code: "<HighlightList>",
 * //             Name: "<HighlightList>",
 * //           },
 * //           SubRegion: { // SubRegionHighlights
 * //             Code: "<HighlightList>",
 * //             Name: "<HighlightList>",
 * //           },
 * //           Locality: "<HighlightList>",
 * //           District: "<HighlightList>",
 * //           SubDistrict: "<HighlightList>",
 * //           Street: "<HighlightList>",
 * //           Block: "<HighlightList>",
 * //           SubBlock: "<HighlightList>",
 * //           Intersection: [ // IntersectionHighlightsList
 * //             "<HighlightList>",
 * //           ],
 * //           PostalCode: "<HighlightList>",
 * //           AddressNumber: "<HighlightList>",
 * //           Building: "<HighlightList>",
 * //         },
 * //       },
 * //       EstimatedPointAddress: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AutocompleteCommandInput - {@link AutocompleteCommandInput}
 * @returns {@link AutocompleteCommandOutput}
 * @see {@link AutocompleteCommandInput} for command's `input` shape.
 * @see {@link AutocompleteCommandOutput} for command's `response` shape.
 * @see {@link GeoPlacesClientResolvedConfig | config} for GeoPlacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action.
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
 * @throws {@link GeoPlacesServiceException}
 *
 * Base exception class for all service exceptions from GeoPlaces service.
 *
 * @public
 */
export class AutocompleteCommand extends command<AutocompleteCommandInput, AutocompleteCommandOutput>(
  _ep0,
  _mw0,
  "Autocomplete",
  Autocomplete$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AutocompleteRequest;
      output: AutocompleteResponse;
    };
    sdk: {
      input: AutocompleteCommandInput;
      output: AutocompleteCommandOutput;
    };
  };
}
