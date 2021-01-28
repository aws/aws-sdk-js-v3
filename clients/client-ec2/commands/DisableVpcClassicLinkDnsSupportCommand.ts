import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisableVpcClassicLinkDnsSupportRequest, DisableVpcClassicLinkDnsSupportResult } from "../models/models_3";
import {
  deserializeAws_ec2DisableVpcClassicLinkDnsSupportCommand,
  serializeAws_ec2DisableVpcClassicLinkDnsSupportCommand,
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

export type DisableVpcClassicLinkDnsSupportCommandInput = DisableVpcClassicLinkDnsSupportRequest;
export type DisableVpcClassicLinkDnsSupportCommandOutput = DisableVpcClassicLinkDnsSupportResult & __MetadataBearer;

/**
 * <p>Disables ClassicLink DNS support for a VPC. If disabled, DNS hostnames resolve to
 * 			public IP addresses when addressed between a linked EC2-Classic instance and instances
 * 			in the VPC to which it's linked. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
 * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>You must specify a VPC ID in the request.</p>
 */
export class DisableVpcClassicLinkDnsSupportCommand extends $Command<
  DisableVpcClassicLinkDnsSupportCommandInput,
  DisableVpcClassicLinkDnsSupportCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableVpcClassicLinkDnsSupportCommandInput) {
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
  ): Handler<DisableVpcClassicLinkDnsSupportCommandInput, DisableVpcClassicLinkDnsSupportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableVpcClassicLinkDnsSupportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableVpcClassicLinkDnsSupportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisableVpcClassicLinkDnsSupportResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisableVpcClassicLinkDnsSupportCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisableVpcClassicLinkDnsSupportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableVpcClassicLinkDnsSupportCommandOutput> {
    return deserializeAws_ec2DisableVpcClassicLinkDnsSupportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
