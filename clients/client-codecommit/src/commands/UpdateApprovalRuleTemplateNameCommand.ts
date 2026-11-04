// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateApprovalRuleTemplateNameInput, UpdateApprovalRuleTemplateNameOutput } from "../models/models_0";
import { UpdateApprovalRuleTemplateName$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateApprovalRuleTemplateNameCommand}.
 */
export interface UpdateApprovalRuleTemplateNameCommandInput extends UpdateApprovalRuleTemplateNameInput {}
/**
 * @public
 *
 * The output of {@link UpdateApprovalRuleTemplateNameCommand}.
 */
export interface UpdateApprovalRuleTemplateNameCommandOutput extends UpdateApprovalRuleTemplateNameOutput, __MetadataBearer {}

/**
 * Updates the name of a specified approval rule template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateApprovalRuleTemplateNameCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateApprovalRuleTemplateNameCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // UpdateApprovalRuleTemplateNameInput
 *   oldApprovalRuleTemplateName: "STRING_VALUE", // required
 *   newApprovalRuleTemplateName: "STRING_VALUE", // required
 * };
 * const command = new UpdateApprovalRuleTemplateNameCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApprovalRuleTemplateNameOutput
 * //   approvalRuleTemplate: { // ApprovalRuleTemplate
 * //     approvalRuleTemplateId: "STRING_VALUE",
 * //     approvalRuleTemplateName: "STRING_VALUE",
 * //     approvalRuleTemplateDescription: "STRING_VALUE",
 * //     approvalRuleTemplateContent: "STRING_VALUE",
 * //     ruleContentSha256: "STRING_VALUE",
 * //     lastModifiedDate: new Date("TIMESTAMP"),
 * //     creationDate: new Date("TIMESTAMP"),
 * //     lastModifiedUser: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateApprovalRuleTemplateNameCommandInput - {@link UpdateApprovalRuleTemplateNameCommandInput}
 * @returns {@link UpdateApprovalRuleTemplateNameCommandOutput}
 * @see {@link UpdateApprovalRuleTemplateNameCommandInput} for command's `input` shape.
 * @see {@link UpdateApprovalRuleTemplateNameCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleTemplateDoesNotExistException} (client fault)
 *
 * The specified approval rule template does not exist. Verify that the name is correct and that you are signed in to the Amazon Web Services Region where the template was created, and then try again.
 *
 * @throws {@link ApprovalRuleTemplateNameAlreadyExistsException} (client fault)
 *
 * You cannot create an approval rule template with that name because a template with that name already exists in this Amazon Web Services Region for your Amazon Web Services account. Approval rule template names must be unique.
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
export class UpdateApprovalRuleTemplateNameCommand extends command<UpdateApprovalRuleTemplateNameCommandInput, UpdateApprovalRuleTemplateNameCommandOutput>(
  _ep0,
  _mw0,
  "UpdateApprovalRuleTemplateName",
  UpdateApprovalRuleTemplateName$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApprovalRuleTemplateNameInput;
      output: UpdateApprovalRuleTemplateNameOutput;
    };
    sdk: {
      input: UpdateApprovalRuleTemplateNameCommandInput;
      output: UpdateApprovalRuleTemplateNameCommandOutput;
    };
  };
}
