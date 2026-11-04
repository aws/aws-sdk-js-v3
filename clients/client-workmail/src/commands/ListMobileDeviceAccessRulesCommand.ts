// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMobileDeviceAccessRulesRequest, ListMobileDeviceAccessRulesResponse } from "../models/models_0";
import { ListMobileDeviceAccessRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the mobile device access rules for the specified WorkMail organization.
 *
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
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class ListMobileDeviceAccessRulesCommand extends command<ListMobileDeviceAccessRulesCommandInput, ListMobileDeviceAccessRulesCommandOutput>(
  _ep0,
  _mw0,
  "ListMobileDeviceAccessRules",
  ListMobileDeviceAccessRules$
) {
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
