import {
  ApplicationAutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationAutoScalingClient";
import { RegisterScalableTargetRequest, RegisterScalableTargetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RegisterScalableTargetCommand,
  serializeAws_json1_1RegisterScalableTargetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type RegisterScalableTargetCommandInput = RegisterScalableTargetRequest;
export type RegisterScalableTargetCommandOutput = RegisterScalableTargetResponse & __MetadataBearer;

/**
 * <p>Registers or updates a scalable target. </p>
 *          <p>A scalable target is a resource that Application Auto Scaling can scale out and scale in. Scalable
 *          targets are uniquely identified by the combination of resource ID, scalable dimension, and
 *          namespace. </p>
 *          <p>When you register a new scalable target, you must specify values for minimum and maximum
 *          capacity. Current capacity will be adjusted within the specified range when scaling starts.
 *          Application Auto Scaling scaling policies will not scale capacity to values that are outside of this
 *          range.</p>
 *          <p>After you register a scalable target, you do not need to register it again to use other
 *          Application Auto Scaling operations. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. You can also view the scaling policies for a service
 *          namespace by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. If you no longer need a scalable target, you can
 *          deregister it by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html">DeregisterScalableTarget</a>.</p>
 *          <p>To update a scalable target, specify the parameters that you want to change. Include the
 *          parameters that identify the scalable target: resource ID, scalable dimension, and
 *          namespace. Any parameters that you don't specify are not changed by this update request. </p>
 */
export class RegisterScalableTargetCommand extends $Command<
  RegisterScalableTargetCommandInput,
  RegisterScalableTargetCommandOutput,
  ApplicationAutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationAutoScalingClient";
    const commandName = "RegisterScalableTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterScalableTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterScalableTargetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterScalableTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterScalableTargetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterScalableTargetCommandOutput> {
    return deserializeAws_json1_1RegisterScalableTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
