// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateReportPlanInput, CreateReportPlanOutput } from "../models/models_0";
import { CreateReportPlan } from "../schemas/schemas_18_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReportPlanCommand}.
 */
export interface CreateReportPlanCommandInput extends CreateReportPlanInput {}
/**
 * @public
 *
 * The output of {@link CreateReportPlanCommand}.
 */
export interface CreateReportPlanCommandOutput extends CreateReportPlanOutput, __MetadataBearer {}

/**
 * <p>Creates a report plan. A report plan is a document that contains information about the
 *          contents of the report and where Backup will deliver it.</p>
 *          <p>If you call <code>CreateReportPlan</code> with a plan that already exists, you receive
 *          an <code>AlreadyExistsException</code> exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateReportPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateReportPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // CreateReportPlanInput
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
 *   ReportPlanTags: { // stringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new CreateReportPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateReportPlanOutput
 * //   ReportPlanName: "STRING_VALUE",
 * //   ReportPlanArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateReportPlanCommandInput - {@link CreateReportPlanCommandInput}
 * @returns {@link CreateReportPlanCommandOutput}
 * @see {@link CreateReportPlanCommandInput} for command's `input` shape.
 * @see {@link CreateReportPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
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
export class CreateReportPlanCommand extends $Command
  .classBuilder<
    CreateReportPlanCommandInput,
    CreateReportPlanCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "CreateReportPlan", {})
  .n("BackupClient", "CreateReportPlanCommand")
  .sc(CreateReportPlan)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReportPlanInput;
      output: CreateReportPlanOutput;
    };
    sdk: {
      input: CreateReportPlanCommandInput;
      output: CreateReportPlanCommandOutput;
    };
  };
}
