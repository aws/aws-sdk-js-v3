// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MarketplaceDiscoveryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceDiscoveryClient";
import type { GetProductInput, GetProductOutput } from "../models/models_0";
import { GetProduct$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProductCommand}.
 */
export interface GetProductCommandInput extends GetProductInput {}
/**
 * @public
 *
 * The output of {@link GetProductCommand}.
 */
export interface GetProductCommandOutput extends GetProductOutput, __MetadataBearer {}

/**
 * <p>Provides details about a product, such as descriptions, highlights, categories, fulfillment option summaries, promotional media, and seller engagement options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDiscoveryClient, GetProductCommand } from "@aws-sdk/client-marketplace-discovery"; // ES Modules import
 * // const { MarketplaceDiscoveryClient, GetProductCommand } = require("@aws-sdk/client-marketplace-discovery"); // CommonJS import
 * // import type { MarketplaceDiscoveryClientConfig } from "@aws-sdk/client-marketplace-discovery";
 * const config = {}; // type is MarketplaceDiscoveryClientConfig
 * const client = new MarketplaceDiscoveryClient(config);
 * const input = { // GetProductInput
 *   productId: "STRING_VALUE", // required
 * };
 * const command = new GetProductCommand(input);
 * const response = await client.send(command);
 * // { // GetProductOutput
 * //   productId: "STRING_VALUE", // required
 * //   catalog: "STRING_VALUE", // required
 * //   productName: "STRING_VALUE", // required
 * //   deployedOnAws: "DEPLOYED" || "NOT_DEPLOYED" || "NOT_APPLICABLE", // required
 * //   shortDescription: "STRING_VALUE", // required
 * //   longDescription: "STRING_VALUE", // required
 * //   manufacturer: { // SellerInformation
 * //     sellerProfileId: "STRING_VALUE", // required
 * //     displayName: "STRING_VALUE", // required
 * //   },
 * //   logoThumbnailUrl: "STRING_VALUE", // required
 * //   fulfillmentOptionSummaries: [ // FulfillmentOptionSummaryList // required
 * //     { // FulfillmentOptionSummary
 * //       fulfillmentOptionType: "AMAZON_MACHINE_IMAGE" || "API" || "CLOUDFORMATION_TEMPLATE" || "CONTAINER" || "HELM" || "EKS_ADD_ON" || "EC2_IMAGE_BUILDER_COMPONENT" || "DATA_EXCHANGE" || "PROFESSIONAL_SERVICES" || "SAAS" || "SAGEMAKER_ALGORITHM" || "SAGEMAKER_MODEL", // required
 * //       displayName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   categories: [ // CategoryList // required
 * //     { // Category
 * //       categoryId: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   highlights: [ // HighlightList // required
 * //     "STRING_VALUE",
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
 * //   resources: [ // ResourceList // required
 * //     { // Resource
 * //       resourceType: "MANUFACTURER_SUPPORT" || "MANUFACTURER_INSTRUCTIONS", // required
 * //       contentType: "EMAIL" || "PHONE_NUMBER" || "LINK" || "OTHER", // required
 * //       value: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   sellerEngagements: [ // SellerEngagementList // required
 * //     { // SellerEngagement
 * //       engagementType: "REQUEST_FOR_PRIVATE_OFFER" || "REQUEST_FOR_DEMO", // required
 * //       contentType: "LINK", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetProductCommandInput - {@link GetProductCommandInput}
 * @returns {@link GetProductCommandOutput}
 * @see {@link GetProductCommandInput} for command's `input` shape.
 * @see {@link GetProductCommandOutput} for command's `response` shape.
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
 * @example GetProduct for SaaS product with DEPLOYED status
 * ```javascript
 * //
 * const input = {
 *   productId: "prod-sampleSaasId"
 * };
 * const command = new GetProductCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   catalog: "AWSMarketplace",
 *   categories: [
 *     {
 *       categoryId: "0625e4fd-88dd-4dd9-9e57-4a0461f97fb4",
 *       displayName: "Security"
 *     }
 *   ],
 *   deployedOnAws: "DEPLOYED",
 *   fulfillmentOptionSummaries: [
 *     {
 *       displayName: "SaaS",
 *       fulfillmentOptionType: "SAAS"
 *     },
 *     {
 *       displayName: "API",
 *       fulfillmentOptionType: "API"
 *     },
 *     {
 *       displayName: "Data Exchange",
 *       fulfillmentOptionType: "DATA_EXCHANGE"
 *     }
 *   ],
 *   highlights: [
 *     "Configured to your specs: Pre-configured environments, out-of-the-box."
 *   ],
 *   logoThumbnailUrl: "https://d7umqicpi7263.cloudfront.net/img/product/07afb7c8-32f1-4851-8289-7e200d817ab1.png",
 *   longDescription: "Gitpod is a developer platform that provides on-demand, pre-configured cloud development environments (CDEs) that automatically integrate into any tool, library, or dependency required for creating software.",
 *   manufacturer: {
 *     displayName: "sample SaaS seller",
 *     sellerProfileId: "seller-sampleSaasId"
 *   },
 *   productId: "prod-sampleSaasId",
 *   productName: "sample SaaS product",
 *   promotionalMedia: [
 *     {
 *       embeddedImage: {
 *         description: "Main security dashboard showing threat analytics",
 *         title: "Dashboard Overview",
 *         url: "https://assets.example.com/images/dashboard-main.png"
 *       }
 *     }
 *   ],
 *   resources: [
 *     {
 *       contentType: "LINK",
 *       displayName: "Blog",
 *       resourceType: "MANUFACTURER_SUPPORT",
 *       value: "https://www.gitpod.io/blog"
 *     },
 *     {
 *       contentType: "EMAIL",
 *       displayName: "Email Support",
 *       resourceType: "MANUFACTURER_SUPPORT",
 *       value: "support@gitpod.io"
 *     }
 *   ],
 *   sellerEngagements: [
 *     {
 *       contentType: "LINK",
 *       engagementType: "REQUEST_FOR_DEMO",
 *       value: "https://aws.amazon.com/marketplace/customer-connect/demo/prodview-sampleSaasId"
 *     }
 *   ],
 *   shortDescription: "Gitpod provides on-demand, secure cloud development environments or CDEs."
 * }
 * *\/
 * ```
 *
 * @example GetProduct for AMI product with NOT_DEPLOYED status
 * ```javascript
 * //
 * const input = {
 *   productId: "prod-sampleAmiId"
 * };
 * const command = new GetProductCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   catalog: "AWSMarketplace",
 *   categories: [
 *     {
 *       categoryId: "security-category-001",
 *       displayName: "Security"
 *     }
 *   ],
 *   deployedOnAws: "NOT_DEPLOYED",
 *   fulfillmentOptionSummaries: [
 *     {
 *       displayName: "Amazon Machine Image",
 *       fulfillmentOptionType: "AMAZON_MACHINE_IMAGE"
 *     },
 *     {
 *       displayName: "CloudFormation Template",
 *       fulfillmentOptionType: "CLOUDFORMATION_TEMPLATE"
 *     },
 *     {
 *       displayName: "Container",
 *       fulfillmentOptionType: "CONTAINER"
 *     },
 *     {
 *       displayName: "Helm",
 *       fulfillmentOptionType: "HELM"
 *     }
 *   ],
 *   highlights: [
 *     "AES-256 encryption at rest and in transit"
 *   ],
 *   logoThumbnailUrl: "https://d7umqicpi7263.cloudfront.net/img/product/securevault-logo.png",
 *   longDescription: "SecureVault Enterprise provides comprehensive data encryption, key management, and security compliance tools for organizations.",
 *   manufacturer: {
 *     displayName: "sample AMI seller",
 *     sellerProfileId: "seller-sampleAmiId"
 *   },
 *   productId: "prod-sampleAmiId",
 *   productName: "sample AMI product",
 *   promotionalMedia: [
 *     {
 *       embeddedVideo: {
 *         description: "A comprehensive overview of SecureVault features",
 *         preview: "https://assets.example.com/videos/intro-preview.jpg",
 *         thumbnail: "https://assets.example.com/videos/intro-thumb.jpg",
 *         title: "SecureVault Introduction",
 *         url: "https://assets.example.com/videos/intro.mp4"
 *       }
 *     }
 *   ],
 *   resources: [
 *     {
 *       contentType: "PHONE_NUMBER",
 *       displayName: "Phone Support",
 *       resourceType: "MANUFACTURER_SUPPORT",
 *       value: "+1-555-123-4567"
 *     },
 *     {
 *       contentType: "OTHER",
 *       displayName: "Installation Help",
 *       resourceType: "MANUFACTURER_INSTRUCTIONS",
 *       value: "Contact your account manager for installation assistance."
 *     }
 *   ],
 *   sellerEngagements: [
 *     {
 *       contentType: "LINK",
 *       engagementType: "REQUEST_FOR_PRIVATE_OFFER",
 *       value: "https://aws.amazon.com/marketplace/customer-connect/private-offer/prodview-sampleAmiId"
 *     }
 *   ],
 *   shortDescription: "Enterprise-grade data encryption and key management solution."
 * }
 * *\/
 * ```
 *
 * @example GetProduct for professional services with NOT_APPLICABLE status
 * ```javascript
 * //
 * const input = {
 *   productId: "prod-sampleProServId"
 * };
 * const command = new GetProductCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   catalog: "AWSMarketplace",
 *   categories: [
 *     {
 *       categoryId: "consulting-category-001",
 *       displayName: "Consulting"
 *     }
 *   ],
 *   deployedOnAws: "NOT_APPLICABLE",
 *   fulfillmentOptionSummaries: [
 *     {
 *       displayName: "Professional Services",
 *       fulfillmentOptionType: "PROFESSIONAL_SERVICES"
 *     },
 *     {
 *       displayName: "EKS Add-on",
 *       fulfillmentOptionType: "EKS_ADD_ON"
 *     },
 *     {
 *       displayName: "EC2 Image Builder Component",
 *       fulfillmentOptionType: "EC2_IMAGE_BUILDER_COMPONENT"
 *     },
 *     {
 *       displayName: "SageMaker Algorithm",
 *       fulfillmentOptionType: "SAGEMAKER_ALGORITHM"
 *     },
 *     {
 *       displayName: "SageMaker Model",
 *       fulfillmentOptionType: "SAGEMAKER_MODEL"
 *     }
 *   ],
 *   highlights: [
 *     "Certified AWS migration specialists"
 *   ],
 *   logoThumbnailUrl: "https://d7umqicpi7263.cloudfront.net/img/product/cloudexperts-logo.png",
 *   longDescription: "Professional consulting services to help organizations plan and execute their cloud migration strategy.",
 *   manufacturer: {
 *     displayName: "sample professional services seller",
 *     sellerProfileId: "seller-sampleProServId"
 *   },
 *   productId: "prod-sampleProServId",
 *   productName: "sample professional services product",
 *   promotionalMedia:   [],
 *   resources: [
 *     {
 *       contentType: "LINK",
 *       displayName: "Documentation",
 *       resourceType: "MANUFACTURER_INSTRUCTIONS",
 *       value: "https://www.cloudexperts.example.com/docs"
 *     }
 *   ],
 *   sellerEngagements: [
 *     {
 *       contentType: "LINK",
 *       engagementType: "REQUEST_FOR_DEMO",
 *       value: "https://aws.amazon.com/marketplace/customer-connect/demo/prodview-sampleProServId"
 *     }
 *   ],
 *   shortDescription: "Expert cloud migration and modernization consulting services."
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetProductCommand extends $Command
  .classBuilder<
    GetProductCommandInput,
    GetProductCommandOutput,
    MarketplaceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceDiscoveryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMarketplaceDiscovery", "GetProduct", {})
  .n("MarketplaceDiscoveryClient", "GetProductCommand")
  .sc(GetProduct$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProductInput;
      output: GetProductOutput;
    };
    sdk: {
      input: GetProductCommandInput;
      output: GetProductCommandOutput;
    };
  };
}
