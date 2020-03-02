import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EC2Client";
import {
  DescribeLocalGatewayRouteTablesRequest,
  DescribeLocalGatewayRouteTablesResult
} from "../models/index";
import {
  deserializeAws_ec2DescribeLocalGatewayRouteTablesCommand,
  serializeAws_ec2DescribeLocalGatewayRouteTablesCommand
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type DescribeLocalGatewayRouteTablesCommandInput = DescribeLocalGatewayRouteTablesRequest;
export type DescribeLocalGatewayRouteTablesCommandOutput = DescribeLocalGatewayRouteTablesResult &
  __MetadataBearer;

export class DescribeLocalGatewayRouteTablesCommand extends $Command<
  DescribeLocalGatewayRouteTablesCommandInput,
  DescribeLocalGatewayRouteTablesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLocalGatewayRouteTablesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeLocalGatewayRouteTablesCommandInput,
    DescribeLocalGatewayRouteTablesCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeLocalGatewayRouteTablesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeLocalGatewayRouteTablesCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLocalGatewayRouteTablesCommandOutput> {
    return deserializeAws_ec2DescribeLocalGatewayRouteTablesCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
