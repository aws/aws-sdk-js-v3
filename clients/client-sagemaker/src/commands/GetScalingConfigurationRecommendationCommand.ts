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

import {
  GetScalingConfigurationRecommendationRequest,
  GetScalingConfigurationRecommendationResponse,
} from "../models/models_3";
import {
  de_GetScalingConfigurationRecommendationCommand,
  se_GetScalingConfigurationRecommendationCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetScalingConfigurationRecommendationCommand}.
 */
export interface GetScalingConfigurationRecommendationCommandInput
  extends GetScalingConfigurationRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link GetScalingConfigurationRecommendationCommand}.
 */
export interface GetScalingConfigurationRecommendationCommandOutput
  extends GetScalingConfigurationRecommendationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Starts an Amazon SageMaker Inference Recommender autoscaling recommendation job. Returns recommendations for autoscaling policies
 *          that you can apply to your SageMaker endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, GetScalingConfigurationRecommendationCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, GetScalingConfigurationRecommendationCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // GetScalingConfigurationRecommendationRequest
 *   InferenceRecommendationsJobName: "STRING_VALUE", // required
 *   RecommendationId: "STRING_VALUE",
 *   EndpointName: "STRING_VALUE",
 *   TargetCpuUtilizationPerCore: Number("int"),
 *   ScalingPolicyObjective: { // ScalingPolicyObjective
 *     MinInvocationsPerMinute: Number("int"),
 *     MaxInvocationsPerMinute: Number("int"),
 *   },
 * };
 * const command = new GetScalingConfigurationRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // GetScalingConfigurationRecommendationResponse
 * //   InferenceRecommendationsJobName: "STRING_VALUE",
 * //   RecommendationId: "STRING_VALUE",
 * //   EndpointName: "STRING_VALUE",
 * //   TargetCpuUtilizationPerCore: Number("int"),
 * //   ScalingPolicyObjective: { // ScalingPolicyObjective
 * //     MinInvocationsPerMinute: Number("int"),
 * //     MaxInvocationsPerMinute: Number("int"),
 * //   },
 * //   Metric: { // ScalingPolicyMetric
 * //     InvocationsPerInstance: Number("int"),
 * //     ModelLatency: Number("int"),
 * //   },
 * //   DynamicScalingConfiguration: { // DynamicScalingConfiguration
 * //     MinCapacity: Number("int"),
 * //     MaxCapacity: Number("int"),
 * //     ScaleInCooldown: Number("int"),
 * //     ScaleOutCooldown: Number("int"),
 * //     ScalingPolicies: [ // ScalingPolicies
 * //       { // ScalingPolicy Union: only one key present
 * //         TargetTracking: { // TargetTrackingScalingPolicyConfiguration
 * //           MetricSpecification: { // MetricSpecification Union: only one key present
 * //             Predefined: { // PredefinedMetricSpecification
 * //               PredefinedMetricType: "STRING_VALUE",
 * //             },
 * //             Customized: { // CustomizedMetricSpecification
 * //               MetricName: "STRING_VALUE",
 * //               Namespace: "STRING_VALUE",
 * //               Statistic: "Average" || "Minimum" || "Maximum" || "SampleCount" || "Sum",
 * //             },
 * //           },
 * //           TargetValue: Number("double"),
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetScalingConfigurationRecommendationCommandInput - {@link GetScalingConfigurationRecommendationCommandInput}
 * @returns {@link GetScalingConfigurationRecommendationCommandOutput}
 * @see {@link GetScalingConfigurationRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetScalingConfigurationRecommendationCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class GetScalingConfigurationRecommendationCommand extends $Command<
  GetScalingConfigurationRecommendationCommandInput,
  GetScalingConfigurationRecommendationCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: GetScalingConfigurationRecommendationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetScalingConfigurationRecommendationCommandInput, GetScalingConfigurationRecommendationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetScalingConfigurationRecommendationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "GetScalingConfigurationRecommendationCommand";
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
  private serialize(
    input: GetScalingConfigurationRecommendationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetScalingConfigurationRecommendationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetScalingConfigurationRecommendationCommandOutput> {
    return de_GetScalingConfigurationRecommendationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
