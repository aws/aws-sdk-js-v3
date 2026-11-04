// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBlobInput, GetBlobOutput } from "../models/models_0";
import { GetBlob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBlobCommand}.
 */
export interface GetBlobCommandInput extends GetBlobInput {}
/**
 * @public
 *
 * The output of {@link GetBlobCommand}.
 */
export interface GetBlobCommandOutput extends GetBlobOutput, __MetadataBearer {}

/**
 * Returns the base-64 encoded content of an individual blob in a repository.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetBlobCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetBlobCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // GetBlobInput
 *   repositoryName: "STRING_VALUE", // required
 *   blobId: "STRING_VALUE", // required
 * };
 * const command = new GetBlobCommand(input);
 * const response = await client.send(command);
 * // { // GetBlobOutput
 * //   content: new Uint8Array(), // required
 * // };
 *
 * ```
 *
 * @param GetBlobCommandInput - {@link GetBlobCommandInput}
 * @returns {@link GetBlobCommandOutput}
 * @see {@link GetBlobCommandInput} for command's `input` shape.
 * @see {@link GetBlobCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link BlobIdDoesNotExistException} (client fault)
 *
 * The specified blob does not exist.
 *
 * @throws {@link BlobIdRequiredException} (client fault)
 *
 * A blob ID is required, but was not specified.
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
 * @throws {@link FileTooLargeException} (client fault)
 *
 * The specified file exceeds the file size limit for CodeCommit. For more information about limits in CodeCommit, see [Quotas](https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html) in the *CodeCommit User Guide*.
 *
 * @throws {@link InvalidBlobIdException} (client fault)
 *
 * The specified blob is not valid.
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
export class GetBlobCommand extends command<GetBlobCommandInput, GetBlobCommandOutput>(
  _ep0,
  _mw0,
  "GetBlob",
  GetBlob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBlobInput;
      output: GetBlobOutput;
    };
    sdk: {
      input: GetBlobCommandInput;
      output: GetBlobCommandOutput;
    };
  };
}
