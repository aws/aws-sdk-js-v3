import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeFleetCapacityInput, DescribeFleetCapacityOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFleetCapacityCommand,
  serializeAws_json1_1DescribeFleetCapacityCommand,
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

export type DescribeFleetCapacityCommandInput = DescribeFleetCapacityInput;
export type DescribeFleetCapacityCommandOutput = DescribeFleetCapacityOutput & __MetadataBearer;

/**
 * <p>Retrieves the current capacity statistics for one or more fleets. These statistics
 *             present a snapshot of the fleet's instances and provide insight on current or imminent
 *             scaling activity. To get statistics on game hosting activity in the fleet, see <a>DescribeFleetUtilization</a>.</p>
 *         <p>You can request capacity for all fleets or specify a list of one or more fleet
 *             identifiers. When requesting multiple fleets, use the pagination parameters to retrieve
 *             results as a set of sequential pages. If successful, a <a>FleetCapacity</a>
 *             object is returned for each requested fleet ID. When a list of fleet IDs is provided,
 *             attribute objects are returned only for fleets that currently exist.</p>
 *         <note>
 *             <p>Some API operations may limit the number of fleet IDs allowed in one request. If a
 *                 request exceeds this limit, the request fails and the error message includes the
 *                 maximum allowed.</p>
 *         </note>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift Metrics for Fleets</a>
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
 *                <p>Describe fleets:</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetAttributes</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetCapacity</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetPortSettings</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetUtilization</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeRuntimeConfiguration</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeEC2InstanceLimits</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetEvents</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartFleetActions</a> or <a>StopFleetActions</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class DescribeFleetCapacityCommand extends $Command<
  DescribeFleetCapacityCommandInput,
  DescribeFleetCapacityCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFleetCapacityCommandInput) {
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
  ): Handler<DescribeFleetCapacityCommandInput, DescribeFleetCapacityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeFleetCapacityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFleetCapacityInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetCapacityOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFleetCapacityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFleetCapacityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFleetCapacityCommandOutput> {
    return deserializeAws_json1_1DescribeFleetCapacityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
