// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRepositoryLinksInput, ListRepositoryLinksOutput } from "../models/models_0";
import { ListRepositoryLinks$ } from "../schemas/schemas_0";

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
 * import { CodeStarConnectionsClient, ListRepositoryLinksCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, ListRepositoryLinksCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * // import type { CodeStarConnectionsClientConfig } from "@aws-sdk/client-codestar-connections";
 * const config = {}; // type is CodeStarConnectionsClientConfig
 * const client = new CodeStarConnectionsClient(config);
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
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged", // required
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
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
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
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 *
 * @public
 */
export class ListRepositoryLinksCommand extends $Command
  .classBuilder<
    ListRepositoryLinksCommandInput,
    ListRepositoryLinksCommandOutput,
    CodeStarConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeStarConnectionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeStar_connections_20191201", "ListRepositoryLinks", {})
  .n("CodeStarConnectionsClient", "ListRepositoryLinksCommand")
  .sc(ListRepositoryLinks$)
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
