// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFlywheelIterationRequest, DescribeFlywheelIterationResponse } from "../models/models_0";
import { DescribeFlywheelIteration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFlywheelIterationCommand}.
 */
export interface DescribeFlywheelIterationCommandInput extends DescribeFlywheelIterationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFlywheelIterationCommand}.
 */
export interface DescribeFlywheelIterationCommandOutput extends DescribeFlywheelIterationResponse, __MetadataBearer {}

/**
 * <p>Retrieve the configuration properties of a flywheel iteration.
 *       For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html">
 *       Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeFlywheelIterationCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeFlywheelIterationCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // DescribeFlywheelIterationRequest
 *   FlywheelArn: "STRING_VALUE", // required
 *   FlywheelIterationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeFlywheelIterationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFlywheelIterationResponse
 * //   FlywheelIterationProperties: { // FlywheelIterationProperties
 * //     FlywheelArn: "STRING_VALUE",
 * //     FlywheelIterationId: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     Status: "TRAINING" || "EVALUATING" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * //     Message: "STRING_VALUE",
 * //     EvaluatedModelArn: "STRING_VALUE",
 * //     EvaluatedModelMetrics: { // FlywheelModelEvaluationMetrics
 * //       AverageF1Score: Number("double"),
 * //       AveragePrecision: Number("double"),
 * //       AverageRecall: Number("double"),
 * //       AverageAccuracy: Number("double"),
 * //     },
 * //     TrainedModelArn: "STRING_VALUE",
 * //     TrainedModelMetrics: {
 * //       AverageF1Score: Number("double"),
 * //       AveragePrecision: Number("double"),
 * //       AverageRecall: Number("double"),
 * //       AverageAccuracy: Number("double"),
 * //     },
 * //     EvaluationManifestS3Prefix: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFlywheelIterationCommandInput - {@link DescribeFlywheelIterationCommandInput}
 * @returns {@link DescribeFlywheelIterationCommandOutput}
 * @see {@link DescribeFlywheelIterationCommandInput} for command's `input` shape.
 * @see {@link DescribeFlywheelIterationCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class DescribeFlywheelIterationCommand extends $Command
  .classBuilder<
    DescribeFlywheelIterationCommandInput,
    DescribeFlywheelIterationCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "DescribeFlywheelIteration", {})
  .n("ComprehendClient", "DescribeFlywheelIterationCommand")
  .sc(DescribeFlywheelIteration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFlywheelIterationRequest;
      output: DescribeFlywheelIterationResponse;
    };
    sdk: {
      input: DescribeFlywheelIterationCommandInput;
      output: DescribeFlywheelIterationCommandOutput;
    };
  };
}
