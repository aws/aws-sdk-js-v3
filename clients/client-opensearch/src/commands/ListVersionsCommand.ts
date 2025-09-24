// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListVersionsRequest, ListVersionsResponse } from "../models/models_1";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { ListVersions } from "../schemas/schemas_9_Versions";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVersionsCommand}.
 */
export interface ListVersionsCommandInput extends ListVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListVersionsCommand}.
 */
export interface ListVersionsCommandOutput extends ListVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists all versions of OpenSearch and Elasticsearch that Amazon OpenSearch Service
 *    supports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListVersionsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListVersionsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // ListVersionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListVersionsResponse
 * //   Versions: [ // VersionList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVersionsCommandInput - {@link ListVersionsCommandInput}
 * @returns {@link ListVersionsCommandOutput}
 * @see {@link ListVersionsCommandInput} for command's `input` shape.
 * @see {@link ListVersionsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
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
export class ListVersionsCommand extends $Command
  .classBuilder<
    ListVersionsCommandInput,
    ListVersionsCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "ListVersions", {})
  .n("OpenSearchClient", "ListVersionsCommand")
  .sc(ListVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVersionsRequest;
      output: ListVersionsResponse;
    };
    sdk: {
      input: ListVersionsCommandInput;
      output: ListVersionsCommandOutput;
    };
  };
}
