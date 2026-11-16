// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEventInput, DeleteEventOutput } from "../models/models_0";
import { DeleteEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEventCommand}.
 */
export interface DeleteEventCommandInput extends DeleteEventInput {}
/**
 * @public
 *
 * The output of {@link DeleteEventCommand}.
 */
export interface DeleteEventCommandOutput extends DeleteEventOutput, __MetadataBearer {}

/**
 * <p>Deletes an event. Deletion can't be undone. The event stops appearing in <code>SearchEvents</code> results shortly after you delete it. Deleting an event that doesn't exist returns <code>ResourceNotFoundException</code>.</p> <p>Deleting an event doesn't delete the memories derived from it, because a memory can combine content from several events. To remove them, use <code>DeleteMemory</code>.</p> <p>If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with <code>AccessDeniedException</code> if you aren't allowed to use the key, and with <code>ThrottlingException</code> if AWS KMS throttles the request. It fails with <code>ValidationException</code> if the key is disabled, pending deletion, or deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchMemoryClient, DeleteEventCommand } from "@aws-sdk/client-opensearchmemory"; // ES Modules import
 * // const { OpenSearchMemoryClient, DeleteEventCommand } = require("@aws-sdk/client-opensearchmemory"); // CommonJS import
 * // import type { OpenSearchMemoryClientConfig } from "@aws-sdk/client-opensearchmemory";
 * const config = {}; // type is OpenSearchMemoryClientConfig
 * const client = new OpenSearchMemoryClient(config);
 * const input = { // DeleteEventInput
 *   spaceId: "STRING_VALUE", // required
 *   eventId: "STRING_VALUE", // required
 *   actorId: "STRING_VALUE",
 *   sessionId: "STRING_VALUE",
 * };
 * const command = new DeleteEventCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEventOutput
 * //   eventId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteEventCommandInput - {@link DeleteEventCommandInput}
 * @returns {@link DeleteEventCommandOutput}
 * @see {@link DeleteEventCommandInput} for command's `input` shape.
 * @see {@link DeleteEventCommandOutput} for command's `response` shape.
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
export class DeleteEventCommand extends command<DeleteEventCommandInput, DeleteEventCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEvent",
  DeleteEvent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventInput;
      output: DeleteEventOutput;
    };
    sdk: {
      input: DeleteEventCommandInput;
      output: DeleteEventCommandOutput;
    };
  };
}
