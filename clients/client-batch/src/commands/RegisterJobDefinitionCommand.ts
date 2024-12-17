// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterJobDefinitionRequest, RegisterJobDefinitionResponse } from "../models/models_0";
import { de_RegisterJobDefinitionCommand, se_RegisterJobDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterJobDefinitionCommand}.
 */
export interface RegisterJobDefinitionCommandInput extends RegisterJobDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link RegisterJobDefinitionCommand}.
 */
export interface RegisterJobDefinitionCommandOutput extends RegisterJobDefinitionResponse, __MetadataBearer {}

/**
 * <p>Registers an Batch job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, RegisterJobDefinitionCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, RegisterJobDefinitionCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // RegisterJobDefinitionRequest
 *   jobDefinitionName: "STRING_VALUE", // required
 *   type: "container" || "multinode", // required
 *   parameters: { // ParametersMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   schedulingPriority: Number("int"),
 *   containerProperties: { // ContainerProperties
 *     image: "STRING_VALUE",
 *     vcpus: Number("int"),
 *     memory: Number("int"),
 *     command: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     jobRoleArn: "STRING_VALUE",
 *     executionRoleArn: "STRING_VALUE",
 *     volumes: [ // Volumes
 *       { // Volume
 *         host: { // Host
 *           sourcePath: "STRING_VALUE",
 *         },
 *         name: "STRING_VALUE",
 *         efsVolumeConfiguration: { // EFSVolumeConfiguration
 *           fileSystemId: "STRING_VALUE", // required
 *           rootDirectory: "STRING_VALUE",
 *           transitEncryption: "ENABLED" || "DISABLED",
 *           transitEncryptionPort: Number("int"),
 *           authorizationConfig: { // EFSAuthorizationConfig
 *             accessPointId: "STRING_VALUE",
 *             iam: "ENABLED" || "DISABLED",
 *           },
 *         },
 *       },
 *     ],
 *     environment: [ // EnvironmentVariables
 *       { // KeyValuePair
 *         name: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     mountPoints: [ // MountPoints
 *       { // MountPoint
 *         containerPath: "STRING_VALUE",
 *         readOnly: true || false,
 *         sourceVolume: "STRING_VALUE",
 *       },
 *     ],
 *     readonlyRootFilesystem: true || false,
 *     privileged: true || false,
 *     ulimits: [ // Ulimits
 *       { // Ulimit
 *         hardLimit: Number("int"), // required
 *         name: "STRING_VALUE", // required
 *         softLimit: Number("int"), // required
 *       },
 *     ],
 *     user: "STRING_VALUE",
 *     instanceType: "STRING_VALUE",
 *     resourceRequirements: [ // ResourceRequirements
 *       { // ResourceRequirement
 *         value: "STRING_VALUE", // required
 *         type: "GPU" || "VCPU" || "MEMORY", // required
 *       },
 *     ],
 *     linuxParameters: { // LinuxParameters
 *       devices: [ // DevicesList
 *         { // Device
 *           hostPath: "STRING_VALUE", // required
 *           containerPath: "STRING_VALUE",
 *           permissions: [ // DeviceCgroupPermissions
 *             "READ" || "WRITE" || "MKNOD",
 *           ],
 *         },
 *       ],
 *       initProcessEnabled: true || false,
 *       sharedMemorySize: Number("int"),
 *       tmpfs: [ // TmpfsList
 *         { // Tmpfs
 *           containerPath: "STRING_VALUE", // required
 *           size: Number("int"), // required
 *           mountOptions: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       maxSwap: Number("int"),
 *       swappiness: Number("int"),
 *     },
 *     logConfiguration: { // LogConfiguration
 *       logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk", // required
 *       options: { // LogConfigurationOptionsMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       secretOptions: [ // SecretList
 *         { // Secret
 *           name: "STRING_VALUE", // required
 *           valueFrom: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     secrets: [
 *       {
 *         name: "STRING_VALUE", // required
 *         valueFrom: "STRING_VALUE", // required
 *       },
 *     ],
 *     networkConfiguration: { // NetworkConfiguration
 *       assignPublicIp: "ENABLED" || "DISABLED",
 *     },
 *     fargatePlatformConfiguration: { // FargatePlatformConfiguration
 *       platformVersion: "STRING_VALUE",
 *     },
 *     ephemeralStorage: { // EphemeralStorage
 *       sizeInGiB: Number("int"), // required
 *     },
 *     runtimePlatform: { // RuntimePlatform
 *       operatingSystemFamily: "STRING_VALUE",
 *       cpuArchitecture: "STRING_VALUE",
 *     },
 *     repositoryCredentials: { // RepositoryCredentials
 *       credentialsParameter: "STRING_VALUE", // required
 *     },
 *   },
 *   nodeProperties: { // NodeProperties
 *     numNodes: Number("int"), // required
 *     mainNode: Number("int"), // required
 *     nodeRangeProperties: [ // NodeRangeProperties // required
 *       { // NodeRangeProperty
 *         targetNodes: "STRING_VALUE", // required
 *         container: {
 *           image: "STRING_VALUE",
 *           vcpus: Number("int"),
 *           memory: Number("int"),
 *           command: [
 *             "STRING_VALUE",
 *           ],
 *           jobRoleArn: "STRING_VALUE",
 *           executionRoleArn: "STRING_VALUE",
 *           volumes: [
 *             {
 *               host: {
 *                 sourcePath: "STRING_VALUE",
 *               },
 *               name: "STRING_VALUE",
 *               efsVolumeConfiguration: {
 *                 fileSystemId: "STRING_VALUE", // required
 *                 rootDirectory: "STRING_VALUE",
 *                 transitEncryption: "ENABLED" || "DISABLED",
 *                 transitEncryptionPort: Number("int"),
 *                 authorizationConfig: {
 *                   accessPointId: "STRING_VALUE",
 *                   iam: "ENABLED" || "DISABLED",
 *                 },
 *               },
 *             },
 *           ],
 *           environment: [
 *             {
 *               name: "STRING_VALUE",
 *               value: "STRING_VALUE",
 *             },
 *           ],
 *           mountPoints: [
 *             {
 *               containerPath: "STRING_VALUE",
 *               readOnly: true || false,
 *               sourceVolume: "STRING_VALUE",
 *             },
 *           ],
 *           readonlyRootFilesystem: true || false,
 *           privileged: true || false,
 *           ulimits: [
 *             {
 *               hardLimit: Number("int"), // required
 *               name: "STRING_VALUE", // required
 *               softLimit: Number("int"), // required
 *             },
 *           ],
 *           user: "STRING_VALUE",
 *           instanceType: "STRING_VALUE",
 *           resourceRequirements: [
 *             {
 *               value: "STRING_VALUE", // required
 *               type: "GPU" || "VCPU" || "MEMORY", // required
 *             },
 *           ],
 *           linuxParameters: {
 *             devices: [
 *               {
 *                 hostPath: "STRING_VALUE", // required
 *                 containerPath: "STRING_VALUE",
 *                 permissions: [
 *                   "READ" || "WRITE" || "MKNOD",
 *                 ],
 *               },
 *             ],
 *             initProcessEnabled: true || false,
 *             sharedMemorySize: Number("int"),
 *             tmpfs: [
 *               {
 *                 containerPath: "STRING_VALUE", // required
 *                 size: Number("int"), // required
 *                 mountOptions: "<StringList>",
 *               },
 *             ],
 *             maxSwap: Number("int"),
 *             swappiness: Number("int"),
 *           },
 *           logConfiguration: {
 *             logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk", // required
 *             options: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *             secretOptions: "<SecretList>",
 *           },
 *           secrets: "<SecretList>",
 *           networkConfiguration: {
 *             assignPublicIp: "ENABLED" || "DISABLED",
 *           },
 *           fargatePlatformConfiguration: {
 *             platformVersion: "STRING_VALUE",
 *           },
 *           ephemeralStorage: {
 *             sizeInGiB: Number("int"), // required
 *           },
 *           runtimePlatform: {
 *             operatingSystemFamily: "STRING_VALUE",
 *             cpuArchitecture: "STRING_VALUE",
 *           },
 *           repositoryCredentials: {
 *             credentialsParameter: "STRING_VALUE", // required
 *           },
 *         },
 *         instanceTypes: "<StringList>",
 *         ecsProperties: { // EcsProperties
 *           taskProperties: [ // ListEcsTaskProperties // required
 *             { // EcsTaskProperties
 *               containers: [ // ListTaskContainerProperties // required
 *                 { // TaskContainerProperties
 *                   command: "<StringList>",
 *                   dependsOn: [ // TaskContainerDependencyList
 *                     { // TaskContainerDependency
 *                       containerName: "STRING_VALUE",
 *                       condition: "STRING_VALUE",
 *                     },
 *                   ],
 *                   environment: "<EnvironmentVariables>",
 *                   essential: true || false,
 *                   image: "STRING_VALUE", // required
 *                   linuxParameters: "<LinuxParameters>",
 *                   logConfiguration: "<LogConfiguration>",
 *                   mountPoints: "<MountPoints>",
 *                   name: "STRING_VALUE",
 *                   privileged: true || false,
 *                   readonlyRootFilesystem: true || false,
 *                   repositoryCredentials: "<RepositoryCredentials>",
 *                   resourceRequirements: "<ResourceRequirements>",
 *                   secrets: "<SecretList>",
 *                   ulimits: "<Ulimits>",
 *                   user: "STRING_VALUE",
 *                 },
 *               ],
 *               ephemeralStorage: "<EphemeralStorage>",
 *               executionRoleArn: "STRING_VALUE",
 *               platformVersion: "STRING_VALUE",
 *               ipcMode: "STRING_VALUE",
 *               taskRoleArn: "STRING_VALUE",
 *               pidMode: "STRING_VALUE",
 *               networkConfiguration: "<NetworkConfiguration>",
 *               runtimePlatform: "<RuntimePlatform>",
 *               volumes: "<Volumes>",
 *             },
 *           ],
 *         },
 *         eksProperties: { // EksProperties
 *           podProperties: { // EksPodProperties
 *             serviceAccountName: "STRING_VALUE",
 *             hostNetwork: true || false,
 *             dnsPolicy: "STRING_VALUE",
 *             imagePullSecrets: [ // ImagePullSecrets
 *               { // ImagePullSecret
 *                 name: "STRING_VALUE", // required
 *               },
 *             ],
 *             containers: [ // EksContainers
 *               { // EksContainer
 *                 name: "STRING_VALUE",
 *                 image: "STRING_VALUE", // required
 *                 imagePullPolicy: "STRING_VALUE",
 *                 command: "<StringList>",
 *                 args: "<StringList>",
 *                 env: [ // EksContainerEnvironmentVariables
 *                   { // EksContainerEnvironmentVariable
 *                     name: "STRING_VALUE", // required
 *                     value: "STRING_VALUE",
 *                   },
 *                 ],
 *                 resources: { // EksContainerResourceRequirements
 *                   limits: { // EksLimits
 *                     "<keys>": "STRING_VALUE",
 *                   },
 *                   requests: { // EksRequests
 *                     "<keys>": "STRING_VALUE",
 *                   },
 *                 },
 *                 volumeMounts: [ // EksContainerVolumeMounts
 *                   { // EksContainerVolumeMount
 *                     name: "STRING_VALUE",
 *                     mountPath: "STRING_VALUE",
 *                     subPath: "STRING_VALUE",
 *                     readOnly: true || false,
 *                   },
 *                 ],
 *                 securityContext: { // EksContainerSecurityContext
 *                   runAsUser: Number("long"),
 *                   runAsGroup: Number("long"),
 *                   privileged: true || false,
 *                   allowPrivilegeEscalation: true || false,
 *                   readOnlyRootFilesystem: true || false,
 *                   runAsNonRoot: true || false,
 *                 },
 *               },
 *             ],
 *             initContainers: [
 *               {
 *                 name: "STRING_VALUE",
 *                 image: "STRING_VALUE", // required
 *                 imagePullPolicy: "STRING_VALUE",
 *                 command: "<StringList>",
 *                 args: "<StringList>",
 *                 env: [
 *                   {
 *                     name: "STRING_VALUE", // required
 *                     value: "STRING_VALUE",
 *                   },
 *                 ],
 *                 resources: {
 *                   limits: {
 *                     "<keys>": "STRING_VALUE",
 *                   },
 *                   requests: {
 *                     "<keys>": "STRING_VALUE",
 *                   },
 *                 },
 *                 volumeMounts: [
 *                   {
 *                     name: "STRING_VALUE",
 *                     mountPath: "STRING_VALUE",
 *                     subPath: "STRING_VALUE",
 *                     readOnly: true || false,
 *                   },
 *                 ],
 *                 securityContext: {
 *                   runAsUser: Number("long"),
 *                   runAsGroup: Number("long"),
 *                   privileged: true || false,
 *                   allowPrivilegeEscalation: true || false,
 *                   readOnlyRootFilesystem: true || false,
 *                   runAsNonRoot: true || false,
 *                 },
 *               },
 *             ],
 *             volumes: [ // EksVolumes
 *               { // EksVolume
 *                 name: "STRING_VALUE", // required
 *                 hostPath: { // EksHostPath
 *                   path: "STRING_VALUE",
 *                 },
 *                 emptyDir: { // EksEmptyDir
 *                   medium: "STRING_VALUE",
 *                   sizeLimit: "STRING_VALUE",
 *                 },
 *                 secret: { // EksSecret
 *                   secretName: "STRING_VALUE", // required
 *                   optional: true || false,
 *                 },
 *                 persistentVolumeClaim: { // EksPersistentVolumeClaim
 *                   claimName: "STRING_VALUE", // required
 *                   readOnly: true || false,
 *                 },
 *               },
 *             ],
 *             metadata: { // EksMetadata
 *               labels: { // EksLabelsMap
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               annotations: { // EksAnnotationsMap
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               namespace: "STRING_VALUE",
 *             },
 *             shareProcessNamespace: true || false,
 *           },
 *         },
 *       },
 *     ],
 *   },
 *   retryStrategy: { // RetryStrategy
 *     attempts: Number("int"),
 *     evaluateOnExit: [ // EvaluateOnExitList
 *       { // EvaluateOnExit
 *         onStatusReason: "STRING_VALUE",
 *         onReason: "STRING_VALUE",
 *         onExitCode: "STRING_VALUE",
 *         action: "RETRY" || "EXIT", // required
 *       },
 *     ],
 *   },
 *   propagateTags: true || false,
 *   timeout: { // JobTimeout
 *     attemptDurationSeconds: Number("int"),
 *   },
 *   tags: { // TagrisTagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   platformCapabilities: [ // PlatformCapabilityList
 *     "EC2" || "FARGATE",
 *   ],
 *   eksProperties: {
 *     podProperties: {
 *       serviceAccountName: "STRING_VALUE",
 *       hostNetwork: true || false,
 *       dnsPolicy: "STRING_VALUE",
 *       imagePullSecrets: [
 *         {
 *           name: "STRING_VALUE", // required
 *         },
 *       ],
 *       containers: [
 *         {
 *           name: "STRING_VALUE",
 *           image: "STRING_VALUE", // required
 *           imagePullPolicy: "STRING_VALUE",
 *           command: "<StringList>",
 *           args: "<StringList>",
 *           env: [
 *             {
 *               name: "STRING_VALUE", // required
 *               value: "STRING_VALUE",
 *             },
 *           ],
 *           resources: {
 *             limits: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *             requests: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *           volumeMounts: [
 *             {
 *               name: "STRING_VALUE",
 *               mountPath: "STRING_VALUE",
 *               subPath: "STRING_VALUE",
 *               readOnly: true || false,
 *             },
 *           ],
 *           securityContext: {
 *             runAsUser: Number("long"),
 *             runAsGroup: Number("long"),
 *             privileged: true || false,
 *             allowPrivilegeEscalation: true || false,
 *             readOnlyRootFilesystem: true || false,
 *             runAsNonRoot: true || false,
 *           },
 *         },
 *       ],
 *       initContainers: [
 *         {
 *           name: "STRING_VALUE",
 *           image: "STRING_VALUE", // required
 *           imagePullPolicy: "STRING_VALUE",
 *           command: "<StringList>",
 *           args: "<StringList>",
 *           env: [
 *             {
 *               name: "STRING_VALUE", // required
 *               value: "STRING_VALUE",
 *             },
 *           ],
 *           resources: {
 *             limits: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *             requests: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *           volumeMounts: [
 *             {
 *               name: "STRING_VALUE",
 *               mountPath: "STRING_VALUE",
 *               subPath: "STRING_VALUE",
 *               readOnly: true || false,
 *             },
 *           ],
 *           securityContext: {
 *             runAsUser: Number("long"),
 *             runAsGroup: Number("long"),
 *             privileged: true || false,
 *             allowPrivilegeEscalation: true || false,
 *             readOnlyRootFilesystem: true || false,
 *             runAsNonRoot: true || false,
 *           },
 *         },
 *       ],
 *       volumes: [
 *         {
 *           name: "STRING_VALUE", // required
 *           hostPath: {
 *             path: "STRING_VALUE",
 *           },
 *           emptyDir: {
 *             medium: "STRING_VALUE",
 *             sizeLimit: "STRING_VALUE",
 *           },
 *           secret: {
 *             secretName: "STRING_VALUE", // required
 *             optional: true || false,
 *           },
 *           persistentVolumeClaim: {
 *             claimName: "STRING_VALUE", // required
 *             readOnly: true || false,
 *           },
 *         },
 *       ],
 *       metadata: {
 *         labels: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         annotations: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         namespace: "STRING_VALUE",
 *       },
 *       shareProcessNamespace: true || false,
 *     },
 *   },
 *   ecsProperties: {
 *     taskProperties: [ // required
 *       {
 *         containers: [ // required
 *           {
 *             command: "<StringList>",
 *             dependsOn: [
 *               {
 *                 containerName: "STRING_VALUE",
 *                 condition: "STRING_VALUE",
 *               },
 *             ],
 *             environment: "<EnvironmentVariables>",
 *             essential: true || false,
 *             image: "STRING_VALUE", // required
 *             linuxParameters: "<LinuxParameters>",
 *             logConfiguration: "<LogConfiguration>",
 *             mountPoints: "<MountPoints>",
 *             name: "STRING_VALUE",
 *             privileged: true || false,
 *             readonlyRootFilesystem: true || false,
 *             repositoryCredentials: "<RepositoryCredentials>",
 *             resourceRequirements: "<ResourceRequirements>",
 *             secrets: "<SecretList>",
 *             ulimits: "<Ulimits>",
 *             user: "STRING_VALUE",
 *           },
 *         ],
 *         ephemeralStorage: "<EphemeralStorage>",
 *         executionRoleArn: "STRING_VALUE",
 *         platformVersion: "STRING_VALUE",
 *         ipcMode: "STRING_VALUE",
 *         taskRoleArn: "STRING_VALUE",
 *         pidMode: "STRING_VALUE",
 *         networkConfiguration: "<NetworkConfiguration>",
 *         runtimePlatform: "<RuntimePlatform>",
 *         volumes: "<Volumes>",
 *       },
 *     ],
 *   },
 * };
 * const command = new RegisterJobDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // RegisterJobDefinitionResponse
 * //   jobDefinitionName: "STRING_VALUE", // required
 * //   jobDefinitionArn: "STRING_VALUE", // required
 * //   revision: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param RegisterJobDefinitionCommandInput - {@link RegisterJobDefinitionCommandInput}
 * @returns {@link RegisterJobDefinitionCommandOutput}
 * @see {@link RegisterJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link RegisterJobDefinitionCommandOutput} for command's `response` shape.
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
 * @example To register a job definition
 * ```javascript
 * // This example registers a job definition for a simple container job.
 * const input = {
 *   "type": "container",
 *   "containerProperties": {
 *     "command": [
 *       "sleep",
 *       "10"
 *     ],
 *     "image": "busybox",
 *     "resourceRequirements": [
 *       {
 *         "type": "MEMORY",
 *         "value": "128"
 *       },
 *       {
 *         "type": "VCPU",
 *         "value": "1"
 *       }
 *     ]
 *   },
 *   "jobDefinitionName": "sleep10"
 * };
 * const command = new RegisterJobDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobDefinitionArn": "arn:aws:batch:us-east-1:012345678910:job-definition/sleep10:1",
 *   "jobDefinitionName": "sleep10",
 *   "revision": 1
 * }
 * *\/
 * // example id: to-register-a-job-definition-1481154325325
 * ```
 *
 * @example RegisterJobDefinition with tags
 * ```javascript
 * // This demonstrates calling the RegisterJobDefinition action, including tags.
 * const input = {
 *   "type": "container",
 *   "containerProperties": {
 *     "command": [
 *       "sleep",
 *       "30"
 *     ],
 *     "image": "busybox",
 *     "resourceRequirements": [
 *       {
 *         "type": "MEMORY",
 *         "value": "128"
 *       },
 *       {
 *         "type": "VCPU",
 *         "value": "1"
 *       }
 *     ]
 *   },
 *   "jobDefinitionName": "sleep30",
 *   "tags": {
 *     "Department": "Engineering",
 *     "User": "JaneDoe"
 *   }
 * };
 * const command = new RegisterJobDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobDefinitionArn": "arn:aws:batch:us-east-1:012345678910:job-definition/sleep30:1",
 *   "jobDefinitionName": "sleep30",
 *   "revision": 1
 * }
 * *\/
 * // example id: registerjobdefinition-with-tags-1591290509028
 * ```
 *
 */
export class RegisterJobDefinitionCommand extends $Command
  .classBuilder<
    RegisterJobDefinitionCommandInput,
    RegisterJobDefinitionCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBatchV20160810", "RegisterJobDefinition", {})
  .n("BatchClient", "RegisterJobDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_RegisterJobDefinitionCommand)
  .de(de_RegisterJobDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterJobDefinitionRequest;
      output: RegisterJobDefinitionResponse;
    };
    sdk: {
      input: RegisterJobDefinitionCommandInput;
      output: RegisterJobDefinitionCommandOutput;
    };
  };
}
