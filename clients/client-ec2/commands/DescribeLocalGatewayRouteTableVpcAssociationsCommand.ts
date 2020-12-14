import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeLocalGatewayRouteTableVpcAssociationsRequest,
  DescribeLocalGatewayRouteTableVpcAssociationsResult,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeLocalGatewayRouteTableVpcAssociationsCommand,
  serializeAws_ec2DescribeLocalGatewayRouteTableVpcAssociationsCommand,
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

export type DescribeLocalGatewayRouteTableVpcAssociationsCommandInput = DescribeLocalGatewayRouteTableVpcAssociationsRequest;
export type DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput = DescribeLocalGatewayRouteTableVpcAssociationsResult &
  __MetadataBearer;

/**
 * <p>Describes the specified associations between VPCs and local gateway route tables.</p>
 */
export class DescribeLocalGatewayRouteTableVpcAssociationsCommand extends $Command<
  DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
  DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput) {
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
    DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
    DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeLocalGatewayRouteTableVpcAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLocalGatewayRouteTableVpcAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLocalGatewayRouteTableVpcAssociationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeLocalGatewayRouteTableVpcAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput> {
    return deserializeAws_ec2DescribeLocalGatewayRouteTableVpcAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
