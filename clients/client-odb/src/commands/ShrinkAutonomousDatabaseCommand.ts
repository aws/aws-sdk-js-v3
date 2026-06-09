// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ShrinkAutonomousDatabaseInput, ShrinkAutonomousDatabaseOutput } from "../models/models_0";
import type { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { ShrinkAutonomousDatabase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ShrinkAutonomousDatabaseCommand}.
 */
export interface ShrinkAutonomousDatabaseCommandInput extends ShrinkAutonomousDatabaseInput {}
/**
 * @public
 *
 * The output of {@link ShrinkAutonomousDatabaseCommand}.
 */
export interface ShrinkAutonomousDatabaseCommandOutput extends ShrinkAutonomousDatabaseOutput, __MetadataBearer {}

/**
 * <p>Shrinks the storage of the specified Autonomous Database to reclaim unused space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ShrinkAutonomousDatabaseCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ShrinkAutonomousDatabaseCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ShrinkAutonomousDatabaseInput
 *   autonomousDatabaseId: "STRING_VALUE", // required
 * };
 * const command = new ShrinkAutonomousDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // ShrinkAutonomousDatabaseOutput
 * //   autonomousDatabaseId: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS" || "STOPPING" || "STOPPED" || "STARTING" || "UNAVAILABLE" || "RESTORE_IN_PROGRESS" || "RESTORE_FAILED" || "BACKUP_IN_PROGRESS" || "SCALE_IN_PROGRESS" || "AVAILABLE_NEEDS_ATTENTION" || "RESTARTING" || "RECREATING" || "ROLE_CHANGE_IN_PROGRESS" || "UPGRADING" || "INACCESSIBLE" || "STANDBY",
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ShrinkAutonomousDatabaseCommandInput - {@link ShrinkAutonomousDatabaseCommandInput}
 * @returns {@link ShrinkAutonomousDatabaseCommandOutput}
 * @see {@link ShrinkAutonomousDatabaseCommandInput} for command's `input` shape.
 * @see {@link ShrinkAutonomousDatabaseCommandOutput} for command's `response` shape.
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
export class ShrinkAutonomousDatabaseCommand extends $Command
  .classBuilder<
    ShrinkAutonomousDatabaseCommandInput,
    ShrinkAutonomousDatabaseCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "ShrinkAutonomousDatabase", {})
  .n("OdbClient", "ShrinkAutonomousDatabaseCommand")
  .sc(ShrinkAutonomousDatabase$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ShrinkAutonomousDatabaseInput;
      output: ShrinkAutonomousDatabaseOutput;
    };
    sdk: {
      input: ShrinkAutonomousDatabaseCommandInput;
      output: ShrinkAutonomousDatabaseCommandOutput;
    };
  };
}
