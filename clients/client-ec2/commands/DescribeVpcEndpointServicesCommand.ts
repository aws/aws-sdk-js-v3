import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcEndpointServicesRequest, DescribeVpcEndpointServicesResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeVpcEndpointServicesCommand,
  serializeAws_ec2DescribeVpcEndpointServicesCommand,
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

export type DescribeVpcEndpointServicesCommandInput = DescribeVpcEndpointServicesRequest;
export type DescribeVpcEndpointServicesCommandOutput = DescribeVpcEndpointServicesResult & __MetadataBearer;

/**
 * <p>Describes available services to which you can create a VPC endpoint.</p>
 *         <p>When the service provider  and the consumer have different accounts  multiple
 *             Availability Zones, and the consumer views the VPC endpoint service information, the
 *             response only includes the common Availability Zones. For example, when the service
 *             provider account uses <code>us-east-1a</code> and <code>us-east-1c</code> and the
 *             consumer uses <code>us-east-1a</code> and us-east-1a and us-east-1b, the response
 *             includes the VPC endpoint services in the common Availability Zone,
 *                 <code>us-east-1a</code>.</p>
 */
export class DescribeVpcEndpointServicesCommand extends $Command<
  DescribeVpcEndpointServicesCommandInput,
  DescribeVpcEndpointServicesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVpcEndpointServicesCommandInput) {
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
  ): Handler<DescribeVpcEndpointServicesCommandInput, DescribeVpcEndpointServicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcEndpointServicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcEndpointServicesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcEndpointServicesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVpcEndpointServicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeVpcEndpointServicesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcEndpointServicesCommandOutput> {
    return deserializeAws_ec2DescribeVpcEndpointServicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
