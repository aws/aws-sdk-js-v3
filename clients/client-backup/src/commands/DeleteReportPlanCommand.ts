// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteReportPlanInput } from "../models/models_0";
import { de_DeleteReportPlanCommand, se_DeleteReportPlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReportPlanCommand}.
 */
export interface DeleteReportPlanCommandInput extends DeleteReportPlanInput {}
/**
 * @public
 *
 * The output of {@link DeleteReportPlanCommand}.
 */
export interface DeleteReportPlanCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the report plan specified by a report plan name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteReportPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteReportPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // DeleteReportPlanInput
 *   ReportPlanName: "STRING_VALUE", // required
 * };
 * const command = new DeleteReportPlanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReportPlanCommandInput - {@link DeleteReportPlanCommandInput}
 * @returns {@link DeleteReportPlanCommandOutput}
 * @see {@link DeleteReportPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteReportPlanCommandOutput} for command's `response` shape.
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
export class DeleteReportPlanCommand extends $Command
  .classBuilder<
    DeleteReportPlanCommandInput,
    DeleteReportPlanCommandOutput,
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
  .s("CryoControllerUserManager", "DeleteReportPlan", {})
  .n("BackupClient", "DeleteReportPlanCommand")
  .f(void 0, void 0)
  .ser(se_DeleteReportPlanCommand)
  .de(de_DeleteReportPlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReportPlanInput;
      output: {};
    };
    sdk: {
      input: DeleteReportPlanCommandInput;
      output: DeleteReportPlanCommandOutput;
    };
  };
}
