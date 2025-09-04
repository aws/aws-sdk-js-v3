// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateIndexRequest, CreateIndexResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_CreateIndexCommand, se_CreateIndexCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIndexCommand}.
 */
export interface CreateIndexCommandInput extends CreateIndexRequest {}
/**
 * @public
 *
 * The output of {@link CreateIndexCommand}.
 */
export interface CreateIndexCommandOutput extends CreateIndexResponse, __MetadataBearer {}

/**
 * <p>Creates an index within an OpenSearch Serverless collection. Unlike other OpenSearch indexes, indexes created by this API are automatically configured to conduct automatic semantic enrichment ingestion and search. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html#serverless-semantic-enrichment">About automatic semantic enrichment</a> in the <i>OpenSearch User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, CreateIndexCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, CreateIndexCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // CreateIndexRequest
 *   id: "STRING_VALUE", // required
 *   indexName: "STRING_VALUE", // required
 *   indexSchema: "DOCUMENT_VALUE",
 * };
 * const command = new CreateIndexCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateIndexCommandInput - {@link CreateIndexCommandInput}
 * @returns {@link CreateIndexCommandOutput}
 * @see {@link CreateIndexCommandInput} for command's `input` shape.
 * @see {@link CreateIndexCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>When creating a resource, thrown when a resource with the same name already exists or is being created. When deleting a resource, thrown when the resource is not in the ACTIVE or FAILED state.</p>
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
export class CreateIndexCommand extends $Command
  .classBuilder<
    CreateIndexCommandInput,
    CreateIndexCommandOutput,
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
  .s("OpenSearchServerless", "CreateIndex", {})
  .n("OpenSearchServerlessClient", "CreateIndexCommand")
  .f(void 0, void 0)
  .ser(se_CreateIndexCommand)
  .de(de_CreateIndexCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIndexRequest;
      output: {};
    };
    sdk: {
      input: CreateIndexCommandInput;
      output: CreateIndexCommandOutput;
    };
  };
}
