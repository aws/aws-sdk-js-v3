// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateApprovalRuleTemplateNameInput, UpdateApprovalRuleTemplateNameOutput } from "../models/models_1";
import {
  de_UpdateApprovalRuleTemplateNameCommand,
  se_UpdateApprovalRuleTemplateNameCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface UpdateApprovalRuleTemplateNameCommandOutput
  extends UpdateApprovalRuleTemplateNameOutput,
    __MetadataBearer {}

/**
 * <p>Updates the name of a specified approval rule template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateApprovalRuleTemplateNameCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateApprovalRuleTemplateNameCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
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
 *  <p>The specified approval rule template does not exist. Verify that the name is correct and that you are signed in to the Amazon Web Services Region where the template
 *         was created, and then try again.</p>
 *
 * @throws {@link ApprovalRuleTemplateNameAlreadyExistsException} (client fault)
 *  <p>You cannot create an approval rule template with that name because a template with
 *             that name already exists in this Amazon Web Services Region for your Amazon Web Services account. Approval rule template
 *             names must be unique.</p>
 *
 * @throws {@link ApprovalRuleTemplateNameRequiredException} (client fault)
 *  <p>An approval rule template name is required, but was not specified.</p>
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
export class UpdateApprovalRuleTemplateNameCommand extends $Command
  .classBuilder<
    UpdateApprovalRuleTemplateNameCommandInput,
    UpdateApprovalRuleTemplateNameCommandOutput,
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
  .s("CodeCommit_20150413", "UpdateApprovalRuleTemplateName", {})
  .n("CodeCommitClient", "UpdateApprovalRuleTemplateNameCommand")
  .f(void 0, void 0)
  .ser(se_UpdateApprovalRuleTemplateNameCommand)
  .de(de_UpdateApprovalRuleTemplateNameCommand)
  .build() {
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
