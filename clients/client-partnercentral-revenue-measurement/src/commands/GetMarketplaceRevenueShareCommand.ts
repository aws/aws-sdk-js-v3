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
 * Retrieves the details of a specific marketplace revenue share.
 *
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
 *   ProductId: "STRING_VALUE", // required
 *   Revision: Number("int"),
 * };
 * const command = new GetMarketplaceRevenueShareCommand(input);
 * const response = await client.send(command);
 * // { // GetMarketplaceRevenueShareOutput
 * //   ProductId: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Catalog: "AWS" || "Sandbox", // required
 * //   ProductCode: "STRING_VALUE",
 * //   ProductName: "STRING_VALUE",
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   LastModifiedDate: new Date("TIMESTAMP"),
 * //   Revision: Number("int"),
 * //   LatestRevision: Number("int"),
 * //   TotalActiveMarketplaceRevenueShareAllocationCount: Number("int"),
 * //   TotalMarketplaceRevenueShareAllocationCount: Number("int"),
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
 *
 * The request was denied due to insufficient permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the resource.
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
 * @example Example for GetMarketplaceRevenueShare
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   ProductId: "prod-abc123def4567"
 * };
 * const command = new GetMarketplaceRevenueShareCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/marketplace-revenue-share/prod-abc123def4567",
 *   Catalog: "AWS",
 *   ProductId: "prod-abc123def4567"
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
