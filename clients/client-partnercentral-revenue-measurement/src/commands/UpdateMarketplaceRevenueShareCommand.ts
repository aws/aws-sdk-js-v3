// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMarketplaceRevenueShareInput, UpdateMarketplaceRevenueShareOutput } from "../models/models_0";
import { UpdateMarketplaceRevenueShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMarketplaceRevenueShareCommand}.
 */
export interface UpdateMarketplaceRevenueShareCommandInput extends UpdateMarketplaceRevenueShareInput {}
/**
 * @public
 *
 * The output of {@link UpdateMarketplaceRevenueShareCommand}.
 */
export interface UpdateMarketplaceRevenueShareCommandOutput extends UpdateMarketplaceRevenueShareOutput, __MetadataBearer {}

/**
 * <p>Replaces the products of a marketplace revenue share. The request carries the complete desired set of products and their typed account lists; a product not listed is removed and its account lists cleared, and an empty Products list closes the marketplace revenue share. Closing is one-way.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralRevenueMeasurementClient, UpdateMarketplaceRevenueShareCommand } from "@aws-sdk/client-partnercentral-revenue-measurement"; // ES Modules import
 * // const { PartnerCentralRevenueMeasurementClient, UpdateMarketplaceRevenueShareCommand } = require("@aws-sdk/client-partnercentral-revenue-measurement"); // CommonJS import
 * // import type { PartnerCentralRevenueMeasurementClientConfig } from "@aws-sdk/client-partnercentral-revenue-measurement";
 * const config = {}; // type is PartnerCentralRevenueMeasurementClientConfig
 * const client = new PartnerCentralRevenueMeasurementClient(config);
 * const input = { // UpdateMarketplaceRevenueShareInput
 *   Catalog: "AWS" || "Sandbox", // required
 *   Identifier: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Revision: "STRING_VALUE", // required
 *   Products: [ // MarketplaceRevenueShareProductEntryList // required
 *     { // MarketplaceRevenueShareProductEntry
 *       ProductId: "STRING_VALUE", // required
 *       Accounts: [ // RevenueShareProductAccountEntryList
 *         { // RevenueShareProductAccountEntry
 *           AccountType: "DEPLOYMENT" || "ORGANIZATION", // required
 *           AccountIds: [ // RevenueShareProductAccountIdList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateMarketplaceRevenueShareCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMarketplaceRevenueShareOutput
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Products: [ // MarketplaceRevenueShareProductSummaryList // required
 * //     { // MarketplaceRevenueShareProductSummary
 * //       ProductId: "STRING_VALUE", // required
 * //       ProductCode: "STRING_VALUE",
 * //       ProductName: "STRING_VALUE",
 * //       Accounts: [ // RevenueShareProductAccountSummaryList
 * //         { // RevenueShareProductAccountSummary
 * //           AccountType: "DEPLOYMENT" || "ORGANIZATION", // required
 * //           Count: Number("int"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   LastModifiedDate: new Date("TIMESTAMP"), // required
 * //   LatestRevision: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateMarketplaceRevenueShareCommandInput - {@link UpdateMarketplaceRevenueShareCommandInput}
 * @returns {@link UpdateMarketplaceRevenueShareCommandOutput}
 * @see {@link UpdateMarketplaceRevenueShareCommandInput} for command's `input` shape.
 * @see {@link UpdateMarketplaceRevenueShareCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralRevenueMeasurementClientResolvedConfig | config} for PartnerCentralRevenueMeasurementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Retry your request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation due to invalid input parameters.</p>
 *
 * @throws {@link PartnerCentralRevenueMeasurementServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralRevenueMeasurement service.</p>
 *
 *
 * @example Example for UpdateMarketplaceRevenueShare
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   Identifier: "mrs-abc123def4567",
 *   Products: [
 *     {
 *       Accounts: [
 *         {
 *           AccountIds: [
 *             "111122223333"
 *           ],
 *           AccountType: "DEPLOYMENT"
 *         }
 *       ],
 *       ProductId: "prod-abc123def4567"
 *     }
 *   ],
 *   Revision: "1"
 * };
 * const command = new UpdateMarketplaceRevenueShareCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/marketplace-revenue-share/mrs-abc123def4567",
 *   Id: "mrs-abc123def4567",
 *   LastModifiedDate: 1784505600,
 *   LatestRevision: "2",
 *   Products: [
 *     {
 *       Accounts: [
 *         {
 *           AccountType: "DEPLOYMENT",
 *           Count: 1
 *         }
 *       ],
 *       ProductId: "prod-abc123def4567"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Example for closing a marketplace revenue share
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   Identifier: "mrs-abc123def4567",
 *   Products:   [],
 *   Revision: "2"
 * };
 * const command = new UpdateMarketplaceRevenueShareCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/marketplace-revenue-share/mrs-abc123def4567",
 *   Id: "mrs-abc123def4567",
 *   LastModifiedDate: 1784592000,
 *   LatestRevision: "3",
 *   Products:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateMarketplaceRevenueShareCommand extends command<UpdateMarketplaceRevenueShareCommandInput, UpdateMarketplaceRevenueShareCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMarketplaceRevenueShare",
  UpdateMarketplaceRevenueShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMarketplaceRevenueShareInput;
      output: UpdateMarketplaceRevenueShareOutput;
    };
    sdk: {
      input: UpdateMarketplaceRevenueShareCommandInput;
      output: UpdateMarketplaceRevenueShareCommandOutput;
    };
  };
}
