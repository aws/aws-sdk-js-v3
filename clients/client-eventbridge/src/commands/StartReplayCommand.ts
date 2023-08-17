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

import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { StartReplayRequest, StartReplayResponse } from "../models/models_0";
import { de_StartReplayCommand, se_StartReplayCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartReplayCommand}.
 */
export interface StartReplayCommandInput extends StartReplayRequest {}
/**
 * @public
 *
 * The output of {@link StartReplayCommand}.
 */
export interface StartReplayCommandOutput extends StartReplayResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts the specified replay. Events are not necessarily replayed in the exact same order
 *       that they were added to the archive. A replay processes events to replay based on the time in
 *       the event, and replays them using 1 minute intervals. If you specify an
 *         <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time
 *       range, the events are replayed from the first minute of that 20 minute range first. Then the
 *       events from the second minute are replayed. You can use <code>DescribeReplay</code> to
 *       determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code>
 *       indicates the time within the specified time range associated with the last event
 *       replayed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, StartReplayCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, StartReplayCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // StartReplayRequest
 *   ReplayName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   EventSourceArn: "STRING_VALUE", // required
 *   EventStartTime: new Date("TIMESTAMP"), // required
 *   EventEndTime: new Date("TIMESTAMP"), // required
 *   Destination: { // ReplayDestination
 *     Arn: "STRING_VALUE", // required
 *     FilterArns: [ // ReplayDestinationFilters
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new StartReplayCommand(input);
 * const response = await client.send(command);
 * // { // StartReplayResponse
 * //   ReplayArn: "STRING_VALUE",
 * //   State: "STARTING" || "RUNNING" || "CANCELLING" || "COMPLETED" || "CANCELLED" || "FAILED",
 * //   StateReason: "STRING_VALUE",
 * //   ReplayStartTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartReplayCommandInput - {@link StartReplayCommandInput}
 * @returns {@link StartReplayCommandOutput}
 * @see {@link StartReplayCommandInput} for command's `input` shape.
 * @see {@link StartReplayCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link InvalidEventPatternException} (client fault)
 *  <p>The event pattern is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource you are trying to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 */
export class StartReplayCommand extends $Command<
  StartReplayCommandInput,
  StartReplayCommandOutput,
  EventBridgeClientResolvedConfig
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
  constructor(readonly input: StartReplayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartReplayCommandInput, StartReplayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartReplayCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "StartReplayCommand";
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
  private serialize(input: StartReplayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartReplayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartReplayCommandOutput> {
    return de_StartReplayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
