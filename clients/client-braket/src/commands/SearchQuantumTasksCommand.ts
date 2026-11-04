// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchQuantumTasksRequest, SearchQuantumTasksResponse } from "../models/models_0";
import { SearchQuantumTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Searches for tasks that match the specified filter values.
 *
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The request failed because of an unknown error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The API throttling rate limit is exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input request failed to satisfy constraints expected by Amazon Braket.
 *
 * @throws {@link BraketServiceException}
 *
 * Base exception class for all service exceptions from Braket service.
 *
 * @public
 */
export class SearchQuantumTasksCommand extends command<SearchQuantumTasksCommandInput, SearchQuantumTasksCommandOutput>(
  _ep0,
  _mw0,
  "SearchQuantumTasks",
  SearchQuantumTasks$
) {
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
