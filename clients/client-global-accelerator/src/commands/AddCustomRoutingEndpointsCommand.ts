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
import type { AddCustomRoutingEndpointsRequest, AddCustomRoutingEndpointsResponse } from "../models/models_0";
import { AddCustomRoutingEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddCustomRoutingEndpointsCommand}.
 */
export interface AddCustomRoutingEndpointsCommandInput extends AddCustomRoutingEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link AddCustomRoutingEndpointsCommand}.
 */
export interface AddCustomRoutingEndpointsCommandOutput extends AddCustomRoutingEndpointsResponse, __MetadataBearer {}

/**
 * <p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p>
 *          <p>The listener port range must be large enough to support the number of IP addresses that can be
 * 		specified in your subnet. The number of ports required is: subnet size times the number
 * 		of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener
 * 		port range of at least 255 ports. </p>
 *          <p>Note: You must have enough remaining listener ports available to
 * 		map to the subnet ports, or the call will fail with a LimitExceededException.</p>
 *          <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all
 * 			destinations to receive traffic, or to specify individual port mappings that can receive
 * 			traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html">
 * 				AllowCustomRoutingTraffic</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, AddCustomRoutingEndpointsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, AddCustomRoutingEndpointsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // AddCustomRoutingEndpointsRequest
 *   EndpointConfigurations: [ // CustomRoutingEndpointConfigurations // required
 *     { // CustomRoutingEndpointConfiguration
 *       EndpointId: "STRING_VALUE",
 *       AttachmentArn: "STRING_VALUE",
 *     },
 *   ],
 *   EndpointGroupArn: "STRING_VALUE", // required
 * };
 * const command = new AddCustomRoutingEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // AddCustomRoutingEndpointsResponse
 * //   EndpointDescriptions: [ // CustomRoutingEndpointDescriptions
 * //     { // CustomRoutingEndpointDescription
 * //       EndpointId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   EndpointGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddCustomRoutingEndpointsCommandInput - {@link AddCustomRoutingEndpointsCommandInput}
 * @returns {@link AddCustomRoutingEndpointsCommandOutput}
 * @see {@link AddCustomRoutingEndpointsCommandInput} for command's `input` shape.
 * @see {@link AddCustomRoutingEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't use both of those options.</p>
 *
 * @throws {@link EndpointAlreadyExistsException} (client fault)
 *  <p>The endpoint that you specified doesn't exist.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Processing your request would cause you to exceed an Global Accelerator limit.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class AddCustomRoutingEndpointsCommand extends $Command
  .classBuilder<
    AddCustomRoutingEndpointsCommandInput,
    AddCustomRoutingEndpointsCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "AddCustomRoutingEndpoints", {})
  .n("GlobalAcceleratorClient", "AddCustomRoutingEndpointsCommand")
  .sc(AddCustomRoutingEndpoints$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddCustomRoutingEndpointsRequest;
      output: AddCustomRoutingEndpointsResponse;
    };
    sdk: {
      input: AddCustomRoutingEndpointsCommandInput;
      output: AddCustomRoutingEndpointsCommandOutput;
    };
  };
}
