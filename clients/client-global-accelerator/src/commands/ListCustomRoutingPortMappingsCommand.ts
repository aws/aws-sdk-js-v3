// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import type { ListCustomRoutingPortMappingsRequest, ListCustomRoutingPortMappingsResponse } from "../models/models_0";
import { ListCustomRoutingPortMappings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomRoutingPortMappingsCommand}.
 */
export interface ListCustomRoutingPortMappingsCommandInput extends ListCustomRoutingPortMappingsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomRoutingPortMappingsCommand}.
 */
export interface ListCustomRoutingPortMappingsCommandOutput
  extends ListCustomRoutingPortMappingsResponse,
    __MetadataBearer {}

/**
 * <p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance
 * 		IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator.
 * 		For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port
 * 	    mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p>
 *          <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to
 *         your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances
 *         in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p>
 *          <p>The mappings also include a flag for each destination denoting which destination IP addresses and
 * 		ports are allowed or denied traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingPortMappingsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingPortMappingsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ListCustomRoutingPortMappingsRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 *   EndpointGroupArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomRoutingPortMappingsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomRoutingPortMappingsResponse
 * //   PortMappings: [ // PortMappings
 * //     { // PortMapping
 * //       AcceleratorPort: Number("int"),
 * //       EndpointGroupArn: "STRING_VALUE",
 * //       EndpointId: "STRING_VALUE",
 * //       DestinationSocketAddress: { // SocketAddress
 * //         IpAddress: "STRING_VALUE",
 * //         Port: Number("int"),
 * //       },
 * //       Protocols: [ // CustomRoutingProtocols
 * //         "TCP" || "UDP",
 * //       ],
 * //       DestinationTrafficState: "ALLOW" || "DENY",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomRoutingPortMappingsCommandInput - {@link ListCustomRoutingPortMappingsCommandInput}
 * @returns {@link ListCustomRoutingPortMappingsCommandOutput}
 * @see {@link ListCustomRoutingPortMappingsCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingPortMappingsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *  <p>The accelerator that you specified doesn't exist.</p>
 *
 * @throws {@link EndpointGroupNotFoundException} (client fault)
 *  <p>The endpoint group that you specified doesn't exist.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>There isn't another item to return.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class ListCustomRoutingPortMappingsCommand extends $Command
  .classBuilder<
    ListCustomRoutingPortMappingsCommandInput,
    ListCustomRoutingPortMappingsCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "ListCustomRoutingPortMappings", {})
  .n("GlobalAcceleratorClient", "ListCustomRoutingPortMappingsCommand")
  .sc(ListCustomRoutingPortMappings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomRoutingPortMappingsRequest;
      output: ListCustomRoutingPortMappingsResponse;
    };
    sdk: {
      input: ListCustomRoutingPortMappingsCommandInput;
      output: ListCustomRoutingPortMappingsCommandOutput;
    };
  };
}
