// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import {
  GetScalingPlanResourceForecastDataRequest,
  GetScalingPlanResourceForecastDataResponse,
} from "../models/models_0";
import {
  de_GetScalingPlanResourceForecastDataCommand,
  se_GetScalingPlanResourceForecastDataCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetScalingPlanResourceForecastDataCommand}.
 */
export interface GetScalingPlanResourceForecastDataCommandInput extends GetScalingPlanResourceForecastDataRequest {}
/**
 * @public
 *
 * The output of {@link GetScalingPlanResourceForecastDataCommand}.
 */
export interface GetScalingPlanResourceForecastDataCommandOutput
  extends GetScalingPlanResourceForecastDataResponse,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // GetScalingPlanResourceForecastDataRequest
 *   ScalingPlanName: "STRING_VALUE", // required
 *   ScalingPlanVersion: Number("long"), // required
 *   ServiceNamespace: "autoscaling" || "ecs" || "ec2" || "rds" || "dynamodb", // required
 *   ResourceId: "STRING_VALUE", // required
 *   ScalableDimension: "autoscaling:autoScalingGroup:DesiredCapacity" || "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "rds:cluster:ReadReplicaCount" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits", // required
 *   ForecastDataType: "CapacityForecast" || "LoadForecast" || "ScheduledActionMinCapacity" || "ScheduledActionMaxCapacity", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new GetScalingPlanResourceForecastDataCommand(input);
 * const response = await client.send(command);
 * // { // GetScalingPlanResourceForecastDataResponse
 * //   Datapoints: [ // Datapoints // required
 * //     { // Datapoint
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       Value: Number("double"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetScalingPlanResourceForecastDataCommandInput - {@link GetScalingPlanResourceForecastDataCommandInput}
 * @returns {@link GetScalingPlanResourceForecastDataCommandOutput}
 * @see {@link GetScalingPlanResourceForecastDataCommandInput} for command's `input` shape.
 * @see {@link GetScalingPlanResourceForecastDataCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for AutoScalingPlansClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception was thrown for a validation issue. Review the parameters provided.</p>
 *
 * @throws {@link AutoScalingPlansServiceException}
 * <p>Base exception class for all service exceptions from AutoScalingPlans service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AnyScaleScalingPlannerFrontendService",
        operation: "GetScalingPlanResourceForecastData",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: GetScalingPlanResourceForecastDataCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetScalingPlanResourceForecastDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetScalingPlanResourceForecastDataCommandOutput> {
    return de_GetScalingPlanResourceForecastDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
