// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListFirewallRuleGroupAssociationsRequest,
  ListFirewallRuleGroupAssociationsResponse,
} from "../models/models_0";
import {
  de_ListFirewallRuleGroupAssociationsCommand,
  se_ListFirewallRuleGroupAssociationsCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFirewallRuleGroupAssociationsCommand}.
 */
export interface ListFirewallRuleGroupAssociationsCommandInput extends ListFirewallRuleGroupAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListFirewallRuleGroupAssociationsCommand}.
 */
export interface ListFirewallRuleGroupAssociationsCommandOutput
  extends ListFirewallRuleGroupAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p>
 *          <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallRuleGroupAssociationsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallRuleGroupAssociationsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // ListFirewallRuleGroupAssociationsRequest
 *   FirewallRuleGroupId: "STRING_VALUE",
 *   VpcId: "STRING_VALUE",
 *   Priority: Number("int"),
 *   Status: "COMPLETE" || "DELETING" || "UPDATING",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFirewallRuleGroupAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListFirewallRuleGroupAssociationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   FirewallRuleGroupAssociations: [ // FirewallRuleGroupAssociations
 * //     { // FirewallRuleGroupAssociation
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       FirewallRuleGroupId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Priority: Number("int"),
 * //       MutationProtection: "ENABLED" || "DISABLED",
 * //       ManagedOwnerName: "STRING_VALUE",
 * //       Status: "COMPLETE" || "DELETING" || "UPDATING",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreatorRequestId: "STRING_VALUE",
 * //       CreationTime: "STRING_VALUE",
 * //       ModificationTime: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFirewallRuleGroupAssociationsCommandInput - {@link ListFirewallRuleGroupAssociationsCommandInput}
 * @returns {@link ListFirewallRuleGroupAssociationsCommandOutput}
 * @see {@link ListFirewallRuleGroupAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallRuleGroupAssociationsCommandOutput} for command's `response` shape.
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
export class ListFirewallRuleGroupAssociationsCommand extends $Command
  .classBuilder<
    ListFirewallRuleGroupAssociationsCommandInput,
    ListFirewallRuleGroupAssociationsCommandOutput,
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
  .s("Route53Resolver", "ListFirewallRuleGroupAssociations", {})
  .n("Route53ResolverClient", "ListFirewallRuleGroupAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListFirewallRuleGroupAssociationsCommand)
  .de(de_ListFirewallRuleGroupAssociationsCommand)
  .build() {}
