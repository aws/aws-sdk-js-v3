// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWorkspaceServiceAccountsRequest, ListWorkspaceServiceAccountsResponse } from "../models/models_0";
import { ListWorkspaceServiceAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWorkspaceServiceAccountsCommand}.
 */
export interface ListWorkspaceServiceAccountsCommandInput extends ListWorkspaceServiceAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkspaceServiceAccountsCommand}.
 */
export interface ListWorkspaceServiceAccountsCommandOutput extends ListWorkspaceServiceAccountsResponse, __MetadataBearer {}

/**
 * Returns a list of service accounts for a workspace.
 *
 * Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, ListWorkspaceServiceAccountsCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, ListWorkspaceServiceAccountsCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // import type { GrafanaClientConfig } from "@aws-sdk/client-grafana";
 * const config = {}; // type is GrafanaClientConfig
 * const client = new GrafanaClient(config);
 * const input = { // ListWorkspaceServiceAccountsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new ListWorkspaceServiceAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkspaceServiceAccountsResponse
 * //   nextToken: "STRING_VALUE",
 * //   serviceAccounts: [ // ServiceAccountList // required
 * //     { // ServiceAccountSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       isDisabled: "STRING_VALUE", // required
 * //       grafanaRole: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   workspaceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ListWorkspaceServiceAccountsCommandInput - {@link ListWorkspaceServiceAccountsCommandInput}
 * @returns {@link ListWorkspaceServiceAccountsCommandOutput}
 * @see {@link ListWorkspaceServiceAccountsCommandInput} for command's `input` shape.
 * @see {@link ListWorkspaceServiceAccountsCommandOutput} for command's `response` shape.
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
export class ListWorkspaceServiceAccountsCommand extends command<ListWorkspaceServiceAccountsCommandInput, ListWorkspaceServiceAccountsCommandOutput>(
  _ep0,
  _mw0,
  "ListWorkspaceServiceAccounts",
  ListWorkspaceServiceAccounts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkspaceServiceAccountsRequest;
      output: ListWorkspaceServiceAccountsResponse;
    };
    sdk: {
      input: ListWorkspaceServiceAccountsCommandInput;
      output: ListWorkspaceServiceAccountsCommandOutput;
    };
  };
}
