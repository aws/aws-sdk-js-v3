import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { RequestCertificateRequest, RequestCertificateResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RequestCertificateCommand,
  serializeAws_json1_1RequestCertificateCommand,
} from "../protocols/Aws_json1_1";
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

export type RequestCertificateCommandInput = RequestCertificateRequest;
export type RequestCertificateCommandOutput = RequestCertificateResponse & __MetadataBearer;

/**
 * <p>Requests an ACM certificate for use with other AWS services. To request an ACM
 *       certificate, you must specify a fully qualified domain name (FQDN) in the
 *         <code>DomainName</code> parameter. You can also specify additional FQDNs in the
 *         <code>SubjectAlternativeNames</code> parameter. </p>
 *
 *          <p>If you are requesting a private certificate, domain validation is not required. If you are
 *       requesting a public certificate, each domain name that you specify must be validated to verify
 *       that you own or control the domain. You can use <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">email validation</a>.
 *       We recommend that you use DNS validation. ACM issues public certificates after receiving
 *       approval from the domain owner. </p>
 */
export class RequestCertificateCommand extends $Command<
  RequestCertificateCommandInput,
  RequestCertificateCommandOutput,
  ACMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "RequestCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RequestCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RequestCertificateResponse.filterSensitiveLog,
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
