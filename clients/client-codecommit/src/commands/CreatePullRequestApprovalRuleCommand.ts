// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePullRequestApprovalRuleInput, CreatePullRequestApprovalRuleOutput } from "../models/models_0";
import { CreatePullRequestApprovalRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePullRequestApprovalRuleCommand}.
 */
export interface CreatePullRequestApprovalRuleCommandInput extends CreatePullRequestApprovalRuleInput {}
/**
 * @public
 *
 * The output of {@link CreatePullRequestApprovalRuleCommand}.
 */
export interface CreatePullRequestApprovalRuleCommandOutput extends CreatePullRequestApprovalRuleOutput, __MetadataBearer {}

/**
 * Creates an approval rule for a pull request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreatePullRequestApprovalRuleCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreatePullRequestApprovalRuleCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // CreatePullRequestApprovalRuleInput
 *   pullRequestId: "STRING_VALUE", // required
 *   approvalRuleName: "STRING_VALUE", // required
 *   approvalRuleContent: "STRING_VALUE", // required
 * };
 * const command = new CreatePullRequestApprovalRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreatePullRequestApprovalRuleOutput
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
 * @param CreatePullRequestApprovalRuleCommandInput - {@link CreatePullRequestApprovalRuleCommandInput}
 * @returns {@link CreatePullRequestApprovalRuleCommandOutput}
 * @see {@link CreatePullRequestApprovalRuleCommandInput} for command's `input` shape.
 * @see {@link CreatePullRequestApprovalRuleCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleContentRequiredException} (client fault)
 *
 * The content for the approval rule is empty. You must provide some content for an approval rule. The content cannot be null.
 *
 * @throws {@link ApprovalRuleNameAlreadyExistsException} (client fault)
 *
 * An approval rule with that name already exists. Approval rule names must be unique within the scope of a pull request.
 *
 * @throws {@link ApprovalRuleNameRequiredException} (client fault)
 *
 * An approval rule name is required, but was not specified.
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
 * @throws {@link NumberOfRulesExceededException} (client fault)
 *
 * The approval rule cannot be added. The pull request has the maximum number of approval rules associated with it.
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
export class CreatePullRequestApprovalRuleCommand extends command<CreatePullRequestApprovalRuleCommandInput, CreatePullRequestApprovalRuleCommandOutput>(
  _ep0,
  _mw0,
  "CreatePullRequestApprovalRule",
  CreatePullRequestApprovalRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePullRequestApprovalRuleInput;
      output: CreatePullRequestApprovalRuleOutput;
    };
    sdk: {
      input: CreatePullRequestApprovalRuleCommandInput;
      output: CreatePullRequestApprovalRuleCommandOutput;
    };
  };
}
