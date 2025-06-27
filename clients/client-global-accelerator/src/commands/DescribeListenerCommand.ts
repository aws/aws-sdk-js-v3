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
import { DescribeListenerRequest, DescribeListenerResponse } from "../models/models_0";
import { de_DescribeListenerCommand, se_DescribeListenerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeListenerCommand}.
 */
export interface DescribeListenerCommandInput extends DescribeListenerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeListenerCommand}.
 */
export interface DescribeListenerCommandOutput extends DescribeListenerResponse, __MetadataBearer {}

/**
 * <p>Describe a listener. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DescribeListenerRequest
 *   ListenerArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeListenerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeListenerResponse
 * //   Listener: { // Listener
 * //     ListenerArn: "STRING_VALUE",
 * //     PortRanges: [ // PortRanges
 * //       { // PortRange
 * //         FromPort: Number("int"),
 * //         ToPort: Number("int"),
 * //       },
 * //     ],
 * //     Protocol: "TCP" || "UDP",
 * //     ClientAffinity: "NONE" || "SOURCE_IP",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeListenerCommandInput - {@link DescribeListenerCommandInput}
 * @returns {@link DescribeListenerCommandOutput}
 * @see {@link DescribeListenerCommandInput} for command's `input` shape.
 * @see {@link DescribeListenerCommandOutput} for command's `response` shape.
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
export class DescribeListenerCommand extends $Command
  .classBuilder<
    DescribeListenerCommandInput,
    DescribeListenerCommandOutput,
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
  .s("GlobalAccelerator_V20180706", "DescribeListener", {})
  .n("GlobalAcceleratorClient", "DescribeListenerCommand")
  .f(void 0, void 0)
  .ser(se_DescribeListenerCommand)
  .de(de_DescribeListenerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeListenerRequest;
      output: DescribeListenerResponse;
    };
    sdk: {
      input: DescribeListenerCommandInput;
      output: DescribeListenerCommandOutput;
    };
  };
}
