// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRepositoryLinkInput, UpdateRepositoryLinkOutput } from "../models/models_0";
import { UpdateRepositoryLink$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRepositoryLinkCommand}.
 */
export interface UpdateRepositoryLinkCommandInput extends UpdateRepositoryLinkInput {}
/**
 * @public
 *
 * The output of {@link UpdateRepositoryLinkCommand}.
 */
export interface UpdateRepositoryLinkCommandOutput extends UpdateRepositoryLinkOutput, __MetadataBearer {}

/**
 * Updates the association between your connection and a specified external Git repository. A repository link allows Git sync to monitor and sync changes to files in a specified Git repository.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, UpdateRepositoryLinkCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, UpdateRepositoryLinkCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * // import type { CodeStarConnectionsClientConfig } from "@aws-sdk/client-codestar-connections";
 * const config = {}; // type is CodeStarConnectionsClientConfig
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // UpdateRepositoryLinkInput
 *   ConnectionArn: "STRING_VALUE",
 *   EncryptionKeyArn: "STRING_VALUE",
 *   RepositoryLinkId: "STRING_VALUE", // required
 * };
 * const command = new UpdateRepositoryLinkCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRepositoryLinkOutput
 * //   RepositoryLinkInfo: { // RepositoryLinkInfo
 * //     ConnectionArn: "STRING_VALUE", // required
 * //     EncryptionKeyArn: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE", // required
 * //     ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged", // required
 * //     RepositoryLinkArn: "STRING_VALUE", // required
 * //     RepositoryLinkId: "STRING_VALUE", // required
 * //     RepositoryName: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRepositoryLinkCommandInput - {@link UpdateRepositoryLinkCommandInput}
 * @returns {@link UpdateRepositoryLinkCommandOutput}
 * @see {@link UpdateRepositoryLinkCommandInput} for command's `input` shape.
 * @see {@link UpdateRepositoryLinkCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConditionalCheckFailedException} (client fault)
 *
 * The conditional check failed. Try again later.
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
 * @throws {@link UpdateOutOfSyncException} (client fault)
 *
 * The update is out of sync. Try syncing again.
 *
 * @throws {@link CodeStarConnectionsServiceException}
 *
 * Base exception class for all service exceptions from CodeStarConnections service.
 *
 * @public
 */
export class UpdateRepositoryLinkCommand extends command<UpdateRepositoryLinkCommandInput, UpdateRepositoryLinkCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRepositoryLink",
  UpdateRepositoryLink$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRepositoryLinkInput;
      output: UpdateRepositoryLinkOutput;
    };
    sdk: {
      input: UpdateRepositoryLinkCommandInput;
      output: UpdateRepositoryLinkCommandOutput;
    };
  };
}
