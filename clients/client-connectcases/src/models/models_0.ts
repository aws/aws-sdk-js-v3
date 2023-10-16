// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ConnectCasesServiceException as __BaseException } from "./ConnectCasesServiceException";

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
 * <p>The requested operation would cause a conflict with the current state of a service
 *       resource associated with the request. Resolve the conflict before retrying this request. See
 *       the accompanying error message for details.</p>
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
 * <p>An empty value. You cannot set <code>EmptyFieldValue</code> on a field that is required on a case template.</p>
 *          <p>This structure will never have any data members. It signifies an empty value on a case field.</p>
 */
export interface EmptyFieldValue {}

/**
 * @public
 * <p>Object to store union of Field values.</p>
 */
export type FieldValueUnion =
  | FieldValueUnion.BooleanValueMember
  | FieldValueUnion.DoubleValueMember
  | FieldValueUnion.EmptyValueMember
  | FieldValueUnion.StringValueMember
  | FieldValueUnion.$UnknownMember;

/**
 * @public
 */
export namespace FieldValueUnion {
  /**
   * @public
   * <p>String value type.</p>
   */
  export interface StringValueMember {
    stringValue: string;
    doubleValue?: never;
    booleanValue?: never;
    emptyValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Can be either null, or have a Double number value type. Only one value can be
   *       provided.</p>
   */
  export interface DoubleValueMember {
    stringValue?: never;
    doubleValue: number;
    booleanValue?: never;
    emptyValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Can be either null, or have a Boolean value type. Only one value can be provided.</p>
   */
  export interface BooleanValueMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue: boolean;
    emptyValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An empty value.</p>
   */
  export interface EmptyValueMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue?: never;
    emptyValue: EmptyFieldValue;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue?: never;
    emptyValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    stringValue: (value: string) => T;
    doubleValue: (value: number) => T;
    booleanValue: (value: boolean) => T;
    emptyValue: (value: EmptyFieldValue) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FieldValueUnion, visitor: Visitor<T>): T => {
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.doubleValue !== undefined) return visitor.doubleValue(value.doubleValue);
    if (value.booleanValue !== undefined) return visitor.booleanValue(value.booleanValue);
    if (value.emptyValue !== undefined) return visitor.emptyValue(value.emptyValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Object for case field values.</p>
 */
export interface FieldValue {
  /**
   * @public
   * <p>Unique identifier of a field.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>Union of potential field value types.</p>
   */
  value: FieldValueUnion | undefined;
}

/**
 * @public
 */
export interface CreateCaseRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>A unique identifier of a template.</p>
   */
  templateId: string | undefined;

  /**
   * @public
   * <p>An array of objects with field ID (matching ListFields/DescribeField) and value union
   *       data.</p>
   */
  fields: FieldValue[] | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateCaseResponse {
  /**
   * @public
   * <p>A unique identifier of the case.</p>
   */
  caseId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the case.</p>
   */
  caseArn: string | undefined;
}

/**
 * @public
 * <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>Advice to clients on when the call can be safely retried.</p>
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
 * <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Unique identifier of the resource affected.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>Type of the resource affected.</p>
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
 * <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
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
 * <p>The request isn't valid. Check the syntax and try again.</p>
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
 * <p>Object for unique identifier of a field.</p>
 */
export interface FieldIdentifier {
  /**
   * @public
   * <p>Unique identifier of a field.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetCaseRequest {
  /**
   * @public
   * <p>A unique identifier of the case.</p>
   */
  caseId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>A list of unique field identifiers. </p>
   */
  fields: FieldIdentifier[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetCaseResponse {
  /**
   * @public
   * <p>A list of detailed field information. </p>
   */
  fields: FieldValue[] | undefined;

  /**
   * @public
   * <p>A unique identifier of a template.</p>
   */
  templateId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListCasesForContactRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>A unique identifier of a contact in Amazon Connect.</p>
   */
  contactArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Case summary information.</p>
 */
export interface CaseSummary {
  /**
   * @public
   * <p>A unique identifier of the case.</p>
   */
  caseId: string | undefined;

  /**
   * @public
   * <p>A unique identifier of a template.</p>
   */
  templateId: string | undefined;
}

/**
 * @public
 */
export interface ListCasesForContactResponse {
  /**
   * @public
   * <p>A list of Case summary information.</p>
   */
  cases: CaseSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const CommentBodyTextType = {
  PLAINTEXT: "Text/Plain",
} as const;

/**
 * @public
 */
export type CommentBodyTextType = (typeof CommentBodyTextType)[keyof typeof CommentBodyTextType];

/**
 * @public
 * <p>Represents the content of a <code>Comment</code> to be returned to agents.</p>
 */
export interface CommentContent {
  /**
   * @public
   * <p>Text in the body of a <code>Comment</code> on a case.</p>
   */
  body: string | undefined;

  /**
   * @public
   * <p>Type of the text in the box of a <code>Comment</code> on a case.</p>
   */
  contentType: CommentBodyTextType | undefined;
}

/**
 * @public
 * <p>An object that represents an Amazon Connect contact object. </p>
 */
export interface Contact {
  /**
   * @public
   * <p>A unique identifier of a contact in Amazon Connect.</p>
   */
  contactArn: string | undefined;
}

/**
 * @public
 * <p>Represents the content of a related item to be created.</p>
 */
export type RelatedItemInputContent =
  | RelatedItemInputContent.CommentMember
  | RelatedItemInputContent.ContactMember
  | RelatedItemInputContent.$UnknownMember;

/**
 * @public
 */
export namespace RelatedItemInputContent {
  /**
   * @public
   * <p>Object representing a contact in Amazon Connect as an API request field.</p>
   */
  export interface ContactMember {
    contact: Contact;
    comment?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Represents the content of a comment to be returned to agents.</p>
   */
  export interface CommentMember {
    contact?: never;
    comment: CommentContent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    contact?: never;
    comment?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    contact: (value: Contact) => T;
    comment: (value: CommentContent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RelatedItemInputContent, visitor: Visitor<T>): T => {
    if (value.contact !== undefined) return visitor.contact(value.contact);
    if (value.comment !== undefined) return visitor.comment(value.comment);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const RelatedItemType = {
  COMMENT: "Comment",
  CONTACT: "Contact",
} as const;

/**
 * @public
 */
export type RelatedItemType = (typeof RelatedItemType)[keyof typeof RelatedItemType];

/**
 * @public
 */
export interface CreateRelatedItemRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>A unique identifier of the case.</p>
   */
  caseId: string | undefined;

  /**
   * @public
   * <p>The type of a related item.</p>
   */
  type: RelatedItemType | undefined;

  /**
   * @public
   * <p>The content of a related item to be created.</p>
   */
  content: RelatedItemInputContent | undefined;
}

/**
 * @public
 */
export interface CreateRelatedItemResponse {
  /**
   * @public
   * <p>The unique identifier of the related item.</p>
   */
  relatedItemId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the related item.</p>
   */
  relatedItemArn: string | undefined;
}

/**
 * @public
 * <p>The service quota has been exceeded. For a list of service quotas, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect
 *         Administrator Guide</i>.</p>
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
 * <p>A filter for related items of type <code>Comment</code>.</p>
 */
export interface CommentFilter {}

/**
 * @public
 * <p>A filter for related items of type <code>Contact</code>.</p>
 */
export interface ContactFilter {
  /**
   * @public
   * <p>A list of channels to filter on for related items of type <code>Contact</code>.</p>
   */
  channel?: string[];

  /**
   * @public
   * <p>A unique identifier of a contact in Amazon Connect.</p>
   */
  contactArn?: string;
}

/**
 * @public
 * <p>The list of types of related items and their parameters to use for filtering.</p>
 */
export type RelatedItemTypeFilter =
  | RelatedItemTypeFilter.CommentMember
  | RelatedItemTypeFilter.ContactMember
  | RelatedItemTypeFilter.$UnknownMember;

/**
 * @public
 */
export namespace RelatedItemTypeFilter {
  /**
   * @public
   * <p>A filter for related items of type <code>Contact</code>.</p>
   */
  export interface ContactMember {
    contact: ContactFilter;
    comment?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A filter for related items of type <code>Comment</code>.</p>
   */
  export interface CommentMember {
    contact?: never;
    comment: CommentFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    contact?: never;
    comment?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    contact: (value: ContactFilter) => T;
    comment: (value: CommentFilter) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RelatedItemTypeFilter, visitor: Visitor<T>): T => {
    if (value.contact !== undefined) return visitor.contact(value.contact);
    if (value.comment !== undefined) return visitor.comment(value.comment);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface SearchRelatedItemsRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>A unique identifier of the case.</p>
   */
  caseId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The list of types of related items and their parameters to use for filtering.</p>
   */
  filters?: RelatedItemTypeFilter[];
}

/**
 * @public
 * <p>An object that represents a content of an Amazon Connect contact object.</p>
 */
export interface ContactContent {
  /**
   * @public
   * <p>A unique identifier of a contact in Amazon Connect.</p>
   */
  contactArn: string | undefined;

  /**
   * @public
   * <p>A list of channels to filter on for related items of type <code>Contact</code>.</p>
   */
  channel: string | undefined;

  /**
   * @public
   * <p>The difference between the <code>InitiationTimestamp</code> and the
   *         <code>DisconnectTimestamp</code> of the contact.</p>
   */
  connectedToSystemTime: Date | undefined;
}

/**
 * @public
 * <p>Represents the content of a particular type of related item.</p>
 */
export type RelatedItemContent =
  | RelatedItemContent.CommentMember
  | RelatedItemContent.ContactMember
  | RelatedItemContent.$UnknownMember;

/**
 * @public
 */
export namespace RelatedItemContent {
  /**
   * @public
   * <p>Represents the content of a contact to be returned to agents.</p>
   */
  export interface ContactMember {
    contact: ContactContent;
    comment?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Represents the content of a comment to be returned to agents.</p>
   */
  export interface CommentMember {
    contact?: never;
    comment: CommentContent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    contact?: never;
    comment?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    contact: (value: ContactContent) => T;
    comment: (value: CommentContent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RelatedItemContent, visitor: Visitor<T>): T => {
    if (value.contact !== undefined) return visitor.contact(value.contact);
    if (value.comment !== undefined) return visitor.comment(value.comment);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>A list of items that represent RelatedItems.</p>
 */
export interface SearchRelatedItemsResponseItem {
  /**
   * @public
   * <p>Unique identifier of a related item.</p>
   */
  relatedItemId: string | undefined;

  /**
   * @public
   * <p>Type of a related item.</p>
   */
  type: RelatedItemType | undefined;

  /**
   * @public
   * <p>Time at which a related item was associated with a case.</p>
   */
  associationTime: Date | undefined;

  /**
   * @public
   * <p>Represents the content of a particular type of related item.</p>
   */
  content: RelatedItemContent | undefined;

  /**
   * @public
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface SearchRelatedItemsResponse {
  /**
   * @public
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of items related to a case. </p>
   */
  relatedItems: SearchRelatedItemsResponseItem[] | undefined;
}

/**
 * @public
 * <p>A filter for fields. Only one value can be provided.</p>
 */
export type FieldFilter =
  | FieldFilter.ContainsMember
  | FieldFilter.EqualToMember
  | FieldFilter.GreaterThanMember
  | FieldFilter.GreaterThanOrEqualToMember
  | FieldFilter.LessThanMember
  | FieldFilter.LessThanOrEqualToMember
  | FieldFilter.$UnknownMember;

/**
 * @public
 */
export namespace FieldFilter {
  /**
   * @public
   * <p>Object containing field identifier and value information.</p>
   */
  export interface EqualToMember {
    equalTo: FieldValue;
    contains?: never;
    greaterThan?: never;
    greaterThanOrEqualTo?: never;
    lessThan?: never;
    lessThanOrEqualTo?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Object containing field identifier and value information.</p>
   */
  export interface ContainsMember {
    equalTo?: never;
    contains: FieldValue;
    greaterThan?: never;
    greaterThanOrEqualTo?: never;
    lessThan?: never;
    lessThanOrEqualTo?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Object containing field identifier and value information.</p>
   */
  export interface GreaterThanMember {
    equalTo?: never;
    contains?: never;
    greaterThan: FieldValue;
    greaterThanOrEqualTo?: never;
    lessThan?: never;
    lessThanOrEqualTo?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Object containing field identifier and value information.</p>
   */
  export interface GreaterThanOrEqualToMember {
    equalTo?: never;
    contains?: never;
    greaterThan?: never;
    greaterThanOrEqualTo: FieldValue;
    lessThan?: never;
    lessThanOrEqualTo?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Object containing field identifier and value information.</p>
   */
  export interface LessThanMember {
    equalTo?: never;
    contains?: never;
    greaterThan?: never;
    greaterThanOrEqualTo?: never;
    lessThan: FieldValue;
    lessThanOrEqualTo?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Object containing field identifier and value information. </p>
   */
  export interface LessThanOrEqualToMember {
    equalTo?: never;
    contains?: never;
    greaterThan?: never;
    greaterThanOrEqualTo?: never;
    lessThan?: never;
    lessThanOrEqualTo: FieldValue;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    equalTo?: never;
    contains?: never;
    greaterThan?: never;
    greaterThanOrEqualTo?: never;
    lessThan?: never;
    lessThanOrEqualTo?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    equalTo: (value: FieldValue) => T;
    contains: (value: FieldValue) => T;
    greaterThan: (value: FieldValue) => T;
    greaterThanOrEqualTo: (value: FieldValue) => T;
    lessThan: (value: FieldValue) => T;
    lessThanOrEqualTo: (value: FieldValue) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FieldFilter, visitor: Visitor<T>): T => {
    if (value.equalTo !== undefined) return visitor.equalTo(value.equalTo);
    if (value.contains !== undefined) return visitor.contains(value.contains);
    if (value.greaterThan !== undefined) return visitor.greaterThan(value.greaterThan);
    if (value.greaterThanOrEqualTo !== undefined) return visitor.greaterThanOrEqualTo(value.greaterThanOrEqualTo);
    if (value.lessThan !== undefined) return visitor.lessThan(value.lessThan);
    if (value.lessThanOrEqualTo !== undefined) return visitor.lessThanOrEqualTo(value.lessThanOrEqualTo);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const Order = {
  ASCENDING: "Asc",
  DESCENDING: "Desc",
} as const;

/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * @public
 * <p>A structured set of sort terms.</p>
 */
export interface Sort {
  /**
   * @public
   * <p>Unique identifier of a field.</p>
   */
  fieldId: string | undefined;

  /**
   * @public
   * <p>A structured set of sort terms</p>
   */
  sortOrder: Order | undefined;
}

/**
 * @public
 * <p>A list of items that represent cases.</p>
 */
export interface SearchCasesResponseItem {
  /**
   * @public
   * <p>A unique identifier of the case.</p>
   */
  caseId: string | undefined;

  /**
   * @public
   * <p>A unique identifier of a template.</p>
   */
  templateId: string | undefined;

  /**
   * @public
   * <p>List of case field values.</p>
   */
  fields: FieldValue[] | undefined;

  /**
   * @public
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface SearchCasesResponse {
  /**
   * @public
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of case documents where each case contains the properties <code>CaseId</code> and
   *         <code>Fields</code> where each field is a complex union structure. </p>
   */
  cases: SearchCasesResponseItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateCaseRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>A unique identifier of the case.</p>
   */
  caseId: string | undefined;

  /**
   * @public
   * <p>An array of objects with <code>fieldId</code> (matching ListFields/DescribeField) and
   *       value union data, structured identical to <code>CreateCase</code>.</p>
   */
  fields: FieldValue[] | undefined;
}

/**
 * @public
 */
export interface UpdateCaseResponse {}

/**
 * @public
 */
export interface CreateDomainRequest {
  /**
   * @public
   * <p>The name for your Cases domain. It must be unique for your Amazon Web Services
   *       account.</p>
   */
  name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  ACTIVE: "Active",
  CREATION_FAILED: "CreationFailed",
  CREATION_IN_PROGRESS: "CreationInProgress",
} as const;

/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 */
export interface CreateDomainResponse {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the Cases domain.</p>
   */
  domainArn: string | undefined;

  /**
   * @public
   * <p>The status of the domain.</p>
   */
  domainStatus: DomainStatus | undefined;
}

/**
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainResponse {}

/**
 * @public
 */
export interface GetCaseEventConfigurationRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;
}

/**
 * @public
 * <p>Details of what case data is published through the case event stream.</p>
 */
export interface CaseEventIncludedData {
  /**
   * @public
   * <p>List of field identifiers.</p>
   */
  fields: FieldIdentifier[] | undefined;
}

/**
 * @public
 * <p>Details of what related item data is published through the case event stream.</p>
 */
export interface RelatedItemEventIncludedData {
  /**
   * @public
   * <p>Details of what related item data is published through the case event stream.</p>
   */
  includeContent: boolean | undefined;
}

/**
 * @public
 * <p>Details of what case and related item data is published through the case event
 *       stream.</p>
 */
export interface EventIncludedData {
  /**
   * @public
   * <p>Details of what case data is published through the case event stream.</p>
   */
  caseData?: CaseEventIncludedData;

  /**
   * @public
   * <p>Details of what related item data is published through the case event stream.</p>
   */
  relatedItemData?: RelatedItemEventIncludedData;
}

/**
 * @public
 * <p>Configuration to enable EventBridge case event delivery and determine what data is
 *       delivered.</p>
 */
export interface EventBridgeConfiguration {
  /**
   * @public
   * <p>Indicates whether the to broadcast case event data to the customer.</p>
   */
  enabled: boolean | undefined;

  /**
   * @public
   * <p>Details of what case and related item data is published through the case event
   *       stream.</p>
   */
  includedData?: EventIncludedData;
}

/**
 * @public
 */
export interface GetCaseEventConfigurationResponse {
  /**
   * @public
   * <p>Configuration to enable EventBridge case event delivery and determine what data is
   *       delivered.</p>
   */
  eventBridge: EventBridgeConfiguration | undefined;
}

/**
 * @public
 */
export interface GetDomainRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;
}

/**
 * @public
 */
export interface GetDomainResponse {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the Cases domain.</p>
   */
  domainArn: string | undefined;

  /**
   * @public
   * <p>The name of the Cases domain.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The timestamp when the Cases domain was created.</p>
   */
  createdTime: Date | undefined;

  /**
   * @public
   * <p>The status of the Cases domain.</p>
   */
  domainStatus: DomainStatus | undefined;

  /**
   * @public
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListDomainsRequest {
  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Object for the summarized details of the domain.</p>
 */
export interface DomainSummary {
  /**
   * @public
   * <p>The unique identifier of the domain.</p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the domain.</p>
   */
  domainArn: string | undefined;

  /**
   * @public
   * <p>The name of the domain.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * @public
   * <p>The Cases domain.</p>
   */
  domains: DomainSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface PutCaseEventConfigurationRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>Configuration to enable EventBridge case event delivery and determine what data is
   *       delivered.</p>
   */
  eventBridge: EventBridgeConfiguration | undefined;
}

/**
 * @public
 */
export interface PutCaseEventConfigurationResponse {}

/**
 * @public
 */
export interface BatchGetFieldRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>A list of unique field identifiers. </p>
   */
  fields: FieldIdentifier[] | undefined;
}

/**
 * @public
 * <p>Object for errors on fields.</p>
 */
export interface FieldError {
  /**
   * @public
   * <p>The field identifier that caused the error.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The error code from getting a field.</p>
   */
  errorCode: string | undefined;

  /**
   * @public
   * <p>The error message from getting a field.</p>
   */
  message?: string;
}

/**
 * @public
 * @enum
 */
export const FieldNamespace = {
  CUSTOM: "Custom",
  SYSTEM: "System",
} as const;

/**
 * @public
 */
export type FieldNamespace = (typeof FieldNamespace)[keyof typeof FieldNamespace];

/**
 * @public
 * @enum
 */
export const FieldType = {
  BOOLEAN: "Boolean",
  DATE_TIME: "DateTime",
  NUMBER: "Number",
  SINGLE_SELECT: "SingleSelect",
  TEXT: "Text",
  URL: "Url",
} as const;

/**
 * @public
 */
export type FieldType = (typeof FieldType)[keyof typeof FieldType];

/**
 * @public
 * <p>Object to store detailed field information.</p>
 */
export interface GetFieldResponse {
  /**
   * @public
   * <p>Unique identifier of the field.</p>
   */
  fieldId: string | undefined;

  /**
   * @public
   * <p>Name of the field.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the field.</p>
   */
  fieldArn: string | undefined;

  /**
   * @public
   * <p>Description of the field.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Type of the field.</p>
   */
  type: FieldType | undefined;

  /**
   * @public
   * <p>Namespace of the field.</p>
   */
  namespace: FieldNamespace | undefined;

  /**
   * @public
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface BatchGetFieldResponse {
  /**
   * @public
   * <p>A list of detailed field information. </p>
   */
  fields: GetFieldResponse[] | undefined;

  /**
   * @public
   * <p>A list of field errors. </p>
   */
  errors: FieldError[] | undefined;
}

/**
 * @public
 * <p>Object for field Options information.</p>
 */
export interface FieldOption {
  /**
   * @public
   * <p>
   *             <code>FieldOptionName</code> has max length 100 and disallows trailing spaces.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>
   *             <code>FieldOptionValue</code> has max length 100 and must be alphanumeric with hyphens and
   *       underscores.</p>
   */
  value: string | undefined;

  /**
   * @public
   * <p>Describes whether the <code>FieldOption</code> is active (displayed) or inactive.</p>
   */
  active: boolean | undefined;
}

/**
 * @public
 */
export interface BatchPutFieldOptionsRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of a field.</p>
   */
  fieldId: string | undefined;

  /**
   * @public
   * <p>A list of <code>FieldOption</code> objects.</p>
   */
  options: FieldOption[] | undefined;
}

/**
 * @public
 * <p>Object for field Options errors.</p>
 */
export interface FieldOptionError {
  /**
   * @public
   * <p>Error message from creating or updating field option.</p>
   */
  message: string | undefined;

  /**
   * @public
   * <p>Error code from creating or updating field option.</p>
   */
  errorCode: string | undefined;

  /**
   * @public
   * <p>The field option value that caused the error.</p>
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface BatchPutFieldOptionsResponse {
  /**
   * @public
   * <p>A list of field errors. </p>
   */
  errors?: FieldOptionError[];
}

/**
 * @public
 */
export interface CreateFieldRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The name of the field.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Defines the data type, some system constraints, and default display of the field.</p>
   */
  type: FieldType | undefined;

  /**
   * @public
   * <p>The description of the field.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface CreateFieldResponse {
  /**
   * @public
   * <p>The unique identifier of a field.</p>
   */
  fieldId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the field.</p>
   */
  fieldArn: string | undefined;
}

/**
 * @public
 */
export interface ListFieldOptionsRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of a field.</p>
   */
  fieldId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of <code>FieldOption</code> values to filter on for
   *       <code>ListFieldOptions</code>.</p>
   */
  values?: string[];
}

/**
 * @public
 */
export interface ListFieldOptionsResponse {
  /**
   * @public
   * <p>A list of <code>FieldOption</code> objects.</p>
   */
  options: FieldOption[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListFieldsRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Object for the summarized details of the field.</p>
 */
export interface FieldSummary {
  /**
   * @public
   * <p>The unique identifier of a field.</p>
   */
  fieldId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the field.</p>
   */
  fieldArn: string | undefined;

  /**
   * @public
   * <p>Name of the field.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of a field.</p>
   */
  type: FieldType | undefined;

  /**
   * @public
   * <p>The namespace of a field.</p>
   */
  namespace: FieldNamespace | undefined;
}

/**
 * @public
 */
export interface ListFieldsResponse {
  /**
   * @public
   * <p>List of detailed field information.</p>
   */
  fields: FieldSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateFieldRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of a field.</p>
   */
  fieldId: string | undefined;

  /**
   * @public
   * <p>The name of the field.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of a field.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateFieldResponse {}

/**
 * @public
 * <p>Object for field related information.</p>
 */
export interface FieldItem {
  /**
   * @public
   * <p>Unique identifier of a field.</p>
   */
  id: string | undefined;
}

/**
 * @public
 * <p>Object for a group of fields and associated properties.</p>
 */
export interface FieldGroup {
  /**
   * @public
   * <p>Name of the field group.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Represents an ordered list containing field related information.</p>
   */
  fields: FieldItem[] | undefined;
}

/**
 * @public
 * <p>This represents a sections within a panel or tab of the page layout.</p>
 */
export type Section = Section.FieldGroupMember | Section.$UnknownMember;

/**
 * @public
 */
export namespace Section {
  /**
   * @public
   * <p>Consists of a group of fields and associated properties.</p>
   */
  export interface FieldGroupMember {
    fieldGroup: FieldGroup;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    fieldGroup?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    fieldGroup: (value: FieldGroup) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Section, visitor: Visitor<T>): T => {
    if (value.fieldGroup !== undefined) return visitor.fieldGroup(value.fieldGroup);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Ordered list containing different kinds of sections that can be added. A LayoutSections
 *       object can only contain one section.</p>
 */
export interface LayoutSections {
  /**
   * @public
   * <p>Ordered list containing different kinds of sections that can be added.</p>
   */
  sections?: Section[];
}

/**
 * @public
 * <p>Content specific to <code>BasicLayout</code> type. It configures fields in the top panel
 *       and More Info tab of agent application. </p>
 */
export interface BasicLayout {
  /**
   * @public
   * <p>This represents sections in a panel of the page layout.</p>
   */
  topPanel?: LayoutSections;

  /**
   * @public
   * <p>This represents sections in a tab of the page layout.</p>
   */
  moreInfo?: LayoutSections;
}

/**
 * @public
 * <p>Object to store union of different versions of layout content.</p>
 */
export type LayoutContent = LayoutContent.BasicMember | LayoutContent.$UnknownMember;

/**
 * @public
 */
export namespace LayoutContent {
  /**
   * @public
   * <p>Content specific to <code>BasicLayout</code> type. It configures fields in the top panel
   *       and More Info tab of Cases user interface.</p>
   */
  export interface BasicMember {
    basic: BasicLayout;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    basic?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    basic: (value: BasicLayout) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: LayoutContent, visitor: Visitor<T>): T => {
    if (value.basic !== undefined) return visitor.basic(value.basic);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateLayoutRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The name of the layout. It must be unique for the Cases domain.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Information about which fields will be present in the layout, and information about the
   *       order of the fields.</p>
   */
  content: LayoutContent | undefined;
}

/**
 * @public
 */
export interface CreateLayoutResponse {
  /**
   * @public
   * <p>The unique identifier of the layout.</p>
   */
  layoutId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the newly created layout.</p>
   */
  layoutArn: string | undefined;
}

/**
 * @public
 */
export interface GetLayoutRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the layout.</p>
   */
  layoutId: string | undefined;
}

/**
 * @public
 */
export interface GetLayoutResponse {
  /**
   * @public
   * <p>The unique identifier of the layout.</p>
   */
  layoutId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the newly created layout.</p>
   */
  layoutArn: string | undefined;

  /**
   * @public
   * <p>The name of the layout. It must be unique.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Information about which fields will be present in the layout, the order of the fields, and
   *       read-only attribute of the field. </p>
   */
  content: LayoutContent | undefined;

  /**
   * @public
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListLayoutsRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Object for the summarized details of the layout.</p>
 */
export interface LayoutSummary {
  /**
   * @public
   * <p>The unique identifier for of the layout.</p>
   */
  layoutId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the layout.</p>
   */
  layoutArn: string | undefined;

  /**
   * @public
   * <p>The name of the layout.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface ListLayoutsResponse {
  /**
   * @public
   * <p>The layouts for the domain.</p>
   */
  layouts: LayoutSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateLayoutRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the layout.</p>
   */
  layoutId: string | undefined;

  /**
   * @public
   * <p>The name of the layout. It must be unique per domain.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Information about which fields will be present in the layout, the order of the fields, and
   *       a read-only attribute of the field. </p>
   */
  content?: LayoutContent;
}

/**
 * @public
 */
export interface UpdateLayoutResponse {}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN)</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN)</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 * <p>Object to store configuration of layouts associated to the template.</p>
 */
export interface LayoutConfiguration {
  /**
   * @public
   * <p> Unique identifier of a layout. </p>
   */
  defaultLayout?: string;
}

/**
 * @public
 * <p>List of fields that must have a value provided to create a case.</p>
 */
export interface RequiredField {
  /**
   * @public
   * <p>Unique identifier of a field.</p>
   */
  fieldId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TemplateStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;

/**
 * @public
 */
export type TemplateStatus = (typeof TemplateStatus)[keyof typeof TemplateStatus];

/**
 * @public
 */
export interface CreateTemplateRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>A name for the template. It must be unique per domain.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A brief description of the template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Configuration of layouts associated to the template.</p>
   */
  layoutConfiguration?: LayoutConfiguration;

  /**
   * @public
   * <p>A list of fields that must contain a value for a case to be successfully created with this
   *       template.</p>
   */
  requiredFields?: RequiredField[];

  /**
   * @public
   * <p>The status of the template.</p>
   */
  status?: TemplateStatus;
}

/**
 * @public
 */
export interface CreateTemplateResponse {
  /**
   * @public
   * <p>A unique identifier of a template.</p>
   */
  templateId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the newly created template.</p>
   */
  templateArn: string | undefined;
}

/**
 * @public
 */
export interface GetTemplateRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>A unique identifier of a template.</p>
   */
  templateId: string | undefined;
}

/**
 * @public
 */
export interface GetTemplateResponse {
  /**
   * @public
   * <p>A unique identifier of a template.</p>
   */
  templateId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  templateArn: string | undefined;

  /**
   * @public
   * <p>The name of the template.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A brief description of the template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Configuration of layouts associated to the template.</p>
   */
  layoutConfiguration?: LayoutConfiguration;

  /**
   * @public
   * <p>A list of fields that must contain a value for a case to be successfully created with this
   *       template.</p>
   */
  requiredFields?: RequiredField[];

  /**
   * @public
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The status of the template.</p>
   */
  status: TemplateStatus | undefined;
}

/**
 * @public
 */
export interface ListTemplatesRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of status values to filter on.</p>
   */
  status?: TemplateStatus[];
}

/**
 * @public
 * <p>Template summary information.</p>
 */
export interface TemplateSummary {
  /**
   * @public
   * <p>The unique identifier for the template.</p>
   */
  templateId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  templateArn: string | undefined;

  /**
   * @public
   * <p>The template name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The status of the template.</p>
   */
  status: TemplateStatus | undefined;
}

/**
 * @public
 */
export interface ListTemplatesResponse {
  /**
   * @public
   * <p>List of template summary objects.</p>
   */
  templates: TemplateSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateTemplateRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the template.</p>
   */
  templateId: string | undefined;

  /**
   * @public
   * <p>The name of the template. It must be unique per domain.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A brief description of the template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Configuration of layouts associated to the template.</p>
   */
  layoutConfiguration?: LayoutConfiguration;

  /**
   * @public
   * <p>A list of fields that must contain a value for a case to be successfully created with this
   *       template.</p>
   */
  requiredFields?: RequiredField[];

  /**
   * @public
   * <p>The status of the template.</p>
   */
  status?: TemplateStatus;
}

/**
 * @public
 */
export interface UpdateTemplateResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN)</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>List of tag keys.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 * <p>A filter for cases. Only one value can be provided.</p>
 */
export type CaseFilter =
  | CaseFilter.AndAllMember
  | CaseFilter.FieldMember
  | CaseFilter.NotMember
  | CaseFilter.OrAllMember
  | CaseFilter.$UnknownMember;

/**
 * @public
 */
export namespace CaseFilter {
  /**
   * @public
   * <p>A list of fields to filter on.</p>
   */
  export interface FieldMember {
    field: FieldFilter;
    not?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A filter for cases. Only one value can be provided.</p>
   */
  export interface NotMember {
    field?: never;
    not: CaseFilter;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Provides "and all" filtering.</p>
   */
  export interface AndAllMember {
    field?: never;
    not?: never;
    andAll: CaseFilter[];
    orAll?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Provides "or all" filtering.</p>
   */
  export interface OrAllMember {
    field?: never;
    not?: never;
    andAll?: never;
    orAll: CaseFilter[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    field?: never;
    not?: never;
    andAll?: never;
    orAll?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    field: (value: FieldFilter) => T;
    not: (value: CaseFilter) => T;
    andAll: (value: CaseFilter[]) => T;
    orAll: (value: CaseFilter[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CaseFilter, visitor: Visitor<T>): T => {
    if (value.field !== undefined) return visitor.field(value.field);
    if (value.not !== undefined) return visitor.not(value.not);
    if (value.andAll !== undefined) return visitor.andAll(value.andAll);
    if (value.orAll !== undefined) return visitor.orAll(value.orAll);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface SearchCasesRequest {
  /**
   * @public
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * @public
   * <p>The maximum number of cases to return. The current maximum supported value is 25. This is
   *       also the default value when no other value is provided.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A word or phrase used to perform a quick search.</p>
   */
  searchTerm?: string;

  /**
   * @public
   * <p>A list of filter objects.</p>
   */
  filter?: CaseFilter;

  /**
   * @public
   * <p>A list of sorts where each sort specifies a field and their sort order to be applied to
   *       the results. </p>
   */
  sorts?: Sort[];

  /**
   * @public
   * <p>The list of field identifiers to be returned as part of the response.</p>
   */
  fields?: FieldIdentifier[];
}
