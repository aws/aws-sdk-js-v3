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
  ApplicationAutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationAutoScalingClient";
import { DeregisterScalableTargetRequest, DeregisterScalableTargetResponse } from "../models/models_0";
import { de_DeregisterScalableTargetCommand, se_DeregisterScalableTargetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeregisterScalableTargetCommand}.
 */
export interface DeregisterScalableTargetCommandInput extends DeregisterScalableTargetRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterScalableTargetCommand}.
 */
export interface DeregisterScalableTargetCommandOutput extends DeregisterScalableTargetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which
 *          resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. </p>
 *          <note>
 *             <p>Deregistering a scalable target deletes the scaling policies and the scheduled
 *             actions that are associated with it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, DeregisterScalableTargetCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, DeregisterScalableTargetCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const input = { // DeregisterScalableTargetRequest
 *   ServiceNamespace: "ecs" || "elasticmapreduce" || "ec2" || "appstream" || "dynamodb" || "rds" || "sagemaker" || "custom-resource" || "comprehend" || "lambda" || "cassandra" || "kafka" || "elasticache" || "neptune", // required
 *   ResourceId: "STRING_VALUE", // required
 *   ScalableDimension: "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "elasticmapreduce:instancegroup:InstanceCount" || "appstream:fleet:DesiredCapacity" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits" || "rds:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredInstanceCount" || "custom-resource:ResourceType:Property" || "comprehend:document-classifier-endpoint:DesiredInferenceUnits" || "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits" || "lambda:function:ProvisionedConcurrency" || "cassandra:table:ReadCapacityUnits" || "cassandra:table:WriteCapacityUnits" || "kafka:broker-storage:VolumeSize" || "elasticache:replication-group:NodeGroups" || "elasticache:replication-group:Replicas" || "neptune:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredProvisionedConcurrency", // required
 * };
 * const command = new DeregisterScalableTargetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterScalableTargetCommandInput - {@link DeregisterScalableTargetCommandInput}
 * @returns {@link DeregisterScalableTargetCommandOutput}
 * @see {@link DeregisterScalableTargetCommandInput} for command's `input` shape.
 * @see {@link DeregisterScalableTargetCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for ApplicationAutoScalingClient's `config` shape.
 *
 * @throws {@link ConcurrentUpdateException} (server fault)
 *  <p>Concurrent updates caused an exception, for example, if you request an update to an
 *          Application Auto Scaling resource that already has a pending update.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link ObjectNotFoundException} (client fault)
 *  <p>The specified object could not be found. For any operation that depends on the existence
 *          of a scalable target, this exception is thrown if the scalable target with the specified
 *          service namespace, resource ID, and scalable dimension does not exist. For any operation
 *          that deletes or deregisters a resource, this exception is thrown if the resource cannot be
 *          found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception was thrown for a validation issue. Review the available parameters for the
 *          API request.</p>
 *
 * @throws {@link ApplicationAutoScalingServiceException}
 * <p>Base exception class for all service exceptions from ApplicationAutoScaling service.</p>
 *
 * @example To deregister a scalable target
 * ```javascript
 * // This example deregisters a scalable target for an Amazon ECS service called web-app that is running in the default cluster.
 * const input = {
 *   "ResourceId": "service/default/web-app",
 *   "ScalableDimension": "ecs:service:DesiredCount",
 *   "ServiceNamespace": "ecs"
 * };
 * const command = new DeregisterScalableTargetCommand(input);
 * await client.send(command);
 * // example id: to-deregister-a-scalable-target-1470864164895
 * ```
 *
 */
export class DeregisterScalableTargetCommand extends $Command<
  DeregisterScalableTargetCommandInput,
  DeregisterScalableTargetCommandOutput,
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
  constructor(readonly input: DeregisterScalableTargetCommandInput) {
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
  ): Handler<DeregisterScalableTargetCommandInput, DeregisterScalableTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterScalableTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationAutoScalingClient";
    const commandName = "DeregisterScalableTargetCommand";
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
  private serialize(input: DeregisterScalableTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeregisterScalableTargetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterScalableTargetCommandOutput> {
    return de_DeregisterScalableTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
