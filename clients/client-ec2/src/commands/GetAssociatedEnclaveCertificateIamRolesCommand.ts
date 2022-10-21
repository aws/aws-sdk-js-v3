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
  GetAssociatedEnclaveCertificateIamRolesRequest,
  GetAssociatedEnclaveCertificateIamRolesRequestFilterSensitiveLog,
  GetAssociatedEnclaveCertificateIamRolesResult,
  GetAssociatedEnclaveCertificateIamRolesResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2GetAssociatedEnclaveCertificateIamRolesCommand,
  serializeAws_ec2GetAssociatedEnclaveCertificateIamRolesCommand,
} from "../protocols/Aws_ec2";

export interface GetAssociatedEnclaveCertificateIamRolesCommandInput
  extends GetAssociatedEnclaveCertificateIamRolesRequest {}
export interface GetAssociatedEnclaveCertificateIamRolesCommandOutput
  extends GetAssociatedEnclaveCertificateIamRolesResult,
    __MetadataBearer {}

/**
 * <p>Returns the IAM roles that are associated with the specified ACM (ACM) certificate.
 * 			It also returns the name of the Amazon S3 bucket and the Amazon S3 object key where the certificate,
 * 			certificate chain, and encrypted private key bundle are stored, and the ARN of the KMS key
 * 			that's used to encrypt the private key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetAssociatedEnclaveCertificateIamRolesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetAssociatedEnclaveCertificateIamRolesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetAssociatedEnclaveCertificateIamRolesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssociatedEnclaveCertificateIamRolesCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedEnclaveCertificateIamRolesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class GetAssociatedEnclaveCertificateIamRolesCommand extends $Command<
  GetAssociatedEnclaveCertificateIamRolesCommandInput,
  GetAssociatedEnclaveCertificateIamRolesCommandOutput,
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

  constructor(readonly input: GetAssociatedEnclaveCertificateIamRolesCommandInput) {
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
  ): Handler<
    GetAssociatedEnclaveCertificateIamRolesCommandInput,
    GetAssociatedEnclaveCertificateIamRolesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetAssociatedEnclaveCertificateIamRolesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetAssociatedEnclaveCertificateIamRolesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAssociatedEnclaveCertificateIamRolesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAssociatedEnclaveCertificateIamRolesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetAssociatedEnclaveCertificateIamRolesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetAssociatedEnclaveCertificateIamRolesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAssociatedEnclaveCertificateIamRolesCommandOutput> {
    return deserializeAws_ec2GetAssociatedEnclaveCertificateIamRolesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
