// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateApprovalRuleTemplateContentInput,
  UpdateApprovalRuleTemplateContentOutput,
} from "../models/models_0";
import { UpdateApprovalRuleTemplateContent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApprovalRuleTemplateContentCommand}.
 */
export interface UpdateApprovalRuleTemplateContentCommandInput extends UpdateApprovalRuleTemplateContentInput {}
/**
 * @public
 *
 * The output of {@link UpdateApprovalRuleTemplateContentCommand}.
 */
export interface UpdateApprovalRuleTemplateContentCommandOutput
  extends UpdateApprovalRuleTemplateContentOutput,
    __MetadataBearer {}

/**
 * <p>Updates the content of an approval rule template. You can change the number of
 *             required approvals, the membership of the approval rule, and whether an approval pool is
 *             defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateApprovalRuleTemplateContentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateApprovalRuleTemplateContentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // UpdateApprovalRuleTemplateContentInput
 *   approvalRuleTemplateName: "STRING_VALUE", // required
 *   newRuleContent: "STRING_VALUE", // required
 *   existingRuleContentSha256: "STRING_VALUE",
 * };
 * const command = new UpdateApprovalRuleTemplateContentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApprovalRuleTemplateContentOutput
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
 * @param UpdateApprovalRuleTemplateContentCommandInput - {@link UpdateApprovalRuleTemplateContentCommandInput}
 * @returns {@link UpdateApprovalRuleTemplateContentCommandOutput}
 * @see {@link UpdateApprovalRuleTemplateContentCommandInput} for command's `input` shape.
 * @see {@link UpdateApprovalRuleTemplateContentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleTemplateContentRequiredException} (client fault)
 *  <p>The content for the approval rule template is empty. You must provide some content for an approval rule template. The content cannot be null.</p>
 *
 * @throws {@link ApprovalRuleTemplateDoesNotExistException} (client fault)
 *  <p>The specified approval rule template does not exist. Verify that the name is correct and that you are signed in to the Amazon Web Services Region where the template
 *         was created, and then try again.</p>
 *
 * @throws {@link ApprovalRuleTemplateNameRequiredException} (client fault)
 *  <p>An approval rule template name is required, but was not specified.</p>
 *
 * @throws {@link InvalidApprovalRuleTemplateContentException} (client fault)
 *  <p>The content of the approval rule template is not valid.</p>
 *
 * @throws {@link InvalidApprovalRuleTemplateNameException} (client fault)
 *  <p>The name of the approval rule template is not valid. Template names must be between 1
 *             and 100 valid characters in length. For more information about limits in CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the <i>CodeCommit User Guide</i>.</p>
 *
 * @throws {@link InvalidRuleContentSha256Exception} (client fault)
 *  <p>The SHA-256 hash signature for the rule content is not valid.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class UpdateApprovalRuleTemplateContentCommand extends $Command
  .classBuilder<
    UpdateApprovalRuleTemplateContentCommandInput,
    UpdateApprovalRuleTemplateContentCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "UpdateApprovalRuleTemplateContent", {})
  .n("CodeCommitClient", "UpdateApprovalRuleTemplateContentCommand")
  .sc(UpdateApprovalRuleTemplateContent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApprovalRuleTemplateContentInput;
      output: UpdateApprovalRuleTemplateContentOutput;
    };
    sdk: {
      input: UpdateApprovalRuleTemplateContentCommandInput;
      output: UpdateApprovalRuleTemplateContentCommandOutput;
    };
  };
}
