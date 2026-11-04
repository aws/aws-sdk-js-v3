// smithy-typescript generated code
import type {
  AccessEndpointType,
  Action,
  AgentAction,
  AgentSoftwareVersion,
  AppBlockBuilderAttribute,
  AppBlockBuilderPlatformType,
  AppBlockBuilderState,
  AppBlockBuilderStateChangeReasonCode,
  AppBlockState,
  ApplicationAttribute,
  AppVisibility,
  AuthenticationType,
  CertificateBasedAuthStatus,
  DynamicAppProvidersEnabled,
  ExportImageTaskState,
  FleetAttribute,
  FleetErrorCode,
  FleetState,
  FleetType,
  ImageBuilderState,
  ImageBuilderStateChangeReasonCode,
  ImageSharedWithOthers,
  ImageState,
  ImageStateChangeReasonCode,
  ImageType,
  InstanceDrainStatus,
  LatestAppstreamAgentVersion,
  MessageAction,
  PackagingType,
  Permission,
  PlatformType,
  PreferredProtocol,
  ScreenImageFormat,
  ScreenResolution,
  SessionConnectionState,
  SessionState,
  SoftwareDeploymentStatus,
  StackAttribute,
  StackErrorCode,
  StorageConnectorAuthentication,
  StorageConnectorType,
  StreamView,
  ThemeAttribute,
  ThemeState,
  ThemeStyling,
  UsageReportExecutionErrorCode,
  UsageReportSchedule,
  UserControlMode,
  UserStackAssociationErrorCode,
  VisibilityType,
} from "./enums";

/**
 * Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and WorkSpaces Applications. When you specify an interface endpoint for a stack, users of the stack can connect to WorkSpaces Applications only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint.
 *
 * @public
 */
export interface AccessEndpoint {
  /**
   * The type of interface endpoint.
   *
   * @public
   */
  EndpointType: AccessEndpointType | undefined;

  /**
   * The identifier (ID) of the VPC in which the interface endpoint is used.
   *
   * @public
   */
  VpceId?: string | undefined;
}

/**
 * The collection of license usage records.
 *
 * @public
 */
export interface AdminAppLicenseUsageRecord {
  /**
   * The ARN of the user who used the license-included application.
   *
   * @public
   */
  UserArn: string | undefined;

  /**
   * The billing period for the license usage record.
   *
   * @public
   */
  BillingPeriod: string | undefined;

  /**
   * The account ID of the owner of the license.
   *
   * @public
   */
  OwnerAWSAccountId: string | undefined;

  /**
   * The date and time when the license was first used.
   *
   * @public
   */
  SubscriptionFirstUsedDate: Date | undefined;

  /**
   * The date and time when the license was last used.
   *
   * @public
   */
  SubscriptionLastUsedDate: Date | undefined;

  /**
   * The type of license (for example, Microsoft Office).
   *
   * @public
   */
  LicenseType: string | undefined;

  /**
   * The ID of the user who used the license-included application.
   *
   * @public
   */
  UserId: string | undefined;
}

/**
 * A permission setting for an agent action. Each setting specifies an agent action and whether it is enabled or disabled.
 *
 * @public
 */
export interface AgentAccessSetting {
  /**
   * The agent action to configure. Valid values are COMPUTER_VISION, COMPUTER_INPUT, and FORWARD_MCP_TOOLS. If you enable COMPUTER_INPUT, you must also enable COMPUTER_VISION.
   *
   * @public
   */
  AgentAction: AgentAction | undefined;

  /**
   * Whether the agent action is enabled or disabled.
   *
   * @public
   */
  Permission: Permission | undefined;
}

/**
 * The configuration for agent access on a stack. Agent access enables AI agents to interact with desktop applications during streaming sessions.
 *
 * @public
 */
export interface AgentAccessConfig {
  /**
   * The list of agent access settings that define permissions for each agent action. You must specify at least one setting.
   *
   * @public
   */
  Settings: AgentAccessSetting[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 bucket where agent screenshots are stored. Required when ScreenshotsUploadEnabled is true.
   *
   * @public
   */
  S3BucketArn?: string | undefined;

  /**
   * Indicates whether screenshot uploads to Amazon S3 are enabled for agent sessions.
   *
   * @public
   */
  ScreenshotsUploadEnabled?: boolean | undefined;

  /**
   * The screen resolution for the agent streaming environment.
   *
   * @public
   */
  ScreenResolution: ScreenResolution | undefined;

  /**
   * The image format for agent screen captures.
   *
   * @public
   */
  ScreenImageFormat: ScreenImageFormat | undefined;

  /**
   * The user control mode for agent sessions. This setting determines how users can interact with agent sessions.
   *
   * @public
   */
  UserControlMode?: UserControlMode | undefined;
}

/**
 * The configuration for updating agent access on a stack. This type supports partial updates, so you only need to specify the fields you want to change.
 *
 * @public
 */
export interface AgentAccessConfigForUpdate {
  /**
   * The list of agent access settings that define permissions for each agent action.
   *
   * @public
   */
  Settings?: AgentAccessSetting[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 bucket where agent screenshots are stored.
   *
   * @public
   */
  S3BucketArn?: string | undefined;

  /**
   * Indicates whether screenshot uploads to Amazon S3 are enabled for agent sessions.
   *
   * @public
   */
  ScreenshotsUploadEnabled?: boolean | undefined;

  /**
   * The screen resolution for the agent streaming environment.
   *
   * @public
   */
  ScreenResolution?: ScreenResolution | undefined;

  /**
   * The image format for agent screen captures.
   *
   * @public
   */
  ScreenImageFormat?: ScreenImageFormat | undefined;

  /**
   * The user control mode for agent sessions. This setting determines how users can interact with agent sessions.
   *
   * @public
   */
  UserControlMode?: UserControlMode | undefined;
}

/**
 * The error details.
 *
 * @public
 */
export interface ErrorDetails {
  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Describes the S3 location.
 *
 * @public
 */
export interface S3Location {
  /**
   * The S3 bucket of the S3 object.
   *
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * The S3 key of the S3 object.
   *
   * This is required when used for the following:
   *
   * - IconS3Location (Actions: CreateApplication and UpdateApplication)
   * - SessionScriptS3Location (Actions: CreateFleet and UpdateFleet)
   * - ScriptDetails (Actions: CreateAppBlock)
   * - SourceS3Location when creating an app block with `CUSTOM` PackagingType (Actions: CreateAppBlock)
   * - SourceS3Location when creating an app block with `APPSTREAM2` PackagingType, and using an existing application package (VHD file). In this case, `S3Key` refers to the VHD file. If a new application package is required, then `S3Key` is not required. (Actions: CreateAppBlock)
   *
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * Describes the details of the script.
 *
 * @public
 */
export interface ScriptDetails {
  /**
   * The S3 object location for the script.
   *
   * @public
   */
  ScriptS3Location: S3Location | undefined;

  /**
   * The run path for the script.
   *
   * @public
   */
  ExecutablePath: string | undefined;

  /**
   * The runtime parameters passed to the run path for the script.
   *
   * @public
   */
  ExecutableParameters?: string | undefined;

  /**
   * The run timeout, in seconds, for the script.
   *
   * @public
   */
  TimeoutInSeconds: number | undefined;
}

/**
 * Describes an app block.
 *
 * App blocks are a WorkSpaces Applications resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block.
 *
 * This is only supported for Elastic fleets.
 *
 * @public
 */
export interface AppBlock {
  /**
   * The name of the app block.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ARN of the app block.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The description of the app block.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The display name of the app block.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The source S3 location of the app block.
   *
   * @public
   */
  SourceS3Location?: S3Location | undefined;

  /**
   * The setup script details of the app block.
   *
   * This only applies to app blocks with PackagingType `CUSTOM`.
   *
   * @public
   */
  SetupScriptDetails?: ScriptDetails | undefined;

  /**
   * The created time of the app block.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The post setup script details of the app block.
   *
   * This only applies to app blocks with PackagingType `APPSTREAM2`.
   *
   * @public
   */
  PostSetupScriptDetails?: ScriptDetails | undefined;

  /**
   * The packaging type of the app block.
   *
   * @public
   */
  PackagingType?: PackagingType | undefined;

  /**
   * The state of the app block.
   *
   * An app block with WorkSpaces Applications packaging will be in the `INACTIVE` state if no application package (VHD) is assigned to it. After an application package (VHD) is created by an app block builder for an app block, it becomes `ACTIVE`.
   *
   * Custom app blocks are always in the `ACTIVE` state and no action is required to use them.
   *
   * @public
   */
  State?: AppBlockState | undefined;

  /**
   * The errors of the app block.
   *
   * @public
   */
  AppBlockErrors?: ErrorDetails[] | undefined;
}

/**
 * Describes a resource error.
 *
 * @public
 */
export interface ResourceError {
  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: FleetErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The time the error occurred.
   *
   * @public
   */
  ErrorTimestamp?: Date | undefined;
}

/**
 * Describes the reason why the last app block builder state change occurred.
 *
 * @public
 */
export interface AppBlockBuilderStateChangeReason {
  /**
   * The state change reason code.
   *
   * @public
   */
  Code?: AppBlockBuilderStateChangeReasonCode | undefined;

  /**
   * The state change reason message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes VPC configuration information for fleets and image builders.
 *
 * @public
 */
export interface VpcConfig {
  /**
   * The identifiers of the subnets to which a network interface is attached from the fleet instance or image builder instance. Fleet instances use one or more subnets. Image builder instances use one subnet.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The identifiers of the security groups for the fleet or image builder.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * Describes an app block builder.
 *
 * @public
 */
export interface AppBlockBuilder {
  /**
   * The ARN of the app block builder.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the app block builder.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The display name of the app block builder.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the app block builder.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The platform of the app block builder.
   *
   * `WINDOWS_SERVER_2019` is the only valid value.
   *
   * @public
   */
  Platform: AppBlockBuilderPlatformType | undefined;

  /**
   * The instance type of the app block builder.
   *
   * @public
   */
  InstanceType: string | undefined;

  /**
   * Indicates whether default internet access is enabled for the app block builder.
   *
   * @public
   */
  EnableDefaultInternetAccess?: boolean | undefined;

  /**
   * The ARN of the IAM role that is applied to the app block builder.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * The VPC configuration for the app block builder.
   *
   * @public
   */
  VpcConfig: VpcConfig | undefined;

  /**
   * The state of the app block builder.
   *
   * @public
   */
  State: AppBlockBuilderState | undefined;

  /**
   * The creation time of the app block builder.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The app block builder errors.
   *
   * @public
   */
  AppBlockBuilderErrors?: ResourceError[] | undefined;

  /**
   * The state change reason.
   *
   * @public
   */
  StateChangeReason?: AppBlockBuilderStateChangeReason | undefined;

  /**
   * The list of interface VPC endpoint (interface endpoint) objects. Administrators can connect to the app block builder only through the specified endpoints.
   *
   * @public
   */
  AccessEndpoints?: AccessEndpoint[] | undefined;

  /**
   * Indicates whether Instance Metadata Service Version 1 (IMDSv1) is disabled for the app block builder.
   *
   * @public
   */
  DisableIMDSV1?: boolean | undefined;
}

/**
 * Describes an association between an app block builder and app block.
 *
 * @public
 */
export interface AppBlockBuilderAppBlockAssociation {
  /**
   * The ARN of the app block.
   *
   * @public
   */
  AppBlockArn: string | undefined;

  /**
   * The name of the app block builder.
   *
   * @public
   */
  AppBlockBuilderName: string | undefined;
}

/**
 * Configuration for an application in the imported image's application catalog. This structure defines how applications appear and launch for users.
 *
 * @public
 */
export interface ApplicationConfig {
  /**
   * The name of the application. This is a required field that must be unique within the application catalog and between 1-100 characters, matching the pattern ^[a-zA-Z0-9][a-zA-Z0-9_.-]\{0,99\}$.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The display name shown to users for this application. This field is optional and can be 0-100 characters, matching the pattern ^[a-zA-Z0-9][a-zA-Z0-9_. -]\{0,99\}$.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The absolute path to the executable file that launches the application. This is a required field that can be 1-32767 characters to support Windows extended file paths. Use escaped file path strings like "C:\\\\Windows\\\\System32\\\\notepad.exe".
   *
   * @public
   */
  AbsoluteAppPath: string | undefined;

  /**
   * The absolute path to the icon file for the application. This field is optional and can be 1-32767 characters. If not provided, the icon is derived from the executable. Use PNG images with proper transparency for the best user experience.
   *
   * @public
   */
  AbsoluteIconPath?: string | undefined;

  /**
   * The absolute path to the prewarm manifest file for this application. This field is optional and only applicable when using application-specific manifests. The path can be 1-32767 characters and should point to a text file containing file paths to prewarm.
   *
   * @public
   */
  AbsoluteManifestPath?: string | undefined;

  /**
   * The working directory to use when launching the application. This field is optional and can be 0-32767 characters. Use escaped file path strings like "C:\\\\Path\\\\To\\\\Working\\\\Directory".
   *
   * @public
   */
  WorkingDirectory?: string | undefined;

  /**
   * The launch parameters to pass to the application executable. This field is optional and can be 0-1024 characters. Use escaped strings with the full list of required parameters, such as PowerShell script paths or command-line arguments.
   *
   * @public
   */
  LaunchParameters?: string | undefined;
}

/**
 * Describes an application in the application catalog.
 *
 * @public
 */
export interface Application {
  /**
   * The name of the application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The application name to display.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The URL for the application icon. This URL might be time-limited.
   *
   * @public
   */
  IconURL?: string | undefined;

  /**
   * The path to the application executable in the instance.
   *
   * @public
   */
  LaunchPath?: string | undefined;

  /**
   * The arguments that are passed to the application at launch.
   *
   * @public
   */
  LaunchParameters?: string | undefined;

  /**
   * If there is a problem, the application can be disabled after image creation.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Additional attributes that describe the application.
   *
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * The working directory for the application.
   *
   * @public
   */
  WorkingDirectory?: string | undefined;

  /**
   * The description of the application.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the application.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The app block ARN of the application.
   *
   * @public
   */
  AppBlockArn?: string | undefined;

  /**
   * The S3 location of the application icon.
   *
   * @public
   */
  IconS3Location?: S3Location | undefined;

  /**
   * The platforms on which the application can run.
   *
   * @public
   */
  Platforms?: PlatformType[] | undefined;

  /**
   * The instance families for the application.
   *
   * @public
   */
  InstanceFamilies?: string[] | undefined;

  /**
   * The time at which the application was created within the app block.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * Describes the application fleet association.
 *
 * @public
 */
export interface ApplicationFleetAssociation {
  /**
   * The name of the fleet associated with the application.
   *
   * @public
   */
  FleetName: string | undefined;

  /**
   * The ARN of the application associated with the fleet.
   *
   * @public
   */
  ApplicationArn: string | undefined;
}

/**
 * The persistent application settings for users of a stack.
 *
 * @public
 */
export interface ApplicationSettings {
  /**
   * Enables or disables persistent application settings for users during their streaming sessions.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The path prefix for the S3 bucket where users’ persistent application settings are stored. You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack.
   *
   * @public
   */
  SettingsGroup?: string | undefined;
}

/**
 * Describes the persistent application settings for users of a stack.
 *
 * @public
 */
export interface ApplicationSettingsResponse {
  /**
   * Specifies whether persistent application settings are enabled for users during their streaming sessions.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The path prefix for the S3 bucket where users’ persistent application settings are stored.
   *
   * @public
   */
  SettingsGroup?: string | undefined;

  /**
   * The S3 bucket where users’ persistent application settings are stored. When persistent application settings are enabled for the first time for an account in an AWS Region, an S3 bucket is created. The bucket is unique to the AWS account and the Region.
   *
   * @public
   */
  S3BucketName?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAppBlockBuilderAppBlockRequest {
  /**
   * The ARN of the app block.
   *
   * @public
   */
  AppBlockArn: string | undefined;

  /**
   * The name of the app block builder.
   *
   * @public
   */
  AppBlockBuilderName: string | undefined;
}

/**
 * @public
 */
export interface AssociateAppBlockBuilderAppBlockResult {
  /**
   * The list of app block builders associated with app blocks.
   *
   * @public
   */
  AppBlockBuilderAppBlockAssociation?: AppBlockBuilderAppBlockAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateApplicationFleetRequest {
  /**
   * The name of the fleet.
   *
   * @public
   */
  FleetName: string | undefined;

  /**
   * The ARN of the application.
   *
   * @public
   */
  ApplicationArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateApplicationFleetResult {
  /**
   * If fleet name is specified, this returns the list of applications that are associated to it. If application ARN is specified, this returns the list of fleets to which it is associated.
   *
   * @public
   */
  ApplicationFleetAssociation?: ApplicationFleetAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateApplicationToEntitlementRequest {
  /**
   * The name of the stack.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The name of the entitlement.
   *
   * @public
   */
  EntitlementName: string | undefined;

  /**
   * The identifier of the application.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface AssociateApplicationToEntitlementResult {}

/**
 * @public
 */
export interface AssociateFleetRequest {
  /**
   * The name of the fleet.
   *
   * @public
   */
  FleetName: string | undefined;

  /**
   * The name of the stack.
   *
   * @public
   */
  StackName: string | undefined;
}

/**
 * @public
 */
export interface AssociateFleetResult {}

/**
 * @public
 */
export interface AssociateSoftwareToImageBuilderRequest {
  /**
   * The name of the target image builder instance.
   *
   * @public
   */
  ImageBuilderName: string | undefined;

  /**
   * The list of license included applications to associate with the image builder.
   *
   * Possible values include the following:
   *
   * - Microsoft_Office_2021_LTSC_Professional_Plus_32Bit
   * - Microsoft_Office_2021_LTSC_Professional_Plus_64Bit
   * - Microsoft_Office_2024_LTSC_Professional_Plus_32Bit
   * - Microsoft_Office_2024_LTSC_Professional_Plus_64Bit
   * - Microsoft_Visio_2021_LTSC_Professional_32Bit
   * - Microsoft_Visio_2021_LTSC_Professional_64Bit
   * - Microsoft_Visio_2024_LTSC_Professional_32Bit
   * - Microsoft_Visio_2024_LTSC_Professional_64Bit
   * - Microsoft_Project_2021_Professional_32Bit
   * - Microsoft_Project_2021_Professional_64Bit
   * - Microsoft_Project_2024_Professional_32Bit
   * - Microsoft_Project_2024_Professional_64Bit
   * - Microsoft_Office_2021_LTSC_Standard_32Bit
   * - Microsoft_Office_2021_LTSC_Standard_64Bit
   * - Microsoft_Office_2024_LTSC_Standard_32Bit
   * - Microsoft_Office_2024_LTSC_Standard_64Bit
   * - Microsoft_Visio_2021_LTSC_Standard_32Bit
   * - Microsoft_Visio_2021_LTSC_Standard_64Bit
   * - Microsoft_Visio_2024_LTSC_Standard_32Bit
   * - Microsoft_Visio_2024_LTSC_Standard_64Bit
   * - Microsoft_Project_2021_Standard_32Bit
   * - Microsoft_Project_2021_Standard_64Bit
   * - Microsoft_Project_2024_Standard_32Bit
   * - Microsoft_Project_2024_Standard_64Bit
   *
   * @public
   */
  SoftwareNames: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateSoftwareToImageBuilderResult {}

/**
 * Describes a user in the user pool and the associated stack.
 *
 * @public
 */
export interface UserStackAssociation {
  /**
   * The name of the stack that is associated with the user.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The email address of the user who is associated with the stack.
   *
   * > **Note:** Users' email addresses are case-sensitive.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The authentication type for the user.
   *
   * @public
   */
  AuthenticationType: AuthenticationType | undefined;

  /**
   * Specifies whether a welcome email is sent to a user after the user is created in the user pool.
   *
   * @public
   */
  SendEmailNotification?: boolean | undefined;
}

/**
 * @public
 */
export interface BatchAssociateUserStackRequest {
  /**
   * The list of UserStackAssociation objects.
   *
   * @public
   */
  UserStackAssociations: UserStackAssociation[] | undefined;
}

/**
 * Describes the error that is returned when a user can’t be associated with or disassociated from a stack.
 *
 * @public
 */
export interface UserStackAssociationError {
  /**
   * Information about the user and associated stack.
   *
   * @public
   */
  UserStackAssociation?: UserStackAssociation | undefined;

  /**
   * The error code for the error that is returned when a user can’t be associated with or disassociated from a stack.
   *
   * @public
   */
  ErrorCode?: UserStackAssociationErrorCode | undefined;

  /**
   * The error message for the error that is returned when a user can’t be associated with or disassociated from a stack.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateUserStackResult {
  /**
   * The list of UserStackAssociationError objects.
   *
   * @public
   */
  errors?: UserStackAssociationError[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateUserStackRequest {
  /**
   * The list of UserStackAssociation objects.
   *
   * @public
   */
  UserStackAssociations: UserStackAssociation[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateUserStackResult {
  /**
   * The list of UserStackAssociationError objects.
   *
   * @public
   */
  errors?: UserStackAssociationError[] | undefined;
}

/**
 * The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances. Fallback is turned on by default when certificate-based authentication is **Enabled** . Fallback allows users to log in using their AD domain password if certificate-based authentication is unsuccessful, or to unlock a desktop lock screen. **Enabled_no_directory_login_fallback** enables certificate-based authentication, but does not allow users to log in using their AD domain password. Users will be disconnected to re-authenticate using certificates.
 *
 * @public
 */
export interface CertificateBasedAuthProperties {
  /**
   * The status of the certificate-based authentication properties.
   *
   * @public
   */
  Status?: CertificateBasedAuthStatus | undefined;

  /**
   * The ARN of the AWS Certificate Manager Private CA resource.
   *
   * @public
   */
  CertificateAuthorityArn?: string | undefined;
}

/**
 * Describes the capacity for a fleet.
 *
 * @public
 */
export interface ComputeCapacity {
  /**
   * The desired number of streaming instances.
   *
   * @public
   */
  DesiredInstances?: number | undefined;

  /**
   * The desired number of user sessions for a multi-session fleet. This is not allowed for single-session fleets.
   *
   * When you create a fleet, you must set either the DesiredSessions or DesiredInstances attribute, based on the type of fleet you create. You can’t define both attributes or leave both attributes blank.
   *
   * @public
   */
  DesiredSessions?: number | undefined;
}

/**
 * Describes the capacity status for a fleet.
 *
 * @public
 */
export interface ComputeCapacityStatus {
  /**
   * The desired number of streaming instances.
   *
   * @public
   */
  Desired: number | undefined;

  /**
   * The total number of simultaneous streaming instances that are running.
   *
   * @public
   */
  Running?: number | undefined;

  /**
   * The number of instances in use for streaming.
   *
   * @public
   */
  InUse?: number | undefined;

  /**
   * The number of currently available instances that can be used to stream sessions.
   *
   * @public
   */
  Available?: number | undefined;

  /**
   * The total number of sessions slots that are either running or pending. This represents the total number of concurrent streaming sessions your fleet can support in a steady state.
   *
   * DesiredUserSessionCapacity = ActualUserSessionCapacity + PendingUserSessionCapacity
   *
   * This only applies to multi-session fleets.
   *
   * @public
   */
  DesiredUserSessions?: number | undefined;

  /**
   * The number of idle session slots currently available for user sessions.
   *
   * AvailableUserSessionCapacity = ActualUserSessionCapacity - ActiveUserSessions
   *
   * This only applies to multi-session fleets.
   *
   * @public
   */
  AvailableUserSessions?: number | undefined;

  /**
   * The number of user sessions currently being used for streaming sessions. This only applies to multi-session fleets.
   *
   * @public
   */
  ActiveUserSessions?: number | undefined;

  /**
   * The total number of session slots that are available for streaming or are currently streaming.
   *
   * ActualUserSessionCapacity = AvailableUserSessionCapacity + ActiveUserSessions
   *
   * This only applies to multi-session fleets.
   *
   * @public
   */
  ActualUserSessions?: number | undefined;

  /**
   * The number of instances in drain mode. This only applies to multi-session fleets.
   *
   * @public
   */
  Draining?: number | undefined;

  /**
   * The number of active user sessions on instances in drain mode. This only applies to multi-session fleets.
   *
   * @public
   */
  DrainModeActiveUserSessions?: number | undefined;

  /**
   * The number of unused session slots on instances in drain mode that cannot be used for user session provisioning. This only applies to multi-session fleets.
   *
   * @public
   */
  DrainModeUnusedUserSessions?: number | undefined;
}

/**
 * Configuration for URL redirection in a specific direction (host-to-client or client-to-host). When enabled, URLs matching the allowed or denied patterns are redirected accordingly. The denied list takes precedence over the allowed list.
 *
 * @public
 */
export interface UrlRedirectionConfig {
  /**
   * Whether URL redirection is enabled for this direction.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * List of URL patterns that are allowed to be redirected. URLs matching these patterns will be redirected unless they also match a pattern in the denied list.
   *
   * @public
   */
  AllowedUrls?: string[] | undefined;

  /**
   * List of URL patterns that are denied from redirection. This list takes precedence over the allowed list.
   *
   * @public
   */
  DeniedUrls?: string[] | undefined;
}

/**
 * Configuration for bidirectional URL redirection between the streaming session and the local client. Use HostToClient to redirect URLs from the remote desktop to the local browser.
 *
 * @public
 */
export interface ContentRedirection {
  /**
   * Configuration for redirecting URLs from the remote desktop to the local client browser.
   *
   * @public
   */
  HostToClient?: UrlRedirectionConfig | undefined;
}

/**
 * @public
 */
export interface CopyImageRequest {
  /**
   * The name of the image to copy.
   *
   * @public
   */
  SourceImageName: string | undefined;

  /**
   * The name that the image will have when it is copied to the destination.
   *
   * @public
   */
  DestinationImageName: string | undefined;

  /**
   * The destination region to which the image will be copied. This parameter is required, even if you are copying an image within the same region.
   *
   * @public
   */
  DestinationRegion: string | undefined;

  /**
   * The description that the image will have when it is copied to the destination.
   *
   * @public
   */
  DestinationImageDescription?: string | undefined;
}

/**
 * @public
 */
export interface CopyImageResponse {
  /**
   * The name of the destination image.
   *
   * @public
   */
  DestinationImageName?: string | undefined;
}

/**
 * @public
 */
export interface CreateAppBlockRequest {
  /**
   * The name of the app block.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the app block.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The display name of the app block. This is not displayed to the user.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The source S3 location of the app block.
   *
   * @public
   */
  SourceS3Location: S3Location | undefined;

  /**
   * The setup script details of the app block. This must be provided for the `CUSTOM` PackagingType.
   *
   * @public
   */
  SetupScriptDetails?: ScriptDetails | undefined;

  /**
   * The tags assigned to the app block.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The post setup script details of the app block. This can only be provided for the `APPSTREAM2` PackagingType.
   *
   * @public
   */
  PostSetupScriptDetails?: ScriptDetails | undefined;

  /**
   * The packaging type of the app block.
   *
   * @public
   */
  PackagingType?: PackagingType | undefined;
}

/**
 * @public
 */
export interface CreateAppBlockResult {
  /**
   * The app block.
   *
   * @public
   */
  AppBlock?: AppBlock | undefined;
}

/**
 * @public
 */
export interface CreateAppBlockBuilderRequest {
  /**
   * The unique name for the app block builder.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the app block builder.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The display name of the app block builder.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The tags to associate with the app block builder. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=.
   *
   * If you do not specify a value, the value is set to an empty string.
   *
   * Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters:
   *
   * _ . : / = + \ - @
   *
   * For more information, see [Tagging Your Resources](https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html) in the *Amazon WorkSpaces Applications Administration Guide*.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The platform of the app block builder.
   *
   * `WINDOWS_SERVER_2019` is the only valid value.
   *
   * @public
   */
  Platform: AppBlockBuilderPlatformType | undefined;

  /**
   * The instance type to use when launching the app block builder. The following instance types are available:
   *
   * - stream.standard.small
   * - stream.standard.medium
   * - stream.standard.large
   * - stream.standard.xlarge
   * - stream.standard.2xlarge
   *
   * @public
   */
  InstanceType: string | undefined;

  /**
   * The VPC configuration for the app block builder.
   *
   * App block builders require that you specify at least two subnets in different availability zones.
   *
   * @public
   */
  VpcConfig: VpcConfig | undefined;

  /**
   * Enables or disables default internet access for the app block builder.
   *
   * @public
   */
  EnableDefaultInternetAccess?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to apply to the app block builder. To assume a role, the app block builder calls the AWS Security Token Service (STS) `AssumeRole` API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the **appstream_machine_role** credential profile on the instance.
   *
   * For more information, see [Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances](https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html) in the *Amazon WorkSpaces Applications Administration Guide*.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * The list of interface VPC endpoint (interface endpoint) objects. Administrators can connect to the app block builder only through the specified endpoints.
   *
   * @public
   */
  AccessEndpoints?: AccessEndpoint[] | undefined;

  /**
   * Set to true to disable Instance Metadata Service Version 1 (IMDSv1) and enforce IMDSv2. Set to false to enable both IMDSv1 and IMDSv2.
   *
   * @public
   */
  DisableIMDSV1?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateAppBlockBuilderResult {
  /**
   * Describes an app block builder.
   *
   * @public
   */
  AppBlockBuilder?: AppBlockBuilder | undefined;
}

/**
 * @public
 */
export interface CreateAppBlockBuilderStreamingURLRequest {
  /**
   * The name of the app block builder.
   *
   * @public
   */
  AppBlockBuilderName: string | undefined;

  /**
   * The time that the streaming URL will be valid, in seconds. Specify a value between 1 and 604800 seconds. The default is 3600 seconds.
   *
   * @public
   */
  Validity?: number | undefined;
}

/**
 * @public
 */
export interface CreateAppBlockBuilderStreamingURLResult {
  /**
   * The URL to start the streaming session.
   *
   * @public
   */
  StreamingURL?: string | undefined;

  /**
   * The elapsed time, in seconds after the Unix epoch, when this URL expires.
   *
   * @public
   */
  Expires?: Date | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * The name of the application. This name is visible to users when display name is not specified.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The display name of the application. This name is visible to users in the application catalog.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the application.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The location in S3 of the application icon.
   *
   * @public
   */
  IconS3Location: S3Location | undefined;

  /**
   * The launch path of the application.
   *
   * @public
   */
  LaunchPath: string | undefined;

  /**
   * The working directory of the application.
   *
   * @public
   */
  WorkingDirectory?: string | undefined;

  /**
   * The launch parameters of the application.
   *
   * @public
   */
  LaunchParameters?: string | undefined;

  /**
   * The platforms the application supports. WINDOWS_SERVER_2019, AMAZON_LINUX2 and UBUNTU_PRO_2404 are supported for Elastic fleets.
   *
   * @public
   */
  Platforms: PlatformType[] | undefined;

  /**
   * The instance families the application supports. Valid values are GENERAL_PURPOSE and GRAPHICS_G4.
   *
   * @public
   */
  InstanceFamilies: string[] | undefined;

  /**
   * The app block ARN to which the application should be associated
   *
   * @public
   */
  AppBlockArn: string | undefined;

  /**
   * The tags assigned to the application.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResult {
  /**
   * Describes an application in the application catalog.
   *
   * @public
   */
  Application?: Application | undefined;
}

/**
 * Describes the credentials for the service account used by the fleet or image builder to connect to the directory.
 *
 * @public
 */
export interface ServiceAccountCredentials {
  /**
   * The user name of the account. This account must have the following privileges: create computer objects, join computers to the domain, and change/reset the password on descendant computer objects for the organizational units specified.
   *
   * @public
   */
  AccountName: string | undefined;

  /**
   * The password for the account.
   *
   * @public
   */
  AccountPassword: string | undefined;
}

/**
 * @public
 */
export interface CreateDirectoryConfigRequest {
  /**
   * The fully qualified name of the directory (for example, corp.example.com).
   *
   * @public
   */
  DirectoryName: string | undefined;

  /**
   * The distinguished names of the organizational units for computer accounts.
   *
   * @public
   */
  OrganizationalUnitDistinguishedNames: string[] | undefined;

  /**
   * The credentials for the service account used by the fleet or image builder to connect to the directory.
   *
   * @public
   */
  ServiceAccountCredentials?: ServiceAccountCredentials | undefined;

  /**
   * The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances. Fallback is turned on by default when certificate-based authentication is **Enabled** . Fallback allows users to log in using their AD domain password if certificate-based authentication is unsuccessful, or to unlock a desktop lock screen. **Enabled_no_directory_login_fallback** enables certificate-based authentication, but does not allow users to log in using their AD domain password. Users will be disconnected to re-authenticate using certificates.
   *
   * @public
   */
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties | undefined;
}

/**
 * Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
 *
 * @public
 */
export interface DirectoryConfig {
  /**
   * The fully qualified name of the directory (for example, corp.example.com).
   *
   * @public
   */
  DirectoryName: string | undefined;

  /**
   * The distinguished names of the organizational units for computer accounts.
   *
   * @public
   */
  OrganizationalUnitDistinguishedNames?: string[] | undefined;

  /**
   * The credentials for the service account used by the fleet or image builder to connect to the directory.
   *
   * @public
   */
  ServiceAccountCredentials?: ServiceAccountCredentials | undefined;

  /**
   * The time the directory configuration was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances. Fallback is turned on by default when certificate-based authentication is **Enabled** . Fallback allows users to log in using their AD domain password if certificate-based authentication is unsuccessful, or to unlock a desktop lock screen. **Enabled_no_directory_login_fallback** enables certificate-based authentication, but does not allow users to log in using their AD domain password. Users will be disconnected to re-authenticate using certificates.
   *
   * @public
   */
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties | undefined;
}

/**
 * @public
 */
export interface CreateDirectoryConfigResult {
  /**
   * Information about the directory configuration.
   *
   * @public
   */
  DirectoryConfig?: DirectoryConfig | undefined;
}

/**
 * An attribute associated with an entitlement. Application entitlements work by matching a supported SAML 2.0 attribute name to a value when a user identity federates to a WorkSpaces Applications SAML application.
 *
 * @public
 */
export interface EntitlementAttribute {
  /**
   * A supported AWS IAM SAML `PrincipalTag` attribute that is matched to the associated value when a user identity federates into a WorkSpaces Applications SAML application.
   *
   * The following are valid values:
   *
   * - roles
   * - department
   * - organization
   * - groups
   * - title
   * - costCenter
   * - userType
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A value that is matched to a supported SAML attribute name when a user identity federates into a WorkSpaces Applications SAML application.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateEntitlementRequest {
  /**
   * The name of the entitlement.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the stack with which the entitlement is associated.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The description of the entitlement.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies whether all or selected apps are entitled.
   *
   * @public
   */
  AppVisibility: AppVisibility | undefined;

  /**
   * The attributes of the entitlement.
   *
   * @public
   */
  Attributes: EntitlementAttribute[] | undefined;
}

/**
 * Specifies an entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. WorkSpaces Applications user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework.
 *
 * @public
 */
export interface Entitlement {
  /**
   * The name of the entitlement.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the stack with which the entitlement is associated.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The description of the entitlement.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies whether all or selected apps are entitled.
   *
   * @public
   */
  AppVisibility: AppVisibility | undefined;

  /**
   * The attributes of the entitlement.
   *
   * @public
   */
  Attributes: EntitlementAttribute[] | undefined;

  /**
   * The time when the entitlement was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The time when the entitlement was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateEntitlementResult {
  /**
   * The entitlement.
   *
   * @public
   */
  Entitlement?: Entitlement | undefined;
}

/**
 * @public
 */
export interface CreateExportImageTaskRequest {
  /**
   * The name of the WorkSpaces Applications image to export. The image must be in an available state and owned by your account.
   *
   * @public
   */
  ImageName: string | undefined;

  /**
   * The name for the exported EC2 AMI. This is a required field that must be unique within your account and region.
   *
   * @public
   */
  AmiName: string | undefined;

  /**
   * The ARN of the IAM role that allows WorkSpaces Applications to create the AMI. The role must have permissions to copy images, describe images, and create tags, with a trust relationship allowing appstream.amazonaws.com to assume the role.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The tags to apply to the exported AMI. These tags help you organize and manage your EC2 AMIs.
   *
   * @public
   */
  TagSpecifications?: Record<string, string> | undefined;

  /**
   * An optional description for the exported AMI. This description will be applied to the resulting EC2 AMI.
   *
   * @public
   */
  AmiDescription?: string | undefined;
}

/**
 * Information about an export image task, including its current state, timestamps, and any error details.
 *
 * @public
 */
export interface ExportImageTask {
  /**
   * The unique identifier for the export image task. Use this ID to track the task's progress and retrieve its details.
   *
   * @public
   */
  TaskId: string | undefined;

  /**
   * The ARN of the WorkSpaces Applications image being exported.
   *
   * @public
   */
  ImageArn: string | undefined;

  /**
   * The name of the EC2 AMI that will be created by this export task.
   *
   * @public
   */
  AmiName: string | undefined;

  /**
   * The date and time when the export image task was created.
   *
   * @public
   */
  CreatedDate: Date | undefined;

  /**
   * The description that will be applied to the exported EC2 AMI.
   *
   * @public
   */
  AmiDescription?: string | undefined;

  /**
   * The current state of the export image task, such as PENDING, RUNNING, COMPLETED, or FAILED.
   *
   * @public
   */
  State?: ExportImageTaskState | undefined;

  /**
   * The ID of the EC2 AMI that was created by this export task. This field is only populated when the task completes successfully.
   *
   * @public
   */
  AmiId?: string | undefined;

  /**
   * The tags that will be applied to the exported EC2 AMI.
   *
   * @public
   */
  TagSpecifications?: Record<string, string> | undefined;

  /**
   * Details about any errors that occurred during the export process. This field is only populated when the task fails.
   *
   * @public
   */
  ErrorDetails?: ErrorDetails[] | undefined;
}

/**
 * @public
 */
export interface CreateExportImageTaskResult {
  /**
   * Information about the export image task that was created, including the task ID and initial state.
   *
   * @public
   */
  ExportImageTask?: ExportImageTask | undefined;
}

/**
 * Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
 *
 * @public
 */
export interface DomainJoinInfo {
  /**
   * The fully qualified name of the directory (for example, corp.example.com).
   *
   * @public
   */
  DirectoryName?: string | undefined;

  /**
   * The distinguished name of the organizational unit for computer accounts.
   *
   * @public
   */
  OrganizationalUnitDistinguishedName?: string | undefined;
}

/**
 * Configuration for the root volume of fleet instances and image builders. This allows you to customize the storage capacity beyond the default 200 GB.
 *
 * @public
 */
export interface VolumeConfig {
  /**
   * The size of the root volume in GB. Valid range is 200-500 GB. The default is 200 GB, which is included in the hourly instance rate. Additional storage beyond 200 GB incurs extra charges and applies to instances regardless of their running state.
   *
   * @public
   */
  VolumeSizeInGb?: number | undefined;
}

/**
 * @public
 */
export interface CreateFleetRequest {
  /**
   * A unique name for the fleet.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the image used to create the fleet.
   *
   * @public
   */
  ImageName?: string | undefined;

  /**
   * The ARN of the public, private, or shared image to use.
   *
   * @public
   */
  ImageArn?: string | undefined;

  /**
   * The instance type to use when launching fleet instances. The following instance types are available:
   *
   * - stream.standard.small
   * - stream.standard.medium
   * - stream.standard.large
   * - stream.standard.xlarge
   * - stream.standard.2xlarge
   * - stream.compute.large
   * - stream.compute.xlarge
   * - stream.compute.2xlarge
   * - stream.compute.4xlarge
   * - stream.compute.8xlarge
   * - stream.memory.large
   * - stream.memory.xlarge
   * - stream.memory.2xlarge
   * - stream.memory.4xlarge
   * - stream.memory.8xlarge
   * - stream.memory.z1d.large
   * - stream.memory.z1d.xlarge
   * - stream.memory.z1d.2xlarge
   * - stream.memory.z1d.3xlarge
   * - stream.memory.z1d.6xlarge
   * - stream.memory.z1d.12xlarge
   * - stream.graphics.g4dn.xlarge
   * - stream.graphics.g4dn.2xlarge
   * - stream.graphics.g4dn.4xlarge
   * - stream.graphics.g4dn.8xlarge
   * - stream.graphics.g4dn.12xlarge
   * - stream.graphics.g4dn.16xlarge
   * - stream.graphics.g5.xlarge
   * - stream.graphics.g5.2xlarge
   * - stream.graphics.g5.4xlarge
   * - stream.graphics.g5.8xlarge
   * - stream.graphics.g5.12xlarge
   * - stream.graphics.g5.16xlarge
   * - stream.graphics.g5.24xlarge
   * - stream.graphics.g6.xlarge
   * - stream.graphics.g6.2xlarge
   * - stream.graphics.g6.4xlarge
   * - stream.graphics.g6.8xlarge
   * - stream.graphics.g6.16xlarge
   * - stream.graphics.g6.12xlarge
   * - stream.graphics.g6.24xlarge
   * - stream.graphics.gr6.4xlarge
   * - stream.graphics.gr6.8xlarge
   * - stream.graphics.g6f.large
   * - stream.graphics.g6f.xlarge
   * - stream.graphics.g6f.2xlarge
   * - stream.graphics.g6f.4xlarge
   * - stream.graphics.gr6f.4xlarge
   *
   * The following instance types are available for Elastic fleets:
   *
   * - stream.standard.small
   * - stream.standard.medium
   * - stream.standard.large
   * - stream.standard.xlarge
   * - stream.standard.2xlarge
   *
   * @public
   */
  InstanceType: string | undefined;

  /**
   * The fleet type.
   *
   * - **ALWAYS_ON**
   *
   *   Provides users with instant-on access to their apps. You are charged for all running instances in your fleet, even if no users are streaming apps.
   *
   * - **ON_DEMAND**
   *
   *   Provide users with access to applications after they connect, which takes one to two minutes. You are charged for instance streaming when users are connected and a small hourly fee for instances that are not streaming apps.
   *
   * @public
   */
  FleetType?: FleetType | undefined;

  /**
   * The desired capacity for the fleet. This is not allowed for Elastic fleets. For Elastic fleets, specify MaxConcurrentSessions instead.
   *
   * @public
   */
  ComputeCapacity?: ComputeCapacity | undefined;

  /**
   * The VPC configuration for the fleet. This is required for Elastic fleets, but not required for other fleet types. Elastic fleets require that you specify at least two subnets in different availability zones.
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.
   *
   * Specify a value between 600 and 432000.
   *
   * @public
   */
  MaxUserDurationInSeconds?: number | undefined;

  /**
   * The amount of time that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance.
   *
   * Specify a value between 60 and 36000.
   *
   * @public
   */
  DisconnectTimeoutInSeconds?: number | undefined;

  /**
   * The description to display.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The fleet name to display.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * Enables or disables default internet access for the fleet.
   *
   * @public
   */
  EnableDefaultInternetAccess?: boolean | undefined;

  /**
   * The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. This is not allowed for Elastic fleets.
   *
   * @public
   */
  DomainJoinInfo?: DomainJoinInfo | undefined;

  /**
   * The tags to associate with the fleet. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=.
   *
   * If you do not specify a value, the value is set to an empty string.
   *
   * Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters:
   *
   * _ . : / = + \ - @
   *
   * For more information, see [Tagging Your Resources](https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html) in the *Amazon WorkSpaces Applications Administration Guide*.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the `DisconnectTimeoutInSeconds` time interval begins. Users are notified before they are disconnected due to inactivity. If they try to reconnect to the streaming session before the time interval specified in `DisconnectTimeoutInSeconds` elapses, they are connected to their previous session. Users are considered idle when they stop providing keyboard or mouse input during their streaming session. File uploads and downloads, audio in, audio out, and pixels changing do not qualify as user activity. If users continue to be idle after the time interval in `IdleDisconnectTimeoutInSeconds` elapses, they are disconnected.
   *
   * To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 36000. The default value is 0.
   *
   * > **Note:** If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity.
   *
   * @public
   */
  IdleDisconnectTimeoutInSeconds?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to apply to the fleet. To assume a role, a fleet instance calls the AWS Security Token Service (STS) `AssumeRole` API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the **appstream_machine_role** credential profile on the instance.
   *
   * For more information, see [Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances](https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html) in the *Amazon WorkSpaces Applications Administration Guide*.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * The WorkSpaces Applications view that is displayed to your users when they stream from the fleet. When `APP` is specified, only the windows of applications opened by users display. When `DESKTOP` is specified, the standard desktop that is provided by the operating system displays.
   *
   * The default value is `APP`.
   *
   * @public
   */
  StreamView?: StreamView | undefined;

  /**
   * The fleet platform. WINDOWS_SERVER_2019, AMAZON_LINUX2 and UBUNTU_PRO_2404 are supported for Elastic fleets.
   *
   * @public
   */
  Platform?: PlatformType | undefined;

  /**
   * The maximum concurrent sessions of the Elastic fleet. This is required for Elastic fleets, and not allowed for other fleet types.
   *
   * @public
   */
  MaxConcurrentSessions?: number | undefined;

  /**
   * The USB device filter strings that specify which USB devices a user can redirect to the fleet streaming session, when using the Windows native client. This is allowed but not required for Elastic fleets.
   *
   * @public
   */
  UsbDeviceFilterStrings?: string[] | undefined;

  /**
   * The S3 location of the session scripts configuration zip file. This only applies to Elastic fleets.
   *
   * @public
   */
  SessionScriptS3Location?: S3Location | undefined;

  /**
   * The maximum number of user sessions on an instance. This only applies to multi-session fleets.
   *
   * @public
   */
  MaxSessionsPerInstance?: number | undefined;

  /**
   * The configuration for the root volume of fleet instances. Use this to customize storage capacity from 200 GB up to 500 GB based on your application requirements.
   *
   * @public
   */
  RootVolumeConfig?: VolumeConfig | undefined;

  /**
   * Set to true to disable Instance Metadata Service Version 1 (IMDSv1) and enforce IMDSv2. Set to false to enable both IMDSv1 and IMDSv2.
   *
   * > **Note:** Before disabling IMDSv1, ensure your WorkSpaces Applications images are running the agent version or managed image update released on or after January 16, 2024 to support IMDSv2 enforcement.
   *
   * @public
   */
  DisableIMDSV1?: boolean | undefined;
}

/**
 * Describes a fleet error.
 *
 * @public
 */
export interface FleetError {
  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: FleetErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Describes a fleet.
 *
 * @public
 */
export interface Fleet {
  /**
   * The Amazon Resource Name (ARN) for the fleet.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the fleet.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The fleet name to display.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description to display.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the image used to create the fleet.
   *
   * @public
   */
  ImageName?: string | undefined;

  /**
   * The ARN for the public, private, or shared image.
   *
   * @public
   */
  ImageArn?: string | undefined;

  /**
   * The instance type to use when launching fleet instances. The following instance types are available:
   *
   * - stream.standard.small
   * - stream.standard.medium
   * - stream.standard.large
   * - stream.compute.large
   * - stream.compute.xlarge
   * - stream.compute.2xlarge
   * - stream.compute.4xlarge
   * - stream.compute.8xlarge
   * - stream.memory.large
   * - stream.memory.xlarge
   * - stream.memory.2xlarge
   * - stream.memory.4xlarge
   * - stream.memory.8xlarge
   * - stream.memory.z1d.large
   * - stream.memory.z1d.xlarge
   * - stream.memory.z1d.2xlarge
   * - stream.memory.z1d.3xlarge
   * - stream.memory.z1d.6xlarge
   * - stream.memory.z1d.12xlarge
   * - stream.graphics.g4dn.xlarge
   * - stream.graphics.g4dn.2xlarge
   * - stream.graphics.g4dn.4xlarge
   * - stream.graphics.g4dn.8xlarge
   * - stream.graphics.g4dn.12xlarge
   * - stream.graphics.g4dn.16xlarge
   * - stream.graphics.g5.xlarge
   * - stream.graphics.g5.2xlarge
   * - stream.graphics.g5.4xlarge
   * - stream.graphics.g5.8xlarge
   * - stream.graphics.g5.16xlarge
   * - stream.graphics.g5.12xlarge
   * - stream.graphics.g5.24xlarge
   * - stream.graphics.g6.xlarge
   * - stream.graphics.g6.2xlarge
   * - stream.graphics.g6.4xlarge
   * - stream.graphics.g6.8xlarge
   * - stream.graphics.g6.16xlarge
   * - stream.graphics.g6.12xlarge
   * - stream.graphics.g6.24xlarge
   * - stream.graphics.gr6.4xlarge
   * - stream.graphics.gr6.8xlarge
   * - stream.graphics.g6f.large
   * - stream.graphics.g6f.xlarge
   * - stream.graphics.g6f.2xlarge
   * - stream.graphics.g6f.4xlarge
   * - stream.graphics.gr6f.4xlarge
   *
   * @public
   */
  InstanceType: string | undefined;

  /**
   * The fleet type.
   *
   * - **ALWAYS_ON**
   *
   *   Provides users with instant-on access to their apps. You are charged for all running instances in your fleet, even if no users are streaming apps.
   *
   * - **ON_DEMAND**
   *
   *   Provide users with access to applications after they connect, which takes one to two minutes. You are charged for instance streaming when users are connected and a small hourly fee for instances that are not streaming apps.
   *
   * @public
   */
  FleetType?: FleetType | undefined;

  /**
   * The capacity status for the fleet.
   *
   * @public
   */
  ComputeCapacityStatus: ComputeCapacityStatus | undefined;

  /**
   * The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.
   *
   * Specify a value between 600 and 360000.
   *
   * @public
   */
  MaxUserDurationInSeconds?: number | undefined;

  /**
   * The amount of time that a streaming session remains active after users disconnect. If they try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance.
   *
   * Specify a value between 60 and 36000.
   *
   * @public
   */
  DisconnectTimeoutInSeconds?: number | undefined;

  /**
   * The current state for the fleet.
   *
   * @public
   */
  State: FleetState | undefined;

  /**
   * The VPC configuration for the fleet.
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * The time the fleet was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The fleet errors.
   *
   * @public
   */
  FleetErrors?: FleetError[] | undefined;

  /**
   * Indicates whether default internet access is enabled for the fleet.
   *
   * @public
   */
  EnableDefaultInternetAccess?: boolean | undefined;

  /**
   * The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain.
   *
   * @public
   */
  DomainJoinInfo?: DomainJoinInfo | undefined;

  /**
   * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the `DisconnectTimeoutInSeconds` time interval begins. Users are notified before they are disconnected due to inactivity. If users try to reconnect to the streaming session before the time interval specified in `DisconnectTimeoutInSeconds` elapses, they are connected to their previous session. Users are considered idle when they stop providing keyboard or mouse input during their streaming session. File uploads and downloads, audio in, audio out, and pixels changing do not qualify as user activity. If users continue to be idle after the time interval in `IdleDisconnectTimeoutInSeconds` elapses, they are disconnected.
   *
   * To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 36000. The default value is 0.
   *
   * > **Note:** If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity.
   *
   * @public
   */
  IdleDisconnectTimeoutInSeconds?: number | undefined;

  /**
   * The ARN of the IAM role that is applied to the fleet. To assume a role, the fleet instance calls the AWS Security Token Service (STS) `AssumeRole` API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the **appstream_machine_role** credential profile on the instance.
   *
   * For more information, see [Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances](https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html) in the *Amazon WorkSpaces Applications Administration Guide*.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * The WorkSpaces Applications view that is displayed to your users when they stream from the fleet. When `APP` is specified, only the windows of applications opened by users display. When `DESKTOP` is specified, the standard desktop that is provided by the operating system displays.
   *
   * The default value is `APP`.
   *
   * @public
   */
  StreamView?: StreamView | undefined;

  /**
   * The platform of the fleet.
   *
   * @public
   */
  Platform?: PlatformType | undefined;

  /**
   * The maximum number of concurrent sessions for the fleet.
   *
   * @public
   */
  MaxConcurrentSessions?: number | undefined;

  /**
   * The USB device filter strings associated with the fleet.
   *
   * @public
   */
  UsbDeviceFilterStrings?: string[] | undefined;

  /**
   * The S3 location of the session scripts configuration zip file. This only applies to Elastic fleets.
   *
   * @public
   */
  SessionScriptS3Location?: S3Location | undefined;

  /**
   * The maximum number of user sessions on an instance. This only applies to multi-session fleets.
   *
   * @public
   */
  MaxSessionsPerInstance?: number | undefined;

  /**
   * The current configuration of the root volume for fleet instances, including the storage size in GB.
   *
   * @public
   */
  RootVolumeConfig?: VolumeConfig | undefined;

  /**
   * Indicates whether Instance Metadata Service Version 1 (IMDSv1) is disabled for the fleet.
   *
   * @public
   */
  DisableIMDSV1?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateFleetResult {
  /**
   * Information about the fleet.
   *
   * @public
   */
  Fleet?: Fleet | undefined;
}

/**
 * @public
 */
export interface CreateImageBuilderRequest {
  /**
   * A unique name for the image builder.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the image used to create the image builder.
   *
   * @public
   */
  ImageName?: string | undefined;

  /**
   * The ARN of the public, private, or shared image to use.
   *
   * @public
   */
  ImageArn?: string | undefined;

  /**
   * The instance type to use when launching the image builder. The following instance types are available:
   *
   * - stream.standard.small
   * - stream.standard.medium
   * - stream.standard.large
   * - stream.compute.large
   * - stream.compute.xlarge
   * - stream.compute.2xlarge
   * - stream.compute.4xlarge
   * - stream.compute.8xlarge
   * - stream.memory.large
   * - stream.memory.xlarge
   * - stream.memory.2xlarge
   * - stream.memory.4xlarge
   * - stream.memory.8xlarge
   * - stream.memory.z1d.large
   * - stream.memory.z1d.xlarge
   * - stream.memory.z1d.2xlarge
   * - stream.memory.z1d.3xlarge
   * - stream.memory.z1d.6xlarge
   * - stream.memory.z1d.12xlarge
   * - stream.graphics.g4dn.xlarge
   * - stream.graphics.g4dn.2xlarge
   * - stream.graphics.g4dn.4xlarge
   * - stream.graphics.g4dn.8xlarge
   * - stream.graphics.g4dn.12xlarge
   * - stream.graphics.g4dn.16xlarge
   * - stream.graphics.g5.xlarge
   * - stream.graphics.g5.2xlarge
   * - stream.graphics.g5.4xlarge
   * - stream.graphics.g5.8xlarge
   * - stream.graphics.g5.16xlarge
   * - stream.graphics.g5.12xlarge
   * - stream.graphics.g5.24xlarge
   * - stream.graphics.g6.xlarge
   * - stream.graphics.g6.2xlarge
   * - stream.graphics.g6.4xlarge
   * - stream.graphics.g6.8xlarge
   * - stream.graphics.g6.16xlarge
   * - stream.graphics.g6.12xlarge
   * - stream.graphics.g6.24xlarge
   * - stream.graphics.gr6.4xlarge
   * - stream.graphics.gr6.8xlarge
   * - stream.graphics.g6f.large
   * - stream.graphics.g6f.xlarge
   * - stream.graphics.g6f.2xlarge
   * - stream.graphics.g6f.4xlarge
   * - stream.graphics.gr6f.4xlarge
   *
   * @public
   */
  InstanceType: string | undefined;

  /**
   * The description to display.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The image builder name to display.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The VPC configuration for the image builder. You can specify only one subnet.
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to apply to the image builder. To assume a role, the image builder calls the AWS Security Token Service (STS) `AssumeRole` API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the **appstream_machine_role** credential profile on the instance.
   *
   * For more information, see [Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances](https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html) in the *Amazon WorkSpaces Applications Administration Guide*.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * Enables or disables default internet access for the image builder.
   *
   * @public
   */
  EnableDefaultInternetAccess?: boolean | undefined;

  /**
   * The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain.
   *
   * @public
   */
  DomainJoinInfo?: DomainJoinInfo | undefined;

  /**
   * The version of the WorkSpaces Applications agent to use for this image builder. To use the latest version of the WorkSpaces Applications agent, specify [LATEST].
   *
   * @public
   */
  AppstreamAgentVersion?: string | undefined;

  /**
   * The tags to associate with the image builder. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=.
   *
   * Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters:
   *
   * _ . : / = + \ - @
   *
   * If you do not specify a value, the value is set to an empty string.
   *
   * For more information about tags, see [Tagging Your Resources](https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html) in the *Amazon WorkSpaces Applications Administration Guide*.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The list of interface VPC endpoint (interface endpoint) objects. Administrators can connect to the image builder only through the specified endpoints.
   *
   * @public
   */
  AccessEndpoints?: AccessEndpoint[] | undefined;

  /**
   * The configuration for the root volume of the image builder. Use this to customize storage capacity from 200 GB up to 500 GB based on your application installation requirements.
   *
   * @public
   */
  RootVolumeConfig?: VolumeConfig | undefined;

  /**
   * The list of license included applications to install on the image builder during creation.
   *
   * Possible values include the following:
   *
   * - Microsoft_Office_2021_LTSC_Professional_Plus_32Bit
   * - Microsoft_Office_2021_LTSC_Professional_Plus_64Bit
   * - Microsoft_Office_2024_LTSC_Professional_Plus_32Bit
   * - Microsoft_Office_2024_LTSC_Professional_Plus_64Bit
   * - Microsoft_Visio_2021_LTSC_Professional_32Bit
   * - Microsoft_Visio_2021_LTSC_Professional_64Bit
   * - Microsoft_Visio_2024_LTSC_Professional_32Bit
   * - Microsoft_Visio_2024_LTSC_Professional_64Bit
   * - Microsoft_Project_2021_Professional_32Bit
   * - Microsoft_Project_2021_Professional_64Bit
   * - Microsoft_Project_2024_Professional_32Bit
   * - Microsoft_Project_2024_Professional_64Bit
   * - Microsoft_Office_2021_LTSC_Standard_32Bit
   * - Microsoft_Office_2021_LTSC_Standard_64Bit
   * - Microsoft_Office_2024_LTSC_Standard_32Bit
   * - Microsoft_Office_2024_LTSC_Standard_64Bit
   * - Microsoft_Visio_2021_LTSC_Standard_32Bit
   * - Microsoft_Visio_2021_LTSC_Standard_64Bit
   * - Microsoft_Visio_2024_LTSC_Standard_32Bit
   * - Microsoft_Visio_2024_LTSC_Standard_64Bit
   * - Microsoft_Project_2021_Standard_32Bit
   * - Microsoft_Project_2021_Standard_64Bit
   * - Microsoft_Project_2024_Standard_32Bit
   * - Microsoft_Project_2024_Standard_64Bit
   *
   * @public
   */
  SoftwaresToInstall?: string[] | undefined;

  /**
   * The list of license included applications to uninstall from the image builder during creation.
   *
   * Possible values include the following:
   *
   * - Microsoft_Office_2021_LTSC_Professional_Plus_32Bit
   * - Microsoft_Office_2021_LTSC_Professional_Plus_64Bit
   * - Microsoft_Office_2024_LTSC_Professional_Plus_32Bit
   * - Microsoft_Office_2024_LTSC_Professional_Plus_64Bit
   * - Microsoft_Visio_2021_LTSC_Professional_32Bit
   * - Microsoft_Visio_2021_LTSC_Professional_64Bit
   * - Microsoft_Visio_2024_LTSC_Professional_32Bit
   * - Microsoft_Visio_2024_LTSC_Professional_64Bit
   * - Microsoft_Project_2021_Professional_32Bit
   * - Microsoft_Project_2021_Professional_64Bit
   * - Microsoft_Project_2024_Professional_32Bit
   * - Microsoft_Project_2024_Professional_64Bit
   * - Microsoft_Office_2021_LTSC_Standard_32Bit
   * - Microsoft_Office_2021_LTSC_Standard_64Bit
   * - Microsoft_Office_2024_LTSC_Standard_32Bit
   * - Microsoft_Office_2024_LTSC_Standard_64Bit
   * - Microsoft_Visio_2021_LTSC_Standard_32Bit
   * - Microsoft_Visio_2021_LTSC_Standard_64Bit
   * - Microsoft_Visio_2024_LTSC_Standard_32Bit
   * - Microsoft_Visio_2024_LTSC_Standard_64Bit
   * - Microsoft_Project_2021_Standard_32Bit
   * - Microsoft_Project_2021_Standard_64Bit
   * - Microsoft_Project_2024_Standard_32Bit
   * - Microsoft_Project_2024_Standard_64Bit
   *
   * @public
   */
  SoftwaresToUninstall?: string[] | undefined;

  /**
   * Set to true to disable Instance Metadata Service Version 1 (IMDSv1) and enforce IMDSv2. Set to false to enable both IMDSv1 and IMDSv2.
   *
   * > **Note:** Before disabling IMDSv1, ensure your WorkSpaces Applications images are running the agent version or managed image update released on or after January 16, 2024 to support IMDSv2 enforcement.
   *
   * @public
   */
  DisableIMDSV1?: boolean | undefined;
}

/**
 * Describes the network details of the fleet or image builder instance.
 *
 * @public
 */
export interface NetworkAccessConfiguration {
  /**
   * The private IP address of the elastic network interface that is attached to instances in your VPC.
   *
   * @public
   */
  EniPrivateIpAddress?: string | undefined;

  /**
   * The IPv6 addresses assigned to the elastic network interface. This field supports IPv6 connectivity for WorkSpaces Applications instances.
   *
   * @public
   */
  EniIpv6Addresses?: string[] | undefined;

  /**
   * The resource identifier of the elastic network interface that is attached to instances in your VPC. All network interfaces have the eni-xxxxxxxx resource identifier.
   *
   * @public
   */
  EniId?: string | undefined;
}

/**
 * Describes the reason why the last image builder state change occurred.
 *
 * @public
 */
export interface ImageBuilderStateChangeReason {
  /**
   * The state change reason code.
   *
   * @public
   */
  Code?: ImageBuilderStateChangeReasonCode | undefined;

  /**
   * The state change reason message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes a virtual machine that is used to create an image.
 *
 * @public
 */
export interface ImageBuilder {
  /**
   * The name of the image builder.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ARN for the image builder.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ARN of the image from which this builder was created.
   *
   * @public
   */
  ImageArn?: string | undefined;

  /**
   * The description to display.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The image builder name to display.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The VPC configuration of the image builder.
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * The instance type for the image builder. The following instance types are available:
   *
   * - stream.standard.small
   * - stream.standard.medium
   * - stream.standard.large
   * - stream.compute.large
   * - stream.compute.xlarge
   * - stream.compute.2xlarge
   * - stream.compute.4xlarge
   * - stream.compute.8xlarge
   * - stream.memory.large
   * - stream.memory.xlarge
   * - stream.memory.2xlarge
   * - stream.memory.4xlarge
   * - stream.memory.8xlarge
   * - stream.memory.z1d.large
   * - stream.memory.z1d.xlarge
   * - stream.memory.z1d.2xlarge
   * - stream.memory.z1d.3xlarge
   * - stream.memory.z1d.6xlarge
   * - stream.memory.z1d.12xlarge
   * - stream.graphics.g4dn.xlarge
   * - stream.graphics.g4dn.2xlarge
   * - stream.graphics.g4dn.4xlarge
   * - stream.graphics.g4dn.8xlarge
   * - stream.graphics.g4dn.12xlarge
   * - stream.graphics.g4dn.16xlarge
   * - stream.graphics.g5.xlarge
   * - stream.graphics.g5.2xlarge
   * - stream.graphics.g5.4xlarge
   * - stream.graphics.g5.8xlarge
   * - stream.graphics.g5.16xlarge
   * - stream.graphics.g5.12xlarge
   * - stream.graphics.g5.24xlarge
   * - stream.graphics.g6.xlarge
   * - stream.graphics.g6.2xlarge
   * - stream.graphics.g6.4xlarge
   * - stream.graphics.g6.8xlarge
   * - stream.graphics.g6.16xlarge
   * - stream.graphics.g6.12xlarge
   * - stream.graphics.g6.24xlarge
   * - stream.graphics.gr6.4xlarge
   * - stream.graphics.gr6.8xlarge
   * - stream.graphics.g6f.large
   * - stream.graphics.g6f.xlarge
   * - stream.graphics.g6f.2xlarge
   * - stream.graphics.g6f.4xlarge
   * - stream.graphics.gr6f.4xlarge
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The operating system platform of the image builder.
   *
   * @public
   */
  Platform?: PlatformType | undefined;

  /**
   * The ARN of the IAM role that is applied to the image builder. To assume a role, the image builder calls the AWS Security Token Service (STS) `AssumeRole` API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the **appstream_machine_role** credential profile on the instance.
   *
   * For more information, see [Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances](https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html) in the *Amazon WorkSpaces Applications Administration Guide*.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * The state of the image builder.
   *
   * @public
   */
  State?: ImageBuilderState | undefined;

  /**
   * The reason why the last state change occurred.
   *
   * @public
   */
  StateChangeReason?: ImageBuilderStateChangeReason | undefined;

  /**
   * The time stamp when the image builder was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * Enables or disables default internet access for the image builder.
   *
   * @public
   */
  EnableDefaultInternetAccess?: boolean | undefined;

  /**
   * The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain.
   *
   * @public
   */
  DomainJoinInfo?: DomainJoinInfo | undefined;

  /**
   * Describes the network details of the fleet or image builder instance.
   *
   * @public
   */
  NetworkAccessConfiguration?: NetworkAccessConfiguration | undefined;

  /**
   * The image builder errors.
   *
   * @public
   */
  ImageBuilderErrors?: ResourceError[] | undefined;

  /**
   * The version of the WorkSpaces Applications agent that is currently being used by the image builder.
   *
   * @public
   */
  AppstreamAgentVersion?: string | undefined;

  /**
   * The list of virtual private cloud (VPC) interface endpoint objects. Administrators can connect to the image builder only through the specified endpoints.
   *
   * @public
   */
  AccessEndpoints?: AccessEndpoint[] | undefined;

  /**
   * The current configuration of the root volume for the image builder, including the storage size in GB.
   *
   * @public
   */
  RootVolumeConfig?: VolumeConfig | undefined;

  /**
   * Indicates whether the image builder is using the latest WorkSpaces Applications agent version or not.
   *
   * @public
   */
  LatestAppstreamAgentVersion?: LatestAppstreamAgentVersion | undefined;

  /**
   * Indicates whether Instance Metadata Service Version 1 (IMDSv1) is disabled for the image builder.
   *
   * @public
   */
  DisableIMDSV1?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateImageBuilderResult {
  /**
   * Information about the image builder.
   *
   * @public
   */
  ImageBuilder?: ImageBuilder | undefined;
}

/**
 * @public
 */
export interface CreateImageBuilderStreamingURLRequest {
  /**
   * The name of the image builder.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The time that the streaming URL will be valid, in seconds. Specify a value between 1 and 604800 seconds. The default is 3600 seconds.
   *
   * @public
   */
  Validity?: number | undefined;
}

/**
 * @public
 */
export interface CreateImageBuilderStreamingURLResult {
  /**
   * The URL to start the WorkSpaces Applications streaming session.
   *
   * @public
   */
  StreamingURL?: string | undefined;

  /**
   * The elapsed time, in seconds after the Unix epoch, when this URL expires.
   *
   * @public
   */
  Expires?: Date | undefined;
}

/**
 * Configuration for runtime validation of imported images. This structure specifies the instance type to use for testing the imported image's streaming capabilities.
 *
 * @public
 */
export interface RuntimeValidationConfig {
  /**
   * The instance type to use for runtime validation testing. It's recommended to use the same instance type you plan to use for your fleet to ensure accurate validation results.
   *
   * @public
   */
  IntendedInstanceType?: string | undefined;
}

/**
 * @public
 */
export interface CreateImportedImageRequest {
  /**
   * A unique name for the imported image. The name must be between 1 and 100 characters and can contain letters, numbers, underscores, periods, and hyphens.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ID of the EC2 AMI to import.
   *
   * @public
   */
  SourceAmiId?: string | undefined;

  /**
   * The ID of the Workspaces Image to import.
   *
   * @public
   */
  WorkspaceImageId?: string | undefined;

  /**
   * The ARN of the IAM role that allows WorkSpaces Applications to access your AMI. The role must have permissions to modify image attributes and describe images, with a trust relationship allowing appstream.amazonaws.com to assume the role.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * An optional description for the imported image. The description must match approved regex patterns and can be up to 256 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * An optional display name for the imported image. The display name must match approved regex patterns and can be up to 100 characters.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The tags to apply to the imported image. Tags help you organize and manage your WorkSpaces Applications resources.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Configuration for runtime validation of the imported image. When specified, WorkSpaces Applications provisions an instance to test streaming functionality, which helps ensure the image is suitable for use.
   *
   * @public
   */
  RuntimeValidationConfig?: RuntimeValidationConfig | undefined;

  /**
   * The version of the WorkSpaces Applications agent to use for the imported image. Choose CURRENT_LATEST to use the agent version available at the time of import, or ALWAYS_LATEST to automatically update to the latest agent version when new versions are released.
   *
   * @public
   */
  AgentSoftwareVersion?: AgentSoftwareVersion | undefined;

  /**
   * Configuration for the application catalog of the imported image. This allows you to specify applications available for streaming, including their paths, icons, and launch parameters. This field contains sensitive data.
   *
   * @public
   */
  AppCatalogConfig?: ApplicationConfig[] | undefined;

  /**
   * When set to true, performs validation checks without actually creating the imported image. Use this to verify your configuration before executing the actual import operation.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the permissions for an image.
 *
 * @public
 */
export interface ImagePermissions {
  /**
   * Indicates whether the image can be used for a fleet.
   *
   * @public
   */
  allowFleet?: boolean | undefined;

  /**
   * Indicates whether the image can be used for an image builder.
   *
   * @public
   */
  allowImageBuilder?: boolean | undefined;
}

/**
 * Describes the software metadata for an image, such as the installed NVIDIA GRID driver version.
 *
 * @public
 */
export interface ImageSoftwareMetadata {
  /**
   * The version of the NVIDIA GRID driver installed on the image. This field is empty if no NVIDIA GRID driver is installed.
   *
   * @public
   */
  nvidiaGridDriverVersion?: string | undefined;
}

/**
 * Describes the reason why the last image state change occurred.
 *
 * @public
 */
export interface ImageStateChangeReason {
  /**
   * The state change reason code.
   *
   * @public
   */
  Code?: ImageStateChangeReasonCode | undefined;

  /**
   * The state change reason message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes an image.
 *
 * @public
 */
export interface Image {
  /**
   * The name of the image.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ARN of the image.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ARN of the image from which this image was created.
   *
   * @public
   */
  BaseImageArn?: string | undefined;

  /**
   * The image name to display.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The image starts in the `PENDING` state. If image creation succeeds, the state is `AVAILABLE`. If image creation fails, the state is `FAILED`.
   *
   * @public
   */
  State?: ImageState | undefined;

  /**
   * Indicates whether the image is public or private.
   *
   * @public
   */
  Visibility?: VisibilityType | undefined;

  /**
   * Indicates whether an image builder can be launched from this image.
   *
   * @public
   */
  ImageBuilderSupported?: boolean | undefined;

  /**
   * The name of the image builder that was used to create the private image. If the image is shared, copied, or updated by using Managed Image Updates, this value is null.
   *
   * @public
   */
  ImageBuilderName?: string | undefined;

  /**
   * The operating system platform of the image.
   *
   * @public
   */
  Platform?: PlatformType | undefined;

  /**
   * The description to display.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The reason why the last state change occurred.
   *
   * @public
   */
  StateChangeReason?: ImageStateChangeReason | undefined;

  /**
   * The applications associated with the image.
   *
   * @public
   */
  Applications?: Application[] | undefined;

  /**
   * The time the image was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The release date of the public base image. For private images, this date is the release date of the base image from which the image was created.
   *
   * @public
   */
  PublicBaseImageReleasedDate?: Date | undefined;

  /**
   * The version of the WorkSpaces Applications agent to use for instances that are launched from this image.
   *
   * @public
   */
  AppstreamAgentVersion?: string | undefined;

  /**
   * The permissions to provide to the destination AWS account for the specified image.
   *
   * @public
   */
  ImagePermissions?: ImagePermissions | undefined;

  /**
   * Describes the errors that are returned when a new image can't be created.
   *
   * @public
   */
  ImageErrors?: ResourceError[] | undefined;

  /**
   * Indicates whether the image is using the latest WorkSpaces Applications agent version or not.
   *
   * @public
   */
  LatestAppstreamAgentVersion?: LatestAppstreamAgentVersion | undefined;

  /**
   * The supported instances families that determine which image a customer can use when the customer launches a fleet or image builder. The following instances families are supported:
   *
   * - General Purpose
   * - Compute Optimized
   * - Memory Optimized
   * - Graphics G4
   * - Graphics G5
   * - Graphics G6
   *
   * @public
   */
  SupportedInstanceFamilies?: string[] | undefined;

  /**
   * Indicates whether dynamic app providers are enabled within an WorkSpaces Applications image or not.
   *
   * @public
   */
  DynamicAppProvidersEnabled?: DynamicAppProvidersEnabled | undefined;

  /**
   * Indicates whether the image is shared with another account ID.
   *
   * @public
   */
  ImageSharedWithOthers?: ImageSharedWithOthers | undefined;

  /**
   * Indicates whether the image includes license-included applications.
   *
   * @public
   */
  ManagedSoftwareIncluded?: boolean | undefined;

  /**
   * The type of the image. Images created through AMI import have type "custom", while WorkSpaces Applications provided images have type "native". Custom images support additional instance types including GeneralPurpose, MemoryOptimized, ComputeOptimized, and Accelerated instance families.
   *
   * @public
   */
  ImageType?: ImageType | undefined;

  /**
   * The software metadata associated with the image.
   *
   * @public
   */
  ImageSoftwareMetadata?: ImageSoftwareMetadata | undefined;
}

/**
 * @public
 */
export interface CreateImportedImageResult {
  /**
   * Describes an image.
   *
   * @public
   */
  Image?: Image | undefined;
}

/**
 * Describes a connector that enables persistent storage for users.
 *
 * @public
 */
export interface StorageConnector {
  /**
   * The type of storage connector.
   *
   * @public
   */
  ConnectorType: StorageConnectorType | undefined;

  /**
   * The ARN of the storage connector.
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * The names of the domains for the account.
   *
   * @public
   */
  Domains?: string[] | undefined;

  /**
   * The OneDrive for Business domains where you require admin consent when users try to link their OneDrive account to WorkSpaces Applications. The attribute can only be specified when ConnectorType=ONE_DRIVE.
   *
   * @public
   */
  DomainsRequireAdminConsent?: string[] | undefined;
}

/**
 * The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
 *
 * @public
 */
export interface StreamingExperienceSettings {
  /**
   * The preferred protocol that you want to use while streaming your application.
   *
   * @public
   */
  PreferredProtocol?: PreferredProtocol | undefined;
}

/**
 * Describes an action and whether the action is enabled or disabled for users during their streaming sessions.
 *
 * @public
 */
export interface UserSetting {
  /**
   * The action that is enabled or disabled.
   *
   * @public
   */
  Action: Action | undefined;

  /**
   * Indicates whether the action is enabled or disabled.
   *
   * @public
   */
  Permission: Permission | undefined;

  /**
   * Specifies the number of characters that can be copied by end users from the local device to the remote session, and to the local device from the remote session.
   *
   * This can be specified only for the `CLIPBOARD_COPY_FROM_LOCAL_DEVICE` and `CLIPBOARD_COPY_TO_LOCAL_DEVICE` actions.
   *
   * This defaults to 20,971,520 (20 MB) when unspecified and the permission is `ENABLED`. This can't be specified when the permission is `DISABLED`.
   *
   * The value can be between 1 and 20,971,520 (20 MB).
   *
   * @public
   */
  MaximumLength?: number | undefined;
}

/**
 * @public
 */
export interface CreateStackRequest {
  /**
   * The name of the stack.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description to display.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The stack name to display.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The storage connectors to enable.
   *
   * @public
   */
  StorageConnectors?: StorageConnector[] | undefined;

  /**
   * The URL that users are redirected to after their streaming session ends.
   *
   * @public
   */
  RedirectURL?: string | undefined;

  /**
   * The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.
   *
   * @public
   */
  FeedbackURL?: string | undefined;

  /**
   * The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.
   *
   * @public
   */
  UserSettings?: UserSetting[] | undefined;

  /**
   * The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.
   *
   * @public
   */
  ApplicationSettings?: ApplicationSettings | undefined;

  /**
   * The tags to associate with the stack. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=.
   *
   * If you do not specify a value, the value is set to an empty string.
   *
   * Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters:
   *
   * _ . : / = + \ - @
   *
   * For more information about tags, see [Tagging Your Resources](https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html) in the *Amazon WorkSpaces Applications Administration Guide*.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The list of interface VPC endpoint (interface endpoint) objects. Users of the stack can connect to WorkSpaces Applications only through the specified endpoints.
   *
   * @public
   */
  AccessEndpoints?: AccessEndpoint[] | undefined;

  /**
   * The domains where WorkSpaces Applications streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded WorkSpaces Applications streaming sessions.
   *
   * @public
   */
  EmbedHostDomains?: string[] | undefined;

  /**
   * The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
   *
   * @public
   */
  StreamingExperienceSettings?: StreamingExperienceSettings | undefined;

  /**
   * Configuration for bidirectional URL redirection between the streaming session and the local client. Use HostToClient to redirect URLs from the remote desktop to the local browser.
   *
   * @public
   */
  ContentRedirection?: ContentRedirection | undefined;

  /**
   * The configuration for agent access on the stack. If specified, agent access is enabled for the stack.
   *
   * @public
   */
  AgentAccessConfig?: AgentAccessConfig | undefined;

  /**
   * Specifies whether users' cloud storage authentication persists across streaming sessions. When you specify FORCE_REAUTHENTICATION, WorkSpaces Applications removes the stored authentication for the stack's OneDrive and Google Drive connectors when a user's session ends. The user links their cloud storage again on their next session. The default is REUSE_CREDENTIALS.
   *
   * @public
   */
  StorageConnectorAuthentication?: StorageConnectorAuthentication | undefined;
}

/**
 * Describes a stack error.
 *
 * @public
 */
export interface StackError {
  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: StackErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Describes a stack.
 *
 * @public
 */
export interface Stack {
  /**
   * The ARN of the stack.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the stack.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description to display.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The stack name to display.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The time the stack was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The storage connectors to enable.
   *
   * @public
   */
  StorageConnectors?: StorageConnector[] | undefined;

  /**
   * The URL that users are redirected to after their streaming session ends.
   *
   * @public
   */
  RedirectURL?: string | undefined;

  /**
   * The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.
   *
   * @public
   */
  FeedbackURL?: string | undefined;

  /**
   * The errors for the stack.
   *
   * @public
   */
  StackErrors?: StackError[] | undefined;

  /**
   * The actions that are enabled or disabled for users during their streaming sessions. By default these actions are enabled.
   *
   * @public
   */
  UserSettings?: UserSetting[] | undefined;

  /**
   * The persistent application settings for users of the stack.
   *
   * @public
   */
  ApplicationSettings?: ApplicationSettingsResponse | undefined;

  /**
   * The list of virtual private cloud (VPC) interface endpoint objects. Users of the stack can connect to WorkSpaces Applications only through the specified endpoints.
   *
   * @public
   */
  AccessEndpoints?: AccessEndpoint[] | undefined;

  /**
   * The domains where WorkSpaces Applications streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded WorkSpaces Applications streaming sessions.
   *
   * @public
   */
  EmbedHostDomains?: string[] | undefined;

  /**
   * The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
   *
   * @public
   */
  StreamingExperienceSettings?: StreamingExperienceSettings | undefined;

  /**
   * Configuration for bidirectional URL redirection between the streaming session and the local client. Use HostToClient to redirect URLs from the remote desktop to the local browser.
   *
   * @public
   */
  ContentRedirection?: ContentRedirection | undefined;

  /**
   * The agent access configuration of the stack, if agent access is enabled.
   *
   * @public
   */
  AgentAccessConfig?: AgentAccessConfig | undefined;

  /**
   * Indicates whether users' cloud storage authentication persists across streaming sessions. When this attribute is FORCE_REAUTHENTICATION, WorkSpaces Applications removes the stored authentication for the stack's OneDrive and Google Drive connectors when a user's session ends. The user links their cloud storage again on their next session. The default is REUSE_CREDENTIALS.
   *
   * @public
   */
  StorageConnectorAuthentication?: StorageConnectorAuthentication | undefined;
}

/**
 * @public
 */
export interface CreateStackResult {
  /**
   * Information about the stack.
   *
   * @public
   */
  Stack?: Stack | undefined;
}

/**
 * @public
 */
export interface CreateStreamingURLRequest {
  /**
   * The name of the stack.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The name of the fleet.
   *
   * @public
   */
  FleetName: string | undefined;

  /**
   * The identifier of the user.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The name of the application to launch after the session starts. This is the name that you specified as **Name** in the Image Assistant. If your fleet is enabled for the **Desktop** stream view, you can also choose to launch directly to the operating system desktop. To do so, specify **Desktop**.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The time that the streaming URL will be valid, in seconds. Specify a value between 1 and 604800 seconds. The default is 60 seconds.
   *
   * @public
   */
  Validity?: number | undefined;

  /**
   * The session context. For more information, see [Session Context](https://docs.aws.amazon.com/appstream2/latest/developerguide/managing-stacks-fleets.html#managing-stacks-fleets-parameters) in the *Amazon WorkSpaces Applications Administration Guide*.
   *
   * @public
   */
  SessionContext?: string | undefined;
}

/**
 * @public
 */
export interface CreateStreamingURLResult {
  /**
   * The URL to start the WorkSpaces Applications streaming session.
   *
   * @public
   */
  StreamingURL?: string | undefined;

  /**
   * The elapsed time, in seconds after the Unix epoch, when this URL expires.
   *
   * @public
   */
  Expires?: Date | undefined;
}

/**
 * The website links that display in the catalog page footer.
 *
 * @public
 */
export interface ThemeFooterLink {
  /**
   * The name of the websites that display in the catalog page footer.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The URL of the websites that display in the catalog page footer.
   *
   * @public
   */
  FooterLinkURL?: string | undefined;
}

/**
 * @public
 */
export interface CreateThemeForStackRequest {
  /**
   * The name of the stack for the theme.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The links that are displayed in the footer of the streaming application catalog page. These links are helpful resources for users, such as the organization's IT support and product marketing sites.
   *
   * @public
   */
  FooterLinks?: ThemeFooterLink[] | undefined;

  /**
   * The title that is displayed at the top of the browser tab during users' application streaming sessions.
   *
   * @public
   */
  TitleText: string | undefined;

  /**
   * The color theme that is applied to website links, text, and buttons. These colors are also applied as accents in the background for the streaming application catalog page.
   *
   * @public
   */
  ThemeStyling: ThemeStyling | undefined;

  /**
   * The organization logo that appears on the streaming application catalog page.
   *
   * @public
   */
  OrganizationLogoS3Location: S3Location | undefined;

  /**
   * The S3 location of the favicon. The favicon enables users to recognize their application streaming site in a browser full of tabs or bookmarks. It is displayed at the top of the browser tab for the application streaming site during users' streaming sessions.
   *
   * @public
   */
  FaviconS3Location: S3Location | undefined;
}

/**
 * The custom branding theme, which might include a custom logo, website links, and other branding to display to users.
 *
 * @public
 */
export interface Theme {
  /**
   * The stack that has the custom branding theme.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * The state of the theme.
   *
   * @public
   */
  State?: ThemeState | undefined;

  /**
   * The browser tab page title.
   *
   * @public
   */
  ThemeTitleText?: string | undefined;

  /**
   * The color that is used for the website links, text, buttons, and catalog page background.
   *
   * @public
   */
  ThemeStyling?: ThemeStyling | undefined;

  /**
   * The website links that display in the catalog page footer.
   *
   * @public
   */
  ThemeFooterLinks?: ThemeFooterLink[] | undefined;

  /**
   * The URL of the logo that displays in the catalog page header.
   *
   * @public
   */
  ThemeOrganizationLogoURL?: string | undefined;

  /**
   * The URL of the icon that displays at the top of a user's browser tab during streaming sessions.
   *
   * @public
   */
  ThemeFaviconURL?: string | undefined;

  /**
   * The time the theme was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateThemeForStackResult {
  /**
   * The theme object that contains the metadata of the custom branding.
   *
   * @public
   */
  Theme?: Theme | undefined;
}

/**
 * @public
 */
export interface CreateUpdatedImageRequest {
  /**
   * The name of the image to update.
   *
   * @public
   */
  existingImageName: string | undefined;

  /**
   * The name of the new image. The name must be unique within the AWS account and Region.
   *
   * @public
   */
  newImageName: string | undefined;

  /**
   * The description to display for the new image.
   *
   * @public
   */
  newImageDescription?: string | undefined;

  /**
   * The name to display for the new image.
   *
   * @public
   */
  newImageDisplayName?: string | undefined;

  /**
   * The tags to associate with the new image. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=.
   *
   * Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters:
   *
   * _ . : / = + \ - @
   *
   * If you do not specify a value, the value is set to an empty string.
   *
   * For more information about tags, see [Tagging Your Resources](https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html) in the *Amazon WorkSpaces Applications Administration Guide*.
   *
   * @public
   */
  newImageTags?: Record<string, string> | undefined;

  /**
   * Indicates whether to display the status of image update availability before WorkSpaces Applications initiates the process of creating a new updated image. If this value is set to `true`, WorkSpaces Applications displays whether image updates are available. If this value is set to `false`, WorkSpaces Applications initiates the process of creating a new updated image without displaying whether image updates are available.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateUpdatedImageResult {
  /**
   * Describes an image.
   *
   * @public
   */
  image?: Image | undefined;

  /**
   * Indicates whether a new image can be created.
   *
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
 */
export interface CreateUsageReportSubscriptionResult {
  /**
   * The Amazon S3 bucket where generated reports are stored.
   *
   * If you enabled on-instance session scripts and Amazon S3 logging for your session script configuration, WorkSpaces Applications created an S3 bucket to store the script output. The bucket is unique to your account and Region. When you enable usage reporting in this case, WorkSpaces Applications uses the same bucket to store your usage reports. If you haven't already enabled on-instance session scripts, when you enable usage reports, WorkSpaces Applications creates a new S3 bucket.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * The schedule for generating usage reports.
   *
   * @public
   */
  Schedule?: UsageReportSchedule | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * The email address of the user.
   *
   * > **Note:** Users' email addresses are case-sensitive. During login, if they specify an email address that doesn't use the same capitalization as the email address specified when their user pool account was created, a "user does not exist" error message displays.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The action to take for the welcome email that is sent to a user after the user is created in the user pool. If you specify SUPPRESS, no email is sent. If you specify RESEND, do not specify the first name or last name of the user. If the value is null, the email is sent.
   *
   * > **Note:** The temporary password in the welcome email is valid for only 7 days. If users don’t set their passwords within 7 days, you must send them a new welcome email.
   *
   * @public
   */
  MessageAction?: MessageAction | undefined;

  /**
   * The first name, or given name, of the user.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * The last name, or surname, of the user.
   *
   * @public
   */
  LastName?: string | undefined;

  /**
   * The authentication type for the user. You must specify USERPOOL.
   *
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
   * The name of the app block.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppBlockResult {}

/**
 * @public
 */
export interface DeleteAppBlockBuilderRequest {
  /**
   * The name of the app block builder.
   *
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
   * The name of the application.
   *
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
   * The name of the directory configuration.
   *
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
   * The name of the entitlement.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the stack with which the entitlement is associated.
   *
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
   * The name of the fleet.
   *
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
   * The name of the image.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageResult {
  /**
   * Information about the image.
   *
   * @public
   */
  Image?: Image | undefined;
}

/**
 * @public
 */
export interface DeleteImageBuilderRequest {
  /**
   * The name of the image builder.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageBuilderResult {
  /**
   * Information about the image builder.
   *
   * @public
   */
  ImageBuilder?: ImageBuilder | undefined;
}

/**
 * @public
 */
export interface DeleteImagePermissionsRequest {
  /**
   * The name of the private image.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The 12-digit identifier of the AWS account for which to delete image permissions.
   *
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
   * The name of the stack.
   *
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
   * The name of the stack for the theme.
   *
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
   * The email address of the user.
   *
   * > **Note:** Users' email addresses are case-sensitive.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The authentication type for the user. You must specify USERPOOL.
   *
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
   * The ARN of the app block.
   *
   * @public
   */
  AppBlockArn?: string | undefined;

  /**
   * The name of the app block builder.
   *
   * @public
   */
  AppBlockBuilderName?: string | undefined;

  /**
   * The maximum size of each page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppBlockBuilderAppBlockAssociationsResult {
  /**
   * This list of app block builders associated with app blocks.
   *
   * @public
   */
  AppBlockBuilderAppBlockAssociations?: AppBlockBuilderAppBlockAssociation[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppBlockBuildersRequest {
  /**
   * The names of the app block builders.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum size of each page of results. The maximum value is 25.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAppBlockBuildersResult {
  /**
   * The list that describes one or more app block builders.
   *
   * @public
   */
  AppBlockBuilders?: AppBlockBuilder[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppBlocksRequest {
  /**
   * The ARNs of the app blocks.
   *
   * @public
   */
  Arns?: string[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum size of each page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAppBlocksResult {
  /**
   * The app blocks in the list.
   *
   * @public
   */
  AppBlocks?: AppBlock[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationFleetAssociationsRequest {
  /**
   * The name of the fleet.
   *
   * @public
   */
  FleetName?: string | undefined;

  /**
   * The ARN of the application.
   *
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * The maximum size of each page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationFleetAssociationsResult {
  /**
   * The application fleet associations in the list.
   *
   * @public
   */
  ApplicationFleetAssociations?: ApplicationFleetAssociation[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationsRequest {
  /**
   * The ARNs for the applications.
   *
   * @public
   */
  Arns?: string[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum size of each page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationsResult {
  /**
   * The applications in the list.
   *
   * @public
   */
  Applications?: Application[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppLicenseUsageRequest {
  /**
   * Billing period for the usage record.
   *
   * Specify the value in *yyyy-mm* format. For example, for August 2025, use *2025-08*.
   *
   * @public
   */
  BillingPeriod: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Token for pagination of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppLicenseUsageResult {
  /**
   * Collection of license usage records.
   *
   * @public
   */
  AppLicenseUsages?: AdminAppLicenseUsageRecord[] | undefined;

  /**
   * Token for pagination of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectoryConfigsRequest {
  /**
   * The directory names.
   *
   * @public
   */
  DirectoryNames?: string[] | undefined;

  /**
   * The maximum size of each page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectoryConfigsResult {
  /**
   * Information about the directory configurations. Note that although the response syntax in this topic includes the account password, this password is not returned in the actual response.
   *
   * @public
   */
  DirectoryConfigs?: DirectoryConfig[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEntitlementsRequest {
  /**
   * The name of the entitlement.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The name of the stack with which the entitlement is associated.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum size of each page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeEntitlementsResult {
  /**
   * The entitlements.
   *
   * @public
   */
  Entitlements?: Entitlement[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetsRequest {
  /**
   * The names of the fleets to describe.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetsResult {
  /**
   * Information about the fleets.
   *
   * @public
   */
  Fleets?: Fleet[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageBuildersRequest {
  /**
   * The names of the image builders to describe.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The maximum size of each page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageBuildersResult {
  /**
   * Information about the image builders.
   *
   * @public
   */
  ImageBuilders?: ImageBuilder[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImagePermissionsRequest {
  /**
   * The name of the private image for which to describe permissions. The image must be one that you own.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The maximum size of each page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The 12-digit identifier of one or more AWS accounts with which the image is shared.
   *
   * @public
   */
  SharedAwsAccountIds?: string[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the permissions that are available to the specified AWS account for a shared image.
 *
 * @public
 */
export interface SharedImagePermissions {
  /**
   * The 12-digit identifier of the AWS account with which the image is shared.
   *
   * @public
   */
  sharedAccountId: string | undefined;

  /**
   * Describes the permissions for a shared image.
   *
   * @public
   */
  imagePermissions: ImagePermissions | undefined;
}

/**
 * @public
 */
export interface DescribeImagePermissionsResult {
  /**
   * The name of the private image.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The permissions for a private image that you own.
   *
   * @public
   */
  SharedImagePermissionsList?: SharedImagePermissions[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImagesRequest {
  /**
   * The names of the public or private images to describe.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The ARNs of the public, private, and shared images to describe.
   *
   * @public
   */
  Arns?: string[] | undefined;

  /**
   * The type of image (public, private, or shared) to describe.
   *
   * @public
   */
  Type?: VisibilityType | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum size of each page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeImagesResult {
  /**
   * Information about the images.
   *
   * @public
   */
  Images?: Image[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSessionsRequest {
  /**
   * The name of the stack. This value is case-sensitive.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The name of the fleet. This value is case-sensitive.
   *
   * @public
   */
  FleetName: string | undefined;

  /**
   * The user identifier (ID). If you specify a user ID, you must also specify the authentication type.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The size of each page of results. The default value is 20 and the maximum value is 50.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The authentication method. Specify `API` for a user authenticated using a streaming URL or `SAML` for a SAML federated user. The default is to authenticate users using a streaming URL.
   *
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * The identifier for the instance hosting the session.
   *
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * Describes a streaming session.
 *
 * @public
 */
export interface Session {
  /**
   * The identifier of the streaming session.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The identifier of the user for whom the session was created.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The name of the stack for the streaming session.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The name of the fleet for the streaming session.
   *
   * @public
   */
  FleetName: string | undefined;

  /**
   * The current state of the streaming session.
   *
   * @public
   */
  State: SessionState | undefined;

  /**
   * Specifies whether a user is connected to the streaming session.
   *
   * @public
   */
  ConnectionState?: SessionConnectionState | undefined;

  /**
   * The time when a streaming instance is dedicated for the user.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time when the streaming session is set to expire. This time is based on the `MaxUserDurationinSeconds` value, which determines the maximum length of time that a streaming session can run. A streaming session might end earlier than the time specified in `SessionMaxExpirationTime`, when the `DisconnectTimeOutInSeconds` elapses or the user chooses to end his or her session. If the `DisconnectTimeOutInSeconds` elapses, or the user chooses to end his or her session, the streaming instance is terminated and the streaming session ends.
   *
   * @public
   */
  MaxExpirationTime?: Date | undefined;

  /**
   * The authentication method. The user is authenticated using a streaming URL (`API`) or SAML 2.0 federation (`SAML`).
   *
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * The network details for the streaming session.
   *
   * @public
   */
  NetworkAccessConfiguration?: NetworkAccessConfiguration | undefined;

  /**
   * The identifier for the instance hosting the session.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The drain status of the instance hosting the streaming session. This only applies to multi-session fleets.
   *
   * @public
   */
  InstanceDrainStatus?: InstanceDrainStatus | undefined;
}

/**
 * @public
 */
export interface DescribeSessionsResult {
  /**
   * Information about the streaming sessions.
   *
   * @public
   */
  Sessions?: Session[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSoftwareAssociationsRequest {
  /**
   * The ARN of the resource to describe software associations. Possible resources are Image and ImageBuilder.
   *
   * @public
   */
  AssociatedResource: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The association between a license-included application and a resource.
 *
 * @public
 */
export interface SoftwareAssociations {
  /**
   * The name of the license-included application.
   *
   * Possible values include the following:
   *
   * - Microsoft_Office_2021_LTSC_Professional_Plus_32Bit
   * - Microsoft_Office_2021_LTSC_Professional_Plus_64Bit
   * - Microsoft_Office_2024_LTSC_Professional_Plus_32Bit
   * - Microsoft_Office_2024_LTSC_Professional_Plus_64Bit
   * - Microsoft_Visio_2021_LTSC_Professional_32Bit
   * - Microsoft_Visio_2021_LTSC_Professional_64Bit
   * - Microsoft_Visio_2024_LTSC_Professional_32Bit
   * - Microsoft_Visio_2024_LTSC_Professional_64Bit
   * - Microsoft_Project_2021_Professional_32Bit
   * - Microsoft_Project_2021_Professional_64Bit
   * - Microsoft_Project_2024_Professional_32Bit
   * - Microsoft_Project_2024_Professional_64Bit
   * - Microsoft_Office_2021_LTSC_Standard_32Bit
   * - Microsoft_Office_2021_LTSC_Standard_64Bit
   * - Microsoft_Office_2024_LTSC_Standard_32Bit
   * - Microsoft_Office_2024_LTSC_Standard_64Bit
   * - Microsoft_Visio_2021_LTSC_Standard_32Bit
   * - Microsoft_Visio_2021_LTSC_Standard_64Bit
   * - Microsoft_Visio_2024_LTSC_Standard_32Bit
   * - Microsoft_Visio_2024_LTSC_Standard_64Bit
   * - Microsoft_Project_2021_Standard_32Bit
   * - Microsoft_Project_2021_Standard_64Bit
   * - Microsoft_Project_2024_Standard_32Bit
   * - Microsoft_Project_2024_Standard_64Bit
   *
   * @public
   */
  SoftwareName?: string | undefined;

  /**
   * The deployment status of the license-included application.
   *
   * @public
   */
  Status?: SoftwareDeploymentStatus | undefined;

  /**
   * The error details for failed deployments of the license-included application.
   *
   * @public
   */
  DeploymentError?: ErrorDetails[] | undefined;
}

/**
 * @public
 */
export interface DescribeSoftwareAssociationsResult {
  /**
   * The ARN of the resource to describe software associations.
   *
   * @public
   */
  AssociatedResource?: string | undefined;

  /**
   * Collection of license included applications association details including:
   *
   * - License included application name and version information
   * - Deployment status (SoftwareDeploymentStatus enum)
   * - Error details for failed deployments
   * - Association timestamps
   *
   * @public
   */
  SoftwareAssociations?: SoftwareAssociations[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStacksRequest {
  /**
   * The names of the stacks to describe.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStacksResult {
  /**
   * Information about the stacks.
   *
   * @public
   */
  Stacks?: Stack[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeThemeForStackRequest {
  /**
   * The name of the stack for the theme.
   *
   * @public
   */
  StackName: string | undefined;
}

/**
 * @public
 */
export interface DescribeThemeForStackResult {
  /**
   * The theme object that contains the metadata of the custom branding.
   *
   * @public
   */
  Theme?: Theme | undefined;
}

/**
 * @public
 */
export interface DescribeUsageReportSubscriptionsRequest {
  /**
   * The maximum size of each page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the error that is returned when a usage report can't be generated.
 *
 * @public
 */
export interface LastReportGenerationExecutionError {
  /**
   * The error code for the error that is returned when a usage report can't be generated.
   *
   * @public
   */
  ErrorCode?: UsageReportExecutionErrorCode | undefined;

  /**
   * The error message for the error that is returned when a usage report can't be generated.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Describes information about the usage report subscription.
 *
 * @public
 */
export interface UsageReportSubscription {
  /**
   * The Amazon S3 bucket where generated reports are stored.
   *
   * If you enabled on-instance session scripts and Amazon S3 logging for your session script configuration, WorkSpaces Applications created an S3 bucket to store the script output. The bucket is unique to your account and Region. When you enable usage reporting in this case, WorkSpaces Applications uses the same bucket to store your usage reports. If you haven't already enabled on-instance session scripts, when you enable usage reports, WorkSpaces Applications creates a new S3 bucket.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * The schedule for generating usage reports.
   *
   * @public
   */
  Schedule?: UsageReportSchedule | undefined;

  /**
   * The time when the last usage report was generated.
   *
   * @public
   */
  LastGeneratedReportDate?: Date | undefined;

  /**
   * The errors that were returned if usage reports couldn't be generated.
   *
   * @public
   */
  SubscriptionErrors?: LastReportGenerationExecutionError[] | undefined;
}

/**
 * @public
 */
export interface DescribeUsageReportSubscriptionsResult {
  /**
   * Information about the usage report subscription.
   *
   * @public
   */
  UsageReportSubscriptions?: UsageReportSubscription[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUsersRequest {
  /**
   * The authentication type for the users in the user pool to describe. You must specify USERPOOL.
   *
   * @public
   */
  AuthenticationType: AuthenticationType | undefined;

  /**
   * The maximum size of each page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a user in the user pool.
 *
 * @public
 */
export interface User {
  /**
   * The ARN of the user.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The email address of the user.
   *
   * > **Note:** Users' email addresses are case-sensitive.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * Specifies whether the user in the user pool is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The status of the user in the user pool. The status can be one of the following:
   *
   * - UNCONFIRMED – The user is created but not confirmed.
   * - CONFIRMED – The user is confirmed.
   * - ARCHIVED – The user is no longer active.
   * - COMPROMISED – The user is disabled because of a potential security threat.
   * - UNKNOWN – The user status is not known.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The first name, or given name, of the user.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * The last name, or surname, of the user.
   *
   * @public
   */
  LastName?: string | undefined;

  /**
   * The date and time the user was created in the user pool.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The authentication type for the user.
   *
   * @public
   */
  AuthenticationType: AuthenticationType | undefined;
}

/**
 * @public
 */
export interface DescribeUsersResult {
  /**
   * Information about users in the user pool.
   *
   * @public
   */
  Users?: User[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserStackAssociationsRequest {
  /**
   * The name of the stack that is associated with the user.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * The email address of the user who is associated with the stack.
   *
   * > **Note:** Users' email addresses are case-sensitive.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The authentication type for the user who is associated with the stack. You must specify USERPOOL.
   *
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * The maximum size of each page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserStackAssociationsResult {
  /**
   * The UserStackAssociation objects.
   *
   * @public
   */
  UserStackAssociations?: UserStackAssociation[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisableUserRequest {
  /**
   * The email address of the user.
   *
   * > **Note:** Users' email addresses are case-sensitive.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The authentication type for the user. You must specify USERPOOL.
   *
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
   * The ARN of the app block.
   *
   * @public
   */
  AppBlockArn: string | undefined;

  /**
   * The name of the app block builder.
   *
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
   * The name of the fleet.
   *
   * @public
   */
  FleetName: string | undefined;

  /**
   * The ARN of the application.
   *
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
   * The name of the stack with which the entitlement is associated.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The name of the entitlement.
   *
   * @public
   */
  EntitlementName: string | undefined;

  /**
   * The identifier of the application to remove from the entitlement.
   *
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
   * The name of the fleet.
   *
   * @public
   */
  FleetName: string | undefined;

  /**
   * The name of the stack.
   *
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
   * The name of the target image builder instance.
   *
   * @public
   */
  ImageBuilderName: string | undefined;

  /**
   * The list of license included applications to disassociate from the image builder.
   *
   * Possible values include the following:
   *
   * - Microsoft_Office_2021_LTSC_Professional_Plus_32Bit
   * - Microsoft_Office_2021_LTSC_Professional_Plus_64Bit
   * - Microsoft_Office_2024_LTSC_Professional_Plus_32Bit
   * - Microsoft_Office_2024_LTSC_Professional_Plus_64Bit
   * - Microsoft_Visio_2021_LTSC_Professional_32Bit
   * - Microsoft_Visio_2021_LTSC_Professional_64Bit
   * - Microsoft_Visio_2024_LTSC_Professional_32Bit
   * - Microsoft_Visio_2024_LTSC_Professional_64Bit
   * - Microsoft_Project_2021_Professional_32Bit
   * - Microsoft_Project_2021_Professional_64Bit
   * - Microsoft_Project_2024_Professional_32Bit
   * - Microsoft_Project_2024_Professional_64Bit
   * - Microsoft_Office_2021_LTSC_Standard_32Bit
   * - Microsoft_Office_2021_LTSC_Standard_64Bit
   * - Microsoft_Office_2024_LTSC_Standard_32Bit
   * - Microsoft_Office_2024_LTSC_Standard_64Bit
   * - Microsoft_Visio_2021_LTSC_Standard_32Bit
   * - Microsoft_Visio_2021_LTSC_Standard_64Bit
   * - Microsoft_Visio_2024_LTSC_Standard_32Bit
   * - Microsoft_Visio_2024_LTSC_Standard_64Bit
   * - Microsoft_Project_2021_Standard_32Bit
   * - Microsoft_Project_2021_Standard_64Bit
   * - Microsoft_Project_2024_Standard_32Bit
   * - Microsoft_Project_2024_Standard_64Bit
   *
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
export interface DrainSessionInstanceRequest {
  /**
   * The identifier of the streaming session.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface DrainSessionInstanceResult {}

/**
 * @public
 */
export interface EnableUserRequest {
  /**
   * The email address of the user.
   *
   * > **Note:** Users' email addresses are case-sensitive. During login, if they specify an email address that doesn't use the same capitalization as the email address specified when their user pool account was created, a "user does not exist" error message displays.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The authentication type for the user. You must specify USERPOOL.
   *
   * @public
   */
  AuthenticationType: AuthenticationType | undefined;
}

/**
 * @public
 */
export interface EnableUserResult {}

/**
 * The application associated to an entitlement. Access is controlled based on user attributes.
 *
 * @public
 */
export interface EntitledApplication {
  /**
   * The identifier of the application.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ExpireSessionRequest {
  /**
   * The identifier of the streaming session.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface ExpireSessionResult {}

/**
 * A filter for narrowing down the results when listing export image tasks. Filters allow you to specify criteria such as task state or creation date.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the filter. Valid filter names depend on the operation being performed.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The values for the filter. Multiple values can be specified for a single filter name.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface GetExportImageTaskRequest {
  /**
   * The unique identifier of the export image task to retrieve information about.
   *
   * @public
   */
  TaskId?: string | undefined;
}

/**
 * @public
 */
export interface GetExportImageTaskResult {
  /**
   * Information about the export image task, including its current state, created date, and any error details.
   *
   * @public
   */
  ExportImageTask?: ExportImageTask | undefined;
}

/**
 * @public
 */
export interface ListAssociatedFleetsRequest {
  /**
   * The name of the stack.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedFleetsResult {
  /**
   * The name of the fleet.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedStacksRequest {
  /**
   * The name of the fleet.
   *
   * @public
   */
  FleetName: string | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedStacksResult {
  /**
   * The name of the stack.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntitledApplicationsRequest {
  /**
   * The name of the stack with which the entitlement is associated.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The name of the entitlement.
   *
   * @public
   */
  EntitlementName: string | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum size of each page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEntitledApplicationsResult {
  /**
   * The entitled applications.
   *
   * @public
   */
  EntitledApplications?: EntitledApplication[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExportImageTasksRequest {
  /**
   * Optional filters to apply when listing export image tasks. Filters help you narrow down the results based on specific criteria.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of export image tasks to return in a single request. The valid range is 1-500, with a default of 50.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token from a previous request. Use this to retrieve the next page of results when there are more tasks than the MaxResults limit.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExportImageTasksResult {
  /**
   * The list of export image tasks that match the specified criteria.
   *
   * @public
   */
  ExportImageTasks?: ExportImageTask[] | undefined;

  /**
   * The pagination token to use for retrieving the next page of results. This field is only present when there are more results available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The information about the tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartAppBlockBuilderRequest {
  /**
   * The name of the app block builder.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartAppBlockBuilderResult {
  /**
   * Describes an app block builder.
   *
   * @public
   */
  AppBlockBuilder?: AppBlockBuilder | undefined;
}

/**
 * @public
 */
export interface StartFleetRequest {
  /**
   * The name of the fleet.
   *
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
   * The name of the image builder.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The version of the WorkSpaces Applications agent to use for this image builder. To use the latest version of the WorkSpaces Applications agent, specify [LATEST].
   *
   * @public
   */
  AppstreamAgentVersion?: string | undefined;
}

/**
 * @public
 */
export interface StartImageBuilderResult {
  /**
   * Information about the image builder.
   *
   * @public
   */
  ImageBuilder?: ImageBuilder | undefined;
}

/**
 * @public
 */
export interface StartSoftwareDeploymentToImageBuilderRequest {
  /**
   * The name of the target image builder instance.
   *
   * @public
   */
  ImageBuilderName: string | undefined;

  /**
   * Whether to retry previously failed license included application deployments.
   *
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
   * The name of the app block builder.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopAppBlockBuilderResult {
  /**
   * Describes an app block builder.
   *
   * @public
   */
  AppBlockBuilder?: AppBlockBuilder | undefined;
}

/**
 * @public
 */
export interface StopFleetRequest {
  /**
   * The name of the fleet.
   *
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
   * The name of the image builder.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopImageBuilderResult {
  /**
   * Information about the image builder.
   *
   * @public
   */
  ImageBuilder?: ImageBuilder | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to associate. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=.
   *
   * If you do not specify a value, the value is set to an empty string.
   *
   * Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters:
   *
   * _ . : / = + \ - @
   *
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag keys for the tags to disassociate.
   *
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
   * The unique name for the app block builder.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the app block builder.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The display name of the app block builder.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The platform of the app block builder.
   *
   * `WINDOWS_SERVER_2019` is the only valid value.
   *
   * @public
   */
  Platform?: PlatformType | undefined;

  /**
   * The instance type to use when launching the app block builder. The following instance types are available:
   *
   * - stream.standard.small
   * - stream.standard.medium
   * - stream.standard.large
   * - stream.standard.xlarge
   * - stream.standard.2xlarge
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The VPC configuration for the app block builder.
   *
   * App block builders require that you specify at least two subnets in different availability zones.
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * Enables or disables default internet access for the app block builder.
   *
   * @public
   */
  EnableDefaultInternetAccess?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to apply to the app block builder. To assume a role, the app block builder calls the AWS Security Token Service (STS) `AssumeRole` API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the **appstream_machine_role** credential profile on the instance.
   *
   * For more information, see [Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances](https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html) in the *Amazon WorkSpaces Applications Administration Guide*.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * The list of interface VPC endpoint (interface endpoint) objects. Administrators can connect to the app block builder only through the specified endpoints.
   *
   * @public
   */
  AccessEndpoints?: AccessEndpoint[] | undefined;

  /**
   * The attributes to delete from the app block builder.
   *
   * @public
   */
  AttributesToDelete?: AppBlockBuilderAttribute[] | undefined;

  /**
   * Set to true to disable Instance Metadata Service Version 1 (IMDSv1) and enforce IMDSv2. Set to false to enable both IMDSv1 and IMDSv2.
   *
   * @public
   */
  DisableIMDSV1?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAppBlockBuilderResult {
  /**
   * Describes an app block builder.
   *
   * @public
   */
  AppBlockBuilder?: AppBlockBuilder | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * The name of the application. This name is visible to users when display name is not specified.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The display name of the application. This name is visible to users in the application catalog.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the application.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The icon S3 location of the application.
   *
   * @public
   */
  IconS3Location?: S3Location | undefined;

  /**
   * The launch path of the application.
   *
   * @public
   */
  LaunchPath?: string | undefined;

  /**
   * The working directory of the application.
   *
   * @public
   */
  WorkingDirectory?: string | undefined;

  /**
   * The launch parameters of the application.
   *
   * @public
   */
  LaunchParameters?: string | undefined;

  /**
   * The ARN of the app block.
   *
   * @public
   */
  AppBlockArn?: string | undefined;

  /**
   * The attributes to delete for an application.
   *
   * @public
   */
  AttributesToDelete?: ApplicationAttribute[] | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResult {
  /**
   * Describes an application in the application catalog.
   *
   * @public
   */
  Application?: Application | undefined;
}

/**
 * @public
 */
export interface UpdateDirectoryConfigRequest {
  /**
   * The name of the Directory Config object.
   *
   * @public
   */
  DirectoryName: string | undefined;

  /**
   * The distinguished names of the organizational units for computer accounts.
   *
   * @public
   */
  OrganizationalUnitDistinguishedNames?: string[] | undefined;

  /**
   * The credentials for the service account used by the fleet or image builder to connect to the directory.
   *
   * @public
   */
  ServiceAccountCredentials?: ServiceAccountCredentials | undefined;

  /**
   * The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances. Fallback is turned on by default when certificate-based authentication is **Enabled** . Fallback allows users to log in using their AD domain password if certificate-based authentication is unsuccessful, or to unlock a desktop lock screen. **Enabled_no_directory_login_fallback** enables certificate-based authentication, but does not allow users to log in using their AD domain password. Users will be disconnected to re-authenticate using certificates.
   *
   * @public
   */
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties | undefined;
}

/**
 * @public
 */
export interface UpdateDirectoryConfigResult {
  /**
   * Information about the Directory Config object.
   *
   * @public
   */
  DirectoryConfig?: DirectoryConfig | undefined;
}

/**
 * @public
 */
export interface UpdateEntitlementRequest {
  /**
   * The name of the entitlement.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the stack with which the entitlement is associated.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The description of the entitlement.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies whether all or only selected apps are entitled.
   *
   * @public
   */
  AppVisibility?: AppVisibility | undefined;

  /**
   * The attributes of the entitlement.
   *
   * @public
   */
  Attributes?: EntitlementAttribute[] | undefined;
}

/**
 * @public
 */
export interface UpdateEntitlementResult {
  /**
   * The entitlement.
   *
   * @public
   */
  Entitlement?: Entitlement | undefined;
}

/**
 * @public
 */
export interface UpdateFleetRequest {
  /**
   * The name of the image used to create the fleet.
   *
   * @public
   */
  ImageName?: string | undefined;

  /**
   * The ARN of the public, private, or shared image to use.
   *
   * @public
   */
  ImageArn?: string | undefined;

  /**
   * A unique name for the fleet.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The instance type to use when launching fleet instances. The following instance types are available:
   *
   * - stream.standard.small
   * - stream.standard.medium
   * - stream.standard.large
   * - stream.standard.xlarge
   * - stream.standard.2xlarge
   * - stream.compute.large
   * - stream.compute.xlarge
   * - stream.compute.2xlarge
   * - stream.compute.4xlarge
   * - stream.compute.8xlarge
   * - stream.memory.large
   * - stream.memory.xlarge
   * - stream.memory.2xlarge
   * - stream.memory.4xlarge
   * - stream.memory.8xlarge
   * - stream.memory.z1d.large
   * - stream.memory.z1d.xlarge
   * - stream.memory.z1d.2xlarge
   * - stream.memory.z1d.3xlarge
   * - stream.memory.z1d.6xlarge
   * - stream.memory.z1d.12xlarge
   * - stream.graphics.g4dn.xlarge
   * - stream.graphics.g4dn.2xlarge
   * - stream.graphics.g4dn.4xlarge
   * - stream.graphics.g4dn.8xlarge
   * - stream.graphics.g4dn.12xlarge
   * - stream.graphics.g4dn.16xlarge
   * - stream.graphics.g5.xlarge
   * - stream.graphics.g5.2xlarge
   * - stream.graphics.g5.4xlarge
   * - stream.graphics.g5.8xlarge
   * - stream.graphics.g5.16xlarge
   * - stream.graphics.g5.12xlarge
   * - stream.graphics.g5.24xlarge
   * - stream.graphics.g6.xlarge
   * - stream.graphics.g6.2xlarge
   * - stream.graphics.g6.4xlarge
   * - stream.graphics.g6.8xlarge
   * - stream.graphics.g6.16xlarge
   * - stream.graphics.g6.12xlarge
   * - stream.graphics.g6.24xlarge
   * - stream.graphics.gr6.4xlarge
   * - stream.graphics.gr6.8xlarge
   * - stream.graphics.g6f.large
   * - stream.graphics.g6f.xlarge
   * - stream.graphics.g6f.2xlarge
   * - stream.graphics.g6f.4xlarge
   * - stream.graphics.gr6f.4xlarge
   *
   * The following instance types are available for Elastic fleets:
   *
   * - stream.standard.small
   * - stream.standard.medium
   * - stream.standard.large
   * - stream.standard.xlarge
   * - stream.standard.2xlarge
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The desired capacity for the fleet. This is not allowed for Elastic fleets.
   *
   * @public
   */
  ComputeCapacity?: ComputeCapacity | undefined;

  /**
   * The VPC configuration for the fleet. This is required for Elastic fleets, but not required for other fleet types. Elastic fleets require that you specify at least two subnets in different availability zones.
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.
   *
   * Specify a value between 600 and 432000.
   *
   * @public
   */
  MaxUserDurationInSeconds?: number | undefined;

  /**
   * The amount of time that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance.
   *
   * Specify a value between 60 and 36000.
   *
   * @public
   */
  DisconnectTimeoutInSeconds?: number | undefined;

  /**
   * Deletes the VPC association for the specified fleet.
   *
   * @deprecated deprecated.
   * @public
   */
  DeleteVpcConfig?: boolean | undefined;

  /**
   * The description to display.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The fleet name to display.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * Enables or disables default internet access for the fleet.
   *
   * @public
   */
  EnableDefaultInternetAccess?: boolean | undefined;

  /**
   * The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain.
   *
   * @public
   */
  DomainJoinInfo?: DomainJoinInfo | undefined;

  /**
   * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the `DisconnectTimeoutInSeconds` time interval begins. Users are notified before they are disconnected due to inactivity. If users try to reconnect to the streaming session before the time interval specified in `DisconnectTimeoutInSeconds` elapses, they are connected to their previous session. Users are considered idle when they stop providing keyboard or mouse input during their streaming session. File uploads and downloads, audio in, audio out, and pixels changing do not qualify as user activity. If users continue to be idle after the time interval in `IdleDisconnectTimeoutInSeconds` elapses, they are disconnected.
   *
   * To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 36000. The default value is 0.
   *
   * > **Note:** If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity.
   *
   * @public
   */
  IdleDisconnectTimeoutInSeconds?: number | undefined;

  /**
   * The fleet attributes to delete.
   *
   * @public
   */
  AttributesToDelete?: FleetAttribute[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to apply to the fleet. To assume a role, a fleet instance calls the AWS Security Token Service (STS) `AssumeRole` API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the **appstream_machine_role** credential profile on the instance.
   *
   * For more information, see [Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances](https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html) in the *Amazon WorkSpaces Applications Administration Guide*.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * The WorkSpaces Applications view that is displayed to your users when they stream from the fleet. When `APP` is specified, only the windows of applications opened by users display. When `DESKTOP` is specified, the standard desktop that is provided by the operating system displays.
   *
   * The default value is `APP`.
   *
   * @public
   */
  StreamView?: StreamView | undefined;

  /**
   * The platform of the fleet. WINDOWS_SERVER_2019, AMAZON_LINUX2 and UBUNTU_PRO_2404 are supported for Elastic fleets.
   *
   * @public
   */
  Platform?: PlatformType | undefined;

  /**
   * The maximum number of concurrent sessions for a fleet.
   *
   * @public
   */
  MaxConcurrentSessions?: number | undefined;

  /**
   * The USB device filter strings that specify which USB devices a user can redirect to the fleet streaming session, when using the Windows native client. This is allowed but not required for Elastic fleets.
   *
   * @public
   */
  UsbDeviceFilterStrings?: string[] | undefined;

  /**
   * The S3 location of the session scripts configuration zip file. This only applies to Elastic fleets.
   *
   * @public
   */
  SessionScriptS3Location?: S3Location | undefined;

  /**
   * The maximum number of user sessions on an instance. This only applies to multi-session fleets.
   *
   * @public
   */
  MaxSessionsPerInstance?: number | undefined;

  /**
   * The updated configuration for the root volume of fleet instances. Note that volume size cannot be decreased below the image volume size.
   *
   * @public
   */
  RootVolumeConfig?: VolumeConfig | undefined;

  /**
   * Set to true to disable Instance Metadata Service Version 1 (IMDSv1) and enforce IMDSv2. Set to false to enable both IMDSv1 and IMDSv2.
   *
   * > **Note:** Before disabling IMDSv1, ensure your WorkSpaces Applications images are running the agent version or managed image update released on or after January 16, 2024 to support IMDSv2 enforcement.
   *
   * @public
   */
  DisableIMDSV1?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateFleetResult {
  /**
   * Information about the fleet.
   *
   * @public
   */
  Fleet?: Fleet | undefined;
}

/**
 * @public
 */
export interface UpdateImagePermissionsRequest {
  /**
   * The name of the private image.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The 12-digit identifier of the AWS account for which you want add or update image permissions.
   *
   * @public
   */
  SharedAccountId: string | undefined;

  /**
   * The permissions for the image.
   *
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
 */
export interface UpdateStackRequest {
  /**
   * The stack name to display.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description to display.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the stack.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The storage connectors to enable.
   *
   * @public
   */
  StorageConnectors?: StorageConnector[] | undefined;

  /**
   * Deletes the storage connectors currently enabled for the stack.
   *
   * @deprecated deprecated.
   * @public
   */
  DeleteStorageConnectors?: boolean | undefined;

  /**
   * The URL that users are redirected to after their streaming session ends.
   *
   * @public
   */
  RedirectURL?: string | undefined;

  /**
   * The URL that users are redirected to after they choose the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.
   *
   * @public
   */
  FeedbackURL?: string | undefined;

  /**
   * The stack attributes to delete.
   *
   * @public
   */
  AttributesToDelete?: StackAttribute[] | undefined;

  /**
   * The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.
   *
   * @public
   */
  UserSettings?: UserSetting[] | undefined;

  /**
   * The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.
   *
   * @public
   */
  ApplicationSettings?: ApplicationSettings | undefined;

  /**
   * The list of interface VPC endpoint (interface endpoint) objects. Users of the stack can connect to WorkSpaces Applications only through the specified endpoints.
   *
   * @public
   */
  AccessEndpoints?: AccessEndpoint[] | undefined;

  /**
   * The domains where WorkSpaces Applications streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded WorkSpaces Applications streaming sessions.
   *
   * @public
   */
  EmbedHostDomains?: string[] | undefined;

  /**
   * The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
   *
   * @public
   */
  StreamingExperienceSettings?: StreamingExperienceSettings | undefined;

  /**
   * Configuration for bidirectional URL redirection between the streaming session and the local client. Use HostToClient to redirect URLs from the remote desktop to the local browser.
   *
   * @public
   */
  ContentRedirection?: ContentRedirection | undefined;

  /**
   * The configuration for agent access on the stack. Specify this to update agent access settings. To remove agent access, use AttributesToDelete with the AGENT_ACCESS_CONFIG value.
   *
   * @public
   */
  AgentAccessConfig?: AgentAccessConfigForUpdate | undefined;

  /**
   * Specifies whether users' cloud storage authentication persists across streaming sessions. When you specify FORCE_REAUTHENTICATION, WorkSpaces Applications removes the stored authentication for the stack's OneDrive and Google Drive connectors when a user's session ends. The user links their cloud storage again on their next session. To clear this attribute, add STORAGE_CONNECTOR_AUTHENTICATION to AttributesToDelete.
   *
   * @public
   */
  StorageConnectorAuthentication?: StorageConnectorAuthentication | undefined;
}

/**
 * @public
 */
export interface UpdateStackResult {
  /**
   * Information about the stack.
   *
   * @public
   */
  Stack?: Stack | undefined;
}

/**
 * @public
 */
export interface UpdateThemeForStackRequest {
  /**
   * The name of the stack for the theme.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The links that are displayed in the footer of the streaming application catalog page. These links are helpful resources for users, such as the organization's IT support and product marketing sites.
   *
   * @public
   */
  FooterLinks?: ThemeFooterLink[] | undefined;

  /**
   * The title that is displayed at the top of the browser tab during users' application streaming sessions.
   *
   * @public
   */
  TitleText?: string | undefined;

  /**
   * The color theme that is applied to website links, text, and buttons. These colors are also applied as accents in the background for the streaming application catalog page.
   *
   * @public
   */
  ThemeStyling?: ThemeStyling | undefined;

  /**
   * The organization logo that appears on the streaming application catalog page.
   *
   * @public
   */
  OrganizationLogoS3Location?: S3Location | undefined;

  /**
   * The S3 location of the favicon. The favicon enables users to recognize their application streaming site in a browser full of tabs or bookmarks. It is displayed at the top of the browser tab for the application streaming site during users' streaming sessions.
   *
   * @public
   */
  FaviconS3Location?: S3Location | undefined;

  /**
   * Specifies whether custom branding should be applied to catalog page or not.
   *
   * @public
   */
  State?: ThemeState | undefined;

  /**
   * The attributes to delete.
   *
   * @public
   */
  AttributesToDelete?: ThemeAttribute[] | undefined;
}

/**
 * @public
 */
export interface UpdateThemeForStackResult {
  /**
   * The theme object that contains the metadata of the custom branding.
   *
   * @public
   */
  Theme?: Theme | undefined;
}
