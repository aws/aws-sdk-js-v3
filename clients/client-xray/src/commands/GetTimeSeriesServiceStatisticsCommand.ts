// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTimeSeriesServiceStatisticsRequest, GetTimeSeriesServiceStatisticsResult } from "../models/models_0";
import { GetTimeSeriesServiceStatistics } from "../schemas/schemas_3_Get";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTimeSeriesServiceStatisticsCommand}.
 */
export interface GetTimeSeriesServiceStatisticsCommandInput extends GetTimeSeriesServiceStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetTimeSeriesServiceStatisticsCommand}.
 */
export interface GetTimeSeriesServiceStatisticsCommandOutput
  extends GetTimeSeriesServiceStatisticsResult,
    __MetadataBearer {}

/**
 * <p>Get an aggregation of service statistics defined by a specific time
 *             range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetTimeSeriesServiceStatisticsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetTimeSeriesServiceStatisticsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // GetTimeSeriesServiceStatisticsRequest
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   GroupName: "STRING_VALUE",
 *   GroupARN: "STRING_VALUE",
 *   EntitySelectorExpression: "STRING_VALUE",
 *   Period: Number("int"),
 *   ForecastStatistics: true || false,
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetTimeSeriesServiceStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetTimeSeriesServiceStatisticsResult
 * //   TimeSeriesServiceStatistics: [ // TimeSeriesServiceStatisticsList
 * //     { // TimeSeriesServiceStatistics
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       EdgeSummaryStatistics: { // EdgeStatistics
 * //         OkCount: Number("long"),
 * //         ErrorStatistics: { // ErrorStatistics
 * //           ThrottleCount: Number("long"),
 * //           OtherCount: Number("long"),
 * //           TotalCount: Number("long"),
 * //         },
 * //         FaultStatistics: { // FaultStatistics
 * //           OtherCount: Number("long"),
 * //           TotalCount: Number("long"),
 * //         },
 * //         TotalCount: Number("long"),
 * //         TotalResponseTime: Number("double"),
 * //       },
 * //       ServiceSummaryStatistics: { // ServiceStatistics
 * //         OkCount: Number("long"),
 * //         ErrorStatistics: {
 * //           ThrottleCount: Number("long"),
 * //           OtherCount: Number("long"),
 * //           TotalCount: Number("long"),
 * //         },
 * //         FaultStatistics: {
 * //           OtherCount: Number("long"),
 * //           TotalCount: Number("long"),
 * //         },
 * //         TotalCount: Number("long"),
 * //         TotalResponseTime: Number("double"),
 * //       },
 * //       ServiceForecastStatistics: { // ForecastStatistics
 * //         FaultCountHigh: Number("long"),
 * //         FaultCountLow: Number("long"),
 * //       },
 * //       ResponseTimeHistogram: [ // Histogram
 * //         { // HistogramEntry
 * //           Value: Number("double"),
 * //           Count: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   ContainsOldGroupVersions: true || false,
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTimeSeriesServiceStatisticsCommandInput - {@link GetTimeSeriesServiceStatisticsCommandInput}
 * @returns {@link GetTimeSeriesServiceStatisticsCommandOutput}
 * @see {@link GetTimeSeriesServiceStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetTimeSeriesServiceStatisticsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 *
 * @public
 */
export class GetTimeSeriesServiceStatisticsCommand extends $Command
  .classBuilder<
    GetTimeSeriesServiceStatisticsCommandInput,
    GetTimeSeriesServiceStatisticsCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSXRay", "GetTimeSeriesServiceStatistics", {})
  .n("XRayClient", "GetTimeSeriesServiceStatisticsCommand")
  .sc(GetTimeSeriesServiceStatistics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTimeSeriesServiceStatisticsRequest;
      output: GetTimeSeriesServiceStatisticsResult;
    };
    sdk: {
      input: GetTimeSeriesServiceStatisticsCommandInput;
      output: GetTimeSeriesServiceStatisticsCommandOutput;
    };
  };
}
