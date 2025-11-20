// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeInstanceSqlHaHistoryStatesRequest,
  DescribeInstanceSqlHaHistoryStatesResult,
} from "../models/models_4";
import { DescribeInstanceSqlHaHistoryStates } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceSqlHaHistoryStatesCommand}.
 */
export interface DescribeInstanceSqlHaHistoryStatesCommandInput extends DescribeInstanceSqlHaHistoryStatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceSqlHaHistoryStatesCommand}.
 */
export interface DescribeInstanceSqlHaHistoryStatesCommandOutput
  extends DescribeInstanceSqlHaHistoryStatesResult,
    __MetadataBearer {}

/**
 * <p>Describes the historical SQL Server High Availability states for Amazon EC2
 *       instances that are enabled for Amazon EC2 High Availability for SQL Server monitoring.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceSqlHaHistoryStatesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceSqlHaHistoryStatesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeInstanceSqlHaHistoryStatesRequest
 *   InstanceIds: [ // InstanceIdStringList
 *     "STRING_VALUE",
 *   ],
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeInstanceSqlHaHistoryStatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceSqlHaHistoryStatesResult
 * //   Instances: [ // RegisteredInstanceList
 * //     { // RegisteredInstance
 * //       InstanceId: "STRING_VALUE",
 * //       SqlServerLicenseUsage: "full" || "waived",
 * //       HaStatus: "processing" || "active" || "standby" || "invalid",
 * //       ProcessingStatus: "STRING_VALUE",
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       SqlServerCredentials: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
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
 * @param DescribeInstanceSqlHaHistoryStatesCommandInput - {@link DescribeInstanceSqlHaHistoryStatesCommandInput}
 * @returns {@link DescribeInstanceSqlHaHistoryStatesCommandOutput}
 * @see {@link DescribeInstanceSqlHaHistoryStatesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceSqlHaHistoryStatesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeInstanceSqlHaHistoryStatesCommand extends $Command
  .classBuilder<
    DescribeInstanceSqlHaHistoryStatesCommandInput,
    DescribeInstanceSqlHaHistoryStatesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeInstanceSqlHaHistoryStates", {})
  .n("EC2Client", "DescribeInstanceSqlHaHistoryStatesCommand")
  .sc(DescribeInstanceSqlHaHistoryStates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceSqlHaHistoryStatesRequest;
      output: DescribeInstanceSqlHaHistoryStatesResult;
    };
    sdk: {
      input: DescribeInstanceSqlHaHistoryStatesCommandInput;
      output: DescribeInstanceSqlHaHistoryStatesCommandOutput;
    };
  };
}
