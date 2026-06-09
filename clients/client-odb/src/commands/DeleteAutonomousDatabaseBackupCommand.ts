// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAutonomousDatabaseBackupInput, DeleteAutonomousDatabaseBackupOutput } from "../models/models_0";
import type { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { DeleteAutonomousDatabaseBackup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAutonomousDatabaseBackupCommand}.
 */
export interface DeleteAutonomousDatabaseBackupCommandInput extends DeleteAutonomousDatabaseBackupInput {}
/**
 * @public
 *
 * The output of {@link DeleteAutonomousDatabaseBackupCommand}.
 */
export interface DeleteAutonomousDatabaseBackupCommandOutput extends DeleteAutonomousDatabaseBackupOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified Autonomous Database backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, DeleteAutonomousDatabaseBackupCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, DeleteAutonomousDatabaseBackupCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // DeleteAutonomousDatabaseBackupInput
 *   autonomousDatabaseBackupId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAutonomousDatabaseBackupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAutonomousDatabaseBackupCommandInput - {@link DeleteAutonomousDatabaseBackupCommandInput}
 * @returns {@link DeleteAutonomousDatabaseBackupCommandOutput}
 * @see {@link DeleteAutonomousDatabaseBackupCommandInput} for command's `input` shape.
 * @see {@link DeleteAutonomousDatabaseBackupCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class DeleteAutonomousDatabaseBackupCommand extends $Command
  .classBuilder<
    DeleteAutonomousDatabaseBackupCommandInput,
    DeleteAutonomousDatabaseBackupCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "DeleteAutonomousDatabaseBackup", {})
  .n("OdbClient", "DeleteAutonomousDatabaseBackupCommand")
  .sc(DeleteAutonomousDatabaseBackup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAutonomousDatabaseBackupInput;
      output: {};
    };
    sdk: {
      input: DeleteAutonomousDatabaseBackupCommandInput;
      output: DeleteAutonomousDatabaseBackupCommandOutput;
    };
  };
}
