// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { DeregisterComputeInput, DeregisterComputeOutput } from "../models/models_0";
import { DeregisterCompute } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterComputeCommand}.
 */
export interface DeregisterComputeCommandInput extends DeregisterComputeInput {}
/**
 * @public
 *
 * The output of {@link DeregisterComputeCommand}.
 */
export interface DeregisterComputeCommandOutput extends DeregisterComputeOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> Anywhere</p>
 *          <p>Removes a compute resource from an Anywhere fleet. Deregistered computes can no longer
 *             host game sessions through Amazon GameLift Servers. Use this operation with an Anywhere fleet that
 *             doesn't use the Amazon GameLift Servers Agent For Anywhere fleets with the Agent, the Agent handles all
 *             compute registry tasks for you. </p>
 *          <p>To deregister a compute, call this operation from the compute that's being
 *             deregistered and specify the compute name and the fleet ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeregisterComputeCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeregisterComputeCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DeregisterComputeInput
 *   FleetId: "STRING_VALUE", // required
 *   ComputeName: "STRING_VALUE", // required
 * };
 * const command = new DeregisterComputeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterComputeCommandInput - {@link DeregisterComputeCommandInput}
 * @returns {@link DeregisterComputeCommandOutput}
 * @see {@link DeregisterComputeCommandInput} for command's `input` shape.
 * @see {@link DeregisterComputeCommandOutput} for command's `response` shape.
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
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class DeregisterComputeCommand extends $Command
  .classBuilder<
    DeregisterComputeCommandInput,
    DeregisterComputeCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "DeregisterCompute", {})
  .n("GameLiftClient", "DeregisterComputeCommand")
  .sc(DeregisterCompute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterComputeInput;
      output: {};
    };
    sdk: {
      input: DeregisterComputeCommandInput;
      output: DeregisterComputeCommandOutput;
    };
  };
}
