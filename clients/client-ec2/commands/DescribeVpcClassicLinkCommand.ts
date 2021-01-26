import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcClassicLinkRequest, DescribeVpcClassicLinkResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeVpcClassicLinkCommand,
  serializeAws_ec2DescribeVpcClassicLinkCommand,
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

export type DescribeVpcClassicLinkCommandInput = DescribeVpcClassicLinkRequest;
export type DescribeVpcClassicLinkCommandOutput = DescribeVpcClassicLinkResult & __MetadataBearer;

/**
 * <p>Describes the ClassicLink status of one or more VPCs.</p>
 */
export class DescribeVpcClassicLinkCommand extends $Command<
  DescribeVpcClassicLinkCommandInput,
  DescribeVpcClassicLinkCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVpcClassicLinkCommandInput) {
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
  ): Handler<DescribeVpcClassicLinkCommandInput, DescribeVpcClassicLinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcClassicLinkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcClassicLinkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcClassicLinkResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVpcClassicLinkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeVpcClassicLinkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVpcClassicLinkCommandOutput> {
    return deserializeAws_ec2DescribeVpcClassicLinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
