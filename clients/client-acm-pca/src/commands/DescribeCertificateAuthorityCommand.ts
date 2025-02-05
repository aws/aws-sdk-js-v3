// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCertificateAuthorityRequest, DescribeCertificateAuthorityResponse } from "../models/models_0";
import {
  de_DescribeCertificateAuthorityCommand,
  se_DescribeCertificateAuthorityCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCertificateAuthorityCommand}.
 */
export interface DescribeCertificateAuthorityCommandInput extends DescribeCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCertificateAuthorityCommand}.
 */
export interface DescribeCertificateAuthorityCommandOutput
  extends DescribeCertificateAuthorityResponse,
    __MetadataBearer {}

/**
 * <p>Lists information about your private certificate authority (CA) or one that has been
 * 			shared with you. You specify the private CA on input by its ARN (Amazon Resource Name).
 * 			The output contains the status of your CA. This can be any of the following: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CREATING</code> - Amazon Web Services Private CA is creating your private certificate
 * 					authority.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PENDING_CERTIFICATE</code> - The certificate is pending. You must use
 * 					your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA to sign your
 * 					private CA CSR and then import it into Amazon Web Services Private CA. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ACTIVE</code> - Your private CA is active.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DISABLED</code> - Your private CA has been disabled.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>EXPIRED</code> - Your private CA certificate has expired.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FAILED</code> - Your private CA has failed. Your CA can fail because of
 * 					problems such a network outage or back-end Amazon Web Services failure or other errors. A
 * 					failed CA can never return to the pending state. You must create a new CA.
 * 				</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DELETED</code> - Your private CA is within the restoration period, after
 * 					which it is permanently deleted. The length of time remaining in the CA's
 * 					restoration period is also included in this action's output.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, DescribeCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, DescribeCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ACMPCAClient(config);
 * const input = { // DescribeCertificateAuthorityRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCertificateAuthorityResponse
 * //   CertificateAuthority: { // CertificateAuthority
 * //     Arn: "STRING_VALUE",
 * //     OwnerAccount: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     LastStateChangeAt: new Date("TIMESTAMP"),
 * //     Type: "ROOT" || "SUBORDINATE",
 * //     Serial: "STRING_VALUE",
 * //     Status: "CREATING" || "PENDING_CERTIFICATE" || "ACTIVE" || "DELETED" || "DISABLED" || "EXPIRED" || "FAILED",
 * //     NotBefore: new Date("TIMESTAMP"),
 * //     NotAfter: new Date("TIMESTAMP"),
 * //     FailureReason: "REQUEST_TIMED_OUT" || "UNSUPPORTED_ALGORITHM" || "OTHER",
 * //     CertificateAuthorityConfiguration: { // CertificateAuthorityConfiguration
 * //       KeyAlgorithm: "RSA_2048" || "RSA_4096" || "EC_prime256v1" || "EC_secp384r1" || "SM2", // required
 * //       SigningAlgorithm: "SHA256WITHECDSA" || "SHA384WITHECDSA" || "SHA512WITHECDSA" || "SHA256WITHRSA" || "SHA384WITHRSA" || "SHA512WITHRSA" || "SM3WITHSM2", // required
 * //       Subject: { // ASN1Subject
 * //         Country: "STRING_VALUE",
 * //         Organization: "STRING_VALUE",
 * //         OrganizationalUnit: "STRING_VALUE",
 * //         DistinguishedNameQualifier: "STRING_VALUE",
 * //         State: "STRING_VALUE",
 * //         CommonName: "STRING_VALUE",
 * //         SerialNumber: "STRING_VALUE",
 * //         Locality: "STRING_VALUE",
 * //         Title: "STRING_VALUE",
 * //         Surname: "STRING_VALUE",
 * //         GivenName: "STRING_VALUE",
 * //         Initials: "STRING_VALUE",
 * //         Pseudonym: "STRING_VALUE",
 * //         GenerationQualifier: "STRING_VALUE",
 * //         CustomAttributes: [ // CustomAttributeList
 * //           { // CustomAttribute
 * //             ObjectIdentifier: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       CsrExtensions: { // CsrExtensions
 * //         KeyUsage: { // KeyUsage
 * //           DigitalSignature: true || false,
 * //           NonRepudiation: true || false,
 * //           KeyEncipherment: true || false,
 * //           DataEncipherment: true || false,
 * //           KeyAgreement: true || false,
 * //           KeyCertSign: true || false,
 * //           CRLSign: true || false,
 * //           EncipherOnly: true || false,
 * //           DecipherOnly: true || false,
 * //         },
 * //         SubjectInformationAccess: [ // AccessDescriptionList
 * //           { // AccessDescription
 * //             AccessMethod: { // AccessMethod
 * //               CustomObjectIdentifier: "STRING_VALUE",
 * //               AccessMethodType: "CA_REPOSITORY" || "RESOURCE_PKI_MANIFEST" || "RESOURCE_PKI_NOTIFY",
 * //             },
 * //             AccessLocation: { // GeneralName
 * //               OtherName: { // OtherName
 * //                 TypeId: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //               Rfc822Name: "STRING_VALUE",
 * //               DnsName: "STRING_VALUE",
 * //               DirectoryName: {
 * //                 Country: "STRING_VALUE",
 * //                 Organization: "STRING_VALUE",
 * //                 OrganizationalUnit: "STRING_VALUE",
 * //                 DistinguishedNameQualifier: "STRING_VALUE",
 * //                 State: "STRING_VALUE",
 * //                 CommonName: "STRING_VALUE",
 * //                 SerialNumber: "STRING_VALUE",
 * //                 Locality: "STRING_VALUE",
 * //                 Title: "STRING_VALUE",
 * //                 Surname: "STRING_VALUE",
 * //                 GivenName: "STRING_VALUE",
 * //                 Initials: "STRING_VALUE",
 * //                 Pseudonym: "STRING_VALUE",
 * //                 GenerationQualifier: "STRING_VALUE",
 * //                 CustomAttributes: [
 * //                   {
 * //                     ObjectIdentifier: "STRING_VALUE", // required
 * //                     Value: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //               EdiPartyName: { // EdiPartyName
 * //                 PartyName: "STRING_VALUE", // required
 * //                 NameAssigner: "STRING_VALUE",
 * //               },
 * //               UniformResourceIdentifier: "STRING_VALUE",
 * //               IpAddress: "STRING_VALUE",
 * //               RegisteredId: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     RevocationConfiguration: { // RevocationConfiguration
 * //       CrlConfiguration: { // CrlConfiguration
 * //         Enabled: true || false, // required
 * //         ExpirationInDays: Number("int"),
 * //         CustomCname: "STRING_VALUE",
 * //         S3BucketName: "STRING_VALUE",
 * //         S3ObjectAcl: "PUBLIC_READ" || "BUCKET_OWNER_FULL_CONTROL",
 * //         CrlDistributionPointExtensionConfiguration: { // CrlDistributionPointExtensionConfiguration
 * //           OmitExtension: true || false, // required
 * //         },
 * //       },
 * //       OcspConfiguration: { // OcspConfiguration
 * //         Enabled: true || false, // required
 * //         OcspCustomCname: "STRING_VALUE",
 * //       },
 * //     },
 * //     RestorableUntil: new Date("TIMESTAMP"),
 * //     KeyStorageSecurityStandard: "FIPS_140_2_LEVEL_2_OR_HIGHER" || "FIPS_140_2_LEVEL_3_OR_HIGHER" || "CCPC_LEVEL_1_OR_HIGHER",
 * //     UsageMode: "GENERAL_PURPOSE" || "SHORT_LIVED_CERTIFICATE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCertificateAuthorityCommandInput - {@link DescribeCertificateAuthorityCommandInput}
 * @returns {@link DescribeCertificateAuthorityCommandOutput}
 * @see {@link DescribeCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 * 			resource.</p>
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
export class DescribeCertificateAuthorityCommand extends $Command
  .classBuilder<
    DescribeCertificateAuthorityCommandInput,
    DescribeCertificateAuthorityCommandOutput,
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
  .s("ACMPrivateCA", "DescribeCertificateAuthority", {})
  .n("ACMPCAClient", "DescribeCertificateAuthorityCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCertificateAuthorityCommand)
  .de(de_DescribeCertificateAuthorityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCertificateAuthorityRequest;
      output: DescribeCertificateAuthorityResponse;
    };
    sdk: {
      input: DescribeCertificateAuthorityCommandInput;
      output: DescribeCertificateAuthorityCommandOutput;
    };
  };
}
