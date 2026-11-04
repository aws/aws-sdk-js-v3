// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateApprovalRuleTemplateFromRepositoryInput } from "../models/models_0";
import { DisassociateApprovalRuleTemplateFromRepository$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateApprovalRuleTemplateFromRepositoryCommand}.
 */
export interface DisassociateApprovalRuleTemplateFromRepositoryCommandInput extends DisassociateApprovalRuleTemplateFromRepositoryInput {}
/**
 * @public
 *
 * The output of {@link DisassociateApprovalRuleTemplateFromRepositoryCommand}.
 */
export interface DisassociateApprovalRuleTemplateFromRepositoryCommandOutput extends __MetadataBearer {}

/**
 * Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DisassociateApprovalRuleTemplateFromRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DisassociateApprovalRuleTemplateFromRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // DisassociateApprovalRuleTemplateFromRepositoryInput
 *   approvalRuleTemplateName: "STRING_VALUE", // required
 *   repositoryName: "STRING_VALUE", // required
 * };
 * const command = new DisassociateApprovalRuleTemplateFromRepositoryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateApprovalRuleTemplateFromRepositoryCommandInput - {@link DisassociateApprovalRuleTemplateFromRepositoryCommandInput}
 * @returns {@link DisassociateApprovalRuleTemplateFromRepositoryCommandOutput}
 * @see {@link DisassociateApprovalRuleTemplateFromRepositoryCommandInput} for command's `input` shape.
 * @see {@link DisassociateApprovalRuleTemplateFromRepositoryCommandOutput} for command's `response` shape.
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
export class DisassociateApprovalRuleTemplateFromRepositoryCommand extends command<DisassociateApprovalRuleTemplateFromRepositoryCommandInput, DisassociateApprovalRuleTemplateFromRepositoryCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateApprovalRuleTemplateFromRepository",
  DisassociateApprovalRuleTemplateFromRepository$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateApprovalRuleTemplateFromRepositoryInput;
      output: {};
    };
    sdk: {
      input: DisassociateApprovalRuleTemplateFromRepositoryCommandInput;
      output: DisassociateApprovalRuleTemplateFromRepositoryCommandOutput;
    };
  };
}
