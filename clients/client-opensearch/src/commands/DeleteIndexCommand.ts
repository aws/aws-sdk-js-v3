// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIndexRequest, DeleteIndexResponse } from "../models/models_0";
import { DeleteIndex$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes an OpenSearch index. This operation permanently removes the index and cannot be undone.
 *
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
 *
 * An error occurred because you don't have permissions to access the resource.
 *
 * @throws {@link DependencyFailureException} (client fault)
 *
 * An exception for when a failure in one of the dependencies results in the service being unable to fetch details about the resource.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *
 * An error occured because the client wanted to access an unsupported operation.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Request processing failed because of an unknown error, exception, or internal failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Reduce the frequency of your requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link OpenSearchServiceException}
 *
 * Base exception class for all service exceptions from OpenSearch service.
 *
 * @public
 */
export class DeleteIndexCommand extends command<DeleteIndexCommandInput, DeleteIndexCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIndex",
  DeleteIndex$
) {
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
