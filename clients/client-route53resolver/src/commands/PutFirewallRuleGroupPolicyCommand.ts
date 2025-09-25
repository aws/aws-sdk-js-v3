// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutFirewallRuleGroupPolicyRequest, PutFirewallRuleGroupPolicyResponse } from "../models/models_0";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { PutFirewallRuleGroupPolicy } from "../schemas/schemas_12_Policy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutFirewallRuleGroupPolicyCommand}.
 */
export interface PutFirewallRuleGroupPolicyCommandInput extends PutFirewallRuleGroupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutFirewallRuleGroupPolicyCommand}.
 */
export interface PutFirewallRuleGroupPolicyCommandOutput extends PutFirewallRuleGroupPolicyResponse, __MetadataBearer {}

/**
 * <p>Attaches an Identity and Access Management (Amazon Web Services IAM) policy for sharing the rule
 * 			group. You can use the policy to share the rule group using Resource Access Manager
 * 			(RAM). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, PutFirewallRuleGroupPolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, PutFirewallRuleGroupPolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // PutFirewallRuleGroupPolicyRequest
 *   Arn: "STRING_VALUE", // required
 *   FirewallRuleGroupPolicy: "STRING_VALUE", // required
 * };
 * const command = new PutFirewallRuleGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutFirewallRuleGroupPolicyResponse
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param PutFirewallRuleGroupPolicyCommandInput - {@link PutFirewallRuleGroupPolicyCommandInput}
 * @returns {@link PutFirewallRuleGroupPolicyCommandOutput}
 * @see {@link PutFirewallRuleGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutFirewallRuleGroupPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You have provided an invalid command. If you ran the <code>UpdateFirewallDomains</code> request. supported values are <code>ADD</code>,
 * 			<code>REMOVE</code>, or <code>REPLACE</code> a domain.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 *
 * @public
 */
export class PutFirewallRuleGroupPolicyCommand extends $Command
  .classBuilder<
    PutFirewallRuleGroupPolicyCommandInput,
    PutFirewallRuleGroupPolicyCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "PutFirewallRuleGroupPolicy", {})
  .n("Route53ResolverClient", "PutFirewallRuleGroupPolicyCommand")
  .sc(PutFirewallRuleGroupPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutFirewallRuleGroupPolicyRequest;
      output: PutFirewallRuleGroupPolicyResponse;
    };
    sdk: {
      input: PutFirewallRuleGroupPolicyCommandInput;
      output: PutFirewallRuleGroupPolicyCommandOutput;
    };
  };
}
