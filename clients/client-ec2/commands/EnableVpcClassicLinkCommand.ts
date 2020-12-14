import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { EnableVpcClassicLinkRequest, EnableVpcClassicLinkResult } from "../models/models_4";
import {
  deserializeAws_ec2EnableVpcClassicLinkCommand,
  serializeAws_ec2EnableVpcClassicLinkCommand,
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

export type EnableVpcClassicLinkCommandInput = EnableVpcClassicLinkRequest;
export type EnableVpcClassicLinkCommandOutput = EnableVpcClassicLinkResult & __MetadataBearer;

/**
 * <p>Enables a VPC for ClassicLink. You can then link EC2-Classic instances to your
 * 			ClassicLink-enabled VPC to allow communication over private IP addresses. You cannot
 * 			enable your VPC for ClassicLink if any of your VPC route tables have existing routes for
 * 			address ranges within the <code>10.0.0.0/8</code> IP address range, excluding local
 * 			routes for VPCs in the <code>10.0.0.0/16</code> and <code>10.1.0.0/16</code> IP address
 * 			ranges. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
 * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class EnableVpcClassicLinkCommand extends $Command<
  EnableVpcClassicLinkCommandInput,
  EnableVpcClassicLinkCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableVpcClassicLinkCommandInput) {
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
  ): Handler<EnableVpcClassicLinkCommandInput, EnableVpcClassicLinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableVpcClassicLinkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableVpcClassicLinkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableVpcClassicLinkResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableVpcClassicLinkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2EnableVpcClassicLinkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableVpcClassicLinkCommandOutput> {
    return deserializeAws_ec2EnableVpcClassicLinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
