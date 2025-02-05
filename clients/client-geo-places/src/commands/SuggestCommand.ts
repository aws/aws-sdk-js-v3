// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GeoPlacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GeoPlacesClient";
import {
  SuggestRequest,
  SuggestRequestFilterSensitiveLog,
  SuggestResponse,
  SuggestResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_SuggestCommand, se_SuggestCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SuggestCommand}.
 */
export interface SuggestCommandInput extends SuggestRequest {}
/**
 * @public
 *
 * The output of {@link SuggestCommand}.
 */
export interface SuggestCommandOutput extends SuggestResponse, __MetadataBearer {}

/**
 * <p>The <code>Suggest</code> operation finds addresses or place candidates based on
 *          incomplete or misspelled queries. You then select the best query to submit based on the
 *          returned results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GeoPlacesClient, SuggestCommand } from "@aws-sdk/client-geo-places"; // ES Modules import
 * // const { GeoPlacesClient, SuggestCommand } = require("@aws-sdk/client-geo-places"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GeoPlacesClient(config);
 * const input = { // SuggestRequest
 *   QueryText: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   MaxQueryRefinements: Number("int"),
 *   BiasPosition: [ // Position
 *     Number("double"),
 *   ],
 *   Filter: { // SuggestFilter
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
 *   AdditionalFeatures: [ // SuggestAdditionalFeatureList
 *     "STRING_VALUE",
 *   ],
 *   Language: "STRING_VALUE",
 *   PoliticalView: "STRING_VALUE",
 *   IntendedUse: "STRING_VALUE",
 *   Key: "STRING_VALUE",
 * };
 * const command = new SuggestCommand(input);
 * const response = await client.send(command);
 * // { // SuggestResponse
 * //   PricingBucket: "STRING_VALUE", // required
 * //   ResultItems: [ // SuggestResultItemList
 * //     { // SuggestResultItem
 * //       Title: "STRING_VALUE", // required
 * //       SuggestResultItemType: "STRING_VALUE", // required
 * //       Place: { // SuggestPlaceResult
 * //         PlaceId: "STRING_VALUE",
 * //         PlaceType: "STRING_VALUE",
 * //         Address: { // Address
 * //           Label: "STRING_VALUE",
 * //           Country: { // Country
 * //             Code2: "STRING_VALUE",
 * //             Code3: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //           },
 * //           Region: { // Region
 * //             Code: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //           },
 * //           SubRegion: { // SubRegion
 * //             Code: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //           },
 * //           Locality: "STRING_VALUE",
 * //           District: "STRING_VALUE",
 * //           SubDistrict: "STRING_VALUE",
 * //           PostalCode: "STRING_VALUE",
 * //           Block: "STRING_VALUE",
 * //           SubBlock: "STRING_VALUE",
 * //           Intersection: [ // IntersectionList
 * //             "STRING_VALUE",
 * //           ],
 * //           Street: "STRING_VALUE",
 * //           StreetComponents: [ // StreetComponentsList
 * //             { // StreetComponents
 * //               BaseName: "STRING_VALUE",
 * //               Type: "STRING_VALUE",
 * //               TypePlacement: "STRING_VALUE",
 * //               TypeSeparator: "STRING_VALUE",
 * //               Prefix: "STRING_VALUE",
 * //               Suffix: "STRING_VALUE",
 * //               Direction: "STRING_VALUE",
 * //               Language: "STRING_VALUE",
 * //             },
 * //           ],
 * //           AddressNumber: "STRING_VALUE",
 * //           Building: "STRING_VALUE",
 * //         },
 * //         Position: [ // Position
 * //           Number("double"),
 * //         ],
 * //         Distance: Number("long"),
 * //         MapView: [ // BoundingBox
 * //           Number("double"),
 * //         ],
 * //         Categories: [ // CategoryList
 * //           { // Category
 * //             Id: "STRING_VALUE", // required
 * //             Name: "STRING_VALUE", // required
 * //             LocalizedName: "STRING_VALUE",
 * //             Primary: true || false,
 * //           },
 * //         ],
 * //         FoodTypes: [ // FoodTypeList
 * //           { // FoodType
 * //             LocalizedName: "STRING_VALUE", // required
 * //             Id: "STRING_VALUE",
 * //             Primary: true || false,
 * //           },
 * //         ],
 * //         BusinessChains: [ // BusinessChainList
 * //           { // BusinessChain
 * //             Name: "STRING_VALUE",
 * //             Id: "STRING_VALUE",
 * //           },
 * //         ],
 * //         AccessPoints: [ // AccessPointList
 * //           { // AccessPoint
 * //             Position: [
 * //               Number("double"),
 * //             ],
 * //           },
 * //         ],
 * //         AccessRestrictions: [ // AccessRestrictionList
 * //           { // AccessRestriction
 * //             Restricted: true || false,
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
 * //         TimeZone: { // TimeZone
 * //           Name: "STRING_VALUE", // required
 * //           Offset: "STRING_VALUE",
 * //           OffsetSeconds: Number("long"),
 * //         },
 * //         PoliticalView: "STRING_VALUE",
 * //         Phonemes: { // PhonemeDetails
 * //           Title: [ // PhonemeTranscriptionList
 * //             { // PhonemeTranscription
 * //               Value: "STRING_VALUE",
 * //               Language: "STRING_VALUE",
 * //               Preferred: true || false,
 * //             },
 * //           ],
 * //           Address: { // AddressComponentPhonemes
 * //             Country: [
 * //               {
 * //                 Value: "STRING_VALUE",
 * //                 Language: "STRING_VALUE",
 * //                 Preferred: true || false,
 * //               },
 * //             ],
 * //             Region: [
 * //               {
 * //                 Value: "STRING_VALUE",
 * //                 Language: "STRING_VALUE",
 * //                 Preferred: true || false,
 * //               },
 * //             ],
 * //             SubRegion: [
 * //               {
 * //                 Value: "STRING_VALUE",
 * //                 Language: "STRING_VALUE",
 * //                 Preferred: true || false,
 * //               },
 * //             ],
 * //             Locality: [
 * //               {
 * //                 Value: "STRING_VALUE",
 * //                 Language: "STRING_VALUE",
 * //                 Preferred: true || false,
 * //               },
 * //             ],
 * //             District: "<PhonemeTranscriptionList>",
 * //             SubDistrict: "<PhonemeTranscriptionList>",
 * //             Block: "<PhonemeTranscriptionList>",
 * //             SubBlock: "<PhonemeTranscriptionList>",
 * //             Street: "<PhonemeTranscriptionList>",
 * //           },
 * //         },
 * //       },
 * //       Query: { // SuggestQueryResult
 * //         QueryId: "STRING_VALUE",
 * //         QueryType: "STRING_VALUE",
 * //       },
 * //       Highlights: { // SuggestHighlights
 * //         Title: [ // HighlightList
 * //           { // Highlight
 * //             StartIndex: Number("int"),
 * //             EndIndex: Number("int"),
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         Address: { // SuggestAddressHighlights
 * //           Label: [
 * //             {
 * //               StartIndex: Number("int"),
 * //               EndIndex: Number("int"),
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   QueryRefinements: [ // QueryRefinementList
 * //     { // QueryRefinement
 * //       RefinedTerm: "STRING_VALUE", // required
 * //       OriginalTerm: "STRING_VALUE", // required
 * //       StartIndex: Number("int"), // required
 * //       EndIndex: Number("int"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SuggestCommandInput - {@link SuggestCommandInput}
 * @returns {@link SuggestCommandOutput}
 * @see {@link SuggestCommandInput} for command's `input` shape.
 * @see {@link SuggestCommandOutput} for command's `response` shape.
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
 * @public
 */
export class SuggestCommand extends $Command
  .classBuilder<
    SuggestCommandInput,
    SuggestCommandOutput,
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
  .s("PlacesService", "Suggest", {})
  .n("GeoPlacesClient", "SuggestCommand")
  .f(SuggestRequestFilterSensitiveLog, SuggestResponseFilterSensitiveLog)
  .ser(se_SuggestCommand)
  .de(de_SuggestCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SuggestRequest;
      output: SuggestResponse;
    };
    sdk: {
      input: SuggestCommandInput;
      output: SuggestCommandOutput;
    };
  };
}
