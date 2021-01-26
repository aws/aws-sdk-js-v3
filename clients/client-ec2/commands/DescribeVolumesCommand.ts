import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVolumesRequest, DescribeVolumesResult } from "../models/models_3";
import { deserializeAws_ec2DescribeVolumesCommand, serializeAws_ec2DescribeVolumesCommand } from "../protocols/Aws_ec2";
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

export type DescribeVolumesCommandInput = DescribeVolumesRequest;
export type DescribeVolumesCommandOutput = DescribeVolumesResult & __MetadataBearer;

/**
 * <p>Describes the specified EBS volumes or all of your EBS volumes.</p>
 *          <p>If you are describing a long list of volumes, we recommend that you paginate the output to make the list
 *       more manageable. The <code>MaxResults</code> parameter sets the maximum number of results
 *       returned in a single page. If the list of results exceeds your <code>MaxResults</code> value,
 *       then that number of results is returned along with a <code>NextToken</code> value that can be
 *       passed to a subsequent <code>DescribeVolumes</code> request to retrieve the remaining
 *       results.</p>
 *          <p>For more information about EBS volumes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html">Amazon EBS volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class DescribeVolumesCommand extends $Command<
  DescribeVolumesCommandInput,
  DescribeVolumesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVolumesCommandInput) {
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
  ): Handler<DescribeVolumesCommandInput, DescribeVolumesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVolumesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVolumesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVolumesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVolumesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeVolumesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVolumesCommandOutput> {
    return deserializeAws_ec2DescribeVolumesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
