// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateFirewallRuleRequest, CreateFirewallRuleResponse } from "../models/models_0";
import type {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import { CreateFirewallRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFirewallRuleCommand}.
 */
export interface CreateFirewallRuleCommandInput extends CreateFirewallRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateFirewallRuleCommand}.
 */
export interface CreateFirewallRuleCommandOutput extends CreateFirewallRuleResponse, __MetadataBearer {}

/**
 * <p>Creates a single DNS Firewall rule in the specified rule group, using the specified domain list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateFirewallRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateFirewallRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // CreateFirewallRuleRequest
 *   CreatorRequestId: "STRING_VALUE", // required
 *   FirewallRuleGroupId: "STRING_VALUE", // required
 *   FirewallDomainListId: "STRING_VALUE",
 *   Priority: Number("int"), // required
 *   Action: "ALLOW" || "BLOCK" || "ALERT", // required
 *   BlockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 *   BlockOverrideDomain: "STRING_VALUE",
 *   BlockOverrideDnsType: "CNAME",
 *   BlockOverrideTtl: Number("int"),
 *   Name: "STRING_VALUE", // required
 *   FirewallDomainRedirectionAction: "INSPECT_REDIRECTION_DOMAIN" || "TRUST_REDIRECTION_DOMAIN",
 *   Qtype: "STRING_VALUE",
 *   DnsThreatProtection: "DGA" || "DNS_TUNNELING" || "DICTIONARY_DGA",
 *   ConfidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 * };
 * const command = new CreateFirewallRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateFirewallRuleResponse
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
 * @param CreateFirewallRuleCommandInput - {@link CreateFirewallRuleCommandInput}
 * @returns {@link CreateFirewallRuleCommandOutput}
 * @see {@link CreateFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallRuleCommandOutput} for command's `response` shape.
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
export class CreateFirewallRuleCommand extends $Command
  .classBuilder<
    CreateFirewallRuleCommandInput,
    CreateFirewallRuleCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "CreateFirewallRule", {})
  .n("Route53ResolverClient", "CreateFirewallRuleCommand")
  .sc(CreateFirewallRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFirewallRuleRequest;
      output: CreateFirewallRuleResponse;
    };
    sdk: {
      input: CreateFirewallRuleCommandInput;
      output: CreateFirewallRuleCommandOutput;
    };
  };
}
