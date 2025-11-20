// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSpendingLimitRequest, UpdateSpendingLimitResponse } from "../models/models_0";
import { UpdateSpendingLimit } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSpendingLimitCommand}.
 */
export interface UpdateSpendingLimitCommandInput extends UpdateSpendingLimitRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSpendingLimitCommand}.
 */
export interface UpdateSpendingLimitCommandOutput extends UpdateSpendingLimitResponse, __MetadataBearer {}

/**
 * <p>Updates an existing spending limit. You can modify the spending amount or time period. Changes take effect immediately.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, UpdateSpendingLimitCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, UpdateSpendingLimitCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * // import type { BraketClientConfig } from "@aws-sdk/client-braket";
 * const config = {}; // type is BraketClientConfig
 * const client = new BraketClient(config);
 * const input = { // UpdateSpendingLimitRequest
 *   spendingLimitArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 *   spendingLimit: "STRING_VALUE",
 *   timePeriod: { // TimePeriod
 *     startAt: new Date("TIMESTAMP"), // required
 *     endAt: new Date("TIMESTAMP"), // required
 *   },
 * };
 * const command = new UpdateSpendingLimitCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSpendingLimitCommandInput - {@link UpdateSpendingLimitCommandInput}
 * @returns {@link UpdateSpendingLimitCommandOutput}
 * @see {@link UpdateSpendingLimitCommandInput} for command's `input` shape.
 * @see {@link UpdateSpendingLimitCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request failed because of an unknown error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The API throttling rate limit is exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input request failed to satisfy constraints expected by Amazon Braket.</p>
 *
 * @throws {@link BraketServiceException}
 * <p>Base exception class for all service exceptions from Braket service.</p>
 *
 *
 * @public
 */
export class UpdateSpendingLimitCommand extends $Command
  .classBuilder<
    UpdateSpendingLimitCommandInput,
    UpdateSpendingLimitCommandOutput,
    BraketClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BraketClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Braket", "UpdateSpendingLimit", {})
  .n("BraketClient", "UpdateSpendingLimitCommand")
  .sc(UpdateSpendingLimit)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSpendingLimitRequest;
      output: {};
    };
    sdk: {
      input: UpdateSpendingLimitCommandInput;
      output: UpdateSpendingLimitCommandOutput;
    };
  };
}
