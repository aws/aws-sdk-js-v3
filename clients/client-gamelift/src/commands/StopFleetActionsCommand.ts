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
import { StopFleetActionsInput, StopFleetActionsOutput } from "../models/models_0";
import { de_StopFleetActionsCommand, se_StopFleetActionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopFleetActionsCommand}.
 */
export interface StopFleetActionsCommandInput extends StopFleetActionsInput {}
/**
 * @public
 *
 * The output of {@link StopFleetActionsCommand}.
 */
export interface StopFleetActionsCommandOutput extends StopFleetActionsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Suspends certain types of activity in a fleet location. Currently, this operation is
 *             used to stop auto-scaling activity. For multi-location fleets, fleet actions are managed
 *             separately for each location. </p>
 *          <p>Stopping fleet actions has several potential purposes. It allows you to temporarily
 *             stop auto-scaling activity but retain your scaling policies for use in the future. For
 *             multi-location fleets, you can set up fleet-wide auto-scaling, and then opt out of it
 *             for certain locations. </p>
 *          <p>This operation can be used in the following ways: </p>
 *          <ul>
 *             <li>
 *                <p>To stop actions on instances in the fleet's home Region, provide a fleet ID
 *                     and the type of actions to suspend. </p>
 *             </li>
 *             <li>
 *                <p>To stop actions on instances in one of the fleet's remote locations, provide a
 *                     fleet ID, a location name, and the type of actions to suspend. </p>
 *             </li>
 *          </ul>
 *          <p>If successful, Amazon GameLift no longer initiates scaling events except in response to manual
 *             changes using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html">UpdateFleetCapacity</a>.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift
 *                 Fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StopFleetActionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StopFleetActionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // StopFleetActionsInput
 *   FleetId: "STRING_VALUE", // required
 *   Actions: [ // FleetActionList // required
 *     "AUTO_SCALING",
 *   ],
 *   Location: "STRING_VALUE",
 * };
 * const command = new StopFleetActionsCommand(input);
 * const response = await client.send(command);
 * // { // StopFleetActionsOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopFleetActionsCommandInput - {@link StopFleetActionsCommandInput}
 * @returns {@link StopFleetActionsCommandOutput}
 * @see {@link StopFleetActionsCommandInput} for command's `input` shape.
 * @see {@link StopFleetActionsCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class StopFleetActionsCommand extends $Command<
  StopFleetActionsCommandInput,
  StopFleetActionsCommandOutput,
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
  constructor(readonly input: StopFleetActionsCommandInput) {
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
  ): Handler<StopFleetActionsCommandInput, StopFleetActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopFleetActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "StopFleetActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "StopFleetActions",
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
  private serialize(input: StopFleetActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopFleetActionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopFleetActionsCommandOutput> {
    return de_StopFleetActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
