// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCertificateRequest } from "../models/models_0";
import { DeleteCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCertificateCommand}.
 */
export interface DeleteCertificateCommandInput extends DeleteCertificateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCertificateCommand}.
 */
export interface DeleteCertificateCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a certificate and its associated private key. If this action succeeds, the certificate is not available for use by Amazon Web Services services integrated with ACM. Deleting a certificate is eventually consistent. The may be a short delay before the certificate no longer appears in the list that can be displayed by calling the <a>ListCertificates</a> action or be retrieved by calling the <a>GetCertificate</a> action.</p> <note> <p>You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in use, you must first remove the certificate association using the console or the CLI for the associated service.</p> <p>Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA until it is deleted. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PCADeleteCA.html"> Deleting Your Private CA</a> in the <i>Private Certificate Authority User Guide</i>.</p> <p>You cannot delete a certificate with a <code>CertificateKeyPairOrigin</code> of <code>ACME</code>. ACM automatically deletes these certificates 1 year after they expire.</p> </note> <p>Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA until it is deleted. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PCADeleteCA.html">Deleting your private CA</a> in the <i>Amazon Web Services Private Certificate Authority User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, DeleteCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, DeleteCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // DeleteCertificateRequest
 *   CertificateArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCertificateCommandInput - {@link DeleteCertificateCommandInput}
 * @returns {@link DeleteCertificateCommandOutput}
 * @see {@link DeleteCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to update a resource or configuration that is already being created or updated. Wait for the previous operation to finish and try again.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The certificate is in use by another Amazon Web Services service in the caller's account. Remove the association and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The supplied input failed to satisfy constraints of an Amazon Web Services service.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class DeleteCertificateCommand extends command<DeleteCertificateCommandInput, DeleteCertificateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCertificate",
  DeleteCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCertificateRequest;
      output: {};
    };
    sdk: {
      input: DeleteCertificateCommandInput;
      output: DeleteCertificateCommandOutput;
    };
  };
}
