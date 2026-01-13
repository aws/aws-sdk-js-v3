// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  EnableInstanceSqlHaStandbyDetectionsRequest,
  EnableInstanceSqlHaStandbyDetectionsResult,
} from "../models/models_5";
import { EnableInstanceSqlHaStandbyDetections$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableInstanceSqlHaStandbyDetectionsCommand}.
 */
export interface EnableInstanceSqlHaStandbyDetectionsCommandInput extends EnableInstanceSqlHaStandbyDetectionsRequest {}
/**
 * @public
 *
 * The output of {@link EnableInstanceSqlHaStandbyDetectionsCommand}.
 */
export interface EnableInstanceSqlHaStandbyDetectionsCommandOutput extends EnableInstanceSqlHaStandbyDetectionsResult, __MetadataBearer {}

/**
 * <p>Enable Amazon EC2 instances running in an SQL Server High Availability cluster for SQL Server High Availability
 *       instance standby detection monitoring. Once enabled, Amazon Web Services monitors the metadata for
 *       the instances to determine whether they are active or standby nodes in the SQL Server High Availability cluster.
 *       If the instances are determined to be standby failover nodes, Amazon Web Services
 *       automatically applies SQL Server licensing fee waiver for those instances.</p>
 *          <p>To register an instance, it must be running a Windows SQL Server license-included
 *       AMI and have the Amazon Web Services Systems Manager agent installed and running. Only Windows Server 2019 and later
 *       and SQL Server (Standard and Enterprise editions) 2017 and later are supported. For more
 *       information, see <a href="https://docs.aws.amazon.com/sql-server-ec2/latest/userguide/prerequisites-and-requirements.html">
 *         Prerequisites for using SQL Server High Availability instance standby detection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableInstanceSqlHaStandbyDetectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableInstanceSqlHaStandbyDetectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // EnableInstanceSqlHaStandbyDetectionsRequest
 *   InstanceIds: [ // InstanceIdUpdateStringList // required
 *     "STRING_VALUE",
 *   ],
 *   SqlServerCredentials: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new EnableInstanceSqlHaStandbyDetectionsCommand(input);
 * const response = await client.send(command);
 * // { // EnableInstanceSqlHaStandbyDetectionsResult
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
 * // };
 *
 * ```
 *
 * @param EnableInstanceSqlHaStandbyDetectionsCommandInput - {@link EnableInstanceSqlHaStandbyDetectionsCommandInput}
 * @returns {@link EnableInstanceSqlHaStandbyDetectionsCommandOutput}
 * @see {@link EnableInstanceSqlHaStandbyDetectionsCommandInput} for command's `input` shape.
 * @see {@link EnableInstanceSqlHaStandbyDetectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class EnableInstanceSqlHaStandbyDetectionsCommand extends $Command
  .classBuilder<
    EnableInstanceSqlHaStandbyDetectionsCommandInput,
    EnableInstanceSqlHaStandbyDetectionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "EnableInstanceSqlHaStandbyDetections", {})
  .n("EC2Client", "EnableInstanceSqlHaStandbyDetectionsCommand")
  .sc(EnableInstanceSqlHaStandbyDetections$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableInstanceSqlHaStandbyDetectionsRequest;
      output: EnableInstanceSqlHaStandbyDetectionsResult;
    };
    sdk: {
      input: EnableInstanceSqlHaStandbyDetectionsCommandInput;
      output: EnableInstanceSqlHaStandbyDetectionsCommandOutput;
    };
  };
}
