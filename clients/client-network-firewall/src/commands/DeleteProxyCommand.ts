// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteProxyRequest, DeleteProxyResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { DeleteProxy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProxyCommand}.
 */
export interface DeleteProxyCommandInput extends DeleteProxyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProxyCommand}.
 */
export interface DeleteProxyCommandOutput extends DeleteProxyResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified <a>Proxy</a>. </p>
 *          <p>Detaches a Proxy configuration from a NAT Gateway. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteProxyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteProxyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DeleteProxyRequest
 *   NatGatewayId: "STRING_VALUE", // required
 *   ProxyName: "STRING_VALUE",
 *   ProxyArn: "STRING_VALUE",
 * };
 * const command = new DeleteProxyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProxyResponse
 * //   NatGatewayId: "STRING_VALUE",
 * //   ProxyName: "STRING_VALUE",
 * //   ProxyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteProxyCommandInput - {@link DeleteProxyCommandInput}
 * @returns {@link DeleteProxyCommandOutput}
 * @see {@link DeleteProxyCommandInput} for command's `input` shape.
 * @see {@link DeleteProxyCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation you requested isn't supported by Network Firewall. </p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 *
 * @public
 */
export class DeleteProxyCommand extends $Command
  .classBuilder<
    DeleteProxyCommandInput,
    DeleteProxyCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "DeleteProxy", {})
  .n("NetworkFirewallClient", "DeleteProxyCommand")
  .sc(DeleteProxy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProxyRequest;
      output: DeleteProxyResponse;
    };
    sdk: {
      input: DeleteProxyCommandInput;
      output: DeleteProxyCommandOutput;
    };
  };
}
