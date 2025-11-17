// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFirewallRuleRequest, DeleteFirewallRuleResponse } from "../models/models_0";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DeleteFirewallRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFirewallRuleCommand}.
 */
export interface DeleteFirewallRuleCommandInput extends DeleteFirewallRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFirewallRuleCommand}.
 */
export interface DeleteFirewallRuleCommandOutput extends DeleteFirewallRuleResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified firewall rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteFirewallRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteFirewallRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // DeleteFirewallRuleRequest
 *   FirewallRuleGroupId: "STRING_VALUE", // required
 *   FirewallDomainListId: "STRING_VALUE",
 *   FirewallThreatProtectionId: "STRING_VALUE",
 *   Qtype: "STRING_VALUE",
 * };
 * const command = new DeleteFirewallRuleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFirewallRuleResponse
 * //   FirewallRule: { // FirewallRule
 * //     FirewallRuleGroupId: "STRING_VALUE",
 * //     FirewallDomainListId: "STRING_VALUE",
 * //     FirewallThreatProtectionId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Priority: Number("int"),
 * //     Action: "ALLOW" || "BLOCK" || "ALERT",
 * //     BlockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 * //     BlockOverrideDomain: "STRING_VALUE",
 * //     BlockOverrideDnsType: "CNAME",
 * //     BlockOverrideTtl: Number("int"),
 * //     CreatorRequestId: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     ModificationTime: "STRING_VALUE",
 * //     FirewallDomainRedirectionAction: "INSPECT_REDIRECTION_DOMAIN" || "TRUST_REDIRECTION_DOMAIN",
 * //     Qtype: "STRING_VALUE",
 * //     DnsThreatProtection: "DGA" || "DNS_TUNNELING" || "DICTIONARY_DGA",
 * //     ConfidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteFirewallRuleCommandInput - {@link DeleteFirewallRuleCommandInput}
 * @returns {@link DeleteFirewallRuleCommandOutput}
 * @see {@link DeleteFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallRuleCommandOutput} for command's `response` shape.
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
export class DeleteFirewallRuleCommand extends $Command
  .classBuilder<
    DeleteFirewallRuleCommandInput,
    DeleteFirewallRuleCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "DeleteFirewallRule", {})
  .n("Route53ResolverClient", "DeleteFirewallRuleCommand")
  .sc(DeleteFirewallRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFirewallRuleRequest;
      output: DeleteFirewallRuleResponse;
    };
    sdk: {
      input: DeleteFirewallRuleCommandInput;
      output: DeleteFirewallRuleCommandOutput;
    };
  };
}
