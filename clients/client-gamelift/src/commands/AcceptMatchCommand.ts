// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AcceptMatchInput, AcceptMatchOutput } from "../models/models_0";
import { AcceptMatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcceptMatchCommand}.
 */
export interface AcceptMatchCommandInput extends AcceptMatchInput {}
/**
 * @public
 *
 * The output of {@link AcceptMatchCommand}.
 */
export interface AcceptMatchCommandOutput extends AcceptMatchOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2, Anywhere, Container
 *
 * Registers a player's acceptance or rejection of a proposed FlexMatch match. A matchmaking configuration may require player acceptance; if so, then matches built with that configuration cannot be completed unless all players accept the proposed match within a specified time limit.
 *
 * When FlexMatch builds a match, all the matchmaking tickets involved in the proposed match are placed into status `REQUIRES_ACCEPTANCE`. This is a trigger for your game to get acceptance from all players in each ticket. Calls to this action are only valid for tickets that are in this status; calls for tickets not in this status result in an error.
 *
 * To register acceptance, specify the ticket ID, one or more players, and an acceptance response. When all players have accepted, Amazon GameLift Servers advances the matchmaking tickets to status `PLACING`, and attempts to create a new game session for the match.
 *
 * If any player rejects the match, or if acceptances are not received before a specified timeout, the proposed match is dropped. Each matchmaking ticket in the failed match is handled as follows:
 *
 * - If the ticket has one or more players who rejected the match or failed to respond, the ticket status is set to `CANCELLED` and processing is terminated.
 * - If all players in the ticket accepted the match, the ticket status is returned to `SEARCHING` to find a new match.
 *
 * **Learn more**
 *
 * [Add FlexMatch to a game client](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html)
 *
 * [FlexMatch events](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html) (reference)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, AcceptMatchCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, AcceptMatchCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // AcceptMatchInput
 *   TicketId: "STRING_VALUE", // required
 *   PlayerIds: [ // PlayerIdsForAcceptMatch // required
 *     "STRING_VALUE",
 *   ],
 *   AcceptanceType: "ACCEPT" || "REJECT", // required
 * };
 * const command = new AcceptMatchCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AcceptMatchCommandInput - {@link AcceptMatchCommandInput}
 * @returns {@link AcceptMatchCommandOutput}
 * @see {@link AcceptMatchCommandInput} for command's `input` shape.
 * @see {@link AcceptMatchCommandOutput} for command's `response` shape.
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
export class AcceptMatchCommand extends command<AcceptMatchCommandInput, AcceptMatchCommandOutput>(
  _ep0,
  _mw0,
  "AcceptMatch",
  AcceptMatch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptMatchInput;
      output: {};
    };
    sdk: {
      input: AcceptMatchCommandInput;
      output: AcceptMatchCommandOutput;
    };
  };
}
