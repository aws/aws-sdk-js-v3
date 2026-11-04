// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchPlaceIndexForPositionRequest, SearchPlaceIndexForPositionResponse } from "../models/models_0";
import { SearchPlaceIndexForPosition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface SearchPlaceIndexForPositionCommandOutput extends SearchPlaceIndexForPositionResponse, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This operation is no longer current and may be deprecated in the future. We recommend you upgrade to [`ReverseGeocode`](/location/latest/APIReference/API_geoplaces_ReverseGeocode.html) or [`SearchNearby`](/location/latest/APIReference/API_geoplaces_SearchNearby.html) unless you require Grab data.
 * >
 * > - `SearchPlaceIndexForPosition` is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).
 * > - The version 2 `ReverseGeocode` operation gives better results in the address reverse-geocoding use case, while the version 2 `SearchNearby` operation gives better results when searching for businesses and points of interest near a specific location.
 * > - If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under `geo-places` or `geo_places`, not under `location`.
 * > - Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab.
 *
 * Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.
 *
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
 *
 * The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that you've entered was not found in your AWS account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to meet the constraints specified by the AWS service.
 *
 * @throws {@link LocationServiceException}
 *
 * Base exception class for all service exceptions from Location service.
 *
 * @public
 */
export class SearchPlaceIndexForPositionCommand extends command<SearchPlaceIndexForPositionCommandInput, SearchPlaceIndexForPositionCommandOutput>(
  _ep0,
  _mw0,
  "SearchPlaceIndexForPosition",
  SearchPlaceIndexForPosition$
) {
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
