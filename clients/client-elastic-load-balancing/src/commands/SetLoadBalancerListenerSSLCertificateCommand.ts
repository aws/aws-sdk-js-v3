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
import {
  SetLoadBalancerListenerSSLCertificateInput,
  SetLoadBalancerListenerSSLCertificateOutput,
} from "../models/models_0";
import {
  de_SetLoadBalancerListenerSSLCertificateCommand,
  se_SetLoadBalancerListenerSSLCertificateCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetLoadBalancerListenerSSLCertificateCommand}.
 */
export interface SetLoadBalancerListenerSSLCertificateCommandInput extends SetLoadBalancerListenerSSLCertificateInput {}
/**
 * @public
 *
 * The output of {@link SetLoadBalancerListenerSSLCertificateCommand}.
 */
export interface SetLoadBalancerListenerSSLCertificateCommandOutput
  extends SetLoadBalancerListenerSSLCertificateOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p>
 *
 *         <p>For more information about updating your SSL certificate, see
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a>
 *                 in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, SetLoadBalancerListenerSSLCertificateCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, SetLoadBalancerListenerSSLCertificateCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // SetLoadBalancerListenerSSLCertificateInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   LoadBalancerPort: Number("int"), // required
 *   SSLCertificateId: "STRING_VALUE", // required
 * };
 * const command = new SetLoadBalancerListenerSSLCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetLoadBalancerListenerSSLCertificateCommandInput - {@link SetLoadBalancerListenerSSLCertificateCommandInput}
 * @returns {@link SetLoadBalancerListenerSSLCertificateCommandOutput}
 * @see {@link SetLoadBalancerListenerSSLCertificateCommandInput} for command's `input` shape.
 * @see {@link SetLoadBalancerListenerSSLCertificateCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The load balancer does not have a listener configured at the specified port.</p>
 *
 * @throws {@link UnsupportedProtocolException} (client fault)
 *  <p>The specified protocol or signature version is not supported.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To update the SSL certificate for an HTTPS listener
 * ```javascript
 * // This example replaces the existing SSL certificate for the specified HTTPS listener.
 * const input = {
 *   "LoadBalancerName": "my-load-balancer",
 *   "LoadBalancerPort": 443,
 *   "SSLCertificateId": "arn:aws:iam::123456789012:server-certificate/new-server-cert"
 * };
 * const command = new SetLoadBalancerListenerSSLCertificateCommand(input);
 * await client.send(command);
 * // example id: elb-set-load-balancer-listener-ssl-certificate-1
 * ```
 *
 */
export class SetLoadBalancerListenerSSLCertificateCommand extends $Command<
  SetLoadBalancerListenerSSLCertificateCommandInput,
  SetLoadBalancerListenerSSLCertificateCommandOutput,
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
  constructor(readonly input: SetLoadBalancerListenerSSLCertificateCommandInput) {
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
  ): Handler<SetLoadBalancerListenerSSLCertificateCommandInput, SetLoadBalancerListenerSSLCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetLoadBalancerListenerSSLCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "SetLoadBalancerListenerSSLCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v7",
        operation: "SetLoadBalancerListenerSSLCertificate",
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
    input: SetLoadBalancerListenerSSLCertificateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_SetLoadBalancerListenerSSLCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetLoadBalancerListenerSSLCertificateCommandOutput> {
    return de_SetLoadBalancerListenerSSLCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
