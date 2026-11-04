// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFirewallRuleTypesRequest, ListFirewallRuleTypesResponse } from "../models/models_0";
import { ListFirewallRuleTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFirewallRuleTypesCommand}.
 */
export interface ListFirewallRuleTypesCommandInput extends ListFirewallRuleTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListFirewallRuleTypesCommand}.
 */
export interface ListFirewallRuleTypesCommandOutput extends ListFirewallRuleTypesResponse, __MetadataBearer {}

/**
 * Retrieves the rule-type variants that can be used in the `FirewallRuleType` field of CreateFirewallRule and UpdateFirewallRule. Each returned FirewallRuleTypeDefinition identifies one variant + value combination — for example, `FirewallAdvancedContentCategory` + `VIOLENCE_AND_HATE_SPEECH`, or `PartnerThreatProtection` + a partner-managed feed.
 *
 * The supported `RuleType` filter values are `FirewallAdvancedContentCategory`, `FirewallAdvancedThreatCategory`, `DnsThreatProtection`, and `PartnerThreatProtection`. When a returned definition's variant requires an external subscription (currently only `PartnerThreatProtection`), the response also includes a SubscriptionInfo identifying the Amazon Web Services Marketplace product that backs it; absence of `SubscriptionInfo` means the variant is fully managed by Amazon Web Services and requires no separate subscription.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallRuleTypesCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallRuleTypesCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // ListFirewallRuleTypesRequest
 *   RuleType: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFirewallRuleTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListFirewallRuleTypesResponse
 * //   FirewallRuleTypes: [ // FirewallRuleTypeDefinitions
 * //     { // FirewallRuleTypeDefinition
 * //       RuleType: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       SubscriptionInfo: { // SubscriptionInfo
 * //         VendorName: "STRING_VALUE",
 * //         ProductId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFirewallRuleTypesCommandInput - {@link ListFirewallRuleTypesCommandInput}
 * @returns {@link ListFirewallRuleTypesCommandOutput}
 * @see {@link ListFirewallRuleTypesCommandInput} for command's `input` shape.
 * @see {@link ListFirewallRuleTypesCommandOutput} for command's `response` shape.
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
export class ListFirewallRuleTypesCommand extends command<ListFirewallRuleTypesCommandInput, ListFirewallRuleTypesCommandOutput>(
  _ep0,
  _mw0,
  "ListFirewallRuleTypes",
  ListFirewallRuleTypes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFirewallRuleTypesRequest;
      output: ListFirewallRuleTypesResponse;
    };
    sdk: {
      input: ListFirewallRuleTypesCommandInput;
      output: ListFirewallRuleTypesCommandOutput;
    };
  };
}
