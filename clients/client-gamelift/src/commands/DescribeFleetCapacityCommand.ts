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
  DescribeFleetCapacityInput,
  DescribeFleetCapacityInputFilterSensitiveLog,
  DescribeFleetCapacityOutput,
  DescribeFleetCapacityOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFleetCapacityCommand,
  serializeAws_json1_1DescribeFleetCapacityCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeFleetCapacityCommandInput extends DescribeFleetCapacityInput {}
export interface DescribeFleetCapacityCommandOutput extends DescribeFleetCapacityOutput, __MetadataBearer {}

/**
 * <p>Retrieves the resource capacity settings for one or more fleets. The data returned
 *             includes the current fleet capacity (number of EC2 instances), and settings that can
 *             control how capacity scaling. For fleets with remote locations, this operation retrieves
 *             data for the fleet's home Region only.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To get capacity data for one or more specific fleets, provide a list of fleet
 *                     IDs or fleet ARNs. </p>
 *             </li>
 *             <li>
 *                 <p>To get capacity data for all fleets, do not provide a fleet identifier.
 *                 </p>
 *             </li>
 *          </ul>
 *         <p>When requesting multiple fleets, use the pagination parameters to retrieve results as
 *             a set of sequential pages. </p>
 *         <p>If successful, a <code>FleetCapacity</code> object is returned for each requested
 *             fleet ID. Each FleetCapacity object includes a <code>Location</code> property, which is
 *             set to the fleet's home Region. When a list of fleet IDs is provided, attribute objects
 *             are returned only for fleets that currently exist.</p>
 *         <note>
 *             <p>Some API operations may limit the number of fleet IDs that are allowed in one
 *                 request. If a request exceeds this limit, the request fails and the error message
 *                 includes the maximum allowed.</p>
 *         </note>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift
 *                 fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetCapacityCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetCapacityCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeFleetCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetCapacityCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetCapacityCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DescribeFleetCapacityCommand extends $Command<
  DescribeFleetCapacityCommandInput,
  DescribeFleetCapacityCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFleetCapacityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeFleetCapacityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFleetCapacityInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetCapacityOutputFilterSensitiveLog,
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
