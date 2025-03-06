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
   * <p>A string of up to 64 ASCII characters that Amazon WorkSpaces uses to ensure idempotent creation.</p>
   * @public
   */
  ClientToken?: string | undefined;
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
  AccountLinkId?: string | undefined;

  /**
   * <p>The status of the account link.</p>
   * @public
   */
  AccountLinkStatus?: AccountLinkStatusEnum | undefined;

  /**
   * <p>The identifier of the source account.</p>
   * @public
   */
  SourceAccountId?: string | undefined;

  /**
   * <p>The identifier of the target account.</p>
   * @public
   */
  TargetAccountId?: string | undefined;
}

/**
 * @public
 */
export interface AcceptAccountLinkInvitationResult {
  /**
   * <p>Information about the account link.</p>
   * @public
   */
  AccountLink?: AccountLink | undefined;
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
  ResourceId?: string | undefined;

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
  ModificationState?: DedicatedTenancyModificationStateEnum | undefined;

  /**
   * <p>The status of BYOL (whether BYOL is being enabled or disabled).</p>
   * @public
   */
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum | undefined;

  /**
   * <p>The IP address range, specified as an IPv4 CIDR block, for the management network
   *          interface used for the account.</p>
   * @public
   */
  DedicatedTenancyManagementCidrRange?: string | undefined;

  /**
   * <p>The timestamp when the modification of the BYOL configuration was started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The error code that is returned if the configuration of BYOL cannot be modified.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The text of the error message that is returned if the configuration of BYOL cannot be
   *          modified.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>Information about the Active Directory config.</p>
 * @public
 */
export interface ActiveDirectoryConfig {
  /**
   * <p>The name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Indicates the secret ARN on the service account.</p>
   * @public
   */
  ServiceAccountSecretArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AGAModeForDirectoryEnum = {
  DISABLED: "DISABLED",
  ENABLED_AUTO: "ENABLED_AUTO",
} as const;

/**
 * @public
 */
export type AGAModeForDirectoryEnum = (typeof AGAModeForDirectoryEnum)[keyof typeof AGAModeForDirectoryEnum];

/**
 * @public
 * @enum
 */
export const AGAModeForWorkSpaceEnum = {
  DISABLED: "DISABLED",
  ENABLED_AUTO: "ENABLED_AUTO",
  INHERITED: "INHERITED",
} as const;

/**
 * @public
 */
export type AGAModeForWorkSpaceEnum = (typeof AGAModeForWorkSpaceEnum)[keyof typeof AGAModeForWorkSpaceEnum];

/**
 * @public
 * @enum
 */
export const AGAPreferredProtocolForDirectory = {
  NONE: "NONE",
  TCP: "TCP",
} as const;

/**
 * @public
 */
export type AGAPreferredProtocolForDirectory =
  (typeof AGAPreferredProtocolForDirectory)[keyof typeof AGAPreferredProtocolForDirectory];

/**
 * @public
 * @enum
 */
export const AGAPreferredProtocolForWorkSpace = {
  INHERITED: "INHERITED",
  NONE: "NONE",
  TCP: "TCP",
} as const;

/**
 * @public
 */
export type AGAPreferredProtocolForWorkSpace =
  (typeof AGAPreferredProtocolForWorkSpace)[keyof typeof AGAPreferredProtocolForWorkSpace];

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
  ErrorCode?: AssociationErrorCode | undefined;

  /**
   * <p>The error message of the association deployment failure.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
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
  ApplicationId?: string | undefined;

  /**
   * <p>The identifier of the associated resource.</p>
   * @public
   */
  AssociatedResourceId?: string | undefined;

  /**
   * <p>The resource type of the associated resource.</p>
   * @public
   */
  AssociatedResourceType?: ApplicationAssociatedResourceType | undefined;

  /**
   * <p>The time the association was created.</p>
   * @public
   */
  Created?: Date | undefined;

  /**
   * <p>The time the association status was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The status of the application resource association.</p>
   * @public
   */
  State?: AssociationState | undefined;

  /**
   * <p>The reason the association deployment failed.</p>
   * @public
   */
  StateReason?: AssociationStateReason | undefined;
}

/**
 * @public
 * @enum
 */
export const ApplicationSettingsStatusEnum = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ApplicationSettingsStatusEnum =
  (typeof ApplicationSettingsStatusEnum)[keyof typeof ApplicationSettingsStatusEnum];

/**
 * <p>The persistent application settings for WorkSpaces Pools users.</p>
 * @public
 */
export interface ApplicationSettingsRequest {
  /**
   * <p>Enables or disables persistent application settings for users during their pool sessions.</p>
   * @public
   */
  Status: ApplicationSettingsStatusEnum | undefined;

  /**
   * <p>The path prefix for the S3 bucket where users’ persistent application settings are stored.
   *          You can allow the same persistent application settings to be used across multiple pools by specifying
   *          the same settings group for each pool.</p>
   * @public
   */
  SettingsGroup?: string | undefined;
}

/**
 * <p>Describes the persistent application settings for WorkSpaces Pools users.</p>
 * @public
 */
export interface ApplicationSettingsResponse {
  /**
   * <p>Specifies whether persistent application settings are enabled for users during their pool sessions.</p>
   * @public
   */
  Status: ApplicationSettingsStatusEnum | undefined;

  /**
   * <p>The path prefix for the S3 bucket where users’ persistent application settings are stored.</p>
   * @public
   */
  SettingsGroup?: string | undefined;

  /**
   * <p>The S3 bucket where users’ persistent application settings are stored. When persistent
   *          application settings are enabled for the first time for an account in an Amazon Web Services Region,
   *          an S3 bucket is created. The bucket is unique to the Amazon Web Services account and the Region.</p>
   * @public
   */
  S3BucketName?: string | undefined;
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
  ConnectionIdentifier?: string | undefined;
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
  reason?: string | undefined;

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
  AssociatedResourceId?: string | undefined;

  /**
   * <p>The resource types of the associated resource.</p>
   * @public
   */
  AssociatedResourceType?: WorkSpaceAssociatedResourceType | undefined;

  /**
   * <p>The time the association is created.</p>
   * @public
   */
  Created?: Date | undefined;

  /**
   * <p>The time the association status was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The status of the WorkSpace resource association.</p>
   * @public
   */
  State?: AssociationState | undefined;

  /**
   * <p>The reason the association deployment failed.</p>
   * @public
   */
  StateReason?: AssociationStateReason | undefined;

  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateWorkspaceApplicationResult {
  /**
   * <p>Information about the association between the specified WorkSpace and the specified application.</p>
   * @public
   */
  Association?: WorkspaceResourceAssociation | undefined;
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
  ResourceId?: string | undefined;

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
 * @enum
 */
export const AuthenticationType = {
  SAML: "SAML",
} as const;

/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * <p>Describes a rule for an IP access control group.</p>
 * @public
 */
export interface IpRuleItem {
  /**
   * <p>The IP address range, in CIDR notation.</p>
   * @public
   */
  ipRule?: string | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  ruleDesc?: string | undefined;
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
  GENERALPURPOSE_4XLARGE: "GENERALPURPOSE_4XLARGE",
  GENERALPURPOSE_8XLARGE: "GENERALPURPOSE_8XLARGE",
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
  Name?: Compute | undefined;
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
  Capacity: string | undefined;
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
  Capacity: string | undefined;
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
  BundleId?: string | undefined;

  /**
   * <p>The name of the bundle.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The owner of the bundle. This is the account identifier of the owner, or
   *          <code>AMAZON</code> if the bundle is provided by Amazon Web Services.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The description of the bundle.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the image that was used to create the bundle.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The size of the root volume.</p>
   * @public
   */
  RootStorage?: RootStorage | undefined;

  /**
   * <p>The size of the user volume.</p>
   * @public
   */
  UserStorage?: UserStorage | undefined;

  /**
   * <p>The compute type of the bundle. For more information, see
   *          <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces Bundles</a>.</p>
   * @public
   */
  ComputeType?: ComputeType | undefined;

  /**
   * <p>The last time that the bundle was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The time when the bundle was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The state of the WorkSpace bundle.</p>
   * @public
   */
  State?: WorkspaceBundleState | undefined;

  /**
   * <p>The type of WorkSpace bundle.</p>
   * @public
   */
  BundleType?: BundleType | undefined;
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
  AssociatedResourceId?: string | undefined;

  /**
   * <p>The resource type of the associated resources.</p>
   * @public
   */
  AssociatedResourceType?: BundleAssociatedResourceType | undefined;

  /**
   * <p>The identifier of the bundle.</p>
   * @public
   */
  BundleId?: string | undefined;

  /**
   * <p>The time the association is created.</p>
   * @public
   */
  Created?: Date | undefined;

  /**
   * <p>The time the association status was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The status of the bundle resource association.</p>
   * @public
   */
  State?: AssociationState | undefined;

  /**
   * <p>The reason the association deployment failed.</p>
   * @public
   */
  StateReason?: AssociationStateReason | undefined;
}

/**
 * <p>Describes the user capacity for a pool of WorkSpaces.</p>
 * @public
 */
export interface Capacity {
  /**
   * <p>The desired number of user sessions for the WorkSpaces in the pool.</p>
   * @public
   */
  DesiredUserSessions: number | undefined;
}

/**
 * <p>Describes the capacity status for a pool of WorkSpaces.</p>
 * @public
 */
export interface CapacityStatus {
  /**
   * <p>The number of user sessions currently available for streaming from your pool.</p>
   *          <p>AvailableUserSessions = ActualUserSessions - ActiveUserSessions</p>
   * @public
   */
  AvailableUserSessions: number | undefined;

  /**
   * <p>The total number of sessions slots that are either running or pending. This
   *          represents the total number of concurrent streaming sessions your pool can support
   *          in a steady state.</p>
   * @public
   */
  DesiredUserSessions: number | undefined;

  /**
   * <p>The total number of user sessions that are available for streaming or are currently
   *          streaming in your pool.</p>
   *          <p>ActualUserSessions = AvailableUserSessions + ActiveUserSessions</p>
   * @public
   */
  ActualUserSessions: number | undefined;

  /**
   * <p>The number of user sessions currently being used for your pool.</p>
   * @public
   */
  ActiveUserSessions: number | undefined;
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
  Status?: CertificateBasedAuthStatusEnum | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource.</p>
   * @public
   */
  CertificateAuthorityArn?: string | undefined;
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
  ReconnectEnabled?: ReconnectEnum | undefined;

  /**
   * <p>Specifies whether users can upload diagnostic log files of Amazon WorkSpaces client directly to
   *          WorkSpaces to troubleshoot issues when using the WorkSpaces client.
   *          When enabled, the log files will be sent to WorkSpaces automatically and will be applied to all
   *          users in the specified directory.</p>
   * @public
   */
  LogUploadEnabled?: LogUploadEnum | undefined;
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
  ResourceId?: string | undefined;

  /**
   * <p>Information about the Amazon WorkSpaces client.</p>
   * @public
   */
  ClientProperties?: ClientProperties | undefined;
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
  AddInId?: string | undefined;

  /**
   * <p>The directory identifier for which the client add-in is configured.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The name of the client add in.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The endpoint URL of the client add-in.</p>
   * @public
   */
  URL?: string | undefined;
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
  AssociationStatus?: AssociationStatus | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account that associated the connection alias
   *          with a directory.</p>
   * @public
   */
  AssociatedAccountId?: string | undefined;

  /**
   * <p>The identifier of the directory associated with a connection alias.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The identifier of the connection alias association. You use the connection identifier in
   *          the DNS TXT record when you're configuring your DNS routing policies.</p>
   * @public
   */
  ConnectionIdentifier?: string | undefined;
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
  ConnectionString?: string | undefined;

  /**
   * <p>The identifier of the connection alias.</p>
   * @public
   */
  AliasId?: string | undefined;

  /**
   * <p>The current state of the connection alias.</p>
   * @public
   */
  State?: ConnectionAliasState | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the connection alias.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The association status of the connection alias.</p>
   * @public
   */
  Associations?: ConnectionAliasAssociation[] | undefined;
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
  Value?: string | undefined;
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
  Description?: string | undefined;

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
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CopyWorkspaceImageResult {
  /**
   * <p>The identifier of the image.</p>
   * @public
   */
  ImageId?: string | undefined;
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
  ResourceId?: string | undefined;

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
   * <p>A string of up to 64 ASCII characters that Amazon WorkSpaces uses to ensure idempotent creation.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountLinkInvitationResult {
  /**
   * <p>Information about the account link.</p>
   * @public
   */
  AccountLink?: AccountLink | undefined;
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
  AddInId?: string | undefined;
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
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateConnectionAliasResult {
  /**
   * <p>The identifier of the connection alias.</p>
   * @public
   */
  AliasId?: string | undefined;
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
  GroupDesc?: string | undefined;

  /**
   * <p>The rules to add to the group.</p>
   * @public
   */
  UserRules?: IpRuleItem[] | undefined;

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateIpGroupResult {
  /**
   * <p>The identifier of the group.</p>
   * @public
   */
  GroupId?: string | undefined;
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
  VolumeEncryptionKey?: string | undefined;

  /**
   * <p>The identifier of the directory for the standby WorkSpace.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The tags associated with the standby WorkSpace.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether data replication is enabled, and if enabled, the type of data replication.</p>
   * @public
   */
  DataReplication?: DataReplication | undefined;
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
  StandbyWorkspaceRequest?: StandbyWorkspace | undefined;

  /**
   * <p>The error code that is returned if the standby WorkSpace could not be created.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The text of the error message that is returned if the standby WorkSpace could not be created.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
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
  UserName?: string | undefined;

  /**
   * <p>The identifier of the directory for the standby WorkSpace.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The operational state of the standby WorkSpace.</p>
   * @public
   */
  State?: WorkspaceState | undefined;

  /**
   * <p>The identifier of the standby WorkSpace.</p>
   * @public
   */
  WorkspaceId?: string | undefined;
}

/**
 * @public
 */
export interface CreateStandbyWorkspacesResult {
  /**
   * <p>Information about the standby WorkSpace that could not be created. </p>
   * @public
   */
  FailedStandbyRequests?: FailedCreateStandbyWorkspacesRequest[] | undefined;

  /**
   * <p>Information about the standby WorkSpace that was created.</p>
   * @public
   */
  PendingStandbyRequests?: PendingCreateStandbyWorkspacesRequest[] | undefined;
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
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateUpdatedWorkspaceImageResult {
  /**
   * <p>The identifier of the new updated WorkSpace image.</p>
   * @public
   */
  ImageId?: string | undefined;
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
  RootStorage?: RootStorage | undefined;

  /**
   * <p>The tags associated with the bundle.</p>
   *          <note>
   *             <p>To add tags at the same time when you're creating the bundle, you must create an IAM policy that
   *             grants your IAM user permissions to use <code>workspaces:CreateTags</code>. </p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceBundleResult {
  /**
   * <p>Describes a WorkSpace bundle.</p>
   * @public
   */
  WorkspaceBundle?: WorkspaceBundle | undefined;
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
  Tags?: Tag[] | undefined;
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
  Type?: OperatingSystemType | undefined;
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
  ImageId?: string | undefined;

  /**
   * <p>The name of the image.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the image.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The operating system that the image is running.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * <p>The availability status of the image.</p>
   * @public
   */
  State?: WorkspaceImageState | undefined;

  /**
   * <p>Specifies whether the image is running on dedicated hardware.
   *          When Bring Your Own License (BYOL) is enabled, this value is set
   *          to DEDICATED. For more information, see
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.htm">
   *             Bring Your Own Windows Desktop Images.</a>.</p>
   * @public
   */
  RequiredTenancy?: WorkspaceImageRequiredTenancy | undefined;

  /**
   * <p>The date when the image was created.</p>
   * @public
   */
  Created?: Date | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the image.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;
}

/**
 * <p>Describes the Global Accelerator for WorkSpaces.</p>
 * @public
 */
export interface GlobalAcceleratorForWorkSpace {
  /**
   * <p>Indicates if Global Accelerator for WorkSpaces is enabled, disabled,
   *          or the same mode as the associated directory.</p>
   * @public
   */
  Mode: AGAModeForWorkSpaceEnum | undefined;

  /**
   * <p>Indicates the preferred protocol for Global Accelerator.</p>
   * @public
   */
  PreferredProtocol?: AGAPreferredProtocolForWorkSpace | undefined;
}

/**
 * @public
 * @enum
 */
export const OperatingSystemName = {
  AMAZON_LINUX_2: "AMAZON_LINUX_2",
  RHEL_8: "RHEL_8",
  ROCKY_8: "ROCKY_8",
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
   *          <p>Review your running mode to ensure you are using one that is optimal for your needs and
   *          budget. For more information on switching running modes, see <a href="http://aws.amazon.com/workspaces-family/workspaces/faqs/#:~:text=Can%20I%20switch%20between%20hourly%20and%20monthly%20billing%20on%20WorkSpaces%20Personal%3F"> Can I switch between hourly and monthly billing?</a>
   *          </p>
   * @public
   */
  RunningMode?: RunningMode | undefined;

  /**
   * <p>The time after a user logs off when WorkSpaces are automatically stopped. Configured in
   *          60-minute intervals.</p>
   * @public
   */
  RunningModeAutoStopTimeoutInMinutes?: number | undefined;

  /**
   * <p>The size of the root volume. For important information about how to modify the size of
   *          the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a
   *          WorkSpace</a>.</p>
   * @public
   */
  RootVolumeSizeGib?: number | undefined;

  /**
   * <p>The size of the user storage. For important information about how to modify the size of
   *          the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a
   *          WorkSpace</a>.</p>
   * @public
   */
  UserVolumeSizeGib?: number | undefined;

  /**
   * <p>The compute type. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces
   *          Bundles</a>.</p>
   * @public
   */
  ComputeTypeName?: Compute | undefined;

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
   *                   <p>The <code>Protocols</code> property is case sensitive. Ensure you use <code>PCOIP</code> or <code>DCV</code> (formerly WSP).</p>
   *                </li>
   *                <li>
   *                   <p>Unavailable for Windows 7 WorkSpaces and WorkSpaces using GPU-based bundles
   *                (Graphics, GraphicsPro, Graphics.g4dn, and GraphicsPro.g4dn).</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  Protocols?: Protocol[] | undefined;

  /**
   * <p>The name of the operating system.</p>
   * @public
   */
  OperatingSystemName?: OperatingSystemName | undefined;

  /**
   * <p>Indicates the Global Accelerator properties.</p>
   * @public
   */
  GlobalAccelerator?: GlobalAcceleratorForWorkSpace | undefined;
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
   *          <p>The username is not case-sensitive, but we recommend matching the case in the Directory Service directory to avoid potential incompatibilities.</p>
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
  VolumeEncryptionKey?: string | undefined;

  /**
   * <p>Indicates whether the data stored on the user volume is encrypted.</p>
   * @public
   */
  UserVolumeEncryptionEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether the data stored on the root volume is encrypted.</p>
   * @public
   */
  RootVolumeEncryptionEnabled?: boolean | undefined;

  /**
   * <p>The WorkSpace properties.</p>
   * @public
   */
  WorkspaceProperties?: WorkspaceProperties | undefined;

  /**
   * <p>The tags for the WorkSpace.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The name of the user-decoupled WorkSpace.</p>
   *          <note>
   *             <p>
   *                <code>WorkspaceName</code> is required if <code>UserName</code> is
   *             <code>[UNDEFINED]</code> for user-decoupled WorkSpaces.
   *             <code>WorkspaceName</code> is not applicable if <code>UserName</code> is specified
   *             for user-assigned WorkSpaces.</p>
   *          </note>
   * @public
   */
  WorkspaceName?: string | undefined;
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
  WorkspaceRequest?: WorkspaceRequest | undefined;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be created.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          created.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
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
  DataReplication?: DataReplication | undefined;

  /**
   * <p>The date and time at which the last successful snapshot was taken of the
   *          primary WorkSpace used for replicating data.</p>
   * @public
   */
  RecoverySnapshotTime?: Date | undefined;
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
  Resource?: ModificationResourceEnum | undefined;

  /**
   * <p>The modification state.</p>
   * @public
   */
  State?: ModificationStateEnum | undefined;
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
  WorkspaceId?: string | undefined;

  /**
   * <p>The Region of the related WorkSpace.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>Indicates the state of the WorkSpace.</p>
   * @public
   */
  State?: WorkspaceState | undefined;

  /**
   * <p>Indicates the type of WorkSpace.</p>
   * @public
   */
  Type?: StandbyWorkspaceRelationshipType | undefined;
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
  StandbyWorkspaceId?: string | undefined;

  /**
   * <p>Indicates whether data replication is enabled, and if enabled, the type of data replication.</p>
   * @public
   */
  DataReplication?: DataReplication | undefined;

  /**
   * <p>The date and time at which the last successful snapshot was taken of the
   *          primary WorkSpace used for replicating data.</p>
   * @public
   */
  RecoverySnapshotTime?: Date | undefined;
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
  WorkspaceId?: string | undefined;

  /**
   * <p>The identifier of the Directory Service directory for the WorkSpace.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The user for the WorkSpace.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The IP address of the WorkSpace.</p>
   * @public
   */
  IpAddress?: string | undefined;

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
  State?: WorkspaceState | undefined;

  /**
   * <p>The identifier of the bundle used to create the WorkSpace.</p>
   * @public
   */
  BundleId?: string | undefined;

  /**
   * <p>The identifier of the subnet for the WorkSpace.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          created.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be created.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The name of the WorkSpace, as seen by the operating system. The format of this name
   *          varies. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/launch-workspaces-tutorials.html"> Launch a
   *             WorkSpace</a>. </p>
   * @public
   */
  ComputerName?: string | undefined;

  /**
   * <p>The ARN of the symmetric KMS key used to encrypt data stored on your WorkSpace.
   *          Amazon WorkSpaces does not support asymmetric KMS keys.</p>
   * @public
   */
  VolumeEncryptionKey?: string | undefined;

  /**
   * <p>Indicates whether the data stored on the user volume is encrypted.</p>
   * @public
   */
  UserVolumeEncryptionEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether the data stored on the root volume is encrypted.</p>
   * @public
   */
  RootVolumeEncryptionEnabled?: boolean | undefined;

  /**
   * <p>The name of the user-decoupled WorkSpace.</p>
   * @public
   */
  WorkspaceName?: string | undefined;

  /**
   * <p>The properties of the WorkSpace.</p>
   * @public
   */
  WorkspaceProperties?: WorkspaceProperties | undefined;

  /**
   * <p>The modification states of the WorkSpace.</p>
   * @public
   */
  ModificationStates?: ModificationState[] | undefined;

  /**
   * <p>The standby WorkSpace or primary WorkSpace related to the specified WorkSpace.</p>
   * @public
   */
  RelatedWorkspaces?: RelatedWorkspaceProperties[] | undefined;

  /**
   * <p>Indicates the settings of the data replication.</p>
   * @public
   */
  DataReplicationSettings?: DataReplicationSettings | undefined;

  /**
   * <p>The properties of the standby WorkSpace</p>
   * @public
   */
  StandbyWorkspacesProperties?: StandbyWorkspacesProperties[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be created.</p>
   * @public
   */
  FailedRequests?: FailedCreateWorkspaceRequest[] | undefined;

  /**
   * <p>Information about the WorkSpaces that were created.</p>
   *          <p>Because this operation is asynchronous, the identifier returned is not immediately
   *          available for use with other operations. For example, if you call <a>DescribeWorkspaces</a> before the WorkSpace is created, the information returned
   *          can be incomplete.</p>
   * @public
   */
  PendingRequests?: Workspace[] | undefined;
}

/**
 * <p>Describes the timeout settings for a pool of WorkSpaces.</p>
 * @public
 */
export interface TimeoutSettings {
  /**
   * <p>Specifies the amount of time, in seconds, that a streaming session remains active after users disconnect.
   *          If users try to reconnect to the streaming session after a disconnection or network interruption
   *          within the time set, they are connected to their previous session. Otherwise, they are connected
   *          to a new session with a new streaming instance.</p>
   * @public
   */
  DisconnectTimeoutInSeconds?: number | undefined;

  /**
   * <p>The amount of time in seconds a connection will stay active while idle.</p>
   * @public
   */
  IdleDisconnectTimeoutInSeconds?: number | undefined;

  /**
   * <p>Specifies the maximum amount of time, in seconds, that a streaming session can remain active.
   *          If users are still connected to a streaming instance five minutes before this limit is reached,
   *          they are prompted to save any open documents before being disconnected. After this time elapses,
   *          the instance is terminated and replaced by a new instance.</p>
   * @public
   */
  MaxUserDurationInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface CreateWorkspacesPoolRequest {
  /**
   * <p>The name of the pool.</p>
   * @public
   */
  PoolName: string | undefined;

  /**
   * <p>The pool description.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The identifier of the bundle for the pool.</p>
   * @public
   */
  BundleId: string | undefined;

  /**
   * <p>The identifier of the directory for the pool.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The user capacity of the pool.</p>
   * @public
   */
  Capacity: Capacity | undefined;

  /**
   * <p>The tags for the pool.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Indicates the application settings of the pool.</p>
   * @public
   */
  ApplicationSettings?: ApplicationSettingsRequest | undefined;

  /**
   * <p>Indicates the timeout settings of the pool.</p>
   * @public
   */
  TimeoutSettings?: TimeoutSettings | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkspacesPoolErrorCode = {
  BUNDLE_NOT_FOUND: "BUNDLE_NOT_FOUND",
  DEFAULT_OU_IS_MISSING: "DEFAULT_OU_IS_MISSING",
  DIRECTORY_NOT_FOUND: "DIRECTORY_NOT_FOUND",
  DOMAIN_JOIN_ERROR_ACCESS_DENIED: "DOMAIN_JOIN_ERROR_ACCESS_DENIED",
  DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED: "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED",
  DOMAIN_JOIN_ERROR_FILE_NOT_FOUND: "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND",
  DOMAIN_JOIN_ERROR_INVALID_PARAMETER: "DOMAIN_JOIN_ERROR_INVALID_PARAMETER",
  DOMAIN_JOIN_ERROR_LOGON_FAILURE: "DOMAIN_JOIN_ERROR_LOGON_FAILURE",
  DOMAIN_JOIN_ERROR_MORE_DATA: "DOMAIN_JOIN_ERROR_MORE_DATA",
  DOMAIN_JOIN_ERROR_NOT_SUPPORTED: "DOMAIN_JOIN_ERROR_NOT_SUPPORTED",
  DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN: "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN",
  DOMAIN_JOIN_ERROR_SECRET_ACTION_PERMISSION_IS_MISSING: "DOMAIN_JOIN_ERROR_SECRET_ACTION_PERMISSION_IS_MISSING",
  DOMAIN_JOIN_ERROR_SECRET_DECRYPTION_FAILURE: "DOMAIN_JOIN_ERROR_SECRET_DECRYPTION_FAILURE",
  DOMAIN_JOIN_ERROR_SECRET_INVALID: "DOMAIN_JOIN_ERROR_SECRET_INVALID",
  DOMAIN_JOIN_ERROR_SECRET_NOT_FOUND: "DOMAIN_JOIN_ERROR_SECRET_NOT_FOUND",
  DOMAIN_JOIN_ERROR_SECRET_STATE_INVALID: "DOMAIN_JOIN_ERROR_SECRET_STATE_INVALID",
  DOMAIN_JOIN_ERROR_SECRET_VALUE_KEY_NOT_FOUND: "DOMAIN_JOIN_ERROR_SECRET_VALUE_KEY_NOT_FOUND",
  DOMAIN_JOIN_INTERNAL_SERVICE_ERROR: "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR",
  DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME: "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME",
  DOMAIN_JOIN_NERR_PASSWORD_EXPIRED: "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED",
  DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED: "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED",
  IAM_SERVICE_ROLE_IS_MISSING: "IAM_SERVICE_ROLE_IS_MISSING",
  IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION: "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION",
  IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION: "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION",
  IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION: "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION",
  IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION: "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION",
  IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION: "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION",
  IGW_NOT_ATTACHED: "IGW_NOT_ATTACHED",
  IMAGE_NOT_FOUND: "IMAGE_NOT_FOUND",
  INSUFFICIENT_PERMISSIONS_ERROR: "INSUFFICIENT_PERMISSIONS_ERROR",
  INTERNAL_SERVICE_ERROR: "INTERNAL_SERVICE_ERROR",
  INVALID_SUBNET_CONFIGURATION: "INVALID_SUBNET_CONFIGURATION",
  MACHINE_ROLE_IS_MISSING: "MACHINE_ROLE_IS_MISSING",
  NETWORK_INTERFACE_LIMIT_EXCEEDED: "NETWORK_INTERFACE_LIMIT_EXCEEDED",
  SECURITY_GROUPS_NOT_FOUND: "SECURITY_GROUPS_NOT_FOUND",
  STS_DISABLED_IN_REGION: "STS_DISABLED_IN_REGION",
  SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES: "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES",
  SUBNET_NOT_FOUND: "SUBNET_NOT_FOUND",
  WORKSPACES_POOL_INSTANCE_PROVISIONING_FAILURE: "WORKSPACES_POOL_INSTANCE_PROVISIONING_FAILURE",
  WORKSPACES_POOL_STOPPED: "WORKSPACES_POOL_STOPPED",
} as const;

/**
 * @public
 */
export type WorkspacesPoolErrorCode = (typeof WorkspacesPoolErrorCode)[keyof typeof WorkspacesPoolErrorCode];

/**
 * <p>Describes a pool error.</p>
 * @public
 */
export interface WorkspacesPoolError {
  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: WorkspacesPoolErrorCode | undefined;

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
export const WorkspacesPoolState = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type WorkspacesPoolState = (typeof WorkspacesPoolState)[keyof typeof WorkspacesPoolState];

/**
 * <p>Describes a pool of WorkSpaces.</p>
 * @public
 */
export interface WorkspacesPool {
  /**
   * <p>The identifier of a pool.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the pool.</p>
   * @public
   */
  PoolArn: string | undefined;

  /**
   * <p>The capacity status for the pool</p>
   * @public
   */
  CapacityStatus: CapacityStatus | undefined;

  /**
   * <p>The name of the pool,</p>
   * @public
   */
  PoolName: string | undefined;

  /**
   * <p>The description of the pool.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The current state of the pool.</p>
   * @public
   */
  State: WorkspacesPoolState | undefined;

  /**
   * <p>The time the pool was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The identifier of the bundle used by the pool.</p>
   * @public
   */
  BundleId: string | undefined;

  /**
   * <p>The identifier of the directory used by the pool.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The pool errors.</p>
   * @public
   */
  Errors?: WorkspacesPoolError[] | undefined;

  /**
   * <p>The persistent application settings for users of the pool.</p>
   * @public
   */
  ApplicationSettings?: ApplicationSettingsResponse | undefined;

  /**
   * <p>The amount of time that a pool session remains active after users disconnect.
   *          If they try to reconnect to the pool session after a disconnection or network interruption
   *          within this time interval, they are connected to their previous session.
   *          Otherwise, they are connected to a new session with a new pool instance.</p>
   * @public
   */
  TimeoutSettings?: TimeoutSettings | undefined;
}

/**
 * @public
 */
export interface CreateWorkspacesPoolResult {
  /**
   * <p>Indicates the pool to create.</p>
   * @public
   */
  WorkspacesPool?: WorkspacesPool | undefined;
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
  LogoUrl?: string | undefined;

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
  SupportEmail?: string | undefined;

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
  SupportLink?: string | undefined;

  /**
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   * @public
   */
  ForgotPasswordLink?: string | undefined;

  /**
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *          <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em,
   *             i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.</p>
   * @public
   */
  LoginMessage?: Record<string, string> | undefined;
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
  Logo?: Uint8Array | undefined;

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
  SupportEmail?: string | undefined;

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
  SupportLink?: string | undefined;

  /**
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   * @public
   */
  ForgotPasswordLink?: string | undefined;

  /**
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *          <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em,
   *             i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.</p>
   * @public
   */
  LoginMessage?: Record<string, string> | undefined;
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
  EnableWorkDocs?: boolean | undefined;

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
  EnableInternetAccess?: boolean | undefined;

  /**
   * <p>The organizational unit (OU) in the directory for the WorkSpace machine accounts.</p>
   * @public
   */
  DefaultOu?: string | undefined;

  /**
   * <p>The identifier of the default security group to apply to WorkSpaces when they are
   *          created. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-security-groups.html"> Security
   *             Groups for Your WorkSpaces</a>.</p>
   * @public
   */
  CustomSecurityGroupId?: string | undefined;

  /**
   * <p>Specifies whether WorkSpace users are local administrators on their WorkSpaces.</p>
   * @public
   */
  UserEnabledAsLocalAdministrator?: boolean | undefined;

  /**
   * <p>Specifies whether maintenance mode is enabled for WorkSpaces. For more information, see
   *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace
   *             Maintenance</a>.</p>
   * @public
   */
  EnableMaintenanceMode?: boolean | undefined;

  /**
   * <p>Indicates the IAM role ARN of the instance.</p>
   * @public
   */
  InstanceIamRoleArn?: string | undefined;
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
   * <p>A string of up to 64 ASCII characters that Amazon WorkSpaces uses to ensure idempotent creation.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountLinkInvitationResult {
  /**
   * <p>Information about the account link.</p>
   * @public
   */
  AccountLink?: AccountLink | undefined;
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
  BundleId?: string | undefined;
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
  Force?: boolean | undefined;
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
  Associations?: WorkspaceResourceAssociation[] | undefined;
}

/**
 * @public
 */
export interface DeployWorkspaceApplicationsResult {
  /**
   * <p>The list of deployed associations and information about them.</p>
   * @public
   */
  Deployment?: WorkSpaceApplicationDeployment | undefined;
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
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum | undefined;

  /**
   * <p>The IP address range, specified as an IPv4 CIDR block, used for the management network
   *          interface.</p>
   *          <p>The management network interface is connected to a secure Amazon WorkSpaces management
   *          network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
   *          clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
   * @public
   */
  DedicatedTenancyManagementCidrRange?: string | undefined;

  /**
   * <p>The type of linked account.</p>
   * @public
   */
  DedicatedTenancyAccountType?: DedicatedTenancyAccountType | undefined;
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
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountModificationsResult {
  /**
   * <p>The list of modifications to the configuration of BYOL.</p>
   * @public
   */
  AccountModifications?: AccountModification[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationAssociationsRequest {
  /**
   * <p>The maximum number of associations to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
  Associations?: ApplicationResourceAssociation[] | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  ApplicationIds?: string[] | undefined;

  /**
   * <p>The compute types supported by the applications.</p>
   * @public
   */
  ComputeTypeNames?: Compute[] | undefined;

  /**
   * <p>The license availability for the applications.</p>
   * @public
   */
  LicenseType?: WorkSpaceApplicationLicenseType | undefined;

  /**
   * <p>The operating systems supported by the applications.</p>
   * @public
   */
  OperatingSystemNames?: OperatingSystemName[] | undefined;

  /**
   * <p>The owner of the applications.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The maximum number of applications to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  ApplicationId?: string | undefined;

  /**
   * <p>The time the application is created.</p>
   * @public
   */
  Created?: Date | undefined;

  /**
   * <p>The description of the WorkSpace application.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The license availability for the applications.</p>
   * @public
   */
  LicenseType?: WorkSpaceApplicationLicenseType | undefined;

  /**
   * <p>The name of the WorkSpace application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The owner of the WorkSpace application.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The status of WorkSpace application.</p>
   * @public
   */
  State?: WorkSpaceApplicationState | undefined;

  /**
   * <p>The supported compute types of the WorkSpace application.</p>
   * @public
   */
  SupportedComputeTypeNames?: Compute[] | undefined;

  /**
   * <p>The supported operating systems of the WorkSpace application.</p>
   * @public
   */
  SupportedOperatingSystemNames?: OperatingSystemName[] | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationsResult {
  /**
   * <p>List of information about the specified applications.</p>
   * @public
   */
  Applications?: WorkSpaceApplication[] | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  Associations?: BundleResourceAssociation[] | undefined;
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
  LogoUrl?: string | undefined;

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
  Logo2xUrl?: string | undefined;

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
  Logo3xUrl?: string | undefined;

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
  SupportEmail?: string | undefined;

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
  SupportLink?: string | undefined;

  /**
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   * @public
   */
  ForgotPasswordLink?: string | undefined;

  /**
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *          <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em,
   *             i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.</p>
   * @public
   */
  LoginMessage?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeClientBrandingResult {
  /**
   * <p>The branding information for Windows devices.</p>
   * @public
   */
  DeviceTypeWindows?: DefaultClientBrandingAttributes | undefined;

  /**
   * <p>The branding information for macOS devices.</p>
   * @public
   */
  DeviceTypeOsx?: DefaultClientBrandingAttributes | undefined;

  /**
   * <p>The branding information for Android devices.</p>
   * @public
   */
  DeviceTypeAndroid?: DefaultClientBrandingAttributes | undefined;

  /**
   * <p>The branding information for iOS devices.</p>
   * @public
   */
  DeviceTypeIos?: IosClientBrandingAttributes | undefined;

  /**
   * <p>The branding information for Linux devices.</p>
   * @public
   */
  DeviceTypeLinux?: DefaultClientBrandingAttributes | undefined;

  /**
   * <p>The branding information for Web access.</p>
   * @public
   */
  DeviceTypeWeb?: DefaultClientBrandingAttributes | undefined;
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
  ClientPropertiesList?: ClientPropertiesResult[] | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeConnectClientAddInsResult {
  /**
   * <p>Information about client add-ins.</p>
   * @public
   */
  AddIns?: ConnectClientAddIn[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionAliasesRequest {
  /**
   * <p>The identifiers of the connection aliases to describe.</p>
   * @public
   */
  AliasIds?: string[] | undefined;

  /**
   * <p>The identifier of the directory associated with the connection alias.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The maximum number of connection aliases to return.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionAliasesResult {
  /**
   * <p>Information about the specified connection aliases.</p>
   * @public
   */
  ConnectionAliases?: ConnectionAlias[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionAliasPermissionsResult {
  /**
   * <p>The identifier of the connection alias.</p>
   * @public
   */
  AliasId?: string | undefined;

  /**
   * <p>The permissions associated with a connection alias.</p>
   * @public
   */
  ConnectionAliasPermissions?: ConnectionAliasPermission[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string | undefined;
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
  AssociatedResourceId?: string | undefined;

  /**
   * <p>The resource type of the associated resources.</p>
   * @public
   */
  AssociatedResourceType?: ImageAssociatedResourceType | undefined;

  /**
   * <p>The time the association is created.</p>
   * @public
   */
  Created?: Date | undefined;

  /**
   * <p>The time the association status was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The identifier of the image.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The status of the image resource association.</p>
   * @public
   */
  State?: AssociationState | undefined;

  /**
   * <p>The reason the association deployment failed.</p>
   * @public
   */
  StateReason?: AssociationStateReason | undefined;
}

/**
 * @public
 */
export interface DescribeImageAssociationsResult {
  /**
   * <p>List of information about the specified associations.</p>
   * @public
   */
  Associations?: ImageResourceAssociation[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpGroupsRequest {
  /**
   * <p>The identifiers of one or more IP access control groups.</p>
   * @public
   */
  GroupIds?: string[] | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
  groupId?: string | undefined;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  groupName?: string | undefined;

  /**
   * <p>The description of the group.</p>
   * @public
   */
  groupDesc?: string | undefined;

  /**
   * <p>The rules.</p>
   * @public
   */
  userRules?: IpRuleItem[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpGroupsResult {
  /**
   * <p>Information about the IP access control groups.</p>
   * @public
   */
  Result?: WorkspacesIpGroup[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string | undefined;
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
  TagList?: Tag[] | undefined;
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
  Associations?: WorkspaceResourceAssociation[] | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceBundlesRequest {
  /**
   * <p>The identifiers of the bundles. You cannot combine this parameter with any other filter.</p>
   * @public
   */
  BundleIds?: string[] | undefined;

  /**
   * <p>The owner of the bundles. You cannot combine this parameter with any other filter.</p>
   *          <p>To describe the bundles provided by Amazon Web Services, specify <code>AMAZON</code>.
   *          To describe the bundles that belong to your account, don't specify a value.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The token for the next set of results. (You received this token from a previous call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceBundlesResult {
  /**
   * <p>Information about the bundles.</p>
   * @public
   */
  Bundles?: WorkspaceBundle[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more
   *          results to return. This token is valid for one day and must be used within that time
   *          frame.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DescribeWorkspaceDirectoriesFilterName = {
  USER_IDENTITY_TYPE: "USER_IDENTITY_TYPE",
  WORKSPACE_TYPE: "WORKSPACE_TYPE",
} as const;

/**
 * @public
 */
export type DescribeWorkspaceDirectoriesFilterName =
  (typeof DescribeWorkspaceDirectoriesFilterName)[keyof typeof DescribeWorkspaceDirectoriesFilterName];

/**
 * <p>Describes the filter conditions for the WorkSpaces to return.</p>
 * @public
 */
export interface DescribeWorkspaceDirectoriesFilter {
  /**
   * <p>The name of the WorkSpaces to filter.</p>
   * @public
   */
  Name: DescribeWorkspaceDirectoriesFilterName | undefined;

  /**
   * <p>The values for filtering WorkSpaces</p>
   * @public
   */
  Values: string[] | undefined;
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
  DirectoryIds?: string[] | undefined;

  /**
   * <p>The names of the WorkSpace directories.</p>
   * @public
   */
  WorkspaceDirectoryNames?: string[] | undefined;

  /**
   * <p>The maximum number of directories to return.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The filter condition for the WorkSpaces.</p>
   * @public
   */
  Filters?: DescribeWorkspaceDirectoriesFilter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkspaceDirectoryType = {
  AD_CONNECTOR: "AD_CONNECTOR",
  AWS_IAM_IDENTITY_CENTER: "AWS_IAM_IDENTITY_CENTER",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
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
export const EndpointEncryptionMode = {
  FIPS_VALIDATED: "FIPS_VALIDATED",
  STANDARD_TLS: "STANDARD_TLS",
} as const;

/**
 * @public
 */
export type EndpointEncryptionMode = (typeof EndpointEncryptionMode)[keyof typeof EndpointEncryptionMode];

/**
 * <p>Specifies the configurations of the identity center.</p>
 * @public
 */
export interface IDCConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the identity center instance.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * <p>Specifies the configurations of the Microsoft Entra.</p>
 * @public
 */
export interface MicrosoftEntraConfig {
  /**
   * <p>The identifier of the tenant.</p>
   * @public
   */
  TenantId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the application config.</p>
   * @public
   */
  ApplicationConfigSecretArn?: string | undefined;
}

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
  Status?: SamlStatusEnum | undefined;

  /**
   * <p>The SAML 2.0 identity provider (IdP) user access URL is the URL a user would navigate to in their web browser in
   *          order to federate from the IdP and directly access the application, without any SAML 2.0 service provider (SP)
   *          bindings.</p>
   * @public
   */
  UserAccessUrl?: string | undefined;

  /**
   * <p>The relay state parameter name supported by the SAML 2.0 identity provider (IdP). When the end user is redirected to
   *          the user access URL from the WorkSpaces client application, this relay state parameter name is appended as a query
   *          parameter to the URL along with the relay state endpoint to return the user to the client application session.</p>
   *          <p>To use SAML 2.0 authentication with WorkSpaces, the IdP must support IdP-initiated deep linking for the relay state
   *          URL. Consult your IdP documentation for more information.</p>
   * @public
   */
  RelayStateParameterName?: string | undefined;
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
  RestartWorkspace?: ReconnectEnum | undefined;

  /**
   * <p>Specifies whether users can increase the volume size of the drives on their
   *          WorkSpace.</p>
   * @public
   */
  IncreaseVolumeSize?: ReconnectEnum | undefined;

  /**
   * <p>Specifies whether users can change the compute type (bundle) for their WorkSpace.</p>
   * @public
   */
  ChangeComputeType?: ReconnectEnum | undefined;

  /**
   * <p>Specifies whether users can switch the running mode of their WorkSpace.</p>
   * @public
   */
  SwitchRunningMode?: ReconnectEnum | undefined;

  /**
   * <p>Specifies whether users can rebuild the operating system of a WorkSpace to its original
   *          state.</p>
   * @public
   */
  RebuildWorkspace?: ReconnectEnum | undefined;
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
 * <p>Describes the Global Accelerator for directory</p>
 * @public
 */
export interface GlobalAcceleratorForDirectory {
  /**
   * <p>Indicates if Global Accelerator for directory is enabled or disabled.</p>
   * @public
   */
  Mode: AGAModeForDirectoryEnum | undefined;

  /**
   * <p>Indicates the preferred protocol for Global Accelerator.</p>
   * @public
   */
  PreferredProtocol?: AGAPreferredProtocolForDirectory | undefined;
}

/**
 * @public
 * @enum
 */
export const StorageConnectorTypeEnum = {
  HOME_FOLDER: "HOME_FOLDER",
} as const;

/**
 * @public
 */
export type StorageConnectorTypeEnum = (typeof StorageConnectorTypeEnum)[keyof typeof StorageConnectorTypeEnum];

/**
 * @public
 * @enum
 */
export const StorageConnectorStatusEnum = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type StorageConnectorStatusEnum = (typeof StorageConnectorStatusEnum)[keyof typeof StorageConnectorStatusEnum];

/**
 * <p>Describes the storage connector.</p>
 * @public
 */
export interface StorageConnector {
  /**
   * <p>The type of connector used to save user files.</p>
   * @public
   */
  ConnectorType: StorageConnectorTypeEnum | undefined;

  /**
   * <p>Indicates if the storage connetor is enabled or disabled.</p>
   * @public
   */
  Status: StorageConnectorStatusEnum | undefined;
}

/**
 * @public
 * @enum
 */
export const StreamingExperiencePreferredProtocolEnum = {
  TCP: "TCP",
  UDP: "UDP",
} as const;

/**
 * @public
 */
export type StreamingExperiencePreferredProtocolEnum =
  (typeof StreamingExperiencePreferredProtocolEnum)[keyof typeof StreamingExperiencePreferredProtocolEnum];

/**
 * @public
 * @enum
 */
export const UserSettingActionEnum = {
  CLIPBOARD_COPY_FROM_LOCAL_DEVICE: "CLIPBOARD_COPY_FROM_LOCAL_DEVICE",
  CLIPBOARD_COPY_TO_LOCAL_DEVICE: "CLIPBOARD_COPY_TO_LOCAL_DEVICE",
  PRINTING_TO_LOCAL_DEVICE: "PRINTING_TO_LOCAL_DEVICE",
  SMART_CARD: "SMART_CARD",
} as const;

/**
 * @public
 */
export type UserSettingActionEnum = (typeof UserSettingActionEnum)[keyof typeof UserSettingActionEnum];

/**
 * @public
 * @enum
 */
export const UserSettingPermissionEnum = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type UserSettingPermissionEnum = (typeof UserSettingPermissionEnum)[keyof typeof UserSettingPermissionEnum];

/**
 * <p>Information about the user's permission settings.</p>
 * @public
 */
export interface UserSetting {
  /**
   * <p>Indicates the type of action.</p>
   * @public
   */
  Action: UserSettingActionEnum | undefined;

  /**
   * <p>Indicates if the setting is enabled or disabled.</p>
   * @public
   */
  Permission: UserSettingPermissionEnum | undefined;

  /**
   * <p>Indicates the maximum character length for the specified user setting.</p>
   * @public
   */
  MaximumLength?: number | undefined;
}

/**
 * <p>Describes the streaming properties.</p>
 * @public
 */
export interface StreamingProperties {
  /**
   * <p>Indicates the type of preferred protocol for the streaming experience.</p>
   * @public
   */
  StreamingExperiencePreferredProtocol?: StreamingExperiencePreferredProtocolEnum | undefined;

  /**
   * <p>Indicates the permission settings asscoiated with the user.</p>
   * @public
   */
  UserSettings?: UserSetting[] | undefined;

  /**
   * <p>Indicates the storage connector used </p>
   * @public
   */
  StorageConnectors?: StorageConnector[] | undefined;

  /**
   * <p>Indicates the Global Accelerator properties.</p>
   * @public
   */
  GlobalAccelerator?: GlobalAcceleratorForDirectory | undefined;
}

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
 * @enum
 */
export const UserIdentityType = {
  AWS_DIRECTORY_SERVICE: "AWS_DIRECTORY_SERVICE",
  AWS_IAM_IDENTITY_CENTER: "AWS_IAM_IDENTITY_CENTER",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
} as const;

/**
 * @public
 */
export type UserIdentityType = (typeof UserIdentityType)[keyof typeof UserIdentityType];

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
  DeviceTypeWindows?: AccessPropertyValue | undefined;

  /**
   * <p>Indicates whether users can use macOS clients to access their WorkSpaces.</p>
   * @public
   */
  DeviceTypeOsx?: AccessPropertyValue | undefined;

  /**
   * <p>Indicates whether users can access their WorkSpaces through a web browser.</p>
   * @public
   */
  DeviceTypeWeb?: AccessPropertyValue | undefined;

  /**
   * <p>Indicates whether users can use iOS devices to access their WorkSpaces.</p>
   * @public
   */
  DeviceTypeIos?: AccessPropertyValue | undefined;

  /**
   * <p>Indicates whether users can use Android and Android-compatible Chrome OS devices to
   *          access their WorkSpaces.</p>
   * @public
   */
  DeviceTypeAndroid?: AccessPropertyValue | undefined;

  /**
   * <p>Indicates whether users can use Chromebooks to access their WorkSpaces.</p>
   * @public
   */
  DeviceTypeChromeOs?: AccessPropertyValue | undefined;

  /**
   * <p>Indicates whether users can use zero client devices to access their WorkSpaces.</p>
   * @public
   */
  DeviceTypeZeroClient?: AccessPropertyValue | undefined;

  /**
   * <p>Indicates whether users can use Linux clients to access their WorkSpaces.</p>
   * @public
   */
  DeviceTypeLinux?: AccessPropertyValue | undefined;

  /**
   * <p>Indicates whether users can access their WorkSpaces through a WorkSpaces Thin Client.</p>
   * @public
   */
  DeviceTypeWorkSpacesThinClient?: AccessPropertyValue | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkspaceType = {
  PERSONAL: "PERSONAL",
  POOLS: "POOLS",
} as const;

/**
 * @public
 */
export type WorkspaceType = (typeof WorkspaceType)[keyof typeof WorkspaceType];

/**
 * <p>Describes a directory that is used with Amazon WorkSpaces.</p>
 * @public
 */
export interface WorkspaceDirectory {
  /**
   * <p>The directory identifier.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The directory alias.</p>
   * @public
   */
  Alias?: string | undefined;

  /**
   * <p>The name of the directory.</p>
   * @public
   */
  DirectoryName?: string | undefined;

  /**
   * <p>The registration code for the directory. This is the code that users enter in their
   *          Amazon WorkSpaces client application to connect to the directory.</p>
   * @public
   */
  RegistrationCode?: string | undefined;

  /**
   * <p>The identifiers of the subnets used with the directory.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The IP addresses of the DNS servers for the directory.</p>
   * @public
   */
  DnsIpAddresses?: string[] | undefined;

  /**
   * <p>The user name for the service account.</p>
   * @public
   */
  CustomerUserName?: string | undefined;

  /**
   * <p>The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make
   *          calls to other services, such as Amazon EC2, on your behalf.</p>
   * @public
   */
  IamRoleId?: string | undefined;

  /**
   * <p>The directory type.</p>
   * @public
   */
  DirectoryType?: WorkspaceDirectoryType | undefined;

  /**
   * <p>The identifier of the security group that is assigned to new WorkSpaces.</p>
   * @public
   */
  WorkspaceSecurityGroupId?: string | undefined;

  /**
   * <p>The state of the directory's registration with Amazon WorkSpaces. After a directory is
   *          deregistered, the <code>DEREGISTERED</code> state is returned very briefly before the
   *          directory metadata is cleaned up, so this state is rarely returned. To confirm that a
   *          directory is deregistered, check for the directory ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html">
   *             DescribeWorkspaceDirectories</a>. If the directory ID isn't returned, then the
   *          directory has been successfully deregistered.</p>
   * @public
   */
  State?: WorkspaceDirectoryState | undefined;

  /**
   * <p>The default creation properties for all WorkSpaces in the directory.</p>
   * @public
   */
  WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties | undefined;

  /**
   * <p>The identifiers of the IP access control groups associated with the directory.</p>
   * @public
   */
  ipGroupIds?: string[] | undefined;

  /**
   * <p>The devices and operating systems that users can use to access WorkSpaces.</p>
   * @public
   */
  WorkspaceAccessProperties?: WorkspaceAccessProperties | undefined;

  /**
   * <p>Specifies whether the directory is dedicated or shared. To use Bring Your Own License
   *          (BYOL), this value must be set to <code>DEDICATED</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring
   *             Your Own Windows Desktop Images</a>.</p>
   * @public
   */
  Tenancy?: Tenancy | undefined;

  /**
   * <p>The default self-service permissions for WorkSpaces in the directory.</p>
   * @public
   */
  SelfservicePermissions?: SelfservicePermissions | undefined;

  /**
   * <p>Describes the enablement status, user access URL, and relay state parameter name that are used for configuring
   *          federation with an SAML 2.0 identity provider.</p>
   * @public
   */
  SamlProperties?: SamlProperties | undefined;

  /**
   * <p>The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP)
   *          user identities to Active Directory for WorkSpaces login.</p>
   * @public
   */
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties | undefined;

  /**
   * <p>Endpoint encryption mode that allows you to configure the specified directory between
   *          Standard TLS and FIPS 140-2 validated mode.</p>
   * @public
   */
  EndpointEncryptionMode?: EndpointEncryptionMode | undefined;

  /**
   * <p>Specifies details about Microsoft Entra configurations.</p>
   * @public
   */
  MicrosoftEntraConfig?: MicrosoftEntraConfig | undefined;

  /**
   * <p>The name fo the WorkSpace directory.</p>
   * @public
   */
  WorkspaceDirectoryName?: string | undefined;

  /**
   * <p>The description of the WorkSpace directory</p>
   * @public
   */
  WorkspaceDirectoryDescription?: string | undefined;

  /**
   * <p>Indicates the identity type of the specifired user.</p>
   * @public
   */
  UserIdentityType?: UserIdentityType | undefined;

  /**
   * <p>Indicates whether the directory's WorkSpace type is personal or pools.</p>
   * @public
   */
  WorkspaceType?: WorkspaceType | undefined;

  /**
   * <p>Specifies details about identity center configurations.</p>
   * @public
   */
  IDCConfig?: IDCConfig | undefined;

  /**
   * <p>Information about the Active Directory config.</p>
   * @public
   */
  ActiveDirectoryConfig?: ActiveDirectoryConfig | undefined;

  /**
   * <p>The streaming properties to configure.</p>
   * @public
   */
  StreamingProperties?: StreamingProperties | undefined;

  /**
   * <p>The error message returned.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceDirectoriesResult {
  /**
   * <p>Information about the directories.</p>
   * @public
   */
  Directories?: WorkspaceDirectory[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
  SharedAccountId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceImagePermissionsResult {
  /**
   * <p>The identifier of the image.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The identifiers of the Amazon Web Services accounts that the image has been shared
   *          with.</p>
   * @public
   */
  ImagePermissions?: ImagePermission[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string | undefined;
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
  ImageIds?: string[] | undefined;

  /**
   * <p>The type (owned or shared) of the image.</p>
   * @public
   */
  ImageType?: ImageType | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkspaceImageErrorDetailCode = {
  ADDITIONAL_DRIVES_ATTACHED: "AdditionalDrivesAttached",
  ADDITIONAL_DRIVES_PRESENT: "AdditionalDrivesPresent",
  AMAZON_SSM_AGENT_ENABLED: "AmazonSsmAgentEnabled",
  ANTI_VIRUS_INSTALLED: "AntiVirusInstalled",
  APPX_PACKAGES_INSTALLED: "AppXPackagesInstalled",
  AUTO_LOGON_ENABLED: "AutoLogonEnabled",
  AUTO_MOUNT_DISABLED: "AutoMountDisabled",
  AZURE_DOMAIN_JOINED: "AzureDomainJoined",
  DHCP_DISABLED: "DHCPDisabled",
  DISK_FREE_SPACE: "DiskFreeSpace",
  DISK_SIZE_EXCEEDED: "DiskSizeExceeded",
  DOMAIN_ACCOUNT_SERVICES_FOUND: "DomainAccountServicesFound",
  DOMAIN_JOINED: "DomainJoined",
  ENVIRONMENT_VARIABLES_PATH_MISSING_ENTRIES: "EnvironmentVariablesPathMissingEntries",
  FIREWALL_ENABLED: "FirewallEnabled",
  INCOMPATIBLE_PARTITIONING: "IncompatiblePartitioning",
  INSUFFICIENT_DISK_SPACE: "InsufficientDiskSpace",
  INSUFFICIENT_REARM_COUNT: "InsufficientRearmCount",
  INVALID_IP: "InvalidIp",
  IN_PLACE_UPGRADE: "InPlaceUpgrade",
  MULTIPLE_BOOT_PARTITION: "MultipleBootPartition",
  MULTIPLE_USER_PROFILES: "MultipleUserProfiles",
  OFFICE_INSTALLED: "OfficeInstalled",
  OS_NOT_SUPPORTED: "OSNotSupported",
  OUTDATED_POWERSHELL_VERSION: "OutdatedPowershellVersion",
  PCOIP_AGENT_INSTALLED: "PCoIPAgentInstalled",
  PENDING_REBOOT: "PendingReboot",
  REALTIME_UNIVERSAL_DISABLED: "RealTimeUniversalDisabled",
  REMOTE_DESKTOP_SERVICES_DISABLED: "RemoteDesktopServicesDisabled",
  RESERVED_STORAGE_IN_USE: "ReservedStorageInUse",
  SIXTY_FOUR_BIT_OS: "Requires64BitOS",
  STAGED_APPX_PACKAGE: "StagedAppxPackage",
  SYSPREP_FILE_MISSING: "SysPrepFileMissing",
  UEFI_NOT_SUPPORTED: "UEFINotSupported",
  UNKNOWN_ERROR: "UnknownError",
  UNSUPPORTED_OS_UPGRADE: "UnsupportedOsUpgrade",
  UNSUPPORTED_SECURITY_PROTOCOL: "UnsupportedSecurityProtocol",
  USER_PROFILE_MISSING: "UserProfileMissing",
  VMWARE_TOOLS_INSTALLED: "VMWareToolsInstalled",
  WINDOWS_MODULES_INSTALLER_DISABLED: "WindowsModulesInstallerDisabled",
  WINDOWS_UPDATES_ENABLED: "WindowsUpdatesEnabled",
  WINDOWS_UPDATES_REQUIRED: "WindowsUpdatesRequired",
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
  ErrorCode?: WorkspaceImageErrorDetailCode | undefined;

  /**
   * <p>The text of the error message related the error code.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
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
  UpdateAvailable?: boolean | undefined;

  /**
   * <p>A description of whether updates for the WorkSpace image are pending or
   *          available.</p>
   * @public
   */
  Description?: string | undefined;
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
  ImageId?: string | undefined;

  /**
   * <p>The name of the image.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the image.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The operating system that the image is running. </p>
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * <p>The status of the image.</p>
   * @public
   */
  State?: WorkspaceImageState | undefined;

  /**
   * <p>Specifies whether the image is running on dedicated hardware. When Bring Your Own
   *          License (BYOL) is enabled, this value is set to <code>DEDICATED</code>. For more
   *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows
   *             Desktop Images</a>.</p>
   * @public
   */
  RequiredTenancy?: WorkspaceImageRequiredTenancy | undefined;

  /**
   * <p>The error code that is returned for the image.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The text of the error message that is returned for the image.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The date when the image was created. If the image has been shared, the Amazon Web Services account that the image has been shared with sees the original creation date
   *          of the image.</p>
   * @public
   */
  Created?: Date | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the image.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The updates (if any) that are available for the specified image.</p>
   * @public
   */
  Updates?: UpdateResult | undefined;

  /**
   * <p>Additional details of the error returned for the image, including the
   *          possible causes of the errors and troubleshooting information.</p>
   * @public
   */
  ErrorDetails?: ErrorDetails[] | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceImagesResult {
  /**
   * <p>Information about the images.</p>
   * @public
   */
  Images?: WorkspaceImage[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string | undefined;
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
  WorkspaceIds?: string[] | undefined;

  /**
   * <p>The identifier of the directory. In addition, you can optionally specify a specific
   *          directory user (see <code>UserName</code>). You cannot combine this parameter with any
   *          other filter.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The name of the directory user. You must specify this parameter with
   *             <code>DirectoryId</code>.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The identifier of the bundle. All WorkSpaces that are created from this bundle are
   *          retrieved. You cannot combine this parameter with any other filter.</p>
   * @public
   */
  BundleId?: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The name of the user-decoupled WorkSpace.</p>
   * @public
   */
  WorkspaceName?: string | undefined;
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
  Workspaces?: Workspace[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspacesConnectionStatusRequest {
  /**
   * <p>The identifiers of the WorkSpaces. You can specify up to 25 WorkSpaces.</p>
   * @public
   */
  WorkspaceIds?: string[] | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  WorkspaceId?: string | undefined;

  /**
   * <p>The connection state of the WorkSpace. The connection state is unknown if the WorkSpace
   *          is stopped.</p>
   * @public
   */
  ConnectionState?: ConnectionState | undefined;

  /**
   * <p>The timestamp of the connection status check.</p>
   * @public
   */
  ConnectionStateCheckTimestamp?: Date | undefined;

  /**
   * <p>The timestamp of the last known user connection.</p>
   * @public
   */
  LastKnownUserConnectionTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspacesConnectionStatusResult {
  /**
   * <p>Information about the connection status of the WorkSpace.</p>
   * @public
   */
  WorkspacesConnectionStatus?: WorkspaceConnectionStatus[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string | undefined;
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
  SnapshotTime?: Date | undefined;
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
  RebuildSnapshots?: Snapshot[] | undefined;

  /**
   * <p>Information about the snapshots that can be used to restore a WorkSpace. These snapshots
   *          include both the root volume and the user volume.</p>
   * @public
   */
  RestoreSnapshots?: Snapshot[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DescribeWorkspacesPoolsFilterName = {
  POOLNAME: "PoolName",
} as const;

/**
 * @public
 */
export type DescribeWorkspacesPoolsFilterName =
  (typeof DescribeWorkspacesPoolsFilterName)[keyof typeof DescribeWorkspacesPoolsFilterName];

/**
 * @public
 * @enum
 */
export const DescribeWorkspacesPoolsFilterOperator = {
  CONTAINS: "CONTAINS",
  EQUALS: "EQUALS",
  NOTCONTAINS: "NOTCONTAINS",
  NOTEQUALS: "NOTEQUALS",
} as const;

/**
 * @public
 */
export type DescribeWorkspacesPoolsFilterOperator =
  (typeof DescribeWorkspacesPoolsFilterOperator)[keyof typeof DescribeWorkspacesPoolsFilterOperator];

/**
 * <p>Describes the filter conditions for WorkSpaces Pools to return.</p>
 * @public
 */
export interface DescribeWorkspacesPoolsFilter {
  /**
   * <p>The name of the pool to filter.</p>
   * @public
   */
  Name: DescribeWorkspacesPoolsFilterName | undefined;

  /**
   * <p>The values for filtering WorkSpaces Pools.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The operator values for filtering WorkSpaces Pools.</p>
   * @public
   */
  Operator: DescribeWorkspacesPoolsFilterOperator | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspacesPoolsRequest {
  /**
   * <p>The identifier of the WorkSpaces Pools.</p>
   * @public
   */
  PoolIds?: string[] | undefined;

  /**
   * <p>The filter conditions for the WorkSpaces Pool to return.</p>
   * @public
   */
  Filters?: DescribeWorkspacesPoolsFilter[] | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspacesPoolsResult {
  /**
   * <p>Information about the WorkSpaces Pools.</p>
   * @public
   */
  WorkspacesPools?: WorkspacesPool[] | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspacesPoolSessionsRequest {
  /**
   * <p>The identifier of the pool.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>The identifier of the user.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The maximum size of each page of results. The default value is 20 and the maximum value
   *          is 50.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
 * <p>Describes the network details of a WorkSpaces Pool.</p>
 * @public
 */
export interface NetworkAccessConfiguration {
  /**
   * <p>The private IP address of the elastic network interface that is attached to instances in your VPC.</p>
   * @public
   */
  EniPrivateIpAddress?: string | undefined;

  /**
   * <p>The resource identifier of the elastic network interface that is attached to instances in your
   *          VPC. All network interfaces have the eni-xxxxxxxx resource identifier.</p>
   * @public
   */
  EniId?: string | undefined;
}

/**
 * <p>Describes a pool session.</p>
 * @public
 */
export interface WorkspacesPoolSession {
  /**
   * <p>The authentication method. The user is authenticated using a
   *          WorkSpaces Pools URL (API) or SAML 2.0 federation (SAML).</p>
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * <p>Specifies whether a user is connected to the pool session.</p>
   * @public
   */
  ConnectionState?: SessionConnectionState | undefined;

  /**
   * <p>The identifier of the session.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>The identifier for the instance hosting the session.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The identifier of the pool.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>The time that the pool session ended.</p>
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * <p>Describes the network details of the pool.</p>
   * @public
   */
  NetworkAccessConfiguration?: NetworkAccessConfiguration | undefined;

  /**
   * <p>The time that the pool sission started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The identifier of the user.</p>
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspacesPoolSessionsResult {
  /**
   * <p>Describes the pool sessions.</p>
   * @public
   */
  Sessions?: WorkspacesPoolSession[] | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  Association?: WorkspaceResourceAssociation | undefined;
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
  WorkspaceId?: string | undefined;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be rebooted.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          rebooted.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetAccountLinkRequest {
  /**
   * <p>The identifier of the account to link.</p>
   * @public
   */
  LinkId?: string | undefined;

  /**
   * <p>The identifier of the account link</p>
   * @public
   */
  LinkedAccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetAccountLinkResult {
  /**
   * <p>The account link of the account link to retrieve.</p>
   * @public
   */
  AccountLink?: AccountLink | undefined;
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
  Logo?: Uint8Array | undefined;

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
  Logo2x?: Uint8Array | undefined;

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
  Logo3x?: Uint8Array | undefined;

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
  SupportEmail?: string | undefined;

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
  SupportLink?: string | undefined;

  /**
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   * @public
   */
  ForgotPasswordLink?: string | undefined;

  /**
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *          <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em,
   *             i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.</p>
   * @public
   */
  LoginMessage?: Record<string, string> | undefined;
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
  DeviceTypeWindows?: DefaultImportClientBrandingAttributes | undefined;

  /**
   * <p>The branding information to import for macOS devices.</p>
   * @public
   */
  DeviceTypeOsx?: DefaultImportClientBrandingAttributes | undefined;

  /**
   * <p>The branding information to import for Android devices.</p>
   * @public
   */
  DeviceTypeAndroid?: DefaultImportClientBrandingAttributes | undefined;

  /**
   * <p>The branding information to import for iOS devices.</p>
   * @public
   */
  DeviceTypeIos?: IosImportClientBrandingAttributes | undefined;

  /**
   * <p>The branding information to import for Linux devices.</p>
   * @public
   */
  DeviceTypeLinux?: DefaultImportClientBrandingAttributes | undefined;

  /**
   * <p>The branding information to import for web access.</p>
   * @public
   */
  DeviceTypeWeb?: DefaultImportClientBrandingAttributes | undefined;
}

/**
 * @public
 */
export interface ImportClientBrandingResult {
  /**
   * <p>The branding information configured for Windows devices.</p>
   * @public
   */
  DeviceTypeWindows?: DefaultClientBrandingAttributes | undefined;

  /**
   * <p>The branding information configured for macOS devices.</p>
   * @public
   */
  DeviceTypeOsx?: DefaultClientBrandingAttributes | undefined;

  /**
   * <p>The branding information configured for Android devices.</p>
   * @public
   */
  DeviceTypeAndroid?: DefaultClientBrandingAttributes | undefined;

  /**
   * <p>The branding information configured for iOS devices.</p>
   * @public
   */
  DeviceTypeIos?: IosClientBrandingAttributes | undefined;

  /**
   * <p>The branding information configured for Linux devices.</p>
   * @public
   */
  DeviceTypeLinux?: DefaultClientBrandingAttributes | undefined;

  /**
   * <p>The branding information configured for web access.</p>
   * @public
   */
  DeviceTypeWeb?: DefaultClientBrandingAttributes | undefined;
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
  BYOL_GRAPHICS_G4DN_WSP: "BYOL_GRAPHICS_G4DN_WSP",
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
   *          you want to use for your BYOL Workspace image, either PCoIP, WSP, or
   *          bring your own protocol (BYOP). To use DCV, specify a value that ends in
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
  Tags?: Tag[] | undefined;

  /**
   * <p>If specified, the version of Microsoft Office to subscribe to. Valid only for Windows 10 and 11
   *          BYOL images. For more information about subscribing to Office for BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring
   *             Your Own Windows Desktop Licenses</a>.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>Although this parameter is an array, only one item is allowed at this
   *                   time.</p>
   *                </li>
   *                <li>
   *                   <p>During the image import process, non-GPU DCV (formerly WSP) WorkSpaces with Windows 11 support
   *                   only <code>Microsoft_Office_2019</code>. GPU DCV (formerly WSP) WorkSpaces with Windows 11 do not
   *                   support Office installation.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  Applications?: Application[] | undefined;
}

/**
 * @public
 */
export interface ImportWorkspaceImageResult {
  /**
   * <p>The identifier of the WorkSpace image.</p>
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountLinksRequest {
  /**
   * <p>Filters the account based on their link status.</p>
   * @public
   */
  LinkStatusFilter?: AccountLinkStatusEnum[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of accounts to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountLinksResult {
  /**
   * <p>Information about the account links.</p>
   * @public
   */
  AccountLinks?: AccountLink[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  MaxResults?: number | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAvailableManagementCidrRangesResult {
  /**
   * <p>The list of available IP address ranges, specified as IPv4 CIDR blocks.</p>
   * @public
   */
  ManagementCidrRanges?: string[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   * @public
   */
  NextToken?: string | undefined;
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
  SourceWorkspaceId?: string | undefined;

  /**
   * <p>The new identifier of the WorkSpace that is being migrated. If the migration does not
   *          succeed, the target WorkSpace ID will not be used, and the WorkSpace will still have the
   *          original WorkSpace ID.</p>
   * @public
   */
  TargetWorkspaceId?: string | undefined;
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
  DedicatedTenancySupport?: DedicatedTenancySupportEnum | undefined;

  /**
   * <p>The IP address range, specified as an IPv4 CIDR block, for the management network
   *          interface. Specify an IP address range that is compatible with your network and in CIDR
   *          notation (that is, specify the range as an IPv4 CIDR block). The CIDR block size must be
   *          /16 (for example, 203.0.113.25/16). It must also be specified as available by the
   *             <code>ListAvailableManagementCidrRanges</code> operation.</p>
   * @public
   */
  DedicatedTenancyManagementCidrRange?: string | undefined;
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
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties | undefined;

  /**
   * <p>The properties of the certificate-based authentication you want to delete.</p>
   * @public
   */
  PropertiesToDelete?: DeletableCertificateBasedAuthProperty[] | undefined;
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
export interface ModifyEndpointEncryptionModeRequest {
  /**
   * <p> The identifier of the directory.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The encryption mode used for endpoint connections when streaming to WorkSpaces Personal
   *          or WorkSpace Pools.</p>
   * @public
   */
  EndpointEncryptionMode: EndpointEncryptionMode | undefined;
}

/**
 * @public
 */
export interface ModifyEndpointEncryptionModeResponse {}

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
  SamlProperties?: SamlProperties | undefined;

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
  PropertiesToDelete?: DeletableSamlProperty[] | undefined;
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
export interface ModifyStreamingPropertiesRequest {
  /**
   * <p>The identifier of the resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The streaming properties to configure.</p>
   * @public
   */
  StreamingProperties?: StreamingProperties | undefined;
}

/**
 * @public
 */
export interface ModifyStreamingPropertiesResult {}

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
  EnableWorkDocs?: boolean | undefined;

  /**
   * <p>Indicates whether internet access is enabled for your WorkSpaces.</p>
   * @public
   */
  EnableInternetAccess?: boolean | undefined;

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
  DefaultOu?: string | undefined;

  /**
   * <p>The identifier of your custom security group.</p>
   * @public
   */
  CustomSecurityGroupId?: string | undefined;

  /**
   * <p>Indicates whether users are local administrators of their WorkSpaces.</p>
   * @public
   */
  UserEnabledAsLocalAdministrator?: boolean | undefined;

  /**
   * <p>Indicates whether maintenance mode is enabled for your WorkSpaces. For more information,
   *          see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace
   *             Maintenance</a>. </p>
   * @public
   */
  EnableMaintenanceMode?: boolean | undefined;

  /**
   * <p>Indicates the IAM role ARN of the instance.</p>
   * @public
   */
  InstanceIamRoleArn?: string | undefined;
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
  WorkspaceProperties?: WorkspaceProperties | undefined;

  /**
   * <p>Indicates the data replication status.</p>
   * @public
   */
  DataReplication?: DataReplication | undefined;
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
  FailedRequests?: FailedWorkspaceChangeRequest[] | undefined;
}
