// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteFileSystemRequest } from "../models/models_0";
import { DeleteFileSystem } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a file system, permanently severing access to its contents. Upon return, the
 *       file system no longer exists and you can't access any contents of the deleted file
 *       system.</p>
 *          <p>You need to manually delete mount targets attached to a file system before you can delete
 *     an EFS file system. This step is performed for you when you use the Amazon Web Services console
 *     to delete a file system.</p>
 *          <note>
 *             <p>You cannot delete a file system that is part of an EFS replication configuration.
 *       You need to delete the replication configuration first.</p>
 *          </note>
 *          <p> You can't delete a file system that is in use. That is, if the file system has
 *       any mount targets, you must first delete them. For more information, see <a>DescribeMountTargets</a> and <a>DeleteMountTarget</a>. </p>
 *          <note>
 *             <p>The <code>DeleteFileSystem</code> call returns while the file system state is still
 *           <code>deleting</code>. You can check the file system deletion status by calling the <a>DescribeFileSystems</a> operation, which returns a list of file systems in your
 *         account. If you pass file system ID or creation token for the deleted file system, the <a>DescribeFileSystems</a> returns a <code>404 FileSystemNotFound</code>
 *         error.</p>
 *          </note>
 *          <p>This operation requires permissions for the
 *         <code>elasticfilesystem:DeleteFileSystem</code> action.</p>
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
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link FileSystemInUse} (client fault)
 *  <p>Returned if a file system has mount targets.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
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
export class DeleteFileSystemCommand extends $Command
  .classBuilder<
    DeleteFileSystemCommandInput,
    DeleteFileSystemCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MagnolioAPIService_v20150201", "DeleteFileSystem", {})
  .n("EFSClient", "DeleteFileSystemCommand")
  .sc(DeleteFileSystem)
  .build() {
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
