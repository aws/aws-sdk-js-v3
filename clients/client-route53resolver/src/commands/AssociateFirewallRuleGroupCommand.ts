// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateFirewallRuleGroupRequest, AssociateFirewallRuleGroupResponse } from "../models/models_0";
import { AssociateFirewallRuleGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateFirewallRuleGroupCommand}.
 */
export interface AssociateFirewallRuleGroupCommandInput extends AssociateFirewallRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link AssociateFirewallRuleGroupCommand}.
 */
export interface AssociateFirewallRuleGroupCommandOutput extends AssociateFirewallRuleGroupResponse, __MetadataBearer {}

/**
 * Associates a FirewallRuleGroup with a VPC, to provide DNS filtering for the VPC.
 *
 * If the rule group contains any rule configured with the `PartnerThreatProtection` rule type, the calling account must hold an active Amazon Web Services Marketplace subscription to the named partner. If the subscription is missing, the association request is rejected.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, AssociateFirewallRuleGroupCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, AssociateFirewallRuleGroupCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // AssociateFirewallRuleGroupRequest
 *   CreatorRequestId: "STRING_VALUE", // required
 *   FirewallRuleGroupId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 *   Priority: Number("int"), // required
 *   Name: "STRING_VALUE", // required
 *   MutationProtection: "ENABLED" || "DISABLED",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new AssociateFirewallRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // AssociateFirewallRuleGroupResponse
 * //   FirewallRuleGroupAssociation: { // FirewallRuleGroupAssociation
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     FirewallRuleGroupId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Priority: Number("int"),
 * //     MutationProtection: "ENABLED" || "DISABLED",
 * //     ManagedOwnerName: "STRING_VALUE",
 * //     Status: "COMPLETE" || "DELETING" || "UPDATING",
 * //     StatusMessage: "STRING_VALUE",
 * //     CreatorRequestId: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     ModificationTime: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateFirewallRuleGroupCommandInput - {@link AssociateFirewallRuleGroupCommandInput}
 * @returns {@link AssociateFirewallRuleGroupCommandOutput}
 * @see {@link AssociateFirewallRuleGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateFirewallRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The current account doesn't have the IAM permissions required to perform the specified Resolver operation.
 *
 * This error can also be thrown when a customer has reached the 5120 character limit for a resource policy for CloudWatch Logs.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested state transition isn't valid. For example, you can't delete a firewall domain list if it is in the process of being deleted, or you can't import domains into a domain list that is in the process of being deleted.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *
 * We encountered an unknown error. Try again in a few minutes.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request caused one or more limits to be exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled. Try again in a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * You have provided an invalid command. If you ran the `UpdateFirewallDomains` request. supported values are `ADD`, `REMOVE`, or `REPLACE` a domain.
 *
 * @throws {@link Route53ResolverServiceException}
 *
 * Base exception class for all service exceptions from Route53Resolver service.
 *
 * @public
 */
export class AssociateFirewallRuleGroupCommand extends command<AssociateFirewallRuleGroupCommandInput, AssociateFirewallRuleGroupCommandOutput>(
  _ep0,
  _mw0,
  "AssociateFirewallRuleGroup",
  AssociateFirewallRuleGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateFirewallRuleGroupRequest;
      output: AssociateFirewallRuleGroupResponse;
    };
    sdk: {
      input: AssociateFirewallRuleGroupCommandInput;
      output: AssociateFirewallRuleGroupCommandOutput;
    };
  };
}
