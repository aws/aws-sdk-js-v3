// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListElasticsearchVersionsRequest, ListElasticsearchVersionsResponse } from "../models/models_0";
import { ListElasticsearchVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListElasticsearchVersionsCommand}.
 */
export interface ListElasticsearchVersionsCommandInput extends ListElasticsearchVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListElasticsearchVersionsCommand}.
 */
export interface ListElasticsearchVersionsCommandOutput extends ListElasticsearchVersionsResponse, __MetadataBearer {}

/**
 * <p>List all supported Elasticsearch versions</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListElasticsearchVersionsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, ListElasticsearchVersionsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // ListElasticsearchVersionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListElasticsearchVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListElasticsearchVersionsResponse
 * //   ElasticsearchVersions: [ // ElasticsearchVersionList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListElasticsearchVersionsCommandInput - {@link ListElasticsearchVersionsCommandInput}
 * @returns {@link ListElasticsearchVersionsCommandOutput}
 * @see {@link ListElasticsearchVersionsCommandInput} for command's `input` shape.
 * @see {@link ListElasticsearchVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 *
 * @public
 */
export class ListElasticsearchVersionsCommand extends $Command
  .classBuilder<
    ListElasticsearchVersionsCommandInput,
    ListElasticsearchVersionsCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticsearchService2015", "ListElasticsearchVersions", {})
  .n("ElasticsearchServiceClient", "ListElasticsearchVersionsCommand")
  .sc(ListElasticsearchVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListElasticsearchVersionsRequest;
      output: ListElasticsearchVersionsResponse;
    };
    sdk: {
      input: ListElasticsearchVersionsCommandInput;
      output: ListElasticsearchVersionsCommandOutput;
    };
  };
}
