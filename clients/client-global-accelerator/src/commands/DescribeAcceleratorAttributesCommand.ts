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
import { DescribeAcceleratorAttributesRequest, DescribeAcceleratorAttributesResponse } from "../models/models_0";
import {
  de_DescribeAcceleratorAttributesCommand,
  se_DescribeAcceleratorAttributesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAcceleratorAttributesCommand}.
 */
export interface DescribeAcceleratorAttributesCommandInput extends DescribeAcceleratorAttributesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAcceleratorAttributesCommand}.
 */
export interface DescribeAcceleratorAttributesCommandOutput
  extends DescribeAcceleratorAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Describe the attributes of an accelerator.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeAcceleratorAttributesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeAcceleratorAttributesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DescribeAcceleratorAttributesRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAcceleratorAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAcceleratorAttributesResponse
 * //   AcceleratorAttributes: { // AcceleratorAttributes
 * //     FlowLogsEnabled: true || false,
 * //     FlowLogsS3Bucket: "STRING_VALUE",
 * //     FlowLogsS3Prefix: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAcceleratorAttributesCommandInput - {@link DescribeAcceleratorAttributesCommandInput}
 * @returns {@link DescribeAcceleratorAttributesCommandOutput}
 * @see {@link DescribeAcceleratorAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorAttributesCommandOutput} for command's `response` shape.
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
export class DescribeAcceleratorAttributesCommand extends $Command
  .classBuilder<
    DescribeAcceleratorAttributesCommandInput,
    DescribeAcceleratorAttributesCommandOutput,
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
  .s("GlobalAccelerator_V20180706", "DescribeAcceleratorAttributes", {})
  .n("GlobalAcceleratorClient", "DescribeAcceleratorAttributesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAcceleratorAttributesCommand)
  .de(de_DescribeAcceleratorAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAcceleratorAttributesRequest;
      output: DescribeAcceleratorAttributesResponse;
    };
    sdk: {
      input: DescribeAcceleratorAttributesCommandInput;
      output: DescribeAcceleratorAttributesCommandOutput;
    };
  };
}
