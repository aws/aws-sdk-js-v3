// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchJobsRequest, SearchJobsResponse } from "../models/models_0";
import { SearchJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchJobsCommand}.
 */
export interface SearchJobsCommandInput extends SearchJobsRequest {}
/**
 * @public
 *
 * The output of {@link SearchJobsCommand}.
 */
export interface SearchJobsCommandOutput extends SearchJobsResponse, __MetadataBearer {}

/**
 * Searches for Amazon Braket hybrid jobs that match the specified filter values.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, SearchJobsCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, SearchJobsCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * // import type { BraketClientConfig } from "@aws-sdk/client-braket";
 * const config = {}; // type is BraketClientConfig
 * const client = new BraketClient(config);
 * const input = { // SearchJobsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // SearchJobsFilterList // required
 *     { // SearchJobsFilter
 *       name: "STRING_VALUE", // required
 *       values: [ // String256List // required
 *         "STRING_VALUE",
 *       ],
 *       operator: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new SearchJobsCommand(input);
 * const response = await client.send(command);
 * // { // SearchJobsResponse
 * //   jobs: [ // JobSummaryList // required
 * //     { // JobSummary
 * //       status: "STRING_VALUE", // required
 * //       jobArn: "STRING_VALUE", // required
 * //       jobName: "STRING_VALUE", // required
 * //       device: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       startedAt: new Date("TIMESTAMP"),
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
 * @param SearchJobsCommandInput - {@link SearchJobsCommandInput}
 * @returns {@link SearchJobsCommandOutput}
 * @see {@link SearchJobsCommandInput} for command's `input` shape.
 * @see {@link SearchJobsCommandOutput} for command's `response` shape.
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
export class SearchJobsCommand extends command<SearchJobsCommandInput, SearchJobsCommandOutput>(
  _ep0,
  _mw0,
  "SearchJobs",
  SearchJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchJobsRequest;
      output: SearchJobsResponse;
    };
    sdk: {
      input: SearchJobsCommandInput;
      output: SearchJobsCommandOutput;
    };
  };
}
