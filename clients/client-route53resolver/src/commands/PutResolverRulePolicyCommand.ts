// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutResolverRulePolicyRequest, PutResolverRulePolicyResponse } from "../models/models_0";
import type {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import { PutResolverRulePolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutResolverRulePolicyCommand}.
 */
export interface PutResolverRulePolicyCommandInput extends PutResolverRulePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutResolverRulePolicyCommand}.
 */
export interface PutResolverRulePolicyCommandOutput extends PutResolverRulePolicyResponse, __MetadataBearer {}

/**
 * <p>Specifies an Amazon Web Services rule that you want to share with another account, the account that you want to share the rule with,
 * 			and the operations that you want the account to be able to perform on the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, PutResolverRulePolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, PutResolverRulePolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // PutResolverRulePolicyRequest
 *   Arn: "STRING_VALUE", // required
 *   ResolverRulePolicy: "STRING_VALUE", // required
 * };
 * const command = new PutResolverRulePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutResolverRulePolicyResponse
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param PutResolverRulePolicyCommandInput - {@link PutResolverRulePolicyCommandInput}
 * @returns {@link PutResolverRulePolicyCommandOutput}
 * @see {@link PutResolverRulePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResolverRulePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidPolicyDocument} (client fault)
 *  <p>The specified Resolver rule policy is invalid.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 *
 * @public
 */
export class PutResolverRulePolicyCommand extends $Command
  .classBuilder<
    PutResolverRulePolicyCommandInput,
    PutResolverRulePolicyCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "PutResolverRulePolicy", {})
  .n("Route53ResolverClient", "PutResolverRulePolicyCommand")
  .sc(PutResolverRulePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutResolverRulePolicyRequest;
      output: PutResolverRulePolicyResponse;
    };
    sdk: {
      input: PutResolverRulePolicyCommandInput;
      output: PutResolverRulePolicyCommandOutput;
    };
  };
}
