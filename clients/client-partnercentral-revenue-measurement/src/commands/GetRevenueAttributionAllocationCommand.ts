// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRevenueAttributionAllocationInput, GetRevenueAttributionAllocationOutput } from "../models/models_0";
import { GetRevenueAttributionAllocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRevenueAttributionAllocationCommand}.
 */
export interface GetRevenueAttributionAllocationCommandInput extends GetRevenueAttributionAllocationInput {}
/**
 * @public
 *
 * The output of {@link GetRevenueAttributionAllocationCommand}.
 */
export interface GetRevenueAttributionAllocationCommandOutput extends GetRevenueAttributionAllocationOutput, __MetadataBearer {}

/**
 * <p>Retrieves a single allocation by its RevenueAttributionAllocationId. Supports optional point-in-time version queries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralRevenueMeasurementClient, GetRevenueAttributionAllocationCommand } from "@aws-sdk/client-partnercentral-revenue-measurement"; // ES Modules import
 * // const { PartnerCentralRevenueMeasurementClient, GetRevenueAttributionAllocationCommand } = require("@aws-sdk/client-partnercentral-revenue-measurement"); // CommonJS import
 * // import type { PartnerCentralRevenueMeasurementClientConfig } from "@aws-sdk/client-partnercentral-revenue-measurement";
 * const config = {}; // type is PartnerCentralRevenueMeasurementClientConfig
 * const client = new PartnerCentralRevenueMeasurementClient(config);
 * const input = { // GetRevenueAttributionAllocationInput
 *   Catalog: "AWS" || "Sandbox", // required
 *   RevenueAttributionIdentifier: "STRING_VALUE", // required
 *   RevenueAttributionAllocationId: "STRING_VALUE", // required
 *   RevenueAttributionRevision: "STRING_VALUE",
 * };
 * const command = new GetRevenueAttributionAllocationCommand(input);
 * const response = await client.send(command);
 * // { // GetRevenueAttributionAllocationOutput
 * //   RevenueAttributionAllocationId: "STRING_VALUE", // required
 * //   RevenueAttributionIdentifier: "STRING_VALUE", // required
 * //   EntityType: "OFFER" || "OPPORTUNITY", // required
 * //   EntityIdentifier: "STRING_VALUE", // required
 * //   EntityName: "STRING_VALUE",
 * //   CustomerAwsAccountId: "STRING_VALUE", // required
 * //   RevenueSharePercent: "STRING_VALUE", // required
 * //   EffectiveFrom: "STRING_VALUE", // required
 * //   EffectiveUntil: "STRING_VALUE", // required
 * //   Status: "ACTIVE" || "INACTIVE", // required
 * //   CreatedDate: new Date("TIMESTAMP"), // required
 * //   LastModifiedDate: new Date("TIMESTAMP"), // required
 * //   RevenueAttributionRevision: "STRING_VALUE", // required
 * //   RevenueAttributionLatestRevision: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetRevenueAttributionAllocationCommandInput - {@link GetRevenueAttributionAllocationCommandInput}
 * @returns {@link GetRevenueAttributionAllocationCommandOutput}
 * @see {@link GetRevenueAttributionAllocationCommandInput} for command's `input` shape.
 * @see {@link GetRevenueAttributionAllocationCommandOutput} for command's `response` shape.
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
 * @example Example for GetRevenueAttributionAllocation
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   RevenueAttributionAllocationId: "alloc-abc123def4567",
 *   RevenueAttributionIdentifier: "ra-0a1b2c3d4e5f6"
 * };
 * const command = new GetRevenueAttributionAllocationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CreatedDate: 1719792000,
 *   CustomerAwsAccountId: "123456789012",
 *   EffectiveFrom: "2026-07-01",
 *   EffectiveUntil: "2026-07-31",
 *   EntityIdentifier: "offer-abc123",
 *   EntityType: "OFFER",
 *   LastModifiedDate: 1719792000,
 *   RevenueAttributionAllocationId: "alloc-abc123def4567",
 *   RevenueAttributionIdentifier: "ra-0a1b2c3d4e5f6",
 *   RevenueAttributionLatestRevision: "1",
 *   RevenueAttributionRevision: "1",
 *   RevenueSharePercent: "15.50",
 *   Status: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetRevenueAttributionAllocationCommand extends command<GetRevenueAttributionAllocationCommandInput, GetRevenueAttributionAllocationCommandOutput>(
  _ep0,
  _mw0,
  "GetRevenueAttributionAllocation",
  GetRevenueAttributionAllocation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRevenueAttributionAllocationInput;
      output: GetRevenueAttributionAllocationOutput;
    };
    sdk: {
      input: GetRevenueAttributionAllocationCommandInput;
      output: GetRevenueAttributionAllocationCommandOutput;
    };
  };
}
