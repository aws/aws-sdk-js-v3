// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchCertificatesRequest, SearchCertificatesResponse } from "../models/models_0";
import { SearchCertificates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchCertificatesCommand}.
 */
export interface SearchCertificatesCommandInput extends SearchCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link SearchCertificatesCommand}.
 */
export interface SearchCertificatesCommandOutput extends SearchCertificatesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of certificates matching search criteria. You can filter certificates by X.509 attributes and ACM specific properties like certificate status, type and renewal eligibility. This operation provides more flexible filtering than <a>ListCertificates</a> by supporting complex filter statements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, SearchCertificatesCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, SearchCertificatesCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // SearchCertificatesRequest
 *   FilterStatement: { // CertificateFilterStatement Union: only one key present
 *     And: [ // CertificateFilterStatementList
 *       {//  Union: only one key present
 *         And: [
 *           "<CertificateFilterStatement>",
 *         ],
 *         Or: [
 *           "<CertificateFilterStatement>",
 *         ],
 *         Not: "<CertificateFilterStatement>",
 *         Filter: { // CertificateFilter Union: only one key present
 *           CertificateArn: "STRING_VALUE",
 *           X509AttributeFilter: { // X509AttributeFilter Union: only one key present
 *             Subject: { // SubjectFilter Union: only one key present
 *               CommonName: { // CommonNameFilter
 *                 Value: "STRING_VALUE", // required
 *                 ComparisonOperator: "CONTAINS" || "EQUALS", // required
 *               },
 *             },
 *             SubjectAlternativeName: { // SubjectAlternativeNameFilter Union: only one key present
 *               DnsName: { // DnsNameFilter
 *                 Value: "STRING_VALUE", // required
 *                 ComparisonOperator: "CONTAINS" || "EQUALS", // required
 *               },
 *             },
 *             ExtendedKeyUsage: "TLS_WEB_SERVER_AUTHENTICATION" || "TLS_WEB_CLIENT_AUTHENTICATION" || "CODE_SIGNING" || "EMAIL_PROTECTION" || "TIME_STAMPING" || "OCSP_SIGNING" || "IPSEC_END_SYSTEM" || "IPSEC_TUNNEL" || "IPSEC_USER" || "ANY" || "NONE" || "CUSTOM",
 *             KeyUsage: "DIGITAL_SIGNATURE" || "NON_REPUDIATION" || "KEY_ENCIPHERMENT" || "DATA_ENCIPHERMENT" || "KEY_AGREEMENT" || "CERTIFICATE_SIGNING" || "CRL_SIGNING" || "ENCIPHER_ONLY" || "DECIPHER_ONLY" || "ANY" || "CUSTOM",
 *             KeyAlgorithm: "RSA_1024" || "RSA_2048" || "RSA_3072" || "RSA_4096" || "EC_prime256v1" || "EC_secp384r1" || "EC_secp521r1",
 *             SerialNumber: "STRING_VALUE",
 *             NotAfter: { // TimestampRange
 *               Start: new Date("TIMESTAMP"),
 *               End: new Date("TIMESTAMP"),
 *             },
 *             NotBefore: {
 *               Start: new Date("TIMESTAMP"),
 *               End: new Date("TIMESTAMP"),
 *             },
 *           },
 *           AcmCertificateMetadataFilter: { // AcmCertificateMetadataFilter Union: only one key present
 *             Status: "PENDING_VALIDATION" || "ISSUED" || "INACTIVE" || "EXPIRED" || "VALIDATION_TIMED_OUT" || "REVOKED" || "FAILED",
 *             RenewalStatus: "PENDING_AUTO_RENEWAL" || "PENDING_VALIDATION" || "SUCCESS" || "FAILED",
 *             Type: "IMPORTED" || "AMAZON_ISSUED" || "PRIVATE",
 *             InUse: true || false,
 *             Exported: true || false,
 *             ExportOption: "ENABLED" || "DISABLED",
 *             ManagedBy: "CLOUDFRONT",
 *             ValidationMethod: "EMAIL" || "DNS" || "HTTP",
 *             CertificateKeyPairOrigin: "AWS_MANAGED" || "ACME" || "CUSTOMER_PROVIDED",
 *             AcmeEndpointArn: "STRING_VALUE",
 *             AcmeAccountId: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *     Or: [
 *       "<CertificateFilterStatement>",
 *     ],
 *     Not: "<CertificateFilterStatement>",
 *     Filter: {//  Union: only one key present
 *       CertificateArn: "STRING_VALUE",
 *       X509AttributeFilter: {//  Union: only one key present
 *         Subject: {//  Union: only one key present
 *           CommonName: {
 *             Value: "STRING_VALUE", // required
 *             ComparisonOperator: "CONTAINS" || "EQUALS", // required
 *           },
 *         },
 *         SubjectAlternativeName: {//  Union: only one key present
 *           DnsName: {
 *             Value: "STRING_VALUE", // required
 *             ComparisonOperator: "CONTAINS" || "EQUALS", // required
 *           },
 *         },
 *         ExtendedKeyUsage: "TLS_WEB_SERVER_AUTHENTICATION" || "TLS_WEB_CLIENT_AUTHENTICATION" || "CODE_SIGNING" || "EMAIL_PROTECTION" || "TIME_STAMPING" || "OCSP_SIGNING" || "IPSEC_END_SYSTEM" || "IPSEC_TUNNEL" || "IPSEC_USER" || "ANY" || "NONE" || "CUSTOM",
 *         KeyUsage: "DIGITAL_SIGNATURE" || "NON_REPUDIATION" || "KEY_ENCIPHERMENT" || "DATA_ENCIPHERMENT" || "KEY_AGREEMENT" || "CERTIFICATE_SIGNING" || "CRL_SIGNING" || "ENCIPHER_ONLY" || "DECIPHER_ONLY" || "ANY" || "CUSTOM",
 *         KeyAlgorithm: "RSA_1024" || "RSA_2048" || "RSA_3072" || "RSA_4096" || "EC_prime256v1" || "EC_secp384r1" || "EC_secp521r1",
 *         SerialNumber: "STRING_VALUE",
 *         NotAfter: {
 *           Start: new Date("TIMESTAMP"),
 *           End: new Date("TIMESTAMP"),
 *         },
 *         NotBefore: {
 *           Start: new Date("TIMESTAMP"),
 *           End: new Date("TIMESTAMP"),
 *         },
 *       },
 *       AcmCertificateMetadataFilter: {//  Union: only one key present
 *         Status: "PENDING_VALIDATION" || "ISSUED" || "INACTIVE" || "EXPIRED" || "VALIDATION_TIMED_OUT" || "REVOKED" || "FAILED",
 *         RenewalStatus: "PENDING_AUTO_RENEWAL" || "PENDING_VALIDATION" || "SUCCESS" || "FAILED",
 *         Type: "IMPORTED" || "AMAZON_ISSUED" || "PRIVATE",
 *         InUse: true || false,
 *         Exported: true || false,
 *         ExportOption: "ENABLED" || "DISABLED",
 *         ManagedBy: "CLOUDFRONT",
 *         ValidationMethod: "EMAIL" || "DNS" || "HTTP",
 *         CertificateKeyPairOrigin: "AWS_MANAGED" || "ACME" || "CUSTOMER_PROVIDED",
 *         AcmeEndpointArn: "STRING_VALUE",
 *         AcmeAccountId: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SortBy: "CREATED_AT" || "NOT_AFTER" || "STATUS" || "RENEWAL_STATUS" || "EXPORTED" || "IN_USE" || "NOT_BEFORE" || "KEY_ALGORITHM" || "TYPE" || "CERTIFICATE_ARN" || "COMMON_NAME" || "REVOKED_AT" || "RENEWAL_ELIGIBILITY" || "ISSUED_AT" || "MANAGED_BY" || "EXPORT_OPTION" || "VALIDATION_METHOD" || "IMPORTED_AT" || "ACME_ENDPOINT_ARN" || "ACME_ACCOUNT_ID" || "CERTIFICATE_KEY_PAIR_ORIGIN",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 * };
 * const command = new SearchCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // SearchCertificatesResponse
 * //   Results: [ // CertificateSearchResultList
 * //     { // CertificateSearchResult
 * //       CertificateArn: "STRING_VALUE",
 * //       X509Attributes: { // X509Attributes
 * //         Issuer: { // DistinguishedName
 * //           CommonName: "STRING_VALUE",
 * //           DomainComponents: [ // DomainComponentList
 * //             "STRING_VALUE",
 * //           ],
 * //           Country: "STRING_VALUE",
 * //           CustomAttributes: [ // CustomAttributeList
 * //             { // CustomAttribute
 * //               ObjectIdentifier: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           DistinguishedNameQualifier: "STRING_VALUE",
 * //           GenerationQualifier: "STRING_VALUE",
 * //           GivenName: "STRING_VALUE",
 * //           Initials: "STRING_VALUE",
 * //           Locality: "STRING_VALUE",
 * //           Organization: "STRING_VALUE",
 * //           OrganizationalUnit: "STRING_VALUE",
 * //           Pseudonym: "STRING_VALUE",
 * //           SerialNumber: "STRING_VALUE",
 * //           State: "STRING_VALUE",
 * //           Surname: "STRING_VALUE",
 * //           Title: "STRING_VALUE",
 * //         },
 * //         Subject: {
 * //           CommonName: "STRING_VALUE",
 * //           DomainComponents: [
 * //             "STRING_VALUE",
 * //           ],
 * //           Country: "STRING_VALUE",
 * //           CustomAttributes: [
 * //             {
 * //               ObjectIdentifier: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           DistinguishedNameQualifier: "STRING_VALUE",
 * //           GenerationQualifier: "STRING_VALUE",
 * //           GivenName: "STRING_VALUE",
 * //           Initials: "STRING_VALUE",
 * //           Locality: "STRING_VALUE",
 * //           Organization: "STRING_VALUE",
 * //           OrganizationalUnit: "STRING_VALUE",
 * //           Pseudonym: "STRING_VALUE",
 * //           SerialNumber: "STRING_VALUE",
 * //           State: "STRING_VALUE",
 * //           Surname: "STRING_VALUE",
 * //           Title: "STRING_VALUE",
 * //         },
 * //         SubjectAlternativeNames: [ // GeneralNameList
 * //           { // GeneralName Union: only one key present
 * //             DirectoryName: {
 * //               CommonName: "STRING_VALUE",
 * //               DomainComponents: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               Country: "STRING_VALUE",
 * //               CustomAttributes: [
 * //                 {
 * //                   ObjectIdentifier: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               DistinguishedNameQualifier: "STRING_VALUE",
 * //               GenerationQualifier: "STRING_VALUE",
 * //               GivenName: "STRING_VALUE",
 * //               Initials: "STRING_VALUE",
 * //               Locality: "STRING_VALUE",
 * //               Organization: "STRING_VALUE",
 * //               OrganizationalUnit: "STRING_VALUE",
 * //               Pseudonym: "STRING_VALUE",
 * //               SerialNumber: "STRING_VALUE",
 * //               State: "STRING_VALUE",
 * //               Surname: "STRING_VALUE",
 * //               Title: "STRING_VALUE",
 * //             },
 * //             DnsName: "STRING_VALUE",
 * //             IpAddress: "STRING_VALUE",
 * //             OtherName: { // OtherName
 * //               ObjectIdentifier: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //             },
 * //             RegisteredId: "STRING_VALUE",
 * //             Rfc822Name: "STRING_VALUE",
 * //             UniformResourceIdentifier: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ExtendedKeyUsages: [ // ExtendedKeyUsageNames
 * //           "TLS_WEB_SERVER_AUTHENTICATION" || "TLS_WEB_CLIENT_AUTHENTICATION" || "CODE_SIGNING" || "EMAIL_PROTECTION" || "TIME_STAMPING" || "OCSP_SIGNING" || "IPSEC_END_SYSTEM" || "IPSEC_TUNNEL" || "IPSEC_USER" || "ANY" || "NONE" || "CUSTOM",
 * //         ],
 * //         KeyAlgorithm: "RSA_1024" || "RSA_2048" || "RSA_3072" || "RSA_4096" || "EC_prime256v1" || "EC_secp384r1" || "EC_secp521r1",
 * //         KeyUsages: [ // KeyUsageNames
 * //           "DIGITAL_SIGNATURE" || "NON_REPUDIATION" || "KEY_ENCIPHERMENT" || "DATA_ENCIPHERMENT" || "KEY_AGREEMENT" || "CERTIFICATE_SIGNING" || "CRL_SIGNING" || "ENCIPHER_ONLY" || "DECIPHER_ONLY" || "ANY" || "CUSTOM",
 * //         ],
 * //         SerialNumber: "STRING_VALUE",
 * //         NotAfter: new Date("TIMESTAMP"),
 * //         NotBefore: new Date("TIMESTAMP"),
 * //       },
 * //       CertificateMetadata: { // CertificateMetadata Union: only one key present
 * //         AcmCertificateMetadata: { // AcmCertificateMetadata
 * //           CreatedAt: new Date("TIMESTAMP"),
 * //           Exported: true || false,
 * //           ImportedAt: new Date("TIMESTAMP"),
 * //           InUse: true || false,
 * //           IssuedAt: new Date("TIMESTAMP"),
 * //           RenewalEligibility: "ELIGIBLE" || "INELIGIBLE",
 * //           RevokedAt: new Date("TIMESTAMP"),
 * //           Status: "PENDING_VALIDATION" || "ISSUED" || "INACTIVE" || "EXPIRED" || "VALIDATION_TIMED_OUT" || "REVOKED" || "FAILED",
 * //           RenewalStatus: "PENDING_AUTO_RENEWAL" || "PENDING_VALIDATION" || "SUCCESS" || "FAILED",
 * //           Type: "IMPORTED" || "AMAZON_ISSUED" || "PRIVATE",
 * //           ExportOption: "ENABLED" || "DISABLED",
 * //           ManagedBy: "CLOUDFRONT",
 * //           ValidationMethod: "EMAIL" || "DNS" || "HTTP",
 * //           CertificateKeyPairOrigin: "AWS_MANAGED" || "ACME" || "CUSTOMER_PROVIDED",
 * //           AcmeEndpointArn: "STRING_VALUE",
 * //           AcmeAccountId: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchCertificatesCommandInput - {@link SearchCertificatesCommandInput}
 * @returns {@link SearchCertificatesCommandOutput}
 * @see {@link SearchCertificatesCommandInput} for command's `input` shape.
 * @see {@link SearchCertificatesCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The supplied input failed to satisfy constraints of an Amazon Web Services service.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class SearchCertificatesCommand extends command<SearchCertificatesCommandInput, SearchCertificatesCommandOutput>(
  _ep0,
  _mw0,
  "SearchCertificates",
  SearchCertificates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchCertificatesRequest;
      output: SearchCertificatesResponse;
    };
    sdk: {
      input: SearchCertificatesCommandInput;
      output: SearchCertificatesCommandOutput;
    };
  };
}
