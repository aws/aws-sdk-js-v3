import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyEbsDefaultKmsKeyIdRequest, ModifyEbsDefaultKmsKeyIdResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand,
  serializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand,
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

export type ModifyEbsDefaultKmsKeyIdCommandInput = ModifyEbsDefaultKmsKeyIdRequest;
export type ModifyEbsDefaultKmsKeyIdCommandOutput = ModifyEbsDefaultKmsKeyIdResult & __MetadataBearer;

/**
 * <p>Changes the default customer master key (CMK) for EBS encryption by default for your account in this Region.</p>
 *          <p>AWS creates a unique AWS managed CMK in each Region for use with encryption by default. If
 *       you change the default CMK to a symmetric customer managed CMK, it is used instead of the AWS
 *       managed CMK. To reset the default CMK to the AWS managed CMK for EBS, use <a>ResetEbsDefaultKmsKeyId</a>. Amazon EBS does not support asymmetric CMKs.</p>
 *          <p>If you delete or disable the customer managed CMK that you specified for use with
 *       encryption by default, your instances will fail to launch.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class ModifyEbsDefaultKmsKeyIdCommand extends $Command<
  ModifyEbsDefaultKmsKeyIdCommandInput,
  ModifyEbsDefaultKmsKeyIdCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyEbsDefaultKmsKeyIdCommandInput) {
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
  ): Handler<ModifyEbsDefaultKmsKeyIdCommandInput, ModifyEbsDefaultKmsKeyIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyEbsDefaultKmsKeyIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyEbsDefaultKmsKeyIdRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyEbsDefaultKmsKeyIdResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyEbsDefaultKmsKeyIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyEbsDefaultKmsKeyIdCommandOutput> {
    return deserializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
