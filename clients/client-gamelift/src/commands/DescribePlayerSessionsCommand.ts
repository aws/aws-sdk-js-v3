// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePlayerSessionsInput, DescribePlayerSessionsOutput } from "../models/models_0";
import { DescribePlayerSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePlayerSessionsCommand}.
 */
export interface DescribePlayerSessionsCommandInput extends DescribePlayerSessionsInput {}
/**
 * @public
 *
 * The output of {@link DescribePlayerSessionsCommand}.
 */
export interface DescribePlayerSessionsCommandOutput extends DescribePlayerSessionsOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2, Anywhere, Container
 *
 * Retrieves properties for one or more player sessions.
 *
 * This action can be used in the following ways:
 *
 * - To retrieve a specific player session, provide the player session ID only.
 * - To retrieve all player sessions in a game session, provide the game session ID only.
 * - To retrieve all player sessions for a specific player, provide a player ID only.
 *
 * To request player sessions, specify either a player session ID, game session ID, or player ID. You can filter this request by player session status. If you provide a specific `PlayerSessionId` or `PlayerId`, Amazon GameLift Servers ignores the filter criteria. Use the pagination parameters to retrieve results as a set of sequential pages.
 *
 * If successful, a `PlayerSession` object is returned for each session that matches the request.
 *
 * **Related actions**
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribePlayerSessionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribePlayerSessionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribePlayerSessionsInput
 *   GameSessionId: "STRING_VALUE",
 *   PlayerId: "STRING_VALUE",
 *   PlayerSessionId: "STRING_VALUE",
 *   PlayerSessionStatusFilter: "STRING_VALUE",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribePlayerSessionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribePlayerSessionsOutput
 * //   PlayerSessions: [ // PlayerSessionList
 * //     { // PlayerSession
 * //       PlayerSessionId: "STRING_VALUE",
 * //       PlayerId: "STRING_VALUE",
 * //       GameSessionId: "STRING_VALUE",
 * //       FleetId: "STRING_VALUE",
 * //       FleetArn: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       TerminationTime: new Date("TIMESTAMP"),
 * //       Status: "RESERVED" || "ACTIVE" || "COMPLETED" || "TIMEDOUT",
 * //       IpAddress: "STRING_VALUE",
 * //       DnsName: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       PlayerData: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePlayerSessionsCommandInput - {@link DescribePlayerSessionsCommandInput}
 * @returns {@link DescribePlayerSessionsCommandOutput}
 * @see {@link DescribePlayerSessionsCommandInput} for command's `input` shape.
 * @see {@link DescribePlayerSessionsCommandOutput} for command's `response` shape.
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
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class DescribePlayerSessionsCommand extends command<DescribePlayerSessionsCommandInput, DescribePlayerSessionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribePlayerSessions",
  DescribePlayerSessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePlayerSessionsInput;
      output: DescribePlayerSessionsOutput;
    };
    sdk: {
      input: DescribePlayerSessionsCommandInput;
      output: DescribePlayerSessionsCommandOutput;
    };
  };
}
