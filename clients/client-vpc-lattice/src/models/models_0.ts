// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { VPCLatticeServiceException as __BaseException } from "./VPCLatticeServiceException";

/**
 * <p>The user does not have sufficient access to perform this action.</p>
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
 * <p>The request conflicts with the current state of the resource. Updating or deleting a
 *    resource can cause an inconsistent state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource ID.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   * @public
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * @enum
 */
export const ServiceNetworkLogType = {
  /**
   * Indicates logs for Lattice resource configurations.
   */
  RESOURCE: "RESOURCE",
  /**
   * Indicates logs for Lattice services.
   */
  SERVICE: "SERVICE",
} as const;

/**
 * @public
 */
export type ServiceNetworkLogType = (typeof ServiceNetworkLogType)[keyof typeof ServiceNetworkLogType];

/**
 * @public
 */
export interface CreateAccessLogSubscriptionRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ID or ARN of the service network or service.</p>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination. The supported destination types are
   *    CloudWatch Log groups, Kinesis Data Firehose delivery streams, and Amazon S3 buckets.</p>
   * @public
   */
  destinationArn: string | undefined;

  /**
   * <p>The type of log that monitors your Amazon VPC Lattice service networks.</p>
   * @public
   */
  serviceNetworkLogType?: ServiceNetworkLogType | undefined;

  /**
   * <p>The tags for the access log subscription.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAccessLogSubscriptionResponse {
  /**
   * <p>The ID of the access log subscription.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the access log subscription.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the service network or service.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network or service.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The type of log that monitors your Amazon VPC Lattice service networks.</p>
   * @public
   */
  serviceNetworkLogType?: ServiceNetworkLogType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the log destination.</p>
   * @public
   */
  destinationArn: string | undefined;
}

/**
 * <p>An unexpected error occurred while processing the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>The number of seconds to wait before retrying.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The request references a resource that does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource ID.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   * @public
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The limit on the number of requests per second was exceeded.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The service code.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The ID of the service quota that was exceeded.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>The number of seconds to wait before retrying.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>Describes a validation failure.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the validation exception.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Additional information about why the validation failed.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>The fields that failed validation.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 */
export interface DeleteAccessLogSubscriptionRequest {
  /**
   * <p>The ID or ARN of the access log subscription.</p>
   * @public
   */
  accessLogSubscriptionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessLogSubscriptionResponse {}

/**
 * @public
 */
export interface GetAccessLogSubscriptionRequest {
  /**
   * <p>The ID or ARN of the access log subscription.</p>
   * @public
   */
  accessLogSubscriptionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAccessLogSubscriptionResponse {
  /**
   * <p>The ID of the access log subscription.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the access log subscription.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the service network or service.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network or service.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the access log destination.</p>
   * @public
   */
  destinationArn: string | undefined;

  /**
   * <p>The log type for the service network.</p>
   * @public
   */
  serviceNetworkLogType?: ServiceNetworkLogType | undefined;

  /**
   * <p>The date and time that the access log subscription was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the access log subscription was last updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessLogSubscriptionsRequest {
  /**
   * <p>The ID or ARN of the service network or service.</p>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about an access log subscription.</p>
 * @public
 */
export interface AccessLogSubscriptionSummary {
  /**
   * <p>The ID of the access log subscription.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the access log subscription</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the service or service network.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service or service network.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   * @public
   */
  destinationArn: string | undefined;

  /**
   * <p>Log type of the service network.</p>
   * @public
   */
  serviceNetworkLogType?: ServiceNetworkLogType | undefined;

  /**
   * <p>The date and time that the access log subscription was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the access log subscription was last updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessLogSubscriptionsResponse {
  /**
   * <p>Information about the access log subscriptions.</p>
   * @public
   */
  items: AccessLogSubscriptionSummary[] | undefined;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessLogSubscriptionRequest {
  /**
   * <p>The ID or ARN of the access log subscription.</p>
   * @public
   */
  accessLogSubscriptionIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the access log destination.</p>
   * @public
   */
  destinationArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessLogSubscriptionResponse {
  /**
   * <p>The ID of the access log subscription.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the access log subscription.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the access log subscription.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the access log destination.</p>
   * @public
   */
  destinationArn: string | undefined;
}

/**
 * <p>The Amazon Resource Name (ARN) of the resource.</p>
 * @public
 */
export interface ArnResource {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthPolicyState = {
  Active: "Active",
  Inactive: "Inactive",
} as const;

/**
 * @public
 */
export type AuthPolicyState = (typeof AuthPolicyState)[keyof typeof AuthPolicyState];

/**
 * @public
 * @enum
 */
export const AuthType = {
  AWS_IAM: "AWS_IAM",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

/**
 * <p>Describes an action that returns a custom HTTP response.</p>
 * @public
 */
export interface FixedResponseAction {
  /**
   * <p>The HTTP response code.</p>
   * @public
   */
  statusCode: number | undefined;
}

/**
 * <p>Describes the weight of a target group.</p>
 * @public
 */
export interface WeightedTargetGroup {
  /**
   * <p>The ID or ARN of the target group.</p>
   * @public
   */
  targetGroupIdentifier: string | undefined;

  /**
   * <p>Only required if you specify multiple target groups for a forward action. The weight
   *    determines how requests are distributed to the target group. For example, if you specify two
   *    target groups, each with a weight of 10, each target group receives half the requests. If you
   *    specify two target groups, one with a weight of 10 and the other with a weight of 20, the target
   *    group with a weight of 20 receives twice as many requests as the other target group. If there's
   *    only one target group specified, then the default value is 100.</p>
   * @public
   */
  weight?: number | undefined;
}

/**
 * <p>Describes a forward action. You can use forward actions to route requests to one or more
 *    target groups.
 *    </p>
 * @public
 */
export interface ForwardAction {
  /**
   * <p>The target groups. Traffic matching the rule is forwarded to the specified target groups.
   *    With forward actions, you can assign a weight that controls the prioritization and selection of
   *    each target group. This means that requests are distributed to individual target groups based on
   *    their weights. For example, if two target groups have the same weight, each target group receives
   *    half of the traffic.</p>
   *          <p>The default value is 1. This means that if only one target group is provided, there is no
   *    need to set the weight; 100% of the traffic goes to that target group.</p>
   * @public
   */
  targetGroups: WeightedTargetGroup[] | undefined;
}

/**
 * <p>Describes the action for a rule.</p>
 * @public
 */
export type RuleAction = RuleAction.FixedResponseMember | RuleAction.ForwardMember | RuleAction.$UnknownMember;

/**
 * @public
 */
export namespace RuleAction {
  /**
   * <p>The forward action. Traffic that matches the rule is forwarded to the specified target
   *    groups.</p>
   * @public
   */
  export interface ForwardMember {
    forward: ForwardAction;
    fixedResponse?: never;
    $unknown?: never;
  }

  /**
   * <p>The fixed response action. The rule returns a custom HTTP response.</p>
   * @public
   */
  export interface FixedResponseMember {
    forward?: never;
    fixedResponse: FixedResponseAction;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    forward?: never;
    fixedResponse?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    forward: (value: ForwardAction) => T;
    fixedResponse: (value: FixedResponseAction) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RuleAction, visitor: Visitor<T>): T => {
    if (value.forward !== undefined) return visitor.forward(value.forward);
    if (value.fixedResponse !== undefined) return visitor.fixedResponse(value.fixedResponse);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Describes a header match type.</p>
 * @public
 */
export type HeaderMatchType =
  | HeaderMatchType.ContainsMember
  | HeaderMatchType.ExactMember
  | HeaderMatchType.PrefixMember
  | HeaderMatchType.$UnknownMember;

/**
 * @public
 */
export namespace HeaderMatchType {
  /**
   * <p>An exact type match.</p>
   * @public
   */
  export interface ExactMember {
    exact: string;
    prefix?: never;
    contains?: never;
    $unknown?: never;
  }

  /**
   * <p>A prefix type match. Matches the value with the prefix.</p>
   * @public
   */
  export interface PrefixMember {
    exact?: never;
    prefix: string;
    contains?: never;
    $unknown?: never;
  }

  /**
   * <p>A contains type match.</p>
   * @public
   */
  export interface ContainsMember {
    exact?: never;
    prefix?: never;
    contains: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    exact?: never;
    prefix?: never;
    contains?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    exact: (value: string) => T;
    prefix: (value: string) => T;
    contains: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: HeaderMatchType, visitor: Visitor<T>): T => {
    if (value.exact !== undefined) return visitor.exact(value.exact);
    if (value.prefix !== undefined) return visitor.prefix(value.prefix);
    if (value.contains !== undefined) return visitor.contains(value.contains);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Describes the constraints for a header match. Matches incoming requests with rule based on
 *    request header value before applying rule action.</p>
 * @public
 */
export interface HeaderMatch {
  /**
   * <p>The name of the header.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The header match type.</p>
   * @public
   */
  match: HeaderMatchType | undefined;

  /**
   * <p>Indicates whether the match is case sensitive.</p>
   * @public
   */
  caseSensitive?: boolean | undefined;
}

/**
 * <p>Describes a path match type. Each rule can include only one of the following types of
 *    paths.</p>
 * @public
 */
export type PathMatchType = PathMatchType.ExactMember | PathMatchType.PrefixMember | PathMatchType.$UnknownMember;

/**
 * @public
 */
export namespace PathMatchType {
  /**
   * <p>An exact match of the path.</p>
   * @public
   */
  export interface ExactMember {
    exact: string;
    prefix?: never;
    $unknown?: never;
  }

  /**
   * <p>A prefix match of the path.</p>
   * @public
   */
  export interface PrefixMember {
    exact?: never;
    prefix: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    exact?: never;
    prefix?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    exact: (value: string) => T;
    prefix: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PathMatchType, visitor: Visitor<T>): T => {
    if (value.exact !== undefined) return visitor.exact(value.exact);
    if (value.prefix !== undefined) return visitor.prefix(value.prefix);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Describes the conditions that can be applied when matching a path for incoming
 *    requests.</p>
 * @public
 */
export interface PathMatch {
  /**
   * <p>The type of path match.</p>
   * @public
   */
  match: PathMatchType | undefined;

  /**
   * <p>Indicates whether the match is case sensitive.</p>
   * @public
   */
  caseSensitive?: boolean | undefined;
}

/**
 * <p>Describes criteria that can be applied to incoming requests.</p>
 * @public
 */
export interface HttpMatch {
  /**
   * <p>The HTTP method type.</p>
   * @public
   */
  method?: string | undefined;

  /**
   * <p>The path match.</p>
   * @public
   */
  pathMatch?: PathMatch | undefined;

  /**
   * <p>The header matches. Matches incoming requests with rule based on request header value before
   *    applying rule action.</p>
   * @public
   */
  headerMatches?: HeaderMatch[] | undefined;
}

/**
 * <p>Describes a rule match.</p>
 * @public
 */
export type RuleMatch = RuleMatch.HttpMatchMember | RuleMatch.$UnknownMember;

/**
 * @public
 */
export namespace RuleMatch {
  /**
   * <p>The HTTP criteria that a rule must match.</p>
   * @public
   */
  export interface HttpMatchMember {
    httpMatch: HttpMatch;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    httpMatch?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    httpMatch: (value: HttpMatch) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RuleMatch, visitor: Visitor<T>): T => {
    if (value.httpMatch !== undefined) return visitor.httpMatch(value.httpMatch);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Describes a rule update.</p>
 * @public
 */
export interface RuleUpdate {
  /**
   * <p>The ID or ARN of the rule.</p>
   * @public
   */
  ruleIdentifier: string | undefined;

  /**
   * <p>The rule match.</p>
   * @public
   */
  match?: RuleMatch | undefined;

  /**
   * <p>The rule priority. A listener can't have multiple rules with the same priority.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The rule action.</p>
   * @public
   */
  action?: RuleAction | undefined;
}

/**
 * @public
 */
export interface BatchUpdateRuleRequest {
  /**
   * <p>The ID or ARN of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or ARN of the listener.</p>
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * <p>The rules for the specified listener.</p>
   * @public
   */
  rules: RuleUpdate[] | undefined;
}

/**
 * <p>Describes a successful rule update.</p>
 * @public
 */
export interface RuleUpdateSuccess {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the listener.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the listener.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Indicates whether this is the default rule.</p>
   * @public
   */
  isDefault?: boolean | undefined;

  /**
   * <p>The rule match.</p>
   * @public
   */
  match?: RuleMatch | undefined;

  /**
   * <p>The rule priority.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The action for the rule.</p>
   * @public
   */
  action?: RuleAction | undefined;
}

/**
 * <p>Describes a rule update that failed.</p>
 * @public
 */
export interface RuleUpdateFailure {
  /**
   * <p>The ID or ARN of the rule.</p>
   * @public
   */
  ruleIdentifier?: string | undefined;

  /**
   * <p>The failure code.</p>
   * @public
   */
  failureCode?: string | undefined;

  /**
   * <p>The failure message.</p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateRuleResponse {
  /**
   * <p>The rules that were successfully updated.</p>
   * @public
   */
  successful?: RuleUpdateSuccess[] | undefined;

  /**
   * <p>The rules that the operation couldn't update.</p>
   * @public
   */
  unsuccessful?: RuleUpdateFailure[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ListenerProtocol = {
  /**
   * Indicates HTTP protocol
   */
  HTTP: "HTTP",
  /**
   * Indicates HTTPS protocol
   */
  HTTPS: "HTTPS",
  /**
   * Indicates TLS_PASSTHROUGH protocol
   */
  TLS_PASSTHROUGH: "TLS_PASSTHROUGH",
} as const;

/**
 * @public
 */
export type ListenerProtocol = (typeof ListenerProtocol)[keyof typeof ListenerProtocol];

/**
 * @public
 */
export interface CreateListenerRequest {
  /**
   * <p>The ID or ARN of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The name of the listener. A listener name must be unique within a service. The valid characters are a-z, 0-9, and hyphens (-). You can't use a
   *   hyphen as the first or last character, or immediately after another hyphen.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The listener protocol.</p>
   * @public
   */
  protocol: ListenerProtocol | undefined;

  /**
   * <p>The listener port. You can specify a value from 1 to 65535. For HTTP, the default is 80. For
   *    HTTPS, the default is 443.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The action for the default rule. Each listener has a default rule. The default rule is used
   *    if no other rules match.</p>
   * @public
   */
  defaultAction: RuleAction | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags for the listener.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateListenerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the listener.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the listener.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The protocol of the listener.</p>
   * @public
   */
  protocol?: ListenerProtocol | undefined;

  /**
   * <p>The port number of the listener.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  serviceId?: string | undefined;

  /**
   * <p>The action for the default rule.</p>
   * @public
   */
  defaultAction?: RuleAction | undefined;
}

/**
 * <p>The request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource ID.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The resource type.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The service code.</p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>The ID of the service quota that was exceeded.</p>
   * @public
   */
  quotaCode: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * @public
 * @enum
 */
export const ProtocolType = {
  /**
   * Resource Configuration protocol type TCP
   */
  TCP: "TCP",
} as const;

/**
 * @public
 */
export type ProtocolType = (typeof ProtocolType)[keyof typeof ProtocolType];

/**
 * @public
 * @enum
 */
export const ResourceConfigurationIpAddressType = {
  /**
   * Dualstack ip address type for dns type resource configs
   */
  DUALSTACK: "DUALSTACK",
  /**
   * Ipv4 ip address type for dns type resource configs
   */
  IPV4: "IPV4",
  /**
   * IPv6 ip address type for dns type resource configs
   */
  IPV6: "IPV6",
} as const;

/**
 * @public
 */
export type ResourceConfigurationIpAddressType =
  (typeof ResourceConfigurationIpAddressType)[keyof typeof ResourceConfigurationIpAddressType];

/**
 * <p>The DNS name of the resource.</p>
 * @public
 */
export interface DnsResource {
  /**
   * <p>The domain name of the resource.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>The type of IP address.</p>
   * @public
   */
  ipAddressType?: ResourceConfigurationIpAddressType | undefined;
}

/**
 * <p>Describes an IP resource.</p>
 * @public
 */
export interface IpResource {
  /**
   * <p>The IP address of the IP resource.</p>
   * @public
   */
  ipAddress?: string | undefined;
}

/**
 * <p>Describes a resource configuration.</p>
 * @public
 */
export type ResourceConfigurationDefinition =
  | ResourceConfigurationDefinition.ArnResourceMember
  | ResourceConfigurationDefinition.DnsResourceMember
  | ResourceConfigurationDefinition.IpResourceMember
  | ResourceConfigurationDefinition.$UnknownMember;

/**
 * @public
 */
export namespace ResourceConfigurationDefinition {
  /**
   * <p>The DNS name of the resource.</p>
   * @public
   */
  export interface DnsResourceMember {
    dnsResource: DnsResource;
    ipResource?: never;
    arnResource?: never;
    $unknown?: never;
  }

  /**
   * <p>The IP resource.</p>
   * @public
   */
  export interface IpResourceMember {
    dnsResource?: never;
    ipResource: IpResource;
    arnResource?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  export interface ArnResourceMember {
    dnsResource?: never;
    ipResource?: never;
    arnResource: ArnResource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    dnsResource?: never;
    ipResource?: never;
    arnResource?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    dnsResource: (value: DnsResource) => T;
    ipResource: (value: IpResource) => T;
    arnResource: (value: ArnResource) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ResourceConfigurationDefinition, visitor: Visitor<T>): T => {
    if (value.dnsResource !== undefined) return visitor.dnsResource(value.dnsResource);
    if (value.ipResource !== undefined) return visitor.ipResource(value.ipResource);
    if (value.arnResource !== undefined) return visitor.arnResource(value.arnResource);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ResourceConfigurationType = {
  /**
   * Resource Configuration of type ARN
   */
  ARN: "ARN",
  /**
   * Resource Configuration of type CHILD
   */
  CHILD: "CHILD",
  /**
   * Resource Configuration of type GROUP
   */
  GROUP: "GROUP",
  /**
   * Resource Configuration of type SINGLE
   */
  SINGLE: "SINGLE",
} as const;

/**
 * @public
 */
export type ResourceConfigurationType = (typeof ResourceConfigurationType)[keyof typeof ResourceConfigurationType];

/**
 * @public
 */
export interface CreateResourceConfigurationRequest {
  /**
   * <p>The name of the resource configuration. The name must be unique within the account. The
   *    valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last
   *    character, or immediately after another hyphen.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of resource configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SINGLE</code> - A single resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GROUP</code> - A group of resources. You must create a group resource
   *      configuration before you create a child resource configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CHILD</code> - A single resource that is part of a group resource configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARN</code> - An Amazon Web Services resource.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type: ResourceConfigurationType | undefined;

  /**
   * <p>(SINGLE, GROUP, CHILD) The TCP port ranges that a consumer can use to access a resource configuration
   *    (for example: 1-65535). You can separate port ranges using commas (for example: 1,2,22-30).</p>
   * @public
   */
  portRanges?: string[] | undefined;

  /**
   * <p>(SINGLE, GROUP) The protocol accepted by the resource configuration.</p>
   * @public
   */
  protocol?: ProtocolType | undefined;

  /**
   * <p>(SINGLE, GROUP, ARN) The ID or ARN of the resource gateway used to connect to the resource configuration.
   *    For a child resource configuration, this value is inherited from the parent resource configuration.</p>
   * @public
   */
  resourceGatewayIdentifier?: string | undefined;

  /**
   * <p>(CHILD) The ID or ARN of the parent resource configuration (type is <code>GROUP</code>).
   *    This is used to associate a child resource configuration with a group resource configuration.</p>
   * @public
   */
  resourceConfigurationGroupIdentifier?: string | undefined;

  /**
   * <p>(SINGLE, CHILD, ARN) The resource configuration.</p>
   * @public
   */
  resourceConfigurationDefinition?: ResourceConfigurationDefinition | undefined;

  /**
   * <p>(SINGLE, GROUP, ARN) Specifies whether the resource configuration can be associated with
   *    a sharable service network. The default is false.</p>
   * @public
   */
  allowAssociationToShareableServiceNetwork?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags for the resource configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceConfigurationStatus = {
  /**
   * Resource Configuration is active.
   */
  ACTIVE: "ACTIVE",
  /**
   * Resource Configuration creation failed
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * Resource Configuration creation in progress.
   */
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  /**
   * Resource Configuration deletion failed.
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * Resource Configuration deletion in progress
   */
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  /**
   * Resource Configuration update failed
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Resource Configuration update in progress.
   */
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ResourceConfigurationStatus =
  (typeof ResourceConfigurationStatus)[keyof typeof ResourceConfigurationStatus];

/**
 * @public
 */
export interface CreateResourceConfigurationResponse {
  /**
   * <p>The ID of the resource configuration.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the resource configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource configuration.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the resource gateway associated with the resource configuration.</p>
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * <p>The ID of the parent resource configuration (type is GROUP).</p>
   * @public
   */
  resourceConfigurationGroupId?: string | undefined;

  /**
   * <p>The type of resource configuration.</p>
   * @public
   */
  type?: ResourceConfigurationType | undefined;

  /**
   * <p>The port range.</p>
   * @public
   */
  portRanges?: string[] | undefined;

  /**
   * <p>The protocol.</p>
   * @public
   */
  protocol?: ProtocolType | undefined;

  /**
   * <p>The current status of the resource configuration.</p>
   * @public
   */
  status?: ResourceConfigurationStatus | undefined;

  /**
   * <p>The resource configuration.</p>
   * @public
   */
  resourceConfigurationDefinition?: ResourceConfigurationDefinition | undefined;

  /**
   * <p>Specifies whether the resource configuration can be associated with a sharable service
   *    network.</p>
   * @public
   */
  allowAssociationToShareableServiceNetwork?: boolean | undefined;

  /**
   * <p>The date and time that the resource configuration was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The reason that the request failed.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceGatewayIpAddressType = {
  /**
   * Dualstack ip address type for resource gateway
   */
  DUALSTACK: "DUALSTACK",
  /**
   * Ipv4 ip address type for resource gateway
   */
  IPV4: "IPV4",
  /**
   * IPv6 ip address type for resource gateway
   */
  IPV6: "IPV6",
} as const;

/**
 * @public
 */
export type ResourceGatewayIpAddressType =
  (typeof ResourceGatewayIpAddressType)[keyof typeof ResourceGatewayIpAddressType];

/**
 * @public
 */
export interface CreateResourceGatewayRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the resource gateway.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the VPC for the resource gateway.</p>
   * @public
   */
  vpcIdentifier: string | undefined;

  /**
   * <p>The IDs of the VPC subnets in which to create the resource gateway.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The IDs of the security groups to apply to the resource gateway. The security groups must be
   *    in the same VPC.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The type of IP address used by the resource gateway.</p>
   * @public
   */
  ipAddressType?: ResourceGatewayIpAddressType | undefined;

  /**
   * <p>The tags for the resource gateway.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceGatewayStatus = {
  /**
   * Resource Gateway is active.
   */
  ACTIVE: "ACTIVE",
  /**
   * Resource Gateway creation failed
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * Resource Gateway creation in progress.
   */
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  /**
   * Resource Gateway deletion failed.
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * Resource Gateway deletion in progress
   */
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  /**
   * Reosurce Gateway update failed
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Resource Gateway update in progress.
   */
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ResourceGatewayStatus = (typeof ResourceGatewayStatus)[keyof typeof ResourceGatewayStatus];

/**
 * @public
 */
export interface CreateResourceGatewayResponse {
  /**
   * <p>The name of the resource gateway.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the resource gateway.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource gateway.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the resource gateway.</p>
   * @public
   */
  status?: ResourceGatewayStatus | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  vpcIdentifier?: string | undefined;

  /**
   * <p>The IDs of the resource gateway subnets.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>The IDs of the security groups for the resource gateway.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The type of IP address for the resource gateway.</p>
   * @public
   */
  ipAddressType?: ResourceGatewayIpAddressType | undefined;
}

/**
 * @public
 */
export interface CreateRuleRequest {
  /**
   * <p>The ID or ARN of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or ARN of the listener.</p>
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * <p>The name of the rule. The name must be unique within the listener. The valid characters are a-z, 0-9, and hyphens (-). You can't use a
   *   hyphen as the first or last character, or immediately after another hyphen.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The rule match.</p>
   * @public
   */
  match: RuleMatch | undefined;

  /**
   * <p>The priority assigned to the rule. Each rule for a specific listener must have a unique
   *    priority. The lower the priority number the higher the priority.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The action for the default rule.</p>
   * @public
   */
  action: RuleAction | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags for the rule.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the rule.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The rule match. The <code>RuleMatch</code> must be an <code>HttpMatch</code>. This means
   *    that the rule should be an exact match on HTTP constraints which are made up of the HTTP method,
   *    path, and header.</p>
   * @public
   */
  match?: RuleMatch | undefined;

  /**
   * <p>The priority assigned to the rule. The lower the priority number the higher the
   *    priority.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The rule action.</p>
   * @public
   */
  action?: RuleAction | undefined;
}

/**
 * @public
 */
export interface CreateServiceRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the service. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a
   *   hyphen as the first or last character, or immediately after another hyphen.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The tags for the service.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The custom domain name of the service.</p>
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>The type of IAM policy.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: The resource does not use an IAM policy. This is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS_IAM</code>: The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required.</p>
   *             </li>
   *          </ul>
   * @public
   */
  authType?: AuthType | undefined;
}

/**
 * <p>Describes the DNS information of a service.</p>
 * @public
 */
export interface DnsEntry {
  /**
   * <p>The domain name of the service.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>The ID of the hosted zone.</p>
   * @public
   */
  hostedZoneId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceStatus = {
  /**
   * Service is active.
   */
  ACTIVE: "ACTIVE",
  /**
   * Service creation failed
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * Service creation in progress.
   */
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  /**
   * Service deletion failed.
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * Service deletion in progress
   */
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus];

/**
 * @public
 */
export interface CreateServiceResponse {
  /**
   * <p>The ID of the service.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The custom domain name of the service.</p>
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>The status. If the status is <code>CREATE_FAILED</code>, you must delete and recreate the
   *    service.</p>
   * @public
   */
  status?: ServiceStatus | undefined;

  /**
   * <p>The type of IAM policy.</p>
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * <p>The public DNS name of the service.</p>
   * @public
   */
  dnsEntry?: DnsEntry | undefined;
}

/**
 * <p>Specifies if the service network should be enabled for sharing.</p>
 * @public
 */
export interface SharingConfig {
  /**
   * <p>Specifies if the service network is enabled for sharing.</p>
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateServiceNetworkRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the service network. The name must be unique to the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a
   *   hyphen as the first or last character, or immediately after another hyphen.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of IAM policy.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: The resource does not use an IAM policy. This is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS_IAM</code>: The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required.</p>
   *             </li>
   *          </ul>
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * <p>The tags for the service network.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Specify if the service network should be enabled for sharing.</p>
   * @public
   */
  sharingConfig?: SharingConfig | undefined;
}

/**
 * @public
 */
export interface CreateServiceNetworkResponse {
  /**
   * <p>The ID of the service network.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Specifies if the service network is enabled for sharing.</p>
   * @public
   */
  sharingConfig?: SharingConfig | undefined;

  /**
   * <p>The type of IAM policy.</p>
   * @public
   */
  authType?: AuthType | undefined;
}

/**
 * @public
 */
export interface CreateServiceNetworkResourceAssociationRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ID of the resource configuration to associate with the service network.</p>
   * @public
   */
  resourceConfigurationIdentifier: string | undefined;

  /**
   * <p>The ID of the service network to associate with the resource configuration.</p>
   * @public
   */
  serviceNetworkIdentifier: string | undefined;

  /**
   * <p>The tags for the association.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceNetworkResourceAssociationStatus = {
  /**
   * ServiceNetwork and Service association is active
   */
  ACTIVE: "ACTIVE",
  /**
   * ServiceNetwork and Service association creation failed.
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * ServiceNetwork and Service association creation in progress
   */
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  /**
   * ServiceNetwork and Service association deletion failed
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * ServiceNetwork and Service association deletion in progress
   */
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  /**
   * ServiceNetwork and Service association is partial
   */
  PARTIAL: "PARTIAL",
} as const;

/**
 * @public
 */
export type ServiceNetworkResourceAssociationStatus =
  (typeof ServiceNetworkResourceAssociationStatus)[keyof typeof ServiceNetworkResourceAssociationStatus];

/**
 * @public
 */
export interface CreateServiceNetworkResourceAssociationResponse {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the association.</p>
   * @public
   */
  status?: ServiceNetworkResourceAssociationStatus | undefined;

  /**
   * <p>The ID of the account that created the association.</p>
   * @public
   */
  createdBy?: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceNetworkServiceAssociationRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ID or ARN of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or ARN of the service network. You must use an ARN if the resources are in different accounts.</p>
   * @public
   */
  serviceNetworkIdentifier: string | undefined;

  /**
   * <p>The tags for the association.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceNetworkServiceAssociationStatus = {
  /**
   * ServiceNetwork and Service association is active
   */
  ACTIVE: "ACTIVE",
  /**
   * ServiceNetwork and Service association creation failed.
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * ServiceNetwork and Service association creation in progress
   */
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  /**
   * ServiceNetwork and Service association deletion failed
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * ServiceNetwork and Service association deletion in progress
   */
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ServiceNetworkServiceAssociationStatus =
  (typeof ServiceNetworkServiceAssociationStatus)[keyof typeof ServiceNetworkServiceAssociationStatus];

/**
 * @public
 */
export interface CreateServiceNetworkServiceAssociationResponse {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The association status.</p>
   * @public
   */
  status?: ServiceNetworkServiceAssociationStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The custom domain name of the service.</p>
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * <p>The DNS name of the service.</p>
   * @public
   */
  dnsEntry?: DnsEntry | undefined;
}

/**
 * @public
 */
export interface CreateServiceNetworkVpcAssociationRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ID or ARN of the service network. You must use an ARN if the resources are in different accounts.</p>
   * @public
   */
  serviceNetworkIdentifier: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  vpcIdentifier: string | undefined;

  /**
   * <p>The IDs of the security groups. Security groups aren't added by default. You can add a
   *    security group to apply network level controls to control which resources in a VPC are allowed to
   *    access the service network and its services. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">Control traffic to
   *     resources using security groups</a> in the <i>Amazon VPC User
   *    Guide</i>.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The tags for the association.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceNetworkVpcAssociationStatus = {
  /**
   * ServiceNetwork and Vpc association is active
   */
  ACTIVE: "ACTIVE",
  /**
   * ServiceNetwork and Vpc association creation failed.
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * ServiceNetwork and Vpc association creation in progress
   */
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  /**
   * ServiceNetwork and Vpc association deletion failed
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * ServiceNetwork and Vpc association deletion in progress
   */
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  /**
   * ServiceNetwork and Vpc association update failed
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * ServiceNetwork and Vpc association update in progress
   */
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ServiceNetworkVpcAssociationStatus =
  (typeof ServiceNetworkVpcAssociationStatus)[keyof typeof ServiceNetworkVpcAssociationStatus];

/**
 * @public
 */
export interface CreateServiceNetworkVpcAssociationResponse {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The association status.</p>
   * @public
   */
  status?: ServiceNetworkVpcAssociationStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * <p>Describes the codes to use when checking for a successful response from a target for health
 *    checks.</p>
 * @public
 */
export type Matcher = Matcher.HttpCodeMember | Matcher.$UnknownMember;

/**
 * @public
 */
export namespace Matcher {
  /**
   * <p>The HTTP code to use when checking for a successful response from a target.</p>
   * @public
   */
  export interface HttpCodeMember {
    httpCode: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    httpCode?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    httpCode: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Matcher, visitor: Visitor<T>): T => {
    if (value.httpCode !== undefined) return visitor.httpCode(value.httpCode);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const TargetGroupProtocol = {
  /**
   * Indicates HTTP protocol
   */
  HTTP: "HTTP",
  /**
   * Indicates HTTPS protocol
   */
  HTTPS: "HTTPS",
  /**
   * Indicates TCP protocol
   */
  TCP: "TCP",
} as const;

/**
 * @public
 */
export type TargetGroupProtocol = (typeof TargetGroupProtocol)[keyof typeof TargetGroupProtocol];

/**
 * @public
 * @enum
 */
export const HealthCheckProtocolVersion = {
  /**
   * Indicates use of HTTP/1.1 to send requests to target
   */
  HTTP1: "HTTP1",
  /**
   * Indicates use of HTTP/2 to send requests to target
   */
  HTTP2: "HTTP2",
} as const;

/**
 * @public
 */
export type HealthCheckProtocolVersion = (typeof HealthCheckProtocolVersion)[keyof typeof HealthCheckProtocolVersion];

/**
 * <p>Describes the health check configuration of a target group. Health check configurations
 *    aren't used for target groups of type <code>LAMBDA</code> or <code>ALB</code>.</p>
 * @public
 */
export interface HealthCheckConfig {
  /**
   * <p>Indicates whether health checking is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The protocol used when performing health checks on targets. The possible protocols are
   *     <code>HTTP</code> and <code>HTTPS</code>. The default is <code>HTTP</code>.</p>
   * @public
   */
  protocol?: TargetGroupProtocol | undefined;

  /**
   * <p>The protocol version used when performing health checks on targets. The possible protocol
   *    versions are <code>HTTP1</code> and <code>HTTP2</code>.</p>
   * @public
   */
  protocolVersion?: HealthCheckProtocolVersion | undefined;

  /**
   * <p>The port used when performing health checks on targets. The default setting is the port that
   *    a target receives traffic on.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The destination for health checks on the targets. If the protocol version is
   *     <code>HTTP/1.1</code> or <code>HTTP/2</code>, specify a valid URI (for example,
   *     <code>/path?query</code>). The default path is <code>/</code>. Health checks are not supported
   *    if the protocol version is <code>gRPC</code>, however, you can choose <code>HTTP/1.1</code> or
   *     <code>HTTP/2</code> and specify a valid URI.</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>The approximate amount of time, in seconds, between health checks of an individual target.
   *    The range is 5–300 seconds. The default is 30 seconds.</p>
   * @public
   */
  healthCheckIntervalSeconds?: number | undefined;

  /**
   * <p>The amount of time, in seconds, to wait before reporting a target as unhealthy. The range is
   *    1–120 seconds. The default is 5 seconds.</p>
   * @public
   */
  healthCheckTimeoutSeconds?: number | undefined;

  /**
   * <p>The number of consecutive successful health checks required before considering an unhealthy
   *    target healthy. The range is 2–10. The default is 5.</p>
   * @public
   */
  healthyThresholdCount?: number | undefined;

  /**
   * <p>The number of consecutive failed health checks required before considering a target
   *    unhealthy. The range is 2–10. The default is 2.</p>
   * @public
   */
  unhealthyThresholdCount?: number | undefined;

  /**
   * <p>The codes to use when checking for a successful response from a target.</p>
   * @public
   */
  matcher?: Matcher | undefined;
}

/**
 * @public
 * @enum
 */
export const IpAddressType = {
  /**
   * Indicates IPv4 address type
   */
  IPV4: "IPV4",
  /**
   * Indicates IPv6 address type
   */
  IPV6: "IPV6",
} as const;

/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * @public
 * @enum
 */
export const LambdaEventStructureVersion = {
  /**
   * This is the default lambda event structure version
   */
  V1: "V1",
  /**
   * Indicates use of lambda event structure version 2
   */
  V2: "V2",
} as const;

/**
 * @public
 */
export type LambdaEventStructureVersion =
  (typeof LambdaEventStructureVersion)[keyof typeof LambdaEventStructureVersion];

/**
 * @public
 * @enum
 */
export const TargetGroupProtocolVersion = {
  /**
   * Indicates use of gRPC to send requests to target
   */
  GRPC: "GRPC",
  /**
   * Indicates use of HTTP/1.1 to send requests to target
   */
  HTTP1: "HTTP1",
  /**
   * Indicates use of HTTP/2 to send requests to target
   */
  HTTP2: "HTTP2",
} as const;

/**
 * @public
 */
export type TargetGroupProtocolVersion = (typeof TargetGroupProtocolVersion)[keyof typeof TargetGroupProtocolVersion];

/**
 * <p>Describes the configuration of a target group.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html">Target groups</a> in the
 *     <i>Amazon VPC Lattice User Guide</i>.</p>
 * @public
 */
export interface TargetGroupConfig {
  /**
   * <p>The port on which the targets are listening. For HTTP, the default is 80. For HTTPS, the
   *    default is 443. Not supported if the target group type is <code>LAMBDA</code>.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The protocol to use for routing traffic to the targets. The default is the protocol of the
   *    target group. Not supported if the target group type is <code>LAMBDA</code>.</p>
   * @public
   */
  protocol?: TargetGroupProtocol | undefined;

  /**
   * <p>The protocol version. The default is <code>HTTP1</code>. Not supported if the target group
   *    type is <code>LAMBDA</code>.</p>
   * @public
   */
  protocolVersion?: TargetGroupProtocolVersion | undefined;

  /**
   * <p>The type of IP address used for the target group. Supported only if the target group type is
   *     <code>IP</code>. The default is <code>IPV4</code>.</p>
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * <p>The ID of the VPC. Not supported if the target group type is <code>LAMBDA</code>.</p>
   * @public
   */
  vpcIdentifier?: string | undefined;

  /**
   * <p>The health check configuration. Not supported if the target group type is
   *     <code>LAMBDA</code> or <code>ALB</code>.</p>
   * @public
   */
  healthCheck?: HealthCheckConfig | undefined;

  /**
   * <p>The version of the event structure that your Lambda function receives. Supported only if the
   *    target group type is <code>LAMBDA</code>. The default is <code>V1</code>.</p>
   * @public
   */
  lambdaEventStructureVersion?: LambdaEventStructureVersion | undefined;
}

/**
 * @public
 * @enum
 */
export const TargetGroupType = {
  /**
   * Indicates target in this target group is an ALB
   */
  ALB: "ALB",
  /**
   * Indicates targets in this target group are EC2 instances
   */
  INSTANCE: "INSTANCE",
  /**
   * Indicates targets in this target group are IP
   */
  IP: "IP",
  /**
   * Indicates targets in this target group are Lambda
   */
  LAMBDA: "LAMBDA",
} as const;

/**
 * @public
 */
export type TargetGroupType = (typeof TargetGroupType)[keyof typeof TargetGroupType];

/**
 * @public
 */
export interface CreateTargetGroupRequest {
  /**
   * <p>The name of the target group. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a
   *   hyphen as the first or last character, or immediately after another hyphen.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of target group.</p>
   * @public
   */
  type: TargetGroupType | undefined;

  /**
   * <p>The target group configuration.</p>
   * @public
   */
  config?: TargetGroupConfig | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags for the target group.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const TargetGroupStatus = {
  /**
   * TargetGroup is active
   */
  ACTIVE: "ACTIVE",
  /**
   * TargetGroup creation failed.
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * TargetGroup creation in progress
   */
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  /**
   * TargetGroup deletion failed
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * TargetGroup deletion in progress
   */
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type TargetGroupStatus = (typeof TargetGroupStatus)[keyof typeof TargetGroupStatus];

/**
 * @public
 */
export interface CreateTargetGroupResponse {
  /**
   * <p>The ID of the target group.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the target group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of target group.</p>
   * @public
   */
  type?: TargetGroupType | undefined;

  /**
   * <p>The target group configuration.</p>
   * @public
   */
  config?: TargetGroupConfig | undefined;

  /**
   * <p>The status. You can retry the operation if the status is <code>CREATE_FAILED</code>.
   *    However, if you retry it while the status is <code>CREATE_IN_PROGRESS</code>, there is no change
   *    in the status.</p>
   * @public
   */
  status?: TargetGroupStatus | undefined;
}

/**
 * @public
 */
export interface DeleteAuthPolicyRequest {
  /**
   * <p>The ID or ARN of the resource.</p>
   * @public
   */
  resourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAuthPolicyResponse {}

/**
 * @public
 */
export interface DeleteListenerRequest {
  /**
   * <p>The ID or ARN of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or ARN of the listener.</p>
   * @public
   */
  listenerIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteListenerResponse {}

/**
 * @public
 */
export interface DeleteResourceConfigurationRequest {
  /**
   * <p>The ID or ARN of the resource configuration.</p>
   * @public
   */
  resourceConfigurationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceConfigurationResponse {}

/**
 * @public
 */
export interface DeleteResourceEndpointAssociationRequest {
  /**
   * <p>The ID or ARN of the association.</p>
   * @public
   */
  resourceEndpointAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceEndpointAssociationResponse {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the resource configuration.</p>
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource configuration associated with the VPC
   *    endpoint of type resource.</p>
   * @public
   */
  resourceConfigurationArn?: string | undefined;

  /**
   * <p>The ID of the resource VPC endpoint that is associated with the resource configuration.</p>
   * @public
   */
  vpcEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceGatewayRequest {
  /**
   * <p>The ID or ARN of the resource gateway.</p>
   * @public
   */
  resourceGatewayIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceGatewayResponse {
  /**
   * <p>The ID of the resource gateway.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource gateway.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the resource gateway.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The status of the resource gateway.</p>
   * @public
   */
  status?: ResourceGatewayStatus | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * @public
 */
export interface DeleteRuleRequest {
  /**
   * <p>The ID or ARN of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or ARN of the listener.</p>
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * <p>The ID or ARN of the rule.</p>
   * @public
   */
  ruleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleResponse {}

/**
 * @public
 */
export interface DeleteServiceRequest {
  /**
   * <p>The ID or ARN of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceResponse {
  /**
   * <p>The ID of the service.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The status. You can retry the operation if the status is <code>DELETE_FAILED</code>.
   *    However, if you retry it while the status is <code>DELETE_IN_PROGRESS</code>, the status doesn't
   *    change.</p>
   * @public
   */
  status?: ServiceStatus | undefined;
}

/**
 * @public
 */
export interface DeleteServiceNetworkRequest {
  /**
   * <p>The ID or ARN of the service network.</p>
   * @public
   */
  serviceNetworkIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceNetworkResponse {}

/**
 * @public
 */
export interface DeleteServiceNetworkResourceAssociationRequest {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  serviceNetworkResourceAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceNetworkResourceAssociationResponse {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the association.</p>
   * @public
   */
  status?: ServiceNetworkResourceAssociationStatus | undefined;
}

/**
 * @public
 */
export interface DeleteServiceNetworkServiceAssociationRequest {
  /**
   * <p>The ID or ARN of the association.</p>
   * @public
   */
  serviceNetworkServiceAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceNetworkServiceAssociationResponse {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The status. You can retry the operation if the status is <code>DELETE_FAILED</code>.
   *    However, if you retry it when the status is <code>DELETE_IN_PROGRESS</code>, there is no change
   *    in the status.</p>
   * @public
   */
  status?: ServiceNetworkServiceAssociationStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceNetworkVpcAssociationRequest {
  /**
   * <p>The ID or ARN of the association.</p>
   * @public
   */
  serviceNetworkVpcAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceNetworkVpcAssociationResponse {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The status. You can retry the operation if the status is <code>DELETE_FAILED</code>.
   *    However, if you retry it while the status is <code>DELETE_IN_PROGRESS</code>, there is no change
   *    in the status.</p>
   * @public
   */
  status?: ServiceNetworkVpcAssociationStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTargetGroupRequest {
  /**
   * <p>The ID or ARN of the target group.</p>
   * @public
   */
  targetGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteTargetGroupResponse {
  /**
   * <p>The ID of the target group.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status. You can retry the operation if the status is <code>DELETE_FAILED</code>.
   *    However, if you retry it while the status is <code>DELETE_IN_PROGRESS</code>, the status doesn't
   *    change.</p>
   * @public
   */
  status?: TargetGroupStatus | undefined;
}

/**
 * <p>Describes a target.</p>
 * @public
 */
export interface Target {
  /**
   * <p>The ID of the target. If the target group type is <code>INSTANCE</code>, this is an instance
   *    ID. If the target group type is <code>IP</code>, this is an IP address. If the target group type
   *    is <code>LAMBDA</code>, this is the ARN of a Lambda function. If the target group type is
   *     <code>ALB</code>, this is the ARN of an Application Load Balancer.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The port on which the target is listening. For HTTP, the default is 80. For HTTPS, the
   *    default is 443.</p>
   * @public
   */
  port?: number | undefined;
}

/**
 * @public
 */
export interface DeregisterTargetsRequest {
  /**
   * <p>The ID or ARN of the target group.</p>
   * @public
   */
  targetGroupIdentifier: string | undefined;

  /**
   * <p>The targets to deregister.</p>
   * @public
   */
  targets: Target[] | undefined;
}

/**
 * <p>Describes a target failure.</p>
 * @public
 */
export interface TargetFailure {
  /**
   * <p>The ID of the target. If the target group type is <code>INSTANCE</code>, this is an instance
   *    ID. If the target group type is <code>IP</code>, this is an IP address. If the target group type
   *    is <code>LAMBDA</code>, this is the ARN of a Lambda function. If the target group type is
   *     <code>ALB</code>, this is the ARN of an Application Load Balancer.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The port on which the target is listening. This parameter doesn't apply if the target is a
   *    Lambda function.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The failure code.</p>
   * @public
   */
  failureCode?: string | undefined;

  /**
   * <p>The failure message.</p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTargetsResponse {
  /**
   * <p>The targets that were successfully deregistered.</p>
   * @public
   */
  successful?: Target[] | undefined;

  /**
   * <p>The targets that the operation couldn't deregister.</p>
   * @public
   */
  unsuccessful?: TargetFailure[] | undefined;
}

/**
 * @public
 */
export interface GetAuthPolicyRequest {
  /**
   * <p>The ID or ARN of the service network or service.</p>
   * @public
   */
  resourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAuthPolicyResponse {
  /**
   * <p>The auth policy.</p>
   * @public
   */
  policy?: string | undefined;

  /**
   * <p>The state of the auth policy. The auth policy is only active when the auth type is set to
   *     <code>AWS_IAM</code>. If you provide a policy, then authentication and authorization decisions
   *    are made based on this policy and the client's IAM policy. If the auth type is <code>NONE</code>,
   *    then any auth policy that you provide remains inactive. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#create-service-network">Create a service network</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
   * @public
   */
  state?: AuthPolicyState | undefined;

  /**
   * <p>The date and time that the auth policy was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time that the auth policy was last updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetListenerRequest {
  /**
   * <p>The ID or ARN of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or ARN of the listener.</p>
   * @public
   */
  listenerIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetListenerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the listener.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the listener.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The listener protocol.</p>
   * @public
   */
  protocol?: ListenerProtocol | undefined;

  /**
   * <p>The listener port.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  serviceId?: string | undefined;

  /**
   * <p>The actions for the default listener rule.</p>
   * @public
   */
  defaultAction?: RuleAction | undefined;

  /**
   * <p>The date and time that the listener was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time that the listener was last updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetResourceConfigurationRequest {
  /**
   * <p>The ID of the resource configuration.</p>
   * @public
   */
  resourceConfigurationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetResourceConfigurationResponse {
  /**
   * <p>The ID of the resource configuration.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the resource configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource configuration.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the resource gateway used to connect to the resource configuration in a given VPC. You can specify the resource gateway identifier only for resource configurations with type SINGLE, GROUP, or ARN.</p>
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * <p>The ID of the group resource configuration.</p>
   * @public
   */
  resourceConfigurationGroupId?: string | undefined;

  /**
   * <p>The type of resource configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SINGLE</code> - A single resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GROUP</code> - A group of resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CHILD</code> - A single resource that is part of a group resource configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARN</code> - An Amazon Web Services resource.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: ResourceConfigurationType | undefined;

  /**
   * <p>Specifies whether the resource configuration is associated with a sharable service
   *    network.</p>
   * @public
   */
  allowAssociationToShareableServiceNetwork?: boolean | undefined;

  /**
   * <p>The TCP port ranges that a consumer can use to access a resource configuration. You can separate port ranges with a comma. Example: 1-65535 or 1,2,22-30</p>
   * @public
   */
  portRanges?: string[] | undefined;

  /**
   * <p>The TCP protocol accepted by the specified resource configuration.</p>
   * @public
   */
  protocol?: ProtocolType | undefined;

  /**
   * <p>The custom domain name of the resource configuration.</p>
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * <p>The status of the resource configuration.</p>
   * @public
   */
  status?: ResourceConfigurationStatus | undefined;

  /**
   * <p>The resource configuration.</p>
   * @public
   */
  resourceConfigurationDefinition?: ResourceConfigurationDefinition | undefined;

  /**
   * <p>The date and time that the resource configuration was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>Indicates whether the resource configuration was created and is managed by Amazon.</p>
   * @public
   */
  amazonManaged?: boolean | undefined;

  /**
   * <p>The reason the create-resource-configuration request failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The most recent date and time that the resource configuration was updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetResourceGatewayRequest {
  /**
   * <p>The ID of the resource gateway.</p>
   * @public
   */
  resourceGatewayIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetResourceGatewayResponse {
  /**
   * <p>The name of the resource gateway.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the resource gateway.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource gateway.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status for the resource gateway.</p>
   * @public
   */
  status?: ResourceGatewayStatus | undefined;

  /**
   * <p>The ID of the VPC for the resource gateway.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The IDs of the VPC subnets for resource gateway.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>The security group IDs associated with the resource gateway.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The type of IP address for the resource gateway.</p>
   * @public
   */
  ipAddressType?: ResourceGatewayIpAddressType | undefined;

  /**
   * <p>The date and time that the resource gateway was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time that the resource gateway was last updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the service network or service.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>An IAM policy.</p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetRuleRequest {
  /**
   * <p>The ID or ARN of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or ARN of the listener.</p>
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * <p>The ID or ARN of the listener rule.</p>
   * @public
   */
  ruleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the listener.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the listener.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Indicates whether this is the default rule.</p>
   * @public
   */
  isDefault?: boolean | undefined;

  /**
   * <p>The rule match.</p>
   * @public
   */
  match?: RuleMatch | undefined;

  /**
   * <p>The priority level for the specified rule.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The action for the default rule.</p>
   * @public
   */
  action?: RuleAction | undefined;

  /**
   * <p>The date and time that the listener rule was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time that the listener rule was last updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetServiceRequest {
  /**
   * <p>The ID or ARN of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetServiceResponse {
  /**
   * <p>The ID of the service.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The date and time that the service was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time that the service was last updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The DNS name of the service.</p>
   * @public
   */
  dnsEntry?: DnsEntry | undefined;

  /**
   * <p>The custom domain name of the service.</p>
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>The status of the service.</p>
   * @public
   */
  status?: ServiceStatus | undefined;

  /**
   * <p>The type of IAM policy.</p>
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * <p>The failure code.</p>
   * @public
   */
  failureCode?: string | undefined;

  /**
   * <p>The failure message.</p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkRequest {
  /**
   * <p>The ID or ARN of the service network.</p>
   * @public
   */
  serviceNetworkIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkResponse {
  /**
   * <p>The ID of the service network.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The date and time that the service network was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time of the last update, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The type of IAM policy.</p>
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * <p>Specifies if the service network is enabled for sharing.</p>
   * @public
   */
  sharingConfig?: SharingConfig | undefined;

  /**
   * <p>The number of VPCs associated with the service network.</p>
   * @public
   */
  numberOfAssociatedVPCs?: number | undefined;

  /**
   * <p>The number of services associated with the service network.</p>
   * @public
   */
  numberOfAssociatedServices?: number | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkResourceAssociationRequest {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  serviceNetworkResourceAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkResourceAssociationResponse {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the association.</p>
   * @public
   */
  status?: ServiceNetworkResourceAssociationStatus | undefined;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The date and time that the association was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The ID of the resource configuration that is associated with the service network.</p>
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  resourceConfigurationArn?: string | undefined;

  /**
   * <p>The name of the resource configuration that is associated with the service network.</p>
   * @public
   */
  resourceConfigurationName?: string | undefined;

  /**
   * <p>The ID of the service network that is associated with the resource configuration.</p>
   * @public
   */
  serviceNetworkId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network that is associated with the resource configuration.</p>
   * @public
   */
  serviceNetworkArn?: string | undefined;

  /**
   * <p>The name of the service network that is associated with the resource configuration.</p>
   * @public
   */
  serviceNetworkName?: string | undefined;

  /**
   * <p>The reason the association request failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The failure code.</p>
   * @public
   */
  failureCode?: string | undefined;

  /**
   * <p>The most recent date and time that the association was updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The private DNS entry for the service.</p>
   * @public
   */
  privateDnsEntry?: DnsEntry | undefined;

  /**
   * <p>The DNS entry for the service.</p>
   * @public
   */
  dnsEntry?: DnsEntry | undefined;

  /**
   * <p>Indicates whether the association is managed by Amazon.</p>
   * @public
   */
  isManagedAssociation?: boolean | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkServiceAssociationRequest {
  /**
   * <p>The ID or ARN of the association.</p>
   * @public
   */
  serviceNetworkServiceAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkServiceAssociationResponse {
  /**
   * <p>The ID of the service network and service association.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The status of the association.</p>
   * @public
   */
  status?: ServiceNetworkServiceAssociationStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The date and time that the association was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  serviceId?: string | undefined;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * <p>The ID of the service network.</p>
   * @public
   */
  serviceNetworkId?: string | undefined;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  serviceNetworkName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  serviceNetworkArn?: string | undefined;

  /**
   * <p>The DNS name of the service.</p>
   * @public
   */
  dnsEntry?: DnsEntry | undefined;

  /**
   * <p>The custom domain name of the service.</p>
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * <p>The failure message.</p>
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * <p>The failure code.</p>
   * @public
   */
  failureCode?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkVpcAssociationRequest {
  /**
   * <p>The ID or ARN of the association.</p>
   * @public
   */
  serviceNetworkVpcAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkVpcAssociationResponse {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The status of the association.</p>
   * @public
   */
  status?: ServiceNetworkVpcAssociationStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The date and time that the association was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The ID of the service network.</p>
   * @public
   */
  serviceNetworkId?: string | undefined;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  serviceNetworkName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  serviceNetworkArn?: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The failure message.</p>
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * <p>The failure code.</p>
   * @public
   */
  failureCode?: string | undefined;

  /**
   * <p>The date and time that the association was last updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetTargetGroupRequest {
  /**
   * <p>The ID or ARN of the target group.</p>
   * @public
   */
  targetGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTargetGroupResponse {
  /**
   * <p>The ID of the target group.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the target group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The target group type.</p>
   * @public
   */
  type?: TargetGroupType | undefined;

  /**
   * <p>The target group configuration.</p>
   * @public
   */
  config?: TargetGroupConfig | undefined;

  /**
   * <p>The date and time that the target group was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time that the target group was last updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  status?: TargetGroupStatus | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the service.</p>
   * @public
   */
  serviceArns?: string[] | undefined;

  /**
   * <p>The failure message.</p>
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * <p>The failure code.</p>
   * @public
   */
  failureCode?: string | undefined;
}

/**
 * @public
 */
export interface ListListenersRequest {
  /**
   * <p>The ID or ARN of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about a listener.</p>
 * @public
 */
export interface ListenerSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the listener.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the listener.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The listener protocol.</p>
   * @public
   */
  protocol?: ListenerProtocol | undefined;

  /**
   * <p>The listener port.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The date and time that the listener was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time that the listener was last updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListListenersResponse {
  /**
   * <p>Information about the listeners.</p>
   * @public
   */
  items: ListenerSummary[] | undefined;

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateListenerRequest {
  /**
   * <p>The ID or ARN of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or ARN of the listener.</p>
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * <p>The action for the default rule.</p>
   * @public
   */
  defaultAction: RuleAction | undefined;
}

/**
 * @public
 */
export interface UpdateListenerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the listener.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the listener.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The protocol of the listener.</p>
   * @public
   */
  protocol?: ListenerProtocol | undefined;

  /**
   * <p>The listener port.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  serviceId?: string | undefined;

  /**
   * <p>The action for the default rule.</p>
   * @public
   */
  defaultAction?: RuleAction | undefined;
}

/**
 * @public
 */
export interface ListResourceConfigurationsRequest {
  /**
   * <p>The ID of the resource gateway for the resource configuration.</p>
   * @public
   */
  resourceGatewayIdentifier?: string | undefined;

  /**
   * <p>The ID of the group resource configuration.</p>
   * @public
   */
  resourceConfigurationGroupIdentifier?: string | undefined;

  /**
   * <p>The maximum page size.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about a resource configuration.</p>
 * @public
 */
export interface ResourceConfigurationSummary {
  /**
   * <p>The ID of the resource configuration.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the resource configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource configuration.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the resource gateway.</p>
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * <p>The ID of the group resource configuration.</p>
   * @public
   */
  resourceConfigurationGroupId?: string | undefined;

  /**
   * <p>The type of resource configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SINGLE</code> - A single resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GROUP</code> - A group of resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CHILD</code> - A single resource that is part of a group resource configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARN</code> - An Amazon Web Services resource.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: ResourceConfigurationType | undefined;

  /**
   * <p>The status of the resource configuration.</p>
   * @public
   */
  status?: ResourceConfigurationStatus | undefined;

  /**
   * <p>Indicates whether the resource configuration was created and is managed by Amazon.</p>
   * @public
   */
  amazonManaged?: boolean | undefined;

  /**
   * <p>The date and time that the resource configuration was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The most recent date and time that the resource configuration was updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListResourceConfigurationsResponse {
  /**
   * <p>Information about the resource configurations.</p>
   * @public
   */
  items?: ResourceConfigurationSummary[] | undefined;

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceEndpointAssociationsRequest {
  /**
   * <p>The ID for the resource configuration associated with the VPC endpoint.</p>
   * @public
   */
  resourceConfigurationIdentifier: string | undefined;

  /**
   * <p>The ID of the association.</p>
   * @public
   */
  resourceEndpointAssociationIdentifier?: string | undefined;

  /**
   * <p>The ID of the VPC endpoint in the association.</p>
   * @public
   */
  vpcEndpointId?: string | undefined;

  /**
   * <p>The owner of the VPC endpoint in the association.</p>
   * @public
   */
  vpcEndpointOwner?: string | undefined;

  /**
   * <p>The maximum page size.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about a VPC endpoint association.</p>
 * @public
 */
export interface ResourceEndpointAssociationSummary {
  /**
   * <p>The ID of the VPC endpoint association.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the VPC endpoint association.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the resource configuration.</p>
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource configuration.</p>
   * @public
   */
  resourceConfigurationArn?: string | undefined;

  /**
   * <p>The name of the resource configuration.</p>
   * @public
   */
  resourceConfigurationName?: string | undefined;

  /**
   * <p>The ID of the VPC endpoint.</p>
   * @public
   */
  vpcEndpointId?: string | undefined;

  /**
   * <p>The owner of the VPC endpoint.</p>
   * @public
   */
  vpcEndpointOwner?: string | undefined;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The date and time that the VPC endpoint association was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListResourceEndpointAssociationsResponse {
  /**
   * <p>Information about the VPC endpoint associations.</p>
   * @public
   */
  items: ResourceEndpointAssociationSummary[] | undefined;

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceGatewaysRequest {
  /**
   * <p>The maximum page size.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about a resource gateway.</p>
 * @public
 */
export interface ResourceGatewaySummary {
  /**
   * <p>The name of the resource gateway.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the resource gateway.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource gateway.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the resource gateway.</p>
   * @public
   */
  status?: ResourceGatewayStatus | undefined;

  /**
   * <p>The ID of the VPC for the resource gateway.</p>
   * @public
   */
  vpcIdentifier?: string | undefined;

  /**
   * <p>The IDs of the VPC subnets for the resource gateway.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>The IDs of the security groups applied to the resource gateway.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The type of IP address used by the resource gateway.</p>
   * @public
   */
  ipAddressType?: ResourceGatewayIpAddressType | undefined;

  /**
   * <p>The date and time that the VPC endpoint association was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The most recent date and time that the resource gateway was updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListResourceGatewaysResponse {
  /**
   * <p>Information about the resource gateways.</p>
   * @public
   */
  items?: ResourceGatewaySummary[] | undefined;

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * <p>The ID or ARN of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or ARN of the listener.</p>
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about a listener rule.</p>
 * @public
 */
export interface RuleSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the rule.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Indicates whether this is the default listener rule.</p>
   * @public
   */
  isDefault?: boolean | undefined;

  /**
   * <p>The priority of the rule.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The date and time that the listener rule was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time that the listener rule was last updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * <p>Information about the rules.</p>
   * @public
   */
  items: RuleSummary[] | undefined;

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworkResourceAssociationsRequest {
  /**
   * <p>The ID of the service network.</p>
   * @public
   */
  serviceNetworkIdentifier?: string | undefined;

  /**
   * <p>The ID of the resource configurationk.</p>
   * @public
   */
  resourceConfigurationIdentifier?: string | undefined;

  /**
   * <p>The maximum page size.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about an association between a service network and a resource configuration.</p>
 * @public
 */
export interface ServiceNetworkResourceAssociationSummary {
  /**
   * <p>The ID of the association between the service network and resource configuration.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the service network associated with the resource configuration.</p>
   * @public
   */
  status?: ServiceNetworkResourceAssociationStatus | undefined;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The date and time that the association was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The ID of the resource configuration associated with the service network.</p>
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  resourceConfigurationArn?: string | undefined;

  /**
   * <p>The name of the resource configuration associated with the service network.</p>
   * @public
   */
  resourceConfigurationName?: string | undefined;

  /**
   * <p>The ID of the service network associated with the resource configuration.</p>
   * @public
   */
  serviceNetworkId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network associated with the resource configuration.</p>
   * @public
   */
  serviceNetworkArn?: string | undefined;

  /**
   * <p>The name of the service network associated with the resource configuration.</p>
   * @public
   */
  serviceNetworkName?: string | undefined;

  /**
   * <p>The DNS entry for the service.</p>
   * @public
   */
  dnsEntry?: DnsEntry | undefined;

  /**
   * <p>The private DNS entry for the service.</p>
   * @public
   */
  privateDnsEntry?: DnsEntry | undefined;

  /**
   * <p>Specifies whether the association is managed by Amazon.</p>
   * @public
   */
  isManagedAssociation?: boolean | undefined;

  /**
   * <p>The failure code.</p>
   * @public
   */
  failureCode?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworkResourceAssociationsResponse {
  /**
   * <p>Information about the associations.</p>
   * @public
   */
  items: ServiceNetworkResourceAssociationSummary[] | undefined;

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworksRequest {
  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about a service network.</p>
 * @public
 */
export interface ServiceNetworkSummary {
  /**
   * <p>The ID of the service network.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The date and time that the service network was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time that the service network was last updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The number of VPCs associated with the service network.</p>
   * @public
   */
  numberOfAssociatedVPCs?: number | undefined;

  /**
   * <p>The number of services associated with the service network.</p>
   * @public
   */
  numberOfAssociatedServices?: number | undefined;

  /**
   * <p>The number of resource configurations associated with a service network.</p>
   * @public
   */
  numberOfAssociatedResourceConfigurations?: number | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworksResponse {
  /**
   * <p>Information about the service networks.</p>
   * @public
   */
  items: ServiceNetworkSummary[] | undefined;

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworkServiceAssociationsRequest {
  /**
   * <p>The ID or ARN of the service network.</p>
   * @public
   */
  serviceNetworkIdentifier?: string | undefined;

  /**
   * <p>The ID or ARN of the service.</p>
   * @public
   */
  serviceIdentifier?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about an association between a service network and a service.</p>
 * @public
 */
export interface ServiceNetworkServiceAssociationSummary {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The status. If the deletion fails, try to delete again.</p>
   * @public
   */
  status?: ServiceNetworkServiceAssociationStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The date and time that the association was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  serviceId?: string | undefined;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * <p>The ID of the service network.</p>
   * @public
   */
  serviceNetworkId?: string | undefined;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  serviceNetworkName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  serviceNetworkArn?: string | undefined;

  /**
   * <p>The DNS information.</p>
   * @public
   */
  dnsEntry?: DnsEntry | undefined;

  /**
   * <p>The custom domain name of the service.</p>
   * @public
   */
  customDomainName?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworkServiceAssociationsResponse {
  /**
   * <p>Information about the associations.</p>
   * @public
   */
  items: ServiceNetworkServiceAssociationSummary[] | undefined;

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworkVpcAssociationsRequest {
  /**
   * <p>The ID or ARN of the service network.</p>
   * @public
   */
  serviceNetworkIdentifier?: string | undefined;

  /**
   * <p>The ID or ARN of the VPC.</p>
   * @public
   */
  vpcIdentifier?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about an association between a service network and a VPC.</p>
 * @public
 */
export interface ServiceNetworkVpcAssociationSummary {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  status?: ServiceNetworkVpcAssociationStatus | undefined;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The date and time that the association was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The ID of the service network.</p>
   * @public
   */
  serviceNetworkId?: string | undefined;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  serviceNetworkName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  serviceNetworkArn?: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The date and time that the association was last updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworkVpcAssociationsResponse {
  /**
   * <p>Information about the associations.</p>
   * @public
   */
  items: ServiceNetworkVpcAssociationSummary[] | undefined;

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworkVpcEndpointAssociationsRequest {
  /**
   * <p>The ID of the service network associated with the VPC endpoint.</p>
   * @public
   */
  serviceNetworkIdentifier: string | undefined;

  /**
   * <p>The maximum page size.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Describes the association between a service network and a VPC endpoint.</p>
 * @public
 */
export interface ServiceNetworkEndpointAssociation {
  /**
   * <p>The ID of the VPC endpoint associated with the service network.</p>
   * @public
   */
  vpcEndpointId?: string | undefined;

  /**
   * <p>The ID of the VPC for the association.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The owner of the VPC endpoint associated with the service network.</p>
   * @public
   */
  vpcEndpointOwnerId?: string | undefined;

  /**
   * <p>The ID of the association.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  state?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  serviceNetworkArn?: string | undefined;

  /**
   * <p>The date and time that the association was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworkVpcEndpointAssociationsResponse {
  /**
   * <p>Information about the association between the VPC endpoint and service network.</p>
   * @public
   */
  items: ServiceNetworkEndpointAssociation[] | undefined;

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesRequest {
  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about a service.</p>
 * @public
 */
export interface ServiceSummary {
  /**
   * <p>The ID of the service.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The date and time that the service was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time that the service was last updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The DNS information.</p>
   * @public
   */
  dnsEntry?: DnsEntry | undefined;

  /**
   * <p>The custom domain name of the service.</p>
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  status?: ServiceStatus | undefined;
}

/**
 * @public
 */
export interface ListServicesResponse {
  /**
   * <p>Information about the services.</p>
   * @public
   */
  items?: ServiceSummary[] | undefined;

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTargetGroupsRequest {
  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The ID or ARN of the VPC.</p>
   * @public
   */
  vpcIdentifier?: string | undefined;

  /**
   * <p>The target group type.</p>
   * @public
   */
  targetGroupType?: TargetGroupType | undefined;
}

/**
 * <p>Summary information about a target group.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html">Target groups</a> in the
 *     <i>Amazon VPC Lattice User Guide</i>.</p>
 * @public
 */
export interface TargetGroupSummary {
  /**
   * <p>The ID of the target group.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the target group.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the target group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The target group type.</p>
   * @public
   */
  type?: TargetGroupType | undefined;

  /**
   * <p>The date and time that the target group was created, in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The port of the target group.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The protocol of the target group.</p>
   * @public
   */
  protocol?: TargetGroupProtocol | undefined;

  /**
   * <p>The type of IP address used for the target group. The possible values are <code>IPV4</code>
   *    and <code>IPV6</code>. This is an optional parameter. If not specified, the default is
   *     <code>IPV4</code>.</p>
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * <p>The ID of the VPC of the target group.</p>
   * @public
   */
  vpcIdentifier?: string | undefined;

  /**
   * <p>The date and time that the target group was last updated, in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  status?: TargetGroupStatus | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the service.</p>
   * @public
   */
  serviceArns?: string[] | undefined;

  /**
   * <p>The version of the event structure that your Lambda function receives. Supported only if the
   *    target group type is <code>LAMBDA</code>.</p>
   * @public
   */
  lambdaEventStructureVersion?: LambdaEventStructureVersion | undefined;
}

/**
 * @public
 */
export interface ListTargetGroupsResponse {
  /**
   * <p>Information about the target groups.</p>
   * @public
   */
  items?: TargetGroupSummary[] | undefined;

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTargetsRequest {
  /**
   * <p>The ID or ARN of the target group.</p>
   * @public
   */
  targetGroupIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The targets.</p>
   * @public
   */
  targets?: Target[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TargetStatus = {
  /**
   * The target is deregistering and connection draining is in process.
   */
  DRAINING: "DRAINING",
  /**
   * The target is healthy.
   */
  HEALTHY: "HEALTHY",
  /**
   * The initial health check is in progress.
   */
  INITIAL: "INITIAL",
  /**
   * Health checks are disabled.
   */
  UNAVAILABLE: "UNAVAILABLE",
  /**
   * The target failed the health check.
   */
  UNHEALTHY: "UNHEALTHY",
  /**
   * The target group is not used in a listener rule.
   */
  UNUSED: "UNUSED",
} as const;

/**
 * @public
 */
export type TargetStatus = (typeof TargetStatus)[keyof typeof TargetStatus];

/**
 * <p>Summary information about a target.</p>
 * @public
 */
export interface TargetSummary {
  /**
   * <p>The ID of the target. If the target group type is <code>INSTANCE</code>, this is an instance
   *    ID. If the target group type is <code>IP</code>, this is an IP address. If the target group type
   *    is <code>LAMBDA</code>, this is the ARN of a Lambda function. If the target type is
   *     <code>ALB</code>, this is the ARN of an Application Load Balancer.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The port on which the target is listening.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The status of the target.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRAINING</code>: The target is being deregistered. No new connections are sent to
   *      this target while current connections are being drained. The default draining time is 5
   *      minutes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNAVAILABLE</code>: Health checks are unavailable for the target group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HEALTHY</code>: The target is healthy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNHEALTHY</code>: The target is unhealthy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INITIAL</code>: Initial health checks on the target are being performed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNUSED</code>: Target group is not used in a service.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: TargetStatus | undefined;

  /**
   * <p>The code for why the target status is what it is.</p>
   * @public
   */
  reasonCode?: string | undefined;
}

/**
 * @public
 */
export interface ListTargetsResponse {
  /**
   * <p>Information about the targets.</p>
   * @public
   */
  items: TargetSummary[] | undefined;

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAuthPolicyRequest {
  /**
   * <p>The ID or ARN of the service network or service for which the policy
   *    is created.</p>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The auth policy. The policy string in JSON must not contain newlines or blank lines.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutAuthPolicyResponse {
  /**
   * <p>The auth policy. The policy string in JSON must not contain newlines or blank lines.</p>
   * @public
   */
  policy?: string | undefined;

  /**
   * <p>The state of the auth policy. The auth policy is only active when the auth type is set to
   *     <code>AWS_IAM</code>. If you provide a policy, then authentication and authorization decisions
   *    are made based on this policy and the client's IAM policy. If the Auth type is <code>NONE</code>,
   *    then, any auth policy that you provide remains inactive. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#create-service-network">Create a service network</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
   * @public
   */
  state?: AuthPolicyState | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The ID or ARN of the service network or service for which the policy
   *    is created.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>An IAM policy. The policy string in JSON must not contain newlines or blank
   *    lines.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {}

/**
 * @public
 */
export interface UpdateResourceConfigurationRequest {
  /**
   * <p>The ID of the resource configuration.</p>
   * @public
   */
  resourceConfigurationIdentifier: string | undefined;

  /**
   * <p>The resource configuration.</p>
   * @public
   */
  resourceConfigurationDefinition?: ResourceConfigurationDefinition | undefined;

  /**
   * <p>Indicates whether to add the resource configuration to service networks that are shared with other accounts.</p>
   * @public
   */
  allowAssociationToShareableServiceNetwork?: boolean | undefined;

  /**
   * <p>The TCP port ranges that a consumer can use to access a resource configuration. You can separate port ranges with a comma. Example: 1-65535 or 1,2,22-30</p>
   * @public
   */
  portRanges?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateResourceConfigurationResponse {
  /**
   * <p>The ID of the resource configuration.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the resource configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource configuration.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the resource gateway associated with the resource configuration.</p>
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * <p>The ID of the group resource configuration.</p>
   * @public
   */
  resourceConfigurationGroupId?: string | undefined;

  /**
   * <p>The type of resource configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SINGLE</code> - A single resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GROUP</code> - A group of resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CHILD</code> - A single resource that is part of a group resource configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARN</code> - An Amazon Web Services resource.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: ResourceConfigurationType | undefined;

  /**
   * <p>The TCP port ranges that a consumer can use to access a resource configuration. You can separate port ranges with a comma. Example: 1-65535 or 1,2,22-30</p>
   * @public
   */
  portRanges?: string[] | undefined;

  /**
   * <p>Indicates whether to add the resource configuration to service networks that are shared with other accounts.</p>
   * @public
   */
  allowAssociationToShareableServiceNetwork?: boolean | undefined;

  /**
   * <p>The TCP protocol accepted by the specified resource configuration.</p>
   * @public
   */
  protocol?: ProtocolType | undefined;

  /**
   * <p>The status of the resource configuration.</p>
   * @public
   */
  status?: ResourceConfigurationStatus | undefined;

  /**
   * <p>The resource configuration.</p>
   * @public
   */
  resourceConfigurationDefinition?: ResourceConfigurationDefinition | undefined;
}

/**
 * @public
 */
export interface UpdateResourceGatewayRequest {
  /**
   * <p>The ID or ARN of the resource gateway.</p>
   * @public
   */
  resourceGatewayIdentifier: string | undefined;

  /**
   * <p>The IDs of the security groups associated with the resource gateway.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateResourceGatewayResponse {
  /**
   * <p>The name of the resource gateway.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the resource gateway.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource gateway.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the resource gateway.</p>
   * @public
   */
  status?: ResourceGatewayStatus | undefined;

  /**
   * <p>The ID of the VPC for the resource gateway.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The IDs of the VPC subnets for the resource gateway.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>The IDs of the security groups associated with the resource gateway.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The type of IP address used by the resource gateway.</p>
   * @public
   */
  ipAddressType?: IpAddressType | undefined;
}

/**
 * @public
 */
export interface UpdateRuleRequest {
  /**
   * <p>The ID or ARN of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or ARN of the listener.</p>
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * <p>The ID or ARN of the rule.</p>
   * @public
   */
  ruleIdentifier: string | undefined;

  /**
   * <p>The rule match.</p>
   * @public
   */
  match?: RuleMatch | undefined;

  /**
   * <p>The rule priority. A listener can't have multiple rules with the same priority.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>Information about the action for the specified listener rule.</p>
   * @public
   */
  action?: RuleAction | undefined;
}

/**
 * @public
 */
export interface UpdateRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the listener.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the listener.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Indicates whether this is the default rule.</p>
   * @public
   */
  isDefault?: boolean | undefined;

  /**
   * <p>The rule match.</p>
   * @public
   */
  match?: RuleMatch | undefined;

  /**
   * <p>The rule priority.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>Information about the action for the specified listener rule.</p>
   * @public
   */
  action?: RuleAction | undefined;
}

/**
 * @public
 */
export interface UpdateServiceRequest {
  /**
   * <p>The ID or ARN of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>The type of IAM policy.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: The resource does not use an IAM policy. This is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS_IAM</code>: The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required.</p>
   *             </li>
   *          </ul>
   * @public
   */
  authType?: AuthType | undefined;
}

/**
 * @public
 */
export interface UpdateServiceResponse {
  /**
   * <p>The ID of the service.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The custom domain name of the service.</p>
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>The type of IAM policy.</p>
   * @public
   */
  authType?: AuthType | undefined;
}

/**
 * @public
 */
export interface UpdateServiceNetworkRequest {
  /**
   * <p>The ID or ARN of the service network.</p>
   * @public
   */
  serviceNetworkIdentifier: string | undefined;

  /**
   * <p>The type of IAM policy.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: The resource does not use an IAM policy. This is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS_IAM</code>: The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required.</p>
   *             </li>
   *          </ul>
   * @public
   */
  authType: AuthType | undefined;
}

/**
 * @public
 */
export interface UpdateServiceNetworkResponse {
  /**
   * <p>The ID of the service network.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The type of IAM policy.</p>
   * @public
   */
  authType?: AuthType | undefined;
}

/**
 * @public
 */
export interface UpdateServiceNetworkVpcAssociationRequest {
  /**
   * <p>The ID or ARN of the association.</p>
   * @public
   */
  serviceNetworkVpcAssociationIdentifier: string | undefined;

  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceNetworkVpcAssociationResponse {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status. You can retry the operation if the status is <code>DELETE_FAILED</code>.
   *    However, if you retry it while the status is <code>DELETE_IN_PROGRESS</code>, there is no change
   *    in the status.</p>
   * @public
   */
  status?: ServiceNetworkVpcAssociationStatus | undefined;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface RegisterTargetsRequest {
  /**
   * <p>The ID or ARN of the target group.</p>
   * @public
   */
  targetGroupIdentifier: string | undefined;

  /**
   * <p>The targets.</p>
   * @public
   */
  targets: Target[] | undefined;
}

/**
 * @public
 */
export interface RegisterTargetsResponse {
  /**
   * <p>The targets that were successfully registered.</p>
   * @public
   */
  successful?: Target[] | undefined;

  /**
   * <p>The targets that were not registered.</p>
   * @public
   */
  unsuccessful?: TargetFailure[] | undefined;
}

/**
 * @public
 */
export interface UpdateTargetGroupRequest {
  /**
   * <p>The ID or ARN of the target group.</p>
   * @public
   */
  targetGroupIdentifier: string | undefined;

  /**
   * <p>The health check configuration.</p>
   * @public
   */
  healthCheck: HealthCheckConfig | undefined;
}

/**
 * @public
 */
export interface UpdateTargetGroupResponse {
  /**
   * <p>The ID of the target group.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the target group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The target group type.</p>
   * @public
   */
  type?: TargetGroupType | undefined;

  /**
   * <p>The target group configuration.</p>
   * @public
   */
  config?: TargetGroupConfig | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  status?: TargetGroupStatus | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys of the tags to remove.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
