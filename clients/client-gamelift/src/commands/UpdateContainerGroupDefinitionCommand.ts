// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateContainerGroupDefinitionInput, UpdateContainerGroupDefinitionOutput } from "../models/models_0";
import { UpdateContainerGroupDefinition } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContainerGroupDefinitionCommand}.
 */
export interface UpdateContainerGroupDefinitionCommandInput extends UpdateContainerGroupDefinitionInput {}
/**
 * @public
 *
 * The output of {@link UpdateContainerGroupDefinitionCommand}.
 */
export interface UpdateContainerGroupDefinitionCommandOutput
  extends UpdateContainerGroupDefinitionOutput,
    __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> Container</p>
 *          <p>Updates properties in an existing container group definition. This operation doesn't
 *       replace the definition. Instead, it creates a new version of the definition and saves it
 *       separately. You can access all versions that you choose to retain.</p>
 *          <p>The only property you can't update is the container group type.</p>
 *          <p>
 *             <b>Request options:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Update based on the latest version of the container group definition. Specify the
 *           container group definition name only, or use an ARN value without a version number.
 *           Provide updated values for the properties that you want to change only. All other values
 *           remain the same as the latest version.</p>
 *             </li>
 *             <li>
 *                <p>Update based on a specific version of the container group definition. Specify the
 *           container group definition name and a source version number, or use an ARN value with a
 *           version number. Provide updated values for the properties that you want to change only.
 *           All other values remain the same as the source version.</p>
 *             </li>
 *             <li>
 *                <p>Change a game server container definition. Provide the updated container
 *           definition.</p>
 *             </li>
 *             <li>
 *                <p>Add or change a support container definition. Provide a complete set of container
 *           definitions, including the updated definition.</p>
 *             </li>
 *             <li>
 *                <p>Remove a support container definition. Provide a complete set of container
 *           definitions, excluding the definition to remove. If the container group has only one
 *           support container definition, provide an empty set.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Results:</b>
 *          </p>
 *          <p>If successful, this operation returns the complete properties of the new container group
 *       definition version.</p>
 *          <p>If the container group definition version is used in an active fleets, the update
 *       automatically initiates a new fleet deployment of the new version. You can track a fleet's
 *       deployments using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListFleetDeployments.html">ListFleetDeployments</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateContainerGroupDefinitionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateContainerGroupDefinitionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // UpdateContainerGroupDefinitionInput
 *   Name: "STRING_VALUE", // required
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
 *   TotalMemoryLimitMebibytes: Number("int"),
 *   TotalVcpuLimit: Number("double"),
 *   VersionDescription: "STRING_VALUE",
 *   SourceVersionNumber: Number("int"),
 *   OperatingSystem: "AMAZON_LINUX_2023",
 * };
 * const command = new UpdateContainerGroupDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContainerGroupDefinitionOutput
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
 * @param UpdateContainerGroupDefinitionCommandInput - {@link UpdateContainerGroupDefinitionCommandInput}
 * @returns {@link UpdateContainerGroupDefinitionCommandOutput}
 * @see {@link UpdateContainerGroupDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateContainerGroupDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resources was not found. The resource was either not created yet or deleted.</p>
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
 *
 * @public
 */
export class UpdateContainerGroupDefinitionCommand extends $Command
  .classBuilder<
    UpdateContainerGroupDefinitionCommandInput,
    UpdateContainerGroupDefinitionCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "UpdateContainerGroupDefinition", {})
  .n("GameLiftClient", "UpdateContainerGroupDefinitionCommand")
  .sc(UpdateContainerGroupDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContainerGroupDefinitionInput;
      output: UpdateContainerGroupDefinitionOutput;
    };
    sdk: {
      input: UpdateContainerGroupDefinitionCommandInput;
      output: UpdateContainerGroupDefinitionCommandOutput;
    };
  };
}
