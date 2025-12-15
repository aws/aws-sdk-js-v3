// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteFirewallRuleGroupRequest, DeleteFirewallRuleGroupResponse } from "../models/models_0";
import type {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import { DeleteFirewallRuleGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFirewallRuleGroupCommand}.
 */
export interface DeleteFirewallRuleGroupCommandInput extends DeleteFirewallRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFirewallRuleGroupCommand}.
 */
export interface DeleteFirewallRuleGroupCommandOutput extends DeleteFirewallRuleGroupResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified firewall rule group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteFirewallRuleGroupCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteFirewallRuleGroupCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // DeleteFirewallRuleGroupRequest
 *   FirewallRuleGroupId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFirewallRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFirewallRuleGroupResponse
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
 * @param DeleteFirewallRuleGroupCommandInput - {@link DeleteFirewallRuleGroupCommandInput}
 * @returns {@link DeleteFirewallRuleGroupCommandOutput}
 * @see {@link DeleteFirewallRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *          <p>This error can also be thrown when a customer has reached the 5120 character limit for a
 * 			resource policy for CloudWatch Logs.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested state transition isn't valid. For example, you can't delete a firewall
 * 			domain list if it is in the process of being deleted, or you can't import domains into a
 * 			domain list that is in the process of being deleted.</p>
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
export class DeleteFirewallRuleGroupCommand extends $Command
  .classBuilder<
    DeleteFirewallRuleGroupCommandInput,
    DeleteFirewallRuleGroupCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "DeleteFirewallRuleGroup", {})
  .n("Route53ResolverClient", "DeleteFirewallRuleGroupCommand")
  .sc(DeleteFirewallRuleGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFirewallRuleGroupRequest;
      output: DeleteFirewallRuleGroupResponse;
    };
    sdk: {
      input: DeleteFirewallRuleGroupCommandInput;
      output: DeleteFirewallRuleGroupCommandOutput;
    };
  };
}
