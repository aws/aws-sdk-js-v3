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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  AssociateEnclaveCertificateIamRoleRequest,
  AssociateEnclaveCertificateIamRoleRequestFilterSensitiveLog,
  AssociateEnclaveCertificateIamRoleResult,
  AssociateEnclaveCertificateIamRoleResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AssociateEnclaveCertificateIamRoleCommand,
  serializeAws_ec2AssociateEnclaveCertificateIamRoleCommand,
} from "../protocols/Aws_ec2";

export interface AssociateEnclaveCertificateIamRoleCommandInput extends AssociateEnclaveCertificateIamRoleRequest {}
export interface AssociateEnclaveCertificateIamRoleCommandOutput
  extends AssociateEnclaveCertificateIamRoleResult,
    __MetadataBearer {}

/**
 * <p>Associates an Identity and Access Management (IAM) role with an Certificate Manager (ACM) certificate.
 * 			This enables the certificate to be used by the ACM for Nitro Enclaves application inside an enclave. For more
 * 			information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html">Certificate Manager for Nitro Enclaves</a> in the <i>Amazon Web Services Nitro Enclaves
 * 					User Guide</i>.</p>
 *          <p>When the IAM role is associated with the ACM certificate, the certificate, certificate chain, and encrypted
 * 			private key are placed in an Amazon S3 location that only the associated IAM role can access. The private key of the certificate
 * 			is encrypted with an Amazon Web Services managed key that has an attached attestation-based key policy.</p>
 *          <p>To enable the IAM role to access the Amazon S3 object, you must grant it permission to call <code>s3:GetObject</code>
 * 			on the Amazon S3 bucket returned by the command. To enable the IAM role to access the KMS key,
 * 			you must grant it permission to call <code>kms:Decrypt</code> on the KMS key returned by the command.
 * 			For more information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html#add-policy">
 * 				Grant the role permission to access the certificate and encryption key</a> in the
 * 			<i>Amazon Web Services Nitro Enclaves User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateEnclaveCertificateIamRoleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateEnclaveCertificateIamRoleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateEnclaveCertificateIamRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateEnclaveCertificateIamRoleCommandInput} for command's `input` shape.
 * @see {@link AssociateEnclaveCertificateIamRoleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AssociateEnclaveCertificateIamRoleCommand extends $Command<
  AssociateEnclaveCertificateIamRoleCommandInput,
  AssociateEnclaveCertificateIamRoleCommandOutput,
  EC2ClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateEnclaveCertificateIamRoleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateEnclaveCertificateIamRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateEnclaveCertificateIamRoleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateEnclaveCertificateIamRoleResultFilterSensitiveLog,
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
