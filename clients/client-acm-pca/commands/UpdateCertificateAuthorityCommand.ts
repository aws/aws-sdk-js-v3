import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { UpdateCertificateAuthorityRequest } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateCertificateAuthorityCommand,
  serializeAws_json1_1UpdateCertificateAuthorityCommand,
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

export type UpdateCertificateAuthorityCommandInput = UpdateCertificateAuthorityRequest;
export type UpdateCertificateAuthorityCommandOutput = __MetadataBearer;

/**
 * <p>Updates the status or configuration of a private certificate authority (CA). Your
 * 			private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you
 * 			can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or
 * 			make a CA that is in the <code>DISABLED</code> state active again.</p>
 * 		       <note>
 *                         <p>Both PCA and the IAM principal must have permission to write to
 *                         the S3 bucket that you specify. If the IAM principal making the call
 *                         does not have permission to write to the bucket, then an exception is
 *                         thrown. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaAuthAccess.html">Configure
 *                         Access to ACM Private CA</a>.</p>
 *                 </note>
 */
export class UpdateCertificateAuthorityCommand extends $Command<
  UpdateCertificateAuthorityCommandInput,
  UpdateCertificateAuthorityCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateCertificateAuthorityCommandInput) {
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
  ): Handler<UpdateCertificateAuthorityCommandInput, UpdateCertificateAuthorityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "UpdateCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCertificateAuthorityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCertificateAuthorityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateCertificateAuthorityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCertificateAuthorityCommandOutput> {
    return deserializeAws_json1_1UpdateCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
