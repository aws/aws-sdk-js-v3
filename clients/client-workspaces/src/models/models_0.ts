// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { WorkSpacesServiceException as __BaseException } from "./WorkSpacesServiceException";

/**
 * @public
 * <p>The user is not authorized to access a resource.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const AccessPropertyValue = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type AccessPropertyValue = (typeof AccessPropertyValue)[keyof typeof AccessPropertyValue];

/**
 * @public
 * @enum
 */
export const DedicatedTenancySupportResultEnum = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DedicatedTenancySupportResultEnum =
  (typeof DedicatedTenancySupportResultEnum)[keyof typeof DedicatedTenancySupportResultEnum];

/**
 * @public
 * @enum
 */
export const DedicatedTenancyModificationStateEnum = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type DedicatedTenancyModificationStateEnum =
  (typeof DedicatedTenancyModificationStateEnum)[keyof typeof DedicatedTenancyModificationStateEnum];

/**
 * @public
 * <p>Describes a modification to the configuration of Bring Your Own License (BYOL) for the
 *          specified account. </p>
 */
export interface AccountModification {
  /**
   * @public
   * <p>The state of the modification to the configuration of BYOL.</p>
   */
  ModificationState?: DedicatedTenancyModificationStateEnum;

  /**
   * @public
   * <p>The status of BYOL (whether BYOL is being enabled or disabled).</p>
   */
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum;

  /**
   * @public
   * <p>The IP address range, specified as an IPv4 CIDR block, for the management network
   *          interface used for the account.</p>
   */
  DedicatedTenancyManagementCidrRange?: string;

  /**
   * @public
   * <p>The timestamp when the modification of the BYOL configuration was started.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The error code that is returned if the configuration of BYOL cannot be modified.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The text of the error message that is returned if the configuration of BYOL cannot be
   *          modified.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * @enum
 */
export const Application = {
  Microsoft_Office_2016: "Microsoft_Office_2016",
  Microsoft_Office_2019: "Microsoft_Office_2019",
} as const;

/**
 * @public
 */
export type Application = (typeof Application)[keyof typeof Application];

/**
 * @public
 * @enum
 */
export const ApplicationAssociatedResourceType = {
  BUNDLE: "BUNDLE",
  IMAGE: "IMAGE",
  WORKSPACE: "WORKSPACE",
} as const;

/**
 * @public
 */
export type ApplicationAssociatedResourceType =
  (typeof ApplicationAssociatedResourceType)[keyof typeof ApplicationAssociatedResourceType];

/**
 * @public
 * <p>The specified application is not supported.</p>
 */
export class ApplicationNotSupportedException extends __BaseException {
  readonly name: "ApplicationNotSupportedException" = "ApplicationNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApplicationNotSupportedException, __BaseException>) {
    super({
      name: "ApplicationNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApplicationNotSupportedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const AssociationState = {
  COMPLETED: "COMPLETED",
  ERROR: "ERROR",
  INSTALLING: "INSTALLING",
  PENDING_INSTALL: "PENDING_INSTALL",
  PENDING_INSTALL_DEPLOYMENT: "PENDING_INSTALL_DEPLOYMENT",
  PENDING_UNINSTALL: "PENDING_UNINSTALL",
  PENDING_UNINSTALL_DEPLOYMENT: "PENDING_UNINSTALL_DEPLOYMENT",
  REMOVED: "REMOVED",
  UNINSTALLING: "UNINSTALLING",
} as const;

/**
 * @public
 */
export type AssociationState = (typeof AssociationState)[keyof typeof AssociationState];

/**
 * @public
 * @enum
 */
export const AssociationErrorCode = {
  INSUFFICIENT_DISKSPACE: "ValidationError.InsufficientDiskSpace",
  INSUFFICIENT_MEMORY: "ValidationError.InsufficientMemory",
  INTERNAL_SERVER_ERROR: "DeploymentError.InternalServerError",
  UNSUPPORTED_OPERATING_SYSTEM: "ValidationError.UnsupportedOperatingSystem",
  WORKSPACE_UNREACHABLE: "DeploymentError.WorkspaceUnreachable",
} as const;

/**
 * @public
 */
export type AssociationErrorCode = (typeof AssociationErrorCode)[keyof typeof AssociationErrorCode];

/**
 * @public
 * <p>Indicates the reason that the association deployment failed, including the error code and error message.</p>
 */
export interface AssociationStateReason {
  /**
   * @public
   * <p>The error code of the association deployment failure.</p>
   */
  ErrorCode?: AssociationErrorCode;

  /**
   * @public
   * <p>The error message of the association deployment failure.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * <p>Describes the association between an application and an application resource.</p>
 */
export interface ApplicationResourceAssociation {
  /**
   * @public
   * <p>The identifier of the application.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The identifier of the associated resource.</p>
   */
  AssociatedResourceId?: string;

  /**
   * @public
   * <p>The resource type of the associated resource.</p>
   */
  AssociatedResourceType?: ApplicationAssociatedResourceType;

  /**
   * @public
   * <p>The time the association was created.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The time the association status was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The status of the application resource association.</p>
   */
  State?: AssociationState;

  /**
   * @public
   * <p>The reason the association deployment failed.</p>
   */
  StateReason?: AssociationStateReason;
}

/**
 * @public
 */
export interface AssociateConnectionAliasRequest {
  /**
   * @public
   * <p>The identifier of the connection alias.</p>
   */
  AliasId: string | undefined;

  /**
   * @public
   * <p>The identifier of the directory to associate the connection alias with.</p>
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface AssociateConnectionAliasResult {
  /**
   * @public
   * <p>The identifier of the connection alias association. You use the connection identifier in
   *          the DNS TXT record when you're configuring your DNS routing policies. </p>
   */
  ConnectionIdentifier?: string;
}

/**
 * @public
 * <p>One or more parameter values are not valid.</p>
 */
export class InvalidParameterValuesException extends __BaseException {
  readonly name: "InvalidParameterValuesException" = "InvalidParameterValuesException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValuesException, __BaseException>) {
    super({
      name: "InvalidParameterValuesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValuesException.prototype);
  }
}

/**
 * @public
 * <p>The state of the resource is not valid for this operation.</p>
 */
export class InvalidResourceStateException extends __BaseException {
  readonly name: "InvalidResourceStateException" = "InvalidResourceStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceStateException, __BaseException>) {
    super({
      name: "InvalidResourceStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceStateException.prototype);
  }
}

/**
 * @public
 * <p>This operation is not supported.</p>
 */
export class OperationNotSupportedException extends __BaseException {
  readonly name: "OperationNotSupportedException" = "OperationNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The exception error reason.</p>
   */
  reason?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotSupportedException, __BaseException>) {
    super({
      name: "OperationNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotSupportedException.prototype);
    this.reason = opts.reason;
  }
}

/**
 * @public
 * <p>The resource is associated with a directory.</p>
 */
export class ResourceAssociatedException extends __BaseException {
  readonly name: "ResourceAssociatedException" = "ResourceAssociatedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAssociatedException, __BaseException>) {
    super({
      name: "ResourceAssociatedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAssociatedException.prototype);
  }
}

/**
 * @public
 * <p>The resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that could not be found.</p>
   */
  ResourceId?: string;

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
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * @public
 */
export interface AssociateIpGroupsRequest {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The identifiers of one or more IP access control groups.</p>
   */
  GroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateIpGroupsResult {}

/**
 * @public
 * <p>Your resource limits have been exceeded.</p>
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
  }
}

/**
 * @public
 */
export interface AssociateWorkspaceApplicationRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the application.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkSpaceAssociatedResourceType = {
  APPLICATION: "APPLICATION",
} as const;

/**
 * @public
 */
export type WorkSpaceAssociatedResourceType =
  (typeof WorkSpaceAssociatedResourceType)[keyof typeof WorkSpaceAssociatedResourceType];

/**
 * @public
 * <p>Describes the association between an application and a WorkSpace resource.</p>
 */
export interface WorkspaceResourceAssociation {
  /**
   * @public
   * <p>The identifier of the associated resource.</p>
   */
  AssociatedResourceId?: string;

  /**
   * @public
   * <p>The resource types of the associated resource.</p>
   */
  AssociatedResourceType?: WorkSpaceAssociatedResourceType;

  /**
   * @public
   * <p>The time the association is created.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The time the association status was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The status of the WorkSpace resource association.</p>
   */
  State?: AssociationState;

  /**
   * @public
   * <p>The reason the association deployment failed.</p>
   */
  StateReason?: AssociationStateReason;

  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;
}

/**
 * @public
 */
export interface AssociateWorkspaceApplicationResult {
  /**
   * @public
   * <p>Information about the association between the specified WorkSpace and the specified application.</p>
   */
  Association?: WorkspaceResourceAssociation;
}

/**
 * @public
 * <p>The compute type of the WorkSpace is not compatible with the application.</p>
 */
export class ComputeNotCompatibleException extends __BaseException {
  readonly name: "ComputeNotCompatibleException" = "ComputeNotCompatibleException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ComputeNotCompatibleException, __BaseException>) {
    super({
      name: "ComputeNotCompatibleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ComputeNotCompatibleException.prototype);
  }
}

/**
 * @public
 * <p>The specified application is not compatible with the resource.</p>
 */
export class IncompatibleApplicationsException extends __BaseException {
  readonly name: "IncompatibleApplicationsException" = "IncompatibleApplicationsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleApplicationsException, __BaseException>) {
    super({
      name: "IncompatibleApplicationsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleApplicationsException.prototype);
  }
}

/**
 * @public
 * <p>The operating system of the WorkSpace is not compatible with the application.</p>
 */
export class OperatingSystemNotCompatibleException extends __BaseException {
  readonly name: "OperatingSystemNotCompatibleException" = "OperatingSystemNotCompatibleException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperatingSystemNotCompatibleException, __BaseException>) {
    super({
      name: "OperatingSystemNotCompatibleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperatingSystemNotCompatibleException.prototype);
  }
}

/**
 * @public
 * <p>The specified resource already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * <p>The specified resource is currently in use.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that is in use.</p>
   */
  ResourceId?: string;

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
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * @public
 * @enum
 */
export const AssociationStatus = {
  ASSOCIATED_WITH_OWNER_ACCOUNT: "ASSOCIATED_WITH_OWNER_ACCOUNT",
  ASSOCIATED_WITH_SHARED_ACCOUNT: "ASSOCIATED_WITH_SHARED_ACCOUNT",
  NOT_ASSOCIATED: "NOT_ASSOCIATED",
  PENDING_ASSOCIATION: "PENDING_ASSOCIATION",
  PENDING_DISASSOCIATION: "PENDING_DISASSOCIATION",
} as const;

/**
 * @public
 */
export type AssociationStatus = (typeof AssociationStatus)[keyof typeof AssociationStatus];

/**
 * @public
 * <p>Describes a rule for an IP access control group.</p>
 */
export interface IpRuleItem {
  /**
   * @public
   * <p>The IP address range, in CIDR notation.</p>
   */
  ipRule?: string;

  /**
   * @public
   * <p>The description.</p>
   */
  ruleDesc?: string;
}

/**
 * @public
 */
export interface AuthorizeIpRulesRequest {
  /**
   * @public
   * <p>The identifier of the group.</p>
   */
  GroupId: string | undefined;

  /**
   * @public
   * <p>The rules to add to the group.</p>
   */
  UserRules: IpRuleItem[] | undefined;
}

/**
 * @public
 */
export interface AuthorizeIpRulesResult {}

/**
 * @public
 * @enum
 */
export const BundleAssociatedResourceType = {
  APPLICATION: "APPLICATION",
} as const;

/**
 * @public
 */
export type BundleAssociatedResourceType =
  (typeof BundleAssociatedResourceType)[keyof typeof BundleAssociatedResourceType];

/**
 * @public
 * @enum
 */
export const BundleType = {
  REGULAR: "REGULAR",
  STANDBY: "STANDBY",
} as const;

/**
 * @public
 */
export type BundleType = (typeof BundleType)[keyof typeof BundleType];

/**
 * @public
 * @enum
 */
export const Compute = {
  GRAPHICS: "GRAPHICS",
  GRAPHICSPRO: "GRAPHICSPRO",
  GRAPHICSPRO_G4DN: "GRAPHICSPRO_G4DN",
  GRAPHICS_G4DN: "GRAPHICS_G4DN",
  PERFORMANCE: "PERFORMANCE",
  POWER: "POWER",
  POWERPRO: "POWERPRO",
  STANDARD: "STANDARD",
  VALUE: "VALUE",
} as const;

/**
 * @public
 */
export type Compute = (typeof Compute)[keyof typeof Compute];

/**
 * @public
 * <p>Describes the compute type of the bundle.</p>
 */
export interface ComputeType {
  /**
   * @public
   * <p>The compute type.</p>
   */
  Name?: Compute;
}

/**
 * @public
 * <p>Describes the root volume for a WorkSpace bundle.</p>
 */
export interface RootStorage {
  /**
   * @public
   * <p>The size of the root volume.</p>
   */
  Capacity?: string;
}

/**
 * @public
 * @enum
 */
export const WorkspaceBundleState = {
  AVAILABLE: "AVAILABLE",
  ERROR: "ERROR",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type WorkspaceBundleState = (typeof WorkspaceBundleState)[keyof typeof WorkspaceBundleState];

/**
 * @public
 * <p>Describes the user volume for a WorkSpace bundle.</p>
 */
export interface UserStorage {
  /**
   * @public
   * <p>The size of the user volume.</p>
   */
  Capacity?: string;
}

/**
 * @public
 * <p>Describes a WorkSpace bundle.</p>
 */
export interface WorkspaceBundle {
  /**
   * @public
   * <p>The identifier of the bundle.</p>
   */
  BundleId?: string;

  /**
   * @public
   * <p>The name of the bundle.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The owner of the bundle. This is the account identifier of the owner, or
   *          <code>AMAZON</code> if the bundle is provided by Amazon Web Services.</p>
   */
  Owner?: string;

  /**
   * @public
   * <p>The description of the bundle.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The identifier of the image that was used to create the bundle.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The size of the root volume.</p>
   */
  RootStorage?: RootStorage;

  /**
   * @public
   * <p>The size of the user volume.</p>
   */
  UserStorage?: UserStorage;

  /**
   * @public
   * <p>The compute type of the bundle. For more information, see
   *          <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces Bundles</a>.</p>
   */
  ComputeType?: ComputeType;

  /**
   * @public
   * <p>The last time that the bundle was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The time when the bundle was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The state of the WorkSpace bundle.</p>
   */
  State?: WorkspaceBundleState;

  /**
   * @public
   * <p>The type of WorkSpace bundle.</p>
   */
  BundleType?: BundleType;
}

/**
 * @public
 * <p>Describes the association between an application and a bundle resource.</p>
 */
export interface BundleResourceAssociation {
  /**
   * @public
   * <p>The identifier of the associated resource.</p>
   */
  AssociatedResourceId?: string;

  /**
   * @public
   * <p>The resource type of the associated resources.</p>
   */
  AssociatedResourceType?: BundleAssociatedResourceType;

  /**
   * @public
   * <p>The identifier of the bundle.</p>
   */
  BundleId?: string;

  /**
   * @public
   * <p>The time the association is created.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The time the association status was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The status of the bundle resource association.</p>
   */
  State?: AssociationState;

  /**
   * @public
   * <p>The reason the association deployment failed.</p>
   */
  StateReason?: AssociationStateReason;
}

/**
 * @public
 * @enum
 */
export const CertificateBasedAuthStatusEnum = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type CertificateBasedAuthStatusEnum =
  (typeof CertificateBasedAuthStatusEnum)[keyof typeof CertificateBasedAuthStatusEnum];

/**
 * @public
 * <p>Describes the properties of the certificate-based authentication you want to use
 *          with your WorkSpaces.</p>
 */
export interface CertificateBasedAuthProperties {
  /**
   * @public
   * <p>The status of the certificate-based authentication properties.</p>
   */
  Status?: CertificateBasedAuthStatusEnum;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource.</p>
   */
  CertificateAuthorityArn?: string;
}

/**
 * @public
 * @enum
 */
export const ClientDeviceType = {
  DEVICE_TYPE_ANDROID: "DeviceTypeAndroid",
  DEVICE_TYPE_IOS: "DeviceTypeIos",
  DEVICE_TYPE_LINUX: "DeviceTypeLinux",
  DEVICE_TYPE_OSX: "DeviceTypeOsx",
  DEVICE_TYPE_WEB: "DeviceTypeWeb",
  DEVICE_TYPE_WINDOWS: "DeviceTypeWindows",
} as const;

/**
 * @public
 */
export type ClientDeviceType = (typeof ClientDeviceType)[keyof typeof ClientDeviceType];

/**
 * @public
 * @enum
 */
export const LogUploadEnum = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type LogUploadEnum = (typeof LogUploadEnum)[keyof typeof LogUploadEnum];

/**
 * @public
 * @enum
 */
export const ReconnectEnum = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ReconnectEnum = (typeof ReconnectEnum)[keyof typeof ReconnectEnum];

/**
 * @public
 * <p>Describes an Amazon WorkSpaces client.</p>
 */
export interface ClientProperties {
  /**
   * @public
   * <p>Specifies whether users can cache their credentials on the Amazon WorkSpaces client.
   *          When enabled, users can choose to reconnect to their WorkSpaces without re-entering their
   *          credentials. </p>
   */
  ReconnectEnabled?: ReconnectEnum;

  /**
   * @public
   * <p>Specifies whether users can upload diagnostic log files of Amazon WorkSpaces client directly to
   *          WorkSpaces to troubleshoot issues when using the WorkSpaces client.
   *          When enabled, the log files will be sent to WorkSpaces automatically and will be applied to all
   *          users in the specified directory.</p>
   */
  LogUploadEnabled?: LogUploadEnum;
}

/**
 * @public
 * <p>Information about the Amazon WorkSpaces client.</p>
 */
export interface ClientPropertiesResult {
  /**
   * @public
   * <p>The resource identifier, in the form of a directory ID.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>Information about the Amazon WorkSpaces client.</p>
   */
  ClientProperties?: ClientProperties;
}

/**
 * @public
 * <p>Describes an Amazon Connect client add-in.</p>
 */
export interface ConnectClientAddIn {
  /**
   * @public
   * <p>The client add-in identifier.</p>
   */
  AddInId?: string;

  /**
   * @public
   * <p>The directory identifier for which the client add-in is configured.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The name of the client add in.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The endpoint URL of the client add-in.</p>
   */
  URL?: string;
}

/**
 * @public
 * <p>Describes a connection alias association that is used for cross-Region redirection. For
 *          more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 */
export interface ConnectionAliasAssociation {
  /**
   * @public
   * <p>The association status of the connection alias.</p>
   */
  AssociationStatus?: AssociationStatus;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services account that associated the connection alias
   *          with a directory.</p>
   */
  AssociatedAccountId?: string;

  /**
   * @public
   * <p>The identifier of the directory associated with a connection alias.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The identifier of the connection alias association. You use the connection identifier in
   *          the DNS TXT record when you're configuring your DNS routing policies.</p>
   */
  ConnectionIdentifier?: string;
}

/**
 * @public
 * @enum
 */
export const ConnectionAliasState = {
  CREATED: "CREATED",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type ConnectionAliasState = (typeof ConnectionAliasState)[keyof typeof ConnectionAliasState];

/**
 * @public
 * <p>Describes a connection alias. Connection aliases are used for cross-Region redirection.
 *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 */
export interface ConnectionAlias {
  /**
   * @public
   * <p>The connection string specified for the connection alias. The connection string must be
   *          in the form of a fully qualified domain name (FQDN), such as
   *          <code>www.example.com</code>.</p>
   */
  ConnectionString?: string;

  /**
   * @public
   * <p>The identifier of the connection alias.</p>
   */
  AliasId?: string;

  /**
   * @public
   * <p>The current state of the connection alias.</p>
   */
  State?: ConnectionAliasState;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services account that owns the connection alias.</p>
   */
  OwnerAccountId?: string;

  /**
   * @public
   * <p>The association status of the connection alias.</p>
   */
  Associations?: ConnectionAliasAssociation[];
}

/**
 * @public
 * <p>Describes the permissions for a connection alias. Connection aliases are used for
 *          cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 */
export interface ConnectionAliasPermission {
  /**
   * @public
   * <p>The identifier of the Amazon Web Services account that the connection alias is shared
   *          with.</p>
   */
  SharedAccountId: string | undefined;

  /**
   * @public
   * <p>Indicates whether the specified Amazon Web Services account is allowed to associate the
   *          connection alias with a directory.</p>
   */
  AllowAssociation: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectionState = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type ConnectionState = (typeof ConnectionState)[keyof typeof ConnectionState];

/**
 * @public
 * <p>Describes a tag.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value of the tag.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface CopyWorkspaceImageRequest {
  /**
   * @public
   * <p>The name of the image.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the image.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The identifier of the source image.</p>
   */
  SourceImageId: string | undefined;

  /**
   * @public
   * <p>The identifier of the source Region.</p>
   */
  SourceRegion: string | undefined;

  /**
   * @public
   * <p>The tags for the image.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CopyWorkspaceImageResult {
  /**
   * @public
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;
}

/**
 * @public
 * <p>The specified resource is not available.</p>
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier of the resource that is not available.</p>
   */
  ResourceId?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * @public
 */
export interface CreateConnectClientAddInRequest {
  /**
   * @public
   * <p>The directory identifier for which to configure the client add-in.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The name of the client add-in.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The endpoint URL of the Amazon Connect client add-in.</p>
   */
  URL: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectClientAddInResult {
  /**
   * @public
   * <p>The client add-in identifier.</p>
   */
  AddInId?: string;
}

/**
 * @public
 * <p>The resource could not be created.</p>
 */
export class ResourceCreationFailedException extends __BaseException {
  readonly name: "ResourceCreationFailedException" = "ResourceCreationFailedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceCreationFailedException, __BaseException>) {
    super({
      name: "ResourceCreationFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceCreationFailedException.prototype);
  }
}

/**
 * @public
 */
export interface CreateConnectionAliasRequest {
  /**
   * @public
   * <p>A connection string in the form of a fully qualified domain name (FQDN), such as
   *             <code>www.example.com</code>.</p>
   *          <important>
   *             <p>After you create a connection string, it is always associated to your Amazon Web Services account. You cannot recreate the same connection string with a different
   *             account, even if you delete all instances of it from the original account. The
   *             connection string is globally reserved for your account.</p>
   *          </important>
   */
  ConnectionString: string | undefined;

  /**
   * @public
   * <p>The tags to associate with the connection alias.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateConnectionAliasResult {
  /**
   * @public
   * <p>The identifier of the connection alias.</p>
   */
  AliasId?: string;
}

/**
 * @public
 */
export interface CreateIpGroupRequest {
  /**
   * @public
   * <p>The name of the group.</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>The description of the group.</p>
   */
  GroupDesc?: string;

  /**
   * @public
   * <p>The rules to add to the group.</p>
   */
  UserRules?: IpRuleItem[];

  /**
   * @public
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateIpGroupResult {
  /**
   * @public
   * <p>The identifier of the group.</p>
   */
  GroupId?: string;
}

/**
 * @public
 * @enum
 */
export const DataReplication = {
  NO_REPLICATION: "NO_REPLICATION",
  PRIMARY_AS_SOURCE: "PRIMARY_AS_SOURCE",
} as const;

/**
 * @public
 */
export type DataReplication = (typeof DataReplication)[keyof typeof DataReplication];

/**
 * @public
 * <p>Describes a standby WorkSpace.</p>
 */
export interface StandbyWorkspace {
  /**
   * @public
   * <p>The identifier of the standby WorkSpace.</p>
   */
  PrimaryWorkspaceId: string | undefined;

  /**
   * @public
   * <p>The volume encryption key of the standby WorkSpace.</p>
   */
  VolumeEncryptionKey?: string;

  /**
   * @public
   * <p>The identifier of the directory for the standby WorkSpace.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The tags associated with the standby WorkSpace.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Indicates whether data replication is enabled, and if enabled, the type of data replication.</p>
   */
  DataReplication?: DataReplication;
}

/**
 * @public
 */
export interface CreateStandbyWorkspacesRequest {
  /**
   * @public
   * <p>The Region of the primary WorkSpace.</p>
   */
  PrimaryRegion: string | undefined;

  /**
   * @public
   * <p>Information about the standby WorkSpace to be created.</p>
   */
  StandbyWorkspaces: StandbyWorkspace[] | undefined;
}

/**
 * @public
 * <p>Describes the standby WorkSpace that could not be created.</p>
 */
export interface FailedCreateStandbyWorkspacesRequest {
  /**
   * @public
   * <p>Information about the standby WorkSpace that could not be created.</p>
   */
  StandbyWorkspaceRequest?: StandbyWorkspace;

  /**
   * @public
   * <p>The error code that is returned if the standby WorkSpace could not be created.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The text of the error message that is returned if the standby WorkSpace could not be created.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * @enum
 */
export const WorkspaceState = {
  ADMIN_MAINTENANCE: "ADMIN_MAINTENANCE",
  AVAILABLE: "AVAILABLE",
  ERROR: "ERROR",
  IMPAIRED: "IMPAIRED",
  MAINTENANCE: "MAINTENANCE",
  PENDING: "PENDING",
  REBOOTING: "REBOOTING",
  REBUILDING: "REBUILDING",
  RESTORING: "RESTORING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  SUSPENDED: "SUSPENDED",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
  UNHEALTHY: "UNHEALTHY",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type WorkspaceState = (typeof WorkspaceState)[keyof typeof WorkspaceState];

/**
 * @public
 * <p>Information about the standby WorkSpace.</p>
 */
export interface PendingCreateStandbyWorkspacesRequest {
  /**
   * @public
   * <p>Describes the standby WorkSpace that was created.</p>
   *          <p>Because this operation is asynchronous, the identifier returned is not immediately
   *          available for use with other operations. For example, if you call
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html">
   *             DescribeWorkspaces</a>
   *          before the WorkSpace is created, the information returned can be incomplete. </p>
   */
  UserName?: string;

  /**
   * @public
   * <p>The identifier of the directory for the standby WorkSpace.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>The operational state of the standby WorkSpace.</p>
   */
  State?: WorkspaceState;

  /**
   * @public
   * <p>The identifier of the standby WorkSpace.</p>
   */
  WorkspaceId?: string;
}

/**
 * @public
 */
export interface CreateStandbyWorkspacesResult {
  /**
   * @public
   * <p>Information about the standby WorkSpace that could not be created. </p>
   */
  FailedStandbyRequests?: FailedCreateStandbyWorkspacesRequest[];

  /**
   * @public
   * <p>Information about the standby WorkSpace that was created.</p>
   */
  PendingStandbyRequests?: PendingCreateStandbyWorkspacesRequest[];
}

/**
 * @public
 */
export interface CreateTagsRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, IP access control groups, and connection
   *          aliases.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTagsResult {}

/**
 * @public
 */
export interface CreateUpdatedWorkspaceImageRequest {
  /**
   * @public
   * <p>The name of the new updated WorkSpace image.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of whether updates for the WorkSpace image are available.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>The identifier of the source WorkSpace image.</p>
   */
  SourceImageId: string | undefined;

  /**
   * @public
   * <p>The tags that you want to add to the new updated WorkSpace image.</p>
   *          <note>
   *             <p>To add tags at the same time when you're creating the updated image, you must create
   *             an IAM policy that grants your IAM user permissions to use
   *                <code>workspaces:CreateTags</code>. </p>
   *          </note>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateUpdatedWorkspaceImageResult {
  /**
   * @public
   * <p>The identifier of the new updated WorkSpace image.</p>
   */
  ImageId?: string;
}

/**
 * @public
 */
export interface CreateWorkspaceBundleRequest {
  /**
   * @public
   * <p>The name of the bundle.</p>
   */
  BundleName: string | undefined;

  /**
   * @public
   * <p>The description of the bundle.</p>
   */
  BundleDescription: string | undefined;

  /**
   * @public
   * <p>The identifier of the image that is used to create the bundle.</p>
   */
  ImageId: string | undefined;

  /**
   * @public
   * <p>Describes the compute type of the bundle.</p>
   */
  ComputeType: ComputeType | undefined;

  /**
   * @public
   * <p>Describes the user volume for a WorkSpace bundle.</p>
   */
  UserStorage: UserStorage | undefined;

  /**
   * @public
   * <p>Describes the root volume for a WorkSpace bundle.</p>
   */
  RootStorage?: RootStorage;

  /**
   * @public
   * <p>The tags associated with the bundle.</p>
   *          <note>
   *             <p>To add tags at the same time when you're creating the bundle, you must create an IAM policy that
   *             grants your IAM user permissions to use <code>workspaces:CreateTags</code>. </p>
   *          </note>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateWorkspaceBundleResult {
  /**
   * @public
   * <p>Describes a WorkSpace bundle.</p>
   */
  WorkspaceBundle?: WorkspaceBundle;
}

/**
 * @public
 */
export interface CreateWorkspaceImageRequest {
  /**
   * @public
   * <p>The name of the new WorkSpace image.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the new WorkSpace image.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>The identifier of the source WorkSpace</p>
   */
  WorkspaceId: string | undefined;

  /**
   * @public
   * <p>The tags that you want to add to the new WorkSpace image.
   *          To add tags when you're creating the image, you must create an IAM policy that grants
   *          your IAM user permission to use <code>workspaces:CreateTags</code>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const OperatingSystemType = {
  LINUX: "LINUX",
  WINDOWS: "WINDOWS",
} as const;

/**
 * @public
 */
export type OperatingSystemType = (typeof OperatingSystemType)[keyof typeof OperatingSystemType];

/**
 * @public
 * <p>The operating system that the image is running.</p>
 */
export interface OperatingSystem {
  /**
   * @public
   * <p>The operating system.</p>
   */
  Type?: OperatingSystemType;
}

/**
 * @public
 * @enum
 */
export const WorkspaceImageRequiredTenancy = {
  DEDICATED: "DEDICATED",
  DEFAULT: "DEFAULT",
} as const;

/**
 * @public
 */
export type WorkspaceImageRequiredTenancy =
  (typeof WorkspaceImageRequiredTenancy)[keyof typeof WorkspaceImageRequiredTenancy];

/**
 * @public
 * @enum
 */
export const WorkspaceImageState = {
  AVAILABLE: "AVAILABLE",
  ERROR: "ERROR",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type WorkspaceImageState = (typeof WorkspaceImageState)[keyof typeof WorkspaceImageState];

/**
 * @public
 */
export interface CreateWorkspaceImageResult {
  /**
   * @public
   * <p>The identifier of the new WorkSpace image.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The name of the image.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The operating system that the image is running.</p>
   */
  OperatingSystem?: OperatingSystem;

  /**
   * @public
   * <p>The availability status of the image.</p>
   */
  State?: WorkspaceImageState;

  /**
   * @public
   * <p>Specifies whether the image is running on dedicated hardware.
   *          When Bring Your Own License (BYOL) is enabled, this value is set
   *          to DEDICATED. For more information, see
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.htm">
   *             Bring Your Own Windows Desktop Images.</a>.</p>
   */
  RequiredTenancy?: WorkspaceImageRequiredTenancy;

  /**
   * @public
   * <p>The date when the image was created.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services account that owns the image.</p>
   */
  OwnerAccountId?: string;
}

/**
 * @public
 * @enum
 */
export const OperatingSystemName = {
  AMAZON_LINUX_2: "AMAZON_LINUX_2",
  UBUNTU_18_04: "UBUNTU_18_04",
  UBUNTU_20_04: "UBUNTU_20_04",
  UBUNTU_22_04: "UBUNTU_22_04",
  UNKNOWN: "UNKNOWN",
  WINDOWS_10: "WINDOWS_10",
  WINDOWS_11: "WINDOWS_11",
  WINDOWS_7: "WINDOWS_7",
  WINDOWS_SERVER_2016: "WINDOWS_SERVER_2016",
  WINDOWS_SERVER_2019: "WINDOWS_SERVER_2019",
  WINDOWS_SERVER_2022: "WINDOWS_SERVER_2022",
} as const;

/**
 * @public
 */
export type OperatingSystemName = (typeof OperatingSystemName)[keyof typeof OperatingSystemName];

/**
 * @public
 * @enum
 */
export const Protocol = {
  PCOIP: "PCOIP",
  WSP: "WSP",
} as const;

/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * @enum
 */
export const RunningMode = {
  ALWAYS_ON: "ALWAYS_ON",
  AUTO_STOP: "AUTO_STOP",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type RunningMode = (typeof RunningMode)[keyof typeof RunningMode];

/**
 * @public
 * <p>Describes a WorkSpace.</p>
 */
export interface WorkspaceProperties {
  /**
   * @public
   * <p>The running mode. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html">Manage the WorkSpace Running
   *          Mode</a>.</p>
   *          <note>
   *             <p>The <code>MANUAL</code> value is only supported by Amazon WorkSpaces Core. Contact
   *             your account team to be allow-listed to use this value. For more information, see
   *             <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p>
   *          </note>
   */
  RunningMode?: RunningMode;

  /**
   * @public
   * <p>The time after a user logs off when WorkSpaces are automatically stopped. Configured in
   *          60-minute intervals.</p>
   */
  RunningModeAutoStopTimeoutInMinutes?: number;

  /**
   * @public
   * <p>The size of the root volume. For important information about how to modify the size of
   *          the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a
   *          WorkSpace</a>.</p>
   */
  RootVolumeSizeGib?: number;

  /**
   * @public
   * <p>The size of the user storage. For important information about how to modify the size of
   *          the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a
   *          WorkSpace</a>.</p>
   */
  UserVolumeSizeGib?: number;

  /**
   * @public
   * <p>The compute type. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces
   *          Bundles</a>.</p>
   */
  ComputeTypeName?: Compute;

  /**
   * @public
   * <p>The protocol. For more information, see
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-protocols.html">
   *             Protocols for Amazon WorkSpaces</a>.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>Only available for WorkSpaces created with PCoIP bundles.</p>
   *                </li>
   *                <li>
   *                   <p>The <code>Protocols</code> property is case sensitive. Ensure you use <code>PCOIP</code> or <code>WSP</code>.</p>
   *                </li>
   *                <li>
   *                   <p>Unavailable for Windows 7 WorkSpaces and WorkSpaces using GPU-based bundles
   *                (Graphics, GraphicsPro, Graphics.g4dn, and GraphicsPro.g4dn).</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  Protocols?: Protocol[];

  /**
   * @public
   * <p>The name of the operating system.</p>
   */
  OperatingSystemName?: OperatingSystemName;
}

/**
 * @public
 * <p>Describes the information used to create a WorkSpace.</p>
 */
export interface WorkspaceRequest {
  /**
   * @public
   * <p>The identifier of the Directory Service directory for the WorkSpace. You can use <a>DescribeWorkspaceDirectories</a> to list the available directories.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The user name of the user for the WorkSpace. This user name must exist in the Directory Service directory for the WorkSpace.</p>
   */
  UserName: string | undefined;

  /**
   * @public
   * <p>The identifier of the bundle for the WorkSpace. You can use <a>DescribeWorkspaceBundles</a> to list the available bundles.</p>
   */
  BundleId: string | undefined;

  /**
   * @public
   * <p>The ARN of the symmetric KMS key used to encrypt data stored on your WorkSpace.
   *          Amazon WorkSpaces does not support asymmetric KMS keys.</p>
   */
  VolumeEncryptionKey?: string;

  /**
   * @public
   * <p>Indicates whether the data stored on the user volume is encrypted.</p>
   */
  UserVolumeEncryptionEnabled?: boolean;

  /**
   * @public
   * <p>Indicates whether the data stored on the root volume is encrypted.</p>
   */
  RootVolumeEncryptionEnabled?: boolean;

  /**
   * @public
   * <p>The WorkSpace properties.</p>
   */
  WorkspaceProperties?: WorkspaceProperties;

  /**
   * @public
   * <p>The tags for the WorkSpace.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateWorkspacesRequest {
  /**
   * @public
   * <p>The WorkSpaces to create. You can specify up to 25 WorkSpaces.</p>
   */
  Workspaces: WorkspaceRequest[] | undefined;
}

/**
 * @public
 * <p>Describes a WorkSpace that cannot be created.</p>
 */
export interface FailedCreateWorkspaceRequest {
  /**
   * @public
   * <p>Information about the WorkSpace.</p>
   */
  WorkspaceRequest?: WorkspaceRequest;

  /**
   * @public
   * <p>The error code that is returned if the WorkSpace cannot be created.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          created.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * <p>Describes the data replication settings.</p>
 */
export interface DataReplicationSettings {
  /**
   * @public
   * <p>Indicates whether data replication is enabled, and if enabled, the type of data replication.</p>
   */
  DataReplication?: DataReplication;

  /**
   * @public
   * <p>The date and time at which the last successful snapshot was taken of the
   *          primary WorkSpace used for replicating data.</p>
   */
  RecoverySnapshotTime?: Date;
}

/**
 * @public
 * @enum
 */
export const ModificationResourceEnum = {
  COMPUTE_TYPE: "COMPUTE_TYPE",
  ROOT_VOLUME: "ROOT_VOLUME",
  USER_VOLUME: "USER_VOLUME",
} as const;

/**
 * @public
 */
export type ModificationResourceEnum = (typeof ModificationResourceEnum)[keyof typeof ModificationResourceEnum];

/**
 * @public
 * @enum
 */
export const ModificationStateEnum = {
  UPDATE_INITIATED: "UPDATE_INITIATED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ModificationStateEnum = (typeof ModificationStateEnum)[keyof typeof ModificationStateEnum];

/**
 * @public
 * <p>Describes a WorkSpace modification.</p>
 */
export interface ModificationState {
  /**
   * @public
   * <p>The resource.</p>
   */
  Resource?: ModificationResourceEnum;

  /**
   * @public
   * <p>The modification state.</p>
   */
  State?: ModificationStateEnum;
}

/**
 * @public
 * @enum
 */
export const StandbyWorkspaceRelationshipType = {
  PRIMARY: "PRIMARY",
  STANDBY: "STANDBY",
} as const;

/**
 * @public
 */
export type StandbyWorkspaceRelationshipType =
  (typeof StandbyWorkspaceRelationshipType)[keyof typeof StandbyWorkspaceRelationshipType];

/**
 * @public
 * <p>Describes the related WorkSpace. The related WorkSpace could be a standby WorkSpace or
 *          primary WorkSpace related to the specified WorkSpace.</p>
 */
export interface RelatedWorkspaceProperties {
  /**
   * @public
   * <p>The identifier of the related WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * @public
   * <p>The Region of the related WorkSpace.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>Indicates the state of the WorkSpace.</p>
   */
  State?: WorkspaceState;

  /**
   * @public
   * <p>Indicates the type of WorkSpace.</p>
   */
  Type?: StandbyWorkspaceRelationshipType;
}

/**
 * @public
 * <p>Describes the properties of the related standby WorkSpaces. </p>
 */
export interface StandbyWorkspacesProperties {
  /**
   * @public
   * <p>The identifier of the standby WorkSpace</p>
   */
  StandbyWorkspaceId?: string;

  /**
   * @public
   * <p>Indicates whether data replication is enabled, and if enabled, the type of data replication.</p>
   */
  DataReplication?: DataReplication;

  /**
   * @public
   * <p>The date and time at which the last successful snapshot was taken of the
   *          primary WorkSpace used for replicating data.</p>
   */
  RecoverySnapshotTime?: Date;
}

/**
 * @public
 * <p>Describes a WorkSpace.</p>
 */
export interface Workspace {
  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * @public
   * <p>The identifier of the Directory Service directory for the WorkSpace.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>The user for the WorkSpace.</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>The IP address of the WorkSpace.</p>
   */
  IpAddress?: string;

  /**
   * @public
   * <p>The operational state of the WorkSpace.</p>
   *          <note>
   *             <p>After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned only
   *             briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely
   *             returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using
   *                <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html">
   *                DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace
   *             has been successfully terminated.</p>
   *          </note>
   */
  State?: WorkspaceState;

  /**
   * @public
   * <p>The identifier of the bundle used to create the WorkSpace.</p>
   */
  BundleId?: string;

  /**
   * @public
   * <p>The identifier of the subnet for the WorkSpace.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          created.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The error code that is returned if the WorkSpace cannot be created.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The name of the WorkSpace, as seen by the operating system. The format of this name
   *          varies. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/launch-workspaces-tutorials.html"> Launch a
   *             WorkSpace</a>. </p>
   */
  ComputerName?: string;

  /**
   * @public
   * <p>The ARN of the symmetric KMS key used to encrypt data stored on your WorkSpace.
   *          Amazon WorkSpaces does not support asymmetric KMS keys.</p>
   */
  VolumeEncryptionKey?: string;

  /**
   * @public
   * <p>Indicates whether the data stored on the user volume is encrypted.</p>
   */
  UserVolumeEncryptionEnabled?: boolean;

  /**
   * @public
   * <p>Indicates whether the data stored on the root volume is encrypted.</p>
   */
  RootVolumeEncryptionEnabled?: boolean;

  /**
   * @public
   * <p>The properties of the WorkSpace.</p>
   */
  WorkspaceProperties?: WorkspaceProperties;

  /**
   * @public
   * <p>The modification states of the WorkSpace.</p>
   */
  ModificationStates?: ModificationState[];

  /**
   * @public
   * <p>The standby WorkSpace or primary WorkSpace related to the specified WorkSpace.</p>
   */
  RelatedWorkspaces?: RelatedWorkspaceProperties[];

  /**
   * @public
   * <p>Indicates the settings of the data replication.</p>
   */
  DataReplicationSettings?: DataReplicationSettings;

  /**
   * @public
   * <p>The properties of the standby WorkSpace</p>
   */
  StandbyWorkspacesProperties?: StandbyWorkspacesProperties[];
}

/**
 * @public
 */
export interface CreateWorkspacesResult {
  /**
   * @public
   * <p>Information about the WorkSpaces that could not be created.</p>
   */
  FailedRequests?: FailedCreateWorkspaceRequest[];

  /**
   * @public
   * <p>Information about the WorkSpaces that were created.</p>
   *          <p>Because this operation is asynchronous, the identifier returned is not immediately
   *          available for use with other operations. For example, if you call <a>DescribeWorkspaces</a> before the WorkSpace is created, the information returned
   *          can be incomplete.</p>
   */
  PendingRequests?: Workspace[];
}

/**
 * @public
 * @enum
 */
export const DedicatedTenancySupportEnum = {
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DedicatedTenancySupportEnum =
  (typeof DedicatedTenancySupportEnum)[keyof typeof DedicatedTenancySupportEnum];

/**
 * @public
 * <p>Returns default client branding attributes that were imported. These attributes display
 *          on the client login screen.</p>
 *          <important>
 *             <p>Client branding attributes are public facing. Ensure that you don't include sensitive
 *             information.</p>
 *          </important>
 */
export interface DefaultClientBrandingAttributes {
  /**
   * @public
   * <p>The logo. The only image format accepted is a binary data object that is converted from a <code>.png</code> file.</p>
   */
  LogoUrl?: string;

  /**
   * @public
   * <p>The support email. The company's customer support email address.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default email is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportEmail?: string;

  /**
   * @public
   * <p>The support link. The link for the company's customer support page for their
   *          WorkSpace.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive.You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default support link is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportLink?: string;

  /**
   * @public
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   */
  ForgotPasswordLink?: string;

  /**
   * @public
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *          <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em,
   *             i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.</p>
   */
  LoginMessage?: Record<string, string>;
}

/**
 * @public
 * <p>The default client branding attributes to be imported. These attributes display on the
 *          client login screen.</p>
 *          <important>
 *             <p>Client branding attributes are public facing. Ensure that you do not include
 *             sensitive information.</p>
 *          </important>
 */
export interface DefaultImportClientBrandingAttributes {
  /**
   * @public
   * <p>The logo. The only image format accepted is a binary data object that is converted from a <code>.png</code> file.</p>
   */
  Logo?: Uint8Array;

  /**
   * @public
   * <p>The support email. The company's customer support email address.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default email is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportEmail?: string;

  /**
   * @public
   * <p>The support link. The link for the company's customer support page for their
   *          WorkSpace.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default support link is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportLink?: string;

  /**
   * @public
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   */
  ForgotPasswordLink?: string;

  /**
   * @public
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *          <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em,
   *             i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.</p>
   */
  LoginMessage?: Record<string, string>;
}

/**
 * @public
 * <p>Describes the default values that are used to create WorkSpaces. For more information,
 *          see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory
 *             Details for Your WorkSpaces</a>.</p>
 */
export interface DefaultWorkspaceCreationProperties {
  /**
   * @public
   * <p>Specifies whether the directory is enabled for Amazon WorkDocs.</p>
   */
  EnableWorkDocs?: boolean;

  /**
   * @public
   * <p>Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in
   *          this directory by default. If enabled, the Elastic public IP address allows outbound
   *          internet access from your WorkSpaces when you’re using an internet gateway in the Amazon
   *          VPC in which your WorkSpaces are located. If you're using a Network Address Translation
   *          (NAT) gateway for outbound internet access from your VPC, or if your WorkSpaces are in
   *          public subnets and you manually assign them Elastic IP addresses, you should disable this
   *          setting. This setting applies to new WorkSpaces that you launch or to existing WorkSpaces
   *          that you rebuild. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html"> Configure a VPC for
   *             Amazon WorkSpaces</a>.</p>
   */
  EnableInternetAccess?: boolean;

  /**
   * @public
   * <p>The organizational unit (OU) in the directory for the WorkSpace machine accounts.</p>
   */
  DefaultOu?: string;

  /**
   * @public
   * <p>The identifier of the default security group to apply to WorkSpaces when they are
   *          created. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-security-groups.html"> Security
   *             Groups for Your WorkSpaces</a>.</p>
   */
  CustomSecurityGroupId?: string;

  /**
   * @public
   * <p>Specifies whether WorkSpace users are local administrators on their WorkSpaces.</p>
   */
  UserEnabledAsLocalAdministrator?: boolean;

  /**
   * @public
   * <p>Specifies whether maintenance mode is enabled for WorkSpaces. For more information, see
   *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace
   *             Maintenance</a>.</p>
   */
  EnableMaintenanceMode?: boolean;
}

/**
 * @public
 * @enum
 */
export const DeletableCertificateBasedAuthProperty = {
  CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN:
    "CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN",
} as const;

/**
 * @public
 */
export type DeletableCertificateBasedAuthProperty =
  (typeof DeletableCertificateBasedAuthProperty)[keyof typeof DeletableCertificateBasedAuthProperty];

/**
 * @public
 * @enum
 */
export const DeletableSamlProperty = {
  SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME: "SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME",
  SAML_PROPERTIES_USER_ACCESS_URL: "SAML_PROPERTIES_USER_ACCESS_URL",
} as const;

/**
 * @public
 */
export type DeletableSamlProperty = (typeof DeletableSamlProperty)[keyof typeof DeletableSamlProperty];

/**
 * @public
 */
export interface DeleteClientBrandingRequest {
  /**
   * @public
   * <p>The directory identifier of the WorkSpace for which you want to delete client
   *          branding.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The device type for which you want to delete client branding.</p>
   */
  Platforms: ClientDeviceType[] | undefined;
}

/**
 * @public
 */
export interface DeleteClientBrandingResult {}

/**
 * @public
 */
export interface DeleteConnectClientAddInRequest {
  /**
   * @public
   * <p>The identifier of the client add-in to delete.</p>
   */
  AddInId: string | undefined;

  /**
   * @public
   * <p>The directory identifier for which the client add-in is configured.</p>
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectClientAddInResult {}

/**
 * @public
 */
export interface DeleteConnectionAliasRequest {
  /**
   * @public
   * <p>The identifier of the connection alias to delete.</p>
   */
  AliasId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionAliasResult {}

/**
 * @public
 */
export interface DeleteIpGroupRequest {
  /**
   * @public
   * <p>The identifier of the IP access control group.</p>
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpGroupResult {}

/**
 * @public
 */
export interface DeleteTagsRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, IP access control groups, and connection
   *          aliases.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteTagsResult {}

/**
 * @public
 */
export interface DeleteWorkspaceBundleRequest {
  /**
   * @public
   * <p>The identifier of the bundle.</p>
   */
  BundleId?: string;
}

/**
 * @public
 */
export interface DeleteWorkspaceBundleResult {}

/**
 * @public
 */
export interface DeleteWorkspaceImageRequest {
  /**
   * @public
   * <p>The identifier of the image.</p>
   */
  ImageId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceImageResult {}

/**
 * @public
 */
export interface DeployWorkspaceApplicationsRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;

  /**
   * @public
   * <p>Indicates whether the force flag is applied for the specified WorkSpace. When the force flag is enabled,
   *          it allows previously failed deployments to be retried.</p>
   */
  Force?: boolean;
}

/**
 * @public
 * <p>Describes the WorkSpace application deployment.</p>
 */
export interface WorkSpaceApplicationDeployment {
  /**
   * @public
   * <p>The associations between the applications and the associated resources.</p>
   */
  Associations?: WorkspaceResourceAssociation[];
}

/**
 * @public
 */
export interface DeployWorkspaceApplicationsResult {
  /**
   * @public
   * <p>The list of deployed associations and information about them.</p>
   */
  Deployment?: WorkSpaceApplicationDeployment;
}

/**
 * @public
 */
export interface DeregisterWorkspaceDirectoryRequest {
  /**
   * @public
   * <p>The identifier of the directory. If any WorkSpaces are registered to this directory, you
   *          must remove them before you deregister the directory, or you will receive an
   *          OperationNotSupportedException error.</p>
   */
  DirectoryId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterWorkspaceDirectoryResult {}

/**
 * @public
 */
export interface DescribeAccountRequest {}

/**
 * @public
 */
export interface DescribeAccountResult {
  /**
   * @public
   * <p>The status of BYOL (whether BYOL is enabled or disabled).</p>
   */
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum;

  /**
   * @public
   * <p>The IP address range, specified as an IPv4 CIDR block, used for the management network
   *          interface.</p>
   *          <p>The management network interface is connected to a secure Amazon WorkSpaces management
   *          network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
   *          clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
   */
  DedicatedTenancyManagementCidrRange?: string;
}

/**
 * @public
 */
export interface DescribeAccountModificationsRequest {
  /**
   * @public
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeAccountModificationsResult {
  /**
   * @public
   * <p>The list of modifications to the configuration of BYOL.</p>
   */
  AccountModifications?: AccountModification[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeApplicationAssociationsRequest {
  /**
   * @public
   * <p>The maximum number of associations to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The identifier of the specified application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The resource type of the associated resources.</p>
   */
  AssociatedResourceTypes: ApplicationAssociatedResourceType[] | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationAssociationsResult {
  /**
   * @public
   * <p>List of associations and information about them.</p>
   */
  Associations?: ApplicationResourceAssociation[];

  /**
   * @public
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const WorkSpaceApplicationLicenseType = {
  LICENSED: "LICENSED",
  UNLICENSED: "UNLICENSED",
} as const;

/**
 * @public
 */
export type WorkSpaceApplicationLicenseType =
  (typeof WorkSpaceApplicationLicenseType)[keyof typeof WorkSpaceApplicationLicenseType];

/**
 * @public
 */
export interface DescribeApplicationsRequest {
  /**
   * @public
   * <p>The identifiers of one or more applications.</p>
   */
  ApplicationIds?: string[];

  /**
   * @public
   * <p>The compute types supported by the applications.</p>
   */
  ComputeTypeNames?: Compute[];

  /**
   * @public
   * <p>The license availability for the applications.</p>
   */
  LicenseType?: WorkSpaceApplicationLicenseType;

  /**
   * @public
   * <p>The operating systems supported by the applications.</p>
   */
  OperatingSystemNames?: OperatingSystemName[];

  /**
   * @public
   * <p>The owner of the applications.</p>
   */
  Owner?: string;

  /**
   * @public
   * <p>The maximum number of applications to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const WorkSpaceApplicationState = {
  AVAILABLE: "AVAILABLE",
  ERROR: "ERROR",
  PENDING: "PENDING",
  UNINSTALL_ONLY: "UNINSTALL_ONLY",
} as const;

/**
 * @public
 */
export type WorkSpaceApplicationState = (typeof WorkSpaceApplicationState)[keyof typeof WorkSpaceApplicationState];

/**
 * @public
 * <p>Describes the WorkSpace application.</p>
 */
export interface WorkSpaceApplication {
  /**
   * @public
   * <p>The identifier of the application.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The time the application is created.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The description of the WorkSpace application.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The license availability for the applications.</p>
   */
  LicenseType?: WorkSpaceApplicationLicenseType;

  /**
   * @public
   * <p>The name of the WorkSpace application.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The owner of the WorkSpace application.</p>
   */
  Owner?: string;

  /**
   * @public
   * <p>The status of WorkSpace application.</p>
   */
  State?: WorkSpaceApplicationState;

  /**
   * @public
   * <p>The supported compute types of the WorkSpace application.</p>
   */
  SupportedComputeTypeNames?: Compute[];

  /**
   * @public
   * <p>The supported operating systems of the WorkSpace application.</p>
   */
  SupportedOperatingSystemNames?: OperatingSystemName[];
}

/**
 * @public
 */
export interface DescribeApplicationsResult {
  /**
   * @public
   * <p>List of information about the specified applications.</p>
   */
  Applications?: WorkSpaceApplication[];

  /**
   * @public
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeBundleAssociationsRequest {
  /**
   * @public
   * <p>The identifier of the bundle.</p>
   */
  BundleId: string | undefined;

  /**
   * @public
   * <p>The resource types of the associated resource.</p>
   */
  AssociatedResourceTypes: BundleAssociatedResourceType[] | undefined;
}

/**
 * @public
 */
export interface DescribeBundleAssociationsResult {
  /**
   * @public
   * <p>List of information about the specified associations.</p>
   */
  Associations?: BundleResourceAssociation[];
}

/**
 * @public
 */
export interface DescribeClientBrandingRequest {
  /**
   * @public
   * <p>The directory identifier of the WorkSpace for which you want to view client branding
   *          information.</p>
   */
  ResourceId: string | undefined;
}

/**
 * @public
 * <p>The client branding attributes for iOS device types. These attributes are displayed on
 *          the iOS client login screen only.</p>
 *          <important>
 *             <p>Client branding attributes are public facing. Ensure you do not include sensitive
 *             information.</p>
 *          </important>
 */
export interface IosClientBrandingAttributes {
  /**
   * @public
   * <p>The logo. This is the standard-resolution display that has a 1:1 pixel density
   *          (or @1x), where one pixel is equal
   *          to one point. The only image format accepted is a binary data object that is converted from
   *          a <code>.png</code> file.</p>
   */
  LogoUrl?: string;

  /**
   * @public
   * <p>The @2x version of the logo. This is the higher resolution display that offers a scale
   *          factor of 2.0 (or @2x). The only image format accepted is a binary data object that is
   *          converted from a <code>.png</code> file.</p>
   *          <note>
   *             <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface
   *                Guidelines</i>.</p>
   *          </note>
   */
  Logo2xUrl?: string;

  /**
   * @public
   * <p>The @3x version of the logo. This is the higher resolution display that offers a scale
   *          factor of 3.0 (or @3x).The only image format accepted is a binary data object that is
   *          converted from a <code>.png</code> file.</p>
   *          <note>
   *             <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface
   *                Guidelines</i>.</p>
   *          </note>
   */
  Logo3xUrl?: string;

  /**
   * @public
   * <p>The support email. The company's customer support email address.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default email is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportEmail?: string;

  /**
   * @public
   * <p>The support link. The link for the company's customer support page for their
   *          WorkSpace.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default support link is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportLink?: string;

  /**
   * @public
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   */
  ForgotPasswordLink?: string;

  /**
   * @public
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *          <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em,
   *             i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.</p>
   */
  LoginMessage?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeClientBrandingResult {
  /**
   * @public
   * <p>The branding information for Windows devices.</p>
   */
  DeviceTypeWindows?: DefaultClientBrandingAttributes;

  /**
   * @public
   * <p>The branding information for macOS devices.</p>
   */
  DeviceTypeOsx?: DefaultClientBrandingAttributes;

  /**
   * @public
   * <p>The branding information for Android devices.</p>
   */
  DeviceTypeAndroid?: DefaultClientBrandingAttributes;

  /**
   * @public
   * <p>The branding information for iOS devices.</p>
   */
  DeviceTypeIos?: IosClientBrandingAttributes;

  /**
   * @public
   * <p>The branding information for Linux devices.</p>
   */
  DeviceTypeLinux?: DefaultClientBrandingAttributes;

  /**
   * @public
   * <p>The branding information for Web access.</p>
   */
  DeviceTypeWeb?: DefaultClientBrandingAttributes;
}

/**
 * @public
 */
export interface DescribeClientPropertiesRequest {
  /**
   * @public
   * <p>The resource identifier, in the form of directory IDs.</p>
   */
  ResourceIds: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeClientPropertiesResult {
  /**
   * @public
   * <p>Information about the specified Amazon WorkSpaces clients.</p>
   */
  ClientPropertiesList?: ClientPropertiesResult[];
}

/**
 * @public
 */
export interface DescribeConnectClientAddInsRequest {
  /**
   * @public
   * <p>The directory identifier for which the client add-in is configured.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeConnectClientAddInsResult {
  /**
   * @public
   * <p>Information about client add-ins.</p>
   */
  AddIns?: ConnectClientAddIn[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeConnectionAliasesRequest {
  /**
   * @public
   * <p>The identifiers of the connection aliases to describe.</p>
   */
  AliasIds?: string[];

  /**
   * @public
   * <p>The identifier of the directory associated with the connection alias.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The maximum number of connection aliases to return.</p>
   */
  Limit?: number;

  /**
   * @public
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeConnectionAliasesResult {
  /**
   * @public
   * <p>Information about the specified connection aliases.</p>
   */
  ConnectionAliases?: ConnectionAlias[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeConnectionAliasPermissionsRequest {
  /**
   * @public
   * <p>The identifier of the connection alias.</p>
   */
  AliasId: string | undefined;

  /**
   * @public
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeConnectionAliasPermissionsResult {
  /**
   * @public
   * <p>The identifier of the connection alias.</p>
   */
  AliasId?: string;

  /**
   * @public
   * <p>The permissions associated with a connection alias.</p>
   */
  ConnectionAliasPermissions?: ConnectionAliasPermission[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ImageAssociatedResourceType = {
  APPLICATION: "APPLICATION",
} as const;

/**
 * @public
 */
export type ImageAssociatedResourceType =
  (typeof ImageAssociatedResourceType)[keyof typeof ImageAssociatedResourceType];

/**
 * @public
 */
export interface DescribeImageAssociationsRequest {
  /**
   * @public
   * <p>The identifier of the image.</p>
   */
  ImageId: string | undefined;

  /**
   * @public
   * <p>The resource types of the associated resource.</p>
   */
  AssociatedResourceTypes: ImageAssociatedResourceType[] | undefined;
}

/**
 * @public
 * <p>Describes the association between an application and an image resource.</p>
 */
export interface ImageResourceAssociation {
  /**
   * @public
   * <p>The identifier of the associated resource.</p>
   */
  AssociatedResourceId?: string;

  /**
   * @public
   * <p>The resource type of the associated resources.</p>
   */
  AssociatedResourceType?: ImageAssociatedResourceType;

  /**
   * @public
   * <p>The time the association is created.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The time the association status was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The status of the image resource association.</p>
   */
  State?: AssociationState;

  /**
   * @public
   * <p>The reason the association deployment failed.</p>
   */
  StateReason?: AssociationStateReason;
}

/**
 * @public
 */
export interface DescribeImageAssociationsResult {
  /**
   * @public
   * <p>List of information about the specified associations.</p>
   */
  Associations?: ImageResourceAssociation[];
}

/**
 * @public
 */
export interface DescribeIpGroupsRequest {
  /**
   * @public
   * <p>The identifiers of one or more IP access control groups.</p>
   */
  GroupIds?: string[];

  /**
   * @public
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Describes an IP access control group.</p>
 */
export interface WorkspacesIpGroup {
  /**
   * @public
   * <p>The identifier of the group.</p>
   */
  groupId?: string;

  /**
   * @public
   * <p>The name of the group.</p>
   */
  groupName?: string;

  /**
   * @public
   * <p>The description of the group.</p>
   */
  groupDesc?: string;

  /**
   * @public
   * <p>The rules.</p>
   */
  userRules?: IpRuleItem[];
}

/**
 * @public
 */
export interface DescribeIpGroupsResult {
  /**
   * @public
   * <p>Information about the IP access control groups.</p>
   */
  Result?: WorkspacesIpGroup[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTagsRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, IP access control groups, and connection
   *          aliases.</p>
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagsResult {
  /**
   * @public
   * <p>The tags.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 */
export interface DescribeWorkspaceAssociationsRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;

  /**
   * @public
   * <p>The resource types of the associated resources.</p>
   */
  AssociatedResourceTypes: WorkSpaceAssociatedResourceType[] | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceAssociationsResult {
  /**
   * @public
   * <p>List of information about the specified associations.</p>
   */
  Associations?: WorkspaceResourceAssociation[];
}

/**
 * @public
 */
export interface DescribeWorkspaceBundlesRequest {
  /**
   * @public
   * <p>The identifiers of the bundles. You cannot combine this parameter with any other filter.</p>
   */
  BundleIds?: string[];

  /**
   * @public
   * <p>The owner of the bundles. You cannot combine this parameter with any other filter.</p>
   *          <p>To describe the bundles provided by Amazon Web Services, specify <code>AMAZON</code>.
   *          To describe the bundles that belong to your account, don't specify a value.</p>
   */
  Owner?: string;

  /**
   * @public
   * <p>The token for the next set of results. (You received this token from a previous call.)</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeWorkspaceBundlesResult {
  /**
   * @public
   * <p>Information about the bundles.</p>
   */
  Bundles?: WorkspaceBundle[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more
   *          results to return. This token is valid for one day and must be used within that time
   *          frame.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeWorkspaceDirectoriesRequest {
  /**
   * @public
   * <p>The identifiers of the directories. If the value is null, all directories are
   *          retrieved.</p>
   */
  DirectoryIds?: string[];

  /**
   * @public
   * <p>The maximum number of directories to return.</p>
   */
  Limit?: number;

  /**
   * @public
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const WorkspaceDirectoryType = {
  AD_CONNECTOR: "AD_CONNECTOR",
  SIMPLE_AD: "SIMPLE_AD",
} as const;

/**
 * @public
 */
export type WorkspaceDirectoryType = (typeof WorkspaceDirectoryType)[keyof typeof WorkspaceDirectoryType];

/**
 * @public
 * @enum
 */
export const SamlStatusEnum = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK: "ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK",
} as const;

/**
 * @public
 */
export type SamlStatusEnum = (typeof SamlStatusEnum)[keyof typeof SamlStatusEnum];

/**
 * @public
 * <p>Describes the enablement status, user access URL, and relay state parameter name that
 *          are used for configuring federation with an SAML 2.0 identity provider.</p>
 */
export interface SamlProperties {
  /**
   * @public
   * <p>Indicates the status of SAML 2.0 authentication. These statuses include the following.</p>
   *          <ul>
   *             <li>
   *                <p>If the setting is <code>DISABLED</code>, end users will be directed to login with their directory credentials.</p>
   *             </li>
   *             <li>
   *                <p>If the setting is <code>ENABLED</code>, end users will be directed to login via the user access URL. Users attempting
   *                to connect to WorkSpaces from a client application that does not support SAML 2.0 authentication will not be able to
   *                connect.</p>
   *             </li>
   *             <li>
   *                <p>If the setting is <code>ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK</code>, end users will be directed to login via the user
   *                access URL on supported client applications, but will not prevent clients that do not support SAML 2.0 authentication
   *                from connecting as if SAML 2.0 authentication was disabled.</p>
   *             </li>
   *          </ul>
   */
  Status?: SamlStatusEnum;

  /**
   * @public
   * <p>The SAML 2.0 identity provider (IdP) user access URL is the URL a user would navigate to in their web browser in
   *          order to federate from the IdP and directly access the application, without any SAML 2.0 service provider (SP)
   *          bindings.</p>
   */
  UserAccessUrl?: string;

  /**
   * @public
   * <p>The relay state parameter name supported by the SAML 2.0 identity provider (IdP). When the end user is redirected to
   *          the user access URL from the WorkSpaces client application, this relay state parameter name is appended as a query
   *          parameter to the URL along with the relay state endpoint to return the user to the client application session.</p>
   *          <p>To use SAML 2.0 authentication with WorkSpaces, the IdP must support IdP-initiated deep linking for the relay state
   *          URL. Consult your IdP documentation for more information.</p>
   */
  RelayStateParameterName?: string;
}

/**
 * @public
 * <p>Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.</p>
 */
export interface SelfservicePermissions {
  /**
   * @public
   * <p>Specifies whether users can restart their WorkSpace.</p>
   */
  RestartWorkspace?: ReconnectEnum;

  /**
   * @public
   * <p>Specifies whether users can increase the volume size of the drives on their
   *          WorkSpace.</p>
   */
  IncreaseVolumeSize?: ReconnectEnum;

  /**
   * @public
   * <p>Specifies whether users can change the compute type (bundle) for their WorkSpace.</p>
   */
  ChangeComputeType?: ReconnectEnum;

  /**
   * @public
   * <p>Specifies whether users can switch the running mode of their WorkSpace.</p>
   */
  SwitchRunningMode?: ReconnectEnum;

  /**
   * @public
   * <p>Specifies whether users can rebuild the operating system of a WorkSpace to its original
   *          state.</p>
   */
  RebuildWorkspace?: ReconnectEnum;
}

/**
 * @public
 * @enum
 */
export const WorkspaceDirectoryState = {
  DEREGISTERED: "DEREGISTERED",
  DEREGISTERING: "DEREGISTERING",
  ERROR: "ERROR",
  REGISTERED: "REGISTERED",
  REGISTERING: "REGISTERING",
} as const;

/**
 * @public
 */
export type WorkspaceDirectoryState = (typeof WorkspaceDirectoryState)[keyof typeof WorkspaceDirectoryState];

/**
 * @public
 * @enum
 */
export const Tenancy = {
  DEDICATED: "DEDICATED",
  SHARED: "SHARED",
} as const;

/**
 * @public
 */
export type Tenancy = (typeof Tenancy)[keyof typeof Tenancy];

/**
 * @public
 * <p>The device types and operating systems that can be used to access a WorkSpace. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon
 *             WorkSpaces Client Network Requirements</a>.</p>
 */
export interface WorkspaceAccessProperties {
  /**
   * @public
   * <p>Indicates whether users can use Windows clients to access their WorkSpaces.</p>
   */
  DeviceTypeWindows?: AccessPropertyValue;

  /**
   * @public
   * <p>Indicates whether users can use macOS clients to access their WorkSpaces.</p>
   */
  DeviceTypeOsx?: AccessPropertyValue;

  /**
   * @public
   * <p>Indicates whether users can access their WorkSpaces through a web browser.</p>
   */
  DeviceTypeWeb?: AccessPropertyValue;

  /**
   * @public
   * <p>Indicates whether users can use iOS devices to access their WorkSpaces.</p>
   */
  DeviceTypeIos?: AccessPropertyValue;

  /**
   * @public
   * <p>Indicates whether users can use Android and Android-compatible Chrome OS devices to
   *          access their WorkSpaces.</p>
   */
  DeviceTypeAndroid?: AccessPropertyValue;

  /**
   * @public
   * <p>Indicates whether users can use Chromebooks to access their WorkSpaces.</p>
   */
  DeviceTypeChromeOs?: AccessPropertyValue;

  /**
   * @public
   * <p>Indicates whether users can use zero client devices to access their WorkSpaces.</p>
   */
  DeviceTypeZeroClient?: AccessPropertyValue;

  /**
   * @public
   * <p>Indicates whether users can use Linux clients to access their WorkSpaces.</p>
   */
  DeviceTypeLinux?: AccessPropertyValue;
}

/**
 * @public
 * <p>Describes a directory that is used with Amazon WorkSpaces.</p>
 */
export interface WorkspaceDirectory {
  /**
   * @public
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>The directory alias.</p>
   */
  Alias?: string;

  /**
   * @public
   * <p>The name of the directory.</p>
   */
  DirectoryName?: string;

  /**
   * @public
   * <p>The registration code for the directory. This is the code that users enter in their
   *          Amazon WorkSpaces client application to connect to the directory.</p>
   */
  RegistrationCode?: string;

  /**
   * @public
   * <p>The identifiers of the subnets used with the directory.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>The IP addresses of the DNS servers for the directory.</p>
   */
  DnsIpAddresses?: string[];

  /**
   * @public
   * <p>The user name for the service account.</p>
   */
  CustomerUserName?: string;

  /**
   * @public
   * <p>The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make
   *          calls to other services, such as Amazon EC2, on your behalf.</p>
   */
  IamRoleId?: string;

  /**
   * @public
   * <p>The directory type.</p>
   */
  DirectoryType?: WorkspaceDirectoryType;

  /**
   * @public
   * <p>The identifier of the security group that is assigned to new WorkSpaces.</p>
   */
  WorkspaceSecurityGroupId?: string;

  /**
   * @public
   * <p>The state of the directory's registration with Amazon WorkSpaces. After a directory is
   *          deregistered, the <code>DEREGISTERED</code> state is returned very briefly before the
   *          directory metadata is cleaned up, so this state is rarely returned. To confirm that a
   *          directory is deregistered, check for the directory ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html">
   *             DescribeWorkspaceDirectories</a>. If the directory ID isn't returned, then the
   *          directory has been successfully deregistered.</p>
   */
  State?: WorkspaceDirectoryState;

  /**
   * @public
   * <p>The default creation properties for all WorkSpaces in the directory.</p>
   */
  WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;

  /**
   * @public
   * <p>The identifiers of the IP access control groups associated with the directory.</p>
   */
  ipGroupIds?: string[];

  /**
   * @public
   * <p>The devices and operating systems that users can use to access WorkSpaces.</p>
   */
  WorkspaceAccessProperties?: WorkspaceAccessProperties;

  /**
   * @public
   * <p>Specifies whether the directory is dedicated or shared. To use Bring Your Own License
   *          (BYOL), this value must be set to <code>DEDICATED</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring
   *             Your Own Windows Desktop Images</a>.</p>
   */
  Tenancy?: Tenancy;

  /**
   * @public
   * <p>The default self-service permissions for WorkSpaces in the directory.</p>
   */
  SelfservicePermissions?: SelfservicePermissions;

  /**
   * @public
   * <p>Describes the enablement status, user access URL, and relay state parameter name that are used for configuring
   *          federation with an SAML 2.0 identity provider.</p>
   */
  SamlProperties?: SamlProperties;

  /**
   * @public
   * <p>The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP)
   *          user identities to Active Directory for WorkSpaces login.</p>
   */
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
}

/**
 * @public
 */
export interface DescribeWorkspaceDirectoriesResult {
  /**
   * @public
   * <p>Information about the directories.</p>
   */
  Directories?: WorkspaceDirectory[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeWorkspaceImagePermissionsRequest {
  /**
   * @public
   * <p>The identifier of the image.</p>
   */
  ImageId: string | undefined;

  /**
   * @public
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Describes the Amazon Web Services accounts that have been granted permission to use a
 *          shared image. For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom
 *             WorkSpaces Image</a>.</p>
 */
export interface ImagePermission {
  /**
   * @public
   * <p>The identifier of the Amazon Web Services account that an image has been shared
   *          with.</p>
   */
  SharedAccountId?: string;
}

/**
 * @public
 */
export interface DescribeWorkspaceImagePermissionsResult {
  /**
   * @public
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The identifiers of the Amazon Web Services accounts that the image has been shared
   *          with.</p>
   */
  ImagePermissions?: ImagePermission[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ImageType = {
  OWNED: "OWNED",
  SHARED: "SHARED",
} as const;

/**
 * @public
 */
export type ImageType = (typeof ImageType)[keyof typeof ImageType];

/**
 * @public
 */
export interface DescribeWorkspaceImagesRequest {
  /**
   * @public
   * <p>The identifier of the image.</p>
   */
  ImageIds?: string[];

  /**
   * @public
   * <p>The type (owned or shared) of the image.</p>
   */
  ImageType?: ImageType;

  /**
   * @public
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const WorkspaceImageErrorDetailCode = {
  ADDITIONAL_DRIVES_ATTACHED: "AdditionalDrivesAttached",
  ANTI_VIRUS_INSTALLED: "AntiVirusInstalled",
  AUTO_LOGON_ENABLED: "AutoLogonEnabled",
  AUTO_MOUNT_DISABLED: "AutoMountDisabled",
  AZURE_DOMAIN_JOINED: "AzureDomainJoined",
  DHCP_DISABLED: "DHCPDisabled",
  DISK_FREE_SPACE: "DiskFreeSpace",
  DISK_SIZE_EXCEEDED: "DiskSizeExceeded",
  DOMAIN_JOINED: "DomainJoined",
  FIREWALL_ENABLED: "FirewallEnabled",
  INCOMPATIBLE_PARTITIONING: "IncompatiblePartitioning",
  IN_PLACE_UPGRADE: "InPlaceUpgrade",
  MULTIPLE_BOOT_PARTITION: "MultipleBootPartition",
  OFFICE_INSTALLED: "OfficeInstalled",
  OS_NOT_SUPPORTED: "OSNotSupported",
  OUTDATED_POWERSHELL_VERSION: "OutdatedPowershellVersion",
  PCOIP_AGENT_INSTALLED: "PCoIPAgentInstalled",
  PENDING_REBOOT: "PendingReboot",
  REALTIME_UNIVERSAL_DISABLED: "RealTimeUniversalDisabled",
  SIXTY_FOUR_BIT_OS: "Requires64BitOS",
  UEFI_NOT_SUPPORTED: "UEFINotSupported",
  VMWARE_TOOLS_INSTALLED: "VMWareToolsInstalled",
  WINDOWS_UPDATES_ENABLED: "WindowsUpdatesEnabled",
  WORKSPACES_BYOL_ACCOUNT_DISABLED: "WorkspacesBYOLAccountDisabled",
  WORKSPACES_BYOL_ACCOUNT_NOT_FOUND: "WorkspacesBYOLAccountNotFound",
  ZERO_REARM_COUNT: "ZeroRearmCount",
} as const;

/**
 * @public
 */
export type WorkspaceImageErrorDetailCode =
  (typeof WorkspaceImageErrorDetailCode)[keyof typeof WorkspaceImageErrorDetailCode];

/**
 * @public
 * <p>Describes in-depth details about the error. These details include the
 *          possible causes of the error and troubleshooting information.</p>
 */
export interface ErrorDetails {
  /**
   * @public
   * <p>Indicates the error code returned.</p>
   */
  ErrorCode?: WorkspaceImageErrorDetailCode;

  /**
   * @public
   * <p>The text of the error message related the error code.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * <p>Describes whether a WorkSpace image needs to be updated with the latest drivers and
 *          other components required by Amazon WorkSpaces.</p>
 *          <note>
 *             <p>Only Windows 10 WorkSpace images can be programmatically updated at this time.</p>
 *          </note>
 */
export interface UpdateResult {
  /**
   * @public
   * <p>Indicates whether updated drivers or other components are available for the specified
   *          WorkSpace image.</p>
   */
  UpdateAvailable?: boolean;

  /**
   * @public
   * <p>A description of whether updates for the WorkSpace image are pending or
   *          available.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Describes a WorkSpace image.</p>
 */
export interface WorkspaceImage {
  /**
   * @public
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The name of the image.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The operating system that the image is running. </p>
   */
  OperatingSystem?: OperatingSystem;

  /**
   * @public
   * <p>The status of the image.</p>
   */
  State?: WorkspaceImageState;

  /**
   * @public
   * <p>Specifies whether the image is running on dedicated hardware. When Bring Your Own
   *          License (BYOL) is enabled, this value is set to <code>DEDICATED</code>. For more
   *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows
   *             Desktop Images</a>.</p>
   */
  RequiredTenancy?: WorkspaceImageRequiredTenancy;

  /**
   * @public
   * <p>The error code that is returned for the image.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The text of the error message that is returned for the image.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The date when the image was created. If the image has been shared, the Amazon Web Services account that the image has been shared with sees the original creation date
   *          of the image.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services account that owns the image.</p>
   */
  OwnerAccountId?: string;

  /**
   * @public
   * <p>The updates (if any) that are available for the specified image.</p>
   */
  Updates?: UpdateResult;

  /**
   * @public
   * <p>Additional details of the error returned for the image, including the
   *          possible causes of the errors and troubleshooting information.</p>
   */
  ErrorDetails?: ErrorDetails[];
}

/**
 * @public
 */
export interface DescribeWorkspaceImagesResult {
  /**
   * @public
   * <p>Information about the images.</p>
   */
  Images?: WorkspaceImage[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeWorkspacesRequest {
  /**
   * @public
   * <p>The identifiers of the WorkSpaces. You cannot combine this parameter with any other
   *          filter.</p>
   *          <p>Because the <a>CreateWorkspaces</a> operation is asynchronous, the identifier
   *          it returns is not immediately available. If you immediately call <a>DescribeWorkspaces</a> with this identifier, no information is returned.</p>
   */
  WorkspaceIds?: string[];

  /**
   * @public
   * <p>The identifier of the directory. In addition, you can optionally specify a specific
   *          directory user (see <code>UserName</code>). You cannot combine this parameter with any
   *          other filter.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>The name of the directory user. You must specify this parameter with
   *             <code>DirectoryId</code>.</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>The identifier of the bundle. All WorkSpaces that are created from this bundle are
   *          retrieved. You cannot combine this parameter with any other filter.</p>
   */
  BundleId?: string;

  /**
   * @public
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;

  /**
   * @public
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeWorkspacesResult {
  /**
   * @public
   * <p>Information about the WorkSpaces.</p>
   *          <p>Because <a>CreateWorkspaces</a> is an asynchronous operation, some of the
   *          returned information could be incomplete.</p>
   */
  Workspaces?: Workspace[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeWorkspacesConnectionStatusRequest {
  /**
   * @public
   * <p>The identifiers of the WorkSpaces. You can specify up to 25 WorkSpaces.</p>
   */
  WorkspaceIds?: string[];

  /**
   * @public
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes the connection status of a WorkSpace.</p>
 */
export interface WorkspaceConnectionStatus {
  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * @public
   * <p>The connection state of the WorkSpace. The connection state is unknown if the WorkSpace
   *          is stopped.</p>
   */
  ConnectionState?: ConnectionState;

  /**
   * @public
   * <p>The timestamp of the connection status check.</p>
   */
  ConnectionStateCheckTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp of the last known user connection.</p>
   */
  LastKnownUserConnectionTimestamp?: Date;
}

/**
 * @public
 */
export interface DescribeWorkspacesConnectionStatusResult {
  /**
   * @public
   * <p>Information about the connection status of the WorkSpace.</p>
   */
  WorkspacesConnectionStatus?: WorkspaceConnectionStatus[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeWorkspaceSnapshotsRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

/**
 * @public
 * <p>Describes a snapshot.</p>
 */
export interface Snapshot {
  /**
   * @public
   * <p>The time when the snapshot was created.</p>
   */
  SnapshotTime?: Date;
}

/**
 * @public
 */
export interface DescribeWorkspaceSnapshotsResult {
  /**
   * @public
   * <p>Information about the snapshots that can be used to rebuild a WorkSpace. These snapshots
   *          include the user volume.</p>
   */
  RebuildSnapshots?: Snapshot[];

  /**
   * @public
   * <p>Information about the snapshots that can be used to restore a WorkSpace. These snapshots
   *          include both the root volume and the user volume.</p>
   */
  RestoreSnapshots?: Snapshot[];
}

/**
 * @public
 */
export interface DisassociateConnectionAliasRequest {
  /**
   * @public
   * <p>The identifier of the connection alias to disassociate.</p>
   */
  AliasId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateConnectionAliasResult {}

/**
 * @public
 */
export interface DisassociateIpGroupsRequest {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The identifiers of one or more IP access control groups.</p>
   */
  GroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateIpGroupsResult {}

/**
 * @public
 */
export interface DisassociateWorkspaceApplicationRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the application.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateWorkspaceApplicationResult {
  /**
   * @public
   * <p>Information about the targeted association.</p>
   */
  Association?: WorkspaceResourceAssociation;
}

/**
 * @public
 * <p>Describes a WorkSpace that could not be rebooted. (<a>RebootWorkspaces</a>),
 *          rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).</p>
 */
export interface FailedWorkspaceChangeRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * @public
   * <p>The error code that is returned if the WorkSpace cannot be rebooted.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          rebooted.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * <p>The client branding attributes to import for iOS device types. These attributes are
 *          displayed on the iOS client login screen.</p>
 *          <important>
 *             <p>Client branding attributes are public facing. Ensure you do not include sensitive
 *             information.</p>
 *          </important>
 */
export interface IosImportClientBrandingAttributes {
  /**
   * @public
   * <p>The logo. This is the
   *          standard-resolution display that has a 1:1 pixel density (or @1x), where one pixel is equal
   *          to one point. The only image format accepted is a binary data object that is converted
   *          from a <code>.png</code> file.</p>
   */
  Logo?: Uint8Array;

  /**
   * @public
   * <p>The @2x version of the logo. This is the higher resolution display that offers a scale
   *          factor of 2.0 (or @2x). The only image format accepted is a binary data object that is
   *          converted from a <code>.png</code> file.</p>
   *          <note>
   *             <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface
   *                Guidelines</i>.</p>
   *          </note>
   */
  Logo2x?: Uint8Array;

  /**
   * @public
   * <p>The @3x version of the logo. This is the higher resolution display that offers a scale
   *          factor of 3.0 (or @3x). The only image format accepted is a binary data object that is
   *          converted from a <code>.png</code> file.</p>
   *          <note>
   *             <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface
   *                Guidelines</i>.</p>
   *          </note>
   */
  Logo3x?: Uint8Array;

  /**
   * @public
   * <p>The support email. The company's customer support email address.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default email is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportEmail?: string;

  /**
   * @public
   * <p>The support link. The link for the company's customer support page for their
   *          WorkSpace.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default support link is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportLink?: string;

  /**
   * @public
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   */
  ForgotPasswordLink?: string;

  /**
   * @public
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *          <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em,
   *             i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.</p>
   */
  LoginMessage?: Record<string, string>;
}

/**
 * @public
 */
export interface ImportClientBrandingRequest {
  /**
   * @public
   * <p>The directory identifier of the WorkSpace for which you want to import client
   *          branding.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The branding information to import for Windows devices.</p>
   */
  DeviceTypeWindows?: DefaultImportClientBrandingAttributes;

  /**
   * @public
   * <p>The branding information to import for macOS devices.</p>
   */
  DeviceTypeOsx?: DefaultImportClientBrandingAttributes;

  /**
   * @public
   * <p>The branding information to import for Android devices.</p>
   */
  DeviceTypeAndroid?: DefaultImportClientBrandingAttributes;

  /**
   * @public
   * <p>The branding information to import for iOS devices.</p>
   */
  DeviceTypeIos?: IosImportClientBrandingAttributes;

  /**
   * @public
   * <p>The branding information to import for Linux devices.</p>
   */
  DeviceTypeLinux?: DefaultImportClientBrandingAttributes;

  /**
   * @public
   * <p>The branding information to import for web access.</p>
   */
  DeviceTypeWeb?: DefaultImportClientBrandingAttributes;
}

/**
 * @public
 */
export interface ImportClientBrandingResult {
  /**
   * @public
   * <p>The branding information configured for Windows devices.</p>
   */
  DeviceTypeWindows?: DefaultClientBrandingAttributes;

  /**
   * @public
   * <p>The branding information configured for macOS devices.</p>
   */
  DeviceTypeOsx?: DefaultClientBrandingAttributes;

  /**
   * @public
   * <p>The branding information configured for Android devices.</p>
   */
  DeviceTypeAndroid?: DefaultClientBrandingAttributes;

  /**
   * @public
   * <p>The branding information configured for iOS devices.</p>
   */
  DeviceTypeIos?: IosClientBrandingAttributes;

  /**
   * @public
   * <p>The branding information configured for Linux devices.</p>
   */
  DeviceTypeLinux?: DefaultClientBrandingAttributes;

  /**
   * @public
   * <p>The branding information configured for web access.</p>
   */
  DeviceTypeWeb?: DefaultClientBrandingAttributes;
}

/**
 * @public
 * @enum
 */
export const WorkspaceImageIngestionProcess = {
  BYOL_GRAPHICS: "BYOL_GRAPHICS",
  BYOL_GRAPHICSPRO: "BYOL_GRAPHICSPRO",
  BYOL_GRAPHICS_G4DN: "BYOL_GRAPHICS_G4DN",
  BYOL_GRAPHICS_G4DN_BYOP: "BYOL_GRAPHICS_G4DN_BYOP",
  BYOL_REGULAR: "BYOL_REGULAR",
  BYOL_REGULAR_BYOP: "BYOL_REGULAR_BYOP",
  BYOL_REGULAR_WSP: "BYOL_REGULAR_WSP",
} as const;

/**
 * @public
 */
export type WorkspaceImageIngestionProcess =
  (typeof WorkspaceImageIngestionProcess)[keyof typeof WorkspaceImageIngestionProcess];

/**
 * @public
 */
export interface ImportWorkspaceImageRequest {
  /**
   * @public
   * <p>The identifier of the EC2 image.</p>
   */
  Ec2ImageId: string | undefined;

  /**
   * @public
   * <p>The ingestion process to be used when importing the image, depending on which protocol
   *          you want to use for your BYOL Workspace image, either PCoIP, WorkSpaces Streaming Protocol
   *          (WSP), or bring your own protocol (BYOP). To use WSP, specify a value that ends in
   *          <code>_WSP</code>. To use PCoIP, specify a value that does not end in <code>_WSP</code>.
   *          To use BYOP, specify a value that ends in <code>_BYOP</code>.</p>
   *          <p>For non-GPU-enabled bundles (bundles other than Graphics or GraphicsPro), specify
   *          <code>BYOL_REGULAR</code>, <code>BYOL_REGULAR_WSP</code>, or <code>BYOL_REGULAR_BYOP</code>,
   *          depending on the protocol.</p>
   *          <note>
   *             <p>The <code>BYOL_REGULAR_BYOP</code> and <code>BYOL_GRAPHICS_G4DN_BYOP</code> values
   *             are only supported by Amazon WorkSpaces Core. Contact your account team to be
   *             allow-listed to use these values. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p>
   *          </note>
   */
  IngestionProcess: WorkspaceImageIngestionProcess | undefined;

  /**
   * @public
   * <p>The name of the WorkSpace image.</p>
   */
  ImageName: string | undefined;

  /**
   * @public
   * <p>The description of the WorkSpace image.</p>
   */
  ImageDescription: string | undefined;

  /**
   * @public
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>If specified, the version of Microsoft Office to subscribe to. Valid only for Windows 10 and 11
   *          BYOL images. For more information about subscribing to Office for BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring
   *             Your Own Windows Desktop Licenses</a>.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>Although this parameter is an array, only one item is allowed at this time.</p>
   *                </li>
   *                <li>
   *                   <p>Windows 11 only supports <code>Microsoft_Office_2019</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  Applications?: Application[];
}

/**
 * @public
 */
export interface ImportWorkspaceImageResult {
  /**
   * @public
   * <p>The identifier of the WorkSpace image.</p>
   */
  ImageId?: string;
}

/**
 * @public
 */
export interface ListAvailableManagementCidrRangesRequest {
  /**
   * @public
   * <p>The IP address range to search. Specify an IP address range that is compatible with your
   *          network and in CIDR notation (that is, specify the range as an IPv4 CIDR block).</p>
   */
  ManagementCidrRangeConstraint: string | undefined;

  /**
   * @public
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAvailableManagementCidrRangesResult {
  /**
   * @public
   * <p>The list of available IP address ranges, specified as IPv4 CIDR blocks.</p>
   */
  ManagementCidrRanges?: string[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface MigrateWorkspaceRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpace to migrate from.</p>
   */
  SourceWorkspaceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the target bundle type to migrate the WorkSpace to.</p>
   */
  BundleId: string | undefined;
}

/**
 * @public
 */
export interface MigrateWorkspaceResult {
  /**
   * @public
   * <p>The original identifier of the WorkSpace that is being migrated.</p>
   */
  SourceWorkspaceId?: string;

  /**
   * @public
   * <p>The new identifier of the WorkSpace that is being migrated. If the migration does not
   *          succeed, the target WorkSpace ID will not be used, and the WorkSpace will still have the
   *          original WorkSpace ID.</p>
   */
  TargetWorkspaceId?: string;
}

/**
 * @public
 * <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
 */
export class OperationInProgressException extends __BaseException {
  readonly name: "OperationInProgressException" = "OperationInProgressException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationInProgressException, __BaseException>) {
    super({
      name: "OperationInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationInProgressException.prototype);
  }
}

/**
 * @public
 */
export interface ModifyAccountRequest {
  /**
   * @public
   * <p>The status of BYOL.</p>
   */
  DedicatedTenancySupport?: DedicatedTenancySupportEnum;

  /**
   * @public
   * <p>The IP address range, specified as an IPv4 CIDR block, for the management network
   *          interface. Specify an IP address range that is compatible with your network and in CIDR
   *          notation (that is, specify the range as an IPv4 CIDR block). The CIDR block size must be
   *          /16 (for example, 203.0.113.25/16). It must also be specified as available by the
   *             <code>ListAvailableManagementCidrRanges</code> operation.</p>
   */
  DedicatedTenancyManagementCidrRange?: string;
}

/**
 * @public
 */
export interface ModifyAccountResult {}

/**
 * @public
 */
export interface ModifyCertificateBasedAuthPropertiesRequest {
  /**
   * @public
   * <p>The resource identifiers, in the form of directory IDs.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The properties of the certificate-based authentication.</p>
   */
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;

  /**
   * @public
   * <p>The properties of the certificate-based authentication you want to delete.</p>
   */
  PropertiesToDelete?: DeletableCertificateBasedAuthProperty[];
}

/**
 * @public
 */
export interface ModifyCertificateBasedAuthPropertiesResult {}

/**
 * @public
 */
export interface ModifyClientPropertiesRequest {
  /**
   * @public
   * <p>The resource identifiers, in the form of directory IDs.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>Information about the Amazon WorkSpaces client.</p>
   */
  ClientProperties: ClientProperties | undefined;
}

/**
 * @public
 */
export interface ModifyClientPropertiesResult {}

/**
 * @public
 */
export interface ModifySamlPropertiesRequest {
  /**
   * @public
   * <p>The directory identifier for which you want to configure SAML properties.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The properties for configuring SAML 2.0 authentication.</p>
   */
  SamlProperties?: SamlProperties;

  /**
   * @public
   * <p>The SAML properties to delete as part of your request.</p>
   *          <p>Specify one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SAML_PROPERTIES_USER_ACCESS_URL</code> to delete the user access URL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME</code> to delete the
   *                relay state parameter name.</p>
   *             </li>
   *          </ul>
   */
  PropertiesToDelete?: DeletableSamlProperty[];
}

/**
 * @public
 */
export interface ModifySamlPropertiesResult {}

/**
 * @public
 */
export interface ModifySelfservicePermissionsRequest {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The permissions to enable or disable self-service capabilities.</p>
   */
  SelfservicePermissions: SelfservicePermissions | undefined;
}

/**
 * @public
 */
export interface ModifySelfservicePermissionsResult {}

/**
 * @public
 */
export interface ModifyWorkspaceAccessPropertiesRequest {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The device types and operating systems to enable or disable for access.</p>
   */
  WorkspaceAccessProperties: WorkspaceAccessProperties | undefined;
}

/**
 * @public
 */
export interface ModifyWorkspaceAccessPropertiesResult {}

/**
 * @public
 * <p>Describes the default properties that are used for creating WorkSpaces. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory
 *             Details for Your WorkSpaces</a>. </p>
 */
export interface WorkspaceCreationProperties {
  /**
   * @public
   * <p>Indicates whether Amazon WorkDocs is enabled for your WorkSpaces.</p>
   *          <note>
   *             <p>If WorkDocs is already enabled for a WorkSpaces directory and you disable it, new
   *             WorkSpaces launched in the directory will not have WorkDocs enabled. However, WorkDocs
   *             remains enabled for any existing WorkSpaces, unless you either disable users' access to
   *             WorkDocs or you delete the WorkDocs site. To disable users' access to WorkDocs, see
   *                <a href="https://docs.aws.amazon.com/workdocs/latest/adminguide/inactive-user.html">Disabling Users</a> in the <i>Amazon WorkDocs Administration
   *                Guide</i>. To delete a WorkDocs site, see <a href="https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html">Deleting a Site</a> in the
   *                <i>Amazon WorkDocs Administration Guide</i>.</p>
   *             <p>If you enable WorkDocs on a directory that already has existing WorkSpaces, the
   *             existing WorkSpaces and any new WorkSpaces that are launched in the directory will have
   *             WorkDocs enabled.</p>
   *          </note>
   */
  EnableWorkDocs?: boolean;

  /**
   * @public
   * <p>Indicates whether internet access is enabled for your WorkSpaces.</p>
   */
  EnableInternetAccess?: boolean;

  /**
   * @public
   * <p>The default organizational unit (OU) for your WorkSpaces directories. This string must
   *          be the full Lightweight Directory Access Protocol (LDAP) distinguished name for the target
   *          domain and OU. It must be in the form
   *                <code>"OU=<i>value</i>,DC=<i>value</i>,DC=<i>value</i>"</code>,
   *          where <i>value</i> is any string of characters, and the number of domain
   *          components (DCs) is two or more. For example,
   *             <code>OU=WorkSpaces_machines,DC=machines,DC=example,DC=com</code>. </p>
   *          <important>
   *             <ul>
   *                <li>
   *                   <p>To avoid errors, certain characters in the distinguished name must be escaped.
   *                   For more information, see <a href="https://docs.microsoft.com/previous-versions/windows/desktop/ldap/distinguished-names"> Distinguished Names</a> in the Microsoft documentation.</p>
   *                </li>
   *                <li>
   *                   <p>The API doesn't validate whether the OU exists.</p>
   *                </li>
   *             </ul>
   *          </important>
   */
  DefaultOu?: string;

  /**
   * @public
   * <p>The identifier of your custom security group.</p>
   */
  CustomSecurityGroupId?: string;

  /**
   * @public
   * <p>Indicates whether users are local administrators of their WorkSpaces.</p>
   */
  UserEnabledAsLocalAdministrator?: boolean;

  /**
   * @public
   * <p>Indicates whether maintenance mode is enabled for your WorkSpaces. For more information,
   *          see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace
   *             Maintenance</a>. </p>
   */
  EnableMaintenanceMode?: boolean;
}

/**
 * @public
 */
export interface ModifyWorkspaceCreationPropertiesRequest {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The default properties for creating WorkSpaces.</p>
   */
  WorkspaceCreationProperties: WorkspaceCreationProperties | undefined;
}

/**
 * @public
 */
export interface ModifyWorkspaceCreationPropertiesResult {}

/**
 * @public
 */
export interface ModifyWorkspacePropertiesRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;

  /**
   * @public
   * <p>The properties of the WorkSpace.</p>
   */
  WorkspaceProperties?: WorkspaceProperties;

  /**
   * @public
   * <p>Indicates the data replication status.</p>
   */
  DataReplication?: DataReplication;
}

/**
 * @public
 */
export interface ModifyWorkspacePropertiesResult {}

/**
 * @public
 * <p>The configuration of this WorkSpace is not supported for this operation. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/required-service-components.html">Required
 *             Configuration and Service Components for WorkSpaces </a>.</p>
 */
export class UnsupportedWorkspaceConfigurationException extends __BaseException {
  readonly name: "UnsupportedWorkspaceConfigurationException" = "UnsupportedWorkspaceConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedWorkspaceConfigurationException, __BaseException>) {
    super({
      name: "UnsupportedWorkspaceConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedWorkspaceConfigurationException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const TargetWorkspaceState = {
  ADMIN_MAINTENANCE: "ADMIN_MAINTENANCE",
  AVAILABLE: "AVAILABLE",
} as const;

/**
 * @public
 */
export type TargetWorkspaceState = (typeof TargetWorkspaceState)[keyof typeof TargetWorkspaceState];

/**
 * @public
 */
export interface ModifyWorkspaceStateRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;

  /**
   * @public
   * <p>The WorkSpace state.</p>
   */
  WorkspaceState: TargetWorkspaceState | undefined;
}

/**
 * @public
 */
export interface ModifyWorkspaceStateResult {}

/**
 * @public
 * <p>Describes the information used to reboot a WorkSpace.</p>
 */
export interface RebootRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

/**
 * @public
 */
export interface RebootWorkspacesRequest {
  /**
   * @public
   * <p>The WorkSpaces to reboot. You can specify up to 25 WorkSpaces.</p>
   */
  RebootWorkspaceRequests: RebootRequest[] | undefined;
}

/**
 * @public
 */
export interface RebootWorkspacesResult {
  /**
   * @public
   * <p>Information about the WorkSpaces that could not be rebooted.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

/**
 * @public
 * <p>Describes the information used to rebuild a WorkSpace.</p>
 */
export interface RebuildRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

/**
 * @public
 */
export interface RebuildWorkspacesRequest {
  /**
   * @public
   * <p>The WorkSpace to rebuild. You can specify a single WorkSpace.</p>
   */
  RebuildWorkspaceRequests: RebuildRequest[] | undefined;
}

/**
 * @public
 */
export interface RebuildWorkspacesResult {
  /**
   * @public
   * <p>Information about the WorkSpace that could not be rebuilt.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

/**
 * @public
 */
export interface RegisterWorkspaceDirectoryRequest {
  /**
   * @public
   * <p>The identifier of the directory. You cannot register a directory if it does not have a
   *          status of Active. If the directory does not have a status of Active, you will receive an
   *          InvalidResourceStateException error. If you have already registered the maximum number of
   *          directories that you can register with Amazon WorkSpaces, you will receive a
   *          ResourceLimitExceededException error. Deregister directories that you are not using for
   *          WorkSpaces, and try again.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The identifiers of the subnets for your virtual private cloud (VPC). Make sure that the
   *          subnets are in supported Availability Zones. The subnets must also be in separate
   *          Availability Zones. If these conditions are not met, you will receive an
   *          OperationNotSupportedException error.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>Indicates whether Amazon WorkDocs is enabled or disabled. If you have enabled this
   *          parameter and WorkDocs is not available in the Region, you will receive an
   *          OperationNotSupportedException error. Set <code>EnableWorkDocs</code> to disabled, and try
   *          again.</p>
   */
  EnableWorkDocs: boolean | undefined;

  /**
   * @public
   * <p>Indicates whether self-service capabilities are enabled or disabled.</p>
   */
  EnableSelfService?: boolean;

  /**
   * @public
   * <p>Indicates whether your WorkSpace directory is dedicated or shared. To use Bring Your Own
   *          License (BYOL) images, this value must be set to <code>DEDICATED</code> and your Amazon Web Services account must be enabled for BYOL. If your account has not been enabled for
   *          BYOL, you will receive an InvalidParameterValuesException error. For more information about
   *          BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows
   *             Desktop Images</a>.</p>
   */
  Tenancy?: Tenancy;

  /**
   * @public
   * <p>The tags associated with the directory.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface RegisterWorkspaceDirectoryResult {}

/**
 * @public
 * <p>The configuration of this network is not supported for this operation, or your network configuration
 *          conflicts with the Amazon WorkSpaces management network IP range. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html">
 *             Configure a VPC for Amazon WorkSpaces</a>.</p>
 */
export class UnsupportedNetworkConfigurationException extends __BaseException {
  readonly name: "UnsupportedNetworkConfigurationException" = "UnsupportedNetworkConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedNetworkConfigurationException, __BaseException>) {
    super({
      name: "UnsupportedNetworkConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedNetworkConfigurationException.prototype);
  }
}

/**
 * @public
 * <p>The workspaces_DefaultRole role could not be found. If this is the first time you are registering a directory, you
 *          will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role">Creating the workspaces_DefaultRole Role</a>.</p>
 */
export class WorkspacesDefaultRoleNotFoundException extends __BaseException {
  readonly name: "WorkspacesDefaultRoleNotFoundException" = "WorkspacesDefaultRoleNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WorkspacesDefaultRoleNotFoundException, __BaseException>) {
    super({
      name: "WorkspacesDefaultRoleNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WorkspacesDefaultRoleNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface RestoreWorkspaceRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

/**
 * @public
 */
export interface RestoreWorkspaceResult {}

/**
 * @public
 */
export interface RevokeIpRulesRequest {
  /**
   * @public
   * <p>The identifier of the group.</p>
   */
  GroupId: string | undefined;

  /**
   * @public
   * <p>The rules to remove from the group.</p>
   */
  UserRules: string[] | undefined;
}

/**
 * @public
 */
export interface RevokeIpRulesResult {}

/**
 * @public
 * <p>Information used to start a WorkSpace.</p>
 */
export interface StartRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;
}

/**
 * @public
 */
export interface StartWorkspacesRequest {
  /**
   * @public
   * <p>The WorkSpaces to start. You can specify up to 25 WorkSpaces.</p>
   */
  StartWorkspaceRequests: StartRequest[] | undefined;
}

/**
 * @public
 */
export interface StartWorkspacesResult {
  /**
   * @public
   * <p>Information about the WorkSpaces that could not be started.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

/**
 * @public
 * <p>Describes the information used to stop a WorkSpace.</p>
 */
export interface StopRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;
}

/**
 * @public
 */
export interface StopWorkspacesRequest {
  /**
   * @public
   * <p>The WorkSpaces to stop. You can specify up to 25 WorkSpaces.</p>
   */
  StopWorkspaceRequests: StopRequest[] | undefined;
}

/**
 * @public
 */
export interface StopWorkspacesResult {
  /**
   * @public
   * <p>Information about the WorkSpaces that could not be stopped.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

/**
 * @public
 * <p>Describes the information used to terminate a WorkSpace.</p>
 */
export interface TerminateRequest {
  /**
   * @public
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

/**
 * @public
 */
export interface TerminateWorkspacesRequest {
  /**
   * @public
   * <p>The WorkSpaces to terminate. You can specify up to 25 WorkSpaces.</p>
   */
  TerminateWorkspaceRequests: TerminateRequest[] | undefined;
}

/**
 * @public
 */
export interface TerminateWorkspacesResult {
  /**
   * @public
   * <p>Information about the WorkSpaces that could not be terminated.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

/**
 * @public
 */
export interface UpdateConnectClientAddInRequest {
  /**
   * @public
   * <p>The identifier of the client add-in to update.</p>
   */
  AddInId: string | undefined;

  /**
   * @public
   * <p>The directory identifier for which the client add-in is configured.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The name of the client add-in.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The endpoint URL of the Amazon Connect client add-in.</p>
   */
  URL?: string;
}

/**
 * @public
 */
export interface UpdateConnectClientAddInResult {}

/**
 * @public
 */
export interface UpdateConnectionAliasPermissionRequest {
  /**
   * @public
   * <p>The identifier of the connection alias that you want to update permissions for.</p>
   */
  AliasId: string | undefined;

  /**
   * @public
   * <p>Indicates whether to share or unshare the connection alias with the specified Amazon Web Services account.</p>
   */
  ConnectionAliasPermission: ConnectionAliasPermission | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionAliasPermissionResult {}

/**
 * @public
 */
export interface UpdateRulesOfIpGroupRequest {
  /**
   * @public
   * <p>The identifier of the group.</p>
   */
  GroupId: string | undefined;

  /**
   * @public
   * <p>One or more rules.</p>
   */
  UserRules: IpRuleItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateRulesOfIpGroupResult {}

/**
 * @public
 */
export interface UpdateWorkspaceBundleRequest {
  /**
   * @public
   * <p>The identifier of the bundle.</p>
   */
  BundleId?: string;

  /**
   * @public
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;
}

/**
 * @public
 */
export interface UpdateWorkspaceBundleResult {}

/**
 * @public
 */
export interface UpdateWorkspaceImagePermissionRequest {
  /**
   * @public
   * <p>The identifier of the image.</p>
   */
  ImageId: string | undefined;

  /**
   * @public
   * <p>The permission to copy the image. This permission can be revoked only after an image has
   *          been shared.</p>
   */
  AllowCopyImage: boolean | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services account to share or unshare the image
   *          with.</p>
   *          <important>
   *             <p>Before sharing the image, confirm that you are sharing to the correct Amazon Web Services account ID.</p>
   *          </important>
   */
  SharedAccountId: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceImagePermissionResult {}
