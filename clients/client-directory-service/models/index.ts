import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AcceptSharedDirectoryRequest {
  __type?: "AcceptSharedDirectoryRequest";
  /**
   * <p>Identifier of the shared directory in the directory consumer account. This identifier is different for each directory owner account. </p>
   */
  SharedDirectoryId: string | undefined;
}

export namespace AcceptSharedDirectoryRequest {
  export const filterSensitiveLog = (
    obj: AcceptSharedDirectoryRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AcceptSharedDirectoryRequest =>
    __isa(o, "AcceptSharedDirectoryRequest");
}

export interface AcceptSharedDirectoryResult {
  __type?: "AcceptSharedDirectoryResult";
  /**
   * <p>The shared directory in the directory consumer account.</p>
   */
  SharedDirectory?: SharedDirectory;
}

export namespace AcceptSharedDirectoryResult {
  export const filterSensitiveLog = (
    obj: AcceptSharedDirectoryResult
  ): any => ({
    ...obj,
    ...(obj.SharedDirectory && {
      SharedDirectory: SharedDirectory.filterSensitiveLog(obj.SharedDirectory)
    })
  });
  export const isa = (o: any): o is AcceptSharedDirectoryResult =>
    __isa(o, "AcceptSharedDirectoryResult");
}

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessDeniedException =>
    __isa(o, "AccessDeniedException");
}

export interface AddIpRoutesRequest {
  __type?: "AddIpRoutesRequest";
  /**
   * <p>Identifier (ID) of the directory to which to add the address block.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>IP address blocks, using CIDR format, of the traffic to route. This is often the IP address block of the DNS server used for your on-premises domain.</p>
   */
  IpRoutes: IpRoute[] | undefined;

  /**
   * <p>If set to true, updates the inbound and outbound rules of the security group that has the description: "AWS created security group for <i>directory ID</i> directory controllers."
   *          Following are the new rules:
   *       </p>
   *          <p>Inbound:</p>
   *          <ul>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 88, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 123, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 138, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 389, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 464, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 445, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 88, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 135, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 445, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 464, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 636, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 1024-65535, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 3268-33269, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: DNS (UDP), Protocol: UDP, Range: 53, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: DNS (TCP), Protocol: TCP, Range: 53, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: LDAP, Protocol: TCP, Range: 389, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: All ICMP, Protocol: All, Range: N/A, Source: 0.0.0.0/0</p>
   *             </li>
   *          </ul>
   *
   *          <p></p>
   *          <p>Outbound:</p>
   *          <ul>
   *             <li>
   *                <p>Type: All traffic, Protocol: All, Range: All, Destination: 0.0.0.0/0</p>
   *             </li>
   *          </ul>
   *          <p>These security rules impact an internal network interface that is not exposed publicly.</p>
   */
  UpdateSecurityGroupForDirectoryControllers?: boolean;
}

export namespace AddIpRoutesRequest {
  export const filterSensitiveLog = (obj: AddIpRoutesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddIpRoutesRequest =>
    __isa(o, "AddIpRoutesRequest");
}

export interface AddIpRoutesResult {
  __type?: "AddIpRoutesResult";
}

export namespace AddIpRoutesResult {
  export const filterSensitiveLog = (obj: AddIpRoutesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddIpRoutesResult =>
    __isa(o, "AddIpRoutesResult");
}

export interface AddTagsToResourceRequest {
  __type?: "AddTagsToResourceRequest";
  /**
   * <p>Identifier (ID) for the directory to which to add the tag.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The tags to be assigned to the directory.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace AddTagsToResourceRequest {
  export const filterSensitiveLog = (obj: AddTagsToResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsToResourceRequest =>
    __isa(o, "AddTagsToResourceRequest");
}

export interface AddTagsToResourceResult {
  __type?: "AddTagsToResourceResult";
}

export namespace AddTagsToResourceResult {
  export const filterSensitiveLog = (obj: AddTagsToResourceResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsToResourceResult =>
    __isa(o, "AddTagsToResourceResult");
}

/**
 * <p>Represents a named directory attribute.</p>
 */
export interface Attribute {
  __type?: "Attribute";
  /**
   * <p>The name of the attribute.</p>
   */
  Name?: string;

  /**
   * <p>The value of the attribute.</p>
   */
  Value?: string;
}

export namespace Attribute {
  export const filterSensitiveLog = (obj: Attribute): any => ({
    ...obj
  });
  export const isa = (o: any): o is Attribute => __isa(o, "Attribute");
}

/**
 * <p>An authentication error occurred.</p>
 */
export interface AuthenticationFailedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AuthenticationFailedException";
  $fault: "client";
  /**
   * <p>The textual message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The identifier of the request that caused the exception.</p>
   */
  RequestId?: string;
}

export namespace AuthenticationFailedException {
  export const filterSensitiveLog = (
    obj: AuthenticationFailedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthenticationFailedException =>
    __isa(o, "AuthenticationFailedException");
}

export interface CancelSchemaExtensionRequest {
  __type?: "CancelSchemaExtensionRequest";
  /**
   * <p>The identifier of the directory whose schema extension will be canceled.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifier of the schema extension that will be canceled.</p>
   */
  SchemaExtensionId: string | undefined;
}

export namespace CancelSchemaExtensionRequest {
  export const filterSensitiveLog = (
    obj: CancelSchemaExtensionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelSchemaExtensionRequest =>
    __isa(o, "CancelSchemaExtensionRequest");
}

export interface CancelSchemaExtensionResult {
  __type?: "CancelSchemaExtensionResult";
}

export namespace CancelSchemaExtensionResult {
  export const filterSensitiveLog = (
    obj: CancelSchemaExtensionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelSchemaExtensionResult =>
    __isa(o, "CancelSchemaExtensionResult");
}

/**
 * <p>Information about the certificate.</p>
 */
export interface Certificate {
  __type?: "Certificate";
  /**
   * <p>The identifier of the certificate.</p>
   */
  CertificateId?: string;

  /**
   * <p>The common name for the certificate.</p>
   */
  CommonName?: string;

  /**
   * <p>The date and time when the certificate will expire.</p>
   */
  ExpiryDateTime?: Date;

  /**
   * <p>The date and time that the certificate was registered.</p>
   */
  RegisteredDateTime?: Date;

  /**
   * <p>The state of the certificate.</p>
   */
  State?: CertificateState | string;

  /**
   * <p>Describes a state change for the certificate.</p>
   */
  StateReason?: string;
}

export namespace Certificate {
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj
  });
  export const isa = (o: any): o is Certificate => __isa(o, "Certificate");
}

/**
 * <p>The certificate has already been registered into the system.</p>
 */
export interface CertificateAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "CertificateAlreadyExistsException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace CertificateAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: CertificateAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateAlreadyExistsException =>
    __isa(o, "CertificateAlreadyExistsException");
}

/**
 * <p>The certificate is not present in the system for describe or deregister activities.</p>
 */
export interface CertificateDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "CertificateDoesNotExistException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace CertificateDoesNotExistException {
  export const filterSensitiveLog = (
    obj: CertificateDoesNotExistException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateDoesNotExistException =>
    __isa(o, "CertificateDoesNotExistException");
}

/**
 * <p>Contains general information about a certificate.</p>
 */
export interface CertificateInfo {
  __type?: "CertificateInfo";
  /**
   * <p>The identifier of the certificate.</p>
   */
  CertificateId?: string;

  /**
   * <p>The common name for the certificate.</p>
   */
  CommonName?: string;

  /**
   * <p>The state of the certificate.</p>
   */
  State?: CertificateState | string;
}

export namespace CertificateInfo {
  export const filterSensitiveLog = (obj: CertificateInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateInfo =>
    __isa(o, "CertificateInfo");
}

/**
 * <p>The certificate is being used for the LDAP security connection and cannot be removed
 *       without disabling LDAP security.</p>
 */
export interface CertificateInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "CertificateInUseException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace CertificateInUseException {
  export const filterSensitiveLog = (obj: CertificateInUseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateInUseException =>
    __isa(o, "CertificateInUseException");
}

/**
 * <p>The certificate could not be added because the certificate limit has been reached.</p>
 */
export interface CertificateLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "CertificateLimitExceededException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace CertificateLimitExceededException {
  export const filterSensitiveLog = (
    obj: CertificateLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateLimitExceededException =>
    __isa(o, "CertificateLimitExceededException");
}

export enum CertificateState {
  DEREGISTERED = "Deregistered",
  DEREGISTERING = "Deregistering",
  DEREGISTER_FAILED = "DeregisterFailed",
  REGISTERED = "Registered",
  REGISTERING = "Registering",
  REGISTER_FAILED = "RegisterFailed"
}

/**
 * <p>A client exception has occurred.</p>
 */
export interface ClientException extends __SmithyException, $MetadataBearer {
  name: "ClientException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace ClientException {
  export const filterSensitiveLog = (obj: ClientException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClientException =>
    __isa(o, "ClientException");
}

/**
 * <p>Contains information about a computer account in a directory.</p>
 */
export interface Computer {
  __type?: "Computer";
  /**
   * <p>An array of <a>Attribute</a> objects containing the LDAP attributes that belong to the
   *             computer account.</p>
   */
  ComputerAttributes?: Attribute[];

  /**
   * <p>The identifier of the computer.</p>
   */
  ComputerId?: string;

  /**
   * <p>The computer name.</p>
   */
  ComputerName?: string;
}

export namespace Computer {
  export const filterSensitiveLog = (obj: Computer): any => ({
    ...obj
  });
  export const isa = (o: any): o is Computer => __isa(o, "Computer");
}

/**
 * <p>Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain.</p>
 */
export interface ConditionalForwarder {
  __type?: "ConditionalForwarder";
  /**
   * <p>The IP addresses of the remote DNS server associated with RemoteDomainName. This is the IP address of the DNS server that your conditional forwarder points to.</p>
   */
  DnsIpAddrs?: string[];

  /**
   * <p>The fully qualified domain name (FQDN) of the remote domains pointed to by the conditional forwarder.</p>
   */
  RemoteDomainName?: string;

  /**
   * <p>The replication scope of the conditional forwarder. The only allowed value is
   *                   <code>Domain</code>, which will replicate the conditional forwarder to all of the
   *                   domain controllers for your AWS directory.</p>
   */
  ReplicationScope?: ReplicationScope | string;
}

export namespace ConditionalForwarder {
  export const filterSensitiveLog = (obj: ConditionalForwarder): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConditionalForwarder =>
    __isa(o, "ConditionalForwarder");
}

/**
 * <p>Contains the inputs for the <a>ConnectDirectory</a> operation.</p>
 */
export interface ConnectDirectoryRequest {
  __type?: "ConnectDirectoryRequest";
  /**
   * <p>A <a>DirectoryConnectSettings</a> object that contains additional information for the
   *          operation.</p>
   */
  ConnectSettings: DirectoryConnectSettings | undefined;

  /**
   * <p>A description for the directory.</p>
   */
  Description?: string;

  /**
   * <p>The fully qualified name of the on-premises directory, such as
   *         <code>corp.example.com</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The password for the on-premises user account.</p>
   */
  Password: string | undefined;

  /**
   * <p>The NetBIOS name of the on-premises directory, such as <code>CORP</code>.</p>
   */
  ShortName?: string;

  /**
   * <p>The size of the directory.</p>
   */
  Size: DirectorySize | string | undefined;

  /**
   * <p>The tags to be assigned to AD Connector.</p>
   */
  Tags?: Tag[];
}

export namespace ConnectDirectoryRequest {
  export const filterSensitiveLog = (obj: ConnectDirectoryRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is ConnectDirectoryRequest =>
    __isa(o, "ConnectDirectoryRequest");
}

/**
 * <p>Contains the results of the <a>ConnectDirectory</a> operation.</p>
 */
export interface ConnectDirectoryResult {
  __type?: "ConnectDirectoryResult";
  /**
   * <p>The identifier of the new directory.</p>
   */
  DirectoryId?: string;
}

export namespace ConnectDirectoryResult {
  export const filterSensitiveLog = (obj: ConnectDirectoryResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConnectDirectoryResult =>
    __isa(o, "ConnectDirectoryResult");
}

/**
 * <p>Contains the inputs for the <a>CreateAlias</a> operation.</p>
 */
export interface CreateAliasRequest {
  __type?: "CreateAliasRequest";
  /**
   * <p>The requested alias.</p>
   *          <p>The alias must be unique amongst all aliases in AWS. This operation throws an
   *             <code>EntityAlreadyExistsException</code> error if the alias already exists.</p>
   */
  Alias: string | undefined;

  /**
   * <p>The identifier of the directory for which to create the alias.</p>
   */
  DirectoryId: string | undefined;
}

export namespace CreateAliasRequest {
  export const filterSensitiveLog = (obj: CreateAliasRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAliasRequest =>
    __isa(o, "CreateAliasRequest");
}

/**
 * <p>Contains the results of the <a>CreateAlias</a> operation.</p>
 */
export interface CreateAliasResult {
  __type?: "CreateAliasResult";
  /**
   * <p>The alias for the directory.</p>
   */
  Alias?: string;

  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId?: string;
}

export namespace CreateAliasResult {
  export const filterSensitiveLog = (obj: CreateAliasResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAliasResult =>
    __isa(o, "CreateAliasResult");
}

/**
 * <p>Contains the inputs for the <a>CreateComputer</a> operation.</p>
 */
export interface CreateComputerRequest {
  __type?: "CreateComputerRequest";
  /**
   * <p>An array of <a>Attribute</a> objects that contain any LDAP attributes to apply to the
   *             computer account.</p>
   */
  ComputerAttributes?: Attribute[];

  /**
   * <p>The name of the computer account.</p>
   */
  ComputerName: string | undefined;

  /**
   * <p>The identifier of the directory in which to create the computer account.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The fully-qualified distinguished name of the organizational unit to place the computer account in.</p>
   */
  OrganizationalUnitDistinguishedName?: string;

  /**
   * <p>A one-time password that is used to join the computer to the directory. You should generate a random, strong password to use for this parameter.</p>
   */
  Password: string | undefined;
}

export namespace CreateComputerRequest {
  export const filterSensitiveLog = (obj: CreateComputerRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is CreateComputerRequest =>
    __isa(o, "CreateComputerRequest");
}

/**
 * <p>Contains the results for the <a>CreateComputer</a> operation.</p>
 */
export interface CreateComputerResult {
  __type?: "CreateComputerResult";
  /**
   * <p>A <a>Computer</a> object that represents the computer account.</p>
   */
  Computer?: Computer;
}

export namespace CreateComputerResult {
  export const filterSensitiveLog = (obj: CreateComputerResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateComputerResult =>
    __isa(o, "CreateComputerResult");
}

/**
 * <p>Initiates the creation of a conditional forwarder for your AWS Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain.</p>
 */
export interface CreateConditionalForwarderRequest {
  __type?: "CreateConditionalForwarderRequest";
  /**
   * <p>The directory ID of the AWS directory for which you are creating the conditional forwarder.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The IP addresses of the remote DNS server associated with RemoteDomainName.</p>
   */
  DnsIpAddrs: string[] | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of the remote domain with which you will set up a trust relationship.</p>
   */
  RemoteDomainName: string | undefined;
}

export namespace CreateConditionalForwarderRequest {
  export const filterSensitiveLog = (
    obj: CreateConditionalForwarderRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateConditionalForwarderRequest =>
    __isa(o, "CreateConditionalForwarderRequest");
}

/**
 * <p>The result of a CreateConditinalForwarder request.</p>
 */
export interface CreateConditionalForwarderResult {
  __type?: "CreateConditionalForwarderResult";
}

export namespace CreateConditionalForwarderResult {
  export const filterSensitiveLog = (
    obj: CreateConditionalForwarderResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateConditionalForwarderResult =>
    __isa(o, "CreateConditionalForwarderResult");
}

/**
 * <p>Contains the inputs for the <a>CreateDirectory</a> operation. </p>
 */
export interface CreateDirectoryRequest {
  __type?: "CreateDirectoryRequest";
  /**
   * <p>A description for the directory.</p>
   */
  Description?: string;

  /**
   * <p>The fully qualified name for the directory, such as <code>corp.example.com</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The password for the directory administrator. The directory creation process creates
   *       a directory administrator account with the user name <code>Administrator</code> and this
   *       password.</p>
   *          <p>If you need to change the password for the administrator account, you can use the <a>ResetUserPassword</a> API call.</p>
   */
  Password: string | undefined;

  /**
   * <p>The NetBIOS name of the directory, such as <code>CORP</code>.</p>
   */
  ShortName?: string;

  /**
   * <p>The size of the directory.</p>
   */
  Size: DirectorySize | string | undefined;

  /**
   * <p>The tags to be assigned to the Simple AD directory.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A <a>DirectoryVpcSettings</a> object that contains additional information for the
   *          operation.</p>
   */
  VpcSettings?: DirectoryVpcSettings;
}

export namespace CreateDirectoryRequest {
  export const filterSensitiveLog = (obj: CreateDirectoryRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is CreateDirectoryRequest =>
    __isa(o, "CreateDirectoryRequest");
}

/**
 * <p>Contains the results of the <a>CreateDirectory</a> operation.</p>
 */
export interface CreateDirectoryResult {
  __type?: "CreateDirectoryResult";
  /**
   * <p>The identifier of the directory that was created.</p>
   */
  DirectoryId?: string;
}

export namespace CreateDirectoryResult {
  export const filterSensitiveLog = (obj: CreateDirectoryResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDirectoryResult =>
    __isa(o, "CreateDirectoryResult");
}

export interface CreateLogSubscriptionRequest {
  __type?: "CreateLogSubscriptionRequest";
  /**
   * <p>Identifier of the directory to which you want to subscribe and receive real-time logs
   *       to your specified CloudWatch log group.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The name of the CloudWatch log group where the real-time domain controller logs are forwarded.</p>
   */
  LogGroupName: string | undefined;
}

export namespace CreateLogSubscriptionRequest {
  export const filterSensitiveLog = (
    obj: CreateLogSubscriptionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateLogSubscriptionRequest =>
    __isa(o, "CreateLogSubscriptionRequest");
}

export interface CreateLogSubscriptionResult {
  __type?: "CreateLogSubscriptionResult";
}

export namespace CreateLogSubscriptionResult {
  export const filterSensitiveLog = (
    obj: CreateLogSubscriptionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateLogSubscriptionResult =>
    __isa(o, "CreateLogSubscriptionResult");
}

/**
 * <p>Creates an AWS Managed Microsoft AD directory.</p>
 */
export interface CreateMicrosoftADRequest {
  __type?: "CreateMicrosoftADRequest";
  /**
   * <p>A description for the directory. This label will appear on the AWS console <code>Directory Details</code> page after the directory is created.</p>
   */
  Description?: string;

  /**
   * <p>AWS Managed Microsoft AD is available in two editions: <code>Standard</code> and <code>Enterprise</code>. <code>Enterprise</code> is the default.</p>
   */
  Edition?: DirectoryEdition | string;

  /**
   * <p>The fully qualified domain name for the AWS Managed Microsoft AD directory, such as
   *        <code>corp.example.com</code>. This name will resolve inside your VPC only. It does not need
   *        to be publicly resolvable.</p>
   */
  Name: string | undefined;

  /**
   * <p>The password for the default administrative user named <code>Admin</code>.</p>
   *          <p>If you need to change the password for the administrator account, you can use the <a>ResetUserPassword</a> API call.</p>
   */
  Password: string | undefined;

  /**
   * <p>The NetBIOS name for your domain, such as <code>CORP</code>. If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, <code>CORP</code> for the directory DNS <code>corp.example.com</code>. </p>
   */
  ShortName?: string;

  /**
   * <p>The tags to be assigned to the AWS Managed Microsoft AD directory.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
   */
  VpcSettings: DirectoryVpcSettings | undefined;
}

export namespace CreateMicrosoftADRequest {
  export const filterSensitiveLog = (obj: CreateMicrosoftADRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is CreateMicrosoftADRequest =>
    __isa(o, "CreateMicrosoftADRequest");
}

/**
 * <p>Result of a CreateMicrosoftAD request.</p>
 */
export interface CreateMicrosoftADResult {
  __type?: "CreateMicrosoftADResult";
  /**
   * <p>The identifier of the directory that was created.</p>
   */
  DirectoryId?: string;
}

export namespace CreateMicrosoftADResult {
  export const filterSensitiveLog = (obj: CreateMicrosoftADResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateMicrosoftADResult =>
    __isa(o, "CreateMicrosoftADResult");
}

/**
 * <p>Contains the inputs for the <a>CreateSnapshot</a> operation.</p>
 */
export interface CreateSnapshotRequest {
  __type?: "CreateSnapshotRequest";
  /**
   * <p>The identifier of the directory of which to take a snapshot.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The descriptive name to apply to the snapshot.</p>
   */
  Name?: string;
}

export namespace CreateSnapshotRequest {
  export const filterSensitiveLog = (obj: CreateSnapshotRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSnapshotRequest =>
    __isa(o, "CreateSnapshotRequest");
}

/**
 * <p>Contains the results of the <a>CreateSnapshot</a> operation.</p>
 */
export interface CreateSnapshotResult {
  __type?: "CreateSnapshotResult";
  /**
   * <p>The identifier of the snapshot that was created.</p>
   */
  SnapshotId?: string;
}

export namespace CreateSnapshotResult {
  export const filterSensitiveLog = (obj: CreateSnapshotResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSnapshotResult =>
    __isa(o, "CreateSnapshotResult");
}

/**
 * <p>AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your AWS Managed Microsoft AD directory, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p>
 *          <p>This action initiates the creation of the AWS side of a trust relationship between an AWS Managed Microsoft AD directory and an external domain.</p>
 */
export interface CreateTrustRequest {
  __type?: "CreateTrustRequest";
  /**
   * <p>The IP addresses of the remote DNS server associated with RemoteDomainName.</p>
   */
  ConditionalForwarderIpAddrs?: string[];

  /**
   * <p>The Directory ID of the AWS Managed Microsoft AD directory for which to establish the trust relationship.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The Fully Qualified Domain Name (FQDN) of the external domain for which to create the trust relationship.</p>
   */
  RemoteDomainName: string | undefined;

  /**
   * <p>Optional parameter to enable selective authentication for the trust.</p>
   */
  SelectiveAuth?: SelectiveAuth | string;

  /**
   * <p>The direction of the trust relationship.</p>
   */
  TrustDirection: TrustDirection | string | undefined;

  /**
   * <p>The trust password. The must be the same password that was used when creating the trust relationship on the external domain.</p>
   */
  TrustPassword: string | undefined;

  /**
   * <p>The trust relationship type. <code>Forest</code> is the default.</p>
   */
  TrustType?: TrustType | string;
}

export namespace CreateTrustRequest {
  export const filterSensitiveLog = (obj: CreateTrustRequest): any => ({
    ...obj,
    ...(obj.TrustPassword && { TrustPassword: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is CreateTrustRequest =>
    __isa(o, "CreateTrustRequest");
}

/**
 * <p>The result of a CreateTrust request.</p>
 */
export interface CreateTrustResult {
  __type?: "CreateTrustResult";
  /**
   * <p>A unique identifier for the trust relationship that was created.</p>
   */
  TrustId?: string;
}

export namespace CreateTrustResult {
  export const filterSensitiveLog = (obj: CreateTrustResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTrustResult =>
    __isa(o, "CreateTrustResult");
}

/**
 * <p>Deletes a conditional forwarder.</p>
 */
export interface DeleteConditionalForwarderRequest {
  __type?: "DeleteConditionalForwarderRequest";
  /**
   * <p>The directory ID for which you are deleting the conditional forwarder.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of the remote domain with which you are deleting the conditional forwarder.</p>
   */
  RemoteDomainName: string | undefined;
}

export namespace DeleteConditionalForwarderRequest {
  export const filterSensitiveLog = (
    obj: DeleteConditionalForwarderRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteConditionalForwarderRequest =>
    __isa(o, "DeleteConditionalForwarderRequest");
}

/**
 * <p>The result of a DeleteConditionalForwarder request.</p>
 */
export interface DeleteConditionalForwarderResult {
  __type?: "DeleteConditionalForwarderResult";
}

export namespace DeleteConditionalForwarderResult {
  export const filterSensitiveLog = (
    obj: DeleteConditionalForwarderResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteConditionalForwarderResult =>
    __isa(o, "DeleteConditionalForwarderResult");
}

/**
 * <p>Contains the inputs for the <a>DeleteDirectory</a> operation.</p>
 */
export interface DeleteDirectoryRequest {
  __type?: "DeleteDirectoryRequest";
  /**
   * <p>The identifier of the directory to delete.</p>
   */
  DirectoryId: string | undefined;
}

export namespace DeleteDirectoryRequest {
  export const filterSensitiveLog = (obj: DeleteDirectoryRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDirectoryRequest =>
    __isa(o, "DeleteDirectoryRequest");
}

/**
 * <p>Contains the results of the <a>DeleteDirectory</a> operation.</p>
 */
export interface DeleteDirectoryResult {
  __type?: "DeleteDirectoryResult";
  /**
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;
}

export namespace DeleteDirectoryResult {
  export const filterSensitiveLog = (obj: DeleteDirectoryResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDirectoryResult =>
    __isa(o, "DeleteDirectoryResult");
}

export interface DeleteLogSubscriptionRequest {
  __type?: "DeleteLogSubscriptionRequest";
  /**
   * <p>Identifier of the directory whose log subscription you want to delete.</p>
   */
  DirectoryId: string | undefined;
}

export namespace DeleteLogSubscriptionRequest {
  export const filterSensitiveLog = (
    obj: DeleteLogSubscriptionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteLogSubscriptionRequest =>
    __isa(o, "DeleteLogSubscriptionRequest");
}

export interface DeleteLogSubscriptionResult {
  __type?: "DeleteLogSubscriptionResult";
}

export namespace DeleteLogSubscriptionResult {
  export const filterSensitiveLog = (
    obj: DeleteLogSubscriptionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteLogSubscriptionResult =>
    __isa(o, "DeleteLogSubscriptionResult");
}

/**
 * <p>Contains the inputs for the <a>DeleteSnapshot</a> operation.</p>
 */
export interface DeleteSnapshotRequest {
  __type?: "DeleteSnapshotRequest";
  /**
   * <p>The identifier of the directory snapshot to be deleted.</p>
   */
  SnapshotId: string | undefined;
}

export namespace DeleteSnapshotRequest {
  export const filterSensitiveLog = (obj: DeleteSnapshotRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSnapshotRequest =>
    __isa(o, "DeleteSnapshotRequest");
}

/**
 * <p>Contains the results of the <a>DeleteSnapshot</a> operation.</p>
 */
export interface DeleteSnapshotResult {
  __type?: "DeleteSnapshotResult";
  /**
   * <p>The identifier of the directory snapshot that was deleted.</p>
   */
  SnapshotId?: string;
}

export namespace DeleteSnapshotResult {
  export const filterSensitiveLog = (obj: DeleteSnapshotResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSnapshotResult =>
    __isa(o, "DeleteSnapshotResult");
}

/**
 * <p>Deletes the local side of an existing trust relationship between the AWS Managed Microsoft AD directory and the external domain.</p>
 */
export interface DeleteTrustRequest {
  __type?: "DeleteTrustRequest";
  /**
   * <p>Delete a conditional forwarder as part of a DeleteTrustRequest.</p>
   */
  DeleteAssociatedConditionalForwarder?: boolean;

  /**
   * <p>The Trust ID of the trust relationship to be deleted.</p>
   */
  TrustId: string | undefined;
}

export namespace DeleteTrustRequest {
  export const filterSensitiveLog = (obj: DeleteTrustRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTrustRequest =>
    __isa(o, "DeleteTrustRequest");
}

/**
 * <p>The result of a DeleteTrust request.</p>
 */
export interface DeleteTrustResult {
  __type?: "DeleteTrustResult";
  /**
   * <p>The Trust ID of the trust relationship that was deleted.</p>
   */
  TrustId?: string;
}

export namespace DeleteTrustResult {
  export const filterSensitiveLog = (obj: DeleteTrustResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTrustResult =>
    __isa(o, "DeleteTrustResult");
}

export interface DeregisterCertificateRequest {
  __type?: "DeregisterCertificateRequest";
  /**
   * <p>The identifier of the certificate.</p>
   */
  CertificateId: string | undefined;

  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;
}

export namespace DeregisterCertificateRequest {
  export const filterSensitiveLog = (
    obj: DeregisterCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeregisterCertificateRequest =>
    __isa(o, "DeregisterCertificateRequest");
}

export interface DeregisterCertificateResult {
  __type?: "DeregisterCertificateResult";
}

export namespace DeregisterCertificateResult {
  export const filterSensitiveLog = (
    obj: DeregisterCertificateResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeregisterCertificateResult =>
    __isa(o, "DeregisterCertificateResult");
}

/**
 * <p>Removes the specified directory as a publisher to the specified SNS topic.</p>
 */
export interface DeregisterEventTopicRequest {
  __type?: "DeregisterEventTopicRequest";
  /**
   * <p>The Directory ID to remove as a publisher. This directory will no longer send messages to the specified SNS topic.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The name of the SNS topic from which to remove the directory as a publisher.</p>
   */
  TopicName: string | undefined;
}

export namespace DeregisterEventTopicRequest {
  export const filterSensitiveLog = (
    obj: DeregisterEventTopicRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeregisterEventTopicRequest =>
    __isa(o, "DeregisterEventTopicRequest");
}

/**
 * <p>The result of a DeregisterEventTopic request.</p>
 */
export interface DeregisterEventTopicResult {
  __type?: "DeregisterEventTopicResult";
}

export namespace DeregisterEventTopicResult {
  export const filterSensitiveLog = (obj: DeregisterEventTopicResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeregisterEventTopicResult =>
    __isa(o, "DeregisterEventTopicResult");
}

export interface DescribeCertificateRequest {
  __type?: "DescribeCertificateRequest";
  /**
   * <p>The identifier of the certificate.</p>
   */
  CertificateId: string | undefined;

  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;
}

export namespace DescribeCertificateRequest {
  export const filterSensitiveLog = (obj: DescribeCertificateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCertificateRequest =>
    __isa(o, "DescribeCertificateRequest");
}

export interface DescribeCertificateResult {
  __type?: "DescribeCertificateResult";
  /**
   * <p>Information about the certificate, including registered date time, certificate state, the
   *       reason for the state, expiration date time, and certificate common name.</p>
   */
  Certificate?: Certificate;
}

export namespace DescribeCertificateResult {
  export const filterSensitiveLog = (obj: DescribeCertificateResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCertificateResult =>
    __isa(o, "DescribeCertificateResult");
}

/**
 * <p>Describes a conditional forwarder.</p>
 */
export interface DescribeConditionalForwardersRequest {
  __type?: "DescribeConditionalForwardersRequest";
  /**
   * <p>The directory ID for which to get the list of associated conditional forwarders.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The fully qualified domain names (FQDN) of the remote domains for which to get the list of associated conditional forwarders. If this member is null, all conditional forwarders are returned.</p>
   */
  RemoteDomainNames?: string[];
}

export namespace DescribeConditionalForwardersRequest {
  export const filterSensitiveLog = (
    obj: DescribeConditionalForwardersRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeConditionalForwardersRequest =>
    __isa(o, "DescribeConditionalForwardersRequest");
}

/**
 * <p>The result of a DescribeConditionalForwarder request.</p>
 */
export interface DescribeConditionalForwardersResult {
  __type?: "DescribeConditionalForwardersResult";
  /**
   * <p>The list of conditional forwarders that have been created.</p>
   */
  ConditionalForwarders?: ConditionalForwarder[];
}

export namespace DescribeConditionalForwardersResult {
  export const filterSensitiveLog = (
    obj: DescribeConditionalForwardersResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeConditionalForwardersResult =>
    __isa(o, "DescribeConditionalForwardersResult");
}

/**
 * <p>Contains the inputs for the <a>DescribeDirectories</a> operation.</p>
 */
export interface DescribeDirectoriesRequest {
  __type?: "DescribeDirectoriesRequest";
  /**
   * <p>A list of identifiers of the directories for which to obtain the information. If this member is null, all directories that belong to the current account are returned.</p>
   *          <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>
   */
  DirectoryIds?: string[];

  /**
   * <p>The maximum number of items to return. If this value is zero, the maximum number of items is specified by the limitations of the operation.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>DescribeDirectoriesResult.NextToken</code> value from a previous call to
   *             <a>DescribeDirectories</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;
}

export namespace DescribeDirectoriesRequest {
  export const filterSensitiveLog = (obj: DescribeDirectoriesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDirectoriesRequest =>
    __isa(o, "DescribeDirectoriesRequest");
}

/**
 * <p>Contains the results of the <a>DescribeDirectories</a> operation.</p>
 */
export interface DescribeDirectoriesResult {
  __type?: "DescribeDirectoriesResult";
  /**
   * <p>The list of <a>DirectoryDescription</a> objects that were retrieved.</p>
   *          <p>It is possible that this list contains less than the number of items specified in the
   *             <code>Limit</code> member of the request. This occurs if there are less than the requested
   *          number of items left to retrieve, or if the limitations of the operation have been
   *          exceeded.</p>
   */
  DirectoryDescriptions?: DirectoryDescription[];

  /**
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code> parameter
   *          in a subsequent call to <a>DescribeDirectories</a> to retrieve the next set of items.</p>
   */
  NextToken?: string;
}

export namespace DescribeDirectoriesResult {
  export const filterSensitiveLog = (obj: DescribeDirectoriesResult): any => ({
    ...obj,
    ...(obj.DirectoryDescriptions && {
      DirectoryDescriptions: obj.DirectoryDescriptions.map(item =>
        DirectoryDescription.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is DescribeDirectoriesResult =>
    __isa(o, "DescribeDirectoriesResult");
}

export interface DescribeDomainControllersRequest {
  __type?: "DescribeDomainControllersRequest";
  /**
   * <p>Identifier of the directory for which to retrieve the domain controller information.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>A list of identifiers for the domain controllers whose information will be provided.</p>
   */
  DomainControllerIds?: string[];

  /**
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;

  /**
   * <p>The <i>DescribeDomainControllers.NextToken</i> value from a previous call to <a>DescribeDomainControllers</a>. Pass null if this is the first call. </p>
   */
  NextToken?: string;
}

export namespace DescribeDomainControllersRequest {
  export const filterSensitiveLog = (
    obj: DescribeDomainControllersRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDomainControllersRequest =>
    __isa(o, "DescribeDomainControllersRequest");
}

export interface DescribeDomainControllersResult {
  __type?: "DescribeDomainControllersResult";
  /**
   * <p>List of the <a>DomainController</a> objects that were retrieved.</p>
   */
  DomainControllers?: DomainController[];

  /**
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code> parameter in a subsequent call to <a>DescribeDomainControllers</a> retrieve the next set of items.</p>
   */
  NextToken?: string;
}

export namespace DescribeDomainControllersResult {
  export const filterSensitiveLog = (
    obj: DescribeDomainControllersResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDomainControllersResult =>
    __isa(o, "DescribeDomainControllersResult");
}

/**
 * <p>Describes event topics.</p>
 */
export interface DescribeEventTopicsRequest {
  __type?: "DescribeEventTopicsRequest";
  /**
   * <p>The Directory ID for which to get the list of associated SNS topics. If this member is null, associations for all Directory IDs are returned.</p>
   */
  DirectoryId?: string;

  /**
   * <p>A list of SNS topic names for which to obtain the information. If this member is null, all associations for the specified Directory ID are returned.</p>
   *          <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>
   */
  TopicNames?: string[];
}

export namespace DescribeEventTopicsRequest {
  export const filterSensitiveLog = (obj: DescribeEventTopicsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventTopicsRequest =>
    __isa(o, "DescribeEventTopicsRequest");
}

/**
 * <p>The result of a DescribeEventTopic request.</p>
 */
export interface DescribeEventTopicsResult {
  __type?: "DescribeEventTopicsResult";
  /**
   * <p>A list of SNS topic names that receive status messages from the specified Directory ID.</p>
   */
  EventTopics?: EventTopic[];
}

export namespace DescribeEventTopicsResult {
  export const filterSensitiveLog = (obj: DescribeEventTopicsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventTopicsResult =>
    __isa(o, "DescribeEventTopicsResult");
}

export interface DescribeLDAPSSettingsRequest {
  __type?: "DescribeLDAPSSettingsRequest";
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>Specifies the number of items that should be displayed on one page.</p>
   */
  Limit?: number;

  /**
   * <p>The type of next token used for pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>The type of LDAP security the customer wants to enable, either server or client. Currently
   *       supports only <code>Client</code>, (the default).</p>
   */
  Type?: LDAPSType | string;
}

export namespace DescribeLDAPSSettingsRequest {
  export const filterSensitiveLog = (
    obj: DescribeLDAPSSettingsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLDAPSSettingsRequest =>
    __isa(o, "DescribeLDAPSSettingsRequest");
}

export interface DescribeLDAPSSettingsResult {
  __type?: "DescribeLDAPSSettingsResult";
  /**
   * <p>Information about LDAP security for the specified directory, including status of
   *       enablement, state last updated date time, and the reason for the state.</p>
   */
  LDAPSSettingsInfo?: LDAPSSettingInfo[];

  /**
   * <p>The next token used to retrieve the LDAPS settings if the number of setting types exceeds page limit and there is another page.</p>
   */
  NextToken?: string;
}

export namespace DescribeLDAPSSettingsResult {
  export const filterSensitiveLog = (
    obj: DescribeLDAPSSettingsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLDAPSSettingsResult =>
    __isa(o, "DescribeLDAPSSettingsResult");
}

export interface DescribeSharedDirectoriesRequest {
  __type?: "DescribeSharedDirectoriesRequest";
  /**
   * <p>The number of shared directories to return in the response object.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>DescribeSharedDirectoriesResult.NextToken</code> value from a previous call to
   *       <a>DescribeSharedDirectories</a>. Pass null if this is the first call.
   *     </p>
   */
  NextToken?: string;

  /**
   * <p>Returns the identifier of the directory in the directory owner account. </p>
   */
  OwnerDirectoryId: string | undefined;

  /**
   * <p>A list of identifiers of all shared directories in your account. </p>
   */
  SharedDirectoryIds?: string[];
}

export namespace DescribeSharedDirectoriesRequest {
  export const filterSensitiveLog = (
    obj: DescribeSharedDirectoriesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSharedDirectoriesRequest =>
    __isa(o, "DescribeSharedDirectoriesRequest");
}

export interface DescribeSharedDirectoriesResult {
  __type?: "DescribeSharedDirectoriesResult";
  /**
   * <p>If not null, token that indicates that more results are available. Pass this value for the <code>NextToken</code> parameter
   *       in a subsequent call to <a>DescribeSharedDirectories</a> to retrieve the next set of items.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of all shared directories in your account.</p>
   */
  SharedDirectories?: SharedDirectory[];
}

export namespace DescribeSharedDirectoriesResult {
  export const filterSensitiveLog = (
    obj: DescribeSharedDirectoriesResult
  ): any => ({
    ...obj,
    ...(obj.SharedDirectories && {
      SharedDirectories: obj.SharedDirectories.map(item =>
        SharedDirectory.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is DescribeSharedDirectoriesResult =>
    __isa(o, "DescribeSharedDirectoriesResult");
}

/**
 * <p>Contains the inputs for the <a>DescribeSnapshots</a> operation.</p>
 */
export interface DescribeSnapshotsRequest {
  __type?: "DescribeSnapshotsRequest";
  /**
   * <p>The identifier of the directory for which to retrieve snapshot information.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The maximum number of objects to return.</p>
   */
  Limit?: number;

  /**
   * <p>The <i>DescribeSnapshotsResult.NextToken</i> value from a previous call to
   *             <a>DescribeSnapshots</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of identifiers of the snapshots to obtain the information for. If this member is
   *          null or empty, all snapshots are returned using the <i>Limit</i> and <i>NextToken</i>
   *          members.</p>
   */
  SnapshotIds?: string[];
}

export namespace DescribeSnapshotsRequest {
  export const filterSensitiveLog = (obj: DescribeSnapshotsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSnapshotsRequest =>
    __isa(o, "DescribeSnapshotsRequest");
}

/**
 * <p>Contains the results of the <a>DescribeSnapshots</a> operation.</p>
 */
export interface DescribeSnapshotsResult {
  __type?: "DescribeSnapshotsResult";
  /**
   * <p>If not null, more results are available. Pass this value in the <i>NextToken</i> member of
   *          a subsequent call to <a>DescribeSnapshots</a>.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of <a>Snapshot</a> objects that were retrieved.</p>
   *          <p>It is possible that this list contains less than the number of items specified in the
   *             <i>Limit</i> member of the request. This occurs if there are less than the requested
   *          number of items left to retrieve, or if the limitations of the operation have been
   *          exceeded.</p>
   */
  Snapshots?: Snapshot[];
}

export namespace DescribeSnapshotsResult {
  export const filterSensitiveLog = (obj: DescribeSnapshotsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSnapshotsResult =>
    __isa(o, "DescribeSnapshotsResult");
}

/**
 * <p>Describes the trust relationships for a particular AWS Managed Microsoft AD directory. If no input parameters are are provided, such as directory ID or trust ID, this request describes all the trust relationships.</p>
 */
export interface DescribeTrustsRequest {
  __type?: "DescribeTrustsRequest";
  /**
   * <p>The Directory ID of the AWS directory that is a part of the requested trust relationship.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The maximum number of objects to return.</p>
   */
  Limit?: number;

  /**
   * <p>The <i>DescribeTrustsResult.NextToken</i> value from a previous call to
   *       <a>DescribeTrusts</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of identifiers of the trust relationships for which to obtain the information. If this member is null, all trust relationships that belong to the current account are returned.</p>
   *          <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>
   */
  TrustIds?: string[];
}

export namespace DescribeTrustsRequest {
  export const filterSensitiveLog = (obj: DescribeTrustsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTrustsRequest =>
    __isa(o, "DescribeTrustsRequest");
}

/**
 * <p>The result of a DescribeTrust request.</p>
 */
export interface DescribeTrustsResult {
  __type?: "DescribeTrustsResult";
  /**
   * <p>If not null, more results are available. Pass this value for the <i>NextToken</i> parameter
   *       in a subsequent call to <a>DescribeTrusts</a> to retrieve the next set of items.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of Trust objects that were retrieved.</p>
   *          <p>It is possible that this list contains less than the number of items specified in the
   *          <i>Limit</i> member of the request. This occurs if there are less than the requested
   *          number of items left to retrieve, or if the limitations of the operation have been
   *          exceeded.</p>
   */
  Trusts?: Trust[];
}

export namespace DescribeTrustsResult {
  export const filterSensitiveLog = (obj: DescribeTrustsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTrustsResult =>
    __isa(o, "DescribeTrustsResult");
}

/**
 * <p>The specified directory has already been shared with this AWS account.</p>
 */
export interface DirectoryAlreadySharedException
  extends __SmithyException,
    $MetadataBearer {
  name: "DirectoryAlreadySharedException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace DirectoryAlreadySharedException {
  export const filterSensitiveLog = (
    obj: DirectoryAlreadySharedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DirectoryAlreadySharedException =>
    __isa(o, "DirectoryAlreadySharedException");
}

/**
 * <p>Contains information for the <a>ConnectDirectory</a> operation when an AD Connector
 *          directory is being created.</p>
 */
export interface DirectoryConnectSettings {
  __type?: "DirectoryConnectSettings";
  /**
   * <p>A list of one or more IP addresses of DNS servers or domain controllers in the on-premises directory.</p>
   */
  CustomerDnsIps: string[] | undefined;

  /**
   * <p>The user name of an account in the on-premises directory that is used to connect to
   *       the directory. This account must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>Read users and groups</p>
   *             </li>
   *             <li>
   *                <p>Create computer objects</p>
   *             </li>
   *             <li>
   *                <p>Join computers to the domain</p>
   *             </li>
   *          </ul>
   */
  CustomerUserName: string | undefined;

  /**
   * <p>A list of subnet identifiers in the VPC in which the AD Connector is created.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The identifier of the VPC in which the AD Connector is created.</p>
   */
  VpcId: string | undefined;
}

export namespace DirectoryConnectSettings {
  export const filterSensitiveLog = (obj: DirectoryConnectSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is DirectoryConnectSettings =>
    __isa(o, "DirectoryConnectSettings");
}

/**
 * <p>Contains information about an AD Connector directory.</p>
 */
export interface DirectoryConnectSettingsDescription {
  __type?: "DirectoryConnectSettingsDescription";
  /**
   * <p>A list of the Availability Zones that the directory is in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The IP addresses of the AD Connector servers.</p>
   */
  ConnectIps?: string[];

  /**
   * <p>The user name of the service account in the on-premises directory.</p>
   */
  CustomerUserName?: string;

  /**
   * <p>The security group identifier for the AD Connector directory.</p>
   */
  SecurityGroupId?: string;

  /**
   * <p>A list of subnet identifiers in the VPC that the AD Connector is in.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The identifier of the VPC that the AD Connector is in.</p>
   */
  VpcId?: string;
}

export namespace DirectoryConnectSettingsDescription {
  export const filterSensitiveLog = (
    obj: DirectoryConnectSettingsDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DirectoryConnectSettingsDescription =>
    __isa(o, "DirectoryConnectSettingsDescription");
}

/**
 * <p>Contains information about an AWS Directory Service directory.</p>
 */
export interface DirectoryDescription {
  __type?: "DirectoryDescription";
  /**
   * <p>The access URL for the directory, such as
   *             <code>http://<alias>.awsapps.com</code>.
   *          If no alias has been created for the directory, <code><alias></code>
   *          is the directory identifier, such as <code>d-XXXXXXXXXX</code>.</p>
   */
  AccessUrl?: string;

  /**
   * <p>The alias for the
   *          directory. If no
   *          alias has been created for the directory, the alias is the directory identifier, such as
   *             <code>d-XXXXXXXXXX</code>.</p>
   */
  Alias?: string;

  /**
   * <p>A <a>DirectoryConnectSettingsDescription</a> object that contains additional information
   *          about an AD Connector directory. This member is only present if the directory is an AD
   *          Connector directory.</p>
   */
  ConnectSettings?: DirectoryConnectSettingsDescription;

  /**
   * <p>The description for the directory.</p>
   */
  Description?: string;

  /**
   * <p>The desired number of domain controllers in the directory if the directory is Microsoft AD.</p>
   */
  DesiredNumberOfDomainControllers?: number;

  /**
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The IP addresses of the DNS servers for the directory. For a Simple AD or Microsoft AD directory, these are the IP addresses of the Simple AD or Microsoft AD directory servers. For an AD Connector directory, these are the IP addresses of the DNS servers or domain controllers in the on-premises directory to which the AD Connector is connected.</p>
   */
  DnsIpAddrs?: string[];

  /**
   * <p>The edition associated with this directory.</p>
   */
  Edition?: DirectoryEdition | string;

  /**
   * <p>Specifies when the directory was created.</p>
   */
  LaunchTime?: Date;

  /**
   * <p>The fully qualified name of the directory.</p>
   */
  Name?: string;

  /**
   * <p>Describes the AWS Managed Microsoft AD directory in the directory owner account.</p>
   */
  OwnerDirectoryDescription?: OwnerDirectoryDescription;

  /**
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS server configured
   *          for this directory.</p>
   */
  RadiusSettings?: RadiusSettings;

  /**
   * <p>The status of the RADIUS MFA server connection.</p>
   */
  RadiusStatus?: RadiusStatus | string;

  /**
   * <p>The method used when sharing a directory to determine whether the directory should be
   *       shared within your AWS organization (<code>ORGANIZATIONS</code>) or with any AWS account by
   *       sending a shared directory request (<code>HANDSHAKE</code>).</p>
   */
  ShareMethod?: ShareMethod | string;

  /**
   * <p>A directory share request that is sent by the directory owner to the directory consumer.
   *       The request includes a typed message to help the directory consumer administrator determine
   *       whether to approve or reject the share invitation.</p>
   */
  ShareNotes?: string;

  /**
   * <p>Current directory status of the shared AWS Managed Microsoft AD directory.</p>
   */
  ShareStatus?: ShareStatus | string;

  /**
   * <p>The short name of the directory.</p>
   */
  ShortName?: string;

  /**
   * <p>The directory size.</p>
   */
  Size?: DirectorySize | string;

  /**
   * <p>Indicates if single sign-on is enabled for the directory. For more information, see
   *         <a>EnableSso</a> and <a>DisableSso</a>.</p>
   */
  SsoEnabled?: boolean;

  /**
   * <p>The current stage of the directory.</p>
   */
  Stage?: DirectoryStage | string;

  /**
   * <p>The date and time that the stage was last updated.</p>
   */
  StageLastUpdatedDateTime?: Date;

  /**
   * <p>Additional information about the directory stage.</p>
   */
  StageReason?: string;

  /**
   * <p>The directory size.</p>
   */
  Type?: DirectoryType | string;

  /**
   * <p>A <a>DirectoryVpcSettingsDescription</a> object that contains additional information about
   *          a directory. This member is only present if the directory is a Simple AD or Managed AD
   *          directory.</p>
   */
  VpcSettings?: DirectoryVpcSettingsDescription;
}

export namespace DirectoryDescription {
  export const filterSensitiveLog = (obj: DirectoryDescription): any => ({
    ...obj,
    ...(obj.OwnerDirectoryDescription && {
      OwnerDirectoryDescription: OwnerDirectoryDescription.filterSensitiveLog(
        obj.OwnerDirectoryDescription
      )
    }),
    ...(obj.RadiusSettings && {
      RadiusSettings: RadiusSettings.filterSensitiveLog(obj.RadiusSettings)
    }),
    ...(obj.ShareNotes && { ShareNotes: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is DirectoryDescription =>
    __isa(o, "DirectoryDescription");
}

/**
 * <p>The specified directory does not exist in the system.</p>
 */
export interface DirectoryDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "DirectoryDoesNotExistException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace DirectoryDoesNotExistException {
  export const filterSensitiveLog = (
    obj: DirectoryDoesNotExistException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DirectoryDoesNotExistException =>
    __isa(o, "DirectoryDoesNotExistException");
}

export enum DirectoryEdition {
  ENTERPRISE = "Enterprise",
  STANDARD = "Standard"
}

/**
 * <p>The maximum number of directories in the region has been reached. You can use the
 *             <a>GetDirectoryLimits</a> operation to determine your directory limits in the
 *             region.</p>
 */
export interface DirectoryLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "DirectoryLimitExceededException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace DirectoryLimitExceededException {
  export const filterSensitiveLog = (
    obj: DirectoryLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DirectoryLimitExceededException =>
    __isa(o, "DirectoryLimitExceededException");
}

/**
 * <p>Contains directory limit information for a Region.</p>
 */
export interface DirectoryLimits {
  __type?: "DirectoryLimits";
  /**
   * <p>The current number of cloud directories in the Region.</p>
   */
  CloudOnlyDirectoriesCurrentCount?: number;

  /**
   * <p>The maximum number of cloud directories allowed in the Region.</p>
   */
  CloudOnlyDirectoriesLimit?: number;

  /**
   * <p>Indicates if the cloud directory limit has been reached.</p>
   */
  CloudOnlyDirectoriesLimitReached?: boolean;

  /**
   * <p>The current number of AWS Managed Microsoft AD directories in the region.</p>
   */
  CloudOnlyMicrosoftADCurrentCount?: number;

  /**
   * <p>The maximum number of AWS Managed Microsoft AD directories allowed in the region.</p>
   */
  CloudOnlyMicrosoftADLimit?: number;

  /**
   * <p>Indicates if the AWS Managed Microsoft AD directory limit has been reached.</p>
   */
  CloudOnlyMicrosoftADLimitReached?: boolean;

  /**
   * <p>The current number of connected directories in the Region.</p>
   */
  ConnectedDirectoriesCurrentCount?: number;

  /**
   * <p>The maximum number of connected directories allowed in the Region.</p>
   */
  ConnectedDirectoriesLimit?: number;

  /**
   * <p>Indicates if the connected directory limit has been reached.</p>
   */
  ConnectedDirectoriesLimitReached?: boolean;
}

export namespace DirectoryLimits {
  export const filterSensitiveLog = (obj: DirectoryLimits): any => ({
    ...obj
  });
  export const isa = (o: any): o is DirectoryLimits =>
    __isa(o, "DirectoryLimits");
}

/**
 * <p>The specified directory has not been shared with this AWS account.</p>
 */
export interface DirectoryNotSharedException
  extends __SmithyException,
    $MetadataBearer {
  name: "DirectoryNotSharedException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace DirectoryNotSharedException {
  export const filterSensitiveLog = (
    obj: DirectoryNotSharedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DirectoryNotSharedException =>
    __isa(o, "DirectoryNotSharedException");
}

export enum DirectorySize {
  LARGE = "Large",
  SMALL = "Small"
}

export enum DirectoryStage {
  ACTIVE = "Active",
  CREATED = "Created",
  CREATING = "Creating",
  DELETED = "Deleted",
  DELETING = "Deleting",
  FAILED = "Failed",
  IMPAIRED = "Impaired",
  INOPERABLE = "Inoperable",
  REQUESTED = "Requested",
  RESTOREFAILED = "RestoreFailed",
  RESTORING = "Restoring"
}

export enum DirectoryType {
  AD_CONNECTOR = "ADConnector",
  MICROSOFT_AD = "MicrosoftAD",
  SHARED_MICROSOFT_AD = "SharedMicrosoftAD",
  SIMPLE_AD = "SimpleAD"
}

/**
 * <p>The specified directory is unavailable or could not be found.</p>
 */
export interface DirectoryUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "DirectoryUnavailableException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace DirectoryUnavailableException {
  export const filterSensitiveLog = (
    obj: DirectoryUnavailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DirectoryUnavailableException =>
    __isa(o, "DirectoryUnavailableException");
}

/**
 * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
 */
export interface DirectoryVpcSettings {
  __type?: "DirectoryVpcSettings";
  /**
   * <p>The identifiers of the subnets for the directory servers. The two subnets must be in different Availability Zones. AWS Directory Service creates a directory server and a DNS server in each of these subnets.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The identifier of the VPC in which to create the directory.</p>
   */
  VpcId: string | undefined;
}

export namespace DirectoryVpcSettings {
  export const filterSensitiveLog = (obj: DirectoryVpcSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is DirectoryVpcSettings =>
    __isa(o, "DirectoryVpcSettings");
}

/**
 * <p>Contains information about the directory.</p>
 */
export interface DirectoryVpcSettingsDescription {
  __type?: "DirectoryVpcSettingsDescription";
  /**
   * <p>The list of Availability Zones that the directory is in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The domain controller security group identifier for the directory.</p>
   */
  SecurityGroupId?: string;

  /**
   * <p>The identifiers of the subnets for the directory servers.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The identifier of the VPC that the directory is in.</p>
   */
  VpcId?: string;
}

export namespace DirectoryVpcSettingsDescription {
  export const filterSensitiveLog = (
    obj: DirectoryVpcSettingsDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DirectoryVpcSettingsDescription =>
    __isa(o, "DirectoryVpcSettingsDescription");
}

export interface DisableLDAPSRequest {
  __type?: "DisableLDAPSRequest";
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The type of LDAP security that the customer wants to enable. The security can be either
   *       server or client, but currently only the default <code>Client</code> is supported.</p>
   */
  Type: LDAPSType | string | undefined;
}

export namespace DisableLDAPSRequest {
  export const filterSensitiveLog = (obj: DisableLDAPSRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableLDAPSRequest =>
    __isa(o, "DisableLDAPSRequest");
}

export interface DisableLDAPSResult {
  __type?: "DisableLDAPSResult";
}

export namespace DisableLDAPSResult {
  export const filterSensitiveLog = (obj: DisableLDAPSResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableLDAPSResult =>
    __isa(o, "DisableLDAPSResult");
}

/**
 * <p>Contains the inputs for the <a>DisableRadius</a> operation.</p>
 */
export interface DisableRadiusRequest {
  __type?: "DisableRadiusRequest";
  /**
   * <p>The identifier of the directory for which to disable MFA.</p>
   */
  DirectoryId: string | undefined;
}

export namespace DisableRadiusRequest {
  export const filterSensitiveLog = (obj: DisableRadiusRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableRadiusRequest =>
    __isa(o, "DisableRadiusRequest");
}

/**
 * <p>Contains the results of the <a>DisableRadius</a> operation.</p>
 */
export interface DisableRadiusResult {
  __type?: "DisableRadiusResult";
}

export namespace DisableRadiusResult {
  export const filterSensitiveLog = (obj: DisableRadiusResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableRadiusResult =>
    __isa(o, "DisableRadiusResult");
}

/**
 * <p>Contains the inputs for the <a>DisableSso</a> operation.</p>
 */
export interface DisableSsoRequest {
  __type?: "DisableSsoRequest";
  /**
   * <p>The identifier of the directory for which to disable single-sign on.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The password of an alternate account to use to disable single-sign on. This is only used
   *          for AD Connector directories. For more information, see the <i>UserName</i> parameter.</p>
   */
  Password?: string;

  /**
   * <p>The username of an alternate account to use to disable single-sign on. This is only used for AD Connector directories. This account must have privileges to remove a service principal name.</p>
   *          <p>If the AD Connector service account does not have privileges to remove a service principal
   *          name, you can specify an alternate account with the <i>UserName</i> and <i>Password</i>
   *          parameters. These credentials are only used to disable single sign-on and are not stored by
   *          the service. The AD Connector service account is not changed.</p>
   */
  UserName?: string;
}

export namespace DisableSsoRequest {
  export const filterSensitiveLog = (obj: DisableSsoRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is DisableSsoRequest =>
    __isa(o, "DisableSsoRequest");
}

/**
 * <p>Contains the results of the <a>DisableSso</a> operation.</p>
 */
export interface DisableSsoResult {
  __type?: "DisableSsoResult";
}

export namespace DisableSsoResult {
  export const filterSensitiveLog = (obj: DisableSsoResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableSsoResult =>
    __isa(o, "DisableSsoResult");
}

/**
 * <p>Contains information about the domain controllers for a specified directory.</p>
 */
export interface DomainController {
  __type?: "DomainController";
  /**
   * <p>The Availability Zone where the domain controller is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Identifier of the directory where the domain controller resides.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The IP address of the domain controller.</p>
   */
  DnsIpAddr?: string;

  /**
   * <p>Identifies a specific domain controller in the directory.</p>
   */
  DomainControllerId?: string;

  /**
   * <p>Specifies when the domain controller was created.</p>
   */
  LaunchTime?: Date;

  /**
   * <p>The status of the domain controller.</p>
   */
  Status?: DomainControllerStatus | string;

  /**
   * <p>The date and time that the status was last updated.</p>
   */
  StatusLastUpdatedDateTime?: Date;

  /**
   * <p>A description of the domain controller state.</p>
   */
  StatusReason?: string;

  /**
   * <p>Identifier of the subnet in the VPC that contains the domain controller.</p>
   */
  SubnetId?: string;

  /**
   * <p>The identifier of the VPC that contains the domain controller.</p>
   */
  VpcId?: string;
}

export namespace DomainController {
  export const filterSensitiveLog = (obj: DomainController): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainController =>
    __isa(o, "DomainController");
}

/**
 * <p>The maximum allowed number of domain controllers per directory was exceeded. The default limit per directory is 20 domain controllers.</p>
 */
export interface DomainControllerLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "DomainControllerLimitExceededException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace DomainControllerLimitExceededException {
  export const filterSensitiveLog = (
    obj: DomainControllerLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainControllerLimitExceededException =>
    __isa(o, "DomainControllerLimitExceededException");
}

export enum DomainControllerStatus {
  ACTIVE = "Active",
  CREATING = "Creating",
  DELETED = "Deleted",
  DELETING = "Deleting",
  FAILED = "Failed",
  IMPAIRED = "Impaired",
  RESTORING = "Restoring"
}

export interface EnableLDAPSRequest {
  __type?: "EnableLDAPSRequest";
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The type of LDAP security the customer wants to enable. The security can be either server
   *       or client, but currently only the default <code>Client</code> is supported.</p>
   */
  Type: LDAPSType | string | undefined;
}

export namespace EnableLDAPSRequest {
  export const filterSensitiveLog = (obj: EnableLDAPSRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableLDAPSRequest =>
    __isa(o, "EnableLDAPSRequest");
}

export interface EnableLDAPSResult {
  __type?: "EnableLDAPSResult";
}

export namespace EnableLDAPSResult {
  export const filterSensitiveLog = (obj: EnableLDAPSResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableLDAPSResult =>
    __isa(o, "EnableLDAPSResult");
}

/**
 * <p>Contains the inputs for the <a>EnableRadius</a> operation.</p>
 */
export interface EnableRadiusRequest {
  __type?: "EnableRadiusRequest";
  /**
   * <p>The identifier of the directory for which to enable MFA.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS server.</p>
   */
  RadiusSettings: RadiusSettings | undefined;
}

export namespace EnableRadiusRequest {
  export const filterSensitiveLog = (obj: EnableRadiusRequest): any => ({
    ...obj,
    ...(obj.RadiusSettings && {
      RadiusSettings: RadiusSettings.filterSensitiveLog(obj.RadiusSettings)
    })
  });
  export const isa = (o: any): o is EnableRadiusRequest =>
    __isa(o, "EnableRadiusRequest");
}

/**
 * <p>Contains the results of the <a>EnableRadius</a> operation.</p>
 */
export interface EnableRadiusResult {
  __type?: "EnableRadiusResult";
}

export namespace EnableRadiusResult {
  export const filterSensitiveLog = (obj: EnableRadiusResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableRadiusResult =>
    __isa(o, "EnableRadiusResult");
}

/**
 * <p>Contains the inputs for the <a>EnableSso</a> operation.</p>
 */
export interface EnableSsoRequest {
  __type?: "EnableSsoRequest";
  /**
   * <p>The identifier of the directory for which to enable single-sign on.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The password of an alternate account to use to enable single-sign on. This is only used for
   *          AD Connector directories. For more information, see the <i>UserName</i> parameter.</p>
   */
  Password?: string;

  /**
   * <p>The username of an alternate account to use to enable single-sign on. This is only used for AD Connector directories. This account must have privileges to add a service principal name.</p>
   *          <p>If the AD Connector service account does not have privileges to add a service principal
   *          name, you can specify an alternate account with the <i>UserName</i> and <i>Password</i>
   *          parameters. These credentials are only used to enable single sign-on and are not stored by
   *          the service. The AD Connector service account is not changed.</p>
   */
  UserName?: string;
}

export namespace EnableSsoRequest {
  export const filterSensitiveLog = (obj: EnableSsoRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is EnableSsoRequest =>
    __isa(o, "EnableSsoRequest");
}

/**
 * <p>Contains the results of the <a>EnableSso</a> operation.</p>
 */
export interface EnableSsoResult {
  __type?: "EnableSsoResult";
}

export namespace EnableSsoResult {
  export const filterSensitiveLog = (obj: EnableSsoResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableSsoResult =>
    __isa(o, "EnableSsoResult");
}

/**
 * <p>The specified entity already exists.</p>
 */
export interface EntityAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "EntityAlreadyExistsException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace EntityAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: EntityAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EntityAlreadyExistsException =>
    __isa(o, "EntityAlreadyExistsException");
}

/**
 * <p>The specified entity could not be found.</p>
 */
export interface EntityDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "EntityDoesNotExistException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace EntityDoesNotExistException {
  export const filterSensitiveLog = (
    obj: EntityDoesNotExistException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EntityDoesNotExistException =>
    __isa(o, "EntityDoesNotExistException");
}

/**
 * <p>Information about SNS topic and AWS Directory Service directory associations.</p>
 */
export interface EventTopic {
  __type?: "EventTopic";
  /**
   * <p>The date and time of when you associated your directory with the SNS topic.</p>
   */
  CreatedDateTime?: Date;

  /**
   * <p>The Directory ID of an AWS Directory Service directory that will publish status messages to an SNS topic.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The topic registration status.</p>
   */
  Status?: TopicStatus | string;

  /**
   * <p>The SNS topic ARN (Amazon Resource Name).</p>
   */
  TopicArn?: string;

  /**
   * <p>The name of an AWS SNS topic the receives status messages from the directory.</p>
   */
  TopicName?: string;
}

export namespace EventTopic {
  export const filterSensitiveLog = (obj: EventTopic): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventTopic => __isa(o, "EventTopic");
}

/**
 * <p>Contains the inputs for the <a>GetDirectoryLimits</a> operation.</p>
 */
export interface GetDirectoryLimitsRequest {
  __type?: "GetDirectoryLimitsRequest";
}

export namespace GetDirectoryLimitsRequest {
  export const filterSensitiveLog = (obj: GetDirectoryLimitsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDirectoryLimitsRequest =>
    __isa(o, "GetDirectoryLimitsRequest");
}

/**
 * <p>Contains the results of the <a>GetDirectoryLimits</a> operation.</p>
 */
export interface GetDirectoryLimitsResult {
  __type?: "GetDirectoryLimitsResult";
  /**
   * <p>A <a>DirectoryLimits</a> object that contains the directory limits for the
   *       current rRegion.</p>
   */
  DirectoryLimits?: DirectoryLimits;
}

export namespace GetDirectoryLimitsResult {
  export const filterSensitiveLog = (obj: GetDirectoryLimitsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDirectoryLimitsResult =>
    __isa(o, "GetDirectoryLimitsResult");
}

/**
 * <p>Contains the inputs for the <a>GetSnapshotLimits</a> operation.</p>
 */
export interface GetSnapshotLimitsRequest {
  __type?: "GetSnapshotLimitsRequest";
  /**
   * <p>Contains the identifier of the directory to obtain the limits for.</p>
   */
  DirectoryId: string | undefined;
}

export namespace GetSnapshotLimitsRequest {
  export const filterSensitiveLog = (obj: GetSnapshotLimitsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSnapshotLimitsRequest =>
    __isa(o, "GetSnapshotLimitsRequest");
}

/**
 * <p>Contains the results of the <a>GetSnapshotLimits</a> operation.</p>
 */
export interface GetSnapshotLimitsResult {
  __type?: "GetSnapshotLimitsResult";
  /**
   * <p>A <a>SnapshotLimits</a> object that contains the manual snapshot limits for the specified
   *          directory.</p>
   */
  SnapshotLimits?: SnapshotLimits;
}

export namespace GetSnapshotLimitsResult {
  export const filterSensitiveLog = (obj: GetSnapshotLimitsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSnapshotLimitsResult =>
    __isa(o, "GetSnapshotLimitsResult");
}

/**
 * <p>The account does not have sufficient permission to perform the operation.</p>
 */
export interface InsufficientPermissionsException
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientPermissionsException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace InsufficientPermissionsException {
  export const filterSensitiveLog = (
    obj: InsufficientPermissionsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsufficientPermissionsException =>
    __isa(o, "InsufficientPermissionsException");
}

/**
 * <p>The certificate PEM that was provided has incorrect encoding.</p>
 */
export interface InvalidCertificateException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidCertificateException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace InvalidCertificateException {
  export const filterSensitiveLog = (
    obj: InvalidCertificateException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidCertificateException =>
    __isa(o, "InvalidCertificateException");
}

/**
 * <p>The LDAP activities could not be performed because they are limited by the LDAPS
 *       status.</p>
 */
export interface InvalidLDAPSStatusException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidLDAPSStatusException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace InvalidLDAPSStatusException {
  export const filterSensitiveLog = (
    obj: InvalidLDAPSStatusException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidLDAPSStatusException =>
    __isa(o, "InvalidLDAPSStatusException");
}

/**
 * <p>The <code>NextToken</code> value is not valid.</p>
 */
export interface InvalidNextTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidNextTokenException =>
    __isa(o, "InvalidNextTokenException");
}

/**
 * <p>One or more parameters are not valid.</p>
 */
export interface InvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidParameterException =>
    __isa(o, "InvalidParameterException");
}

/**
 * <p>The new password provided by the user does not meet the password complexity requirements defined in your directory.</p>
 */
export interface InvalidPasswordException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPasswordException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace InvalidPasswordException {
  export const filterSensitiveLog = (obj: InvalidPasswordException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidPasswordException =>
    __isa(o, "InvalidPasswordException");
}

/**
 * <p>The specified shared target is not valid.</p>
 */
export interface InvalidTargetException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTargetException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace InvalidTargetException {
  export const filterSensitiveLog = (obj: InvalidTargetException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTargetException =>
    __isa(o, "InvalidTargetException");
}

/**
 * <p>IP address block. This is often the address block of the DNS server used for your on-premises domain. </p>
 */
export interface IpRoute {
  __type?: "IpRoute";
  /**
   * <p>IP address block using CIDR format, for example 10.0.0.0/24. This is often the address block of the DNS server used for your on-premises domain. For a single IP address use a CIDR address block with /32. For example 10.0.0.0/32.</p>
   */
  CidrIp?: string;

  /**
   * <p>Description of the address block.</p>
   */
  Description?: string;
}

export namespace IpRoute {
  export const filterSensitiveLog = (obj: IpRoute): any => ({
    ...obj
  });
  export const isa = (o: any): o is IpRoute => __isa(o, "IpRoute");
}

/**
 * <p>Information about one or more IP address blocks.</p>
 */
export interface IpRouteInfo {
  __type?: "IpRouteInfo";
  /**
   * <p>The date and time the address block was added to the directory.</p>
   */
  AddedDateTime?: Date;

  /**
   * <p>IP address block in the <a>IpRoute</a>.</p>
   */
  CidrIp?: string;

  /**
   * <p>Description of the <a>IpRouteInfo</a>.</p>
   */
  Description?: string;

  /**
   * <p>Identifier (ID) of the directory associated with the IP addresses.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The status of the IP address block.</p>
   */
  IpRouteStatusMsg?: IpRouteStatusMsg | string;

  /**
   * <p>The reason for the IpRouteStatusMsg.</p>
   */
  IpRouteStatusReason?: string;
}

export namespace IpRouteInfo {
  export const filterSensitiveLog = (obj: IpRouteInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is IpRouteInfo => __isa(o, "IpRouteInfo");
}

/**
 * <p>The maximum allowed number of IP addresses was exceeded. The default limit is 100 IP address blocks.</p>
 */
export interface IpRouteLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "IpRouteLimitExceededException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace IpRouteLimitExceededException {
  export const filterSensitiveLog = (
    obj: IpRouteLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is IpRouteLimitExceededException =>
    __isa(o, "IpRouteLimitExceededException");
}

export enum IpRouteStatusMsg {
  ADDED = "Added",
  ADDING = "Adding",
  ADD_FAILED = "AddFailed",
  REMOVED = "Removed",
  REMOVE_FAILED = "RemoveFailed",
  REMOVING = "Removing"
}

/**
 * <p>Contains general information about the LDAPS settings.</p>
 */
export interface LDAPSSettingInfo {
  __type?: "LDAPSSettingInfo";
  /**
   * <p>The state of the LDAPS settings.</p>
   */
  LDAPSStatus?: LDAPSStatus | string;

  /**
   * <p>Describes a state change for LDAPS.</p>
   */
  LDAPSStatusReason?: string;

  /**
   * <p>The date and time when the LDAPS settings were last updated.</p>
   */
  LastUpdatedDateTime?: Date;
}

export namespace LDAPSSettingInfo {
  export const filterSensitiveLog = (obj: LDAPSSettingInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is LDAPSSettingInfo =>
    __isa(o, "LDAPSSettingInfo");
}

export enum LDAPSStatus {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
  ENABLE_FAILED = "EnableFailed",
  ENABLING = "Enabling"
}

export enum LDAPSType {
  CLIENT = "Client"
}

export interface ListCertificatesRequest {
  __type?: "ListCertificatesRequest";
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The number of items that should show up on one page</p>
   */
  Limit?: number;

  /**
   * <p>A token for requesting another page of certificates if the <code>NextToken</code> response
   *       element indicates that more certificates are available. Use the value of the returned
   *         <code>NextToken</code> element in your request until the token comes back as
   *         <code>null</code>. Pass <code>null</code> if this is the first call.</p>
   */
  NextToken?: string;
}

export namespace ListCertificatesRequest {
  export const filterSensitiveLog = (obj: ListCertificatesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCertificatesRequest =>
    __isa(o, "ListCertificatesRequest");
}

export interface ListCertificatesResult {
  __type?: "ListCertificatesResult";
  /**
   * <p>A list of certificates with basic details including certificate ID, certificate common
   *       name, certificate state.</p>
   */
  CertificatesInfo?: CertificateInfo[];

  /**
   * <p>Indicates whether another page of certificates is available when the number of available
   *       certificates exceeds the page limit.</p>
   */
  NextToken?: string;
}

export namespace ListCertificatesResult {
  export const filterSensitiveLog = (obj: ListCertificatesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCertificatesResult =>
    __isa(o, "ListCertificatesResult");
}

export interface ListIpRoutesRequest {
  __type?: "ListIpRoutesRequest";
  /**
   * <p>Identifier (ID) of the directory for which you want to retrieve the IP addresses.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>Maximum number of items to return. If this value is zero, the maximum number of items is specified by the limitations of the operation.</p>
   */
  Limit?: number;

  /**
   * <p>The <i>ListIpRoutes.NextToken</i> value from a previous call to
   *          <a>ListIpRoutes</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;
}

export namespace ListIpRoutesRequest {
  export const filterSensitiveLog = (obj: ListIpRoutesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListIpRoutesRequest =>
    __isa(o, "ListIpRoutesRequest");
}

export interface ListIpRoutesResult {
  __type?: "ListIpRoutesResult";
  /**
   * <p>A list of <a>IpRoute</a>s.</p>
   */
  IpRoutesInfo?: IpRouteInfo[];

  /**
   * <p>If not null, more results are available. Pass this value for the <i>NextToken</i> parameter
   *          in a subsequent call to <a>ListIpRoutes</a> to retrieve the next set of items.</p>
   */
  NextToken?: string;
}

export namespace ListIpRoutesResult {
  export const filterSensitiveLog = (obj: ListIpRoutesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListIpRoutesResult =>
    __isa(o, "ListIpRoutesResult");
}

export interface ListLogSubscriptionsRequest {
  __type?: "ListLogSubscriptionsRequest";
  /**
   * <p>If a <i>DirectoryID</i> is provided, lists only the log subscription associated with that directory. If no <i>DirectoryId</i> is provided, lists all log subscriptions associated with your AWS account. If there are no log subscriptions for the AWS account or the directory, an empty list will be returned.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The maximum number of items returned.</p>
   */
  Limit?: number;

  /**
   * <p>The token for the next set of items to return.</p>
   */
  NextToken?: string;
}

export namespace ListLogSubscriptionsRequest {
  export const filterSensitiveLog = (
    obj: ListLogSubscriptionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListLogSubscriptionsRequest =>
    __isa(o, "ListLogSubscriptionsRequest");
}

export interface ListLogSubscriptionsResult {
  __type?: "ListLogSubscriptionsResult";
  /**
   * <p>A list of active <a>LogSubscription</a> objects for calling the AWS account.</p>
   */
  LogSubscriptions?: LogSubscription[];

  /**
   * <p>The token for the next set of items to return.</p>
   */
  NextToken?: string;
}

export namespace ListLogSubscriptionsResult {
  export const filterSensitiveLog = (obj: ListLogSubscriptionsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListLogSubscriptionsResult =>
    __isa(o, "ListLogSubscriptionsResult");
}

export interface ListSchemaExtensionsRequest {
  __type?: "ListSchemaExtensionsRequest";
  /**
   * <p>The identifier of the directory from which to retrieve the schema extension information.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>ListSchemaExtensions.NextToken</code> value from a previous call to <code>ListSchemaExtensions</code>. Pass null if this is the first call.</p>
   */
  NextToken?: string;
}

export namespace ListSchemaExtensionsRequest {
  export const filterSensitiveLog = (
    obj: ListSchemaExtensionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSchemaExtensionsRequest =>
    __isa(o, "ListSchemaExtensionsRequest");
}

export interface ListSchemaExtensionsResult {
  __type?: "ListSchemaExtensionsResult";
  /**
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code> parameter in a subsequent call to <code>ListSchemaExtensions</code> to retrieve the next set of items.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the schema extensions applied to the directory.</p>
   */
  SchemaExtensionsInfo?: SchemaExtensionInfo[];
}

export namespace ListSchemaExtensionsResult {
  export const filterSensitiveLog = (obj: ListSchemaExtensionsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSchemaExtensionsResult =>
    __isa(o, "ListSchemaExtensionsResult");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>Reserved for future use.</p>
   */
  Limit?: number;

  /**
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;

  /**
   * <p>Identifier (ID) of the directory for which you want to retrieve tags.</p>
   */
  ResourceId: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResult {
  __type?: "ListTagsForResourceResult";
  /**
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;

  /**
   * <p>List of tags returned by the ListTagsForResource operation.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResult {
  export const filterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResult =>
    __isa(o, "ListTagsForResourceResult");
}

/**
 * <p>Represents a log subscription, which tracks real-time data from a chosen log group to a specified destination.</p>
 */
export interface LogSubscription {
  __type?: "LogSubscription";
  /**
   * <p>Identifier (ID) of the directory that you want to associate with the log subscription.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The name of the log group.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The date and time that the log subscription was created.</p>
   */
  SubscriptionCreatedDateTime?: Date;
}

export namespace LogSubscription {
  export const filterSensitiveLog = (obj: LogSubscription): any => ({
    ...obj
  });
  export const isa = (o: any): o is LogSubscription =>
    __isa(o, "LogSubscription");
}

/**
 * <p>The LDAP activities could not be performed because at least one valid certificate must be
 *       registered with the system.</p>
 */
export interface NoAvailableCertificateException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoAvailableCertificateException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace NoAvailableCertificateException {
  export const filterSensitiveLog = (
    obj: NoAvailableCertificateException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoAvailableCertificateException =>
    __isa(o, "NoAvailableCertificateException");
}

/**
 * <p>Exception encountered while trying to access your AWS organization.</p>
 */
export interface OrganizationsException
  extends __SmithyException,
    $MetadataBearer {
  name: "OrganizationsException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace OrganizationsException {
  export const filterSensitiveLog = (obj: OrganizationsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is OrganizationsException =>
    __isa(o, "OrganizationsException");
}

/**
 * <p>Describes the directory owner account details that have been shared to the directory consumer account.</p>
 */
export interface OwnerDirectoryDescription {
  __type?: "OwnerDirectoryDescription";
  /**
   * <p>Identifier of the directory owner account.</p>
   */
  AccountId?: string;

  /**
   * <p>Identifier of the AWS Managed Microsoft AD directory in the directory owner account.</p>
   */
  DirectoryId?: string;

  /**
   * <p>IP address of the directory’s domain controllers.</p>
   */
  DnsIpAddrs?: string[];

  /**
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS server.</p>
   */
  RadiusSettings?: RadiusSettings;

  /**
   * <p>Information about the status of the RADIUS server.</p>
   */
  RadiusStatus?: RadiusStatus | string;

  /**
   * <p>Information about the VPC settings for the directory.</p>
   */
  VpcSettings?: DirectoryVpcSettingsDescription;
}

export namespace OwnerDirectoryDescription {
  export const filterSensitiveLog = (obj: OwnerDirectoryDescription): any => ({
    ...obj,
    ...(obj.RadiusSettings && {
      RadiusSettings: RadiusSettings.filterSensitiveLog(obj.RadiusSettings)
    })
  });
  export const isa = (o: any): o is OwnerDirectoryDescription =>
    __isa(o, "OwnerDirectoryDescription");
}

export enum RadiusAuthenticationProtocol {
  CHAP = "CHAP",
  MSCHAPV1 = "MS-CHAPv1",
  MSCHAPV2 = "MS-CHAPv2",
  PAP = "PAP"
}

/**
 * <p>Contains information about a Remote Authentication Dial In User Service (RADIUS) server.</p>
 */
export interface RadiusSettings {
  __type?: "RadiusSettings";
  /**
   * <p>The protocol specified for your RADIUS endpoints.</p>
   */
  AuthenticationProtocol?: RadiusAuthenticationProtocol | string;

  /**
   * <p>Not currently used.</p>
   */
  DisplayLabel?: string;

  /**
   * <p>The port that your RADIUS server is using for communications. Your on-premises network must allow inbound traffic over this port from the AWS Directory Service servers.</p>
   */
  RadiusPort?: number;

  /**
   * <p>The maximum number of times that communication with the RADIUS server is attempted.</p>
   */
  RadiusRetries?: number;

  /**
   * <p>An array of strings that contains the IP addresses of the RADIUS server endpoints, or the IP addresses of your RADIUS server load balancer.</p>
   */
  RadiusServers?: string[];

  /**
   * <p>The amount of time, in seconds, to wait for the RADIUS server to respond.</p>
   */
  RadiusTimeout?: number;

  /**
   * <p>Required for enabling RADIUS on the directory.</p>
   */
  SharedSecret?: string;

  /**
   * <p>Not currently used.</p>
   */
  UseSameUsername?: boolean;
}

export namespace RadiusSettings {
  export const filterSensitiveLog = (obj: RadiusSettings): any => ({
    ...obj,
    ...(obj.SharedSecret && { SharedSecret: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is RadiusSettings =>
    __isa(o, "RadiusSettings");
}

export enum RadiusStatus {
  COMPLETED = "Completed",
  CREATING = "Creating",
  FAILED = "Failed"
}

export interface RegisterCertificateRequest {
  __type?: "RegisterCertificateRequest";
  /**
   * <p>The certificate PEM string that needs to be registered.</p>
   */
  CertificateData: string | undefined;

  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;
}

export namespace RegisterCertificateRequest {
  export const filterSensitiveLog = (obj: RegisterCertificateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterCertificateRequest =>
    __isa(o, "RegisterCertificateRequest");
}

export interface RegisterCertificateResult {
  __type?: "RegisterCertificateResult";
  /**
   * <p>The identifier of the certificate.</p>
   */
  CertificateId?: string;
}

export namespace RegisterCertificateResult {
  export const filterSensitiveLog = (obj: RegisterCertificateResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterCertificateResult =>
    __isa(o, "RegisterCertificateResult");
}

/**
 * <p>Registers a new event topic.</p>
 */
export interface RegisterEventTopicRequest {
  __type?: "RegisterEventTopicRequest";
  /**
   * <p>The Directory ID that will publish status messages to the SNS topic.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The SNS topic name to which the directory will publish status messages. This SNS topic must be in the same region as the specified Directory ID.</p>
   */
  TopicName: string | undefined;
}

export namespace RegisterEventTopicRequest {
  export const filterSensitiveLog = (obj: RegisterEventTopicRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterEventTopicRequest =>
    __isa(o, "RegisterEventTopicRequest");
}

/**
 * <p>The result of a RegisterEventTopic request.</p>
 */
export interface RegisterEventTopicResult {
  __type?: "RegisterEventTopicResult";
}

export namespace RegisterEventTopicResult {
  export const filterSensitiveLog = (obj: RegisterEventTopicResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterEventTopicResult =>
    __isa(o, "RegisterEventTopicResult");
}

export interface RejectSharedDirectoryRequest {
  __type?: "RejectSharedDirectoryRequest";
  /**
   * <p>Identifier of the shared directory in the directory consumer account. This identifier is different for each directory owner account.</p>
   */
  SharedDirectoryId: string | undefined;
}

export namespace RejectSharedDirectoryRequest {
  export const filterSensitiveLog = (
    obj: RejectSharedDirectoryRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RejectSharedDirectoryRequest =>
    __isa(o, "RejectSharedDirectoryRequest");
}

export interface RejectSharedDirectoryResult {
  __type?: "RejectSharedDirectoryResult";
  /**
   * <p>Identifier of the shared directory in the directory consumer account.</p>
   */
  SharedDirectoryId?: string;
}

export namespace RejectSharedDirectoryResult {
  export const filterSensitiveLog = (
    obj: RejectSharedDirectoryResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RejectSharedDirectoryResult =>
    __isa(o, "RejectSharedDirectoryResult");
}

export interface RemoveIpRoutesRequest {
  __type?: "RemoveIpRoutesRequest";
  /**
   * <p>IP address blocks that you want to remove.</p>
   */
  CidrIps: string[] | undefined;

  /**
   * <p>Identifier (ID) of the directory from which you want to remove the IP addresses.</p>
   */
  DirectoryId: string | undefined;
}

export namespace RemoveIpRoutesRequest {
  export const filterSensitiveLog = (obj: RemoveIpRoutesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveIpRoutesRequest =>
    __isa(o, "RemoveIpRoutesRequest");
}

export interface RemoveIpRoutesResult {
  __type?: "RemoveIpRoutesResult";
}

export namespace RemoveIpRoutesResult {
  export const filterSensitiveLog = (obj: RemoveIpRoutesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveIpRoutesResult =>
    __isa(o, "RemoveIpRoutesResult");
}

export interface RemoveTagsFromResourceRequest {
  __type?: "RemoveTagsFromResourceRequest";
  /**
   * <p>Identifier (ID) of the directory from which to remove the tag.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The tag key (name) of the tag to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace RemoveTagsFromResourceRequest {
  export const filterSensitiveLog = (
    obj: RemoveTagsFromResourceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTagsFromResourceRequest =>
    __isa(o, "RemoveTagsFromResourceRequest");
}

export interface RemoveTagsFromResourceResult {
  __type?: "RemoveTagsFromResourceResult";
}

export namespace RemoveTagsFromResourceResult {
  export const filterSensitiveLog = (
    obj: RemoveTagsFromResourceResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTagsFromResourceResult =>
    __isa(o, "RemoveTagsFromResourceResult");
}

export enum ReplicationScope {
  Domain = "Domain"
}

export interface ResetUserPasswordRequest {
  __type?: "ResetUserPasswordRequest";
  /**
   * <p>Identifier of the AWS Managed Microsoft AD or Simple AD directory in which the user resides.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The new password that will be reset.</p>
   */
  NewPassword: string | undefined;

  /**
   * <p>The user name of the user whose password will be reset.</p>
   */
  UserName: string | undefined;
}

export namespace ResetUserPasswordRequest {
  export const filterSensitiveLog = (obj: ResetUserPasswordRequest): any => ({
    ...obj,
    ...(obj.NewPassword && { NewPassword: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is ResetUserPasswordRequest =>
    __isa(o, "ResetUserPasswordRequest");
}

export interface ResetUserPasswordResult {
  __type?: "ResetUserPasswordResult";
}

export namespace ResetUserPasswordResult {
  export const filterSensitiveLog = (obj: ResetUserPasswordResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResetUserPasswordResult =>
    __isa(o, "ResetUserPasswordResult");
}

/**
 * <p>An object representing the inputs for the <a>RestoreFromSnapshot</a> operation.</p>
 */
export interface RestoreFromSnapshotRequest {
  __type?: "RestoreFromSnapshotRequest";
  /**
   * <p>The identifier of the snapshot to restore from.</p>
   */
  SnapshotId: string | undefined;
}

export namespace RestoreFromSnapshotRequest {
  export const filterSensitiveLog = (obj: RestoreFromSnapshotRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreFromSnapshotRequest =>
    __isa(o, "RestoreFromSnapshotRequest");
}

/**
 * <p>Contains the results of the <a>RestoreFromSnapshot</a> operation.</p>
 */
export interface RestoreFromSnapshotResult {
  __type?: "RestoreFromSnapshotResult";
}

export namespace RestoreFromSnapshotResult {
  export const filterSensitiveLog = (obj: RestoreFromSnapshotResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreFromSnapshotResult =>
    __isa(o, "RestoreFromSnapshotResult");
}

/**
 * <p>Information about a schema extension.</p>
 */
export interface SchemaExtensionInfo {
  __type?: "SchemaExtensionInfo";
  /**
   * <p>A description of the schema extension.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the directory to which the schema extension is applied.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The date and time that the schema extension was completed.</p>
   */
  EndDateTime?: Date;

  /**
   * <p>The identifier of the schema extension.</p>
   */
  SchemaExtensionId?: string;

  /**
   * <p>The current status of the schema extension.</p>
   */
  SchemaExtensionStatus?: SchemaExtensionStatus | string;

  /**
   * <p>The reason for the <code>SchemaExtensionStatus</code>.</p>
   */
  SchemaExtensionStatusReason?: string;

  /**
   * <p>The date and time that the schema extension started being applied to the directory.</p>
   */
  StartDateTime?: Date;
}

export namespace SchemaExtensionInfo {
  export const filterSensitiveLog = (obj: SchemaExtensionInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is SchemaExtensionInfo =>
    __isa(o, "SchemaExtensionInfo");
}

export enum SchemaExtensionStatus {
  CANCELLED = "Cancelled",
  CANCEL_IN_PROGRESS = "CancelInProgress",
  COMPLETED = "Completed",
  CREATING_SNAPSHOT = "CreatingSnapshot",
  FAILED = "Failed",
  INITIALIZING = "Initializing",
  REPLICATING = "Replicating",
  ROLLBACK_IN_PROGRESS = "RollbackInProgress",
  UPDATING_SCHEMA = "UpdatingSchema"
}

export enum SelectiveAuth {
  DISABLED = "Disabled",
  ENABLED = "Enabled"
}

/**
 * <p>An exception has occurred in AWS Directory Service.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
  name: "ServiceException";
  $fault: "server";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace ServiceException {
  export const filterSensitiveLog = (obj: ServiceException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceException =>
    __isa(o, "ServiceException");
}

/**
 * <p>Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted.</p>
 */
export interface SharedDirectory {
  __type?: "SharedDirectory";
  /**
   * <p>The date and time that the shared directory was created.</p>
   */
  CreatedDateTime?: Date;

  /**
   * <p>The date and time that the shared directory was last updated.</p>
   */
  LastUpdatedDateTime?: Date;

  /**
   * <p>Identifier of the directory owner account, which contains the directory that has been
   *       shared to the consumer account.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>Identifier of the directory in the directory owner account. </p>
   */
  OwnerDirectoryId?: string;

  /**
   * <p>The method used when sharing a directory to determine whether the directory should be
   *       shared within your AWS organization (<code>ORGANIZATIONS</code>) or with any AWS account by
   *       sending a shared directory request (<code>HANDSHAKE</code>).</p>
   */
  ShareMethod?: ShareMethod | string;

  /**
   * <p>A directory share request that is sent by the directory owner to the directory consumer.
   *       The request includes a typed message to help the directory consumer administrator determine
   *       whether to approve or reject the share invitation.</p>
   */
  ShareNotes?: string;

  /**
   * <p>Current directory status of the shared AWS Managed Microsoft AD directory.</p>
   */
  ShareStatus?: ShareStatus | string;

  /**
   * <p>Identifier of the directory consumer account that has access to the shared directory (<code>OwnerDirectoryId</code>) in the directory owner account.</p>
   */
  SharedAccountId?: string;

  /**
   * <p>Identifier of the shared directory in the directory consumer account. This identifier is different for each directory owner account.</p>
   */
  SharedDirectoryId?: string;
}

export namespace SharedDirectory {
  export const filterSensitiveLog = (obj: SharedDirectory): any => ({
    ...obj,
    ...(obj.ShareNotes && { ShareNotes: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is SharedDirectory =>
    __isa(o, "SharedDirectory");
}

export interface ShareDirectoryRequest {
  __type?: "ShareDirectoryRequest";
  /**
   * <p>Identifier of the AWS Managed Microsoft AD directory that you want to share with other AWS accounts.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The method used when sharing a directory to determine whether the directory should be
   *       shared within your AWS organization (<code>ORGANIZATIONS</code>) or with any AWS account by
   *       sending a directory sharing request (<code>HANDSHAKE</code>).</p>
   */
  ShareMethod: ShareMethod | string | undefined;

  /**
   * <p>A directory share request that is sent by the directory owner to the directory consumer.
   *       The request includes a typed message to help the directory consumer administrator determine
   *       whether to approve or reject the share invitation.</p>
   */
  ShareNotes?: string;

  /**
   * <p>Identifier for the directory consumer account with whom the directory is to be shared.</p>
   */
  ShareTarget: ShareTarget | undefined;
}

export namespace ShareDirectoryRequest {
  export const filterSensitiveLog = (obj: ShareDirectoryRequest): any => ({
    ...obj,
    ...(obj.ShareNotes && { ShareNotes: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is ShareDirectoryRequest =>
    __isa(o, "ShareDirectoryRequest");
}

export interface ShareDirectoryResult {
  __type?: "ShareDirectoryResult";
  /**
   * <p>Identifier of the directory that is stored in the directory consumer account that is
   *       shared from the specified directory (<code>DirectoryId</code>).</p>
   */
  SharedDirectoryId?: string;
}

export namespace ShareDirectoryResult {
  export const filterSensitiveLog = (obj: ShareDirectoryResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ShareDirectoryResult =>
    __isa(o, "ShareDirectoryResult");
}

/**
 * <p>The maximum number of AWS accounts that you can share with this directory has been reached.</p>
 */
export interface ShareLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ShareLimitExceededException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace ShareLimitExceededException {
  export const filterSensitiveLog = (
    obj: ShareLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ShareLimitExceededException =>
    __isa(o, "ShareLimitExceededException");
}

export enum ShareMethod {
  HANDSHAKE = "HANDSHAKE",
  ORGANIZATIONS = "ORGANIZATIONS"
}

export enum ShareStatus {
  DELETED = "Deleted",
  DELETING = "Deleting",
  PENDING_ACCEPTANCE = "PendingAcceptance",
  REJECTED = "Rejected",
  REJECTING = "Rejecting",
  REJECT_FAILED = "RejectFailed",
  SHARED = "Shared",
  SHARE_FAILED = "ShareFailed",
  SHARING = "Sharing"
}

/**
 * <p>Identifier that contains details about the directory consumer account.</p>
 */
export interface ShareTarget {
  __type?: "ShareTarget";
  /**
   * <p>Identifier of the directory consumer account.</p>
   */
  Id: string | undefined;

  /**
   * <p>Type of identifier to be used in the <code>Id</code> field.</p>
   */
  Type: TargetType | string | undefined;
}

export namespace ShareTarget {
  export const filterSensitiveLog = (obj: ShareTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is ShareTarget => __isa(o, "ShareTarget");
}

/**
 * <p>Describes a directory snapshot.</p>
 */
export interface Snapshot {
  __type?: "Snapshot";
  /**
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The descriptive name of the snapshot.</p>
   */
  Name?: string;

  /**
   * <p>The snapshot identifier.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The date and time that the snapshot was taken.</p>
   */
  StartTime?: Date;

  /**
   * <p>The snapshot status.</p>
   */
  Status?: SnapshotStatus | string;

  /**
   * <p>The snapshot type.</p>
   */
  Type?: SnapshotType | string;
}

export namespace Snapshot {
  export const filterSensitiveLog = (obj: Snapshot): any => ({
    ...obj
  });
  export const isa = (o: any): o is Snapshot => __isa(o, "Snapshot");
}

/**
 * <p>The maximum number of manual snapshots for the directory has been reached. You can
 *       use the <a>GetSnapshotLimits</a> operation to determine the snapshot limits for a
 *       directory.</p>
 */
export interface SnapshotLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotLimitExceededException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace SnapshotLimitExceededException {
  export const filterSensitiveLog = (
    obj: SnapshotLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotLimitExceededException =>
    __isa(o, "SnapshotLimitExceededException");
}

/**
 * <p>Contains manual snapshot limit information for a directory.</p>
 */
export interface SnapshotLimits {
  __type?: "SnapshotLimits";
  /**
   * <p>The current number of manual snapshots of the directory.</p>
   */
  ManualSnapshotsCurrentCount?: number;

  /**
   * <p>The maximum number of manual snapshots allowed.</p>
   */
  ManualSnapshotsLimit?: number;

  /**
   * <p>Indicates if the manual snapshot limit has been reached.</p>
   */
  ManualSnapshotsLimitReached?: boolean;
}

export namespace SnapshotLimits {
  export const filterSensitiveLog = (obj: SnapshotLimits): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotLimits =>
    __isa(o, "SnapshotLimits");
}

export enum SnapshotStatus {
  COMPLETED = "Completed",
  CREATING = "Creating",
  FAILED = "Failed"
}

export enum SnapshotType {
  AUTO = "Auto",
  MANUAL = "Manual"
}

export interface StartSchemaExtensionRequest {
  __type?: "StartSchemaExtensionRequest";
  /**
   * <p>If true, creates a snapshot of the directory before applying the schema extension.</p>
   */
  CreateSnapshotBeforeSchemaExtension: boolean | undefined;

  /**
   * <p>A description of the schema extension.</p>
   */
  Description: string | undefined;

  /**
   * <p>The identifier of the directory for which the schema extension will be applied to.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The LDIF file represented as a string. To construct the LdifContent string, precede each line as it would be formatted in an ldif file with \n. See the example request below for more details. The file size can be no larger than 1MB.</p>
   */
  LdifContent: string | undefined;
}

export namespace StartSchemaExtensionRequest {
  export const filterSensitiveLog = (
    obj: StartSchemaExtensionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartSchemaExtensionRequest =>
    __isa(o, "StartSchemaExtensionRequest");
}

export interface StartSchemaExtensionResult {
  __type?: "StartSchemaExtensionResult";
  /**
   * <p>The identifier of the schema extension that will be applied.</p>
   */
  SchemaExtensionId?: string;
}

export namespace StartSchemaExtensionResult {
  export const filterSensitiveLog = (obj: StartSchemaExtensionResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartSchemaExtensionResult =>
    __isa(o, "StartSchemaExtensionResult");
}

/**
 * <p>Metadata assigned to a directory consisting of a key-value pair.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>Required name of the tag. The string value can be Unicode characters and cannot be prefixed with "aws:". The string can contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
   */
  Key: string | undefined;

  /**
   * <p>The optional value of the tag. The string value can be Unicode characters. The string can contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p>The maximum allowed number of tags was exceeded.</p>
 */
export interface TagLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "TagLimitExceededException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace TagLimitExceededException {
  export const filterSensitiveLog = (obj: TagLimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagLimitExceededException =>
    __isa(o, "TagLimitExceededException");
}

export enum TargetType {
  ACCOUNT = "ACCOUNT"
}

export enum TopicStatus {
  DELETED = "Deleted",
  FAILED = "Failed",
  REGISTERED = "Registered",
  TOPIC_NOT_FOUND = "Topic not found"
}

/**
 * <p>Describes a trust relationship between an AWS Managed Microsoft AD directory and an external domain.</p>
 */
export interface Trust {
  __type?: "Trust";
  /**
   * <p>The date and time that the trust relationship was created.</p>
   */
  CreatedDateTime?: Date;

  /**
   * <p>The Directory ID of the AWS directory involved in the trust relationship.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The date and time that the trust relationship was last updated.</p>
   */
  LastUpdatedDateTime?: Date;

  /**
   * <p>The Fully Qualified Domain Name (FQDN) of the external domain involved in the trust relationship.</p>
   */
  RemoteDomainName?: string;

  /**
   * <p>Current state of selective authentication for the trust.</p>
   */
  SelectiveAuth?: SelectiveAuth | string;

  /**
   * <p>The date and time that the TrustState was last updated.</p>
   */
  StateLastUpdatedDateTime?: Date;

  /**
   * <p>The trust relationship direction.</p>
   */
  TrustDirection?: TrustDirection | string;

  /**
   * <p>The unique ID of the trust relationship.</p>
   */
  TrustId?: string;

  /**
   * <p>The trust relationship state.</p>
   */
  TrustState?: TrustState | string;

  /**
   * <p>The reason for the TrustState.</p>
   */
  TrustStateReason?: string;

  /**
   * <p>The trust relationship type. <code>Forest</code> is the default.</p>
   */
  TrustType?: TrustType | string;
}

export namespace Trust {
  export const filterSensitiveLog = (obj: Trust): any => ({
    ...obj
  });
  export const isa = (o: any): o is Trust => __isa(o, "Trust");
}

export enum TrustDirection {
  ONE_WAY_INCOMING = "One-Way: Incoming",
  ONE_WAY_OUTGOING = "One-Way: Outgoing",
  TWO_WAY = "Two-Way"
}

export enum TrustState {
  CREATED = "Created",
  CREATING = "Creating",
  DELETED = "Deleted",
  DELETING = "Deleting",
  FAILED = "Failed",
  UPDATED = "Updated",
  UPDATE_FAILED = "UpdateFailed",
  UPDATING = "Updating",
  VERIFIED = "Verified",
  VERIFYING = "Verifying",
  VERIFY_FAILED = "VerifyFailed"
}

export enum TrustType {
  EXTERNAL = "External",
  FOREST = "Forest"
}

export interface UnshareDirectoryRequest {
  __type?: "UnshareDirectoryRequest";
  /**
   * <p>The identifier of the AWS Managed Microsoft AD directory that you want to stop sharing.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>Identifier for the directory consumer account with whom the directory has to be unshared.</p>
   */
  UnshareTarget: UnshareTarget | undefined;
}

export namespace UnshareDirectoryRequest {
  export const filterSensitiveLog = (obj: UnshareDirectoryRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnshareDirectoryRequest =>
    __isa(o, "UnshareDirectoryRequest");
}

export interface UnshareDirectoryResult {
  __type?: "UnshareDirectoryResult";
  /**
   * <p>Identifier of the directory stored in the directory consumer account that is to be unshared from the specified directory (<code>DirectoryId</code>).</p>
   */
  SharedDirectoryId?: string;
}

export namespace UnshareDirectoryResult {
  export const filterSensitiveLog = (obj: UnshareDirectoryResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnshareDirectoryResult =>
    __isa(o, "UnshareDirectoryResult");
}

/**
 * <p>Identifier that contains details about the directory consumer account with whom the directory is being unshared.</p>
 */
export interface UnshareTarget {
  __type?: "UnshareTarget";
  /**
   * <p>Identifier of the directory consumer account.</p>
   */
  Id: string | undefined;

  /**
   * <p>Type of identifier to be used in the <i>Id</i> field.</p>
   */
  Type: TargetType | string | undefined;
}

export namespace UnshareTarget {
  export const filterSensitiveLog = (obj: UnshareTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnshareTarget => __isa(o, "UnshareTarget");
}

/**
 * <p>The operation is not supported.</p>
 */
export interface UnsupportedOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedOperationException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace UnsupportedOperationException {
  export const filterSensitiveLog = (
    obj: UnsupportedOperationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedOperationException =>
    __isa(o, "UnsupportedOperationException");
}

/**
 * <p>Updates a conditional forwarder.</p>
 */
export interface UpdateConditionalForwarderRequest {
  __type?: "UpdateConditionalForwarderRequest";
  /**
   * <p>The directory ID of the AWS directory for which to update the conditional forwarder.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The updated IP addresses of the remote DNS server associated with the conditional forwarder.</p>
   */
  DnsIpAddrs: string[] | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of the remote domain with which you will set up a trust relationship.</p>
   */
  RemoteDomainName: string | undefined;
}

export namespace UpdateConditionalForwarderRequest {
  export const filterSensitiveLog = (
    obj: UpdateConditionalForwarderRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateConditionalForwarderRequest =>
    __isa(o, "UpdateConditionalForwarderRequest");
}

/**
 * <p>The result of an UpdateConditionalForwarder request.</p>
 */
export interface UpdateConditionalForwarderResult {
  __type?: "UpdateConditionalForwarderResult";
}

export namespace UpdateConditionalForwarderResult {
  export const filterSensitiveLog = (
    obj: UpdateConditionalForwarderResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateConditionalForwarderResult =>
    __isa(o, "UpdateConditionalForwarderResult");
}

export interface UpdateNumberOfDomainControllersRequest {
  __type?: "UpdateNumberOfDomainControllersRequest";
  /**
   * <p>The number of domain controllers desired in the directory.</p>
   */
  DesiredNumber: number | undefined;

  /**
   * <p>Identifier of the directory to which the domain controllers will be added or removed.</p>
   */
  DirectoryId: string | undefined;
}

export namespace UpdateNumberOfDomainControllersRequest {
  export const filterSensitiveLog = (
    obj: UpdateNumberOfDomainControllersRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateNumberOfDomainControllersRequest =>
    __isa(o, "UpdateNumberOfDomainControllersRequest");
}

export interface UpdateNumberOfDomainControllersResult {
  __type?: "UpdateNumberOfDomainControllersResult";
}

export namespace UpdateNumberOfDomainControllersResult {
  export const filterSensitiveLog = (
    obj: UpdateNumberOfDomainControllersResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateNumberOfDomainControllersResult =>
    __isa(o, "UpdateNumberOfDomainControllersResult");
}

/**
 * <p>Contains the inputs for the <a>UpdateRadius</a> operation.</p>
 */
export interface UpdateRadiusRequest {
  __type?: "UpdateRadiusRequest";
  /**
   * <p>The identifier of the directory for which to update the RADIUS server information.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS server.</p>
   */
  RadiusSettings: RadiusSettings | undefined;
}

export namespace UpdateRadiusRequest {
  export const filterSensitiveLog = (obj: UpdateRadiusRequest): any => ({
    ...obj,
    ...(obj.RadiusSettings && {
      RadiusSettings: RadiusSettings.filterSensitiveLog(obj.RadiusSettings)
    })
  });
  export const isa = (o: any): o is UpdateRadiusRequest =>
    __isa(o, "UpdateRadiusRequest");
}

/**
 * <p>Contains the results of the <a>UpdateRadius</a> operation.</p>
 */
export interface UpdateRadiusResult {
  __type?: "UpdateRadiusResult";
}

export namespace UpdateRadiusResult {
  export const filterSensitiveLog = (obj: UpdateRadiusResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRadiusResult =>
    __isa(o, "UpdateRadiusResult");
}

export interface UpdateTrustRequest {
  __type?: "UpdateTrustRequest";
  /**
   * <p>Updates selective authentication for the trust.</p>
   */
  SelectiveAuth?: SelectiveAuth | string;

  /**
   * <p>Identifier of the trust relationship.</p>
   */
  TrustId: string | undefined;
}

export namespace UpdateTrustRequest {
  export const filterSensitiveLog = (obj: UpdateTrustRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTrustRequest =>
    __isa(o, "UpdateTrustRequest");
}

export interface UpdateTrustResult {
  __type?: "UpdateTrustResult";
  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;

  /**
   * <p>Identifier of the trust relationship.</p>
   */
  TrustId?: string;
}

export namespace UpdateTrustResult {
  export const filterSensitiveLog = (obj: UpdateTrustResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTrustResult =>
    __isa(o, "UpdateTrustResult");
}

/**
 * <p>The user provided a username that does not exist in your directory.</p>
 */
export interface UserDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "UserDoesNotExistException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}

export namespace UserDoesNotExistException {
  export const filterSensitiveLog = (obj: UserDoesNotExistException): any => ({
    ...obj
  });
  export const isa = (o: any): o is UserDoesNotExistException =>
    __isa(o, "UserDoesNotExistException");
}

/**
 * <p>Initiates the verification of an existing trust relationship between an AWS Managed Microsoft AD directory and an external domain.</p>
 */
export interface VerifyTrustRequest {
  __type?: "VerifyTrustRequest";
  /**
   * <p>The unique Trust ID of the trust relationship to verify.</p>
   */
  TrustId: string | undefined;
}

export namespace VerifyTrustRequest {
  export const filterSensitiveLog = (obj: VerifyTrustRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is VerifyTrustRequest =>
    __isa(o, "VerifyTrustRequest");
}

/**
 * <p>Result of a VerifyTrust request.</p>
 */
export interface VerifyTrustResult {
  __type?: "VerifyTrustResult";
  /**
   * <p>The unique Trust ID of the trust relationship that was verified.</p>
   */
  TrustId?: string;
}

export namespace VerifyTrustResult {
  export const filterSensitiveLog = (obj: VerifyTrustResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is VerifyTrustResult =>
    __isa(o, "VerifyTrustResult");
}
