// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMemoryInput, DeleteMemoryOutput } from "../models/models_0";
import { DeleteMemory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMemoryCommand}.
 */
export interface DeleteMemoryCommandInput extends DeleteMemoryInput {}
/**
 * @public
 *
 * The output of {@link DeleteMemoryCommand}.
 */
export interface DeleteMemoryCommandOutput extends DeleteMemoryOutput, __MetadataBearer {}

/**
 * <p>Deletes a memory, including its content and embedding. Deletion can't be undone. Searches stop returning the memory shortly after you delete it.</p> <p>Deleting a memory that no longer exists returns <code>ResourceNotFoundException</code>, so the operation is not idempotent. If you retry deletes, treat that error as success.</p> <p>A memory past its expiry (set from the space's <code>memoryExpiryDays</code> when the memory is written) reads as not found: the operation returns <code>ResourceNotFoundException</code>, as for a memory that was already deleted.</p> <p>If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with <code>AccessDeniedException</code> if you aren't allowed to use the key, and with <code>ThrottlingException</code> if AWS KMS throttles the request. It fails with <code>ValidationException</code> if the key is disabled, pending deletion, or deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchMemoryClient, DeleteMemoryCommand } from "@aws-sdk/client-opensearchmemory"; // ES Modules import
 * // const { OpenSearchMemoryClient, DeleteMemoryCommand } = require("@aws-sdk/client-opensearchmemory"); // CommonJS import
 * // import type { OpenSearchMemoryClientConfig } from "@aws-sdk/client-opensearchmemory";
 * const config = {}; // type is OpenSearchMemoryClientConfig
 * const client = new OpenSearchMemoryClient(config);
 * const input = { // DeleteMemoryInput
 *   spaceId: "STRING_VALUE", // required
 *   memoryId: "STRING_VALUE", // required
 *   actorId: "STRING_VALUE",
 *   strategyName: "STRING_VALUE",
 * };
 * const command = new DeleteMemoryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMemoryOutput
 * //   memoryId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteMemoryCommandInput - {@link DeleteMemoryCommandInput}
 * @returns {@link DeleteMemoryCommandOutput}
 * @see {@link DeleteMemoryCommandInput} for command's `input` shape.
 * @see {@link DeleteMemoryCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchMemoryClientResolvedConfig | config} for OpenSearchMemoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation. To use this operation, you must have AWS Identity and Access Management (IAM) permissions for the operation, and on the resource it acts on. If the space uses a customer managed AWS Key Management Service (AWS KMS) key, you must also have permission to use the key.</p>
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
export class DeleteMemoryCommand extends command<DeleteMemoryCommandInput, DeleteMemoryCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMemory",
  DeleteMemory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMemoryInput;
      output: DeleteMemoryOutput;
    };
    sdk: {
      input: DeleteMemoryCommandInput;
      output: DeleteMemoryCommandOutput;
    };
  };
}
