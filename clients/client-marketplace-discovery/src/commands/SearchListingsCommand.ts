// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchListingsInput, SearchListingsOutput } from "../models/models_0";
import { SearchListings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Searches for listings that match your search criteria and filters. You can search by keyword, filter by category, pricing model, fulfillment type, and other attributes, and sort results by relevance or customer rating. The operation returns results in pages. Use <code>nextToken</code> to retrieve the next page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDiscoveryClient, SearchListingsCommand } from "@aws-sdk/client-marketplace-discovery"; // ES Modules import
 * // const { MarketplaceDiscoveryClient, SearchListingsCommand } = require("@aws-sdk/client-marketplace-discovery"); // CommonJS import
 * // import type { MarketplaceDiscoveryClientConfig } from "@aws-sdk/client-marketplace-discovery";
 * const config = {}; // type is MarketplaceDiscoveryClientConfig
 * const client = new MarketplaceDiscoveryClient(config);
 * const input = { // SearchListingsInput
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
 * //       fulfillmentOptionSummaries: [ // FulfillmentOptionSummaryList // required
 * //         { // FulfillmentOptionSummary
 * //           fulfillmentOptionType: "AMAZON_MACHINE_IMAGE" || "API" || "CLOUDFORMATION_TEMPLATE" || "CONTAINER" || "HELM" || "EKS_ADD_ON" || "EC2_IMAGE_BUILDER_COMPONENT" || "DATA_EXCHANGE" || "PROFESSIONAL_SERVICES" || "SAAS" || "SAGEMAKER_ALGORITHM" || "SAGEMAKER_MODEL", // required
 * //           displayName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       catalog: "STRING_VALUE", // required
 * //       shortDescription: "STRING_VALUE", // required
 * //       logoThumbnailUrl: "STRING_VALUE", // required
 * //       categories: [ // CategoryList // required
 * //         { // Category
 * //           categoryId: "STRING_VALUE", // required
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
 * //             sourceId: "AWS_MARKETPLACE" || "G2" || "PEERSPOT", // required
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
 * //       trustCenterSummary: { // TrustCenterSummary
 * //         sourceSummaries: [ // TrustCenterSourceSummaryList // required
 * //           { // TrustCenterSourceSummary
 * //             contentType: "EMAIL" || "PHONE_NUMBER" || "LINK" || "OTHER", // required
 * //             value: "STRING_VALUE", // required
 * //             displayName: "STRING_VALUE",
 * //             provider: "DRATA" || "VANTA" || "OTHER", // required
 * //           },
 * //         ],
 * //         certificationSummaries: [ // TrustCenterCertificationSummaryList // required
 * //           { // TrustCenterCertificationSummary
 * //             certificationType: "STRING_VALUE", // required
 * //             displayName: "STRING_VALUE", // required
 * //             logoUrl: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         totalCertificationCount: Number("long"), // required
 * //       },
 * //       caseStudiesSummary: { // CaseStudiesSummary
 * //         caseStudyCount: Number("long"), // required
 * //       },
 * //       useCaseSummary: { // UseCaseSummary
 * //         useCases: [ // UseCaseSummaryList // required
 * //           { // UseCaseSummaryEntry
 * //             useCase: { // UseCaseInformation
 * //               displayName: "STRING_VALUE", // required
 * //               value: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       sellerEngagements: [ // SellerEngagementList
 * //         { // SellerEngagement
 * //           engagementType: "REQUEST_FOR_PRIVATE_OFFER" || "REQUEST_FOR_DEMO" || "EXPRESS_PRIVATE_OFFER" || "BUY_NOW" || "TRY_FOR_FREE", // required
 * //           contentType: "LINK", // required
 * //           value: "STRING_VALUE", // required
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
 * @example Search for machine learning listings
 * ```javascript
 * // Search for ISO 27001 certified SaaS listings in the machine learning category, sorted by relevance
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
 *     },
 *     {
 *       filterType: "CERTIFICATES",
 *       filterValues: [
 *         "ISO_27001"
 *       ]
 *     }
 *   ],
 *   locale: "en-US",
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
 *       caseStudiesSummary: {
 *         caseStudyCount: 7
 *       },
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
 *           },
 *           {
 *             averageRating: "4.6",
 *             sourceId: "G2",
 *             sourceName: "G2",
 *             totalReviews: 1368
 *           },
 *           {
 *             averageRating: "4.2",
 *             sourceId: "PEERSPOT",
 *             sourceName: "PeerSpot",
 *             totalReviews: 19
 *           }
 *         ]
 *       },
 *       sellerEngagements: [
 *         {
 *           contentType: "LINK",
 *           engagementType: "REQUEST_FOR_PRIVATE_OFFER",
 *           value: "https://aws.amazon.com/marketplace/customer-connect/private-offer/prodview-sampleSearchId?campaignId=sampleCampaignId"
 *         },
 *         {
 *           contentType: "LINK",
 *           engagementType: "REQUEST_FOR_DEMO",
 *           value: "https://aws.amazon.com/marketplace/customer-connect/demo/prodview-sampleSearchId?campaignId=sampleCampaignId"
 *         },
 *         {
 *           contentType: "LINK",
 *           engagementType: "EXPRESS_PRIVATE_OFFER",
 *           value: "https://aws.amazon.com/marketplace/epo/#/offer?productId=prod-sampleSearchId&listingId=prodview-sampleSearchId"
 *         },
 *         {
 *           contentType: "LINK",
 *           engagementType: "BUY_NOW",
 *           value: "https://aws.amazon.com/marketplace/procurement?productId=prod-sampleSearchId"
 *         },
 *         {
 *           contentType: "LINK",
 *           engagementType: "TRY_FOR_FREE",
 *           value: "https://aws.amazon.com/marketplace/procurement?productId=prod-sampleSearchId&tryForFree=true"
 *         }
 *       ],
 *       shortDescription: "Advanced computer vision solution for object detection and classification.",
 *       trustCenterSummary: {
 *         certificationSummaries: [
 *           {
 *             certificationType: "SOC2_TYPE_2",
 *             displayName: "SOC 2 Type II",
 *             logoUrl: "https://awsmp-logos.s3.amazonaws.com/certification-logos/soc2.svg"
 *           },
 *           {
 *             certificationType: "ISO_27001",
 *             displayName: "ISO 27001",
 *             logoUrl: "https://awsmp-logos.s3.amazonaws.com/certification-logos/iso27001.svg"
 *           }
 *         ],
 *         sourceSummaries: [
 *           {
 *             contentType: "LINK",
 *             displayName: "Drata",
 *             provider: "DRATA",
 *             value: "https://trust.example.com/"
 *           }
 *         ],
 *         totalCertificationCount: 2
 *       },
 *       useCaseSummary: {
 *         useCases: [
 *           {
 *             useCase: {
 *               displayName: "Contextual Analysis",
 *               value: "CONTEXTUAL_ANALYSIS"
 *             }
 *           }
 *         ]
 *       }
 *     }
 *   ],
 *   nextToken: "eyJsYXN0RXZhbHVhdGVkS2V5Ijp7Imxpc3RpbmdJZCI6InByb2R2aWV3LXNhbXBsZVNlYXJjaElkIn19",
 *   totalResults: 42
 * }
 * *\/
 * ```
 *
 * @example Search listings with a Trust Center source and no certifications
 * ```javascript
 * // Return Trust Center source information when no certifications are available
 * const input = {
 *   filters: [
 *     {
 *       filterType: "TRUST_CENTER",
 *       filterValues: [
 *         "HAS_TRUST_CENTER"
 *       ]
 *     }
 *   ],
 *   locale: "en-US",
 *   maxResults: 1,
 *   searchText: "security"
 * };
 * const command = new SearchListingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingSummaries: [
 *     {
 *       associatedEntities:       [],
 *       badges:       [],
 *       catalog: "AWSMarketplace",
 *       categories:       [],
 *       fulfillmentOptionSummaries:       [],
 *       listingId: "prodview-sourceOnlyId",
 *       listingName: "sample source-only listing",
 *       logoThumbnailUrl: "https://awsmp-logos.s3.amazonaws.com/product-logos/source-only.png",
 *       pricingModels:       [],
 *       pricingUnits:       [],
 *       publisher: {
 *         displayName: "sample source-only seller",
 *         sellerProfileId: "seller-sourceOnlyId"
 *       },
 *       reviewSummary: {
 *         reviewSourceSummaries:         []
 *       },
 *       sellerEngagements:       [],
 *       shortDescription: "Continuous cloud security posture monitoring with automated compliance checks.",
 *       trustCenterSummary: {
 *         certificationSummaries:         [],
 *         sourceSummaries: [
 *           {
 *             contentType: "LINK",
 *             displayName: "Example Trust Center",
 *             provider: "OTHER",
 *             value: "https://example.com/trust-center"
 *           }
 *         ],
 *         totalCertificationCount: 0
 *       },
 *       useCaseSummary: {
 *         useCases:         []
 *       }
 *     }
 *   ],
 *   nextToken: "eyJsYXN0RXZhbHVhdGVkS2V5Ijp7Imxpc3RpbmdJZCI6InByb2R2aWV3LXNvdXJjZU9ubHlJZCJ9fQ==",
 *   totalResults: 38
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SearchListingsCommand extends command<SearchListingsCommandInput, SearchListingsCommandOutput>(
  _ep0,
  _mw0,
  "SearchListings",
  SearchListings$
) {
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
