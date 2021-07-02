import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the <code>UpdatServer</code> is called for a file transfer
 *       protocol-enabled server that has VPC as the endpoint type and the server's
 *         <code>VpcEndpointID</code> is not in the available state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an object that contains entries and targets for
 *         <code>HomeDirectoryMappings</code>.</p>
 *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p>
 *          <p>
 *             <code>[ { "Entry:": "/", "Target": "/bucket_name/home/mydirectory" } ]</code>
 *          </p>
 *
 *          <note>
 *             <p>If the target of a logical directory entry does not exist in Amazon S3 or EFS, the entry is
 *         ignored. As a workaround, you can use the Amazon S3 API or EFS API to create 0 byte objects as place
 *         holders for your directory. If using the CLI, use the <code>s3api</code> or <code>efsapi</code> call instead of
 *         <code>s3</code> or <code>efs</code> so you can use the put-object operation. For example, you use the
 *         following: <code>aws s3api put-object --bucket bucketname --key path/to/folder/</code>. Make
 *         sure that the end of the key name ends in a <code>/</code> for it to be considered a folder.</p>
 *          </note>
 */
export interface HomeDirectoryMapEntry {
  /**
   * <p>Represents an entry for <code>HomeDirectoryMappings</code>.</p>
   */
  Entry: string | undefined;

  /**
   * <p>Represents the map target that is used in a <code>HomeDirectorymapEntry</code>.</p>
   */
  Target: string | undefined;
}

export namespace HomeDirectoryMapEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HomeDirectoryMapEntry): any => ({
    ...obj,
  });
}

export enum HomeDirectoryType {
  LOGICAL = "LOGICAL",
  PATH = "PATH",
}

/**
 * <p>The full POSIX identity, including user ID (<code>Uid</code>), group ID
 *       (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
 *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
 *       files and directories in your file system determine the level of access your users get when
 *       transferring files into and out of your Amazon EFS file systems.</p>
 */
export interface PosixProfile {
  /**
   * <p>The POSIX user ID used for all EFS operations by this user.</p>
   */
  Uid: number | undefined;

  /**
   * <p>The POSIX group ID used for all EFS operations by this user.</p>
   */
  Gid: number | undefined;

  /**
   * <p>The secondary POSIX group IDs used for all EFS operations by this user.</p>
   */
  SecondaryGids?: number[];
}

export namespace PosixProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PosixProfile): any => ({
    ...obj,
  });
}

export interface CreateAccessRequest {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>The type of landing directory (folder) you want your users' home directory to be when they log into the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients.
   *     If you set it <code>LOGICAL</code>, you will need to provide mappings in the <code>HomeDirectoryMappings</code> for how you want to make Amazon
   *     S3 or EFS paths visible to your users.</p>
   */
  HomeDirectoryType?: HomeDirectoryType | string;

  /**
   * <p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should
   *       be visible to your user and how you want to make them visible. You must specify the
   *         <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path
   *       is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you
   *       only specify a target, it is displayed as is. You also must ensure that your Amazon Web Services Identity
   *       and Access Management (IAM) role provides access to paths in <code>Target</code>. This value
   *       can only be set when <code>HomeDirectoryType</code> is set to
   *       <i>LOGICAL</i>.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example.</p>
   *          <p>
   *             <code>[ { "Entry": "your-personal-report.pdf", "Target": "/bucket3/customized-reports/${transfer:UserName}.pdf" } ]</code>
   *          </p>
   *          <p>In most cases, you can use this value instead of the scope-down policy to lock down your
   *       user to the designated home directory ("<code>chroot</code>"). To do this, you can set
   *         <code>Entry</code> to <code>/</code> and set <code>Target</code> to the
   *         <code>HomeDirectory</code> parameter value.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p>
   *          <p>
   *             <code>[ { "Entry:": "/", "Target": "/bucket_name/home/mydirectory" } ]</code>
   *          </p>
   *
   *          <note>
   *             <p>If the target of a logical directory entry does not exist in Amazon S3 or EFS, the entry is
   *         ignored. As a workaround, you can use the Amazon S3 API or EFS API to create 0 byte objects as place
   *         holders for your directory. If using the CLI, use the <code>s3api</code> or <code>efsapi</code> call instead of
   *         <code>s3</code> or <code>efs</code> so you can use the put-object operation. For example, you use the
   *         following: <code>aws s3api put-object --bucket bucketname --key path/to/folder/</code>. Make
   *         sure that the end of the key name ends in a <code>/</code> for it to be considered a folder.</p>
   *          </note>
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];

  /**
   * <p>A scope-down policy for your user so that you can use the same IAM role across multiple users. This policy scopes down user
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>,
   *      <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p>
   *
   *          <note>
   *             <p>This only applies when domain of <code>ServerId</code> is S3.
   *       Amazon EFS does not use scope-down policies.</p>
   *             <p>For scope-down policies, Amazon Web Services Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the <code>Policy</code> argument.</p>
   *             <p>For an example of a scope-down policy, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/scope-down-policy.html">Example
   *           scope-down policy</a>.</p>
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html">AssumeRole</a> in the <i>Amazon Web Services Security Token Service API
   *           Reference</i>.</p>
   *          </note>
   */
  Policy?: string;

  /**
   * <p>The full POSIX identity, including user ID (<code>Uid</code>), group ID
   *       (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
   *       files and directories in your file system determine the level of access your users get when
   *       transferring files into and out of your Amazon EFS file systems.</p>
   */
  PosixProfile?: PosixProfile;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the IAM role that controls your users' access to your Amazon S3 bucket or EFS
   *       file system. The policies attached to this role determine the level of access that you want to provide your users when transferring
   *       files into and out of your Amazon S3 bucket or EFS file system. The IAM role should also contain a trust relationship that allows the
   *       server to access your resources when servicing your users' transfer requests.</p>
   */
  Role: string | undefined;

  /**
   * <p>A system-assigned unique identifier for a server instance. This is the specific server that you added your user to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Amazon Web Services Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *
   *          <p>
   *             <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *
   *          <p>The regex used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   */
  ExternalId: string | undefined;
}

export namespace CreateAccessRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAccessRequest): any => ({
    ...obj,
  });
}

export interface CreateAccessResponse {
  /**
   * <p>The ID of the server that the user is attached to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The external ID of the group whose users have access to your Amazon S3 or Amazon EFS
   *       resources over the enabled protocols using Amazon Web Services Transfer Family.</p>
   */
  ExternalId: string | undefined;
}

export namespace CreateAccessResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAccessResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when an error occurs in the Amazon Web ServicesTransfer Family service.</p>
 */
export interface InternalServiceError extends __SmithyException, $MetadataBearer {
  name: "InternalServiceError";
  $fault: "server";
  Message: string | undefined;
}

export namespace InternalServiceError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServiceError): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the client submits a malformed request.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message: string | undefined;
}

export namespace InvalidRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested resource does not exist.</p>
 */
export interface ResourceExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceExistsException";
  $fault: "client";
  Message: string | undefined;
  Resource: string | undefined;
  ResourceType: string | undefined;
}

export namespace ResourceExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message: string | undefined;
  Resource: string | undefined;
  ResourceType: string | undefined;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

export enum Domain {
  EFS = "EFS",
  S3 = "S3",
}

/**
 * <p>The virtual private cloud (VPC) endpoint settings that are configured for your file
 *       transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server
 *       and resources only within your VPC. To control incoming internet traffic, invoke the
 *         <code>UpdateServer</code> API and attach an Elastic IP address to your server's
 *       endpoint.</p>
 *          <note>
 *             <p> After May 19, 2021, you won't be able to create a server using
 *           <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount if your account hasn't already
 *       done so before May 19, 2021. If you have already created servers with
 *       <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount on or before May 19, 2021,
 *         you will not be affected. After this date, use
 *         <code>EndpointType</code>=<code>VPC</code>.</p>
 *
 *             <p>For more information, see
 *         https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p>
 *          </note>
 */
export interface EndpointDetails {
  /**
   * <p>A list of address allocation IDs that are required to attach an Elastic IP address to your
   *       server's endpoint.</p>
   *
   *          <note>
   *
   *             <p>This property can only be set when <code>EndpointType</code> is set to <code>VPC</code>
   *         and it is only valid in the <code>UpdateServer</code> API.</p>
   *          </note>
   */
  AddressAllocationIds?: string[];

  /**
   * <p>A list of subnet IDs that are required to host your server endpoint in your VPC.</p>
   *
   *          <note>
   *             <p>This property can only be set when <code>EndpointType</code> is set to
   *         <code>VPC</code>.</p>
   *          </note>
   */
  SubnetIds?: string[];

  /**
   * <p>The ID of the VPC endpoint.</p>
   *
   *          <note>
   *             <p>This property can only be set when <code>EndpointType</code> is set to
   *           <code>VPC_ENDPOINT</code>.</p>
   *
   *             <p>For more information, see
   *         https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p>
   *          </note>
   */
  VpcEndpointId?: string;

  /**
   * <p>The VPC ID of the VPC in which a server's endpoint will be hosted.</p>
   *
   *          <note>
   *             <p>This property can only be set when <code>EndpointType</code> is set to
   *         <code>VPC</code>.</p>
   *          </note>
   */
  VpcId?: string;

  /**
   * <p>A list of security groups IDs that are available to attach to your server's
   *       endpoint.</p>
   *
   *          <note>
   *             <p>This property can only be set when <code>EndpointType</code> is set to
   *         <code>VPC</code>.</p>
   *
   *             <p>You can edit the <code>SecurityGroupIds</code> property in the <a href="https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateServer.html">UpdateServer</a> API only if you are changing the <code>EndpointType</code> from
   *           <code>PUBLIC</code> or <code>VPC_ENDPOINT</code> to <code>VPC</code>. To change security
   *         groups associated with your server's VPC endpoint after creation, use the Amazon EC2
   *           <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpoint.html">ModifyVpcEndpoint</a> API.</p>
   *          </note>
   */
  SecurityGroupIds?: string[];
}

export namespace EndpointDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointDetails): any => ({
    ...obj,
  });
}

export enum EndpointType {
  PUBLIC = "PUBLIC",
  VPC = "VPC",
  VPC_ENDPOINT = "VPC_ENDPOINT",
}

/**
 * <p>Returns information related to the type of user authentication that is in use for a file
 *       transfer protocol-enabled server's users. A server can have only one method of
 *       authentication.</p>
 */
export interface IdentityProviderDetails {
  /**
   * <p>Provides the location of the service endpoint used to authenticate users.</p>
   */
  Url?: string;

  /**
   * <p>Provides the type of <code>InvocationRole</code> used to authenticate the user
   *       account.</p>
   */
  InvocationRole?: string;

  /**
   * <p>The identifier of the Amazon Web ServicesDirectory Service directory that you want to stop sharing.</p>
   */
  DirectoryId?: string;
}

export namespace IdentityProviderDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdentityProviderDetails): any => ({
    ...obj,
  });
}

export enum IdentityProviderType {
  API_GATEWAY = "API_GATEWAY",
  AWS_DIRECTORY_SERVICE = "AWS_DIRECTORY_SERVICE",
  SERVICE_MANAGED = "SERVICE_MANAGED",
}

export enum Protocol {
  FTP = "FTP",
  FTPS = "FTPS",
  SFTP = "SFTP",
}

/**
 * <p>Creates a key-value pair for a specific resource. Tags are metadata that you can use to
 *       search for and group a resource for various purposes. You can apply tags to servers, users,
 *       and roles. A tag key can take more than one value. For example, to group servers for
 *       accounting purposes, you might create a tag called <code>Group</code> and assign the values
 *         <code>Research</code> and <code>Accounting</code> to that group.</p>
 */
export interface Tag {
  /**
   * <p>The name assigned to the tag that you create.</p>
   */
  Key: string | undefined;

  /**
   * <p>Contains one or more values that you assigned to the key name you create.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateServerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager (ACM) certificate. Required
   *       when <code>Protocols</code> is set to <code>FTPS</code>.</p>
   *
   *          <p>To request a new public certificate, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html">Request a public certificate</a>
   *       in the <i> Amazon Web Services Certificate Manager User Guide</i>.</p>
   *
   *          <p>To import an existing certificate into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing certificates into ACM</a>
   *       in the <i> Amazon Web Services Certificate Manager User Guide</i>.</p>
   *
   *          <p>To request a private certificate to use FTPS through private IP addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-private.html">Request a
   *         private certificate</a> in the <i> Amazon Web Services Certificate Manager User
   *       Guide</i>.</p>
   *
   *          <p>Certificates with the following cryptographic algorithms and key sizes are
   *       supported:</p>
   *
   *          <ul>
   *             <li>
   *                <p>2048-bit RSA (RSA_2048)</p>
   *             </li>
   *             <li>
   *                <p>4096-bit RSA (RSA_4096)</p>
   *             </li>
   *             <li>
   *                <p>Elliptic Prime Curve 256 bit (EC_prime256v1)</p>
   *             </li>
   *             <li>
   *                <p>Elliptic Prime Curve 384 bit (EC_secp384r1)</p>
   *             </li>
   *             <li>
   *                <p>Elliptic Prime Curve 521 bit (EC_secp521r1)</p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <p>The certificate must be a valid SSL/TLS X.509 version 3 certificate with FQDN or IP
   *         address specified and information about the issuer.</p>
   *          </note>
   */
  Certificate?: string;

  /**
   * <p>The domain of the storage system that is used for file transfers. There are two domains
   *       available: Amazon Simple Storage Service (Amazon S3) and Amazon Elastic File System (Amazon EFS). The
   *       default value is S3.</p>
   *
   *          <note>
   *             <p>After the server is created, the domain cannot be changed.</p>
   *          </note>
   */
  Domain?: Domain | string;

  /**
   * <p>The virtual private cloud (VPC) endpoint settings that are configured for your server.
   *       When you host your endpoint within your VPC, you can make it accessible only to resources
   *       within your VPC, or you can attach Elastic IP addresses and make it accessible to clients over
   *       the internet. Your VPC's default security groups are automatically assigned to your
   *       endpoint.</p>
   */
  EndpointDetails?: EndpointDetails;

  /**
   * <p>The type of endpoint that you want your server to use. You can choose to make your server's endpoint publicly accessible (PUBLIC)
   *       or host it inside your VPC. With an endpoint that is hosted in a VPC, you can restrict access to your server and
   *       resources only within your VPC or choose to make it internet facing by attaching Elastic IP addresses directly to it.</p>
   *          <note>
   *             <p> After May 19, 2021, you won't be able to create a server using
   *           <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Services account if your account hasn't already
   *       done so before May 19, 2021. If you have already created servers with
   *       <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Services account on or before May 19, 2021,
   *         you will not be affected. After this date, use
   *         <code>EndpointType</code>=<code>VPC</code>.</p>
   *
   *             <p>For more information, see
   *         https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p>
   *             <p>It is recommended that you use <code>VPC</code> as the <code>EndpointType</code>. With
   *         this endpoint type, you have the option to directly associate up to three Elastic IPv4
   *         addresses (BYO IP included) with your server's endpoint and use VPC security groups to
   *         restrict traffic by the client's public IP address. This is not possible with
   *           <code>EndpointType</code> set to <code>VPC_ENDPOINT</code>.</p>
   *          </note>
   */
  EndpointType?: EndpointType | string;

  /**
   * <p>The RSA private key as generated by the <code>ssh-keygen -N "" -m PEM -f
   *         my-new-server-key</code> command.</p>
   *
   *          <important>
   *             <p>If you aren't planning to migrate existing users from an existing SFTP-enabled
   *         server to a new server, don't update the host key. Accidentally changing a
   *         server's host key can be disruptive.</p>
   *          </important>
   *
   *
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/edit-server-config.html#configuring-servers-change-host-key">Change the host key for your SFTP-enabled server</a> in the <i>Amazon Web Services Transfer
   *         Family User Guide</i>.</p>
   */
  HostKey?: string;

  /**
   * <p>Required when <code>IdentityProviderType</code> is set to
   *         <code>AWS_DIRECTORY_SERVICE</code> or <code>API_GATEWAY</code>. Accepts an array containing
   *       all of the information required to use a directory in <code>AWS_DIRECTORY_SERVICE</code> or
   *       invoke a customer-supplied authentication API, including the API Gateway URL. Not required
   *       when <code>IdentityProviderType</code> is set to <code>SERVICE_MANAGED</code>.</p>
   */
  IdentityProviderDetails?: IdentityProviderDetails;

  /**
   * <p>Specifies the mode of authentication for a server. The default value is
   *         <code>SERVICE_MANAGED</code>, which allows you to store and access user credentials within
   *       the Amazon Web Services Transfer Family service.</p>
   *          <p>Use <code>AWS_DIRECTORY_SERVICE</code> to provide access to
   *       Active Directory groups in Amazon Web Services Managed Active Directory or Microsoft Active Directory in your
   *       on-premises environment or in Amazon Web Services using AD Connectors. This option also requires you to
   *       provide a Directory ID using the <code>IdentityProviderDetails</code> parameter.</p>
   *          <p>Use the <code>API_GATEWAY</code> value to integrate with an identity provider of your choosing. The
   *       <code>API_GATEWAY</code> setting requires you to provide an API Gateway endpoint URL to call
   *       for authentication using the <code>IdentityProviderDetails</code> parameter.</p>
   */
  IdentityProviderType?: IdentityProviderType | string;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that allows a server to turn
   *       on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, user activity can be viewed in
   *       your CloudWatch logs.</p>
   */
  LoggingRole?: string;

  /**
   * <p>Specifies the file transfer protocol or protocols over which your file transfer protocol
   *       client can connect to your server's endpoint. The available protocols are:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SFTP</code> (Secure Shell (SSH) File Transfer Protocol): File transfer over
   *           SSH</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FTPS</code> (File Transfer Protocol Secure): File transfer with TLS
   *           encryption</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FTP</code> (File Transfer Protocol): Unencrypted file transfer</p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <p>If you select <code>FTPS</code>, you must choose a certificate stored in Amazon Web Services Certificate
   *         Manager (ACM) which is used to identify your server when clients connect to it over
   *         FTPS.</p>
   *
   *             <p>If <code>Protocol</code> includes either <code>FTP</code> or <code>FTPS</code>, then the
   *           <code>EndpointType</code> must be <code>VPC</code> and the
   *           <code>IdentityProviderType</code> must be <code>AWS_DIRECTORY_SERVICE</code> or <code>API_GATEWAY</code>.</p>
   *
   *             <p>If <code>Protocol</code> includes <code>FTP</code>, then
   *           <code>AddressAllocationIds</code> cannot be associated.</p>
   *
   *             <p>If <code>Protocol</code> is set only to <code>SFTP</code>, the <code>EndpointType</code>
   *         can be set to <code>PUBLIC</code> and the <code>IdentityProviderType</code> can be set to
   *           <code>SERVICE_MANAGED</code>.</p>
   *          </note>
   */
  Protocols?: (Protocol | string)[];

  /**
   * <p>Specifies the name of the security policy that is attached to the server.</p>
   */
  SecurityPolicyName?: string;

  /**
   * <p>Key-value pairs that can be used to group and search for servers.</p>
   */
  Tags?: Tag[];
}

export namespace CreateServerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateServerRequest): any => ({
    ...obj,
    ...(obj.HostKey && { HostKey: SENSITIVE_STRING }),
  });
}

export interface CreateServerResponse {
  /**
   * <p>The service-assigned ID of the server that is created.</p>
   */
  ServerId: string | undefined;
}

export namespace CreateServerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateServerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 *
 *          <p> HTTP Status Code: 400</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  RetryAfterSeconds?: string;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

export interface CreateUserRequest {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>The type of landing directory (folder) you want your users' home directory to be when they log into the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients.
   *     If you set it <code>LOGICAL</code>, you will need to provide mappings in the <code>HomeDirectoryMappings</code> for how you want to make Amazon
   *     S3 or EFS paths visible to your users.</p>
   */
  HomeDirectoryType?: HomeDirectoryType | string;

  /**
   * <p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should
   *       be visible to your user and how you want to make them visible. You must specify the
   *         <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path
   *       is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you
   *       only specify a target, it is displayed as is. You also must ensure that your Amazon Web Services Identity
   *       and Access Management (IAM) role provides access to paths in <code>Target</code>. This value
   *       can only be set when <code>HomeDirectoryType</code> is set to
   *       <i>LOGICAL</i>.</p>
   *
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example.</p>
   *
   *          <p>
   *             <code>[ { "Entry": "your-personal-report.pdf", "Target":
   *         "/bucket3/customized-reports/${transfer:UserName}.pdf" } ]</code>
   *          </p>
   *
   *          <p>In most cases, you can use this value instead of the scope-down policy to lock your user
   *       down to the designated home directory ("<code>chroot</code>"). To do this, you can set
   *         <code>Entry</code> to <code>/</code> and set <code>Target</code> to the HomeDirectory
   *       parameter value.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p>
   *          <p>
   *             <code>[ { "Entry:": "/", "Target": "/bucket_name/home/mydirectory" } ]</code>
   *          </p>
   *
   *          <note>
   *             <p>If the target of a logical directory entry does not exist in Amazon S3 or EFS, the entry is
   *         ignored. As a workaround, you can use the Amazon S3 API or EFS API to create 0 byte objects as place
   *         holders for your directory. If using the CLI, use the <code>s3api</code> or <code>efsapi</code> call instead of
   *         <code>s3</code> or <code>efs</code> so you can use the put-object operation. For example, you use the
   *         following: <code>aws s3api put-object --bucket bucketname --key path/to/folder/</code>. Make
   *         sure that the end of the key name ends in a <code>/</code> for it to be considered a folder.</p>
   *          </note>
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];

  /**
   * <p>A scope-down policy for your user so that you can use the same IAM role across multiple users. This policy scopes down user
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>,
   *      <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p>
   *
   *          <note>
   *             <p>This only applies when domain of ServerId is S3. EFS does not use scope down policy.</p>
   *             <p>For scope-down policies, Amazon Web Services Transfer Family stores the policy as a JSON blob, instead
   *         of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass
   *         it in the <code>Policy</code> argument.</p>
   *
   *
   *
   *             <p>For an example of a scope-down policy, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/scope-down-policy.html">Example scope-down
   *         policy</a>.</p>
   *
   *
   *
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html">AssumeRole</a> in the <i>Amazon Web Services
   *           Security Token Service API Reference</i>.</p>
   *          </note>
   */
  Policy?: string;

  /**
   * <p>Specifies the full POSIX identity, including user ID (<code>Uid</code>), group ID
   *         (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
   *       files and directories in Amazon EFS determine the level of access your users get when
   *       transferring files into and out of your Amazon EFS file systems.</p>
   */
  PosixProfile?: PosixProfile;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the IAM role that controls your users' access to your Amazon S3 bucket or EFS
   *       file system. The policies attached to this role determine the level of access that you want to provide your users when transferring
   *       files into and out of your Amazon S3 bucket or EFS file system. The IAM role should also contain a trust relationship that allows the
   *       server to access your resources when servicing your users' transfer requests.</p>
   */
  Role: string | undefined;

  /**
   * <p>A system-assigned unique identifier for a server instance. This is the specific server
   *       that you added your user to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The public portion of the Secure Shell (SSH) key used to authenticate the user to the
   *       server.</p>
   */
  SshPublicKeyBody?: string;

  /**
   * <p>Key-value pairs that can be used to group and search for users. Tags are metadata attached
   *       to users for any purpose.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A unique string that identifies a user and is associated with a as specified by the
   *         <code>ServerId</code>. This user name must be a minimum of 3 and a maximum of 100 characters
   *       long. The following are valid characters: a-z, A-Z, 0-9, underscore '_', hyphen
   *       '-', period '.', and at sign '@'. The user name can't start
   *       with a hyphen, period, or at sign.</p>
   */
  UserName: string | undefined;
}

export namespace CreateUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj,
  });
}

export interface CreateUserResponse {
  /**
   * <p>The ID of the server that the user is attached to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique string that identifies a user account associated with a server.</p>
   */
  UserName: string | undefined;
}

export namespace CreateUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserResponse): any => ({
    ...obj,
  });
}

export interface DeleteAccessRequest {
  /**
   * <p>A system-assigned unique identifier for a server that has this user assigned.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Amazon Web Services Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *
   *          <p>
   *             <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *
   *          <p>The regex used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   */
  ExternalId: string | undefined;
}

export namespace DeleteAccessRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccessRequest): any => ({
    ...obj,
  });
}

export interface DeleteServerRequest {
  /**
   * <p>A unique system-assigned identifier for a server instance.</p>
   */
  ServerId: string | undefined;
}

export namespace DeleteServerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteServerRequest): any => ({
    ...obj,
  });
}

export interface DeleteSshPublicKeyRequest {
  /**
   * <p>A system-assigned unique identifier for a file transfer protocol-enabled server instance
   *       that has the user assigned to it.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier used to reference your user's specific SSH key.</p>
   */
  SshPublicKeyId: string | undefined;

  /**
   * <p>A unique string that identifies a user whose public key is being deleted.</p>
   */
  UserName: string | undefined;
}

export namespace DeleteSshPublicKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSshPublicKeyRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserRequest {
  /**
   * <p>A system-assigned unique identifier for a server instance that has the user assigned to
   *       it.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique string that identifies a user that is being deleted from a server.</p>
   */
  UserName: string | undefined;
}

export namespace DeleteUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccessRequest {
  /**
   * <p>A system-assigned unique identifier for a server that has this access assigned.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Amazon Web Services Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *
   *          <p>
   *             <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *
   *          <p>The regex used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   */
  ExternalId: string | undefined;
}

export namespace DescribeAccessRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccessRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the properties of the access that was specified.</p>
 */
export interface DescribedAccess {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should
   *       be visible to your user and how you want to make them visible. You must specify the
   *         <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path
   *       is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you
   *       only specify a target, it is displayed as is. You also must ensure that your Amazon Web Services Identity
   *       and Access Management (IAM) role provides access to paths in <code>Target</code>. This value
   *       can only be set when <code>HomeDirectoryType</code> is set to
   *       <i>LOGICAL</i>.</p>
   *
   *          <p>In most cases, you can use this value instead of the scope-down policy to lock down the
   *       associated access to the designated home directory ("<code>chroot</code>"). To do this, you
   *       can set <code>Entry</code> to '/' and set <code>Target</code> to the
   *         <code>HomeDirectory</code> parameter value.</p>
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];

  /**
   * <p>The type of landing directory (folder) you want your users' home directory to be when they log into the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients.
   *     If you set it <code>LOGICAL</code>, you will need to provide mappings in the <code>HomeDirectoryMappings</code> for how you want to make Amazon
   *     S3 or EFS paths visible to your users.</p>
   */
  HomeDirectoryType?: HomeDirectoryType | string;

  /**
   * <p>A scope-down policy for your user so that you can use the same IAM role across multiple users. This policy scopes down user
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>,
   *      <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p>
   */
  Policy?: string;

  /**
   * <p>The full POSIX identity, including user ID (<code>Uid</code>), group ID
   *       (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
   *       files and directories in your file system determine the level of access your users get when
   *       transferring files into and out of your Amazon EFS file systems.</p>
   */
  PosixProfile?: PosixProfile;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the IAM role that controls your users' access to your Amazon S3 bucket or EFS
   *       file system. The policies attached to this role determine the level of access that you want to provide your users when transferring
   *       files into and out of your Amazon S3 bucket or EFS file system. The IAM role should also contain a trust relationship that allows the
   *       server to access your resources when servicing your users' transfer requests.</p>
   */
  Role?: string;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Amazon Web Services Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *
   *          <p>
   *             <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *
   *          <p>The regex used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   */
  ExternalId?: string;
}

export namespace DescribedAccess {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribedAccess): any => ({
    ...obj,
  });
}

export interface DescribeAccessResponse {
  /**
   * <p>A system-assigned unique identifier for a server that has this access assigned.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The external ID of the server that the access is attached to.</p>
   */
  Access: DescribedAccess | undefined;
}

export namespace DescribeAccessResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccessResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the properties of a security policy that was specified. For more information
 *       about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security
 *         policies</a>.</p>
 */
export interface DescribedSecurityPolicy {
  /**
   * <p>Specifies whether this policy enables Federal Information Processing Standards
   *       (FIPS).</p>
   */
  Fips?: boolean;

  /**
   * <p>Specifies the name of the security policy that is attached to the server.</p>
   */
  SecurityPolicyName: string | undefined;

  /**
   * <p>Specifies the enabled Secure Shell (SSH) cipher encryption algorithms in the security
   *       policy that is attached to the server.</p>
   */
  SshCiphers?: string[];

  /**
   * <p>Specifies the enabled SSH key exchange (KEX) encryption algorithms in the security policy
   *       that is attached to the server.</p>
   */
  SshKexs?: string[];

  /**
   * <p>Specifies the enabled SSH message authentication code (MAC) encryption algorithms in the
   *       security policy that is attached to the server.</p>
   */
  SshMacs?: string[];

  /**
   * <p>Specifies the enabled Transport Layer Security (TLS) cipher encryption algorithms in the
   *       security policy that is attached to the server.</p>
   */
  TlsCiphers?: string[];
}

export namespace DescribedSecurityPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribedSecurityPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       The protocol settings that are configured for your server.
 *     </p>
 *          <note>
 *             <p>
 *         This type is only valid in the <code>UpdateServer</code> API.
 *       </p>
 *          </note>
 */
export interface ProtocolDetails {
  /**
   * <p>
   *       Indicates passive mode, for FTP and FTPS protocols.
   *       Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer.
   *       For example:
   *     </p>
   *          <p>
   *             <code>
   *         aws transfer update-server --protocol-details PassiveIp=<i>0.0.0.0</i>
   *             </code>
   *          </p>
   *          <p>Replace <code>
   *                <i>0.0.0.0</i>
   *             </code> in the example above with the actual IP address you want to use.</p>
   */
  PassiveIp?: string;
}

export namespace ProtocolDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProtocolDetails): any => ({
    ...obj,
  });
}

export enum State {
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
  STARTING = "STARTING",
  START_FAILED = "START_FAILED",
  STOPPING = "STOPPING",
  STOP_FAILED = "STOP_FAILED",
}

/**
 * <p>Describes the properties of a file transfer protocol-enabled server that was
 *       specified.</p>
 */
export interface DescribedServer {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) of the server.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Specifies the ARN of the Amazon Web ServicesCertificate Manager (ACM) certificate. Required when
   *         <code>Protocols</code> is set to <code>FTPS</code>.</p>
   */
  Certificate?: string;

  /**
   * <p>
   *       The protocol settings that are configured for your server.
   *     </p>
   *          <p>
   *       Use the <code>PassiveIp</code> parameter to indicate passive mode.
   *       Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer.
   *     </p>
   */
  ProtocolDetails?: ProtocolDetails;

  /**
   * <p>Specifies the domain of the storage system that is used for file transfers.</p>
   */
  Domain?: Domain | string;

  /**
   * <p>The virtual private cloud (VPC) endpoint settings that are configured for your server.
   *       When you host your endpoint within your VPC, you can make it accessible only to resources
   *       within your VPC, or you can attach Elastic IP addresses and make it accessible to clients over
   *       the internet. Your VPC's default security groups are automatically assigned to your
   *       endpoint.</p>
   */
  EndpointDetails?: EndpointDetails;

  /**
   * <p>Defines the type of endpoint that your server is connected to. If your server is connected
   *       to a VPC endpoint, your server isn't accessible over the public internet.</p>
   */
  EndpointType?: EndpointType | string;

  /**
   * <p>Specifies the Base64-encoded SHA256 fingerprint of the server's host key. This value
   *       is equivalent to the output of the <code>ssh-keygen -l -f my-new-server-key</code>
   *       command.</p>
   */
  HostKeyFingerprint?: string;

  /**
   * <p>Specifies information to call a customer-supplied authentication API. This field is not
   *       populated when the <code>IdentityProviderType</code> of a server is
   *       <code>AWS_DIRECTORY_SERVICE</code> or <code>SERVICE_MANAGED</code>.</p>
   */
  IdentityProviderDetails?: IdentityProviderDetails;

  /**
   * <p>Specifies the mode of authentication for a server. The default value is
   *         <code>SERVICE_MANAGED</code>, which allows you to store and access user credentials within
   *       the Amazon Web Services Transfer Family service.</p>
   *          <p>Use <code>AWS_DIRECTORY_SERVICE</code> to provide access to
   *       Active Directory groups in Amazon Web Services Managed Active Directory or Microsoft Active Directory in your
   *       on-premises environment or in Amazon Web Services using AD Connectors. This option also requires you to
   *       provide a Directory ID using the <code>IdentityProviderDetails</code> parameter.</p>
   *          <p>Use the <code>API_GATEWAY</code> value to integrate with an identity provider of your choosing. The
   *       <code>API_GATEWAY</code> setting requires you to provide an API Gateway endpoint URL to call
   *       for authentication using the <code>IdentityProviderDetails</code> parameter.</p>
   */
  IdentityProviderType?: IdentityProviderType | string;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that allows a server to turn
   *       on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, user activity can be viewed in
   *       your CloudWatch logs.</p>
   */
  LoggingRole?: string;

  /**
   * <p>Specifies the file transfer protocol or protocols over which your file transfer protocol
   *       client can connect to your server's endpoint. The available protocols are:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SFTP</code> (Secure Shell (SSH) File Transfer Protocol): File transfer over
   *           SSH</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FTPS</code> (File Transfer Protocol Secure): File transfer with TLS
   *           encryption</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FTP</code> (File Transfer Protocol): Unencrypted file transfer</p>
   *             </li>
   *          </ul>
   */
  Protocols?: (Protocol | string)[];

  /**
   * <p>Specifies the name of the security policy that is attached to the server.</p>
   */
  SecurityPolicyName?: string;

  /**
   * <p>Specifies the unique system-assigned identifier for a server that you instantiate.</p>
   */
  ServerId?: string;

  /**
   * <p>Specifies the condition of a server for the server that was described. A value of
   *         <code>ONLINE</code> indicates that the server can accept jobs and transfer files. A
   *         <code>State</code> value of <code>OFFLINE</code> means that the server cannot perform file
   *       transfer operations.</p>
   *
   *          <p>The states of <code>STARTING</code> and <code>STOPPING</code> indicate that the server is
   *       in an intermediate state, either not fully able to respond, or not fully offline. The values
   *       of <code>START_FAILED</code> or <code>STOP_FAILED</code> can indicate an error
   *       condition.</p>
   */
  State?: State | string;

  /**
   * <p>Specifies the key-value pairs that you can use to search for and group servers that were
   *       assigned to the server that was described.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the number of users that are assigned to a server you specified with the
   *         <code>ServerId</code>.</p>
   */
  UserCount?: number;
}

export namespace DescribedServer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribedServer): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the public Secure Shell (SSH) key that is associated with a
 *       user account for the specific file transfer protocol-enabled server (as identified by
 *         <code>ServerId</code>). The information returned includes the date the key was imported, the
 *       public key contents, and the public key ID. A user can store more than one SSH public key
 *       associated with their user name on a specific server.</p>
 */
export interface SshPublicKey {
  /**
   * <p>Specifies the date that the public key was added to the user account.</p>
   */
  DateImported: Date | undefined;

  /**
   * <p>Specifies the content of the SSH public key as specified by the
   *       <code>PublicKeyId</code>.</p>
   */
  SshPublicKeyBody: string | undefined;

  /**
   * <p>Specifies the <code>SshPublicKeyId</code> parameter contains the identifier of the public
   *       key.</p>
   */
  SshPublicKeyId: string | undefined;
}

export namespace SshPublicKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SshPublicKey): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the properties of a user that was specified.</p>
 */
export interface DescribedUser {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) for the user that was requested to be
   *       described.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should
   *       be visible to your user and how you want to make them visible. You must specify the
   *         <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path
   *       is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you
   *       only specify a target, it is displayed as is. You also must ensure that your Amazon Web Services Identity
   *       and Access Management (IAM) role provides access to paths in <code>Target</code>. This value
   *       can only be set when <code>HomeDirectoryType</code> is set to
   *       <i>LOGICAL</i>.</p>
   *
   *          <p>In most cases, you can use this value instead of the scope-down policy to lock your user
   *       down to the designated home directory ("<code>chroot</code>"). To do this, you can set
   *         <code>Entry</code> to '/' and set <code>Target</code> to the HomeDirectory
   *       parameter value.</p>
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];

  /**
   * <p>The type of landing directory (folder) you want your users' home directory to be when they log into the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients.
   *     If you set it <code>LOGICAL</code>, you will need to provide mappings in the <code>HomeDirectoryMappings</code> for how you want to make Amazon
   *     S3 or EFS paths visible to your users.</p>
   */
  HomeDirectoryType?: HomeDirectoryType | string;

  /**
   * <p>A scope-down policy for your user so that you can use the same IAM role across multiple users. This policy scopes down user
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>,
   *      <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p>
   */
  Policy?: string;

  /**
   * <p>Specifies the full POSIX identity, including user ID (<code>Uid</code>), group ID
   *         (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon Elastic File System (Amazon EFS) file systems. The POSIX
   *       permissions that are set on files and directories in your file system determine the level of
   *       access your users get when transferring files into and out of your Amazon EFS file
   *       systems.</p>
   */
  PosixProfile?: PosixProfile;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the IAM role that controls your users' access to your Amazon S3 bucket or EFS
   *       file system. The policies attached to this role determine the level of access that you want to provide your users when transferring
   *       files into and out of your Amazon S3 bucket or EFS file system. The IAM role should also contain a trust relationship that allows the
   *       server to access your resources when servicing your users' transfer requests.</p>
   */
  Role?: string;

  /**
   * <p>Specifies the public key portion of the Secure Shell (SSH) keys stored for the described
   *       user.</p>
   */
  SshPublicKeys?: SshPublicKey[];

  /**
   * <p>Specifies the key-value pairs for the user requested. Tag can be used to search for and
   *       group users for a variety of purposes.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the name of the user that was requested to be described. User names are used for
   *       authentication purposes. This is the string that will be used by your user when they log in to
   *       your server.</p>
   */
  UserName?: string;
}

export namespace DescribedUser {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribedUser): any => ({
    ...obj,
  });
}

export interface DescribeSecurityPolicyRequest {
  /**
   * <p>Specifies the name of the security policy that is attached to the server.</p>
   */
  SecurityPolicyName: string | undefined;
}

export namespace DescribeSecurityPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSecurityPolicyRequest): any => ({
    ...obj,
  });
}

export interface DescribeSecurityPolicyResponse {
  /**
   * <p>An array containing the properties of the security policy.</p>
   */
  SecurityPolicy: DescribedSecurityPolicy | undefined;
}

export namespace DescribeSecurityPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSecurityPolicyResponse): any => ({
    ...obj,
  });
}

export interface DescribeServerRequest {
  /**
   * <p>A system-assigned unique identifier for a server.</p>
   */
  ServerId: string | undefined;
}

export namespace DescribeServerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeServerRequest): any => ({
    ...obj,
  });
}

export interface DescribeServerResponse {
  /**
   * <p>An array containing the properties of a server with the <code>ServerID</code> you
   *       specified.</p>
   */
  Server: DescribedServer | undefined;
}

export namespace DescribeServerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeServerResponse): any => ({
    ...obj,
  });
}

export interface DescribeUserRequest {
  /**
   * <p>A system-assigned unique identifier for a server that has this user assigned.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The name of the user assigned to one or more servers. User names are part of the sign-in
   *       credentials to use the Amazon Web Services Transfer Family service and perform file transfer tasks.</p>
   */
  UserName: string | undefined;
}

export namespace DescribeUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserRequest): any => ({
    ...obj,
  });
}

export interface DescribeUserResponse {
  /**
   * <p>A system-assigned unique identifier for a server that has this user assigned.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>An array containing the properties of the user account for the <code>ServerID</code> value
   *       that you specified.</p>
   */
  User: DescribedUser | undefined;
}

export namespace DescribeUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserResponse): any => ({
    ...obj,
  });
}

export interface ImportSshPublicKeyRequest {
  /**
   * <p>A system-assigned unique identifier for a server.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The public key portion of an SSH key pair.</p>
   */
  SshPublicKeyBody: string | undefined;

  /**
   * <p>The name of the user account that is assigned to one or more servers.</p>
   */
  UserName: string | undefined;
}

export namespace ImportSshPublicKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportSshPublicKeyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies the user, the server they belong to, and the identifier of the SSH public key
 *       associated with that user. A user can have more than one key on each server that they are
 *       associated with.</p>
 */
export interface ImportSshPublicKeyResponse {
  /**
   * <p>A system-assigned unique identifier for a server.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The name given to a public key by the system that was imported.</p>
   */
  SshPublicKeyId: string | undefined;

  /**
   * <p>A user name assigned to the <code>ServerID</code> value that you specified.</p>
   */
  UserName: string | undefined;
}

export namespace ImportSshPublicKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportSshPublicKeyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message: string | undefined;
}

export namespace InvalidNextTokenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

export interface ListAccessesRequest {
  /**
   * <p>Specifies the maximum number of access SIDs to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>When you can get additional results from the <code>ListAccesses</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       accesses.</p>
   */
  NextToken?: string;

  /**
   * <p>A system-assigned unique identifier for a server that has users assigned to it.</p>
   */
  ServerId: string | undefined;
}

export namespace ListAccessesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccessesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Lists the properties for one or more specified associated accesses.</p>
 */
export interface ListedAccess {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>The type of landing directory (folder) you want your users' home directory to be when they log into the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients.
   *     If you set it <code>LOGICAL</code>, you will need to provide mappings in the <code>HomeDirectoryMappings</code> for how you want to make Amazon
   *     S3 or EFS paths visible to your users.</p>
   */
  HomeDirectoryType?: HomeDirectoryType | string;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the IAM role that controls your users' access to your Amazon S3 bucket or EFS
   *       file system. The policies attached to this role determine the level of access that you want to provide your users when transferring
   *       files into and out of your Amazon S3 bucket or EFS file system. The IAM role should also contain a trust relationship that allows the
   *       server to access your resources when servicing your users' transfer requests.</p>
   */
  Role?: string;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Amazon Web Services Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *
   *          <p>
   *             <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *
   *          <p>The regex used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   */
  ExternalId?: string;
}

export namespace ListedAccess {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListedAccess): any => ({
    ...obj,
  });
}

export interface ListAccessesResponse {
  /**
   * <p>When you can get additional results from the <code>ListAccesses</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       accesses.</p>
   */
  NextToken?: string;

  /**
   * <p>A system-assigned unique identifier for a server that has users assigned to it.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>Returns the accesses and their properties for the <code>ServerId</code> value that you
   *       specify.</p>
   */
  Accesses: ListedAccess[] | undefined;
}

export namespace ListAccessesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccessesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Returns properties of a file transfer protocol-enabled server that was specified.</p>
 */
export interface ListedServer {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) for a server to be listed.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Specifies the domain of the storage system that is used for file transfers.</p>
   */
  Domain?: Domain | string;

  /**
   * <p>Specifies the mode of authentication for a server. The default value is
   *         <code>SERVICE_MANAGED</code>, which allows you to store and access user credentials within
   *       the Amazon Web Services Transfer Family service.</p>
   *          <p>Use <code>AWS_DIRECTORY_SERVICE</code> to provide access to
   *       Active Directory groups in Amazon Web Services Managed Active Directory or Microsoft Active Directory in your
   *       on-premises environment or in Amazon Web Services using AD Connectors. This option also requires you to
   *       provide a Directory ID using the <code>IdentityProviderDetails</code> parameter.</p>
   *          <p>Use the <code>API_GATEWAY</code> value to integrate with an identity provider of your choosing. The
   *       <code>API_GATEWAY</code> setting requires you to provide an API Gateway endpoint URL to call
   *       for authentication using the <code>IdentityProviderDetails</code> parameter.</p>
   */
  IdentityProviderType?: IdentityProviderType | string;

  /**
   * <p>Specifies the type of VPC endpoint that your server is connected to. If your server is
   *       connected to a VPC endpoint, your server isn't accessible over the public internet.</p>
   */
  EndpointType?: EndpointType | string;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that allows a server to turn
   *       on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, user activity can be viewed in
   *       your CloudWatch logs.</p>
   */
  LoggingRole?: string;

  /**
   * <p>Specifies the unique system assigned identifier for the servers that were listed.</p>
   */
  ServerId?: string;

  /**
   * <p>Specifies the condition of a server for the server that was described. A value of
   *         <code>ONLINE</code> indicates that the server can accept jobs and transfer files. A
   *         <code>State</code> value of <code>OFFLINE</code> means that the server cannot perform file
   *       transfer operations.</p>
   *
   *          <p>The states of <code>STARTING</code> and <code>STOPPING</code> indicate that the server is
   *       in an intermediate state, either not fully able to respond, or not fully offline. The values
   *       of <code>START_FAILED</code> or <code>STOP_FAILED</code> can indicate an error
   *       condition.</p>
   */
  State?: State | string;

  /**
   * <p>Specifies the number of users that are assigned to a server you specified with the
   *         <code>ServerId</code>.</p>
   */
  UserCount?: number;
}

export namespace ListedServer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListedServer): any => ({
    ...obj,
  });
}

/**
 * <p>Returns properties of the user that you specify.</p>
 */
export interface ListedUser {
  /**
   * <p>Provides the unique Amazon Resource Name (ARN) for the user that you want to learn
   *       about.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>The type of landing directory (folder) you want your users' home directory to be when they log into the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients.
   *     If you set it <code>LOGICAL</code>, you will need to provide mappings in the <code>HomeDirectoryMappings</code> for how you want to make Amazon
   *     S3 or EFS paths visible to your users.</p>
   */
  HomeDirectoryType?: HomeDirectoryType | string;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the IAM role that controls your users' access to your Amazon S3 bucket or EFS
   *       file system. The policies attached to this role determine the level of access that you want to provide your users when transferring
   *       files into and out of your Amazon S3 bucket or EFS file system. The IAM role should also contain a trust relationship that allows the
   *       server to access your resources when servicing your users' transfer requests.</p>
   *          <note>
   *
   *             <p>The IAM role that controls your users' access to your Amazon S3 bucket for servers with <code>Domain=S3</code>, or your EFS file system for servers with <code>Domain=EFS</code>.
   *         </p>
   *             <p>The policies attached to this role determine the level of access you want to provide your users when
   *         transferring files into and out of your S3 buckets or EFS file systems.</p>
   *
   *          </note>
   */
  Role?: string;

  /**
   * <p>Specifies the number of SSH public keys stored for the user you specified.</p>
   */
  SshPublicKeyCount?: number;

  /**
   * <p>Specifies the name of the user whose ARN was specified. User names are used for
   *       authentication purposes.</p>
   */
  UserName?: string;
}

export namespace ListedUser {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListedUser): any => ({
    ...obj,
  });
}

export interface ListSecurityPoliciesRequest {
  /**
   * <p>Specifies the number of security policies to return as a response to the
   *         <code>ListSecurityPolicies</code> query.</p>
   */
  MaxResults?: number;

  /**
   * <p>When additional results are obtained from the <code>ListSecurityPolicies</code> command, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass the
   *         <code>NextToken</code> parameter in a subsequent command to continue listing additional
   *       security policies.</p>
   */
  NextToken?: string;
}

export namespace ListSecurityPoliciesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSecurityPoliciesRequest): any => ({
    ...obj,
  });
}

export interface ListSecurityPoliciesResponse {
  /**
   * <p>When you can get additional results from the <code>ListSecurityPolicies</code> operation,
   *       a <code>NextToken</code> parameter is returned in the output. In a following command, you can
   *       pass in the <code>NextToken</code> parameter to continue listing security policies.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of security policies that were listed.</p>
   */
  SecurityPolicyNames: string[] | undefined;
}

export namespace ListSecurityPoliciesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSecurityPoliciesResponse): any => ({
    ...obj,
  });
}

export interface ListServersRequest {
  /**
   * <p>Specifies the number of servers to return as a response to the <code>ListServers</code>
   *       query.</p>
   */
  MaxResults?: number;

  /**
   * <p>When additional results are obtained from the <code>ListServers</code> command, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass the
   *         <code>NextToken</code> parameter in a subsequent command to continue listing additional
   *       servers.</p>
   */
  NextToken?: string;
}

export namespace ListServersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServersRequest): any => ({
    ...obj,
  });
}

export interface ListServersResponse {
  /**
   * <p>When you can get additional results from the <code>ListServers</code> operation, a
   *         <code>NextToken</code> parameter is returned in the output. In a following command, you can
   *       pass in the <code>NextToken</code> parameter to continue listing additional servers.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of servers that were listed.</p>
   */
  Servers: ListedServer[] | undefined;
}

export namespace ListServersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServersResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>Requests the tags associated with a particular Amazon Resource Name (ARN). An ARN is an
   *       identifier for a specific Amazon Web Services resource, such as a server, user, or role.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Specifies the number of tags to return as a response to the
   *         <code>ListTagsForResource</code> request.</p>
   */
  MaxResults?: number;

  /**
   * <p>When you request additional results from the <code>ListTagsForResource</code> operation, a
   *         <code>NextToken</code> parameter is returned in the input. You can then pass in a subsequent
   *       command to the <code>NextToken</code> parameter to continue listing additional tags.</p>
   */
  NextToken?: string;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The ARN you specified to list the tags of.</p>
   */
  Arn?: string;

  /**
   * <p>When you can get additional results from the <code>ListTagsForResource</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       tags.</p>
   */
  NextToken?: string;

  /**
   * <p>Key-value pairs that are assigned to a resource, usually for the purpose of grouping and
   *       searching for items. Tags are metadata that you define.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListUsersRequest {
  /**
   * <p>Specifies the number of users to return as a response to the <code>ListUsers</code>
   *       request.</p>
   */
  MaxResults?: number;

  /**
   * <p>When you can get additional results from the <code>ListUsers</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       users.</p>
   */
  NextToken?: string;

  /**
   * <p>A system-assigned unique identifier for a server that has users assigned to it.</p>
   */
  ServerId: string | undefined;
}

export namespace ListUsersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj,
  });
}

export interface ListUsersResponse {
  /**
   * <p>When you can get additional results from the <code>ListUsers</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       users.</p>
   */
  NextToken?: string;

  /**
   * <p>A system-assigned unique identifier for a server that the users are assigned to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>Returns the user accounts and their properties for the <code>ServerId</code> value that
   *       you specify.</p>
   */
  Users: ListedUser[] | undefined;
}

export namespace ListUsersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj,
  });
}

export interface StartServerRequest {
  /**
   * <p>A system-assigned unique identifier for a server that you start.</p>
   */
  ServerId: string | undefined;
}

export namespace StartServerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartServerRequest): any => ({
    ...obj,
  });
}

export interface StopServerRequest {
  /**
   * <p>A system-assigned unique identifier for a server that you stopped.</p>
   */
  ServerId: string | undefined;
}

export namespace StopServerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopServerRequest): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>An Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a server, user, or
   *       role.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Key-value pairs assigned to ARNs that you can use to group and search for resources by
   *       type. You can attach this metadata to user accounts for any purpose.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TestIdentityProviderRequest {
  /**
   * <p>A system-assigned identifier for a specific server. That server's user authentication
   *       method is tested with a user name and password.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The type of file transfer protocol to be tested.</p>
   *
   *          <p>The available protocols are:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Secure Shell (SSH) File Transfer Protocol (SFTP)</p>
   *             </li>
   *             <li>
   *                <p>File Transfer Protocol Secure (FTPS)</p>
   *             </li>
   *             <li>
   *                <p>File Transfer Protocol (FTP)</p>
   *             </li>
   *          </ul>
   */
  ServerProtocol?: Protocol | string;

  /**
   * <p>The source IP address of the user account to be tested.</p>
   */
  SourceIp?: string;

  /**
   * <p>The name of the user account to be tested.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The password of the user account to be tested.</p>
   */
  UserPassword?: string;
}

export namespace TestIdentityProviderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestIdentityProviderRequest): any => ({
    ...obj,
    ...(obj.UserPassword && { UserPassword: SENSITIVE_STRING }),
  });
}

export interface TestIdentityProviderResponse {
  /**
   * <p>The response that is returned from your API Gateway.</p>
   */
  Response?: string;

  /**
   * <p>The HTTP status code that is the response from your API Gateway.</p>
   */
  StatusCode: number | undefined;

  /**
   * <p>A message that indicates whether the test was successful or not.</p>
   */
  Message?: string;

  /**
   * <p>The endpoint of the service used to authenticate a user.</p>
   */
  Url: string | undefined;
}

export namespace TestIdentityProviderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestIdentityProviderResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The value of the resource that will have the tag removed. An Amazon Resource Name (ARN) is
   *       an identifier for a specific Amazon Web Services resource, such as a server, user, or role.</p>
   */
  Arn: string | undefined;

  /**
   * <p>TagKeys are key-value pairs assigned to ARNs that can be used to group and search for
   *       resources by type. This metadata can be attached to resources for any purpose.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccessRequest {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>The type of landing directory (folder) you want your users' home directory to be when they log into the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients.
   *     If you set it <code>LOGICAL</code>, you will need to provide mappings in the <code>HomeDirectoryMappings</code> for how you want to make Amazon
   *     S3 or EFS paths visible to your users.</p>
   */
  HomeDirectoryType?: HomeDirectoryType | string;

  /**
   * <p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should
   *       be visible to your user and how you want to make them visible. You must specify the
   *         <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path
   *       is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you
   *       only specify a target, it is displayed as is. You also must ensure that your Amazon Web Services Identity
   *       and Access Management (IAM) role provides access to paths in <code>Target</code>. This value
   *       can only be set when <code>HomeDirectoryType</code> is set to
   *       <i>LOGICAL</i>.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example.</p>
   *          <p>
   *             <code>[ { "Entry": "your-personal-report.pdf", "Target": "/bucket3/customized-reports/${transfer:UserName}.pdf" } ]</code>
   *          </p>
   *          <p>In most cases, you can use this value instead of the scope-down policy to lock down your
   *         user to the designated home directory ("<code>chroot</code>"). To do this, you can set
   *         <code>Entry</code> to <code>/</code> and set <code>Target</code> to the
   *         <code>HomeDirectory</code> parameter value.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p>
   *          <p>
   *             <code>[ { "Entry:": "/", "Target": "/bucket_name/home/mydirectory" } ]</code>
   *          </p>
   *
   *          <note>
   *             <p>If the target of a logical directory entry does not exist in Amazon S3 or EFS, the entry is
   *         ignored. As a workaround, you can use the Amazon S3 API or EFS API to create 0 byte objects as place
   *         holders for your directory. If using the CLI, use the <code>s3api</code> or <code>efsapi</code> call instead of
   *         <code>s3</code> or <code>efs</code> so you can use the put-object operation. For example, you use the
   *         following: <code>aws s3api put-object --bucket bucketname --key path/to/folder/</code>. Make
   *         sure that the end of the key name ends in a <code>/</code> for it to be considered a folder.</p>
   *          </note>
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];

  /**
   * <p>A scope-down policy for your user so that you can use the same IAM role across multiple users. This policy scopes down user
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>,
   *      <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p>
   *
   *          <note>
   *             <p>This only applies when domain of <code>ServerId</code> is S3. Amazon EFS does not use scope
   *       down policy.</p>
   *             <p>For scope-down policies, Amazon Web ServicesTransfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the <code>Policy</code> argument.</p>
   *             <p>For an example of a scope-down policy, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/scope-down-policy.html">Example
   *         scope-down policy</a>.</p>
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html">AssumeRole</a> in the <i>Amazon Web ServicesSecurity Token Service API
   *           Reference</i>.</p>
   *          </note>
   */
  Policy?: string;

  /**
   * <p>The full POSIX identity, including user ID (<code>Uid</code>), group ID
   *       (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
   *       files and directories in your file system determine the level of access your users get when
   *       transferring files into and out of your Amazon EFS file systems.</p>
   */
  PosixProfile?: PosixProfile;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the IAM role that controls your users' access to your Amazon S3 bucket or EFS
   *       file system. The policies attached to this role determine the level of access that you want to provide your users when transferring
   *       files into and out of your Amazon S3 bucket or EFS file system. The IAM role should also contain a trust relationship that allows the
   *       server to access your resources when servicing your users' transfer requests.</p>
   */
  Role?: string;

  /**
   * <p>A system-assigned unique identifier for a server instance. This is the specific server that you added your user to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Amazon Web Services Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *
   *          <p>
   *             <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *
   *          <p>The regex used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   */
  ExternalId: string | undefined;
}

export namespace UpdateAccessRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccessRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccessResponse {
  /**
   * <p>The ID of the server that the user is attached to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The external ID of the group whose users have access to your Amazon S3 or Amazon EFS
   *       resources over the enabled protocols using Amazon Web ServicesTransfer Family.</p>
   */
  ExternalId: string | undefined;
}

export namespace UpdateAccessResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccessResponse): any => ({
    ...obj,
  });
}

export interface UpdateServerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web ServicesCertificate Manager (ACM) certificate. Required
   *       when <code>Protocols</code> is set to <code>FTPS</code>.</p>
   *
   *          <p>To request a new public certificate, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html">Request a public certificate</a>
   *       in the <i> Amazon Web ServicesCertificate Manager User Guide</i>.</p>
   *
   *          <p>To import an existing certificate into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing certificates into ACM</a>
   *       in the <i> Amazon Web ServicesCertificate Manager User Guide</i>.</p>
   *
   *          <p>To request a private certificate to use FTPS through private IP addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-private.html">Request a
   *         private certificate</a> in the <i> Amazon Web ServicesCertificate Manager User
   *       Guide</i>.</p>
   *
   *          <p>Certificates with the following cryptographic algorithms and key sizes are
   *       supported:</p>
   *
   *          <ul>
   *             <li>
   *                <p>2048-bit RSA (RSA_2048)</p>
   *             </li>
   *             <li>
   *                <p>4096-bit RSA (RSA_4096)</p>
   *             </li>
   *             <li>
   *                <p>Elliptic Prime Curve 256 bit (EC_prime256v1)</p>
   *             </li>
   *             <li>
   *                <p>Elliptic Prime Curve 384 bit (EC_secp384r1)</p>
   *             </li>
   *             <li>
   *                <p>Elliptic Prime Curve 521 bit (EC_secp521r1)</p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <p>The certificate must be a valid SSL/TLS X.509 version 3 certificate with FQDN or IP
   *         address specified and information about the issuer.</p>
   *          </note>
   */
  Certificate?: string;

  /**
   * <p>
   *       The protocol settings that are configured for your server.
   *     </p>
   *          <p>
   *       Use the <code>PassiveIp</code> parameter to indicate passive mode (for FTP and FTPS protocols).
   *       Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer.
   *     </p>
   */
  ProtocolDetails?: ProtocolDetails;

  /**
   * <p>The virtual private cloud (VPC) endpoint settings that are configured for your server.
   *       When you host your endpoint within your VPC, you can make it accessible only to resources
   *       within your VPC, or you can attach Elastic IP addresses and make it accessible to clients over
   *       the internet. Your VPC's default security groups are automatically assigned to your
   *       endpoint.</p>
   */
  EndpointDetails?: EndpointDetails;

  /**
   * <p>The type of endpoint that you want your server to use. You can choose to make your server's endpoint publicly accessible (PUBLIC)
   *       or host it inside your VPC. With an endpoint that is hosted in a VPC, you can restrict access to your server and
   *       resources only within your VPC or choose to make it internet facing by attaching Elastic IP addresses directly to it.</p>
   *          <note>
   *             <p> After May 19, 2021, you won't be able to create a server using
   *           <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount if your account hasn't already
   *       done so before May 19, 2021. If you have already created servers with
   *       <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount on or before May 19, 2021,
   *         you will not be affected. After this date, use
   *         <code>EndpointType</code>=<code>VPC</code>.</p>
   *
   *             <p>For more information, see
   *         https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p>
   *             <p>It is recommended that you use <code>VPC</code> as the <code>EndpointType</code>. With
   *         this endpoint type, you have the option to directly associate up to three Elastic IPv4
   *         addresses (BYO IP included) with your server's endpoint and use VPC security groups to
   *         restrict traffic by the client's public IP address. This is not possible with
   *           <code>EndpointType</code> set to <code>VPC_ENDPOINT</code>.</p>
   *          </note>
   */
  EndpointType?: EndpointType | string;

  /**
   * <p>The RSA private key as generated by <code>ssh-keygen -N "" -m PEM -f
   *         my-new-server-key</code>.</p>
   *
   *          <important>
   *             <p>If you aren't planning to migrate existing users from an existing server to a new
   *         server, don't update the host key. Accidentally changing a server's host key can
   *         be disruptive.</p>
   *          </important>
   *
   *
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/edit-server-config.html#configuring-servers-change-host-key">Change the host key for your SFTP-enabled server</a> in the <i>Amazon Web ServicesTransfer
   *         Family User Guide</i>.</p>
   */
  HostKey?: string;

  /**
   * <p>An array containing all of the information required to call a customer's
   *       authentication API method.</p>
   */
  IdentityProviderDetails?: IdentityProviderDetails;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that allows a server to turn
   *       on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, user activity can be viewed in
   *       your CloudWatch logs.</p>
   */
  LoggingRole?: string;

  /**
   * <p>Specifies the file transfer protocol or protocols over which your file transfer protocol
   *       client can connect to your server's endpoint. The available protocols are:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Secure Shell (SSH) File Transfer Protocol (SFTP): File transfer over SSH</p>
   *             </li>
   *             <li>
   *                <p>File Transfer Protocol Secure (FTPS): File transfer with TLS encryption</p>
   *             </li>
   *             <li>
   *                <p>File Transfer Protocol (FTP): Unencrypted file transfer</p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <p>If you select <code>FTPS</code>, you must choose a certificate stored in Amazon Web ServicesCertificate
   *         Manager (ACM) which will be used to identify your server when clients connect to it over
   *         FTPS.</p>
   *
   *
   *             <p>If <code>Protocol</code> includes either <code>FTP</code> or <code>FTPS</code>, then the
   *         <code>EndpointType</code> must be <code>VPC</code> and the
   *         <code>IdentityProviderType</code> must be <code>AWS_DIRECTORY_SERVICE</code> or <code>API_GATEWAY</code>.</p>
   *
   *             <p>If <code>Protocol</code> includes <code>FTP</code>, then
   *           <code>AddressAllocationIds</code> cannot be associated.</p>
   *
   *             <p>If <code>Protocol</code> is set only to <code>SFTP</code>, the <code>EndpointType</code>
   *         can be set to <code>PUBLIC</code> and the <code>IdentityProviderType</code> can be set to
   *           <code>SERVICE_MANAGED</code>.</p>
   *          </note>
   */
  Protocols?: (Protocol | string)[];

  /**
   * <p>Specifies the name of the security policy that is attached to the server.</p>
   */
  SecurityPolicyName?: string;

  /**
   * <p>A system-assigned unique identifier for a server instance that the user account is
   *       assigned to.</p>
   */
  ServerId: string | undefined;
}

export namespace UpdateServerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServerRequest): any => ({
    ...obj,
    ...(obj.HostKey && { HostKey: SENSITIVE_STRING }),
  });
}

export interface UpdateServerResponse {
  /**
   * <p>A system-assigned unique identifier for a server that the user account is assigned
   *       to.</p>
   */
  ServerId: string | undefined;
}

export namespace UpdateServerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServerResponse): any => ({
    ...obj,
  });
}

export interface UpdateUserRequest {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>The type of landing directory (folder) you want your users' home directory to be when they log into the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients.
   *     If you set it <code>LOGICAL</code>, you will need to provide mappings in the <code>HomeDirectoryMappings</code> for how you want to make Amazon
   *     S3 or EFS paths visible to your users.</p>
   */
  HomeDirectoryType?: HomeDirectoryType | string;

  /**
   * <p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should
   *       be visible to your user and how you want to make them visible. You must specify the
   *         <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path
   *       is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you
   *       only specify a target, it is displayed as is. You also must ensure that your Amazon Web Services Identity
   *       and Access Management (IAM) role provides access to paths in <code>Target</code>. This value
   *       can only be set when <code>HomeDirectoryType</code> is set to
   *       <i>LOGICAL</i>.</p>
   *
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example.</p>
   *          <p>
   *             <code>[ { "Entry": "your-personal-report.pdf", "Target":
   *         "/bucket3/customized-reports/${transfer:UserName}.pdf" } ]</code>
   *          </p>
   *
   *          <p>In most cases, you can use this value instead of the scope-down policy to lock down your
   *       user to the designated home directory ("<code>chroot</code>"). To do this, you can set
   *         <code>Entry</code> to '/' and set <code>Target</code> to the HomeDirectory
   *       parameter value.</p>
   *
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p>
   *          <p>
   *             <code>[ { "Entry:": "/", "Target": "/bucket_name/home/mydirectory" } ]</code>
   *          </p>
   *
   *          <note>
   *             <p>If the target of a logical directory entry does not exist in Amazon S3 or EFS, the entry is
   *         ignored. As a workaround, you can use the Amazon S3 API or EFS API to create 0 byte objects as place
   *         holders for your directory. If using the CLI, use the <code>s3api</code> or <code>efsapi</code> call instead of
   *         <code>s3</code> or <code>efs</code> so you can use the put-object operation. For example, you use the
   *         following: <code>aws s3api put-object --bucket bucketname --key path/to/folder/</code>. Make
   *         sure that the end of the key name ends in a <code>/</code> for it to be considered a folder.</p>
   *          </note>
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];

  /**
   * <p>A scope-down policy for your user so that you can use the same IAM role across multiple users. This policy scopes down user
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>,
   *      <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p>
   *
   *          <note>
   *             <p>This only applies when domain of <code>ServerId</code> is S3.
   *       Amazon EFS does not use scope-down policies.</p>
   *
   *             <p>For scope-down policies, Amazon Web ServicesTransfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy.
   *         You save the policy as a JSON blob and pass it in the <code>Policy</code> argument.</p>
   *
   *
   *
   *             <p>For an example of a scope-down policy, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/users.html#users-policies-scope-down">Creating a scope-down
   *           policy</a>.</p>
   *
   *
   *
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html">AssumeRole</a> in the <i>Amazon Web Services
   *           Security Token Service API Reference</i>.</p>
   *          </note>
   */
  Policy?: string;

  /**
   * <p>Specifies the full POSIX identity, including user ID (<code>Uid</code>), group ID
   *         (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon Elastic File Systems (Amazon EFS). The POSIX permissions
   *       that are set on files and directories in your file system determines the level of access your
   *       users get when transferring files into and out of your Amazon EFS file systems.</p>
   */
  PosixProfile?: PosixProfile;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the IAM role that controls your users' access to your Amazon S3 bucket or EFS
   *       file system. The policies attached to this role determine the level of access that you want to provide your users when transferring
   *       files into and out of your Amazon S3 bucket or EFS file system. The IAM role should also contain a trust relationship that allows the
   *       server to access your resources when servicing your users' transfer requests.</p>
   */
  Role?: string;

  /**
   * <p>A system-assigned unique identifier for a server instance that the user account is
   *       assigned to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique string that identifies a user and is associated with a server as specified by the
   *         <code>ServerId</code>. This user name must be a minimum of 3 and a maximum of 100 characters
   *       long. The following are valid characters: a-z, A-Z, 0-9, underscore '_', hyphen
   *       '-', period '.', and at sign '@'. The user name can't start
   *       with a hyphen, period, or at sign.</p>
   */
  UserName: string | undefined;
}

export namespace UpdateUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>UpdateUserResponse</code> returns the user name and identifier for the request to
 *       update a user's properties.</p>
 */
export interface UpdateUserResponse {
  /**
   * <p>A system-assigned unique identifier for a server instance that the user account is
   *       assigned to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The unique identifier for a user that is assigned to a server instance that was specified
   *       in the request.</p>
   */
  UserName: string | undefined;
}

export namespace UpdateUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserResponse): any => ({
    ...obj,
  });
}
