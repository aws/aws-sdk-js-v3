// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateMobileDeviceAccessRuleRequest, CreateMobileDeviceAccessRuleResponse } from "../models/models_0";
import {
  de_CreateMobileDeviceAccessRuleCommand,
  se_CreateMobileDeviceAccessRuleCommand,
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
 * The input for {@link CreateMobileDeviceAccessRuleCommand}.
 */
export interface CreateMobileDeviceAccessRuleCommandInput extends CreateMobileDeviceAccessRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateMobileDeviceAccessRuleCommand}.
 */
export interface CreateMobileDeviceAccessRuleCommandOutput
  extends CreateMobileDeviceAccessRuleResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new mobile device access rule for the specified WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateMobileDeviceAccessRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateMobileDeviceAccessRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds the limit of the resource.</p>
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
 * @public
 */
export class CreateMobileDeviceAccessRuleCommand extends $Command
  .classBuilder<
    CreateMobileDeviceAccessRuleCommandInput,
    CreateMobileDeviceAccessRuleCommandOutput,
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
  .s("WorkMailService", "CreateMobileDeviceAccessRule", {})
  .n("WorkMailClient", "CreateMobileDeviceAccessRuleCommand")
  .f(void 0, void 0)
  .ser(se_CreateMobileDeviceAccessRuleCommand)
  .de(de_CreateMobileDeviceAccessRuleCommand)
  .build() {
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
