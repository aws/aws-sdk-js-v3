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
import { AcceptMatchInput, AcceptMatchOutput } from "../models/models_0";
import { de_AcceptMatchCommand, se_AcceptMatchCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AcceptMatchCommand}.
 */
export interface AcceptMatchCommandInput extends AcceptMatchInput {}
/**
 * @public
 *
 * The output of {@link AcceptMatchCommand}.
 */
export interface AcceptMatchCommandOutput extends AcceptMatchOutput, __MetadataBearer {}

/**
 * @public
 * <p>Registers a player's acceptance or rejection of a proposed FlexMatch match. A
 *             matchmaking configuration may require player acceptance; if so, then matches built with
 *             that configuration cannot be completed unless all players accept the proposed match
 *             within a specified time limit. </p>
 *          <p>When FlexMatch builds a match, all the matchmaking tickets involved in the proposed
 *             match are placed into status <code>REQUIRES_ACCEPTANCE</code>. This is a trigger for
 *             your game to get acceptance from all players in each ticket. Calls to this action are only valid
 *             for tickets that are in this status; calls for tickets not in this status result in an
 *             error.</p>
 *          <p>To register acceptance, specify the ticket ID, one or more players, and an acceptance response.
 *             When all players have accepted, Amazon GameLift advances the matchmaking tickets to status
 *                 <code>PLACING</code>, and attempts to create a new game session for the match. </p>
 *          <p>If any player rejects the match, or if acceptances are not received before a specified
 *             timeout, the proposed match is dropped. Each matchmaking ticket in the failed match is handled as follows: </p>
 *          <ul>
 *             <li>
 *                <p>If the ticket has one or more players who rejected the match or failed to
 *                 respond, the ticket status is set <code>CANCELLED</code> and processing is
 *                 terminated.</p>
 *             </li>
 *             <li>
 *                <p>If all players in the ticket accepted the match, the ticket
 *                 status is returned to <code>SEARCHING</code> to find a new match. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html">
 *                 Add FlexMatch to a game client</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html">
 *                 FlexMatch events</a> (reference)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, AcceptMatchCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, AcceptMatchCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // AcceptMatchInput
 *   TicketId: "STRING_VALUE", // required
 *   PlayerIds: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   AcceptanceType: "ACCEPT" || "REJECT", // required
 * };
 * const command = new AcceptMatchCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AcceptMatchCommandInput - {@link AcceptMatchCommandInput}
 * @returns {@link AcceptMatchCommandOutput}
 * @see {@link AcceptMatchCommandInput} for command's `input` shape.
 * @see {@link AcceptMatchCommandOutput} for command's `response` shape.
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
export class AcceptMatchCommand extends $Command<
  AcceptMatchCommandInput,
  AcceptMatchCommandOutput,
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
  constructor(readonly input: AcceptMatchCommandInput) {
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
  ): Handler<AcceptMatchCommandInput, AcceptMatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AcceptMatchCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "AcceptMatchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "AcceptMatch",
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
  private serialize(input: AcceptMatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AcceptMatchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcceptMatchCommandOutput> {
    return de_AcceptMatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
