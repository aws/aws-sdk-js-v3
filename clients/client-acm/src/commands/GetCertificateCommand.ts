// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCertificateRequest, GetCertificateResponse } from "../models/models_0";
import { GetCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCertificateCommand}.
 */
export interface GetCertificateCommandInput extends GetCertificateRequest {}
/**
 * @public
 *
 * The output of {@link GetCertificateCommand}.
 */
export interface GetCertificateCommandOutput extends GetCertificateResponse, __MetadataBearer {}

/**
 * Retrieves a certificate and its certificate chain. The certificate may be either a public or private certificate issued using the ACM `RequestCertificate` action, or a certificate imported into ACM using the `ImportCertificate` action. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use [OpenSSL](https://wiki.openssl.org/index.php/Command_Line_Utilities) to decode the certificates and inspect individual fields.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, GetCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, GetCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // GetCertificateRequest
 *   CertificateArn: "STRING_VALUE", // required
 * };
 * const command = new GetCertificateCommand(input);
 * const response = await client.send(command);
 * // { // GetCertificateResponse
 * //   Certificate: "STRING_VALUE",
 * //   CertificateChain: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCertificateCommandInput - {@link GetCertificateCommandInput}
 * @returns {@link GetCertificateCommandOutput}
 * @see {@link GetCertificateCommandInput} for command's `input` shape.
 * @see {@link GetCertificateCommandOutput} for command's `response` shape.
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
export class GetCertificateCommand extends command<GetCertificateCommandInput, GetCertificateCommandOutput>(
  _ep0,
  _mw0,
  "GetCertificate",
  GetCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCertificateRequest;
      output: GetCertificateResponse;
    };
    sdk: {
      input: GetCertificateCommandInput;
      output: GetCertificateCommandOutput;
    };
  };
}
