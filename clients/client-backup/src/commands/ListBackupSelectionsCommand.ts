// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBackupSelectionsInput, ListBackupSelectionsOutput } from "../models/models_0";
import { ListBackupSelections$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBackupSelectionsCommand}.
 */
export interface ListBackupSelectionsCommandInput extends ListBackupSelectionsInput {}
/**
 * @public
 *
 * The output of {@link ListBackupSelectionsCommand}.
 */
export interface ListBackupSelectionsCommandOutput extends ListBackupSelectionsOutput, __MetadataBearer {}

/**
 * Returns an array containing metadata of the resources associated with the target backup plan.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupSelectionsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupSelectionsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListBackupSelectionsInput
 *   BackupPlanId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListBackupSelectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListBackupSelectionsOutput
 * //   NextToken: "STRING_VALUE",
 * //   BackupSelectionsList: [ // BackupSelectionsList
 * //     { // BackupSelectionsListMember
 * //       SelectionId: "STRING_VALUE",
 * //       SelectionName: "STRING_VALUE",
 * //       BackupPlanId: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       CreatorRequestId: "STRING_VALUE",
 * //       IamRoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBackupSelectionsCommandInput - {@link ListBackupSelectionsCommandInput}
 * @returns {@link ListBackupSelectionsCommandOutput}
 * @see {@link ListBackupSelectionsCommandInput} for command's `input` shape.
 * @see {@link ListBackupSelectionsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * Indicates that a required parameter is missing.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource that is required for the action doesn't exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request failed due to a temporary failure of the server.
 *
 * @throws {@link BackupServiceException}
 *
 * Base exception class for all service exceptions from Backup service.
 *
 * @public
 */
export class ListBackupSelectionsCommand extends command<ListBackupSelectionsCommandInput, ListBackupSelectionsCommandOutput>(
  _ep0,
  _mw0,
  "ListBackupSelections",
  ListBackupSelections$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBackupSelectionsInput;
      output: ListBackupSelectionsOutput;
    };
    sdk: {
      input: ListBackupSelectionsCommandInput;
      output: ListBackupSelectionsCommandOutput;
    };
  };
}
