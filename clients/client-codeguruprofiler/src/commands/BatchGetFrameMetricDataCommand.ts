// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetFrameMetricDataRequest, BatchGetFrameMetricDataResponse } from "../models/models_0";
import { BatchGetFrameMetricData } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetFrameMetricDataCommand}.
 */
export interface BatchGetFrameMetricDataCommandInput extends BatchGetFrameMetricDataRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetFrameMetricDataCommand}.
 */
export interface BatchGetFrameMetricDataCommandOutput extends BatchGetFrameMetricDataResponse, __MetadataBearer {}

/**
 * <p>
 *          Returns the time series of values for a requested list
 *          of frame metrics from a time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, BatchGetFrameMetricDataCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, BatchGetFrameMetricDataCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // BatchGetFrameMetricDataRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   period: "STRING_VALUE",
 *   targetResolution: "STRING_VALUE",
 *   frameMetrics: [ // FrameMetrics
 *     { // FrameMetric
 *       frameName: "STRING_VALUE", // required
 *       type: "STRING_VALUE", // required
 *       threadStates: [ // ThreadStates // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchGetFrameMetricDataCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetFrameMetricDataResponse
 * //   startTime: new Date("TIMESTAMP"), // required
 * //   endTime: new Date("TIMESTAMP"), // required
 * //   resolution: "STRING_VALUE", // required
 * //   endTimes: [ // ListOfTimestamps // required
 * //     { // TimestampStructure
 * //       value: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   unprocessedEndTimes: { // UnprocessedEndTimeMap // required
 * //     "<keys>": [
 * //       {
 * //         value: new Date("TIMESTAMP"), // required
 * //       },
 * //     ],
 * //   },
 * //   frameMetricData: [ // FrameMetricData // required
 * //     { // FrameMetricDatum
 * //       frameMetric: { // FrameMetric
 * //         frameName: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         threadStates: [ // ThreadStates // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       values: [ // FrameMetricValues // required
 * //         Number("double"),
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetFrameMetricDataCommandInput - {@link BatchGetFrameMetricDataCommandInput}
 * @returns {@link BatchGetFrameMetricDataCommandOutput}
 * @see {@link BatchGetFrameMetricDataCommandInput} for command's `input` shape.
 * @see {@link BatchGetFrameMetricDataCommandOutput} for command's `response` shape.
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
export class BatchGetFrameMetricDataCommand extends $Command
  .classBuilder<
    BatchGetFrameMetricDataCommandInput,
    BatchGetFrameMetricDataCommandOutput,
    CodeGuruProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruProfilerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeGuruProfiler", "BatchGetFrameMetricData", {})
  .n("CodeGuruProfilerClient", "BatchGetFrameMetricDataCommand")
  .sc(BatchGetFrameMetricData)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetFrameMetricDataRequest;
      output: BatchGetFrameMetricDataResponse;
    };
    sdk: {
      input: BatchGetFrameMetricDataCommandInput;
      output: BatchGetFrameMetricDataCommandOutput;
    };
  };
}
