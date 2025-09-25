// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateApprovalRuleTemplateDescriptionInput,
  UpdateApprovalRuleTemplateDescriptionOutput,
} from "../models/models_1";
import { UpdateApprovalRuleTemplateDescription } from "../schemas/schemas_4_RuleTemplate";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApprovalRuleTemplateDescriptionCommand}.
 */
export interface UpdateApprovalRuleTemplateDescriptionCommandInput extends UpdateApprovalRuleTemplateDescriptionInput {}
/**
 * @public
 *
 * The output of {@link UpdateApprovalRuleTemplateDescriptionCommand}.
 */
export interface UpdateApprovalRuleTemplateDescriptionCommandOutput
  extends UpdateApprovalRuleTemplateDescriptionOutput,
    __MetadataBearer {}

/**
 * <p>Updates the description for a specified approval rule template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateApprovalRuleTemplateDescriptionCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateApprovalRuleTemplateDescriptionCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // UpdateApprovalRuleTemplateDescriptionInput
 *   approvalRuleTemplateName: "STRING_VALUE", // required
 *   approvalRuleTemplateDescription: "STRING_VALUE", // required
 * };
 * const command = new UpdateApprovalRuleTemplateDescriptionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApprovalRuleTemplateDescriptionOutput
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
 * @param UpdateApprovalRuleTemplateDescriptionCommandInput - {@link UpdateApprovalRuleTemplateDescriptionCommandInput}
 * @returns {@link UpdateApprovalRuleTemplateDescriptionCommandOutput}
 * @see {@link UpdateApprovalRuleTemplateDescriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateApprovalRuleTemplateDescriptionCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleTemplateDoesNotExistException} (client fault)
 *  <p>The specified approval rule template does not exist. Verify that the name is correct and that you are signed in to the Amazon Web Services Region where the template
 *         was created, and then try again.</p>
 *
 * @throws {@link ApprovalRuleTemplateNameRequiredException} (client fault)
 *  <p>An approval rule template name is required, but was not specified.</p>
 *
 * @throws {@link InvalidApprovalRuleTemplateDescriptionException} (client fault)
 *  <p>The description for the approval rule template is not valid because it exceeds the
 *             maximum characters allowed for a description. For more information about limits in CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the <i>CodeCommit User Guide</i>.</p>
 *
 * @throws {@link InvalidApprovalRuleTemplateNameException} (client fault)
 *  <p>The name of the approval rule template is not valid. Template names must be between 1
 *             and 100 valid characters in length. For more information about limits in CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the <i>CodeCommit User Guide</i>.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class UpdateApprovalRuleTemplateDescriptionCommand extends $Command
  .classBuilder<
    UpdateApprovalRuleTemplateDescriptionCommandInput,
    UpdateApprovalRuleTemplateDescriptionCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "UpdateApprovalRuleTemplateDescription", {})
  .n("CodeCommitClient", "UpdateApprovalRuleTemplateDescriptionCommand")
  .sc(UpdateApprovalRuleTemplateDescription)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApprovalRuleTemplateDescriptionInput;
      output: UpdateApprovalRuleTemplateDescriptionOutput;
    };
    sdk: {
      input: UpdateApprovalRuleTemplateDescriptionCommandInput;
      output: UpdateApprovalRuleTemplateDescriptionCommandOutput;
    };
  };
}
