// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMemoryInput, CreateMemoryOutput } from "../models/models_0";
import { CreateMemory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMemoryCommand}.
 */
export interface CreateMemoryCommandInput extends CreateMemoryInput {}
/**
 * @public
 *
 * The output of {@link CreateMemoryCommand}.
 */
export interface CreateMemoryCommandOutput extends CreateMemoryOutput, __MetadataBearer {}

/**
 * <p>Writes a memory that you have already formed, without extracting it from events. The service embeds the text as given and stores it as a memory of the named strategy. To have the service extract memories from conversation turns, use <code>CreateEvent</code> instead.</p> <p>The operation returns before the memory is searchable. The returned <code>memoryId</code> is final, but until the memory is indexed, <code>GetMemory</code>, <code>UpdateMemory</code>, and <code>DeleteMemory</code> return <code>ResourceNotFoundException</code> for it.</p> <p>If the request would exceed the service's rate for embedding requests, it fails with <code>ThrottlingException</code>. Retry with exponential backoff.</p> <p>If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with <code>AccessDeniedException</code> if you aren't allowed to use the key, and with <code>ThrottlingException</code> if AWS KMS throttles the request. It fails with <code>ValidationException</code> if the key is disabled, pending deletion, or deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchMemoryClient, CreateMemoryCommand } from "@aws-sdk/client-opensearchmemory"; // ES Modules import
 * // const { OpenSearchMemoryClient, CreateMemoryCommand } = require("@aws-sdk/client-opensearchmemory"); // CommonJS import
 * // import type { OpenSearchMemoryClientConfig } from "@aws-sdk/client-opensearchmemory";
 * const config = {}; // type is OpenSearchMemoryClientConfig
 * const client = new OpenSearchMemoryClient(config);
 * const input = { // CreateMemoryInput
 *   spaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   content: "STRING_VALUE", // required
 *   actorId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE",
 *   metadata: { // MetadataMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateMemoryCommand(input);
 * const response = await client.send(command);
 * // { // CreateMemoryOutput
 * //   memory: { // CreateMemoryDetail
 * //     memoryId: "STRING_VALUE", // required
 * //     spaceId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     actorId: "STRING_VALUE", // required
 * //     sessionId: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMemoryCommandInput - {@link CreateMemoryCommandInput}
 * @returns {@link CreateMemoryCommandOutput}
 * @see {@link CreateMemoryCommandInput} for command's `input` shape.
 * @see {@link CreateMemoryCommandOutput} for command's `response` shape.
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
export class CreateMemoryCommand extends command<CreateMemoryCommandInput, CreateMemoryCommandOutput>(
  _ep0,
  _mw0,
  "CreateMemory",
  CreateMemory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMemoryInput;
      output: CreateMemoryOutput;
    };
    sdk: {
      input: CreateMemoryCommandInput;
      output: CreateMemoryCommandOutput;
    };
  };
}
