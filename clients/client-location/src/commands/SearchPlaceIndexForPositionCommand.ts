// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import type { SearchPlaceIndexForPositionRequest, SearchPlaceIndexForPositionResponse } from "../models/models_0";
import { SearchPlaceIndexForPosition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchPlaceIndexForPositionCommand}.
 */
export interface SearchPlaceIndexForPositionCommandInput extends SearchPlaceIndexForPositionRequest {}
/**
 * @public
 *
 * The output of {@link SearchPlaceIndexForPositionCommand}.
 */
export interface SearchPlaceIndexForPositionCommandOutput
  extends SearchPlaceIndexForPositionResponse,
    __MetadataBearer {}

/**
 * <important> <p>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to <a href="/location/latest/APIReference/API_geoplaces_ReverseGeocode.html"> <code>ReverseGeocode</code> </a> or <a href="/location/latest/APIReference/API_geoplaces_SearchNearby.html"> <code>SearchNearby</code> </a> unless you require Grab data.</p> <ul> <li> <p> <code>SearchPlaceIndexForPosition</code> is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).</p> </li> <li> <p>The version 2 <code>ReverseGeocode</code> operation gives better results in the address reverse-geocoding use case, while the version 2 <code>SearchNearby</code> operation gives better results when searching for businesses and points of interest near a specific location.</p> </li> <li> <p>If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under <code>geo-places</code> or <code>geo_places</code>, not under <code>location</code>.</p> </li> <li> <p>Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab.</p> </li> </ul> </important> <p>Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, SearchPlaceIndexForPositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, SearchPlaceIndexForPositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // SearchPlaceIndexForPositionRequest
 *   IndexName: "STRING_VALUE", // required
 *   Position: [ // Position // required
 *     Number("double"),
 *   ],
 *   MaxResults: Number("int"),
 *   Language: "STRING_VALUE",
 *   Key: "STRING_VALUE",
 * };
 * const command = new SearchPlaceIndexForPositionCommand(input);
 * const response = await client.send(command);
 * // { // SearchPlaceIndexForPositionResponse
 * //   Summary: { // SearchPlaceIndexForPositionSummary
 * //     Position: [ // Position // required
 * //       Number("double"),
 * //     ],
 * //     MaxResults: Number("int"),
 * //     DataSource: "STRING_VALUE", // required
 * //     Language: "STRING_VALUE",
 * //   },
 * //   Results: [ // SearchForPositionResultList // required
 * //     { // SearchForPositionResult
 * //       Place: { // Place
 * //         Label: "STRING_VALUE",
 * //         Geometry: { // PlaceGeometry
 * //           Point: [
 * //             Number("double"),
 * //           ],
 * //         },
 * //         AddressNumber: "STRING_VALUE",
 * //         Street: "STRING_VALUE",
 * //         Neighborhood: "STRING_VALUE",
 * //         Municipality: "STRING_VALUE",
 * //         SubRegion: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //         PostalCode: "STRING_VALUE",
 * //         Interpolated: true || false,
 * //         TimeZone: { // TimeZone
 * //           Name: "STRING_VALUE", // required
 * //           Offset: Number("int"),
 * //         },
 * //         UnitType: "STRING_VALUE",
 * //         UnitNumber: "STRING_VALUE",
 * //         Categories: [ // PlaceCategoryList
 * //           "STRING_VALUE",
 * //         ],
 * //         SupplementalCategories: [ // PlaceSupplementalCategoryList
 * //           "STRING_VALUE",
 * //         ],
 * //         SubMunicipality: "STRING_VALUE",
 * //       },
 * //       Distance: Number("double"), // required
 * //       PlaceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchPlaceIndexForPositionCommandInput - {@link SearchPlaceIndexForPositionCommandInput}
 * @returns {@link SearchPlaceIndexForPositionCommandOutput}
 * @see {@link SearchPlaceIndexForPositionCommandInput} for command's `input` shape.
 * @see {@link SearchPlaceIndexForPositionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 *
 * @public
 */
export class SearchPlaceIndexForPositionCommand extends $Command
  .classBuilder<
    SearchPlaceIndexForPositionCommandInput,
    SearchPlaceIndexForPositionCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "SearchPlaceIndexForPosition", {})
  .n("LocationClient", "SearchPlaceIndexForPositionCommand")
  .sc(SearchPlaceIndexForPosition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchPlaceIndexForPositionRequest;
      output: SearchPlaceIndexForPositionResponse;
    };
    sdk: {
      input: SearchPlaceIndexForPositionCommandInput;
      output: SearchPlaceIndexForPositionCommandOutput;
    };
  };
}
