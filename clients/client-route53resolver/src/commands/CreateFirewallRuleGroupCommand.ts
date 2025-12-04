// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateFirewallRuleGroupRequest, CreateFirewallRuleGroupResponse } from "../models/models_0";
import type {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import { CreateFirewallRuleGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFirewallRuleGroupCommand}.
 */
export interface CreateFirewallRuleGroupCommandInput extends CreateFirewallRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateFirewallRuleGroupCommand}.
 */
export interface CreateFirewallRuleGroupCommandOutput extends CreateFirewallRuleGroupResponse, __MetadataBearer {}

/**
 * <p>Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group
 *            by calling <a>CreateFirewallRule</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateFirewallRuleGroupCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateFirewallRuleGroupCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // CreateFirewallRuleGroupRequest
 *   CreatorRequestId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateFirewallRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateFirewallRuleGroupResponse
 * //   FirewallRuleGroup: { // FirewallRuleGroup
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     RuleCount: Number("int"),
 * //     Status: "COMPLETE" || "DELETING" || "UPDATING",
 * //     StatusMessage: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     CreatorRequestId: "STRING_VALUE",
 * //     ShareStatus: "NOT_SHARED" || "SHARED_WITH_ME" || "SHARED_BY_ME",
 * //     CreationTime: "STRING_VALUE",
 * //     ModificationTime: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateFirewallRuleGroupCommandInput - {@link CreateFirewallRuleGroupCommandInput}
 * @returns {@link CreateFirewallRuleGroupCommandOutput}
 * @see {@link CreateFirewallRuleGroupCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallRuleGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request caused one or more limits to be exceeded.</p>
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
export class CreateFirewallRuleGroupCommand extends $Command
  .classBuilder<
    CreateFirewallRuleGroupCommandInput,
    CreateFirewallRuleGroupCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "CreateFirewallRuleGroup", {})
  .n("Route53ResolverClient", "CreateFirewallRuleGroupCommand")
  .sc(CreateFirewallRuleGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFirewallRuleGroupRequest;
      output: CreateFirewallRuleGroupResponse;
    };
    sdk: {
      input: CreateFirewallRuleGroupCommandInput;
      output: CreateFirewallRuleGroupCommandOutput;
    };
  };
}
