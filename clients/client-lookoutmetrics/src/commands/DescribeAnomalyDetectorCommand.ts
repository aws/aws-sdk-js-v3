// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { DescribeAnomalyDetectorRequest, DescribeAnomalyDetectorResponse } from "../models/models_0";
import { de_DescribeAnomalyDetectorCommand, se_DescribeAnomalyDetectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAnomalyDetectorCommand}.
 */
export interface DescribeAnomalyDetectorCommandInput extends DescribeAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAnomalyDetectorCommand}.
 */
export interface DescribeAnomalyDetectorCommandOutput extends DescribeAnomalyDetectorResponse, __MetadataBearer {}

/**
 * <p>Describes a detector.</p>
 *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
 *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DescribeAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DescribeAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LookoutMetricsClient(config);
 * const input = { // DescribeAnomalyDetectorRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAnomalyDetectorResponse
 * //   AnomalyDetectorArn: "STRING_VALUE",
 * //   AnomalyDetectorName: "STRING_VALUE",
 * //   AnomalyDetectorDescription: "STRING_VALUE",
 * //   AnomalyDetectorConfig: { // AnomalyDetectorConfigSummary
 * //     AnomalyDetectorFrequency: "P1D" || "PT1H" || "PT10M" || "PT5M",
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   Status: "ACTIVE" || "ACTIVATING" || "DELETING" || "FAILED" || "INACTIVE" || "LEARNING" || "BACK_TEST_ACTIVATING" || "BACK_TEST_ACTIVE" || "BACK_TEST_COMPLETE" || "DEACTIVATED" || "DEACTIVATING",
 * //   FailureReason: "STRING_VALUE",
 * //   KmsKeyArn: "STRING_VALUE",
 * //   FailureType: "ACTIVATION_FAILURE" || "BACK_TEST_ACTIVATION_FAILURE" || "DELETION_FAILURE" || "DEACTIVATION_FAILURE",
 * // };
 *
 * ```
 *
 * @param DescribeAnomalyDetectorCommandInput - {@link DescribeAnomalyDetectorCommandInput}
 * @returns {@link DescribeAnomalyDetectorCommandOutput}
 * @see {@link DescribeAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link DescribeAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to too many requests being submitted at the same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 *
 * @throws {@link LookoutMetricsServiceException}
 * <p>Base exception class for all service exceptions from LookoutMetrics service.</p>
 *
 * @public
 */
export class DescribeAnomalyDetectorCommand extends $Command
  .classBuilder<
    DescribeAnomalyDetectorCommandInput,
    DescribeAnomalyDetectorCommandOutput,
    LookoutMetricsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutMetricsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LookoutMetrics", "DescribeAnomalyDetector", {})
  .n("LookoutMetricsClient", "DescribeAnomalyDetectorCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAnomalyDetectorCommand)
  .de(de_DescribeAnomalyDetectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAnomalyDetectorRequest;
      output: DescribeAnomalyDetectorResponse;
    };
    sdk: {
      input: DescribeAnomalyDetectorCommandInput;
      output: DescribeAnomalyDetectorCommandOutput;
    };
  };
}
