// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBackupAccessPointInput } from "../models/models_0";
import { DeleteBackupAccessPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBackupAccessPointCommand}.
 */
export interface DeleteBackupAccessPointCommandInput extends DeleteBackupAccessPointInput {}
/**
 * @public
 *
 * The output of {@link DeleteBackupAccessPointCommand}.
 */
export interface DeleteBackupAccessPointCommandOutput extends __MetadataBearer {}

/**
 * Deletes a backup access point. This deletes the underlying Amazon S3 access point and, if no other backup access points remain for the recovery point, resumes lifecycle transitions for that recovery point.
 *
 * Always delete backup access points using this operation rather than deleting the underlying Amazon S3 access point directly.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupAccessPointCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupAccessPointCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DeleteBackupAccessPointInput
 *   AccessPointArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteBackupAccessPointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBackupAccessPointCommandInput - {@link DeleteBackupAccessPointCommandInput}
 * @returns {@link DeleteBackupAccessPointCommandOutput}
 * @see {@link DeleteBackupAccessPointCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupAccessPointCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that something is wrong with the input to the request. For example, a parameter is of the wrong type.
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
export class DeleteBackupAccessPointCommand extends command<DeleteBackupAccessPointCommandInput, DeleteBackupAccessPointCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBackupAccessPoint",
  DeleteBackupAccessPoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBackupAccessPointInput;
      output: {};
    };
    sdk: {
      input: DeleteBackupAccessPointCommandInput;
      output: DeleteBackupAccessPointCommandOutput;
    };
  };
}
