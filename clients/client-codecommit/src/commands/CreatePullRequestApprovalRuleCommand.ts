// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePullRequestApprovalRuleInput, CreatePullRequestApprovalRuleOutput } from "../models/models_0";
import { CreatePullRequestApprovalRule } from "../schemas/schemas_8_Pull";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface CreatePullRequestApprovalRuleCommandOutput
  extends CreatePullRequestApprovalRuleOutput,
    __MetadataBearer {}

/**
 * <p>Creates an approval rule for a pull request.</p>
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
 *  <p>The content for the approval rule is empty. You must provide some content for an approval rule. The content cannot be null.</p>
 *
 * @throws {@link ApprovalRuleNameAlreadyExistsException} (client fault)
 *  <p>An approval rule with that name already exists. Approval rule names must be unique
 *             within the scope of a pull request.</p>
 *
 * @throws {@link ApprovalRuleNameRequiredException} (client fault)
 *  <p>An approval rule name is required, but was not specified.</p>
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
 * @throws {@link NumberOfRulesExceededException} (client fault)
 *  <p>The approval rule cannot be added. The pull request has the maximum number of approval rules associated with it.</p>
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
export class CreatePullRequestApprovalRuleCommand extends $Command
  .classBuilder<
    CreatePullRequestApprovalRuleCommandInput,
    CreatePullRequestApprovalRuleCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "CreatePullRequestApprovalRule", {})
  .n("CodeCommitClient", "CreatePullRequestApprovalRuleCommand")
  .sc(CreatePullRequestApprovalRule)
  .build() {
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
