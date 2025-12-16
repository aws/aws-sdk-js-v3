// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateApprovalRuleTemplateInput, CreateApprovalRuleTemplateOutput } from "../models/models_0";
import { CreateApprovalRuleTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApprovalRuleTemplateCommand}.
 */
export interface CreateApprovalRuleTemplateCommandInput extends CreateApprovalRuleTemplateInput {}
/**
 * @public
 *
 * The output of {@link CreateApprovalRuleTemplateCommand}.
 */
export interface CreateApprovalRuleTemplateCommandOutput extends CreateApprovalRuleTemplateOutput, __MetadataBearer {}

/**
 * <p>Creates a template for approval rules that can then be associated with one or more
 *             repositories in your Amazon Web Services account. When you associate a template with a repository,
 *             CodeCommit creates an approval rule that matches the conditions of the template for all
 *             pull requests that meet the conditions of the template. For more information, see
 *             <a>AssociateApprovalRuleTemplateWithRepository</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreateApprovalRuleTemplateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreateApprovalRuleTemplateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // CreateApprovalRuleTemplateInput
 *   approvalRuleTemplateName: "STRING_VALUE", // required
 *   approvalRuleTemplateContent: "STRING_VALUE", // required
 *   approvalRuleTemplateDescription: "STRING_VALUE",
 * };
 * const command = new CreateApprovalRuleTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateApprovalRuleTemplateOutput
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
 * @param CreateApprovalRuleTemplateCommandInput - {@link CreateApprovalRuleTemplateCommandInput}
 * @returns {@link CreateApprovalRuleTemplateCommandOutput}
 * @see {@link CreateApprovalRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateApprovalRuleTemplateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleTemplateContentRequiredException} (client fault)
 *  <p>The content for the approval rule template is empty. You must provide some content for an approval rule template. The content cannot be null.</p>
 *
 * @throws {@link ApprovalRuleTemplateNameAlreadyExistsException} (client fault)
 *  <p>You cannot create an approval rule template with that name because a template with
 *             that name already exists in this Amazon Web Services Region for your Amazon Web Services account. Approval rule template
 *             names must be unique.</p>
 *
 * @throws {@link ApprovalRuleTemplateNameRequiredException} (client fault)
 *  <p>An approval rule template name is required, but was not specified.</p>
 *
 * @throws {@link InvalidApprovalRuleTemplateContentException} (client fault)
 *  <p>The content of the approval rule template is not valid.</p>
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
 * @throws {@link NumberOfRuleTemplatesExceededException} (client fault)
 *  <p>The maximum number of approval rule templates has been exceeded for this Amazon Web Services Region. </p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class CreateApprovalRuleTemplateCommand extends $Command
  .classBuilder<
    CreateApprovalRuleTemplateCommandInput,
    CreateApprovalRuleTemplateCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "CreateApprovalRuleTemplate", {})
  .n("CodeCommitClient", "CreateApprovalRuleTemplateCommand")
  .sc(CreateApprovalRuleTemplate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApprovalRuleTemplateInput;
      output: CreateApprovalRuleTemplateOutput;
    };
    sdk: {
      input: CreateApprovalRuleTemplateCommandInput;
      output: CreateApprovalRuleTemplateCommandOutput;
    };
  };
}
