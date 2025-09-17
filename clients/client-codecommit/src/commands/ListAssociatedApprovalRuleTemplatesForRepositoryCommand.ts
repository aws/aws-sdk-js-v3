// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAssociatedApprovalRuleTemplatesForRepositoryInput,
  ListAssociatedApprovalRuleTemplatesForRepositoryOutput,
} from "../models/models_0";
import {
  de_ListAssociatedApprovalRuleTemplatesForRepositoryCommand,
  se_ListAssociatedApprovalRuleTemplatesForRepositoryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssociatedApprovalRuleTemplatesForRepositoryCommand}.
 */
export interface ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput
  extends ListAssociatedApprovalRuleTemplatesForRepositoryInput {}
/**
 * @public
 *
 * The output of {@link ListAssociatedApprovalRuleTemplatesForRepositoryCommand}.
 */
export interface ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput
  extends ListAssociatedApprovalRuleTemplatesForRepositoryOutput,
    __MetadataBearer {}

/**
 * <p>Lists all approval rule templates that are associated with a specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListAssociatedApprovalRuleTemplatesForRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListAssociatedApprovalRuleTemplatesForRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // ListAssociatedApprovalRuleTemplatesForRepositoryInput
 *   repositoryName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssociatedApprovalRuleTemplatesForRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedApprovalRuleTemplatesForRepositoryOutput
 * //   approvalRuleTemplateNames: [ // ApprovalRuleTemplateNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput - {@link ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput}
 * @returns {@link ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput}
 * @see {@link ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link EncryptionIntegrityChecksFailedException} (server fault)
 *  <p>An encryption integrity check failed.</p>
 *
 * @throws {@link EncryptionKeyAccessDeniedException} (client fault)
 *  <p>An encryption key could not be accessed.</p>
 *
 * @throws {@link EncryptionKeyDisabledException} (client fault)
 *  <p>The encryption key is disabled.</p>
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *  <p>No encryption key was found.</p>
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *  <p>The encryption key is not available.</p>
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *  <p>The specified continuation token is not valid.</p>
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>The specified number of maximum results is not valid.</p>
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *          <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *  <p>The specified repository does not exist.</p>
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *  <p>A repository name is required, but was not specified.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class ListAssociatedApprovalRuleTemplatesForRepositoryCommand extends $Command
  .classBuilder<
    ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
    ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeCommit_20150413", "ListAssociatedApprovalRuleTemplatesForRepository", {})
  .n("CodeCommitClient", "ListAssociatedApprovalRuleTemplatesForRepositoryCommand")
  .f(void 0, void 0)
  .ser(se_ListAssociatedApprovalRuleTemplatesForRepositoryCommand)
  .de(de_ListAssociatedApprovalRuleTemplatesForRepositoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociatedApprovalRuleTemplatesForRepositoryInput;
      output: ListAssociatedApprovalRuleTemplatesForRepositoryOutput;
    };
    sdk: {
      input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput;
      output: ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput;
    };
  };
}
