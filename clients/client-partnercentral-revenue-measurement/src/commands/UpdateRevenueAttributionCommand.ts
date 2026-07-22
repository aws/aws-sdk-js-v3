// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRevenueAttributionInput, UpdateRevenueAttributionOutput } from "../models/models_0";
import { UpdateRevenueAttribution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRevenueAttributionCommand}.
 */
export interface UpdateRevenueAttributionCommandInput extends UpdateRevenueAttributionInput {}
/**
 * @public
 *
 * The output of {@link UpdateRevenueAttributionCommand}.
 */
export interface UpdateRevenueAttributionCommandOutput extends UpdateRevenueAttributionOutput, __MetadataBearer {}

/**
 * <p>Updates an existing revenue attribution record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralRevenueMeasurementClient, UpdateRevenueAttributionCommand } from "@aws-sdk/client-partnercentral-revenue-measurement"; // ES Modules import
 * // const { PartnerCentralRevenueMeasurementClient, UpdateRevenueAttributionCommand } = require("@aws-sdk/client-partnercentral-revenue-measurement"); // CommonJS import
 * // import type { PartnerCentralRevenueMeasurementClientConfig } from "@aws-sdk/client-partnercentral-revenue-measurement";
 * const config = {}; // type is PartnerCentralRevenueMeasurementClientConfig
 * const client = new PartnerCentralRevenueMeasurementClient(config);
 * const input = { // UpdateRevenueAttributionInput
 *   Catalog: "AWS" || "Sandbox", // required
 *   Identifier: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Revision: "STRING_VALUE", // required
 * };
 * const command = new UpdateRevenueAttributionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRevenueAttributionOutput
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   LastModifiedDate: new Date("TIMESTAMP"), // required
 * //   LatestRevision: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRevenueAttributionCommandInput - {@link UpdateRevenueAttributionCommandInput}
 * @returns {@link UpdateRevenueAttributionCommandOutput}
 * @see {@link UpdateRevenueAttributionCommandInput} for command's `input` shape.
 * @see {@link UpdateRevenueAttributionCommandOutput} for command's `response` shape.
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
 * @example Example for UpdateRevenueAttribution
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   Identifier: "ra-0a1b2c3d4e5f6",
 *   Revision: "1"
 * };
 * const command = new UpdateRevenueAttributionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/revenue-attribution/ra-0a1b2c3d4e5f6",
 *   Id: "ra-0a1b2c3d4e5f6",
 *   LastModifiedDate: 1719792000
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateRevenueAttributionCommand extends command<UpdateRevenueAttributionCommandInput, UpdateRevenueAttributionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRevenueAttribution",
  UpdateRevenueAttribution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRevenueAttributionInput;
      output: UpdateRevenueAttributionOutput;
    };
    sdk: {
      input: UpdateRevenueAttributionCommandInput;
      output: UpdateRevenueAttributionCommandOutput;
    };
  };
}
