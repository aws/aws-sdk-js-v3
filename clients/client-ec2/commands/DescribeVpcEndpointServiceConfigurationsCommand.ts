import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeVpcEndpointServiceConfigurationsRequest,
  DescribeVpcEndpointServiceConfigurationsResult,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeVpcEndpointServiceConfigurationsCommand,
  serializeAws_ec2DescribeVpcEndpointServiceConfigurationsCommand,
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

export type DescribeVpcEndpointServiceConfigurationsCommandInput = DescribeVpcEndpointServiceConfigurationsRequest;
export type DescribeVpcEndpointServiceConfigurationsCommandOutput = DescribeVpcEndpointServiceConfigurationsResult &
  __MetadataBearer;

/**
 * <p>Describes the VPC endpoint service configurations in your account (your services).</p>
 */
export class DescribeVpcEndpointServiceConfigurationsCommand extends $Command<
  DescribeVpcEndpointServiceConfigurationsCommandInput,
  DescribeVpcEndpointServiceConfigurationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVpcEndpointServiceConfigurationsCommandInput) {
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
    DescribeVpcEndpointServiceConfigurationsCommandInput,
    DescribeVpcEndpointServiceConfigurationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcEndpointServiceConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcEndpointServiceConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcEndpointServiceConfigurationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeVpcEndpointServiceConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeVpcEndpointServiceConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcEndpointServiceConfigurationsCommandOutput> {
    return deserializeAws_ec2DescribeVpcEndpointServiceConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
