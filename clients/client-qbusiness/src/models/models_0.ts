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
 * <p>Provides information about a group associated with the principal.</p>
 * @public
 */
export interface PrincipalGroup {
  /**
   * <p>The name of the group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Provides information about whether to allow or deny access to the principal.</p>
   * @public
   */
  access: ReadAccessType | undefined;

  /**
   * <p>The type of group.</p>
   * @public
   */
  membershipType?: MembershipType | undefined;
}

/**
 * <p>Provides information about a user associated with a principal.</p>
 * @public
 */
export interface PrincipalUser {
  /**
   * <p> The identifier of the user. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Provides information about whether to allow or deny access to the principal.</p>
   * @public
   */
  access: ReadAccessType | undefined;

  /**
   * <p>The type of group.</p>
   * @public
   */
  membershipType?: MembershipType | undefined;
}

/**
 * <p>Provides user and group information used for filtering documents to use for generating
 *             Amazon Q Business conversation responses.</p>
 * @public
 */
export type Principal = Principal.GroupMember | Principal.UserMember | Principal.$UnknownMember;

/**
 * @public
 */
export namespace Principal {
  /**
   * <p>The user associated with the principal.</p>
   * @public
   */
  export interface UserMember {
    user: PrincipalUser;
    group?: never;
    $unknown?: never;
  }

  /**
   * <p> The group associated with the principal.</p>
   * @public
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
 * <p>A list of principals. Each principal can be either a <code>USER</code> or a
 *                 <code>GROUP</code> and can be designated document access permissions of either
 *                 <code>ALLOW</code> or <code>DENY</code>.</p>
 * @public
 */
export interface AccessControl {
  /**
   * <p>Contains a list of principals, where a principal can be either a <code>USER</code> or
   *             a <code>GROUP</code>. Each principal can be have the following type of document access:
   *                 <code>ALLOW</code> or <code>DENY</code>.</p>
   * @public
   */
  principals: Principal[] | undefined;

  /**
   * <p>Describes the member relation within a principal list.</p>
   * @public
   */
  memberRelation?: MemberRelation | undefined;
}

/**
 * <p>Used to configure access permissions for a document.</p>
 * @public
 */
export interface AccessConfiguration {
  /**
   * <p>A list of <code>AccessControlList</code> objects.</p>
   * @public
   */
  accessControls: AccessControl[] | undefined;

  /**
   * <p>Describes the member relation within the <code>AccessControlList</code> object.</p>
   * @public
   */
  memberRelation?: MemberRelation | undefined;
}

/**
 * <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
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
 * <p>A user input field in an plugin action execution payload.</p>
 * @public
 */
export interface ActionExecutionPayloadField {
  /**
   * <p>The content of a user input field in an plugin action execution payload.</p>
   * @public
   */
  value: __DocumentType | undefined;
}

/**
 * <p>Performs an Amazon Q Business plugin action during a non-streaming chat
 *             conversation.</p>
 * @public
 */
export interface ActionExecution {
  /**
   * <p>The identifier of the plugin the action is attached to.</p>
   * @public
   */
  pluginId: string | undefined;

  /**
   * <p>A mapping of field names to the field values in input that an end user provides to
   *             Amazon Q Business requests to perform their plugin action. </p>
   * @public
   */
  payload: Record<string, ActionExecutionPayloadField> | undefined;

  /**
   * <p>A string used to retain information about the hierarchical contexts within an action
   *             execution event payload.</p>
   * @public
   */
  payloadFieldNameSeparator: string | undefined;
}

/**
 * <p>A request from an end user signalling an intent to perform an Amazon Q Business plugin
 *             action during a streaming chat.</p>
 * @public
 */
export interface ActionExecutionEvent {
  /**
   * <p>The identifier of the plugin for which the action is being requested.</p>
   * @public
   */
  pluginId: string | undefined;

  /**
   * <p>A mapping of field names to the field values in input that an end user provides to
   *             Amazon Q Business requests to perform their plugin action. </p>
   * @public
   */
  payload: Record<string, ActionExecutionPayloadField> | undefined;

  /**
   * <p>A string used to retain information about the hierarchical contexts within a action
   *             execution event payload.</p>
   * @public
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
 * <p>Information about the field values that an end user can use to provide to
 *             Amazon Q Business for Amazon Q Business to perform the requested plugin action.</p>
 * @public
 */
export interface ActionReviewPayloadFieldAllowedValue {
  /**
   * <p>The field value.</p>
   * @public
   */
  value?: __DocumentType | undefined;

  /**
   * <p>The name of the field.</p>
   * @public
   */
  displayValue?: __DocumentType | undefined;
}

/**
 * <p>A user input field in an plugin action review payload.</p>
 * @public
 */
export interface ActionReviewPayloadField {
  /**
   * <p> The name of the field. </p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The display order of fields in a payload.</p>
   * @public
   */
  displayOrder?: number | undefined;

  /**
   * <p>The field level description of each action review input field. This could be an
   *             explanation of the field. In the Amazon Q Business web experience, these descriptions could
   *             be used to display as tool tips to help users understand the field. </p>
   * @public
   */
  displayDescription?: string | undefined;

  /**
   * <p>The type of field. </p>
   * @public
   */
  type?: ActionPayloadFieldType | undefined;

  /**
   * <p>The field value.</p>
   * @public
   */
  value?: __DocumentType | undefined;

  /**
   * <p>Information about the field values that an end user can use to provide to
   *             Amazon Q Business for Amazon Q Business to perform the requested plugin action.</p>
   * @public
   */
  allowedValues?: ActionReviewPayloadFieldAllowedValue[] | undefined;

  /**
   * <p>The expected data format for the action review input field value. For example, in PTO
   *             request, <code>from</code> and <code>to</code> would be of <code>datetime</code> allowed
   *             format. </p>
   * @public
   */
  allowedFormat?: string | undefined;

  /**
   * <p>Use to create a custom form with array fields (fields with nested objects inside an
   *             array). </p>
   * @public
   */
  arrayItemJsonSchema?: __DocumentType | undefined;

  /**
   * <p>Information about whether the field is required.</p>
   * @public
   */
  required?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const PluginType = {
  CUSTOM: "CUSTOM",
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
 * <p>An output event that Amazon Q Business returns to an user who wants to perform a plugin
 *             action during a non-streaming chat conversation. It contains information about the
 *             selected action with a list of possible user input fields, some pre-populated by
 *             Amazon Q Business.</p>
 * @public
 */
export interface ActionReview {
  /**
   * <p>The identifier of the plugin associated with the action review.</p>
   * @public
   */
  pluginId?: string | undefined;

  /**
   * <p>The type of plugin.</p>
   * @public
   */
  pluginType?: PluginType | undefined;

  /**
   * <p>Field values that an end user needs to provide to Amazon Q Business for Amazon Q Business to
   *             perform the requested plugin action.</p>
   * @public
   */
  payload?: Record<string, ActionReviewPayloadField> | undefined;

  /**
   * <p>A string used to retain information about the hierarchical contexts within an action
   *             review payload.</p>
   * @public
   */
  payloadFieldNameSeparator?: string | undefined;
}

/**
 * <p>An output event that Amazon Q Business returns to an user who wants to perform a plugin
 *             action during a streaming chat conversation. It contains information about the selected
 *             action with a list of possible user input fields, some pre-populated by Amazon Q Business.
 *         </p>
 * @public
 */
export interface ActionReviewEvent {
  /**
   * <p>The identifier of the conversation with which the action review event is
   *             associated.</p>
   * @public
   */
  conversationId?: string | undefined;

  /**
   * <p>The identifier of the conversation with which the plugin action is associated.</p>
   * @public
   */
  userMessageId?: string | undefined;

  /**
   * <p>The identifier of an Amazon Q Business AI generated associated with the action review
   *             event.</p>
   * @public
   */
  systemMessageId?: string | undefined;

  /**
   * <p>The identifier of the plugin associated with the action review event.</p>
   * @public
   */
  pluginId?: string | undefined;

  /**
   * <p>The type of plugin.</p>
   * @public
   */
  pluginType?: PluginType | undefined;

  /**
   * <p>Field values that an end user needs to provide to Amazon Q Business for Amazon Q Business to
   *             perform the requested plugin action.</p>
   * @public
   */
  payload?: Record<string, ActionReviewPayloadField> | undefined;

  /**
   * <p>A string used to retain information about the hierarchical contexts within an action
   *             review event payload.</p>
   * @public
   */
  payloadFieldNameSeparator?: string | undefined;
}

/**
 * <p>Information required for Amazon Q Business to find a specific file in an Amazon S3
 *             bucket.</p>
 * @public
 */
export interface S3 {
  /**
   * <p>The name of the S3 bucket that contains the file.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The name of the file.</p>
   * @public
   */
  key: string | undefined;
}

/**
 * <p>Contains details about the OpenAPI schema for a custom plugin. For more information,
 *             see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/custom-plugin.html#plugins-api-schema">custom plugin OpenAPI schemas</a>. You can either include
 *             the schema directly in the payload field or you can upload it to an S3 bucket and
 *             specify the S3 bucket location in the <code>s3</code> field. </p>
 * @public
 */
export type APISchema = APISchema.PayloadMember | APISchema.S3Member | APISchema.$UnknownMember;

/**
 * @public
 */
export namespace APISchema {
  /**
   * <p>The JSON or YAML-formatted payload defining the OpenAPI schema for a custom plugin.
   *         </p>
   * @public
   */
  export interface PayloadMember {
    payload: string;
    s3?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains details about the S3 object containing the OpenAPI schema for a custom
   *             plugin. The schema could be in either JSON or YAML format.</p>
   * @public
   */
  export interface S3Member {
    payload?: never;
    s3: S3;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    payload?: never;
    s3?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    payload: (value: string) => T;
    s3: (value: S3) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: APISchema, visitor: Visitor<T>): T => {
    if (value.payload !== undefined) return visitor.payload(value.payload);
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const APISchemaType = {
  OPEN_API_V3: "OPEN_API_V3",
} as const;

/**
 * @public
 */
export type APISchemaType = (typeof APISchemaType)[keyof typeof APISchemaType];

/**
 * @public
 * @enum
 */
export const IdentityType = {
  AWS_IAM_IDC: "AWS_IAM_IDC",
  AWS_IAM_IDP_OIDC: "AWS_IAM_IDP_OIDC",
  AWS_IAM_IDP_SAML: "AWS_IAM_IDP_SAML",
} as const;

/**
 * @public
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

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
 * <p>Summary information for an Amazon Q Business application.</p>
 * @public
 */
export interface Application {
  /**
   * <p>The name of the Amazon Q Business application.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The identifier for the Amazon Q Business application.</p>
   * @public
   */
  applicationId?: string | undefined;

  /**
   * <p>The Unix timestamp when the Amazon Q Business application was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Unix timestamp when the Amazon Q Business application was last updated. </p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The status of the Amazon Q Business application. The application is ready to use when the
   *             status is <code>ACTIVE</code>.</p>
   * @public
   */
  status?: ApplicationStatus | undefined;

  /**
   * <p>The authentication type being used by a Amazon Q Business application.</p>
   * @public
   */
  identityType?: IdentityType | undefined;
}

/**
 * <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistencies with your resources and try again.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier of the resource affected.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource affected.</p>
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
export const AttachmentsControlMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AttachmentsControlMode = (typeof AttachmentsControlMode)[keyof typeof AttachmentsControlMode];

/**
 * <p>Configuration information for the file upload during chat feature.</p>
 * @public
 */
export interface AttachmentsConfiguration {
  /**
   * <p>Status information about whether file upload functionality is activated or deactivated
   *             for your end user.</p>
   * @public
   */
  attachmentsControlMode: AttachmentsControlMode | undefined;
}

/**
 * <p>Provides the identifier of the KMS key used to encrypt data indexed by
 *             Amazon Q Business. Amazon Q Business doesn't support asymmetric keys.</p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>The identifier of the KMS key. Amazon Q Business doesn't support asymmetric
   *             keys.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PersonalizationControlMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type PersonalizationControlMode = (typeof PersonalizationControlMode)[keyof typeof PersonalizationControlMode];

/**
 * <p>Configuration information about chat response personalization. For more information,
 *             see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/personalizing-chat-responses.html">Personalizing chat responses</a>.</p>
 * @public
 */
export interface PersonalizationConfiguration {
  /**
   * <p>An option to allow Amazon Q Business to customize chat responses using user
   *             specific metadata—specifically, location and job information—in your
   *                 IAM Identity Center instance.</p>
   * @public
   */
  personalizationControlMode: PersonalizationControlMode | undefined;
}

/**
 * @public
 * @enum
 */
export const QAppsControlMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type QAppsControlMode = (typeof QAppsControlMode)[keyof typeof QAppsControlMode];

/**
 * <p>Configuration information about Amazon Q Apps.</p>
 * @public
 */
export interface QAppsConfiguration {
  /**
   * <p>Status information about whether end users can create and use Amazon Q Apps in the web
   *             experience.</p>
   * @public
   */
  qAppsControlMode: QAppsControlMode | undefined;
}

/**
 * <p>A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and
 *             values can consist of Unicode letters, digits, white space, and any of the following
 *             symbols: _ . : / = + - @.</p>
 * @public
 */
export interface Tag {
  /**
   * <p> The key for the tag. Keys are not case sensitive and must be unique for the
   *             Amazon Q Business application or data source.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value associated with the tag. The value may be an empty string but it can't be
   *             null.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>A name for the Amazon Q Business application. </p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of an IAM role with permissions to access your Amazon
   *                 CloudWatch logs and metrics. If this property is not specified, Amazon Q Business will create a <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/using-service-linked-roles.html#slr-permissions">service linked role (SLR)</a> and use it as the
   *             application's role.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The authentication type being used by a Amazon Q Business application.</p>
   * @public
   */
  identityType?: IdentityType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an identity provider being used by an Amazon Q Business application.</p>
   * @public
   */
  iamIdentityProviderArn?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM Identity Center instance you are either
   *             creating for—or connecting to—your Amazon Q Business application.</p>
   * @public
   */
  identityCenterInstanceArn?: string | undefined;

  /**
   * <p>The OIDC client ID for a Amazon Q Business application.</p>
   * @public
   */
  clientIdsForOIDC?: string[] | undefined;

  /**
   * <p>A description for the Amazon Q Business application. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The identifier of the KMS key that is used to encrypt your data.
   *             Amazon Q Business doesn't support asymmetric keys.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>A list of key-value pairs that identify or categorize your Amazon Q Business application.
   *             You can also use tags to help control access to the application. Tag keys and values can
   *             consist of Unicode letters, digits, white space, and any of the following symbols: _ . :
   *             / = + - @.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>A token that you provide to identify the request to create your Amazon Q Business
   *             application.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>An option to allow end users to upload files directly during chat.</p>
   * @public
   */
  attachmentsConfiguration?: AttachmentsConfiguration | undefined;

  /**
   * <p>An option to allow end users to create and use Amazon Q Apps in the web
   *             experience.</p>
   * @public
   */
  qAppsConfiguration?: QAppsConfiguration | undefined;

  /**
   * <p>Configuration information about chat response personalization. For more information,
   *             see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/personalizing-chat-responses.html">Personalizing chat responses</a>
   *          </p>
   * @public
   */
  personalizationConfiguration?: PersonalizationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>The identifier of the Amazon Q Business application.</p>
   * @public
   */
  applicationId?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the Amazon Q Business application. </p>
   * @public
   */
  applicationArn?: string | undefined;
}

/**
 * <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 * @public
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
 * <p>The resource you want to use doesn’t exist. Make sure you have provided the correct
 *             resource and try again.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier of the resource affected.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource affected.</p>
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
 * <p>You have exceeded the set limits for your Amazon Q Business service. </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier of the resource affected.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource affected.</p>
   * @public
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
 * <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 * @public
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
 * <p>The input failed to meet the constraints specified by Amazon Q Business in a specified
 *             field.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The field name where the invalid entry was detected.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message about the validation exception.</p>
   * @public
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
 * <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason for the <code>ValidationException</code>.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>The input field(s) that failed validation.</p>
   * @public
   */
  fields?: ValidationExceptionField[] | undefined;

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
   * <p>The identifier of the Amazon Q Business application.</p>
   * @public
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
   * <p>The identifier of the Amazon Q Business application.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * <p>Configuration information about the file upload during chat feature for your
 *             application.</p>
 * @public
 */
export interface AppliedAttachmentsConfiguration {
  /**
   * <p>Information about whether file upload during chat functionality is activated for your
   *             application.</p>
   * @public
   */
  attachmentsControlMode?: AttachmentsControlMode | undefined;
}

/**
 * @public
 * @enum
 */
export const AutoSubscriptionStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AutoSubscriptionStatus = (typeof AutoSubscriptionStatus)[keyof typeof AutoSubscriptionStatus];

/**
 * @public
 * @enum
 */
export const SubscriptionType = {
  Q_BUSINESS: "Q_BUSINESS",
  Q_LITE: "Q_LITE",
} as const;

/**
 * @public
 */
export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType];

/**
 * <p>Subscription configuration information for an Amazon Q Business application
 *             using IAM identity federation for user management. </p>
 * @public
 */
export interface AutoSubscriptionConfiguration {
  /**
   * <p>Describes whether automatic subscriptions are enabled for an Amazon Q Business
   *             application using IAM identity federation for user management.</p>
   * @public
   */
  autoSubscribe: AutoSubscriptionStatus | undefined;

  /**
   * <p>Describes the default subscription type assigned to an Amazon Q Business
   *             application using IAM identity federation for user management. If the
   *             value for <code>autoSubscribe</code> is set to <code>ENABLED</code> you must select a
   *             value for this field.</p>
   * @public
   */
  defaultSubscriptionType?: SubscriptionType | undefined;
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
 * <p>Provides information about a Amazon Q Business request error.</p>
 * @public
 */
export interface ErrorDetail {
  /**
   * <p>The message explaining the Amazon Q Business request error.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The code associated with the Amazon Q Business request error.</p>
   * @public
   */
  errorCode?: ErrorCode | undefined;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * <p>The name of the Amazon Q Business application.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business application.</p>
   * @public
   */
  applicationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Business application.</p>
   * @public
   */
  applicationArn?: string | undefined;

  /**
   * <p>The authentication type being used by a Amazon Q Business application.</p>
   * @public
   */
  identityType?: IdentityType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an identity provider being used by an Amazon Q Business application.</p>
   * @public
   */
  iamIdentityProviderArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS IAM Identity Center instance attached to
   *             your Amazon Q Business application.</p>
   * @public
   */
  identityCenterApplicationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM with permissions to access
   *             your CloudWatch logs and metrics.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The status of the Amazon Q Business application.</p>
   * @public
   */
  status?: ApplicationStatus | undefined;

  /**
   * <p>A description for the Amazon Q Business application.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services
   *             KMS key that is used to encrypt your data. Amazon Q Business doesn't support
   *             asymmetric keys.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>The Unix timestamp when the Amazon Q Business application was last updated.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Unix timestamp when the Amazon Q Business application was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>If the <code>Status</code> field is set to <code>ERROR</code>, the
   *                 <code>ErrorMessage</code> field contains a description of the error that caused the
   *             synchronization to fail.</p>
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * <p>Settings for whether end users can upload files directly during chat.</p>
   * @public
   */
  attachmentsConfiguration?: AppliedAttachmentsConfiguration | undefined;

  /**
   * <p>Settings for whether end users can create and use Amazon Q Apps in the web
   *             experience.</p>
   * @public
   */
  qAppsConfiguration?: QAppsConfiguration | undefined;

  /**
   * <p>Configuration information about chat response personalization. For more information,
   *             see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/personalizing-chat-responses.html">Personalizing chat responses</a>.</p>
   * @public
   */
  personalizationConfiguration?: PersonalizationConfiguration | undefined;

  /**
   * <p>Settings for auto-subscription behavior for this application. This is only applicable
   *             to SAML and OIDC applications.</p>
   * @public
   */
  autoSubscriptionConfiguration?: AutoSubscriptionConfiguration | undefined;

  /**
   * <p>The OIDC client ID for a Amazon Q Business application.</p>
   * @public
   */
  clientIdsForOIDC?: string[] | undefined;
}

/**
 * <p>Provides information about index capacity configuration.</p>
 * @public
 */
export interface IndexCapacityConfiguration {
  /**
   * <p>The number of storage units configured for an Amazon Q Business index.</p>
   * @public
   */
  units?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const IndexType = {
  ENTERPRISE: "ENTERPRISE",
  STARTER: "STARTER",
} as const;

/**
 * @public
 */
export type IndexType = (typeof IndexType)[keyof typeof IndexType];

/**
 * @public
 */
export interface CreateIndexRequest {
  /**
   * <p>The identifier of the Amazon Q Business application using the index.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>A name for the Amazon Q Business index.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>A description for the Amazon Q Business index.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The index type that's suitable for your needs. For more information on what's included
   *             in each type of index, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/tiers.html#index-tiers">Amazon Q Business
   *             tiers</a>.</p>
   * @public
   */
  type?: IndexType | undefined;

  /**
   * <p>A list of key-value pairs that identify or categorize the index. You can also use tags
   *             to help control access to the index. Tag keys and values can consist of Unicode letters,
   *             digits, white space, and any of the following symbols: _ . : / = + - @.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The capacity units you want to provision for your index. You can add and remove
   *             capacity to fit your usage needs.</p>
   * @public
   */
  capacityConfiguration?: IndexCapacityConfiguration | undefined;

  /**
   * <p>A token that you provide to identify the request to create an index. Multiple calls to
   *             the <code>CreateIndex</code> API with the same client token will create only one
   *             index.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateIndexResponse {
  /**
   * <p>The identifier for the Amazon Q Business index.</p>
   * @public
   */
  indexId?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of an Amazon Q Business index.</p>
   * @public
   */
  indexArn?: string | undefined;
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
 * <p>The value of a document attribute. You can only provide one value for a document
 *             attribute.</p>
 * @public
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
   * <p>A string.</p>
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    stringListValue?: never;
    longValue?: never;
    dateValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A list of strings.</p>
   * @public
   */
  export interface StringListValueMember {
    stringValue?: never;
    stringListValue: string[];
    longValue?: never;
    dateValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A long integer value. </p>
   * @public
   */
  export interface LongValueMember {
    stringValue?: never;
    stringListValue?: never;
    longValue: number;
    dateValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A date expressed as an ISO 8601 string.</p>
   *          <p>It's important for the time zone to be included in the ISO 8601 date-time format. For
   *             example, 2012-03-25T12:30:10+01:00 is the ISO 8601 date-time format for March 25th 2012
   *             at 12:30PM (plus 10 seconds) in Central European Time. </p>
   * @public
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
 * <p>The condition used for the target document attribute or metadata field when ingesting
 *             documents into Amazon Q Business. You use this with <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeTarget.html">
 *                <code>DocumentAttributeTarget</code>
 *             </a> to apply the condition.</p>
 *          <p>For example, you can create the 'Department' target field and have it prefill
 *             department names associated with the documents based on information in the 'Source_URI'
 *             field. Set the condition that if the 'Source_URI' field contains 'financial' in its URI
 *             value, then prefill the target field 'Department' with the target value 'Finance' for
 *             the document.</p>
 *          <p>Amazon Q Business can't create a target field if it has not already been created as an
 *             index field. After you create your index field, you can create a document metadata field
 *             using <code>DocumentAttributeTarget</code>. Amazon Q Business then will map your newly
 *             created metadata field to your index field.</p>
 * @public
 */
export interface DocumentAttributeCondition {
  /**
   * <p>The identifier of the document attribute used for the condition.</p>
   *          <p>For example, 'Source_URI' could be an identifier for the attribute or metadata field
   *             that contains source URIs associated with the documents.</p>
   *          <p>Amazon Q Business currently doesn't support <code>_document_body</code> as an attribute
   *             key used for the condition.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The identifier of the document attribute used for the condition.</p>
   *          <p>For example, 'Source_URI' could be an identifier for the attribute or metadata field
   *             that contains source URIs associated with the documents.</p>
   *          <p>Amazon Q Business currently does not support <code>_document_body</code> as an attribute
   *             key used for the condition.</p>
   * @public
   */
  operator: DocumentEnrichmentConditionOperator | undefined;

  /**
   * <p>The value of a document attribute. You can only provide one value for a document
   *             attribute.</p>
   * @public
   */
  value?: DocumentAttributeValue | undefined;
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
 * <p>The target document attribute or metadata field you want to alter when ingesting
 *             documents into Amazon Q Business.</p>
 *          <p>For example, you can delete all customer identification numbers associated with the
 *             documents, stored in the document metadata field called 'Customer_ID' by setting the
 *             target key as 'Customer_ID' and the deletion flag to <code>TRUE</code>. This removes all
 *             customer ID values in the field 'Customer_ID'. This would scrub personally identifiable
 *             information from each document's metadata.</p>
 *          <p>Amazon Q Business can't create a target field if it has not already been created as an
 *             index field. After you create your index field, you can create a document metadata field
 *             using <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeTarget.html">
 *                <code>DocumentAttributeTarget</code>
 *             </a>. Amazon Q Business
 *             will then map your newly created document attribute to your index field.</p>
 *          <p>You can also use this with <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeCondition.html">
 *                <code>DocumentAttributeCondition</code>
 *             </a>.</p>
 * @public
 */
export interface DocumentAttributeTarget {
  /**
   * <p>The identifier of the target document attribute or metadata field. For example,
   *             'Department' could be an identifier for the target attribute or metadata field that
   *             includes the department names associated with the documents.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of a document attribute. You can only provide one value for a document
   *             attribute.</p>
   * @public
   */
  value?: DocumentAttributeValue | undefined;

  /**
   * <p>
   *             <code>TRUE</code> to delete the existing target value for your specified target
   *             attribute key. You cannot create a target value and set this to
   *             <code>TRUE</code>.</p>
   * @public
   */
  attributeValueOperator?: AttributeValueOperator | undefined;
}

/**
 * <p>Provides the configuration information for applying basic logic to alter document
 *             metadata and content when ingesting documents into Amazon Q Business.</p>
 *          <p>To apply advanced logic, to go beyond what you can do with basic logic, see <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_HookConfiguration.html">
 *                <code>HookConfiguration</code>
 *             </a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html">Custom document enrichment</a>. </p>
 * @public
 */
export interface InlineDocumentEnrichmentConfiguration {
  /**
   * <p>The condition used for the target document attribute or metadata field when ingesting
   *             documents into Amazon Q Business. You use this with <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeTarget.html">
   *                <code>DocumentAttributeTarget</code>
   *             </a> to apply the condition.</p>
   *          <p>For example, you can create the 'Department' target field and have it prefill
   *             department names associated with the documents based on information in the 'Source_URI'
   *             field. Set the condition that if the 'Source_URI' field contains 'financial' in its URI
   *             value, then prefill the target field 'Department' with the target value 'Finance' for
   *             the document.</p>
   *          <p>Amazon Q Business can't create a target field if it has not already been created as an
   *             index field. After you create your index field, you can create a document metadata field
   *             using <code>DocumentAttributeTarget</code>. Amazon Q Business then will map your newly
   *             created metadata field to your index field.</p>
   * @public
   */
  condition?: DocumentAttributeCondition | undefined;

  /**
   * <p>The target document attribute or metadata field you want to alter when ingesting
   *             documents into Amazon Q Business.</p>
   *          <p>For example, you can delete all customer identification numbers associated with the
   *             documents, stored in the document metadata field called 'Customer_ID' by setting the
   *             target key as 'Customer_ID' and the deletion flag to <code>TRUE</code>. This removes all
   *             customer ID values in the field 'Customer_ID'. This would scrub personally identifiable
   *             information from each document's metadata.</p>
   *          <p>Amazon Q Business can't create a target field if it has not already been created as an
   *             index field. After you create your index field, you can create a document metadata field
   *             using <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeTarget.html">
   *                <code>DocumentAttributeTarget</code>
   *             </a>. Amazon Q Business
   *             will then map your newly created document attribute to your index field.</p>
   *          <p>You can also use this with <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeCondition.html">
   *                <code>DocumentAttributeCondition</code>
   *             </a>.</p>
   * @public
   */
  target?: DocumentAttributeTarget | undefined;

  /**
   * <p>
   *             <code>TRUE</code> to delete content if the condition used for the target attribute is
   *             met.</p>
   * @public
   */
  documentContentOperator?: DocumentContentOperator | undefined;
}

/**
 * <p>Provides the configuration information for invoking a Lambda function in
 *                 Lambda to alter document metadata and content when ingesting
 *             documents into Amazon Q Business.</p>
 *          <p>You can configure your Lambda function using the
 *                 <code>PreExtractionHookConfiguration</code> parameter if you want to apply advanced
 *             alterations on the original or raw documents.</p>
 *          <p>If you want to apply advanced alterations on the Amazon Q Business structured documents,
 *             you must configure your Lambda function using
 *                 <code>PostExtractionHookConfiguration</code>.</p>
 *          <p>You can only invoke one Lambda function. However, this function can invoke
 *             other functions it requires.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html">Custom document enrichment</a>. </p>
 * @public
 */
export interface HookConfiguration {
  /**
   * <p>The condition used for when a Lambda function should be invoked.</p>
   *          <p>For example, you can specify a condition that if there are empty date-time values,
   *             then Amazon Q Business should invoke a function that inserts the current date-time.</p>
   * @public
   */
  invocationCondition?: DocumentAttributeCondition | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a role with permission to run a Lambda
   *             function during ingestion. For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/iam-roles.html#cde-iam-role">IAM roles for
   *                 Custom Document Enrichment (CDE)</a>.</p>
   * @public
   */
  lambdaArn?: string | undefined;

  /**
   * <p>Stores the original, raw documents or the structured, parsed documents before and
   *             after altering them. For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/cde-lambda-operations.html#cde-lambda-operations-data-contracts">Data contracts for Lambda functions</a>.</p>
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a role with permission to run
   *                 <code>PreExtractionHookConfiguration</code> and
   *                 <code>PostExtractionHookConfiguration</code> for altering document metadata and
   *             content during the document ingestion process.</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * <p>Provides the configuration information for altering document metadata and content
 *             during the document ingestion process.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html">Custom document
 *                 enrichment</a>.</p>
 * @public
 */
export interface DocumentEnrichmentConfiguration {
  /**
   * <p>Configuration information to alter document attributes or metadata fields and content
   *             when ingesting documents into Amazon Q Business.</p>
   * @public
   */
  inlineConfigurations?: InlineDocumentEnrichmentConfiguration[] | undefined;

  /**
   * <p>Provides the configuration information for invoking a Lambda function in
   *                 Lambda to alter document metadata and content when ingesting
   *             documents into Amazon Q Business.</p>
   *          <p>You can configure your Lambda function using the
   *                 <code>PreExtractionHookConfiguration</code> parameter if you want to apply advanced
   *             alterations on the original or raw documents.</p>
   *          <p>If you want to apply advanced alterations on the Amazon Q Business structured documents,
   *             you must configure your Lambda function using
   *                 <code>PostExtractionHookConfiguration</code>.</p>
   *          <p>You can only invoke one Lambda function. However, this function can invoke
   *             other functions it requires.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html">Custom document enrichment</a>. </p>
   * @public
   */
  preExtractionHookConfiguration?: HookConfiguration | undefined;

  /**
   * <p>Provides the configuration information for invoking a Lambda function in
   *                 Lambda to alter document metadata and content when ingesting
   *             documents into Amazon Q Business.</p>
   *          <p>You can configure your Lambda function using the
   *                 <code>PreExtractionHookConfiguration</code> parameter if you want to apply advanced
   *             alterations on the original or raw documents.</p>
   *          <p>If you want to apply advanced alterations on the Amazon Q Business structured documents,
   *             you must configure your Lambda function using
   *                 <code>PostExtractionHookConfiguration</code>.</p>
   *          <p>You can only invoke one Lambda function. However, this function can invoke
   *             other functions it requires.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html">Custom document enrichment</a>. </p>
   * @public
   */
  postExtractionHookConfiguration?: HookConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageExtractionStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ImageExtractionStatus = (typeof ImageExtractionStatus)[keyof typeof ImageExtractionStatus];

/**
 * <p>The configuration for extracting semantic meaning from images in documents. For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/extracting-meaning-from-images.html">Extracting semantic meaning from images and visuals</a>.</p>
 * @public
 */
export interface ImageExtractionConfiguration {
  /**
   * <p>Specify whether to extract semantic meaning from images and visuals from documents.</p>
   * @public
   */
  imageExtractionStatus: ImageExtractionStatus | undefined;
}

/**
 * <p>The configuration for extracting information from media in documents.</p>
 * @public
 */
export interface MediaExtractionConfiguration {
  /**
   * <p>The configuration for extracting semantic meaning from images in documents.
   *             For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/extracting-meaning-from-images.html">Extracting semantic meaning from images and visuals</a>. </p>
   * @public
   */
  imageExtractionConfiguration?: ImageExtractionConfiguration | undefined;
}

/**
 * <p>Provides configuration information needed to connect to an Amazon VPC (Virtual
 *             Private Cloud).</p>
 * @public
 */
export interface DataSourceVpcConfiguration {
  /**
   * <p>A list of identifiers for subnets within your Amazon VPC. The subnets should
   *             be able to connect to each other in the VPC, and they should have outgoing access to the
   *             Internet through a NAT device.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>A list of identifiers of security groups within your Amazon VPC. The security
   *             groups should enable Amazon Q Business to connect to the data source.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceRequest {
  /**
   * <p> The identifier of the Amazon Q Business application the data source will be attached
   *             to.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index that you want to use with the data source
   *             connector.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>A name for the data source connector.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>Configuration information to connect your data source repository to Amazon Q Business. Use this parameter to provide a JSON schema with configuration
   *             information specific to your data source connector.</p>
   *          <p>Each data source has a JSON schema provided by Amazon Q Business that you must
   *             use. For example, the Amazon S3 and Web Crawler connectors require the following
   *             JSON schemas:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/s3-api.html">Amazon S3 JSON schema</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/web-crawler-api.html">Web Crawler JSON schema</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You can find configuration templates for your specific data source using the following
   *             steps:</p>
   *          <ol>
   *             <li>
   *                <p>Navigate to the <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/connectors-list.html">Supported
   *                         connectors</a> page in the Amazon Q Business User Guide, and
   *                     select the data source of your choice.</p>
   *             </li>
   *             <li>
   *                <p>Then, from your specific data source connector page, select <b>Using the API</b>. You will find the JSON schema for your
   *                     data source, including parameter descriptions, in this section.</p>
   *             </li>
   *          </ol>
   * @public
   */
  configuration: __DocumentType | undefined;

  /**
   * <p>Configuration information for an Amazon VPC (Virtual Private Cloud) to connect
   *             to your data source. For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/connector-vpc.html">Using
   *                     Amazon VPC with Amazon Q Business connectors</a>.</p>
   * @public
   */
  vpcConfiguration?: DataSourceVpcConfiguration | undefined;

  /**
   * <p>A description for the data source connector.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of key-value pairs that identify or categorize the data source connector. You
   *             can also use tags to help control access to the data source connector. Tag keys and
   *             values can consist of Unicode letters, digits, white space, and any of the following
   *             symbols: _ . : / = + - @.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Sets the frequency for Amazon Q Business to check the documents in your data source
   *             repository and update your index. If you don't set a schedule, Amazon Q Business won't
   *             periodically update the index.</p>
   *          <p>Specify a <code>cron-</code> format schedule string or an empty string to indicate
   *             that the index is updated on demand. You can't specify the <code>Schedule</code>
   *             parameter when the <code>Type</code> parameter is set to <code>CUSTOM</code>. If you do,
   *             you receive a <code>ValidationException</code> exception. </p>
   * @public
   */
  syncSchedule?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to access
   *             the data source and required resources.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>A token you provide to identify a request to create a data source connector. Multiple
   *             calls to the <code>CreateDataSource</code> API with the same client token will create
   *             only one data source connector. </p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Provides the configuration information for altering document metadata and content
   *             during the document ingestion process.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html">Custom document
   *                 enrichment</a>.</p>
   * @public
   */
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration | undefined;

  /**
   * <p>The configuration for extracting information from media in documents during ingestion.</p>
   * @public
   */
  mediaExtractionConfiguration?: MediaExtractionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceResponse {
  /**
   * <p>The identifier of the data source connector.</p>
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of a data source in an Amazon Q Business application.
   *         </p>
   * @public
   */
  dataSourceArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceRequest {
  /**
   * <p>The identifier of the Amazon Q Business application used with the data source
   *             connector.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index used with the data source connector.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>The identifier of the data source connector that you want to delete. </p>
   * @public
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
   * <p>The identifier of the Amazon Q Business application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identfier of the index used with the data source connector.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>The identifier of the data source connector.</p>
   * @public
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
   * <p>The identifier of the Amazon Q Business application.</p>
   * @public
   */
  applicationId?: string | undefined;

  /**
   * <p>The identifier of the index linked to the data source connector.</p>
   * @public
   */
  indexId?: string | undefined;

  /**
   * <p>The identifier of the data source connector.</p>
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   * @public
   */
  dataSourceArn?: string | undefined;

  /**
   * <p>The name for the data source connector.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The type of the data source connector. For example, <code>S3</code>.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The details of how the data source connector is configured.</p>
   * @public
   */
  configuration?: __DocumentType | undefined;

  /**
   * <p>Configuration information for an Amazon VPC (Virtual Private Cloud) to connect
   *             to your data source.</p>
   * @public
   */
  vpcConfiguration?: DataSourceVpcConfiguration | undefined;

  /**
   * <p>The Unix timestamp when the data source connector was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Unix timestamp when the data source connector was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The description for the data source connector.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The current status of the data source connector. When the <code>Status</code> field
   *             value is <code>FAILED</code>, the <code>ErrorMessage</code> field contains a description
   *             of the error that caused the data source connector to fail.</p>
   * @public
   */
  status?: DataSourceStatus | undefined;

  /**
   * <p>The schedule for Amazon Q Business to update the index.</p>
   * @public
   */
  syncSchedule?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role with permission to access the data source
   *             and required resources.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>When the <code>Status</code> field value is <code>FAILED</code>, the
   *                 <code>ErrorMessage</code> field contains a description of the error that caused the
   *             data source connector to fail.</p>
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * <p>Provides the configuration information for altering document metadata and content
   *             during the document ingestion process.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html">Custom document
   *                 enrichment</a>.</p>
   * @public
   */
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration | undefined;

  /**
   * <p>The configuration for extracting information from media in documents for the data source.
   *         </p>
   * @public
   */
  mediaExtractionConfiguration?: MediaExtractionConfiguration | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesRequest {
  /**
   * <p>The identifier of the Amazon Q Business application linked to the data source
   *             connectors.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index used with one or more data source connectors.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q Business returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of Amazon Q Business data source
   *             connectors.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of data source connectors to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A data source in an Amazon Q Business application.</p>
 * @public
 */
export interface DataSource {
  /**
   * <p>The name of the Amazon Q Business data source.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business data source.</p>
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * <p>The type of the Amazon Q Business data source.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The Unix timestamp when the Amazon Q Business data source was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Unix timestamp when the Amazon Q Business data source was last updated. </p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The status of the Amazon Q Business data source.</p>
   * @public
   */
  status?: DataSourceStatus | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * <p>An array of summary information for one or more data source connector.</p>
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Q Business returns this token. You can use this token
   *             in a subsequent request to retrieve the next set of data source connectors.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceRequest {
  /**
   * <p> The identifier of the Amazon Q Business application the data source is attached
   *             to.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index attached to the data source connector.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>The identifier of the data source connector.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>A name of the data source connector.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>Provides the configuration information for an Amazon Q Business data source.</p>
   * @public
   */
  configuration?: __DocumentType | undefined;

  /**
   * <p>Provides configuration information needed to connect to an Amazon VPC (Virtual
   *             Private Cloud).</p>
   * @public
   */
  vpcConfiguration?: DataSourceVpcConfiguration | undefined;

  /**
   * <p>The description of the data source connector.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The chosen update frequency for your data source.</p>
   * @public
   */
  syncSchedule?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to access
   *             the data source and required resources.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>Provides the configuration information for altering document metadata and content
   *             during the document ingestion process.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html">Custom document
   *                 enrichment</a>.</p>
   * @public
   */
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration | undefined;

  /**
   * <p>The configuration for extracting information from media in documents for your data source.</p>
   * @public
   */
  mediaExtractionConfiguration?: MediaExtractionConfiguration | undefined;
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
   * <p>The identifier of the Amazon Q Business application the Amazon Q Business index is linked
   *             to.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business index.</p>
   * @public
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
   * <p>The identifier of the Amazon Q Business application connected to the index.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business index you want information on.</p>
   * @public
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
 * <p>Configuration information for document attributes. Document attributes are metadata or
 *             fields associated with your documents. For example, the company department name
 *             associated with each document.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/doc-attributes.html">Understanding document attributes</a>.</p>
 * @public
 */
export interface DocumentAttributeConfiguration {
  /**
   * <p>The name of the document attribute.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of document attribute.</p>
   * @public
   */
  type?: AttributeType | undefined;

  /**
   * <p>Information about whether the document attribute can be used by an end user to search
   *             for information on their web experience.</p>
   * @public
   */
  search?: Status | undefined;
}

/**
 * <p>Provides information about text documents in an index.</p>
 * @public
 */
export interface TextDocumentStatistics {
  /**
   * <p>The total size, in bytes, of the indexed documents.</p>
   * @public
   */
  indexedTextBytes?: number | undefined;

  /**
   * <p>The number of text documents indexed.</p>
   * @public
   */
  indexedTextDocumentCount?: number | undefined;
}

/**
 * <p>Provides information about the number of documents in an index.</p>
 * @public
 */
export interface IndexStatistics {
  /**
   * <p>The number of documents indexed.</p>
   * @public
   */
  textDocumentStatistics?: TextDocumentStatistics | undefined;
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
   * <p>The identifier of the Amazon Q Business application associated with the index.</p>
   * @public
   */
  applicationId?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business index.</p>
   * @public
   */
  indexId?: string | undefined;

  /**
   * <p>The name of the Amazon Q Business index.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the Amazon Q Business index. </p>
   * @public
   */
  indexArn?: string | undefined;

  /**
   * <p>The current status of the index. When the value is <code>ACTIVE</code>, the index is
   *             ready for use. If the <code>Status</code> field value is <code>FAILED</code>, the
   *                 <code>ErrorMessage</code> field contains a message that explains why.</p>
   * @public
   */
  status?: IndexStatus | undefined;

  /**
   * <p>The type of index attached to your Amazon Q Business application.</p>
   * @public
   */
  type?: IndexType | undefined;

  /**
   * <p>The description for the Amazon Q Business index.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Unix timestamp when the Amazon Q Business index was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Unix timestamp when the Amazon Q Business index was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The storage capacity units chosen for your Amazon Q Business index.</p>
   * @public
   */
  capacityConfiguration?: IndexCapacityConfiguration | undefined;

  /**
   * <p>Configuration information for document attributes or metadata. Document metadata are
   *             fields associated with your documents. For example, the company department name
   *             associated with each document. For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/doc-attributes-types.html#doc-attributes">Understanding document attributes</a>.</p>
   * @public
   */
  documentAttributeConfigurations?: DocumentAttributeConfiguration[] | undefined;

  /**
   * <p>When the <code>Status</code> field value is <code>FAILED</code>, the
   *                 <code>ErrorMessage</code> field contains a message that explains why.</p>
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * <p>Provides information about the number of documents indexed.</p>
   * @public
   */
  indexStatistics?: IndexStatistics | undefined;
}

/**
 * @public
 */
export interface ListIndicesRequest {
  /**
   * <p>The identifier of the Amazon Q Business application connected to the index.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>If the maxResults response was incomplete because there is more data to retrieve,
   *             Amazon Q Business returns a pagination token in the response. You can use this pagination
   *             token to retrieve the next set of Amazon Q Business indices.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of indices to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary information for your Amazon Q Business index.</p>
 * @public
 */
export interface Index {
  /**
   * <p>The name of the index.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The identifier for the index.</p>
   * @public
   */
  indexId?: string | undefined;

  /**
   * <p>The Unix timestamp when the index was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Unix timestamp when the index was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The current status of the index. When the status is <code>ACTIVE</code>, the index is
   *             ready.</p>
   * @public
   */
  status?: IndexStatus | undefined;
}

/**
 * @public
 */
export interface ListIndicesResponse {
  /**
   * <p>If the response is truncated, Amazon Q Business returns this token that you can use in the
   *             subsequent request to retrieve the next set of indexes.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of information on the items in one or more indexes.</p>
   * @public
   */
  indices?: Index[] | undefined;
}

/**
 * @public
 */
export interface UpdateIndexRequest {
  /**
   * <p>The identifier of the Amazon Q Business application connected to the index.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business index.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>The name of the Amazon Q Business index.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the Amazon Q Business index.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The storage capacity units you want to provision for your Amazon Q Business index. You can
   *             add and remove capacity to fit your usage needs.</p>
   * @public
   */
  capacityConfiguration?: IndexCapacityConfiguration | undefined;

  /**
   * <p>Configuration information for document metadata or fields. Document metadata are
   *             fields or attributes associated with your documents. For example, the company department
   *             name associated with each document. For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/doc-attributes-types.html#doc-attributes">Understanding document attributes</a>.</p>
   * @public
   */
  documentAttributeConfigurations?: DocumentAttributeConfiguration[] | undefined;
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
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q Business returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of Amazon Q Business applications.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of Amazon Q Business applications to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>If the response is truncated, Amazon Q Business returns this token. You can use this token
   *             in a subsequent request to retrieve the next set of applications.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of summary information on the configuration of one or more Amazon Q Business
   *             applications.</p>
   * @public
   */
  applications?: Application[] | undefined;
}

/**
 * <p>Information about the basic authentication credentials used to configure a
 *             plugin.</p>
 * @public
 */
export interface BasicAuthConfiguration {
  /**
   * <p>The ARN of the Secrets Manager secret that stores the basic authentication
   *             credentials used for plugin configuration..</p>
   * @public
   */
  secretArn: string | undefined;

  /**
   * <p>The ARN of an IAM role used by Amazon Q Business to access the basic
   *             authentication credentials stored in a Secrets Manager secret.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * <p>Information about invoking a custom plugin without any authentication or authorization
 *             requirement.</p>
 * @public
 */
export interface NoAuthConfiguration {}

/**
 * <p>Information about the OAuth 2.0 authentication credential/token used to configure a
 *             plugin.</p>
 * @public
 */
export interface OAuth2ClientCredentialConfiguration {
  /**
   * <p>The ARN of the Secrets Manager secret that stores the OAuth 2.0 credentials/token
   *             used for plugin configuration.</p>
   * @public
   */
  secretArn: string | undefined;

  /**
   * <p>The ARN of an IAM role used by Amazon Q Business to access the OAuth 2.0
   *             authentication credentials stored in a Secrets Manager secret.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * <p>Authentication configuration information for an Amazon Q Business plugin.</p>
 * @public
 */
export type PluginAuthConfiguration =
  | PluginAuthConfiguration.BasicAuthConfigurationMember
  | PluginAuthConfiguration.NoAuthConfigurationMember
  | PluginAuthConfiguration.OAuth2ClientCredentialConfigurationMember
  | PluginAuthConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace PluginAuthConfiguration {
  /**
   * <p>Information about the basic authentication credentials used to configure a
   *             plugin.</p>
   * @public
   */
  export interface BasicAuthConfigurationMember {
    basicAuthConfiguration: BasicAuthConfiguration;
    oAuth2ClientCredentialConfiguration?: never;
    noAuthConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about the OAuth 2.0 authentication credential/token used to configure a
   *             plugin.</p>
   * @public
   */
  export interface OAuth2ClientCredentialConfigurationMember {
    basicAuthConfiguration?: never;
    oAuth2ClientCredentialConfiguration: OAuth2ClientCredentialConfiguration;
    noAuthConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about invoking a custom plugin without any authentication.</p>
   * @public
   */
  export interface NoAuthConfigurationMember {
    basicAuthConfiguration?: never;
    oAuth2ClientCredentialConfiguration?: never;
    noAuthConfiguration: NoAuthConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    basicAuthConfiguration?: never;
    oAuth2ClientCredentialConfiguration?: never;
    noAuthConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    basicAuthConfiguration: (value: BasicAuthConfiguration) => T;
    oAuth2ClientCredentialConfiguration: (value: OAuth2ClientCredentialConfiguration) => T;
    noAuthConfiguration: (value: NoAuthConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PluginAuthConfiguration, visitor: Visitor<T>): T => {
    if (value.basicAuthConfiguration !== undefined) return visitor.basicAuthConfiguration(value.basicAuthConfiguration);
    if (value.oAuth2ClientCredentialConfiguration !== undefined)
      return visitor.oAuth2ClientCredentialConfiguration(value.oAuth2ClientCredentialConfiguration);
    if (value.noAuthConfiguration !== undefined) return visitor.noAuthConfiguration(value.noAuthConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p> Configuration information required to create a custom plugin.</p>
 * @public
 */
export interface CustomPluginConfiguration {
  /**
   * <p>A description for your custom plugin configuration.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The type of OpenAPI schema to use.</p>
   * @public
   */
  apiSchemaType: APISchemaType | undefined;

  /**
   * <p>Contains either details about the S3 object containing the OpenAPI schema for the
   *             action group or the JSON or YAML-formatted payload defining the schema.</p>
   * @public
   */
  apiSchema: APISchema | undefined;
}

/**
 * @public
 */
export interface CreatePluginRequest {
  /**
   * <p>The identifier of the application that will contain the plugin.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>A the name for your plugin.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The type of plugin you want to create.</p>
   * @public
   */
  type: PluginType | undefined;

  /**
   * <p>Authentication configuration information for an Amazon Q Business plugin.</p>
   * @public
   */
  authConfiguration: PluginAuthConfiguration | undefined;

  /**
   * <p>The source URL used for plugin configuration.</p>
   * @public
   */
  serverUrl?: string | undefined;

  /**
   * <p>Contains configuration for a custom plugin.</p>
   * @public
   */
  customPluginConfiguration?: CustomPluginConfiguration | undefined;

  /**
   * <p>A list of key-value pairs that identify or categorize the data source connector. You
   *             can also use tags to help control access to the data source connector. Tag keys and
   *             values can consist of Unicode letters, digits, white space, and any of the following
   *             symbols: _ . : / = + - @.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>A token that you provide to identify the request to create your Amazon Q Business
   *             plugin.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PluginBuildStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  READY: "READY",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type PluginBuildStatus = (typeof PluginBuildStatus)[keyof typeof PluginBuildStatus];

/**
 * @public
 */
export interface CreatePluginResponse {
  /**
   * <p>The identifier of the plugin created.</p>
   * @public
   */
  pluginId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a plugin.</p>
   * @public
   */
  pluginArn?: string | undefined;

  /**
   * <p>The current status of a plugin. A plugin is modified asynchronously.</p>
   * @public
   */
  buildStatus?: PluginBuildStatus | undefined;
}

/**
 * @public
 */
export interface DeletePluginRequest {
  /**
   * <p>The identifier the application attached to the Amazon Q Business plugin.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the plugin being deleted.</p>
   * @public
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
   * <p>The identifier of the application which contains the plugin.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the plugin.</p>
   * @public
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
   * <p>The identifier of the application which contains the plugin.</p>
   * @public
   */
  applicationId?: string | undefined;

  /**
   * <p>The identifier of the plugin.</p>
   * @public
   */
  pluginId?: string | undefined;

  /**
   * <p>The name of the plugin.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The type of the plugin.</p>
   * @public
   */
  type?: PluginType | undefined;

  /**
   * <p>The source URL used for plugin configuration.</p>
   * @public
   */
  serverUrl?: string | undefined;

  /**
   * <p>Authentication configuration information for an Amazon Q Business plugin.</p>
   * @public
   */
  authConfiguration?: PluginAuthConfiguration | undefined;

  /**
   * <p>Configuration information required to create a custom plugin.</p>
   * @public
   */
  customPluginConfiguration?: CustomPluginConfiguration | undefined;

  /**
   * <p>The current status of a plugin. A plugin is modified asynchronously.</p>
   * @public
   */
  buildStatus?: PluginBuildStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role with permission to access resources needed
   *             to create the plugin.</p>
   * @public
   */
  pluginArn?: string | undefined;

  /**
   * <p>The current state of the plugin.</p>
   * @public
   */
  state?: PluginState | undefined;

  /**
   * <p>The timestamp for when the plugin was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp for when the plugin was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListPluginsRequest {
  /**
   * <p>The identifier of the application the plugin is attached to.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q Business returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of plugins.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of documents to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Information about an Amazon Q Business plugin and its configuration.</p>
 * @public
 */
export interface Plugin {
  /**
   * <p>The identifier of the plugin.</p>
   * @public
   */
  pluginId?: string | undefined;

  /**
   * <p>The name of the plugin.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The type of the plugin.</p>
   * @public
   */
  type?: PluginType | undefined;

  /**
   * <p>The plugin server URL used for configuration.</p>
   * @public
   */
  serverUrl?: string | undefined;

  /**
   * <p>The current status of the plugin.</p>
   * @public
   */
  state?: PluginState | undefined;

  /**
   * <p>The status of the plugin.</p>
   * @public
   */
  buildStatus?: PluginBuildStatus | undefined;

  /**
   * <p>The timestamp for when the plugin was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp for when the plugin was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListPluginsResponse {
  /**
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q Business returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of plugins.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Information about a configured plugin.</p>
   * @public
   */
  plugins?: Plugin[] | undefined;
}

/**
 * @public
 */
export interface UpdatePluginRequest {
  /**
   * <p>The identifier of the application the plugin is attached to.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the plugin.</p>
   * @public
   */
  pluginId: string | undefined;

  /**
   * <p>The name of the plugin.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The status of the plugin. </p>
   * @public
   */
  state?: PluginState | undefined;

  /**
   * <p>The source URL used for plugin configuration.</p>
   * @public
   */
  serverUrl?: string | undefined;

  /**
   * <p>The configuration for a custom plugin.</p>
   * @public
   */
  customPluginConfiguration?: CustomPluginConfiguration | undefined;

  /**
   * <p>The authentication configuration the plugin is using.</p>
   * @public
   */
  authConfiguration?: PluginAuthConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdatePluginResponse {}

/**
 * <p>Stores an Amazon Kendra index as a retriever.</p>
 * @public
 */
export interface KendraIndexConfiguration {
  /**
   * <p>The identifier of the Amazon Kendra index.</p>
   * @public
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
 * <p>Provides information on boosting <code>DATE</code> type document attributes.</p>
 *          <p>For more information on how boosting document attributes work in Amazon Q Business, see
 *                 <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/metadata-boosting.html">Boosting using document attributes</a>.</p>
 * @public
 */
export interface DateAttributeBoostingConfiguration {
  /**
   * <p>Specifies how much a document attribute is boosted.</p>
   * @public
   */
  boostingLevel: DocumentAttributeBoostingLevel | undefined;

  /**
   * <p>Specifies the duration, in seconds, of a boost applies to a <code>DATE</code> type
   *             document attribute.</p>
   * @public
   */
  boostingDurationInSeconds?: number | undefined;
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
 * <p>Provides information on boosting <code>NUMBER</code> type document attributes.</p>
 *          <p>For more information on how boosting document attributes work in Amazon Q Business, see
 *                 <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/metadata-boosting.html">Boosting using document attributes</a>.</p>
 * @public
 */
export interface NumberAttributeBoostingConfiguration {
  /**
   * <p>Specifies the duration, in seconds, of a boost applies to a <code>NUMBER</code> type
   *             document attribute.</p>
   * @public
   */
  boostingLevel: DocumentAttributeBoostingLevel | undefined;

  /**
   * <p>Specifies how much a document attribute is boosted.</p>
   * @public
   */
  boostingType?: NumberAttributeBoostingType | undefined;
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
 * <p>Provides information on boosting <code>STRING</code> type document attributes.</p>
 *          <note>
 *             <p>For <code>STRING</code> and <code>STRING_LIST</code> type document attributes to
 *                 be used for boosting on the console and the API, they must be enabled for search
 *                 using the <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeConfiguration.html">DocumentAttributeConfiguration</a> object of the <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateIndex.html">UpdateIndex</a> API. If you haven't enabled searching on these attributes,
 *                 you can't boost attributes of these data types on either the console or the
 *                 API.</p>
 *          </note>
 *          <p>For more information on how boosting document attributes work in Amazon Q Business, see
 *                 <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/metadata-boosting.html">Boosting using document attributes</a>.</p>
 * @public
 */
export interface StringAttributeBoostingConfiguration {
  /**
   * <p>Specifies how much a document attribute is boosted.</p>
   * @public
   */
  boostingLevel: DocumentAttributeBoostingLevel | undefined;

  /**
   * <p>Specifies specific values of a <code>STRING</code> type document attribute being
   *             boosted.</p>
   * @public
   */
  attributeValueBoosting?: Record<string, StringAttributeValueBoostingLevel> | undefined;
}

/**
 * <p>Provides information on boosting <code>STRING_LIST</code> type document
 *             attributes.</p>
 *          <note>
 *             <p>For <code>STRING</code> and <code>STRING_LIST</code> type document attributes to
 *                 be used for boosting on the console and the API, they must be enabled for search
 *                 using the <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeConfiguration.html">DocumentAttributeConfiguration</a> object of the <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateIndex.html">UpdateIndex</a> API. If you haven't enabled searching on these attributes,
 *                 you can't boost attributes of these data types on either the console or the
 *                 API.</p>
 *          </note>
 *          <p>For more information on how boosting document attributes work in Amazon Q Business, see
 *                 <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/metadata-boosting.html">Boosting using document attributes</a>.</p>
 * @public
 */
export interface StringListAttributeBoostingConfiguration {
  /**
   * <p>Specifies how much a document attribute is boosted.</p>
   * @public
   */
  boostingLevel: DocumentAttributeBoostingLevel | undefined;
}

/**
 * <p>Provides information on boosting supported Amazon Q Business document attribute types.
 *             When an end user chat query matches document attributes that have been boosted,
 *             Amazon Q Business prioritizes generating responses from content that matches the boosted
 *             document attributes.</p>
 *          <note>
 *             <p>For <code>STRING</code> and <code>STRING_LIST</code> type document attributes to
 *                 be used for boosting on the console and the API, they must be enabled for search
 *                 using the <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeConfiguration.html">DocumentAttributeConfiguration</a> object of the <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateIndex.html">UpdateIndex</a> API. If you haven't enabled searching on these attributes,
 *                 you can't boost attributes of these data types on either the console or the
 *                 API.</p>
 *          </note>
 *          <p>For more information on how boosting document attributes work in Amazon Q Business, see
 *                 <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/metadata-boosting.html">Boosting using document attributes</a>.</p>
 * @public
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
   * <p>Provides information on boosting <code>NUMBER</code> type document attributes.</p>
   * @public
   */
  export interface NumberConfigurationMember {
    numberConfiguration: NumberAttributeBoostingConfiguration;
    stringConfiguration?: never;
    dateConfiguration?: never;
    stringListConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides information on boosting <code>STRING</code> type document attributes.</p>
   * @public
   */
  export interface StringConfigurationMember {
    numberConfiguration?: never;
    stringConfiguration: StringAttributeBoostingConfiguration;
    dateConfiguration?: never;
    stringListConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides information on boosting <code>DATE</code> type document attributes.</p>
   * @public
   */
  export interface DateConfigurationMember {
    numberConfiguration?: never;
    stringConfiguration?: never;
    dateConfiguration: DateAttributeBoostingConfiguration;
    stringListConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides information on boosting <code>STRING_LIST</code> type document
   *             attributes.</p>
   * @public
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
 * <p>Configuration information for an Amazon Q Business index.</p>
 * @public
 */
export interface NativeIndexConfiguration {
  /**
   * <p>The identifier for the Amazon Q Business index.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>Overrides the default boosts applied by Amazon Q Business to supported document attribute
   *             data types.</p>
   * @public
   */
  boostingOverride?: Record<string, DocumentAttributeBoostingConfiguration> | undefined;
}

/**
 * <p>Provides information on how the retriever used for your Amazon Q Business application is
 *             configured.</p>
 * @public
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
   * <p>Provides information on how a Amazon Q Business index used as a retriever for your
   *             Amazon Q Business application is configured.</p>
   * @public
   */
  export interface NativeIndexConfigurationMember {
    nativeIndexConfiguration: NativeIndexConfiguration;
    kendraIndexConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides information on how the Amazon Kendra index used as a retriever for your
   *             Amazon Q Business application is configured.</p>
   * @public
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
   * <p>The identifier of your Amazon Q Business application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The type of retriever you are using.</p>
   * @public
   */
  type: RetrieverType | undefined;

  /**
   * <p>The name of your retriever.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>Provides information on how the retriever used for your Amazon Q Business application is
   *             configured.</p>
   * @public
   */
  configuration: RetrieverConfiguration | undefined;

  /**
   * <p>The ARN of an IAM role used by Amazon Q Business to access the basic
   *             authentication credentials stored in a Secrets Manager secret.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>A token that you provide to identify the request to create your Amazon Q Business
   *             application retriever.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A list of key-value pairs that identify or categorize the retriever. You can also use
   *             tags to help control access to the retriever. Tag keys and values can consist of Unicode
   *             letters, digits, white space, and any of the following symbols: _ . : / = + - @.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRetrieverResponse {
  /**
   * <p>The identifier of the retriever you are using.</p>
   * @public
   */
  retrieverId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role associated with a retriever.</p>
   * @public
   */
  retrieverArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRetrieverRequest {
  /**
   * <p>The identifier of the Amazon Q Business application using the retriever.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the retriever being deleted.</p>
   * @public
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
   * <p>The identifier of the Amazon Q Business application using the retriever.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the retriever.</p>
   * @public
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
   * <p>The identifier of the Amazon Q Business application using the retriever. </p>
   * @public
   */
  applicationId?: string | undefined;

  /**
   * <p>The identifier of the retriever.</p>
   * @public
   */
  retrieverId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the retriever.</p>
   * @public
   */
  retrieverArn?: string | undefined;

  /**
   * <p>The type of the retriever.</p>
   * @public
   */
  type?: RetrieverType | undefined;

  /**
   * <p>The status of the retriever.</p>
   * @public
   */
  status?: RetrieverStatus | undefined;

  /**
   * <p>The name of the retriever.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>Provides information on how the retriever used for your Amazon Q Business application is
   *             configured.</p>
   * @public
   */
  configuration?: RetrieverConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role with the permission to access the retriever
   *             and required resources.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The Unix timestamp when the retriever was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Unix timestamp when the retriever was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListRetrieversRequest {
  /**
   * <p>The identifier of the Amazon Q Business application using the retriever.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>If the number of retrievers returned exceeds <code>maxResults</code>, Amazon Q Business
   *             returns a next token as a pagination token to retrieve the next set of
   *             retrievers.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of retrievers returned.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary information for the retriever used for your Amazon Q Business application.</p>
 * @public
 */
export interface Retriever {
  /**
   * <p>The identifier of the Amazon Q Business application using the retriever.</p>
   * @public
   */
  applicationId?: string | undefined;

  /**
   * <p>The identifier of the retriever used by your Amazon Q Business application.</p>
   * @public
   */
  retrieverId?: string | undefined;

  /**
   * <p>The type of your retriever.</p>
   * @public
   */
  type?: RetrieverType | undefined;

  /**
   * <p>The status of your retriever.</p>
   * @public
   */
  status?: RetrieverStatus | undefined;

  /**
   * <p>The name of your retriever.</p>
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface ListRetrieversResponse {
  /**
   * <p>An array of summary information for one or more retrievers.</p>
   * @public
   */
  retrievers?: Retriever[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Q Business returns this token, which you can use in a
   *             later request to list the next set of retrievers.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRetrieverRequest {
  /**
   * <p>The identifier of your Amazon Q Business application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of your retriever.</p>
   * @public
   */
  retrieverId: string | undefined;

  /**
   * <p>Provides information on how the retriever used for your Amazon Q Business application is
   *             configured.</p>
   * @public
   */
  configuration?: RetrieverConfiguration | undefined;

  /**
   * <p>The name of your retriever.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to access the retriever
   *             and required resources. </p>
   * @public
   */
  roleArn?: string | undefined;
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
   * <p>The identifier of the Amazon Q Business application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM Identity Center instance you are either
   *             creating for—or connecting to—your Amazon Q Business application.</p>
   * @public
   */
  identityCenterInstanceArn?: string | undefined;

  /**
   * <p>A name for the Amazon Q Business application.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description for the Amazon Q Business application.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An Amazon Web Services Identity and Access Management (IAM) role that
   *             gives Amazon Q Business permission to access Amazon CloudWatch logs and
   *             metrics.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>An option to allow end users to upload files directly during chat.</p>
   * @public
   */
  attachmentsConfiguration?: AttachmentsConfiguration | undefined;

  /**
   * <p>An option to allow end users to create and use Amazon Q Apps in the web
   *             experience.</p>
   * @public
   */
  qAppsConfiguration?: QAppsConfiguration | undefined;

  /**
   * <p>Configuration information about chat response personalization. For more information,
   *             see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/personalizing-chat-responses.html">Personalizing chat responses</a>.</p>
   * @public
   */
  personalizationConfiguration?: PersonalizationConfiguration | undefined;

  /**
   * <p>An option to enable updating the default subscription type assigned to an Amazon Q Business application using IAM identity federation for user
   *             management.</p>
   * @public
   */
  autoSubscriptionConfiguration?: AutoSubscriptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {}

/**
 * @public
 * @enum
 */
export const BrowserExtension = {
  CHROME: "CHROME",
  FIREFOX: "FIREFOX",
} as const;

/**
 * @public
 */
export type BrowserExtension = (typeof BrowserExtension)[keyof typeof BrowserExtension];

/**
 * <p>The container for browser extension configuration for an Amazon Q Business web experience.</p>
 * @public
 */
export interface BrowserExtensionConfiguration {
  /**
   * <p>Specify the browser extensions allowed for your Amazon Q web experience.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CHROME</code> — Enables the extension for Chromium-based browsers (Google Chrome, Microsoft
   *                     Edge, Opera, etc.).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FIREFOX</code> — Enables the extension for Mozilla Firefox.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CHROME</code> and <code>FIREFOX</code> — Enable the extension for Chromium-based browsers
   *                     and Mozilla Firefox.</p>
   *             </li>
   *          </ul>
   * @public
   */
  enabledBrowserExtensions: BrowserExtension[] | undefined;
}

/**
 * <p>Information about the OIDC-compliant identity provider (IdP) used to authenticate end
 *             users of an Amazon Q Business web experience.</p>
 * @public
 */
export interface OpenIDConnectProviderConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of a Secrets Manager secret containing the OIDC
   *             client secret.</p>
   * @public
   */
  secretsArn: string | undefined;

  /**
   * <p>An IAM role with permissions to access KMS to decrypt
   *             the Secrets Manager secret containing your OIDC client secret.</p>
   * @public
   */
  secretsRole: string | undefined;
}

/**
 * <p>Information about the SAML 2.0-compliant identity provider (IdP) used to authenticate
 *             end users of an Amazon Q Business web experience.</p>
 * @public
 */
export interface SamlProviderConfiguration {
  /**
   * <p>The URL where Amazon Q Business end users will be redirected for authentication.
   *         </p>
   * @public
   */
  authenticationUrl: string | undefined;
}

/**
 * <p>Provides information about the identity provider (IdP) used to authenticate end users
 *             of an Amazon Q Business web experience.</p>
 * @public
 */
export type IdentityProviderConfiguration =
  | IdentityProviderConfiguration.OpenIDConnectConfigurationMember
  | IdentityProviderConfiguration.SamlConfigurationMember
  | IdentityProviderConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace IdentityProviderConfiguration {
  /**
   * <p>Information about the SAML 2.0-compliant identity provider (IdP) used to authenticate
   *             end users of an Amazon Q Business web experience.</p>
   * @public
   */
  export interface SamlConfigurationMember {
    samlConfiguration: SamlProviderConfiguration;
    openIDConnectConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about the OIDC-compliant identity provider (IdP) used to authenticate end
   *             users of an Amazon Q Business web experience.</p>
   * @public
   */
  export interface OpenIDConnectConfigurationMember {
    samlConfiguration?: never;
    openIDConnectConfiguration: OpenIDConnectProviderConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    samlConfiguration?: never;
    openIDConnectConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    samlConfiguration: (value: SamlProviderConfiguration) => T;
    openIDConnectConfiguration: (value: OpenIDConnectProviderConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: IdentityProviderConfiguration, visitor: Visitor<T>): T => {
    if (value.samlConfiguration !== undefined) return visitor.samlConfiguration(value.samlConfiguration);
    if (value.openIDConnectConfiguration !== undefined)
      return visitor.openIDConnectConfiguration(value.openIDConnectConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

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
   * <p>The identifier of the Amazon Q Business web experience.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The title for your Amazon Q Business web experience.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>A subtitle to personalize your Amazon Q Business web experience.</p>
   * @public
   */
  subtitle?: string | undefined;

  /**
   * <p>The customized welcome message for end users of an Amazon Q Business web
   *             experience.</p>
   * @public
   */
  welcomeMessage?: string | undefined;

  /**
   * <p>Determines whether sample prompts are enabled in the web experience for an end
   *             user.</p>
   * @public
   */
  samplePromptsControlMode?: WebExperienceSamplePromptsControlMode | undefined;

  /**
   * <p>Sets the website domain origins that
   *             are allowed to embed the Amazon Q Business web experience.
   *
   *             The <i>domain origin</i> refers to the
   *             base URL for accessing a website including the protocol
   *             (<code>http/https</code>), the domain name, and the port number (if specified).
   *         </p>
   *          <note>
   *             <p>You must only submit a <i>base URL</i> and
   *             not a full path. For example, <code>https://docs.aws.amazon.com</code>.</p>
   *          </note>
   * @public
   */
  origins?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role attached to your web
   *             experience.</p>
   *          <note>
   *             <p>You must provide this value if you're using IAM Identity Center to manage end user
   *                 access to your application. If you're using legacy identity management to manage
   *                 user access, you don't need to provide this value.</p>
   *          </note>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>A list of key-value pairs that identify or categorize your Amazon Q Business web
   *             experience. You can also use tags to help control access to the web experience. Tag keys
   *             and values can consist of Unicode letters, digits, white space, and any of the following
   *             symbols: _ . : / = + - @.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>A token you provide to identify a request to create an Amazon Q Business web experience.
   *         </p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Information about the identity provider (IdP) used to authenticate end users of an
   *                 Amazon Q Business web experience.</p>
   * @public
   */
  identityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * <p>The browser extension configuration for an Amazon Q Business web experience.</p>
   *          <note>
   *             <p>
   *                 For Amazon Q Business application using external OIDC-compliant identity providers (IdPs).
   *                 The IdP administrator must add the browser extension sign-in redirect URLs to the IdP application.
   *                 For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/browser-extensions.html">Configure external OIDC identity provider for your browser extensions.</a>.
   *             </p>
   *          </note>
   * @public
   */
  browserExtensionConfiguration?: BrowserExtensionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateWebExperienceResponse {
  /**
   * <p>The identifier of the Amazon Q Business web experience.</p>
   * @public
   */
  webExperienceId?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of an Amazon Q Business web experience.</p>
   * @public
   */
  webExperienceArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebExperienceRequest {
  /**
   * <p>The identifier of the Amazon Q Business application linked to the Amazon Q Business web
   *             experience.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business web experience being deleted.</p>
   * @public
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
   * <p>The identifier of the Amazon Q Business application linked to the web experience.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business web experience. </p>
   * @public
   */
  webExperienceId: string | undefined;
}

/**
 * <p>Provides the SAML 2.0 compliant identity provider (IdP) configuration information
 *             Amazon Q Business needs to deploy a Amazon Q Business web experience.</p>
 * @public
 */
export interface SamlConfiguration {
  /**
   * <p>The metadata XML that your IdP generated.</p>
   * @public
   */
  metadataXML: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role assumed by users when
   *             they authenticate into their Amazon Q Business web experience, containing the relevant
   *             Amazon Q Business permissions for conversing with Amazon Q Business.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The user attribute name in your IdP that maps to the user email.</p>
   * @public
   */
  userIdAttribute: string | undefined;

  /**
   * <p>The group attribute name in your IdP that maps to user groups.</p>
   * @public
   */
  userGroupAttribute?: string | undefined;
}

/**
 * <p>Provides the authorization configuration information needed to deploy a Amazon Q Business
 *             web experience to end users.</p>
 * @public
 */
export type WebExperienceAuthConfiguration =
  | WebExperienceAuthConfiguration.SamlConfigurationMember
  | WebExperienceAuthConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace WebExperienceAuthConfiguration {
  /**
   * <p>Provides the SAML 2.0 compliant identity provider (IdP) configuration information
   *             Amazon Q Business needs to deploy a Amazon Q Business web experience.</p>
   * @public
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
   * <p>The identifier of the Amazon Q Business application linked to the web experience.</p>
   * @public
   */
  applicationId?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business web experience.</p>
   * @public
   */
  webExperienceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role with the permission to access the
   *             Amazon Q Business web experience and required resources.</p>
   * @public
   */
  webExperienceArn?: string | undefined;

  /**
   * <p>The endpoint of your Amazon Q Business web experience.</p>
   * @public
   */
  defaultEndpoint?: string | undefined;

  /**
   * <p>The current status of the Amazon Q Business web experience. When the <code>Status</code>
   *             field value is <code>FAILED</code>, the <code>ErrorMessage</code> field contains a
   *             description of the error that caused the data source connector to fail. </p>
   * @public
   */
  status?: WebExperienceStatus | undefined;

  /**
   * <p>The Unix timestamp when the Amazon Q Business web experience was last created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Unix timestamp when the Amazon Q Business web experience was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The title for your Amazon Q Business web experience. </p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The subtitle for your Amazon Q Business web experience. </p>
   * @public
   */
  subtitle?: string | undefined;

  /**
   * <p>The customized welcome message for end users of an Amazon Q Business web
   *             experience.</p>
   * @public
   */
  welcomeMessage?: string | undefined;

  /**
   * <p>Determines whether sample prompts are enabled in the web experience for an end
   *             user.</p>
   * @public
   */
  samplePromptsControlMode?: WebExperienceSamplePromptsControlMode | undefined;

  /**
   * <p>Gets the website domain origins that
   *             are allowed to embed the Amazon Q Business web experience.
   *
   *             The <i>domain origin</i> refers to the
   *             base URL for accessing a website including the protocol
   *             (<code>http/https</code>), the domain name, and the port number (if specified).
   *         </p>
   * @public
   */
  origins?: string[] | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the service role attached to your web
   *             experience.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>Information about the identity provider (IdP) used to authenticate end users of an
   *                 Amazon Q Business web experience.</p>
   * @public
   */
  identityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * @deprecated
   *
   * <p>The authentication configuration information for your Amazon Q Business web
   *             experience.</p>
   * @public
   */
  authenticationConfiguration?: WebExperienceAuthConfiguration | undefined;

  /**
   * <p>When the <code>Status</code> field value is <code>FAILED</code>, the
   *                 <code>ErrorMessage</code> field contains a description of the error that caused the
   *             data source connector to fail.</p>
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * <p>The browser extension configuration for an Amazon Q Business web experience.</p>
   * @public
   */
  browserExtensionConfiguration?: BrowserExtensionConfiguration | undefined;
}

/**
 * @public
 */
export interface ListWebExperiencesRequest {
  /**
   * <p>The identifier of the Amazon Q Business application linked to the listed web
   *             experiences.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q Business returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of Amazon Q Business conversations.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of Amazon Q Business Web Experiences to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides information for an Amazon Q Business web experience.</p>
 * @public
 */
export interface WebExperience {
  /**
   * <p>The identifier of your Amazon Q Business web experience.</p>
   * @public
   */
  webExperienceId?: string | undefined;

  /**
   * <p>The Unix timestamp when the Amazon Q Business application was last updated.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Unix timestamp when your Amazon Q Business web experience was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The endpoint URLs for your Amazon Q Business web experience. The URLs are unique and fully
   *             hosted by Amazon Web Services.</p>
   * @public
   */
  defaultEndpoint?: string | undefined;

  /**
   * <p>The status of your Amazon Q Business web experience.</p>
   * @public
   */
  status?: WebExperienceStatus | undefined;
}

/**
 * @public
 */
export interface ListWebExperiencesResponse {
  /**
   * <p>An array of summary information for one or more Amazon Q Business experiences.</p>
   * @public
   */
  webExperiences?: WebExperience[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Q Business returns this token, which you can use in a
   *             later request to list the next set of messages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWebExperienceRequest {
  /**
   * <p>The identifier of the Amazon Q Business application attached to the web experience.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business web experience.</p>
   * @public
   */
  webExperienceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role with permission to access the Amazon Q Business
   *             web experience and required resources.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * @deprecated
   *
   * <p>The authentication configuration of the Amazon Q Business web experience.</p>
   * @public
   */
  authenticationConfiguration?: WebExperienceAuthConfiguration | undefined;

  /**
   * <p>The title of the Amazon Q Business web experience.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The subtitle of the Amazon Q Business web experience.</p>
   * @public
   */
  subtitle?: string | undefined;

  /**
   * <p>A customized welcome message for an end user in an Amazon Q Business web
   *             experience.</p>
   * @public
   */
  welcomeMessage?: string | undefined;

  /**
   * <p>Determines whether sample prompts are enabled in the web experience for an end
   *             user.</p>
   * @public
   */
  samplePromptsControlMode?: WebExperienceSamplePromptsControlMode | undefined;

  /**
   * <p>Information about the identity provider (IdP) used to authenticate end users of an
   *                 Amazon Q Business web experience.</p>
   * @public
   */
  identityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * <p>Updates the website domain origins that
   *             are allowed to embed the Amazon Q Business web experience.
   *
   *             The <i>domain origin</i> refers to the
   *             <i>base URL</i> for accessing a website including the protocol
   *             (<code>http/https</code>), the domain name, and the port number (if specified).</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>Any values except <code>null</code> submitted as part of this
   *                 update will replace all previous values.</p>
   *                </li>
   *                <li>
   *                   <p>You must only submit a <i>base URL</i> and
   *                     not a full path. For example, <code>https://docs.aws.amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  origins?: string[] | undefined;

  /**
   * <p>The browser extension configuration for an Amazon Q Business web experience.</p>
   *          <note>
   *             <p>
   *                 For Amazon Q Business application using external OIDC-compliant identity providers (IdPs).
   *                 The IdP administrator must add the browser extension sign-in redirect URLs to the IdP application.
   *                 For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/browser-extensions.html">Configure external OIDC identity provider for your browser extensions.</a>.
   *             </p>
   *          </note>
   * @public
   */
  browserExtensionConfiguration?: BrowserExtensionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateWebExperienceResponse {}

/**
 * @public
 * @enum
 */
export const CreatorModeControl = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type CreatorModeControl = (typeof CreatorModeControl)[keyof typeof CreatorModeControl];

/**
 * <p>The creator mode specific admin controls configured for an Amazon Q Business application.
 *             Determines whether an end user can generate LLM-only responses when they use the web
 *             experience.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html">Admin controls and guardrails</a> and <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope">Conversation settings</a>.</p>
 * @public
 */
export interface AppliedCreatorModeConfiguration {
  /**
   * <p> Information about whether creator mode is enabled or disabled for an Amazon Q Business
   *             application. </p>
   * @public
   */
  creatorModeControl: CreatorModeControl | undefined;
}

/**
 * <p>The source reference for an existing attachment in an existing conversation.</p>
 * @public
 */
export interface ConversationSource {
  /**
   * <p>The unique identifier of the Amazon Q Business conversation.</p>
   * @public
   */
  conversationId: string | undefined;

  /**
   * <p>The unique identifier of the Amazon Q Business attachment.</p>
   * @public
   */
  attachmentId: string | undefined;
}

/**
 * <p>The source reference for an existing attachment.</p>
 * @public
 */
export type CopyFromSource = CopyFromSource.ConversationMember | CopyFromSource.$UnknownMember;

/**
 * @public
 */
export namespace CopyFromSource {
  /**
   * <p>A reference to an attachment in an existing conversation.</p>
   * @public
   */
  export interface ConversationMember {
    conversation: ConversationSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    conversation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    conversation: (value: ConversationSource) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CopyFromSource, visitor: Visitor<T>): T => {
    if (value.conversation !== undefined) return visitor.conversation(value.conversation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const AttachmentStatus = {
  FAILED: "FAILED",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type AttachmentStatus = (typeof AttachmentStatus)[keyof typeof AttachmentStatus];

/**
 * <p>An attachment in an Amazon Q Business conversation.</p>
 * @public
 */
export interface Attachment {
  /**
   * <p>The identifier of the Amazon Q Business attachment.</p>
   * @public
   */
  attachmentId?: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business conversation the attachment is associated with.</p>
   * @public
   */
  conversationId?: string | undefined;

  /**
   * <p>Filename of the Amazon Q Business attachment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A CopyFromSource containing a reference to the original source of the Amazon Q Business attachment.</p>
   * @public
   */
  copyFrom?: CopyFromSource | undefined;

  /**
   * <p>Filetype of the Amazon Q Business attachment.</p>
   * @public
   */
  fileType?: string | undefined;

  /**
   * <p>Size in bytes of the Amazon Q Business attachment.</p>
   * @public
   */
  fileSize?: number | undefined;

  /**
   * <p>MD5 checksum of the Amazon Q Business attachment contents.</p>
   * @public
   */
  md5chksum?: string | undefined;

  /**
   * <p>The Unix timestamp when the Amazon Q Business attachment was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>AttachmentStatus of the Amazon Q Business attachment.</p>
   * @public
   */
  status?: AttachmentStatus | undefined;

  /**
   * <p>ErrorDetail providing information about a Amazon Q Business attachment error. </p>
   * @public
   */
  error?: ErrorDetail | undefined;
}

/**
 * <p>This is either a file directly uploaded into a web experience chat or a reference to an existing attachment that is part of a web experience chat.</p>
 * @public
 */
export interface AttachmentInput {
  /**
   * <p>The contents of the attachment.</p>
   * @public
   */
  data?: Uint8Array | undefined;

  /**
   * <p>The filename of the attachment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A reference to an existing attachment.</p>
   * @public
   */
  copyFrom?: CopyFromSource | undefined;
}

/**
 * <p>A file input event activated by a end user request to upload files into their web
 *             experience chat.</p>
 * @public
 */
export interface AttachmentInputEvent {
  /**
   * <p>This is either a file directly uploaded into a web experience chat or a reference to an existing attachment that is part of a web experience chat.</p>
   * @public
   */
  attachment?: AttachmentInput | undefined;
}

/**
 * <p>The details of a file uploaded during chat.</p>
 * @public
 */
export interface AttachmentOutput {
  /**
   * <p>The name of a file uploaded during chat.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The status of a file uploaded during chat.</p>
   * @public
   */
  status?: AttachmentStatus | undefined;

  /**
   * <p>An error associated with a file uploaded during chat.</p>
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * <p>The unique identifier of the Amazon Q Business attachment.</p>
   * @public
   */
  attachmentId?: string | undefined;

  /**
   * <p>The unique identifier of the Amazon Q Business conversation.</p>
   * @public
   */
  conversationId?: string | undefined;
}

/**
 * <p>A document attribute or metadata field.</p>
 * @public
 */
export interface DocumentAttribute {
  /**
   * <p>The identifier for the attribute.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The value of the attribute. </p>
   * @public
   */
  value: DocumentAttributeValue | undefined;
}

/**
 * <p>A request made by Amazon Q Business to a third paty authentication server to authenticate
 *             a custom plugin user.</p>
 * @public
 */
export interface AuthChallengeRequest {
  /**
   * <p>The URL sent by Amazon Q Business to the third party authentication server to authenticate
   *             a custom plugin user through an OAuth protocol.</p>
   * @public
   */
  authorizationUrl: string | undefined;
}

/**
 * <p>An authentication verification event activated by an end user request to use a custom
 *             plugin.</p>
 * @public
 */
export interface AuthChallengeRequestEvent {
  /**
   * <p>The URL sent by Amazon Q Business to a third party authentication server in response to an
   *             authentication verification event activated by an end user request to use a custom
   *             plugin. </p>
   * @public
   */
  authorizationUrl: string | undefined;
}

/**
 * <p>Contains details of the authentication information received from a third party
 *             authentication server in response to an authentication challenge.</p>
 * @public
 */
export interface AuthChallengeResponse {
  /**
   * <p>The mapping of key-value pairs in an authentication challenge response.</p>
   * @public
   */
  responseMap: Record<string, string> | undefined;
}

/**
 * <p>An authentication verification event response by a third party authentication server
 *             to Amazon Q Business.</p>
 * @public
 */
export interface AuthChallengeResponseEvent {
  /**
   * <p>The mapping of key-value pairs in an authentication challenge response.</p>
   * @public
   */
  responseMap: Record<string, string> | undefined;
}

/**
 * <p>A document deleted from an Amazon Q Business data source connector.</p>
 * @public
 */
export interface DeleteDocument {
  /**
   * <p>The identifier of the deleted document.</p>
   * @public
   */
  documentId: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDocumentRequest {
  /**
   * <p>The identifier of the Amazon Q Business application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business index that contains the documents to
   *             delete.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>Documents deleted from the Amazon Q Business index.</p>
   * @public
   */
  documents: DeleteDocument[] | undefined;

  /**
   * <p>The identifier of the data source sync during which the documents were deleted.</p>
   * @public
   */
  dataSourceSyncId?: string | undefined;
}

/**
 * <p>A list of documents that could not be removed from an Amazon Q Business index. Each entry
 *             contains an error message that indicates why the document couldn't be removed from the
 *             index.</p>
 * @public
 */
export interface FailedDocument {
  /**
   * <p>The identifier of the document that couldn't be removed from the Amazon Q Business
   *             index.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>An explanation for why the document couldn't be removed from the index.</p>
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * <p>The identifier of the Amazon Q Business data source connector that contains the failed
   *             document.</p>
   * @public
   */
  dataSourceId?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDocumentResponse {
  /**
   * <p>A list of documents that couldn't be removed from the Amazon Q Business index. Each entry
   *             contains an error message that indicates why the document couldn't be removed from the
   *             index. </p>
   * @public
   */
  failedDocuments?: FailedDocument[] | undefined;
}

/**
 * <p>The contents of a document.</p>
 * @public
 */
export type DocumentContent = DocumentContent.BlobMember | DocumentContent.S3Member | DocumentContent.$UnknownMember;

/**
 * @public
 */
export namespace DocumentContent {
  /**
   * <p>The contents of the document. Documents passed to the <code>blob</code> parameter must
   *             be base64 encoded. Your code might not need to encode the document file bytes if you're
   *             using an Amazon Web Services SDK to call Amazon Q Business APIs. If you are calling the
   *             Amazon Q Business endpoint directly using REST, you must base64 encode the contents before
   *             sending.</p>
   * @public
   */
  export interface BlobMember {
    blob: Uint8Array;
    s3?: never;
    $unknown?: never;
  }

  /**
   * <p>The path to the document in an Amazon S3 bucket.</p>
   * @public
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
 * <p>A document in an Amazon Q Business application.</p>
 * @public
 */
export interface Document {
  /**
   * <p>The identifier of the document.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Custom attributes to apply to the document for refining Amazon Q Business web experience
   *             responses.</p>
   * @public
   */
  attributes?: DocumentAttribute[] | undefined;

  /**
   * <p>The contents of the document.</p>
   * @public
   */
  content?: DocumentContent | undefined;

  /**
   * <p>The file type of the document in the Blob field.</p>
   *          <p>If you want to index snippets or subsets of HTML documents instead of the entirety of
   *             the HTML documents, you add the <code>HTML</code> start and closing tags
   *                 (<code>&lt;HTML&gt;content&lt;/HTML&gt;</code>) around the content.</p>
   * @public
   */
  contentType?: ContentType | undefined;

  /**
   * <p>The title of the document.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>Configuration information for access permission to a document.</p>
   * @public
   */
  accessConfiguration?: AccessConfiguration | undefined;

  /**
   * <p>The configuration information for altering document metadata and content during the
   *             document ingestion process.</p>
   * @public
   */
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration | undefined;

  /**
   * <p>The configuration for extracting information from media in the document.</p>
   * @public
   */
  mediaExtractionConfiguration?: MediaExtractionConfiguration | undefined;
}

/**
 * @public
 */
export interface BatchPutDocumentRequest {
  /**
   * <p>The identifier of the Amazon Q Business application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business index to add the documents to. </p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>One or more documents to add to the index.</p>
   * @public
   */
  documents: Document[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to access your S3
   *             bucket.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The identifier of the data source sync during which the documents were added.</p>
   * @public
   */
  dataSourceSyncId?: string | undefined;
}

/**
 * @public
 */
export interface BatchPutDocumentResponse {
  /**
   * <p> A list of documents that were not added to the Amazon Q Business index because the
   *             document failed a validation check. Each document contains an error message that
   *             indicates why the document couldn't be added to the index. </p>
   * @public
   */
  failedDocuments?: FailedDocument[] | undefined;
}

/**
 * <p>Provides information about the phrases blocked from chat by your chat control
 *             configuration.</p>
 * @public
 */
export interface BlockedPhrasesConfiguration {
  /**
   * <p>A list of phrases blocked from a Amazon Q Business web experience chat.</p>
   * @public
   */
  blockedPhrases?: string[] | undefined;

  /**
   * <p>The configured custom message displayed to an end user informing them that they've
   *             used a blocked phrase during chat.</p>
   * @public
   */
  systemMessageOverride?: string | undefined;
}

/**
 * <p>Updates a blocked phrases configuration in your Amazon Q Business application.</p>
 * @public
 */
export interface BlockedPhrasesConfigurationUpdate {
  /**
   * <p>Creates or updates a blocked phrases configuration in your Amazon Q Business
   *             application.</p>
   * @public
   */
  blockedPhrasesToCreateOrUpdate?: string[] | undefined;

  /**
   * <p>Deletes a blocked phrases configuration in your Amazon Q Business application.</p>
   * @public
   */
  blockedPhrasesToDelete?: string[] | undefined;

  /**
   * <p>The configured custom message displayed to your end user when they use blocked phrase
   *             during chat.</p>
   * @public
   */
  systemMessageOverride?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ChatMode = {
  CREATOR_MODE: "CREATOR_MODE",
  PLUGIN_MODE: "PLUGIN_MODE",
  RETRIEVAL_MODE: "RETRIEVAL_MODE",
} as const;

/**
 * @public
 */
export type ChatMode = (typeof ChatMode)[keyof typeof ChatMode];

/**
 * <p>Configuration information required to invoke chat in <code>PLUGIN_MODE</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html">Admin controls and guardrails</a>, <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/plugins.html">Plugins</a>,
 *             and <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope">Conversation settings</a>.</p>
 * @public
 */
export interface PluginConfiguration {
  /**
   * <p> The identifier of the plugin you want to use.</p>
   * @public
   */
  pluginId: string | undefined;
}

/**
 * <p>Configuration information for Amazon Q Business conversation modes.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html">Admin controls and guardrails</a> and <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope">Conversation settings</a>.</p>
 * @public
 */
export type ChatModeConfiguration =
  | ChatModeConfiguration.PluginConfigurationMember
  | ChatModeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ChatModeConfiguration {
  /**
   * <p>Configuration information required to invoke chat in <code>PLUGIN_MODE</code>.</p>
   * @public
   */
  export interface PluginConfigurationMember {
    pluginConfiguration: PluginConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    pluginConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    pluginConfiguration: (value: PluginConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ChatModeConfiguration, visitor: Visitor<T>): T => {
    if (value.pluginConfiguration !== undefined) return visitor.pluginConfiguration(value.pluginConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The end of the streaming input for the <code>Chat</code> API.</p>
 * @public
 */
export interface EndOfInputEvent {}

/**
 * <p>An input event for a end user message in an Amazon Q Business web experience. </p>
 * @public
 */
export interface TextInputEvent {
  /**
   * <p>A user message in a text message input event.</p>
   * @public
   */
  userMessage: string | undefined;
}

/**
 * <p>A failed file upload during web experience chat.</p>
 * @public
 */
export interface FailedAttachmentEvent {
  /**
   * <p> The identifier of the conversation associated with the failed file upload.</p>
   * @public
   */
  conversationId?: string | undefined;

  /**
   * <p>The identifier of the end user chat message associated with the file upload.</p>
   * @public
   */
  userMessageId?: string | undefined;

  /**
   * <p>The identifier of the AI-generated message associated with the file upload.</p>
   * @public
   */
  systemMessageId?: string | undefined;

  /**
   * <p>The details of a file uploaded during chat.</p>
   * @public
   */
  attachment?: AttachmentOutput | undefined;
}

/**
 * <p>Contains the relevant text excerpt from a source that was used to generate a citation
 *             text segment in an Amazon Q Business chat response.</p>
 * @public
 */
export interface SnippetExcerpt {
  /**
   * <p>The relevant text excerpt from a source that was used to generate a citation text
   *             segment in an Amazon Q chat response.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p>Provides information about a text extract in a chat response that can be attributed to
 *             a source document.</p>
 * @public
 */
export interface TextSegment {
  /**
   * <p>The zero-based location in the response string where the source attribution
   *             starts.</p>
   * @public
   */
  beginOffset?: number | undefined;

  /**
   * <p>The zero-based location in the response string where the source attribution
   *             ends.</p>
   * @public
   */
  endOffset?: number | undefined;

  /**
   * <p>The relevant text excerpt from a source that was used to generate a citation text
   *             segment in an Amazon Q Business chat response.</p>
   * @public
   */
  snippetExcerpt?: SnippetExcerpt | undefined;

  /**
   * <p>The identifier of the media object associated with the text segment in the source attribution.</p>
   * @public
   */
  mediaId?: string | undefined;

  /**
   * <p>The MIME type (image/png) of the media object associated with the text segment in the source attribution.</p>
   * @public
   */
  mediaMimeType?: string | undefined;
}

/**
 * <p>The documents used to generate an Amazon Q Business web experience response.</p>
 * @public
 */
export interface SourceAttribution {
  /**
   * <p>The title of the document which is the source for the Amazon Q Business generated
   *             response. </p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The content extract from the document on which the generated response is based.
   *         </p>
   * @public
   */
  snippet?: string | undefined;

  /**
   * <p>The URL of the document which is the source for the Amazon Q Business generated response.
   *         </p>
   * @public
   */
  url?: string | undefined;

  /**
   * <p>The number attached to a citation in an Amazon Q Business generated response.</p>
   * @public
   */
  citationNumber?: number | undefined;

  /**
   * <p>The Unix timestamp when the Amazon Q Business application was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>A text extract from a source document that is used for source attribution.</p>
   * @public
   */
  textMessageSegments?: TextSegment[] | undefined;
}

/**
 * <p>A metadata event for a AI-generated text output message in a Amazon Q Business
 *             conversation, containing associated metadata generated.</p>
 * @public
 */
export interface MetadataEvent {
  /**
   * <p>The identifier of the conversation with which the generated metadata is
   *             associated.</p>
   * @public
   */
  conversationId?: string | undefined;

  /**
   * <p>The identifier of an Amazon Q Business end user text input message within the
   *             conversation.</p>
   * @public
   */
  userMessageId?: string | undefined;

  /**
   * <p>The identifier of an Amazon Q Business AI generated message within the
   *             conversation.</p>
   * @public
   */
  systemMessageId?: string | undefined;

  /**
   * <p>The source documents used to generate the conversation response.</p>
   * @public
   */
  sourceAttributions?: SourceAttribution[] | undefined;

  /**
   * <p>The final text output message generated by the system.</p>
   * @public
   */
  finalTextMessage?: string | undefined;
}

/**
 * <p>An output event for an AI-generated response in an Amazon Q Business web
 *             experience.</p>
 * @public
 */
export interface TextOutputEvent {
  /**
   * <p>The identifier of the conversation with which the text output event is
   *             associated.</p>
   * @public
   */
  conversationId?: string | undefined;

  /**
   * <p>The identifier of an end user message in a <code>TextOutputEvent</code>.</p>
   * @public
   */
  userMessageId?: string | undefined;

  /**
   * <p>The identifier of an AI-generated message in a <code>TextOutputEvent</code>.</p>
   * @public
   */
  systemMessageId?: string | undefined;

  /**
   * <p>An AI-generated message in a <code>TextOutputEvent</code>.</p>
   * @public
   */
  systemMessage?: string | undefined;
}

/**
 * <p>The streaming output for the <code>Chat</code> API.</p>
 * @public
 */
export type ChatOutputStream =
  | ChatOutputStream.ActionReviewEventMember
  | ChatOutputStream.AuthChallengeRequestEventMember
  | ChatOutputStream.FailedAttachmentEventMember
  | ChatOutputStream.MetadataEventMember
  | ChatOutputStream.TextEventMember
  | ChatOutputStream.$UnknownMember;

/**
 * @public
 */
export namespace ChatOutputStream {
  /**
   * <p>Information about the payload of the <code>ChatOutputStream</code> event containing
   *             the AI-generated message output.</p>
   * @public
   */
  export interface TextEventMember {
    textEvent: TextOutputEvent;
    metadataEvent?: never;
    actionReviewEvent?: never;
    failedAttachmentEvent?: never;
    authChallengeRequestEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>A metadata event for a AI-generated text output message in a Amazon Q Business
   *             conversation. </p>
   * @public
   */
  export interface MetadataEventMember {
    textEvent?: never;
    metadataEvent: MetadataEvent;
    actionReviewEvent?: never;
    failedAttachmentEvent?: never;
    authChallengeRequestEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>A request from Amazon Q Business to the end user for information Amazon Q Business needs to
   *             successfully complete a requested plugin action.</p>
   * @public
   */
  export interface ActionReviewEventMember {
    textEvent?: never;
    metadataEvent?: never;
    actionReviewEvent: ActionReviewEvent;
    failedAttachmentEvent?: never;
    authChallengeRequestEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>A failed file upload event during a web experience chat.</p>
   * @public
   */
  export interface FailedAttachmentEventMember {
    textEvent?: never;
    metadataEvent?: never;
    actionReviewEvent?: never;
    failedAttachmentEvent: FailedAttachmentEvent;
    authChallengeRequestEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>An authentication verification event activated by an end user request to use a custom
   *             plugin.</p>
   * @public
   */
  export interface AuthChallengeRequestEventMember {
    textEvent?: never;
    metadataEvent?: never;
    actionReviewEvent?: never;
    failedAttachmentEvent?: never;
    authChallengeRequestEvent: AuthChallengeRequestEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    textEvent?: never;
    metadataEvent?: never;
    actionReviewEvent?: never;
    failedAttachmentEvent?: never;
    authChallengeRequestEvent?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    textEvent: (value: TextOutputEvent) => T;
    metadataEvent: (value: MetadataEvent) => T;
    actionReviewEvent: (value: ActionReviewEvent) => T;
    failedAttachmentEvent: (value: FailedAttachmentEvent) => T;
    authChallengeRequestEvent: (value: AuthChallengeRequestEvent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ChatOutputStream, visitor: Visitor<T>): T => {
    if (value.textEvent !== undefined) return visitor.textEvent(value.textEvent);
    if (value.metadataEvent !== undefined) return visitor.metadataEvent(value.metadataEvent);
    if (value.actionReviewEvent !== undefined) return visitor.actionReviewEvent(value.actionReviewEvent);
    if (value.failedAttachmentEvent !== undefined) return visitor.failedAttachmentEvent(value.failedAttachmentEvent);
    if (value.authChallengeRequestEvent !== undefined)
      return visitor.authChallengeRequestEvent(value.authChallengeRequestEvent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface ChatOutput {
  /**
   * <p>The streaming output for the <code>Chat</code> API.</p>
   * @public
   */
  outputStream?: AsyncIterable<ChatOutputStream> | undefined;
}

/**
 * <p>An external resource that you configured with your application is returning errors and
 *             preventing this operation from succeeding. Fix those errors and try again.
 *         </p>
 * @public
 */
export class ExternalResourceException extends __BaseException {
  readonly name: "ExternalResourceException" = "ExternalResourceException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExternalResourceException, __BaseException>) {
    super({
      name: "ExternalResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExternalResourceException.prototype);
  }
}

/**
 * <p>You don't have permissions to perform the action because your license is inactive. Ask
 *             your admin to activate your license and try again after your licence is active.</p>
 * @public
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
 */
export interface ChatSyncOutput {
  /**
   * <p>The identifier of the Amazon Q Business conversation.</p>
   * @public
   */
  conversationId?: string | undefined;

  /**
   * <p>An AI-generated message in a conversation.</p>
   * @public
   */
  systemMessage?: string | undefined;

  /**
   * <p>The identifier of an Amazon Q Business AI generated message within the
   *             conversation.</p>
   * @public
   */
  systemMessageId?: string | undefined;

  /**
   * <p>The identifier of an Amazon Q Business end user text input message within the
   *             conversation.</p>
   * @public
   */
  userMessageId?: string | undefined;

  /**
   * <p>A request from Amazon Q Business to the end user for information Amazon Q Business needs to
   *             successfully complete a requested plugin action.</p>
   * @public
   */
  actionReview?: ActionReview | undefined;

  /**
   * <p>An authentication verification event activated by an end user request to use a custom
   *             plugin.</p>
   * @public
   */
  authChallengeRequest?: AuthChallengeRequest | undefined;

  /**
   * <p>The source documents used to generate the conversation response.</p>
   * @public
   */
  sourceAttributions?: SourceAttribution[] | undefined;

  /**
   * <p>A list of files which failed to upload during chat.</p>
   * @public
   */
  failedAttachments?: AttachmentOutput[] | undefined;
}

/**
 * <p>A rule for configuring how Amazon Q Business responds when it encounters a a blocked
 *             topic. You can configure a custom message to inform your end users that they have asked
 *             about a restricted topic and suggest any next steps they should take.</p>
 * @public
 */
export interface ContentBlockerRule {
  /**
   * <p>The configured custom message displayed to an end user informing them that they've
   *             used a blocked phrase during chat.</p>
   * @public
   */
  systemMessageOverride?: string | undefined;
}

/**
 * <p>The identifier of the data source Amazon Q Business will generate responses from.</p>
 * @public
 */
export interface EligibleDataSource {
  /**
   * <p>The identifier of the index the data source is attached to.</p>
   * @public
   */
  indexId?: string | undefined;

  /**
   * <p>The identifier of the data source.</p>
   * @public
   */
  dataSourceId?: string | undefined;
}

/**
 * <p>Rules for retrieving content from data sources connected to a Amazon Q Business
 *             application for a specific topic control configuration.</p>
 * @public
 */
export interface ContentRetrievalRule {
  /**
   * <p>Specifies data sources in a Amazon Q Business application to use for content
   *             generation.</p>
   * @public
   */
  eligibleDataSources?: EligibleDataSource[] | undefined;
}

/**
 * <p>A conversation in an Amazon Q Business application.</p>
 * @public
 */
export interface Conversation {
  /**
   * <p>The identifier of the Amazon Q Business conversation.</p>
   * @public
   */
  conversationId?: string | undefined;

  /**
   * <p>The title of the conversation.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The start time of the conversation.</p>
   * @public
   */
  startTime?: Date | undefined;
}

/**
 * <p>Aliases attached to a user id within an Amazon Q Business application.</p>
 * @public
 */
export interface UserAlias {
  /**
   * <p>The identifier of the index that the user aliases are associated with.</p>
   * @public
   */
  indexId?: string | undefined;

  /**
   * <p>The identifier of the data source that the user aliases are associated with.</p>
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * <p>The identifier of the user id associated with the user aliases.</p>
   * @public
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * <p>The identifier of the application for which the user mapping will be created.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The user emails attached to a user mapping.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The list of user aliases in the mapping.</p>
   * @public
   */
  userAliases?: UserAlias[] | undefined;

  /**
   * <p>A token that you provide to identify the request to create your Amazon Q Business user
   *             mapping.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {}

/**
 * <p>Configuration information required to invoke chat in <code>CREATOR_MODE</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html">Admin controls and guardrails</a> and <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope">Conversation settings</a>.</p>
 * @public
 */
export interface CreatorModeConfiguration {
  /**
   * <p>Status information about whether <code>CREATOR_MODE</code> has been enabled or
   *             disabled. The default status is <code>DISABLED</code>.</p>
   * @public
   */
  creatorModeControl: CreatorModeControl | undefined;
}

/**
 * <p>Maps a batch delete document request to a specific Amazon Q Business data source connector
 *             sync job.</p>
 * @public
 */
export interface DataSourceSyncJobMetrics {
  /**
   * <p>The current count of documents added from the data source during the data source
   *             sync.</p>
   * @public
   */
  documentsAdded?: string | undefined;

  /**
   * <p>The current count of documents modified in the data source during the data source
   *             sync.</p>
   * @public
   */
  documentsModified?: string | undefined;

  /**
   * <p>The current count of documents deleted from the data source during the data source
   *             sync.</p>
   * @public
   */
  documentsDeleted?: string | undefined;

  /**
   * <p>The current count of documents that failed to sync from the data source during the
   *             data source sync.</p>
   * @public
   */
  documentsFailed?: string | undefined;

  /**
   * <p>The current count of documents crawled by the ongoing sync job in the data
   *             source.</p>
   * @public
   */
  documentsScanned?: string | undefined;
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
 * <p>Provides information about an Amazon Q Business data source connector synchronization
 *             job.</p>
 * @public
 */
export interface DataSourceSyncJob {
  /**
   * <p>The identifier of a data source synchronization job.</p>
   * @public
   */
  executionId?: string | undefined;

  /**
   * <p>The Unix time stamp when the data source synchronization job started.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The Unix timestamp when the synchronization job completed.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The status of the synchronization job. When the <code>Status</code> field is set to
   *                 <code>SUCCEEDED</code>, the synchronization job is done. If the status code is
   *                 <code>FAILED</code>, the <code>ErrorCode</code> and <code>ErrorMessage</code> fields
   *             give you the reason for the failure.</p>
   * @public
   */
  status?: DataSourceSyncJobStatus | undefined;

  /**
   * <p>If the <code>Status</code> field is set to <code>FAILED</code>, the
   *                 <code>ErrorCode</code> field indicates the reason the synchronization failed. </p>
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * <p>If the reason that the synchronization failed is due to an error with the underlying
   *             data source, this field contains a code that identifies the error.</p>
   * @public
   */
  dataSourceErrorCode?: string | undefined;

  /**
   * <p>Maps a batch delete document request to a specific data source sync job. This is
   *             optional and should only be supplied when documents are deleted by a data source
   *             connector.</p>
   * @public
   */
  metrics?: DataSourceSyncJobMetrics | undefined;
}

/**
 * @public
 */
export interface DeleteChatControlsConfigurationRequest {
  /**
   * <p>The identifier of the application the chat controls have been configured for.</p>
   * @public
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
   * <p>The identifier of the Amazon Q Business web experience conversation being deleted.</p>
   * @public
   */
  conversationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business application associated with the
   *             conversation.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the user who is deleting the conversation.</p>
   * @public
   */
  userId?: string | undefined;
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
   * <p>The identifier of the application in which the group mapping belongs.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index you want to delete the group from.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>The name of the group you want to delete.</p>
   * @public
   */
  groupName: string | undefined;

  /**
   * <p>The identifier of the data source linked to the group</p>
   *          <p>A group can be tied to multiple data sources. You can delete a group from accessing
   *             documents in a certain data source. For example, the groups "Research", "Engineering",
   *             and "Sales and Marketing" are all tied to the company's documents stored in the data
   *             sources Confluence and Salesforce. You want to delete "Research" and "Engineering"
   *             groups from Salesforce, so that these groups cannot access customer-related documents
   *             stored in Salesforce. Only "Sales and Marketing" should access documents in the
   *             Salesforce data source.</p>
   * @public
   */
  dataSourceId?: string | undefined;
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
   * <p>The identifier of the application from which the user is being deleted.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The user email being deleted.</p>
   * @public
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
 * <p>The details of a document within an Amazon Q Business index.</p>
 * @public
 */
export interface DocumentDetails {
  /**
   * <p>The identifier of the document.</p>
   * @public
   */
  documentId?: string | undefined;

  /**
   * <p>The current status of the document.</p>
   * @public
   */
  status?: DocumentStatus | undefined;

  /**
   * <p>An error message associated with the document.</p>
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * <p>The timestamp for when the document was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp for when the document was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetChatControlsConfigurationRequest {
  /**
   * <p>The identifier of the application for which the chat controls are configured.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The maximum number of configured chat controls to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q Business returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of Amazon Q Business chat controls
   *             configured.</p>
   * @public
   */
  nextToken?: string | undefined;
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
 * <p>Provides information about users and group names associated with a topic control
 *             rule.</p>
 * @public
 */
export interface UsersAndGroups {
  /**
   * <p>The user ids associated with a topic control rule.</p>
   * @public
   */
  userIds?: string[] | undefined;

  /**
   * <p>The user group names associated with a topic control rule.</p>
   * @public
   */
  userGroups?: string[] | undefined;
}

/**
 * <p>Provides configuration information about a rule.</p>
 * @public
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
   * <p>A rule for configuring how Amazon Q Business responds when it encounters a a blocked
   *             topic.</p>
   * @public
   */
  export interface ContentBlockerRuleMember {
    contentBlockerRule: ContentBlockerRule;
    contentRetrievalRule?: never;
    $unknown?: never;
  }

  /**
   * <p>Rules for retrieving content from data sources connected to a Amazon Q Business
   *             application for a specific topic control configuration.</p>
   * @public
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
 * <p>Guardrail rules for an Amazon Q Business application. Amazon Q Business supports only one rule
 *             at a time.</p>
 * @public
 */
export interface Rule {
  /**
   * <p>Users and groups to be included in a rule.</p>
   * @public
   */
  includedUsersAndGroups?: UsersAndGroups | undefined;

  /**
   * <p>Users and groups to be excluded from a rule.</p>
   * @public
   */
  excludedUsersAndGroups?: UsersAndGroups | undefined;

  /**
   * <p>The type of rule.</p>
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * <p>The configuration information for a rule.</p>
   * @public
   */
  ruleConfiguration?: RuleConfiguration | undefined;
}

/**
 * <p>The topic specific controls configured for an Amazon Q Business application.</p>
 * @public
 */
export interface TopicConfiguration {
  /**
   * <p>A name for your topic control configuration.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for your topic control configuration. Use this to outline how the large
   *             language model (LLM) should use this topic control configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of example phrases that you expect the end user to use in relation to the
   *             topic.</p>
   * @public
   */
  exampleChatMessages?: string[] | undefined;

  /**
   * <p>Rules defined for a topic configuration.</p>
   * @public
   */
  rules: Rule[] | undefined;
}

/**
 * @public
 */
export interface GetChatControlsConfigurationResponse {
  /**
   * <p>The response scope configured for a Amazon Q Business application. This determines whether
   *             your application uses its retrieval augmented generation (RAG) system to generate
   *             answers only from your enterprise data, or also uses the large language models (LLM)
   *             knowledge to respons to end user questions in chat.</p>
   * @public
   */
  responseScope?: ResponseScope | undefined;

  /**
   * <p>The phrases blocked from chat by your chat control configuration.</p>
   * @public
   */
  blockedPhrases?: BlockedPhrasesConfiguration | undefined;

  /**
   * <p>The topic specific controls configured for a Amazon Q Business application.</p>
   * @public
   */
  topicConfigurations?: TopicConfiguration[] | undefined;

  /**
   * <p>The configuration details for <code>CREATOR_MODE</code>.</p>
   * @public
   */
  creatorModeConfiguration?: AppliedCreatorModeConfiguration | undefined;

  /**
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q Business returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of Amazon Q Business chat controls
   *             configured.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * <p>The identifier of the application id the group is attached to.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index the group is attached to.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  groupName: string | undefined;

  /**
   * <p>The identifier of the data source the group is attached to.</p>
   * @public
   */
  dataSourceId?: string | undefined;
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
 * <p>Provides the details of a group's status.</p>
 * @public
 */
export interface GroupStatusDetail {
  /**
   * <p>The status of a group.</p>
   * @public
   */
  status?: GroupStatus | undefined;

  /**
   * <p>The Unix timestamp when the Amazon Q Business application was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The details of an error associated a group status.</p>
   * @public
   */
  errorDetail?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface GetGroupResponse {
  /**
   * <p>The current status of the group.</p>
   * @public
   */
  status?: GroupStatusDetail | undefined;

  /**
   * <p>The status history of the group.</p>
   * @public
   */
  statusHistory?: GroupStatusDetail[] | undefined;
}

/**
 * @public
 */
export interface GetMediaRequest {
  /**
   * <p>The identifier of the Amazon Q Business which contains the media object.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business conversation.</p>
   * @public
   */
  conversationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business message.</p>
   * @public
   */
  messageId: string | undefined;

  /**
   * <p>The identifier of the media object. You can find this in the <code>sourceAttributions</code> returned by the <code>Chat</code>, <code>ChatSync</code>, and <code>ListMessages</code> API responses.</p>
   * @public
   */
  mediaId: string | undefined;
}

/**
 * @public
 */
export interface GetMediaResponse {
  /**
   * <p>The base64-encoded bytes of the media object.</p>
   * @public
   */
  mediaBytes?: Uint8Array | undefined;

  /**
   * <p>The MIME type of the media object (image/png).</p>
   * @public
   */
  mediaMimeType?: string | undefined;
}

/**
 * <p>The requested media object is too large to be returned.</p>
 * @public
 */
export class MediaTooLargeException extends __BaseException {
  readonly name: "MediaTooLargeException" = "MediaTooLargeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MediaTooLargeException, __BaseException>) {
    super({
      name: "MediaTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MediaTooLargeException.prototype);
  }
}

/**
 * @public
 */
export interface GetUserRequest {
  /**
   * <p>The identifier of the application connected to the user.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The user email address attached to the user.</p>
   * @public
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface GetUserResponse {
  /**
   * <p>A list of user aliases attached to a user.</p>
   * @public
   */
  userAliases?: UserAlias[] | undefined;
}

/**
 * @public
 */
export interface ListAttachmentsRequest {
  /**
   * <p>The unique identifier for the Amazon Q Business application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the Amazon Q Business web experience conversation.</p>
   * @public
   */
  conversationId?: string | undefined;

  /**
   * <p>The unique identifier of the user involved in the Amazon Q Business web experience conversation.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>If the number of attachments returned exceeds <code>maxResults</code>, Amazon Q Business
   *             returns a next token as a pagination token to retrieve the next set of attachments.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of attachements to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAttachmentsResponse {
  /**
   * <p>An array of information on one or more attachments.</p>
   * @public
   */
  attachments?: Attachment[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Q Business returns this token, which you can use in a
   *             later request to list the next set of attachments.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConversationsRequest {
  /**
   * <p>The identifier of the Amazon Q Business application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the user involved in the Amazon Q Business web experience conversation.
   *         </p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q Business returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of Amazon Q Business conversations.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of Amazon Q Business conversations to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListConversationsResponse {
  /**
   * <p>If the response is truncated, Amazon Q Business returns this token, which you can use in a
   *             later request to list the next set of messages.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of summary information on the configuration of one or more Amazon Q Business web
   *             experiences.</p>
   * @public
   */
  conversations?: Conversation[] | undefined;
}

/**
 * @public
 */
export interface ListDataSourceSyncJobsRequest {
  /**
   * <p> The identifier of the data source connector.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business application connected to the data source.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index used with the Amazon Q Business data source connector.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>If the <code>maxResults</code> response was incpmplete because there is more data to
   *             retriever, Amazon Q Business returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of responses.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of synchronization jobs to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> The start time of the data source connector sync. </p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p> The end time of the data source connector sync.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Only returns synchronization jobs with the <code>Status</code> field equal to the
   *             specified status.</p>
   * @public
   */
  statusFilter?: DataSourceSyncJobStatus | undefined;
}

/**
 * @public
 */
export interface ListDataSourceSyncJobsResponse {
  /**
   * <p>A history of synchronization jobs for the data source connector.</p>
   * @public
   */
  history?: DataSourceSyncJob[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Q Business returns this token. You can use this token
   *             in any subsequent request to retrieve the next set of jobs.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDocumentsRequest {
  /**
   * <p>The identifier of the application id the documents are attached to.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index the documents are attached to.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>The identifier of the data sources the documents are attached to.</p>
   * @public
   */
  dataSourceIds?: string[] | undefined;

  /**
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q Business returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of documents.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of documents to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDocumentsResponse {
  /**
   * <p>A list of document details.</p>
   * @public
   */
  documentDetailList?: DocumentDetails[] | undefined;

  /**
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to
   *             retrieve, Amazon Q Business returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of documents.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * <p>The identifier of the application for getting a list of groups mapped to users.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index for getting a list of groups mapped to users.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>The timestamp identifier used for the latest <code>PUT</code> or <code>DELETE</code>
   *             action for mapping users to their groups.</p>
   * @public
   */
  updatedEarlierThan: Date | undefined;

  /**
   * <p>The identifier of the data source for getting a list of groups mapped to users.</p>
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *             Amazon Q Business returns a pagination token in the response. You can use this pagination
   *             token to retrieve the next set of groups that are mapped to users.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of returned groups that are mapped to users.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary information for groups.</p>
 * @public
 */
export interface GroupSummary {
  /**
   * <p>The name of the group the summary information is for.</p>
   * @public
   */
  groupName?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * <p>If the response is truncated, Amazon Q Business returns this token that you can use in the
   *             subsequent request to retrieve the next set of groups that are mapped to users.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Summary information for list of groups that are mapped to users.</p>
   * @public
   */
  items?: GroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMessagesRequest {
  /**
   * <p>The identifier of the Amazon Q Business web experience conversation.</p>
   * @public
   */
  conversationId: string | undefined;

  /**
   * <p>The identifier for the Amazon Q Business application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the user involved in the Amazon Q Business web experience
   *             conversation.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>If the number of messages returned exceeds <code>maxResults</code>, Amazon Q Business
   *             returns a next token as a pagination token to retrieve the next set of messages.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of messages to return.</p>
   * @public
   */
  maxResults?: number | undefined;
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
 * <p>A message in an Amazon Q Business web experience.</p>
 * @public
 */
export interface Message {
  /**
   * <p>The identifier of the Amazon Q Business web experience message.</p>
   * @public
   */
  messageId?: string | undefined;

  /**
   * <p>The content of the Amazon Q Business web experience message.</p>
   * @public
   */
  body?: string | undefined;

  /**
   * <p>The timestamp of the first Amazon Q Business web experience message.</p>
   * @public
   */
  time?: Date | undefined;

  /**
   * <p>The type of Amazon Q Business message, whether <code>HUMAN</code> or <code>AI</code>
   *             generated.</p>
   * @public
   */
  type?: MessageType | undefined;

  /**
   * <p>A file directly uploaded into an Amazon Q Business web experience chat.</p>
   * @public
   */
  attachments?: AttachmentOutput[] | undefined;

  /**
   * <p>The source documents used to generate Amazon Q Business web experience message.</p>
   * @public
   */
  sourceAttribution?: SourceAttribution[] | undefined;

  /**
   * <p>An output event that Amazon Q Business returns to an user who wants to perform a plugin
   *             action during a non-streaming chat conversation. It contains information about the
   *             selected action with a list of possible user input fields, some pre-populated by
   *             Amazon Q Business.</p>
   * @public
   */
  actionReview?: ActionReview | undefined;

  /**
   * <p>Performs an Amazon Q Business plugin action during a non-streaming chat
   *             conversation.</p>
   * @public
   */
  actionExecution?: ActionExecution | undefined;
}

/**
 * @public
 */
export interface ListMessagesResponse {
  /**
   * <p>An array of information on one or more messages.</p>
   * @public
   */
  messages?: Message[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Q Business returns this token, which you can use in a
   *             later request to list the next set of messages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Business application or data source to get
   *             a list of tags for.</p>
   * @public
   */
  resourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags associated with the Amazon Q Business application or data source.</p>
   * @public
   */
  tags?: Tag[] | undefined;
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
 * <p>End user feedback on an AI-generated web experience chat message usefulness.</p>
 * @public
 */
export interface MessageUsefulnessFeedback {
  /**
   * <p>The usefulness value assigned by an end user to a message.</p>
   * @public
   */
  usefulness: MessageUsefulness | undefined;

  /**
   * <p>The reason for a usefulness rating.</p>
   * @public
   */
  reason?: MessageUsefulnessReason | undefined;

  /**
   * <p>A comment given by an end user on the usefulness of an AI-generated chat
   *             message.</p>
   * @public
   */
  comment?: string | undefined;

  /**
   * <p>The timestamp for when the feedback was submitted.</p>
   * @public
   */
  submittedAt: Date | undefined;
}

/**
 * @public
 */
export interface PutFeedbackRequest {
  /**
   * <p>The identifier of the application associated with the feedback.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the user giving the feedback.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The identifier of the conversation the feedback is attached to.</p>
   * @public
   */
  conversationId: string | undefined;

  /**
   * <p>The identifier of the chat message that the feedback was given for.</p>
   * @public
   */
  messageId: string | undefined;

  /**
   * <p>The timestamp for when the feedback was recorded.</p>
   * @public
   */
  messageCopiedAt?: Date | undefined;

  /**
   * <p>The feedback usefulness value given by the user to the chat message.</p>
   * @public
   */
  messageUsefulness?: MessageUsefulnessFeedback | undefined;
}

/**
 * <p>The sub groups that belong to a group.</p>
 * @public
 */
export interface MemberGroup {
  /**
   * <p>The name of the sub group.</p>
   * @public
   */
  groupName: string | undefined;

  /**
   * <p>The type of the sub group.</p>
   * @public
   */
  type?: MembershipType | undefined;
}

/**
 * <p>The users that belong to a group.</p>
 * @public
 */
export interface MemberUser {
  /**
   * <p>The identifier of the user you want to map to a group.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The type of the user.</p>
   * @public
   */
  type?: MembershipType | undefined;
}

/**
 * <p>A list of users or sub groups that belong to a group. This is for generating
 *             Amazon Q Business chat results only from document a user has access to.</p>
 * @public
 */
export interface GroupMembers {
  /**
   * <p>A list of sub groups that belong to a group. For example, the sub groups "Research",
   *             "Engineering", and "Sales and Marketing" all belong to the group "Company".</p>
   * @public
   */
  memberGroups?: MemberGroup[] | undefined;

  /**
   * <p>A list of users that belong to a group. For example, a list of interns all belong to
   *             the "Interns" group.</p>
   * @public
   */
  memberUsers?: MemberUser[] | undefined;

  /**
   * <p>Information required for Amazon Q Business to find a specific file in an Amazon S3
   *             bucket.</p>
   * @public
   */
  s3PathForGroupMembers?: S3 | undefined;
}

/**
 * @public
 */
export interface PutGroupRequest {
  /**
   * <p>The identifier of the application in which the user and group mapping belongs.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index in which you want to map users to their groups.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>The list that contains your users or sub groups that belong the same group. For
   *             example, the group "Company" includes the user "CEO" and the sub groups "Research",
   *             "Engineering", and "Sales and Marketing".</p>
   * @public
   */
  groupName: string | undefined;

  /**
   * <p>The identifier of the data source for which you want to map users to their groups.
   *             This is useful if a group is tied to multiple data sources, but you only want the group
   *             to access documents of a certain data source. For example, the groups "Research",
   *             "Engineering", and "Sales and Marketing" are all tied to the company's documents stored
   *             in the data sources Confluence and Salesforce. However, "Sales and Marketing" team only
   *             needs access to customer-related documents stored in Salesforce.</p>
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * <p>The type of the group.</p>
   * @public
   */
  type: MembershipType | undefined;

  /**
   * <p>A list of users or sub groups that belong to a group. This is for generating
   *             Amazon Q Business chat results only from document a user has access to.</p>
   * @public
   */
  groupMembers: GroupMembers | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has access to the S3 file that contains
   *             your list of users that belong to a group.The Amazon Resource Name (ARN) of an IAM role that
   *             has access to the S3 file that contains your list of users that belong to a group.</p>
   * @public
   */
  roleArn?: string | undefined;
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
   * <p> The identifier of the data source connector. </p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The identifier of Amazon Q Business application the data source is connected to.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index used with the data source connector.</p>
   * @public
   */
  indexId: string | undefined;
}

/**
 * @public
 */
export interface StartDataSourceSyncJobResponse {
  /**
   * <p>The identifier for a particular synchronization job.</p>
   * @public
   */
  executionId?: string | undefined;
}

/**
 * @public
 */
export interface StopDataSourceSyncJobRequest {
  /**
   * <p> The identifier of the data source connector. </p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business application that the data source is connected
   *             to.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index used with the Amazon Q Business data source connector.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Business application or data source to
   *             tag.</p>
   * @public
   */
  resourceARN: string | undefined;

  /**
   * <p>A list of tag keys to add to the Amazon Q Business application or data source. If a tag
   *             already exists, the existing value is replaced with the new value.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Business application, or data source to
   *             remove the tag from.</p>
   * @public
   */
  resourceARN: string | undefined;

  /**
   * <p>A list of tag keys to remove from the Amazon Q Business application or data source. If a
   *             tag key does not exist on the resource, it is ignored.</p>
   * @public
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
   * <p>The identifier of the application for which the chat controls are configured.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>A token that you provide to identify the request to update a Amazon Q Business application
   *             chat configuration.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The response scope configured for your application. This determines whether your
   *             application uses its retrieval augmented generation (RAG) system to generate answers
   *             only from your enterprise data, or also uses the large language models (LLM) knowledge
   *             to respons to end user questions in chat.</p>
   * @public
   */
  responseScope?: ResponseScope | undefined;

  /**
   * <p>The phrases blocked from chat by your chat control configuration.</p>
   * @public
   */
  blockedPhrasesConfigurationUpdate?: BlockedPhrasesConfigurationUpdate | undefined;

  /**
   * <p>The configured topic specific chat controls you want to update.</p>
   * @public
   */
  topicConfigurationsToCreateOrUpdate?: TopicConfiguration[] | undefined;

  /**
   * <p>The configured topic specific chat controls you want to delete.</p>
   * @public
   */
  topicConfigurationsToDelete?: TopicConfiguration[] | undefined;

  /**
   * <p>The configuration details for <code>CREATOR_MODE</code>.</p>
   * @public
   */
  creatorModeConfiguration?: CreatorModeConfiguration | undefined;
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
   * <p>The identifier of the application the user is attached to.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The email id attached to the user.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The user aliases attached to the user id that are to be updated.</p>
   * @public
   */
  userAliasesToUpdate?: UserAlias[] | undefined;

  /**
   * <p>The user aliases attached to the user id that are to be deleted.</p>
   * @public
   */
  userAliasesToDelete?: UserAlias[] | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * <p>The user aliases that have been to be added to a user id.</p>
   * @public
   */
  userAliasesAdded?: UserAlias[] | undefined;

  /**
   * <p>The user aliases attached to a user id that have been updated.</p>
   * @public
   */
  userAliasesUpdated?: UserAlias[] | undefined;

  /**
   * <p>The user aliases that have been deleted from a user id.</p>
   * @public
   */
  userAliasesDeleted?: UserAlias[] | undefined;
}

/**
 * <p>Enables filtering of responses based on document attributes or metadata fields.</p>
 * @public
 */
export interface AttributeFilter {
  /**
   * <p>Performs a logical <code>AND</code> operation on all supplied filters.</p>
   * @public
   */
  andAllFilters?: AttributeFilter[] | undefined;

  /**
   * <p> Performs a logical <code>OR</code> operation on all supplied filters. </p>
   * @public
   */
  orAllFilters?: AttributeFilter[] | undefined;

  /**
   * <p>Performs a logical <code>NOT</code> operation on all supplied filters. </p>
   * @public
   */
  notFilter?: AttributeFilter | undefined;

  /**
   * <p>Performs an equals operation on two document attributes or metadata fields. Supported
   *             for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>dateValue</code>,
   *                 <code>longValue</code>, <code>stringListValue</code> and
   *             <code>stringValue</code>.</p>
   * @public
   */
  equalsTo?: DocumentAttribute | undefined;

  /**
   * <p>Returns <code>true</code> when a document contains all the specified document
   *             attributes or metadata fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>:
   *                 <code>stringListValue</code>.</p>
   * @public
   */
  containsAll?: DocumentAttribute | undefined;

  /**
   * <p>Returns <code>true</code> when a document contains any of the specified document
   *             attributes or metadata fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>:
   *                 <code>stringListValue</code>.</p>
   * @public
   */
  containsAny?: DocumentAttribute | undefined;

  /**
   * <p>Performs a greater than operation on two document attributes or metadata fields.
   *             Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>dateValue</code>
   *             and <code>longValue</code>.</p>
   * @public
   */
  greaterThan?: DocumentAttribute | undefined;

  /**
   * <p>Performs a greater or equals than operation on two document attributes or metadata
   *             fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>dateValue</code>
   *             and <code>longValue</code>. </p>
   * @public
   */
  greaterThanOrEquals?: DocumentAttribute | undefined;

  /**
   * <p>Performs a less than operation on two document attributes or metadata fields.
   *             Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>dateValue</code>
   *             and <code>longValue</code>.</p>
   * @public
   */
  lessThan?: DocumentAttribute | undefined;

  /**
   * <p>Performs a less than or equals operation on two document attributes or metadata
   *             fields.Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value type</a>: <code>dateValue</code>
   *             and <code>longValue</code>. </p>
   * @public
   */
  lessThanOrEquals?: DocumentAttribute | undefined;
}

/**
 * @public
 */
export interface ChatSyncInput {
  /**
   * <p>The identifier of the Amazon Q Business application linked to the Amazon Q Business
   *             conversation.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the user attached to the chat input.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The group names that a user associated with the chat input belongs to.</p>
   * @public
   */
  userGroups?: string[] | undefined;

  /**
   * <p>A end user message in a conversation.</p>
   * @public
   */
  userMessage?: string | undefined;

  /**
   * <p>A list of files uploaded directly during chat. You can upload a maximum of 5 files of
   *             upto 10 MB each.</p>
   * @public
   */
  attachments?: AttachmentInput[] | undefined;

  /**
   * <p>A request from an end user to perform an Amazon Q Business plugin action.</p>
   * @public
   */
  actionExecution?: ActionExecution | undefined;

  /**
   * <p>An authentication verification event response by a third party authentication server
   *             to Amazon Q Business.</p>
   * @public
   */
  authChallengeResponse?: AuthChallengeResponse | undefined;

  /**
   * <p>The identifier of the Amazon Q Business conversation.</p>
   * @public
   */
  conversationId?: string | undefined;

  /**
   * <p>The identifier of the previous system message in a conversation.</p>
   * @public
   */
  parentMessageId?: string | undefined;

  /**
   * <p>Enables filtering of Amazon Q Business web experience responses based on document
   *             attributes or metadata fields.</p>
   * @public
   */
  attributeFilter?: AttributeFilter | undefined;

  /**
   * <p>The <code>chatMode</code> parameter determines the chat modes available to
   *             Amazon Q Business users:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RETRIEVAL_MODE</code> - If you choose this mode, Amazon Q generates responses solely from the data sources connected and
   *                     indexed by the application. If an answer is not found in the data sources or
   *                     there are no data sources available, Amazon Q will respond with a
   *                         "<i>No Answer Found</i>" message, unless LLM knowledge has
   *                     been enabled. In that case, Amazon Q will generate a response from
   *                     the LLM knowledge</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATOR_MODE</code> - By selecting this mode, you can choose to generate
   *                     responses only from the LLM knowledge. You can also attach files and have Amazon Q
   *                     generate a response based on the data in those files.
   *                     If the attached files do not contain an answer for the query, Amazon Q
   *                     will automatically fall back to generating a response from the LLM knowledge.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PLUGIN_MODE</code> - By selecting this mode, users can choose to
   *                     use plugins in chat to get their responses.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If none of the modes are selected, Amazon Q will only respond using the information
   *                 from the attached files.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html">Admin controls and guardrails</a>, <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/plugins.html">Plugins</a>,
   *             and <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope">Response sources</a>.</p>
   * @public
   */
  chatMode?: ChatMode | undefined;

  /**
   * <p>The chat mode configuration for an Amazon Q Business application.</p>
   * @public
   */
  chatModeConfiguration?: ChatModeConfiguration | undefined;

  /**
   * <p>A token that you provide to identify a chat request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>A configuration event activated by an end user request to select a specific chat
 *             mode.</p>
 * @public
 */
export interface ConfigurationEvent {
  /**
   * <p>The chat modes available to an Amazon Q Business end user.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RETRIEVAL_MODE</code> - The default chat mode for an
   *                     Amazon Q Business application. When this mode is enabled, Amazon Q Business generates
   *                     responses only from data sources connected to an Amazon Q Business
   *                     application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATOR_MODE</code> - By selecting this mode, users can choose to
   *                     generate responses only from the LLM knowledge, without consulting connected
   *                     data sources, for a chat request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PLUGIN_MODE</code> - By selecting this mode, users can choose to
   *                     use plugins in chat.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html">Admin controls and guardrails</a>, <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/plugins.html">Plugins</a>,
   *             and <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope">Conversation settings</a>.</p>
   * @public
   */
  chatMode?: ChatMode | undefined;

  /**
   * <p>Configuration information for Amazon Q Business conversation modes.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html">Admin controls and guardrails</a> and <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope">Conversation settings</a>.</p>
   * @public
   */
  chatModeConfiguration?: ChatModeConfiguration | undefined;

  /**
   * <p>Enables filtering of responses based on document attributes or metadata fields.</p>
   * @public
   */
  attributeFilter?: AttributeFilter | undefined;
}

/**
 * <p>The streaming input for the <code>Chat</code> API.</p>
 * @public
 */
export type ChatInputStream =
  | ChatInputStream.ActionExecutionEventMember
  | ChatInputStream.AttachmentEventMember
  | ChatInputStream.AuthChallengeResponseEventMember
  | ChatInputStream.ConfigurationEventMember
  | ChatInputStream.EndOfInputEventMember
  | ChatInputStream.TextEventMember
  | ChatInputStream.$UnknownMember;

/**
 * @public
 */
export namespace ChatInputStream {
  /**
   * <p>A configuration event activated by an end user request to select a specific chat
   *             mode.</p>
   * @public
   */
  export interface ConfigurationEventMember {
    configurationEvent: ConfigurationEvent;
    textEvent?: never;
    attachmentEvent?: never;
    actionExecutionEvent?: never;
    endOfInputEvent?: never;
    authChallengeResponseEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about the payload of the <code>ChatInputStream</code> event containing the
   *             end user message input.</p>
   * @public
   */
  export interface TextEventMember {
    configurationEvent?: never;
    textEvent: TextInputEvent;
    attachmentEvent?: never;
    actionExecutionEvent?: never;
    endOfInputEvent?: never;
    authChallengeResponseEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>A request by an end user to upload a file during chat.</p>
   * @public
   */
  export interface AttachmentEventMember {
    configurationEvent?: never;
    textEvent?: never;
    attachmentEvent: AttachmentInputEvent;
    actionExecutionEvent?: never;
    endOfInputEvent?: never;
    authChallengeResponseEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>A request from an end user to perform an Amazon Q Business plugin action.</p>
   * @public
   */
  export interface ActionExecutionEventMember {
    configurationEvent?: never;
    textEvent?: never;
    attachmentEvent?: never;
    actionExecutionEvent: ActionExecutionEvent;
    endOfInputEvent?: never;
    authChallengeResponseEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>The end of the streaming input for the <code>Chat</code> API.</p>
   * @public
   */
  export interface EndOfInputEventMember {
    configurationEvent?: never;
    textEvent?: never;
    attachmentEvent?: never;
    actionExecutionEvent?: never;
    endOfInputEvent: EndOfInputEvent;
    authChallengeResponseEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>An authentication verification event response by a third party authentication server
   *             to Amazon Q Business.</p>
   * @public
   */
  export interface AuthChallengeResponseEventMember {
    configurationEvent?: never;
    textEvent?: never;
    attachmentEvent?: never;
    actionExecutionEvent?: never;
    endOfInputEvent?: never;
    authChallengeResponseEvent: AuthChallengeResponseEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    configurationEvent?: never;
    textEvent?: never;
    attachmentEvent?: never;
    actionExecutionEvent?: never;
    endOfInputEvent?: never;
    authChallengeResponseEvent?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    configurationEvent: (value: ConfigurationEvent) => T;
    textEvent: (value: TextInputEvent) => T;
    attachmentEvent: (value: AttachmentInputEvent) => T;
    actionExecutionEvent: (value: ActionExecutionEvent) => T;
    endOfInputEvent: (value: EndOfInputEvent) => T;
    authChallengeResponseEvent: (value: AuthChallengeResponseEvent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ChatInputStream, visitor: Visitor<T>): T => {
    if (value.configurationEvent !== undefined) return visitor.configurationEvent(value.configurationEvent);
    if (value.textEvent !== undefined) return visitor.textEvent(value.textEvent);
    if (value.attachmentEvent !== undefined) return visitor.attachmentEvent(value.attachmentEvent);
    if (value.actionExecutionEvent !== undefined) return visitor.actionExecutionEvent(value.actionExecutionEvent);
    if (value.endOfInputEvent !== undefined) return visitor.endOfInputEvent(value.endOfInputEvent);
    if (value.authChallengeResponseEvent !== undefined)
      return visitor.authChallengeResponseEvent(value.authChallengeResponseEvent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface ChatInput {
  /**
   * <p>The identifier of the Amazon Q Business application linked to a streaming Amazon Q Business
   *             conversation.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the user attached to the chat input. </p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The group names that a user associated with the chat input belongs to.</p>
   * @public
   */
  userGroups?: string[] | undefined;

  /**
   * <p>The identifier of the Amazon Q Business conversation.</p>
   * @public
   */
  conversationId?: string | undefined;

  /**
   * <p>The identifier used to associate a user message with a AI generated response.</p>
   * @public
   */
  parentMessageId?: string | undefined;

  /**
   * <p>A token that you provide to identify the chat input.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The streaming input for the <code>Chat</code> API.</p>
   * @public
   */
  inputStream?: AsyncIterable<ChatInputStream> | undefined;
}

/**
 * @internal
 */
export const APISchemaFilterSensitiveLog = (obj: APISchema): any => {
  if (obj.payload !== undefined) return { payload: SENSITIVE_STRING };
  if (obj.s3 !== undefined) return { s3: obj.s3 };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

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

/**
 * @internal
 */
export const CustomPluginConfigurationFilterSensitiveLog = (obj: CustomPluginConfiguration): any => ({
  ...obj,
  ...(obj.apiSchema && { apiSchema: APISchemaFilterSensitiveLog(obj.apiSchema) }),
});

/**
 * @internal
 */
export const CreatePluginRequestFilterSensitiveLog = (obj: CreatePluginRequest): any => ({
  ...obj,
  ...(obj.authConfiguration && { authConfiguration: obj.authConfiguration }),
  ...(obj.customPluginConfiguration && {
    customPluginConfiguration: CustomPluginConfigurationFilterSensitiveLog(obj.customPluginConfiguration),
  }),
});

/**
 * @internal
 */
export const GetPluginResponseFilterSensitiveLog = (obj: GetPluginResponse): any => ({
  ...obj,
  ...(obj.authConfiguration && { authConfiguration: obj.authConfiguration }),
  ...(obj.customPluginConfiguration && {
    customPluginConfiguration: CustomPluginConfigurationFilterSensitiveLog(obj.customPluginConfiguration),
  }),
});

/**
 * @internal
 */
export const UpdatePluginRequestFilterSensitiveLog = (obj: UpdatePluginRequest): any => ({
  ...obj,
  ...(obj.customPluginConfiguration && {
    customPluginConfiguration: CustomPluginConfigurationFilterSensitiveLog(obj.customPluginConfiguration),
  }),
  ...(obj.authConfiguration && { authConfiguration: obj.authConfiguration }),
});

/**
 * @internal
 */
export const ChatOutputStreamFilterSensitiveLog = (obj: ChatOutputStream): any => {
  if (obj.textEvent !== undefined) return { textEvent: obj.textEvent };
  if (obj.metadataEvent !== undefined) return { metadataEvent: obj.metadataEvent };
  if (obj.actionReviewEvent !== undefined) return { actionReviewEvent: obj.actionReviewEvent };
  if (obj.failedAttachmentEvent !== undefined) return { failedAttachmentEvent: obj.failedAttachmentEvent };
  if (obj.authChallengeRequestEvent !== undefined) return { authChallengeRequestEvent: obj.authChallengeRequestEvent };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ChatOutputFilterSensitiveLog = (obj: ChatOutput): any => ({
  ...obj,
  ...(obj.outputStream && { outputStream: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const ChatInputStreamFilterSensitiveLog = (obj: ChatInputStream): any => {
  if (obj.configurationEvent !== undefined) return { configurationEvent: obj.configurationEvent };
  if (obj.textEvent !== undefined) return { textEvent: obj.textEvent };
  if (obj.attachmentEvent !== undefined) return { attachmentEvent: obj.attachmentEvent };
  if (obj.actionExecutionEvent !== undefined) return { actionExecutionEvent: obj.actionExecutionEvent };
  if (obj.endOfInputEvent !== undefined) return { endOfInputEvent: obj.endOfInputEvent };
  if (obj.authChallengeResponseEvent !== undefined)
    return { authChallengeResponseEvent: obj.authChallengeResponseEvent };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ChatInputFilterSensitiveLog = (obj: ChatInput): any => ({
  ...obj,
  ...(obj.inputStream && { inputStream: "STREAMING_CONTENT" }),
});
