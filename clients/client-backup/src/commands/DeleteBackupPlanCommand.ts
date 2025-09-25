// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBackupPlanInput, DeleteBackupPlanOutput } from "../models/models_0";
import { DeleteBackupPlan } from "../schemas/schemas_43_DeleteBackupPlan";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBackupPlanCommand}.
 */
export interface DeleteBackupPlanCommandInput extends DeleteBackupPlanInput {}
/**
 * @public
 *
 * The output of {@link DeleteBackupPlanCommand}.
 */
export interface DeleteBackupPlanCommandOutput extends DeleteBackupPlanOutput, __MetadataBearer {}

/**
 * <p>Deletes a backup plan. A backup plan can only be deleted after all associated selections
 *          of resources have been deleted. Deleting a backup plan deletes the current version of a
 *          backup plan. Previous versions, if any, will still exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DeleteBackupPlanInput
 *   BackupPlanId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBackupPlanCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBackupPlanOutput
 * //   BackupPlanId: "STRING_VALUE",
 * //   BackupPlanArn: "STRING_VALUE",
 * //   DeletionDate: new Date("TIMESTAMP"),
 * //   VersionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteBackupPlanCommandInput - {@link DeleteBackupPlanCommandInput}
 * @returns {@link DeleteBackupPlanCommandOutput}
 * @see {@link DeleteBackupPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
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
export class DeleteBackupPlanCommand extends $Command
  .classBuilder<
    DeleteBackupPlanCommandInput,
    DeleteBackupPlanCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "DeleteBackupPlan", {})
  .n("BackupClient", "DeleteBackupPlanCommand")
  .sc(DeleteBackupPlan)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBackupPlanInput;
      output: DeleteBackupPlanOutput;
    };
    sdk: {
      input: DeleteBackupPlanCommandInput;
      output: DeleteBackupPlanCommandOutput;
    };
  };
}
