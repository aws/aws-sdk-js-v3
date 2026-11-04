// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterDaemonTaskDefinitionRequest, RegisterDaemonTaskDefinitionResponse } from "../models/models_0";
import { RegisterDaemonTaskDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterDaemonTaskDefinitionCommand}.
 */
export interface RegisterDaemonTaskDefinitionCommandInput extends RegisterDaemonTaskDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link RegisterDaemonTaskDefinitionCommand}.
 */
export interface RegisterDaemonTaskDefinitionCommandOutput extends RegisterDaemonTaskDefinitionResponse, __MetadataBearer {}

/**
 * Registers a new daemon task definition from the supplied `family` and `containerDefinitions`. Optionally, you can add data volumes to your containers with the `volumes` parameter. For more information, see [Daemon task definitions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/daemon-task-definitions.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * A daemon task definition is a template that describes the containers that form a daemon. Daemons deploy cross-cutting software agents such as security monitoring, telemetry, and logging across your Amazon ECS infrastructure.
 *
 * Each time you call `RegisterDaemonTaskDefinition`, a new revision of the daemon task definition is created. You can't modify a revision after you register it.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, RegisterDaemonTaskDefinitionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, RegisterDaemonTaskDefinitionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // RegisterDaemonTaskDefinitionRequest
 *   family: "STRING_VALUE", // required
 *   taskRoleArn: "STRING_VALUE",
 *   executionRoleArn: "STRING_VALUE",
 *   containerDefinitions: [ // DaemonContainerDefinitionList // required
 *     { // DaemonContainerDefinition
 *       name: "STRING_VALUE",
 *       image: "STRING_VALUE", // required
 *       memory: Number("int"),
 *       memoryReservation: Number("int"),
 *       repositoryCredentials: { // RepositoryCredentials
 *         credentialsParameter: "STRING_VALUE", // required
 *       },
 *       healthCheck: { // HealthCheck
 *         command: [ // StringList // required
 *           "STRING_VALUE",
 *         ],
 *         interval: Number("int"),
 *         timeout: Number("int"),
 *         retries: Number("int"),
 *         startPeriod: Number("int"),
 *       },
 *       cpu: Number("int"),
 *       essential: true || false,
 *       entryPoint: [
 *         "STRING_VALUE",
 *       ],
 *       command: [
 *         "STRING_VALUE",
 *       ],
 *       workingDirectory: "STRING_VALUE",
 *       environmentFiles: [ // EnvironmentFiles
 *         { // EnvironmentFile
 *           value: "STRING_VALUE", // required
 *           type: "s3", // required
 *         },
 *       ],
 *       environment: [ // EnvironmentVariables
 *         { // KeyValuePair
 *           name: "STRING_VALUE",
 *           value: "STRING_VALUE",
 *         },
 *       ],
 *       secrets: [ // SecretList
 *         { // Secret
 *           name: "STRING_VALUE", // required
 *           valueFrom: "STRING_VALUE", // required
 *         },
 *       ],
 *       readonlyRootFilesystem: true || false,
 *       mountPoints: [ // MountPointList
 *         { // MountPoint
 *           sourceVolume: "STRING_VALUE",
 *           containerPath: "STRING_VALUE",
 *           readOnly: true || false,
 *         },
 *       ],
 *       logConfiguration: { // LogConfiguration
 *         logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk" || "awsfirelens", // required
 *         options: { // LogConfigurationOptionsMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         secretOptions: [
 *           {
 *             name: "STRING_VALUE", // required
 *             valueFrom: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       firelensConfiguration: { // FirelensConfiguration
 *         type: "fluentd" || "fluentbit", // required
 *         options: { // FirelensConfigurationOptionsMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       privileged: true || false,
 *       user: "STRING_VALUE",
 *       ulimits: [ // UlimitList
 *         { // Ulimit
 *           name: "core" || "cpu" || "data" || "fsize" || "locks" || "memlock" || "msgqueue" || "nice" || "nofile" || "nproc" || "rss" || "rtprio" || "rttime" || "sigpending" || "stack", // required
 *           softLimit: Number("int"), // required
 *           hardLimit: Number("int"), // required
 *         },
 *       ],
 *       linuxParameters: { // DaemonLinuxParameters
 *         capabilities: { // KernelCapabilities
 *           add: "<StringList>",
 *           drop: "<StringList>",
 *         },
 *         devices: [ // DevicesList
 *           { // Device
 *             hostPath: "STRING_VALUE", // required
 *             containerPath: "STRING_VALUE",
 *             permissions: [ // DeviceCgroupPermissions
 *               "read" || "write" || "mknod",
 *             ],
 *           },
 *         ],
 *         initProcessEnabled: true || false,
 *         tmpfs: [ // TmpfsList
 *           { // Tmpfs
 *             containerPath: "STRING_VALUE", // required
 *             size: Number("int"), // required
 *             mountOptions: "<StringList>",
 *           },
 *         ],
 *       },
 *       dependsOn: [ // ContainerDependencies
 *         { // ContainerDependency
 *           containerName: "STRING_VALUE", // required
 *           condition: "START" || "COMPLETE" || "SUCCESS" || "HEALTHY", // required
 *         },
 *       ],
 *       startTimeout: Number("int"),
 *       stopTimeout: Number("int"),
 *       systemControls: [ // SystemControls
 *         { // SystemControl
 *           namespace: "STRING_VALUE",
 *           value: "STRING_VALUE",
 *         },
 *       ],
 *       interactive: true || false,
 *       pseudoTerminal: true || false,
 *       restartPolicy: { // ContainerRestartPolicy
 *         enabled: true || false, // required
 *         ignoredExitCodes: [ // IntegerList
 *           Number("int"),
 *         ],
 *         restartAttemptPeriod: Number("int"),
 *       },
 *     },
 *   ],
 *   cpu: "STRING_VALUE",
 *   memory: "STRING_VALUE",
 *   volumes: [ // DaemonVolumeList
 *     { // DaemonVolume
 *       name: "STRING_VALUE",
 *       host: { // HostVolumeProperties
 *         sourcePath: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   pidMode: "none" || "shared",
 *   ipcMode: "none" || "shared",
 * };
 * const command = new RegisterDaemonTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // RegisterDaemonTaskDefinitionResponse
 * //   daemonTaskDefinitionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterDaemonTaskDefinitionCommandInput - {@link RegisterDaemonTaskDefinitionCommandInput}
 * @returns {@link RegisterDaemonTaskDefinitionCommandOutput}
 * @see {@link RegisterDaemonTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link RegisterDaemonTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have authorization to perform the requested action.
 *
 * @throws {@link ClientException} (client fault)
 *
 * These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter isn't valid. Review the available parameters for the API request.
 *
 * For more information about service event errors, see [Amazon ECS service event messages](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html).
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit for the resource was exceeded.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server issue.
 *
 * @throws {@link ECSServiceException}
 *
 * Base exception class for all service exceptions from ECS service.
 *
 * @example To register a daemon task definition
 * ```javascript
 * // This example registers a daemon task definition in the monitoring-agent family with a single container that runs a CloudWatch agent.
 * const input = {
 *   containerDefinitions: [
 *     {
 *       cpu: 128,
 *       environment: [
 *         {
 *           name: "USE_DEFAULT_CONFIG",
 *           value: "true"
 *         }
 *       ],
 *       essential: true,
 *       image: "public.ecr.aws/cloudwatch-agent/cloudwatch-agent:latest",
 *       logConfiguration: {
 *         logDriver: "awslogs",
 *         options: {
 *           awslogs-group: "/ecs/daemon/monitoring-agent",
 *           awslogs-region: "us-east-1",
 *           awslogs-stream-prefix: "ecs"
 *         }
 *       },
 *       memory: 256,
 *       name: "cloudwatch-agent"
 *     }
 *   ],
 *   cpu: "128",
 *   executionRoleArn: "arn:aws:iam::123456789012:role/ecsTaskExecutionRole",
 *   family: "monitoring-agent",
 *   memory: "256",
 *   taskRoleArn: "arn:aws:iam::123456789012:role/ecsDaemonTaskRole"
 * };
 * const command = new RegisterDaemonTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   daemonTaskDefinitionArn: "arn:aws:ecs:us-east-1:123456789012:daemon-task-definition/monitoring-agent:1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RegisterDaemonTaskDefinitionCommand extends command<RegisterDaemonTaskDefinitionCommandInput, RegisterDaemonTaskDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "RegisterDaemonTaskDefinition",
  RegisterDaemonTaskDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterDaemonTaskDefinitionRequest;
      output: RegisterDaemonTaskDefinitionResponse;
    };
    sdk: {
      input: RegisterDaemonTaskDefinitionCommandInput;
      output: RegisterDaemonTaskDefinitionCommandOutput;
    };
  };
}
