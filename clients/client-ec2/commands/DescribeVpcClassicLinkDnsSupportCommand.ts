import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcClassicLinkDnsSupportRequest, DescribeVpcClassicLinkDnsSupportResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeVpcClassicLinkDnsSupportCommand,
  serializeAws_ec2DescribeVpcClassicLinkDnsSupportCommand,
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

export type DescribeVpcClassicLinkDnsSupportCommandInput = DescribeVpcClassicLinkDnsSupportRequest;
export type DescribeVpcClassicLinkDnsSupportCommandOutput = DescribeVpcClassicLinkDnsSupportResult & __MetadataBearer;

/**
 * <p>Describes the ClassicLink DNS support status of one or more VPCs. If enabled, the DNS
 *             hostname of a linked EC2-Classic instance resolves to its private IP address when
 *             addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname
 *             of an instance in a VPC resolves to its private IP address when addressed from a linked
 *             EC2-Classic instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class DescribeVpcClassicLinkDnsSupportCommand extends $Command<
  DescribeVpcClassicLinkDnsSupportCommandInput,
  DescribeVpcClassicLinkDnsSupportCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVpcClassicLinkDnsSupportCommandInput) {
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
  ): Handler<DescribeVpcClassicLinkDnsSupportCommandInput, DescribeVpcClassicLinkDnsSupportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcClassicLinkDnsSupportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcClassicLinkDnsSupportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcClassicLinkDnsSupportResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeVpcClassicLinkDnsSupportCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeVpcClassicLinkDnsSupportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcClassicLinkDnsSupportCommandOutput> {
    return deserializeAws_ec2DescribeVpcClassicLinkDnsSupportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
