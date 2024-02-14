// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { QBusinessServiceException as __BaseException } from "./QBusinessServiceException";

/**
 * @public
 * @enum
 */
export const MemberRelation = {
  AND: "AND",
  OR: "OR",
} as const;

/**
 * @public
 */
export type MemberRelation = (typeof MemberRelation)[keyof typeof MemberRelation];

/**
 * @public
 * @enum
 */
export const ReadAccessType = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type ReadAccessType = (typeof ReadAccessType)[keyof typeof ReadAccessType];

/**
 * @public
 * @enum
 */
export const MembershipType = {
  DATASOURCE: "DATASOURCE",
  INDEX: "INDEX",
} as const;

/**
 * @public
 */
export type MembershipType = (typeof MembershipType)[keyof typeof MembershipType];

/**
 * @public
 * <p>Provides information about a group associated with the principal.</p>
 */
export interface PrincipalGroup {
  /**
   * @public
   * <p>The name of the group.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Provides information about whether to allow or deny access to the principal.</p>
   */
  access: ReadAccessType | undefined;

  /**
   * @public
   * <p>The type of group.</p>
   */
  membershipType?: MembershipType;
}

/**
 * @public
 * <p>Provides information about a user associated with a principal.</p>
 */
export interface PrincipalUser {
  /**
   * @public
   * <p> The identifier of the user. </p>
   */
  id?: string;

  /**
   * @public
   * <p>Provides information about whether to allow or deny access to the principal.</p>
   */
  access: ReadAccessType | undefined;

  /**
   * @public
   * <p>The type of group.</p>
   */
  membershipType?: MembershipType;
}

/**
 * @public
 * <p>Provides user and group information used for filtering documents to use for generating
 *             Amazon Q conversation responses.</p>
 */
export type Principal = Principal.GroupMember | Principal.UserMember | Principal.$UnknownMember;

/**
 * @public
 */
export namespace Principal {
  /**
   * @public
   * <p>The user associated with the principal.</p>
   */
  export interface UserMember {
    user: PrincipalUser;
    group?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p> The group associated with the principal.</p>
   */
  export interface GroupMember {
    user?: never;
    group: PrincipalGroup;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    user?: never;
    group?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    user: (value: PrincipalUser) => T;
    group: (value: PrincipalGroup) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Principal, visitor: Visitor<T>): T => {
    if (value.user !== undefined) return visitor.user(value.user);
    if (value.group !== undefined) return visitor.group(value.group);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>A list of principals. Each principal can be either a <code>USER</code> or a
 *                 <code>GROUP</code> and can be designated document access permissions of either
 *                 <code>ALLOW</code> or <code>DENY</code>.</p>
 */
export interface AccessControl {
  /**
   * @public
   * <p>Contains a list of principals, where a principal can be either a <code>USER</code> or
   *             a <code>GROUP</code>. Each principal can be have the following type of document access:
   *                 <code>ALLOW</code> or <code>DENY</code>.</p>
   */
  principals: Principal[] | undefined;

  /**
   * @public
   * <p>Describes the member relation within a principal list.</p>
   */
  memberRelation?: MemberRelation;
}

/**
 * @public
 * <p>Used to configure access permissions for a document.</p>
 */
export interface AccessConfiguration {
  /**
   * @public
   * <p>A list of <code>AccessControlList</code> objects.</p>
   */
  accessControls: AccessControl[] | undefined;

  /**
   * @public
   * <p>Describes the member relation within the <code>AccessControlList</code> object.</p>
   */
  memberRelation?: MemberRelation;
}

/**
 * @public
 * <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
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
 * <p>A user input field in an plugin action execution payload.</p>
 */
export interface ActionExecutionPayloadField {
  /**
   * @public
   * <p>The content of a user input field in an plugin action execution payload.</p>
   */
  value: __DocumentType | undefined;
}

/**
 * @public
 * <p>Performs an Amazon Q plugin action during a non-streaming chat
 *             conversation.</p>
 */
export interface ActionExecution {
  /**
   * @public
   * <p>The identifier of the plugin the action is attached to.</p>
   */
  pluginId: string | undefined;

  /**
   * @public
   * <p>A mapping of field names to the field values in input that an end user provides to
   *             Amazon Q requests to perform their plugin action. </p>
   */
  payload: Record<string, ActionExecutionPayloadField> | undefined;

  /**
   * @public
   * <p>A string used to retain information about the hierarchical contexts within an action
   *             execution event payload.</p>
   */
  payloadFieldNameSeparator: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ActionPayloadFieldType = {
  ARRAY: "ARRAY",
  BOOLEAN: "BOOLEAN",
  NUMBER: "NUMBER",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type ActionPayloadFieldType = (typeof ActionPayloadFieldType)[keyof typeof ActionPayloadFieldType];

/**
 * @public
 * <p>Information about the field values that an end user can use to provide to
 *             Amazon Q for Amazon Q to perform the requested plugin action.</p>
 */
export interface ActionReviewPayloadFieldAllowedValue {
  /**
   * @public
   * <p>The field value.</p>
   */
  value?: __DocumentType;

  /**
   * @public
   * <p>The name of the field.</p>
   */
  displayValue?: __DocumentType;
}

/**
 * @public
 * <p>A user input field in an plugin action review payload.</p>
 */
export interface ActionReviewPayloadField {
  /**
   * @public
   * <p> The name of the field. </p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The display order of fields in a payload.</p>
   */
  displayOrder?: number;

  /**
   * @public
   * <p>The type of field. </p>
   */
  type?: ActionPayloadFieldType;

  /**
   * @public
   * <p>The field value.</p>
   */
  value?: __DocumentType;

  /**
   * @public
   * <p>Information about the field values that an end user can use to provide to
   *             Amazon Q for Amazon Q to perform the requested plugin action.</p>
   */
  allowedValues?: ActionReviewPayloadFieldAllowedValue[];

  /**
   * @public
   * <p>Information about whether the field is required.</p>
   */
  required?: boolean;
}

/**
 * @public
 * @enum
 */
export const PluginType = {
  JIRA: "JIRA",
  SALESFORCE: "SALESFORCE",
  SERVICE_NOW: "SERVICE_NOW",
  ZENDESK: "ZENDESK",
} as const;

/**
 * @public
 */
export type PluginType = (typeof PluginType)[keyof typeof PluginType];

/**
 * @public
 * <p>An output event that Amazon Q returns to an user who wants to perform a plugin
 *             action during a non-streaming chat conversation. It contains information about the
 *             selected action with a list of possible user input fields, some pre-populated by
 *             Amazon Q.</p>
 */
export interface ActionReview {
  /**
   * @public
   * <p>The identifier of the plugin associated with the action review.</p>
   */
  pluginId?: string;

  /**
   * @public
   * <p>The type of plugin.</p>
   */
  pluginType?: PluginType;

  /**
   * @public
   * <p>Field values that an end user needs to provide to Amazon Q for Amazon Q to
   *             perform the requested plugin action.</p>
   */
  payload?: Record<string, ActionReviewPayloadField>;

  /**
   * @public
   * <p>A string used to retain information about the hierarchical contexts within an action
   *             review payload.</p>
   */
  payloadFieldNameSeparator?: string;
}

/**
 * @public
 * @enum
 */
export const ApplicationStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

/**
 * @public
 * <p>Summary information for an Amazon Q application.</p>
 */
export interface Application {
  /**
   * @public
   * <p>The name of the Amazon Q application.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The identifier for the Amazon Q application.</p>
   */
  applicationId?: string;

  /**
   * @public
   * <p>The Unix timestamp when the Amazon Q application was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the Amazon Q application was last updated. </p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The status of the Amazon Q application. The application is ready to use when the
   *             status is <code>ACTIVE</code>.</p>
   */
  status?: ApplicationStatus;
}

/**
 * @public
 * <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistences with your resources and try again.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier of the resource affected.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the resource affected.</p>
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
export const AttachmentsControlMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AttachmentsControlMode = (typeof AttachmentsControlMode)[keyof typeof AttachmentsControlMode];

/**
 * @public
 * <p>Configuration information for the file upload during chat feature.</p>
 */
export interface AttachmentsConfiguration {
  /**
   * @public
   * <p>Status information about whether file upload functionality is activated or deactivated
   *             for your end user.</p>
   */
  attachmentsControlMode: AttachmentsControlMode | undefined;
}

/**
 * @public
 * <p>Provides the identifier of the KMS key used to encrypt data indexed by
 *             Amazon Q. Amazon Q doesn't support asymmetric keys.</p>
 */
export interface EncryptionConfiguration {
  /**
   * @public
   * <p>The identifier of the KMS key. Amazon Q doesn't support asymmetric
   *             keys.</p>
   */
  kmsKeyId?: string;
}

/**
 * @public
 * <p>A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and
 *             values can consist of Unicode letters, digits, white space, and any of the following
 *             symbols: _ . : / = + - @.</p>
 */
export interface Tag {
  /**
   * @public
   * <p> The key for the tag. Keys are not case sensitive and must be unique for the
   *             Amazon Q application or data source.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The value associated with the tag. The value may be an empty string but it can't be
   *             null.</p>
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * @public
   * <p>A name for the Amazon Q application. </p>
   */
  displayName: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of an IAM role with permissions to access your Amazon
   *                 CloudWatch logs and metrics.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>A description for the Amazon Q application. </p>
   */
  description?: string;

  /**
   * @public
   * <p>The identifier of the KMS key that is used to encrypt your data.
   *             Amazon Q doesn't support asymmetric keys.</p>
   */
  encryptionConfiguration?: EncryptionConfiguration;

  /**
   * @public
   * <p>A list of key-value pairs that identify or categorize your Amazon Q application.
   *             You can also use tags to help control access to the application. Tag keys and values can
   *             consist of Unicode letters, digits, white space, and any of the following symbols: _ . :
   *             / = + - @.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>A token that you provide to identify the request to create your Amazon Q
   *             application.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>An option to allow end users to upload files directly during chat.</p>
   */
  attachmentsConfiguration?: AttachmentsConfiguration;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * @public
   * <p>The identifier of the Amazon Q application.</p>
   */
  applicationId?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the Amazon Q application. </p>
   */
  applicationArn?: string;
}

/**
 * @public
 * <p>An issue occurred with the internal server used for your Amazon Q service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
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
  }
}

/**
 * @public
 * <p>The resource you want to use doesn’t exist. Make sure you have provided the correct
 *             resource and try again.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier of the resource affected.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the resource affected.</p>
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
 * <p>You have exceeded the set limits for your Amazon Q service. </p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier of the resource affected.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the resource affected.</p>
   */
  resourceType: string | undefined;

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
  }
}

/**
 * @public
 * <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
 * <p>The input failed to meet the constraints specified by Amazon Q in a specified
 *             field.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The field name where the invalid entry was detected.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A message about the validation exception.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>The input doesn't meet the constraints set by the Amazon Q service. Provide the
 *             correct input and try again.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason for the <code>ValidationException</code>.</p>
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * @public
   * <p>The input field(s) that failed validation.</p>
   */
  fields?: ValidationExceptionField[];

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
    this.fields = opts.fields;
  }
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application.</p>
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application.</p>
   */
  applicationId: string | undefined;
}

/**
 * @public
 * <p>Configuration information about the file upload during chat feature for your
 *             application.</p>
 */
export interface AppliedAttachmentsConfiguration {
  /**
   * @public
   * <p>Information about whether file upload during chat functionality is activated for your
   *             application.</p>
   */
  attachmentsControlMode?: AttachmentsControlMode;
}

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  INTERNAL_ERROR: "InternalError",
  INVALID_REQUEST: "InvalidRequest",
  RESOURCE_INACTIVE: "ResourceInactive",
  RESOURCE_NOT_FOUND: "ResourceNotFound",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * <p>Provides information about a data source sync error.</p>
 */
export interface ErrorDetail {
  /**
   * @public
   * <p>The message explaining the data source sync error.</p>
   */
  errorMessage?: string;

  /**
   * @public
   * <p>The code associated with the data source sync error.</p>
   */
  errorCode?: ErrorCode;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * @public
   * <p>The name of the Amazon Q application.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Q application.</p>
   */
  applicationId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Q application.</p>
   */
  applicationArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM with permissions to access
   *             your CloudWatch logs and metrics.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The status of the Amazon Q application.</p>
   */
  status?: ApplicationStatus;

  /**
   * @public
   * <p>A description for the Amazon Q application.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services
   *             KMS key that is used to encrypt your data. Amazon Q doesn't support
   *             asymmetric keys.</p>
   */
  encryptionConfiguration?: EncryptionConfiguration;

  /**
   * @public
   * <p>The Unix timestamp when the Amazon Q application was last updated.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the Amazon Q application was last updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>If the <code>Status</code> field is set to <code>ERROR</code>, the
   *                 <code>ErrorMessage</code> field contains a description of the error that caused the
   *             synchronization to fail.</p>
   */
  error?: ErrorDetail;

  /**
   * @public
   * <p>Settings for whether end users can upload files directly during chat.</p>
   */
  attachmentsConfiguration?: AppliedAttachmentsConfiguration;
}

/**
 * @public
 * <p>Provides information about index capacity configuration.</p>
 */
export interface IndexCapacityConfiguration {
  /**
   * @public
   * <p>The number of storage units configured for an Amazon Q index.</p>
   */
  units?: number;
}

/**
 * @public
 */
export interface CreateIndexRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application using the index.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>A name for the Amazon Q index.</p>
   */
  displayName: string | undefined;

  /**
   * @public
   * <p>A description for the Amazon Q index.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of key-value pairs that identify or categorize the index. You can also use tags
   *             to help control access to the index. Tag keys and values can consist of Unicode letters,
   *             digits, white space, and any of the following symbols: _ . : / = + - @.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The capacity units you want to provision for your index. You can add and remove
   *             capacity to fit your usage needs.</p>
   */
  capacityConfiguration?: IndexCapacityConfiguration;

  /**
   * @public
   * <p>A token that you provide to identify the request to create an index. Multiple calls to
   *             the <code>CreateIndex</code> API with the same client token will create only one
   *             index.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateIndexResponse {
  /**
   * @public
   * <p>The identifier for the Amazon Q index.</p>
   */
  indexId?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of an Amazon Q index.</p>
   */
  indexArn?: string;
}

/**
 * @public
 * @enum
 */
export const DocumentEnrichmentConditionOperator = {
  BEGINS_WITH: "BEGINS_WITH",
  CONTAINS: "CONTAINS",
  EQUALS: "EQUALS",
  EXISTS: "EXISTS",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUALS: "GREATER_THAN_OR_EQUALS",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUALS: "LESS_THAN_OR_EQUALS",
  NOT_CONTAINS: "NOT_CONTAINS",
  NOT_EQUALS: "NOT_EQUALS",
  NOT_EXISTS: "NOT_EXISTS",
} as const;

/**
 * @public
 */
export type DocumentEnrichmentConditionOperator =
  (typeof DocumentEnrichmentConditionOperator)[keyof typeof DocumentEnrichmentConditionOperator];

/**
 * @public
 * <p>The value of a document attribute. You can only provide one value for a document
 *             attribute.</p>
 */
export type DocumentAttributeValue =
  | DocumentAttributeValue.DateValueMember
  | DocumentAttributeValue.LongValueMember
  | DocumentAttributeValue.StringListValueMember
  | DocumentAttributeValue.StringValueMember
  | DocumentAttributeValue.$UnknownMember;

/**
 * @public
 */
export namespace DocumentAttributeValue {
  /**
   * @public
   * <p>A string.</p>
   */
  export interface StringValueMember {
    stringValue: string;
    stringListValue?: never;
    longValue?: never;
    dateValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A list of strings.</p>
   */
  export interface StringListValueMember {
    stringValue?: never;
    stringListValue: string[];
    longValue?: never;
    dateValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A long integer value. </p>
   */
  export interface LongValueMember {
    stringValue?: never;
    stringListValue?: never;
    longValue: number;
    dateValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A date expressed as an ISO 8601 string.</p>
   *          <p>It's important for the time zone to be included in the ISO 8601 date-time format. For
   *             example, 2012-03-25T12:30:10+01:00 is the ISO 8601 date-time format for March 25th 2012
   *             at 12:30PM (plus 10 seconds) in Central European Time. </p>
   */
  export interface DateValueMember {
    stringValue?: never;
    stringListValue?: never;
    longValue?: never;
    dateValue: Date;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValue?: never;
    stringListValue?: never;
    longValue?: never;
    dateValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    stringValue: (value: string) => T;
    stringListValue: (value: string[]) => T;
    longValue: (value: number) => T;
    dateValue: (value: Date) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DocumentAttributeValue, visitor: Visitor<T>): T => {
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.stringListValue !== undefined) return visitor.stringListValue(value.stringListValue);
    if (value.longValue !== undefined) return visitor.longValue(value.longValue);
    if (value.dateValue !== undefined) return visitor.dateValue(value.dateValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The condition used for the target document attribute or metadata field when ingesting
 *             documents into Amazon Q. You use this with <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeTarget.html">
 *                <code>DocumentAttributeTarget</code>
 *             </a> to apply the condition.</p>
 *          <p>For example, you can create the 'Department' target field and have it prefill
 *             department names associated with the documents based on information in the 'Source_URI'
 *             field. Set the condition that if the 'Source_URI' field contains 'financial' in its URI
 *             value, then prefill the target field 'Department' with the target value 'Finance' for
 *             the document.</p>
 *          <p>Amazon Q can't create a target field if it has not already been created as an
 *             index field. After you create your index field, you can create a document metadata field
 *             using <code>DocumentAttributeTarget</code>. Amazon Q then will map your newly
 *             created metadata field to your index field.</p>
 */
export interface DocumentAttributeCondition {
  /**
   * @public
   * <p>The identifier of the document attribute used for the condition.</p>
   *          <p>For example, 'Source_URI' could be an identifier for the attribute or metadata field
   *             that contains source URIs associated with the documents.</p>
   *          <p>Amazon Q currently doesn't support <code>_document_body</code> as an attribute
   *             key used for the condition.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The identifier of the document attribute used for the condition.</p>
   *          <p>For example, 'Source_URI' could be an identifier for the attribute or metadata field
   *             that contains source URIs associated with the documents.</p>
   *          <p>Amazon Kendra currently does not support <code>_document_body</code> as an
   *             attribute key used for the condition.</p>
   */
  operator: DocumentEnrichmentConditionOperator | undefined;

  /**
   * @public
   * <p>The value of a document attribute. You can only provide one value for a document
   *             attribute.</p>
   */
  value?: DocumentAttributeValue;
}

/**
 * @public
 * @enum
 */
export const DocumentContentOperator = {
  DELETE: "DELETE",
} as const;

/**
 * @public
 */
export type DocumentContentOperator = (typeof DocumentContentOperator)[keyof typeof DocumentContentOperator];

/**
 * @public
 * @enum
 */
export const AttributeValueOperator = {
  DELETE: "DELETE",
} as const;

/**
 * @public
 */
export type AttributeValueOperator = (typeof AttributeValueOperator)[keyof typeof AttributeValueOperator];

/**
 * @public
 * <p>The target document attribute or metadata field you want to alter when ingesting
 *             documents into Amazon Q.</p>
 *          <p>For example, you can delete all customer identification numbers associated with the
 *             documents, stored in the document metadata field called 'Customer_ID' by setting the
 *             target key as 'Customer_ID' and the deletion flag to <code>TRUE</code>. This removes all
 *             customer ID values in the field 'Customer_ID'. This would scrub personally identifiable
 *             information from each document's metadata.</p>
 *          <p>Amazon Q can't create a target field if it has not already been created as an
 *             index field. After you create your index field, you can create a document metadata field
 *             using <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeTarget.html">
 *                <code>DocumentAttributeTarget</code>
 *             </a>. Amazon Q
 *             will then map your newly created document attribute to your index field.</p>
 *          <p>You can also use this with <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeCondition.html">
 *                <code>DocumentAttributeCondition</code>
 *             </a>.</p>
 */
export interface DocumentAttributeTarget {
  /**
   * @public
   * <p>The identifier of the target document attribute or metadata field. For example,
   *             'Department' could be an identifier for the target attribute or metadata field that
   *             includes the department names associated with the documents.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The value of a document attribute. You can only provide one value for a document
   *             attribute.</p>
   */
  value?: DocumentAttributeValue;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to delete the existing target value for your specified target
   *             attribute key. You cannot create a target value and set this to
   *             <code>TRUE</code>.</p>
   */
  attributeValueOperator?: AttributeValueOperator;
}

/**
 * @public
 * <p>Provides the configuration information for applying basic logic to alter document
 *             metadata and content when ingesting documents into Amazon Q.</p>
 *          <p>To apply advanced logic, to go beyond what you can do with basic logic, see <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_HookConfiguration.html">
 *                <code>HookConfiguration</code>
 *             </a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html">Custom document enrichment</a>. </p>
 */
export interface InlineDocumentEnrichmentConfiguration {
  /**
   * @public
   * <p>The condition used for the target document attribute or metadata field when ingesting
   *             documents into Amazon Q. You use this with <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeTarget.html">
   *                <code>DocumentAttributeTarget</code>
   *             </a> to apply the condition.</p>
   *          <p>For example, you can create the 'Department' target field and have it prefill
   *             department names associated with the documents based on information in the 'Source_URI'
   *             field. Set the condition that if the 'Source_URI' field contains 'financial' in its URI
   *             value, then prefill the target field 'Department' with the target value 'Finance' for
   *             the document.</p>
   *          <p>Amazon Q can't create a target field if it has not already been created as an
   *             index field. After you create your index field, you can create a document metadata field
   *             using <code>DocumentAttributeTarget</code>. Amazon Q then will map your newly
   *             created metadata field to your index field.</p>
   */
  condition?: DocumentAttributeCondition;

  /**
   * @public
   * <p>The target document attribute or metadata field you want to alter when ingesting
   *             documents into Amazon Q.</p>
   *          <p>For example, you can delete all customer identification numbers associated with the
   *             documents, stored in the document metadata field called 'Customer_ID' by setting the
   *             target key as 'Customer_ID' and the deletion flag to <code>TRUE</code>. This removes all
   *             customer ID values in the field 'Customer_ID'. This would scrub personally identifiable
   *             information from each document's metadata.</p>
   *          <p>Amazon Q can't create a target field if it has not already been created as an
   *             index field. After you create your index field, you can create a document metadata field
   *             using <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeTarget.html">
   *                <code>DocumentAttributeTarget</code>
   *             </a>. Amazon Q
   *             will then map your newly created document attribute to your index field.</p>
   *          <p>You can also use this with <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeCondition.html">
   *                <code>DocumentAttributeCondition</code>
   *             </a>.</p>
   */
  target?: DocumentAttributeTarget;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to delete content if the condition used for the target attribute is
   *             met.</p>
   */
  documentContentOperator?: DocumentContentOperator;
}

/**
 * @public
 * <p>Provides the configuration information for invoking a Lambda function in
 *                 Lambda to alter document metadata and content when ingesting
 *             documents into Amazon Q.</p>
 *          <p>You can configure your Lambda function using <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentEnrichmentConfiguration.html">PreExtractionHookConfiguration</a> if you want to apply advanced alterations on
 *             the original or raw documents.</p>
 *          <p>If you want to apply advanced alterations on the Amazon Q structured documents,
 *             you must configure your Lambda function using <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentEnrichmentConfiguration.html">PostExtractionHookConfiguration</a>.</p>
 *          <p>You can only invoke one Lambda function. However, this function can invoke
 *             other functions it requires.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html">Custom document enrichment</a>. </p>
 */
export interface HookConfiguration {
  /**
   * @public
   * <p>The condition used for when a Lambda function should be invoked.</p>
   *          <p>For example, you can specify a condition that if there are empty date-time values,
   *             then Amazon Q should invoke a function that inserts the current date-time.</p>
   */
  invocationCondition?: DocumentAttributeCondition;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a role with permission to run a Lambda
   *             function during ingestion. For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/iam-roles.html#cde-iam-role">IAM roles for
   *                 Custom Document Enrichment (CDE)</a>.</p>
   */
  lambdaArn?: string;

  /**
   * @public
   * <p>Stores the original, raw documents or the structured, parsed documents before and
   *             after altering them. For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/cde-lambda-operations.html#cde-lambda-operations-data-contracts">Data contracts for Lambda functions</a>.</p>
   */
  s3BucketName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a role with permission to run
   *                 <code>PreExtractionHookConfiguration</code> and
   *                 <code>PostExtractionHookConfiguration</code> for altering document metadata and
   *             content during the document ingestion process.</p>
   */
  roleArn?: string;
}

/**
 * @public
 * <p>Provides the configuration information for altering document metadata and content
 *             during the document ingestion process.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html">Custom document
 *                 enrichment</a>.</p>
 */
export interface DocumentEnrichmentConfiguration {
  /**
   * @public
   * <p>Configuration information to alter document attributes or metadata fields and content
   *             when ingesting documents into Amazon Q.</p>
   */
  inlineConfigurations?: InlineDocumentEnrichmentConfiguration[];

  /**
   * @public
   * <p>Provides the configuration information for invoking a Lambda function in
   *                 Lambda to alter document metadata and content when ingesting
   *             documents into Amazon Q.</p>
   *          <p>You can configure your Lambda function using <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentEnrichmentConfiguration.html">PreExtractionHookConfiguration</a> if you want to apply advanced alterations on
   *             the original or raw documents.</p>
   *          <p>If you want to apply advanced alterations on the Amazon Q structured documents,
   *             you must configure your Lambda function using <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentEnrichmentConfiguration.html">PostExtractionHookConfiguration</a>.</p>
   *          <p>You can only invoke one Lambda function. However, this function can invoke
   *             other functions it requires.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html">Custom document enrichment</a>. </p>
   */
  preExtractionHookConfiguration?: HookConfiguration;

  /**
   * @public
   * <p>Provides the configuration information for invoking a Lambda function in
   *                 Lambda to alter document metadata and content when ingesting
   *             documents into Amazon Q.</p>
   *          <p>You can configure your Lambda function using <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentEnrichmentConfiguration.html">PreExtractionHookConfiguration</a> if you want to apply advanced alterations on
   *             the original or raw documents.</p>
   *          <p>If you want to apply advanced alterations on the Amazon Q structured documents,
   *             you must configure your Lambda function using <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentEnrichmentConfiguration.html">PostExtractionHookConfiguration</a>.</p>
   *          <p>You can only invoke one Lambda function. However, this function can invoke
   *             other functions it requires.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html">Custom document enrichment</a>. </p>
   */
  postExtractionHookConfiguration?: HookConfiguration;
}

/**
 * @public
 * <p>Provides configuration information needed to connect to an Amazon VPC (Virtual
 *             Private Cloud).</p>
 */
export interface DataSourceVpcConfiguration {
  /**
   * @public
   * <p>A list of identifiers for subnets within your Amazon VPC. The subnets should
   *             be able to connect to each other in the VPC, and they should have outgoing access to the
   *             Internet through a NAT device.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * @public
   * <p>A list of identifiers of security groups within your Amazon VPC. The security
   *             groups should enable Amazon Q to connect to the data source.</p>
   */
  securityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceRequest {
  /**
   * @public
   * <p> The identifier of the Amazon Q application the data source will be attached
   *             to.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the index that you want to use with the data source
   *             connector.</p>
   */
  indexId: string | undefined;

  /**
   * @public
   * <p>A name for the data source connector.</p>
   */
  displayName: string | undefined;

  /**
   * @public
   * <p>Configuration information to connect to your data source repository. For configuration
   *             templates for your specific data source, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/connectors-list.html.html">Supported
   *                 connectors</a>.</p>
   */
  configuration: __DocumentType | undefined;

  /**
   * @public
   * <p>Configuration information for an Amazon VPC (Virtual Private Cloud) to connect
   *             to your data source. For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/connector-vpc.html">Using
   *                     Amazon VPC with Amazon Q connectors</a>.</p>
   */
  vpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * @public
   * <p>A description for the data source connector.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of key-value pairs that identify or categorize the data source connector. You
   *             can also use tags to help control access to the data source connector. Tag keys and
   *             values can consist of Unicode letters, digits, white space, and any of the following
   *             symbols: _ . : / = + - @.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>Sets the frequency for Amazon Q to check the documents in your data source
   *             repository and update your index. If you don't set a schedule, Amazon Q won't
   *             periodically update the index.</p>
   *          <p>Specify a <code>cron-</code> format schedule string or an empty string to indicate
   *             that the index is updated on demand. You can't specify the <code>Schedule</code>
   *             parameter when the <code>Type</code> parameter is set to <code>CUSTOM</code>. If you do,
   *             you receive a <code>ValidationException</code> exception. </p>
   */
  syncSchedule?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to access
   *             the data source and required resources.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>A token you provide to identify a request to create a data source connector. Multiple
   *             calls to the <code>CreateDataSource</code> API with the same client token will create
   *             only one data source connector. </p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Provides the configuration information for altering document metadata and content
   *             during the document ingestion process.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html">Custom document
   *                 enrichment</a>.</p>
   */
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
}

/**
 * @public
 */
export interface CreateDataSourceResponse {
  /**
   * @public
   * <p>The identifier of the data source connector.</p>
   */
  dataSourceId?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of a data source in an Amazon Q application.
   *         </p>
   */
  dataSourceArn?: string;
}

/**
 * @public
 */
export interface DeleteDataSourceRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application used with the data source
   *             connector.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the index used with the data source connector.</p>
   */
  indexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source connector that you want to delete. </p>
   */
  dataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceResponse {}

/**
 * @public
 */
export interface GetDataSourceRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identfier of the index used with the data source connector.</p>
   */
  indexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source connector.</p>
   */
  dataSourceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSourceStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING_CREATION: "PENDING_CREATION",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type DataSourceStatus = (typeof DataSourceStatus)[keyof typeof DataSourceStatus];

/**
 * @public
 */
export interface GetDataSourceResponse {
  /**
   * @public
   * <p>The identifier of the Amazon Q application.</p>
   */
  applicationId?: string;

  /**
   * @public
   * <p>The identifier of the index linked to the data source connector.</p>
   */
  indexId?: string;

  /**
   * @public
   * <p>The identifier of the data source connector.</p>
   */
  dataSourceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  dataSourceArn?: string;

  /**
   * @public
   * <p>The name for the data source connector.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The type of the data source connector. For example, <code>S3</code>.</p>
   */
  type?: string;

  /**
   * @public
   * <p>The details of how the data source connector is configured.</p>
   */
  configuration?: __DocumentType;

  /**
   * @public
   * <p>Configuration information for an Amazon VPC (Virtual Private Cloud) to connect
   *             to your data source.</p>
   */
  vpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * @public
   * <p>The Unix timestamp when the data source connector was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the data source connector was last updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The description for the data source connector.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The current status of the data source connector. When the <code>Status</code> field
   *             value is <code>FAILED</code>, the <code>ErrorMessage</code> field contains a description
   *             of the error that caused the data source connector to fail.</p>
   */
  status?: DataSourceStatus;

  /**
   * @public
   * <p>The schedule for Amazon Q to update the index.</p>
   */
  syncSchedule?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role with permission to access the data source
   *             and required resources.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>When the <code>Status</code> field value is <code>FAILED</code>, the
   *                 <code>ErrorMessage</code> field contains a description of the error that caused the
   *             data source connector to fail.</p>
   */
  error?: ErrorDetail;

  /**
   * @public
   * <p>Provides the configuration information for altering document metadata and content
   *             during the document ingestion process.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html">Custom document
   *                 enrichment</a>.</p>
   */
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
}

/**
 * @public
 */
export interface ListDataSourcesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application linked to the data source
   *             connectors.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the index used with one or more data source connectors.</p>
   */
  indexId: string | undefined;

  /**
   * @public
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of Amazon Q data source
   *             connectors.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of data source connectors to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A data source in an Amazon Q application.</p>
 */
export interface DataSource {
  /**
   * @public
   * <p>The name of the Amazon Q data source.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Q data source.</p>
   */
  dataSourceId?: string;

  /**
   * @public
   * <p>The type of the Amazon Q data source.</p>
   */
  type?: string;

  /**
   * @public
   * <p>The Unix timestamp when the Amazon Q data source was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the Amazon Q data source was last updated. </p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The status of the Amazon Q data source.</p>
   */
  status?: DataSourceStatus;
}

/**
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * @public
   * <p>An array of summary information for one or more data source connector.</p>
   */
  dataSources?: DataSource[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Q returns this token. You can use this token
   *             in a subsequent request to retrieve the next set of data source connectors.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateDataSourceRequest {
  /**
   * @public
   * <p> The identifier of the Amazon Q application the data source is attached
   *             to.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the index attached to the data source connector.</p>
   */
  indexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source connector.</p>
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * <p>A name of the data source connector.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>Provides the configuration information for an Amazon Q data source.</p>
   */
  configuration?: __DocumentType;

  /**
   * @public
   * <p>Provides configuration information needed to connect to an Amazon VPC (Virtual
   *             Private Cloud).</p>
   */
  vpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * @public
   * <p>The description of the data source connector.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The chosen update frequency for your data source.</p>
   */
  syncSchedule?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to access
   *             the data source and required resources.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>Provides the configuration information for altering document metadata and content
   *             during the document ingestion process.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html">Custom document
   *                 enrichment</a>.</p>
   */
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
}

/**
 * @public
 */
export interface UpdateDataSourceResponse {}

/**
 * @public
 */
export interface DeleteIndexRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application the Amazon Q index is linked
   *             to.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Q index.</p>
   */
  indexId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIndexResponse {}

/**
 * @public
 */
export interface GetIndexRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application connected to the index.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Q index you want information on.</p>
   */
  indexId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const AttributeType = {
  DATE: "DATE",
  NUMBER: "NUMBER",
  STRING: "STRING",
  STRING_LIST: "STRING_LIST",
} as const;

/**
 * @public
 */
export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType];

/**
 * @public
 * <p>Configuration information for document attributes. Document attributes are metadata or
 *             fields associated with your documents. For example, the company department name
 *             associated with each document.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/doc-attributes.html">Understanding document attributes</a>.</p>
 */
export interface DocumentAttributeConfiguration {
  /**
   * @public
   * <p>The name of the document attribute.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The type of document attribute.</p>
   */
  type?: AttributeType;

  /**
   * @public
   * <p>Information about whether the document attribute can be used by an end user to search
   *             for information on their web experience.</p>
   */
  search?: Status;
}

/**
 * @public
 * <p>Provides information about text documents in an index.</p>
 */
export interface TextDocumentStatistics {
  /**
   * @public
   * <p>The total size, in bytes, of the indexed documents.</p>
   */
  indexedTextBytes?: number;

  /**
   * @public
   * <p>The number of text documents indexed.</p>
   */
  indexedTextDocumentCount?: number;
}

/**
 * @public
 * <p>Provides information about the number of documents in an index.</p>
 */
export interface IndexStatistics {
  /**
   * @public
   * <p>The number of documents indexed.</p>
   */
  textDocumentStatistics?: TextDocumentStatistics;
}

/**
 * @public
 * @enum
 */
export const IndexStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type IndexStatus = (typeof IndexStatus)[keyof typeof IndexStatus];

/**
 * @public
 */
export interface GetIndexResponse {
  /**
   * @public
   * <p>The identifier of the Amazon Q application associated with the index.</p>
   */
  applicationId?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Q index.</p>
   */
  indexId?: string;

  /**
   * @public
   * <p>The name of the Amazon Q index.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the Amazon Q index. </p>
   */
  indexArn?: string;

  /**
   * @public
   * <p>The current status of the index. When the value is <code>ACTIVE</code>, the index is
   *             ready for use. If the <code>Status</code> field value is <code>FAILED</code>, the
   *                 <code>ErrorMessage</code> field contains a message that explains why.</p>
   */
  status?: IndexStatus;

  /**
   * @public
   * <p>The description for the Amazon Q index.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Unix timestamp when the Amazon Q index was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the Amazon Q index was last updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The storage capacity units chosen for your Amazon Q index.</p>
   */
  capacityConfiguration?: IndexCapacityConfiguration;

  /**
   * @public
   * <p>Configuration information for document attributes or metadata. Document metadata are
   *             fields associated with your documents. For example, the company department name
   *             associated with each document. For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/doc-attributes-types.html#doc-attributes">Understanding document attributes</a>.</p>
   */
  documentAttributeConfigurations?: DocumentAttributeConfiguration[];

  /**
   * @public
   * <p>When the <code>Status</code> field value is <code>FAILED</code>, the
   *                 <code>ErrorMessage</code> field contains a message that explains why.</p>
   */
  error?: ErrorDetail;

  /**
   * @public
   * <p>Provides information about the number of documents indexed.</p>
   */
  indexStatistics?: IndexStatistics;
}

/**
 * @public
 */
export interface ListIndicesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application connected to the index.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>If the maxResults response was incomplete because there is more data to retrieve,
   *             Amazon Q returns a pagination token in the response. You can use this pagination
   *             token to retrieve the next set of Amazon Q indices.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of indices to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information for your Amazon Q index.</p>
 */
export interface Index {
  /**
   * @public
   * <p>The name of the index.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The identifier for the index.</p>
   */
  indexId?: string;

  /**
   * @public
   * <p>The Unix timestamp when the index was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the index was last updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The current status of the index. When the status is <code>ACTIVE</code>, the index is
   *             ready.</p>
   */
  status?: IndexStatus;
}

/**
 * @public
 */
export interface ListIndicesResponse {
  /**
   * @public
   * <p>If the response is truncated, Amazon Q returns this token that you can use in the
   *             subsequent request to retrieve the next set of indexes.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of information on the items in one or more indexes.</p>
   */
  indices?: Index[];
}

/**
 * @public
 */
export interface UpdateIndexRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application connected to the index.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Q index.</p>
   */
  indexId: string | undefined;

  /**
   * @public
   * <p>The name of the Amazon Q index.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The description of the Amazon Q index.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The storage capacity units you want to provision for your Amazon Q index. You can
   *             add and remove capacity to fit your usage needs.</p>
   */
  capacityConfiguration?: IndexCapacityConfiguration;

  /**
   * @public
   * <p>Configuration information for document metadata or fields. Document metadata are
   *             fields or attributes associated with your documents. For example, the company department
   *             name associated with each document. For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/doc-attributes-types.html#doc-attributes">Understanding document attributes</a>.</p>
   */
  documentAttributeConfigurations?: DocumentAttributeConfiguration[];
}

/**
 * @public
 */
export interface UpdateIndexResponse {}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * @public
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of Amazon Q applications.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of Amazon Q applications to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * @public
   * <p>If the response is truncated, Amazon Q returns this token. You can use this token
   *             in a subsequent request to retrieve the next set of applications.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of summary information on the configuration of one or more Amazon Q
   *             applications.</p>
   */
  applications?: Application[];
}

/**
 * @public
 * <p>Information about the basic authentication credentials used to configure a
 *             plugin.</p>
 */
export interface BasicAuthConfiguration {
  /**
   * @public
   * <p>The ARN of the Secrets Manager secret that stores the basic authentication
   *             credentials used for plugin configuration..</p>
   */
  secretArn: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role used by Amazon Q to access the basic
   *             authentication credentials stored in a Secrets Manager secret.</p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 * <p>Information about the OAuth 2.0 authentication credential/token used to configure a
 *             plugin.</p>
 */
export interface OAuth2ClientCredentialConfiguration {
  /**
   * @public
   * <p>The ARN of the Secrets Manager secret that stores the OAuth 2.0 credentials/token
   *             used for plugin configuration.</p>
   */
  secretArn: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role used by Amazon Q to access the OAuth 2.0
   *             authentication credentials stored in a Secrets Manager secret.</p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 * <p>Authentication configuration information for an Amazon Q plugin.</p>
 */
export type PluginAuthConfiguration =
  | PluginAuthConfiguration.BasicAuthConfigurationMember
  | PluginAuthConfiguration.OAuth2ClientCredentialConfigurationMember
  | PluginAuthConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace PluginAuthConfiguration {
  /**
   * @public
   * <p>Information about the basic authentication credentials used to configure a
   *             plugin.</p>
   */
  export interface BasicAuthConfigurationMember {
    basicAuthConfiguration: BasicAuthConfiguration;
    oAuth2ClientCredentialConfiguration?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Information about the OAuth 2.0 authentication credential/token used to configure a
   *             plugin.</p>
   */
  export interface OAuth2ClientCredentialConfigurationMember {
    basicAuthConfiguration?: never;
    oAuth2ClientCredentialConfiguration: OAuth2ClientCredentialConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    basicAuthConfiguration?: never;
    oAuth2ClientCredentialConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    basicAuthConfiguration: (value: BasicAuthConfiguration) => T;
    oAuth2ClientCredentialConfiguration: (value: OAuth2ClientCredentialConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PluginAuthConfiguration, visitor: Visitor<T>): T => {
    if (value.basicAuthConfiguration !== undefined) return visitor.basicAuthConfiguration(value.basicAuthConfiguration);
    if (value.oAuth2ClientCredentialConfiguration !== undefined)
      return visitor.oAuth2ClientCredentialConfiguration(value.oAuth2ClientCredentialConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreatePluginRequest {
  /**
   * @public
   * <p>The identifier of the application that will contain the plugin.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>A the name for your plugin.</p>
   */
  displayName: string | undefined;

  /**
   * @public
   * <p>The type of plugin you want to create.</p>
   */
  type: PluginType | undefined;

  /**
   * @public
   * <p>The source URL used for plugin configuration.</p>
   */
  serverUrl: string | undefined;

  /**
   * @public
   * <p>Authentication configuration information for an Amazon Q plugin.</p>
   */
  authConfiguration: PluginAuthConfiguration | undefined;

  /**
   * @public
   * <p>A list of key-value pairs that identify or categorize the data source connector. You
   *             can also use tags to help control access to the data source connector. Tag keys and
   *             values can consist of Unicode letters, digits, white space, and any of the following
   *             symbols: _ . : / = + - @.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>A token that you provide to identify the request to create your Amazon Q
   *             plugin.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreatePluginResponse {
  /**
   * @public
   * <p>The identifier of the plugin created.</p>
   */
  pluginId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a plugin.</p>
   */
  pluginArn?: string;
}

/**
 * @public
 */
export interface DeletePluginRequest {
  /**
   * @public
   * <p>The identifier the application attached to the Amazon Q plugin.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the plugin being deleted.</p>
   */
  pluginId: string | undefined;
}

/**
 * @public
 */
export interface DeletePluginResponse {}

/**
 * @public
 */
export interface GetPluginRequest {
  /**
   * @public
   * <p>The identifier of the application which contains the plugin.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the plugin.</p>
   */
  pluginId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PluginState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type PluginState = (typeof PluginState)[keyof typeof PluginState];

/**
 * @public
 */
export interface GetPluginResponse {
  /**
   * @public
   * <p>The identifier of the application which contains the plugin.</p>
   */
  applicationId?: string;

  /**
   * @public
   * <p>The identifier of the plugin.</p>
   */
  pluginId?: string;

  /**
   * @public
   * <p>The name of the plugin.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The type of the plugin.</p>
   */
  type?: PluginType;

  /**
   * @public
   * <p>The source URL used for plugin configuration.</p>
   */
  serverUrl?: string;

  /**
   * @public
   * <p>Authentication configuration information for an Amazon Q plugin.</p>
   */
  authConfiguration?: PluginAuthConfiguration;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role with permission to access resources needed
   *             to create the plugin.</p>
   */
  pluginArn?: string;

  /**
   * @public
   * <p>The current state of the plugin.</p>
   */
  state?: PluginState;

  /**
   * @public
   * <p>The timestamp for when the plugin was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp for when the plugin was last updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface ListPluginsRequest {
  /**
   * @public
   * <p>The identifier of the application the plugin is attached to.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of plugins.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of documents to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about an Amazon Q plugin and its configuration.</p>
 */
export interface Plugin {
  /**
   * @public
   * <p>The identifier of the plugin.</p>
   */
  pluginId?: string;

  /**
   * @public
   * <p>The name of the plugin.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The type of the plugin.</p>
   */
  type?: PluginType;

  /**
   * @public
   * <p>The plugin server URL used for configuration.</p>
   */
  serverUrl?: string;

  /**
   * @public
   * <p>The current status of the plugin.</p>
   */
  state?: PluginState;

  /**
   * @public
   * <p>The timestamp for when the plugin was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp for when the plugin was last updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface ListPluginsResponse {
  /**
   * @public
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of plugins.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Information about a configured plugin.</p>
   */
  plugins?: Plugin[];
}

/**
 * @public
 */
export interface UpdatePluginRequest {
  /**
   * @public
   * <p>The identifier of the application the plugin is attached to.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the plugin.</p>
   */
  pluginId: string | undefined;

  /**
   * @public
   * <p>The name of the plugin.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The status of the plugin. </p>
   */
  state?: PluginState;

  /**
   * @public
   * <p>The source URL used for plugin configuration.</p>
   */
  serverUrl?: string;

  /**
   * @public
   * <p>The authentication configuration the plugin is using.</p>
   */
  authConfiguration?: PluginAuthConfiguration;
}

/**
 * @public
 */
export interface UpdatePluginResponse {}

/**
 * @public
 * <p>Stores an Amazon Kendra index as a retriever.</p>
 */
export interface KendraIndexConfiguration {
  /**
   * @public
   * <p>The identifier of the Amazon Kendra index.</p>
   */
  indexId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DocumentAttributeBoostingLevel = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
  VERY_HIGH: "VERY_HIGH",
} as const;

/**
 * @public
 */
export type DocumentAttributeBoostingLevel =
  (typeof DocumentAttributeBoostingLevel)[keyof typeof DocumentAttributeBoostingLevel];

/**
 * @public
 * <p>Provides information on boosting <code>DATE</code> type document attributes.</p>
 *          <p>For more information on how boosting document attributes work in Amazon Q, see
 *                 <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/metadata-boosting.html">Boosting using document attributes</a>.</p>
 */
export interface DateAttributeBoostingConfiguration {
  /**
   * @public
   * <p>Specifies how much a document attribute is boosted.</p>
   */
  boostingLevel: DocumentAttributeBoostingLevel | undefined;

  /**
   * @public
   * <p>Specifies the duration, in seconds, of a boost applies to a <code>DATE</code> type
   *             document attribute.</p>
   */
  boostingDurationInSeconds?: number;
}

/**
 * @public
 * @enum
 */
export const NumberAttributeBoostingType = {
  PRIORITIZE_LARGER_VALUES: "PRIORITIZE_LARGER_VALUES",
  PRIORITIZE_SMALLER_VALUES: "PRIORITIZE_SMALLER_VALUES",
} as const;

/**
 * @public
 */
export type NumberAttributeBoostingType =
  (typeof NumberAttributeBoostingType)[keyof typeof NumberAttributeBoostingType];

/**
 * @public
 * <p>Provides information on boosting <code>NUMBER</code> type document attributes.</p>
 *          <p>For more information on how boosting document attributes work in Amazon Q, see
 *                 <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/metadata-boosting.html">Boosting using document attributes</a>.</p>
 */
export interface NumberAttributeBoostingConfiguration {
  /**
   * @public
   * <p>Specifies the duration, in seconds, of a boost applies to a <code>NUMBER</code> type
   *             document attribute.</p>
   */
  boostingLevel: DocumentAttributeBoostingLevel | undefined;

  /**
   * @public
   * <p>Specifies how much a document attribute is boosted.</p>
   */
  boostingType?: NumberAttributeBoostingType;
}

/**
 * @public
 * @enum
 */
export const StringAttributeValueBoostingLevel = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  VERY_HIGH: "VERY_HIGH",
} as const;

/**
 * @public
 */
export type StringAttributeValueBoostingLevel =
  (typeof StringAttributeValueBoostingLevel)[keyof typeof StringAttributeValueBoostingLevel];

/**
 * @public
 * <p>Provides information on boosting <code>STRING</code> type document attributes.</p>
 *          <note>
 *             <p>For <code>STRING</code> and <code>STRING_LIST</code> type document attributes to
 *                 be used for boosting on the console and the API, they must be enabled for search
 *                 using the <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeConfiguration.html">DocumentAttributeConfiguration</a> object of the <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateIndex.html">UpdateIndex</a> API. If you haven't enabled searching on these attributes,
 *                 you can't boost attributes of these data types on either the console or the
 *                 API.</p>
 *          </note>
 *          <p>For more information on how boosting document attributes work in Amazon Q, see
 *                 <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/metadata-boosting.html">Boosting using document attributes</a>.</p>
 */
export interface StringAttributeBoostingConfiguration {
  /**
   * @public
   * <p>Specifies how much a document attribute is boosted.</p>
   */
  boostingLevel: DocumentAttributeBoostingLevel | undefined;

  /**
   * @public
   * <p>Specifies specific values of a <code>STRING</code> type document attribute being
   *             boosted.</p>
   */
  attributeValueBoosting?: Record<string, StringAttributeValueBoostingLevel>;
}

/**
 * @public
 * <p>Provides information on boosting <code>STRING_LIST</code> type document
 *             attributes.</p>
 *          <note>
 *             <p>For <code>STRING</code> and <code>STRING_LIST</code> type document attributes to
 *                 be used for boosting on the console and the API, they must be enabled for search
 *                 using the <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeConfiguration.html">DocumentAttributeConfiguration</a> object of the <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateIndex.html">UpdateIndex</a> API. If you haven't enabled searching on these attributes,
 *                 you can't boost attributes of these data types on either the console or the
 *                 API.</p>
 *          </note>
 *          <p>For more information on how boosting document attributes work in Amazon Q, see
 *                 <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/metadata-boosting.html">Boosting using document attributes</a>.</p>
 */
export interface StringListAttributeBoostingConfiguration {
  /**
   * @public
   * <p>Specifies how much a document attribute is boosted.</p>
   */
  boostingLevel: DocumentAttributeBoostingLevel | undefined;
}

/**
 * @public
 * <p>Provides information on boosting supported Amazon Q document attribute types.
 *             When an end user chat query matches document attributes that have been boosted,
 *             Amazon Q prioritizes generating responses from content that matches the boosted
 *             document attributes.</p>
 *          <note>
 *             <p>For <code>STRING</code> and <code>STRING_LIST</code> type document attributes to
 *                 be used for boosting on the console and the API, they must be enabled for search
 *                 using the <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeConfiguration.html">DocumentAttributeConfiguration</a> object of the <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateIndex.html">UpdateIndex</a> API. If you haven't enabled searching on these attributes,
 *                 you can't boost attributes of these data types on either the console or the
 *                 API.</p>
 *          </note>
 *          <p>For more information on how boosting document attributes work in Amazon Q, see
 *                 <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/metadata-boosting.html">Boosting using document attributes</a>.</p>
 */
export type DocumentAttributeBoostingConfiguration =
  | DocumentAttributeBoostingConfiguration.DateConfigurationMember
  | DocumentAttributeBoostingConfiguration.NumberConfigurationMember
  | DocumentAttributeBoostingConfiguration.StringConfigurationMember
  | DocumentAttributeBoostingConfiguration.StringListConfigurationMember
  | DocumentAttributeBoostingConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace DocumentAttributeBoostingConfiguration {
  /**
   * @public
   * <p>Provides information on boosting <code>NUMBER</code> type document attributes.</p>
   */
  export interface NumberConfigurationMember {
    numberConfiguration: NumberAttributeBoostingConfiguration;
    stringConfiguration?: never;
    dateConfiguration?: never;
    stringListConfiguration?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Provides information on boosting <code>STRING</code> type document attributes.</p>
   */
  export interface StringConfigurationMember {
    numberConfiguration?: never;
    stringConfiguration: StringAttributeBoostingConfiguration;
    dateConfiguration?: never;
    stringListConfiguration?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Provides information on boosting <code>DATE</code> type document attributes.</p>
   */
  export interface DateConfigurationMember {
    numberConfiguration?: never;
    stringConfiguration?: never;
    dateConfiguration: DateAttributeBoostingConfiguration;
    stringListConfiguration?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Provides information on boosting <code>STRING_LIST</code> type document
   *             attributes.</p>
   */
  export interface StringListConfigurationMember {
    numberConfiguration?: never;
    stringConfiguration?: never;
    dateConfiguration?: never;
    stringListConfiguration: StringListAttributeBoostingConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    numberConfiguration?: never;
    stringConfiguration?: never;
    dateConfiguration?: never;
    stringListConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    numberConfiguration: (value: NumberAttributeBoostingConfiguration) => T;
    stringConfiguration: (value: StringAttributeBoostingConfiguration) => T;
    dateConfiguration: (value: DateAttributeBoostingConfiguration) => T;
    stringListConfiguration: (value: StringListAttributeBoostingConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DocumentAttributeBoostingConfiguration, visitor: Visitor<T>): T => {
    if (value.numberConfiguration !== undefined) return visitor.numberConfiguration(value.numberConfiguration);
    if (value.stringConfiguration !== undefined) return visitor.stringConfiguration(value.stringConfiguration);
    if (value.dateConfiguration !== undefined) return visitor.dateConfiguration(value.dateConfiguration);
    if (value.stringListConfiguration !== undefined)
      return visitor.stringListConfiguration(value.stringListConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Configuration information for an Amazon Q index.</p>
 */
export interface NativeIndexConfiguration {
  /**
   * @public
   * <p>The identifier for the Amazon Q index.</p>
   */
  indexId: string | undefined;

  /**
   * @public
   * <p>Overrides the default boosts applied by Amazon Q to supported document attribute
   *             data types.</p>
   */
  boostingOverride?: Record<string, DocumentAttributeBoostingConfiguration>;
}

/**
 * @public
 * <p>Provides information on how the retriever used for your Amazon Q application is
 *             configured.</p>
 */
export type RetrieverConfiguration =
  | RetrieverConfiguration.KendraIndexConfigurationMember
  | RetrieverConfiguration.NativeIndexConfigurationMember
  | RetrieverConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RetrieverConfiguration {
  /**
   * @public
   * <p>Provides information on how a Amazon Q index used as a retriever for your
   *             Amazon Q application is configured.</p>
   */
  export interface NativeIndexConfigurationMember {
    nativeIndexConfiguration: NativeIndexConfiguration;
    kendraIndexConfiguration?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Provides information on how the Amazon Kendra index used as a retriever for your
   *             Amazon Q application is configured.</p>
   */
  export interface KendraIndexConfigurationMember {
    nativeIndexConfiguration?: never;
    kendraIndexConfiguration: KendraIndexConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    nativeIndexConfiguration?: never;
    kendraIndexConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    nativeIndexConfiguration: (value: NativeIndexConfiguration) => T;
    kendraIndexConfiguration: (value: KendraIndexConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RetrieverConfiguration, visitor: Visitor<T>): T => {
    if (value.nativeIndexConfiguration !== undefined)
      return visitor.nativeIndexConfiguration(value.nativeIndexConfiguration);
    if (value.kendraIndexConfiguration !== undefined)
      return visitor.kendraIndexConfiguration(value.kendraIndexConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const RetrieverType = {
  KENDRA_INDEX: "KENDRA_INDEX",
  NATIVE_INDEX: "NATIVE_INDEX",
} as const;

/**
 * @public
 */
export type RetrieverType = (typeof RetrieverType)[keyof typeof RetrieverType];

/**
 * @public
 */
export interface CreateRetrieverRequest {
  /**
   * @public
   * <p>The identifier of your Amazon Q application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The type of retriever you are using.</p>
   */
  type: RetrieverType | undefined;

  /**
   * @public
   * <p>The name of your retriever.</p>
   */
  displayName: string | undefined;

  /**
   * @public
   * <p>Provides information on how the retriever used for your Amazon Q application is
   *             configured.</p>
   */
  configuration: RetrieverConfiguration | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role used by Amazon Q to access the basic
   *             authentication credentials stored in a Secrets Manager secret.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>A token that you provide to identify the request to create your Amazon Q
   *             application retriever.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>A list of key-value pairs that identify or categorize the retriever. You can also use
   *             tags to help control access to the retriever. Tag keys and values can consist of Unicode
   *             letters, digits, white space, and any of the following symbols: _ . : / = + - @.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateRetrieverResponse {
  /**
   * @public
   * <p>The identifier of the retriever you are using.</p>
   */
  retrieverId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role associated with a retriever.</p>
   */
  retrieverArn?: string;
}

/**
 * @public
 */
export interface DeleteRetrieverRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application using the retriever.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the retriever being deleted.</p>
   */
  retrieverId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRetrieverResponse {}

/**
 * @public
 */
export interface GetRetrieverRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application using the retriever.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the retriever.</p>
   */
  retrieverId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RetrieverStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type RetrieverStatus = (typeof RetrieverStatus)[keyof typeof RetrieverStatus];

/**
 * @public
 */
export interface GetRetrieverResponse {
  /**
   * @public
   * <p>The identifier of the Amazon Q application using the retriever. </p>
   */
  applicationId?: string;

  /**
   * @public
   * <p>The identifier of the retriever.</p>
   */
  retrieverId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the retriever.</p>
   */
  retrieverArn?: string;

  /**
   * @public
   * <p>The type of the retriever.</p>
   */
  type?: RetrieverType;

  /**
   * @public
   * <p>The status of the retriever.</p>
   */
  status?: RetrieverStatus;

  /**
   * @public
   * <p>The name of the retriever.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>Provides information on how the retriever used for your Amazon Q application is
   *             configured.</p>
   */
  configuration?: RetrieverConfiguration;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role with the permission to access the retriever
   *             and required resources.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The Unix timestamp when the retriever was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the retriever was last updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface ListRetrieversRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application using the retriever.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>If the number of retrievers returned exceeds <code>maxResults</code>, Amazon Q
   *             returns a next token as a pagination token to retrieve the next set of
   *             retrievers.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of retrievers returned.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information for the retriever used for your Amazon Q application.</p>
 */
export interface Retriever {
  /**
   * @public
   * <p>The identifier of the Amazon Q application using the retriever.</p>
   */
  applicationId?: string;

  /**
   * @public
   * <p>The identifier of the retriever used by your Amazon Q application.</p>
   */
  retrieverId?: string;

  /**
   * @public
   * <p>The type of your retriever.</p>
   */
  type?: RetrieverType;

  /**
   * @public
   * <p>The status of your retriever.</p>
   */
  status?: RetrieverStatus;

  /**
   * @public
   * <p>The name of your retriever.</p>
   */
  displayName?: string;
}

/**
 * @public
 */
export interface ListRetrieversResponse {
  /**
   * @public
   * <p>An array of summary information for one or more retrievers.</p>
   */
  retrievers?: Retriever[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Q returns this token, which you can use in a
   *             later request to list the next set of retrievers.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateRetrieverRequest {
  /**
   * @public
   * <p>The identifier of your Amazon Q application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of your retriever.</p>
   */
  retrieverId: string | undefined;

  /**
   * @public
   * <p>Provides information on how the retriever used for your Amazon Q application is
   *             configured.</p>
   */
  configuration?: RetrieverConfiguration;

  /**
   * @public
   * <p>The name of your retriever.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to access the retriever
   *             and required resources. </p>
   */
  roleArn?: string;
}

/**
 * @public
 */
export interface UpdateRetrieverResponse {}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>A name for the Amazon Q application.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>A description for the Amazon Q application.</p>
   */
  description?: string;

  /**
   * @public
   * <p>An Amazon Web Services Identity and Access Management (IAM) role that
   *             gives Amazon Q permission to access Amazon CloudWatch logs and
   *             metrics.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>An option to allow end users to upload files directly during chat.</p>
   */
  attachmentsConfiguration?: AttachmentsConfiguration;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {}

/**
 * @public
 * @enum
 */
export const WebExperienceSamplePromptsControlMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type WebExperienceSamplePromptsControlMode =
  (typeof WebExperienceSamplePromptsControlMode)[keyof typeof WebExperienceSamplePromptsControlMode];

/**
 * @public
 */
export interface CreateWebExperienceRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q web experience.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The title for your Amazon Q web experience.</p>
   */
  title?: string;

  /**
   * @public
   * <p>A subtitle to personalize your Amazon Q web experience.</p>
   */
  subtitle?: string;

  /**
   * @public
   * <p>The customized welcome message for end users of an Amazon Q web
   *             experience.</p>
   */
  welcomeMessage?: string;

  /**
   * @public
   * <p>Determines whether sample prompts are enabled in the web experience for an end
   *             user.</p>
   */
  samplePromptsControlMode?: WebExperienceSamplePromptsControlMode;

  /**
   * @public
   * <p>A list of key-value pairs that identify or categorize your Amazon Q web
   *             experience. You can also use tags to help control access to the web experience. Tag keys
   *             and values can consist of Unicode letters, digits, white space, and any of the following
   *             symbols: _ . : / = + - @.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>A token you provide to identify a request to create an Amazon Q web experience.
   *         </p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateWebExperienceResponse {
  /**
   * @public
   * <p>The identifier of the Amazon Q web experience.</p>
   */
  webExperienceId?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of an Amazon Q web experience.</p>
   */
  webExperienceArn?: string;
}

/**
 * @public
 */
export interface DeleteWebExperienceRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application linked to the Amazon Q web
   *             experience.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Q web experience being deleted.</p>
   */
  webExperienceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebExperienceResponse {}

/**
 * @public
 */
export interface GetWebExperienceRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application linked to the web experience.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Q web experience. </p>
   */
  webExperienceId: string | undefined;
}

/**
 * @public
 * <p>Provides the SAML 2.0 compliant identity provider (IdP) configuration information
 *             Amazon Q needs to deploy a Amazon Q web experience.</p>
 */
export interface SamlConfiguration {
  /**
   * @public
   * <p>The metadata XML that your IdP generated.</p>
   */
  metadataXML: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role assumed by users when
   *             they authenticate into their Amazon Q web experience, containing the relevant
   *             Amazon Q permissions for conversing with Amazon Q.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The user attribute name in your IdP that maps to the user email.</p>
   */
  userIdAttribute: string | undefined;

  /**
   * @public
   * <p>The group attribute name in your IdP that maps to user groups.</p>
   */
  userGroupAttribute?: string;
}

/**
 * @public
 * <p>Provides the authorization configuration information needed to deploy a Amazon Q
 *             web experience to end users.</p>
 */
export type WebExperienceAuthConfiguration =
  | WebExperienceAuthConfiguration.SamlConfigurationMember
  | WebExperienceAuthConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace WebExperienceAuthConfiguration {
  /**
   * @public
   * <p>Provides the SAML 2.0 compliant identity provider (IdP) configuration information
   *             Amazon Q needs to deploy a Amazon Q web experience.</p>
   */
  export interface SamlConfigurationMember {
    samlConfiguration: SamlConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    samlConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    samlConfiguration: (value: SamlConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: WebExperienceAuthConfiguration, visitor: Visitor<T>): T => {
    if (value.samlConfiguration !== undefined) return visitor.samlConfiguration(value.samlConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const WebExperienceStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING_AUTH_CONFIG: "PENDING_AUTH_CONFIG",
} as const;

/**
 * @public
 */
export type WebExperienceStatus = (typeof WebExperienceStatus)[keyof typeof WebExperienceStatus];

/**
 * @public
 */
export interface GetWebExperienceResponse {
  /**
   * @public
   * <p>The identifier of the Amazon Q application linked to the web experience.</p>
   */
  applicationId?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Q web experience.</p>
   */
  webExperienceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role with the permission to access the
   *             Amazon Q web experience and required resources.</p>
   */
  webExperienceArn?: string;

  /**
   * @public
   * <p>The endpoint of your Amazon Q web experience.</p>
   */
  defaultEndpoint?: string;

  /**
   * @public
   * <p>The current status of the Amazon Q web experience. When the <code>Status</code>
   *             field value is <code>FAILED</code>, the <code>ErrorMessage</code> field contains a
   *             description of the error that caused the data source connector to fail. </p>
   */
  status?: WebExperienceStatus;

  /**
   * @public
   * <p>The Unix timestamp when the retriever was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the data source connector was last updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The title for your Amazon Q web experience. </p>
   */
  title?: string;

  /**
   * @public
   * <p>The subtitle for your Amazon Q web experience. </p>
   */
  subtitle?: string;

  /**
   * @public
   * <p>The customized welcome message for end users of an Amazon Q web
   *             experience.</p>
   */
  welcomeMessage?: string;

  /**
   * @public
   * <p>Determines whether sample prompts are enabled in the web experience for an end
   *             user.</p>
   */
  samplePromptsControlMode?: WebExperienceSamplePromptsControlMode;

  /**
   * @public
   * <p>The authentication configuration information for your Amazon Q web
   *             experience.</p>
   */
  authenticationConfiguration?: WebExperienceAuthConfiguration;

  /**
   * @public
   * <p>When the <code>Status</code> field value is <code>FAILED</code>, the
   *                 <code>ErrorMessage</code> field contains a description of the error that caused the
   *             data source connector to fail.</p>
   */
  error?: ErrorDetail;
}

/**
 * @public
 */
export interface ListWebExperiencesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application linked to the listed web
   *             experiences.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of Amazon Q conversations.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of Amazon Q Web Experiences to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Provides information for an Amazon Q web experience.</p>
 */
export interface WebExperience {
  /**
   * @public
   * <p>The identifier of your Amazon Q web experience.</p>
   */
  webExperienceId?: string;

  /**
   * @public
   * <p>The Unix timestamp when the Amazon Q application was last updated.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when your Amazon Q web experience was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The endpoint URLs for your Amazon Q web experience. The URLs are unique and fully
   *             hosted by Amazon Web Services.</p>
   */
  defaultEndpoint?: string;

  /**
   * @public
   * <p>The status of your Amazon Q web experience.</p>
   */
  status?: WebExperienceStatus;
}

/**
 * @public
 */
export interface ListWebExperiencesResponse {
  /**
   * @public
   * <p>An array of summary information for one or more Amazon Q experiences.</p>
   */
  webExperiences?: WebExperience[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Q returns this token, which you can use in a
   *             later request to list the next set of messages.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateWebExperienceRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application attached to the web experience.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Q web experience.</p>
   */
  webExperienceId: string | undefined;

  /**
   * @public
   * <p>The authentication configuration of the Amazon Q web experience.</p>
   */
  authenticationConfiguration?: WebExperienceAuthConfiguration;

  /**
   * @public
   * <p>The title of the Amazon Q web experience.</p>
   */
  title?: string;

  /**
   * @public
   * <p>The subtitle of the Amazon Q web experience.</p>
   */
  subtitle?: string;

  /**
   * @public
   * <p>A customized welcome message for an end user in an Amazon Q web
   *             experience.</p>
   */
  welcomeMessage?: string;

  /**
   * @public
   * <p>Determines whether sample prompts are enabled in the web experience for an end
   *             user.</p>
   */
  samplePromptsControlMode?: WebExperienceSamplePromptsControlMode;
}

/**
 * @public
 */
export interface UpdateWebExperienceResponse {}

/**
 * @public
 * <p>A file directly uploaded into a web experience chat.</p>
 */
export interface AttachmentInput {
  /**
   * @public
   * <p>The name of the file.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The data contained within the uploaded file.</p>
   */
  data: Uint8Array | undefined;
}

/**
 * @public
 * @enum
 */
export const AttachmentStatus = {
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type AttachmentStatus = (typeof AttachmentStatus)[keyof typeof AttachmentStatus];

/**
 * @public
 * <p>The details of a file uploaded during chat.</p>
 */
export interface AttachmentOutput {
  /**
   * @public
   * <p>The name of a file uploaded during chat.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The status of a file uploaded during chat.</p>
   */
  status?: AttachmentStatus;

  /**
   * @public
   * <p>An error associated with a file uploaded during chat.</p>
   */
  error?: ErrorDetail;
}

/**
 * @public
 * <p>A document attribute or metadata field.</p>
 */
export interface DocumentAttribute {
  /**
   * @public
   * <p>The identifier for the attribute.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The value of the attribute. </p>
   */
  value: DocumentAttributeValue | undefined;
}

/**
 * @public
 * <p>A document deleted from an Amazon Q data source connector.</p>
 */
export interface DeleteDocument {
  /**
   * @public
   * <p>The identifier of the deleted document.</p>
   */
  documentId: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDocumentRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Q index that contains the documents to
   *             delete.</p>
   */
  indexId: string | undefined;

  /**
   * @public
   * <p>Documents deleted from the Amazon Q index.</p>
   */
  documents: DeleteDocument[] | undefined;

  /**
   * @public
   * <p>The identifier of the data source sync during which the documents were deleted.</p>
   */
  dataSourceSyncId?: string;
}

/**
 * @public
 * <p>A list of documents that could not be removed from an Amazon Q index. Each entry
 *             contains an error message that indicates why the document couldn't be removed from the
 *             index.</p>
 */
export interface FailedDocument {
  /**
   * @public
   * <p>The identifier of the document that couldn't be removed from the Amazon Q
   *             index.</p>
   */
  id?: string;

  /**
   * @public
   * <p>An explanation for why the document couldn't be removed from the index.</p>
   */
  error?: ErrorDetail;

  /**
   * @public
   * <p>The identifier of the Amazon Q data source connector that contains the failed
   *             document.</p>
   */
  dataSourceId?: string;
}

/**
 * @public
 */
export interface BatchDeleteDocumentResponse {
  /**
   * @public
   * <p>A list of documents that couldn't be removed from the Amazon Q index. Each entry
   *             contains an error message that indicates why the document couldn't be removed from the
   *             index. </p>
   */
  failedDocuments?: FailedDocument[];
}

/**
 * @public
 * <p>Information required for Amazon Q to find a specific file in an Amazon S3
 *             bucket.</p>
 */
export interface S3 {
  /**
   * @public
   * <p>The name of the S3 bucket that contains the file.</p>
   */
  bucket: string | undefined;

  /**
   * @public
   * <p>The name of the file.</p>
   */
  key: string | undefined;
}

/**
 * @public
 * <p>The contents of a document.</p>
 */
export type DocumentContent = DocumentContent.BlobMember | DocumentContent.S3Member | DocumentContent.$UnknownMember;

/**
 * @public
 */
export namespace DocumentContent {
  /**
   * @public
   * <p>The contents of the document. Documents passed to the <code>blob</code> parameter must
   *             be base64 encoded. Your code might not need to encode the document file bytes if you're
   *             using an Amazon Web Services SDK to call Amazon Q APIs. If you are calling the
   *             Amazon Q endpoint directly using REST, you must base64 encode the contents before
   *             sending.</p>
   */
  export interface BlobMember {
    blob: Uint8Array;
    s3?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The path to the document in an Amazon S3 bucket.</p>
   */
  export interface S3Member {
    blob?: never;
    s3: S3;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    blob?: never;
    s3?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    blob: (value: Uint8Array) => T;
    s3: (value: S3) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DocumentContent, visitor: Visitor<T>): T => {
    if (value.blob !== undefined) return visitor.blob(value.blob);
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ContentType = {
  CSV: "CSV",
  HTML: "HTML",
  JSON: "JSON",
  MD: "MD",
  MS_EXCEL: "MS_EXCEL",
  MS_WORD: "MS_WORD",
  PDF: "PDF",
  PLAIN_TEXT: "PLAIN_TEXT",
  PPT: "PPT",
  RTF: "RTF",
  XML: "XML",
  XSLT: "XSLT",
} as const;

/**
 * @public
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];

/**
 * @public
 * <p>A document in an Amazon Q application.</p>
 */
export interface Document {
  /**
   * @public
   * <p>The identifier of the document.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>Custom attributes to apply to the document for refining Amazon Q web experience
   *             responses.</p>
   */
  attributes?: DocumentAttribute[];

  /**
   * @public
   * <p>The contents of the document.</p>
   */
  content?: DocumentContent;

  /**
   * @public
   * <p>The file type of the document in the Blob field.</p>
   *          <p>If you want to index snippets or subsets of HTML documents instead of the entirety of
   *             the HTML documents, you add the <code>HTML</code> start and closing tags
   *                 (<code>&lt;HTML&gt;content&lt;/HTML&gt;</code>) around the content.</p>
   */
  contentType?: ContentType;

  /**
   * @public
   * <p>The title of the document.</p>
   */
  title?: string;

  /**
   * @public
   * <p>Configuration information for access permission to a document.</p>
   */
  accessConfiguration?: AccessConfiguration;

  /**
   * @public
   * <p>The configuration information for altering document metadata and content during the
   *             document ingestion process.</p>
   */
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
}

/**
 * @public
 */
export interface BatchPutDocumentRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Q index to add the documents to. </p>
   */
  indexId: string | undefined;

  /**
   * @public
   * <p>One or more documents to add to the index.</p>
   */
  documents: Document[] | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to access your S3
   *             bucket.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The identifier of the data source sync during which the documents were added.</p>
   */
  dataSourceSyncId?: string;
}

/**
 * @public
 */
export interface BatchPutDocumentResponse {
  /**
   * @public
   * <p> A list of documents that were not added to the Amazon Q index because the
   *             document failed a validation check. Each document contains an error message that
   *             indicates why the document couldn't be added to the index. </p>
   */
  failedDocuments?: FailedDocument[];
}

/**
 * @public
 * <p>Provides information about the phrases blocked from chat by your chat control
 *             configuration.</p>
 */
export interface BlockedPhrasesConfiguration {
  /**
   * @public
   * <p>A list of phrases blocked from a Amazon Q web experience chat.</p>
   */
  blockedPhrases?: string[];

  /**
   * @public
   * <p>The configured custom message displayed to an end user informing them that they've
   *             used a blocked phrase during chat.</p>
   */
  systemMessageOverride?: string;
}

/**
 * @public
 * <p>Updates a blocked phrases configuration in your Amazon Q application.</p>
 */
export interface BlockedPhrasesConfigurationUpdate {
  /**
   * @public
   * <p>Creates or updates a blocked phrases configuration in your Amazon Q
   *             application.</p>
   */
  blockedPhrasesToCreateOrUpdate?: string[];

  /**
   * @public
   * <p>Deletes a blocked phrases configuration in your Amazon Q application.</p>
   */
  blockedPhrasesToDelete?: string[];

  /**
   * @public
   * <p>The configured custom message displayed to your end user when they use blocked phrase
   *             during chat.</p>
   */
  systemMessageOverride?: string;
}

/**
 * @public
 * <p>Provides information about a text extract in a chat response that can be attributed to
 *             a source document.</p>
 */
export interface TextSegment {
  /**
   * @public
   * <p>The zero-based location in the response string where the source attribution
   *             starts.</p>
   */
  beginOffset?: number;

  /**
   * @public
   * <p>The zero-based location in the response string where the source attribution
   *             ends.</p>
   */
  endOffset?: number;
}

/**
 * @public
 * <p>The documents used to generate an Amazon Q web experience response.</p>
 */
export interface SourceAttribution {
  /**
   * @public
   * <p>The title of the document which is the source for the Amazon Q generated
   *             response. </p>
   */
  title?: string;

  /**
   * @public
   * <p>The content extract from the document on which the generated response is based.
   *         </p>
   */
  snippet?: string;

  /**
   * @public
   * <p>The URL of the document which is the source for the Amazon Q generated response.
   *         </p>
   */
  url?: string;

  /**
   * @public
   * <p>The number attached to a citation in an Amazon Q generated response.</p>
   */
  citationNumber?: number;

  /**
   * @public
   * <p>The Unix timestamp when the Amazon Q application was last updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>A text extract from a source document that is used for source attribution.</p>
   */
  textMessageSegments?: TextSegment[];
}

/**
 * @public
 */
export interface ChatSyncOutput {
  /**
   * @public
   * <p>The identifier of the Amazon Q conversation.</p>
   */
  conversationId?: string;

  /**
   * @public
   * <p>An AI-generated message in a conversation.</p>
   */
  systemMessage?: string;

  /**
   * @public
   * <p>The identifier of an Amazon Q AI generated message within the
   *             conversation.</p>
   */
  systemMessageId?: string;

  /**
   * @public
   * <p>The identifier of an Amazon Q end user text input message within the
   *             conversation.</p>
   */
  userMessageId?: string;

  /**
   * @public
   * <p>A request from Amazon Q to the end user for information Amazon Q needs to
   *             successfully complete a requested plugin action.</p>
   */
  actionReview?: ActionReview;

  /**
   * @public
   * <p>The source documents used to generate the conversation response.</p>
   */
  sourceAttributions?: SourceAttribution[];

  /**
   * @public
   * <p>A list of files which failed to upload during chat.</p>
   */
  failedAttachments?: AttachmentOutput[];
}

/**
 * @public
 * <p>You don't have permissions to perform the action because your license is inactive. Ask
 *             your admin to activate your license and try again after your licence is active.</p>
 */
export class LicenseNotFoundException extends __BaseException {
  readonly name: "LicenseNotFoundException" = "LicenseNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LicenseNotFoundException, __BaseException>) {
    super({
      name: "LicenseNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LicenseNotFoundException.prototype);
  }
}

/**
 * @public
 * <p>A rule for configuring how Amazon Q responds when it encounters a a blocked
 *             topic. You can configure a custom message to inform your end users that they have asked
 *             about a restricted topic and suggest any next steps they should take.</p>
 */
export interface ContentBlockerRule {
  /**
   * @public
   * <p>The configured custom message displayed to an end user informing them that they've
   *             used a blocked phrase during chat.</p>
   */
  systemMessageOverride?: string;
}

/**
 * @public
 * <p>The identifier of the data source Amazon Q will generate responses from.</p>
 */
export interface EligibleDataSource {
  /**
   * @public
   * <p>The identifier of the index the data source is attached to.</p>
   */
  indexId?: string;

  /**
   * @public
   * <p>The identifier of the data source.</p>
   */
  dataSourceId?: string;
}

/**
 * @public
 * <p>Rules for retrieving content from data sources connected to a Amazon Q
 *             application for a specific topic control configuration.</p>
 */
export interface ContentRetrievalRule {
  /**
   * @public
   * <p>Specifies data sources in a Amazon Q application to use for content
   *             generation.</p>
   */
  eligibleDataSources?: EligibleDataSource[];
}

/**
 * @public
 * <p>A conversation in an Amazon Q application.</p>
 */
export interface Conversation {
  /**
   * @public
   * <p>The identifier of the Amazon Q conversation.</p>
   */
  conversationId?: string;

  /**
   * @public
   * <p>The title of the conversation.</p>
   */
  title?: string;

  /**
   * @public
   * <p>The start time of the conversation.</p>
   */
  startTime?: Date;
}

/**
 * @public
 * <p>Aliases attached to a user id within an Amazon Q application.</p>
 */
export interface UserAlias {
  /**
   * @public
   * <p>The identifier of the index that the user aliases are associated with.</p>
   */
  indexId?: string;

  /**
   * @public
   * <p>The identifier of the data source that the user aliases are associated with.</p>
   */
  dataSourceId?: string;

  /**
   * @public
   * <p>The identifier of the user id associated with the user aliases.</p>
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * @public
   * <p>The identifier of the application for which the user mapping will be created.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The user emails attached to a user mapping.</p>
   */
  userId: string | undefined;

  /**
   * @public
   * <p>The list of user aliases in the mapping.</p>
   */
  userAliases?: UserAlias[];

  /**
   * @public
   * <p>A token that you provide to identify the request to create your Amazon Q user
   *             mapping.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateUserResponse {}

/**
 * @public
 * <p>Maps a batch delete document request to a specific Amazon Q data source connector
 *             sync job.</p>
 */
export interface DataSourceSyncJobMetrics {
  /**
   * @public
   * <p>The current count of documents added from the data source during the data source
   *             sync.</p>
   */
  documentsAdded?: string;

  /**
   * @public
   * <p>The current count of documents modified in the data source during the data source
   *             sync.</p>
   */
  documentsModified?: string;

  /**
   * @public
   * <p>The current count of documents deleted from the data source during the data source
   *             sync.</p>
   */
  documentsDeleted?: string;

  /**
   * @public
   * <p>The current count of documents that failed to sync from the data source during the
   *             data source sync.</p>
   */
  documentsFailed?: string;

  /**
   * @public
   * <p>The current count of documents crawled by the ongoing sync job in the data
   *             source.</p>
   */
  documentsScanned?: string;
}

/**
 * @public
 * @enum
 */
export const DataSourceSyncJobStatus = {
  ABORTED: "ABORTED",
  FAILED: "FAILED",
  INCOMPLETE: "INCOMPLETE",
  STOPPING: "STOPPING",
  SUCCEEDED: "SUCCEEDED",
  SYNCING: "SYNCING",
  SYNCING_INDEXING: "SYNCING_INDEXING",
} as const;

/**
 * @public
 */
export type DataSourceSyncJobStatus = (typeof DataSourceSyncJobStatus)[keyof typeof DataSourceSyncJobStatus];

/**
 * @public
 * <p>Provides information about an Amazon Q data source connector synchronization
 *             job.</p>
 */
export interface DataSourceSyncJob {
  /**
   * @public
   * <p>The identifier of a data source synchronization job.</p>
   */
  executionId?: string;

  /**
   * @public
   * <p>The Unix time stamp when the data source synchronization job started.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the synchronization job completed.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>The status of the synchronization job. When the <code>Status</code> field is set to
   *                 <code>SUCCEEDED</code>, the synchronization job is done. If the status code is
   *                 <code>FAILED</code>, the <code>ErrorCode</code> and <code>ErrorMessage</code> fields
   *             give you the reason for the failure.</p>
   */
  status?: DataSourceSyncJobStatus;

  /**
   * @public
   * <p>If the <code>Status</code> field is set to <code>FAILED</code>, the
   *                 <code>ErrorCode</code> field indicates the reason the synchronization failed. </p>
   */
  error?: ErrorDetail;

  /**
   * @public
   * <p>If the reason that the synchronization failed is due to an error with the underlying
   *             data source, this field contains a code that identifies the error.</p>
   */
  dataSourceErrorCode?: string;

  /**
   * @public
   * <p>Maps a batch delete document request to a specific data source sync job. This is
   *             optional and should only be supplied when documents are deleted by a data source
   *             connector.</p>
   */
  metrics?: DataSourceSyncJobMetrics;
}

/**
 * @public
 */
export interface DeleteChatControlsConfigurationRequest {
  /**
   * @public
   * <p>The identifier of the application the chat controls have been configured for.</p>
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteChatControlsConfigurationResponse {}

/**
 * @public
 */
export interface DeleteConversationRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q web experience conversation being deleted.</p>
   */
  conversationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Q application associated with the
   *             conversation.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the user who is deleting the conversation.</p>
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConversationResponse {}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * @public
   * <p>The identifier of the application in which the group mapping belongs.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the index you want to delete the group from.</p>
   */
  indexId: string | undefined;

  /**
   * @public
   * <p>The name of the group you want to delete.</p>
   */
  groupName: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source linked to the group</p>
   *          <p>A group can be tied to multiple data sources. You can delete a group from accessing
   *             documents in a certain data source. For example, the groups "Research", "Engineering",
   *             and "Sales and Marketing" are all tied to the company's documents stored in the data
   *             sources Confluence and Salesforce. You want to delete "Research" and "Engineering"
   *             groups from Salesforce, so that these groups cannot access customer-related documents
   *             stored in Salesforce. Only "Sales and Marketing" should access documents in the
   *             Salesforce data source.</p>
   */
  dataSourceId?: string;
}

/**
 * @public
 */
export interface DeleteGroupResponse {}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * @public
   * <p>The identifier of the application from which the user is being deleted.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The user email being deleted.</p>
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserResponse {}

/**
 * @public
 * @enum
 */
export const DocumentStatus = {
  DELETED: "DELETED",
  DELETING: "DELETING",
  DOCUMENT_FAILED_TO_INDEX: "DOCUMENT_FAILED_TO_INDEX",
  FAILED: "FAILED",
  INDEXED: "INDEXED",
  PROCESSING: "PROCESSING",
  RECEIVED: "RECEIVED",
  UPDATED: "UPDATED",
} as const;

/**
 * @public
 */
export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus];

/**
 * @public
 * <p>The details of a document within an Amazon Q index.</p>
 */
export interface DocumentDetails {
  /**
   * @public
   * <p>The identifier of the document.</p>
   */
  documentId?: string;

  /**
   * @public
   * <p>The current status of the document.</p>
   */
  status?: DocumentStatus;

  /**
   * @public
   * <p>An error message associated with the document.</p>
   */
  error?: ErrorDetail;

  /**
   * @public
   * <p>The timestamp for when the document was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp for when the document was last updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface GetChatControlsConfigurationRequest {
  /**
   * @public
   * <p>The identifier of the application for which the chat controls are configured.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The maximum number of configured chat controls to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of Amazon Q chat controls
   *             configured.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ResponseScope = {
  ENTERPRISE_CONTENT_ONLY: "ENTERPRISE_CONTENT_ONLY",
  EXTENDED_KNOWLEDGE_ENABLED: "EXTENDED_KNOWLEDGE_ENABLED",
} as const;

/**
 * @public
 */
export type ResponseScope = (typeof ResponseScope)[keyof typeof ResponseScope];

/**
 * @public
 * <p>Provides information about users and groups associated with a topic control
 *             rule.</p>
 */
export interface UsersAndGroups {
  /**
   * @public
   * <p>The user ids associated with a topic control rule.</p>
   */
  userIds?: string[];

  /**
   * @public
   * <p>The user groups associated with a topic control rule.</p>
   */
  userGroups?: string[];
}

/**
 * @public
 * <p>Provides configuration information about a rule.</p>
 */
export type RuleConfiguration =
  | RuleConfiguration.ContentBlockerRuleMember
  | RuleConfiguration.ContentRetrievalRuleMember
  | RuleConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RuleConfiguration {
  /**
   * @public
   * <p>A rule for configuring how Amazon Q responds when it encounters a a blocked
   *             topic.</p>
   */
  export interface ContentBlockerRuleMember {
    contentBlockerRule: ContentBlockerRule;
    contentRetrievalRule?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Rules for retrieving content from data sources connected to a Amazon Q
   *             application for a specific topic control configuration.</p>
   */
  export interface ContentRetrievalRuleMember {
    contentBlockerRule?: never;
    contentRetrievalRule: ContentRetrievalRule;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    contentBlockerRule?: never;
    contentRetrievalRule?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    contentBlockerRule: (value: ContentBlockerRule) => T;
    contentRetrievalRule: (value: ContentRetrievalRule) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RuleConfiguration, visitor: Visitor<T>): T => {
    if (value.contentBlockerRule !== undefined) return visitor.contentBlockerRule(value.contentBlockerRule);
    if (value.contentRetrievalRule !== undefined) return visitor.contentRetrievalRule(value.contentRetrievalRule);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const RuleType = {
  CONTENT_BLOCKER_RULE: "CONTENT_BLOCKER_RULE",
  CONTENT_RETRIEVAL_RULE: "CONTENT_RETRIEVAL_RULE",
} as const;

/**
 * @public
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

/**
 * @public
 * <p>Guardrail rules for an Amazon Q application. Amazon Q supports only one rule
 *             at a time.</p>
 */
export interface Rule {
  /**
   * @public
   * <p>Users and groups to be included in a rule.</p>
   */
  includedUsersAndGroups?: UsersAndGroups;

  /**
   * @public
   * <p>Users and groups to be excluded from a rule.</p>
   */
  excludedUsersAndGroups?: UsersAndGroups;

  /**
   * @public
   * <p>The type of rule.</p>
   */
  ruleType: RuleType | undefined;

  /**
   * @public
   * <p>The configuration information for a rule.</p>
   */
  ruleConfiguration?: RuleConfiguration;
}

/**
 * @public
 * <p>The topic specific controls configured for an Amazon Q application.</p>
 */
export interface TopicConfiguration {
  /**
   * @public
   * <p>A name for your topic control configuration.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description for your topic control configuration. Use this to outline how the large
   *             language model (LLM) should use this topic control configuration.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of example phrases that you expect the end user to use in relation to the
   *             topic.</p>
   */
  exampleChatMessages?: string[];

  /**
   * @public
   * <p>Rules defined for a topic configuration.</p>
   */
  rules: Rule[] | undefined;
}

/**
 * @public
 */
export interface GetChatControlsConfigurationResponse {
  /**
   * @public
   * <p>The response scope configured for a Amazon Q application. This determines whether
   *             your application uses its retrieval augmented generation (RAG) system to generate
   *             answers only from your enterprise data, or also uses the large language models (LLM)
   *             knowledge to respons to end user questions in chat.</p>
   */
  responseScope?: ResponseScope;

  /**
   * @public
   * <p>The phrases blocked from chat by your chat control configuration.</p>
   */
  blockedPhrases?: BlockedPhrasesConfiguration;

  /**
   * @public
   * <p>The topic specific controls configured for a Amazon Q application.</p>
   */
  topicConfigurations?: TopicConfiguration[];

  /**
   * @public
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of Amazon Q chat controls
   *             configured.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * @public
   * <p>The identifier of the application id the group is attached to.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the index the group is attached to.</p>
   */
  indexId: string | undefined;

  /**
   * @public
   * <p>The name of the group.</p>
   */
  groupName: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source the group is attached to.</p>
   */
  dataSourceId?: string;
}

/**
 * @public
 * @enum
 */
export const GroupStatus = {
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type GroupStatus = (typeof GroupStatus)[keyof typeof GroupStatus];

/**
 * @public
 * <p>Provides the details of a group's status.</p>
 */
export interface GroupStatusDetail {
  /**
   * @public
   * <p>The status of a group.</p>
   */
  status?: GroupStatus;

  /**
   * @public
   * <p>The Unix timestamp when the Amazon Q application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The details of an error associated a group status.</p>
   */
  errorDetail?: ErrorDetail;
}

/**
 * @public
 */
export interface GetGroupResponse {
  /**
   * @public
   * <p>The current status of the group.</p>
   */
  status?: GroupStatusDetail;

  /**
   * @public
   * <p>The status history of the group.</p>
   */
  statusHistory?: GroupStatusDetail[];
}

/**
 * @public
 */
export interface GetUserRequest {
  /**
   * @public
   * <p>The identifier of the application connected to the user.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The user email address attached to the user.</p>
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface GetUserResponse {
  /**
   * @public
   * <p>A list of user aliases attached to a user.</p>
   */
  userAliases?: UserAlias[];
}

/**
 * @public
 */
export interface ListConversationsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the user involved in the Amazon Q web experience conversation.
   *         </p>
   */
  userId: string | undefined;

  /**
   * @public
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of Amazon Q conversations.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of Amazon Q conversations to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListConversationsResponse {
  /**
   * @public
   * <p>If the response is truncated, Amazon Q returns this token, which you can use in a
   *             later request to list the next set of messages.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of summary information on the configuration of one or more Amazon Q web
   *             experiences.</p>
   */
  conversations?: Conversation[];
}

/**
 * @public
 */
export interface ListDataSourceSyncJobsRequest {
  /**
   * @public
   * <p> The identifier of the data source connector.</p>
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Q application connected to the data source.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the index used with the Amazon Q data source connector.</p>
   */
  indexId: string | undefined;

  /**
   * @public
   * <p>If the <code>maxResults</code> response was incpmplete because there is more data to
   *             retriever, Amazon Q returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of responses.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of synchronization jobs to return in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p> The start time of the data source connector sync. </p>
   */
  startTime?: Date;

  /**
   * @public
   * <p> The end time of the data source connector sync.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>Only returns synchronization jobs with the <code>Status</code> field equal to the
   *             specified status.</p>
   */
  statusFilter?: DataSourceSyncJobStatus;
}

/**
 * @public
 */
export interface ListDataSourceSyncJobsResponse {
  /**
   * @public
   * <p>A history of synchronization jobs for the data source connector.</p>
   */
  history?: DataSourceSyncJob[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Q returns this token. You can use this token
   *             in any subsequent request to retrieve the next set of jobs.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDocumentsRequest {
  /**
   * @public
   * <p>The identifier of the application id the documents are attached to.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the index the documents are attached to.</p>
   */
  indexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the data sources the documents are attached to.</p>
   */
  dataSourceIds?: string[];

  /**
   * @public
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of documents.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of documents to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListDocumentsResponse {
  /**
   * @public
   * <p>A list of document details.</p>
   */
  documentDetailList?: DocumentDetails[];

  /**
   * @public
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of documents.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * @public
   * <p>The identifier of the application for getting a list of groups mapped to users.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the index for getting a list of groups mapped to users.</p>
   */
  indexId: string | undefined;

  /**
   * @public
   * <p>The timestamp identifier used for the latest <code>PUT</code> or <code>DELETE</code>
   *             action for mapping users to their groups.</p>
   */
  updatedEarlierThan: Date | undefined;

  /**
   * @public
   * <p>The identifier of the data source for getting a list of groups mapped to users.</p>
   */
  dataSourceId?: string;

  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *             Amazon Q returns a pagination token in the response. You can use this pagination
   *             token to retrieve the next set of groups that are mapped to users.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of returned groups that are mapped to users.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information for groups.</p>
 */
export interface GroupSummary {
  /**
   * @public
   * <p>The name of the group the summary information is for.</p>
   */
  groupName?: string;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * @public
   * <p>If the response is truncated, Amazon Q returns this token that you can use in the
   *             subsequent request to retrieve the next set of groups that are mapped to users.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Summary information for list of groups that are mapped to users.</p>
   */
  items?: GroupSummary[];
}

/**
 * @public
 */
export interface ListMessagesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q web experience conversation.</p>
   */
  conversationId: string | undefined;

  /**
   * @public
   * <p>The identifier for the Amazon Q application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the user involved in the Amazon Q web experience
   *             conversation.</p>
   */
  userId: string | undefined;

  /**
   * @public
   * <p>If the number of retrievers returned exceeds <code>maxResults</code>, Amazon Q
   *             returns a next token as a pagination token to retrieve the next set of messages.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of messages to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const MessageType = {
  SYSTEM: "SYSTEM",
  USER: "USER",
} as const;

/**
 * @public
 */
export type MessageType = (typeof MessageType)[keyof typeof MessageType];

/**
 * @public
 * <p>A message in an Amazon Q web experience.</p>
 */
export interface Message {
  /**
   * @public
   * <p>The identifier of the Amazon Q web experience message.</p>
   */
  messageId?: string;

  /**
   * @public
   * <p>The content of the Amazon Q web experience message.</p>
   */
  body?: string;

  /**
   * @public
   * <p>The timestamp of the first Amazon Q web experience message.</p>
   */
  time?: Date;

  /**
   * @public
   * <p>The type of Amazon Q message, whether <code>HUMAN</code> or <code>AI</code>
   *             generated.</p>
   */
  type?: MessageType;

  /**
   * @public
   * <p>A file directly uploaded into an Amazon Q web experience chat.</p>
   */
  attachments?: AttachmentOutput[];

  /**
   * @public
   * <p>The source documents used to generate Amazon Q web experience message.</p>
   */
  sourceAttribution?: SourceAttribution[];

  /**
   * @public
   * <p>An output event that Amazon Q returns to an user who wants to perform a plugin
   *             action during a non-streaming chat conversation. It contains information about the
   *             selected action with a list of possible user input fields, some pre-populated by
   *             Amazon Q.</p>
   */
  actionReview?: ActionReview;

  /**
   * @public
   * <p>Performs an Amazon Q plugin action during a non-streaming chat
   *             conversation.</p>
   */
  actionExecution?: ActionExecution;
}

/**
 * @public
 */
export interface ListMessagesResponse {
  /**
   * @public
   * <p>An array of information on one or more messages.</p>
   */
  messages?: Message[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Q returns this token, which you can use in a
   *             later request to list the next set of messages.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Q application or data source to get
   *             a list of tags for.</p>
   */
  resourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of tags associated with the Amazon Q application or data source.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const MessageUsefulnessReason = {
  COMPLETE: "COMPLETE",
  FACTUALLY_CORRECT: "FACTUALLY_CORRECT",
  HARMFUL_OR_UNSAFE: "HARMFUL_OR_UNSAFE",
  HELPFUL: "HELPFUL",
  INCORRECT_OR_MISSING_SOURCES: "INCORRECT_OR_MISSING_SOURCES",
  NOT_BASED_ON_DOCUMENTS: "NOT_BASED_ON_DOCUMENTS",
  NOT_COMPLETE: "NOT_COMPLETE",
  NOT_CONCISE: "NOT_CONCISE",
  NOT_FACTUALLY_CORRECT: "NOT_FACTUALLY_CORRECT",
  NOT_HELPFUL: "NOT_HELPFUL",
  OTHER: "OTHER",
  RELEVANT_SOURCES: "RELEVANT_SOURCES",
} as const;

/**
 * @public
 */
export type MessageUsefulnessReason = (typeof MessageUsefulnessReason)[keyof typeof MessageUsefulnessReason];

/**
 * @public
 * @enum
 */
export const MessageUsefulness = {
  NOT_USEFUL: "NOT_USEFUL",
  USEFUL: "USEFUL",
} as const;

/**
 * @public
 */
export type MessageUsefulness = (typeof MessageUsefulness)[keyof typeof MessageUsefulness];

/**
 * @public
 * <p>End user feedback on an AI-generated web experience chat message usefulness.</p>
 */
export interface MessageUsefulnessFeedback {
  /**
   * @public
   * <p>The usefulness value assigned by an end user to a message.</p>
   */
  usefulness: MessageUsefulness | undefined;

  /**
   * @public
   * <p>The reason for a usefulness rating.</p>
   */
  reason?: MessageUsefulnessReason;

  /**
   * @public
   * <p>A comment given by an end user on the usefulness of an AI-generated chat
   *             message.</p>
   */
  comment?: string;

  /**
   * @public
   * <p>The timestamp for when the feedback was submitted.</p>
   */
  submittedAt: Date | undefined;
}

/**
 * @public
 */
export interface PutFeedbackRequest {
  /**
   * @public
   * <p>The identifier of the application associated with the feedback.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the user giving the feedback.</p>
   */
  userId: string | undefined;

  /**
   * @public
   * <p>The identifier of the conversation the feedback is attached to.</p>
   */
  conversationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the chat message that the feedback was given for.</p>
   */
  messageId: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the feedback was recorded.</p>
   */
  messageCopiedAt?: Date;

  /**
   * @public
   * <p>The feedback usefulness value given by the user to the chat message.</p>
   */
  messageUsefulness?: MessageUsefulnessFeedback;
}

/**
 * @public
 * <p>The sub groups that belong to a group.</p>
 */
export interface MemberGroup {
  /**
   * @public
   * <p>The name of the sub group.</p>
   */
  groupName: string | undefined;

  /**
   * @public
   * <p>The type of the sub group.</p>
   */
  type?: MembershipType;
}

/**
 * @public
 * <p>The users that belong to a group.</p>
 */
export interface MemberUser {
  /**
   * @public
   * <p>The identifier of the user you want to map to a group.</p>
   */
  userId: string | undefined;

  /**
   * @public
   * <p>The type of the user.</p>
   */
  type?: MembershipType;
}

/**
 * @public
 * <p>A list of users or sub groups that belong to a group. This is for generating
 *             Amazon Q chat results only from document a user has access to.</p>
 */
export interface GroupMembers {
  /**
   * @public
   * <p>A list of sub groups that belong to a group. For example, the sub groups "Research",
   *             "Engineering", and "Sales and Marketing" all belong to the group "Company".</p>
   */
  memberGroups?: MemberGroup[];

  /**
   * @public
   * <p>A list of users that belong to a group. For example, a list of interns all belong to
   *             the "Interns" group.</p>
   */
  memberUsers?: MemberUser[];
}

/**
 * @public
 */
export interface PutGroupRequest {
  /**
   * @public
   * <p>The identifier of the application in which the user and group mapping belongs.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the index in which you want to map users to their groups.</p>
   */
  indexId: string | undefined;

  /**
   * @public
   * <p>The list that contains your users or sub groups that belong the same group. For
   *             example, the group "Company" includes the user "CEO" and the sub groups "Research",
   *             "Engineering", and "Sales and Marketing".</p>
   *          <p>If you have more than 1000 users and/or sub groups for a single group, you need to
   *             provide the path to the S3 file that lists your users and sub groups for a group. Your
   *             sub groups can contain more than 1000 users, but the list of sub groups that belong to a
   *             group (and/or users) must be no more than 1000.</p>
   */
  groupName: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source for which you want to map users to their groups.
   *             This is useful if a group is tied to multiple data sources, but you only want the group
   *             to access documents of a certain data source. For example, the groups "Research",
   *             "Engineering", and "Sales and Marketing" are all tied to the company's documents stored
   *             in the data sources Confluence and Salesforce. However, "Sales and Marketing" team only
   *             needs access to customer-related documents stored in Salesforce.</p>
   */
  dataSourceId?: string;

  /**
   * @public
   * <p>The type of the group.</p>
   */
  type: MembershipType | undefined;

  /**
   * @public
   * <p>A list of users or sub groups that belong to a group. This is for generating
   *             Amazon Q chat results only from document a user has access to.</p>
   */
  groupMembers: GroupMembers | undefined;
}

/**
 * @public
 */
export interface PutGroupResponse {}

/**
 * @public
 */
export interface StartDataSourceSyncJobRequest {
  /**
   * @public
   * <p> The identifier of the data source connector. </p>
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * <p>The identifier of Amazon Q application the data source is connected to.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the index used with the data source connector.</p>
   */
  indexId: string | undefined;
}

/**
 * @public
 */
export interface StartDataSourceSyncJobResponse {
  /**
   * @public
   * <p>The identifier for a particular synchronization job.</p>
   */
  executionId?: string;
}

/**
 * @public
 */
export interface StopDataSourceSyncJobRequest {
  /**
   * @public
   * <p> The identifier of the data source connector. </p>
   */
  dataSourceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Q application that the data source is connected
   *             to.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the index used with the Amazon Q data source connector.</p>
   */
  indexId: string | undefined;
}

/**
 * @public
 */
export interface StopDataSourceSyncJobResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Q application or data source to
   *             tag.</p>
   */
  resourceARN: string | undefined;

  /**
   * @public
   * <p>A list of tag keys to add to the Amazon Q application or data source. If a tag
   *             already exists, the existing value is replaced with the new value.</p>
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Q application, or data source to
   *             remove the tag from.</p>
   */
  resourceARN: string | undefined;

  /**
   * @public
   * <p>A list of tag keys to remove from the Amazon Q application or data source. If a
   *             tag key does not exist on the resource, it is ignored.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateChatControlsConfigurationRequest {
  /**
   * @public
   * <p>The identifier of the application for which the chat controls are configured.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>A token that you provide to identify the request to update a Amazon Q application
   *             chat configuration.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The response scope configured for your application. This determines whether your
   *             application uses its retrieval augmented generation (RAG) system to generate answers
   *             only from your enterprise data, or also uses the large language models (LLM) knowledge
   *             to respons to end user questions in chat.</p>
   */
  responseScope?: ResponseScope;

  /**
   * @public
   * <p>The phrases blocked from chat by your chat control configuration.</p>
   */
  blockedPhrasesConfigurationUpdate?: BlockedPhrasesConfigurationUpdate;

  /**
   * @public
   * <p>The configured topic specific chat controls you want to update.</p>
   */
  topicConfigurationsToCreateOrUpdate?: TopicConfiguration[];

  /**
   * @public
   * <p>The configured topic specific chat controls you want to delete.</p>
   */
  topicConfigurationsToDelete?: TopicConfiguration[];
}

/**
 * @public
 */
export interface UpdateChatControlsConfigurationResponse {}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * @public
   * <p>The identifier of the application the user is attached to.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The email id attached to the user.</p>
   */
  userId: string | undefined;

  /**
   * @public
   * <p>The user aliases attached to the user id that are to be updated.</p>
   */
  userAliasesToUpdate?: UserAlias[];

  /**
   * @public
   * <p>The user aliases attached to the user id that are to be deleted.</p>
   */
  userAliasesToDelete?: UserAlias[];
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * @public
   * <p>The user aliases that have been to be added to a user id.</p>
   */
  userAliasesAdded?: UserAlias[];

  /**
   * @public
   * <p>The user aliases attached to a user id that have been updated.</p>
   */
  userAliasesUpdated?: UserAlias[];

  /**
   * @public
   * <p>The user aliases that have been deleted from a user id.</p>
   */
  userAliasesDeleted?: UserAlias[];
}

/**
 * @public
 * <p>Enables filtering of responses based on document attributes or metadata fields.</p>
 */
export interface AttributeFilter {
  /**
   * @public
   * <p>Performs a logical <code>AND</code> operation on all supplied filters.</p>
   */
  andAllFilters?: AttributeFilter[];

  /**
   * @public
   * <p> Performs a logical <code>OR</code> operation on all supplied filters. </p>
   */
  orAllFilters?: AttributeFilter[];

  /**
   * @public
   * <p>Performs a logical <code>NOT</code> operation on all supplied filters. </p>
   */
  notFilter?: AttributeFilter;

  /**
   * @public
   * <p>Performs an equals operation on two document attributes or metadata fields.</p>
   */
  equalsTo?: DocumentAttribute;

  /**
   * @public
   * <p>Returns <code>true</code> when a document contains all the specified document
   *             attributes or metadata fields.</p>
   */
  containsAll?: DocumentAttribute;

  /**
   * @public
   * <p>Returns <code>true</code> when a document contains any of the specified document
   *             attributes or metadata fields.</p>
   */
  containsAny?: DocumentAttribute;

  /**
   * @public
   * <p>Performs a greater than operation on two document attributes or metadata fields. Use
   *             with a document attribute of type <code>Date</code> or <code>Long</code>.</p>
   */
  greaterThan?: DocumentAttribute;

  /**
   * @public
   * <p>Performs a greater or equals than operation on two document attributes or metadata
   *             fields. Use with a document attribute of type <code>Date</code> or <code>Long</code>.
   *         </p>
   */
  greaterThanOrEquals?: DocumentAttribute;

  /**
   * @public
   * <p>Performs a less than operation on two document attributes or metadata fields. Use with
   *             a document attribute of type <code>Date</code> or <code>Long</code>.</p>
   */
  lessThan?: DocumentAttribute;

  /**
   * @public
   * <p>Performs a less than or equals operation on two document attributes or metadata
   *             fields. Use with a document attribute of type <code>Date</code> or <code>Long</code>.
   *         </p>
   */
  lessThanOrEquals?: DocumentAttribute;
}

/**
 * @public
 */
export interface ChatSyncInput {
  /**
   * @public
   * <p>The identifier of the Amazon Q application linked to the Amazon Q
   *             conversation.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the user attached to the chat input.</p>
   */
  userId: string | undefined;

  /**
   * @public
   * <p>The groups that a user associated with the chat input belongs to.</p>
   */
  userGroups?: string[];

  /**
   * @public
   * <p>A end user message in a conversation.</p>
   */
  userMessage?: string;

  /**
   * @public
   * <p>A list of files uploaded directly during chat. You can upload a maximum of 5 files of
   *             upto 10 MB each.</p>
   */
  attachments?: AttachmentInput[];

  /**
   * @public
   * <p>A request from an end user to perform an Amazon Q plugin action.</p>
   */
  actionExecution?: ActionExecution;

  /**
   * @public
   * <p>The identifier of the Amazon Q conversation.</p>
   */
  conversationId?: string;

  /**
   * @public
   * <p>The identifier of the previous end user text input message in a conversation.</p>
   */
  parentMessageId?: string;

  /**
   * @public
   * <p>Enables filtering of Amazon Q web experience responses based on document
   *             attributes or metadata fields.</p>
   */
  attributeFilter?: AttributeFilter;

  /**
   * @public
   * <p>A token that you provide to identify a chat request.</p>
   */
  clientToken?: string;
}

/**
 * @internal
 */
export const EncryptionConfigurationFilterSensitiveLog = (obj: EncryptionConfiguration): any => ({
  ...obj,
  ...(obj.kmsKeyId && { kmsKeyId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateApplicationRequestFilterSensitiveLog = (obj: CreateApplicationRequest): any => ({
  ...obj,
  ...(obj.encryptionConfiguration && {
    encryptionConfiguration: EncryptionConfigurationFilterSensitiveLog(obj.encryptionConfiguration),
  }),
});

/**
 * @internal
 */
export const GetApplicationResponseFilterSensitiveLog = (obj: GetApplicationResponse): any => ({
  ...obj,
  ...(obj.encryptionConfiguration && {
    encryptionConfiguration: EncryptionConfigurationFilterSensitiveLog(obj.encryptionConfiguration),
  }),
});
