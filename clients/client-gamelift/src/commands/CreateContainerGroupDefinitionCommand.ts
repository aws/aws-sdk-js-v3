// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateContainerGroupDefinitionInput, CreateContainerGroupDefinitionOutput } from "../models/models_0";
import { CreateContainerGroupDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateContainerGroupDefinitionCommand}.
 */
export interface CreateContainerGroupDefinitionCommandInput extends CreateContainerGroupDefinitionInput {}
/**
 * @public
 *
 * The output of {@link CreateContainerGroupDefinitionCommand}.
 */
export interface CreateContainerGroupDefinitionCommandOutput extends CreateContainerGroupDefinitionOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** Container
 *
 * Creates a `ContainerGroupDefinition` that describes a set of containers for hosting your game server with Amazon GameLift Servers managed containers hosting. An Amazon GameLift Servers container group is similar to a container task or pod. Use container group definitions when you create a container fleet with [CreateContainerFleet](https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateContainerFleet.html).
 *
 * A container group definition determines how Amazon GameLift Servers deploys your containers to each instance in a container fleet. You can maintain multiple versions of a container group definition.
 *
 * There are two types of container groups:
 *
 * - A **game server container group** has the containers that run your game server application and supporting software. A game server container group can have these container types:
 *
 *   - Game server container. This container runs your game server. You can define one game server container in a game server container group.
 *   - Support container. This container runs software in parallel with your game server. You can define up to 8 support containers in a game server group.
 *
 *   When building a game server container group definition, you can choose to bundle your game server executable and all dependent software into a single game server container. Alternatively, you can separate the software into one game server container and one or more support containers.
 *
 *   On a container fleet instance, a game server container group can be deployed multiple times (depending on the compute resources of the instance). This means that all containers in the container group are replicated together.
 * - A **per-instance container group** has containers for processes that aren't replicated on a container fleet instance. This might include background services, logging, test processes, or processes that need to persist independently of the game server container group. When building a per-instance container group, you can define up to 10 support containers.
 *
 * > **Note:** This operation requires Identity and Access Management (IAM) permissions to access container images in Amazon ECR repositories. See [IAM permissions for Amazon GameLift Servers](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-iam-policy-examples.html) for help setting the appropriate permissions.
 *
 * **Request options**
 *
 * Use this operation to make the following types of requests. You can specify values for the minimum required parameters and customize optional values later.
 *
 * - Create a game server container group definition. Provide the following required parameter values:
 *
 *   - `Name`
 *   - `ContainerGroupType` (`GAME_SERVER`)
 *   - `OperatingSystem`
 *   - `TotalMemoryLimitMebibytes`
 *   - Either `TotalVcpuLimit` or a `Vcpu` value for the game server container
 *   - At least one `GameServerContainerDefinition`
 *
 *     - `ContainerName`
 *     - `ImageUrl`
 *     - `PortConfiguration`
 *     - `ServerSdkVersion`
 * - Create a per-instance container group definition. Provide the following required parameter values:
 *
 *   - `Name`
 *   - `ContainerGroupType` (`PER_INSTANCE`)
 *   - `OperatingSystem`
 *   - `TotalMemoryLimitMebibytes`
 *   - `TotalVcpuLimit`
 *   - At least one `SupportContainerDefinition`
 *
 *     - `ContainerName`
 *     - `ImageUrl`
 *
 * **Results**
 *
 * If successful, this request creates a `ContainerGroupDefinition` resource and assigns a unique ARN value. You can update most properties of a container group definition by calling [UpdateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateContainerGroupDefinition.html), and optionally save the update as a new version.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateContainerGroupDefinitionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateContainerGroupDefinitionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // CreateContainerGroupDefinitionInput
 *   Name: "STRING_VALUE", // required
 *   ContainerGroupType: "GAME_SERVER" || "PER_INSTANCE",
 *   TotalMemoryLimitMebibytes: Number("int"), // required
 *   TotalVcpuLimit: Number("double"),
 *   GameServerContainerDefinition: { // GameServerContainerDefinitionInput
 *     ContainerName: "STRING_VALUE", // required
 *     DependsOn: [ // ContainerDependencyList
 *       { // ContainerDependency
 *         ContainerName: "STRING_VALUE", // required
 *         Condition: "START" || "COMPLETE" || "SUCCESS" || "HEALTHY", // required
 *       },
 *     ],
 *     MountPoints: [ // ContainerMountPointList
 *       { // ContainerMountPoint
 *         InstancePath: "STRING_VALUE", // required
 *         ContainerPath: "STRING_VALUE",
 *         AccessLevel: "READ_ONLY" || "READ_AND_WRITE",
 *       },
 *     ],
 *     EnvironmentOverride: [ // ContainerEnvironmentList
 *       { // ContainerEnvironment
 *         Name: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *     ImageUri: "STRING_VALUE", // required
 *     PortConfiguration: { // ContainerPortConfiguration
 *       ContainerPortRanges: [ // ContainerPortRangeList // required
 *         { // ContainerPortRange
 *           FromPort: Number("int"), // required
 *           ToPort: Number("int"), // required
 *           Protocol: "TCP" || "UDP", // required
 *         },
 *       ],
 *     },
 *     ServerSdkVersion: "STRING_VALUE", // required
 *     LinuxCapabilities: { // LinuxCapabilities
 *       Include: [ // LinuxCapabilityList
 *         "AUDIT_CONTROL" || "AUDIT_WRITE" || "BLOCK_SUSPEND" || "CHOWN" || "DAC_OVERRIDE" || "DAC_READ_SEARCH" || "FOWNER" || "FSETID" || "IPC_LOCK" || "IPC_OWNER" || "KILL" || "LEASE" || "LINUX_IMMUTABLE" || "MAC_ADMIN" || "MAC_OVERRIDE" || "MKNOD" || "NET_ADMIN" || "NET_BIND_SERVICE" || "NET_BROADCAST" || "NET_RAW" || "SETFCAP" || "SETGID" || "SETPCAP" || "SETUID" || "SYS_ADMIN" || "SYS_BOOT" || "SYS_CHROOT" || "SYS_MODULE" || "SYS_NICE" || "SYS_PACCT" || "SYS_PTRACE" || "SYS_RAWIO" || "SYS_RESOURCE" || "SYS_TIME" || "SYS_TTY_CONFIG" || "SYSLOG" || "WAKE_ALARM",
 *       ],
 *     },
 *     Vcpu: Number("double"),
 *   },
 *   SupportContainerDefinitions: [ // SupportContainerDefinitionInputList
 *     { // SupportContainerDefinitionInput
 *       ContainerName: "STRING_VALUE", // required
 *       DependsOn: [
 *         {
 *           ContainerName: "STRING_VALUE", // required
 *           Condition: "START" || "COMPLETE" || "SUCCESS" || "HEALTHY", // required
 *         },
 *       ],
 *       MountPoints: [
 *         {
 *           InstancePath: "STRING_VALUE", // required
 *           ContainerPath: "STRING_VALUE",
 *           AccessLevel: "READ_ONLY" || "READ_AND_WRITE",
 *         },
 *       ],
 *       EnvironmentOverride: [
 *         {
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       Essential: true || false,
 *       HealthCheck: { // ContainerHealthCheck
 *         Command: [ // ContainerCommandStringList // required
 *           "STRING_VALUE",
 *         ],
 *         Interval: Number("int"),
 *         Retries: Number("int"),
 *         StartPeriod: Number("int"),
 *         Timeout: Number("int"),
 *       },
 *       ImageUri: "STRING_VALUE", // required
 *       MemoryHardLimitMebibytes: Number("int"),
 *       PortConfiguration: {
 *         ContainerPortRanges: [ // required
 *           {
 *             FromPort: Number("int"), // required
 *             ToPort: Number("int"), // required
 *             Protocol: "TCP" || "UDP", // required
 *           },
 *         ],
 *       },
 *       Vcpu: Number("double"),
 *       LinuxCapabilities: {
 *         Include: [
 *           "AUDIT_CONTROL" || "AUDIT_WRITE" || "BLOCK_SUSPEND" || "CHOWN" || "DAC_OVERRIDE" || "DAC_READ_SEARCH" || "FOWNER" || "FSETID" || "IPC_LOCK" || "IPC_OWNER" || "KILL" || "LEASE" || "LINUX_IMMUTABLE" || "MAC_ADMIN" || "MAC_OVERRIDE" || "MKNOD" || "NET_ADMIN" || "NET_BIND_SERVICE" || "NET_BROADCAST" || "NET_RAW" || "SETFCAP" || "SETGID" || "SETPCAP" || "SETUID" || "SYS_ADMIN" || "SYS_BOOT" || "SYS_CHROOT" || "SYS_MODULE" || "SYS_NICE" || "SYS_PACCT" || "SYS_PTRACE" || "SYS_RAWIO" || "SYS_RESOURCE" || "SYS_TIME" || "SYS_TTY_CONFIG" || "SYSLOG" || "WAKE_ALARM",
 *         ],
 *       },
 *     },
 *   ],
 *   OperatingSystem: "AMAZON_LINUX_2023", // required
 *   VersionDescription: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateContainerGroupDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateContainerGroupDefinitionOutput
 * //   ContainerGroupDefinition: { // ContainerGroupDefinition
 * //     ContainerGroupDefinitionArn: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     OperatingSystem: "AMAZON_LINUX_2023",
 * //     Name: "STRING_VALUE", // required
 * //     ContainerGroupType: "GAME_SERVER" || "PER_INSTANCE",
 * //     TotalMemoryLimitMebibytes: Number("int"),
 * //     TotalVcpuLimit: Number("double"),
 * //     GameServerContainerDefinition: { // GameServerContainerDefinition
 * //       ContainerName: "STRING_VALUE",
 * //       DependsOn: [ // ContainerDependencyList
 * //         { // ContainerDependency
 * //           ContainerName: "STRING_VALUE", // required
 * //           Condition: "START" || "COMPLETE" || "SUCCESS" || "HEALTHY", // required
 * //         },
 * //       ],
 * //       MountPoints: [ // ContainerMountPointList
 * //         { // ContainerMountPoint
 * //           InstancePath: "STRING_VALUE", // required
 * //           ContainerPath: "STRING_VALUE",
 * //           AccessLevel: "READ_ONLY" || "READ_AND_WRITE",
 * //         },
 * //       ],
 * //       EnvironmentOverride: [ // ContainerEnvironmentList
 * //         { // ContainerEnvironment
 * //           Name: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       ImageUri: "STRING_VALUE",
 * //       PortConfiguration: { // ContainerPortConfiguration
 * //         ContainerPortRanges: [ // ContainerPortRangeList // required
 * //           { // ContainerPortRange
 * //             FromPort: Number("int"), // required
 * //             ToPort: Number("int"), // required
 * //             Protocol: "TCP" || "UDP", // required
 * //           },
 * //         ],
 * //       },
 * //       ResolvedImageDigest: "STRING_VALUE",
 * //       ServerSdkVersion: "STRING_VALUE",
 * //       LinuxCapabilities: { // LinuxCapabilities
 * //         Include: [ // LinuxCapabilityList
 * //           "AUDIT_CONTROL" || "AUDIT_WRITE" || "BLOCK_SUSPEND" || "CHOWN" || "DAC_OVERRIDE" || "DAC_READ_SEARCH" || "FOWNER" || "FSETID" || "IPC_LOCK" || "IPC_OWNER" || "KILL" || "LEASE" || "LINUX_IMMUTABLE" || "MAC_ADMIN" || "MAC_OVERRIDE" || "MKNOD" || "NET_ADMIN" || "NET_BIND_SERVICE" || "NET_BROADCAST" || "NET_RAW" || "SETFCAP" || "SETGID" || "SETPCAP" || "SETUID" || "SYS_ADMIN" || "SYS_BOOT" || "SYS_CHROOT" || "SYS_MODULE" || "SYS_NICE" || "SYS_PACCT" || "SYS_PTRACE" || "SYS_RAWIO" || "SYS_RESOURCE" || "SYS_TIME" || "SYS_TTY_CONFIG" || "SYSLOG" || "WAKE_ALARM",
 * //         ],
 * //       },
 * //       Vcpu: Number("double"),
 * //     },
 * //     SupportContainerDefinitions: [ // SupportContainerDefinitionList
 * //       { // SupportContainerDefinition
 * //         ContainerName: "STRING_VALUE",
 * //         DependsOn: [
 * //           {
 * //             ContainerName: "STRING_VALUE", // required
 * //             Condition: "START" || "COMPLETE" || "SUCCESS" || "HEALTHY", // required
 * //           },
 * //         ],
 * //         MountPoints: [
 * //           {
 * //             InstancePath: "STRING_VALUE", // required
 * //             ContainerPath: "STRING_VALUE",
 * //             AccessLevel: "READ_ONLY" || "READ_AND_WRITE",
 * //           },
 * //         ],
 * //         EnvironmentOverride: [
 * //           {
 * //             Name: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         Essential: true || false,
 * //         HealthCheck: { // ContainerHealthCheck
 * //           Command: [ // ContainerCommandStringList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           Interval: Number("int"),
 * //           Retries: Number("int"),
 * //           StartPeriod: Number("int"),
 * //           Timeout: Number("int"),
 * //         },
 * //         ImageUri: "STRING_VALUE",
 * //         MemoryHardLimitMebibytes: Number("int"),
 * //         PortConfiguration: {
 * //           ContainerPortRanges: [ // required
 * //             {
 * //               FromPort: Number("int"), // required
 * //               ToPort: Number("int"), // required
 * //               Protocol: "TCP" || "UDP", // required
 * //             },
 * //           ],
 * //         },
 * //         ResolvedImageDigest: "STRING_VALUE",
 * //         Vcpu: Number("double"),
 * //         LinuxCapabilities: {
 * //           Include: [
 * //             "AUDIT_CONTROL" || "AUDIT_WRITE" || "BLOCK_SUSPEND" || "CHOWN" || "DAC_OVERRIDE" || "DAC_READ_SEARCH" || "FOWNER" || "FSETID" || "IPC_LOCK" || "IPC_OWNER" || "KILL" || "LEASE" || "LINUX_IMMUTABLE" || "MAC_ADMIN" || "MAC_OVERRIDE" || "MKNOD" || "NET_ADMIN" || "NET_BIND_SERVICE" || "NET_BROADCAST" || "NET_RAW" || "SETFCAP" || "SETGID" || "SETPCAP" || "SETUID" || "SYS_ADMIN" || "SYS_BOOT" || "SYS_CHROOT" || "SYS_MODULE" || "SYS_NICE" || "SYS_PACCT" || "SYS_PTRACE" || "SYS_RAWIO" || "SYS_RESOURCE" || "SYS_TIME" || "SYS_TTY_CONFIG" || "SYSLOG" || "WAKE_ALARM",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     VersionNumber: Number("int"),
 * //     VersionDescription: "STRING_VALUE",
 * //     Status: "READY" || "COPYING" || "FAILED",
 * //     StatusReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateContainerGroupDefinitionCommandInput - {@link CreateContainerGroupDefinitionCommandInput}
 * @returns {@link CreateContainerGroupDefinitionCommandOutput}
 * @see {@link CreateContainerGroupDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateContainerGroupDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested operation would cause the resource to exceed the allowed service limit. Resolve the issue before retrying.
 *
 * @throws {@link TaggingFailedException} (client fault)
 *
 * The requested tagging operation did not succeed. This may be due to invalid tag format or the maximum tag limit may have been exceeded. Resolve the issue before retrying.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The client failed authentication. Clients should not retry such requests.
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *
 * The requested operation is not supported in the Region specified.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class CreateContainerGroupDefinitionCommand extends command<CreateContainerGroupDefinitionCommandInput, CreateContainerGroupDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "CreateContainerGroupDefinition",
  CreateContainerGroupDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContainerGroupDefinitionInput;
      output: CreateContainerGroupDefinitionOutput;
    };
    sdk: {
      input: CreateContainerGroupDefinitionCommandInput;
      output: CreateContainerGroupDefinitionCommandOutput;
    };
  };
}
