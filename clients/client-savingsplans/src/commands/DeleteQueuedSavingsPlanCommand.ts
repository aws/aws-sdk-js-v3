// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteQueuedSavingsPlanRequest, DeleteQueuedSavingsPlanResponse } from "../models/models_0";
import { de_DeleteQueuedSavingsPlanCommand, se_DeleteQueuedSavingsPlanCommand } from "../protocols/Aws_restJson1";
import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSavingsPlan", "DeleteQueuedSavingsPlan", {})
  .n("SavingsplansClient", "DeleteQueuedSavingsPlanCommand")
  .f(void 0, void 0)
  .ser(se_DeleteQueuedSavingsPlanCommand)
  .de(de_DeleteQueuedSavingsPlanCommand)
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
