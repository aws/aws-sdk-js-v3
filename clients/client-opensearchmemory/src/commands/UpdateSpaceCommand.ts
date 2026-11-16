// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { UpdateSpaceRequest, UpdateSpaceResponse } from "../models/models_0";
import { UpdateSpace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSpaceCommand}.
 */
export interface UpdateSpaceCommandInput extends UpdateSpaceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSpaceCommand}.
 */
export interface UpdateSpaceCommandOutput extends UpdateSpaceResponse, __MetadataBearer {}

/**
 * <p>Updates a space's memory strategies, retention settings, or extraction model. Supply only the fields to change. Omitted fields keep their current values.</p> <p>If the request changes the set of strategies, a strategy's configuration, a retention setting, or the extraction model, the space moves to <code>UPDATING</code>. When the change is complete, the space returns to <code>ACTIVE</code>, or moves to <code>FAILED</code> if the change can't be applied. While the space is <code>UPDATING</code>, <code>GetSpace</code> returns the previous configuration. A request that only changes strategy descriptions or repeats the values the space has stored is applied immediately and doesn't change the status. Sending a retention value that the space never set also moves the space to <code>UPDATING</code>, even one that matches the behavior without it, such as 90 for <code>eventExpiryDays</code> or 0 for <code>memoryExpiryDays</code>. A space that is <code>CREATING</code>, <code>UPDATING</code>, or <code>DELETING</code> can't be updated: the request fails with <code>ConflictException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchMemoryClient, UpdateSpaceCommand } from "@aws-sdk/client-opensearchmemory"; // ES Modules import
 * // const { OpenSearchMemoryClient, UpdateSpaceCommand } = require("@aws-sdk/client-opensearchmemory"); // CommonJS import
 * // import type { OpenSearchMemoryClientConfig } from "@aws-sdk/client-opensearchmemory";
 * const config = {}; // type is OpenSearchMemoryClientConfig
 * const client = new OpenSearchMemoryClient(config);
 * const input = { // UpdateSpaceRequest
 *   spaceId: "STRING_VALUE", // required
 *   memoryStrategies: [ // MemoryStrategyList
 *     { // MemoryStrategy
 *       type: "SEMANTIC" || "SUMMARY" || "CUSTOM", // required
 *       name: "STRING_VALUE",
 *       description: "STRING_VALUE",
 *       configuration: { // MemoryStrategyConfiguration
 *         extractionPrompt: "STRING_VALUE",
 *         extractEveryNMessages: Number("int"),
 *         extractEveryNTokens: Number("int"),
 *         idleTimeoutSeconds: Number("int"),
 *         extractionSeedTopK: Number("int"),
 *         extractionSeedRecentN: Number("int"),
 *         consolidationEnabled: true || false,
 *       },
 *     },
 *   ],
 *   eventExpiryDays: Number("int"),
 *   memoryExpiryDays: Number("int"),
 *   extractionModelId: "STRING_VALUE",
 * };
 * const command = new UpdateSpaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSpaceResponse
 * //   spaceId: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "DELETED" || "FAILED", // required
 * // };
 *
 * ```
 *
 * @param UpdateSpaceCommandInput - {@link UpdateSpaceCommandInput}
 * @returns {@link UpdateSpaceCommandOutput}
 * @see {@link UpdateSpaceCommandInput} for command's `input` shape.
 * @see {@link UpdateSpaceCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a quota, such as the number of spaces in your account or the number of strategies in a space.</p>
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
export class UpdateSpaceCommand extends command<UpdateSpaceCommandInput, UpdateSpaceCommandOutput>(
  _ep1,
  _mw0,
  "UpdateSpace",
  UpdateSpace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSpaceRequest;
      output: UpdateSpaceResponse;
    };
    sdk: {
      input: UpdateSpaceCommandInput;
      output: UpdateSpaceCommandOutput;
    };
  };
}
