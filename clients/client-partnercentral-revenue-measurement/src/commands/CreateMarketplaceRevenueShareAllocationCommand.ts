// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateMarketplaceRevenueShareAllocationInput,
  CreateMarketplaceRevenueShareAllocationOutput,
} from "../models/models_0";
import { CreateMarketplaceRevenueShareAllocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMarketplaceRevenueShareAllocationCommand}.
 */
export interface CreateMarketplaceRevenueShareAllocationCommandInput extends CreateMarketplaceRevenueShareAllocationInput {}
/**
 * @public
 *
 * The output of {@link CreateMarketplaceRevenueShareAllocationCommand}.
 */
export interface CreateMarketplaceRevenueShareAllocationCommandOutput extends CreateMarketplaceRevenueShareAllocationOutput, __MetadataBearer {}

/**
 * <p>Creates a new marketplace revenue share allocation for the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralRevenueMeasurementClient, CreateMarketplaceRevenueShareAllocationCommand } from "@aws-sdk/client-partnercentral-revenue-measurement"; // ES Modules import
 * // const { PartnerCentralRevenueMeasurementClient, CreateMarketplaceRevenueShareAllocationCommand } = require("@aws-sdk/client-partnercentral-revenue-measurement"); // CommonJS import
 * // import type { PartnerCentralRevenueMeasurementClientConfig } from "@aws-sdk/client-partnercentral-revenue-measurement";
 * const config = {}; // type is PartnerCentralRevenueMeasurementClientConfig
 * const client = new PartnerCentralRevenueMeasurementClient(config);
 * const input = { // CreateMarketplaceRevenueShareAllocationInput
 *   Catalog: "AWS" || "Sandbox", // required
 *   ProductId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   EffectiveFrom: "STRING_VALUE", // required
 *   EffectiveUntil: "STRING_VALUE",
 *   RevenueSharePercent: "STRING_VALUE", // required
 * };
 * const command = new CreateMarketplaceRevenueShareAllocationCommand(input);
 * const response = await client.send(command);
 * // { // CreateMarketplaceRevenueShareAllocationOutput
 * //   MarketplaceRevenueShareAllocationId: "STRING_VALUE", // required
 * //   ProductId: "STRING_VALUE", // required
 * //   ProductName: "STRING_VALUE",
 * //   Arn: "STRING_VALUE", // required
 * //   EffectiveFrom: "STRING_VALUE", // required
 * //   EffectiveUntil: "STRING_VALUE",
 * //   RevenueSharePercent: "STRING_VALUE", // required
 * //   Status: "ACTIVE" || "INACTIVE", // required
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   LastModifiedDate: new Date("TIMESTAMP"),
 * //   LatestMarketplaceRevenueShareRevision: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMarketplaceRevenueShareAllocationCommandInput - {@link CreateMarketplaceRevenueShareAllocationCommandInput}
 * @returns {@link CreateMarketplaceRevenueShareAllocationCommandOutput}
 * @see {@link CreateMarketplaceRevenueShareAllocationCommandInput} for command's `input` shape.
 * @see {@link CreateMarketplaceRevenueShareAllocationCommandOutput} for command's `response` shape.
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
 * @example Example for CreateMarketplaceRevenueShareAllocation
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   EffectiveFrom: "2026-07-01",
 *   ProductId: "prod-abc123def4567",
 *   RevenueSharePercent: "15.50"
 * };
 * const command = new CreateMarketplaceRevenueShareAllocationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/marketplace-revenue-share-allocation/mrsa-abc123def4567",
 *   EffectiveFrom: "2026-07-01",
 *   MarketplaceRevenueShareAllocationId: "mrsa-abc123def4567",
 *   ProductId: "prod-abc123def4567",
 *   RevenueSharePercent: "15.50",
 *   Status: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateMarketplaceRevenueShareAllocationCommand extends command<CreateMarketplaceRevenueShareAllocationCommandInput, CreateMarketplaceRevenueShareAllocationCommandOutput>(
  _ep0,
  _mw0,
  "CreateMarketplaceRevenueShareAllocation",
  CreateMarketplaceRevenueShareAllocation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMarketplaceRevenueShareAllocationInput;
      output: CreateMarketplaceRevenueShareAllocationOutput;
    };
    sdk: {
      input: CreateMarketplaceRevenueShareAllocationCommandInput;
      output: CreateMarketplaceRevenueShareAllocationCommandOutput;
    };
  };
}
