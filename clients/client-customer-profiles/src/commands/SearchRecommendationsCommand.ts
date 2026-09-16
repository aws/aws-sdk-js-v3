// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchRecommendationsRequest, SearchRecommendationsResponse } from "../models/models_1";
import { SearchRecommendations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchRecommendationsCommand}.
 */
export interface SearchRecommendationsCommandInput extends SearchRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link SearchRecommendationsCommand}.
 */
export interface SearchRecommendationsCommandOutput extends SearchRecommendationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves recommendations for a profile in a specific domain. The profile is identified
 *          using a search key, which consists of a <code>KeyName</code> and a <code>KeyValues</code> list.
 *          The <code>KeyName</code> can be a predefined key (for example, <code>_profileId</code>,
 *          <code>_phone</code>, <code>_email</code>) or a custom-defined key.</p>
 *          <p>The search key must match exactly one profile. If no profile matches the search key, the
 *          operation returns a <code>ResourceNotFoundException</code>. If more than one profile matches
 *          the search key, the operation returns a <code>BadRequestException</code>. You can use the
 *          SearchProfiles API to review the matching profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, SearchRecommendationsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, SearchRecommendationsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // SearchRecommendationsRequest
 *   DomainName: "STRING_VALUE", // required
 *   KeyName: "STRING_VALUE", // required
 *   KeyValues: [ // KeyValuesList // required
 *     "STRING_VALUE",
 *   ],
 *   Recommender: { // Recommender
 *     Name: "STRING_VALUE", // required
 *     Filters: [ // RecommenderFilters
 *       { // RecommenderFilter
 *         Name: "STRING_VALUE",
 *         Values: { // RecommenderFilterValues
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     PromotionalFilters: [ // RecommenderPromotionalFilters
 *       { // RecommenderPromotionalFilter
 *         Name: "STRING_VALUE",
 *         Values: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         PromotionName: "STRING_VALUE",
 *         PercentPromotedItems: Number("int"),
 *       },
 *     ],
 *   },
 *   CandidateIds: [ // CandidateIdList
 *     "STRING_VALUE",
 *   ],
 *   Context: { // RecommenderContext
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Diversity: { // RecommendationDiversityConfig
 *     Enabled: true || false, // required
 *     Values: { // DiversityValuesMap
 *       "<keys>": Number("int"),
 *     },
 *   },
 *   Metadata: { // RecommendationMetadata
 *     Columns: [ // MetadataColumnsList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   MaxRecommendations: Number("int"),
 * };
 * const command = new SearchRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // SearchRecommendationsResponse
 * //   ProfileId: "STRING_VALUE",
 * //   Recommendations: [ // Recommendations
 * //     { // Recommendation
 * //       CatalogItem: { // CatalogItem
 * //         Id: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         Code: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //         Category: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         AdditionalInformation: "STRING_VALUE",
 * //         ImageLink: "STRING_VALUE",
 * //         Link: "STRING_VALUE",
 * //         CreatedAt: new Date("TIMESTAMP"),
 * //         UpdatedAt: new Date("TIMESTAMP"),
 * //         Price: "STRING_VALUE",
 * //         Attributes: { // Attributes
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       Score: Number("double"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchRecommendationsCommandInput - {@link SearchRecommendationsCommandInput}
 * @returns {@link SearchRecommendationsCommandOutput}
 * @see {@link SearchRecommendationsCommandInput} for command's `input` shape.
 * @see {@link SearchRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class SearchRecommendationsCommand extends command<SearchRecommendationsCommandInput, SearchRecommendationsCommandOutput>(
  _ep0,
  _mw0,
  "SearchRecommendations",
  SearchRecommendations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchRecommendationsRequest;
      output: SearchRecommendationsResponse;
    };
    sdk: {
      input: SearchRecommendationsCommandInput;
      output: SearchRecommendationsCommandOutput;
    };
  };
}
