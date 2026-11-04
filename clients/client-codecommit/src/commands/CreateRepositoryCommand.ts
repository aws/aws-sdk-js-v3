// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRepositoryInput, CreateRepositoryOutput } from "../models/models_0";
import { CreateRepository$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRepositoryCommand}.
 */
export interface CreateRepositoryCommandInput extends CreateRepositoryInput {}
/**
 * @public
 *
 * The output of {@link CreateRepositoryCommand}.
 */
export interface CreateRepositoryCommandOutput extends CreateRepositoryOutput, __MetadataBearer {}

/**
 * Creates a new, empty repository.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreateRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreateRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // CreateRepositoryInput
 *   repositoryName: "STRING_VALUE", // required
 *   repositoryDescription: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   kmsKeyId: "STRING_VALUE",
 * };
 * const command = new CreateRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // CreateRepositoryOutput
 * //   repositoryMetadata: { // RepositoryMetadata
 * //     accountId: "STRING_VALUE",
 * //     repositoryId: "STRING_VALUE",
 * //     repositoryName: "STRING_VALUE",
 * //     repositoryDescription: "STRING_VALUE",
 * //     defaultBranch: "STRING_VALUE",
 * //     lastModifiedDate: new Date("TIMESTAMP"),
 * //     creationDate: new Date("TIMESTAMP"),
 * //     cloneUrlHttp: "STRING_VALUE",
 * //     cloneUrlSsh: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     kmsKeyId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRepositoryCommandInput - {@link CreateRepositoryCommandInput}
 * @returns {@link CreateRepositoryCommandOutput}
 * @see {@link CreateRepositoryCommandInput} for command's `input` shape.
 * @see {@link CreateRepositoryCommandOutput} for command's `response` shape.
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
 * @throws {@link EncryptionKeyInvalidIdException} (client fault)
 *
 * The Key Management Service encryption key is not valid.
 *
 * @throws {@link EncryptionKeyInvalidUsageException} (client fault)
 *
 * A KMS encryption key was used to try and encrypt or decrypt a repository, but either the repository or the key was not in a valid state to support the operation.
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *
 * No encryption key was found.
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *
 * The encryption key is not available.
 *
 * @throws {@link InvalidRepositoryDescriptionException} (client fault)
 *
 * The specified repository description is not valid.
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *
 * A specified repository name is not valid.
 *
 * > **Note:** This exception occurs only when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.
 *
 * @throws {@link InvalidSystemTagUsageException} (client fault)
 *
 * The specified tag is not valid. Key names cannot be prefixed with aws:.
 *
 * @throws {@link InvalidTagsMapException} (client fault)
 *
 * The map of tags is not valid.
 *
 * @throws {@link OperationNotAllowedException} (client fault)
 *
 * The requested action is not allowed.
 *
 * @throws {@link RepositoryLimitExceededException} (client fault)
 *
 * A repository resource limit was exceeded.
 *
 * @throws {@link RepositoryNameExistsException} (client fault)
 *
 * The specified repository name already exists.
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *
 * A repository name is required, but was not specified.
 *
 * @throws {@link TagPolicyException} (client fault)
 *
 * The tag policy is not valid.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * The maximum number of tags for an CodeCommit resource has been exceeded.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class CreateRepositoryCommand extends command<CreateRepositoryCommandInput, CreateRepositoryCommandOutput>(
  _ep0,
  _mw0,
  "CreateRepository",
  CreateRepository$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRepositoryInput;
      output: CreateRepositoryOutput;
    };
    sdk: {
      input: CreateRepositoryCommandInput;
      output: CreateRepositoryCommandOutput;
    };
  };
}
