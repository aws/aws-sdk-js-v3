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

export type StartMatchBackfillCommandInput = StartMatchBackfillInput;
export type StartMatchBackfillCommandOutput = StartMatchBackfillOutput & __MetadataBearer;

/**
 * <p>Finds new players to fill open slots in an existing game session. This operation
 *             can be used to add players to matched games that start with fewer than the maximum
 *             number of players or to replace players when they drop out. By backfilling with the same
 *             matchmaker used to create the original match, you ensure that new players meet the match
 *             criteria and maintain a consistent experience throughout the game session. You can
 *             backfill a match anytime after a game session has been created. </p>
 *         <p>To request a match backfill, specify a unique ticket ID, the existing game
 *             session's ARN, a matchmaking configuration, and a set of data that describes all current
 *             players in the game session. If successful, a match backfill ticket is created and
 *             returned with status set to QUEUED. The ticket is placed in the matchmaker's ticket pool
 *             and processed. Track the status of the ticket to respond as needed. </p>
 *         <p>The process of finding backfill matches is essentially identical to the initial
 *             matchmaking process. The matchmaker searches the pool and groups tickets together to
 *             form potential matches, allowing only one backfill ticket per potential match. Once the
 *             a match is formed, the matchmaker creates player sessions for the new players. All
 *             tickets in the match are updated with the game session's connection information, and the
 *             <a>GameSession</a> object is updated to include matchmaker data on the
 *             new players. For more detail on how match backfill requests are processed, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How
 *                 Amazon GameLift FlexMatch Works</a>. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html">
 *             Backfill Existing Games with FlexMatch</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html">
 *                 How GameLift FlexMatch Works</a>
 *          </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>StartMatchmaking</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMatchmaking</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopMatchmaking</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>AcceptMatch</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartMatchBackfill</a>
 *                </p>
 *             </li>
 *          </ul>
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
