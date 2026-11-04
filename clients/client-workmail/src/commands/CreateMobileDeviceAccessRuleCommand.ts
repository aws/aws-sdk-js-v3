// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMobileDeviceAccessRuleRequest, CreateMobileDeviceAccessRuleResponse } from "../models/models_0";
import { CreateMobileDeviceAccessRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMobileDeviceAccessRuleCommand}.
 */
export interface CreateMobileDeviceAccessRuleCommandInput extends CreateMobileDeviceAccessRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateMobileDeviceAccessRuleCommand}.
 */
export interface CreateMobileDeviceAccessRuleCommandOutput extends CreateMobileDeviceAccessRuleResponse, __MetadataBearer {}

/**
 * Creates a new mobile device access rule for the specified WorkMail organization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateMobileDeviceAccessRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateMobileDeviceAccessRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // CreateMobileDeviceAccessRuleRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
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
 * const command = new CreateMobileDeviceAccessRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateMobileDeviceAccessRuleResponse
 * //   MobileDeviceAccessRuleId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMobileDeviceAccessRuleCommandInput - {@link CreateMobileDeviceAccessRuleCommandInput}
 * @returns {@link CreateMobileDeviceAccessRuleCommandOutput}
 * @see {@link CreateMobileDeviceAccessRuleCommandInput} for command's `input` shape.
 * @see {@link CreateMobileDeviceAccessRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeds the limit of the resource.
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
export class CreateMobileDeviceAccessRuleCommand extends command<CreateMobileDeviceAccessRuleCommandInput, CreateMobileDeviceAccessRuleCommandOutput>(
  _ep0,
  _mw0,
  "CreateMobileDeviceAccessRule",
  CreateMobileDeviceAccessRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMobileDeviceAccessRuleRequest;
      output: CreateMobileDeviceAccessRuleResponse;
    };
    sdk: {
      input: CreateMobileDeviceAccessRuleCommandInput;
      output: CreateMobileDeviceAccessRuleCommandOutput;
    };
  };
}
