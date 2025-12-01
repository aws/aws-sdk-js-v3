// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteBudgetRequest, DeleteBudgetResponse } from "../models/models_0";
import { DeleteBudget } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a budget. You can delete your budget at any time.</p>
 *          <important>
 *             <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DeleteBudgetCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DeleteBudgetCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * // import type { BudgetsClientConfig } from "@aws-sdk/client-budgets";
 * const config = {}; // type is BudgetsClientConfig
 * const client = new BudgetsClient(config);
 * const input = { // DeleteBudgetRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
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
export class DeleteBudgetCommand extends $Command
  .classBuilder<
    DeleteBudgetCommandInput,
    DeleteBudgetCommandOutput,
    BudgetsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BudgetsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBudgetServiceGateway", "DeleteBudget", {})
  .n("BudgetsClient", "DeleteBudgetCommand")
  .sc(DeleteBudget)
  .build() {
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
