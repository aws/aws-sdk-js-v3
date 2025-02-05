// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResolverRulePolicyRequest, GetResolverRulePolicyResponse } from "../models/models_0";
import { de_GetResolverRulePolicyCommand, se_GetResolverRulePolicyCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResolverRulePolicyCommand}.
 */
export interface GetResolverRulePolicyCommandInput extends GetResolverRulePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetResolverRulePolicyCommand}.
 */
export interface GetResolverRulePolicyCommandOutput extends GetResolverRulePolicyResponse, __MetadataBearer {}

/**
 * <p>Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share
 * 			with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverRulePolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverRulePolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Route53ResolverClient(config);
 * const input = { // GetResolverRulePolicyRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetResolverRulePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetResolverRulePolicyResponse
 * //   ResolverRulePolicy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResolverRulePolicyCommandInput - {@link GetResolverRulePolicyCommandInput}
 * @returns {@link GetResolverRulePolicyCommandOutput}
 * @see {@link GetResolverRulePolicyCommandInput} for command's `input` shape.
 * @see {@link GetResolverRulePolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *          <p>This error can also be thrown when a customer has reached the 5120 character limit for a
 * 			resource policy for CloudWatch Logs.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 * @public
 */
export class GetResolverRulePolicyCommand extends $Command
  .classBuilder<
    GetResolverRulePolicyCommandInput,
    GetResolverRulePolicyCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Resolver", "GetResolverRulePolicy", {})
  .n("Route53ResolverClient", "GetResolverRulePolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetResolverRulePolicyCommand)
  .de(de_GetResolverRulePolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResolverRulePolicyRequest;
      output: GetResolverRulePolicyResponse;
    };
    sdk: {
      input: GetResolverRulePolicyCommandInput;
      output: GetResolverRulePolicyCommandOutput;
    };
  };
}
