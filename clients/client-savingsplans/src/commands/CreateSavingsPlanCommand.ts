// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSavingsPlanRequest, CreateSavingsPlanResponse } from "../models/models_0";
import { de_CreateSavingsPlanCommand, se_CreateSavingsPlanCommand } from "../protocols/Aws_restJson1";
import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSavingsPlanCommand}.
 */
export interface CreateSavingsPlanCommandInput extends CreateSavingsPlanRequest {}
/**
 * @public
 *
 * The output of {@link CreateSavingsPlanCommand}.
 */
export interface CreateSavingsPlanCommandOutput extends CreateSavingsPlanResponse, __MetadataBearer {}

/**
 * <p>Creates a Savings Plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, CreateSavingsPlanCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, CreateSavingsPlanCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SavingsplansClient(config);
 * const input = { // CreateSavingsPlanRequest
 *   savingsPlanOfferingId: "STRING_VALUE", // required
 *   commitment: "STRING_VALUE", // required
 *   upfrontPaymentAmount: "STRING_VALUE",
 *   purchaseTime: new Date("TIMESTAMP"),
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSavingsPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateSavingsPlanResponse
 * //   savingsPlanId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSavingsPlanCommandInput - {@link CreateSavingsPlanCommandInput}
 * @returns {@link CreateSavingsPlanCommandOutput}
 * @see {@link CreateSavingsPlanCommandInput} for command's `input` shape.
 * @see {@link CreateSavingsPlanCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateSavingsPlanCommand extends $Command
  .classBuilder<
    CreateSavingsPlanCommandInput,
    CreateSavingsPlanCommandOutput,
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
  .s("AWSSavingsPlan", "CreateSavingsPlan", {})
  .n("SavingsplansClient", "CreateSavingsPlanCommand")
  .f(void 0, void 0)
  .ser(se_CreateSavingsPlanCommand)
  .de(de_CreateSavingsPlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSavingsPlanRequest;
      output: CreateSavingsPlanResponse;
    };
    sdk: {
      input: CreateSavingsPlanCommandInput;
      output: CreateSavingsPlanCommandOutput;
    };
  };
}
