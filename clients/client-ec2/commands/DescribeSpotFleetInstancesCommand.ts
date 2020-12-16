import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSpotFleetInstancesRequest, DescribeSpotFleetInstancesResponse } from "../models/models_3";
import {
  deserializeAws_ec2DescribeSpotFleetInstancesCommand,
  serializeAws_ec2DescribeSpotFleetInstancesCommand,
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

export type DescribeSpotFleetInstancesCommandInput = DescribeSpotFleetInstancesRequest;
export type DescribeSpotFleetInstancesCommandOutput = DescribeSpotFleetInstancesResponse & __MetadataBearer;

/**
 * <p>Describes the running instances for the specified Spot Fleet.</p>
 */
export class DescribeSpotFleetInstancesCommand extends $Command<
  DescribeSpotFleetInstancesCommandInput,
  DescribeSpotFleetInstancesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSpotFleetInstancesCommandInput) {
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
  ): Handler<DescribeSpotFleetInstancesCommandInput, DescribeSpotFleetInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSpotFleetInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSpotFleetInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSpotFleetInstancesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSpotFleetInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeSpotFleetInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSpotFleetInstancesCommandOutput> {
    return deserializeAws_ec2DescribeSpotFleetInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
