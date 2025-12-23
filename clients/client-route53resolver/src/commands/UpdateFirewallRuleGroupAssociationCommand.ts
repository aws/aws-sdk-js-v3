// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateFirewallRuleGroupAssociationRequest,
  UpdateFirewallRuleGroupAssociationResponse,
} from "../models/models_0";
import type {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import { UpdateFirewallRuleGroupAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFirewallRuleGroupAssociationCommand}.
 */
export interface UpdateFirewallRuleGroupAssociationCommandInput extends UpdateFirewallRuleGroupAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFirewallRuleGroupAssociationCommand}.
 */
export interface UpdateFirewallRuleGroupAssociationCommandOutput extends UpdateFirewallRuleGroupAssociationResponse, __MetadataBearer {}

/**
 * <p>Changes the association of a <a>FirewallRuleGroup</a> with a VPC. The association enables DNS filtering for the VPC. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateFirewallRuleGroupAssociationCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateFirewallRuleGroupAssociationCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // UpdateFirewallRuleGroupAssociationRequest
 *   FirewallRuleGroupAssociationId: "STRING_VALUE", // required
 *   Priority: Number("int"),
 *   MutationProtection: "ENABLED" || "DISABLED",
 *   Name: "STRING_VALUE",
 * };
 * const command = new UpdateFirewallRuleGroupAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFirewallRuleGroupAssociationResponse
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
 * @param UpdateFirewallRuleGroupAssociationCommandInput - {@link UpdateFirewallRuleGroupAssociationCommandInput}
 * @returns {@link UpdateFirewallRuleGroupAssociationCommandOutput}
 * @see {@link UpdateFirewallRuleGroupAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallRuleGroupAssociationCommandOutput} for command's `response` shape.
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
export class UpdateFirewallRuleGroupAssociationCommand extends $Command
  .classBuilder<
    UpdateFirewallRuleGroupAssociationCommandInput,
    UpdateFirewallRuleGroupAssociationCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "UpdateFirewallRuleGroupAssociation", {})
  .n("Route53ResolverClient", "UpdateFirewallRuleGroupAssociationCommand")
  .sc(UpdateFirewallRuleGroupAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFirewallRuleGroupAssociationRequest;
      output: UpdateFirewallRuleGroupAssociationResponse;
    };
    sdk: {
      input: UpdateFirewallRuleGroupAssociationCommandInput;
      output: UpdateFirewallRuleGroupAssociationCommandOutput;
    };
  };
}
