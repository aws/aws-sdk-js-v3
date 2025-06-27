// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ReturnSavingsPlanRequest, ReturnSavingsPlanResponse } from "../models/models_0";
import { de_ReturnSavingsPlanCommand, se_ReturnSavingsPlanCommand } from "../protocols/Aws_restJson1";
import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReturnSavingsPlanCommand}.
 */
export interface ReturnSavingsPlanCommandInput extends ReturnSavingsPlanRequest {}
/**
 * @public
 *
 * The output of {@link ReturnSavingsPlanCommand}.
 */
export interface ReturnSavingsPlanCommandOutput extends ReturnSavingsPlanResponse, __MetadataBearer {}

/**
 * <p>Returns the specified Savings Plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, ReturnSavingsPlanCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, ReturnSavingsPlanCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const input = { // ReturnSavingsPlanRequest
 *   savingsPlanId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new ReturnSavingsPlanCommand(input);
 * const response = await client.send(command);
 * // { // ReturnSavingsPlanResponse
 * //   savingsPlanId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReturnSavingsPlanCommandInput - {@link ReturnSavingsPlanCommandInput}
 * @returns {@link ReturnSavingsPlanCommandOutput}
 * @see {@link ReturnSavingsPlanCommandInput} for command's `input` shape.
 * @see {@link ReturnSavingsPlanCommandOutput} for command's `response` shape.
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
export class ReturnSavingsPlanCommand extends $Command
  .classBuilder<
    ReturnSavingsPlanCommandInput,
    ReturnSavingsPlanCommandOutput,
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
  .s("AWSSavingsPlan", "ReturnSavingsPlan", {})
  .n("SavingsplansClient", "ReturnSavingsPlanCommand")
  .f(void 0, void 0)
  .ser(se_ReturnSavingsPlanCommand)
  .de(de_ReturnSavingsPlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReturnSavingsPlanRequest;
      output: ReturnSavingsPlanResponse;
    };
    sdk: {
      input: ReturnSavingsPlanCommandInput;
      output: ReturnSavingsPlanCommandOutput;
    };
  };
}
