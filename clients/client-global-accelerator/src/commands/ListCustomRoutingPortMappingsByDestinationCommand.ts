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
import type {
  ListCustomRoutingPortMappingsByDestinationRequest,
  ListCustomRoutingPortMappingsByDestinationResponse,
} from "../models/models_0";
import { ListCustomRoutingPortMappingsByDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomRoutingPortMappingsByDestinationCommand}.
 */
export interface ListCustomRoutingPortMappingsByDestinationCommandInput extends ListCustomRoutingPortMappingsByDestinationRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomRoutingPortMappingsByDestinationCommand}.
 */
export interface ListCustomRoutingPortMappingsByDestinationCommandOutput extends ListCustomRoutingPortMappingsByDestinationResponse, __MetadataBearer {}

/**
 * <p>List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The
 * 			response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that
 * 			span multiple custom routing accelerators in your account, or for scenarios where you only want to
 * 			list the port mappings for a specific destination instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingPortMappingsByDestinationCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingPortMappingsByDestinationCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ListCustomRoutingPortMappingsByDestinationRequest
 *   EndpointId: "STRING_VALUE", // required
 *   DestinationAddress: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomRoutingPortMappingsByDestinationCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomRoutingPortMappingsByDestinationResponse
 * //   DestinationPortMappings: [ // DestinationPortMappings
 * //     { // DestinationPortMapping
 * //       AcceleratorArn: "STRING_VALUE",
 * //       AcceleratorSocketAddresses: [ // SocketAddresses
 * //         { // SocketAddress
 * //           IpAddress: "STRING_VALUE",
 * //           Port: Number("int"),
 * //         },
 * //       ],
 * //       EndpointGroupArn: "STRING_VALUE",
 * //       EndpointId: "STRING_VALUE",
 * //       EndpointGroupRegion: "STRING_VALUE",
 * //       DestinationSocketAddress: {
 * //         IpAddress: "STRING_VALUE",
 * //         Port: Number("int"),
 * //       },
 * //       IpAddressType: "IPV4" || "DUAL_STACK",
 * //       DestinationTrafficState: "ALLOW" || "DENY",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomRoutingPortMappingsByDestinationCommandInput - {@link ListCustomRoutingPortMappingsByDestinationCommandInput}
 * @returns {@link ListCustomRoutingPortMappingsByDestinationCommandOutput}
 * @see {@link ListCustomRoutingPortMappingsByDestinationCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingPortMappingsByDestinationCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link EndpointNotFoundException} (client fault)
 *  <p>The endpoint that you specified doesn't exist.</p>
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
export class ListCustomRoutingPortMappingsByDestinationCommand extends $Command
  .classBuilder<
    ListCustomRoutingPortMappingsByDestinationCommandInput,
    ListCustomRoutingPortMappingsByDestinationCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "ListCustomRoutingPortMappingsByDestination", {})
  .n("GlobalAcceleratorClient", "ListCustomRoutingPortMappingsByDestinationCommand")
  .sc(ListCustomRoutingPortMappingsByDestination$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomRoutingPortMappingsByDestinationRequest;
      output: ListCustomRoutingPortMappingsByDestinationResponse;
    };
    sdk: {
      input: ListCustomRoutingPortMappingsByDestinationCommandInput;
      output: ListCustomRoutingPortMappingsByDestinationCommandOutput;
    };
  };
}
