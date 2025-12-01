// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateFirewallDomainsInput, UpdateFirewallDomainsOutput } from "../models/models_0";
import {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { UpdateFirewallDomains } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFirewallDomainsCommand}.
 */
export interface UpdateFirewallDomainsCommandInput extends UpdateFirewallDomainsInput {}
/**
 * @public
 *
 * The output of {@link UpdateFirewallDomainsCommand}.
 */
export interface UpdateFirewallDomainsCommandOutput extends UpdateFirewallDomainsOutput, __MetadataBearer {}

/**
 * <p>Updates a DNS Firewall domain list from an array of specified domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, UpdateFirewallDomainsCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, UpdateFirewallDomainsCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // UpdateFirewallDomainsInput
 *   domains: [ // Domains // required
 *     "STRING_VALUE",
 *   ],
 *   firewallDomainListId: "STRING_VALUE", // required
 *   operation: "STRING_VALUE", // required
 * };
 * const command = new UpdateFirewallDomainsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFirewallDomainsOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param UpdateFirewallDomainsCommandInput - {@link UpdateFirewallDomainsCommandInput}
 * @returns {@link UpdateFirewallDomainsCommandOutput}
 * @see {@link UpdateFirewallDomainsCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallDomainsCommandOutput} for command's `response` shape.
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
export class UpdateFirewallDomainsCommand extends $Command
  .classBuilder<
    UpdateFirewallDomainsCommandInput,
    UpdateFirewallDomainsCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "UpdateFirewallDomains", {})
  .n("Route53GlobalResolverClient", "UpdateFirewallDomainsCommand")
  .sc(UpdateFirewallDomains)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFirewallDomainsInput;
      output: UpdateFirewallDomainsOutput;
    };
    sdk: {
      input: UpdateFirewallDomainsCommandInput;
      output: UpdateFirewallDomainsCommandOutput;
    };
  };
}
