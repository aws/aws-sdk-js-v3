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
  DescribeFleetLocationUtilizationInput,
  DescribeFleetLocationUtilizationInputFilterSensitiveLog,
  DescribeFleetLocationUtilizationOutput,
  DescribeFleetLocationUtilizationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFleetLocationUtilizationCommand,
  serializeAws_json1_1DescribeFleetLocationUtilizationCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeFleetLocationUtilizationCommandInput extends DescribeFleetLocationUtilizationInput {}
export interface DescribeFleetLocationUtilizationCommandOutput
  extends DescribeFleetLocationUtilizationOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves current usage data for a fleet location. Utilization data provides a
 *             snapshot of current game hosting activity at the requested location. Use this operation
 *             to retrieve utilization information for a fleet's remote location or home Region (you
 *             can also retrieve home Region utilization by calling
 *                 <code>DescribeFleetUtilization</code>).</p>
 *         <p>To retrieve utilization data, identify a fleet and location. </p>
 *         <p>If successful, a <code>FleetUtilization</code> object is returned for the requested
 *             fleet location. </p>
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
 * import { GameLiftClient, DescribeFleetLocationUtilizationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetLocationUtilizationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeFleetLocationUtilizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetLocationUtilizationCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetLocationUtilizationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DescribeFleetLocationUtilizationCommand extends $Command<
  DescribeFleetLocationUtilizationCommandInput,
  DescribeFleetLocationUtilizationCommandOutput,
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

  constructor(readonly input: DescribeFleetLocationUtilizationCommandInput) {
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
  ): Handler<DescribeFleetLocationUtilizationCommandInput, DescribeFleetLocationUtilizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFleetLocationUtilizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeFleetLocationUtilizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFleetLocationUtilizationInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetLocationUtilizationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeFleetLocationUtilizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFleetLocationUtilizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFleetLocationUtilizationCommandOutput> {
    return deserializeAws_json1_1DescribeFleetLocationUtilizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
