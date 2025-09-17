// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateFirewallRuleGroupRequest, DisassociateFirewallRuleGroupResponse } from "../models/models_0";
import {
  de_DisassociateFirewallRuleGroupCommand,
  se_DisassociateFirewallRuleGroupCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateFirewallRuleGroupCommand}.
 */
export interface DisassociateFirewallRuleGroupCommandInput extends DisassociateFirewallRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateFirewallRuleGroupCommand}.
 */
export interface DisassociateFirewallRuleGroupCommandOutput
  extends DisassociateFirewallRuleGroupResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a <a>FirewallRuleGroup</a> from a VPC, to remove DNS filtering from the VPC. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DisassociateFirewallRuleGroupCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DisassociateFirewallRuleGroupCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // DisassociateFirewallRuleGroupRequest
 *   FirewallRuleGroupAssociationId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateFirewallRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateFirewallRuleGroupResponse
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
 * @param DisassociateFirewallRuleGroupCommandInput - {@link DisassociateFirewallRuleGroupCommandInput}
 * @returns {@link DisassociateFirewallRuleGroupCommandOutput}
 * @see {@link DisassociateFirewallRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateFirewallRuleGroupCommandOutput} for command's `response` shape.
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
export class DisassociateFirewallRuleGroupCommand extends $Command
  .classBuilder<
    DisassociateFirewallRuleGroupCommandInput,
    DisassociateFirewallRuleGroupCommandOutput,
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
  .s("Route53Resolver", "DisassociateFirewallRuleGroup", {})
  .n("Route53ResolverClient", "DisassociateFirewallRuleGroupCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateFirewallRuleGroupCommand)
  .de(de_DisassociateFirewallRuleGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateFirewallRuleGroupRequest;
      output: DisassociateFirewallRuleGroupResponse;
    };
    sdk: {
      input: DisassociateFirewallRuleGroupCommandInput;
      output: DisassociateFirewallRuleGroupCommandOutput;
    };
  };
}
