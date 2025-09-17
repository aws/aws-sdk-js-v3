// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateResolverRuleRequest, AssociateResolverRuleResponse } from "../models/models_0";
import { de_AssociateResolverRuleCommand, se_AssociateResolverRuleCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateResolverRuleCommand}.
 */
export interface AssociateResolverRuleCommandInput extends AssociateResolverRuleRequest {}
/**
 * @public
 *
 * The output of {@link AssociateResolverRuleCommand}.
 */
export interface AssociateResolverRuleCommandOutput extends AssociateResolverRuleResponse, __MetadataBearer {}

/**
 * <p>Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries
 * 			for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the
 * 			IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, AssociateResolverRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, AssociateResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // AssociateResolverRuleRequest
 *   ResolverRuleId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   VPCId: "STRING_VALUE", // required
 * };
 * const command = new AssociateResolverRuleCommand(input);
 * const response = await client.send(command);
 * // { // AssociateResolverRuleResponse
 * //   ResolverRuleAssociation: { // ResolverRuleAssociation
 * //     Id: "STRING_VALUE",
 * //     ResolverRuleId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     VPCId: "STRING_VALUE",
 * //     Status: "CREATING" || "COMPLETE" || "DELETING" || "FAILED" || "OVERRIDDEN",
 * //     StatusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateResolverRuleCommandInput - {@link AssociateResolverRuleCommandInput}
 * @returns {@link AssociateResolverRuleCommandOutput}
 * @see {@link AssociateResolverRuleCommandInput} for command's `input` shape.
 * @see {@link AssociateResolverRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request caused one or more limits to be exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource that you tried to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The specified resource isn't available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 *
 * @public
 */
export class AssociateResolverRuleCommand extends $Command
  .classBuilder<
    AssociateResolverRuleCommandInput,
    AssociateResolverRuleCommandOutput,
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
  .s("Route53Resolver", "AssociateResolverRule", {})
  .n("Route53ResolverClient", "AssociateResolverRuleCommand")
  .f(void 0, void 0)
  .ser(se_AssociateResolverRuleCommand)
  .de(de_AssociateResolverRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateResolverRuleRequest;
      output: AssociateResolverRuleResponse;
    };
    sdk: {
      input: AssociateResolverRuleCommandInput;
      output: AssociateResolverRuleCommandOutput;
    };
  };
}
