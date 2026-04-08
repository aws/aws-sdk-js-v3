// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MarketplaceDiscoveryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceDiscoveryClient";
import type { SearchFacetsInput, SearchFacetsOutput } from "../models/models_0";
import { SearchFacets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchFacetsCommand}.
 */
export interface SearchFacetsCommandInput extends SearchFacetsInput {}
/**
 * @public
 *
 * The output of {@link SearchFacetsCommand}.
 */
export interface SearchFacetsCommandOutput extends SearchFacetsOutput, __MetadataBearer {}

/**
 * <p>Returns available facet values for filtering listings, such as categories, pricing models, fulfillment option types, publishers, and customer ratings. Each facet value includes a count of matching listings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDiscoveryClient, SearchFacetsCommand } from "@aws-sdk/client-marketplace-discovery"; // ES Modules import
 * // const { MarketplaceDiscoveryClient, SearchFacetsCommand } = require("@aws-sdk/client-marketplace-discovery"); // CommonJS import
 * // import type { MarketplaceDiscoveryClientConfig } from "@aws-sdk/client-marketplace-discovery";
 * const config = {}; // type is MarketplaceDiscoveryClientConfig
 * const client = new MarketplaceDiscoveryClient(config);
 * const input = { // SearchFacetsInput
 *   searchText: "STRING_VALUE",
 *   filters: [ // SearchFilterList
 *     { // SearchFilter
 *       filterType: "MIN_AVERAGE_CUSTOMER_RATING" || "MAX_AVERAGE_CUSTOMER_RATING" || "CATEGORY" || "PUBLISHER" || "FULFILLMENT_OPTION_TYPE" || "PRICING_MODEL" || "PRICING_UNIT" || "DEPLOYED_ON_AWS" || "NUMBER_OF_PRODUCTS", // required
 *       filterValues: [ // SearchFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   facetTypes: [ // FacetTypeList
 *     "AVERAGE_CUSTOMER_RATING" || "CATEGORY" || "PUBLISHER" || "FULFILLMENT_OPTION_TYPE" || "PRICING_MODEL" || "PRICING_UNIT" || "DEPLOYED_ON_AWS" || "NUMBER_OF_PRODUCTS",
 *   ],
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new SearchFacetsCommand(input);
 * const response = await client.send(command);
 * // { // SearchFacetsOutput
 * //   totalResults: Number("long"), // required
 * //   listingFacets: { // TypeToFacetMap // required
 * //     "<keys>": [ // ListingFacetList
 * //       { // ListingFacet
 * //         value: "STRING_VALUE", // required
 * //         displayName: "STRING_VALUE", // required
 * //         parent: "STRING_VALUE",
 * //         count: Number("long"), // required
 * //       },
 * //     ],
 * //   },
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchFacetsCommandInput - {@link SearchFacetsCommandInput}
 * @returns {@link SearchFacetsCommandOutput}
 * @see {@link SearchFacetsCommandInput} for command's `input` shape.
 * @see {@link SearchFacetsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceDiscoveryClientResolvedConfig | config} for MarketplaceDiscoveryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link MarketplaceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceDiscovery service.</p>
 *
 *
 * @example Get facets for machine learning category
 * ```javascript
 * // Retrieve available facet values for listings in the machine learning category
 * const input = {
 *   facetTypes: [
 *     "FULFILLMENT_OPTION_TYPE",
 *     "PRICING_MODEL"
 *   ],
 *   filters: [
 *     {
 *       filterType: "CATEGORY",
 *       filterValues: [
 *         "machine-learning"
 *       ]
 *     }
 *   ],
 *   searchText: "analytics"
 * };
 * const command = new SearchFacetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingFacets: {
 *     FULFILLMENT_OPTION_TYPE: [
 *       {
 *         count: 250,
 *         displayName: "SaaS",
 *         value: "SAAS"
 *       },
 *       {
 *         count: 120,
 *         displayName: "Container",
 *         value: "CONTAINER"
 *       },
 *       {
 *         count: 80,
 *         displayName: "SageMaker Algorithm",
 *         value: "SAGEMAKER_ALGORITHM"
 *       }
 *     ],
 *     PRICING_MODEL: [
 *       {
 *         count: 300,
 *         displayName: "Usage-Based",
 *         value: "USAGE"
 *       },
 *       {
 *         count: 100,
 *         displayName: "Free",
 *         value: "FREE"
 *       },
 *       {
 *         count: 50,
 *         displayName: "Upfront Commitment",
 *         value: "CONTRACT"
 *       }
 *     ]
 *   },
 *   totalResults: 450
 * }
 * *\/
 * ```
 *
 * @example Get facets with term and rating range filters
 * ```javascript
 * // Retrieve facets for security listings with ratings between 3.0 and 5.0 stars
 * const input = {
 *   facetTypes: [
 *     "PRICING_MODEL",
 *     "AVERAGE_CUSTOMER_RATING"
 *   ],
 *   filters: [
 *     {
 *       filterType: "CATEGORY",
 *       filterValues: [
 *         "security"
 *       ]
 *     },
 *     {
 *       filterType: "MIN_AVERAGE_CUSTOMER_RATING",
 *       filterValues: [
 *         "3.0"
 *       ]
 *     },
 *     {
 *       filterType: "MAX_AVERAGE_CUSTOMER_RATING",
 *       filterValues: [
 *         "5.0"
 *       ]
 *     }
 *   ]
 * };
 * const command = new SearchFacetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingFacets: {
 *     AVERAGE_CUSTOMER_RATING: [
 *       {
 *         count: 30,
 *         displayName: "5.0",
 *         value: "5.0"
 *       },
 *       {
 *         count: 35,
 *         displayName: "4.0",
 *         value: "4.0"
 *       },
 *       {
 *         count: 20,
 *         displayName: "3.0",
 *         value: "3.0"
 *       }
 *     ],
 *     PRICING_MODEL: [
 *       {
 *         count: 50,
 *         displayName: "Usage-Based",
 *         value: "USAGE"
 *       },
 *       {
 *         count: 35,
 *         displayName: "Free",
 *         value: "FREE"
 *       }
 *     ]
 *   },
 *   totalResults: 85
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SearchFacetsCommand extends $Command
  .classBuilder<
    SearchFacetsCommandInput,
    SearchFacetsCommandOutput,
    MarketplaceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceDiscoveryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMarketplaceDiscovery", "SearchFacets", {})
  .n("MarketplaceDiscoveryClient", "SearchFacetsCommand")
  .sc(SearchFacets$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchFacetsInput;
      output: SearchFacetsOutput;
    };
    sdk: {
      input: SearchFacetsCommandInput;
      output: SearchFacetsCommandOutput;
    };
  };
}
