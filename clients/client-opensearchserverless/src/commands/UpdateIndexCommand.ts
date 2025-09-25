// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateIndexRequest, UpdateIndexResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { UpdateIndex } from "../schemas/schemas_7_Collection";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIndexCommand}.
 */
export interface UpdateIndexCommandInput extends UpdateIndexRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIndexCommand}.
 */
export interface UpdateIndexCommandOutput extends UpdateIndexResponse, __MetadataBearer {}

/**
 * <p>Updates an existing index in an OpenSearch Serverless collection. This operation allows you to modify the index schema, including adding new fields or changing field mappings. You can also enable automatic semantic enrichment ingestion and search. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html#serverless-semantic-enrichment">About automatic semantic enrichment</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, UpdateIndexCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, UpdateIndexCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // UpdateIndexRequest
 *   id: "STRING_VALUE", // required
 *   indexName: "STRING_VALUE", // required
 *   indexSchema: "DOCUMENT_VALUE",
 * };
 * const command = new UpdateIndexCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateIndexCommandInput - {@link UpdateIndexCommandInput}
 * @returns {@link UpdateIndexCommandOutput}
 * @see {@link UpdateIndexCommandInput} for command's `input` shape.
 * @see {@link UpdateIndexCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when accessing or deleting a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 *
 * @public
 */
export class UpdateIndexCommand extends $Command
  .classBuilder<
    UpdateIndexCommandInput,
    UpdateIndexCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OpenSearchServerless", "UpdateIndex", {})
  .n("OpenSearchServerlessClient", "UpdateIndexCommand")
  .sc(UpdateIndex)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIndexRequest;
      output: {};
    };
    sdk: {
      input: UpdateIndexCommandInput;
      output: UpdateIndexCommandOutput;
    };
  };
}
