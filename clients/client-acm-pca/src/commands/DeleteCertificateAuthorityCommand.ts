// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCertificateAuthorityRequest } from "../models/models_0";
import { de_DeleteCertificateAuthorityCommand, se_DeleteCertificateAuthorityCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCertificateAuthorityCommand}.
 */
export interface DeleteCertificateAuthorityCommandInput extends DeleteCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCertificateAuthorityCommand}.
 */
export interface DeleteCertificateAuthorityCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a private certificate authority (CA). You must provide the Amazon Resource Name (ARN) of the private CA that you want to delete. You can find the ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. </p> <note> <p>Deleting a CA will invalidate other CAs and certificates below it in your CA hierarchy.</p> </note> <p>Before you can delete a CA that you have created and activated, you must disable it. To do this, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action and set the <b>CertificateAuthorityStatus</b> parameter to <code>DISABLED</code>. </p> <p>Additionally, you can delete a CA if you are waiting for it to be created (that is, the status of the CA is <code>CREATING</code>). You can also delete it if the CA has been created but you haven't yet imported the signed certificate into Amazon Web Services Private CA (that is, the status of the CA is <code>PENDING_CERTIFICATE</code>). </p> <p>When you successfully call <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a>, the CA's status changes to <code>DELETED</code>. However, the CA won't be permanently deleted until the restoration period has passed. By default, if you do not set the <code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> action returns the time remaining in the restoration window of a private CA in the <code>DELETED</code> state. To restore an eligible CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RestoreCertificateAuthority.html">RestoreCertificateAuthority</a> action.</p> <important> <p>A private CA can be deleted if it is in the <code>PENDING_CERTIFICATE</code>, <code>CREATING</code>, <code>EXPIRED</code>, <code>DISABLED</code>, or <code>FAILED</code> state. To delete a CA in the <code>ACTIVE</code> state, you must first disable it, or else the delete request results in an exception. If you are deleting a private CA in the <code>PENDING_CERTIFICATE</code> or <code>DISABLED</code> state, you can set the length of its restoration period to 7-30 days. The default is 30. During this time, the status is set to <code>DELETED</code> and the CA can be restored. A private CA deleted in the <code>CREATING</code> or <code>FAILED</code> state has no assigned restoration period and cannot be restored.</p> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, DeleteCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, DeleteCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * // import type { ACMPCAClientConfig } from "@aws-sdk/client-acm-pca";
 * const config = {}; // type is ACMPCAClientConfig
 * const client = new ACMPCAClient(config);
 * const input = { // DeleteCertificateAuthorityRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 *   PermanentDeletionTimeInDays: Number("int"),
 * };
 * const command = new DeleteCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCertificateAuthorityCommandInput - {@link DeleteCertificateAuthorityCommandInput}
 * @returns {@link DeleteCertificateAuthorityCommandOutput}
 * @see {@link DeleteCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link DeleteCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>A previous update to your private CA is still ongoing.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The state of the private CA does not allow this action to occur.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy cannot be found.</p>
 *
 * @throws {@link ACMPCAServiceException}
 * <p>Base exception class for all service exceptions from ACMPCA service.</p>
 *
 *
 * @public
 */
export class DeleteCertificateAuthorityCommand extends $Command
  .classBuilder<
    DeleteCertificateAuthorityCommandInput,
    DeleteCertificateAuthorityCommandOutput,
    ACMPCAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ACMPCAClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ACMPrivateCA", "DeleteCertificateAuthority", {})
  .n("ACMPCAClient", "DeleteCertificateAuthorityCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCertificateAuthorityCommand)
  .de(de_DeleteCertificateAuthorityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCertificateAuthorityRequest;
      output: {};
    };
    sdk: {
      input: DeleteCertificateAuthorityCommandInput;
      output: DeleteCertificateAuthorityCommandOutput;
    };
  };
}
