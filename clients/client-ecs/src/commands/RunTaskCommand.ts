// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RunTaskRequest, RunTaskResponse } from "../models/models_0";
import { RunTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RunTaskCommand}.
 */
export interface RunTaskCommandInput extends RunTaskRequest {}
/**
 * @public
 *
 * The output of {@link RunTaskCommand}.
 */
export interface RunTaskCommandOutput extends RunTaskResponse, __MetadataBearer {}

/**
 * <p>Starts a new task using the specified task definition.</p>
 *          <note>
 *             <p>On March 21, 2024, a change was made to resolve the task definition revision
 * 				before authorization. When a task definition revision is not specified,
 * 				authorization will occur using the latest revision of a task definition.</p>
 *          </note>
 *          <note>
 *             <p>Amazon Elastic Inference (EI) is no longer available to customers.</p>
 *          </note>
 *          <p>You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS
 * 			places tasks using placement constraints and placement strategies. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic
 * 				Container Service Developer Guide</i>.</p>
 *          <p>Alternatively, you can use <code>StartTask</code> to use your own scheduler or place
 * 			tasks manually on specific container instances.</p>
 *          <p>You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when
 * 			creating or updating a service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html#ebs-volume-types">Amazon EBS volumes</a> in the <i>Amazon Elastic
 * 				Container Service Developer Guide</i>.</p>
 *          <p>The Amazon ECS API follows an eventual consistency model. This is because of the
 * 			distributed nature of the system supporting the API. This means that the result of an
 * 			API command you run that affects your Amazon ECS resources might not be immediately
 * 			visible to all subsequent commands you run. Keep this in mind when you carry out an API
 * 			command that immediately follows a previous API command.</p>
 *          <p>To manage eventual consistency, you can do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Confirm the state of the resource before you run a command to modify it. Run
 * 					the DescribeTasks command using an exponential backoff algorithm to ensure that
 * 					you allow enough time for the previous command to propagate through the system.
 * 					To do this, run the DescribeTasks command repeatedly, starting with a couple of
 * 					seconds of wait time and increasing gradually up to five minutes of wait
 * 					time.</p>
 *             </li>
 *             <li>
 *                <p>Add wait time between subsequent commands, even if the DescribeTasks command
 * 					returns an accurate response. Apply an exponential backoff algorithm starting
 * 					with a couple of seconds of wait time, and increase gradually up to about five
 * 					minutes of wait time.</p>
 *             </li>
 *          </ul>
 *          <p>If you get a <code>ConflictException</code> error, the <code>RunTask</code> request
 * 			could not be processed due to conflicts. The provided <code>clientToken</code> is
 * 			already in use with a different <code>RunTask</code> request. The
 * 				<code>resourceIds</code> are the existing task ARNs which are already associated
 * 			with the <code>clientToken</code>. </p>
 *          <p>To fix this issue:</p>
 *          <ul>
 *             <li>
 *                <p>Run <code>RunTask</code> with a unique <code>clientToken</code>.</p>
 *             </li>
 *             <li>
 *                <p>Run <code>RunTask</code> with the <code>clientToken</code> and the original
 * 					set of parameters</p>
 *             </li>
 *          </ul>
 *          <p>If you get a <code>ClientException</code>error, the <code>RunTask</code> could not be
 * 			processed because you use managed scaling and there is a capacity error because the
 * 			quota of tasks in the <code>PROVISIONING</code> per cluster has been reached. For
 * 			information about the service quotas, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-quotas.html">Amazon ECS service
 * 				quotas</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, RunTaskCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, RunTaskCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // RunTaskRequest
 *   capacityProviderStrategy: [ // CapacityProviderStrategy
 *     { // CapacityProviderStrategyItem
 *       capacityProvider: "STRING_VALUE", // required
 *       weight: Number("int"),
 *       base: Number("int"),
 *     },
 *   ],
 *   cluster: "STRING_VALUE",
 *   count: Number("int"),
 *   enableECSManagedTags: true || false,
 *   enableExecuteCommand: true || false,
 *   group: "STRING_VALUE",
 *   launchType: "EC2" || "FARGATE" || "EXTERNAL" || "MANAGED_INSTANCES",
 *   networkConfiguration: { // NetworkConfiguration
 *     awsvpcConfiguration: { // AwsVpcConfiguration
 *       subnets: [ // StringList // required
 *         "STRING_VALUE",
 *       ],
 *       securityGroups: [
 *         "STRING_VALUE",
 *       ],
 *       assignPublicIp: "ENABLED" || "DISABLED",
 *     },
 *   },
 *   overrides: { // TaskOverride
 *     containerOverrides: [ // ContainerOverrides
 *       { // ContainerOverride
 *         name: "STRING_VALUE",
 *         command: [
 *           "STRING_VALUE",
 *         ],
 *         environment: [ // EnvironmentVariables
 *           { // KeyValuePair
 *             name: "STRING_VALUE",
 *             value: "STRING_VALUE",
 *           },
 *         ],
 *         environmentFiles: [ // EnvironmentFiles
 *           { // EnvironmentFile
 *             value: "STRING_VALUE", // required
 *             type: "s3", // required
 *           },
 *         ],
 *         cpu: Number("int"),
 *         memory: Number("int"),
 *         memoryReservation: Number("int"),
 *         resourceRequirements: [ // ResourceRequirements
 *           { // ResourceRequirement
 *             value: "STRING_VALUE", // required
 *             type: "GPU" || "InferenceAccelerator", // required
 *           },
 *         ],
 *       },
 *     ],
 *     cpu: "STRING_VALUE",
 *     inferenceAcceleratorOverrides: [ // InferenceAcceleratorOverrides
 *       { // InferenceAcceleratorOverride
 *         deviceName: "STRING_VALUE",
 *         deviceType: "STRING_VALUE",
 *       },
 *     ],
 *     executionRoleArn: "STRING_VALUE",
 *     memory: "STRING_VALUE",
 *     taskRoleArn: "STRING_VALUE",
 *     ephemeralStorage: { // EphemeralStorage
 *       sizeInGiB: Number("int"), // required
 *     },
 *   },
 *   placementConstraints: [ // PlacementConstraints
 *     { // PlacementConstraint
 *       type: "distinctInstance" || "memberOf",
 *       expression: "STRING_VALUE",
 *     },
 *   ],
 *   placementStrategy: [ // PlacementStrategies
 *     { // PlacementStrategy
 *       type: "random" || "spread" || "binpack",
 *       field: "STRING_VALUE",
 *     },
 *   ],
 *   platformVersion: "STRING_VALUE",
 *   propagateTags: "TASK_DEFINITION" || "SERVICE" || "NONE",
 *   referenceId: "STRING_VALUE",
 *   startedBy: "STRING_VALUE",
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   taskDefinition: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   volumeConfigurations: [ // TaskVolumeConfigurations
 *     { // TaskVolumeConfiguration
 *       name: "STRING_VALUE", // required
 *       managedEBSVolume: { // TaskManagedEBSVolumeConfiguration
 *         encrypted: true || false,
 *         kmsKeyId: "STRING_VALUE",
 *         volumeType: "STRING_VALUE",
 *         sizeInGiB: Number("int"),
 *         snapshotId: "STRING_VALUE",
 *         volumeInitializationRate: Number("int"),
 *         iops: Number("int"),
 *         throughput: Number("int"),
 *         tagSpecifications: [ // EBSTagSpecifications
 *           { // EBSTagSpecification
 *             resourceType: "volume", // required
 *             tags: [
 *               {
 *                 key: "STRING_VALUE",
 *                 value: "STRING_VALUE",
 *               },
 *             ],
 *             propagateTags: "TASK_DEFINITION" || "SERVICE" || "NONE",
 *           },
 *         ],
 *         roleArn: "STRING_VALUE", // required
 *         terminationPolicy: { // TaskManagedEBSVolumeTerminationPolicy
 *           deleteOnTermination: true || false, // required
 *         },
 *         filesystemType: "ext3" || "ext4" || "xfs" || "ntfs",
 *       },
 *     },
 *   ],
 * };
 * const command = new RunTaskCommand(input);
 * const response = await client.send(command);
 * // { // RunTaskResponse
 * //   tasks: [ // Tasks
 * //     { // Task
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
 * //       attributes: [ // Attributes
 * //         { // Attribute
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //           targetType: "container-instance",
 * //           targetId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       availabilityZone: "STRING_VALUE",
 * //       capacityProviderName: "STRING_VALUE",
 * //       clusterArn: "STRING_VALUE",
 * //       connectivity: "CONNECTED" || "DISCONNECTED",
 * //       connectivityAt: new Date("TIMESTAMP"),
 * //       containerInstanceArn: "STRING_VALUE",
 * //       containers: [ // Containers
 * //         { // Container
 * //           containerArn: "STRING_VALUE",
 * //           taskArn: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //           image: "STRING_VALUE",
 * //           imageDigest: "STRING_VALUE",
 * //           runtimeId: "STRING_VALUE",
 * //           lastStatus: "STRING_VALUE",
 * //           exitCode: Number("int"),
 * //           reason: "STRING_VALUE",
 * //           networkBindings: [ // NetworkBindings
 * //             { // NetworkBinding
 * //               bindIP: "STRING_VALUE",
 * //               containerPort: Number("int"),
 * //               hostPort: Number("int"),
 * //               protocol: "tcp" || "udp",
 * //               containerPortRange: "STRING_VALUE",
 * //               hostPortRange: "STRING_VALUE",
 * //             },
 * //           ],
 * //           networkInterfaces: [ // NetworkInterfaces
 * //             { // NetworkInterface
 * //               attachmentId: "STRING_VALUE",
 * //               privateIpv4Address: "STRING_VALUE",
 * //               ipv6Address: "STRING_VALUE",
 * //             },
 * //           ],
 * //           healthStatus: "HEALTHY" || "UNHEALTHY" || "UNKNOWN",
 * //           managedAgents: [ // ManagedAgents
 * //             { // ManagedAgent
 * //               lastStartedAt: new Date("TIMESTAMP"),
 * //               name: "ExecuteCommandAgent",
 * //               reason: "STRING_VALUE",
 * //               lastStatus: "STRING_VALUE",
 * //             },
 * //           ],
 * //           cpu: "STRING_VALUE",
 * //           memory: "STRING_VALUE",
 * //           memoryReservation: "STRING_VALUE",
 * //           gpuIds: [ // GpuIds
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       cpu: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       desiredStatus: "STRING_VALUE",
 * //       enableExecuteCommand: true || false,
 * //       executionStoppedAt: new Date("TIMESTAMP"),
 * //       group: "STRING_VALUE",
 * //       healthStatus: "HEALTHY" || "UNHEALTHY" || "UNKNOWN",
 * //       inferenceAccelerators: [ // InferenceAccelerators
 * //         { // InferenceAccelerator
 * //           deviceName: "STRING_VALUE", // required
 * //           deviceType: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       lastStatus: "STRING_VALUE",
 * //       launchType: "EC2" || "FARGATE" || "EXTERNAL" || "MANAGED_INSTANCES",
 * //       memory: "STRING_VALUE",
 * //       overrides: { // TaskOverride
 * //         containerOverrides: [ // ContainerOverrides
 * //           { // ContainerOverride
 * //             name: "STRING_VALUE",
 * //             command: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //             environment: [ // EnvironmentVariables
 * //               {
 * //                 name: "STRING_VALUE",
 * //                 value: "STRING_VALUE",
 * //               },
 * //             ],
 * //             environmentFiles: [ // EnvironmentFiles
 * //               { // EnvironmentFile
 * //                 value: "STRING_VALUE", // required
 * //                 type: "s3", // required
 * //               },
 * //             ],
 * //             cpu: Number("int"),
 * //             memory: Number("int"),
 * //             memoryReservation: Number("int"),
 * //             resourceRequirements: [ // ResourceRequirements
 * //               { // ResourceRequirement
 * //                 value: "STRING_VALUE", // required
 * //                 type: "GPU" || "InferenceAccelerator", // required
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         cpu: "STRING_VALUE",
 * //         inferenceAcceleratorOverrides: [ // InferenceAcceleratorOverrides
 * //           { // InferenceAcceleratorOverride
 * //             deviceName: "STRING_VALUE",
 * //             deviceType: "STRING_VALUE",
 * //           },
 * //         ],
 * //         executionRoleArn: "STRING_VALUE",
 * //         memory: "STRING_VALUE",
 * //         taskRoleArn: "STRING_VALUE",
 * //         ephemeralStorage: { // EphemeralStorage
 * //           sizeInGiB: Number("int"), // required
 * //         },
 * //       },
 * //       platformVersion: "STRING_VALUE",
 * //       platformFamily: "STRING_VALUE",
 * //       pullStartedAt: new Date("TIMESTAMP"),
 * //       pullStoppedAt: new Date("TIMESTAMP"),
 * //       startedAt: new Date("TIMESTAMP"),
 * //       startedBy: "STRING_VALUE",
 * //       stopCode: "TaskFailedToStart" || "EssentialContainerExited" || "UserInitiated" || "ServiceSchedulerInitiated" || "SpotInterruption" || "TerminationNotice",
 * //       stoppedAt: new Date("TIMESTAMP"),
 * //       stoppedReason: "STRING_VALUE",
 * //       stoppingAt: new Date("TIMESTAMP"),
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       taskArn: "STRING_VALUE",
 * //       taskDefinitionArn: "STRING_VALUE",
 * //       version: Number("long"),
 * //       ephemeralStorage: {
 * //         sizeInGiB: Number("int"), // required
 * //       },
 * //       fargateEphemeralStorage: { // TaskEphemeralStorage
 * //         sizeInGiB: Number("int"),
 * //         kmsKeyId: "STRING_VALUE",
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
 * @param RunTaskCommandInput - {@link RunTaskCommandInput}
 * @returns {@link RunTaskCommandOutput}
 * @see {@link RunTaskCommandInput} for command's `input` shape.
 * @see {@link RunTaskCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link BlockedException} (client fault)
 *  <p>Your Amazon Web
 * 				Services account was blocked. For more information, contact <a href="http://aws.amazon.com/contact-us/">
 * 				Amazon Web
 * 					Services Support</a>.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 * 			resource. </p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS
 * 				service event messages</a>. </p>
 *
 * @throws {@link PlatformTaskDefinitionIncompatibilityException} (client fault)
 *  <p>The specified platform version doesn't satisfy the required capabilities of the task
 * 			definition.</p>
 *
 * @throws {@link PlatformUnknownException} (client fault)
 *  <p>The specified platform version doesn't exist.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To run a task on your default cluster
 * ```javascript
 * // This example runs the specified task definition on your default cluster.
 * const input = {
 *   cluster: "default",
 *   taskDefinition: "sleep360:1"
 * };
 * const command = new RunTaskCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   tasks: [
 *     {
 *       containerInstanceArn: "arn:aws:ecs:us-east-1:<aws_account_id>:container-instance/default/ffe3d344-77e2-476c-a4d0-bf560ad50acb",
 *       containers: [
 *         {
 *           containerArn: "arn:aws:ecs:us-east-1:<aws_account_id>:container/default/58591c8e-be29-4ddf-95aa-ee459d4c59fd",
 *           lastStatus: "PENDING",
 *           name: "sleep",
 *           taskArn: "arn:aws:ecs:us-east-1:<aws_account_id>:task/default/a9f21ea7-c9f5-44b1-b8e6-b31f50ed33c0"
 *         }
 *       ],
 *       desiredStatus: "RUNNING",
 *       lastStatus: "PENDING",
 *       overrides: {
 *         containerOverrides: [
 *           {
 *             name: "sleep"
 *           }
 *         ]
 *       },
 *       taskArn: "arn:aws:ecs:us-east-1:<aws_account_id>:task/default/a9f21ea7-c9f5-44b1-b8e6-b31f50ed33c0",
 *       taskDefinitionArn: "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/sleep360:1"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RunTaskCommand extends $Command
  .classBuilder<
    RunTaskCommandInput,
    RunTaskCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "RunTask", {})
  .n("ECSClient", "RunTaskCommand")
  .sc(RunTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RunTaskRequest;
      output: RunTaskResponse;
    };
    sdk: {
      input: RunTaskCommandInput;
      output: RunTaskCommandOutput;
    };
  };
}
