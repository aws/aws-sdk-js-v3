import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { DetachLoadBalancerFromSubnetsInput, DetachLoadBalancerFromSubnetsOutput } from "../models/models_0";
import {
  deserializeAws_queryDetachLoadBalancerFromSubnetsCommand,
  serializeAws_queryDetachLoadBalancerFromSubnetsCommand,
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

export type DetachLoadBalancerFromSubnetsCommandInput = DetachLoadBalancerFromSubnetsInput;
export type DetachLoadBalancerFromSubnetsCommandOutput = DetachLoadBalancerFromSubnetsOutput & __MetadataBearer;

/**
 * <p>Removes the specified subnets from the set of configured subnets for the load balancer.</p>
 *         <p>After a subnet is removed, all EC2 instances registered with the load balancer
 *             in the removed subnet go into the <code>OutOfService</code> state. Then,
 *             the load balancer balances the traffic among the remaining routable subnets.</p>
 */
export class DetachLoadBalancerFromSubnetsCommand extends $Command<
  DetachLoadBalancerFromSubnetsCommandInput,
  DetachLoadBalancerFromSubnetsCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetachLoadBalancerFromSubnetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetachLoadBalancerFromSubnetsCommandInput, DetachLoadBalancerFromSubnetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "DetachLoadBalancerFromSubnetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachLoadBalancerFromSubnetsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DetachLoadBalancerFromSubnetsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetachLoadBalancerFromSubnetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDetachLoadBalancerFromSubnetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DetachLoadBalancerFromSubnetsCommandOutput> {
    return deserializeAws_queryDetachLoadBalancerFromSubnetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
