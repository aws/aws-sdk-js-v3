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
import type { GetListingInput, GetListingOutput } from "../models/models_0";
import { GetListing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetListingCommand}.
 */
export interface GetListingCommandInput extends GetListingInput {}
/**
 * @public
 *
 * The output of {@link GetListingCommand}.
 */
export interface GetListingCommandOutput extends GetListingOutput, __MetadataBearer {}

/**
 * <p>Provides details about a listing, such as descriptions, badges, categories, pricing model summaries, reviews, and associated products and offers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDiscoveryClient, GetListingCommand } from "@aws-sdk/client-marketplace-discovery"; // ES Modules import
 * // const { MarketplaceDiscoveryClient, GetListingCommand } = require("@aws-sdk/client-marketplace-discovery"); // CommonJS import
 * // import type { MarketplaceDiscoveryClientConfig } from "@aws-sdk/client-marketplace-discovery";
 * const config = {}; // type is MarketplaceDiscoveryClientConfig
 * const client = new MarketplaceDiscoveryClient(config);
 * const input = { // GetListingInput
 *   listingId: "STRING_VALUE", // required
 * };
 * const command = new GetListingCommand(input);
 * const response = await client.send(command);
 * // { // GetListingOutput
 * //   associatedEntities: [ // ListingAssociatedEntityList // required
 * //     { // ListingAssociatedEntity
 * //       product: { // ProductInformation
 * //         productId: "STRING_VALUE", // required
 * //         productName: "STRING_VALUE", // required
 * //         manufacturer: { // SellerInformation
 * //           sellerProfileId: "STRING_VALUE", // required
 * //           displayName: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       offer: { // OfferInformation
 * //         offerId: "STRING_VALUE", // required
 * //         offerName: "STRING_VALUE",
 * //         sellerOfRecord: {
 * //           sellerProfileId: "STRING_VALUE", // required
 * //           displayName: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   badges: [ // ListingBadgeList // required
 * //     { // ListingBadge
 * //       displayName: "STRING_VALUE", // required
 * //       badgeType: "AWS_FREE_TIER" || "FREE_TRIAL" || "DEPLOYED_ON_AWS" || "QUICK_LAUNCH" || "MULTI_PRODUCT", // required
 * //     },
 * //   ],
 * //   catalog: "STRING_VALUE", // required
 * //   categories: [ // CategoryList // required
 * //     { // Category
 * //       categoryId: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   fulfillmentOptionSummaries: [ // FulfillmentOptionSummaryList // required
 * //     { // FulfillmentOptionSummary
 * //       fulfillmentOptionType: "AMAZON_MACHINE_IMAGE" || "API" || "CLOUDFORMATION_TEMPLATE" || "CONTAINER" || "HELM" || "EKS_ADD_ON" || "EC2_IMAGE_BUILDER_COMPONENT" || "DATA_EXCHANGE" || "PROFESSIONAL_SERVICES" || "SAAS" || "SAGEMAKER_ALGORITHM" || "SAGEMAKER_MODEL", // required
 * //       displayName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   highlights: [ // HighlightList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   integrationGuide: "STRING_VALUE",
 * //   listingId: "STRING_VALUE", // required
 * //   listingName: "STRING_VALUE", // required
 * //   logoThumbnailUrl: "STRING_VALUE", // required
 * //   longDescription: "STRING_VALUE", // required
 * //   pricingModels: [ // PricingModelList // required
 * //     { // PricingModel
 * //       pricingModelType: "USAGE" || "CONTRACT" || "BYOL" || "FREE", // required
 * //       displayName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   pricingUnits: [ // PricingUnitList // required
 * //     { // PricingUnit
 * //       pricingUnitType: "USERS" || "HOSTS" || "BANDWIDTH" || "DATA" || "TIERS" || "REQUESTS" || "UNITS", // required
 * //       displayName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   promotionalMedia: [ // PromotionalMediaList // required
 * //     { // PromotionalMedia Union: only one key present
 * //       embeddedImage: { // PromotionalEmbeddedImage
 * //         title: "STRING_VALUE", // required
 * //         url: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //       },
 * //       embeddedVideo: { // PromotionalEmbeddedVideo
 * //         title: "STRING_VALUE", // required
 * //         url: "STRING_VALUE", // required
 * //         preview: "STRING_VALUE", // required
 * //         thumbnail: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   publisher: {
 * //     sellerProfileId: "STRING_VALUE", // required
 * //     displayName: "STRING_VALUE", // required
 * //   },
 * //   resources: [ // ResourceList // required
 * //     { // Resource
 * //       resourceType: "MANUFACTURER_SUPPORT" || "MANUFACTURER_INSTRUCTIONS", // required
 * //       contentType: "EMAIL" || "PHONE_NUMBER" || "LINK" || "OTHER", // required
 * //       value: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   reviewSummary: { // ReviewSummary
 * //     reviewSourceSummaries: [ // ReviewSourceSummaryList // required
 * //       { // ReviewSourceSummary
 * //         sourceName: "STRING_VALUE", // required
 * //         sourceId: "AWS_MARKETPLACE", // required
 * //         sourceUrl: "STRING_VALUE",
 * //         averageRating: "STRING_VALUE", // required
 * //         totalReviews: Number("long"), // required
 * //       },
 * //     ],
 * //   },
 * //   sellerEngagements: [ // SellerEngagementList // required
 * //     { // SellerEngagement
 * //       engagementType: "REQUEST_FOR_PRIVATE_OFFER" || "REQUEST_FOR_DEMO", // required
 * //       contentType: "LINK", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   shortDescription: "STRING_VALUE", // required
 * //   useCases: [ // UseCaseList // required
 * //     { // UseCaseEntry
 * //       useCase: { // UseCase
 * //         description: "STRING_VALUE", // required
 * //         displayName: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetListingCommandInput - {@link GetListingCommandInput}
 * @returns {@link GetListingCommandOutput}
 * @see {@link GetListingCommandInput} for command's `input` shape.
 * @see {@link GetListingCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceDiscoveryClientResolvedConfig | config} for MarketplaceDiscoveryClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
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
 * @example GetListing for SaaS listing
 * ```javascript
 * //
 * const input = {
 *   listingId: "prodview-sampleSaasId"
 * };
 * const command = new GetListingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   associatedEntities: [
 *     {
 *       product: {
 *         manufacturer: {
 *           displayName: "sample SaaS seller",
 *           sellerProfileId: "seller-sampleSaasId"
 *         },
 *         productId: "prod-sampleSaasId",
 *         productName: "sample SaaS product"
 *       }
 *     }
 *   ],
 *   badges:   [],
 *   catalog: "AWSMarketplace",
 *   categories: [
 *     {
 *       categoryId: "developer-tools",
 *       displayName: "Developer Tools"
 *     },
 *     {
 *       categoryId: "ide",
 *       displayName: "IDE"
 *     }
 *   ],
 *   fulfillmentOptionSummaries: [
 *     {
 *       displayName: "SaaS",
 *       fulfillmentOptionType: "SAAS"
 *     }
 *   ],
 *   highlights: [
 *     "Automated dev environments",
 *     "Works with any Git repository",
 *     "Secure and compliant"
 *   ],
 *   listingId: "prodview-sampleSaasId",
 *   listingName: "sample SaaS listing",
 *   logoThumbnailUrl: "https://example.com/logos/sample-saas-logo.png",
 *   longDescription: "A sample SaaS product that provides automated, ready-to-code development environments in the cloud.",
 *   pricingModels: [
 *     {
 *       displayName: "Contract",
 *       pricingModelType: "CONTRACT"
 *     }
 *   ],
 *   pricingUnits: [
 *     {
 *       displayName: "Users",
 *       pricingUnitType: "USERS"
 *     }
 *   ],
 *   promotionalMedia: [
 *     {
 *       embeddedImage: {
 *         description: "The sample product workspace dashboard",
 *         title: "Sample Dashboard",
 *         url: "https://example.com/screenshots/sample-dashboard.png"
 *       }
 *     }
 *   ],
 *   publisher: {
 *     displayName: "sample SaaS seller",
 *     sellerProfileId: "seller-sampleSaasId"
 *   },
 *   resources: [
 *     {
 *       contentType: "LINK",
 *       displayName: "Request a Demo",
 *       resourceType: "MANUFACTURER_INSTRUCTIONS",
 *       value: "https://example.com/demo"
 *     }
 *   ],
 *   reviewSummary: {
 *     reviewSourceSummaries: [
 *       {
 *         averageRating: "4.5",
 *         sourceId: "AWS_MARKETPLACE",
 *         sourceName: "AWS Marketplace",
 *         sourceUrl: "https://aws.amazon.com/marketplace/reviews/prodview-sampleSaasId",
 *         totalReviews: 128
 *       }
 *     ]
 *   },
 *   sellerEngagements: [
 *     {
 *       contentType: "LINK",
 *       engagementType: "REQUEST_FOR_DEMO",
 *       value: "https://aws.amazon.com/marketplace/customer-connect/demo/prodview-sampleSaasId"
 *     },
 *     {
 *       contentType: "LINK",
 *       engagementType: "REQUEST_FOR_PRIVATE_OFFER",
 *       value: "https://aws.amazon.com/marketplace/customer-connect/private-offer/prodview-sampleSaasId"
 *     }
 *   ],
 *   shortDescription: "A sample SaaS product for cloud development environments.",
 *   useCases: [
 *     {
 *       useCase: {
 *         description: "Advanced contextual analysis for targeted advertising campaigns",
 *         displayName: "Contextual Analysis",
 *         value: "CONTEXTUAL_ANALYSIS"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example GetListing for AMI listing with video
 * ```javascript
 * //
 * const input = {
 *   listingId: "prodview-sampleAmiId"
 * };
 * const command = new GetListingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   associatedEntities: [
 *     {
 *       offer: {
 *         offerId: "offer-sampleAmiId",
 *         offerName: "sample AMI offer",
 *         sellerOfRecord: {
 *           displayName: "sample AMI seller",
 *           sellerProfileId: "seller-sampleAmiId"
 *         }
 *       },
 *       product: {
 *         manufacturer: {
 *           displayName: "sample AMI seller",
 *           sellerProfileId: "seller-sampleAmiId"
 *         },
 *         productId: "prod-sampleAmiId",
 *         productName: "sample AMI product"
 *       }
 *     }
 *   ],
 *   badges: [
 *     {
 *       badgeType: "DEPLOYED_ON_AWS",
 *       displayName: "Deployed on AWS"
 *     },
 *     {
 *       badgeType: "QUICK_LAUNCH",
 *       displayName: "Quick Launch"
 *     }
 *   ],
 *   catalog: "AWSMarketplace",
 *   categories: [
 *     {
 *       categoryId: "infrastructure",
 *       displayName: "Infrastructure Software"
 *     },
 *     {
 *       categoryId: "load-balancing",
 *       displayName: "Load Balancing"
 *     }
 *   ],
 *   fulfillmentOptionSummaries: [
 *     {
 *       displayName: "SaaS",
 *       fulfillmentOptionType: "SAAS"
 *     }
 *   ],
 *   highlights: [
 *     "Advanced load balancing",
 *     "API gateway capabilities",
 *     "High availability",
 *     "Real-time monitoring"
 *   ],
 *   listingId: "prodview-sampleAmiId",
 *   listingName: "sample AMI listing",
 *   logoThumbnailUrl: "https://example.com/logos/sample-ami-logo.png",
 *   longDescription: "A sample AMI product that provides load balancing, content caching, and API gateway capabilities optimized for cloud-native architectures.",
 *   pricingModels: [
 *     {
 *       displayName: "Usage",
 *       pricingModelType: "USAGE"
 *     }
 *   ],
 *   pricingUnits: [
 *     {
 *       displayName: "Hosts",
 *       pricingUnitType: "HOSTS"
 *     }
 *   ],
 *   promotionalMedia: [
 *     {
 *       embeddedVideo: {
 *         description: "Learn about sample AMI product features",
 *         preview: "https://example.com/videos/sample-cover.png",
 *         thumbnail: "https://example.com/videos/sample-thumb.png",
 *         title: "Sample AMI Product Overview",
 *         url: "https://example.com/videos/sample-overview.mp4"
 *       }
 *     }
 *   ],
 *   publisher: {
 *     displayName: "sample AMI seller",
 *     sellerProfileId: "seller-sampleAmiId"
 *   },
 *   resources: [
 *     {
 *       contentType: "LINK",
 *       displayName: "Request Demo",
 *       resourceType: "MANUFACTURER_INSTRUCTIONS",
 *       value: "https://example.com/request-demo"
 *     },
 *     {
 *       contentType: "LINK",
 *       displayName: "Documentation",
 *       resourceType: "MANUFACTURER_SUPPORT",
 *       value: "https://example.com/docs"
 *     }
 *   ],
 *   reviewSummary: {
 *     reviewSourceSummaries: [
 *       {
 *         averageRating: "4.8",
 *         sourceId: "AWS_MARKETPLACE",
 *         sourceName: "AWS Marketplace",
 *         sourceUrl: "https://aws.amazon.com/marketplace/reviews/prodview-sampleAmiId",
 *         totalReviews: 542
 *       }
 *     ]
 *   },
 *   sellerEngagements: [
 *     {
 *       contentType: "LINK",
 *       engagementType: "REQUEST_FOR_DEMO",
 *       value: "https://aws.amazon.com/marketplace/customer-connect/demo/prodview-sampleAmiId"
 *     },
 *     {
 *       contentType: "LINK",
 *       engagementType: "REQUEST_FOR_PRIVATE_OFFER",
 *       value: "https://aws.amazon.com/marketplace/customer-connect/private-offer/prodview-sampleAmiId"
 *     }
 *   ],
 *   shortDescription: "A sample high-performance load balancer and web server.",
 *   useCases: [
 *     {
 *       useCase: {
 *         description: "Advanced contextual analysis for targeted advertising campaigns",
 *         displayName: "Contextual Analysis",
 *         value: "CONTEXTUAL_ANALYSIS"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example GetListing for multi-product listing
 * ```javascript
 * //
 * const input = {
 *   listingId: "prodview-sampleMultiProductId"
 * };
 * const command = new GetListingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   associatedEntities: [
 *     {
 *       product: {
 *         manufacturer: {
 *           displayName: "sample multi-product seller",
 *           sellerProfileId: "seller-sampleMultiProductId"
 *         },
 *         productId: "prod-sampleMultiProduct1Id",
 *         productName: "sample multi-product 1"
 *       }
 *     },
 *     {
 *       product: {
 *         manufacturer: {
 *           displayName: "sample multi-product seller 2",
 *           sellerProfileId: "seller-sampleMultiProduct2Id"
 *         },
 *         productId: "prod-sampleMultiProduct2Id",
 *         productName: "sample multi-product 2"
 *       }
 *     }
 *   ],
 *   badges: [
 *     {
 *       badgeType: "DEPLOYED_ON_AWS",
 *       displayName: "Deployed on AWS"
 *     },
 *     {
 *       badgeType: "MULTI_PRODUCT",
 *       displayName: "Multi-product"
 *     }
 *   ],
 *   catalog: "AWSMarketplace",
 *   categories:   [],
 *   fulfillmentOptionSummaries: [
 *     {
 *       displayName: "SaaS",
 *       fulfillmentOptionType: "SAAS"
 *     }
 *   ],
 *   highlights:   [],
 *   integrationGuide: "To add the remote Box MCP server in Amazon Quick Suite, follow these steps: In the Amazon Quick Suite console, choose Integrations and create new integration by choosing Model Content Protocol.",
 *   listingId: "prodview-sampleMultiProductId",
 *   listingName: "sample multi-product listing",
 *   logoThumbnailUrl: "https://example.com/logos/sample-multi-product-logo.png",
 *   longDescription: "A sample multi-product listing that connects content management with a unified AI platform. Users can securely search, analyze, and extract valuable insights from their files.",
 *   pricingModels: [
 *     {
 *       displayName: "Free",
 *       pricingModelType: "FREE"
 *     }
 *   ],
 *   pricingUnits:   [],
 *   promotionalMedia:   [],
 *   publisher: {
 *     displayName: "sample multi-product seller",
 *     sellerProfileId: "seller-sampleMultiProductId"
 *   },
 *   resources: [
 *     {
 *       contentType: "LINK",
 *       displayName: "Developer Documentation",
 *       resourceType: "MANUFACTURER_INSTRUCTIONS",
 *       value: "https://developer.box.com/guides/box-mcp/remote/#amazon-quick-suite"
 *     }
 *   ],
 *   reviewSummary: {
 *     reviewSourceSummaries:     []
 *   },
 *   sellerEngagements: [
 *     {
 *       contentType: "LINK",
 *       engagementType: "REQUEST_FOR_DEMO",
 *       value: "https://aws.amazon.com/marketplace/customer-connect/demo/prodview-sampleMultiProductId"
 *     },
 *     {
 *       contentType: "LINK",
 *       engagementType: "REQUEST_FOR_PRIVATE_OFFER",
 *       value: "https://aws.amazon.com/marketplace/customer-connect/private-offer/prodview-sampleMultiProductId"
 *     }
 *   ],
 *   shortDescription: "A sample multi-product listing that delivers a unified experience with AI.",
 *   useCases: [
 *     {
 *       useCase: {
 *         description: "This integration allows enterprises to securely access and interact with content in Box directly from the Amazon Quick Suite chat experience.",
 *         displayName: "Content Management System",
 *         value: "content_management_system"
 *       }
 *     },
 *     {
 *       useCase: {
 *         description: "Build automated workflows and design custom AI agents for context-aware document processing.",
 *         displayName: "Intelligent Document Processing",
 *         value: "intelligent_document_processing"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetListingCommand extends $Command
  .classBuilder<
    GetListingCommandInput,
    GetListingCommandOutput,
    MarketplaceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceDiscoveryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMarketplaceDiscovery", "GetListing", {})
  .n("MarketplaceDiscoveryClient", "GetListingCommand")
  .sc(GetListing$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetListingInput;
      output: GetListingOutput;
    };
    sdk: {
      input: GetListingCommandInput;
      output: GetListingCommandOutput;
    };
  };
}
