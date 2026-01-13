// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListMobileDeviceAccessRulesRequest, ListMobileDeviceAccessRulesResponse } from "../models/models_0";
import { ListMobileDeviceAccessRules$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMobileDeviceAccessRulesCommand}.
 */
export interface ListMobileDeviceAccessRulesCommandInput extends ListMobileDeviceAccessRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListMobileDeviceAccessRulesCommand}.
 */
export interface ListMobileDeviceAccessRulesCommandOutput extends ListMobileDeviceAccessRulesResponse, __MetadataBearer {}

/**
 * <p>Lists the mobile device access rules for the specified WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListMobileDeviceAccessRulesCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListMobileDeviceAccessRulesCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // ListMobileDeviceAccessRulesRequest
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new ListMobileDeviceAccessRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListMobileDeviceAccessRulesResponse
 * //   Rules: [ // MobileDeviceAccessRulesList
 * //     { // MobileDeviceAccessRule
 * //       MobileDeviceAccessRuleId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Effect: "ALLOW" || "DENY",
 * //       DeviceTypes: [ // DeviceTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       NotDeviceTypes: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DeviceModels: [ // DeviceModelList
 * //         "STRING_VALUE",
 * //       ],
 * //       NotDeviceModels: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DeviceOperatingSystems: [ // DeviceOperatingSystemList
 * //         "STRING_VALUE",
 * //       ],
 * //       NotDeviceOperatingSystems: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DeviceUserAgents: [ // DeviceUserAgentList
 * //         "STRING_VALUE",
 * //       ],
 * //       NotDeviceUserAgents: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DateCreated: new Date("TIMESTAMP"),
 * //       DateModified: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMobileDeviceAccessRulesCommandInput - {@link ListMobileDeviceAccessRulesCommandInput}
 * @returns {@link ListMobileDeviceAccessRulesCommandOutput}
 * @see {@link ListMobileDeviceAccessRulesCommandInput} for command's `input` shape.
 * @see {@link ListMobileDeviceAccessRulesCommandOutput} for command's `response` shape.
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
export class ListMobileDeviceAccessRulesCommand extends $Command
  .classBuilder<
    ListMobileDeviceAccessRulesCommandInput,
    ListMobileDeviceAccessRulesCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "ListMobileDeviceAccessRules", {})
  .n("WorkMailClient", "ListMobileDeviceAccessRulesCommand")
  .sc(ListMobileDeviceAccessRules$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMobileDeviceAccessRulesRequest;
      output: ListMobileDeviceAccessRulesResponse;
    };
    sdk: {
      input: ListMobileDeviceAccessRulesCommandInput;
      output: ListMobileDeviceAccessRulesCommandOutput;
    };
  };
}
