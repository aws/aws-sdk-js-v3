// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeCertificateAuthorityAuditReportRequest,
  DescribeCertificateAuthorityAuditReportResponse,
} from "../models/models_0";
import {
  de_DescribeCertificateAuthorityAuditReportCommand,
  se_DescribeCertificateAuthorityAuditReportCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCertificateAuthorityAuditReportCommand}.
 */
export interface DescribeCertificateAuthorityAuditReportCommandInput
  extends DescribeCertificateAuthorityAuditReportRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCertificateAuthorityAuditReportCommand}.
 */
export interface DescribeCertificateAuthorityAuditReportCommandOutput
  extends DescribeCertificateAuthorityAuditReportResponse,
    __MetadataBearer {}

/**
 * <p>Lists information about a specific audit report created by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action or the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, DescribeCertificateAuthorityAuditReportCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, DescribeCertificateAuthorityAuditReportCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
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
 *  <p>One or more of the specified arguments was not valid.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
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
export class DescribeCertificateAuthorityAuditReportCommand extends $Command
  .classBuilder<
    DescribeCertificateAuthorityAuditReportCommandInput,
    DescribeCertificateAuthorityAuditReportCommandOutput,
    ACMPCAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ACMPCAClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ACMPrivateCA", "DescribeCertificateAuthorityAuditReport", {})
  .n("ACMPCAClient", "DescribeCertificateAuthorityAuditReportCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCertificateAuthorityAuditReportCommand)
  .de(de_DescribeCertificateAuthorityAuditReportCommand)
  .build() {
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
