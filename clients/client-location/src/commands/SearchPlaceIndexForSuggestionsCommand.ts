// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchPlaceIndexForSuggestionsRequest, SearchPlaceIndexForSuggestionsResponse } from "../models/models_0";
import { SearchPlaceIndexForSuggestions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchPlaceIndexForSuggestionsCommand}.
 */
export interface SearchPlaceIndexForSuggestionsCommandInput extends SearchPlaceIndexForSuggestionsRequest {}
/**
 * @public
 *
 * The output of {@link SearchPlaceIndexForSuggestionsCommand}.
 */
export interface SearchPlaceIndexForSuggestionsCommandOutput extends SearchPlaceIndexForSuggestionsResponse, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This operation is no longer current and may be deprecated in the future. We recommend you upgrade to [`Suggest`](/location/latest/APIReference/API_geoplaces_Suggest.html) or [`Autocomplete`](/location/latest/APIReference/API_geoplaces_Autocomplete.html) unless you require Grab data.
 * >
 * > - `SearchPlaceIndexForSuggestions` is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).
 * > - The version 2 `Suggest` operation gives better results for typeahead place search suggestions with fuzzy matching, while the version 2 `Autocomplete` operation gives better results for address completion based on partial input.
 * > - If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under `geo-places` or `geo_places`, not under `location`.
 * > - Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab.
 *
 * Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching.
 *
 * Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.
 *
 * > **Note:** You can search for suggested place names near a specified position by using `BiasPosition`, or filter results within a bounding box by using `FilterBBox`. These parameters are mutually exclusive; using both `BiasPosition` and `FilterBBox` in the same command returns an error.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, SearchPlaceIndexForSuggestionsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, SearchPlaceIndexForSuggestionsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // SearchPlaceIndexForSuggestionsRequest
 *   IndexName: "STRING_VALUE", // required
 *   Text: "STRING_VALUE", // required
 *   BiasPosition: [ // Position
 *     Number("double"),
 *   ],
 *   FilterBBox: [ // BoundingBox
 *     Number("double"),
 *   ],
 *   FilterCountries: [ // CountryCodeList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   Language: "STRING_VALUE",
 *   FilterCategories: [ // FilterPlaceCategoryList
 *     "STRING_VALUE",
 *   ],
 *   Key: "STRING_VALUE",
 * };
 * const command = new SearchPlaceIndexForSuggestionsCommand(input);
 * const response = await client.send(command);
 * // { // SearchPlaceIndexForSuggestionsResponse
 * //   Summary: { // SearchPlaceIndexForSuggestionsSummary
 * //     Text: "STRING_VALUE", // required
 * //     BiasPosition: [ // Position
 * //       Number("double"),
 * //     ],
 * //     FilterBBox: [ // BoundingBox
 * //       Number("double"),
 * //     ],
 * //     FilterCountries: [ // CountryCodeList
 * //       "STRING_VALUE",
 * //     ],
 * //     MaxResults: Number("int"),
 * //     DataSource: "STRING_VALUE", // required
 * //     Language: "STRING_VALUE",
 * //     FilterCategories: [ // FilterPlaceCategoryList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   Results: [ // SearchForSuggestionsResultList // required
 * //     { // SearchForSuggestionsResult
 * //       Text: "STRING_VALUE", // required
 * //       PlaceId: "STRING_VALUE",
 * //       Categories: [ // PlaceCategoryList
 * //         "STRING_VALUE",
 * //       ],
 * //       SupplementalCategories: [ // PlaceSupplementalCategoryList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchPlaceIndexForSuggestionsCommandInput - {@link SearchPlaceIndexForSuggestionsCommandInput}
 * @returns {@link SearchPlaceIndexForSuggestionsCommandOutput}
 * @see {@link SearchPlaceIndexForSuggestionsCommandInput} for command's `input` shape.
 * @see {@link SearchPlaceIndexForSuggestionsCommandOutput} for command's `response` shape.
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
export class SearchPlaceIndexForSuggestionsCommand extends command<SearchPlaceIndexForSuggestionsCommandInput, SearchPlaceIndexForSuggestionsCommandOutput>(
  _ep0,
  _mw0,
  "SearchPlaceIndexForSuggestions",
  SearchPlaceIndexForSuggestions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchPlaceIndexForSuggestionsRequest;
      output: SearchPlaceIndexForSuggestionsResponse;
    };
    sdk: {
      input: SearchPlaceIndexForSuggestionsCommandInput;
      output: SearchPlaceIndexForSuggestionsCommandOutput;
    };
  };
}
