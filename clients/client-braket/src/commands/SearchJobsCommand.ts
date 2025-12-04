// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchJobsRequest, SearchJobsResponse } from "../models/models_0";
import { SearchJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Searches for Amazon Braket hybrid jobs that match the specified filter values.</p>
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
export class SearchJobsCommand extends $Command
  .classBuilder<
    SearchJobsCommandInput,
    SearchJobsCommandOutput,
    BraketClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BraketClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Braket", "SearchJobs", {})
  .n("BraketClient", "SearchJobsCommand")
  .sc(SearchJobs)
  .build() {
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
