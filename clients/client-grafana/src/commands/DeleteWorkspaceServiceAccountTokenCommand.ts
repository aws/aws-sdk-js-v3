// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import type {
  DeleteWorkspaceServiceAccountTokenRequest,
  DeleteWorkspaceServiceAccountTokenResponse,
} from "../models/models_0";
import { DeleteWorkspaceServiceAccountToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DeleteWorkspaceServiceAccountTokenCommandOutput
  extends DeleteWorkspaceServiceAccountTokenResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a token for the workspace service account.</p>
 *          <p>This will disable the key associated with the token. If any automation is currently
 *             using the key, it will no longer be authenticated or authorized to perform actions with
 *             the Grafana HTTP APIs.</p>
 *          <p>Service accounts are only available for workspaces that are compatible with Grafana
 *             version 9 and above.</p>
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
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link GrafanaServiceException}
 * <p>Base exception class for all service exceptions from Grafana service.</p>
 *
 *
 * @public
 */
export class DeleteWorkspaceServiceAccountTokenCommand extends $Command
  .classBuilder<
    DeleteWorkspaceServiceAccountTokenCommandInput,
    DeleteWorkspaceServiceAccountTokenCommandOutput,
    GrafanaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GrafanaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGrafanaControlPlane", "DeleteWorkspaceServiceAccountToken", {})
  .n("GrafanaClient", "DeleteWorkspaceServiceAccountTokenCommand")
  .sc(DeleteWorkspaceServiceAccountToken$)
  .build() {
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
