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

import {
  ApplicationAutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationAutoScalingClient";
import { RegisterScalableTargetRequest, RegisterScalableTargetResponse } from "../models/models_0";
import { de_RegisterScalableTargetCommand, se_RegisterScalableTargetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterScalableTargetCommand}.
 */
export interface RegisterScalableTargetCommandInput extends RegisterScalableTargetRequest {}
/**
 * @public
 *
 * The output of {@link RegisterScalableTargetCommand}.
 */
export interface RegisterScalableTargetCommandOutput extends RegisterScalableTargetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Registers or updates a scalable target, which is the resource that you want to
 *          scale.</p>
 *          <p>Scalable targets are uniquely identified by the combination of resource ID, scalable
 *          dimension, and namespace, which represents some capacity dimension of the underlying
 *          service.</p>
 *          <p>When you register a new scalable target, you must specify values for the minimum and
 *          maximum capacity. If the specified resource is not active in the target service, this
 *          operation does not change the resource's current capacity. Otherwise, it changes the
 *          resource's current capacity to a value that is inside of this range.</p>
 *          <p>If you add a scaling policy, current capacity is adjustable within the specified range
 *          when scaling starts. Application Auto Scaling scaling policies will not scale capacity to values that are
 *          outside of the minimum and maximum range.</p>
 *          <p>After you register a scalable target, you do not need to register it again to use other
 *          Application Auto Scaling operations. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. You can also view the scaling policies for a service
 *          namespace by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. If you no longer need a scalable target, you can
 *          deregister it by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html">DeregisterScalableTarget</a>.</p>
 *          <p>To update a scalable target, specify the parameters that you want to change. Include the
 *          parameters that identify the scalable target: resource ID, scalable dimension, and
 *          namespace. Any parameters that you don't specify are not changed by this update request. </p>
 *          <note>
 *             <p>If you call the <code>RegisterScalableTarget</code> API operation to create a
 *             scalable target, there might be a brief delay until the operation achieves <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual
 *             consistency</a>. You might become aware of this brief delay if you get unexpected
 *             errors when performing sequential operations. The typical strategy is to retry the
 *             request, and some Amazon Web Services SDKs include automatic backoff and retry logic.</p>
 *             <p>If you call the <code>RegisterScalableTarget</code> API operation to update an
 *             existing scalable target, Application Auto Scaling retrieves the current capacity of the resource. If
 *             it's below the minimum capacity or above the maximum capacity, Application Auto Scaling adjusts the
 *             capacity of the scalable target to place it within these bounds, even if you don't
 *             include the <code>MinCapacity</code> or <code>MaxCapacity</code> request
 *             parameters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, RegisterScalableTargetCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, RegisterScalableTargetCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const input = { // RegisterScalableTargetRequest
 *   ServiceNamespace: "ecs" || "elasticmapreduce" || "ec2" || "appstream" || "dynamodb" || "rds" || "sagemaker" || "custom-resource" || "comprehend" || "lambda" || "cassandra" || "kafka" || "elasticache" || "neptune", // required
 *   ResourceId: "STRING_VALUE", // required
 *   ScalableDimension: "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "elasticmapreduce:instancegroup:InstanceCount" || "appstream:fleet:DesiredCapacity" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits" || "rds:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredInstanceCount" || "custom-resource:ResourceType:Property" || "comprehend:document-classifier-endpoint:DesiredInferenceUnits" || "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits" || "lambda:function:ProvisionedConcurrency" || "cassandra:table:ReadCapacityUnits" || "cassandra:table:WriteCapacityUnits" || "kafka:broker-storage:VolumeSize" || "elasticache:replication-group:NodeGroups" || "elasticache:replication-group:Replicas" || "neptune:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredProvisionedConcurrency", // required
 *   MinCapacity: Number("int"),
 *   MaxCapacity: Number("int"),
 *   RoleARN: "STRING_VALUE",
 *   SuspendedState: { // SuspendedState
 *     DynamicScalingInSuspended: true || false,
 *     DynamicScalingOutSuspended: true || false,
 *     ScheduledScalingSuspended: true || false,
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new RegisterScalableTargetCommand(input);
 * const response = await client.send(command);
 * // { // RegisterScalableTargetResponse
 * //   ScalableTargetARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterScalableTargetCommandInput - {@link RegisterScalableTargetCommandInput}
 * @returns {@link RegisterScalableTargetCommandOutput}
 * @see {@link RegisterScalableTargetCommandInput} for command's `input` shape.
 * @see {@link RegisterScalableTargetCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for ApplicationAutoScalingClient's `config` shape.
 *
 * @throws {@link ConcurrentUpdateException} (server fault)
 *  <p>Concurrent updates caused an exception, for example, if you request an update to an
 *          Application Auto Scaling resource that already has a pending update.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A per-account resource limit is exceeded. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-limits.html">Application Auto Scaling service quotas</a>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception was thrown for a validation issue. Review the available parameters for the
 *          API request.</p>
 *
 * @throws {@link ApplicationAutoScalingServiceException}
 * <p>Base exception class for all service exceptions from ApplicationAutoScaling service.</p>
 *
 * @example To register an ECS service as a scalable target
 * ```javascript
 * // This example registers a scalable target from an Amazon ECS service called web-app that is running on the default cluster, with a minimum desired count of 1 task and a maximum desired count of 10 tasks.
 * const input = {
 *   "MaxCapacity": 10,
 *   "MinCapacity": 1,
 *   "ResourceId": "service/default/web-app",
 *   "ScalableDimension": "ecs:service:DesiredCount",
 *   "ServiceNamespace": "ecs"
 * };
 * const command = new RegisterScalableTargetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ScalableTargetARN": "arn:aws:application-autoscaling:us-east-1:123456789012:scalable-target/1234abcd56ab78cd901ef1234567890ab123"
 * }
 * *\/
 * // example id: to-register-a-new-scalable-target-1470864910380
 * ```
 *
 */
export class RegisterScalableTargetCommand extends $Command<
  RegisterScalableTargetCommandInput,
  RegisterScalableTargetCommandOutput,
  ApplicationAutoScalingClientResolvedConfig
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
  constructor(readonly input: RegisterScalableTargetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationAutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterScalableTargetCommandInput, RegisterScalableTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterScalableTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationAutoScalingClient";
    const commandName = "RegisterScalableTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AnyScaleFrontendService",
        operation: "RegisterScalableTarget",
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
  private serialize(input: RegisterScalableTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterScalableTargetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterScalableTargetCommandOutput> {
    return de_RegisterScalableTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
