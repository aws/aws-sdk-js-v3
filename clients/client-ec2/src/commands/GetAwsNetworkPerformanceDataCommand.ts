// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAwsNetworkPerformanceDataRequest, GetAwsNetworkPerformanceDataResult } from "../models/models_5";
import { de_GetAwsNetworkPerformanceDataCommand, se_GetAwsNetworkPerformanceDataCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAwsNetworkPerformanceDataCommand}.
 */
export interface GetAwsNetworkPerformanceDataCommandInput extends GetAwsNetworkPerformanceDataRequest {}
/**
 * @public
 *
 * The output of {@link GetAwsNetworkPerformanceDataCommand}.
 */
export interface GetAwsNetworkPerformanceDataCommandOutput
  extends GetAwsNetworkPerformanceDataResult,
    __MetadataBearer {}

/**
 * <p>Gets network performance data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetAwsNetworkPerformanceDataCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetAwsNetworkPerformanceDataCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetAwsNetworkPerformanceDataRequest
 *   DataQueries: [ // DataQueries
 *     { // DataQuery
 *       Id: "STRING_VALUE",
 *       Source: "STRING_VALUE",
 *       Destination: "STRING_VALUE",
 *       Metric: "aggregate-latency",
 *       Statistic: "p50",
 *       Period: "five-minutes" || "fifteen-minutes" || "one-hour" || "three-hours" || "one-day" || "one-week",
 *     },
 *   ],
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetAwsNetworkPerformanceDataCommand(input);
 * const response = await client.send(command);
 * // { // GetAwsNetworkPerformanceDataResult
 * //   DataResponses: [ // DataResponses
 * //     { // DataResponse
 * //       Id: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       Destination: "STRING_VALUE",
 * //       Metric: "aggregate-latency",
 * //       Statistic: "p50",
 * //       Period: "five-minutes" || "fifteen-minutes" || "one-hour" || "three-hours" || "one-day" || "one-week",
 * //       MetricPoints: [ // MetricPoints
 * //         { // MetricPoint
 * //           StartDate: new Date("TIMESTAMP"),
 * //           EndDate: new Date("TIMESTAMP"),
 * //           Value: Number("float"),
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAwsNetworkPerformanceDataCommandInput - {@link GetAwsNetworkPerformanceDataCommandInput}
 * @returns {@link GetAwsNetworkPerformanceDataCommandOutput}
 * @see {@link GetAwsNetworkPerformanceDataCommandInput} for command's `input` shape.
 * @see {@link GetAwsNetworkPerformanceDataCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class GetAwsNetworkPerformanceDataCommand extends $Command
  .classBuilder<
    GetAwsNetworkPerformanceDataCommandInput,
    GetAwsNetworkPerformanceDataCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "GetAwsNetworkPerformanceData", {})
  .n("EC2Client", "GetAwsNetworkPerformanceDataCommand")
  .f(void 0, void 0)
  .ser(se_GetAwsNetworkPerformanceDataCommand)
  .de(de_GetAwsNetworkPerformanceDataCommand)
  .build() {}
