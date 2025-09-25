// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCertificateRequest, DescribeCertificateResponse } from "../models/models_0";
import { DescribeCertificate } from "../schemas/schemas_3_Certificate";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCertificateCommand}.
 */
export interface DescribeCertificateCommandInput extends DescribeCertificateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCertificateCommand}.
 */
export interface DescribeCertificateCommandOutput extends DescribeCertificateResponse, __MetadataBearer {}

/**
 * <p>Returns detailed metadata about the specified ACM certificate.</p> <p>If you have just created a certificate using the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, DescribeCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, DescribeCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // DescribeCertificateRequest
 *   CertificateArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeCertificateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCertificateResponse
 * //   Certificate: { // CertificateDetail
 * //     CertificateArn: "STRING_VALUE",
 * //     DomainName: "STRING_VALUE",
 * //     SubjectAlternativeNames: [ // DomainList
 * //       "STRING_VALUE",
 * //     ],
 * //     ManagedBy: "CLOUDFRONT",
 * //     DomainValidationOptions: [ // DomainValidationList
 * //       { // DomainValidation
 * //         DomainName: "STRING_VALUE", // required
 * //         ValidationEmails: [ // ValidationEmailList
 * //           "STRING_VALUE",
 * //         ],
 * //         ValidationDomain: "STRING_VALUE",
 * //         ValidationStatus: "PENDING_VALIDATION" || "SUCCESS" || "FAILED",
 * //         ResourceRecord: { // ResourceRecord
 * //           Name: "STRING_VALUE", // required
 * //           Type: "CNAME", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //         HttpRedirect: { // HttpRedirect
 * //           RedirectFrom: "STRING_VALUE",
 * //           RedirectTo: "STRING_VALUE",
 * //         },
 * //         ValidationMethod: "EMAIL" || "DNS" || "HTTP",
 * //       },
 * //     ],
 * //     Serial: "STRING_VALUE",
 * //     Subject: "STRING_VALUE",
 * //     Issuer: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     IssuedAt: new Date("TIMESTAMP"),
 * //     ImportedAt: new Date("TIMESTAMP"),
 * //     Status: "PENDING_VALIDATION" || "ISSUED" || "INACTIVE" || "EXPIRED" || "VALIDATION_TIMED_OUT" || "REVOKED" || "FAILED",
 * //     RevokedAt: new Date("TIMESTAMP"),
 * //     RevocationReason: "UNSPECIFIED" || "KEY_COMPROMISE" || "CA_COMPROMISE" || "AFFILIATION_CHANGED" || "SUPERCEDED" || "SUPERSEDED" || "CESSATION_OF_OPERATION" || "CERTIFICATE_HOLD" || "REMOVE_FROM_CRL" || "PRIVILEGE_WITHDRAWN" || "A_A_COMPROMISE",
 * //     NotBefore: new Date("TIMESTAMP"),
 * //     NotAfter: new Date("TIMESTAMP"),
 * //     KeyAlgorithm: "RSA_1024" || "RSA_2048" || "RSA_3072" || "RSA_4096" || "EC_prime256v1" || "EC_secp384r1" || "EC_secp521r1",
 * //     SignatureAlgorithm: "STRING_VALUE",
 * //     InUseBy: [ // InUseList
 * //       "STRING_VALUE",
 * //     ],
 * //     FailureReason: "NO_AVAILABLE_CONTACTS" || "ADDITIONAL_VERIFICATION_REQUIRED" || "DOMAIN_NOT_ALLOWED" || "INVALID_PUBLIC_DOMAIN" || "DOMAIN_VALIDATION_DENIED" || "CAA_ERROR" || "PCA_LIMIT_EXCEEDED" || "PCA_INVALID_ARN" || "PCA_INVALID_STATE" || "PCA_REQUEST_FAILED" || "PCA_NAME_CONSTRAINTS_VALIDATION" || "PCA_RESOURCE_NOT_FOUND" || "PCA_INVALID_ARGS" || "PCA_INVALID_DURATION" || "PCA_ACCESS_DENIED" || "SLR_NOT_FOUND" || "OTHER",
 * //     Type: "IMPORTED" || "AMAZON_ISSUED" || "PRIVATE",
 * //     RenewalSummary: { // RenewalSummary
 * //       RenewalStatus: "PENDING_AUTO_RENEWAL" || "PENDING_VALIDATION" || "SUCCESS" || "FAILED", // required
 * //       DomainValidationOptions: [ // required
 * //         {
 * //           DomainName: "STRING_VALUE", // required
 * //           ValidationEmails: [
 * //             "STRING_VALUE",
 * //           ],
 * //           ValidationDomain: "STRING_VALUE",
 * //           ValidationStatus: "PENDING_VALIDATION" || "SUCCESS" || "FAILED",
 * //           ResourceRecord: {
 * //             Name: "STRING_VALUE", // required
 * //             Type: "CNAME", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //           HttpRedirect: {
 * //             RedirectFrom: "STRING_VALUE",
 * //             RedirectTo: "STRING_VALUE",
 * //           },
 * //           ValidationMethod: "EMAIL" || "DNS" || "HTTP",
 * //         },
 * //       ],
 * //       RenewalStatusReason: "NO_AVAILABLE_CONTACTS" || "ADDITIONAL_VERIFICATION_REQUIRED" || "DOMAIN_NOT_ALLOWED" || "INVALID_PUBLIC_DOMAIN" || "DOMAIN_VALIDATION_DENIED" || "CAA_ERROR" || "PCA_LIMIT_EXCEEDED" || "PCA_INVALID_ARN" || "PCA_INVALID_STATE" || "PCA_REQUEST_FAILED" || "PCA_NAME_CONSTRAINTS_VALIDATION" || "PCA_RESOURCE_NOT_FOUND" || "PCA_INVALID_ARGS" || "PCA_INVALID_DURATION" || "PCA_ACCESS_DENIED" || "SLR_NOT_FOUND" || "OTHER",
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //     KeyUsages: [ // KeyUsageList
 * //       { // KeyUsage
 * //         Name: "DIGITAL_SIGNATURE" || "NON_REPUDIATION" || "KEY_ENCIPHERMENT" || "DATA_ENCIPHERMENT" || "KEY_AGREEMENT" || "CERTIFICATE_SIGNING" || "CRL_SIGNING" || "ENCIPHER_ONLY" || "DECIPHER_ONLY" || "ANY" || "CUSTOM",
 * //       },
 * //     ],
 * //     ExtendedKeyUsages: [ // ExtendedKeyUsageList
 * //       { // ExtendedKeyUsage
 * //         Name: "TLS_WEB_SERVER_AUTHENTICATION" || "TLS_WEB_CLIENT_AUTHENTICATION" || "CODE_SIGNING" || "EMAIL_PROTECTION" || "TIME_STAMPING" || "OCSP_SIGNING" || "IPSEC_END_SYSTEM" || "IPSEC_TUNNEL" || "IPSEC_USER" || "ANY" || "NONE" || "CUSTOM",
 * //         OID: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CertificateAuthorityArn: "STRING_VALUE",
 * //     RenewalEligibility: "ELIGIBLE" || "INELIGIBLE",
 * //     Options: { // CertificateOptions
 * //       CertificateTransparencyLoggingPreference: "ENABLED" || "DISABLED",
 * //       Export: "ENABLED" || "DISABLED",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCertificateCommandInput - {@link DescribeCertificateCommandInput}
 * @returns {@link DescribeCertificateCommandOutput}
 * @see {@link DescribeCertificateCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class DescribeCertificateCommand extends $Command
  .classBuilder<
    DescribeCertificateCommandInput,
    DescribeCertificateCommandOutput,
    ACMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ACMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CertificateManager", "DescribeCertificate", {})
  .n("ACMClient", "DescribeCertificateCommand")
  .sc(DescribeCertificate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCertificateRequest;
      output: DescribeCertificateResponse;
    };
    sdk: {
      input: DescribeCertificateCommandInput;
      output: DescribeCertificateCommandOutput;
    };
  };
}
