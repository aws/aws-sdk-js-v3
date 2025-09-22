// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { ListAnomalyGroupSummariesRequest, ListAnomalyGroupSummariesResponse } from "../models/models_0";
import { ListAnomalyGroupSummaries } from "../schemas/schemas_1_Group";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnomalyGroupSummariesCommand}.
 */
export interface ListAnomalyGroupSummariesCommandInput extends ListAnomalyGroupSummariesRequest {}
/**
 * @public
 *
 * The output of {@link ListAnomalyGroupSummariesCommand}.
 */
export interface ListAnomalyGroupSummariesCommandOutput extends ListAnomalyGroupSummariesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of anomaly groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListAnomalyGroupSummariesCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ListAnomalyGroupSummariesCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * // import type { LookoutMetricsClientConfig } from "@aws-sdk/client-lookoutmetrics";
 * const config = {}; // type is LookoutMetricsClientConfig
 * const client = new LookoutMetricsClient(config);
 * const input = { // ListAnomalyGroupSummariesRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 *   SensitivityThreshold: Number("int"), // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAnomalyGroupSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListAnomalyGroupSummariesResponse
 * //   AnomalyGroupSummaryList: [ // AnomalyGroupSummaryList
 * //     { // AnomalyGroupSummary
 * //       StartTime: "STRING_VALUE",
 * //       EndTime: "STRING_VALUE",
 * //       AnomalyGroupId: "STRING_VALUE",
 * //       AnomalyGroupScore: Number("double"),
 * //       PrimaryMetricName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   AnomalyGroupStatistics: { // AnomalyGroupStatistics
 * //     EvaluationStartDate: "STRING_VALUE",
 * //     TotalCount: Number("int"),
 * //     ItemizedMetricStatsList: [ // ItemizedMetricStatsList
 * //       { // ItemizedMetricStats
 * //         MetricName: "STRING_VALUE",
 * //         OccurrenceCount: Number("int"),
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnomalyGroupSummariesCommandInput - {@link ListAnomalyGroupSummariesCommandInput}
 * @returns {@link ListAnomalyGroupSummariesCommandOutput}
 * @see {@link ListAnomalyGroupSummariesCommandInput} for command's `input` shape.
 * @see {@link ListAnomalyGroupSummariesCommandOutput} for command's `response` shape.
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
export class ListAnomalyGroupSummariesCommand extends $Command
  .classBuilder<
    ListAnomalyGroupSummariesCommandInput,
    ListAnomalyGroupSummariesCommandOutput,
    LookoutMetricsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutMetricsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LookoutMetrics", "ListAnomalyGroupSummaries", {})
  .n("LookoutMetricsClient", "ListAnomalyGroupSummariesCommand")
  .sc(ListAnomalyGroupSummaries)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnomalyGroupSummariesRequest;
      output: ListAnomalyGroupSummariesResponse;
    };
    sdk: {
      input: ListAnomalyGroupSummariesCommandInput;
      output: ListAnomalyGroupSummariesCommandOutput;
    };
  };
}
