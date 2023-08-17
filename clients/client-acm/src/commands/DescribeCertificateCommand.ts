// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { DescribeCertificateRequest, DescribeCertificateResponse } from "../models/models_0";
import { de_DescribeCertificateCommand, se_DescribeCertificateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Returns detailed metadata about the specified ACM certificate.</p>
 *          <p>If you have just created a certificate using the <code>RequestCertificate</code> action,
 *       there is a delay of several seconds before you can retrieve information about it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, DescribeCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, DescribeCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
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
 * //         ValidationMethod: "EMAIL" || "DNS",
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
 * //     RevocationReason: "UNSPECIFIED" || "KEY_COMPROMISE" || "CA_COMPROMISE" || "AFFILIATION_CHANGED" || "SUPERCEDED" || "CESSATION_OF_OPERATION" || "CERTIFICATE_HOLD" || "REMOVE_FROM_CRL" || "PRIVILEGE_WITHDRAWN" || "A_A_COMPROMISE",
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
 * //           ValidationMethod: "EMAIL" || "DNS",
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
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account
 *       cannot be found.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 */
export class DescribeCertificateCommand extends $Command<
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
  ACMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCertificateCommandInput, DescribeCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "DescribeCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCertificateCommandOutput> {
    return de_DescribeCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
