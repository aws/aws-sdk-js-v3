// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFirewallRuleRequest, DeleteFirewallRuleResponse } from "../models/models_0";
import { DeleteFirewallRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified firewall rule. Identify the rule using either `FirewallDomainListId` (for domain-list and DNS Firewall Advanced rules) or `FirewallThreatProtectionId` (for partner-managed and DNS Firewall Advanced rules) — together with `FirewallRuleGroupId`.
 *
 * `DeleteFirewallRule` is the only operation that succeeds against a rule whose `Status` is `CREATION_FAILED`.
 *
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
 * //     FirewallRuleType: { // FirewallRuleType
 * //       PartnerThreatProtection: { // PartnerThreatProtectionConfig
 * //         Partner: "STRING_VALUE", // required
 * //       },
 * //       FirewallAdvancedContentCategory: { // FirewallAdvancedContentCategoryConfig
 * //         Category: "STRING_VALUE", // required
 * //       },
 * //       FirewallAdvancedThreatCategory: { // FirewallAdvancedThreatCategoryConfig
 * //         Category: "STRING_VALUE", // required
 * //       },
 * //       DnsThreatProtection: { // DnsThreatProtectionRuleTypeConfig
 * //         Value: "STRING_VALUE", // required
 * //         ConfidenceThreshold: "LOW" || "MEDIUM" || "HIGH", // required
 * //       },
 * //     },
 * //     Status: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
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
 *
 * The current account doesn't have the IAM permissions required to perform the specified Resolver operation.
 *
 * This error can also be thrown when a customer has reached the 5120 character limit for a resource policy for CloudWatch Logs.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *
 * We encountered an unknown error. Try again in a few minutes.
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
export class DeleteFirewallRuleCommand extends command<DeleteFirewallRuleCommandInput, DeleteFirewallRuleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFirewallRule",
  DeleteFirewallRule$
) {
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
