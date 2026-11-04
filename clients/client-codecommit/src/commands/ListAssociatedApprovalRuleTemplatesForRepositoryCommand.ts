// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAssociatedApprovalRuleTemplatesForRepositoryInput,
  ListAssociatedApprovalRuleTemplatesForRepositoryOutput,
} from "../models/models_0";
import { ListAssociatedApprovalRuleTemplatesForRepository$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssociatedApprovalRuleTemplatesForRepositoryCommand}.
 */
export interface ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput extends ListAssociatedApprovalRuleTemplatesForRepositoryInput {}
/**
 * @public
 *
 * The output of {@link ListAssociatedApprovalRuleTemplatesForRepositoryCommand}.
 */
export interface ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput extends ListAssociatedApprovalRuleTemplatesForRepositoryOutput, __MetadataBearer {}

/**
 * Lists all approval rule templates that are associated with a specified repository.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListAssociatedApprovalRuleTemplatesForRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListAssociatedApprovalRuleTemplatesForRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // ListAssociatedApprovalRuleTemplatesForRepositoryInput
 *   repositoryName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssociatedApprovalRuleTemplatesForRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedApprovalRuleTemplatesForRepositoryOutput
 * //   approvalRuleTemplateNames: [ // ApprovalRuleTemplateNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput - {@link ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput}
 * @returns {@link ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput}
 * @see {@link ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
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
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *
 * The specified continuation token is not valid.
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *
 * The specified number of maximum results is not valid.
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *
 * A specified repository name is not valid.
 *
 * > **Note:** This exception occurs only when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *
 * The specified repository does not exist.
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *
 * A repository name is required, but was not specified.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class ListAssociatedApprovalRuleTemplatesForRepositoryCommand extends command<ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput, ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput>(
  _ep0,
  _mw0,
  "ListAssociatedApprovalRuleTemplatesForRepository",
  ListAssociatedApprovalRuleTemplatesForRepository$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociatedApprovalRuleTemplatesForRepositoryInput;
      output: ListAssociatedApprovalRuleTemplatesForRepositoryOutput;
    };
    sdk: {
      input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput;
      output: ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput;
    };
  };
}
