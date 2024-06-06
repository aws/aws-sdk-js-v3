// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListReportPlansInput, ListReportPlansOutput } from "../models/models_0";
import { de_ListReportPlansCommand, se_ListReportPlansCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReportPlansCommand}.
 */
export interface ListReportPlansCommandInput extends ListReportPlansInput {}
/**
 * @public
 *
 * The output of {@link ListReportPlansCommand}.
 */
export interface ListReportPlansCommandOutput extends ListReportPlansOutput, __MetadataBearer {}

/**
 * <p>Returns a list of your report plans. For detailed information about a single report
 *          plan, use <code>DescribeReportPlan</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListReportPlansCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListReportPlansCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListReportPlansInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListReportPlansCommand(input);
 * const response = await client.send(command);
 * // { // ListReportPlansOutput
 * //   ReportPlans: [ // ReportPlanList
 * //     { // ReportPlan
 * //       ReportPlanArn: "STRING_VALUE",
 * //       ReportPlanName: "STRING_VALUE",
 * //       ReportPlanDescription: "STRING_VALUE",
 * //       ReportSetting: { // ReportSetting
 * //         ReportTemplate: "STRING_VALUE", // required
 * //         FrameworkArns: [ // stringList
 * //           "STRING_VALUE",
 * //         ],
 * //         NumberOfFrameworks: Number("int"),
 * //         Accounts: [
 * //           "STRING_VALUE",
 * //         ],
 * //         OrganizationUnits: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Regions: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ReportDeliveryChannel: { // ReportDeliveryChannel
 * //         S3BucketName: "STRING_VALUE", // required
 * //         S3KeyPrefix: "STRING_VALUE",
 * //         Formats: [ // FormatList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       DeploymentStatus: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastAttemptedExecutionTime: new Date("TIMESTAMP"),
 * //       LastSuccessfulExecutionTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReportPlansCommandInput - {@link ListReportPlansCommandInput}
 * @returns {@link ListReportPlansCommandOutput}
 * @see {@link ListReportPlansCommandInput} for command's `input` shape.
 * @see {@link ListReportPlansCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 * @public
 */
export class ListReportPlansCommand extends $Command
  .classBuilder<
    ListReportPlansCommandInput,
    ListReportPlansCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "ListReportPlans", {})
  .n("BackupClient", "ListReportPlansCommand")
  .f(void 0, void 0)
  .ser(se_ListReportPlansCommand)
  .de(de_ListReportPlansCommand)
  .build() {}
