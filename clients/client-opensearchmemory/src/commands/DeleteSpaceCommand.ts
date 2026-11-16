// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { DeleteSpaceRequest, DeleteSpaceResponse } from "../models/models_0";
import { DeleteSpace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSpaceCommand}.
 */
export interface DeleteSpaceCommandInput extends DeleteSpaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSpaceCommand}.
 */
export interface DeleteSpaceCommandOutput extends DeleteSpaceResponse, __MetadataBearer {}

/**
 * <p>Deletes a space and its memories. Deletion can't be undone. After you delete the space, you can't retrieve its events, and the service removes them when they reach their expiry.</p> <p>The operation returns with <code>status</code> <code>DELETING</code>. When deletion finishes, <code>GetSpace</code> returns <code>ResourceNotFoundException</code>. If deletion fails, the status becomes <code>FAILED</code>. A space that is <code>CREATING</code> or <code>UPDATING</code> can't be deleted until that finishes: the request fails with <code>ConflictException</code>. Deleting a space that is already <code>DELETING</code> returns <code>DELETING</code> again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchMemoryClient, DeleteSpaceCommand } from "@aws-sdk/client-opensearchmemory"; // ES Modules import
 * // const { OpenSearchMemoryClient, DeleteSpaceCommand } = require("@aws-sdk/client-opensearchmemory"); // CommonJS import
 * // import type { OpenSearchMemoryClientConfig } from "@aws-sdk/client-opensearchmemory";
 * const config = {}; // type is OpenSearchMemoryClientConfig
 * const client = new OpenSearchMemoryClient(config);
 * const input = { // DeleteSpaceRequest
 *   spaceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSpaceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSpaceResponse
 * //   spaceId: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "DELETED" || "FAILED", // required
 * // };
 *
 * ```
 *
 * @param DeleteSpaceCommandInput - {@link DeleteSpaceCommandInput}
 * @returns {@link DeleteSpaceCommandOutput}
 * @see {@link DeleteSpaceCommandInput} for command's `input` shape.
 * @see {@link DeleteSpaceCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchMemoryClientResolvedConfig | config} for OpenSearchMemoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation. To use this operation, you must have AWS Identity and Access Management (IAM) permissions for the operation, and on the resource it acts on. If the space uses a customer managed AWS Key Management Service (AWS KMS) key, you must also have permission to use the key.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. For example, the space is being created, updated, or deleted, a space with the same name already exists, or you reused a client token with different parameters. Wait for the space to finish being created, updated, or deleted, or use a different name or client token, and then retry.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service couldn't process the request because of an internal error. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check the IDs in the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The service throttled the request. Retry the request with exponential backoff.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. The <code>reason</code>, <code>message</code>, and <code>fieldList</code> members describe the problem. Fix the request, and then try again.</p>
 *
 * @throws {@link OpenSearchMemoryServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchMemory service.</p>
 *
 *
 * @public
 */
export class DeleteSpaceCommand extends command<DeleteSpaceCommandInput, DeleteSpaceCommandOutput>(
  _ep1,
  _mw0,
  "DeleteSpace",
  DeleteSpace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSpaceRequest;
      output: DeleteSpaceResponse;
    };
    sdk: {
      input: DeleteSpaceCommandInput;
      output: DeleteSpaceCommandOutput;
    };
  };
}
