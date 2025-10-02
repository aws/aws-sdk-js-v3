// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBackupPlanVersionsInput, ListBackupPlanVersionsOutput } from "../models/models_0";
import { de_ListBackupPlanVersionsCommand, se_ListBackupPlanVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns version metadata of your backup plans, including Amazon Resource Names (ARNs),
 *          backup plan IDs, creation and deletion dates, plan names, and version IDs.</p>
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
export class ListBackupPlanVersionsCommand extends $Command
  .classBuilder<
    ListBackupPlanVersionsCommandInput,
    ListBackupPlanVersionsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "ListBackupPlanVersions", {})
  .n("BackupClient", "ListBackupPlanVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListBackupPlanVersionsCommand)
  .de(de_ListBackupPlanVersionsCommand)
  .build() {
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
