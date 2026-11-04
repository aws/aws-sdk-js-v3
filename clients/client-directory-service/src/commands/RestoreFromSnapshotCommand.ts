// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreFromSnapshotRequest, RestoreFromSnapshotResult } from "../models/models_0";
import { RestoreFromSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreFromSnapshotCommand}.
 */
export interface RestoreFromSnapshotCommandInput extends RestoreFromSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link RestoreFromSnapshotCommand}.
 */
export interface RestoreFromSnapshotCommandOutput extends RestoreFromSnapshotResult, __MetadataBearer {}

/**
 * Restores a directory using an existing directory snapshot.
 *
 * When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.
 *
 * This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the DescribeDirectories operation with the directory identifier. When the **DirectoryDescription.Stage** value changes to `Active`, the restore operation is complete.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RestoreFromSnapshotCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RestoreFromSnapshotCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // RestoreFromSnapshotRequest
 *   SnapshotId: "STRING_VALUE", // required
 * };
 * const command = new RestoreFromSnapshotCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RestoreFromSnapshotCommandInput - {@link RestoreFromSnapshotCommandInput}
 * @returns {@link RestoreFromSnapshotCommandOutput}
 * @see {@link RestoreFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @example To restore a snapshot
 * ```javascript
 * // The following example restores a directory using an existing directory snapshot.
 * const input = {
 *   SnapshotId: "s-9267f6da4e"
 * };
 * const command = new RestoreFromSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RestoreFromSnapshotCommand extends command<RestoreFromSnapshotCommandInput, RestoreFromSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "RestoreFromSnapshot",
  RestoreFromSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreFromSnapshotRequest;
      output: {};
    };
    sdk: {
      input: RestoreFromSnapshotCommandInput;
      output: RestoreFromSnapshotCommandOutput;
    };
  };
}
