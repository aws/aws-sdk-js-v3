// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFileSystemPolicyRequest } from "../models/models_0";
import { DeleteFileSystemPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFileSystemPolicyCommand}.
 */
export interface DeleteFileSystemPolicyCommandInput extends DeleteFileSystemPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFileSystemPolicyCommand}.
 */
export interface DeleteFileSystemPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the IAM resource policy of an S3 File System.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, DeleteFileSystemPolicyCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, DeleteFileSystemPolicyCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // DeleteFileSystemPolicyRequest
 *   fileSystemId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFileSystemPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFileSystemPolicyCommandInput - {@link DeleteFileSystemPolicyCommandInput}
 * @returns {@link DeleteFileSystemPolicyCommandOutput}
 * @see {@link DeleteFileSystemPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteFileSystemPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3FilesClientResolvedConfig | config} for S3FilesClient's `config` shape.
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
export class DeleteFileSystemPolicyCommand extends command<DeleteFileSystemPolicyCommandInput, DeleteFileSystemPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFileSystemPolicy",
  DeleteFileSystemPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFileSystemPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteFileSystemPolicyCommandInput;
      output: DeleteFileSystemPolicyCommandOutput;
    };
  };
}
