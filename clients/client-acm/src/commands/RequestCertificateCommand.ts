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
import { RequestCertificateRequest, RequestCertificateResponse } from "../models/models_0";
import { de_RequestCertificateCommand, se_RequestCertificateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 */
export class RequestCertificateCommand extends $Command<
  RequestCertificateCommandInput,
  RequestCertificateCommandOutput,
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
  constructor(readonly input: RequestCertificateCommandInput) {
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
  ): Handler<RequestCertificateCommandInput, RequestCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RequestCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "RequestCertificateCommand";
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
  private serialize(input: RequestCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RequestCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RequestCertificateCommandOutput> {
    return de_RequestCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
