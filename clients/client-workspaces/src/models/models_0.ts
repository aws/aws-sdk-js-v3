// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { WorkSpacesServiceException as __BaseException } from "./WorkSpacesServiceException";

/**
 * @public
 */
export interface AcceptAccountLinkInvitationRequest {
  /**
   * <p>The identifier of the account link.</p>
   * @public
   */
  LinkId: string | undefined;

  /**
   * <p>A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 * @enum
 */
export const AccountLinkStatusEnum = {
  LINKED: "LINKED",
  LINKING_FAILED: "LINKING_FAILED",
  LINK_NOT_FOUND: "LINK_NOT_FOUND",
  PENDING_ACCEPTANCE_BY_TARGET_ACCOUNT: "PENDING_ACCEPTANCE_BY_TARGET_ACCOUNT",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type AccountLinkStatusEnum = (typeof AccountLinkStatusEnum)[keyof typeof AccountLinkStatusEnum];

/**
 * <p>Information about about the account link.</p>
 * @public
 */
export interface AccountLink {
  /**
   * <p>The identifier of the account link.</p>
   * @public
   */
  AccountLinkId?: string;

  /**
   * <p>The status of the account link.</p>
   * @public
   */
  AccountLinkStatus?: AccountLinkStatusEnum;

  /**
   * <p>The identifier of the source account.</p>
   * @public
   */
  SourceAccountId?: string;

  /**
   * <p>The identifier of the target account.</p>
   * @public
   */
  TargetAccountId?: string;
}

/**
 * @public
 */
export interface AcceptAccountLinkInvitationResult {
  /**
   * <p>Information about the account link.</p>
   * @public
   */
  AccountLink?: AccountLink;
}

/**
 * <p>The user is not authorized to access a resource.</p>
 * @public
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
 * <p>The <code>TargetAccountId</code> is already linked or invited.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p>Unexpected server error occured.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that could not be found.</p>
   * @public
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
 * <p>You either haven't provided a <code>TargetAccountId</code> or
 *          are using the same value for <code>TargetAccountId</code> and <code>SourceAccountId</code>.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
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
 * <p>Describes a modification to the configuration of Bring Your Own License (BYOL) for the
 *          specified account. </p>
 * @public
 */
export interface AccountModification {
  /**
   * <p>The state of the modification to the configuration of BYOL.</p>
   * @public
   */
  ModificationState?: DedicatedTenancyModificationStateEnum;

  /**
   * <p>The status of BYOL (whether BYOL is being enabled or disabled).</p>
   * @public
   */
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum;

  /**
   * <p>The IP address range, specified as an IPv4 CIDR block, for the management network
   *          interface used for the account.</p>
   * @public
   */
  DedicatedTenancyManagementCidrRange?: string;

  /**
   * <p>The timestamp when the modification of the BYOL configuration was started.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The error code that is returned if the configuration of BYOL cannot be modified.</p>
   * @public
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the configuration of BYOL cannot be
   *          modified.</p>
   * @public
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
 * <p>The specified application is not supported.</p>
 * @public
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
 * <p>Indicates the reason that the association deployment failed, including the error code and error message.</p>
 * @public
 */
export interface AssociationStateReason {
  /**
   * <p>The error code of the association deployment failure.</p>
   * @public
   */
  ErrorCode?: AssociationErrorCode;

  /**
   * <p>The error message of the association deployment failure.</p>
   * @public
   */
  ErrorMessage?: string;
}

/**
 * <p>Describes the association between an application and an application resource.</p>
 * @public
 */
export interface ApplicationResourceAssociation {
  /**
   * <p>The identifier of the application.</p>
   * @public
   */
  ApplicationId?: string;

  /**
   * <p>The identifier of the associated resource.</p>
   * @public
   */
  AssociatedResourceId?: string;

  /**
   * <p>The resource type of the associated resource.</p>
   * @public
   */
  AssociatedResourceType?: ApplicationAssociatedResourceType;

  /**
   * <p>The time the association was created.</p>
   * @public
   */
  Created?: Date;

  /**
   * <p>The time the association status was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The status of the application resource association.</p>
   * @public
   */
  State?: AssociationState;

  /**
   * <p>The reason the association deployment failed.</p>
   * @public
   */
  StateReason?: AssociationStateReason;
}

/**
 * @public
 */
export interface AssociateConnectionAliasRequest {
  /**
   * <p>The identifier of the connection alias.</p>
   * @public
   */
  AliasId: string | undefined;

  /**
   * <p>The identifier of the directory to associate the connection alias with.</p>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface AssociateConnectionAliasResult {
  /**
   * <p>The identifier of the connection alias association. You use the connection identifier in
   *          the DNS TXT record when you're configuring your DNS routing policies. </p>
   * @public
   */
  ConnectionIdentifier?: string;
}

/**
 * <p>One or more parameter values are not valid.</p>
 * @public
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
 * <p>The state of the resource is not valid for this operation.</p>
 * @public
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
 * <p>This operation is not supported.</p>
 * @public
 */
export class OperationNotSupportedException extends __BaseException {
  readonly name: "OperationNotSupportedException" = "OperationNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The exception error reason.</p>
   * @public
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
 * <p>The resource is associated with a directory.</p>
 * @public
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
 */
export interface AssociateIpGroupsRequest {
  /**
   * <p>The identifier of the directory.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifiers of one or more IP access control groups.</p>
   * @public
   */
  GroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateIpGroupsResult {}

/**
 * <p>Your resource limits have been exceeded.</p>
 * @public
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
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The identifier of the application.</p>
   * @public
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
 * <p>Describes the association between an application and a WorkSpace resource.</p>
 * @public
 */
export interface WorkspaceResourceAssociation {
  /**
   * <p>The identifier of the associated resource.</p>
   * @public
   */
  AssociatedResourceId?: string;

  /**
   * <p>The resource types of the associated resource.</p>
   * @public
   */
  AssociatedResourceType?: WorkSpaceAssociatedResourceType;

  /**
   * <p>The time the association is created.</p>
   * @public
   */
  Created?: Date;

  /**
   * <p>The time the association status was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The status of the WorkSpace resource association.</p>
   * @public
   */
  State?: AssociationState;

  /**
   * <p>The reason the association deployment failed.</p>
   * @public
   */
  StateReason?: AssociationStateReason;

  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId?: string;
}

/**
 * @public
 */
export interface AssociateWorkspaceApplicationResult {
  /**
   * <p>Information about the association between the specified WorkSpace and the specified application.</p>
   * @public
   */
  Association?: WorkspaceResourceAssociation;
}

/**
 * <p>The compute type of the WorkSpace is not compatible with the application.</p>
 * @public
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
 * <p>The specified application is not compatible with the resource.</p>
 * @public
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
 * <p>The operating system of the WorkSpace is not compatible with the application.</p>
 * @public
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
 * <p>The specified resource already exists.</p>
 * @public
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
 * <p>The specified resource is currently in use.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that is in use.</p>
   * @public
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
 * <p>Describes a rule for an IP access control group.</p>
 * @public
 */
export interface IpRuleItem {
  /**
   * <p>The IP address range, in CIDR notation.</p>
   * @public
   */
  ipRule?: string;

  /**
   * <p>The description.</p>
   * @public
   */
  ruleDesc?: string;
}

/**
 * @public
 */
export interface AuthorizeIpRulesRequest {
  /**
   * <p>The identifier of the group.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>The rules to add to the group.</p>
   * @public
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
 * <p>Describes the compute type of the bundle.</p>
 * @public
 */
export interface ComputeType {
  /**
   * <p>The compute type.</p>
   * @public
   */
  Name?: Compute;
}

/**
 * <p>Describes the root volume for a WorkSpace bundle.</p>
 * @public
 */
export interface RootStorage {
  /**
   * <p>The size of the root volume.</p>
   * @public
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
 * <p>Describes the user volume for a WorkSpace bundle.</p>
 * @public
 */
export interface UserStorage {
  /**
   * <p>The size of the user volume.</p>
   * @public
   */
  Capacity?: string;
}

/**
 * <p>Describes a WorkSpace bundle.</p>
 * @public
 */
export interface WorkspaceBundle {
  /**
   * <p>The identifier of the bundle.</p>
   * @public
   */
  BundleId?: string;

  /**
   * <p>The name of the bundle.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The owner of the bundle. This is the account identifier of the owner, or
   *          <code>AMAZON</code> if the bundle is provided by Amazon Web Services.</p>
   * @public
   */
  Owner?: string;

  /**
   * <p>The description of the bundle.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The identifier of the image that was used to create the bundle.</p>
   * @public
   */
  ImageId?: string;

  /**
   * <p>The size of the root volume.</p>
   * @public
   */
  RootStorage?: RootStorage;

  /**
   * <p>The size of the user volume.</p>
   * @public
   */
  UserStorage?: UserStorage;

  /**
   * <p>The compute type of the bundle. For more information, see
   *          <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces Bundles</a>.</p>
   * @public
   */
  ComputeType?: ComputeType;

  /**
   * <p>The last time that the bundle was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The time when the bundle was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The state of the WorkSpace bundle.</p>
   * @public
   */
  State?: WorkspaceBundleState;

  /**
   * <p>The type of WorkSpace bundle.</p>
   * @public
   */
  BundleType?: BundleType;
}

/**
 * <p>Describes the association between an application and a bundle resource.</p>
 * @public
 */
export interface BundleResourceAssociation {
  /**
   * <p>The identifier of the associated resource.</p>
   * @public
   */
  AssociatedResourceId?: string;

  /**
   * <p>The resource type of the associated resources.</p>
   * @public
   */
  AssociatedResourceType?: BundleAssociatedResourceType;

  /**
   * <p>The identifier of the bundle.</p>
   * @public
   */
  BundleId?: string;

  /**
   * <p>The time the association is created.</p>
   * @public
   */
  Created?: Date;

  /**
   * <p>The time the association status was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The status of the bundle resource association.</p>
   * @public
   */
  State?: AssociationState;

  /**
   * <p>The reason the association deployment failed.</p>
   * @public
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
 * <p>Describes the properties of the certificate-based authentication you want to use
 *          with your WorkSpaces.</p>
 * @public
 */
export interface CertificateBasedAuthProperties {
  /**
   * <p>The status of the certificate-based authentication properties.</p>
   * @public
   */
  Status?: CertificateBasedAuthStatusEnum;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource.</p>
   * @public
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
 * <p>Describes an Amazon WorkSpaces client.</p>
 * @public
 */
export interface ClientProperties {
  /**
   * <p>Specifies whether users can cache their credentials on the Amazon WorkSpaces client.
   *          When enabled, users can choose to reconnect to their WorkSpaces without re-entering their
   *          credentials. </p>
   * @public
   */
  ReconnectEnabled?: ReconnectEnum;

  /**
   * <p>Specifies whether users can upload diagnostic log files of Amazon WorkSpaces client directly to
   *          WorkSpaces to troubleshoot issues when using the WorkSpaces client.
   *          When enabled, the log files will be sent to WorkSpaces automatically and will be applied to all
   *          users in the specified directory.</p>
   * @public
   */
  LogUploadEnabled?: LogUploadEnum;
}

/**
 * <p>Information about the Amazon WorkSpaces client.</p>
 * @public
 */
export interface ClientPropertiesResult {
  /**
   * <p>The resource identifier, in the form of a directory ID.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>Information about the Amazon WorkSpaces client.</p>
   * @public
   */
  ClientProperties?: ClientProperties;
}

/**
 * <p>Describes an Amazon Connect client add-in.</p>
 * @public
 */
export interface ConnectClientAddIn {
  /**
   * <p>The client add-in identifier.</p>
   * @public
   */
  AddInId?: string;

  /**
   * <p>The directory identifier for which the client add-in is configured.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The name of the client add in.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The endpoint URL of the client add-in.</p>
   * @public
   */
  URL?: string;
}

/**
 * <p>Describes a connection alias association that is used for cross-Region redirection. For
 *          more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 * @public
 */
export interface ConnectionAliasAssociation {
  /**
   * <p>The association status of the connection alias.</p>
   * @public
   */
  AssociationStatus?: AssociationStatus;

  /**
   * <p>The identifier of the Amazon Web Services account that associated the connection alias
   *          with a directory.</p>
   * @public
   */
  AssociatedAccountId?: string;

  /**
   * <p>The identifier of the directory associated with a connection alias.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The identifier of the connection alias association. You use the connection identifier in
   *          the DNS TXT record when you're configuring your DNS routing policies.</p>
   * @public
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
 * <p>Describes a connection alias. Connection aliases are used for cross-Region redirection.
 *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 * @public
 */
export interface ConnectionAlias {
  /**
   * <p>The connection string specified for the connection alias. The connection string must be
   *          in the form of a fully qualified domain name (FQDN), such as
   *          <code>www.example.com</code>.</p>
   * @public
   */
  ConnectionString?: string;

  /**
   * <p>The identifier of the connection alias.</p>
   * @public
   */
  AliasId?: string;

  /**
   * <p>The current state of the connection alias.</p>
   * @public
   */
  State?: ConnectionAliasState;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the connection alias.</p>
   * @public
   */
  OwnerAccountId?: string;

  /**
   * <p>The association status of the connection alias.</p>
   * @public
   */
  Associations?: ConnectionAliasAssociation[];
}

/**
 * <p>Describes the permissions for a connection alias. Connection aliases are used for
 *          cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 * @public
 */
export interface ConnectionAliasPermission {
  /**
   * <p>The identifier of the Amazon Web Services account that the connection alias is shared
   *          with.</p>
   * @public
   */
  SharedAccountId: string | undefined;

  /**
   * <p>Indicates whether the specified Amazon Web Services account is allowed to associate the
   *          connection alias with a directory.</p>
   * @public
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
 * <p>Describes a tag.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  Value?: string;
}

/**
 * @public
 */
export interface CopyWorkspaceImageRequest {
  /**
   * <p>The name of the image.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the image.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The identifier of the source image.</p>
   * @public
   */
  SourceImageId: string | undefined;

  /**
   * <p>The identifier of the source Region.</p>
   * @public
   */
  SourceRegion: string | undefined;

  /**
   * <p>The tags for the image.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CopyWorkspaceImageResult {
  /**
   * <p>The identifier of the image.</p>
   * @public
   */
  ImageId?: string;
}

/**
 * <p>The specified resource is not available.</p>
 * @public
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier of the resource that is not available.</p>
   * @public
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
export interface CreateAccountLinkInvitationRequest {
  /**
   * <p>The identifier of the target account.</p>
   * @public
   */
  TargetAccountId: string | undefined;

  /**
   * <p>A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateAccountLinkInvitationResult {
  /**
   * <p>Information about the account link.</p>
   * @public
   */
  AccountLink?: AccountLink;
}

/**
 * @public
 */
export interface CreateConnectClientAddInRequest {
  /**
   * <p>The directory identifier for which to configure the client add-in.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The name of the client add-in.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The endpoint URL of the Amazon Connect client add-in.</p>
   * @public
   */
  URL: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectClientAddInResult {
  /**
   * <p>The client add-in identifier.</p>
   * @public
   */
  AddInId?: string;
}

/**
 * <p>The resource could not be created.</p>
 * @public
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
   * <p>A connection string in the form of a fully qualified domain name (FQDN), such as
   *             <code>www.example.com</code>.</p>
   *          <important>
   *             <p>After you create a connection string, it is always associated to your Amazon Web Services account. You cannot recreate the same connection string with a different
   *             account, even if you delete all instances of it from the original account. The
   *             connection string is globally reserved for your account.</p>
   *          </important>
   * @public
   */
  ConnectionString: string | undefined;

  /**
   * <p>The tags to associate with the connection alias.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateConnectionAliasResult {
  /**
   * <p>The identifier of the connection alias.</p>
   * @public
   */
  AliasId?: string;
}

/**
 * @public
 */
export interface CreateIpGroupRequest {
  /**
   * <p>The name of the group.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The description of the group.</p>
   * @public
   */
  GroupDesc?: string;

  /**
   * <p>The rules to add to the group.</p>
   * @public
   */
  UserRules?: IpRuleItem[];

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateIpGroupResult {
  /**
   * <p>The identifier of the group.</p>
   * @public
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
 * <p>Describes a standby WorkSpace.</p>
 * @public
 */
export interface StandbyWorkspace {
  /**
   * <p>The identifier of the standby WorkSpace.</p>
   * @public
   */
  PrimaryWorkspaceId: string | undefined;

  /**
   * <p>The volume encryption key of the standby WorkSpace.</p>
   * @public
   */
  VolumeEncryptionKey?: string;

  /**
   * <p>The identifier of the directory for the standby WorkSpace.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The tags associated with the standby WorkSpace.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether data replication is enabled, and if enabled, the type of data replication.</p>
   * @public
   */
  DataReplication?: DataReplication;
}

/**
 * @public
 */
export interface CreateStandbyWorkspacesRequest {
  /**
   * <p>The Region of the primary WorkSpace.</p>
   * @public
   */
  PrimaryRegion: string | undefined;

  /**
   * <p>Information about the standby WorkSpace to be created.</p>
   * @public
   */
  StandbyWorkspaces: StandbyWorkspace[] | undefined;
}

/**
 * <p>Describes the standby WorkSpace that could not be created.</p>
 * @public
 */
export interface FailedCreateStandbyWorkspacesRequest {
  /**
   * <p>Information about the standby WorkSpace that could not be created.</p>
   * @public
   */
  StandbyWorkspaceRequest?: StandbyWorkspace;

  /**
   * <p>The error code that is returned if the standby WorkSpace could not be created.</p>
   * @public
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the standby WorkSpace could not be created.</p>
   * @public
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
 * <p>Information about the standby WorkSpace.</p>
 * @public
 */
export interface PendingCreateStandbyWorkspacesRequest {
  /**
   * <p>Describes the standby WorkSpace that was created.</p>
   *          <p>Because this operation is asynchronous, the identifier returned is not immediately
   *          available for use with other operations. For example, if you call
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html">
   *             DescribeWorkspaces</a>
   *          before the WorkSpace is created, the information returned can be incomplete. </p>
   * @public
   */
  UserName?: string;

  /**
   * <p>The identifier of the directory for the standby WorkSpace.</p>
   * @public
   */
  DirectoryId?: string;

  /**
   * <p>The operational state of the standby WorkSpace.</p>
   * @public
   */
  State?: WorkspaceState;

  /**
   * <p>The identifier of the standby WorkSpace.</p>
   * @public
   */
  WorkspaceId?: string;
}

/**
 * @public
 */
export interface CreateStandbyWorkspacesResult {
  /**
   * <p>Information about the standby WorkSpace that could not be created. </p>
   * @public
   */
  FailedStandbyRequests?: FailedCreateStandbyWorkspacesRequest[];

  /**
   * <p>Information about the standby WorkSpace that was created.</p>
   * @public
   */
  PendingStandbyRequests?: PendingCreateStandbyWorkspacesRequest[];
}

/**
 * @public
 */
export interface CreateTagsRequest {
  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, IP access control groups, and connection
   *          aliases.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   * @public
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
   * <p>The name of the new updated WorkSpace image.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of whether updates for the WorkSpace image are available.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The identifier of the source WorkSpace image.</p>
   * @public
   */
  SourceImageId: string | undefined;

  /**
   * <p>The tags that you want to add to the new updated WorkSpace image.</p>
   *          <note>
   *             <p>To add tags at the same time when you're creating the updated image, you must create
   *             an IAM policy that grants your IAM user permissions to use
   *                <code>workspaces:CreateTags</code>. </p>
   *          </note>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateUpdatedWorkspaceImageResult {
  /**
   * <p>The identifier of the new updated WorkSpace image.</p>
   * @public
   */
  ImageId?: string;
}

/**
 * @public
 */
export interface CreateWorkspaceBundleRequest {
  /**
   * <p>The name of the bundle.</p>
   * @public
   */
  BundleName: string | undefined;

  /**
   * <p>The description of the bundle.</p>
   * @public
   */
  BundleDescription: string | undefined;

  /**
   * <p>The identifier of the image that is used to create the bundle.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>Describes the compute type of the bundle.</p>
   * @public
   */
  ComputeType: ComputeType | undefined;

  /**
   * <p>Describes the user volume for a WorkSpace bundle.</p>
   * @public
   */
  UserStorage: UserStorage | undefined;

  /**
   * <p>Describes the root volume for a WorkSpace bundle.</p>
   * @public
   */
  RootStorage?: RootStorage;

  /**
   * <p>The tags associated with the bundle.</p>
   *          <note>
   *             <p>To add tags at the same time when you're creating the bundle, you must create an IAM policy that
   *             grants your IAM user permissions to use <code>workspaces:CreateTags</code>. </p>
   *          </note>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateWorkspaceBundleResult {
  /**
   * <p>Describes a WorkSpace bundle.</p>
   * @public
   */
  WorkspaceBundle?: WorkspaceBundle;
}

/**
 * @public
 */
export interface CreateWorkspaceImageRequest {
  /**
   * <p>The name of the new WorkSpace image.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the new WorkSpace image.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The identifier of the source WorkSpace</p>
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The tags that you want to add to the new WorkSpace image.
   *          To add tags when you're creating the image, you must create an IAM policy that grants
   *          your IAM user permission to use <code>workspaces:CreateTags</code>.</p>
   * @public
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
 * <p>The operating system that the image is running.</p>
 * @public
 */
export interface OperatingSystem {
  /**
   * <p>The operating system.</p>
   * @public
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
   * <p>The identifier of the new WorkSpace image.</p>
   * @public
   */
  ImageId?: string;

  /**
   * <p>The name of the image.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the image.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The operating system that the image is running.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>The availability status of the image.</p>
   * @public
   */
  State?: WorkspaceImageState;

  /**
   * <p>Specifies whether the image is running on dedicated hardware.
   *          When Bring Your Own License (BYOL) is enabled, this value is set
   *          to DEDICATED. For more information, see
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.htm">
   *             Bring Your Own Windows Desktop Images.</a>.</p>
   * @public
   */
  RequiredTenancy?: WorkspaceImageRequiredTenancy;

  /**
   * <p>The date when the image was created.</p>
   * @public
   */
  Created?: Date;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the image.</p>
   * @public
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
 * <p>Describes a WorkSpace.</p>
 * @public
 */
export interface WorkspaceProperties {
  /**
   * <p>The running mode. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html">Manage the WorkSpace Running
   *          Mode</a>.</p>
   *          <note>
   *             <p>The <code>MANUAL</code> value is only supported by Amazon WorkSpaces Core. Contact
   *             your account team to be allow-listed to use this value. For more information, see
   *             <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p>
   *          </note>
   * @public
   */
  RunningMode?: RunningMode;

  /**
   * <p>The time after a user logs off when WorkSpaces are automatically stopped. Configured in
   *          60-minute intervals.</p>
   * @public
   */
  RunningModeAutoStopTimeoutInMinutes?: number;

  /**
   * <p>The size of the root volume. For important information about how to modify the size of
   *          the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a
   *          WorkSpace</a>.</p>
   * @public
   */
  RootVolumeSizeGib?: number;

  /**
   * <p>The size of the user storage. For important information about how to modify the size of
   *          the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a
   *          WorkSpace</a>.</p>
   * @public
   */
  UserVolumeSizeGib?: number;

  /**
   * <p>The compute type. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces
   *          Bundles</a>.</p>
   * @public
   */
  ComputeTypeName?: Compute;

  /**
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
   * @public
   */
  Protocols?: Protocol[];

  /**
   * <p>The name of the operating system.</p>
   * @public
   */
  OperatingSystemName?: OperatingSystemName;
}

/**
 * <p>Describes the information used to create a WorkSpace.</p>
 * @public
 */
export interface WorkspaceRequest {
  /**
   * <p>The identifier of the Directory Service directory for the WorkSpace. You can use <a>DescribeWorkspaceDirectories</a> to list the available directories.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The user name of the user for the WorkSpace. This user name must exist in the Directory Service directory for the WorkSpace.</p>
   *          <p>The reserved keyword, <code>[UNDEFINED]</code>, is used when creating user-decoupled WorkSpaces.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The identifier of the bundle for the WorkSpace. You can use <a>DescribeWorkspaceBundles</a> to list the available bundles.</p>
   * @public
   */
  BundleId: string | undefined;

  /**
   * <p>The ARN of the symmetric KMS key used to encrypt data stored on your WorkSpace.
   *          Amazon WorkSpaces does not support asymmetric KMS keys.</p>
   * @public
   */
  VolumeEncryptionKey?: string;

  /**
   * <p>Indicates whether the data stored on the user volume is encrypted.</p>
   * @public
   */
  UserVolumeEncryptionEnabled?: boolean;

  /**
   * <p>Indicates whether the data stored on the root volume is encrypted.</p>
   * @public
   */
  RootVolumeEncryptionEnabled?: boolean;

  /**
   * <p>The WorkSpace properties.</p>
   * @public
   */
  WorkspaceProperties?: WorkspaceProperties;

  /**
   * <p>The tags for the WorkSpace.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The name of the user-decoupled WorkSpace.</p>
   * @public
   */
  WorkspaceName?: string;
}

/**
 * @public
 */
export interface CreateWorkspacesRequest {
  /**
   * <p>The WorkSpaces to create. You can specify up to 25 WorkSpaces.</p>
   * @public
   */
  Workspaces: WorkspaceRequest[] | undefined;
}

/**
 * <p>Describes a WorkSpace that cannot be created.</p>
 * @public
 */
export interface FailedCreateWorkspaceRequest {
  /**
   * <p>Information about the WorkSpace.</p>
   * @public
   */
  WorkspaceRequest?: WorkspaceRequest;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be created.</p>
   * @public
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          created.</p>
   * @public
   */
  ErrorMessage?: string;
}

/**
 * <p>Describes the data replication settings.</p>
 * @public
 */
export interface DataReplicationSettings {
  /**
   * <p>Indicates whether data replication is enabled, and if enabled, the type of data replication.</p>
   * @public
   */
  DataReplication?: DataReplication;

  /**
   * <p>The date and time at which the last successful snapshot was taken of the
   *          primary WorkSpace used for replicating data.</p>
   * @public
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
 * <p>Describes a WorkSpace modification.</p>
 * @public
 */
export interface ModificationState {
  /**
   * <p>The resource.</p>
   * @public
   */
  Resource?: ModificationResourceEnum;

  /**
   * <p>The modification state.</p>
   * @public
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
 * <p>Describes the related WorkSpace. The related WorkSpace could be a standby WorkSpace or
 *          primary WorkSpace related to the specified WorkSpace.</p>
 * @public
 */
export interface RelatedWorkspaceProperties {
  /**
   * <p>The identifier of the related WorkSpace.</p>
   * @public
   */
  WorkspaceId?: string;

  /**
   * <p>The Region of the related WorkSpace.</p>
   * @public
   */
  Region?: string;

  /**
   * <p>Indicates the state of the WorkSpace.</p>
   * @public
   */
  State?: WorkspaceState;

  /**
   * <p>Indicates the type of WorkSpace.</p>
   * @public
   */
  Type?: StandbyWorkspaceRelationshipType;
}

/**
 * <p>Describes the properties of the related standby WorkSpaces. </p>
 * @public
 */
export interface StandbyWorkspacesProperties {
  /**
   * <p>The identifier of the standby WorkSpace</p>
   * @public
   */
  StandbyWorkspaceId?: string;

  /**
   * <p>Indicates whether data replication is enabled, and if enabled, the type of data replication.</p>
   * @public
   */
  DataReplication?: DataReplication;

  /**
   * <p>The date and time at which the last successful snapshot was taken of the
   *          primary WorkSpace used for replicating data.</p>
   * @public
   */
  RecoverySnapshotTime?: Date;
}

/**
 * <p>Describes a WorkSpace.</p>
 * @public
 */
export interface Workspace {
  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId?: string;

  /**
   * <p>The identifier of the Directory Service directory for the WorkSpace.</p>
   * @public
   */
  DirectoryId?: string;

  /**
   * <p>The user for the WorkSpace.</p>
   * @public
   */
  UserName?: string;

  /**
   * <p>The IP address of the WorkSpace.</p>
   * @public
   */
  IpAddress?: string;

  /**
   * <p>The operational state of the WorkSpace.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – The WorkSpace is in a waiting state (for example, the WorkSpace is being created).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> – The WorkSpace is running and has passed the health checks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMPAIRED</code> – Refer to <code>UNHEALTHY</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNHEALTHY</code> – The WorkSpace is not responding to health checks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REBOOTING</code> – The WorkSpace is being rebooted (restarted).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STARTING</code> – The WorkSpace is starting up and health checks are being run.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REBUILDING</code> – The WorkSpace is being rebuilt.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESTORING</code> – The WorkSpace is being restored.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MAINTENANCE</code> – The WorkSpace is undergoing scheduled maintenance by Amazon Web Services.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADMIN_MAINTENANCE</code>  – The WorkSpace is undergoing maintenance by the WorkSpaces administrator.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERMINATING</code> – The WorkSpace is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERMINATED</code> – The WorkSpace has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUSPENDED</code> – The WorkSpace has been suspended for image creation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> – The WorkSpace is undergoing an update.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPING</code> – The WorkSpace is being stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code> – The WorkSpace has been stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR </code> – The WorkSpace is an error state (for example, an error occurred during startup).</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned only
   *             briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely
   *             returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using
   *                <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html">
   *                DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace
   *             has been successfully terminated.</p>
   *          </note>
   * @public
   */
  State?: WorkspaceState;

  /**
   * <p>The identifier of the bundle used to create the WorkSpace.</p>
   * @public
   */
  BundleId?: string;

  /**
   * <p>The identifier of the subnet for the WorkSpace.</p>
   * @public
   */
  SubnetId?: string;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          created.</p>
   * @public
   */
  ErrorMessage?: string;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be created.</p>
   * @public
   */
  ErrorCode?: string;

  /**
   * <p>The name of the WorkSpace, as seen by the operating system. The format of this name
   *          varies. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/launch-workspaces-tutorials.html"> Launch a
   *             WorkSpace</a>. </p>
   * @public
   */
  ComputerName?: string;

  /**
   * <p>The ARN of the symmetric KMS key used to encrypt data stored on your WorkSpace.
   *          Amazon WorkSpaces does not support asymmetric KMS keys.</p>
   * @public
   */
  VolumeEncryptionKey?: string;

  /**
   * <p>Indicates whether the data stored on the user volume is encrypted.</p>
   * @public
   */
  UserVolumeEncryptionEnabled?: boolean;

  /**
   * <p>Indicates whether the data stored on the root volume is encrypted.</p>
   * @public
   */
  RootVolumeEncryptionEnabled?: boolean;

  /**
   * <p>The name of the user-decoupled WorkSpace.</p>
   * @public
   */
  WorkspaceName?: string;

  /**
   * <p>The properties of the WorkSpace.</p>
   * @public
   */
  WorkspaceProperties?: WorkspaceProperties;

  /**
   * <p>The modification states of the WorkSpace.</p>
   * @public
   */
  ModificationStates?: ModificationState[];

  /**
   * <p>The standby WorkSpace or primary WorkSpace related to the specified WorkSpace.</p>
   * @public
   */
  RelatedWorkspaces?: RelatedWorkspaceProperties[];

  /**
   * <p>Indicates the settings of the data replication.</p>
   * @public
   */
  DataReplicationSettings?: DataReplicationSettings;

  /**
   * <p>The properties of the standby WorkSpace</p>
   * @public
   */
  StandbyWorkspacesProperties?: StandbyWorkspacesProperties[];
}

/**
 * @public
 */
export interface CreateWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be created.</p>
   * @public
   */
  FailedRequests?: FailedCreateWorkspaceRequest[];

  /**
   * <p>Information about the WorkSpaces that were created.</p>
   *          <p>Because this operation is asynchronous, the identifier returned is not immediately
   *          available for use with other operations. For example, if you call <a>DescribeWorkspaces</a> before the WorkSpace is created, the information returned
   *          can be incomplete.</p>
   * @public
   */
  PendingRequests?: Workspace[];
}

/**
 * @public
 * @enum
 */
export const DedicatedTenancyAccountType = {
  SOURCE_ACCOUNT: "SOURCE_ACCOUNT",
  TARGET_ACCOUNT: "TARGET_ACCOUNT",
} as const;

/**
 * @public
 */
export type DedicatedTenancyAccountType =
  (typeof DedicatedTenancyAccountType)[keyof typeof DedicatedTenancyAccountType];

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
 * <p>Returns default client branding attributes that were imported. These attributes display
 *          on the client login screen.</p>
 *          <important>
 *             <p>Client branding attributes are public facing. Ensure that you don't include sensitive
 *             information.</p>
 *          </important>
 * @public
 */
export interface DefaultClientBrandingAttributes {
  /**
   * <p>The logo. The only image format accepted is a binary data object that is converted from a <code>.png</code> file.</p>
   * @public
   */
  LogoUrl?: string;

  /**
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
   * @public
   */
  SupportEmail?: string;

  /**
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
   * @public
   */
  SupportLink?: string;

  /**
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   * @public
   */
  ForgotPasswordLink?: string;

  /**
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *          <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em,
   *             i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.</p>
   * @public
   */
  LoginMessage?: Record<string, string>;
}

/**
 * <p>The default client branding attributes to be imported. These attributes display on the
 *          client login screen.</p>
 *          <important>
 *             <p>Client branding attributes are public facing. Ensure that you do not include
 *             sensitive information.</p>
 *          </important>
 * @public
 */
export interface DefaultImportClientBrandingAttributes {
  /**
   * <p>The logo. The only image format accepted is a binary data object that is converted from a <code>.png</code> file.</p>
   * @public
   */
  Logo?: Uint8Array;

  /**
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
   * @public
   */
  SupportEmail?: string;

  /**
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
   * @public
   */
  SupportLink?: string;

  /**
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   * @public
   */
  ForgotPasswordLink?: string;

  /**
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *          <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em,
   *             i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.</p>
   * @public
   */
  LoginMessage?: Record<string, string>;
}

/**
 * <p>Describes the default values that are used to create WorkSpaces. For more information,
 *          see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory
 *             Details for Your WorkSpaces</a>.</p>
 * @public
 */
export interface DefaultWorkspaceCreationProperties {
  /**
   * <p>Specifies whether the directory is enabled for Amazon WorkDocs.</p>
   * @public
   */
  EnableWorkDocs?: boolean;

  /**
   * <p>Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in
   *          this directory by default. If enabled, the Elastic public IP address allows outbound
   *          internet access from your WorkSpaces when you’re using an internet gateway in the Amazon
   *          VPC in which your WorkSpaces are located. If you're using a Network Address Translation
   *          (NAT) gateway for outbound internet access from your VPC, or if your WorkSpaces are in
   *          public subnets and you manually assign them Elastic IP addresses, you should disable this
   *          setting. This setting applies to new WorkSpaces that you launch or to existing WorkSpaces
   *          that you rebuild. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html"> Configure a VPC for
   *             Amazon WorkSpaces</a>.</p>
   * @public
   */
  EnableInternetAccess?: boolean;

  /**
   * <p>The organizational unit (OU) in the directory for the WorkSpace machine accounts.</p>
   * @public
   */
  DefaultOu?: string;

  /**
   * <p>The identifier of the default security group to apply to WorkSpaces when they are
   *          created. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-security-groups.html"> Security
   *             Groups for Your WorkSpaces</a>.</p>
   * @public
   */
  CustomSecurityGroupId?: string;

  /**
   * <p>Specifies whether WorkSpace users are local administrators on their WorkSpaces.</p>
   * @public
   */
  UserEnabledAsLocalAdministrator?: boolean;

  /**
   * <p>Specifies whether maintenance mode is enabled for WorkSpaces. For more information, see
   *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace
   *             Maintenance</a>.</p>
   * @public
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
export interface DeleteAccountLinkInvitationRequest {
  /**
   * <p>The identifier of the account link.</p>
   * @public
   */
  LinkId: string | undefined;

  /**
   * <p>A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface DeleteAccountLinkInvitationResult {
  /**
   * <p>Information about the account link.</p>
   * @public
   */
  AccountLink?: AccountLink;
}

/**
 * @public
 */
export interface DeleteClientBrandingRequest {
  /**
   * <p>The directory identifier of the WorkSpace for which you want to delete client
   *          branding.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The device type for which you want to delete client branding.</p>
   * @public
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
   * <p>The identifier of the client add-in to delete.</p>
   * @public
   */
  AddInId: string | undefined;

  /**
   * <p>The directory identifier for which the client add-in is configured.</p>
   * @public
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
   * <p>The identifier of the connection alias to delete.</p>
   * @public
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
   * <p>The identifier of the IP access control group.</p>
   * @public
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
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, IP access control groups, and connection
   *          aliases.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The tag keys.</p>
   * @public
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
   * <p>The identifier of the bundle.</p>
   * @public
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
   * <p>The identifier of the image.</p>
   * @public
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
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * <p>Indicates whether the force flag is applied for the specified WorkSpace. When the force flag is enabled,
   *          it allows previously failed deployments to be retried.</p>
   * @public
   */
  Force?: boolean;
}

/**
 * <p>Describes the WorkSpace application deployment.</p>
 * @public
 */
export interface WorkSpaceApplicationDeployment {
  /**
   * <p>The associations between the applications and the associated resources.</p>
   * @public
   */
  Associations?: WorkspaceResourceAssociation[];
}

/**
 * @public
 */
export interface DeployWorkspaceApplicationsResult {
  /**
   * <p>The list of deployed associations and information about them.</p>
   * @public
   */
  Deployment?: WorkSpaceApplicationDeployment;
}

/**
 * @public
 */
export interface DeregisterWorkspaceDirectoryRequest {
  /**
   * <p>The identifier of the directory. If any WorkSpaces are registered to this directory, you
   *          must remove them before you deregister the directory, or you will receive an
   *          OperationNotSupportedException error.</p>
   * @public
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
   * <p>The status of BYOL (whether BYOL is enabled or disabled).</p>
   * @public
   */
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum;

  /**
   * <p>The IP address range, specified as an IPv4 CIDR block, used for the management network
   *          interface.</p>
   *          <p>The management network interface is connected to a secure Amazon WorkSpaces management
   *          network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
   *          clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
   * @public
   */
  DedicatedTenancyManagementCidrRange?: string;

  /**
   * <p>The type of linked account.</p>
   * @public
   */
  DedicatedTenancyAccountType?: DedicatedTenancyAccountType;
}

/**
 * @public
 */
export interface DescribeAccountModificationsRequest {
  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeAccountModificationsResult {
  /**
   * <p>The list of modifications to the configuration of BYOL.</p>
   * @public
   */
  AccountModifications?: AccountModification[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeApplicationAssociationsRequest {
  /**
   * <p>The maximum number of associations to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The identifier of the specified application.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The resource type of the associated resources.</p>
   * @public
   */
  AssociatedResourceTypes: ApplicationAssociatedResourceType[] | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationAssociationsResult {
  /**
   * <p>List of associations and information about them.</p>
   * @public
   */
  Associations?: ApplicationResourceAssociation[];

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.</p>
   * @public
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
   * <p>The identifiers of one or more applications.</p>
   * @public
   */
  ApplicationIds?: string[];

  /**
   * <p>The compute types supported by the applications.</p>
   * @public
   */
  ComputeTypeNames?: Compute[];

  /**
   * <p>The license availability for the applications.</p>
   * @public
   */
  LicenseType?: WorkSpaceApplicationLicenseType;

  /**
   * <p>The operating systems supported by the applications.</p>
   * @public
   */
  OperatingSystemNames?: OperatingSystemName[];

  /**
   * <p>The owner of the applications.</p>
   * @public
   */
  Owner?: string;

  /**
   * <p>The maximum number of applications to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.</p>
   * @public
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
 * <p>Describes the WorkSpace application.</p>
 * @public
 */
export interface WorkSpaceApplication {
  /**
   * <p>The identifier of the application.</p>
   * @public
   */
  ApplicationId?: string;

  /**
   * <p>The time the application is created.</p>
   * @public
   */
  Created?: Date;

  /**
   * <p>The description of the WorkSpace application.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The license availability for the applications.</p>
   * @public
   */
  LicenseType?: WorkSpaceApplicationLicenseType;

  /**
   * <p>The name of the WorkSpace application.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The owner of the WorkSpace application.</p>
   * @public
   */
  Owner?: string;

  /**
   * <p>The status of WorkSpace application.</p>
   * @public
   */
  State?: WorkSpaceApplicationState;

  /**
   * <p>The supported compute types of the WorkSpace application.</p>
   * @public
   */
  SupportedComputeTypeNames?: Compute[];

  /**
   * <p>The supported operating systems of the WorkSpace application.</p>
   * @public
   */
  SupportedOperatingSystemNames?: OperatingSystemName[];
}

/**
 * @public
 */
export interface DescribeApplicationsResult {
  /**
   * <p>List of information about the specified applications.</p>
   * @public
   */
  Applications?: WorkSpaceApplication[];

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeBundleAssociationsRequest {
  /**
   * <p>The identifier of the bundle.</p>
   * @public
   */
  BundleId: string | undefined;

  /**
   * <p>The resource types of the associated resource.</p>
   * @public
   */
  AssociatedResourceTypes: BundleAssociatedResourceType[] | undefined;
}

/**
 * @public
 */
export interface DescribeBundleAssociationsResult {
  /**
   * <p>List of information about the specified associations.</p>
   * @public
   */
  Associations?: BundleResourceAssociation[];
}

/**
 * @public
 */
export interface DescribeClientBrandingRequest {
  /**
   * <p>The directory identifier of the WorkSpace for which you want to view client branding
   *          information.</p>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * <p>The client branding attributes for iOS device types. These attributes are displayed on
 *          the iOS client login screen only.</p>
 *          <important>
 *             <p>Client branding attributes are public facing. Ensure you do not include sensitive
 *             information.</p>
 *          </important>
 * @public
 */
export interface IosClientBrandingAttributes {
  /**
   * <p>The logo. This is the standard-resolution display that has a 1:1 pixel density
   *          (or @1x), where one pixel is equal
   *          to one point. The only image format accepted is a binary data object that is converted from
   *          a <code>.png</code> file.</p>
   * @public
   */
  LogoUrl?: string;

  /**
   * <p>The @2x version of the logo. This is the higher resolution display that offers a scale
   *          factor of 2.0 (or @2x). The only image format accepted is a binary data object that is
   *          converted from a <code>.png</code> file.</p>
   *          <note>
   *             <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface
   *                Guidelines</i>.</p>
   *          </note>
   * @public
   */
  Logo2xUrl?: string;

  /**
   * <p>The @3x version of the logo. This is the higher resolution display that offers a scale
   *          factor of 3.0 (or @3x).The only image format accepted is a binary data object that is
   *          converted from a <code>.png</code> file.</p>
   *          <note>
   *             <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface
   *                Guidelines</i>.</p>
   *          </note>
   * @public
   */
  Logo3xUrl?: string;

  /**
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
   * @public
   */
  SupportEmail?: string;

  /**
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
   * @public
   */
  SupportLink?: string;

  /**
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   * @public
   */
  ForgotPasswordLink?: string;

  /**
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *          <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em,
   *             i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.</p>
   * @public
   */
  LoginMessage?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeClientBrandingResult {
  /**
   * <p>The branding information for Windows devices.</p>
   * @public
   */
  DeviceTypeWindows?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information for macOS devices.</p>
   * @public
   */
  DeviceTypeOsx?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information for Android devices.</p>
   * @public
   */
  DeviceTypeAndroid?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information for iOS devices.</p>
   * @public
   */
  DeviceTypeIos?: IosClientBrandingAttributes;

  /**
   * <p>The branding information for Linux devices.</p>
   * @public
   */
  DeviceTypeLinux?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information for Web access.</p>
   * @public
   */
  DeviceTypeWeb?: DefaultClientBrandingAttributes;
}

/**
 * @public
 */
export interface DescribeClientPropertiesRequest {
  /**
   * <p>The resource identifier, in the form of directory IDs.</p>
   * @public
   */
  ResourceIds: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeClientPropertiesResult {
  /**
   * <p>Information about the specified Amazon WorkSpaces clients.</p>
   * @public
   */
  ClientPropertiesList?: ClientPropertiesResult[];
}

/**
 * @public
 */
export interface DescribeConnectClientAddInsRequest {
  /**
   * <p>The directory identifier for which the client add-in is configured.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeConnectClientAddInsResult {
  /**
   * <p>Information about client add-ins.</p>
   * @public
   */
  AddIns?: ConnectClientAddIn[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeConnectionAliasesRequest {
  /**
   * <p>The identifiers of the connection aliases to describe.</p>
   * @public
   */
  AliasIds?: string[];

  /**
   * <p>The identifier of the directory associated with the connection alias.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The maximum number of connection aliases to return.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeConnectionAliasesResult {
  /**
   * <p>Information about the specified connection aliases.</p>
   * @public
   */
  ConnectionAliases?: ConnectionAlias[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeConnectionAliasPermissionsRequest {
  /**
   * <p>The identifier of the connection alias.</p>
   * @public
   */
  AliasId: string | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeConnectionAliasPermissionsResult {
  /**
   * <p>The identifier of the connection alias.</p>
   * @public
   */
  AliasId?: string;

  /**
   * <p>The permissions associated with a connection alias.</p>
   * @public
   */
  ConnectionAliasPermissions?: ConnectionAliasPermission[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
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
   * <p>The identifier of the image.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>The resource types of the associated resource.</p>
   * @public
   */
  AssociatedResourceTypes: ImageAssociatedResourceType[] | undefined;
}

/**
 * <p>Describes the association between an application and an image resource.</p>
 * @public
 */
export interface ImageResourceAssociation {
  /**
   * <p>The identifier of the associated resource.</p>
   * @public
   */
  AssociatedResourceId?: string;

  /**
   * <p>The resource type of the associated resources.</p>
   * @public
   */
  AssociatedResourceType?: ImageAssociatedResourceType;

  /**
   * <p>The time the association is created.</p>
   * @public
   */
  Created?: Date;

  /**
   * <p>The time the association status was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The identifier of the image.</p>
   * @public
   */
  ImageId?: string;

  /**
   * <p>The status of the image resource association.</p>
   * @public
   */
  State?: AssociationState;

  /**
   * <p>The reason the association deployment failed.</p>
   * @public
   */
  StateReason?: AssociationStateReason;
}

/**
 * @public
 */
export interface DescribeImageAssociationsResult {
  /**
   * <p>List of information about the specified associations.</p>
   * @public
   */
  Associations?: ImageResourceAssociation[];
}

/**
 * @public
 */
export interface DescribeIpGroupsRequest {
  /**
   * <p>The identifiers of one or more IP access control groups.</p>
   * @public
   */
  GroupIds?: string[];

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Describes an IP access control group.</p>
 * @public
 */
export interface WorkspacesIpGroup {
  /**
   * <p>The identifier of the group.</p>
   * @public
   */
  groupId?: string;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  groupName?: string;

  /**
   * <p>The description of the group.</p>
   * @public
   */
  groupDesc?: string;

  /**
   * <p>The rules.</p>
   * @public
   */
  userRules?: IpRuleItem[];
}

/**
 * @public
 */
export interface DescribeIpGroupsResult {
  /**
   * <p>Information about the IP access control groups.</p>
   * @public
   */
  Result?: WorkspacesIpGroup[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTagsRequest {
  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, IP access control groups, and connection
   *          aliases.</p>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagsResult {
  /**
   * <p>The tags.</p>
   * @public
   */
  TagList?: Tag[];
}

/**
 * @public
 */
export interface DescribeWorkspaceAssociationsRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The resource types of the associated resources.</p>
   * @public
   */
  AssociatedResourceTypes: WorkSpaceAssociatedResourceType[] | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceAssociationsResult {
  /**
   * <p>List of information about the specified associations.</p>
   * @public
   */
  Associations?: WorkspaceResourceAssociation[];
}

/**
 * @public
 */
export interface DescribeWorkspaceBundlesRequest {
  /**
   * <p>The identifiers of the bundles. You cannot combine this parameter with any other filter.</p>
   * @public
   */
  BundleIds?: string[];

  /**
   * <p>The owner of the bundles. You cannot combine this parameter with any other filter.</p>
   *          <p>To describe the bundles provided by Amazon Web Services, specify <code>AMAZON</code>.
   *          To describe the bundles that belong to your account, don't specify a value.</p>
   * @public
   */
  Owner?: string;

  /**
   * <p>The token for the next set of results. (You received this token from a previous call.)</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeWorkspaceBundlesResult {
  /**
   * <p>Information about the bundles.</p>
   * @public
   */
  Bundles?: WorkspaceBundle[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more
   *          results to return. This token is valid for one day and must be used within that time
   *          frame.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeWorkspaceDirectoriesRequest {
  /**
   * <p>The identifiers of the directories. If the value is null, all directories are
   *          retrieved.</p>
   * @public
   */
  DirectoryIds?: string[];

  /**
   * <p>The maximum number of directories to return.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
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
 * <p>Describes the enablement status, user access URL, and relay state parameter name that
 *          are used for configuring federation with an SAML 2.0 identity provider.</p>
 * @public
 */
export interface SamlProperties {
  /**
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
   * @public
   */
  Status?: SamlStatusEnum;

  /**
   * <p>The SAML 2.0 identity provider (IdP) user access URL is the URL a user would navigate to in their web browser in
   *          order to federate from the IdP and directly access the application, without any SAML 2.0 service provider (SP)
   *          bindings.</p>
   * @public
   */
  UserAccessUrl?: string;

  /**
   * <p>The relay state parameter name supported by the SAML 2.0 identity provider (IdP). When the end user is redirected to
   *          the user access URL from the WorkSpaces client application, this relay state parameter name is appended as a query
   *          parameter to the URL along with the relay state endpoint to return the user to the client application session.</p>
   *          <p>To use SAML 2.0 authentication with WorkSpaces, the IdP must support IdP-initiated deep linking for the relay state
   *          URL. Consult your IdP documentation for more information.</p>
   * @public
   */
  RelayStateParameterName?: string;
}

/**
 * <p>Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.</p>
 * @public
 */
export interface SelfservicePermissions {
  /**
   * <p>Specifies whether users can restart their WorkSpace.</p>
   * @public
   */
  RestartWorkspace?: ReconnectEnum;

  /**
   * <p>Specifies whether users can increase the volume size of the drives on their
   *          WorkSpace.</p>
   * @public
   */
  IncreaseVolumeSize?: ReconnectEnum;

  /**
   * <p>Specifies whether users can change the compute type (bundle) for their WorkSpace.</p>
   * @public
   */
  ChangeComputeType?: ReconnectEnum;

  /**
   * <p>Specifies whether users can switch the running mode of their WorkSpace.</p>
   * @public
   */
  SwitchRunningMode?: ReconnectEnum;

  /**
   * <p>Specifies whether users can rebuild the operating system of a WorkSpace to its original
   *          state.</p>
   * @public
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
 * <p>The device types and operating systems that can be used to access a WorkSpace. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon
 *             WorkSpaces Client Network Requirements</a>.</p>
 * @public
 */
export interface WorkspaceAccessProperties {
  /**
   * <p>Indicates whether users can use Windows clients to access their WorkSpaces.</p>
   * @public
   */
  DeviceTypeWindows?: AccessPropertyValue;

  /**
   * <p>Indicates whether users can use macOS clients to access their WorkSpaces.</p>
   * @public
   */
  DeviceTypeOsx?: AccessPropertyValue;

  /**
   * <p>Indicates whether users can access their WorkSpaces through a web browser.</p>
   * @public
   */
  DeviceTypeWeb?: AccessPropertyValue;

  /**
   * <p>Indicates whether users can use iOS devices to access their WorkSpaces.</p>
   * @public
   */
  DeviceTypeIos?: AccessPropertyValue;

  /**
   * <p>Indicates whether users can use Android and Android-compatible Chrome OS devices to
   *          access their WorkSpaces.</p>
   * @public
   */
  DeviceTypeAndroid?: AccessPropertyValue;

  /**
   * <p>Indicates whether users can use Chromebooks to access their WorkSpaces.</p>
   * @public
   */
  DeviceTypeChromeOs?: AccessPropertyValue;

  /**
   * <p>Indicates whether users can use zero client devices to access their WorkSpaces.</p>
   * @public
   */
  DeviceTypeZeroClient?: AccessPropertyValue;

  /**
   * <p>Indicates whether users can use Linux clients to access their WorkSpaces.</p>
   * @public
   */
  DeviceTypeLinux?: AccessPropertyValue;
}

/**
 * <p>Describes a directory that is used with Amazon WorkSpaces.</p>
 * @public
 */
export interface WorkspaceDirectory {
  /**
   * <p>The directory identifier.</p>
   * @public
   */
  DirectoryId?: string;

  /**
   * <p>The directory alias.</p>
   * @public
   */
  Alias?: string;

  /**
   * <p>The name of the directory.</p>
   * @public
   */
  DirectoryName?: string;

  /**
   * <p>The registration code for the directory. This is the code that users enter in their
   *          Amazon WorkSpaces client application to connect to the directory.</p>
   * @public
   */
  RegistrationCode?: string;

  /**
   * <p>The identifiers of the subnets used with the directory.</p>
   * @public
   */
  SubnetIds?: string[];

  /**
   * <p>The IP addresses of the DNS servers for the directory.</p>
   * @public
   */
  DnsIpAddresses?: string[];

  /**
   * <p>The user name for the service account.</p>
   * @public
   */
  CustomerUserName?: string;

  /**
   * <p>The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make
   *          calls to other services, such as Amazon EC2, on your behalf.</p>
   * @public
   */
  IamRoleId?: string;

  /**
   * <p>The directory type.</p>
   * @public
   */
  DirectoryType?: WorkspaceDirectoryType;

  /**
   * <p>The identifier of the security group that is assigned to new WorkSpaces.</p>
   * @public
   */
  WorkspaceSecurityGroupId?: string;

  /**
   * <p>The state of the directory's registration with Amazon WorkSpaces. After a directory is
   *          deregistered, the <code>DEREGISTERED</code> state is returned very briefly before the
   *          directory metadata is cleaned up, so this state is rarely returned. To confirm that a
   *          directory is deregistered, check for the directory ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html">
   *             DescribeWorkspaceDirectories</a>. If the directory ID isn't returned, then the
   *          directory has been successfully deregistered.</p>
   * @public
   */
  State?: WorkspaceDirectoryState;

  /**
   * <p>The default creation properties for all WorkSpaces in the directory.</p>
   * @public
   */
  WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;

  /**
   * <p>The identifiers of the IP access control groups associated with the directory.</p>
   * @public
   */
  ipGroupIds?: string[];

  /**
   * <p>The devices and operating systems that users can use to access WorkSpaces.</p>
   * @public
   */
  WorkspaceAccessProperties?: WorkspaceAccessProperties;

  /**
   * <p>Specifies whether the directory is dedicated or shared. To use Bring Your Own License
   *          (BYOL), this value must be set to <code>DEDICATED</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring
   *             Your Own Windows Desktop Images</a>.</p>
   * @public
   */
  Tenancy?: Tenancy;

  /**
   * <p>The default self-service permissions for WorkSpaces in the directory.</p>
   * @public
   */
  SelfservicePermissions?: SelfservicePermissions;

  /**
   * <p>Describes the enablement status, user access URL, and relay state parameter name that are used for configuring
   *          federation with an SAML 2.0 identity provider.</p>
   * @public
   */
  SamlProperties?: SamlProperties;

  /**
   * <p>The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP)
   *          user identities to Active Directory for WorkSpaces login.</p>
   * @public
   */
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
}

/**
 * @public
 */
export interface DescribeWorkspaceDirectoriesResult {
  /**
   * <p>Information about the directories.</p>
   * @public
   */
  Directories?: WorkspaceDirectory[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeWorkspaceImagePermissionsRequest {
  /**
   * <p>The identifier of the image.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Describes the Amazon Web Services accounts that have been granted permission to use a
 *          shared image. For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom
 *             WorkSpaces Image</a>.</p>
 * @public
 */
export interface ImagePermission {
  /**
   * <p>The identifier of the Amazon Web Services account that an image has been shared
   *          with.</p>
   * @public
   */
  SharedAccountId?: string;
}

/**
 * @public
 */
export interface DescribeWorkspaceImagePermissionsResult {
  /**
   * <p>The identifier of the image.</p>
   * @public
   */
  ImageId?: string;

  /**
   * <p>The identifiers of the Amazon Web Services accounts that the image has been shared
   *          with.</p>
   * @public
   */
  ImagePermissions?: ImagePermission[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
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
   * <p>The identifier of the image.</p>
   * @public
   */
  ImageIds?: string[];

  /**
   * <p>The type (owned or shared) of the image.</p>
   * @public
   */
  ImageType?: ImageType;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
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
 * <p>Describes in-depth details about the error. These details include the
 *          possible causes of the error and troubleshooting information.</p>
 * @public
 */
export interface ErrorDetails {
  /**
   * <p>Indicates the error code returned.</p>
   * @public
   */
  ErrorCode?: WorkspaceImageErrorDetailCode;

  /**
   * <p>The text of the error message related the error code.</p>
   * @public
   */
  ErrorMessage?: string;
}

/**
 * <p>Describes whether a WorkSpace image needs to be updated with the latest drivers and
 *          other components required by Amazon WorkSpaces.</p>
 *          <note>
 *             <p>Only Windows 10 WorkSpace images can be programmatically updated at this time.</p>
 *          </note>
 * @public
 */
export interface UpdateResult {
  /**
   * <p>Indicates whether updated drivers or other components are available for the specified
   *          WorkSpace image.</p>
   * @public
   */
  UpdateAvailable?: boolean;

  /**
   * <p>A description of whether updates for the WorkSpace image are pending or
   *          available.</p>
   * @public
   */
  Description?: string;
}

/**
 * <p>Describes a WorkSpace image.</p>
 * @public
 */
export interface WorkspaceImage {
  /**
   * <p>The identifier of the image.</p>
   * @public
   */
  ImageId?: string;

  /**
   * <p>The name of the image.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the image.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The operating system that the image is running. </p>
   * @public
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>The status of the image.</p>
   * @public
   */
  State?: WorkspaceImageState;

  /**
   * <p>Specifies whether the image is running on dedicated hardware. When Bring Your Own
   *          License (BYOL) is enabled, this value is set to <code>DEDICATED</code>. For more
   *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows
   *             Desktop Images</a>.</p>
   * @public
   */
  RequiredTenancy?: WorkspaceImageRequiredTenancy;

  /**
   * <p>The error code that is returned for the image.</p>
   * @public
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned for the image.</p>
   * @public
   */
  ErrorMessage?: string;

  /**
   * <p>The date when the image was created. If the image has been shared, the Amazon Web Services account that the image has been shared with sees the original creation date
   *          of the image.</p>
   * @public
   */
  Created?: Date;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the image.</p>
   * @public
   */
  OwnerAccountId?: string;

  /**
   * <p>The updates (if any) that are available for the specified image.</p>
   * @public
   */
  Updates?: UpdateResult;

  /**
   * <p>Additional details of the error returned for the image, including the
   *          possible causes of the errors and troubleshooting information.</p>
   * @public
   */
  ErrorDetails?: ErrorDetails[];
}

/**
 * @public
 */
export interface DescribeWorkspaceImagesResult {
  /**
   * <p>Information about the images.</p>
   * @public
   */
  Images?: WorkspaceImage[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeWorkspacesRequest {
  /**
   * <p>The identifiers of the WorkSpaces. You cannot combine this parameter with any other
   *          filter.</p>
   *          <p>Because the <a>CreateWorkspaces</a> operation is asynchronous, the identifier
   *          it returns is not immediately available. If you immediately call <a>DescribeWorkspaces</a> with this identifier, no information is returned.</p>
   * @public
   */
  WorkspaceIds?: string[];

  /**
   * <p>The identifier of the directory. In addition, you can optionally specify a specific
   *          directory user (see <code>UserName</code>). You cannot combine this parameter with any
   *          other filter.</p>
   * @public
   */
  DirectoryId?: string;

  /**
   * <p>The name of the directory user. You must specify this parameter with
   *             <code>DirectoryId</code>.</p>
   * @public
   */
  UserName?: string;

  /**
   * <p>The identifier of the bundle. All WorkSpaces that are created from this bundle are
   *          retrieved. You cannot combine this parameter with any other filter.</p>
   * @public
   */
  BundleId?: string;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The name of the user-decoupled WorkSpace.</p>
   * @public
   */
  WorkspaceName?: string;
}

/**
 * @public
 */
export interface DescribeWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces.</p>
   *          <p>Because <a>CreateWorkspaces</a> is an asynchronous operation, some of the
   *          returned information could be incomplete.</p>
   * @public
   */
  Workspaces?: Workspace[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeWorkspacesConnectionStatusRequest {
  /**
   * <p>The identifiers of the WorkSpaces. You can specify up to 25 WorkSpaces.</p>
   * @public
   */
  WorkspaceIds?: string[];

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Describes the connection status of a WorkSpace.</p>
 * @public
 */
export interface WorkspaceConnectionStatus {
  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId?: string;

  /**
   * <p>The connection state of the WorkSpace. The connection state is unknown if the WorkSpace
   *          is stopped.</p>
   * @public
   */
  ConnectionState?: ConnectionState;

  /**
   * <p>The timestamp of the connection status check.</p>
   * @public
   */
  ConnectionStateCheckTimestamp?: Date;

  /**
   * <p>The timestamp of the last known user connection.</p>
   * @public
   */
  LastKnownUserConnectionTimestamp?: Date;
}

/**
 * @public
 */
export interface DescribeWorkspacesConnectionStatusResult {
  /**
   * <p>Information about the connection status of the WorkSpace.</p>
   * @public
   */
  WorkspacesConnectionStatus?: WorkspaceConnectionStatus[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeWorkspaceSnapshotsRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId: string | undefined;
}

/**
 * <p>Describes a snapshot.</p>
 * @public
 */
export interface Snapshot {
  /**
   * <p>The time when the snapshot was created.</p>
   * @public
   */
  SnapshotTime?: Date;
}

/**
 * @public
 */
export interface DescribeWorkspaceSnapshotsResult {
  /**
   * <p>Information about the snapshots that can be used to rebuild a WorkSpace. These snapshots
   *          include the user volume.</p>
   * @public
   */
  RebuildSnapshots?: Snapshot[];

  /**
   * <p>Information about the snapshots that can be used to restore a WorkSpace. These snapshots
   *          include both the root volume and the user volume.</p>
   * @public
   */
  RestoreSnapshots?: Snapshot[];
}

/**
 * @public
 */
export interface DisassociateConnectionAliasRequest {
  /**
   * <p>The identifier of the connection alias to disassociate.</p>
   * @public
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
   * <p>The identifier of the directory.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifiers of one or more IP access control groups.</p>
   * @public
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
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The identifier of the application.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateWorkspaceApplicationResult {
  /**
   * <p>Information about the targeted association.</p>
   * @public
   */
  Association?: WorkspaceResourceAssociation;
}

/**
 * <p>Describes a WorkSpace that could not be rebooted. (<a>RebootWorkspaces</a>),
 *          rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).</p>
 * @public
 */
export interface FailedWorkspaceChangeRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId?: string;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be rebooted.</p>
   * @public
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          rebooted.</p>
   * @public
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface GetAccountLinkRequest {
  /**
   * <p>The identifier of the account to link.</p>
   * @public
   */
  LinkId?: string;

  /**
   * <p>The identifier of the account link</p>
   * @public
   */
  LinkedAccountId?: string;
}

/**
 * @public
 */
export interface GetAccountLinkResult {
  /**
   * <p>The account link of the account link to retrieve.</p>
   * @public
   */
  AccountLink?: AccountLink;
}

/**
 * <p>The client branding attributes to import for iOS device types. These attributes are
 *          displayed on the iOS client login screen.</p>
 *          <important>
 *             <p>Client branding attributes are public facing. Ensure you do not include sensitive
 *             information.</p>
 *          </important>
 * @public
 */
export interface IosImportClientBrandingAttributes {
  /**
   * <p>The logo. This is the
   *          standard-resolution display that has a 1:1 pixel density (or @1x), where one pixel is equal
   *          to one point. The only image format accepted is a binary data object that is converted
   *          from a <code>.png</code> file.</p>
   * @public
   */
  Logo?: Uint8Array;

  /**
   * <p>The @2x version of the logo. This is the higher resolution display that offers a scale
   *          factor of 2.0 (or @2x). The only image format accepted is a binary data object that is
   *          converted from a <code>.png</code> file.</p>
   *          <note>
   *             <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface
   *                Guidelines</i>.</p>
   *          </note>
   * @public
   */
  Logo2x?: Uint8Array;

  /**
   * <p>The @3x version of the logo. This is the higher resolution display that offers a scale
   *          factor of 3.0 (or @3x). The only image format accepted is a binary data object that is
   *          converted from a <code>.png</code> file.</p>
   *          <note>
   *             <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface
   *                Guidelines</i>.</p>
   *          </note>
   * @public
   */
  Logo3x?: Uint8Array;

  /**
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
   * @public
   */
  SupportEmail?: string;

  /**
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
   * @public
   */
  SupportLink?: string;

  /**
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   * @public
   */
  ForgotPasswordLink?: string;

  /**
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *          <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em,
   *             i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.</p>
   * @public
   */
  LoginMessage?: Record<string, string>;
}

/**
 * @public
 */
export interface ImportClientBrandingRequest {
  /**
   * <p>The directory identifier of the WorkSpace for which you want to import client
   *          branding.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The branding information to import for Windows devices.</p>
   * @public
   */
  DeviceTypeWindows?: DefaultImportClientBrandingAttributes;

  /**
   * <p>The branding information to import for macOS devices.</p>
   * @public
   */
  DeviceTypeOsx?: DefaultImportClientBrandingAttributes;

  /**
   * <p>The branding information to import for Android devices.</p>
   * @public
   */
  DeviceTypeAndroid?: DefaultImportClientBrandingAttributes;

  /**
   * <p>The branding information to import for iOS devices.</p>
   * @public
   */
  DeviceTypeIos?: IosImportClientBrandingAttributes;

  /**
   * <p>The branding information to import for Linux devices.</p>
   * @public
   */
  DeviceTypeLinux?: DefaultImportClientBrandingAttributes;

  /**
   * <p>The branding information to import for web access.</p>
   * @public
   */
  DeviceTypeWeb?: DefaultImportClientBrandingAttributes;
}

/**
 * @public
 */
export interface ImportClientBrandingResult {
  /**
   * <p>The branding information configured for Windows devices.</p>
   * @public
   */
  DeviceTypeWindows?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information configured for macOS devices.</p>
   * @public
   */
  DeviceTypeOsx?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information configured for Android devices.</p>
   * @public
   */
  DeviceTypeAndroid?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information configured for iOS devices.</p>
   * @public
   */
  DeviceTypeIos?: IosClientBrandingAttributes;

  /**
   * <p>The branding information configured for Linux devices.</p>
   * @public
   */
  DeviceTypeLinux?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information configured for web access.</p>
   * @public
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
   * <p>The identifier of the EC2 image.</p>
   * @public
   */
  Ec2ImageId: string | undefined;

  /**
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
   * @public
   */
  IngestionProcess: WorkspaceImageIngestionProcess | undefined;

  /**
   * <p>The name of the WorkSpace image.</p>
   * @public
   */
  ImageName: string | undefined;

  /**
   * <p>The description of the WorkSpace image.</p>
   * @public
   */
  ImageDescription: string | undefined;

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   * @public
   */
  Tags?: Tag[];

  /**
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
   * @public
   */
  Applications?: Application[];
}

/**
 * @public
 */
export interface ImportWorkspaceImageResult {
  /**
   * <p>The identifier of the WorkSpace image.</p>
   * @public
   */
  ImageId?: string;
}

/**
 * @public
 */
export interface ListAccountLinksRequest {
  /**
   * <p>Filters the account based on their link status.</p>
   * @public
   */
  LinkStatusFilter?: AccountLinkStatusEnum[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of accounts to return.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAccountLinksResult {
  /**
   * <p>Information about the account links.</p>
   * @public
   */
  AccountLinks?: AccountLink[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAvailableManagementCidrRangesRequest {
  /**
   * <p>The IP address range to search. Specify an IP address range that is compatible with your
   *          network and in CIDR notation (that is, specify the range as an IPv4 CIDR block).</p>
   * @public
   */
  ManagementCidrRangeConstraint: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAvailableManagementCidrRangesResult {
  /**
   * <p>The list of available IP address ranges, specified as IPv4 CIDR blocks.</p>
   * @public
   */
  ManagementCidrRanges?: string[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface MigrateWorkspaceRequest {
  /**
   * <p>The identifier of the WorkSpace to migrate from.</p>
   * @public
   */
  SourceWorkspaceId: string | undefined;

  /**
   * <p>The identifier of the target bundle type to migrate the WorkSpace to.</p>
   * @public
   */
  BundleId: string | undefined;
}

/**
 * @public
 */
export interface MigrateWorkspaceResult {
  /**
   * <p>The original identifier of the WorkSpace that is being migrated.</p>
   * @public
   */
  SourceWorkspaceId?: string;

  /**
   * <p>The new identifier of the WorkSpace that is being migrated. If the migration does not
   *          succeed, the target WorkSpace ID will not be used, and the WorkSpace will still have the
   *          original WorkSpace ID.</p>
   * @public
   */
  TargetWorkspaceId?: string;
}

/**
 * <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
 * @public
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
   * <p>The status of BYOL.</p>
   * @public
   */
  DedicatedTenancySupport?: DedicatedTenancySupportEnum;

  /**
   * <p>The IP address range, specified as an IPv4 CIDR block, for the management network
   *          interface. Specify an IP address range that is compatible with your network and in CIDR
   *          notation (that is, specify the range as an IPv4 CIDR block). The CIDR block size must be
   *          /16 (for example, 203.0.113.25/16). It must also be specified as available by the
   *             <code>ListAvailableManagementCidrRanges</code> operation.</p>
   * @public
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
   * <p>The resource identifiers, in the form of directory IDs.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The properties of the certificate-based authentication.</p>
   * @public
   */
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;

  /**
   * <p>The properties of the certificate-based authentication you want to delete.</p>
   * @public
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
   * <p>The resource identifiers, in the form of directory IDs.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Information about the Amazon WorkSpaces client.</p>
   * @public
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
   * <p>The directory identifier for which you want to configure SAML properties.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The properties for configuring SAML 2.0 authentication.</p>
   * @public
   */
  SamlProperties?: SamlProperties;

  /**
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
   * @public
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
   * <p>The identifier of the directory.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The permissions to enable or disable self-service capabilities.</p>
   * @public
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
   * <p>The identifier of the directory.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The device types and operating systems to enable or disable for access.</p>
   * @public
   */
  WorkspaceAccessProperties: WorkspaceAccessProperties | undefined;
}

/**
 * @public
 */
export interface ModifyWorkspaceAccessPropertiesResult {}

/**
 * <p>Describes the default properties that are used for creating WorkSpaces. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory
 *             Details for Your WorkSpaces</a>. </p>
 * @public
 */
export interface WorkspaceCreationProperties {
  /**
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
   * @public
   */
  EnableWorkDocs?: boolean;

  /**
   * <p>Indicates whether internet access is enabled for your WorkSpaces.</p>
   * @public
   */
  EnableInternetAccess?: boolean;

  /**
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
   * @public
   */
  DefaultOu?: string;

  /**
   * <p>The identifier of your custom security group.</p>
   * @public
   */
  CustomSecurityGroupId?: string;

  /**
   * <p>Indicates whether users are local administrators of their WorkSpaces.</p>
   * @public
   */
  UserEnabledAsLocalAdministrator?: boolean;

  /**
   * <p>Indicates whether maintenance mode is enabled for your WorkSpaces. For more information,
   *          see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace
   *             Maintenance</a>. </p>
   * @public
   */
  EnableMaintenanceMode?: boolean;
}

/**
 * @public
 */
export interface ModifyWorkspaceCreationPropertiesRequest {
  /**
   * <p>The identifier of the directory.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The default properties for creating WorkSpaces.</p>
   * @public
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
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The properties of the WorkSpace.</p>
   * @public
   */
  WorkspaceProperties?: WorkspaceProperties;

  /**
   * <p>Indicates the data replication status.</p>
   * @public
   */
  DataReplication?: DataReplication;
}

/**
 * @public
 */
export interface ModifyWorkspacePropertiesResult {}

/**
 * <p>The configuration of this WorkSpace is not supported for this operation. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/required-service-components.html">Required
 *             Configuration and Service Components for WorkSpaces </a>.</p>
 * @public
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
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The WorkSpace state.</p>
   * @public
   */
  WorkspaceState: TargetWorkspaceState | undefined;
}

/**
 * @public
 */
export interface ModifyWorkspaceStateResult {}

/**
 * <p>Describes the information used to reboot a WorkSpace.</p>
 * @public
 */
export interface RebootRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId: string | undefined;
}

/**
 * @public
 */
export interface RebootWorkspacesRequest {
  /**
   * <p>The WorkSpaces to reboot. You can specify up to 25 WorkSpaces.</p>
   * @public
   */
  RebootWorkspaceRequests: RebootRequest[] | undefined;
}

/**
 * @public
 */
export interface RebootWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be rebooted.</p>
   * @public
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

/**
 * <p>Describes the information used to rebuild a WorkSpace.</p>
 * @public
 */
export interface RebuildRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId: string | undefined;
}

/**
 * @public
 */
export interface RebuildWorkspacesRequest {
  /**
   * <p>The WorkSpace to rebuild. You can specify a single WorkSpace.</p>
   * @public
   */
  RebuildWorkspaceRequests: RebuildRequest[] | undefined;
}

/**
 * @public
 */
export interface RebuildWorkspacesResult {
  /**
   * <p>Information about the WorkSpace that could not be rebuilt.</p>
   * @public
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

/**
 * @public
 */
export interface RegisterWorkspaceDirectoryRequest {
  /**
   * <p>The identifier of the directory. You cannot register a directory if it does not have a
   *          status of Active. If the directory does not have a status of Active, you will receive an
   *          InvalidResourceStateException error. If you have already registered the maximum number of
   *          directories that you can register with Amazon WorkSpaces, you will receive a
   *          ResourceLimitExceededException error. Deregister directories that you are not using for
   *          WorkSpaces, and try again.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifiers of the subnets for your virtual private cloud (VPC). Make sure that the
   *          subnets are in supported Availability Zones. The subnets must also be in separate
   *          Availability Zones. If these conditions are not met, you will receive an
   *          OperationNotSupportedException error.</p>
   * @public
   */
  SubnetIds?: string[];

  /**
   * <p>Indicates whether Amazon WorkDocs is enabled or disabled. If you have enabled this
   *          parameter and WorkDocs is not available in the Region, you will receive an
   *          OperationNotSupportedException error. Set <code>EnableWorkDocs</code> to disabled, and try
   *          again.</p>
   * @public
   */
  EnableWorkDocs: boolean | undefined;

  /**
   * <p>Indicates whether self-service capabilities are enabled or disabled.</p>
   * @public
   */
  EnableSelfService?: boolean;

  /**
   * <p>Indicates whether your WorkSpace directory is dedicated or shared. To use Bring Your Own
   *          License (BYOL) images, this value must be set to <code>DEDICATED</code> and your Amazon Web Services account must be enabled for BYOL. If your account has not been enabled for
   *          BYOL, you will receive an InvalidParameterValuesException error. For more information about
   *          BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows
   *             Desktop Images</a>.</p>
   * @public
   */
  Tenancy?: Tenancy;

  /**
   * <p>The tags associated with the directory.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface RegisterWorkspaceDirectoryResult {}

/**
 * <p>The configuration of this network is not supported for this operation, or your network configuration
 *          conflicts with the Amazon WorkSpaces management network IP range. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html">
 *             Configure a VPC for Amazon WorkSpaces</a>.</p>
 * @public
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
 * <p>The workspaces_DefaultRole role could not be found. If this is the first time you are registering a directory, you
 *          will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role">Creating the workspaces_DefaultRole Role</a>.</p>
 * @public
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
export interface RejectAccountLinkInvitationRequest {
  /**
   * <p>The identifier of the account link</p>
   * @public
   */
  LinkId: string | undefined;

  /**
   * <p>The client token of the account link invitation to reject.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface RejectAccountLinkInvitationResult {
  /**
   * <p>Information about the account link.</p>
   * @public
   */
  AccountLink?: AccountLink;
}

/**
 * @public
 */
export interface RestoreWorkspaceRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
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
   * <p>The identifier of the group.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>The rules to remove from the group.</p>
   * @public
   */
  UserRules: string[] | undefined;
}

/**
 * @public
 */
export interface RevokeIpRulesResult {}

/**
 * <p>Information used to start a WorkSpace.</p>
 * @public
 */
export interface StartRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId?: string;
}

/**
 * @public
 */
export interface StartWorkspacesRequest {
  /**
   * <p>The WorkSpaces to start. You can specify up to 25 WorkSpaces.</p>
   * @public
   */
  StartWorkspaceRequests: StartRequest[] | undefined;
}

/**
 * @public
 */
export interface StartWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be started.</p>
   * @public
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

/**
 * <p>Describes the information used to stop a WorkSpace.</p>
 * @public
 */
export interface StopRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId?: string;
}

/**
 * @public
 */
export interface StopWorkspacesRequest {
  /**
   * <p>The WorkSpaces to stop. You can specify up to 25 WorkSpaces.</p>
   * @public
   */
  StopWorkspaceRequests: StopRequest[] | undefined;
}

/**
 * @public
 */
export interface StopWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be stopped.</p>
   * @public
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

/**
 * <p>Describes the information used to terminate a WorkSpace.</p>
 * @public
 */
export interface TerminateRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId: string | undefined;
}

/**
 * @public
 */
export interface TerminateWorkspacesRequest {
  /**
   * <p>The WorkSpaces to terminate. You can specify up to 25 WorkSpaces.</p>
   * @public
   */
  TerminateWorkspaceRequests: TerminateRequest[] | undefined;
}

/**
 * @public
 */
export interface TerminateWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be terminated.</p>
   * @public
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

/**
 * @public
 */
export interface UpdateConnectClientAddInRequest {
  /**
   * <p>The identifier of the client add-in to update.</p>
   * @public
   */
  AddInId: string | undefined;

  /**
   * <p>The directory identifier for which the client add-in is configured.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The name of the client add-in.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The endpoint URL of the Amazon Connect client add-in.</p>
   * @public
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
   * <p>The identifier of the connection alias that you want to update permissions for.</p>
   * @public
   */
  AliasId: string | undefined;

  /**
   * <p>Indicates whether to share or unshare the connection alias with the specified Amazon Web Services account.</p>
   * @public
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
   * <p>The identifier of the group.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>One or more rules.</p>
   * @public
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
   * <p>The identifier of the bundle.</p>
   * @public
   */
  BundleId?: string;

  /**
   * <p>The identifier of the image.</p>
   * @public
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
   * <p>The identifier of the image.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>The permission to copy the image. This permission can be revoked only after an image has
   *          been shared.</p>
   * @public
   */
  AllowCopyImage: boolean | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account to share or unshare the image
   *          with.</p>
   *          <important>
   *             <p>Before sharing the image, confirm that you are sharing to the correct Amazon Web Services account ID.</p>
   *          </important>
   * @public
   */
  SharedAccountId: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceImagePermissionResult {}
