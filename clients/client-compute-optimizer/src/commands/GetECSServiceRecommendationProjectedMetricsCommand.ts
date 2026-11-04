// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetECSServiceRecommendationProjectedMetricsRequest,
  GetECSServiceRecommendationProjectedMetricsResponse,
} from "../models/models_0";
import { GetECSServiceRecommendationProjectedMetrics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the projected metrics of Amazon ECS service recommendations.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred. Try your call again.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value supplied for the input parameter is out of range or not valid.
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *
 * The request must contain either a valid (registered) Amazon Web Services access key ID or X.509 certificate.
 *
 * @throws {@link OptInRequiredException} (client fault)
 *
 * The account is not opted in to Compute Optimizer.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource that is required for the action doesn't exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed due to a temporary failure of the server.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ComputeOptimizerServiceException}
 *
 * Base exception class for all service exceptions from ComputeOptimizer service.
 *
 * @public
 */
export class GetECSServiceRecommendationProjectedMetricsCommand extends command<GetECSServiceRecommendationProjectedMetricsCommandInput, GetECSServiceRecommendationProjectedMetricsCommandOutput>(
  _ep0,
  _mw0,
  "GetECSServiceRecommendationProjectedMetrics",
  GetECSServiceRecommendationProjectedMetrics$
) {
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
