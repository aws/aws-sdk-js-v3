import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeRouteTablesRequest, DescribeRouteTablesResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeRouteTablesCommand,
  serializeAws_ec2DescribeRouteTablesCommand,
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

export type DescribeRouteTablesCommandInput = DescribeRouteTablesRequest;
export type DescribeRouteTablesCommandOutput = DescribeRouteTablesResult & __MetadataBearer;

/**
 * <p>Describes one or more of your route tables.</p>
 *          <p>Each subnet in your VPC must be associated with a route table. If a subnet is not explicitly associated with any route table, it is implicitly associated with the main route table. This command does not return the subnet ID for implicit associations.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export class DescribeRouteTablesCommand extends $Command<
  DescribeRouteTablesCommandInput,
  DescribeRouteTablesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRouteTablesCommandInput) {
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
  ): Handler<DescribeRouteTablesCommandInput, DescribeRouteTablesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeRouteTablesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRouteTablesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRouteTablesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRouteTablesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeRouteTablesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRouteTablesCommandOutput> {
    return deserializeAws_ec2DescribeRouteTablesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
