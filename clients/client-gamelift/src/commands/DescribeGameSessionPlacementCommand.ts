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
import { DescribeGameSessionPlacementInput, DescribeGameSessionPlacementOutput } from "../models/models_0";
import {
  de_DescribeGameSessionPlacementCommand,
  se_DescribeGameSessionPlacementCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeGameSessionPlacementCommand}.
 */
export interface DescribeGameSessionPlacementCommandInput extends DescribeGameSessionPlacementInput {}
/**
 * @public
 *
 * The output of {@link DescribeGameSessionPlacementCommand}.
 */
export interface DescribeGameSessionPlacementCommandOutput
  extends DescribeGameSessionPlacementOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information, including current status, about a game session placement
 *             request. </p>
 *          <p>To get game session placement details, specify the placement ID.</p>
 *          <p>This operation is not designed to be continually called to track game session status.
 *             This practice can cause you to exceed your API limit, which results in errors. Instead,
 *             you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from
 *             FlexMatch or queues. Continuously polling with <code>DescribeGameSessionPlacement</code>
 *             should only be used for games in development with low game session usage. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeGameSessionPlacementCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameSessionPlacementCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // DescribeGameSessionPlacementInput
 *   PlacementId: "STRING_VALUE", // required
 * };
 * const command = new DescribeGameSessionPlacementCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGameSessionPlacementOutput
 * //   GameSessionPlacement: { // GameSessionPlacement
 * //     PlacementId: "STRING_VALUE",
 * //     GameSessionQueueName: "STRING_VALUE",
 * //     Status: "PENDING" || "FULFILLED" || "CANCELLED" || "TIMED_OUT" || "FAILED",
 * //     GameProperties: [ // GamePropertyList
 * //       { // GameProperty
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     MaximumPlayerSessionCount: Number("int"),
 * //     GameSessionName: "STRING_VALUE",
 * //     GameSessionId: "STRING_VALUE",
 * //     GameSessionArn: "STRING_VALUE",
 * //     GameSessionRegion: "STRING_VALUE",
 * //     PlayerLatencies: [ // PlayerLatencyList
 * //       { // PlayerLatency
 * //         PlayerId: "STRING_VALUE",
 * //         RegionIdentifier: "STRING_VALUE",
 * //         LatencyInMilliseconds: Number("float"),
 * //       },
 * //     ],
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     IpAddress: "STRING_VALUE",
 * //     DnsName: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     PlacedPlayerSessions: [ // PlacedPlayerSessionList
 * //       { // PlacedPlayerSession
 * //         PlayerId: "STRING_VALUE",
 * //         PlayerSessionId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     GameSessionData: "STRING_VALUE",
 * //     MatchmakerData: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeGameSessionPlacementCommandInput - {@link DescribeGameSessionPlacementCommandInput}
 * @returns {@link DescribeGameSessionPlacementCommandOutput}
 * @see {@link DescribeGameSessionPlacementCommandInput} for command's `input` shape.
 * @see {@link DescribeGameSessionPlacementCommandOutput} for command's `response` shape.
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
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class DescribeGameSessionPlacementCommand extends $Command<
  DescribeGameSessionPlacementCommandInput,
  DescribeGameSessionPlacementCommandOutput,
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
  constructor(readonly input: DescribeGameSessionPlacementCommandInput) {
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
  ): Handler<DescribeGameSessionPlacementCommandInput, DescribeGameSessionPlacementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGameSessionPlacementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeGameSessionPlacementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "DescribeGameSessionPlacement",
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
  private serialize(input: DescribeGameSessionPlacementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeGameSessionPlacementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeGameSessionPlacementCommandOutput> {
    return de_DescribeGameSessionPlacementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
