// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRepositoryLinkInput, GetRepositoryLinkOutput } from "../models/models_0";
import { GetRepositoryLink$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRepositoryLinkCommand}.
 */
export interface GetRepositoryLinkCommandInput extends GetRepositoryLinkInput {}
/**
 * @public
 *
 * The output of {@link GetRepositoryLinkCommand}.
 */
export interface GetRepositoryLinkCommandOutput extends GetRepositoryLinkOutput, __MetadataBearer {}

/**
 * Returns details about a repository link. A repository link allows Git sync to monitor and sync changes from files in a specified Git repository.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, GetRepositoryLinkCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, GetRepositoryLinkCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
 * const input = { // GetRepositoryLinkInput
 *   RepositoryLinkId: "STRING_VALUE", // required
 * };
 * const command = new GetRepositoryLinkCommand(input);
 * const response = await client.send(command);
 * // { // GetRepositoryLinkOutput
 * //   RepositoryLinkInfo: { // RepositoryLinkInfo
 * //     ConnectionArn: "STRING_VALUE", // required
 * //     EncryptionKeyArn: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE", // required
 * //     ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged" || "AzureDevOps", // required
 * //     RepositoryLinkArn: "STRING_VALUE", // required
 * //     RepositoryLinkId: "STRING_VALUE", // required
 * //     RepositoryName: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRepositoryLinkCommandInput - {@link GetRepositoryLinkCommandInput}
 * @returns {@link GetRepositoryLinkCommandOutput}
 * @see {@link GetRepositoryLinkCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryLinkCommandOutput} for command's `response` shape.
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Received an internal server exception. Try again later.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input is not valid. Verify that the action is typed correctly.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found. Verify the connection resource ARN and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link CodeConnectionsServiceException}
 *
 * Base exception class for all service exceptions from CodeConnections service.
 *
 * @public
 */
export class GetRepositoryLinkCommand extends command<GetRepositoryLinkCommandInput, GetRepositoryLinkCommandOutput>(
  _ep0,
  _mw0,
  "GetRepositoryLink",
  GetRepositoryLink$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRepositoryLinkInput;
      output: GetRepositoryLinkOutput;
    };
    sdk: {
      input: GetRepositoryLinkCommandInput;
      output: GetRepositoryLinkCommandOutput;
    };
  };
}
