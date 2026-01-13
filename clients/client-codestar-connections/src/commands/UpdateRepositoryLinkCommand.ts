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
import type { UpdateRepositoryLinkInput, UpdateRepositoryLinkOutput } from "../models/models_0";
import { UpdateRepositoryLink$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the association between your connection and a specified external Git repository.
 *       A repository link allows Git sync to monitor and sync changes to files in a specified Git
 *       repository.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConditionalCheckFailedException} (client fault)
 *  <p>The conditional check failed. Try again later.</p>
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
 * @throws {@link UpdateOutOfSyncException} (client fault)
 *  <p>The update is out of sync. Try syncing again.</p>
 *
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 *
 * @public
 */
export class UpdateRepositoryLinkCommand extends $Command
  .classBuilder<
    UpdateRepositoryLinkCommandInput,
    UpdateRepositoryLinkCommandOutput,
    CodeStarConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeStarConnectionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeStar_connections_20191201", "UpdateRepositoryLink", {})
  .n("CodeStarConnectionsClient", "UpdateRepositoryLinkCommand")
  .sc(UpdateRepositoryLink$)
  .build() {
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
