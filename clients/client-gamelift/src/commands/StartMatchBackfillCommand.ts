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
} from "@smithy/types";

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StartMatchBackfillInput, StartMatchBackfillOutput } from "../models/models_0";
import { de_StartMatchBackfillCommand, se_StartMatchBackfillCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartMatchBackfillCommand}.
 */
export interface StartMatchBackfillCommandInput extends StartMatchBackfillInput {}
/**
 * @public
 *
 * The output of {@link StartMatchBackfillCommand}.
 */
export interface StartMatchBackfillCommandOutput extends StartMatchBackfillOutput, __MetadataBearer {}

/**
 * @public
 * <p>Finds new players to fill open slots in currently running game sessions. The backfill
 *             match process is essentially identical to the process of forming new matches. Backfill
 *             requests use the same matchmaker that was used to make the original match, and they
 *             provide matchmaking data for all players currently in the game session. FlexMatch uses
 *             this information to select new players so that backfilled match continues to meet the
 *             original match requirements. </p>
 *          <p>When using FlexMatch with Amazon GameLift managed hosting, you can request a backfill match from
 *             a client service by calling this operation with a <code>GameSessions</code> ID. You also
 *             have the option of making backfill requests directly from your game server. In response
 *             to a request, FlexMatch creates player sessions for the new players, updates the
 *                 <code>GameSession</code> resource, and sends updated matchmaking data to the game
 *             server. You can request a backfill match at any point after a game session is started.
 *             Each game session can have only one active backfill request at a time; a subsequent
 *             request automatically replaces the earlier request.</p>
 *          <p>When using FlexMatch as a standalone component, request a backfill match by calling this
 *             operation without a game session identifier. As with newly formed matches, matchmaking
 *             results are returned in a matchmaking event so that your game can update the game
 *             session that is being backfilled.</p>
 *          <p>To request a backfill match, specify a unique ticket ID, the original matchmaking
 *             configuration, and matchmaking data for all current players in the game session being
 *             backfilled. Optionally, specify the <code>GameSession</code> ARN. If successful, a match
 *             backfill ticket is created and returned with status set to QUEUED. Track the status of
 *             backfill tickets using the same method for tracking tickets for new matches.</p>
 *          <p>Only game sessions created by FlexMatch are supported for match backfill.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html">
 *                 Backfill existing games with FlexMatch</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html">
 *                 Matchmaking events</a> (reference)</p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html">
 *                 How Amazon GameLift FlexMatch works</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StartMatchBackfillCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StartMatchBackfillCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // StartMatchBackfillInput
 *   TicketId: "STRING_VALUE",
 *   ConfigurationName: "STRING_VALUE", // required
 *   GameSessionArn: "STRING_VALUE",
 *   Players: [ // PlayerList // required
 *     { // Player
 *       PlayerId: "STRING_VALUE",
 *       PlayerAttributes: { // PlayerAttributeMap
 *         "<keys>": { // AttributeValue
 *           S: "STRING_VALUE",
 *           N: Number("double"),
 *           SL: [ // PlayerAttributeStringList
 *             "STRING_VALUE",
 *           ],
 *           SDM: { // PlayerAttributeStringDoubleMap
 *             "<keys>": Number("double"),
 *           },
 *         },
 *       },
 *       Team: "STRING_VALUE",
 *       LatencyInMs: { // LatencyMap
 *         "<keys>": Number("int"),
 *       },
 *     },
 *   ],
 * };
 * const command = new StartMatchBackfillCommand(input);
 * const response = await client.send(command);
 * // { // StartMatchBackfillOutput
 * //   MatchmakingTicket: { // MatchmakingTicket
 * //     TicketId: "STRING_VALUE",
 * //     ConfigurationName: "STRING_VALUE",
 * //     ConfigurationArn: "STRING_VALUE",
 * //     Status: "CANCELLED" || "COMPLETED" || "FAILED" || "PLACING" || "QUEUED" || "REQUIRES_ACCEPTANCE" || "SEARCHING" || "TIMED_OUT",
 * //     StatusReason: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     Players: [ // PlayerList
 * //       { // Player
 * //         PlayerId: "STRING_VALUE",
 * //         PlayerAttributes: { // PlayerAttributeMap
 * //           "<keys>": { // AttributeValue
 * //             S: "STRING_VALUE",
 * //             N: Number("double"),
 * //             SL: [ // PlayerAttributeStringList
 * //               "STRING_VALUE",
 * //             ],
 * //             SDM: { // PlayerAttributeStringDoubleMap
 * //               "<keys>": Number("double"),
 * //             },
 * //           },
 * //         },
 * //         Team: "STRING_VALUE",
 * //         LatencyInMs: { // LatencyMap
 * //           "<keys>": Number("int"),
 * //         },
 * //       },
 * //     ],
 * //     GameSessionConnectionInfo: { // GameSessionConnectionInfo
 * //       GameSessionArn: "STRING_VALUE",
 * //       IpAddress: "STRING_VALUE",
 * //       DnsName: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       MatchedPlayerSessions: [ // MatchedPlayerSessionList
 * //         { // MatchedPlayerSession
 * //           PlayerId: "STRING_VALUE",
 * //           PlayerSessionId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     EstimatedWaitTime: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param StartMatchBackfillCommandInput - {@link StartMatchBackfillCommandInput}
 * @returns {@link StartMatchBackfillCommandOutput}
 * @see {@link StartMatchBackfillCommandInput} for command's `input` shape.
 * @see {@link StartMatchBackfillCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class StartMatchBackfillCommand extends $Command<
  StartMatchBackfillCommandInput,
  StartMatchBackfillCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMatchBackfillCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "StartMatchBackfillCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: StartMatchBackfillCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartMatchBackfillCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMatchBackfillCommandOutput> {
    return de_StartMatchBackfillCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
