import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeIpv6PoolsRequest, DescribeIpv6PoolsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeIpv6PoolsCommand,
  serializeAws_ec2DescribeIpv6PoolsCommand,
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

export type DescribeIpv6PoolsCommandInput = DescribeIpv6PoolsRequest;
export type DescribeIpv6PoolsCommandOutput = DescribeIpv6PoolsResult & __MetadataBearer;

/**
 * <p>Describes your IPv6 address pools.</p>
 */
export class DescribeIpv6PoolsCommand extends $Command<
  DescribeIpv6PoolsCommandInput,
  DescribeIpv6PoolsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeIpv6PoolsCommandInput) {
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
  ): Handler<DescribeIpv6PoolsCommandInput, DescribeIpv6PoolsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeIpv6PoolsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeIpv6PoolsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeIpv6PoolsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeIpv6PoolsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeIpv6PoolsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeIpv6PoolsCommandOutput> {
    return deserializeAws_ec2DescribeIpv6PoolsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
