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
 * Retrieves a certificate from your private CA or one that has been shared with you. The ARN of the certificate is returned when you call the [IssueCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html) action. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the **GetCertificate** action. You can retrieve the certificate if it is in the **ISSUED**, **EXPIRED**, or **REVOKED** state. You can call the [CreateCertificateAuthorityAuditReport](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html) action to create a report that contains information about all of the certificates issued and revoked by your private CA.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, GetCertificateCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, GetCertificateCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * // import type { ACMPCAClientConfig } from "@aws-sdk/client-acm-pca";
 * const config = {}; // type is ACMPCAClientConfig
 * const client = new ACMPCAClient(config);
 * const input = { // GetCertificateRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
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
