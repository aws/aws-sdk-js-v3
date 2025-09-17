// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { CreateMetricSetRequest, CreateMetricSetResponse } from "../models/models_0";
import { de_CreateMetricSetCommand, se_CreateMetricSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMetricSetCommand}.
 */
export interface CreateMetricSetCommandInput extends CreateMetricSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateMetricSetCommand}.
 */
export interface CreateMetricSetCommandOutput extends CreateMetricSetResponse, __MetadataBearer {}

/**
 * <p>Creates a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, CreateMetricSetCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, CreateMetricSetCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * // import type { LookoutMetricsClientConfig } from "@aws-sdk/client-lookoutmetrics";
 * const config = {}; // type is LookoutMetricsClientConfig
 * const client = new LookoutMetricsClient(config);
 * const input = { // CreateMetricSetRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 *   MetricSetName: "STRING_VALUE", // required
 *   MetricSetDescription: "STRING_VALUE",
 *   MetricList: [ // MetricList // required
 *     { // Metric
 *       MetricName: "STRING_VALUE", // required
 *       AggregationFunction: "AVG" || "SUM", // required
 *       Namespace: "STRING_VALUE",
 *     },
 *   ],
 *   Offset: Number("int"),
 *   TimestampColumn: { // TimestampColumn
 *     ColumnName: "STRING_VALUE",
 *     ColumnFormat: "STRING_VALUE",
 *   },
 *   DimensionList: [ // DimensionList
 *     "STRING_VALUE",
 *   ],
 *   MetricSetFrequency: "P1D" || "PT1H" || "PT10M" || "PT5M",
 *   MetricSource: { // MetricSource
 *     S3SourceConfig: { // S3SourceConfig
 *       RoleArn: "STRING_VALUE",
 *       TemplatedPathList: [ // TemplatedPathList
 *         "STRING_VALUE",
 *       ],
 *       HistoricalDataPathList: [ // HistoricalDataPathList
 *         "STRING_VALUE",
 *       ],
 *       FileFormatDescriptor: { // FileFormatDescriptor
 *         CsvFormatDescriptor: { // CsvFormatDescriptor
 *           FileCompression: "NONE" || "GZIP",
 *           Charset: "STRING_VALUE",
 *           ContainsHeader: true || false,
 *           Delimiter: "STRING_VALUE",
 *           HeaderList: [ // HeaderList
 *             "STRING_VALUE",
 *           ],
 *           QuoteSymbol: "STRING_VALUE",
 *         },
 *         JsonFormatDescriptor: { // JsonFormatDescriptor
 *           FileCompression: "NONE" || "GZIP",
 *           Charset: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     AppFlowConfig: { // AppFlowConfig
 *       RoleArn: "STRING_VALUE",
 *       FlowName: "STRING_VALUE",
 *     },
 *     CloudWatchConfig: { // CloudWatchConfig
 *       RoleArn: "STRING_VALUE",
 *       BackTestConfiguration: { // BackTestConfiguration
 *         RunBackTestMode: true || false, // required
 *       },
 *     },
 *     RDSSourceConfig: { // RDSSourceConfig
 *       DBInstanceIdentifier: "STRING_VALUE",
 *       DatabaseHost: "STRING_VALUE",
 *       DatabasePort: Number("int"),
 *       SecretManagerArn: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *       TableName: "STRING_VALUE",
 *       RoleArn: "STRING_VALUE",
 *       VpcConfiguration: { // VpcConfiguration
 *         SubnetIdList: [ // SubnetIdList // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIdList: [ // SecurityGroupIdList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     RedshiftSourceConfig: { // RedshiftSourceConfig
 *       ClusterIdentifier: "STRING_VALUE",
 *       DatabaseHost: "STRING_VALUE",
 *       DatabasePort: Number("int"),
 *       SecretManagerArn: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *       TableName: "STRING_VALUE",
 *       RoleArn: "STRING_VALUE",
 *       VpcConfiguration: {
 *         SubnetIdList: [ // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIdList: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     AthenaSourceConfig: { // AthenaSourceConfig
 *       RoleArn: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *       DataCatalog: "STRING_VALUE",
 *       TableName: "STRING_VALUE",
 *       WorkGroupName: "STRING_VALUE",
 *       S3ResultsPath: "STRING_VALUE",
 *       BackTestConfiguration: {
 *         RunBackTestMode: true || false, // required
 *       },
 *     },
 *   },
 *   Timezone: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DimensionFilterList: [ // MetricSetDimensionFilterList
 *     { // MetricSetDimensionFilter
 *       Name: "STRING_VALUE",
 *       FilterList: [ // FilterList
 *         { // Filter
 *           DimensionValue: "STRING_VALUE",
 *           FilterOperation: "EQUALS",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateMetricSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateMetricSetResponse
 * //   MetricSetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMetricSetCommandInput - {@link CreateMetricSetCommandInput}
 * @returns {@link CreateMetricSetCommandOutput}
 * @see {@link CreateMetricSetCommandInput} for command's `input` shape.
 * @see {@link CreateMetricSetCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Try your request again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded the service's quotas. Check the service quotas and try again.</p>
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
export class CreateMetricSetCommand extends $Command
  .classBuilder<
    CreateMetricSetCommandInput,
    CreateMetricSetCommandOutput,
    LookoutMetricsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutMetricsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LookoutMetrics", "CreateMetricSet", {})
  .n("LookoutMetricsClient", "CreateMetricSetCommand")
  .f(void 0, void 0)
  .ser(se_CreateMetricSetCommand)
  .de(de_CreateMetricSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMetricSetRequest;
      output: CreateMetricSetResponse;
    };
    sdk: {
      input: CreateMetricSetCommandInput;
      output: CreateMetricSetCommandOutput;
    };
  };
}
