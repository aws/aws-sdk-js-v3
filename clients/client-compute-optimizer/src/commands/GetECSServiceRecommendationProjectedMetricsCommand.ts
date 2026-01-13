// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ComputeOptimizerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetECSServiceRecommendationProjectedMetricsRequest,
  GetECSServiceRecommendationProjectedMetricsResponse,
} from "../models/models_0";
import { GetECSServiceRecommendationProjectedMetrics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetECSServiceRecommendationProjectedMetricsCommand}.
 */
export interface GetECSServiceRecommendationProjectedMetricsCommandInput extends GetECSServiceRecommendationProjectedMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetECSServiceRecommendationProjectedMetricsCommand}.
 */
export interface GetECSServiceRecommendationProjectedMetricsCommandOutput extends GetECSServiceRecommendationProjectedMetricsResponse, __MetadataBearer {}

/**
 * <p>
 *             Returns the projected metrics of Amazon ECS service recommendations.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetECSServiceRecommendationProjectedMetricsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetECSServiceRecommendationProjectedMetricsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetECSServiceRecommendationProjectedMetricsRequest
 *   serviceArn: "STRING_VALUE", // required
 *   stat: "Maximum" || "Average", // required
 *   period: Number("int"), // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new GetECSServiceRecommendationProjectedMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetECSServiceRecommendationProjectedMetricsResponse
 * //   recommendedOptionProjectedMetrics: [ // ECSServiceRecommendedOptionProjectedMetrics
 * //     { // ECSServiceRecommendedOptionProjectedMetric
 * //       recommendedCpuUnits: Number("int"),
 * //       recommendedMemorySize: Number("int"),
 * //       projectedMetrics: [ // ECSServiceProjectedMetrics
 * //         { // ECSServiceProjectedMetric
 * //           name: "Cpu" || "Memory",
 * //           timestamps: [ // Timestamps
 * //             new Date("TIMESTAMP"),
 * //           ],
 * //           upperBoundValues: [ // MetricValues
 * //             Number("double"),
 * //           ],
 * //           lowerBoundValues: [
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
 * @param GetECSServiceRecommendationProjectedMetricsCommandInput - {@link GetECSServiceRecommendationProjectedMetricsCommandInput}
 * @returns {@link GetECSServiceRecommendationProjectedMetricsCommandOutput}
 * @see {@link GetECSServiceRecommendationProjectedMetricsCommandInput} for command's `input` shape.
 * @see {@link GetECSServiceRecommendationProjectedMetricsCommandOutput} for command's `response` shape.
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
export class GetECSServiceRecommendationProjectedMetricsCommand extends $Command
  .classBuilder<
    GetECSServiceRecommendationProjectedMetricsCommandInput,
    GetECSServiceRecommendationProjectedMetricsCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerService", "GetECSServiceRecommendationProjectedMetrics", {})
  .n("ComputeOptimizerClient", "GetECSServiceRecommendationProjectedMetricsCommand")
  .sc(GetECSServiceRecommendationProjectedMetrics$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetECSServiceRecommendationProjectedMetricsRequest;
      output: GetECSServiceRecommendationProjectedMetricsResponse;
    };
    sdk: {
      input: GetECSServiceRecommendationProjectedMetricsCommandInput;
      output: GetECSServiceRecommendationProjectedMetricsCommandOutput;
    };
  };
}
