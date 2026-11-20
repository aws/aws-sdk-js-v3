// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchFacetsInput, SearchFacetsOutput } from "../models/models_0";
import { SearchFacets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Retrieves the available facet values for filtering listings, such as categories, pricing models, fulfillment option types, publishers, and customer ratings. Each facet value includes a count of matching listings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDiscoveryClient, SearchFacetsCommand } from "@aws-sdk/client-marketplace-discovery"; // ES Modules import
 * // const { MarketplaceDiscoveryClient, SearchFacetsCommand } = require("@aws-sdk/client-marketplace-discovery"); // CommonJS import
 * // import type { MarketplaceDiscoveryClientConfig } from "@aws-sdk/client-marketplace-discovery";
 * const config = {}; // type is MarketplaceDiscoveryClientConfig
 * const client = new MarketplaceDiscoveryClient(config);
 * const input = { // SearchFacetsInput
 *   locale: "STRING_VALUE",
 *   searchText: "STRING_VALUE",
 *   filters: [ // SearchFilterList
 *     { // SearchFilter
 *       filterType: "MIN_AVERAGE_CUSTOMER_RATING" || "MAX_AVERAGE_CUSTOMER_RATING" || "CATEGORY" || "PUBLISHER" || "FULFILLMENT_OPTION_TYPE" || "PRICING_MODEL" || "PRICING_UNIT" || "DEPLOYED_ON_AWS" || "NUMBER_OF_PRODUCTS" || "CERTIFICATES" || "PRODUCT_ID" || "SPECIALIZATION" || "SPECIALIZATION_CATEGORY" || "SELLER_ENGAGEMENT" || "TRUST_CENTER", // required
 *       filterValues: [ // SearchFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   facetTypes: [ // FacetTypeList
 *     "AVERAGE_CUSTOMER_RATING" || "CATEGORY" || "PUBLISHER" || "FULFILLMENT_OPTION_TYPE" || "PRICING_MODEL" || "PRICING_UNIT" || "DEPLOYED_ON_AWS" || "NUMBER_OF_PRODUCTS" || "CERTIFICATES" || "SPECIALIZATION" || "SPECIALIZATION_CATEGORY" || "SELLER_ENGAGEMENT" || "TRUST_CENTER",
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
 *  <p>You don't have sufficient access to perform this action. Verify that you have the required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Reduce the frequency of your requests and retry.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service. Check the <code>reason</code> field for the constraint that failed.</p>
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
 *   locale: "en-US",
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
 *   ],
 *   locale: "en-US"
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
 * @example Get specialization facets
 * ```javascript
 * // Retrieve specialization and specialization category facets for listings that earned the Travel and Hospitality Services Competency
 * const input = {
 *   facetTypes: [
 *     "SPECIALIZATION",
 *     "SPECIALIZATION_CATEGORY"
 *   ],
 *   filters: [
 *     {
 *       filterType: "SPECIALIZATION",
 *       filterValues: [
 *         "spec-0ae8wm2xxde76e"
 *       ]
 *     }
 *   ],
 *   locale: "en-US"
 * };
 * const command = new SearchFacetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingFacets: {
 *     SPECIALIZATION: [
 *       {
 *         count: 12,
 *         displayName: "Travel and Hospitality Services Competency",
 *         value: "spec-0ae8wm2xxde76e"
 *       },
 *       {
 *         count: 3,
 *         displayName: "Migration and Modernization Software Competency",
 *         value: "spec-znwmf49a15h7a6"
 *       }
 *     ],
 *     SPECIALIZATION_CATEGORY: [
 *       {
 *         count: 9,
 *         displayName: "Digital Customer Engagement",
 *         parent: "spec-0ae8wm2xxde76e",
 *         value: "spec-4xtf39u7bve512"
 *       },
 *       {
 *         count: 4,
 *         displayName: "Internet of Things",
 *         parent: "spec-0ae8wm2xxde76e",
 *         value: "spec-avu0aodtdpco2t"
 *       },
 *       {
 *         count: 2,
 *         displayName: "Data Mobility",
 *         parent: "spec-znwmf49a15h7a6",
 *         value: "spec-a9vn6mto0omjgr"
 *       }
 *     ]
 *   },
 *   totalResults: 12
 * }
 * *\/
 * ```
 *
 * @example Get certification facets
 * ```javascript
 * // Retrieve certification values available for filtering
 * const input = {
 *   facetTypes: [
 *     "CERTIFICATES"
 *   ],
 *   locale: "en-US"
 * };
 * const command = new SearchFacetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingFacets: {
 *     CERTIFICATES: [
 *       {
 *         count: 80,
 *         displayName: "SOC 2 Type II",
 *         value: "SOC2_TYPE_2"
 *       },
 *       {
 *         count: 65,
 *         displayName: "ISO 27001",
 *         value: "ISO_27001"
 *       }
 *     ]
 *   },
 *   totalResults: 4500
 * }
 * *\/
 * ```
 *
 * @example Get Trust Center availability facets
 * ```javascript
 * // Retrieve Trust Center availability for filtering
 * const input = {
 *   facetTypes: [
 *     "TRUST_CENTER"
 *   ],
 *   locale: "en-US"
 * };
 * const command = new SearchFacetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingFacets: {
 *     TRUST_CENTER: [
 *       {
 *         count: 125,
 *         displayName: "Trust Center available",
 *         value: "HAS_TRUST_CENTER"
 *       }
 *     ]
 *   },
 *   totalResults: 4500
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SearchFacetsCommand extends command<SearchFacetsCommandInput, SearchFacetsCommandOutput>(
  _ep0,
  _mw0,
  "SearchFacets",
  SearchFacets$
) {
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
