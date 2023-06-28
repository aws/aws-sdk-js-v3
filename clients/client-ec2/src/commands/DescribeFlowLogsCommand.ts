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
import { DescribeFlowLogsRequest, DescribeFlowLogsResult } from "../models/models_3";
import { de_DescribeFlowLogsCommand, se_DescribeFlowLogsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFlowLogsCommand}.
 */
export interface DescribeFlowLogsCommandInput extends DescribeFlowLogsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFlowLogsCommand}.
 */
export interface DescribeFlowLogsCommandOutput extends DescribeFlowLogsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more flow logs.</p>
 *          <p>To view the published flow log records, you must view the log destination. For example,
 *             the CloudWatch Logs log group, the Amazon S3 bucket, or the Kinesis Data Firehose delivery stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFlowLogsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFlowLogsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeFlowLogsRequest
 *   DryRun: true || false,
 *   Filter: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   FlowLogIds: [ // FlowLogIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFlowLogsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFlowLogsResult
 * //   FlowLogs: [ // FlowLogSet
 * //     { // FlowLog
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       DeliverLogsErrorMessage: "STRING_VALUE",
 * //       DeliverLogsPermissionArn: "STRING_VALUE",
 * //       DeliverCrossAccountRole: "STRING_VALUE",
 * //       DeliverLogsStatus: "STRING_VALUE",
 * //       FlowLogId: "STRING_VALUE",
 * //       FlowLogStatus: "STRING_VALUE",
 * //       LogGroupName: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       TrafficType: "ACCEPT" || "REJECT" || "ALL",
 * //       LogDestinationType: "cloud-watch-logs" || "s3" || "kinesis-data-firehose",
 * //       LogDestination: "STRING_VALUE",
 * //       LogFormat: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       MaxAggregationInterval: Number("int"),
 * //       DestinationOptions: { // DestinationOptionsResponse
 * //         FileFormat: "plain-text" || "parquet",
 * //         HiveCompatiblePartitions: true || false,
 * //         PerHourPartition: true || false,
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFlowLogsCommandInput - {@link DescribeFlowLogsCommandInput}
 * @returns {@link DescribeFlowLogsCommandOutput}
 * @see {@link DescribeFlowLogsCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowLogsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeFlowLogsCommand extends $Command<
  DescribeFlowLogsCommandInput,
  DescribeFlowLogsCommandOutput,
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
  constructor(readonly input: DescribeFlowLogsCommandInput) {
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
  ): Handler<DescribeFlowLogsCommandInput, DescribeFlowLogsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFlowLogsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeFlowLogsCommand";
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
  private serialize(input: DescribeFlowLogsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFlowLogsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFlowLogsCommandOutput> {
    return de_DescribeFlowLogsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
