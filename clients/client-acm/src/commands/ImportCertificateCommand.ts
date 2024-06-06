// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ImportCertificateRequest,
  ImportCertificateRequestFilterSensitiveLog,
  ImportCertificateResponse,
} from "../models/models_0";
import { de_ImportCertificateCommand, se_ImportCertificateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportCertificateCommand}.
 */
export interface ImportCertificateCommandInput extends ImportCertificateRequest {}
/**
 * @public
 *
 * The output of {@link ImportCertificateCommand}.
 */
export interface ImportCertificateCommandOutput extends ImportCertificateResponse, __MetadataBearer {}

/**
 * <p>Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with
 *       ACM. Note that <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html">integrated
 *         services</a> allow only certificate types and keys they support to be associated with
 *       their resources. Further, their support differs depending on whether the certificate is
 *       imported into IAM or into ACM. For more information, see the documentation for each
 *       service. For more information about importing certificates into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing
 *         Certificates</a> in the <i>Certificate Manager User Guide</i>. </p>
 *          <note>
 *             <p>ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for certificates that you import.</p>
 *          </note>
 *          <p>Note the following guidelines when importing third party certificates:</p>
 *          <ul>
 *             <li>
 *                <p>You must enter the private key that matches the certificate you are importing.</p>
 *             </li>
 *             <li>
 *                <p>The private key must be unencrypted. You cannot import a private key that is protected
 *           by a password or a passphrase.</p>
 *             </li>
 *             <li>
 *                <p>The private key must be no larger than 5 KB (5,120 bytes).</p>
 *             </li>
 *             <li>
 *                <p>If the certificate you are importing is not self-signed, you must enter its
 *           certificate chain.</p>
 *             </li>
 *             <li>
 *                <p>If a certificate chain is included, the issuer must be the subject of one of the
 *           certificates in the chain.</p>
 *             </li>
 *             <li>
 *                <p>The certificate, private key, and certificate chain must be PEM-encoded.</p>
 *             </li>
 *             <li>
 *                <p>The current time must be between the <code>Not Before</code> and <code>Not
 *             After</code> certificate fields.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Issuer</code> field must not be empty.</p>
 *             </li>
 *             <li>
 *                <p>The OCSP authority URL, if present, must not exceed 1000 characters.</p>
 *             </li>
 *             <li>
 *                <p>To import a new certificate, omit the <code>CertificateArn</code> argument. Include
 *           this argument only when you want to replace a previously imported certificate.</p>
 *             </li>
 *             <li>
 *                <p>When you import a certificate by using the CLI, you must specify the certificate, the
 *           certificate chain, and the private key by their file names preceded by
 *             <code>fileb://</code>. For example, you can specify a certificate saved in the
 *             <code>C:\temp</code> folder as <code>fileb://C:\temp\certificate_to_import.pem</code>.
 *           If you are making an HTTP or HTTPS Query request, include these arguments as BLOBs.
 *         </p>
 *             </li>
 *             <li>
 *                <p>When you import a certificate by using an SDK, you must specify the certificate, the
 *           certificate chain, and the private key files in the manner required by the programming
 *           language you're using. </p>
 *             </li>
 *             <li>
 *                <p>The cryptographic algorithm of an imported certificate must match the algorithm of the
 *           signing CA. For example, if the signing CA key type is RSA, then the certificate key type
 *           must also be RSA.</p>
 *             </li>
 *          </ul>
 *          <p>This operation returns the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
 *         Resource Name (ARN)</a> of the imported certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ImportCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ImportCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const input = { // ImportCertificateRequest
 *   CertificateArn: "STRING_VALUE",
 *   Certificate: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   PrivateKey: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   CertificateChain: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ImportCertificateCommand(input);
 * const response = await client.send(command);
 * // { // ImportCertificateResponse
 * //   CertificateArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportCertificateCommandInput - {@link ImportCertificateCommandInput}
 * @returns {@link ImportCertificateCommandOutput}
 * @see {@link ImportCertificateCommandInput} for command's `input` shape.
 * @see {@link ImportCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An input parameter was invalid.</p>
 *
 * @throws {@link InvalidTagException} (client fault)
 *  <p>One or both of the values that make up the key-value pair is not valid. For example, you
 *       cannot specify a tag value that begins with <code>aws:</code>.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An ACM quota has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account
 *       cannot be found.</p>
 *
 * @throws {@link TagPolicyException} (client fault)
 *  <p>A specified tag did not comply with an existing tag policy and was rejected.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains too many tags. Try the request again with fewer tags.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 * @public
 */
export class ImportCertificateCommand extends $Command
  .classBuilder<
    ImportCertificateCommandInput,
    ImportCertificateCommandOutput,
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
  .s("CertificateManager", "ImportCertificate", {})
  .n("ACMClient", "ImportCertificateCommand")
  .f(ImportCertificateRequestFilterSensitiveLog, void 0)
  .ser(se_ImportCertificateCommand)
  .de(de_ImportCertificateCommand)
  .build() {}
