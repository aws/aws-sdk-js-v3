// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchCreateFirewallRuleRequest, BatchCreateFirewallRuleResponse } from "../models/models_0";
import { BatchCreateFirewallRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchCreateFirewallRuleCommand}.
 */
export interface BatchCreateFirewallRuleCommandInput extends BatchCreateFirewallRuleRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateFirewallRuleCommand}.
 */
export interface BatchCreateFirewallRuleCommandOutput extends BatchCreateFirewallRuleResponse, __MetadataBearer {}

/**
 * Creates multiple DNS Firewall rules in the specified rule group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, BatchCreateFirewallRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, BatchCreateFirewallRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // BatchCreateFirewallRuleRequest
 *   CreateFirewallRuleEntries: [ // CreateFirewallRuleEntries // required
 *     { // CreateFirewallRuleEntry
 *       CreatorRequestId: "STRING_VALUE", // required
 *       FirewallRuleGroupId: "STRING_VALUE", // required
 *       FirewallDomainListId: "STRING_VALUE",
 *       Priority: Number("int"), // required
 *       Action: "ALLOW" || "BLOCK" || "ALERT", // required
 *       BlockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 *       BlockOverrideDomain: "STRING_VALUE",
 *       BlockOverrideDnsType: "CNAME",
 *       BlockOverrideTtl: Number("int"),
 *       Name: "STRING_VALUE", // required
 *       FirewallDomainRedirectionAction: "INSPECT_REDIRECTION_DOMAIN" || "TRUST_REDIRECTION_DOMAIN",
 *       Qtype: "STRING_VALUE",
 *       DnsThreatProtection: "DGA" || "DNS_TUNNELING" || "DICTIONARY_DGA",
 *       ConfidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 *       FirewallRuleType: { // FirewallRuleType
 *         PartnerThreatProtection: { // PartnerThreatProtectionConfig
 *           Partner: "STRING_VALUE", // required
 *         },
 *         FirewallAdvancedContentCategory: { // FirewallAdvancedContentCategoryConfig
 *           Category: "STRING_VALUE", // required
 *         },
 *         FirewallAdvancedThreatCategory: { // FirewallAdvancedThreatCategoryConfig
 *           Category: "STRING_VALUE", // required
 *         },
 *         DnsThreatProtection: { // DnsThreatProtectionRuleTypeConfig
 *           Value: "STRING_VALUE", // required
 *           ConfidenceThreshold: "LOW" || "MEDIUM" || "HIGH", // required
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchCreateFirewallRuleCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateFirewallRuleResponse
 * //   CreatedFirewallRules: [ // FirewallRules
 * //     { // FirewallRule
 * //       FirewallRuleGroupId: "STRING_VALUE",
 * //       FirewallDomainListId: "STRING_VALUE",
 * //       FirewallThreatProtectionId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Priority: Number("int"),
 * //       Action: "ALLOW" || "BLOCK" || "ALERT",
 * //       BlockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 * //       BlockOverrideDomain: "STRING_VALUE",
 * //       BlockOverrideDnsType: "CNAME",
 * //       BlockOverrideTtl: Number("int"),
 * //       CreatorRequestId: "STRING_VALUE",
 * //       CreationTime: "STRING_VALUE",
 * //       ModificationTime: "STRING_VALUE",
 * //       FirewallDomainRedirectionAction: "INSPECT_REDIRECTION_DOMAIN" || "TRUST_REDIRECTION_DOMAIN",
 * //       Qtype: "STRING_VALUE",
 * //       DnsThreatProtection: "DGA" || "DNS_TUNNELING" || "DICTIONARY_DGA",
 * //       ConfidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 * //       FirewallRuleType: { // FirewallRuleType
 * //         PartnerThreatProtection: { // PartnerThreatProtectionConfig
 * //           Partner: "STRING_VALUE", // required
 * //         },
 * //         FirewallAdvancedContentCategory: { // FirewallAdvancedContentCategoryConfig
 * //           Category: "STRING_VALUE", // required
 * //         },
 * //         FirewallAdvancedThreatCategory: { // FirewallAdvancedThreatCategoryConfig
 * //           Category: "STRING_VALUE", // required
 * //         },
 * //         DnsThreatProtection: { // DnsThreatProtectionRuleTypeConfig
 * //           Value: "STRING_VALUE", // required
 * //           ConfidenceThreshold: "LOW" || "MEDIUM" || "HIGH", // required
 * //         },
 * //       },
 * //       Status: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   CreateErrors: [ // BatchCreateFirewallRuleErrors
 * //     { // BatchCreateFirewallRuleError
 * //       FirewallRule: { // CreateFirewallRuleEntry
 * //         CreatorRequestId: "STRING_VALUE", // required
 * //         FirewallRuleGroupId: "STRING_VALUE", // required
 * //         FirewallDomainListId: "STRING_VALUE",
 * //         Priority: Number("int"), // required
 * //         Action: "ALLOW" || "BLOCK" || "ALERT", // required
 * //         BlockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 * //         BlockOverrideDomain: "STRING_VALUE",
 * //         BlockOverrideDnsType: "CNAME",
 * //         BlockOverrideTtl: Number("int"),
 * //         Name: "STRING_VALUE", // required
 * //         FirewallDomainRedirectionAction: "INSPECT_REDIRECTION_DOMAIN" || "TRUST_REDIRECTION_DOMAIN",
 * //         Qtype: "STRING_VALUE",
 * //         DnsThreatProtection: "DGA" || "DNS_TUNNELING" || "DICTIONARY_DGA",
 * //         ConfidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 * //         FirewallRuleType: {
 * //           PartnerThreatProtection: {
 * //             Partner: "STRING_VALUE", // required
 * //           },
 * //           FirewallAdvancedContentCategory: {
 * //             Category: "STRING_VALUE", // required
 * //           },
 * //           FirewallAdvancedThreatCategory: {
 * //             Category: "STRING_VALUE", // required
 * //           },
 * //           DnsThreatProtection: {
 * //             Value: "STRING_VALUE", // required
 * //             ConfidenceThreshold: "LOW" || "MEDIUM" || "HIGH", // required
 * //           },
 * //         },
 * //       },
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateFirewallRuleCommandInput - {@link BatchCreateFirewallRuleCommandInput}
 * @returns {@link BatchCreateFirewallRuleCommandOutput}
 * @see {@link BatchCreateFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link BatchCreateFirewallRuleCommandOutput} for command's `response` shape.
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
export class BatchCreateFirewallRuleCommand extends command<BatchCreateFirewallRuleCommandInput, BatchCreateFirewallRuleCommandOutput>(
  _ep0,
  _mw0,
  "BatchCreateFirewallRule",
  BatchCreateFirewallRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateFirewallRuleRequest;
      output: BatchCreateFirewallRuleResponse;
    };
    sdk: {
      input: BatchCreateFirewallRuleCommandInput;
      output: BatchCreateFirewallRuleCommandOutput;
    };
  };
}
