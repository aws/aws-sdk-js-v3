// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateFirewallRuleInput, CreateFirewallRuleOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { CreateFirewallRule } from "../schemas/schemas_0";

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
export interface CreateFirewallRuleCommandInput extends CreateFirewallRuleInput {}
/**
 * @public
 *
 * The output of {@link CreateFirewallRuleCommand}.
 */
export interface CreateFirewallRuleCommandOutput extends CreateFirewallRuleOutput, __MetadataBearer {}

/**
 * <p>Creates a DNS firewall rule. Firewall rules define actions (ALLOW, BLOCK, or ALERT) to take on DNS queries that match specified domain lists, managed domain lists, or advanced threat protections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, CreateFirewallRuleCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, CreateFirewallRuleCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // CreateFirewallRuleInput
 *   action: "ALLOW" || "ALERT" || "BLOCK", // required
 *   blockOverrideDnsType: "CNAME",
 *   blockOverrideDomain: "STRING_VALUE",
 *   blockOverrideTtl: Number("int"),
 *   blockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 *   clientToken: "STRING_VALUE",
 *   confidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 *   description: "STRING_VALUE",
 *   dnsAdvancedProtection: "DGA" || "DNS_TUNNELING",
 *   firewallDomainListId: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   priority: Number("long"),
 *   dnsViewId: "STRING_VALUE", // required
 *   qType: "STRING_VALUE",
 * };
 * const command = new CreateFirewallRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateFirewallRuleOutput
 * //   action: "ALLOW" || "ALERT" || "BLOCK", // required
 * //   blockOverrideDnsType: "CNAME",
 * //   blockOverrideDomain: "STRING_VALUE",
 * //   blockOverrideTtl: Number("int"),
 * //   blockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 * //   confidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   description: "STRING_VALUE",
 * //   dnsAdvancedProtection: "DGA" || "DNS_TUNNELING",
 * //   firewallDomainListId: "STRING_VALUE",
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   priority: Number("long"), // required
 * //   dnsViewId: "STRING_VALUE", // required
 * //   queryType: "STRING_VALUE",
 * //   status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateFirewallRuleCommandInput - {@link CreateFirewallRuleCommandInput}
 * @returns {@link CreateFirewallRuleCommandOutput}
 * @see {@link CreateFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this operation. Check your IAM permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. This can occur when trying to modify a resource that is not in a valid state for the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify the resource ID and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed one or more service quotas. Check your current usage and quotas, then try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Wait a moment and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters are invalid. Check the parameter values and try again.</p>
 *
 * @throws {@link Route53GlobalResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53GlobalResolver service.</p>
 *
 *
 * @public
 */
export class CreateFirewallRuleCommand extends $Command
  .classBuilder<
    CreateFirewallRuleCommandInput,
    CreateFirewallRuleCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "CreateFirewallRule", {})
  .n("Route53GlobalResolverClient", "CreateFirewallRuleCommand")
  .sc(CreateFirewallRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFirewallRuleInput;
      output: CreateFirewallRuleOutput;
    };
    sdk: {
      input: CreateFirewallRuleCommandInput;
      output: CreateFirewallRuleCommandOutput;
    };
  };
}
