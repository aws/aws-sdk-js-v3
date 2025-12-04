// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { IndexDocumentsRequest, IndexDocumentsResponse } from "../models/models_0";
import { IndexDocuments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link IndexDocumentsCommand}.
 */
export interface IndexDocumentsCommandInput extends IndexDocumentsRequest {}
/**
 * @public
 *
 * The output of {@link IndexDocumentsCommand}.
 */
export interface IndexDocumentsCommandOutput extends IndexDocumentsResponse, __MetadataBearer {}

/**
 * <p>Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is  <code>RequiresIndexDocuments</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, IndexDocumentsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, IndexDocumentsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // IndexDocumentsRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new IndexDocumentsCommand(input);
 * const response = await client.send(command);
 * // { // IndexDocumentsResponse
 * //   FieldNames: [ // FieldNameList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param IndexDocumentsCommandInput - {@link IndexDocumentsCommandInput}
 * @returns {@link IndexDocumentsCommandOutput}
 * @see {@link IndexDocumentsCommandInput} for command's `input` shape.
 * @see {@link IndexDocumentsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was rejected because it has invalid parameters.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 *
 * @public
 */
export class IndexDocumentsCommand extends $Command
  .classBuilder<
    IndexDocumentsCommandInput,
    IndexDocumentsCommandOutput,
    CloudSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("A9SearchCloudConfigService2013", "IndexDocuments", {})
  .n("CloudSearchClient", "IndexDocumentsCommand")
  .sc(IndexDocuments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: IndexDocumentsRequest;
      output: IndexDocumentsResponse;
    };
    sdk: {
      input: IndexDocumentsCommandInput;
      output: IndexDocumentsCommandOutput;
    };
  };
}
