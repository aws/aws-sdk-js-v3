// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetIndexRequest, GetIndexResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_GetIndexCommand, se_GetIndexCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIndexCommand}.
 */
export interface GetIndexCommandInput extends GetIndexRequest {}
/**
 * @public
 *
 * The output of {@link GetIndexCommand}.
 */
export interface GetIndexCommandOutput extends GetIndexResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an index in an OpenSearch Serverless collection, including its schema
 *             definition. The index might be configured to conduct automatic semantic enrichment
 *             ingestion and search. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html#serverless-semantic-enrichment">About automatic semantic enrichment</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, GetIndexCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, GetIndexCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // GetIndexRequest
 *   id: "STRING_VALUE", // required
 *   indexName: "STRING_VALUE", // required
 * };
 * const command = new GetIndexCommand(input);
 * const response = await client.send(command);
 * // { // GetIndexResponse
 * //   indexSchema: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIndexCommandInput - {@link GetIndexCommandInput}
 * @returns {@link GetIndexCommandOutput}
 * @see {@link GetIndexCommandInput} for command's `input` shape.
 * @see {@link GetIndexCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when accessing or deleting a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required
 *             input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 *
 * @public
 */
export class GetIndexCommand extends $Command
  .classBuilder<
    GetIndexCommandInput,
    GetIndexCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpenSearchServerless", "GetIndex", {})
  .n("OpenSearchServerlessClient", "GetIndexCommand")
  .f(void 0, void 0)
  .ser(se_GetIndexCommand)
  .de(de_GetIndexCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIndexRequest;
      output: GetIndexResponse;
    };
    sdk: {
      input: GetIndexCommandInput;
      output: GetIndexCommandOutput;
    };
  };
}
