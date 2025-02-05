// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticInferenceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticInferenceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAcceleratorTypesRequest, DescribeAcceleratorTypesResponse } from "../models/models_0";
import { de_DescribeAcceleratorTypesCommand, se_DescribeAcceleratorTypesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAcceleratorTypesCommand}.
 */
export interface DescribeAcceleratorTypesCommandInput extends DescribeAcceleratorTypesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAcceleratorTypesCommand}.
 */
export interface DescribeAcceleratorTypesCommandOutput extends DescribeAcceleratorTypesResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>Amazon Elastic Inference is no longer available.</p>
 *          </note>
 *          <p>
 *             Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticInferenceClient, DescribeAcceleratorTypesCommand } from "@aws-sdk/client-elastic-inference"; // ES Modules import
 * // const { ElasticInferenceClient, DescribeAcceleratorTypesCommand } = require("@aws-sdk/client-elastic-inference"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticInferenceClient(config);
 * const input = {};
 * const command = new DescribeAcceleratorTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAcceleratorTypesResponse
 * //   acceleratorTypes: [ // AcceleratorTypeList
 * //     { // AcceleratorType
 * //       acceleratorTypeName: "STRING_VALUE",
 * //       memoryInfo: { // MemoryInfo
 * //         sizeInMiB: Number("int"),
 * //       },
 * //       throughputInfo: [ // ThroughputInfoList
 * //         { // KeyValuePair
 * //           key: "STRING_VALUE",
 * //           value: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAcceleratorTypesCommandInput - {@link DescribeAcceleratorTypesCommandInput}
 * @returns {@link DescribeAcceleratorTypesCommandOutput}
 * @see {@link DescribeAcceleratorTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorTypesCommandOutput} for command's `response` shape.
 * @see {@link ElasticInferenceClientResolvedConfig | config} for ElasticInferenceClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *             Raised when an unexpected error occurred during request processing.
 *         </p>
 *
 * @throws {@link ElasticInferenceServiceException}
 * <p>Base exception class for all service exceptions from ElasticInference service.</p>
 *
 * @public
 */
export class DescribeAcceleratorTypesCommand extends $Command
  .classBuilder<
    DescribeAcceleratorTypesCommandInput,
    DescribeAcceleratorTypesCommandOutput,
    ElasticInferenceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticInferenceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EC2MatterhornCfSoothsayerApiGatewayLambda", "DescribeAcceleratorTypes", {})
  .n("ElasticInferenceClient", "DescribeAcceleratorTypesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAcceleratorTypesCommand)
  .de(de_DescribeAcceleratorTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeAcceleratorTypesResponse;
    };
    sdk: {
      input: DescribeAcceleratorTypesCommandInput;
      output: DescribeAcceleratorTypesCommandOutput;
    };
  };
}
