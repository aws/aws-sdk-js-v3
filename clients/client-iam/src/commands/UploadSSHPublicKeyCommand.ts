// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UploadSSHPublicKeyRequest, UploadSSHPublicKeyResponse } from "../models/models_1";
import { UploadSSHPublicKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UploadSSHPublicKeyCommand}.
 */
export interface UploadSSHPublicKeyCommandInput extends UploadSSHPublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link UploadSSHPublicKeyCommand}.
 */
export interface UploadSSHPublicKeyCommandOutput extends UploadSSHPublicKeyResponse, __MetadataBearer {}

/**
 * Uploads an SSH public key and associates it with the specified IAM user.
 *
 * The SSH public key uploaded by this operation can be used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see [Set up CodeCommit for SSH connections](https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html) in the *CodeCommit User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UploadSSHPublicKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UploadSSHPublicKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UploadSSHPublicKeyRequest
 *   UserName: "STRING_VALUE", // required
 *   SSHPublicKeyBody: "STRING_VALUE", // required
 * };
 * const command = new UploadSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * // { // UploadSSHPublicKeyResponse
 * //   SSHPublicKey: { // SSHPublicKey
 * //     UserName: "STRING_VALUE", // required
 * //     SSHPublicKeyId: "STRING_VALUE", // required
 * //     Fingerprint: "STRING_VALUE", // required
 * //     SSHPublicKeyBody: "STRING_VALUE", // required
 * //     Status: "Active" || "Inactive" || "Expired", // required
 * //     UploadDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UploadSSHPublicKeyCommandInput - {@link UploadSSHPublicKeyCommandInput}
 * @returns {@link UploadSSHPublicKeyCommandOutput}
 * @see {@link UploadSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link UploadSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link DuplicateSSHPublicKeyException} (client fault)
 *
 * The request was rejected because the SSH public key is already associated with the specified IAM user.
 *
 * @throws {@link InvalidPublicKeyException} (client fault)
 *
 * The request was rejected because the public key is malformed or otherwise invalid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link UnrecognizedPublicKeyEncodingException} (client fault)
 *
 * The request was rejected because the public key encoding format is unsupported or unrecognized.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class UploadSSHPublicKeyCommand extends command<UploadSSHPublicKeyCommandInput, UploadSSHPublicKeyCommandOutput>(
  _ep0,
  _mw0,
  "UploadSSHPublicKey",
  UploadSSHPublicKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UploadSSHPublicKeyRequest;
      output: UploadSSHPublicKeyResponse;
    };
    sdk: {
      input: UploadSSHPublicKeyCommandInput;
      output: UploadSSHPublicKeyCommandOutput;
    };
  };
}
