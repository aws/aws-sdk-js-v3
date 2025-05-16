// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterTaskDefinitionRequest, DeregisterTaskDefinitionResponse } from "../models/models_0";
import { de_DeregisterTaskDefinitionCommand, se_DeregisterTaskDefinitionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterTaskDefinitionCommand}.
 */
export interface DeregisterTaskDefinitionCommandInput extends DeregisterTaskDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterTaskDefinitionCommand}.
 */
export interface DeregisterTaskDefinitionCommandOutput extends DeregisterTaskDefinitionResponse, __MetadataBearer {}

/**
 * <p>Deregisters the specified task definition by family and revision. Upon deregistration,
 * 			the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that
 * 			reference an <code>INACTIVE</code> task definition continue to run without disruption.
 * 			Existing services that reference an <code>INACTIVE</code> task definition can still
 * 			scale up or down by modifying the service's desired count. If you want to delete a task
 * 			definition revision, you must first deregister the task definition revision.</p>
 *          <p>You can't use an <code>INACTIVE</code> task definition to run new tasks or create new
 * 			services, and you can't update an existing service to reference an <code>INACTIVE</code>
 * 			task definition. However, there may be up to a 10-minute window following deregistration
 * 			where these restrictions have not yet taken effect.</p>
 *          <note>
 *             <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your
 * 				account indefinitely. However, this behavior is subject to change in the future. We
 * 				don't recommend that you rely on <code>INACTIVE</code> task definitions persisting
 * 				beyond the lifecycle of any associated tasks and services.</p>
 *          </note>
 *          <p>You must deregister a task definition revision before you delete it. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskDefinitions.html">DeleteTaskDefinitions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeregisterTaskDefinitionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeregisterTaskDefinitionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // DeregisterTaskDefinitionRequest
 *   taskDefinition: "STRING_VALUE", // required
 * };
 * const command = new DeregisterTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterTaskDefinitionResponse
 * //   taskDefinition: { // TaskDefinition
 * //     taskDefinitionArn: "STRING_VALUE",
 * //     containerDefinitions: [ // ContainerDefinitions
 * //       { // ContainerDefinition
 * //         name: "STRING_VALUE",
 * //         image: "STRING_VALUE",
 * //         repositoryCredentials: { // RepositoryCredentials
 * //           credentialsParameter: "STRING_VALUE", // required
 * //         },
 * //         cpu: Number("int"),
 * //         memory: Number("int"),
 * //         memoryReservation: Number("int"),
 * //         links: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         portMappings: [ // PortMappingList
 * //           { // PortMapping
 * //             containerPort: Number("int"),
 * //             hostPort: Number("int"),
 * //             protocol: "tcp" || "udp",
 * //             name: "STRING_VALUE",
 * //             appProtocol: "http" || "http2" || "grpc",
 * //             containerPortRange: "STRING_VALUE",
 * //           },
 * //         ],
 * //         essential: true || false,
 * //         restartPolicy: { // ContainerRestartPolicy
 * //           enabled: true || false, // required
 * //           ignoredExitCodes: [ // IntegerList
 * //             Number("int"),
 * //           ],
 * //           restartAttemptPeriod: Number("int"),
 * //         },
 * //         entryPoint: [
 * //           "STRING_VALUE",
 * //         ],
 * //         command: [
 * //           "STRING_VALUE",
 * //         ],
 * //         environment: [ // EnvironmentVariables
 * //           { // KeyValuePair
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         environmentFiles: [ // EnvironmentFiles
 * //           { // EnvironmentFile
 * //             value: "STRING_VALUE", // required
 * //             type: "s3", // required
 * //           },
 * //         ],
 * //         mountPoints: [ // MountPointList
 * //           { // MountPoint
 * //             sourceVolume: "STRING_VALUE",
 * //             containerPath: "STRING_VALUE",
 * //             readOnly: true || false,
 * //           },
 * //         ],
 * //         volumesFrom: [ // VolumeFromList
 * //           { // VolumeFrom
 * //             sourceContainer: "STRING_VALUE",
 * //             readOnly: true || false,
 * //           },
 * //         ],
 * //         linuxParameters: { // LinuxParameters
 * //           capabilities: { // KernelCapabilities
 * //             add: [
 * //               "STRING_VALUE",
 * //             ],
 * //             drop: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           devices: [ // DevicesList
 * //             { // Device
 * //               hostPath: "STRING_VALUE", // required
 * //               containerPath: "STRING_VALUE",
 * //               permissions: [ // DeviceCgroupPermissions
 * //                 "read" || "write" || "mknod",
 * //               ],
 * //             },
 * //           ],
 * //           initProcessEnabled: true || false,
 * //           sharedMemorySize: Number("int"),
 * //           tmpfs: [ // TmpfsList
 * //             { // Tmpfs
 * //               containerPath: "STRING_VALUE", // required
 * //               size: Number("int"), // required
 * //               mountOptions: "<StringList>",
 * //             },
 * //           ],
 * //           maxSwap: Number("int"),
 * //           swappiness: Number("int"),
 * //         },
 * //         secrets: [ // SecretList
 * //           { // Secret
 * //             name: "STRING_VALUE", // required
 * //             valueFrom: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         dependsOn: [ // ContainerDependencies
 * //           { // ContainerDependency
 * //             containerName: "STRING_VALUE", // required
 * //             condition: "START" || "COMPLETE" || "SUCCESS" || "HEALTHY", // required
 * //           },
 * //         ],
 * //         startTimeout: Number("int"),
 * //         stopTimeout: Number("int"),
 * //         versionConsistency: "enabled" || "disabled",
 * //         hostname: "STRING_VALUE",
 * //         user: "STRING_VALUE",
 * //         workingDirectory: "STRING_VALUE",
 * //         disableNetworking: true || false,
 * //         privileged: true || false,
 * //         readonlyRootFilesystem: true || false,
 * //         dnsServers: "<StringList>",
 * //         dnsSearchDomains: "<StringList>",
 * //         extraHosts: [ // HostEntryList
 * //           { // HostEntry
 * //             hostname: "STRING_VALUE", // required
 * //             ipAddress: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         dockerSecurityOptions: "<StringList>",
 * //         interactive: true || false,
 * //         pseudoTerminal: true || false,
 * //         dockerLabels: { // DockerLabelsMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         ulimits: [ // UlimitList
 * //           { // Ulimit
 * //             name: "core" || "cpu" || "data" || "fsize" || "locks" || "memlock" || "msgqueue" || "nice" || "nofile" || "nproc" || "rss" || "rtprio" || "rttime" || "sigpending" || "stack", // required
 * //             softLimit: Number("int"), // required
 * //             hardLimit: Number("int"), // required
 * //           },
 * //         ],
 * //         logConfiguration: { // LogConfiguration
 * //           logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk" || "awsfirelens", // required
 * //           options: { // LogConfigurationOptionsMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           secretOptions: [
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               valueFrom: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         healthCheck: { // HealthCheck
 * //           command: "<StringList>", // required
 * //           interval: Number("int"),
 * //           timeout: Number("int"),
 * //           retries: Number("int"),
 * //           startPeriod: Number("int"),
 * //         },
 * //         systemControls: [ // SystemControls
 * //           { // SystemControl
 * //             namespace: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         resourceRequirements: [ // ResourceRequirements
 * //           { // ResourceRequirement
 * //             value: "STRING_VALUE", // required
 * //             type: "GPU" || "InferenceAccelerator", // required
 * //           },
 * //         ],
 * //         firelensConfiguration: { // FirelensConfiguration
 * //           type: "fluentd" || "fluentbit", // required
 * //           options: { // FirelensConfigurationOptionsMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         credentialSpecs: "<StringList>",
 * //       },
 * //     ],
 * //     family: "STRING_VALUE",
 * //     taskRoleArn: "STRING_VALUE",
 * //     executionRoleArn: "STRING_VALUE",
 * //     networkMode: "bridge" || "host" || "awsvpc" || "none",
 * //     revision: Number("int"),
 * //     volumes: [ // VolumeList
 * //       { // Volume
 * //         name: "STRING_VALUE",
 * //         host: { // HostVolumeProperties
 * //           sourcePath: "STRING_VALUE",
 * //         },
 * //         dockerVolumeConfiguration: { // DockerVolumeConfiguration
 * //           scope: "task" || "shared",
 * //           autoprovision: true || false,
 * //           driver: "STRING_VALUE",
 * //           driverOpts: { // StringMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           labels: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         efsVolumeConfiguration: { // EFSVolumeConfiguration
 * //           fileSystemId: "STRING_VALUE", // required
 * //           rootDirectory: "STRING_VALUE",
 * //           transitEncryption: "ENABLED" || "DISABLED",
 * //           transitEncryptionPort: Number("int"),
 * //           authorizationConfig: { // EFSAuthorizationConfig
 * //             accessPointId: "STRING_VALUE",
 * //             iam: "ENABLED" || "DISABLED",
 * //           },
 * //         },
 * //         fsxWindowsFileServerVolumeConfiguration: { // FSxWindowsFileServerVolumeConfiguration
 * //           fileSystemId: "STRING_VALUE", // required
 * //           rootDirectory: "STRING_VALUE", // required
 * //           authorizationConfig: { // FSxWindowsFileServerAuthorizationConfig
 * //             credentialsParameter: "STRING_VALUE", // required
 * //             domain: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         configuredAtLaunch: true || false,
 * //       },
 * //     ],
 * //     status: "ACTIVE" || "INACTIVE" || "DELETE_IN_PROGRESS",
 * //     requiresAttributes: [ // RequiresAttributes
 * //       { // Attribute
 * //         name: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //         targetType: "container-instance",
 * //         targetId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     placementConstraints: [ // TaskDefinitionPlacementConstraints
 * //       { // TaskDefinitionPlacementConstraint
 * //         type: "memberOf",
 * //         expression: "STRING_VALUE",
 * //       },
 * //     ],
 * //     compatibilities: [ // CompatibilityList
 * //       "EC2" || "FARGATE" || "EXTERNAL",
 * //     ],
 * //     runtimePlatform: { // RuntimePlatform
 * //       cpuArchitecture: "X86_64" || "ARM64",
 * //       operatingSystemFamily: "WINDOWS_SERVER_2019_FULL" || "WINDOWS_SERVER_2019_CORE" || "WINDOWS_SERVER_2016_FULL" || "WINDOWS_SERVER_2004_CORE" || "WINDOWS_SERVER_2022_CORE" || "WINDOWS_SERVER_2022_FULL" || "WINDOWS_SERVER_20H2_CORE" || "LINUX",
 * //     },
 * //     requiresCompatibilities: [
 * //       "EC2" || "FARGATE" || "EXTERNAL",
 * //     ],
 * //     cpu: "STRING_VALUE",
 * //     memory: "STRING_VALUE",
 * //     inferenceAccelerators: [ // InferenceAccelerators
 * //       { // InferenceAccelerator
 * //         deviceName: "STRING_VALUE", // required
 * //         deviceType: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     pidMode: "host" || "task",
 * //     ipcMode: "host" || "task" || "none",
 * //     proxyConfiguration: { // ProxyConfiguration
 * //       type: "APPMESH",
 * //       containerName: "STRING_VALUE", // required
 * //       properties: [ // ProxyConfigurationProperties
 * //         {
 * //           name: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     registeredAt: new Date("TIMESTAMP"),
 * //     deregisteredAt: new Date("TIMESTAMP"),
 * //     registeredBy: "STRING_VALUE",
 * //     ephemeralStorage: { // EphemeralStorage
 * //       sizeInGiB: Number("int"), // required
 * //     },
 * //     enableFaultInjection: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DeregisterTaskDefinitionCommandInput - {@link DeregisterTaskDefinitionCommandInput}
 * @returns {@link DeregisterTaskDefinitionCommandOutput}
 * @see {@link DeregisterTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeregisterTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service
 * 				event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To deregister a revision of a task definition
 * ```javascript
 * // This example deregisters the first revision of the fargate-task task definition
 * const input = {
 *   taskDefinition: "fargate-task:1"
 * };
 * const command = new DeregisterTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   taskDefinition: {
 *     containerDefinitions: [
 *       {
 *         cpu: 256,
 *         essential: true,
 *         image: "public.ecr.aws/docker/library/nginx:latest",
 *         memory: 128,
 *         name: "nginx",
 *         portMappings: [
 *           {
 *             containerPort: 80,
 *             hostPort: 80,
 *             protocol: "tcp"
 *           }
 *         ]
 *       }
 *     ],
 *     family: "fargate-task",
 *     status: "INACTIVE",
 *     taskDefinitionArn: "arn:aws:ecs:us-west-2:123456789012:task-definition/fargate-task:1",
 *     volumes:     []
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeregisterTaskDefinitionCommand extends $Command
  .classBuilder<
    DeregisterTaskDefinitionCommandInput,
    DeregisterTaskDefinitionCommandOutput,
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
  .s("AmazonEC2ContainerServiceV20141113", "DeregisterTaskDefinition", {})
  .n("ECSClient", "DeregisterTaskDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterTaskDefinitionCommand)
  .de(de_DeregisterTaskDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterTaskDefinitionRequest;
      output: DeregisterTaskDefinitionResponse;
    };
    sdk: {
      input: DeregisterTaskDefinitionCommandInput;
      output: DeregisterTaskDefinitionCommandOutput;
    };
  };
}
