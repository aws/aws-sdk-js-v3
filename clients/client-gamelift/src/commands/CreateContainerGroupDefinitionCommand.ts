// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  CreateContainerGroupDefinitionInput,
  CreateContainerGroupDefinitionInputFilterSensitiveLog,
  CreateContainerGroupDefinitionOutput,
  CreateContainerGroupDefinitionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateContainerGroupDefinitionCommand,
  se_CreateContainerGroupDefinitionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface CreateContainerGroupDefinitionCommandOutput
  extends CreateContainerGroupDefinitionOutput,
    __MetadataBearer {}

/**
 * <p>Creates a <code>ContainerGroupDefinition</code> that describes a set of containers for
 *       hosting your game server with Amazon GameLift managed containers hosting. An Amazon GameLift container group
 *       is similar to a container task or pod. Use container group definitions when you create a
 *       container fleet with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateContainerFleet.html">CreateContainerFleet</a>. </p>
 *          <p>A container group definition determines how Amazon GameLift deploys your containers to each
 *       instance in a container fleet. You can maintain multiple versions of a container group
 *       definition.</p>
 *          <p>There are two types of container groups:</p>
 *          <ul>
 *             <li>
 *                <p>A <b>game server container group</b> has the containers that run
 *           your game server application and supporting software. A game server container group can
 *           have these container types:</p>
 *                <ul>
 *                   <li>
 *                      <p>Game server container. This container runs your game server. You can define one
 *               game server container in a game server container group.</p>
 *                   </li>
 *                   <li>
 *                      <p>Support container. This container runs software in parallel with your game server.
 *               You can define up to 8 support containers in a game server group.</p>
 *                   </li>
 *                </ul>
 *                <p>When building a game server container group definition, you can choose to bundle your
 *           game server executable and all dependent software into a single game server container.
 *           Alternatively, you can separate the software into one game server container and one or
 *           more support containers.</p>
 *                <p>On a container fleet instance, a game server container group can be deployed multiple
 *           times (depending on the compute resources of the instance). This means that all containers
 *           in the container group are replicated together.</p>
 *             </li>
 *             <li>
 *                <p>A <b>per-instance container group</b> has containers for processes
 *           that aren't replicated on a container fleet instance. This might include background
 *           services, logging, test processes, or processes that need to persist independently of the
 *           game server container group. When building a per-instance container group, you can define
 *           up to 10 support containers.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>This operation requires Identity and Access Management (IAM) permissions to access container images in
 *         Amazon ECR repositories. See <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-iam-policy-examples.html"> IAM permissions
 *           for Amazon GameLift</a> for help setting the appropriate permissions.</p>
 *          </note>
 *          <p>
 *             <b>Request options</b>
 *          </p>
 *          <p>Use this operation to make the following types of requests. You can specify values for the
 *       minimum required parameters and customize optional values later.</p>
 *          <ul>
 *             <li>
 *                <p>Create a game server container group definition. Provide the following required parameter values:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>Name</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>ContainerGroupType</code> (<code>GAME_SERVER</code>)</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>OperatingSystem</code> (omit to use default value)</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>TotalMemoryLimitMebibytes</code> (omit to use default value)</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>TotalVcpuLimit </code>(omit to use default value)</p>
 *                   </li>
 *                   <li>
 *                      <p>At least one <code>GameServerContainerDefinition</code>
 *                      </p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <code>ContainerName</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>ImageUrl</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>PortConfiguration</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>ServerSdkVersion</code> (omit to use default value)</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Create a per-instance container group definition. Provide the following required parameter
 *           values:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>Name</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>ContainerGroupType</code> (<code>PER_INSTANCE</code>)</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>OperatingSystem</code> (omit to use default value)</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>TotalMemoryLimitMebibytes</code> (omit to use default value)</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>TotalVcpuLimit </code>(omit to use default value)</p>
 *                   </li>
 *                   <li>
 *                      <p>At least one <code>SupportContainerDefinition</code>
 *                      </p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <code>ContainerName</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>ImageUrl</code>
 *                            </p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Results</b>
 *          </p>
 *          <p>If successful, this request creates a <code>ContainerGroupDefinition</code> resource and
 *       assigns a unique ARN value. You can update most properties of a container group definition by
 *       calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateContainerGroupDefinition.html">UpdateContainerGroupDefinition</a>, and optionally save the update as a new version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateContainerGroupDefinitionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateContainerGroupDefinitionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // CreateContainerGroupDefinitionInput
 *   Name: "STRING_VALUE", // required
 *   ContainerGroupType: "GAME_SERVER" || "PER_INSTANCE",
 *   TotalMemoryLimitMebibytes: Number("int"), // required
 *   TotalVcpuLimit: Number("double"), // required
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
 *  <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 *          <p></p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested operation would cause the resource to exceed the allowed service limit.
 *             Resolve the issue before retrying.</p>
 *
 * @throws {@link TaggingFailedException} (client fault)
 *  <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 * @public
 */
export class CreateContainerGroupDefinitionCommand extends $Command
  .classBuilder<
    CreateContainerGroupDefinitionCommandInput,
    CreateContainerGroupDefinitionCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "CreateContainerGroupDefinition", {})
  .n("GameLiftClient", "CreateContainerGroupDefinitionCommand")
  .f(CreateContainerGroupDefinitionInputFilterSensitiveLog, CreateContainerGroupDefinitionOutputFilterSensitiveLog)
  .ser(se_CreateContainerGroupDefinitionCommand)
  .de(de_CreateContainerGroupDefinitionCommand)
  .build() {
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
