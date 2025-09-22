// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFrameworkInput } from "../models/models_0";
import { DeleteFramework } from "../schemas/schemas_26_Plan";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFrameworkCommand}.
 */
export interface DeleteFrameworkCommandInput extends DeleteFrameworkInput {}
/**
 * @public
 *
 * The output of {@link DeleteFrameworkCommand}.
 */
export interface DeleteFrameworkCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the framework specified by a framework name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteFrameworkCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteFrameworkCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DeleteFrameworkInput
 *   FrameworkName: "STRING_VALUE", // required
 * };
 * const command = new DeleteFrameworkCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFrameworkCommandInput - {@link DeleteFrameworkCommandInput}
 * @returns {@link DeleteFrameworkCommandOutput}
 * @see {@link DeleteFrameworkCommandInput} for command's `input` shape.
 * @see {@link DeleteFrameworkCommandOutput} for command's `response` shape.
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
export class DeleteFrameworkCommand extends $Command
  .classBuilder<
    DeleteFrameworkCommandInput,
    DeleteFrameworkCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "DeleteFramework", {})
  .n("BackupClient", "DeleteFrameworkCommand")
  .sc(DeleteFramework)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFrameworkInput;
      output: {};
    };
    sdk: {
      input: DeleteFrameworkCommandInput;
      output: DeleteFrameworkCommandOutput;
    };
  };
}
