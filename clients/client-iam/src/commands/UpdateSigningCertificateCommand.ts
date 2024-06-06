// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateSigningCertificateRequest } from "../models/models_1";
import { de_UpdateSigningCertificateCommand, se_UpdateSigningCertificateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSigningCertificateCommand}.
 */
export interface UpdateSigningCertificateCommandInput extends UpdateSigningCertificateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSigningCertificateCommand}.
 */
export interface UpdateSigningCertificateCommandOutput extends __MetadataBearer {}

/**
 * <p>Changes the status of the specified user signing certificate from active to disabled,
 *             or vice versa. This operation can be used to disable an IAM user's signing
 *             certificate as part of a certificate rotation work flow.</p>
 *          <p>If the <code>UserName</code> field is not specified, the user name is determined
 *             implicitly based on the Amazon Web Services access key ID used to sign the request. This operation
 *             works for access keys under the Amazon Web Services account. Consequently, you can use this operation
 *             to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated
 *             users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateSigningCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateSigningCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // UpdateSigningCertificateRequest
 *   UserName: "STRING_VALUE",
 *   CertificateId: "STRING_VALUE", // required
 *   Status: "Active" || "Inactive", // required
 * };
 * const command = new UpdateSigningCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSigningCertificateCommandInput - {@link UpdateSigningCertificateCommandInput}
 * @returns {@link UpdateSigningCertificateCommandOutput}
 * @see {@link UpdateSigningCertificateCommandInput} for command's `input` shape.
 * @see {@link UpdateSigningCertificateCommandOutput} for command's `response` shape.
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
 * @public
 * @example To change the active status of a signing certificate for an IAM user
 * ```javascript
 * // The following command changes the status of a signing certificate for a user named Bob to Inactive.
 * const input = {
 *   "CertificateId": "TA7SMP42TDN5Z26OBPJE7EXAMPLE",
 *   "Status": "Inactive",
 *   "UserName": "Bob"
 * };
 * const command = new UpdateSigningCertificateCommand(input);
 * await client.send(command);
 * // example id: 829aee7b-efc5-4b3b-84a5-7f899b38018d
 * ```
 *
 */
export class UpdateSigningCertificateCommand extends $Command
  .classBuilder<
    UpdateSigningCertificateCommandInput,
    UpdateSigningCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "UpdateSigningCertificate", {})
  .n("IAMClient", "UpdateSigningCertificateCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSigningCertificateCommand)
  .de(de_UpdateSigningCertificateCommand)
  .build() {}
