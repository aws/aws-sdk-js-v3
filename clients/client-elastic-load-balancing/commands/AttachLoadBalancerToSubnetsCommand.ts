import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { AttachLoadBalancerToSubnetsInput, AttachLoadBalancerToSubnetsOutput } from "../models/models_0";
import {
  deserializeAws_queryAttachLoadBalancerToSubnetsCommand,
  serializeAws_queryAttachLoadBalancerToSubnetsCommand,
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

export type AttachLoadBalancerToSubnetsCommandInput = AttachLoadBalancerToSubnetsInput;
export type AttachLoadBalancerToSubnetsCommandOutput = AttachLoadBalancerToSubnetsOutput & __MetadataBearer;

/**
 * <p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p>
 *         <p>The load balancer evenly distributes requests across all registered subnets.
 *             For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 */
export class AttachLoadBalancerToSubnetsCommand extends $Command<
  AttachLoadBalancerToSubnetsCommandInput,
  AttachLoadBalancerToSubnetsCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachLoadBalancerToSubnetsCommandInput) {
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
  ): Handler<AttachLoadBalancerToSubnetsCommandInput, AttachLoadBalancerToSubnetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "AttachLoadBalancerToSubnetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachLoadBalancerToSubnetsInput.filterSensitiveLog,
      outputFilterSensitiveLog: AttachLoadBalancerToSubnetsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachLoadBalancerToSubnetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAttachLoadBalancerToSubnetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AttachLoadBalancerToSubnetsCommandOutput> {
    return deserializeAws_queryAttachLoadBalancerToSubnetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
