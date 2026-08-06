// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListBackupAccessPointsByRecoveryPointRequest,
  ListBackupAccessPointsByRecoveryPointResponse,
} from "../models/models_0";
import { ListBackupAccessPointsByRecoveryPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBackupAccessPointsByRecoveryPointCommand}.
 */
export interface ListBackupAccessPointsByRecoveryPointCommandInput extends ListBackupAccessPointsByRecoveryPointRequest {}
/**
 * @public
 *
 * The output of {@link ListBackupAccessPointsByRecoveryPointCommand}.
 */
export interface ListBackupAccessPointsByRecoveryPointCommandOutput extends ListBackupAccessPointsByRecoveryPointResponse, __MetadataBearer {}

/**
 * <p>Returns the backup access points associated with the specified recovery point.</p>
 *          <p>If you own the recovery point and have shared it with other accounts, the response includes backup access
 *          points created by those accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupAccessPointsByRecoveryPointCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupAccessPointsByRecoveryPointCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListBackupAccessPointsByRecoveryPointRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RecoveryPointArn: "STRING_VALUE", // required
 * };
 * const command = new ListBackupAccessPointsByRecoveryPointCommand(input);
 * const response = await client.send(command);
 * // { // ListBackupAccessPointsByRecoveryPointResponse
 * //   BackupAccessPoints: [ // BackupAccessPoints // required
 * //     { // ListAccessPointsMember
 * //       AccessPointArn: "STRING_VALUE", // required
 * //       AccessPointMetadata: { // AccessPointMetadataMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       BackupVaultArn: "STRING_VALUE",
 * //       BackupVaultName: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       Name: "STRING_VALUE", // required
 * //       RecoveryPointArn: "STRING_VALUE", // required
 * //       ResourceArn: "STRING_VALUE", // required
 * //       ResourceType: "STRING_VALUE", // required
 * //       Status: "AVAILABLE" || "CREATING" || "DELETING" || "DISASSOCIATED" || "DISASSOCIATING" || "EXPIRED" || "FAILED", // required
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBackupAccessPointsByRecoveryPointCommandInput - {@link ListBackupAccessPointsByRecoveryPointCommandInput}
 * @returns {@link ListBackupAccessPointsByRecoveryPointCommandOutput}
 * @see {@link ListBackupAccessPointsByRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link ListBackupAccessPointsByRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
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
export class ListBackupAccessPointsByRecoveryPointCommand extends command<ListBackupAccessPointsByRecoveryPointCommandInput, ListBackupAccessPointsByRecoveryPointCommandOutput>(
  _ep0,
  _mw0,
  "ListBackupAccessPointsByRecoveryPoint",
  ListBackupAccessPointsByRecoveryPoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBackupAccessPointsByRecoveryPointRequest;
      output: ListBackupAccessPointsByRecoveryPointResponse;
    };
    sdk: {
      input: ListBackupAccessPointsByRecoveryPointCommandInput;
      output: ListBackupAccessPointsByRecoveryPointCommandOutput;
    };
  };
}
