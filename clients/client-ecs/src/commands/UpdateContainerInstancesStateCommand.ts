// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateContainerInstancesStateRequest, UpdateContainerInstancesStateResponse } from "../models/models_0";
import { UpdateContainerInstancesState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContainerInstancesStateCommand}.
 */
export interface UpdateContainerInstancesStateCommandInput extends UpdateContainerInstancesStateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContainerInstancesStateCommand}.
 */
export interface UpdateContainerInstancesStateCommandOutput
  extends UpdateContainerInstancesStateResponse,
    __MetadataBearer {}

/**
 * <p>Modifies the status of an Amazon ECS container instance.</p>
 *          <p>Once a container instance has reached an <code>ACTIVE</code> state, you can change the
 * 			status of a container instance to <code>DRAINING</code> to manually remove an instance
 * 			from a cluster, for example to perform system updates, update the Docker daemon, or
 * 			scale down the cluster size.</p>
 *          <important>
 *             <p>A container instance can't be changed to <code>DRAINING</code> until it has
 * 				reached an <code>ACTIVE</code> status. If the instance is in any other status, an
 * 				error will be received.</p>
 *          </important>
 *          <p>When you set a container instance to <code>DRAINING</code>, Amazon ECS prevents new
 * 			tasks from being scheduled for placement on the container instance and replacement
 * 			service tasks are started on other container instances in the cluster if the resources
 * 			are available. Service tasks on the container instance that are in the
 * 				<code>PENDING</code> state are stopped immediately.</p>
 *          <p>Service tasks on the container instance that are in the <code>RUNNING</code> state are
 * 			stopped and replaced according to the service's deployment configuration parameters,
 * 				<code>minimumHealthyPercent</code> and <code>maximumPercent</code>. You can change
 * 			the deployment configuration of your service using <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html">UpdateService</a>.</p>
 *          <ul>
 *             <li>
 *                <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore
 * 						<code>desiredCount</code> temporarily during task replacement. For example,
 * 						<code>desiredCount</code> is four tasks, a minimum of 50% allows the
 * 					scheduler to stop two existing tasks before starting two new tasks. If the
 * 					minimum is 100%, the service scheduler can't remove existing tasks until the
 * 					replacement tasks are considered healthy. Tasks for services that do not use a
 * 					load balancer are considered healthy if they're in the <code>RUNNING</code>
 * 					state. Tasks for services that use a load balancer are considered healthy if
 * 					they're in the <code>RUNNING</code> state and are reported as healthy by the
 * 					load balancer.</p>
 *             </li>
 *             <li>
 *                <p>The <code>maximumPercent</code> parameter represents an upper limit on the
 * 					number of running tasks during task replacement. You can use this to define the
 * 					replacement batch size. For example, if <code>desiredCount</code> is four tasks,
 * 					a maximum of 200% starts four new tasks before stopping the four tasks to be
 * 					drained, provided that the cluster resources required to do this are available.
 * 					If the maximum is 100%, then replacement tasks can't start until the draining
 * 					tasks have stopped.</p>
 *             </li>
 *          </ul>
 *          <p>Any <code>PENDING</code> or <code>RUNNING</code> tasks that do not belong to a service
 * 			aren't affected. You must wait for them to finish or stop them manually.</p>
 *          <p>A container instance has completed draining when it has no more <code>RUNNING</code>
 * 			tasks. You can verify this using <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html">ListTasks</a>.</p>
 *          <p>When a container instance has been drained, you can set a container instance to
 * 				<code>ACTIVE</code> status and once it has reached that status the Amazon ECS
 * 			scheduler can begin scheduling tasks on the instance again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateContainerInstancesStateCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateContainerInstancesStateCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // UpdateContainerInstancesStateRequest
 *   cluster: "STRING_VALUE",
 *   containerInstances: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   status: "ACTIVE" || "DRAINING" || "REGISTERING" || "DEREGISTERING" || "REGISTRATION_FAILED", // required
 * };
 * const command = new UpdateContainerInstancesStateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContainerInstancesStateResponse
 * //   containerInstances: [ // ContainerInstances
 * //     { // ContainerInstance
 * //       containerInstanceArn: "STRING_VALUE",
 * //       ec2InstanceId: "STRING_VALUE",
 * //       capacityProviderName: "STRING_VALUE",
 * //       version: Number("long"),
 * //       versionInfo: { // VersionInfo
 * //         agentVersion: "STRING_VALUE",
 * //         agentHash: "STRING_VALUE",
 * //         dockerVersion: "STRING_VALUE",
 * //       },
 * //       remainingResources: [ // Resources
 * //         { // Resource
 * //           name: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           doubleValue: Number("double"),
 * //           longValue: Number("long"),
 * //           integerValue: Number("int"),
 * //           stringSetValue: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       registeredResources: [
 * //         {
 * //           name: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           doubleValue: Number("double"),
 * //           longValue: Number("long"),
 * //           integerValue: Number("int"),
 * //           stringSetValue: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       status: "STRING_VALUE",
 * //       statusReason: "STRING_VALUE",
 * //       agentConnected: true || false,
 * //       runningTasksCount: Number("int"),
 * //       pendingTasksCount: Number("int"),
 * //       agentUpdateStatus: "PENDING" || "STAGING" || "STAGED" || "UPDATING" || "UPDATED" || "FAILED",
 * //       attributes: [ // Attributes
 * //         { // Attribute
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //           targetType: "container-instance",
 * //           targetId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       registeredAt: new Date("TIMESTAMP"),
 * //       attachments: [ // Attachments
 * //         { // Attachment
 * //           id: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           status: "STRING_VALUE",
 * //           details: [ // AttachmentDetails
 * //             { // KeyValuePair
 * //               name: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       healthStatus: { // ContainerInstanceHealthStatus
 * //         overallStatus: "OK" || "IMPAIRED" || "INSUFFICIENT_DATA" || "INITIALIZING",
 * //         details: [ // InstanceHealthCheckResultList
 * //           { // InstanceHealthCheckResult
 * //             type: "CONTAINER_RUNTIME",
 * //             status: "OK" || "IMPAIRED" || "INSUFFICIENT_DATA" || "INITIALIZING",
 * //             lastUpdated: new Date("TIMESTAMP"),
 * //             lastStatusChange: new Date("TIMESTAMP"),
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   failures: [ // Failures
 * //     { // Failure
 * //       arn: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       detail: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateContainerInstancesStateCommandInput - {@link UpdateContainerInstancesStateCommandInput}
 * @returns {@link UpdateContainerInstancesStateCommandOutput}
 * @see {@link UpdateContainerInstancesStateCommandInput} for command's `input` shape.
 * @see {@link UpdateContainerInstancesStateCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS
 * 				service event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To update the state of a container instance
 * ```javascript
 * // This example updates the state of the specified container instance in the default cluster to DRAINING.
 * const input = {
 *   cluster: "default",
 *   containerInstances: [
 *     "1c3be8ed-df30-47b4-8f1e-6e68ebd01f34"
 *   ],
 *   status: "DRAINING"
 * };
 * const command = new UpdateContainerInstancesStateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   containerInstances: [
 *     {
 *       agentConnected: true,
 *       attributes: [
 *         {
 *           name: "ecs.availability-zone",
 *           value: "us-west-2b"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.logging-driver.syslog"
 *         },
 *         {
 *           name: "ecs.instance-type",
 *           value: "c4.xlarge"
 *         },
 *         {
 *           name: "ecs.ami-id",
 *           value: "ami-a2ca61c2"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.task-iam-role-network-host"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.logging-driver.awslogs"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.logging-driver.json-file"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.docker-remote-api.1.17"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.privileged-container"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.docker-remote-api.1.18"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.docker-remote-api.1.19"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.ecr-auth"
 *         },
 *         {
 *           name: "ecs.os-type",
 *           value: "linux"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.docker-remote-api.1.20"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.docker-remote-api.1.21"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.docker-remote-api.1.22"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.task-iam-role"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.docker-remote-api.1.23"
 *         }
 *       ],
 *       containerInstanceArn: "arn:aws:ecs:us-west-2:012345678910:container-instance/default/1c3be8ed-df30-47b4-8f1e-6e68ebd01f34",
 *       ec2InstanceId: "i-05d99c76955727ec6",
 *       pendingTasksCount: 0,
 *       registeredResources: [
 *         {
 *           doubleValue: 0,
 *           integerValue: 4096,
 *           longValue: 0,
 *           name: "CPU",
 *           type: "INTEGER"
 *         },
 *         {
 *           doubleValue: 0,
 *           integerValue: 7482,
 *           longValue: 0,
 *           name: "MEMORY",
 *           type: "INTEGER"
 *         },
 *         {
 *           doubleValue: 0,
 *           integerValue: 0,
 *           longValue: 0,
 *           name: "PORTS",
 *           stringSetValue: [
 *             "22",
 *             "2376",
 *             "2375",
 *             "51678",
 *             "51679"
 *           ],
 *           type: "STRINGSET"
 *         },
 *         {
 *           doubleValue: 0,
 *           integerValue: 0,
 *           longValue: 0,
 *           name: "PORTS_UDP",
 *           stringSetValue:           [],
 *           type: "STRINGSET"
 *         }
 *       ],
 *       remainingResources: [
 *         {
 *           doubleValue: 0,
 *           integerValue: 4096,
 *           longValue: 0,
 *           name: "CPU",
 *           type: "INTEGER"
 *         },
 *         {
 *           doubleValue: 0,
 *           integerValue: 7482,
 *           longValue: 0,
 *           name: "MEMORY",
 *           type: "INTEGER"
 *         },
 *         {
 *           doubleValue: 0,
 *           integerValue: 0,
 *           longValue: 0,
 *           name: "PORTS",
 *           stringSetValue: [
 *             "22",
 *             "2376",
 *             "2375",
 *             "51678",
 *             "51679"
 *           ],
 *           type: "STRINGSET"
 *         },
 *         {
 *           doubleValue: 0,
 *           integerValue: 0,
 *           longValue: 0,
 *           name: "PORTS_UDP",
 *           stringSetValue:           [],
 *           type: "STRINGSET"
 *         }
 *       ],
 *       runningTasksCount: 0,
 *       status: "DRAINING",
 *       version: 30,
 *       versionInfo: {
 *         agentHash: "efe53c6",
 *         agentVersion: "1.13.1",
 *         dockerVersion: "DockerVersion: 1.11.2"
 *       }
 *     }
 *   ],
 *   failures:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateContainerInstancesStateCommand extends $Command
  .classBuilder<
    UpdateContainerInstancesStateCommandInput,
    UpdateContainerInstancesStateCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "UpdateContainerInstancesState", {})
  .n("ECSClient", "UpdateContainerInstancesStateCommand")
  .sc(UpdateContainerInstancesState$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContainerInstancesStateRequest;
      output: UpdateContainerInstancesStateResponse;
    };
    sdk: {
      input: UpdateContainerInstancesStateCommandInput;
      output: UpdateContainerInstancesStateCommandOutput;
    };
  };
}
