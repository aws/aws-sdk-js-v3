// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticInferenceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticInferenceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAcceleratorsRequest, DescribeAcceleratorsResponse } from "../models/models_0";
import { de_DescribeAcceleratorsCommand, se_DescribeAcceleratorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAcceleratorsCommand}.
 */
export interface DescribeAcceleratorsCommandInput extends DescribeAcceleratorsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAcceleratorsCommand}.
 */
export interface DescribeAcceleratorsCommandOutput extends DescribeAcceleratorsResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>Amazon Elastic Inference is no longer available.</p>
 *          </note>
 *          <p>
 *             Describes information over a provided set of accelerators belonging to an account.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticInferenceClient, DescribeAcceleratorsCommand } from "@aws-sdk/client-elastic-inference"; // ES Modules import
 * // const { ElasticInferenceClient, DescribeAcceleratorsCommand } = require("@aws-sdk/client-elastic-inference"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticInferenceClient(config);
 * const input = { // DescribeAcceleratorsRequest
 *   acceleratorIds: [ // AcceleratorIdList
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // FilterList
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAcceleratorsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAcceleratorsResponse
 * //   acceleratorSet: [ // ElasticInferenceAcceleratorSet
 * //     { // ElasticInferenceAccelerator
 * //       acceleratorHealth: { // ElasticInferenceAcceleratorHealth
 * //         status: "STRING_VALUE",
 * //       },
 * //       acceleratorType: "STRING_VALUE",
 * //       acceleratorId: "STRING_VALUE",
 * //       availabilityZone: "STRING_VALUE",
 * //       attachedResource: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAcceleratorsCommandInput - {@link DescribeAcceleratorsCommandInput}
 * @returns {@link DescribeAcceleratorsCommandOutput}
 * @see {@link DescribeAcceleratorsCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorsCommandOutput} for command's `response` shape.
 * @see {@link ElasticInferenceClientResolvedConfig | config} for ElasticInferenceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>
 *             Raised when a malformed input has been provided to the API.
 *         </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *             Raised when an unexpected error occurred during request processing.
 *         </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *             Raised when the requested resource cannot be found.
 *         </p>
 *
 * @throws {@link ElasticInferenceServiceException}
 * <p>Base exception class for all service exceptions from ElasticInference service.</p>
 *
 * @public
 */
export class DescribeAcceleratorsCommand extends $Command
  .classBuilder<
    DescribeAcceleratorsCommandInput,
    DescribeAcceleratorsCommandOutput,
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
  .s("EC2MatterhornCfSoothsayerApiGatewayLambda", "DescribeAccelerators", {})
  .n("ElasticInferenceClient", "DescribeAcceleratorsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAcceleratorsCommand)
  .de(de_DescribeAcceleratorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAcceleratorsRequest;
      output: DescribeAcceleratorsResponse;
    };
    sdk: {
      input: DescribeAcceleratorsCommandInput;
      output: DescribeAcceleratorsCommandOutput;
    };
  };
}
