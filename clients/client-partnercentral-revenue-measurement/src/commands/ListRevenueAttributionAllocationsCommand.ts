// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListRevenueAttributionAllocationsInput,
  ListRevenueAttributionAllocationsOutput,
} from "../models/models_0";
import { ListRevenueAttributionAllocations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRevenueAttributionAllocationsCommand}.
 */
export interface ListRevenueAttributionAllocationsCommandInput extends ListRevenueAttributionAllocationsInput {}
/**
 * @public
 *
 * The output of {@link ListRevenueAttributionAllocationsCommand}.
 */
export interface ListRevenueAttributionAllocationsCommandOutput extends ListRevenueAttributionAllocationsOutput, __MetadataBearer {}

/**
 * Returns a paginated list of committed allocations with support for filtering by entity, customer, status, or date range.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralRevenueMeasurementClient, ListRevenueAttributionAllocationsCommand } from "@aws-sdk/client-partnercentral-revenue-measurement"; // ES Modules import
 * // const { PartnerCentralRevenueMeasurementClient, ListRevenueAttributionAllocationsCommand } = require("@aws-sdk/client-partnercentral-revenue-measurement"); // CommonJS import
 * // import type { PartnerCentralRevenueMeasurementClientConfig } from "@aws-sdk/client-partnercentral-revenue-measurement";
 * const config = {}; // type is PartnerCentralRevenueMeasurementClientConfig
 * const client = new PartnerCentralRevenueMeasurementClient(config);
 * const input = { // ListRevenueAttributionAllocationsInput
 *   Catalog: "AWS" || "Sandbox", // required
 *   RevenueAttributionIdentifier: "STRING_VALUE", // required
 *   EntityTypeFilters: [ // EntityTypeFilterList
 *     "OFFER" || "OPPORTUNITY",
 *   ],
 *   EntityIdentifierFilters: [ // EntityIdentifierFilterList
 *     "STRING_VALUE",
 *   ],
 *   CustomerAwsAccountIdFilters: [ // CustomerAwsAccountIdFilterList
 *     "STRING_VALUE",
 *   ],
 *   StatusFilter: "ACTIVE" || "INACTIVE",
 *   AfterEffectiveFrom: "STRING_VALUE",
 *   BeforeEffectiveFrom: "STRING_VALUE",
 *   AfterEffectiveUntil: "STRING_VALUE",
 *   BeforeEffectiveUntil: "STRING_VALUE",
 *   SortBy: "EffectiveFrom",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 *   RevenueAttributionRevision: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRevenueAttributionAllocationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRevenueAttributionAllocationsOutput
 * //   RevenueAttributionAllocationSummaries: [ // RevenueAttributionAllocationSummaryList // required
 * //     { // RevenueAttributionAllocationSummary
 * //       RevenueAttributionAllocationId: "STRING_VALUE", // required
 * //       RevenueAttributionIdentifier: "STRING_VALUE", // required
 * //       EntityType: "OFFER" || "OPPORTUNITY", // required
 * //       EntityIdentifier: "STRING_VALUE", // required
 * //       EntityName: "STRING_VALUE",
 * //       CustomerAwsAccountId: "STRING_VALUE", // required
 * //       RevenueSharePercent: "STRING_VALUE", // required
 * //       EffectiveFrom: "STRING_VALUE", // required
 * //       EffectiveUntil: "STRING_VALUE", // required
 * //       Status: "ACTIVE" || "INACTIVE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRevenueAttributionAllocationsCommandInput - {@link ListRevenueAttributionAllocationsCommandInput}
 * @returns {@link ListRevenueAttributionAllocationsCommandOutput}
 * @see {@link ListRevenueAttributionAllocationsCommandInput} for command's `input` shape.
 * @see {@link ListRevenueAttributionAllocationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
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
 * @example Example for ListRevenueAttributionAllocations
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   RevenueAttributionIdentifier: "ra-0a1b2c3d4e5f6"
 * };
 * const command = new ListRevenueAttributionAllocationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   RevenueAttributionAllocationSummaries:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListRevenueAttributionAllocationsCommand extends command<ListRevenueAttributionAllocationsCommandInput, ListRevenueAttributionAllocationsCommandOutput>(
  _ep0,
  _mw0,
  "ListRevenueAttributionAllocations",
  ListRevenueAttributionAllocations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRevenueAttributionAllocationsInput;
      output: ListRevenueAttributionAllocationsOutput;
    };
    sdk: {
      input: ListRevenueAttributionAllocationsCommandInput;
      output: ListRevenueAttributionAllocationsCommandOutput;
    };
  };
}
