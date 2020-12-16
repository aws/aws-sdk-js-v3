import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  AssociateEnclaveCertificateIamRoleRequest,
  AssociateEnclaveCertificateIamRoleResult,
} from "../models/models_0";
import {
  deserializeAws_ec2AssociateEnclaveCertificateIamRoleCommand,
  serializeAws_ec2AssociateEnclaveCertificateIamRoleCommand,
} from "../protocols/Aws_ec2";
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

export type AssociateEnclaveCertificateIamRoleCommandInput = AssociateEnclaveCertificateIamRoleRequest;
export type AssociateEnclaveCertificateIamRoleCommandOutput = AssociateEnclaveCertificateIamRoleResult &
  __MetadataBearer;

/**
 * <p>Associates an AWS Identity and Access Management (IAM) role with an AWS Certificate Manager (ACM) certificate.
 * 			This enables the certificate to be used by the ACM for Nitro Enclaves application inside an enclave. For more
 * 			information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html">AWS Certificate
 * 				Manager for Nitro Enclaves</a> in the <i>AWS Nitro Enclaves User Guide</i>.</p>
 *
 * 		       <p>When the IAM role is associated with the ACM certificate, places the certificate, certificate chain, and encrypted
 * 			private key in an Amazon S3 bucket that only the associated IAM role can access. The private key of the certificate
 * 			is encrypted with an AWS-managed KMS customer master (CMK) that has an attached attestation-based CMK policy.</p>
 *
 * 		       <p>To enable the IAM role to access the Amazon S3 object, you must grant it permission to call <code>s3:GetObject</code>
 * 			on the Amazon S3 bucket returned by the command. To enable the IAM role to access the AWS KMS CMK, you must
 * 			grant it permission to call <code>kms:Decrypt</code> on AWS KMS CMK returned by the command. For more
 * 			information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html#add-policy">
 * 				Grant the role permission to access the certificate and encryption key</a> in the
 * 			<i>AWS Nitro Enclaves User Guide</i>.</p>
 */
export class AssociateEnclaveCertificateIamRoleCommand extends $Command<
  AssociateEnclaveCertificateIamRoleCommandInput,
  AssociateEnclaveCertificateIamRoleCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateEnclaveCertificateIamRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateEnclaveCertificateIamRoleCommandInput, AssociateEnclaveCertificateIamRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateEnclaveCertificateIamRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateEnclaveCertificateIamRoleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateEnclaveCertificateIamRoleResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateEnclaveCertificateIamRoleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2AssociateEnclaveCertificateIamRoleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateEnclaveCertificateIamRoleCommandOutput> {
    return deserializeAws_ec2AssociateEnclaveCertificateIamRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
