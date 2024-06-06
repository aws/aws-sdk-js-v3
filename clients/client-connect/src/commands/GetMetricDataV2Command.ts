// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetMetricDataV2Request, GetMetricDataV2Response } from "../models/models_1";
import { de_GetMetricDataV2Command, se_GetMetricDataV2Command } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMetricDataV2Command}.
 */
export interface GetMetricDataV2CommandInput extends GetMetricDataV2Request {}
/**
 * @public
 *
 * The output of {@link GetMetricDataV2Command}.
 */
export interface GetMetricDataV2CommandOutput extends GetMetricDataV2Response, __MetadataBearer {}

/**
 * <p>Gets metric data from the specified Amazon Connect instance. </p>
 *          <p>
 *             <code>GetMetricDataV2</code> offers more features than <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricData.html">GetMetricData</a>, the previous
 *    version of this API. It has new metrics, offers filtering at a metric level, and offers the
 *    ability to filter and group data by channels, queues, routing profiles, agents, and agent
 *    hierarchy levels. It can retrieve historical data for the last 3 months, at varying intervals. </p>
 *          <p>For a description of the historical metrics that are supported by
 *     <code>GetMetricDataV2</code> and <code>GetMetricData</code>, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical metrics
 *     definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetMetricDataV2Command } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetMetricDataV2Command } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // GetMetricDataV2Request
 *   ResourceArn: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   Interval: { // IntervalDetails
 *     TimeZone: "STRING_VALUE",
 *     IntervalPeriod: "FIFTEEN_MIN" || "THIRTY_MIN" || "HOUR" || "DAY" || "WEEK" || "TOTAL",
 *   },
 *   Filters: [ // FiltersV2List // required
 *     { // FilterV2
 *       FilterKey: "STRING_VALUE",
 *       FilterValues: [ // FilterValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Groupings: [ // GroupingsV2
 *     "STRING_VALUE",
 *   ],
 *   Metrics: [ // MetricsV2 // required
 *     { // MetricV2
 *       Name: "STRING_VALUE",
 *       Threshold: [ // ThresholdCollections
 *         { // ThresholdV2
 *           Comparison: "STRING_VALUE",
 *           ThresholdValue: Number("double"),
 *         },
 *       ],
 *       MetricFilters: [ // MetricFiltersV2List
 *         { // MetricFilterV2
 *           MetricFilterKey: "STRING_VALUE",
 *           MetricFilterValues: [ // MetricFilterValueList
 *             "STRING_VALUE",
 *           ],
 *           Negate: true || false,
 *         },
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetMetricDataV2Command(input);
 * const response = await client.send(command);
 * // { // GetMetricDataV2Response
 * //   NextToken: "STRING_VALUE",
 * //   MetricResults: [ // MetricResultsV2
 * //     { // MetricResultV2
 * //       Dimensions: { // DimensionsV2Map
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       MetricInterval: { // MetricInterval
 * //         Interval: "FIFTEEN_MIN" || "THIRTY_MIN" || "HOUR" || "DAY" || "WEEK" || "TOTAL",
 * //         StartTime: new Date("TIMESTAMP"),
 * //         EndTime: new Date("TIMESTAMP"),
 * //       },
 * //       Collections: [ // MetricDataCollectionsV2
 * //         { // MetricDataV2
 * //           Metric: { // MetricV2
 * //             Name: "STRING_VALUE",
 * //             Threshold: [ // ThresholdCollections
 * //               { // ThresholdV2
 * //                 Comparison: "STRING_VALUE",
 * //                 ThresholdValue: Number("double"),
 * //               },
 * //             ],
 * //             MetricFilters: [ // MetricFiltersV2List
 * //               { // MetricFilterV2
 * //                 MetricFilterKey: "STRING_VALUE",
 * //                 MetricFilterValues: [ // MetricFilterValueList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 Negate: true || false,
 * //               },
 * //             ],
 * //           },
 * //           Value: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMetricDataV2CommandInput - {@link GetMetricDataV2CommandInput}
 * @returns {@link GetMetricDataV2CommandOutput}
 * @see {@link GetMetricDataV2CommandInput} for command's `input` shape.
 * @see {@link GetMetricDataV2CommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class GetMetricDataV2Command extends $Command
  .classBuilder<
    GetMetricDataV2CommandInput,
    GetMetricDataV2CommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "GetMetricDataV2", {})
  .n("ConnectClient", "GetMetricDataV2Command")
  .f(void 0, void 0)
  .ser(se_GetMetricDataV2Command)
  .de(de_GetMetricDataV2Command)
  .build() {}
