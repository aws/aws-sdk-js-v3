// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProxyRequest, CreateProxyResponse } from "../models/models_0";
import { CreateProxy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an Network Firewall Proxy
 *
 * Attaches a Proxy configuration to a NAT Gateway.
 *
 * To manage a proxy's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource.
 *
 * To retrieve information about proxies, use ListProxies and DescribeProxy.
 *
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
 *
 * Your request is valid, but Network Firewall couldn't perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The operation failed because of a problem with your request. Examples include:
 *
 * - You specified an unsupported parameter name or value.
 * - You tried to update a property with a value that isn't among the available types.
 * - Your request references an ARN that is malformed, or corresponds to a resource that isn't valid in the context of the request.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Unable to perform the operation because doing so would violate a limit setting.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Unable to locate a resource using the parameters that you provided.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Unable to process the request due to throttling limitations.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation you requested isn't supported by Network Firewall.
 *
 * @throws {@link NetworkFirewallServiceException}
 *
 * Base exception class for all service exceptions from NetworkFirewall service.
 *
 * @public
 */
export class CreateProxyCommand extends command<CreateProxyCommandInput, CreateProxyCommandOutput>(
  _ep0,
  _mw0,
  "CreateProxy",
  CreateProxy$
) {
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
