import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StopFleetActionsInput, StopFleetActionsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StopFleetActionsCommand,
  serializeAws_json1_1StopFleetActionsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type StopFleetActionsCommandInput = StopFleetActionsInput;
export type StopFleetActionsCommandOutput = StopFleetActionsOutput & __MetadataBearer;

/**
 * <p>Suspends certain types of activity in a fleet location. Currently, this operation is
 *             used to stop auto-scaling activity. For multi-location fleets, fleet actions are managed
 *             separately for each location. </p>
 *         <p>Stopping fleet actions has several potential purposes. It allows you to temporarily
 *             stop auto-scaling activity but retain your scaling policies for use in the future. For
 *             multi-location fleets, you can set up fleet-wide auto-scaling, and then opt out of it
 *             for certain locations. </p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To stop actions on instances in the fleet's home Region, provide a fleet ID
 *                     and the type of actions to suspend. </p>
 *             </li>
 *             <li>
 *                 <p>To stop actions on instances in one of the fleet's remote locations, provide a
 *                     fleet ID, a location name, and the type of actions to suspend. </p>
 *             </li>
 *          </ul>
 *         <p>If successful, GameLift no longer initiates scaling events except in response to manual
 *             changes using <a>UpdateFleetCapacity</a>. You can view a fleet's stopped
 *             actions using <a>DescribeFleetAttributes</a> or <a>DescribeFleetLocationAttributes</a>. Suspended activity can be restarted
 *             using <a>StartFleetActions</a>.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateFleet</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>PutScalingPolicy</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>UpdateFleetAttributes</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>DeleteFleet</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 */
export class StopFleetActionsCommand extends $Command<
  StopFleetActionsCommandInput,
  StopFleetActionsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "StopFleetActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopFleetActionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: StopFleetActionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopFleetActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopFleetActionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopFleetActionsCommandOutput> {
    return deserializeAws_json1_1StopFleetActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
