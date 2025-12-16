// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateTieringConfigurationInput, UpdateTieringConfigurationOutput } from "../models/models_0";
import { UpdateTieringConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTieringConfigurationCommand}.
 */
export interface UpdateTieringConfigurationCommandInput extends UpdateTieringConfigurationInput {}
/**
 * @public
 *
 * The output of {@link UpdateTieringConfigurationCommand}.
 */
export interface UpdateTieringConfigurationCommandOutput extends UpdateTieringConfigurationOutput, __MetadataBearer {}

/**
 * <p>This request will send changes to your specified tiering
 *          configuration. <code>TieringConfigurationName</code>
 *          cannot be updated after it is created.</p>
 *          <p>
 *             <code>ResourceSelection</code> can contain:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Resources</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TieringDownSettingsInDays</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ResourceType</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateTieringConfigurationCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateTieringConfigurationCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // UpdateTieringConfigurationInput
 *   TieringConfigurationName: "STRING_VALUE", // required
 *   TieringConfiguration: { // TieringConfigurationInputForUpdate
 *     ResourceSelection: [ // ResourceSelections // required
 *       { // ResourceSelection
 *         Resources: [ // ResourceArns // required
 *           "STRING_VALUE",
 *         ],
 *         TieringDownSettingsInDays: Number("int"), // required
 *         ResourceType: "STRING_VALUE", // required
 *       },
 *     ],
 *     BackupVaultName: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateTieringConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTieringConfigurationOutput
 * //   TieringConfigurationArn: "STRING_VALUE",
 * //   TieringConfigurationName: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateTieringConfigurationCommandInput - {@link UpdateTieringConfigurationCommandInput}
 * @returns {@link UpdateTieringConfigurationCommandOutput}
 * @see {@link UpdateTieringConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateTieringConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
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
export class UpdateTieringConfigurationCommand extends $Command
  .classBuilder<
    UpdateTieringConfigurationCommandInput,
    UpdateTieringConfigurationCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "UpdateTieringConfiguration", {})
  .n("BackupClient", "UpdateTieringConfigurationCommand")
  .sc(UpdateTieringConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTieringConfigurationInput;
      output: UpdateTieringConfigurationOutput;
    };
    sdk: {
      input: UpdateTieringConfigurationCommandInput;
      output: UpdateTieringConfigurationCommandOutput;
    };
  };
}
