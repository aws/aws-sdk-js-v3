// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBackupPlansInput, ListBackupPlansOutput } from "../models/models_0";
import { de_ListBackupPlansCommand, se_ListBackupPlansCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBackupPlansCommand}.
 */
export interface ListBackupPlansCommandInput extends ListBackupPlansInput {}
/**
 * @public
 *
 * The output of {@link ListBackupPlansCommand}.
 */
export interface ListBackupPlansCommandOutput extends ListBackupPlansOutput, __MetadataBearer {}

/**
 * <p>Lists the active backup plans for the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupPlansCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupPlansCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListBackupPlansInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   IncludeDeleted: true || false,
 * };
 * const command = new ListBackupPlansCommand(input);
 * const response = await client.send(command);
 * // { // ListBackupPlansOutput
 * //   NextToken: "STRING_VALUE",
 * //   BackupPlansList: [ // BackupPlansList
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
 * @param ListBackupPlansCommandInput - {@link ListBackupPlansCommandInput}
 * @returns {@link ListBackupPlansCommandOutput}
 * @see {@link ListBackupPlansCommandInput} for command's `input` shape.
 * @see {@link ListBackupPlansCommandOutput} for command's `response` shape.
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
export class ListBackupPlansCommand extends $Command
  .classBuilder<
    ListBackupPlansCommandInput,
    ListBackupPlansCommandOutput,
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
  .s("CryoControllerUserManager", "ListBackupPlans", {})
  .n("BackupClient", "ListBackupPlansCommand")
  .f(void 0, void 0)
  .ser(se_ListBackupPlansCommand)
  .de(de_ListBackupPlansCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBackupPlansInput;
      output: ListBackupPlansOutput;
    };
    sdk: {
      input: ListBackupPlansCommandInput;
      output: ListBackupPlansCommandOutput;
    };
  };
}
