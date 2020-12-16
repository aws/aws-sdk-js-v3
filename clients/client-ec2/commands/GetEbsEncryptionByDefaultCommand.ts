import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetEbsEncryptionByDefaultRequest, GetEbsEncryptionByDefaultResult } from "../models/models_4";
import {
  deserializeAws_ec2GetEbsEncryptionByDefaultCommand,
  serializeAws_ec2GetEbsEncryptionByDefaultCommand,
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

export type GetEbsEncryptionByDefaultCommandInput = GetEbsEncryptionByDefaultRequest;
export type GetEbsEncryptionByDefaultCommandOutput = GetEbsEncryptionByDefaultResult & __MetadataBearer;

/**
 * <p>Describes whether EBS encryption by default is enabled for your account in the current
 *       Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class GetEbsEncryptionByDefaultCommand extends $Command<
  GetEbsEncryptionByDefaultCommandInput,
  GetEbsEncryptionByDefaultCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEbsEncryptionByDefaultCommandInput) {
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
  ): Handler<GetEbsEncryptionByDefaultCommandInput, GetEbsEncryptionByDefaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetEbsEncryptionByDefaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEbsEncryptionByDefaultRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEbsEncryptionByDefaultResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEbsEncryptionByDefaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetEbsEncryptionByDefaultCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEbsEncryptionByDefaultCommandOutput> {
    return deserializeAws_ec2GetEbsEncryptionByDefaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
