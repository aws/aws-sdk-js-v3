// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExportCertificateRequest, ExportCertificateResponse } from "../models/models_0";
import { ExportCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExportCertificateCommand}.
 */
export interface ExportCertificateCommandInput extends ExportCertificateRequest {}
/**
 * @public
 *
 * The output of {@link ExportCertificateCommand}.
 */
export interface ExportCertificateCommandOutput extends ExportCertificateResponse, __MetadataBearer {}

/**
 * Exports a private certificate issued by a private certificate authority (CA) or a public certificate for use anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private key associated with the public key that is embedded in the certificate. For security, you must assign a passphrase for the private key when exporting it.
 *
 * For information about exporting and formatting a certificate using the ACM console or CLI, see [Export a private certificate](https://docs.aws.amazon.com/acm/latest/userguide/export-private.html) and [Export a public certificate](https://docs.aws.amazon.com/acm/latest/userguide/export-public-certificate).
 *
 * > **Note:** ACM public certificates created prior to June 17, 2025 cannot be exported.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ExportCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ExportCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // ExportCertificateRequest
 *   CertificateArn: "STRING_VALUE", // required
 *   Passphrase: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new ExportCertificateCommand(input);
 * const response = await client.send(command);
 * // { // ExportCertificateResponse
 * //   Certificate: "STRING_VALUE",
 * //   CertificateChain: "STRING_VALUE",
 * //   PrivateKey: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportCertificateCommandInput - {@link ExportCertificateCommandInput}
 * @returns {@link ExportCertificateCommandOutput}
 * @see {@link ExportCertificateCommandInput} for command's `input` shape.
 * @see {@link ExportCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The requested Amazon Resource Name (ARN) does not refer to an existing resource.
 *
 * @throws {@link RequestInProgressException} (client fault)
 *
 * The certificate request is in process and the certificate in your account has not yet been issued.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified certificate cannot be found in the caller's account or the caller's account cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded a quota.
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
export class ExportCertificateCommand extends command<ExportCertificateCommandInput, ExportCertificateCommandOutput>(
  _ep0,
  _mw0,
  "ExportCertificate",
  ExportCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportCertificateRequest;
      output: ExportCertificateResponse;
    };
    sdk: {
      input: ExportCertificateCommandInput;
      output: ExportCertificateCommandOutput;
    };
  };
}
