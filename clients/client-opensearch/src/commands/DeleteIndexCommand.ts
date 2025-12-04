// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteIndexRequest, DeleteIndexResponse } from "../models/models_0";
import type { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { DeleteIndex } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIndexCommand}.
 */
export interface DeleteIndexCommandInput extends DeleteIndexRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIndexCommand}.
 */
export interface DeleteIndexCommandOutput extends DeleteIndexResponse, __MetadataBearer {}

/**
 * <p>Deletes an OpenSearch index. This operation permanently removes the index and cannot be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DeleteIndexCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DeleteIndexCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // DeleteIndexRequest
 *   DomainName: "STRING_VALUE", // required
 *   IndexName: "STRING_VALUE", // required
 * };
 * const command = new DeleteIndexCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIndexResponse
 * //   Status: "CREATED" || "UPDATED" || "DELETED", // required
 * // };
 *
 * ```
 *
 * @param DeleteIndexCommandInput - {@link DeleteIndexCommandInput}
 * @returns {@link DeleteIndexCommandOutput}
 * @see {@link DeleteIndexCommandInput} for command's `input` shape.
 * @see {@link DeleteIndexCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An error occurred because you don't have permissions to access the resource.</p>
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Reduce the frequency of your requests and try again.</p>
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
export class DeleteIndexCommand extends $Command
  .classBuilder<
    DeleteIndexCommandInput,
    DeleteIndexCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "DeleteIndex", {})
  .n("OpenSearchClient", "DeleteIndexCommand")
  .sc(DeleteIndex)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIndexRequest;
      output: DeleteIndexResponse;
    };
    sdk: {
      input: DeleteIndexCommandInput;
      output: DeleteIndexCommandOutput;
    };
  };
}
