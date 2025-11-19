// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceSqlHaStatesRequest, DescribeInstanceSqlHaStatesResult } from "../models/models_3";
import { DescribeInstanceSqlHaStates } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceSqlHaStatesCommand}.
 */
export interface DescribeInstanceSqlHaStatesCommandInput extends DescribeInstanceSqlHaStatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceSqlHaStatesCommand}.
 */
export interface DescribeInstanceSqlHaStatesCommandOutput extends DescribeInstanceSqlHaStatesResult, __MetadataBearer {}

/**
 * <p>Describes the SQL Server High Availability states for Amazon EC2 instances that are
 *       enabled for Amazon EC2 High Availability for SQL Server monitoring.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceSqlHaStatesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceSqlHaStatesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeInstanceSqlHaStatesRequest
 *   InstanceIds: [ // InstanceIdStringList
 *     "STRING_VALUE",
 *   ],
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
 * const command = new DescribeInstanceSqlHaStatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceSqlHaStatesResult
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
 * @param DescribeInstanceSqlHaStatesCommandInput - {@link DescribeInstanceSqlHaStatesCommandInput}
 * @returns {@link DescribeInstanceSqlHaStatesCommandOutput}
 * @see {@link DescribeInstanceSqlHaStatesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceSqlHaStatesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeInstanceSqlHaStatesCommand extends $Command
  .classBuilder<
    DescribeInstanceSqlHaStatesCommandInput,
    DescribeInstanceSqlHaStatesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeInstanceSqlHaStates", {})
  .n("EC2Client", "DescribeInstanceSqlHaStatesCommand")
  .sc(DescribeInstanceSqlHaStates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceSqlHaStatesRequest;
      output: DescribeInstanceSqlHaStatesResult;
    };
    sdk: {
      input: DescribeInstanceSqlHaStatesCommandInput;
      output: DescribeInstanceSqlHaStatesCommandOutput;
    };
  };
}
