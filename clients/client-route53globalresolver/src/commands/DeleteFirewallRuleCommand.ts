// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteFirewallRuleInput, DeleteFirewallRuleOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { DeleteFirewallRule$ } from "../schemas/schemas_0";

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
export interface DeleteFirewallRuleCommandInput extends DeleteFirewallRuleInput {}
/**
 * @public
 *
 * The output of {@link DeleteFirewallRuleCommand}.
 */
export interface DeleteFirewallRuleCommandOutput extends DeleteFirewallRuleOutput, __MetadataBearer {}

/**
 * <p>Deletes a DNS firewall rule. This operation cannot be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, DeleteFirewallRuleCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, DeleteFirewallRuleCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // DeleteFirewallRuleInput
 *   firewallRuleId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFirewallRuleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFirewallRuleOutput
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
 * @param DeleteFirewallRuleCommandInput - {@link DeleteFirewallRuleCommandInput}
 * @returns {@link DeleteFirewallRuleCommandOutput}
 * @see {@link DeleteFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallRuleCommandOutput} for command's `response` shape.
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
export class DeleteFirewallRuleCommand extends $Command
  .classBuilder<
    DeleteFirewallRuleCommandInput,
    DeleteFirewallRuleCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "DeleteFirewallRule", {})
  .n("Route53GlobalResolverClient", "DeleteFirewallRuleCommand")
  .sc(DeleteFirewallRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFirewallRuleInput;
      output: DeleteFirewallRuleOutput;
    };
    sdk: {
      input: DeleteFirewallRuleCommandInput;
      output: DeleteFirewallRuleCommandOutput;
    };
  };
}
