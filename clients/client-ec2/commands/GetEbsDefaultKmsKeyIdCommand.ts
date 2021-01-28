import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetEbsDefaultKmsKeyIdRequest, GetEbsDefaultKmsKeyIdResult } from "../models/models_4";
import {
  deserializeAws_ec2GetEbsDefaultKmsKeyIdCommand,
  serializeAws_ec2GetEbsDefaultKmsKeyIdCommand,
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

export type GetEbsDefaultKmsKeyIdCommandInput = GetEbsDefaultKmsKeyIdRequest;
export type GetEbsDefaultKmsKeyIdCommandOutput = GetEbsDefaultKmsKeyIdResult & __MetadataBearer;

/**
 * <p>Describes the default customer master key (CMK) for EBS encryption by default for your account in this Region.
 *       You can change the default CMK for encryption by default using <a>ModifyEbsDefaultKmsKeyId</a> or
 *       <a>ResetEbsDefaultKmsKeyId</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class GetEbsDefaultKmsKeyIdCommand extends $Command<
  GetEbsDefaultKmsKeyIdCommandInput,
  GetEbsDefaultKmsKeyIdCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEbsDefaultKmsKeyIdCommandInput) {
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
  ): Handler<GetEbsDefaultKmsKeyIdCommandInput, GetEbsDefaultKmsKeyIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetEbsDefaultKmsKeyIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEbsDefaultKmsKeyIdRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEbsDefaultKmsKeyIdResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEbsDefaultKmsKeyIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetEbsDefaultKmsKeyIdCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEbsDefaultKmsKeyIdCommandOutput> {
    return deserializeAws_ec2GetEbsDefaultKmsKeyIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
