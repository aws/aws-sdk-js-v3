// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchSampleQueriesRequest, SearchSampleQueriesResponse } from "../models/models_0";
import { SearchSampleQueries } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchSampleQueriesCommand}.
 */
export interface SearchSampleQueriesCommandInput extends SearchSampleQueriesRequest {}
/**
 * @public
 *
 * The output of {@link SearchSampleQueriesCommand}.
 */
export interface SearchSampleQueriesCommandOutput extends SearchSampleQueriesResponse, __MetadataBearer {}

/**
 * <p>
 *          Searches sample queries and returns a list of sample queries that are sorted by relevance.
 *          To search for sample queries, provide a natural language <code>SearchPhrase</code> in English.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, SearchSampleQueriesCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, SearchSampleQueriesCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // SearchSampleQueriesRequest
 *   SearchPhrase: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchSampleQueriesCommand(input);
 * const response = await client.send(command);
 * // { // SearchSampleQueriesResponse
 * //   SearchResults: [ // SearchSampleQueriesSearchResults
 * //     { // SearchSampleQueriesSearchResult
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       SQL: "STRING_VALUE",
 * //       Relevance: Number("float"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchSampleQueriesCommandInput - {@link SearchSampleQueriesCommandInput}
 * @returns {@link SearchSampleQueriesCommandOutput}
 * @see {@link SearchSampleQueriesCommandInput} for command's `input` shape.
 * @see {@link SearchSampleQueriesCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class SearchSampleQueriesCommand extends $Command
  .classBuilder<
    SearchSampleQueriesCommandInput,
    SearchSampleQueriesCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "SearchSampleQueries", {})
  .n("CloudTrailClient", "SearchSampleQueriesCommand")
  .sc(SearchSampleQueries)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchSampleQueriesRequest;
      output: SearchSampleQueriesResponse;
    };
    sdk: {
      input: SearchSampleQueriesCommandInput;
      output: SearchSampleQueriesCommandOutput;
    };
  };
}
