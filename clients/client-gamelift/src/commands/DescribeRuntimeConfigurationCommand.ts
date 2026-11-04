// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeRuntimeConfigurationInput, DescribeRuntimeConfigurationOutput } from "../models/models_0";
import { DescribeRuntimeConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeRuntimeConfigurationCommandOutput extends DescribeRuntimeConfigurationOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2
 *
 * Retrieves a fleet's runtime configuration settings. The runtime configuration determines which server processes run, and how, on computes in the fleet. For managed EC2 fleets, the runtime configuration describes server processes that run on each fleet instance. You can update a fleet's runtime configuration at any time using [UpdateRuntimeConfiguration](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateRuntimeConfiguration.html).
 *
 * To get the current runtime configuration for a fleet, provide the fleet ID.
 *
 * If successful, a `RuntimeConfiguration` object is returned for the requested fleet. If the requested fleet has been deleted, the result set is empty.
 *
 * **Learn more**
 *
 * [Setting up Amazon GameLift Servers fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html)
 *
 * [Running multiple processes on a fleet](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeRuntimeConfigurationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeRuntimeConfigurationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
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
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource was not found. The resource was either not created yet or deleted.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The client failed authentication. Clients should not retry such requests.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class DescribeRuntimeConfigurationCommand extends command<DescribeRuntimeConfigurationCommandInput, DescribeRuntimeConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeRuntimeConfiguration",
  DescribeRuntimeConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRuntimeConfigurationInput;
      output: DescribeRuntimeConfigurationOutput;
    };
    sdk: {
      input: DescribeRuntimeConfigurationCommandInput;
      output: DescribeRuntimeConfigurationCommandOutput;
    };
  };
}
