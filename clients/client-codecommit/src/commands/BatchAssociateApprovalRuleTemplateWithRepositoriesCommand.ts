// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchAssociateApprovalRuleTemplateWithRepositoriesInput,
  BatchAssociateApprovalRuleTemplateWithRepositoriesOutput,
} from "../models/models_0";
import { BatchAssociateApprovalRuleTemplateWithRepositories } from "../schemas/schemas_4_RuleTemplate";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommand}.
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput
  extends BatchAssociateApprovalRuleTemplateWithRepositoriesInput {}
/**
 * @public
 *
 * The output of {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommand}.
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput
  extends BatchAssociateApprovalRuleTemplateWithRepositoriesOutput,
    __MetadataBearer {}

/**
 * <p>Creates an association between an approval rule template and one or more specified repositories. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchAssociateApprovalRuleTemplateWithRepositoriesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchAssociateApprovalRuleTemplateWithRepositoriesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // BatchAssociateApprovalRuleTemplateWithRepositoriesInput
 *   approvalRuleTemplateName: "STRING_VALUE", // required
 *   repositoryNames: [ // RepositoryNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateApprovalRuleTemplateWithRepositoriesOutput
 * //   associatedRepositoryNames: [ // RepositoryNameList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   errors: [ // BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList // required
 * //     { // BatchAssociateApprovalRuleTemplateWithRepositoriesError
 * //       repositoryName: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput - {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput}
 * @returns {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput}
 * @see {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleTemplateDoesNotExistException} (client fault)
 *  <p>The specified approval rule template does not exist. Verify that the name is correct and that you are signed in to the Amazon Web Services Region where the template
 *         was created, and then try again.</p>
 *
 * @throws {@link ApprovalRuleTemplateNameRequiredException} (client fault)
 *  <p>An approval rule template name is required, but was not specified.</p>
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
 * @throws {@link InvalidApprovalRuleTemplateNameException} (client fault)
 *  <p>The name of the approval rule template is not valid. Template names must be between 1
 *             and 100 valid characters in length. For more information about limits in CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the <i>CodeCommit User Guide</i>.</p>
 *
 * @throws {@link MaximumRepositoryNamesExceededException} (client fault)
 *  <p>The maximum number of allowed repository names was exceeded. Currently, this number is 100.</p>
 *
 * @throws {@link RepositoryNamesRequiredException} (client fault)
 *  <p>At least one repository name object is required, but was not specified.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class BatchAssociateApprovalRuleTemplateWithRepositoriesCommand extends $Command
  .classBuilder<
    BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
    BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "BatchAssociateApprovalRuleTemplateWithRepositories", {})
  .n("CodeCommitClient", "BatchAssociateApprovalRuleTemplateWithRepositoriesCommand")
  .sc(BatchAssociateApprovalRuleTemplateWithRepositories)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchAssociateApprovalRuleTemplateWithRepositoriesInput;
      output: BatchAssociateApprovalRuleTemplateWithRepositoriesOutput;
    };
    sdk: {
      input: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput;
      output: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput;
    };
  };
}
