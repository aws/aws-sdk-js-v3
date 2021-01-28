import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSpotInstanceRequestsRequest, DescribeSpotInstanceRequestsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeSpotInstanceRequestsCommand,
  serializeAws_ec2DescribeSpotInstanceRequestsCommand,
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

export type DescribeSpotInstanceRequestsCommandInput = DescribeSpotInstanceRequestsRequest;
export type DescribeSpotInstanceRequestsCommandOutput = DescribeSpotInstanceRequestsResult & __MetadataBearer;

/**
 * <p>Describes the specified Spot Instance requests.</p>
 *          <p>You can use <code>DescribeSpotInstanceRequests</code> to find a
 * 		running Spot Instance by examining the response. If the status of
 * 		the Spot Instance is <code>fulfilled</code>, the instance ID
 * 		appears in the response and contains the identifier of the instance.
 * 		Alternatively, you can use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances">DescribeInstances</a> with a filter to
 * 		look for instances where the instance lifecycle is <code>spot</code>.</p>
 *         <p>We recommend that you set <code>MaxResults</code> to a value between 5 and 1000 to
 *             limit the number of results returned. This paginates the output, which makes the list
 *             more manageable and returns the results faster. If the list of results exceeds your
 *                 <code>MaxResults</code> value, then that number of results is returned along with a
 *                 <code>NextToken</code> value that can be passed to a subsequent
 *                 <code>DescribeSpotInstanceRequests</code> request to retrieve the remaining
 *             results.</p>
 * 	        <p>Spot Instance requests are deleted four hours after they are canceled and their instances
 *             are terminated.</p>
 */
export class DescribeSpotInstanceRequestsCommand extends $Command<
  DescribeSpotInstanceRequestsCommandInput,
  DescribeSpotInstanceRequestsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSpotInstanceRequestsCommandInput) {
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
  ): Handler<DescribeSpotInstanceRequestsCommandInput, DescribeSpotInstanceRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSpotInstanceRequestsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSpotInstanceRequestsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSpotInstanceRequestsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSpotInstanceRequestsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeSpotInstanceRequestsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSpotInstanceRequestsCommandOutput> {
    return deserializeAws_ec2DescribeSpotInstanceRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
