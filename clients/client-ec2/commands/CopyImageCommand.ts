import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CopyImageRequest, CopyImageResult } from "../models/models_0";
import { deserializeAws_ec2CopyImageCommand, serializeAws_ec2CopyImageCommand } from "../protocols/Aws_ec2";
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

export type CopyImageCommandInput = CopyImageRequest;
export type CopyImageCommandOutput = CopyImageResult & __MetadataBearer;

/**
 * <p>Initiates the copy of an AMI from the specified source Region to the current Region. You specify the destination Region by using its endpoint when making the request.</p>
 *          <p>Copies of encrypted backing snapshots for the AMI are encrypted. Copies of unencrypted backing snapshots
 *        remain unencrypted, unless you set <code>Encrypted</code> during the copy operation. You cannot create an unencrypted
 *        copy of an encrypted backing snapshot.</p>
 *          <p>For more information about the prerequisites and limits when copying an AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html">Copying an AMI</a>
 *         in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class CopyImageCommand extends $Command<CopyImageCommandInput, CopyImageCommandOutput, EC2ClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CopyImageCommandInput) {
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
  ): Handler<CopyImageCommandInput, CopyImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CopyImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CopyImageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopyImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CopyImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyImageCommandOutput> {
    return deserializeAws_ec2CopyImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
