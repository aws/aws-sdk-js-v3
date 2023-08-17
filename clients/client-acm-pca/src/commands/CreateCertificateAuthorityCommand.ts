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

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { CreateCertificateAuthorityRequest, CreateCertificateAuthorityResponse } from "../models/models_0";
import { de_CreateCertificateAuthorityCommand, se_CreateCertificateAuthorityCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCertificateAuthorityCommand}.
 */
export interface CreateCertificateAuthorityCommandInput extends CreateCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link CreateCertificateAuthorityCommand}.
 */
export interface CreateCertificateAuthorityCommandOutput extends CreateCertificateAuthorityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a root or subordinate private certificate authority (CA). You must specify the
 * 			CA configuration, an optional configuration for Online Certificate Status Protocol
 * 			(OCSP) and/or a certificate revocation list (CRL), the CA type, and an optional
 * 			idempotency token to avoid accidental creation of multiple CAs. The CA configuration
 * 			specifies the name of the algorithm and key size to be used to create the CA private
 * 			key, the type of signing algorithm that the CA uses, and X.500 subject information. The
 * 			OCSP configuration can optionally specify a custom URL for the OCSP responder. The CRL
 * 			configuration specifies the CRL expiration period in days (the validity period of the
 * 			CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3
 * 			bucket that is included in certificates issued by the CA. If successful, this action
 * 			returns the Amazon Resource Name (ARN) of the CA.</p>
 *          <note>
 *             <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to
 *                         the S3 bucket that you specify. If the IAM principal making the call
 *                         does not have permission to write to the bucket, then an exception is
 *                         thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access
 * 						policies for CRLs in Amazon S3</a>.</p>
 *          </note>
 *          <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption.
 *   For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your
 * 			CRLs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, CreateCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, CreateCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const input = { // CreateCertificateAuthorityRequest
 *   CertificateAuthorityConfiguration: { // CertificateAuthorityConfiguration
 *     KeyAlgorithm: "RSA_2048" || "RSA_4096" || "EC_prime256v1" || "EC_secp384r1", // required
 *     SigningAlgorithm: "SHA256WITHECDSA" || "SHA384WITHECDSA" || "SHA512WITHECDSA" || "SHA256WITHRSA" || "SHA384WITHRSA" || "SHA512WITHRSA", // required
 *     Subject: { // ASN1Subject
 *       Country: "STRING_VALUE",
 *       Organization: "STRING_VALUE",
 *       OrganizationalUnit: "STRING_VALUE",
 *       DistinguishedNameQualifier: "STRING_VALUE",
 *       State: "STRING_VALUE",
 *       CommonName: "STRING_VALUE",
 *       SerialNumber: "STRING_VALUE",
 *       Locality: "STRING_VALUE",
 *       Title: "STRING_VALUE",
 *       Surname: "STRING_VALUE",
 *       GivenName: "STRING_VALUE",
 *       Initials: "STRING_VALUE",
 *       Pseudonym: "STRING_VALUE",
 *       GenerationQualifier: "STRING_VALUE",
 *       CustomAttributes: [ // CustomAttributeList
 *         { // CustomAttribute
 *           ObjectIdentifier: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     CsrExtensions: { // CsrExtensions
 *       KeyUsage: { // KeyUsage
 *         DigitalSignature: true || false,
 *         NonRepudiation: true || false,
 *         KeyEncipherment: true || false,
 *         DataEncipherment: true || false,
 *         KeyAgreement: true || false,
 *         KeyCertSign: true || false,
 *         CRLSign: true || false,
 *         EncipherOnly: true || false,
 *         DecipherOnly: true || false,
 *       },
 *       SubjectInformationAccess: [ // AccessDescriptionList
 *         { // AccessDescription
 *           AccessMethod: { // AccessMethod
 *             CustomObjectIdentifier: "STRING_VALUE",
 *             AccessMethodType: "CA_REPOSITORY" || "RESOURCE_PKI_MANIFEST" || "RESOURCE_PKI_NOTIFY",
 *           },
 *           AccessLocation: { // GeneralName
 *             OtherName: { // OtherName
 *               TypeId: "STRING_VALUE", // required
 *               Value: "STRING_VALUE", // required
 *             },
 *             Rfc822Name: "STRING_VALUE",
 *             DnsName: "STRING_VALUE",
 *             DirectoryName: {
 *               Country: "STRING_VALUE",
 *               Organization: "STRING_VALUE",
 *               OrganizationalUnit: "STRING_VALUE",
 *               DistinguishedNameQualifier: "STRING_VALUE",
 *               State: "STRING_VALUE",
 *               CommonName: "STRING_VALUE",
 *               SerialNumber: "STRING_VALUE",
 *               Locality: "STRING_VALUE",
 *               Title: "STRING_VALUE",
 *               Surname: "STRING_VALUE",
 *               GivenName: "STRING_VALUE",
 *               Initials: "STRING_VALUE",
 *               Pseudonym: "STRING_VALUE",
 *               GenerationQualifier: "STRING_VALUE",
 *               CustomAttributes: [
 *                 {
 *                   ObjectIdentifier: "STRING_VALUE", // required
 *                   Value: "STRING_VALUE", // required
 *                 },
 *               ],
 *             },
 *             EdiPartyName: { // EdiPartyName
 *               PartyName: "STRING_VALUE", // required
 *               NameAssigner: "STRING_VALUE",
 *             },
 *             UniformResourceIdentifier: "STRING_VALUE",
 *             IpAddress: "STRING_VALUE",
 *             RegisteredId: "STRING_VALUE",
 *           },
 *         },
 *       ],
 *     },
 *   },
 *   RevocationConfiguration: { // RevocationConfiguration
 *     CrlConfiguration: { // CrlConfiguration
 *       Enabled: true || false, // required
 *       ExpirationInDays: Number("int"),
 *       CustomCname: "STRING_VALUE",
 *       S3BucketName: "STRING_VALUE",
 *       S3ObjectAcl: "PUBLIC_READ" || "BUCKET_OWNER_FULL_CONTROL",
 *     },
 *     OcspConfiguration: { // OcspConfiguration
 *       Enabled: true || false, // required
 *       OcspCustomCname: "STRING_VALUE",
 *     },
 *   },
 *   CertificateAuthorityType: "ROOT" || "SUBORDINATE", // required
 *   IdempotencyToken: "STRING_VALUE",
 *   KeyStorageSecurityStandard: "FIPS_140_2_LEVEL_2_OR_HIGHER" || "FIPS_140_2_LEVEL_3_OR_HIGHER",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   UsageMode: "GENERAL_PURPOSE" || "SHORT_LIVED_CERTIFICATE",
 * };
 * const command = new CreateCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // { // CreateCertificateAuthorityResponse
 * //   CertificateAuthorityArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCertificateAuthorityCommandInput - {@link CreateCertificateAuthorityCommandInput}
 * @returns {@link CreateCertificateAuthorityCommandOutput}
 * @see {@link CreateCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link CreateCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArgsException} (client fault)
 *  <p>One or more of the specified arguments was not valid.</p>
 *
 * @throws {@link InvalidPolicyException} (client fault)
 *  <p>The resource policy is invalid or is missing a required statement. For general
 * 			information about IAM policy and statement structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json">Overview of JSON Policies</a>.</p>
 *
 * @throws {@link InvalidTagException} (client fault)
 *  <p>The tag associated with the CA is not valid. The invalid argument is contained in the
 * 			message field.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An Amazon Web Services Private CA quota has been exceeded. See the exception message returned to determine
 * 			the quota that was exceeded.</p>
 *
 * @throws {@link ACMPCAServiceException}
 * <p>Base exception class for all service exceptions from ACMPCA service.</p>
 *
 */
export class CreateCertificateAuthorityCommand extends $Command<
  CreateCertificateAuthorityCommandInput,
  CreateCertificateAuthorityCommandOutput,
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
  constructor(readonly input: CreateCertificateAuthorityCommandInput) {
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
  ): Handler<CreateCertificateAuthorityCommandInput, CreateCertificateAuthorityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCertificateAuthorityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "CreateCertificateAuthorityCommand";
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
  private serialize(input: CreateCertificateAuthorityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCertificateAuthorityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCertificateAuthorityCommandOutput> {
    return de_CreateCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
