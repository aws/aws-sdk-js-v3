// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteSigningCertificateRequest } from "../models/models_0";
import { de_DeleteSigningCertificateCommand, se_DeleteSigningCertificateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSigningCertificateCommand}.
 */
export interface DeleteSigningCertificateCommandInput extends DeleteSigningCertificateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSigningCertificateCommand}.
 */
export interface DeleteSigningCertificateCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a signing certificate associated with the specified IAM user.</p>
 *          <p>If you do not specify a user name, IAM determines the user name implicitly based on
 *             the Amazon Web Services access key ID signing the request. This operation works for access keys under
 *             the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root
 *             user credentials even if the Amazon Web Services account has no associated IAM users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteSigningCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteSigningCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DeleteSigningCertificateRequest
 *   UserName: "STRING_VALUE",
 *   CertificateId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSigningCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSigningCertificateCommandInput - {@link DeleteSigningCertificateCommandInput}
 * @returns {@link DeleteSigningCertificateCommandOutput}
 * @see {@link DeleteSigningCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteSigningCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
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
 * @example To delete a signing certificate for an IAM user
 * ```javascript
 * // The following command deletes the specified signing certificate for the IAM user named Anika.
 * const input = {
 *   CertificateId: "TA7SMP42TDN5Z26OBPJE7EXAMPLE",
 *   UserName: "Anika"
 * };
 * const command = new DeleteSigningCertificateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteSigningCertificateCommand extends $Command
  .classBuilder<
    DeleteSigningCertificateCommandInput,
    DeleteSigningCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "DeleteSigningCertificate", {})
  .n("IAMClient", "DeleteSigningCertificateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSigningCertificateCommand)
  .de(de_DeleteSigningCertificateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSigningCertificateRequest;
      output: {};
    };
    sdk: {
      input: DeleteSigningCertificateCommandInput;
      output: DeleteSigningCertificateCommandOutput;
    };
  };
}
