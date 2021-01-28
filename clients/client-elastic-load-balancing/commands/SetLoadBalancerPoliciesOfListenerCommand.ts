import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { SetLoadBalancerPoliciesOfListenerInput, SetLoadBalancerPoliciesOfListenerOutput } from "../models/models_0";
import {
  deserializeAws_querySetLoadBalancerPoliciesOfListenerCommand,
  serializeAws_querySetLoadBalancerPoliciesOfListenerCommand,
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

export type SetLoadBalancerPoliciesOfListenerCommandInput = SetLoadBalancerPoliciesOfListenerInput;
export type SetLoadBalancerPoliciesOfListenerCommandOutput = SetLoadBalancerPoliciesOfListenerOutput & __MetadataBearer;

/**
 * <p>Replaces the current set of policies for the specified load balancer port with the specified set of policies.</p>
 *         <p>To enable back-end server authentication, use <a>SetLoadBalancerPoliciesForBackendServer</a>.</p>
 *         <p>For more information about setting policies, see
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html">Update the SSL Negotiation Configuration</a>,
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>, and
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 */
export class SetLoadBalancerPoliciesOfListenerCommand extends $Command<
  SetLoadBalancerPoliciesOfListenerCommandInput,
  SetLoadBalancerPoliciesOfListenerCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetLoadBalancerPoliciesOfListenerCommandInput) {
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
  ): Handler<SetLoadBalancerPoliciesOfListenerCommandInput, SetLoadBalancerPoliciesOfListenerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "SetLoadBalancerPoliciesOfListenerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetLoadBalancerPoliciesOfListenerInput.filterSensitiveLog,
      outputFilterSensitiveLog: SetLoadBalancerPoliciesOfListenerOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SetLoadBalancerPoliciesOfListenerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_querySetLoadBalancerPoliciesOfListenerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetLoadBalancerPoliciesOfListenerCommandOutput> {
    return deserializeAws_querySetLoadBalancerPoliciesOfListenerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
