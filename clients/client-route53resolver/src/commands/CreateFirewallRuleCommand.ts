// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFirewallRuleRequest, CreateFirewallRuleResponse } from "../models/models_0";
import { CreateFirewallRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a single DNS Firewall rule in the specified rule group. The rule can use any one of the following match sources, and the chosen source must be supplied through the matching request field — they are mutually exclusive:
 *
 * - `FirewallDomainListId` — match a customer-managed or Amazon Web Services-managed domain list.
 * - `DnsThreatProtection` — match a built-in DNS Firewall Advanced threat detector (`DGA`, `DNS_TUNNELING`, or `DICTIONARY_DGA`).
 * - `FirewallRuleType` — match one of the rule-type variants returned by ListFirewallRuleTypes: `FirewallAdvancedContentCategory`, `FirewallAdvancedThreatCategory`, `DnsThreatProtection`, or `PartnerThreatProtection`. The `PartnerThreatProtection` variant requires an active Amazon Web Services Marketplace subscription to the named partner product.
 *
 * For rules that require asynchronous provisioning (today, the `PartnerThreatProtection` rule type), the rule's `Status` begins at `CREATING` and transitions to `COMPLETE` once the rule is provisioned and the marketplace entitlement is verified. If provisioning fails, `Status` becomes `CREATION_FAILED` and `StatusMessage` contains a human-readable reason; the rule is then immutable and must be removed with DeleteFirewallRule.
 *
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
 *   FirewallRuleType: { // FirewallRuleType
 *     PartnerThreatProtection: { // PartnerThreatProtectionConfig
 *       Partner: "STRING_VALUE", // required
 *     },
 *     FirewallAdvancedContentCategory: { // FirewallAdvancedContentCategoryConfig
 *       Category: "STRING_VALUE", // required
 *     },
 *     FirewallAdvancedThreatCategory: { // FirewallAdvancedThreatCategoryConfig
 *       Category: "STRING_VALUE", // required
 *     },
 *     DnsThreatProtection: { // DnsThreatProtectionRuleTypeConfig
 *       Value: "STRING_VALUE", // required
 *       ConfidenceThreshold: "LOW" || "MEDIUM" || "HIGH", // required
 *     },
 *   },
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
 * @param CreateFirewallRuleCommandInput - {@link CreateFirewallRuleCommandInput}
 * @returns {@link CreateFirewallRuleCommandOutput}
 * @see {@link CreateFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallRuleCommandOutput} for command's `response` shape.
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
export class CreateFirewallRuleCommand extends command<CreateFirewallRuleCommandInput, CreateFirewallRuleCommandOutput>(
  _ep0,
  _mw0,
  "CreateFirewallRule",
  CreateFirewallRule$
) {
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
