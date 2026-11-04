// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRepositoryLinkInput, CreateRepositoryLinkOutput } from "../models/models_0";
import { CreateRepositoryLink$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRepositoryLinkCommand}.
 */
export interface CreateRepositoryLinkCommandInput extends CreateRepositoryLinkInput {}
/**
 * @public
 *
 * The output of {@link CreateRepositoryLinkCommand}.
 */
export interface CreateRepositoryLinkCommandOutput extends CreateRepositoryLinkOutput, __MetadataBearer {}

/**
 * Creates a link to a specified external Git repository. A repository link allows Git sync to monitor and sync changes to files in a specified Git repository.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, CreateRepositoryLinkCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, CreateRepositoryLinkCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
 * const input = { // CreateRepositoryLinkInput
 *   ConnectionArn: "STRING_VALUE", // required
 *   OwnerId: "STRING_VALUE", // required
 *   RepositoryName: "STRING_VALUE", // required
 *   EncryptionKeyArn: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateRepositoryLinkCommand(input);
 * const response = await client.send(command);
 * // { // CreateRepositoryLinkOutput
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
 * @param CreateRepositoryLinkCommandInput - {@link CreateRepositoryLinkCommandInput}
 * @returns {@link CreateRepositoryLinkCommandOutput}
 * @see {@link CreateRepositoryLinkCommandInput} for command's `input` shape.
 * @see {@link CreateRepositoryLinkCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * Exceeded the maximum limit for connections.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * Unable to create resource. Resource already exists.
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
export class CreateRepositoryLinkCommand extends command<CreateRepositoryLinkCommandInput, CreateRepositoryLinkCommandOutput>(
  _ep0,
  _mw0,
  "CreateRepositoryLink",
  CreateRepositoryLink$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRepositoryLinkInput;
      output: CreateRepositoryLinkOutput;
    };
    sdk: {
      input: CreateRepositoryLinkCommandInput;
      output: CreateRepositoryLinkCommandOutput;
    };
  };
}
