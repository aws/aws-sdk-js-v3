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

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import {
  GetPredictiveScalingForecastAnswer,
  GetPredictiveScalingForecastAnswerFilterSensitiveLog,
  GetPredictiveScalingForecastType,
  GetPredictiveScalingForecastTypeFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGetPredictiveScalingForecastCommand,
  serializeAws_queryGetPredictiveScalingForecastCommand,
} from "../protocols/Aws_query";

export interface GetPredictiveScalingForecastCommandInput extends GetPredictiveScalingForecastType {}
export interface GetPredictiveScalingForecastCommandOutput
  extends GetPredictiveScalingForecastAnswer,
    __MetadataBearer {}

/**
 * <p>Retrieves the forecast data for a predictive scaling policy.</p>
 *          <p>Load forecasts are predictions of the hourly load values using historical load data
 *             from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as
 *             predicted values for the minimum capacity that is needed on an hourly basis, based on
 *             the hourly load forecast.</p>
 *          <p>A minimum of 24 hours of data is required to create the initial forecasts. However,
 *             having a full 14 days of historical data results in more accurate forecasts.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive
 *                 scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, GetPredictiveScalingForecastCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, GetPredictiveScalingForecastCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new GetPredictiveScalingForecastCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPredictiveScalingForecastCommandInput} for command's `input` shape.
 * @see {@link GetPredictiveScalingForecastCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class GetPredictiveScalingForecastCommand extends $Command<
  GetPredictiveScalingForecastCommandInput,
  GetPredictiveScalingForecastCommandOutput,
  AutoScalingClientResolvedConfig
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

  constructor(readonly input: GetPredictiveScalingForecastCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPredictiveScalingForecastCommandInput, GetPredictiveScalingForecastCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPredictiveScalingForecastCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "GetPredictiveScalingForecastCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPredictiveScalingForecastTypeFilterSensitiveLog,
      outputFilterSensitiveLog: GetPredictiveScalingForecastAnswerFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPredictiveScalingForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetPredictiveScalingForecastCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPredictiveScalingForecastCommandOutput> {
    return deserializeAws_queryGetPredictiveScalingForecastCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
