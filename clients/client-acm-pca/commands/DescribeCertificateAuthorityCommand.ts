import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { DescribeCertificateAuthorityRequest, DescribeCertificateAuthorityResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCertificateAuthorityCommand,
  serializeAws_json1_1DescribeCertificateAuthorityCommand,
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

export type DescribeCertificateAuthorityCommandInput = DescribeCertificateAuthorityRequest;
export type DescribeCertificateAuthorityCommandOutput = DescribeCertificateAuthorityResponse & __MetadataBearer;

/**
 * <p>Lists information about your private certificate authority (CA) or one that has been
 * 			shared with you. You specify the private CA on input by its ARN (Amazon Resource Name).
 * 			The output contains the status of your CA. This can be any of the following: </p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>CREATING</code> - ACM Private CA is creating your private certificate
 * 					authority.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>PENDING_CERTIFICATE</code> - The certificate is pending. You must use
 * 					your ACM Private CA-hosted or on-premises root or subordinate CA to sign your private CA
 * 					CSR and then import it into PCA. </p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>ACTIVE</code> - Your private CA is active.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>DISABLED</code> - Your private CA has been disabled.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>EXPIRED</code> - Your private CA certificate has expired.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>FAILED</code> - Your private CA has failed. Your CA can fail because of
 * 					problems such a network outage or backend AWS failure or other errors. A
 * 					failed CA can never return to the pending state. You must create a new CA.
 * 				</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>DELETED</code> - Your private CA is within the restoration period, after
 * 					which it is permanently deleted. The length of time remaining in the CA's
 * 					restoration period is also included in this action's output.</p>
 * 			         </li>
 *          </ul>
 */
export class DescribeCertificateAuthorityCommand extends $Command<
  DescribeCertificateAuthorityCommandInput,
  DescribeCertificateAuthorityCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCertificateAuthorityCommandInput) {
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
  ): Handler<DescribeCertificateAuthorityCommandInput, DescribeCertificateAuthorityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "DescribeCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCertificateAuthorityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCertificateAuthorityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCertificateAuthorityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCertificateAuthorityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCertificateAuthorityCommandOutput> {
    return deserializeAws_json1_1DescribeCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
