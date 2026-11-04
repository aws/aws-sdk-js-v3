// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateProxyRequest, UpdateProxyResponse } from "../models/models_0";
import { UpdateProxy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateProxyCommand}.
 */
export interface UpdateProxyCommandInput extends UpdateProxyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProxyCommand}.
 */
export interface UpdateProxyCommandOutput extends UpdateProxyResponse, __MetadataBearer {}

/**
 * Updates the properties of the specified proxy.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateProxyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateProxyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateProxyRequest
 *   NatGatewayId: "STRING_VALUE", // required
 *   ProxyName: "STRING_VALUE",
 *   ProxyArn: "STRING_VALUE",
 *   ListenerPropertiesToAdd: [ // ListenerPropertiesRequest
 *     { // ListenerPropertyRequest
 *       Port: Number("int"), // required
 *       Type: "HTTP" || "HTTPS", // required
 *     },
 *   ],
 *   ListenerPropertiesToRemove: [
 *     {
 *       Port: Number("int"), // required
 *       Type: "HTTP" || "HTTPS", // required
 *     },
 *   ],
 *   TlsInterceptProperties: { // TlsInterceptPropertiesRequest
 *     PcaArn: "STRING_VALUE",
 *     TlsInterceptMode: "ENABLED" || "DISABLED",
 *   },
 *   UpdateToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateProxyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProxyResponse
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
 * @param UpdateProxyCommandInput - {@link UpdateProxyCommandInput}
 * @returns {@link UpdateProxyCommandOutput}
 * @see {@link UpdateProxyCommandInput} for command's `input` shape.
 * @see {@link UpdateProxyCommandOutput} for command's `response` shape.
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
export class UpdateProxyCommand extends command<UpdateProxyCommandInput, UpdateProxyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProxy",
  UpdateProxy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProxyRequest;
      output: UpdateProxyResponse;
    };
    sdk: {
      input: UpdateProxyCommandInput;
      output: UpdateProxyCommandOutput;
    };
  };
}
