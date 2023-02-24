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
  DisassociateEnclaveCertificateIamRoleRequest,
  DisassociateEnclaveCertificateIamRoleRequestFilterSensitiveLog,
  DisassociateEnclaveCertificateIamRoleResult,
  DisassociateEnclaveCertificateIamRoleResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2DisassociateEnclaveCertificateIamRoleCommand,
  serializeAws_ec2DisassociateEnclaveCertificateIamRoleCommand,
} from "../protocols/Aws_ec2";

export interface DisassociateEnclaveCertificateIamRoleCommandInput
  extends DisassociateEnclaveCertificateIamRoleRequest {}
export interface DisassociateEnclaveCertificateIamRoleCommandOutput
  extends DisassociateEnclaveCertificateIamRoleResult,
    __MetadataBearer {}

/**
 * <p>Disassociates an IAM role from an Certificate Manager (ACM) certificate. Disassociating an IAM role
 * 			from an ACM certificate removes the Amazon S3 object that contains the certificate, certificate chain, and
 * 			encrypted private key from the Amazon S3 bucket. It also revokes the IAM role's permission to use the
 * 			KMS key used to encrypt the private key. This effectively revokes the role's permission
 * 			to use the certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateEnclaveCertificateIamRoleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateEnclaveCertificateIamRoleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateEnclaveCertificateIamRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateEnclaveCertificateIamRoleCommandInput} for command's `input` shape.
 * @see {@link DisassociateEnclaveCertificateIamRoleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DisassociateEnclaveCertificateIamRoleCommand extends $Command<
  DisassociateEnclaveCertificateIamRoleCommandInput,
  DisassociateEnclaveCertificateIamRoleCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateEnclaveCertificateIamRoleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateEnclaveCertificateIamRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateEnclaveCertificateIamRoleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateEnclaveCertificateIamRoleResultFilterSensitiveLog,
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
