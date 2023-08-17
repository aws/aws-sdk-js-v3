// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { VPCLatticeServiceException as __BaseException } from "./VPCLatticeServiceException";

/**
 * @public
 * <p>The user does not have sufficient access to perform this action.</p>
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
 * <p>The request conflicts with the current state of the resource. Updating or deleting a
 *    resource can cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The resource ID.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The resource type.</p>
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
 */
export interface CreateAccessLogSubscriptionRequest {
  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service network or service.</p>
   */
  resourceIdentifier: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the destination. The supported destination types are
   *    CloudWatch Log groups, Kinesis Data Firehose delivery streams, and Amazon S3 buckets.</p>
   */
  destinationArn: string | undefined;

  /**
   * @public
   * <p>The tags for the access log subscription.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateAccessLogSubscriptionResponse {
  /**
   * @public
   * <p>The ID of the access log subscription.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the access log subscription.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The ID of the service network or service.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service network or service.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the log destination.</p>
   */
  destinationArn: string | undefined;
}

/**
 * @public
 * <p>An unexpected error occurred while processing the request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>The number of seconds to wait before retrying.</p>
   */
  retryAfterSeconds?: number;

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
 * @public
 * <p>The request references a resource that does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The resource ID.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The resource type.</p>
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
 * @public
 * <p>The limit on the number of requests per second was exceeded.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @public
   * <p>The service code.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The ID of the service quota that was exceeded.</p>
   */
  quotaCode?: string;

  /**
   * @public
   * <p>The number of seconds to wait before retrying.</p>
   */
  retryAfterSeconds?: number;

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
 * @public
 * <p>Describes a validation failure.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the validation exception.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Additional details about why the validation failed.</p>
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
 * @public
 * <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason.</p>
   */
  reason: ValidationExceptionReason | string | undefined;

  /**
   * @public
   * <p>The fields that failed validation.</p>
   */
  fieldList?: ValidationExceptionField[];

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
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the access log subscription.</p>
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
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the access log subscription.</p>
   */
  accessLogSubscriptionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAccessLogSubscriptionResponse {
  /**
   * @public
   * <p>The ID of the access log subscription.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the access log subscription.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The ID of the service network or service.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service network or service.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the access log destination.</p>
   */
  destinationArn: string | undefined;

  /**
   * @public
   * <p>The date and time that the access log subscription was created, specified in ISO-8601
   *    format.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The date and time that the access log subscription was last updated, specified in ISO-8601
   *    format.</p>
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessLogSubscriptionsRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service network or service.</p>
   */
  resourceIdentifier: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A pagination token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Summary information about an access log subscription.</p>
 */
export interface AccessLogSubscriptionSummary {
  /**
   * @public
   * <p>The ID of the access log subscription.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the access log subscription</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The ID of the service or service network.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service or service network.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   */
  destinationArn: string | undefined;

  /**
   * @public
   * <p>The date and time that the access log subscription was created, specified in ISO-8601
   *    format.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The date and time that the access log subscription was last updated, specified in ISO-8601
   *    format.</p>
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessLogSubscriptionsResponse {
  /**
   * @public
   * <p>The access log subscriptions.</p>
   */
  items: AccessLogSubscriptionSummary[] | undefined;

  /**
   * @public
   * <p>A pagination token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateAccessLogSubscriptionRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the access log subscription.</p>
   */
  accessLogSubscriptionIdentifier: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the access log destination.</p>
   */
  destinationArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessLogSubscriptionResponse {
  /**
   * @public
   * <p>The ID of the access log subscription.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the access log subscription.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the access log subscription.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the access log destination.</p>
   */
  destinationArn: string | undefined;
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
 * @public
 * <p>Information about an action that returns a custom HTTP response. </p>
 */
export interface FixedResponseAction {
  /**
   * @public
   * <p>The HTTP response code.</p>
   */
  statusCode: number | undefined;
}

/**
 * @public
 * <p>Describes the weight of a target group.</p>
 */
export interface WeightedTargetGroup {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the target group.</p>
   */
  targetGroupIdentifier: string | undefined;

  /**
   * @public
   * <p>Only required if you specify multiple target groups for a forward action. The "weight"
   *    determines how requests are distributed to the target group. For example, if you specify two
   *    target groups, each with a weight of 10, each target group receives half the requests. If you
   *    specify two target groups, one with a weight of 10 and the other with a weight of 20, the target
   *    group with a weight of 20 receives twice as many requests as the other target group. If there's
   *    only one target group specified, then the default value is 100.</p>
   */
  weight?: number;
}

/**
 * @public
 * <p>Describes a forward action. You can use forward actions to route requests to one or more
 *    target groups.
 *    </p>
 */
export interface ForwardAction {
  /**
   * @public
   * <p>The target groups. Traffic matching the rule is forwarded to the specified target groups.
   *    With forward actions, you can assign a weight that controls the prioritization and selection of
   *    each target group. This means that requests are distributed to individual target groups based on
   *    their weights. For example, if two target groups have the same weight, each target group receives
   *    half of the traffic.</p>
   *          <p>The default value is 1. This means that if only one target group is provided, there is no
   *    need to set the weight; 100% of traffic will go to that target group.</p>
   */
  targetGroups: WeightedTargetGroup[] | undefined;
}

/**
 * @public
 * <p>Describes the action for a rule. Each rule must include exactly one of the following types
 *    of actions: <code>forward </code>or <code>fixed-response</code>, and it must be the last action
 *    to be performed.</p>
 */
export type RuleAction = RuleAction.FixedResponseMember | RuleAction.ForwardMember | RuleAction.$UnknownMember;

/**
 * @public
 */
export namespace RuleAction {
  /**
   * @public
   * <p>The forward action. Traffic that matches the rule is forwarded to the specified target
   *    groups.</p>
   */
  export interface ForwardMember {
    forward: ForwardAction;
    fixedResponse?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p> Describes the rule action that returns a custom HTTP response. </p>
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
 * @public
 * <p>Describes a header match type. Only one can be provided.</p>
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
   * @public
   * <p>Specifies an exact type match.</p>
   */
  export interface ExactMember {
    exact: string;
    prefix?: never;
    contains?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Specifies a prefix type match. Matches the value with the prefix.</p>
   */
  export interface PrefixMember {
    exact?: never;
    prefix: string;
    contains?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Specifies a contains type match.</p>
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
 * @public
 * <p>Describes the constraints for a header match. Matches incoming requests with rule based on
 *    request header value before applying rule action.</p>
 */
export interface HeaderMatch {
  /**
   * @public
   * <p>The name of the header.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The header match type.</p>
   */
  match: HeaderMatchType | undefined;

  /**
   * @public
   * <p>Indicates whether the match is case sensitive. Defaults to false.</p>
   */
  caseSensitive?: boolean;
}

/**
 * @public
 * <p>Describes a path match type. Each rule can include only one of the following types of
 *    paths.</p>
 */
export type PathMatchType = PathMatchType.ExactMember | PathMatchType.PrefixMember | PathMatchType.$UnknownMember;

/**
 * @public
 */
export namespace PathMatchType {
  /**
   * @public
   * <p>An exact match of the path.</p>
   */
  export interface ExactMember {
    exact: string;
    prefix?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A prefix match of the path.</p>
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
 * @public
 * <p>Describes the conditions that can be applied when matching a path for incoming
 *    requests.</p>
 */
export interface PathMatch {
  /**
   * @public
   * <p>The type of path match.</p>
   */
  match: PathMatchType | undefined;

  /**
   * @public
   * <p>Indicates whether the match is case sensitive. Defaults to false.</p>
   */
  caseSensitive?: boolean;
}

/**
 * @public
 * <p>Describes criteria that can be applied to incoming requests.</p>
 */
export interface HttpMatch {
  /**
   * @public
   * <p>The HTTP method type.</p>
   */
  method?: string;

  /**
   * @public
   * <p>The path match.</p>
   */
  pathMatch?: PathMatch;

  /**
   * @public
   * <p>The header matches. Matches incoming requests with rule based on request header value before
   *    applying rule action.</p>
   */
  headerMatches?: HeaderMatch[];
}

/**
 * @public
 * <p>Describes a rule match.</p>
 */
export type RuleMatch = RuleMatch.HttpMatchMember | RuleMatch.$UnknownMember;

/**
 * @public
 */
export namespace RuleMatch {
  /**
   * @public
   * <p>The HTTP criteria that a rule must match.</p>
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
 * @public
 * <p>Represents an object when updating a rule.</p>
 */
export interface RuleUpdate {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the rule.</p>
   */
  ruleIdentifier: string | undefined;

  /**
   * @public
   * <p>The rule match.</p>
   */
  match?: RuleMatch;

  /**
   * @public
   * <p>The rule priority. A listener can't have multiple rules with the same priority.</p>
   */
  priority?: number;

  /**
   * @public
   * <p>The rule action.</p>
   */
  action?: RuleAction;
}

/**
 * @public
 */
export interface BatchUpdateRuleRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  serviceIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
   */
  listenerIdentifier: string | undefined;

  /**
   * @public
   * <p>The rules for the specified listener.</p>
   */
  rules: RuleUpdate[] | undefined;
}

/**
 * @public
 * <p>Describes a successful rule update.</p>
 */
export interface RuleUpdateSuccess {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ID of the listener.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the listener.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Indicates whether this is the default rule.</p>
   */
  isDefault?: boolean;

  /**
   * @public
   * <p>The rule match.</p>
   */
  match?: RuleMatch;

  /**
   * @public
   * <p>The rule priority.</p>
   */
  priority?: number;

  /**
   * @public
   * <p>The action for the default rule.</p>
   */
  action?: RuleAction;
}

/**
 * @public
 * <p>Describes a rule update that failed.</p>
 */
export interface RuleUpdateFailure {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the rule.</p>
   */
  ruleIdentifier?: string;

  /**
   * @public
   * <p>The failure code.</p>
   */
  failureCode?: string;

  /**
   * @public
   * <p>The failure message.</p>
   */
  failureMessage?: string;
}

/**
 * @public
 */
export interface BatchUpdateRuleResponse {
  /**
   * @public
   * <p>The rules that were successfully updated.</p>
   */
  successful?: RuleUpdateSuccess[];

  /**
   * @public
   * <p>The rules that the operation couldn't update.</p>
   */
  unsuccessful?: RuleUpdateFailure[];
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
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  serviceIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of the listener. A listener name must be unique within a service. The valid characters are a-z, 0-9, and hyphens (-). You can't use a
   *   hyphen as the first or last character, or immediately after another hyphen.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The listener protocol HTTP or HTTPS.</p>
   */
  protocol: ListenerProtocol | string | undefined;

  /**
   * @public
   * <p>The listener port. You can specify a value from <code>1</code> to <code>65535</code>. For
   *    HTTP, the default is <code>80</code>. For HTTPS, the default is <code>443</code>.</p>
   */
  port?: number;

  /**
   * @public
   * <p>The action for the default rule. Each listener has a default rule. Each rule consists of a
   *    priority, one or more actions, and one or more conditions. The default rule is the rule that's
   *    used if no other rules match. Each rule must include exactly one of the following types of
   *    actions: <code>forward </code>or <code>fixed-response</code>, and it must be the last action to
   *    be performed. </p>
   */
  defaultAction: RuleAction | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The tags for the listener.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateListenerResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ID of the listener.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the listener.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The protocol of the listener.</p>
   */
  protocol?: ListenerProtocol | string;

  /**
   * @public
   * <p>The port number of the listener.</p>
   */
  port?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  serviceArn?: string;

  /**
   * @public
   * <p>The ID of the service.</p>
   */
  serviceId?: string;

  /**
   * @public
   * <p>The action for the default rule.</p>
   */
  defaultAction?: RuleAction;
}

/**
 * @public
 * <p>The request would cause a service quota to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The resource ID.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The resource type.</p>
   */
  resourceType: string | undefined;

  /**
   * @public
   * <p>The service code.</p>
   */
  serviceCode: string | undefined;

  /**
   * @public
   * <p>The ID of the service quota that was exceeded.</p>
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
 */
export interface CreateRuleRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  serviceIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
   */
  listenerIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of the rule. The name must be unique within the listener. The valid characters are a-z, 0-9, and hyphens (-). You can't use a
   *   hyphen as the first or last character, or immediately after another hyphen.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The rule match.</p>
   */
  match: RuleMatch | undefined;

  /**
   * @public
   * <p>The priority assigned to the rule. Each rule for a specific listener must have a unique
   *    priority. The lower the priority number the higher the priority.</p>
   */
  priority: number | undefined;

  /**
   * @public
   * <p>The action for the default rule.</p>
   */
  action: RuleAction | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The tags for the rule.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateRuleResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ID of the rule.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the rule.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The rule match. The <code>RuleMatch</code> must be an <code>HttpMatch</code>. This means
   *    that the rule should be an exact match on HTTP constraints which are made up of the HTTP method,
   *    path, and header.</p>
   */
  match?: RuleMatch;

  /**
   * @public
   * <p>The priority assigned to the rule. The lower the priority number the higher the
   *    priority.</p>
   */
  priority?: number;

  /**
   * @public
   * <p>The rule action. Each rule must include exactly one of the following types of actions:
   *     <code>forward </code>or <code>fixed-response</code>, and it must be the last action to be
   *    performed.</p>
   */
  action?: RuleAction;
}

/**
 * @public
 */
export interface CreateServiceRequest {
  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The name of the service. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a
   *   hyphen as the first or last character, or immediately after another hyphen.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The tags for the service.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The custom domain name of the service.</p>
   */
  customDomainName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * @public
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
   */
  authType?: AuthType | string;
}

/**
 * @public
 * <p>Describes the DNS information of a service.</p>
 */
export interface DnsEntry {
  /**
   * @public
   * <p>The domain name of the service.</p>
   */
  domainName?: string;

  /**
   * @public
   * <p>The ID of the hosted zone.</p>
   */
  hostedZoneId?: string;
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
   * @public
   * <p>The ID of the service.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the service.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The custom domain name of the service.</p>
   */
  customDomainName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * @public
   * <p>The status. If the status is <code>CREATE_FAILED</code>, you will have to delete and
   *    recreate the service.</p>
   */
  status?: ServiceStatus | string;

  /**
   * @public
   * <p>The type of IAM policy.</p>
   */
  authType?: AuthType | string;

  /**
   * @public
   * <p>The public DNS name of the service.</p>
   */
  dnsEntry?: DnsEntry;
}

/**
 * @public
 */
export interface CreateServiceNetworkRequest {
  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The name of the service network. The name must be unique to the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a
   *   hyphen as the first or last character, or immediately after another hyphen.</p>
   */
  name: string | undefined;

  /**
   * @public
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
   */
  authType?: AuthType | string;

  /**
   * @public
   * <p>The tags for the service network.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateServiceNetworkResponse {
  /**
   * @public
   * <p>The ID of the service network.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the service network.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The type of IAM policy.</p>
   */
  authType?: AuthType | string;
}

/**
 * @public
 */
export interface CreateServiceNetworkServiceAssociationRequest {
  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  serviceIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service network. You must use the ARN if the
   *    resources specified in the operation are in different accounts.</p>
   */
  serviceNetworkIdentifier: string | undefined;

  /**
   * @public
   * <p>The tags for the association.</p>
   */
  tags?: Record<string, string>;
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
   * @public
   * <p>The ID of the association.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The operation's status.</p>
   */
  status?: ServiceNetworkServiceAssociationStatus | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The account that created the association.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The custom domain name of the service.</p>
   */
  customDomainName?: string;

  /**
   * @public
   * <p>The DNS name of the service.</p>
   */
  dnsEntry?: DnsEntry;
}

/**
 * @public
 */
export interface CreateServiceNetworkVpcAssociationRequest {
  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service network. You must use the ARN when the
   *    resources specified in the operation are in different accounts.</p>
   */
  serviceNetworkIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  vpcIdentifier: string | undefined;

  /**
   * @public
   * <p>The IDs of the security groups. Security groups aren't added by default. You can add a
   *    security group to apply network level controls to control which resources in a VPC are allowed to
   *    access the service network and its services. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">Control traffic to
   *     resources using security groups</a> in the <i>Amazon VPC User
   *    Guide</i>.</p>
   */
  securityGroupIds?: string[];

  /**
   * @public
   * <p>The tags for the association.</p>
   */
  tags?: Record<string, string>;
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
   * @public
   * <p>The ID of the association.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The operation's status.</p>
   */
  status?: ServiceNetworkVpcAssociationStatus | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The account that created the association.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The IDs of the security groups.</p>
   */
  securityGroupIds?: string[];
}

/**
 * @public
 * <p>The codes to use when checking for a successful response from a target for health
 *    checks.</p>
 */
export type Matcher = Matcher.HttpCodeMember | Matcher.$UnknownMember;

/**
 * @public
 */
export namespace Matcher {
  /**
   * @public
   * <p>The HTTP code to use when checking for a successful response from a target.</p>
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
 * @public
 * <p>The health check configuration of a target group. Health check configurations aren't used
 *    for <code>LAMBDA</code> and <code>ALB</code> target groups.</p>
 */
export interface HealthCheckConfig {
  /**
   * @public
   * <p>Indicates whether health checking is enabled.</p>
   */
  enabled?: boolean;

  /**
   * @public
   * <p>The protocol used when performing health checks on targets. The possible protocols are
   *     <code>HTTP</code> and <code>HTTPS</code>. The default is <code>HTTP</code>.</p>
   */
  protocol?: TargetGroupProtocol | string;

  /**
   * @public
   * <p>The protocol version used when performing health checks on targets. The possible protocol
   *    versions are <code>HTTP1</code> and <code>HTTP2</code>.</p>
   */
  protocolVersion?: HealthCheckProtocolVersion | string;

  /**
   * @public
   * <p>The port used when performing health checks on targets. The default setting is the port that
   *    a target receives traffic on.</p>
   */
  port?: number;

  /**
   * @public
   * <p>The destination for health checks on the targets. If the protocol version is
   *     <code>HTTP/1.1</code> or <code>HTTP/2</code>, specify a valid URI (for example,
   *     <code>/path?query</code>). The default path is <code>/</code>. Health checks are not supported
   *    if the protocol version is <code>gRPC</code>, however, you can choose <code>HTTP/1.1</code> or
   *     <code>HTTP/2</code> and specify a valid URI.</p>
   */
  path?: string;

  /**
   * @public
   * <p>The approximate amount of time, in seconds, between health checks of an individual target.
   *    The range is 5–300 seconds. The default is 30 seconds.</p>
   */
  healthCheckIntervalSeconds?: number;

  /**
   * @public
   * <p>The amount of time, in seconds, to wait before reporting a target as unhealthy. The range is
   *    1–120 seconds. The default is 5 seconds.</p>
   */
  healthCheckTimeoutSeconds?: number;

  /**
   * @public
   * <p>The number of consecutive successful health checks required before considering an unhealthy
   *    target healthy. The range is 2–10. The default is 5.</p>
   */
  healthyThresholdCount?: number;

  /**
   * @public
   * <p>The number of consecutive failed health checks required before considering a target
   *    unhealthy. The range is 2–10. The default is 2.</p>
   */
  unhealthyThresholdCount?: number;

  /**
   * @public
   * <p>The codes to use when checking for a successful response from a target. These are called
   *     <i>Success codes</i> in the console.</p>
   */
  matcher?: Matcher;
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
 * @public
 * <p>Describes the configuration of a target group. Lambda functions don't support target group
 *    configuration.</p>
 */
export interface TargetGroupConfig {
  /**
   * @public
   * <p>The port on which the targets are listening. For HTTP, the default is <code>80</code>. For
   *    HTTPS, the default is <code>443</code>
   *          </p>
   */
  port: number | undefined;

  /**
   * @public
   * <p>The protocol to use for routing traffic to the targets. Default is the protocol of a target
   *    group.</p>
   */
  protocol: TargetGroupProtocol | string | undefined;

  /**
   * @public
   * <p>The protocol version. Default value is <code>HTTP1</code>.</p>
   */
  protocolVersion?: TargetGroupProtocolVersion | string;

  /**
   * @public
   * <p>The type of IP address used for the target group. The possible values are <code>ipv4</code> and <code>ipv6</code>.
   *    This is an optional parameter. If not specified, the IP address type defaults to <code>ipv4</code>.</p>
   */
  ipAddressType?: IpAddressType | string;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  vpcIdentifier: string | undefined;

  /**
   * @public
   * <p>The health check configuration.</p>
   */
  healthCheck?: HealthCheckConfig;
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
   * @public
   * <p>The name of the target group. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a
   *   hyphen as the first or last character, or immediately after another hyphen.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of target group.</p>
   */
  type: TargetGroupType | string | undefined;

  /**
   * @public
   * <p>The target group configuration. If <code>type</code> is set to <code>LAMBDA</code>, this
   *    parameter doesn't apply.</p>
   */
  config?: TargetGroupConfig;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The tags for the target group.</p>
   */
  tags?: Record<string, string>;
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
   * @public
   * <p>The ID of the target group.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the target group.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The type of target group.</p>
   */
  type?: TargetGroupType | string;

  /**
   * @public
   * <p>The target group configuration. If <code>type</code> is set to <code>LAMBDA</code>, this
   *    parameter doesn't apply.</p>
   */
  config?: TargetGroupConfig;

  /**
   * @public
   * <p>The operation's status. You can retry the operation if the status is
   *     <code>CREATE_FAILED</code>. However, if you retry it while the status is
   *     <code>CREATE_IN_PROGRESS</code>, there is no change in the status. </p>
   */
  status?: TargetGroupStatus | string;
}

/**
 * @public
 */
export interface DeleteAuthPolicyRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the resource.</p>
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
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  serviceIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
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
export interface DeleteResourcePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
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
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  serviceIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
   */
  listenerIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the rule.</p>
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
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  serviceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceResponse {
  /**
   * @public
   * <p>The ID of the service.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the service.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The status. You can retry the operation if the status is <code>DELETE_FAILED</code>.
   *    However, if you retry it while the status is <code>DELETE_IN_PROGRESS</code>, the status doesn't
   *    change.</p>
   */
  status?: ServiceStatus | string;
}

/**
 * @public
 */
export interface DeleteServiceNetworkRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) or ID of the service network.</p>
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
export interface DeleteServiceNetworkServiceAssociationRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the association.</p>
   */
  serviceNetworkServiceAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceNetworkServiceAssociationResponse {
  /**
   * @public
   * <p>The ID of the association.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The operation's status. You can retry the operation if the status is
   *     <code>DELETE_FAILED</code>. However, if you retry it when the status is
   *     <code>DELETE_IN_PROGRESS</code>, there is no change in the status.</p>
   */
  status?: ServiceNetworkServiceAssociationStatus | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface DeleteServiceNetworkVpcAssociationRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the association.</p>
   */
  serviceNetworkVpcAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceNetworkVpcAssociationResponse {
  /**
   * @public
   * <p>The ID of the association.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The status. You can retry the operation if the status is <code>DELETE_FAILED</code>.
   *    However, if you retry it when the status is <code>DELETE_IN_PROGRESS</code>, there is no change
   *    in the status.</p>
   */
  status?: ServiceNetworkVpcAssociationStatus | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface DeleteTargetGroupRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the target group.</p>
   */
  targetGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteTargetGroupResponse {
  /**
   * @public
   * <p>The ID of the target group.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The status. You can retry the operation if the status is <code>DELETE_FAILED</code>.
   *    However, if you retry it while the status is <code>DELETE_IN_PROGRESS</code>, the status doesn't
   *    change.</p>
   */
  status?: TargetGroupStatus | string;
}

/**
 * @public
 * <p>Describes a target.</p>
 */
export interface Target {
  /**
   * @public
   * <p>The ID of the target. If the target type of the target group is <code>INSTANCE</code>, this
   *    is an instance ID. If the target type is <code>IP</code> , this is an IP address. If the target
   *    type is <code>LAMBDA</code>, this is the ARN of the Lambda function. If the target type is
   *     <code>ALB</code>, this is the ARN of the Application Load Balancer.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The port on which the target is listening. For HTTP, the default is <code>80</code>. For
   *    HTTPS, the default is <code>443</code>.</p>
   */
  port?: number;
}

/**
 * @public
 */
export interface DeregisterTargetsRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the target group.</p>
   */
  targetGroupIdentifier: string | undefined;

  /**
   * @public
   * <p>The targets to deregister.</p>
   */
  targets: Target[] | undefined;
}

/**
 * @public
 * <p>Describes a target failure.</p>
 */
export interface TargetFailure {
  /**
   * @public
   * <p>The ID of the target. If the target type of the target group is <code>INSTANCE</code>, this
   *    is an instance ID. If the target type is <code>IP</code> , this is an IP address. If the target
   *    type is <code>LAMBDA</code>, this is the ARN of the Lambda function. If the target type is
   *     <code>ALB</code>, this is the ARN of the Application Load Balancer.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The port on which the target is listening. This parameter doesn't apply if the target is a
   *    Lambda function.</p>
   */
  port?: number;

  /**
   * @public
   * <p>The failure code.</p>
   */
  failureCode?: string;

  /**
   * @public
   * <p>The failure message.</p>
   */
  failureMessage?: string;
}

/**
 * @public
 */
export interface DeregisterTargetsResponse {
  /**
   * @public
   * <p>The targets that were successfully deregistered.</p>
   */
  successful?: Target[];

  /**
   * @public
   * <p>The targets that the operation couldn't deregister.</p>
   */
  unsuccessful?: TargetFailure[];
}

/**
 * @public
 */
export interface GetAuthPolicyRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service network or service.</p>
   */
  resourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAuthPolicyResponse {
  /**
   * @public
   * <p>The auth policy.</p>
   */
  policy?: string;

  /**
   * @public
   * <p>The state of the auth policy. The auth policy is only active when the auth type is set to
   *      <code>AWS_IAM</code>. If you provide a policy, then authentication and
   *    authorization decisions are made based on this policy and the client's IAM policy. If the auth
   *    type is <code>NONE</code>, then any auth policy you provide will remain inactive. For more
   *    information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#create-service-network">Create a service
   *     network</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
   */
  state?: AuthPolicyState | string;

  /**
   * @public
   * <p>The date and time that the auth policy was created, specified in ISO-8601 format.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The date and time that the auth policy was last updated, specified in ISO-8601
   *    format.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetListenerRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  serviceIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
   */
  listenerIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetListenerResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ID of the listener.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the listener.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The listener protocol.</p>
   */
  protocol?: ListenerProtocol | string;

  /**
   * @public
   * <p>The listener port.</p>
   */
  port?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  serviceArn?: string;

  /**
   * @public
   * <p>The ID of the service.</p>
   */
  serviceId?: string;

  /**
   * @public
   * <p>The actions for the default listener rule.</p>
   */
  defaultAction?: RuleAction;

  /**
   * @public
   * <p>The date and time that the listener was created, specified in ISO-8601 format.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The date and time that the listener was last updated, specified in ISO-8601 format.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service network or service.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * @public
   * <p>An IAM policy.</p>
   */
  policy?: string;
}

/**
 * @public
 */
export interface GetRuleRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  serviceIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
   */
  listenerIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the listener rule.</p>
   */
  ruleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetRuleResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ID of the listener.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the listener.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Indicates whether this is the default rule.</p>
   */
  isDefault?: boolean;

  /**
   * @public
   * <p>The rule match.</p>
   */
  match?: RuleMatch;

  /**
   * @public
   * <p>The priority level for the specified rule.</p>
   */
  priority?: number;

  /**
   * @public
   * <p>The action for the default rule.</p>
   */
  action?: RuleAction;

  /**
   * @public
   * <p>The date and time that the listener rule was created, specified in ISO-8601 format.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The date and time that the listener rule was last updated, specified in ISO-8601
   *    format.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetServiceRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  serviceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetServiceResponse {
  /**
   * @public
   * <p>The ID of the service.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the service.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The date and time that the service was created, specified in ISO-8601 format.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The date and time that the service was last updated, specified in ISO-8601 format.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The DNS name of the service.</p>
   */
  dnsEntry?: DnsEntry;

  /**
   * @public
   * <p>The custom domain name of the service.</p>
   */
  customDomainName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * @public
   * <p>The status of the service.</p>
   */
  status?: ServiceStatus | string;

  /**
   * @public
   * <p>The type of IAM policy.</p>
   */
  authType?: AuthType | string;

  /**
   * @public
   * <p>The failure code.</p>
   */
  failureCode?: string;

  /**
   * @public
   * <p>The failure message.</p>
   */
  failureMessage?: string;
}

/**
 * @public
 */
export interface GetServiceNetworkRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service network.</p>
   */
  serviceNetworkIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkResponse {
  /**
   * @public
   * <p>The ID of the service network.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the service network.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The date and time that the service network was created, specified in ISO-8601 format.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The date and time of the last update, specified in ISO-8601 format.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The type of IAM policy.</p>
   */
  authType?: AuthType | string;

  /**
   * @public
   * <p>The number of VPCs associated with the service network.</p>
   */
  numberOfAssociatedVPCs?: number;

  /**
   * @public
   * <p>The number of services associated with the service network.</p>
   */
  numberOfAssociatedServices?: number;
}

/**
 * @public
 */
export interface GetServiceNetworkServiceAssociationRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the association.</p>
   */
  serviceNetworkServiceAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkServiceAssociationResponse {
  /**
   * @public
   * <p>The ID of the service network and service association.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The status of the association.</p>
   */
  status?: ServiceNetworkServiceAssociationStatus | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The account that created the association.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The date and time that the association was created, specified in ISO-8601 format.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The ID of the service.</p>
   */
  serviceId?: string;

  /**
   * @public
   * <p>The name of the service.</p>
   */
  serviceName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  serviceArn?: string;

  /**
   * @public
   * <p>The ID of the service network.</p>
   */
  serviceNetworkId?: string;

  /**
   * @public
   * <p>The name of the service network.</p>
   */
  serviceNetworkName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   */
  serviceNetworkArn?: string;

  /**
   * @public
   * <p>The DNS name of the service.</p>
   */
  dnsEntry?: DnsEntry;

  /**
   * @public
   * <p>The custom domain name of the service. </p>
   */
  customDomainName?: string;

  /**
   * @public
   * <p>The failure message.</p>
   */
  failureMessage?: string;

  /**
   * @public
   * <p>The failure code.</p>
   */
  failureCode?: string;
}

/**
 * @public
 */
export interface GetServiceNetworkVpcAssociationRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the association.</p>
   */
  serviceNetworkVpcAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkVpcAssociationResponse {
  /**
   * @public
   * <p>The ID of the specified association between the service network and the VPC.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The status of the association.</p>
   */
  status?: ServiceNetworkVpcAssociationStatus | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The account that created the association.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The date and time that the association was created, specified in ISO-8601 format.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The ID of the service network.</p>
   */
  serviceNetworkId?: string;

  /**
   * @public
   * <p>The name of the service network.</p>
   */
  serviceNetworkName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   */
  serviceNetworkArn?: string;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  vpcId?: string;

  /**
   * @public
   * <p>The IDs of the security groups.</p>
   */
  securityGroupIds?: string[];

  /**
   * @public
   * <p>The failure message.</p>
   */
  failureMessage?: string;

  /**
   * @public
   * <p>The failure code.</p>
   */
  failureCode?: string;

  /**
   * @public
   * <p>The date and time that the association was last updated, specified in ISO-8601
   *    format.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetTargetGroupRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the target group.</p>
   */
  targetGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTargetGroupResponse {
  /**
   * @public
   * <p>The ID of the target group.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the target group.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The target group type.</p>
   */
  type?: TargetGroupType | string;

  /**
   * @public
   * <p>The target group configuration.</p>
   */
  config?: TargetGroupConfig;

  /**
   * @public
   * <p>The date and time that the target group was created, specified in ISO-8601 format.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The date and time that the target group was last updated, specified in ISO-8601
   *    format.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The status.</p>
   */
  status?: TargetGroupStatus | string;

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of the service.</p>
   */
  serviceArns?: string[];

  /**
   * @public
   * <p>The failure message.</p>
   */
  failureMessage?: string;

  /**
   * @public
   * <p>The failure code.</p>
   */
  failureCode?: string;
}

/**
 * @public
 */
export interface ListListenersRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  serviceIdentifier: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A pagination token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Summary information about a listener.</p>
 */
export interface ListenerSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ID of the listener.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the listener.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The listener protocol.</p>
   */
  protocol?: ListenerProtocol | string;

  /**
   * @public
   * <p>The listener port.</p>
   */
  port?: number;

  /**
   * @public
   * <p>The date and time that the listener was created, specified in ISO-8601 format.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The date and time that the listener was last updated, specified in ISO-8601 format.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface ListListenersResponse {
  /**
   * @public
   * <p>Information about the listeners.</p>
   */
  items: ListenerSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateListenerRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  serviceIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
   */
  listenerIdentifier: string | undefined;

  /**
   * @public
   * <p>The action for the default rule.</p>
   */
  defaultAction: RuleAction | undefined;
}

/**
 * @public
 */
export interface UpdateListenerResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ID of the listener.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the listener.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The protocol of the listener.</p>
   */
  protocol?: ListenerProtocol | string;

  /**
   * @public
   * <p>The listener port.</p>
   */
  port?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  serviceArn?: string;

  /**
   * @public
   * <p>The ID of the service.</p>
   */
  serviceId?: string;

  /**
   * @public
   * <p>The action for the default rule.</p>
   */
  defaultAction?: RuleAction;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  serviceIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
   */
  listenerIdentifier: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A pagination token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Summary information about the listener rule.</p>
 */
export interface RuleSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ID of the rule.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the rule.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Indicates whether this is the default rule. Listener rules are created when you create a
   *    listener. Each listener has a default rule for checking connection requests.
   *    </p>
   */
  isDefault?: boolean;

  /**
   * @public
   * <p> The priority of the rule. </p>
   */
  priority?: number;

  /**
   * @public
   * <p>The date and time that the listener rule was created, specified in ISO-8601 format.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The date and time that the listener rule was last updated, specified in ISO-8601
   *    format.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * @public
   * <p>Information about the rules.</p>
   */
  items: RuleSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListServiceNetworksRequest {
  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A pagination token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Summary information about a service network.</p>
 */
export interface ServiceNetworkSummary {
  /**
   * @public
   * <p>The ID of the service network.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the service network.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The date and time that the service network was created, specified in ISO-8601 format.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The date and time that the service network was last updated, specified in ISO-8601
   *    format.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The number of VPCs associated with the service network.</p>
   */
  numberOfAssociatedVPCs?: number;

  /**
   * @public
   * <p>The number of services associated with the service network.</p>
   */
  numberOfAssociatedServices?: number;
}

/**
 * @public
 */
export interface ListServiceNetworksResponse {
  /**
   * @public
   * <p>Information about the service networks.</p>
   */
  items: ServiceNetworkSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListServiceNetworkServiceAssociationsRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service network.</p>
   */
  serviceNetworkIdentifier?: string;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  serviceIdentifier?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A pagination token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Summary information about the association between a service network and a service.</p>
 */
export interface ServiceNetworkServiceAssociationSummary {
  /**
   * @public
   * <p>The ID of the association.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The status. If the deletion fails, try to delete again.</p>
   */
  status?: ServiceNetworkServiceAssociationStatus | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The account that created the association.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The date and time that the association was created, specified in ISO-8601 format.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The ID of the service.</p>
   */
  serviceId?: string;

  /**
   * @public
   * <p>The name of the service.</p>
   */
  serviceName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  serviceArn?: string;

  /**
   * @public
   * <p>The ID of the service network.</p>
   */
  serviceNetworkId?: string;

  /**
   * @public
   * <p>The name of the service network.</p>
   */
  serviceNetworkName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   */
  serviceNetworkArn?: string;

  /**
   * @public
   * <p>DNS information about the service.</p>
   */
  dnsEntry?: DnsEntry;

  /**
   * @public
   * <p> The custom domain name of the service. </p>
   */
  customDomainName?: string;
}

/**
 * @public
 */
export interface ListServiceNetworkServiceAssociationsResponse {
  /**
   * @public
   * <p>Information about the associations.</p>
   */
  items: ServiceNetworkServiceAssociationSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListServiceNetworkVpcAssociationsRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service network.</p>
   */
  serviceNetworkIdentifier?: string;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the VPC.</p>
   */
  vpcIdentifier?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A pagination token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Summary information about an association between a service network and a VPC.</p>
 */
export interface ServiceNetworkVpcAssociationSummary {
  /**
   * @public
   * <p>The ID of the association.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The status.</p>
   */
  status?: ServiceNetworkVpcAssociationStatus | string;

  /**
   * @public
   * <p>The account that created the association.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The date and time that the association was created, specified in ISO-8601 format.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The ID of the service network.</p>
   */
  serviceNetworkId?: string;

  /**
   * @public
   * <p>The name of the service network.</p>
   */
  serviceNetworkName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   */
  serviceNetworkArn?: string;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  vpcId?: string;

  /**
   * @public
   * <p>The date and time that the association was last updated, specified in ISO-8601
   *    format.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface ListServiceNetworkVpcAssociationsResponse {
  /**
   * @public
   * <p>Information about the associations.</p>
   */
  items: ServiceNetworkVpcAssociationSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListServicesRequest {
  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A pagination token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Summary information about a service.</p>
 */
export interface ServiceSummary {
  /**
   * @public
   * <p>The ID of the service.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the service.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The date and time that the service was created, specified in ISO-8601 format.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The date and time that the service was last updated. The format is ISO-8601.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>DNS information about the service.</p>
   */
  dnsEntry?: DnsEntry;

  /**
   * @public
   * <p> The custom domain name of the service. </p>
   */
  customDomainName?: string;

  /**
   * @public
   * <p>The status.</p>
   */
  status?: ServiceStatus | string;
}

/**
 * @public
 */
export interface ListServicesResponse {
  /**
   * @public
   * <p>The services.</p>
   */
  items?: ServiceSummary[];

  /**
   * @public
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTargetGroupsRequest {
  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A pagination token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  vpcIdentifier?: string;

  /**
   * @public
   * <p>The target group type.</p>
   */
  targetGroupType?: TargetGroupType | string;
}

/**
 * @public
 * <p>Summary information about a target group.</p>
 */
export interface TargetGroupSummary {
  /**
   * @public
   * <p>The ID of the target group.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) of the target group.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the target group.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The target group type.</p>
   */
  type?: TargetGroupType | string;

  /**
   * @public
   * <p>The date and time that the target group was created, specified in ISO-8601 format.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The port of the target group.</p>
   */
  port?: number;

  /**
   * @public
   * <p>The protocol of the target group.</p>
   */
  protocol?: TargetGroupProtocol | string;

  /**
   * @public
   * <p>The type of IP address used for the target group. The possible values are <code>ipv4</code> and <code>ipv6</code>.
   *    This is an optional parameter. If not specified, the IP address type defaults to <code>ipv4</code>.</p>
   */
  ipAddressType?: IpAddressType | string;

  /**
   * @public
   * <p>The ID of the VPC of the target group.</p>
   */
  vpcIdentifier?: string;

  /**
   * @public
   * <p>The date and time that the target group was last updated, specified in ISO-8601
   *    format.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The status.</p>
   */
  status?: TargetGroupStatus | string;

  /**
   * @public
   * <p>The list of Amazon Resource Names (ARNs) of the service.</p>
   */
  serviceArns?: string[];
}

/**
 * @public
 */
export interface ListTargetGroupsResponse {
  /**
   * @public
   * <p>Information about the target groups.</p>
   */
  items?: TargetGroupSummary[];

  /**
   * @public
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTargetsRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the target group.</p>
   */
  targetGroupIdentifier: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A pagination token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The targets to list.</p>
   */
  targets?: Target[];
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
 * @public
 * <p>Summary information about a target.</p>
 */
export interface TargetSummary {
  /**
   * @public
   * <p>The ID of the target. If the target type of the target group is <code>INSTANCE</code>, this
   *    is an instance ID. If the target type is <code>IP</code> , this is an IP address. If the target
   *    type is <code>LAMBDA</code>, this is the ARN of the Lambda function. If the target type is
   *     <code>ALB</code>, this is the ARN of the Application Load Balancer.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The port on which the target is listening.</p>
   */
  port?: number;

  /**
   * @public
   * <p>The status of the target.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Draining</code>: The target is being deregistered. No new connections will be sent
   *      to this target while current connections are being drained. Default draining time is 5
   *      minutes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unavailable</code>: Health checks are unavailable for the target group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Healthy</code>: The target is healthy. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unhealthy</code>: The target is unhealthy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Initial</code>: Initial health checks on the target are being performed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unused</code>: Target group is not used in a service.</p>
   *             </li>
   *          </ul>
   */
  status?: TargetStatus | string;

  /**
   * @public
   * <p>The code for why the target status is what it is.</p>
   */
  reasonCode?: string;
}

/**
 * @public
 */
export interface ListTargetsResponse {
  /**
   * @public
   * <p>Information about the targets.</p>
   */
  items: TargetSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface PutAuthPolicyRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service network or service for which the policy
   *    is created.</p>
   */
  resourceIdentifier: string | undefined;

  /**
   * @public
   * <p>The auth policy. The policy string in JSON must not contain newlines or blank lines.</p>
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutAuthPolicyResponse {
  /**
   * @public
   * <p>The auth policy. The policy string in JSON must not contain newlines or blank lines.</p>
   */
  policy?: string;

  /**
   * @public
   * <p>The state of the auth policy. The auth policy is only active when the auth type is set to
   *      <code>AWS_IAM</code>. If you provide a policy, then authentication and
   *    authorization decisions are made based on this policy and the client's IAM policy. If the Auth
   *    type is <code>NONE</code>, then, any auth policy you provide will remain inactive. For more
   *    information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#create-service-network">Create a service
   *     network</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
   */
  state?: AuthPolicyState | string;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service network or service for which the policy
   *    is created.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>An IAM policy. The policy string in JSON must not contain newlines or
   *    blank lines.</p>
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
export interface UpdateRuleRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  serviceIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
   */
  listenerIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the rule.</p>
   */
  ruleIdentifier: string | undefined;

  /**
   * @public
   * <p>The rule match.</p>
   */
  match?: RuleMatch;

  /**
   * @public
   * <p>The rule priority. A listener can't have multiple rules with the same priority.</p>
   */
  priority?: number;

  /**
   * @public
   * <p>Information about the action for the specified listener rule.</p>
   */
  action?: RuleAction;
}

/**
 * @public
 */
export interface UpdateRuleResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ID of the listener.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the listener.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Indicates whether this is the default rule.</p>
   */
  isDefault?: boolean;

  /**
   * @public
   * <p>The rule match.</p>
   */
  match?: RuleMatch;

  /**
   * @public
   * <p>The rule priority.</p>
   */
  priority?: number;

  /**
   * @public
   * <p>Information about the action for the specified listener rule.</p>
   */
  action?: RuleAction;
}

/**
 * @public
 */
export interface UpdateServiceRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   */
  serviceIdentifier: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate. </p>
   */
  certificateArn?: string;

  /**
   * @public
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
   */
  authType?: AuthType | string;
}

/**
 * @public
 */
export interface UpdateServiceResponse {
  /**
   * @public
   * <p>The ID of the service.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the service.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The custom domain name of the service.</p>
   */
  customDomainName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate. </p>
   */
  certificateArn?: string;

  /**
   * @public
   * <p>The type of IAM policy.</p>
   */
  authType?: AuthType | string;
}

/**
 * @public
 */
export interface UpdateServiceNetworkRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the service network.</p>
   */
  serviceNetworkIdentifier: string | undefined;

  /**
   * @public
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
   */
  authType: AuthType | string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceNetworkResponse {
  /**
   * @public
   * <p>The ID of the service network.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the service network.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The type of IAM policy.</p>
   */
  authType?: AuthType | string;
}

/**
 * @public
 */
export interface UpdateServiceNetworkVpcAssociationRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the association.</p>
   */
  serviceNetworkVpcAssociationIdentifier: string | undefined;

  /**
   * @public
   * <p>The IDs of the security groups. </p>
   */
  securityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceNetworkVpcAssociationResponse {
  /**
   * @public
   * <p>The ID of the association.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The status. You can retry the operation if the status is <code>DELETE_FAILED</code>.
   *    However, if you retry it while the status is <code>DELETE_IN_PROGRESS</code>, there is no change
   *    in the status.</p>
   */
  status?: ServiceNetworkVpcAssociationStatus | string;

  /**
   * @public
   * <p>The account that created the association.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The IDs of the security groups.</p>
   */
  securityGroupIds?: string[];
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags for the resource.</p>
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
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the target group.</p>
   */
  targetGroupIdentifier: string | undefined;

  /**
   * @public
   * <p>The targets.</p>
   */
  targets: Target[] | undefined;
}

/**
 * @public
 */
export interface RegisterTargetsResponse {
  /**
   * @public
   * <p>The targets that were successfully registered.</p>
   */
  successful?: Target[];

  /**
   * @public
   * <p>The targets that were not registered.</p>
   */
  unsuccessful?: TargetFailure[];
}

/**
 * @public
 */
export interface UpdateTargetGroupRequest {
  /**
   * @public
   * <p>The ID or Amazon Resource Name (ARN) of the target group.</p>
   */
  targetGroupIdentifier: string | undefined;

  /**
   * @public
   * <p>The health check configuration.</p>
   */
  healthCheck: HealthCheckConfig | undefined;
}

/**
 * @public
 */
export interface UpdateTargetGroupResponse {
  /**
   * @public
   * <p>The ID of the target group.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the target group.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The target group type.</p>
   */
  type?: TargetGroupType | string;

  /**
   * @public
   * <p>The target group configuration.</p>
   */
  config?: TargetGroupConfig;

  /**
   * @public
   * <p>The status.</p>
   */
  status?: TargetGroupStatus | string;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys of the tags to remove.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
