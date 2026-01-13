// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { GetSSHPublicKeyRequest, GetSSHPublicKeyResponse } from "../models/models_0";
import { GetSSHPublicKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSSHPublicKeyCommand}.
 */
export interface GetSSHPublicKeyCommandInput extends GetSSHPublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link GetSSHPublicKeyCommand}.
 */
export interface GetSSHPublicKeyCommandOutput extends GetSSHPublicKeyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified SSH public key, including metadata about the key.</p>
 *          <p>The SSH public key retrieved by this operation is used only for authenticating the
 *             associated IAM user to an CodeCommit repository. For more information about using SSH keys
 *             to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH
 *                 connections</a> in the <i>CodeCommit User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetSSHPublicKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetSSHPublicKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // GetSSHPublicKeyRequest
 *   UserName: "STRING_VALUE", // required
 *   SSHPublicKeyId: "STRING_VALUE", // required
 *   Encoding: "SSH" || "PEM", // required
 * };
 * const command = new GetSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * // { // GetSSHPublicKeyResponse
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
 * @param GetSSHPublicKeyCommandInput - {@link GetSSHPublicKeyCommandInput}
 * @returns {@link GetSSHPublicKeyCommandOutput}
 * @see {@link GetSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link GetSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
export class GetSSHPublicKeyCommand extends $Command
  .classBuilder<
    GetSSHPublicKeyCommandInput,
    GetSSHPublicKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "GetSSHPublicKey", {})
  .n("IAMClient", "GetSSHPublicKeyCommand")
  .sc(GetSSHPublicKey$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSSHPublicKeyRequest;
      output: GetSSHPublicKeyResponse;
    };
    sdk: {
      input: GetSSHPublicKeyCommandInput;
      output: GetSSHPublicKeyCommandOutput;
    };
  };
}
