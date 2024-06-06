// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateRestoreTestingSelectionInput,
  UpdateRestoreTestingSelectionInputFilterSensitiveLog,
  UpdateRestoreTestingSelectionOutput,
} from "../models/models_0";
import {
  de_UpdateRestoreTestingSelectionCommand,
  se_UpdateRestoreTestingSelectionCommand,
} from "../protocols/Aws_restJson1";

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
 * <p>Most elements except the <code>RestoreTestingSelectionName</code>
 *          can be updated with this request.</p>
 *          <p>
 *             <code>RestoreTestingSelection</code> can use either protected
 *          resource ARNs or conditions, but not both. That is, if your selection
 *          has <code>ProtectedResourceArns</code>, requesting an update with the
 *          parameter <code>ProtectedResourceConditions</code> will be
 *          unsuccessful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateRestoreTestingSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateRestoreTestingSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "UpdateRestoreTestingSelection", {})
  .n("BackupClient", "UpdateRestoreTestingSelectionCommand")
  .f(UpdateRestoreTestingSelectionInputFilterSensitiveLog, void 0)
  .ser(se_UpdateRestoreTestingSelectionCommand)
  .de(de_UpdateRestoreTestingSelectionCommand)
  .build() {}
