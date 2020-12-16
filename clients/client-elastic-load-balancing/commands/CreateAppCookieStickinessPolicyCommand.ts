import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { CreateAppCookieStickinessPolicyInput, CreateAppCookieStickinessPolicyOutput } from "../models/models_0";
import {
  deserializeAws_queryCreateAppCookieStickinessPolicyCommand,
  serializeAws_queryCreateAppCookieStickinessPolicyCommand,
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

export type CreateAppCookieStickinessPolicyCommandInput = CreateAppCookieStickinessPolicyInput;
export type CreateAppCookieStickinessPolicyCommandOutput = CreateAppCookieStickinessPolicyOutput & __MetadataBearer;

/**
 * <p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p>
 *         <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>,
 *             except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>,
 *             follows the lifetime of the application-generated cookie specified in the policy configuration.
 *             The load balancer only inserts a new stickiness cookie when the application response
 *             includes a new application cookie.</p>
 *         <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 */
export class CreateAppCookieStickinessPolicyCommand extends $Command<
  CreateAppCookieStickinessPolicyCommandInput,
  CreateAppCookieStickinessPolicyCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAppCookieStickinessPolicyCommandInput) {
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
  ): Handler<CreateAppCookieStickinessPolicyCommandInput, CreateAppCookieStickinessPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "CreateAppCookieStickinessPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAppCookieStickinessPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAppCookieStickinessPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateAppCookieStickinessPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryCreateAppCookieStickinessPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAppCookieStickinessPolicyCommandOutput> {
    return deserializeAws_queryCreateAppCookieStickinessPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
