// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListBackupAccessPointsByResourceRequest,
  ListBackupAccessPointsByResourceResponse,
} from "../models/models_0";
import { ListBackupAccessPointsByResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBackupAccessPointsByResourceCommand}.
 */
export interface ListBackupAccessPointsByResourceCommandInput extends ListBackupAccessPointsByResourceRequest {}
/**
 * @public
 *
 * The output of {@link ListBackupAccessPointsByResourceCommand}.
 */
export interface ListBackupAccessPointsByResourceCommandOutput extends ListBackupAccessPointsByResourceResponse, __MetadataBearer {}

/**
 * <p>Returns the backup access points associated with the specified resource, such as an Amazon S3
 *          bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupAccessPointsByResourceCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupAccessPointsByResourceCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListBackupAccessPointsByResourceRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new ListBackupAccessPointsByResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListBackupAccessPointsByResourceResponse
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
 * @param ListBackupAccessPointsByResourceCommandInput - {@link ListBackupAccessPointsByResourceCommandInput}
 * @returns {@link ListBackupAccessPointsByResourceCommandOutput}
 * @see {@link ListBackupAccessPointsByResourceCommandInput} for command's `input` shape.
 * @see {@link ListBackupAccessPointsByResourceCommandOutput} for command's `response` shape.
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
export class ListBackupAccessPointsByResourceCommand extends command<ListBackupAccessPointsByResourceCommandInput, ListBackupAccessPointsByResourceCommandOutput>(
  _ep0,
  _mw0,
  "ListBackupAccessPointsByResource",
  ListBackupAccessPointsByResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBackupAccessPointsByResourceRequest;
      output: ListBackupAccessPointsByResourceResponse;
    };
    sdk: {
      input: ListBackupAccessPointsByResourceCommandInput;
      output: ListBackupAccessPointsByResourceCommandOutput;
    };
  };
}
