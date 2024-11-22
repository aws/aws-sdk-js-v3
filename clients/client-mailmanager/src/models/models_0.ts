// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { MailManagerServiceException as __BaseException } from "./MailManagerServiceException";

/**
 * @public
 * @enum
 */
export const AcceptAction = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type AcceptAction = (typeof AcceptAction)[keyof typeof AcceptAction];

/**
 * <p>Occurs when a user is denied access to a specific resource or action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ActionFailurePolicy = {
  CONTINUE: "CONTINUE",
  DROP: "DROP",
} as const;

/**
 * @public
 */
export type ActionFailurePolicy = (typeof ActionFailurePolicy)[keyof typeof ActionFailurePolicy];

/**
 * <p>The action to add a header to a message. When executed, this action will add the given
 *             header to the message.</p>
 * @public
 */
export interface AddHeaderAction {
  /**
   * <p>The name of the header to add to an email. The header must be prefixed with
   *             "X-". Headers are added regardless of whether the header name pre-existed in
   *             the email.</p>
   * @public
   */
  HeaderName: string | undefined;

  /**
   * <p>The value of the header to add to the email.</p>
   * @public
   */
  HeaderValue: string | undefined;
}

/**
 * <p>An Add On instance represents a specific configuration of an Add On.</p>
 * @public
 */
export interface AddonInstance {
  /**
   * <p>The unique ID of the Add On instance.</p>
   * @public
   */
  AddonInstanceId?: string | undefined;

  /**
   * <p>The subscription ID for the instance.</p>
   * @public
   */
  AddonSubscriptionId?: string | undefined;

  /**
   * <p>The name of the Add On for the instance.</p>
   * @public
   */
  AddonName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Add On instance.</p>
   * @public
   */
  AddonInstanceArn?: string | undefined;

  /**
   * <p>The timestamp of when the Add On instance was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>A key-value pair (the value is optional), that you can define and assign to Amazon Web Services resources.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the key-value tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the key-value tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAddonInstanceRequest {
  /**
   * <p>A unique token that Amazon SES uses to recognize subsequent retries of the same
   *             request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The unique ID of a previously created subscription that an Add On instance is created
   *             for. You can only have one instance per subscription.</p>
   * @public
   */
  AddonSubscriptionId: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAddonInstanceResponse {
  /**
   * <p>The unique ID of the Add On instance created by this API.</p>
   * @public
   */
  AddonInstanceId: string | undefined;
}

/**
 * <p>Occurs when a requested resource is not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Occurs when an operation exceeds a predefined service quota or limit.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The request validation has failed. For details, see the accompanying error message.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteAddonInstanceRequest {
  /**
   * <p>The Add On instance ID to delete.</p>
   * @public
   */
  AddonInstanceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAddonInstanceResponse {}

/**
 * @public
 */
export interface GetAddonInstanceRequest {
  /**
   * <p>The Add On instance ID to retrieve information for.</p>
   * @public
   */
  AddonInstanceId: string | undefined;
}

/**
 * @public
 */
export interface GetAddonInstanceResponse {
  /**
   * <p>The subscription ID associated to the instance.</p>
   * @public
   */
  AddonSubscriptionId?: string | undefined;

  /**
   * <p>The name of the Add On provider associated to the subscription of the instance.</p>
   * @public
   */
  AddonName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Add On instance.</p>
   * @public
   */
  AddonInstanceArn?: string | undefined;

  /**
   * <p>The timestamp of when the Add On instance was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListAddonInstancesRequest {
  /**
   * <p>If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of ingress endpoint resources that are returned per call. You can
   *             use NextToken to obtain further ingress endpoints. </p>
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListAddonInstancesResponse {
  /**
   * <p>The list of ingress endpoints.</p>
   * @public
   */
  AddonInstances?: AddonInstance[] | undefined;

  /**
   * <p>If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A subscription for an Add On representing the acceptance of its terms of use and
 *             additional pricing.</p>
 * @public
 */
export interface AddonSubscription {
  /**
   * <p>The unique ID of the Add On subscription.</p>
   * @public
   */
  AddonSubscriptionId?: string | undefined;

  /**
   * <p>The name of the Add On.</p>
   * @public
   */
  AddonName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Add On subscription.</p>
   * @public
   */
  AddonSubscriptionArn?: string | undefined;

  /**
   * <p>The timestamp of when the Add On subscription was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateAddonSubscriptionRequest {
  /**
   * <p>A unique token that Amazon SES uses to recognize subsequent retries of the same
   *             request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The name of the Add On to subscribe to. You can only have one subscription for each
   *             Add On name.</p>
   * @public
   */
  AddonName: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAddonSubscriptionResponse {
  /**
   * <p>The unique ID of the Add On subscription created by this API.</p>
   * @public
   */
  AddonSubscriptionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAddonSubscriptionRequest {
  /**
   * <p>The Add On subscription ID to delete.</p>
   * @public
   */
  AddonSubscriptionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAddonSubscriptionResponse {}

/**
 * @public
 */
export interface GetAddonSubscriptionRequest {
  /**
   * <p>The Add On subscription ID to retrieve information for.</p>
   * @public
   */
  AddonSubscriptionId: string | undefined;
}

/**
 * @public
 */
export interface GetAddonSubscriptionResponse {
  /**
   * <p>The name of the Add On for the subscription.</p>
   * @public
   */
  AddonName?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the subscription.</p>
   * @public
   */
  AddonSubscriptionArn?: string | undefined;

  /**
   * <p>The timestamp of when the Add On subscription was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListAddonSubscriptionsRequest {
  /**
   * <p>If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of ingress endpoint resources that are returned per call. You can
   *             use NextToken to obtain further ingress endpoints. </p>
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListAddonSubscriptionsResponse {
  /**
   * <p>The list of ingress endpoints.</p>
   * @public
   */
  AddonSubscriptions?: AddonSubscription[] | undefined;

  /**
   * <p>If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The result of an analysis can be used in conditions to trigger actions. Analyses can
 *             inspect the email content and report a certain aspect of the email.</p>
 * @public
 */
export interface Analysis {
  /**
   * <p>The Amazon Resource Name (ARN) of an Add On.</p>
   * @public
   */
  Analyzer: string | undefined;

  /**
   * <p>The returned value from an Add On.</p>
   * @public
   */
  ResultField: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ArchiveState = {
  ACTIVE: "ACTIVE",
  PENDING_DELETION: "PENDING_DELETION",
} as const;

/**
 * @public
 */
export type ArchiveState = (typeof ArchiveState)[keyof typeof ArchiveState];

/**
 * <p>An archive resource for storing and retaining emails.</p>
 * @public
 */
export interface Archive {
  /**
   * <p>The unique identifier of the archive.</p>
   * @public
   */
  ArchiveId: string | undefined;

  /**
   * <p>The unique name assigned to the archive.</p>
   * @public
   */
  ArchiveName?: string | undefined;

  /**
   * <p>The current state of the archive:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> – The archive is ready and available for use. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_DELETION</code> – The archive has been marked for deletion
   *                     and will be permanently deleted in 30 days. No further modifications can be made
   *                     in this state. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ArchiveState?: ArchiveState | undefined;

  /**
   * <p>The timestamp of when the archive was last updated.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * <p>The action to archive the email by delivering the email to an Amazon SES archive.</p>
 * @public
 */
export interface ArchiveAction {
  /**
   * <p>A policy that states what to do in the case of failure. The action will fail if there
   *             are configuration errors. For example, the specified archive has been deleted.</p>
   * @public
   */
  ActionFailurePolicy?: ActionFailurePolicy | undefined;

  /**
   * <p>The identifier of the archive to send the email to.</p>
   * @public
   */
  TargetArchive: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ArchiveBooleanEmailAttribute = {
  HAS_ATTACHMENTS: "HAS_ATTACHMENTS",
} as const;

/**
 * @public
 */
export type ArchiveBooleanEmailAttribute =
  (typeof ArchiveBooleanEmailAttribute)[keyof typeof ArchiveBooleanEmailAttribute];

/**
 * <p>The attribute to evaluate in a boolean expression.</p>
 * @public
 */
export type ArchiveBooleanToEvaluate =
  | ArchiveBooleanToEvaluate.AttributeMember
  | ArchiveBooleanToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace ArchiveBooleanToEvaluate {
  /**
   * <p>The name of the email attribute to evaluate.</p>
   * @public
   */
  export interface AttributeMember {
    Attribute: ArchiveBooleanEmailAttribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Attribute: (value: ArchiveBooleanEmailAttribute) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ArchiveBooleanToEvaluate, visitor: Visitor<T>): T => {
    if (value.Attribute !== undefined) return visitor.Attribute(value.Attribute);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ArchiveBooleanOperator = {
  IS_FALSE: "IS_FALSE",
  IS_TRUE: "IS_TRUE",
} as const;

/**
 * @public
 */
export type ArchiveBooleanOperator = (typeof ArchiveBooleanOperator)[keyof typeof ArchiveBooleanOperator];

/**
 * <p>A boolean expression to evaluate email attribute values.</p>
 * @public
 */
export interface ArchiveBooleanExpression {
  /**
   * <p>The email attribute value to evaluate.</p>
   * @public
   */
  Evaluate: ArchiveBooleanToEvaluate | undefined;

  /**
   * <p>The boolean operator to use for evaluation.</p>
   * @public
   */
  Operator: ArchiveBooleanOperator | undefined;
}

/**
 * @public
 * @enum
 */
export const ArchiveStringEmailAttribute = {
  CC: "CC",
  ENVELOPE_FROM: "ENVELOPE_FROM",
  ENVELOPE_TO: "ENVELOPE_TO",
  FROM: "FROM",
  SUBJECT: "SUBJECT",
  TO: "TO",
} as const;

/**
 * @public
 */
export type ArchiveStringEmailAttribute =
  (typeof ArchiveStringEmailAttribute)[keyof typeof ArchiveStringEmailAttribute];

/**
 * <p>Specifies the email attribute to evaluate in a string expression.</p>
 * @public
 */
export type ArchiveStringToEvaluate = ArchiveStringToEvaluate.AttributeMember | ArchiveStringToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace ArchiveStringToEvaluate {
  /**
   * <p>The name of the email attribute to evaluate.</p>
   * @public
   */
  export interface AttributeMember {
    Attribute: ArchiveStringEmailAttribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Attribute: (value: ArchiveStringEmailAttribute) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ArchiveStringToEvaluate, visitor: Visitor<T>): T => {
    if (value.Attribute !== undefined) return visitor.Attribute(value.Attribute);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ArchiveStringOperator = {
  CONTAINS: "CONTAINS",
} as const;

/**
 * @public
 */
export type ArchiveStringOperator = (typeof ArchiveStringOperator)[keyof typeof ArchiveStringOperator];

/**
 * <p>A string expression to evaluate an email attribute value against one or more string values.</p>
 * @public
 */
export interface ArchiveStringExpression {
  /**
   * <p>The attribute of the email to evaluate.</p>
   * @public
   */
  Evaluate: ArchiveStringToEvaluate | undefined;

  /**
   * <p>The operator to use when evaluating the string values.</p>
   * @public
   */
  Operator: ArchiveStringOperator | undefined;

  /**
   * <p>The list of string values to evaluate the email attribute against.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>A filter condition used to include or exclude emails when exporting from or searching an archive.</p>
 * @public
 */
export type ArchiveFilterCondition =
  | ArchiveFilterCondition.BooleanExpressionMember
  | ArchiveFilterCondition.StringExpressionMember
  | ArchiveFilterCondition.$UnknownMember;

/**
 * @public
 */
export namespace ArchiveFilterCondition {
  /**
   * <p>A string expression to evaluate against email attributes.</p>
   * @public
   */
  export interface StringExpressionMember {
    StringExpression: ArchiveStringExpression;
    BooleanExpression?: never;
    $unknown?: never;
  }

  /**
   * <p>A boolean expression to evaluate against email attributes.</p>
   * @public
   */
  export interface BooleanExpressionMember {
    StringExpression?: never;
    BooleanExpression: ArchiveBooleanExpression;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringExpression?: never;
    BooleanExpression?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    StringExpression: (value: ArchiveStringExpression) => T;
    BooleanExpression: (value: ArchiveBooleanExpression) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ArchiveFilterCondition, visitor: Visitor<T>): T => {
    if (value.StringExpression !== undefined) return visitor.StringExpression(value.StringExpression);
    if (value.BooleanExpression !== undefined) return visitor.BooleanExpression(value.BooleanExpression);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A set of filter conditions to include and/or exclude emails.</p>
 * @public
 */
export interface ArchiveFilters {
  /**
   * <p>The filter conditions for emails to include.</p>
   * @public
   */
  Include?: ArchiveFilterCondition[] | undefined;

  /**
   * <p>The filter conditions for emails to exclude.</p>
   * @public
   */
  Unless?: ArchiveFilterCondition[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RetentionPeriod = {
  EIGHTEEN_MONTHS: "EIGHTEEN_MONTHS",
  EIGHT_YEARS: "EIGHT_YEARS",
  FIVE_YEARS: "FIVE_YEARS",
  FOUR_YEARS: "FOUR_YEARS",
  NINE_MONTHS: "NINE_MONTHS",
  NINE_YEARS: "NINE_YEARS",
  ONE_YEAR: "ONE_YEAR",
  PERMANENT: "PERMANENT",
  SEVEN_YEARS: "SEVEN_YEARS",
  SIX_MONTHS: "SIX_MONTHS",
  SIX_YEARS: "SIX_YEARS",
  TEN_YEARS: "TEN_YEARS",
  THIRTY_MONTHS: "THIRTY_MONTHS",
  THREE_MONTHS: "THREE_MONTHS",
  THREE_YEARS: "THREE_YEARS",
  TWO_YEARS: "TWO_YEARS",
} as const;

/**
 * @public
 */
export type RetentionPeriod = (typeof RetentionPeriod)[keyof typeof RetentionPeriod];

/**
 * <p>The retention policy for an email archive that specifies how long emails are kept
 *             before being automatically deleted. </p>
 * @public
 */
export type ArchiveRetention = ArchiveRetention.RetentionPeriodMember | ArchiveRetention.$UnknownMember;

/**
 * @public
 */
export namespace ArchiveRetention {
  /**
   * <p>The enum value sets the period for retaining emails in an archive.</p>
   * @public
   */
  export interface RetentionPeriodMember {
    RetentionPeriod: RetentionPeriod;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RetentionPeriod?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    RetentionPeriod: (value: RetentionPeriod) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ArchiveRetention, visitor: Visitor<T>): T => {
    if (value.RetentionPeriod !== undefined) return visitor.RetentionPeriod(value.RetentionPeriod);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The request to create a new email archive.</p>
 * @public
 */
export interface CreateArchiveRequest {
  /**
   * <p>A unique token Amazon SES uses to recognize retries of this request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A unique name for the new archive.</p>
   * @public
   */
  ArchiveName: string | undefined;

  /**
   * <p>The period for retaining emails in the archive before automatic deletion.</p>
   * @public
   */
  Retention?: ArchiveRetention | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key for encrypting emails in the archive.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The response from creating a new email archive.</p>
 * @public
 */
export interface CreateArchiveResponse {
  /**
   * <p>The unique identifier for the newly created archive.</p>
   * @public
   */
  ArchiveId: string | undefined;
}

/**
 * <p>Occurs when a service's request rate limit is exceeded, resulting in throttling of further requests.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The request to initiate deletion of an email archive.</p>
 * @public
 */
export interface DeleteArchiveRequest {
  /**
   * <p>The identifier of the archive to delete.</p>
   * @public
   */
  ArchiveId: string | undefined;
}

/**
 * <p>The response indicating if the archive deletion was successfully initiated.</p>
 *          <p>On success, returns an HTTP 200 status code. On failure, returns an error
 *             message.</p>
 * @public
 */
export interface DeleteArchiveResponse {}

/**
 * <p>The request to retrieve details of an email archive.</p>
 * @public
 */
export interface GetArchiveRequest {
  /**
   * <p>The identifier of the archive to retrieve.</p>
   * @public
   */
  ArchiveId: string | undefined;
}

/**
 * <p>The response containing details of the requested archive.</p>
 * @public
 */
export interface GetArchiveResponse {
  /**
   * <p>The unique identifier of the archive.</p>
   * @public
   */
  ArchiveId: string | undefined;

  /**
   * <p>The unique name assigned to the archive.</p>
   * @public
   */
  ArchiveName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the archive.</p>
   * @public
   */
  ArchiveArn: string | undefined;

  /**
   * <p>The current state of the archive:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> – The archive is ready and available for use. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_DELETION</code> – The archive has been marked for deletion
   *                     and will be permanently deleted in 30 days. No further modifications can be made
   *                     in this state. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ArchiveState: ArchiveState | undefined;

  /**
   * <p>The retention period for emails in this archive.</p>
   * @public
   */
  Retention: ArchiveRetention | undefined;

  /**
   * <p>The timestamp of when the archive was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp of when the archive was modified.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the archive.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * <p>The request to list email archives in your account.</p>
 * @public
 */
export interface ListArchivesRequest {
  /**
   * <p>If NextToken is returned, there are more results available. The value of NextToken is
   *             a unique pagination token for each page. Make the call again using the returned token to
   *             retrieve the next page. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of archives that are returned per call. You can use NextToken to
   *             obtain further pages of archives. </p>
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * <p>The response containing a list of your email archives.</p>
 * @public
 */
export interface ListArchivesResponse {
  /**
   * <p>The list of archive details.</p>
   * @public
   */
  Archives: Archive[] | undefined;

  /**
   * <p>If present, use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The request to update properties of an existing email archive.</p>
 * @public
 */
export interface UpdateArchiveRequest {
  /**
   * <p>The identifier of the archive to update.</p>
   * @public
   */
  ArchiveId: string | undefined;

  /**
   * <p>A new, unique name for the archive.</p>
   * @public
   */
  ArchiveName?: string | undefined;

  /**
   * <p>A new retention period for emails in the archive.</p>
   * @public
   */
  Retention?: ArchiveRetention | undefined;
}

/**
 * <p>The response indicating if the archive update succeeded or failed.</p>
 *          <p>On success, returns an HTTP 200 status code. On failure, returns an error
 *             message.</p>
 * @public
 */
export interface UpdateArchiveResponse {}

/**
 * <p>The configuration of the ingress endpoint resource.</p>
 * @public
 */
export type IngressPointConfiguration =
  | IngressPointConfiguration.SecretArnMember
  | IngressPointConfiguration.SmtpPasswordMember
  | IngressPointConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace IngressPointConfiguration {
  /**
   * <p>The password of the ingress endpoint resource.</p>
   * @public
   */
  export interface SmtpPasswordMember {
    SmtpPassword: string;
    SecretArn?: never;
    $unknown?: never;
  }

  /**
   * <p>The SecretsManager::Secret ARN of the ingress endpoint resource.</p>
   * @public
   */
  export interface SecretArnMember {
    SmtpPassword?: never;
    SecretArn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SmtpPassword?: never;
    SecretArn?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    SmtpPassword: (value: string) => T;
    SecretArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: IngressPointConfiguration, visitor: Visitor<T>): T => {
    if (value.SmtpPassword !== undefined) return visitor.SmtpPassword(value.SmtpPassword);
    if (value.SecretArn !== undefined) return visitor.SecretArn(value.SecretArn);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const IngressPointType = {
  AUTH: "AUTH",
  OPEN: "OPEN",
} as const;

/**
 * @public
 */
export type IngressPointType = (typeof IngressPointType)[keyof typeof IngressPointType];

/**
 * @public
 */
export interface CreateIngressPointRequest {
  /**
   * <p>A unique token that Amazon SES uses to recognize subsequent retries of the same
   *             request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A user friendly name for an ingress endpoint resource.</p>
   * @public
   */
  IngressPointName: string | undefined;

  /**
   * <p>The type of the ingress endpoint to create.</p>
   * @public
   */
  Type: IngressPointType | undefined;

  /**
   * <p>The identifier of an existing rule set that you attach to an ingress endpoint
   *             resource.</p>
   * @public
   */
  RuleSetId: string | undefined;

  /**
   * <p>The identifier of an existing traffic policy that you attach to an ingress endpoint
   *             resource.</p>
   * @public
   */
  TrafficPolicyId: string | undefined;

  /**
   * <p>If you choose an Authenticated ingress endpoint, you must configure either an SMTP password or a secret
   *             ARN.</p>
   * @public
   */
  IngressPointConfiguration?: IngressPointConfiguration | undefined;

  /**
   * <p>The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateIngressPointResponse {
  /**
   * <p>The unique identifier for a previously created ingress endpoint.</p>
   * @public
   */
  IngressPointId: string | undefined;
}

/**
 * <p>Explicitly indicate that the relay destination server does not require SMTP credential authentication.</p>
 * @public
 */
export interface NoAuthentication {}

/**
 * <p>Authentication for the relay destination server—specify the secretARN where the SMTP credentials are stored,
 *             or specify an empty NoAuthentication structure if the relay destination server does not require SMTP credential authentication.</p>
 * @public
 */
export type RelayAuthentication =
  | RelayAuthentication.NoAuthenticationMember
  | RelayAuthentication.SecretArnMember
  | RelayAuthentication.$UnknownMember;

/**
 * @public
 */
export namespace RelayAuthentication {
  /**
   * <p>The ARN of the secret created in secrets manager where the relay server's SMTP credentials are stored.</p>
   * @public
   */
  export interface SecretArnMember {
    SecretArn: string;
    NoAuthentication?: never;
    $unknown?: never;
  }

  /**
   * <p>Keep an empty structure if the relay destination server does not require SMTP credential authentication.</p>
   * @public
   */
  export interface NoAuthenticationMember {
    SecretArn?: never;
    NoAuthentication: NoAuthentication;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SecretArn?: never;
    NoAuthentication?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    SecretArn: (value: string) => T;
    NoAuthentication: (value: NoAuthentication) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RelayAuthentication, visitor: Visitor<T>): T => {
    if (value.SecretArn !== undefined) return visitor.SecretArn(value.SecretArn);
    if (value.NoAuthentication !== undefined) return visitor.NoAuthentication(value.NoAuthentication);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateRelayRequest {
  /**
   * <p>A unique token that Amazon SES uses to recognize subsequent retries of the same
   *             request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The unique name of the relay resource.</p>
   * @public
   */
  RelayName: string | undefined;

  /**
   * <p>The destination relay server address.</p>
   * @public
   */
  ServerName: string | undefined;

  /**
   * <p>The destination relay server port.</p>
   * @public
   */
  ServerPort: number | undefined;

  /**
   * <p>Authentication for the relay destination server—specify the secretARN where
   *             the SMTP credentials are stored.</p>
   * @public
   */
  Authentication: RelayAuthentication | undefined;

  /**
   * <p>The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRelayResponse {
  /**
   * <p>A unique identifier of the created relay resource.</p>
   * @public
   */
  RelayId: string | undefined;
}

/**
 * <p>This action to delivers an email to a mailbox.</p>
 * @public
 */
export interface DeliverToMailboxAction {
  /**
   * <p>A policy that states what to do in the case of failure. The action will fail if there
   *             are configuration errors. For example, the mailbox ARN is no longer valid.</p>
   * @public
   */
  ActionFailurePolicy?: ActionFailurePolicy | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a WorkMail organization to deliver the email to.</p>
   * @public
   */
  MailboxArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role to use to execute this action. The role must have access to
   *             the workmail:DeliverToMailbox API.</p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * <p>The action to deliver incoming emails to an Amazon Q Business application for indexing.</p>
 * @public
 */
export interface DeliverToQBusinessAction {
  /**
   * <p>A policy that states what to do in the case of failure. The action will fail if there are
   *             configuration errors. For example, the specified application has been deleted or the role lacks
   *             necessary permissions to call the qbusiness:BatchPutDocument API.</p>
   * @public
   */
  ActionFailurePolicy?: ActionFailurePolicy | undefined;

  /**
   * <p>The unique identifier of the Amazon Q Business application instance where the email
   *             content will be delivered.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The identifier of the knowledge base index within the Amazon Q Business application
   *             where the email content will be stored and indexed.</p>
   * @public
   */
  IndexId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM Role to use while delivering to Amazon Q Business. This role must have access
   *             to the qbusiness:BatchPutDocument API for the given application and index.</p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * <p>This action causes processing to stop and the email to be dropped. If the action
 *             applies only to certain recipients, only those recipients are dropped, and processing
 *             continues for other recipients.</p>
 * @public
 */
export interface DropAction {}

/**
 * @public
 * @enum
 */
export const MailFrom = {
  PRESERVE: "PRESERVE",
  REPLACE: "REPLACE",
} as const;

/**
 * @public
 */
export type MailFrom = (typeof MailFrom)[keyof typeof MailFrom];

/**
 * <p>The action relays the email via SMTP to another specific SMTP server.</p>
 * @public
 */
export interface RelayAction {
  /**
   * <p>A policy that states what to do in the case of failure. The action will fail if there
   *             are configuration errors. For example, the specified relay has been deleted.</p>
   * @public
   */
  ActionFailurePolicy?: ActionFailurePolicy | undefined;

  /**
   * <p>The identifier of the relay resource to be used when relaying an email.</p>
   * @public
   */
  Relay: string | undefined;

  /**
   * <p>This action specifies whether to preserve or replace original mail from address while
   *             relaying received emails to a destination server.</p>
   * @public
   */
  MailFrom?: MailFrom | undefined;
}

/**
 * <p>This action replaces the email envelope recipients with the given list of recipients.
 *             If the condition of this action applies only to a subset of recipients, only those
 *             recipients are replaced with the recipients specified in the action. The message
 *             contents and headers are unaffected by this action, only the envelope recipients are
 *             updated.</p>
 * @public
 */
export interface ReplaceRecipientAction {
  /**
   * <p>This action specifies the replacement recipient email addresses to insert.</p>
   * @public
   */
  ReplaceWith?: string[] | undefined;
}

/**
 * <p>Sends the email to the internet using the ses:SendRawEmail API.</p>
 * @public
 */
export interface SendAction {
  /**
   * <p>A policy that states what to do in the case of failure. The action will fail if there
   *             are configuration errors. For example, the caller does not have the permissions to call
   *             the sendRawEmail API.</p>
   * @public
   */
  ActionFailurePolicy?: ActionFailurePolicy | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role to use for this action. This role must have access to the
   *             ses:SendRawEmail API.</p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * <p>Writes the MIME content of the email to an S3 bucket.</p>
 * @public
 */
export interface S3Action {
  /**
   * <p>A policy that states what to do in the case of failure. The action will fail if there
   *             are configuration errors. For example, the specified the bucket has been deleted.</p>
   * @public
   */
  ActionFailurePolicy?: ActionFailurePolicy | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM Role to use while writing to S3. This role must have access to
   *             the s3:PutObject, kms:Encrypt, and kms:GenerateDataKey APIs for the given bucket.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The bucket name of the S3 bucket to write to.</p>
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * <p>The S3 prefix to use for the write to the s3 bucket.</p>
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * <p>The KMS Key ID to use to encrypt the message in S3.</p>
   * @public
   */
  S3SseKmsKeyId?: string | undefined;
}

/**
 * <p>The action for a rule to take. Only one of the contained actions can be set.</p>
 * @public
 */
export type RuleAction =
  | RuleAction.AddHeaderMember
  | RuleAction.ArchiveMember
  | RuleAction.DeliverToMailboxMember
  | RuleAction.DeliverToQBusinessMember
  | RuleAction.DropMember
  | RuleAction.RelayMember
  | RuleAction.ReplaceRecipientMember
  | RuleAction.SendMember
  | RuleAction.WriteToS3Member
  | RuleAction.$UnknownMember;

/**
 * @public
 */
export namespace RuleAction {
  /**
   * <p>This action terminates the evaluation of rules in the rule set.</p>
   * @public
   */
  export interface DropMember {
    Drop: DropAction;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    $unknown?: never;
  }

  /**
   * <p>This action relays the email to another SMTP server.</p>
   * @public
   */
  export interface RelayMember {
    Drop?: never;
    Relay: RelayAction;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    $unknown?: never;
  }

  /**
   * <p>This action archives the email. This can be used to deliver an email to an
   *             archive.</p>
   * @public
   */
  export interface ArchiveMember {
    Drop?: never;
    Relay?: never;
    Archive: ArchiveAction;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    $unknown?: never;
  }

  /**
   * <p>This action writes the MIME content of the email to an S3 bucket.</p>
   * @public
   */
  export interface WriteToS3Member {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3: S3Action;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    $unknown?: never;
  }

  /**
   * <p>This action sends the email to the internet.</p>
   * @public
   */
  export interface SendMember {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send: SendAction;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    $unknown?: never;
  }

  /**
   * <p>This action adds a header. This can be used to add arbitrary email headers.</p>
   * @public
   */
  export interface AddHeaderMember {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader: AddHeaderAction;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    $unknown?: never;
  }

  /**
   * <p>The action replaces certain or all recipients with a different set of
   *             recipients.</p>
   * @public
   */
  export interface ReplaceRecipientMember {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient: ReplaceRecipientAction;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    $unknown?: never;
  }

  /**
   * <p>This action delivers an email to a WorkMail mailbox.</p>
   * @public
   */
  export interface DeliverToMailboxMember {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox: DeliverToMailboxAction;
    DeliverToQBusiness?: never;
    $unknown?: never;
  }

  /**
   * <p>This action delivers an email to an Amazon Q Business application for ingestion into
   *             its knowledge base.</p>
   * @public
   */
  export interface DeliverToQBusinessMember {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness: DeliverToQBusinessAction;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Drop: (value: DropAction) => T;
    Relay: (value: RelayAction) => T;
    Archive: (value: ArchiveAction) => T;
    WriteToS3: (value: S3Action) => T;
    Send: (value: SendAction) => T;
    AddHeader: (value: AddHeaderAction) => T;
    ReplaceRecipient: (value: ReplaceRecipientAction) => T;
    DeliverToMailbox: (value: DeliverToMailboxAction) => T;
    DeliverToQBusiness: (value: DeliverToQBusinessAction) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RuleAction, visitor: Visitor<T>): T => {
    if (value.Drop !== undefined) return visitor.Drop(value.Drop);
    if (value.Relay !== undefined) return visitor.Relay(value.Relay);
    if (value.Archive !== undefined) return visitor.Archive(value.Archive);
    if (value.WriteToS3 !== undefined) return visitor.WriteToS3(value.WriteToS3);
    if (value.Send !== undefined) return visitor.Send(value.Send);
    if (value.AddHeader !== undefined) return visitor.AddHeader(value.AddHeader);
    if (value.ReplaceRecipient !== undefined) return visitor.ReplaceRecipient(value.ReplaceRecipient);
    if (value.DeliverToMailbox !== undefined) return visitor.DeliverToMailbox(value.DeliverToMailbox);
    if (value.DeliverToQBusiness !== undefined) return visitor.DeliverToQBusiness(value.DeliverToQBusiness);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const RuleBooleanEmailAttribute = {
  READ_RECEIPT_REQUESTED: "READ_RECEIPT_REQUESTED",
  TLS: "TLS",
  TLS_WRAPPED: "TLS_WRAPPED",
} as const;

/**
 * @public
 */
export type RuleBooleanEmailAttribute = (typeof RuleBooleanEmailAttribute)[keyof typeof RuleBooleanEmailAttribute];

/**
 * <p>The union type representing the allowed types of operands for a boolean
 *             condition.</p>
 * @public
 */
export type RuleBooleanToEvaluate = RuleBooleanToEvaluate.AttributeMember | RuleBooleanToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace RuleBooleanToEvaluate {
  /**
   * <p>The boolean type representing the allowed attribute types for an email.</p>
   * @public
   */
  export interface AttributeMember {
    Attribute: RuleBooleanEmailAttribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Attribute: (value: RuleBooleanEmailAttribute) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RuleBooleanToEvaluate, visitor: Visitor<T>): T => {
    if (value.Attribute !== undefined) return visitor.Attribute(value.Attribute);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const RuleBooleanOperator = {
  IS_FALSE: "IS_FALSE",
  IS_TRUE: "IS_TRUE",
} as const;

/**
 * @public
 */
export type RuleBooleanOperator = (typeof RuleBooleanOperator)[keyof typeof RuleBooleanOperator];

/**
 * <p>A boolean expression to be used in a rule condition.</p>
 * @public
 */
export interface RuleBooleanExpression {
  /**
   * <p>The operand on which to perform a boolean condition operation.</p>
   * @public
   */
  Evaluate: RuleBooleanToEvaluate | undefined;

  /**
   * <p>The matching operator for a boolean condition expression.</p>
   * @public
   */
  Operator: RuleBooleanOperator | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleDmarcOperator = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;

/**
 * @public
 */
export type RuleDmarcOperator = (typeof RuleDmarcOperator)[keyof typeof RuleDmarcOperator];

/**
 * @public
 * @enum
 */
export const RuleDmarcPolicy = {
  NONE: "NONE",
  QUARANTINE: "QUARANTINE",
  REJECT: "REJECT",
} as const;

/**
 * @public
 */
export type RuleDmarcPolicy = (typeof RuleDmarcPolicy)[keyof typeof RuleDmarcPolicy];

/**
 * <p>A DMARC policy expression. The condition matches if the given DMARC policy matches
 *             that of the incoming email.</p>
 * @public
 */
export interface RuleDmarcExpression {
  /**
   * <p>The operator to apply to the DMARC policy of the incoming email.</p>
   * @public
   */
  Operator: RuleDmarcOperator | undefined;

  /**
   * <p>The values to use for the given DMARC policy operator. For the operator EQUALS, if
   *             multiple values are given, they are evaluated as an OR. That is, if any of the given
   *             values match, the condition is deemed to match. For the operator NOT_EQUALS, if multiple
   *             values are given, they are evaluated as an AND. That is, only if the email's DMARC
   *             policy is not equal to any of the given values, then the condition is deemed to
   *             match.</p>
   * @public
   */
  Values: RuleDmarcPolicy[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleIpEmailAttribute = {
  SOURCE_IP: "SOURCE_IP",
} as const;

/**
 * @public
 */
export type RuleIpEmailAttribute = (typeof RuleIpEmailAttribute)[keyof typeof RuleIpEmailAttribute];

/**
 * <p>The IP address to evaluate for this condition.</p>
 * @public
 */
export type RuleIpToEvaluate = RuleIpToEvaluate.AttributeMember | RuleIpToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace RuleIpToEvaluate {
  /**
   * <p>The attribute of the email to evaluate.</p>
   * @public
   */
  export interface AttributeMember {
    Attribute: RuleIpEmailAttribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Attribute: (value: RuleIpEmailAttribute) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RuleIpToEvaluate, visitor: Visitor<T>): T => {
    if (value.Attribute !== undefined) return visitor.Attribute(value.Attribute);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const RuleIpOperator = {
  CIDR_MATCHES: "CIDR_MATCHES",
  NOT_CIDR_MATCHES: "NOT_CIDR_MATCHES",
} as const;

/**
 * @public
 */
export type RuleIpOperator = (typeof RuleIpOperator)[keyof typeof RuleIpOperator];

/**
 * <p>An IP address expression matching certain IP addresses within a given range of IP
 *             addresses.</p>
 * @public
 */
export interface RuleIpExpression {
  /**
   * <p>The IP address to evaluate in this condition.</p>
   * @public
   */
  Evaluate: RuleIpToEvaluate | undefined;

  /**
   * <p>The operator to evaluate the IP address.</p>
   * @public
   */
  Operator: RuleIpOperator | undefined;

  /**
   * <p>The IP CIDR blocks in format "x.y.z.w/n" (eg 10.0.0.0/8) to match with the
   *             email's IP address. For the operator CIDR_MATCHES, if multiple values are given, they
   *             are evaluated as an OR. That is, if the IP address is contained within any of the given
   *             CIDR ranges, the condition is deemed to match. For NOT_CIDR_MATCHES, if multiple CIDR
   *             ranges are given, the condition is deemed to match if the IP address is not contained in
   *             any of the given CIDR ranges.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleNumberEmailAttribute = {
  MESSAGE_SIZE: "MESSAGE_SIZE",
} as const;

/**
 * @public
 */
export type RuleNumberEmailAttribute = (typeof RuleNumberEmailAttribute)[keyof typeof RuleNumberEmailAttribute];

/**
 * <p>The number to evaluate in a numeric condition expression.</p>
 * @public
 */
export type RuleNumberToEvaluate = RuleNumberToEvaluate.AttributeMember | RuleNumberToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace RuleNumberToEvaluate {
  /**
   * <p>An email attribute that is used as the number to evaluate.</p>
   * @public
   */
  export interface AttributeMember {
    Attribute: RuleNumberEmailAttribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Attribute: (value: RuleNumberEmailAttribute) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RuleNumberToEvaluate, visitor: Visitor<T>): T => {
    if (value.Attribute !== undefined) return visitor.Attribute(value.Attribute);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const RuleNumberOperator = {
  EQUALS: "EQUALS",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL: "LESS_THAN_OR_EQUAL",
  NOT_EQUALS: "NOT_EQUALS",
} as const;

/**
 * @public
 */
export type RuleNumberOperator = (typeof RuleNumberOperator)[keyof typeof RuleNumberOperator];

/**
 * <p>A number expression to match numeric conditions with integers from the incoming
 *             email.</p>
 * @public
 */
export interface RuleNumberExpression {
  /**
   * <p>The number to evaluate in a numeric condition expression.</p>
   * @public
   */
  Evaluate: RuleNumberToEvaluate | undefined;

  /**
   * <p>The operator for a numeric condition expression.</p>
   * @public
   */
  Operator: RuleNumberOperator | undefined;

  /**
   * <p>The value to evaluate in a numeric condition expression.</p>
   * @public
   */
  Value: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleStringEmailAttribute = {
  CC: "CC",
  FROM: "FROM",
  HELO: "HELO",
  MAIL_FROM: "MAIL_FROM",
  RECIPIENT: "RECIPIENT",
  SENDER: "SENDER",
  SUBJECT: "SUBJECT",
  TO: "TO",
} as const;

/**
 * @public
 */
export type RuleStringEmailAttribute = (typeof RuleStringEmailAttribute)[keyof typeof RuleStringEmailAttribute];

/**
 * <p>The string to evaluate in a string condition expression.</p>
 * @public
 */
export type RuleStringToEvaluate =
  | RuleStringToEvaluate.AttributeMember
  | RuleStringToEvaluate.MimeHeaderAttributeMember
  | RuleStringToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace RuleStringToEvaluate {
  /**
   * <p>The email attribute to evaluate in a string condition expression.</p>
   * @public
   */
  export interface AttributeMember {
    Attribute: RuleStringEmailAttribute;
    MimeHeaderAttribute?: never;
    $unknown?: never;
  }

  /**
   * <p>The email MIME X-Header attribute to evaluate in a string condition expression.</p>
   * @public
   */
  export interface MimeHeaderAttributeMember {
    Attribute?: never;
    MimeHeaderAttribute: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    MimeHeaderAttribute?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Attribute: (value: RuleStringEmailAttribute) => T;
    MimeHeaderAttribute: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RuleStringToEvaluate, visitor: Visitor<T>): T => {
    if (value.Attribute !== undefined) return visitor.Attribute(value.Attribute);
    if (value.MimeHeaderAttribute !== undefined) return visitor.MimeHeaderAttribute(value.MimeHeaderAttribute);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const RuleStringOperator = {
  CONTAINS: "CONTAINS",
  ENDS_WITH: "ENDS_WITH",
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
  STARTS_WITH: "STARTS_WITH",
} as const;

/**
 * @public
 */
export type RuleStringOperator = (typeof RuleStringOperator)[keyof typeof RuleStringOperator];

/**
 * <p>A string expression is evaluated against strings or substrings of the email.</p>
 * @public
 */
export interface RuleStringExpression {
  /**
   * <p>The string to evaluate in a string condition expression.</p>
   * @public
   */
  Evaluate: RuleStringToEvaluate | undefined;

  /**
   * <p>The matching operator for a string condition expression.</p>
   * @public
   */
  Operator: RuleStringOperator | undefined;

  /**
   * <p>The string(s) to be evaluated in a string condition expression. For all operators,
   *             except for NOT_EQUALS, if multiple values are given, the values are processed as an OR.
   *             That is, if any of the values match the email's string using the given operator, the
   *             condition is deemed to match. However, for NOT_EQUALS, the condition is only deemed to
   *             match if none of the given strings match the email's string.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleVerdictAttribute = {
  DKIM: "DKIM",
  SPF: "SPF",
} as const;

/**
 * @public
 */
export type RuleVerdictAttribute = (typeof RuleVerdictAttribute)[keyof typeof RuleVerdictAttribute];

/**
 * <p>The verdict to evaluate in a verdict condition expression.</p>
 * @public
 */
export type RuleVerdictToEvaluate =
  | RuleVerdictToEvaluate.AnalysisMember
  | RuleVerdictToEvaluate.AttributeMember
  | RuleVerdictToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace RuleVerdictToEvaluate {
  /**
   * <p>The email verdict attribute to evaluate in a string verdict expression.</p>
   * @public
   */
  export interface AttributeMember {
    Attribute: RuleVerdictAttribute;
    Analysis?: never;
    $unknown?: never;
  }

  /**
   * <p>The Add On ARN and its returned value to evaluate in a verdict condition
   *             expression.</p>
   * @public
   */
  export interface AnalysisMember {
    Attribute?: never;
    Analysis: Analysis;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    Analysis?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Attribute: (value: RuleVerdictAttribute) => T;
    Analysis: (value: Analysis) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RuleVerdictToEvaluate, visitor: Visitor<T>): T => {
    if (value.Attribute !== undefined) return visitor.Attribute(value.Attribute);
    if (value.Analysis !== undefined) return visitor.Analysis(value.Analysis);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const RuleVerdictOperator = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;

/**
 * @public
 */
export type RuleVerdictOperator = (typeof RuleVerdictOperator)[keyof typeof RuleVerdictOperator];

/**
 * @public
 * @enum
 */
export const RuleVerdict = {
  FAIL: "FAIL",
  GRAY: "GRAY",
  PASS: "PASS",
  PROCESSING_FAILED: "PROCESSING_FAILED",
} as const;

/**
 * @public
 */
export type RuleVerdict = (typeof RuleVerdict)[keyof typeof RuleVerdict];

/**
 * <p>A verdict expression is evaluated against verdicts of the email.</p>
 * @public
 */
export interface RuleVerdictExpression {
  /**
   * <p>The verdict to evaluate in a verdict condition expression.</p>
   * @public
   */
  Evaluate: RuleVerdictToEvaluate | undefined;

  /**
   * <p>The matching operator for a verdict condition expression.</p>
   * @public
   */
  Operator: RuleVerdictOperator | undefined;

  /**
   * <p>The values to match with the email's verdict using the given operator. For the EQUALS
   *             operator, if multiple values are given, the condition is deemed to match if any of the
   *             given verdicts match that of the email. For the NOT_EQUALS operator, if multiple values
   *             are given, the condition is deemed to match of none of the given verdicts match the
   *             verdict of the email.</p>
   * @public
   */
  Values: RuleVerdict[] | undefined;
}

/**
 * <p>The conditional expression used to evaluate an email for determining if a rule action
 *             should be taken.</p>
 * @public
 */
export type RuleCondition =
  | RuleCondition.BooleanExpressionMember
  | RuleCondition.DmarcExpressionMember
  | RuleCondition.IpExpressionMember
  | RuleCondition.NumberExpressionMember
  | RuleCondition.StringExpressionMember
  | RuleCondition.VerdictExpressionMember
  | RuleCondition.$UnknownMember;

/**
 * @public
 */
export namespace RuleCondition {
  /**
   * <p>The condition applies to a boolean expression passed in this field.</p>
   * @public
   */
  export interface BooleanExpressionMember {
    BooleanExpression: RuleBooleanExpression;
    StringExpression?: never;
    NumberExpression?: never;
    IpExpression?: never;
    VerdictExpression?: never;
    DmarcExpression?: never;
    $unknown?: never;
  }

  /**
   * <p>The condition applies to a string expression passed in this field.</p>
   * @public
   */
  export interface StringExpressionMember {
    BooleanExpression?: never;
    StringExpression: RuleStringExpression;
    NumberExpression?: never;
    IpExpression?: never;
    VerdictExpression?: never;
    DmarcExpression?: never;
    $unknown?: never;
  }

  /**
   * <p>The condition applies to a number expression passed in this field.</p>
   * @public
   */
  export interface NumberExpressionMember {
    BooleanExpression?: never;
    StringExpression?: never;
    NumberExpression: RuleNumberExpression;
    IpExpression?: never;
    VerdictExpression?: never;
    DmarcExpression?: never;
    $unknown?: never;
  }

  /**
   * <p>The condition applies to an IP address expression passed in this field.</p>
   * @public
   */
  export interface IpExpressionMember {
    BooleanExpression?: never;
    StringExpression?: never;
    NumberExpression?: never;
    IpExpression: RuleIpExpression;
    VerdictExpression?: never;
    DmarcExpression?: never;
    $unknown?: never;
  }

  /**
   * <p>The condition applies to a verdict expression passed in this field.</p>
   * @public
   */
  export interface VerdictExpressionMember {
    BooleanExpression?: never;
    StringExpression?: never;
    NumberExpression?: never;
    IpExpression?: never;
    VerdictExpression: RuleVerdictExpression;
    DmarcExpression?: never;
    $unknown?: never;
  }

  /**
   * <p>The condition applies to a DMARC policy expression passed in this field.</p>
   * @public
   */
  export interface DmarcExpressionMember {
    BooleanExpression?: never;
    StringExpression?: never;
    NumberExpression?: never;
    IpExpression?: never;
    VerdictExpression?: never;
    DmarcExpression: RuleDmarcExpression;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    BooleanExpression?: never;
    StringExpression?: never;
    NumberExpression?: never;
    IpExpression?: never;
    VerdictExpression?: never;
    DmarcExpression?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    BooleanExpression: (value: RuleBooleanExpression) => T;
    StringExpression: (value: RuleStringExpression) => T;
    NumberExpression: (value: RuleNumberExpression) => T;
    IpExpression: (value: RuleIpExpression) => T;
    VerdictExpression: (value: RuleVerdictExpression) => T;
    DmarcExpression: (value: RuleDmarcExpression) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RuleCondition, visitor: Visitor<T>): T => {
    if (value.BooleanExpression !== undefined) return visitor.BooleanExpression(value.BooleanExpression);
    if (value.StringExpression !== undefined) return visitor.StringExpression(value.StringExpression);
    if (value.NumberExpression !== undefined) return visitor.NumberExpression(value.NumberExpression);
    if (value.IpExpression !== undefined) return visitor.IpExpression(value.IpExpression);
    if (value.VerdictExpression !== undefined) return visitor.VerdictExpression(value.VerdictExpression);
    if (value.DmarcExpression !== undefined) return visitor.DmarcExpression(value.DmarcExpression);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A rule contains conditions, "unless conditions" and actions. For each
 *             envelope recipient of an email, if all conditions match and none of the "unless
 *             conditions" match, then all of the actions are executed sequentially. If no
 *             conditions are provided, the rule always applies and the actions are implicitly
 *             executed. If only "unless conditions" are provided, the rule applies if the
 *             email does not match the evaluation of the "unless conditions".</p>
 * @public
 */
export interface Rule {
  /**
   * <p>The user-friendly name of the rule.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The conditions of this rule. All conditions must match the email for the actions to be
   *             executed. An empty list of conditions means that all emails match, but are still subject
   *             to any "unless conditions"</p>
   * @public
   */
  Conditions?: RuleCondition[] | undefined;

  /**
   * <p>The "unless conditions" of this rule. None of the conditions can match the
   *             email for the actions to be executed. If any of these conditions do match the email,
   *             then the actions are not executed.</p>
   * @public
   */
  Unless?: RuleCondition[] | undefined;

  /**
   * <p>The list of actions to execute when the conditions match the incoming email, and none
   *             of the "unless conditions" match.</p>
   * @public
   */
  Actions: RuleAction[] | undefined;
}

/**
 * @public
 */
export interface CreateRuleSetRequest {
  /**
   * <p>A unique token that Amazon SES uses to recognize subsequent retries of the same
   *             request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A user-friendly name for the rule set.</p>
   * @public
   */
  RuleSetName: string | undefined;

  /**
   * <p>Conditional rules that are evaluated for determining actions on email.</p>
   * @public
   */
  Rules: Rule[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRuleSetResponse {
  /**
   * <p>The identifier of the created rule set.</p>
   * @public
   */
  RuleSetId: string | undefined;
}

/**
 * <p>The Add On ARN and its returned value that is evaluated in a policy statement's
 *             conditional expression to either deny or block the incoming email.</p>
 * @public
 */
export interface IngressAnalysis {
  /**
   * <p>The Amazon Resource Name (ARN) of an Add On.</p>
   * @public
   */
  Analyzer: string | undefined;

  /**
   * <p>The returned value from an Add On.</p>
   * @public
   */
  ResultField: string | undefined;
}

/**
 * <p>The union type representing the allowed types of operands for a boolean
 *             condition.</p>
 * @public
 */
export type IngressBooleanToEvaluate =
  | IngressBooleanToEvaluate.AnalysisMember
  | IngressBooleanToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace IngressBooleanToEvaluate {
  /**
   * <p>The structure type for a boolean condition stating the Add On ARN and its returned
   *             value.</p>
   * @public
   */
  export interface AnalysisMember {
    Analysis: IngressAnalysis;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Analysis?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Analysis: (value: IngressAnalysis) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: IngressBooleanToEvaluate, visitor: Visitor<T>): T => {
    if (value.Analysis !== undefined) return visitor.Analysis(value.Analysis);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const IngressBooleanOperator = {
  IS_FALSE: "IS_FALSE",
  IS_TRUE: "IS_TRUE",
} as const;

/**
 * @public
 */
export type IngressBooleanOperator = (typeof IngressBooleanOperator)[keyof typeof IngressBooleanOperator];

/**
 * <p>The structure for a boolean condition matching on the incoming mail.</p>
 * @public
 */
export interface IngressBooleanExpression {
  /**
   * <p>The operand on which to perform a boolean condition operation.</p>
   * @public
   */
  Evaluate: IngressBooleanToEvaluate | undefined;

  /**
   * <p>The matching operator for a boolean condition expression.</p>
   * @public
   */
  Operator: IngressBooleanOperator | undefined;
}

/**
 * @public
 * @enum
 */
export const IngressIpv4Attribute = {
  SENDER_IP: "SENDER_IP",
} as const;

/**
 * @public
 */
export type IngressIpv4Attribute = (typeof IngressIpv4Attribute)[keyof typeof IngressIpv4Attribute];

/**
 * <p>The structure for an IP based condition matching on the incoming mail.</p>
 * @public
 */
export type IngressIpToEvaluate = IngressIpToEvaluate.AttributeMember | IngressIpToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace IngressIpToEvaluate {
  /**
   * <p>An enum type representing the allowed attribute types for an IP condition.</p>
   * @public
   */
  export interface AttributeMember {
    Attribute: IngressIpv4Attribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Attribute: (value: IngressIpv4Attribute) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: IngressIpToEvaluate, visitor: Visitor<T>): T => {
    if (value.Attribute !== undefined) return visitor.Attribute(value.Attribute);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const IngressIpOperator = {
  CIDR_MATCHES: "CIDR_MATCHES",
  NOT_CIDR_MATCHES: "NOT_CIDR_MATCHES",
} as const;

/**
 * @public
 */
export type IngressIpOperator = (typeof IngressIpOperator)[keyof typeof IngressIpOperator];

/**
 * <p>The union type representing the allowed types for the left hand side of an IP
 *             condition.</p>
 * @public
 */
export interface IngressIpv4Expression {
  /**
   * <p>The left hand side argument of an IP condition expression.</p>
   * @public
   */
  Evaluate: IngressIpToEvaluate | undefined;

  /**
   * <p>The matching operator for an IP condition expression.</p>
   * @public
   */
  Operator: IngressIpOperator | undefined;

  /**
   * <p>The right hand side argument of an IP condition expression.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const IngressStringEmailAttribute = {
  RECIPIENT: "RECIPIENT",
} as const;

/**
 * @public
 */
export type IngressStringEmailAttribute =
  (typeof IngressStringEmailAttribute)[keyof typeof IngressStringEmailAttribute];

/**
 * <p>The union type representing the allowed types for the left hand side of a string
 *             condition.</p>
 * @public
 */
export type IngressStringToEvaluate = IngressStringToEvaluate.AttributeMember | IngressStringToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace IngressStringToEvaluate {
  /**
   * <p>The enum type representing the allowed attribute types for a string condition.</p>
   * @public
   */
  export interface AttributeMember {
    Attribute: IngressStringEmailAttribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Attribute: (value: IngressStringEmailAttribute) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: IngressStringToEvaluate, visitor: Visitor<T>): T => {
    if (value.Attribute !== undefined) return visitor.Attribute(value.Attribute);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const IngressStringOperator = {
  CONTAINS: "CONTAINS",
  ENDS_WITH: "ENDS_WITH",
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
  STARTS_WITH: "STARTS_WITH",
} as const;

/**
 * @public
 */
export type IngressStringOperator = (typeof IngressStringOperator)[keyof typeof IngressStringOperator];

/**
 * <p>The structure for a string based condition matching on the incoming mail.</p>
 * @public
 */
export interface IngressStringExpression {
  /**
   * <p>The left hand side argument of a string condition expression.</p>
   * @public
   */
  Evaluate: IngressStringToEvaluate | undefined;

  /**
   * <p>The matching operator for a string condition expression.</p>
   * @public
   */
  Operator: IngressStringOperator | undefined;

  /**
   * <p>The right hand side argument of a string condition expression.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const IngressTlsAttribute = {
  TLS_PROTOCOL: "TLS_PROTOCOL",
} as const;

/**
 * @public
 */
export type IngressTlsAttribute = (typeof IngressTlsAttribute)[keyof typeof IngressTlsAttribute];

/**
 * <p>The union type representing the allowed types for the left hand side of a TLS
 *             condition.</p>
 * @public
 */
export type IngressTlsProtocolToEvaluate =
  | IngressTlsProtocolToEvaluate.AttributeMember
  | IngressTlsProtocolToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace IngressTlsProtocolToEvaluate {
  /**
   * <p>The enum type representing the allowed attribute types for the TLS condition.</p>
   * @public
   */
  export interface AttributeMember {
    Attribute: IngressTlsAttribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Attribute: (value: IngressTlsAttribute) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: IngressTlsProtocolToEvaluate, visitor: Visitor<T>): T => {
    if (value.Attribute !== undefined) return visitor.Attribute(value.Attribute);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const IngressTlsProtocolOperator = {
  IS: "IS",
  MINIMUM_TLS_VERSION: "MINIMUM_TLS_VERSION",
} as const;

/**
 * @public
 */
export type IngressTlsProtocolOperator = (typeof IngressTlsProtocolOperator)[keyof typeof IngressTlsProtocolOperator];

/**
 * @public
 * @enum
 */
export const IngressTlsProtocolAttribute = {
  TLS1_2: "TLS1_2",
  TLS1_3: "TLS1_3",
} as const;

/**
 * @public
 */
export type IngressTlsProtocolAttribute =
  (typeof IngressTlsProtocolAttribute)[keyof typeof IngressTlsProtocolAttribute];

/**
 * <p>The structure for a TLS related condition matching on the incoming mail.</p>
 * @public
 */
export interface IngressTlsProtocolExpression {
  /**
   * <p>The left hand side argument of a TLS condition expression.</p>
   * @public
   */
  Evaluate: IngressTlsProtocolToEvaluate | undefined;

  /**
   * <p>The matching operator for a TLS condition expression.</p>
   * @public
   */
  Operator: IngressTlsProtocolOperator | undefined;

  /**
   * <p>The right hand side argument of a TLS condition expression.</p>
   * @public
   */
  Value: IngressTlsProtocolAttribute | undefined;
}

/**
 * <p>The email traffic filtering conditions which are contained in a traffic policy
 *             resource.</p>
 * @public
 */
export type PolicyCondition =
  | PolicyCondition.BooleanExpressionMember
  | PolicyCondition.IpExpressionMember
  | PolicyCondition.StringExpressionMember
  | PolicyCondition.TlsExpressionMember
  | PolicyCondition.$UnknownMember;

/**
 * @public
 */
export namespace PolicyCondition {
  /**
   * <p>This represents a string based condition matching on the incoming mail. It performs
   *             the string operation configured in 'Operator' and evaluates the 'Protocol' object
   *             against the 'Value'.</p>
   * @public
   */
  export interface StringExpressionMember {
    StringExpression: IngressStringExpression;
    IpExpression?: never;
    TlsExpression?: never;
    BooleanExpression?: never;
    $unknown?: never;
  }

  /**
   * <p>This represents an IP based condition matching on the incoming mail. It performs the
   *             operation configured in 'Operator' and evaluates the 'Protocol' object against the
   *             'Value'.</p>
   * @public
   */
  export interface IpExpressionMember {
    StringExpression?: never;
    IpExpression: IngressIpv4Expression;
    TlsExpression?: never;
    BooleanExpression?: never;
    $unknown?: never;
  }

  /**
   * <p>This represents a TLS based condition matching on the incoming mail. It performs the
   *             operation configured in 'Operator' and evaluates the 'Protocol' object against the
   *             'Value'.</p>
   * @public
   */
  export interface TlsExpressionMember {
    StringExpression?: never;
    IpExpression?: never;
    TlsExpression: IngressTlsProtocolExpression;
    BooleanExpression?: never;
    $unknown?: never;
  }

  /**
   * <p>This represents a boolean type condition matching on the incoming mail. It performs
   *             the boolean operation configured in 'Operator' and evaluates the 'Protocol' object
   *             against the 'Value'.</p>
   * @public
   */
  export interface BooleanExpressionMember {
    StringExpression?: never;
    IpExpression?: never;
    TlsExpression?: never;
    BooleanExpression: IngressBooleanExpression;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringExpression?: never;
    IpExpression?: never;
    TlsExpression?: never;
    BooleanExpression?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    StringExpression: (value: IngressStringExpression) => T;
    IpExpression: (value: IngressIpv4Expression) => T;
    TlsExpression: (value: IngressTlsProtocolExpression) => T;
    BooleanExpression: (value: IngressBooleanExpression) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PolicyCondition, visitor: Visitor<T>): T => {
    if (value.StringExpression !== undefined) return visitor.StringExpression(value.StringExpression);
    if (value.IpExpression !== undefined) return visitor.IpExpression(value.IpExpression);
    if (value.TlsExpression !== undefined) return visitor.TlsExpression(value.TlsExpression);
    if (value.BooleanExpression !== undefined) return visitor.BooleanExpression(value.BooleanExpression);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The structure containing traffic policy conditions and actions.</p>
 * @public
 */
export interface PolicyStatement {
  /**
   * <p>The list of conditions to apply to incoming messages for filtering email
   *             traffic.</p>
   * @public
   */
  Conditions: PolicyCondition[] | undefined;

  /**
   * <p>The action that informs a traffic policy resource to either allow or block the email
   *             if it matches a condition in the policy statement.</p>
   * @public
   */
  Action: AcceptAction | undefined;
}

/**
 * @public
 */
export interface CreateTrafficPolicyRequest {
  /**
   * <p>A unique token that Amazon SES uses to recognize subsequent retries of the same
   *             request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A user-friendly name for the traffic policy resource.</p>
   * @public
   */
  TrafficPolicyName: string | undefined;

  /**
   * <p>Conditional statements for filtering email traffic.</p>
   * @public
   */
  PolicyStatements: PolicyStatement[] | undefined;

  /**
   * <p>Default action instructs the traﬃc policy to either Allow or Deny (block) messages that fall outside of (or not addressed by) the conditions of your policy statements</p>
   * @public
   */
  DefaultAction: AcceptAction | undefined;

  /**
   * <p>The maximum message size in bytes of email which is allowed in by this traffic
   *             policy—anything larger will be blocked.</p>
   * @public
   */
  MaxMessageSizeBytes?: number | undefined;

  /**
   * <p>The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrafficPolicyResponse {
  /**
   * <p>The identifier of the traffic policy resource.</p>
   * @public
   */
  TrafficPolicyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIngressPointRequest {
  /**
   * <p>The identifier of the ingress endpoint resource that you want to delete.</p>
   * @public
   */
  IngressPointId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIngressPointResponse {}

/**
 * @public
 */
export interface DeleteRelayRequest {
  /**
   * <p>The unique relay identifier.</p>
   * @public
   */
  RelayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRelayResponse {}

/**
 * @public
 */
export interface DeleteRuleSetRequest {
  /**
   * <p>The identifier of an existing rule set resource to delete.</p>
   * @public
   */
  RuleSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleSetResponse {}

/**
 * @public
 */
export interface DeleteTrafficPolicyRequest {
  /**
   * <p>The identifier of the traffic policy that you want to delete.</p>
   * @public
   */
  TrafficPolicyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficPolicyResponse {}

/**
 * <p>The SMTP envelope information of the email.</p>
 * @public
 */
export interface Envelope {
  /**
   * <p>The HELO used by the host from which the email was received.</p>
   * @public
   */
  Helo?: string | undefined;

  /**
   * <p>The RCPT FROM given by the host from which the email was received.</p>
   * @public
   */
  From?: string | undefined;

  /**
   * <p>All SMTP TO entries given by the host from which the email was received.</p>
   * @public
   */
  To?: string[] | undefined;
}

/**
 * <p>The configuration for exporting email data to an Amazon S3 bucket.</p>
 * @public
 */
export interface S3ExportDestinationConfiguration {
  /**
   * <p>The S3 location to deliver the exported email data.</p>
   * @public
   */
  S3Location?: string | undefined;
}

/**
 * <p>The destination configuration for delivering exported email data.</p>
 * @public
 */
export type ExportDestinationConfiguration =
  | ExportDestinationConfiguration.S3Member
  | ExportDestinationConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ExportDestinationConfiguration {
  /**
   * <p>Configuration for delivering to an Amazon S3 bucket.</p>
   * @public
   */
  export interface S3Member {
    S3: S3ExportDestinationConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S3?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    S3: (value: S3ExportDestinationConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ExportDestinationConfiguration, visitor: Visitor<T>): T => {
    if (value.S3 !== undefined) return visitor.S3(value.S3);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ExportState = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PREPROCESSING: "PREPROCESSING",
  PROCESSING: "PROCESSING",
  QUEUED: "QUEUED",
} as const;

/**
 * @public
 */
export type ExportState = (typeof ExportState)[keyof typeof ExportState];

/**
 * <p>The current status of an archive export job.</p>
 * @public
 */
export interface ExportStatus {
  /**
   * <p>The timestamp of when the export job was submitted.</p>
   * @public
   */
  SubmissionTimestamp?: Date | undefined;

  /**
   * <p>The timestamp of when the export job completed (if finished).</p>
   * @public
   */
  CompletionTimestamp?: Date | undefined;

  /**
   * <p>The current state of the export job.</p>
   * @public
   */
  State?: ExportState | undefined;

  /**
   * <p>An error message if the export job failed.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>Summary statuses of an archive export job.</p>
 * @public
 */
export interface ExportSummary {
  /**
   * <p>The unique identifier of the export job.</p>
   * @public
   */
  ExportId?: string | undefined;

  /**
   * <p>The current status of the export job.</p>
   * @public
   */
  Status?: ExportStatus | undefined;
}

/**
 * <p>The request to retrieve details of a specific archive export job.</p>
 * @public
 */
export interface GetArchiveExportRequest {
  /**
   * <p>The identifier of the export job to get details for.</p>
   * @public
   */
  ExportId: string | undefined;
}

/**
 * <p>The response containing details of the specified archive export job.</p>
 * @public
 */
export interface GetArchiveExportResponse {
  /**
   * <p>The identifier of the archive the email export was performed from.</p>
   * @public
   */
  ArchiveId?: string | undefined;

  /**
   * <p>The criteria used to filter emails included in the export.</p>
   * @public
   */
  Filters?: ArchiveFilters | undefined;

  /**
   * <p>The start of the timestamp range the exported emails cover.</p>
   * @public
   */
  FromTimestamp?: Date | undefined;

  /**
   * <p>The end of the date range the exported emails cover.</p>
   * @public
   */
  ToTimestamp?: Date | undefined;

  /**
   * <p>The maximum number of email items included in the export.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Where the exported emails are being delivered.</p>
   * @public
   */
  ExportDestinationConfiguration?: ExportDestinationConfiguration | undefined;

  /**
   * <p>The current status of the export job.</p>
   * @public
   */
  Status?: ExportStatus | undefined;
}

/**
 * <p>The request to get details of a specific email message stored in an archive.</p>
 * @public
 */
export interface GetArchiveMessageRequest {
  /**
   * <p>The unique identifier of the archived email message.</p>
   * @public
   */
  ArchivedMessageId: string | undefined;
}

/**
 * <p>The metadata about the email.</p>
 * @public
 */
export interface Metadata {
  /**
   * <p>The timestamp of when the email was received.</p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>The ID of the ingress endpoint through which the email was received.</p>
   * @public
   */
  IngressPointId?: string | undefined;

  /**
   * <p>The ID of the traffic policy that was in effect when the email was received.</p>
   * @public
   */
  TrafficPolicyId?: string | undefined;

  /**
   * <p>The ID of the rule set that processed the email.</p>
   * @public
   */
  RuleSetId?: string | undefined;

  /**
   * <p>The name of the host from which the email was received.</p>
   * @public
   */
  SenderHostname?: string | undefined;

  /**
   * <p>The IP address of the host from which the email was received.</p>
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * <p>The TLS cipher suite used to communicate with the host from which the email was received.</p>
   * @public
   */
  TlsCipherSuite?: string | undefined;

  /**
   * <p>The TLS protocol used to communicate with the host from which the email was received.</p>
   * @public
   */
  TlsProtocol?: string | undefined;
}

/**
 * <p>The response containing details about the requested archived email message.</p>
 * @public
 */
export interface GetArchiveMessageResponse {
  /**
   * <p>A pre-signed URL to temporarily download the full message content.</p>
   * @public
   */
  MessageDownloadLink?: string | undefined;

  /**
   * <p>The metadata about the email.</p>
   * @public
   */
  Metadata?: Metadata | undefined;

  /**
   * <p>The SMTP envelope information of the email.</p>
   * @public
   */
  Envelope?: Envelope | undefined;
}

/**
 * <p>The request to get the textual content of a specific email message stored in an archive.</p>
 * @public
 */
export interface GetArchiveMessageContentRequest {
  /**
   * <p>The unique identifier of the archived email message.</p>
   * @public
   */
  ArchivedMessageId: string | undefined;
}

/**
 * <p>The textual body content of an email message.</p>
 * @public
 */
export interface MessageBody {
  /**
   * <p>The plain text body content of the message.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The HTML body content of the message.</p>
   * @public
   */
  Html?: string | undefined;

  /**
   * <p>A flag indicating if the email was malformed.</p>
   * @public
   */
  MessageMalformed?: boolean | undefined;
}

/**
 * <p>The response containing the textual content of the requested archived email message.</p>
 * @public
 */
export interface GetArchiveMessageContentResponse {
  /**
   * <p>The textual body content of the email message.</p>
   * @public
   */
  Body?: MessageBody | undefined;
}

/**
 * <p>The request to retrieve details of a specific archive search job.</p>
 * @public
 */
export interface GetArchiveSearchRequest {
  /**
   * <p>The identifier of the search job to get details for.</p>
   * @public
   */
  SearchId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SearchState = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type SearchState = (typeof SearchState)[keyof typeof SearchState];

/**
 * <p>The current status of an archive search job.</p>
 * @public
 */
export interface SearchStatus {
  /**
   * <p>The timestamp of when the search was submitted.</p>
   * @public
   */
  SubmissionTimestamp?: Date | undefined;

  /**
   * <p>The timestamp of when the search completed (if finished).</p>
   * @public
   */
  CompletionTimestamp?: Date | undefined;

  /**
   * <p>The current state of the search job.</p>
   * @public
   */
  State?: SearchState | undefined;

  /**
   * <p>An error message if the search failed.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>The response containing details of the specified archive search job.</p>
 * @public
 */
export interface GetArchiveSearchResponse {
  /**
   * <p>The identifier of the archive the email search was performed in.</p>
   * @public
   */
  ArchiveId?: string | undefined;

  /**
   * <p>The criteria used to filter emails included in the search.</p>
   * @public
   */
  Filters?: ArchiveFilters | undefined;

  /**
   * <p>The start timestamp of the range the searched emails cover.</p>
   * @public
   */
  FromTimestamp?: Date | undefined;

  /**
   * <p>The end timestamp of the range the searched emails cover.</p>
   * @public
   */
  ToTimestamp?: Date | undefined;

  /**
   * <p>The maximum number of search results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The current status of the search job.</p>
   * @public
   */
  Status?: SearchStatus | undefined;
}

/**
 * <p>The request to retrieve results from a completed archive search job.</p>
 * @public
 */
export interface GetArchiveSearchResultsRequest {
  /**
   * <p>The identifier of the completed search job.</p>
   * @public
   */
  SearchId: string | undefined;
}

/**
 * <p>A result row containing metadata for an archived email message.</p>
 * @public
 */
export interface Row {
  /**
   * <p>The unique identifier of the archived message.</p>
   * @public
   */
  ArchivedMessageId?: string | undefined;

  /**
   * <p>The timestamp of when the email was received.</p>
   * @public
   */
  ReceivedTimestamp?: Date | undefined;

  /**
   * <p>The date the email was sent.</p>
   * @public
   */
  Date?: string | undefined;

  /**
   * <p>The email addresses in the To header.</p>
   * @public
   */
  To?: string | undefined;

  /**
   * <p>The email address of the sender.</p>
   * @public
   */
  From?: string | undefined;

  /**
   * <p>The email addresses in the CC header.</p>
   * @public
   */
  Cc?: string | undefined;

  /**
   * <p>The subject header value of the email.</p>
   * @public
   */
  Subject?: string | undefined;

  /**
   * <p>The unique message ID of the email.</p>
   * @public
   */
  MessageId?: string | undefined;

  /**
   * <p>A flag indicating if the email has attachments.</p>
   * @public
   */
  HasAttachments?: boolean | undefined;

  /**
   * <p>The received headers from the email delivery path.</p>
   * @public
   */
  ReceivedHeaders?: string[] | undefined;

  /**
   * <p>The email message ID this is a reply to.</p>
   * @public
   */
  InReplyTo?: string | undefined;

  /**
   * <p>The user agent that sent the email.</p>
   * @public
   */
  XMailer?: string | undefined;

  /**
   * <p>The original user agent that sent the email.</p>
   * @public
   */
  XOriginalMailer?: string | undefined;

  /**
   * <p>The priority level of the email.</p>
   * @public
   */
  XPriority?: string | undefined;

  /**
   * <p>The ID of the ingress endpoint through which the email was received.</p>
   * @public
   */
  IngressPointId?: string | undefined;

  /**
   * <p>The name of the host from which the email was received.</p>
   * @public
   */
  SenderHostname?: string | undefined;

  /**
   * <p>The IP address of the host from which the email was received.</p>
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * <p>The SMTP envelope information of the email.</p>
   * @public
   */
  Envelope?: Envelope | undefined;
}

/**
 * <p>The response containing search results from a completed archive search.</p>
 * @public
 */
export interface GetArchiveSearchResultsResponse {
  /**
   * <p>The list of email result objects matching the search criteria.</p>
   * @public
   */
  Rows?: Row[] | undefined;
}

/**
 * @public
 */
export interface GetIngressPointRequest {
  /**
   * <p>The identifier of an ingress endpoint.</p>
   * @public
   */
  IngressPointId: string | undefined;
}

/**
 * <p>The password configuration of the ingress endpoint resource.</p>
 * @public
 */
export interface IngressPointPasswordConfiguration {
  /**
   * <p>The current password expiry timestamp of the ingress endpoint resource.</p>
   * @public
   */
  SmtpPasswordVersion?: string | undefined;

  /**
   * <p>The previous password version of the ingress endpoint resource.</p>
   * @public
   */
  PreviousSmtpPasswordVersion?: string | undefined;

  /**
   * <p>The previous password expiry timestamp of the ingress endpoint resource.</p>
   * @public
   */
  PreviousSmtpPasswordExpiryTimestamp?: Date | undefined;
}

/**
 * <p>The authentication configuration for the ingress endpoint resource.</p>
 * @public
 */
export interface IngressPointAuthConfiguration {
  /**
   * <p>The ingress endpoint password configuration for the ingress endpoint resource.</p>
   * @public
   */
  IngressPointPasswordConfiguration?: IngressPointPasswordConfiguration | undefined;

  /**
   * <p>The ingress endpoint SecretsManager::Secret ARN configuration for the ingress endpoint
   *             resource.</p>
   * @public
   */
  SecretArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IngressPointStatus = {
  ACTIVE: "ACTIVE",
  CLOSED: "CLOSED",
  DEPROVISIONING: "DEPROVISIONING",
  FAILED: "FAILED",
  PROVISIONING: "PROVISIONING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type IngressPointStatus = (typeof IngressPointStatus)[keyof typeof IngressPointStatus];

/**
 * @public
 */
export interface GetIngressPointResponse {
  /**
   * <p>The identifier of an ingress endpoint resource.</p>
   * @public
   */
  IngressPointId: string | undefined;

  /**
   * <p>A user friendly name for the ingress endpoint.</p>
   * @public
   */
  IngressPointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ingress endpoint resource.</p>
   * @public
   */
  IngressPointArn?: string | undefined;

  /**
   * <p>The status of the ingress endpoint resource.</p>
   * @public
   */
  Status?: IngressPointStatus | undefined;

  /**
   * <p>The type of ingress endpoint.</p>
   * @public
   */
  Type?: IngressPointType | undefined;

  /**
   * <p>
   *             The DNS A Record that identifies your ingress endpoint. Configure your DNS Mail Exchange (MX) record with this value to route emails to Mail Manager.
   *         </p>
   * @public
   */
  ARecord?: string | undefined;

  /**
   * <p>The identifier of a rule set resource associated with the ingress endpoint.</p>
   * @public
   */
  RuleSetId?: string | undefined;

  /**
   * <p>The identifier of the traffic policy resource associated with the ingress
   *             endpoint.</p>
   * @public
   */
  TrafficPolicyId?: string | undefined;

  /**
   * <p>The authentication configuration of the ingress endpoint resource.</p>
   * @public
   */
  IngressPointAuthConfiguration?: IngressPointAuthConfiguration | undefined;

  /**
   * <p>The timestamp of when the ingress endpoint was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp of when the ingress endpoint was last updated.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetRelayRequest {
  /**
   * <p>A unique relay identifier.</p>
   * @public
   */
  RelayId: string | undefined;
}

/**
 * @public
 */
export interface GetRelayResponse {
  /**
   * <p>The unique relay identifier.</p>
   * @public
   */
  RelayId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the relay.</p>
   * @public
   */
  RelayArn?: string | undefined;

  /**
   * <p>The unique name of the relay.</p>
   * @public
   */
  RelayName?: string | undefined;

  /**
   * <p>The destination relay server address.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>The destination relay server port.</p>
   * @public
   */
  ServerPort?: number | undefined;

  /**
   * <p>The authentication attribute—contains the secret ARN where the customer relay
   *             server credentials are stored. </p>
   * @public
   */
  Authentication?: RelayAuthentication | undefined;

  /**
   * <p>The timestamp of when the relay was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp of when relay was last updated.</p>
   * @public
   */
  LastModifiedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetRuleSetRequest {
  /**
   * <p>The identifier of an existing rule set to be retrieved.</p>
   * @public
   */
  RuleSetId: string | undefined;
}

/**
 * @public
 */
export interface GetRuleSetResponse {
  /**
   * <p>The identifier of the rule set resource.</p>
   * @public
   */
  RuleSetId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule set resource.</p>
   * @public
   */
  RuleSetArn: string | undefined;

  /**
   * <p>A user-friendly name for the rule set resource.</p>
   * @public
   */
  RuleSetName: string | undefined;

  /**
   * <p>The date of when then rule set was created.</p>
   * @public
   */
  CreatedDate: Date | undefined;

  /**
   * <p>The date of when the rule set was last modified.</p>
   * @public
   */
  LastModificationDate: Date | undefined;

  /**
   * <p>The rules contained in the rule set.</p>
   * @public
   */
  Rules: Rule[] | undefined;
}

/**
 * @public
 */
export interface GetTrafficPolicyRequest {
  /**
   * <p>The identifier of the traffic policy resource.</p>
   * @public
   */
  TrafficPolicyId: string | undefined;
}

/**
 * @public
 */
export interface GetTrafficPolicyResponse {
  /**
   * <p>A user-friendly name for the traffic policy resource.</p>
   * @public
   */
  TrafficPolicyName: string | undefined;

  /**
   * <p>The identifier of the traffic policy resource.</p>
   * @public
   */
  TrafficPolicyId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic policy resource.</p>
   * @public
   */
  TrafficPolicyArn?: string | undefined;

  /**
   * <p>The list of conditions which are in the traffic policy resource.</p>
   * @public
   */
  PolicyStatements?: PolicyStatement[] | undefined;

  /**
   * <p>The maximum message size in bytes of email which is allowed in by this traffic
   *             policy—anything larger will be blocked.</p>
   * @public
   */
  MaxMessageSizeBytes?: number | undefined;

  /**
   * <p>The default action of the traffic policy.</p>
   * @public
   */
  DefaultAction?: AcceptAction | undefined;

  /**
   * <p>The timestamp of when the traffic policy was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp of when the traffic policy was last updated.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * <p>The structure of an ingress endpoint resource.</p>
 * @public
 */
export interface IngressPoint {
  /**
   * <p>A user friendly name for the ingress endpoint resource.</p>
   * @public
   */
  IngressPointName: string | undefined;

  /**
   * <p>The identifier of the ingress endpoint resource.</p>
   * @public
   */
  IngressPointId: string | undefined;

  /**
   * <p>The status of the ingress endpoint resource.</p>
   * @public
   */
  Status: IngressPointStatus | undefined;

  /**
   * <p>The type of ingress endpoint resource.</p>
   * @public
   */
  Type: IngressPointType | undefined;

  /**
   * <p>
   *             The DNS A Record that identifies your ingress endpoint. Configure your DNS Mail Exchange (MX) record with this value to route emails to Mail Manager.
   *         </p>
   * @public
   */
  ARecord?: string | undefined;
}

/**
 * @public
 */
export interface ListIngressPointsRequest {
  /**
   * <p>The maximum number of ingress endpoint resources that are returned per call. You can
   *             use NextToken to obtain further ingress endpoints.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIngressPointsResponse {
  /**
   * <p>The list of ingress endpoints.</p>
   * @public
   */
  IngressPoints?: IngressPoint[] | undefined;

  /**
   * <p>If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IngressPointStatusToUpdate = {
  ACTIVE: "ACTIVE",
  CLOSED: "CLOSED",
} as const;

/**
 * @public
 */
export type IngressPointStatusToUpdate = (typeof IngressPointStatusToUpdate)[keyof typeof IngressPointStatusToUpdate];

/**
 * @public
 */
export interface UpdateIngressPointRequest {
  /**
   * <p>The identifier for the ingress endpoint you want to update.</p>
   * @public
   */
  IngressPointId: string | undefined;

  /**
   * <p>A user friendly name for the ingress endpoint resource.</p>
   * @public
   */
  IngressPointName?: string | undefined;

  /**
   * <p>The update status of an ingress endpoint.</p>
   * @public
   */
  StatusToUpdate?: IngressPointStatusToUpdate | undefined;

  /**
   * <p>The identifier of an existing rule set that you attach to an ingress endpoint
   *             resource.</p>
   * @public
   */
  RuleSetId?: string | undefined;

  /**
   * <p>The identifier of an existing traffic policy that you attach to an ingress endpoint
   *             resource.</p>
   * @public
   */
  TrafficPolicyId?: string | undefined;

  /**
   * <p>If you choose an Authenticated ingress endpoint, you must configure either an SMTP password or a secret
   *             ARN.</p>
   * @public
   */
  IngressPointConfiguration?: IngressPointConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateIngressPointResponse {}

/**
 * <p>The request to list archive export jobs in your account.</p>
 * @public
 */
export interface ListArchiveExportsRequest {
  /**
   * <p>The identifier of the archive.</p>
   * @public
   */
  ArchiveId: string | undefined;

  /**
   * <p>If NextToken is returned, there are more results available. The value of NextToken is a unique pagination
   *             token for each page. Make the call again using the returned token to retrieve the next page.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of archive export jobs that are returned per call. You can use NextToken to obtain
   *             further pages of archives.
   *         </p>
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * <p>The response containing a list of archive export jobs and their statuses.</p>
 * @public
 */
export interface ListArchiveExportsResponse {
  /**
   * <p>The list of export job identifiers and statuses.</p>
   * @public
   */
  Exports?: ExportSummary[] | undefined;

  /**
   * <p>If present, use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The request to list archive search jobs in your account.</p>
 * @public
 */
export interface ListArchiveSearchesRequest {
  /**
   * <p>The identifier of the archive.</p>
   * @public
   */
  ArchiveId: string | undefined;

  /**
   * <p>If NextToken is returned, there are more results available. The value of NextToken is a unique pagination
   *             token for each page. Make the call again using the returned token to retrieve the next page.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of archive search jobs that are returned per call. You can use NextToken to obtain
   *             further pages of archives.
   *         </p>
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * <p>Summary details of an archive search job.</p>
 * @public
 */
export interface SearchSummary {
  /**
   * <p>The unique identifier of the search job.</p>
   * @public
   */
  SearchId?: string | undefined;

  /**
   * <p>The current status of the search job.</p>
   * @public
   */
  Status?: SearchStatus | undefined;
}

/**
 * <p>The response containing a list of archive search jobs and their statuses.</p>
 * @public
 */
export interface ListArchiveSearchesResponse {
  /**
   * <p>The list of search job identifiers and statuses.</p>
   * @public
   */
  Searches?: SearchSummary[] | undefined;

  /**
   * <p>If present, use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRelaysRequest {
  /**
   * <p>The number of relays to be returned in one request.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The relay resource that can be used as a rule to relay receiving emails to the destination
 *             relay server.</p>
 * @public
 */
export interface Relay {
  /**
   * <p>The unique relay identifier.</p>
   * @public
   */
  RelayId?: string | undefined;

  /**
   * <p>The unique relay name.</p>
   * @public
   */
  RelayName?: string | undefined;

  /**
   * <p>The timestamp of when the relay was last modified.</p>
   * @public
   */
  LastModifiedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListRelaysResponse {
  /**
   * <p>The list of returned relays.</p>
   * @public
   */
  Relays: Relay[] | undefined;

  /**
   * <p>If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRuleSetsRequest {
  /**
   * <p>If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of rule set resources that are returned per call. You can use
   *             NextToken to obtain further rule sets.</p>
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * <p>A rule set contains a list of rules that are evaluated in order. Each rule is
 *             evaluated sequentially for each email.</p>
 * @public
 */
export interface RuleSet {
  /**
   * <p>The identifier of the rule set.</p>
   * @public
   */
  RuleSetId?: string | undefined;

  /**
   * <p>A user-friendly name for the rule set.</p>
   * @public
   */
  RuleSetName?: string | undefined;

  /**
   * <p>The last modification date of the rule set.</p>
   * @public
   */
  LastModificationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListRuleSetsResponse {
  /**
   * <p>The list of rule sets.</p>
   * @public
   */
  RuleSets: RuleSet[] | undefined;

  /**
   * <p>If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to retrieve tags from.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTrafficPoliciesRequest {
  /**
   * <p>The maximum number of traffic policy resources that are returned per call. You can use
   *             NextToken to obtain further traffic policies.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The structure of a traffic policy resource which is a container for policy
 *             statements.</p>
 * @public
 */
export interface TrafficPolicy {
  /**
   * <p>A user-friendly name of the traffic policy resource.</p>
   * @public
   */
  TrafficPolicyName: string | undefined;

  /**
   * <p>The identifier of the traffic policy resource.</p>
   * @public
   */
  TrafficPolicyId: string | undefined;

  /**
   * <p>Default action instructs the traﬃc policy to either Allow or Deny (block) messages that fall outside of (or not addressed by) the conditions of your policy statements</p>
   * @public
   */
  DefaultAction: AcceptAction | undefined;
}

/**
 * @public
 */
export interface ListTrafficPoliciesResponse {
  /**
   * <p>The list of traffic policies.</p>
   * @public
   */
  TrafficPolicies?: TrafficPolicy[] | undefined;

  /**
   * <p>If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRelayRequest {
  /**
   * <p>The unique relay identifier.</p>
   * @public
   */
  RelayId: string | undefined;

  /**
   * <p>The name of the relay resource.</p>
   * @public
   */
  RelayName?: string | undefined;

  /**
   * <p>The destination relay server address.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>The destination relay server port.</p>
   * @public
   */
  ServerPort?: number | undefined;

  /**
   * <p>Authentication for the relay destination server—specify the secretARN where
   *             the SMTP credentials are stored.</p>
   * @public
   */
  Authentication?: RelayAuthentication | undefined;
}

/**
 * @public
 */
export interface UpdateRelayResponse {}

/**
 * @public
 */
export interface UpdateRuleSetRequest {
  /**
   * <p>The identifier of a rule set you want to update.</p>
   * @public
   */
  RuleSetId: string | undefined;

  /**
   * <p>A user-friendly name for the rule set resource.</p>
   * @public
   */
  RuleSetName?: string | undefined;

  /**
   * <p>A new set of rules to replace the current rules of the rule set—these rules will
   *             override all the rules of the rule set.</p>
   * @public
   */
  Rules?: Rule[] | undefined;
}

/**
 * @public
 */
export interface UpdateRuleSetResponse {}

/**
 * <p>The request to initiate an export of emails from an archive.</p>
 * @public
 */
export interface StartArchiveExportRequest {
  /**
   * <p>The identifier of the archive to export emails from.</p>
   * @public
   */
  ArchiveId: string | undefined;

  /**
   * <p>Criteria to filter which emails are included in the export.</p>
   * @public
   */
  Filters?: ArchiveFilters | undefined;

  /**
   * <p>The start of the timestamp range to include emails from.</p>
   * @public
   */
  FromTimestamp: Date | undefined;

  /**
   * <p>The end of the timestamp range to include emails from.</p>
   * @public
   */
  ToTimestamp: Date | undefined;

  /**
   * <p>The maximum number of email items to include in the export.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Details on where to deliver the exported email data.</p>
   * @public
   */
  ExportDestinationConfiguration: ExportDestinationConfiguration | undefined;

  /**
   * <p>Whether to include message metadata as JSON files in the export.</p>
   * @public
   */
  IncludeMetadata?: boolean | undefined;
}

/**
 * <p>The response from initiating an archive export.</p>
 * @public
 */
export interface StartArchiveExportResponse {
  /**
   * <p>The unique identifier for the initiated export job.</p>
   * @public
   */
  ExportId?: string | undefined;
}

/**
 * <p>The request to initiate a search across emails in an archive.</p>
 * @public
 */
export interface StartArchiveSearchRequest {
  /**
   * <p>The identifier of the archive to search emails in.</p>
   * @public
   */
  ArchiveId: string | undefined;

  /**
   * <p>Criteria to filter which emails are included in the search results.</p>
   * @public
   */
  Filters?: ArchiveFilters | undefined;

  /**
   * <p>The start timestamp of the range to search emails from.</p>
   * @public
   */
  FromTimestamp: Date | undefined;

  /**
   * <p>The end timestamp of the range to search emails from.</p>
   * @public
   */
  ToTimestamp: Date | undefined;

  /**
   * <p>The maximum number of search results to return.</p>
   * @public
   */
  MaxResults: number | undefined;
}

/**
 * <p>The response from initiating an archive search.</p>
 * @public
 */
export interface StartArchiveSearchResponse {
  /**
   * <p>The unique identifier for the initiated search job.</p>
   * @public
   */
  SearchId?: string | undefined;
}

/**
 * <p>The request to stop an in-progress archive export job.</p>
 * @public
 */
export interface StopArchiveExportRequest {
  /**
   * <p>The identifier of the export job to stop.</p>
   * @public
   */
  ExportId: string | undefined;
}

/**
 * <p>The response indicating if the request to stop the export job succeeded.</p>
 *          <p>On success, returns an HTTP 200 status code. On failure, returns an error message.</p>
 * @public
 */
export interface StopArchiveExportResponse {}

/**
 * <p>The request to stop an in-progress archive search job.</p>
 * @public
 */
export interface StopArchiveSearchRequest {
  /**
   * <p>The identifier of the search job to stop.</p>
   * @public
   */
  SearchId: string | undefined;
}

/**
 * <p>The response indicating if the request to stop the search job succeeded.</p>
 *          <p>On success, returns an HTTP 200 status code. On failure, returns an error message.</p>
 * @public
 */
export interface StopArchiveSearchResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource that you want to tag. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p> The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}. </p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UpdateTrafficPolicyRequest {
  /**
   * <p>The identifier of the traffic policy that you want to update.</p>
   * @public
   */
  TrafficPolicyId: string | undefined;

  /**
   * <p>A user-friendly name for the traffic policy resource.</p>
   * @public
   */
  TrafficPolicyName?: string | undefined;

  /**
   * <p>The list of conditions to be updated for filtering email traffic.</p>
   * @public
   */
  PolicyStatements?: PolicyStatement[] | undefined;

  /**
   * <p>Default action instructs the traﬃc policy to either Allow or Deny (block) messages that fall outside of (or not addressed by) the conditions of your policy statements</p>
   * @public
   */
  DefaultAction?: AcceptAction | undefined;

  /**
   * <p>The maximum message size in bytes of email which is allowed in by this traffic
   *             policy—anything larger will be blocked.</p>
   * @public
   */
  MaxMessageSizeBytes?: number | undefined;
}

/**
 * @public
 */
export interface UpdateTrafficPolicyResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource that you want to untag. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p> The keys of the key-value pairs for the tag or tags you want to remove from the
   *             specified resource. </p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAddonInstanceRequestFilterSensitiveLog = (obj: CreateAddonInstanceRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateAddonSubscriptionRequestFilterSensitiveLog = (obj: CreateAddonSubscriptionRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateArchiveRequestFilterSensitiveLog = (obj: CreateArchiveRequest): any => ({
  ...obj,
  ...(obj.Retention && { Retention: obj.Retention }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const IngressPointConfigurationFilterSensitiveLog = (obj: IngressPointConfiguration): any => {
  if (obj.SmtpPassword !== undefined) return { SmtpPassword: SENSITIVE_STRING };
  if (obj.SecretArn !== undefined) return { SecretArn: obj.SecretArn };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateIngressPointRequestFilterSensitiveLog = (obj: CreateIngressPointRequest): any => ({
  ...obj,
  ...(obj.IngressPointConfiguration && {
    IngressPointConfiguration: IngressPointConfigurationFilterSensitiveLog(obj.IngressPointConfiguration),
  }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateRelayRequestFilterSensitiveLog = (obj: CreateRelayRequest): any => ({
  ...obj,
  ...(obj.Authentication && { Authentication: obj.Authentication }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ReplaceRecipientActionFilterSensitiveLog = (obj: ReplaceRecipientAction): any => ({
  ...obj,
  ...(obj.ReplaceWith && { ReplaceWith: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RuleActionFilterSensitiveLog = (obj: RuleAction): any => {
  if (obj.Drop !== undefined) return { Drop: obj.Drop };
  if (obj.Relay !== undefined) return { Relay: obj.Relay };
  if (obj.Archive !== undefined) return { Archive: obj.Archive };
  if (obj.WriteToS3 !== undefined) return { WriteToS3: obj.WriteToS3 };
  if (obj.Send !== undefined) return { Send: obj.Send };
  if (obj.AddHeader !== undefined) return { AddHeader: obj.AddHeader };
  if (obj.ReplaceRecipient !== undefined)
    return { ReplaceRecipient: ReplaceRecipientActionFilterSensitiveLog(obj.ReplaceRecipient) };
  if (obj.DeliverToMailbox !== undefined) return { DeliverToMailbox: obj.DeliverToMailbox };
  if (obj.DeliverToQBusiness !== undefined) return { DeliverToQBusiness: obj.DeliverToQBusiness };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const RuleFilterSensitiveLog = (obj: Rule): any => ({
  ...obj,
  ...(obj.Conditions && { Conditions: obj.Conditions.map((item) => item) }),
  ...(obj.Unless && { Unless: obj.Unless.map((item) => item) }),
  ...(obj.Actions && { Actions: obj.Actions.map((item) => RuleActionFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateRuleSetRequestFilterSensitiveLog = (obj: CreateRuleSetRequest): any => ({
  ...obj,
  ...(obj.Rules && { Rules: obj.Rules.map((item) => RuleFilterSensitiveLog(item)) }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateTrafficPolicyRequestFilterSensitiveLog = (obj: CreateTrafficPolicyRequest): any => ({
  ...obj,
  ...(obj.PolicyStatements && { PolicyStatements: obj.PolicyStatements.map((item) => item) }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const MetadataFilterSensitiveLog = (obj: Metadata): any => ({
  ...obj,
  ...(obj.SenderIpAddress && { SenderIpAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetArchiveMessageResponseFilterSensitiveLog = (obj: GetArchiveMessageResponse): any => ({
  ...obj,
  ...(obj.Metadata && { Metadata: MetadataFilterSensitiveLog(obj.Metadata) }),
});

/**
 * @internal
 */
export const RowFilterSensitiveLog = (obj: Row): any => ({
  ...obj,
  ...(obj.SenderIpAddress && { SenderIpAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetArchiveSearchResultsResponseFilterSensitiveLog = (obj: GetArchiveSearchResultsResponse): any => ({
  ...obj,
  ...(obj.Rows && { Rows: obj.Rows.map((item) => RowFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetRuleSetResponseFilterSensitiveLog = (obj: GetRuleSetResponse): any => ({
  ...obj,
  ...(obj.Rules && { Rules: obj.Rules.map((item) => RuleFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateIngressPointRequestFilterSensitiveLog = (obj: UpdateIngressPointRequest): any => ({
  ...obj,
  ...(obj.IngressPointConfiguration && {
    IngressPointConfiguration: IngressPointConfigurationFilterSensitiveLog(obj.IngressPointConfiguration),
  }),
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateRuleSetRequestFilterSensitiveLog = (obj: UpdateRuleSetRequest): any => ({
  ...obj,
  ...(obj.Rules && { Rules: obj.Rules.map((item) => RuleFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
});
