// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFileSystemRequest } from "../models/models_0";
import { DeleteFileSystem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFileSystemCommand}.
 */
export interface DeleteFileSystemCommandInput extends DeleteFileSystemRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFileSystemCommand}.
 */
export interface DeleteFileSystemCommandOutput extends __MetadataBearer {}

/**
 * Deletes a file system, permanently severing access to its contents. Upon return, the file system no longer exists and you can't access any contents of the deleted file system.
 *
 * You need to manually delete mount targets attached to a file system before you can delete an EFS file system. This step is performed for you when you use the Amazon Web Services console to delete a file system.
 *
 * > **Note:** You cannot delete a file system that is part of an EFS replication configuration. You need to delete the replication configuration first.
 *
 * You can't delete a file system that is in use. That is, if the file system has any mount targets, you must first delete them. For more information, see DescribeMountTargets and DeleteMountTarget.
 *
 * > **Note:** The `DeleteFileSystem` call returns while the file system state is still `deleting`. You can check the file system deletion status by calling the DescribeFileSystems operation, which returns a list of file systems in your account. If you pass file system ID or creation token for the deleted file system, the DescribeFileSystems returns a `404 FileSystemNotFound` error.
 *
 * This operation requires permissions for the `elasticfilesystem:DeleteFileSystem` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DeleteFileSystemCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DeleteFileSystemCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // DeleteFileSystemRequest
 *   FileSystemId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFileSystemCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFileSystemCommandInput - {@link DeleteFileSystemCommandInput}
 * @returns {@link DeleteFileSystemCommandOutput}
 * @see {@link DeleteFileSystemCommandInput} for command's `input` shape.
 * @see {@link DeleteFileSystemCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *
 * Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.
 *
 * @throws {@link FileSystemInUse} (client fault)
 *
 * Returned if a file system has mount targets.
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *
 * Returned if the specified `FileSystemId` value doesn't exist in the requester's Amazon Web Services account.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Returned if an error occurred on the server side.
 *
 * @throws {@link EFSServiceException}
 *
 * Base exception class for all service exceptions from EFS service.
 *
 * @example To delete a file system
 * ```javascript
 * // This operation deletes an EFS file system.
 * const input = {
 *   FileSystemId: "fs-01234567"
 * };
 * const command = new DeleteFileSystemCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteFileSystemCommand extends command<DeleteFileSystemCommandInput, DeleteFileSystemCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFileSystem",
  DeleteFileSystem$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFileSystemRequest;
      output: {};
    };
    sdk: {
      input: DeleteFileSystemCommandInput;
      output: DeleteFileSystemCommandOutput;
    };
  };
}
