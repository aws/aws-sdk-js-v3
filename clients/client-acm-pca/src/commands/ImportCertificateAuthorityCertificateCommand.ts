// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportCertificateAuthorityCertificateRequest } from "../models/models_0";
import { ImportCertificateAuthorityCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ImportCertificateAuthorityCertificateCommand}.
 */
export interface ImportCertificateAuthorityCertificateCommandInput extends ImportCertificateAuthorityCertificateRequest {}
/**
 * @public
 *
 * The output of {@link ImportCertificateAuthorityCertificateCommand}.
 */
export interface ImportCertificateAuthorityCertificateCommandOutput extends __MetadataBearer {}

/**
 * Imports a signed private CA certificate into Amazon Web Services Private CA. This action is used when you are using a chain of trust whose root is located outside Amazon Web Services Private CA. Before you can call this action, the following preparations must in place:
 *
 * 1. In Amazon Web Services Private CA, call the [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html) action to create the private CA that you plan to back with the imported certificate.
 * 2. Call the [GetCertificateAuthorityCsr](https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCsr.html) action to generate a certificate signing request (CSR).
 * 3. Sign the CSR using a root or intermediate CA hosted by either an on-premises PKI hierarchy or by a commercial CA.
 * 4. Create a certificate chain and copy the signed certificate and the certificate chain to your working directory.
 *
 * Amazon Web Services Private CA supports three scenarios for installing a CA certificate:
 *
 * - Installing a certificate for a root CA hosted by Amazon Web Services Private CA.
 * - Installing a subordinate CA certificate whose parent authority is hosted by Amazon Web Services Private CA.
 * - Installing a subordinate CA certificate whose parent authority is externally hosted.
 *
 * The following additional requirements apply when you import a CA certificate.
 *
 * - Only a self-signed certificate can be imported as a root CA.
 * - A self-signed certificate cannot be imported as a subordinate CA.
 * - Your certificate chain must not include the private CA certificate that you are importing.
 * - Your root CA must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built.
 * - The chain must be PEM-encoded.
 * - The maximum allowed size of a certificate is 32 KB.
 * - The maximum allowed size of a certificate chain is 2 MB.
 *
 * *Enforcement of Critical Constraints*
 *
 * Amazon Web Services Private CA allows the following extensions to be marked critical in the imported CA certificate or chain.
 *
 * - Authority key identifier
 * - Basic constraints (*must* be marked critical)
 * - Certificate policies
 * - Extended key usage
 * - Inhibit anyPolicy
 * - Issuer alternative name
 * - Key usage
 * - Name constraints
 * - Policy mappings
 * - Subject alternative name
 * - Subject directory attributes
 * - Subject key identifier
 * - Subject information access
 *
 * Amazon Web Services Private CA rejects the following extensions when they are marked critical in an imported CA certificate or chain.
 *
 * - Authority information access
 * - CRL distribution points
 * - Freshest CRL
 * - Policy constraints
 *
 * Amazon Web Services Private Certificate Authority will also reject any other extension marked as critical not contained on the preceding list of allowed extensions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, ImportCertificateAuthorityCertificateCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, ImportCertificateAuthorityCertificateCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * // import type { ACMPCAClientConfig } from "@aws-sdk/client-acm-pca";
 * const config = {}; // type is ACMPCAClientConfig
 * const client = new ACMPCAClient(config);
 * const input = { // ImportCertificateAuthorityCertificateRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 *   Certificate: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   CertificateChain: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new ImportCertificateAuthorityCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ImportCertificateAuthorityCertificateCommandInput - {@link ImportCertificateAuthorityCertificateCommandInput}
 * @returns {@link ImportCertificateAuthorityCertificateCommandOutput}
 * @see {@link ImportCertificateAuthorityCertificateCommandInput} for command's `input` shape.
 * @see {@link ImportCertificateAuthorityCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link CertificateMismatchException} (client fault)
 *
 * The certificate authority certificate you are importing does not comply with conditions specified in the certificate that signed it.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * A previous update to your private CA is still ongoing.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The requested Amazon Resource Name (ARN) does not refer to an existing resource.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request action cannot be performed or is prohibited.
 *
 * @throws {@link InvalidStateException} (client fault)
 *
 * The state of the private CA does not allow this action to occur.
 *
 * @throws {@link MalformedCertificateException} (client fault)
 *
 * One or more fields in the certificate are invalid.
 *
 * @throws {@link RequestFailedException} (client fault)
 *
 * The request has failed for an unspecified reason.
 *
 * @throws {@link RequestInProgressException} (client fault)
 *
 * Your request is already in progress.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource such as a private CA, S3 bucket, certificate, audit report, or policy cannot be found.
 *
 * @throws {@link ACMPCAServiceException}
 *
 * Base exception class for all service exceptions from ACMPCA service.
 *
 * @public
 */
export class ImportCertificateAuthorityCertificateCommand extends command<ImportCertificateAuthorityCertificateCommandInput, ImportCertificateAuthorityCertificateCommandOutput>(
  _ep0,
  _mw0,
  "ImportCertificateAuthorityCertificate",
  ImportCertificateAuthorityCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportCertificateAuthorityCertificateRequest;
      output: {};
    };
    sdk: {
      input: ImportCertificateAuthorityCertificateCommandInput;
      output: ImportCertificateAuthorityCertificateCommandOutput;
    };
  };
}
