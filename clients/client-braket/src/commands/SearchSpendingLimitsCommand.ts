// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchSpendingLimitsRequest, SearchSpendingLimitsResponse } from "../models/models_0";
import { SearchSpendingLimits } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchSpendingLimitsCommand}.
 */
export interface SearchSpendingLimitsCommandInput extends SearchSpendingLimitsRequest {}
/**
 * @public
 *
 * The output of {@link SearchSpendingLimitsCommand}.
 */
export interface SearchSpendingLimitsCommandOutput extends SearchSpendingLimitsResponse, __MetadataBearer {}

/**
 * <p>Searches and lists spending limits based on specified filters. This operation supports pagination and allows filtering by various criteria to find specific spending limits. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, SearchSpendingLimitsCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, SearchSpendingLimitsCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * // import type { BraketClientConfig } from "@aws-sdk/client-braket";
 * const config = {}; // type is BraketClientConfig
 * const client = new BraketClient(config);
 * const input = { // SearchSpendingLimitsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // SearchSpendingLimitsFilterList
 *     { // SearchSpendingLimitsFilter
 *       name: "STRING_VALUE", // required
 *       values: [ // String256List // required
 *         "STRING_VALUE",
 *       ],
 *       operator: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new SearchSpendingLimitsCommand(input);
 * const response = await client.send(command);
 * // { // SearchSpendingLimitsResponse
 * //   spendingLimits: [ // SpendingLimitSummaryList // required
 * //     { // SpendingLimitSummary
 * //       spendingLimitArn: "STRING_VALUE", // required
 * //       deviceArn: "STRING_VALUE", // required
 * //       timePeriod: { // TimePeriod
 * //         startAt: new Date("TIMESTAMP"), // required
 * //         endAt: new Date("TIMESTAMP"), // required
 * //       },
 * //       spendingLimit: "STRING_VALUE", // required
 * //       queuedSpend: "STRING_VALUE", // required
 * //       totalSpend: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchSpendingLimitsCommandInput - {@link SearchSpendingLimitsCommandInput}
 * @returns {@link SearchSpendingLimitsCommandOutput}
 * @see {@link SearchSpendingLimitsCommandInput} for command's `input` shape.
 * @see {@link SearchSpendingLimitsCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
export class SearchSpendingLimitsCommand extends $Command
  .classBuilder<
    SearchSpendingLimitsCommandInput,
    SearchSpendingLimitsCommandOutput,
    BraketClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BraketClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Braket", "SearchSpendingLimits", {})
  .n("BraketClient", "SearchSpendingLimitsCommand")
  .sc(SearchSpendingLimits)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchSpendingLimitsRequest;
      output: SearchSpendingLimitsResponse;
    };
    sdk: {
      input: SearchSpendingLimitsCommandInput;
      output: SearchSpendingLimitsCommandOutput;
    };
  };
}
