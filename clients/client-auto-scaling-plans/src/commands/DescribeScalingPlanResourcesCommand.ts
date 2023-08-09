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
import { DescribeScalingPlanResourcesRequest, DescribeScalingPlanResourcesResponse } from "../models/models_0";
import {
  de_DescribeScalingPlanResourcesCommand,
  se_DescribeScalingPlanResourcesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeScalingPlanResourcesCommand}.
 */
export interface DescribeScalingPlanResourcesCommandInput extends DescribeScalingPlanResourcesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScalingPlanResourcesCommand}.
 */
export interface DescribeScalingPlanResourcesCommandOutput
  extends DescribeScalingPlanResourcesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the scalable resources in the specified scaling plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, DescribeScalingPlanResourcesCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, DescribeScalingPlanResourcesCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * const client = new AutoScalingPlansClient(config);
 * const input = { // DescribeScalingPlanResourcesRequest
 *   ScalingPlanName: "STRING_VALUE", // required
 *   ScalingPlanVersion: Number("long"), // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeScalingPlanResourcesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScalingPlanResourcesResponse
 * //   ScalingPlanResources: [ // ScalingPlanResources
 * //     { // ScalingPlanResource
 * //       ScalingPlanName: "STRING_VALUE", // required
 * //       ScalingPlanVersion: Number("long"), // required
 * //       ServiceNamespace: "STRING_VALUE", // required
 * //       ResourceId: "STRING_VALUE", // required
 * //       ScalableDimension: "STRING_VALUE", // required
 * //       ScalingPolicies: [ // ScalingPolicies
 * //         { // ScalingPolicy
 * //           PolicyName: "STRING_VALUE", // required
 * //           PolicyType: "STRING_VALUE", // required
 * //           TargetTrackingConfiguration: { // TargetTrackingConfiguration
 * //             PredefinedScalingMetricSpecification: { // PredefinedScalingMetricSpecification
 * //               PredefinedScalingMetricType: "STRING_VALUE", // required
 * //               ResourceLabel: "STRING_VALUE",
 * //             },
 * //             CustomizedScalingMetricSpecification: { // CustomizedScalingMetricSpecification
 * //               MetricName: "STRING_VALUE", // required
 * //               Namespace: "STRING_VALUE", // required
 * //               Dimensions: [ // MetricDimensions
 * //                 { // MetricDimension
 * //                   Name: "STRING_VALUE", // required
 * //                   Value: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //               Statistic: "STRING_VALUE", // required
 * //               Unit: "STRING_VALUE",
 * //             },
 * //             TargetValue: Number("double"), // required
 * //             DisableScaleIn: true || false,
 * //             ScaleOutCooldown: Number("int"),
 * //             ScaleInCooldown: Number("int"),
 * //             EstimatedInstanceWarmup: Number("int"),
 * //           },
 * //         },
 * //       ],
 * //       ScalingStatusCode: "STRING_VALUE", // required
 * //       ScalingStatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeScalingPlanResourcesCommandInput - {@link DescribeScalingPlanResourcesCommandInput}
 * @returns {@link DescribeScalingPlanResourcesCommandOutput}
 * @see {@link DescribeScalingPlanResourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingPlanResourcesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for AutoScalingPlansClient's `config` shape.
 *
 * @throws {@link ConcurrentUpdateException} (server fault)
 *  <p>Concurrent updates caused an exception, for example, if you request an update to a
 *          scaling plan that already has a pending update.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token provided is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception was thrown for a validation issue. Review the parameters provided.</p>
 *
 * @throws {@link AutoScalingPlansServiceException}
 * <p>Base exception class for all service exceptions from AutoScalingPlans service.</p>
 *
 */
export class DescribeScalingPlanResourcesCommand extends $Command<
  DescribeScalingPlanResourcesCommandInput,
  DescribeScalingPlanResourcesCommandOutput,
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
  constructor(readonly input: DescribeScalingPlanResourcesCommandInput) {
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
  ): Handler<DescribeScalingPlanResourcesCommandInput, DescribeScalingPlanResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeScalingPlanResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingPlansClient";
    const commandName = "DescribeScalingPlanResourcesCommand";
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
  private serialize(input: DescribeScalingPlanResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeScalingPlanResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScalingPlanResourcesCommandOutput> {
    return de_DescribeScalingPlanResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
