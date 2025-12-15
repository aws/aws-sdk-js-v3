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
import type { DenyCustomRoutingTrafficRequest } from "../models/models_0";
import { DenyCustomRoutingTraffic$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DenyCustomRoutingTrafficCommand}.
 */
export interface DenyCustomRoutingTrafficCommandInput extends DenyCustomRoutingTrafficRequest {}
/**
 * @public
 *
 * The output of {@link DenyCustomRoutingTrafficCommand}.
 */
export interface DenyCustomRoutingTrafficCommandOutput extends __MetadataBearer {}

/**
 * <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic
 * 			for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a
 * 			specified list of destination IP addresses and ports. Note that you cannot specify IP addresses
 * 			or ports outside of the range that you configured for the endpoint group.</p>
 *          <p>After you make changes, you can verify that the updates are complete by checking the status of your
 * 			accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DenyCustomRoutingTrafficCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DenyCustomRoutingTrafficCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DenyCustomRoutingTrafficRequest
 *   EndpointGroupArn: "STRING_VALUE", // required
 *   EndpointId: "STRING_VALUE", // required
 *   DestinationAddresses: [ // DestinationAddresses
 *     "STRING_VALUE",
 *   ],
 *   DestinationPorts: [ // DestinationPorts
 *     Number("int"),
 *   ],
 *   DenyAllTrafficToEndpoint: true || false,
 * };
 * const command = new DenyCustomRoutingTrafficCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DenyCustomRoutingTrafficCommandInput - {@link DenyCustomRoutingTrafficCommandInput}
 * @returns {@link DenyCustomRoutingTrafficCommandOutput}
 * @see {@link DenyCustomRoutingTrafficCommandInput} for command's `input` shape.
 * @see {@link DenyCustomRoutingTrafficCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
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
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class DenyCustomRoutingTrafficCommand extends $Command
  .classBuilder<
    DenyCustomRoutingTrafficCommandInput,
    DenyCustomRoutingTrafficCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "DenyCustomRoutingTraffic", {})
  .n("GlobalAcceleratorClient", "DenyCustomRoutingTrafficCommand")
  .sc(DenyCustomRoutingTraffic$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DenyCustomRoutingTrafficRequest;
      output: {};
    };
    sdk: {
      input: DenyCustomRoutingTrafficCommandInput;
      output: DenyCustomRoutingTrafficCommandOutput;
    };
  };
}
