// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ConnectCasesServiceException as __BaseException } from "./ConnectCasesServiceException";

/**
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
 * <p>Object to store union of Field values.</p>
 */
export type FieldValueUnion =
  | FieldValueUnion.BooleanValueMember
  | FieldValueUnion.DoubleValueMember
  | FieldValueUnion.StringValueMember
  | FieldValueUnion.$UnknownMember;

export namespace FieldValueUnion {
  /**
   * <p>String value type.</p>
   */
  export interface StringValueMember {
    stringValue: string;
    doubleValue?: never;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Can be either null, or have a Double number value type. Only one value can be
   *       provided.</p>
   */
  export interface DoubleValueMember {
    stringValue?: never;
    doubleValue: number;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Can be either null, or have a Boolean value type. Only one value can be provided.</p>
   */
  export interface BooleanValueMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue: boolean;
    $unknown?: never;
  }

  export interface $UnknownMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    stringValue: (value: string) => T;
    doubleValue: (value: number) => T;
    booleanValue: (value: boolean) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FieldValueUnion, visitor: Visitor<T>): T => {
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.doubleValue !== undefined) return visitor.doubleValue(value.doubleValue);
    if (value.booleanValue !== undefined) return visitor.booleanValue(value.booleanValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Object for case field values.</p>
 */
export interface FieldValue {
  /**
   * <p>Unique identifier of a field.</p>
   */
  id: string | undefined;

  /**
   * <p>Union of potential field value types.</p>
   */
  value: FieldValueUnion | undefined;
}

export interface CreateCaseRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>A unique identifier of a template.</p>
   */
  templateId: string | undefined;

  /**
   * <p>An array of objects with field ID (matching ListFields/DescribeField) and value union
   *       data.</p>
   */
  fields: FieldValue[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  clientToken?: string;
}

export interface CreateCaseResponse {
  /**
   * <p>A unique identifier of the case.</p>
   */
  caseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the case.</p>
   */
  caseArn: string | undefined;
}

/**
 * <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
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
 * <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Unique identifier of the resource affected.</p>
   */
  resourceId: string | undefined;

  /**
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
 * <p>Object for unique identifier of a field.</p>
 */
export interface FieldIdentifier {
  /**
   * <p>Unique identifier of a field.</p>
   */
  id: string | undefined;
}

export interface GetCaseRequest {
  /**
   * <p>A unique identifier of the case.</p>
   */
  caseId: string | undefined;

  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>A list of unique field identifiers. </p>
   */
  fields: FieldIdentifier[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export interface GetCaseResponse {
  /**
   * <p>A list of detailed field information. </p>
   */
  fields: FieldValue[] | undefined;

  /**
   * <p>A unique identifier of a template.</p>
   */
  templateId: string | undefined;

  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

export interface ListCasesForContactRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>A unique identifier of a contact in Amazon Connect.</p>
   */
  contactArn: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * <p>Case summary information.</p>
 */
export interface CaseSummary {
  /**
   * <p>A unique identifier of the case.</p>
   */
  caseId: string | undefined;

  /**
   * <p>A unique identifier of a template.</p>
   */
  templateId: string | undefined;
}

export interface ListCasesForContactResponse {
  /**
   * <p>A list of Case summary information.</p>
   */
  cases: CaseSummary[] | undefined;

  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;
}

export enum CommentBodyTextType {
  PLAINTEXT = "Text/Plain",
}

/**
 * <p>Represents the content of a <code>Comment</code> to be returned to agents.</p>
 */
export interface CommentContent {
  /**
   * <p>Text in the body of a <code>Comment</code> on a case.</p>
   */
  body: string | undefined;

  /**
   * <p>Type of the text in the box of a <code>Comment</code> on a case.</p>
   */
  contentType: CommentBodyTextType | string | undefined;
}

/**
 * <p>An object that represents an Amazon Connect contact object. </p>
 */
export interface Contact {
  /**
   * <p>A unique identifier of a contact in Amazon Connect.</p>
   */
  contactArn: string | undefined;
}

/**
 * <p>Represents the content of a related item to be created.</p>
 */
export type RelatedItemInputContent =
  | RelatedItemInputContent.CommentMember
  | RelatedItemInputContent.ContactMember
  | RelatedItemInputContent.$UnknownMember;

export namespace RelatedItemInputContent {
  /**
   * <p>Object representing a contact in Amazon Connect as an API request field.</p>
   */
  export interface ContactMember {
    contact: Contact;
    comment?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents the content of a comment to be returned to agents.</p>
   */
  export interface CommentMember {
    contact?: never;
    comment: CommentContent;
    $unknown?: never;
  }

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

export enum RelatedItemType {
  COMMENT = "Comment",
  CONTACT = "Contact",
}

export interface CreateRelatedItemRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>A unique identifier of the case.</p>
   */
  caseId: string | undefined;

  /**
   * <p>The type of a related item.</p>
   */
  type: RelatedItemType | string | undefined;

  /**
   * <p>The content of a related item to be created.</p>
   */
  content: RelatedItemInputContent | undefined;
}

export interface CreateRelatedItemResponse {
  /**
   * <p>The unique identifier of the related item.</p>
   */
  relatedItemId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the related item.</p>
   */
  relatedItemArn: string | undefined;
}

/**
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
 * <p>A filter for related items of type <code>Comment</code>.</p>
 */
export interface CommentFilter {}

/**
 * <p>A filter for related items of type <code>Contact</code>.</p>
 */
export interface ContactFilter {
  /**
   * <p>A list of channels to filter on for related items of type <code>Contact</code>.</p>
   */
  channel?: string[];

  /**
   * <p>A unique identifier of a contact in Amazon Connect.</p>
   */
  contactArn?: string;
}

/**
 * <p>The list of types of related items and their parameters to use for filtering.</p>
 */
export type RelatedItemTypeFilter =
  | RelatedItemTypeFilter.CommentMember
  | RelatedItemTypeFilter.ContactMember
  | RelatedItemTypeFilter.$UnknownMember;

export namespace RelatedItemTypeFilter {
  /**
   * <p>A filter for related items of type <code>Contact</code>.</p>
   */
  export interface ContactMember {
    contact: ContactFilter;
    comment?: never;
    $unknown?: never;
  }

  /**
   * <p>A filter for related items of type <code>Comment</code>.</p>
   */
  export interface CommentMember {
    contact?: never;
    comment: CommentFilter;
    $unknown?: never;
  }

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

export interface SearchRelatedItemsRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>A unique identifier of the case.</p>
   */
  caseId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of types of related items and their parameters to use for filtering.</p>
   */
  filters?: RelatedItemTypeFilter[];
}

/**
 * <p>An object that represents a content of an Amazon Connect contact object.</p>
 */
export interface ContactContent {
  /**
   * <p>A unique identifier of a contact in Amazon Connect.</p>
   */
  contactArn: string | undefined;

  /**
   * <p>A list of channels to filter on for related items of type <code>Contact</code>.</p>
   */
  channel: string | undefined;

  /**
   * <p>The difference between the <code>InitiationTimestamp</code> and the
   *         <code>DisconnectTimestamp</code> of the contact.</p>
   */
  connectedToSystemTime: Date | undefined;
}

/**
 * <p>Represents the content of a particular type of related item.</p>
 */
export type RelatedItemContent =
  | RelatedItemContent.CommentMember
  | RelatedItemContent.ContactMember
  | RelatedItemContent.$UnknownMember;

export namespace RelatedItemContent {
  /**
   * <p>Represents the content of a contact to be returned to agents.</p>
   */
  export interface ContactMember {
    contact: ContactContent;
    comment?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents the content of a comment to be returned to agents.</p>
   */
  export interface CommentMember {
    contact?: never;
    comment: CommentContent;
    $unknown?: never;
  }

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
 * <p>A list of items that represent RelatedItems.</p>
 */
export interface SearchRelatedItemsResponseItem {
  /**
   * <p>Unique identifier of a related item.</p>
   */
  relatedItemId: string | undefined;

  /**
   * <p>Type of a related item.</p>
   */
  type: RelatedItemType | string | undefined;

  /**
   * <p>Time at which a related item was associated with a case.</p>
   */
  associationTime: Date | undefined;

  /**
   * <p>Represents the content of a particular type of related item.</p>
   */
  content: RelatedItemContent | undefined;

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

export interface SearchRelatedItemsResponse {
  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of items related to a case. </p>
   */
  relatedItems: SearchRelatedItemsResponseItem[] | undefined;
}

/**
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

export namespace FieldFilter {
  /**
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

export enum Order {
  ASCENDING = "Asc",
  DESCENDING = "Desc",
}

/**
 * <p>A structured set of sort terms.</p>
 */
export interface Sort {
  /**
   * <p>Unique identifier of a field.</p>
   */
  fieldId: string | undefined;

  /**
   * <p>A structured set of sort terms</p>
   */
  sortOrder: Order | string | undefined;
}

/**
 * <p>A list of items that represent cases.</p>
 */
export interface SearchCasesResponseItem {
  /**
   * <p>A unique identifier of the case.</p>
   */
  caseId: string | undefined;

  /**
   * <p>A unique identifier of a template.</p>
   */
  templateId: string | undefined;

  /**
   * <p>List of case field values.</p>
   */
  fields: FieldValue[] | undefined;

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

export interface SearchCasesResponse {
  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of case documents where each case contains the properties <code>CaseId</code> and
   *         <code>Fields</code> where each field is a complex union structure. </p>
   */
  cases: SearchCasesResponseItem[] | undefined;
}

export interface UpdateCaseRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>A unique identifier of the case.</p>
   */
  caseId: string | undefined;

  /**
   * <p>An array of objects with <code>fieldId</code> (matching ListFields/DescribeField) and
   *       value union data, structured identical to <code>CreateCase</code>.</p>
   */
  fields: FieldValue[] | undefined;
}

export interface UpdateCaseResponse {}

export interface CreateDomainRequest {
  /**
   * <p>The name for your Cases domain. It must be unique for your Amazon Web Services
   *       account.</p>
   */
  name: string | undefined;
}

export enum DomainStatus {
  ACTIVE = "Active",
  CREATION_FAILED = "CreationFailed",
  CREATION_IN_PROGRESS = "CreationInProgress",
}

export interface CreateDomainResponse {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the Cases domain.</p>
   */
  domainArn: string | undefined;

  /**
   * <p>The status of the domain.</p>
   */
  domainStatus: DomainStatus | string | undefined;
}

export interface GetCaseEventConfigurationRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;
}

/**
 * <p>Details of what case data is published through the case event stream.</p>
 */
export interface CaseEventIncludedData {
  /**
   * <p>List of field identifiers.</p>
   */
  fields: FieldIdentifier[] | undefined;
}

/**
 * <p>Details of what related item data is published through the case event stream.</p>
 */
export interface RelatedItemEventIncludedData {
  /**
   * <p>Details of what related item data is published through the case event stream.</p>
   */
  includeContent: boolean | undefined;
}

/**
 * <p>Details of what case and related item data is published through the case event
 *       stream.</p>
 */
export interface EventIncludedData {
  /**
   * <p>Details of what case data is published through the case event stream.</p>
   */
  caseData?: CaseEventIncludedData;

  /**
   * <p>Details of what related item data is published through the case event stream.</p>
   */
  relatedItemData?: RelatedItemEventIncludedData;
}

/**
 * <p>Configuration to enable EventBridge case event delivery and determine what data is
 *       delivered.</p>
 */
export interface EventBridgeConfiguration {
  /**
   * <p>Indicates whether the to broadcast case event data to the customer.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>Details of what case and related item data is published through the case event
   *       stream.</p>
   */
  includedData?: EventIncludedData;
}

export interface GetCaseEventConfigurationResponse {
  /**
   * <p>Configuration to enable EventBridge case event delivery and determine what data is
   *       delivered.</p>
   */
  eventBridge: EventBridgeConfiguration | undefined;
}

export interface GetDomainRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;
}

export interface GetDomainResponse {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the Cases domain.</p>
   */
  domainArn: string | undefined;

  /**
   * <p>The name of the Cases domain.</p>
   */
  name: string | undefined;

  /**
   * <p>The timestamp when the Cases domain was created.</p>
   */
  createdTime: Date | undefined;

  /**
   * <p>The status of the Cases domain.</p>
   */
  domainStatus: DomainStatus | string | undefined;

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

export interface ListDomainsRequest {
  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * <p>Object for the summarized details of the domain.</p>
 */
export interface DomainSummary {
  /**
   * <p>The unique identifier of the domain.</p>
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain.</p>
   */
  domainArn: string | undefined;

  /**
   * <p>The name of the domain.</p>
   */
  name: string | undefined;
}

export interface ListDomainsResponse {
  /**
   * <p>The Cases domain.</p>
   */
  domains: DomainSummary[] | undefined;

  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;
}

export interface PutCaseEventConfigurationRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>Configuration to enable EventBridge case event delivery and determine what data is
   *       delivered.</p>
   */
  eventBridge: EventBridgeConfiguration | undefined;
}

export interface PutCaseEventConfigurationResponse {}

export interface BatchGetFieldRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>A list of unique field identifiers. </p>
   */
  fields: FieldIdentifier[] | undefined;
}

/**
 * <p>Object for errors on fields.</p>
 */
export interface FieldError {
  /**
   * <p>The field identifier that caused the error.</p>
   */
  id: string | undefined;

  /**
   * <p>The error code from getting a field.</p>
   */
  errorCode: string | undefined;

  /**
   * <p>The error message from getting a field.</p>
   */
  message?: string;
}

export enum FieldNamespace {
  CUSTOM = "Custom",
  SYSTEM = "System",
}

export enum FieldType {
  BOOLEAN = "Boolean",
  DATE_TIME = "DateTime",
  NUMBER = "Number",
  SINGLE_SELECT = "SingleSelect",
  TEXT = "Text",
}

/**
 * <p>Object to store detailed field information.</p>
 */
export interface GetFieldResponse {
  /**
   * <p>Unique identifier of the field.</p>
   */
  fieldId: string | undefined;

  /**
   * <p>Name of the field.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the field.</p>
   */
  fieldArn: string | undefined;

  /**
   * <p>Description of the field.</p>
   */
  description?: string;

  /**
   * <p>Type of the field.</p>
   */
  type: FieldType | string | undefined;

  /**
   * <p>Namespace of the field.</p>
   */
  namespace: FieldNamespace | string | undefined;

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

export interface BatchGetFieldResponse {
  /**
   * <p>A list of detailed field information. </p>
   */
  fields: GetFieldResponse[] | undefined;

  /**
   * <p>A list of field errors. </p>
   */
  errors: FieldError[] | undefined;
}

/**
 * <p>Object for field Options information.</p>
 */
export interface FieldOption {
  /**
   * <p>
   *             <code>FieldOptionName</code> has max length 100 and disallows trailing spaces.</p>
   */
  name: string | undefined;

  /**
   * <p>
   *             <code>FieldOptionValue</code> has max length 100 and must be alphanumeric with hyphens and
   *       underscores.</p>
   */
  value: string | undefined;

  /**
   * <p>Describes whether the <code>FieldOption</code> is active (displayed) or inactive.</p>
   */
  active: boolean | undefined;
}

export interface BatchPutFieldOptionsRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of a field.</p>
   */
  fieldId: string | undefined;

  /**
   * <p>A list of <code>FieldOption</code> objects.</p>
   */
  options: FieldOption[] | undefined;
}

/**
 * <p>Object for field Options errors.</p>
 */
export interface FieldOptionError {
  /**
   * <p>Error message from creating or updating field option.</p>
   */
  message: string | undefined;

  /**
   * <p>Error code from creating or updating field option.</p>
   */
  errorCode: string | undefined;

  /**
   * <p>The field option value that caused the error.</p>
   */
  value: string | undefined;
}

export interface BatchPutFieldOptionsResponse {
  /**
   * <p>A list of field errors. </p>
   */
  errors?: FieldOptionError[];
}

export interface CreateFieldRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>The name of the field.</p>
   */
  name: string | undefined;

  /**
   * <p>Defines the data type, some system constraints, and default display of the field.</p>
   */
  type: FieldType | string | undefined;

  /**
   * <p>The description of the field.</p>
   */
  description?: string;
}

export interface CreateFieldResponse {
  /**
   * <p>The unique identifier of a field.</p>
   */
  fieldId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the field.</p>
   */
  fieldArn: string | undefined;
}

export interface ListFieldOptionsRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of a field.</p>
   */
  fieldId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of <code>FieldOption</code> values to filter on for
   *       <code>ListFieldOptions</code>.</p>
   */
  values?: string[];
}

export interface ListFieldOptionsResponse {
  /**
   * <p>A list of <code>FieldOption</code> objects.</p>
   */
  options: FieldOption[] | undefined;

  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;
}

export interface ListFieldsRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * <p>Object for the summarized details of the field.</p>
 */
export interface FieldSummary {
  /**
   * <p>The unique identifier of a field.</p>
   */
  fieldId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the field.</p>
   */
  fieldArn: string | undefined;

  /**
   * <p>Name of the field.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of a field.</p>
   */
  type: FieldType | string | undefined;

  /**
   * <p>The namespace of a field.</p>
   */
  namespace: FieldNamespace | string | undefined;
}

export interface ListFieldsResponse {
  /**
   * <p>List of detailed field information.</p>
   */
  fields: FieldSummary[] | undefined;

  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;
}

export interface UpdateFieldRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of a field.</p>
   */
  fieldId: string | undefined;

  /**
   * <p>The name of the field.</p>
   */
  name?: string;

  /**
   * <p>The description of a field.</p>
   */
  description?: string;
}

export interface UpdateFieldResponse {}

/**
 * <p>Object for field related information.</p>
 */
export interface FieldItem {
  /**
   * <p>Unique identifier of a field.</p>
   */
  id: string | undefined;
}

/**
 * <p>Object for a group of fields and associated properties.</p>
 */
export interface FieldGroup {
  /**
   * <p>Name of the field group.</p>
   */
  name?: string;

  /**
   * <p>Represents an ordered list containing field related information.</p>
   */
  fields: FieldItem[] | undefined;
}

/**
 * <p>This represents a sections within a panel or tab of the page layout.</p>
 */
export type Section = Section.FieldGroupMember | Section.$UnknownMember;

export namespace Section {
  /**
   * <p>Consists of a group of fields and associated properties.</p>
   */
  export interface FieldGroupMember {
    fieldGroup: FieldGroup;
    $unknown?: never;
  }

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
 * <p>Ordered list containing different kinds of sections that can be added. A LayoutSections
 *       object can only contain one section.</p>
 */
export interface LayoutSections {
  /**
   * <p>Ordered list containing different kinds of sections that can be added.</p>
   */
  sections?: Section[];
}

/**
 * <p>Content specific to <code>BasicLayout</code> type. It configures fields in the top panel
 *       and More Info tab of agent application. </p>
 */
export interface BasicLayout {
  /**
   * <p>This represents sections in a panel of the page layout.</p>
   */
  topPanel?: LayoutSections;

  /**
   * <p>This represents sections in a tab of the page layout.</p>
   */
  moreInfo?: LayoutSections;
}

/**
 * <p>Object to store union of different versions of layout content.</p>
 */
export type LayoutContent = LayoutContent.BasicMember | LayoutContent.$UnknownMember;

export namespace LayoutContent {
  /**
   * <p>Content specific to <code>BasicLayout</code> type. It configures fields in the top panel
   *       and More Info tab of Cases user interface.</p>
   */
  export interface BasicMember {
    basic: BasicLayout;
    $unknown?: never;
  }

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

export interface CreateLayoutRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>The name of the layout. It must be unique for the Cases domain.</p>
   */
  name: string | undefined;

  /**
   * <p>Information about which fields will be present in the layout, and information about the
   *       order of the fields.</p>
   */
  content: LayoutContent | undefined;
}

export interface CreateLayoutResponse {
  /**
   * <p>The unique identifier of the layout.</p>
   */
  layoutId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the newly created layout.</p>
   */
  layoutArn: string | undefined;
}

export interface GetLayoutRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of the layout.</p>
   */
  layoutId: string | undefined;
}

export interface GetLayoutResponse {
  /**
   * <p>The unique identifier of the layout.</p>
   */
  layoutId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the newly created layout.</p>
   */
  layoutArn: string | undefined;

  /**
   * <p>The name of the layout. It must be unique.</p>
   */
  name: string | undefined;

  /**
   * <p>Information about which fields will be present in the layout, the order of the fields, and
   *       read-only attribute of the field. </p>
   */
  content: LayoutContent | undefined;

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

export interface ListLayoutsRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * <p>Object for the summarized details of the layout.</p>
 */
export interface LayoutSummary {
  /**
   * <p>The unique identifier for of the layout.</p>
   */
  layoutId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the layout.</p>
   */
  layoutArn: string | undefined;

  /**
   * <p>The name of the layout.</p>
   */
  name: string | undefined;
}

export interface ListLayoutsResponse {
  /**
   * <p>The layouts for the domain.</p>
   */
  layouts: LayoutSummary[] | undefined;

  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;
}

export interface UpdateLayoutRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of the layout.</p>
   */
  layoutId: string | undefined;

  /**
   * <p>The name of the layout. It must be unique per domain.</p>
   */
  name?: string;

  /**
   * <p>Information about which fields will be present in the layout, the order of the fields, and
   *       a read-only attribute of the field. </p>
   */
  content?: LayoutContent;
}

export interface UpdateLayoutResponse {}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN)</p>
   */
  arn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN)</p>
   */
  arn: string | undefined;

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>Object to store configuration of layouts associated to the template.</p>
 */
export interface LayoutConfiguration {
  /**
   * <p> Unique identifier of a layout. </p>
   */
  defaultLayout?: string;
}

/**
 * <p>List of fields that must have a value provided to create a case.</p>
 */
export interface RequiredField {
  /**
   * <p>Unique identifier of a field.</p>
   */
  fieldId: string | undefined;
}

export enum TemplateStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}

export interface CreateTemplateRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>A name for the template. It must be unique per domain.</p>
   */
  name: string | undefined;

  /**
   * <p>A brief description of the template.</p>
   */
  description?: string;

  /**
   * <p>Configuration of layouts associated to the template.</p>
   */
  layoutConfiguration?: LayoutConfiguration;

  /**
   * <p>A list of fields that must contain a value for a case to be successfully created with this
   *       template.</p>
   */
  requiredFields?: RequiredField[];

  /**
   * <p>The status of the template.</p>
   */
  status?: TemplateStatus | string;
}

export interface CreateTemplateResponse {
  /**
   * <p>A unique identifier of a template.</p>
   */
  templateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the newly created template.</p>
   */
  templateArn: string | undefined;
}

export interface GetTemplateRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>A unique identifier of a template.</p>
   */
  templateId: string | undefined;
}

export interface GetTemplateResponse {
  /**
   * <p>A unique identifier of a template.</p>
   */
  templateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  templateArn: string | undefined;

  /**
   * <p>The name of the template.</p>
   */
  name: string | undefined;

  /**
   * <p>A brief description of the template.</p>
   */
  description?: string;

  /**
   * <p>Configuration of layouts associated to the template.</p>
   */
  layoutConfiguration?: LayoutConfiguration;

  /**
   * <p>A list of fields that must contain a value for a case to be successfully created with this
   *       template.</p>
   */
  requiredFields?: RequiredField[];

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The status of the template.</p>
   */
  status: TemplateStatus | string | undefined;
}

export interface ListTemplatesRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of status values to filter on.</p>
   */
  status?: (TemplateStatus | string)[];
}

/**
 * <p>Template summary information.</p>
 */
export interface TemplateSummary {
  /**
   * <p>The unique identifier for the template.</p>
   */
  templateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  templateArn: string | undefined;

  /**
   * <p>The template name.</p>
   */
  name: string | undefined;

  /**
   * <p>The status of the template.</p>
   */
  status: TemplateStatus | string | undefined;
}

export interface ListTemplatesResponse {
  /**
   * <p>List of template summary objects.</p>
   */
  templates: TemplateSummary[] | undefined;

  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   */
  nextToken?: string;
}

export interface UpdateTemplateRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>A unique identifier for the template.</p>
   */
  templateId: string | undefined;

  /**
   * <p>The name of the template. It must be unique per domain.</p>
   */
  name?: string;

  /**
   * <p>A brief description of the template.</p>
   */
  description?: string;

  /**
   * <p>Configuration of layouts associated to the template.</p>
   */
  layoutConfiguration?: LayoutConfiguration;

  /**
   * <p>A list of fields that must contain a value for a case to be successfully created with this
   *       template.</p>
   */
  requiredFields?: RequiredField[];

  /**
   * <p>The status of the template.</p>
   */
  status?: TemplateStatus | string;
}

export interface UpdateTemplateResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN)</p>
   */
  arn: string | undefined;

  /**
   * <p>List of tag keys.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * <p>A filter for cases. Only one value can be provided.</p>
 */
export type CaseFilter =
  | CaseFilter.AndAllMember
  | CaseFilter.FieldMember
  | CaseFilter.NotMember
  | CaseFilter.$UnknownMember;

export namespace CaseFilter {
  /**
   * <p>A list of fields to filter on.</p>
   */
  export interface FieldMember {
    field: FieldFilter;
    not?: never;
    andAll?: never;
    $unknown?: never;
  }

  /**
   * <p>A filter for cases. Only one value can be provided.</p>
   */
  export interface NotMember {
    field?: never;
    not: CaseFilter;
    andAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides "and all" filtering.</p>
   */
  export interface AndAllMember {
    field?: never;
    not?: never;
    andAll: CaseFilter[];
    $unknown?: never;
  }

  export interface $UnknownMember {
    field?: never;
    not?: never;
    andAll?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    field: (value: FieldFilter) => T;
    not: (value: CaseFilter) => T;
    andAll: (value: CaseFilter[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CaseFilter, visitor: Visitor<T>): T => {
    if (value.field !== undefined) return visitor.field(value.field);
    if (value.not !== undefined) return visitor.not(value.not);
    if (value.andAll !== undefined) return visitor.andAll(value.andAll);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export interface SearchCasesRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   */
  domainId: string | undefined;

  /**
   * <p>The maximum number of cases to return. The current maximum supported value is 25. This is
   *       also the default value when no other value is provided.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A word or phrase used to perform a quick search.</p>
   */
  searchTerm?: string;

  /**
   * <p>A list of filter objects.</p>
   */
  filter?: CaseFilter;

  /**
   * <p>A list of sorts where each sort specifies a field and their sort order to be applied to
   *       the results. </p>
   */
  sorts?: Sort[];

  /**
   * <p>The list of field identifiers to be returned as part of the response.</p>
   */
  fields?: FieldIdentifier[];
}

/**
 * @internal
 */
export const FieldValueUnionFilterSensitiveLog = (obj: FieldValueUnion): any => {
  if (obj.stringValue !== undefined) return { stringValue: obj.stringValue };
  if (obj.doubleValue !== undefined) return { doubleValue: obj.doubleValue };
  if (obj.booleanValue !== undefined) return { booleanValue: obj.booleanValue };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const FieldValueFilterSensitiveLog = (obj: FieldValue): any => ({
  ...obj,
  ...(obj.value && { value: FieldValueUnionFilterSensitiveLog(obj.value) }),
});

/**
 * @internal
 */
export const CreateCaseRequestFilterSensitiveLog = (obj: CreateCaseRequest): any => ({
  ...obj,
  ...(obj.fields && { fields: obj.fields.map((item) => FieldValueFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateCaseResponseFilterSensitiveLog = (obj: CreateCaseResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldIdentifierFilterSensitiveLog = (obj: FieldIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCaseRequestFilterSensitiveLog = (obj: GetCaseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCaseResponseFilterSensitiveLog = (obj: GetCaseResponse): any => ({
  ...obj,
  ...(obj.fields && { fields: obj.fields.map((item) => FieldValueFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListCasesForContactRequestFilterSensitiveLog = (obj: ListCasesForContactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CaseSummaryFilterSensitiveLog = (obj: CaseSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCasesForContactResponseFilterSensitiveLog = (obj: ListCasesForContactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CommentContentFilterSensitiveLog = (obj: CommentContent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContactFilterSensitiveLog = (obj: Contact): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RelatedItemInputContentFilterSensitiveLog = (obj: RelatedItemInputContent): any => {
  if (obj.contact !== undefined) return { contact: ContactFilterSensitiveLog(obj.contact) };
  if (obj.comment !== undefined) return { comment: CommentContentFilterSensitiveLog(obj.comment) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateRelatedItemRequestFilterSensitiveLog = (obj: CreateRelatedItemRequest): any => ({
  ...obj,
  ...(obj.content && { content: RelatedItemInputContentFilterSensitiveLog(obj.content) }),
});

/**
 * @internal
 */
export const CreateRelatedItemResponseFilterSensitiveLog = (obj: CreateRelatedItemResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CommentFilterFilterSensitiveLog = (obj: CommentFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContactFilterFilterSensitiveLog = (obj: ContactFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RelatedItemTypeFilterFilterSensitiveLog = (obj: RelatedItemTypeFilter): any => {
  if (obj.contact !== undefined) return { contact: ContactFilterFilterSensitiveLog(obj.contact) };
  if (obj.comment !== undefined) return { comment: CommentFilterFilterSensitiveLog(obj.comment) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SearchRelatedItemsRequestFilterSensitiveLog = (obj: SearchRelatedItemsRequest): any => ({
  ...obj,
  ...(obj.filters && { filters: obj.filters.map((item) => RelatedItemTypeFilterFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ContactContentFilterSensitiveLog = (obj: ContactContent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RelatedItemContentFilterSensitiveLog = (obj: RelatedItemContent): any => {
  if (obj.contact !== undefined) return { contact: ContactContentFilterSensitiveLog(obj.contact) };
  if (obj.comment !== undefined) return { comment: CommentContentFilterSensitiveLog(obj.comment) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SearchRelatedItemsResponseItemFilterSensitiveLog = (obj: SearchRelatedItemsResponseItem): any => ({
  ...obj,
  ...(obj.content && { content: RelatedItemContentFilterSensitiveLog(obj.content) }),
});

/**
 * @internal
 */
export const SearchRelatedItemsResponseFilterSensitiveLog = (obj: SearchRelatedItemsResponse): any => ({
  ...obj,
  ...(obj.relatedItems && {
    relatedItems: obj.relatedItems.map((item) => SearchRelatedItemsResponseItemFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const FieldFilterFilterSensitiveLog = (obj: FieldFilter): any => {
  if (obj.equalTo !== undefined) return { equalTo: FieldValueFilterSensitiveLog(obj.equalTo) };
  if (obj.contains !== undefined) return { contains: FieldValueFilterSensitiveLog(obj.contains) };
  if (obj.greaterThan !== undefined) return { greaterThan: FieldValueFilterSensitiveLog(obj.greaterThan) };
  if (obj.greaterThanOrEqualTo !== undefined)
    return { greaterThanOrEqualTo: FieldValueFilterSensitiveLog(obj.greaterThanOrEqualTo) };
  if (obj.lessThan !== undefined) return { lessThan: FieldValueFilterSensitiveLog(obj.lessThan) };
  if (obj.lessThanOrEqualTo !== undefined)
    return { lessThanOrEqualTo: FieldValueFilterSensitiveLog(obj.lessThanOrEqualTo) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SortFilterSensitiveLog = (obj: Sort): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchCasesResponseItemFilterSensitiveLog = (obj: SearchCasesResponseItem): any => ({
  ...obj,
  ...(obj.fields && { fields: obj.fields.map((item) => FieldValueFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SearchCasesResponseFilterSensitiveLog = (obj: SearchCasesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCaseRequestFilterSensitiveLog = (obj: UpdateCaseRequest): any => ({
  ...obj,
  ...(obj.fields && { fields: obj.fields.map((item) => FieldValueFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateCaseResponseFilterSensitiveLog = (obj: UpdateCaseResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDomainRequestFilterSensitiveLog = (obj: CreateDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDomainResponseFilterSensitiveLog = (obj: CreateDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCaseEventConfigurationRequestFilterSensitiveLog = (obj: GetCaseEventConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CaseEventIncludedDataFilterSensitiveLog = (obj: CaseEventIncludedData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RelatedItemEventIncludedDataFilterSensitiveLog = (obj: RelatedItemEventIncludedData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventIncludedDataFilterSensitiveLog = (obj: EventIncludedData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventBridgeConfigurationFilterSensitiveLog = (obj: EventBridgeConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCaseEventConfigurationResponseFilterSensitiveLog = (obj: GetCaseEventConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDomainRequestFilterSensitiveLog = (obj: GetDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDomainResponseFilterSensitiveLog = (obj: GetDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainsRequestFilterSensitiveLog = (obj: ListDomainsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainSummaryFilterSensitiveLog = (obj: DomainSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainsResponseFilterSensitiveLog = (obj: ListDomainsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutCaseEventConfigurationRequestFilterSensitiveLog = (obj: PutCaseEventConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutCaseEventConfigurationResponseFilterSensitiveLog = (obj: PutCaseEventConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetFieldRequestFilterSensitiveLog = (obj: BatchGetFieldRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldErrorFilterSensitiveLog = (obj: FieldError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFieldResponseFilterSensitiveLog = (obj: GetFieldResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetFieldResponseFilterSensitiveLog = (obj: BatchGetFieldResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldOptionFilterSensitiveLog = (obj: FieldOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchPutFieldOptionsRequestFilterSensitiveLog = (obj: BatchPutFieldOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldOptionErrorFilterSensitiveLog = (obj: FieldOptionError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchPutFieldOptionsResponseFilterSensitiveLog = (obj: BatchPutFieldOptionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFieldRequestFilterSensitiveLog = (obj: CreateFieldRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFieldResponseFilterSensitiveLog = (obj: CreateFieldResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFieldOptionsRequestFilterSensitiveLog = (obj: ListFieldOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFieldOptionsResponseFilterSensitiveLog = (obj: ListFieldOptionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFieldsRequestFilterSensitiveLog = (obj: ListFieldsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldSummaryFilterSensitiveLog = (obj: FieldSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFieldsResponseFilterSensitiveLog = (obj: ListFieldsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFieldRequestFilterSensitiveLog = (obj: UpdateFieldRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFieldResponseFilterSensitiveLog = (obj: UpdateFieldResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldItemFilterSensitiveLog = (obj: FieldItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldGroupFilterSensitiveLog = (obj: FieldGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SectionFilterSensitiveLog = (obj: Section): any => {
  if (obj.fieldGroup !== undefined) return { fieldGroup: FieldGroupFilterSensitiveLog(obj.fieldGroup) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const LayoutSectionsFilterSensitiveLog = (obj: LayoutSections): any => ({
  ...obj,
  ...(obj.sections && { sections: obj.sections.map((item) => SectionFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BasicLayoutFilterSensitiveLog = (obj: BasicLayout): any => ({
  ...obj,
  ...(obj.topPanel && { topPanel: LayoutSectionsFilterSensitiveLog(obj.topPanel) }),
  ...(obj.moreInfo && { moreInfo: LayoutSectionsFilterSensitiveLog(obj.moreInfo) }),
});

/**
 * @internal
 */
export const LayoutContentFilterSensitiveLog = (obj: LayoutContent): any => {
  if (obj.basic !== undefined) return { basic: BasicLayoutFilterSensitiveLog(obj.basic) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateLayoutRequestFilterSensitiveLog = (obj: CreateLayoutRequest): any => ({
  ...obj,
  ...(obj.content && { content: LayoutContentFilterSensitiveLog(obj.content) }),
});

/**
 * @internal
 */
export const CreateLayoutResponseFilterSensitiveLog = (obj: CreateLayoutResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLayoutRequestFilterSensitiveLog = (obj: GetLayoutRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLayoutResponseFilterSensitiveLog = (obj: GetLayoutResponse): any => ({
  ...obj,
  ...(obj.content && { content: LayoutContentFilterSensitiveLog(obj.content) }),
});

/**
 * @internal
 */
export const ListLayoutsRequestFilterSensitiveLog = (obj: ListLayoutsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LayoutSummaryFilterSensitiveLog = (obj: LayoutSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLayoutsResponseFilterSensitiveLog = (obj: ListLayoutsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLayoutRequestFilterSensitiveLog = (obj: UpdateLayoutRequest): any => ({
  ...obj,
  ...(obj.content && { content: LayoutContentFilterSensitiveLog(obj.content) }),
});

/**
 * @internal
 */
export const UpdateLayoutResponseFilterSensitiveLog = (obj: UpdateLayoutResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LayoutConfigurationFilterSensitiveLog = (obj: LayoutConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequiredFieldFilterSensitiveLog = (obj: RequiredField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTemplateRequestFilterSensitiveLog = (obj: CreateTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTemplateResponseFilterSensitiveLog = (obj: CreateTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTemplateRequestFilterSensitiveLog = (obj: GetTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTemplateResponseFilterSensitiveLog = (obj: GetTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTemplatesRequestFilterSensitiveLog = (obj: ListTemplatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateSummaryFilterSensitiveLog = (obj: TemplateSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTemplatesResponseFilterSensitiveLog = (obj: ListTemplatesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTemplateRequestFilterSensitiveLog = (obj: UpdateTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTemplateResponseFilterSensitiveLog = (obj: UpdateTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CaseFilterFilterSensitiveLog = (obj: CaseFilter): any => {
  if (obj.field !== undefined) return { field: FieldFilterFilterSensitiveLog(obj.field) };
  if (obj.not !== undefined) return { not: CaseFilterFilterSensitiveLog(obj.not) };
  if (obj.andAll !== undefined) return { andAll: obj.andAll.map((item) => CaseFilterFilterSensitiveLog(item)) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SearchCasesRequestFilterSensitiveLog = (obj: SearchCasesRequest): any => ({
  ...obj,
  ...(obj.filter && { filter: CaseFilterFilterSensitiveLog(obj.filter) }),
});
