// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AppStreamServiceException as __BaseException } from "./AppStreamServiceException";

/**
 * @public
 * @enum
 */
export const AccessEndpointType = {
  STREAMING: "STREAMING",
} as const;

/**
 * @public
 */
export type AccessEndpointType = (typeof AccessEndpointType)[keyof typeof AccessEndpointType];

/**
 * <p>Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and WorkSpaces Applications. When you specify an interface endpoint for a stack, users of the stack can connect to WorkSpaces Applications only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint.</p>
 * @public
 */
export interface AccessEndpoint {
  /**
   * <p>The type of interface endpoint.</p>
   * @public
   */
  EndpointType: AccessEndpointType | undefined;

  /**
   * <p>The identifier (ID) of the VPC in which the interface endpoint is used.</p>
   * @public
   */
  VpceId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Action = {
  AUTO_TIME_ZONE_REDIRECTION: "AUTO_TIME_ZONE_REDIRECTION",
  CLIPBOARD_COPY_FROM_LOCAL_DEVICE: "CLIPBOARD_COPY_FROM_LOCAL_DEVICE",
  CLIPBOARD_COPY_TO_LOCAL_DEVICE: "CLIPBOARD_COPY_TO_LOCAL_DEVICE",
  DOMAIN_PASSWORD_SIGNIN: "DOMAIN_PASSWORD_SIGNIN",
  DOMAIN_SMART_CARD_SIGNIN: "DOMAIN_SMART_CARD_SIGNIN",
  FILE_DOWNLOAD: "FILE_DOWNLOAD",
  FILE_UPLOAD: "FILE_UPLOAD",
  PRINTING_TO_LOCAL_DEVICE: "PRINTING_TO_LOCAL_DEVICE",
} as const;

/**
 * @public
 */
export type Action = (typeof Action)[keyof typeof Action];

/**
 * <p>The collection of license usage records.</p>
 * @public
 */
export interface AdminAppLicenseUsageRecord {
  /**
   * <p>The ARN of the user who used the license-included application.</p>
   * @public
   */
  UserArn: string | undefined;

  /**
   * <p>The billing period for the license usage record.</p>
   * @public
   */
  BillingPeriod: string | undefined;

  /**
   * <p>The account ID of the owner of the license.</p>
   * @public
   */
  OwnerAWSAccountId: string | undefined;

  /**
   * <p>The date and time when the license was first used.</p>
   * @public
   */
  SubscriptionFirstUsedDate: Date | undefined;

  /**
   * <p>The date and time when the license was last used.</p>
   * @public
   */
  SubscriptionLastUsedDate: Date | undefined;

  /**
   * <p>The type of license (for example, Microsoft Office).</p>
   * @public
   */
  LicenseType: string | undefined;

  /**
   * <p>The ID of the user who used the license-included application.</p>
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AgentSoftwareVersion = {
  ALWAYS_LATEST: "ALWAYS_LATEST",
  CURRENT_LATEST: "CURRENT_LATEST",
} as const;

/**
 * @public
 */
export type AgentSoftwareVersion = (typeof AgentSoftwareVersion)[keyof typeof AgentSoftwareVersion];

/**
 * <p>The error details.</p>
 * @public
 */
export interface ErrorDetails {
  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PackagingType = {
  APPSTREAM2: "APPSTREAM2",
  CUSTOM: "CUSTOM",
} as const;

/**
 * @public
 */
export type PackagingType = (typeof PackagingType)[keyof typeof PackagingType];

/**
 * <p>Describes the S3 location.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The S3 bucket of the S3 object.</p>
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * <p>The S3 key of the S3 object.</p>
   *          <p>This is required when used for the following:</p>
   *          <ul>
   *             <li>
   *                <p>IconS3Location (Actions: CreateApplication and UpdateApplication)</p>
   *             </li>
   *             <li>
   *                <p>SessionScriptS3Location (Actions: CreateFleet and UpdateFleet)</p>
   *             </li>
   *             <li>
   *                <p>ScriptDetails (Actions: CreateAppBlock)</p>
   *             </li>
   *             <li>
   *                <p>SourceS3Location when creating an app block with <code>CUSTOM</code> PackagingType (Actions:
   *                     CreateAppBlock)</p>
   *             </li>
   *             <li>
   *                <p>SourceS3Location when creating an app block with <code>APPSTREAM2</code> PackagingType, and
   *                     using an existing application package (VHD file). In this case,
   *                         <code>S3Key</code> refers to the VHD file. If a new application package is
   *                     required, then <code>S3Key</code> is not required. (Actions:
   *                     CreateAppBlock)</p>
   *             </li>
   *          </ul>
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * <p>Describes the details of the script.</p>
 * @public
 */
export interface ScriptDetails {
  /**
   * <p>The S3 object location for the script.</p>
   * @public
   */
  ScriptS3Location: S3Location | undefined;

  /**
   * <p>The run path for the script.</p>
   * @public
   */
  ExecutablePath: string | undefined;

  /**
   * <p>The runtime parameters passed to the run path for the script.</p>
   * @public
   */
  ExecutableParameters?: string | undefined;

  /**
   * <p>The run timeout, in seconds, for the script.</p>
   * @public
   */
  TimeoutInSeconds: number | undefined;
}

/**
 * @public
 * @enum
 */
export const AppBlockState = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type AppBlockState = (typeof AppBlockState)[keyof typeof AppBlockState];

/**
 * <p>Describes an app block.</p>
 *          <p>App blocks are a WorkSpaces Applications resource that stores the details about the
 *            virtual hard disk in an S3 bucket. It also stores the setup script with details about
 *            how to mount the virtual hard disk. The virtual hard disk includes the application
 *            binaries and other files necessary to launch your applications. Multiple applications
 *            can be assigned to a single app block.</p>
 *          <p>This is only supported for Elastic fleets.</p>
 * @public
 */
export interface AppBlock {
  /**
   * <p>The name of the app block.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ARN of the app block.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The description of the app block.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The display name of the app block.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The source S3 location of the app block.</p>
   * @public
   */
  SourceS3Location?: S3Location | undefined;

  /**
   * <p>The setup script details of the app block.</p>
   *          <p>This only applies to app blocks with PackagingType <code>CUSTOM</code>.</p>
   * @public
   */
  SetupScriptDetails?: ScriptDetails | undefined;

  /**
   * <p>The created time of the app block.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The post setup script details of the app block.</p>
   *          <p>This only applies to app blocks with PackagingType <code>APPSTREAM2</code>.</p>
   * @public
   */
  PostSetupScriptDetails?: ScriptDetails | undefined;

  /**
   * <p>The packaging type of the app block.</p>
   * @public
   */
  PackagingType?: PackagingType | undefined;

  /**
   * <p>The state of the app block.</p>
   *          <p>An app block with WorkSpaces Applications packaging will be in the <code>INACTIVE</code> state
   *             if no application package (VHD) is assigned to it. After an application package (VHD) is
   *             created by an app block builder for an app block, it becomes <code>ACTIVE</code>. </p>
   *          <p>Custom app blocks are always in the <code>ACTIVE</code> state and no action is required to use them.</p>
   * @public
   */
  State?: AppBlockState | undefined;

  /**
   * <p>The errors of the app block.</p>
   * @public
   */
  AppBlockErrors?: ErrorDetails[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FleetErrorCode = {
  DOMAIN_JOIN_ERROR_ACCESS_DENIED: "DOMAIN_JOIN_ERROR_ACCESS_DENIED",
  DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED: "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED",
  DOMAIN_JOIN_ERROR_FILE_NOT_FOUND: "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND",
  DOMAIN_JOIN_ERROR_INVALID_PARAMETER: "DOMAIN_JOIN_ERROR_INVALID_PARAMETER",
  DOMAIN_JOIN_ERROR_LOGON_FAILURE: "DOMAIN_JOIN_ERROR_LOGON_FAILURE",
  DOMAIN_JOIN_ERROR_MORE_DATA: "DOMAIN_JOIN_ERROR_MORE_DATA",
  DOMAIN_JOIN_ERROR_NOT_SUPPORTED: "DOMAIN_JOIN_ERROR_NOT_SUPPORTED",
  DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN: "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN",
  DOMAIN_JOIN_INTERNAL_SERVICE_ERROR: "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR",
  DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME: "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME",
  DOMAIN_JOIN_NERR_PASSWORD_EXPIRED: "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED",
  DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED: "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED",
  FLEET_INSTANCE_PROVISIONING_FAILURE: "FLEET_INSTANCE_PROVISIONING_FAILURE",
  FLEET_STOPPED: "FLEET_STOPPED",
  IAM_SERVICE_ROLE_IS_MISSING: "IAM_SERVICE_ROLE_IS_MISSING",
  IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION: "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION",
  IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION: "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION",
  IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION: "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION",
  IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION: "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION",
  IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION: "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION",
  IGW_NOT_ATTACHED: "IGW_NOT_ATTACHED",
  IMAGE_NOT_FOUND: "IMAGE_NOT_FOUND",
  INTERNAL_SERVICE_ERROR: "INTERNAL_SERVICE_ERROR",
  INVALID_SUBNET_CONFIGURATION: "INVALID_SUBNET_CONFIGURATION",
  MACHINE_ROLE_IS_MISSING: "MACHINE_ROLE_IS_MISSING",
  NETWORK_INTERFACE_LIMIT_EXCEEDED: "NETWORK_INTERFACE_LIMIT_EXCEEDED",
  SECURITY_GROUPS_NOT_FOUND: "SECURITY_GROUPS_NOT_FOUND",
  STS_DISABLED_IN_REGION: "STS_DISABLED_IN_REGION",
  SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES: "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES",
  SUBNET_NOT_FOUND: "SUBNET_NOT_FOUND",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

/**
 * @public
 */
export type FleetErrorCode = (typeof FleetErrorCode)[keyof typeof FleetErrorCode];

/**
 * <p>Describes a resource error.</p>
 * @public
 */
export interface ResourceError {
  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: FleetErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The time the error occurred.</p>
   * @public
   */
  ErrorTimestamp?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const AppBlockBuilderPlatformType = {
  WINDOWS_SERVER_2019: "WINDOWS_SERVER_2019",
} as const;

/**
 * @public
 */
export type AppBlockBuilderPlatformType =
  (typeof AppBlockBuilderPlatformType)[keyof typeof AppBlockBuilderPlatformType];

/**
 * @public
 * @enum
 */
export const AppBlockBuilderState = {
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type AppBlockBuilderState = (typeof AppBlockBuilderState)[keyof typeof AppBlockBuilderState];

/**
 * @public
 * @enum
 */
export const AppBlockBuilderStateChangeReasonCode = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;

/**
 * @public
 */
export type AppBlockBuilderStateChangeReasonCode =
  (typeof AppBlockBuilderStateChangeReasonCode)[keyof typeof AppBlockBuilderStateChangeReasonCode];

/**
 * <p>Describes the reason why the last app block builder state change occurred.</p>
 * @public
 */
export interface AppBlockBuilderStateChangeReason {
  /**
   * <p>The state change reason code.</p>
   * @public
   */
  Code?: AppBlockBuilderStateChangeReasonCode | undefined;

  /**
   * <p>The state change reason message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Describes VPC configuration information for fleets and image builders.</p>
 * @public
 */
export interface VpcConfig {
  /**
   * <p>The identifiers of the subnets to which a network interface is attached from the fleet instance or image builder instance. Fleet instances use one or more subnets. Image builder instances use one subnet.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The identifiers of the security groups for the fleet or image builder.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * <p>Describes an app block builder.</p>
 * @public
 */
export interface AppBlockBuilder {
  /**
   * <p>The ARN of the app block builder.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the app block builder.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The display name of the app block builder.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The description of the app block builder.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The platform of the app block builder.</p>
   *          <p>
   *             <code>WINDOWS_SERVER_2019</code> is the only valid value.</p>
   * @public
   */
  Platform: AppBlockBuilderPlatformType | undefined;

  /**
   * <p>The instance type of the app block builder.</p>
   * @public
   */
  InstanceType: string | undefined;

  /**
   * <p>Indicates whether default internet access is enabled for the app block builder.</p>
   * @public
   */
  EnableDefaultInternetAccess?: boolean | undefined;

  /**
   * <p>The ARN of the IAM role that is applied to the app block builder.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The VPC configuration for the app block builder.</p>
   * @public
   */
  VpcConfig: VpcConfig | undefined;

  /**
   * <p>The state of the app block builder.</p>
   * @public
   */
  State: AppBlockBuilderState | undefined;

  /**
   * <p>The creation time of the app block builder.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The app block builder errors.</p>
   * @public
   */
  AppBlockBuilderErrors?: ResourceError[] | undefined;

  /**
   * <p>The state change reason.</p>
   * @public
   */
  StateChangeReason?: AppBlockBuilderStateChangeReason | undefined;

  /**
   * <p>The list of interface VPC endpoint (interface endpoint) objects. Administrators can connect to the app block builder only through the specified endpoints.</p>
   * @public
   */
  AccessEndpoints?: AccessEndpoint[] | undefined;
}

/**
 * <p>Describes an association between an app block builder and app block.</p>
 * @public
 */
export interface AppBlockBuilderAppBlockAssociation {
  /**
   * <p>The ARN of the app block.</p>
   * @public
   */
  AppBlockArn: string | undefined;

  /**
   * <p>The name of the app block builder.</p>
   * @public
   */
  AppBlockBuilderName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AppBlockBuilderAttribute = {
  ACCESS_ENDPOINTS: "ACCESS_ENDPOINTS",
  IAM_ROLE_ARN: "IAM_ROLE_ARN",
  VPC_CONFIGURATION_SECURITY_GROUP_IDS: "VPC_CONFIGURATION_SECURITY_GROUP_IDS",
} as const;

/**
 * @public
 */
export type AppBlockBuilderAttribute = (typeof AppBlockBuilderAttribute)[keyof typeof AppBlockBuilderAttribute];

/**
 * <p>Configuration for an application in the imported image's application catalog. This structure defines how applications appear and launch for users.</p>
 * @public
 */
export interface ApplicationConfig {
  /**
   * <p>The name of the application. This is a required field that must be unique within the application catalog and between 1-100 characters, matching the pattern ^[a-zA-Z0-9][a-zA-Z0-9_.-]\{0,99\}$.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The display name shown to users for this application. This field is optional and can be 0-100 characters, matching the pattern ^[a-zA-Z0-9][a-zA-Z0-9_. -]\{0,99\}$.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The absolute path to the executable file that launches the application. This is a required field that can be 1-32767 characters to support Windows extended file paths. Use escaped file path strings like "C:\\\\Windows\\\\System32\\\\notepad.exe".</p>
   * @public
   */
  AbsoluteAppPath: string | undefined;

  /**
   * <p>The absolute path to the icon file for the application. This field is optional and can be 1-32767 characters. If not provided, the icon is derived from the executable. Use PNG images with proper transparency for the best user experience.</p>
   * @public
   */
  AbsoluteIconPath?: string | undefined;

  /**
   * <p>The absolute path to the prewarm manifest file for this application. This field is optional and only applicable when using application-specific manifests. The path can be 1-32767 characters and should point to a text file containing file paths to prewarm.</p>
   * @public
   */
  AbsoluteManifestPath?: string | undefined;

  /**
   * <p>The working directory to use when launching the application. This field is optional and can be 0-32767 characters. Use escaped file path strings like "C:\\\\Path\\\\To\\\\Working\\\\Directory".</p>
   * @public
   */
  WorkingDirectory?: string | undefined;

  /**
   * <p>The launch parameters to pass to the application executable. This field is optional and can be 0-1024 characters. Use escaped strings with the full list of required parameters, such as PowerShell script paths or command-line arguments.</p>
   * @public
   */
  LaunchParameters?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PlatformType = {
  AMAZON_LINUX2: "AMAZON_LINUX2",
  RHEL8: "RHEL8",
  ROCKY_LINUX8: "ROCKY_LINUX8",
  WINDOWS: "WINDOWS",
  WINDOWS_SERVER_2016: "WINDOWS_SERVER_2016",
  WINDOWS_SERVER_2019: "WINDOWS_SERVER_2019",
  WINDOWS_SERVER_2022: "WINDOWS_SERVER_2022",
} as const;

/**
 * @public
 */
export type PlatformType = (typeof PlatformType)[keyof typeof PlatformType];

/**
 * <p>Describes an application in the application catalog.</p>
 * @public
 */
export interface Application {
  /**
   * <p>The name of the application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The application name to display.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The URL for the application icon. This URL might be time-limited.</p>
   * @public
   */
  IconURL?: string | undefined;

  /**
   * <p>The path to the application executable in the instance.</p>
   * @public
   */
  LaunchPath?: string | undefined;

  /**
   * <p>The arguments that are passed to the application at launch.</p>
   * @public
   */
  LaunchParameters?: string | undefined;

  /**
   * <p>If there is a problem, the application can be disabled after image creation.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Additional attributes that describe the application.</p>
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * <p>The working directory for the application.</p>
   * @public
   */
  WorkingDirectory?: string | undefined;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the application.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The app block ARN of the application.</p>
   * @public
   */
  AppBlockArn?: string | undefined;

  /**
   * <p>The S3 location of the application icon.</p>
   * @public
   */
  IconS3Location?: S3Location | undefined;

  /**
   * <p>The platforms on which the application can run.</p>
   * @public
   */
  Platforms?: PlatformType[] | undefined;

  /**
   * <p>The instance families for the application.</p>
   * @public
   */
  InstanceFamilies?: string[] | undefined;

  /**
   * <p>The time at which the application was created within the app block.</p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ApplicationAttribute = {
  LAUNCH_PARAMETERS: "LAUNCH_PARAMETERS",
  WORKING_DIRECTORY: "WORKING_DIRECTORY",
} as const;

/**
 * @public
 */
export type ApplicationAttribute = (typeof ApplicationAttribute)[keyof typeof ApplicationAttribute];

/**
 * <p>Describes the application fleet association.</p>
 * @public
 */
export interface ApplicationFleetAssociation {
  /**
   * <p>The name of the fleet associated with the application.</p>
   * @public
   */
  FleetName: string | undefined;

  /**
   * <p>The ARN of the application associated with the fleet.</p>
   * @public
   */
  ApplicationArn: string | undefined;
}

/**
 * <p>The persistent application settings for users of a stack.</p>
 * @public
 */
export interface ApplicationSettings {
  /**
   * <p>Enables or disables persistent application settings for users during their streaming sessions. </p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>The path prefix for the S3 bucket where users’ persistent application settings are stored. You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack. </p>
   * @public
   */
  SettingsGroup?: string | undefined;
}

/**
 * <p>Describes the persistent application settings for users of a stack.</p>
 * @public
 */
export interface ApplicationSettingsResponse {
  /**
   * <p>Specifies whether persistent application settings are enabled for users during their streaming sessions.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The path prefix for the S3 bucket where users’ persistent application settings are stored.</p>
   * @public
   */
  SettingsGroup?: string | undefined;

  /**
   * <p>The S3 bucket where users’ persistent application settings are stored. When persistent application settings are enabled for the first time for an account in an AWS Region, an S3 bucket is created. The bucket is unique to the AWS account and the Region.
   *         </p>
   * @public
   */
  S3BucketName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AppVisibility = {
  ALL: "ALL",
  ASSOCIATED: "ASSOCIATED",
} as const;

/**
 * @public
 */
export type AppVisibility = (typeof AppVisibility)[keyof typeof AppVisibility];

/**
 * @public
 */
export interface AssociateAppBlockBuilderAppBlockRequest {
  /**
   * <p>The ARN of the app block.</p>
   * @public
   */
  AppBlockArn: string | undefined;

  /**
   * <p>The name of the app block builder.</p>
   * @public
   */
  AppBlockBuilderName: string | undefined;
}

/**
 * @public
 */
export interface AssociateAppBlockBuilderAppBlockResult {
  /**
   * <p>The list of app block builders associated with app blocks.</p>
   * @public
   */
  AppBlockBuilderAppBlockAssociation?: AppBlockBuilderAppBlockAssociation | undefined;
}

/**
 * <p>An API error occurred. Wait a few minutes and try again.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message in the exception.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 * @public
 */
export class InvalidParameterCombinationException extends __BaseException {
  readonly name: "InvalidParameterCombinationException" = "InvalidParameterCombinationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message in the exception.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterCombinationException, __BaseException>) {
    super({
      name: "InvalidParameterCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterCombinationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested limit exceeds the permitted limit for an account.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message in the exception.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The attempted operation is not permitted.</p>
 * @public
 */
export class OperationNotPermittedException extends __BaseException {
  readonly name: "OperationNotPermittedException" = "OperationNotPermittedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message in the exception.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotPermittedException, __BaseException>) {
    super({
      name: "OperationNotPermittedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotPermittedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message in the exception.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface AssociateApplicationFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  FleetName: string | undefined;

  /**
   * <p>The ARN of the application.</p>
   * @public
   */
  ApplicationArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateApplicationFleetResult {
  /**
   * <p>If fleet name is specified, this returns the list of applications that are associated
   *             to it. If application ARN is specified, this returns the list of fleets to which it is
   *             associated.</p>
   * @public
   */
  ApplicationFleetAssociation?: ApplicationFleetAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateApplicationToEntitlementRequest {
  /**
   * <p>The name of the stack.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The name of the entitlement.</p>
   * @public
   */
  EntitlementName: string | undefined;

  /**
   * <p>The identifier of the application.</p>
   * @public
   */
  ApplicationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface AssociateApplicationToEntitlementResult {}

/**
 * <p>The entitlement can't be found.</p>
 * @public
 */
export class EntitlementNotFoundException extends __BaseException {
  readonly name: "EntitlementNotFoundException" = "EntitlementNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message in the exception.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntitlementNotFoundException, __BaseException>) {
    super({
      name: "EntitlementNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntitlementNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface AssociateFleetRequest {
  /**
   * <p>The name of the fleet. </p>
   * @public
   */
  FleetName: string | undefined;

  /**
   * <p>The name of the stack.</p>
   * @public
   */
  StackName: string | undefined;
}

/**
 * @public
 */
export interface AssociateFleetResult {}

/**
 * <p>The image can't be updated because it's not compatible for updates.</p>
 * @public
 */
export class IncompatibleImageException extends __BaseException {
  readonly name: "IncompatibleImageException" = "IncompatibleImageException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message in the exception.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleImageException, __BaseException>) {
    super({
      name: "IncompatibleImageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleImageException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 * @public
 */
export class InvalidAccountStatusException extends __BaseException {
  readonly name: "InvalidAccountStatusException" = "InvalidAccountStatusException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message in the exception.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAccountStatusException, __BaseException>) {
    super({
      name: "InvalidAccountStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAccountStatusException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface AssociateSoftwareToImageBuilderRequest {
  /**
   * <p>The name of the target image builder instance.</p>
   * @public
   */
  ImageBuilderName: string | undefined;

  /**
   * <p>The list of license included applications to associate with the image builder.</p>
   *          <p>Possible values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Professional_Plus_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Professional_Plus_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Professional_Plus_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Professional_Plus_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Standard_64Bit</p>
   *             </li>
   *          </ul>
   * @public
   */
  SoftwareNames: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateSoftwareToImageBuilderResult {}

/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  API: "API",
  AWS_AD: "AWS_AD",
  SAML: "SAML",
  USERPOOL: "USERPOOL",
} as const;

/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * <p>Describes a user in the user pool and the associated stack.</p>
 * @public
 */
export interface UserStackAssociation {
  /**
   * <p>The name of the stack that is associated with the user.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The email address of the user who is associated with the stack.</p>
   *          <note>
   *             <p>Users' email addresses are case-sensitive.</p>
   *          </note>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The authentication type for the user.</p>
   * @public
   */
  AuthenticationType: AuthenticationType | undefined;

  /**
   * <p>Specifies whether a welcome email is sent to a user after the user is created in the user pool.</p>
   * @public
   */
  SendEmailNotification?: boolean | undefined;
}

/**
 * @public
 */
export interface BatchAssociateUserStackRequest {
  /**
   * <p>The list of UserStackAssociation objects.</p>
   * @public
   */
  UserStackAssociations: UserStackAssociation[] | undefined;
}

/**
 * @public
 * @enum
 */
export const UserStackAssociationErrorCode = {
  DIRECTORY_NOT_FOUND: "DIRECTORY_NOT_FOUND",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  STACK_NOT_FOUND: "STACK_NOT_FOUND",
  USER_NAME_NOT_FOUND: "USER_NAME_NOT_FOUND",
} as const;

/**
 * @public
 */
export type UserStackAssociationErrorCode =
  (typeof UserStackAssociationErrorCode)[keyof typeof UserStackAssociationErrorCode];

/**
 * <p>Describes the error that is returned when a user can’t be associated with or disassociated from a stack. </p>
 * @public
 */
export interface UserStackAssociationError {
  /**
   * <p>Information about the user and associated stack.</p>
   * @public
   */
  UserStackAssociation?: UserStackAssociation | undefined;

  /**
   * <p>The error code for the error that is returned when a user can’t be associated with or disassociated from a stack.</p>
   * @public
   */
  ErrorCode?: UserStackAssociationErrorCode | undefined;

  /**
   * <p>The error message for the error that is returned when a user can’t be associated with or disassociated from a stack.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateUserStackResult {
  /**
   * <p>The list of UserStackAssociationError objects.</p>
   * @public
   */
  errors?: UserStackAssociationError[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateUserStackRequest {
  /**
   * <p>The list of UserStackAssociation objects.</p>
   * @public
   */
  UserStackAssociations: UserStackAssociation[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateUserStackResult {
  /**
   * <p>The list of UserStackAssociationError objects.</p>
   * @public
   */
  errors?: UserStackAssociationError[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CertificateBasedAuthStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ENABLED_NO_DIRECTORY_LOGIN_FALLBACK: "ENABLED_NO_DIRECTORY_LOGIN_FALLBACK",
} as const;

/**
 * @public
 */
export type CertificateBasedAuthStatus = (typeof CertificateBasedAuthStatus)[keyof typeof CertificateBasedAuthStatus];

/**
 * <p>The certificate-based authentication properties used to authenticate SAML 2.0 Identity
 *             Provider (IdP) user identities to Active Directory domain-joined streaming instances.
 *             Fallback is turned on by default when certificate-based authentication is <b>Enabled</b> . Fallback allows users to log in using their AD
 *             domain password if certificate-based authentication is unsuccessful, or to unlock a
 *             desktop lock screen. <b>Enabled_no_directory_login_fallback</b> enables certificate-based
 *             authentication, but does not allow users to log in using their AD domain password. Users
 *             will be disconnected to re-authenticate using certificates.</p>
 * @public
 */
export interface CertificateBasedAuthProperties {
  /**
   * <p>The status of the certificate-based authentication properties.</p>
   * @public
   */
  Status?: CertificateBasedAuthStatus | undefined;

  /**
   * <p>The ARN of the AWS Certificate Manager Private CA resource.</p>
   * @public
   */
  CertificateAuthorityArn?: string | undefined;
}

/**
 * <p>Describes the capacity for a fleet.</p>
 * @public
 */
export interface ComputeCapacity {
  /**
   * <p>The desired number of streaming instances.</p>
   * @public
   */
  DesiredInstances?: number | undefined;

  /**
   * <p>The desired number of user sessions for a multi-session fleet. This is not allowed for single-session fleets.</p>
   *          <p>When you create a fleet, you must set either the DesiredSessions or DesiredInstances attribute, based on the type of fleet you create. You can’t define both attributes or leave both attributes blank.</p>
   * @public
   */
  DesiredSessions?: number | undefined;
}

/**
 * <p>Describes the capacity status for a fleet.</p>
 * @public
 */
export interface ComputeCapacityStatus {
  /**
   * <p>The desired number of streaming instances.</p>
   * @public
   */
  Desired: number | undefined;

  /**
   * <p>The total number of simultaneous streaming instances that are running.</p>
   * @public
   */
  Running?: number | undefined;

  /**
   * <p>The number of instances in use for streaming.</p>
   * @public
   */
  InUse?: number | undefined;

  /**
   * <p>The number of currently available instances that can be used to stream
   *             sessions.</p>
   * @public
   */
  Available?: number | undefined;

  /**
   * <p>The total number of sessions slots that are either running or pending. This represents the total number of concurrent streaming sessions your fleet can support in a steady state.</p>
   *          <p>DesiredUserSessionCapacity = ActualUserSessionCapacity + PendingUserSessionCapacity</p>
   *          <p>This only applies to multi-session fleets.</p>
   * @public
   */
  DesiredUserSessions?: number | undefined;

  /**
   * <p>The number of idle session slots currently available for user sessions.</p>
   *          <p>AvailableUserSessionCapacity = ActualUserSessionCapacity - ActiveUserSessions</p>
   *          <p>This only applies to multi-session fleets.</p>
   * @public
   */
  AvailableUserSessions?: number | undefined;

  /**
   * <p>The number of user sessions currently being used for streaming sessions. This only applies to multi-session fleets.</p>
   * @public
   */
  ActiveUserSessions?: number | undefined;

  /**
   * <p>The total number of session slots that are available for streaming or are currently streaming.</p>
   *          <p>ActualUserSessionCapacity = AvailableUserSessionCapacity + ActiveUserSessions</p>
   *          <p>This only applies to multi-session fleets.</p>
   * @public
   */
  ActualUserSessions?: number | undefined;
}

/**
 * @public
 */
export interface CopyImageRequest {
  /**
   * <p>The name of the image to copy.</p>
   * @public
   */
  SourceImageName: string | undefined;

  /**
   * <p>The name that the image will have when it is copied to the destination.</p>
   * @public
   */
  DestinationImageName: string | undefined;

  /**
   * <p>The destination region to which the image will be copied. This parameter is required, even if you are copying an image within the same region.</p>
   * @public
   */
  DestinationRegion: string | undefined;

  /**
   * <p>The description that the image will have when it is copied to the destination.</p>
   * @public
   */
  DestinationImageDescription?: string | undefined;
}

/**
 * @public
 */
export interface CopyImageResponse {
  /**
   * <p>The name of the destination image.</p>
   * @public
   */
  DestinationImageName?: string | undefined;
}

/**
 * <p>The specified resource already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message in the exception.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource exists and is not in use, but isn't available.</p>
 * @public
 */
export class ResourceNotAvailableException extends __BaseException {
  readonly name: "ResourceNotAvailableException" = "ResourceNotAvailableException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message in the exception.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotAvailableException, __BaseException>) {
    super({
      name: "ResourceNotAvailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotAvailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateAppBlockRequest {
  /**
   * <p>The name of the app block.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the app block.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The display name of the app block. This is not displayed to the user.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The source S3 location of the app block.</p>
   * @public
   */
  SourceS3Location: S3Location | undefined;

  /**
   * <p>The setup script details of the app block. This must be provided for the
   *                 <code>CUSTOM</code> PackagingType.</p>
   * @public
   */
  SetupScriptDetails?: ScriptDetails | undefined;

  /**
   * <p>The tags assigned to the app block.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The post setup script details of the app block. This can only be provided for the
   *                 <code>APPSTREAM2</code> PackagingType.</p>
   * @public
   */
  PostSetupScriptDetails?: ScriptDetails | undefined;

  /**
   * <p>The packaging type of the app block.</p>
   * @public
   */
  PackagingType?: PackagingType | undefined;
}

/**
 * @public
 */
export interface CreateAppBlockResult {
  /**
   * <p>The app block.</p>
   * @public
   */
  AppBlock?: AppBlock | undefined;
}

/**
 * @public
 */
export interface CreateAppBlockBuilderRequest {
  /**
   * <p>The unique name for the app block builder.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the app block builder.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The display name of the app block builder.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The tags to associate with the app block builder. A tag is a key-value pair, and the
   *             value is optional. For example, Environment=Test. If you do not specify a value,
   *             Environment=. </p>
   *          <p>If you do not specify a value, the value is set to an empty string.</p>
   *          <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p>
   *          <p>_ . : / = + \ - @</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon WorkSpaces Applications Administration Guide</i>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The platform of the app block builder.</p>
   *          <p>
   *             <code>WINDOWS_SERVER_2019</code> is the only valid value.</p>
   * @public
   */
  Platform: AppBlockBuilderPlatformType | undefined;

  /**
   * <p>The instance type to use when launching the app block builder. The following instance
   *             types are available:</p>
   *          <ul>
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
   *                <p>stream.standard.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.standard.2xlarge</p>
   *             </li>
   *          </ul>
   * @public
   */
  InstanceType: string | undefined;

  /**
   * <p>The VPC configuration for the app block builder.</p>
   *          <p>App block builders require that you specify at least two subnets in different availability
   *             zones.</p>
   * @public
   */
  VpcConfig: VpcConfig | undefined;

  /**
   * <p>Enables or disables default internet access for the app block builder.</p>
   * @public
   */
  EnableDefaultInternetAccess?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to apply to the app block builder. To
   *             assume a role, the app block builder calls the AWS Security Token Service (STS)
   *                 <code>AssumeRole</code> API operation and passes the ARN of the role to use. The
   *             operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the
   *             temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances</a> in the <i>Amazon WorkSpaces Applications Administration Guide</i>.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The list of interface VPC endpoint (interface endpoint) objects. Administrators can connect to the app block builder only through the specified endpoints.</p>
   * @public
   */
  AccessEndpoints?: AccessEndpoint[] | undefined;
}

/**
 * @public
 */
export interface CreateAppBlockBuilderResult {
  /**
   * <p>Describes an app block builder.</p>
   * @public
   */
  AppBlockBuilder?: AppBlockBuilder | undefined;
}

/**
 * <p>The specified role is invalid.</p>
 * @public
 */
export class InvalidRoleException extends __BaseException {
  readonly name: "InvalidRoleException" = "InvalidRoleException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message in the exception.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRoleException, __BaseException>) {
    super({
      name: "InvalidRoleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRoleException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>WorkSpaces Applications can’t process the request right now because the Describe calls from your AWS account are being throttled by Amazon EC2. Try again later.</p>
 * @public
 */
export class RequestLimitExceededException extends __BaseException {
  readonly name: "RequestLimitExceededException" = "RequestLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message in the exception.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestLimitExceededException, __BaseException>) {
    super({
      name: "RequestLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateAppBlockBuilderStreamingURLRequest {
  /**
   * <p>The name of the app block builder.</p>
   * @public
   */
  AppBlockBuilderName: string | undefined;

  /**
   * <p>The time that the streaming URL will be valid, in seconds.
   *             Specify a value between 1 and 604800 seconds. The default is 3600 seconds.</p>
   * @public
   */
  Validity?: number | undefined;
}

/**
 * @public
 */
export interface CreateAppBlockBuilderStreamingURLResult {
  /**
   * <p>The URL to start the streaming session.</p>
   * @public
   */
  StreamingURL?: string | undefined;

  /**
   * <p>The elapsed time, in seconds after the Unix epoch, when this URL expires.</p>
   * @public
   */
  Expires?: Date | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>The name of the application. This name is visible to users when display name is not specified.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The display name of the application. This name is visible to users in the application catalog.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The location in S3 of the application icon.</p>
   * @public
   */
  IconS3Location: S3Location | undefined;

  /**
   * <p>The launch path of the application.</p>
   * @public
   */
  LaunchPath: string | undefined;

  /**
   * <p>The working directory of the application.</p>
   * @public
   */
  WorkingDirectory?: string | undefined;

  /**
   * <p>The launch parameters of the application.</p>
   * @public
   */
  LaunchParameters?: string | undefined;

  /**
   * <p>The platforms the application supports. WINDOWS_SERVER_2019 and AMAZON_LINUX2 are supported for Elastic fleets.</p>
   * @public
   */
  Platforms: PlatformType[] | undefined;

  /**
   * <p>The instance families the application supports. Valid values are GENERAL_PURPOSE and GRAPHICS_G4.</p>
   * @public
   */
  InstanceFamilies: string[] | undefined;

  /**
   * <p>The app block ARN to which the application should be associated</p>
   * @public
   */
  AppBlockArn: string | undefined;

  /**
   * <p>The tags assigned to the application.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResult {
  /**
   * <p>Describes an application in the application catalog.</p>
   * @public
   */
  Application?: Application | undefined;
}

/**
 * <p>Describes the credentials for the service account used by the fleet or image builder to connect to the directory.</p>
 * @public
 */
export interface ServiceAccountCredentials {
  /**
   * <p>The user name of the account. This account must have the following privileges: create computer objects,
   *             join computers to the domain, and change/reset the password on descendant computer objects for the
   *             organizational units specified.</p>
   * @public
   */
  AccountName: string | undefined;

  /**
   * <p>The password for the account.</p>
   * @public
   */
  AccountPassword: string | undefined;
}

/**
 * @public
 */
export interface CreateDirectoryConfigRequest {
  /**
   * <p>The fully qualified name of the directory (for example, corp.example.com).</p>
   * @public
   */
  DirectoryName: string | undefined;

  /**
   * <p>The distinguished names of the organizational units for computer accounts.</p>
   * @public
   */
  OrganizationalUnitDistinguishedNames: string[] | undefined;

  /**
   * <p>The credentials for the service account used by the fleet or image builder to connect to the directory.</p>
   * @public
   */
  ServiceAccountCredentials?: ServiceAccountCredentials | undefined;

  /**
   * <p>The certificate-based authentication properties used to authenticate SAML 2.0 Identity
   *             Provider (IdP) user identities to Active Directory domain-joined streaming instances.
   *             Fallback is turned on by default when certificate-based authentication is <b>Enabled</b> . Fallback allows users to log in using their AD
   *             domain password if certificate-based authentication is unsuccessful, or to unlock a
   *             desktop lock screen. <b>Enabled_no_directory_login_fallback</b> enables certificate-based
   *             authentication, but does not allow users to log in using their AD domain password. Users
   *             will be disconnected to re-authenticate using certificates.</p>
   * @public
   */
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties | undefined;
}

/**
 * <p>Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
 * @public
 */
export interface DirectoryConfig {
  /**
   * <p>The fully qualified name of the directory (for example, corp.example.com).</p>
   * @public
   */
  DirectoryName: string | undefined;

  /**
   * <p>The distinguished names of the organizational units for computer accounts.</p>
   * @public
   */
  OrganizationalUnitDistinguishedNames?: string[] | undefined;

  /**
   * <p>The credentials for the service account used by the fleet or image builder to connect to the directory.</p>
   * @public
   */
  ServiceAccountCredentials?: ServiceAccountCredentials | undefined;

  /**
   * <p>The time the directory configuration was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The certificate-based authentication properties used to authenticate SAML 2.0 Identity
   *             Provider (IdP) user identities to Active Directory domain-joined streaming instances.
   *             Fallback is turned on by default when certificate-based authentication is <b>Enabled</b> . Fallback allows users to log in using their AD
   *             domain password if certificate-based authentication is unsuccessful, or to unlock a
   *             desktop lock screen. <b>Enabled_no_directory_login_fallback</b> enables certificate-based
   *             authentication, but does not allow users to log in using their AD domain password. Users
   *             will be disconnected to re-authenticate using certificates.</p>
   * @public
   */
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties | undefined;
}

/**
 * @public
 */
export interface CreateDirectoryConfigResult {
  /**
   * <p>Information about the directory configuration.</p>
   * @public
   */
  DirectoryConfig?: DirectoryConfig | undefined;
}

/**
 * <p>An attribute associated with an entitlement. Application entitlements work by matching
 *             a supported SAML 2.0 attribute name to a value when a user identity federates to a WorkSpaces Applications SAML application.</p>
 * @public
 */
export interface EntitlementAttribute {
  /**
   * <p>A supported AWS IAM SAML <code>PrincipalTag</code> attribute that is matched to the
   *             associated value when a user identity federates into a WorkSpaces Applications SAML
   *             application.</p>
   *          <p>The following are valid values:</p>
   *          <ul>
   *             <li>
   *                <p>roles</p>
   *             </li>
   *             <li>
   *                <p>department </p>
   *             </li>
   *             <li>
   *                <p>organization </p>
   *             </li>
   *             <li>
   *                <p>groups </p>
   *             </li>
   *             <li>
   *                <p>title </p>
   *             </li>
   *             <li>
   *                <p>costCenter </p>
   *             </li>
   *             <li>
   *                <p>userType</p>
   *             </li>
   *          </ul>
   *          <p> </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A value that is matched to a supported SAML attribute name when a user identity
   *             federates into a WorkSpaces Applications SAML application. </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateEntitlementRequest {
  /**
   * <p>The name of the entitlement.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the stack with which the entitlement is associated.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The description of the entitlement.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies whether all or selected apps are entitled.</p>
   * @public
   */
  AppVisibility: AppVisibility | undefined;

  /**
   * <p>The attributes of the entitlement.</p>
   * @public
   */
  Attributes: EntitlementAttribute[] | undefined;
}

/**
 * <p>Specifies an entitlement. Entitlements control access to specific applications within
 *             a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user
 *             identities. WorkSpaces Applications user pool and streaming URL users are entitled to all
 *             applications in a stack. Entitlements don't apply to the desktop stream view
 *             application, or to applications managed by a dynamic app provider using the Dynamic
 *             Application Framework.</p>
 * @public
 */
export interface Entitlement {
  /**
   * <p>The name of the entitlement.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the stack with which the entitlement is associated.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The description of the entitlement.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies whether all or selected apps are entitled.</p>
   * @public
   */
  AppVisibility: AppVisibility | undefined;

  /**
   * <p>The attributes of the entitlement.</p>
   * @public
   */
  Attributes: EntitlementAttribute[] | undefined;

  /**
   * <p>The time when the entitlement was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The time when the entitlement was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateEntitlementResult {
  /**
   * <p>The entitlement.</p>
   * @public
   */
  Entitlement?: Entitlement | undefined;
}

/**
 * <p>The entitlement already exists.</p>
 * @public
 */
export class EntitlementAlreadyExistsException extends __BaseException {
  readonly name: "EntitlementAlreadyExistsException" = "EntitlementAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message in the exception.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntitlementAlreadyExistsException, __BaseException>) {
    super({
      name: "EntitlementAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntitlementAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateExportImageTaskRequest {
  /**
   * <p>The name of the WorkSpaces Applications image to export. The image must be in an available state and owned by your account.</p>
   * @public
   */
  ImageName: string | undefined;

  /**
   * <p>The name for the exported EC2 AMI. This is a required field that must be unique within your account and region.</p>
   * @public
   */
  AmiName: string | undefined;

  /**
   * <p>The ARN of the IAM role that allows WorkSpaces Applications to create the AMI. The role must have permissions to copy images, describe images, and create tags, with a trust relationship allowing appstream.amazonaws.com to assume the role.</p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The tags to apply to the exported AMI. These tags help you organize and manage your EC2 AMIs.</p>
   * @public
   */
  TagSpecifications?: Record<string, string> | undefined;

  /**
   * <p>An optional description for the exported AMI. This description will be applied to the resulting EC2 AMI.</p>
   * @public
   */
  AmiDescription?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportImageTaskState = {
  COMPLETED: "COMPLETED",
  EXPORTING: "EXPORTING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type ExportImageTaskState = (typeof ExportImageTaskState)[keyof typeof ExportImageTaskState];

/**
 * <p>Information about an export image task, including its current state, timestamps, and any error details.</p>
 * @public
 */
export interface ExportImageTask {
  /**
   * <p>The unique identifier for the export image task. Use this ID to track the task's progress and retrieve its details.</p>
   * @public
   */
  TaskId: string | undefined;

  /**
   * <p>The ARN of the WorkSpaces Applications image being exported.</p>
   * @public
   */
  ImageArn: string | undefined;

  /**
   * <p>The name of the EC2 AMI that will be created by this export task.</p>
   * @public
   */
  AmiName: string | undefined;

  /**
   * <p>The date and time when the export image task was created.</p>
   * @public
   */
  CreatedDate: Date | undefined;

  /**
   * <p>The description that will be applied to the exported EC2 AMI.</p>
   * @public
   */
  AmiDescription?: string | undefined;

  /**
   * <p>The current state of the export image task, such as PENDING, RUNNING, COMPLETED, or FAILED.</p>
   * @public
   */
  State?: ExportImageTaskState | undefined;

  /**
   * <p>The ID of the EC2 AMI that was created by this export task. This field is only populated when the task completes successfully.</p>
   * @public
   */
  AmiId?: string | undefined;

  /**
   * <p>The tags that will be applied to the exported EC2 AMI.</p>
   * @public
   */
  TagSpecifications?: Record<string, string> | undefined;

  /**
   * <p>Details about any errors that occurred during the export process. This field is only populated when the task fails.</p>
   * @public
   */
  ErrorDetails?: ErrorDetails[] | undefined;
}

/**
 * @public
 */
export interface CreateExportImageTaskResult {
  /**
   * <p>Information about the export image task that was created, including the task ID and initial state.</p>
   * @public
   */
  ExportImageTask?: ExportImageTask | undefined;
}

/**
 * <p>Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
 * @public
 */
export interface DomainJoinInfo {
  /**
   * <p>The fully qualified name of the directory (for example, corp.example.com).</p>
   * @public
   */
  DirectoryName?: string | undefined;

  /**
   * <p>The distinguished name of the organizational unit for computer accounts.</p>
   * @public
   */
  OrganizationalUnitDistinguishedName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FleetType = {
  ALWAYS_ON: "ALWAYS_ON",
  ELASTIC: "ELASTIC",
  ON_DEMAND: "ON_DEMAND",
} as const;

/**
 * @public
 */
export type FleetType = (typeof FleetType)[keyof typeof FleetType];

/**
 * <p>Configuration for the root volume of fleet instances and image builders. This allows you to customize the storage capacity beyond the default 200 GB.</p>
 * @public
 */
export interface VolumeConfig {
  /**
   * <p>The size of the root volume in GB. Valid range is 200-500 GB. The default is 200 GB, which is included in the hourly instance rate. Additional storage beyond 200 GB incurs extra charges and applies to instances regardless of their running state.</p>
   * @public
   */
  VolumeSizeInGb?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const StreamView = {
  APP: "APP",
  DESKTOP: "DESKTOP",
} as const;

/**
 * @public
 */
export type StreamView = (typeof StreamView)[keyof typeof StreamView];

/**
 * @public
 */
export interface CreateFleetRequest {
  /**
   * <p>A unique name for the fleet.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the image used to create the fleet.</p>
   * @public
   */
  ImageName?: string | undefined;

  /**
   * <p>The ARN of the public, private, or shared image to use.</p>
   * @public
   */
  ImageArn?: string | undefined;

  /**
   * <p>The instance type to use when launching fleet instances. The following instance types are available:</p>
   *          <ul>
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
   *                <p>stream.standard.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.standard.2xlarge</p>
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
   *                <p>stream.graphics.g5.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.16xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.24xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.16xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.24xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.gr6.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.gr6.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.large</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.gr6f.4xlarge</p>
   *             </li>
   *          </ul>
   *          <p>The following instance types are available for Elastic fleets:</p>
   *          <ul>
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
   *                <p>stream.standard.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.standard.2xlarge</p>
   *             </li>
   *          </ul>
   * @public
   */
  InstanceType: string | undefined;

  /**
   * <p>The fleet type.</p>
   *          <dl>
   *             <dt>ALWAYS_ON</dt>
   *             <dd>
   *                <p>Provides users with instant-on access to their apps.
   *                         You are charged for all running instances in your fleet, even if no users are streaming apps.</p>
   *             </dd>
   *             <dt>ON_DEMAND</dt>
   *             <dd>
   *                <p>Provide users with access to applications after they connect, which takes one to two minutes.
   *                         You are charged for instance streaming when users are connected and a
   *                         small hourly fee for instances that are not streaming apps.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  FleetType?: FleetType | undefined;

  /**
   * <p>The desired capacity for the fleet. This is not allowed for Elastic fleets. For Elastic fleets, specify MaxConcurrentSessions instead.</p>
   * @public
   */
  ComputeCapacity?: ComputeCapacity | undefined;

  /**
   * <p>The VPC configuration for the fleet. This is required for Elastic fleets, but not required for other fleet types. Elastic fleets require that you specify at least two subnets in different availability zones.</p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.</p>
   *          <p>Specify a value between 600 and 432000.</p>
   * @public
   */
  MaxUserDurationInSeconds?: number | undefined;

  /**
   * <p>The amount of time that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance. </p>
   *          <p>Specify a value between 60 and 36000.</p>
   * @public
   */
  DisconnectTimeoutInSeconds?: number | undefined;

  /**
   * <p>The description to display.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The fleet name to display.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>Enables or disables default internet access for the fleet.</p>
   * @public
   */
  EnableDefaultInternetAccess?: boolean | undefined;

  /**
   * <p>The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. This is not allowed for Elastic fleets. </p>
   * @public
   */
  DomainJoinInfo?: DomainJoinInfo | undefined;

  /**
   * <p>The tags to associate with the fleet. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p>
   *          <p>If you do not specify a value, the value is set to an empty string.</p>
   *          <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p>
   *          <p>_ . : / = + \ - @</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon WorkSpaces Applications Administration Guide</i>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

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
   *          <p>To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 36000. The default value is 0.</p>
   *          <note>
   *             <p>If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity. </p>
   *          </note>
   * @public
   */
  IdleDisconnectTimeoutInSeconds?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to apply to the fleet. To assume a role, a fleet instance calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances</a> in the <i>Amazon WorkSpaces Applications Administration Guide</i>.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The WorkSpaces Applications view that is displayed to your users when they stream from the fleet. When <code>APP</code> is specified, only the windows of applications opened by users display. When <code>DESKTOP</code> is specified, the standard desktop that is provided by the operating system displays.</p>
   *          <p>The default value is <code>APP</code>.</p>
   * @public
   */
  StreamView?: StreamView | undefined;

  /**
   * <p>The fleet platform. WINDOWS_SERVER_2019 and AMAZON_LINUX2 are supported for Elastic
   *             fleets. </p>
   * @public
   */
  Platform?: PlatformType | undefined;

  /**
   * <p>The maximum concurrent sessions of the Elastic fleet. This is required for Elastic
   *             fleets, and not allowed for other fleet types.</p>
   * @public
   */
  MaxConcurrentSessions?: number | undefined;

  /**
   * <p>The USB device filter strings that specify which USB devices a user can redirect to the fleet streaming session, when using the Windows native client. This is allowed but not required for Elastic fleets.</p>
   * @public
   */
  UsbDeviceFilterStrings?: string[] | undefined;

  /**
   * <p>The S3 location of the session scripts configuration zip file. This only applies to Elastic fleets.</p>
   * @public
   */
  SessionScriptS3Location?: S3Location | undefined;

  /**
   * <p>The maximum number of user sessions on an instance. This only applies to multi-session fleets.</p>
   * @public
   */
  MaxSessionsPerInstance?: number | undefined;

  /**
   * <p>The configuration for the root volume of fleet instances. Use this to customize storage capacity from 200 GB up to 500 GB based on your application requirements.</p>
   * @public
   */
  RootVolumeConfig?: VolumeConfig | undefined;
}

/**
 * <p>Describes a fleet error.</p>
 * @public
 */
export interface FleetError {
  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: FleetErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FleetState = {
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type FleetState = (typeof FleetState)[keyof typeof FleetState];

/**
 * <p>Describes a fleet.</p>
 * @public
 */
export interface Fleet {
  /**
   * <p>The Amazon Resource Name (ARN) for the fleet.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The fleet name to display.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The description to display.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the image used to create the fleet.</p>
   * @public
   */
  ImageName?: string | undefined;

  /**
   * <p>The ARN for the public, private, or shared image.</p>
   * @public
   */
  ImageArn?: string | undefined;

  /**
   * <p>The instance type to use when launching fleet instances. The following instance types are available:</p>
   *          <ul>
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
   *                <p>stream.graphics.g5.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.16xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.24xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.16xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.24xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.gr6.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.gr6.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.large</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.gr6f.4xlarge</p>
   *             </li>
   *          </ul>
   * @public
   */
  InstanceType: string | undefined;

  /**
   * <p>The fleet type.</p>
   *          <dl>
   *             <dt>ALWAYS_ON</dt>
   *             <dd>
   *                <p>Provides users with instant-on access to their apps.
   *                         You are charged for all running instances in your fleet, even if no users are streaming apps.</p>
   *             </dd>
   *             <dt>ON_DEMAND</dt>
   *             <dd>
   *                <p>Provide users with access to applications after they connect, which takes one to two minutes.
   *                         You are charged for instance streaming when users are connected and a
   *                         small hourly fee for instances that are not streaming apps.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  FleetType?: FleetType | undefined;

  /**
   * <p>The capacity status for the fleet.</p>
   * @public
   */
  ComputeCapacityStatus: ComputeCapacityStatus | undefined;

  /**
   * <p>The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance. </p>
   *          <p>Specify a value between 600 and 360000.</p>
   * @public
   */
  MaxUserDurationInSeconds?: number | undefined;

  /**
   * <p>The amount of time that a streaming session remains active after users disconnect. If they try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance.</p>
   *          <p>Specify a value between 60 and 36000.</p>
   * @public
   */
  DisconnectTimeoutInSeconds?: number | undefined;

  /**
   * <p>The current state for the fleet.</p>
   * @public
   */
  State: FleetState | undefined;

  /**
   * <p>The VPC configuration for the fleet.</p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>The time the fleet was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The fleet errors.</p>
   * @public
   */
  FleetErrors?: FleetError[] | undefined;

  /**
   * <p>Indicates whether default internet access is enabled for the fleet.</p>
   * @public
   */
  EnableDefaultInternetAccess?: boolean | undefined;

  /**
   * <p>The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. </p>
   * @public
   */
  DomainJoinInfo?: DomainJoinInfo | undefined;

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
   *          <p>To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 36000. The default value is 0.</p>
   *          <note>
   *             <p>If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity. </p>
   *          </note>
   * @public
   */
  IdleDisconnectTimeoutInSeconds?: number | undefined;

  /**
   * <p>The ARN of the IAM role that is applied to the fleet. To assume a role, the fleet instance calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances</a> in the <i>Amazon WorkSpaces Applications Administration Guide</i>.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The WorkSpaces Applications view that is displayed to your users when they stream from the fleet. When <code>APP</code> is specified, only the windows of applications opened by users display. When <code>DESKTOP</code> is specified, the standard desktop that is provided by the operating system displays.</p>
   *          <p>The default value is <code>APP</code>.</p>
   * @public
   */
  StreamView?: StreamView | undefined;

  /**
   * <p>The platform of the fleet.</p>
   * @public
   */
  Platform?: PlatformType | undefined;

  /**
   * <p>The maximum number of concurrent sessions for the fleet.</p>
   * @public
   */
  MaxConcurrentSessions?: number | undefined;

  /**
   * <p>The USB device filter strings associated with the fleet.</p>
   * @public
   */
  UsbDeviceFilterStrings?: string[] | undefined;

  /**
   * <p>The S3 location of the session scripts configuration zip file. This only applies to Elastic fleets.</p>
   * @public
   */
  SessionScriptS3Location?: S3Location | undefined;

  /**
   * <p>The maximum number of user sessions on an instance. This only applies to multi-session fleets.</p>
   * @public
   */
  MaxSessionsPerInstance?: number | undefined;

  /**
   * <p>The current configuration of the root volume for fleet instances, including the storage size in GB.</p>
   * @public
   */
  RootVolumeConfig?: VolumeConfig | undefined;
}

/**
 * @public
 */
export interface CreateFleetResult {
  /**
   * <p>Information about the fleet.</p>
   * @public
   */
  Fleet?: Fleet | undefined;
}

/**
 * @public
 */
export interface CreateImageBuilderRequest {
  /**
   * <p>A unique name for the image builder.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the image used to create the image builder.</p>
   * @public
   */
  ImageName?: string | undefined;

  /**
   * <p>The ARN of the public, private, or shared image to use.</p>
   * @public
   */
  ImageArn?: string | undefined;

  /**
   * <p>The instance type to use when launching the image builder. The following instance types are available:</p>
   *          <ul>
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
   *                <p>stream.graphics.g5.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.16xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.24xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.16xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.24xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.gr6.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.gr6.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.large</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.gr6f.4xlarge</p>
   *             </li>
   *          </ul>
   * @public
   */
  InstanceType: string | undefined;

  /**
   * <p>The description to display.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The image builder name to display.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The VPC configuration for the image builder. You can specify only one subnet.</p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to apply to the image builder. To assume a role, the image builder calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances</a> in the <i>Amazon WorkSpaces Applications Administration Guide</i>.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>Enables or disables default internet access for the image builder.</p>
   * @public
   */
  EnableDefaultInternetAccess?: boolean | undefined;

  /**
   * <p>The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain. </p>
   * @public
   */
  DomainJoinInfo?: DomainJoinInfo | undefined;

  /**
   * <p>The version of the WorkSpaces Applications agent to use for this image builder. To use the latest version of the WorkSpaces Applications agent, specify [LATEST]. </p>
   * @public
   */
  AppstreamAgentVersion?: string | undefined;

  /**
   * <p>The tags to associate with the image builder. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p>
   *          <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p>
   *          <p>_ . : / = + \ - @</p>
   *          <p>If you do not specify a value, the value is set to an empty string.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon WorkSpaces Applications Administration Guide</i>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The list of interface VPC endpoint (interface endpoint) objects. Administrators can connect to the image builder only through the specified endpoints.</p>
   * @public
   */
  AccessEndpoints?: AccessEndpoint[] | undefined;

  /**
   * <p>The configuration for the root volume of the image builder. Use this to customize storage capacity from 200 GB up to 500 GB based on your application installation requirements.</p>
   * @public
   */
  RootVolumeConfig?: VolumeConfig | undefined;

  /**
   * <p>The list of license included applications to install on the image builder during creation.</p>
   *          <p>Possible values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Professional_Plus_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Professional_Plus_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Professional_Plus_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Professional_Plus_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Standard_64Bit</p>
   *             </li>
   *          </ul>
   * @public
   */
  SoftwaresToInstall?: string[] | undefined;

  /**
   * <p>The list of license included applications to uninstall from the image builder during creation.</p>
   *          <p>Possible values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Professional_Plus_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Professional_Plus_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Professional_Plus_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Professional_Plus_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Standard_64Bit</p>
   *             </li>
   *          </ul>
   * @public
   */
  SoftwaresToUninstall?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const LatestAppstreamAgentVersion = {
  FALSE: "FALSE",
  TRUE: "TRUE",
} as const;

/**
 * @public
 */
export type LatestAppstreamAgentVersion =
  (typeof LatestAppstreamAgentVersion)[keyof typeof LatestAppstreamAgentVersion];

/**
 * <p>Describes the network details of the fleet or image builder instance.</p>
 * @public
 */
export interface NetworkAccessConfiguration {
  /**
   * <p>The private IP address of the elastic network interface that is attached to instances in your VPC.</p>
   * @public
   */
  EniPrivateIpAddress?: string | undefined;

  /**
   * <p>The IPv6 addresses assigned to the elastic network interface. This field supports IPv6 connectivity for WorkSpaces Applications instances.</p>
   * @public
   */
  EniIpv6Addresses?: string[] | undefined;

  /**
   * <p>The resource identifier of the elastic network interface that is attached to instances in your VPC. All network interfaces have the eni-xxxxxxxx resource identifier.</p>
   * @public
   */
  EniId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageBuilderState = {
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING: "PENDING",
  PENDING_IMAGE_IMPORT: "PENDING_IMAGE_IMPORT",
  PENDING_QUALIFICATION: "PENDING_QUALIFICATION",
  PENDING_SYNCING_APPS: "PENDING_SYNCING_APPS",
  REBOOTING: "REBOOTING",
  RUNNING: "RUNNING",
  SNAPSHOTTING: "SNAPSHOTTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  SYNCING_APPS: "SYNCING_APPS",
  UPDATING: "UPDATING",
  UPDATING_AGENT: "UPDATING_AGENT",
} as const;

/**
 * @public
 */
export type ImageBuilderState = (typeof ImageBuilderState)[keyof typeof ImageBuilderState];

/**
 * @public
 * @enum
 */
export const ImageBuilderStateChangeReasonCode = {
  IMAGE_UNAVAILABLE: "IMAGE_UNAVAILABLE",
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;

/**
 * @public
 */
export type ImageBuilderStateChangeReasonCode =
  (typeof ImageBuilderStateChangeReasonCode)[keyof typeof ImageBuilderStateChangeReasonCode];

/**
 * <p>Describes the reason why the last image builder state change occurred.</p>
 * @public
 */
export interface ImageBuilderStateChangeReason {
  /**
   * <p>The state change reason code.</p>
   * @public
   */
  Code?: ImageBuilderStateChangeReasonCode | undefined;

  /**
   * <p>The state change reason message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Describes a virtual machine that is used to create an image. </p>
 * @public
 */
export interface ImageBuilder {
  /**
   * <p>The name of the image builder.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ARN for the image builder.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ARN of the image from which this builder was created.</p>
   * @public
   */
  ImageArn?: string | undefined;

  /**
   * <p>The description to display.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The image builder name to display.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The VPC configuration of the image builder.</p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>The instance type for the image builder. The following instance types are available:</p>
   *          <ul>
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
   *                <p>stream.graphics.g5.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.16xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.24xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.16xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.24xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.gr6.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.gr6.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.large</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.gr6f.4xlarge</p>
   *             </li>
   *          </ul>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The operating system platform of the image builder.</p>
   * @public
   */
  Platform?: PlatformType | undefined;

  /**
   * <p>The ARN of the IAM role that is applied to the image builder. To assume a role, the image builder calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances</a> in the <i>Amazon WorkSpaces Applications Administration Guide</i>.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The state of the image builder.</p>
   * @public
   */
  State?: ImageBuilderState | undefined;

  /**
   * <p>The reason why the last state change occurred.</p>
   * @public
   */
  StateChangeReason?: ImageBuilderStateChangeReason | undefined;

  /**
   * <p>The time stamp when the image builder was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>Enables or disables default internet access for the image builder.</p>
   * @public
   */
  EnableDefaultInternetAccess?: boolean | undefined;

  /**
   * <p>The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain. </p>
   * @public
   */
  DomainJoinInfo?: DomainJoinInfo | undefined;

  /**
   * <p>Describes the network details of the fleet or image builder instance.</p>
   * @public
   */
  NetworkAccessConfiguration?: NetworkAccessConfiguration | undefined;

  /**
   * <p>The image builder errors.</p>
   * @public
   */
  ImageBuilderErrors?: ResourceError[] | undefined;

  /**
   * <p>The version of the WorkSpaces Applications agent that is currently being used by the image builder. </p>
   * @public
   */
  AppstreamAgentVersion?: string | undefined;

  /**
   * <p>The list of virtual private cloud (VPC) interface endpoint objects. Administrators can connect to the image builder only through the specified endpoints.</p>
   * @public
   */
  AccessEndpoints?: AccessEndpoint[] | undefined;

  /**
   * <p>The current configuration of the root volume for the image builder, including the storage size in GB.</p>
   * @public
   */
  RootVolumeConfig?: VolumeConfig | undefined;

  /**
   * <p>Indicates whether the image builder is using the latest WorkSpaces Applications agent version or not.</p>
   * @public
   */
  LatestAppstreamAgentVersion?: LatestAppstreamAgentVersion | undefined;
}

/**
 * @public
 */
export interface CreateImageBuilderResult {
  /**
   * <p>Information about the image builder.</p>
   * @public
   */
  ImageBuilder?: ImageBuilder | undefined;
}

/**
 * @public
 */
export interface CreateImageBuilderStreamingURLRequest {
  /**
   * <p>The name of the image builder.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The time that the streaming URL will be valid, in seconds.
   *             Specify a value between 1 and 604800 seconds. The default is 3600 seconds.</p>
   * @public
   */
  Validity?: number | undefined;
}

/**
 * @public
 */
export interface CreateImageBuilderStreamingURLResult {
  /**
   * <p>The URL to start the WorkSpaces Applications streaming session.</p>
   * @public
   */
  StreamingURL?: string | undefined;

  /**
   * <p>The elapsed time, in seconds after the Unix epoch, when this URL expires.</p>
   * @public
   */
  Expires?: Date | undefined;
}

/**
 * <p>Configuration for runtime validation of imported images. This structure specifies the instance type to use for testing the imported image's streaming capabilities.</p>
 * @public
 */
export interface RuntimeValidationConfig {
  /**
   * <p>The instance type to use for runtime validation testing. It's recommended to use the same instance type you plan to use for your fleet to ensure accurate validation results.</p>
   * @public
   */
  IntendedInstanceType?: string | undefined;
}

/**
 * @public
 */
export interface CreateImportedImageRequest {
  /**
   * <p>A unique name for the imported image. The name must be between 1 and 100 characters and can contain letters, numbers, underscores, periods, and hyphens.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the EC2 AMI to import. The AMI must meet specific requirements including Windows Server 2022 Full Base, UEFI boot mode, TPM 2.0 support, and proper drivers.</p>
   * @public
   */
  SourceAmiId: string | undefined;

  /**
   * <p>The ARN of the IAM role that allows WorkSpaces Applications to access your AMI. The role must have permissions to modify image attributes and describe images, with a trust relationship allowing appstream.amazonaws.com to assume the role.</p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>An optional description for the imported image. The description must match approved regex patterns and can be up to 256 characters.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>An optional display name for the imported image. The display name must match approved regex patterns and can be up to 100 characters.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The tags to apply to the imported image. Tags help you organize and manage your WorkSpaces Applications resources.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Configuration for runtime validation of the imported image. When specified, WorkSpaces Applications provisions an instance to test streaming functionality, which helps ensure the image is suitable for use.</p>
   * @public
   */
  RuntimeValidationConfig?: RuntimeValidationConfig | undefined;

  /**
   * <p>The version of the WorkSpaces Applications agent to use for the imported image. Choose CURRENT_LATEST to use the agent version available at the time of import, or ALWAYS_LATEST to automatically update to the latest agent version when new versions are released.</p>
   * @public
   */
  AgentSoftwareVersion?: AgentSoftwareVersion | undefined;

  /**
   * <p>Configuration for the application catalog of the imported image. This allows you to specify applications available for streaming, including their paths, icons, and launch parameters. This field contains sensitive data.</p>
   * @public
   */
  AppCatalogConfig?: ApplicationConfig[] | undefined;

  /**
   * <p>When set to true, performs validation checks without actually creating the imported image. Use this to verify your configuration before executing the actual import operation.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const DynamicAppProvidersEnabled = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DynamicAppProvidersEnabled = (typeof DynamicAppProvidersEnabled)[keyof typeof DynamicAppProvidersEnabled];

/**
 * <p>Describes the permissions for an image. </p>
 * @public
 */
export interface ImagePermissions {
  /**
   * <p>Indicates whether the image can be used for a fleet.</p>
   * @public
   */
  allowFleet?: boolean | undefined;

  /**
   * <p>Indicates whether the image can be used for an image builder.</p>
   * @public
   */
  allowImageBuilder?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageSharedWithOthers = {
  FALSE: "FALSE",
  TRUE: "TRUE",
} as const;

/**
 * @public
 */
export type ImageSharedWithOthers = (typeof ImageSharedWithOthers)[keyof typeof ImageSharedWithOthers];

/**
 * @public
 * @enum
 */
export const ImageType = {
  CUSTOM: "CUSTOM",
  NATIVE: "NATIVE",
} as const;

/**
 * @public
 */
export type ImageType = (typeof ImageType)[keyof typeof ImageType];

/**
 * @public
 * @enum
 */
export const ImageState = {
  AVAILABLE: "AVAILABLE",
  COPYING: "COPYING",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  IMPORTING: "IMPORTING",
  PENDING: "PENDING",
  VALIDATING: "VALIDATING",
} as const;

/**
 * @public
 */
export type ImageState = (typeof ImageState)[keyof typeof ImageState];

/**
 * @public
 * @enum
 */
export const ImageStateChangeReasonCode = {
  IMAGE_BUILDER_NOT_AVAILABLE: "IMAGE_BUILDER_NOT_AVAILABLE",
  IMAGE_COPY_FAILURE: "IMAGE_COPY_FAILURE",
  IMAGE_IMPORT_FAILURE: "IMAGE_IMPORT_FAILURE",
  IMAGE_UPDATE_FAILURE: "IMAGE_UPDATE_FAILURE",
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;

/**
 * @public
 */
export type ImageStateChangeReasonCode = (typeof ImageStateChangeReasonCode)[keyof typeof ImageStateChangeReasonCode];

/**
 * <p>Describes the reason why the last image state change occurred.</p>
 * @public
 */
export interface ImageStateChangeReason {
  /**
   * <p>The state change reason code.</p>
   * @public
   */
  Code?: ImageStateChangeReasonCode | undefined;

  /**
   * <p>The state change reason message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VisibilityType = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
  SHARED: "SHARED",
} as const;

/**
 * @public
 */
export type VisibilityType = (typeof VisibilityType)[keyof typeof VisibilityType];

/**
 * <p>Describes an image.</p>
 * @public
 */
export interface Image {
  /**
   * <p>The name of the image.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ARN of the image.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ARN of the image from which this image was created.</p>
   * @public
   */
  BaseImageArn?: string | undefined;

  /**
   * <p>The image name to display.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The image starts in the <code>PENDING</code> state. If image creation succeeds, the
   *             state is <code>AVAILABLE</code>. If image creation fails, the state is <code>FAILED</code>.</p>
   * @public
   */
  State?: ImageState | undefined;

  /**
   * <p>Indicates whether the image is public or private.</p>
   * @public
   */
  Visibility?: VisibilityType | undefined;

  /**
   * <p>Indicates whether an image builder can be launched from this image.</p>
   * @public
   */
  ImageBuilderSupported?: boolean | undefined;

  /**
   * <p>The name of the image builder that was used to create the private image. If the image is shared, copied, or updated by using Managed Image Updates, this value is null.</p>
   * @public
   */
  ImageBuilderName?: string | undefined;

  /**
   * <p>The operating system platform of the image.</p>
   * @public
   */
  Platform?: PlatformType | undefined;

  /**
   * <p>The description to display.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The reason why the last state change occurred.</p>
   * @public
   */
  StateChangeReason?: ImageStateChangeReason | undefined;

  /**
   * <p>The applications associated with the image.</p>
   * @public
   */
  Applications?: Application[] | undefined;

  /**
   * <p>The time the image was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The release date of the public base image.
   *             For private images, this date is the release date of the base image from which the image was created.</p>
   * @public
   */
  PublicBaseImageReleasedDate?: Date | undefined;

  /**
   * <p>The version of the WorkSpaces Applications agent to use for instances that are launched from this image. </p>
   * @public
   */
  AppstreamAgentVersion?: string | undefined;

  /**
   * <p>The permissions to provide to the destination AWS account for the specified image.</p>
   * @public
   */
  ImagePermissions?: ImagePermissions | undefined;

  /**
   * <p>Describes the errors that are returned when a new image can't be created.</p>
   * @public
   */
  ImageErrors?: ResourceError[] | undefined;

  /**
   * <p>Indicates whether the image is using the latest WorkSpaces Applications agent version or not.</p>
   * @public
   */
  LatestAppstreamAgentVersion?: LatestAppstreamAgentVersion | undefined;

  /**
   * <p>The supported instances families that determine which image a customer can use when the customer launches a fleet or image builder. The following instances families are supported:</p>
   *          <ul>
   *             <li>
   *                <p>General Purpose</p>
   *             </li>
   *             <li>
   *                <p>Compute Optimized</p>
   *             </li>
   *             <li>
   *                <p>Memory Optimized</p>
   *             </li>
   *             <li>
   *                <p>Graphics</p>
   *             </li>
   *             <li>
   *                <p>Graphics Design</p>
   *             </li>
   *             <li>
   *                <p>Graphics Pro</p>
   *             </li>
   *             <li>
   *                <p>Graphics G4</p>
   *             </li>
   *             <li>
   *                <p>Graphics G5</p>
   *             </li>
   *          </ul>
   * @public
   */
  SupportedInstanceFamilies?: string[] | undefined;

  /**
   * <p>Indicates whether dynamic app providers are enabled within an WorkSpaces Applications image or not.</p>
   * @public
   */
  DynamicAppProvidersEnabled?: DynamicAppProvidersEnabled | undefined;

  /**
   * <p>Indicates whether the image is shared with another account ID.</p>
   * @public
   */
  ImageSharedWithOthers?: ImageSharedWithOthers | undefined;

  /**
   * <p>Indicates whether the image includes license-included applications.</p>
   * @public
   */
  ManagedSoftwareIncluded?: boolean | undefined;

  /**
   * <p>The type of the image. Images created through AMI import have type "custom", while WorkSpaces Applications provided images have type "native". Custom images support additional instance types including GeneralPurpose, MemoryOptimized, ComputeOptimized, and Accelerated instance families.</p>
   * @public
   */
  ImageType?: ImageType | undefined;
}

/**
 * @public
 */
export interface CreateImportedImageResult {
  /**
   * <p>Describes an image.</p>
   * @public
   */
  Image?: Image | undefined;
}

/**
 * <p>The exception that is thrown when a dry run operation is requested. This indicates that the validation checks have been performed successfully, but no actual resources were created or modified.</p>
 * @public
 */
export class DryRunOperationException extends __BaseException {
  readonly name: "DryRunOperationException" = "DryRunOperationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message in the exception.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DryRunOperationException, __BaseException>) {
    super({
      name: "DryRunOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DryRunOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const StorageConnectorType = {
  GOOGLE_DRIVE: "GOOGLE_DRIVE",
  HOMEFOLDERS: "HOMEFOLDERS",
  ONE_DRIVE: "ONE_DRIVE",
} as const;

/**
 * @public
 */
export type StorageConnectorType = (typeof StorageConnectorType)[keyof typeof StorageConnectorType];

/**
 * <p>Describes a connector that enables persistent storage for users.</p>
 * @public
 */
export interface StorageConnector {
  /**
   * <p>The type of storage connector.</p>
   * @public
   */
  ConnectorType: StorageConnectorType | undefined;

  /**
   * <p>The ARN of the storage connector.</p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>The names of the domains for the account.</p>
   * @public
   */
  Domains?: string[] | undefined;

  /**
   * <p>The OneDrive for Business domains where you require admin consent when users try to link their OneDrive account to WorkSpaces Applications. The attribute can only be specified when ConnectorType=ONE_DRIVE.</p>
   * @public
   */
  DomainsRequireAdminConsent?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const PreferredProtocol = {
  TCP: "TCP",
  UDP: "UDP",
} as const;

/**
 * @public
 */
export type PreferredProtocol = (typeof PreferredProtocol)[keyof typeof PreferredProtocol];

/**
 * <p>The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.</p>
 * @public
 */
export interface StreamingExperienceSettings {
  /**
   * <p>The preferred protocol that you want to use while streaming your application.</p>
   * @public
   */
  PreferredProtocol?: PreferredProtocol | undefined;
}

/**
 * @public
 * @enum
 */
export const Permission = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * <p>Describes an action and whether the action is enabled or disabled for users during their streaming sessions.</p>
 * @public
 */
export interface UserSetting {
  /**
   * <p>The action that is enabled or disabled.</p>
   * @public
   */
  Action: Action | undefined;

  /**
   * <p>Indicates whether the action is enabled or disabled.</p>
   * @public
   */
  Permission: Permission | undefined;

  /**
   * <p>Specifies the number of characters that can be copied by end users from the local device to the remote session, and to the local device from the remote session.</p>
   *          <p>This can be specified only for the <code>CLIPBOARD_COPY_FROM_LOCAL_DEVICE</code> and <code>CLIPBOARD_COPY_TO_LOCAL_DEVICE</code> actions.</p>
   *          <p>This defaults to 20,971,520 (20 MB) when unspecified and the permission is <code>ENABLED</code>. This can't be specified when the permission is <code>DISABLED</code>. </p>
   *          <p>The value can be between 1 and 20,971,520 (20 MB).</p>
   * @public
   */
  MaximumLength?: number | undefined;
}

/**
 * @public
 */
export interface CreateStackRequest {
  /**
   * <p>The name of the stack.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description to display.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The stack name to display.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The storage connectors to enable.</p>
   * @public
   */
  StorageConnectors?: StorageConnector[] | undefined;

  /**
   * <p>The URL that users are redirected to after their streaming session ends.</p>
   * @public
   */
  RedirectURL?: string | undefined;

  /**
   * <p>The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.</p>
   * @public
   */
  FeedbackURL?: string | undefined;

  /**
   * <p>The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled. </p>
   * @public
   */
  UserSettings?: UserSetting[] | undefined;

  /**
   * <p>The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.</p>
   * @public
   */
  ApplicationSettings?: ApplicationSettings | undefined;

  /**
   * <p>The tags to associate with the stack. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p>
   *          <p>If you do not specify a value, the value is set to an empty string.</p>
   *          <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p>
   *          <p>_ . : / = + \ - @</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon WorkSpaces Applications Administration Guide</i>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The list of interface VPC endpoint (interface endpoint) objects. Users of the stack can connect to WorkSpaces Applications only through the specified endpoints.</p>
   * @public
   */
  AccessEndpoints?: AccessEndpoint[] | undefined;

  /**
   * <p>The domains where WorkSpaces Applications streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded WorkSpaces Applications streaming sessions. </p>
   * @public
   */
  EmbedHostDomains?: string[] | undefined;

  /**
   * <p>The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.</p>
   * @public
   */
  StreamingExperienceSettings?: StreamingExperienceSettings | undefined;
}

/**
 * @public
 * @enum
 */
export const StackErrorCode = {
  INTERNAL_SERVICE_ERROR: "INTERNAL_SERVICE_ERROR",
  STORAGE_CONNECTOR_ERROR: "STORAGE_CONNECTOR_ERROR",
} as const;

/**
 * @public
 */
export type StackErrorCode = (typeof StackErrorCode)[keyof typeof StackErrorCode];

/**
 * <p>Describes a stack error.</p>
 * @public
 */
export interface StackError {
  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: StackErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>Describes a stack.</p>
 * @public
 */
export interface Stack {
  /**
   * <p>The ARN of the stack.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the stack.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description to display.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The stack name to display.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The time the stack was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The storage connectors to enable.</p>
   * @public
   */
  StorageConnectors?: StorageConnector[] | undefined;

  /**
   * <p>The URL that users are redirected to after their streaming session ends.</p>
   * @public
   */
  RedirectURL?: string | undefined;

  /**
   * <p>The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.</p>
   * @public
   */
  FeedbackURL?: string | undefined;

  /**
   * <p>The errors for the stack.</p>
   * @public
   */
  StackErrors?: StackError[] | undefined;

  /**
   * <p>The actions that are enabled or disabled for users during their streaming sessions. By default these actions are enabled.</p>
   * @public
   */
  UserSettings?: UserSetting[] | undefined;

  /**
   * <p>The persistent application settings for users of the stack.</p>
   * @public
   */
  ApplicationSettings?: ApplicationSettingsResponse | undefined;

  /**
   * <p>The list of virtual private cloud (VPC) interface endpoint objects. Users of the stack can connect to WorkSpaces Applications only through the specified endpoints. </p>
   * @public
   */
  AccessEndpoints?: AccessEndpoint[] | undefined;

  /**
   * <p>The domains where WorkSpaces Applications streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded WorkSpaces Applications streaming sessions.</p>
   * @public
   */
  EmbedHostDomains?: string[] | undefined;

  /**
   * <p>The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.</p>
   * @public
   */
  StreamingExperienceSettings?: StreamingExperienceSettings | undefined;
}

/**
 * @public
 */
export interface CreateStackResult {
  /**
   * <p>Information about the stack.</p>
   * @public
   */
  Stack?: Stack | undefined;
}

/**
 * @public
 */
export interface CreateStreamingURLRequest {
  /**
   * <p>The name of the stack.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  FleetName: string | undefined;

  /**
   * <p>The identifier of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The name of the application to launch after the session starts. This is the name that you specified
   *             as <b>Name</b> in the Image Assistant. If your fleet is enabled for the <b>Desktop</b> stream view, you can also choose to launch directly to the operating system desktop. To do so, specify <b>Desktop</b>.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The time that the streaming URL will be valid, in seconds.
   *             Specify a value between 1 and 604800 seconds. The default is 60 seconds.</p>
   * @public
   */
  Validity?: number | undefined;

  /**
   * <p>The session context. For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/managing-stacks-fleets.html#managing-stacks-fleets-parameters">Session Context</a> in the <i>Amazon WorkSpaces Applications Administration Guide</i>.</p>
   * @public
   */
  SessionContext?: string | undefined;
}

/**
 * @public
 */
export interface CreateStreamingURLResult {
  /**
   * <p>The URL to start the WorkSpaces Applications streaming session.</p>
   * @public
   */
  StreamingURL?: string | undefined;

  /**
   * <p>The elapsed time, in seconds after the Unix epoch, when this URL expires.</p>
   * @public
   */
  Expires?: Date | undefined;
}

/**
 * <p>The website links that display in the catalog page footer.</p>
 * @public
 */
export interface ThemeFooterLink {
  /**
   * <p>The name of the websites that display in the catalog page footer.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The URL of the websites that display in the catalog page footer.</p>
   * @public
   */
  FooterLinkURL?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ThemeStyling = {
  BLUE: "BLUE",
  LIGHT_BLUE: "LIGHT_BLUE",
  PINK: "PINK",
  RED: "RED",
} as const;

/**
 * @public
 */
export type ThemeStyling = (typeof ThemeStyling)[keyof typeof ThemeStyling];

/**
 * @public
 */
export interface CreateThemeForStackRequest {
  /**
   * <p>The name of the stack for the theme.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The links that are displayed in the footer of the streaming application catalog page. These links are helpful resources for users, such as the organization's IT support and product marketing sites.</p>
   * @public
   */
  FooterLinks?: ThemeFooterLink[] | undefined;

  /**
   * <p>The title that is displayed at the top of the browser tab during users' application streaming sessions.</p>
   * @public
   */
  TitleText: string | undefined;

  /**
   * <p>The color theme that is applied to website links, text, and buttons. These colors are also applied as accents in the background for the streaming application catalog page.</p>
   * @public
   */
  ThemeStyling: ThemeStyling | undefined;

  /**
   * <p>The organization logo that appears on the streaming application catalog page.</p>
   * @public
   */
  OrganizationLogoS3Location: S3Location | undefined;

  /**
   * <p>The S3 location of the favicon. The favicon enables users to recognize their application streaming site in a browser full of tabs or bookmarks. It is displayed at the top of the browser tab for the application streaming site during users' streaming sessions.</p>
   * @public
   */
  FaviconS3Location: S3Location | undefined;
}

/**
 * @public
 * @enum
 */
export const ThemeState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ThemeState = (typeof ThemeState)[keyof typeof ThemeState];

/**
 * <p>The custom branding theme, which might include a custom logo, website links, and other branding to display to users.</p>
 * @public
 */
export interface Theme {
  /**
   * <p>The stack that has the custom branding theme.</p>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>The state of the theme.</p>
   * @public
   */
  State?: ThemeState | undefined;

  /**
   * <p>The browser tab page title.</p>
   * @public
   */
  ThemeTitleText?: string | undefined;

  /**
   * <p>The color that is used for the website links, text, buttons, and catalog page background.</p>
   * @public
   */
  ThemeStyling?: ThemeStyling | undefined;

  /**
   * <p>The website links that display in the catalog page footer.</p>
   * @public
   */
  ThemeFooterLinks?: ThemeFooterLink[] | undefined;

  /**
   * <p>The URL of the logo that displays in the catalog page header.</p>
   * @public
   */
  ThemeOrganizationLogoURL?: string | undefined;

  /**
   * <p>The URL of the icon that displays at the top of a user's browser tab during streaming sessions.</p>
   * @public
   */
  ThemeFaviconURL?: string | undefined;

  /**
   * <p>The time the theme was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateThemeForStackResult {
  /**
   * <p> The theme object that contains the metadata of the custom branding.</p>
   * @public
   */
  Theme?: Theme | undefined;
}

/**
 * @public
 */
export interface CreateUpdatedImageRequest {
  /**
   * <p>The name of the image to update.</p>
   * @public
   */
  existingImageName: string | undefined;

  /**
   * <p>The name of the new image. The name must be unique within the AWS account and Region.</p>
   * @public
   */
  newImageName: string | undefined;

  /**
   * <p>The description to display for the new image.</p>
   * @public
   */
  newImageDescription?: string | undefined;

  /**
   * <p>The name to display for the new image.</p>
   * @public
   */
  newImageDisplayName?: string | undefined;

  /**
   * <p>The tags to associate with the new image. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p>
   *          <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p>
   *          <p>_ . : / = + \ - @</p>
   *          <p>If you do not specify a value, the value is set to an empty string.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon WorkSpaces Applications Administration Guide</i>.</p>
   * @public
   */
  newImageTags?: Record<string, string> | undefined;

  /**
   * <p>Indicates whether to display the status of image update availability before WorkSpaces Applications initiates the process of creating a new updated image. If this value is set to <code>true</code>, WorkSpaces Applications displays whether image updates are available. If this value is set to <code>false</code>, WorkSpaces Applications initiates the process of creating a new updated image without displaying whether image updates are available.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateUpdatedImageResult {
  /**
   * <p>Describes an image.</p>
   * @public
   */
  image?: Image | undefined;

  /**
   * <p>Indicates whether a new image can be created.</p>
   * @public
   */
  canUpdateImage?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateUsageReportSubscriptionRequest {}

/**
 * @public
 * @enum
 */
export const UsageReportSchedule = {
  DAILY: "DAILY",
} as const;

/**
 * @public
 */
export type UsageReportSchedule = (typeof UsageReportSchedule)[keyof typeof UsageReportSchedule];

/**
 * @public
 */
export interface CreateUsageReportSubscriptionResult {
  /**
   * <p>The Amazon S3 bucket where generated reports are stored.</p>
   *          <p>If you enabled on-instance session scripts and Amazon S3 logging for your session script
   *             configuration, WorkSpaces Applications created an S3 bucket to store the script output. The bucket is
   *             unique to your account and Region. When you enable usage reporting in this case, WorkSpaces Applications
   *             uses the same bucket to store your usage reports. If you haven't already enabled on-instance session scripts,
   *             when you enable usage reports, WorkSpaces Applications creates a new S3 bucket.</p>
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * <p>The schedule for generating usage reports.</p>
   * @public
   */
  Schedule?: UsageReportSchedule | undefined;
}

/**
 * @public
 * @enum
 */
export const MessageAction = {
  RESEND: "RESEND",
  SUPPRESS: "SUPPRESS",
} as const;

/**
 * @public
 */
export type MessageAction = (typeof MessageAction)[keyof typeof MessageAction];

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * <p>The email address of the user.</p>
   *          <note>
   *             <p>Users' email addresses are case-sensitive. During login, if they specify an email address that doesn't use the same capitalization as the email address specified when their user pool account was created, a "user does not exist" error message displays.</p>
   *          </note>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The action to take for the welcome email that is sent to a user after the user is created in the user pool. If you specify SUPPRESS, no email is sent. If you specify RESEND, do not specify the first name or last name of the user. If the value is null, the email is sent. </p>
   *          <note>
   *             <p>The temporary password in the welcome email is valid for only 7 days. If users don’t set their passwords within 7 days, you must send them a new welcome email.</p>
   *          </note>
   * @public
   */
  MessageAction?: MessageAction | undefined;

  /**
   * <p>The first name, or given name, of the user.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>The last name, or surname, of the user.</p>
   * @public
   */
  LastName?: string | undefined;

  /**
   * <p>The authentication type for the user. You must specify USERPOOL. </p>
   * @public
   */
  AuthenticationType: AuthenticationType | undefined;
}

/**
 * @public
 */
export interface CreateUserResult {}

/**
 * @public
 */
export interface DeleteAppBlockRequest {
  /**
   * <p>The name of the app block.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppBlockResult {}

/**
 * <p>The specified resource is in use.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message in the exception.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteAppBlockBuilderRequest {
  /**
   * <p>The name of the app block builder.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppBlockBuilderResult {}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>The name of the application.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResult {}

/**
 * @public
 */
export interface DeleteDirectoryConfigRequest {
  /**
   * <p>The name of the directory configuration.</p>
   * @public
   */
  DirectoryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectoryConfigResult {}

/**
 * @public
 */
export interface DeleteEntitlementRequest {
  /**
   * <p>The name of the entitlement.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the stack with which the entitlement is associated.</p>
   * @public
   */
  StackName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEntitlementResult {}

/**
 * @public
 */
export interface DeleteFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetResult {}

/**
 * @public
 */
export interface DeleteImageRequest {
  /**
   * <p>The name of the image.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageResult {
  /**
   * <p>Information about the image.</p>
   * @public
   */
  Image?: Image | undefined;
}

/**
 * @public
 */
export interface DeleteImageBuilderRequest {
  /**
   * <p>The name of the image builder.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageBuilderResult {
  /**
   * <p>Information about the image builder.</p>
   * @public
   */
  ImageBuilder?: ImageBuilder | undefined;
}

/**
 * @public
 */
export interface DeleteImagePermissionsRequest {
  /**
   * <p>The name of the private image.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The 12-digit identifier of the AWS account for which to delete image permissions.</p>
   * @public
   */
  SharedAccountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteImagePermissionsResult {}

/**
 * @public
 */
export interface DeleteStackRequest {
  /**
   * <p>The name of the stack.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteStackResult {}

/**
 * @public
 */
export interface DeleteThemeForStackRequest {
  /**
   * <p>The name of the stack for the theme.</p>
   * @public
   */
  StackName: string | undefined;
}

/**
 * @public
 */
export interface DeleteThemeForStackResult {}

/**
 * @public
 */
export interface DeleteUsageReportSubscriptionRequest {}

/**
 * @public
 */
export interface DeleteUsageReportSubscriptionResult {}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * <p>The email address of the user.</p>
   *          <note>
   *             <p>Users' email addresses are case-sensitive.</p>
   *          </note>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The authentication type for the user. You must specify USERPOOL.</p>
   * @public
   */
  AuthenticationType: AuthenticationType | undefined;
}

/**
 * @public
 */
export interface DeleteUserResult {}

/**
 * @public
 */
export interface DescribeAppBlockBuilderAppBlockAssociationsRequest {
  /**
   * <p>The ARN of the app block.</p>
   * @public
   */
  AppBlockArn?: string | undefined;

  /**
   * <p>The name of the app block builder.</p>
   * @public
   */
  AppBlockBuilderName?: string | undefined;

  /**
   * <p>The maximum size of each page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *             operation.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppBlockBuilderAppBlockAssociationsResult {
  /**
   * <p>This list of app block builders associated with app blocks.</p>
   * @public
   */
  AppBlockBuilderAppBlockAssociations?: AppBlockBuilderAppBlockAssociation[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *             operation.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppBlockBuildersRequest {
  /**
   * <p>The names of the app block builders.</p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *             operation.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of each page of results. The maximum value is 25.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAppBlockBuildersResult {
  /**
   * <p>The list that describes one or more app block builders.</p>
   * @public
   */
  AppBlockBuilders?: AppBlockBuilder[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *             operation.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppBlocksRequest {
  /**
   * <p>The ARNs of the app blocks.</p>
   * @public
   */
  Arns?: string[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *             operation.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of each page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAppBlocksResult {
  /**
   * <p>The app blocks in the list.</p>
   * @public
   */
  AppBlocks?: AppBlock[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *             operation.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationFleetAssociationsRequest {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  FleetName?: string | undefined;

  /**
   * <p>The ARN of the application.</p>
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * <p>The maximum size of each page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *             operation.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationFleetAssociationsResult {
  /**
   * <p>The application fleet associations in the list.</p>
   * @public
   */
  ApplicationFleetAssociations?: ApplicationFleetAssociation[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *             operation.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationsRequest {
  /**
   * <p>The ARNs for the applications.</p>
   * @public
   */
  Arns?: string[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *             operation.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of each page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationsResult {
  /**
   * <p>The applications in the list.</p>
   * @public
   */
  Applications?: Application[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *             operation.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppLicenseUsageRequest {
  /**
   * <p>Billing period for the usage record.</p>
   *          <p>Specify the value in <i>yyyy-mm</i> format. For example, for August
   *             2025, use <i>2025-08</i>.</p>
   * @public
   */
  BillingPeriod: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Token for pagination of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppLicenseUsageResult {
  /**
   * <p>Collection of license usage records.</p>
   * @public
   */
  AppLicenseUsages?: AdminAppLicenseUsageRecord[] | undefined;

  /**
   * <p>Token for pagination of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectoryConfigsRequest {
  /**
   * <p>The directory names.</p>
   * @public
   */
  DirectoryNames?: string[] | undefined;

  /**
   * <p>The maximum size of each page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectoryConfigsResult {
  /**
   * <p>Information about the directory configurations. Note that although the response syntax in this topic includes the account password, this password is not returned in the actual response. </p>
   * @public
   */
  DirectoryConfigs?: DirectoryConfig[] | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEntitlementsRequest {
  /**
   * <p>The name of the entitlement.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The name of the stack with which the entitlement is associated.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of each page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeEntitlementsResult {
  /**
   * <p>The entitlements.</p>
   * @public
   */
  Entitlements?: Entitlement[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *             operation.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetsRequest {
  /**
   * <p>The names of the fleets to describe.</p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetsResult {
  /**
   * <p>Information about the fleets.</p>
   * @public
   */
  Fleets?: Fleet[] | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageBuildersRequest {
  /**
   * <p>The names of the image builders to describe.</p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>The maximum size of each page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageBuildersResult {
  /**
   * <p>Information about the image builders.</p>
   * @public
   */
  ImageBuilders?: ImageBuilder[] | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImagePermissionsRequest {
  /**
   * <p>The name of the private image for which to describe permissions. The image must be one that you own. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The maximum size of each page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The 12-digit identifier of one or more AWS accounts with which the image is shared.</p>
   * @public
   */
  SharedAwsAccountIds?: string[] | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes the permissions that are available to the specified AWS account for a shared image.</p>
 * @public
 */
export interface SharedImagePermissions {
  /**
   * <p>The 12-digit identifier of the AWS account with which the image is shared.</p>
   * @public
   */
  sharedAccountId: string | undefined;

  /**
   * <p>Describes the permissions for a shared image.</p>
   * @public
   */
  imagePermissions: ImagePermissions | undefined;
}

/**
 * @public
 */
export interface DescribeImagePermissionsResult {
  /**
   * <p>The name of the private image.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The permissions for a private image that you own. </p>
   * @public
   */
  SharedImagePermissionsList?: SharedImagePermissions[] | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImagesRequest {
  /**
   * <p>The names of the public or private images to describe.</p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>The ARNs of the public, private, and shared images to describe.</p>
   * @public
   */
  Arns?: string[] | undefined;

  /**
   * <p>The type of image (public, private, or shared) to describe. </p>
   * @public
   */
  Type?: VisibilityType | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of each page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeImagesResult {
  /**
   * <p>Information about the images.</p>
   * @public
   */
  Images?: Image[] | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSessionsRequest {
  /**
   * <p>The name of the stack. This value is case-sensitive.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The name of the fleet. This value is case-sensitive.</p>
   * @public
   */
  FleetName: string | undefined;

  /**
   * <p>The user identifier (ID). If you specify a user ID, you must also specify the authentication type.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The size of each page of results. The default value is 20 and the maximum value is 50.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The authentication method. Specify <code>API</code> for a user
   *             authenticated using a streaming URL or <code>SAML</code> for a SAML federated user.
   *             The default is to authenticate users using a streaming URL.</p>
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * <p>The identifier for the instance hosting the session.</p>
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SessionConnectionState = {
  CONNECTED: "CONNECTED",
  NOT_CONNECTED: "NOT_CONNECTED",
} as const;

/**
 * @public
 */
export type SessionConnectionState = (typeof SessionConnectionState)[keyof typeof SessionConnectionState];

/**
 * @public
 * @enum
 */
export const SessionState = {
  ACTIVE: "ACTIVE",
  EXPIRED: "EXPIRED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type SessionState = (typeof SessionState)[keyof typeof SessionState];

/**
 * <p>Describes a streaming session.</p>
 * @public
 */
export interface Session {
  /**
   * <p>The identifier of the streaming session.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the user for whom the session was created.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The name of the stack for the streaming session.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The name of the fleet for the streaming session.</p>
   * @public
   */
  FleetName: string | undefined;

  /**
   * <p>The current state of the streaming session.</p>
   * @public
   */
  State: SessionState | undefined;

  /**
   * <p>Specifies whether a user is connected to the streaming session.</p>
   * @public
   */
  ConnectionState?: SessionConnectionState | undefined;

  /**
   * <p>The time when a streaming instance is dedicated for the user.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time when the streaming session is set to expire. This time is based on the <code>MaxUserDurationinSeconds</code> value, which determines the maximum length of time that a streaming session can run. A streaming session might end earlier than the time specified in <code>SessionMaxExpirationTime</code>, when the <code>DisconnectTimeOutInSeconds</code> elapses or the user chooses to end his or her session. If the <code>DisconnectTimeOutInSeconds</code> elapses, or the user chooses to end his or her session, the streaming instance is terminated and the streaming session ends.</p>
   * @public
   */
  MaxExpirationTime?: Date | undefined;

  /**
   * <p>The authentication method. The user is authenticated using a streaming URL
   *             (<code>API</code>) or SAML 2.0 federation (<code>SAML</code>).</p>
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * <p>The network details for the streaming session.</p>
   * @public
   */
  NetworkAccessConfiguration?: NetworkAccessConfiguration | undefined;

  /**
   * <p>The identifier for the instance hosting the session.</p>
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSessionsResult {
  /**
   * <p>Information about the streaming sessions.</p>
   * @public
   */
  Sessions?: Session[] | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSoftwareAssociationsRequest {
  /**
   * <p>The ARN of the resource to describe software associations. Possible resources are Image and ImageBuilder.</p>
   * @public
   */
  AssociatedResource: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SoftwareDeploymentStatus = {
  FAILED_TO_INSTALL: "FAILED_TO_INSTALL",
  FAILED_TO_UNINSTALL: "FAILED_TO_UNINSTALL",
  INSTALLED: "INSTALLED",
  PENDING_INSTALLATION: "PENDING_INSTALLATION",
  PENDING_UNINSTALLATION: "PENDING_UNINSTALLATION",
  STAGED_FOR_INSTALLATION: "STAGED_FOR_INSTALLATION",
  STAGED_FOR_UNINSTALLATION: "STAGED_FOR_UNINSTALLATION",
} as const;

/**
 * @public
 */
export type SoftwareDeploymentStatus = (typeof SoftwareDeploymentStatus)[keyof typeof SoftwareDeploymentStatus];

/**
 * <p>The association between a license-included application and a resource.</p>
 * @public
 */
export interface SoftwareAssociations {
  /**
   * <p>The name of the license-included application.</p>
   *          <p>Possible values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Professional_Plus_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Professional_Plus_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Professional_Plus_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Professional_Plus_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Standard_64Bit</p>
   *             </li>
   *          </ul>
   * @public
   */
  SoftwareName?: string | undefined;

  /**
   * <p>The deployment status of the license-included application.</p>
   * @public
   */
  Status?: SoftwareDeploymentStatus | undefined;

  /**
   * <p>The error details for failed deployments of the license-included application.</p>
   * @public
   */
  DeploymentError?: ErrorDetails[] | undefined;
}

/**
 * @public
 */
export interface DescribeSoftwareAssociationsResult {
  /**
   * <p>The ARN of the resource to describe software associations.</p>
   * @public
   */
  AssociatedResource?: string | undefined;

  /**
   * <p>Collection of license included applications association details including:</p>
   *          <ul>
   *             <li>
   *                <p>License included application name and version information</p>
   *             </li>
   *             <li>
   *                <p>Deployment status (SoftwareDeploymentStatus enum)</p>
   *             </li>
   *             <li>
   *                <p>Error details for failed deployments</p>
   *             </li>
   *             <li>
   *                <p>Association timestamps</p>
   *             </li>
   *          </ul>
   * @public
   */
  SoftwareAssociations?: SoftwareAssociations[] | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStacksRequest {
  /**
   * <p>The names of the stacks to describe.</p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStacksResult {
  /**
   * <p>Information about the stacks.</p>
   * @public
   */
  Stacks?: Stack[] | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeThemeForStackRequest {
  /**
   * <p>The name of the stack for the theme.</p>
   * @public
   */
  StackName: string | undefined;
}

/**
 * @public
 */
export interface DescribeThemeForStackResult {
  /**
   * <p> The theme object that contains the metadata of the custom branding.</p>
   * @public
   */
  Theme?: Theme | undefined;
}

/**
 * @public
 */
export interface DescribeUsageReportSubscriptionsRequest {
  /**
   * <p>The maximum size of each page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UsageReportExecutionErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INTERNAL_SERVICE_ERROR: "INTERNAL_SERVICE_ERROR",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
} as const;

/**
 * @public
 */
export type UsageReportExecutionErrorCode =
  (typeof UsageReportExecutionErrorCode)[keyof typeof UsageReportExecutionErrorCode];

/**
 * <p>Describes the error that is returned when a usage report can't be generated.</p>
 * @public
 */
export interface LastReportGenerationExecutionError {
  /**
   * <p>The error code for the error that is returned when a usage report can't be generated.</p>
   * @public
   */
  ErrorCode?: UsageReportExecutionErrorCode | undefined;

  /**
   * <p>The error message for the error that is returned when a usage report can't be generated.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>Describes information about the usage report subscription.</p>
 * @public
 */
export interface UsageReportSubscription {
  /**
   * <p>The Amazon S3 bucket where generated reports are stored.</p>
   *          <p>If you enabled on-instance session scripts and Amazon S3 logging for your session script
   *             configuration, WorkSpaces Applications created an S3 bucket to store the script output. The bucket is
   *             unique to your account and Region. When you enable usage reporting in this case, WorkSpaces Applications
   *             uses the same bucket to store your usage reports. If you haven't already enabled on-instance session scripts,
   *             when you enable usage reports, WorkSpaces Applications creates a new S3 bucket.</p>
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * <p>The schedule for generating usage reports.</p>
   * @public
   */
  Schedule?: UsageReportSchedule | undefined;

  /**
   * <p>The time when the last usage report was generated.</p>
   * @public
   */
  LastGeneratedReportDate?: Date | undefined;

  /**
   * <p>The errors that were returned if usage reports couldn't be generated.</p>
   * @public
   */
  SubscriptionErrors?: LastReportGenerationExecutionError[] | undefined;
}

/**
 * @public
 */
export interface DescribeUsageReportSubscriptionsResult {
  /**
   * <p>Information about the usage report subscription.</p>
   * @public
   */
  UsageReportSubscriptions?: UsageReportSubscription[] | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUsersRequest {
  /**
   * <p>The authentication type for the users in the user pool to describe. You must specify USERPOOL.</p>
   * @public
   */
  AuthenticationType: AuthenticationType | undefined;

  /**
   * <p>The maximum size of each page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes a user in the user pool.</p>
 * @public
 */
export interface User {
  /**
   * <p>The ARN of the user.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The email address of the user.</p>
   *          <note>
   *             <p>Users' email addresses are case-sensitive.</p>
   *          </note>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>Specifies whether the user in the user pool is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The status of the user in the user pool. The status can be one of the following:</p>
   *          <ul>
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
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The first name, or given name, of the user.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>The last name, or surname, of the user.</p>
   * @public
   */
  LastName?: string | undefined;

  /**
   * <p>The date and time the user was created in the user pool.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The authentication type for the user.</p>
   * @public
   */
  AuthenticationType: AuthenticationType | undefined;
}

/**
 * @public
 */
export interface DescribeUsersResult {
  /**
   * <p>Information about users in the user pool.</p>
   * @public
   */
  Users?: User[] | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserStackAssociationsRequest {
  /**
   * <p>The name of the stack that is associated with the user.</p>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>The email address of the user who is associated with the stack.</p>
   *          <note>
   *             <p>Users' email addresses are case-sensitive.</p>
   *          </note>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The authentication type for the user who is associated with the stack. You must specify USERPOOL.</p>
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * <p>The maximum size of each page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserStackAssociationsResult {
  /**
   * <p>The UserStackAssociation objects.</p>
   * @public
   */
  UserStackAssociations?: UserStackAssociation[] | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisableUserRequest {
  /**
   * <p>The email address of the user.</p>
   *          <note>
   *             <p>Users' email addresses are case-sensitive.</p>
   *          </note>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The authentication type for the user. You must specify USERPOOL.</p>
   * @public
   */
  AuthenticationType: AuthenticationType | undefined;
}

/**
 * @public
 */
export interface DisableUserResult {}

/**
 * @public
 */
export interface DisassociateAppBlockBuilderAppBlockRequest {
  /**
   * <p>The ARN of the app block.</p>
   * @public
   */
  AppBlockArn: string | undefined;

  /**
   * <p>The name of the app block builder.</p>
   * @public
   */
  AppBlockBuilderName: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAppBlockBuilderAppBlockResult {}

/**
 * @public
 */
export interface DisassociateApplicationFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  FleetName: string | undefined;

  /**
   * <p>The ARN of the application.</p>
   * @public
   */
  ApplicationArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateApplicationFleetResult {}

/**
 * @public
 */
export interface DisassociateApplicationFromEntitlementRequest {
  /**
   * <p>The name of the stack with which the entitlement is associated.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The name of the entitlement.</p>
   * @public
   */
  EntitlementName: string | undefined;

  /**
   * <p>The identifier of the application to remove from the entitlement.</p>
   * @public
   */
  ApplicationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DisassociateApplicationFromEntitlementResult {}

/**
 * @public
 */
export interface DisassociateFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  FleetName: string | undefined;

  /**
   * <p>The name of the stack.</p>
   * @public
   */
  StackName: string | undefined;
}

/**
 * @public
 */
export interface DisassociateFleetResult {}

/**
 * @public
 */
export interface DisassociateSoftwareFromImageBuilderRequest {
  /**
   * <p>The name of the target image builder instance.</p>
   * @public
   */
  ImageBuilderName: string | undefined;

  /**
   * <p>The list of license included applications to disassociate from the image builder.</p>
   *          <p>Possible values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Professional_Plus_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Professional_Plus_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Professional_Plus_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Professional_Plus_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Professional_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Professional_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2021_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Office_2024_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2021_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Visio_2024_LTSC_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2021_Standard_64Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Standard_32Bit</p>
   *             </li>
   *             <li>
   *                <p>Microsoft_Project_2024_Standard_64Bit</p>
   *             </li>
   *          </ul>
   * @public
   */
  SoftwareNames: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateSoftwareFromImageBuilderResult {}

/**
 * @public
 */
export interface EnableUserRequest {
  /**
   * <p>The email address of the user.</p>
   *          <note>
   *             <p>Users' email addresses are case-sensitive. During login, if they specify an email address that doesn't use the same capitalization as the email address specified when their user pool account was created, a "user does not exist" error message displays. </p>
   *          </note>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The authentication type for the user. You must specify USERPOOL.</p>
   * @public
   */
  AuthenticationType: AuthenticationType | undefined;
}

/**
 * @public
 */
export interface EnableUserResult {}

/**
 * <p>The application associated to an entitlement. Access is controlled based on user attributes.</p>
 * @public
 */
export interface EntitledApplication {
  /**
   * <p>The identifier of the application.</p>
   * @public
   */
  ApplicationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ExpireSessionRequest {
  /**
   * <p>The identifier of the streaming session.</p>
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface ExpireSessionResult {}

/**
 * <p>A filter for narrowing down the results when listing export image tasks. Filters allow you to specify criteria such as task state or creation date.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the filter. Valid filter names depend on the operation being performed.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The values for the filter. Multiple values can be specified for a single filter name.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FleetAttribute = {
  DOMAIN_JOIN_INFO: "DOMAIN_JOIN_INFO",
  IAM_ROLE_ARN: "IAM_ROLE_ARN",
  MAX_SESSIONS_PER_INSTANCE: "MAX_SESSIONS_PER_INSTANCE",
  SESSION_SCRIPT_S3_LOCATION: "SESSION_SCRIPT_S3_LOCATION",
  USB_DEVICE_FILTER_STRINGS: "USB_DEVICE_FILTER_STRINGS",
  VOLUME_CONFIGURATION: "VOLUME_CONFIGURATION",
  VPC_CONFIGURATION: "VPC_CONFIGURATION",
  VPC_CONFIGURATION_SECURITY_GROUP_IDS: "VPC_CONFIGURATION_SECURITY_GROUP_IDS",
} as const;

/**
 * @public
 */
export type FleetAttribute = (typeof FleetAttribute)[keyof typeof FleetAttribute];

/**
 * @public
 */
export interface GetExportImageTaskRequest {
  /**
   * <p>The unique identifier of the export image task to retrieve information about.</p>
   * @public
   */
  TaskId?: string | undefined;
}

/**
 * @public
 */
export interface GetExportImageTaskResult {
  /**
   * <p>Information about the export image task, including its current state, created date, and any error details.</p>
   * @public
   */
  ExportImageTask?: ExportImageTask | undefined;
}

/**
 * @public
 */
export interface ListAssociatedFleetsRequest {
  /**
   * <p>The name of the stack.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedFleetsResult {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedStacksRequest {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  FleetName: string | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedStacksResult {
  /**
   * <p>The name of the stack.</p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntitledApplicationsRequest {
  /**
   * <p>The name of the stack with which the entitlement is associated.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The name of the entitlement.</p>
   * @public
   */
  EntitlementName: string | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of each page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEntitledApplicationsResult {
  /**
   * <p>The entitled applications.</p>
   * @public
   */
  EntitledApplications?: EntitledApplication[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExportImageTasksRequest {
  /**
   * <p>Optional filters to apply when listing export image tasks. Filters help you narrow down the results based on specific criteria.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of export image tasks to return in a single request. The valid range is 1-500, with a default of 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous request. Use this to retrieve the next page of results when there are more tasks than the MaxResults limit.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExportImageTasksResult {
  /**
   * <p>The list of export image tasks that match the specified criteria.</p>
   * @public
   */
  ExportImageTasks?: ExportImageTask[] | undefined;

  /**
   * <p>The pagination token to use for retrieving the next page of results. This field is only present when there are more results available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The information about the tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartAppBlockBuilderRequest {
  /**
   * <p>The name of the app block builder.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartAppBlockBuilderResult {
  /**
   * <p>Describes an app block builder.</p>
   * @public
   */
  AppBlockBuilder?: AppBlockBuilder | undefined;
}

/**
 * @public
 */
export interface StartFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartFleetResult {}

/**
 * @public
 */
export interface StartImageBuilderRequest {
  /**
   * <p>The name of the image builder.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The version of the WorkSpaces Applications agent to use for this image builder. To use the latest version of the WorkSpaces Applications agent, specify [LATEST]. </p>
   * @public
   */
  AppstreamAgentVersion?: string | undefined;
}

/**
 * @public
 */
export interface StartImageBuilderResult {
  /**
   * <p>Information about the image builder.</p>
   * @public
   */
  ImageBuilder?: ImageBuilder | undefined;
}

/**
 * @public
 */
export interface StartSoftwareDeploymentToImageBuilderRequest {
  /**
   * <p>The name of the target image builder instance.</p>
   * @public
   */
  ImageBuilderName: string | undefined;

  /**
   * <p>Whether to retry previously failed license included application deployments.</p>
   * @public
   */
  RetryFailedDeployments?: boolean | undefined;
}

/**
 * @public
 */
export interface StartSoftwareDeploymentToImageBuilderResult {}

/**
 * @public
 */
export interface StopAppBlockBuilderRequest {
  /**
   * <p>The name of the app block builder.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopAppBlockBuilderResult {
  /**
   * <p>Describes an app block builder.</p>
   * @public
   */
  AppBlockBuilder?: AppBlockBuilder | undefined;
}

/**
 * @public
 */
export interface StopFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopFleetResult {}

/**
 * @public
 */
export interface StopImageBuilderRequest {
  /**
   * <p>The name of the image builder.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopImageBuilderResult {
  /**
   * <p>Information about the image builder.</p>
   * @public
   */
  ImageBuilder?: ImageBuilder | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to associate. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p>
   *          <p>If you do not specify a value, the value is set to an empty string.</p>
   *          <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p>
   *          <p>_ . : / = + \ - @</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys for the tags to disassociate.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAppBlockBuilderRequest {
  /**
   * <p>The unique name for the app block builder.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the app block builder.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The display name of the app block builder.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The platform of the app block builder.</p>
   *          <p>
   *             <code>WINDOWS_SERVER_2019</code> is the only valid value.</p>
   * @public
   */
  Platform?: PlatformType | undefined;

  /**
   * <p>The instance type to use when launching the app block builder. The following instance
   *                 types are available:</p>
   *          <ul>
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
   *                <p>stream.standard.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.standard.2xlarge</p>
   *             </li>
   *          </ul>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The VPC configuration for the app block builder.</p>
   *          <p>App block builders require that you specify at least two subnets in different availability
   *             zones.</p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>Enables or disables default internet access for the app block builder.</p>
   * @public
   */
  EnableDefaultInternetAccess?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to apply to the app block builder. To
   *             assume a role, the app block builder calls the AWS Security Token Service (STS)
   *             <code>AssumeRole</code> API operation and passes the ARN of the role to use. The
   *             operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the
   *             temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances</a> in the <i>Amazon WorkSpaces Applications Administration Guide</i>.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The list of interface VPC endpoint (interface endpoint) objects. Administrators can connect to the app block builder only through the specified endpoints.</p>
   * @public
   */
  AccessEndpoints?: AccessEndpoint[] | undefined;

  /**
   * <p>The attributes to delete from the app block builder.</p>
   * @public
   */
  AttributesToDelete?: AppBlockBuilderAttribute[] | undefined;
}

/**
 * @public
 */
export interface UpdateAppBlockBuilderResult {
  /**
   * <p>Describes an app block builder.</p>
   * @public
   */
  AppBlockBuilder?: AppBlockBuilder | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * <p>The name of the application. This name is visible to users when display name is not specified.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The display name of the application. This name is visible to users in the application catalog.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The icon S3 location of the application.</p>
   * @public
   */
  IconS3Location?: S3Location | undefined;

  /**
   * <p>The launch path of the application.</p>
   * @public
   */
  LaunchPath?: string | undefined;

  /**
   * <p>The working directory of the application.</p>
   * @public
   */
  WorkingDirectory?: string | undefined;

  /**
   * <p>The launch parameters of the application.</p>
   * @public
   */
  LaunchParameters?: string | undefined;

  /**
   * <p>The ARN of the app block.</p>
   * @public
   */
  AppBlockArn?: string | undefined;

  /**
   * <p>The attributes to delete for an application.</p>
   * @public
   */
  AttributesToDelete?: ApplicationAttribute[] | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResult {
  /**
   * <p>Describes an application in the application catalog.</p>
   * @public
   */
  Application?: Application | undefined;
}

/**
 * @public
 */
export interface UpdateDirectoryConfigRequest {
  /**
   * <p>The name of the Directory Config object.</p>
   * @public
   */
  DirectoryName: string | undefined;

  /**
   * <p>The distinguished names of the organizational units for computer accounts.</p>
   * @public
   */
  OrganizationalUnitDistinguishedNames?: string[] | undefined;

  /**
   * <p>The credentials for the service account used by the fleet or image builder to connect to the directory.</p>
   * @public
   */
  ServiceAccountCredentials?: ServiceAccountCredentials | undefined;

  /**
   * <p>The certificate-based authentication properties used to authenticate SAML 2.0 Identity
   *             Provider (IdP) user identities to Active Directory domain-joined streaming instances.
   *             Fallback is turned on by default when certificate-based authentication is <b>Enabled</b> . Fallback allows users to log in using their AD
   *             domain password if certificate-based authentication is unsuccessful, or to unlock a
   *             desktop lock screen. <b>Enabled_no_directory_login_fallback</b> enables certificate-based
   *             authentication, but does not allow users to log in using their AD domain password. Users
   *             will be disconnected to re-authenticate using certificates.</p>
   * @public
   */
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties | undefined;
}

/**
 * @public
 */
export interface UpdateDirectoryConfigResult {
  /**
   * <p>Information about the Directory Config object.</p>
   * @public
   */
  DirectoryConfig?: DirectoryConfig | undefined;
}

/**
 * @public
 */
export interface UpdateEntitlementRequest {
  /**
   * <p>The name of the entitlement.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the stack with which the entitlement is associated.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The description of the entitlement.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies whether all or only selected apps are entitled.</p>
   * @public
   */
  AppVisibility?: AppVisibility | undefined;

  /**
   * <p>The attributes of the entitlement.</p>
   * @public
   */
  Attributes?: EntitlementAttribute[] | undefined;
}

/**
 * @public
 */
export interface UpdateEntitlementResult {
  /**
   * <p>The entitlement.</p>
   * @public
   */
  Entitlement?: Entitlement | undefined;
}

/**
 * @public
 */
export interface UpdateFleetRequest {
  /**
   * <p>The name of the image used to create the fleet.</p>
   * @public
   */
  ImageName?: string | undefined;

  /**
   * <p>The ARN of the public, private, or shared image to use.</p>
   * @public
   */
  ImageArn?: string | undefined;

  /**
   * <p>A unique name for the fleet.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The instance type to use when launching fleet instances. The following instance types are available:</p>
   *          <ul>
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
   *                <p>stream.standard.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.standard.2xlarge</p>
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
   *                <p>stream.graphics.g5.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.16xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g5.24xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.16xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.12xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6.24xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.gr6.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.gr6.8xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.large</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.2xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.g6f.4xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.graphics.gr6f.4xlarge</p>
   *             </li>
   *          </ul>
   *          <p>The following instance types are available for Elastic fleets:</p>
   *          <ul>
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
   *                <p>stream.standard.xlarge</p>
   *             </li>
   *             <li>
   *                <p>stream.standard.2xlarge</p>
   *             </li>
   *          </ul>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The desired capacity for the fleet. This is not allowed for Elastic fleets.</p>
   * @public
   */
  ComputeCapacity?: ComputeCapacity | undefined;

  /**
   * <p>The VPC configuration for the fleet. This is required for Elastic fleets, but not required for other fleet types. Elastic fleets require that you specify at least two subnets in different availability zones. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.</p>
   *          <p>Specify a value between 600 and 432000.</p>
   * @public
   */
  MaxUserDurationInSeconds?: number | undefined;

  /**
   * <p>The amount of time that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance. </p>
   *          <p>Specify a value between 60 and 36000.</p>
   * @public
   */
  DisconnectTimeoutInSeconds?: number | undefined;

  /**
   * <p>Deletes the VPC association for the specified fleet.</p>
   *
   * @deprecated deprecated
   * @public
   */
  DeleteVpcConfig?: boolean | undefined;

  /**
   * <p>The description to display.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The fleet name to display.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>Enables or disables default internet access for the fleet.</p>
   * @public
   */
  EnableDefaultInternetAccess?: boolean | undefined;

  /**
   * <p>The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. </p>
   * @public
   */
  DomainJoinInfo?: DomainJoinInfo | undefined;

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
   *          <p>To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 36000. The default value is 0.</p>
   *          <note>
   *             <p>If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity. </p>
   *          </note>
   * @public
   */
  IdleDisconnectTimeoutInSeconds?: number | undefined;

  /**
   * <p>The fleet attributes to delete.</p>
   * @public
   */
  AttributesToDelete?: FleetAttribute[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to apply to the fleet. To assume a role, a fleet instance calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances</a> in the <i>Amazon WorkSpaces Applications Administration Guide</i>.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The WorkSpaces Applications view that is displayed to your users when they stream from the fleet. When <code>APP</code> is specified, only the windows of applications opened by users display. When <code>DESKTOP</code> is specified, the standard desktop that is provided by the operating system displays.</p>
   *          <p>The default value is <code>APP</code>.</p>
   * @public
   */
  StreamView?: StreamView | undefined;

  /**
   * <p>The platform of the fleet. WINDOWS_SERVER_2019 and AMAZON_LINUX2 are supported for Elastic fleets. </p>
   * @public
   */
  Platform?: PlatformType | undefined;

  /**
   * <p>The maximum number of concurrent sessions for a fleet.</p>
   * @public
   */
  MaxConcurrentSessions?: number | undefined;

  /**
   * <p>The USB device filter strings that specify which USB devices a user can redirect to the fleet streaming session, when using the Windows native client. This is allowed but not required for Elastic fleets.</p>
   * @public
   */
  UsbDeviceFilterStrings?: string[] | undefined;

  /**
   * <p>The S3 location of the session scripts configuration zip file. This only applies to Elastic fleets. </p>
   * @public
   */
  SessionScriptS3Location?: S3Location | undefined;

  /**
   * <p>The maximum number of user sessions on an instance. This only applies to multi-session fleets.</p>
   * @public
   */
  MaxSessionsPerInstance?: number | undefined;

  /**
   * <p>The updated configuration for the root volume of fleet instances. Note that volume size cannot be decreased below the image volume size.</p>
   * @public
   */
  RootVolumeConfig?: VolumeConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFleetResult {
  /**
   * <p>Information about the fleet.</p>
   * @public
   */
  Fleet?: Fleet | undefined;
}

/**
 * @public
 */
export interface UpdateImagePermissionsRequest {
  /**
   * <p>The name of the private image.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The 12-digit identifier of the AWS account for which you want add or update image permissions.</p>
   * @public
   */
  SharedAccountId: string | undefined;

  /**
   * <p>The permissions for the image.</p>
   * @public
   */
  ImagePermissions: ImagePermissions | undefined;
}

/**
 * @public
 */
export interface UpdateImagePermissionsResult {}

/**
 * @public
 * @enum
 */
export const StackAttribute = {
  ACCESS_ENDPOINTS: "ACCESS_ENDPOINTS",
  EMBED_HOST_DOMAINS: "EMBED_HOST_DOMAINS",
  FEEDBACK_URL: "FEEDBACK_URL",
  IAM_ROLE_ARN: "IAM_ROLE_ARN",
  REDIRECT_URL: "REDIRECT_URL",
  STORAGE_CONNECTORS: "STORAGE_CONNECTORS",
  STORAGE_CONNECTOR_GOOGLE_DRIVE: "STORAGE_CONNECTOR_GOOGLE_DRIVE",
  STORAGE_CONNECTOR_HOMEFOLDERS: "STORAGE_CONNECTOR_HOMEFOLDERS",
  STORAGE_CONNECTOR_ONE_DRIVE: "STORAGE_CONNECTOR_ONE_DRIVE",
  STREAMING_EXPERIENCE_SETTINGS: "STREAMING_EXPERIENCE_SETTINGS",
  THEME_NAME: "THEME_NAME",
  USER_SETTINGS: "USER_SETTINGS",
} as const;

/**
 * @public
 */
export type StackAttribute = (typeof StackAttribute)[keyof typeof StackAttribute];

/**
 * @public
 */
export interface UpdateStackRequest {
  /**
   * <p>The stack name to display.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The description to display.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the stack.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The storage connectors to enable.</p>
   * @public
   */
  StorageConnectors?: StorageConnector[] | undefined;

  /**
   * <p>Deletes the storage connectors currently enabled for the stack.</p>
   *
   * @deprecated deprecated
   * @public
   */
  DeleteStorageConnectors?: boolean | undefined;

  /**
   * <p>The URL that users are redirected to after their streaming session ends.</p>
   * @public
   */
  RedirectURL?: string | undefined;

  /**
   * <p>The URL that users are redirected to after they choose the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.</p>
   * @public
   */
  FeedbackURL?: string | undefined;

  /**
   * <p>The stack attributes to delete.</p>
   * @public
   */
  AttributesToDelete?: StackAttribute[] | undefined;

  /**
   * <p>The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.</p>
   * @public
   */
  UserSettings?: UserSetting[] | undefined;

  /**
   * <p>The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.</p>
   * @public
   */
  ApplicationSettings?: ApplicationSettings | undefined;

  /**
   * <p>The list of interface VPC endpoint (interface endpoint) objects. Users of the stack can connect to WorkSpaces Applications only through the specified endpoints.</p>
   * @public
   */
  AccessEndpoints?: AccessEndpoint[] | undefined;

  /**
   * <p>The domains where WorkSpaces Applications streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded WorkSpaces Applications streaming sessions. </p>
   * @public
   */
  EmbedHostDomains?: string[] | undefined;

  /**
   * <p>The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.</p>
   * @public
   */
  StreamingExperienceSettings?: StreamingExperienceSettings | undefined;
}

/**
 * @public
 */
export interface UpdateStackResult {
  /**
   * <p>Information about the stack.</p>
   * @public
   */
  Stack?: Stack | undefined;
}

/**
 * @public
 * @enum
 */
export const ThemeAttribute = {
  FOOTER_LINKS: "FOOTER_LINKS",
} as const;

/**
 * @public
 */
export type ThemeAttribute = (typeof ThemeAttribute)[keyof typeof ThemeAttribute];

/**
 * @public
 */
export interface UpdateThemeForStackRequest {
  /**
   * <p>The name of the stack for the theme.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The links that are displayed in the footer of the streaming application catalog page. These links are helpful resources for users, such as the organization's IT support and product marketing sites.</p>
   * @public
   */
  FooterLinks?: ThemeFooterLink[] | undefined;

  /**
   * <p>The title that is displayed at the top of the browser tab during users' application streaming sessions.</p>
   * @public
   */
  TitleText?: string | undefined;

  /**
   * <p>The color theme that is applied to website links, text, and buttons. These colors are also applied as accents in the background for the streaming application catalog page.</p>
   * @public
   */
  ThemeStyling?: ThemeStyling | undefined;

  /**
   * <p>The organization logo that appears on the streaming application catalog page.</p>
   * @public
   */
  OrganizationLogoS3Location?: S3Location | undefined;

  /**
   * <p>The S3 location of the favicon. The favicon enables users to recognize their application streaming site in a browser full of tabs or bookmarks. It is displayed at the top of the browser tab for the application streaming site during users' streaming sessions.</p>
   * @public
   */
  FaviconS3Location?: S3Location | undefined;

  /**
   * <p>Specifies whether custom branding should be applied to catalog page or not.</p>
   * @public
   */
  State?: ThemeState | undefined;

  /**
   * <p>The attributes to delete.</p>
   * @public
   */
  AttributesToDelete?: ThemeAttribute[] | undefined;
}

/**
 * @public
 */
export interface UpdateThemeForStackResult {
  /**
   * <p> The theme object that contains the metadata of the custom branding.</p>
   * @public
   */
  Theme?: Theme | undefined;
}
