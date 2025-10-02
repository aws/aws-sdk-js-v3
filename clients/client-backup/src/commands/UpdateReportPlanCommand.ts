// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateReportPlanInput, UpdateReportPlanOutput } from "../models/models_0";
import { de_UpdateReportPlanCommand, se_UpdateReportPlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateReportPlanCommand}.
 */
export interface UpdateReportPlanCommandInput extends UpdateReportPlanInput {}
/**
 * @public
 *
 * The output of {@link UpdateReportPlanCommand}.
 */
export interface UpdateReportPlanCommandOutput extends UpdateReportPlanOutput, __MetadataBearer {}

/**
 * <p>Updates the specified report plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateReportPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateReportPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // UpdateReportPlanInput
 *   ReportPlanName: "STRING_VALUE", // required
 *   ReportPlanDescription: "STRING_VALUE",
 *   ReportDeliveryChannel: { // ReportDeliveryChannel
 *     S3BucketName: "STRING_VALUE", // required
 *     S3KeyPrefix: "STRING_VALUE",
 *     Formats: [ // FormatList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ReportSetting: { // ReportSetting
 *     ReportTemplate: "STRING_VALUE", // required
 *     FrameworkArns: [ // stringList
 *       "STRING_VALUE",
 *     ],
 *     NumberOfFrameworks: Number("int"),
 *     Accounts: [
 *       "STRING_VALUE",
 *     ],
 *     OrganizationUnits: [
 *       "STRING_VALUE",
 *     ],
 *     Regions: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new UpdateReportPlanCommand(input);
 * const response = await client.send(command);
 * // { // UpdateReportPlanOutput
 * //   ReportPlanName: "STRING_VALUE",
 * //   ReportPlanArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateReportPlanCommandInput - {@link UpdateReportPlanCommandInput}
 * @returns {@link UpdateReportPlanCommandOutput}
 * @see {@link UpdateReportPlanCommandInput} for command's `input` shape.
 * @see {@link UpdateReportPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
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
export class UpdateReportPlanCommand extends $Command
  .classBuilder<
    UpdateReportPlanCommandInput,
    UpdateReportPlanCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "UpdateReportPlan", {})
  .n("BackupClient", "UpdateReportPlanCommand")
  .f(void 0, void 0)
  .ser(se_UpdateReportPlanCommand)
  .de(de_UpdateReportPlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateReportPlanInput;
      output: UpdateReportPlanOutput;
    };
    sdk: {
      input: UpdateReportPlanCommandInput;
      output: UpdateReportPlanCommandOutput;
    };
  };
}
