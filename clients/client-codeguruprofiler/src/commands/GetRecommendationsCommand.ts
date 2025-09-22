// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRecommendationsRequest, GetRecommendationsResponse } from "../models/models_0";
import { GetRecommendations } from "../schemas/schemas_5_Profiling";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecommendationsCommand}.
 */
export interface GetRecommendationsCommandInput extends GetRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommendationsCommand}.
 */
export interface GetRecommendationsCommandOutput extends GetRecommendationsResponse, __MetadataBearer {}

/**
 * <p>
 *             Returns a list of
 *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html">
 *                <code>Recommendation</code>
 *             </a>
 *             objects that contain recommendations for a profiling group for a given time period. A list of
 *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html">
 *                <code>Anomaly</code>
 *             </a>
 *             objects that contains details about anomalies detected in the profiling group for the same time period is also
 *             returned.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, GetRecommendationsCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, GetRecommendationsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // GetRecommendationsRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   locale: "STRING_VALUE",
 * };
 * const command = new GetRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommendationsResponse
 * //   profilingGroupName: "STRING_VALUE", // required
 * //   profileStartTime: new Date("TIMESTAMP"), // required
 * //   profileEndTime: new Date("TIMESTAMP"), // required
 * //   recommendations: [ // Recommendations // required
 * //     { // Recommendation
 * //       allMatchesCount: Number("int"), // required
 * //       allMatchesSum: Number("double"), // required
 * //       pattern: { // Pattern
 * //         id: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         resolutionSteps: "STRING_VALUE",
 * //         targetFrames: [ // TargetFrames
 * //           [ // TargetFrame
 * //             "STRING_VALUE",
 * //           ],
 * //         ],
 * //         thresholdPercent: Number("double"),
 * //         countersToAggregate: [ // Strings
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       topMatches: [ // Matches // required
 * //         { // Match
 * //           targetFramesIndex: Number("int"),
 * //           frameAddress: "STRING_VALUE",
 * //           thresholdBreachValue: Number("double"),
 * //         },
 * //       ],
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       endTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   anomalies: [ // Anomalies // required
 * //     { // Anomaly
 * //       metric: { // Metric
 * //         frameName: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         threadStates: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       reason: "STRING_VALUE", // required
 * //       instances: [ // AnomalyInstances // required
 * //         { // AnomalyInstance
 * //           id: "STRING_VALUE", // required
 * //           startTime: new Date("TIMESTAMP"), // required
 * //           endTime: new Date("TIMESTAMP"),
 * //           userFeedback: { // UserFeedback
 * //             type: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRecommendationsCommandInput - {@link GetRecommendationsCommandInput}
 * @returns {@link GetRecommendationsCommandOutput}
 * @see {@link GetRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link CodeGuruProfilerServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruProfiler service.</p>
 *
 *
 * @public
 */
export class GetRecommendationsCommand extends $Command
  .classBuilder<
    GetRecommendationsCommandInput,
    GetRecommendationsCommandOutput,
    CodeGuruProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruProfilerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeGuruProfiler", "GetRecommendations", {})
  .n("CodeGuruProfilerClient", "GetRecommendationsCommand")
  .sc(GetRecommendations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecommendationsRequest;
      output: GetRecommendationsResponse;
    };
    sdk: {
      input: GetRecommendationsCommandInput;
      output: GetRecommendationsCommandOutput;
    };
  };
}
