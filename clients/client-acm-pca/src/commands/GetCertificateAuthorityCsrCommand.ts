// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCertificateAuthorityCsrRequest, GetCertificateAuthorityCsrResponse } from "../models/models_0";
import { GetCertificateAuthorityCsr$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCertificateAuthorityCsrCommand}.
 */
export interface GetCertificateAuthorityCsrCommandInput extends GetCertificateAuthorityCsrRequest {}
/**
 * @public
 *
 * The output of {@link GetCertificateAuthorityCsrCommand}.
 */
export interface GetCertificateAuthorityCsrCommandOutput extends GetCertificateAuthorityCsrResponse, __MetadataBearer {}

/**
 * Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html) action. Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA. Then import the signed certificate back into Amazon Web Services Private CA by calling the [ImportCertificateAuthorityCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html) action. The CSR is returned as a base64 PEM-encoded string.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, GetCertificateAuthorityCsrCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, GetCertificateAuthorityCsrCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * // import type { ACMPCAClientConfig } from "@aws-sdk/client-acm-pca";
 * const config = {}; // type is ACMPCAClientConfig
 * const client = new ACMPCAClient(config);
 * const input = { // GetCertificateAuthorityCsrRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 * };
 * const command = new GetCertificateAuthorityCsrCommand(input);
 * const response = await client.send(command);
 * // { // GetCertificateAuthorityCsrResponse
 * //   Csr: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCertificateAuthorityCsrCommandInput - {@link GetCertificateAuthorityCsrCommandInput}
 * @returns {@link GetCertificateAuthorityCsrCommandOutput}
 * @see {@link GetCertificateAuthorityCsrCommandInput} for command's `input` shape.
 * @see {@link GetCertificateAuthorityCsrCommandOutput} for command's `response` shape.
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
export class GetCertificateAuthorityCsrCommand extends command<GetCertificateAuthorityCsrCommandInput, GetCertificateAuthorityCsrCommandOutput>(
  _ep0,
  _mw0,
  "GetCertificateAuthorityCsr",
  GetCertificateAuthorityCsr$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCertificateAuthorityCsrRequest;
      output: GetCertificateAuthorityCsrResponse;
    };
    sdk: {
      input: GetCertificateAuthorityCsrCommandInput;
      output: GetCertificateAuthorityCsrCommandOutput;
    };
  };
}
