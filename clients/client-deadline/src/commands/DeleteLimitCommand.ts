// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLimitRequest, DeleteLimitResponse } from "../models/models_0";
import { DeleteLimit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLimitCommand}.
 */
export interface DeleteLimitCommandInput extends DeleteLimitRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLimitCommand}.
 */
export interface DeleteLimitCommandOutput extends DeleteLimitResponse, __MetadataBearer {}

/**
 * <p>Removes a limit from the specified farm. Before you delete a limit you must use the <code>DeleteQueueLimitAssociation</code> operation to remove the association with any queues. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteLimitCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteLimitCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // DeleteLimitRequest
 *   farmId: "STRING_VALUE", // required
 *   limitId: "STRING_VALUE", // required
 * };
 * const command = new DeleteLimitCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLimitCommandInput - {@link DeleteLimitCommandInput}
 * @returns {@link DeleteLimitCommandOutput}
 * @see {@link DeleteLimitCommandInput} for command's `input` shape.
 * @see {@link DeleteLimitCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class DeleteLimitCommand extends command<DeleteLimitCommandInput, DeleteLimitCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLimit",
  DeleteLimit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLimitRequest;
      output: {};
    };
    sdk: {
      input: DeleteLimitCommandInput;
      output: DeleteLimitCommandOutput;
    };
  };
}
