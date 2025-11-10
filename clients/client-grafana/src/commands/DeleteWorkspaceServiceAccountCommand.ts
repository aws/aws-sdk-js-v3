// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import { DeleteWorkspaceServiceAccountRequest, DeleteWorkspaceServiceAccountResponse } from "../models/models_0";
import { DeleteWorkspaceServiceAccount } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkspaceServiceAccountCommand}.
 */
export interface DeleteWorkspaceServiceAccountCommandInput extends DeleteWorkspaceServiceAccountRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkspaceServiceAccountCommand}.
 */
export interface DeleteWorkspaceServiceAccountCommandOutput
  extends DeleteWorkspaceServiceAccountResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a workspace service account from the workspace.</p>
 *          <p>This will delete any tokens created for the service account, as well. If the tokens
 *             are currently in use, the will fail to authenticate / authorize after they are
 *             deleted.</p>
 *          <p>Service accounts are only available for workspaces that are compatible with Grafana
 *             version 9 and above.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, DeleteWorkspaceServiceAccountCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, DeleteWorkspaceServiceAccountCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // import type { GrafanaClientConfig } from "@aws-sdk/client-grafana";
 * const config = {}; // type is GrafanaClientConfig
 * const client = new GrafanaClient(config);
 * const input = { // DeleteWorkspaceServiceAccountRequest
 *   serviceAccountId: "STRING_VALUE", // required
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkspaceServiceAccountCommand(input);
 * const response = await client.send(command);
 * // { // DeleteWorkspaceServiceAccountResponse
 * //   serviceAccountId: "STRING_VALUE", // required
 * //   workspaceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteWorkspaceServiceAccountCommandInput - {@link DeleteWorkspaceServiceAccountCommandInput}
 * @returns {@link DeleteWorkspaceServiceAccountCommandOutput}
 * @see {@link DeleteWorkspaceServiceAccountCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspaceServiceAccountCommandOutput} for command's `response` shape.
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
export class DeleteWorkspaceServiceAccountCommand extends $Command
  .classBuilder<
    DeleteWorkspaceServiceAccountCommandInput,
    DeleteWorkspaceServiceAccountCommandOutput,
    GrafanaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GrafanaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGrafanaControlPlane", "DeleteWorkspaceServiceAccount", {})
  .n("GrafanaClient", "DeleteWorkspaceServiceAccountCommand")
  .sc(DeleteWorkspaceServiceAccount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkspaceServiceAccountRequest;
      output: DeleteWorkspaceServiceAccountResponse;
    };
    sdk: {
      input: DeleteWorkspaceServiceAccountCommandInput;
      output: DeleteWorkspaceServiceAccountCommandOutput;
    };
  };
}
