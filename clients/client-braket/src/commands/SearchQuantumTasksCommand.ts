// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchQuantumTasksRequest, SearchQuantumTasksResponse } from "../models/models_0";
import { SearchQuantumTasks } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchQuantumTasksCommand}.
 */
export interface SearchQuantumTasksCommandInput extends SearchQuantumTasksRequest {}
/**
 * @public
 *
 * The output of {@link SearchQuantumTasksCommand}.
 */
export interface SearchQuantumTasksCommandOutput extends SearchQuantumTasksResponse, __MetadataBearer {}

/**
 * <p>Searches for tasks that match the specified filter values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, SearchQuantumTasksCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, SearchQuantumTasksCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * // import type { BraketClientConfig } from "@aws-sdk/client-braket";
 * const config = {}; // type is BraketClientConfig
 * const client = new BraketClient(config);
 * const input = { // SearchQuantumTasksRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // SearchQuantumTasksFilterList // required
 *     { // SearchQuantumTasksFilter
 *       name: "STRING_VALUE", // required
 *       values: [ // String256List // required
 *         "STRING_VALUE",
 *       ],
 *       operator: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new SearchQuantumTasksCommand(input);
 * const response = await client.send(command);
 * // { // SearchQuantumTasksResponse
 * //   quantumTasks: [ // QuantumTaskSummaryList // required
 * //     { // QuantumTaskSummary
 * //       quantumTaskArn: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       deviceArn: "STRING_VALUE", // required
 * //       shots: Number("long"), // required
 * //       outputS3Bucket: "STRING_VALUE", // required
 * //       outputS3Directory: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       endedAt: new Date("TIMESTAMP"),
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
 * @param SearchQuantumTasksCommandInput - {@link SearchQuantumTasksCommandInput}
 * @returns {@link SearchQuantumTasksCommandOutput}
 * @see {@link SearchQuantumTasksCommandInput} for command's `input` shape.
 * @see {@link SearchQuantumTasksCommandOutput} for command's `response` shape.
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
export class SearchQuantumTasksCommand extends $Command
  .classBuilder<
    SearchQuantumTasksCommandInput,
    SearchQuantumTasksCommandOutput,
    BraketClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BraketClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Braket", "SearchQuantumTasks", {})
  .n("BraketClient", "SearchQuantumTasksCommand")
  .sc(SearchQuantumTasks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchQuantumTasksRequest;
      output: SearchQuantumTasksResponse;
    };
    sdk: {
      input: SearchQuantumTasksCommandInput;
      output: SearchQuantumTasksCommandOutput;
    };
  };
}
