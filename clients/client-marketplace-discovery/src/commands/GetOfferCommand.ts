// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetOfferInput, GetOfferOutput } from "../models/models_0";
import { GetOffer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetOfferCommand}.
 */
export interface GetOfferCommandInput extends GetOfferInput {}
/**
 * @public
 *
 * The output of {@link GetOfferCommand}.
 */
export interface GetOfferCommandOutput extends GetOfferOutput, __MetadataBearer {}

/**
 * <p>Provides details about an offer, such as the pricing model, seller of record, availability dates, badges, and associated products.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDiscoveryClient, GetOfferCommand } from "@aws-sdk/client-marketplace-discovery"; // ES Modules import
 * // const { MarketplaceDiscoveryClient, GetOfferCommand } = require("@aws-sdk/client-marketplace-discovery"); // CommonJS import
 * // import type { MarketplaceDiscoveryClientConfig } from "@aws-sdk/client-marketplace-discovery";
 * const config = {}; // type is MarketplaceDiscoveryClientConfig
 * const client = new MarketplaceDiscoveryClient(config);
 * const input = { // GetOfferInput
 *   offerId: "STRING_VALUE", // required
 * };
 * const command = new GetOfferCommand(input);
 * const response = await client.send(command);
 * // { // GetOfferOutput
 * //   offerId: "STRING_VALUE", // required
 * //   catalog: "STRING_VALUE", // required
 * //   offerName: "STRING_VALUE",
 * //   agreementProposalId: "STRING_VALUE", // required
 * //   expirationTime: new Date("TIMESTAMP"),
 * //   availableFromTime: new Date("TIMESTAMP"),
 * //   sellerOfRecord: { // SellerInformation
 * //     sellerProfileId: "STRING_VALUE", // required
 * //     displayName: "STRING_VALUE", // required
 * //   },
 * //   replacementAgreementId: "STRING_VALUE",
 * //   pricingModel: { // PricingModel
 * //     pricingModelType: "USAGE" || "CONTRACT" || "BYOL" || "FREE", // required
 * //     displayName: "STRING_VALUE", // required
 * //   },
 * //   badges: [ // PurchaseOptionBadgeList // required
 * //     { // PurchaseOptionBadge
 * //       displayName: "STRING_VALUE", // required
 * //       badgeType: "PRIVATE_PRICING" || "FUTURE_DATED" || "REPLACEMENT_OFFER", // required
 * //     },
 * //   ],
 * //   associatedEntities: [ // OfferAssociatedEntityList // required
 * //     { // OfferAssociatedEntity
 * //       product: { // ProductInformation
 * //         productId: "STRING_VALUE", // required
 * //         productName: "STRING_VALUE", // required
 * //         manufacturer: {
 * //           sellerProfileId: "STRING_VALUE", // required
 * //           displayName: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       offerSet: { // OfferSetInformation
 * //         offerSetId: "STRING_VALUE", // required
 * //         sellerOfRecord: {
 * //           sellerProfileId: "STRING_VALUE", // required
 * //           displayName: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetOfferCommandInput - {@link GetOfferCommandInput}
 * @returns {@link GetOfferCommandOutput}
 * @see {@link GetOfferCommandInput} for command's `input` shape.
 * @see {@link GetOfferCommandOutput} for command's `response` shape.
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
 * @example Invoke GetOffer for Contract Pricing offer
 * ```javascript
 * //
 * const input = {
 *   offerId: "offer-sampleContractId"
 * };
 * const command = new GetOfferCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   agreementProposalId: "at-sampleToken",
 *   associatedEntities: [
 *     {
 *       offerSet: {
 *         offerSetId: "offerset-sampleId",
 *         sellerOfRecord: {
 *           displayName: "sample contract seller",
 *           sellerProfileId: "seller-sampleContractId"
 *         }
 *       },
 *       product: {
 *         manufacturer: {
 *           displayName: "sample contract seller",
 *           sellerProfileId: "seller-sampleContractId"
 *         },
 *         productId: "prod-sampleContractId",
 *         productName: "sample contract product"
 *       }
 *     }
 *   ],
 *   availableFromTime: "2023-01-01T00:00:00.000Z",
 *   badges: [
 *     {
 *       badgeType: "PRIVATE_PRICING",
 *       displayName: "Private Pricing"
 *     },
 *     {
 *       badgeType: "REPLACEMENT_OFFER",
 *       displayName: "Replacement Offer"
 *     }
 *   ],
 *   catalog: "AWSMarketplace",
 *   expirationTime: "2023-10-08T21:40:43.644Z",
 *   offerId: "offer-sampleContractId",
 *   offerName: "sample contract offer",
 *   pricingModel: {
 *     displayName: "Contract",
 *     pricingModelType: "CONTRACT"
 *   },
 *   replacementAgreementId: "agmt-sampleId",
 *   sellerOfRecord: {
 *     displayName: "sample contract seller",
 *     sellerProfileId: "seller-sampleContractId"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Invoke GetOffer for Usage Pricing offer
 * ```javascript
 * //
 * const input = {
 *   offerId: "offer-sampleUsageId"
 * };
 * const command = new GetOfferCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   agreementProposalId: "at-sampleToken",
 *   associatedEntities: [
 *     {
 *       product: {
 *         manufacturer: {
 *           displayName: "sample usage seller",
 *           sellerProfileId: "seller-sampleUsageId"
 *         },
 *         productId: "prod-sampleUsageId",
 *         productName: "sample usage product"
 *       }
 *     }
 *   ],
 *   badges: [
 *     {
 *       badgeType: "FUTURE_DATED",
 *       displayName: "Future Dated"
 *     }
 *   ],
 *   catalog: "AWSMarketplace",
 *   expirationTime: "2022-03-29T23:59:59.999Z",
 *   offerId: "offer-sampleUsageId",
 *   offerName: "sample usage offer",
 *   pricingModel: {
 *     displayName: "Usage",
 *     pricingModelType: "USAGE"
 *   },
 *   replacementAgreementId: "agmt-sampleId",
 *   sellerOfRecord: {
 *     displayName: "sample usage seller",
 *     sellerProfileId: "seller-sampleUsageId"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Invoke GetOffer for BYOL Pricing offer
 * ```javascript
 * //
 * const input = {
 *   offerId: "offer-sampleByolId"
 * };
 * const command = new GetOfferCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   agreementProposalId: "at-sampleToken",
 *   associatedEntities: [
 *     {
 *       product: {
 *         manufacturer: {
 *           displayName: "sample BYOL seller",
 *           sellerProfileId: "seller-sampleByolId"
 *         },
 *         productId: "prod-sampleByolId",
 *         productName: "sample BYOL product"
 *       }
 *     }
 *   ],
 *   badges:   [],
 *   catalog: "AWSMarketplace",
 *   expirationTime: "2022-03-29T23:59:59.999Z",
 *   offerId: "offer-sampleByolId",
 *   offerName: "sample BYOL offer",
 *   pricingModel: {
 *     displayName: "Bring Your Own License",
 *     pricingModelType: "BYOL"
 *   },
 *   replacementAgreementId: "agmt-sampleId",
 *   sellerOfRecord: {
 *     displayName: "sample BYOL seller",
 *     sellerProfileId: "seller-sampleByolId"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Invoke GetOffer for FREE Pricing offer
 * ```javascript
 * //
 * const input = {
 *   offerId: "offer-sampleFreeId"
 * };
 * const command = new GetOfferCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   agreementProposalId: "at-sampleToken",
 *   associatedEntities: [
 *     {
 *       product: {
 *         manufacturer: {
 *           displayName: "sample free seller",
 *           sellerProfileId: "seller-sampleFreeId"
 *         },
 *         productId: "prod-sampleFreeId",
 *         productName: "sample free product"
 *       }
 *     }
 *   ],
 *   badges:   [],
 *   catalog: "AWSMarketplace",
 *   expirationTime: "2022-03-29T23:59:59.999Z",
 *   offerId: "offer-sampleFreeId",
 *   offerName: "sample free offer",
 *   pricingModel: {
 *     displayName: "Free",
 *     pricingModelType: "FREE"
 *   },
 *   replacementAgreementId: "agmt-sampleId",
 *   sellerOfRecord: {
 *     displayName: "sample free seller",
 *     sellerProfileId: "seller-sampleFreeId"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetOfferCommand extends command<GetOfferCommandInput, GetOfferCommandOutput>(
  _ep0,
  _mw0,
  "GetOffer",
  GetOffer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOfferInput;
      output: GetOfferOutput;
    };
    sdk: {
      input: GetOfferCommandInput;
      output: GetOfferCommandOutput;
    };
  };
}
