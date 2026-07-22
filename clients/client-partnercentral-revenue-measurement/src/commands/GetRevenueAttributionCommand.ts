// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRevenueAttributionInput, GetRevenueAttributionOutput } from "../models/models_0";
import { GetRevenueAttribution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRevenueAttributionCommand}.
 */
export interface GetRevenueAttributionCommandInput extends GetRevenueAttributionInput {}
/**
 * @public
 *
 * The output of {@link GetRevenueAttributionCommand}.
 */
export interface GetRevenueAttributionCommandOutput extends GetRevenueAttributionOutput, __MetadataBearer {}

/**
 * <p>Retrieves the details of a specific revenue attribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralRevenueMeasurementClient, GetRevenueAttributionCommand } from "@aws-sdk/client-partnercentral-revenue-measurement"; // ES Modules import
 * // const { PartnerCentralRevenueMeasurementClient, GetRevenueAttributionCommand } = require("@aws-sdk/client-partnercentral-revenue-measurement"); // CommonJS import
 * // import type { PartnerCentralRevenueMeasurementClientConfig } from "@aws-sdk/client-partnercentral-revenue-measurement";
 * const config = {}; // type is PartnerCentralRevenueMeasurementClientConfig
 * const client = new PartnerCentralRevenueMeasurementClient(config);
 * const input = { // GetRevenueAttributionInput
 *   Catalog: "AWS" || "Sandbox", // required
 *   Identifier: "STRING_VALUE", // required
 *   Revision: "STRING_VALUE",
 * };
 * const command = new GetRevenueAttributionCommand(input);
 * const response = await client.send(command);
 * // { // GetRevenueAttributionOutput
 * //   Arn: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   Catalog: "AWS" || "Sandbox", // required
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   TenancyModel: "MULTI_TENANT" || "SINGLE_TENANT", // required
 * //   MarketplaceProduct: { // MarketplaceProductSummary
 * //     ProductId: "STRING_VALUE",
 * //     ProductCode: "STRING_VALUE",
 * //     ProductName: "STRING_VALUE",
 * //   },
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   LastModifiedDate: new Date("TIMESTAMP"),
 * //   Revision: "STRING_VALUE",
 * //   LatestRevision: "STRING_VALUE",
 * //   EffectiveFrom: "STRING_VALUE",
 * //   EffectiveUntil: "STRING_VALUE",
 * //   TotalActiveRevenueAttributionAllocationCount: Number("int"),
 * //   TotalRevenueAttributionAllocationCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetRevenueAttributionCommandInput - {@link GetRevenueAttributionCommandInput}
 * @returns {@link GetRevenueAttributionCommandOutput}
 * @see {@link GetRevenueAttributionCommandInput} for command's `input` shape.
 * @see {@link GetRevenueAttributionCommandOutput} for command's `response` shape.
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
 * @example Example for GetRevenueAttribution
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   Identifier: "ra-0a1b2c3d4e5f6"
 * };
 * const command = new GetRevenueAttributionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/revenue-attribution/ra-0a1b2c3d4e5f6",
 *   Catalog: "AWS",
 *   Id: "ra-0a1b2c3d4e5f6",
 *   TenancyModel: "MULTI_TENANT"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetRevenueAttributionCommand extends command<GetRevenueAttributionCommandInput, GetRevenueAttributionCommandOutput>(
  _ep0,
  _mw0,
  "GetRevenueAttribution",
  GetRevenueAttribution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRevenueAttributionInput;
      output: GetRevenueAttributionOutput;
    };
    sdk: {
      input: GetRevenueAttributionCommandInput;
      output: GetRevenueAttributionCommandOutput;
    };
  };
}
