// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDirectQueryDataSourceRequest } from "../models/models_0";
import { DeleteDirectQueryDataSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDirectQueryDataSourceCommand}.
 */
export interface DeleteDirectQueryDataSourceCommandInput extends DeleteDirectQueryDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDirectQueryDataSourceCommand}.
 */
export interface DeleteDirectQueryDataSourceCommandOutput extends __MetadataBearer {}

/**
 * Deletes a previously configured direct query data source from Amazon OpenSearch Service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DeleteDirectQueryDataSourceCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DeleteDirectQueryDataSourceCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // DeleteDirectQueryDataSourceRequest
 *   DataSourceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDirectQueryDataSourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDirectQueryDataSourceCommandInput - {@link DeleteDirectQueryDataSourceCommandInput}
 * @returns {@link DeleteDirectQueryDataSourceCommandOutput}
 * @see {@link DeleteDirectQueryDataSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectQueryDataSourceCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *
 * An error occurred while processing the request.
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
export class DeleteDirectQueryDataSourceCommand extends command<DeleteDirectQueryDataSourceCommandInput, DeleteDirectQueryDataSourceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDirectQueryDataSource",
  DeleteDirectQueryDataSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDirectQueryDataSourceRequest;
      output: {};
    };
    sdk: {
      input: DeleteDirectQueryDataSourceCommandInput;
      output: DeleteDirectQueryDataSourceCommandOutput;
    };
  };
}
