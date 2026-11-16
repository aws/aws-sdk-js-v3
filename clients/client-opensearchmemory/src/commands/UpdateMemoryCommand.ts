// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMemoryInput, UpdateMemoryOutput } from "../models/models_0";
import { UpdateMemory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMemoryCommand}.
 */
export interface UpdateMemoryCommandInput extends UpdateMemoryInput {}
/**
 * @public
 *
 * The output of {@link UpdateMemoryCommand}.
 */
export interface UpdateMemoryCommandOutput extends UpdateMemoryOutput, __MetadataBearer {}

/**
 * <p>Updates a memory in place. Supply only the fields to change. Omitted fields keep their stored values. A request must supply <code>content</code> or <code>metadata</code>, or it fails with <code>ValidationException</code>. Supplying <code>content</code> re-embeds the memory. A change to metadata alone doesn't.</p> <p>The memory keeps its <code>memoryId</code> across updates. Shortly after an update, searches stop returning the previous content.</p> <p> <code>memoryType</code> can't be changed. To change it, delete the memory and create a new one.</p> <p>A memory past its expiry (set from the space's <code>memoryExpiryDays</code> when the memory is written) reads as not found: the operation fails with <code>ResourceNotFoundException</code> and changes nothing. An update does not move the expiry.</p> <p>Concurrent updates to one memory are last-writer-wins. There is no version check. To avoid lost updates, serialize your updates to a memory.</p> <p>If you supply <code>content</code> and the request would exceed the service's rate for embedding requests, it fails with <code>ThrottlingException</code>. Retry with exponential backoff.</p> <p>If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with <code>AccessDeniedException</code> if you aren't allowed to use the key, and with <code>ThrottlingException</code> if AWS KMS throttles the request. It fails with <code>ValidationException</code> if the key is disabled, pending deletion, or deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchMemoryClient, UpdateMemoryCommand } from "@aws-sdk/client-opensearchmemory"; // ES Modules import
 * // const { OpenSearchMemoryClient, UpdateMemoryCommand } = require("@aws-sdk/client-opensearchmemory"); // CommonJS import
 * // import type { OpenSearchMemoryClientConfig } from "@aws-sdk/client-opensearchmemory";
 * const config = {}; // type is OpenSearchMemoryClientConfig
 * const client = new OpenSearchMemoryClient(config);
 * const input = { // UpdateMemoryInput
 *   spaceId: "STRING_VALUE", // required
 *   memoryId: "STRING_VALUE", // required
 *   content: "STRING_VALUE",
 *   metadata: { // MetadataMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   metadataMode: "REPLACE" || "MERGE",
 *   actorId: "STRING_VALUE",
 *   strategyName: "STRING_VALUE",
 * };
 * const command = new UpdateMemoryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMemoryOutput
 * //   memory: { // Memory
 * //     memoryId: "STRING_VALUE", // required
 * //     memoryType: "SEMANTIC" || "SUMMARY" || "CUSTOM", // required
 * //     strategyName: "STRING_VALUE",
 * //     content: "STRING_VALUE", // required
 * //     systemMetadata: { // SystemMetadata
 * //       actorId: "STRING_VALUE",
 * //       sessionId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //     metadata: { // MetadataMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateMemoryCommandInput - {@link UpdateMemoryCommandInput}
 * @returns {@link UpdateMemoryCommandOutput}
 * @see {@link UpdateMemoryCommandInput} for command's `input` shape.
 * @see {@link UpdateMemoryCommandOutput} for command's `response` shape.
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
export class UpdateMemoryCommand extends command<UpdateMemoryCommandInput, UpdateMemoryCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMemory",
  UpdateMemory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMemoryInput;
      output: UpdateMemoryOutput;
    };
    sdk: {
      input: UpdateMemoryCommandInput;
      output: UpdateMemoryCommandOutput;
    };
  };
}
