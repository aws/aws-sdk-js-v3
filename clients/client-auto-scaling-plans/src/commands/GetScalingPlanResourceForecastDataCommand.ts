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

import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import {
  GetScalingPlanResourceForecastDataRequest,
  GetScalingPlanResourceForecastDataRequestFilterSensitiveLog,
  GetScalingPlanResourceForecastDataResponse,
  GetScalingPlanResourceForecastDataResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand,
  serializeAws_json1_1GetScalingPlanResourceForecastDataCommand,
} from "../protocols/Aws_json1_1";

export interface GetScalingPlanResourceForecastDataCommandInput extends GetScalingPlanResourceForecastDataRequest {}
export interface GetScalingPlanResourceForecastDataCommandOutput
  extends GetScalingPlanResourceForecastDataResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the forecast data for a scalable resource.</p>
 *          <p>Capacity forecasts are represented as predicted values, or data points, that are
 *          calculated using historical data points from a specified CloudWatch load metric. Data points are
 *          available for up to 56 days. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, GetScalingPlanResourceForecastDataCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, GetScalingPlanResourceForecastDataCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * const client = new AutoScalingPlansClient(config);
 * const command = new GetScalingPlanResourceForecastDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetScalingPlanResourceForecastDataCommandInput} for command's `input` shape.
 * @see {@link GetScalingPlanResourceForecastDataCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for AutoScalingPlansClient's `config` shape.
 *
 */
export class GetScalingPlanResourceForecastDataCommand extends $Command<
  GetScalingPlanResourceForecastDataCommandInput,
  GetScalingPlanResourceForecastDataCommandOutput,
  AutoScalingPlansClientResolvedConfig
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

  constructor(readonly input: GetScalingPlanResourceForecastDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingPlansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetScalingPlanResourceForecastDataCommandInput, GetScalingPlanResourceForecastDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetScalingPlanResourceForecastDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingPlansClient";
    const commandName = "GetScalingPlanResourceForecastDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetScalingPlanResourceForecastDataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetScalingPlanResourceForecastDataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetScalingPlanResourceForecastDataCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetScalingPlanResourceForecastDataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetScalingPlanResourceForecastDataCommandOutput> {
    return deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
