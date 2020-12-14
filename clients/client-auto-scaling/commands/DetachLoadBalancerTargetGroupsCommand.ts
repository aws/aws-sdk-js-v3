import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DetachLoadBalancerTargetGroupsResultType, DetachLoadBalancerTargetGroupsType } from "../models/models_0";
import {
  deserializeAws_queryDetachLoadBalancerTargetGroupsCommand,
  serializeAws_queryDetachLoadBalancerTargetGroupsCommand,
} from "../protocols/Aws_query";
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

export type DetachLoadBalancerTargetGroupsCommandInput = DetachLoadBalancerTargetGroupsType;
export type DetachLoadBalancerTargetGroupsCommandOutput = DetachLoadBalancerTargetGroupsResultType & __MetadataBearer;

/**
 * <p>Detaches one or more target groups from the specified Auto Scaling group.</p>
 */
export class DetachLoadBalancerTargetGroupsCommand extends $Command<
  DetachLoadBalancerTargetGroupsCommandInput,
  DetachLoadBalancerTargetGroupsCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetachLoadBalancerTargetGroupsCommandInput) {
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
  ): Handler<DetachLoadBalancerTargetGroupsCommandInput, DetachLoadBalancerTargetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DetachLoadBalancerTargetGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachLoadBalancerTargetGroupsType.filterSensitiveLog,
      outputFilterSensitiveLog: DetachLoadBalancerTargetGroupsResultType.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DetachLoadBalancerTargetGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDetachLoadBalancerTargetGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DetachLoadBalancerTargetGroupsCommandOutput> {
    return deserializeAws_queryDetachLoadBalancerTargetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
