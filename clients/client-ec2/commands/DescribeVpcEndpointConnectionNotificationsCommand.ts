import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeVpcEndpointConnectionNotificationsRequest,
  DescribeVpcEndpointConnectionNotificationsResult,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeVpcEndpointConnectionNotificationsCommand,
  serializeAws_ec2DescribeVpcEndpointConnectionNotificationsCommand,
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

export type DescribeVpcEndpointConnectionNotificationsCommandInput = DescribeVpcEndpointConnectionNotificationsRequest;
export type DescribeVpcEndpointConnectionNotificationsCommandOutput = DescribeVpcEndpointConnectionNotificationsResult &
  __MetadataBearer;

/**
 * <p>Describes the connection notifications for VPC endpoints and VPC endpoint
 *             services.</p>
 */
export class DescribeVpcEndpointConnectionNotificationsCommand extends $Command<
  DescribeVpcEndpointConnectionNotificationsCommandInput,
  DescribeVpcEndpointConnectionNotificationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVpcEndpointConnectionNotificationsCommandInput) {
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
  ): Handler<
    DescribeVpcEndpointConnectionNotificationsCommandInput,
    DescribeVpcEndpointConnectionNotificationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcEndpointConnectionNotificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcEndpointConnectionNotificationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcEndpointConnectionNotificationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeVpcEndpointConnectionNotificationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeVpcEndpointConnectionNotificationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcEndpointConnectionNotificationsCommandOutput> {
    return deserializeAws_ec2DescribeVpcEndpointConnectionNotificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
