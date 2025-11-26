// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import type { ListWorkspaceServiceAccountsRequest, ListWorkspaceServiceAccountsResponse } from "../models/models_0";
import { ListWorkspaceServiceAccounts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListWorkspaceServiceAccountsCommandOutput
  extends ListWorkspaceServiceAccountsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of service accounts for a workspace.</p>
 *          <p>Service accounts are only available for workspaces that are compatible with Grafana
 *             version 9 and above.</p>
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
export class ListWorkspaceServiceAccountsCommand extends $Command
  .classBuilder<
    ListWorkspaceServiceAccountsCommandInput,
    ListWorkspaceServiceAccountsCommandOutput,
    GrafanaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GrafanaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGrafanaControlPlane", "ListWorkspaceServiceAccounts", {})
  .n("GrafanaClient", "ListWorkspaceServiceAccountsCommand")
  .sc(ListWorkspaceServiceAccounts)
  .build() {
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
