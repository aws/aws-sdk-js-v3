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
import {
  DescribeCustomRoutingAcceleratorAttributesRequest,
  DescribeCustomRoutingAcceleratorAttributesResponse,
} from "../models/models_0";
import {
  de_DescribeCustomRoutingAcceleratorAttributesCommand,
  se_DescribeCustomRoutingAcceleratorAttributesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomRoutingAcceleratorAttributesCommand}.
 */
export interface DescribeCustomRoutingAcceleratorAttributesCommandInput
  extends DescribeCustomRoutingAcceleratorAttributesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCustomRoutingAcceleratorAttributesCommand}.
 */
export interface DescribeCustomRoutingAcceleratorAttributesCommandOutput
  extends DescribeCustomRoutingAcceleratorAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Describe the attributes of a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeCustomRoutingAcceleratorAttributesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeCustomRoutingAcceleratorAttributesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DescribeCustomRoutingAcceleratorAttributesRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeCustomRoutingAcceleratorAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomRoutingAcceleratorAttributesResponse
 * //   AcceleratorAttributes: { // CustomRoutingAcceleratorAttributes
 * //     FlowLogsEnabled: true || false,
 * //     FlowLogsS3Bucket: "STRING_VALUE",
 * //     FlowLogsS3Prefix: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCustomRoutingAcceleratorAttributesCommandInput - {@link DescribeCustomRoutingAcceleratorAttributesCommandInput}
 * @returns {@link DescribeCustomRoutingAcceleratorAttributesCommandOutput}
 * @see {@link DescribeCustomRoutingAcceleratorAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomRoutingAcceleratorAttributesCommandOutput} for command's `response` shape.
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
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class DescribeCustomRoutingAcceleratorAttributesCommand extends $Command
  .classBuilder<
    DescribeCustomRoutingAcceleratorAttributesCommandInput,
    DescribeCustomRoutingAcceleratorAttributesCommandOutput,
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
  .s("GlobalAccelerator_V20180706", "DescribeCustomRoutingAcceleratorAttributes", {})
  .n("GlobalAcceleratorClient", "DescribeCustomRoutingAcceleratorAttributesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCustomRoutingAcceleratorAttributesCommand)
  .de(de_DescribeCustomRoutingAcceleratorAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCustomRoutingAcceleratorAttributesRequest;
      output: DescribeCustomRoutingAcceleratorAttributesResponse;
    };
    sdk: {
      input: DescribeCustomRoutingAcceleratorAttributesCommandInput;
      output: DescribeCustomRoutingAcceleratorAttributesCommandOutput;
    };
  };
}
