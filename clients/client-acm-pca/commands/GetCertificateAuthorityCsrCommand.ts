import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { GetCertificateAuthorityCsrRequest, GetCertificateAuthorityCsrResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetCertificateAuthorityCsrCommand,
  serializeAws_json1_1GetCertificateAuthorityCsrCommand,
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

export type GetCertificateAuthorityCsrCommandInput = GetCertificateAuthorityCsrRequest;
export type GetCertificateAuthorityCsrCommandOutput = GetCertificateAuthorityCsrResponse & __MetadataBearer;

/**
 * <p>Retrieves the certificate signing request (CSR) for your private certificate authority
 * 			(CA). The CSR is created when you call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. Sign the CSR with your ACM Private CA-hosted or
 * 			on-premises root or subordinate CA. Then import the signed certificate back into ACM Private CA
 * 			by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action. The CSR is returned as a
 * 			base64 PEM-encoded string. </p>
 */
export class GetCertificateAuthorityCsrCommand extends $Command<
  GetCertificateAuthorityCsrCommandInput,
  GetCertificateAuthorityCsrCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCertificateAuthorityCsrCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCertificateAuthorityCsrCommandInput, GetCertificateAuthorityCsrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "GetCertificateAuthorityCsrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCertificateAuthorityCsrRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCertificateAuthorityCsrResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCertificateAuthorityCsrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCertificateAuthorityCsrCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCertificateAuthorityCsrCommandOutput> {
    return deserializeAws_json1_1GetCertificateAuthorityCsrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
