// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { ListAnomaliesForInsightRequest, ListAnomaliesForInsightResponse } from "../models/models_0";
import { de_ListAnomaliesForInsightCommand, se_ListAnomaliesForInsightCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAnomaliesForInsightCommand}.
 */
export interface ListAnomaliesForInsightCommandInput extends ListAnomaliesForInsightRequest {}
/**
 * @public
 *
 * The output of {@link ListAnomaliesForInsightCommand}.
 */
export interface ListAnomaliesForInsightCommandOutput extends ListAnomaliesForInsightResponse, __MetadataBearer {}

/**
 * @public
 * <p> Returns a list of the anomalies that belong to an insight that you specify using its
 * 			ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListAnomaliesForInsightCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListAnomaliesForInsightCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // ListAnomaliesForInsightRequest
 *   InsightId: "STRING_VALUE", // required
 *   StartTimeRange: { // StartTimeRange
 *     FromTime: new Date("TIMESTAMP"),
 *     ToTime: new Date("TIMESTAMP"),
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   AccountId: "STRING_VALUE",
 *   Filters: { // ListAnomaliesForInsightFilters
 *     ServiceCollection: { // ServiceCollection
 *       ServiceNames: [ // ServiceNames
 *         "API_GATEWAY" || "APPLICATION_ELB" || "AUTO_SCALING_GROUP" || "CLOUD_FRONT" || "DYNAMO_DB" || "EC2" || "ECS" || "EKS" || "ELASTIC_BEANSTALK" || "ELASTI_CACHE" || "ELB" || "ES" || "KINESIS" || "LAMBDA" || "NAT_GATEWAY" || "NETWORK_ELB" || "RDS" || "REDSHIFT" || "ROUTE_53" || "S3" || "SAGE_MAKER" || "SNS" || "SQS" || "STEP_FUNCTIONS" || "SWF",
 *       ],
 *     },
 *   },
 * };
 * const command = new ListAnomaliesForInsightCommand(input);
 * const response = await client.send(command);
 * // { // ListAnomaliesForInsightResponse
 * //   ProactiveAnomalies: [ // ProactiveAnomalies
 * //     { // ProactiveAnomalySummary
 * //       Id: "STRING_VALUE",
 * //       Severity: "LOW" || "MEDIUM" || "HIGH",
 * //       Status: "ONGOING" || "CLOSED",
 * //       UpdateTime: new Date("TIMESTAMP"),
 * //       AnomalyTimeRange: { // AnomalyTimeRange
 * //         StartTime: new Date("TIMESTAMP"), // required
 * //         EndTime: new Date("TIMESTAMP"),
 * //       },
 * //       AnomalyReportedTimeRange: { // AnomalyReportedTimeRange
 * //         OpenTime: new Date("TIMESTAMP"), // required
 * //         CloseTime: new Date("TIMESTAMP"),
 * //       },
 * //       PredictionTimeRange: { // PredictionTimeRange
 * //         StartTime: new Date("TIMESTAMP"), // required
 * //         EndTime: new Date("TIMESTAMP"),
 * //       },
 * //       SourceDetails: { // AnomalySourceDetails
 * //         CloudWatchMetrics: [ // CloudWatchMetricsDetails
 * //           { // CloudWatchMetricsDetail
 * //             MetricName: "STRING_VALUE",
 * //             Namespace: "STRING_VALUE",
 * //             Dimensions: [ // CloudWatchMetricsDimensions
 * //               { // CloudWatchMetricsDimension
 * //                 Name: "STRING_VALUE",
 * //                 Value: "STRING_VALUE",
 * //               },
 * //             ],
 * //             Stat: "Sum" || "Average" || "SampleCount" || "Minimum" || "Maximum" || "p99" || "p90" || "p50",
 * //             Unit: "STRING_VALUE",
 * //             Period: Number("int"),
 * //             MetricDataSummary: { // CloudWatchMetricsDataSummary
 * //               TimestampMetricValuePairList: [ // TimestampMetricValuePairList
 * //                 { // TimestampMetricValuePair
 * //                   Timestamp: new Date("TIMESTAMP"),
 * //                   MetricValue: Number("double"),
 * //                 },
 * //               ],
 * //               StatusCode: "Complete" || "InternalError" || "PartialData",
 * //             },
 * //           },
 * //         ],
 * //         PerformanceInsightsMetrics: [ // PerformanceInsightsMetricsDetails
 * //           { // PerformanceInsightsMetricsDetail
 * //             MetricDisplayName: "STRING_VALUE",
 * //             Unit: "STRING_VALUE",
 * //             MetricQuery: { // PerformanceInsightsMetricQuery
 * //               Metric: "STRING_VALUE",
 * //               GroupBy: { // PerformanceInsightsMetricDimensionGroup
 * //                 Group: "STRING_VALUE",
 * //                 Dimensions: [ // PerformanceInsightsMetricDimensions
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 Limit: Number("int"),
 * //               },
 * //               Filter: { // PerformanceInsightsMetricFilterMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //             ReferenceData: [ // PerformanceInsightsReferenceDataList
 * //               { // PerformanceInsightsReferenceData
 * //                 Name: "STRING_VALUE",
 * //                 ComparisonValues: { // PerformanceInsightsReferenceComparisonValues
 * //                   ReferenceScalar: { // PerformanceInsightsReferenceScalar
 * //                     Value: Number("double"),
 * //                   },
 * //                   ReferenceMetric: { // PerformanceInsightsReferenceMetric
 * //                     MetricQuery: {
 * //                       Metric: "STRING_VALUE",
 * //                       GroupBy: {
 * //                         Group: "STRING_VALUE",
 * //                         Dimensions: [
 * //                           "STRING_VALUE",
 * //                         ],
 * //                         Limit: Number("int"),
 * //                       },
 * //                       Filter: {
 * //                         "<keys>": "STRING_VALUE",
 * //                       },
 * //                     },
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             StatsAtAnomaly: [ // PerformanceInsightsStats
 * //               { // PerformanceInsightsStat
 * //                 Type: "STRING_VALUE",
 * //                 Value: Number("double"),
 * //               },
 * //             ],
 * //             StatsAtBaseline: [
 * //               {
 * //                 Type: "STRING_VALUE",
 * //                 Value: Number("double"),
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       AssociatedInsightId: "STRING_VALUE",
 * //       ResourceCollection: { // ResourceCollection
 * //         CloudFormation: { // CloudFormationCollection
 * //           StackNames: [ // StackNames
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Tags: [ // TagCollections
 * //           { // TagCollection
 * //             AppBoundaryKey: "STRING_VALUE", // required
 * //             TagValues: [ // TagValues // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       Limit: Number("double"),
 * //       SourceMetadata: { // AnomalySourceMetadata
 * //         Source: "STRING_VALUE",
 * //         SourceResourceName: "STRING_VALUE",
 * //         SourceResourceType: "STRING_VALUE",
 * //       },
 * //       AnomalyResources: [ // AnomalyResources
 * //         { // AnomalyResource
 * //           Name: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ReactiveAnomalies: [ // ReactiveAnomalies
 * //     { // ReactiveAnomalySummary
 * //       Id: "STRING_VALUE",
 * //       Severity: "LOW" || "MEDIUM" || "HIGH",
 * //       Status: "ONGOING" || "CLOSED",
 * //       AnomalyTimeRange: {
 * //         StartTime: new Date("TIMESTAMP"), // required
 * //         EndTime: new Date("TIMESTAMP"),
 * //       },
 * //       AnomalyReportedTimeRange: {
 * //         OpenTime: new Date("TIMESTAMP"), // required
 * //         CloseTime: new Date("TIMESTAMP"),
 * //       },
 * //       SourceDetails: {
 * //         CloudWatchMetrics: [
 * //           {
 * //             MetricName: "STRING_VALUE",
 * //             Namespace: "STRING_VALUE",
 * //             Dimensions: [
 * //               {
 * //                 Name: "STRING_VALUE",
 * //                 Value: "STRING_VALUE",
 * //               },
 * //             ],
 * //             Stat: "Sum" || "Average" || "SampleCount" || "Minimum" || "Maximum" || "p99" || "p90" || "p50",
 * //             Unit: "STRING_VALUE",
 * //             Period: Number("int"),
 * //             MetricDataSummary: {
 * //               TimestampMetricValuePairList: [
 * //                 {
 * //                   Timestamp: new Date("TIMESTAMP"),
 * //                   MetricValue: Number("double"),
 * //                 },
 * //               ],
 * //               StatusCode: "Complete" || "InternalError" || "PartialData",
 * //             },
 * //           },
 * //         ],
 * //         PerformanceInsightsMetrics: [
 * //           {
 * //             MetricDisplayName: "STRING_VALUE",
 * //             Unit: "STRING_VALUE",
 * //             MetricQuery: {
 * //               Metric: "STRING_VALUE",
 * //               GroupBy: {
 * //                 Group: "STRING_VALUE",
 * //                 Dimensions: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 Limit: Number("int"),
 * //               },
 * //               Filter: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //             ReferenceData: [
 * //               {
 * //                 Name: "STRING_VALUE",
 * //                 ComparisonValues: {
 * //                   ReferenceScalar: {
 * //                     Value: Number("double"),
 * //                   },
 * //                   ReferenceMetric: {
 * //                     MetricQuery: {
 * //                       Metric: "STRING_VALUE",
 * //                       GroupBy: {
 * //                         Group: "STRING_VALUE",
 * //                         Dimensions: [
 * //                           "STRING_VALUE",
 * //                         ],
 * //                         Limit: Number("int"),
 * //                       },
 * //                       Filter: {
 * //                         "<keys>": "STRING_VALUE",
 * //                       },
 * //                     },
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             StatsAtAnomaly: [
 * //               {
 * //                 Type: "STRING_VALUE",
 * //                 Value: Number("double"),
 * //               },
 * //             ],
 * //             StatsAtBaseline: [
 * //               {
 * //                 Type: "STRING_VALUE",
 * //                 Value: Number("double"),
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       AssociatedInsightId: "STRING_VALUE",
 * //       ResourceCollection: {
 * //         CloudFormation: {
 * //           StackNames: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Tags: [
 * //           {
 * //             AppBoundaryKey: "STRING_VALUE", // required
 * //             TagValues: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       Type: "CAUSAL" || "CONTEXTUAL",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CausalAnomalyId: "STRING_VALUE",
 * //       AnomalyResources: [
 * //         {
 * //           Name: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnomaliesForInsightCommandInput - {@link ListAnomaliesForInsightCommandInput}
 * @returns {@link ListAnomaliesForInsightCommandOutput}
 * @see {@link ListAnomaliesForInsightCommandInput} for command's `input` shape.
 * @see {@link ListAnomaliesForInsightCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource could not be found</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 */
export class ListAnomaliesForInsightCommand extends $Command<
  ListAnomaliesForInsightCommandInput,
  ListAnomaliesForInsightCommandOutput,
  DevOpsGuruClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListAnomaliesForInsightCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAnomaliesForInsightCommandInput, ListAnomaliesForInsightCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAnomaliesForInsightCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "ListAnomaliesForInsightCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CapstoneControlPlaneService",
        operation: "ListAnomaliesForInsight",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListAnomaliesForInsightCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAnomaliesForInsightCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAnomaliesForInsightCommandOutput> {
    return de_ListAnomaliesForInsightCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
