// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { DescribeAlertRequest, DescribeAlertResponse } from "../models/models_0";
import { de_DescribeAlertCommand, se_DescribeAlertCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAlertCommand}.
 */
export interface DescribeAlertCommandInput extends DescribeAlertRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAlertCommand}.
 */
export interface DescribeAlertCommandOutput extends DescribeAlertResponse, __MetadataBearer {}

/**
 * <p>Describes an alert.</p>
 *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
 *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DescribeAlertCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DescribeAlertCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * // import type { LookoutMetricsClientConfig } from "@aws-sdk/client-lookoutmetrics";
 * const config = {}; // type is LookoutMetricsClientConfig
 * const client = new LookoutMetricsClient(config);
 * const input = { // DescribeAlertRequest
 *   AlertArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAlertCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAlertResponse
 * //   Alert: { // Alert
 * //     Action: { // Action
 * //       SNSConfiguration: { // SNSConfiguration
 * //         RoleArn: "STRING_VALUE", // required
 * //         SnsTopicArn: "STRING_VALUE", // required
 * //         SnsFormat: "LONG_TEXT" || "SHORT_TEXT" || "JSON",
 * //       },
 * //       LambdaConfiguration: { // LambdaConfiguration
 * //         RoleArn: "STRING_VALUE", // required
 * //         LambdaArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     AlertDescription: "STRING_VALUE",
 * //     AlertArn: "STRING_VALUE",
 * //     AnomalyDetectorArn: "STRING_VALUE",
 * //     AlertName: "STRING_VALUE",
 * //     AlertSensitivityThreshold: Number("int"),
 * //     AlertType: "SNS" || "LAMBDA",
 * //     AlertStatus: "ACTIVE" || "INACTIVE",
 * //     LastModificationTime: new Date("TIMESTAMP"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     AlertFilters: { // AlertFilters
 * //       MetricList: [ // MetricNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       DimensionFilterList: [ // DimensionFilterList
 * //         { // DimensionFilter
 * //           DimensionName: "STRING_VALUE",
 * //           DimensionValueList: [ // DimensionValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAlertCommandInput - {@link DescribeAlertCommandInput}
 * @returns {@link DescribeAlertCommandOutput}
 * @see {@link DescribeAlertCommandInput} for command's `input` shape.
 * @see {@link DescribeAlertCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeAlertCommand extends $Command
  .classBuilder<
    DescribeAlertCommandInput,
    DescribeAlertCommandOutput,
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
  .s("LookoutMetrics", "DescribeAlert", {})
  .n("LookoutMetricsClient", "DescribeAlertCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAlertCommand)
  .de(de_DescribeAlertCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAlertRequest;
      output: DescribeAlertResponse;
    };
    sdk: {
      input: DescribeAlertCommandInput;
      output: DescribeAlertCommandOutput;
    };
  };
}
