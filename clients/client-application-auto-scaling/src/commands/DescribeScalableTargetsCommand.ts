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
import { DescribeScalableTargetsRequest, DescribeScalableTargetsResponse } from "../models/models_0";
import { de_DescribeScalableTargetsCommand, se_DescribeScalableTargetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScalableTargetsCommand}.
 */
export interface DescribeScalableTargetsCommandInput extends DescribeScalableTargetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScalableTargetsCommand}.
 */
export interface DescribeScalableTargetsCommandOutput extends DescribeScalableTargetsResponse, __MetadataBearer {}

/**
 * <p>Gets information about the scalable targets in the specified namespace.</p>
 *          <p>You can filter the results using <code>ResourceIds</code> and
 *             <code>ScalableDimension</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, DescribeScalableTargetsCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, DescribeScalableTargetsCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const input = { // DescribeScalableTargetsRequest
 *   ServiceNamespace: "ecs" || "elasticmapreduce" || "ec2" || "appstream" || "dynamodb" || "rds" || "sagemaker" || "custom-resource" || "comprehend" || "lambda" || "cassandra" || "kafka" || "elasticache" || "neptune" || "workspaces", // required
 *   ResourceIds: [ // ResourceIdsMaxLen1600
 *     "STRING_VALUE",
 *   ],
 *   ScalableDimension: "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "elasticmapreduce:instancegroup:InstanceCount" || "appstream:fleet:DesiredCapacity" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits" || "rds:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredInstanceCount" || "custom-resource:ResourceType:Property" || "comprehend:document-classifier-endpoint:DesiredInferenceUnits" || "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits" || "lambda:function:ProvisionedConcurrency" || "cassandra:table:ReadCapacityUnits" || "cassandra:table:WriteCapacityUnits" || "kafka:broker-storage:VolumeSize" || "elasticache:cache-cluster:Nodes" || "elasticache:replication-group:NodeGroups" || "elasticache:replication-group:Replicas" || "neptune:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredProvisionedConcurrency" || "sagemaker:inference-component:DesiredCopyCount" || "workspaces:workspacespool:DesiredUserSessions",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeScalableTargetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScalableTargetsResponse
 * //   ScalableTargets: [ // ScalableTargets
 * //     { // ScalableTarget
 * //       ServiceNamespace: "ecs" || "elasticmapreduce" || "ec2" || "appstream" || "dynamodb" || "rds" || "sagemaker" || "custom-resource" || "comprehend" || "lambda" || "cassandra" || "kafka" || "elasticache" || "neptune" || "workspaces", // required
 * //       ResourceId: "STRING_VALUE", // required
 * //       ScalableDimension: "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "elasticmapreduce:instancegroup:InstanceCount" || "appstream:fleet:DesiredCapacity" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits" || "rds:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredInstanceCount" || "custom-resource:ResourceType:Property" || "comprehend:document-classifier-endpoint:DesiredInferenceUnits" || "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits" || "lambda:function:ProvisionedConcurrency" || "cassandra:table:ReadCapacityUnits" || "cassandra:table:WriteCapacityUnits" || "kafka:broker-storage:VolumeSize" || "elasticache:cache-cluster:Nodes" || "elasticache:replication-group:NodeGroups" || "elasticache:replication-group:Replicas" || "neptune:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredProvisionedConcurrency" || "sagemaker:inference-component:DesiredCopyCount" || "workspaces:workspacespool:DesiredUserSessions", // required
 * //       MinCapacity: Number("int"), // required
 * //       MaxCapacity: Number("int"), // required
 * //       PredictedCapacity: Number("int"),
 * //       RoleARN: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       SuspendedState: { // SuspendedState
 * //         DynamicScalingInSuspended: true || false,
 * //         DynamicScalingOutSuspended: true || false,
 * //         ScheduledScalingSuspended: true || false,
 * //       },
 * //       ScalableTargetARN: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeScalableTargetsCommandInput - {@link DescribeScalableTargetsCommandInput}
 * @returns {@link DescribeScalableTargetsCommandOutput}
 * @see {@link DescribeScalableTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeScalableTargetsCommandOutput} for command's `response` shape.
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
 * @example To describe scalable targets
 * ```javascript
 * // This example describes the scalable targets for the ECS service namespace.
 * const input = {
 *   ServiceNamespace: "ecs"
 * };
 * const command = new DescribeScalableTargetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ScalableTargets: [
 *     {
 *       CreationTime: "2019-05-06T11:21:46.199Z",
 *       MaxCapacity: 10,
 *       MinCapacity: 1,
 *       ResourceId: "service/default/web-app",
 *       RoleARN: "arn:aws:iam::012345678910:role/aws-service-role/ecs.application-autoscaling.amazonaws.com/AWSServiceRoleForApplicationAutoScaling_ECSService",
 *       ScalableDimension: "ecs:service:DesiredCount",
 *       ServiceNamespace: "ecs",
 *       SuspendedState: {
 *         DynamicScalingInSuspended: false,
 *         DynamicScalingOutSuspended: false,
 *         ScheduledScalingSuspended: false
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeScalableTargetsCommand extends $Command
  .classBuilder<
    DescribeScalableTargetsCommandInput,
    DescribeScalableTargetsCommandOutput,
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
  .s("AnyScaleFrontendService", "DescribeScalableTargets", {})
  .n("ApplicationAutoScalingClient", "DescribeScalableTargetsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeScalableTargetsCommand)
  .de(de_DescribeScalableTargetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScalableTargetsRequest;
      output: DescribeScalableTargetsResponse;
    };
    sdk: {
      input: DescribeScalableTargetsCommandInput;
      output: DescribeScalableTargetsCommandOutput;
    };
  };
}
