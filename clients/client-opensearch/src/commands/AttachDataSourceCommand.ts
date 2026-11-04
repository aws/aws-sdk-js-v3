// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AttachDataSourceRequest, AttachDataSourceResponse } from "../models/models_0";
import { AttachDataSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AttachDataSourceCommand}.
 */
export interface AttachDataSourceCommandInput extends AttachDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link AttachDataSourceCommand}.
 */
export interface AttachDataSourceCommandOutput extends AttachDataSourceResponse, __MetadataBearer {}

/**
 * Attaches a data source to an OpenSearch application. The data source must be an Amazon OpenSearch Service domain. If both the application and the data source are active, the attachment completes immediately with a status of `ATTACHED`. Otherwise, the operation returns `PENDING` and completes the attachment automatically once both become active. If the attachment cannot be completed, its status becomes `FAILED`. This operation is idempotent: If the data source is already attached or pending, the operation returns the existing attachment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, AttachDataSourceCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, AttachDataSourceCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // AttachDataSourceRequest
 *   id: "STRING_VALUE", // required
 *   dataSourceArn: "STRING_VALUE", // required
 *   workspaceId: "STRING_VALUE",
 *   workspaceConfiguration: { // WorkspaceConfigurationInput
 *     name: "STRING_VALUE", // required
 *     workspaceType: "STRING_VALUE", // required
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AttachDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // AttachDataSourceResponse
 * //   attachmentId: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   dataSourceArn: "STRING_VALUE",
 * //   status: "PENDING" || "ATTACHED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param AttachDataSourceCommandInput - {@link AttachDataSourceCommandInput}
 * @returns {@link AttachDataSourceCommandOutput}
 * @see {@link AttachDataSourceCommandInput} for command's `input` shape.
 * @see {@link AttachDataSourceCommandOutput} for command's `response` shape.
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
export class AttachDataSourceCommand extends command<AttachDataSourceCommandInput, AttachDataSourceCommandOutput>(
  _ep0,
  _mw0,
  "AttachDataSource",
  AttachDataSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachDataSourceRequest;
      output: AttachDataSourceResponse;
    };
    sdk: {
      input: AttachDataSourceCommandInput;
      output: AttachDataSourceCommandOutput;
    };
  };
}
