// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCertificatesRequest, ListCertificatesResponse } from "../models/models_0";
import { ListCertificates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCertificatesCommand}.
 */
export interface ListCertificatesCommandInput extends ListCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link ListCertificatesCommand}.
 */
export interface ListCertificatesCommandOutput extends ListCertificatesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. Default filtering returns only <code>RSA_2048</code> certificates. For more information, see <a>Filters</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ListCertificatesCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ListCertificatesCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // ListCertificatesRequest
 *   CertificateStatuses: [ // CertificateStatuses
 *     "PENDING_VALIDATION" || "ISSUED" || "INACTIVE" || "EXPIRED" || "VALIDATION_TIMED_OUT" || "REVOKED" || "FAILED",
 *   ],
 *   Includes: { // Filters
 *     extendedKeyUsage: [ // ExtendedKeyUsageFilterList
 *       "TLS_WEB_SERVER_AUTHENTICATION" || "TLS_WEB_CLIENT_AUTHENTICATION" || "CODE_SIGNING" || "EMAIL_PROTECTION" || "TIME_STAMPING" || "OCSP_SIGNING" || "IPSEC_END_SYSTEM" || "IPSEC_TUNNEL" || "IPSEC_USER" || "ANY" || "NONE" || "CUSTOM",
 *     ],
 *     keyUsage: [ // KeyUsageFilterList
 *       "DIGITAL_SIGNATURE" || "NON_REPUDIATION" || "KEY_ENCIPHERMENT" || "DATA_ENCIPHERMENT" || "KEY_AGREEMENT" || "CERTIFICATE_SIGNING" || "CRL_SIGNING" || "ENCIPHER_ONLY" || "DECIPHER_ONLY" || "ANY" || "CUSTOM",
 *     ],
 *     keyTypes: [ // KeyAlgorithmList
 *       "RSA_1024" || "RSA_2048" || "RSA_3072" || "RSA_4096" || "EC_prime256v1" || "EC_secp384r1" || "EC_secp521r1",
 *     ],
 *     exportOption: "ENABLED" || "DISABLED",
 *     managedBy: "CLOUDFRONT",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   SortBy: "CREATED_AT",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 * };
 * const command = new ListCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ListCertificatesResponse
 * //   NextToken: "STRING_VALUE",
 * //   CertificateSummaryList: [ // CertificateSummaryList
 * //     { // CertificateSummary
 * //       CertificateArn: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE",
 * //       SubjectAlternativeNameSummaries: [ // DomainList
 * //         "STRING_VALUE",
 * //       ],
 * //       HasAdditionalSubjectAlternativeNames: true || false,
 * //       Status: "PENDING_VALIDATION" || "ISSUED" || "INACTIVE" || "EXPIRED" || "VALIDATION_TIMED_OUT" || "REVOKED" || "FAILED",
 * //       Type: "IMPORTED" || "AMAZON_ISSUED" || "PRIVATE",
 * //       KeyAlgorithm: "RSA_1024" || "RSA_2048" || "RSA_3072" || "RSA_4096" || "EC_prime256v1" || "EC_secp384r1" || "EC_secp521r1",
 * //       KeyUsages: [ // KeyUsageNames
 * //         "DIGITAL_SIGNATURE" || "NON_REPUDIATION" || "KEY_ENCIPHERMENT" || "DATA_ENCIPHERMENT" || "KEY_AGREEMENT" || "CERTIFICATE_SIGNING" || "CRL_SIGNING" || "ENCIPHER_ONLY" || "DECIPHER_ONLY" || "ANY" || "CUSTOM",
 * //       ],
 * //       ExtendedKeyUsages: [ // ExtendedKeyUsageNames
 * //         "TLS_WEB_SERVER_AUTHENTICATION" || "TLS_WEB_CLIENT_AUTHENTICATION" || "CODE_SIGNING" || "EMAIL_PROTECTION" || "TIME_STAMPING" || "OCSP_SIGNING" || "IPSEC_END_SYSTEM" || "IPSEC_TUNNEL" || "IPSEC_USER" || "ANY" || "NONE" || "CUSTOM",
 * //       ],
 * //       ExportOption: "ENABLED" || "DISABLED",
 * //       InUse: true || false,
 * //       Exported: true || false,
 * //       RenewalEligibility: "ELIGIBLE" || "INELIGIBLE",
 * //       NotBefore: new Date("TIMESTAMP"),
 * //       NotAfter: new Date("TIMESTAMP"),
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       IssuedAt: new Date("TIMESTAMP"),
 * //       ImportedAt: new Date("TIMESTAMP"),
 * //       RevokedAt: new Date("TIMESTAMP"),
 * //       ManagedBy: "CLOUDFRONT",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCertificatesCommandInput - {@link ListCertificatesCommandInput}
 * @returns {@link ListCertificatesCommandOutput}
 * @see {@link ListCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListCertificatesCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link InvalidArgsException} (client fault)
 *  <p>One or more of request parameters specified is not valid.</p>
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
export class ListCertificatesCommand extends $Command
  .classBuilder<
    ListCertificatesCommandInput,
    ListCertificatesCommandOutput,
    ACMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ACMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CertificateManager", "ListCertificates", {})
  .n("ACMClient", "ListCertificatesCommand")
  .sc(ListCertificates$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCertificatesRequest;
      output: ListCertificatesResponse;
    };
    sdk: {
      input: ListCertificatesCommandInput;
      output: ListCertificatesCommandOutput;
    };
  };
}
