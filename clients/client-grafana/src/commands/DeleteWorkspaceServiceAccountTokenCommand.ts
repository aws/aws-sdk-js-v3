// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteWorkspaceServiceAccountTokenRequest,
  DeleteWorkspaceServiceAccountTokenResponse,
} from "../models/models_0";
import { DeleteWorkspaceServiceAccountToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWorkspaceServiceAccountTokenCommand}.
 */
export interface DeleteWorkspaceServiceAccountTokenCommandInput extends DeleteWorkspaceServiceAccountTokenRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkspaceServiceAccountTokenCommand}.
 */
export interface DeleteWorkspaceServiceAccountTokenCommandOutput extends DeleteWorkspaceServiceAccountTokenResponse, __MetadataBearer {}

/**
 * Deletes a token for the workspace service account.
 *
 * This will disable the key associated with the token. If any automation is currently using the key, it will no longer be authenticated or authorized to perform actions with the Grafana HTTP APIs.
 *
 * Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, DeleteWorkspaceServiceAccountTokenCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, DeleteWorkspaceServiceAccountTokenCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // import type { GrafanaClientConfig } from "@aws-sdk/client-grafana";
 * const config = {}; // type is GrafanaClientConfig
 * const client = new GrafanaClient(config);
 * const input = { // DeleteWorkspaceServiceAccountTokenRequest
 *   tokenId: "STRING_VALUE", // required
 *   serviceAccountId: "STRING_VALUE", // required
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkspaceServiceAccountTokenCommand(input);
 * const response = await client.send(command);
 * // { // DeleteWorkspaceServiceAccountTokenResponse
 * //   tokenId: "STRING_VALUE", // required
 * //   serviceAccountId: "STRING_VALUE", // required
 * //   workspaceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteWorkspaceServiceAccountTokenCommandInput - {@link DeleteWorkspaceServiceAccountTokenCommandInput}
 * @returns {@link DeleteWorkspaceServiceAccountTokenCommandOutput}
 * @see {@link DeleteWorkspaceServiceAccountTokenCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspaceServiceAccountTokenCommandOutput} for command's `response` shape.
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
export class DeleteWorkspaceServiceAccountTokenCommand extends command<DeleteWorkspaceServiceAccountTokenCommandInput, DeleteWorkspaceServiceAccountTokenCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWorkspaceServiceAccountToken",
  DeleteWorkspaceServiceAccountToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkspaceServiceAccountTokenRequest;
      output: DeleteWorkspaceServiceAccountTokenResponse;
    };
    sdk: {
      input: DeleteWorkspaceServiceAccountTokenCommandInput;
      output: DeleteWorkspaceServiceAccountTokenCommandOutput;
    };
  };
}
