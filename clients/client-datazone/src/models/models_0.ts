// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DataZoneServiceException as __BaseException } from "./DataZoneServiceException";

/**
 * @public
 * <p>Specifies the prediction (aka, the automatically generated piece of metadata) and the
 *          target (for example, a column name) that can be accepted.</p>
 */
export interface AcceptChoice {
  /**
   * @public
   * <p>Specifies the target (for example, a column name) where a prediction can be
   *          accepted.</p>
   */
  predictionTarget?: string;

  /**
   * @public
   * <p>Specifies the prediction (aka, the automatically generated piece of metadata) that can
   *          be accepted.</p>
   */
  predictionChoice?: number;
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
 * @public
 * <p>Specifies the rule and the threshold under which a prediction can be accepted.</p>
 */
export interface AcceptRule {
  /**
   * @public
   * <p>Specifies whether you want to accept the top prediction for all targets or none.</p>
   */
  rule?: AcceptRuleBehavior;

  /**
   * @public
   * <p>The confidence score that specifies the condition at which a prediction can be
   *          accepted.</p>
   */
  threshold?: number;
}

/**
 * @public
 */
export interface AcceptPredictionsInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p/>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p/>
   */
  revision?: string;

  /**
   * @public
   * <p>Specifies the rule (or the conditions) under which a prediction can be accepted.</p>
   */
  acceptRule?: AcceptRule;

  /**
   * @public
   * <p/>
   */
  acceptChoices?: AcceptChoice[];

  /**
   * @public
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request. This field is
   *          automatically populated if not provided.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface AcceptPredictionsOutput {
  /**
   * @public
   * <p/>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p/>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p/>
   */
  revision: string | undefined;
}

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
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
 * <p>There is a conflict while performing this action.</p>
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
 * @public
 * <p>The request has failed because of an unknown error, exception or failure.</p>
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
 * @public
 * <p>The specified resource cannot be found.</p>
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
 * @public
 * <p>The request was denied due to request throttling.</p>
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
 * @public
 * <p>You do not have permission to perform this action.</p>
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
 * @public
 * <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
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
   * @public
   * <p>The Amazon DataZone domain where the specified subscription request is being accepted.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the subscription request that is to be accepted.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>A description that specifies the reason for accepting the specified subscription
   *          request.</p>
   */
  decisionComment?: string;
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
 * @public
 * <p>Details of a glossary term attached to the inventory asset.</p>
 */
export interface DetailedGlossaryTerm {
  /**
   * @public
   * <p>The name of a glossary term attached to the inventory asset.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The shoft description of a glossary term attached to the inventory asset.</p>
   */
  shortDescription?: string;
}

/**
 * @public
 * <p>The details of the published asset for which the subscription grant is created.</p>
 */
export interface SubscribedAssetListing {
  /**
   * @public
   * <p>The identifier of the published asset for which the subscription grant is
   *          created.</p>
   */
  entityId?: string;

  /**
   * @public
   * <p>The revision of the published asset for which the subscription grant is created.</p>
   */
  entityRevision?: string;

  /**
   * @public
   * <p>The type of the published asset for which the subscription grant is created.</p>
   */
  entityType?: string;

  /**
   * @public
   * <p>The forms attached to the published asset for which the subscription grant is
   *          created.</p>
   */
  forms?: string;

  /**
   * @public
   * <p>The glossary terms attached to the published asset for which the subscription grant is
   *          created.</p>
   */
  glossaryTerms?: DetailedGlossaryTerm[];
}

/**
 * @public
 * <p>The published asset for which the subscription grant is created.</p>
 */
export type SubscribedListingItem = SubscribedListingItem.AssetListingMember | SubscribedListingItem.$UnknownMember;

/**
 * @public
 */
export namespace SubscribedListingItem {
  /**
   * @public
   * <p>The asset for which the subscription grant is created.</p>
   */
  export interface AssetListingMember {
    assetListing: SubscribedAssetListing;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    assetListing?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    assetListing: (value: SubscribedAssetListing) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SubscribedListingItem, visitor: Visitor<T>): T => {
    if (value.assetListing !== undefined) return visitor.assetListing(value.assetListing);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The details of the published asset for which the subscription grant is created.</p>
 */
export interface SubscribedListing {
  /**
   * @public
   * <p>The identifier of the published asset for which the subscription grant is
   *          created.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The revision of the published asset for which the subscription grant is created.</p>
   */
  revision?: string;

  /**
   * @public
   * <p>The name of the published asset for which the subscription grant is created.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the published asset for which the subscription grant is
   *          created.</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>The published asset for which the subscription grant is created.</p>
   */
  item: SubscribedListingItem | undefined;

  /**
   * @public
   * <p>The identifier of the project of the published asset for which the subscription grant is
   *          created.</p>
   */
  ownerProjectId: string | undefined;

  /**
   * @public
   * <p>The name of the project that owns the published asset for which the subscription grant
   *          is created.</p>
   */
  ownerProjectName?: string;
}

/**
 * @public
 * <p>The project that has the subscription grant.</p>
 */
export interface SubscribedProject {
  /**
   * @public
   * <p>The identifier of the project that has the subscription grant.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the project that has the subscription grant.</p>
   */
  name?: string;
}

/**
 * @public
 * <p>The principal that has the subscription grant for the asset.</p>
 */
export type SubscribedPrincipal = SubscribedPrincipal.ProjectMember | SubscribedPrincipal.$UnknownMember;

/**
 * @public
 */
export namespace SubscribedPrincipal {
  /**
   * @public
   * <p>The project that has the subscription grant.</p>
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
   * @public
   * <p>The identifier of the subscription request.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>Specifies the Amazon DataZone user that accepted the specified subscription request.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>Specifies the Amazon DataZone user who updated the subscription request.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The unique identifier of the Amazon DataZone domain where the specified subscription request
   *          was accepted.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>Specifies the status of the subscription request.</p>
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * @public
   * <p>The timestamp that specifies when the subscription request was accepted.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>Specifies the timestamp when subscription request was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>Specifies the reason for requesting a subscription to the asset.</p>
   */
  requestReason: string | undefined;

  /**
   * @public
   * <p>Specifies the Amazon DataZone users who are subscribed to the asset specified in the
   *          subscription request.</p>
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * @public
   * <p>Specifies the asset for which the subscription request was created.</p>
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * @public
   * <p>Specifes the ID of the Amazon DataZone user who reviewed the subscription request.</p>
   */
  reviewerId?: string;

  /**
   * @public
   * <p>Specifies the reason for accepting the subscription request.</p>
   */
  decisionComment?: string;
}

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
 * @public
 * <p>The details of an asset published in an Amazon DataZone catalog. </p>
 */
export interface AssetListingDetails {
  /**
   * @public
   * <p>The identifier of an asset published in an Amazon DataZone catalog. </p>
   */
  listingId: string | undefined;

  /**
   * @public
   * <p>The status of an asset published in an Amazon DataZone catalog. </p>
   */
  listingStatus: ListingStatus | undefined;
}

/**
 * @public
 * <p>The details of a metadata form.</p>
 */
export interface FormInput {
  /**
   * @public
   * <p>The name of the metadata form.</p>
   */
  formName: string | undefined;

  /**
   * @public
   * <p>The ID of the metadata form type.</p>
   */
  typeIdentifier?: string;

  /**
   * @public
   * <p>The revision of the metadata form type.</p>
   */
  typeRevision?: string;

  /**
   * @public
   * <p>The content of the metadata form.</p>
   */
  content?: string;
}

/**
 * @public
 * <p>The configuration of the business name generation.</p>
 */
export interface BusinessNameGenerationConfiguration {
  /**
   * @public
   * <p>Specifies whether the business name generation is enabled.</p>
   */
  enabled?: boolean;
}

/**
 * @public
 * <p>The configuration of the prediction.</p>
 */
export interface PredictionConfiguration {
  /**
   * @public
   * <p>The business name generation mechanism.</p>
   */
  businessNameGeneration?: BusinessNameGenerationConfiguration;
}

/**
 * @public
 */
export interface CreateAssetInput {
  /**
   * @public
   * <p>Asset name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Amazon DataZone domain where the asset is created.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p/>
   */
  externalIdentifier?: string;

  /**
   * @public
   * <p>The unique identifier of this asset's type.</p>
   */
  typeIdentifier: string | undefined;

  /**
   * @public
   * <p>The revision of this asset's type.</p>
   */
  typeRevision?: string;

  /**
   * @public
   * <p>Asset description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Glossary terms attached to the asset.</p>
   */
  glossaryTerms?: string[];

  /**
   * @public
   * <p>Metadata forms attached to the asset.</p>
   */
  formsInput?: FormInput[];

  /**
   * @public
   * <p>The unique identifier of the project that owns this asset.</p>
   */
  owningProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>The configuration of the automatically generated business-friendly metadata for the
   *          asset.</p>
   */
  predictionConfiguration?: PredictionConfiguration;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>The details of a metadata form.</p>
 */
export interface FormOutput {
  /**
   * @public
   * <p>The name of the metadata form.</p>
   */
  formName: string | undefined;

  /**
   * @public
   * <p>The name of the metadata form type.</p>
   */
  typeName?: string;

  /**
   * @public
   * <p>The revision of the metadata form type.</p>
   */
  typeRevision?: string;

  /**
   * @public
   * <p>The content of the metadata form.</p>
   */
  content?: string;
}

/**
 * @public
 */
export interface CreateAssetOutput {
  /**
   * @public
   * <p>The unique identifier of the created asset.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the created asset.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The identifier of the created asset type.</p>
   */
  typeIdentifier: string | undefined;

  /**
   * @public
   * <p>The revision type of the asset.</p>
   */
  typeRevision: string | undefined;

  /**
   * @public
   * <p/>
   */
  externalIdentifier?: string;

  /**
   * @public
   * <p>The revision of the asset.</p>
   */
  revision: string | undefined;

  /**
   * @public
   * <p>The description of the created asset.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The timestamp of when the asset was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user that created this asset in the catalog.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The timestamp of when the first revision of the asset took place.</p>
   */
  firstRevisionCreatedAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user that made the first revision of the asset.</p>
   */
  firstRevisionCreatedBy?: string;

  /**
   * @public
   * <p>The glossary terms that are attached to the created asset.</p>
   */
  glossaryTerms?: string[];

  /**
   * @public
   * <p>The ID of the Amazon DataZone project that owns the created asset. </p>
   */
  owningProjectId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the asset was created.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p/>
   */
  listing?: AssetListingDetails;

  /**
   * @public
   * <p>The metadata forms that are attached to the created asset.</p>
   */
  formsOutput: FormOutput[] | undefined;

  /**
   * @public
   * <p>The read-only metadata forms that are attached to the created asset.</p>
   */
  readOnlyFormsOutput?: FormOutput[];

  /**
   * @public
   * <p>The configuration of the automatically generated business-friendly metadata for the
   *          asset.</p>
   */
  predictionConfiguration?: PredictionConfiguration;
}

/**
 * @public
 * <p>The request has exceeded the specified service quota.</p>
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
 * @public
 */
export interface CreateAssetRevisionInput {
  /**
   * @public
   * <p>Te revised name of the asset.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the domain where the asset is being revised.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the asset.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The revision type of the asset.</p>
   */
  typeRevision?: string;

  /**
   * @public
   * <p>The revised description of the asset.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The glossary terms to be attached to the asset as part of asset revision.</p>
   */
  glossaryTerms?: string[];

  /**
   * @public
   * <p>The metadata forms to be attached to the asset as part of asset revision.</p>
   */
  formsInput?: FormInput[];

  /**
   * @public
   * <p>The configuration of the automatically generated business-friendly metadata for the
   *          asset.</p>
   */
  predictionConfiguration?: PredictionConfiguration;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateAssetRevisionOutput {
  /**
   * @public
   * <p>The unique identifier of the asset revision.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The revised name of the asset.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The identifier of the revision type.</p>
   */
  typeIdentifier: string | undefined;

  /**
   * @public
   * <p>The revision type of the asset.</p>
   */
  typeRevision: string | undefined;

  /**
   * @public
   * <p/>
   */
  externalIdentifier?: string;

  /**
   * @public
   * <p>The revision of the asset.</p>
   */
  revision: string | undefined;

  /**
   * @public
   * <p>The revised asset description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The timestamp of when the asset revision occured.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who performed the asset revision.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The timestamp of when the first asset revision occured.</p>
   */
  firstRevisionCreatedAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who performed the first asset revision.</p>
   */
  firstRevisionCreatedBy?: string;

  /**
   * @public
   * <p>The glossary terms that were attached to the asset as part of asset revision.</p>
   */
  glossaryTerms?: string[];

  /**
   * @public
   * <p>The unique identifier of the revised project that owns the asset.</p>
   */
  owningProjectId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the Amazon DataZone domain where the asset was revised.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p/>
   */
  listing?: AssetListingDetails;

  /**
   * @public
   * <p>The metadata forms that were attached to the asset as part of the asset revision.</p>
   */
  formsOutput: FormOutput[] | undefined;

  /**
   * @public
   * <p>The read-only metadata forms that were attached to the asset as part of the asset
   *          revision.</p>
   */
  readOnlyFormsOutput?: FormOutput[];

  /**
   * @public
   * <p>The configuration of the automatically generated business-friendly metadata for the
   *          asset.</p>
   */
  predictionConfiguration?: PredictionConfiguration;
}

/**
 * @public
 */
export interface DeleteAssetInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the asset is deleted.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the asset that is deleted.</p>
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
   * @public
   * <p>The ID of the Amazon DataZone domain to which the asset belongs.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone asset.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The revision of the Amazon DataZone asset.</p>
   */
  revision?: string;
}

/**
 * @public
 */
export interface GetAssetOutput {
  /**
   * @public
   * <p>The ID of the asset.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the asset.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ID of the asset type.</p>
   */
  typeIdentifier: string | undefined;

  /**
   * @public
   * <p>The revision of the asset type.</p>
   */
  typeRevision: string | undefined;

  /**
   * @public
   * <p/>
   */
  externalIdentifier?: string;

  /**
   * @public
   * <p>The revision of the asset.</p>
   */
  revision: string | undefined;

  /**
   * @public
   * <p>The description of the Amazon DataZone asset.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The timestamp of when the asset was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who created the asset.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The timestamp of when the first revision of the asset was created.</p>
   */
  firstRevisionCreatedAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who created the first revision of the asset.</p>
   */
  firstRevisionCreatedBy?: string;

  /**
   * @public
   * <p>The business glossary terms attached to the asset.</p>
   */
  glossaryTerms?: string[];

  /**
   * @public
   * <p>The ID of the project that owns the asset.</p>
   */
  owningProjectId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain to which the asset belongs.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p/>
   */
  listing?: AssetListingDetails;

  /**
   * @public
   * <p>The metadata forms attached to the asset.</p>
   */
  formsOutput: FormOutput[] | undefined;

  /**
   * @public
   * <p>The read-only metadata forms attached to the asset.</p>
   */
  readOnlyFormsOutput?: FormOutput[];
}

/**
 * @public
 * <p>The additional attributes of an inventory asset.</p>
 */
export interface AssetItemAdditionalAttributes {
  /**
   * @public
   * <p>The forms included in the additional attributes of an inventory asset.</p>
   */
  formsOutput?: FormOutput[];

  /**
   * @public
   * <p>The read-only forms included in the additional attributes of an inventory asset.</p>
   */
  readOnlyFormsOutput?: FormOutput[];
}

/**
 * @public
 * <p>A Amazon DataZone inventory asset.</p>
 */
export interface AssetItem {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the inventory asset exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>the identifier of the Amazon DataZone inventory asset.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The name of the Amazon DataZone inventory asset.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The identifier of the asset type of the specified Amazon DataZone inventory asset.</p>
   */
  typeIdentifier: string | undefined;

  /**
   * @public
   * <p>The revision of the inventory asset type.</p>
   */
  typeRevision: string | undefined;

  /**
   * @public
   * <p>The external identifier of the Amazon DataZone inventory asset.</p>
   */
  externalIdentifier?: string;

  /**
   * @public
   * <p>The description of an Amazon DataZone inventory asset.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The timestamp of when the Amazon DataZone inventory asset was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who created the inventory asset.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The timestamp of when the first revision of the inventory asset was created.</p>
   */
  firstRevisionCreatedAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who created the first revision of the inventory asset.</p>
   */
  firstRevisionCreatedBy?: string;

  /**
   * @public
   * <p>The glossary terms attached to the Amazon DataZone inventory asset.</p>
   */
  glossaryTerms?: string[];

  /**
   * @public
   * <p>The identifier of the Amazon DataZone project that owns the inventory asset.</p>
   */
  owningProjectId: string | undefined;

  /**
   * @public
   * <p>The additional attributes of a Amazon DataZone inventory asset. </p>
   */
  additionalAttributes?: AssetItemAdditionalAttributes;
}

/**
 * @public
 * <p>An asset published in an Amazon DataZone catalog.</p>
 */
export interface AssetListing {
  /**
   * @public
   * <p>The identifier of an asset published in an Amazon DataZone catalog. </p>
   */
  assetId?: string;

  /**
   * @public
   * <p>The revision of an asset published in an Amazon DataZone catalog. </p>
   */
  assetRevision?: string;

  /**
   * @public
   * <p>The type of an asset published in an Amazon DataZone catalog. </p>
   */
  assetType?: string;

  /**
   * @public
   * <p>The timestamp of when an asset published in an Amazon DataZone catalog was created. </p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The metadata forms attached to an asset published in an Amazon DataZone catalog. </p>
   */
  forms?: string;

  /**
   * @public
   * <p>The glossary terms attached to an asset published in an Amazon DataZone catalog. </p>
   */
  glossaryTerms?: DetailedGlossaryTerm[];

  /**
   * @public
   * <p>The identifier of the project where an asset published in an Amazon DataZone catalog exists.
   *       </p>
   */
  owningProjectId?: string;
}

/**
 * @public
 * <p>Additional attributes of an inventory asset.</p>
 */
export interface AssetListingItemAdditionalAttributes {
  /**
   * @public
   * <p>The metadata forms that form additional attributes of the metadata asset.</p>
   */
  forms?: string;
}

/**
 * @public
 * <p>The details of an asset published in an Amazon DataZone catalog.</p>
 */
export interface AssetListingItem {
  /**
   * @public
   * <p>The identifier of the listing (asset published in Amazon DataZone catalog).</p>
   */
  listingId?: string;

  /**
   * @public
   * <p>The revision of the listing (asset published in Amazon DataZone catalog).</p>
   */
  listingRevision?: string;

  /**
   * @public
   * <p>The name of the inventory asset.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The identifier of the inventory asset.</p>
   */
  entityId?: string;

  /**
   * @public
   * <p>The revision of the inventory asset.</p>
   */
  entityRevision?: string;

  /**
   * @public
   * <p>The type of the inventory asset.</p>
   */
  entityType?: string;

  /**
   * @public
   * <p>The description of an asset published in an Amazon DataZone catalog.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The timestamp of when an asset published in an Amazon DataZone catalog was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who created the listing.</p>
   */
  listingCreatedBy?: string;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the listing.</p>
   */
  listingUpdatedBy?: string;

  /**
   * @public
   * <p>Glossary terms attached to the inventory asset.</p>
   */
  glossaryTerms?: DetailedGlossaryTerm[];

  /**
   * @public
   * <p>The identifier of the project that owns the inventory asset.</p>
   */
  owningProjectId?: string;

  /**
   * @public
   * <p>The additional attributes of an asset published in an Amazon DataZone catalog.</p>
   */
  additionalAttributes?: AssetListingItemAdditionalAttributes;
}

/**
 * @public
 * <p>The revision of an inventory asset.</p>
 */
export interface AssetRevision {
  /**
   * @public
   * <p>The Amazon DataZone user who created the inventory asset.</p>
   */
  domainId?: string;

  /**
   * @public
   * <p>The identifier of the inventory asset revision.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The revision details of the inventory asset.</p>
   */
  revision?: string;

  /**
   * @public
   * <p>The Amazon DataZone user who created the asset revision.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The timestamp of when an inventory asset revison was created.</p>
   */
  createdAt?: Date;
}

/**
 * @public
 * <p/>
 */
export interface AssetTargetNameMap {
  /**
   * @public
   * <p>The identifier of the inventory asset.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>The target name in the asset target name map.</p>
   */
  targetName: string | undefined;
}

/**
 * @public
 * <p>The details of the form entry.</p>
 */
export interface FormEntryInput {
  /**
   * @public
   * <p>The type ID of the form entry.</p>
   */
  typeIdentifier: string | undefined;

  /**
   * @public
   * <p>The type revision of the form entry.</p>
   */
  typeRevision: string | undefined;

  /**
   * @public
   * <p>Specifies whether a form entry is required.</p>
   */
  required?: boolean;
}

/**
 * @public
 */
export interface CreateAssetTypeInput {
  /**
   * @public
   * <p>The unique identifier of the Amazon DataZone domain where the custom asset type is being
   *          created.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of the custom asset type.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The descripton of the custom asset type.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The metadata forms that are to be attached to the custom asset type.</p>
   */
  formsInput: Record<string, FormEntryInput> | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone project that is to own the custom asset type.</p>
   */
  owningProjectIdentifier: string | undefined;
}

/**
 * @public
 * <p>The details of the form entry.</p>
 */
export interface FormEntryOutput {
  /**
   * @public
   * <p>The name of the type of the form entry.</p>
   */
  typeName: string | undefined;

  /**
   * @public
   * <p>The type revision of the form entry.</p>
   */
  typeRevision: string | undefined;

  /**
   * @public
   * <p>Specifies whether a form entry is required.</p>
   */
  required?: boolean;
}

/**
 * @public
 */
export interface CreateAssetTypeOutput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the asset type was created.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The name of the asset type.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The revision of the custom asset type.</p>
   */
  revision: string | undefined;

  /**
   * @public
   * <p>The description of the custom asset type.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The metadata forms that are attached to the asset type.</p>
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone project that currently owns this asset type.</p>
   */
  owningProjectId?: string;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain where the asset type was originally created.</p>
   */
  originDomainId?: string;

  /**
   * @public
   * <p>The ID of the Amazon DataZone project where the asset type was originally created.</p>
   */
  originProjectId?: string;

  /**
   * @public
   * <p>The timestamp of when the asset type is to be created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who creates this custom asset type.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The timestamp of when the custom type was created.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user that created the custom asset type.</p>
   */
  updatedBy?: string;
}

/**
 * @public
 */
export interface DeleteAssetTypeInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the asset type is deleted.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the asset type that is deleted.</p>
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
   * @public
   * <p>The ID of the Amazon DataZone domain in which the asset type exists.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the asset type.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The revision of the asset type.</p>
   */
  revision?: string;
}

/**
 * @public
 */
export interface GetAssetTypeOutput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the asset type exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The name of the asset type.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The revision of the asset type.</p>
   */
  revision: string | undefined;

  /**
   * @public
   * <p>The description of the asset type.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The metadata forms attached to the asset type.</p>
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone project that owns the asset type.</p>
   */
  owningProjectId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the asset type was originally created.</p>
   */
  originDomainId?: string;

  /**
   * @public
   * <p>The ID of the Amazon DataZone project in which the asset type was originally created.</p>
   */
  originProjectId?: string;

  /**
   * @public
   * <p>The timestamp of when the asset type was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who created the asset type.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The timestamp of when the asset type was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user that updated the asset type.</p>
   */
  updatedBy?: string;
}

/**
 * @public
 * <p>The details of the asset type.</p>
 */
export interface AssetTypeItem {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain where the asset type exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The name of the asset type.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The revision of the asset type.</p>
   */
  revision: string | undefined;

  /**
   * @public
   * <p>The description of the asset type.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The forms included in the details of the asset type.</p>
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone project that owns the asset type.</p>
   */
  owningProjectId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain where the asset type was originally
   *          created.</p>
   */
  originDomainId?: string;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone project where the asset type exists.</p>
   */
  originProjectId?: string;

  /**
   * @public
   * <p>The timestamp of when the asset type was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who created the asset type.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The timestamp of when the asset type was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the asset type.</p>
   */
  updatedBy?: string;
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
 * @public
 */
export interface CancelSubscriptionInput {
  /**
   * @public
   * <p>The unique identifier of the Amazon DataZone domain where the subscription request is being
   *          cancelled.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the subscription that is being cancelled.</p>
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
   * @public
   * <p>The identifier of the subscription.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>Specifies the Amazon DataZone user who is cancelling the subscription.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user that cancelled the subscription.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The unique identifier of the Amazon DataZone domain where the subscription is being
   *          cancelled.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The status of the request to cancel the subscription.</p>
   */
  status: SubscriptionStatus | undefined;

  /**
   * @public
   * <p>The timestamp that specifies when the request to cancel the subscription was
   *          created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp that specifies when the subscription was cancelled.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who is made a subscriber to the specified asset by the subscription
   *          that is being cancelled.</p>
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * @public
   * <p>The asset to which a subscription is being cancelled.</p>
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * @public
   * <p>The unique ID of the subscripton request for the subscription that is being
   *          cancelled.</p>
   */
  subscriptionRequestId?: string;

  /**
   * @public
   * <p>Specifies whether the permissions to the asset are retained after the subscription is
   *          cancelled.</p>
   */
  retainPermissions?: boolean;
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
 * @public
 * <p>Part of the provisioning properties of the environment blueprint.</p>
 */
export interface CloudFormationProperties {
  /**
   * @public
   * <p>The template URL of the cloud formation provisioning properties of the environment
   *          blueprint.</p>
   */
  templateUrl: string | undefined;
}

/**
 * @public
 * <p>The details of the parameters for the configurable environment action.</p>
 */
export interface ConfigurableActionParameter {
  /**
   * @public
   * <p>The key of the configurable action parameter.</p>
   */
  key?: string;

  /**
   * @public
   * <p>The value of the configurable action parameter.</p>
   */
  value?: string;
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
 * @public
 * <p>The configurable action of a Amazon DataZone environment.</p>
 */
export interface ConfigurableEnvironmentAction {
  /**
   * @public
   * <p>The type of a configurable action in a Amazon DataZone environment.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The authentication type of a configurable action of a Amazon DataZone environment. </p>
   */
  auth?: ConfigurableActionTypeAuthorization;

  /**
   * @public
   * <p>The parameters of a configurable action in a Amazon DataZone environment.</p>
   */
  parameters: ConfigurableActionParameter[] | undefined;
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
 * @public
 * <p>A filter expression in Amazon DataZone.</p>
 */
export interface FilterExpression {
  /**
   * @public
   * <p>The search filter explresison type.</p>
   */
  type: FilterExpressionType | undefined;

  /**
   * @public
   * <p>The search filter expression.</p>
   */
  expression: string | undefined;
}

/**
 * @public
 * <p>The relational filter configuration for the data source.</p>
 */
export interface RelationalFilterConfiguration {
  /**
   * @public
   * <p>The database name specified in the relational filter configuration for the data
   *          source.</p>
   */
  databaseName: string | undefined;

  /**
   * @public
   * <p>The schema name specified in the relational filter configuration for the data
   *          source.</p>
   */
  schemaName?: string;

  /**
   * @public
   * <p>The filter expressions specified in the relational filter configuration for the data
   *          source.</p>
   */
  filterExpressions?: FilterExpression[];
}

/**
 * @public
 * <p>The configuration details of the Amazon Web Services Glue data source.</p>
 */
export interface GlueRunConfigurationInput {
  /**
   * @public
   * <p>The data access role included in the configuration details of the Amazon Web Services Glue data
   *          source.</p>
   */
  dataAccessRole?: string;

  /**
   * @public
   * <p>The relational filter configurations included in the configuration details of the Amazon Web Services
   *          Glue data source.</p>
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;
}

/**
 * @public
 * <p>The details of the credentials required to access an Amazon Redshift cluster.</p>
 */
export interface RedshiftCredentialConfiguration {
  /**
   * @public
   * <p>The ARN of a secret manager for an Amazon Redshift cluster.</p>
   */
  secretManagerArn: string | undefined;
}

/**
 * @public
 * <p>The details of the Amazon Redshift cluster storage.</p>
 */
export interface RedshiftClusterStorage {
  /**
   * @public
   * <p>The name of an Amazon Redshift cluster.</p>
   */
  clusterName: string | undefined;
}

/**
 * @public
 * <p>The details of the Amazon Redshift Serverless workgroup storage.</p>
 */
export interface RedshiftServerlessStorage {
  /**
   * @public
   * <p>The name of the Amazon Redshift Serverless workgroup.</p>
   */
  workgroupName: string | undefined;
}

/**
 * @public
 * <p>The details of the Amazon Redshift storage as part of the configuration of an Amazon
 *          Redshift data source run.</p>
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
   * @public
   * <p>The details of the Amazon Redshift cluster source.</p>
   */
  export interface RedshiftClusterSourceMember {
    redshiftClusterSource: RedshiftClusterStorage;
    redshiftServerlessSource?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The details of the Amazon Redshift Serverless workgroup source.</p>
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
 * @public
 * <p>The configuration details of the Amazon Redshift data source.</p>
 */
export interface RedshiftRunConfigurationInput {
  /**
   * @public
   * <p>The data access role included in the configuration details of the Amazon Redshift data
   *          source.</p>
   */
  dataAccessRole?: string;

  /**
   * @public
   * <p>The relational filger configurations included in the configuration details of the Amazon
   *          Redshift data source.</p>
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * @public
   * <p>The details of the credentials required to access an Amazon Redshift cluster.</p>
   */
  redshiftCredentialConfiguration: RedshiftCredentialConfiguration | undefined;

  /**
   * @public
   * <p>The details of the Amazon Redshift storage as part of the configuration of an Amazon
   *          Redshift data source run.</p>
   */
  redshiftStorage: RedshiftStorage | undefined;
}

/**
 * @public
 * <p>The configuration of the data source.</p>
 */
export type DataSourceConfigurationInput =
  | DataSourceConfigurationInput.GlueRunConfigurationMember
  | DataSourceConfigurationInput.RedshiftRunConfigurationMember
  | DataSourceConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceConfigurationInput {
  /**
   * @public
   * <p>The configuration of the Amazon Web Services Glue data source.</p>
   */
  export interface GlueRunConfigurationMember {
    glueRunConfiguration: GlueRunConfigurationInput;
    redshiftRunConfiguration?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The configuration of the Amazon Redshift data source.</p>
   */
  export interface RedshiftRunConfigurationMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration: RedshiftRunConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    glueRunConfiguration: (value: GlueRunConfigurationInput) => T;
    redshiftRunConfiguration: (value: RedshiftRunConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataSourceConfigurationInput, visitor: Visitor<T>): T => {
    if (value.glueRunConfiguration !== undefined) return visitor.glueRunConfiguration(value.glueRunConfiguration);
    if (value.redshiftRunConfiguration !== undefined)
      return visitor.redshiftRunConfiguration(value.redshiftRunConfiguration);
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
 * @public
 * <p>The recommendation to be updated as part of the <code>UpdateDataSource</code>
 *          action.</p>
 */
export interface RecommendationConfiguration {
  /**
   * @public
   * <p>Specifies whether automatic business name generation is to be enabled or not as part of
   *          the recommendation configuration.</p>
   */
  enableBusinessNameGeneration?: boolean;
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
 * @public
 * <p>The details of the schedule of the data source runs.</p>
 */
export interface ScheduleConfiguration {
  /**
   * @public
   * <p>The timezone of the data source run. </p>
   */
  timezone?: Timezone;

  /**
   * @public
   * <p>The schedule of the data source runs.</p>
   */
  schedule?: string;
}

/**
 * @public
 */
export interface CreateDataSourceInput {
  /**
   * @public
   * <p>The name of the data source.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the data source.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain where the data source is created.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone project in which you want to add this data
   *          source.</p>
   */
  projectIdentifier: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the Amazon DataZone environment to which the data source publishes
   *          assets. </p>
   */
  environmentIdentifier: string | undefined;

  /**
   * @public
   * <p>The type of the data source.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>Specifies the configuration of the data source. It can be set to either
   *             <code>glueRunConfiguration</code> or <code>redshiftRunConfiguration</code>.</p>
   */
  configuration?: DataSourceConfigurationInput;

  /**
   * @public
   * <p>Specifies whether the business name generation is to be enabled for this data
   *          source.</p>
   */
  recommendation?: RecommendationConfiguration;

  /**
   * @public
   * <p>Specifies whether the data source is enabled.</p>
   */
  enableSetting?: EnableSetting;

  /**
   * @public
   * <p>The schedule of the data source runs.</p>
   */
  schedule?: ScheduleConfiguration;

  /**
   * @public
   * <p>Specifies whether the assets that this data source creates in the inventory are to be
   *          also automatically published to the catalog.</p>
   */
  publishOnImport?: boolean;

  /**
   * @public
   * <p>The metadata forms that are to be attached to the assets that this data source works
   *          with.</p>
   */
  assetFormsInput?: FormInput[];

  /**
   * @public
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>The configuration details of the Amazon Web Services Glue data source.</p>
 */
export interface GlueRunConfigurationOutput {
  /**
   * @public
   * <p>The Amazon Web Services account ID included in the configuration details of the Amazon Web Services Glue data
   *          source. </p>
   */
  accountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services region included in the configuration details of the Amazon Web Services Glue data source.
   *       </p>
   */
  region?: string;

  /**
   * @public
   * <p>The data access role included in the configuration details of the Amazon Web Services Glue data
   *          source. </p>
   */
  dataAccessRole?: string;

  /**
   * @public
   * <p>The relational filter configurations included in the configuration details of the Amazon Web Services
   *          Glue data source.</p>
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;
}

/**
 * @public
 * <p>The configuration details of the Amazon Redshift data source.</p>
 */
export interface RedshiftRunConfigurationOutput {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account included in the configuration details of the Amazon Redshift
   *          data source.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services region included in the configuration details of the Amazon Redshift
   *          data source.</p>
   */
  region?: string;

  /**
   * @public
   * <p>The data access role included in the configuration details of the Amazon Redshift data
   *          source.</p>
   */
  dataAccessRole?: string;

  /**
   * @public
   * <p>The relational filger configurations included in the configuration details of the Amazon
   *          Redshift data source.</p>
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * @public
   * <p>The details of the credentials required to access an Amazon Redshift cluster.</p>
   */
  redshiftCredentialConfiguration: RedshiftCredentialConfiguration | undefined;

  /**
   * @public
   * <p>The details of the Amazon Redshift storage as part of the configuration of an Amazon
   *          Redshift data source run.</p>
   */
  redshiftStorage: RedshiftStorage | undefined;
}

/**
 * @public
 * <p>The configuration of the data source.</p>
 */
export type DataSourceConfigurationOutput =
  | DataSourceConfigurationOutput.GlueRunConfigurationMember
  | DataSourceConfigurationOutput.RedshiftRunConfigurationMember
  | DataSourceConfigurationOutput.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceConfigurationOutput {
  /**
   * @public
   * <p>The configuration of the Amazon Web Services Glue data source.</p>
   */
  export interface GlueRunConfigurationMember {
    glueRunConfiguration: GlueRunConfigurationOutput;
    redshiftRunConfiguration?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The configuration of the Amazon Redshift data source.</p>
   */
  export interface RedshiftRunConfigurationMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration: RedshiftRunConfigurationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    glueRunConfiguration: (value: GlueRunConfigurationOutput) => T;
    redshiftRunConfiguration: (value: RedshiftRunConfigurationOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataSourceConfigurationOutput, visitor: Visitor<T>): T => {
    if (value.glueRunConfiguration !== undefined) return visitor.glueRunConfiguration(value.glueRunConfiguration);
    if (value.redshiftRunConfiguration !== undefined)
      return visitor.redshiftRunConfiguration(value.redshiftRunConfiguration);
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
 * @public
 * <p>The details of the error message that is returned if the operation cannot be
 *          successfully completed.</p>
 */
export interface DataSourceErrorMessage {
  /**
   * @public
   * <p>The type of the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   */
  errorType: DataSourceErrorType | undefined;

  /**
   * @public
   * <p>The details of the error message that is returned if the operation cannot be
   *          successfully completed.</p>
   */
  errorDetail?: string;
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
   * @public
   * <p>The unique identifier of the data source.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The status of the data source.</p>
   */
  status?: DataSourceStatus;

  /**
   * @public
   * <p>The type of the data source.</p>
   */
  type?: string;

  /**
   * @public
   * <p>The name of the data source.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the data source.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the data source is created.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone project to which the data source is added.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the Amazon DataZone environment to which the data source publishes
   *          assets. </p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>Specifies the configuration of the data source. It can be set to either
   *             <code>glueRunConfiguration</code> or <code>redshiftRunConfiguration</code>.</p>
   */
  configuration?: DataSourceConfigurationOutput;

  /**
   * @public
   * <p>Specifies whether the business name generation is to be enabled for this data
   *          source.</p>
   */
  recommendation?: RecommendationConfiguration;

  /**
   * @public
   * <p>Specifies whether the data source is enabled.</p>
   */
  enableSetting?: EnableSetting;

  /**
   * @public
   * <p>Specifies whether the assets that this data source creates in the inventory are to be
   *          also automatically published to the catalog.</p>
   */
  publishOnImport?: boolean;

  /**
   * @public
   * <p>The metadata forms attached to the assets that this data source creates.</p>
   */
  assetFormsOutput?: FormOutput[];

  /**
   * @public
   * <p>The schedule of the data source runs.</p>
   */
  schedule?: ScheduleConfiguration;

  /**
   * @public
   * <p>The status of the last run of this data source.</p>
   */
  lastRunStatus?: DataSourceRunStatus;

  /**
   * @public
   * <p>The timestamp that specifies when the data source was last run.</p>
   */
  lastRunAt?: Date;

  /**
   * @public
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   */
  lastRunErrorMessage?: DataSourceErrorMessage;

  /**
   * @public
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   */
  errorMessage?: DataSourceErrorMessage;

  /**
   * @public
   * <p>The timestamp of when the data source was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the data source was updated.</p>
   */
  updatedAt?: Date;
}

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
 * @public
 * <p>The single sign-on details in Amazon DataZone.</p>
 */
export interface SingleSignOn {
  /**
   * @public
   * <p>The type of single sign-on in Amazon DataZone.</p>
   */
  type?: AuthType;

  /**
   * @public
   * <p>The single sign-on user assignment in Amazon DataZone.</p>
   */
  userAssignment?: UserAssignment;
}

/**
 * @public
 */
export interface CreateDomainInput {
  /**
   * @public
   * <p>The name of the Amazon DataZone domain.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the Amazon DataZone domain.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The single-sign on configuration of the Amazon DataZone domain.</p>
   */
  singleSignOn?: SingleSignOn;

  /**
   * @public
   * <p>The domain execution role that is created when an Amazon DataZone domain is created. The
   *          domain execution role is created in the Amazon Web Services account that houses the
   *          Amazon DataZone domain.</p>
   */
  domainExecutionRole: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services Key Management Service (KMS) key that is used
   *          to encrypt the Amazon DataZone domain, metadata, and reporting data. </p>
   */
  kmsKeyIdentifier?: string;

  /**
   * @public
   * <p>The tags specified for the Amazon DataZone domain.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
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
   * @public
   * <p>The identifier of the Amazon DataZone domain.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the Amazon DataZone domain.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the Amazon DataZone domain.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The single-sign on configuration of the Amazon DataZone domain.</p>
   */
  singleSignOn?: SingleSignOn;

  /**
   * @public
   * <p>The domain execution role that is created when an Amazon DataZone domain is created. The
   *          domain execution role is created in the Amazon Web Services account that houses the
   *          Amazon DataZone domain.</p>
   */
  domainExecutionRole?: string;

  /**
   * @public
   * <p>The ARN of the Amazon DataZone domain.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services Key Management Service (KMS) key that is used
   *          to encrypt the Amazon DataZone domain, metadata, and reporting data. </p>
   */
  kmsKeyIdentifier?: string;

  /**
   * @public
   * <p>The status of the Amazon DataZone domain.</p>
   */
  status?: DomainStatus;

  /**
   * @public
   * <p>The URL of the data portal for this Amazon DataZone domain.</p>
   */
  portalUrl?: string;

  /**
   * @public
   * <p>The tags specified for the Amazon DataZone domain.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>The parameter details of an evironment profile.</p>
 */
export interface EnvironmentParameter {
  /**
   * @public
   * <p>The name of an environment profile parameter.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The value of an environment profile parameter.</p>
   */
  value?: string;
}

/**
 * @public
 */
export interface CreateEnvironmentInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone project in which this environment is created.</p>
   */
  projectIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the environment is created.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The description of the Amazon DataZone environment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The name of the Amazon DataZone environment.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The identifier of the environment profile that is used to create this Amazon DataZone
   *          environment.</p>
   */
  environmentProfileIdentifier: string | undefined;

  /**
   * @public
   * <p>The user parameters of this Amazon DataZone environment.</p>
   */
  userParameters?: EnvironmentParameter[];

  /**
   * @public
   * <p>The glossary terms that can be used in this Amazon DataZone environment.</p>
   */
  glossaryTerms?: string[];
}

/**
 * @public
 * <p>The deployment properties of the Amazon DataZone blueprint.</p>
 */
export interface DeploymentProperties {
  /**
   * @public
   * <p>The start timeout of the environment blueprint deployment.</p>
   */
  startTimeoutMinutes?: number;

  /**
   * @public
   * <p>The end timeout of the environment blueprint deployment.</p>
   */
  endTimeoutMinutes?: number;
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
 * @public
 * <p>The failure reasons for the environment deployment.</p>
 */
export interface EnvironmentError {
  /**
   * @public
   * <p>The error code for the failure reason for the environment deployment.</p>
   */
  code?: string;

  /**
   * @public
   * <p>The error message for the failure reason for the environment deployment.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * <p>The details of the last deployment of the environment.</p>
 */
export interface Deployment {
  /**
   * @public
   * <p>The identifier of the last deployment of the environment.</p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p>The type of the last deployment of the environment.</p>
   */
  deploymentType?: DeploymentType;

  /**
   * @public
   * <p>The status of the last deployment of the environment.</p>
   */
  deploymentStatus?: DeploymentStatus;

  /**
   * @public
   * <p>The failure reason of the last deployment of the environment.</p>
   */
  failureReason?: EnvironmentError;

  /**
   * @public
   * <p>The messages of the last deployment of the environment.</p>
   */
  messages?: string[];

  /**
   * @public
   * <p>Specifies whether the last deployment of the environment is complete.</p>
   */
  isDeploymentComplete?: boolean;
}

/**
 * @public
 * <p>The details of a provisioned resource of this Amazon DataZone environment.</p>
 */
export interface Resource {
  /**
   * @public
   * <p>The provider of a provisioned resource of this Amazon DataZone environment.</p>
   */
  provider?: string;

  /**
   * @public
   * <p>The name of a provisioned resource of this Amazon DataZone environment.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The value of a provisioned resource of this Amazon DataZone environment.</p>
   */
  value: string | undefined;

  /**
   * @public
   * <p>The type of a provisioned resource of this Amazon DataZone environment.</p>
   */
  type: string | undefined;
}

/**
 * @public
 * <p>The provisioning properties of an environment blueprint.</p>
 */
export type ProvisioningProperties =
  | ProvisioningProperties.CloudFormationMember
  | ProvisioningProperties.$UnknownMember;

/**
 * @public
 */
export namespace ProvisioningProperties {
  /**
   * @public
   * <p>The cloud formation properties included as part of the provisioning properties of an
   *          environment blueprint.</p>
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
 * @public
 * <p>The details of user parameters of an environment blueprint.</p>
 */
export interface CustomParameter {
  /**
   * @public
   * <p>The key name of the parameter.</p>
   */
  keyName: string | undefined;

  /**
   * @public
   * <p>The description of the parameter.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The filed type of the parameter.</p>
   */
  fieldType: string | undefined;

  /**
   * @public
   * <p>The default value of the parameter.</p>
   */
  defaultValue?: string;

  /**
   * @public
   * <p>Specifies whether the parameter is editable.</p>
   */
  isEditable?: boolean;

  /**
   * @public
   * <p>Specifies whether the custom parameter is optional.</p>
   */
  isOptional?: boolean;
}

/**
 * @public
 */
export interface CreateEnvironmentOutput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone project in which this environment is created.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The ID of this Amazon DataZone environment.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the environment is created.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created this environment.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The timestamp of when the environment was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when this environment was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The name of this environment.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of this Amazon DataZone environment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ID of the environment profile with which this Amazon DataZone environment was
   *          created.</p>
   */
  environmentProfileId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account in which the Amazon DataZone environment is created.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services region in which the Amazon DataZone environment is created.</p>
   */
  awsAccountRegion?: string;

  /**
   * @public
   * <p>The provider of this Amazon DataZone environment.</p>
   */
  provider: string | undefined;

  /**
   * @public
   * <p>The provisioned resources of this Amazon DataZone environment.</p>
   */
  provisionedResources?: Resource[];

  /**
   * @public
   * <p>The status of this Amazon DataZone environment.</p>
   */
  status?: EnvironmentStatus;

  /**
   * @public
   * <p>The configurable actions of this Amazon DataZone environment.</p>
   */
  environmentActions?: ConfigurableEnvironmentAction[];

  /**
   * @public
   * <p>The glossary terms that can be used in this Amazon DataZone environment.</p>
   */
  glossaryTerms?: string[];

  /**
   * @public
   * <p>The user parameters of this Amazon DataZone environment.</p>
   */
  userParameters?: CustomParameter[];

  /**
   * @public
   * <p>The details of the last deployment of this Amazon DataZone environment.</p>
   */
  lastDeployment?: Deployment;

  /**
   * @public
   * <p>The provisioning properties of this Amazon DataZone environment.</p>
   */
  provisioningProperties?: ProvisioningProperties;

  /**
   * @public
   * <p>The deployment properties of this Amazon DataZone environment.</p>
   */
  deploymentProperties?: DeploymentProperties;

  /**
   * @public
   * <p>The ID of the blueprint with which this Amazon DataZone environment was created.</p>
   */
  environmentBlueprintId?: string;
}

/**
 * @public
 */
export interface CreateEnvironmentProfileInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which this environment profile is created.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of this Amazon DataZone environment profile.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of this Amazon DataZone environment profile.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ID of the blueprint with which this environment profile is created.</p>
   */
  environmentBlueprintIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the project in which to create the environment profile.</p>
   */
  projectIdentifier: string | undefined;

  /**
   * @public
   * <p>The user parameters of this Amazon DataZone environment profile.</p>
   */
  userParameters?: EnvironmentParameter[];

  /**
   * @public
   * <p>The Amazon Web Services account in which the Amazon DataZone environment is created.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services region in which this environment profile is created.</p>
   */
  awsAccountRegion?: string;
}

/**
 * @public
 */
export interface CreateEnvironmentProfileOutput {
  /**
   * @public
   * <p>The ID of this Amazon DataZone environment profile.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which this environment profile is created.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID in which this Amazon DataZone environment profile is
   *          created.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services region in which this Amazon DataZone environment profile is
   *          created.</p>
   */
  awsAccountRegion?: string;

  /**
   * @public
   * <p>The Amazon DataZone user who created this environment profile.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The timestamp of when this environment profile was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when this environment profile was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The name of this Amazon DataZone environment profile.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of this Amazon DataZone environment profile.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ID of the blueprint with which this environment profile is created.</p>
   */
  environmentBlueprintId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone project in which this environment profile is created.</p>
   */
  projectId?: string;

  /**
   * @public
   * <p>The user parameters of this Amazon DataZone environment profile.</p>
   */
  userParameters?: CustomParameter[];
}

/**
 * @public
 * <p/>
 */
export type Model = Model.SmithyMember | Model.$UnknownMember;

/**
 * @public
 */
export namespace Model {
  /**
   * @public
   * <p/>
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
   * @public
   * <p>The ID of the Amazon DataZone domain in which this metadata form type is created.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of this Amazon DataZone metadata form type.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The model of this Amazon DataZone metadata form type.</p>
   */
  model: Model | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone project that owns this metadata form type.</p>
   */
  owningProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>The status of this Amazon DataZone metadata form type.</p>
   */
  status?: FormTypeStatus;

  /**
   * @public
   * <p>The description of this Amazon DataZone metadata form type.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface CreateFormTypeOutput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which this metadata form type is created.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The name of this Amazon DataZone metadata form type.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The revision of this Amazon DataZone metadata form type.</p>
   */
  revision: string | undefined;

  /**
   * @public
   * <p>The description of this Amazon DataZone metadata form type.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ID of the project that owns this Amazon DataZone metadata form type.</p>
   */
  owningProjectId?: string;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which this metadata form type was originally
   *          created.</p>
   */
  originDomainId?: string;

  /**
   * @public
   * <p>The ID of the project in which this Amazon DataZone metadata form type was originally
   *          created.</p>
   */
  originProjectId?: string;
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
   * @public
   * <p>The ID of the Amazon DataZone domain in which this business glossary is created.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of this business glossary.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ID of the project that currently owns business glossary.</p>
   */
  owningProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>The description of this business glossary.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status of this business glossary.</p>
   */
  status?: GlossaryStatus;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateGlossaryOutput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which this business glossary is created.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The ID of this business glossary.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of this business glossary.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ID of the project that currently owns this business glossary.</p>
   */
  owningProjectId: string | undefined;

  /**
   * @public
   * <p>The description of this business glossary.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status of this business glossary.</p>
   */
  status?: GlossaryStatus;
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
 * @public
 * <p>The details of the term relations.</p>
 */
export interface TermRelations {
  /**
   * @public
   * <p>The <code>isA</code> property of the term relations.</p>
   */
  isA?: string[];

  /**
   * @public
   * <p>The classifies of the term relations.</p>
   */
  classifies?: string[];
}

/**
 * @public
 */
export interface CreateGlossaryTermInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which this business glossary term is created.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the business glossary in which this term is created.</p>
   */
  glossaryIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of this business glossary term.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The status of this business glossary term.</p>
   */
  status?: GlossaryTermStatus;

  /**
   * @public
   * <p>The short description of this business glossary term.</p>
   */
  shortDescription?: string;

  /**
   * @public
   * <p>The long description of this business glossary term.</p>
   */
  longDescription?: string;

  /**
   * @public
   * <p>The term relations of this business glossary term.</p>
   */
  termRelations?: TermRelations;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateGlossaryTermOutput {
  /**
   * @public
   * <p>The ID of this business glossary term.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which this business glossary term is created.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The ID of the business glossary in which this term is created.</p>
   */
  glossaryId: string | undefined;

  /**
   * @public
   * <p>The name of this business glossary term.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The status of this business glossary term.</p>
   */
  status: GlossaryTermStatus | undefined;

  /**
   * @public
   * <p>The short description of this business glossary term.</p>
   */
  shortDescription?: string;

  /**
   * @public
   * <p>The long description of this business glossary term.</p>
   */
  longDescription?: string;

  /**
   * @public
   * <p>The term relations of this business glossary term.</p>
   */
  termRelations?: TermRelations;
}

/**
 * @public
 */
export interface CreateGroupProfileInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the group profile is created.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the group for which the group profile is created.</p>
   */
  groupIdentifier: string | undefined;

  /**
   * @public
   * <p> A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
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
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the group profile is created.</p>
   */
  domainId?: string;

  /**
   * @public
   * <p>The identifier of the group profile.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The status of the group profile.</p>
   */
  status?: GroupProfileStatus;

  /**
   * @public
   * <p>The name of the group for which group profile is created.</p>
   */
  groupName?: string;
}

/**
 * @public
 * @enum
 */
export const EntityType = {
  ASSET: "ASSET",
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
   * @public
   * <p/>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p/>
   */
  entityIdentifier: string | undefined;

  /**
   * @public
   * <p/>
   */
  entityType: EntityType | undefined;

  /**
   * @public
   * <p/>
   */
  entityRevision?: string;

  /**
   * @public
   * <p/>
   */
  action: ChangeAction | undefined;

  /**
   * @public
   * <p/>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateListingChangeSetOutput {
  /**
   * @public
   * <p/>
   */
  listingId: string | undefined;

  /**
   * @public
   * <p/>
   */
  listingRevision: string | undefined;

  /**
   * @public
   * <p/>
   */
  status: ListingStatus | undefined;
}

/**
 * @public
 */
export interface CreateProjectInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which this project is created.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of the Amazon DataZone project.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the Amazon DataZone project.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The glossary terms that can be used in this Amazon DataZone project.</p>
   */
  glossaryTerms?: string[];
}

/**
 * @public
 */
export interface CreateProjectOutput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the project was created.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone project.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the project.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the project.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon DataZone user who created the project.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The timestamp of when the project was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the project was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The glossary terms that can be used in the project.</p>
   */
  glossaryTerms?: string[];
}

/**
 * @public
 * @enum
 */
export const UserDesignation = {
  PROJECT_CONTRIBUTOR: "PROJECT_CONTRIBUTOR",
  PROJECT_OWNER: "PROJECT_OWNER",
} as const;

/**
 * @public
 */
export type UserDesignation = (typeof UserDesignation)[keyof typeof UserDesignation];

/**
 * @public
 * <p>The details about a project member.</p>
 */
export type Member = Member.GroupIdentifierMember | Member.UserIdentifierMember | Member.$UnknownMember;

/**
 * @public
 */
export namespace Member {
  /**
   * @public
   * <p>The user ID of a project member.</p>
   */
  export interface UserIdentifierMember {
    userIdentifier: string;
    groupIdentifier?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The ID of the group of a project member.</p>
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
   * @public
   * <p>The ID of the Amazon DataZone domain in which project membership is created.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the project for which this project membership was created.</p>
   */
  projectIdentifier: string | undefined;

  /**
   * @public
   * <p>The project member whose project membership was created.</p>
   */
  member: Member | undefined;

  /**
   * @public
   * <p>The designation of the project membership.</p>
   */
  designation: UserDesignation | undefined;
}

/**
 * @public
 */
export interface CreateProjectMembershipOutput {}

/**
 * @public
 * <p>A revision to be made to an asset published in a Amazon DataZone catalog.</p>
 */
export interface ListingRevisionInput {
  /**
   * @public
   * <p>An identifier of revision to be made to an asset published in a Amazon DataZone
   *          catalog.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The details of a revision to be made to an asset published in a Amazon DataZone
   *          catalog.</p>
   */
  revision: string | undefined;
}

/**
 * @public
 * <p>The details of a listing for which a subscription is to be granted.</p>
 */
export type GrantedEntityInput = GrantedEntityInput.ListingMember | GrantedEntityInput.$UnknownMember;

/**
 * @public
 */
export namespace GrantedEntityInput {
  /**
   * @public
   * <p>The listing for which a subscription is to be granted.</p>
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
   * @public
   * <p>The ID of the Amazon DataZone domain in which the subscription grant is created.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the environment in which the subscription grant is created.</p>
   */
  environmentIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the subscription target for which the subscription grant is created.</p>
   */
  subscriptionTargetIdentifier: string | undefined;

  /**
   * @public
   * <p>The entity to which the subscription is to be granted.</p>
   */
  grantedEntity: GrantedEntityInput | undefined;

  /**
   * @public
   * <p>The names of the assets for which the subscription grant is created.</p>
   */
  assetTargetNames?: AssetTargetNameMap[];

  /**
   * @public
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Specifies the error message that is returned if the operation cannot be successfully
 *          completed.</p>
 */
export interface FailureCause {
  /**
   * @public
   * <p>The description of the error message.</p>
   */
  message?: string;
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
 * @public
 * <p>The details of the asset for which the subscription grant is created.</p>
 */
export interface SubscribedAsset {
  /**
   * @public
   * <p>The identifier of the asset for which the subscription grant is created.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>The revision of the asset for which the subscription grant is created.</p>
   */
  assetRevision: string | undefined;

  /**
   * @public
   * <p>The status of the asset for which the subscription grant is created.</p>
   */
  status: SubscriptionGrantStatus | undefined;

  /**
   * @public
   * <p>The target name of the asset for which the subscription grant is created.</p>
   */
  targetName?: string;

  /**
   * @public
   * <p>The failure cause included in the details of the asset for which the subscription grant
   *          is created.</p>
   */
  failureCause?: FailureCause;

  /**
   * @public
   * <p>The timestamp of when the subscription grant to the asset is created.</p>
   */
  grantedTimestamp?: Date;

  /**
   * @public
   * <p>The failure timestamp included in the details of the asset for which the subscription
   *          grant is created.</p>
   */
  failureTimestamp?: Date;
}

/**
 * @public
 * <p>A revision of an asset published in a Amazon DataZone catalog.</p>
 */
export interface ListingRevision {
  /**
   * @public
   * <p>An identifier of a revision of an asset published in a Amazon DataZone catalog.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The details of a revision of an asset published in a Amazon DataZone catalog.</p>
   */
  revision: string | undefined;
}

/**
 * @public
 * <p>The details of a listing for which a subscription is granted.</p>
 */
export type GrantedEntity = GrantedEntity.ListingMember | GrantedEntity.$UnknownMember;

/**
 * @public
 */
export namespace GrantedEntity {
  /**
   * @public
   * <p>The listing for which a subscription is granted.</p>
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
 * @public
 * @enum
 */
export const SubscriptionGrantOverallStatus = {
  COMPLETED: "COMPLETED",
  GRANT_AND_REVOKE_FAILED: "GRANT_AND_REVOKE_FAILED",
  GRANT_FAILED: "GRANT_FAILED",
  INACCESSIBLE: "INACCESSIBLE",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  REVOKE_FAILED: "REVOKE_FAILED",
} as const;

/**
 * @public
 */
export type SubscriptionGrantOverallStatus =
  (typeof SubscriptionGrantOverallStatus)[keyof typeof SubscriptionGrantOverallStatus];

/**
 * @public
 */
export interface CreateSubscriptionGrantOutput {
  /**
   * @public
   * <p>The ID of the subscription grant.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created the subscription grant.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the subscription grant.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the subscription grant is created.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>A timestamp of when the subscription grant is created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>A timestamp of when the subscription grant was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The ID of the subscription target for which the subscription grant is created.</p>
   */
  subscriptionTargetId: string | undefined;

  /**
   * @public
   * <p>The entity to which the subscription is granted.</p>
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * @public
   * <p>The status of the subscription grant.</p>
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * @public
   * <p>The assets for which the subscription grant is created.</p>
   */
  assets?: SubscribedAsset[];

  /**
   * @public
   * <p>The identifier of the subscription grant.</p>
   */
  subscriptionId?: string;
}

/**
 * @public
 * <p>The published asset for which the subscription grant is to be created.</p>
 */
export interface SubscribedListingInput {
  /**
   * @public
   * <p>The identifier of the published asset for which the subscription grant is to be
   *          created.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 * <p>The project that is to be given a subscription grant.</p>
 */
export interface SubscribedProjectInput {
  /**
   * @public
   * <p>The identifier of the project that is to be given a subscription grant.</p>
   */
  identifier?: string;
}

/**
 * @public
 * <p>The principal that is to be given a subscriptiong grant.</p>
 */
export type SubscribedPrincipalInput = SubscribedPrincipalInput.ProjectMember | SubscribedPrincipalInput.$UnknownMember;

/**
 * @public
 */
export namespace SubscribedPrincipalInput {
  /**
   * @public
   * <p>The project that is to be given a subscription grant.</p>
   */
  export interface ProjectMember {
    project: SubscribedProjectInput;
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
    project: (value: SubscribedProjectInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SubscribedPrincipalInput, visitor: Visitor<T>): T => {
    if (value.project !== undefined) return visitor.project(value.project);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateSubscriptionRequestInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the subscription request is created.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone principals for whom the subscription request is created.</p>
   */
  subscribedPrincipals: SubscribedPrincipalInput[] | undefined;

  /**
   * @public
   * <p/>
   */
  subscribedListings: SubscribedListingInput[] | undefined;

  /**
   * @public
   * <p>The reason for the subscription request.</p>
   */
  requestReason: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateSubscriptionRequestOutput {
  /**
   * @public
   * <p>The ID of the subscription request.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created the subscription request.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the subscription request.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in whcih the subscription request is created.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The status of the subscription request.</p>
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * @public
   * <p>A timestamp of when the subscription request is created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription request was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The reason for the subscription request.</p>
   */
  requestReason: string | undefined;

  /**
   * @public
   * <p>The subscribed principals of the subscription request.</p>
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * @public
   * <p/>
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * @public
   * <p>The ID of the reviewer of the subscription request.</p>
   */
  reviewerId?: string;

  /**
   * @public
   * <p>The decision comment of the subscription request.</p>
   */
  decisionComment?: string;
}

/**
 * @public
 * <p>The details of the subscription target configuration.</p>
 */
export interface SubscriptionTargetForm {
  /**
   * @public
   * <p>The form name included in the subscription target configuration.</p>
   */
  formName: string | undefined;

  /**
   * @public
   * <p>The content of the subscription target configuration.</p>
   */
  content: string | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionTargetInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which subscription target is created.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the environment in which subscription target is created.</p>
   */
  environmentIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of the subscription target.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of the subscription target.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The configuration of the subscription target.</p>
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * @public
   * <p>The authorized principals of the subscription target.</p>
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * @public
   * <p>The manage access role that is used to create the subscription target.</p>
   */
  manageAccessRole: string | undefined;

  /**
   * @public
   * <p>The asset types that can be included in the subscription target.</p>
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * @public
   * <p>The provider of the subscription target.</p>
   */
  provider?: string;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateSubscriptionTargetOutput {
  /**
   * @public
   * <p>The ID of the subscription target.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The authorised principals of the subscription target.</p>
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the subscription target was created.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>???</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The ID of the environment in which the subscription target was created.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The name of the subscription target.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of the subscription target.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created the subscription target.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the subscription target.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The timestamp of when the subscription target was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription target was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The manage access role with which the subscription target was created.</p>
   */
  manageAccessRole: string | undefined;

  /**
   * @public
   * <p>The asset types that can be included in the subscription target.</p>
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * @public
   * <p>The configuration of the subscription target.</p>
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * @public
   * <p>The provider of the subscription target.</p>
   */
  provider: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UserType = {
  IAM_ROLE: "IAM_ROLE",
  IAM_USER: "IAM_USER",
  SSO_USER: "SSO_USER",
} as const;

/**
 * @public
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

/**
 * @public
 */
export interface CreateUserProfileInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a user profile is created.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the user for which the user profile is created.</p>
   */
  userIdentifier: string | undefined;

  /**
   * @public
   * <p>The user type of the user for which the user profile is created.</p>
   */
  userType?: UserType;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>The details of an IAM user profile in Amazon DataZone.</p>
 */
export interface IamUserProfileDetails {
  /**
   * @public
   * <p>The ARN of an IAM user profile in Amazon DataZone.</p>
   */
  arn?: string;
}

/**
 * @public
 * <p>The single sign-on details of the user profile.</p>
 */
export interface SsoUserProfileDetails {
  /**
   * @public
   * <p>The username included in the single sign-on details of the user profile.</p>
   */
  username?: string;

  /**
   * @public
   * <p>The first name included in the single sign-on details of the user profile.</p>
   */
  firstName?: string;

  /**
   * @public
   * <p>The last name included in the single sign-on details of the user profile.</p>
   */
  lastName?: string;
}

/**
 * @public
 * <p>The details of the user profile in Amazon DataZone.</p>
 */
export type UserProfileDetails =
  | UserProfileDetails.IamMember
  | UserProfileDetails.SsoMember
  | UserProfileDetails.$UnknownMember;

/**
 * @public
 */
export namespace UserProfileDetails {
  /**
   * @public
   * <p>The IAM details included in the user profile details.</p>
   */
  export interface IamMember {
    iam: IamUserProfileDetails;
    sso?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The single sign-on details included in the user profile details.</p>
   */
  export interface SsoMember {
    iam?: never;
    sso: SsoUserProfileDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    iam?: never;
    sso?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    iam: (value: IamUserProfileDetails) => T;
    sso: (value: SsoUserProfileDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UserProfileDetails, visitor: Visitor<T>): T => {
    if (value.iam !== undefined) return visitor.iam(value.iam);
    if (value.sso !== undefined) return visitor.sso(value.sso);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const UserProfileStatus = {
  ACTIVATED: "ACTIVATED",
  ASSIGNED: "ASSIGNED",
  DEACTIVATED: "DEACTIVATED",
  NOT_ASSIGNED: "NOT_ASSIGNED",
} as const;

/**
 * @public
 */
export type UserProfileStatus = (typeof UserProfileStatus)[keyof typeof UserProfileStatus];

/**
 * @public
 * @enum
 */
export const UserProfileType = {
  IAM: "IAM",
  SSO: "SSO",
} as const;

/**
 * @public
 */
export type UserProfileType = (typeof UserProfileType)[keyof typeof UserProfileType];

/**
 * @public
 */
export interface CreateUserProfileOutput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a user profile is created.</p>
   */
  domainId?: string;

  /**
   * @public
   * <p>The identifier of the user profile.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The type of the user profile.</p>
   */
  type?: UserProfileType;

  /**
   * @public
   * <p>The status of the user profile.</p>
   */
  status?: UserProfileStatus;

  /**
   * @public
   * <p>The details of the user profile in Amazon DataZone.</p>
   */
  details?: UserProfileDetails;
}

/**
 * @public
 * @enum
 */
export const DataAssetActivityStatus = {
  FAILED: "FAILED",
  PUBLISHING_FAILED: "PUBLISHING_FAILED",
  SKIPPED_ALREADY_IMPORTED: "SKIPPED_ALREADY_IMPORTED",
  SKIPPED_ARCHIVED: "SKIPPED_ARCHIVED",
  SKIPPED_NO_ACCESS: "SKIPPED_NO_ACCESS",
  SUCCEEDED_CREATED: "SUCCEEDED_CREATED",
  SUCCEEDED_UPDATED: "SUCCEEDED_UPDATED",
  UNCHANGED: "UNCHANGED",
} as const;

/**
 * @public
 */
export type DataAssetActivityStatus = (typeof DataAssetActivityStatus)[keyof typeof DataAssetActivityStatus];

/**
 * @public
 * <p/>
 */
export interface DataProductItem {
  /**
   * @public
   * <p/>
   */
  itemId?: string;

  /**
   * @public
   * <p/>
   */
  domainId?: string;
}

/**
 * @public
 * <p/>
 */
export interface DataProductSummary {
  /**
   * @public
   * <p/>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p/>
   */
  id: string | undefined;

  /**
   * @public
   * <p/>
   */
  name: string | undefined;

  /**
   * @public
   * <p/>
   */
  owningProjectId: string | undefined;

  /**
   * @public
   * <p/>
   */
  description?: string;

  /**
   * @public
   * <p/>
   */
  glossaryTerms?: string[];

  /**
   * @public
   * <p/>
   */
  dataProductItems?: DataProductItem[];

  /**
   * @public
   * <p/>
   */
  createdAt?: Date;

  /**
   * @public
   * <p/>
   */
  createdBy?: string;

  /**
   * @public
   * <p/>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p/>
   */
  updatedBy?: string;
}

/**
 * @public
 */
export interface DeleteDataSourceInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the data source is deleted.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source that is deleted.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteDataSourceOutput {
  /**
   * @public
   * <p>The ID of the data source that is deleted.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The status of this data source.</p>
   */
  status?: DataSourceStatus;

  /**
   * @public
   * <p>The type of this data source.</p>
   */
  type?: string;

  /**
   * @public
   * <p>The name of the data source that is deleted.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the data source that is deleted.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the data source is deleted.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The ID of the project in which this data source exists and from which it's
   *          deleted.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The ID of the environemnt associated with this data source.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The configuration of the data source that is deleted.</p>
   */
  configuration?: DataSourceConfigurationOutput;

  /**
   * @public
   * <p>The enable setting of the data source that specifies whether the data source is enabled
   *          or disabled.</p>
   */
  enableSetting?: EnableSetting;

  /**
   * @public
   * <p>Specifies whether the assets that this data source creates in the inventory are to be
   *          also automatically published to the catalog.</p>
   */
  publishOnImport?: boolean;

  /**
   * @public
   * <p>The asset data forms associated with this data source.</p>
   */
  assetFormsOutput?: FormOutput[];

  /**
   * @public
   * <p>The schedule of runs for this data source.</p>
   */
  schedule?: ScheduleConfiguration;

  /**
   * @public
   * <p>The status of the last run of this data source.</p>
   */
  lastRunStatus?: DataSourceRunStatus;

  /**
   * @public
   * <p>The timestamp of when the data source was last run.</p>
   */
  lastRunAt?: Date;

  /**
   * @public
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   */
  lastRunErrorMessage?: DataSourceErrorMessage;

  /**
   * @public
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   */
  errorMessage?: DataSourceErrorMessage;

  /**
   * @public
   * <p>The timestamp of when this data source was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when this data source was updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface GetDataSourceInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the data source exists.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone data source.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDataSourceOutput {
  /**
   * @public
   * <p>The ID of the data source.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The status of the data source.</p>
   */
  status?: DataSourceStatus;

  /**
   * @public
   * <p>The type of the data source.</p>
   */
  type?: string;

  /**
   * @public
   * <p>The name of the data source.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the data source.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the data source exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The ID of the project where the data source creates and publishes assets.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The ID of the environment where this data source creates and publishes assets,</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The configuration of the data source.</p>
   */
  configuration?: DataSourceConfigurationOutput;

  /**
   * @public
   * <p/>
   */
  recommendation?: RecommendationConfiguration;

  /**
   * @public
   * <p>Specifies whether this data source is enabled or not.</p>
   */
  enableSetting?: EnableSetting;

  /**
   * @public
   * <p>Specifies whether the assets that this data source creates in the inventory are to be
   *          also automatically published to the catalog.</p>
   */
  publishOnImport?: boolean;

  /**
   * @public
   * <p>The metadata forms attached to the assets created by this data source.</p>
   */
  assetFormsOutput?: FormOutput[];

  /**
   * @public
   * <p>The schedule of the data source runs.</p>
   */
  schedule?: ScheduleConfiguration;

  /**
   * @public
   * <p>The status of the last run of the data source.</p>
   */
  lastRunStatus?: DataSourceRunStatus;

  /**
   * @public
   * <p>The timestamp of the last run of the data source.</p>
   */
  lastRunAt?: Date;

  /**
   * @public
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   */
  lastRunErrorMessage?: DataSourceErrorMessage;

  /**
   * @public
   * <p>The number of assets created by the data source during its last run.</p>
   */
  lastRunAssetCount?: number;

  /**
   * @public
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   */
  errorMessage?: DataSourceErrorMessage;

  /**
   * @public
   * <p>The timestamp of when the data source was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the data source was updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface ListDataSourcesInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which to list the data sources.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the project in which to list data sources.</p>
   */
  projectIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the environment in which to list the data sources.</p>
   */
  environmentIdentifier?: string;

  /**
   * @public
   * <p>The type of the data source.</p>
   */
  type?: string;

  /**
   * @public
   * <p>The status of the data source.</p>
   */
  status?: DataSourceStatus;

  /**
   * @public
   * <p>The name of the data source.</p>
   */
  name?: string;

  /**
   * @public
   * <p>When the number of data sources is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of data sources, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListDataSources</code> to
   *          list the next set of data sources.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of data sources to return in a single call to
   *             <code>ListDataSources</code>. When the number of data sources to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>ListDataSources</code> to list the
   *          next set of data sources.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The details of the data source.</p>
 */
export interface DataSourceSummary {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the data source exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The ID of the environment in which the data source exists.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The ID of the data source.</p>
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * <p>The name of the data source.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of the data source.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The status of the data source.</p>
   */
  status: DataSourceStatus | undefined;

  /**
   * @public
   * <p>Specifies whether the data source is enabled.</p>
   */
  enableSetting?: EnableSetting;

  /**
   * @public
   * <p>The details of the schedule of the data source runs.</p>
   */
  schedule?: ScheduleConfiguration;

  /**
   * @public
   * <p>The status of the last data source run.</p>
   */
  lastRunStatus?: DataSourceRunStatus;

  /**
   * @public
   * <p>The timestamp of when the data source run was last performed.</p>
   */
  lastRunAt?: Date;

  /**
   * @public
   * <p>The details of the error message that is returned if the operation cannot be
   *          successfully completed.</p>
   */
  lastRunErrorMessage?: DataSourceErrorMessage;

  /**
   * @public
   * <p>The count of the assets created during the last data source run.</p>
   */
  lastRunAssetCount?: number;

  /**
   * @public
   * <p>The timestamp of when the data source was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the data source was updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface ListDataSourcesOutput {
  /**
   * @public
   * <p>The results of the <code>ListDataSources</code> action.</p>
   */
  items: DataSourceSummary[] | undefined;

  /**
   * @public
   * <p>When the number of data sources is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of data sources, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListDataSources</code> to
   *          list the next set of data sources.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateDataSourceInput {
  /**
   * @public
   * <p>The identifier of the domain in which to update a data source.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source to be updated.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The name to be updated as part of the <code>UpdateDataSource</code> action.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The enable setting to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   */
  enableSetting?: EnableSetting;

  /**
   * @public
   * <p>The publish on import setting to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   */
  publishOnImport?: boolean;

  /**
   * @public
   * <p>The asset forms to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   */
  assetFormsInput?: FormInput[];

  /**
   * @public
   * <p>The schedule to be updated as part of the <code>UpdateDataSource</code> action.</p>
   */
  schedule?: ScheduleConfiguration;

  /**
   * @public
   * <p>The configuration to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   */
  configuration?: DataSourceConfigurationInput;

  /**
   * @public
   * <p>The recommendation to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   */
  recommendation?: RecommendationConfiguration;
}

/**
 * @public
 */
export interface UpdateDataSourceOutput {
  /**
   * @public
   * <p>The identifier of the data source to be updated.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The status to be updated as part of the <code>UpdateDataSource</code> action.</p>
   */
  status?: DataSourceStatus;

  /**
   * @public
   * <p>The type to be updated as part of the <code>UpdateDataSource</code> action.</p>
   */
  type?: string;

  /**
   * @public
   * <p>The name to be updated as part of the <code>UpdateDataSource</code> action.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a data source is to be updated.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The identifier of the project where data source is to be updated.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The identifier of the environment in which a data source is to be updated.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The configuration to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   */
  configuration?: DataSourceConfigurationOutput;

  /**
   * @public
   * <p>The recommendation to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   */
  recommendation?: RecommendationConfiguration;

  /**
   * @public
   * <p>The enable setting to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   */
  enableSetting?: EnableSetting;

  /**
   * @public
   * <p>The publish on import setting to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   */
  publishOnImport?: boolean;

  /**
   * @public
   * <p>The asset forms to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   */
  assetFormsOutput?: FormOutput[];

  /**
   * @public
   * <p>The schedule to be updated as part of the <code>UpdateDataSource</code> action.</p>
   */
  schedule?: ScheduleConfiguration;

  /**
   * @public
   * <p>The last run status of the data source.</p>
   */
  lastRunStatus?: DataSourceRunStatus;

  /**
   * @public
   * <p>The timestamp of when the data source was last run.</p>
   */
  lastRunAt?: Date;

  /**
   * @public
   * <p>The last run error message of the data source.</p>
   */
  lastRunErrorMessage?: DataSourceErrorMessage;

  /**
   * @public
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   */
  errorMessage?: DataSourceErrorMessage;

  /**
   * @public
   * <p>The timestamp of when the data source was updated.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the data source was updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 * @enum
 */
export const DataSourceRunType = {
  PRIORITIZED: "PRIORITIZED",
  SCHEDULED: "SCHEDULED",
} as const;

/**
 * @public
 */
export type DataSourceRunType = (typeof DataSourceRunType)[keyof typeof DataSourceRunType];

/**
 * @public
 */
export interface GetDataSourceRunInput {
  /**
   * @public
   * <p>The ID of the domain in which this data source run was performed.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the data source run.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 * <p>The asset statistics from the data source run.</p>
 */
export interface RunStatisticsForAssets {
  /**
   * @public
   * <p>The <code>added</code> statistic for the data source run.</p>
   */
  added?: number;

  /**
   * @public
   * <p>The <code>updated</code> statistic for the data source run.</p>
   */
  updated?: number;

  /**
   * @public
   * <p>The <code>unchanged</code> statistic for the data source run.</p>
   */
  unchanged?: number;

  /**
   * @public
   * <p>The <code>skipped</code> statistic for the data source run.</p>
   */
  skipped?: number;

  /**
   * @public
   * <p>The <code>failed</code> statistic for the data source run.</p>
   */
  failed?: number;
}

/**
 * @public
 */
export interface GetDataSourceRunOutput {
  /**
   * @public
   * <p>The ID of the domain in which this data source run was performed.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The ID of the data source for this data source run.</p>
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * <p>The ID of the data source run.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ID of the project in which this data source run occured.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The status of this data source run.</p>
   */
  status: DataSourceRunStatus | undefined;

  /**
   * @public
   * <p>The type of this data source run.</p>
   */
  type: DataSourceRunType | undefined;

  /**
   * @public
   * <p>The configuration snapshot of the data source run.</p>
   */
  dataSourceConfigurationSnapshot?: string;

  /**
   * @public
   * <p>The asset statistics from this data source run.</p>
   */
  runStatisticsForAssets?: RunStatisticsForAssets;

  /**
   * @public
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   */
  errorMessage?: DataSourceErrorMessage;

  /**
   * @public
   * <p>The timestamp of when the data source run was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when this data source run was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when this data source run started.</p>
   */
  startedAt?: Date;

  /**
   * @public
   * <p>The timestamp of when this data source run stopped.</p>
   */
  stoppedAt?: Date;
}

/**
 * @public
 */
export interface ListDataSourceRunsInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which to invoke the
   *             <code>ListDataSourceRuns</code> action.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source.</p>
   */
  dataSourceIdentifier: string | undefined;

  /**
   * @public
   * <p>The status of the data source.</p>
   */
  status?: DataSourceRunStatus;

  /**
   * @public
   * <p>When the number of runs is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of runs, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>ListDataSourceRuns</code> to list the next set of
   *          runs.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of runs to return in a single call to
   *          <code>ListDataSourceRuns</code>. When the number of runs to be listed is greater than the
   *          value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value that
   *          you can use in a subsequent call to <code>ListDataSourceRuns</code> to list the next set of
   *          runs.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The details of a data source run.</p>
 */
export interface DataSourceRunSummary {
  /**
   * @public
   * <p>The identifier of the data source run.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source of the data source run.</p>
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * <p>The type of the data source run.</p>
   */
  type: DataSourceRunType | undefined;

  /**
   * @public
   * <p>The status of the data source run.</p>
   */
  status: DataSourceRunStatus | undefined;

  /**
   * @public
   * <p>The project ID of the data source run.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The asset statistics from the data source run.</p>
   */
  runStatisticsForAssets?: RunStatisticsForAssets;

  /**
   * @public
   * <p>The details of the error message that is returned if the operation cannot be
   *          successfully completed.</p>
   */
  errorMessage?: DataSourceErrorMessage;

  /**
   * @public
   * <p>The timestamp of when a data source run was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when a data source run was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when a data source run was started.</p>
   */
  startedAt?: Date;

  /**
   * @public
   * <p>The timestamp of when a data source run was stopped.</p>
   */
  stoppedAt?: Date;
}

/**
 * @public
 */
export interface ListDataSourceRunsOutput {
  /**
   * @public
   * <p>The results of the <code>ListDataSourceRuns</code> action.</p>
   */
  items: DataSourceRunSummary[] | undefined;

  /**
   * @public
   * <p>When the number of runs is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of runs, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>ListDataSourceRuns</code> to list the next set of
   *          runs.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartDataSourceRunInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which to start a data source run.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source.</p>
   */
  dataSourceIdentifier: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface StartDataSourceRunOutput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which to start a data source run.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source.</p>
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source run.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The identifier of the project.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The status of the data source run.</p>
   */
  status: DataSourceRunStatus | undefined;

  /**
   * @public
   * <p>The type of the data source run.</p>
   */
  type: DataSourceRunType | undefined;

  /**
   * @public
   * <p>The configuration snapshot of the data source that is being run.</p>
   */
  dataSourceConfigurationSnapshot?: string;

  /**
   * @public
   * <p>Specifies run statistics for assets.</p>
   */
  runStatisticsForAssets?: RunStatisticsForAssets;

  /**
   * @public
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   */
  errorMessage?: DataSourceErrorMessage;

  /**
   * @public
   * <p>The timestamp of when data source run was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the data source run was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the data source run was started.</p>
   */
  startedAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the data source run was stopped.</p>
   */
  stoppedAt?: Date;
}

/**
 * @public
 * <p>The activity details of the data source run.</p>
 */
export interface DataSourceRunActivity {
  /**
   * @public
   * <p>The database included in the data source run activity.</p>
   */
  database: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source for the data source run activity.</p>
   */
  dataSourceRunId: string | undefined;

  /**
   * @public
   * <p>The technical name included in the data source run activity.</p>
   */
  technicalName: string | undefined;

  /**
   * @public
   * <p>The status of the asset included in the data source run activity.</p>
   */
  dataAssetStatus: DataAssetActivityStatus | undefined;

  /**
   * @public
   * <p>The project ID included in the data source run activity.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The identifier of the asset included in the data source run activity.</p>
   */
  dataAssetId?: string;

  /**
   * @public
   * <p>The technical description included in the data source run activity.</p>
   */
  technicalDescription?: string;

  /**
   * @public
   * <p>The details of the error message that is returned if the operation cannot be
   *          successfully completed.</p>
   */
  errorMessage?: DataSourceErrorMessage;

  /**
   * @public
   * <p>The timestamp of when data source run activity was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when data source run activity was updated.</p>
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the environment is deleted.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the environment that is to be deleted.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentProfileInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the environment profile is deleted.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the environment profile that is deleted.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the project is deleted.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the project that is to be deleted.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectOutput {}

/**
 * @public
 */
export interface DeleteProjectMembershipInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain where project membership is deleted.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone project the membership to which is deleted.</p>
   */
  projectIdentifier: string | undefined;

  /**
   * @public
   * <p>The project member whose project membership is deleted.</p>
   */
  member: Member | undefined;
}

/**
 * @public
 */
export interface DeleteProjectMembershipOutput {}

/**
 * @public
 */
export interface DeleteSubscriptionGrantInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain where the subscription grant is deleted.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the subscription grant that is deleted.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriptionGrantOutput {
  /**
   * @public
   * <p>The ID of the subscription grant that is deleted.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created the subscription grant that is deleted.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the subscription grant that is deleted.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the subscription grant is deleted.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription grant that is deleted was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription grant that is deleted was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The ID of the subscription target associated with the subscription grant that is
   *          deleted.</p>
   */
  subscriptionTargetId: string | undefined;

  /**
   * @public
   * <p>The entity to which the subscription is deleted.</p>
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * @public
   * <p>The status of the subscription grant that is deleted.</p>
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * @public
   * <p>The assets for which the subsctiption grant that is deleted gave access.</p>
   */
  assets?: SubscribedAsset[];

  /**
   * @public
   * <p>The identifier of the subsctiption whose subscription grant is to be deleted.</p>
   */
  subscriptionId?: string;
}

/**
 * @public
 */
export interface DeleteSubscriptionRequestInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the subscription request is deleted.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the subscription request that is deleted.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriptionTargetInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the subscription target is deleted.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone environment in which the subscription target is deleted.</p>
   */
  environmentIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the subscription target that is deleted.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainInput {
  /**
   * @public
   * <p>The identifier of the Amazon Web Services domain that is to be deleted.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteDomainOutput {
  /**
   * @public
   * <p>The status of the domain.</p>
   */
  status: DomainStatus | undefined;
}

/**
 * @public
 */
export interface GetDomainInput {
  /**
   * @public
   * <p>The identifier of the specified Amazon DataZone domain.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDomainOutput {
  /**
   * @public
   * <p>The identifier of the specified Amazon DataZone domain.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the Amazon DataZone domain.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the Amazon DataZone domain.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The single sing-on option of the specified Amazon DataZone domain.</p>
   */
  singleSignOn?: SingleSignOn;

  /**
   * @public
   * <p>The domain execution role with which the Amazon DataZone domain is created.</p>
   */
  domainExecutionRole: string | undefined;

  /**
   * @public
   * <p>The ARN of the specified Amazon DataZone domain.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services Key Management Service (KMS) key that is used
   *          to encrypt the Amazon DataZone domain, metadata, and reporting data. </p>
   */
  kmsKeyIdentifier?: string;

  /**
   * @public
   * <p>The status of the specified Amazon DataZone domain.</p>
   */
  status: DomainStatus | undefined;

  /**
   * @public
   * <p>The URL of the data portal for this Amazon DataZone domain.</p>
   */
  portalUrl?: string;

  /**
   * @public
   * <p>The timestamp of when the Amazon DataZone domain was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the Amazon DataZone domain was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The tags specified for the Amazon DataZone domain.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListDomainsInput {
  /**
   * @public
   * <p>The status of the data source.</p>
   */
  status?: DomainStatus;

  /**
   * @public
   * <p>The maximum number of domains to return in a single call to <code>ListDomains</code>.
   *          When the number of domains to be listed is greater than the value of
   *             <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you
   *          can use in a subsequent call to <code>ListDomains</code> to list the next set of
   *          domains.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>When the number of domains is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of domains, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>ListDomains</code> to list the next set of
   *          domains.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A summary of a Amazon DataZone domain.</p>
 */
export interface DomainSummary {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>A name of an Amazon DataZone domain.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description of an Amazon DataZone domain.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ARN of the Amazon DataZone domain.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services account that manages the domain.</p>
   */
  managedAccountId: string | undefined;

  /**
   * @public
   * <p>The status of the Amazon DataZone domain.</p>
   */
  status: DomainStatus | undefined;

  /**
   * @public
   * <p>The data portal URL for the Amazon DataZone domain.</p>
   */
  portalUrl?: string;

  /**
   * @public
   * <p>A timestamp of when a Amazon DataZone domain was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>A timestamp of when a Amazon DataZone domain was last updated.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface ListDomainsOutput {
  /**
   * @public
   * <p>The results of the <code>ListDomains</code> action.</p>
   */
  items: DomainSummary[] | undefined;

  /**
   * @public
   * <p>When the number of domains is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of domains, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>ListDomains</code> to list the next set of
   *          domains.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateDomainInput {
  /**
   * @public
   * <p>The ID of the Amazon Web Services domain that is to be updated.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The description to be updated as part of the <code>UpdateDomain</code> action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The single sign-on option to be updated as part of the <code>UpdateDomain</code>
   *          action.</p>
   */
  singleSignOn?: SingleSignOn;

  /**
   * @public
   * <p>The domain execution role to be updated as part of the <code>UpdateDomain</code>
   *          action.</p>
   */
  domainExecutionRole?: string;

  /**
   * @public
   * <p>The name to be updated as part of the <code>UpdateDomain</code> action.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateDomainOutput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The description to be updated as part of the <code>UpdateDomain</code> action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The single sign-on option of the Amazon DataZone domain.</p>
   */
  singleSignOn?: SingleSignOn;

  /**
   * @public
   * <p>The domain execution role to be updated as part of the <code>UpdateDomain</code>
   *          action.</p>
   */
  domainExecutionRole?: string;

  /**
   * @public
   * <p>The name to be updated as part of the <code>UpdateDomain</code> action.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Specifies the timestamp of when the domain was last updated.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface DeleteEnvironmentBlueprintConfigurationInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the blueprint configuration is deleted.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the blueprint the configuration of which is deleted.</p>
   */
  environmentBlueprintIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentBlueprintConfigurationOutput {}

/**
 * @public
 */
export interface GetEnvironmentBlueprintConfigurationInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain where this blueprint exists.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>He ID of the blueprint.</p>
   */
  environmentBlueprintIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentBlueprintConfigurationOutput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain where this blueprint exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The ID of the blueprint.</p>
   */
  environmentBlueprintId: string | undefined;

  /**
   * @public
   * <p>The ARN of the provisioning role with which this blueprint is created.</p>
   */
  provisioningRoleArn?: string;

  /**
   * @public
   * <p>The ARN of the manage access role with which this blueprint is created.</p>
   */
  manageAccessRoleArn?: string;

  /**
   * @public
   * <p>The Amazon Web Services regions in which this blueprint is enabled.</p>
   */
  enabledRegions?: string[];

  /**
   * @public
   * <p>The regional parameters of the blueprint.</p>
   */
  regionalParameters?: Record<string, Record<string, string>>;

  /**
   * @public
   * <p>The timestamp of when this blueprint was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when this blueprint was upated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface ListEnvironmentBlueprintConfigurationsInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The maximum number of blueprint configurations to return in a single call to
   *             <code>ListEnvironmentBlueprintConfigurations</code>. When the number of configurations
   *          to be listed is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListEnvironmentBlueprintConfigurations</code> to list the next set of
   *          configurations.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>When the number of blueprint configurations is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of configurations, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListEnvironmentBlueprintConfigurations</code> to list the next set of
   *          configurations.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The configuration details of an environment blueprint.</p>
 */
export interface EnvironmentBlueprintConfigurationItem {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which an environment blueprint exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The identifier of the environment blueprint.</p>
   */
  environmentBlueprintId: string | undefined;

  /**
   * @public
   * <p>The ARN of the provisioning role specified in the environment blueprint
   *          configuration.</p>
   */
  provisioningRoleArn?: string;

  /**
   * @public
   * <p>The ARN of the manage access role specified in the environment blueprint
   *          configuration.</p>
   */
  manageAccessRoleArn?: string;

  /**
   * @public
   * <p>The enabled Amazon Web Services Regions specified in a blueprint configuration.</p>
   */
  enabledRegions?: string[];

  /**
   * @public
   * <p>The regional parameters of the environment blueprint.</p>
   */
  regionalParameters?: Record<string, Record<string, string>>;

  /**
   * @public
   * <p>The timestamp of when an environment blueprint was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the environment blueprint was updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface ListEnvironmentBlueprintConfigurationsOutput {
  /**
   * @public
   * <p>The results of the <code>ListEnvironmentBlueprintConfigurations</code> action.</p>
   */
  items?: EnvironmentBlueprintConfigurationItem[];

  /**
   * @public
   * <p>When the number of blueprint configurations is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of configurations, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListEnvironmentBlueprintConfigurations</code> to list the next set of
   *          configurations.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface PutEnvironmentBlueprintConfigurationInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the environment blueprint.</p>
   */
  environmentBlueprintIdentifier: string | undefined;

  /**
   * @public
   * <p>The ARN of the provisioning role.</p>
   */
  provisioningRoleArn?: string;

  /**
   * @public
   * <p>The ARN of the manage access role.</p>
   */
  manageAccessRoleArn?: string;

  /**
   * @public
   * <p>Specifies the enabled Amazon Web Services Regions.</p>
   */
  enabledRegions: string[] | undefined;

  /**
   * @public
   * <p>The regional parameters in the environment blueprint.</p>
   */
  regionalParameters?: Record<string, Record<string, string>>;
}

/**
 * @public
 */
export interface PutEnvironmentBlueprintConfigurationOutput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The identifier of the environment blueprint.</p>
   */
  environmentBlueprintId: string | undefined;

  /**
   * @public
   * <p>The ARN of the provisioning role.</p>
   */
  provisioningRoleArn?: string;

  /**
   * @public
   * <p>The ARN of the manage access role.</p>
   */
  manageAccessRoleArn?: string;

  /**
   * @public
   * <p>Specifies the enabled Amazon Web Services Regions.</p>
   */
  enabledRegions?: string[];

  /**
   * @public
   * <p>The regional parameters in the environment blueprint.</p>
   */
  regionalParameters?: Record<string, Record<string, string>>;

  /**
   * @public
   * <p>The timestamp of when the environment blueprint was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the environment blueprint was updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface DeleteFormTypeInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the metadata form type is deleted.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the metadata form type that is deleted.</p>
   */
  formTypeIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteFormTypeOutput {}

/**
 * @public
 */
export interface GetFormTypeInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which this metadata form type exists.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the metadata form type.</p>
   */
  formTypeIdentifier: string | undefined;

  /**
   * @public
   * <p>The revision of this metadata form type.</p>
   */
  revision?: string;
}

/**
 * @public
 * <p>The details of the import of the metadata form type.</p>
 */
export interface Import {
  /**
   * @public
   * <p>The name of the import.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The revision of the import.</p>
   */
  revision: string | undefined;
}

/**
 * @public
 */
export interface GetFormTypeOutput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which this metadata form type exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The name of the metadata form type.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The revision of the metadata form type.</p>
   */
  revision: string | undefined;

  /**
   * @public
   * <p>The model of the metadata form type.</p>
   */
  model: Model | undefined;

  /**
   * @public
   * <p>The ID of the project that owns this metadata form type.</p>
   */
  owningProjectId?: string;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the metadata form type was originally
   *          created.</p>
   */
  originDomainId?: string;

  /**
   * @public
   * <p>The ID of the project in which this metadata form type was originally created.</p>
   */
  originProjectId?: string;

  /**
   * @public
   * <p>The status of the metadata form type.</p>
   */
  status?: FormTypeStatus;

  /**
   * @public
   * <p>The timestamp of when this metadata form type was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who created this metadata form type.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The description of the metadata form type.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The imports of the metadata form type.</p>
   */
  imports?: Import[];
}

/**
 * @public
 */
export interface GetEnvironmentInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain where the environment exists.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone environment.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentOutput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone project in which this environment is created.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The ID of the environment.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain where the environment exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created the environment.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The timestamp of when the environment was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when this environment was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The name of the environment.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the environment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ID of the environment profile with which the environment is created.</p>
   */
  environmentProfileId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account where the environment exists.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services region where the environment exists.</p>
   */
  awsAccountRegion?: string;

  /**
   * @public
   * <p>The provider of this Amazon DataZone environment.</p>
   */
  provider: string | undefined;

  /**
   * @public
   * <p>The provisioned resources of this Amazon DataZone environment.</p>
   */
  provisionedResources?: Resource[];

  /**
   * @public
   * <p>The status of this Amazon DataZone environment.</p>
   */
  status?: EnvironmentStatus;

  /**
   * @public
   * <p>The actions of the environment.</p>
   */
  environmentActions?: ConfigurableEnvironmentAction[];

  /**
   * @public
   * <p>The business glossary terms that can be used in this environment.</p>
   */
  glossaryTerms?: string[];

  /**
   * @public
   * <p>The user parameters of this Amazon DataZone environment.</p>
   */
  userParameters?: CustomParameter[];

  /**
   * @public
   * <p>The details of the last deployment of the environment.</p>
   */
  lastDeployment?: Deployment;

  /**
   * @public
   * <p>The provisioning properties of this Amazon DataZone environment.</p>
   */
  provisioningProperties?: ProvisioningProperties;

  /**
   * @public
   * <p>The deployment properties of the environment.</p>
   */
  deploymentProperties?: DeploymentProperties;

  /**
   * @public
   * <p>The blueprint with which the environment is created.</p>
   */
  environmentBlueprintId?: string;
}

/**
 * @public
 */
export interface GetEnvironmentBlueprintInput {
  /**
   * @public
   * <p>The identifier of the domain in which this blueprint exists.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of this Amazon DataZone blueprint.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentBlueprintOutput {
  /**
   * @public
   * <p>The ID of this Amazon DataZone blueprint.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of this Amazon DataZone blueprint.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of this Amazon DataZone blueprint.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The provider of this Amazon DataZone blueprint.</p>
   */
  provider: string | undefined;

  /**
   * @public
   * <p>The provisioning properties of this Amazon DataZone blueprint.</p>
   */
  provisioningProperties: ProvisioningProperties | undefined;

  /**
   * @public
   * <p>The deployment properties of this Amazon DataZone blueprint.</p>
   */
  deploymentProperties?: DeploymentProperties;

  /**
   * @public
   * <p>The user parameters of this blueprint.</p>
   */
  userParameters?: CustomParameter[];

  /**
   * @public
   * <p>The glossary terms attached to this Amazon DataZone blueprint.</p>
   */
  glossaryTerms?: string[];

  /**
   * @public
   * <p>A timestamp of when this blueprint was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when this blueprint was updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface GetEnvironmentProfileInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which this environment profile exists.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the environment profile.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentProfileOutput {
  /**
   * @public
   * <p>The ID of the environment profile.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which this environment profile exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account where this environment profile exists.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services region where this environment profile exists.</p>
   */
  awsAccountRegion?: string;

  /**
   * @public
   * <p>The Amazon DataZone user who created this environment profile.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The timestamp of when this environment profile was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when this environment profile was upated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The name of the environment profile.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the environment profile.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ID of the blueprint with which this environment profile is created.</p>
   */
  environmentBlueprintId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone project in which this environment profile is created.</p>
   */
  projectId?: string;

  /**
   * @public
   * <p>The user parameters of the environment profile.</p>
   */
  userParameters?: CustomParameter[];
}

/**
 * @public
 */
export interface GetGroupProfileInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the group profile exists.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the group profile.</p>
   */
  groupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetGroupProfileOutput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the group profile exists.</p>
   */
  domainId?: string;

  /**
   * @public
   * <p>The identifier of the group profile.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The identifier of the group profile.</p>
   */
  status?: GroupProfileStatus;

  /**
   * @public
   * <p>The name of the group for which the specified group profile exists.</p>
   */
  groupName?: string;
}

/**
 * @public
 */
export interface GetIamPortalLoginUrlInput {
  /**
   * @public
   * <p>the ID of the Amazon DataZone domain the data portal of which you want to get.</p>
   */
  domainIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetIamPortalLoginUrlOutput {
  /**
   * @public
   * <p>The data portal URL of the specified Amazon DataZone domain.</p>
   */
  authCodeUrl?: string;

  /**
   * @public
   * <p>The ID of the user profile.</p>
   */
  userProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetProjectInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the project exists.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the project.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetProjectOutput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the project exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>&gt;The ID of the project.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the project.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the project.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon DataZone user who created the project.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The timestamp of when the project was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the project was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The business glossary terms that can be used in the project.</p>
   */
  glossaryTerms?: string[];
}

/**
 * @public
 */
export interface GetSubscriptionInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the subscription exists.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the subscription.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionOutput {
  /**
   * @public
   * <p>The ID of the subscription.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created the subscription.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the subscription.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the subscription exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The status of the subscription.</p>
   */
  status: SubscriptionStatus | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The principal that owns the subscription.</p>
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * @public
   * <p/>
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * @public
   * <p>The ID of the subscription request.</p>
   */
  subscriptionRequestId?: string;

  /**
   * @public
   * <p>The retain permissions of the subscription.</p>
   */
  retainPermissions?: boolean;
}

/**
 * @public
 */
export interface GetSubscriptionGrantInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the subscription grant exists.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the subscription grant.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionGrantOutput {
  /**
   * @public
   * <p>The ID of the subscription grant.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created the subscription grant.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the subscription grant.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the subscription grant exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription grant is created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription grant was upated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The subscription target ID associated with the subscription grant.</p>
   */
  subscriptionTargetId: string | undefined;

  /**
   * @public
   * <p>The entity to which the subscription is granted.</p>
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * @public
   * <p>The status of the subscription grant.</p>
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * @public
   * <p>The assets for which the subscription grant is created.</p>
   */
  assets?: SubscribedAsset[];

  /**
   * @public
   * <p>The identifier of the subscription.</p>
   */
  subscriptionId?: string;
}

/**
 * @public
 */
export interface GetSubscriptionRequestDetailsInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which to get the subscription request
   *          details.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the subscription request the details of which to get.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionRequestDetailsOutput {
  /**
   * @public
   * <p>The identifier of the subscription request.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created the subscription request.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the subscription request.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The Amazon DataZone domain of the subscription request.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The status of the subscription request.</p>
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * @public
   * <p>The timestamp of when the specified subscription request was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription request was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The reason for the subscription request.</p>
   */
  requestReason: string | undefined;

  /**
   * @public
   * <p>The subscribed principals in the subscription request.</p>
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * @public
   * <p>The subscribed listings in the subscription request.</p>
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone user who reviewed the subscription request.</p>
   */
  reviewerId?: string;

  /**
   * @public
   * <p>The decision comment of the subscription request.</p>
   */
  decisionComment?: string;
}

/**
 * @public
 */
export interface GetSubscriptionTargetInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the subscription target exists.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the environment associated with the subscription target.</p>
   */
  environmentIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the subscription target.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionTargetOutput {
  /**
   * @public
   * <p>The ID of the subscription target.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The authorized principals of the subscription target.</p>
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the subscription target exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The ID of the project associated with the subscription target.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The ID of the environment associated with the subscription target.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The name of the subscription target.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of the subscription target.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created the subscription target.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the subscription target.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The timestamp of when the subscription target was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription target was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The manage access role with which the subscription target was created.</p>
   */
  manageAccessRole: string | undefined;

  /**
   * @public
   * <p>The asset types associated with the subscription target.</p>
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * @public
   * <p>The configuration of teh subscription target.</p>
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * @public
   * <p>The provider of the subscription target.</p>
   */
  provider: string | undefined;
}

/**
 * @public
 */
export interface GetUserProfileInput {
  /**
   * @public
   * <p>the ID of the Amazon DataZone domain the data portal of which you want to get.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the user for which you want to get the user profile.</p>
   */
  userIdentifier: string | undefined;

  /**
   * @public
   * <p>The type of the user profile.</p>
   */
  type?: UserProfileType;
}

/**
 * @public
 */
export interface GetUserProfileOutput {
  /**
   * @public
   * <p>the identifier of the Amazon DataZone domain of which you want to get the user
   *          profile.</p>
   */
  domainId?: string;

  /**
   * @public
   * <p>The identifier of the user profile.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The type of the user profile.</p>
   */
  type?: UserProfileType;

  /**
   * @public
   * <p>The status of the user profile.</p>
   */
  status?: UserProfileStatus;

  /**
   * @public
   * <p>The details of the user profile in Amazon DataZone.</p>
   */
  details?: UserProfileDetails;
}

/**
 * @public
 */
export interface DeleteGlossaryInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the business glossary is deleted.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the business glossary that is deleted.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlossaryOutput {}

/**
 * @public
 */
export interface GetGlossaryInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which this business glossary exists.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the business glossary.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetGlossaryOutput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which this business glossary exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The ID of the business glossary.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ID of the project that owns this business glossary.</p>
   */
  owningProjectId: string | undefined;

  /**
   * @public
   * <p>The name of the business glossary.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the business glossary.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status of the business glossary.</p>
   */
  status: GlossaryStatus | undefined;

  /**
   * @public
   * <p>The timestamp of when this business glossary was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who created this business glossary.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The timestamp of when the business glossary was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the business glossary.</p>
   */
  updatedBy?: string;
}

/**
 * @public
 */
export interface UpdateGlossaryInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a business glossary is to be
   *          updated.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the business glossary to be updated.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The name to be updated as part of the <code>UpdateGlossary</code> action.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description to be updated as part of the <code>UpdateGlossary</code> action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status to be updated as part of the <code>UpdateGlossary</code> action.</p>
   */
  status?: GlossaryStatus;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateGlossaryOutput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a business glossary is to be
   *          updated.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The identifier of the business glossary that is to be updated.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name to be updated as part of the <code>UpdateGlossary</code> action.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The identifier of the project in which to update a business glossary.</p>
   */
  owningProjectId: string | undefined;

  /**
   * @public
   * <p>The description to be updated as part of the <code>UpdateGlossary</code> action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status to be updated as part of the <code>UpdateGlossary</code> action.</p>
   */
  status?: GlossaryStatus;
}

/**
 * @public
 */
export interface DeleteGlossaryTermInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which the business glossary term is deleted.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the business glossary term that is deleted.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlossaryTermOutput {}

/**
 * @public
 */
export interface GetGlossaryTermInput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which this business glossary term exists.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the business glossary term.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetGlossaryTermOutput {
  /**
   * @public
   * <p>The ID of the Amazon DataZone domain in which this business glossary term exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The ID of the business glossary to which this term belongs.</p>
   */
  glossaryId: string | undefined;

  /**
   * @public
   * <p>The ID of the business glossary term.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the business glossary term.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The short decription of the business glossary term.</p>
   */
  shortDescription?: string;

  /**
   * @public
   * <p>The long description of the business glossary term.</p>
   */
  longDescription?: string;

  /**
   * @public
   * <p>The relations of the business glossary term.</p>
   */
  termRelations?: TermRelations;

  /**
   * @public
   * <p>The status of the business glossary term.</p>
   */
  status: GlossaryTermStatus | undefined;

  /**
   * @public
   * <p>The timestamp of when the business glossary term was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who created the business glossary.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The timestamp of when the business glossary term was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the business glossary term.</p>
   */
  updatedBy?: string;
}

/**
 * @public
 */
export interface UpdateGlossaryTermInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a business glossary term is to be
   *          updated.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the business glossary in which a term is to be updated.</p>
   */
  glossaryIdentifier?: string;

  /**
   * @public
   * <p>The identifier of the business glossary term that is to be updated.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The name to be updated as part of the <code>UpdateGlossaryTerm</code> action.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The short description to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   */
  shortDescription?: string;

  /**
   * @public
   * <p>The long description to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   */
  longDescription?: string;

  /**
   * @public
   * <p>The term relations to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   */
  termRelations?: TermRelations;

  /**
   * @public
   * <p>The status to be updated as part of the <code>UpdateGlossaryTerm</code> action.</p>
   */
  status?: GlossaryTermStatus;
}

/**
 * @public
 */
export interface UpdateGlossaryTermOutput {
  /**
   * @public
   * <p>The identifier of the business glossary term that is to be updated.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a business glossary term is to be
   *          updated.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The identifier of the business glossary in which a term is to be updated.</p>
   */
  glossaryId: string | undefined;

  /**
   * @public
   * <p>The name to be updated as part of the <code>UpdateGlossaryTerm</code> action.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The status to be updated as part of the <code>UpdateGlossaryTerm</code> action.</p>
   */
  status: GlossaryTermStatus | undefined;

  /**
   * @public
   * <p>The short description to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   */
  shortDescription?: string;

  /**
   * @public
   * <p>The long description to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   */
  longDescription?: string;

  /**
   * @public
   * <p>The term relations to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   */
  termRelations?: TermRelations;
}

/**
 * @public
 */
export interface ListAssetRevisionsInput {
  /**
   * @public
   * <p>The identifier of the domain.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the asset.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>When the number of revisions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of revisions, the response includes
   *          a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListAssetRevisions</code> to
   *          list the next set of revisions.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of revisions to return in a single call to
   *             <code>ListAssetRevisions</code>. When the number of revisions to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>ListAssetRevisions</code> to list the
   *          next set of revisions.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAssetRevisionsOutput {
  /**
   * @public
   * <p>The results of the <code>ListAssetRevisions</code> action.</p>
   */
  items?: AssetRevision[];

  /**
   * @public
   * <p>When the number of revisions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of revisions, the response includes
   *          a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListAssetRevisions</code> to
   *          list the next set of revisions.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDataSourceRunActivitiesInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which to list data source run
   *          activities.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source run.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The status of the data source run.</p>
   */
  status?: DataAssetActivityStatus;

  /**
   * @public
   * <p>When the number of activities is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of activities, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListDataSourceRunActivities</code> to list the next set of activities.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of activities to return in a single call to
   *             <code>ListDataSourceRunActivities</code>. When the number of activities to be listed is
   *          greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListDataSourceRunActivities</code> to list the next set of activities.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListDataSourceRunActivitiesOutput {
  /**
   * @public
   * <p>The results of the <code>ListDataSourceRunActivities</code> action.</p>
   */
  items: DataSourceRunActivity[] | undefined;

  /**
   * @public
   * <p>When the number of activities is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of activities, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListDataSourceRunActivities</code> to list the next set of activities.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListEnvironmentBlueprintsInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The maximum number of blueprints to return in a single call to
   *             <code>ListEnvironmentBlueprints</code>. When the number of blueprints to be listed is
   *          greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListEnvironmentBlueprints</code> to list the next set of blueprints.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>When the number of blueprints in the environment is greater than the default value for
   *          the <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of blueprints in the environment,
   *          the response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListEnvironmentBlueprints</code>to list the next set of blueprints.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The name of the Amazon DataZone environment.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Specifies whether the environment blueprint is managed by Amazon DataZone.</p>
   */
  managed?: boolean;
}

/**
 * @public
 * <p>The details of an environment blueprint summary.</p>
 */
export interface EnvironmentBlueprintSummary {
  /**
   * @public
   * <p>The identifier of the blueprint.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the blueprint.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of a blueprint.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The provider of the blueprint.</p>
   */
  provider: string | undefined;

  /**
   * @public
   * <p>The provisioning properties of the blueprint.</p>
   */
  provisioningProperties: ProvisioningProperties | undefined;

  /**
   * @public
   * <p>The timestamp of when an environment blueprint was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the blueprint was enabled.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface ListEnvironmentBlueprintsOutput {
  /**
   * @public
   * <p>The results of the <code>ListEnvironmentBlueprints</code> action.</p>
   */
  items: EnvironmentBlueprintSummary[] | undefined;

  /**
   * @public
   * <p>When the number of blueprints in the environment is greater than the default value for
   *          the <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of blueprints in the environment,
   *          the response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListEnvironmentBlueprints</code>to list the next set of blueprints.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListEnvironmentProfilesInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services account where you want to list environment
   *          profiles.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services region where you want to list environment profiles.</p>
   */
  awsAccountRegion?: string;

  /**
   * @public
   * <p>The identifier of the blueprint that was used to create the environment profiles that
   *          you want to list.</p>
   */
  environmentBlueprintIdentifier?: string;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone project.</p>
   */
  projectIdentifier?: string;

  /**
   * @public
   * <p/>
   */
  name?: string;

  /**
   * @public
   * <p>When the number of environment profiles is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of environment profiles, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListEnvironmentProfiles</code> to list the next set of environment
   *          profiles.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of environment profiles to return in a single call to
   *             <code>ListEnvironmentProfiles</code>. When the number of environment profiles to be
   *          listed is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListEnvironmentProfiles</code> to list the next set of environment
   *          profiles.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The details of an environment profile.</p>
 */
export interface EnvironmentProfileSummary {
  /**
   * @public
   * <p>The identifier of the environment profile.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the environment profile exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The identifier of an Amazon Web Services account in which an environment profile exists.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region in which an environment profile exists.</p>
   */
  awsAccountRegion?: string;

  /**
   * @public
   * <p>The Amazon DataZone user who created the environment profile.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The timestamp of when an environment profile was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the environment profile was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The name of the environment profile.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the environment profile.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The identifier of a blueprint with which an environment profile is created.</p>
   */
  environmentBlueprintId: string | undefined;

  /**
   * @public
   * <p>The identifier of a project in which an environment profile exists.</p>
   */
  projectId?: string;
}

/**
 * @public
 */
export interface ListEnvironmentProfilesOutput {
  /**
   * @public
   * <p>The results of the <code>ListEnvironmentProfiles</code> action. </p>
   */
  items: EnvironmentProfileSummary[] | undefined;

  /**
   * @public
   * <p>When the number of environment profiles is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of environment profiles, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListEnvironmentProfiles</code> to list the next set of environment
   *          profiles.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListEnvironmentsInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services account where you want to list
   *          environments.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The status of the environments that you want to list.</p>
   */
  status?: EnvironmentStatus;

  /**
   * @public
   * <p>The Amazon Web Services region where you want to list environments.</p>
   */
  awsAccountRegion?: string;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone project.</p>
   */
  projectIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the environment profile.</p>
   */
  environmentProfileIdentifier?: string;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone blueprint.</p>
   */
  environmentBlueprintIdentifier?: string;

  /**
   * @public
   * <p>The provider of the environment.</p>
   */
  provider?: string;

  /**
   * @public
   * <p/>
   */
  name?: string;

  /**
   * @public
   * <p>The maximum number of environments to return in a single call to
   *             <code>ListEnvironments</code>. When the number of environments to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>ListEnvironments</code> to list the
   *          next set of environments.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>When the number of environments is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of environments, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListEnvironments</code> to
   *          list the next set of environments.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The details of an environment.</p>
 */
export interface EnvironmentSummary {
  /**
   * @public
   * <p>The identifier of the project in which the environment exists.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The identifier of the environment.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which the environment exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created the environment.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The timestamp of when the environment was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the environment was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The name of the environment.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the environment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The identifier of the environment profile with which the environment was created.</p>
   */
  environmentProfileId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services account in which an environment exists.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region in which an environment exists.</p>
   */
  awsAccountRegion?: string;

  /**
   * @public
   * <p>The provider of the environment.</p>
   */
  provider: string | undefined;

  /**
   * @public
   * <p>The status of the environment.</p>
   */
  status?: EnvironmentStatus;
}

/**
 * @public
 */
export interface ListEnvironmentsOutput {
  /**
   * @public
   * <p>The results of the <code>ListEnvironments</code> action.</p>
   */
  items: EnvironmentSummary[] | undefined;

  /**
   * @public
   * <p>When the number of environments is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of environments, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListEnvironments</code> to
   *          list the next set of environments.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DeleteListingInput {
  /**
   * @public
   * <p/>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p/>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteListingOutput {}

/**
 * @public
 */
export interface GetListingInput {
  /**
   * @public
   * <p/>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p/>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p/>
   */
  listingRevision?: string;
}

/**
 * @public
 * <p>The details of a listing (aka asset published in a Amazon DataZone catalog).</p>
 */
export type ListingItem = ListingItem.AssetListingMember | ListingItem.$UnknownMember;

/**
 * @public
 */
export namespace ListingItem {
  /**
   * @public
   * <p>An asset published in an Amazon DataZone catalog.</p>
   */
  export interface AssetListingMember {
    assetListing: AssetListing;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    assetListing?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    assetListing: (value: AssetListing) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ListingItem, visitor: Visitor<T>): T => {
    if (value.assetListing !== undefined) return visitor.assetListing(value.assetListing);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetListingOutput {
  /**
   * @public
   * <p/>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p/>
   */
  id: string | undefined;

  /**
   * @public
   * <p/>
   */
  listingRevision: string | undefined;

  /**
   * @public
   * <p/>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the listing was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The Amazon DataZone user who created the listing.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the listing.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p/>
   */
  item?: ListingItem;

  /**
   * @public
   * <p/>
   */
  name?: string;

  /**
   * @public
   * <p/>
   */
  description?: string;

  /**
   * @public
   * <p/>
   */
  status?: ListingStatus;
}

/**
 * @public
 * @enum
 */
export const TaskStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

/**
 * @public
 * @enum
 */
export const NotificationType = {
  EVENT: "EVENT",
  TASK: "TASK",
} as const;

/**
 * @public
 */
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];

/**
 * @public
 */
export interface ListNotificationsInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The type of notifications.</p>
   */
  type: NotificationType | undefined;

  /**
   * @public
   * <p>The time after which you want to list notifications.</p>
   */
  afterTimestamp?: Date;

  /**
   * @public
   * <p>The time before which you want to list notifications.</p>
   */
  beforeTimestamp?: Date;

  /**
   * @public
   * <p>The subjects of notifications.</p>
   */
  subjects?: string[];

  /**
   * @public
   * <p>The task status of notifications.</p>
   */
  taskStatus?: TaskStatus;

  /**
   * @public
   * <p>The maximum number of notifications to return in a single call to
   *             <code>ListNotifications</code>. When the number of notifications to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>ListNotifications</code> to list the
   *          next set of notifications.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>When the number of notifications is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of notifications, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListNotifications</code> to
   *          list the next set of notifications.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const NotificationResourceType = {
  PROJECT: "PROJECT",
} as const;

/**
 * @public
 */
export type NotificationResourceType = (typeof NotificationResourceType)[keyof typeof NotificationResourceType];

/**
 * @public
 * <p>The details of the resource mentioned in a notification.</p>
 */
export interface NotificationResource {
  /**
   * @public
   * <p>The type of the resource mentioned in a notification.</p>
   */
  type: NotificationResourceType | undefined;

  /**
   * @public
   * <p>The ID of the resource mentioned in a notification.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the resource mentioned in a notification.</p>
   */
  name?: string;
}

/**
 * @public
 * @enum
 */
export const NotificationRole = {
  DOMAIN_OWNER: "DOMAIN_OWNER",
  PROJECT_CONTRIBUTOR: "PROJECT_CONTRIBUTOR",
  PROJECT_OWNER: "PROJECT_OWNER",
  PROJECT_SUBSCRIBER: "PROJECT_SUBSCRIBER",
  PROJECT_VIEWER: "PROJECT_VIEWER",
} as const;

/**
 * @public
 */
export type NotificationRole = (typeof NotificationRole)[keyof typeof NotificationRole];

/**
 * @public
 * <p>The topic of the notification.</p>
 */
export interface Topic {
  /**
   * @public
   * <p>The subject of the resource mentioned in a notification.</p>
   */
  subject: string | undefined;

  /**
   * @public
   * <p>The details of the resource mentioned in a notification.</p>
   */
  resource: NotificationResource | undefined;

  /**
   * @public
   * <p>The role of the resource mentioned in a notification.</p>
   */
  role: NotificationRole | undefined;
}

/**
 * @public
 * <p>The details of a notification generated in Amazon DataZone.</p>
 */
export interface NotificationOutput {
  /**
   * @public
   * <p>The identifier of the notification.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The identifier of a Amazon DataZone domain in which the notification exists.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The type of the notification.</p>
   */
  type: NotificationType | undefined;

  /**
   * @public
   * <p>The topic of the notification.</p>
   */
  topic: Topic | undefined;

  /**
   * @public
   * <p>The title of the notification.</p>
   */
  title: string | undefined;

  /**
   * @public
   * <p>The message included in the notification.</p>
   */
  message: string | undefined;

  /**
   * @public
   * <p>The status included in the notification.</p>
   */
  status?: TaskStatus;

  /**
   * @public
   * <p>The action link included in the notification.</p>
   */
  actionLink: string | undefined;

  /**
   * @public
   * <p>The timestamp of when a notification was created.</p>
   */
  creationTimestamp: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the notification was last updated.</p>
   */
  lastUpdatedTimestamp: Date | undefined;

  /**
   * @public
   * <p>The metadata included in the notification.</p>
   */
  metadata?: Record<string, string>;
}

/**
 * @public
 */
export interface ListNotificationsOutput {
  /**
   * @public
   * <p>The results of the <code>ListNotifications</code> action.</p>
   */
  notifications?: NotificationOutput[];

  /**
   * @public
   * <p>When the number of notifications is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of notifications, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListNotifications</code> to
   *          list the next set of notifications.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortFieldProject = {
  NAME: "NAME",
} as const;

/**
 * @public
 */
export type SortFieldProject = (typeof SortFieldProject)[keyof typeof SortFieldProject];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListProjectMembershipsInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which you want to list project
   *          memberships.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the project whose memberships you want to list.</p>
   */
  projectIdentifier: string | undefined;

  /**
   * @public
   * <p>The method by which you want to sort the project memberships.</p>
   */
  sortBy?: SortFieldProject;

  /**
   * @public
   * <p>The sort order of the project memberships.</p>
   */
  sortOrder?: SortOrder;

  /**
   * @public
   * <p>When the number of memberships is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of memberships, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListProjectMemberships</code>
   *          to list the next set of memberships.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of memberships to return in a single call to
   *             <code>ListProjectMemberships</code>. When the number of memberships to be listed is
   *          greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListProjectMemberships</code> to list the next set of memberships.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The details of a group in Amazon DataZone.</p>
 */
export interface GroupDetails {
  /**
   * @public
   * <p>The identifier of the group in Amazon DataZone.</p>
   */
  groupId: string | undefined;
}

/**
 * @public
 * <p>The user details of a project member.</p>
 */
export interface UserDetails {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone user.</p>
   */
  userId: string | undefined;
}

/**
 * @public
 * <p>The details about a project member.</p>
 */
export type MemberDetails = MemberDetails.GroupMember | MemberDetails.UserMember | MemberDetails.$UnknownMember;

/**
 * @public
 */
export namespace MemberDetails {
  /**
   * @public
   * <p>The user details of a project member.</p>
   */
  export interface UserMember {
    user: UserDetails;
    group?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The group details of a project member.</p>
   */
  export interface GroupMember {
    user?: never;
    group: GroupDetails;
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
    user: (value: UserDetails) => T;
    group: (value: GroupDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MemberDetails, visitor: Visitor<T>): T => {
    if (value.user !== undefined) return visitor.user(value.user);
    if (value.group !== undefined) return visitor.group(value.group);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The details of a project member.</p>
 */
export interface ProjectMember {
  /**
   * @public
   * <p>The membership details of a project member.</p>
   */
  memberDetails: MemberDetails | undefined;

  /**
   * @public
   * <p>The designated role of a project member.</p>
   */
  designation: UserDesignation | undefined;
}

/**
 * @public
 */
export interface ListProjectMembershipsOutput {
  /**
   * @public
   * <p>The members of the project.</p>
   */
  members: ProjectMember[] | undefined;

  /**
   * @public
   * <p>When the number of memberships is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of memberships, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListProjectMemberships</code>
   *          to list the next set of memberships.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListProjectsInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone user.</p>
   */
  userIdentifier?: string;

  /**
   * @public
   * <p>The identifier of a group.</p>
   */
  groupIdentifier?: string;

  /**
   * @public
   * <p/>
   */
  name?: string;

  /**
   * @public
   * <p>When the number of projects is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of projects, the response includes
   *          a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListProjects</code> to list
   *          the next set of projects.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of projects to return in a single call to <code>ListProjects</code>.
   *          When the number of projects to be listed is greater than the value of
   *             <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you
   *          can use in a subsequent call to <code>ListProjects</code> to list the next set of
   *          projects.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The details of a Amazon DataZone project.</p>
 */
export interface ProjectSummary {
  /**
   * @public
   * <p>The identifier of a Amazon DataZone domain where the project exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The identifier of a project.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of a project.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of a project.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon DataZone user who created the project.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The timestamp of when a project was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the project was updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface ListProjectsOutput {
  /**
   * @public
   * <p>The results of the <code>ListProjects</code> action.</p>
   */
  items?: ProjectSummary[];

  /**
   * @public
   * <p>When the number of projects is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of projects, the response includes
   *          a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListProjects</code> to list
   *          the next set of projects.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortKey = {
  CREATED_AT: "CREATED_AT",
  UPDATED_AT: "UPDATED_AT",
} as const;

/**
 * @public
 */
export type SortKey = (typeof SortKey)[keyof typeof SortKey];

/**
 * @public
 */
export interface ListSubscriptionGrantsInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone environment.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>The identifier of the subscription target.</p>
   */
  subscriptionTargetId?: string;

  /**
   * @public
   * <p>The identifier of the subscribed listing.</p>
   */
  subscribedListingId?: string;

  /**
   * @public
   * <p>The identifier of the subscription.</p>
   */
  subscriptionId?: string;

  /**
   * @public
   * <p>Specifies the way of sorting the results of this action.</p>
   */
  sortBy?: SortKey;

  /**
   * @public
   * <p>Specifies the sort order of this action.</p>
   */
  sortOrder?: SortOrder;

  /**
   * @public
   * <p>The maximum number of subscription grants to return in a single call to
   *             <code>ListSubscriptionGrants</code>. When the number of subscription grants to be listed
   *          is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListSubscriptionGrants</code> to list the next set of subscription grants.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>When the number of subscription grants is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription grants, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListSubscriptionGrants</code>
   *          to list the next set of subscription grants.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The details of the subscription grant.</p>
 */
export interface SubscriptionGrantSummary {
  /**
   * @public
   * <p>The identifier of the subscription grant.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The datazone user who created the subscription grant.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the subscription grant.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a subscription grant exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The timestamp of when a subscription grant was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestampf of when the subscription grant was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The identifier of the target of the subscription grant.</p>
   */
  subscriptionTargetId: string | undefined;

  /**
   * @public
   * <p>The entity to which the subscription is granted.</p>
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * @public
   * <p>The status of the subscription grant.</p>
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * @public
   * <p>The assets included in the subscription grant.</p>
   */
  assets?: SubscribedAsset[];

  /**
   * @public
   * <p>The ID of the subscription grant.</p>
   */
  subscriptionId?: string;
}

/**
 * @public
 */
export interface ListSubscriptionGrantsOutput {
  /**
   * @public
   * <p>The results of the <code>ListSubscriptionGrants</code> action. </p>
   */
  items: SubscriptionGrantSummary[] | undefined;

  /**
   * @public
   * <p>When the number of subscription grants is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription grants, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListSubscriptionGrants</code>
   *          to list the next set of subscription grants.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSubscriptionRequestsInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>Specifies the status of the subscription requests.</p>
   */
  status?: SubscriptionRequestStatus;

  /**
   * @public
   * <p>The identifier of the subscribed listing.</p>
   */
  subscribedListingId?: string;

  /**
   * @public
   * <p>The identifier of the project for the subscription requests.</p>
   */
  owningProjectId?: string;

  /**
   * @public
   * <p>The identifier of the subscription request approver's project.</p>
   */
  approverProjectId?: string;

  /**
   * @public
   * <p>Specifies the way to sort the results of this action.</p>
   */
  sortBy?: SortKey;

  /**
   * @public
   * <p>Specifies the sort order for the results of this action.</p>
   */
  sortOrder?: SortOrder;

  /**
   * @public
   * <p>The maximum number of subscription requests to return in a single call to
   *             <code>ListSubscriptionRequests</code>. When the number of subscription requests to be
   *          listed is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListSubscriptionRequests</code> to list the next set of subscription
   *          requests.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>When the number of subscription requests is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription requests, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListSubscriptionRequests</code> to list the next set of subscription
   *          requests.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The details of the subscription request.</p>
 */
export interface SubscriptionRequestSummary {
  /**
   * @public
   * <p>The identifier of the subscription request.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created the subscription request.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone user who updated the subscription request.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a subscription request exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The status of the subscription request.</p>
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * @public
   * <p>The timestamp of when a subscription request was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription request was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The reason for the subscription request.</p>
   */
  requestReason: string | undefined;

  /**
   * @public
   * <p>The principals included in the subscription request. </p>
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * @public
   * <p>The listings included in the subscription request.</p>
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * @public
   * <p>The identifier of the subscription request reviewer.</p>
   */
  reviewerId?: string;

  /**
   * @public
   * <p>The decision comment of the subscription request.</p>
   */
  decisionComment?: string;
}

/**
 * @public
 */
export interface ListSubscriptionRequestsOutput {
  /**
   * @public
   * <p>The results of the <code>ListSubscriptionRequests</code> action. </p>
   */
  items: SubscriptionRequestSummary[] | undefined;

  /**
   * @public
   * <p>When the number of subscription requests is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription requests, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListSubscriptionRequests</code> to list the next set of subscription
   *          requests.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSubscriptionsInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the subscription request for the subscriptions that you want to
   *          list.</p>
   */
  subscriptionRequestIdentifier?: string;

  /**
   * @public
   * <p>The status of the subscriptions that you want to list.</p>
   */
  status?: SubscriptionStatus;

  /**
   * @public
   * <p>The identifier of the subscribed listing for the subscriptions that you want to
   *          list.</p>
   */
  subscribedListingId?: string;

  /**
   * @public
   * <p>The identifier of the owning project.</p>
   */
  owningProjectId?: string;

  /**
   * @public
   * <p>The identifier of the project for the subscription's approver.</p>
   */
  approverProjectId?: string;

  /**
   * @public
   * <p>Specifies the way in which the results of this action are to be sorted.</p>
   */
  sortBy?: SortKey;

  /**
   * @public
   * <p>Specifies the sort order for the results of this action.</p>
   */
  sortOrder?: SortOrder;

  /**
   * @public
   * <p>The maximum number of subscriptions to return in a single call to
   *             <code>ListSubscriptions</code>. When the number of subscriptions to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>ListSubscriptions</code> to list the
   *          next set of Subscriptions. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>When the number of subscriptions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscriptions, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListSubscriptions</code> to
   *          list the next set of subscriptions.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The details of the subscription.</p>
 */
export interface SubscriptionSummary {
  /**
   * @public
   * <p>The identifier of the subscription.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who created the subscription.</p>
   */
  createdBy: string | undefined;

  /**
   * @public
   * <p>The Amazon DataZone user who updated the subscription.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain in which a subscription exists.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The status of the subscription.</p>
   */
  status: SubscriptionStatus | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The timestamp of when the subscription was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The principal included in the subscription.</p>
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * @public
   * <p>The listing included in the subscription.</p>
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * @public
   * <p>The identifier of the subscription request for the subscription.</p>
   */
  subscriptionRequestId?: string;

  /**
   * @public
   * <p>The retain permissions included in the subscription.</p>
   */
  retainPermissions?: boolean;
}

/**
 * @public
 */
export interface ListSubscriptionsOutput {
  /**
   * @public
   * <p>The results of the <code>ListSubscriptions</code> action.</p>
   */
  items: SubscriptionSummary[] | undefined;

  /**
   * @public
   * <p>When the number of subscriptions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscriptions, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListSubscriptions</code> to
   *          list the next set of subscriptions.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSubscriptionTargetsInput {
  /**
   * @public
   * <p>The identifier of the Amazon DataZone domain where you want to list subscription
   *          targets.</p>
   */
  domainIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the environment where you want to list subscription targets.</p>
   */
  environmentIdentifier: string | undefined;

  /**
   * @public
   * <p>Specifies the way in which the results of this action are to be sorted.</p>
   */
  sortBy?: SortKey;

  /**
   * @public
   * <p>Specifies the sort order for the results of this action.</p>
   */
  sortOrder?: SortOrder;

  /**
   * @public
   * <p>The maximum number of subscription targets to return in a single call to
   *             <code>ListSubscriptionTargets</code>. When the number of subscription targets to be
   *          listed is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListSubscriptionTargets</code> to list the next set of subscription targets.
   *       </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>When the number of subscription targets is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of subscription targets, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListSubscriptionTargets</code> to list the next set of subscription
   *          targets.</p>
   */
  nextToken?: string;
}

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
export const SubscribedListingItemFilterSensitiveLog = (obj: SubscribedListingItem): any => {
  if (obj.assetListing !== undefined)
    return { assetListing: SubscribedAssetListingFilterSensitiveLog(obj.assetListing) };
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
  ...(obj.externalIdentifier && { externalIdentifier: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsInput && { formsInput: SENSITIVE_STRING }),
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
export const CreateAssetOutputFilterSensitiveLog = (obj: CreateAssetOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.externalIdentifier && { externalIdentifier: SENSITIVE_STRING }),
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
  ...(obj.externalIdentifier && { externalIdentifier: SENSITIVE_STRING }),
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
  ...(obj.externalIdentifier && { externalIdentifier: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsOutput && { formsOutput: obj.formsOutput.map((item) => FormOutputFilterSensitiveLog(item)) }),
  ...(obj.readOnlyFormsOutput && {
    readOnlyFormsOutput: obj.readOnlyFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
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
  ...(obj.externalIdentifier && { externalIdentifier: SENSITIVE_STRING }),
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
export const CreateProjectInputFilterSensitiveLog = (obj: CreateProjectInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateProjectOutputFilterSensitiveLog = (obj: CreateProjectOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSubscriptionRequestInputFilterSensitiveLog = (obj: CreateSubscriptionRequestInput): any => ({
  ...obj,
  ...(obj.subscribedPrincipals && { subscribedPrincipals: obj.subscribedPrincipals.map((item) => item) }),
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSubscriptionRequestOutputFilterSensitiveLog = (obj: CreateSubscriptionRequestOutput): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
  ...(obj.subscribedPrincipals && {
    subscribedPrincipals: obj.subscribedPrincipals.map((item) => SubscribedPrincipalFilterSensitiveLog(item)),
  }),
  ...(obj.subscribedListings && {
    subscribedListings: obj.subscribedListings.map((item) => SubscribedListingFilterSensitiveLog(item)),
  }),
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSubscriptionTargetInputFilterSensitiveLog = (obj: CreateSubscriptionTargetInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSubscriptionTargetOutputFilterSensitiveLog = (obj: CreateSubscriptionTargetOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SsoUserProfileDetailsFilterSensitiveLog = (obj: SsoUserProfileDetails): any => ({
  ...obj,
  ...(obj.username && { username: SENSITIVE_STRING }),
  ...(obj.firstName && { firstName: SENSITIVE_STRING }),
  ...(obj.lastName && { lastName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserProfileDetailsFilterSensitiveLog = (obj: UserProfileDetails): any => {
  if (obj.iam !== undefined) return { iam: obj.iam };
  if (obj.sso !== undefined) return { sso: SsoUserProfileDetailsFilterSensitiveLog(obj.sso) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateUserProfileOutputFilterSensitiveLog = (obj: CreateUserProfileOutput): any => ({
  ...obj,
  ...(obj.details && { details: UserProfileDetailsFilterSensitiveLog(obj.details) }),
});

/**
 * @internal
 */
export const DataProductSummaryFilterSensitiveLog = (obj: DataProductSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteDataSourceOutputFilterSensitiveLog = (obj: DeleteDataSourceOutput): any => ({
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
export const GetDataSourceOutputFilterSensitiveLog = (obj: GetDataSourceOutput): any => ({
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
export const ListDataSourcesInputFilterSensitiveLog = (obj: ListDataSourcesInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DataSourceSummaryFilterSensitiveLog = (obj: DataSourceSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.schedule && { schedule: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListDataSourcesOutputFilterSensitiveLog = (obj: ListDataSourcesOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => DataSourceSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateDataSourceInputFilterSensitiveLog = (obj: UpdateDataSourceInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.assetFormsInput && { assetFormsInput: SENSITIVE_STRING }),
  ...(obj.schedule && { schedule: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
});

/**
 * @internal
 */
export const UpdateDataSourceOutputFilterSensitiveLog = (obj: UpdateDataSourceOutput): any => ({
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
export const DataSourceRunActivityFilterSensitiveLog = (obj: DataSourceRunActivity): any => ({
  ...obj,
  ...(obj.database && { database: SENSITIVE_STRING }),
  ...(obj.technicalName && { technicalName: SENSITIVE_STRING }),
  ...(obj.technicalDescription && { technicalDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DomainSummaryFilterSensitiveLog = (obj: DomainSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListDomainsOutputFilterSensitiveLog = (obj: ListDomainsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => DomainSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ImportFilterSensitiveLog = (obj: Import): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetFormTypeOutputFilterSensitiveLog = (obj: GetFormTypeOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.model && { model: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.imports && { imports: obj.imports.map((item) => ImportFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetEnvironmentOutputFilterSensitiveLog = (obj: GetEnvironmentOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => CustomParameterFilterSensitiveLog(item)),
  }),
  ...(obj.provisioningProperties && { provisioningProperties: obj.provisioningProperties }),
});

/**
 * @internal
 */
export const GetEnvironmentBlueprintOutputFilterSensitiveLog = (obj: GetEnvironmentBlueprintOutput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.provisioningProperties && { provisioningProperties: obj.provisioningProperties }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => CustomParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GetEnvironmentProfileOutputFilterSensitiveLog = (obj: GetEnvironmentProfileOutput): any => ({
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
export const GetGroupProfileOutputFilterSensitiveLog = (obj: GetGroupProfileOutput): any => ({
  ...obj,
  ...(obj.groupName && { groupName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetProjectOutputFilterSensitiveLog = (obj: GetProjectOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSubscriptionOutputFilterSensitiveLog = (obj: GetSubscriptionOutput): any => ({
  ...obj,
  ...(obj.subscribedPrincipal && {
    subscribedPrincipal: SubscribedPrincipalFilterSensitiveLog(obj.subscribedPrincipal),
  }),
  ...(obj.subscribedListing && { subscribedListing: SubscribedListingFilterSensitiveLog(obj.subscribedListing) }),
});

/**
 * @internal
 */
export const GetSubscriptionRequestDetailsOutputFilterSensitiveLog = (
  obj: GetSubscriptionRequestDetailsOutput
): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
  ...(obj.subscribedPrincipals && {
    subscribedPrincipals: obj.subscribedPrincipals.map((item) => SubscribedPrincipalFilterSensitiveLog(item)),
  }),
  ...(obj.subscribedListings && {
    subscribedListings: obj.subscribedListings.map((item) => SubscribedListingFilterSensitiveLog(item)),
  }),
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSubscriptionTargetOutputFilterSensitiveLog = (obj: GetSubscriptionTargetOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetUserProfileOutputFilterSensitiveLog = (obj: GetUserProfileOutput): any => ({
  ...obj,
  ...(obj.details && { details: UserProfileDetailsFilterSensitiveLog(obj.details) }),
});

/**
 * @internal
 */
export const GetGlossaryOutputFilterSensitiveLog = (obj: GetGlossaryOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateGlossaryInputFilterSensitiveLog = (obj: UpdateGlossaryInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateGlossaryOutputFilterSensitiveLog = (obj: UpdateGlossaryOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetGlossaryTermOutputFilterSensitiveLog = (obj: GetGlossaryTermOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
  ...(obj.longDescription && { longDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateGlossaryTermInputFilterSensitiveLog = (obj: UpdateGlossaryTermInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
  ...(obj.longDescription && { longDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateGlossaryTermOutputFilterSensitiveLog = (obj: UpdateGlossaryTermOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
  ...(obj.longDescription && { longDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListDataSourceRunActivitiesOutputFilterSensitiveLog = (obj: ListDataSourceRunActivitiesOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => DataSourceRunActivityFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const EnvironmentBlueprintSummaryFilterSensitiveLog = (obj: EnvironmentBlueprintSummary): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.provisioningProperties && { provisioningProperties: obj.provisioningProperties }),
});

/**
 * @internal
 */
export const ListEnvironmentBlueprintsOutputFilterSensitiveLog = (obj: ListEnvironmentBlueprintsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => EnvironmentBlueprintSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListEnvironmentProfilesInputFilterSensitiveLog = (obj: ListEnvironmentProfilesInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EnvironmentProfileSummaryFilterSensitiveLog = (obj: EnvironmentProfileSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListEnvironmentProfilesOutputFilterSensitiveLog = (obj: ListEnvironmentProfilesOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => EnvironmentProfileSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const EnvironmentSummaryFilterSensitiveLog = (obj: EnvironmentSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListEnvironmentsOutputFilterSensitiveLog = (obj: ListEnvironmentsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => EnvironmentSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListingItemFilterSensitiveLog = (obj: ListingItem): any => {
  if (obj.assetListing !== undefined) return { assetListing: AssetListingFilterSensitiveLog(obj.assetListing) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const GetListingOutputFilterSensitiveLog = (obj: GetListingOutput): any => ({
  ...obj,
  ...(obj.item && { item: ListingItemFilterSensitiveLog(obj.item) }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const NotificationOutputFilterSensitiveLog = (obj: NotificationOutput): any => ({
  ...obj,
  ...(obj.title && { title: SENSITIVE_STRING }),
  ...(obj.message && { message: SENSITIVE_STRING }),
  ...(obj.actionLink && { actionLink: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListNotificationsOutputFilterSensitiveLog = (obj: ListNotificationsOutput): any => ({
  ...obj,
  ...(obj.notifications && {
    notifications: obj.notifications.map((item) => NotificationOutputFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListProjectsInputFilterSensitiveLog = (obj: ListProjectsInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ProjectSummaryFilterSensitiveLog = (obj: ProjectSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListProjectsOutputFilterSensitiveLog = (obj: ListProjectsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => ProjectSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SubscriptionRequestSummaryFilterSensitiveLog = (obj: SubscriptionRequestSummary): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
  ...(obj.subscribedPrincipals && {
    subscribedPrincipals: obj.subscribedPrincipals.map((item) => SubscribedPrincipalFilterSensitiveLog(item)),
  }),
  ...(obj.subscribedListings && {
    subscribedListings: obj.subscribedListings.map((item) => SubscribedListingFilterSensitiveLog(item)),
  }),
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListSubscriptionRequestsOutputFilterSensitiveLog = (obj: ListSubscriptionRequestsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SubscriptionRequestSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SubscriptionSummaryFilterSensitiveLog = (obj: SubscriptionSummary): any => ({
  ...obj,
  ...(obj.subscribedPrincipal && {
    subscribedPrincipal: SubscribedPrincipalFilterSensitiveLog(obj.subscribedPrincipal),
  }),
  ...(obj.subscribedListing && { subscribedListing: SubscribedListingFilterSensitiveLog(obj.subscribedListing) }),
});

/**
 * @internal
 */
export const ListSubscriptionsOutputFilterSensitiveLog = (obj: ListSubscriptionsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SubscriptionSummaryFilterSensitiveLog(item)) }),
});
