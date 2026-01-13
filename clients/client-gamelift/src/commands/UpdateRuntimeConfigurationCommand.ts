// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { UpdateRuntimeConfigurationInput, UpdateRuntimeConfigurationOutput } from "../models/models_1";
import { UpdateRuntimeConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRuntimeConfigurationCommand}.
 */
export interface UpdateRuntimeConfigurationCommandInput extends UpdateRuntimeConfigurationInput {}
/**
 * @public
 *
 * The output of {@link UpdateRuntimeConfigurationCommand}.
 */
export interface UpdateRuntimeConfigurationCommandOutput extends UpdateRuntimeConfigurationOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2</p>
 *          <p>Updates the runtime configuration for the specified fleet. The runtime configuration
 *             tells Amazon GameLift Servers how to launch server processes on computes in managed EC2 and Anywhere fleets. You
 *             can update a fleet's runtime configuration at any time after the fleet is created; it
 *             does not need to be in <code>ACTIVE</code> status.</p>
 *          <p>To update runtime configuration, specify the fleet ID and provide a
 *                 <code>RuntimeConfiguration</code> with an updated set of server process
 *             configurations.</p>
 *          <p>If successful, the fleet's runtime configuration settings are updated. Fleet computes
 *             that run game server processes regularly check for and receive updated runtime
 *             configurations. The computes immediately take action to comply with the new
 *             configuration by launching new server processes or by not replacing existing processes
 *             when they shut down. Updating a fleet's runtime configuration never affects existing
 *             server processes.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Servers
 *                 fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateRuntimeConfigurationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateRuntimeConfigurationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // UpdateRuntimeConfigurationInput
 *   FleetId: "STRING_VALUE", // required
 *   RuntimeConfiguration: { // RuntimeConfiguration
 *     ServerProcesses: [ // ServerProcessList
 *       { // ServerProcess
 *         LaunchPath: "STRING_VALUE", // required
 *         Parameters: "STRING_VALUE",
 *         ConcurrentExecutions: Number("int"), // required
 *       },
 *     ],
 *     MaxConcurrentGameSessionActivations: Number("int"),
 *     GameSessionActivationTimeoutSeconds: Number("int"),
 *   },
 * };
 * const command = new UpdateRuntimeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRuntimeConfigurationOutput
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
 * @param UpdateRuntimeConfigurationCommandInput - {@link UpdateRuntimeConfigurationCommandInput}
 * @returns {@link UpdateRuntimeConfigurationCommandOutput}
 * @see {@link UpdateRuntimeConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateRuntimeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidFleetStatusException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the fleet. Resolve the conflict before
 *             retrying.</p>
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
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class UpdateRuntimeConfigurationCommand extends $Command
  .classBuilder<
    UpdateRuntimeConfigurationCommandInput,
    UpdateRuntimeConfigurationCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "UpdateRuntimeConfiguration", {})
  .n("GameLiftClient", "UpdateRuntimeConfigurationCommand")
  .sc(UpdateRuntimeConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRuntimeConfigurationInput;
      output: UpdateRuntimeConfigurationOutput;
    };
    sdk: {
      input: UpdateRuntimeConfigurationCommandInput;
      output: UpdateRuntimeConfigurationCommandOutput;
    };
  };
}
