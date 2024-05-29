// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListFirewallRuleGroupsRequest, ListFirewallRuleGroupsResponse } from "../models/models_0";
import { de_ListFirewallRuleGroupsCommand, se_ListFirewallRuleGroupsCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFirewallRuleGroupsCommand}.
 */
export interface ListFirewallRuleGroupsCommandInput extends ListFirewallRuleGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListFirewallRuleGroupsCommand}.
 */
export interface ListFirewallRuleGroupsCommandOutput extends ListFirewallRuleGroupsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the minimal high-level information for the rule groups that you have defined.  </p>
 *          <p>A single call might return only a partial list of the rule groups. For information, see <code>MaxResults</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallRuleGroupsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallRuleGroupsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // ListFirewallRuleGroupsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFirewallRuleGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListFirewallRuleGroupsResponse
 * //   NextToken: "STRING_VALUE",
 * //   FirewallRuleGroups: [ // FirewallRuleGroupMetadataList
 * //     { // FirewallRuleGroupMetadata
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       CreatorRequestId: "STRING_VALUE",
 * //       ShareStatus: "NOT_SHARED" || "SHARED_WITH_ME" || "SHARED_BY_ME",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFirewallRuleGroupsCommandInput - {@link ListFirewallRuleGroupsCommandInput}
 * @returns {@link ListFirewallRuleGroupsCommandOutput}
 * @see {@link ListFirewallRuleGroupsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallRuleGroupsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListFirewallRuleGroupsCommand extends $Command
  .classBuilder<
    ListFirewallRuleGroupsCommandInput,
    ListFirewallRuleGroupsCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Resolver", "ListFirewallRuleGroups", {})
  .n("Route53ResolverClient", "ListFirewallRuleGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListFirewallRuleGroupsCommand)
  .de(de_ListFirewallRuleGroupsCommand)
  .build() {}
