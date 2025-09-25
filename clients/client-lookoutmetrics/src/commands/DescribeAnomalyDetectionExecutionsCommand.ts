// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import {
  DescribeAnomalyDetectionExecutionsRequest,
  DescribeAnomalyDetectionExecutionsResponse,
} from "../models/models_0";
import { DescribeAnomalyDetectionExecutions } from "../schemas/schemas_4_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAnomalyDetectionExecutionsCommand}.
 */
export interface DescribeAnomalyDetectionExecutionsCommandInput extends DescribeAnomalyDetectionExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAnomalyDetectionExecutionsCommand}.
 */
export interface DescribeAnomalyDetectionExecutionsCommandOutput
  extends DescribeAnomalyDetectionExecutionsResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the status of the specified anomaly detection jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DescribeAnomalyDetectionExecutionsCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DescribeAnomalyDetectionExecutionsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * // import type { LookoutMetricsClientConfig } from "@aws-sdk/client-lookoutmetrics";
 * const config = {}; // type is LookoutMetricsClientConfig
 * const client = new LookoutMetricsClient(config);
 * const input = { // DescribeAnomalyDetectionExecutionsRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 *   Timestamp: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAnomalyDetectionExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAnomalyDetectionExecutionsResponse
 * //   ExecutionList: [ // ExecutionList
 * //     { // ExecutionStatus
 * //       Timestamp: "STRING_VALUE",
 * //       Status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "FAILED_TO_SCHEDULE",
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAnomalyDetectionExecutionsCommandInput - {@link DescribeAnomalyDetectionExecutionsCommandInput}
 * @returns {@link DescribeAnomalyDetectionExecutionsCommandOutput}
 * @see {@link DescribeAnomalyDetectionExecutionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAnomalyDetectionExecutionsCommandOutput} for command's `response` shape.
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
export class DescribeAnomalyDetectionExecutionsCommand extends $Command
  .classBuilder<
    DescribeAnomalyDetectionExecutionsCommandInput,
    DescribeAnomalyDetectionExecutionsCommandOutput,
    LookoutMetricsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutMetricsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LookoutMetrics", "DescribeAnomalyDetectionExecutions", {})
  .n("LookoutMetricsClient", "DescribeAnomalyDetectionExecutionsCommand")
  .sc(DescribeAnomalyDetectionExecutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAnomalyDetectionExecutionsRequest;
      output: DescribeAnomalyDetectionExecutionsResponse;
    };
    sdk: {
      input: DescribeAnomalyDetectionExecutionsCommandInput;
      output: DescribeAnomalyDetectionExecutionsCommandOutput;
    };
  };
}
