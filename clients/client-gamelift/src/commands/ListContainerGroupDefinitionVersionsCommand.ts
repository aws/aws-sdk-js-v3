// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type {
  ListContainerGroupDefinitionVersionsInput,
  ListContainerGroupDefinitionVersionsOutput,
} from "../models/models_0";
import { ListContainerGroupDefinitionVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContainerGroupDefinitionVersionsCommand}.
 */
export interface ListContainerGroupDefinitionVersionsCommandInput extends ListContainerGroupDefinitionVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListContainerGroupDefinitionVersionsCommand}.
 */
export interface ListContainerGroupDefinitionVersionsCommandOutput extends ListContainerGroupDefinitionVersionsOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> Container</p>
 *          <p>Retrieves all versions of a container group definition. Use the pagination parameters to
 *       retrieve results in a set of sequential pages.</p>
 *          <p>
 *             <b>Request options:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Get all versions of a specified container group definition. Specify the container
 *           group definition name or ARN value. (If the ARN value has a version number, it's
 *           ignored.)</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Results:</b>
 *          </p>
 *          <p>If successful, this operation returns the complete properties of a set of container group
 *       definition versions that match the request.</p>
 *          <note>
 *             <p>This operation returns the list of container group definitions in descending version
 *         order (latest first). </p>
 *          </note>
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
 * import { GameLiftClient, ListContainerGroupDefinitionVersionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListContainerGroupDefinitionVersionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // ListContainerGroupDefinitionVersionsInput
 *   Name: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListContainerGroupDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListContainerGroupDefinitionVersionsOutput
 * //   ContainerGroupDefinitions: [ // ContainerGroupDefinitionList
 * //     { // ContainerGroupDefinition
 * //       ContainerGroupDefinitionArn: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       OperatingSystem: "AMAZON_LINUX_2023",
 * //       Name: "STRING_VALUE", // required
 * //       ContainerGroupType: "GAME_SERVER" || "PER_INSTANCE",
 * //       TotalMemoryLimitMebibytes: Number("int"),
 * //       TotalVcpuLimit: Number("double"),
 * //       GameServerContainerDefinition: { // GameServerContainerDefinition
 * //         ContainerName: "STRING_VALUE",
 * //         DependsOn: [ // ContainerDependencyList
 * //           { // ContainerDependency
 * //             ContainerName: "STRING_VALUE", // required
 * //             Condition: "START" || "COMPLETE" || "SUCCESS" || "HEALTHY", // required
 * //           },
 * //         ],
 * //         MountPoints: [ // ContainerMountPointList
 * //           { // ContainerMountPoint
 * //             InstancePath: "STRING_VALUE", // required
 * //             ContainerPath: "STRING_VALUE",
 * //             AccessLevel: "READ_ONLY" || "READ_AND_WRITE",
 * //           },
 * //         ],
 * //         EnvironmentOverride: [ // ContainerEnvironmentList
 * //           { // ContainerEnvironment
 * //             Name: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         ImageUri: "STRING_VALUE",
 * //         PortConfiguration: { // ContainerPortConfiguration
 * //           ContainerPortRanges: [ // ContainerPortRangeList // required
 * //             { // ContainerPortRange
 * //               FromPort: Number("int"), // required
 * //               ToPort: Number("int"), // required
 * //               Protocol: "TCP" || "UDP", // required
 * //             },
 * //           ],
 * //         },
 * //         ResolvedImageDigest: "STRING_VALUE",
 * //         ServerSdkVersion: "STRING_VALUE",
 * //       },
 * //       SupportContainerDefinitions: [ // SupportContainerDefinitionList
 * //         { // SupportContainerDefinition
 * //           ContainerName: "STRING_VALUE",
 * //           DependsOn: [
 * //             {
 * //               ContainerName: "STRING_VALUE", // required
 * //               Condition: "START" || "COMPLETE" || "SUCCESS" || "HEALTHY", // required
 * //             },
 * //           ],
 * //           MountPoints: [
 * //             {
 * //               InstancePath: "STRING_VALUE", // required
 * //               ContainerPath: "STRING_VALUE",
 * //               AccessLevel: "READ_ONLY" || "READ_AND_WRITE",
 * //             },
 * //           ],
 * //           EnvironmentOverride: [
 * //             {
 * //               Name: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           Essential: true || false,
 * //           HealthCheck: { // ContainerHealthCheck
 * //             Command: [ // ContainerCommandStringList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             Interval: Number("int"),
 * //             Retries: Number("int"),
 * //             StartPeriod: Number("int"),
 * //             Timeout: Number("int"),
 * //           },
 * //           ImageUri: "STRING_VALUE",
 * //           MemoryHardLimitMebibytes: Number("int"),
 * //           PortConfiguration: {
 * //             ContainerPortRanges: [ // required
 * //               {
 * //                 FromPort: Number("int"), // required
 * //                 ToPort: Number("int"), // required
 * //                 Protocol: "TCP" || "UDP", // required
 * //               },
 * //             ],
 * //           },
 * //           ResolvedImageDigest: "STRING_VALUE",
 * //           Vcpu: Number("double"),
 * //         },
 * //       ],
 * //       VersionNumber: Number("int"),
 * //       VersionDescription: "STRING_VALUE",
 * //       Status: "READY" || "COPYING" || "FAILED",
 * //       StatusReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContainerGroupDefinitionVersionsCommandInput - {@link ListContainerGroupDefinitionVersionsCommandInput}
 * @returns {@link ListContainerGroupDefinitionVersionsCommandOutput}
 * @see {@link ListContainerGroupDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListContainerGroupDefinitionVersionsCommandOutput} for command's `response` shape.
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
export class ListContainerGroupDefinitionVersionsCommand extends $Command
  .classBuilder<
    ListContainerGroupDefinitionVersionsCommandInput,
    ListContainerGroupDefinitionVersionsCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "ListContainerGroupDefinitionVersions", {})
  .n("GameLiftClient", "ListContainerGroupDefinitionVersionsCommand")
  .sc(ListContainerGroupDefinitionVersions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContainerGroupDefinitionVersionsInput;
      output: ListContainerGroupDefinitionVersionsOutput;
    };
    sdk: {
      input: ListContainerGroupDefinitionVersionsCommandInput;
      output: ListContainerGroupDefinitionVersionsCommandOutput;
    };
  };
}
