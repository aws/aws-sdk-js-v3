import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeRuntimeConfigurationInput, DescribeRuntimeConfigurationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeRuntimeConfigurationCommand,
  serializeAws_json1_1DescribeRuntimeConfigurationCommand,
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

export type DescribeRuntimeConfigurationCommandInput = DescribeRuntimeConfigurationInput;
export type DescribeRuntimeConfigurationCommandOutput = DescribeRuntimeConfigurationOutput & __MetadataBearer;

/**
 * <p>Retrieves a fleet's runtime configuration settings. The runtime configuration tells
 *             Amazon GameLift which server processes to run (and how) on each instance in the fleet.</p>
 *         <p>To get a runtime configuration, specify the fleet's unique identifier. If successful,
 *             a <a>RuntimeConfiguration</a> object is returned for the requested fleet. If the requested fleet has been
 *             deleted, the result set is empty.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html">Running Multiple Processes on a Fleet</a>
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
export class DescribeRuntimeConfigurationCommand extends $Command<
  DescribeRuntimeConfigurationCommandInput,
  DescribeRuntimeConfigurationCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRuntimeConfigurationCommandInput) {
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
  ): Handler<DescribeRuntimeConfigurationCommandInput, DescribeRuntimeConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeRuntimeConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRuntimeConfigurationInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRuntimeConfigurationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRuntimeConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeRuntimeConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRuntimeConfigurationCommandOutput> {
    return deserializeAws_json1_1DescribeRuntimeConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
