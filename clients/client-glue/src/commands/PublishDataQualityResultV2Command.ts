// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PublishDataQualityResultV2Request, PublishDataQualityResultV2Response } from "../models/models_2";
import { PublishDataQualityResultV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PublishDataQualityResultV2Command}.
 */
export interface PublishDataQualityResultV2CommandInput extends PublishDataQualityResultV2Request {}
/**
 * @public
 *
 * The output of {@link PublishDataQualityResultV2Command}.
 */
export interface PublishDataQualityResultV2CommandOutput extends PublishDataQualityResultV2Response, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is intended for internal use. Do not call it directly.</p>
 *          </note>
 *          <p>AWS Glue Data Quality uses this operation to publish a data quality result.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PublishDataQualityResultV2Command } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PublishDataQualityResultV2Command } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // PublishDataQualityResultV2Request
 *   Dimensions: { // PublishDataQualityResultDimensions // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Tags: { // PublishDataQualityResultTags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ExecutionStartedOn: new Date("TIMESTAMP"),
 *   ExecutionCompletedOn: new Date("TIMESTAMP"),
 *   Score: Number("double"), // required
 *   RuleResults: [ // DataQualityRuleResults // required
 *     { // DataQualityRuleResult
 *       Name: "STRING_VALUE",
 *       Description: "STRING_VALUE",
 *       EvaluationMessage: "STRING_VALUE",
 *       Result: "PASS" || "FAIL" || "ERROR",
 *       EvaluatedMetrics: { // EvaluatedMetricsMap
 *         "<keys>": Number("double"),
 *       },
 *       EvaluatedRule: "STRING_VALUE",
 *       RuleMetrics: { // RuleMetricsMap
 *         "<keys>": Number("double"),
 *       },
 *       Labels: { // Labels
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   AnalyzerResults: [ // DataQualityAnalyzerResults
 *     { // DataQualityAnalyzerResult
 *       Name: "STRING_VALUE",
 *       Description: "STRING_VALUE",
 *       EvaluationMessage: "STRING_VALUE",
 *       EvaluatedMetrics: {
 *         "<keys>": Number("double"),
 *       },
 *       EvaluatedDistributions: { // EvaluatedDistributionsMap
 *         "<keys>": { // DistributionData
 *           BinEdges: [ // BinEdges
 *             "STRING_VALUE",
 *           ],
 *           Count: [ // Count
 *             Number("int"),
 *           ],
 *           DataType: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 *   Observations: [ // DataQualityObservations
 *     { // DataQualityObservation
 *       Description: "STRING_VALUE",
 *       MetricBasedObservation: { // MetricBasedObservation
 *         MetricName: "STRING_VALUE",
 *         StatisticId: "STRING_VALUE",
 *         MetricValues: { // DataQualityMetricValues
 *           ActualValue: Number("double"),
 *           ExpectedValue: Number("double"),
 *           LowerLimit: Number("double"),
 *           UpperLimit: Number("double"),
 *         },
 *         NewRules: [ // NewRules
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   AggregatedMetrics: { // DataQualityAggregatedMetrics
 *     TotalRowsProcessed: Number("double"),
 *     TotalRowsPassed: Number("double"),
 *     TotalRowsFailed: Number("double"),
 *     TotalRulesProcessed: Number("double"),
 *     TotalRulesPassed: Number("double"),
 *     TotalRulesFailed: Number("double"),
 *   },
 *   Statistics: [ // StatisticSummaryList
 *     { // StatisticSummary
 *       StatisticId: "STRING_VALUE",
 *       ProfileId: "STRING_VALUE",
 *       RunIdentifier: { // RunIdentifier
 *         RunId: "STRING_VALUE",
 *         JobRunId: "STRING_VALUE",
 *       },
 *       StatisticName: "STRING_VALUE",
 *       DoubleValue: Number("double"),
 *       DistributionValue: {
 *         BinEdges: [
 *           "STRING_VALUE",
 *         ],
 *         Count: [
 *           Number("int"),
 *         ],
 *         DataType: "STRING_VALUE",
 *       },
 *       EvaluationLevel: "Dataset" || "Column" || "Multicolumn",
 *       ColumnsReferenced: [ // ColumnNameList
 *         "STRING_VALUE",
 *       ],
 *       ReferencedDatasets: [ // ReferenceDatasetsList
 *         "STRING_VALUE",
 *       ],
 *       StatisticProperties: { // StatisticPropertiesMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       RecordedOn: new Date("TIMESTAMP"),
 *       InclusionAnnotation: { // TimestampedInclusionAnnotation
 *         Value: "INCLUDE" || "EXCLUDE",
 *         LastModifiedOn: new Date("TIMESTAMP"),
 *       },
 *     },
 *   ],
 *   RunConfiguration: { // DataQualityConfigurationV2
 *     ObservationsEnabled: "ALL" || "NONE",
 *     ObservationMode: "SCHEDULED" || "FIXED",
 *   },
 *   ClientToken: "STRING_VALUE",
 *   EvaluationContext: "STRING_VALUE", // required
 *   Descriptors: { // PublishDataQualityResultDescriptors
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RulesetName: "STRING_VALUE",
 *   DataQualitySecurityConfiguration: "STRING_VALUE",
 *   Telemetry: { // DataQualityTelemetry
 *     VcpuHours: Number("double"),
 *     FlagsEnabled: { // DataQualityFlagsEnabled
 *       "<keys>": "STRING_VALUE",
 *     },
 *     LibraryVersion: "STRING_VALUE",
 *     SparkVersion: "STRING_VALUE",
 *     HostRuntimeVersion: "STRING_VALUE",
 *     Engine: "SPARK" || "PYTHON",
 *   },
 * };
 * const command = new PublishDataQualityResultV2Command(input);
 * const response = await client.send(command);
 * // { // PublishDataQualityResultV2Response
 * //   ResultId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PublishDataQualityResultV2CommandInput - {@link PublishDataQualityResultV2CommandInput}
 * @returns {@link PublishDataQualityResultV2CommandOutput}
 * @see {@link PublishDataQualityResultV2CommandInput} for command's `input` shape.
 * @see {@link PublishDataQualityResultV2CommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The same unique identifier was associated with two different records.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class PublishDataQualityResultV2Command extends command<PublishDataQualityResultV2CommandInput, PublishDataQualityResultV2CommandOutput>(
  _ep0,
  _mw0,
  "PublishDataQualityResultV2",
  PublishDataQualityResultV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishDataQualityResultV2Request;
      output: PublishDataQualityResultV2Response;
    };
    sdk: {
      input: PublishDataQualityResultV2CommandInput;
      output: PublishDataQualityResultV2CommandOutput;
    };
  };
}
