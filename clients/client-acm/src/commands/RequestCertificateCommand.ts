// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RequestCertificateRequest, RequestCertificateResponse } from "../models/models_0";
import { de_RequestCertificateCommand, se_RequestCertificateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM
 *       certificate, you must specify a fully qualified domain name (FQDN) in the
 *         <code>DomainName</code> parameter. You can also specify additional FQDNs in the
 *         <code>SubjectAlternativeNames</code> parameter. </p>
 *          <p>If you are requesting a private certificate, domain validation is not required. If you are
 *       requesting a public certificate, each domain name that you specify must be validated to verify
 *       that you own or control the domain. You can use <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">email validation</a>.
 *       We recommend that you use DNS validation. ACM issues public certificates after receiving
 *       approval from the domain owner. </p>
 *          <note>
 *             <p>ACM behavior differs from the <a href="https://datatracker.ietf.org/doc/html/rfc6125#appendix-B.2">RFC 6125</a>
 *         specification of the certificate validation process. ACM first checks for a Subject
 *         Alternative Name, and, if it finds one, ignores the common name (CN).</p>
 *          </note>
 *          <p>After successful completion of the <code>RequestCertificate</code> action, there is a
 *       delay of several seconds before you can retrieve information about the new certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, RequestCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, RequestCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ACMClient(config);
 * const input = { // RequestCertificateRequest
 *   DomainName: "STRING_VALUE", // required
 *   ValidationMethod: "EMAIL" || "DNS",
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
 *   },
 *   CertificateAuthorityArn: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   KeyAlgorithm: "RSA_1024" || "RSA_2048" || "RSA_3072" || "RSA_4096" || "EC_prime256v1" || "EC_secp384r1" || "EC_secp521r1",
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
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link InvalidDomainValidationOptionsException} (client fault)
 *  <p>One or more values in the <a>DomainValidationOption</a> structure is
 *       incorrect.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An input parameter was invalid.</p>
 *
 * @throws {@link InvalidTagException} (client fault)
 *  <p>One or both of the values that make up the key-value pair is not valid. For example, you
 *       cannot specify a tag value that begins with <code>aws:</code>.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An ACM quota has been exceeded.</p>
 *
 * @throws {@link TagPolicyException} (client fault)
 *  <p>A specified tag did not comply with an existing tag policy and was rejected.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains too many tags. Try the request again with fewer tags.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 * @public
 */
export class RequestCertificateCommand extends $Command
  .classBuilder<
    RequestCertificateCommandInput,
    RequestCertificateCommandOutput,
    ACMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ACMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CertificateManager", "RequestCertificate", {})
  .n("ACMClient", "RequestCertificateCommand")
  .f(void 0, void 0)
  .ser(se_RequestCertificateCommand)
  .de(de_RequestCertificateCommand)
  .build() {
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
