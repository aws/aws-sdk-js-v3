// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import type {
  ListWorkspaceServiceAccountTokensRequest,
  ListWorkspaceServiceAccountTokensResponse,
} from "../models/models_0";
import { ListWorkspaceServiceAccountTokens$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkspaceServiceAccountTokensCommand}.
 */
export interface ListWorkspaceServiceAccountTokensCommandInput extends ListWorkspaceServiceAccountTokensRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkspaceServiceAccountTokensCommand}.
 */
export interface ListWorkspaceServiceAccountTokensCommandOutput extends ListWorkspaceServiceAccountTokensResponse, __MetadataBearer {}

/**
 * <p>Returns a list of tokens for a workspace service account.</p>
 *          <note>
 *             <p>This does not return the key for each token. You cannot access keys after they
 *                 are created. To create a new key, delete the token and recreate it.</p>
 *          </note>
 *          <p>Service accounts are only available for workspaces that are compatible with Grafana
 *             version 9 and above.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, ListWorkspaceServiceAccountTokensCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, ListWorkspaceServiceAccountTokensCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // import type { GrafanaClientConfig } from "@aws-sdk/client-grafana";
 * const config = {}; // type is GrafanaClientConfig
 * const client = new GrafanaClient(config);
 * const input = { // ListWorkspaceServiceAccountTokensRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   serviceAccountId: "STRING_VALUE", // required
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new ListWorkspaceServiceAccountTokensCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkspaceServiceAccountTokensResponse
 * //   nextToken: "STRING_VALUE",
 * //   serviceAccountTokens: [ // ServiceAccountTokenList // required
 * //     { // ServiceAccountTokenSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       expiresAt: new Date("TIMESTAMP"), // required
 * //       lastUsedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   serviceAccountId: "STRING_VALUE", // required
 * //   workspaceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ListWorkspaceServiceAccountTokensCommandInput - {@link ListWorkspaceServiceAccountTokensCommandInput}
 * @returns {@link ListWorkspaceServiceAccountTokensCommandOutput}
 * @see {@link ListWorkspaceServiceAccountTokensCommandInput} for command's `input` shape.
 * @see {@link ListWorkspaceServiceAccountTokensCommandOutput} for command's `response` shape.
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
export class ListWorkspaceServiceAccountTokensCommand extends $Command
  .classBuilder<
    ListWorkspaceServiceAccountTokensCommandInput,
    ListWorkspaceServiceAccountTokensCommandOutput,
    GrafanaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GrafanaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGrafanaControlPlane", "ListWorkspaceServiceAccountTokens", {})
  .n("GrafanaClient", "ListWorkspaceServiceAccountTokensCommand")
  .sc(ListWorkspaceServiceAccountTokens$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkspaceServiceAccountTokensRequest;
      output: ListWorkspaceServiceAccountTokensResponse;
    };
    sdk: {
      input: ListWorkspaceServiceAccountTokensCommandInput;
      output: ListWorkspaceServiceAccountTokensCommandOutput;
    };
  };
}
