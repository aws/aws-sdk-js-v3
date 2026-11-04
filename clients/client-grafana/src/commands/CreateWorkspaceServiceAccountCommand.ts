// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWorkspaceServiceAccountRequest, CreateWorkspaceServiceAccountResponse } from "../models/models_0";
import { CreateWorkspaceServiceAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWorkspaceServiceAccountCommand}.
 */
export interface CreateWorkspaceServiceAccountCommandInput extends CreateWorkspaceServiceAccountRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkspaceServiceAccountCommand}.
 */
export interface CreateWorkspaceServiceAccountCommandOutput extends CreateWorkspaceServiceAccountResponse, __MetadataBearer {}

/**
 * Creates a service account for the workspace. A service account can be used to call Grafana HTTP APIs, and run automated workloads. After creating the service account with the correct `GrafanaRole` for your use case, use `CreateWorkspaceServiceAccountToken` to create a token that can be used to authenticate and authorize Grafana HTTP API calls.
 *
 * You can only create service accounts for workspaces that are compatible with Grafana version 9 and above.
 *
 * > **Note:**
 * >
 * > For more information about service accounts, see [Service accounts](https://docs.aws.amazon.com/grafana/latest/userguide/service-accounts.html) in the *Amazon Managed Grafana User Guide*.
 * >
 * > For more information about the Grafana HTTP APIs, see [Using Grafana HTTP APIs](https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html) in the *Amazon Managed Grafana User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, CreateWorkspaceServiceAccountCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, CreateWorkspaceServiceAccountCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // import type { GrafanaClientConfig } from "@aws-sdk/client-grafana";
 * const config = {}; // type is GrafanaClientConfig
 * const client = new GrafanaClient(config);
 * const input = { // CreateWorkspaceServiceAccountRequest
 *   name: "STRING_VALUE", // required
 *   grafanaRole: "STRING_VALUE", // required
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new CreateWorkspaceServiceAccountCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkspaceServiceAccountResponse
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   grafanaRole: "STRING_VALUE", // required
 * //   workspaceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateWorkspaceServiceAccountCommandInput - {@link CreateWorkspaceServiceAccountCommandInput}
 * @returns {@link CreateWorkspaceServiceAccountCommandOutput}
 * @see {@link CreateWorkspaceServiceAccountCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspaceServiceAccountCommandOutput} for command's `response` shape.
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
export class CreateWorkspaceServiceAccountCommand extends command<CreateWorkspaceServiceAccountCommandInput, CreateWorkspaceServiceAccountCommandOutput>(
  _ep0,
  _mw0,
  "CreateWorkspaceServiceAccount",
  CreateWorkspaceServiceAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkspaceServiceAccountRequest;
      output: CreateWorkspaceServiceAccountResponse;
    };
    sdk: {
      input: CreateWorkspaceServiceAccountCommandInput;
      output: CreateWorkspaceServiceAccountCommandOutput;
    };
  };
}
