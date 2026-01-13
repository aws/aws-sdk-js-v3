// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateFirewallDomainListInput, CreateFirewallDomainListOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { CreateFirewallDomainList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFirewallDomainListCommand}.
 */
export interface CreateFirewallDomainListCommandInput extends CreateFirewallDomainListInput {}
/**
 * @public
 *
 * The output of {@link CreateFirewallDomainListCommand}.
 */
export interface CreateFirewallDomainListCommandOutput extends CreateFirewallDomainListOutput, __MetadataBearer {}

/**
 * <p>Creates a firewall domain list. Domain lists are reusable sets of domain specifications that you use in DNS firewall rules to allow, block, or alert on DNS queries to specific domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, CreateFirewallDomainListCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, CreateFirewallDomainListCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // CreateFirewallDomainListInput
 *   clientToken: "STRING_VALUE",
 *   globalResolverId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateFirewallDomainListCommand(input);
 * const response = await client.send(command);
 * // { // CreateFirewallDomainListOutput
 * //   arn: "STRING_VALUE", // required
 * //   globalResolverId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   description: "STRING_VALUE",
 * //   domainCount: Number("int"), // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateFirewallDomainListCommandInput - {@link CreateFirewallDomainListCommandInput}
 * @returns {@link CreateFirewallDomainListCommandOutput}
 * @see {@link CreateFirewallDomainListCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallDomainListCommandOutput} for command's `response` shape.
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
export class CreateFirewallDomainListCommand extends $Command
  .classBuilder<
    CreateFirewallDomainListCommandInput,
    CreateFirewallDomainListCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "CreateFirewallDomainList", {})
  .n("Route53GlobalResolverClient", "CreateFirewallDomainListCommand")
  .sc(CreateFirewallDomainList$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFirewallDomainListInput;
      output: CreateFirewallDomainListOutput;
    };
    sdk: {
      input: CreateFirewallDomainListCommandInput;
      output: CreateFirewallDomainListCommandOutput;
    };
  };
}
