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
import type { ListPurchaseOptionsInput, ListPurchaseOptionsOutput } from "../models/models_0";
import { ListPurchaseOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPurchaseOptionsCommand}.
 */
export interface ListPurchaseOptionsCommandInput extends ListPurchaseOptionsInput {}
/**
 * @public
 *
 * The output of {@link ListPurchaseOptionsCommand}.
 */
export interface ListPurchaseOptionsCommandOutput extends ListPurchaseOptionsOutput, __MetadataBearer {}

/**
 * <p>Returns the purchase options (offers and offer sets) available to the buyer. You can filter results by product, seller, purchase option type, visibility scope, and availability status.</p> <note> <p>You must include at least one of the following filters in the request: a <code>PRODUCT_ID</code> filter to specify the product for which to retrieve purchase options, or a <code>VISIBILITY_SCOPE</code> filter to retrieve purchase options by visibility.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDiscoveryClient, ListPurchaseOptionsCommand } from "@aws-sdk/client-marketplace-discovery"; // ES Modules import
 * // const { MarketplaceDiscoveryClient, ListPurchaseOptionsCommand } = require("@aws-sdk/client-marketplace-discovery"); // CommonJS import
 * // import type { MarketplaceDiscoveryClientConfig } from "@aws-sdk/client-marketplace-discovery";
 * const config = {}; // type is MarketplaceDiscoveryClientConfig
 * const client = new MarketplaceDiscoveryClient(config);
 * const input = { // ListPurchaseOptionsInput
 *   filters: [ // PurchaseOptionFilterList
 *     { // PurchaseOptionFilter
 *       filterType: "PRODUCT_ID" || "SELLER_OF_RECORD_PROFILE_ID" || "PURCHASE_OPTION_TYPE" || "VISIBILITY_SCOPE" || "AVAILABILITY_STATUS", // required
 *       filterValues: [ // PurchaseOptionFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPurchaseOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPurchaseOptionsOutput
 * //   purchaseOptions: [ // PurchaseOptionSummaryList
 * //     { // PurchaseOptionSummary
 * //       purchaseOptionId: "STRING_VALUE", // required
 * //       catalog: "STRING_VALUE", // required
 * //       purchaseOptionType: "OFFER" || "OFFERSET", // required
 * //       purchaseOptionName: "STRING_VALUE",
 * //       availableFromTime: new Date("TIMESTAMP"),
 * //       expirationTime: new Date("TIMESTAMP"),
 * //       sellerOfRecord: { // SellerInformation
 * //         sellerProfileId: "STRING_VALUE", // required
 * //         displayName: "STRING_VALUE", // required
 * //       },
 * //       badges: [ // PurchaseOptionBadgeList
 * //         { // PurchaseOptionBadge
 * //           displayName: "STRING_VALUE", // required
 * //           badgeType: "PRIVATE_PRICING" || "FUTURE_DATED" || "REPLACEMENT_OFFER", // required
 * //         },
 * //       ],
 * //       associatedEntities: [ // PurchaseOptionAssociatedEntityList // required
 * //         { // PurchaseOptionAssociatedEntity
 * //           product: { // ProductInformation
 * //             productId: "STRING_VALUE", // required
 * //             productName: "STRING_VALUE", // required
 * //             manufacturer: {
 * //               sellerProfileId: "STRING_VALUE", // required
 * //               displayName: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           offer: { // OfferInformation
 * //             offerId: "STRING_VALUE", // required
 * //             offerName: "STRING_VALUE",
 * //             sellerOfRecord: {
 * //               sellerProfileId: "STRING_VALUE", // required
 * //               displayName: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           offerSet: { // OfferSetInformation
 * //             offerSetId: "STRING_VALUE", // required
 * //             sellerOfRecord: {
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
 * @param ListPurchaseOptionsCommandInput - {@link ListPurchaseOptionsCommandInput}
 * @returns {@link ListPurchaseOptionsCommandOutput}
 * @see {@link ListPurchaseOptionsCommandInput} for command's `input` shape.
 * @see {@link ListPurchaseOptionsCommandOutput} for command's `response` shape.
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
 * @example Filter by Product ID
 * ```javascript
 * //
 * const input = {
 *   filters: [
 *     {
 *       filterType: "PRODUCT_ID",
 *       filterValues: [
 *         "prod-sampleOfferId"
 *       ]
 *     }
 *   ]
 * };
 * const command = new ListPurchaseOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   purchaseOptions: [
 *     {
 *       associatedEntities: [
 *         {
 *           offer: {
 *             offerId: "offer-sampleOfferId",
 *             sellerOfRecord: {
 *               displayName: "sample offer seller",
 *               sellerProfileId: "seller-sampleOfferId"
 *             }
 *           },
 *           product: {
 *             manufacturer: {
 *               displayName: "sample offer seller",
 *               sellerProfileId: "seller-sampleOfferId"
 *             },
 *             productId: "prod-sampleOfferId",
 *             productName: "sample offer product"
 *           }
 *         }
 *       ],
 *       availableFromTime: "2021-12-15T00:00:00.000Z",
 *       badges:       [],
 *       catalog: "AWS_MARKETPLACE",
 *       purchaseOptionId: "offer-sampleOfferId",
 *       purchaseOptionName: "sample offer",
 *       purchaseOptionType: "OFFER",
 *       sellerOfRecord: {
 *         displayName: "sample offer seller",
 *         sellerProfileId: "seller-sampleOfferId"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Filter by Seller with Private Offerset
 * ```javascript
 * //
 * const input = {
 *   filters: [
 *     {
 *       filterType: "SELLER_OF_RECORD_PROFILE_ID",
 *       filterValues: [
 *         "seller-sampleResellerId"
 *       ]
 *     },
 *     {
 *       filterType: "PURCHASE_OPTION_TYPE",
 *       filterValues: [
 *         "OFFERSET"
 *       ]
 *     },
 *     {
 *       filterType: "VISIBILITY_SCOPE",
 *       filterValues: [
 *         "PRIVATE"
 *       ]
 *     }
 *   ]
 * };
 * const command = new ListPurchaseOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   purchaseOptions: [
 *     {
 *       associatedEntities: [
 *         {
 *           offer: {
 *             offerId: "offer-sampleId1",
 *             sellerOfRecord: {
 *               displayName: "sample reseller",
 *               sellerProfileId: "seller-sampleResellerId"
 *             }
 *           },
 *           product: {
 *             manufacturer: {
 *               displayName: "sample seller name 1",
 *               sellerProfileId: "seller-sampleId1"
 *             },
 *             productId: "prod-sampleId1",
 *             productName: "sample product name 1"
 *           }
 *         },
 *         {
 *           offer: {
 *             offerId: "offer-sampleId2",
 *             sellerOfRecord: {
 *               displayName: "sample reseller",
 *               sellerProfileId: "seller-sampleResellerId"
 *             }
 *           },
 *           product: {
 *             manufacturer: {
 *               displayName: "sample seller name 2",
 *               sellerProfileId: "seller-sampleId2"
 *             },
 *             productId: "prod-sampleId2",
 *             productName: "sample product name 2"
 *           }
 *         }
 *       ],
 *       availableFromTime: "2024-03-20T00:00:00.000Z",
 *       badges: [
 *         {
 *           badgeType: "PRIVATE_PRICING",
 *           displayName: "Private Pricing"
 *         }
 *       ],
 *       catalog: "AWS_MARKETPLACE",
 *       expirationTime: "2025-03-20T00:00:00.000Z",
 *       purchaseOptionId: "offerset-sampleId",
 *       purchaseOptionName: "sample offerset",
 *       purchaseOptionType: "OFFERSET",
 *       sellerOfRecord: {
 *         displayName: "sample reseller",
 *         sellerProfileId: "seller-sampleResellerId"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListPurchaseOptionsCommand extends $Command
  .classBuilder<
    ListPurchaseOptionsCommandInput,
    ListPurchaseOptionsCommandOutput,
    MarketplaceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceDiscoveryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMarketplaceDiscovery", "ListPurchaseOptions", {})
  .n("MarketplaceDiscoveryClient", "ListPurchaseOptionsCommand")
  .sc(ListPurchaseOptions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPurchaseOptionsInput;
      output: ListPurchaseOptionsOutput;
    };
    sdk: {
      input: ListPurchaseOptionsCommandInput;
      output: ListPurchaseOptionsCommandOutput;
    };
  };
}
