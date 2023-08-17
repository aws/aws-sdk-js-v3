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
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVolumeStatusRequest, DescribeVolumeStatusResult } from "../models/models_5";
import { de_DescribeVolumeStatusCommand, se_DescribeVolumeStatusCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVolumeStatusCommand}.
 */
export interface DescribeVolumeStatusCommandInput extends DescribeVolumeStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVolumeStatusCommand}.
 */
export interface DescribeVolumeStatusCommandOutput extends DescribeVolumeStatusResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the status of the specified volumes. Volume status provides the result of the
 *       checks performed on your volumes to determine events that can impair the performance of your
 *       volumes. The performance of a volume can be affected if an issue occurs on the volume's
 *       underlying host. If the volume's underlying host experiences a power outage or system issue,
 *       after the system is restored, there could be data inconsistencies on the volume. Volume events
 *       notify you if this occurs. Volume actions notify you if any action needs to be taken in
 *       response to the event.</p>
 *          <p>The <code>DescribeVolumeStatus</code> operation provides the following information about
 *       the specified volumes:</p>
 *          <p>
 *             <i>Status</i>: Reflects the current status of the volume. The possible
 *       values are <code>ok</code>, <code>impaired</code> , <code>warning</code>, or
 *         <code>insufficient-data</code>. If all checks pass, the overall status of the volume is
 *         <code>ok</code>. If the check fails, the overall status is <code>impaired</code>. If the
 *       status is <code>insufficient-data</code>, then the checks might still be taking place on your
 *       volume at the time. We recommend that you retry the request. For more information about volume
 *       status, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-volume-status.html">Monitor the status of your volumes</a> in the
 *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>
 *             <i>Events</i>: Reflect the cause of a volume status and might require you to
 *       take action. For example, if your volume returns an <code>impaired</code> status, then the
 *       volume event might be <code>potential-data-inconsistency</code>. This means that your volume
 *       has been affected by an issue with the underlying host, has all I/O operations disabled, and
 *       might have inconsistent data.</p>
 *          <p>
 *             <i>Actions</i>: Reflect the actions you might have to take in response to an
 *       event. For example, if the status of the volume is <code>impaired</code> and the volume event
 *       shows <code>potential-data-inconsistency</code>, then the action shows
 *         <code>enable-volume-io</code>. This means that you may want to enable the I/O operations for
 *       the volume by calling the <a>EnableVolumeIO</a> action and then check the volume
 *       for data consistency.</p>
 *          <p>Volume status is based on the volume status checks, and does not reflect the volume state.
 *       Therefore, volume status does not indicate volumes in the <code>error</code> state (for
 *       example, when a volume is incapable of accepting I/O.)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVolumeStatusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVolumeStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVolumeStatusRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   VolumeIds: [ // VolumeIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeVolumeStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVolumeStatusResult
 * //   NextToken: "STRING_VALUE",
 * //   VolumeStatuses: [ // VolumeStatusList
 * //     { // VolumeStatusItem
 * //       Actions: [ // VolumeStatusActionsList
 * //         { // VolumeStatusAction
 * //           Code: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           EventId: "STRING_VALUE",
 * //           EventType: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AvailabilityZone: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //       Events: [ // VolumeStatusEventsList
 * //         { // VolumeStatusEvent
 * //           Description: "STRING_VALUE",
 * //           EventId: "STRING_VALUE",
 * //           EventType: "STRING_VALUE",
 * //           NotAfter: new Date("TIMESTAMP"),
 * //           NotBefore: new Date("TIMESTAMP"),
 * //           InstanceId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VolumeId: "STRING_VALUE",
 * //       VolumeStatus: { // VolumeStatusInfo
 * //         Details: [ // VolumeStatusDetailsList
 * //           { // VolumeStatusDetails
 * //             Name: "io-enabled" || "io-performance",
 * //             Status: "STRING_VALUE",
 * //           },
 * //         ],
 * //         Status: "ok" || "impaired" || "insufficient-data",
 * //       },
 * //       AttachmentStatuses: [ // VolumeStatusAttachmentStatusList
 * //         { // VolumeStatusAttachmentStatus
 * //           IoPerformance: "STRING_VALUE",
 * //           InstanceId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeVolumeStatusCommandInput - {@link DescribeVolumeStatusCommandInput}
 * @returns {@link DescribeVolumeStatusCommandOutput}
 * @see {@link DescribeVolumeStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeVolumeStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe the status of a single volume
 * ```javascript
 * // This example describes the status for the volume ``vol-1234567890abcdef0``.
 * const input = {
 *   "VolumeIds": [
 *     "vol-1234567890abcdef0"
 *   ]
 * };
 * const command = new DescribeVolumeStatusCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VolumeStatuses": [
 *     {
 *       "Actions": [],
 *       "AvailabilityZone": "us-east-1a",
 *       "Events": [],
 *       "VolumeId": "vol-1234567890abcdef0",
 *       "VolumeStatus": {
 *         "Details": [
 *           {
 *             "Name": "io-enabled",
 *             "Status": "passed"
 *           },
 *           {
 *             "Name": "io-performance",
 *             "Status": "not-applicable"
 *           }
 *         ],
 *         "Status": "ok"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-the-status-of-a-single-volume-1472507016193
 * ```
 *
 * @example To describe the status of impaired volumes
 * ```javascript
 * // This example describes the status for all volumes that are impaired. In this example output, there are no impaired volumes.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "volume-status.status",
 *       "Values": [
 *         "impaired"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeVolumeStatusCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VolumeStatuses": []
 * }
 * *\/
 * // example id: to-describe-the-status-of-impaired-volumes-1472507239821
 * ```
 *
 */
export class DescribeVolumeStatusCommand extends $Command<
  DescribeVolumeStatusCommandInput,
  DescribeVolumeStatusCommandOutput,
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
  constructor(readonly input: DescribeVolumeStatusCommandInput) {
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
  ): Handler<DescribeVolumeStatusCommandInput, DescribeVolumeStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVolumeStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVolumeStatusCommand";
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
  private serialize(input: DescribeVolumeStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeVolumeStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVolumeStatusCommandOutput> {
    return de_DescribeVolumeStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
