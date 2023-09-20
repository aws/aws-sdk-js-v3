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
import { DescribeCertificateAuthorityRequest, DescribeCertificateAuthorityResponse } from "../models/models_0";
import {
  de_DescribeCertificateAuthorityCommand,
  se_DescribeCertificateAuthorityCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 * //       KeyAlgorithm: "RSA_2048" || "RSA_4096" || "EC_prime256v1" || "EC_secp384r1", // required
 * //       SigningAlgorithm: "SHA256WITHECDSA" || "SHA384WITHECDSA" || "SHA512WITHECDSA" || "SHA256WITHRSA" || "SHA384WITHRSA" || "SHA512WITHRSA", // required
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
 * //       },
 * //       OcspConfiguration: { // OcspConfiguration
 * //         Enabled: true || false, // required
 * //         OcspCustomCname: "STRING_VALUE",
 * //       },
 * //     },
 * //     RestorableUntil: new Date("TIMESTAMP"),
 * //     KeyStorageSecurityStandard: "FIPS_140_2_LEVEL_2_OR_HIGHER" || "FIPS_140_2_LEVEL_3_OR_HIGHER",
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
 */
export class DescribeCertificateAuthorityCommand extends $Command<
  DescribeCertificateAuthorityCommandInput,
  DescribeCertificateAuthorityCommandOutput,
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
  constructor(readonly input: DescribeCertificateAuthorityCommandInput) {
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
  ): Handler<DescribeCertificateAuthorityCommandInput, DescribeCertificateAuthorityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCertificateAuthorityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "DescribeCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ACMPrivateCA",
        operation: "DescribeCertificateAuthority",
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
  private serialize(input: DescribeCertificateAuthorityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCertificateAuthorityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCertificateAuthorityCommandOutput> {
    return de_DescribeCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
