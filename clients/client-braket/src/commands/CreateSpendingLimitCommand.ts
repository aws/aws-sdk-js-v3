// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateSpendingLimitRequest, CreateSpendingLimitResponse } from "../models/models_0";
import { CreateSpendingLimit } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSpendingLimitCommand}.
 */
export interface CreateSpendingLimitCommandInput extends CreateSpendingLimitRequest {}
/**
 * @public
 *
 * The output of {@link CreateSpendingLimitCommand}.
 */
export interface CreateSpendingLimitCommandOutput extends CreateSpendingLimitResponse, __MetadataBearer {}

/**
 * <p>Creates a spending limit for a specified quantum device. Spending limits help you control costs by setting maximum amounts that can be spent on quantum computing tasks within a specified time period. Simulators do not support spending limits.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, CreateSpendingLimitCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, CreateSpendingLimitCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * // import type { BraketClientConfig } from "@aws-sdk/client-braket";
 * const config = {}; // type is BraketClientConfig
 * const client = new BraketClient(config);
 * const input = { // CreateSpendingLimitRequest
 *   clientToken: "STRING_VALUE", // required
 *   deviceArn: "STRING_VALUE", // required
 *   spendingLimit: "STRING_VALUE", // required
 *   timePeriod: { // TimePeriod
 *     startAt: new Date("TIMESTAMP"), // required
 *     endAt: new Date("TIMESTAMP"), // required
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSpendingLimitCommand(input);
 * const response = await client.send(command);
 * // { // CreateSpendingLimitResponse
 * //   spendingLimitArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateSpendingLimitCommandInput - {@link CreateSpendingLimitCommandInput}
 * @returns {@link CreateSpendingLimitCommandOutput}
 * @see {@link CreateSpendingLimitCommandInput} for command's `input` shape.
 * @see {@link CreateSpendingLimitCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link DeviceRetiredException} (client fault)
 *  <p>The specified device has been retired.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request failed because of an unknown error.</p>
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
export class CreateSpendingLimitCommand extends $Command
  .classBuilder<
    CreateSpendingLimitCommandInput,
    CreateSpendingLimitCommandOutput,
    BraketClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BraketClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Braket", "CreateSpendingLimit", {})
  .n("BraketClient", "CreateSpendingLimitCommand")
  .sc(CreateSpendingLimit)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSpendingLimitRequest;
      output: CreateSpendingLimitResponse;
    };
    sdk: {
      input: CreateSpendingLimitCommandInput;
      output: CreateSpendingLimitCommandOutput;
    };
  };
}
