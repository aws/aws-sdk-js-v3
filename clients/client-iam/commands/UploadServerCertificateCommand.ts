import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UploadServerCertificateRequest, UploadServerCertificateResponse } from "../models/models_1";
import {
  deserializeAws_queryUploadServerCertificateCommand,
  serializeAws_queryUploadServerCertificateCommand,
} from "../protocols/Aws_query";
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

export type UploadServerCertificateCommandInput = UploadServerCertificateRequest;
export type UploadServerCertificateCommandOutput = UploadServerCertificateResponse & __MetadataBearer;

/**
 * <p>Uploads a server certificate entity for the AWS account. The server certificate entity
 *          includes a public key certificate, a private key, and an optional certificate chain, which
 *          should all be PEM-encoded.</p>
 *          <p>We recommend that you use <a href="https://docs.aws.amazon.com/acm/">AWS Certificate
 *             Manager</a> to provision, manage, and deploy your server certificates. With ACM you
 *          can request a certificate, deploy it to AWS resources, and let ACM handle certificate
 *          renewals for you. Certificates provided by ACM are free. For more information about using
 *          ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate
 *             Manager User Guide</a>.</p>
 *          <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with
 *             Server Certificates</a> in the <i>IAM User Guide</i>. This topic
 *          includes a list of AWS services that can use the server certificates that you manage with
 *          IAM.</p>
 *          <p>For information about the number of server certificates you can upload, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html">Limitations on IAM
 *             Entities and Objects</a> in the <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>Because the body of the public key certificate, private key, and the certificate
 *             chain can be large, you should use POST rather than GET when calling
 *                <code>UploadServerCertificate</code>. For information about setting up signatures and
 *             authorization through the API, go to <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing AWS API Requests</a>
 *             in the <i>AWS General Reference</i>. For general information about using the
 *             Query API with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/programming.html">Calling the API by Making HTTP Query
 *                Requests</a> in the <i>IAM User Guide</i>.</p>
 *          </note>
 */
export class UploadServerCertificateCommand extends $Command<
  UploadServerCertificateCommandInput,
  UploadServerCertificateCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UploadServerCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UploadServerCertificateCommandInput, UploadServerCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UploadServerCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UploadServerCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UploadServerCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UploadServerCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUploadServerCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadServerCertificateCommandOutput> {
    return deserializeAws_queryUploadServerCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
