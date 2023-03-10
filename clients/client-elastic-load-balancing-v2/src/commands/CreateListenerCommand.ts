// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import {
  CreateListenerInput,
  CreateListenerInputFilterSensitiveLog,
  CreateListenerOutput,
  CreateListenerOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateListenerCommand,
  serializeAws_queryCreateListenerCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link CreateListenerCommand}.
 */
export interface CreateListenerCommandInput extends CreateListenerInput {}
/**
 * The output of {@link CreateListenerCommand}.
 */
export interface CreateListenerCommandOutput extends CreateListenerOutput, __MetadataBearer {}

/**
 * <p>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or
 *       Gateway Load Balancer.</p>
 *          <p>For more information, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for
 *             your Application Load Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for
 *             your Network Load Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your
 *             Gateway Load Balancers</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>This operation is idempotent, which means that it completes at most one time. If you
 *       attempt to create multiple listeners with the same settings, each call succeeds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, CreateListenerCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, CreateListenerCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new CreateListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateListenerCommandInput} for command's `input` shape.
 * @see {@link CreateListenerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @example To create an HTTP listener
 * ```javascript
 * // This example creates an HTTP listener for the specified load balancer that forwards requests to the specified target group.
 * const input = {
 *   "DefaultActions": [
 *     {
 *       "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *       "Type": "forward"
 *     }
 *   ],
 *   "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *   "Port": 80,
 *   "Protocol": "HTTP"
 * };
 * const command = new CreateListenerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Listeners": [
 *     {
 *       "DefaultActions": [
 *         {
 *           "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *           "Type": "forward"
 *         }
 *       ],
 *       "ListenerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2",
 *       "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *       "Port": 80,
 *       "Protocol": "HTTP"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-create-listener-1
 * ```
 *
 * @example To create an HTTPS listener
 * ```javascript
 * // This example creates an HTTPS listener for the specified load balancer that forwards requests to the specified target group. Note that you must specify an SSL certificate for an HTTPS listener. You can create and manage certificates using AWS Certificate Manager (ACM). Alternatively, you can create a certificate using SSL/TLS tools, get the certificate signed by a certificate authority (CA), and upload the certificate to AWS Identity and Access Management (IAM).
 * const input = {
 *   "Certificates": [
 *     {
 *       "CertificateArn": "arn:aws:iam::123456789012:server-certificate/my-server-cert"
 *     }
 *   ],
 *   "DefaultActions": [
 *     {
 *       "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *       "Type": "forward"
 *     }
 *   ],
 *   "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *   "Port": 443,
 *   "Protocol": "HTTPS",
 *   "SslPolicy": "ELBSecurityPolicy-2015-05"
 * };
 * const command = new CreateListenerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Listeners": [
 *     {
 *       "Certificates": [
 *         {
 *           "CertificateArn": "arn:aws:iam::123456789012:server-certificate/my-server-cert"
 *         }
 *       ],
 *       "DefaultActions": [
 *         {
 *           "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *           "Type": "forward"
 *         }
 *       ],
 *       "ListenerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2",
 *       "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *       "Port": 443,
 *       "Protocol": "HTTPS",
 *       "SslPolicy": "ELBSecurityPolicy-2015-05"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-create-listener-2
 * ```
 *
 */
export class CreateListenerCommand extends $Command<
  CreateListenerCommandInput,
  CreateListenerCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
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

  constructor(readonly input: CreateListenerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateListenerCommandInput, CreateListenerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateListenerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "CreateListenerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateListenerInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateListenerOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateListenerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateListenerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateListenerCommandOutput> {
    return deserializeAws_queryCreateListenerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
