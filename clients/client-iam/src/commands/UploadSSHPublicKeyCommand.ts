// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UploadSSHPublicKeyRequest, UploadSSHPublicKeyResponse } from "../models/models_1";
import { UploadSSHPublicKey } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Uploads an SSH public key and associates it with the specified IAM user.</p>
 *          <p>The SSH public key uploaded by this operation can be used only for authenticating the
 *             associated IAM user to an CodeCommit repository. For more information about using SSH keys
 *             to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for
 *                 SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
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
 *  <p>The request was rejected because the SSH public key is already associated with the
 *       specified IAM user.</p>
 *
 * @throws {@link InvalidPublicKeyException} (client fault)
 *  <p>The request was rejected because the public key is malformed or otherwise invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link UnrecognizedPublicKeyEncodingException} (client fault)
 *  <p>The request was rejected because the public key encoding format is unsupported or
 *       unrecognized.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class UploadSSHPublicKeyCommand extends $Command
  .classBuilder<
    UploadSSHPublicKeyCommandInput,
    UploadSSHPublicKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "UploadSSHPublicKey", {})
  .n("IAMClient", "UploadSSHPublicKeyCommand")
  .sc(UploadSSHPublicKey)
  .build() {
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
