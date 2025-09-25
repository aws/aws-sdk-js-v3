// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListConnectionsInput, ListConnectionsOutput } from "../models/models_0";
import { ListConnections } from "../schemas/schemas_4_Repository";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConnectionsCommand}.
 */
export interface ListConnectionsCommandInput extends ListConnectionsInput {}
/**
 * @public
 *
 * The output of {@link ListConnectionsCommand}.
 */
export interface ListConnectionsCommandOutput extends ListConnectionsOutput, __MetadataBearer {}

/**
 * <p>Lists the connections associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, ListConnectionsCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, ListConnectionsCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * // import type { CodeStarConnectionsClientConfig } from "@aws-sdk/client-codestar-connections";
 * const config = {}; // type is CodeStarConnectionsClientConfig
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // ListConnectionsInput
 *   ProviderTypeFilter: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged",
 *   HostArnFilter: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectionsOutput
 * //   Connections: [ // ConnectionList
 * //     { // Connection
 * //       ConnectionName: "STRING_VALUE",
 * //       ConnectionArn: "STRING_VALUE",
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       ConnectionStatus: "PENDING" || "AVAILABLE" || "ERROR",
 * //       HostArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConnectionsCommandInput - {@link ListConnectionsCommandInput}
 * @returns {@link ListConnectionsCommandOutput}
 * @see {@link ListConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListConnectionsCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found. Verify the connection resource ARN and try again.</p>
 *
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 *
 * @public
 */
export class ListConnectionsCommand extends $Command
  .classBuilder<
    ListConnectionsCommandInput,
    ListConnectionsCommandOutput,
    CodeStarConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeStarConnectionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeStar_connections_20191201", "ListConnections", {})
  .n("CodeStarConnectionsClient", "ListConnectionsCommand")
  .sc(ListConnections)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectionsInput;
      output: ListConnectionsOutput;
    };
    sdk: {
      input: ListConnectionsCommandInput;
      output: ListConnectionsCommandOutput;
    };
  };
}
