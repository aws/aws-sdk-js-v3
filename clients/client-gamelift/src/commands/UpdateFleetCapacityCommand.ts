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
import {
  UpdateFleetCapacityInput,
  UpdateFleetCapacityInputFilterSensitiveLog,
  UpdateFleetCapacityOutput,
  UpdateFleetCapacityOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateFleetCapacityCommand,
  serializeAws_json1_1UpdateFleetCapacityCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateFleetCapacityCommandInput extends UpdateFleetCapacityInput {}
export interface UpdateFleetCapacityCommandOutput extends UpdateFleetCapacityOutput, __MetadataBearer {}

/**
 * <p>Updates capacity settings for a fleet. For fleets with multiple locations, use this
 *             operation to manage capacity settings in each location individually. Fleet capacity
 *             determines the number of game sessions and players that can be hosted based on the fleet
 *             configuration. Use this operation to set the following fleet capacity properties: </p>
 *         <ul>
 *             <li>
 *                 <p>Minimum/maximum size: Set hard limits on fleet capacity. GameLift cannot set
 *                     the fleet's capacity to a value outside of this range, whether the capacity is
 *                     changed manually or through automatic scaling. </p>
 *             </li>
 *             <li>
 *                 <p>Desired capacity: Manually set the number of Amazon EC2 instances to be maintained
 *                     in a fleet location. Before changing a fleet's desired capacity, you may want to
 *                     call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html">DescribeEC2InstanceLimits</a> to get the maximum capacity of the
 *                     fleet's Amazon EC2 instance type. Alternatively, consider using automatic scaling to
 *                     adjust capacity based on player demand.</p>
 *             </li>
 *          </ul>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To update capacity for a fleet's home Region, or if the fleet has no remote
 *                     locations, omit the <code>Location</code> parameter. The fleet must be in
 *                         <code>ACTIVE</code> status. </p>
 *             </li>
 *             <li>
 *                 <p>To update capacity for a fleet's remote location, include the
 *                         <code>Location</code> parameter set to the location to be updated. The
 *                     location must be in <code>ACTIVE</code> status.</p>
 *             </li>
 *          </ul>
 *         <p>If successful, capacity settings are updated immediately. In response a change in
 *             desired capacity, GameLift initiates steps to start new instances or terminate existing
 *             instances in the requested fleet location. This continues until the location's active
 *             instance count matches the new desired instance count. You can track a fleet's current
 *             capacity by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a>. If the requested desired instance count is
 *             higher than the instance type's limit, the <code>LimitExceeded</code> exception
 *             occurs.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-manage-capacity.html">Scaling fleet
 *                 capacity</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateFleetCapacityCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateFleetCapacityCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateFleetCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFleetCapacityCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetCapacityCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class UpdateFleetCapacityCommand extends $Command<
  UpdateFleetCapacityCommandInput,
  UpdateFleetCapacityCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFleetCapacityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateFleetCapacityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFleetCapacityInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateFleetCapacityOutputFilterSensitiveLog,
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
