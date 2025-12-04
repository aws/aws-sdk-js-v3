// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateProxyRequest, CreateProxyResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { CreateProxy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProxyCommand}.
 */
export interface CreateProxyCommandInput extends CreateProxyRequest {}
/**
 * @public
 *
 * The output of {@link CreateProxyCommand}.
 */
export interface CreateProxyCommandOutput extends CreateProxyResponse, __MetadataBearer {}

/**
 * <p>Creates an Network Firewall <a>Proxy</a>
 *          </p>
 *          <p>Attaches a Proxy configuration to a NAT Gateway. </p>
 *          <p>To manage a proxy's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p>
 *          <p>To retrieve information about proxies, use <a>ListProxies</a> and <a>DescribeProxy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateProxyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateProxyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // CreateProxyRequest
 *   ProxyName: "STRING_VALUE", // required
 *   NatGatewayId: "STRING_VALUE", // required
 *   ProxyConfigurationName: "STRING_VALUE",
 *   ProxyConfigurationArn: "STRING_VALUE",
 *   ListenerProperties: [ // ListenerPropertiesRequest
 *     { // ListenerPropertyRequest
 *       Port: Number("int"), // required
 *       Type: "HTTP" || "HTTPS", // required
 *     },
 *   ],
 *   TlsInterceptProperties: { // TlsInterceptPropertiesRequest
 *     PcaArn: "STRING_VALUE",
 *     TlsInterceptMode: "ENABLED" || "DISABLED",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateProxyCommand(input);
 * const response = await client.send(command);
 * // { // CreateProxyResponse
 * //   Proxy: { // Proxy
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     DeleteTime: new Date("TIMESTAMP"),
 * //     UpdateTime: new Date("TIMESTAMP"),
 * //     FailureCode: "STRING_VALUE",
 * //     FailureMessage: "STRING_VALUE",
 * //     ProxyState: "ATTACHING" || "ATTACHED" || "DETACHING" || "DETACHED" || "ATTACH_FAILED" || "DETACH_FAILED",
 * //     ProxyModifyState: "MODIFYING" || "COMPLETED" || "FAILED",
 * //     NatGatewayId: "STRING_VALUE",
 * //     ProxyConfigurationName: "STRING_VALUE",
 * //     ProxyConfigurationArn: "STRING_VALUE",
 * //     ProxyName: "STRING_VALUE",
 * //     ProxyArn: "STRING_VALUE",
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
 * @param CreateProxyCommandInput - {@link CreateProxyCommandInput}
 * @returns {@link CreateProxyCommandOutput}
 * @see {@link CreateProxyCommandInput} for command's `input` shape.
 * @see {@link CreateProxyCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Unable to perform the operation because doing so would violate a limit setting. </p>
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
export class CreateProxyCommand extends $Command
  .classBuilder<
    CreateProxyCommandInput,
    CreateProxyCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "CreateProxy", {})
  .n("NetworkFirewallClient", "CreateProxyCommand")
  .sc(CreateProxy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProxyRequest;
      output: CreateProxyResponse;
    };
    sdk: {
      input: CreateProxyCommandInput;
      output: CreateProxyCommandOutput;
    };
  };
}
