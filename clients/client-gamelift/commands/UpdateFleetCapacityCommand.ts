import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateFleetCapacityInput, UpdateFleetCapacityOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateFleetCapacityCommand,
  serializeAws_json1_1UpdateFleetCapacityCommand,
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

export type UpdateFleetCapacityCommandInput = UpdateFleetCapacityInput;
export type UpdateFleetCapacityCommandOutput = UpdateFleetCapacityOutput & __MetadataBearer;

/**
 * <p>Updates capacity settings for a fleet. Use this operation to specify the number of
 *             EC2 instances (hosts) that you want this fleet to contain. Before calling this operation,
 *             you may want to call <a>DescribeEC2InstanceLimits</a> to get the maximum
 *             capacity based on the fleet's EC2 instance type.</p>
 *         <p>Specify minimum and maximum number of instances. Amazon GameLift will not change fleet
 *             capacity to values fall outside of this range. This is particularly important when using
 *             auto-scaling (see <a>PutScalingPolicy</a>) to allow capacity to adjust based
 *             on player demand while imposing limits on automatic adjustments.</p>
 *         <p>To update fleet capacity, specify the fleet ID and the number of instances you want
 *             the fleet to host. If successful, Amazon GameLift starts or terminates instances so that the
 *             fleet's active instance count matches the desired instance count. You can view a fleet's
 *             current capacity information by calling <a>DescribeFleetCapacity</a>. If the
 *             desired instance count is higher than the instance type's limit, the "Limit Exceeded"
 *             exception occurs.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a>
 *          </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListFleets</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Update fleets:</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetAttributes</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetCapacity</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetPortSettings</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateRuntimeConfiguration</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartFleetActions</a> or <a>StopFleetActions</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class UpdateFleetCapacityCommand extends $Command<
  UpdateFleetCapacityCommandInput,
  UpdateFleetCapacityCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFleetCapacityCommandInput) {
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
  ): Handler<UpdateFleetCapacityCommandInput, UpdateFleetCapacityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateFleetCapacityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFleetCapacityInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFleetCapacityOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFleetCapacityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateFleetCapacityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFleetCapacityCommandOutput> {
    return deserializeAws_json1_1UpdateFleetCapacityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
