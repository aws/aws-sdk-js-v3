// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBudgetRequest, DeleteBudgetResponse } from "../models/models_0";
import { DeleteBudget$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBudgetCommand}.
 */
export interface DeleteBudgetCommandInput extends DeleteBudgetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBudgetCommand}.
 */
export interface DeleteBudgetCommandOutput extends DeleteBudgetResponse, __MetadataBearer {}

/**
 * Deletes a budget.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteBudgetCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteBudgetCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // DeleteBudgetRequest
 *   farmId: "STRING_VALUE", // required
 *   budgetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBudgetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBudgetCommandInput - {@link DeleteBudgetCommandInput}
 * @returns {@link DeleteBudgetCommandOutput}
 * @see {@link DeleteBudgetCommandInput} for command's `input` shape.
 * @see {@link DeleteBudgetCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You don't have permission to perform the action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Deadline Cloud can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Your request exceeded a request rate quota.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class DeleteBudgetCommand extends command<DeleteBudgetCommandInput, DeleteBudgetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBudget",
  DeleteBudget$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBudgetRequest;
      output: {};
    };
    sdk: {
      input: DeleteBudgetCommandInput;
      output: DeleteBudgetCommandOutput;
    };
  };
}
