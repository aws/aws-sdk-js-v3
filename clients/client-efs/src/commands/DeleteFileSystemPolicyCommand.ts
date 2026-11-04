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
 * Deletes the `FileSystemPolicy` for the specified file system. The default `FileSystemPolicy` goes into effect once the existing policy is deleted. For more information about the default file system policy, see [Using Resource-based Policies with EFS](https://docs.aws.amazon.com/efs/latest/ug/res-based-policies-efs.html).
 *
 * This operation requires permissions for the `elasticfilesystem:DeleteFileSystemPolicy` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DeleteFileSystemPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DeleteFileSystemPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // DeleteFileSystemPolicyRequest
 *   FileSystemId: "STRING_VALUE", // required
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
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *
 * Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *
 * Returned if the specified `FileSystemId` value doesn't exist in the requester's Amazon Web Services account.
 *
 * @throws {@link IncorrectFileSystemLifeCycleState} (client fault)
 *
 * Returned if the file system's lifecycle state is not "available".
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Returned if an error occurred on the server side.
 *
 * @throws {@link EFSServiceException}
 *
 * Base exception class for all service exceptions from EFS service.
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
