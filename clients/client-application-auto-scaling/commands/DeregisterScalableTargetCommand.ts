import {
  ApplicationAutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationAutoScalingClient";
import { DeregisterScalableTargetRequest, DeregisterScalableTargetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterScalableTargetCommand,
  serializeAws_json1_1DeregisterScalableTargetCommand,
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

export type DeregisterScalableTargetCommandInput = DeregisterScalableTargetRequest;
export type DeregisterScalableTargetCommandOutput = DeregisterScalableTargetResponse & __MetadataBearer;

/**
 * <p>Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which
 *          resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. </p>
 *          <note>
 *             <p>Deregistering a scalable target deletes the scaling policies and the scheduled
 *             actions that are associated with it.</p>
 *          </note>
 */
export class DeregisterScalableTargetCommand extends $Command<
  DeregisterScalableTargetCommandInput,
  DeregisterScalableTargetCommandOutput,
  ApplicationAutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationAutoScalingClient";
    const commandName = "DeregisterScalableTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterScalableTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterScalableTargetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterScalableTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterScalableTargetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterScalableTargetCommandOutput> {
    return deserializeAws_json1_1DeregisterScalableTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
