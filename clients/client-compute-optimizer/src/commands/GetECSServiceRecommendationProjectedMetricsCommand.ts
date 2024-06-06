// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetECSServiceRecommendationProjectedMetricsRequest,
  GetECSServiceRecommendationProjectedMetricsResponse,
} from "../models/models_0";
import {
  de_GetECSServiceRecommendationProjectedMetricsCommand,
  se_GetECSServiceRecommendationProjectedMetricsCommand,
} from "../protocols/Aws_json1_0";

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
export interface GetECSServiceRecommendationProjectedMetricsCommandInput
  extends GetECSServiceRecommendationProjectedMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetECSServiceRecommendationProjectedMetricsCommand}.
 */
export interface GetECSServiceRecommendationProjectedMetricsCommandOutput
  extends GetECSServiceRecommendationProjectedMetricsResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Returns the projected metrics of Amazon ECS service recommendations.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetECSServiceRecommendationProjectedMetricsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetECSServiceRecommendationProjectedMetricsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ComputeOptimizerService", "GetECSServiceRecommendationProjectedMetrics", {})
  .n("ComputeOptimizerClient", "GetECSServiceRecommendationProjectedMetricsCommand")
  .f(void 0, void 0)
  .ser(se_GetECSServiceRecommendationProjectedMetricsCommand)
  .de(de_GetECSServiceRecommendationProjectedMetricsCommand)
  .build() {}
