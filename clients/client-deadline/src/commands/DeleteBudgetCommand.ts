// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBudgetRequest, DeleteBudgetResponse } from "../models/models_0";
import { de_DeleteBudgetCommand, se_DeleteBudgetCommand } from "../protocols/Aws_restJson1";

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
 * <p>Deletes a budget.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteBudgetCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteBudgetCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
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
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 * @public
 */
export class DeleteBudgetCommand extends $Command
  .classBuilder<
    DeleteBudgetCommandInput,
    DeleteBudgetCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "DeleteBudget", {})
  .n("DeadlineClient", "DeleteBudgetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBudgetCommand)
  .de(de_DeleteBudgetCommand)
  .build() {}
