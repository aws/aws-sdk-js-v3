// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateAccessKeyRequest, CreateAccessKeyResponse } from "../models/models_0";
import { CreateAccessKey } from "../schemas/schemas_7_Access";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessKeyCommand}.
 */
export interface CreateAccessKeyCommandInput extends CreateAccessKeyRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessKeyCommand}.
 */
export interface CreateAccessKeyCommandOutput extends CreateAccessKeyResponse, __MetadataBearer {}

/**
 * <p> Creates a new Amazon Web Services secret access key and corresponding Amazon Web Services access key ID for the
 *             specified user. The default status for new keys is <code>Active</code>.</p>
 *          <p>If you do not specify a user name, IAM determines the user name implicitly based on
 *             the Amazon Web Services access key ID signing the request. This operation works for access keys under
 *             the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root
 *             user credentials. This is true even if the Amazon Web Services account has no associated users.</p>
 *          <p> For information about quotas on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
 *                 quotas</a> in the <i>IAM User Guide</i>.</p>
 *          <important>
 *             <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible
 *                 only during key and user creation. You must save the key (for example, in a text
 *                 file) if you want to be able to access it again. If a secret key is lost, you can
 *                 delete the access keys for the associated user and then create new keys.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateAccessKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateAccessKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // CreateAccessKeyRequest
 *   UserName: "STRING_VALUE",
 * };
 * const command = new CreateAccessKeyCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessKeyResponse
 * //   AccessKey: { // AccessKey
 * //     UserName: "STRING_VALUE", // required
 * //     AccessKeyId: "STRING_VALUE", // required
 * //     Status: "Active" || "Inactive" || "Expired", // required
 * //     SecretAccessKey: "STRING_VALUE", // required
 * //     CreateDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAccessKeyCommandInput - {@link CreateAccessKeyCommandInput}
 * @returns {@link CreateAccessKeyCommandOutput}
 * @see {@link CreateAccessKeyCommandInput} for command's `input` shape.
 * @see {@link CreateAccessKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To create an access key for an IAM user
 * ```javascript
 * // The following command creates an access key (access key ID and secret access key) for the IAM user named Bob.
 * const input = {
 *   UserName: "Bob"
 * };
 * const command = new CreateAccessKeyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AccessKey: {
 *     AccessKeyId: "AKIAIOSFODNN7EXAMPLE",
 *     CreateDate: "2015-03-09T18:39:23.411Z",
 *     SecretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
 *     Status: "Active",
 *     UserName: "Bob"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateAccessKeyCommand extends $Command
  .classBuilder<
    CreateAccessKeyCommandInput,
    CreateAccessKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "CreateAccessKey", {})
  .n("IAMClient", "CreateAccessKeyCommand")
  .sc(CreateAccessKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessKeyRequest;
      output: CreateAccessKeyResponse;
    };
    sdk: {
      input: CreateAccessKeyCommandInput;
      output: CreateAccessKeyCommandOutput;
    };
  };
}
