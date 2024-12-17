// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRecoveryPointsByResourceInput, ListRecoveryPointsByResourceOutput } from "../models/models_0";
import {
  de_ListRecoveryPointsByResourceCommand,
  se_ListRecoveryPointsByResourceCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecoveryPointsByResourceCommand}.
 */
export interface ListRecoveryPointsByResourceCommandInput extends ListRecoveryPointsByResourceInput {}
/**
 * @public
 *
 * The output of {@link ListRecoveryPointsByResourceCommand}.
 */
export interface ListRecoveryPointsByResourceCommandOutput
  extends ListRecoveryPointsByResourceOutput,
    __MetadataBearer {}

/**
 * <p>The information about the recovery points of the type specified by a
 *          resource Amazon Resource Name (ARN).</p>
 *          <note>
 *             <p>For Amazon EFS and Amazon EC2, this action only lists recovery points
 *             created by Backup.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRecoveryPointsByResourceCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRecoveryPointsByResourceCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListRecoveryPointsByResourceInput
 *   ResourceArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ManagedByAWSBackupOnly: true || false,
 * };
 * const command = new ListRecoveryPointsByResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListRecoveryPointsByResourceOutput
 * //   NextToken: "STRING_VALUE",
 * //   RecoveryPoints: [ // RecoveryPointByResourceList
 * //     { // RecoveryPointByResource
 * //       RecoveryPointArn: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       Status: "COMPLETED" || "PARTIAL" || "DELETING" || "EXPIRED",
 * //       StatusMessage: "STRING_VALUE",
 * //       EncryptionKeyArn: "STRING_VALUE",
 * //       BackupSizeBytes: Number("long"),
 * //       BackupVaultName: "STRING_VALUE",
 * //       IsParent: true || false,
 * //       ParentRecoveryPointArn: "STRING_VALUE",
 * //       ResourceName: "STRING_VALUE",
 * //       VaultType: "BACKUP_VAULT" || "LOGICALLY_AIR_GAPPED_BACKUP_VAULT",
 * //       IndexStatus: "PENDING" || "ACTIVE" || "FAILED" || "DELETING",
 * //       IndexStatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRecoveryPointsByResourceCommandInput - {@link ListRecoveryPointsByResourceCommandInput}
 * @returns {@link ListRecoveryPointsByResourceCommandOutput}
 * @see {@link ListRecoveryPointsByResourceCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryPointsByResourceCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListRecoveryPointsByResourceCommand extends $Command
  .classBuilder<
    ListRecoveryPointsByResourceCommandInput,
    ListRecoveryPointsByResourceCommandOutput,
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
  .s("CryoControllerUserManager", "ListRecoveryPointsByResource", {})
  .n("BackupClient", "ListRecoveryPointsByResourceCommand")
  .f(void 0, void 0)
  .ser(se_ListRecoveryPointsByResourceCommand)
  .de(de_ListRecoveryPointsByResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecoveryPointsByResourceInput;
      output: ListRecoveryPointsByResourceOutput;
    };
    sdk: {
      input: ListRecoveryPointsByResourceCommandInput;
      output: ListRecoveryPointsByResourceCommandOutput;
    };
  };
}
