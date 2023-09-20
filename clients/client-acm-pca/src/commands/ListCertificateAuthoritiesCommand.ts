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

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { ListCertificateAuthoritiesRequest, ListCertificateAuthoritiesResponse } from "../models/models_0";
import { de_ListCertificateAuthoritiesCommand, se_ListCertificateAuthoritiesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCertificateAuthoritiesCommand}.
 */
export interface ListCertificateAuthoritiesCommandInput extends ListCertificateAuthoritiesRequest {}
/**
 * @public
 *
 * The output of {@link ListCertificateAuthoritiesCommand}.
 */
export interface ListCertificateAuthoritiesCommandOutput extends ListCertificateAuthoritiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the private certificate authorities that you created by using the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, ListCertificateAuthoritiesCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, ListCertificateAuthoritiesCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const input = { // ListCertificateAuthoritiesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ResourceOwner: "SELF" || "OTHER_ACCOUNTS",
 * };
 * const command = new ListCertificateAuthoritiesCommand(input);
 * const response = await client.send(command);
 * // { // ListCertificateAuthoritiesResponse
 * //   CertificateAuthorities: [ // CertificateAuthorities
 * //     { // CertificateAuthority
 * //       Arn: "STRING_VALUE",
 * //       OwnerAccount: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastStateChangeAt: new Date("TIMESTAMP"),
 * //       Type: "ROOT" || "SUBORDINATE",
 * //       Serial: "STRING_VALUE",
 * //       Status: "CREATING" || "PENDING_CERTIFICATE" || "ACTIVE" || "DELETED" || "DISABLED" || "EXPIRED" || "FAILED",
 * //       NotBefore: new Date("TIMESTAMP"),
 * //       NotAfter: new Date("TIMESTAMP"),
 * //       FailureReason: "REQUEST_TIMED_OUT" || "UNSUPPORTED_ALGORITHM" || "OTHER",
 * //       CertificateAuthorityConfiguration: { // CertificateAuthorityConfiguration
 * //         KeyAlgorithm: "RSA_2048" || "RSA_4096" || "EC_prime256v1" || "EC_secp384r1", // required
 * //         SigningAlgorithm: "SHA256WITHECDSA" || "SHA384WITHECDSA" || "SHA512WITHECDSA" || "SHA256WITHRSA" || "SHA384WITHRSA" || "SHA512WITHRSA", // required
 * //         Subject: { // ASN1Subject
 * //           Country: "STRING_VALUE",
 * //           Organization: "STRING_VALUE",
 * //           OrganizationalUnit: "STRING_VALUE",
 * //           DistinguishedNameQualifier: "STRING_VALUE",
 * //           State: "STRING_VALUE",
 * //           CommonName: "STRING_VALUE",
 * //           SerialNumber: "STRING_VALUE",
 * //           Locality: "STRING_VALUE",
 * //           Title: "STRING_VALUE",
 * //           Surname: "STRING_VALUE",
 * //           GivenName: "STRING_VALUE",
 * //           Initials: "STRING_VALUE",
 * //           Pseudonym: "STRING_VALUE",
 * //           GenerationQualifier: "STRING_VALUE",
 * //           CustomAttributes: [ // CustomAttributeList
 * //             { // CustomAttribute
 * //               ObjectIdentifier: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         CsrExtensions: { // CsrExtensions
 * //           KeyUsage: { // KeyUsage
 * //             DigitalSignature: true || false,
 * //             NonRepudiation: true || false,
 * //             KeyEncipherment: true || false,
 * //             DataEncipherment: true || false,
 * //             KeyAgreement: true || false,
 * //             KeyCertSign: true || false,
 * //             CRLSign: true || false,
 * //             EncipherOnly: true || false,
 * //             DecipherOnly: true || false,
 * //           },
 * //           SubjectInformationAccess: [ // AccessDescriptionList
 * //             { // AccessDescription
 * //               AccessMethod: { // AccessMethod
 * //                 CustomObjectIdentifier: "STRING_VALUE",
 * //                 AccessMethodType: "CA_REPOSITORY" || "RESOURCE_PKI_MANIFEST" || "RESOURCE_PKI_NOTIFY",
 * //               },
 * //               AccessLocation: { // GeneralName
 * //                 OtherName: { // OtherName
 * //                   TypeId: "STRING_VALUE", // required
 * //                   Value: "STRING_VALUE", // required
 * //                 },
 * //                 Rfc822Name: "STRING_VALUE",
 * //                 DnsName: "STRING_VALUE",
 * //                 DirectoryName: {
 * //                   Country: "STRING_VALUE",
 * //                   Organization: "STRING_VALUE",
 * //                   OrganizationalUnit: "STRING_VALUE",
 * //                   DistinguishedNameQualifier: "STRING_VALUE",
 * //                   State: "STRING_VALUE",
 * //                   CommonName: "STRING_VALUE",
 * //                   SerialNumber: "STRING_VALUE",
 * //                   Locality: "STRING_VALUE",
 * //                   Title: "STRING_VALUE",
 * //                   Surname: "STRING_VALUE",
 * //                   GivenName: "STRING_VALUE",
 * //                   Initials: "STRING_VALUE",
 * //                   Pseudonym: "STRING_VALUE",
 * //                   GenerationQualifier: "STRING_VALUE",
 * //                   CustomAttributes: [
 * //                     {
 * //                       ObjectIdentifier: "STRING_VALUE", // required
 * //                       Value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                 },
 * //                 EdiPartyName: { // EdiPartyName
 * //                   PartyName: "STRING_VALUE", // required
 * //                   NameAssigner: "STRING_VALUE",
 * //                 },
 * //                 UniformResourceIdentifier: "STRING_VALUE",
 * //                 IpAddress: "STRING_VALUE",
 * //                 RegisteredId: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       RevocationConfiguration: { // RevocationConfiguration
 * //         CrlConfiguration: { // CrlConfiguration
 * //           Enabled: true || false, // required
 * //           ExpirationInDays: Number("int"),
 * //           CustomCname: "STRING_VALUE",
 * //           S3BucketName: "STRING_VALUE",
 * //           S3ObjectAcl: "PUBLIC_READ" || "BUCKET_OWNER_FULL_CONTROL",
 * //         },
 * //         OcspConfiguration: { // OcspConfiguration
 * //           Enabled: true || false, // required
 * //           OcspCustomCname: "STRING_VALUE",
 * //         },
 * //       },
 * //       RestorableUntil: new Date("TIMESTAMP"),
 * //       KeyStorageSecurityStandard: "FIPS_140_2_LEVEL_2_OR_HIGHER" || "FIPS_140_2_LEVEL_3_OR_HIGHER",
 * //       UsageMode: "GENERAL_PURPOSE" || "SHORT_LIVED_CERTIFICATE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCertificateAuthoritiesCommandInput - {@link ListCertificateAuthoritiesCommandInput}
 * @returns {@link ListCertificateAuthoritiesCommandOutput}
 * @see {@link ListCertificateAuthoritiesCommandInput} for command's `input` shape.
 * @see {@link ListCertificateAuthoritiesCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token specified in the <code>NextToken</code> argument is not valid. Use the token
 * 			returned from your previous call to <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a>.</p>
 *
 * @throws {@link ACMPCAServiceException}
 * <p>Base exception class for all service exceptions from ACMPCA service.</p>
 *
 */
export class ListCertificateAuthoritiesCommand extends $Command<
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput,
  ACMPCAClientResolvedConfig
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
  constructor(readonly input: ListCertificateAuthoritiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCertificateAuthoritiesCommandInput, ListCertificateAuthoritiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCertificateAuthoritiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "ListCertificateAuthoritiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ACMPrivateCA",
        operation: "ListCertificateAuthorities",
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
  private serialize(input: ListCertificateAuthoritiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCertificateAuthoritiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCertificateAuthoritiesCommandOutput> {
    return de_ListCertificateAuthoritiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
