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
import { StartGameSessionPlacementInput, StartGameSessionPlacementOutput } from "../models/models_0";
import { de_StartGameSessionPlacementCommand, se_StartGameSessionPlacementCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link StartGameSessionPlacementCommand}.
 */
export interface StartGameSessionPlacementCommandInput extends StartGameSessionPlacementInput {}
/**
 * @public
 *
 * The output of {@link StartGameSessionPlacementCommand}.
 */
export interface StartGameSessionPlacementCommandOutput extends StartGameSessionPlacementOutput, __MetadataBearer {}

/**
 * @public
 * <p>Places a request for a new game session in a queue. When processing a placement
 *             request, Amazon GameLift searches for available resources on the queue's destinations, scanning
 *             each until it finds resources or the placement request times out.</p>
 *         <p>A game session placement request can also request player sessions. When a new game
 *             session is successfully created, Amazon GameLift creates a player session for each player
 *             included in the request.</p>
 *         <p>When placing a game session, by default Amazon GameLift tries each fleet in the order they are
 *             listed in the queue configuration. Ideally, a queue's destinations are listed in
 *             preference order.</p>
 *         <p>Alternatively, when requesting a game session with players, you can also provide
 *             latency data for each player in relevant Regions. Latency data indicates the performance
 *             lag a player experiences when connected to a fleet in the Region. Amazon GameLift uses latency
 *             data to reorder the list of destinations to place the game session in a Region with
 *             minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each
 *             Region's average lag for all players and reorders to get the best game play across all
 *             players. </p>
 *         <p>To place a new game session request, specify the following:</p>
 *         <ul>
 *             <li>
 *                 <p>The queue name and a set of game session properties and settings</p>
 *             </li>
 *             <li>
 *                 <p>A unique ID (such as a UUID) for the placement. You use this ID to track the
 *                     status of the placement request</p>
 *             </li>
 *             <li>
 *                 <p>(Optional) A set of player data and a unique player ID for each player that
 *                     you are joining to the new game session (player data is optional, but if you
 *                     include it, you must also provide a unique ID for each player)</p>
 *             </li>
 *             <li>
 *                 <p>Latency data for all players (if you want to optimize game play for the
 *                     players)</p>
 *             </li>
 *          </ul>
 *         <p>If successful, a new game session placement is created.</p>
 *         <p>To track the status of a placement request, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html">DescribeGameSessionPlacement</a> and check the request's status. If the status
 *             is <code>FULFILLED</code>, a new game session has been created and a game session ARN
 *             and Region are referenced. If the placement request times out, you can resubmit the
 *             request or retry it with a different queue. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StartGameSessionPlacementCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StartGameSessionPlacementCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // StartGameSessionPlacementInput
 *   PlacementId: "STRING_VALUE", // required
 *   GameSessionQueueName: "STRING_VALUE", // required
 *   GameProperties: [ // GamePropertyList
 *     { // GameProperty
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   MaximumPlayerSessionCount: Number("int"), // required
 *   GameSessionName: "STRING_VALUE",
 *   PlayerLatencies: [ // PlayerLatencyList
 *     { // PlayerLatency
 *       PlayerId: "STRING_VALUE",
 *       RegionIdentifier: "STRING_VALUE",
 *       LatencyInMilliseconds: Number("float"),
 *     },
 *   ],
 *   DesiredPlayerSessions: [ // DesiredPlayerSessionList
 *     { // DesiredPlayerSession
 *       PlayerId: "STRING_VALUE",
 *       PlayerData: "STRING_VALUE",
 *     },
 *   ],
 *   GameSessionData: "STRING_VALUE",
 * };
 * const command = new StartGameSessionPlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartGameSessionPlacementCommandInput - {@link StartGameSessionPlacementCommandInput}
 * @returns {@link StartGameSessionPlacementCommandOutput}
 * @see {@link StartGameSessionPlacementCommandInput} for command's `input` shape.
 * @see {@link StartGameSessionPlacementCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 *
 */
export class StartGameSessionPlacementCommand extends $Command<
  StartGameSessionPlacementCommandInput,
  StartGameSessionPlacementCommandOutput,
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
  constructor(readonly input: StartGameSessionPlacementCommandInput) {
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
  ): Handler<StartGameSessionPlacementCommandInput, StartGameSessionPlacementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartGameSessionPlacementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "StartGameSessionPlacementCommand";
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
  private serialize(input: StartGameSessionPlacementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartGameSessionPlacementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartGameSessionPlacementCommandOutput> {
    return de_StartGameSessionPlacementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
