// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWorkspaceApiKeyRequest, DeleteWorkspaceApiKeyResponse } from "../models/models_0";
import { DeleteWorkspaceApiKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWorkspaceApiKeyCommand}.
 */
export interface DeleteWorkspaceApiKeyCommandInput extends DeleteWorkspaceApiKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkspaceApiKeyCommand}.
 */
export interface DeleteWorkspaceApiKeyCommandOutput extends DeleteWorkspaceApiKeyResponse, __MetadataBearer {}

/**
 * Deletes a Grafana API key for the workspace.
 *
 * > **Note:** In workspaces compatible with Grafana version 9 or above, use workspace service accounts instead of API keys. API keys will be removed in a future release.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, DeleteWorkspaceApiKeyCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, DeleteWorkspaceApiKeyCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // import type { GrafanaClientConfig } from "@aws-sdk/client-grafana";
 * const config = {}; // type is GrafanaClientConfig
 * const client = new GrafanaClient(config);
 * const input = { // DeleteWorkspaceApiKeyRequest
 *   keyName: "STRING_VALUE", // required
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkspaceApiKeyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteWorkspaceApiKeyResponse
 * //   keyName: "STRING_VALUE", // required
 * //   workspaceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteWorkspaceApiKeyCommandInput - {@link DeleteWorkspaceApiKeyCommandInput}
 * @returns {@link DeleteWorkspaceApiKeyCommandOutput}
 * @see {@link DeleteWorkspaceApiKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspaceApiKeyCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A resource was in an inconsistent state during an update or a deletion.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error while processing the request. Retry the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling. Retry the request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The value of a parameter in the request caused an error.
 *
 * @throws {@link GrafanaServiceException}
 *
 * Base exception class for all service exceptions from Grafana service.
 *
 * @public
 */
export class DeleteWorkspaceApiKeyCommand extends command<DeleteWorkspaceApiKeyCommandInput, DeleteWorkspaceApiKeyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWorkspaceApiKey",
  DeleteWorkspaceApiKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkspaceApiKeyRequest;
      output: DeleteWorkspaceApiKeyResponse;
    };
    sdk: {
      input: DeleteWorkspaceApiKeyCommandInput;
      output: DeleteWorkspaceApiKeyCommandOutput;
    };
  };
}
