// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopMatchmakingInput, StopMatchmakingOutput } from "../models/models_0";
import { StopMatchmaking$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopMatchmakingCommand}.
 */
export interface StopMatchmakingCommandInput extends StopMatchmakingInput {}
/**
 * @public
 *
 * The output of {@link StopMatchmakingCommand}.
 */
export interface StopMatchmakingCommandOutput extends StopMatchmakingOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2, Anywhere, Container
 *
 * Cancels a matchmaking ticket or match backfill ticket that is currently being processed. To stop the matchmaking operation, specify the ticket ID. If successful, work on the ticket is stopped, and the ticket status is changed to `CANCELLED`.
 *
 * This call is also used to turn off automatic backfill for an individual game session. This is for game sessions that are created with a matchmaking configuration that has automatic backfill enabled. The ticket ID is included in the `MatchmakerData` of an updated game session object, which is provided to the game server.
 *
 * > **Note:** If the operation is successful, the service sends back an empty JSON struct with the HTTP 200 response (not an empty HTTP body).
 *
 * **Learn more**
 *
 * [Add FlexMatch to a game client](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StopMatchmakingCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StopMatchmakingCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // StopMatchmakingInput
 *   TicketId: "STRING_VALUE", // required
 * };
 * const command = new StopMatchmakingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopMatchmakingCommandInput - {@link StopMatchmakingCommandInput}
 * @returns {@link StopMatchmakingCommandOutput}
 * @see {@link StopMatchmakingCommandInput} for command's `input` shape.
 * @see {@link StopMatchmakingCommandOutput} for command's `response` shape.
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
export class StopMatchmakingCommand extends command<StopMatchmakingCommandInput, StopMatchmakingCommandOutput>(
  _ep0,
  _mw0,
  "StopMatchmaking",
  StopMatchmaking$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopMatchmakingInput;
      output: {};
    };
    sdk: {
      input: StopMatchmakingCommandInput;
      output: StopMatchmakingCommandOutput;
    };
  };
}
