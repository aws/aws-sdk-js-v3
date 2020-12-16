import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { DeleteCertificateAuthorityRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteCertificateAuthorityCommand,
  serializeAws_json1_1DeleteCertificateAuthorityCommand,
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

export type DeleteCertificateAuthorityCommandInput = DeleteCertificateAuthorityRequest;
export type DeleteCertificateAuthorityCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a private certificate authority (CA). You must provide the Amazon Resource
 * 			Name (ARN) of the private CA that you want to delete. You can find the ARN by calling
 * 			the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. </p>
 * 		       <note>
 * 			         <p>Deleting a CA will invalidate other CAs and certificates below it in your CA
 * 				hierarchy.</p>
 * 		       </note>
 * 		       <p>Before you can delete a CA that you have created and activated, you must disable it.
 * 			To do this, call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action and set the <b>CertificateAuthorityStatus</b> parameter to <code>DISABLED</code>. </p>
 * 		       <p>Additionally, you can delete a CA if you are waiting for it to be created (that is,
 * 			the status of the CA is <code>CREATING</code>). You can also delete it if the CA has
 * 			been created but you haven't yet imported the signed certificate into ACM Private CA (that is,
 * 			the status of the CA is <code>PENDING_CERTIFICATE</code>). </p>
 * 		       <p>When you successfully call <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a>, the CA's status changes to
 * 			<code>DELETED</code>. However, the CA won't be permanently deleted until the restoration
 * 			period has passed. By default, if you do not set the
 * 				<code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30
 * 			days. You can set the parameter from 7 to 30 days. The <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> action returns the time remaining in the
 * 			restoration window of a private CA in the <code>DELETED</code> state. To restore an
 * 			eligible CA, call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RestoreCertificateAuthority.html">RestoreCertificateAuthority</a> action.</p>
 */
export class DeleteCertificateAuthorityCommand extends $Command<
  DeleteCertificateAuthorityCommandInput,
  DeleteCertificateAuthorityCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCertificateAuthorityCommandInput) {
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
  ): Handler<DeleteCertificateAuthorityCommandInput, DeleteCertificateAuthorityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "DeleteCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCertificateAuthorityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCertificateAuthorityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCertificateAuthorityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteCertificateAuthorityCommandOutput> {
    return deserializeAws_json1_1DeleteCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
