// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMarketplaceRevenueShareInput, CreateMarketplaceRevenueShareOutput } from "../models/models_0";
import { CreateMarketplaceRevenueShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMarketplaceRevenueShareCommand}.
 */
export interface CreateMarketplaceRevenueShareCommandInput extends CreateMarketplaceRevenueShareInput {}
/**
 * @public
 *
 * The output of {@link CreateMarketplaceRevenueShareCommand}.
 */
export interface CreateMarketplaceRevenueShareCommandOutput extends CreateMarketplaceRevenueShareOutput, __MetadataBearer {}

/**
 * <p>Creates a new marketplace revenue share resource in the specified catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralRevenueMeasurementClient, CreateMarketplaceRevenueShareCommand } from "@aws-sdk/client-partnercentral-revenue-measurement"; // ES Modules import
 * // const { PartnerCentralRevenueMeasurementClient, CreateMarketplaceRevenueShareCommand } = require("@aws-sdk/client-partnercentral-revenue-measurement"); // CommonJS import
 * // import type { PartnerCentralRevenueMeasurementClientConfig } from "@aws-sdk/client-partnercentral-revenue-measurement";
 * const config = {}; // type is PartnerCentralRevenueMeasurementClientConfig
 * const client = new PartnerCentralRevenueMeasurementClient(config);
 * const input = { // CreateMarketplaceRevenueShareInput
 *   Catalog: "AWS" || "Sandbox", // required
 *   ClientToken: "STRING_VALUE",
 *   ProductId: "STRING_VALUE", // required
 *   Tags: [ // MarketplaceRevenueShareTagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMarketplaceRevenueShareCommand(input);
 * const response = await client.send(command);
 * // { // CreateMarketplaceRevenueShareOutput
 * //   ProductId: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Catalog: "AWS" || "Sandbox",
 * //   ProductCode: "STRING_VALUE",
 * //   ProductName: "STRING_VALUE",
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   LastModifiedDate: new Date("TIMESTAMP"),
 * //   Revision: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateMarketplaceRevenueShareCommandInput - {@link CreateMarketplaceRevenueShareCommandInput}
 * @returns {@link CreateMarketplaceRevenueShareCommandOutput}
 * @see {@link CreateMarketplaceRevenueShareCommandInput} for command's `input` shape.
 * @see {@link CreateMarketplaceRevenueShareCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota limit.</p>
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
 * @example Example for CreateMarketplaceRevenueShare
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   ProductId: "prod-abc123def4567"
 * };
 * const command = new CreateMarketplaceRevenueShareCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/marketplace-revenue-share/prod-abc123def4567",
 *   ProductId: "prod-abc123def4567"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateMarketplaceRevenueShareCommand extends command<CreateMarketplaceRevenueShareCommandInput, CreateMarketplaceRevenueShareCommandOutput>(
  _ep0,
  _mw0,
  "CreateMarketplaceRevenueShare",
  CreateMarketplaceRevenueShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMarketplaceRevenueShareInput;
      output: CreateMarketplaceRevenueShareOutput;
    };
    sdk: {
      input: CreateMarketplaceRevenueShareCommandInput;
      output: CreateMarketplaceRevenueShareCommandOutput;
    };
  };
}
