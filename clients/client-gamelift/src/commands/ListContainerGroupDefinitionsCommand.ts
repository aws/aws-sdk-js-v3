// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  ListContainerGroupDefinitionsInput,
  ListContainerGroupDefinitionsOutput,
  ListContainerGroupDefinitionsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListContainerGroupDefinitionsCommand,
  se_ListContainerGroupDefinitionsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContainerGroupDefinitionsCommand}.
 */
export interface ListContainerGroupDefinitionsCommandInput extends ListContainerGroupDefinitionsInput {}
/**
 * @public
 *
 * The output of {@link ListContainerGroupDefinitionsCommand}.
 */
export interface ListContainerGroupDefinitionsCommandOutput
  extends ListContainerGroupDefinitionsOutput,
    __MetadataBearer {}

/**
 * <p>
 *             <b>This operation is used with the Amazon GameLift containers feature, which is currently in public preview. </b>
 *          </p>
 *          <p>Retrieves all container group definitions for the Amazon Web Services account and Amazon Web Services Region that are currently in use. You can filter the result set by the container
 *       groups' scheduling strategy. Use the pagination parameters to retrieve results in a set of
 *       sequential pages.</p>
 *          <note>
 *             <p>This operation returns the list of container group definitions in no particular order. </p>
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
 * import { GameLiftClient, ListContainerGroupDefinitionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListContainerGroupDefinitionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // ListContainerGroupDefinitionsInput
 *   SchedulingStrategy: "REPLICA" || "DAEMON",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListContainerGroupDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListContainerGroupDefinitionsOutput
 * //   ContainerGroupDefinitions: [ // ContainerGroupDefinitionList
 * //     { // ContainerGroupDefinition
 * //       ContainerGroupDefinitionArn: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       OperatingSystem: "AMAZON_LINUX_2023",
 * //       Name: "STRING_VALUE",
 * //       SchedulingStrategy: "REPLICA" || "DAEMON",
 * //       TotalMemoryLimit: Number("int"),
 * //       TotalCpuLimit: Number("int"),
 * //       ContainerDefinitions: [ // ContainerDefinitionList
 * //         { // ContainerDefinition
 * //           ContainerName: "STRING_VALUE", // required
 * //           ImageUri: "STRING_VALUE", // required
 * //           ResolvedImageDigest: "STRING_VALUE",
 * //           MemoryLimits: { // ContainerMemoryLimits
 * //             SoftLimit: Number("int"),
 * //             HardLimit: Number("int"),
 * //           },
 * //           PortConfiguration: { // ContainerPortConfiguration
 * //             ContainerPortRanges: [ // ContainerPortRangeList // required
 * //               { // ContainerPortRange
 * //                 FromPort: Number("int"), // required
 * //                 ToPort: Number("int"), // required
 * //                 Protocol: "TCP" || "UDP", // required
 * //               },
 * //             ],
 * //           },
 * //           Cpu: Number("int"),
 * //           HealthCheck: { // ContainerHealthCheck
 * //             Command: [ // ContainerCommandStringList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             Interval: Number("int"),
 * //             Timeout: Number("int"),
 * //             Retries: Number("int"),
 * //             StartPeriod: Number("int"),
 * //           },
 * //           Command: [
 * //             "STRING_VALUE",
 * //           ],
 * //           Essential: true || false,
 * //           EntryPoint: [ // ContainerEntryPointList
 * //             "STRING_VALUE",
 * //           ],
 * //           WorkingDirectory: "STRING_VALUE",
 * //           Environment: [ // ContainerEnvironmentList
 * //             { // ContainerEnvironment
 * //               Name: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           DependsOn: [ // ContainerDependencyList
 * //             { // ContainerDependency
 * //               ContainerName: "STRING_VALUE", // required
 * //               Condition: "START" || "COMPLETE" || "SUCCESS" || "HEALTHY", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       Status: "READY" || "COPYING" || "FAILED",
 * //       StatusReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContainerGroupDefinitionsCommandInput - {@link ListContainerGroupDefinitionsCommandInput}
 * @returns {@link ListContainerGroupDefinitionsCommandOutput}
 * @see {@link ListContainerGroupDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListContainerGroupDefinitionsCommandOutput} for command's `response` shape.
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
export class ListContainerGroupDefinitionsCommand extends $Command
  .classBuilder<
    ListContainerGroupDefinitionsCommandInput,
    ListContainerGroupDefinitionsCommandOutput,
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
  .s("GameLift", "ListContainerGroupDefinitions", {})
  .n("GameLiftClient", "ListContainerGroupDefinitionsCommand")
  .f(void 0, ListContainerGroupDefinitionsOutputFilterSensitiveLog)
  .ser(se_ListContainerGroupDefinitionsCommand)
  .de(de_ListContainerGroupDefinitionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContainerGroupDefinitionsInput;
      output: ListContainerGroupDefinitionsOutput;
    };
    sdk: {
      input: ListContainerGroupDefinitionsCommandInput;
      output: ListContainerGroupDefinitionsCommandOutput;
    };
  };
}
