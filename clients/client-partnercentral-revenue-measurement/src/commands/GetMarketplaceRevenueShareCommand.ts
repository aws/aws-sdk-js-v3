// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMarketplaceRevenueShareInput, GetMarketplaceRevenueShareOutput } from "../models/models_0";
import { GetMarketplaceRevenueShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMarketplaceRevenueShareCommand}.
 */
export interface GetMarketplaceRevenueShareCommandInput extends GetMarketplaceRevenueShareInput {}
/**
 * @public
 *
 * The output of {@link GetMarketplaceRevenueShareCommand}.
 */
export interface GetMarketplaceRevenueShareCommandOutput extends GetMarketplaceRevenueShareOutput, __MetadataBearer {}

/**
 * <p>Retrieves the details of a specific marketplace revenue share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralRevenueMeasurementClient, GetMarketplaceRevenueShareCommand } from "@aws-sdk/client-partnercentral-revenue-measurement"; // ES Modules import
 * // const { PartnerCentralRevenueMeasurementClient, GetMarketplaceRevenueShareCommand } = require("@aws-sdk/client-partnercentral-revenue-measurement"); // CommonJS import
 * // import type { PartnerCentralRevenueMeasurementClientConfig } from "@aws-sdk/client-partnercentral-revenue-measurement";
 * const config = {}; // type is PartnerCentralRevenueMeasurementClientConfig
 * const client = new PartnerCentralRevenueMeasurementClient(config);
 * const input = { // GetMarketplaceRevenueShareInput
 *   Catalog: "AWS" || "Sandbox", // required
 *   Identifier: "STRING_VALUE", // required
 *   Revision: "STRING_VALUE",
 * };
 * const command = new GetMarketplaceRevenueShareCommand(input);
 * const response = await client.send(command);
 * // { // GetMarketplaceRevenueShareOutput
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Catalog: "AWS" || "Sandbox", // required
 * //   Products: [ // MarketplaceRevenueShareProductDetailList // required
 * //     { // MarketplaceRevenueShareProductDetail
 * //       ProductId: "STRING_VALUE", // required
 * //       ProductCode: "STRING_VALUE",
 * //       ProductName: "STRING_VALUE",
 * //       Accounts: [ // RevenueShareProductAccountDetailList
 * //         { // RevenueShareProductAccountDetail
 * //           AccountType: "DEPLOYMENT" || "ORGANIZATION", // required
 * //           Count: Number("int"), // required
 * //           AccountIds: [ // RevenueShareProductAccountIdList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   CreatedDate: new Date("TIMESTAMP"), // required
 * //   LastModifiedDate: new Date("TIMESTAMP"), // required
 * //   Revision: "STRING_VALUE", // required
 * //   LatestRevision: "STRING_VALUE", // required
 * //   EffectiveFrom: "STRING_VALUE",
 * //   EffectiveUntil: "STRING_VALUE",
 * //   TotalActiveMarketplaceRevenueShareAllocationCount: Number("int"), // required
 * //   TotalMarketplaceRevenueShareAllocationCount: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param GetMarketplaceRevenueShareCommandInput - {@link GetMarketplaceRevenueShareCommandInput}
 * @returns {@link GetMarketplaceRevenueShareCommandOutput}
 * @see {@link GetMarketplaceRevenueShareCommandInput} for command's `input` shape.
 * @see {@link GetMarketplaceRevenueShareCommandOutput} for command's `response` shape.
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
 * @example Example for GetMarketplaceRevenueShare
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   Identifier: "mrs-abc123def4567"
 * };
 * const command = new GetMarketplaceRevenueShareCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/marketplace-revenue-share/mrs-abc123def4567",
 *   Catalog: "AWS",
 *   CreatedDate: 1784419200,
 *   EffectiveFrom: "2026-07-01",
 *   EffectiveUntil: "2026-12-31",
 *   Id: "mrs-abc123def4567",
 *   LastModifiedDate: 1784505600,
 *   LatestRevision: "2",
 *   Products: [
 *     {
 *       Accounts: [
 *         {
 *           AccountIds: [
 *             "111122223333"
 *           ],
 *           AccountType: "DEPLOYMENT",
 *           Count: 1
 *         }
 *       ],
 *       ProductId: "prod-abc123def4567"
 *     }
 *   ],
 *   Revision: "2",
 *   TotalActiveMarketplaceRevenueShareAllocationCount: 1,
 *   TotalMarketplaceRevenueShareAllocationCount: 1
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetMarketplaceRevenueShareCommand extends command<GetMarketplaceRevenueShareCommandInput, GetMarketplaceRevenueShareCommandOutput>(
  _ep0,
  _mw0,
  "GetMarketplaceRevenueShare",
  GetMarketplaceRevenueShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMarketplaceRevenueShareInput;
      output: GetMarketplaceRevenueShareOutput;
    };
    sdk: {
      input: GetMarketplaceRevenueShareCommandInput;
      output: GetMarketplaceRevenueShareCommandOutput;
    };
  };
}
