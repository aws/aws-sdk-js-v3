import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisableEbsEncryptionByDefaultRequest, DisableEbsEncryptionByDefaultResult } from "../models/models_3";
import {
  deserializeAws_ec2DisableEbsEncryptionByDefaultCommand,
  serializeAws_ec2DisableEbsEncryptionByDefaultCommand,
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

export type DisableEbsEncryptionByDefaultCommandInput = DisableEbsEncryptionByDefaultRequest;
export type DisableEbsEncryptionByDefaultCommandOutput = DisableEbsEncryptionByDefaultResult & __MetadataBearer;

/**
 * <p>Disables EBS encryption by default for your account in the current Region.</p>
 *          <p>After you disable encryption by default, you can still create encrypted volumes by
 *       enabling encryption when you create each volume.</p>
 *          <p>Disabling encryption by default does not change the encryption status of your
 *       existing volumes.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the
 *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class DisableEbsEncryptionByDefaultCommand extends $Command<
  DisableEbsEncryptionByDefaultCommandInput,
  DisableEbsEncryptionByDefaultCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableEbsEncryptionByDefaultCommandInput) {
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
  ): Handler<DisableEbsEncryptionByDefaultCommandInput, DisableEbsEncryptionByDefaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableEbsEncryptionByDefaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableEbsEncryptionByDefaultRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisableEbsEncryptionByDefaultResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableEbsEncryptionByDefaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DisableEbsEncryptionByDefaultCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableEbsEncryptionByDefaultCommandOutput> {
    return deserializeAws_ec2DisableEbsEncryptionByDefaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
