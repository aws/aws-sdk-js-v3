// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreateCertificateAuthorityAuditReportRequest,
  CreateCertificateAuthorityAuditReportResponse,
} from "../models/models_0";
import { CreateCertificateAuthorityAuditReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCertificateAuthorityAuditReportCommand}.
 */
export interface CreateCertificateAuthorityAuditReportCommandInput
  extends CreateCertificateAuthorityAuditReportRequest {}
/**
 * @public
 *
 * The output of {@link CreateCertificateAuthorityAuditReportCommand}.
 */
export interface CreateCertificateAuthorityAuditReportCommandOutput
  extends CreateCertificateAuthorityAuditReportResponse,
    __MetadataBearer {}

/**
 * <p>Creates an audit report that lists every time that your CA private key is used to issue a certificate. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> actions use the private key.</p> <p>To save the audit report to your designated Amazon S3 bucket, you must create a bucket policy that grants Amazon Web Services Private CA permission to access and write to it. For an example policy, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaAuditReport.html#s3-access">Prepare an Amazon S3 bucket for audit reports</a>.</p> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaAuditReport.html#audit-report-encryption">Encrypting Your Audit Reports</a>.</p> <note> <p>You can generate a maximum of one report every 30 minutes.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, CreateCertificateAuthorityAuditReportCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, CreateCertificateAuthorityAuditReportCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * // import type { ACMPCAClientConfig } from "@aws-sdk/client-acm-pca";
 * const config = {}; // type is ACMPCAClientConfig
 * const client = new ACMPCAClient(config);
 * const input = { // CreateCertificateAuthorityAuditReportRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 *   S3BucketName: "STRING_VALUE", // required
 *   AuditReportResponseFormat: "JSON" || "CSV", // required
 * };
 * const command = new CreateCertificateAuthorityAuditReportCommand(input);
 * const response = await client.send(command);
 * // { // CreateCertificateAuthorityAuditReportResponse
 * //   AuditReportId: "STRING_VALUE",
 * //   S3Key: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCertificateAuthorityAuditReportCommandInput - {@link CreateCertificateAuthorityAuditReportCommandInput}
 * @returns {@link CreateCertificateAuthorityAuditReportCommandOutput}
 * @see {@link CreateCertificateAuthorityAuditReportCommandInput} for command's `input` shape.
 * @see {@link CreateCertificateAuthorityAuditReportCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArgsException} (client fault)
 *  <p>One or more of the specified arguments was not valid.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The state of the private CA does not allow this action to occur.</p>
 *
 * @throws {@link RequestFailedException} (client fault)
 *  <p>The request has failed for an unspecified reason.</p>
 *
 * @throws {@link RequestInProgressException} (client fault)
 *  <p>Your request is already in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy cannot be found.</p>
 *
 * @throws {@link ACMPCAServiceException}
 * <p>Base exception class for all service exceptions from ACMPCA service.</p>
 *
 *
 * @public
 */
export class CreateCertificateAuthorityAuditReportCommand extends $Command
  .classBuilder<
    CreateCertificateAuthorityAuditReportCommandInput,
    CreateCertificateAuthorityAuditReportCommandOutput,
    ACMPCAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ACMPCAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ACMPrivateCA", "CreateCertificateAuthorityAuditReport", {})
  .n("ACMPCAClient", "CreateCertificateAuthorityAuditReportCommand")
  .sc(CreateCertificateAuthorityAuditReport$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCertificateAuthorityAuditReportRequest;
      output: CreateCertificateAuthorityAuditReportResponse;
    };
    sdk: {
      input: CreateCertificateAuthorityAuditReportCommandInput;
      output: CreateCertificateAuthorityAuditReportCommandOutput;
    };
  };
}
