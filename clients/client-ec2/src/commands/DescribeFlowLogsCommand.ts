// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFlowLogsRequest, DescribeFlowLogsResult } from "../models/models_4";
import { DescribeFlowLogs } from "../schemas/schemas_126_FlowLogs";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Describes one or more flow logs.</p>
 *          <p>To view the published flow log records, you must view the log destination. For example,
 *             the CloudWatch Logs log group, the Amazon S3 bucket, or the Kinesis Data Firehose delivery stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFlowLogsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFlowLogsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
 *
 * @public
 */
export class DescribeFlowLogsCommand extends $Command
  .classBuilder<
    DescribeFlowLogsCommandInput,
    DescribeFlowLogsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeFlowLogs", {})
  .n("EC2Client", "DescribeFlowLogsCommand")
  .sc(DescribeFlowLogs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFlowLogsRequest;
      output: DescribeFlowLogsResult;
    };
    sdk: {
      input: DescribeFlowLogsCommandInput;
      output: DescribeFlowLogsCommandOutput;
    };
  };
}
