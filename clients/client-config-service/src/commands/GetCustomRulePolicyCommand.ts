// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCustomRulePolicyRequest, GetCustomRulePolicyResponse } from "../models/models_0";
import { GetCustomRulePolicy } from "../schemas/schemas_6_Config";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCustomRulePolicyCommand}.
 */
export interface GetCustomRulePolicyCommandInput extends GetCustomRulePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomRulePolicyCommand}.
 */
export interface GetCustomRulePolicyCommandOutput extends GetCustomRulePolicyResponse, __MetadataBearer {}

/**
 * <p>Returns the policy definition containing the logic for your Config Custom Policy rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetCustomRulePolicyCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetCustomRulePolicyCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // GetCustomRulePolicyRequest
 *   ConfigRuleName: "STRING_VALUE",
 * };
 * const command = new GetCustomRulePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomRulePolicyResponse
 * //   PolicyText: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCustomRulePolicyCommandInput - {@link GetCustomRulePolicyCommandInput}
 * @returns {@link GetCustomRulePolicyCommandOutput}
 * @see {@link GetCustomRulePolicyCommandInput} for command's `input` shape.
 * @see {@link GetCustomRulePolicyCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoSuchConfigRuleException} (client fault)
 *  <p>The Config rule in the request is not valid. Verify that the rule is an Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class GetCustomRulePolicyCommand extends $Command
  .classBuilder<
    GetCustomRulePolicyCommandInput,
    GetCustomRulePolicyCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "GetCustomRulePolicy", {})
  .n("ConfigServiceClient", "GetCustomRulePolicyCommand")
  .sc(GetCustomRulePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCustomRulePolicyRequest;
      output: GetCustomRulePolicyResponse;
    };
    sdk: {
      input: GetCustomRulePolicyCommandInput;
      output: GetCustomRulePolicyCommandOutput;
    };
  };
}
