// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartFleetActionsInput, StartFleetActionsOutput } from "../models/models_0";
import { StartFleetActions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartFleetActionsCommand}.
 */
export interface StartFleetActionsCommandInput extends StartFleetActionsInput {}
/**
 * @public
 *
 * The output of {@link StartFleetActionsCommand}.
 */
export interface StartFleetActionsCommandOutput extends StartFleetActionsOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2, Container
 *
 * Resumes certain types of activity on fleet instances that were suspended with [StopFleetActions](https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html). For multi-location fleets, fleet actions are managed separately for each location. Currently, this operation is used to restart a fleet's auto-scaling activity.
 *
 * This operation can be used in the following ways:
 *
 * - To restart actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to resume.
 * - To restart actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to resume.
 *
 * If successful, Amazon GameLift Servers once again initiates scaling events as triggered by the fleet's scaling policies. If actions on the fleet location were never stopped, this operation will have no effect.
 *
 * **Learn more**
 *
 * [Setting up Amazon GameLift Servers fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StartFleetActionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StartFleetActionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // StartFleetActionsInput
 *   FleetId: "STRING_VALUE", // required
 *   Actions: [ // FleetActionList // required
 *     "AUTO_SCALING",
 *   ],
 *   Location: "STRING_VALUE",
 * };
 * const command = new StartFleetActionsCommand(input);
 * const response = await client.send(command);
 * // { // StartFleetActionsOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartFleetActionsCommandInput - {@link StartFleetActionsCommandInput}
 * @returns {@link StartFleetActionsCommandOutput}
 * @see {@link StartFleetActionsCommandInput} for command's `input` shape.
 * @see {@link StartFleetActionsCommandOutput} for command's `response` shape.
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
export class StartFleetActionsCommand extends command<StartFleetActionsCommandInput, StartFleetActionsCommandOutput>(
  _ep0,
  _mw0,
  "StartFleetActions",
  StartFleetActions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFleetActionsInput;
      output: StartFleetActionsOutput;
    };
    sdk: {
      input: StartFleetActionsCommandInput;
      output: StartFleetActionsCommandOutput;
    };
  };
}
