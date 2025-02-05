// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRepositoryLinkInput, CreateRepositoryLinkOutput } from "../models/models_0";
import { de_CreateRepositoryLinkCommand, se_CreateRepositoryLinkCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a link to a specified external Git repository. A repository link allows Git sync to monitor and sync changes to files in a specified Git repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, CreateRepositoryLinkCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, CreateRepositoryLinkCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeStarConnectionsClient(config);
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
 * //     ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged", // required
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Exceeded the maximum limit for connections.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>Unable to create resource. Resource already exists.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 * @public
 */
export class CreateRepositoryLinkCommand extends $Command
  .classBuilder<
    CreateRepositoryLinkCommandInput,
    CreateRepositoryLinkCommandOutput,
    CodeStarConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeStarConnectionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStar_connections_20191201", "CreateRepositoryLink", {})
  .n("CodeStarConnectionsClient", "CreateRepositoryLinkCommand")
  .f(void 0, void 0)
  .ser(se_CreateRepositoryLinkCommand)
  .de(de_CreateRepositoryLinkCommand)
  .build() {
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
