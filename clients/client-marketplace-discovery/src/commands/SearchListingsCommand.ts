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
import type { SearchListingsInput, SearchListingsOutput } from "../models/models_0";
import { SearchListings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchListingsCommand}.
 */
export interface SearchListingsCommandInput extends SearchListingsInput {}
/**
 * @public
 *
 * The output of {@link SearchListingsCommand}.
 */
export interface SearchListingsCommandOutput extends SearchListingsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of product listings based on search criteria and filters. You can search by keyword, filter by category, pricing model, fulfillment type, and other attributes, and sort results by relevance or customer rating.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDiscoveryClient, SearchListingsCommand } from "@aws-sdk/client-marketplace-discovery"; // ES Modules import
 * // const { MarketplaceDiscoveryClient, SearchListingsCommand } = require("@aws-sdk/client-marketplace-discovery"); // CommonJS import
 * // import type { MarketplaceDiscoveryClientConfig } from "@aws-sdk/client-marketplace-discovery";
 * const config = {}; // type is MarketplaceDiscoveryClientConfig
 * const client = new MarketplaceDiscoveryClient(config);
 * const input = { // SearchListingsInput
 *   searchText: "STRING_VALUE",
 *   filters: [ // SearchFilterList
 *     { // SearchFilter
 *       filterType: "MIN_AVERAGE_CUSTOMER_RATING" || "MAX_AVERAGE_CUSTOMER_RATING" || "CATEGORY" || "PUBLISHER" || "FULFILLMENT_OPTION_TYPE" || "PRICING_MODEL" || "PRICING_UNIT" || "DEPLOYED_ON_AWS" || "NUMBER_OF_PRODUCTS", // required
 *       filterValues: [ // SearchFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   sortBy: "RELEVANCE" || "AVERAGE_CUSTOMER_RATING",
 *   sortOrder: "DESCENDING" || "ASCENDING",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new SearchListingsCommand(input);
 * const response = await client.send(command);
 * // { // SearchListingsOutput
 * //   totalResults: Number("long"), // required
 * //   listingSummaries: [ // ListingSummaryList // required
 * //     { // ListingSummary
 * //       listingId: "STRING_VALUE", // required
 * //       listingName: "STRING_VALUE", // required
 * //       publisher: { // SellerInformation
 * //         sellerProfileId: "STRING_VALUE", // required
 * //         displayName: "STRING_VALUE", // required
 * //       },
 * //       catalog: "STRING_VALUE", // required
 * //       shortDescription: "STRING_VALUE", // required
 * //       logoThumbnailUrl: "STRING_VALUE", // required
 * //       categories: [ // CategoryList // required
 * //         { // Category
 * //           categoryId: "STRING_VALUE", // required
 * //           displayName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       fulfillmentOptionSummaries: [ // FulfillmentOptionSummaryList // required
 * //         { // FulfillmentOptionSummary
 * //           fulfillmentOptionType: "AMAZON_MACHINE_IMAGE" || "API" || "CLOUDFORMATION_TEMPLATE" || "CONTAINER" || "HELM" || "EKS_ADD_ON" || "EC2_IMAGE_BUILDER_COMPONENT" || "DATA_EXCHANGE" || "PROFESSIONAL_SERVICES" || "SAAS" || "SAGEMAKER_ALGORITHM" || "SAGEMAKER_MODEL", // required
 * //           displayName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       badges: [ // ListingBadgeList // required
 * //         { // ListingBadge
 * //           displayName: "STRING_VALUE", // required
 * //           badgeType: "AWS_FREE_TIER" || "FREE_TRIAL" || "DEPLOYED_ON_AWS" || "QUICK_LAUNCH" || "MULTI_PRODUCT", // required
 * //         },
 * //       ],
 * //       reviewSummary: { // ReviewSummary
 * //         reviewSourceSummaries: [ // ReviewSourceSummaryList // required
 * //           { // ReviewSourceSummary
 * //             sourceName: "STRING_VALUE", // required
 * //             sourceId: "AWS_MARKETPLACE", // required
 * //             sourceUrl: "STRING_VALUE",
 * //             averageRating: "STRING_VALUE", // required
 * //             totalReviews: Number("long"), // required
 * //           },
 * //         ],
 * //       },
 * //       pricingModels: [ // PricingModelList // required
 * //         { // PricingModel
 * //           pricingModelType: "USAGE" || "CONTRACT" || "BYOL" || "FREE", // required
 * //           displayName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       pricingUnits: [ // PricingUnitList // required
 * //         { // PricingUnit
 * //           pricingUnitType: "USERS" || "HOSTS" || "BANDWIDTH" || "DATA" || "TIERS" || "REQUESTS" || "UNITS", // required
 * //           displayName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       associatedEntities: [ // ListingSummaryAssociatedEntityList // required
 * //         { // ListingSummaryAssociatedEntity
 * //           product: { // ProductInformation
 * //             productId: "STRING_VALUE", // required
 * //             productName: "STRING_VALUE", // required
 * //             manufacturer: {
 * //               sellerProfileId: "STRING_VALUE", // required
 * //               displayName: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchListingsCommandInput - {@link SearchListingsCommandInput}
 * @returns {@link SearchListingsCommandOutput}
 * @see {@link SearchListingsCommandInput} for command's `input` shape.
 * @see {@link SearchListingsCommandOutput} for command's `response` shape.
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
 * @example Search for machine learning listings
 * ```javascript
 * // Search for SaaS listings in the machine learning category with sorting by relevance
 * const input = {
 *   filters: [
 *     {
 *       filterType: "CATEGORY",
 *       filterValues: [
 *         "machine-learning"
 *       ]
 *     },
 *     {
 *       filterType: "FULFILLMENT_OPTION_TYPE",
 *       filterValues: [
 *         "SAAS"
 *       ]
 *     }
 *   ],
 *   maxResults: 25,
 *   searchText: "computer vision",
 *   sortBy: "RELEVANCE",
 *   sortOrder: "DESCENDING"
 * };
 * const command = new SearchListingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingSummaries: [
 *     {
 *       associatedEntities: [
 *         {
 *           product: {
 *             manufacturer: {
 *               displayName: "sample search seller",
 *               sellerProfileId: "seller-sampleSearchId"
 *             },
 *             productId: "prod-sampleSearchId",
 *             productName: "sample search product"
 *           }
 *         }
 *       ],
 *       badges: [
 *         {
 *           badgeType: "FREE_TRIAL",
 *           displayName: "Free Trial"
 *         }
 *       ],
 *       catalog: "AWSMarketplace",
 *       categories: [
 *         {
 *           categoryId: "machine-learning",
 *           displayName: "Machine Learning"
 *         }
 *       ],
 *       fulfillmentOptionSummaries: [
 *         {
 *           displayName: "SaaS",
 *           fulfillmentOptionType: "SAAS"
 *         }
 *       ],
 *       listingId: "prodview-sampleSearchId",
 *       listingName: "sample search listing",
 *       logoThumbnailUrl: "https://awsmp-logos.s3.amazonaws.com/product-logos/ai-vision-pro.png",
 *       pricingModels: [
 *         {
 *           displayName: "Usage",
 *           pricingModelType: "USAGE"
 *         }
 *       ],
 *       pricingUnits: [
 *         {
 *           displayName: "Requests",
 *           pricingUnitType: "REQUESTS"
 *         }
 *       ],
 *       publisher: {
 *         displayName: "sample search seller",
 *         sellerProfileId: "seller-sampleSearchId"
 *       },
 *       reviewSummary: {
 *         reviewSourceSummaries: [
 *           {
 *             averageRating: "4.5",
 *             sourceId: "AWS_MARKETPLACE",
 *             sourceName: "AWS Marketplace",
 *             totalReviews: 100
 *           }
 *         ]
 *       },
 *       shortDescription: "Advanced computer vision solution for object detection and classification."
 *     }
 *   ],
 *   nextToken: "eyJsYXN0RXZhbHVhdGVkS2V5Ijp7Imxpc3RpbmdJZCI6InByb2R2aWV3LXNhbXBsZVNlYXJjaElkIn19",
 *   totalResults: 1250
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SearchListingsCommand extends $Command
  .classBuilder<
    SearchListingsCommandInput,
    SearchListingsCommandOutput,
    MarketplaceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceDiscoveryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMarketplaceDiscovery", "SearchListings", {})
  .n("MarketplaceDiscoveryClient", "SearchListingsCommand")
  .sc(SearchListings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchListingsInput;
      output: SearchListingsOutput;
    };
    sdk: {
      input: SearchListingsCommandInput;
      output: SearchListingsCommandOutput;
    };
  };
}
