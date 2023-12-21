// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import { DeleteWorkspaceApiKeyRequest, DeleteWorkspaceApiKeyResponse } from "../models/models_0";
import { de_DeleteWorkspaceApiKeyCommand, se_DeleteWorkspaceApiKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Deletes a Grafana API key for the workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, DeleteWorkspaceApiKeyCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, DeleteWorkspaceApiKeyCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
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
 */
export class DeleteWorkspaceApiKeyCommand extends $Command
  .classBuilder<
    DeleteWorkspaceApiKeyCommandInput,
    DeleteWorkspaceApiKeyCommandOutput,
    GrafanaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: GrafanaClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGrafanaControlPlane", "DeleteWorkspaceApiKey", {})
  .n("GrafanaClient", "DeleteWorkspaceApiKeyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWorkspaceApiKeyCommand)
  .de(de_DeleteWorkspaceApiKeyCommand)
  .build() {}
