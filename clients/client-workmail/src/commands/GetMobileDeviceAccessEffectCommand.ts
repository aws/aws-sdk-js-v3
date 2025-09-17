// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMobileDeviceAccessEffectRequest, GetMobileDeviceAccessEffectResponse } from "../models/models_0";
import { de_GetMobileDeviceAccessEffectCommand, se_GetMobileDeviceAccessEffectCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMobileDeviceAccessEffectCommand}.
 */
export interface GetMobileDeviceAccessEffectCommandInput extends GetMobileDeviceAccessEffectRequest {}
/**
 * @public
 *
 * The output of {@link GetMobileDeviceAccessEffectCommand}.
 */
export interface GetMobileDeviceAccessEffectCommandOutput
  extends GetMobileDeviceAccessEffectResponse,
    __MetadataBearer {}

/**
 * <p>Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access
 *          rules for the WorkMail organization for a particular user's attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetMobileDeviceAccessEffectCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetMobileDeviceAccessEffectCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // GetMobileDeviceAccessEffectRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   DeviceType: "STRING_VALUE",
 *   DeviceModel: "STRING_VALUE",
 *   DeviceOperatingSystem: "STRING_VALUE",
 *   DeviceUserAgent: "STRING_VALUE",
 * };
 * const command = new GetMobileDeviceAccessEffectCommand(input);
 * const response = await client.send(command);
 * // { // GetMobileDeviceAccessEffectResponse
 * //   Effect: "ALLOW" || "DENY",
 * //   MatchedRules: [ // MobileDeviceAccessMatchedRuleList
 * //     { // MobileDeviceAccessMatchedRule
 * //       MobileDeviceAccessRuleId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMobileDeviceAccessEffectCommandInput - {@link GetMobileDeviceAccessEffectCommandInput}
 * @returns {@link GetMobileDeviceAccessEffectCommandOutput}
 * @see {@link GetMobileDeviceAccessEffectCommandInput} for command's `input` shape.
 * @see {@link GetMobileDeviceAccessEffectCommandOutput} for command's `response` shape.
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
export class GetMobileDeviceAccessEffectCommand extends $Command
  .classBuilder<
    GetMobileDeviceAccessEffectCommandInput,
    GetMobileDeviceAccessEffectCommandOutput,
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
  .s("WorkMailService", "GetMobileDeviceAccessEffect", {})
  .n("WorkMailClient", "GetMobileDeviceAccessEffectCommand")
  .f(void 0, void 0)
  .ser(se_GetMobileDeviceAccessEffectCommand)
  .de(de_GetMobileDeviceAccessEffectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMobileDeviceAccessEffectRequest;
      output: GetMobileDeviceAccessEffectResponse;
    };
    sdk: {
      input: GetMobileDeviceAccessEffectCommandInput;
      output: GetMobileDeviceAccessEffectCommandOutput;
    };
  };
}
