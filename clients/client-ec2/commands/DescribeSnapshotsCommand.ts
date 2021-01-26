import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSnapshotsRequest, DescribeSnapshotsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeSnapshotsCommand,
  serializeAws_ec2DescribeSnapshotsCommand,
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

export type DescribeSnapshotsCommandInput = DescribeSnapshotsRequest;
export type DescribeSnapshotsCommandOutput = DescribeSnapshotsResult & __MetadataBearer;

/**
 * <p>Describes the specified EBS snapshots available to you or all of the EBS snapshots
 *       available to you.</p>
 *          <p>The snapshots available to you include public snapshots, private snapshots that you own,
 *       and private snapshots owned by other AWS accounts for which you have explicit create volume
 *       permissions.</p>
 *          <p>The create volume permissions fall into the following categories:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>public</i>: The owner of the snapshot granted create volume
 *           permissions for the snapshot to the <code>all</code> group. All AWS accounts have create
 *           volume permissions for these snapshots.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>explicit</i>: The owner of the snapshot granted create volume
 *           permissions to a specific AWS account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>implicit</i>: An AWS account has implicit create volume permissions
 *           for all snapshots it owns.</p>
 *             </li>
 *          </ul>
 *          <p>The list of snapshots returned can be filtered by specifying snapshot IDs, snapshot
 *       owners, or AWS accounts with create volume permissions. If no options are specified, Amazon
 *       EC2 returns all snapshots for which you have create volume permissions.</p>
 *          <p>If you specify one or more snapshot IDs, only snapshots that have the specified IDs are
 *       returned. If you specify an invalid snapshot ID, an error is returned. If you specify a
 *       snapshot ID for which you do not have access, it is not included in the returned
 *       results.</p>
 *          <p>If you specify one or more snapshot owners using the <code>OwnerIds</code> option, only
 *       snapshots from the specified owners and for which you have access are returned. The results
 *       can include the AWS account IDs of the specified owners, <code>amazon</code> for snapshots
 *       owned by Amazon, or <code>self</code> for snapshots that you own.</p>
 *          <p>If you specify a list of restorable users, only snapshots with create snapshot permissions
 *       for those users are returned. You can specify AWS account IDs (if you own the snapshots),
 *         <code>self</code> for snapshots for which you own or have explicit permissions, or
 *         <code>all</code> for public snapshots.</p>
 *          <p>If you are describing a long list of snapshots, we recommend that you paginate the output to make the
 *       list more manageable. The <code>MaxResults</code> parameter sets the maximum number of results
 *       returned in a single page. If the list of results exceeds your <code>MaxResults</code> value,
 *       then that number of results is returned along with a <code>NextToken</code> value that can be
 *       passed to a subsequent <code>DescribeSnapshots</code> request to retrieve the remaining
 *       results.</p>
 *          <p>To get the state of fast snapshot restores for a snapshot, use <a>DescribeFastSnapshotRestores</a>.</p>
 *          <p>For more information about EBS snapshots, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html">Amazon EBS snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class DescribeSnapshotsCommand extends $Command<
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSnapshotsCommandInput) {
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
  ): Handler<DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSnapshotsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSnapshotsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeSnapshotsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSnapshotsCommandOutput> {
    return deserializeAws_ec2DescribeSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
