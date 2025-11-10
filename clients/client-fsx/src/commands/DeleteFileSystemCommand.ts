// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DeleteFileSystemRequest, DeleteFileSystemResponse } from "../models/models_0";
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
export interface DeleteFileSystemCommandOutput extends DeleteFileSystemResponse, __MetadataBearer {}

/**
 * <p>Deletes a file system. After deletion, the file system no longer exists, and its data
 *             is gone. Any existing automatic backups and snapshots are also deleted.</p>
 *          <p>To delete an Amazon FSx for NetApp ONTAP file system, first delete all the
 *             volumes and storage virtual machines (SVMs) on the file system. Then provide a
 *                 <code>FileSystemId</code> value to the <code>DeleteFileSystem</code> operation.</p>
 *          <p>Before deleting an Amazon FSx for OpenZFS file system, make sure that there aren't
 *         any Amazon S3 access points attached to any volume. For more information on how to list S3
 *         access points that are attached to volumes, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/access-points-list.html">Listing S3 access point attachments</a>.
 *         For more information on how to delete S3 access points, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/delete-access-point.html">Deleting an S3 access point attachment</a>.</p>
 *          <p>By default, when you delete an Amazon FSx for Windows File Server file system,
 *             a final backup is created upon deletion. This final backup isn't subject to the file
 *             system's retention policy, and must be manually deleted.</p>
 *          <p>To delete an Amazon FSx for Lustre file system, first
 *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/unmounting-fs.html">unmount</a>
 *             it from every connected Amazon EC2 instance, then provide a <code>FileSystemId</code>
 *             value to the <code>DeleteFileSystem</code> operation. By default, Amazon FSx will not
 *             take a final backup when the <code>DeleteFileSystem</code> operation is invoked. On file systems
 *             not linked to an Amazon S3 bucket, set <code>SkipFinalBackup</code> to <code>false</code>
 *             to take a final backup of the file system you are deleting. Backups cannot be enabled on S3-linked
 *             file systems. To ensure all of your data is written back to S3 before deleting your file system,
 *             you can either monitor for the
 *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/monitoring-cloudwatch.html#auto-import-export-metrics">AgeOfOldestQueuedMessage</a>
 *             metric to be zero (if using automatic export) or you can run an
 *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/export-data-repo-task-dra.html">export data repository task</a>.
 *             If you have automatic export enabled and want to use an export data repository task, you have
 *             to disable automatic export before executing the export data repository task.</p>
 *          <p>The <code>DeleteFileSystem</code> operation returns while the file system has the
 *                 <code>DELETING</code> status. You can check the file system deletion status by
 *             calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns a list of file systems in your
 *             account. If you pass the file system ID for a deleted file system, the
 *                 <code>DescribeFileSystems</code> operation returns a <code>FileSystemNotFound</code>
 *             error.</p>
 *          <note>
 *             <p>If a data repository task is in a <code>PENDING</code> or <code>EXECUTING</code> state,
 *                 deleting an Amazon FSx for Lustre file system will fail with an HTTP status
 *                 code 400 (Bad Request).</p>
 *          </note>
 *          <important>
 *             <p>The data in a deleted file system is also deleted and can't be recovered by
 *                 any means.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteFileSystemCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteFileSystemCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DeleteFileSystemRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   WindowsConfiguration: { // DeleteFileSystemWindowsConfiguration
 *     SkipFinalBackup: true || false,
 *     FinalBackupTags: [ // Tags
 *       { // Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   LustreConfiguration: { // DeleteFileSystemLustreConfiguration
 *     SkipFinalBackup: true || false,
 *     FinalBackupTags: [
 *       {
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   OpenZFSConfiguration: { // DeleteFileSystemOpenZFSConfiguration
 *     SkipFinalBackup: true || false,
 *     FinalBackupTags: [
 *       {
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *     Options: [ // DeleteFileSystemOpenZFSOptions
 *       "DELETE_CHILD_VOLUMES_AND_SNAPSHOTS",
 *     ],
 *   },
 * };
 * const command = new DeleteFileSystemCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFileSystemResponse
 * //   FileSystemId: "STRING_VALUE",
 * //   Lifecycle: "AVAILABLE" || "CREATING" || "FAILED" || "DELETING" || "MISCONFIGURED" || "UPDATING" || "MISCONFIGURED_UNAVAILABLE",
 * //   WindowsResponse: { // DeleteFileSystemWindowsResponse
 * //     FinalBackupId: "STRING_VALUE",
 * //     FinalBackupTags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   LustreResponse: { // DeleteFileSystemLustreResponse
 * //     FinalBackupId: "STRING_VALUE",
 * //     FinalBackupTags: [
 * //       {
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   OpenZFSResponse: { // DeleteFileSystemOpenZFSResponse
 * //     FinalBackupId: "STRING_VALUE",
 * //     FinalBackupTags: [
 * //       {
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteFileSystemCommandInput - {@link DeleteFileSystemCommandInput}
 * @returns {@link DeleteFileSystemCommandOutput}
 * @see {@link DeleteFileSystemCommandInput} for command's `input` shape.
 * @see {@link DeleteFileSystemCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @example To delete a file system
 * ```javascript
 * // This operation deletes an Amazon FSx file system.
 * const input = {
 *   FileSystemId: "fs-0498eed5fe91001ec"
 * };
 * const command = new DeleteFileSystemCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   FileSystemId: "fs-0498eed5fe91001ec",
 *   Lifecycle: "DELETING"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteFileSystemCommand extends $Command
  .classBuilder<
    DeleteFileSystemCommandInput,
    DeleteFileSystemCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSimbaAPIService_v20180301", "DeleteFileSystem", {})
  .n("FSxClient", "DeleteFileSystemCommand")
  .sc(DeleteFileSystem)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFileSystemRequest;
      output: DeleteFileSystemResponse;
    };
    sdk: {
      input: DeleteFileSystemCommandInput;
      output: DeleteFileSystemCommandOutput;
    };
  };
}
