// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateMarketplaceRevenueShareAllocationInput,
  UpdateMarketplaceRevenueShareAllocationOutput,
} from "../models/models_0";
import { UpdateMarketplaceRevenueShareAllocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMarketplaceRevenueShareAllocationCommand}.
 */
export interface UpdateMarketplaceRevenueShareAllocationCommandInput extends UpdateMarketplaceRevenueShareAllocationInput {}
/**
 * @public
 *
 * The output of {@link UpdateMarketplaceRevenueShareAllocationCommand}.
 */
export interface UpdateMarketplaceRevenueShareAllocationCommandOutput extends UpdateMarketplaceRevenueShareAllocationOutput, __MetadataBearer {}

/**
 * <p>Updates an existing marketplace revenue share allocation. Supports modifying the revenue share percentage and status only, with time-based mutability rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralRevenueMeasurementClient, UpdateMarketplaceRevenueShareAllocationCommand } from "@aws-sdk/client-partnercentral-revenue-measurement"; // ES Modules import
 * // const { PartnerCentralRevenueMeasurementClient, UpdateMarketplaceRevenueShareAllocationCommand } = require("@aws-sdk/client-partnercentral-revenue-measurement"); // CommonJS import
 * // import type { PartnerCentralRevenueMeasurementClientConfig } from "@aws-sdk/client-partnercentral-revenue-measurement";
 * const config = {}; // type is PartnerCentralRevenueMeasurementClientConfig
 * const client = new PartnerCentralRevenueMeasurementClient(config);
 * const input = { // UpdateMarketplaceRevenueShareAllocationInput
 *   Catalog: "AWS" || "Sandbox", // required
 *   MarketplaceRevenueShareIdentifier: "STRING_VALUE", // required
 *   MarketplaceRevenueShareAllocationId: "STRING_VALUE", // required
 *   MarketplaceRevenueShareRevision: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   RevenueSharePercent: "STRING_VALUE",
 *   Status: "ACTIVE" || "INACTIVE",
 * };
 * const command = new UpdateMarketplaceRevenueShareAllocationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMarketplaceRevenueShareAllocationOutput
 * //   MarketplaceRevenueShareAllocationId: "STRING_VALUE", // required
 * //   MarketplaceRevenueShareIdentifier: "STRING_VALUE", // required
 * //   EffectiveFrom: "STRING_VALUE", // required
 * //   EffectiveUntil: "STRING_VALUE", // required
 * //   RevenueSharePercent: "STRING_VALUE", // required
 * //   Status: "ACTIVE" || "INACTIVE", // required
 * //   CreatedDate: new Date("TIMESTAMP"), // required
 * //   LastModifiedDate: new Date("TIMESTAMP"), // required
 * //   MarketplaceRevenueShareRevision: "STRING_VALUE", // required
 * //   MarketplaceRevenueShareLatestRevision: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateMarketplaceRevenueShareAllocationCommandInput - {@link UpdateMarketplaceRevenueShareAllocationCommandInput}
 * @returns {@link UpdateMarketplaceRevenueShareAllocationCommandOutput}
 * @see {@link UpdateMarketplaceRevenueShareAllocationCommandInput} for command's `input` shape.
 * @see {@link UpdateMarketplaceRevenueShareAllocationCommandOutput} for command's `response` shape.
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
 * @example Example for UpdateMarketplaceRevenueShareAllocation
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   MarketplaceRevenueShareAllocationId: "mrsa-abc123def4567",
 *   MarketplaceRevenueShareIdentifier: "mrs-abc123def4567",
 *   MarketplaceRevenueShareRevision: "2",
 *   RevenueSharePercent: "20.00"
 * };
 * const command = new UpdateMarketplaceRevenueShareAllocationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CreatedDate: 1784505600,
 *   EffectiveFrom: "2026-07-01",
 *   EffectiveUntil: "2026-12-31",
 *   LastModifiedDate: 1784592000,
 *   MarketplaceRevenueShareAllocationId: "mrsa-abc123def4567",
 *   MarketplaceRevenueShareIdentifier: "mrs-abc123def4567",
 *   MarketplaceRevenueShareLatestRevision: "3",
 *   MarketplaceRevenueShareRevision: "3",
 *   RevenueSharePercent: "20.00",
 *   Status: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateMarketplaceRevenueShareAllocationCommand extends command<UpdateMarketplaceRevenueShareAllocationCommandInput, UpdateMarketplaceRevenueShareAllocationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMarketplaceRevenueShareAllocation",
  UpdateMarketplaceRevenueShareAllocation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMarketplaceRevenueShareAllocationInput;
      output: UpdateMarketplaceRevenueShareAllocationOutput;
    };
    sdk: {
      input: UpdateMarketplaceRevenueShareAllocationCommandInput;
      output: UpdateMarketplaceRevenueShareAllocationCommandOutput;
    };
  };
}
