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
} from "@smithy/types";

import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import { CreateScalingPlanRequest, CreateScalingPlanResponse } from "../models/models_0";
import { de_CreateScalingPlanCommand, se_CreateScalingPlanCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateScalingPlanCommand}.
 */
export interface CreateScalingPlanCommandInput extends CreateScalingPlanRequest {}
/**
 * @public
 *
 * The output of {@link CreateScalingPlanCommand}.
 */
export interface CreateScalingPlanCommandOutput extends CreateScalingPlanResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a scaling plan. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, CreateScalingPlanCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, CreateScalingPlanCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * const client = new AutoScalingPlansClient(config);
 * const input = { // CreateScalingPlanRequest
 *   ScalingPlanName: "STRING_VALUE", // required
 *   ApplicationSource: { // ApplicationSource
 *     CloudFormationStackARN: "STRING_VALUE",
 *     TagFilters: [ // TagFilters
 *       { // TagFilter
 *         Key: "STRING_VALUE",
 *         Values: [ // TagValues
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   ScalingInstructions: [ // ScalingInstructions // required
 *     { // ScalingInstruction
 *       ServiceNamespace: "STRING_VALUE", // required
 *       ResourceId: "STRING_VALUE", // required
 *       ScalableDimension: "STRING_VALUE", // required
 *       MinCapacity: Number("int"), // required
 *       MaxCapacity: Number("int"), // required
 *       TargetTrackingConfigurations: [ // TargetTrackingConfigurations // required
 *         { // TargetTrackingConfiguration
 *           PredefinedScalingMetricSpecification: { // PredefinedScalingMetricSpecification
 *             PredefinedScalingMetricType: "STRING_VALUE", // required
 *             ResourceLabel: "STRING_VALUE",
 *           },
 *           CustomizedScalingMetricSpecification: { // CustomizedScalingMetricSpecification
 *             MetricName: "STRING_VALUE", // required
 *             Namespace: "STRING_VALUE", // required
 *             Dimensions: [ // MetricDimensions
 *               { // MetricDimension
 *                 Name: "STRING_VALUE", // required
 *                 Value: "STRING_VALUE", // required
 *               },
 *             ],
 *             Statistic: "STRING_VALUE", // required
 *             Unit: "STRING_VALUE",
 *           },
 *           TargetValue: Number("double"), // required
 *           DisableScaleIn: true || false,
 *           ScaleOutCooldown: Number("int"),
 *           ScaleInCooldown: Number("int"),
 *           EstimatedInstanceWarmup: Number("int"),
 *         },
 *       ],
 *       PredefinedLoadMetricSpecification: { // PredefinedLoadMetricSpecification
 *         PredefinedLoadMetricType: "STRING_VALUE", // required
 *         ResourceLabel: "STRING_VALUE",
 *       },
 *       CustomizedLoadMetricSpecification: { // CustomizedLoadMetricSpecification
 *         MetricName: "STRING_VALUE", // required
 *         Namespace: "STRING_VALUE", // required
 *         Dimensions: [
 *           {
 *             Name: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *         Statistic: "STRING_VALUE", // required
 *         Unit: "STRING_VALUE",
 *       },
 *       ScheduledActionBufferTime: Number("int"),
 *       PredictiveScalingMaxCapacityBehavior: "STRING_VALUE",
 *       PredictiveScalingMaxCapacityBuffer: Number("int"),
 *       PredictiveScalingMode: "STRING_VALUE",
 *       ScalingPolicyUpdateBehavior: "STRING_VALUE",
 *       DisableDynamicScaling: true || false,
 *     },
 *   ],
 * };
 * const command = new CreateScalingPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateScalingPlanResponse
 * //   ScalingPlanVersion: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param CreateScalingPlanCommandInput - {@link CreateScalingPlanCommandInput}
 * @returns {@link CreateScalingPlanCommandOutput}
 * @see {@link CreateScalingPlanCommandInput} for command's `input` shape.
 * @see {@link CreateScalingPlanCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for AutoScalingPlansClient's `config` shape.
 *
 * @throws {@link ConcurrentUpdateException} (server fault)
 *  <p>Concurrent updates caused an exception, for example, if you request an update to a
 *          scaling plan that already has a pending update.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Your account exceeded a limit. This exception is thrown when a per-account resource
 *          limit is exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception was thrown for a validation issue. Review the parameters provided.</p>
 *
 * @throws {@link AutoScalingPlansServiceException}
 * <p>Base exception class for all service exceptions from AutoScalingPlans service.</p>
 *
 */
export class CreateScalingPlanCommand extends $Command<
  CreateScalingPlanCommandInput,
  CreateScalingPlanCommandOutput,
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
  constructor(readonly input: CreateScalingPlanCommandInput) {
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
  ): Handler<CreateScalingPlanCommandInput, CreateScalingPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateScalingPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingPlansClient";
    const commandName = "CreateScalingPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateScalingPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateScalingPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateScalingPlanCommandOutput> {
    return de_CreateScalingPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
