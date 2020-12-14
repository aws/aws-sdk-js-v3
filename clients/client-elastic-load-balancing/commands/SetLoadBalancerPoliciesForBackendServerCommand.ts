import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import {
  SetLoadBalancerPoliciesForBackendServerInput,
  SetLoadBalancerPoliciesForBackendServerOutput,
} from "../models/models_0";
import {
  deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand,
  serializeAws_querySetLoadBalancerPoliciesForBackendServerCommand,
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

export type SetLoadBalancerPoliciesForBackendServerCommandInput = SetLoadBalancerPoliciesForBackendServerInput;
export type SetLoadBalancerPoliciesForBackendServerCommandOutput = SetLoadBalancerPoliciesForBackendServerOutput &
  __MetadataBearer;

/**
 * <p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies.
 *             At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p>
 *         <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies,
 *             use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p>
 *         <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy
 *             is associated with the EC2 instance.</p>
 *
 *         <p>For more information about enabling back-end instance authentication, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a>
 *             in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 */
export class SetLoadBalancerPoliciesForBackendServerCommand extends $Command<
  SetLoadBalancerPoliciesForBackendServerCommandInput,
  SetLoadBalancerPoliciesForBackendServerCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetLoadBalancerPoliciesForBackendServerCommandInput) {
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
  ): Handler<
    SetLoadBalancerPoliciesForBackendServerCommandInput,
    SetLoadBalancerPoliciesForBackendServerCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "SetLoadBalancerPoliciesForBackendServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetLoadBalancerPoliciesForBackendServerInput.filterSensitiveLog,
      outputFilterSensitiveLog: SetLoadBalancerPoliciesForBackendServerOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SetLoadBalancerPoliciesForBackendServerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_querySetLoadBalancerPoliciesForBackendServerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetLoadBalancerPoliciesForBackendServerCommandOutput> {
    return deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
