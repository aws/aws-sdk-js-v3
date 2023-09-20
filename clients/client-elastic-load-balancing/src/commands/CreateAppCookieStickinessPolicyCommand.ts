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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { CreateAppCookieStickinessPolicyInput, CreateAppCookieStickinessPolicyOutput } from "../models/models_0";
import {
  de_CreateAppCookieStickinessPolicyCommand,
  se_CreateAppCookieStickinessPolicyCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAppCookieStickinessPolicyCommand}.
 */
export interface CreateAppCookieStickinessPolicyCommandInput extends CreateAppCookieStickinessPolicyInput {}
/**
 * @public
 *
 * The output of {@link CreateAppCookieStickinessPolicyCommand}.
 */
export interface CreateAppCookieStickinessPolicyCommandOutput
  extends CreateAppCookieStickinessPolicyOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p>
 *         <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>,
 *             except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>,
 *             follows the lifetime of the application-generated cookie specified in the policy configuration.
 *             The load balancer only inserts a new stickiness cookie when the application response
 *             includes a new application cookie.</p>
 *         <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateAppCookieStickinessPolicyCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateAppCookieStickinessPolicyCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // CreateAppCookieStickinessPolicyInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   CookieName: "STRING_VALUE", // required
 * };
 * const command = new CreateAppCookieStickinessPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateAppCookieStickinessPolicyCommandInput - {@link CreateAppCookieStickinessPolicyCommandInput}
 * @returns {@link CreateAppCookieStickinessPolicyCommandOutput}
 * @see {@link CreateAppCookieStickinessPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateAppCookieStickinessPolicyCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link DuplicatePolicyNameException} (client fault)
 *  <p>A policy with the specified name already exists for this load balancer.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link TooManyPoliciesException} (client fault)
 *  <p>The quota for the number of policies for this load balancer has been reached.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To generate a stickiness policy for your load balancer
 * ```javascript
 * // This example generates a stickiness policy that follows the sticky session lifetimes of the application-generated cookie.
 * const input = {
 *   "CookieName": "my-app-cookie",
 *   "LoadBalancerName": "my-load-balancer",
 *   "PolicyName": "my-app-cookie-policy"
 * };
 * const command = new CreateAppCookieStickinessPolicyCommand(input);
 * await client.send(command);
 * // example id: elb-create-app-cookie-stickiness-policy-1
 * ```
 *
 */
export class CreateAppCookieStickinessPolicyCommand extends $Command<
  CreateAppCookieStickinessPolicyCommandInput,
  CreateAppCookieStickinessPolicyCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAppCookieStickinessPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "CreateAppCookieStickinessPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v7",
        operation: "CreateAppCookieStickinessPolicy",
      },
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
  private serialize(
    input: CreateAppCookieStickinessPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateAppCookieStickinessPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAppCookieStickinessPolicyCommandOutput> {
    return de_CreateAppCookieStickinessPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
