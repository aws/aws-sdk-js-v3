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

import { CreateTemplateRequest, CreateTemplateResponse } from "../models/models_0";
import { PcaConnectorAdClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorAdClient";
import { de_CreateTemplateCommand, se_CreateTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTemplateCommand}.
 */
export interface CreateTemplateCommandInput extends CreateTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateTemplateCommand}.
 */
export interface CreateTemplateCommandOutput extends CreateTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Active Directory compatible certificate template. The connectors issues certificates
 *          using these templates based on the requester’s Active Directory group membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, CreateTemplateCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, CreateTemplateCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * const client = new PcaConnectorAdClient(config);
 * const input = { // CreateTemplateRequest
 *   ConnectorArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Definition: { // TemplateDefinition Union: only one key present
 *     TemplateV2: { // TemplateV2
 *       CertificateValidity: { // CertificateValidity
 *         ValidityPeriod: { // ValidityPeriod
 *           PeriodType: "HOURS" || "DAYS" || "WEEKS" || "MONTHS" || "YEARS", // required
 *           Period: Number("long"), // required
 *         },
 *         RenewalPeriod: {
 *           PeriodType: "HOURS" || "DAYS" || "WEEKS" || "MONTHS" || "YEARS", // required
 *           Period: Number("long"), // required
 *         },
 *       },
 *       SupersededTemplates: [ // TemplateNameList
 *         "STRING_VALUE",
 *       ],
 *       PrivateKeyAttributes: { // PrivateKeyAttributesV2
 *         MinimalKeyLength: Number("int"), // required
 *         KeySpec: "KEY_EXCHANGE" || "SIGNATURE", // required
 *         CryptoProviders: [ // CryptoProvidersList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       PrivateKeyFlags: { // PrivateKeyFlagsV2
 *         ExportableKey: true || false,
 *         StrongKeyProtectionRequired: true || false,
 *         ClientVersion: "WINDOWS_SERVER_2003" || "WINDOWS_SERVER_2008" || "WINDOWS_SERVER_2008_R2" || "WINDOWS_SERVER_2012" || "WINDOWS_SERVER_2012_R2" || "WINDOWS_SERVER_2016", // required
 *       },
 *       EnrollmentFlags: { // EnrollmentFlagsV2
 *         IncludeSymmetricAlgorithms: true || false,
 *         UserInteractionRequired: true || false,
 *         RemoveInvalidCertificateFromPersonalStore: true || false,
 *         NoSecurityExtension: true || false,
 *         EnableKeyReuseOnNtTokenKeysetStorageFull: true || false,
 *       },
 *       SubjectNameFlags: { // SubjectNameFlagsV2
 *         SanRequireDomainDns: true || false,
 *         SanRequireSpn: true || false,
 *         SanRequireDirectoryGuid: true || false,
 *         SanRequireUpn: true || false,
 *         SanRequireEmail: true || false,
 *         SanRequireDns: true || false,
 *         RequireDnsAsCn: true || false,
 *         RequireEmail: true || false,
 *         RequireCommonName: true || false,
 *         RequireDirectoryPath: true || false,
 *       },
 *       GeneralFlags: { // GeneralFlagsV2
 *         AutoEnrollment: true || false,
 *         MachineType: true || false,
 *       },
 *       Extensions: { // ExtensionsV2
 *         KeyUsage: { // KeyUsage
 *           Critical: true || false,
 *           UsageFlags: { // KeyUsageFlags
 *             DigitalSignature: true || false,
 *             NonRepudiation: true || false,
 *             KeyEncipherment: true || false,
 *             DataEncipherment: true || false,
 *             KeyAgreement: true || false,
 *           },
 *         },
 *         ApplicationPolicies: { // ApplicationPolicies
 *           Critical: true || false,
 *           Policies: [ // ApplicationPolicyList // required
 *             { // ApplicationPolicy Union: only one key present
 *               PolicyType: "ALL_APPLICATION_POLICIES" || "ANY_PURPOSE" || "ATTESTATION_IDENTITY_KEY_CERTIFICATE" || "CERTIFICATE_REQUEST_AGENT" || "CLIENT_AUTHENTICATION" || "CODE_SIGNING" || "CTL_USAGE" || "DIGITAL_RIGHTS" || "DIRECTORY_SERVICE_EMAIL_REPLICATION" || "DISALLOWED_LIST" || "DNS_SERVER_TRUST" || "DOCUMENT_ENCRYPTION" || "DOCUMENT_SIGNING" || "DYNAMIC_CODE_GENERATOR" || "EARLY_LAUNCH_ANTIMALWARE_DRIVER" || "EMBEDDED_WINDOWS_SYSTEM_COMPONENT_VERIFICATION" || "ENCLAVE" || "ENCRYPTING_FILE_SYSTEM" || "ENDORSEMENT_KEY_CERTIFICATE" || "FILE_RECOVERY" || "HAL_EXTENSION" || "IP_SECURITY_END_SYSTEM" || "IP_SECURITY_IKE_INTERMEDIATE" || "IP_SECURITY_TUNNEL_TERMINATION" || "IP_SECURITY_USER" || "ISOLATED_USER_MODE" || "KDC_AUTHENTICATION" || "KERNEL_MODE_CODE_SIGNING" || "KEY_PACK_LICENSES" || "KEY_RECOVERY" || "KEY_RECOVERY_AGENT" || "LICENSE_SERVER_VERIFICATION" || "LIFETIME_SIGNING" || "MICROSOFT_PUBLISHER" || "MICROSOFT_TIME_STAMPING" || "MICROSOFT_TRUST_LIST_SIGNING" || "OCSP_SIGNING" || "OEM_WINDOWS_SYSTEM_COMPONENT_VERIFICATION" || "PLATFORM_CERTIFICATE" || "PREVIEW_BUILD_SIGNING" || "PRIVATE_KEY_ARCHIVAL" || "PROTECTED_PROCESS_LIGHT_VERIFICATION" || "PROTECTED_PROCESS_VERIFICATION" || "QUALIFIED_SUBORDINATION" || "REVOKED_LIST_SIGNER" || "ROOT_PROGRAM_AUTO_UPDATE_CA_REVOCATION" || "ROOT_PROGRAM_AUTO_UPDATE_END_REVOCATION" || "ROOT_PROGRAM_NO_OSCP_FAILOVER_TO_CRL" || "ROOT_LIST_SIGNER" || "SECURE_EMAIL" || "SERVER_AUTHENTICATION" || "SMART_CARD_LOGIN" || "SPC_ENCRYPTED_DIGEST_RETRY_COUNT" || "SPC_RELAXED_PE_MARKER_CHECK" || "TIME_STAMPING" || "WINDOWS_HARDWARE_DRIVER_ATTESTED_VERIFICATION" || "WINDOWS_HARDWARE_DRIVER_EXTENDED_VERIFICATION" || "WINDOWS_HARDWARE_DRIVER_VERIFICATION" || "WINDOWS_HELLO_RECOVERY_KEY_ENCRYPTION" || "WINDOWS_KITS_COMPONENT" || "WINDOWS_RT_VERIFICATION" || "WINDOWS_SOFTWARE_EXTENSION_VERIFICATION" || "WINDOWS_STORE" || "WINDOWS_SYSTEM_COMPONENT_VERIFICATION" || "WINDOWS_TCB_COMPONENT" || "WINDOWS_THIRD_PARTY_APPLICATION_COMPONENT" || "WINDOWS_UPDATE",
 *               PolicyObjectIdentifier: "STRING_VALUE",
 *             },
 *           ],
 *         },
 *       },
 *     },
 *     TemplateV3: { // TemplateV3
 *       CertificateValidity: {
 *         ValidityPeriod: {
 *           PeriodType: "HOURS" || "DAYS" || "WEEKS" || "MONTHS" || "YEARS", // required
 *           Period: Number("long"), // required
 *         },
 *         RenewalPeriod: {
 *           PeriodType: "HOURS" || "DAYS" || "WEEKS" || "MONTHS" || "YEARS", // required
 *           Period: Number("long"), // required
 *         },
 *       },
 *       SupersededTemplates: [
 *         "STRING_VALUE",
 *       ],
 *       PrivateKeyAttributes: { // PrivateKeyAttributesV3
 *         MinimalKeyLength: Number("int"), // required
 *         KeySpec: "KEY_EXCHANGE" || "SIGNATURE", // required
 *         CryptoProviders: [
 *           "STRING_VALUE",
 *         ],
 *         KeyUsageProperty: { // KeyUsageProperty Union: only one key present
 *           PropertyType: "ALL",
 *           PropertyFlags: { // KeyUsagePropertyFlags
 *             Decrypt: true || false,
 *             KeyAgreement: true || false,
 *             Sign: true || false,
 *           },
 *         },
 *         Algorithm: "RSA" || "ECDH_P256" || "ECDH_P384" || "ECDH_P521", // required
 *       },
 *       PrivateKeyFlags: { // PrivateKeyFlagsV3
 *         ExportableKey: true || false,
 *         StrongKeyProtectionRequired: true || false,
 *         RequireAlternateSignatureAlgorithm: true || false,
 *         ClientVersion: "WINDOWS_SERVER_2008" || "WINDOWS_SERVER_2008_R2" || "WINDOWS_SERVER_2012" || "WINDOWS_SERVER_2012_R2" || "WINDOWS_SERVER_2016", // required
 *       },
 *       EnrollmentFlags: { // EnrollmentFlagsV3
 *         IncludeSymmetricAlgorithms: true || false,
 *         UserInteractionRequired: true || false,
 *         RemoveInvalidCertificateFromPersonalStore: true || false,
 *         NoSecurityExtension: true || false,
 *         EnableKeyReuseOnNtTokenKeysetStorageFull: true || false,
 *       },
 *       SubjectNameFlags: { // SubjectNameFlagsV3
 *         SanRequireDomainDns: true || false,
 *         SanRequireSpn: true || false,
 *         SanRequireDirectoryGuid: true || false,
 *         SanRequireUpn: true || false,
 *         SanRequireEmail: true || false,
 *         SanRequireDns: true || false,
 *         RequireDnsAsCn: true || false,
 *         RequireEmail: true || false,
 *         RequireCommonName: true || false,
 *         RequireDirectoryPath: true || false,
 *       },
 *       GeneralFlags: { // GeneralFlagsV3
 *         AutoEnrollment: true || false,
 *         MachineType: true || false,
 *       },
 *       HashAlgorithm: "SHA256" || "SHA384" || "SHA512", // required
 *       Extensions: { // ExtensionsV3
 *         KeyUsage: {
 *           Critical: true || false,
 *           UsageFlags: {
 *             DigitalSignature: true || false,
 *             NonRepudiation: true || false,
 *             KeyEncipherment: true || false,
 *             DataEncipherment: true || false,
 *             KeyAgreement: true || false,
 *           },
 *         },
 *         ApplicationPolicies: {
 *           Critical: true || false,
 *           Policies: [ // required
 *             {//  Union: only one key present
 *               PolicyType: "ALL_APPLICATION_POLICIES" || "ANY_PURPOSE" || "ATTESTATION_IDENTITY_KEY_CERTIFICATE" || "CERTIFICATE_REQUEST_AGENT" || "CLIENT_AUTHENTICATION" || "CODE_SIGNING" || "CTL_USAGE" || "DIGITAL_RIGHTS" || "DIRECTORY_SERVICE_EMAIL_REPLICATION" || "DISALLOWED_LIST" || "DNS_SERVER_TRUST" || "DOCUMENT_ENCRYPTION" || "DOCUMENT_SIGNING" || "DYNAMIC_CODE_GENERATOR" || "EARLY_LAUNCH_ANTIMALWARE_DRIVER" || "EMBEDDED_WINDOWS_SYSTEM_COMPONENT_VERIFICATION" || "ENCLAVE" || "ENCRYPTING_FILE_SYSTEM" || "ENDORSEMENT_KEY_CERTIFICATE" || "FILE_RECOVERY" || "HAL_EXTENSION" || "IP_SECURITY_END_SYSTEM" || "IP_SECURITY_IKE_INTERMEDIATE" || "IP_SECURITY_TUNNEL_TERMINATION" || "IP_SECURITY_USER" || "ISOLATED_USER_MODE" || "KDC_AUTHENTICATION" || "KERNEL_MODE_CODE_SIGNING" || "KEY_PACK_LICENSES" || "KEY_RECOVERY" || "KEY_RECOVERY_AGENT" || "LICENSE_SERVER_VERIFICATION" || "LIFETIME_SIGNING" || "MICROSOFT_PUBLISHER" || "MICROSOFT_TIME_STAMPING" || "MICROSOFT_TRUST_LIST_SIGNING" || "OCSP_SIGNING" || "OEM_WINDOWS_SYSTEM_COMPONENT_VERIFICATION" || "PLATFORM_CERTIFICATE" || "PREVIEW_BUILD_SIGNING" || "PRIVATE_KEY_ARCHIVAL" || "PROTECTED_PROCESS_LIGHT_VERIFICATION" || "PROTECTED_PROCESS_VERIFICATION" || "QUALIFIED_SUBORDINATION" || "REVOKED_LIST_SIGNER" || "ROOT_PROGRAM_AUTO_UPDATE_CA_REVOCATION" || "ROOT_PROGRAM_AUTO_UPDATE_END_REVOCATION" || "ROOT_PROGRAM_NO_OSCP_FAILOVER_TO_CRL" || "ROOT_LIST_SIGNER" || "SECURE_EMAIL" || "SERVER_AUTHENTICATION" || "SMART_CARD_LOGIN" || "SPC_ENCRYPTED_DIGEST_RETRY_COUNT" || "SPC_RELAXED_PE_MARKER_CHECK" || "TIME_STAMPING" || "WINDOWS_HARDWARE_DRIVER_ATTESTED_VERIFICATION" || "WINDOWS_HARDWARE_DRIVER_EXTENDED_VERIFICATION" || "WINDOWS_HARDWARE_DRIVER_VERIFICATION" || "WINDOWS_HELLO_RECOVERY_KEY_ENCRYPTION" || "WINDOWS_KITS_COMPONENT" || "WINDOWS_RT_VERIFICATION" || "WINDOWS_SOFTWARE_EXTENSION_VERIFICATION" || "WINDOWS_STORE" || "WINDOWS_SYSTEM_COMPONENT_VERIFICATION" || "WINDOWS_TCB_COMPONENT" || "WINDOWS_THIRD_PARTY_APPLICATION_COMPONENT" || "WINDOWS_UPDATE",
 *               PolicyObjectIdentifier: "STRING_VALUE",
 *             },
 *           ],
 *         },
 *       },
 *     },
 *     TemplateV4: { // TemplateV4
 *       CertificateValidity: {
 *         ValidityPeriod: {
 *           PeriodType: "HOURS" || "DAYS" || "WEEKS" || "MONTHS" || "YEARS", // required
 *           Period: Number("long"), // required
 *         },
 *         RenewalPeriod: "<ValidityPeriod>", // required
 *       },
 *       SupersededTemplates: [
 *         "STRING_VALUE",
 *       ],
 *       PrivateKeyAttributes: { // PrivateKeyAttributesV4
 *         MinimalKeyLength: Number("int"), // required
 *         KeySpec: "KEY_EXCHANGE" || "SIGNATURE", // required
 *         CryptoProviders: [
 *           "STRING_VALUE",
 *         ],
 *         KeyUsageProperty: {//  Union: only one key present
 *           PropertyType: "ALL",
 *           PropertyFlags: {
 *             Decrypt: true || false,
 *             KeyAgreement: true || false,
 *             Sign: true || false,
 *           },
 *         },
 *         Algorithm: "RSA" || "ECDH_P256" || "ECDH_P384" || "ECDH_P521",
 *       },
 *       PrivateKeyFlags: { // PrivateKeyFlagsV4
 *         ExportableKey: true || false,
 *         StrongKeyProtectionRequired: true || false,
 *         RequireAlternateSignatureAlgorithm: true || false,
 *         RequireSameKeyRenewal: true || false,
 *         UseLegacyProvider: true || false,
 *         ClientVersion: "WINDOWS_SERVER_2012" || "WINDOWS_SERVER_2012_R2" || "WINDOWS_SERVER_2016", // required
 *       },
 *       EnrollmentFlags: { // EnrollmentFlagsV4
 *         IncludeSymmetricAlgorithms: true || false,
 *         UserInteractionRequired: true || false,
 *         RemoveInvalidCertificateFromPersonalStore: true || false,
 *         NoSecurityExtension: true || false,
 *         EnableKeyReuseOnNtTokenKeysetStorageFull: true || false,
 *       },
 *       SubjectNameFlags: { // SubjectNameFlagsV4
 *         SanRequireDomainDns: true || false,
 *         SanRequireSpn: true || false,
 *         SanRequireDirectoryGuid: true || false,
 *         SanRequireUpn: true || false,
 *         SanRequireEmail: true || false,
 *         SanRequireDns: true || false,
 *         RequireDnsAsCn: true || false,
 *         RequireEmail: true || false,
 *         RequireCommonName: true || false,
 *         RequireDirectoryPath: true || false,
 *       },
 *       GeneralFlags: { // GeneralFlagsV4
 *         AutoEnrollment: true || false,
 *         MachineType: true || false,
 *       },
 *       HashAlgorithm: "SHA256" || "SHA384" || "SHA512",
 *       Extensions: { // ExtensionsV4
 *         KeyUsage: {
 *           Critical: true || false,
 *           UsageFlags: {
 *             DigitalSignature: true || false,
 *             NonRepudiation: true || false,
 *             KeyEncipherment: true || false,
 *             DataEncipherment: true || false,
 *             KeyAgreement: true || false,
 *           },
 *         },
 *         ApplicationPolicies: {
 *           Critical: true || false,
 *           Policies: [ // required
 *             {//  Union: only one key present
 *               PolicyType: "ALL_APPLICATION_POLICIES" || "ANY_PURPOSE" || "ATTESTATION_IDENTITY_KEY_CERTIFICATE" || "CERTIFICATE_REQUEST_AGENT" || "CLIENT_AUTHENTICATION" || "CODE_SIGNING" || "CTL_USAGE" || "DIGITAL_RIGHTS" || "DIRECTORY_SERVICE_EMAIL_REPLICATION" || "DISALLOWED_LIST" || "DNS_SERVER_TRUST" || "DOCUMENT_ENCRYPTION" || "DOCUMENT_SIGNING" || "DYNAMIC_CODE_GENERATOR" || "EARLY_LAUNCH_ANTIMALWARE_DRIVER" || "EMBEDDED_WINDOWS_SYSTEM_COMPONENT_VERIFICATION" || "ENCLAVE" || "ENCRYPTING_FILE_SYSTEM" || "ENDORSEMENT_KEY_CERTIFICATE" || "FILE_RECOVERY" || "HAL_EXTENSION" || "IP_SECURITY_END_SYSTEM" || "IP_SECURITY_IKE_INTERMEDIATE" || "IP_SECURITY_TUNNEL_TERMINATION" || "IP_SECURITY_USER" || "ISOLATED_USER_MODE" || "KDC_AUTHENTICATION" || "KERNEL_MODE_CODE_SIGNING" || "KEY_PACK_LICENSES" || "KEY_RECOVERY" || "KEY_RECOVERY_AGENT" || "LICENSE_SERVER_VERIFICATION" || "LIFETIME_SIGNING" || "MICROSOFT_PUBLISHER" || "MICROSOFT_TIME_STAMPING" || "MICROSOFT_TRUST_LIST_SIGNING" || "OCSP_SIGNING" || "OEM_WINDOWS_SYSTEM_COMPONENT_VERIFICATION" || "PLATFORM_CERTIFICATE" || "PREVIEW_BUILD_SIGNING" || "PRIVATE_KEY_ARCHIVAL" || "PROTECTED_PROCESS_LIGHT_VERIFICATION" || "PROTECTED_PROCESS_VERIFICATION" || "QUALIFIED_SUBORDINATION" || "REVOKED_LIST_SIGNER" || "ROOT_PROGRAM_AUTO_UPDATE_CA_REVOCATION" || "ROOT_PROGRAM_AUTO_UPDATE_END_REVOCATION" || "ROOT_PROGRAM_NO_OSCP_FAILOVER_TO_CRL" || "ROOT_LIST_SIGNER" || "SECURE_EMAIL" || "SERVER_AUTHENTICATION" || "SMART_CARD_LOGIN" || "SPC_ENCRYPTED_DIGEST_RETRY_COUNT" || "SPC_RELAXED_PE_MARKER_CHECK" || "TIME_STAMPING" || "WINDOWS_HARDWARE_DRIVER_ATTESTED_VERIFICATION" || "WINDOWS_HARDWARE_DRIVER_EXTENDED_VERIFICATION" || "WINDOWS_HARDWARE_DRIVER_VERIFICATION" || "WINDOWS_HELLO_RECOVERY_KEY_ENCRYPTION" || "WINDOWS_KITS_COMPONENT" || "WINDOWS_RT_VERIFICATION" || "WINDOWS_SOFTWARE_EXTENSION_VERIFICATION" || "WINDOWS_STORE" || "WINDOWS_SYSTEM_COMPONENT_VERIFICATION" || "WINDOWS_TCB_COMPONENT" || "WINDOWS_THIRD_PARTY_APPLICATION_COMPONENT" || "WINDOWS_UPDATE",
 *               PolicyObjectIdentifier: "STRING_VALUE",
 *             },
 *           ],
 *         },
 *       },
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateTemplateResponse
 * //   TemplateArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTemplateCommandInput - {@link CreateTemplateCommandInput}
 * @returns {@link CreateTemplateCommandOutput}
 * @see {@link CreateTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateCommandOutput} for command's `response` shape.
 * @see {@link PcaConnectorAdClientResolvedConfig | config} for PcaConnectorAdClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You can receive this error if you attempt to create a resource share when you don't have
 *          the required permissions. This can be caused by insufficient permissions in policies
 *          attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen
 *          because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP)
 *          that affects your Amazon Web Services account. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request cannot be completed for one of the following reasons because the requested
 *          resource was being concurrently modified by another request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with
 *          an internal server. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent resource. The resource might not be
 *          specified correctly, or its status might not be ACTIVE.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occurred. For example, invalid characters in a template name,
 *          or if a pagination token is invalid. </p>
 *
 * @throws {@link PcaConnectorAdServiceException}
 * <p>Base exception class for all service exceptions from PcaConnectorAd service.</p>
 *
 */
export class CreateTemplateCommand extends $Command<
  CreateTemplateCommandInput,
  CreateTemplateCommandOutput,
  PcaConnectorAdClientResolvedConfig
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
  constructor(readonly input: CreateTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PcaConnectorAdClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTemplateCommandInput, CreateTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PcaConnectorAdClient";
    const commandName = "CreateTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PcaConnectorAd",
        operation: "CreateTemplate",
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
  private serialize(input: CreateTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTemplateCommandOutput> {
    return de_CreateTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
