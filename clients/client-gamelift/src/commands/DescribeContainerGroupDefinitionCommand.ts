// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeContainerGroupDefinitionInput, DescribeContainerGroupDefinitionOutput } from "../models/models_0";
import { DescribeContainerGroupDefinition } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeContainerGroupDefinitionCommand}.
 */
export interface DescribeContainerGroupDefinitionCommandInput extends DescribeContainerGroupDefinitionInput {}
/**
 * @public
 *
 * The output of {@link DescribeContainerGroupDefinitionCommand}.
 */
export interface DescribeContainerGroupDefinitionCommandOutput
  extends DescribeContainerGroupDefinitionOutput,
    __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> Container</p>
 *          <p>Retrieves the properties of a container group definition, including all container
 *       definitions in the group. </p>
 *          <p>
 *             <b>Request options:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Retrieve the latest version of a  container group definition. Specify the container
 *           group definition name only, or use an ARN value without a version number.</p>
 *             </li>
 *             <li>
 *                <p>Retrieve a particular version. Specify the container group definition name and a
 *           version number, or use an ARN value that includes the version number.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Results:</b>
 *          </p>
 *          <p>If successful, this operation returns the complete properties of a container group
 *       definition version.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/containers-create-groups.html">Manage a container group definition</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeContainerGroupDefinitionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeContainerGroupDefinitionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeContainerGroupDefinitionInput
 *   Name: "STRING_VALUE", // required
 *   VersionNumber: Number("int"),
 * };
 * const command = new DescribeContainerGroupDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContainerGroupDefinitionOutput
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
 * @param DescribeContainerGroupDefinitionCommandInput - {@link DescribeContainerGroupDefinitionCommandInput}
 * @returns {@link DescribeContainerGroupDefinitionCommandOutput}
 * @see {@link DescribeContainerGroupDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeContainerGroupDefinitionCommandOutput} for command's `response` shape.
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
export class DescribeContainerGroupDefinitionCommand extends $Command
  .classBuilder<
    DescribeContainerGroupDefinitionCommandInput,
    DescribeContainerGroupDefinitionCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "DescribeContainerGroupDefinition", {})
  .n("GameLiftClient", "DescribeContainerGroupDefinitionCommand")
  .sc(DescribeContainerGroupDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeContainerGroupDefinitionInput;
      output: DescribeContainerGroupDefinitionOutput;
    };
    sdk: {
      input: DescribeContainerGroupDefinitionCommandInput;
      output: DescribeContainerGroupDefinitionCommandOutput;
    };
  };
}
