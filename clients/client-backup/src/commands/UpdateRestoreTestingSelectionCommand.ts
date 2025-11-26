// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateRestoreTestingSelectionInput, UpdateRestoreTestingSelectionOutput } from "../models/models_0";
import { UpdateRestoreTestingSelection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRestoreTestingSelectionCommand}.
 */
export interface UpdateRestoreTestingSelectionCommandInput extends UpdateRestoreTestingSelectionInput {}
/**
 * @public
 *
 * The output of {@link UpdateRestoreTestingSelectionCommand}.
 */
export interface UpdateRestoreTestingSelectionCommandOutput
  extends UpdateRestoreTestingSelectionOutput,
    __MetadataBearer {}

/**
 * <p>Updates the specified restore testing selection.</p>
 *          <p>Most elements except the <code>RestoreTestingSelectionName</code>
 *          can be updated with this request.</p>
 *          <p>You can use either protected resource ARNs or conditions, but not both.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateRestoreTestingSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateRestoreTestingSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // UpdateRestoreTestingSelectionInput
 *   RestoreTestingPlanName: "STRING_VALUE", // required
 *   RestoreTestingSelection: { // RestoreTestingSelectionForUpdate
 *     IamRoleArn: "STRING_VALUE",
 *     ProtectedResourceArns: [ // stringList
 *       "STRING_VALUE",
 *     ],
 *     ProtectedResourceConditions: { // ProtectedResourceConditions
 *       StringEquals: [ // KeyValueList
 *         { // KeyValue
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       StringNotEquals: [
 *         {
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     RestoreMetadataOverrides: { // SensitiveStringMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     ValidationWindowHours: Number("int"),
 *   },
 *   RestoreTestingSelectionName: "STRING_VALUE", // required
 * };
 * const command = new UpdateRestoreTestingSelectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRestoreTestingSelectionOutput
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   RestoreTestingPlanArn: "STRING_VALUE", // required
 * //   RestoreTestingPlanName: "STRING_VALUE", // required
 * //   RestoreTestingSelectionName: "STRING_VALUE", // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateRestoreTestingSelectionCommandInput - {@link UpdateRestoreTestingSelectionCommandInput}
 * @returns {@link UpdateRestoreTestingSelectionCommandOutput}
 * @see {@link UpdateRestoreTestingSelectionCommandInput} for command's `input` shape.
 * @see {@link UpdateRestoreTestingSelectionCommandOutput} for command's `response` shape.
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
export class UpdateRestoreTestingSelectionCommand extends $Command
  .classBuilder<
    UpdateRestoreTestingSelectionCommandInput,
    UpdateRestoreTestingSelectionCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "UpdateRestoreTestingSelection", {})
  .n("BackupClient", "UpdateRestoreTestingSelectionCommand")
  .sc(UpdateRestoreTestingSelection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRestoreTestingSelectionInput;
      output: UpdateRestoreTestingSelectionOutput;
    };
    sdk: {
      input: UpdateRestoreTestingSelectionCommandInput;
      output: UpdateRestoreTestingSelectionCommandOutput;
    };
  };
}
