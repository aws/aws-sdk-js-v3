// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDaemonTaskDefinitionRequest, DescribeDaemonTaskDefinitionResponse } from "../models/models_0";
import { DescribeDaemonTaskDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDaemonTaskDefinitionCommand}.
 */
export interface DescribeDaemonTaskDefinitionCommandInput extends DescribeDaemonTaskDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDaemonTaskDefinitionCommand}.
 */
export interface DescribeDaemonTaskDefinitionCommandOutput extends DescribeDaemonTaskDefinitionResponse, __MetadataBearer {}

/**
 * <p>Describes a daemon task definition. You can specify a <code>family</code> and <code>revision</code> to find information about a specific daemon task definition, or you can simply specify the family to find the latest <code>ACTIVE</code> revision in that family.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeDaemonTaskDefinitionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeDaemonTaskDefinitionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DescribeDaemonTaskDefinitionRequest
 *   daemonTaskDefinition: "STRING_VALUE", // required
 * };
 * const command = new DescribeDaemonTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDaemonTaskDefinitionResponse
 * //   daemonTaskDefinition: { // DaemonTaskDefinition
 * //     daemonTaskDefinitionArn: "STRING_VALUE",
 * //     family: "STRING_VALUE",
 * //     revision: Number("int"),
 * //     taskRoleArn: "STRING_VALUE",
 * //     executionRoleArn: "STRING_VALUE",
 * //     containerDefinitions: [ // DaemonContainerDefinitionList
 * //       { // DaemonContainerDefinition
 * //         name: "STRING_VALUE",
 * //         image: "STRING_VALUE", // required
 * //         memory: Number("int"),
 * //         memoryReservation: Number("int"),
 * //         repositoryCredentials: { // RepositoryCredentials
 * //           credentialsParameter: "STRING_VALUE", // required
 * //         },
 * //         healthCheck: { // HealthCheck
 * //           command: [ // StringList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           interval: Number("int"),
 * //           timeout: Number("int"),
 * //           retries: Number("int"),
 * //           startPeriod: Number("int"),
 * //         },
 * //         cpu: Number("int"),
 * //         essential: true || false,
 * //         entryPoint: [
 * //           "STRING_VALUE",
 * //         ],
 * //         command: [
 * //           "STRING_VALUE",
 * //         ],
 * //         workingDirectory: "STRING_VALUE",
 * //         environmentFiles: [ // EnvironmentFiles
 * //           { // EnvironmentFile
 * //             value: "STRING_VALUE", // required
 * //             type: "s3", // required
 * //           },
 * //         ],
 * //         environment: [ // EnvironmentVariables
 * //           { // KeyValuePair
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         secrets: [ // SecretList
 * //           { // Secret
 * //             name: "STRING_VALUE", // required
 * //             valueFrom: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         readonlyRootFilesystem: true || false,
 * //         mountPoints: [ // MountPointList
 * //           { // MountPoint
 * //             sourceVolume: "STRING_VALUE",
 * //             containerPath: "STRING_VALUE",
 * //             readOnly: true || false,
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
 * //         firelensConfiguration: { // FirelensConfiguration
 * //           type: "fluentd" || "fluentbit", // required
 * //           options: { // FirelensConfigurationOptionsMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         privileged: true || false,
 * //         user: "STRING_VALUE",
 * //         ulimits: [ // UlimitList
 * //           { // Ulimit
 * //             name: "core" || "cpu" || "data" || "fsize" || "locks" || "memlock" || "msgqueue" || "nice" || "nofile" || "nproc" || "rss" || "rtprio" || "rttime" || "sigpending" || "stack", // required
 * //             softLimit: Number("int"), // required
 * //             hardLimit: Number("int"), // required
 * //           },
 * //         ],
 * //         linuxParameters: { // DaemonLinuxParameters
 * //           capabilities: { // KernelCapabilities
 * //             add: "<StringList>",
 * //             drop: "<StringList>",
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
 * //           tmpfs: [ // TmpfsList
 * //             { // Tmpfs
 * //               containerPath: "STRING_VALUE", // required
 * //               size: Number("int"), // required
 * //               mountOptions: "<StringList>",
 * //             },
 * //           ],
 * //         },
 * //         dependsOn: [ // ContainerDependencies
 * //           { // ContainerDependency
 * //             containerName: "STRING_VALUE", // required
 * //             condition: "START" || "COMPLETE" || "SUCCESS" || "HEALTHY", // required
 * //           },
 * //         ],
 * //         startTimeout: Number("int"),
 * //         stopTimeout: Number("int"),
 * //         systemControls: [ // SystemControls
 * //           { // SystemControl
 * //             namespace: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         interactive: true || false,
 * //         pseudoTerminal: true || false,
 * //         restartPolicy: { // ContainerRestartPolicy
 * //           enabled: true || false, // required
 * //           ignoredExitCodes: [ // IntegerList
 * //             Number("int"),
 * //           ],
 * //           restartAttemptPeriod: Number("int"),
 * //         },
 * //       },
 * //     ],
 * //     volumes: [ // DaemonVolumeList
 * //       { // DaemonVolume
 * //         name: "STRING_VALUE",
 * //         host: { // HostVolumeProperties
 * //           sourcePath: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     cpu: "STRING_VALUE",
 * //     memory: "STRING_VALUE",
 * //     status: "ACTIVE" || "DELETE_IN_PROGRESS" || "DELETED",
 * //     registeredAt: new Date("TIMESTAMP"),
 * //     deleteRequestedAt: new Date("TIMESTAMP"),
 * //     registeredBy: "STRING_VALUE",
 * //     pidMode: "none" || "shared",
 * //     ipcMode: "none" || "shared",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDaemonTaskDefinitionCommandInput - {@link DescribeDaemonTaskDefinitionCommandInput}
 * @returns {@link DescribeDaemonTaskDefinitionCommandOutput}
 * @see {@link DescribeDaemonTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeDaemonTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API request.</p> <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To describe a daemon task definition
 * ```javascript
 * // This example describes the first revision of the monitoring-agent daemon task definition.
 * const input = {
 *   daemonTaskDefinition: "monitoring-agent:1"
 * };
 * const command = new DescribeDaemonTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   daemonTaskDefinition: {
 *     containerDefinitions: [
 *       {
 *         cpu: 128,
 *         environment: [
 *           {
 *             name: "USE_DEFAULT_CONFIG",
 *             value: "true"
 *           }
 *         ],
 *         essential: true,
 *         image: "public.ecr.aws/cloudwatch-agent/cloudwatch-agent:latest",
 *         logConfiguration: {
 *           logDriver: "awslogs",
 *           options: {
 *             awslogs-group: "/ecs/daemon/monitoring-agent",
 *             awslogs-region: "us-east-1",
 *             awslogs-stream-prefix: "ecs"
 *           }
 *         },
 *         memory: 256,
 *         mountPoints:         [],
 *         name: "cloudwatch-agent",
 *         secrets:         []
 *       }
 *     ],
 *     cpu: "128",
 *     daemonTaskDefinitionArn: "arn:aws:ecs:us-east-1:123456789012:daemon-task-definition/monitoring-agent:1",
 *     executionRoleArn: "arn:aws:iam::123456789012:role/ecsTaskExecutionRole",
 *     family: "monitoring-agent",
 *     memory: "256",
 *     registeredAt: "2025-03-15T10:30:00.000Z",
 *     registeredBy: "arn:aws:iam::123456789012:user/admin",
 *     revision: 1,
 *     status: "ACTIVE",
 *     taskRoleArn: "arn:aws:iam::123456789012:role/ecsDaemonTaskRole",
 *     volumes:     []
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeDaemonTaskDefinitionCommand extends command<DescribeDaemonTaskDefinitionCommandInput, DescribeDaemonTaskDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDaemonTaskDefinition",
  DescribeDaemonTaskDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDaemonTaskDefinitionRequest;
      output: DescribeDaemonTaskDefinitionResponse;
    };
    sdk: {
      input: DescribeDaemonTaskDefinitionCommandInput;
      output: DescribeDaemonTaskDefinitionCommandOutput;
    };
  };
}
