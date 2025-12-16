// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRestoreTestingSelectionsInput, ListRestoreTestingSelectionsOutput } from "../models/models_0";
import { ListRestoreTestingSelections$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRestoreTestingSelectionsCommand}.
 */
export interface ListRestoreTestingSelectionsCommandInput extends ListRestoreTestingSelectionsInput {}
/**
 * @public
 *
 * The output of {@link ListRestoreTestingSelectionsCommand}.
 */
export interface ListRestoreTestingSelectionsCommandOutput
  extends ListRestoreTestingSelectionsOutput,
    __MetadataBearer {}

/**
 * <p>Returns a list of restore testing selections. Can be filtered
 *          by <code>MaxResults</code> and <code>RestoreTestingPlanName</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRestoreTestingSelectionsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRestoreTestingSelectionsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListRestoreTestingSelectionsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RestoreTestingPlanName: "STRING_VALUE", // required
 * };
 * const command = new ListRestoreTestingSelectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRestoreTestingSelectionsOutput
 * //   NextToken: "STRING_VALUE",
 * //   RestoreTestingSelections: [ // RestoreTestingSelections // required
 * //     { // RestoreTestingSelectionForList
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       IamRoleArn: "STRING_VALUE", // required
 * //       ProtectedResourceType: "STRING_VALUE", // required
 * //       RestoreTestingPlanName: "STRING_VALUE", // required
 * //       RestoreTestingSelectionName: "STRING_VALUE", // required
 * //       ValidationWindowHours: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRestoreTestingSelectionsCommandInput - {@link ListRestoreTestingSelectionsCommandInput}
 * @returns {@link ListRestoreTestingSelectionsCommandOutput}
 * @see {@link ListRestoreTestingSelectionsCommandInput} for command's `input` shape.
 * @see {@link ListRestoreTestingSelectionsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
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
export class ListRestoreTestingSelectionsCommand extends $Command
  .classBuilder<
    ListRestoreTestingSelectionsCommandInput,
    ListRestoreTestingSelectionsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "ListRestoreTestingSelections", {})
  .n("BackupClient", "ListRestoreTestingSelectionsCommand")
  .sc(ListRestoreTestingSelections$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRestoreTestingSelectionsInput;
      output: ListRestoreTestingSelectionsOutput;
    };
    sdk: {
      input: ListRestoreTestingSelectionsCommandInput;
      output: ListRestoreTestingSelectionsCommandOutput;
    };
  };
}
