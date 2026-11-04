// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RevokeCertificateRequest } from "../models/models_0";
import { RevokeCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RevokeCertificateCommand}.
 */
export interface RevokeCertificateCommandInput extends RevokeCertificateRequest {}
/**
 * @public
 *
 * The output of {@link RevokeCertificateCommand}.
 */
export interface RevokeCertificateCommandOutput extends __MetadataBearer {}

/**
 * Revokes a certificate that was issued inside Amazon Web Services Private CA. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. Amazon Web Services Private CA writes the CRL to an S3 bucket that you specify. A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason the CRL update fails, Amazon Web Services Private CA attempts makes further attempts every 15 minutes. With Amazon CloudWatch, you can create alarms for the metrics `CRLGenerated` and `MisconfiguredCRLBucket`. For more information, see [Supported CloudWatch Metrics](https://docs.aws.amazon.com/privateca/latest/userguide/PcaCloudWatch.html).
 *
 * > **Note:** Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see [Access policies for CRLs in Amazon S3](https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies).
 *
 * Amazon Web Services Private CA also writes revocation information to the audit report. For more information, see [CreateCertificateAuthorityAuditReport](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html).
 *
 * > **Note:** You cannot revoke a root CA self-signed certificate.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, RevokeCertificateCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, RevokeCertificateCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * // import type { ACMPCAClientConfig } from "@aws-sdk/client-acm-pca";
 * const config = {}; // type is ACMPCAClientConfig
 * const client = new ACMPCAClient(config);
 * const input = { // RevokeCertificateRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 *   CertificateSerial: "STRING_VALUE", // required
 *   RevocationReason: "UNSPECIFIED" || "KEY_COMPROMISE" || "CERTIFICATE_AUTHORITY_COMPROMISE" || "AFFILIATION_CHANGED" || "SUPERSEDED" || "CESSATION_OF_OPERATION" || "PRIVILEGE_WITHDRAWN" || "A_A_COMPROMISE", // required
 * };
 * const command = new RevokeCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeCertificateCommandInput - {@link RevokeCertificateCommandInput}
 * @returns {@link RevokeCertificateCommandOutput}
 * @see {@link RevokeCertificateCommandInput} for command's `input` shape.
 * @see {@link RevokeCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * An Amazon Web Services Private CA quota has been exceeded. See the exception message returned to determine the quota that was exceeded.
 *
 * @throws {@link RequestAlreadyProcessedException} (client fault)
 *
 * Your request has already been completed.
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
export class RevokeCertificateCommand extends command<RevokeCertificateCommandInput, RevokeCertificateCommandOutput>(
  _ep0,
  _mw0,
  "RevokeCertificate",
  RevokeCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeCertificateRequest;
      output: {};
    };
    sdk: {
      input: RevokeCertificateCommandInput;
      output: RevokeCertificateCommandOutput;
    };
  };
}
