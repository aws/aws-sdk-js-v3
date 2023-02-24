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

import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import {
  RequestCertificateRequest,
  RequestCertificateRequestFilterSensitiveLog,
  RequestCertificateResponse,
  RequestCertificateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RequestCertificateCommand,
  serializeAws_json1_1RequestCertificateCommand,
} from "../protocols/Aws_json1_1";

export interface RequestCertificateCommandInput extends RequestCertificateRequest {}
export interface RequestCertificateCommandOutput extends RequestCertificateResponse, __MetadataBearer {}

/**
 * <p>Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM
 *       certificate, you must specify a fully qualified domain name (FQDN) in the
 *         <code>DomainName</code> parameter. You can also specify additional FQDNs in the
 *         <code>SubjectAlternativeNames</code> parameter. </p>
 *          <p>If you are requesting a private certificate, domain validation is not required. If you are
 *       requesting a public certificate, each domain name that you specify must be validated to verify
 *       that you own or control the domain. You can use <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">email validation</a>.
 *       We recommend that you use DNS validation. ACM issues public certificates after receiving
 *       approval from the domain owner. </p>
 *          <note>
 *             <p>ACM behavior differs from the <a href="https://datatracker.ietf.org/doc/html/rfc6125#appendix-B.2">RFC 6125</a>
 *         specification of the certificate validation process. ACM first checks for a Subject
 *         Alternative Name, and, if it finds one, ignores the common name (CN).</p>
 *          </note>
 *          <p>After successful completion of the <code>RequestCertificate</code> action, there is a
 *       delay of several seconds before you can retrieve information about the new certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, RequestCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, RequestCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new RequestCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RequestCertificateCommandInput} for command's `input` shape.
 * @see {@link RequestCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 */
export class RequestCertificateCommand extends $Command<
  RequestCertificateCommandInput,
  RequestCertificateCommandOutput,
  ACMClientResolvedConfig
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

  constructor(readonly input: RequestCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RequestCertificateCommandInput, RequestCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RequestCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "RequestCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RequestCertificateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RequestCertificateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RequestCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RequestCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RequestCertificateCommandOutput> {
    return deserializeAws_json1_1RequestCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
