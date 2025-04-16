// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ConnectCasesServiceException as __BaseException } from "./ConnectCasesServiceException";

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
 * <p>The requested operation would cause a conflict with the current state of a service
 *       resource associated with the request. Resolve the conflict before retrying this request. See
 *       the accompanying error message for details.</p>
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
 * <p>An empty value. You cannot set <code>EmptyFieldValue</code> on a field that is required on
 *       a case template.</p>
 *          <p>This structure will never have any data members. It signifies an empty value on a case
 *       field.</p>
 * @public
 */
export interface EmptyFieldValue {}

/**
 * <p>Object to store union of Field values.</p>
 *          <note>
 *             <p>The <code>Summary</code> system field accepts 3000 characters while all other fields
 *         accept 500 characters.</p>
 *          </note>
 * @public
 */
export type FieldValueUnion =
  | FieldValueUnion.BooleanValueMember
  | FieldValueUnion.DoubleValueMember
  | FieldValueUnion.EmptyValueMember
  | FieldValueUnion.StringValueMember
  | FieldValueUnion.UserArnValueMember
  | FieldValueUnion.$UnknownMember;

/**
 * @public
 */
export namespace FieldValueUnion {
  /**
   * <p>String value type.</p>
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    doubleValue?: never;
    booleanValue?: never;
    emptyValue?: never;
    userArnValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Can be either null, or have a Double number value type. Only one value can be
   *       provided.</p>
   * @public
   */
  export interface DoubleValueMember {
    stringValue?: never;
    doubleValue: number;
    booleanValue?: never;
    emptyValue?: never;
    userArnValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Can be either null, or have a Boolean value type. Only one value can be provided.</p>
   * @public
   */
  export interface BooleanValueMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue: boolean;
    emptyValue?: never;
    userArnValue?: never;
    $unknown?: never;
  }

  /**
   * <p>An empty value.</p>
   * @public
   */
  export interface EmptyValueMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue?: never;
    emptyValue: EmptyFieldValue;
    userArnValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents the user that performed the audit.</p>
   * @public
   */
  export interface UserArnValueMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue?: never;
    emptyValue?: never;
    userArnValue: string;
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
    userArnValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    stringValue: (value: string) => T;
    doubleValue: (value: number) => T;
    booleanValue: (value: boolean) => T;
    emptyValue: (value: EmptyFieldValue) => T;
    userArnValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FieldValueUnion, visitor: Visitor<T>): T => {
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.doubleValue !== undefined) return visitor.doubleValue(value.doubleValue);
    if (value.booleanValue !== undefined) return visitor.booleanValue(value.booleanValue);
    if (value.emptyValue !== undefined) return visitor.emptyValue(value.emptyValue);
    if (value.userArnValue !== undefined) return visitor.userArnValue(value.userArnValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Object for case field values.</p>
 * @public
 */
export interface FieldValue {
  /**
   * <p>Unique identifier of a field.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Union of potential field value types.</p>
   * @public
   */
  value: FieldValueUnion | undefined;
}

/**
 * <p>Represents the identity of the person who performed the action.</p>
 * @public
 */
export type UserUnion = UserUnion.UserArnMember | UserUnion.$UnknownMember;

/**
 * @public
 */
export namespace UserUnion {
  /**
   * <p>Represents the Amazon Connect ARN of the user.</p>
   * @public
   */
  export interface UserArnMember {
    userArn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    userArn?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    userArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UserUnion, visitor: Visitor<T>): T => {
    if (value.userArn !== undefined) return visitor.userArn(value.userArn);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateCaseRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>A unique identifier of a template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>An array of objects with field ID (matching ListFields/DescribeField) and value union
   *       data.</p>
   * @public
   */
  fields: FieldValue[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Represents the identity of the person who performed the action.</p>
   * @public
   */
  performedBy?: UserUnion | undefined;
}

/**
 * @public
 */
export interface CreateCaseResponse {
  /**
   * <p>A unique identifier of the case.</p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the case.</p>
   * @public
   */
  caseArn: string | undefined;
}

/**
 * <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>Advice to clients on when the call can be safely retried.</p>
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
 * <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Unique identifier of the resource affected.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Type of the resource affected.</p>
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
 * <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
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
 * <p>The request isn't valid. Check the syntax and try again.</p>
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
 * <p>Object for unique identifier of a field.</p>
 * @public
 */
export interface FieldIdentifier {
  /**
   * <p>Unique identifier of a field.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetCaseRequest {
  /**
   * <p>A unique identifier of the case.</p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>A list of unique field identifiers. </p>
   * @public
   */
  fields: FieldIdentifier[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCaseResponse {
  /**
   * <p>A list of detailed field information. </p>
   * @public
   */
  fields: FieldValue[] | undefined;

  /**
   * <p>A unique identifier of a template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetCaseAuditEventsRequest {
  /**
   * <p>A unique identifier of the case.</p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>The unique identifier of the Cases domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The maximum number of audit events to return. The current maximum supported value is 25.
   *       This is also the default when no other value is provided.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *       the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Object to store union of Field values.</p>
 * @public
 */
export type AuditEventFieldValueUnion =
  | AuditEventFieldValueUnion.BooleanValueMember
  | AuditEventFieldValueUnion.DoubleValueMember
  | AuditEventFieldValueUnion.EmptyValueMember
  | AuditEventFieldValueUnion.StringValueMember
  | AuditEventFieldValueUnion.UserArnValueMember
  | AuditEventFieldValueUnion.$UnknownMember;

/**
 * @public
 */
export namespace AuditEventFieldValueUnion {
  /**
   * <p>Can be either null, or have a String value type. Only one value can be provided.</p>
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    doubleValue?: never;
    booleanValue?: never;
    emptyValue?: never;
    userArnValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Can be either null, or have a Double value type. Only one value can be provided.</p>
   * @public
   */
  export interface DoubleValueMember {
    stringValue?: never;
    doubleValue: number;
    booleanValue?: never;
    emptyValue?: never;
    userArnValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Can be either null, or have a Boolean value type. Only one value can be provided.</p>
   * @public
   */
  export interface BooleanValueMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue: boolean;
    emptyValue?: never;
    userArnValue?: never;
    $unknown?: never;
  }

  /**
   * <p>An empty value. You cannot set <code>EmptyFieldValue</code> on a field that is required on
   *       a case template.</p>
   *          <p>This structure will never have any data members. It signifies an empty value on a case
   *       field.</p>
   * @public
   */
  export interface EmptyValueMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue?: never;
    emptyValue: EmptyFieldValue;
    userArnValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Can be either null, or have a String value type formatted as an ARN. Only one value can be
   *       provided.</p>
   * @public
   */
  export interface UserArnValueMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue?: never;
    emptyValue?: never;
    userArnValue: string;
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
    userArnValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    stringValue: (value: string) => T;
    doubleValue: (value: number) => T;
    booleanValue: (value: boolean) => T;
    emptyValue: (value: EmptyFieldValue) => T;
    userArnValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AuditEventFieldValueUnion, visitor: Visitor<T>): T => {
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.doubleValue !== undefined) return visitor.doubleValue(value.doubleValue);
    if (value.booleanValue !== undefined) return visitor.booleanValue(value.booleanValue);
    if (value.emptyValue !== undefined) return visitor.emptyValue(value.emptyValue);
    if (value.userArnValue !== undefined) return visitor.userArnValue(value.userArnValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Fields for audit event.</p>
 * @public
 */
export interface AuditEventField {
  /**
   * <p>Unique identifier of field in an Audit History entry.</p>
   * @public
   */
  eventFieldId: string | undefined;

  /**
   * <p>Union of potential field value types.</p>
   * @public
   */
  oldValue?: AuditEventFieldValueUnion | undefined;

  /**
   * <p>Union of potential field value types.</p>
   * @public
   */
  newValue: AuditEventFieldValueUnion | undefined;
}

/**
 * <p>Information of the user which performed the audit.</p>
 * @public
 */
export interface AuditEventPerformedBy {
  /**
   * <p>Represents the identity of the person who performed the action.</p>
   * @public
   */
  user?: UserUnion | undefined;

  /**
   * <p>Unique identifier of an IAM role.</p>
   * @public
   */
  iamPrincipalArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RelatedItemType = {
  COMMENT: "Comment",
  CONTACT: "Contact",
  FILE: "File",
  SLA: "Sla",
} as const;

/**
 * @public
 */
export type RelatedItemType = (typeof RelatedItemType)[keyof typeof RelatedItemType];

/**
 * @public
 * @enum
 */
export const AuditEventType = {
  CASE_CREATED: "Case.Created",
  CASE_UPDATED: "Case.Updated",
  RELATED_ITEM_CREATED: "RelatedItem.Created",
} as const;

/**
 * @public
 */
export type AuditEventType = (typeof AuditEventType)[keyof typeof AuditEventType];

/**
 * <p>Represents the content of a particular audit event.</p>
 * @public
 */
export interface AuditEvent {
  /**
   * <p>Unique identifier of a case audit history event.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The Type of an audit history event.</p>
   * @public
   */
  type: AuditEventType | undefined;

  /**
   * <p>The Type of the related item.</p>
   * @public
   */
  relatedItemType?: RelatedItemType | undefined;

  /**
   * <p>Time at which an Audit History event took place.</p>
   * @public
   */
  performedTime: Date | undefined;

  /**
   * <p>A list of Case Audit History event fields.</p>
   * @public
   */
  fields: AuditEventField[] | undefined;

  /**
   * <p>Information of the user which performed the audit.</p>
   * @public
   */
  performedBy?: AuditEventPerformedBy | undefined;
}

/**
 * @public
 */
export interface GetCaseAuditEventsResponse {
  /**
   * <p>The token for the next set of results. This is null if there are no more results to
   *       return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of case audits where each represents a particular edit of the case.</p>
   * @public
   */
  auditEvents: AuditEvent[] | undefined;
}

/**
 * @public
 */
export interface ListCasesForContactRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>A unique identifier of a contact in Amazon Connect.</p>
   * @public
   */
  contactArn: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Case summary information.</p>
 * @public
 */
export interface CaseSummary {
  /**
   * <p>A unique identifier of the case.</p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>A unique identifier of a template.</p>
   * @public
   */
  templateId: string | undefined;
}

/**
 * @public
 */
export interface ListCasesForContactResponse {
  /**
   * <p>A list of Case summary information.</p>
   * @public
   */
  cases: CaseSummary[] | undefined;

  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
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
 * <p>Represents the content of a <code>Comment</code> to be returned to agents.</p>
 * @public
 */
export interface CommentContent {
  /**
   * <p>Text in the body of a <code>Comment</code> on a case.</p>
   * @public
   */
  body: string | undefined;

  /**
   * <p>Type of the text in the box of a <code>Comment</code> on a case.</p>
   * @public
   */
  contentType: CommentBodyTextType | undefined;
}

/**
 * <p>An object that represents an Amazon Connect contact object. </p>
 * @public
 */
export interface Contact {
  /**
   * <p>A unique identifier of a contact in Amazon Connect.</p>
   * @public
   */
  contactArn: string | undefined;
}

/**
 * <p>An object that represents a content of an Amazon Connect file object.</p>
 * @public
 */
export interface FileContent {
  /**
   * <p>The Amazon Resource Name (ARN) of a File in Amazon Connect.</p>
   * @public
   */
  fileArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SlaType = {
  CASE_FIELD: "CaseField",
} as const;

/**
 * @public
 */
export type SlaType = (typeof SlaType)[keyof typeof SlaType];

/**
 * <p>Represents the input configuration of an SLA being created.</p>
 * @public
 */
export interface SlaInputConfiguration {
  /**
   * <p>Name of an SLA.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Type of SLA.</p>
   * @public
   */
  type: SlaType | undefined;

  /**
   * <p>Unique identifier of a field.</p>
   * @public
   */
  fieldId?: string | undefined;

  /**
   * <p>Represents a list of target field values for the fieldId specified in SlaInputConfiguration.
   *       The SLA is considered met if any one of these target field values matches the actual field value.</p>
   * @public
   */
  targetFieldValues?: FieldValueUnion[] | undefined;

  /**
   * <p>Target duration in minutes within which an SLA should be completed.</p>
   * @public
   */
  targetSlaMinutes: number | undefined;
}

/**
 * <p>Represents the content of an SLA.</p>
 * @public
 */
export type SlaInputContent = SlaInputContent.SlaInputConfigurationMember | SlaInputContent.$UnknownMember;

/**
 * @public
 */
export namespace SlaInputContent {
  /**
   * <p>Represents an input SLA configuration.</p>
   * @public
   */
  export interface SlaInputConfigurationMember {
    slaInputConfiguration: SlaInputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    slaInputConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    slaInputConfiguration: (value: SlaInputConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SlaInputContent, visitor: Visitor<T>): T => {
    if (value.slaInputConfiguration !== undefined) return visitor.slaInputConfiguration(value.slaInputConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Represents the content of a related item to be created.</p>
 * @public
 */
export type RelatedItemInputContent =
  | RelatedItemInputContent.CommentMember
  | RelatedItemInputContent.ContactMember
  | RelatedItemInputContent.FileMember
  | RelatedItemInputContent.SlaMember
  | RelatedItemInputContent.$UnknownMember;

/**
 * @public
 */
export namespace RelatedItemInputContent {
  /**
   * <p>Object representing a contact in Amazon Connect as an API request field.</p>
   * @public
   */
  export interface ContactMember {
    contact: Contact;
    comment?: never;
    file?: never;
    sla?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents the content of a comment to be returned to agents.</p>
   * @public
   */
  export interface CommentMember {
    contact?: never;
    comment: CommentContent;
    file?: never;
    sla?: never;
    $unknown?: never;
  }

  /**
   * <p>A file of related items.</p>
   * @public
   */
  export interface FileMember {
    contact?: never;
    comment?: never;
    file: FileContent;
    sla?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents the content of an SLA to be created.</p>
   * @public
   */
  export interface SlaMember {
    contact?: never;
    comment?: never;
    file?: never;
    sla: SlaInputContent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    contact?: never;
    comment?: never;
    file?: never;
    sla?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    contact: (value: Contact) => T;
    comment: (value: CommentContent) => T;
    file: (value: FileContent) => T;
    sla: (value: SlaInputContent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RelatedItemInputContent, visitor: Visitor<T>): T => {
    if (value.contact !== undefined) return visitor.contact(value.contact);
    if (value.comment !== undefined) return visitor.comment(value.comment);
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sla !== undefined) return visitor.sla(value.sla);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateRelatedItemRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>A unique identifier of the case.</p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>The type of a related item.</p>
   * @public
   */
  type: RelatedItemType | undefined;

  /**
   * <p>The content of a related item to be created.</p>
   * @public
   */
  content: RelatedItemInputContent | undefined;

  /**
   * <p>Represents the creator of the related item.</p>
   * @public
   */
  performedBy?: UserUnion | undefined;
}

/**
 * @public
 */
export interface CreateRelatedItemResponse {
  /**
   * <p>The unique identifier of the related item.</p>
   * @public
   */
  relatedItemId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the related item.</p>
   * @public
   */
  relatedItemArn: string | undefined;
}

/**
 * <p>The service quota has been exceeded. For a list of service quotas, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect
 *         Administrator Guide</i>.</p>
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
 * <p>A filter for related items of type <code>Comment</code>.</p>
 * @public
 */
export interface CommentFilter {}

/**
 * <p>A filter for related items of type <code>Contact</code>.</p>
 * @public
 */
export interface ContactFilter {
  /**
   * <p>A list of channels to filter on for related items of type <code>Contact</code>.</p>
   * @public
   */
  channel?: string[] | undefined;

  /**
   * <p>A unique identifier of a contact in Amazon Connect.</p>
   * @public
   */
  contactArn?: string | undefined;
}

/**
 * <p>A filter for related items of type <code>File</code>.</p>
 * @public
 */
export interface FileFilter {
  /**
   * <p>The Amazon Resource Name (ARN) of the file.</p>
   * @public
   */
  fileArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SlaStatus = {
  ACTIVE: "Active",
  MET: "Met",
  NOT_MET: "NotMet",
  OVERDUE: "Overdue",
} as const;

/**
 * @public
 */
export type SlaStatus = (typeof SlaStatus)[keyof typeof SlaStatus];

/**
 * <p>A filter for related items of type <code>SLA</code>.</p>
 * @public
 */
export interface SlaFilter {
  /**
   * <p>Name of an SLA.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Status of an SLA.</p>
   * @public
   */
  status?: SlaStatus | undefined;
}

/**
 * <p>The list of types of related items and their parameters to use for filtering.</p>
 * @public
 */
export type RelatedItemTypeFilter =
  | RelatedItemTypeFilter.CommentMember
  | RelatedItemTypeFilter.ContactMember
  | RelatedItemTypeFilter.FileMember
  | RelatedItemTypeFilter.SlaMember
  | RelatedItemTypeFilter.$UnknownMember;

/**
 * @public
 */
export namespace RelatedItemTypeFilter {
  /**
   * <p>A filter for related items of type <code>Contact</code>.</p>
   * @public
   */
  export interface ContactMember {
    contact: ContactFilter;
    comment?: never;
    file?: never;
    sla?: never;
    $unknown?: never;
  }

  /**
   * <p>A filter for related items of type <code>Comment</code>.</p>
   * @public
   */
  export interface CommentMember {
    contact?: never;
    comment: CommentFilter;
    file?: never;
    sla?: never;
    $unknown?: never;
  }

  /**
   * <p>A filter for related items of this type of <code>File</code>.</p>
   * @public
   */
  export interface FileMember {
    contact?: never;
    comment?: never;
    file: FileFilter;
    sla?: never;
    $unknown?: never;
  }

  /**
   * <p> Filter for related items of type <code>SLA</code>.</p>
   * @public
   */
  export interface SlaMember {
    contact?: never;
    comment?: never;
    file?: never;
    sla: SlaFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    contact?: never;
    comment?: never;
    file?: never;
    sla?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    contact: (value: ContactFilter) => T;
    comment: (value: CommentFilter) => T;
    file: (value: FileFilter) => T;
    sla: (value: SlaFilter) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RelatedItemTypeFilter, visitor: Visitor<T>): T => {
    if (value.contact !== undefined) return visitor.contact(value.contact);
    if (value.comment !== undefined) return visitor.comment(value.comment);
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sla !== undefined) return visitor.sla(value.sla);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface SearchRelatedItemsRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>A unique identifier of the case.</p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of types of related items and their parameters to use for filtering.</p>
   * @public
   */
  filters?: RelatedItemTypeFilter[] | undefined;
}

/**
 * <p>An object that represents a content of an Amazon Connect contact object.</p>
 * @public
 */
export interface ContactContent {
  /**
   * <p>A unique identifier of a contact in Amazon Connect.</p>
   * @public
   */
  contactArn: string | undefined;

  /**
   * <p>A list of channels to filter on for related items of type <code>Contact</code>.</p>
   * @public
   */
  channel: string | undefined;

  /**
   * <p>The difference between the <code>InitiationTimestamp</code> and the
   *         <code>DisconnectTimestamp</code> of the contact.</p>
   * @public
   */
  connectedToSystemTime: Date | undefined;
}

/**
 * <p>Represents an SLA configuration.</p>
 * @public
 */
export interface SlaConfiguration {
  /**
   * <p>Name of an SLA.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Type of SLA.</p>
   * @public
   */
  type: SlaType | undefined;

  /**
   * <p>Status of an SLA.</p>
   * @public
   */
  status: SlaStatus | undefined;

  /**
   * <p>Unique identifier of a field.</p>
   * @public
   */
  fieldId?: string | undefined;

  /**
   * <p>Represents a list of target field values for the fieldId specified in SlaConfiguration.</p>
   * @public
   */
  targetFieldValues?: FieldValueUnion[] | undefined;

  /**
   * <p>Target time by which an SLA should be completed.</p>
   * @public
   */
  targetTime: Date | undefined;

  /**
   * <p>Time at which an SLA was completed.</p>
   * @public
   */
  completionTime?: Date | undefined;
}

/**
 * <p>Represents the content of an SLA to be returned to agents.</p>
 * @public
 */
export interface SlaContent {
  /**
   * <p>Represents an SLA configuration.</p>
   * @public
   */
  slaConfiguration: SlaConfiguration | undefined;
}

/**
 * <p>Represents the content of a particular type of related item.</p>
 * @public
 */
export type RelatedItemContent =
  | RelatedItemContent.CommentMember
  | RelatedItemContent.ContactMember
  | RelatedItemContent.FileMember
  | RelatedItemContent.SlaMember
  | RelatedItemContent.$UnknownMember;

/**
 * @public
 */
export namespace RelatedItemContent {
  /**
   * <p>Represents the content of a contact to be returned to agents.</p>
   * @public
   */
  export interface ContactMember {
    contact: ContactContent;
    comment?: never;
    file?: never;
    sla?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents the content of a comment to be returned to agents.</p>
   * @public
   */
  export interface CommentMember {
    contact?: never;
    comment: CommentContent;
    file?: never;
    sla?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents the content of a File to be returned to agents.</p>
   * @public
   */
  export interface FileMember {
    contact?: never;
    comment?: never;
    file: FileContent;
    sla?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents the content of an SLA to be returned to agents.</p>
   * @public
   */
  export interface SlaMember {
    contact?: never;
    comment?: never;
    file?: never;
    sla: SlaContent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    contact?: never;
    comment?: never;
    file?: never;
    sla?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    contact: (value: ContactContent) => T;
    comment: (value: CommentContent) => T;
    file: (value: FileContent) => T;
    sla: (value: SlaContent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RelatedItemContent, visitor: Visitor<T>): T => {
    if (value.contact !== undefined) return visitor.contact(value.contact);
    if (value.comment !== undefined) return visitor.comment(value.comment);
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sla !== undefined) return visitor.sla(value.sla);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A list of items that represent RelatedItems.</p>
 * @public
 */
export interface SearchRelatedItemsResponseItem {
  /**
   * <p>Unique identifier of a related item.</p>
   * @public
   */
  relatedItemId: string | undefined;

  /**
   * <p>Type of a related item.</p>
   * @public
   */
  type: RelatedItemType | undefined;

  /**
   * <p>Time at which a related item was associated with a case.</p>
   * @public
   */
  associationTime: Date | undefined;

  /**
   * <p>Represents the content of a particular type of related item.</p>
   * @public
   */
  content: RelatedItemContent | undefined;

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Represents the creator of the related item.</p>
   * @public
   */
  performedBy?: UserUnion | undefined;
}

/**
 * @public
 */
export interface SearchRelatedItemsResponse {
  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of items related to a case. </p>
   * @public
   */
  relatedItems: SearchRelatedItemsResponseItem[] | undefined;
}

/**
 * <p>A filter for fields. Only one value can be provided.</p>
 * @public
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
   * <p>Object containing field identifier and value information.</p>
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
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
 * <p>A structured set of sort terms.</p>
 * @public
 */
export interface Sort {
  /**
   * <p>Unique identifier of a field.</p>
   * @public
   */
  fieldId: string | undefined;

  /**
   * <p>A structured set of sort terms</p>
   * @public
   */
  sortOrder: Order | undefined;
}

/**
 * <p>A list of items that represent cases.</p>
 * @public
 */
export interface SearchCasesResponseItem {
  /**
   * <p>A unique identifier of the case.</p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>A unique identifier of a template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>List of case field values.</p>
   * @public
   */
  fields: FieldValue[] | undefined;

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchCasesResponse {
  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of case documents where each case contains the properties <code>CaseId</code> and
   *         <code>Fields</code> where each field is a complex union structure. </p>
   * @public
   */
  cases: SearchCasesResponseItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateCaseRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>A unique identifier of the case.</p>
   * @public
   */
  caseId: string | undefined;

  /**
   * <p>An array of objects with <code>fieldId</code> (matching ListFields/DescribeField) and
   *       value union data, structured identical to <code>CreateCase</code>.</p>
   * @public
   */
  fields: FieldValue[] | undefined;

  /**
   * <p>Represents the identity of the person who performed the action.</p>
   * @public
   */
  performedBy?: UserUnion | undefined;
}

/**
 * @public
 */
export interface UpdateCaseResponse {}

/**
 * <p>Object containing case rule identifier information.</p>
 * @public
 */
export interface CaseRuleIdentifier {
  /**
   * <p>Unique identifier of a case rule.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCaseRuleRequest {
  /**
   * <p>Unique identifier of a Cases domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>List of case rule identifiers.</p>
   * @public
   */
  caseRules: CaseRuleIdentifier[] | undefined;
}

/**
 * <p>Represents the left hand operand in the condition. In the Amazon Connect admin website, case rules are known as <i>case field conditions</i>.
 * For more
 *       information about case field conditions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html">Add case field conditions to a
 *         case template</a>.</p>
 * @public
 */
export type OperandOne = OperandOne.FieldIdMember | OperandOne.$UnknownMember;

/**
 * @public
 */
export namespace OperandOne {
  /**
   * <p>The field ID that this operand should take the value of.</p>
   * @public
   */
  export interface FieldIdMember {
    fieldId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    fieldId?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    fieldId: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OperandOne, visitor: Visitor<T>): T => {
    if (value.fieldId !== undefined) return visitor.fieldId(value.fieldId);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Represents an empty operand value. In the Amazon Connect admin website, case rules are known as <i>case field conditions</i>.
 * For more
 *       information about case field conditions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html">Add case field conditions to a
 *         case template</a>.</p>
 * @public
 */
export interface EmptyOperandValue {}

/**
 * <p>Represents the right hand operand in the condition. In the Amazon Connect admin website, case rules are known as <i>case field conditions</i>.
 * For more
 *       information about case field conditions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html">Add case field conditions to a
 *         case template</a>.</p>
 * @public
 */
export type OperandTwo =
  | OperandTwo.BooleanValueMember
  | OperandTwo.DoubleValueMember
  | OperandTwo.EmptyValueMember
  | OperandTwo.StringValueMember
  | OperandTwo.$UnknownMember;

/**
 * @public
 */
export namespace OperandTwo {
  /**
   * <p>String value type.</p>
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    booleanValue?: never;
    doubleValue?: never;
    emptyValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Boolean value type.</p>
   * @public
   */
  export interface BooleanValueMember {
    stringValue?: never;
    booleanValue: boolean;
    doubleValue?: never;
    emptyValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Double value type.</p>
   * @public
   */
  export interface DoubleValueMember {
    stringValue?: never;
    booleanValue?: never;
    doubleValue: number;
    emptyValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Empty value type.</p>
   * @public
   */
  export interface EmptyValueMember {
    stringValue?: never;
    booleanValue?: never;
    doubleValue?: never;
    emptyValue: EmptyOperandValue;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValue?: never;
    booleanValue?: never;
    doubleValue?: never;
    emptyValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    stringValue: (value: string) => T;
    booleanValue: (value: boolean) => T;
    doubleValue: (value: number) => T;
    emptyValue: (value: EmptyOperandValue) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OperandTwo, visitor: Visitor<T>): T => {
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.booleanValue !== undefined) return visitor.booleanValue(value.booleanValue);
    if (value.doubleValue !== undefined) return visitor.doubleValue(value.doubleValue);
    if (value.emptyValue !== undefined) return visitor.emptyValue(value.emptyValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Boolean operands for a condition. In the Amazon Connect admin website, case rules are known as <i>case field conditions</i>.
 * For more
 *       information about case field conditions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html">Add case field conditions to a
 *         case template</a>.</p>
 * @public
 */
export interface BooleanOperands {
  /**
   * <p>Represents the left hand operand in the condition.</p>
   * @public
   */
  operandOne: OperandOne | undefined;

  /**
   * <p>Represents the right hand operand in the condition.</p>
   * @public
   */
  operandTwo: OperandTwo | undefined;

  /**
   * <p>The value of the outer rule if the condition evaluates to true.</p>
   * @public
   */
  result: boolean | undefined;
}

/**
 * <p>Boolean condition for a rule. In the Amazon Connect admin website, case rules are known as <i>case field conditions</i>.
 * For more
 *       information about case field conditions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html">Add case field conditions to a
 *         case template</a>.</p>
 * @public
 */
export type BooleanCondition =
  | BooleanCondition.EqualToMember
  | BooleanCondition.NotEqualToMember
  | BooleanCondition.$UnknownMember;

/**
 * @public
 */
export namespace BooleanCondition {
  /**
   * <p>Tests that operandOne is equal to operandTwo.</p>
   * @public
   */
  export interface EqualToMember {
    equalTo: BooleanOperands;
    notEqualTo?: never;
    $unknown?: never;
  }

  /**
   * <p>Tests that operandOne is not equal to operandTwo.</p>
   * @public
   */
  export interface NotEqualToMember {
    equalTo?: never;
    notEqualTo: BooleanOperands;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    equalTo?: never;
    notEqualTo?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    equalTo: (value: BooleanOperands) => T;
    notEqualTo: (value: BooleanOperands) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: BooleanCondition, visitor: Visitor<T>): T => {
    if (value.equalTo !== undefined) return visitor.equalTo(value.equalTo);
    if (value.notEqualTo !== undefined) return visitor.notEqualTo(value.notEqualTo);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Required rule type, used to indicate whether a field is required.
 *       In the Amazon Connect admin website, case rules are known as <i>case field conditions</i>.
 * For more
 *       information about case field conditions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html">Add case field conditions to a
 *         case template</a>.</p>
 * @public
 */
export interface RequiredCaseRule {
  /**
   * <p>The value of the rule (that is, whether the field is required) should none of the conditions
   *       evaluate to true.</p>
   * @public
   */
  defaultValue: boolean | undefined;

  /**
   * <p>List of conditions for the required rule; the first condition to evaluate to true dictates
   *       the value of the rule.</p>
   * @public
   */
  conditions: BooleanCondition[] | undefined;
}

/**
 * <p>Represents what rule type should take place, under what conditions.
 *       In the Amazon Connect admin website, case rules are known as <i>case field conditions</i>.
 * For more
 *       information about case field conditions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html">Add case field conditions to a
 *         case template</a>.</p>
 * @public
 */
export type CaseRuleDetails = CaseRuleDetails.RequiredMember | CaseRuleDetails.$UnknownMember;

/**
 * @public
 */
export namespace CaseRuleDetails {
  /**
   * <p>Required rule type, used to indicate whether a field is required.</p>
   * @public
   */
  export interface RequiredMember {
    required: RequiredCaseRule;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    required?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    required: (value: RequiredCaseRule) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CaseRuleDetails, visitor: Visitor<T>): T => {
    if (value.required !== undefined) return visitor.required(value.required);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Detailed case rule information. In the Amazon Connect admin website, case rules are known as <i>case field conditions</i>.
 * For more
 *       information about case field conditions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html">Add case field conditions to a
 *         case template</a>.</p>
 * @public
 */
export interface GetCaseRuleResponse {
  /**
   * <p>Unique identifier of a case rule.</p>
   * @public
   */
  caseRuleId: string | undefined;

  /**
   * <p>Name of the case rule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the case rule.</p>
   * @public
   */
  caseRuleArn: string | undefined;

  /**
   * <p>Represents what rule type should take place, under what conditions.</p>
   * @public
   */
  rule: CaseRuleDetails | undefined;

  /**
   * <p>Description of a case rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Indicates whether the resource has been deleted.</p>
   * @public
   */
  deleted?: boolean | undefined;

  /**
   * <p>Timestamp when the resource was created.</p>
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * <p>Timestamp when the resource was created or last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Error for batch describe case rules API failure. In the Amazon Connect admin website, case rules are known as <i>case field conditions</i>.
 * For more
 *       information about case field conditions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html">Add case field conditions to a
 *         case template</a>.</p>
 * @public
 */
export interface CaseRuleError {
  /**
   * <p>The case rule identifier that caused the error.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Error code from getting a case rule.</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * <p>Error message from getting a case rule.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCaseRuleResponse {
  /**
   * <p>List of detailed case rule information.</p>
   * @public
   */
  caseRules: GetCaseRuleResponse[] | undefined;

  /**
   * <p>List of case rule errors.</p>
   * @public
   */
  errors: CaseRuleError[] | undefined;
}

/**
 * @public
 */
export interface CreateCaseRuleRequest {
  /**
   * <p>Unique identifier of a Cases domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>Name of the case rule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of a case rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Represents what rule type should take place, under what conditions.</p>
   * @public
   */
  rule: CaseRuleDetails | undefined;
}

/**
 * @public
 */
export interface CreateCaseRuleResponse {
  /**
   * <p>Unique identifier of a case rule.</p>
   * @public
   */
  caseRuleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a case rule.</p>
   * @public
   */
  caseRuleArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCaseRuleRequest {
  /**
   * <p>Unique identifier of a Cases domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>Unique identifier of a case rule.</p>
   * @public
   */
  caseRuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCaseRuleResponse {}

/**
 * @public
 */
export interface ListCaseRulesRequest {
  /**
   * <p>Unique identifier of a Cases domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleType = {
  REQUIRED: "Required",
} as const;

/**
 * @public
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

/**
 * <p>Summary information of this case rule. In the Amazon Connect admin website, case rules are known as <i>case field conditions</i>.
 * For more
 *       information about case field conditions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html">Add case field conditions to a
 *         case template</a>.</p>
 * @public
 */
export interface CaseRuleSummary {
  /**
   * <p>Unique identifier of a case rule.</p>
   * @public
   */
  caseRuleId: string | undefined;

  /**
   * <p>Name of the case rule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the case rule. </p>
   * @public
   */
  caseRuleArn: string | undefined;

  /**
   * <p>Possible types for a rule.</p>
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * <p>Description of a case rule.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListCaseRulesResponse {
  /**
   * <p>A list of field summary objects.</p>
   * @public
   */
  caseRules: CaseRuleSummary[] | undefined;

  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCaseRuleRequest {
  /**
   * <p>Unique identifier of a Cases domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>Unique identifier of a case rule.</p>
   * @public
   */
  caseRuleId: string | undefined;

  /**
   * <p>Name of the case rule.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Description of a case rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Represents what rule type should take place, under what conditions.</p>
   * @public
   */
  rule?: CaseRuleDetails | undefined;
}

/**
 * @public
 */
export interface UpdateCaseRuleResponse {}

/**
 * @public
 */
export interface CreateDomainRequest {
  /**
   * <p>The name for your Cases domain. It must be unique for your Amazon Web Services
   *       account.</p>
   * @public
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
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the Cases domain.</p>
   * @public
   */
  domainArn: string | undefined;

  /**
   * <p>The status of the domain.</p>
   * @public
   */
  domainStatus: DomainStatus | undefined;
}

/**
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
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
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;
}

/**
 * <p>Details of what case data is published through the case event stream.</p>
 * @public
 */
export interface CaseEventIncludedData {
  /**
   * <p>List of field identifiers.</p>
   * @public
   */
  fields: FieldIdentifier[] | undefined;
}

/**
 * <p>Details of what related item data is published through the case event stream.</p>
 * @public
 */
export interface RelatedItemEventIncludedData {
  /**
   * <p>Details of what related item data is published through the case event stream.</p>
   * @public
   */
  includeContent: boolean | undefined;
}

/**
 * <p>Details of what case and related item data is published through the case event
 *       stream.</p>
 * @public
 */
export interface EventIncludedData {
  /**
   * <p>Details of what case data is published through the case event stream.</p>
   * @public
   */
  caseData?: CaseEventIncludedData | undefined;

  /**
   * <p>Details of what related item data is published through the case event stream.</p>
   * @public
   */
  relatedItemData?: RelatedItemEventIncludedData | undefined;
}

/**
 * <p>Configuration to enable EventBridge case event delivery and determine what data is
 *       delivered.</p>
 * @public
 */
export interface EventBridgeConfiguration {
  /**
   * <p>Indicates whether the to broadcast case event data to the customer.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>Details of what case and related item data is published through the case event
   *       stream.</p>
   * @public
   */
  includedData?: EventIncludedData | undefined;
}

/**
 * @public
 */
export interface GetCaseEventConfigurationResponse {
  /**
   * <p>Configuration to enable EventBridge case event delivery and determine what data is
   *       delivered.</p>
   * @public
   */
  eventBridge: EventBridgeConfiguration | undefined;
}

/**
 * @public
 */
export interface GetDomainRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;
}

/**
 * @public
 */
export interface GetDomainResponse {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the Cases domain.</p>
   * @public
   */
  domainArn: string | undefined;

  /**
   * <p>The name of the Cases domain.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The timestamp when the Cases domain was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The status of the Cases domain.</p>
   * @public
   */
  domainStatus: DomainStatus | undefined;

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDomainsRequest {
  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Object for the summarized details of the domain.</p>
 * @public
 */
export interface DomainSummary {
  /**
   * <p>The unique identifier of the domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain.</p>
   * @public
   */
  domainArn: string | undefined;

  /**
   * <p>The name of the domain.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * <p>The Cases domain.</p>
   * @public
   */
  domains: DomainSummary[] | undefined;

  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutCaseEventConfigurationRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>Configuration to enable EventBridge case event delivery and determine what data is
   *       delivered.</p>
   * @public
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
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>A list of unique field identifiers. </p>
   * @public
   */
  fields: FieldIdentifier[] | undefined;
}

/**
 * <p>Object for errors on fields.</p>
 * @public
 */
export interface FieldError {
  /**
   * <p>The field identifier that caused the error.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The error code from getting a field.</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * <p>The error message from getting a field.</p>
   * @public
   */
  message?: string | undefined;
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
  USER: "User",
} as const;

/**
 * @public
 */
export type FieldType = (typeof FieldType)[keyof typeof FieldType];

/**
 * <p>Object to store detailed field information.</p>
 * @public
 */
export interface GetFieldResponse {
  /**
   * <p>Unique identifier of the field.</p>
   * @public
   */
  fieldId: string | undefined;

  /**
   * <p>Name of the field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the field.</p>
   * @public
   */
  fieldArn: string | undefined;

  /**
   * <p>Description of the field.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Type of the field.</p>
   * @public
   */
  type: FieldType | undefined;

  /**
   * <p>Namespace of the field.</p>
   * @public
   */
  namespace: FieldNamespace | undefined;

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Denotes whether or not the resource has been deleted.</p>
   * @public
   */
  deleted?: boolean | undefined;

  /**
   * <p>Timestamp at which the resource was created.</p>
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * <p>Timestamp at which the resource was created or last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface BatchGetFieldResponse {
  /**
   * <p>A list of detailed field information. </p>
   * @public
   */
  fields: GetFieldResponse[] | undefined;

  /**
   * <p>A list of field errors. </p>
   * @public
   */
  errors: FieldError[] | undefined;
}

/**
 * <p>Object for field Options information.</p>
 * @public
 */
export interface FieldOption {
  /**
   * <p>
   *             <code>FieldOptionName</code> has max length 100 and disallows trailing spaces.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   *             <code>FieldOptionValue</code> has max length 100 and must be alphanumeric with hyphens and
   *       underscores.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>Describes whether the <code>FieldOption</code> is active (displayed) or inactive.</p>
   * @public
   */
  active: boolean | undefined;
}

/**
 * @public
 */
export interface BatchPutFieldOptionsRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of a field.</p>
   * @public
   */
  fieldId: string | undefined;

  /**
   * <p>A list of <code>FieldOption</code> objects.</p>
   * @public
   */
  options: FieldOption[] | undefined;
}

/**
 * <p>Object for field Options errors.</p>
 * @public
 */
export interface FieldOptionError {
  /**
   * <p>Error message from creating or updating field option.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>Error code from creating or updating field option.</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * <p>The field option value that caused the error.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface BatchPutFieldOptionsResponse {
  /**
   * <p>A list of field errors. </p>
   * @public
   */
  errors?: FieldOptionError[] | undefined;
}

/**
 * @public
 */
export interface CreateFieldRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Defines the data type, some system constraints, and default display of the field.</p>
   * @public
   */
  type: FieldType | undefined;

  /**
   * <p>The description of the field.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateFieldResponse {
  /**
   * <p>The unique identifier of a field.</p>
   * @public
   */
  fieldId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the field.</p>
   * @public
   */
  fieldArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFieldRequest {
  /**
   * <p>The unique identifier of the Cases domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>Unique identifier of the field.</p>
   * @public
   */
  fieldId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFieldResponse {}

/**
 * @public
 */
export interface ListFieldOptionsRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of a field.</p>
   * @public
   */
  fieldId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of <code>FieldOption</code> values to filter on for
   *       <code>ListFieldOptions</code>.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListFieldOptionsResponse {
  /**
   * <p>A list of <code>FieldOption</code> objects.</p>
   * @public
   */
  options: FieldOption[] | undefined;

  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFieldsRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Object for the summarized details of the field.</p>
 * @public
 */
export interface FieldSummary {
  /**
   * <p>The unique identifier of a field.</p>
   * @public
   */
  fieldId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the field.</p>
   * @public
   */
  fieldArn: string | undefined;

  /**
   * <p>Name of the field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of a field.</p>
   * @public
   */
  type: FieldType | undefined;

  /**
   * <p>The namespace of a field.</p>
   * @public
   */
  namespace: FieldNamespace | undefined;
}

/**
 * @public
 */
export interface ListFieldsResponse {
  /**
   * <p>List of detailed field information.</p>
   * @public
   */
  fields: FieldSummary[] | undefined;

  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFieldRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of a field.</p>
   * @public
   */
  fieldId: string | undefined;

  /**
   * <p>The name of the field.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of a field.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFieldResponse {}

/**
 * <p>Object for field related information.</p>
 * @public
 */
export interface FieldItem {
  /**
   * <p>Unique identifier of a field.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>Object for a group of fields and associated properties.</p>
 * @public
 */
export interface FieldGroup {
  /**
   * <p>Name of the field group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Represents an ordered list containing field related information.</p>
   * @public
   */
  fields: FieldItem[] | undefined;
}

/**
 * <p>This represents a sections within a panel or tab of the page layout.</p>
 * @public
 */
export type Section = Section.FieldGroupMember | Section.$UnknownMember;

/**
 * @public
 */
export namespace Section {
  /**
   * <p>Consists of a group of fields and associated properties.</p>
   * @public
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
 * <p>Ordered list containing different kinds of sections that can be added. A LayoutSections
 *       object can only contain one section.</p>
 * @public
 */
export interface LayoutSections {
  /**
   * <p>Ordered list containing different kinds of sections that can be added.</p>
   * @public
   */
  sections?: Section[] | undefined;
}

/**
 * <p>Content specific to <code>BasicLayout</code> type. It configures fields in the top panel
 *       and More Info tab of agent application. </p>
 * @public
 */
export interface BasicLayout {
  /**
   * <p>This represents sections in a panel of the page layout.</p>
   * @public
   */
  topPanel?: LayoutSections | undefined;

  /**
   * <p>This represents sections in a tab of the page layout.</p>
   * @public
   */
  moreInfo?: LayoutSections | undefined;
}

/**
 * <p>Object to store union of different versions of layout content.</p>
 * @public
 */
export type LayoutContent = LayoutContent.BasicMember | LayoutContent.$UnknownMember;

/**
 * @public
 */
export namespace LayoutContent {
  /**
   * <p>Content specific to <code>BasicLayout</code> type. It configures fields in the top panel
   *       and More Info tab of Cases user interface.</p>
   * @public
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
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the layout. It must be unique for the Cases domain.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Information about which fields will be present in the layout, and information about the
   *       order of the fields.</p>
   * @public
   */
  content: LayoutContent | undefined;
}

/**
 * @public
 */
export interface CreateLayoutResponse {
  /**
   * <p>The unique identifier of the layout.</p>
   * @public
   */
  layoutId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the newly created layout.</p>
   * @public
   */
  layoutArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLayoutRequest {
  /**
   * <p>The unique identifier of the Cases domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of the layout.</p>
   * @public
   */
  layoutId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLayoutResponse {}

/**
 * @public
 */
export interface GetLayoutRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of the layout.</p>
   * @public
   */
  layoutId: string | undefined;
}

/**
 * @public
 */
export interface GetLayoutResponse {
  /**
   * <p>The unique identifier of the layout.</p>
   * @public
   */
  layoutId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the newly created layout.</p>
   * @public
   */
  layoutArn: string | undefined;

  /**
   * <p>The name of the layout. It must be unique.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Information about which fields will be present in the layout, the order of the fields, and
   *       read-only attribute of the field. </p>
   * @public
   */
  content: LayoutContent | undefined;

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Denotes whether or not the resource has been deleted.</p>
   * @public
   */
  deleted?: boolean | undefined;

  /**
   * <p>Timestamp at which the resource was created.</p>
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * <p>Timestamp at which the resource was created or last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListLayoutsRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Object for the summarized details of the layout.</p>
 * @public
 */
export interface LayoutSummary {
  /**
   * <p>The unique identifier for of the layout.</p>
   * @public
   */
  layoutId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the layout.</p>
   * @public
   */
  layoutArn: string | undefined;

  /**
   * <p>The name of the layout.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface ListLayoutsResponse {
  /**
   * <p>The layouts for the domain.</p>
   * @public
   */
  layouts: LayoutSummary[] | undefined;

  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLayoutRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The unique identifier of the layout.</p>
   * @public
   */
  layoutId: string | undefined;

  /**
   * <p>The name of the layout. It must be unique per domain.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Information about which fields will be present in the layout, the order of the
   *       fields.</p>
   * @public
   */
  content?: LayoutContent | undefined;
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
   * <p>The Amazon Resource Name (ARN)</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN)</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>Object to store configuration of layouts associated to the template.</p>
 * @public
 */
export interface LayoutConfiguration {
  /**
   * <p> Unique identifier of a layout. </p>
   * @public
   */
  defaultLayout?: string | undefined;
}

/**
 * <p>List of fields that must have a value provided to create a case.</p>
 * @public
 */
export interface RequiredField {
  /**
   * <p>Unique identifier of a field.</p>
   * @public
   */
  fieldId: string | undefined;
}

/**
 * <p>An association representing a case rule acting upon a field. In the Amazon Connect admin website, case rules are known as <i>case field conditions</i>.
 * For more
 *       information about case field conditions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html">Add case field conditions to a
 *         case template</a>.</p>
 * @public
 */
export interface TemplateRule {
  /**
   * <p>Unique identifier of a case rule.</p>
   * @public
   */
  caseRuleId: string | undefined;

  /**
   * <p>Unique identifier of a field.</p>
   * @public
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
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>A name for the template. It must be unique per domain.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A brief description of the template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Configuration of layouts associated to the template.</p>
   * @public
   */
  layoutConfiguration?: LayoutConfiguration | undefined;

  /**
   * <p>A list of fields that must contain a value for a case to be successfully created with this
   *       template.</p>
   * @public
   */
  requiredFields?: RequiredField[] | undefined;

  /**
   * <p>The status of the template.</p>
   * @public
   */
  status?: TemplateStatus | undefined;

  /**
   * <p>A list of case rules (also known as <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html">case field conditions</a>) on a template.
   *     </p>
   * @public
   */
  rules?: TemplateRule[] | undefined;
}

/**
 * @public
 */
export interface CreateTemplateResponse {
  /**
   * <p>A unique identifier of a template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the newly created template.</p>
   * @public
   */
  templateArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateRequest {
  /**
   * <p>The unique identifier of the Cases domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>A unique identifier of a template.</p>
   * @public
   */
  templateId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateResponse {}

/**
 * @public
 */
export interface GetTemplateRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>A unique identifier of a template.</p>
   * @public
   */
  templateId: string | undefined;
}

/**
 * @public
 */
export interface GetTemplateResponse {
  /**
   * <p>A unique identifier of a template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   * @public
   */
  templateArn: string | undefined;

  /**
   * <p>The name of the template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A brief description of the template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Configuration of layouts associated to the template.</p>
   * @public
   */
  layoutConfiguration?: LayoutConfiguration | undefined;

  /**
   * <p>A list of fields that must contain a value for a case to be successfully created with this
   *       template.</p>
   * @public
   */
  requiredFields?: RequiredField[] | undefined;

  /**
   * <p>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The status of the template.</p>
   * @public
   */
  status: TemplateStatus | undefined;

  /**
   * <p>Denotes whether or not the resource has been deleted.</p>
   * @public
   */
  deleted?: boolean | undefined;

  /**
   * <p>Timestamp at which the resource was created.</p>
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * <p>Timestamp at which the resource was created or last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>A list of case rules (also known as <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html">case field conditions</a>) on a template. </p>
   * @public
   */
  rules?: TemplateRule[] | undefined;
}

/**
 * @public
 */
export interface ListTemplatesRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of status values to filter on.</p>
   * @public
   */
  status?: TemplateStatus[] | undefined;
}

/**
 * <p>Template summary information.</p>
 * @public
 */
export interface TemplateSummary {
  /**
   * <p>The unique identifier for the template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   * @public
   */
  templateArn: string | undefined;

  /**
   * <p>The template name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the template.</p>
   * @public
   */
  status: TemplateStatus | undefined;
}

/**
 * @public
 */
export interface ListTemplatesResponse {
  /**
   * <p>List of template summary objects.</p>
   * @public
   */
  templates: TemplateSummary[] | undefined;

  /**
   * <p>The token for the next set of results. This is null if there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateRequest {
  /**
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>A unique identifier for the template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The name of the template. It must be unique per domain.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A brief description of the template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Configuration of layouts associated to the template.</p>
   * @public
   */
  layoutConfiguration?: LayoutConfiguration | undefined;

  /**
   * <p>A list of fields that must contain a value for a case to be successfully created with this
   *       template.</p>
   * @public
   */
  requiredFields?: RequiredField[] | undefined;

  /**
   * <p>The status of the template.</p>
   * @public
   */
  status?: TemplateStatus | undefined;

  /**
   * <p>A list of case rules (also known as <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html">case field conditions</a>) on a template.</p>
   * @public
   */
  rules?: TemplateRule[] | undefined;
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
   * <p>The Amazon Resource Name (ARN)</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>List of tag keys.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * <p>A filter for cases. Only one value can be provided.</p>
 * @public
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
   * <p>A list of fields to filter on.</p>
   * @public
   */
  export interface FieldMember {
    field: FieldFilter;
    not?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>A filter for cases. Only one value can be provided.</p>
   * @public
   */
  export interface NotMember {
    field?: never;
    not: CaseFilter;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides "and all" filtering.</p>
   * @public
   */
  export interface AndAllMember {
    field?: never;
    not?: never;
    andAll: CaseFilter[];
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides "or all" filtering.</p>
   * @public
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
   * <p>The unique identifier of the Cases domain. </p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The maximum number of cases to return. The current maximum supported value is 25. This is
   *       also the default value when no other value is provided.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A word or phrase used to perform a quick search.</p>
   * @public
   */
  searchTerm?: string | undefined;

  /**
   * <p>A list of filter objects.</p>
   * @public
   */
  filter?: CaseFilter | undefined;

  /**
   * <p>A list of sorts where each sort specifies a field and their sort order to be applied to
   *       the results. </p>
   * @public
   */
  sorts?: Sort[] | undefined;

  /**
   * <p>The list of field identifiers to be returned as part of the response.</p>
   * @public
   */
  fields?: FieldIdentifier[] | undefined;
}

/**
 * @internal
 */
export const SlaInputConfigurationFilterSensitiveLog = (obj: SlaInputConfiguration): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.targetFieldValues && { targetFieldValues: obj.targetFieldValues.map((item) => item) }),
});

/**
 * @internal
 */
export const SlaInputContentFilterSensitiveLog = (obj: SlaInputContent): any => {
  if (obj.slaInputConfiguration !== undefined)
    return { slaInputConfiguration: SlaInputConfigurationFilterSensitiveLog(obj.slaInputConfiguration) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const RelatedItemInputContentFilterSensitiveLog = (obj: RelatedItemInputContent): any => {
  if (obj.contact !== undefined) return { contact: obj.contact };
  if (obj.comment !== undefined) return { comment: obj.comment };
  if (obj.file !== undefined) return { file: obj.file };
  if (obj.sla !== undefined) return { sla: SlaInputContentFilterSensitiveLog(obj.sla) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateRelatedItemRequestFilterSensitiveLog = (obj: CreateRelatedItemRequest): any => ({
  ...obj,
  ...(obj.content && { content: RelatedItemInputContentFilterSensitiveLog(obj.content) }),
  ...(obj.performedBy && { performedBy: obj.performedBy }),
});

/**
 * @internal
 */
export const SlaFilterFilterSensitiveLog = (obj: SlaFilter): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RelatedItemTypeFilterFilterSensitiveLog = (obj: RelatedItemTypeFilter): any => {
  if (obj.contact !== undefined) return { contact: obj.contact };
  if (obj.comment !== undefined) return { comment: obj.comment };
  if (obj.file !== undefined) return { file: obj.file };
  if (obj.sla !== undefined) return { sla: SlaFilterFilterSensitiveLog(obj.sla) };
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
export const SlaConfigurationFilterSensitiveLog = (obj: SlaConfiguration): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.targetFieldValues && { targetFieldValues: obj.targetFieldValues.map((item) => item) }),
});

/**
 * @internal
 */
export const SlaContentFilterSensitiveLog = (obj: SlaContent): any => ({
  ...obj,
  ...(obj.slaConfiguration && { slaConfiguration: SlaConfigurationFilterSensitiveLog(obj.slaConfiguration) }),
});

/**
 * @internal
 */
export const RelatedItemContentFilterSensitiveLog = (obj: RelatedItemContent): any => {
  if (obj.contact !== undefined) return { contact: obj.contact };
  if (obj.comment !== undefined) return { comment: obj.comment };
  if (obj.file !== undefined) return { file: obj.file };
  if (obj.sla !== undefined) return { sla: SlaContentFilterSensitiveLog(obj.sla) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SearchRelatedItemsResponseItemFilterSensitiveLog = (obj: SearchRelatedItemsResponseItem): any => ({
  ...obj,
  ...(obj.content && { content: RelatedItemContentFilterSensitiveLog(obj.content) }),
  ...(obj.performedBy && { performedBy: obj.performedBy }),
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
