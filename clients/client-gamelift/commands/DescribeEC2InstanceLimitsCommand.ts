import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeEC2InstanceLimitsInput, DescribeEC2InstanceLimitsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEC2InstanceLimitsCommand,
  serializeAws_json1_1DescribeEC2InstanceLimitsCommand,
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

export type DescribeEC2InstanceLimitsCommandInput = DescribeEC2InstanceLimitsInput;
export type DescribeEC2InstanceLimitsCommandOutput = DescribeEC2InstanceLimitsOutput & __MetadataBearer;

/**
 * <p>Retrieves the following information for the specified EC2 instance
 *             type:</p>
 *         <ul>
 *             <li>
 *                 <p>Maximum number of instances allowed per AWS account (service limit).</p>
 *             </li>
 *             <li>
 *                 <p>Current usage for the AWS account.</p>
 *             </li>
 *          </ul>
 *         <p>To learn more about the capabilities of each instance type, see <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance
 *             Types</a>. Note that the instance types offered may vary depending on the region.</p>
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
export class DescribeEC2InstanceLimitsCommand extends $Command<
  DescribeEC2InstanceLimitsCommandInput,
  DescribeEC2InstanceLimitsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEC2InstanceLimitsCommandInput) {
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
  ): Handler<DescribeEC2InstanceLimitsCommandInput, DescribeEC2InstanceLimitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeEC2InstanceLimitsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEC2InstanceLimitsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEC2InstanceLimitsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEC2InstanceLimitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEC2InstanceLimitsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEC2InstanceLimitsCommandOutput> {
    return deserializeAws_json1_1DescribeEC2InstanceLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
