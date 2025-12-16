// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetResourceMetricsRequest, GetResourceMetricsResponse } from "../models/models_0";
import type { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import { GetResourceMetrics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceMetricsCommand}.
 */
export interface GetResourceMetricsCommandInput extends GetResourceMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceMetricsCommand}.
 */
export interface GetResourceMetricsCommandOutput extends GetResourceMetricsResponse, __MetadataBearer {}

/**
 * <p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide
 *           specific dimension groups and dimensions, and provide filtering criteria for each group. You must specify an aggregate function for
 *           each metric.</p>
 *          <note>
 *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
 *                only the first 500 bytes are returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, GetResourceMetricsCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, GetResourceMetricsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * // import type { PIClientConfig } from "@aws-sdk/client-pi";
 * const config = {}; // type is PIClientConfig
 * const client = new PIClient(config);
 * const input = { // GetResourceMetricsRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   MetricQueries: [ // MetricQueryList // required
 *     { // MetricQuery
 *       Metric: "STRING_VALUE", // required
 *       GroupBy: { // DimensionGroup
 *         Group: "STRING_VALUE", // required
 *         Dimensions: [ // SanitizedStringList
 *           "STRING_VALUE",
 *         ],
 *         Limit: Number("int"),
 *       },
 *       Filter: { // MetricQueryFilterMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   PeriodInSeconds: Number("int"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   PeriodAlignment: "END_TIME" || "START_TIME",
 * };
 * const command = new GetResourceMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceMetricsResponse
 * //   AlignedStartTime: new Date("TIMESTAMP"),
 * //   AlignedEndTime: new Date("TIMESTAMP"),
 * //   Identifier: "STRING_VALUE",
 * //   MetricList: [ // MetricKeyDataPointsList
 * //     { // MetricKeyDataPoints
 * //       Key: { // ResponseResourceMetricKey
 * //         Metric: "STRING_VALUE", // required
 * //         Dimensions: { // DimensionMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       DataPoints: [ // DataPointsList
 * //         { // DataPoint
 * //           Timestamp: new Date("TIMESTAMP"), // required
 * //           Value: Number("double"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourceMetricsCommandInput - {@link GetResourceMetricsCommandInput}
 * @returns {@link GetResourceMetricsCommandOutput}
 * @see {@link GetResourceMetricsCommandInput} for command's `input` shape.
 * @see {@link GetResourceMetricsCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>The request failed due to an unknown error.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>One of the arguments provided is invalid for this request.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The user is not authorized to perform this request.</p>
 *
 * @throws {@link PIServiceException}
 * <p>Base exception class for all service exceptions from PI service.</p>
 *
 *
 * @public
 */
export class GetResourceMetricsCommand extends $Command
  .classBuilder<
    GetResourceMetricsCommandInput,
    GetResourceMetricsCommandOutput,
    PIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PIClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PerformanceInsightsv20180227", "GetResourceMetrics", {})
  .n("PIClient", "GetResourceMetricsCommand")
  .sc(GetResourceMetrics$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceMetricsRequest;
      output: GetResourceMetricsResponse;
    };
    sdk: {
      input: GetResourceMetricsCommandInput;
      output: GetResourceMetricsCommandOutput;
    };
  };
}
