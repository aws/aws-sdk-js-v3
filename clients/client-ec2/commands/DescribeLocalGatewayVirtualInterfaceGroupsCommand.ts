import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeLocalGatewayVirtualInterfaceGroupsRequest,
  DescribeLocalGatewayVirtualInterfaceGroupsResult,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeLocalGatewayVirtualInterfaceGroupsCommand,
  serializeAws_ec2DescribeLocalGatewayVirtualInterfaceGroupsCommand,
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

export type DescribeLocalGatewayVirtualInterfaceGroupsCommandInput = DescribeLocalGatewayVirtualInterfaceGroupsRequest;
export type DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput = DescribeLocalGatewayVirtualInterfaceGroupsResult &
  __MetadataBearer;

/**
 * <p>Describes the specified local gateway virtual interface groups.</p>
 */
export class DescribeLocalGatewayVirtualInterfaceGroupsCommand extends $Command<
  DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
  DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput) {
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
    DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
    DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeLocalGatewayVirtualInterfaceGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLocalGatewayVirtualInterfaceGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLocalGatewayVirtualInterfaceGroupsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeLocalGatewayVirtualInterfaceGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput> {
    return deserializeAws_ec2DescribeLocalGatewayVirtualInterfaceGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
