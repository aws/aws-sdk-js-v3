// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateLogicallyAirGappedBackupVaultInput,
  CreateLogicallyAirGappedBackupVaultOutput,
} from "../models/models_0";
import { CreateLogicallyAirGappedBackupVault } from "../schemas/schemas_18_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLogicallyAirGappedBackupVaultCommand}.
 */
export interface CreateLogicallyAirGappedBackupVaultCommandInput extends CreateLogicallyAirGappedBackupVaultInput {}
/**
 * @public
 *
 * The output of {@link CreateLogicallyAirGappedBackupVaultCommand}.
 */
export interface CreateLogicallyAirGappedBackupVaultCommandOutput
  extends CreateLogicallyAirGappedBackupVaultOutput,
    __MetadataBearer {}

/**
 * <p>Creates a logical container to where backups may be copied.</p>
 *          <p>This request includes a name, the Region, the maximum number of retention days, the
 *       minimum number of retention days, and optionally can include tags and a creator request
 *       ID.</p>
 *          <note>
 *             <p>Do not include sensitive data, such as passport numbers, in the name of a backup
 *          vault.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateLogicallyAirGappedBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateLogicallyAirGappedBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // CreateLogicallyAirGappedBackupVaultInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   BackupVaultTags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   CreatorRequestId: "STRING_VALUE",
 *   MinRetentionDays: Number("long"), // required
 *   MaxRetentionDays: Number("long"), // required
 * };
 * const command = new CreateLogicallyAirGappedBackupVaultCommand(input);
 * const response = await client.send(command);
 * // { // CreateLogicallyAirGappedBackupVaultOutput
 * //   BackupVaultName: "STRING_VALUE",
 * //   BackupVaultArn: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   VaultState: "CREATING" || "AVAILABLE" || "FAILED",
 * // };
 *
 * ```
 *
 * @param CreateLogicallyAirGappedBackupVaultCommandInput - {@link CreateLogicallyAirGappedBackupVaultCommandInput}
 * @returns {@link CreateLogicallyAirGappedBackupVaultCommandOutput}
 * @see {@link CreateLogicallyAirGappedBackupVaultCommandInput} for command's `input` shape.
 * @see {@link CreateLogicallyAirGappedBackupVaultCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
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
export class CreateLogicallyAirGappedBackupVaultCommand extends $Command
  .classBuilder<
    CreateLogicallyAirGappedBackupVaultCommandInput,
    CreateLogicallyAirGappedBackupVaultCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "CreateLogicallyAirGappedBackupVault", {})
  .n("BackupClient", "CreateLogicallyAirGappedBackupVaultCommand")
  .sc(CreateLogicallyAirGappedBackupVault)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLogicallyAirGappedBackupVaultInput;
      output: CreateLogicallyAirGappedBackupVaultOutput;
    };
    sdk: {
      input: CreateLogicallyAirGappedBackupVaultCommandInput;
      output: CreateLogicallyAirGappedBackupVaultCommandOutput;
    };
  };
}
