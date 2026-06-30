// smithy-typescript generated code
import type { SupportPermitRequestStatus, SupportPermitStatus } from "./enums";

/**
 * @public
 */
export interface Unit {}

/**
 * <p>The set of actions authorized by a permit. Specify either all actions or a list of specific actions.</p>
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
   * <p>Authorizes all available support actions.</p>
   * @public
   */
  export interface AllActionsMember {
    allActions: Unit;
    actions?: never;
    $unknown?: never;
  }

  /**
   * <p>A list of specific support actions to authorize. Maximum of 10 actions.</p>
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
 * <p>A summary of a support action.</p>
 * @public
 */
export interface ActionSummary {
  /**
   * <p>The name of the support action.</p>
   * @public
   */
  action: string | undefined;

  /**
   * <p>The AWS service associated with the support action.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>A description of what the support action does.</p>
   * @public
   */
  description: string | undefined;
}

/**
 * <p>A time-window condition that constrains when a support permit is valid.</p>
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
   * <p>The earliest time at which the permit becomes valid.</p>
   * @public
   */
  export interface AllowAfterMember {
    allowAfter: Date;
    allowBefore?: never;
    $unknown?: never;
  }

  /**
   * <p>The latest time at which the permit remains valid.</p>
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
 * <p>The set of resources authorized by a permit. Specify either all resources in the Region or a list of specific resources.</p>
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
   * <p>Authorizes the support operator to act on all resources in the Region.</p>
   * @public
   */
  export interface AllResourcesInRegionMember {
    allResourcesInRegion: Unit;
    resources?: never;
    $unknown?: never;
  }

  /**
   * <p>A list of specific resource identifiers that the support operator is authorized to act upon. Maximum of 5 resources.</p>
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
 * <p>The permit definition specifying the authorized actions, resources, and time-window conditions for a support operator.</p>
 * @public
 */
export interface Permit {
  /**
   * <p>The set of actions that the support operator is authorized to perform.</p>
   * @public
   */
  actions: ActionSet | undefined;

  /**
   * <p>The set of resources that the support operator is authorized to act upon.</p>
   * @public
   */
  resources: ResourceSet | undefined;

  /**
   * <p>The time-window conditions that constrain when the permit is valid. Maximum of 2 conditions.</p>
   * @public
   */
  conditions?: Condition[] | undefined;
}

/**
 * <p>The signing key used to cryptographically sign a support permit.</p>
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
   * <p>The ARN of the AWS KMS key used to sign the permit. The key must have key spec ECC_NIST_P384 and key usage SIGN_VERIFY.</p>
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
   * <p>The permit definition specifying the actions, resources, and time-window conditions that the support operator is authorized to use.</p>
   * @public
   */
  permit: Permit | undefined;

  /**
   * <p>A customer-chosen name for the support permit. Must be between 1 and 256 alphanumeric characters.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A human-readable description of why this permit is being created. Maximum length of 1024 characters.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The signing key information used to sign the permit. Must reference an AWS KMS key with key usage SIGN_VERIFY and key spec ECC_NIST_P384.</p>
   * @public
   */
  signingKeyInfo: SigningKeyInfo | undefined;

  /**
   * <p>The display identifier of the AWS Support case associated with this permit.</p>
   * @public
   */
  supportCaseDisplayId?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the service returns the existing permit without creating a duplicate.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags to associate with the support permit on creation.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSupportPermitOutput {
  /**
   * <p>The name of the support permit.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the support permit.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The description of the support permit.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The permit definition.</p>
   * @public
   */
  permit: Permit | undefined;

  /**
   * <p>The current status of the support permit.</p>
   * @public
   */
  status: SupportPermitStatus | undefined;

  /**
   * <p>The signing key information for the permit.</p>
   * @public
   */
  signingKeyInfo: SigningKeyInfo | undefined;

  /**
   * <p>The timestamp when the permit was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The display identifier of the support case associated with the permit.</p>
   * @public
   */
  supportCaseDisplayId?: string | undefined;

  /**
   * <p>The tags associated with the support permit.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Describes one specific validation failure for an input member.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>A detailed description of the validation failure.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteSupportPermitInput {
  /**
   * <p>The Amazon Resource Name (ARN) or name of the support permit to delete.</p>
   * @public
   */
  supportPermitIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteSupportPermitOutput {
  /**
   * <p>The name of the deleted support permit.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the deleted support permit.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The description of the deleted support permit.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The permit definition of the deleted permit.</p>
   * @public
   */
  permit: Permit | undefined;

  /**
   * <p>The status of the support permit. Returns DELETING.</p>
   * @public
   */
  status: SupportPermitStatus | undefined;

  /**
   * <p>The signing key information for the deleted permit.</p>
   * @public
   */
  signingKeyInfo: SigningKeyInfo | undefined;

  /**
   * <p>The timestamp when the permit was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The display identifier of the support case associated with the deleted permit.</p>
   * @public
   */
  supportCaseDisplayId?: string | undefined;
}

/**
 * @public
 */
export interface GetActionInput {
  /**
   * <p>The name of the support action to retrieve.</p>
   * @public
   */
  action: string | undefined;
}

/**
 * @public
 */
export interface GetActionOutput {
  /**
   * <p>The name of the support action.</p>
   * @public
   */
  action: string | undefined;

  /**
   * <p>The AWS service associated with the support action.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>A description of what the support action does.</p>
   * @public
   */
  description: string | undefined;
}

/**
 * @public
 */
export interface GetSupportPermitInput {
  /**
   * <p>The ARN or name of the support permit to retrieve.</p>
   * @public
   */
  supportPermitIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetSupportPermitOutput {
  /**
   * <p>The name of the support permit.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the support permit.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The description of the support permit.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The permit definition.</p>
   * @public
   */
  permit: Permit | undefined;

  /**
   * <p>The current status of the support permit.</p>
   * @public
   */
  status: SupportPermitStatus | undefined;

  /**
   * <p>The signing key information for the permit.</p>
   * @public
   */
  signingKeyInfo: SigningKeyInfo | undefined;

  /**
   * <p>The timestamp when the permit was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The display identifier of the support case associated with the permit.</p>
   * @public
   */
  supportCaseDisplayId?: string | undefined;

  /**
   * <p>The tags associated with the support permit.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListActionsInput {
  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid range is 1 to 100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The name of the AWS service for which to list available support actions.</p>
   * @public
   */
  service: string | undefined;
}

/**
 * @public
 */
export interface ListActionsOutput {
  /**
   * <p>The list of support actions.</p>
   * @public
   */
  actionSummaries: ActionSummary[] | undefined;

  /**
   * <p>The token for the next page of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSupportPermitRequestsInput {
  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid range is 1 to 100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Filters the results by support case display identifier.</p>
   * @public
   */
  supportCaseDisplayId?: string | undefined;
}

/**
 * <p>A permit request from an AWS support operator.</p>
 * @public
 */
export interface SupportPermitRequest {
  /**
   * <p>The ARN of the permit request.</p>
   * @public
   */
  requestArn: string | undefined;

  /**
   * <p>The permit definition requested by the operator.</p>
   * @public
   */
  permit: Permit | undefined;

  /**
   * <p>The display identifier of the support case associated with the request.</p>
   * @public
   */
  supportCaseDisplayId: string | undefined;

  /**
   * <p>The current status of the permit request.</p>
   * @public
   */
  status: SupportPermitRequestStatus | undefined;

  /**
   * <p>The timestamp when the request was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the request was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListSupportPermitRequestsOutput {
  /**
   * <p>The list of permit requests.</p>
   * @public
   */
  supportPermitRequests: SupportPermitRequest[] | undefined;

  /**
   * <p>The token for the next page of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSupportPermitsInput {
  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid range is 1 to 100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Filters the results by support permit status. Valid values: ACTIVE, INACTIVE, DELETING.</p>
   * @public
   */
  supportPermitStatuses?: SupportPermitStatus[] | undefined;
}

/**
 * <p>A summary of a support permit.</p>
 * @public
 */
export interface SupportPermitSummary {
  /**
   * <p>The name of the support permit.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the support permit.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The permit definition.</p>
   * @public
   */
  permit: Permit | undefined;

  /**
   * <p>The current status of the support permit.</p>
   * @public
   */
  status: SupportPermitStatus | undefined;

  /**
   * <p>The signing key information for the permit.</p>
   * @public
   */
  signingKeyInfo: SigningKeyInfo | undefined;

  /**
   * <p>The timestamp when the permit was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The display identifier of the support case associated with the permit.</p>
   * @public
   */
  supportCaseDisplayId?: string | undefined;
}

/**
 * @public
 */
export interface ListSupportPermitsOutput {
  /**
   * <p>The list of support permits.</p>
   * @public
   */
  supportPermits: SupportPermitSummary[] | undefined;

  /**
   * <p>The token for the next page of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The ARN of the resource to list tags for.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RejectSupportPermitRequestInput {
  /**
   * <p>The ARN of the permit request to reject.</p>
   * @public
   */
  requestArn: string | undefined;
}

/**
 * @public
 */
export interface RejectSupportPermitRequestOutput {
  /**
   * <p>The ARN of the rejected permit request.</p>
   * @public
   */
  requestArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The ARN of the resource to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. Maximum of 50 tags.</p>
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
   * <p>The ARN of the resource to untag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
