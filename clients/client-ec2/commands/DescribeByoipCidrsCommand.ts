import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeByoipCidrsRequest, DescribeByoipCidrsResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeByoipCidrsCommand,
  serializeAws_ec2DescribeByoipCidrsCommand,
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

export type DescribeByoipCidrsCommandInput = DescribeByoipCidrsRequest;
export type DescribeByoipCidrsCommandOutput = DescribeByoipCidrsResult & __MetadataBearer;

/**
 * <p>Describes the IP address ranges that were specified in calls to <a>ProvisionByoipCidr</a>.</p>
 *          <p>To describe the address pools that were created when you provisioned the address
 *           ranges, use <a>DescribePublicIpv4Pools</a> or <a>DescribeIpv6Pools</a>.</p>
 */
export class DescribeByoipCidrsCommand extends $Command<
  DescribeByoipCidrsCommandInput,
  DescribeByoipCidrsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeByoipCidrsCommandInput) {
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
  ): Handler<DescribeByoipCidrsCommandInput, DescribeByoipCidrsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeByoipCidrsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeByoipCidrsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeByoipCidrsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeByoipCidrsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeByoipCidrsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeByoipCidrsCommandOutput> {
    return deserializeAws_ec2DescribeByoipCidrsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
