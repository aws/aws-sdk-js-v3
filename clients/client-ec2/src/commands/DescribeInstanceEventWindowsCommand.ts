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
import { DescribeInstanceEventWindowsRequest, DescribeInstanceEventWindowsResult } from "../models/models_3";
import { de_DescribeInstanceEventWindowsCommand, se_DescribeInstanceEventWindowsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceEventWindowsCommand}.
 */
export interface DescribeInstanceEventWindowsCommandInput extends DescribeInstanceEventWindowsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceEventWindowsCommand}.
 */
export interface DescribeInstanceEventWindowsCommandOutput
  extends DescribeInstanceEventWindowsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified event windows or all event windows.</p>
 *          <p>If you specify event window IDs, the output includes information for only the specified
 *          event windows. If you specify filters, the output includes information for only those event
 *          windows that meet the filter criteria. If you do not specify event windows IDs or filters,
 *          the output includes information for all event windows, which can affect performance. We
 *          recommend that you use pagination to ensure that the operation returns quickly and
 *          successfully. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled
 *             events</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceEventWindowsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceEventWindowsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeInstanceEventWindowsRequest
 *   DryRun: true || false,
 *   InstanceEventWindowIds: [ // InstanceEventWindowIdSet
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
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeInstanceEventWindowsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceEventWindowsResult
 * //   InstanceEventWindows: [ // InstanceEventWindowSet
 * //     { // InstanceEventWindow
 * //       InstanceEventWindowId: "STRING_VALUE",
 * //       TimeRanges: [ // InstanceEventWindowTimeRangeList
 * //         { // InstanceEventWindowTimeRange
 * //           StartWeekDay: "sunday" || "monday" || "tuesday" || "wednesday" || "thursday" || "friday" || "saturday",
 * //           StartHour: Number("int"),
 * //           EndWeekDay: "sunday" || "monday" || "tuesday" || "wednesday" || "thursday" || "friday" || "saturday",
 * //           EndHour: Number("int"),
 * //         },
 * //       ],
 * //       Name: "STRING_VALUE",
 * //       CronExpression: "STRING_VALUE",
 * //       AssociationTarget: { // InstanceEventWindowAssociationTarget
 * //         InstanceIds: [ // InstanceIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         Tags: [ // TagList
 * //           { // Tag
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         DedicatedHostIds: [ // DedicatedHostIdList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       State: "creating" || "deleting" || "active" || "deleted",
 * //       Tags: [
 * //         {
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstanceEventWindowsCommandInput - {@link DescribeInstanceEventWindowsCommandInput}
 * @returns {@link DescribeInstanceEventWindowsCommandOutput}
 * @see {@link DescribeInstanceEventWindowsCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceEventWindowsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeInstanceEventWindowsCommand extends $Command<
  DescribeInstanceEventWindowsCommandInput,
  DescribeInstanceEventWindowsCommandOutput,
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
  constructor(readonly input: DescribeInstanceEventWindowsCommandInput) {
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
  ): Handler<DescribeInstanceEventWindowsCommandInput, DescribeInstanceEventWindowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstanceEventWindowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstanceEventWindowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeInstanceEventWindows",
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
  private serialize(input: DescribeInstanceEventWindowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInstanceEventWindowsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceEventWindowsCommandOutput> {
    return de_DescribeInstanceEventWindowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
