// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  PutEmailMonitoringConfigurationRequest,
  PutEmailMonitoringConfigurationResponse,
} from "../models/models_0";
import { PutEmailMonitoringConfiguration$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutEmailMonitoringConfigurationCommand}.
 */
export interface PutEmailMonitoringConfigurationCommandInput extends PutEmailMonitoringConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutEmailMonitoringConfigurationCommand}.
 */
export interface PutEmailMonitoringConfigurationCommandOutput
  extends PutEmailMonitoringConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates or updates the email monitoring configuration for a specified organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutEmailMonitoringConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutEmailMonitoringConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // PutEmailMonitoringConfigurationRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE",
 *   LogGroupArn: "STRING_VALUE", // required
 * };
 * const command = new PutEmailMonitoringConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutEmailMonitoringConfigurationCommandInput - {@link PutEmailMonitoringConfigurationCommandInput}
 * @returns {@link PutEmailMonitoringConfigurationCommandOutput}
 * @see {@link PutEmailMonitoringConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutEmailMonitoringConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class PutEmailMonitoringConfigurationCommand extends $Command
  .classBuilder<
    PutEmailMonitoringConfigurationCommandInput,
    PutEmailMonitoringConfigurationCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "PutEmailMonitoringConfiguration", {})
  .n("WorkMailClient", "PutEmailMonitoringConfigurationCommand")
  .sc(PutEmailMonitoringConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEmailMonitoringConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutEmailMonitoringConfigurationCommandInput;
      output: PutEmailMonitoringConfigurationCommandOutput;
    };
  };
}
