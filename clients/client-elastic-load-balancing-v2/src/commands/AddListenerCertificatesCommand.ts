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
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { AddListenerCertificatesInput, AddListenerCertificatesOutput } from "../models/models_0";
import { de_AddListenerCertificatesCommand, se_AddListenerCertificatesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddListenerCertificatesCommand}.
 */
export interface AddListenerCertificatesCommandInput extends AddListenerCertificatesInput {}
/**
 * @public
 *
 * The output of {@link AddListenerCertificatesCommand}.
 */
export interface AddListenerCertificatesCommandOutput extends AddListenerCertificatesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS
 *       or TLS listener.</p>
 *          <p>If the certificate in already in the certificate list, the call is successful but the
 *       certificate is not added again.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS
 *         listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS
 *         listeners</a> in the <i>Network Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, AddListenerCertificatesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, AddListenerCertificatesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // AddListenerCertificatesInput
 *   ListenerArn: "STRING_VALUE", // required
 *   Certificates: [ // CertificateList // required
 *     { // Certificate
 *       CertificateArn: "STRING_VALUE",
 *       IsDefault: true || false,
 *     },
 *   ],
 * };
 * const command = new AddListenerCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // AddListenerCertificatesOutput
 * //   Certificates: [ // CertificateList
 * //     { // Certificate
 * //       CertificateArn: "STRING_VALUE",
 * //       IsDefault: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddListenerCertificatesCommandInput - {@link AddListenerCertificatesCommandInput}
 * @returns {@link AddListenerCertificatesCommandOutput}
 * @see {@link AddListenerCertificatesCommandInput} for command's `input` shape.
 * @see {@link AddListenerCertificatesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link CertificateNotFoundException} (client fault)
 *  <p>The specified certificate does not exist.</p>
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The specified listener does not exist.</p>
 *
 * @throws {@link TooManyCertificatesException} (client fault)
 *  <p>You've reached the limit on the number of certificates per load balancer.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 */
export class AddListenerCertificatesCommand extends $Command<
  AddListenerCertificatesCommandInput,
  AddListenerCertificatesCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: AddListenerCertificatesCommandInput) {
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
  ): Handler<AddListenerCertificatesCommandInput, AddListenerCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddListenerCertificatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "AddListenerCertificatesCommand";
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
  private serialize(input: AddListenerCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddListenerCertificatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddListenerCertificatesCommandOutput> {
    return de_AddListenerCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
