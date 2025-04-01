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
import { DescribeScalingActivitiesRequest, DescribeScalingActivitiesResponse } from "../models/models_0";
import { de_DescribeScalingActivitiesCommand, se_DescribeScalingActivitiesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScalingActivitiesCommand}.
 */
export interface DescribeScalingActivitiesCommandInput extends DescribeScalingActivitiesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScalingActivitiesCommand}.
 */
export interface DescribeScalingActivitiesCommandOutput extends DescribeScalingActivitiesResponse, __MetadataBearer {}

/**
 * <p>Provides descriptive information about the scaling activities in the specified namespace
 *          from the previous six weeks.</p>
 *          <p>You can filter the results using <code>ResourceId</code> and
 *             <code>ScalableDimension</code>.</p>
 *          <p>For information about viewing scaling activities using the Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, DescribeScalingActivitiesCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, DescribeScalingActivitiesCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const input = { // DescribeScalingActivitiesRequest
 *   ServiceNamespace: "ecs" || "elasticmapreduce" || "ec2" || "appstream" || "dynamodb" || "rds" || "sagemaker" || "custom-resource" || "comprehend" || "lambda" || "cassandra" || "kafka" || "elasticache" || "neptune" || "workspaces", // required
 *   ResourceId: "STRING_VALUE",
 *   ScalableDimension: "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "elasticmapreduce:instancegroup:InstanceCount" || "appstream:fleet:DesiredCapacity" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits" || "rds:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredInstanceCount" || "custom-resource:ResourceType:Property" || "comprehend:document-classifier-endpoint:DesiredInferenceUnits" || "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits" || "lambda:function:ProvisionedConcurrency" || "cassandra:table:ReadCapacityUnits" || "cassandra:table:WriteCapacityUnits" || "kafka:broker-storage:VolumeSize" || "elasticache:replication-group:NodeGroups" || "elasticache:replication-group:Replicas" || "neptune:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredProvisionedConcurrency" || "sagemaker:inference-component:DesiredCopyCount" || "workspaces:workspacespool:DesiredUserSessions",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   IncludeNotScaledActivities: true || false,
 * };
 * const command = new DescribeScalingActivitiesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScalingActivitiesResponse
 * //   ScalingActivities: [ // ScalingActivities
 * //     { // ScalingActivity
 * //       ActivityId: "STRING_VALUE", // required
 * //       ServiceNamespace: "ecs" || "elasticmapreduce" || "ec2" || "appstream" || "dynamodb" || "rds" || "sagemaker" || "custom-resource" || "comprehend" || "lambda" || "cassandra" || "kafka" || "elasticache" || "neptune" || "workspaces", // required
 * //       ResourceId: "STRING_VALUE", // required
 * //       ScalableDimension: "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "elasticmapreduce:instancegroup:InstanceCount" || "appstream:fleet:DesiredCapacity" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits" || "rds:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredInstanceCount" || "custom-resource:ResourceType:Property" || "comprehend:document-classifier-endpoint:DesiredInferenceUnits" || "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits" || "lambda:function:ProvisionedConcurrency" || "cassandra:table:ReadCapacityUnits" || "cassandra:table:WriteCapacityUnits" || "kafka:broker-storage:VolumeSize" || "elasticache:replication-group:NodeGroups" || "elasticache:replication-group:Replicas" || "neptune:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredProvisionedConcurrency" || "sagemaker:inference-component:DesiredCopyCount" || "workspaces:workspacespool:DesiredUserSessions", // required
 * //       Description: "STRING_VALUE", // required
 * //       Cause: "STRING_VALUE", // required
 * //       StartTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //       StatusCode: "Pending" || "InProgress" || "Successful" || "Overridden" || "Unfulfilled" || "Failed", // required
 * //       StatusMessage: "STRING_VALUE",
 * //       Details: "STRING_VALUE",
 * //       NotScaledReasons: [ // NotScaledReasons
 * //         { // NotScaledReason
 * //           Code: "STRING_VALUE", // required
 * //           MaxCapacity: Number("int"),
 * //           MinCapacity: Number("int"),
 * //           CurrentCapacity: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeScalingActivitiesCommandInput - {@link DescribeScalingActivitiesCommandInput}
 * @returns {@link DescribeScalingActivitiesCommandOutput}
 * @see {@link DescribeScalingActivitiesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingActivitiesCommandOutput} for command's `response` shape.
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
 *
 * @example To describe scaling activities for a scalable target
 * ```javascript
 * // This example describes the scaling activities for an Amazon ECS service called web-app that is running in the default cluster.
 * const input = {
 *   ResourceId: "service/default/web-app",
 *   ScalableDimension: "ecs:service:DesiredCount",
 *   ServiceNamespace: "ecs"
 * };
 * const command = new DescribeScalingActivitiesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ScalingActivities: [
 *     {
 *       ActivityId: "e6c5f7d1-dbbb-4a3f-89b2-51f33e766399",
 *       Cause: "monitor alarm web-app-cpu-lt-25 in state ALARM triggered policy web-app-cpu-lt-25",
 *       Description: "Setting desired count to 1.",
 *       EndTime: "2019-05-06T16:04:32.111Z",
 *       ResourceId: "service/default/web-app",
 *       ScalableDimension: "ecs:service:DesiredCount",
 *       ServiceNamespace: "ecs",
 *       StartTime: "2019-05-06T16:03:58.171Z",
 *       StatusCode: "Successful",
 *       StatusMessage: "Successfully set desired count to 1. Change successfully fulfilled by ecs."
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeScalingActivitiesCommand extends $Command
  .classBuilder<
    DescribeScalingActivitiesCommandInput,
    DescribeScalingActivitiesCommandOutput,
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
  .s("AnyScaleFrontendService", "DescribeScalingActivities", {})
  .n("ApplicationAutoScalingClient", "DescribeScalingActivitiesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeScalingActivitiesCommand)
  .de(de_DescribeScalingActivitiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScalingActivitiesRequest;
      output: DescribeScalingActivitiesResponse;
    };
    sdk: {
      input: DescribeScalingActivitiesCommandInput;
      output: DescribeScalingActivitiesCommandOutput;
    };
  };
}
