// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRevenueAttributionInput, CreateRevenueAttributionOutput } from "../models/models_0";
import { CreateRevenueAttribution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRevenueAttributionCommand}.
 */
export interface CreateRevenueAttributionCommandInput extends CreateRevenueAttributionInput {}
/**
 * @public
 *
 * The output of {@link CreateRevenueAttributionCommand}.
 */
export interface CreateRevenueAttributionCommandOutput extends CreateRevenueAttributionOutput, __MetadataBearer {}

/**
 * <p>Creates a new revenue attribution record in the specified catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralRevenueMeasurementClient, CreateRevenueAttributionCommand } from "@aws-sdk/client-partnercentral-revenue-measurement"; // ES Modules import
 * // const { PartnerCentralRevenueMeasurementClient, CreateRevenueAttributionCommand } = require("@aws-sdk/client-partnercentral-revenue-measurement"); // CommonJS import
 * // import type { PartnerCentralRevenueMeasurementClientConfig } from "@aws-sdk/client-partnercentral-revenue-measurement";
 * const config = {}; // type is PartnerCentralRevenueMeasurementClientConfig
 * const client = new PartnerCentralRevenueMeasurementClient(config);
 * const input = { // CreateRevenueAttributionInput
 *   Catalog: "AWS" || "Sandbox", // required
 *   ClientToken: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   TenancyModel: "MULTI_TENANT" || "SINGLE_TENANT", // required
 *   ProductIdentifier: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateRevenueAttributionCommand(input);
 * const response = await client.send(command);
 * // { // CreateRevenueAttributionOutput
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   TenancyModel: "MULTI_TENANT" || "SINGLE_TENANT", // required
 * //   MarketplaceProduct: { // MarketplaceProductSummary
 * //     ProductId: "STRING_VALUE",
 * //     ProductCode: "STRING_VALUE",
 * //     ProductName: "STRING_VALUE",
 * //   },
 * //   Revision: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateRevenueAttributionCommandInput - {@link CreateRevenueAttributionCommandInput}
 * @returns {@link CreateRevenueAttributionCommandOutput}
 * @see {@link CreateRevenueAttributionCommandInput} for command's `input` shape.
 * @see {@link CreateRevenueAttributionCommandOutput} for command's `response` shape.
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
 * @example Example for CreateRevenueAttribution
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   Name: "My Revenue Attribution",
 *   TenancyModel: "MULTI_TENANT"
 * };
 * const command = new CreateRevenueAttributionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/revenue-attribution/ra-0a1b2c3d4e5f6",
 *   Id: "ra-0a1b2c3d4e5f6",
 *   TenancyModel: "MULTI_TENANT"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateRevenueAttributionCommand extends command<CreateRevenueAttributionCommandInput, CreateRevenueAttributionCommandOutput>(
  _ep0,
  _mw0,
  "CreateRevenueAttribution",
  CreateRevenueAttribution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRevenueAttributionInput;
      output: CreateRevenueAttributionOutput;
    };
    sdk: {
      input: CreateRevenueAttributionCommandInput;
      output: CreateRevenueAttributionCommandOutput;
    };
  };
}
