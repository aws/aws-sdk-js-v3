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
 * <p>
 *             <b>This operation is used with the Amazon GameLift containers feature, which is currently in public preview. </b>
 *          </p>
 *          <p>Creates a <code>ContainerGroupDefinition</code> resource that describes a set of
 *       containers for hosting your game server with Amazon GameLift managed EC2 hosting. An Amazon GameLift container
 *       group is similar to a container "task" and "pod". Each container group can have one or more
 *       containers. </p>
 *          <p>Use container group definitions when you create a container fleet. Container group
 *       definitions determine how Amazon GameLift deploys your containers to each instance in a container
 *       fleet. </p>
 *          <p>You can create two types of container groups, based on scheduling strategy:</p>
 *          <ul>
 *             <li>
 *                <p>A <b>replica container group</b> manages the containers that run
 *         your game server application and supporting software. Replica container groups might be
 *         replicated multiple times on each fleet instance, depending on instance resources. </p>
 *             </li>
 *             <li>
 *                <p>A <b>daemon container group</b> manages containers that run other
 *         software, such as background services, logging, or test processes. You might use a daemon
 *         container group for processes that need to run only once per fleet instance, or processes
 *         that need to persist independently of the replica container group. </p>
 *             </li>
 *          </ul>
 *          <p>To create a container group definition, specify a group name, a list of container
 *       definitions, and maximum total CPU and memory requirements for the container group. Specify an
 *       operating system and scheduling strategy or use the default values. When using the Amazon Web Services CLI
 *       tool, you can pass in your container definitions as a JSON file.</p>
 *          <note>
 *             <p>This operation requires Identity and Access Management (IAM) permissions to access container images in
 *         Amazon ECR repositories. See <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-iam-policy-examples.html"> IAM permissions
 *           for Amazon GameLift</a> for help setting the appropriate permissions.</p>
 *          </note>
 *          <p>If successful, this operation creates a new <code>ContainerGroupDefinition</code> resource
 *       with an ARN value assigned. You can't change the properties of a container group definition.
 *       Instead, create a new one. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/containers-create-groups.html">Create a container group definition</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/containers-design-fleet.html">Container fleet design guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/containers-definitions.html#containers-definitions-create">Create a container definition as a JSON file</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateContainerGroupDefinitionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateContainerGroupDefinitionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // CreateContainerGroupDefinitionInput
 *   Name: "STRING_VALUE", // required
 *   SchedulingStrategy: "REPLICA" || "DAEMON",
 *   TotalMemoryLimit: Number("int"), // required
 *   TotalCpuLimit: Number("int"), // required
 *   ContainerDefinitions: [ // ContainerDefinitionInputList // required
 *     { // ContainerDefinitionInput
 *       ContainerName: "STRING_VALUE", // required
 *       ImageUri: "STRING_VALUE", // required
 *       MemoryLimits: { // ContainerMemoryLimits
 *         SoftLimit: Number("int"),
 *         HardLimit: Number("int"),
 *       },
 *       PortConfiguration: { // ContainerPortConfiguration
 *         ContainerPortRanges: [ // ContainerPortRangeList // required
 *           { // ContainerPortRange
 *             FromPort: Number("int"), // required
 *             ToPort: Number("int"), // required
 *             Protocol: "TCP" || "UDP", // required
 *           },
 *         ],
 *       },
 *       Cpu: Number("int"),
 *       HealthCheck: { // ContainerHealthCheck
 *         Command: [ // ContainerCommandStringList // required
 *           "STRING_VALUE",
 *         ],
 *         Interval: Number("int"),
 *         Timeout: Number("int"),
 *         Retries: Number("int"),
 *         StartPeriod: Number("int"),
 *       },
 *       Command: [
 *         "STRING_VALUE",
 *       ],
 *       Essential: true || false,
 *       EntryPoint: [ // ContainerEntryPointList
 *         "STRING_VALUE",
 *       ],
 *       WorkingDirectory: "STRING_VALUE",
 *       Environment: [ // ContainerEnvironmentList
 *         { // ContainerEnvironment
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       DependsOn: [ // ContainerDependencyList
 *         { // ContainerDependency
 *           ContainerName: "STRING_VALUE", // required
 *           Condition: "START" || "COMPLETE" || "SUCCESS" || "HEALTHY", // required
 *         },
 *       ],
 *     },
 *   ],
 *   OperatingSystem: "AMAZON_LINUX_2023", // required
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
 * //     Name: "STRING_VALUE",
 * //     SchedulingStrategy: "REPLICA" || "DAEMON",
 * //     TotalMemoryLimit: Number("int"),
 * //     TotalCpuLimit: Number("int"),
 * //     ContainerDefinitions: [ // ContainerDefinitionList
 * //       { // ContainerDefinition
 * //         ContainerName: "STRING_VALUE", // required
 * //         ImageUri: "STRING_VALUE", // required
 * //         ResolvedImageDigest: "STRING_VALUE",
 * //         MemoryLimits: { // ContainerMemoryLimits
 * //           SoftLimit: Number("int"),
 * //           HardLimit: Number("int"),
 * //         },
 * //         PortConfiguration: { // ContainerPortConfiguration
 * //           ContainerPortRanges: [ // ContainerPortRangeList // required
 * //             { // ContainerPortRange
 * //               FromPort: Number("int"), // required
 * //               ToPort: Number("int"), // required
 * //               Protocol: "TCP" || "UDP", // required
 * //             },
 * //           ],
 * //         },
 * //         Cpu: Number("int"),
 * //         HealthCheck: { // ContainerHealthCheck
 * //           Command: [ // ContainerCommandStringList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           Interval: Number("int"),
 * //           Timeout: Number("int"),
 * //           Retries: Number("int"),
 * //           StartPeriod: Number("int"),
 * //         },
 * //         Command: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Essential: true || false,
 * //         EntryPoint: [ // ContainerEntryPointList
 * //           "STRING_VALUE",
 * //         ],
 * //         WorkingDirectory: "STRING_VALUE",
 * //         Environment: [ // ContainerEnvironmentList
 * //           { // ContainerEnvironment
 * //             Name: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         DependsOn: [ // ContainerDependencyList
 * //           { // ContainerDependency
 * //             ContainerName: "STRING_VALUE", // required
 * //             Condition: "START" || "COMPLETE" || "SUCCESS" || "HEALTHY", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
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
