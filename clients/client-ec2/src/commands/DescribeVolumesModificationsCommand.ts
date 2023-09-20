// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVolumesModificationsRequest, DescribeVolumesModificationsResult } from "../models/models_5";
import { de_DescribeVolumesModificationsCommand, se_DescribeVolumesModificationsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVolumesModificationsCommand}.
 */
export interface DescribeVolumesModificationsCommandInput extends DescribeVolumesModificationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVolumesModificationsCommand}.
 */
export interface DescribeVolumesModificationsCommandOutput
  extends DescribeVolumesModificationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the most recent volume modification request for the specified EBS volumes.</p>
 *          <p>If a volume has never been modified, some information in the output will be null.
 *       If a volume has been modified more than once, the output includes only the most
 *       recent modification request.</p>
 *          <p>You can also use CloudWatch Events to check the status of a modification to an EBS
 *       volume. For information about CloudWatch Events, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/">Amazon CloudWatch Events User Guide</a>. For more information, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-volume-modifications.html">Monitor the progress of volume modifications</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVolumesModificationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVolumesModificationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVolumesModificationsRequest
 *   DryRun: true || false,
 *   VolumeIds: [ // VolumeIdStringList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeVolumesModificationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVolumesModificationsResult
 * //   VolumesModifications: [ // VolumeModificationList
 * //     { // VolumeModification
 * //       VolumeId: "STRING_VALUE",
 * //       ModificationState: "modifying" || "optimizing" || "completed" || "failed",
 * //       StatusMessage: "STRING_VALUE",
 * //       TargetSize: Number("int"),
 * //       TargetIops: Number("int"),
 * //       TargetVolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 * //       TargetThroughput: Number("int"),
 * //       TargetMultiAttachEnabled: true || false,
 * //       OriginalSize: Number("int"),
 * //       OriginalIops: Number("int"),
 * //       OriginalVolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 * //       OriginalThroughput: Number("int"),
 * //       OriginalMultiAttachEnabled: true || false,
 * //       Progress: Number("long"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVolumesModificationsCommandInput - {@link DescribeVolumesModificationsCommandInput}
 * @returns {@link DescribeVolumesModificationsCommandOutput}
 * @see {@link DescribeVolumesModificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeVolumesModificationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeVolumesModificationsCommand extends $Command<
  DescribeVolumesModificationsCommandInput,
  DescribeVolumesModificationsCommandOutput,
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
  constructor(readonly input: DescribeVolumesModificationsCommandInput) {
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
  ): Handler<DescribeVolumesModificationsCommandInput, DescribeVolumesModificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVolumesModificationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVolumesModificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeVolumesModifications",
      },
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
  private serialize(input: DescribeVolumesModificationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeVolumesModificationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVolumesModificationsCommandOutput> {
    return de_DescribeVolumesModificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
