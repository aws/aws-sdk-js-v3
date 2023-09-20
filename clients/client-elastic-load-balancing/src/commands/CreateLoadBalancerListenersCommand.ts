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
import { CreateLoadBalancerListenerInput, CreateLoadBalancerListenerOutput } from "../models/models_0";
import { de_CreateLoadBalancerListenersCommand, se_CreateLoadBalancerListenersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLoadBalancerListenersCommand}.
 */
export interface CreateLoadBalancerListenersCommandInput extends CreateLoadBalancerListenerInput {}
/**
 * @public
 *
 * The output of {@link CreateLoadBalancerListenersCommand}.
 */
export interface CreateLoadBalancerListenersCommandOutput extends CreateLoadBalancerListenerOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateLoadBalancerListenersCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateLoadBalancerListenersCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // CreateLoadBalancerListenerInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   Listeners: [ // Listeners // required
 *     { // Listener
 *       Protocol: "STRING_VALUE", // required
 *       LoadBalancerPort: Number("int"), // required
 *       InstanceProtocol: "STRING_VALUE",
 *       InstancePort: Number("int"), // required
 *       SSLCertificateId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateLoadBalancerListenersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateLoadBalancerListenersCommandInput - {@link CreateLoadBalancerListenersCommandInput}
 * @returns {@link CreateLoadBalancerListenersCommandOutput}
 * @see {@link CreateLoadBalancerListenersCommandInput} for command's `input` shape.
 * @see {@link CreateLoadBalancerListenersCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link CertificateNotFoundException} (client fault)
 *  <p>The specified ARN does not refer to a valid SSL certificate in AWS Identity and Access Management (IAM)
 *             or AWS Certificate Manager (ACM). Note that if you recently uploaded the certificate to IAM, this error might
 *             indicate that the certificate is not fully available yet.</p>
 *
 * @throws {@link DuplicateListenerException} (client fault)
 *  <p>A listener already exists for the specified load balancer name and port, but with a different instance port, protocol, or SSL certificate.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link UnsupportedProtocolException} (client fault)
 *  <p>The specified protocol or signature version is not supported.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To create an HTTP listener for a load balancer
 * ```javascript
 * // This example creates a listener for your load balancer at port 80 using the HTTP protocol.
 * const input = {
 *   "Listeners": [
 *     {
 *       "InstancePort": 80,
 *       "InstanceProtocol": "HTTP",
 *       "LoadBalancerPort": 80,
 *       "Protocol": "HTTP"
 *     }
 *   ],
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new CreateLoadBalancerListenersCommand(input);
 * await client.send(command);
 * // example id: elb-create-load-balancer-listeners-1
 * ```
 *
 * @example To create an HTTPS listener for a load balancer
 * ```javascript
 * // This example creates a listener for your load balancer at port 443 using the HTTPS protocol.
 * const input = {
 *   "Listeners": [
 *     {
 *       "InstancePort": 80,
 *       "InstanceProtocol": "HTTP",
 *       "LoadBalancerPort": 443,
 *       "Protocol": "HTTPS",
 *       "SSLCertificateId": "arn:aws:iam::123456789012:server-certificate/my-server-cert"
 *     }
 *   ],
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new CreateLoadBalancerListenersCommand(input);
 * await client.send(command);
 * // example id: elb-create-load-balancer-listeners-2
 * ```
 *
 */
export class CreateLoadBalancerListenersCommand extends $Command<
  CreateLoadBalancerListenersCommandInput,
  CreateLoadBalancerListenersCommandOutput,
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
  constructor(readonly input: CreateLoadBalancerListenersCommandInput) {
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
  ): Handler<CreateLoadBalancerListenersCommandInput, CreateLoadBalancerListenersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLoadBalancerListenersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "CreateLoadBalancerListenersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v7",
        operation: "CreateLoadBalancerListeners",
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
  private serialize(input: CreateLoadBalancerListenersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLoadBalancerListenersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLoadBalancerListenersCommandOutput> {
    return de_CreateLoadBalancerListenersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
