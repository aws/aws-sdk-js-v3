// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type {
  DescribeContainerGroupPortMappingsInput,
  DescribeContainerGroupPortMappingsOutput,
} from "../models/models_0";
import { DescribeContainerGroupPortMappings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeContainerGroupPortMappingsCommand}.
 */
export interface DescribeContainerGroupPortMappingsCommandInput extends DescribeContainerGroupPortMappingsInput {}
/**
 * @public
 *
 * The output of {@link DescribeContainerGroupPortMappingsCommand}.
 */
export interface DescribeContainerGroupPortMappingsCommandOutput extends DescribeContainerGroupPortMappingsOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> Container</p>
 *          <p>Retrieves the port mappings for a container group running on a container fleet. Port
 *             mappings show how container ports are mapped to connection ports on the fleet instance.
 *             Use this operation to find the connection port for a specific container on a fleet
 *             instance.</p>
 *          <p>
 *             <b>Request options</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Get port mappings for a game server container group. Provide the fleet ID,
 *                 set <code>ContainerGroupType</code> to <code>GAME_SERVER</code>, and specify the
 *                 <code>ComputeName</code> for the game server container group.</p>
 *             </li>
 *             <li>
 *                <p>Get port mappings for a per-instance container group. Provide the fleet ID,
 *                 set <code>ContainerGroupType</code> to <code>PER_INSTANCE</code>, and specify the
 *                 <code>InstanceId</code> for the instance.</p>
 *             </li>
 *             <li>
 *                <p>Optionally filter results to a single container by providing a
 *                 <code>ContainerName</code>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Results</b>
 *          </p>
 *          <p>This operation returns the fleet ID, fleet ARN, location, container group definition
 *             ARN, container group type, compute name (for game server container groups), instance ID,
 *             and a list of <code>ContainerGroupPortMapping</code> objects. Each object contains the
 *             container name, runtime ID, and a list of port mappings that show how container ports map
 *             to connection ports on the instance.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/containers-remote-access.html">Connect to
 *             containers</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/containers-create-groups.html">Create a
 *             container group definition</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeContainerGroupPortMappingsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeContainerGroupPortMappingsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeContainerGroupPortMappingsInput
 *   FleetId: "STRING_VALUE", // required
 *   ContainerGroupType: "GAME_SERVER" || "PER_INSTANCE", // required
 *   ComputeName: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 *   ContainerName: "STRING_VALUE",
 * };
 * const command = new DescribeContainerGroupPortMappingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContainerGroupPortMappingsOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * //   Location: "STRING_VALUE",
 * //   ContainerGroupDefinitionArn: "STRING_VALUE",
 * //   ContainerGroupType: "GAME_SERVER" || "PER_INSTANCE",
 * //   ComputeName: "STRING_VALUE",
 * //   InstanceId: "STRING_VALUE",
 * //   ContainerGroupPortMappings: [ // ContainerGroupPortMappingList
 * //     { // ContainerGroupPortMapping
 * //       ContainerName: "STRING_VALUE",
 * //       ContainerRuntimeId: "STRING_VALUE",
 * //       ContainerPortMappings: [ // ContainerPortMappingList
 * //         { // ContainerPortMapping
 * //           ContainerPort: Number("int"),
 * //           ConnectionPort: Number("int"),
 * //           Protocol: "TCP" || "UDP",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeContainerGroupPortMappingsCommandInput - {@link DescribeContainerGroupPortMappingsCommandInput}
 * @returns {@link DescribeContainerGroupPortMappingsCommandOutput}
 * @see {@link DescribeContainerGroupPortMappingsCommandInput} for command's `input` shape.
 * @see {@link DescribeContainerGroupPortMappingsCommandOutput} for command's `response` shape.
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
 *  <p>The requested resource was not found. The resource was either not created yet or deleted.</p>
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
export class DescribeContainerGroupPortMappingsCommand extends $Command
  .classBuilder<
    DescribeContainerGroupPortMappingsCommandInput,
    DescribeContainerGroupPortMappingsCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "DescribeContainerGroupPortMappings", {})
  .n("GameLiftClient", "DescribeContainerGroupPortMappingsCommand")
  .sc(DescribeContainerGroupPortMappings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeContainerGroupPortMappingsInput;
      output: DescribeContainerGroupPortMappingsOutput;
    };
    sdk: {
      input: DescribeContainerGroupPortMappingsCommandInput;
      output: DescribeContainerGroupPortMappingsCommandOutput;
    };
  };
}
