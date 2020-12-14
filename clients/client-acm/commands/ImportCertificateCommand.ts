import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { ImportCertificateRequest, ImportCertificateResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ImportCertificateCommand,
  serializeAws_json1_1ImportCertificateCommand,
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

export type ImportCertificateCommandInput = ImportCertificateRequest;
export type ImportCertificateCommandOutput = ImportCertificateResponse & __MetadataBearer;

/**
 * <p>Imports a certificate into AWS Certificate Manager (ACM) to use with services that are integrated with
 *       ACM. Note that <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html">integrated
 *         services</a> allow only certificate types and keys they support to be associated with
 *       their resources. Further, their support differs depending on whether the certificate is
 *       imported into IAM or into ACM. For more information, see the documentation for each
 *       service. For more information about importing certificates into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing
 *         Certificates</a> in the <i>AWS Certificate Manager User Guide</i>. </p>
 *
 *          <note>
 *             <p>ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for certificates that you import.</p>
 *          </note>
 *
 *          <p>Note the following guidelines when importing third party certificates:</p>
 *
 *
 *          <ul>
 *             <li>
 *                <p>You must enter the private key that matches the certificate you are importing.</p>
 *             </li>
 *             <li>
 *                <p>The private key must be unencrypted. You cannot import a private key that is protected
 *           by a password or a passphrase.</p>
 *             </li>
 *             <li>
 *                <p>If the certificate you are importing is not self-signed, you must enter its
 *           certificate chain.</p>
 *             </li>
 *             <li>
 *                <p>If a certificate chain is included, the issuer must be the subject of one of the
 *           certificates in the chain.</p>
 *             </li>
 *             <li>
 *                <p>The certificate, private key, and certificate chain must be PEM-encoded.</p>
 *             </li>
 *             <li>
 *                <p>The current time must be between the <code>Not Before</code> and <code>Not
 *             After</code> certificate fields.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Issuer</code> field must not be empty.</p>
 *             </li>
 *             <li>
 *                <p>The OCSP authority URL, if present, must not exceed 1000 characters.</p>
 *             </li>
 *             <li>
 *                <p>To import a new certificate, omit the <code>CertificateArn</code> argument. Include
 *           this argument only when you want to replace a previously imported certifica</p>
 *             </li>
 *             <li>
 *                <p>When you import a certificate by using the CLI, you must specify the certificate, the
 *           certificate chain, and the private key by their file names preceded by
 *             <code>file://</code>. For example, you can specify a certificate saved in the
 *             <code>C:\temp</code> folder as <code>file://C:\temp\certificate_to_import.pem</code>. If
 *           you are making an HTTP or HTTPS Query request, include these arguments as BLOBs. </p>
 *             </li>
 *             <li>
 *                <p>When you import a certificate by using an SDK, you must specify the certificate, the
 *           certificate chain, and the private key files in the manner required by the programming
 *           language you're using. </p>
 *             </li>
 *             <li>
 *                <p>The cryptographic algorithm of an imported certificate must match the algorithm of the
 *           signing CA. For example, if the signing CA key type is RSA, then the certificate key type
 *           must also be RSA.</p>
 *             </li>
 *          </ul>
 *
 *          <p>This operation returns the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
 *         Resource Name (ARN)</a> of the imported certificate.</p>
 */
export class ImportCertificateCommand extends $Command<
  ImportCertificateCommandInput,
  ImportCertificateCommandOutput,
  ACMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportCertificateCommandInput) {
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
  ): Handler<ImportCertificateCommandInput, ImportCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "ImportCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportCertificateCommandOutput> {
    return deserializeAws_json1_1ImportCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
