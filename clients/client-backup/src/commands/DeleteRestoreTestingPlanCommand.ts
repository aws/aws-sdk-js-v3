// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteRestoreTestingPlanInput } from "../models/models_0";
import { DeleteRestoreTestingPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRestoreTestingPlanCommand}.
 */
export interface DeleteRestoreTestingPlanCommandInput extends DeleteRestoreTestingPlanInput {}
/**
 * @public
 *
 * The output of {@link DeleteRestoreTestingPlanCommand}.
 */
export interface DeleteRestoreTestingPlanCommandOutput extends __MetadataBearer {}

/**
 * <p>This request deletes the specified restore testing plan.</p>
 *          <p>Deletion can only successfully occur if all associated
 *          restore testing selections are deleted first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteRestoreTestingPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteRestoreTestingPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DeleteRestoreTestingPlanInput
 *   RestoreTestingPlanName: "STRING_VALUE", // required
 * };
 * const command = new DeleteRestoreTestingPlanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRestoreTestingPlanCommandInput - {@link DeleteRestoreTestingPlanCommandInput}
 * @returns {@link DeleteRestoreTestingPlanCommandOutput}
 * @see {@link DeleteRestoreTestingPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteRestoreTestingPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
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
export class DeleteRestoreTestingPlanCommand extends $Command
  .classBuilder<
    DeleteRestoreTestingPlanCommandInput,
    DeleteRestoreTestingPlanCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "DeleteRestoreTestingPlan", {})
  .n("BackupClient", "DeleteRestoreTestingPlanCommand")
  .sc(DeleteRestoreTestingPlan$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRestoreTestingPlanInput;
      output: {};
    };
    sdk: {
      input: DeleteRestoreTestingPlanCommandInput;
      output: DeleteRestoreTestingPlanCommandOutput;
    };
  };
}
