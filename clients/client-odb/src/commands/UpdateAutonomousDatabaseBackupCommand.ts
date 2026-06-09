// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAutonomousDatabaseBackupInput, UpdateAutonomousDatabaseBackupOutput } from "../models/models_0";
import type { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { UpdateAutonomousDatabaseBackup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAutonomousDatabaseBackupCommand}.
 */
export interface UpdateAutonomousDatabaseBackupCommandInput extends UpdateAutonomousDatabaseBackupInput {}
/**
 * @public
 *
 * The output of {@link UpdateAutonomousDatabaseBackupCommand}.
 */
export interface UpdateAutonomousDatabaseBackupCommandOutput extends UpdateAutonomousDatabaseBackupOutput, __MetadataBearer {}

/**
 * <p>Updates the properties of an Autonomous Database backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, UpdateAutonomousDatabaseBackupCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, UpdateAutonomousDatabaseBackupCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // UpdateAutonomousDatabaseBackupInput
 *   autonomousDatabaseBackupId: "STRING_VALUE", // required
 *   retentionPeriodInDays: Number("int"),
 * };
 * const command = new UpdateAutonomousDatabaseBackupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAutonomousDatabaseBackupOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   autonomousDatabaseBackupId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateAutonomousDatabaseBackupCommandInput - {@link UpdateAutonomousDatabaseBackupCommandInput}
 * @returns {@link UpdateAutonomousDatabaseBackupCommandOutput}
 * @see {@link UpdateAutonomousDatabaseBackupCommandInput} for command's `input` shape.
 * @see {@link UpdateAutonomousDatabaseBackupCommandOutput} for command's `response` shape.
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
export class UpdateAutonomousDatabaseBackupCommand extends $Command
  .classBuilder<
    UpdateAutonomousDatabaseBackupCommandInput,
    UpdateAutonomousDatabaseBackupCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "UpdateAutonomousDatabaseBackup", {})
  .n("OdbClient", "UpdateAutonomousDatabaseBackupCommand")
  .sc(UpdateAutonomousDatabaseBackup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAutonomousDatabaseBackupInput;
      output: UpdateAutonomousDatabaseBackupOutput;
    };
    sdk: {
      input: UpdateAutonomousDatabaseBackupCommandInput;
      output: UpdateAutonomousDatabaseBackupCommandOutput;
    };
  };
}
