// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRepositoryLinkInput, UpdateRepositoryLinkOutput } from "../models/models_0";
import { de_UpdateRepositoryLinkCommand, se_UpdateRepositoryLinkCommand } from "../protocols/Aws_json1_0";

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
 * import { CodeConnectionsClient, UpdateRepositoryLinkCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, UpdateRepositoryLinkCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
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
 * //     ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged" || "AzureDevOps", // required
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
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
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
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 *
 * @public
 */
export class UpdateRepositoryLinkCommand extends $Command
  .classBuilder<
    UpdateRepositoryLinkCommandInput,
    UpdateRepositoryLinkCommandOutput,
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
  .s("CodeConnections_20231201", "UpdateRepositoryLink", {})
  .n("CodeConnectionsClient", "UpdateRepositoryLinkCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRepositoryLinkCommand)
  .de(de_UpdateRepositoryLinkCommand)
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
