// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeReportPlanInput, DescribeReportPlanOutput } from "../models/models_0";
import { DescribeReportPlan } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReportPlanCommand}.
 */
export interface DescribeReportPlanCommandInput extends DescribeReportPlanInput {}
/**
 * @public
 *
 * The output of {@link DescribeReportPlanCommand}.
 */
export interface DescribeReportPlanCommandOutput extends DescribeReportPlanOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all report plans for an Amazon Web Services account and Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeReportPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeReportPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DescribeReportPlanInput
 *   ReportPlanName: "STRING_VALUE", // required
 * };
 * const command = new DescribeReportPlanCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReportPlanOutput
 * //   ReportPlan: { // ReportPlan
 * //     ReportPlanArn: "STRING_VALUE",
 * //     ReportPlanName: "STRING_VALUE",
 * //     ReportPlanDescription: "STRING_VALUE",
 * //     ReportSetting: { // ReportSetting
 * //       ReportTemplate: "STRING_VALUE", // required
 * //       FrameworkArns: [ // stringList
 * //         "STRING_VALUE",
 * //       ],
 * //       NumberOfFrameworks: Number("int"),
 * //       Accounts: [
 * //         "STRING_VALUE",
 * //       ],
 * //       OrganizationUnits: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Regions: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ReportDeliveryChannel: { // ReportDeliveryChannel
 * //       S3BucketName: "STRING_VALUE", // required
 * //       S3KeyPrefix: "STRING_VALUE",
 * //       Formats: [ // FormatList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     DeploymentStatus: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastAttemptedExecutionTime: new Date("TIMESTAMP"),
 * //     LastSuccessfulExecutionTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeReportPlanCommandInput - {@link DescribeReportPlanCommandInput}
 * @returns {@link DescribeReportPlanCommandOutput}
 * @see {@link DescribeReportPlanCommandInput} for command's `input` shape.
 * @see {@link DescribeReportPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 *
 * @public
 */
export class DescribeReportPlanCommand extends $Command
  .classBuilder<
    DescribeReportPlanCommandInput,
    DescribeReportPlanCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "DescribeReportPlan", {})
  .n("BackupClient", "DescribeReportPlanCommand")
  .sc(DescribeReportPlan)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReportPlanInput;
      output: DescribeReportPlanOutput;
    };
    sdk: {
      input: DescribeReportPlanCommandInput;
      output: DescribeReportPlanCommandOutput;
    };
  };
}
