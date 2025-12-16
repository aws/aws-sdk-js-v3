// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDomainNamesRequest, ListDomainNamesResponse } from "../models/models_0";
import { ListDomainNames$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDomainNamesCommand}.
 */
export interface ListDomainNamesCommandInput extends ListDomainNamesRequest {}
/**
 * @public
 *
 * The output of {@link ListDomainNamesCommand}.
 */
export interface ListDomainNamesCommandOutput extends ListDomainNamesResponse, __MetadataBearer {}

/**
 * <p>Returns the name of all Elasticsearch domains owned by the current user's account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListDomainNamesCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, ListDomainNamesCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // ListDomainNamesRequest
 *   EngineType: "OpenSearch" || "Elasticsearch",
 * };
 * const command = new ListDomainNamesCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainNamesResponse
 * //   DomainNames: [ // DomainInfoList
 * //     { // DomainInfo
 * //       DomainName: "STRING_VALUE",
 * //       EngineType: "OpenSearch" || "Elasticsearch",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDomainNamesCommandInput - {@link ListDomainNamesCommandInput}
 * @returns {@link ListDomainNamesCommandOutput}
 * @see {@link ListDomainNamesCommandInput} for command's `input` shape.
 * @see {@link ListDomainNamesCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
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
export class ListDomainNamesCommand extends $Command
  .classBuilder<
    ListDomainNamesCommandInput,
    ListDomainNamesCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticsearchService2015", "ListDomainNames", {})
  .n("ElasticsearchServiceClient", "ListDomainNamesCommand")
  .sc(ListDomainNames$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainNamesRequest;
      output: ListDomainNamesResponse;
    };
    sdk: {
      input: ListDomainNamesCommandInput;
      output: ListDomainNamesCommandOutput;
    };
  };
}
