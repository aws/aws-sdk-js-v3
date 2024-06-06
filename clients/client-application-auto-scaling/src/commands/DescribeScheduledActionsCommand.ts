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
import { DescribeScheduledActionsRequest, DescribeScheduledActionsResponse } from "../models/models_0";
import { de_DescribeScheduledActionsCommand, se_DescribeScheduledActionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScheduledActionsCommand}.
 */
export interface DescribeScheduledActionsCommandInput extends DescribeScheduledActionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScheduledActionsCommand}.
 */
export interface DescribeScheduledActionsCommandOutput extends DescribeScheduledActionsResponse, __MetadataBearer {}

/**
 * <p>Describes the Application Auto Scaling scheduled actions for the specified service namespace.</p>
 *          <p>You can filter the results using the <code>ResourceId</code>,
 *             <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html">Managing scheduled scaling</a> in the
 *          <i>Application Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, DescribeScheduledActionsCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, DescribeScheduledActionsCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const input = { // DescribeScheduledActionsRequest
 *   ScheduledActionNames: [ // ResourceIdsMaxLen1600
 *     "STRING_VALUE",
 *   ],
 *   ServiceNamespace: "ecs" || "elasticmapreduce" || "ec2" || "appstream" || "dynamodb" || "rds" || "sagemaker" || "custom-resource" || "comprehend" || "lambda" || "cassandra" || "kafka" || "elasticache" || "neptune", // required
 *   ResourceId: "STRING_VALUE",
 *   ScalableDimension: "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "elasticmapreduce:instancegroup:InstanceCount" || "appstream:fleet:DesiredCapacity" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits" || "rds:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredInstanceCount" || "custom-resource:ResourceType:Property" || "comprehend:document-classifier-endpoint:DesiredInferenceUnits" || "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits" || "lambda:function:ProvisionedConcurrency" || "cassandra:table:ReadCapacityUnits" || "cassandra:table:WriteCapacityUnits" || "kafka:broker-storage:VolumeSize" || "elasticache:replication-group:NodeGroups" || "elasticache:replication-group:Replicas" || "neptune:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredProvisionedConcurrency" || "sagemaker:inference-component:DesiredCopyCount",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeScheduledActionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScheduledActionsResponse
 * //   ScheduledActions: [ // ScheduledActions
 * //     { // ScheduledAction
 * //       ScheduledActionName: "STRING_VALUE", // required
 * //       ScheduledActionARN: "STRING_VALUE", // required
 * //       ServiceNamespace: "ecs" || "elasticmapreduce" || "ec2" || "appstream" || "dynamodb" || "rds" || "sagemaker" || "custom-resource" || "comprehend" || "lambda" || "cassandra" || "kafka" || "elasticache" || "neptune", // required
 * //       Schedule: "STRING_VALUE", // required
 * //       Timezone: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE", // required
 * //       ScalableDimension: "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "elasticmapreduce:instancegroup:InstanceCount" || "appstream:fleet:DesiredCapacity" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits" || "rds:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredInstanceCount" || "custom-resource:ResourceType:Property" || "comprehend:document-classifier-endpoint:DesiredInferenceUnits" || "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits" || "lambda:function:ProvisionedConcurrency" || "cassandra:table:ReadCapacityUnits" || "cassandra:table:WriteCapacityUnits" || "kafka:broker-storage:VolumeSize" || "elasticache:replication-group:NodeGroups" || "elasticache:replication-group:Replicas" || "neptune:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredProvisionedConcurrency" || "sagemaker:inference-component:DesiredCopyCount",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       ScalableTargetAction: { // ScalableTargetAction
 * //         MinCapacity: Number("int"),
 * //         MaxCapacity: Number("int"),
 * //       },
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeScheduledActionsCommandInput - {@link DescribeScheduledActionsCommandInput}
 * @returns {@link DescribeScheduledActionsCommandOutput}
 * @see {@link DescribeScheduledActionsCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledActionsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for ApplicationAutoScalingClient's `config` shape.
 *
 * @throws {@link ConcurrentUpdateException} (server fault)
 *  <p>Concurrent updates caused an exception, for example, if you request an update to an
 *          Application Auto Scaling resource that already has a pending update.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token supplied was invalid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception was thrown for a validation issue. Review the available parameters for the
 *          API request.</p>
 *
 * @throws {@link ApplicationAutoScalingServiceException}
 * <p>Base exception class for all service exceptions from ApplicationAutoScaling service.</p>
 *
 * @public
 * @example To describe scheduled actions
 * ```javascript
 * // This example describes the scheduled actions for the dynamodb service namespace.
 * const input = {
 *   "ServiceNamespace": "dynamodb"
 * };
 * const command = new DescribeScheduledActionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ScheduledActions": [
 *     {
 *       "CreationTime": 1561571888.361,
 *       "ResourceId": "table/my-table",
 *       "ScalableDimension": "dynamodb:table:WriteCapacityUnits",
 *       "ScalableTargetAction": {
 *         "MaxCapacity": 20,
 *         "MinCapacity": 15
 *       },
 *       "Schedule": "at(2019-05-20T18:35:00)",
 *       "ScheduledActionARN": "arn:aws:autoscaling:us-west-2:123456789012:scheduledAction:2d36aa3b-cdf9-4565-b290-81db519b227d:resource/dynamodb/table/my-table:scheduledActionName/my-first-scheduled-action",
 *       "ScheduledActionName": "my-first-scheduled-action",
 *       "ServiceNamespace": "dynamodb"
 *     },
 *     {
 *       "CreationTime": 1561571946.021,
 *       "ResourceId": "table/my-table",
 *       "ScalableDimension": "dynamodb:table:WriteCapacityUnits",
 *       "ScalableTargetAction": {
 *         "MaxCapacity": 10,
 *         "MinCapacity": 5
 *       },
 *       "Schedule": "at(2019-05-20T18:40:00)",
 *       "ScheduledActionARN": "arn:aws:autoscaling:us-west-2:123456789012:scheduledAction:2d36aa3b-cdf9-4565-b290-81db519b227d:resource/dynamodb/table/my-table:scheduledActionName/my-second-scheduled-action",
 *       "ScheduledActionName": "my-second-scheduled-action",
 *       "ServiceNamespace": "dynamodb"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-scheduled-actions-1677965249349
 * ```
 *
 */
export class DescribeScheduledActionsCommand extends $Command
  .classBuilder<
    DescribeScheduledActionsCommandInput,
    DescribeScheduledActionsCommandOutput,
    ApplicationAutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ApplicationAutoScalingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AnyScaleFrontendService", "DescribeScheduledActions", {})
  .n("ApplicationAutoScalingClient", "DescribeScheduledActionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeScheduledActionsCommand)
  .de(de_DescribeScheduledActionsCommand)
  .build() {}
