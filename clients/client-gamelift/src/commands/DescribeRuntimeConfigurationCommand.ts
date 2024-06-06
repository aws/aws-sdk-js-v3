// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeRuntimeConfigurationInput, DescribeRuntimeConfigurationOutput } from "../models/models_0";
import {
  de_DescribeRuntimeConfigurationCommand,
  se_DescribeRuntimeConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRuntimeConfigurationCommand}.
 */
export interface DescribeRuntimeConfigurationCommandInput extends DescribeRuntimeConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DescribeRuntimeConfigurationCommand}.
 */
export interface DescribeRuntimeConfigurationCommandOutput
  extends DescribeRuntimeConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves a fleet's runtime configuration settings. The runtime configuration
 *             determines which server processes run, and how, on computes in the fleet. For managed
 *             EC2 fleets, the runtime configuration describes server processes that run on each fleet
 *             instance. For container fleets, the runtime configuration describes server processes
 *             that run in each replica container group. You can update a fleet's runtime configuration
 *             at any time using <a>UpdateRuntimeConfiguration</a>.</p>
 *          <p>To get the current runtime configuration for a fleet, provide the fleet ID. </p>
 *          <p>If successful, a <code>RuntimeConfiguration</code> object is returned for the
 *             requested fleet. If the requested fleet has been deleted, the result set is
 *             empty.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift
 *                 fleets</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html">Running multiple
 *                 processes on a fleet</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeRuntimeConfigurationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeRuntimeConfigurationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // DescribeRuntimeConfigurationInput
 *   FleetId: "STRING_VALUE", // required
 * };
 * const command = new DescribeRuntimeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRuntimeConfigurationOutput
 * //   RuntimeConfiguration: { // RuntimeConfiguration
 * //     ServerProcesses: [ // ServerProcessList
 * //       { // ServerProcess
 * //         LaunchPath: "STRING_VALUE", // required
 * //         Parameters: "STRING_VALUE",
 * //         ConcurrentExecutions: Number("int"), // required
 * //       },
 * //     ],
 * //     MaxConcurrentGameSessionActivations: Number("int"),
 * //     GameSessionActivationTimeoutSeconds: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRuntimeConfigurationCommandInput - {@link DescribeRuntimeConfigurationCommandInput}
 * @returns {@link DescribeRuntimeConfigurationCommandOutput}
 * @see {@link DescribeRuntimeConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeRuntimeConfigurationCommandOutput} for command's `response` shape.
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
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 * @public
 */
export class DescribeRuntimeConfigurationCommand extends $Command
  .classBuilder<
    DescribeRuntimeConfigurationCommandInput,
    DescribeRuntimeConfigurationCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "DescribeRuntimeConfiguration", {})
  .n("GameLiftClient", "DescribeRuntimeConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRuntimeConfigurationCommand)
  .de(de_DescribeRuntimeConfigurationCommand)
  .build() {}
