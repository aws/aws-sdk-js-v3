import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeFleetLocationCapacityInput, DescribeFleetLocationCapacityOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFleetLocationCapacityCommand,
  serializeAws_json1_1DescribeFleetLocationCapacityCommand,
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

export interface DescribeFleetLocationCapacityCommandInput extends DescribeFleetLocationCapacityInput {}
export interface DescribeFleetLocationCapacityCommandOutput
  extends DescribeFleetLocationCapacityOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves the resource capacity settings for a fleet location. The data returned
 *             includes the current capacity (number of EC2 instances) and some scaling settings for
 *             the requested fleet location. Use this operation to retrieve capacity information for a
 *             fleet's remote location or home Region (you can also retrieve home Region capacity by
 *             calling <code>DescribeFleetCapacity</code>).</p>
 *         <p>To retrieve capacity data, identify a fleet and location. </p>
 *         <p>If successful, a <code>FleetCapacity</code> object is returned for the requested fleet
 *             location. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateFleetLocations</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>DescribeFleetLocationCapacity</a> |
 *                     <a>DescribeFleetLocationUtilization</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetCapacity</a> |
 *                     <a>DescribeFleetUtilization</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>DeleteFleetLocations</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetLocationCapacityCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetLocationCapacityCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeFleetLocationCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetLocationCapacityCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetLocationCapacityCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeFleetLocationCapacityCommand extends $Command<
  DescribeFleetLocationCapacityCommandInput,
  DescribeFleetLocationCapacityCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFleetLocationCapacityCommandInput) {
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
  ): Handler<DescribeFleetLocationCapacityCommandInput, DescribeFleetLocationCapacityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeFleetLocationCapacityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFleetLocationCapacityInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetLocationCapacityOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFleetLocationCapacityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFleetLocationCapacityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFleetLocationCapacityCommandOutput> {
    return deserializeAws_json1_1DescribeFleetLocationCapacityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
