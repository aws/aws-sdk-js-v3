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
 * <p>Deletes an S3 File System. You can optionally force deletion of a file system that has pending export data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, DeleteFileSystemCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, DeleteFileSystemCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // DeleteFileSystemRequest
 *   fileSystemId: "STRING_VALUE", // required
 *   forceDelete: true || false,
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
 * @see {@link S3FilesClientResolvedConfig | config} for S3FilesClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. This can occur when trying to create a resource that already exists or delete a resource that is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource exists and that you have permission to access it.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters are not valid. Check the parameter values and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Retry your request using exponential backoff.</p>
 *
 * @throws {@link S3FilesServiceException}
 * <p>Base exception class for all service exceptions from S3Files service.</p>
 *
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
