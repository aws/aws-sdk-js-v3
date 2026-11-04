// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteApprovalRuleTemplateInput, DeleteApprovalRuleTemplateOutput } from "../models/models_0";
import { DeleteApprovalRuleTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteApprovalRuleTemplateCommand}.
 */
export interface DeleteApprovalRuleTemplateCommandInput extends DeleteApprovalRuleTemplateInput {}
/**
 * @public
 *
 * The output of {@link DeleteApprovalRuleTemplateCommand}.
 */
export interface DeleteApprovalRuleTemplateCommandOutput extends DeleteApprovalRuleTemplateOutput, __MetadataBearer {}

/**
 * Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeleteApprovalRuleTemplateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeleteApprovalRuleTemplateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // DeleteApprovalRuleTemplateInput
 *   approvalRuleTemplateName: "STRING_VALUE", // required
 * };
 * const command = new DeleteApprovalRuleTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteApprovalRuleTemplateOutput
 * //   approvalRuleTemplateId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteApprovalRuleTemplateCommandInput - {@link DeleteApprovalRuleTemplateCommandInput}
 * @returns {@link DeleteApprovalRuleTemplateCommandOutput}
 * @see {@link DeleteApprovalRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteApprovalRuleTemplateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleTemplateInUseException} (client fault)
 *
 * The approval rule template is associated with one or more repositories. You cannot delete a template that is associated with a repository. Remove all associations, and then try again.
 *
 * @throws {@link ApprovalRuleTemplateNameRequiredException} (client fault)
 *
 * An approval rule template name is required, but was not specified.
 *
 * @throws {@link InvalidApprovalRuleTemplateNameException} (client fault)
 *
 * The name of the approval rule template is not valid. Template names must be between 1 and 100 valid characters in length. For more information about limits in CodeCommit, see [Quotas](https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html) in the *CodeCommit User Guide*.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class DeleteApprovalRuleTemplateCommand extends command<DeleteApprovalRuleTemplateCommandInput, DeleteApprovalRuleTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApprovalRuleTemplate",
  DeleteApprovalRuleTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApprovalRuleTemplateInput;
      output: DeleteApprovalRuleTemplateOutput;
    };
    sdk: {
      input: DeleteApprovalRuleTemplateCommandInput;
      output: DeleteApprovalRuleTemplateCommandOutput;
    };
  };
}
