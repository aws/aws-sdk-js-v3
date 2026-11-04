// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdatePullRequestApprovalRuleContentInput,
  UpdatePullRequestApprovalRuleContentOutput,
} from "../models/models_0";
import { UpdatePullRequestApprovalRuleContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdatePullRequestApprovalRuleContentCommandOutput extends UpdatePullRequestApprovalRuleContentOutput, __MetadataBearer {}

/**
 * Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers.
 *
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
 *
 * The content for the approval rule is empty. You must provide some content for an approval rule. The content cannot be null.
 *
 * @throws {@link ApprovalRuleDoesNotExistException} (client fault)
 *
 * The specified approval rule does not exist.
 *
 * @throws {@link ApprovalRuleNameRequiredException} (client fault)
 *
 * An approval rule name is required, but was not specified.
 *
 * @throws {@link CannotModifyApprovalRuleFromTemplateException} (client fault)
 *
 * The approval rule cannot be modified for the pull request because it was created by an approval rule template and applied to the pull request automatically.
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
 * @throws {@link InvalidApprovalRuleContentException} (client fault)
 *
 * The content for the approval rule is not valid.
 *
 * @throws {@link InvalidApprovalRuleNameException} (client fault)
 *
 * The name for the approval rule is not valid.
 *
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *
 * The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.
 *
 * @throws {@link InvalidRuleContentSha256Exception} (client fault)
 *
 * The SHA-256 hash signature for the rule content is not valid.
 *
 * @throws {@link PullRequestAlreadyClosedException} (client fault)
 *
 * The pull request status cannot be updated because it is already closed.
 *
 * @throws {@link PullRequestDoesNotExistException} (client fault)
 *
 * The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.
 *
 * @throws {@link PullRequestIdRequiredException} (client fault)
 *
 * A pull request ID is required, but none was provided.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class UpdatePullRequestApprovalRuleContentCommand extends command<UpdatePullRequestApprovalRuleContentCommandInput, UpdatePullRequestApprovalRuleContentCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePullRequestApprovalRuleContent",
  UpdatePullRequestApprovalRuleContent$
) {
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
