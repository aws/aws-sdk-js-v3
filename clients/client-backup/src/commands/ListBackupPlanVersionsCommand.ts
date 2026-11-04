// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBackupPlanVersionsInput, ListBackupPlanVersionsOutput } from "../models/models_0";
import { ListBackupPlanVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBackupPlanVersionsCommand}.
 */
export interface ListBackupPlanVersionsCommandInput extends ListBackupPlanVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListBackupPlanVersionsCommand}.
 */
export interface ListBackupPlanVersionsCommandOutput extends ListBackupPlanVersionsOutput, __MetadataBearer {}

/**
 * Returns version metadata of your backup plans, including Amazon Resource Names (ARNs), backup plan IDs, creation and deletion dates, plan names, and version IDs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupPlanVersionsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupPlanVersionsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListBackupPlanVersionsInput
 *   BackupPlanId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListBackupPlanVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListBackupPlanVersionsOutput
 * //   NextToken: "STRING_VALUE",
 * //   BackupPlanVersionsList: [ // BackupPlanVersionsList
 * //     { // BackupPlansListMember
 * //       BackupPlanArn: "STRING_VALUE",
 * //       BackupPlanId: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       DeletionDate: new Date("TIMESTAMP"),
 * //       VersionId: "STRING_VALUE",
 * //       BackupPlanName: "STRING_VALUE",
 * //       CreatorRequestId: "STRING_VALUE",
 * //       LastExecutionDate: new Date("TIMESTAMP"),
 * //       AdvancedBackupSettings: [ // AdvancedBackupSettings
 * //         { // AdvancedBackupSetting
 * //           ResourceType: "STRING_VALUE",
 * //           BackupOptions: { // BackupOptions
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBackupPlanVersionsCommandInput - {@link ListBackupPlanVersionsCommandInput}
 * @returns {@link ListBackupPlanVersionsCommandOutput}
 * @see {@link ListBackupPlanVersionsCommandInput} for command's `input` shape.
 * @see {@link ListBackupPlanVersionsCommandOutput} for command's `response` shape.
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
export class ListBackupPlanVersionsCommand extends command<ListBackupPlanVersionsCommandInput, ListBackupPlanVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListBackupPlanVersions",
  ListBackupPlanVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBackupPlanVersionsInput;
      output: ListBackupPlanVersionsOutput;
    };
    sdk: {
      input: ListBackupPlanVersionsCommandInput;
      output: ListBackupPlanVersionsCommandOutput;
    };
  };
}
