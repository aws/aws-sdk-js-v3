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
 */
export interface CreateAccessLogSubscriptionRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service network or service.</p>
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
   * <p>The tags for the access log subscription.</p>
   * @public
   */
  tags?: Record<string, string>;
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
  serviceCode?: string;

  /**
   * <p>The ID of the service quota that was exceeded.</p>
   * @public
   */
  quotaCode?: string;

  /**
   * <p>The number of seconds to wait before retrying.</p>
   * @public
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
   * <p>Additional details about why the validation failed.</p>
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
   * <p>The ID or Amazon Resource Name (ARN) of the access log subscription.</p>
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
   * <p>The ID or Amazon Resource Name (ARN) of the access log subscription.</p>
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
   * <p>The date and time that the access log subscription was created, specified in ISO-8601
   *    format.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the access log subscription was last updated, specified in ISO-8601
   *    format.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessLogSubscriptionsRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service network or service.</p>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
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
   * <p>The date and time that the access log subscription was created, specified in ISO-8601
   *    format.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the access log subscription was last updated, specified in ISO-8601
   *    format.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessLogSubscriptionsResponse {
  /**
   * <p>The access log subscriptions.</p>
   * @public
   */
  items: AccessLogSubscriptionSummary[] | undefined;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateAccessLogSubscriptionRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the access log subscription.</p>
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
 * <p>Information about an action that returns a custom HTTP response. </p>
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
   * <p>The ID or Amazon Resource Name (ARN) of the target group.</p>
   * @public
   */
  targetGroupIdentifier: string | undefined;

  /**
   * <p>Only required if you specify multiple target groups for a forward action. The "weight"
   *    determines how requests are distributed to the target group. For example, if you specify two
   *    target groups, each with a weight of 10, each target group receives half the requests. If you
   *    specify two target groups, one with a weight of 10 and the other with a weight of 20, the target
   *    group with a weight of 20 receives twice as many requests as the other target group. If there's
   *    only one target group specified, then the default value is 100.</p>
   * @public
   */
  weight?: number;
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
   *    need to set the weight; 100% of traffic will go to that target group.</p>
   * @public
   */
  targetGroups: WeightedTargetGroup[] | undefined;
}

/**
 * <p>Describes the action for a rule. Each rule must include exactly one of the following types
 *    of actions: <code>forward </code>or <code>fixed-response</code>, and it must be the last action
 *    to be performed.</p>
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
   * <p> Describes the rule action that returns a custom HTTP response. </p>
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
 * <p>Describes a header match type. Only one can be provided.</p>
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
   * <p>Specifies an exact type match.</p>
   * @public
   */
  export interface ExactMember {
    exact: string;
    prefix?: never;
    contains?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies a prefix type match. Matches the value with the prefix.</p>
   * @public
   */
  export interface PrefixMember {
    exact?: never;
    prefix: string;
    contains?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies a contains type match.</p>
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
   * <p>Indicates whether the match is case sensitive. Defaults to false.</p>
   * @public
   */
  caseSensitive?: boolean;
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
   * <p>Indicates whether the match is case sensitive. Defaults to false.</p>
   * @public
   */
  caseSensitive?: boolean;
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
  method?: string;

  /**
   * <p>The path match.</p>
   * @public
   */
  pathMatch?: PathMatch;

  /**
   * <p>The header matches. Matches incoming requests with rule based on request header value before
   *    applying rule action.</p>
   * @public
   */
  headerMatches?: HeaderMatch[];
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
 * <p>Represents an object when updating a rule.</p>
 * @public
 */
export interface RuleUpdate {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  ruleIdentifier: string | undefined;

  /**
   * <p>The rule match.</p>
   * @public
   */
  match?: RuleMatch;

  /**
   * <p>The rule priority. A listener can't have multiple rules with the same priority.</p>
   * @public
   */
  priority?: number;

  /**
   * <p>The rule action.</p>
   * @public
   */
  action?: RuleAction;
}

/**
 * @public
 */
export interface BatchUpdateRuleRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
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
  arn?: string;

  /**
   * <p>The ID of the listener.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the listener.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Indicates whether this is the default rule.</p>
   * @public
   */
  isDefault?: boolean;

  /**
   * <p>The rule match.</p>
   * @public
   */
  match?: RuleMatch;

  /**
   * <p>The rule priority.</p>
   * @public
   */
  priority?: number;

  /**
   * <p>The action for the default rule.</p>
   * @public
   */
  action?: RuleAction;
}

/**
 * <p>Describes a rule update that failed.</p>
 * @public
 */
export interface RuleUpdateFailure {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  ruleIdentifier?: string;

  /**
   * <p>The failure code.</p>
   * @public
   */
  failureCode?: string;

  /**
   * <p>The failure message.</p>
   * @public
   */
  failureMessage?: string;
}

/**
 * @public
 */
export interface BatchUpdateRuleResponse {
  /**
   * <p>The rules that were successfully updated.</p>
   * @public
   */
  successful?: RuleUpdateSuccess[];

  /**
   * <p>The rules that the operation couldn't update.</p>
   * @public
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
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
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
   * <p>The listener protocol HTTP or HTTPS.</p>
   * @public
   */
  protocol: ListenerProtocol | undefined;

  /**
   * <p>The listener port. You can specify a value from <code>1</code> to <code>65535</code>. For
   *    HTTP, the default is <code>80</code>. For HTTPS, the default is <code>443</code>.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The action for the default rule. Each listener has a default rule. Each rule consists of a
   *    priority, one or more actions, and one or more conditions. The default rule is the rule that's
   *    used if no other rules match. Each rule must include exactly one of the following types of
   *    actions: <code>forward </code>or <code>fixed-response</code>, and it must be the last action to
   *    be performed. </p>
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
  clientToken?: string;

  /**
   * <p>The tags for the listener.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateListenerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The ID of the listener.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the listener.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The protocol of the listener.</p>
   * @public
   */
  protocol?: ListenerProtocol;

  /**
   * <p>The port number of the listener.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceArn?: string;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  serviceId?: string;

  /**
   * <p>The action for the default rule.</p>
   * @public
   */
  defaultAction?: RuleAction;
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
  resourceId?: string;

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
 */
export interface CreateRuleRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
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
  clientToken?: string;

  /**
   * <p>The tags for the rule.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The ID of the rule.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The rule match. The <code>RuleMatch</code> must be an <code>HttpMatch</code>. This means
   *    that the rule should be an exact match on HTTP constraints which are made up of the HTTP method,
   *    path, and header.</p>
   * @public
   */
  match?: RuleMatch;

  /**
   * <p>The priority assigned to the rule. The lower the priority number the higher the
   *    priority.</p>
   * @public
   */
  priority?: number;

  /**
   * <p>The rule action. Each rule must include exactly one of the following types of actions:
   *     <code>forward </code>or <code>fixed-response</code>, and it must be the last action to be
   *    performed.</p>
   * @public
   */
  action?: RuleAction;
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
  clientToken?: string;

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
  tags?: Record<string, string>;

  /**
   * <p>The custom domain name of the service.</p>
   * @public
   */
  customDomainName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   * @public
   */
  certificateArn?: string;

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
  authType?: AuthType;
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
  domainName?: string;

  /**
   * <p>The ID of the hosted zone.</p>
   * @public
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
   * <p>The ID of the service.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The custom domain name of the service.</p>
   * @public
   */
  customDomainName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   * @public
   */
  certificateArn?: string;

  /**
   * <p>The status. If the status is <code>CREATE_FAILED</code>, you will have to delete and
   *    recreate the service.</p>
   * @public
   */
  status?: ServiceStatus;

  /**
   * <p>The type of IAM policy.</p>
   * @public
   */
  authType?: AuthType;

  /**
   * <p>The public DNS name of the service.</p>
   * @public
   */
  dnsEntry?: DnsEntry;
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
  clientToken?: string;

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
  authType?: AuthType;

  /**
   * <p>The tags for the service network.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateServiceNetworkResponse {
  /**
   * <p>The ID of the service network.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The type of IAM policy.</p>
   * @public
   */
  authType?: AuthType;
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
  clientToken?: string;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service network. You must use the ARN if the
   *    resources specified in the operation are in different accounts.</p>
   * @public
   */
  serviceNetworkIdentifier: string | undefined;

  /**
   * <p>The tags for the association.</p>
   * @public
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
   * <p>The ID of the association.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The operation's status.</p>
   * @public
   */
  status?: ServiceNetworkServiceAssociationStatus;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The custom domain name of the service.</p>
   * @public
   */
  customDomainName?: string;

  /**
   * <p>The DNS name of the service.</p>
   * @public
   */
  dnsEntry?: DnsEntry;
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
  clientToken?: string;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service network. You must use the ARN when the
   *    resources specified in the operation are in different accounts.</p>
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
  securityGroupIds?: string[];

  /**
   * <p>The tags for the association.</p>
   * @public
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
   * <p>The ID of the association.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The operation's status.</p>
   * @public
   */
  status?: ServiceNetworkVpcAssociationStatus;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  securityGroupIds?: string[];
}

/**
 * <p>The codes to use when checking for a successful response from a target for health
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
 * <p>The health check configuration of a target group. Health check configurations aren't used
 *    for <code>LAMBDA</code> and <code>ALB</code> target groups.</p>
 * @public
 */
export interface HealthCheckConfig {
  /**
   * <p>Indicates whether health checking is enabled.</p>
   * @public
   */
  enabled?: boolean;

  /**
   * <p>The protocol used when performing health checks on targets. The possible protocols are
   *     <code>HTTP</code> and <code>HTTPS</code>. The default is <code>HTTP</code>.</p>
   * @public
   */
  protocol?: TargetGroupProtocol;

  /**
   * <p>The protocol version used when performing health checks on targets. The possible protocol
   *    versions are <code>HTTP1</code> and <code>HTTP2</code>.</p>
   * @public
   */
  protocolVersion?: HealthCheckProtocolVersion;

  /**
   * <p>The port used when performing health checks on targets. The default setting is the port that
   *    a target receives traffic on.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The destination for health checks on the targets. If the protocol version is
   *     <code>HTTP/1.1</code> or <code>HTTP/2</code>, specify a valid URI (for example,
   *     <code>/path?query</code>). The default path is <code>/</code>. Health checks are not supported
   *    if the protocol version is <code>gRPC</code>, however, you can choose <code>HTTP/1.1</code> or
   *     <code>HTTP/2</code> and specify a valid URI.</p>
   * @public
   */
  path?: string;

  /**
   * <p>The approximate amount of time, in seconds, between health checks of an individual target.
   *    The range is 5–300 seconds. The default is 30 seconds.</p>
   * @public
   */
  healthCheckIntervalSeconds?: number;

  /**
   * <p>The amount of time, in seconds, to wait before reporting a target as unhealthy. The range is
   *    1–120 seconds. The default is 5 seconds.</p>
   * @public
   */
  healthCheckTimeoutSeconds?: number;

  /**
   * <p>The number of consecutive successful health checks required before considering an unhealthy
   *    target healthy. The range is 2–10. The default is 5.</p>
   * @public
   */
  healthyThresholdCount?: number;

  /**
   * <p>The number of consecutive failed health checks required before considering a target
   *    unhealthy. The range is 2–10. The default is 2.</p>
   * @public
   */
  unhealthyThresholdCount?: number;

  /**
   * <p>The codes to use when checking for a successful response from a target. These are called
   *     <i>Success codes</i> in the console.</p>
   * @public
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
 * <p>Describes the configuration of a target group. Lambda functions don't support target group
 *    configuration.</p>
 * @public
 */
export interface TargetGroupConfig {
  /**
   * <p>The port on which the targets are listening. For HTTP, the default is <code>80</code>. For
   *    HTTPS, the default is <code>443</code>
   *          </p>
   * @public
   */
  port?: number;

  /**
   * <p>The protocol to use for routing traffic to the targets. Default is the protocol of a target
   *    group.</p>
   * @public
   */
  protocol?: TargetGroupProtocol;

  /**
   * <p>The protocol version. Default value is <code>HTTP1</code>.</p>
   * @public
   */
  protocolVersion?: TargetGroupProtocolVersion;

  /**
   * <p>The type of IP address used for the target group. The possible values are <code>ipv4</code> and <code>ipv6</code>.
   *    This is an optional parameter. If not specified, the IP address type defaults to <code>ipv4</code>.</p>
   * @public
   */
  ipAddressType?: IpAddressType;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  vpcIdentifier?: string;

  /**
   * <p>The health check configuration.</p>
   * @public
   */
  healthCheck?: HealthCheckConfig;

  /**
   * Lambda event structure version
   * @public
   */
  lambdaEventStructureVersion?: LambdaEventStructureVersion;
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
   * <p>The target group configuration. If <code>type</code> is set to <code>LAMBDA</code>, this
   *    parameter doesn't apply.</p>
   * @public
   */
  config?: TargetGroupConfig;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   *   the idempotency of the request. If you retry a request that completed successfully using
   *   the same client token and parameters, the retry succeeds without performing any actions.
   *   If the parameters aren't identical, the retry fails.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The tags for the target group.</p>
   * @public
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
   * <p>The ID of the target group.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The name of the target group.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The type of target group.</p>
   * @public
   */
  type?: TargetGroupType;

  /**
   * <p>The target group configuration. If <code>type</code> is set to <code>LAMBDA</code>, this
   *    parameter doesn't apply.</p>
   * @public
   */
  config?: TargetGroupConfig;

  /**
   * <p>The operation's status. You can retry the operation if the status is
   *     <code>CREATE_FAILED</code>. However, if you retry it while the status is
   *     <code>CREATE_IN_PROGRESS</code>, there is no change in the status. </p>
   * @public
   */
  status?: TargetGroupStatus;
}

/**
 * @public
 */
export interface DeleteAuthPolicyRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the resource.</p>
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
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
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
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the rule.</p>
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
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
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
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The status. You can retry the operation if the status is <code>DELETE_FAILED</code>.
   *    However, if you retry it while the status is <code>DELETE_IN_PROGRESS</code>, the status doesn't
   *    change.</p>
   * @public
   */
  status?: ServiceStatus;
}

/**
 * @public
 */
export interface DeleteServiceNetworkRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or ID of the service network.</p>
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
export interface DeleteServiceNetworkServiceAssociationRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the association.</p>
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
  id?: string;

  /**
   * <p>The operation's status. You can retry the operation if the status is
   *     <code>DELETE_FAILED</code>. However, if you retry it when the status is
   *     <code>DELETE_IN_PROGRESS</code>, there is no change in the status.</p>
   * @public
   */
  status?: ServiceNetworkServiceAssociationStatus;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string;
}

/**
 * @public
 */
export interface DeleteServiceNetworkVpcAssociationRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the association.</p>
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
  id?: string;

  /**
   * <p>The status. You can retry the operation if the status is <code>DELETE_FAILED</code>.
   *    However, if you retry it when the status is <code>DELETE_IN_PROGRESS</code>, there is no change
   *    in the status.</p>
   * @public
   */
  status?: ServiceNetworkVpcAssociationStatus;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string;
}

/**
 * @public
 */
export interface DeleteTargetGroupRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the target group.</p>
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
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The status. You can retry the operation if the status is <code>DELETE_FAILED</code>.
   *    However, if you retry it while the status is <code>DELETE_IN_PROGRESS</code>, the status doesn't
   *    change.</p>
   * @public
   */
  status?: TargetGroupStatus;
}

/**
 * <p>Describes a target.</p>
 * @public
 */
export interface Target {
  /**
   * <p>The ID of the target. If the target type of the target group is <code>INSTANCE</code>, this
   *    is an instance ID. If the target type is <code>IP</code> , this is an IP address. If the target
   *    type is <code>LAMBDA</code>, this is the ARN of the Lambda function. If the target type is
   *     <code>ALB</code>, this is the ARN of the Application Load Balancer.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The port on which the target is listening. For HTTP, the default is <code>80</code>. For
   *    HTTPS, the default is <code>443</code>.</p>
   * @public
   */
  port?: number;
}

/**
 * @public
 */
export interface DeregisterTargetsRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the target group.</p>
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
   * <p>The ID of the target. If the target type of the target group is <code>INSTANCE</code>, this
   *    is an instance ID. If the target type is <code>IP</code> , this is an IP address. If the target
   *    type is <code>LAMBDA</code>, this is the ARN of the Lambda function. If the target type is
   *     <code>ALB</code>, this is the ARN of the Application Load Balancer.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The port on which the target is listening. This parameter doesn't apply if the target is a
   *    Lambda function.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The failure code.</p>
   * @public
   */
  failureCode?: string;

  /**
   * <p>The failure message.</p>
   * @public
   */
  failureMessage?: string;
}

/**
 * @public
 */
export interface DeregisterTargetsResponse {
  /**
   * <p>The targets that were successfully deregistered.</p>
   * @public
   */
  successful?: Target[];

  /**
   * <p>The targets that the operation couldn't deregister.</p>
   * @public
   */
  unsuccessful?: TargetFailure[];
}

/**
 * @public
 */
export interface GetAuthPolicyRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service network or service.</p>
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
  policy?: string;

  /**
   * <p>The state of the auth policy. The auth policy is only active when the auth type is set to
   *      <code>Amazon Web Services_IAM</code>. If you provide a policy, then authentication and
   *    authorization decisions are made based on this policy and the client's IAM policy. If the auth
   *    type is <code>NONE</code>, then any auth policy you provide will remain inactive. For more
   *    information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#create-service-network">Create a service
   *     network</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
   * @public
   */
  state?: AuthPolicyState;

  /**
   * <p>The date and time that the auth policy was created, specified in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The date and time that the auth policy was last updated, specified in ISO-8601
   *    format.</p>
   * @public
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetListenerRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
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
  arn?: string;

  /**
   * <p>The ID of the listener.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the listener.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The listener protocol.</p>
   * @public
   */
  protocol?: ListenerProtocol;

  /**
   * <p>The listener port.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceArn?: string;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  serviceId?: string;

  /**
   * <p>The actions for the default listener rule.</p>
   * @public
   */
  defaultAction?: RuleAction;

  /**
   * <p>The date and time that the listener was created, specified in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The date and time that the listener was last updated, specified in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>An IAM policy.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the service network or service.</p>
   * @public
   */
  policy?: string;
}

/**
 * @public
 */
export interface GetRuleRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the listener rule.</p>
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
  arn?: string;

  /**
   * <p>The ID of the listener.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the listener.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Indicates whether this is the default rule.</p>
   * @public
   */
  isDefault?: boolean;

  /**
   * <p>The rule match.</p>
   * @public
   */
  match?: RuleMatch;

  /**
   * <p>The priority level for the specified rule.</p>
   * @public
   */
  priority?: number;

  /**
   * <p>The action for the default rule.</p>
   * @public
   */
  action?: RuleAction;

  /**
   * <p>The date and time that the listener rule was created, specified in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The date and time that the listener rule was last updated, specified in ISO-8601
   *    format.</p>
   * @public
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetServiceRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
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
  id?: string;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The date and time that the service was created, specified in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The date and time that the service was last updated, specified in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The DNS name of the service.</p>
   * @public
   */
  dnsEntry?: DnsEntry;

  /**
   * <p>The custom domain name of the service.</p>
   * @public
   */
  customDomainName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   * @public
   */
  certificateArn?: string;

  /**
   * <p>The status of the service.</p>
   * @public
   */
  status?: ServiceStatus;

  /**
   * <p>The type of IAM policy.</p>
   * @public
   */
  authType?: AuthType;

  /**
   * <p>The failure code.</p>
   * @public
   */
  failureCode?: string;

  /**
   * <p>The failure message.</p>
   * @public
   */
  failureMessage?: string;
}

/**
 * @public
 */
export interface GetServiceNetworkRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service network.</p>
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
  id?: string;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The date and time that the service network was created, specified in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The date and time of the last update, specified in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The type of IAM policy.</p>
   * @public
   */
  authType?: AuthType;

  /**
   * <p>The number of VPCs associated with the service network.</p>
   * @public
   */
  numberOfAssociatedVPCs?: number;

  /**
   * <p>The number of services associated with the service network.</p>
   * @public
   */
  numberOfAssociatedServices?: number;
}

/**
 * @public
 */
export interface GetServiceNetworkServiceAssociationRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the association.</p>
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
  id?: string;

  /**
   * <p>The status of the association.</p>
   * @public
   */
  status?: ServiceNetworkServiceAssociationStatus;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The date and time that the association was created, specified in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  serviceId?: string;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  serviceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceArn?: string;

  /**
   * <p>The ID of the service network.</p>
   * @public
   */
  serviceNetworkId?: string;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  serviceNetworkName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  serviceNetworkArn?: string;

  /**
   * <p>The DNS name of the service.</p>
   * @public
   */
  dnsEntry?: DnsEntry;

  /**
   * <p>The custom domain name of the service. </p>
   * @public
   */
  customDomainName?: string;

  /**
   * <p>The failure message.</p>
   * @public
   */
  failureMessage?: string;

  /**
   * <p>The failure code.</p>
   * @public
   */
  failureCode?: string;
}

/**
 * @public
 */
export interface GetServiceNetworkVpcAssociationRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  serviceNetworkVpcAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkVpcAssociationResponse {
  /**
   * <p>The ID of the specified association between the service network and the VPC.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The status of the association.</p>
   * @public
   */
  status?: ServiceNetworkVpcAssociationStatus;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The date and time that the association was created, specified in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The ID of the service network.</p>
   * @public
   */
  serviceNetworkId?: string;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  serviceNetworkName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  serviceNetworkArn?: string;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  vpcId?: string;

  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  securityGroupIds?: string[];

  /**
   * <p>The failure message.</p>
   * @public
   */
  failureMessage?: string;

  /**
   * <p>The failure code.</p>
   * @public
   */
  failureCode?: string;

  /**
   * <p>The date and time that the association was last updated, specified in ISO-8601
   *    format.</p>
   * @public
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetTargetGroupRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the target group.</p>
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
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The name of the target group.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The target group type.</p>
   * @public
   */
  type?: TargetGroupType;

  /**
   * <p>The target group configuration.</p>
   * @public
   */
  config?: TargetGroupConfig;

  /**
   * <p>The date and time that the target group was created, specified in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The date and time that the target group was last updated, specified in ISO-8601
   *    format.</p>
   * @public
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The status.</p>
   * @public
   */
  status?: TargetGroupStatus;

  /**
   * <p>The Amazon Resource Names (ARNs) of the service.</p>
   * @public
   */
  serviceArns?: string[];

  /**
   * <p>The failure message.</p>
   * @public
   */
  failureMessage?: string;

  /**
   * <p>The failure code.</p>
   * @public
   */
  failureCode?: string;
}

/**
 * @public
 */
export interface ListListenersRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
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
  arn?: string;

  /**
   * <p>The ID of the listener.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the listener.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The listener protocol.</p>
   * @public
   */
  protocol?: ListenerProtocol;

  /**
   * <p>The listener port.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The date and time that the listener was created, specified in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The date and time that the listener was last updated, specified in ISO-8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date;
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
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateListenerRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
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
  arn?: string;

  /**
   * <p>The ID of the listener.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the listener.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The protocol of the listener.</p>
   * @public
   */
  protocol?: ListenerProtocol;

  /**
   * <p>The listener port.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceArn?: string;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  serviceId?: string;

  /**
   * <p>The action for the default rule.</p>
   * @public
   */
  defaultAction?: RuleAction;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Summary information about the listener rule.</p>
 * @public
 */
export interface RuleSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The ID of the rule.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Indicates whether this is the default rule. Listener rules are created when you create a
   *    listener. Each listener has a default rule for checking connection requests.
   *    </p>
   * @public
   */
  isDefault?: boolean;

  /**
   * <p> The priority of the rule. </p>
   * @public
   */
  priority?: number;

  /**
   * <p>The date and time that the listener rule was created, specified in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The date and time that the listener rule was last updated, specified in ISO-8601
   *    format.</p>
   * @public
   */
  lastUpdatedAt?: Date;
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
  nextToken?: string;
}

/**
 * @public
 */
export interface ListServiceNetworksRequest {
  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
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
  id?: string;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The date and time that the service network was created, specified in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The date and time that the service network was last updated, specified in ISO-8601
   *    format.</p>
   * @public
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The number of VPCs associated with the service network.</p>
   * @public
   */
  numberOfAssociatedVPCs?: number;

  /**
   * <p>The number of services associated with the service network.</p>
   * @public
   */
  numberOfAssociatedServices?: number;
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
  nextToken?: string;
}

/**
 * @public
 */
export interface ListServiceNetworkServiceAssociationsRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  serviceNetworkIdentifier?: string;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceIdentifier?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Summary information about the association between a service network and a service.</p>
 * @public
 */
export interface ServiceNetworkServiceAssociationSummary {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The status. If the deletion fails, try to delete again.</p>
   * @public
   */
  status?: ServiceNetworkServiceAssociationStatus;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The date and time that the association was created, specified in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  serviceId?: string;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  serviceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceArn?: string;

  /**
   * <p>The ID of the service network.</p>
   * @public
   */
  serviceNetworkId?: string;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  serviceNetworkName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  serviceNetworkArn?: string;

  /**
   * <p>DNS information about the service.</p>
   * @public
   */
  dnsEntry?: DnsEntry;

  /**
   * <p> The custom domain name of the service. </p>
   * @public
   */
  customDomainName?: string;
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
  nextToken?: string;
}

/**
 * @public
 */
export interface ListServiceNetworkVpcAssociationsRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  serviceNetworkIdentifier?: string;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the VPC.</p>
   * @public
   */
  vpcIdentifier?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
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
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The status.</p>
   * @public
   */
  status?: ServiceNetworkVpcAssociationStatus;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The date and time that the association was created, specified in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The ID of the service network.</p>
   * @public
   */
  serviceNetworkId?: string;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  serviceNetworkName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  serviceNetworkArn?: string;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  vpcId?: string;

  /**
   * <p>The date and time that the association was last updated, specified in ISO-8601
   *    format.</p>
   * @public
   */
  lastUpdatedAt?: Date;
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
  nextToken?: string;
}

/**
 * @public
 */
export interface ListServicesRequest {
  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
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
  id?: string;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The date and time that the service was created, specified in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The date and time that the service was last updated. The format is ISO-8601.</p>
   * @public
   */
  lastUpdatedAt?: Date;

  /**
   * <p>DNS information about the service.</p>
   * @public
   */
  dnsEntry?: DnsEntry;

  /**
   * <p> The custom domain name of the service. </p>
   * @public
   */
  customDomainName?: string;

  /**
   * <p>The status.</p>
   * @public
   */
  status?: ServiceStatus;
}

/**
 * @public
 */
export interface ListServicesResponse {
  /**
   * <p>The services.</p>
   * @public
   */
  items?: ServiceSummary[];

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
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
   * <p>The tags.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTargetGroupsRequest {
  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  vpcIdentifier?: string;

  /**
   * <p>The target group type.</p>
   * @public
   */
  targetGroupType?: TargetGroupType;
}

/**
 * <p>Summary information about a target group.</p>
 * @public
 */
export interface TargetGroupSummary {
  /**
   * <p>The ID of the target group.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the target group.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The name of the target group.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The target group type.</p>
   * @public
   */
  type?: TargetGroupType;

  /**
   * <p>The date and time that the target group was created, specified in ISO-8601 format.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The port of the target group.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The protocol of the target group.</p>
   * @public
   */
  protocol?: TargetGroupProtocol;

  /**
   * <p>The type of IP address used for the target group. The possible values are <code>ipv4</code> and <code>ipv6</code>.
   *    This is an optional parameter. If not specified, the IP address type defaults to <code>ipv4</code>.</p>
   * @public
   */
  ipAddressType?: IpAddressType;

  /**
   * <p>The ID of the VPC of the target group.</p>
   * @public
   */
  vpcIdentifier?: string;

  /**
   * <p>The date and time that the target group was last updated, specified in ISO-8601
   *    format.</p>
   * @public
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The status.</p>
   * @public
   */
  status?: TargetGroupStatus;

  /**
   * <p>The list of Amazon Resource Names (ARNs) of the service.</p>
   * @public
   */
  serviceArns?: string[];

  /**
   * Lambda event structure version
   * @public
   */
  lambdaEventStructureVersion?: LambdaEventStructureVersion;
}

/**
 * @public
 */
export interface ListTargetGroupsResponse {
  /**
   * <p>Information about the target groups.</p>
   * @public
   */
  items?: TargetGroupSummary[];

  /**
   * <p>If there are additional results, a pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTargetsRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the target group.</p>
   * @public
   */
  targetGroupIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The targets to list.</p>
   * @public
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
 * <p>Summary information about a target.</p>
 * @public
 */
export interface TargetSummary {
  /**
   * <p>The ID of the target. If the target type of the target group is <code>INSTANCE</code>, this
   *    is an instance ID. If the target type is <code>IP</code> , this is an IP address. If the target
   *    type is <code>LAMBDA</code>, this is the ARN of the Lambda function. If the target type is
   *     <code>ALB</code>, this is the ARN of the Application Load Balancer.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The port on which the target is listening.</p>
   * @public
   */
  port?: number;

  /**
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
   * @public
   */
  status?: TargetStatus;

  /**
   * <p>The code for why the target status is what it is.</p>
   * @public
   */
  reasonCode?: string;
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
  nextToken?: string;
}

/**
 * @public
 */
export interface PutAuthPolicyRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service network or service for which the policy
   *    is created.</p>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The auth policy.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutAuthPolicyResponse {
  /**
   * <p>The auth policy.</p>
   * @public
   */
  policy?: string;

  /**
   * <p>The state of the auth policy. The auth policy is only active when the auth type is set to
   *      <code>Amazon Web Services_IAM</code>. If you provide a policy, then authentication and
   *    authorization decisions are made based on this policy and the client's IAM policy. If the Auth
   *    type is <code>NONE</code>, then, any auth policy you provide will remain inactive. For more
   *    information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#create-service-network">Create a service
   *     network</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
   * @public
   */
  state?: AuthPolicyState;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service network or service for which the policy
   *    is created.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>An IAM policy.</p>
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
export interface UpdateRuleRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  ruleIdentifier: string | undefined;

  /**
   * <p>The rule match.</p>
   * @public
   */
  match?: RuleMatch;

  /**
   * <p>The rule priority. A listener can't have multiple rules with the same priority.</p>
   * @public
   */
  priority?: number;

  /**
   * <p>Information about the action for the specified listener rule.</p>
   * @public
   */
  action?: RuleAction;
}

/**
 * @public
 */
export interface UpdateRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The ID of the listener.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the listener.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Indicates whether this is the default rule.</p>
   * @public
   */
  isDefault?: boolean;

  /**
   * <p>The rule match.</p>
   * @public
   */
  match?: RuleMatch;

  /**
   * <p>The rule priority.</p>
   * @public
   */
  priority?: number;

  /**
   * <p>Information about the action for the specified listener rule.</p>
   * @public
   */
  action?: RuleAction;
}

/**
 * @public
 */
export interface UpdateServiceRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate. </p>
   * @public
   */
  certificateArn?: string;

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
  authType?: AuthType;
}

/**
 * @public
 */
export interface UpdateServiceResponse {
  /**
   * <p>The ID of the service.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The custom domain name of the service.</p>
   * @public
   */
  customDomainName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate. </p>
   * @public
   */
  certificateArn?: string;

  /**
   * <p>The type of IAM policy.</p>
   * @public
   */
  authType?: AuthType;
}

/**
 * @public
 */
export interface UpdateServiceNetworkRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the service network.</p>
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
  id?: string;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The type of IAM policy.</p>
   * @public
   */
  authType?: AuthType;
}

/**
 * @public
 */
export interface UpdateServiceNetworkVpcAssociationRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  serviceNetworkVpcAssociationIdentifier: string | undefined;

  /**
   * <p>The IDs of the security groups. Once you add a security group, it cannot be removed.</p>
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
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The status. You can retry the operation if the status is <code>DELETE_FAILED</code>.
   *    However, if you retry it while the status is <code>DELETE_IN_PROGRESS</code>, there is no change
   *    in the status.</p>
   * @public
   */
  status?: ServiceNetworkVpcAssociationStatus;

  /**
   * <p>The account that created the association.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  securityGroupIds?: string[];
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
   * <p>The ID or Amazon Resource Name (ARN) of the target group.</p>
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
  successful?: Target[];

  /**
   * <p>The targets that were not registered.</p>
   * @public
   */
  unsuccessful?: TargetFailure[];
}

/**
 * @public
 */
export interface UpdateTargetGroupRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the target group.</p>
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
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The name of the target group.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The target group type.</p>
   * @public
   */
  type?: TargetGroupType;

  /**
   * <p>The target group configuration.</p>
   * @public
   */
  config?: TargetGroupConfig;

  /**
   * <p>The status.</p>
   * @public
   */
  status?: TargetGroupStatus;
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
