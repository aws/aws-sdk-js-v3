// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRepositoryLinksInput, ListRepositoryLinksOutput } from "../models/models_0";
import { de_ListRepositoryLinksCommand, se_ListRepositoryLinksCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRepositoryLinksCommand}.
 */
export interface ListRepositoryLinksCommandInput extends ListRepositoryLinksInput {}
/**
 * @public
 *
 * The output of {@link ListRepositoryLinksCommand}.
 */
export interface ListRepositoryLinksCommandOutput extends ListRepositoryLinksOutput, __MetadataBearer {}

/**
 * <p>Lists the repository links created for connections in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, ListRepositoryLinksCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, ListRepositoryLinksCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
 * const input = { // ListRepositoryLinksInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRepositoryLinksCommand(input);
 * const response = await client.send(command);
 * // { // ListRepositoryLinksOutput
 * //   RepositoryLinks: [ // RepositoryLinkList // required
 * //     { // RepositoryLinkInfo
 * //       ConnectionArn: "STRING_VALUE", // required
 * //       EncryptionKeyArn: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE", // required
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged" || "AzureDevOps", // required
 * //       RepositoryLinkArn: "STRING_VALUE", // required
 * //       RepositoryLinkId: "STRING_VALUE", // required
 * //       RepositoryName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRepositoryLinksCommandInput - {@link ListRepositoryLinksCommandInput}
 * @returns {@link ListRepositoryLinksCommandOutput}
 * @see {@link ListRepositoryLinksCommandInput} for command's `input` shape.
 * @see {@link ListRepositoryLinksCommandOutput} for command's `response` shape.
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Received an internal server exception. Try again later.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input is not valid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found. Verify the connection resource ARN and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 *
 * @public
 */
export class ListRepositoryLinksCommand extends $Command
  .classBuilder<
    ListRepositoryLinksCommandInput,
    ListRepositoryLinksCommandOutput,
    CodeConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeConnectionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeConnections_20231201", "ListRepositoryLinks", {})
  .n("CodeConnectionsClient", "ListRepositoryLinksCommand")
  .f(void 0, void 0)
  .ser(se_ListRepositoryLinksCommand)
  .de(de_ListRepositoryLinksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRepositoryLinksInput;
      output: ListRepositoryLinksOutput;
    };
    sdk: {
      input: ListRepositoryLinksCommandInput;
      output: ListRepositoryLinksCommandOutput;
    };
  };
}
