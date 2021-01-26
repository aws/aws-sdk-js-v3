import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ExportTransitGatewayRoutesRequest, ExportTransitGatewayRoutesResult } from "../models/models_4";
import {
  deserializeAws_ec2ExportTransitGatewayRoutesCommand,
  serializeAws_ec2ExportTransitGatewayRoutesCommand,
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

export type ExportTransitGatewayRoutesCommandInput = ExportTransitGatewayRoutesRequest;
export type ExportTransitGatewayRoutesCommandOutput = ExportTransitGatewayRoutesResult & __MetadataBearer;

/**
 * <p>Exports routes from the specified transit gateway route table to the specified S3 bucket.
 *          By default, all routes are exported. Alternatively, you can filter by CIDR range.</p>
 *          <p>The routes are saved to the specified bucket in a JSON file. For more information, see
 *                 <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html#tgw-export-route-tables">Export Route Tables
 *                 to Amazon S3</a> in <i>Transit Gateways</i>.</p>
 */
export class ExportTransitGatewayRoutesCommand extends $Command<
  ExportTransitGatewayRoutesCommandInput,
  ExportTransitGatewayRoutesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExportTransitGatewayRoutesCommandInput) {
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
  ): Handler<ExportTransitGatewayRoutesCommandInput, ExportTransitGatewayRoutesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ExportTransitGatewayRoutesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportTransitGatewayRoutesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExportTransitGatewayRoutesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportTransitGatewayRoutesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ExportTransitGatewayRoutesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportTransitGatewayRoutesCommandOutput> {
    return deserializeAws_ec2ExportTransitGatewayRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
