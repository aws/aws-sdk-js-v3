// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCertificateRequest } from "../models/models_0";
import { de_DeleteCertificateCommand, se_DeleteCertificateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a certificate and its associated private key. If this action succeeds, the
 *       certificate no longer appears in the list that can be displayed by calling the <a>ListCertificates</a> action or be retrieved by calling the <a>GetCertificate</a> action. The certificate will not be available for use by Amazon Web Services
 *       services integrated with ACM. </p>
 *          <note>
 *             <p>You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To
 *         delete a certificate that is in use, the certificate association must first be
 *         removed.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, DeleteCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, DeleteCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
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
 *  <p>You are trying to update a resource or configuration that is already being created or
 *       updated. Wait for the previous operation to finish and try again.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The certificate is in use by another Amazon Web Services service in the caller's account. Remove the
 *       association and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account
 *       cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 * @public
 */
export class DeleteCertificateCommand extends $Command
  .classBuilder<
    DeleteCertificateCommandInput,
    DeleteCertificateCommandOutput,
    ACMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ACMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CertificateManager", "DeleteCertificate", {})
  .n("ACMClient", "DeleteCertificateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCertificateCommand)
  .de(de_DeleteCertificateCommand)
  .build() {}
