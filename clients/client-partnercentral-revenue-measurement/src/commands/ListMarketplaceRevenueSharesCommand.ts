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
 * Returns a paginated list of marketplace revenue shares with optional filters.
 *
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
 * //       ProductId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Catalog: "AWS" || "Sandbox",
 * //       ProductCode: "STRING_VALUE",
 * //       ProductName: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       LatestRevision: Number("int"),
 * //       TotalActiveMarketplaceRevenueShareAllocationCount: Number("int"),
 * //       TotalMarketplaceRevenueShareAllocationCount: Number("int"),
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
 *
 * The request was denied due to insufficient permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to too many requests. Retry your request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed validation due to invalid input parameters.
 *
 * @throws {@link PartnerCentralRevenueMeasurementServiceException}
 *
 * Base exception class for all service exceptions from PartnerCentralRevenueMeasurement service.
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
 *   MarketplaceRevenueShareSummaries:   []
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
