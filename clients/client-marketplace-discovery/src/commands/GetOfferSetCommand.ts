// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetOfferSetInput, GetOfferSetOutput } from "../models/models_0";
import { GetOfferSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetOfferSetCommand}.
 */
export interface GetOfferSetCommandInput extends GetOfferSetInput {}
/**
 * @public
 *
 * The output of {@link GetOfferSetCommand}.
 */
export interface GetOfferSetCommandOutput extends GetOfferSetOutput, __MetadataBearer {}

/**
 * <p>Provides details about an offer set, which is a bundle of offers across multiple products. Includes the seller, availability dates, buyer notes, and associated product-offer pairs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDiscoveryClient, GetOfferSetCommand } from "@aws-sdk/client-marketplace-discovery"; // ES Modules import
 * // const { MarketplaceDiscoveryClient, GetOfferSetCommand } = require("@aws-sdk/client-marketplace-discovery"); // CommonJS import
 * // import type { MarketplaceDiscoveryClientConfig } from "@aws-sdk/client-marketplace-discovery";
 * const config = {}; // type is MarketplaceDiscoveryClientConfig
 * const client = new MarketplaceDiscoveryClient(config);
 * const input = { // GetOfferSetInput
 *   locale: "STRING_VALUE",
 *   offerSetId: "STRING_VALUE", // required
 * };
 * const command = new GetOfferSetCommand(input);
 * const response = await client.send(command);
 * // { // GetOfferSetOutput
 * //   locale: "STRING_VALUE",
 * //   offerSetId: "STRING_VALUE", // required
 * //   catalog: "STRING_VALUE", // required
 * //   offerSetName: "STRING_VALUE",
 * //   availableFromTime: new Date("TIMESTAMP"),
 * //   expirationTime: new Date("TIMESTAMP"),
 * //   buyerNotes: "STRING_VALUE",
 * //   sellerOfRecord: { // SellerInformation
 * //     sellerProfileId: "STRING_VALUE", // required
 * //     displayName: "STRING_VALUE", // required
 * //   },
 * //   badges: [ // PurchaseOptionBadgeList // required
 * //     { // PurchaseOptionBadge
 * //       displayName: "STRING_VALUE", // required
 * //       badgeType: "PRIVATE_PRICING" || "FUTURE_DATED" || "REPLACEMENT_OFFER" || "AUTO_RENEW", // required
 * //     },
 * //   ],
 * //   associatedEntities: [ // OfferSetAssociatedEntityList // required
 * //     { // OfferSetAssociatedEntity
 * //       product: { // ProductInformation
 * //         productId: "STRING_VALUE", // required
 * //         productName: "STRING_VALUE", // required
 * //         manufacturer: {
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
 * // };
 *
 * ```
 *
 * @param GetOfferSetCommandInput - {@link GetOfferSetCommandInput}
 * @returns {@link GetOfferSetCommandOutput}
 * @see {@link GetOfferSetCommandInput} for command's `input` shape.
 * @see {@link GetOfferSetCommandOutput} for command's `response` shape.
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
 * @example Get offer set with multiple products
 * ```javascript
 * //
 * const input = {
 *   locale: "en-US",
 *   offerSetId: "offerset-sampleId"
 * };
 * const command = new GetOfferSetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   associatedEntities: [
 *     {
 *       offer: {
 *         offerId: "offer-sampleId1",
 *         offerName: "sample offer name 1",
 *         sellerOfRecord: {
 *           displayName: "sample reseller",
 *           sellerProfileId: "seller-sampleResellerId"
 *         }
 *       },
 *       product: {
 *         manufacturer: {
 *           displayName: "sample seller name 1",
 *           sellerProfileId: "seller-sampleId1"
 *         },
 *         productId: "prod-sampleId1",
 *         productName: "sample product name 1"
 *       }
 *     },
 *     {
 *       offer: {
 *         offerId: "offer-sampleId2",
 *         offerName: "sample offer name 2",
 *         sellerOfRecord: {
 *           displayName: "sample reseller",
 *           sellerProfileId: "seller-sampleResellerId"
 *         }
 *       },
 *       product: {
 *         manufacturer: {
 *           displayName: "sample seller name 2",
 *           sellerProfileId: "seller-sampleId2"
 *         },
 *         productId: "prod-sampleId2",
 *         productName: "sample product name 2"
 *       }
 *     }
 *   ],
 *   availableFromTime: "2024-03-20T00:00:00.000Z",
 *   badges: [
 *     {
 *       badgeType: "PRIVATE_PRICING",
 *       displayName: "Private Pricing"
 *     },
 *     {
 *       badgeType: "FUTURE_DATED",
 *       displayName: "Future Dated"
 *     },
 *     {
 *       badgeType: "REPLACEMENT_OFFER",
 *       displayName: "Replacement Offer"
 *     }
 *   ],
 *   buyerNotes: "This bundle includes CrowdStrike Falcon and Splunk Enterprise for comprehensive security monitoring.",
 *   catalog: "AWSMarketplace",
 *   expirationTime: "2025-03-20T00:00:00.000Z",
 *   locale: "en-US",
 *   offerSetId: "offerset-sampleId",
 *   offerSetName: "sample offer set",
 *   sellerOfRecord: {
 *     displayName: "sample reseller",
 *     sellerProfileId: "seller-sampleResellerId"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Get offer set with only required fields
 * ```javascript
 * //
 * const input = {
 *   offerSetId: "offerset-sampleMinimalId"
 * };
 * const command = new GetOfferSetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   associatedEntities: [
 *     {
 *       offer: {
 *         offerId: "offer-sampleMinimalId",
 *         sellerOfRecord: {
 *           displayName: "sample reseller",
 *           sellerProfileId: "seller-sampleResellerId"
 *         }
 *       },
 *       product: {
 *         manufacturer: {
 *           displayName: "sample seller name 1",
 *           sellerProfileId: "seller-sampleId1"
 *         },
 *         productId: "prod-sampleMinimalId",
 *         productName: "sample product name"
 *       }
 *     }
 *   ],
 *   badges:   [],
 *   catalog: "AWSMarketplace",
 *   offerSetId: "offerset-sampleMinimalId",
 *   sellerOfRecord: {
 *     displayName: "sample reseller",
 *     sellerProfileId: "seller-sampleResellerId"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Get offer set that never expires from a first-party seller
 * ```javascript
 * //
 * const input = {
 *   locale: "en-US",
 *   offerSetId: "offerset-samplePerpetualId"
 * };
 * const command = new GetOfferSetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   associatedEntities: [
 *     {
 *       offer: {
 *         offerId: "offer-samplePerpetualId",
 *         offerName: "sample perpetual offer",
 *         sellerOfRecord: {
 *           displayName: "sample first-party seller",
 *           sellerProfileId: "seller-sampleFirstPartyId"
 *         }
 *       },
 *       product: {
 *         manufacturer: {
 *           displayName: "sample first-party seller",
 *           sellerProfileId: "seller-sampleFirstPartyId"
 *         },
 *         productId: "prod-samplePerpetualId",
 *         productName: "sample perpetual product"
 *       }
 *     }
 *   ],
 *   availableFromTime: "2024-03-20T00:00:00.000Z",
 *   badges: [
 *     {
 *       badgeType: "PRIVATE_PRICING",
 *       displayName: "Private Pricing"
 *     }
 *   ],
 *   buyerNotes: "This offer set does not expire. Omitting expirationTime indicates the offer set remains available for procurement indefinitely.",
 *   catalog: "AWSMarketplace",
 *   locale: "en-US",
 *   offerSetId: "offerset-samplePerpetualId",
 *   offerSetName: "sample perpetual offer set",
 *   sellerOfRecord: {
 *     displayName: "sample first-party seller",
 *     sellerProfileId: "seller-sampleFirstPartyId"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetOfferSetCommand extends command<GetOfferSetCommandInput, GetOfferSetCommandOutput>(
  _ep0,
  _mw0,
  "GetOfferSet",
  GetOfferSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOfferSetInput;
      output: GetOfferSetOutput;
    };
    sdk: {
      input: GetOfferSetCommandInput;
      output: GetOfferSetCommandOutput;
    };
  };
}
