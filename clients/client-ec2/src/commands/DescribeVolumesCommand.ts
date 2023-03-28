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
import { DescribeVolumesRequest } from "../models/models_4";
import { DescribeVolumesResult } from "../models/models_5";
import { deserializeAws_ec2DescribeVolumesCommand, serializeAws_ec2DescribeVolumesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeVolumesCommand}.
 */
export interface DescribeVolumesCommandInput extends DescribeVolumesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVolumesCommand}.
 */
export interface DescribeVolumesCommandOutput extends DescribeVolumesResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified EBS volumes or all of your EBS volumes.</p>
 *          <p>If you are describing a long list of volumes, we recommend that you paginate the output to make the list
 *       more manageable. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
 *          <p>For more information about EBS volumes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html">Amazon EBS volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVolumesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVolumesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVolumesRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   VolumeIds: [ // VolumeIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeVolumesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeVolumesCommandInput - {@link DescribeVolumesCommandInput}
 * @returns {@link DescribeVolumesCommandOutput}
 * @see {@link DescribeVolumesCommandInput} for command's `input` shape.
 * @see {@link DescribeVolumesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To describe all volumes
 * ```javascript
 * // This example describes all of your volumes in the default region.
 * const input = {};
 * const command = new DescribeVolumesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NextToken": "",
 *   "Volumes": [
 *     {
 *       "Attachments": [
 *         {
 *           "AttachTime": "2013-12-18T22:35:00.000Z",
 *           "DeleteOnTermination": true,
 *           "Device": "/dev/sda1",
 *           "InstanceId": "i-1234567890abcdef0",
 *           "State": "attached",
 *           "VolumeId": "vol-049df61146c4d7901"
 *         }
 *       ],
 *       "AvailabilityZone": "us-east-1a",
 *       "CreateTime": "2013-12-18T22:35:00.084Z",
 *       "Size": 8,
 *       "SnapshotId": "snap-1234567890abcdef0",
 *       "State": "in-use",
 *       "VolumeId": "vol-049df61146c4d7901",
 *       "VolumeType": "standard"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-all-volumes-1472506358883
 * ```
 *
 * @example To describe volumes that are attached to a specific instance
 * ```javascript
 * // This example describes all volumes that are both attached to the instance with the ID i-1234567890abcdef0 and set to delete when the instance terminates.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "attachment.instance-id",
 *       "Values": [
 *         "i-1234567890abcdef0"
 *       ]
 *     },
 *     {
 *       "Name": "attachment.delete-on-termination",
 *       "Values": [
 *         "true"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeVolumesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Volumes": [
 *     {
 *       "Attachments": [
 *         {
 *           "AttachTime": "2013-12-18T22:35:00.000Z",
 *           "DeleteOnTermination": true,
 *           "Device": "/dev/sda1",
 *           "InstanceId": "i-1234567890abcdef0",
 *           "State": "attached",
 *           "VolumeId": "vol-049df61146c4d7901"
 *         }
 *       ],
 *       "AvailabilityZone": "us-east-1a",
 *       "CreateTime": "2013-12-18T22:35:00.084Z",
 *       "Size": 8,
 *       "SnapshotId": "snap-1234567890abcdef0",
 *       "State": "in-use",
 *       "VolumeId": "vol-049df61146c4d7901",
 *       "VolumeType": "standard"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-volumes-that-are-attached-to-a-specific-instance-1472506613578
 * ```
 *
 */
export class DescribeVolumesCommand extends $Command<
  DescribeVolumesCommandInput,
  DescribeVolumesCommandOutput,
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

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVolumesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVolumesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeVolumesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeVolumesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVolumesCommandOutput> {
    return deserializeAws_ec2DescribeVolumesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
