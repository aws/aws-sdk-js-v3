// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeProxyRequest, DescribeProxyResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { DescribeProxy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProxyCommand}.
 */
export interface DescribeProxyCommandInput extends DescribeProxyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProxyCommand}.
 */
export interface DescribeProxyCommandOutput extends DescribeProxyResponse, __MetadataBearer {}

/**
 * <p>Returns the data objects for the specified proxy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeProxyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeProxyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DescribeProxyRequest
 *   ProxyName: "STRING_VALUE",
 *   ProxyArn: "STRING_VALUE",
 * };
 * const command = new DescribeProxyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProxyResponse
 * //   Proxy: { // DescribeProxyResource
 * //     ProxyName: "STRING_VALUE",
 * //     ProxyArn: "STRING_VALUE",
 * //     ProxyConfigurationName: "STRING_VALUE",
 * //     ProxyConfigurationArn: "STRING_VALUE",
 * //     NatGatewayId: "STRING_VALUE",
 * //     ProxyState: "ATTACHING" || "ATTACHED" || "DETACHING" || "DETACHED" || "ATTACH_FAILED" || "DETACH_FAILED",
 * //     ProxyModifyState: "MODIFYING" || "COMPLETED" || "FAILED",
 * //     ListenerProperties: [ // ListenerProperties
 * //       { // ListenerProperty
 * //         Port: Number("int"),
 * //         Type: "HTTP" || "HTTPS",
 * //       },
 * //     ],
 * //     TlsInterceptProperties: { // TlsInterceptProperties
 * //       PcaArn: "STRING_VALUE",
 * //       TlsInterceptMode: "ENABLED" || "DISABLED",
 * //     },
 * //     VpcEndpointServiceName: "STRING_VALUE",
 * //     PrivateDNSName: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     DeleteTime: new Date("TIMESTAMP"),
 * //     UpdateTime: new Date("TIMESTAMP"),
 * //     FailureCode: "STRING_VALUE",
 * //     FailureMessage: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   UpdateToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeProxyCommandInput - {@link DescribeProxyCommandInput}
 * @returns {@link DescribeProxyCommandOutput}
 * @see {@link DescribeProxyCommandInput} for command's `input` shape.
 * @see {@link DescribeProxyCommandOutput} for command's `response` shape.
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
export class DescribeProxyCommand extends $Command
  .classBuilder<
    DescribeProxyCommandInput,
    DescribeProxyCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "DescribeProxy", {})
  .n("NetworkFirewallClient", "DescribeProxyCommand")
  .sc(DescribeProxy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProxyRequest;
      output: DescribeProxyResponse;
    };
    sdk: {
      input: DescribeProxyCommandInput;
      output: DescribeProxyCommandOutput;
    };
  };
}
