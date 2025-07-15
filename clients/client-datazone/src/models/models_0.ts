// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DataZoneServiceException as __BaseException } from "./DataZoneServiceException";

/**
 * <p>Specifies the prediction (aka, the automatically generated piece of metadata) and the
 *          target (for example, a column name) that can be accepted.</p>
 * @public
 */
export interface AcceptChoice {
  /**
   * <p>Specifies the target (for example, a column name) where a prediction can be
   *          accepted.</p>
   * @public
   */
  predictionTarget: string | undefined;

  /**
   * <p>Specifies the prediction (aka, the automatically generated piece of metadata) that can
   *          be accepted.</p>
   * @public
   */
  predictionChoice?: number | undefined;

  /**
   * <p>The edit of the prediction.</p>
   * @public
   */
  editedValue?: string | undefined;
}

/**
 * <p>The accepted asset scope.</p>
 * @public
 */
export interface AcceptedAssetScope {
  /**
   * <p>The asset ID of the accepted asset scope.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The filter IDs of the accepted asset scope.</p>
   * @public
   */
  filterIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AcceptRuleBehavior = {
  ALL: "ALL",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type AcceptRuleBehavior = (typeof AcceptRuleBehavior)[keyof typeof AcceptRuleBehavior];

/**
 * <p>Specifies the rule and the threshold under which a prediction can be accepted.</p>
 * @public
 */
export interface AcceptRule {
  /**
   * <p>Specifies whether you want to accept the top prediction for all targets or none.</p>
   * @public
   */
  rule?: AcceptRuleBehavior | undefined;

  /**
   * <p>The confidence score that specifies the condition at which a prediction can be
   *          accepted.</p>
   * @public
   */
  threshold?: number | undefined;
}

/**
 * @public
 */
export interface AcceptPredictionsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the asset.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision that is to be made to the asset.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>Specifies the rule (or the conditions) under which a prediction can be accepted.</p>
   * @public
   */
  acceptRule?: AcceptRule | undefined;

  /**
   * <p>Specifies the prediction (aka, the automatically generated piece of metadata) and the
   *          target (for example, a column name) that can be accepted.</p>
   * @public
   */
  acceptChoices?: AcceptChoice[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request. This field is
   *          automatically populated if not provided.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AcceptPredictionsOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the asset.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The revision that is to be made to the asset.</p>
   * @public
   */
  revision: string | undefined;
}

/**
 * <p>You do not have sufficient access to perform this action.</p>
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
 * <p>There is a conflict while performing this action.</p>
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
 * <p>The request has failed because of an unknown error, exception or failure.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The specified resource cannot be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>You do not have permission to perform this action.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
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
 */
export interface AcceptSubscriptionRequestInput {
  /**
   * <p>The Amazon DataZone domain where the specified subscription request is being accepted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the subscription request that is to be accepted.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>A description that specifies the reason for accepting the specified subscription
   *          request.</p>
   * @public
   */
  decisionComment?: string | undefined;

  /**
   * <p>The asset scopes of the accept subscription request.</p>
   * @public
   */
  assetScopes?: AcceptedAssetScope[] | undefined;
}

/**
 * <p>The details of a metadata form.</p>
 * @public
 */
export interface FormOutput {
  /**
   * <p>The name of the metadata form.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>The name of the metadata form type.</p>
   * @public
   */
  typeName?: string | undefined;

  /**
   * <p>The revision of the metadata form type.</p>
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * <p>The content of the metadata form.</p>
   * @public
   */
  content?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SubscriptionRequestStatus = {
  ACCEPTED: "ACCEPTED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type SubscriptionRequestStatus = (typeof SubscriptionRequestStatus)[keyof typeof SubscriptionRequestStatus];

/**
 * <p>The asset scope.</p>
 * @public
 */
export interface AssetScope {
  /**
   * <p>The asset ID of the asset scope.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The filter IDs of the asset scope.</p>
   * @public
   */
  filterIds: string[] | undefined;

  /**
   * <p>The status of the asset scope.</p>
   * @public
   */
  status: string | undefined;

  /**
   * <p>The error message of the asset scope.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>Details of a glossary term attached to the inventory asset.</p>
 * @public
 */
export interface DetailedGlossaryTerm {
  /**
   * <p>The name of a glossary term attached to the inventory asset.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The shoft description of a glossary term attached to the inventory asset.</p>
   * @public
   */
  shortDescription?: string | undefined;
}

/**
 * <p>The details of the published asset for which the subscription grant is created.</p>
 * @public
 */
export interface SubscribedAssetListing {
  /**
   * <p>The identifier of the published asset for which the subscription grant is
   *          created.</p>
   * @public
   */
  entityId?: string | undefined;

  /**
   * <p>The revision of the published asset for which the subscription grant is created.</p>
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * <p>The type of the published asset for which the subscription grant is created.</p>
   * @public
   */
  entityType?: string | undefined;

  /**
   * <p>The forms attached to the published asset for which the subscription grant is
   *          created.</p>
   * @public
   */
  forms?: string | undefined;

  /**
   * <p>The glossary terms attached to the published asset for which the subscription grant is
   *          created.</p>
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * <p>The asset scope of the subscribed asset listing.</p>
   * @public
   */
  assetScope?: AssetScope | undefined;
}

/**
 * <p>The listing of the asset in a data product.</p>
 * @public
 */
export interface AssetInDataProductListingItem {
  /**
   * <p>The entity ID of the listing of the asset in a data product.</p>
   * @public
   */
  entityId?: string | undefined;

  /**
   * <p>The entity revision of the listing of the asset in a data product.</p>
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * <p>The entity type of the listing of the asset in a data product.</p>
   * @public
   */
  entityType?: string | undefined;
}

/**
 * <p>The data product listing.</p>
 * @public
 */
export interface SubscribedProductListing {
  /**
   * <p>The ID of the data product listing.</p>
   * @public
   */
  entityId?: string | undefined;

  /**
   * <p>The revision of the data product listing.</p>
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * <p>The glossary terms of the data product listing.</p>
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * <p>The name of the data product listing.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the data product listing.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The data assets of the data product listing.</p>
   * @public
   */
  assetListings?: AssetInDataProductListingItem[] | undefined;
}

/**
 * <p>The published asset for which the subscription grant is created.</p>
 * @public
 */
export type SubscribedListingItem =
  | SubscribedListingItem.AssetListingMember
  | SubscribedListingItem.ProductListingMember
  | SubscribedListingItem.$UnknownMember;

/**
 * @public
 */
export namespace SubscribedListingItem {
  /**
   * <p>The asset for which the subscription grant is created.</p>
   * @public
   */
  export interface AssetListingMember {
    assetListing: SubscribedAssetListing;
    productListing?: never;
    $unknown?: never;
  }

  /**
   * <p>The data product listing.</p>
   * @public
   */
  export interface ProductListingMember {
    assetListing?: never;
    productListing: SubscribedProductListing;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    assetListing?: never;
    productListing?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    assetListing: (value: SubscribedAssetListing) => T;
    productListing: (value: SubscribedProductListing) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SubscribedListingItem, visitor: Visitor<T>): T => {
    if (value.assetListing !== undefined) return visitor.assetListing(value.assetListing);
    if (value.productListing !== undefined) return visitor.productListing(value.productListing);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The details of the published asset for which the subscription grant is created.</p>
 * @public
 */
export interface SubscribedListing {
  /**
   * <p>The identifier of the published asset for which the subscription grant is
   *          created.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The revision of the published asset for which the subscription grant is created.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>The name of the published asset for which the subscription grant is created.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the published asset for which the subscription grant is
   *          created.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The published asset for which the subscription grant is created.</p>
   * @public
   */
  item: SubscribedListingItem | undefined;

  /**
   * <p>The identifier of the project of the published asset for which the subscription grant is
   *          created.</p>
   * @public
   */
  ownerProjectId: string | undefined;

  /**
   * <p>The name of the project that owns the published asset for which the subscription grant
   *          is created.</p>
   * @public
   */
  ownerProjectName?: string | undefined;
}

/**
 * <p>The project that has the subscription grant.</p>
 * @public
 */
export interface SubscribedProject {
  /**
   * <p>The identifier of the project that has the subscription grant.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the project that has the subscription grant.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>The principal that has the subscription grant for the asset.</p>
 * @public
 */
export type SubscribedPrincipal = SubscribedPrincipal.ProjectMember | SubscribedPrincipal.$UnknownMember;

/**
 * @public
 */
export namespace SubscribedPrincipal {
  /**
   * <p>The project that has the subscription grant.</p>
   * @public
   */
  export interface ProjectMember {
    project: SubscribedProject;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    project?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    project: (value: SubscribedProject) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SubscribedPrincipal, visitor: Visitor<T>): T => {
    if (value.project !== undefined) return visitor.project(value.project);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface AcceptSubscriptionRequestOutput {
  /**
   * <p>The identifier of the subscription request.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Specifies the Amazon DataZone user that accepted the specified subscription request.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>Specifies the Amazon DataZone user who updated the subscription request.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The unique identifier of the Amazon DataZone domain where the specified subscription request
   *          was accepted.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>Specifies the status of the subscription request.</p>
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * <p>The timestamp that specifies when the subscription request was accepted.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Specifies the timestamp when subscription request was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Specifies the reason for requesting a subscription to the asset.</p>
   * @public
   */
  requestReason: string | undefined;

  /**
   * <p>Specifies the Amazon DataZone users who are subscribed to the asset specified in the
   *          subscription request.</p>
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * <p>Specifies the asset for which the subscription request was created.</p>
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * <p>Specifes the ID of the Amazon DataZone user who reviewed the subscription request.</p>
   * @public
   */
  reviewerId?: string | undefined;

  /**
   * <p>Specifies the reason for accepting the subscription request.</p>
   * @public
   */
  decisionComment?: string | undefined;

  /**
   * <p>The ID of the existing subscription.</p>
   * @public
   */
  existingSubscriptionId?: string | undefined;

  /**
   * <p>The metadata form in the subscription request.</p>
   * @public
   */
  metadataForms?: FormOutput[] | undefined;
}

/**
 * <p>The parameters of the console link specified as part of the environment action.</p>
 * @public
 */
export interface AwsConsoleLinkParameters {
  /**
   * <p>The URI of the console link specified as part of the environment action.</p>
   * @public
   */
  uri?: string | undefined;
}

/**
 * <p>The parameters of the environment action.</p>
 * @public
 */
export type ActionParameters = ActionParameters.AwsConsoleLinkMember | ActionParameters.$UnknownMember;

/**
 * @public
 */
export namespace ActionParameters {
  /**
   * <p>The console link specified as part of the environment action.</p>
   * @public
   */
  export interface AwsConsoleLinkMember {
    awsConsoleLink: AwsConsoleLinkParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    awsConsoleLink?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    awsConsoleLink: (value: AwsConsoleLinkParameters) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ActionParameters, visitor: Visitor<T>): T => {
    if (value.awsConsoleLink !== undefined) return visitor.awsConsoleLink(value.awsConsoleLink);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const DataZoneEntityType = {
  DOMAIN_UNIT: "DOMAIN_UNIT",
} as const;

/**
 * @public
 */
export type DataZoneEntityType = (typeof DataZoneEntityType)[keyof typeof DataZoneEntityType];

/**
 * <p>The properties of the domain unit owners group.</p>
 * @public
 */
export interface OwnerGroupProperties {
  /**
   * <p>The ID of the domain unit owners group.</p>
   * @public
   */
  groupIdentifier: string | undefined;
}

/**
 * <p>The properties of the owner user.</p>
 * @public
 */
export interface OwnerUserProperties {
  /**
   * <p>The ID of the owner user.</p>
   * @public
   */
  userIdentifier: string | undefined;
}

/**
 * <p>The properties of a domain unit's owner.</p>
 * @public
 */
export type OwnerProperties = OwnerProperties.GroupMember | OwnerProperties.UserMember | OwnerProperties.$UnknownMember;

/**
 * @public
 */
export namespace OwnerProperties {
  /**
   * <p>Specifies that the domain unit owner is a user.</p>
   * @public
   */
  export interface UserMember {
    user: OwnerUserProperties;
    group?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies that the domain unit owner is a group.</p>
   * @public
   */
  export interface GroupMember {
    user?: never;
    group: OwnerGroupProperties;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    user?: never;
    group?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    user: (value: OwnerUserProperties) => T;
    group: (value: OwnerGroupProperties) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OwnerProperties, visitor: Visitor<T>): T => {
    if (value.user !== undefined) return visitor.user(value.user);
    if (value.group !== undefined) return visitor.group(value.group);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface AddEntityOwnerInput {
  /**
   * <p>The ID of the domain in which you want to add the entity owner.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The type of an entity.</p>
   * @public
   */
  entityType: DataZoneEntityType | undefined;

  /**
   * <p>The ID of the entity to which you want to add an owner.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The owner that you want to add to the entity.</p>
   * @public
   */
  owner: OwnerProperties | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AddEntityOwnerOutput {}

/**
 * <p>The request has exceeded the specified service quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>The details of the policy grant.</p>
 * @public
 */
export interface AddToProjectMemberPoolPolicyGrantDetail {
  /**
   * <p>Specifies whether the policy grant is applied to child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>The details of the policy grant.</p>
 * @public
 */
export interface CreateAssetTypePolicyGrantDetail {
  /**
   * <p>Specifies whether the policy grant is applied to child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>The details of the policy grant.</p>
 * @public
 */
export interface CreateDomainUnitPolicyGrantDetail {
  /**
   * <p>Specifies whether the policy grant is applied to child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>The details of the policy of creating an environment.</p>
 * @public
 */
export interface Unit {}

/**
 * <p>The details of the policy grant.</p>
 * @public
 */
export interface CreateEnvironmentProfilePolicyGrantDetail {
  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * <p>The details of the policy grant.</p>
 * @public
 */
export interface CreateFormTypePolicyGrantDetail {
  /**
   * <p>Specifies whether the policy grant is applied to child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>The details of the policy grant.</p>
 * @public
 */
export interface CreateGlossaryPolicyGrantDetail {
  /**
   * <p>Specifies whether the policy grant is applied to child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>The details of the policy grant.</p>
 * @public
 */
export interface CreateProjectPolicyGrantDetail {
  /**
   * <p>Specifies whether the policy grant is applied to child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>Specifies whether to create a project from project profile policy grant details.</p>
 * @public
 */
export interface CreateProjectFromProjectProfilePolicyGrantDetail {
  /**
   * <p>Specifies whether to include child domain units when creating a project from project
   *          profile policy grant details</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;

  /**
   * <p>Specifies project profiles when creating a project from project profile policy grant
   *          details</p>
   * @public
   */
  projectProfiles?: string[] | undefined;
}

/**
 * <p>The grant details of the override domain unit owners policy.</p>
 * @public
 */
export interface OverrideDomainUnitOwnersPolicyGrantDetail {
  /**
   * <p>Specifies whether the policy is inherited by child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>The details of the override project owners policy grant.</p>
 * @public
 */
export interface OverrideProjectOwnersPolicyGrantDetail {
  /**
   * <p>Specifies whether the policy is inherited by child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>Specifies the domain unit(s) whose projects can use this asset type while creating asset
 *          or asset revisions.</p>
 * @public
 */
export interface UseAssetTypePolicyGrantDetail {
  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * <p>The details of the policy grant.</p>
 * @public
 */
export type PolicyGrantDetail =
  | PolicyGrantDetail.AddToProjectMemberPoolMember
  | PolicyGrantDetail.CreateAssetTypeMember
  | PolicyGrantDetail.CreateDomainUnitMember
  | PolicyGrantDetail.CreateEnvironmentMember
  | PolicyGrantDetail.CreateEnvironmentFromBlueprintMember
  | PolicyGrantDetail.CreateEnvironmentProfileMember
  | PolicyGrantDetail.CreateFormTypeMember
  | PolicyGrantDetail.CreateGlossaryMember
  | PolicyGrantDetail.CreateProjectMember
  | PolicyGrantDetail.CreateProjectFromProjectProfileMember
  | PolicyGrantDetail.DelegateCreateEnvironmentProfileMember
  | PolicyGrantDetail.OverrideDomainUnitOwnersMember
  | PolicyGrantDetail.OverrideProjectOwnersMember
  | PolicyGrantDetail.UseAssetTypeMember
  | PolicyGrantDetail.$UnknownMember;

/**
 * @public
 */
export namespace PolicyGrantDetail {
  /**
   * <p>Specifies that this is a create domain unit policy.</p>
   * @public
   */
  export interface CreateDomainUnitMember {
    createDomainUnit: CreateDomainUnitPolicyGrantDetail;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies whether to override domain unit owners.</p>
   * @public
   */
  export interface OverrideDomainUnitOwnersMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners: OverrideDomainUnitOwnersPolicyGrantDetail;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies that the policy grant is to be added to the members of the project.</p>
   * @public
   */
  export interface AddToProjectMemberPoolMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool: AddToProjectMemberPoolPolicyGrantDetail;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies whether to override project owners.</p>
   * @public
   */
  export interface OverrideProjectOwnersMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners: OverrideProjectOwnersPolicyGrantDetail;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies that this is a create glossary policy.</p>
   * @public
   */
  export interface CreateGlossaryMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary: CreateGlossaryPolicyGrantDetail;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies that this is a create form type policy.</p>
   * @public
   */
  export interface CreateFormTypeMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType: CreateFormTypePolicyGrantDetail;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies that this is a create asset type policy.</p>
   * @public
   */
  export interface CreateAssetTypeMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType: CreateAssetTypePolicyGrantDetail;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies that this is a create project policy.</p>
   * @public
   */
  export interface CreateProjectMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject: CreateProjectPolicyGrantDetail;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies that this is a create environment profile policy.</p>
   * @public
   */
  export interface CreateEnvironmentProfileMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile: CreateEnvironmentProfilePolicyGrantDetail;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies that this is the delegation of the create environment profile policy.</p>
   * @public
   */
  export interface DelegateCreateEnvironmentProfileMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile: Unit;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies that this is a create environment policy.</p>
   * @public
   */
  export interface CreateEnvironmentMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment: Unit;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of the policy of creating an environment.</p>
   * @public
   */
  export interface CreateEnvironmentFromBlueprintMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint: Unit;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies whether to create a project from project profile.</p>
   * @public
   */
  export interface CreateProjectFromProjectProfileMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile: CreateProjectFromProjectProfilePolicyGrantDetail;
    useAssetType?: never;
    $unknown?: never;
  }

  /**
   * <p> Specifies the domain unit(s) whose projects can use this asset type while creating
   *          asset or asset revisions.</p>
   * @public
   */
  export interface UseAssetTypeMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType: UseAssetTypePolicyGrantDetail;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    createDomainUnit?: never;
    overrideDomainUnitOwners?: never;
    addToProjectMemberPool?: never;
    overrideProjectOwners?: never;
    createGlossary?: never;
    createFormType?: never;
    createAssetType?: never;
    createProject?: never;
    createEnvironmentProfile?: never;
    delegateCreateEnvironmentProfile?: never;
    createEnvironment?: never;
    createEnvironmentFromBlueprint?: never;
    createProjectFromProjectProfile?: never;
    useAssetType?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    createDomainUnit: (value: CreateDomainUnitPolicyGrantDetail) => T;
    overrideDomainUnitOwners: (value: OverrideDomainUnitOwnersPolicyGrantDetail) => T;
    addToProjectMemberPool: (value: AddToProjectMemberPoolPolicyGrantDetail) => T;
    overrideProjectOwners: (value: OverrideProjectOwnersPolicyGrantDetail) => T;
    createGlossary: (value: CreateGlossaryPolicyGrantDetail) => T;
    createFormType: (value: CreateFormTypePolicyGrantDetail) => T;
    createAssetType: (value: CreateAssetTypePolicyGrantDetail) => T;
    createProject: (value: CreateProjectPolicyGrantDetail) => T;
    createEnvironmentProfile: (value: CreateEnvironmentProfilePolicyGrantDetail) => T;
    delegateCreateEnvironmentProfile: (value: Unit) => T;
    createEnvironment: (value: Unit) => T;
    createEnvironmentFromBlueprint: (value: Unit) => T;
    createProjectFromProjectProfile: (value: CreateProjectFromProjectProfilePolicyGrantDetail) => T;
    useAssetType: (value: UseAssetTypePolicyGrantDetail) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PolicyGrantDetail, visitor: Visitor<T>): T => {
    if (value.createDomainUnit !== undefined) return visitor.createDomainUnit(value.createDomainUnit);
    if (value.overrideDomainUnitOwners !== undefined)
      return visitor.overrideDomainUnitOwners(value.overrideDomainUnitOwners);
    if (value.addToProjectMemberPool !== undefined) return visitor.addToProjectMemberPool(value.addToProjectMemberPool);
    if (value.overrideProjectOwners !== undefined) return visitor.overrideProjectOwners(value.overrideProjectOwners);
    if (value.createGlossary !== undefined) return visitor.createGlossary(value.createGlossary);
    if (value.createFormType !== undefined) return visitor.createFormType(value.createFormType);
    if (value.createAssetType !== undefined) return visitor.createAssetType(value.createAssetType);
    if (value.createProject !== undefined) return visitor.createProject(value.createProject);
    if (value.createEnvironmentProfile !== undefined)
      return visitor.createEnvironmentProfile(value.createEnvironmentProfile);
    if (value.delegateCreateEnvironmentProfile !== undefined)
      return visitor.delegateCreateEnvironmentProfile(value.delegateCreateEnvironmentProfile);
    if (value.createEnvironment !== undefined) return visitor.createEnvironment(value.createEnvironment);
    if (value.createEnvironmentFromBlueprint !== undefined)
      return visitor.createEnvironmentFromBlueprint(value.createEnvironmentFromBlueprint);
    if (value.createProjectFromProjectProfile !== undefined)
      return visitor.createProjectFromProjectProfile(value.createProjectFromProjectProfile);
    if (value.useAssetType !== undefined) return visitor.useAssetType(value.useAssetType);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const TargetEntityType = {
  ASSET_TYPE: "ASSET_TYPE",
  DOMAIN_UNIT: "DOMAIN_UNIT",
  ENVIRONMENT_BLUEPRINT_CONFIGURATION: "ENVIRONMENT_BLUEPRINT_CONFIGURATION",
  ENVIRONMENT_PROFILE: "ENVIRONMENT_PROFILE",
} as const;

/**
 * @public
 */
export type TargetEntityType = (typeof TargetEntityType)[keyof typeof TargetEntityType];

/**
 * @public
 * @enum
 */
export const ManagedPolicyType = {
  ADD_TO_PROJECT_MEMBER_POOL: "ADD_TO_PROJECT_MEMBER_POOL",
  CREATE_ASSET_TYPE: "CREATE_ASSET_TYPE",
  CREATE_DOMAIN_UNIT: "CREATE_DOMAIN_UNIT",
  CREATE_ENVIRONMENT: "CREATE_ENVIRONMENT",
  CREATE_ENVIRONMENT_FROM_BLUEPRINT: "CREATE_ENVIRONMENT_FROM_BLUEPRINT",
  CREATE_ENVIRONMENT_PROFILE: "CREATE_ENVIRONMENT_PROFILE",
  CREATE_FORM_TYPE: "CREATE_FORM_TYPE",
  CREATE_GLOSSARY: "CREATE_GLOSSARY",
  CREATE_PROJECT: "CREATE_PROJECT",
  CREATE_PROJECT_FROM_PROJECT_PROFILE: "CREATE_PROJECT_FROM_PROJECT_PROFILE",
  DELEGATE_CREATE_ENVIRONMENT_PROFILE: "DELEGATE_CREATE_ENVIRONMENT_PROFILE",
  OVERRIDE_DOMAIN_UNIT_OWNERS: "OVERRIDE_DOMAIN_UNIT_OWNERS",
  OVERRIDE_PROJECT_OWNERS: "OVERRIDE_PROJECT_OWNERS",
  USE_ASSET_TYPE: "USE_ASSET_TYPE",
} as const;

/**
 * @public
 */
export type ManagedPolicyType = (typeof ManagedPolicyType)[keyof typeof ManagedPolicyType];

/**
 * @public
 * @enum
 */
export const DomainUnitDesignation = {
  OWNER: "OWNER",
} as const;

/**
 * @public
 */
export type DomainUnitDesignation = (typeof DomainUnitDesignation)[keyof typeof DomainUnitDesignation];

/**
 * <p>The grant filter for all domain units.</p>
 * @public
 */
export interface AllDomainUnitsGrantFilter {}

/**
 * <p>The grant filter for the domain unit. In the current release of Amazon DataZone, the
 *          only supported filter is the <code>allDomainUnitsGrantFilter</code>.</p>
 * @public
 */
export type DomainUnitGrantFilter =
  | DomainUnitGrantFilter.AllDomainUnitsGrantFilterMember
  | DomainUnitGrantFilter.$UnknownMember;

/**
 * @public
 */
export namespace DomainUnitGrantFilter {
  /**
   * <p>Specifies a grant filter containing all domain units.</p>
   * @public
   */
  export interface AllDomainUnitsGrantFilterMember {
    allDomainUnitsGrantFilter: AllDomainUnitsGrantFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    allDomainUnitsGrantFilter?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    allDomainUnitsGrantFilter: (value: AllDomainUnitsGrantFilter) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DomainUnitGrantFilter, visitor: Visitor<T>): T => {
    if (value.allDomainUnitsGrantFilter !== undefined)
      return visitor.allDomainUnitsGrantFilter(value.allDomainUnitsGrantFilter);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The domain unit principal to whom the policy is granted.</p>
 * @public
 */
export interface DomainUnitPolicyGrantPrincipal {
  /**
   * <p>Specifes the designation of the domain unit users.</p>
   * @public
   */
  domainUnitDesignation: DomainUnitDesignation | undefined;

  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  domainUnitIdentifier?: string | undefined;

  /**
   * <p>The grant filter for the domain unit.</p>
   * @public
   */
  domainUnitGrantFilter?: DomainUnitGrantFilter | undefined;
}

/**
 * <p>The group principal to whom the policy is granted.</p>
 * @public
 */
export type GroupPolicyGrantPrincipal =
  | GroupPolicyGrantPrincipal.GroupIdentifierMember
  | GroupPolicyGrantPrincipal.$UnknownMember;

/**
 * @public
 */
export namespace GroupPolicyGrantPrincipal {
  /**
   * <p>The ID Of the group of the group principal.</p>
   * @public
   */
  export interface GroupIdentifierMember {
    groupIdentifier: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    groupIdentifier?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    groupIdentifier: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: GroupPolicyGrantPrincipal, visitor: Visitor<T>): T => {
    if (value.groupIdentifier !== undefined) return visitor.groupIdentifier(value.groupIdentifier);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ProjectDesignation = {
  CONTRIBUTOR: "CONTRIBUTOR",
  OWNER: "OWNER",
  PROJECT_CATALOG_STEWARD: "PROJECT_CATALOG_STEWARD",
} as const;

/**
 * @public
 */
export type ProjectDesignation = (typeof ProjectDesignation)[keyof typeof ProjectDesignation];

/**
 * <p>The domain unit filter of the project grant filter.</p>
 * @public
 */
export interface DomainUnitFilterForProject {
  /**
   * <p>The domain unit ID to use in the filter.</p>
   * @public
   */
  domainUnit: string | undefined;

  /**
   * <p>Specifies whether to include child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>The project grant filter.</p>
 * @public
 */
export type ProjectGrantFilter = ProjectGrantFilter.DomainUnitFilterMember | ProjectGrantFilter.$UnknownMember;

/**
 * @public
 */
export namespace ProjectGrantFilter {
  /**
   * <p>The domain unit filter of the project grant filter.</p>
   * @public
   */
  export interface DomainUnitFilterMember {
    domainUnitFilter: DomainUnitFilterForProject;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    domainUnitFilter?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    domainUnitFilter: (value: DomainUnitFilterForProject) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProjectGrantFilter, visitor: Visitor<T>): T => {
    if (value.domainUnitFilter !== undefined) return visitor.domainUnitFilter(value.domainUnitFilter);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The project policy grant principal.</p>
 * @public
 */
export interface ProjectPolicyGrantPrincipal {
  /**
   * <p>The project designation of the project policy grant principal.</p>
   * @public
   */
  projectDesignation: ProjectDesignation | undefined;

  /**
   * <p>The project ID of the project policy grant principal.</p>
   * @public
   */
  projectIdentifier?: string | undefined;

  /**
   * <p>The project grant filter of the project policy grant principal.</p>
   * @public
   */
  projectGrantFilter?: ProjectGrantFilter | undefined;
}

/**
 * <p>The all users grant filter.</p>
 * @public
 */
export interface AllUsersGrantFilter {}

/**
 * <p>The user policy grant principal.</p>
 * @public
 */
export type UserPolicyGrantPrincipal =
  | UserPolicyGrantPrincipal.AllUsersGrantFilterMember
  | UserPolicyGrantPrincipal.UserIdentifierMember
  | UserPolicyGrantPrincipal.$UnknownMember;

/**
 * @public
 */
export namespace UserPolicyGrantPrincipal {
  /**
   * <p>The user ID of the user policy grant principal.</p>
   * @public
   */
  export interface UserIdentifierMember {
    userIdentifier: string;
    allUsersGrantFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>The all users grant filter of the user policy grant principal.</p>
   * @public
   */
  export interface AllUsersGrantFilterMember {
    userIdentifier?: never;
    allUsersGrantFilter: AllUsersGrantFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    userIdentifier?: never;
    allUsersGrantFilter?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    userIdentifier: (value: string) => T;
    allUsersGrantFilter: (value: AllUsersGrantFilter) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UserPolicyGrantPrincipal, visitor: Visitor<T>): T => {
    if (value.userIdentifier !== undefined) return visitor.userIdentifier(value.userIdentifier);
    if (value.allUsersGrantFilter !== undefined) return visitor.allUsersGrantFilter(value.allUsersGrantFilter);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The policy grant principal.</p>
 * @public
 */
export type PolicyGrantPrincipal =
  | PolicyGrantPrincipal.DomainUnitMember
  | PolicyGrantPrincipal.GroupMember
  | PolicyGrantPrincipal.ProjectMember
  | PolicyGrantPrincipal.UserMember
  | PolicyGrantPrincipal.$UnknownMember;

/**
 * @public
 */
export namespace PolicyGrantPrincipal {
  /**
   * <p>The user of the policy grant principal.</p>
   * @public
   */
  export interface UserMember {
    user: UserPolicyGrantPrincipal;
    group?: never;
    project?: never;
    domainUnit?: never;
    $unknown?: never;
  }

  /**
   * <p>The group of the policy grant principal.</p>
   * @public
   */
  export interface GroupMember {
    user?: never;
    group: GroupPolicyGrantPrincipal;
    project?: never;
    domainUnit?: never;
    $unknown?: never;
  }

  /**
   * <p>The project of the policy grant principal.</p>
   * @public
   */
  export interface ProjectMember {
    user?: never;
    group?: never;
    project: ProjectPolicyGrantPrincipal;
    domainUnit?: never;
    $unknown?: never;
  }

  /**
   * <p>The domain unit of the policy grant principal.</p>
   * @public
   */
  export interface DomainUnitMember {
    user?: never;
    group?: never;
    project?: never;
    domainUnit: DomainUnitPolicyGrantPrincipal;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    user?: never;
    group?: never;
    project?: never;
    domainUnit?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    user: (value: UserPolicyGrantPrincipal) => T;
    group: (value: GroupPolicyGrantPrincipal) => T;
    project: (value: ProjectPolicyGrantPrincipal) => T;
    domainUnit: (value: DomainUnitPolicyGrantPrincipal) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PolicyGrantPrincipal, visitor: Visitor<T>): T => {
    if (value.user !== undefined) return visitor.user(value.user);
    if (value.group !== undefined) return visitor.group(value.group);
    if (value.project !== undefined) return visitor.project(value.project);
    if (value.domainUnit !== undefined) return visitor.domainUnit(value.domainUnit);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface AddPolicyGrantInput {
  /**
   * <p>The ID of the domain where you want to add a policy grant.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The type of entity (resource) to which the grant is added.</p>
   * @public
   */
  entityType: TargetEntityType | undefined;

  /**
   * <p>The ID of the entity (resource) to which you want to add a policy grant.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The type of policy that you want to grant.</p>
   * @public
   */
  policyType: ManagedPolicyType | undefined;

  /**
   * <p>The principal to whom the permissions are granted.</p>
   * @public
   */
  principal: PolicyGrantPrincipal | undefined;

  /**
   * <p>The details of the policy grant.</p>
   * @public
   */
  detail: PolicyGrantDetail | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AddPolicyGrantOutput {}

/**
 * @public
 * @enum
 */
export const ListingStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus];

/**
 * <p>The details of an asset published in an Amazon DataZone catalog. </p>
 * @public
 */
export interface AssetListingDetails {
  /**
   * <p>The identifier of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  listingId: string | undefined;

  /**
   * <p>The status of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  listingStatus: ListingStatus | undefined;
}

/**
 * <p>The details of a metadata form.</p>
 * @public
 */
export interface FormInput {
  /**
   * <p>The name of the metadata form.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>The ID of the metadata form type.</p>
   * @public
   */
  typeIdentifier?: string | undefined;

  /**
   * <p>The revision of the metadata form type.</p>
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * <p>The content of the metadata form.</p>
   * @public
   */
  content?: string | undefined;
}

/**
 * <p>The configuration of the business name generation.</p>
 * @public
 */
export interface BusinessNameGenerationConfiguration {
  /**
   * <p>Specifies whether the business name generation is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * <p>The configuration of the prediction.</p>
 * @public
 */
export interface PredictionConfiguration {
  /**
   * <p>The business name generation mechanism.</p>
   * @public
   */
  businessNameGeneration?: BusinessNameGenerationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateAssetInput {
  /**
   * <p>Asset name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Amazon DataZone domain where the asset is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The external identifier of the asset.</p>
   * @public
   */
  externalIdentifier?: string | undefined;

  /**
   * <p>The unique identifier of this asset's type.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision of this asset's type.</p>
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * <p>Asset description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Glossary terms attached to the asset.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>Metadata forms attached to the asset.</p>
   * @public
   */
  formsInput?: FormInput[] | undefined;

  /**
   * <p>The unique identifier of the project that owns this asset.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * <p>The configuration of the automatically generated business-friendly metadata for the
   *          asset.</p>
   * @public
   */
  predictionConfiguration?: PredictionConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The summary of the time series data points form.</p>
 * @public
 */
export interface TimeSeriesDataPointSummaryFormOutput {
  /**
   * <p>The name of the time series data points summary form.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>The type ID of the time series data points summary form.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The type revision of the time series data points summary form.</p>
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * <p>The timestamp of the time series data points summary form.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>The content of the summary of the time series data points form.</p>
   * @public
   */
  contentSummary?: string | undefined;

  /**
   * <p>The ID of the time series data points summary form.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssetOutput {
  /**
   * <p>The unique identifier of the created asset.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the created asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the created asset type.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision type of the asset.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>The external identifier of the asset.</p>
   * @public
   */
  externalIdentifier?: string | undefined;

  /**
   * <p>The revision of the asset.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of the created asset.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp of when the asset was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user that created this asset in the catalog.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the first revision of the asset took place.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user that made the first revision of the asset.</p>
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;

  /**
   * <p>The glossary terms that are attached to the created asset.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The ID of the Amazon DataZone project that owns the created asset. </p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the asset was created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The details of an asset published in an Amazon DataZone catalog.</p>
   * @public
   */
  listing?: AssetListingDetails | undefined;

  /**
   * <p>The metadata forms that are attached to the created asset.</p>
   * @public
   */
  formsOutput: FormOutput[] | undefined;

  /**
   * <p>The read-only metadata forms that are attached to the created asset.</p>
   * @public
   */
  readOnlyFormsOutput?: FormOutput[] | undefined;

  /**
   * <p>The latest data point that was imported into the time series form for the asset. </p>
   * @public
   */
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[] | undefined;

  /**
   * <p>The configuration of the automatically generated business-friendly metadata for the
   *          asset.</p>
   * @public
   */
  predictionConfiguration?: PredictionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateAssetRevisionInput {
  /**
   * <p>Te revised name of the asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The unique identifier of the domain where the asset is being revised.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the asset.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision type of the asset.</p>
   * @public
   */
  typeRevision?: string | undefined;

  /**
   * <p>The revised description of the asset.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The glossary terms to be attached to the asset as part of asset revision.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The metadata forms to be attached to the asset as part of asset revision.</p>
   * @public
   */
  formsInput?: FormInput[] | undefined;

  /**
   * <p>The configuration of the automatically generated business-friendly metadata for the
   *          asset.</p>
   * @public
   */
  predictionConfiguration?: PredictionConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssetRevisionOutput {
  /**
   * <p>The unique identifier of the asset revision.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The revised name of the asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the revision type.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision type of the asset.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>The external identifier of the asset.</p>
   * @public
   */
  externalIdentifier?: string | undefined;

  /**
   * <p>The revision of the asset.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The revised asset description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp of when the asset revision occured.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who performed the asset revision.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the first asset revision occured.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who performed the first asset revision.</p>
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;

  /**
   * <p>The glossary terms that were attached to the asset as part of asset revision.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The unique identifier of the revised project that owns the asset.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The unique identifier of the Amazon DataZone domain where the asset was revised.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The details of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  listing?: AssetListingDetails | undefined;

  /**
   * <p>The metadata forms that were attached to the asset as part of the asset revision.</p>
   * @public
   */
  formsOutput: FormOutput[] | undefined;

  /**
   * <p>The read-only metadata forms that were attached to the asset as part of the asset
   *          revision.</p>
   * @public
   */
  readOnlyFormsOutput?: FormOutput[] | undefined;

  /**
   * <p>The latest data point that was imported into the time series form for the asset. </p>
   * @public
   */
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[] | undefined;

  /**
   * <p>The configuration of the automatically generated business-friendly metadata for the
   *          asset.</p>
   * @public
   */
  predictionConfiguration?: PredictionConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteAssetInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the asset is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the asset that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetOutput {}

/**
 * @public
 */
export interface GetAssetInput {
  /**
   * <p>The ID of the Amazon DataZone domain to which the asset belongs.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone asset.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision of the Amazon DataZone asset.</p>
   * @public
   */
  revision?: string | undefined;
}

/**
 * @public
 */
export interface GetAssetOutput {
  /**
   * <p>The ID of the asset.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the asset type.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision of the asset type.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>The external ID of the asset.</p>
   * @public
   */
  externalIdentifier?: string | undefined;

  /**
   * <p>The revision of the asset.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of the Amazon DataZone asset.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp of when the asset was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the asset.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the first revision of the asset was created.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the first revision of the asset.</p>
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;

  /**
   * <p>The business glossary terms attached to the asset.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The ID of the project that owns the asset.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain to which the asset belongs.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The listing of the asset.</p>
   * @public
   */
  listing?: AssetListingDetails | undefined;

  /**
   * <p>The metadata forms attached to the asset.</p>
   * @public
   */
  formsOutput: FormOutput[] | undefined;

  /**
   * <p>The read-only metadata forms attached to the asset.</p>
   * @public
   */
  readOnlyFormsOutput?: FormOutput[] | undefined;

  /**
   * <p>The latest data point that was imported into the time series form for the asset. </p>
   * @public
   */
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[] | undefined;
}

/**
 * <p>The column configuration of the asset filter.</p>
 * @public
 */
export interface ColumnFilterConfiguration {
  /**
   * <p>Specifies whether to include column names.</p>
   * @public
   */
  includedColumnNames?: string[] | undefined;
}

/**
 * <p>Specifies whether the value is equal to an expression.</p>
 * @public
 */
export interface EqualToExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be equal to an expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies whether the value is greater than an expression.</p>
 * @public
 */
export interface GreaterThanExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be greater than an expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies whether the value is greater than or equal to an expression.</p>
 * @public
 */
export interface GreaterThanOrEqualToExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be greater than or equal to an expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies whether values are in the expression.</p>
 * @public
 */
export interface InExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The values that might be in the expression.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Specifies that the expression is not null.</p>
 * @public
 */
export interface IsNotNullExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;
}

/**
 * <p>Specifies that the expression is null.</p>
 * @public
 */
export interface IsNullExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;
}

/**
 * <p>Specifies that a value is less than an expression.</p>
 * @public
 */
export interface LessThanExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be less than the expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies that a value is less than or equal to an expression.</p>
 * @public
 */
export interface LessThanOrEqualToExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be less than or equal to an expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies that a value is like the expression.</p>
 * @public
 */
export interface LikeExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be like the expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies that a value is not equal to the expression.</p>
 * @public
 */
export interface NotEqualToExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might not be equal to the expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies that a value is not in the expression.</p>
 * @public
 */
export interface NotInExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might not be in the expression.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Specifies that a value might be not like the expression.</p>
 * @public
 */
export interface NotLikeExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might not be like the expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>The row filter expression.</p>
 * @public
 */
export type RowFilterExpression =
  | RowFilterExpression.EqualToMember
  | RowFilterExpression.GreaterThanMember
  | RowFilterExpression.GreaterThanOrEqualToMember
  | RowFilterExpression.InMember
  | RowFilterExpression.IsNotNullMember
  | RowFilterExpression.IsNullMember
  | RowFilterExpression.LessThanMember
  | RowFilterExpression.LessThanOrEqualToMember
  | RowFilterExpression.LikeMember
  | RowFilterExpression.NotEqualToMember
  | RowFilterExpression.NotInMember
  | RowFilterExpression.NotLikeMember
  | RowFilterExpression.$UnknownMember;

/**
 * @public
 */
export namespace RowFilterExpression {
  /**
   * <p>The 'equal to' clause of the row filter expression.</p>
   * @public
   */
  export interface EqualToMember {
    equalTo: EqualToExpression;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'no equal to' clause of the row filter expression.</p>
   * @public
   */
  export interface NotEqualToMember {
    equalTo?: never;
    notEqualTo: NotEqualToExpression;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'greater than' clause of the row filter expression.</p>
   * @public
   */
  export interface GreaterThanMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan: GreaterThanExpression;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'less than' clause of the row filter expression.</p>
   * @public
   */
  export interface LessThanMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan: LessThanExpression;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'greater than or equal to' clause of the filter expression.</p>
   * @public
   */
  export interface GreaterThanOrEqualToMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo: GreaterThanOrEqualToExpression;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'less than or equal to' clause of the row filter expression.</p>
   * @public
   */
  export interface LessThanOrEqualToMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo: LessThanOrEqualToExpression;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'is null' clause of the row filter expression.</p>
   * @public
   */
  export interface IsNullMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull: IsNullExpression;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'is not null' clause of the row filter expression.</p>
   * @public
   */
  export interface IsNotNullMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull: IsNotNullExpression;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'in' clause of the row filter expression.</p>
   * @public
   */
  export interface InMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in: InExpression;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'not in' clause of the row filter expression.</p>
   * @public
   */
  export interface NotInMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn: NotInExpression;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'like' clause of the row filter expression.</p>
   * @public
   */
  export interface LikeMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like: LikeExpression;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'not like' clause of the row filter expression.</p>
   * @public
   */
  export interface NotLikeMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike: NotLikeExpression;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    equalTo: (value: EqualToExpression) => T;
    notEqualTo: (value: NotEqualToExpression) => T;
    greaterThan: (value: GreaterThanExpression) => T;
    lessThan: (value: LessThanExpression) => T;
    greaterThanOrEqualTo: (value: GreaterThanOrEqualToExpression) => T;
    lessThanOrEqualTo: (value: LessThanOrEqualToExpression) => T;
    isNull: (value: IsNullExpression) => T;
    isNotNull: (value: IsNotNullExpression) => T;
    in: (value: InExpression) => T;
    notIn: (value: NotInExpression) => T;
    like: (value: LikeExpression) => T;
    notLike: (value: NotLikeExpression) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RowFilterExpression, visitor: Visitor<T>): T => {
    if (value.equalTo !== undefined) return visitor.equalTo(value.equalTo);
    if (value.notEqualTo !== undefined) return visitor.notEqualTo(value.notEqualTo);
    if (value.greaterThan !== undefined) return visitor.greaterThan(value.greaterThan);
    if (value.lessThan !== undefined) return visitor.lessThan(value.lessThan);
    if (value.greaterThanOrEqualTo !== undefined) return visitor.greaterThanOrEqualTo(value.greaterThanOrEqualTo);
    if (value.lessThanOrEqualTo !== undefined) return visitor.lessThanOrEqualTo(value.lessThanOrEqualTo);
    if (value.isNull !== undefined) return visitor.isNull(value.isNull);
    if (value.isNotNull !== undefined) return visitor.isNotNull(value.isNotNull);
    if (value.in !== undefined) return visitor.in(value.in);
    if (value.notIn !== undefined) return visitor.notIn(value.notIn);
    if (value.like !== undefined) return visitor.like(value.like);
    if (value.notLike !== undefined) return visitor.notLike(value.notLike);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const FilterStatus = {
  INVALID: "INVALID",
  VALID: "VALID",
} as const;

/**
 * @public
 */
export type FilterStatus = (typeof FilterStatus)[keyof typeof FilterStatus];

/**
 * <p>The summary of the asset filter.</p>
 * @public
 */
export interface AssetFilterSummary {
  /**
   * <p>The ID of the asset filter.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the domain where the asset filter lives.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the data asset.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The name of the asset filter.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the asset filter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the asset filter.</p>
   * @public
   */
  status?: FilterStatus | undefined;

  /**
   * <p>The effective column names of the asset filter.</p>
   * @public
   */
  effectiveColumnNames?: string[] | undefined;

  /**
   * <p>The effective row filter of the asset filter.</p>
   * @public
   */
  effectiveRowFilter?: string | undefined;

  /**
   * <p>The timestamp at which the asset filter was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The error message that is displayed if the action does not succeed.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>The additional attributes of an inventory asset.</p>
 * @public
 */
export interface AssetItemAdditionalAttributes {
  /**
   * <p>The forms included in the additional attributes of an inventory asset.</p>
   * @public
   */
  formsOutput?: FormOutput[] | undefined;

  /**
   * <p>The read-only forms included in the additional attributes of an inventory asset.</p>
   * @public
   */
  readOnlyFormsOutput?: FormOutput[] | undefined;

  /**
   * <p>The latest time series data points forms included in the additional attributes of an
   *          asset.</p>
   * @public
   */
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[] | undefined;
}

/**
 * <p>A Amazon DataZone inventory asset.</p>
 * @public
 */
export interface AssetItem {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the inventory asset exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>the identifier of the Amazon DataZone inventory asset.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name of the Amazon DataZone inventory asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the asset type of the specified Amazon DataZone inventory asset.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision of the inventory asset type.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>The external identifier of the Amazon DataZone inventory asset.</p>
   * @public
   */
  externalIdentifier?: string | undefined;

  /**
   * <p>The description of an Amazon DataZone inventory asset.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp of when the Amazon DataZone inventory asset was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the inventory asset.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the first revision of the inventory asset was created.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the first revision of the inventory asset.</p>
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;

  /**
   * <p>The glossary terms attached to the Amazon DataZone inventory asset.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The identifier of the Amazon DataZone project that owns the inventory asset.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The additional attributes of a Amazon DataZone inventory asset. </p>
   * @public
   */
  additionalAttributes?: AssetItemAdditionalAttributes | undefined;
}

/**
 * <p>An asset published in an Amazon DataZone catalog.</p>
 * @public
 */
export interface AssetListing {
  /**
   * <p>The identifier of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The revision of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  assetRevision?: string | undefined;

  /**
   * <p>The type of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  assetType?: string | undefined;

  /**
   * <p>The timestamp of when an asset published in an Amazon DataZone catalog was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The metadata forms attached to an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  forms?: string | undefined;

  /**
   * <p>The latest time series data points forms included in the additional attributes of an
   *          asset.</p>
   * @public
   */
  latestTimeSeriesDataPointForms?: TimeSeriesDataPointSummaryFormOutput[] | undefined;

  /**
   * <p>The glossary terms attached to an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * <p>The identifier of the project where an asset published in an Amazon DataZone catalog exists.
   *       </p>
   * @public
   */
  owningProjectId?: string | undefined;
}

/**
 * <p>Additional attributes of an inventory asset.</p>
 * @public
 */
export interface AssetListingItemAdditionalAttributes {
  /**
   * <p>The metadata forms that form additional attributes of the metadata asset.</p>
   * @public
   */
  forms?: string | undefined;

  /**
   * <p>The latest time series data points forms included in the additional attributes of an
   *          asset.</p>
   * @public
   */
  latestTimeSeriesDataPointForms?: TimeSeriesDataPointSummaryFormOutput[] | undefined;
}

/**
 * <p>The details of an asset published in an Amazon DataZone catalog.</p>
 * @public
 */
export interface AssetListingItem {
  /**
   * <p>The identifier of the listing (asset published in Amazon DataZone catalog).</p>
   * @public
   */
  listingId?: string | undefined;

  /**
   * <p>The revision of the listing (asset published in Amazon DataZone catalog).</p>
   * @public
   */
  listingRevision?: string | undefined;

  /**
   * <p>The name of the inventory asset.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The identifier of the inventory asset.</p>
   * @public
   */
  entityId?: string | undefined;

  /**
   * <p>The revision of the inventory asset.</p>
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * <p>The type of the inventory asset.</p>
   * @public
   */
  entityType?: string | undefined;

  /**
   * <p>The description of an asset published in an Amazon DataZone catalog.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp of when an asset published in an Amazon DataZone catalog was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the listing.</p>
   * @public
   */
  listingCreatedBy?: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the listing.</p>
   * @public
   */
  listingUpdatedBy?: string | undefined;

  /**
   * <p>Glossary terms attached to the inventory asset.</p>
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[] | undefined;

  /**
   * <p>The identifier of the project that owns the inventory asset.</p>
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * <p>The additional attributes of an asset published in an Amazon DataZone catalog.</p>
   * @public
   */
  additionalAttributes?: AssetListingItemAdditionalAttributes | undefined;
}

/**
 * <p>The revision of an inventory asset.</p>
 * @public
 */
export interface AssetRevision {
  /**
   * <p>The Amazon DataZone user who created the inventory asset.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The identifier of the inventory asset revision.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The revision details of the inventory asset.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the asset revision.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when an inventory asset revison was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * <p>The name map for assets.</p>
 * @public
 */
export interface AssetTargetNameMap {
  /**
   * <p>The identifier of the inventory asset.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The target name in the asset target name map.</p>
   * @public
   */
  targetName: string | undefined;
}

/**
 * <p>The details of the form entry.</p>
 * @public
 */
export interface FormEntryInput {
  /**
   * <p>The type ID of the form entry.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The type revision of the form entry.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>Specifies whether a form entry is required.</p>
   * @public
   */
  required?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateAssetTypeInput {
  /**
   * <p>The unique identifier of the Amazon DataZone domain where the custom asset type is being
   *          created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of the custom asset type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The descripton of the custom asset type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The metadata forms that are to be attached to the custom asset type.</p>
   * @public
   */
  formsInput: Record<string, FormEntryInput> | undefined;

  /**
   * <p>The identifier of the Amazon DataZone project that is to own the custom asset type.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;
}

/**
 * <p>The details of the form entry.</p>
 * @public
 */
export interface FormEntryOutput {
  /**
   * <p>The name of the type of the form entry.</p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>The type revision of the form entry.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>Specifies whether a form entry is required.</p>
   * @public
   */
  required?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateAssetTypeOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the asset type was created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the asset type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of the custom asset type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of the custom asset type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The metadata forms that are attached to the asset type.</p>
   * @public
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;

  /**
   * <p>The ID of the Amazon DataZone project that currently owns this asset type.</p>
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain where the asset type was originally created.</p>
   * @public
   */
  originDomainId?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone project where the asset type was originally created.</p>
   * @public
   */
  originProjectId?: string | undefined;

  /**
   * <p>The timestamp of when the asset type is to be created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who creates this custom asset type.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the custom type was created.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user that created the custom asset type.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetTypeInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the asset type is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the asset type that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetTypeOutput {}

/**
 * @public
 */
export interface GetAssetTypeInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the asset type exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the asset type.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision of the asset type.</p>
   * @public
   */
  revision?: string | undefined;
}

/**
 * @public
 */
export interface GetAssetTypeOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the asset type exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the asset type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of the asset type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of the asset type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The metadata forms attached to the asset type.</p>
   * @public
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;

  /**
   * <p>The ID of the Amazon DataZone project that owns the asset type.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the asset type was originally created.</p>
   * @public
   */
  originDomainId?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone project in which the asset type was originally created.</p>
   * @public
   */
  originProjectId?: string | undefined;

  /**
   * <p>The timestamp of when the asset type was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the asset type.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the asset type was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user that updated the asset type.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * <p>The details of the asset type.</p>
 * @public
 */
export interface AssetTypeItem {
  /**
   * <p>The identifier of the Amazon DataZone domain where the asset type exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the asset type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of the asset type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of the asset type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The forms included in the details of the asset type.</p>
   * @public
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;

  /**
   * <p>The identifier of the Amazon DataZone project that owns the asset type.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain where the asset type was originally
   *          created.</p>
   * @public
   */
  originDomainId?: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone project where the asset type exists.</p>
   * @public
   */
  originProjectId?: string | undefined;

  /**
   * <p>The timestamp of when the asset type was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who created the asset type.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp of when the asset type was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon DataZone user who updated the asset type.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleScopeSelectionMode = {
  ALL: "ALL",
  SPECIFIC: "SPECIFIC",
} as const;

/**
 * @public
 */
export type RuleScopeSelectionMode = (typeof RuleScopeSelectionMode)[keyof typeof RuleScopeSelectionMode];

/**
 * <p>The asset type for the rule details.</p>
 * @public
 */
export interface AssetTypesForRule {
  /**
   * <p>The selection mode for the rule.</p>
   * @public
   */
  selectionMode: RuleScopeSelectionMode | undefined;

  /**
   * <p>The specific asset types that are included in the rule.</p>
   * @public
   */
  specificAssetTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateEnvironmentRoleInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the environment role is associated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone environment.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ARN of the environment role.</p>
   * @public
   */
  environmentRoleArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateEnvironmentRoleOutput {}

/**
 * <p>The Amazon Athena properties of a connection.</p>
 * @public
 */
export interface AthenaPropertiesInput {
  /**
   * <p>The Amazon Athena workgroup name of a connection.</p>
   * @public
   */
  workgroupName?: string | undefined;
}

/**
 * <p>The Amazon Athena properties of a connection.</p>
 * @public
 */
export interface AthenaPropertiesOutput {
  /**
   * <p>The Amazon Athena workgroup name of a connection.</p>
   * @public
   */
  workgroupName?: string | undefined;
}

/**
 * <p>The Amazon Athena properties patch of a connection.</p>
 * @public
 */
export interface AthenaPropertiesPatch {
  /**
   * <p>The Amazon Athena workgroup name of a connection.</p>
   * @public
   */
  workgroupName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  BASIC: "BASIC",
  CUSTOM: "CUSTOM",
  OAUTH2: "OAUTH2",
} as const;

/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * <p>The authorization code properties of a connection.</p>
 * @public
 */
export interface AuthorizationCodeProperties {
  /**
   * <p>The authorization code of a connection.</p>
   * @public
   */
  authorizationCode?: string | undefined;

  /**
   * <p>The redirect URI of a connection.</p>
   * @public
   */
  redirectUri?: string | undefined;
}

/**
 * <p>The OAuth2Client application.</p>
 * @public
 */
export interface OAuth2ClientApplication {
  /**
   * <p>The user managed client application client ID in the OAuth2Client application.</p>
   * @public
   */
  userManagedClientApplicationClientId?: string | undefined;

  /**
   * <p>The Amazon Web Services managed client application reference in the OAuth2Client
   *          application.</p>
   * @public
   */
  aWSManagedClientApplicationReference?: string | undefined;
}

/**
 * <p>The GlueOAuth2 credentials of a connection.</p>
 * @public
 */
export interface GlueOAuth2Credentials {
  /**
   * <p>The user managed client application client secret of the connection. </p>
   * @public
   */
  userManagedClientApplicationClientSecret?: string | undefined;

  /**
   * <p>The access token of a connection.</p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p>The refresh token of the connection.</p>
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * <p>The jwt token of the connection.</p>
   * @public
   */
  jwtToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OAuth2GrantType = {
  AUTHORIZATION_CODE: "AUTHORIZATION_CODE",
  CLIENT_CREDENTIALS: "CLIENT_CREDENTIALS",
  JWT_BEARER: "JWT_BEARER",
} as const;

/**
 * @public
 */
export type OAuth2GrantType = (typeof OAuth2GrantType)[keyof typeof OAuth2GrantType];

/**
 * <p>The OAuth2 properties.</p>
 * @public
 */
export interface OAuth2Properties {
  /**
   * <p>The OAuth2 grant type of the OAuth2 properties.</p>
   * @public
   */
  oAuth2GrantType?: OAuth2GrantType | undefined;

  /**
   * <p>The OAuth2 client application of the OAuth2 properties.</p>
   * @public
   */
  oAuth2ClientApplication?: OAuth2ClientApplication | undefined;

  /**
   * <p>The OAuth2 token URL of the OAuth2 properties.</p>
   * @public
   */
  tokenUrl?: string | undefined;

  /**
   * <p>The OAuth2 token URL parameter map of the OAuth2 properties.</p>
   * @public
   */
  tokenUrlParametersMap?: Record<string, string> | undefined;

  /**
   * <p>The authorization code properties of the OAuth2 properties.</p>
   * @public
   */
  authorizationCodeProperties?: AuthorizationCodeProperties | undefined;

  /**
   * <p>The OAuth2 credentials of the OAuth2 properties.</p>
   * @public
   */
  oAuth2Credentials?: GlueOAuth2Credentials | undefined;
}

/**
 * <p>The authentication configuration of a connection.</p>
 * @public
 */
export interface AuthenticationConfiguration {
  /**
   * <p>The authentication type of a connection.</p>
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * <p>The secret ARN of a connection.</p>
   * @public
   */
  secretArn?: string | undefined;

  /**
   * <p>The oAuth2 properties of a connection.</p>
   * @public
   */
  oAuth2Properties?: OAuth2Properties | undefined;
}

/**
 * <p>The basic authentication credentials of a connection.</p>
 * @public
 */
export interface BasicAuthenticationCredentials {
  /**
   * <p>The user name for the connecion.</p>
   * @public
   */
  userName?: string | undefined;

  /**
   * <p>The password for a connection.</p>
   * @public
   */
  password?: string | undefined;
}

/**
 * <p>The authentication configuration of a connection.</p>
 * @public
 */
export interface AuthenticationConfigurationInput {
  /**
   * <p>The authentication type of a connection.</p>
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * <p>The oAuth2 properties of a connection.</p>
   * @public
   */
  oAuth2Properties?: OAuth2Properties | undefined;

  /**
   * <p>The secret ARN of a connection.</p>
   * @public
   */
  secretArn?: string | undefined;

  /**
   * <p>The KMS key ARN of a connection.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The basic authentication credentials of a connection.</p>
   * @public
   */
  basicAuthenticationCredentials?: BasicAuthenticationCredentials | undefined;

  /**
   * <p>The custom authentication credentials of a connection.</p>
   * @public
   */
  customAuthenticationCredentials?: Record<string, string> | undefined;
}

/**
 * <p>The authentication configuration patch of a connection. </p>
 * @public
 */
export interface AuthenticationConfigurationPatch {
  /**
   * <p>The secret ARN of a connection.</p>
   * @public
   */
  secretArn?: string | undefined;

  /**
   * <p>The basic authentication credentials of a connection.</p>
   * @public
   */
  basicAuthenticationCredentials?: BasicAuthenticationCredentials | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthType = {
  DISABLED: "DISABLED",
  IAM_IDC: "IAM_IDC",
} as const;

/**
 * @public
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

/**
 * <p>The account ID of a project.</p>
 * @public
 */
export type AwsAccount = AwsAccount.AwsAccountIdMember | AwsAccount.AwsAccountIdPathMember | AwsAccount.$UnknownMember;

/**
 * @public
 */
export namespace AwsAccount {
  /**
   * <p>The account ID of a project.</p>
   * @public
   */
  export interface AwsAccountIdMember {
    awsAccountId: string;
    awsAccountIdPath?: never;
    $unknown?: never;
  }

  /**
   * <p>The account ID path of a project.</p>
   * @public
   */
  export interface AwsAccountIdPathMember {
    awsAccountId?: never;
    awsAccountIdPath: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    awsAccountId?: never;
    awsAccountIdPath?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    awsAccountId: (value: string) => T;
    awsAccountIdPath: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AwsAccount, visitor: Visitor<T>): T => {
    if (value.awsAccountId !== undefined) return visitor.awsAccountId(value.awsAccountId);
    if (value.awsAccountIdPath !== undefined) return visitor.awsAccountIdPath(value.awsAccountIdPath);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The location of a project.</p>
 * @public
 */
export interface AwsLocation {
  /**
   * <p>The access role of a connection.</p>
   * @public
   */
  accessRole?: string | undefined;

  /**
   * <p>The account ID of a connection.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Region of a connection.</p>
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * <p>The IAM connection ID of a connection.</p>
   * @public
   */
  iamConnectionId?: string | undefined;
}

/**
 * @public
 */
export interface CancelMetadataGenerationRunInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the metadata generation run is to be
   *          cancelled.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the metadata generation run.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface CancelMetadataGenerationRunOutput {}

/**
 * @public
 */
export interface CancelSubscriptionInput {
  /**
   * <p>The unique identifier of the Amazon DataZone domain where the subscription request is being
   *          cancelled.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the subscription that is being cancelled.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SubscriptionStatus = {
  APPROVED: "APPROVED",
  CANCELLED: "CANCELLED",
  REVOKED: "REVOKED",
} as const;

/**
 * @public
 */
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];

/**
 * @public
 */
export interface CancelSubscriptionOutput {
  /**
   * <p>The identifier of the subscription.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Specifies the Amazon DataZone user who is cancelling the subscription.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user that cancelled the subscription.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The unique identifier of the Amazon DataZone domain where the subscription is being
   *          cancelled.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the request to cancel the subscription.</p>
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * <p>The timestamp that specifies when the request to cancel the subscription was
   *          created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp that specifies when the subscription was cancelled.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon DataZone user who is made a subscriber to the specified asset by the subscription
   *          that is being cancelled.</p>
   * @public
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * <p>The asset to which a subscription is being cancelled.</p>
   * @public
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * <p>The unique ID of the subscripton request for the subscription that is being
   *          cancelled.</p>
   * @public
   */
  subscriptionRequestId?: string | undefined;

  /**
   * <p>Specifies whether the permissions to the asset are retained after the subscription is
   *          cancelled.</p>
   * @public
   */
  retainPermissions?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ChangeAction = {
  PUBLISH: "PUBLISH",
  UNPUBLISH: "UNPUBLISH",
} as const;

/**
 * @public
 */
export type ChangeAction = (typeof ChangeAction)[keyof typeof ChangeAction];

/**
 * <p>Part of the provisioning properties of the environment blueprint.</p>
 * @public
 */
export interface CloudFormationProperties {
  /**
   * <p>The template URL of the cloud formation provisioning properties of the environment
   *          blueprint.</p>
   * @public
   */
  templateUrl: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ComputeEnvironments = {
  ATHENA: "ATHENA",
  PYTHON: "PYTHON",
  SPARK: "SPARK",
} as const;

/**
 * @public
 */
export type ComputeEnvironments = (typeof ComputeEnvironments)[keyof typeof ComputeEnvironments];

/**
 * <p>The details of the parameters for the configurable environment action.</p>
 * @public
 */
export interface ConfigurableActionParameter {
  /**
   * <p>The key of the configurable action parameter.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The value of the configurable action parameter.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConfigurableActionTypeAuthorization = {
  HTTPS: "HTTPS",
  IAM: "IAM",
} as const;

/**
 * @public
 */
export type ConfigurableActionTypeAuthorization =
  (typeof ConfigurableActionTypeAuthorization)[keyof typeof ConfigurableActionTypeAuthorization];

/**
 * <p>The configurable action of a Amazon DataZone environment.</p>
 * @public
 */
export interface ConfigurableEnvironmentAction {
  /**
   * <p>The type of a configurable action in a Amazon DataZone environment.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The authentication type of a configurable action of a Amazon DataZone environment. </p>
   * @public
   */
  auth?: ConfigurableActionTypeAuthorization | undefined;

  /**
   * <p>The parameters of a configurable action in a Amazon DataZone environment.</p>
   * @public
   */
  parameters: ConfigurableActionParameter[] | undefined;
}

/**
 * <p>The credentials of a connection.</p>
 * @public
 */
export interface ConnectionCredentials {
  /**
   * <p>The access key ID of a connection.</p>
   * @public
   */
  accessKeyId?: string | undefined;

  /**
   * <p>The secret access key of a connection.</p>
   * @public
   */
  secretAccessKey?: string | undefined;

  /**
   * <p>The session token of a connection credentials.</p>
   * @public
   */
  sessionToken?: string | undefined;

  /**
   * <p>The expiration of the connection credentials.</p>
   * @public
   */
  expiration?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const GlueConnectionType = {
  BIGQUERY: "BIGQUERY",
  DOCUMENTDB: "DOCUMENTDB",
  DYNAMODB: "DYNAMODB",
  MYSQL: "MYSQL",
  OPENSEARCH: "OPENSEARCH",
  ORACLE: "ORACLE",
  POSTGRESQL: "POSTGRESQL",
  REDSHIFT: "REDSHIFT",
  SAPHANA: "SAPHANA",
  SNOWFLAKE: "SNOWFLAKE",
  SQLSERVER: "SQLSERVER",
  TERADATA: "TERADATA",
  VERTICA: "VERTICA",
} as const;

/**
 * @public
 */
export type GlueConnectionType = (typeof GlueConnectionType)[keyof typeof GlueConnectionType];

/**
 * <p>Physical connection requirements of a connection.</p>
 * @public
 */
export interface PhysicalConnectionRequirements {
  /**
   * <p>The subnet ID of the physical connection requirements of a connection. </p>
   * @public
   */
  subnetId?: string | undefined;

  /**
   * <p>The subnet ID list of the physical connection requirements of a connection. </p>
   * @public
   */
  subnetIdList?: string[] | undefined;

  /**
   * <p>The group ID list of the physical connection requirements of a connection. </p>
   * @public
   */
  securityGroupIdList?: string[] | undefined;

  /**
   * <p>The availability zone of the physical connection requirements of a connection. </p>
   * @public
   */
  availabilityZone?: string | undefined;
}

/**
 * <p>The Amazon Web Services Glue connecton input.</p>
 * @public
 */
export interface GlueConnectionInput {
  /**
   * <p>The connection properties of the Amazon Web Services Glue connection.</p>
   * @public
   */
  connectionProperties?: Record<string, string> | undefined;

  /**
   * <p>The physical connection requirements for the Amazon Web Services Glue connection.</p>
   * @public
   */
  physicalConnectionRequirements?: PhysicalConnectionRequirements | undefined;

  /**
   * <p>The name of the Amazon Web Services Glue connection.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the Amazon Web Services Glue connection.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The connection type of the Amazon Web Services Glue connection.</p>
   * @public
   */
  connectionType?: GlueConnectionType | undefined;

  /**
   * <p>The match criteria of the Amazon Web Services Glue connection.</p>
   * @public
   */
  matchCriteria?: string | undefined;

  /**
   * <p>Speciefies whether to validate credentials of the Amazon Web Services Glue
   *          connection.</p>
   * @public
   */
  validateCredentials?: boolean | undefined;

  /**
   * <p>Speciefies whether to validate for compute environments of the Amazon Web Services Glue
   *          connection.</p>
   * @public
   */
  validateForComputeEnvironments?: ComputeEnvironments[] | undefined;

  /**
   * <p>The Spark properties of the Amazon Web Services Glue connection.</p>
   * @public
   */
  sparkProperties?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Athena properties of the Amazon Web Services Glue connection.</p>
   * @public
   */
  athenaProperties?: Record<string, string> | undefined;

  /**
   * <p>The Python properties of the Amazon Web Services Glue connection.</p>
   * @public
   */
  pythonProperties?: Record<string, string> | undefined;

  /**
   * <p>The authentication configuration of the Amazon Web Services Glue connection.</p>
   * @public
   */
  authenticationConfiguration?: AuthenticationConfigurationInput | undefined;
}

/**
 * <p>The Amazon Web Services Glue properties of a connection.</p>
 * @public
 */
export interface GluePropertiesInput {
  /**
   * <p>The Amazon Web Services Glue connection.</p>
   * @public
   */
  glueConnectionInput?: GlueConnectionInput | undefined;
}

/**
 * <p>The hyper pod properties of a Amazon Web Services Glue properties patch.</p>
 * @public
 */
export interface HyperPodPropertiesInput {
  /**
   * <p>The cluster name the hyper pod properties.</p>
   * @public
   */
  clusterName: string | undefined;
}

/**
 * <p>The IAM properties of a connection.</p>
 * @public
 */
export interface IamPropertiesInput {
  /**
   * <p>Specifies whether Amazon Web Services Glue lineage sync is enabled for a
   *          connection.</p>
   * @public
   */
  glueLineageSyncEnabled?: boolean | undefined;
}

/**
 * <p>The username and password of a connection.</p>
 * @public
 */
export interface UsernamePassword {
  /**
   * <p>The password of a connection.</p>
   * @public
   */
  password: string | undefined;

  /**
   * <p>The username of a connection.</p>
   * @public
   */
  username: string | undefined;
}

/**
 * <p>Amazon Redshift credentials of a connection.</p>
 * @public
 */
export type RedshiftCredentials =
  | RedshiftCredentials.SecretArnMember
  | RedshiftCredentials.UsernamePasswordMember
  | RedshiftCredentials.$UnknownMember;

/**
 * @public
 */
export namespace RedshiftCredentials {
  /**
   * <p>The secret ARN of the Amazon Redshift credentials of a connection.</p>
   * @public
   */
  export interface SecretArnMember {
    secretArn: string;
    usernamePassword?: never;
    $unknown?: never;
  }

  /**
   * <p>The username and password of the Amazon Redshift credentials of a connection.</p>
   * @public
   */
  export interface UsernamePasswordMember {
    secretArn?: never;
    usernamePassword: UsernamePassword;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    secretArn?: never;
    usernamePassword?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    secretArn: (value: string) => T;
    usernamePassword: (value: UsernamePassword) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RedshiftCredentials, visitor: Visitor<T>): T => {
    if (value.secretArn !== undefined) return visitor.secretArn(value.secretArn);
    if (value.usernamePassword !== undefined) return visitor.usernamePassword(value.usernamePassword);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The lineage sync schedule.</p>
 * @public
 */
export interface LineageSyncSchedule {
  /**
   * <p>The lineage sync schedule.</p>
   * @public
   */
  schedule?: string | undefined;
}

/**
 * <p>The Amaon Redshift lineage sync configuration.</p>
 * @public
 */
export interface RedshiftLineageSyncConfigurationInput {
  /**
   * <p>Specifies whether the Amaon Redshift lineage sync configuration is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The schedule of the Amaon Redshift lineage sync configuration.</p>
   * @public
   */
  schedule?: LineageSyncSchedule | undefined;
}

/**
 * <p>The Amazon Redshift storage properties.</p>
 * @public
 */
export type RedshiftStorageProperties =
  | RedshiftStorageProperties.ClusterNameMember
  | RedshiftStorageProperties.WorkgroupNameMember
  | RedshiftStorageProperties.$UnknownMember;

/**
 * @public
 */
export namespace RedshiftStorageProperties {
  /**
   * <p>The cluster name in the Amazon Redshift storage properties.</p>
   * @public
   */
  export interface ClusterNameMember {
    clusterName: string;
    workgroupName?: never;
    $unknown?: never;
  }

  /**
   * <p>The workgroup name in the Amazon Redshift storage properties.</p>
   * @public
   */
  export interface WorkgroupNameMember {
    clusterName?: never;
    workgroupName: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    clusterName?: never;
    workgroupName?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    clusterName: (value: string) => T;
    workgroupName: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RedshiftStorageProperties, visitor: Visitor<T>): T => {
    if (value.clusterName !== undefined) return visitor.clusterName(value.clusterName);
    if (value.workgroupName !== undefined) return visitor.workgroupName(value.workgroupName);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The Amazon Redshift properties.</p>
 * @public
 */
export interface RedshiftPropertiesInput {
  /**
   * <p>The Amazon Redshift storage.</p>
   * @public
   */
  storage?: RedshiftStorageProperties | undefined;

  /**
   * <p>The Amazon Redshift database name.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>The Amazon Redshift host.</p>
   * @public
   */
  host?: string | undefined;

  /**
   * <p>The Amaon Redshift port.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The Amaon Redshift credentials.</p>
   * @public
   */
  credentials?: RedshiftCredentials | undefined;

  /**
   * <p>The lineage sync of the Amazon Redshift.</p>
   * @public
   */
  lineageSync?: RedshiftLineageSyncConfigurationInput | undefined;
}

/**
 * <p>The Amazon S3 properties of a connection.</p>
 * @public
 */
export interface S3PropertiesInput {
  /**
   * <p>The Amazon S3 URI that's part of the Amazon S3 properties of a connection.</p>
   * @public
   */
  s3Uri: string | undefined;

  /**
   * <p>The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties of a connection.</p>
   * @public
   */
  s3AccessGrantLocationId?: string | undefined;
}

/**
 * <p>The Spark EMR properties.</p>
 * @public
 */
export interface SparkEmrPropertiesInput {
  /**
   * <p>The compute ARN of Spark EMR.</p>
   * @public
   */
  computeArn?: string | undefined;

  /**
   * <p>The instance profile ARN of Spark EMR.</p>
   * @public
   */
  instanceProfileArn?: string | undefined;

  /**
   * <p>The java virtual env of the Spark EMR.</p>
   * @public
   */
  javaVirtualEnv?: string | undefined;

  /**
   * <p>The log URI of the Spark EMR.</p>
   * @public
   */
  logUri?: string | undefined;

  /**
   * <p>The Python virtual env of the Spark EMR.</p>
   * @public
   */
  pythonVirtualEnv?: string | undefined;

  /**
   * <p>The runtime role of the Spark EMR.</p>
   * @public
   */
  runtimeRole?: string | undefined;

  /**
   * <p>The certificates S3 URI of the Spark EMR.</p>
   * @public
   */
  trustedCertificatesS3Uri?: string | undefined;
}

/**
 * <p>The Spark Amazon Web Services Glue args.</p>
 * @public
 */
export interface SparkGlueArgs {
  /**
   * <p>The connection in the Spark Amazon Web Services Glue args.</p>
   * @public
   */
  connection?: string | undefined;
}

/**
 * <p>The Spark Amazon Web Services Glue properties. </p>
 * @public
 */
export interface SparkGluePropertiesInput {
  /**
   * <p>The additional args in the Spark Amazon Web Services Glue properties.</p>
   * @public
   */
  additionalArgs?: SparkGlueArgs | undefined;

  /**
   * <p>The Amazon Web Services Glue connection name in the Spark Amazon Web Services Glue
   *          properties.</p>
   * @public
   */
  glueConnectionName?: string | undefined;

  /**
   * <p>The Amazon Web Services Glue version in the Spark Amazon Web Services Glue
   *          properties.</p>
   * @public
   */
  glueVersion?: string | undefined;

  /**
   * <p>The idle timeout in the Spark Amazon Web Services Glue properties.</p>
   * @public
   */
  idleTimeout?: number | undefined;

  /**
   * <p>The Java virtual env in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  javaVirtualEnv?: string | undefined;

  /**
   * <p>The number of workers in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  numberOfWorkers?: number | undefined;

  /**
   * <p>The Python virtual env in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  pythonVirtualEnv?: string | undefined;

  /**
   * <p>The worker type in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  workerType?: string | undefined;
}

/**
 * <p>The properties of a connection.</p>
 * @public
 */
export type ConnectionPropertiesInput =
  | ConnectionPropertiesInput.AthenaPropertiesMember
  | ConnectionPropertiesInput.GluePropertiesMember
  | ConnectionPropertiesInput.HyperPodPropertiesMember
  | ConnectionPropertiesInput.IamPropertiesMember
  | ConnectionPropertiesInput.RedshiftPropertiesMember
  | ConnectionPropertiesInput.S3PropertiesMember
  | ConnectionPropertiesInput.SparkEmrPropertiesMember
  | ConnectionPropertiesInput.SparkGluePropertiesMember
  | ConnectionPropertiesInput.$UnknownMember;

/**
 * @public
 */
export namespace ConnectionPropertiesInput {
  /**
   * <p>The Amazon Athena properties of a connection.</p>
   * @public
   */
  export interface AthenaPropertiesMember {
    athenaProperties: AthenaPropertiesInput;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Web Services Glue properties of a connection.</p>
   * @public
   */
  export interface GluePropertiesMember {
    athenaProperties?: never;
    glueProperties: GluePropertiesInput;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The hyper pod properties of a connection.</p>
   * @public
   */
  export interface HyperPodPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties: HyperPodPropertiesInput;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The IAM properties of a connection.</p>
   * @public
   */
  export interface IamPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties: IamPropertiesInput;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Redshift properties of a connection.</p>
   * @public
   */
  export interface RedshiftPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties: RedshiftPropertiesInput;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Spark EMR properties of a connection.</p>
   * @public
   */
  export interface SparkEmrPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties: SparkEmrPropertiesInput;
    sparkGlueProperties?: never;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Spark Amazon Web Services Glue properties of a connection.</p>
   * @public
   */
  export interface SparkGluePropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties: SparkGluePropertiesInput;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon S3 properties of a connection.</p>
   * @public
   */
  export interface S3PropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties: S3PropertiesInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    athenaProperties: (value: AthenaPropertiesInput) => T;
    glueProperties: (value: GluePropertiesInput) => T;
    hyperPodProperties: (value: HyperPodPropertiesInput) => T;
    iamProperties: (value: IamPropertiesInput) => T;
    redshiftProperties: (value: RedshiftPropertiesInput) => T;
    sparkEmrProperties: (value: SparkEmrPropertiesInput) => T;
    sparkGlueProperties: (value: SparkGluePropertiesInput) => T;
    s3Properties: (value: S3PropertiesInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ConnectionPropertiesInput, visitor: Visitor<T>): T => {
    if (value.athenaProperties !== undefined) return visitor.athenaProperties(value.athenaProperties);
    if (value.glueProperties !== undefined) return visitor.glueProperties(value.glueProperties);
    if (value.hyperPodProperties !== undefined) return visitor.hyperPodProperties(value.hyperPodProperties);
    if (value.iamProperties !== undefined) return visitor.iamProperties(value.iamProperties);
    if (value.redshiftProperties !== undefined) return visitor.redshiftProperties(value.redshiftProperties);
    if (value.sparkEmrProperties !== undefined) return visitor.sparkEmrProperties(value.sparkEmrProperties);
    if (value.sparkGlueProperties !== undefined) return visitor.sparkGlueProperties(value.sparkGlueProperties);
    if (value.s3Properties !== undefined) return visitor.s3Properties(value.s3Properties);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  READY: "READY",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * <p>The properties of the Amazon Web Services Glue connection.</p>
 * @public
 */
export interface GluePropertiesOutput {
  /**
   * <p>The status of a connection.</p>
   * @public
   */
  status?: ConnectionStatus | undefined;

  /**
   * <p>The error message generated if the action is not completed successfully.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HyperPodOrchestrator = {
  EKS: "EKS",
  SLURM: "SLURM",
} as const;

/**
 * @public
 */
export type HyperPodOrchestrator = (typeof HyperPodOrchestrator)[keyof typeof HyperPodOrchestrator];

/**
 * <p>The hyper pod properties of a Amazon Web Services Glue properties patch.</p>
 * @public
 */
export interface HyperPodPropertiesOutput {
  /**
   * <p>The cluster name the hyper pod properties.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The cluster ARN of the hyper pod properties.</p>
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * <p>The orchestrator of the hyper pod properties.</p>
   * @public
   */
  orchestrator?: HyperPodOrchestrator | undefined;
}

/**
 * <p>The IAM properties of a connection.</p>
 * @public
 */
export interface IamPropertiesOutput {
  /**
   * <p>The environment ID of the connection.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>Specifies whether Amazon Web Services Glue lineage sync is enabled for a
   *          connection.</p>
   * @public
   */
  glueLineageSyncEnabled?: boolean | undefined;
}

/**
 * <p>The Amaon Redshift lineage sync configuration.</p>
 * @public
 */
export interface RedshiftLineageSyncConfigurationOutput {
  /**
   * <p>The lineage job ID of the Amaon Redshift lineage sync configuration.</p>
   * @public
   */
  lineageJobId?: string | undefined;

  /**
   * <p>Specifies whether the Amaon Redshift lineage sync configuration is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The schedule of teh Amaon Redshift lineage sync configuration.</p>
   * @public
   */
  schedule?: LineageSyncSchedule | undefined;
}

/**
 * <p>The Amazon Redshift properties.</p>
 * @public
 */
export interface RedshiftPropertiesOutput {
  /**
   * <p>The storage in the Amazon Redshift properties.</p>
   * @public
   */
  storage?: RedshiftStorageProperties | undefined;

  /**
   * <p>The Amazon Redshift credentials.</p>
   * @public
   */
  credentials?: RedshiftCredentials | undefined;

  /**
   * <p>Specifies whether Amaon Redshift properties has a provisioned secret.</p>
   * @public
   */
  isProvisionedSecret?: boolean | undefined;

  /**
   * <p>The jdbcIam URL of the Amazon Redshift properties.</p>
   * @public
   */
  jdbcIamUrl?: string | undefined;

  /**
   * <p>The jdbcURL of the Amazon Redshift properties. </p>
   * @public
   */
  jdbcUrl?: string | undefined;

  /**
   * <p>The redshiftTempDir of the Amazon Redshift properties.</p>
   * @public
   */
  redshiftTempDir?: string | undefined;

  /**
   * <p>The lineage syn of the Amazon Redshift properties.</p>
   * @public
   */
  lineageSync?: RedshiftLineageSyncConfigurationOutput | undefined;

  /**
   * <p>The status in the Amazon Redshift properties.</p>
   * @public
   */
  status?: ConnectionStatus | undefined;

  /**
   * <p>The Amazon Redshift database name.</p>
   * @public
   */
  databaseName?: string | undefined;
}

/**
 * <p>The Amazon S3 properties of a connection.</p>
 * @public
 */
export interface S3PropertiesOutput {
  /**
   * <p>The Amazon S3 URI that's part of the Amazon S3 properties of a connection.</p>
   * @public
   */
  s3Uri: string | undefined;

  /**
   * <p>The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties of a connection.</p>
   * @public
   */
  s3AccessGrantLocationId?: string | undefined;

  /**
   * <p>The status of the Amazon S3 connection.</p>
   * @public
   */
  status?: ConnectionStatus | undefined;

  /**
   * <p>The error message that gets displayed.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GovernanceType = {
  AWS_MANAGED: "AWS_MANAGED",
  USER_MANAGED: "USER_MANAGED",
} as const;

/**
 * @public
 */
export type GovernanceType = (typeof GovernanceType)[keyof typeof GovernanceType];

/**
 * <p>The Spark EMR properties.</p>
 * @public
 */
export interface SparkEmrPropertiesOutput {
  /**
   * <p>The compute ARN of the Spark EMR.</p>
   * @public
   */
  computeArn?: string | undefined;

  /**
   * <p>The credentials of the Spark EMR.</p>
   * @public
   */
  credentials?: UsernamePassword | undefined;

  /**
   * <p>The credential expiration of the Spark EMR.</p>
   * @public
   */
  credentialsExpiration?: Date | undefined;

  /**
   * <p>The governance type of the Spark EMR.</p>
   * @public
   */
  governanceType?: GovernanceType | undefined;

  /**
   * <p>The instance profile ARN of the Spark EMR.</p>
   * @public
   */
  instanceProfileArn?: string | undefined;

  /**
   * <p>The Java virtual env of the Spark EMR.</p>
   * @public
   */
  javaVirtualEnv?: string | undefined;

  /**
   * <p>The livy endpoint of the Spark EMR.</p>
   * @public
   */
  livyEndpoint?: string | undefined;

  /**
   * <p>The log URI of the Spark EMR.</p>
   * @public
   */
  logUri?: string | undefined;

  /**
   * <p>The Python virtual env of the Spark EMR.</p>
   * @public
   */
  pythonVirtualEnv?: string | undefined;

  /**
   * <p>The runtime role of the Spark EMR.</p>
   * @public
   */
  runtimeRole?: string | undefined;

  /**
   * <p>The trusted certificate S3 URL of the Spark EMR.</p>
   * @public
   */
  trustedCertificatesS3Uri?: string | undefined;
}

/**
 * <p>The Spark Amazon Web Services Glue properties. </p>
 * @public
 */
export interface SparkGluePropertiesOutput {
  /**
   * <p>The additional args in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  additionalArgs?: SparkGlueArgs | undefined;

  /**
   * <p>The Amazon Web Services Glue connection name in the Spark Amazon Web Services Glue
   *          properties. </p>
   * @public
   */
  glueConnectionName?: string | undefined;

  /**
   * <p>The Amazon Web Services Glue version in the Spark Amazon Web Services Glue properties.
   *       </p>
   * @public
   */
  glueVersion?: string | undefined;

  /**
   * <p>The idle timeout in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  idleTimeout?: number | undefined;

  /**
   * <p>The Java virtual env in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  javaVirtualEnv?: string | undefined;

  /**
   * <p>The number of workers in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  numberOfWorkers?: number | undefined;

  /**
   * <p>The Python virtual env in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  pythonVirtualEnv?: string | undefined;

  /**
   * <p>The worker type in the Spark Amazon Web Services Glue properties. </p>
   * @public
   */
  workerType?: string | undefined;
}

/**
 * <p>The properties of a connection.</p>
 * @public
 */
export type ConnectionPropertiesOutput =
  | ConnectionPropertiesOutput.AthenaPropertiesMember
  | ConnectionPropertiesOutput.GluePropertiesMember
  | ConnectionPropertiesOutput.HyperPodPropertiesMember
  | ConnectionPropertiesOutput.IamPropertiesMember
  | ConnectionPropertiesOutput.RedshiftPropertiesMember
  | ConnectionPropertiesOutput.S3PropertiesMember
  | ConnectionPropertiesOutput.SparkEmrPropertiesMember
  | ConnectionPropertiesOutput.SparkGluePropertiesMember
  | ConnectionPropertiesOutput.$UnknownMember;

/**
 * @public
 */
export namespace ConnectionPropertiesOutput {
  /**
   * <p>The Amazon Athena properties of a connection.</p>
   * @public
   */
  export interface AthenaPropertiesMember {
    athenaProperties: AthenaPropertiesOutput;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Web Services Glue properties of a connection.</p>
   * @public
   */
  export interface GluePropertiesMember {
    athenaProperties?: never;
    glueProperties: GluePropertiesOutput;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The hyper pod properties of a connection.</p>
   * @public
   */
  export interface HyperPodPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties: HyperPodPropertiesOutput;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The IAM properties of a connection.</p>
   * @public
   */
  export interface IamPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties: IamPropertiesOutput;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Redshift properties of a connection.</p>
   * @public
   */
  export interface RedshiftPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties: RedshiftPropertiesOutput;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Spark EMR properties of a connection.</p>
   * @public
   */
  export interface SparkEmrPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties: SparkEmrPropertiesOutput;
    sparkGlueProperties?: never;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Spark Amazon Web Services Glue properties of a connection.</p>
   * @public
   */
  export interface SparkGluePropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties: SparkGluePropertiesOutput;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon S3 properties of a connection.</p>
   * @public
   */
  export interface S3PropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties: S3PropertiesOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    athenaProperties?: never;
    glueProperties?: never;
    hyperPodProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    sparkGlueProperties?: never;
    s3Properties?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    athenaProperties: (value: AthenaPropertiesOutput) => T;
    glueProperties: (value: GluePropertiesOutput) => T;
    hyperPodProperties: (value: HyperPodPropertiesOutput) => T;
    iamProperties: (value: IamPropertiesOutput) => T;
    redshiftProperties: (value: RedshiftPropertiesOutput) => T;
    sparkEmrProperties: (value: SparkEmrPropertiesOutput) => T;
    sparkGlueProperties: (value: SparkGluePropertiesOutput) => T;
    s3Properties: (value: S3PropertiesOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ConnectionPropertiesOutput, visitor: Visitor<T>): T => {
    if (value.athenaProperties !== undefined) return visitor.athenaProperties(value.athenaProperties);
    if (value.glueProperties !== undefined) return visitor.glueProperties(value.glueProperties);
    if (value.hyperPodProperties !== undefined) return visitor.hyperPodProperties(value.hyperPodProperties);
    if (value.iamProperties !== undefined) return visitor.iamProperties(value.iamProperties);
    if (value.redshiftProperties !== undefined) return visitor.redshiftProperties(value.redshiftProperties);
    if (value.sparkEmrProperties !== undefined) return visitor.sparkEmrProperties(value.sparkEmrProperties);
    if (value.sparkGlueProperties !== undefined) return visitor.sparkGlueProperties(value.sparkGlueProperties);
    if (value.s3Properties !== undefined) return visitor.s3Properties(value.s3Properties);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The Amazon Web Services Glue connection patch.</p>
 * @public
 */
export interface GlueConnectionPatch {
  /**
   * <p>The description of the Amazon Web Services Glue connection patch.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The properties of the Amazon Web Services Glue connection patch.</p>
   * @public
   */
  connectionProperties?: Record<string, string> | undefined;

  /**
   * <p>The authentication configuration of the Amazon Web Services Glue connection patch.</p>
   * @public
   */
  authenticationConfiguration?: AuthenticationConfigurationPatch | undefined;
}

/**
 * <p>The Amazon Web Services Glue properties patch of a connection.</p>
 * @public
 */
export interface GluePropertiesPatch {
  /**
   * <p>The Amazon Web Services Glue properties patch of a connection.</p>
   * @public
   */
  glueConnectionInput?: GlueConnectionPatch | undefined;
}

/**
 * <p>The IAM properties patch of a connection.</p>
 * @public
 */
export interface IamPropertiesPatch {
  /**
   * <p>Specifies whether Amazon Web Services Glue lineage sync is enabled for a
   *          connection.</p>
   * @public
   */
  glueLineageSyncEnabled?: boolean | undefined;
}

/**
 * <p>Amazon Redshift properties patch.</p>
 * @public
 */
export interface RedshiftPropertiesPatch {
  /**
   * <p>The storage in the Amazon Redshift properties patch.</p>
   * @public
   */
  storage?: RedshiftStorageProperties | undefined;

  /**
   * <p>The name in the Amazon Redshift properties patch.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>The host in the Amazon Redshift properties patch.</p>
   * @public
   */
  host?: string | undefined;

  /**
   * <p>The port in the Amazon Redshift properties patch.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The credentials in the Amazon Redshift properties patch.</p>
   * @public
   */
  credentials?: RedshiftCredentials | undefined;

  /**
   * <p>The lineage sync in the Amazon Redshift properties patch.</p>
   * @public
   */
  lineageSync?: RedshiftLineageSyncConfigurationInput | undefined;
}

/**
 * <p>The Amazon S3 properties patch of a connection.</p>
 * @public
 */
export interface S3PropertiesPatch {
  /**
   * <p>The Amazon S3 URI that's part of the Amazon S3 properties patch of a connection.</p>
   * @public
   */
  s3Uri: string | undefined;

  /**
   * <p>The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties patch of a connection.</p>
   * @public
   */
  s3AccessGrantLocationId?: string | undefined;
}

/**
 * <p>The Spark EMR properties patch.</p>
 * @public
 */
export interface SparkEmrPropertiesPatch {
  /**
   * <p>The compute ARN in the Spark EMR properties patch.</p>
   * @public
   */
  computeArn?: string | undefined;

  /**
   * <p>The instance profile ARN in the Spark EMR properties patch.</p>
   * @public
   */
  instanceProfileArn?: string | undefined;

  /**
   * <p>The Java virtual evn in the Spark EMR properties patch.</p>
   * @public
   */
  javaVirtualEnv?: string | undefined;

  /**
   * <p>The log URI in the Spark EMR properties patch.</p>
   * @public
   */
  logUri?: string | undefined;

  /**
   * <p>The Python virtual env in the Spark EMR properties patch.</p>
   * @public
   */
  pythonVirtualEnv?: string | undefined;

  /**
   * <p>The runtime role in the Spark EMR properties patch.</p>
   * @public
   */
  runtimeRole?: string | undefined;

  /**
   * <p>The trusted certificates S3 URI in the Spark EMR properties patch.</p>
   * @public
   */
  trustedCertificatesS3Uri?: string | undefined;
}

/**
 * <p>The connection properties patch.</p>
 * @public
 */
export type ConnectionPropertiesPatch =
  | ConnectionPropertiesPatch.AthenaPropertiesMember
  | ConnectionPropertiesPatch.GluePropertiesMember
  | ConnectionPropertiesPatch.IamPropertiesMember
  | ConnectionPropertiesPatch.RedshiftPropertiesMember
  | ConnectionPropertiesPatch.S3PropertiesMember
  | ConnectionPropertiesPatch.SparkEmrPropertiesMember
  | ConnectionPropertiesPatch.$UnknownMember;

/**
 * @public
 */
export namespace ConnectionPropertiesPatch {
  /**
   * <p>The Amazon Athena properties of a connection properties patch.</p>
   * @public
   */
  export interface AthenaPropertiesMember {
    athenaProperties: AthenaPropertiesPatch;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Web Services Glue properties of a connection properties patch.</p>
   * @public
   */
  export interface GluePropertiesMember {
    athenaProperties?: never;
    glueProperties: GluePropertiesPatch;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The IAM properties of a connection properties patch.</p>
   * @public
   */
  export interface IamPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties: IamPropertiesPatch;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Redshift properties of a connection properties patch.</p>
   * @public
   */
  export interface RedshiftPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties: RedshiftPropertiesPatch;
    sparkEmrProperties?: never;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Spark EMR properties of a connection properties patch.</p>
   * @public
   */
  export interface SparkEmrPropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties: SparkEmrPropertiesPatch;
    s3Properties?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon S3 properties of a connection properties patch.</p>
   * @public
   */
  export interface S3PropertiesMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties: S3PropertiesPatch;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    athenaProperties?: never;
    glueProperties?: never;
    iamProperties?: never;
    redshiftProperties?: never;
    sparkEmrProperties?: never;
    s3Properties?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    athenaProperties: (value: AthenaPropertiesPatch) => T;
    glueProperties: (value: GluePropertiesPatch) => T;
    iamProperties: (value: IamPropertiesPatch) => T;
    redshiftProperties: (value: RedshiftPropertiesPatch) => T;
    sparkEmrProperties: (value: SparkEmrPropertiesPatch) => T;
    s3Properties: (value: S3PropertiesPatch) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ConnectionPropertiesPatch, visitor: Visitor<T>): T => {
    if (value.athenaProperties !== undefined) return visitor.athenaProperties(value.athenaProperties);
    if (value.glueProperties !== undefined) return visitor.glueProperties(value.glueProperties);
    if (value.iamProperties !== undefined) return visitor.iamProperties(value.iamProperties);
    if (value.redshiftProperties !== undefined) return visitor.redshiftProperties(value.redshiftProperties);
    if (value.sparkEmrProperties !== undefined) return visitor.sparkEmrProperties(value.sparkEmrProperties);
    if (value.s3Properties !== undefined) return visitor.s3Properties(value.s3Properties);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ConnectionType = {
  ATHENA: "ATHENA",
  BIGQUERY: "BIGQUERY",
  DATABRICKS: "DATABRICKS",
  DOCUMENTDB: "DOCUMENTDB",
  DYNAMODB: "DYNAMODB",
  HYPERPOD: "HYPERPOD",
  IAM: "IAM",
  MYSQL: "MYSQL",
  OPENSEARCH: "OPENSEARCH",
  ORACLE: "ORACLE",
  POSTGRESQL: "POSTGRESQL",
  REDSHIFT: "REDSHIFT",
  S3: "S3",
  SAPHANA: "SAPHANA",
  SNOWFLAKE: "SNOWFLAKE",
  SPARK: "SPARK",
  SQLSERVER: "SQLSERVER",
  TERADATA: "TERADATA",
  VERTICA: "VERTICA",
  WORKFLOWS_MWAA: "WORKFLOWS_MWAA",
} as const;

/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * <p>The Amazon Web Services Glue connection.</p>
 * @public
 */
export interface GlueConnection {
  /**
   * <p>The name of the Amazon Web Services Glue connection.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the Amazon Web Services Glue connection.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the Amazon Web Services Glue connection.</p>
   * @public
   */
  connectionType?: ConnectionType | undefined;

  /**
   * <p>The match criteria of the Amazon Web Services Glue connection.</p>
   * @public
   */
  matchCriteria?: string[] | undefined;

  /**
   * <p>The properties of the Amazon Web Services Glue connection.</p>
   * @public
   */
  connectionProperties?: Record<string, string> | undefined;

  /**
   * <p>The Spark properties of the Amazon Web Services Glue connection.</p>
   * @public
   */
  sparkProperties?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Athena properties of the Amazon Web Services Glue connection.</p>
   * @public
   */
  athenaProperties?: Record<string, string> | undefined;

  /**
   * <p>The Python properties of the Amazon Web Services Glue connection.</p>
   * @public
   */
  pythonProperties?: Record<string, string> | undefined;

  /**
   * <p>The physical connection requirements of the Amazon Web Services Glue connection.</p>
   * @public
   */
  physicalConnectionRequirements?: PhysicalConnectionRequirements | undefined;

  /**
   * <p>The creation time of the Amazon Web Services Glue connection.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The timestamp at which the Amazon Web Services Glue connection was last updated.</p>
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * <p>The user who last updated the Amazon Web Services Glue connection.</p>
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * <p>The status of the Amazon Web Services Glue connection.</p>
   * @public
   */
  status?: ConnectionStatus | undefined;

  /**
   * <p>The status reason of the Amazon Web Services Glue connection.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The last validation time of the Amazon Web Services Glue connection.</p>
   * @public
   */
  lastConnectionValidationTime?: Date | undefined;

  /**
   * <p>The authentication configuration of the Amazon Web Services Glue connection.</p>
   * @public
   */
  authenticationConfiguration?: AuthenticationConfiguration | undefined;

  /**
   * <p>The connection schema version of the Amazon Web Services Glue connection.</p>
   * @public
   */
  connectionSchemaVersion?: number | undefined;

  /**
   * <p>The compatible compute environments of the Amazon Web Services Glue connection.</p>
   * @public
   */
  compatibleComputeEnvironments?: ComputeEnvironments[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Protocol = {
  ATHENA: "ATHENA",
  GLUE_INTERACTIVE_SESSION: "GLUE_INTERACTIVE_SESSION",
  HTTPS: "HTTPS",
  JDBC: "JDBC",
  LIVY: "LIVY",
  ODBC: "ODBC",
  PRISM: "PRISM",
} as const;

/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * <p>The physical endpoints of a connection.</p>
 * @public
 */
export interface PhysicalEndpoint {
  /**
   * <p>The location of a connection.</p>
   * @public
   */
  awsLocation?: AwsLocation | undefined;

  /**
   * <p>The Amazon Web Services Glue connection name.</p>
   * @public
   */
  glueConnectionName?: string | undefined;

  /**
   * <p>The Amazon Web Services Glue connection.</p>
   * @public
   */
  glueConnection?: GlueConnection | undefined;

  /**
   * <p>The host in the physical endpoints of a connection.</p>
   * @public
   */
  host?: string | undefined;

  /**
   * <p>The port in the physical endpoints of a connection.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The protocol in the physical endpoints of a connection.</p>
   * @public
   */
  protocol?: Protocol | undefined;

  /**
   * <p>The stage in the physical endpoints of a connection.</p>
   * @public
   */
  stage?: string | undefined;
}

/**
 * <p>The summary of a connection.</p>
 * @public
 */
export interface ConnectionSummary {
  /**
   * <p>The ID of a connection.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The domain ID of a connection.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The domain unit ID of a connection.</p>
   * @public
   */
  domainUnitId: string | undefined;

  /**
   * <p>The environment ID of a connection.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The connection name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The connection physical endpoints.</p>
   * @public
   */
  physicalEndpoints: PhysicalEndpoint[] | undefined;

  /**
   * <p>The connection project ID.</p>
   * @public
   */
  projectId?: string | undefined;

  /**
   * <p>The connection props.</p>
   * @public
   */
  props?: ConnectionPropertiesOutput | undefined;

  /**
   * <p>The connection type.</p>
   * @public
   */
  type: ConnectionType | undefined;
}

/**
 * @public
 */
export interface CreateConnectionInput {
  /**
   * <p>The location where the connection is created.</p>
   * @public
   */
  awsLocation?: AwsLocation | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A connection description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the domain where the connection is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment where the connection is created.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The connection name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The connection props.</p>
   * @public
   */
  props?: ConnectionPropertiesInput | undefined;
}

/**
 * @public
 */
export interface CreateConnectionOutput {
  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The connection description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the domain where the connection is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the domain unit where the connection is created.</p>
   * @public
   */
  domainUnitId: string | undefined;

  /**
   * <p>The ID of the environment where the connection is created.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The connection name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The physical endpoints of the connection.</p>
   * @public
   */
  physicalEndpoints: PhysicalEndpoint[] | undefined;

  /**
   * <p>The ID of the project where the connection is created.</p>
   * @public
   */
  projectId?: string | undefined;

  /**
   * <p>The connection props.</p>
   * @public
   */
  props?: ConnectionPropertiesOutput | undefined;

  /**
   * <p>The connection type.</p>
   * @public
   */
  type: ConnectionType | undefined;
}

/**
 * @public
 * @enum
 */
export const DataProductItemType = {
  ASSET: "ASSET",
} as const;

/**
 * @public
 */
export type DataProductItemType = (typeof DataProductItemType)[keyof typeof DataProductItemType];

/**
 * <p>The data product.</p>
 * @public
 */
export interface DataProductItem {
  /**
   * <p>The type of the data product.</p>
   * @public
   */
  itemType: DataProductItemType | undefined;

  /**
   * <p>The ID of the data product.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision of the data product.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>The glossary terms of the data product.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDataProductInput {
  /**
   * <p>The ID of the domain where the data product is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of the data product.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the owning project of the data product.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * <p>The description of the data product.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The glossary terms of the data product.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The metadata forms of the data product.</p>
   * @public
   */
  formsInput?: FormInput[] | undefined;

  /**
   * <p>The data assets of the data product.</p>
   * @public
   */
  items?: DataProductItem[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataProductStatus = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
} as const;

/**
 * @public
 */
export type DataProductStatus = (typeof DataProductStatus)[keyof typeof DataProductStatus];

/**
 * @public
 */
export interface CreateDataProductOutput {
  /**
   * <p>The ID of the domain where the data product lives.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the data product.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The revision of the data product.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The ID of the owning project of the data product.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The name of the data product.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the data product.</p>
   * @public
   */
  status: DataProductStatus | undefined;

  /**
   * <p>The description of the data product.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The glossary terms of the data product.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The data assets of the data product.</p>
   * @public
   */
  items?: DataProductItem[] | undefined;

  /**
   * <p>The metadata forms of the data product.</p>
   * @public
   */
  formsOutput?: FormOutput[] | undefined;

  /**
   * <p>The timestamp at which the data product was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The user who created the data product.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp at which the first revision of the data product was created.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * <p>The user who created the first revision of the data product.</p>
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataProductRevisionInput {
  /**
   * <p>The ID of the domain where the data product revision is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the data product revision.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name of the data product revision.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the data product revision.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The glossary terms of the data product revision.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The data assets of the data product revision.</p>
   * @public
   */
  items?: DataProductItem[] | undefined;

  /**
   * <p>The metadata forms of the data product revision.</p>
   * @public
   */
  formsInput?: FormInput[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataProductRevisionOutput {
  /**
   * <p>The ID of the domain where data product revision is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the data product revision.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The revision of the data product revision.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The ID of the owning project of the data product revision.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The name of the data product revision.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the data product revision.</p>
   * @public
   */
  status: DataProductStatus | undefined;

  /**
   * <p>The description of the data product revision.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The glossary terms of the data product revision.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The data assets of the data product revision.</p>
   * @public
   */
  items?: DataProductItem[] | undefined;

  /**
   * <p>The metadata forms of the data product revision.</p>
   * @public
   */
  formsOutput?: FormOutput[] | undefined;

  /**
   * <p>The timestamp at which the data product revision is created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The user who created the data product revision.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The timestamp at which the first revision of the data product is created.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date | undefined;

  /**
   * <p>The user who created the first revision of the data product.</p>
   * @public
   */
  firstRevisionCreatedBy?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FilterExpressionType = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type FilterExpressionType = (typeof FilterExpressionType)[keyof typeof FilterExpressionType];

/**
 * <p>A filter expression in Amazon DataZone.</p>
 * @public
 */
export interface FilterExpression {
  /**
   * <p>The search filter explresison type.</p>
   * @public
   */
  type: FilterExpressionType | undefined;

  /**
   * <p>The search filter expression.</p>
   * @public
   */
  expression: string | undefined;
}

/**
 * <p>The relational filter configuration for the data source.</p>
 * @public
 */
export interface RelationalFilterConfiguration {
  /**
   * <p>The database name specified in the relational filter configuration for the data
   *          source.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>The schema name specified in the relational filter configuration for the data
   *          source.</p>
   * @public
   */
  schemaName?: string | undefined;

  /**
   * <p>The filter expressions specified in the relational filter configuration for the data
   *          source.</p>
   * @public
   */
  filterExpressions?: FilterExpression[] | undefined;
}

/**
 * <p>The configuration details of the Amazon Web Services Glue data source.</p>
 * @public
 */
export interface GlueRunConfigurationInput {
  /**
   * <p>The data access role included in the configuration details of the Amazon Web Services Glue data
   *          source.</p>
   * @public
   */
  dataAccessRole?: string | undefined;

  /**
   * <p>The relational filter configurations included in the configuration details of the Amazon Web Services
   *          Glue data source.</p>
   * @public
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * <p>Specifies whether to automatically import data quality metrics as part of the data
   *          source run.</p>
   * @public
   */
  autoImportDataQualityResult?: boolean | undefined;

  /**
   * <p>The catalog name in the Amazon Web Services Glue run configuration.</p>
   * @public
   */
  catalogName?: string | undefined;
}

/**
 * <p>The details of the credentials required to access an Amazon Redshift cluster.</p>
 * @public
 */
export interface RedshiftCredentialConfiguration {
  /**
   * <p>The ARN of a secret manager for an Amazon Redshift cluster.</p>
   * @public
   */
  secretManagerArn: string | undefined;
}

/**
 * <p>The details of the Amazon Redshift cluster storage.</p>
 * @public
 */
export interface RedshiftClusterStorage {
  /**
   * <p>The name of an Amazon Redshift cluster.</p>
   * @public
   */
  clusterName: string | undefined;
}

/**
 * <p>The details of the Amazon Redshift Serverless workgroup storage.</p>
 * @public
 */
export interface RedshiftServerlessStorage {
  /**
   * <p>The name of the Amazon Redshift Serverless workgroup.</p>
   * @public
   */
  workgroupName: string | undefined;
}

/**
 * <p>The details of the Amazon Redshift storage as part of the configuration of an Amazon
 *          Redshift data source run.</p>
 * @public
 */
export type RedshiftStorage =
  | RedshiftStorage.RedshiftClusterSourceMember
  | RedshiftStorage.RedshiftServerlessSourceMember
  | RedshiftStorage.$UnknownMember;

/**
 * @public
 */
export namespace RedshiftStorage {
  /**
   * <p>The details of the Amazon Redshift cluster source.</p>
   * @public
   */
  export interface RedshiftClusterSourceMember {
    redshiftClusterSource: RedshiftClusterStorage;
    redshiftServerlessSource?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of the Amazon Redshift Serverless workgroup source.</p>
   * @public
   */
  export interface RedshiftServerlessSourceMember {
    redshiftClusterSource?: never;
    redshiftServerlessSource: RedshiftServerlessStorage;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    redshiftClusterSource?: never;
    redshiftServerlessSource?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    redshiftClusterSource: (value: RedshiftClusterStorage) => T;
    redshiftServerlessSource: (value: RedshiftServerlessStorage) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RedshiftStorage, visitor: Visitor<T>): T => {
    if (value.redshiftClusterSource !== undefined) return visitor.redshiftClusterSource(value.redshiftClusterSource);
    if (value.redshiftServerlessSource !== undefined)
      return visitor.redshiftServerlessSource(value.redshiftServerlessSource);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The configuration details of the Amazon Redshift data source.</p>
 * @public
 */
export interface RedshiftRunConfigurationInput {
  /**
   * <p>The data access role included in the configuration details of the Amazon Redshift data
   *          source.</p>
   * @public
   */
  dataAccessRole?: string | undefined;

  /**
   * <p>The relational filger configurations included in the configuration details of the Amazon
   *          Redshift data source.</p>
   * @public
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * <p>The details of the credentials required to access an Amazon Redshift cluster.</p>
   * @public
   */
  redshiftCredentialConfiguration?: RedshiftCredentialConfiguration | undefined;

  /**
   * <p>The details of the Amazon Redshift storage as part of the configuration of an Amazon
   *          Redshift data source run.</p>
   * @public
   */
  redshiftStorage?: RedshiftStorage | undefined;
}

/**
 * <p>The Amazon SageMaker run configuration.</p>
 * @public
 */
export interface SageMakerRunConfigurationInput {
  /**
   * <p>The tracking assets of the Amazon SageMaker run.</p>
   * @public
   */
  trackingAssets: Record<string, string[]> | undefined;
}

/**
 * <p>The configuration of the data source.</p>
 * @public
 */
export type DataSourceConfigurationInput =
  | DataSourceConfigurationInput.GlueRunConfigurationMember
  | DataSourceConfigurationInput.RedshiftRunConfigurationMember
  | DataSourceConfigurationInput.SageMakerRunConfigurationMember
  | DataSourceConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceConfigurationInput {
  /**
   * <p>The configuration of the Amazon Web Services Glue data source.</p>
   * @public
   */
  export interface GlueRunConfigurationMember {
    glueRunConfiguration: GlueRunConfigurationInput;
    redshiftRunConfiguration?: never;
    sageMakerRunConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration of the Amazon Redshift data source.</p>
   * @public
   */
  export interface RedshiftRunConfigurationMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration: RedshiftRunConfigurationInput;
    sageMakerRunConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon SageMaker run configuration.</p>
   * @public
   */
  export interface SageMakerRunConfigurationMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration?: never;
    sageMakerRunConfiguration: SageMakerRunConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration?: never;
    sageMakerRunConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    glueRunConfiguration: (value: GlueRunConfigurationInput) => T;
    redshiftRunConfiguration: (value: RedshiftRunConfigurationInput) => T;
    sageMakerRunConfiguration: (value: SageMakerRunConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataSourceConfigurationInput, visitor: Visitor<T>): T => {
    if (value.glueRunConfiguration !== undefined) return visitor.glueRunConfiguration(value.glueRunConfiguration);
    if (value.redshiftRunConfiguration !== undefined)
      return visitor.redshiftRunConfiguration(value.redshiftRunConfiguration);
    if (value.sageMakerRunConfiguration !== undefined)
      return visitor.sageMakerRunConfiguration(value.sageMakerRunConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const EnableSetting = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type EnableSetting = (typeof EnableSetting)[keyof typeof EnableSetting];

/**
 * <p>The recommendation to be updated as part of the <code>UpdateDataSource</code>
 *          action.</p>
 * @public
 */
export interface RecommendationConfiguration {
  /**
   * <p>Specifies whether automatic business name generation is to be enabled or not as part of
   *          the recommendation configuration.</p>
   * @public
   */
  enableBusinessNameGeneration?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const Timezone = {
  AFRICA_JOHANNESBURG: "AFRICA_JOHANNESBURG",
  AMERICA_MONTREAL: "AMERICA_MONTREAL",
  AMERICA_SAO_PAULO: "AMERICA_SAO_PAULO",
  ASIA_BAHRAIN: "ASIA_BAHRAIN",
  ASIA_BANGKOK: "ASIA_BANGKOK",
  ASIA_CALCUTTA: "ASIA_CALCUTTA",
  ASIA_DUBAI: "ASIA_DUBAI",
  ASIA_HONG_KONG: "ASIA_HONG_KONG",
  ASIA_JAKARTA: "ASIA_JAKARTA",
  ASIA_KUALA_LUMPUR: "ASIA_KUALA_LUMPUR",
  ASIA_SEOUL: "ASIA_SEOUL",
  ASIA_SHANGHAI: "ASIA_SHANGHAI",
  ASIA_SINGAPORE: "ASIA_SINGAPORE",
  ASIA_TAIPEI: "ASIA_TAIPEI",
  ASIA_TOKYO: "ASIA_TOKYO",
  AUSTRALIA_MELBOURNE: "AUSTRALIA_MELBOURNE",
  AUSTRALIA_SYDNEY: "AUSTRALIA_SYDNEY",
  CANADA_CENTRAL: "CANADA_CENTRAL",
  CET: "CET",
  CST6CDT: "CST6CDT",
  ETC_GMT: "ETC_GMT",
  ETC_GMT0: "ETC_GMT0",
  ETC_GMT_ADD_0: "ETC_GMT_ADD_0",
  ETC_GMT_ADD_1: "ETC_GMT_ADD_1",
  ETC_GMT_ADD_10: "ETC_GMT_ADD_10",
  ETC_GMT_ADD_11: "ETC_GMT_ADD_11",
  ETC_GMT_ADD_12: "ETC_GMT_ADD_12",
  ETC_GMT_ADD_2: "ETC_GMT_ADD_2",
  ETC_GMT_ADD_3: "ETC_GMT_ADD_3",
  ETC_GMT_ADD_4: "ETC_GMT_ADD_4",
  ETC_GMT_ADD_5: "ETC_GMT_ADD_5",
  ETC_GMT_ADD_6: "ETC_GMT_ADD_6",
  ETC_GMT_ADD_7: "ETC_GMT_ADD_7",
  ETC_GMT_ADD_8: "ETC_GMT_ADD_8",
  ETC_GMT_ADD_9: "ETC_GMT_ADD_9",
  ETC_GMT_NEG_0: "ETC_GMT_NEG_0",
  ETC_GMT_NEG_1: "ETC_GMT_NEG_1",
  ETC_GMT_NEG_10: "ETC_GMT_NEG_10",
  ETC_GMT_NEG_11: "ETC_GMT_NEG_11",
  ETC_GMT_NEG_12: "ETC_GMT_NEG_12",
  ETC_GMT_NEG_13: "ETC_GMT_NEG_13",
  ETC_GMT_NEG_14: "ETC_GMT_NEG_14",
  ETC_GMT_NEG_2: "ETC_GMT_NEG_2",
  ETC_GMT_NEG_3: "ETC_GMT_NEG_3",
  ETC_GMT_NEG_4: "ETC_GMT_NEG_4",
  ETC_GMT_NEG_5: "ETC_GMT_NEG_5",
  ETC_GMT_NEG_6: "ETC_GMT_NEG_6",
  ETC_GMT_NEG_7: "ETC_GMT_NEG_7",
  ETC_GMT_NEG_8: "ETC_GMT_NEG_8",
  ETC_GMT_NEG_9: "ETC_GMT_NEG_9",
  EUROPE_DUBLIN: "EUROPE_DUBLIN",
  EUROPE_LONDON: "EUROPE_LONDON",
  EUROPE_PARIS: "EUROPE_PARIS",
  EUROPE_STOCKHOLM: "EUROPE_STOCKHOLM",
  EUROPE_ZURICH: "EUROPE_ZURICH",
  ISRAEL: "ISRAEL",
  MEXICO_GENERAL: "MEXICO_GENERAL",
  MST7MDT: "MST7MDT",
  PACIFIC_AUCKLAND: "PACIFIC_AUCKLAND",
  US_CENTRAL: "US_CENTRAL",
  US_EASTERN: "US_EASTERN",
  US_MOUNTAIN: "US_MOUNTAIN",
  US_PACIFIC: "US_PACIFIC",
  UTC: "UTC",
} as const;

/**
 * @public
 */
export type Timezone = (typeof Timezone)[keyof typeof Timezone];

/**
 * <p>The details of the schedule of the data source runs.</p>
 * @public
 */
export interface ScheduleConfiguration {
  /**
   * <p>The timezone of the data source run. </p>
   * @public
   */
  timezone?: Timezone | undefined;

  /**
   * <p>The schedule of the data source runs.</p>
   * @public
   */
  schedule?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceInput {
  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the data source.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain where the data source is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone project in which you want to add this data
   *          source.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the Amazon DataZone environment to which the data source publishes
   *          assets. </p>
   * @public
   */
  environmentIdentifier?: string | undefined;

  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionIdentifier?: string | undefined;

  /**
   * <p>The type of the data source. In Amazon DataZone, you can use data sources to import
   *          technical metadata of assets (data) from the source databases or data warehouses into
   *          Amazon DataZone. In the current release of Amazon DataZone, you can create and run data
   *          sources for Amazon Web Services Glue and Amazon Redshift.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>Specifies the configuration of the data source. It can be set to either
   *             <code>glueRunConfiguration</code> or <code>redshiftRunConfiguration</code>.</p>
   * @public
   */
  configuration?: DataSourceConfigurationInput | undefined;

  /**
   * <p>Specifies whether the business name generation is to be enabled for this data
   *          source.</p>
   * @public
   */
  recommendation?: RecommendationConfiguration | undefined;

  /**
   * <p>Specifies whether the data source is enabled.</p>
   * @public
   */
  enableSetting?: EnableSetting | undefined;

  /**
   * <p>The schedule of the data source runs.</p>
   * @public
   */
  schedule?: ScheduleConfiguration | undefined;

  /**
   * <p>Specifies whether the assets that this data source creates in the inventory are to be
   *          also automatically published to the catalog.</p>
   * @public
   */
  publishOnImport?: boolean | undefined;

  /**
   * <p>The metadata forms that are to be attached to the assets that this data source works
   *          with.</p>
   * @public
   */
  assetFormsInput?: FormInput[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The configuration details of the Amazon Web Services Glue data source.</p>
 * @public
 */
export interface GlueRunConfigurationOutput {
  /**
   * <p>The Amazon Web Services account ID included in the configuration details of the Amazon Web Services Glue data
   *          source. </p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Web Services region included in the configuration details of the Amazon Web Services Glue data source.
   *       </p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The data access role included in the configuration details of the Amazon Web Services Glue data
   *          source. </p>
   * @public
   */
  dataAccessRole?: string | undefined;

  /**
   * <p>The relational filter configurations included in the configuration details of the Amazon Web Services
   *          Glue data source.</p>
   * @public
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * <p>Specifies whether to automatically import data quality metrics as part of the data
   *          source run.</p>
   * @public
   */
  autoImportDataQualityResult?: boolean | undefined;

  /**
   * <p>The catalog name in the Amazon Web Services Glue run configuration.</p>
   * @public
   */
  catalogName?: string | undefined;
}

/**
 * <p>The configuration details of the Amazon Redshift data source.</p>
 * @public
 */
export interface RedshiftRunConfigurationOutput {
  /**
   * <p>The ID of the Amazon Web Services account included in the configuration details of the Amazon Redshift
   *          data source.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Web Services region included in the configuration details of the Amazon Redshift data
   *          source.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The data access role included in the configuration details of the Amazon Redshift data
   *          source.</p>
   * @public
   */
  dataAccessRole?: string | undefined;

  /**
   * <p>The relational filger configurations included in the configuration details of the Amazon
   *          Redshift data source.</p>
   * @public
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * <p>The details of the credentials required to access an Amazon Redshift cluster.</p>
   * @public
   */
  redshiftCredentialConfiguration?: RedshiftCredentialConfiguration | undefined;

  /**
   * <p>The details of the Amazon Redshift storage as part of the configuration of an Amazon
   *          Redshift data source run.</p>
   * @public
   */
  redshiftStorage: RedshiftStorage | undefined;
}

/**
 * <p>The Amazon SageMaker run configuration.</p>
 * @public
 */
export interface SageMakerRunConfigurationOutput {
  /**
   * <p>The Amazon SageMaker account ID.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon SageMaker Region.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The tracking assets of the Amazon SageMaker.</p>
   * @public
   */
  trackingAssets: Record<string, string[]> | undefined;
}

/**
 * <p>The configuration of the data source.</p>
 * @public
 */
export type DataSourceConfigurationOutput =
  | DataSourceConfigurationOutput.GlueRunConfigurationMember
  | DataSourceConfigurationOutput.RedshiftRunConfigurationMember
  | DataSourceConfigurationOutput.SageMakerRunConfigurationMember
  | DataSourceConfigurationOutput.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceConfigurationOutput {
  /**
   * <p>The configuration of the Amazon Web Services Glue data source.</p>
   * @public
   */
  export interface GlueRunConfigurationMember {
    glueRunConfiguration: GlueRunConfigurationOutput;
    redshiftRunConfiguration?: never;
    sageMakerRunConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration of the Amazon Redshift data source.</p>
   * @public
   */
  export interface RedshiftRunConfigurationMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration: RedshiftRunConfigurationOutput;
    sageMakerRunConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon SageMaker run configuration.</p>
   * @public
   */
  export interface SageMakerRunConfigurationMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration?: never;
    sageMakerRunConfiguration: SageMakerRunConfigurationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration?: never;
    sageMakerRunConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    glueRunConfiguration: (value: GlueRunConfigurationOutput) => T;
    redshiftRunConfiguration: (value: RedshiftRunConfigurationOutput) => T;
    sageMakerRunConfiguration: (value: SageMakerRunConfigurationOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataSourceConfigurationOutput, visitor: Visitor<T>): T => {
    if (value.glueRunConfiguration !== undefined) return visitor.glueRunConfiguration(value.glueRunConfiguration);
    if (value.redshiftRunConfiguration !== undefined)
      return visitor.redshiftRunConfiguration(value.redshiftRunConfiguration);
    if (value.sageMakerRunConfiguration !== undefined)
      return visitor.sageMakerRunConfiguration(value.sageMakerRunConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const DataSourceErrorType = {
  ACCESS_DENIED_EXCEPTION: "ACCESS_DENIED_EXCEPTION",
  CONFLICT_EXCEPTION: "CONFLICT_EXCEPTION",
  INTERNAL_SERVER_EXCEPTION: "INTERNAL_SERVER_EXCEPTION",
  RESOURCE_NOT_FOUND_EXCEPTION: "RESOURCE_NOT_FOUND_EXCEPTION",
  SERVICE_QUOTA_EXCEEDED_EXCEPTION: "SERVICE_QUOTA_EXCEEDED_EXCEPTION",
  THROTTLING_EXCEPTION: "THROTTLING_EXCEPTION",
  VALIDATION_EXCEPTION: "VALIDATION_EXCEPTION",
} as const;

/**
 * @public
 */
export type DataSourceErrorType = (typeof DataSourceErrorType)[keyof typeof DataSourceErrorType];

/**
 * <p>The details of the error message that is returned if the operation cannot be
 *          successfully completed.</p>
 * @public
 */
export interface DataSourceErrorMessage {
  /**
   * <p>The type of the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  errorType: DataSourceErrorType | undefined;

  /**
   * <p>The details of the error message that is returned if the operation cannot be
   *          successfully completed.</p>
   * @public
   */
  errorDetail?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSourceRunStatus = {
  FAILED: "FAILED",
  PARTIALLY_SUCCEEDED: "PARTIALLY_SUCCEEDED",
  REQUESTED: "REQUESTED",
  RUNNING: "RUNNING",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type DataSourceRunStatus = (typeof DataSourceRunStatus)[keyof typeof DataSourceRunStatus];

/**
 * @public
 * @enum
 */
export const DataSourceStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED_CREATION: "FAILED_CREATION",
  FAILED_DELETION: "FAILED_DELETION",
  FAILED_UPDATE: "FAILED_UPDATE",
  READY: "READY",
  RUNNING: "RUNNING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type DataSourceStatus = (typeof DataSourceStatus)[keyof typeof DataSourceStatus];

/**
 * @public
 */
export interface CreateDataSourceOutput {
  /**
   * <p>The unique identifier of the data source.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The status of the data source.</p>
   * @public
   */
  status?: DataSourceStatus | undefined;

  /**
   * <p>The type of the data source.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the data source.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the data source is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone project to which the data source is added.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The unique identifier of the Amazon DataZone environment to which the data source publishes
   *          assets. </p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId?: string | undefined;

  /**
   * <p>Specifies the configuration of the data source. It can be set to either
   *             <code>glueRunConfiguration</code> or <code>redshiftRunConfiguration</code>.</p>
   * @public
   */
  configuration?: DataSourceConfigurationOutput | undefined;

  /**
   * <p>Specifies whether the business name generation is to be enabled for this data
   *          source.</p>
   * @public
   */
  recommendation?: RecommendationConfiguration | undefined;

  /**
   * <p>Specifies whether the data source is enabled.</p>
   * @public
   */
  enableSetting?: EnableSetting | undefined;

  /**
   * <p>Specifies whether the assets that this data source creates in the inventory are to be
   *          also automatically published to the catalog.</p>
   * @public
   */
  publishOnImport?: boolean | undefined;

  /**
   * <p>The metadata forms attached to the assets that this data source creates.</p>
   * @public
   */
  assetFormsOutput?: FormOutput[] | undefined;

  /**
   * <p>The schedule of the data source runs.</p>
   * @public
   */
  schedule?: ScheduleConfiguration | undefined;

  /**
   * <p>The status of the last run of this data source.</p>
   * @public
   */
  lastRunStatus?: DataSourceRunStatus | undefined;

  /**
   * <p>The timestamp that specifies when the data source was last run.</p>
   * @public
   */
  lastRunAt?: Date | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  lastRunErrorMessage?: DataSourceErrorMessage | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  errorMessage?: DataSourceErrorMessage | undefined;

  /**
   * <p>The timestamp of when the data source was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the data source was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const DomainVersion = {
  V1: "V1",
  V2: "V2",
} as const;

/**
 * @public
 */
export type DomainVersion = (typeof DomainVersion)[keyof typeof DomainVersion];

/**
 * @public
 * @enum
 */
export const UserAssignment = {
  AUTOMATIC: "AUTOMATIC",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type UserAssignment = (typeof UserAssignment)[keyof typeof UserAssignment];

/**
 * <p>The single sign-on details in Amazon DataZone.</p>
 * @public
 */
export interface SingleSignOn {
  /**
   * <p>The type of single sign-on in Amazon DataZone.</p>
   * @public
   */
  type?: AuthType | undefined;

  /**
   * <p>The single sign-on user assignment in Amazon DataZone.</p>
   * @public
   */
  userAssignment?: UserAssignment | undefined;

  /**
   * <p>The ARN of the IDC instance.</p>
   * @public
   */
  idcInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainInput {
  /**
   * <p>The name of the Amazon DataZone domain.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the Amazon DataZone domain.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The single-sign on configuration of the Amazon DataZone domain.</p>
   * @public
   */
  singleSignOn?: SingleSignOn | undefined;

  /**
   * <p>The domain execution role that is created when an Amazon DataZone domain is created. The
   *          domain execution role is created in the Amazon Web Services account that houses the
   *          Amazon DataZone domain.</p>
   * @public
   */
  domainExecutionRole: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services Key Management Service (KMS) key that is used
   *          to encrypt the Amazon DataZone domain, metadata, and reporting data. </p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * <p>The tags specified for the Amazon DataZone domain.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The version of the domain that is created.</p>
   * @public
   */
  domainVersion?: DomainVersion | undefined;

  /**
   * <p>The service role of the domain that is created.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  CREATION_FAILED: "CREATION_FAILED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  DELETION_FAILED: "DELETION_FAILED",
} as const;

/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 */
export interface CreateDomainOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the root domain unit.</p>
   * @public
   */
  rootDomainUnitId?: string | undefined;

  /**
   * <p>The name of the Amazon DataZone domain.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the Amazon DataZone domain.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The single-sign on configuration of the Amazon DataZone domain.</p>
   * @public
   */
  singleSignOn?: SingleSignOn | undefined;

  /**
   * <p>The domain execution role that is created when an Amazon DataZone domain is created. The
   *          domain execution role is created in the Amazon Web Services account that houses the
   *          Amazon DataZone domain.</p>
   * @public
   */
  domainExecutionRole?: string | undefined;

  /**
   * <p>The ARN of the Amazon DataZone domain.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services Key Management Service (KMS) key that is used
   *          to encrypt the Amazon DataZone domain, metadata, and reporting data. </p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * <p>The status of the Amazon DataZone domain.</p>
   * @public
   */
  status?: DomainStatus | undefined;

  /**
   * <p>The URL of the data portal for this Amazon DataZone domain.</p>
   * @public
   */
  portalUrl?: string | undefined;

  /**
   * <p>The tags specified for the Amazon DataZone domain.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The version of the domain that is created.</p>
   * @public
   */
  domainVersion?: DomainVersion | undefined;

  /**
   * <p>Te service role of the domain that is created.</p>
   * @public
   */
  serviceRole?: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainUnitInput {
  /**
   * <p>The ID of the domain where you want to crate a domain unit.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of the domain unit.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the parent domain unit.</p>
   * @public
   */
  parentDomainUnitIdentifier: string | undefined;

  /**
   * <p>The description of the domain unit.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The properties of a domain unit group.</p>
 * @public
 */
export interface DomainUnitGroupProperties {
  /**
   * <p>The ID of the domain unit group.</p>
   * @public
   */
  groupId?: string | undefined;
}

/**
 * <p>The properties of the domain unit user.</p>
 * @public
 */
export interface DomainUnitUserProperties {
  /**
   * <p>The ID of teh domain unit user.</p>
   * @public
   */
  userId?: string | undefined;
}

/**
 * <p>The properties of the domain unit owner.</p>
 * @public
 */
export type DomainUnitOwnerProperties =
  | DomainUnitOwnerProperties.GroupMember
  | DomainUnitOwnerProperties.UserMember
  | DomainUnitOwnerProperties.$UnknownMember;

/**
 * @public
 */
export namespace DomainUnitOwnerProperties {
  /**
   * <p>Indicates that the domain unit owner is a user.</p>
   * @public
   */
  export interface UserMember {
    user: DomainUnitUserProperties;
    group?: never;
    $unknown?: never;
  }

  /**
   * <p>Indicates that the domain unit owner is a group.</p>
   * @public
   */
  export interface GroupMember {
    user?: never;
    group: DomainUnitGroupProperties;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    user?: never;
    group?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    user: (value: DomainUnitUserProperties) => T;
    group: (value: DomainUnitGroupProperties) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DomainUnitOwnerProperties, visitor: Visitor<T>): T => {
    if (value.user !== undefined) return visitor.user(value.user);
    if (value.group !== undefined) return visitor.group(value.group);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateDomainUnitOutput {
  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the domain where the domain unit was created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the domain unit.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the parent domain unit.</p>
   * @public
   */
  parentDomainUnitId?: string | undefined;

  /**
   * <p>The description of the domain unit.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The owners of the domain unit.</p>
   * @public
   */
  owners: DomainUnitOwnerProperties[] | undefined;

  /**
   * <p>The IDs of the ancestor domain units.</p>
   * @public
   */
  ancestorDomainUnitIds: string[] | undefined;

  /**
   * <p>The timestamp at which the domain unit was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The user who created the domain unit.</p>
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * <p>The parameter details of an evironment profile.</p>
 * @public
 */
export interface EnvironmentParameter {
  /**
   * <p>The name of an environment profile parameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The value of an environment profile parameter.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentInput {
  /**
   * <p>The identifier of the Amazon DataZone project in which this environment is created.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the environment is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The description of the Amazon DataZone environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The name of the Amazon DataZone environment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the environment profile that is used to create this Amazon DataZone
   *          environment.</p>
   * @public
   */
  environmentProfileIdentifier?: string | undefined;

  /**
   * <p>The user parameters of this Amazon DataZone environment.</p>
   * @public
   */
  userParameters?: EnvironmentParameter[] | undefined;

  /**
   * <p>The glossary terms that can be used in this Amazon DataZone environment.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The ID of the account in which the environment is being created.</p>
   * @public
   */
  environmentAccountIdentifier?: string | undefined;

  /**
   * <p>The region of the account in which the environment is being created.</p>
   * @public
   */
  environmentAccountRegion?: string | undefined;

  /**
   * <p>The ID of the blueprint with which the environment is being created.</p>
   * @public
   */
  environmentBlueprintIdentifier?: string | undefined;

  /**
   * <p>The deployment order of the environment.</p>
   * @public
   */
  deploymentOrder?: number | undefined;

  /**
   * <p>The configuration ID of the environment.</p>
   * @public
   */
  environmentConfigurationId?: string | undefined;
}

/**
 * <p>The deployment properties of the Amazon DataZone blueprint.</p>
 * @public
 */
export interface DeploymentProperties {
  /**
   * <p>The start timeout of the environment blueprint deployment.</p>
   * @public
   */
  startTimeoutMinutes?: number | undefined;

  /**
   * <p>The end timeout of the environment blueprint deployment.</p>
   * @public
   */
  endTimeoutMinutes?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING_DEPLOYMENT: "PENDING_DEPLOYMENT",
  SUCCESSFUL: "SUCCESSFUL",
} as const;

/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 * @enum
 */
export const DeploymentType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType];

/**
 * <p>The failure reasons for the environment deployment.</p>
 * @public
 */
export interface EnvironmentError {
  /**
   * <p>The error code for the failure reason for the environment deployment.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The error message for the failure reason for the environment deployment.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The details of the last deployment of the environment.</p>
 * @public
 */
export interface Deployment {
  /**
   * <p>The identifier of the last deployment of the environment.</p>
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * <p>The type of the last deployment of the environment.</p>
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * <p>The status of the last deployment of the environment.</p>
   * @public
   */
  deploymentStatus?: DeploymentStatus | undefined;

  /**
   * <p>The failure reason of the last deployment of the environment.</p>
   * @public
   */
  failureReason?: EnvironmentError | undefined;

  /**
   * <p>The messages of the last deployment of the environment.</p>
   * @public
   */
  messages?: string[] | undefined;

  /**
   * <p>Specifies whether the last deployment of the environment is complete.</p>
   * @public
   */
  isDeploymentComplete?: boolean | undefined;
}

/**
 * <p>The details of a provisioned resource of this Amazon DataZone environment.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The provider of a provisioned resource of this Amazon DataZone environment.</p>
   * @public
   */
  provider?: string | undefined;

  /**
   * <p>The name of a provisioned resource of this Amazon DataZone environment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The value of a provisioned resource of this Amazon DataZone environment.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The type of a provisioned resource of this Amazon DataZone environment.</p>
   * @public
   */
  type: string | undefined;
}

/**
 * <p>The provisioning properties of an environment blueprint.</p>
 * @public
 */
export type ProvisioningProperties =
  | ProvisioningProperties.CloudFormationMember
  | ProvisioningProperties.$UnknownMember;

/**
 * @public
 */
export namespace ProvisioningProperties {
  /**
   * <p>The cloud formation properties included as part of the provisioning properties of an
   *          environment blueprint.</p>
   * @public
   */
  export interface CloudFormationMember {
    cloudFormation: CloudFormationProperties;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cloudFormation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    cloudFormation: (value: CloudFormationProperties) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProvisioningProperties, visitor: Visitor<T>): T => {
    if (value.cloudFormation !== undefined) return visitor.cloudFormation(value.cloudFormation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const EnvironmentStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  DISABLED: "DISABLED",
  EXPIRED: "EXPIRED",
  INACCESSIBLE: "INACCESSIBLE",
  SUSPENDED: "SUSPENDED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;

/**
 * @public
 */
export type EnvironmentStatus = (typeof EnvironmentStatus)[keyof typeof EnvironmentStatus];

/**
 * <p>The details of user parameters of an environment blueprint.</p>
 * @public
 */
export interface CustomParameter {
  /**
   * <p>The key name of the parameter.</p>
   * @public
   */
  keyName: string | undefined;

  /**
   * <p>The description of the parameter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The filed type of the parameter.</p>
   * @public
   */
  fieldType: string | undefined;

  /**
   * <p>The default value of the parameter.</p>
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * <p>Specifies whether the parameter is editable.</p>
   * @public
   */
  isEditable?: boolean | undefined;

  /**
   * <p>Specifies whether the custom parameter is optional.</p>
   * @public
   */
  isOptional?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentOutput {
  /**
   * <p>The ID of the Amazon DataZone project in which this environment is created.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The ID of this Amazon DataZone environment.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the environment is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon DataZone user who created this environment.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the environment was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when this environment was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The name of this environment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of this Amazon DataZone environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the environment profile with which this Amazon DataZone environment was
   *          created.</p>
   * @public
   */
  environmentProfileId?: string | undefined;

  /**
   * <p>The Amazon Web Services account in which the Amazon DataZone environment is created.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services region in which the Amazon DataZone environment is created.</p>
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * <p>The provider of this Amazon DataZone environment.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The provisioned resources of this Amazon DataZone environment.</p>
   * @public
   */
  provisionedResources?: Resource[] | undefined;

  /**
   * <p>The status of this Amazon DataZone environment.</p>
   * @public
   */
  status?: EnvironmentStatus | undefined;

  /**
   * <p>The configurable actions of this Amazon DataZone environment.</p>
   * @public
   */
  environmentActions?: ConfigurableEnvironmentAction[] | undefined;

  /**
   * <p>The glossary terms that can be used in this Amazon DataZone environment.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The user parameters of this Amazon DataZone environment.</p>
   * @public
   */
  userParameters?: CustomParameter[] | undefined;

  /**
   * <p>The details of the last deployment of this Amazon DataZone environment.</p>
   * @public
   */
  lastDeployment?: Deployment | undefined;

  /**
   * <p>The provisioning properties of this Amazon DataZone environment.</p>
   * @public
   */
  provisioningProperties?: ProvisioningProperties | undefined;

  /**
   * <p>The deployment properties of this Amazon DataZone environment.</p>
   * @public
   */
  deploymentProperties?: DeploymentProperties | undefined;

  /**
   * <p>The ID of the blueprint with which this Amazon DataZone environment was created.</p>
   * @public
   */
  environmentBlueprintId?: string | undefined;

  /**
   * <p>The configuration ID of the environment.</p>
   * @public
   */
  environmentConfigurationId?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentActionInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the environment action is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment in which the environment action is created.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The name of the environment action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The parameters of the environment action.</p>
   * @public
   */
  parameters: ActionParameters | undefined;

  /**
   * <p>The description of the environment action that is being created in the
   *          environment.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentActionOutput {
  /**
   * <p>The ID of the domain in which the environment action is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the environment in which the environment is created.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The ID of the environment action.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the environment action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The parameters of the environment action.</p>
   * @public
   */
  parameters: ActionParameters | undefined;

  /**
   * <p>The description of the environment action.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentProfileInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this environment profile is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of this Amazon DataZone environment profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of this Amazon DataZone environment profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the blueprint with which this environment profile is created.</p>
   * @public
   */
  environmentBlueprintIdentifier: string | undefined;

  /**
   * <p>The identifier of the project in which to create the environment profile.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The user parameters of this Amazon DataZone environment profile.</p>
   * @public
   */
  userParameters?: EnvironmentParameter[] | undefined;

  /**
   * <p>The Amazon Web Services account in which the Amazon DataZone environment is created.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services region in which this environment profile is created.</p>
   * @public
   */
  awsAccountRegion?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentProfileOutput {
  /**
   * <p>The ID of this Amazon DataZone environment profile.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which this environment profile is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID in which this Amazon DataZone environment profile is
   *          created.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services region in which this Amazon DataZone environment profile is
   *          created.</p>
   * @public
   */
  awsAccountRegion?: string | undefined;

  /**
   * <p>The Amazon DataZone user who created this environment profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when this environment profile was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when this environment profile was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The name of this Amazon DataZone environment profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of this Amazon DataZone environment profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the blueprint with which this environment profile is created.</p>
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone project in which this environment profile is created.</p>
   * @public
   */
  projectId?: string | undefined;

  /**
   * <p>The user parameters of this Amazon DataZone environment profile.</p>
   * @public
   */
  userParameters?: CustomParameter[] | undefined;
}

/**
 * <p>The model of the API.</p>
 * @public
 */
export type Model = Model.SmithyMember | Model.$UnknownMember;

/**
 * @public
 */
export namespace Model {
  /**
   * <p>Indicates the smithy model of the API.</p>
   * @public
   */
  export interface SmithyMember {
    smithy: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    smithy?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    smithy: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Model, visitor: Visitor<T>): T => {
    if (value.smithy !== undefined) return visitor.smithy(value.smithy);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const FormTypeStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type FormTypeStatus = (typeof FormTypeStatus)[keyof typeof FormTypeStatus];

/**
 * @public
 */
export interface CreateFormTypeInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this metadata form type is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of this Amazon DataZone metadata form type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The model of this Amazon DataZone metadata form type.</p>
   * @public
   */
  model: Model | undefined;

  /**
   * <p>The ID of the Amazon DataZone project that owns this metadata form type.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * <p>The status of this Amazon DataZone metadata form type.</p>
   * @public
   */
  status?: FormTypeStatus | undefined;

  /**
   * <p>The description of this Amazon DataZone metadata form type.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateFormTypeOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this metadata form type is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of this Amazon DataZone metadata form type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of this Amazon DataZone metadata form type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of this Amazon DataZone metadata form type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the project that owns this Amazon DataZone metadata form type.</p>
   * @public
   */
  owningProjectId?: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which this metadata form type was originally
   *          created.</p>
   * @public
   */
  originDomainId?: string | undefined;

  /**
   * <p>The ID of the project in which this Amazon DataZone metadata form type was originally
   *          created.</p>
   * @public
   */
  originProjectId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GlossaryStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type GlossaryStatus = (typeof GlossaryStatus)[keyof typeof GlossaryStatus];

/**
 * @public
 */
export interface CreateGlossaryInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of this business glossary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the project that currently owns business glossary.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * <p>The description of this business glossary.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of this business glossary.</p>
   * @public
   */
  status?: GlossaryStatus | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGlossaryOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of this business glossary.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of this business glossary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the project that currently owns this business glossary.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The description of this business glossary.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of this business glossary.</p>
   * @public
   */
  status?: GlossaryStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const GlossaryTermStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type GlossaryTermStatus = (typeof GlossaryTermStatus)[keyof typeof GlossaryTermStatus];

/**
 * <p>The details of the term relations.</p>
 * @public
 */
export interface TermRelations {
  /**
   * <p>The <code>isA</code> property of the term relations.</p>
   * @public
   */
  isA?: string[] | undefined;

  /**
   * <p>The classifies of the term relations.</p>
   * @public
   */
  classifies?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateGlossaryTermInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary term is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the business glossary in which this term is created.</p>
   * @public
   */
  glossaryIdentifier: string | undefined;

  /**
   * <p>The name of this business glossary term.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of this business glossary term.</p>
   * @public
   */
  status?: GlossaryTermStatus | undefined;

  /**
   * <p>The short description of this business glossary term.</p>
   * @public
   */
  shortDescription?: string | undefined;

  /**
   * <p>The long description of this business glossary term.</p>
   * @public
   */
  longDescription?: string | undefined;

  /**
   * <p>The term relations of this business glossary term.</p>
   * @public
   */
  termRelations?: TermRelations | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGlossaryTermOutput {
  /**
   * <p>The ID of this business glossary term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary term is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the business glossary in which this term is created.</p>
   * @public
   */
  glossaryId: string | undefined;

  /**
   * <p>The name of this business glossary term.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of this business glossary term.</p>
   * @public
   */
  status: GlossaryTermStatus | undefined;

  /**
   * <p>The short description of this business glossary term.</p>
   * @public
   */
  shortDescription?: string | undefined;

  /**
   * <p>The long description of this business glossary term.</p>
   * @public
   */
  longDescription?: string | undefined;

  /**
   * <p>The term relations of this business glossary term.</p>
   * @public
   */
  termRelations?: TermRelations | undefined;
}

/**
 * @public
 */
export interface CreateGroupProfileInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the group profile is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the group for which the group profile is created.</p>
   * @public
   */
  groupIdentifier: string | undefined;

  /**
   * <p> A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GroupProfileStatus = {
  ASSIGNED: "ASSIGNED",
  NOT_ASSIGNED: "NOT_ASSIGNED",
} as const;

/**
 * @public
 */
export type GroupProfileStatus = (typeof GroupProfileStatus)[keyof typeof GroupProfileStatus];

/**
 * @public
 */
export interface CreateGroupProfileOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the group profile is created.</p>
   * @public
   */
  domainId?: string | undefined;

  /**
   * <p>The identifier of the group profile.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The status of the group profile.</p>
   * @public
   */
  status?: GroupProfileStatus | undefined;

  /**
   * <p>The name of the group for which group profile is created.</p>
   * @public
   */
  groupName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EntityType = {
  ASSET: "ASSET",
  DATA_PRODUCT: "DATA_PRODUCT",
} as const;

/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 */
export interface CreateListingChangeSetInput {
  /**
   * <p>The ID of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the asset.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The type of an entity.</p>
   * @public
   */
  entityType: EntityType | undefined;

  /**
   * <p>The revision of an asset.</p>
   * @public
   */
  entityRevision?: string | undefined;

  /**
   * <p>Specifies whether to publish or unpublish a listing.</p>
   * @public
   */
  action: ChangeAction | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateListingChangeSetOutput {
  /**
   * <p>The ID of the listing (a record of an asset at a given time).</p>
   * @public
   */
  listingId: string | undefined;

  /**
   * <p>The revision of a listing.</p>
   * @public
   */
  listingRevision: string | undefined;

  /**
   * <p>Specifies the status of the listing.</p>
   * @public
   */
  status: ListingStatus | undefined;
}

/**
 * <p>The environment configuration user parameters.</p>
 * @public
 */
export interface EnvironmentConfigurationUserParameter {
  /**
   * <p>The ID of the environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The environment configuration name.</p>
   * @public
   */
  environmentConfigurationName?: string | undefined;

  /**
   * <p>The environment parameters.</p>
   * @public
   */
  environmentParameters?: EnvironmentParameter[] | undefined;
}

/**
 * @public
 */
export interface CreateProjectInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this project is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of the Amazon DataZone project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the Amazon DataZone project.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The glossary terms that can be used in this Amazon DataZone project.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The ID of the domain unit. This parameter is not required and if it is not specified,
   *          then the project is created at the root domain unit level.</p>
   * @public
   */
  domainUnitId?: string | undefined;

  /**
   * <p>The ID of the project profile.</p>
   * @public
   */
  projectProfileId?: string | undefined;

  /**
   * <p>The user parameters of the project.</p>
   * @public
   */
  userParameters?: EnvironmentConfigurationUserParameter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const OverallDeploymentStatus = {
  FAILED_DEPLOYMENT: "FAILED_DEPLOYMENT",
  FAILED_VALIDATION: "FAILED_VALIDATION",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING_DEPLOYMENT: "PENDING_DEPLOYMENT",
  SUCCESSFUL: "SUCCESSFUL",
} as const;

/**
 * @public
 */
export type OverallDeploymentStatus = (typeof OverallDeploymentStatus)[keyof typeof OverallDeploymentStatus];

/**
 * <p>The environment deployment details.</p>
 * @public
 */
export interface EnvironmentDeploymentDetails {
  /**
   * <p>The overall deployment status of the environment.</p>
   * @public
   */
  overallDeploymentStatus?: OverallDeploymentStatus | undefined;

  /**
   * <p>Environment failure reasons.</p>
   * @public
   */
  environmentFailureReasons?: Record<string, EnvironmentError[]> | undefined;
}

/**
 * <p>Specifies the error message that is returned if the operation cannot be successfully
 *          completed.</p>
 * @public
 */
export interface ProjectDeletionError {
  /**
   * <p>The code of the project deletion error.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The message of the project deletion error.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProjectStatus = {
  ACTIVE: "ACTIVE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

/**
 * @public
 */
export interface CreateProjectOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the project was created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone project.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the project.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the Amazon DataZone project that was created.</p>
   * @public
   */
  projectStatus?: ProjectStatus | undefined;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  failureReasons?: ProjectDeletionError[] | undefined;

  /**
   * <p>The Amazon DataZone user who created the project.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the project was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the project was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The glossary terms that can be used in the project.</p>
   * @public
   */
  glossaryTerms?: string[] | undefined;

  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  domainUnitId?: string | undefined;

  /**
   * <p>The project profile ID.</p>
   * @public
   */
  projectProfileId?: string | undefined;

  /**
   * <p>The user parameters of the project.</p>
   * @public
   */
  userParameters?: EnvironmentConfigurationUserParameter[] | undefined;

  /**
   * <p>The environment deployment details.</p>
   * @public
   */
  environmentDeploymentDetails?: EnvironmentDeploymentDetails | undefined;
}

/**
 * @public
 * @enum
 */
export const UserDesignation = {
  PROJECT_CATALOG_CONSUMER: "PROJECT_CATALOG_CONSUMER",
  PROJECT_CATALOG_STEWARD: "PROJECT_CATALOG_STEWARD",
  PROJECT_CATALOG_VIEWER: "PROJECT_CATALOG_VIEWER",
  PROJECT_CONTRIBUTOR: "PROJECT_CONTRIBUTOR",
  PROJECT_OWNER: "PROJECT_OWNER",
} as const;

/**
 * @public
 */
export type UserDesignation = (typeof UserDesignation)[keyof typeof UserDesignation];

/**
 * <p>The details about a project member.</p>
 * @public
 */
export type Member = Member.GroupIdentifierMember | Member.UserIdentifierMember | Member.$UnknownMember;

/**
 * @public
 */
export namespace Member {
  /**
   * <p>The user ID of a project member.</p>
   * @public
   */
  export interface UserIdentifierMember {
    userIdentifier: string;
    groupIdentifier?: never;
    $unknown?: never;
  }

  /**
   * <p>The ID of the group of a project member.</p>
   * @public
   */
  export interface GroupIdentifierMember {
    userIdentifier?: never;
    groupIdentifier: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    userIdentifier?: never;
    groupIdentifier?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    userIdentifier: (value: string) => T;
    groupIdentifier: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Member, visitor: Visitor<T>): T => {
    if (value.userIdentifier !== undefined) return visitor.userIdentifier(value.userIdentifier);
    if (value.groupIdentifier !== undefined) return visitor.groupIdentifier(value.groupIdentifier);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateProjectMembershipInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which project membership is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the project for which this project membership was created.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The project member whose project membership was created.</p>
   * @public
   */
  member: Member | undefined;

  /**
   * <p>The designation of the project membership.</p>
   * @public
   */
  designation: UserDesignation | undefined;
}

/**
 * @public
 */
export interface CreateProjectMembershipOutput {}

/**
 * <p>The Amazon Web Services Region.</p>
 * @public
 */
export type Region = Region.RegionNameMember | Region.RegionNamePathMember | Region.$UnknownMember;

/**
 * @public
 */
export namespace Region {
  /**
   * <p>The Amazon Web Services Region name.</p>
   * @public
   */
  export interface RegionNameMember {
    regionName: string;
    regionNamePath?: never;
    $unknown?: never;
  }

  /**
   * <p>The region name path.</p>
   * @public
   */
  export interface RegionNamePathMember {
    regionName?: never;
    regionNamePath: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    regionName?: never;
    regionNamePath?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    regionName: (value: string) => T;
    regionNamePath: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Region, visitor: Visitor<T>): T => {
    if (value.regionName !== undefined) return visitor.regionName(value.regionName);
    if (value.regionNamePath !== undefined) return visitor.regionNamePath(value.regionNamePath);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The environment configuration parameter.</p>
 * @public
 */
export interface EnvironmentConfigurationParameter {
  /**
   * <p>The name of the environment configuration parameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The value of the environment configuration parameter.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>Specifies whether the environment parameter is editable.</p>
   * @public
   */
  isEditable?: boolean | undefined;
}

/**
 * <p>The details of the environment configuration parameter.</p>
 * @public
 */
export interface EnvironmentConfigurationParametersDetails {
  /**
   * <p>Ssm path environment configuration parameters.</p>
   * @public
   */
  ssmPath?: string | undefined;

  /**
   * <p>The parameter overrides.</p>
   * @public
   */
  parameterOverrides?: EnvironmentConfigurationParameter[] | undefined;

  /**
   * <p>The resolved environment configuration parameters.</p>
   * @public
   */
  resolvedParameters?: EnvironmentConfigurationParameter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentMode = {
  ON_CREATE: "ON_CREATE",
  ON_DEMAND: "ON_DEMAND",
} as const;

/**
 * @public
 */
export type DeploymentMode = (typeof DeploymentMode)[keyof typeof DeploymentMode];

/**
 * <p>The configuration of an environment.</p>
 * @public
 */
export interface EnvironmentConfiguration {
  /**
   * <p>The environment name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The environment ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The environment blueprint ID.</p>
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * <p>The environment description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The deployment mode of the environment.</p>
   * @public
   */
  deploymentMode?: DeploymentMode | undefined;

  /**
   * <p>The configuration parameters of the environment.</p>
   * @public
   */
  configurationParameters?: EnvironmentConfigurationParametersDetails | undefined;

  /**
   * <p>The Amazon Web Services account of the environment.</p>
   * @public
   */
  awsAccount: AwsAccount | undefined;

  /**
   * <p>The Amazon Web Services Region of the environment.</p>
   * @public
   */
  awsRegion: Region | undefined;

  /**
   * <p>The deployment order of the environment.</p>
   * @public
   */
  deploymentOrder?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 */
export interface CreateProjectProfileInput {
  /**
   * <p>A domain ID of the project profile.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>Project profile name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of a project profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Project profile status.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>Environment configurations of the project profile.</p>
   * @public
   */
  environmentConfigurations?: EnvironmentConfiguration[] | undefined;

  /**
   * <p>A domain unit ID of the project profile.</p>
   * @public
   */
  domainUnitIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateProjectProfileOutput {
  /**
   * <p>The ID of the domain where a project profile is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>Project profile ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Project profile name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A project profile description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Project profile status.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>Environment configurations of a project profile.</p>
   * @public
   */
  environmentConfigurations?: EnvironmentConfiguration[] | undefined;

  /**
   * <p>A user who created a project profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>A timestamp at which a project profile is created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>A timestamp when a project profile was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The ID of the domain unit where a project profile is created.</p>
   * @public
   */
  domainUnitId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleAction = {
  CREATE_LISTING_CHANGE_SET: "CREATE_LISTING_CHANGE_SET",
  CREATE_SUBSCRIPTION_REQUEST: "CREATE_SUBSCRIPTION_REQUEST",
} as const;

/**
 * @public
 */
export type RuleAction = (typeof RuleAction)[keyof typeof RuleAction];

/**
 * <p>The reference of a metadata form.</p>
 * @public
 */
export interface MetadataFormReference {
  /**
   * <p>The type ID of the metadata form reference.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The type revision of the metadata form reference.</p>
   * @public
   */
  typeRevision: string | undefined;
}

/**
 * <p>The enforcement details of a metadata form.</p>
 * @public
 */
export interface MetadataFormEnforcementDetail {
  /**
   * <p>The required metadata forms.</p>
   * @public
   */
  requiredMetadataForms?: MetadataFormReference[] | undefined;
}

/**
 * <p>The details of a rule.</p>
 * @public
 */
export type RuleDetail = RuleDetail.MetadataFormEnforcementDetailMember | RuleDetail.$UnknownMember;

/**
 * @public
 */
export namespace RuleDetail {
  /**
   * <p>The enforcement detail of the metadata form.</p>
   * @public
   */
  export interface MetadataFormEnforcementDetailMember {
    metadataFormEnforcementDetail: MetadataFormEnforcementDetail;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    metadataFormEnforcementDetail?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    metadataFormEnforcementDetail: (value: MetadataFormEnforcementDetail) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RuleDetail, visitor: Visitor<T>): T => {
    if (value.metadataFormEnforcementDetail !== undefined)
      return visitor.metadataFormEnforcementDetail(value.metadataFormEnforcementDetail);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Specifies projects in which the rule is created.</p>
 * @public
 */
export interface ProjectsForRule {
  /**
   * <p>The selection mode of the rule.</p>
   * @public
   */
  selectionMode: RuleScopeSelectionMode | undefined;

  /**
   * <p>The specific projects in which the rule is created.</p>
   * @public
   */
  specificProjects?: string[] | undefined;
}

/**
 * <p>The scope of a rule.</p>
 * @public
 */
export interface RuleScope {
  /**
   * <p>The asset type included in the rule scope.</p>
   * @public
   */
  assetType?: AssetTypesForRule | undefined;

  /**
   * <p>The data product included in the rule scope.</p>
   * @public
   */
  dataProduct?: boolean | undefined;

  /**
   * <p>The project included in the rule scope.</p>
   * @public
   */
  project?: ProjectsForRule | undefined;
}

/**
 * <p>The target for the domain unit.</p>
 * @public
 */
export interface DomainUnitTarget {
  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  domainUnitId: string | undefined;

  /**
   * <p>Specifies whether to apply a rule to the child domain units.</p>
   * @public
   */
  includeChildDomainUnits?: boolean | undefined;
}

/**
 * <p>The target of the rule.</p>
 * @public
 */
export type RuleTarget = RuleTarget.DomainUnitTargetMember | RuleTarget.$UnknownMember;

/**
 * @public
 */
export namespace RuleTarget {
  /**
   * <p>The ID of the domain unit.</p>
   * @public
   */
  export interface DomainUnitTargetMember {
    domainUnitTarget: DomainUnitTarget;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    domainUnitTarget?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    domainUnitTarget: (value: DomainUnitTarget) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RuleTarget, visitor: Visitor<T>): T => {
    if (value.domainUnitTarget !== undefined) return visitor.domainUnitTarget(value.domainUnitTarget);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateRuleInput {
  /**
   * <p>The ID of the domain where the rule is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The target of the rule.</p>
   * @public
   */
  target: RuleTarget | undefined;

  /**
   * <p>The action of the rule.</p>
   * @public
   */
  action: RuleAction | undefined;

  /**
   * <p>The scope of the rule.</p>
   * @public
   */
  scope: RuleScope | undefined;

  /**
   * <p>The detail of the rule.</p>
   * @public
   */
  detail: RuleDetail | undefined;

  /**
   * <p>The description of the rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleType = {
  METADATA_FORM_ENFORCEMENT: "METADATA_FORM_ENFORCEMENT",
} as const;

/**
 * @public
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

/**
 * @public
 * @enum
 */
export const RuleTargetType = {
  DOMAIN_UNIT: "DOMAIN_UNIT",
} as const;

/**
 * @public
 */
export type RuleTargetType = (typeof RuleTargetType)[keyof typeof RuleTargetType];

/**
 * @public
 */
export interface CreateRuleOutput {
  /**
   * <p>The ID of the rule.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the rule.</p>
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * <p>The target of the rule.</p>
   * @public
   */
  target: RuleTarget | undefined;

  /**
   * <p>The action of the rule.</p>
   * @public
   */
  action: RuleAction | undefined;

  /**
   * <p>The scope of the rule.</p>
   * @public
   */
  scope: RuleScope | undefined;

  /**
   * <p>The detail of the rule.</p>
   * @public
   */
  detail: RuleDetail | undefined;

  /**
   * <p>The target type of the rule.</p>
   * @public
   */
  targetType?: RuleTargetType | undefined;

  /**
   * <p>The description of the rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp at which the rule is created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user who creates the rule.</p>
   * @public
   */
  createdBy: string | undefined;
}

/**
 * <p>A revision to be made to an asset published in a Amazon DataZone catalog.</p>
 * @public
 */
export interface ListingRevisionInput {
  /**
   * <p>An identifier of revision to be made to an asset published in a Amazon DataZone
   *          catalog.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The details of a revision to be made to an asset published in a Amazon DataZone
   *          catalog.</p>
   * @public
   */
  revision: string | undefined;
}

/**
 * <p>The details of a listing for which a subscription is to be granted.</p>
 * @public
 */
export type GrantedEntityInput = GrantedEntityInput.ListingMember | GrantedEntityInput.$UnknownMember;

/**
 * @public
 */
export namespace GrantedEntityInput {
  /**
   * <p>The listing for which a subscription is to be granted.</p>
   * @public
   */
  export interface ListingMember {
    listing: ListingRevisionInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    listing?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    listing: (value: ListingRevisionInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: GrantedEntityInput, visitor: Visitor<T>): T => {
    if (value.listing !== undefined) return visitor.listing(value.listing);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateSubscriptionGrantInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription grant is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment in which the subscription grant is created.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ID of the subscription target for which the subscription grant is created.</p>
   * @public
   */
  subscriptionTargetIdentifier?: string | undefined;

  /**
   * <p>The entity to which the subscription is to be granted.</p>
   * @public
   */
  grantedEntity: GrantedEntityInput | undefined;

  /**
   * <p>The names of the assets for which the subscription grant is created.</p>
   * @public
   */
  assetTargetNames?: AssetTargetNameMap[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Specifies the error message that is returned if the operation cannot be successfully
 *          completed.</p>
 * @public
 */
export interface FailureCause {
  /**
   * <p>The description of the error message.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SubscriptionGrantStatus = {
  GRANTED: "GRANTED",
  GRANT_FAILED: "GRANT_FAILED",
  GRANT_IN_PROGRESS: "GRANT_IN_PROGRESS",
  GRANT_PENDING: "GRANT_PENDING",
  REVOKED: "REVOKED",
  REVOKE_FAILED: "REVOKE_FAILED",
  REVOKE_IN_PROGRESS: "REVOKE_IN_PROGRESS",
  REVOKE_PENDING: "REVOKE_PENDING",
} as const;

/**
 * @public
 */
export type SubscriptionGrantStatus = (typeof SubscriptionGrantStatus)[keyof typeof SubscriptionGrantStatus];

/**
 * <p>The details of the asset for which the subscription grant is created.</p>
 * @public
 */
export interface SubscribedAsset {
  /**
   * <p>The identifier of the asset for which the subscription grant is created.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The revision of the asset for which the subscription grant is created.</p>
   * @public
   */
  assetRevision: string | undefined;

  /**
   * <p>The status of the asset for which the subscription grant is created.</p>
   * @public
   */
  status: SubscriptionGrantStatus | undefined;

  /**
   * <p>The target name of the asset for which the subscription grant is created.</p>
   * @public
   */
  targetName?: string | undefined;

  /**
   * <p>The failure cause included in the details of the asset for which the subscription grant
   *          is created.</p>
   * @public
   */
  failureCause?: FailureCause | undefined;

  /**
   * <p>The timestamp of when the subscription grant to the asset is created.</p>
   * @public
   */
  grantedTimestamp?: Date | undefined;

  /**
   * <p>The failure timestamp included in the details of the asset for which the subscription
   *          grant is created.</p>
   * @public
   */
  failureTimestamp?: Date | undefined;

  /**
   * <p>The asset scope of the subscribed asset.</p>
   * @public
   */
  assetScope?: AssetScope | undefined;
}

/**
 * <p>A revision of an asset published in a Amazon DataZone catalog.</p>
 * @public
 */
export interface ListingRevision {
  /**
   * <p>An identifier of a revision of an asset published in a Amazon DataZone catalog.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The details of a revision of an asset published in a Amazon DataZone catalog.</p>
   * @public
   */
  revision: string | undefined;
}

/**
 * <p>The details of a listing for which a subscription is granted.</p>
 * @public
 */
export type GrantedEntity = GrantedEntity.ListingMember | GrantedEntity.$UnknownMember;

/**
 * @public
 */
export namespace GrantedEntity {
  /**
   * <p>The listing for which a subscription is granted.</p>
   * @public
   */
  export interface ListingMember {
    listing: ListingRevision;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    listing?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    listing: (value: ListingRevision) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: GrantedEntity, visitor: Visitor<T>): T => {
    if (value.listing !== undefined) return visitor.listing(value.listing);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @internal
 */
export const AcceptChoiceFilterSensitiveLog = (obj: AcceptChoice): any => ({
  ...obj,
  ...(obj.editedValue && { editedValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AcceptPredictionsInputFilterSensitiveLog = (obj: AcceptPredictionsInput): any => ({
  ...obj,
  ...(obj.acceptChoices && { acceptChoices: obj.acceptChoices.map((item) => AcceptChoiceFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const AcceptSubscriptionRequestInputFilterSensitiveLog = (obj: AcceptSubscriptionRequestInput): any => ({
  ...obj,
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FormOutputFilterSensitiveLog = (obj: FormOutput): any => ({
  ...obj,
  ...(obj.typeName && { typeName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DetailedGlossaryTermFilterSensitiveLog = (obj: DetailedGlossaryTerm): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SubscribedAssetListingFilterSensitiveLog = (obj: SubscribedAssetListing): any => ({
  ...obj,
  ...(obj.glossaryTerms && {
    glossaryTerms: obj.glossaryTerms.map((item) => DetailedGlossaryTermFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const SubscribedProductListingFilterSensitiveLog = (obj: SubscribedProductListing): any => ({
  ...obj,
  ...(obj.glossaryTerms && {
    glossaryTerms: obj.glossaryTerms.map((item) => DetailedGlossaryTermFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const SubscribedListingItemFilterSensitiveLog = (obj: SubscribedListingItem): any => {
  if (obj.assetListing !== undefined)
    return { assetListing: SubscribedAssetListingFilterSensitiveLog(obj.assetListing) };
  if (obj.productListing !== undefined)
    return { productListing: SubscribedProductListingFilterSensitiveLog(obj.productListing) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SubscribedListingFilterSensitiveLog = (obj: SubscribedListing): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.item && { item: SubscribedListingItemFilterSensitiveLog(obj.item) }),
});

/**
 * @internal
 */
export const SubscribedProjectFilterSensitiveLog = (obj: SubscribedProject): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SubscribedPrincipalFilterSensitiveLog = (obj: SubscribedPrincipal): any => {
  if (obj.project !== undefined) return { project: SubscribedProjectFilterSensitiveLog(obj.project) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AcceptSubscriptionRequestOutputFilterSensitiveLog = (obj: AcceptSubscriptionRequestOutput): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
  ...(obj.subscribedPrincipals && {
    subscribedPrincipals: obj.subscribedPrincipals.map((item) => SubscribedPrincipalFilterSensitiveLog(item)),
  }),
  ...(obj.subscribedListings && {
    subscribedListings: obj.subscribedListings.map((item) => SubscribedListingFilterSensitiveLog(item)),
  }),
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
  ...(obj.metadataForms && { metadataForms: obj.metadataForms.map((item) => FormOutputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const FormInputFilterSensitiveLog = (obj: FormInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssetInputFilterSensitiveLog = (obj: CreateAssetInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsInput && { formsInput: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAssetOutputFilterSensitiveLog = (obj: CreateAssetOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsOutput && { formsOutput: obj.formsOutput.map((item) => FormOutputFilterSensitiveLog(item)) }),
  ...(obj.readOnlyFormsOutput && {
    readOnlyFormsOutput: obj.readOnlyFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateAssetRevisionInputFilterSensitiveLog = (obj: CreateAssetRevisionInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsInput && { formsInput: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAssetRevisionOutputFilterSensitiveLog = (obj: CreateAssetRevisionOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsOutput && { formsOutput: obj.formsOutput.map((item) => FormOutputFilterSensitiveLog(item)) }),
  ...(obj.readOnlyFormsOutput && {
    readOnlyFormsOutput: obj.readOnlyFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GetAssetOutputFilterSensitiveLog = (obj: GetAssetOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsOutput && { formsOutput: obj.formsOutput.map((item) => FormOutputFilterSensitiveLog(item)) }),
  ...(obj.readOnlyFormsOutput && {
    readOnlyFormsOutput: obj.readOnlyFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AssetFilterSummaryFilterSensitiveLog = (obj: AssetFilterSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssetItemAdditionalAttributesFilterSensitiveLog = (obj: AssetItemAdditionalAttributes): any => ({
  ...obj,
  ...(obj.formsOutput && { formsOutput: obj.formsOutput.map((item) => FormOutputFilterSensitiveLog(item)) }),
  ...(obj.readOnlyFormsOutput && {
    readOnlyFormsOutput: obj.readOnlyFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AssetItemFilterSensitiveLog = (obj: AssetItem): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.additionalAttributes && {
    additionalAttributes: AssetItemAdditionalAttributesFilterSensitiveLog(obj.additionalAttributes),
  }),
});

/**
 * @internal
 */
export const AssetListingFilterSensitiveLog = (obj: AssetListing): any => ({
  ...obj,
  ...(obj.glossaryTerms && {
    glossaryTerms: obj.glossaryTerms.map((item) => DetailedGlossaryTermFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AssetListingItemFilterSensitiveLog = (obj: AssetListingItem): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.glossaryTerms && {
    glossaryTerms: obj.glossaryTerms.map((item) => DetailedGlossaryTermFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateAssetTypeInputFilterSensitiveLog = (obj: CreateAssetTypeInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FormEntryOutputFilterSensitiveLog = (obj: FormEntryOutput): any => ({
  ...obj,
  ...(obj.typeName && { typeName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAssetTypeOutputFilterSensitiveLog = (obj: CreateAssetTypeOutput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsOutput && {
    formsOutput: Object.entries(obj.formsOutput).reduce(
      (acc: any, [key, value]: [string, FormEntryOutput]) => (
        (acc[key] = FormEntryOutputFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const GetAssetTypeOutputFilterSensitiveLog = (obj: GetAssetTypeOutput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsOutput && {
    formsOutput: Object.entries(obj.formsOutput).reduce(
      (acc: any, [key, value]: [string, FormEntryOutput]) => (
        (acc[key] = FormEntryOutputFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const AssetTypeItemFilterSensitiveLog = (obj: AssetTypeItem): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsOutput && {
    formsOutput: Object.entries(obj.formsOutput).reduce(
      (acc: any, [key, value]: [string, FormEntryOutput]) => (
        (acc[key] = FormEntryOutputFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const GlueOAuth2CredentialsFilterSensitiveLog = (obj: GlueOAuth2Credentials): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OAuth2PropertiesFilterSensitiveLog = (obj: OAuth2Properties): any => ({
  ...obj,
  ...(obj.oAuth2Credentials && { oAuth2Credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AuthenticationConfigurationFilterSensitiveLog = (obj: AuthenticationConfiguration): any => ({
  ...obj,
  ...(obj.oAuth2Properties && { oAuth2Properties: OAuth2PropertiesFilterSensitiveLog(obj.oAuth2Properties) }),
});

/**
 * @internal
 */
export const BasicAuthenticationCredentialsFilterSensitiveLog = (obj: BasicAuthenticationCredentials): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthenticationConfigurationInputFilterSensitiveLog = (obj: AuthenticationConfigurationInput): any => ({
  ...obj,
  ...(obj.oAuth2Properties && { oAuth2Properties: OAuth2PropertiesFilterSensitiveLog(obj.oAuth2Properties) }),
  ...(obj.basicAuthenticationCredentials && { basicAuthenticationCredentials: SENSITIVE_STRING }),
  ...(obj.customAuthenticationCredentials && { customAuthenticationCredentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AuthenticationConfigurationPatchFilterSensitiveLog = (obj: AuthenticationConfigurationPatch): any => ({
  ...obj,
  ...(obj.basicAuthenticationCredentials && { basicAuthenticationCredentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CancelSubscriptionOutputFilterSensitiveLog = (obj: CancelSubscriptionOutput): any => ({
  ...obj,
  ...(obj.subscribedPrincipal && {
    subscribedPrincipal: SubscribedPrincipalFilterSensitiveLog(obj.subscribedPrincipal),
  }),
  ...(obj.subscribedListing && { subscribedListing: SubscribedListingFilterSensitiveLog(obj.subscribedListing) }),
});

/**
 * @internal
 */
export const ConnectionCredentialsFilterSensitiveLog = (obj: ConnectionCredentials): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GlueConnectionInputFilterSensitiveLog = (obj: GlueConnectionInput): any => ({
  ...obj,
  ...(obj.authenticationConfiguration && {
    authenticationConfiguration: AuthenticationConfigurationInputFilterSensitiveLog(obj.authenticationConfiguration),
  }),
});

/**
 * @internal
 */
export const GluePropertiesInputFilterSensitiveLog = (obj: GluePropertiesInput): any => ({
  ...obj,
  ...(obj.glueConnectionInput && {
    glueConnectionInput: GlueConnectionInputFilterSensitiveLog(obj.glueConnectionInput),
  }),
});

/**
 * @internal
 */
export const UsernamePasswordFilterSensitiveLog = (obj: UsernamePassword): any => ({
  ...obj,
  ...(obj.password && { password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RedshiftCredentialsFilterSensitiveLog = (obj: RedshiftCredentials): any => {
  if (obj.secretArn !== undefined) return { secretArn: obj.secretArn };
  if (obj.usernamePassword !== undefined) return { usernamePassword: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const RedshiftPropertiesInputFilterSensitiveLog = (obj: RedshiftPropertiesInput): any => ({
  ...obj,
  ...(obj.storage && { storage: obj.storage }),
  ...(obj.credentials && { credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConnectionPropertiesInputFilterSensitiveLog = (obj: ConnectionPropertiesInput): any => {
  if (obj.athenaProperties !== undefined) return { athenaProperties: obj.athenaProperties };
  if (obj.glueProperties !== undefined)
    return { glueProperties: GluePropertiesInputFilterSensitiveLog(obj.glueProperties) };
  if (obj.hyperPodProperties !== undefined) return { hyperPodProperties: obj.hyperPodProperties };
  if (obj.iamProperties !== undefined) return { iamProperties: obj.iamProperties };
  if (obj.redshiftProperties !== undefined)
    return { redshiftProperties: RedshiftPropertiesInputFilterSensitiveLog(obj.redshiftProperties) };
  if (obj.sparkEmrProperties !== undefined) return { sparkEmrProperties: obj.sparkEmrProperties };
  if (obj.sparkGlueProperties !== undefined) return { sparkGlueProperties: obj.sparkGlueProperties };
  if (obj.s3Properties !== undefined) return { s3Properties: obj.s3Properties };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const RedshiftPropertiesOutputFilterSensitiveLog = (obj: RedshiftPropertiesOutput): any => ({
  ...obj,
  ...(obj.storage && { storage: obj.storage }),
  ...(obj.credentials && { credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SparkEmrPropertiesOutputFilterSensitiveLog = (obj: SparkEmrPropertiesOutput): any => ({
  ...obj,
  ...(obj.credentials && { credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConnectionPropertiesOutputFilterSensitiveLog = (obj: ConnectionPropertiesOutput): any => {
  if (obj.athenaProperties !== undefined) return { athenaProperties: obj.athenaProperties };
  if (obj.glueProperties !== undefined) return { glueProperties: obj.glueProperties };
  if (obj.hyperPodProperties !== undefined) return { hyperPodProperties: obj.hyperPodProperties };
  if (obj.iamProperties !== undefined) return { iamProperties: obj.iamProperties };
  if (obj.redshiftProperties !== undefined)
    return { redshiftProperties: RedshiftPropertiesOutputFilterSensitiveLog(obj.redshiftProperties) };
  if (obj.sparkEmrProperties !== undefined)
    return { sparkEmrProperties: SparkEmrPropertiesOutputFilterSensitiveLog(obj.sparkEmrProperties) };
  if (obj.sparkGlueProperties !== undefined) return { sparkGlueProperties: obj.sparkGlueProperties };
  if (obj.s3Properties !== undefined) return { s3Properties: obj.s3Properties };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const GlueConnectionPatchFilterSensitiveLog = (obj: GlueConnectionPatch): any => ({
  ...obj,
  ...(obj.authenticationConfiguration && {
    authenticationConfiguration: AuthenticationConfigurationPatchFilterSensitiveLog(obj.authenticationConfiguration),
  }),
});

/**
 * @internal
 */
export const GluePropertiesPatchFilterSensitiveLog = (obj: GluePropertiesPatch): any => ({
  ...obj,
  ...(obj.glueConnectionInput && {
    glueConnectionInput: GlueConnectionPatchFilterSensitiveLog(obj.glueConnectionInput),
  }),
});

/**
 * @internal
 */
export const RedshiftPropertiesPatchFilterSensitiveLog = (obj: RedshiftPropertiesPatch): any => ({
  ...obj,
  ...(obj.storage && { storage: obj.storage }),
  ...(obj.credentials && { credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConnectionPropertiesPatchFilterSensitiveLog = (obj: ConnectionPropertiesPatch): any => {
  if (obj.athenaProperties !== undefined) return { athenaProperties: obj.athenaProperties };
  if (obj.glueProperties !== undefined)
    return { glueProperties: GluePropertiesPatchFilterSensitiveLog(obj.glueProperties) };
  if (obj.iamProperties !== undefined) return { iamProperties: obj.iamProperties };
  if (obj.redshiftProperties !== undefined)
    return { redshiftProperties: RedshiftPropertiesPatchFilterSensitiveLog(obj.redshiftProperties) };
  if (obj.sparkEmrProperties !== undefined) return { sparkEmrProperties: obj.sparkEmrProperties };
  if (obj.s3Properties !== undefined) return { s3Properties: obj.s3Properties };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const GlueConnectionFilterSensitiveLog = (obj: GlueConnection): any => ({
  ...obj,
  ...(obj.authenticationConfiguration && {
    authenticationConfiguration: AuthenticationConfigurationFilterSensitiveLog(obj.authenticationConfiguration),
  }),
});

/**
 * @internal
 */
export const PhysicalEndpointFilterSensitiveLog = (obj: PhysicalEndpoint): any => ({
  ...obj,
  ...(obj.glueConnection && { glueConnection: GlueConnectionFilterSensitiveLog(obj.glueConnection) }),
});

/**
 * @internal
 */
export const ConnectionSummaryFilterSensitiveLog = (obj: ConnectionSummary): any => ({
  ...obj,
  ...(obj.physicalEndpoints && {
    physicalEndpoints: obj.physicalEndpoints.map((item) => PhysicalEndpointFilterSensitiveLog(item)),
  }),
  ...(obj.props && { props: ConnectionPropertiesOutputFilterSensitiveLog(obj.props) }),
});

/**
 * @internal
 */
export const CreateConnectionInputFilterSensitiveLog = (obj: CreateConnectionInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.props && { props: ConnectionPropertiesInputFilterSensitiveLog(obj.props) }),
});

/**
 * @internal
 */
export const CreateConnectionOutputFilterSensitiveLog = (obj: CreateConnectionOutput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.physicalEndpoints && {
    physicalEndpoints: obj.physicalEndpoints.map((item) => PhysicalEndpointFilterSensitiveLog(item)),
  }),
  ...(obj.props && { props: ConnectionPropertiesOutputFilterSensitiveLog(obj.props) }),
});

/**
 * @internal
 */
export const CreateDataProductInputFilterSensitiveLog = (obj: CreateDataProductInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsInput && { formsInput: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateDataProductOutputFilterSensitiveLog = (obj: CreateDataProductOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsOutput && { formsOutput: obj.formsOutput.map((item) => FormOutputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateDataProductRevisionInputFilterSensitiveLog = (obj: CreateDataProductRevisionInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsInput && { formsInput: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateDataProductRevisionOutputFilterSensitiveLog = (obj: CreateDataProductRevisionOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsOutput && { formsOutput: obj.formsOutput.map((item) => FormOutputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ScheduleConfigurationFilterSensitiveLog = (obj: ScheduleConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataSourceInputFilterSensitiveLog = (obj: CreateDataSourceInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
  ...(obj.schedule && { schedule: SENSITIVE_STRING }),
  ...(obj.assetFormsInput && { assetFormsInput: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateDataSourceOutputFilterSensitiveLog = (obj: CreateDataSourceOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
  ...(obj.assetFormsOutput && {
    assetFormsOutput: obj.assetFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
  ...(obj.schedule && { schedule: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateDomainUnitInputFilterSensitiveLog = (obj: CreateDomainUnitInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateDomainUnitOutputFilterSensitiveLog = (obj: CreateDomainUnitOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.owners && { owners: obj.owners.map((item) => item) }),
});

/**
 * @internal
 */
export const CustomParameterFilterSensitiveLog = (obj: CustomParameter): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEnvironmentOutputFilterSensitiveLog = (obj: CreateEnvironmentOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => CustomParameterFilterSensitiveLog(item)),
  }),
  ...(obj.provisioningProperties && { provisioningProperties: obj.provisioningProperties }),
  ...(obj.environmentConfigurationId && { environmentConfigurationId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEnvironmentProfileInputFilterSensitiveLog = (obj: CreateEnvironmentProfileInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEnvironmentProfileOutputFilterSensitiveLog = (obj: CreateEnvironmentProfileOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => CustomParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ModelFilterSensitiveLog = (obj: Model): any => {
  if (obj.smithy !== undefined) return { smithy: obj.smithy };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateFormTypeInputFilterSensitiveLog = (obj: CreateFormTypeInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.model && { model: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateFormTypeOutputFilterSensitiveLog = (obj: CreateFormTypeOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateGlossaryInputFilterSensitiveLog = (obj: CreateGlossaryInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateGlossaryOutputFilterSensitiveLog = (obj: CreateGlossaryOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateGlossaryTermInputFilterSensitiveLog = (obj: CreateGlossaryTermInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
  ...(obj.longDescription && { longDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateGlossaryTermOutputFilterSensitiveLog = (obj: CreateGlossaryTermOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
  ...(obj.longDescription && { longDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateGroupProfileOutputFilterSensitiveLog = (obj: CreateGroupProfileOutput): any => ({
  ...obj,
  ...(obj.groupName && { groupName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EnvironmentConfigurationUserParameterFilterSensitiveLog = (
  obj: EnvironmentConfigurationUserParameter
): any => ({
  ...obj,
  ...(obj.environmentConfigurationName && { environmentConfigurationName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateProjectInputFilterSensitiveLog = (obj: CreateProjectInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => EnvironmentConfigurationUserParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateProjectOutputFilterSensitiveLog = (obj: CreateProjectOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => EnvironmentConfigurationUserParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const EnvironmentConfigurationFilterSensitiveLog = (obj: EnvironmentConfiguration): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.id && { id: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.awsAccount && { awsAccount: obj.awsAccount }),
  ...(obj.awsRegion && { awsRegion: obj.awsRegion }),
});

/**
 * @internal
 */
export const CreateProjectProfileInputFilterSensitiveLog = (obj: CreateProjectProfileInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.environmentConfigurations && {
    environmentConfigurations: obj.environmentConfigurations.map((item) =>
      EnvironmentConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const CreateProjectProfileOutputFilterSensitiveLog = (obj: CreateProjectProfileOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.environmentConfigurations && {
    environmentConfigurations: obj.environmentConfigurations.map((item) =>
      EnvironmentConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const CreateRuleInputFilterSensitiveLog = (obj: CreateRuleInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.target && { target: obj.target }),
  ...(obj.detail && { detail: obj.detail }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateRuleOutputFilterSensitiveLog = (obj: CreateRuleOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.target && { target: obj.target }),
  ...(obj.detail && { detail: obj.detail }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});
