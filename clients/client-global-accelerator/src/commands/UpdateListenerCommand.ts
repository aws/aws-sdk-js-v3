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
import { UpdateListenerRequest, UpdateListenerResponse } from "../models/models_0";
import { de_UpdateListenerCommand, se_UpdateListenerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateListenerCommand}.
 */
export interface UpdateListenerCommandInput extends UpdateListenerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateListenerCommand}.
 */
export interface UpdateListenerCommandOutput extends UpdateListenerResponse, __MetadataBearer {}

/**
 * <p>Update a listener. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // UpdateListenerRequest
 *   ListenerArn: "STRING_VALUE", // required
 *   PortRanges: [ // PortRanges
 *     { // PortRange
 *       FromPort: Number("int"),
 *       ToPort: Number("int"),
 *     },
 *   ],
 *   Protocol: "TCP" || "UDP",
 *   ClientAffinity: "NONE" || "SOURCE_IP",
 * };
 * const command = new UpdateListenerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateListenerResponse
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
 * @param UpdateListenerCommandInput - {@link UpdateListenerCommandInput}
 * @returns {@link UpdateListenerCommandOutput}
 * @see {@link UpdateListenerCommandInput} for command's `input` shape.
 * @see {@link UpdateListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
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
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The listener that you specified doesn't exist.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 * @public
 */
export class UpdateListenerCommand extends $Command
  .classBuilder<
    UpdateListenerCommandInput,
    UpdateListenerCommandOutput,
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
  .s("GlobalAccelerator_V20180706", "UpdateListener", {})
  .n("GlobalAcceleratorClient", "UpdateListenerCommand")
  .f(void 0, void 0)
  .ser(se_UpdateListenerCommand)
  .de(de_UpdateListenerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateListenerRequest;
      output: UpdateListenerResponse;
    };
    sdk: {
      input: UpdateListenerCommandInput;
      output: UpdateListenerCommandOutput;
    };
  };
}
