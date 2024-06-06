// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateCertificateAuthorityAuditReportRequest,
  CreateCertificateAuthorityAuditReportResponse,
} from "../models/models_0";
import {
  de_CreateCertificateAuthorityAuditReportCommand,
  se_CreateCertificateAuthorityAuditReportCommand,
} from "../protocols/Aws_json1_1";

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
 * <p>Creates an audit report that lists every time that your CA private key is used. The
 * 			report is saved in the Amazon S3 bucket that you specify on input. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> actions use
 * 			the private key. </p>
 *          <note>
 *             <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to
 *                         the S3 bucket that you specify. If the IAM principal making the call
 *                         does not have permission to write to the bucket, then an exception is
 *                         thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access
 * 						policies for CRLs in Amazon S3</a>.</p>
 *          </note>
 *          <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption.
 *   For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaAuditReport.html#audit-report-encryption">Encrypting Your Audit
 * 				Reports</a>.</p>
 *          <note>
 *             <p>You can generate a maximum of one report every 30 minutes.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, CreateCertificateAuthorityAuditReportCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, CreateCertificateAuthorityAuditReportCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
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
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 * 			resource.</p>
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
 *  <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy
 * 			cannot be found.</p>
 *
 * @throws {@link ACMPCAServiceException}
 * <p>Base exception class for all service exceptions from ACMPCA service.</p>
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ACMPCAClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ACMPrivateCA", "CreateCertificateAuthorityAuditReport", {})
  .n("ACMPCAClient", "CreateCertificateAuthorityAuditReportCommand")
  .f(void 0, void 0)
  .ser(se_CreateCertificateAuthorityAuditReportCommand)
  .de(de_CreateCertificateAuthorityAuditReportCommand)
  .build() {}
