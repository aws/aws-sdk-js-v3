// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeJobDefinitionsRequest, DescribeJobDefinitionsResponse } from "../models/models_0";
import { de_DescribeJobDefinitionsCommand, se_DescribeJobDefinitionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobDefinitionsCommand}.
 */
export interface DescribeJobDefinitionsCommandInput extends DescribeJobDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobDefinitionsCommand}.
 */
export interface DescribeJobDefinitionsCommandOutput extends DescribeJobDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Describes a list of job definitions. You can specify a <code>status</code> (such as
 *         <code>ACTIVE</code>) to only return job definitions that match that status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeJobDefinitionsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeJobDefinitionsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // DescribeJobDefinitionsRequest
 *   jobDefinitions: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   jobDefinitionName: "STRING_VALUE",
 *   status: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobDefinitionsResponse
 * //   jobDefinitions: [ // JobDefinitionList
 * //     { // JobDefinition
 * //       jobDefinitionName: "STRING_VALUE", // required
 * //       jobDefinitionArn: "STRING_VALUE", // required
 * //       revision: Number("int"), // required
 * //       status: "STRING_VALUE",
 * //       type: "STRING_VALUE", // required
 * //       schedulingPriority: Number("int"),
 * //       parameters: { // ParametersMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       retryStrategy: { // RetryStrategy
 * //         attempts: Number("int"),
 * //         evaluateOnExit: [ // EvaluateOnExitList
 * //           { // EvaluateOnExit
 * //             onStatusReason: "STRING_VALUE",
 * //             onReason: "STRING_VALUE",
 * //             onExitCode: "STRING_VALUE",
 * //             action: "RETRY" || "EXIT", // required
 * //           },
 * //         ],
 * //       },
 * //       containerProperties: { // ContainerProperties
 * //         image: "STRING_VALUE",
 * //         vcpus: Number("int"),
 * //         memory: Number("int"),
 * //         command: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         jobRoleArn: "STRING_VALUE",
 * //         executionRoleArn: "STRING_VALUE",
 * //         volumes: [ // Volumes
 * //           { // Volume
 * //             host: { // Host
 * //               sourcePath: "STRING_VALUE",
 * //             },
 * //             name: "STRING_VALUE",
 * //             efsVolumeConfiguration: { // EFSVolumeConfiguration
 * //               fileSystemId: "STRING_VALUE", // required
 * //               rootDirectory: "STRING_VALUE",
 * //               transitEncryption: "ENABLED" || "DISABLED",
 * //               transitEncryptionPort: Number("int"),
 * //               authorizationConfig: { // EFSAuthorizationConfig
 * //                 accessPointId: "STRING_VALUE",
 * //                 iam: "ENABLED" || "DISABLED",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         environment: [ // EnvironmentVariables
 * //           { // KeyValuePair
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         mountPoints: [ // MountPoints
 * //           { // MountPoint
 * //             containerPath: "STRING_VALUE",
 * //             readOnly: true || false,
 * //             sourceVolume: "STRING_VALUE",
 * //           },
 * //         ],
 * //         readonlyRootFilesystem: true || false,
 * //         privileged: true || false,
 * //         ulimits: [ // Ulimits
 * //           { // Ulimit
 * //             hardLimit: Number("int"), // required
 * //             name: "STRING_VALUE", // required
 * //             softLimit: Number("int"), // required
 * //           },
 * //         ],
 * //         user: "STRING_VALUE",
 * //         instanceType: "STRING_VALUE",
 * //         resourceRequirements: [ // ResourceRequirements
 * //           { // ResourceRequirement
 * //             value: "STRING_VALUE", // required
 * //             type: "GPU" || "VCPU" || "MEMORY", // required
 * //           },
 * //         ],
 * //         linuxParameters: { // LinuxParameters
 * //           devices: [ // DevicesList
 * //             { // Device
 * //               hostPath: "STRING_VALUE", // required
 * //               containerPath: "STRING_VALUE",
 * //               permissions: [ // DeviceCgroupPermissions
 * //                 "READ" || "WRITE" || "MKNOD",
 * //               ],
 * //             },
 * //           ],
 * //           initProcessEnabled: true || false,
 * //           sharedMemorySize: Number("int"),
 * //           tmpfs: [ // TmpfsList
 * //             { // Tmpfs
 * //               containerPath: "STRING_VALUE", // required
 * //               size: Number("int"), // required
 * //               mountOptions: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           maxSwap: Number("int"),
 * //           swappiness: Number("int"),
 * //         },
 * //         logConfiguration: { // LogConfiguration
 * //           logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk", // required
 * //           options: { // LogConfigurationOptionsMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           secretOptions: [ // SecretList
 * //             { // Secret
 * //               name: "STRING_VALUE", // required
 * //               valueFrom: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         secrets: [
 * //           {
 * //             name: "STRING_VALUE", // required
 * //             valueFrom: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         networkConfiguration: { // NetworkConfiguration
 * //           assignPublicIp: "ENABLED" || "DISABLED",
 * //         },
 * //         fargatePlatformConfiguration: { // FargatePlatformConfiguration
 * //           platformVersion: "STRING_VALUE",
 * //         },
 * //         ephemeralStorage: { // EphemeralStorage
 * //           sizeInGiB: Number("int"), // required
 * //         },
 * //         runtimePlatform: { // RuntimePlatform
 * //           operatingSystemFamily: "STRING_VALUE",
 * //           cpuArchitecture: "STRING_VALUE",
 * //         },
 * //         repositoryCredentials: { // RepositoryCredentials
 * //           credentialsParameter: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       timeout: { // JobTimeout
 * //         attemptDurationSeconds: Number("int"),
 * //       },
 * //       nodeProperties: { // NodeProperties
 * //         numNodes: Number("int"), // required
 * //         mainNode: Number("int"), // required
 * //         nodeRangeProperties: [ // NodeRangeProperties // required
 * //           { // NodeRangeProperty
 * //             targetNodes: "STRING_VALUE", // required
 * //             container: {
 * //               image: "STRING_VALUE",
 * //               vcpus: Number("int"),
 * //               memory: Number("int"),
 * //               command: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               jobRoleArn: "STRING_VALUE",
 * //               executionRoleArn: "STRING_VALUE",
 * //               volumes: [
 * //                 {
 * //                   host: {
 * //                     sourcePath: "STRING_VALUE",
 * //                   },
 * //                   name: "STRING_VALUE",
 * //                   efsVolumeConfiguration: {
 * //                     fileSystemId: "STRING_VALUE", // required
 * //                     rootDirectory: "STRING_VALUE",
 * //                     transitEncryption: "ENABLED" || "DISABLED",
 * //                     transitEncryptionPort: Number("int"),
 * //                     authorizationConfig: {
 * //                       accessPointId: "STRING_VALUE",
 * //                       iam: "ENABLED" || "DISABLED",
 * //                     },
 * //                   },
 * //                 },
 * //               ],
 * //               environment: [
 * //                 {
 * //                   name: "STRING_VALUE",
 * //                   value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               mountPoints: [
 * //                 {
 * //                   containerPath: "STRING_VALUE",
 * //                   readOnly: true || false,
 * //                   sourceVolume: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               readonlyRootFilesystem: true || false,
 * //               privileged: true || false,
 * //               ulimits: [
 * //                 {
 * //                   hardLimit: Number("int"), // required
 * //                   name: "STRING_VALUE", // required
 * //                   softLimit: Number("int"), // required
 * //                 },
 * //               ],
 * //               user: "STRING_VALUE",
 * //               instanceType: "STRING_VALUE",
 * //               resourceRequirements: [
 * //                 {
 * //                   value: "STRING_VALUE", // required
 * //                   type: "GPU" || "VCPU" || "MEMORY", // required
 * //                 },
 * //               ],
 * //               linuxParameters: {
 * //                 devices: [
 * //                   {
 * //                     hostPath: "STRING_VALUE", // required
 * //                     containerPath: "STRING_VALUE",
 * //                     permissions: [
 * //                       "READ" || "WRITE" || "MKNOD",
 * //                     ],
 * //                   },
 * //                 ],
 * //                 initProcessEnabled: true || false,
 * //                 sharedMemorySize: Number("int"),
 * //                 tmpfs: [
 * //                   {
 * //                     containerPath: "STRING_VALUE", // required
 * //                     size: Number("int"), // required
 * //                     mountOptions: "<StringList>",
 * //                   },
 * //                 ],
 * //                 maxSwap: Number("int"),
 * //                 swappiness: Number("int"),
 * //               },
 * //               logConfiguration: {
 * //                 logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk", // required
 * //                 options: {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 secretOptions: "<SecretList>",
 * //               },
 * //               secrets: "<SecretList>",
 * //               networkConfiguration: {
 * //                 assignPublicIp: "ENABLED" || "DISABLED",
 * //               },
 * //               fargatePlatformConfiguration: {
 * //                 platformVersion: "STRING_VALUE",
 * //               },
 * //               ephemeralStorage: {
 * //                 sizeInGiB: Number("int"), // required
 * //               },
 * //               runtimePlatform: {
 * //                 operatingSystemFamily: "STRING_VALUE",
 * //                 cpuArchitecture: "STRING_VALUE",
 * //               },
 * //               repositoryCredentials: {
 * //                 credentialsParameter: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             instanceTypes: "<StringList>",
 * //             ecsProperties: { // EcsProperties
 * //               taskProperties: [ // ListEcsTaskProperties // required
 * //                 { // EcsTaskProperties
 * //                   containers: [ // ListTaskContainerProperties // required
 * //                     { // TaskContainerProperties
 * //                       command: "<StringList>",
 * //                       dependsOn: [ // TaskContainerDependencyList
 * //                         { // TaskContainerDependency
 * //                           containerName: "STRING_VALUE",
 * //                           condition: "STRING_VALUE",
 * //                         },
 * //                       ],
 * //                       environment: "<EnvironmentVariables>",
 * //                       essential: true || false,
 * //                       image: "STRING_VALUE", // required
 * //                       linuxParameters: "<LinuxParameters>",
 * //                       logConfiguration: "<LogConfiguration>",
 * //                       mountPoints: "<MountPoints>",
 * //                       name: "STRING_VALUE",
 * //                       privileged: true || false,
 * //                       readonlyRootFilesystem: true || false,
 * //                       repositoryCredentials: "<RepositoryCredentials>",
 * //                       resourceRequirements: "<ResourceRequirements>",
 * //                       secrets: "<SecretList>",
 * //                       ulimits: "<Ulimits>",
 * //                       user: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   ephemeralStorage: "<EphemeralStorage>",
 * //                   executionRoleArn: "STRING_VALUE",
 * //                   platformVersion: "STRING_VALUE",
 * //                   ipcMode: "STRING_VALUE",
 * //                   taskRoleArn: "STRING_VALUE",
 * //                   pidMode: "STRING_VALUE",
 * //                   networkConfiguration: "<NetworkConfiguration>",
 * //                   runtimePlatform: "<RuntimePlatform>",
 * //                   volumes: "<Volumes>",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       tags: { // TagrisTagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       propagateTags: true || false,
 * //       platformCapabilities: [ // PlatformCapabilityList
 * //         "EC2" || "FARGATE",
 * //       ],
 * //       ecsProperties: {
 * //         taskProperties: [ // required
 * //           {
 * //             containers: [ // required
 * //               {
 * //                 command: "<StringList>",
 * //                 dependsOn: [
 * //                   {
 * //                     containerName: "STRING_VALUE",
 * //                     condition: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 environment: "<EnvironmentVariables>",
 * //                 essential: true || false,
 * //                 image: "STRING_VALUE", // required
 * //                 linuxParameters: "<LinuxParameters>",
 * //                 logConfiguration: "<LogConfiguration>",
 * //                 mountPoints: "<MountPoints>",
 * //                 name: "STRING_VALUE",
 * //                 privileged: true || false,
 * //                 readonlyRootFilesystem: true || false,
 * //                 repositoryCredentials: "<RepositoryCredentials>",
 * //                 resourceRequirements: "<ResourceRequirements>",
 * //                 secrets: "<SecretList>",
 * //                 ulimits: "<Ulimits>",
 * //                 user: "STRING_VALUE",
 * //               },
 * //             ],
 * //             ephemeralStorage: "<EphemeralStorage>",
 * //             executionRoleArn: "STRING_VALUE",
 * //             platformVersion: "STRING_VALUE",
 * //             ipcMode: "STRING_VALUE",
 * //             taskRoleArn: "STRING_VALUE",
 * //             pidMode: "STRING_VALUE",
 * //             networkConfiguration: "<NetworkConfiguration>",
 * //             runtimePlatform: "<RuntimePlatform>",
 * //             volumes: "<Volumes>",
 * //           },
 * //         ],
 * //       },
 * //       eksProperties: { // EksProperties
 * //         podProperties: { // EksPodProperties
 * //           serviceAccountName: "STRING_VALUE",
 * //           hostNetwork: true || false,
 * //           dnsPolicy: "STRING_VALUE",
 * //           imagePullSecrets: [ // ImagePullSecrets
 * //             { // ImagePullSecret
 * //               name: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           containers: [ // EksContainers
 * //             { // EksContainer
 * //               name: "STRING_VALUE",
 * //               image: "STRING_VALUE", // required
 * //               imagePullPolicy: "STRING_VALUE",
 * //               command: "<StringList>",
 * //               args: "<StringList>",
 * //               env: [ // EksContainerEnvironmentVariables
 * //                 { // EksContainerEnvironmentVariable
 * //                   name: "STRING_VALUE", // required
 * //                   value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               resources: { // EksContainerResourceRequirements
 * //                 limits: { // EksLimits
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 requests: { // EksRequests
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //               },
 * //               volumeMounts: [ // EksContainerVolumeMounts
 * //                 { // EksContainerVolumeMount
 * //                   name: "STRING_VALUE",
 * //                   mountPath: "STRING_VALUE",
 * //                   readOnly: true || false,
 * //                 },
 * //               ],
 * //               securityContext: { // EksContainerSecurityContext
 * //                 runAsUser: Number("long"),
 * //                 runAsGroup: Number("long"),
 * //                 privileged: true || false,
 * //                 allowPrivilegeEscalation: true || false,
 * //                 readOnlyRootFilesystem: true || false,
 * //                 runAsNonRoot: true || false,
 * //               },
 * //             },
 * //           ],
 * //           initContainers: [
 * //             {
 * //               name: "STRING_VALUE",
 * //               image: "STRING_VALUE", // required
 * //               imagePullPolicy: "STRING_VALUE",
 * //               command: "<StringList>",
 * //               args: "<StringList>",
 * //               env: [
 * //                 {
 * //                   name: "STRING_VALUE", // required
 * //                   value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               resources: {
 * //                 limits: {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 requests: {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //               },
 * //               volumeMounts: [
 * //                 {
 * //                   name: "STRING_VALUE",
 * //                   mountPath: "STRING_VALUE",
 * //                   readOnly: true || false,
 * //                 },
 * //               ],
 * //               securityContext: {
 * //                 runAsUser: Number("long"),
 * //                 runAsGroup: Number("long"),
 * //                 privileged: true || false,
 * //                 allowPrivilegeEscalation: true || false,
 * //                 readOnlyRootFilesystem: true || false,
 * //                 runAsNonRoot: true || false,
 * //               },
 * //             },
 * //           ],
 * //           volumes: [ // EksVolumes
 * //             { // EksVolume
 * //               name: "STRING_VALUE", // required
 * //               hostPath: { // EksHostPath
 * //                 path: "STRING_VALUE",
 * //               },
 * //               emptyDir: { // EksEmptyDir
 * //                 medium: "STRING_VALUE",
 * //                 sizeLimit: "STRING_VALUE",
 * //               },
 * //               secret: { // EksSecret
 * //                 secretName: "STRING_VALUE", // required
 * //                 optional: true || false,
 * //               },
 * //             },
 * //           ],
 * //           metadata: { // EksMetadata
 * //             labels: { // EksLabelsMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //           shareProcessNamespace: true || false,
 * //         },
 * //       },
 * //       containerOrchestrationType: "ECS" || "EKS",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeJobDefinitionsCommandInput - {@link DescribeJobDefinitionsCommandInput}
 * @returns {@link DescribeJobDefinitionsCommandOutput}
 * @see {@link DescribeJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 * @public
 * @example To describe active job definitions
 * ```javascript
 * // This example describes all of your active job definitions.
 * const input = {
 *   "status": "ACTIVE"
 * };
 * const command = new DescribeJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobDefinitions": [
 *     {
 *       "type": "container",
 *       "containerProperties": {
 *         "command": [
 *           "sleep",
 *           "60"
 *         ],
 *         "environment": [],
 *         "image": "busybox",
 *         "mountPoints": [],
 *         "resourceRequirements": [
 *           {
 *             "type": "MEMORY",
 *             "value": "128"
 *           },
 *           {
 *             "type": "VCPU",
 *             "value": "1"
 *           }
 *         ],
 *         "ulimits": [],
 *         "volumes": []
 *       },
 *       "jobDefinitionArn": "arn:aws:batch:us-east-1:012345678910:job-definition/sleep60:1",
 *       "jobDefinitionName": "sleep60",
 *       "revision": 1,
 *       "status": "ACTIVE"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-active-job-definitions-1481153895831
 * ```
 *
 */
export class DescribeJobDefinitionsCommand extends $Command
  .classBuilder<
    DescribeJobDefinitionsCommandInput,
    DescribeJobDefinitionsCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBatchV20160810", "DescribeJobDefinitions", {})
  .n("BatchClient", "DescribeJobDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeJobDefinitionsCommand)
  .de(de_DescribeJobDefinitionsCommand)
  .build() {}
