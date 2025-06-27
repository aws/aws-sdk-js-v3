// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { DescribeCustomRoutingListenerRequest, DescribeCustomRoutingListenerResponse } from "../models/models_0";
import {
  de_DescribeCustomRoutingListenerCommand,
  se_DescribeCustomRoutingListenerCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomRoutingListenerCommand}.
 */
export interface DescribeCustomRoutingListenerCommandInput extends DescribeCustomRoutingListenerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCustomRoutingListenerCommand}.
 */
export interface DescribeCustomRoutingListenerCommandOutput
  extends DescribeCustomRoutingListenerResponse,
    __MetadataBearer {}

/**
 * <p>The description of a listener for a custom routing accelerator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeCustomRoutingListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeCustomRoutingListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DescribeCustomRoutingListenerRequest
 *   ListenerArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeCustomRoutingListenerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomRoutingListenerResponse
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
 * @param DescribeCustomRoutingListenerCommandInput - {@link DescribeCustomRoutingListenerCommandInput}
 * @returns {@link DescribeCustomRoutingListenerCommandOutput}
 * @see {@link DescribeCustomRoutingListenerCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomRoutingListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The listener that you specified doesn't exist.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class DescribeCustomRoutingListenerCommand extends $Command
  .classBuilder<
    DescribeCustomRoutingListenerCommandInput,
    DescribeCustomRoutingListenerCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GlobalAccelerator_V20180706", "DescribeCustomRoutingListener", {})
  .n("GlobalAcceleratorClient", "DescribeCustomRoutingListenerCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCustomRoutingListenerCommand)
  .de(de_DescribeCustomRoutingListenerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCustomRoutingListenerRequest;
      output: DescribeCustomRoutingListenerResponse;
    };
    sdk: {
      input: DescribeCustomRoutingListenerCommandInput;
      output: DescribeCustomRoutingListenerCommandOutput;
    };
  };
}
