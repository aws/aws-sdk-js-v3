// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDirectQueryDataSourcesRequest, ListDirectQueryDataSourcesResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { ListDirectQueryDataSources } from "../schemas/schemas_12_Add";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDirectQueryDataSourcesCommand}.
 */
export interface ListDirectQueryDataSourcesCommandInput extends ListDirectQueryDataSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListDirectQueryDataSourcesCommand}.
 */
export interface ListDirectQueryDataSourcesCommandOutput extends ListDirectQueryDataSourcesResponse, __MetadataBearer {}

/**
 * <p>
 *    Lists an inventory of all the direct query data sources that you
 *    have configured within Amazon OpenSearch Service.
 *   </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListDirectQueryDataSourcesCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListDirectQueryDataSourcesCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // ListDirectQueryDataSourcesRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDirectQueryDataSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListDirectQueryDataSourcesResponse
 * //   NextToken: "STRING_VALUE",
 * //   DirectQueryDataSources: [ // DirectQueryDataSourceList
 * //     { // DirectQueryDataSource
 * //       DataSourceName: "STRING_VALUE",
 * //       DataSourceType: { // DirectQueryDataSourceType Union: only one key present
 * //         CloudWatchLog: { // CloudWatchDirectQueryDataSource
 * //           RoleArn: "STRING_VALUE", // required
 * //         },
 * //         SecurityLake: { // SecurityLakeDirectQueryDataSource
 * //           RoleArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       Description: "STRING_VALUE",
 * //       OpenSearchArns: [ // DirectQueryOpenSearchARNList
 * //         "STRING_VALUE",
 * //       ],
 * //       DataSourceArn: "STRING_VALUE",
 * //       TagList: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDirectQueryDataSourcesCommandInput - {@link ListDirectQueryDataSourcesCommandInput}
 * @returns {@link ListDirectQueryDataSourcesCommandOutput}
 * @see {@link ListDirectQueryDataSourcesCommandInput} for command's `input` shape.
 * @see {@link ListDirectQueryDataSourcesCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class ListDirectQueryDataSourcesCommand extends $Command
  .classBuilder<
    ListDirectQueryDataSourcesCommandInput,
    ListDirectQueryDataSourcesCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "ListDirectQueryDataSources", {})
  .n("OpenSearchClient", "ListDirectQueryDataSourcesCommand")
  .sc(ListDirectQueryDataSources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDirectQueryDataSourcesRequest;
      output: ListDirectQueryDataSourcesResponse;
    };
    sdk: {
      input: ListDirectQueryDataSourcesCommandInput;
      output: ListDirectQueryDataSourcesCommandOutput;
    };
  };
}
