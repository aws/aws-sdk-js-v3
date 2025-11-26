// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CodeConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListConnectionsInput, ListConnectionsOutput } from "../models/models_0";
import { ListConnections } from "../schemas/schemas_0";

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
 * import { CodeConnectionsClient, ListConnectionsCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, ListConnectionsCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
 * const input = { // ListConnectionsInput
 *   ProviderTypeFilter: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged" || "AzureDevOps",
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
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged" || "AzureDevOps",
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
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found. Verify the connection resource ARN and try again.</p>
 *
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 *
 * @public
 */
export class ListConnectionsCommand extends $Command
  .classBuilder<
    ListConnectionsCommandInput,
    ListConnectionsCommandOutput,
    CodeConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeConnectionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeConnections_20231201", "ListConnections", {})
  .n("CodeConnectionsClient", "ListConnectionsCommand")
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
