// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetFirewallDomainListInput, GetFirewallDomainListOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { GetFirewallDomainList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFirewallDomainListCommand}.
 */
export interface GetFirewallDomainListCommandInput extends GetFirewallDomainListInput {}
/**
 * @public
 *
 * The output of {@link GetFirewallDomainListCommand}.
 */
export interface GetFirewallDomainListCommandOutput extends GetFirewallDomainListOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a firewall domain list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, GetFirewallDomainListCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, GetFirewallDomainListCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // GetFirewallDomainListInput
 *   firewallDomainListId: "STRING_VALUE", // required
 * };
 * const command = new GetFirewallDomainListCommand(input);
 * const response = await client.send(command);
 * // { // GetFirewallDomainListOutput
 * //   arn: "STRING_VALUE", // required
 * //   globalResolverId: "STRING_VALUE", // required
 * //   clientToken: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   description: "STRING_VALUE",
 * //   domainCount: Number("int"), // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING", // required
 * //   statusMessage: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetFirewallDomainListCommandInput - {@link GetFirewallDomainListCommandInput}
 * @returns {@link GetFirewallDomainListCommandOutput}
 * @see {@link GetFirewallDomainListCommandInput} for command's `input` shape.
 * @see {@link GetFirewallDomainListCommandOutput} for command's `response` shape.
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this operation. Check your IAM permissions and try again.</p>
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
export class GetFirewallDomainListCommand extends $Command
  .classBuilder<
    GetFirewallDomainListCommandInput,
    GetFirewallDomainListCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "GetFirewallDomainList", {})
  .n("Route53GlobalResolverClient", "GetFirewallDomainListCommand")
  .sc(GetFirewallDomainList$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFirewallDomainListInput;
      output: GetFirewallDomainListOutput;
    };
    sdk: {
      input: GetFirewallDomainListCommandInput;
      output: GetFirewallDomainListCommandOutput;
    };
  };
}
