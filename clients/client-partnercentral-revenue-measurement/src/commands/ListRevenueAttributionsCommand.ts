// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRevenueAttributionsInput, ListRevenueAttributionsOutput } from "../models/models_0";
import { ListRevenueAttributions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRevenueAttributionsCommand}.
 */
export interface ListRevenueAttributionsCommandInput extends ListRevenueAttributionsInput {}
/**
 * @public
 *
 * The output of {@link ListRevenueAttributionsCommand}.
 */
export interface ListRevenueAttributionsCommandOutput extends ListRevenueAttributionsOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of revenue attributions with optional filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralRevenueMeasurementClient, ListRevenueAttributionsCommand } from "@aws-sdk/client-partnercentral-revenue-measurement"; // ES Modules import
 * // const { PartnerCentralRevenueMeasurementClient, ListRevenueAttributionsCommand } = require("@aws-sdk/client-partnercentral-revenue-measurement"); // CommonJS import
 * // import type { PartnerCentralRevenueMeasurementClientConfig } from "@aws-sdk/client-partnercentral-revenue-measurement";
 * const config = {}; // type is PartnerCentralRevenueMeasurementClientConfig
 * const client = new PartnerCentralRevenueMeasurementClient(config);
 * const input = { // ListRevenueAttributionsInput
 *   Catalog: "AWS" || "Sandbox", // required
 *   Identifiers: [ // RevenueAttributionIdentifierList
 *     "STRING_VALUE",
 *   ],
 *   CreatedAfter: new Date("TIMESTAMP"),
 *   CreatedBefore: new Date("TIMESTAMP"),
 *   SortBy: "LastModifiedDate",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRevenueAttributionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRevenueAttributionsOutput
 * //   RevenueAttributionSummaries: [ // RevenueAttributionSummaries
 * //     { // AttributionSummary
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Catalog: "AWS" || "Sandbox",
 * //       Name: "STRING_VALUE",
 * //       TenancyModel: "MULTI_TENANT" || "SINGLE_TENANT", // required
 * //       MarketplaceProduct: { // MarketplaceProductSummary
 * //         ProductId: "STRING_VALUE",
 * //         ProductCode: "STRING_VALUE",
 * //         ProductName: "STRING_VALUE",
 * //       },
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       LatestRevision: "STRING_VALUE",
 * //       EffectiveFrom: "STRING_VALUE",
 * //       EffectiveUntil: "STRING_VALUE",
 * //       TotalActiveRevenueAttributionAllocationCount: Number("int"),
 * //       TotalRevenueAttributionAllocationCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRevenueAttributionsCommandInput - {@link ListRevenueAttributionsCommandInput}
 * @returns {@link ListRevenueAttributionsCommandOutput}
 * @see {@link ListRevenueAttributionsCommandInput} for command's `input` shape.
 * @see {@link ListRevenueAttributionsCommandOutput} for command's `response` shape.
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
 * @example Example for ListRevenueAttributions
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS"
 * };
 * const command = new ListRevenueAttributionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   RevenueAttributionSummaries:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListRevenueAttributionsCommand extends command<ListRevenueAttributionsCommandInput, ListRevenueAttributionsCommandOutput>(
  _ep0,
  _mw0,
  "ListRevenueAttributions",
  ListRevenueAttributions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRevenueAttributionsInput;
      output: ListRevenueAttributionsOutput;
    };
    sdk: {
      input: ListRevenueAttributionsCommandInput;
      output: ListRevenueAttributionsCommandOutput;
    };
  };
}
