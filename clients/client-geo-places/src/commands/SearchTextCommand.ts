// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GeoPlacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GeoPlacesClient";
import { SearchTextRequest, SearchTextResponse } from "../models/models_0";
import { SearchText } from "../schemas/schemas_1_Geocode";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchTextCommand}.
 */
export interface SearchTextCommandInput extends SearchTextRequest {}
/**
 * @public
 *
 * The output of {@link SearchTextCommand}.
 */
export interface SearchTextCommandOutput extends SearchTextResponse, __MetadataBearer {}

/**
 * <p> <code>SearchText</code> searches for geocode and place information. You can then complete a follow-up query suggested from the <code>Suggest</code> API via a query id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GeoPlacesClient, SearchTextCommand } from "@aws-sdk/client-geo-places"; // ES Modules import
 * // const { GeoPlacesClient, SearchTextCommand } = require("@aws-sdk/client-geo-places"); // CommonJS import
 * // import type { GeoPlacesClientConfig } from "@aws-sdk/client-geo-places";
 * const config = {}; // type is GeoPlacesClientConfig
 * const client = new GeoPlacesClient(config);
 * const input = { // SearchTextRequest
 *   QueryText: "STRING_VALUE",
 *   QueryId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   BiasPosition: [ // Position
 *     Number("double"),
 *   ],
 *   Filter: { // SearchTextFilter
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
 *   },
 *   AdditionalFeatures: [ // SearchTextAdditionalFeatureList
 *     "STRING_VALUE",
 *   ],
 *   Language: "STRING_VALUE",
 *   PoliticalView: "STRING_VALUE",
 *   IntendedUse: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Key: "STRING_VALUE",
 * };
 * const command = new SearchTextCommand(input);
 * const response = await client.send(command);
 * // { // SearchTextResponse
 * //   PricingBucket: "STRING_VALUE", // required
 * //   ResultItems: [ // SearchTextResultItemList
 * //     { // SearchTextResultItem
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
 * //       BusinessChains: [ // BusinessChainList
 * //         { // BusinessChain
 * //           Name: "STRING_VALUE",
 * //           Id: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Contacts: { // Contacts
 * //         Phones: [ // ContactDetailsList
 * //           { // ContactDetails
 * //             Label: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             Categories: [
 * //               {
 * //                 Id: "STRING_VALUE", // required
 * //                 Name: "STRING_VALUE", // required
 * //                 LocalizedName: "STRING_VALUE",
 * //                 Primary: true || false,
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         Faxes: [
 * //           {
 * //             Label: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             Categories: [
 * //               {
 * //                 Id: "STRING_VALUE", // required
 * //                 Name: "STRING_VALUE", // required
 * //                 LocalizedName: "STRING_VALUE",
 * //                 Primary: true || false,
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         Websites: [
 * //           {
 * //             Label: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             Categories: [
 * //               {
 * //                 Id: "STRING_VALUE", // required
 * //                 Name: "STRING_VALUE", // required
 * //                 LocalizedName: "STRING_VALUE",
 * //                 Primary: true || false,
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         Emails: [
 * //           {
 * //             Label: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             Categories: [
 * //               {
 * //                 Id: "STRING_VALUE", // required
 * //                 Name: "STRING_VALUE", // required
 * //                 LocalizedName: "STRING_VALUE",
 * //                 Primary: true || false,
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       OpeningHours: [ // OpeningHoursList
 * //         { // OpeningHours
 * //           Display: [ // OpeningHoursDisplayList
 * //             "STRING_VALUE",
 * //           ],
 * //           OpenNow: true || false,
 * //           Components: [ // OpeningHoursComponentsList
 * //             { // OpeningHoursComponents
 * //               OpenTime: "STRING_VALUE",
 * //               OpenDuration: "STRING_VALUE",
 * //               Recurrence: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Categories: "<CategoryList>",
 * //         },
 * //       ],
 * //       AccessPoints: [ // AccessPointList
 * //         { // AccessPoint
 * //           Position: [
 * //             Number("double"),
 * //           ],
 * //         },
 * //       ],
 * //       AccessRestrictions: [ // AccessRestrictionList
 * //         { // AccessRestriction
 * //           Restricted: true || false,
 * //           Categories: "<CategoryList>",
 * //         },
 * //       ],
 * //       TimeZone: { // TimeZone
 * //         Name: "STRING_VALUE", // required
 * //         Offset: "STRING_VALUE",
 * //         OffsetSeconds: Number("long"),
 * //       },
 * //       PoliticalView: "STRING_VALUE",
 * //       Phonemes: { // PhonemeDetails
 * //         Title: [ // PhonemeTranscriptionList
 * //           { // PhonemeTranscription
 * //             Value: "STRING_VALUE",
 * //             Language: "STRING_VALUE",
 * //             Preferred: true || false,
 * //           },
 * //         ],
 * //         Address: { // AddressComponentPhonemes
 * //           Country: [
 * //             {
 * //               Value: "STRING_VALUE",
 * //               Language: "STRING_VALUE",
 * //               Preferred: true || false,
 * //             },
 * //           ],
 * //           Region: [
 * //             {
 * //               Value: "STRING_VALUE",
 * //               Language: "STRING_VALUE",
 * //               Preferred: true || false,
 * //             },
 * //           ],
 * //           SubRegion: [
 * //             {
 * //               Value: "STRING_VALUE",
 * //               Language: "STRING_VALUE",
 * //               Preferred: true || false,
 * //             },
 * //           ],
 * //           Locality: [
 * //             {
 * //               Value: "STRING_VALUE",
 * //               Language: "STRING_VALUE",
 * //               Preferred: true || false,
 * //             },
 * //           ],
 * //           District: "<PhonemeTranscriptionList>",
 * //           SubDistrict: "<PhonemeTranscriptionList>",
 * //           Block: "<PhonemeTranscriptionList>",
 * //           SubBlock: "<PhonemeTranscriptionList>",
 * //           Street: "<PhonemeTranscriptionList>",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchTextCommandInput - {@link SearchTextCommandInput}
 * @returns {@link SearchTextCommandOutput}
 * @see {@link SearchTextCommandInput} for command's `input` shape.
 * @see {@link SearchTextCommandOutput} for command's `response` shape.
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
export class SearchTextCommand extends $Command
  .classBuilder<
    SearchTextCommandInput,
    SearchTextCommandOutput,
    GeoPlacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GeoPlacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PlacesService", "SearchText", {})
  .n("GeoPlacesClient", "SearchTextCommand")
  .sc(SearchText)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchTextRequest;
      output: SearchTextResponse;
    };
    sdk: {
      input: SearchTextCommandInput;
      output: SearchTextCommandOutput;
    };
  };
}
