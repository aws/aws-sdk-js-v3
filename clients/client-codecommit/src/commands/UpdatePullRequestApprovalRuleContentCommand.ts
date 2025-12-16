// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdatePullRequestApprovalRuleContentInput,
  UpdatePullRequestApprovalRuleContentOutput,
} from "../models/models_0";
import { UpdatePullRequestApprovalRuleContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePullRequestApprovalRuleContentCommand}.
 */
export interface UpdatePullRequestApprovalRuleContentCommandInput extends UpdatePullRequestApprovalRuleContentInput {}
/**
 * @public
 *
 * The output of {@link UpdatePullRequestApprovalRuleContentCommand}.
 */
export interface UpdatePullRequestApprovalRuleContentCommandOutput
  extends UpdatePullRequestApprovalRuleContentOutput,
    __MetadataBearer {}

/**
 * <p>Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and
 *             the approval pool for approvers. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdatePullRequestApprovalRuleContentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdatePullRequestApprovalRuleContentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // UpdatePullRequestApprovalRuleContentInput
 *   pullRequestId: "STRING_VALUE", // required
 *   approvalRuleName: "STRING_VALUE", // required
 *   existingRuleContentSha256: "STRING_VALUE",
 *   newRuleContent: "STRING_VALUE", // required
 * };
 * const command = new UpdatePullRequestApprovalRuleContentCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePullRequestApprovalRuleContentOutput
 * //   approvalRule: { // ApprovalRule
 * //     approvalRuleId: "STRING_VALUE",
 * //     approvalRuleName: "STRING_VALUE",
 * //     approvalRuleContent: "STRING_VALUE",
 * //     ruleContentSha256: "STRING_VALUE",
 * //     lastModifiedDate: new Date("TIMESTAMP"),
 * //     creationDate: new Date("TIMESTAMP"),
 * //     lastModifiedUser: "STRING_VALUE",
 * //     originApprovalRuleTemplate: { // OriginApprovalRuleTemplate
 * //       approvalRuleTemplateId: "STRING_VALUE",
 * //       approvalRuleTemplateName: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePullRequestApprovalRuleContentCommandInput - {@link UpdatePullRequestApprovalRuleContentCommandInput}
 * @returns {@link UpdatePullRequestApprovalRuleContentCommandOutput}
 * @see {@link UpdatePullRequestApprovalRuleContentCommandInput} for command's `input` shape.
 * @see {@link UpdatePullRequestApprovalRuleContentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleContentRequiredException} (client fault)
 *  <p>The content for the approval rule is empty. You must provide some content for an approval rule. The content cannot be null.</p>
 *
 * @throws {@link ApprovalRuleDoesNotExistException} (client fault)
 *  <p>The specified approval rule does not exist.</p>
 *
 * @throws {@link ApprovalRuleNameRequiredException} (client fault)
 *  <p>An approval rule name is required, but was not specified.</p>
 *
 * @throws {@link CannotModifyApprovalRuleFromTemplateException} (client fault)
 *  <p>The approval rule cannot be modified for the pull request because it was created by an
 *             approval rule template and applied to the pull request automatically.</p>
 *
 * @throws {@link EncryptionIntegrityChecksFailedException} (server fault)
 *  <p>An encryption integrity check failed.</p>
 *
 * @throws {@link EncryptionKeyAccessDeniedException} (client fault)
 *  <p>An encryption key could not be accessed.</p>
 *
 * @throws {@link EncryptionKeyDisabledException} (client fault)
 *  <p>The encryption key is disabled.</p>
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *  <p>No encryption key was found.</p>
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *  <p>The encryption key is not available.</p>
 *
 * @throws {@link InvalidApprovalRuleContentException} (client fault)
 *  <p>The content for the approval rule is not valid.</p>
 *
 * @throws {@link InvalidApprovalRuleNameException} (client fault)
 *  <p>The name for the approval rule is not valid.</p>
 *
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *  <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
 *
 * @throws {@link InvalidRuleContentSha256Exception} (client fault)
 *  <p>The SHA-256 hash signature for the rule content is not valid.</p>
 *
 * @throws {@link PullRequestAlreadyClosedException} (client fault)
 *  <p>The pull request status cannot be updated because it is already closed.</p>
 *
 * @throws {@link PullRequestDoesNotExistException} (client fault)
 *  <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
 *
 * @throws {@link PullRequestIdRequiredException} (client fault)
 *  <p>A pull request ID is required, but none was provided.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class UpdatePullRequestApprovalRuleContentCommand extends $Command
  .classBuilder<
    UpdatePullRequestApprovalRuleContentCommandInput,
    UpdatePullRequestApprovalRuleContentCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "UpdatePullRequestApprovalRuleContent", {})
  .n("CodeCommitClient", "UpdatePullRequestApprovalRuleContentCommand")
  .sc(UpdatePullRequestApprovalRuleContent$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePullRequestApprovalRuleContentInput;
      output: UpdatePullRequestApprovalRuleContentOutput;
    };
    sdk: {
      input: UpdatePullRequestApprovalRuleContentCommandInput;
      output: UpdatePullRequestApprovalRuleContentCommandOutput;
    };
  };
}
