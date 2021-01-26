import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSpotFleetRequestsRequest, DescribeSpotFleetRequestsResponse } from "../models/models_3";
import {
  deserializeAws_ec2DescribeSpotFleetRequestsCommand,
  serializeAws_ec2DescribeSpotFleetRequestsCommand,
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

export type DescribeSpotFleetRequestsCommandInput = DescribeSpotFleetRequestsRequest;
export type DescribeSpotFleetRequestsCommandOutput = DescribeSpotFleetRequestsResponse & __MetadataBearer;

/**
 * <p>Describes your Spot Fleet requests.</p>
 *          <p>Spot Fleet requests are deleted 48 hours after they are canceled and their instances are terminated.</p>
 */
export class DescribeSpotFleetRequestsCommand extends $Command<
  DescribeSpotFleetRequestsCommandInput,
  DescribeSpotFleetRequestsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSpotFleetRequestsCommandInput) {
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
  ): Handler<DescribeSpotFleetRequestsCommandInput, DescribeSpotFleetRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSpotFleetRequestsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSpotFleetRequestsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSpotFleetRequestsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSpotFleetRequestsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeSpotFleetRequestsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSpotFleetRequestsCommandOutput> {
    return deserializeAws_ec2DescribeSpotFleetRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
