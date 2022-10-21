// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeSnapshotsRequest,
  DescribeSnapshotsRequestFilterSensitiveLog,
  DescribeSnapshotsResult,
  DescribeSnapshotsResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeSnapshotsCommand,
  serializeAws_ec2DescribeSnapshotsCommand,
} from "../protocols/Aws_ec2";

export interface DescribeSnapshotsCommandInput extends DescribeSnapshotsRequest {}
export interface DescribeSnapshotsCommandOutput extends DescribeSnapshotsResult, __MetadataBearer {}

/**
 * <p>Describes the specified EBS snapshots available to you or all of the EBS snapshots
 *       available to you.</p>
 *          <p>The snapshots available to you include public snapshots, private snapshots that you own,
 *       and private snapshots owned by other Amazon Web Services accounts for which you have explicit create volume
 *       permissions.</p>
 *          <p>The create volume permissions fall into the following categories:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>public</i>: The owner of the snapshot granted create volume
 *           permissions for the snapshot to the <code>all</code> group. All Amazon Web Services accounts have create
 *           volume permissions for these snapshots.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>explicit</i>: The owner of the snapshot granted create volume
 *           permissions to a specific Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>implicit</i>: An Amazon Web Services account has implicit create volume permissions
 *           for all snapshots it owns.</p>
 *             </li>
 *          </ul>
 *          <p>The list of snapshots returned can be filtered by specifying snapshot IDs, snapshot
 *       owners, or Amazon Web Services accounts with create volume permissions. If no options are specified,
 *       Amazon EC2 returns all snapshots for which you have create volume permissions.</p>
 *          <p>If you specify one or more snapshot IDs, only snapshots that have the specified IDs are
 *       returned. If you specify an invalid snapshot ID, an error is returned. If you specify a
 *       snapshot ID for which you do not have access, it is not included in the returned
 *       results.</p>
 *          <p>If you specify one or more snapshot owners using the <code>OwnerIds</code> option, only
 *       snapshots from the specified owners and for which you have access are returned. The results
 *       can include the Amazon Web Services account IDs of the specified owners, <code>amazon</code> for snapshots
 *       owned by Amazon, or <code>self</code> for snapshots that you own.</p>
 *          <p>If you specify a list of restorable users, only snapshots with create snapshot permissions
 *       for those users are returned. You can specify Amazon Web Services account IDs (if you own the snapshots),
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSnapshotsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSnapshotsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeSnapshotsCommand extends $Command<
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSnapshotsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeSnapshotsResultFilterSensitiveLog,
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
