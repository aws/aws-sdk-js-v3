// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetEC2RecommendationProjectedMetricsRequest,
  GetEC2RecommendationProjectedMetricsResponse,
} from "../models/models_0";
import { GetEC2RecommendationProjectedMetrics } from "../schemas/schemas_6_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEC2RecommendationProjectedMetricsCommand}.
 */
export interface GetEC2RecommendationProjectedMetricsCommandInput extends GetEC2RecommendationProjectedMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetEC2RecommendationProjectedMetricsCommand}.
 */
export interface GetEC2RecommendationProjectedMetricsCommandOutput
  extends GetEC2RecommendationProjectedMetricsResponse,
    __MetadataBearer {}

/**
 * <p>Returns the projected utilization metrics of Amazon EC2 instance
 *             recommendations.</p>
 *          <note>
 *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
 *                 utilization metrics returned when you run this action. Additionally, the
 *                     <code>Memory</code> metric is returned only for resources that have the unified
 *                     CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEC2RecommendationProjectedMetricsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEC2RecommendationProjectedMetricsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetEC2RecommendationProjectedMetricsRequest
 *   instanceArn: "STRING_VALUE", // required
 *   stat: "Maximum" || "Average", // required
 *   period: Number("int"), // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   recommendationPreferences: { // RecommendationPreferences
 *     cpuVendorArchitectures: [ // CpuVendorArchitectures
 *       "AWS_ARM64" || "CURRENT",
 *     ],
 *   },
 * };
 * const command = new GetEC2RecommendationProjectedMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetEC2RecommendationProjectedMetricsResponse
 * //   recommendedOptionProjectedMetrics: [ // RecommendedOptionProjectedMetrics
 * //     { // RecommendedOptionProjectedMetric
 * //       recommendedInstanceType: "STRING_VALUE",
 * //       rank: Number("int"),
 * //       projectedMetrics: [ // ProjectedMetrics
 * //         { // ProjectedMetric
 * //           name: "Cpu" || "Memory" || "EBS_READ_OPS_PER_SECOND" || "EBS_WRITE_OPS_PER_SECOND" || "EBS_READ_BYTES_PER_SECOND" || "EBS_WRITE_BYTES_PER_SECOND" || "DISK_READ_OPS_PER_SECOND" || "DISK_WRITE_OPS_PER_SECOND" || "DISK_READ_BYTES_PER_SECOND" || "DISK_WRITE_BYTES_PER_SECOND" || "NETWORK_IN_BYTES_PER_SECOND" || "NETWORK_OUT_BYTES_PER_SECOND" || "NETWORK_PACKETS_IN_PER_SECOND" || "NETWORK_PACKETS_OUT_PER_SECOND" || "GPU_PERCENTAGE" || "GPU_MEMORY_PERCENTAGE",
 * //           timestamps: [ // Timestamps
 * //             new Date("TIMESTAMP"),
 * //           ],
 * //           values: [ // MetricValues
 * //             Number("double"),
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetEC2RecommendationProjectedMetricsCommandInput - {@link GetEC2RecommendationProjectedMetricsCommandInput}
 * @returns {@link GetEC2RecommendationProjectedMetricsCommandOutput}
 * @see {@link GetEC2RecommendationProjectedMetricsCommandInput} for command's `input` shape.
 * @see {@link GetEC2RecommendationProjectedMetricsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for ComputeOptimizerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Try your call again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value supplied for the input parameter is out of range or not valid.</p>
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *  <p>The request must contain either a valid (registered) Amazon Web Services access key ID
 *             or X.509 certificate.</p>
 *
 * @throws {@link OptInRequiredException} (client fault)
 *  <p>The account is not opted in to Compute Optimizer.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ComputeOptimizerServiceException}
 * <p>Base exception class for all service exceptions from ComputeOptimizer service.</p>
 *
 *
 * @public
 */
export class GetEC2RecommendationProjectedMetricsCommand extends $Command
  .classBuilder<
    GetEC2RecommendationProjectedMetricsCommandInput,
    GetEC2RecommendationProjectedMetricsCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerService", "GetEC2RecommendationProjectedMetrics", {})
  .n("ComputeOptimizerClient", "GetEC2RecommendationProjectedMetricsCommand")
  .sc(GetEC2RecommendationProjectedMetrics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEC2RecommendationProjectedMetricsRequest;
      output: GetEC2RecommendationProjectedMetricsResponse;
    };
    sdk: {
      input: GetEC2RecommendationProjectedMetricsCommandInput;
      output: GetEC2RecommendationProjectedMetricsCommandOutput;
    };
  };
}
