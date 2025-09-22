// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListProtectedResourcesByBackupVaultInput,
  ListProtectedResourcesByBackupVaultOutput,
} from "../models/models_0";
import { ListProtectedResourcesByBackupVault } from "../schemas/schemas_34_Protected";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProtectedResourcesByBackupVaultCommand}.
 */
export interface ListProtectedResourcesByBackupVaultCommandInput extends ListProtectedResourcesByBackupVaultInput {}
/**
 * @public
 *
 * The output of {@link ListProtectedResourcesByBackupVaultCommand}.
 */
export interface ListProtectedResourcesByBackupVaultCommandOutput
  extends ListProtectedResourcesByBackupVaultOutput,
    __MetadataBearer {}

/**
 * <p>This request lists the protected resources corresponding to each backup vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListProtectedResourcesByBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListProtectedResourcesByBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListProtectedResourcesByBackupVaultInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   BackupVaultAccountId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProtectedResourcesByBackupVaultCommand(input);
 * const response = await client.send(command);
 * // { // ListProtectedResourcesByBackupVaultOutput
 * //   Results: [ // ProtectedResourcesList
 * //     { // ProtectedResource
 * //       ResourceArn: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       LastBackupTime: new Date("TIMESTAMP"),
 * //       ResourceName: "STRING_VALUE",
 * //       LastBackupVaultArn: "STRING_VALUE",
 * //       LastRecoveryPointArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProtectedResourcesByBackupVaultCommandInput - {@link ListProtectedResourcesByBackupVaultCommandInput}
 * @returns {@link ListProtectedResourcesByBackupVaultCommandOutput}
 * @see {@link ListProtectedResourcesByBackupVaultCommandInput} for command's `input` shape.
 * @see {@link ListProtectedResourcesByBackupVaultCommandOutput} for command's `response` shape.
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
export class ListProtectedResourcesByBackupVaultCommand extends $Command
  .classBuilder<
    ListProtectedResourcesByBackupVaultCommandInput,
    ListProtectedResourcesByBackupVaultCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "ListProtectedResourcesByBackupVault", {})
  .n("BackupClient", "ListProtectedResourcesByBackupVaultCommand")
  .sc(ListProtectedResourcesByBackupVault)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProtectedResourcesByBackupVaultInput;
      output: ListProtectedResourcesByBackupVaultOutput;
    };
    sdk: {
      input: ListProtectedResourcesByBackupVaultCommandInput;
      output: ListProtectedResourcesByBackupVaultCommandOutput;
    };
  };
}
