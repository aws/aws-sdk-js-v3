// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { SearchGameSessionsInput, SearchGameSessionsOutput } from "../models/models_0";
import { de_SearchGameSessionsCommand, se_SearchGameSessionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchGameSessionsCommand}.
 */
export interface SearchGameSessionsCommandInput extends SearchGameSessionsInput {}
/**
 * @public
 *
 * The output of {@link SearchGameSessionsCommand}.
 */
export interface SearchGameSessionsCommandOutput extends SearchGameSessionsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves all active game sessions that match a set of search criteria and sorts them
 *             into a specified order. </p>
 *          <p>This operation is not designed to be continually called to track game session status.
 *             This practice can cause you to exceed your API limit, which results in errors. Instead,
 *             you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from
 *             FlexMatch or queues. Continuously polling game session status with
 *                 <code>DescribeGameSessions</code> should only be used for games in development with
 *             low game session usage. </p>
 *          <p>When searching for game sessions, you specify exactly where you want to search and
 *             provide a search filter expression, a sort expression, or both. A search request can
 *             search only one fleet, but it can search all of a fleet's locations. </p>
 *          <p>This operation can be used in the following ways: </p>
 *          <ul>
 *             <li>
 *                <p>To search all game sessions that are currently running on all locations in a
 *                     fleet, provide a fleet or alias ID. This approach returns game sessions in the
 *                     fleet's home Region and all remote locations that fit the search
 *                     criteria.</p>
 *             </li>
 *             <li>
 *                <p>To search all game sessions that are currently running on a specific fleet
 *                     location, provide a fleet or alias ID and a location name. For location, you can
 *                     specify a fleet's home Region or any remote location.</p>
 *             </li>
 *          </ul>
 *          <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p>
 *          <p>If successful, a <code>GameSession</code> object is returned for each game session
 *             that matches the request. Search finds game sessions that are in <code>ACTIVE</code>
 *             status only. To retrieve information on game sessions in other statuses, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html">DescribeGameSessions</a> .</p>
 *          <p>You can search or sort by the following game session attributes:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>gameSessionId</b> -- A unique identifier for the game session. You can use either a
 *                         <code>GameSessionId</code> or <code>GameSessionArn</code> value. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>gameSessionName</b> -- Name assigned to a game
 *                     session. Game session names do not need to be unique to a game session.</p>
 *             </li>
 *             <li>
 *                <p>
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
 *                <p>
 *                   <b>maximumSessions</b> -- Maximum number of player
 *                     sessions allowed for a game session.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>creationTimeMillis</b> -- Value indicating when a
 *                     game session was created. It is expressed in Unix time as milliseconds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>playerSessionCount</b> -- Number of players
 *                     currently connected to a game session. This value changes rapidly as players
 *                     join the session or drop out.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>hasAvailablePlayerSessions</b> -- Boolean value
 *                     indicating whether a game session has reached its maximum number of players. It
 *                     is highly recommended that all search requests include this filter attribute to
 *                     optimize search performance and return only sessions that players can join.
 *                 </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Returned values for <code>playerSessionCount</code> and
 *                     <code>hasAvailablePlayerSessions</code> change quickly as players join sessions
 *                 and others drop out. Results should be considered a snapshot in time. Be sure to
 *                 refresh search results often, and handle sessions that fill up before a player can
 *                 join. </p>
 *          </note>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, SearchGameSessionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, SearchGameSessionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // SearchGameSessionsInput
 *   FleetId: "STRING_VALUE",
 *   AliasId: "STRING_VALUE",
 *   Location: "STRING_VALUE",
 *   FilterExpression: "STRING_VALUE",
 *   SortExpression: "STRING_VALUE",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchGameSessionsCommand(input);
 * const response = await client.send(command);
 * // { // SearchGameSessionsOutput
 * //   GameSessions: [ // GameSessionList
 * //     { // GameSession
 * //       GameSessionId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       FleetId: "STRING_VALUE",
 * //       FleetArn: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       TerminationTime: new Date("TIMESTAMP"),
 * //       CurrentPlayerSessionCount: Number("int"),
 * //       MaximumPlayerSessionCount: Number("int"),
 * //       Status: "ACTIVE" || "ACTIVATING" || "TERMINATED" || "TERMINATING" || "ERROR",
 * //       StatusReason: "INTERRUPTED",
 * //       GameProperties: [ // GamePropertyList
 * //         { // GameProperty
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       IpAddress: "STRING_VALUE",
 * //       DnsName: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       PlayerSessionCreationPolicy: "ACCEPT_ALL" || "DENY_ALL",
 * //       CreatorId: "STRING_VALUE",
 * //       GameSessionData: "STRING_VALUE",
 * //       MatchmakerData: "STRING_VALUE",
 * //       Location: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchGameSessionsCommandInput - {@link SearchGameSessionsCommandInput}
 * @returns {@link SearchGameSessionsCommandOutput}
 * @see {@link SearchGameSessionsCommandInput} for command's `input` shape.
 * @see {@link SearchGameSessionsCommandOutput} for command's `response` shape.
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
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link TerminalRoutingStrategyException} (client fault)
 *  <p>The service is unable to resolve the routing for a particular alias because it has a
 *             terminal <code>RoutingStrategy</code> associated with it. The message returned in this
 *             exception is the message defined in the routing strategy itself. Such requests should
 *             only be retried if the routing strategy for the specified alias is modified. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "SearchGameSessions",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: SearchGameSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchGameSessionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchGameSessionsCommandOutput> {
    return de_SearchGameSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
