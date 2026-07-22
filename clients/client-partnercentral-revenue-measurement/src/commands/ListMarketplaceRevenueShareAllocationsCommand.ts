// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListMarketplaceRevenueShareAllocationsInput,
  ListMarketplaceRevenueShareAllocationsOutput,
} from "../models/models_0";
import { ListMarketplaceRevenueShareAllocations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMarketplaceRevenueShareAllocationsCommand}.
 */
export interface ListMarketplaceRevenueShareAllocationsCommandInput extends ListMarketplaceRevenueShareAllocationsInput {}
/**
 * @public
 *
 * The output of {@link ListMarketplaceRevenueShareAllocationsCommand}.
 */
export interface ListMarketplaceRevenueShareAllocationsCommandOutput extends ListMarketplaceRevenueShareAllocationsOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of allocations under a marketplace revenue share, with optional filtering by status and effective date range. Supports historical reads at a specific share revision.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralRevenueMeasurementClient, ListMarketplaceRevenueShareAllocationsCommand } from "@aws-sdk/client-partnercentral-revenue-measurement"; // ES Modules import
 * // const { PartnerCentralRevenueMeasurementClient, ListMarketplaceRevenueShareAllocationsCommand } = require("@aws-sdk/client-partnercentral-revenue-measurement"); // CommonJS import
 * // import type { PartnerCentralRevenueMeasurementClientConfig } from "@aws-sdk/client-partnercentral-revenue-measurement";
 * const config = {}; // type is PartnerCentralRevenueMeasurementClientConfig
 * const client = new PartnerCentralRevenueMeasurementClient(config);
 * const input = { // ListMarketplaceRevenueShareAllocationsInput
 *   Catalog: "AWS" || "Sandbox", // required
 *   ProductId: "STRING_VALUE", // required
 *   Status: "ACTIVE" || "INACTIVE",
 *   AfterEffectiveFrom: "STRING_VALUE",
 *   BeforeEffectiveFrom: "STRING_VALUE",
 *   SortBy: "EffectiveFrom",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   MarketplaceRevenueShareRevision: "STRING_VALUE",
 * };
 * const command = new ListMarketplaceRevenueShareAllocationsCommand(input);
 * const response = await client.send(command);
 * // { // ListMarketplaceRevenueShareAllocationsOutput
 * //   MarketplaceRevenueShareAllocationSummaries: [ // MarketplaceRevenueShareAllocationSummaryList // required
 * //     { // MarketplaceRevenueShareAllocationSummary
 * //       MarketplaceRevenueShareAllocationId: "STRING_VALUE", // required
 * //       ProductId: "STRING_VALUE", // required
 * //       ProductName: "STRING_VALUE",
 * //       Arn: "STRING_VALUE", // required
 * //       EffectiveFrom: "STRING_VALUE", // required
 * //       EffectiveUntil: "STRING_VALUE",
 * //       RevenueSharePercent: "STRING_VALUE", // required
 * //       Status: "ACTIVE" || "INACTIVE", // required
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMarketplaceRevenueShareAllocationsCommandInput - {@link ListMarketplaceRevenueShareAllocationsCommandInput}
 * @returns {@link ListMarketplaceRevenueShareAllocationsCommandOutput}
 * @see {@link ListMarketplaceRevenueShareAllocationsCommandInput} for command's `input` shape.
 * @see {@link ListMarketplaceRevenueShareAllocationsCommandOutput} for command's `response` shape.
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
 * @example Example for ListMarketplaceRevenueShareAllocations
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   ProductId: "prod-abc123def4567"
 * };
 * const command = new ListMarketplaceRevenueShareAllocationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   MarketplaceRevenueShareAllocationSummaries:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListMarketplaceRevenueShareAllocationsCommand extends command<ListMarketplaceRevenueShareAllocationsCommandInput, ListMarketplaceRevenueShareAllocationsCommandOutput>(
  _ep0,
  _mw0,
  "ListMarketplaceRevenueShareAllocations",
  ListMarketplaceRevenueShareAllocations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMarketplaceRevenueShareAllocationsInput;
      output: ListMarketplaceRevenueShareAllocationsOutput;
    };
    sdk: {
      input: ListMarketplaceRevenueShareAllocationsCommandInput;
      output: ListMarketplaceRevenueShareAllocationsCommandOutput;
    };
  };
}
