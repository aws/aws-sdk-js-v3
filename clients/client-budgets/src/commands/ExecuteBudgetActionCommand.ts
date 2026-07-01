// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExecuteBudgetActionRequest, ExecuteBudgetActionResponse } from "../models/models_0";
import { ExecuteBudgetAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExecuteBudgetActionCommand}.
 */
export interface ExecuteBudgetActionCommandInput extends ExecuteBudgetActionRequest {}
/**
 * @public
 *
 * The output of {@link ExecuteBudgetActionCommand}.
 */
export interface ExecuteBudgetActionCommandOutput extends ExecuteBudgetActionResponse, __MetadataBearer {}

/**
 * <p>
 *          Executes a budget action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, ExecuteBudgetActionCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, ExecuteBudgetActionCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * // import type { BudgetsClientConfig } from "@aws-sdk/client-budgets";
 * const config = {}; // type is BudgetsClientConfig
 * const client = new BudgetsClient(config);
 * const input = { // ExecuteBudgetActionRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   ActionId: "STRING_VALUE", // required
 *   ExecutionType: "APPROVE_BUDGET_ACTION" || "RETRY_BUDGET_ACTION" || "REVERSE_BUDGET_ACTION" || "RESET_BUDGET_ACTION", // required
 * };
 * const command = new ExecuteBudgetActionCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteBudgetActionResponse
 * //   AccountId: "STRING_VALUE", // required
 * //   BudgetName: "STRING_VALUE", // required
 * //   ActionId: "STRING_VALUE", // required
 * //   ExecutionType: "APPROVE_BUDGET_ACTION" || "RETRY_BUDGET_ACTION" || "REVERSE_BUDGET_ACTION" || "RESET_BUDGET_ACTION", // required
 * // };
 *
 * ```
 *
 * @param ExecuteBudgetActionCommandInput - {@link ExecuteBudgetActionCommandInput}
 * @returns {@link ExecuteBudgetActionCommandOutput}
 * @see {@link ExecuteBudgetActionCommandInput} for command's `input` shape.
 * @see {@link ExecuteBudgetActionCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>We can’t locate the resource that you specified.</p>
 *
 * @throws {@link ResourceLockedException} (client fault)
 *  <p>The request was received and recognized by the server, but the server rejected that
 *       particular method for the requested resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of API requests has exceeded the maximum allowed API request throttling limit
 *       for the account.</p>
 *
 * @throws {@link BudgetsServiceException}
 * <p>Base exception class for all service exceptions from Budgets service.</p>
 *
 *
 * @public
 */
export class ExecuteBudgetActionCommand extends command<ExecuteBudgetActionCommandInput, ExecuteBudgetActionCommandOutput>(
  _ep0,
  _mw0,
  "ExecuteBudgetAction",
  ExecuteBudgetAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteBudgetActionRequest;
      output: ExecuteBudgetActionResponse;
    };
    sdk: {
      input: ExecuteBudgetActionCommandInput;
      output: ExecuteBudgetActionCommandOutput;
    };
  };
}
