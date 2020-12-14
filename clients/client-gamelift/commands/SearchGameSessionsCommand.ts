import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { SearchGameSessionsInput, SearchGameSessionsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1SearchGameSessionsCommand,
  serializeAws_json1_1SearchGameSessionsCommand,
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

export type SearchGameSessionsCommandInput = SearchGameSessionsInput;
export type SearchGameSessionsCommandOutput = SearchGameSessionsOutput & __MetadataBearer;

/**
 * <p>Retrieves all active game sessions that match a set of search criteria and sorts
 *             them in a specified order. You can search or sort by the following game session
 *             attributes:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>gameSessionId</b> -- A unique identifier for the game session. You can use
 *                     either a <code>GameSessionId</code> or <code>GameSessionArn</code> value.
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>gameSessionName</b> -- Name assigned to a game
 *                     session. This value is set when requesting a new game session with <a>CreateGameSession</a> or updating with <a>UpdateGameSession</a>. Game session names do not need to be unique
 *                     to a game session.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>gameSessionProperties</b> -- Custom data
 *                     defined in a game session's <code>GameProperty</code> parameter.
 *                         <code>GameProperty</code> values are stored as key:value pairs; the filter
 *                     expression must indicate the key and a string to search the data values for. For
 *                     example, to search for game sessions with custom data containing the key:value
 *                     pair "gameMode:brawl", specify the following:
 *                         <code>gameSessionProperties.gameMode = "brawl"</code>. All custom data
 *                     values are searched as strings.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>maximumSessions</b> -- Maximum number of
 *                     player sessions allowed for a game session. This value is set when requesting a
 *                     new game session with <a>CreateGameSession</a> or updating with <a>UpdateGameSession</a>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>creationTimeMillis</b> -- Value indicating
 *                     when a game session was created. It is expressed in Unix time as
 *                     milliseconds.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>playerSessionCount</b> -- Number of players
 *                     currently connected to a game session. This value changes rapidly as players
 *                     join the session or drop out.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>hasAvailablePlayerSessions</b> -- Boolean
 *                     value indicating whether a game session has reached its maximum number of
 *                     players. It is highly recommended that all search requests include this filter
 *                     attribute to optimize search performance and return only sessions that players
 *                     can join. </p>
 *             </li>
 *          </ul>
 *         <note>
 *             <p>Returned values for <code>playerSessionCount</code> and
 *                     <code>hasAvailablePlayerSessions</code> change quickly as players join sessions
 *                 and others drop out. Results should be considered a snapshot in time. Be sure to
 *                 refresh search results often, and handle sessions that fill up before a player can
 *                 join. </p>
 *         </note>
 *         <p>To search or sort, specify either a fleet ID or an alias ID, and provide a search
 *             filter expression, a sort expression, or both. If successful, a collection of <a>GameSession</a> objects matching the request is returned. Use the pagination
 *             parameters to retrieve results as a set of sequential pages. </p>
 *         <p>You can search for game sessions one fleet at a time only. To find game sessions
 *             across multiple fleets, you must search each fleet separately and combine the results.
 *             This search feature finds only game sessions that are in <code>ACTIVE</code> status. To
 *             locate games in statuses other than active, use <a>DescribeGameSessionDetails</a>.</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGameSession</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameSessions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameSessionDetails</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>SearchGameSessions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameSession</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetGameSessionLogUrl</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Game session placements</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>StartGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>StopGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 */
export class SearchGameSessionsCommand extends $Command<
  SearchGameSessionsCommandInput,
  SearchGameSessionsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchGameSessionsCommandInput) {
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
  ): Handler<SearchGameSessionsCommandInput, SearchGameSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "SearchGameSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchGameSessionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: SearchGameSessionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchGameSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchGameSessionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchGameSessionsCommandOutput> {
    return deserializeAws_json1_1SearchGameSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
