// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DetachDataSourceRequest, DetachDataSourceResponse } from "../models/models_0";
import { DetachDataSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DetachDataSourceCommand}.
 */
export interface DetachDataSourceCommandInput extends DetachDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link DetachDataSourceCommand}.
 */
export interface DetachDataSourceCommandOutput extends DetachDataSourceResponse, __MetadataBearer {}

/**
 * Removes a data source from an OpenSearch application. The application must be in the `ACTIVE` state. This operation removes the data source saved object from the application and deletes the attachment record. Throws a `ConflictException` if the specified data source has a `PENDING` attachment, and a `ResourceNotFoundException` if the data source is not currently attached to the application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DetachDataSourceCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DetachDataSourceCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // DetachDataSourceRequest
 *   id: "STRING_VALUE", // required
 *   dataSourceArn: "STRING_VALUE", // required
 * };
 * const command = new DetachDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // DetachDataSourceResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   dataSourceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DetachDataSourceCommandInput - {@link DetachDataSourceCommandInput}
 * @returns {@link DetachDataSourceCommandOutput}
 * @see {@link DetachDataSourceCommandInput} for command's `input` shape.
 * @see {@link DetachDataSourceCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * An error occurred because you don't have permissions to access the resource.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * An error occurred because the client attempts to remove a resource that is currently in use.
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
export class DetachDataSourceCommand extends command<DetachDataSourceCommandInput, DetachDataSourceCommandOutput>(
  _ep0,
  _mw0,
  "DetachDataSource",
  DetachDataSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachDataSourceRequest;
      output: DetachDataSourceResponse;
    };
    sdk: {
      input: DetachDataSourceCommandInput;
      output: DetachDataSourceCommandOutput;
    };
  };
}
