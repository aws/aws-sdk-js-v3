// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteQueuedSavingsPlanRequest, DeleteQueuedSavingsPlanResponse } from "../models/models_0";
import type { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";
import { DeleteQueuedSavingsPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteQueuedSavingsPlanCommand}.
 */
export interface DeleteQueuedSavingsPlanCommandInput extends DeleteQueuedSavingsPlanRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQueuedSavingsPlanCommand}.
 */
export interface DeleteQueuedSavingsPlanCommandOutput extends DeleteQueuedSavingsPlanResponse, __MetadataBearer {}

/**
 * <p>Deletes the queued purchase for the specified Savings Plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DeleteQueuedSavingsPlanCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DeleteQueuedSavingsPlanCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * // import type { SavingsplansClientConfig } from "@aws-sdk/client-savingsplans";
 * const config = {}; // type is SavingsplansClientConfig
 * const client = new SavingsplansClient(config);
 * const input = { // DeleteQueuedSavingsPlanRequest
 *   savingsPlanId: "STRING_VALUE", // required
 * };
 * const command = new DeleteQueuedSavingsPlanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQueuedSavingsPlanCommandInput - {@link DeleteQueuedSavingsPlanCommandInput}
 * @returns {@link DeleteQueuedSavingsPlanCommandOutput}
 * @see {@link DeleteQueuedSavingsPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteQueuedSavingsPlanCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for SavingsplansClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota has been exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters is not valid.</p>
 *
 * @throws {@link SavingsplansServiceException}
 * <p>Base exception class for all service exceptions from Savingsplans service.</p>
 *
 *
 * @public
 */
export class DeleteQueuedSavingsPlanCommand extends $Command
  .classBuilder<
    DeleteQueuedSavingsPlanCommandInput,
    DeleteQueuedSavingsPlanCommandOutput,
    SavingsplansClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SavingsplansClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSavingsPlan", "DeleteQueuedSavingsPlan", {})
  .n("SavingsplansClient", "DeleteQueuedSavingsPlanCommand")
  .sc(DeleteQueuedSavingsPlan$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQueuedSavingsPlanRequest;
      output: {};
    };
    sdk: {
      input: DeleteQueuedSavingsPlanCommandInput;
      output: DeleteQueuedSavingsPlanCommandOutput;
    };
  };
}
