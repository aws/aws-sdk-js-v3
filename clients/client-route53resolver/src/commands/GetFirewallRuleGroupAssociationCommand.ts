// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetFirewallRuleGroupAssociationRequest, GetFirewallRuleGroupAssociationResponse } from "../models/models_0";
import {
  de_GetFirewallRuleGroupAssociationCommand,
  se_GetFirewallRuleGroupAssociationCommand,
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
 * The input for {@link GetFirewallRuleGroupAssociationCommand}.
 */
export interface GetFirewallRuleGroupAssociationCommandInput extends GetFirewallRuleGroupAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetFirewallRuleGroupAssociationCommand}.
 */
export interface GetFirewallRuleGroupAssociationCommandOutput
  extends GetFirewallRuleGroupAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetFirewallRuleGroupAssociationCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetFirewallRuleGroupAssociationCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // GetFirewallRuleGroupAssociationRequest
 *   FirewallRuleGroupAssociationId: "STRING_VALUE", // required
 * };
 * const command = new GetFirewallRuleGroupAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetFirewallRuleGroupAssociationResponse
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
 * @param GetFirewallRuleGroupAssociationCommandInput - {@link GetFirewallRuleGroupAssociationCommandInput}
 * @returns {@link GetFirewallRuleGroupAssociationCommandOutput}
 * @see {@link GetFirewallRuleGroupAssociationCommandInput} for command's `input` shape.
 * @see {@link GetFirewallRuleGroupAssociationCommandOutput} for command's `response` shape.
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
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 *
 * @public
 */
export class GetFirewallRuleGroupAssociationCommand extends $Command
  .classBuilder<
    GetFirewallRuleGroupAssociationCommandInput,
    GetFirewallRuleGroupAssociationCommandOutput,
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
  .s("Route53Resolver", "GetFirewallRuleGroupAssociation", {})
  .n("Route53ResolverClient", "GetFirewallRuleGroupAssociationCommand")
  .f(void 0, void 0)
  .ser(se_GetFirewallRuleGroupAssociationCommand)
  .de(de_GetFirewallRuleGroupAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFirewallRuleGroupAssociationRequest;
      output: GetFirewallRuleGroupAssociationResponse;
    };
    sdk: {
      input: GetFirewallRuleGroupAssociationCommandInput;
      output: GetFirewallRuleGroupAssociationCommandOutput;
    };
  };
}
