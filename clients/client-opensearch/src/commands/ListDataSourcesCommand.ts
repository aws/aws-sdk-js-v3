// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataSourcesRequest, ListDataSourcesResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_ListDataSourcesCommand, se_ListDataSourcesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataSourcesCommand}.
 */
export interface ListDataSourcesCommandInput extends ListDataSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListDataSourcesCommand}.
 */
export interface ListDataSourcesCommandOutput extends ListDataSourcesResponse, __MetadataBearer {}

/**
 * <p>Lists direct-query data sources for a specific domain. For more information, see For more
 *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/direct-query-s3.html">Working with Amazon
 *     OpenSearch Service direct queries with Amazon S3</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListDataSourcesCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListDataSourcesCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // ListDataSourcesRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new ListDataSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListDataSourcesResponse
 * //   DataSources: [ // DataSourceList
 * //     { // DataSourceDetails
 * //       DataSourceType: { // DataSourceType Union: only one key present
 * //         S3GlueDataCatalog: { // S3GlueDataCatalog
 * //           RoleArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: "ACTIVE" || "DISABLED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDataSourcesCommandInput - {@link ListDataSourcesCommandInput}
 * @returns {@link ListDataSourcesCommandOutput}
 * @see {@link ListDataSourcesCommandInput} for command's `input` shape.
 * @see {@link ListDataSourcesCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DependencyFailureException} (client fault)
 *  <p>An exception for when a failure in one of the dependencies results in the service being unable to fetch details about the resource.</p>
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
export class ListDataSourcesCommand extends $Command
  .classBuilder<
    ListDataSourcesCommandInput,
    ListDataSourcesCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "ListDataSources", {})
  .n("OpenSearchClient", "ListDataSourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListDataSourcesCommand)
  .de(de_ListDataSourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataSourcesRequest;
      output: ListDataSourcesResponse;
    };
    sdk: {
      input: ListDataSourcesCommandInput;
      output: ListDataSourcesCommandOutput;
    };
  };
}
