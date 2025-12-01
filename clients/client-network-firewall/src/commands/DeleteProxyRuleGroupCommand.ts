// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteProxyRuleGroupRequest, DeleteProxyRuleGroupResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { DeleteProxyRuleGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProxyRuleGroupCommand}.
 */
export interface DeleteProxyRuleGroupCommandInput extends DeleteProxyRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProxyRuleGroupCommand}.
 */
export interface DeleteProxyRuleGroupCommandOutput extends DeleteProxyRuleGroupResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified <a>ProxyRuleGroup</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteProxyRuleGroupCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteProxyRuleGroupCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DeleteProxyRuleGroupRequest
 *   ProxyRuleGroupName: "STRING_VALUE",
 *   ProxyRuleGroupArn: "STRING_VALUE",
 * };
 * const command = new DeleteProxyRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProxyRuleGroupResponse
 * //   ProxyRuleGroupName: "STRING_VALUE",
 * //   ProxyRuleGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteProxyRuleGroupCommandInput - {@link DeleteProxyRuleGroupCommandInput}
 * @returns {@link DeleteProxyRuleGroupCommandOutput}
 * @see {@link DeleteProxyRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteProxyRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 *
 * @public
 */
export class DeleteProxyRuleGroupCommand extends $Command
  .classBuilder<
    DeleteProxyRuleGroupCommandInput,
    DeleteProxyRuleGroupCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "DeleteProxyRuleGroup", {})
  .n("NetworkFirewallClient", "DeleteProxyRuleGroupCommand")
  .sc(DeleteProxyRuleGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProxyRuleGroupRequest;
      output: DeleteProxyRuleGroupResponse;
    };
    sdk: {
      input: DeleteProxyRuleGroupCommandInput;
      output: DeleteProxyRuleGroupCommandOutput;
    };
  };
}
