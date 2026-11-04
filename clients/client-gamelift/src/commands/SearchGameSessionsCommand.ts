// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchGameSessionsInput, SearchGameSessionsOutput } from "../models/models_0";
import { SearchGameSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * **This API works with the following fleet types:** EC2, Anywhere, Container
 *
 * Retrieves all active game sessions that match a set of search criteria and sorts them into a specified order.
 *
 * This operation is not designed to continually track game session status because that practice can cause you to exceed your API limit and generate errors. Instead, configure an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications from a matchmaker or a game session placement queue.
 *
 * When searching for game sessions, you specify exactly where you want to search and provide a search filter expression, a sort expression, or both. A search request can search only one fleet, but it can search all of a fleet's locations.
 *
 * This operation can be used in the following ways:
 *
 * - To search all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID. This approach returns game sessions in the fleet's home Region and all remote locations that fit the search criteria.
 * - To search all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name. For location, you can specify a fleet's home Region or any remote location.
 *
 * Use the pagination parameters to retrieve results as a set of sequential pages.
 *
 * If successful, a `GameSession` object is returned for each game session that matches the request. Search finds game sessions that are in `ACTIVE` status only. To retrieve information on game sessions in other statuses, use [DescribeGameSessions](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html).
 *
 * To set search and sort criteria, create a filter expression using the following game session attributes. For game session search examples, see the Examples section of this topic.
 *
 * - **gameSessionId** -- An identifier for the game session that is unique across all regions. You must use the full ARN value.
 * - **gameSessionName** -- Name assigned to a game session. Game session names do not need to be unique to a game session.
 * - **gameSessionProperties** -- A set of key-value pairs that can store custom data in a game session. For example: `\{"Key": "difficulty", "Value": "novice"\}`. The filter expression must specify the [GameProperty](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameProperty.html) -- a `Key` and a string `Value` to search for the game sessions.
 *
 *   For example, to search for the above key-value pair, specify the following search filter: `gameSessionProperties.difficulty = "novice"`. All game property values are searched as strings.
 *
 *   For examples of searching game sessions, see the ones below, and also see [Search game sessions by game property](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#game-properties-search).
 *
 *   > **Note:**
 *   >
 *   > - Avoid using periods (".") in property keys if you plan to search for game sessions by properties. Property keys containing periods cannot be searched and will be filtered out from search results due to search index limitations.
 *   > - If you use SearchGameSessions API, there is a limit of 500 game property keys across all game sessions and all fleets per region. If the limit is exceeded, there will potentially be game session entries missing from SearchGameSessions API results.
 * - **maximumSessions** -- Maximum number of player sessions allowed for a game session.
 * - **creationTimeMillis** -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.
 * - **playerSessionCount** -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.
 * - **hasAvailablePlayerSessions** -- Boolean value indicating whether a game session has reached its maximum number of players. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join.
 *
 * > **Note:** Returned values for `playerSessionCount` and `hasAvailablePlayerSessions` change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join.
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, SearchGameSessionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, SearchGameSessionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
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
 * //       StatusReason: "INTERRUPTED" || "TRIGGERED_ON_PROCESS_TERMINATE" || "FORCE_TERMINATED",
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
 * //       ComputeName: "STRING_VALUE",
 * //       PlayerGatewayStatus: "DISABLED" || "ENABLED",
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
 * @throws {@link TerminalRoutingStrategyException} (client fault)
 *
 * The service is unable to resolve the routing for a particular alias because it has a terminal `RoutingStrategy` associated with it. The message returned in this exception is the message defined in the routing strategy itself. Such requests should only be retried if the routing strategy for the specified alias is modified.
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
export class SearchGameSessionsCommand extends command<SearchGameSessionsCommandInput, SearchGameSessionsCommandOutput>(
  _ep0,
  _mw0,
  "SearchGameSessions",
  SearchGameSessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchGameSessionsInput;
      output: SearchGameSessionsOutput;
    };
    sdk: {
      input: SearchGameSessionsCommandInput;
      output: SearchGameSessionsCommandOutput;
    };
  };
}
