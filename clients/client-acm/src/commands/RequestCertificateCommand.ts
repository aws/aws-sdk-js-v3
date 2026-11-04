// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RequestCertificateRequest, RequestCertificateResponse } from "../models/models_0";
import { RequestCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RequestCertificateCommand}.
 */
export interface RequestCertificateCommandInput extends RequestCertificateRequest {}
/**
 * @public
 *
 * The output of {@link RequestCertificateCommand}.
 */
export interface RequestCertificateCommandOutput extends RequestCertificateResponse, __MetadataBearer {}

/**
 * Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the `DomainName` parameter. You can also specify additional FQDNs in the `SubjectAlternativeNames` parameter.
 *
 * If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use [DNS validation](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html) or [email validation](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html). We recommend that you use DNS validation.
 *
 * > **Note:** ACM behavior differs from the [RFC 6125](https://datatracker.ietf.org/doc/html/rfc6125#appendix-B.2) specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN).
 *
 * After successful completion of the `RequestCertificate` action, there is a delay of several seconds before you can retrieve information about the new certificate.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, RequestCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, RequestCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // RequestCertificateRequest
 *   DomainName: "STRING_VALUE", // required
 *   ValidationMethod: "EMAIL" || "DNS" || "HTTP",
 *   SubjectAlternativeNames: [ // DomainList
 *     "STRING_VALUE",
 *   ],
 *   IdempotencyToken: "STRING_VALUE",
 *   DomainValidationOptions: [ // DomainValidationOptionList
 *     { // DomainValidationOption
 *       DomainName: "STRING_VALUE", // required
 *       ValidationDomain: "STRING_VALUE", // required
 *     },
 *   ],
 *   Options: { // CertificateOptions
 *     CertificateTransparencyLoggingPreference: "ENABLED" || "DISABLED",
 *     Export: "ENABLED" || "DISABLED",
 *     ValidationMethod: "EMAIL" || "DNS" || "HTTP",
 *   },
 *   CertificateAuthorityArn: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   KeyAlgorithm: "RSA_1024" || "RSA_2048" || "RSA_3072" || "RSA_4096" || "EC_prime256v1" || "EC_secp384r1" || "EC_secp521r1",
 *   ManagedBy: "CLOUDFRONT",
 * };
 * const command = new RequestCertificateCommand(input);
 * const response = await client.send(command);
 * // { // RequestCertificateResponse
 * //   CertificateArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RequestCertificateCommandInput - {@link RequestCertificateCommandInput}
 * @returns {@link RequestCertificateCommandOutput}
 * @see {@link RequestCertificateCommandInput} for command's `input` shape.
 * @see {@link RequestCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The requested Amazon Resource Name (ARN) does not refer to an existing resource.
 *
 * @throws {@link InvalidDomainValidationOptionsException} (client fault)
 *
 * One or more values in the DomainValidationOption structure is incorrect.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * An input parameter was invalid.
 *
 * @throws {@link InvalidTagException} (client fault)
 *
 * One or both of the values that make up the key-value pair is not valid. For example, you cannot specify a tag value that begins with `aws:`.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * An ACM quota has been exceeded.
 *
 * @throws {@link TagPolicyException} (client fault)
 *
 * A specified tag did not comply with an existing tag policy and was rejected.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * The request contains too many tags. Try the request again with fewer tags.
 *
 * @throws {@link ACMServiceException}
 *
 * Base exception class for all service exceptions from ACM service.
 *
 * @public
 */
export class RequestCertificateCommand extends command<RequestCertificateCommandInput, RequestCertificateCommandOutput>(
  _ep0,
  _mw0,
  "RequestCertificate",
  RequestCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RequestCertificateRequest;
      output: RequestCertificateResponse;
    };
    sdk: {
      input: RequestCertificateCommandInput;
      output: RequestCertificateCommandOutput;
    };
  };
}
