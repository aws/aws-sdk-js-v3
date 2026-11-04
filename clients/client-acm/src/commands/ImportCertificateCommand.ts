// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportCertificateRequest, ImportCertificateResponse } from "../models/models_0";
import { ImportCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note that [integrated services](https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html) allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see [Importing Certificates](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the *Certificate Manager User Guide*.
 *
 * > **Note:** ACM does not provide [managed renewal](https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html) for certificates that you import.
 *
 * Note the following guidelines when importing third party certificates:
 *
 * - You must enter the private key that matches the certificate you are importing.
 * - The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase.
 * - The private key must be no larger than 5 KB (5,120 bytes).
 * - The certificate, private key, and certificate chain must be PEM-encoded.
 * - The current time must be between the `Not Before` and `Not After` certificate fields.
 * - The `Issuer` field must not be empty.
 * - The OCSP authority URL, if present, must not exceed 1000 characters.
 * - To import a new certificate, omit the `CertificateArn` argument. Include this argument only when you want to replace a previously imported certificate.
 * - When you import a certificate by using the CLI, you must specify the certificate, the certificate chain, and the private key by their file names preceded by `fileb://`. For example, you can specify a certificate saved in the `C:\temp` folder as `fileb://C:\temp\certificate_to_import.pem`. If you are making an HTTP or HTTPS Query request, include these arguments as BLOBs.
 * - When you import a certificate by using an SDK, you must specify the certificate, the certificate chain, and the private key files in the manner required by the programming language you're using.
 * - The cryptographic algorithm of an imported certificate must match the algorithm of the signing CA. For example, if the signing CA key type is RSA, then the certificate key type must also be RSA.
 *
 * This operation returns the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the imported certificate.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ImportCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ImportCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
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
 * @throws {@link ConflictException} (client fault)
 *
 * You are trying to update a resource or configuration that is already being created or updated. Wait for the previous operation to finish and try again.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The requested Amazon Resource Name (ARN) does not refer to an existing resource.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * An input parameter was invalid.
 *
 * @throws {@link InvalidTagException} (client fault)
 *
 * One or both of the values that make up the key-value pair is not valid. For example, you cannot specify a tag value that begins with `aws:`.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * An ACM quota has been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified certificate cannot be found in the caller's account or the caller's account cannot be found.
 *
 * @throws {@link TagPolicyException} (client fault)
 *
 * A specified tag did not comply with an existing tag policy and was rejected.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * The request contains too many tags. Try the request again with fewer tags.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The supplied input failed to satisfy constraints of an Amazon Web Services service.
 *
 * @throws {@link ACMServiceException}
 *
 * Base exception class for all service exceptions from ACM service.
 *
 * @public
 */
export class ImportCertificateCommand extends command<ImportCertificateCommandInput, ImportCertificateCommandOutput>(
  _ep0,
  _mw0,
  "ImportCertificate",
  ImportCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportCertificateRequest;
      output: ImportCertificateResponse;
    };
    sdk: {
      input: ImportCertificateCommandInput;
      output: ImportCertificateCommandOutput;
    };
  };
}
