// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListSSHPublicKeysRequest, ListSSHPublicKeysResponse } from "../models/models_0";
import { ListSSHPublicKeys } from "../schemas/schemas_18_HPublic";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSSHPublicKeysCommand}.
 */
export interface ListSSHPublicKeysCommandInput extends ListSSHPublicKeysRequest {}
/**
 * @public
 *
 * The output of {@link ListSSHPublicKeysCommand}.
 */
export interface ListSSHPublicKeysCommandOutput extends ListSSHPublicKeysResponse, __MetadataBearer {}

/**
 * <p>Returns information about the SSH public keys associated with the specified IAM
 *             user. If none exists, the operation returns an empty list.</p>
 *          <p>The SSH public keys returned by this operation are used only for authenticating the
 *             IAM user to an CodeCommit repository. For more information about using SSH keys to
 *             authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for
 *                 SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
 *          <p>Although each user is limited to a small number of keys, you can still paginate the
 *             results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListSSHPublicKeysCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListSSHPublicKeysCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListSSHPublicKeysRequest
 *   UserName: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListSSHPublicKeysCommand(input);
 * const response = await client.send(command);
 * // { // ListSSHPublicKeysResponse
 * //   SSHPublicKeys: [ // SSHPublicKeyListType
 * //     { // SSHPublicKeyMetadata
 * //       UserName: "STRING_VALUE", // required
 * //       SSHPublicKeyId: "STRING_VALUE", // required
 * //       Status: "Active" || "Inactive" || "Expired", // required
 * //       UploadDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSSHPublicKeysCommandInput - {@link ListSSHPublicKeysCommandInput}
 * @returns {@link ListSSHPublicKeysCommandOutput}
 * @see {@link ListSSHPublicKeysCommandInput} for command's `input` shape.
 * @see {@link ListSSHPublicKeysCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class ListSSHPublicKeysCommand extends $Command
  .classBuilder<
    ListSSHPublicKeysCommandInput,
    ListSSHPublicKeysCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "ListSSHPublicKeys", {})
  .n("IAMClient", "ListSSHPublicKeysCommand")
  .sc(ListSSHPublicKeys)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSSHPublicKeysRequest;
      output: ListSSHPublicKeysResponse;
    };
    sdk: {
      input: ListSSHPublicKeysCommandInput;
      output: ListSSHPublicKeysCommandOutput;
    };
  };
}
