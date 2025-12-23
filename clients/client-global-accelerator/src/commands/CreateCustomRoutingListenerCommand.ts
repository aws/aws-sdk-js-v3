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
import type { CreateCustomRoutingListenerRequest, CreateCustomRoutingListenerResponse } from "../models/models_0";
import { CreateCustomRoutingListener$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomRoutingListenerCommand}.
 */
export interface CreateCustomRoutingListenerCommandInput extends CreateCustomRoutingListenerRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomRoutingListenerCommand}.
 */
export interface CreateCustomRoutingListenerCommandOutput extends CreateCustomRoutingListenerResponse, __MetadataBearer {}

/**
 * <p>Create a listener to process inbound connections from clients to a custom routing accelerator.
 * 			Connections arrive to assigned static IP addresses on the port range that you specify. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateCustomRoutingListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateCustomRoutingListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // CreateCustomRoutingListenerRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 *   PortRanges: [ // PortRanges // required
 *     { // PortRange
 *       FromPort: Number("int"),
 *       ToPort: Number("int"),
 *     },
 *   ],
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new CreateCustomRoutingListenerCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomRoutingListenerResponse
 * //   Listener: { // CustomRoutingListener
 * //     ListenerArn: "STRING_VALUE",
 * //     PortRanges: [ // PortRanges
 * //       { // PortRange
 * //         FromPort: Number("int"),
 * //         ToPort: Number("int"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCustomRoutingListenerCommandInput - {@link CreateCustomRoutingListenerCommandInput}
 * @returns {@link CreateCustomRoutingListenerCommandOutput}
 * @see {@link CreateCustomRoutingListenerCommandInput} for command's `input` shape.
 * @see {@link CreateCustomRoutingListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *  <p>The accelerator that you specified doesn't exist.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link InvalidPortRangeException} (client fault)
 *  <p>The port numbers that you specified are not valid numbers or are not unique for this accelerator.</p>
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
export class CreateCustomRoutingListenerCommand extends $Command
  .classBuilder<
    CreateCustomRoutingListenerCommandInput,
    CreateCustomRoutingListenerCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "CreateCustomRoutingListener", {})
  .n("GlobalAcceleratorClient", "CreateCustomRoutingListenerCommand")
  .sc(CreateCustomRoutingListener$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomRoutingListenerRequest;
      output: CreateCustomRoutingListenerResponse;
    };
    sdk: {
      input: CreateCustomRoutingListenerCommandInput;
      output: CreateCustomRoutingListenerCommandOutput;
    };
  };
}
