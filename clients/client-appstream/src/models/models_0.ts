import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export enum AccessEndpointType {
  STREAMING = "STREAMING",
}

/**
 * <p>Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint.</p>
 */
export interface AccessEndpoint {
  /**
   * <p>The type of interface endpoint.</p>
   */
  EndpointType: AccessEndpointType | string | undefined;

  /**
   * <p>The identifier (ID) of the VPC in which the interface endpoint is used.</p>
   */
  VpceId?: string;
}

export namespace AccessEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessEndpoint): any => ({
    ...obj,
  });
}

export enum Action {
  CLIPBOARD_COPY_FROM_LOCAL_DEVICE = "CLIPBOARD_COPY_FROM_LOCAL_DEVICE",
  CLIPBOARD_COPY_TO_LOCAL_DEVICE = "CLIPBOARD_COPY_TO_LOCAL_DEVICE",
  DOMAIN_PASSWORD_SIGNIN = "DOMAIN_PASSWORD_SIGNIN",
  DOMAIN_SMART_CARD_SIGNIN = "DOMAIN_SMART_CARD_SIGNIN",
  FILE_DOWNLOAD = "FILE_DOWNLOAD",
  FILE_UPLOAD = "FILE_UPLOAD",
  PRINTING_TO_LOCAL_DEVICE = "PRINTING_TO_LOCAL_DEVICE",
}

/**
 * <p>Describes an application in the application catalog.</p>
 */
export interface Application {
  /**
   * <p>The name of the application.</p>
   */
  Name?: string;

  /**
   * <p>The application name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The URL for the application icon. This URL might be time-limited.</p>
   */
  IconURL?: string;

  /**
   * <p>The path to the application executable in the instance.</p>
   */
  LaunchPath?: string;

  /**
   * <p>The arguments that are passed to the application at launch.</p>
   */
  LaunchParameters?: string;

  /**
   * <p>If there is a problem, the application can be disabled after image creation.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Additional attributes that describe the application.</p>
   */
  Metadata?: { [key: string]: string };
}

export namespace Application {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Application): any => ({
    ...obj,
  });
}

/**
 * <p>The persistent application settings for users of a stack.</p>
 */
export interface ApplicationSettings {
  /**
   * <p>Enables or disables persistent application settings for users during their streaming sessions. </p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The path prefix for the S3 bucket where users’ persistent application settings are stored. You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack. </p>
   */
  SettingsGroup?: string;
}

export namespace ApplicationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplicationSettings): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the persistent application settings for users of a stack.</p>
 */
export interface ApplicationSettingsResponse {
  /**
   * <p>Specifies whether persistent application settings are enabled for users during their streaming sessions.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The path prefix for the S3 bucket where users’ persistent application settings are stored.</p>
   */
  SettingsGroup?: string;

  /**
   * <p>The S3 bucket where users’ persistent application settings are stored. When persistent application settings are enabled for the first time for an account in an AWS Region, an S3 bucket is created. The bucket is unique to the AWS account and the Region.
   *         </p>
   */
  S3BucketName?: string;
}

export namespace ApplicationSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplicationSettingsResponse): any => ({
    ...obj,
  });
}

export interface AssociateFleetRequest {
  /**
   * <p>The name of the fleet. </p>
   */
  FleetName: string | undefined;

  /**
   * <p>The name of the stack.</p>
   */
  StackName: string | undefined;
}

export namespace AssociateFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateFleetRequest): any => ({
    ...obj,
  });
}

export interface AssociateFleetResult {}

export namespace AssociateFleetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateFleetResult): any => ({
    ...obj,
  });
}

/**
 * <p>An API error occurred. Wait a few minutes and try again.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}

export namespace ConcurrentModificationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
}

/**
 * <p>The image can't be updated because it's not compatible for updates.</p>
 */
export interface IncompatibleImageException extends __SmithyException, $MetadataBearer {
  name: "IncompatibleImageException";
  $fault: "client";
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}

export namespace IncompatibleImageException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IncompatibleImageException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 */
export interface InvalidAccountStatusException extends __SmithyException, $MetadataBearer {
  name: "InvalidAccountStatusException";
  $fault: "client";
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}

export namespace InvalidAccountStatusException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidAccountStatusException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested limit exceeds the permitted limit for an account.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The attempted operation is not permitted.</p>
 */
export interface OperationNotPermittedException extends __SmithyException, $MetadataBearer {
  name: "OperationNotPermittedException";
  $fault: "client";
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}

export namespace OperationNotPermittedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OperationNotPermittedException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export enum AuthenticationType {
  API = "API",
  SAML = "SAML",
  USERPOOL = "USERPOOL",
}

/**
 * <p>Describes a user in the user pool and the associated stack.</p>
 */
export interface UserStackAssociation {
  /**
   * <p>The name of the stack that is associated with the user.</p>
   */
  StackName: string | undefined;

  /**
   * <p>The email address of the user who is associated with the stack.</p>
   *
   *         <note>
   *             <p>Users' email addresses are case-sensitive.</p>
   *          </note>
   */
  UserName: string | undefined;

  /**
   * <p>The authentication type for the user.</p>
   */
  AuthenticationType: AuthenticationType | string | undefined;

  /**
   * <p>Specifies whether a welcome email is sent to a user after the user is created in the user pool.</p>
   */
  SendEmailNotification?: boolean;
}

export namespace UserStackAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserStackAssociation): any => ({
    ...obj,
    ...(obj.UserName && { UserName: SENSITIVE_STRING }),
  });
}

export interface BatchAssociateUserStackRequest {
  /**
   * <p>The list of UserStackAssociation objects.</p>
   */
  UserStackAssociations: UserStackAssociation[] | undefined;
}

export namespace BatchAssociateUserStackRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchAssociateUserStackRequest): any => ({
    ...obj,
    ...(obj.UserStackAssociations && {
      UserStackAssociations: obj.UserStackAssociations.map((item) => UserStackAssociation.filterSensitiveLog(item)),
    }),
  });
}

export enum UserStackAssociationErrorCode {
  DIRECTORY_NOT_FOUND = "DIRECTORY_NOT_FOUND",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  STACK_NOT_FOUND = "STACK_NOT_FOUND",
  USER_NAME_NOT_FOUND = "USER_NAME_NOT_FOUND",
}

/**
 * <p>Describes the error that is returned when a user can’t be associated with or disassociated from a stack. </p>
 */
export interface UserStackAssociationError {
  /**
   * <p>Information about the user and associated stack.</p>
   */
  UserStackAssociation?: UserStackAssociation;

  /**
   * <p>The error code for the error that is returned when a user can’t be associated with or disassociated from a stack.</p>
   */
  ErrorCode?: UserStackAssociationErrorCode | string;

  /**
   * <p>The error message for the error that is returned when a user can’t be associated with or disassociated from a stack.</p>
   */
  ErrorMessage?: string;
}

export namespace UserStackAssociationError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserStackAssociationError): any => ({
    ...obj,
    ...(obj.UserStackAssociation && {
      UserStackAssociation: UserStackAssociation.filterSensitiveLog(obj.UserStackAssociation),
    }),
  });
}

export interface BatchAssociateUserStackResult {
  /**
   * <p>The list of UserStackAssociationError objects.</p>
   */
  errors?: UserStackAssociationError[];
}

export namespace BatchAssociateUserStackResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchAssociateUserStackResult): any => ({
    ...obj,
    ...(obj.errors && { errors: obj.errors.map((item) => UserStackAssociationError.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 */
export interface InvalidParameterCombinationException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterCombinationException";
  $fault: "client";
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}

export namespace InvalidParameterCombinationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterCombinationException): any => ({
    ...obj,
  });
}

export interface BatchDisassociateUserStackRequest {
  /**
   * <p>The list of UserStackAssociation objects.</p>
   */
  UserStackAssociations: UserStackAssociation[] | undefined;
}

export namespace BatchDisassociateUserStackRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisassociateUserStackRequest): any => ({
    ...obj,
    ...(obj.UserStackAssociations && {
      UserStackAssociations: obj.UserStackAssociations.map((item) => UserStackAssociation.filterSensitiveLog(item)),
    }),
  });
}

export interface BatchDisassociateUserStackResult {
  /**
   * <p>The list of UserStackAssociationError objects.</p>
   */
  errors?: UserStackAssociationError[];
}

export namespace BatchDisassociateUserStackResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisassociateUserStackResult): any => ({
    ...obj,
    ...(obj.errors && { errors: obj.errors.map((item) => UserStackAssociationError.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>Describes the capacity for a fleet.</p>
 */
export interface ComputeCapacity {
  /**
   * <p>The desired number of streaming instances.</p>
   */
  DesiredInstances: number | undefined;
}

export namespace ComputeCapacity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComputeCapacity): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the capacity status for a fleet.</p>
 */
export interface ComputeCapacityStatus {
  /**
   * <p>The desired number of streaming instances.</p>
   */
  Desired: number | undefined;

  /**
   * <p>The total number of simultaneous streaming instances that are running.</p>
   */
  Running?: number;

  /**
   * <p>The number of instances in use for streaming.</p>
   */
  InUse?: number;

  /**
   * <p>The number of currently available instances that can be used to stream
   *             sessions.</p>
   */
  Available?: number;
}

export namespace ComputeCapacityStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComputeCapacityStatus): any => ({
    ...obj,
  });
}

export interface CopyImageRequest {
  /**
   * <p>The name of the image to copy.</p>
   */
  SourceImageName: string | undefined;

  /**
   * <p>The name that the image will have when it is copied to the destination.</p>
   */
  DestinationImageName: string | undefined;

  /**
   * <p>The destination region to which the image will be copied. This parameter is required, even if you are copying an image within the same region.</p>
   */
  DestinationRegion: string | undefined;

  /**
   * <p>The description that the image will have when it is copied to the destination.</p>
   */
  DestinationImageDescription?: string;
}

export namespace CopyImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyImageRequest): any => ({
    ...obj,
  });
}

export interface CopyImageResponse {
  /**
   * <p>The name of the destination image.</p>
   */
  DestinationImageName?: string;
}

export namespace CopyImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyImageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}

export namespace ResourceAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource exists and is not in use, but isn't available.</p>
 */
export interface ResourceNotAvailableException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotAvailableException";
  $fault: "client";
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}

export namespace ResourceNotAvailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotAvailableException): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the credentials for the service account used by the fleet or image builder to connect to the directory.</p>
 */
export interface ServiceAccountCredentials {
  /**
   * <p>The user name of the account. This account must have the following privileges: create computer objects,
   *             join computers to the domain, and change/reset the password on descendant computer objects for the
   *             organizational units specified.</p>
   */
  AccountName: string | undefined;

  /**
   * <p>The password for the account.</p>
   */
  AccountPassword: string | undefined;
}

export namespace ServiceAccountCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceAccountCredentials): any => ({
    ...obj,
    ...(obj.AccountName && { AccountName: SENSITIVE_STRING }),
    ...(obj.AccountPassword && { AccountPassword: SENSITIVE_STRING }),
  });
}

export interface CreateDirectoryConfigRequest {
  /**
   * <p>The fully qualified name of the directory (for example, corp.example.com).</p>
   */
  DirectoryName: string | undefined;

  /**
   * <p>The distinguished names of the organizational units for computer accounts.</p>
   */
  OrganizationalUnitDistinguishedNames: string[] | undefined;

  /**
   * <p>The credentials for the service account used by the fleet or image builder to connect to the directory.</p>
   */
  ServiceAccountCredentials?: ServiceAccountCredentials;
}

export namespace CreateDirectoryConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDirectoryConfigRequest): any => ({
    ...obj,
    ...(obj.ServiceAccountCredentials && {
      ServiceAccountCredentials: ServiceAccountCredentials.filterSensitiveLog(obj.ServiceAccountCredentials),
    }),
  });
}

/**
 * <p>Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
 */
export interface DirectoryConfig {
  /**
   * <p>The fully qualified name of the directory (for example, corp.example.com).</p>
   */
  DirectoryName: string | undefined;

  /**
   * <p>The distinguished names of the organizational units for computer accounts.</p>
   */
  OrganizationalUnitDistinguishedNames?: string[];

  /**
   * <p>The credentials for the service account used by the fleet or image builder to connect to the directory.</p>
   */
  ServiceAccountCredentials?: ServiceAccountCredentials;

  /**
   * <p>The time the directory configuration was created.</p>
   */
  CreatedTime?: Date;
}

export namespace DirectoryConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryConfig): any => ({
    ...obj,
    ...(obj.ServiceAccountCredentials && {
      ServiceAccountCredentials: ServiceAccountCredentials.filterSensitiveLog(obj.ServiceAccountCredentials),
    }),
  });
}

export interface CreateDirectoryConfigResult {
  /**
   * <p>Information about the directory configuration.</p>
   */
  DirectoryConfig?: DirectoryConfig;
}

export namespace CreateDirectoryConfigResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDirectoryConfigResult): any => ({
    ...obj,
    ...(obj.DirectoryConfig && { DirectoryConfig: DirectoryConfig.filterSensitiveLog(obj.DirectoryConfig) }),
  });
}

/**
 * <p>The specified role is invalid.</p>
 */
export interface InvalidRoleException extends __SmithyException, $MetadataBearer {
  name: "InvalidRoleException";
  $fault: "client";
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}

export namespace InvalidRoleException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRoleException): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
 */
export interface DomainJoinInfo {
  /**
   * <p>The fully qualified name of the directory (for example, corp.example.com).</p>
   */
  DirectoryName?: string;

  /**
   * <p>The distinguished name of the organizational unit for computer accounts.</p>
   */
  OrganizationalUnitDistinguishedName?: string;
}

export namespace DomainJoinInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainJoinInfo): any => ({
    ...obj,
  });
}

export enum FleetType {
  ALWAYS_ON = "ALWAYS_ON",
  ON_DEMAND = "ON_DEMAND",
}

export enum StreamView {
  APP = "APP",
  DESKTOP = "DESKTOP",
}

/**
 * <p>Describes VPC configuration information for fleets and image builders.</p>
 */
export interface VpcConfig {
  /**
   * <p>The identifiers of the subnets to which a network interface is attached from the fleet instance or image builder instance. Fleet instances use one or more subnets. Image builder instances use one subnet.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The identifiers of the security groups for the fleet or image builder.</p>
   */
  SecurityGroupIds?: string[];
}

export namespace VpcConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcConfig): any => ({
    ...obj,
  });
}

export interface CreateFleetRequest {
  /**
   * <p>A unique name for the fleet.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the image used to create the fleet.</p>
   */
  ImageName?: string;

  /**
   * <p>The ARN of the public, private, or shared image to use.</p>
   */
  ImageArn?: string;

  /**
   * <p>The instance type to use when launching fleet instances. The following instance types are available:</p>
   *         <ul>
   *             <li>
   *                <p>stream.standard.small</p>
   *             </li>
   *             <li>
   *                <p>stream.standard.medium</p>
   *             </li>
   *             <li>
   *                <p>stream.standard.large</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.large</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.large</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.large</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.3xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.6xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.large</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-desktop.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.16xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-pro.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-pro.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-pro.16xlarge</p>
   *             </li>
   *          </ul>
   */
  InstanceType: string | undefined;

  /**
   * <p>The fleet type.</p>
   *         <dl>
   *             <dt>ALWAYS_ON</dt>
   *             <dd>
   *                     <p>Provides users with instant-on access to their apps.
   *                         You are charged for all running instances in your fleet, even if no users are streaming apps.</p>
   *                 </dd>
   *             <dt>ON_DEMAND</dt>
   *             <dd>
   *                     <p>Provide users with access to applications after they connect, which takes one to two minutes.
   *                         You are charged for instance streaming when users are connected and a
   *                         small hourly fee for instances that are not streaming apps.</p>
   *                 </dd>
   *          </dl>
   */
  FleetType?: FleetType | string;

  /**
   * <p>The desired capacity for the fleet.</p>
   */
  ComputeCapacity: ComputeCapacity | undefined;

  /**
   * <p>The VPC configuration for the fleet.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.</p>
   *         <p>Specify a value between 600 and 360000.</p>
   */
  MaxUserDurationInSeconds?: number;

  /**
   * <p>The amount of time that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance. </p>
   *         <p>Specify a value between 60 and 360000.</p>
   */
  DisconnectTimeoutInSeconds?: number;

  /**
   * <p>The description to display.</p>
   */
  Description?: string;

  /**
   * <p>The fleet name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>Enables or disables default internet access for the fleet.</p>
   */
  EnableDefaultInternetAccess?: boolean;

  /**
   * <p>The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. </p>
   */
  DomainJoinInfo?: DomainJoinInfo;

  /**
   * <p>The tags to associate with the fleet. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p>
   *
   *         <p>If you do not specify a value, the value is set to an empty string.</p>
   *
   *         <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p>
   *         <p>_ . : / = + \ - @</p>
   *
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The amount of time that users can be idle (inactive) before they are disconnected
   *             from their streaming session and the <code>DisconnectTimeoutInSeconds</code> time
   *             interval begins. Users are notified before they are disconnected due to inactivity. If
   *             they try to reconnect to the streaming session before the time interval specified in
   *             <code>DisconnectTimeoutInSeconds</code> elapses, they are connected to their
   *             previous session. Users are considered idle when they stop providing keyboard or mouse
   *             input during their streaming session. File uploads and downloads, audio in, audio out,
   *             and pixels changing do not qualify as user activity. If users continue to be idle after
   *             the time interval in <code>IdleDisconnectTimeoutInSeconds</code> elapses, they are
   *             disconnected.</p>
   *         <p>To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 3600. The default value is 0.</p>
   *         <note>
   *             <p>If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity. </p>
   *          </note>
   */
  IdleDisconnectTimeoutInSeconds?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to apply to the fleet. To assume a role, a fleet instance calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p>
   *
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>The AppStream 2.0 view that is displayed to your users when they stream from the fleet. When <code>APP</code> is specified, only the windows of applications opened by users display. When <code>DESKTOP</code> is specified, the standard desktop that is provided by the operating system displays.</p>
   *
   *         <p>The default value is <code>APP</code>.</p>
   */
  StreamView?: StreamView | string;
}

export namespace CreateFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFleetRequest): any => ({
    ...obj,
  });
}

export enum FleetErrorCode {
  DOMAIN_JOIN_ERROR_ACCESS_DENIED = "DOMAIN_JOIN_ERROR_ACCESS_DENIED",
  DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED = "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED",
  DOMAIN_JOIN_ERROR_FILE_NOT_FOUND = "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND",
  DOMAIN_JOIN_ERROR_INVALID_PARAMETER = "DOMAIN_JOIN_ERROR_INVALID_PARAMETER",
  DOMAIN_JOIN_ERROR_LOGON_FAILURE = "DOMAIN_JOIN_ERROR_LOGON_FAILURE",
  DOMAIN_JOIN_ERROR_MORE_DATA = "DOMAIN_JOIN_ERROR_MORE_DATA",
  DOMAIN_JOIN_ERROR_NOT_SUPPORTED = "DOMAIN_JOIN_ERROR_NOT_SUPPORTED",
  DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN = "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN",
  DOMAIN_JOIN_INTERNAL_SERVICE_ERROR = "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR",
  DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME = "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME",
  DOMAIN_JOIN_NERR_PASSWORD_EXPIRED = "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED",
  DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED = "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED",
  FLEET_INSTANCE_PROVISIONING_FAILURE = "FLEET_INSTANCE_PROVISIONING_FAILURE",
  FLEET_STOPPED = "FLEET_STOPPED",
  IAM_SERVICE_ROLE_IS_MISSING = "IAM_SERVICE_ROLE_IS_MISSING",
  IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION = "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION",
  IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION = "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION",
  IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION = "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION",
  IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION = "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION",
  IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION = "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION",
  IGW_NOT_ATTACHED = "IGW_NOT_ATTACHED",
  IMAGE_NOT_FOUND = "IMAGE_NOT_FOUND",
  INTERNAL_SERVICE_ERROR = "INTERNAL_SERVICE_ERROR",
  INVALID_SUBNET_CONFIGURATION = "INVALID_SUBNET_CONFIGURATION",
  MACHINE_ROLE_IS_MISSING = "MACHINE_ROLE_IS_MISSING",
  NETWORK_INTERFACE_LIMIT_EXCEEDED = "NETWORK_INTERFACE_LIMIT_EXCEEDED",
  SECURITY_GROUPS_NOT_FOUND = "SECURITY_GROUPS_NOT_FOUND",
  STS_DISABLED_IN_REGION = "STS_DISABLED_IN_REGION",
  SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES = "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES",
  SUBNET_NOT_FOUND = "SUBNET_NOT_FOUND",
}

/**
 * <p>Describes a fleet error.</p>
 */
export interface FleetError {
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: FleetErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export namespace FleetError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FleetError): any => ({
    ...obj,
  });
}

export enum FleetState {
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
}

/**
 * <p>Describes a fleet.</p>
 */
export interface Fleet {
  /**
   * <p>The Amazon Resource Name (ARN) for the fleet.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name of the fleet.</p>
   */
  Name: string | undefined;

  /**
   * <p>The fleet name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The description to display.</p>
   */
  Description?: string;

  /**
   * <p>The name of the image used to create the fleet.</p>
   */
  ImageName?: string;

  /**
   * <p>The ARN for the public, private, or shared image.</p>
   */
  ImageArn?: string;

  /**
   * <p>The instance type to use when launching fleet instances. The following instance types are available:</p>
   *         <ul>
   *             <li>
   *                <p>stream.standard.small</p>
   *             </li>
   *             <li>
   *                <p>stream.standard.medium</p>
   *             </li>
   *             <li>
   *                <p>stream.standard.large</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.large</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.large</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.large</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.3xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.6xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.large</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-desktop.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.16xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-pro.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-pro.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-pro.16xlarge</p>
   *             </li>
   *          </ul>
   */
  InstanceType: string | undefined;

  /**
   * <p>The fleet type.</p>
   *         <dl>
   *             <dt>ALWAYS_ON</dt>
   *             <dd>
   *                     <p>Provides users with instant-on access to their apps.
   *                         You are charged for all running instances in your fleet, even if no users are streaming apps.</p>
   *                 </dd>
   *             <dt>ON_DEMAND</dt>
   *             <dd>
   *                     <p>Provide users with access to applications after they connect, which takes one to two minutes.
   *                         You are charged for instance streaming when users are connected and a
   *                         small hourly fee for instances that are not streaming apps.</p>
   *                 </dd>
   *          </dl>
   */
  FleetType?: FleetType | string;

  /**
   * <p>The capacity status for the fleet.</p>
   */
  ComputeCapacityStatus: ComputeCapacityStatus | undefined;

  /**
   * <p>The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance. </p>
   *         <p>Specify a value between 600 and 360000.</p>
   */
  MaxUserDurationInSeconds?: number;

  /**
   * <p>The amount of time that a streaming session remains active after users disconnect. If they try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance.</p>
   *         <p>Specify a value between 60 and 360000.</p>
   */
  DisconnectTimeoutInSeconds?: number;

  /**
   * <p>The current state for the fleet.</p>
   */
  State: FleetState | string | undefined;

  /**
   * <p>The VPC configuration for the fleet.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>The time the fleet was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The fleet errors.</p>
   */
  FleetErrors?: FleetError[];

  /**
   * <p>Indicates whether default internet access is enabled for the fleet.</p>
   */
  EnableDefaultInternetAccess?: boolean;

  /**
   * <p>The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. </p>
   */
  DomainJoinInfo?: DomainJoinInfo;

  /**
   * <p>The amount of time that users can be idle (inactive) before they are disconnected
   *             from their streaming session and the <code>DisconnectTimeoutInSeconds</code> time
   *             interval begins. Users are notified before they are disconnected due to inactivity. If
   *             users try to reconnect to the streaming session before the time interval specified in
   *             <code>DisconnectTimeoutInSeconds</code> elapses, they are connected to their
   *             previous session. Users are considered idle when they stop providing keyboard or mouse
   *             input during their streaming session. File uploads and downloads, audio in, audio out,
   *             and pixels changing do not qualify as user activity. If users continue to be idle after
   *             the time interval in <code>IdleDisconnectTimeoutInSeconds</code> elapses, they are
   *             disconnected.</p>
   *         <p>To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 3600. The default value is 0.</p>
   *
   *         <note>
   *             <p>If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity. </p>
   *          </note>
   */
  IdleDisconnectTimeoutInSeconds?: number;

  /**
   * <p>The ARN of the IAM role that is applied to the fleet. To assume a role, the fleet instance calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p>
   *
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>The AppStream 2.0 view that is displayed to your users when they stream from the fleet. When <code>APP</code> is specified, only the windows of applications opened by users display. When <code>DESKTOP</code> is specified, the standard desktop that is provided by the operating system displays.</p>
   *
   *         <p>The default value is <code>APP</code>.</p>
   */
  StreamView?: StreamView | string;
}

export namespace Fleet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Fleet): any => ({
    ...obj,
  });
}

export interface CreateFleetResult {
  /**
   * <p>Information about the fleet.</p>
   */
  Fleet?: Fleet;
}

export namespace CreateFleetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFleetResult): any => ({
    ...obj,
  });
}

/**
 * <p>AppStream 2.0 can’t process the request right now because the Describe calls from your AWS account are being throttled by Amazon EC2. Try again later.</p>
 */
export interface RequestLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "RequestLimitExceededException";
  $fault: "client";
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}

export namespace RequestLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RequestLimitExceededException): any => ({
    ...obj,
  });
}

export interface CreateImageBuilderRequest {
  /**
   * <p>A unique name for the image builder.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the image used to create the image builder.</p>
   */
  ImageName?: string;

  /**
   * <p>The ARN of the public, private, or shared image to use.</p>
   */
  ImageArn?: string;

  /**
   * <p>The instance type to use when launching the image builder. The following instance types are available:</p>
   *         <ul>
   *             <li>
   *                <p>stream.standard.small</p>
   *             </li>
   *             <li>
   *                <p>stream.standard.medium</p>
   *             </li>
   *             <li>
   *                <p>stream.standard.large</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.large</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.large</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.large</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.3xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.6xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.large</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-desktop.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.16xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-pro.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-pro.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-pro.16xlarge</p>
   *             </li>
   *          </ul>
   */
  InstanceType: string | undefined;

  /**
   * <p>The description to display.</p>
   */
  Description?: string;

  /**
   * <p>The image builder name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The VPC configuration for the image builder. You can specify only one subnet.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to apply to the image builder. To assume a role, the image builder calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p>
   *
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>Enables or disables default internet access for the image builder.</p>
   */
  EnableDefaultInternetAccess?: boolean;

  /**
   * <p>The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain. </p>
   */
  DomainJoinInfo?: DomainJoinInfo;

  /**
   * <p>The version of the AppStream 2.0 agent to use for this image builder. To use the latest version of the AppStream 2.0 agent, specify [LATEST]. </p>
   */
  AppstreamAgentVersion?: string;

  /**
   * <p>The tags to associate with the image builder. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p>
   *
   *         <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p>
   *         <p>_ . : / = + \ - @</p>
   *
   *         <p>If you do not specify a value, the value is set to an empty string.</p>
   *
   *         <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The list of interface VPC endpoint (interface endpoint) objects. Administrators can connect to the image builder only through the specified endpoints.</p>
   */
  AccessEndpoints?: AccessEndpoint[];
}

export namespace CreateImageBuilderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageBuilderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resource error.</p>
 */
export interface ResourceError {
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: FleetErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The time the error occurred.</p>
   */
  ErrorTimestamp?: Date;
}

export namespace ResourceError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the network details of the fleet or image builder instance.</p>
 */
export interface NetworkAccessConfiguration {
  /**
   * <p>The private IP address of the elastic network interface that is attached to instances in your VPC.</p>
   */
  EniPrivateIpAddress?: string;

  /**
   * <p>The resource identifier of the elastic network interface that is attached to instances in your VPC. All network interfaces have the eni-xxxxxxxx resource identifier.</p>
   */
  EniId?: string;
}

export namespace NetworkAccessConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkAccessConfiguration): any => ({
    ...obj,
  });
}

export type PlatformType = "WINDOWS" | "WINDOWS_SERVER_2016" | "WINDOWS_SERVER_2019";

export enum ImageBuilderState {
  DELETING = "DELETING",
  FAILED = "FAILED",
  PENDING = "PENDING",
  PENDING_QUALIFICATION = "PENDING_QUALIFICATION",
  REBOOTING = "REBOOTING",
  RUNNING = "RUNNING",
  SNAPSHOTTING = "SNAPSHOTTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  UPDATING = "UPDATING",
  UPDATING_AGENT = "UPDATING_AGENT",
}

export enum ImageBuilderStateChangeReasonCode {
  IMAGE_UNAVAILABLE = "IMAGE_UNAVAILABLE",
  INTERNAL_ERROR = "INTERNAL_ERROR",
}

/**
 * <p>Describes the reason why the last image builder state change occurred.</p>
 */
export interface ImageBuilderStateChangeReason {
  /**
   * <p>The state change reason code.</p>
   */
  Code?: ImageBuilderStateChangeReasonCode | string;

  /**
   * <p>The state change reason message.</p>
   */
  Message?: string;
}

export namespace ImageBuilderStateChangeReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageBuilderStateChangeReason): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a virtual machine that is used to create an image. </p>
 */
export interface ImageBuilder {
  /**
   * <p>The name of the image builder.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ARN for the image builder.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN of the image from which this builder was created.</p>
   */
  ImageArn?: string;

  /**
   * <p>The description to display.</p>
   */
  Description?: string;

  /**
   * <p>The image builder name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The VPC configuration of the image builder.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>The instance type for the image builder. The following instance types are available:</p>
   *             <ul>
   *             <li>
   *                <p>stream.standard.small</p>
   *             </li>
   *             <li>
   *                <p>stream.standard.medium</p>
   *             </li>
   *             <li>
   *                <p>stream.standard.large</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.large</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.large</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.large</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.3xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.6xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.large</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-desktop.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.16xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-pro.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-pro.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-pro.16xlarge</p>
   *             </li>
   *          </ul>
   */
  InstanceType?: string;

  /**
   * <p>The operating system platform of the image builder.</p>
   */
  Platform?: PlatformType | string;

  /**
   * <p>The ARN of the IAM role that is applied to the image builder. To assume a role, the image builder calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p>
   *
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>The state of the image builder.</p>
   */
  State?: ImageBuilderState | string;

  /**
   * <p>The reason why the last state change occurred.</p>
   */
  StateChangeReason?: ImageBuilderStateChangeReason;

  /**
   * <p>The time stamp when the image builder was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Enables or disables default internet access for the image builder.</p>
   */
  EnableDefaultInternetAccess?: boolean;

  /**
   * <p>The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain. </p>
   */
  DomainJoinInfo?: DomainJoinInfo;

  /**
   * <p>Describes the network details of the fleet or image builder instance.</p>
   */
  NetworkAccessConfiguration?: NetworkAccessConfiguration;

  /**
   * <p>The image builder errors.</p>
   */
  ImageBuilderErrors?: ResourceError[];

  /**
   * <p>The version of the AppStream 2.0 agent that is currently being used by the image builder. </p>
   */
  AppstreamAgentVersion?: string;

  /**
   * <p>The list of virtual private cloud (VPC) interface endpoint objects. Administrators can connect to the image builder only through the specified endpoints.</p>
   */
  AccessEndpoints?: AccessEndpoint[];
}

export namespace ImageBuilder {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageBuilder): any => ({
    ...obj,
  });
}

export interface CreateImageBuilderResult {
  /**
   * <p>Information about the image builder.</p>
   */
  ImageBuilder?: ImageBuilder;
}

export namespace CreateImageBuilderResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageBuilderResult): any => ({
    ...obj,
  });
}

export interface CreateImageBuilderStreamingURLRequest {
  /**
   * <p>The name of the image builder.</p>
   */
  Name: string | undefined;

  /**
   * <p>The time that the streaming URL will be valid, in seconds.
   *             Specify a value between 1 and 604800 seconds. The default is 3600 seconds.</p>
   */
  Validity?: number;
}

export namespace CreateImageBuilderStreamingURLRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageBuilderStreamingURLRequest): any => ({
    ...obj,
  });
}

export interface CreateImageBuilderStreamingURLResult {
  /**
   * <p>The URL to start the AppStream 2.0 streaming session.</p>
   */
  StreamingURL?: string;

  /**
   * <p>The elapsed time, in seconds after the Unix epoch, when this URL expires.</p>
   */
  Expires?: Date;
}

export namespace CreateImageBuilderStreamingURLResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageBuilderStreamingURLResult): any => ({
    ...obj,
  });
}

export enum StorageConnectorType {
  GOOGLE_DRIVE = "GOOGLE_DRIVE",
  HOMEFOLDERS = "HOMEFOLDERS",
  ONE_DRIVE = "ONE_DRIVE",
}

/**
 * <p>Describes a connector that enables persistent storage for users.</p>
 */
export interface StorageConnector {
  /**
   * <p>The type of storage connector.</p>
   */
  ConnectorType: StorageConnectorType | string | undefined;

  /**
   * <p>The ARN of the storage connector.</p>
   */
  ResourceIdentifier?: string;

  /**
   * <p>The names of the domains for the account.</p>
   */
  Domains?: string[];
}

export namespace StorageConnector {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StorageConnector): any => ({
    ...obj,
  });
}

export enum Permission {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Describes an action and whether the action is enabled or disabled for users during their streaming sessions.</p>
 */
export interface UserSetting {
  /**
   * <p>The action that is enabled or disabled.</p>
   */
  Action: Action | string | undefined;

  /**
   * <p>Indicates whether the action is enabled or disabled.</p>
   */
  Permission: Permission | string | undefined;
}

export namespace UserSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserSetting): any => ({
    ...obj,
  });
}

export interface CreateStackRequest {
  /**
   * <p>The name of the stack.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description to display.</p>
   */
  Description?: string;

  /**
   * <p>The stack name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The storage connectors to enable.</p>
   */
  StorageConnectors?: StorageConnector[];

  /**
   * <p>The URL that users are redirected to after their streaming session ends.</p>
   */
  RedirectURL?: string;

  /**
   * <p>The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.</p>
   */
  FeedbackURL?: string;

  /**
   * <p>The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled. </p>
   */
  UserSettings?: UserSetting[];

  /**
   * <p>The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.</p>
   */
  ApplicationSettings?: ApplicationSettings;

  /**
   * <p>The tags to associate with the stack. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p>
   *
   *         <p>If you do not specify a value, the value is set to an empty string.</p>
   *
   *         <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p>
   *         <p>_ . : / = + \ - @</p>
   *
   *         <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The list of interface VPC endpoint (interface endpoint) objects. Users of the stack can connect to AppStream 2.0 only through the specified endpoints.</p>
   */
  AccessEndpoints?: AccessEndpoint[];

  /**
   * <p>The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions. </p>
   */
  EmbedHostDomains?: string[];
}

export namespace CreateStackRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStackRequest): any => ({
    ...obj,
  });
}

export enum StackErrorCode {
  INTERNAL_SERVICE_ERROR = "INTERNAL_SERVICE_ERROR",
  STORAGE_CONNECTOR_ERROR = "STORAGE_CONNECTOR_ERROR",
}

/**
 * <p>Describes a stack error.</p>
 */
export interface StackError {
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: StackErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export namespace StackError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a stack.</p>
 */
export interface Stack {
  /**
   * <p>The ARN of the stack.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the stack.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description to display.</p>
   */
  Description?: string;

  /**
   * <p>The stack name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The time the stack was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The storage connectors to enable.</p>
   */
  StorageConnectors?: StorageConnector[];

  /**
   * <p>The URL that users are redirected to after their streaming session ends.</p>
   */
  RedirectURL?: string;

  /**
   * <p>The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.</p>
   */
  FeedbackURL?: string;

  /**
   * <p>The errors for the stack.</p>
   */
  StackErrors?: StackError[];

  /**
   * <p>The actions that are enabled or disabled for users during their streaming sessions. By default these actions are enabled.</p>
   */
  UserSettings?: UserSetting[];

  /**
   * <p>The persistent application settings for users of the stack.</p>
   */
  ApplicationSettings?: ApplicationSettingsResponse;

  /**
   * <p>The list of virtual private cloud (VPC) interface endpoint objects. Users of the stack can connect to AppStream 2.0 only through the specified endpoints. </p>
   */
  AccessEndpoints?: AccessEndpoint[];

  /**
   * <p>The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.</p>
   */
  EmbedHostDomains?: string[];
}

export namespace Stack {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Stack): any => ({
    ...obj,
  });
}

export interface CreateStackResult {
  /**
   * <p>Information about the stack.</p>
   */
  Stack?: Stack;
}

export namespace CreateStackResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStackResult): any => ({
    ...obj,
  });
}

export interface CreateStreamingURLRequest {
  /**
   * <p>The name of the stack.</p>
   */
  StackName: string | undefined;

  /**
   * <p>The name of the fleet.</p>
   */
  FleetName: string | undefined;

  /**
   * <p>The identifier of the user.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The name of the application to launch after the session starts. This is the name that you specified
   *             as <b>Name</b> in the Image Assistant. If your fleet is enabled for the <b>Desktop</b> stream view, you can also choose to launch directly to the operating system desktop. To do so, specify <b>Desktop</b>.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The time that the streaming URL will be valid, in seconds.
   *             Specify a value between 1 and 604800 seconds. The default is 60 seconds.</p>
   */
  Validity?: number;

  /**
   * <p>The session context. For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/managing-stacks-fleets.html#managing-stacks-fleets-parameters">Session Context</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
   */
  SessionContext?: string;
}

export namespace CreateStreamingURLRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamingURLRequest): any => ({
    ...obj,
  });
}

export interface CreateStreamingURLResult {
  /**
   * <p>The URL to start the AppStream 2.0 streaming session.</p>
   */
  StreamingURL?: string;

  /**
   * <p>The elapsed time, in seconds after the Unix epoch, when this URL expires.</p>
   */
  Expires?: Date;
}

export namespace CreateStreamingURLResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamingURLResult): any => ({
    ...obj,
  });
}

export interface CreateUpdatedImageRequest {
  /**
   * <p>The name of the image to update.</p>
   */
  existingImageName: string | undefined;

  /**
   * <p>The name of the new image. The name must be unique within the AWS account and Region.</p>
   */
  newImageName: string | undefined;

  /**
   * <p>The description to display for the new image.</p>
   */
  newImageDescription?: string;

  /**
   * <p>The name to display for the new image.</p>
   */
  newImageDisplayName?: string;

  /**
   * <p>The tags to associate with the new image. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p>
   *         <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p>
   *         <p>_ . : / = + \ - @</p>
   *         <p>If you do not specify a value, the value is set to an empty string.</p>
   *         <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
   */
  newImageTags?: { [key: string]: string };

  /**
   * <p>Indicates whether to display the status of image update availability before AppStream 2.0 initiates the process of creating a new updated image. If this value is set to <code>true</code>, AppStream 2.0 displays whether image updates are available. If this value is set to <code>false</code>, AppStream 2.0 initiates the process of creating a new updated image without displaying whether image updates are available.</p>
   */
  dryRun?: boolean;
}

export namespace CreateUpdatedImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUpdatedImageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the permissions for an image. </p>
 */
export interface ImagePermissions {
  /**
   * <p>Indicates whether the image can be used for a fleet.</p>
   */
  allowFleet?: boolean;

  /**
   * <p>Indicates whether the image can be used for an image builder.</p>
   */
  allowImageBuilder?: boolean;
}

export namespace ImagePermissions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImagePermissions): any => ({
    ...obj,
  });
}

export enum ImageState {
  AVAILABLE = "AVAILABLE",
  COPYING = "COPYING",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  IMPORTING = "IMPORTING",
  PENDING = "PENDING",
}

export enum ImageStateChangeReasonCode {
  IMAGE_BUILDER_NOT_AVAILABLE = "IMAGE_BUILDER_NOT_AVAILABLE",
  IMAGE_COPY_FAILURE = "IMAGE_COPY_FAILURE",
  INTERNAL_ERROR = "INTERNAL_ERROR",
}

/**
 * <p>Describes the reason why the last image state change occurred.</p>
 */
export interface ImageStateChangeReason {
  /**
   * <p>The state change reason code.</p>
   */
  Code?: ImageStateChangeReasonCode | string;

  /**
   * <p>The state change reason message.</p>
   */
  Message?: string;
}

export namespace ImageStateChangeReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageStateChangeReason): any => ({
    ...obj,
  });
}

export enum VisibilityType {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
  SHARED = "SHARED",
}

/**
 * <p>Describes an image.</p>
 */
export interface Image {
  /**
   * <p>The name of the image.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ARN of the image.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN of the image from which this image was created.</p>
   */
  BaseImageArn?: string;

  /**
   * <p>The image name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The image starts in the <code>PENDING</code> state. If image creation succeeds, the
   *             state is <code>AVAILABLE</code>. If image creation fails, the state is <code>FAILED</code>.</p>
   */
  State?: ImageState | string;

  /**
   * <p>Indicates whether the image is public or private.</p>
   */
  Visibility?: VisibilityType | string;

  /**
   * <p>Indicates whether an image builder can be launched from this image.</p>
   */
  ImageBuilderSupported?: boolean;

  /**
   * <p>The name of the image builder that was used to create the private image. If the image is shared, this value is null.</p>
   */
  ImageBuilderName?: string;

  /**
   * <p>The operating system platform of the image.</p>
   */
  Platform?: PlatformType | string;

  /**
   * <p>The description to display.</p>
   */
  Description?: string;

  /**
   * <p>The reason why the last state change occurred.</p>
   */
  StateChangeReason?: ImageStateChangeReason;

  /**
   * <p>The applications associated with the image.</p>
   */
  Applications?: Application[];

  /**
   * <p>The time the image was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The release date of the public base image.
   *             For private images, this date is the release date of the base image from which the image was created.</p>
   */
  PublicBaseImageReleasedDate?: Date;

  /**
   * <p>The version of the AppStream 2.0 agent to use for instances that are launched from this image. </p>
   */
  AppstreamAgentVersion?: string;

  /**
   * <p>The permissions to provide to the destination AWS account for the specified image.</p>
   */
  ImagePermissions?: ImagePermissions;

  /**
   * <p>Describes the errors that are returned when a new image can't be created.</p>
   */
  ImageErrors?: ResourceError[];
}

export namespace Image {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Image): any => ({
    ...obj,
  });
}

export interface CreateUpdatedImageResult {
  /**
   * <p>Describes an image.</p>
   */
  image?: Image;

  /**
   * <p>Indicates whether a new image can be created.</p>
   */
  canUpdateImage?: boolean;
}

export namespace CreateUpdatedImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUpdatedImageResult): any => ({
    ...obj,
  });
}

export interface CreateUsageReportSubscriptionRequest {}

export namespace CreateUsageReportSubscriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUsageReportSubscriptionRequest): any => ({
    ...obj,
  });
}

export enum UsageReportSchedule {
  DAILY = "DAILY",
}

export interface CreateUsageReportSubscriptionResult {
  /**
   * <p>The Amazon S3 bucket where generated reports are stored.</p>
   *
   *             <p>If you enabled on-instance session scripts and Amazon S3 logging for your session script
   *             configuration, AppStream 2.0 created an S3 bucket to store the script output. The bucket is
   *             unique to your account and Region. When you enable usage reporting in this case, AppStream 2.0
   *             uses the same bucket to store your usage reports. If you haven't already enabled on-instance session scripts,
   *             when you enable usage reports, AppStream 2.0 creates a new S3 bucket.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The schedule for generating usage reports.</p>
   */
  Schedule?: UsageReportSchedule | string;
}

export namespace CreateUsageReportSubscriptionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUsageReportSubscriptionResult): any => ({
    ...obj,
  });
}

export enum MessageAction {
  RESEND = "RESEND",
  SUPPRESS = "SUPPRESS",
}

export interface CreateUserRequest {
  /**
   * <p>The email address of the user.</p>
   *
   *         <note>
   *             <p>Users' email addresses are case-sensitive. During login, if they specify an email address that doesn't use the same capitalization as the email address specified when their user pool account was created, a "user does not exist" error message displays.</p>
   *          </note>
   */
  UserName: string | undefined;

  /**
   * <p>The action to take for the welcome email that is sent to a user after the user is created in the user pool. If you specify SUPPRESS, no email is sent. If you specify RESEND, do not specify the first name or last name of the user. If the value is null, the email is sent. </p>
   *
   *         <note>
   *             <p>The temporary password in the welcome email is valid for only 7 days. If users don’t set their passwords within 7 days, you must send them a new welcome email.</p>
   *          </note>
   */
  MessageAction?: MessageAction | string;

  /**
   * <p>The first name, or given name, of the user.</p>
   */
  FirstName?: string;

  /**
   * <p>The last name, or surname, of the user.</p>
   */
  LastName?: string;

  /**
   * <p>The authentication type for the user. You must specify USERPOOL. </p>
   */
  AuthenticationType: AuthenticationType | string | undefined;
}

export namespace CreateUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj,
    ...(obj.UserName && { UserName: SENSITIVE_STRING }),
    ...(obj.FirstName && { FirstName: SENSITIVE_STRING }),
    ...(obj.LastName && { LastName: SENSITIVE_STRING }),
  });
}

export interface CreateUserResult {}

export namespace CreateUserResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserResult): any => ({
    ...obj,
  });
}

export interface DeleteDirectoryConfigRequest {
  /**
   * <p>The name of the directory configuration.</p>
   */
  DirectoryName: string | undefined;
}

export namespace DeleteDirectoryConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDirectoryConfigRequest): any => ({
    ...obj,
  });
}

export interface DeleteDirectoryConfigResult {}

export namespace DeleteDirectoryConfigResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDirectoryConfigResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource is in use.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}

export namespace ResourceInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

export interface DeleteFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  Name: string | undefined;
}

export namespace DeleteFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFleetRequest): any => ({
    ...obj,
  });
}

export interface DeleteFleetResult {}

export namespace DeleteFleetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFleetResult): any => ({
    ...obj,
  });
}

export interface DeleteImageRequest {
  /**
   * <p>The name of the image.</p>
   */
  Name: string | undefined;
}

export namespace DeleteImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImageRequest): any => ({
    ...obj,
  });
}

export interface DeleteImageResult {
  /**
   * <p>Information about the image.</p>
   */
  Image?: Image;
}

export namespace DeleteImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImageResult): any => ({
    ...obj,
  });
}

export interface DeleteImageBuilderRequest {
  /**
   * <p>The name of the image builder.</p>
   */
  Name: string | undefined;
}

export namespace DeleteImageBuilderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImageBuilderRequest): any => ({
    ...obj,
  });
}

export interface DeleteImageBuilderResult {
  /**
   * <p>Information about the image builder.</p>
   */
  ImageBuilder?: ImageBuilder;
}

export namespace DeleteImageBuilderResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImageBuilderResult): any => ({
    ...obj,
  });
}

export interface DeleteImagePermissionsRequest {
  /**
   * <p>The name of the private image.</p>
   */
  Name: string | undefined;

  /**
   * <p>The 12-digit identifier of the AWS account for which to delete image permissions.</p>
   */
  SharedAccountId: string | undefined;
}

export namespace DeleteImagePermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImagePermissionsRequest): any => ({
    ...obj,
  });
}

export interface DeleteImagePermissionsResult {}

export namespace DeleteImagePermissionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImagePermissionsResult): any => ({
    ...obj,
  });
}

export interface DeleteStackRequest {
  /**
   * <p>The name of the stack.</p>
   */
  Name: string | undefined;
}

export namespace DeleteStackRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStackRequest): any => ({
    ...obj,
  });
}

export interface DeleteStackResult {}

export namespace DeleteStackResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStackResult): any => ({
    ...obj,
  });
}

export interface DeleteUsageReportSubscriptionRequest {}

export namespace DeleteUsageReportSubscriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUsageReportSubscriptionRequest): any => ({
    ...obj,
  });
}

export interface DeleteUsageReportSubscriptionResult {}

export namespace DeleteUsageReportSubscriptionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUsageReportSubscriptionResult): any => ({
    ...obj,
  });
}

export interface DeleteUserRequest {
  /**
   * <p>The email address of the user.</p>
   *
   *         <note>
   *             <p>Users' email addresses are case-sensitive.</p>
   *          </note>
   */
  UserName: string | undefined;

  /**
   * <p>The authentication type for the user. You must specify USERPOOL.</p>
   */
  AuthenticationType: AuthenticationType | string | undefined;
}

export namespace DeleteUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj,
    ...(obj.UserName && { UserName: SENSITIVE_STRING }),
  });
}

export interface DeleteUserResult {}

export namespace DeleteUserResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserResult): any => ({
    ...obj,
  });
}

export interface DescribeDirectoryConfigsRequest {
  /**
   * <p>The directory names.</p>
   */
  DirectoryNames?: string[];

  /**
   * <p>The maximum size of each page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace DescribeDirectoryConfigsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDirectoryConfigsRequest): any => ({
    ...obj,
  });
}

export interface DescribeDirectoryConfigsResult {
  /**
   * <p>Information about the directory configurations. Note that although the response syntax in this topic includes the account password, this password is not returned in the actual response. </p>
   */
  DirectoryConfigs?: DirectoryConfig[];

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace DescribeDirectoryConfigsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDirectoryConfigsResult): any => ({
    ...obj,
    ...(obj.DirectoryConfigs && {
      DirectoryConfigs: obj.DirectoryConfigs.map((item) => DirectoryConfig.filterSensitiveLog(item)),
    }),
  });
}

export interface DescribeFleetsRequest {
  /**
   * <p>The names of the fleets to describe.</p>
   */
  Names?: string[];

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace DescribeFleetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFleetsRequest): any => ({
    ...obj,
  });
}

export interface DescribeFleetsResult {
  /**
   * <p>Information about the fleets.</p>
   */
  Fleets?: Fleet[];

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace DescribeFleetsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFleetsResult): any => ({
    ...obj,
  });
}

export interface DescribeImageBuildersRequest {
  /**
   * <p>The names of the image builders to describe.</p>
   */
  Names?: string[];

  /**
   * <p>The maximum size of each page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace DescribeImageBuildersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageBuildersRequest): any => ({
    ...obj,
  });
}

export interface DescribeImageBuildersResult {
  /**
   * <p>Information about the image builders.</p>
   */
  ImageBuilders?: ImageBuilder[];

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace DescribeImageBuildersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageBuildersResult): any => ({
    ...obj,
  });
}

export interface DescribeImagePermissionsRequest {
  /**
   * <p>The name of the private image for which to describe permissions. The image must be one that you own. </p>
   */
  Name: string | undefined;

  /**
   * <p>The maximum size of each page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The 12-digit identifier of one or more AWS accounts with which the image is shared.</p>
   */
  SharedAwsAccountIds?: string[];

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace DescribeImagePermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImagePermissionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the permissions that are available to the specified AWS account for a shared image.</p>
 */
export interface SharedImagePermissions {
  /**
   * <p>The 12-digit identifier of the AWS account with which the image is shared.</p>
   */
  sharedAccountId: string | undefined;

  /**
   * <p>Describes the permissions for a shared image.</p>
   */
  imagePermissions: ImagePermissions | undefined;
}

export namespace SharedImagePermissions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SharedImagePermissions): any => ({
    ...obj,
  });
}

export interface DescribeImagePermissionsResult {
  /**
   * <p>The name of the private image.</p>
   */
  Name?: string;

  /**
   * <p>The permissions for a private image that you own. </p>
   */
  SharedImagePermissionsList?: SharedImagePermissions[];

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace DescribeImagePermissionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImagePermissionsResult): any => ({
    ...obj,
  });
}

export interface DescribeImagesRequest {
  /**
   * <p>The names of the public or private images to describe.</p>
   */
  Names?: string[];

  /**
   * <p>The ARNs of the public, private, and shared images to describe.</p>
   */
  Arns?: string[];

  /**
   * <p>The type of image (public, private, or shared) to describe. </p>
   */
  Type?: VisibilityType | string;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of each page of results.</p>
   */
  MaxResults?: number;
}

export namespace DescribeImagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImagesRequest): any => ({
    ...obj,
  });
}

export interface DescribeImagesResult {
  /**
   * <p>Information about the images.</p>
   */
  Images?: Image[];

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace DescribeImagesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImagesResult): any => ({
    ...obj,
  });
}

export interface DescribeSessionsRequest {
  /**
   * <p>The name of the stack. This value is case-sensitive.</p>
   */
  StackName: string | undefined;

  /**
   * <p>The name of the fleet. This value is case-sensitive.</p>
   */
  FleetName: string | undefined;

  /**
   * <p>The user identifier (ID). If you specify a user ID, you must also specify the authentication type.</p>
   */
  UserId?: string;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * <p>The size of each page of results. The default value is 20 and the maximum value is 50.</p>
   */
  Limit?: number;

  /**
   * <p>The authentication method. Specify <code>API</code> for a user
   *             authenticated using a streaming URL or <code>SAML</code> for a SAML federated user.
   *             The default is to authenticate users using a streaming URL.</p>
   */
  AuthenticationType?: AuthenticationType | string;
}

export namespace DescribeSessionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSessionsRequest): any => ({
    ...obj,
  });
}

export enum SessionConnectionState {
  CONNECTED = "CONNECTED",
  NOT_CONNECTED = "NOT_CONNECTED",
}

export enum SessionState {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  PENDING = "PENDING",
}

/**
 * <p>Describes a streaming session.</p>
 */
export interface Session {
  /**
   * <p>The identifier of the streaming session.</p>
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the user for whom the session was created.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The name of the stack for the streaming session.</p>
   */
  StackName: string | undefined;

  /**
   * <p>The name of the fleet for the streaming session.</p>
   */
  FleetName: string | undefined;

  /**
   * <p>The current state of the streaming session.</p>
   */
  State: SessionState | string | undefined;

  /**
   * <p>Specifies whether a user is connected to the streaming session.</p>
   */
  ConnectionState?: SessionConnectionState | string;

  /**
   * <p>The time when a streaming instance is dedicated for the user.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time when the streaming session is set to expire. This time is based on the <code>MaxUserDurationinSeconds</code> value, which determines the maximum length of time that a streaming session can run. A streaming session might end earlier than the time specified in <code>SessionMaxExpirationTime</code>, when the <code>DisconnectTimeOutInSeconds</code> elapses or the user chooses to end his or her session. If the <code>DisconnectTimeOutInSeconds</code> elapses, or the user chooses to end his or her session, the streaming instance is terminated and the streaming session ends.</p>
   */
  MaxExpirationTime?: Date;

  /**
   * <p>The authentication method. The user is authenticated using a streaming URL
   *             (<code>API</code>) or SAML 2.0 federation (<code>SAML</code>).</p>
   */
  AuthenticationType?: AuthenticationType | string;

  /**
   * <p>The network details for the streaming session.</p>
   */
  NetworkAccessConfiguration?: NetworkAccessConfiguration;
}

export namespace Session {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Session): any => ({
    ...obj,
  });
}

export interface DescribeSessionsResult {
  /**
   * <p>Information about the streaming sessions.</p>
   */
  Sessions?: Session[];

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace DescribeSessionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSessionsResult): any => ({
    ...obj,
  });
}

export interface DescribeStacksRequest {
  /**
   * <p>The names of the stacks to describe.</p>
   */
  Names?: string[];

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace DescribeStacksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStacksRequest): any => ({
    ...obj,
  });
}

export interface DescribeStacksResult {
  /**
   * <p>Information about the stacks.</p>
   */
  Stacks?: Stack[];

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace DescribeStacksResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStacksResult): any => ({
    ...obj,
  });
}

export interface DescribeUsageReportSubscriptionsRequest {
  /**
   * <p>The maximum size of each page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace DescribeUsageReportSubscriptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUsageReportSubscriptionsRequest): any => ({
    ...obj,
  });
}

export enum UsageReportExecutionErrorCode {
  ACCESS_DENIED = "ACCESS_DENIED",
  INTERNAL_SERVICE_ERROR = "INTERNAL_SERVICE_ERROR",
  RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND",
}

/**
 * <p>Describes the error that is returned when a usage report can't be generated.</p>
 */
export interface LastReportGenerationExecutionError {
  /**
   * <p>The error code for the error that is returned when a usage report can't be generated.</p>
   */
  ErrorCode?: UsageReportExecutionErrorCode | string;

  /**
   * <p>The error message for the error that is returned when a usage report can't be generated.</p>
   */
  ErrorMessage?: string;
}

export namespace LastReportGenerationExecutionError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LastReportGenerationExecutionError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes information about the usage report subscription.</p>
 */
export interface UsageReportSubscription {
  /**
   * <p>The Amazon S3 bucket where generated reports are stored.</p>
   *
   *         <p>If you enabled on-instance session scripts and Amazon S3 logging for your session script
   *             configuration, AppStream 2.0 created an S3 bucket to store the script output. The bucket is
   *             unique to your account and Region. When you enable usage reporting in this case, AppStream 2.0
   *             uses the same bucket to store your usage reports. If you haven't already enabled on-instance session scripts,
   *             when you enable usage reports, AppStream 2.0 creates a new S3 bucket.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The schedule for generating usage reports.</p>
   */
  Schedule?: UsageReportSchedule | string;

  /**
   * <p>The time when the last usage report was generated.</p>
   */
  LastGeneratedReportDate?: Date;

  /**
   * <p>The errors that were returned if usage reports couldn't be generated.</p>
   */
  SubscriptionErrors?: LastReportGenerationExecutionError[];
}

export namespace UsageReportSubscription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsageReportSubscription): any => ({
    ...obj,
  });
}

export interface DescribeUsageReportSubscriptionsResult {
  /**
   * <p>Information about the usage report subscription.</p>
   */
  UsageReportSubscriptions?: UsageReportSubscription[];

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace DescribeUsageReportSubscriptionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUsageReportSubscriptionsResult): any => ({
    ...obj,
  });
}

export interface DescribeUsersRequest {
  /**
   * <p>The authentication type for the users in the user pool to describe. You must specify USERPOOL.</p>
   */
  AuthenticationType: AuthenticationType | string | undefined;

  /**
   * <p>The maximum size of each page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace DescribeUsersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUsersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a user in the user pool.</p>
 */
export interface User {
  /**
   * <p>The ARN of the user.</p>
   */
  Arn?: string;

  /**
   * <p>The email address of the user.</p>
   *
   *         <note>
   *             <p>Users' email addresses are case-sensitive.</p>
   *          </note>
   */
  UserName?: string;

  /**
   * <p>Specifies whether the user in the user pool is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The status of the user in the user pool. The status can be one of the following:</p>
   *         <ul>
   *             <li>
   *                <p>UNCONFIRMED – The user is created but not confirmed.</p>
   *             </li>
   *             <li>
   *                <p>CONFIRMED – The user is confirmed.</p>
   *             </li>
   *             <li>
   *                <p>ARCHIVED – The user is no longer active.</p>
   *             </li>
   *             <li>
   *                <p>COMPROMISED – The user is disabled because of a potential security threat.</p>
   *             </li>
   *             <li>
   *                <p>UNKNOWN – The user status is not known.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>The first name, or given name, of the user.</p>
   */
  FirstName?: string;

  /**
   * <p>The last name, or surname, of the user.</p>
   */
  LastName?: string;

  /**
   * <p>The date and time the user was created in the user pool.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The authentication type for the user.</p>
   */
  AuthenticationType: AuthenticationType | string | undefined;
}

export namespace User {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj,
    ...(obj.UserName && { UserName: SENSITIVE_STRING }),
    ...(obj.FirstName && { FirstName: SENSITIVE_STRING }),
    ...(obj.LastName && { LastName: SENSITIVE_STRING }),
  });
}

export interface DescribeUsersResult {
  /**
   * <p>Information about users in the user pool.</p>
   */
  Users?: User[];

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace DescribeUsersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUsersResult): any => ({
    ...obj,
    ...(obj.Users && { Users: obj.Users.map((item) => User.filterSensitiveLog(item)) }),
  });
}

export interface DescribeUserStackAssociationsRequest {
  /**
   * <p>The name of the stack that is associated with the user.</p>
   */
  StackName?: string;

  /**
   * <p>The email address of the user who is associated with the stack.</p>
   *
   *         <note>
   *             <p>Users' email addresses are case-sensitive.</p>
   *          </note>
   */
  UserName?: string;

  /**
   * <p>The authentication type for the user who is associated with the stack. You must specify USERPOOL.</p>
   */
  AuthenticationType?: AuthenticationType | string;

  /**
   * <p>The maximum size of each page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace DescribeUserStackAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserStackAssociationsRequest): any => ({
    ...obj,
    ...(obj.UserName && { UserName: SENSITIVE_STRING }),
  });
}

export interface DescribeUserStackAssociationsResult {
  /**
   * <p>The UserStackAssociation objects.</p>
   */
  UserStackAssociations?: UserStackAssociation[];

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace DescribeUserStackAssociationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserStackAssociationsResult): any => ({
    ...obj,
    ...(obj.UserStackAssociations && {
      UserStackAssociations: obj.UserStackAssociations.map((item) => UserStackAssociation.filterSensitiveLog(item)),
    }),
  });
}

export interface DisableUserRequest {
  /**
   * <p>The email address of the user.</p>
   *
   *         <note>
   *             <p>Users' email addresses are case-sensitive.</p>
   *          </note>
   */
  UserName: string | undefined;

  /**
   * <p>The authentication type for the user. You must specify USERPOOL.</p>
   */
  AuthenticationType: AuthenticationType | string | undefined;
}

export namespace DisableUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableUserRequest): any => ({
    ...obj,
    ...(obj.UserName && { UserName: SENSITIVE_STRING }),
  });
}

export interface DisableUserResult {}

export namespace DisableUserResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableUserResult): any => ({
    ...obj,
  });
}

export interface DisassociateFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  FleetName: string | undefined;

  /**
   * <p>The name of the stack.</p>
   */
  StackName: string | undefined;
}

export namespace DisassociateFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFleetRequest): any => ({
    ...obj,
  });
}

export interface DisassociateFleetResult {}

export namespace DisassociateFleetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFleetResult): any => ({
    ...obj,
  });
}

export interface EnableUserRequest {
  /**
   * <p>The email address of the user.</p>
   *
   *         <note>
   *             <p>Users' email addresses are case-sensitive. During login, if they specify an email address that doesn't use the same capitalization as the email address specified when their user pool account was created, a "user does not exist" error message displays. </p>
   *          </note>
   */
  UserName: string | undefined;

  /**
   * <p>The authentication type for the user. You must specify USERPOOL.</p>
   */
  AuthenticationType: AuthenticationType | string | undefined;
}

export namespace EnableUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableUserRequest): any => ({
    ...obj,
    ...(obj.UserName && { UserName: SENSITIVE_STRING }),
  });
}

export interface EnableUserResult {}

export namespace EnableUserResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableUserResult): any => ({
    ...obj,
  });
}

export interface ExpireSessionRequest {
  /**
   * <p>The identifier of the streaming session.</p>
   */
  SessionId: string | undefined;
}

export namespace ExpireSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExpireSessionRequest): any => ({
    ...obj,
  });
}

export interface ExpireSessionResult {}

export namespace ExpireSessionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExpireSessionResult): any => ({
    ...obj,
  });
}

export enum FleetAttribute {
  DOMAIN_JOIN_INFO = "DOMAIN_JOIN_INFO",
  IAM_ROLE_ARN = "IAM_ROLE_ARN",
  VPC_CONFIGURATION = "VPC_CONFIGURATION",
  VPC_CONFIGURATION_SECURITY_GROUP_IDS = "VPC_CONFIGURATION_SECURITY_GROUP_IDS",
}

export interface ListAssociatedFleetsRequest {
  /**
   * <p>The name of the stack.</p>
   */
  StackName: string | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace ListAssociatedFleetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociatedFleetsRequest): any => ({
    ...obj,
  });
}

export interface ListAssociatedFleetsResult {
  /**
   * <p>The name of the fleet.</p>
   */
  Names?: string[];

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListAssociatedFleetsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociatedFleetsResult): any => ({
    ...obj,
  });
}

export interface ListAssociatedStacksRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  FleetName: string | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace ListAssociatedStacksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociatedStacksRequest): any => ({
    ...obj,
  });
}

export interface ListAssociatedStacksResult {
  /**
   * <p>The name of the stack.</p>
   */
  Names?: string[];

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListAssociatedStacksResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociatedStacksResult): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
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
   * <p>The information about the tags.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface StartFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  Name: string | undefined;
}

export namespace StartFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartFleetRequest): any => ({
    ...obj,
  });
}

export interface StartFleetResult {}

export namespace StartFleetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartFleetResult): any => ({
    ...obj,
  });
}

export interface StartImageBuilderRequest {
  /**
   * <p>The name of the image builder.</p>
   */
  Name: string | undefined;

  /**
   * <p>The version of the AppStream 2.0 agent to use for this image builder. To use the latest version of the AppStream 2.0 agent, specify [LATEST]. </p>
   */
  AppstreamAgentVersion?: string;
}

export namespace StartImageBuilderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartImageBuilderRequest): any => ({
    ...obj,
  });
}

export interface StartImageBuilderResult {
  /**
   * <p>Information about the image builder.</p>
   */
  ImageBuilder?: ImageBuilder;
}

export namespace StartImageBuilderResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartImageBuilderResult): any => ({
    ...obj,
  });
}

export interface StopFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  Name: string | undefined;
}

export namespace StopFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopFleetRequest): any => ({
    ...obj,
  });
}

export interface StopFleetResult {}

export namespace StopFleetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopFleetResult): any => ({
    ...obj,
  });
}

export interface StopImageBuilderRequest {
  /**
   * <p>The name of the image builder.</p>
   */
  Name: string | undefined;
}

export namespace StopImageBuilderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopImageBuilderRequest): any => ({
    ...obj,
  });
}

export interface StopImageBuilderResult {
  /**
   * <p>Information about the image builder.</p>
   */
  ImageBuilder?: ImageBuilder;
}

export namespace StopImageBuilderResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopImageBuilderResult): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to associate. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p>
   *
   *         <p>If you do not specify a value, the value is set to an empty string.</p>
   *
   *         <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p>
   *         <p>_ . : / = + \ - @</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys for the tags to disassociate.</p>
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

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateDirectoryConfigRequest {
  /**
   * <p>The name of the Directory Config object.</p>
   */
  DirectoryName: string | undefined;

  /**
   * <p>The distinguished names of the organizational units for computer accounts.</p>
   */
  OrganizationalUnitDistinguishedNames?: string[];

  /**
   * <p>The credentials for the service account used by the fleet or image builder to connect to the directory.</p>
   */
  ServiceAccountCredentials?: ServiceAccountCredentials;
}

export namespace UpdateDirectoryConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDirectoryConfigRequest): any => ({
    ...obj,
    ...(obj.ServiceAccountCredentials && {
      ServiceAccountCredentials: ServiceAccountCredentials.filterSensitiveLog(obj.ServiceAccountCredentials),
    }),
  });
}

export interface UpdateDirectoryConfigResult {
  /**
   * <p>Information about the Directory Config object.</p>
   */
  DirectoryConfig?: DirectoryConfig;
}

export namespace UpdateDirectoryConfigResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDirectoryConfigResult): any => ({
    ...obj,
    ...(obj.DirectoryConfig && { DirectoryConfig: DirectoryConfig.filterSensitiveLog(obj.DirectoryConfig) }),
  });
}

export interface UpdateFleetRequest {
  /**
   * <p>The name of the image used to create the fleet.</p>
   */
  ImageName?: string;

  /**
   * <p>The ARN of the public, private, or shared image to use.</p>
   */
  ImageArn?: string;

  /**
   * <p>A unique name for the fleet.</p>
   */
  Name?: string;

  /**
   * <p>The instance type to use when launching fleet instances. The following instance types are available:</p>
   *         <ul>
   *             <li>
   *                <p>stream.standard.small</p>
   *             </li>
   *             <li>
   *                <p>stream.standard.medium</p>
   *             </li>
   *             <li>
   *                <p>stream.standard.large</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.large</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.compute.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.large</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.large</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.3xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.6xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.memory.z1d.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.large</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-design.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-desktop.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g4dn.16xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-pro.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-pro.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics-pro.16xlarge</p>
   *             </li>
   *          </ul>
   */
  InstanceType?: string;

  /**
   * <p>The desired capacity for the fleet.</p>
   */
  ComputeCapacity?: ComputeCapacity;

  /**
   * <p>The VPC configuration for the fleet.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.</p>
   *         <p>Specify a value between 600 and 360000.</p>
   */
  MaxUserDurationInSeconds?: number;

  /**
   * <p>The amount of time that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance. </p>
   *         <p>Specify a value between 60 and 360000.</p>
   */
  DisconnectTimeoutInSeconds?: number;

  /**
   * @deprecated
   *
   * <p>Deletes the VPC association for the specified fleet.</p>
   */
  DeleteVpcConfig?: boolean;

  /**
   * <p>The description to display.</p>
   */
  Description?: string;

  /**
   * <p>The fleet name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>Enables or disables default internet access for the fleet.</p>
   */
  EnableDefaultInternetAccess?: boolean;

  /**
   * <p>The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. </p>
   */
  DomainJoinInfo?: DomainJoinInfo;

  /**
   * <p>The amount of time that users can be idle (inactive) before they are disconnected
   *             from their streaming session and the <code>DisconnectTimeoutInSeconds</code> time
   *             interval begins. Users are notified before they are disconnected due to inactivity. If
   *             users try to reconnect to the streaming session before the time interval specified in
   *             <code>DisconnectTimeoutInSeconds</code> elapses, they are connected to their
   *             previous session. Users are considered idle when they stop providing keyboard or mouse
   *             input during their streaming session. File uploads and downloads, audio in, audio out,
   *             and pixels changing do not qualify as user activity. If users continue to be idle after
   *             the time interval in <code>IdleDisconnectTimeoutInSeconds</code> elapses, they are
   *             disconnected. </p>
   *         <p>To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 3600. The default value is 0.</p>
   *
   *         <note>
   *             <p>If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity. </p>
   *          </note>
   */
  IdleDisconnectTimeoutInSeconds?: number;

  /**
   * <p>The fleet attributes to delete.</p>
   */
  AttributesToDelete?: (FleetAttribute | string)[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to apply to the fleet. To assume a role, a fleet instance calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p>
   *
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>The AppStream 2.0 view that is displayed to your users when they stream from the fleet. When <code>APP</code> is specified, only the windows of applications opened by users display. When <code>DESKTOP</code> is specified, the standard desktop that is provided by the operating system displays.</p>
   *
   *         <p>The default value is <code>APP</code>.</p>
   */
  StreamView?: StreamView | string;
}

export namespace UpdateFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFleetRequest): any => ({
    ...obj,
  });
}

export interface UpdateFleetResult {
  /**
   * <p>Information about the fleet.</p>
   */
  Fleet?: Fleet;
}

export namespace UpdateFleetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFleetResult): any => ({
    ...obj,
  });
}

export interface UpdateImagePermissionsRequest {
  /**
   * <p>The name of the private image.</p>
   */
  Name: string | undefined;

  /**
   * <p>The 12-digit identifier of the AWS account for which you want add or update image permissions.</p>
   */
  SharedAccountId: string | undefined;

  /**
   * <p>The permissions for the image.</p>
   */
  ImagePermissions: ImagePermissions | undefined;
}

export namespace UpdateImagePermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateImagePermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateImagePermissionsResult {}

export namespace UpdateImagePermissionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateImagePermissionsResult): any => ({
    ...obj,
  });
}

export enum StackAttribute {
  ACCESS_ENDPOINTS = "ACCESS_ENDPOINTS",
  EMBED_HOST_DOMAINS = "EMBED_HOST_DOMAINS",
  FEEDBACK_URL = "FEEDBACK_URL",
  IAM_ROLE_ARN = "IAM_ROLE_ARN",
  REDIRECT_URL = "REDIRECT_URL",
  STORAGE_CONNECTORS = "STORAGE_CONNECTORS",
  STORAGE_CONNECTOR_GOOGLE_DRIVE = "STORAGE_CONNECTOR_GOOGLE_DRIVE",
  STORAGE_CONNECTOR_HOMEFOLDERS = "STORAGE_CONNECTOR_HOMEFOLDERS",
  STORAGE_CONNECTOR_ONE_DRIVE = "STORAGE_CONNECTOR_ONE_DRIVE",
  THEME_NAME = "THEME_NAME",
  USER_SETTINGS = "USER_SETTINGS",
}

export interface UpdateStackRequest {
  /**
   * <p>The stack name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The description to display.</p>
   */
  Description?: string;

  /**
   * <p>The name of the stack.</p>
   */
  Name: string | undefined;

  /**
   * <p>The storage connectors to enable.</p>
   */
  StorageConnectors?: StorageConnector[];

  /**
   * @deprecated
   *
   * <p>Deletes the storage connectors currently enabled for the stack.</p>
   */
  DeleteStorageConnectors?: boolean;

  /**
   * <p>The URL that users are redirected to after their streaming session ends.</p>
   */
  RedirectURL?: string;

  /**
   * <p>The URL that users are redirected to after they choose the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.</p>
   */
  FeedbackURL?: string;

  /**
   * <p>The stack attributes to delete.</p>
   */
  AttributesToDelete?: (StackAttribute | string)[];

  /**
   * <p>The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.</p>
   */
  UserSettings?: UserSetting[];

  /**
   * <p>The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.</p>
   */
  ApplicationSettings?: ApplicationSettings;

  /**
   * <p>The list of interface VPC endpoint (interface endpoint) objects. Users of the stack can connect to AppStream 2.0 only through the specified endpoints.</p>
   */
  AccessEndpoints?: AccessEndpoint[];

  /**
   * <p>The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions. </p>
   */
  EmbedHostDomains?: string[];
}

export namespace UpdateStackRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStackRequest): any => ({
    ...obj,
  });
}

export interface UpdateStackResult {
  /**
   * <p>Information about the stack.</p>
   */
  Stack?: Stack;
}

export namespace UpdateStackResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStackResult): any => ({
    ...obj,
  });
}
