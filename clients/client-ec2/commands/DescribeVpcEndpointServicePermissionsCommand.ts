import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeVpcEndpointServicePermissionsRequest,
  DescribeVpcEndpointServicePermissionsResult,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeVpcEndpointServicePermissionsCommand,
  serializeAws_ec2DescribeVpcEndpointServicePermissionsCommand,
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

export type DescribeVpcEndpointServicePermissionsCommandInput = DescribeVpcEndpointServicePermissionsRequest;
export type DescribeVpcEndpointServicePermissionsCommandOutput = DescribeVpcEndpointServicePermissionsResult &
  __MetadataBearer;

/**
 * <p>Describes the principals (service consumers) that are permitted to discover your VPC
 *             endpoint service.</p>
 */
export class DescribeVpcEndpointServicePermissionsCommand extends $Command<
  DescribeVpcEndpointServicePermissionsCommandInput,
  DescribeVpcEndpointServicePermissionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVpcEndpointServicePermissionsCommandInput) {
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
  ): Handler<DescribeVpcEndpointServicePermissionsCommandInput, DescribeVpcEndpointServicePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcEndpointServicePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcEndpointServicePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcEndpointServicePermissionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeVpcEndpointServicePermissionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeVpcEndpointServicePermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcEndpointServicePermissionsCommandOutput> {
    return deserializeAws_ec2DescribeVpcEndpointServicePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
