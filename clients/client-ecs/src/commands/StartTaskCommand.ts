// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartTaskRequest, StartTaskResponse } from "../models/models_0";
import { de_StartTaskCommand, se_StartTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTaskCommand}.
 */
export interface StartTaskCommandInput extends StartTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartTaskCommand}.
 */
export interface StartTaskCommandOutput extends StartTaskResponse, __MetadataBearer {}

/**
 * <p>Starts a new task from the specified task definition on the specified container
 * 			instance or instances.</p>
 *          <note>
 *             <p>On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition.</p>
 *          </note>
 *          <note>
 *             <p>Amazon Elastic Inference (EI) is no longer available to customers.</p>
 *          </note>
 *          <p>Alternatively, you can use<code>RunTask</code> to place tasks for you. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when creating or
 * 			updating a service. For more infomation, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html#ebs-volume-types">Amazon EBS volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, StartTaskCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, StartTaskCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // StartTaskRequest
 *   cluster: "STRING_VALUE",
 *   containerInstances: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   enableECSManagedTags: true || false,
 *   enableExecuteCommand: true || false,
 *   group: "STRING_VALUE",
 *   networkConfiguration: { // NetworkConfiguration
 *     awsvpcConfiguration: { // AwsVpcConfiguration
 *       subnets: [ // required
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
 *         command: "<StringList>",
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
 *   volumeConfigurations: [ // TaskVolumeConfigurations
 *     { // TaskVolumeConfiguration
 *       name: "STRING_VALUE", // required
 *       managedEBSVolume: { // TaskManagedEBSVolumeConfiguration
 *         encrypted: true || false,
 *         kmsKeyId: "STRING_VALUE",
 *         volumeType: "STRING_VALUE",
 *         sizeInGiB: Number("int"),
 *         snapshotId: "STRING_VALUE",
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
 * const command = new StartTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartTaskResponse
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
 * //       launchType: "EC2" || "FARGATE" || "EXTERNAL",
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
 * @param StartTaskCommandInput - {@link StartTaskCommandInput}
 * @returns {@link StartTaskCommandOutput}
 * @see {@link StartTaskCommandInput} for command's `input` shape.
 * @see {@link StartTaskCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *          <p>The following list includes additional causes for the error:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>RunTask</code> could not be processed because you use managed
 * 					scaling and there is a capacity error because the quota of tasks in the
 * 					<code>PROVISIONING</code> per cluster has been reached. For information
 * 					about the service quotas, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-quotas.html">Amazon ECS
 * 						service quotas</a>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
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
 * @public
 */
export class StartTaskCommand extends $Command
  .classBuilder<
    StartTaskCommandInput,
    StartTaskCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerServiceV20141113", "StartTask", {})
  .n("ECSClient", "StartTaskCommand")
  .f(void 0, void 0)
  .ser(se_StartTaskCommand)
  .de(de_StartTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTaskRequest;
      output: StartTaskResponse;
    };
    sdk: {
      input: StartTaskCommandInput;
      output: StartTaskCommandOutput;
    };
  };
}
