import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DisassociateEnclaveCertificateIamRoleRequest,
  DisassociateEnclaveCertificateIamRoleResult,
} from "../models/models_3";
import {
  deserializeAws_ec2DisassociateEnclaveCertificateIamRoleCommand,
  serializeAws_ec2DisassociateEnclaveCertificateIamRoleCommand,
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

export type DisassociateEnclaveCertificateIamRoleCommandInput = DisassociateEnclaveCertificateIamRoleRequest;
export type DisassociateEnclaveCertificateIamRoleCommandOutput = DisassociateEnclaveCertificateIamRoleResult &
  __MetadataBearer;

/**
 * <p>Disassociates an IAM role from an AWS Certificate Manager (ACM) certificate. Disassociating an IAM role
 * 			from an ACM certificate removes the Amazon S3 object that contains the certificate, certificate chain, and
 * 			encrypted private key from the Amazon S3 bucket. It also revokes the IAM role's permission to use the
 * 			AWS Key Management Service (KMS) customer master key (CMK) used to encrypt the private key. This effectively revokes the role's
 * 			permission to use the certificate. </p>
 */
export class DisassociateEnclaveCertificateIamRoleCommand extends $Command<
  DisassociateEnclaveCertificateIamRoleCommandInput,
  DisassociateEnclaveCertificateIamRoleCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateEnclaveCertificateIamRoleCommandInput) {
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
  ): Handler<DisassociateEnclaveCertificateIamRoleCommandInput, DisassociateEnclaveCertificateIamRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateEnclaveCertificateIamRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateEnclaveCertificateIamRoleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateEnclaveCertificateIamRoleResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateEnclaveCertificateIamRoleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateEnclaveCertificateIamRoleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateEnclaveCertificateIamRoleCommandOutput> {
    return deserializeAws_ec2DisassociateEnclaveCertificateIamRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
