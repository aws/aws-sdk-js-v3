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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { ListCertificatesRequest, ListCertificatesResponse } from "../models/models_0";
import { de_ListCertificatesCommand, se_ListCertificatesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Retrieves a list of certificate ARNs and domain names. You can request that only
 *       certificates that match a specific status be listed. You can also filter by specific
 *       attributes of the certificate. Default filtering returns only <code>RSA_2048</code>
 *       certificates. For more information, see <a>Filters</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ListCertificatesCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ListCertificatesCommand } = require("@aws-sdk/client-acm"); // CommonJS import
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
 * //       InUse: true || false,
 * //       Exported: true || false,
 * //       RenewalEligibility: "ELIGIBLE" || "INELIGIBLE",
 * //       NotBefore: new Date("TIMESTAMP"),
 * //       NotAfter: new Date("TIMESTAMP"),
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       IssuedAt: new Date("TIMESTAMP"),
 * //       ImportedAt: new Date("TIMESTAMP"),
 * //       RevokedAt: new Date("TIMESTAMP"),
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
 *  <p>One or more of of request parameters specified is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The supplied input failed to satisfy constraints of an Amazon Web Services service.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 */
export class ListCertificatesCommand extends $Command<
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput,
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
  constructor(readonly input: ListCertificatesCommandInput) {
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
  ): Handler<ListCertificatesCommandInput, ListCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCertificatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "ListCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CertificateManager",
        operation: "ListCertificates",
      },
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
  private serialize(input: ListCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCertificatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCertificatesCommandOutput> {
    return de_ListCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
