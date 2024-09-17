// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  DescribeContainerGroupDefinitionInput,
  DescribeContainerGroupDefinitionOutput,
  DescribeContainerGroupDefinitionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeContainerGroupDefinitionCommand,
  se_DescribeContainerGroupDefinitionCommand,
} from "../protocols/Aws_json1_1";

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
 *             <b>This operation is used with the Amazon GameLift containers feature, which is currently in public preview. </b>
 *          </p>
 *          <p>Retrieves the properties of a container group definition, including all container
 *       definitions in the group. </p>
 *          <p>To retrieve a container group definition, provide a resource identifier. If successful,
 *       this operation returns the complete properties of the container group definition.</p>
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
 * const client = new GameLiftClient(config);
 * const input = { // DescribeContainerGroupDefinitionInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeContainerGroupDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContainerGroupDefinitionOutput
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "DescribeContainerGroupDefinition", {})
  .n("GameLiftClient", "DescribeContainerGroupDefinitionCommand")
  .f(void 0, DescribeContainerGroupDefinitionOutputFilterSensitiveLog)
  .ser(se_DescribeContainerGroupDefinitionCommand)
  .de(de_DescribeContainerGroupDefinitionCommand)
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
