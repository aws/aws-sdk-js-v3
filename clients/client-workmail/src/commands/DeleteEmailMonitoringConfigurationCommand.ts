// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteEmailMonitoringConfigurationRequest,
  DeleteEmailMonitoringConfigurationResponse,
} from "../models/models_0";
import { DeleteEmailMonitoringConfiguration } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEmailMonitoringConfigurationCommand}.
 */
export interface DeleteEmailMonitoringConfigurationCommandInput extends DeleteEmailMonitoringConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEmailMonitoringConfigurationCommand}.
 */
export interface DeleteEmailMonitoringConfigurationCommandOutput
  extends DeleteEmailMonitoringConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the email monitoring configuration for a specified organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteEmailMonitoringConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteEmailMonitoringConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DeleteEmailMonitoringConfigurationRequest
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEmailMonitoringConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEmailMonitoringConfigurationCommandInput - {@link DeleteEmailMonitoringConfigurationCommandInput}
 * @returns {@link DeleteEmailMonitoringConfigurationCommandOutput}
 * @see {@link DeleteEmailMonitoringConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteEmailMonitoringConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class DeleteEmailMonitoringConfigurationCommand extends $Command
  .classBuilder<
    DeleteEmailMonitoringConfigurationCommandInput,
    DeleteEmailMonitoringConfigurationCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "DeleteEmailMonitoringConfiguration", {})
  .n("WorkMailClient", "DeleteEmailMonitoringConfigurationCommand")
  .sc(DeleteEmailMonitoringConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEmailMonitoringConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteEmailMonitoringConfigurationCommandInput;
      output: DeleteEmailMonitoringConfigurationCommandOutput;
    };
  };
}
