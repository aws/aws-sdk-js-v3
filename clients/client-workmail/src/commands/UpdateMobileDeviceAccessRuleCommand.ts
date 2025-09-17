// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateMobileDeviceAccessRuleRequest, UpdateMobileDeviceAccessRuleResponse } from "../models/models_0";
import {
  de_UpdateMobileDeviceAccessRuleCommand,
  se_UpdateMobileDeviceAccessRuleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMobileDeviceAccessRuleCommand}.
 */
export interface UpdateMobileDeviceAccessRuleCommandInput extends UpdateMobileDeviceAccessRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMobileDeviceAccessRuleCommand}.
 */
export interface UpdateMobileDeviceAccessRuleCommandOutput
  extends UpdateMobileDeviceAccessRuleResponse,
    __MetadataBearer {}

/**
 * <p>Updates a mobile device access rule for the specified WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateMobileDeviceAccessRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateMobileDeviceAccessRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // UpdateMobileDeviceAccessRuleRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   MobileDeviceAccessRuleId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Effect: "ALLOW" || "DENY", // required
 *   DeviceTypes: [ // DeviceTypeList
 *     "STRING_VALUE",
 *   ],
 *   NotDeviceTypes: [
 *     "STRING_VALUE",
 *   ],
 *   DeviceModels: [ // DeviceModelList
 *     "STRING_VALUE",
 *   ],
 *   NotDeviceModels: [
 *     "STRING_VALUE",
 *   ],
 *   DeviceOperatingSystems: [ // DeviceOperatingSystemList
 *     "STRING_VALUE",
 *   ],
 *   NotDeviceOperatingSystems: [
 *     "STRING_VALUE",
 *   ],
 *   DeviceUserAgents: [ // DeviceUserAgentList
 *     "STRING_VALUE",
 *   ],
 *   NotDeviceUserAgents: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateMobileDeviceAccessRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateMobileDeviceAccessRuleCommandInput - {@link UpdateMobileDeviceAccessRuleCommandInput}
 * @returns {@link UpdateMobileDeviceAccessRuleCommandOutput}
 * @see {@link UpdateMobileDeviceAccessRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateMobileDeviceAccessRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
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
export class UpdateMobileDeviceAccessRuleCommand extends $Command
  .classBuilder<
    UpdateMobileDeviceAccessRuleCommandInput,
    UpdateMobileDeviceAccessRuleCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "UpdateMobileDeviceAccessRule", {})
  .n("WorkMailClient", "UpdateMobileDeviceAccessRuleCommand")
  .f(void 0, void 0)
  .ser(se_UpdateMobileDeviceAccessRuleCommand)
  .de(de_UpdateMobileDeviceAccessRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMobileDeviceAccessRuleRequest;
      output: {};
    };
    sdk: {
      input: UpdateMobileDeviceAccessRuleCommandInput;
      output: UpdateMobileDeviceAccessRuleCommandOutput;
    };
  };
}
