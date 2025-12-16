// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListRepositoriesForApprovalRuleTemplateInput,
  ListRepositoriesForApprovalRuleTemplateOutput,
} from "../models/models_0";
import { ListRepositoriesForApprovalRuleTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRepositoriesForApprovalRuleTemplateCommand}.
 */
export interface ListRepositoriesForApprovalRuleTemplateCommandInput
  extends ListRepositoriesForApprovalRuleTemplateInput {}
/**
 * @public
 *
 * The output of {@link ListRepositoriesForApprovalRuleTemplateCommand}.
 */
export interface ListRepositoriesForApprovalRuleTemplateCommandOutput
  extends ListRepositoriesForApprovalRuleTemplateOutput,
    __MetadataBearer {}

/**
 * <p>Lists all repositories associated with the specified approval rule template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListRepositoriesForApprovalRuleTemplateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListRepositoriesForApprovalRuleTemplateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // ListRepositoriesForApprovalRuleTemplateInput
 *   approvalRuleTemplateName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRepositoriesForApprovalRuleTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ListRepositoriesForApprovalRuleTemplateOutput
 * //   repositoryNames: [ // RepositoryNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRepositoriesForApprovalRuleTemplateCommandInput - {@link ListRepositoriesForApprovalRuleTemplateCommandInput}
 * @returns {@link ListRepositoriesForApprovalRuleTemplateCommandOutput}
 * @see {@link ListRepositoriesForApprovalRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link ListRepositoriesForApprovalRuleTemplateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleTemplateDoesNotExistException} (client fault)
 *  <p>The specified approval rule template does not exist. Verify that the name is correct and that you are signed in to the Amazon Web Services Region where the template
 *         was created, and then try again.</p>
 *
 * @throws {@link ApprovalRuleTemplateNameRequiredException} (client fault)
 *  <p>An approval rule template name is required, but was not specified.</p>
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
 * @throws {@link InvalidApprovalRuleTemplateNameException} (client fault)
 *  <p>The name of the approval rule template is not valid. Template names must be between 1
 *             and 100 valid characters in length. For more information about limits in CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the <i>CodeCommit User Guide</i>.</p>
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *  <p>The specified continuation token is not valid.</p>
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>The specified number of maximum results is not valid.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class ListRepositoriesForApprovalRuleTemplateCommand extends $Command
  .classBuilder<
    ListRepositoriesForApprovalRuleTemplateCommandInput,
    ListRepositoriesForApprovalRuleTemplateCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "ListRepositoriesForApprovalRuleTemplate", {})
  .n("CodeCommitClient", "ListRepositoriesForApprovalRuleTemplateCommand")
  .sc(ListRepositoriesForApprovalRuleTemplate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRepositoriesForApprovalRuleTemplateInput;
      output: ListRepositoriesForApprovalRuleTemplateOutput;
    };
    sdk: {
      input: ListRepositoriesForApprovalRuleTemplateCommandInput;
      output: ListRepositoriesForApprovalRuleTemplateCommandOutput;
    };
  };
}
