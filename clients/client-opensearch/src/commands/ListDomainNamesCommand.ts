// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDomainNamesRequest, ListDomainNamesResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_ListDomainNamesCommand, se_ListDomainNamesCommand } from "../protocols/Aws_restJson1";

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
 * <p>Returns the names of all Amazon OpenSearch Service domains owned by the current user in the
 *    active Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListDomainNamesCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListDomainNamesCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
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
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 * @public
 */
export class ListDomainNamesCommand extends $Command
  .classBuilder<
    ListDomainNamesCommandInput,
    ListDomainNamesCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "ListDomainNames", {})
  .n("OpenSearchClient", "ListDomainNamesCommand")
  .f(void 0, void 0)
  .ser(se_ListDomainNamesCommand)
  .de(de_ListDomainNamesCommand)
  .build() {}
