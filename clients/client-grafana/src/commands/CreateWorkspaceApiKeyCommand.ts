// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import { CreateWorkspaceApiKeyRequest, CreateWorkspaceApiKeyResponse } from "../models/models_0";
import { CreateWorkspaceApiKey } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkspaceApiKeyCommand}.
 */
export interface CreateWorkspaceApiKeyCommandInput extends CreateWorkspaceApiKeyRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkspaceApiKeyCommand}.
 */
export interface CreateWorkspaceApiKeyCommandOutput extends CreateWorkspaceApiKeyResponse, __MetadataBearer {}

/**
 * <p>Creates a Grafana API key for the workspace. This key can be used to authenticate
 *             requests sent to the workspace's HTTP API. See <a href="https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html">https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html</a>
 *             for available APIs and example requests.</p>
 *          <note>
 *             <p>In workspaces compatible with Grafana version 9 or above, use workspace service
 *                 accounts instead of API keys. API keys will be removed in a future release.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, CreateWorkspaceApiKeyCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, CreateWorkspaceApiKeyCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // import type { GrafanaClientConfig } from "@aws-sdk/client-grafana";
 * const config = {}; // type is GrafanaClientConfig
 * const client = new GrafanaClient(config);
 * const input = { // CreateWorkspaceApiKeyRequest
 *   keyName: "STRING_VALUE", // required
 *   keyRole: "STRING_VALUE", // required
 *   secondsToLive: Number("int"), // required
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new CreateWorkspaceApiKeyCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkspaceApiKeyResponse
 * //   keyName: "STRING_VALUE", // required
 * //   key: "STRING_VALUE", // required
 * //   workspaceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateWorkspaceApiKeyCommandInput - {@link CreateWorkspaceApiKeyCommandInput}
 * @returns {@link CreateWorkspaceApiKeyCommandOutput}
 * @see {@link CreateWorkspaceApiKeyCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspaceApiKeyCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
export class CreateWorkspaceApiKeyCommand extends $Command
  .classBuilder<
    CreateWorkspaceApiKeyCommandInput,
    CreateWorkspaceApiKeyCommandOutput,
    GrafanaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GrafanaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGrafanaControlPlane", "CreateWorkspaceApiKey", {})
  .n("GrafanaClient", "CreateWorkspaceApiKeyCommand")
  .sc(CreateWorkspaceApiKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkspaceApiKeyRequest;
      output: CreateWorkspaceApiKeyResponse;
    };
    sdk: {
      input: CreateWorkspaceApiKeyCommandInput;
      output: CreateWorkspaceApiKeyCommandOutput;
    };
  };
}
