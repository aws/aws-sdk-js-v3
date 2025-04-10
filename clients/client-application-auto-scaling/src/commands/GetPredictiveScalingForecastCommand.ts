// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationAutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationAutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetPredictiveScalingForecastRequest, GetPredictiveScalingForecastResponse } from "../models/models_0";
import {
  de_GetPredictiveScalingForecastCommand,
  se_GetPredictiveScalingForecastCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPredictiveScalingForecastCommand}.
 */
export interface GetPredictiveScalingForecastCommandInput extends GetPredictiveScalingForecastRequest {}
/**
 * @public
 *
 * The output of {@link GetPredictiveScalingForecastCommand}.
 */
export interface GetPredictiveScalingForecastCommandOutput
  extends GetPredictiveScalingForecastResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the forecast data for a predictive scaling policy.</p>
 *          <p>Load forecasts are predictions of the hourly load values using historical load data
 *          from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as
 *          predicted values for the minimum capacity that is needed on an hourly basis, based on
 *          the hourly load forecast.</p>
 *          <p>A minimum of 24 hours of data is required to create the initial forecasts. However,
 *          having a full 14 days of historical data results in more accurate forecasts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, GetPredictiveScalingForecastCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, GetPredictiveScalingForecastCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const input = { // GetPredictiveScalingForecastRequest
 *   ServiceNamespace: "ecs" || "elasticmapreduce" || "ec2" || "appstream" || "dynamodb" || "rds" || "sagemaker" || "custom-resource" || "comprehend" || "lambda" || "cassandra" || "kafka" || "elasticache" || "neptune" || "workspaces", // required
 *   ResourceId: "STRING_VALUE", // required
 *   ScalableDimension: "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "elasticmapreduce:instancegroup:InstanceCount" || "appstream:fleet:DesiredCapacity" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits" || "rds:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredInstanceCount" || "custom-resource:ResourceType:Property" || "comprehend:document-classifier-endpoint:DesiredInferenceUnits" || "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits" || "lambda:function:ProvisionedConcurrency" || "cassandra:table:ReadCapacityUnits" || "cassandra:table:WriteCapacityUnits" || "kafka:broker-storage:VolumeSize" || "elasticache:cache-cluster:Nodes" || "elasticache:replication-group:NodeGroups" || "elasticache:replication-group:Replicas" || "neptune:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredProvisionedConcurrency" || "sagemaker:inference-component:DesiredCopyCount" || "workspaces:workspacespool:DesiredUserSessions", // required
 *   PolicyName: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new GetPredictiveScalingForecastCommand(input);
 * const response = await client.send(command);
 * // { // GetPredictiveScalingForecastResponse
 * //   LoadForecast: [ // LoadForecasts
 * //     { // LoadForecast
 * //       Timestamps: [ // PredictiveScalingForecastTimestamps // required
 * //         new Date("TIMESTAMP"),
 * //       ],
 * //       Values: [ // PredictiveScalingForecastValues // required
 * //         Number("double"),
 * //       ],
 * //       MetricSpecification: { // PredictiveScalingMetricSpecification
 * //         TargetValue: Number("double"), // required
 * //         PredefinedMetricPairSpecification: { // PredictiveScalingPredefinedMetricPairSpecification
 * //           PredefinedMetricType: "STRING_VALUE", // required
 * //           ResourceLabel: "STRING_VALUE",
 * //         },
 * //         PredefinedScalingMetricSpecification: { // PredictiveScalingPredefinedScalingMetricSpecification
 * //           PredefinedMetricType: "STRING_VALUE", // required
 * //           ResourceLabel: "STRING_VALUE",
 * //         },
 * //         PredefinedLoadMetricSpecification: { // PredictiveScalingPredefinedLoadMetricSpecification
 * //           PredefinedMetricType: "STRING_VALUE", // required
 * //           ResourceLabel: "STRING_VALUE",
 * //         },
 * //         CustomizedScalingMetricSpecification: { // PredictiveScalingCustomizedMetricSpecification
 * //           MetricDataQueries: [ // PredictiveScalingMetricDataQueries // required
 * //             { // PredictiveScalingMetricDataQuery
 * //               Id: "STRING_VALUE", // required
 * //               Expression: "STRING_VALUE",
 * //               MetricStat: { // PredictiveScalingMetricStat
 * //                 Metric: { // PredictiveScalingMetric
 * //                   Dimensions: [ // PredictiveScalingMetricDimensions
 * //                     { // PredictiveScalingMetricDimension
 * //                       Name: "STRING_VALUE", // required
 * //                       Value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                   MetricName: "STRING_VALUE",
 * //                   Namespace: "STRING_VALUE",
 * //                 },
 * //                 Stat: "STRING_VALUE", // required
 * //                 Unit: "STRING_VALUE",
 * //               },
 * //               Label: "STRING_VALUE",
 * //               ReturnData: true || false,
 * //             },
 * //           ],
 * //         },
 * //         CustomizedLoadMetricSpecification: {
 * //           MetricDataQueries: [ // required
 * //             {
 * //               Id: "STRING_VALUE", // required
 * //               Expression: "STRING_VALUE",
 * //               MetricStat: {
 * //                 Metric: {
 * //                   Dimensions: [
 * //                     {
 * //                       Name: "STRING_VALUE", // required
 * //                       Value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                   MetricName: "STRING_VALUE",
 * //                   Namespace: "STRING_VALUE",
 * //                 },
 * //                 Stat: "STRING_VALUE", // required
 * //                 Unit: "STRING_VALUE",
 * //               },
 * //               Label: "STRING_VALUE",
 * //               ReturnData: true || false,
 * //             },
 * //           ],
 * //         },
 * //         CustomizedCapacityMetricSpecification: {
 * //           MetricDataQueries: [ // required
 * //             {
 * //               Id: "STRING_VALUE", // required
 * //               Expression: "STRING_VALUE",
 * //               MetricStat: {
 * //                 Metric: {
 * //                   Dimensions: [
 * //                     {
 * //                       Name: "STRING_VALUE", // required
 * //                       Value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                   MetricName: "STRING_VALUE",
 * //                   Namespace: "STRING_VALUE",
 * //                 },
 * //                 Stat: "STRING_VALUE", // required
 * //                 Unit: "STRING_VALUE",
 * //               },
 * //               Label: "STRING_VALUE",
 * //               ReturnData: true || false,
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   CapacityForecast: { // CapacityForecast
 * //     Timestamps: [ // required
 * //       new Date("TIMESTAMP"),
 * //     ],
 * //     Values: [ // required
 * //       Number("double"),
 * //     ],
 * //   },
 * //   UpdateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetPredictiveScalingForecastCommandInput - {@link GetPredictiveScalingForecastCommandInput}
 * @returns {@link GetPredictiveScalingForecastCommandOutput}
 * @see {@link GetPredictiveScalingForecastCommandInput} for command's `input` shape.
 * @see {@link GetPredictiveScalingForecastCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for ApplicationAutoScalingClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception was thrown for a validation issue. Review the available parameters for the
 *          API request.</p>
 *
 * @throws {@link ApplicationAutoScalingServiceException}
 * <p>Base exception class for all service exceptions from ApplicationAutoScaling service.</p>
 *
 *
 * @public
 */
export class GetPredictiveScalingForecastCommand extends $Command
  .classBuilder<
    GetPredictiveScalingForecastCommandInput,
    GetPredictiveScalingForecastCommandOutput,
    ApplicationAutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationAutoScalingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AnyScaleFrontendService", "GetPredictiveScalingForecast", {})
  .n("ApplicationAutoScalingClient", "GetPredictiveScalingForecastCommand")
  .f(void 0, void 0)
  .ser(se_GetPredictiveScalingForecastCommand)
  .de(de_GetPredictiveScalingForecastCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPredictiveScalingForecastRequest;
      output: GetPredictiveScalingForecastResponse;
    };
    sdk: {
      input: GetPredictiveScalingForecastCommandInput;
      output: GetPredictiveScalingForecastCommandOutput;
    };
  };
}
