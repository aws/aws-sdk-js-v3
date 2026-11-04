// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopFleetActionsInput, StopFleetActionsOutput } from "../models/models_0";
import { StopFleetActions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopFleetActionsCommand}.
 */
export interface StopFleetActionsCommandInput extends StopFleetActionsInput {}
/**
 * @public
 *
 * The output of {@link StopFleetActionsCommand}.
 */
export interface StopFleetActionsCommandOutput extends StopFleetActionsOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2, Container
 *
 * Suspends certain types of activity in a fleet location. Currently, this operation is used to stop auto-scaling activity. For multi-location fleets, fleet actions are managed separately for each location.
 *
 * Stopping fleet actions has several potential purposes. It allows you to temporarily stop auto-scaling activity but retain your scaling policies for use in the future. For multi-location fleets, you can set up fleet-wide auto-scaling, and then opt out of it for certain locations.
 *
 * This operation can be used in the following ways:
 *
 * - To stop actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to suspend.
 * - To stop actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to suspend.
 *
 * If successful, Amazon GameLift Servers no longer initiates scaling events except in response to manual changes using [UpdateFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html). To restart fleet actions again, call [StartFleetActions](https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartFleetActions.html).
 *
 * **Learn more**
 *
 * [Setting up Amazon GameLift Servers Fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StopFleetActionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StopFleetActionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // StopFleetActionsInput
 *   FleetId: "STRING_VALUE", // required
 *   Actions: [ // FleetActionList // required
 *     "AUTO_SCALING",
 *   ],
 *   Location: "STRING_VALUE",
 * };
 * const command = new StopFleetActionsCommand(input);
 * const response = await client.send(command);
 * // { // StopFleetActionsOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopFleetActionsCommandInput - {@link StopFleetActionsCommandInput}
 * @returns {@link StopFleetActionsCommandOutput}
 * @see {@link StopFleetActionsCommandInput} for command's `input` shape.
 * @see {@link StopFleetActionsCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedRegionException} (client fault)
 *
 * The requested operation is not supported in the Region specified.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class StopFleetActionsCommand extends command<StopFleetActionsCommandInput, StopFleetActionsCommandOutput>(
  _ep0,
  _mw0,
  "StopFleetActions",
  StopFleetActions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopFleetActionsInput;
      output: StopFleetActionsOutput;
    };
    sdk: {
      input: StopFleetActionsCommandInput;
      output: StopFleetActionsCommandOutput;
    };
  };
}
