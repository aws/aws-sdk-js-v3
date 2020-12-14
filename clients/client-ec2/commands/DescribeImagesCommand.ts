import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeImagesRequest, DescribeImagesResult } from "../models/models_2";
import { deserializeAws_ec2DescribeImagesCommand, serializeAws_ec2DescribeImagesCommand } from "../protocols/Aws_ec2";
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

export type DescribeImagesCommandInput = DescribeImagesRequest;
export type DescribeImagesCommandOutput = DescribeImagesResult & __MetadataBearer;

/**
 * <p>Describes the specified images (AMIs, AKIs, and ARIs) available to you or all of the images available to you.</p>
 *          <p>The images available to you include public images, private images that you own, and private images owned by other AWS accounts for which you have explicit launch permissions.</p>
 *          <p>Recently deregistered images appear in the returned results for a short interval and then return empty results.
 *         After all instances that reference a deregistered AMI are terminated, specifying the ID of the image results
 *         in an error indicating that the AMI ID cannot be found.</p>
 */
export class DescribeImagesCommand extends $Command<
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeImagesCommandInput) {
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
  ): Handler<DescribeImagesCommandInput, DescribeImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeImagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeImagesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeImagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeImagesCommandOutput> {
    return deserializeAws_ec2DescribeImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
