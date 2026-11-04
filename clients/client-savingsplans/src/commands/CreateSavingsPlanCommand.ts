// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSavingsPlanRequest, CreateSavingsPlanResponse } from "../models/models_0";
import { CreateSavingsPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a Savings Plan.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, CreateSavingsPlanCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, CreateSavingsPlanCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * // import type { SavingsplansClientConfig } from "@aws-sdk/client-savingsplans";
 * const config = {}; // type is SavingsplansClientConfig
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
 *
 * An unexpected error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A service quota has been exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the input parameters is not valid.
 *
 * @throws {@link SavingsplansServiceException}
 *
 * Base exception class for all service exceptions from Savingsplans service.
 *
 * @public
 */
export class CreateSavingsPlanCommand extends command<CreateSavingsPlanCommandInput, CreateSavingsPlanCommandOutput>(
  _ep0,
  _mw0,
  "CreateSavingsPlan",
  CreateSavingsPlan$
) {
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
