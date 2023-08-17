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
import { CreateGameSessionQueueInput, CreateGameSessionQueueOutput } from "../models/models_0";
import { de_CreateGameSessionQueueCommand, se_CreateGameSessionQueueCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateGameSessionQueueCommand}.
 */
export interface CreateGameSessionQueueCommandInput extends CreateGameSessionQueueInput {}
/**
 * @public
 *
 * The output of {@link CreateGameSessionQueueCommand}.
 */
export interface CreateGameSessionQueueCommandOutput extends CreateGameSessionQueueOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a placement queue that processes requests for new game sessions. A queue uses
 *             FleetIQ algorithms to determine the best placement locations and find an available game
 *             server there, then prompts the game server process to start a new game session. </p>
 *          <p>A game session queue is configured with a set of destinations (Amazon GameLift fleets or
 *             aliases), which determine the locations where the queue can place new game sessions.
 *             These destinations can span multiple fleet types (Spot and On-Demand), instance types,
 *             and Amazon Web Services Regions. If the queue includes multi-location fleets, the queue is able to
 *             place game sessions in all of a fleet's remote locations. You can opt to filter out
 *             individual locations if needed.</p>
 *          <p>The queue configuration also determines how FleetIQ selects the best available placement
 *             for a new game session. Before searching for an available game server, FleetIQ first
 *             prioritizes the queue's destinations and locations, with the best placement locations on
 *             top. You can set up the queue to use the FleetIQ default prioritization or provide an
 *             alternate set of priorities.</p>
 *          <p>To create a new queue, provide a name, timeout value, and a list of destinations.
 *             Optionally, specify a sort configuration and/or a filter, and define a set of latency
 *             cap policies. You can also include the ARN for an Amazon Simple Notification Service
 *             (SNS) topic to receive notifications of game session placement activity. Notifications
 *             using SNS or CloudWatch events is the preferred way to track placement activity.</p>
 *          <p>If successful, a new <code>GameSessionQueue</code> object is returned with an assigned
 *             queue ARN. New game session requests, which are submitted to queue with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html">StartMatchmaking</a>, reference a queue's name or ARN. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-design.html">
 *                 Design a game session queue</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-creating.html">
 *                 Create a game session queue</a>
 *          </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html">CreateGameSessionQueue</a>
 *                     |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html">DescribeGameSessionQueues</a>
 *                     |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html">UpdateGameSessionQueue</a>
 *                     |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html">DeleteGameSessionQueue</a>
 *                     |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateGameSessionQueueCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateGameSessionQueueCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // CreateGameSessionQueueInput
 *   Name: "STRING_VALUE", // required
 *   TimeoutInSeconds: Number("int"),
 *   PlayerLatencyPolicies: [ // PlayerLatencyPolicyList
 *     { // PlayerLatencyPolicy
 *       MaximumIndividualPlayerLatencyMilliseconds: Number("int"),
 *       PolicyDurationSeconds: Number("int"),
 *     },
 *   ],
 *   Destinations: [ // GameSessionQueueDestinationList
 *     { // GameSessionQueueDestination
 *       DestinationArn: "STRING_VALUE",
 *     },
 *   ],
 *   FilterConfiguration: { // FilterConfiguration
 *     AllowedLocations: [ // LocationList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   PriorityConfiguration: { // PriorityConfiguration
 *     PriorityOrder: [ // PriorityTypeList
 *       "LATENCY" || "COST" || "DESTINATION" || "LOCATION",
 *     ],
 *     LocationOrder: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   CustomEventData: "STRING_VALUE",
 *   NotificationTarget: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateGameSessionQueueCommand(input);
 * const response = await client.send(command);
 * // { // CreateGameSessionQueueOutput
 * //   GameSessionQueue: { // GameSessionQueue
 * //     Name: "STRING_VALUE",
 * //     GameSessionQueueArn: "STRING_VALUE",
 * //     TimeoutInSeconds: Number("int"),
 * //     PlayerLatencyPolicies: [ // PlayerLatencyPolicyList
 * //       { // PlayerLatencyPolicy
 * //         MaximumIndividualPlayerLatencyMilliseconds: Number("int"),
 * //         PolicyDurationSeconds: Number("int"),
 * //       },
 * //     ],
 * //     Destinations: [ // GameSessionQueueDestinationList
 * //       { // GameSessionQueueDestination
 * //         DestinationArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     FilterConfiguration: { // FilterConfiguration
 * //       AllowedLocations: [ // LocationList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     PriorityConfiguration: { // PriorityConfiguration
 * //       PriorityOrder: [ // PriorityTypeList
 * //         "LATENCY" || "COST" || "DESTINATION" || "LOCATION",
 * //       ],
 * //       LocationOrder: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CustomEventData: "STRING_VALUE",
 * //     NotificationTarget: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateGameSessionQueueCommandInput - {@link CreateGameSessionQueueCommandInput}
 * @returns {@link CreateGameSessionQueueCommandOutput}
 * @see {@link CreateGameSessionQueueCommandInput} for command's `input` shape.
 * @see {@link CreateGameSessionQueueCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested operation would cause the resource to exceed the allowed service limit.
 *             Resolve the issue before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link TaggingFailedException} (client fault)
 *  <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class CreateGameSessionQueueCommand extends $Command<
  CreateGameSessionQueueCommandInput,
  CreateGameSessionQueueCommandOutput,
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
  constructor(readonly input: CreateGameSessionQueueCommandInput) {
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
  ): Handler<CreateGameSessionQueueCommandInput, CreateGameSessionQueueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateGameSessionQueueCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateGameSessionQueueCommand";
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
  private serialize(input: CreateGameSessionQueueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateGameSessionQueueCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGameSessionQueueCommandOutput> {
    return de_CreateGameSessionQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
