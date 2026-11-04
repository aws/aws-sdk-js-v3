// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListRepositoriesForApprovalRuleTemplateInput,
  ListRepositoriesForApprovalRuleTemplateOutput,
} from "../models/models_0";
import { ListRepositoriesForApprovalRuleTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRepositoriesForApprovalRuleTemplateCommand}.
 */
export interface ListRepositoriesForApprovalRuleTemplateCommandInput extends ListRepositoriesForApprovalRuleTemplateInput {}
/**
 * @public
 *
 * The output of {@link ListRepositoriesForApprovalRuleTemplateCommand}.
 */
export interface ListRepositoriesForApprovalRuleTemplateCommandOutput extends ListRepositoriesForApprovalRuleTemplateOutput, __MetadataBearer {}

/**
 * Lists all repositories associated with the specified approval rule template.
 *
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
 *
 * The specified approval rule template does not exist. Verify that the name is correct and that you are signed in to the Amazon Web Services Region where the template was created, and then try again.
 *
 * @throws {@link ApprovalRuleTemplateNameRequiredException} (client fault)
 *
 * An approval rule template name is required, but was not specified.
 *
 * @throws {@link EncryptionIntegrityChecksFailedException} (server fault)
 *
 * An encryption integrity check failed.
 *
 * @throws {@link EncryptionKeyAccessDeniedException} (client fault)
 *
 * An encryption key could not be accessed.
 *
 * @throws {@link EncryptionKeyDisabledException} (client fault)
 *
 * The encryption key is disabled.
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *
 * No encryption key was found.
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *
 * The encryption key is not available.
 *
 * @throws {@link InvalidApprovalRuleTemplateNameException} (client fault)
 *
 * The name of the approval rule template is not valid. Template names must be between 1 and 100 valid characters in length. For more information about limits in CodeCommit, see [Quotas](https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html) in the *CodeCommit User Guide*.
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *
 * The specified continuation token is not valid.
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *
 * The specified number of maximum results is not valid.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class ListRepositoriesForApprovalRuleTemplateCommand extends command<ListRepositoriesForApprovalRuleTemplateCommandInput, ListRepositoriesForApprovalRuleTemplateCommandOutput>(
  _ep0,
  _mw0,
  "ListRepositoriesForApprovalRuleTemplate",
  ListRepositoriesForApprovalRuleTemplate$
) {
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
