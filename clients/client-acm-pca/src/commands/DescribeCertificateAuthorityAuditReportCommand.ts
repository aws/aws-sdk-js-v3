// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeCertificateAuthorityAuditReportRequest,
  DescribeCertificateAuthorityAuditReportResponse,
} from "../models/models_0";
import { DescribeCertificateAuthorityAuditReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeCertificateAuthorityAuditReportCommand}.
 */
export interface DescribeCertificateAuthorityAuditReportCommandInput extends DescribeCertificateAuthorityAuditReportRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCertificateAuthorityAuditReportCommand}.
 */
export interface DescribeCertificateAuthorityAuditReportCommandOutput extends DescribeCertificateAuthorityAuditReportResponse, __MetadataBearer {}

/**
 * Lists information about a specific audit report created by calling the [CreateCertificateAuthorityAuditReport](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html) action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the [IssueCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html) action or the [RevokeCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, DescribeCertificateAuthorityAuditReportCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, DescribeCertificateAuthorityAuditReportCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * // import type { ACMPCAClientConfig } from "@aws-sdk/client-acm-pca";
 * const config = {}; // type is ACMPCAClientConfig
 * const client = new ACMPCAClient(config);
 * const input = { // DescribeCertificateAuthorityAuditReportRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 *   AuditReportId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCertificateAuthorityAuditReportCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCertificateAuthorityAuditReportResponse
 * //   AuditReportStatus: "CREATING" || "SUCCESS" || "FAILED",
 * //   S3BucketName: "STRING_VALUE",
 * //   S3Key: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeCertificateAuthorityAuditReportCommandInput - {@link DescribeCertificateAuthorityAuditReportCommandInput}
 * @returns {@link DescribeCertificateAuthorityAuditReportCommandOutput}
 * @see {@link DescribeCertificateAuthorityAuditReportCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificateAuthorityAuditReportCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArgsException} (client fault)
 *
 * One or more of the specified arguments was not valid.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The requested Amazon Resource Name (ARN) does not refer to an existing resource.
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
export class DescribeCertificateAuthorityAuditReportCommand extends command<DescribeCertificateAuthorityAuditReportCommandInput, DescribeCertificateAuthorityAuditReportCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCertificateAuthorityAuditReport",
  DescribeCertificateAuthorityAuditReport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCertificateAuthorityAuditReportRequest;
      output: DescribeCertificateAuthorityAuditReportResponse;
    };
    sdk: {
      input: DescribeCertificateAuthorityAuditReportCommandInput;
      output: DescribeCertificateAuthorityAuditReportCommandOutput;
    };
  };
}
