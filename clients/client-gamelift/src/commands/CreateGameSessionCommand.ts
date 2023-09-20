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
import { CreateGameSessionInput, CreateGameSessionOutput } from "../models/models_0";
import { de_CreateGameSessionCommand, se_CreateGameSessionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateGameSessionCommand}.
 */
export interface CreateGameSessionCommandInput extends CreateGameSessionInput {}
/**
 * @public
 *
 * The output of {@link CreateGameSessionCommand}.
 */
export interface CreateGameSessionCommandOutput extends CreateGameSessionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a multiplayer game session for players in a specific fleet location. This
 *             operation prompts an available server process to start a game session and retrieves
 *             connection information for the new game session. As an alternative, consider using the
 *             Amazon GameLift game session placement feature with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> , which uses the FleetIQ algorithm and queues to
 *             optimize the placement process.</p>
 *          <p>When creating a game session, you specify exactly where you want to place it and
 *             provide a set of game session configuration settings. The target fleet must be in
 *                 <code>ACTIVE</code> status. </p>
 *          <p>You can use this operation in the following ways: </p>
 *          <ul>
 *             <li>
 *                <p>To create a game session on an instance in a fleet's home Region, provide a
 *                     fleet or alias ID along with your game session configuration. </p>
 *             </li>
 *             <li>
 *                <p>To create a game session on an instance in a fleet's remote location, provide
 *                     a fleet or alias ID and a location name, along with your game session
 *                     configuration. </p>
 *             </li>
 *             <li>
 *                <p>To create a game session on an instance in an Anywhere fleet, specify the
 *                     fleet's custom location.</p>
 *             </li>
 *          </ul>
 *          <p>If successful, Amazon GameLift initiates a workflow to start a new game session and returns a
 *                 <code>GameSession</code> object containing the game session configuration and
 *             status. When the game session status is <code>ACTIVE</code>, it is updated with
 *             connection information and you can create player sessions for the game session. By
 *             default, newly created game sessions are open to new players. You can restrict new
 *             player access by using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a> to change the game session's player session creation
 *             policy.</p>
 *          <p>Amazon GameLift retains logs for active for 14 days. To access the logs, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html">GetGameSessionLogUrl</a> to download the log files.</p>
 *          <p>
 *             <i>Available in Amazon GameLift Local.</i>
 *          </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateGameSessionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateGameSessionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // CreateGameSessionInput
 *   FleetId: "STRING_VALUE",
 *   AliasId: "STRING_VALUE",
 *   MaximumPlayerSessionCount: Number("int"), // required
 *   Name: "STRING_VALUE",
 *   GameProperties: [ // GamePropertyList
 *     { // GameProperty
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   CreatorId: "STRING_VALUE",
 *   GameSessionId: "STRING_VALUE",
 *   IdempotencyToken: "STRING_VALUE",
 *   GameSessionData: "STRING_VALUE",
 *   Location: "STRING_VALUE",
 * };
 * const command = new CreateGameSessionCommand(input);
 * const response = await client.send(command);
 * // { // CreateGameSessionOutput
 * //   GameSession: { // GameSession
 * //     GameSessionId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     FleetId: "STRING_VALUE",
 * //     FleetArn: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     TerminationTime: new Date("TIMESTAMP"),
 * //     CurrentPlayerSessionCount: Number("int"),
 * //     MaximumPlayerSessionCount: Number("int"),
 * //     Status: "ACTIVE" || "ACTIVATING" || "TERMINATED" || "TERMINATING" || "ERROR",
 * //     StatusReason: "INTERRUPTED",
 * //     GameProperties: [ // GamePropertyList
 * //       { // GameProperty
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     IpAddress: "STRING_VALUE",
 * //     DnsName: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     PlayerSessionCreationPolicy: "ACCEPT_ALL" || "DENY_ALL",
 * //     CreatorId: "STRING_VALUE",
 * //     GameSessionData: "STRING_VALUE",
 * //     MatchmakerData: "STRING_VALUE",
 * //     Location: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateGameSessionCommandInput - {@link CreateGameSessionCommandInput}
 * @returns {@link CreateGameSessionCommandOutput}
 * @see {@link CreateGameSessionCommandInput} for command's `input` shape.
 * @see {@link CreateGameSessionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 *          <p></p>
 *
 * @throws {@link FleetCapacityExceededException} (client fault)
 *  <p>The specified fleet has no available instances to fulfill a
 *                 <code>CreateGameSession</code> request. Clients can retry such requests immediately
 *             or after a waiting period.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>A game session with this custom ID string already exists in this fleet. Resolve this
 *             conflict before retrying this request.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidFleetStatusException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the fleet. Resolve the conflict before
 *             retrying.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested operation would cause the resource to exceed the allowed service limit.
 *             Resolve the issue before retrying.</p>
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
export class CreateGameSessionCommand extends $Command<
  CreateGameSessionCommandInput,
  CreateGameSessionCommandOutput,
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
  constructor(readonly input: CreateGameSessionCommandInput) {
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
  ): Handler<CreateGameSessionCommandInput, CreateGameSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateGameSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateGameSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "CreateGameSession",
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
  private serialize(input: CreateGameSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateGameSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGameSessionCommandOutput> {
    return de_CreateGameSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
