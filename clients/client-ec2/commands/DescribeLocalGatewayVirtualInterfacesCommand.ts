import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeLocalGatewayVirtualInterfacesRequest,
  DescribeLocalGatewayVirtualInterfacesResult,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeLocalGatewayVirtualInterfacesCommand,
  serializeAws_ec2DescribeLocalGatewayVirtualInterfacesCommand,
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

export type DescribeLocalGatewayVirtualInterfacesCommandInput = DescribeLocalGatewayVirtualInterfacesRequest;
export type DescribeLocalGatewayVirtualInterfacesCommandOutput = DescribeLocalGatewayVirtualInterfacesResult &
  __MetadataBearer;

/**
 * <p>Describes the specified local gateway virtual interfaces.</p>
 */
export class DescribeLocalGatewayVirtualInterfacesCommand extends $Command<
  DescribeLocalGatewayVirtualInterfacesCommandInput,
  DescribeLocalGatewayVirtualInterfacesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLocalGatewayVirtualInterfacesCommandInput) {
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
  ): Handler<DescribeLocalGatewayVirtualInterfacesCommandInput, DescribeLocalGatewayVirtualInterfacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeLocalGatewayVirtualInterfacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLocalGatewayVirtualInterfacesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLocalGatewayVirtualInterfacesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeLocalGatewayVirtualInterfacesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeLocalGatewayVirtualInterfacesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLocalGatewayVirtualInterfacesCommandOutput> {
    return deserializeAws_ec2DescribeLocalGatewayVirtualInterfacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
