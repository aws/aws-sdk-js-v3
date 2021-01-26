import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTransitGatewayRouteTablesRequest, DescribeTransitGatewayRouteTablesResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeTransitGatewayRouteTablesCommand,
  serializeAws_ec2DescribeTransitGatewayRouteTablesCommand,
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

export type DescribeTransitGatewayRouteTablesCommandInput = DescribeTransitGatewayRouteTablesRequest;
export type DescribeTransitGatewayRouteTablesCommandOutput = DescribeTransitGatewayRouteTablesResult & __MetadataBearer;

/**
 * <p>Describes one or more transit gateway route tables. By default, all transit gateway route tables are described.
 *          Alternatively, you can filter the results.</p>
 */
export class DescribeTransitGatewayRouteTablesCommand extends $Command<
  DescribeTransitGatewayRouteTablesCommandInput,
  DescribeTransitGatewayRouteTablesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTransitGatewayRouteTablesCommandInput) {
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
  ): Handler<DescribeTransitGatewayRouteTablesCommandInput, DescribeTransitGatewayRouteTablesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTransitGatewayRouteTablesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTransitGatewayRouteTablesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTransitGatewayRouteTablesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeTransitGatewayRouteTablesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeTransitGatewayRouteTablesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTransitGatewayRouteTablesCommandOutput> {
    return deserializeAws_ec2DescribeTransitGatewayRouteTablesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
