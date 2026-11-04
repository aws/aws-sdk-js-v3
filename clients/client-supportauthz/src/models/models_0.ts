// smithy-typescript generated code
import type { SupportPermitRequestStatus, SupportPermitStatus } from "./enums";

/**
 * @public
 */
export interface Unit {}

/**
 * The set of actions authorized by a permit. Specify either all actions or a list of specific actions.
 *
 * @public
 */
export type ActionSet =
  | ActionSet.ActionsMember
  | ActionSet.AllActionsMember
  | ActionSet.$UnknownMember;

/**
 * @public
 */
export namespace ActionSet {
  /**
   * Authorizes all available support actions.
   *
   * @public
   */
  export interface AllActionsMember {
    allActions: Unit;
    actions?: never;
    $unknown?: never;
  }

  /**
   * A list of specific support actions to authorize. Maximum of 10 actions.
   *
   * @public
   */
  export interface ActionsMember {
    allActions?: never;
    actions: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    allActions?: never;
    actions?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    allActions: (value: Unit) => T;
    actions: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A summary of a support action.
 *
 * @public
 */
export interface ActionSummary {
  /**
   * The name of the support action.
   *
   * @public
   */
  action: string | undefined;

  /**
   * The AWS service associated with the support action.
   *
   * @public
   */
  service: string | undefined;

  /**
   * A description of what the support action does.
   *
   * @public
   */
  description: string | undefined;
}

/**
 * A time-window condition that constrains when a support permit is valid.
 *
 * @public
 */
export type Condition =
  | Condition.AllowAfterMember
  | Condition.AllowBeforeMember
  | Condition.$UnknownMember;

/**
 * @public
 */
export namespace Condition {
  /**
   * The earliest time at which the permit becomes valid.
   *
   * @public
   */
  export interface AllowAfterMember {
    allowAfter: Date;
    allowBefore?: never;
    $unknown?: never;
  }

  /**
   * The latest time at which the permit remains valid.
   *
   * @public
   */
  export interface AllowBeforeMember {
    allowAfter?: never;
    allowBefore: Date;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    allowAfter?: never;
    allowBefore?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    allowAfter: (value: Date) => T;
    allowBefore: (value: Date) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The set of resources authorized by a permit. Specify either all resources in the Region or a list of specific resources.
 *
 * @public
 */
export type ResourceSet =
  | ResourceSet.AllResourcesInRegionMember
  | ResourceSet.ResourcesMember
  | ResourceSet.$UnknownMember;

/**
 * @public
 */
export namespace ResourceSet {
  /**
   * Authorizes the support operator to act on all resources in the Region.
   *
   * @public
   */
  export interface AllResourcesInRegionMember {
    allResourcesInRegion: Unit;
    resources?: never;
    $unknown?: never;
  }

  /**
   * A list of specific resource identifiers that the support operator is authorized to act upon. Maximum of 5 resources.
   *
   * @public
   */
  export interface ResourcesMember {
    allResourcesInRegion?: never;
    resources: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    allResourcesInRegion?: never;
    resources?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    allResourcesInRegion: (value: Unit) => T;
    resources: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The permit definition specifying the authorized actions, resources, and time-window conditions for a support operator.
 *
 * @public
 */
export interface Permit {
  /**
   * The set of actions that the support operator is authorized to perform.
   *
   * @public
   */
  actions: ActionSet | undefined;

  /**
   * The set of resources that the support operator is authorized to act upon.
   *
   * @public
   */
  resources: ResourceSet | undefined;

  /**
   * The time-window conditions that constrain when the permit is valid. Maximum of 2 conditions.
   *
   * @public
   */
  conditions?: Condition[] | undefined;
}

/**
 * The signing key used to cryptographically sign a support permit.
 *
 * @public
 */
export type SigningKeyInfo =
  | SigningKeyInfo.KmsKeyMember
  | SigningKeyInfo.$UnknownMember;

/**
 * @public
 */
export namespace SigningKeyInfo {
  /**
   * The ARN of the AWS KMS key used to sign the permit. The key must have key spec ECC_NIST_P384 and key usage SIGN_VERIFY.
   *
   * @public
   */
  export interface KmsKeyMember {
    kmsKey: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    kmsKey?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    kmsKey: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateSupportPermitInput {
  /**
   * The permit definition specifying the actions, resources, and time-window conditions that the support operator is authorized to use.
   *
   * @public
   */
  permit: Permit | undefined;

  /**
   * A customer-chosen name for the support permit. Must be between 1 and 256 alphanumeric characters.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A human-readable description of why this permit is being created. Maximum length of 1024 characters.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The signing key information used to sign the permit. Must reference an AWS KMS key with key usage SIGN_VERIFY and key spec ECC_NIST_P384.
   *
   * @public
   */
  signingKeyInfo: SigningKeyInfo | undefined;

  /**
   * The display identifier of the AWS Support case associated with this permit.
   *
   * @public
   */
  supportCaseDisplayId?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the service returns the existing permit without creating a duplicate.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags to associate with the support permit on creation.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSupportPermitOutput {
  /**
   * The name of the support permit.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the support permit.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The description of the support permit.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The permit definition.
   *
   * @public
   */
  permit: Permit | undefined;

  /**
   * The current status of the support permit.
   *
   * @public
   */
  status: SupportPermitStatus | undefined;

  /**
   * The signing key information for the permit.
   *
   * @public
   */
  signingKeyInfo: SigningKeyInfo | undefined;

  /**
   * The timestamp when the permit was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The display identifier of the support case associated with the permit.
   *
   * @public
   */
  supportCaseDisplayId?: string | undefined;

  /**
   * The tags associated with the support permit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Describes one specific validation failure for an input member.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.
   *
   * @public
   */
  path: string | undefined;

  /**
   * A detailed description of the validation failure.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteSupportPermitInput {
  /**
   * The Amazon Resource Name (ARN) or name of the support permit to delete.
   *
   * @public
   */
  supportPermitIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteSupportPermitOutput {
  /**
   * The name of the deleted support permit.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the deleted support permit.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The description of the deleted support permit.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The permit definition of the deleted permit.
   *
   * @public
   */
  permit: Permit | undefined;

  /**
   * The status of the support permit. Returns DELETING.
   *
   * @public
   */
  status: SupportPermitStatus | undefined;

  /**
   * The signing key information for the deleted permit.
   *
   * @public
   */
  signingKeyInfo: SigningKeyInfo | undefined;

  /**
   * The timestamp when the permit was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The display identifier of the support case associated with the deleted permit.
   *
   * @public
   */
  supportCaseDisplayId?: string | undefined;
}

/**
 * @public
 */
export interface GetActionInput {
  /**
   * The name of the support action to retrieve.
   *
   * @public
   */
  action: string | undefined;
}

/**
 * @public
 */
export interface GetActionOutput {
  /**
   * The name of the support action.
   *
   * @public
   */
  action: string | undefined;

  /**
   * The AWS service associated with the support action.
   *
   * @public
   */
  service: string | undefined;

  /**
   * A description of what the support action does.
   *
   * @public
   */
  description: string | undefined;
}

/**
 * @public
 */
export interface GetSupportPermitInput {
  /**
   * The ARN or name of the support permit to retrieve.
   *
   * @public
   */
  supportPermitIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetSupportPermitOutput {
  /**
   * The name of the support permit.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the support permit.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The description of the support permit.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The permit definition.
   *
   * @public
   */
  permit: Permit | undefined;

  /**
   * The current status of the support permit.
   *
   * @public
   */
  status: SupportPermitStatus | undefined;

  /**
   * The signing key information for the permit.
   *
   * @public
   */
  signingKeyInfo: SigningKeyInfo | undefined;

  /**
   * The timestamp when the permit was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The display identifier of the support case associated with the permit.
   *
   * @public
   */
  supportCaseDisplayId?: string | undefined;

  /**
   * The tags associated with the support permit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListActionsInput {
  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. Valid range is 1 to 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The name of the AWS service for which to list available support actions.
   *
   * @public
   */
  service: string | undefined;
}

/**
 * @public
 */
export interface ListActionsOutput {
  /**
   * The list of support actions.
   *
   * @public
   */
  actionSummaries: ActionSummary[] | undefined;

  /**
   * The token for the next page of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSupportPermitRequestsInput {
  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. Valid range is 1 to 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Filters the results by support case display identifier.
   *
   * @public
   */
  supportCaseDisplayId?: string | undefined;
}

/**
 * A permit request from an AWS support operator.
 *
 * @public
 */
export interface SupportPermitRequest {
  /**
   * The ARN of the permit request.
   *
   * @public
   */
  requestArn: string | undefined;

  /**
   * The permit definition requested by the operator.
   *
   * @public
   */
  permit: Permit | undefined;

  /**
   * The display identifier of the support case associated with the request.
   *
   * @public
   */
  supportCaseDisplayId: string | undefined;

  /**
   * The current status of the permit request.
   *
   * @public
   */
  status: SupportPermitRequestStatus | undefined;

  /**
   * The timestamp when the request was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the request was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListSupportPermitRequestsOutput {
  /**
   * The list of permit requests.
   *
   * @public
   */
  supportPermitRequests: SupportPermitRequest[] | undefined;

  /**
   * The token for the next page of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSupportPermitsInput {
  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. Valid range is 1 to 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Filters the results by support permit status. Valid values: ACTIVE, INACTIVE, DELETING.
   *
   * @public
   */
  supportPermitStatuses?: SupportPermitStatus[] | undefined;
}

/**
 * A summary of a support permit.
 *
 * @public
 */
export interface SupportPermitSummary {
  /**
   * The name of the support permit.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the support permit.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The permit definition.
   *
   * @public
   */
  permit: Permit | undefined;

  /**
   * The current status of the support permit.
   *
   * @public
   */
  status: SupportPermitStatus | undefined;

  /**
   * The signing key information for the permit.
   *
   * @public
   */
  signingKeyInfo: SigningKeyInfo | undefined;

  /**
   * The timestamp when the permit was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The display identifier of the support case associated with the permit.
   *
   * @public
   */
  supportCaseDisplayId?: string | undefined;
}

/**
 * @public
 */
export interface ListSupportPermitsOutput {
  /**
   * The list of support permits.
   *
   * @public
   */
  supportPermits: SupportPermitSummary[] | undefined;

  /**
   * The token for the next page of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The ARN of the resource to list tags for.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The tags associated with the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RejectSupportPermitRequestInput {
  /**
   * The ARN of the permit request to reject.
   *
   * @public
   */
  requestArn: string | undefined;
}

/**
 * @public
 */
export interface RejectSupportPermitRequestOutput {
  /**
   * The ARN of the rejected permit request.
   *
   * @public
   */
  requestArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The ARN of the resource to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to add to the resource. Maximum of 50 tags.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The ARN of the resource to untag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
