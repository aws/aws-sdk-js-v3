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
import type { GetOfferSetInput, GetOfferSetOutput } from "../models/models_0";
import { GetOfferSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *   offerSetId: "STRING_VALUE", // required
 * };
 * const command = new GetOfferSetCommand(input);
 * const response = await client.send(command);
 * // { // GetOfferSetOutput
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
 * //       badgeType: "PRIVATE_PRICING" || "FUTURE_DATED" || "REPLACEMENT_OFFER", // required
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
 *     }
 *   ],
 *   buyerNotes: "This bundle includes CrowdStrike Falcon and Splunk Enterprise for comprehensive security monitoring.",
 *   catalog: "AWSMarketplace",
 *   expirationTime: "2025-03-20T00:00:00.000Z",
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
 * @public
 */
export class GetOfferSetCommand extends $Command
  .classBuilder<
    GetOfferSetCommandInput,
    GetOfferSetCommandOutput,
    MarketplaceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceDiscoveryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMarketplaceDiscovery", "GetOfferSet", {})
  .n("MarketplaceDiscoveryClient", "GetOfferSetCommand")
  .sc(GetOfferSet$)
  .build() {
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
