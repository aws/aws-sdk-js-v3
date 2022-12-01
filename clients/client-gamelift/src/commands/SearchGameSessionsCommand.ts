// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  SearchGameSessionsInput,
  SearchGameSessionsInputFilterSensitiveLog,
  SearchGameSessionsOutput,
  SearchGameSessionsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1SearchGameSessionsCommand,
  serializeAws_json1_1SearchGameSessionsCommand,
} from "../protocols/Aws_json1_1";

export interface SearchGameSessionsCommandInput extends SearchGameSessionsInput {}
export interface SearchGameSessionsCommandOutput extends SearchGameSessionsOutput, __MetadataBearer {}

/**
 * <p>Retrieves all active game sessions that match a set of search criteria and sorts them
 *             into a specified order. </p>
 *         <p>This operation is not designed to be continually called to track game session status.
 *             This practice can cause you to exceed your API limit, which results in errors. Instead,
 *             you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from
 *             FlexMatch or queues. Continuously polling game session status with
 *                 <code>DescribeGameSessions</code> should only be used for games in development with
 *             low game session usage. </p>
 *         <p>When searching for game sessions, you specify exactly where you want to search and
 *             provide a search filter expression, a sort expression, or both. A search request can
 *             search only one fleet, but it can search all of a fleet's locations. </p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To search all game sessions that are currently running on all locations in a
 *                     fleet, provide a fleet or alias ID. This approach returns game sessions in the
 *                     fleet's home Region and all remote locations that fit the search
 *                     criteria.</p>
 *             </li>
 *             <li>
 *                 <p>To search all game sessions that are currently running on a specific fleet
 *                     location, provide a fleet or alias ID and a location name. For location, you can
 *                     specify a fleet's home Region or any remote location.</p>
 *             </li>
 *          </ul>
 *         <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>GameSession</code> object is returned for each game session
 *             that matches the request. Search finds game sessions that are in <code>ACTIVE</code>
 *             status only. To retrieve information on game sessions in other statuses, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html">DescribeGameSessions</a> .</p>
 *         <p>You can search or sort by the following game session attributes:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>gameSessionId</b> -- A unique identifier for the game session. You can use either a
 *                         <code>GameSessionId</code> or <code>GameSessionArn</code> value. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>gameSessionName</b> -- Name assigned to a game
 *                     session. Game session names do not need to be unique to a game session.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>gameSessionProperties</b> -- Custom data defined
 *                     in a game session's <code>GameProperty</code> parameter.
 *                         <code>GameProperty</code> values are stored as key:value pairs; the filter
 *                     expression must indicate the key and a string to search the data values for. For
 *                     example, to search for game sessions with custom data containing the key:value
 *                     pair "gameMode:brawl", specify the following:
 *                         <code>gameSessionProperties.gameMode = "brawl"</code>. All custom data
 *                     values are searched as strings.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>maximumSessions</b> -- Maximum number of player
 *                     sessions allowed for a game session.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>creationTimeMillis</b> -- Value indicating when a
 *                     game session was created. It is expressed in Unix time as milliseconds.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>playerSessionCount</b> -- Number of players
 *                     currently connected to a game session. This value changes rapidly as players
 *                     join the session or drop out.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>hasAvailablePlayerSessions</b> -- Boolean value
 *                     indicating whether a game session has reached its maximum number of players. It
 *                     is highly recommended that all search requests include this filter attribute to
 *                     optimize search performance and return only sessions that players can join.
 *                 </p>
 *             </li>
 *          </ul>
 *         <note>
 *             <p>Returned values for <code>playerSessionCount</code> and
 *                     <code>hasAvailablePlayerSessions</code> change quickly as players join sessions
 *                 and others drop out. Results should be considered a snapshot in time. Be sure to
 *                 refresh search results often, and handle sessions that fill up before a player can
 *                 join. </p>
 *         </note>
 *          <p>
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, SearchGameSessionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, SearchGameSessionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new SearchGameSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchGameSessionsCommandInput} for command's `input` shape.
 * @see {@link SearchGameSessionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class SearchGameSessionsCommand extends $Command<
  SearchGameSessionsCommandInput,
  SearchGameSessionsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchGameSessionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "SearchGameSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchGameSessionsInputFilterSensitiveLog,
      outputFilterSensitiveLog: SearchGameSessionsOutputFilterSensitiveLog,
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
