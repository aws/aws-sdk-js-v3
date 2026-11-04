// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchDisassociateApprovalRuleTemplateFromRepositoriesInput,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput,
} from "../models/models_0";
import { BatchDisassociateApprovalRuleTemplateFromRepositories$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand}.
 */
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput extends BatchDisassociateApprovalRuleTemplateFromRepositoriesInput {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand}.
 */
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput extends BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput, __MetadataBearer {}

/**
 * Removes the association between an approval rule template and one or more specified repositories.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // BatchDisassociateApprovalRuleTemplateFromRepositoriesInput
 *   approvalRuleTemplateName: "STRING_VALUE", // required
 *   repositoryNames: [ // RepositoryNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput
 * //   disassociatedRepositoryNames: [ // RepositoryNameList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   errors: [ // BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList // required
 * //     { // BatchDisassociateApprovalRuleTemplateFromRepositoriesError
 * //       repositoryName: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput - {@link BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput}
 * @returns {@link BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput}
 * @see {@link BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput} for command's `response` shape.
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
 * @throws {@link MaximumRepositoryNamesExceededException} (client fault)
 *
 * The maximum number of allowed repository names was exceeded. Currently, this number is 100.
 *
 * @throws {@link RepositoryNamesRequiredException} (client fault)
 *
 * At least one repository name object is required, but was not specified.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand extends command<BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput, BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput>(
  _ep0,
  _mw0,
  "BatchDisassociateApprovalRuleTemplateFromRepositories",
  BatchDisassociateApprovalRuleTemplateFromRepositories$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDisassociateApprovalRuleTemplateFromRepositoriesInput;
      output: BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput;
    };
    sdk: {
      input: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput;
      output: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput;
    };
  };
}
