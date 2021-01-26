import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DetachLoadBalancersResultType, DetachLoadBalancersType } from "../models/models_0";
import {
  deserializeAws_queryDetachLoadBalancersCommand,
  serializeAws_queryDetachLoadBalancersCommand,
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

export type DetachLoadBalancersCommandInput = DetachLoadBalancersType;
export type DetachLoadBalancersCommandOutput = DetachLoadBalancersResultType & __MetadataBearer;

/**
 * <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p>
 *         <p>This operation detaches only Classic Load Balancers. If you have Application Load
 *             Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p>
 *         <p>When you detach a load balancer, it enters the <code>Removing</code> state while
 *             deregistering the instances in the group. When all instances are deregistered, then you
 *             can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>
 */
export class DetachLoadBalancersCommand extends $Command<
  DetachLoadBalancersCommandInput,
  DetachLoadBalancersCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetachLoadBalancersCommandInput) {
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
  ): Handler<DetachLoadBalancersCommandInput, DetachLoadBalancersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DetachLoadBalancersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachLoadBalancersType.filterSensitiveLog,
      outputFilterSensitiveLog: DetachLoadBalancersResultType.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetachLoadBalancersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDetachLoadBalancersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachLoadBalancersCommandOutput> {
    return deserializeAws_queryDetachLoadBalancersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
