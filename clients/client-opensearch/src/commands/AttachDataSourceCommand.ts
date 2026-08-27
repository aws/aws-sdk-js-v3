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
 * <p>Attaches a data source to an OpenSearch application. The data source must be an Amazon OpenSearch Service domain. If both the application and the data source are active, the attachment completes immediately with a status of <code>ATTACHED</code>. Otherwise, the operation returns <code>PENDING</code> and completes the attachment automatically once both become active. If the attachment cannot be completed, its status becomes <code>FAILED</code>. This operation is idempotent: If the data source is already attached or pending, the operation returns the existing attachment.</p>
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
 *  <p>An error occurred because you don't have permissions to access the resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred because the client attempts to remove a resource that is currently in use.</p>
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
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
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
