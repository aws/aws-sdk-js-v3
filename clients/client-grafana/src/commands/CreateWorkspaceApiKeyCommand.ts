// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWorkspaceApiKeyRequest, CreateWorkspaceApiKeyResponse } from "../models/models_0";
import { CreateWorkspaceApiKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a Grafana API key for the workspace. This key can be used to authenticate requests sent to the workspace's HTTP API. See [for available APIs and example requests.
 *
 * > **Note:** In workspaces compatible with Grafana version 9 or above, use workspace service accounts instead of API keys. API keys will be removed in a future release.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.](https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html)```javascript
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota to be exceeded.
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
export class CreateWorkspaceApiKeyCommand extends command<CreateWorkspaceApiKeyCommandInput, CreateWorkspaceApiKeyCommandOutput>(
  _ep0,
  _mw0,
  "CreateWorkspaceApiKey",
  CreateWorkspaceApiKey$
) {
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
