import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeFleetEventsInput, DescribeFleetEventsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFleetEventsCommand,
  serializeAws_json1_1DescribeFleetEventsCommand,
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

export type DescribeFleetEventsCommandInput = DescribeFleetEventsInput;
export type DescribeFleetEventsCommandOutput = DescribeFleetEventsOutput & __MetadataBearer;

/**
 * <p>Retrieves entries from the specified fleet's event log. You can specify a time
 *             range to limit the result set. Use the pagination parameters to retrieve results as a
 *             set of sequential pages. If successful, a collection of event log entries matching the
 *             request are returned.</p>
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
export class DescribeFleetEventsCommand extends $Command<
  DescribeFleetEventsCommandInput,
  DescribeFleetEventsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFleetEventsCommandInput) {
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
  ): Handler<DescribeFleetEventsCommandInput, DescribeFleetEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeFleetEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFleetEventsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetEventsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFleetEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFleetEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFleetEventsCommandOutput> {
    return deserializeAws_json1_1DescribeFleetEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
