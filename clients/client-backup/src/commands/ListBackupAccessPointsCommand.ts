// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBackupAccessPointsRequest, ListBackupAccessPointsResponse } from "../models/models_0";
import { ListBackupAccessPoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBackupAccessPointsCommand}.
 */
export interface ListBackupAccessPointsCommandInput extends ListBackupAccessPointsRequest {}
/**
 * @public
 *
 * The output of {@link ListBackupAccessPointsCommand}.
 */
export interface ListBackupAccessPointsCommandOutput extends ListBackupAccessPointsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the backup access points in your account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupAccessPointsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupAccessPointsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListBackupAccessPointsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListBackupAccessPointsCommand(input);
 * const response = await client.send(command);
 * // { // ListBackupAccessPointsResponse
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
 * @param ListBackupAccessPointsCommandInput - {@link ListBackupAccessPointsCommandInput}
 * @returns {@link ListBackupAccessPointsCommandOutput}
 * @see {@link ListBackupAccessPointsCommandInput} for command's `input` shape.
 * @see {@link ListBackupAccessPointsCommandOutput} for command's `response` shape.
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
export class ListBackupAccessPointsCommand extends command<ListBackupAccessPointsCommandInput, ListBackupAccessPointsCommandOutput>(
  _ep0,
  _mw0,
  "ListBackupAccessPoints",
  ListBackupAccessPoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBackupAccessPointsRequest;
      output: ListBackupAccessPointsResponse;
    };
    sdk: {
      input: ListBackupAccessPointsCommandInput;
      output: ListBackupAccessPointsCommandOutput;
    };
  };
}
