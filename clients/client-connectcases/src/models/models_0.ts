// smithy-typescript generated code
import type {
  AuditEventType,
  CommentBodyTextType,
  DomainStatus,
  FieldNamespace,
  FieldType,
  Order,
  RelatedItemType,
  RuleType,
  SearchAllRelatedItemsSortProperty,
  SlaStatus,
  SlaType,
  TagPropagationResourceType,
  TemplateStatus,
} from "./enums";

/**
 * An empty value. You cannot set `EmptyFieldValue` on a field that is required on a case template.
 *
 * This structure will never have any data members. It signifies an empty value on a case field.
 *
 * @public
 */
export interface EmptyFieldValue {}

/**
 * Object to store union of Field values.
 *
 * > **Note:** The `Summary` system field accepts up to 3000 characters, while all other fields accept up to 4100 characters. If you use multi-byte characters, the effective character limit may be lower.
 *
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
   * String value type.
   *
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
   * Can be either null, or have a Double number value type. Only one value can be provided.
   *
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
   * Can be either null, or have a Boolean value type. Only one value can be provided.
   *
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
   * An empty value.
   *
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
   * Represents the user that performed the audit.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValue: (value: string) => T;
    doubleValue: (value: number) => T;
    booleanValue: (value: boolean) => T;
    emptyValue: (value: EmptyFieldValue) => T;
    userArnValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Object for case field values.
 *
 * @public
 */
export interface FieldValue {
  /**
   * Unique identifier of a field.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Union of potential field value types.
   *
   * @public
   */
  value: FieldValueUnion | undefined;
}

/**
 * Represents the entity that performed the action.
 *
 * @public
 */
export type UserUnion =
  | UserUnion.CustomEntityMember
  | UserUnion.UserArnMember
  | UserUnion.$UnknownMember;

/**
 * @public
 */
export namespace UserUnion {
  /**
   * Represents the Amazon Connect ARN of the user.
   *
   * @public
   */
  export interface UserArnMember {
    userArn: string;
    customEntity?: never;
    $unknown?: never;
  }

  /**
   * Any provided entity.
   *
   * @public
   */
  export interface CustomEntityMember {
    userArn?: never;
    customEntity: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    userArn?: never;
    customEntity?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    userArn: (value: string) => T;
    customEntity: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateCaseRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * A unique identifier of a template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * An array of objects with field ID (matching ListFields/DescribeField) and value union data.
   *
   * @public
   */
  fields: FieldValue[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Represents the entity that performed the action.
   *
   * @public
   */
  performedBy?: UserUnion | undefined;

  /**
   * A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCaseResponse {
  /**
   * A unique identifier of the case.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the case.
   *
   * @public
   */
  caseArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCaseRequest {
  /**
   * A unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * A unique identifier of the case.
   *
   * @public
   */
  caseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCaseResponse {}

/**
 * Object for unique identifier of a field.
 *
 * @public
 */
export interface FieldIdentifier {
  /**
   * Unique identifier of a field.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetCaseRequest {
  /**
   * A unique identifier of the case.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * A list of unique field identifiers.
   *
   * @public
   */
  fields: FieldIdentifier[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCaseResponse {
  /**
   * A list of detailed field information.
   *
   * @public
   */
  fields: FieldValue[] | undefined;

  /**
   * A unique identifier of a template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * The token for the next set of results. This is null if there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string | null> | undefined;
}

/**
 * @public
 */
export interface GetCaseAuditEventsRequest {
  /**
   * A unique identifier of the case.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The maximum number of audit events to return. When no value is provided, 25 is the default.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Object to store union of Field values.
 *
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
   * Can be either null, or have a String value type. Only one value can be provided.
   *
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
   * Can be either null, or have a Double value type. Only one value can be provided.
   *
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
   * Can be either null, or have a Boolean value type. Only one value can be provided.
   *
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
   * An empty value. You cannot set `EmptyFieldValue` on a field that is required on a case template.
   *
   * This structure will never have any data members. It signifies an empty value on a case field.
   *
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
   * Can be either null, or have a String value type formatted as an ARN. Only one value can be provided.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValue: (value: string) => T;
    doubleValue: (value: number) => T;
    booleanValue: (value: boolean) => T;
    emptyValue: (value: EmptyFieldValue) => T;
    userArnValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Fields for audit event.
 *
 * @public
 */
export interface AuditEventField {
  /**
   * Unique identifier of field in an Audit History entry.
   *
   * @public
   */
  eventFieldId: string | undefined;

  /**
   * Union of potential field value types.
   *
   * @public
   */
  oldValue?: AuditEventFieldValueUnion | undefined;

  /**
   * Union of potential field value types.
   *
   * @public
   */
  newValue: AuditEventFieldValueUnion | undefined;
}

/**
 * Information of the user which performed the audit.
 *
 * @public
 */
export interface AuditEventPerformedBy {
  /**
   * Represents the entity that performed the action.
   *
   * @public
   */
  user?: UserUnion | undefined;

  /**
   * Unique identifier of an IAM role.
   *
   * @public
   */
  iamPrincipalArn: string | undefined;
}

/**
 * Represents the content of a particular audit event.
 *
 * @public
 */
export interface AuditEvent {
  /**
   * Unique identifier of a case audit history event.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The type of audit history event.
   *
   * Valid Values: `Case.Created` | `Case.Updated` | `RelatedItem.Created` | `RelatedItem.Updated` | `RelatedItem.Deleted`
   *
   * @public
   */
  type: AuditEventType | undefined;

  /**
   * The Type of the related item.
   *
   * @public
   */
  relatedItemType?: RelatedItemType | undefined;

  /**
   * Time at which an Audit History event took place.
   *
   * @public
   */
  performedTime: Date | undefined;

  /**
   * A list of Case Audit History event fields.
   *
   * @public
   */
  fields: (AuditEventField | null)[] | undefined;

  /**
   * Information of the user which performed the audit.
   *
   * @public
   */
  performedBy?: AuditEventPerformedBy | undefined;
}

/**
 * @public
 */
export interface GetCaseAuditEventsResponse {
  /**
   * The token for the next set of results. This is null if there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of case audits where each represents a particular edit of the case.
   *
   * @public
   */
  auditEvents: (AuditEvent | null)[] | undefined;
}

/**
 * @public
 */
export interface ListCasesForContactRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * A unique identifier of a contact in Amazon Connect.
   *
   * @public
   */
  contactArn: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Case summary information.
 *
 * @public
 */
export interface CaseSummary {
  /**
   * A unique identifier of the case.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * A unique identifier of a template.
   *
   * @public
   */
  templateId: string | undefined;
}

/**
 * @public
 */
export interface ListCasesForContactResponse {
  /**
   * A list of Case summary information.
   *
   * @public
   */
  cases: CaseSummary[] | undefined;

  /**
   * The token for the next set of results. This is null if there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the content of a `Comment` to be returned to agents.
 *
 * @public
 */
export interface CommentContent {
  /**
   * Text in the body of a `Comment` on a case.
   *
   * @public
   */
  body: string | undefined;

  /**
   * Type of the text in the box of a `Comment` on a case.
   *
   * @public
   */
  contentType: CommentBodyTextType | undefined;
}

/**
 * Represents the content of a `ConnectCase` related item.
 *
 * @public
 */
export interface ConnectCaseInputContent {
  /**
   * A unique identifier of the case.
   *
   * @public
   */
  caseId: string | undefined;
}

/**
 * An object that represents an Amazon Connect contact object.
 *
 * @public
 */
export interface Contact {
  /**
   * A unique identifier of a contact in Amazon Connect.
   *
   * @public
   */
  contactArn: string | undefined;
}

/**
 * Represents the content of a `Custom` related item.
 *
 * @public
 */
export interface CustomInputContent {
  /**
   * List of field values for the `Custom` related item.
   *
   * @public
   */
  fields: FieldValue[] | undefined;
}

/**
 * An object that represents a content of an Amazon Connect file object.
 *
 * @public
 */
export interface FileContent {
  /**
   * The Amazon Resource Name (ARN) of a File in Amazon Connect.
   *
   * @public
   */
  fileArn: string | undefined;
}

/**
 * Represents the input configuration of an SLA being created.
 *
 * @public
 */
export interface SlaInputConfiguration {
  /**
   * Name of an SLA.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Type of SLA.
   *
   * @public
   */
  type: SlaType | undefined;

  /**
   * Unique identifier of a field.
   *
   * @public
   */
  fieldId?: string | undefined;

  /**
   * Represents a list of target field values for the fieldId specified in SlaInputConfiguration. The SLA is considered met if any one of these target field values matches the actual field value.
   *
   * @public
   */
  targetFieldValues?: FieldValueUnion[] | undefined;

  /**
   * Target duration in minutes within which an SLA should be completed.
   *
   * @public
   */
  targetSlaMinutes: number | undefined;
}

/**
 * Represents the content of an SLA.
 *
 * @public
 */
export type SlaInputContent =
  | SlaInputContent.SlaInputConfigurationMember
  | SlaInputContent.$UnknownMember;

/**
 * @public
 */
export namespace SlaInputContent {
  /**
   * Represents an input SLA configuration.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    slaInputConfiguration: (value: SlaInputConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents the content of a related item to be created.
 *
 * @public
 */
export type RelatedItemInputContent =
  | RelatedItemInputContent.CommentMember
  | RelatedItemInputContent.ConnectCaseMember
  | RelatedItemInputContent.ContactMember
  | RelatedItemInputContent.CustomMember
  | RelatedItemInputContent.FileMember
  | RelatedItemInputContent.SlaMember
  | RelatedItemInputContent.$UnknownMember;

/**
 * @public
 */
export namespace RelatedItemInputContent {
  /**
   * Object representing a contact in Amazon Connect as an API request field.
   *
   * @public
   */
  export interface ContactMember {
    contact: Contact;
    comment?: never;
    file?: never;
    sla?: never;
    connectCase?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Represents the content of a comment to be returned to agents.
   *
   * @public
   */
  export interface CommentMember {
    contact?: never;
    comment: CommentContent;
    file?: never;
    sla?: never;
    connectCase?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * A file of related items.
   *
   * @public
   */
  export interface FileMember {
    contact?: never;
    comment?: never;
    file: FileContent;
    sla?: never;
    connectCase?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Represents the content of an SLA to be created.
   *
   * @public
   */
  export interface SlaMember {
    contact?: never;
    comment?: never;
    file?: never;
    sla: SlaInputContent;
    connectCase?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Represents the Amazon Connect case to be created as a related item.
   *
   * @public
   */
  export interface ConnectCaseMember {
    contact?: never;
    comment?: never;
    file?: never;
    sla?: never;
    connectCase: ConnectCaseInputContent;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Represents the content of a `Custom` type related item.
   *
   * @public
   */
  export interface CustomMember {
    contact?: never;
    comment?: never;
    file?: never;
    sla?: never;
    connectCase?: never;
    custom: CustomInputContent;
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
    connectCase?: never;
    custom?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    contact: (value: Contact) => T;
    comment: (value: CommentContent) => T;
    file: (value: FileContent) => T;
    sla: (value: SlaInputContent) => T;
    connectCase: (value: ConnectCaseInputContent) => T;
    custom: (value: CustomInputContent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateRelatedItemRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * A unique identifier of the case.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * The type of a related item.
   *
   * @public
   */
  type: RelatedItemType | undefined;

  /**
   * The content of a related item to be created.
   *
   * @public
   */
  content: RelatedItemInputContent | undefined;

  /**
   * Represents the creator of the related item.
   *
   * @public
   */
  performedBy?: UserUnion | undefined;
}

/**
 * @public
 */
export interface CreateRelatedItemResponse {
  /**
   * The unique identifier of the related item.
   *
   * @public
   */
  relatedItemId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the related item.
   *
   * @public
   */
  relatedItemArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRelatedItemRequest {
  /**
   * A unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * A unique identifier of the case.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * A unique identifier of a related item.
   *
   * @public
   */
  relatedItemId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRelatedItemResponse {}

/**
 * A filter for related items of type `Comment`.
 *
 * @public
 */
export interface CommentFilter {}

/**
 * A filter for related items of type `ConnectCase`.
 *
 * @public
 */
export interface ConnectCaseFilter {
  /**
   * A unique identifier of the case.
   *
   * @public
   */
  caseId?: string | undefined;
}

/**
 * A filter for related items of type `Contact`.
 *
 * @public
 */
export interface ContactFilter {
  /**
   * A list of channels to filter on for related items of type `Contact`.
   *
   * @public
   */
  channel?: string[] | undefined;

  /**
   * A unique identifier of a contact in Amazon Connect.
   *
   * @public
   */
  contactArn?: string | undefined;
}

/**
 * A filter for fields. Only one value can be provided.
 *
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
   * Object containing field identifier and value information.
   *
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
   * Object containing field identifier and value information.
   *
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
   * Object containing field identifier and value information.
   *
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
   * Object containing field identifier and value information.
   *
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
   * Object containing field identifier and value information.
   *
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
   * Object containing field identifier and value information.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    equalTo: (value: FieldValue) => T;
    contains: (value: FieldValue) => T;
    greaterThan: (value: FieldValue) => T;
    greaterThanOrEqualTo: (value: FieldValue) => T;
    lessThan: (value: FieldValue) => T;
    lessThanOrEqualTo: (value: FieldValue) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A filter for related items of type `File`.
 *
 * @public
 */
export interface FileFilter {
  /**
   * The Amazon Resource Name (ARN) of the file.
   *
   * @public
   */
  fileArn?: string | undefined;
}

/**
 * A filter for related items of type `SLA`.
 *
 * @public
 */
export interface SlaFilter {
  /**
   * Name of an SLA.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Status of an SLA.
   *
   * @public
   */
  status?: SlaStatus | undefined;
}

/**
 * Represents the content of a `ConnectCase` type related item.
 *
 * @public
 */
export interface ConnectCaseContent {
  /**
   * A unique identifier of the case.
   *
   * @public
   */
  caseId: string | undefined;
}

/**
 * An object that represents a content of an Amazon Connect contact object.
 *
 * @public
 */
export interface ContactContent {
  /**
   * A unique identifier of a contact in Amazon Connect.
   *
   * @public
   */
  contactArn: string | undefined;

  /**
   * A list of channels to filter on for related items of type `Contact`.
   *
   * @public
   */
  channel: string | undefined;

  /**
   * The difference between the `InitiationTimestamp` and the `DisconnectTimestamp` of the contact.
   *
   * @public
   */
  connectedToSystemTime: Date | undefined;
}

/**
 * Represents the content of a `Custom` type related item.
 *
 * @public
 */
export interface CustomContent {
  /**
   * List of field values for the `Custom` related item.
   *
   * @public
   */
  fields: FieldValue[] | undefined;
}

/**
 * Represents an SLA configuration.
 *
 * @public
 */
export interface SlaConfiguration {
  /**
   * Name of an SLA.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Type of SLA.
   *
   * @public
   */
  type: SlaType | undefined;

  /**
   * Status of an SLA.
   *
   * @public
   */
  status: SlaStatus | undefined;

  /**
   * Unique identifier of a field.
   *
   * @public
   */
  fieldId?: string | undefined;

  /**
   * Represents a list of target field values for the fieldId specified in SlaConfiguration.
   *
   * @public
   */
  targetFieldValues?: FieldValueUnion[] | undefined;

  /**
   * Target time by which an SLA should be completed.
   *
   * @public
   */
  targetTime: Date | undefined;

  /**
   * Time at which an SLA was completed.
   *
   * @public
   */
  completionTime?: Date | undefined;
}

/**
 * Represents the content of an SLA to be returned to agents.
 *
 * @public
 */
export interface SlaContent {
  /**
   * Represents an SLA configuration.
   *
   * @public
   */
  slaConfiguration: SlaConfiguration | undefined;
}

/**
 * Represents the content of a particular type of related item.
 *
 * @public
 */
export type RelatedItemContent =
  | RelatedItemContent.CommentMember
  | RelatedItemContent.ConnectCaseMember
  | RelatedItemContent.ContactMember
  | RelatedItemContent.CustomMember
  | RelatedItemContent.FileMember
  | RelatedItemContent.SlaMember
  | RelatedItemContent.$UnknownMember;

/**
 * @public
 */
export namespace RelatedItemContent {
  /**
   * Represents the content of a contact to be returned to agents.
   *
   * @public
   */
  export interface ContactMember {
    contact: ContactContent;
    comment?: never;
    file?: never;
    sla?: never;
    connectCase?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Represents the content of a comment to be returned to agents.
   *
   * @public
   */
  export interface CommentMember {
    contact?: never;
    comment: CommentContent;
    file?: never;
    sla?: never;
    connectCase?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Represents the content of a File to be returned to agents.
   *
   * @public
   */
  export interface FileMember {
    contact?: never;
    comment?: never;
    file: FileContent;
    sla?: never;
    connectCase?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Represents the content of an SLA to be returned to agents.
   *
   * @public
   */
  export interface SlaMember {
    contact?: never;
    comment?: never;
    file?: never;
    sla: SlaContent;
    connectCase?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Represents the Amazon Connect case to be created as a related item.
   *
   * @public
   */
  export interface ConnectCaseMember {
    contact?: never;
    comment?: never;
    file?: never;
    sla?: never;
    connectCase: ConnectCaseContent;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Represents the content of a `Custom` type related item.
   *
   * @public
   */
  export interface CustomMember {
    contact?: never;
    comment?: never;
    file?: never;
    sla?: never;
    connectCase?: never;
    custom: CustomContent;
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
    connectCase?: never;
    custom?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    contact: (value: ContactContent) => T;
    comment: (value: CommentContent) => T;
    file: (value: FileContent) => T;
    sla: (value: SlaContent) => T;
    connectCase: (value: ConnectCaseContent) => T;
    custom: (value: CustomContent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A list of items that represent RelatedItems.
 *
 * @public
 */
export interface SearchRelatedItemsResponseItem {
  /**
   * Unique identifier of a related item.
   *
   * @public
   */
  relatedItemId: string | undefined;

  /**
   * Type of a related item.
   *
   * @public
   */
  type: RelatedItemType | undefined;

  /**
   * Time at which a related item was associated with a case.
   *
   * @public
   */
  associationTime: Date | undefined;

  /**
   * Represents the content of a particular type of related item.
   *
   * @public
   */
  content: RelatedItemContent | undefined;

  /**
   * A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string | null> | undefined;

  /**
   * Represents the creator of the related item.
   *
   * @public
   */
  performedBy?: UserUnion | undefined;
}

/**
 * @public
 */
export interface SearchRelatedItemsResponse {
  /**
   * The token for the next set of results. This is null if there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of items related to a case.
   *
   * @public
   */
  relatedItems: (SearchRelatedItemsResponseItem | null)[] | undefined;
}

/**
 * Represents the updated content of a `Comment` related item.
 *
 * @public
 */
export interface CommentUpdateContent {
  /**
   * Updated text in the body of a `Comment` on a case.
   *
   * @public
   */
  body: string | undefined;

  /**
   * Type of the text in the box of a `Comment` on a case.
   *
   * @public
   */
  contentType: CommentBodyTextType | undefined;
}

/**
 * Represents the updated content of a `Custom` related item.
 *
 * @public
 */
export interface CustomUpdateContent {
  /**
   * List of updated field values for the `Custom` related item. All existing and new fields, and their associated values should be included. Fields not included as part of this request will be removed.
   *
   * @public
   */
  fields: FieldValue[] | undefined;
}

/**
 * Represents the content of a related item to be updated. This is a union type that can contain either comment content or custom content.
 *
 * @public
 */
export type RelatedItemUpdateContent =
  | RelatedItemUpdateContent.CommentMember
  | RelatedItemUpdateContent.CustomMember
  | RelatedItemUpdateContent.$UnknownMember;

/**
 * @public
 */
export namespace RelatedItemUpdateContent {
  /**
   * Represents the updated content of a `Comment` related item.
   *
   * @public
   */
  export interface CommentMember {
    comment: CommentUpdateContent;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Represents the updated content of a `Custom` related item.
   *
   * @public
   */
  export interface CustomMember {
    comment?: never;
    custom: CustomUpdateContent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    comment?: never;
    custom?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    comment: (value: CommentUpdateContent) => T;
    custom: (value: CustomUpdateContent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdateRelatedItemRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * A unique identifier of the case.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * Unique identifier of a related item.
   *
   * @public
   */
  relatedItemId: string | undefined;

  /**
   * The content of a related item to be updated.
   *
   * @public
   */
  content: RelatedItemUpdateContent | undefined;

  /**
   * Represents the user who performed the update of the related item.
   *
   * @public
   */
  performedBy?: UserUnion | undefined;
}

/**
 * @public
 */
export interface UpdateRelatedItemResponse {
  /**
   * The unique identifier of the updated related item.
   *
   * @public
   */
  relatedItemId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated related item.
   *
   * @public
   */
  relatedItemArn: string | undefined;

  /**
   * Type of the updated related item.
   *
   * @public
   */
  type: RelatedItemType | undefined;

  /**
   * Represents the content of the updated related item.
   *
   * @public
   */
  content: RelatedItemContent | undefined;

  /**
   * Time at which the related item was associated with the case.
   *
   * @public
   */
  associationTime: Date | undefined;

  /**
   * A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string | null> | undefined;

  /**
   * Represents the last user that updated the related item.
   *
   * @public
   */
  lastUpdatedUser?: UserUnion | undefined;

  /**
   * Represents the creator of the related item.
   *
   * @public
   */
  createdBy?: UserUnion | undefined;
}

/**
 * Object for case tag filter values.
 *
 * @public
 */
export interface TagValue {
  /**
   * The tag key in the tag filter value.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The tag value in the tag filter value.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * A filter for tags. Only one value can be provided.
 *
 * @public
 */
export type TagFilter =
  | TagFilter.EqualToMember
  | TagFilter.$UnknownMember;

/**
 * @public
 */
export namespace TagFilter {
  /**
   * Object containing tag key and value information.
   *
   * @public
   */
  export interface EqualToMember {
    equalTo: TagValue;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    equalTo?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    equalTo: (value: TagValue) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A structured set of sort terms.
 *
 * @public
 */
export interface Sort {
  /**
   * Unique identifier of a field.
   *
   * @public
   */
  fieldId: string | undefined;

  /**
   * A structured set of sort terms
   *
   * @public
   */
  sortOrder: Order | undefined;
}

/**
 * A list of items that represent cases.
 *
 * @public
 */
export interface SearchCasesResponseItem {
  /**
   * A unique identifier of the case.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * A unique identifier of a template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * List of case field values.
   *
   * @public
   */
  fields: FieldValue[] | undefined;

  /**
   * A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string | null> | undefined;
}

/**
 * @public
 */
export interface SearchCasesResponse {
  /**
   * The token for the next set of results. This is null if there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of case documents where each case contains the properties `CaseId` and `Fields` where each field is a complex union structure.
   *
   * @public
   */
  cases: (SearchCasesResponseItem | null)[] | undefined;

  /**
   * The total number of cases that matched the search criteria.
   *
   * @public
   */
  totalCount?: number | undefined;
}

/**
 * @public
 */
export interface UpdateCaseRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * A unique identifier of the case.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * An array of objects with `fieldId` (matching ListFields/DescribeField) and value union data, structured identical to `CreateCase`.
   *
   * @public
   */
  fields: FieldValue[] | undefined;

  /**
   * Represents the entity that performed the action.
   *
   * @public
   */
  performedBy?: UserUnion | undefined;
}

/**
 * @public
 */
export interface UpdateCaseResponse {}

/**
 * Object containing case rule identifier information.
 *
 * @public
 */
export interface CaseRuleIdentifier {
  /**
   * Unique identifier of a case rule.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCaseRuleRequest {
  /**
   * Unique identifier of a Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * A list of case rule identifiers.
   *
   * @public
   */
  caseRules: CaseRuleIdentifier[] | undefined;
}

/**
 * A mapping between a parent field option value and child field option values.
 *
 * @public
 */
export interface ParentChildFieldOptionsMapping {
  /**
   * The value in the parent field.
   *
   * @public
   */
  parentFieldOptionValue: string | undefined;

  /**
   * A list of allowed values in the child field.
   *
   * @public
   */
  childFieldOptionValues: string[] | undefined;
}

/**
 * Rules that control which options are available in a child field based on the selected value in a parent field.
 *
 * @public
 */
export interface FieldOptionsCaseRule {
  /**
   * The identifier of the parent field that controls options.
   *
   * @public
   */
  parentFieldId?: string | undefined;

  /**
   * The identifier of the child field whose options are controlled.
   *
   * @public
   */
  childFieldId?: string | undefined;

  /**
   * A mapping between a parent field option value and child field option values.
   *
   * @public
   */
  parentChildFieldOptionsMappings: ParentChildFieldOptionsMapping[] | undefined;
}

/**
 * Represents the left hand operand in the condition. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see [Add case field conditions to a case template](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html).
 *
 * @public
 */
export type OperandOne =
  | OperandOne.FieldIdMember
  | OperandOne.$UnknownMember;

/**
 * @public
 */
export namespace OperandOne {
  /**
   * The field ID that this operand should take the value of.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    fieldId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents an empty operand value. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see [Add case field conditions to a case template](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html).
 *
 * @public
 */
export interface EmptyOperandValue {}

/**
 * Represents the right hand operand in the condition. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see [Add case field conditions to a case template](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html).
 *
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
   * String value type.
   *
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
   * Boolean value type.
   *
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
   * Double value type.
   *
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
   * Empty value type.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValue: (value: string) => T;
    booleanValue: (value: boolean) => T;
    doubleValue: (value: number) => T;
    emptyValue: (value: EmptyOperandValue) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Boolean operands for a condition. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see [Add case field conditions to a case template](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html).
 *
 * @public
 */
export interface BooleanOperands {
  /**
   * Represents the left hand operand in the condition.
   *
   * @public
   */
  operandOne: OperandOne | undefined;

  /**
   * Represents the right hand operand in the condition.
   *
   * @public
   */
  operandTwo: OperandTwo | undefined;

  /**
   * The value of the outer rule if the condition evaluates to true.
   *
   * @public
   */
  result: boolean | undefined;
}

/**
 * Error for batch describe case rules API failure. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see [Add case field conditions to a case template](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html).
 *
 * @public
 */
export interface CaseRuleError {
  /**
   * The case rule identifier that caused the error.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Error code from getting a case rule.
   *
   * @public
   */
  errorCode: string | undefined;

  /**
   * Error message from getting a case rule.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface CreateCaseRuleResponse {
  /**
   * Unique identifier of a case rule.
   *
   * @public
   */
  caseRuleId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a case rule.
   *
   * @public
   */
  caseRuleArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCaseRuleRequest {
  /**
   * Unique identifier of a Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * Unique identifier of a case rule.
   *
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
   * Unique identifier of a Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information of this case rule. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see [Add case field conditions to a case template](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html).
 *
 * @public
 */
export interface CaseRuleSummary {
  /**
   * Unique identifier of a case rule.
   *
   * @public
   */
  caseRuleId: string | undefined;

  /**
   * Name of the case rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the case rule.
   *
   * @public
   */
  caseRuleArn: string | undefined;

  /**
   * Possible types for a rule.
   *
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * Description of a case rule.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListCaseRulesResponse {
  /**
   * A list of field summary objects.
   *
   * @public
   */
  caseRules: CaseRuleSummary[] | undefined;

  /**
   * The token for the next set of results. This is null if there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
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
   * The name for your Cases domain. It must be unique for your Amazon Web Services account.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainResponse {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the Cases domain.
   *
   * @public
   */
  domainArn: string | undefined;

  /**
   * The status of the domain.
   *
   * @public
   */
  domainStatus: DomainStatus | undefined;
}

/**
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * The unique identifier of the Cases domain.
   *
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
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;
}

/**
 * Details of what case data is published through the case event stream.
 *
 * @public
 */
export interface CaseEventIncludedData {
  /**
   * List of field identifiers.
   *
   * @public
   */
  fields: FieldIdentifier[] | undefined;
}

/**
 * Details of what related item data is published through the case event stream.
 *
 * @public
 */
export interface RelatedItemEventIncludedData {
  /**
   * Details of what related item data is published through the case event stream.
   *
   * @public
   */
  includeContent: boolean | undefined;
}

/**
 * Details of what case and related item data is published through the case event stream.
 *
 * @public
 */
export interface EventIncludedData {
  /**
   * Details of what case data is published through the case event stream.
   *
   * @public
   */
  caseData?: CaseEventIncludedData | undefined;

  /**
   * Details of what related item data is published through the case event stream.
   *
   * @public
   */
  relatedItemData?: RelatedItemEventIncludedData | undefined;
}

/**
 * Configuration to enable EventBridge case event delivery and determine what data is delivered.
 *
 * @public
 */
export interface EventBridgeConfiguration {
  /**
   * Indicates whether the to broadcast case event data to the customer.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * Details of what case and related item data is published through the case event stream.
   *
   * @public
   */
  includedData?: EventIncludedData | undefined;
}

/**
 * @public
 */
export interface GetCaseEventConfigurationResponse {
  /**
   * Configuration to enable EventBridge case event delivery and determine what data is delivered.
   *
   * @public
   */
  eventBridge: EventBridgeConfiguration | undefined;
}

/**
 * @public
 */
export interface GetDomainRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;
}

/**
 * @public
 */
export interface GetDomainResponse {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the Cases domain.
   *
   * @public
   */
  domainArn: string | undefined;

  /**
   * The name of the Cases domain.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The timestamp when the Cases domain was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The status of the Cases domain.
   *
   * @public
   */
  domainStatus: DomainStatus | undefined;

  /**
   * A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string | null> | undefined;
}

/**
 * @public
 */
export interface ListDomainsRequest {
  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Object for the summarized details of the domain.
 *
 * @public
 */
export interface DomainSummary {
  /**
   * The unique identifier of the domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain.
   *
   * @public
   */
  domainArn: string | undefined;

  /**
   * The name of the domain.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * The Cases domain.
   *
   * @public
   */
  domains: DomainSummary[] | undefined;

  /**
   * The token for the next set of results. This is null if there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutCaseEventConfigurationRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * Configuration to enable EventBridge case event delivery and determine what data is delivered.
   *
   * @public
   */
  eventBridge: EventBridgeConfiguration | undefined;
}

/**
 * @public
 */
export interface PutCaseEventConfigurationResponse {}

/**
 * The order in which all returned related items should be sorted.
 *
 * @public
 */
export interface SearchAllRelatedItemsSort {
  /**
   * Whether related items should be sorted in ascending or descending order.
   *
   * @public
   */
  sortProperty: SearchAllRelatedItemsSortProperty | undefined;

  /**
   * Whether related items should be sorted by association time or case ID.
   *
   * @public
   */
  sortOrder: Order | undefined;
}

/**
 * A list of items that represent RelatedItems. This data type is similar to [SearchRelatedItemsResponseItem](https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_SearchRelatedItemsResponseItem.html) except Search**All**RelatedItemsResponseItem has a caseId field.
 *
 * @public
 */
export interface SearchAllRelatedItemsResponseItem {
  /**
   * Unique identifier of a related item.
   *
   * @public
   */
  relatedItemId: string | undefined;

  /**
   * A unique identifier of the case.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * Type of a related item.
   *
   * @public
   */
  type: RelatedItemType | undefined;

  /**
   * Time at which a related item was associated with a case.
   *
   * @public
   */
  associationTime: Date | undefined;

  /**
   * Represents the content of a particular type of related item.
   *
   * @public
   */
  content: RelatedItemContent | undefined;

  /**
   * Represents the entity that performed the action.
   *
   * @public
   */
  performedBy?: UserUnion | undefined;

  /**
   * A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string | null> | undefined;
}

/**
 * @public
 */
export interface SearchAllRelatedItemsResponse {
  /**
   * The token for the next set of results. This is null if there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of items related to a case.
   *
   * @public
   */
  relatedItems: (SearchAllRelatedItemsResponseItem | null)[] | undefined;
}

/**
 * @public
 */
export interface BatchGetFieldRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * A list of unique field identifiers.
   *
   * @public
   */
  fields: FieldIdentifier[] | undefined;
}

/**
 * Object for errors on fields.
 *
 * @public
 */
export interface FieldError {
  /**
   * The field identifier that caused the error.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The error code from getting a field.
   *
   * @public
   */
  errorCode: string | undefined;

  /**
   * The error message from getting a field.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Field attributes for Text field type.
 *
 * @public
 */
export interface TextAttributes {
  /**
   * Attribute that defines rendering component and validation.
   *
   * @public
   */
  isMultiline: boolean | undefined;
}

/**
 * Union of field attributes.
 *
 * @public
 */
export type FieldAttributes =
  | FieldAttributes.TextMember
  | FieldAttributes.$UnknownMember;

/**
 * @public
 */
export namespace FieldAttributes {
  /**
   * Field attributes for Text field type.
   *
   * @public
   */
  export interface TextMember {
    text: TextAttributes;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: TextAttributes) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Object to store detailed field information.
 *
 * @public
 */
export interface GetFieldResponse {
  /**
   * Unique identifier of the field.
   *
   * @public
   */
  fieldId: string | undefined;

  /**
   * Name of the field.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the field.
   *
   * @public
   */
  fieldArn: string | undefined;

  /**
   * Description of the field.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Type of the field.
   *
   * @public
   */
  type: FieldType | undefined;

  /**
   * Namespace of the field.
   *
   * @public
   */
  namespace: FieldNamespace | undefined;

  /**
   * A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string | null> | undefined;

  /**
   * Denotes whether or not the resource has been deleted.
   *
   * @public
   */
  deleted?: boolean | undefined;

  /**
   * Timestamp at which the resource was created.
   *
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * Timestamp at which the resource was created or last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * Union of field attributes.
   *
   * @public
   */
  attributes?: FieldAttributes | undefined;
}

/**
 * @public
 */
export interface BatchGetFieldResponse {
  /**
   * A list of detailed field information.
   *
   * @public
   */
  fields: GetFieldResponse[] | undefined;

  /**
   * A list of field errors.
   *
   * @public
   */
  errors: FieldError[] | undefined;
}

/**
 * Object for field Options information.
 *
 * @public
 */
export interface FieldOption {
  /**
   * `FieldOptionName` has max length 100 and disallows trailing spaces.
   *
   * @public
   */
  name: string | undefined;

  /**
   * `FieldOptionValue` has max length 100 and must be alphanumeric with hyphens and underscores.
   *
   * @public
   */
  value: string | undefined;

  /**
   * Describes whether the `FieldOption` is active (displayed) or inactive.
   *
   * @public
   */
  active: boolean | undefined;
}

/**
 * @public
 */
export interface BatchPutFieldOptionsRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The unique identifier of a field.
   *
   * @public
   */
  fieldId: string | undefined;

  /**
   * A list of `FieldOption` objects.
   *
   * @public
   */
  options: FieldOption[] | undefined;
}

/**
 * Object for field Options errors.
 *
 * @public
 */
export interface FieldOptionError {
  /**
   * Error message from creating or updating field option.
   *
   * @public
   */
  message: string | undefined;

  /**
   * Error code from creating or updating field option.
   *
   * @public
   */
  errorCode: string | undefined;

  /**
   * The field option value that caused the error.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface BatchPutFieldOptionsResponse {
  /**
   * A list of field errors.
   *
   * @public
   */
  errors?: FieldOptionError[] | undefined;
}

/**
 * @public
 */
export interface CreateFieldRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The name of the field.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Defines the data type, some system constraints, and default display of the field.
   *
   * @public
   */
  type: FieldType | undefined;

  /**
   * The description of the field.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Union of field attributes.
   *
   * @public
   */
  attributes?: FieldAttributes | undefined;
}

/**
 * @public
 */
export interface CreateFieldResponse {
  /**
   * The unique identifier of a field.
   *
   * @public
   */
  fieldId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the field.
   *
   * @public
   */
  fieldArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFieldRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * Unique identifier of the field.
   *
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
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The unique identifier of a field.
   *
   * @public
   */
  fieldId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of `FieldOption` values to filter on for `ListFieldOptions`.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListFieldOptionsResponse {
  /**
   * A list of `FieldOption` objects.
   *
   * @public
   */
  options: FieldOption[] | undefined;

  /**
   * The token for the next set of results. This is null if there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFieldsRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Object for the summarized details of the field.
 *
 * @public
 */
export interface FieldSummary {
  /**
   * The unique identifier of a field.
   *
   * @public
   */
  fieldId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the field.
   *
   * @public
   */
  fieldArn: string | undefined;

  /**
   * Name of the field.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of a field.
   *
   * @public
   */
  type: FieldType | undefined;

  /**
   * The namespace of a field.
   *
   * @public
   */
  namespace: FieldNamespace | undefined;

  /**
   * Union of field attributes.
   *
   * @public
   */
  attributes?: FieldAttributes | undefined;
}

/**
 * @public
 */
export interface ListFieldsResponse {
  /**
   * List of detailed field information.
   *
   * @public
   */
  fields: FieldSummary[] | undefined;

  /**
   * The token for the next set of results. This is null if there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFieldRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The unique identifier of a field.
   *
   * @public
   */
  fieldId: string | undefined;

  /**
   * The name of the field.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of a field.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Union of field attributes.
   *
   * @public
   */
  attributes?: FieldAttributes | undefined;
}

/**
 * @public
 */
export interface UpdateFieldResponse {}

/**
 * Object for field related information.
 *
 * @public
 */
export interface FieldItem {
  /**
   * Unique identifier of a field.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Object for a group of fields and associated properties.
 *
 * @public
 */
export interface FieldGroup {
  /**
   * Name of the field group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Represents an ordered list containing field related information.
   *
   * @public
   */
  fields: FieldItem[] | undefined;
}

/**
 * This represents a sections within a panel or tab of the page layout.
 *
 * @public
 */
export type Section =
  | Section.FieldGroupMember
  | Section.$UnknownMember;

/**
 * @public
 */
export namespace Section {
  /**
   * Consists of a group of fields and associated properties.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    fieldGroup: (value: FieldGroup) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Ordered list containing different kinds of sections that can be added. A LayoutSections object can only contain one section.
 *
 * @public
 */
export interface LayoutSections {
  /**
   * Ordered list containing different kinds of sections that can be added.
   *
   * @public
   */
  sections?: Section[] | undefined;
}

/**
 * Content specific to `BasicLayout` type. It configures fields in the top panel and More Info tab of agent application.
 *
 * @public
 */
export interface BasicLayout {
  /**
   * This represents sections in a panel of the page layout.
   *
   * @public
   */
  topPanel?: LayoutSections | undefined;

  /**
   * This represents sections in a tab of the page layout.
   *
   * @public
   */
  moreInfo?: LayoutSections | undefined;
}

/**
 * Object to store union of different versions of layout content.
 *
 * @public
 */
export type LayoutContent =
  | LayoutContent.BasicMember
  | LayoutContent.$UnknownMember;

/**
 * @public
 */
export namespace LayoutContent {
  /**
   * Content specific to `BasicLayout` type. It configures fields in the top panel and More Info tab of Cases user interface.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    basic: (value: BasicLayout) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateLayoutRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The name of the layout. It must be unique for the Cases domain.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Information about which fields will be present in the layout, and information about the order of the fields.
   *
   * @public
   */
  content: LayoutContent | undefined;
}

/**
 * @public
 */
export interface CreateLayoutResponse {
  /**
   * The unique identifier of the layout.
   *
   * @public
   */
  layoutId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the newly created layout.
   *
   * @public
   */
  layoutArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLayoutRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The unique identifier of the layout.
   *
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
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The unique identifier of the layout.
   *
   * @public
   */
  layoutId: string | undefined;
}

/**
 * @public
 */
export interface GetLayoutResponse {
  /**
   * The unique identifier of the layout.
   *
   * @public
   */
  layoutId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the newly created layout.
   *
   * @public
   */
  layoutArn: string | undefined;

  /**
   * The name of the layout. It must be unique.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Information about which fields will be present in the layout, the order of the fields, and read-only attribute of the field.
   *
   * @public
   */
  content: LayoutContent | undefined;

  /**
   * A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string | null> | undefined;

  /**
   * Denotes whether or not the resource has been deleted.
   *
   * @public
   */
  deleted?: boolean | undefined;

  /**
   * Timestamp at which the resource was created.
   *
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * Timestamp at which the resource was created or last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListLayoutsRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Object for the summarized details of the layout.
 *
 * @public
 */
export interface LayoutSummary {
  /**
   * The unique identifier for of the layout.
   *
   * @public
   */
  layoutId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the layout.
   *
   * @public
   */
  layoutArn: string | undefined;

  /**
   * The name of the layout.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface ListLayoutsResponse {
  /**
   * The layouts for the domain.
   *
   * @public
   */
  layouts: LayoutSummary[] | undefined;

  /**
   * The token for the next set of results. This is null if there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLayoutRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The unique identifier of the layout.
   *
   * @public
   */
  layoutId: string | undefined;

  /**
   * The name of the layout. It must be unique per domain.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Information about which fields will be present in the layout, the order of the fields.
   *
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
   * The Amazon Resource Name (ARN)
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string | null> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN)
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags: Record<string, string | null> | undefined;
}

/**
 * Object to store configuration of layouts associated to the template.
 *
 * @public
 */
export interface LayoutConfiguration {
  /**
   * Unique identifier of a layout.
   *
   * @public
   */
  defaultLayout?: string | undefined;
}

/**
 * List of fields that must have a value provided to create a case.
 *
 * @public
 */
export interface RequiredField {
  /**
   * Unique identifier of a field.
   *
   * @public
   */
  fieldId: string | undefined;
}

/**
 * An association representing a case rule acting upon a field. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see [Add case field conditions to a case template](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html).
 *
 * @public
 */
export interface TemplateRule {
  /**
   * Unique identifier of a case rule.
   *
   * @public
   */
  caseRuleId: string | undefined;

  /**
   * Unique identifier of a field.
   *
   * @public
   */
  fieldId?: string | undefined;
}

/**
 * Defines tag propagation configuration for resources created within a domain. Tags specified here will be automatically applied to resources being created for the specified resource type.
 *
 * @public
 */
export interface TagPropagationConfiguration {
  /**
   * Supported resource types for tag propagation. Determines which resources will receive automatically propagated tags.
   *
   * @public
   */
  resourceType: TagPropagationResourceType | undefined;

  /**
   * The tags that will be applied to the created resource.
   *
   * @public
   */
  tagMap: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTemplateRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * A name for the template. It must be unique per domain.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A brief description of the template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Configuration of layouts associated to the template.
   *
   * @public
   */
  layoutConfiguration?: LayoutConfiguration | undefined;

  /**
   * A list of fields that must contain a value for a case to be successfully created with this template.
   *
   * @public
   */
  requiredFields?: RequiredField[] | undefined;

  /**
   * The status of the template.
   *
   * @public
   */
  status?: TemplateStatus | undefined;

  /**
   * A list of case rules (also known as [case field conditions](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html)) on a template.
   *
   * @public
   */
  rules?: TemplateRule[] | undefined;

  /**
   * Defines tag propagation configuration for resources created within a domain. Tags specified here will be automatically applied to resources being created for the specified resource type.
   *
   * @public
   */
  tagPropagationConfigurations?: TagPropagationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateTemplateResponse {
  /**
   * A unique identifier of a template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the newly created template.
   *
   * @public
   */
  templateArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * A unique identifier of a template.
   *
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
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * A unique identifier of a template.
   *
   * @public
   */
  templateId: string | undefined;
}

/**
 * @public
 */
export interface GetTemplateResponse {
  /**
   * A unique identifier of a template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the template.
   *
   * @public
   */
  templateArn: string | undefined;

  /**
   * The name of the template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A brief description of the template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Configuration of layouts associated to the template.
   *
   * @public
   */
  layoutConfiguration?: LayoutConfiguration | undefined;

  /**
   * A list of fields that must contain a value for a case to be successfully created with this template.
   *
   * @public
   */
  requiredFields?: RequiredField[] | undefined;

  /**
   * A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string | null> | undefined;

  /**
   * The status of the template.
   *
   * @public
   */
  status: TemplateStatus | undefined;

  /**
   * Denotes whether or not the resource has been deleted.
   *
   * @public
   */
  deleted?: boolean | undefined;

  /**
   * Timestamp at which the resource was created.
   *
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * Timestamp at which the resource was created or last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * A list of case rules (also known as [case field conditions](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html)) on a template.
   *
   * @public
   */
  rules?: TemplateRule[] | undefined;

  /**
   * Defines tag propagation configuration for resources created within a domain. Tags specified here will be automatically applied to resources being created for the specified resource type.
   *
   * @public
   */
  tagPropagationConfigurations?: TagPropagationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListTemplatesRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of status values to filter on.
   *
   * @public
   */
  status?: TemplateStatus[] | undefined;
}

/**
 * Template summary information.
 *
 * @public
 */
export interface TemplateSummary {
  /**
   * The unique identifier for the template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the template.
   *
   * @public
   */
  templateArn: string | undefined;

  /**
   * The template name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The status of the template.
   *
   * @public
   */
  status: TemplateStatus | undefined;

  /**
   * Defines tag propagation configuration for resources created within a domain. Tags specified here will be automatically applied to resources being created for the specified resource type.
   *
   * @public
   */
  tagPropagationConfigurations?: TagPropagationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListTemplatesResponse {
  /**
   * List of template summary objects.
   *
   * @public
   */
  templates: TemplateSummary[] | undefined;

  /**
   * The token for the next set of results. This is null if there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * A unique identifier for the template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * The name of the template. It must be unique per domain.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A brief description of the template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Configuration of layouts associated to the template.
   *
   * @public
   */
  layoutConfiguration?: LayoutConfiguration | undefined;

  /**
   * A list of fields that must contain a value for a case to be successfully created with this template.
   *
   * @public
   */
  requiredFields?: RequiredField[] | undefined;

  /**
   * The status of the template.
   *
   * @public
   */
  status?: TemplateStatus | undefined;

  /**
   * A list of case rules (also known as [case field conditions](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html)) on a template.
   *
   * @public
   */
  rules?: TemplateRule[] | undefined;

  /**
   * Defines tag propagation configuration for resources created within a domain. Tags specified here will be automatically applied to resources being created for the specified resource type.
   *
   * @public
   */
  tagPropagationConfigurations?: TagPropagationConfiguration[] | undefined;
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
   * The Amazon Resource Name (ARN)
   *
   * @public
   */
  arn: string | undefined;

  /**
   * List of tag keys.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * A filter for cases. Only one value can be provided.
 *
 * @public
 */
export type CaseFilter =
  | CaseFilter.AndAllMember
  | CaseFilter.FieldMember
  | CaseFilter.NotMember
  | CaseFilter.OrAllMember
  | CaseFilter.TagMember
  | CaseFilter.$UnknownMember;

/**
 * @public
 */
export namespace CaseFilter {
  /**
   * A list of fields to filter on.
   *
   * @public
   */
  export interface FieldMember {
    field: FieldFilter;
    not?: never;
    tag?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * A filter for cases. Only one value can be provided.
   *
   * @public
   */
  export interface NotMember {
    field?: never;
    not: CaseFilter;
    tag?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * A list of tags to filter on.
   *
   * @public
   */
  export interface TagMember {
    field?: never;
    not?: never;
    tag: TagFilter;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Provides "and all" filtering.
   *
   * @public
   */
  export interface AndAllMember {
    field?: never;
    not?: never;
    tag?: never;
    andAll: CaseFilter[];
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Provides "or all" filtering.
   *
   * @public
   */
  export interface OrAllMember {
    field?: never;
    not?: never;
    tag?: never;
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
    tag?: never;
    andAll?: never;
    orAll?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    field: (value: FieldFilter) => T;
    not: (value: CaseFilter) => T;
    tag: (value: TagFilter) => T;
    andAll: (value: CaseFilter[]) => T;
    orAll: (value: CaseFilter[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A filter for fields in `Custom` type related items. Only one value can be provided.
 *
 * @public
 */
export type CustomFieldsFilter =
  | CustomFieldsFilter.AndAllMember
  | CustomFieldsFilter.FieldMember
  | CustomFieldsFilter.NotMember
  | CustomFieldsFilter.OrAllMember
  | CustomFieldsFilter.$UnknownMember;

/**
 * @public
 */
export namespace CustomFieldsFilter {
  /**
   * A filter for fields. Only one value can be provided.
   *
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
   * Excludes items matching the filter.
   *
   * @public
   */
  export interface NotMember {
    field?: never;
    not: CustomFieldsFilter;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Provides "and all" filtering.
   *
   * @public
   */
  export interface AndAllMember {
    field?: never;
    not?: never;
    andAll: CustomFieldsFilter[];
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Provides "or all" filtering.
   *
   * @public
   */
  export interface OrAllMember {
    field?: never;
    not?: never;
    andAll?: never;
    orAll: CustomFieldsFilter[];
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    field: (value: FieldFilter) => T;
    not: (value: CustomFieldsFilter) => T;
    andAll: (value: CustomFieldsFilter[]) => T;
    orAll: (value: CustomFieldsFilter[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Boolean condition for a rule. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see [Add case field conditions to a case template](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html).
 *
 * @public
 */
export type BooleanCondition =
  | BooleanCondition.AndAllMember
  | BooleanCondition.EqualToMember
  | BooleanCondition.NotEqualToMember
  | BooleanCondition.OrAllMember
  | BooleanCondition.$UnknownMember;

/**
 * @public
 */
export namespace BooleanCondition {
  /**
   * Tests that operandOne is equal to operandTwo.
   *
   * @public
   */
  export interface EqualToMember {
    equalTo: BooleanOperands;
    notEqualTo?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Tests that operandOne is not equal to operandTwo.
   *
   * @public
   */
  export interface NotEqualToMember {
    equalTo?: never;
    notEqualTo: BooleanOperands;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Combines multiple conditions with AND operator. All conditions must be true for the compound condition to be true.
   *
   * @public
   */
  export interface AndAllMember {
    equalTo?: never;
    notEqualTo?: never;
    andAll: CompoundCondition;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Combines multiple conditions with OR operator. At least one condition must be true for the compound condition to be true.
   *
   * @public
   */
  export interface OrAllMember {
    equalTo?: never;
    notEqualTo?: never;
    andAll?: never;
    orAll: CompoundCondition;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    equalTo?: never;
    notEqualTo?: never;
    andAll?: never;
    orAll?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    equalTo: (value: BooleanOperands) => T;
    notEqualTo: (value: BooleanOperands) => T;
    andAll: (value: CompoundCondition) => T;
    orAll: (value: CompoundCondition) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A compound condition that combines multiple boolean conditions using logical operators. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see [Add case field conditions to a case template](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html).
 *
 * @public
 */
export interface CompoundCondition {
  /**
   * The list of conditions to combine using the logical operator.
   *
   * > **Note:** For API users: A case rule can have a maximum of 5 conditions, spread across a maximum of 2 levels of nesting.
   *
   * @public
   */
  conditions: BooleanCondition[] | undefined;
}

/**
 * A filter for related items of type `Custom`.
 *
 * @public
 */
export interface CustomFilter {
  /**
   * Filter conditions for custom fields.
   *
   * @public
   */
  fields?: CustomFieldsFilter | undefined;
}

/**
 * A rule that controls field visibility based on conditions. Fields can be shown or hidden dynamically based on values in other fields.
 *
 * @public
 */
export interface HiddenCaseRule {
  /**
   * Whether the field is hidden when no conditions match.
   *
   * @public
   */
  defaultValue: boolean | undefined;

  /**
   * A list of conditions that determine field visibility.
   *
   * @public
   */
  conditions: BooleanCondition[] | undefined;
}

/**
 * Required rule type, used to indicate whether a field is required. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see [Add case field conditions to a case template](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html).
 *
 * @public
 */
export interface RequiredCaseRule {
  /**
   * The value of the rule (that is, whether the field is required) should none of the conditions evaluate to true.
   *
   * @public
   */
  defaultValue: boolean | undefined;

  /**
   * List of conditions for the required rule; the first condition to evaluate to true dictates the value of the rule.
   *
   * @public
   */
  conditions: BooleanCondition[] | undefined;
}

/**
 * @public
 */
export interface SearchCasesRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The maximum number of cases to return. When no value is provided, 25 is the default.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A word or phrase used to perform a quick search.
   *
   * @public
   */
  searchTerm?: string | undefined;

  /**
   * A list of filter objects.
   *
   * @public
   */
  filter?: CaseFilter | undefined;

  /**
   * A list of sorts where each sort specifies a field and their sort order to be applied to the results.
   *
   * @public
   */
  sorts?: Sort[] | undefined;

  /**
   * The list of field identifiers to be returned as part of the response.
   *
   * @public
   */
  fields?: FieldIdentifier[] | undefined;
}

/**
 * The list of types of related items and their parameters to use for filtering.
 *
 * @public
 */
export type RelatedItemTypeFilter =
  | RelatedItemTypeFilter.CommentMember
  | RelatedItemTypeFilter.ConnectCaseMember
  | RelatedItemTypeFilter.ContactMember
  | RelatedItemTypeFilter.CustomMember
  | RelatedItemTypeFilter.FileMember
  | RelatedItemTypeFilter.SlaMember
  | RelatedItemTypeFilter.$UnknownMember;

/**
 * @public
 */
export namespace RelatedItemTypeFilter {
  /**
   * A filter for related items of type `Contact`.
   *
   * @public
   */
  export interface ContactMember {
    contact: ContactFilter;
    comment?: never;
    file?: never;
    sla?: never;
    connectCase?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * A filter for related items of type `Comment`.
   *
   * @public
   */
  export interface CommentMember {
    contact?: never;
    comment: CommentFilter;
    file?: never;
    sla?: never;
    connectCase?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * A filter for related items of this type of `File`.
   *
   * @public
   */
  export interface FileMember {
    contact?: never;
    comment?: never;
    file: FileFilter;
    sla?: never;
    connectCase?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Filter for related items of type `SLA`.
   *
   * @public
   */
  export interface SlaMember {
    contact?: never;
    comment?: never;
    file?: never;
    sla: SlaFilter;
    connectCase?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Represents the Amazon Connect case to be created as a related item.
   *
   * @public
   */
  export interface ConnectCaseMember {
    contact?: never;
    comment?: never;
    file?: never;
    sla?: never;
    connectCase: ConnectCaseFilter;
    custom?: never;
    $unknown?: never;
  }

  /**
   * Represents the content of a `Custom` type related item.
   *
   * @public
   */
  export interface CustomMember {
    contact?: never;
    comment?: never;
    file?: never;
    sla?: never;
    connectCase?: never;
    custom: CustomFilter;
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
    connectCase?: never;
    custom?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    contact: (value: ContactFilter) => T;
    comment: (value: CommentFilter) => T;
    file: (value: FileFilter) => T;
    sla: (value: SlaFilter) => T;
    connectCase: (value: ConnectCaseFilter) => T;
    custom: (value: CustomFilter) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface SearchAllRelatedItemsRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of types of related items and their parameters to use for filtering. The filters work as an OR condition: caller gets back related items that match any of the specified filter types.
   *
   * @public
   */
  filters?: RelatedItemTypeFilter[] | undefined;

  /**
   * A structured set of sort terms to specify the order in which related items should be returned. Supports sorting by association time or case ID. The sorts work in the order specified: first sort term takes precedence over subsequent terms.
   *
   * @public
   */
  sorts?: SearchAllRelatedItemsSort[] | undefined;
}

/**
 * @public
 */
export interface SearchRelatedItemsRequest {
  /**
   * The unique identifier of the Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * A unique identifier of the case.
   *
   * @public
   */
  caseId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of types of related items and their parameters to use for filtering.
   *
   * @public
   */
  filters?: RelatedItemTypeFilter[] | undefined;
}

/**
 * Represents what rule type should take place, under what conditions. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see [Add case field conditions to a case template](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html).
 *
 * @public
 */
export type CaseRuleDetails =
  | CaseRuleDetails.FieldOptionsMember
  | CaseRuleDetails.HiddenMember
  | CaseRuleDetails.RequiredMember
  | CaseRuleDetails.$UnknownMember;

/**
 * @public
 */
export namespace CaseRuleDetails {
  /**
   * Required rule type, used to indicate whether a field is required.
   *
   * @public
   */
  export interface RequiredMember {
    required: RequiredCaseRule;
    fieldOptions?: never;
    hidden?: never;
    $unknown?: never;
  }

  /**
   * Which options are available in a child field based on the selected value in a parent field.
   *
   * @public
   */
  export interface FieldOptionsMember {
    required?: never;
    fieldOptions: FieldOptionsCaseRule;
    hidden?: never;
    $unknown?: never;
  }

  /**
   * Whether a field is visible, based on values in other fields.
   *
   * @public
   */
  export interface HiddenMember {
    required?: never;
    fieldOptions?: never;
    hidden: HiddenCaseRule;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    required?: never;
    fieldOptions?: never;
    hidden?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    required: (value: RequiredCaseRule) => T;
    fieldOptions: (value: FieldOptionsCaseRule) => T;
    hidden: (value: HiddenCaseRule) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateCaseRuleRequest {
  /**
   * Unique identifier of a Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * Name of the case rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of a case rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Represents what rule type should take place, under what conditions.
   *
   * @public
   */
  rule: CaseRuleDetails | undefined;
}

/**
 * Detailed case rule information. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see [Add case field conditions to a case template](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html).
 *
 * @public
 */
export interface GetCaseRuleResponse {
  /**
   * Unique identifier of a case rule.
   *
   * @public
   */
  caseRuleId: string | undefined;

  /**
   * Name of the case rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the case rule.
   *
   * @public
   */
  caseRuleArn: string | undefined;

  /**
   * Represents what rule type should take place, under what conditions.
   *
   * @public
   */
  rule: CaseRuleDetails | undefined;

  /**
   * Description of a case rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Indicates whether the resource has been deleted.
   *
   * @public
   */
  deleted?: boolean | undefined;

  /**
   * Timestamp when the resource was created.
   *
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * Timestamp when the resource was created or last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string | null> | undefined;
}

/**
 * @public
 */
export interface UpdateCaseRuleRequest {
  /**
   * Unique identifier of a Cases domain.
   *
   * @public
   */
  domainId: string | undefined;

  /**
   * Unique identifier of a case rule.
   *
   * @public
   */
  caseRuleId: string | undefined;

  /**
   * Name of the case rule.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Description of a case rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Represents what rule type should take place, under what conditions.
   *
   * @public
   */
  rule?: CaseRuleDetails | undefined;
}

/**
 * @public
 */
export interface BatchGetCaseRuleResponse {
  /**
   * A list of detailed case rule information.
   *
   * @public
   */
  caseRules: GetCaseRuleResponse[] | undefined;

  /**
   * A list of case rule errors.
   *
   * @public
   */
  errors: CaseRuleError[] | undefined;

  /**
   * A list of unprocessed case rule identifiers.
   *
   * @public
   */
  unprocessedCaseRules?: string[] | undefined;
}
