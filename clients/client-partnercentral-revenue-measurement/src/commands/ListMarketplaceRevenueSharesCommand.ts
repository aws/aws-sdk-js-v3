// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMarketplaceRevenueSharesInput, ListMarketplaceRevenueSharesOutput } from "../models/models_0";
import { ListMarketplaceRevenueShares$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMarketplaceRevenueSharesCommand}.
 */
export interface ListMarketplaceRevenueSharesCommandInput extends ListMarketplaceRevenueSharesInput {}
/**
 * @public
 *
 * The output of {@link ListMarketplaceRevenueSharesCommand}.
 */
export interface ListMarketplaceRevenueSharesCommandOutput extends ListMarketplaceRevenueSharesOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of marketplace revenue shares with optional filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralRevenueMeasurementClient, ListMarketplaceRevenueSharesCommand } from "@aws-sdk/client-partnercentral-revenue-measurement"; // ES Modules import
 * // const { PartnerCentralRevenueMeasurementClient, ListMarketplaceRevenueSharesCommand } = require("@aws-sdk/client-partnercentral-revenue-measurement"); // CommonJS import
 * // import type { PartnerCentralRevenueMeasurementClientConfig } from "@aws-sdk/client-partnercentral-revenue-measurement";
 * const config = {}; // type is PartnerCentralRevenueMeasurementClientConfig
 * const client = new PartnerCentralRevenueMeasurementClient(config);
 * const input = { // ListMarketplaceRevenueSharesInput
 *   Catalog: "AWS" || "Sandbox", // required
 *   Identifiers: [ // MarketplaceRevenueShareIdentifierList
 *     "STRING_VALUE",
 *   ],
 *   ProductIds: [ // MarketplaceProductIdList
 *     "STRING_VALUE",
 *   ],
 *   ProductCodes: [ // ProductCodeList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SortBy: "LastModifiedDate",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 *   CreatedAfter: new Date("TIMESTAMP"),
 *   CreatedBefore: new Date("TIMESTAMP"),
 * };
 * const command = new ListMarketplaceRevenueSharesCommand(input);
 * const response = await client.send(command);
 * // { // ListMarketplaceRevenueSharesOutput
 * //   MarketplaceRevenueShareSummaries: [ // MarketplaceRevenueShareSummaryList // required
 * //     { // MarketplaceRevenueShareSummary
 * //       Id: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Catalog: "AWS" || "Sandbox", // required
 * //       Products: [ // MarketplaceRevenueShareProductSummaryList // required
 * //         { // MarketplaceRevenueShareProductSummary
 * //           ProductId: "STRING_VALUE", // required
 * //           ProductCode: "STRING_VALUE",
 * //           ProductName: "STRING_VALUE",
 * //           Accounts: [ // RevenueShareProductAccountSummaryList
 * //             { // RevenueShareProductAccountSummary
 * //               AccountType: "DEPLOYMENT" || "ORGANIZATION", // required
 * //               Count: Number("int"), // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       CreatedDate: new Date("TIMESTAMP"), // required
 * //       LastModifiedDate: new Date("TIMESTAMP"), // required
 * //       LatestRevision: "STRING_VALUE", // required
 * //       EffectiveFrom: "STRING_VALUE",
 * //       EffectiveUntil: "STRING_VALUE",
 * //       TotalActiveMarketplaceRevenueShareAllocationCount: Number("int"), // required
 * //       TotalMarketplaceRevenueShareAllocationCount: Number("int"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMarketplaceRevenueSharesCommandInput - {@link ListMarketplaceRevenueSharesCommandInput}
 * @returns {@link ListMarketplaceRevenueSharesCommandOutput}
 * @see {@link ListMarketplaceRevenueSharesCommandInput} for command's `input` shape.
 * @see {@link ListMarketplaceRevenueSharesCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralRevenueMeasurementClientResolvedConfig | config} for PartnerCentralRevenueMeasurementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
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
 * @example Example for ListMarketplaceRevenueShares
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   MaxResults: 10
 * };
 * const command = new ListMarketplaceRevenueSharesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   MarketplaceRevenueShareSummaries: [
 *     {
 *       Arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/marketplace-revenue-share/mrs-abc123def4567",
 *       Catalog: "AWS",
 *       CreatedDate: 1784419200,
 *       EffectiveFrom: "2026-07-01",
 *       EffectiveUntil: "2026-12-31",
 *       Id: "mrs-abc123def4567",
 *       LastModifiedDate: 1784505600,
 *       LatestRevision: "2",
 *       Products: [
 *         {
 *           Accounts: [
 *             {
 *               AccountType: "DEPLOYMENT",
 *               Count: 1
 *             }
 *           ],
 *           ProductId: "prod-abc123def4567"
 *         }
 *       ],
 *       TotalActiveMarketplaceRevenueShareAllocationCount: 1,
 *       TotalMarketplaceRevenueShareAllocationCount: 1
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListMarketplaceRevenueSharesCommand extends command<ListMarketplaceRevenueSharesCommandInput, ListMarketplaceRevenueSharesCommandOutput>(
  _ep0,
  _mw0,
  "ListMarketplaceRevenueShares",
  ListMarketplaceRevenueShares$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMarketplaceRevenueSharesInput;
      output: ListMarketplaceRevenueSharesOutput;
    };
    sdk: {
      input: ListMarketplaceRevenueSharesCommandInput;
      output: ListMarketplaceRevenueSharesCommandOutput;
    };
  };
}
