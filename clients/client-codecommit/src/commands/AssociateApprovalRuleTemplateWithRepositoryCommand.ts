// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateApprovalRuleTemplateWithRepositoryInput } from "../models/models_0";
import { AssociateApprovalRuleTemplateWithRepository$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateApprovalRuleTemplateWithRepositoryCommand}.
 */
export interface AssociateApprovalRuleTemplateWithRepositoryCommandInput extends AssociateApprovalRuleTemplateWithRepositoryInput {}
/**
 * @public
 *
 * The output of {@link AssociateApprovalRuleTemplateWithRepositoryCommand}.
 */
export interface AssociateApprovalRuleTemplateWithRepositoryCommandOutput extends __MetadataBearer {}

/**
 * Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, AssociateApprovalRuleTemplateWithRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, AssociateApprovalRuleTemplateWithRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // AssociateApprovalRuleTemplateWithRepositoryInput
 *   approvalRuleTemplateName: "STRING_VALUE", // required
 *   repositoryName: "STRING_VALUE", // required
 * };
 * const command = new AssociateApprovalRuleTemplateWithRepositoryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateApprovalRuleTemplateWithRepositoryCommandInput - {@link AssociateApprovalRuleTemplateWithRepositoryCommandInput}
 * @returns {@link AssociateApprovalRuleTemplateWithRepositoryCommandOutput}
 * @see {@link AssociateApprovalRuleTemplateWithRepositoryCommandInput} for command's `input` shape.
 * @see {@link AssociateApprovalRuleTemplateWithRepositoryCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *
 * A specified repository name is not valid.
 *
 * > **Note:** This exception occurs only when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.
 *
 * @throws {@link MaximumRuleTemplatesAssociatedWithRepositoryException} (client fault)
 *
 * The maximum number of approval rule templates for a repository has been exceeded. You cannot associate more than 25 approval rule templates with a repository.
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *
 * The specified repository does not exist.
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *
 * A repository name is required, but was not specified.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class AssociateApprovalRuleTemplateWithRepositoryCommand extends command<AssociateApprovalRuleTemplateWithRepositoryCommandInput, AssociateApprovalRuleTemplateWithRepositoryCommandOutput>(
  _ep0,
  _mw0,
  "AssociateApprovalRuleTemplateWithRepository",
  AssociateApprovalRuleTemplateWithRepository$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateApprovalRuleTemplateWithRepositoryInput;
      output: {};
    };
    sdk: {
      input: AssociateApprovalRuleTemplateWithRepositoryCommandInput;
      output: AssociateApprovalRuleTemplateWithRepositoryCommandOutput;
    };
  };
}
