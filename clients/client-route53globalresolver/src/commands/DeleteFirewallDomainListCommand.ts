// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteFirewallDomainListInput, DeleteFirewallDomainListOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { DeleteFirewallDomainList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFirewallDomainListCommand}.
 */
export interface DeleteFirewallDomainListCommandInput extends DeleteFirewallDomainListInput {}
/**
 * @public
 *
 * The output of {@link DeleteFirewallDomainListCommand}.
 */
export interface DeleteFirewallDomainListCommandOutput extends DeleteFirewallDomainListOutput, __MetadataBearer {}

/**
 * <p>Deletes a firewall domain list. This operation cannot be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, DeleteFirewallDomainListCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, DeleteFirewallDomainListCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // DeleteFirewallDomainListInput
 *   firewallDomainListId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFirewallDomainListCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFirewallDomainListOutput
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param DeleteFirewallDomainListCommandInput - {@link DeleteFirewallDomainListCommandInput}
 * @returns {@link DeleteFirewallDomainListCommandOutput}
 * @see {@link DeleteFirewallDomainListCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallDomainListCommandOutput} for command's `response` shape.
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
export class DeleteFirewallDomainListCommand extends $Command
  .classBuilder<
    DeleteFirewallDomainListCommandInput,
    DeleteFirewallDomainListCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "DeleteFirewallDomainList", {})
  .n("Route53GlobalResolverClient", "DeleteFirewallDomainListCommand")
  .sc(DeleteFirewallDomainList$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFirewallDomainListInput;
      output: DeleteFirewallDomainListOutput;
    };
    sdk: {
      input: DeleteFirewallDomainListCommandInput;
      output: DeleteFirewallDomainListCommandOutput;
    };
  };
}
