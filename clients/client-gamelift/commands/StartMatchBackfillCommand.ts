import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StartMatchBackfillInput, StartMatchBackfillOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StartMatchBackfillCommand,
  serializeAws_json1_1StartMatchBackfillCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface StartMatchBackfillCommandInput extends StartMatchBackfillInput {}
export interface StartMatchBackfillCommandOutput extends StartMatchBackfillOutput, __MetadataBearer {}

/**
 * <p>Finds new players to fill open slots in currently running game sessions.
 *             The backfill match process is essentially identical to the process of forming new
 *             matches. Backfill
 *             requests use the same matchmaker that was used to make the original match, and they provide
 *             matchmaking data for all players currently in the game session. FlexMatch uses this information
 *             to select new players so that backfilled match continues to meet the original match requirements. </p>
 *         <p>When using FlexMatch with GameLift managed hosting, you can request a backfill match from
 *             a client service by calling this operation with a <a>GameSession</a>
 *             identifier. You also have the option of making backfill requests directly from your game
 *             server. In response to a request, FlexMatch creates player sessions for the new players,
 *             updates the <code>GameSession</code> resource, and sends updated matchmaking data to the
 *             game server. You can request a backfill match at any point after a game session is
 *             started. Each game session can have only one active backfill request at a time; a
 *             subsequent request automatically replaces the earlier request.</p>
 *         <p>When using FlexMatch as a standalone component, request a backfill match by calling this operation
 *         without a game session identifier. As with newly formed matches, matchmaking results are returned
 *         in a matchmaking event so that your game can update the game session that is being backfilled.</p>
 *         <p>To request a backfill match, specify a unique ticket ID, the original matchmaking
 *             configuration, and matchmaking data for all current players in the game session being
 *             backfilled. Optionally, specify the <code>GameSession</code> ARN. If successful, a match
 *             backfill ticket is created and returned with status set to QUEUED. Track the status of
 *             backfill tickets using the same method for tracking tickets for new matches.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html">
 *             Backfill existing games with FlexMatch</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html">
 *             Matchmaking events</a> (reference)</p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html">
 *                 How GameLift FlexMatch works</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>StartMatchmaking</a> |
 *                     <a>DescribeMatchmaking</a> |
 *                     <a>StopMatchmaking</a> |
 *                     <a>AcceptMatch</a> |
 *                     <a>StartMatchBackfill</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 */
export class StartMatchBackfillCommand extends $Command<
  StartMatchBackfillCommandInput,
  StartMatchBackfillCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartMatchBackfillCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMatchBackfillCommandInput, StartMatchBackfillCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "StartMatchBackfillCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMatchBackfillInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartMatchBackfillOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartMatchBackfillCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartMatchBackfillCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMatchBackfillCommandOutput> {
    return deserializeAws_json1_1StartMatchBackfillCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
