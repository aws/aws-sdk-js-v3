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
} from "@smithy/types";

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { CreateLBCookieStickinessPolicyInput, CreateLBCookieStickinessPolicyOutput } from "../models/models_0";
import {
  de_CreateLBCookieStickinessPolicyCommand,
  se_CreateLBCookieStickinessPolicyCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLBCookieStickinessPolicyCommand}.
 */
export interface CreateLBCookieStickinessPolicyCommandInput extends CreateLBCookieStickinessPolicyInput {}
/**
 * @public
 *
 * The output of {@link CreateLBCookieStickinessPolicyCommand}.
 */
export interface CreateLBCookieStickinessPolicyCommandOutput
  extends CreateLBCookieStickinessPolicyOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.</p>
 *         <p>When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request.
 *             If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm.</p>
 *         <p>A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration.</p>
 *
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateLBCookieStickinessPolicyCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateLBCookieStickinessPolicyCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // CreateLBCookieStickinessPolicyInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   CookieExpirationPeriod: Number("long"),
 * };
 * const command = new CreateLBCookieStickinessPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateLBCookieStickinessPolicyCommandInput - {@link CreateLBCookieStickinessPolicyCommandInput}
 * @returns {@link CreateLBCookieStickinessPolicyCommandOutput}
 * @see {@link CreateLBCookieStickinessPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateLBCookieStickinessPolicyCommandOutput} for command's `response` shape.
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
 * @example To generate a duration-based stickiness policy for your load balancer
 * ```javascript
 * // This example generates a stickiness policy with sticky session lifetimes controlled by the specified expiration period.
 * const input = {
 *   "CookieExpirationPeriod": 60,
 *   "LoadBalancerName": "my-load-balancer",
 *   "PolicyName": "my-duration-cookie-policy"
 * };
 * const command = new CreateLBCookieStickinessPolicyCommand(input);
 * await client.send(command);
 * // example id: elb-create-lb-cookie-stickiness-policy-1
 * ```
 *
 */
export class CreateLBCookieStickinessPolicyCommand extends $Command<
  CreateLBCookieStickinessPolicyCommandInput,
  CreateLBCookieStickinessPolicyCommandOutput,
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
  constructor(readonly input: CreateLBCookieStickinessPolicyCommandInput) {
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
  ): Handler<CreateLBCookieStickinessPolicyCommandInput, CreateLBCookieStickinessPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLBCookieStickinessPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "CreateLBCookieStickinessPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
    input: CreateLBCookieStickinessPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateLBCookieStickinessPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLBCookieStickinessPolicyCommandOutput> {
    return de_CreateLBCookieStickinessPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
