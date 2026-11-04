// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetCertificateAuthorityCertificateRequest,
  GetCertificateAuthorityCertificateResponse,
} from "../models/models_0";
import { GetCertificateAuthorityCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCertificateAuthorityCertificateCommand}.
 */
export interface GetCertificateAuthorityCertificateCommandInput extends GetCertificateAuthorityCertificateRequest {}
/**
 * @public
 *
 * The output of {@link GetCertificateAuthorityCertificateCommand}.
 */
export interface GetCertificateAuthorityCertificateCommandOutput extends GetCertificateAuthorityCertificateResponse, __MetadataBearer {}

/**
 * Retrieves the certificate and certificate chain for your private certificate authority (CA) or one that has been shared with you. Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, GetCertificateAuthorityCertificateCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, GetCertificateAuthorityCertificateCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * // import type { ACMPCAClientConfig } from "@aws-sdk/client-acm-pca";
 * const config = {}; // type is ACMPCAClientConfig
 * const client = new ACMPCAClient(config);
 * const input = { // GetCertificateAuthorityCertificateRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 * };
 * const command = new GetCertificateAuthorityCertificateCommand(input);
 * const response = await client.send(command);
 * // { // GetCertificateAuthorityCertificateResponse
 * //   Certificate: "STRING_VALUE",
 * //   CertificateChain: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCertificateAuthorityCertificateCommandInput - {@link GetCertificateAuthorityCertificateCommandInput}
 * @returns {@link GetCertificateAuthorityCertificateCommandOutput}
 * @see {@link GetCertificateAuthorityCertificateCommandInput} for command's `input` shape.
 * @see {@link GetCertificateAuthorityCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The requested Amazon Resource Name (ARN) does not refer to an existing resource.
 *
 * @throws {@link InvalidStateException} (client fault)
 *
 * The state of the private CA does not allow this action to occur.
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
export class GetCertificateAuthorityCertificateCommand extends command<GetCertificateAuthorityCertificateCommandInput, GetCertificateAuthorityCertificateCommandOutput>(
  _ep0,
  _mw0,
  "GetCertificateAuthorityCertificate",
  GetCertificateAuthorityCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCertificateAuthorityCertificateRequest;
      output: GetCertificateAuthorityCertificateResponse;
    };
    sdk: {
      input: GetCertificateAuthorityCertificateCommandInput;
      output: GetCertificateAuthorityCertificateCommandOutput;
    };
  };
}
