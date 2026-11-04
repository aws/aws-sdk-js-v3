// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  ActionPayloadFieldType,
  APISchemaType,
  ApplicationStatus,
  AttachmentsControlMode,
  AttachmentStatus,
  AttributeType,
  AttributeValueOperator,
  AudioExtractionStatus,
  AudioExtractionType,
  AutoSubscriptionStatus,
  BrowserExtension,
  ChatResponseConfigurationStatus,
  ContentType,
  CreatorModeControl,
  DataAccessorAuthenticationType,
  DataSourceStatus,
  DataSourceSyncJobStatus,
  DocumentAttributeBoostingLevel,
  DocumentContentOperator,
  DocumentEnrichmentConditionOperator,
  DocumentStatus,
  ErrorCode,
  GroupStatus,
  HallucinationReductionControl,
  IdentityType,
  ImageExtractionStatus,
  IndexStatus,
  IndexType,
  MemberRelation,
  MembershipType,
  MessageType,
  MessageUsefulness,
  MessageUsefulnessReason,
  NumberAttributeBoostingType,
  OrchestrationControl,
  OutputFormat,
  PermissionConditionOperator,
  PersonalizationControlMode,
  PluginBuildStatus,
  PluginState,
  PluginType,
  PluginTypeCategory,
  QAppsControlMode,
  ReadAccessType,
  ResponseConfigurationType,
  ResponseScope,
  RetrieverStatus,
  RetrieverType,
  RuleType,
  ScoreConfidence,
  Status,
  StringAttributeValueBoostingLevel,
  SubscriptionType,
  SystemMessageType,
  VideoExtractionStatus,
  VideoExtractionType,
  WebExperienceSamplePromptsControlMode,
  WebExperienceStatus,
} from "./enums";

/**
 * Provides information about a group associated with the principal.
 *
 * @public
 */
export interface PrincipalGroup {
  /**
   * The name of the group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Provides information about whether to allow or deny access to the principal.
   *
   * @public
   */
  access: ReadAccessType | undefined;

  /**
   * The type of group.
   *
   * @public
   */
  membershipType?: MembershipType | undefined;
}

/**
 * Provides information about a user associated with a principal.
 *
 * @public
 */
export interface PrincipalUser {
  /**
   * The identifier of the user.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Provides information about whether to allow or deny access to the principal.
   *
   * @public
   */
  access: ReadAccessType | undefined;

  /**
   * The type of group.
   *
   * @public
   */
  membershipType?: MembershipType | undefined;
}

/**
 * Provides user and group information used for filtering documents to use for generating Amazon Q Business conversation responses.
 *
 * @public
 */
export type Principal =
  | Principal.GroupMember
  | Principal.UserMember
  | Principal.$UnknownMember;

/**
 * @public
 */
export namespace Principal {
  /**
   * The user associated with the principal.
   *
   * @public
   */
  export interface UserMember {
    user: PrincipalUser;
    group?: never;
    $unknown?: never;
  }

  /**
   * The group associated with the principal.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    user: (value: PrincipalUser) => T;
    group: (value: PrincipalGroup) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A list of principals. Each principal can be either a `USER` or a `GROUP` and can be designated document access permissions of either `ALLOW` or `DENY`.
 *
 * @public
 */
export interface AccessControl {
  /**
   * Contains a list of principals, where a principal can be either a `USER` or a `GROUP`. Each principal can be have the following type of document access: `ALLOW` or `DENY`.
   *
   * @public
   */
  principals: Principal[] | undefined;

  /**
   * Describes the member relation within a principal list.
   *
   * @public
   */
  memberRelation?: MemberRelation | undefined;
}

/**
 * Used to configure access permissions for a document.
 *
 * @public
 */
export interface AccessConfiguration {
  /**
   * A list of `AccessControlList` objects.
   *
   * @public
   */
  accessControls: AccessControl[] | undefined;

  /**
   * Describes the member relation within the `AccessControlList` object.
   *
   * @public
   */
  memberRelation?: MemberRelation | undefined;
}

/**
 * The value of a document attribute. You can only provide one value for a document attribute.
 *
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
   * A string.
   *
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
   * A list of strings.
   *
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
   * A long integer value.
   *
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
   * A date expressed as an ISO 8601 string.
   *
   * It's important for the time zone to be included in the ISO 8601 date-time format. For example, 2012-03-25T12:30:10+01:00 is the ISO 8601 date-time format for March 25th 2012 at 12:30PM (plus 10 seconds) in Central European Time.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValue: (value: string) => T;
    stringListValue: (value: string[]) => T;
    longValue: (value: number) => T;
    dateValue: (value: Date) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A document attribute or metadata field.
 *
 * @public
 */
export interface DocumentAttribute {
  /**
   * The identifier for the attribute.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The value of the attribute.
   *
   * @public
   */
  value: DocumentAttributeValue | undefined;
}

/**
 * A user input field in an plugin action execution payload.
 *
 * @public
 */
export interface ActionExecutionPayloadField {
  /**
   * The content of a user input field in an plugin action execution payload.
   *
   * @public
   */
  value: __DocumentType | undefined;
}

/**
 * Performs an Amazon Q Business plugin action during a non-streaming chat conversation.
 *
 * @public
 */
export interface ActionExecution {
  /**
   * The identifier of the plugin the action is attached to.
   *
   * @public
   */
  pluginId: string | undefined;

  /**
   * A mapping of field names to the field values in input that an end user provides to Amazon Q Business requests to perform their plugin action.
   *
   * @public
   */
  payload: Record<string, ActionExecutionPayloadField> | undefined;

  /**
   * A string used to retain information about the hierarchical contexts within an action execution event payload.
   *
   * @public
   */
  payloadFieldNameSeparator: string | undefined;
}

/**
 * A request from an end user signalling an intent to perform an Amazon Q Business plugin action during a streaming chat.
 *
 * @public
 */
export interface ActionExecutionEvent {
  /**
   * The identifier of the plugin for which the action is being requested.
   *
   * @public
   */
  pluginId: string | undefined;

  /**
   * A mapping of field names to the field values in input that an end user provides to Amazon Q Business requests to perform their plugin action.
   *
   * @public
   */
  payload: Record<string, ActionExecutionPayloadField> | undefined;

  /**
   * A string used to retain information about the hierarchical contexts within a action execution event payload.
   *
   * @public
   */
  payloadFieldNameSeparator: string | undefined;
}

/**
 * Information about the field values that an end user can use to provide to Amazon Q Business for Amazon Q Business to perform the requested plugin action.
 *
 * @public
 */
export interface ActionReviewPayloadFieldAllowedValue {
  /**
   * The field value.
   *
   * @public
   */
  value?: __DocumentType | undefined;

  /**
   * The name of the field.
   *
   * @public
   */
  displayValue?: __DocumentType | undefined;
}

/**
 * A user input field in an plugin action review payload.
 *
 * @public
 */
export interface ActionReviewPayloadField {
  /**
   * The name of the field.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The display order of fields in a payload.
   *
   * @public
   */
  displayOrder?: number | undefined;

  /**
   * The field level description of each action review input field. This could be an explanation of the field. In the Amazon Q Business web experience, these descriptions could be used to display as tool tips to help users understand the field.
   *
   * @public
   */
  displayDescription?: string | undefined;

  /**
   * The type of field.
   *
   * @public
   */
  type?: ActionPayloadFieldType | undefined;

  /**
   * The field value.
   *
   * @public
   */
  value?: __DocumentType | undefined;

  /**
   * Information about the field values that an end user can use to provide to Amazon Q Business for Amazon Q Business to perform the requested plugin action.
   *
   * @public
   */
  allowedValues?: ActionReviewPayloadFieldAllowedValue[] | undefined;

  /**
   * The expected data format for the action review input field value. For example, in PTO request, `from` and `to` would be of `datetime` allowed format.
   *
   * @public
   */
  allowedFormat?: string | undefined;

  /**
   * Use to create a custom form with array fields (fields with nested objects inside an array).
   *
   * @public
   */
  arrayItemJsonSchema?: __DocumentType | undefined;

  /**
   * Information about whether the field is required.
   *
   * @public
   */
  required?: boolean | undefined;
}

/**
 * An output event that Amazon Q Business returns to an user who wants to perform a plugin action during a non-streaming chat conversation. It contains information about the selected action with a list of possible user input fields, some pre-populated by Amazon Q Business.
 *
 * @public
 */
export interface ActionReview {
  /**
   * The identifier of the plugin associated with the action review.
   *
   * @public
   */
  pluginId?: string | undefined;

  /**
   * The type of plugin.
   *
   * @public
   */
  pluginType?: PluginType | undefined;

  /**
   * Field values that an end user needs to provide to Amazon Q Business for Amazon Q Business to perform the requested plugin action.
   *
   * @public
   */
  payload?: Record<string, ActionReviewPayloadField> | undefined;

  /**
   * A string used to retain information about the hierarchical contexts within an action review payload.
   *
   * @public
   */
  payloadFieldNameSeparator?: string | undefined;
}

/**
 * An output event that Amazon Q Business returns to an user who wants to perform a plugin action during a streaming chat conversation. It contains information about the selected action with a list of possible user input fields, some pre-populated by Amazon Q Business.
 *
 * @public
 */
export interface ActionReviewEvent {
  /**
   * The identifier of the conversation with which the action review event is associated.
   *
   * @public
   */
  conversationId?: string | undefined;

  /**
   * The identifier of the conversation with which the plugin action is associated.
   *
   * @public
   */
  userMessageId?: string | undefined;

  /**
   * The identifier of an Amazon Q Business AI generated associated with the action review event.
   *
   * @public
   */
  systemMessageId?: string | undefined;

  /**
   * The identifier of the plugin associated with the action review event.
   *
   * @public
   */
  pluginId?: string | undefined;

  /**
   * The type of plugin.
   *
   * @public
   */
  pluginType?: PluginType | undefined;

  /**
   * Field values that an end user needs to provide to Amazon Q Business for Amazon Q Business to perform the requested plugin action.
   *
   * @public
   */
  payload?: Record<string, ActionReviewPayloadField> | undefined;

  /**
   * A string used to retain information about the hierarchical contexts within an action review event payload.
   *
   * @public
   */
  payloadFieldNameSeparator?: string | undefined;
}

/**
 * Summary information for an Amazon Q Business plugin action.
 *
 * @public
 */
export interface ActionSummary {
  /**
   * The identifier of an Amazon Q Business plugin action.
   *
   * @public
   */
  actionIdentifier?: string | undefined;

  /**
   * The display name assigned by Amazon Q Business to a plugin action. You can't modify this value.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * An Amazon Q Business suggested prompt and end user can use to invoke a plugin action. This value can be modified and sent as input to initiate an action. For example:
   *
   * - Create a Jira task
   * - Create a chat assistant task to find the root cause of a specific incident
   *
   * @public
   */
  instructionExample?: string | undefined;

  /**
   * The description of an Amazon Q Business plugin action.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Information required for Amazon Q Business to find a specific file in an Amazon S3 bucket.
 *
 * @public
 */
export interface S3 {
  /**
   * The name of the S3 bucket that contains the file.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The name of the file.
   *
   * @public
   */
  key: string | undefined;
}

/**
 * Contains details about the OpenAPI schema for a custom plugin. For more information, see [custom plugin OpenAPI schemas](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/custom-plugin.html#plugins-api-schema). You can either include the schema directly in the payload field or you can upload it to an S3 bucket and specify the S3 bucket location in the `s3` field.
 *
 * @public
 */
export type APISchema =
  | APISchema.PayloadMember
  | APISchema.S3Member
  | APISchema.$UnknownMember;

/**
 * @public
 */
export namespace APISchema {
  /**
   * The JSON or YAML-formatted payload defining the OpenAPI schema for a custom plugin.
   *
   * @public
   */
  export interface PayloadMember {
    payload: string;
    s3?: never;
    $unknown?: never;
  }

  /**
   * Contains details about the S3 object containing the OpenAPI schema for a custom plugin. The schema could be in either JSON or YAML format.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    payload: (value: string) => T;
    s3: (value: S3) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The Amazon Quick Suite configuration for an Amazon Q Business application that uses Quick Suite as the identity provider. For more information, see [Creating an Amazon Quick Suite integrated application](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/create-quicksight-integrated-application.html).
 *
 * @public
 */
export interface QuickSightConfiguration {
  /**
   * The Amazon Quick Suite namespace that is used as the identity provider. For more information about Quick Suite namespaces, see [Namespace operations](https://docs.aws.amazon.com/quicksight/latest/developerguide/namespace-operations.html).
   *
   * @public
   */
  clientNamespace: string | undefined;
}

/**
 * Summary information for an Amazon Q Business application.
 *
 * @public
 */
export interface Application {
  /**
   * The name of the Amazon Q Business application.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The identifier for the Amazon Q Business application.
   *
   * @public
   */
  applicationId?: string | undefined;

  /**
   * The Unix timestamp when the Amazon Q Business application was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp when the Amazon Q Business application was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The status of the Amazon Q Business application. The application is ready to use when the status is `ACTIVE`.
   *
   * @public
   */
  status?: ApplicationStatus | undefined;

  /**
   * The authentication type being used by a Amazon Q Business application.
   *
   * @public
   */
  identityType?: IdentityType | undefined;

  /**
   * The Amazon Quick Suite configuration for an Amazon Q Business application that uses Quick Suite as the identity provider.
   *
   * @public
   */
  quickSightConfiguration?: QuickSightConfiguration | undefined;
}

/**
 * Configuration information for the file upload during chat feature.
 *
 * @public
 */
export interface AttachmentsConfiguration {
  /**
   * Status information about whether file upload functionality is activated or deactivated for your end user.
   *
   * @public
   */
  attachmentsControlMode: AttachmentsControlMode | undefined;
}

/**
 * Provides the identifier of the KMS key used to encrypt data indexed by Amazon Q Business. Amazon Q Business doesn't support asymmetric keys.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * The identifier of the KMS key. Amazon Q Business doesn't support asymmetric keys.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * Configuration information about chat response personalization. For more information, see [Personalizing chat responses](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/personalizing-chat-responses.html).
 *
 * @public
 */
export interface PersonalizationConfiguration {
  /**
   * An option to allow Amazon Q Business to customize chat responses using user specific metadata—specifically, location and job information—in your IAM Identity Center instance.
   *
   * @public
   */
  personalizationControlMode: PersonalizationControlMode | undefined;
}

/**
 * Configuration information about Amazon Q Apps.
 *
 * @public
 */
export interface QAppsConfiguration {
  /**
   * Status information about whether end users can create and use Amazon Q Apps in the web experience.
   *
   * @public
   */
  qAppsControlMode: QAppsControlMode | undefined;
}

/**
 * A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
 *
 * @public
 */
export interface Tag {
  /**
   * The key for the tag. Keys are not case sensitive and must be unique for the Amazon Q Business application or data source.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value associated with the tag. The value may be an empty string but it can't be null.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * A name for the Amazon Q Business application.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role with permissions to access your Amazon CloudWatch logs and metrics. If this property is not specified, Amazon Q Business will create a [service linked role (SLR)](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/using-service-linked-roles.html#slr-permissions) and use it as the application's role.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The authentication type being used by a Amazon Q Business application.
   *
   * @public
   */
  identityType?: IdentityType | undefined;

  /**
   * The Amazon Resource Name (ARN) of an identity provider being used by an Amazon Q Business application.
   *
   * @public
   */
  iamIdentityProviderArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM Identity Center instance you are either creating for—or connecting to—your Amazon Q Business application.
   *
   * @public
   */
  identityCenterInstanceArn?: string | undefined;

  /**
   * The OIDC client ID for a Amazon Q Business application.
   *
   * @public
   */
  clientIdsForOIDC?: string[] | undefined;

  /**
   * A description for the Amazon Q Business application.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier of the KMS key that is used to encrypt your data. Amazon Q Business doesn't support asymmetric keys.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * A list of key-value pairs that identify or categorize your Amazon Q Business application. You can also use tags to help control access to the application. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A token that you provide to identify the request to create your Amazon Q Business application.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * An option to allow end users to upload files directly during chat.
   *
   * @public
   */
  attachmentsConfiguration?: AttachmentsConfiguration | undefined;

  /**
   * An option to allow end users to create and use Amazon Q Apps in the web experience.
   *
   * @public
   */
  qAppsConfiguration?: QAppsConfiguration | undefined;

  /**
   * Configuration information about chat response personalization. For more information, see [Personalizing chat responses](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/personalizing-chat-responses.html)
   *
   * @public
   */
  personalizationConfiguration?: PersonalizationConfiguration | undefined;

  /**
   * The Amazon Quick Suite configuration for an Amazon Q Business application that uses Quick Suite for authentication. This configuration is required if your application uses Quick Suite as the identity provider. For more information, see [Creating an Amazon Quick Suite integrated application](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/create-quicksight-integrated-application.html).
   *
   * @public
   */
  quickSightConfiguration?: QuickSightConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * The identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q Business application.
   *
   * @public
   */
  applicationArn?: string | undefined;
}

/**
 * The input failed to meet the constraints specified by Amazon Q Business in a specified field.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The field name where the invalid entry was detected.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message about the validation exception.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Configuration details for IAM Identity Center Trusted Token Issuer (TTI) authentication.
 *
 * @public
 */
export interface DataAccessorIdcTrustedTokenIssuerConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the IAM Identity Center Trusted Token Issuer that will be used for authentication.
   *
   * @public
   */
  idcTrustedTokenIssuerArn: string | undefined;
}

/**
 * A union type that contains the specific authentication configuration based on the authentication type selected.
 *
 * @public
 */
export type DataAccessorAuthenticationConfiguration =
  | DataAccessorAuthenticationConfiguration.IdcTrustedTokenIssuerConfigurationMember
  | DataAccessorAuthenticationConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace DataAccessorAuthenticationConfiguration {
  /**
   * Configuration for IAM Identity Center Trusted Token Issuer (TTI) authentication used when the authentication type is `AWS_IAM_IDC_TTI`.
   *
   * @public
   */
  export interface IdcTrustedTokenIssuerConfigurationMember {
    idcTrustedTokenIssuerConfiguration: DataAccessorIdcTrustedTokenIssuerConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    idcTrustedTokenIssuerConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    idcTrustedTokenIssuerConfiguration: (value: DataAccessorIdcTrustedTokenIssuerConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the authentication configuration details for a data accessor. This structure defines how the ISV authenticates when accessing data through the data accessor.
 *
 * @public
 */
export interface DataAccessorAuthenticationDetail {
  /**
   * The type of authentication to use for the data accessor. This determines how the ISV authenticates when accessing data. You can use one of two authentication types:
   *
   * - `AWS_IAM_IDC_TTI` - Authentication using IAM Identity Center Trusted Token Issuer (TTI). This authentication type allows the ISV to use a trusted token issuer to generate tokens for accessing the data.
   * - `AWS_IAM_IDC_AUTH_CODE` - Authentication using IAM Identity Center authorization code flow. This authentication type uses the standard OAuth 2.0 authorization code flow for authentication.
   *
   * @public
   */
  authenticationType: DataAccessorAuthenticationType | undefined;

  /**
   * The specific authentication configuration based on the authentication type.
   *
   * @public
   */
  authenticationConfiguration?: DataAccessorAuthenticationConfiguration | undefined;

  /**
   * A list of external identifiers associated with this authentication configuration. These are used to correlate the data accessor with external systems.
   *
   * @public
   */
  externalIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDataAccessorResponse {
  /**
   * The unique identifier of the created data accessor.
   *
   * @public
   */
  dataAccessorId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM Identity Center application created for this data accessor.
   *
   * @public
   */
  idcApplicationArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created data accessor.
   *
   * @public
   */
  dataAccessorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataAccessorRequest {
  /**
   * The unique identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The unique identifier of the data accessor to delete.
   *
   * @public
   */
  dataAccessorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataAccessorResponse {}

/**
 * @public
 */
export interface GetDataAccessorRequest {
  /**
   * The unique identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The unique identifier of the data accessor to retrieve.
   *
   * @public
   */
  dataAccessorId: string | undefined;
}

/**
 * @public
 */
export interface ListDataAccessorsRequest {
  /**
   * The unique identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The token for the next set of results. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides summary information about a data accessor.
 *
 * @public
 */
export interface DataAccessor {
  /**
   * The friendly name of the data accessor.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The unique identifier of the data accessor.
   *
   * @public
   */
  dataAccessorId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the data accessor.
   *
   * @public
   */
  dataAccessorArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the associated IAM Identity Center application.
   *
   * @public
   */
  idcApplicationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role for the ISV associated with this data accessor.
   *
   * @public
   */
  principal?: string | undefined;

  /**
   * The authentication configuration details for the data accessor. This specifies how the ISV authenticates when accessing data through this data accessor.
   *
   * @public
   */
  authenticationDetail?: DataAccessorAuthenticationDetail | undefined;

  /**
   * The timestamp when the data accessor was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the data accessor was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataAccessorsResponse {
  /**
   * The list of data accessors.
   *
   * @public
   */
  dataAccessors?: DataAccessor[] | undefined;

  /**
   * The token to use to retrieve the next set of results, if there are any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataAccessorResponse {}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * The identifier of the Amazon Q Business application.
   *
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
   * The identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;
}

/**
 * Configuration information about the file upload during chat feature for your application.
 *
 * @public
 */
export interface AppliedAttachmentsConfiguration {
  /**
   * Information about whether file upload during chat functionality is activated for your application.
   *
   * @public
   */
  attachmentsControlMode?: AttachmentsControlMode | undefined;
}

/**
 * Subscription configuration information for an Amazon Q Business application using IAM identity federation for user management.
 *
 * @public
 */
export interface AutoSubscriptionConfiguration {
  /**
   * Describes whether automatic subscriptions are enabled for an Amazon Q Business application using IAM identity federation for user management.
   *
   * @public
   */
  autoSubscribe: AutoSubscriptionStatus | undefined;

  /**
   * Describes the default subscription type assigned to an Amazon Q Business application using IAM identity federation for user management. If the value for `autoSubscribe` is set to `ENABLED` you must select a value for this field.
   *
   * @public
   */
  defaultSubscriptionType?: SubscriptionType | undefined;
}

/**
 * Provides information about a Amazon Q Business request error.
 *
 * @public
 */
export interface ErrorDetail {
  /**
   * The message explaining the Amazon Q Business request error.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The code associated with the Amazon Q Business request error.
   *
   * @public
   */
  errorCode?: ErrorCode | undefined;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * The name of the Amazon Q Business application.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q Business application.
   *
   * @public
   */
  applicationArn?: string | undefined;

  /**
   * The authentication type being used by a Amazon Q Business application.
   *
   * @public
   */
  identityType?: IdentityType | undefined;

  /**
   * The Amazon Resource Name (ARN) of an identity provider being used by an Amazon Q Business application.
   *
   * @public
   */
  iamIdentityProviderArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS IAM Identity Center instance attached to your Amazon Q Business application.
   *
   * @public
   */
  identityCenterApplicationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM with permissions to access your CloudWatch logs and metrics.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The status of the Amazon Q Business application.
   *
   * @public
   */
  status?: ApplicationStatus | undefined;

  /**
   * A description for the Amazon Q Business application.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier of the Amazon Web Services KMS key that is used to encrypt your data. Amazon Q Business doesn't support asymmetric keys.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The Unix timestamp when the Amazon Q Business application was last updated.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp when the Amazon Q Business application was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * If the `Status` field is set to `ERROR`, the `ErrorMessage` field contains a description of the error that caused the synchronization to fail.
   *
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * Settings for whether end users can upload files directly during chat.
   *
   * @public
   */
  attachmentsConfiguration?: AppliedAttachmentsConfiguration | undefined;

  /**
   * Settings for whether end users can create and use Amazon Q Apps in the web experience.
   *
   * @public
   */
  qAppsConfiguration?: QAppsConfiguration | undefined;

  /**
   * Configuration information about chat response personalization. For more information, see [Personalizing chat responses](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/personalizing-chat-responses.html).
   *
   * @public
   */
  personalizationConfiguration?: PersonalizationConfiguration | undefined;

  /**
   * Settings for auto-subscription behavior for this application. This is only applicable to SAML and OIDC applications.
   *
   * @public
   */
  autoSubscriptionConfiguration?: AutoSubscriptionConfiguration | undefined;

  /**
   * The OIDC client ID for a Amazon Q Business application.
   *
   * @public
   */
  clientIdsForOIDC?: string[] | undefined;

  /**
   * The Amazon Quick Suite authentication configuration for the Amazon Q Business application.
   *
   * @public
   */
  quickSightConfiguration?: QuickSightConfiguration | undefined;
}

/**
 * Provides information about index capacity configuration.
 *
 * @public
 */
export interface IndexCapacityConfiguration {
  /**
   * The number of storage units configured for an Amazon Q Business index.
   *
   * @public
   */
  units?: number | undefined;
}

/**
 * @public
 */
export interface CreateIndexRequest {
  /**
   * The identifier of the Amazon Q Business application using the index.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * A name for the Amazon Q Business index.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * A description for the Amazon Q Business index.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The index type that's suitable for your needs. For more information on what's included in each type of index, see [Amazon Q Business tiers](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/tiers.html#index-tiers).
   *
   * @public
   */
  type?: IndexType | undefined;

  /**
   * A list of key-value pairs that identify or categorize the index. You can also use tags to help control access to the index. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The capacity units you want to provision for your index. You can add and remove capacity to fit your usage needs.
   *
   * @public
   */
  capacityConfiguration?: IndexCapacityConfiguration | undefined;

  /**
   * A token that you provide to identify the request to create an index. Multiple calls to the `CreateIndex` API with the same client token will create only one index.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateIndexResponse {
  /**
   * The identifier for the Amazon Q Business index.
   *
   * @public
   */
  indexId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Amazon Q Business index.
   *
   * @public
   */
  indexArn?: string | undefined;
}

/**
 * The condition used for the target document attribute or metadata field when ingesting documents into Amazon Q Business. You use this with [`DocumentAttributeTarget`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeTarget.html) to apply the condition.
 *
 * For example, you can create the 'Department' target field and have it prefill department names associated with the documents based on information in the 'Source_URI' field. Set the condition that if the 'Source_URI' field contains 'financial' in its URI value, then prefill the target field 'Department' with the target value 'Finance' for the document.
 *
 * Amazon Q Business can't create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using `DocumentAttributeTarget`. Amazon Q Business then will map your newly created metadata field to your index field.
 *
 * @public
 */
export interface DocumentAttributeCondition {
  /**
   * The identifier of the document attribute used for the condition.
   *
   * For example, 'Source_URI' could be an identifier for the attribute or metadata field that contains source URIs associated with the documents.
   *
   * Amazon Q Business currently doesn't support `_document_body` as an attribute key used for the condition.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The identifier of the document attribute used for the condition.
   *
   * For example, 'Source_URI' could be an identifier for the attribute or metadata field that contains source URIs associated with the documents.
   *
   * Amazon Q Business currently does not support `_document_body` as an attribute key used for the condition.
   *
   * @public
   */
  operator: DocumentEnrichmentConditionOperator | undefined;

  /**
   * The value of a document attribute. You can only provide one value for a document attribute.
   *
   * @public
   */
  value?: DocumentAttributeValue | undefined;
}

/**
 * The target document attribute or metadata field you want to alter when ingesting documents into Amazon Q Business.
 *
 * For example, you can delete all customer identification numbers associated with the documents, stored in the document metadata field called 'Customer_ID' by setting the target key as 'Customer_ID' and the deletion flag to `TRUE`. This removes all customer ID values in the field 'Customer_ID'. This would scrub personally identifiable information from each document's metadata.
 *
 * Amazon Q Business can't create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using [`DocumentAttributeTarget`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeTarget.html). Amazon Q Business will then map your newly created document attribute to your index field.
 *
 * You can also use this with [`DocumentAttributeCondition`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeCondition.html).
 *
 * @public
 */
export interface DocumentAttributeTarget {
  /**
   * The identifier of the target document attribute or metadata field. For example, 'Department' could be an identifier for the target attribute or metadata field that includes the department names associated with the documents.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of a document attribute. You can only provide one value for a document attribute.
   *
   * @public
   */
  value?: DocumentAttributeValue | undefined;

  /**
   * `TRUE` to delete the existing target value for your specified target attribute key. You cannot create a target value and set this to `TRUE`.
   *
   * @public
   */
  attributeValueOperator?: AttributeValueOperator | undefined;
}

/**
 * Provides the configuration information for applying basic logic to alter document metadata and content when ingesting documents into Amazon Q Business.
 *
 * To apply advanced logic, to go beyond what you can do with basic logic, see [`HookConfiguration`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_HookConfiguration.html).
 *
 * For more information, see [Custom document enrichment](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html).
 *
 * @public
 */
export interface InlineDocumentEnrichmentConfiguration {
  /**
   * The condition used for the target document attribute or metadata field when ingesting documents into Amazon Q Business. You use this with [`DocumentAttributeTarget`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeTarget.html) to apply the condition.
   *
   * For example, you can create the 'Department' target field and have it prefill department names associated with the documents based on information in the 'Source_URI' field. Set the condition that if the 'Source_URI' field contains 'financial' in its URI value, then prefill the target field 'Department' with the target value 'Finance' for the document.
   *
   * Amazon Q Business can't create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using `DocumentAttributeTarget`. Amazon Q Business then will map your newly created metadata field to your index field.
   *
   * @public
   */
  condition?: DocumentAttributeCondition | undefined;

  /**
   * The target document attribute or metadata field you want to alter when ingesting documents into Amazon Q Business.
   *
   * For example, you can delete all customer identification numbers associated with the documents, stored in the document metadata field called 'Customer_ID' by setting the target key as 'Customer_ID' and the deletion flag to `TRUE`. This removes all customer ID values in the field 'Customer_ID'. This would scrub personally identifiable information from each document's metadata.
   *
   * Amazon Q Business can't create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using [`DocumentAttributeTarget`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeTarget.html). Amazon Q Business will then map your newly created document attribute to your index field.
   *
   * You can also use this with [`DocumentAttributeCondition`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeCondition.html).
   *
   * @public
   */
  target?: DocumentAttributeTarget | undefined;

  /**
   * `TRUE` to delete content if the condition used for the target attribute is met.
   *
   * @public
   */
  documentContentOperator?: DocumentContentOperator | undefined;
}

/**
 * Provides the configuration information for invoking a Lambda function in Lambda to alter document metadata and content when ingesting documents into Amazon Q Business.
 *
 * You can configure your Lambda function using the `PreExtractionHookConfiguration` parameter if you want to apply advanced alterations on the original or raw documents.
 *
 * If you want to apply advanced alterations on the Amazon Q Business structured documents, you must configure your Lambda function using `PostExtractionHookConfiguration`.
 *
 * You can only invoke one Lambda function. However, this function can invoke other functions it requires.
 *
 * For more information, see [Custom document enrichment](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html).
 *
 * @public
 */
export interface HookConfiguration {
  /**
   * The condition used for when a Lambda function should be invoked.
   *
   * For example, you can specify a condition that if there are empty date-time values, then Amazon Q Business should invoke a function that inserts the current date-time.
   *
   * @public
   */
  invocationCondition?: DocumentAttributeCondition | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function during ingestion. For more information, see [Using Lambda functions for Amazon Q Business document enrichment](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/cde-lambda-operations.html).
   *
   * @public
   */
  lambdaArn?: string | undefined;

  /**
   * Stores the original, raw documents or the structured, parsed documents before and after altering them. For more information, see [Data contracts for Lambda functions](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/cde-lambda-operations.html#cde-lambda-operations-data-contracts).
   *
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a role with permission to run `PreExtractionHookConfiguration` and `PostExtractionHookConfiguration` for altering document metadata and content during the document ingestion process.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * Provides the configuration information for altering document metadata and content during the document ingestion process.
 *
 * For more information, see [Custom document enrichment](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html).
 *
 * @public
 */
export interface DocumentEnrichmentConfiguration {
  /**
   * Configuration information to alter document attributes or metadata fields and content when ingesting documents into Amazon Q Business.
   *
   * @public
   */
  inlineConfigurations?: InlineDocumentEnrichmentConfiguration[] | undefined;

  /**
   * Provides the configuration information for invoking a Lambda function in Lambda to alter document metadata and content when ingesting documents into Amazon Q Business.
   *
   * You can configure your Lambda function using the `PreExtractionHookConfiguration` parameter if you want to apply advanced alterations on the original or raw documents.
   *
   * If you want to apply advanced alterations on the Amazon Q Business structured documents, you must configure your Lambda function using `PostExtractionHookConfiguration`.
   *
   * You can only invoke one Lambda function. However, this function can invoke other functions it requires.
   *
   * For more information, see [Custom document enrichment](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html).
   *
   * @public
   */
  preExtractionHookConfiguration?: HookConfiguration | undefined;

  /**
   * Provides the configuration information for invoking a Lambda function in Lambda to alter document metadata and content when ingesting documents into Amazon Q Business.
   *
   * You can configure your Lambda function using the `PreExtractionHookConfiguration` parameter if you want to apply advanced alterations on the original or raw documents.
   *
   * If you want to apply advanced alterations on the Amazon Q Business structured documents, you must configure your Lambda function using `PostExtractionHookConfiguration`.
   *
   * You can only invoke one Lambda function. However, this function can invoke other functions it requires.
   *
   * For more information, see [Custom document enrichment](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html).
   *
   * @public
   */
  postExtractionHookConfiguration?: HookConfiguration | undefined;
}

/**
 * Configuration settings for audio content extraction and processing.
 *
 * @public
 */
export interface AudioExtractionConfiguration {
  /**
   * The status of audio extraction (ENABLED or DISABLED) for processing audio content from files.
   *
   * @public
   */
  audioExtractionStatus: AudioExtractionStatus | undefined;
}

/**
 * The configuration for extracting semantic meaning from images in documents. For more information, see [Extracting semantic meaning from images and visuals](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/extracting-meaning-from-images.html).
 *
 * @public
 */
export interface ImageExtractionConfiguration {
  /**
   * Specify whether to extract semantic meaning from images and visuals from documents.
   *
   * @public
   */
  imageExtractionStatus: ImageExtractionStatus | undefined;
}

/**
 * Configuration settings for video content extraction and processing.
 *
 * @public
 */
export interface VideoExtractionConfiguration {
  /**
   * The status of video extraction (ENABLED or DISABLED) for processing video content from files.
   *
   * @public
   */
  videoExtractionStatus: VideoExtractionStatus | undefined;
}

/**
 * The configuration for extracting information from media in documents.
 *
 * @public
 */
export interface MediaExtractionConfiguration {
  /**
   * The configuration for extracting semantic meaning from images in documents. For more information, see [Extracting semantic meaning from images and visuals](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/extracting-meaning-from-images.html).
   *
   * @public
   */
  imageExtractionConfiguration?: ImageExtractionConfiguration | undefined;

  /**
   * Configuration settings for extracting and processing audio content from media files.
   *
   * @public
   */
  audioExtractionConfiguration?: AudioExtractionConfiguration | undefined;

  /**
   * Configuration settings for extracting and processing video content from media files.
   *
   * @public
   */
  videoExtractionConfiguration?: VideoExtractionConfiguration | undefined;
}

/**
 * Provides configuration information needed to connect to an Amazon VPC (Virtual Private Cloud).
 *
 * @public
 */
export interface DataSourceVpcConfiguration {
  /**
   * A list of identifiers for subnets within your Amazon VPC. The subnets should be able to connect to each other in the VPC, and they should have outgoing access to the Internet through a NAT device.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * A list of identifiers of security groups within your Amazon VPC. The security groups should enable Amazon Q Business to connect to the data source.
   *
   * @public
   */
  securityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceRequest {
  /**
   * The identifier of the Amazon Q Business application the data source will be attached to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the index that you want to use with the data source connector.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * A name for the data source connector.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * Configuration information to connect your data source repository to Amazon Q Business. Use this parameter to provide a JSON schema with configuration information specific to your data source connector.
   *
   * Each data source has a JSON schema provided by Amazon Q Business that you must use. For example, the Amazon S3 and Web Crawler connectors require the following JSON schemas:
   *
   * - [Amazon S3 JSON schema](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/s3-api.html)
   * - [Web Crawler JSON schema](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/web-crawler-api.html)
   *
   * You can find configuration templates for your specific data source using the following steps:
   *
   * 1. Navigate to the [Supported connectors](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/connectors-list.html) page in the Amazon Q Business User Guide, and select the data source of your choice.
   * 2. Then, from your specific data source connector page, select **Using the API**. You will find the JSON schema for your data source, including parameter descriptions, in this section.
   *
   * @public
   */
  configuration: __DocumentType | undefined;

  /**
   * Configuration information for an Amazon VPC (Virtual Private Cloud) to connect to your data source. For more information, see [Using Amazon VPC with Amazon Q Business connectors](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/connector-vpc.html).
   *
   * @public
   */
  vpcConfiguration?: DataSourceVpcConfiguration | undefined;

  /**
   * A description for the data source connector.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of key-value pairs that identify or categorize the data source connector. You can also use tags to help control access to the data source connector. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Sets the frequency for Amazon Q Business to check the documents in your data source repository and update your index. If you don't set a schedule, Amazon Q Business won't periodically update the index.
   *
   * Specify a `cron-` format schedule string or an empty string to indicate that the index is updated on demand. You can't specify the `Schedule` parameter when the `Type` parameter is set to `CUSTOM`. If you do, you receive a `ValidationException` exception.
   *
   * @public
   */
  syncSchedule?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role with permission to access the data source and required resources. This field is required for all connector types except custom connectors, where it is optional.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * A token you provide to identify a request to create a data source connector. Multiple calls to the `CreateDataSource` API with the same client token will create only one data source connector.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Provides the configuration information for altering document metadata and content during the document ingestion process.
   *
   * For more information, see [Custom document enrichment](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html).
   *
   * @public
   */
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration | undefined;

  /**
   * The configuration for extracting information from media in documents during ingestion.
   *
   * @public
   */
  mediaExtractionConfiguration?: MediaExtractionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceResponse {
  /**
   * The identifier of the data source connector.
   *
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a data source in an Amazon Q Business application.
   *
   * @public
   */
  dataSourceArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceRequest {
  /**
   * The identifier of the Amazon Q Business application used with the data source connector.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the index used with the data source connector.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * The identifier of the data source connector that you want to delete.
   *
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
   * The identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identfier of the index used with the data source connector.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * The identifier of the data source connector.
   *
   * @public
   */
  dataSourceId: string | undefined;
}

/**
 * @public
 */
export interface GetDataSourceResponse {
  /**
   * The identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId?: string | undefined;

  /**
   * The identifier of the index linked to the data source connector.
   *
   * @public
   */
  indexId?: string | undefined;

  /**
   * The identifier of the data source connector.
   *
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the data source.
   *
   * @public
   */
  dataSourceArn?: string | undefined;

  /**
   * The name for the data source connector.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The type of the data source connector. For example, `S3`.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The details of how the data source connector is configured.
   *
   * @public
   */
  configuration?: __DocumentType | undefined;

  /**
   * Configuration information for an Amazon VPC (Virtual Private Cloud) to connect to your data source.
   *
   * @public
   */
  vpcConfiguration?: DataSourceVpcConfiguration | undefined;

  /**
   * The Unix timestamp when the data source connector was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp when the data source connector was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The description for the data source connector.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current status of the data source connector. When the `Status` field value is `FAILED`, the `ErrorMessage` field contains a description of the error that caused the data source connector to fail.
   *
   * @public
   */
  status?: DataSourceStatus | undefined;

  /**
   * The schedule for Amazon Q Business to update the index.
   *
   * @public
   */
  syncSchedule?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role with permission to access the data source and required resources.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * When the `Status` field value is `FAILED`, the `ErrorMessage` field contains a description of the error that caused the data source connector to fail.
   *
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * Provides the configuration information for altering document metadata and content during the document ingestion process.
   *
   * For more information, see [Custom document enrichment](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html).
   *
   * @public
   */
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration | undefined;

  /**
   * The configuration for extracting information from media in documents for the data source.
   *
   * @public
   */
  mediaExtractionConfiguration?: MediaExtractionConfiguration | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesRequest {
  /**
   * The identifier of the Amazon Q Business application linked to the data source connectors.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the index used with one or more data source connectors.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * If the `maxResults` response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business data source connectors.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of data source connectors to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A data source in an Amazon Q Business application.
 *
 * @public
 */
export interface DataSource {
  /**
   * The name of the Amazon Q Business data source.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The identifier of the Amazon Q Business data source.
   *
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * The type of the Amazon Q Business data source.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The Unix timestamp when the Amazon Q Business data source was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp when the Amazon Q Business data source was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The status of the Amazon Q Business data source.
   *
   * @public
   */
  status?: DataSourceStatus | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * An array of summary information for one or more data source connector.
   *
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * If the response is truncated, Amazon Q Business returns this token. You can use this token in a subsequent request to retrieve the next set of data source connectors.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceRequest {
  /**
   * The identifier of the Amazon Q Business application the data source is attached to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the index attached to the data source connector.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * The identifier of the data source connector.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * A name of the data source connector.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * Provides the configuration information for an Amazon Q Business data source.
   *
   * @public
   */
  configuration?: __DocumentType | undefined;

  /**
   * Provides configuration information needed to connect to an Amazon VPC (Virtual Private Cloud).
   *
   * @public
   */
  vpcConfiguration?: DataSourceVpcConfiguration | undefined;

  /**
   * The description of the data source connector.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The chosen update frequency for your data source.
   *
   * @public
   */
  syncSchedule?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role with permission to access the data source and required resources.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Provides the configuration information for altering document metadata and content during the document ingestion process.
   *
   * For more information, see [Custom document enrichment](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html).
   *
   * @public
   */
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration | undefined;

  /**
   * The configuration for extracting information from media in documents for your data source.
   *
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
   * The identifier of the Amazon Q Business application the Amazon Q Business index is linked to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the Amazon Q Business index.
   *
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
   * The identifier of the Amazon Q Business application connected to the index.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the Amazon Q Business index you want information on.
   *
   * @public
   */
  indexId: string | undefined;
}

/**
 * Configuration information for document attributes. Document attributes are metadata or fields associated with your documents. For example, the company department name associated with each document.
 *
 * For more information, see [Understanding document attributes](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/doc-attributes.html).
 *
 * @public
 */
export interface DocumentAttributeConfiguration {
  /**
   * The name of the document attribute.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of document attribute.
   *
   * @public
   */
  type?: AttributeType | undefined;

  /**
   * Information about whether the document attribute can be used by an end user to search for information on their web experience.
   *
   * @public
   */
  search?: Status | undefined;
}

/**
 * Provides information about text documents in an index.
 *
 * @public
 */
export interface TextDocumentStatistics {
  /**
   * The total size, in bytes, of the indexed documents.
   *
   * @public
   */
  indexedTextBytes?: number | undefined;

  /**
   * The number of text documents indexed.
   *
   * @public
   */
  indexedTextDocumentCount?: number | undefined;
}

/**
 * Provides information about the number of documents in an index.
 *
 * @public
 */
export interface IndexStatistics {
  /**
   * The number of documents indexed.
   *
   * @public
   */
  textDocumentStatistics?: TextDocumentStatistics | undefined;
}

/**
 * @public
 */
export interface GetIndexResponse {
  /**
   * The identifier of the Amazon Q Business application associated with the index.
   *
   * @public
   */
  applicationId?: string | undefined;

  /**
   * The identifier of the Amazon Q Business index.
   *
   * @public
   */
  indexId?: string | undefined;

  /**
   * The name of the Amazon Q Business index.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q Business index.
   *
   * @public
   */
  indexArn?: string | undefined;

  /**
   * The current status of the index. When the value is `ACTIVE`, the index is ready for use. If the `Status` field value is `FAILED`, the `ErrorMessage` field contains a message that explains why.
   *
   * @public
   */
  status?: IndexStatus | undefined;

  /**
   * The type of index attached to your Amazon Q Business application.
   *
   * @public
   */
  type?: IndexType | undefined;

  /**
   * The description for the Amazon Q Business index.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Unix timestamp when the Amazon Q Business index was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp when the Amazon Q Business index was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The storage capacity units chosen for your Amazon Q Business index.
   *
   * @public
   */
  capacityConfiguration?: IndexCapacityConfiguration | undefined;

  /**
   * Configuration information for document attributes or metadata. Document metadata are fields associated with your documents. For example, the company department name associated with each document. For more information, see [Understanding document attributes](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/doc-attributes-types.html#doc-attributes).
   *
   * @public
   */
  documentAttributeConfigurations?: DocumentAttributeConfiguration[] | undefined;

  /**
   * When the `Status` field value is `FAILED`, the `ErrorMessage` field contains a message that explains why.
   *
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * Provides information about the number of documents indexed.
   *
   * @public
   */
  indexStatistics?: IndexStatistics | undefined;
}

/**
 * @public
 */
export interface ListIndicesRequest {
  /**
   * The identifier of the Amazon Q Business application connected to the index.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business indices.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of indices to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information for your Amazon Q Business index.
 *
 * @public
 */
export interface Index {
  /**
   * The name of the index.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The identifier for the index.
   *
   * @public
   */
  indexId?: string | undefined;

  /**
   * The Unix timestamp when the index was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp when the index was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The current status of the index. When the status is `ACTIVE`, the index is ready.
   *
   * @public
   */
  status?: IndexStatus | undefined;
}

/**
 * @public
 */
export interface ListIndicesResponse {
  /**
   * If the response is truncated, Amazon Q Business returns this token that you can use in the subsequent request to retrieve the next set of indexes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of information on the items in one or more indexes.
   *
   * @public
   */
  indices?: Index[] | undefined;
}

/**
 * @public
 */
export interface UpdateIndexRequest {
  /**
   * The identifier of the Amazon Q Business application connected to the index.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the Amazon Q Business index.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * The name of the Amazon Q Business index.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the Amazon Q Business index.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The storage capacity units you want to provision for your Amazon Q Business index. You can add and remove capacity to fit your usage needs.
   *
   * @public
   */
  capacityConfiguration?: IndexCapacityConfiguration | undefined;

  /**
   * Configuration information for document metadata or fields. Document metadata are fields or attributes associated with your documents. For example, the company department name associated with each document. For more information, see [Understanding document attributes](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/doc-attributes-types.html#doc-attributes).
   *
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
   * If the `maxResults` response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business applications.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of Amazon Q Business applications to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * If the response is truncated, Amazon Q Business returns this token. You can use this token in a subsequent request to retrieve the next set of applications.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of summary information on the configuration of one or more Amazon Q Business applications.
   *
   * @public
   */
  applications?: Application[] | undefined;
}

/**
 * Information about the basic authentication credentials used to configure a plugin.
 *
 * @public
 */
export interface BasicAuthConfiguration {
  /**
   * The ARN of the Secrets Manager secret that stores the basic authentication credentials used for plugin configuration..
   *
   * @public
   */
  secretArn: string | undefined;

  /**
   * The ARN of an IAM role used by Amazon Q Business to access the basic authentication credentials stored in a Secrets Manager secret.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * Information about the IAM Identity Center Application used to configure authentication for a plugin.
 *
 * @public
 */
export interface IdcAuthConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the IAM Identity Center Application used to configure authentication.
   *
   * @public
   */
  idcApplicationArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role with permissions to perform actions on Amazon Web Services services on your behalf.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * Information about invoking a custom plugin without any authentication or authorization requirement.
 *
 * @public
 */
export interface NoAuthConfiguration {}

/**
 * Information about the OAuth 2.0 authentication credential/token used to configure a plugin.
 *
 * @public
 */
export interface OAuth2ClientCredentialConfiguration {
  /**
   * The ARN of the Secrets Manager secret that stores the OAuth 2.0 credentials/token used for plugin configuration.
   *
   * @public
   */
  secretArn: string | undefined;

  /**
   * The ARN of an IAM role used by Amazon Q Business to access the OAuth 2.0 authentication credentials stored in a Secrets Manager secret.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The redirect URL required by the OAuth 2.0 protocol for Amazon Q Business to authenticate a plugin user through a third party authentication server.
   *
   * @public
   */
  authorizationUrl?: string | undefined;

  /**
   * The URL required by the OAuth 2.0 protocol to exchange an end user authorization code for an access token.
   *
   * @public
   */
  tokenUrl?: string | undefined;
}

/**
 * Authentication configuration information for an Amazon Q Business plugin.
 *
 * @public
 */
export type PluginAuthConfiguration =
  | PluginAuthConfiguration.BasicAuthConfigurationMember
  | PluginAuthConfiguration.IdcAuthConfigurationMember
  | PluginAuthConfiguration.NoAuthConfigurationMember
  | PluginAuthConfiguration.OAuth2ClientCredentialConfigurationMember
  | PluginAuthConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace PluginAuthConfiguration {
  /**
   * Information about the basic authentication credentials used to configure a plugin.
   *
   * @public
   */
  export interface BasicAuthConfigurationMember {
    basicAuthConfiguration: BasicAuthConfiguration;
    oAuth2ClientCredentialConfiguration?: never;
    noAuthConfiguration?: never;
    idcAuthConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Information about the OAuth 2.0 authentication credential/token used to configure a plugin.
   *
   * @public
   */
  export interface OAuth2ClientCredentialConfigurationMember {
    basicAuthConfiguration?: never;
    oAuth2ClientCredentialConfiguration: OAuth2ClientCredentialConfiguration;
    noAuthConfiguration?: never;
    idcAuthConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Information about invoking a custom plugin without any authentication.
   *
   * @public
   */
  export interface NoAuthConfigurationMember {
    basicAuthConfiguration?: never;
    oAuth2ClientCredentialConfiguration?: never;
    noAuthConfiguration: NoAuthConfiguration;
    idcAuthConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Information about the IAM Identity Center Application used to configure authentication for a plugin.
   *
   * @public
   */
  export interface IdcAuthConfigurationMember {
    basicAuthConfiguration?: never;
    oAuth2ClientCredentialConfiguration?: never;
    noAuthConfiguration?: never;
    idcAuthConfiguration: IdcAuthConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    basicAuthConfiguration?: never;
    oAuth2ClientCredentialConfiguration?: never;
    noAuthConfiguration?: never;
    idcAuthConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    basicAuthConfiguration: (value: BasicAuthConfiguration) => T;
    oAuth2ClientCredentialConfiguration: (value: OAuth2ClientCredentialConfiguration) => T;
    noAuthConfiguration: (value: NoAuthConfiguration) => T;
    idcAuthConfiguration: (value: IdcAuthConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration information required to create a custom plugin.
 *
 * @public
 */
export interface CustomPluginConfiguration {
  /**
   * A description for your custom plugin configuration.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The type of OpenAPI schema to use.
   *
   * @public
   */
  apiSchemaType: APISchemaType | undefined;

  /**
   * Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema.
   *
   * @public
   */
  apiSchema?: APISchema | undefined;
}

/**
 * @public
 */
export interface CreatePluginRequest {
  /**
   * The identifier of the application that will contain the plugin.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * A the name for your plugin.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * The type of plugin you want to create.
   *
   * @public
   */
  type: PluginType | undefined;

  /**
   * Authentication configuration information for an Amazon Q Business plugin.
   *
   * @public
   */
  authConfiguration: PluginAuthConfiguration | undefined;

  /**
   * The source URL used for plugin configuration.
   *
   * @public
   */
  serverUrl?: string | undefined;

  /**
   * Contains configuration for a custom plugin.
   *
   * @public
   */
  customPluginConfiguration?: CustomPluginConfiguration | undefined;

  /**
   * A list of key-value pairs that identify or categorize the data source connector. You can also use tags to help control access to the data source connector. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A token that you provide to identify the request to create your Amazon Q Business plugin.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreatePluginResponse {
  /**
   * The identifier of the plugin created.
   *
   * @public
   */
  pluginId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a plugin.
   *
   * @public
   */
  pluginArn?: string | undefined;

  /**
   * The current status of a plugin. A plugin is modified asynchronously.
   *
   * @public
   */
  buildStatus?: PluginBuildStatus | undefined;
}

/**
 * @public
 */
export interface DeletePluginRequest {
  /**
   * The identifier the application attached to the Amazon Q Business plugin.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the plugin being deleted.
   *
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
   * The identifier of the application which contains the plugin.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the plugin.
   *
   * @public
   */
  pluginId: string | undefined;
}

/**
 * @public
 */
export interface GetPluginResponse {
  /**
   * The identifier of the application which contains the plugin.
   *
   * @public
   */
  applicationId?: string | undefined;

  /**
   * The identifier of the plugin.
   *
   * @public
   */
  pluginId?: string | undefined;

  /**
   * The name of the plugin.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The type of the plugin.
   *
   * @public
   */
  type?: PluginType | undefined;

  /**
   * The source URL used for plugin configuration.
   *
   * @public
   */
  serverUrl?: string | undefined;

  /**
   * Authentication configuration information for an Amazon Q Business plugin.
   *
   * @public
   */
  authConfiguration?: PluginAuthConfiguration | undefined;

  /**
   * Configuration information required to create a custom plugin.
   *
   * @public
   */
  customPluginConfiguration?: CustomPluginConfiguration | undefined;

  /**
   * The current status of a plugin. A plugin is modified asynchronously.
   *
   * @public
   */
  buildStatus?: PluginBuildStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role with permission to access resources needed to create the plugin.
   *
   * @public
   */
  pluginArn?: string | undefined;

  /**
   * The current state of the plugin.
   *
   * @public
   */
  state?: PluginState | undefined;

  /**
   * The timestamp for when the plugin was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp for when the plugin was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListPluginsRequest {
  /**
   * The identifier of the application the plugin is attached to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * If the `maxResults` response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of plugins.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of documents to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about an Amazon Q Business plugin and its configuration.
 *
 * @public
 */
export interface Plugin {
  /**
   * The identifier of the plugin.
   *
   * @public
   */
  pluginId?: string | undefined;

  /**
   * The name of the plugin.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The type of the plugin.
   *
   * @public
   */
  type?: PluginType | undefined;

  /**
   * The plugin server URL used for configuration.
   *
   * @public
   */
  serverUrl?: string | undefined;

  /**
   * The current status of the plugin.
   *
   * @public
   */
  state?: PluginState | undefined;

  /**
   * The status of the plugin.
   *
   * @public
   */
  buildStatus?: PluginBuildStatus | undefined;

  /**
   * The timestamp for when the plugin was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp for when the plugin was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListPluginsResponse {
  /**
   * If the `maxResults` response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of plugins.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Information about a configured plugin.
   *
   * @public
   */
  plugins?: Plugin[] | undefined;
}

/**
 * @public
 */
export interface UpdatePluginRequest {
  /**
   * The identifier of the application the plugin is attached to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the plugin.
   *
   * @public
   */
  pluginId: string | undefined;

  /**
   * The name of the plugin.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The status of the plugin.
   *
   * @public
   */
  state?: PluginState | undefined;

  /**
   * The source URL used for plugin configuration.
   *
   * @public
   */
  serverUrl?: string | undefined;

  /**
   * The configuration for a custom plugin.
   *
   * @public
   */
  customPluginConfiguration?: CustomPluginConfiguration | undefined;

  /**
   * The authentication configuration the plugin is using.
   *
   * @public
   */
  authConfiguration?: PluginAuthConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdatePluginResponse {}

/**
 * Stores an Amazon Kendra index as a retriever.
 *
 * @public
 */
export interface KendraIndexConfiguration {
  /**
   * The identifier of the Amazon Kendra index.
   *
   * @public
   */
  indexId: string | undefined;
}

/**
 * Provides information on boosting `DATE` type document attributes.
 *
 * For more information on how boosting document attributes work in Amazon Q Business, see [Boosting using document attributes](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/metadata-boosting.html).
 *
 * @public
 */
export interface DateAttributeBoostingConfiguration {
  /**
   * Specifies the priority tier ranking of boosting applied to document attributes. For version 2, this parameter indicates the relative ranking between boosted fields (ONE being highest priority, TWO being second highest, etc.) and determines the order in which attributes influence document ranking in search results. For version 1, this parameter specifies the boosting intensity. For version 2, boosting intensity (VERY HIGH, HIGH, MEDIUM, LOW, NONE) are not supported. Note that in version 2, you are not allowed to boost on only one field and make this value TWO.
   *
   * @public
   */
  boostingLevel: DocumentAttributeBoostingLevel | undefined;

  /**
   * Specifies the duration, in seconds, of a boost applies to a `DATE` type document attribute.
   *
   * @public
   */
  boostingDurationInSeconds?: number | undefined;
}

/**
 * Provides information on boosting `NUMBER` type document attributes.
 *
 * In the current boosting implementation, boosting focuses primarily on `DATE` attributes for recency and `STRING` attributes for source prioritization. `NUMBER` attributes can serve as additional boosting factors when needed, but are not supported when using `NativeIndexConfiguration` version 2.
 *
 * For more information on how boosting document attributes work in Amazon Q Business, see [Boosting using document attributes](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/metadata-boosting.html).
 *
 * @public
 */
export interface NumberAttributeBoostingConfiguration {
  /**
   * Specifies the priority of boosted document attributes in relation to other boosted attributes. This parameter determines how strongly the attribute influences document ranking in search results. `NUMBER` attributes can serve as additional boosting factors when needed, but are not supported when using `NativeIndexConfiguration` version 2.
   *
   * @public
   */
  boostingLevel: DocumentAttributeBoostingLevel | undefined;

  /**
   * Specifies whether higher or lower numeric values should be prioritized when boosting. Valid values are ASCENDING (higher numbers are more important) and DESCENDING (lower numbers are more important).
   *
   * @public
   */
  boostingType?: NumberAttributeBoostingType | undefined;
}

/**
 * Provides information on boosting `STRING` type document attributes.
 *
 * > **Note:** For `STRING` and `STRING_LIST` type document attributes to be used for boosting on the console and the API, they must be enabled for search using the [DocumentAttributeConfiguration](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeConfiguration.html) object of the [UpdateIndex](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateIndex.html) API. If you haven't enabled searching on these attributes, you can't boost attributes of these data types on either the console or the API.
 *
 * For more information on how boosting document attributes work in Amazon Q Business, see [Boosting using document attributes](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/metadata-boosting.html).
 *
 * @public
 */
export interface StringAttributeBoostingConfiguration {
  /**
   * Specifies the priority tier ranking of boosting applied to document attributes. For version 2, this parameter indicates the relative ranking between boosted fields (ONE being highest priority, TWO being second highest, etc.) and determines the order in which attributes influence document ranking in search results. For version 1, this parameter specifies the boosting intensity. For version 2, boosting intensity (VERY HIGH, HIGH, MEDIUM, LOW, NONE) are not supported. Note that in version 2, you are not allowed to boost on only one field and make this value TWO.
   *
   * @public
   */
  boostingLevel: DocumentAttributeBoostingLevel | undefined;

  /**
   * Specifies specific values of a `STRING` type document attribute being boosted. When using `NativeIndexConfiguration` version 2, you can specify up to five values in order of priority.
   *
   * @public
   */
  attributeValueBoosting?: Record<string, StringAttributeValueBoostingLevel> | undefined;
}

/**
 * Provides information on boosting `STRING_LIST` type document attributes.
 *
 * In the current boosting implementation, boosting focuses primarily on `DATE` attributes for recency and `STRING` attributes for source prioritization. `STRING_LIST` attributes can serve as additional boosting factors when needed, but are not supported when using `NativeIndexConfiguration` version 2.
 *
 * > **Note:** For `STRING` and `STRING_LIST` type document attributes to be used for boosting on the console and the API, they must be enabled for search using the [DocumentAttributeConfiguration](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeConfiguration.html) object of the [UpdateIndex](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateIndex.html) API. If you haven't enabled searching on these attributes, you can't boost attributes of these data types on either the console or the API.
 *
 * For more information on how boosting document attributes work in Amazon Q Business, see [Boosting using document attributes](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/metadata-boosting.html).
 *
 * @public
 */
export interface StringListAttributeBoostingConfiguration {
  /**
   * Specifies the priority of boosted document attributes in relation to other boosted attributes. This parameter determines how strongly the attribute influences document ranking in search results. `STRING_LIST` attributes can serve as additional boosting factors when needed, but are not supported when using `NativeIndexConfiguration` version 2.
   *
   * @public
   */
  boostingLevel: DocumentAttributeBoostingLevel | undefined;
}

/**
 * Provides information on boosting supported Amazon Q Business document attribute types. When an end user chat query matches document attributes that have been boosted, Amazon Q Business prioritizes generating responses from content that matches the boosted document attributes.
 *
 * In version 2, boosting uses numeric values (ONE, TWO) to indicate priority tiers that establish clear hierarchical relationships between boosted attributes. This allows for more precise control over how different attributes influence search results.
 *
 * > **Note:** For `STRING` and `STRING_LIST` type document attributes to be used for boosting on the console and the API, they must be enabled for search using the [DocumentAttributeConfiguration](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeConfiguration.html) object of the [UpdateIndex](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateIndex.html) API. If you haven't enabled searching on these attributes, you can't boost attributes of these data types on either the console or the API.
 *
 * For more information on how boosting document attributes work in Amazon Q Business, see [Boosting using document attributes](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/metadata-boosting.html).
 *
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
   * Provides information on boosting `NUMBER` type document attributes.
   *
   * `NUMBER` attributes are not supported when using `NativeIndexConfiguration` version 2, which focuses on `DATE` attributes for recency and `STRING` attributes for source prioritization.
   *
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
   * Provides information on boosting `STRING` type document attributes.
   *
   * Version 2 assigns priority tiers to `STRING` attributes, establishing clear hierarchical relationships with other boosted attributes.
   *
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
   * Provides information on boosting `DATE` type document attributes.
   *
   * Version 2 assigns priority tiers to `DATE` attributes, establishing clear hierarchical relationships with other boosted attributes.
   *
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
   * Provides information on boosting `STRING_LIST` type document attributes.
   *
   * `STRING_LIST` attributes are not supported when using `NativeIndexConfiguration` version 2, which focuses on `DATE` attributes for recency and `STRING` attributes for source prioritization.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    numberConfiguration: (value: NumberAttributeBoostingConfiguration) => T;
    stringConfiguration: (value: StringAttributeBoostingConfiguration) => T;
    dateConfiguration: (value: DateAttributeBoostingConfiguration) => T;
    stringListConfiguration: (value: StringListAttributeBoostingConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration information for an Amazon Q Business index.
 *
 * @public
 */
export interface NativeIndexConfiguration {
  /**
   * The identifier for the Amazon Q Business index.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * A read-only field that specifies the version of the `NativeIndexConfiguration`.
   *
   * Amazon Q Business introduces enhanced document retrieval capabilities in version 2 of `NativeIndexConfiguration`, focusing on streamlined metadata boosting that prioritizes recency and source relevance to deliver more accurate responses to your queries. Version 2 has the following differences from version 1:
   *
   * - Version 2 supports a single Date field (created_at OR last_updated_at) for recency boosting
   * - Version 2 supports a single String field with an ordered list of up to 5 values
   * - Version 2 introduces number-based boost levels (ONE, TWO) alongside the text-based levels
   * - Version 2 allows specifying prioritization between Date and String fields
   * - Version 2 maintains backward compatibility with existing configurations
   *
   * @public
   */
  version?: number | undefined;

  /**
   * Overrides the default boosts applied by Amazon Q Business to supported document attribute data types.
   *
   * @public
   */
  boostingOverride?: Record<string, DocumentAttributeBoostingConfiguration> | undefined;
}

/**
 * Provides information on how the retriever used for your Amazon Q Business application is configured.
 *
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
   * Provides information on how a Amazon Q Business index used as a retriever for your Amazon Q Business application is configured.
   *
   * @public
   */
  export interface NativeIndexConfigurationMember {
    nativeIndexConfiguration: NativeIndexConfiguration;
    kendraIndexConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Provides information on how the Amazon Kendra index used as a retriever for your Amazon Q Business application is configured.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    nativeIndexConfiguration: (value: NativeIndexConfiguration) => T;
    kendraIndexConfiguration: (value: KendraIndexConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateRetrieverRequest {
  /**
   * The identifier of your Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The type of retriever you are using.
   *
   * @public
   */
  type: RetrieverType | undefined;

  /**
   * The name of your retriever.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * Provides information on how the retriever used for your Amazon Q Business application is configured.
   *
   * @public
   */
  configuration: RetrieverConfiguration | undefined;

  /**
   * The ARN of an IAM role used by Amazon Q Business to access the basic authentication credentials stored in a Secrets Manager secret.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * A token that you provide to identify the request to create your Amazon Q Business application retriever.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A list of key-value pairs that identify or categorize the retriever. You can also use tags to help control access to the retriever. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRetrieverResponse {
  /**
   * The identifier of the retriever you are using.
   *
   * @public
   */
  retrieverId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role associated with a retriever.
   *
   * @public
   */
  retrieverArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRetrieverRequest {
  /**
   * The identifier of the Amazon Q Business application using the retriever.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the retriever being deleted.
   *
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
   * The identifier of the Amazon Q Business application using the retriever.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the retriever.
   *
   * @public
   */
  retrieverId: string | undefined;
}

/**
 * @public
 */
export interface GetRetrieverResponse {
  /**
   * The identifier of the Amazon Q Business application using the retriever.
   *
   * @public
   */
  applicationId?: string | undefined;

  /**
   * The identifier of the retriever.
   *
   * @public
   */
  retrieverId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the retriever.
   *
   * @public
   */
  retrieverArn?: string | undefined;

  /**
   * The type of the retriever.
   *
   * @public
   */
  type?: RetrieverType | undefined;

  /**
   * The status of the retriever.
   *
   * @public
   */
  status?: RetrieverStatus | undefined;

  /**
   * The name of the retriever.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * Provides information on how the retriever used for your Amazon Q Business application is configured.
   *
   * @public
   */
  configuration?: RetrieverConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role with the permission to access the retriever and required resources.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The Unix timestamp when the retriever was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp when the retriever was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListRetrieversRequest {
  /**
   * The identifier of the Amazon Q Business application using the retriever.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * If the number of retrievers returned exceeds `maxResults`, Amazon Q Business returns a next token as a pagination token to retrieve the next set of retrievers.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of retrievers returned.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information for the retriever used for your Amazon Q Business application.
 *
 * @public
 */
export interface Retriever {
  /**
   * The identifier of the Amazon Q Business application using the retriever.
   *
   * @public
   */
  applicationId?: string | undefined;

  /**
   * The identifier of the retriever used by your Amazon Q Business application.
   *
   * @public
   */
  retrieverId?: string | undefined;

  /**
   * The type of your retriever.
   *
   * @public
   */
  type?: RetrieverType | undefined;

  /**
   * The status of your retriever.
   *
   * @public
   */
  status?: RetrieverStatus | undefined;

  /**
   * The name of your retriever.
   *
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface ListRetrieversResponse {
  /**
   * An array of summary information for one or more retrievers.
   *
   * @public
   */
  retrievers?: Retriever[] | undefined;

  /**
   * If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of retrievers.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRetrieverRequest {
  /**
   * The identifier of your Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of your retriever.
   *
   * @public
   */
  retrieverId: string | undefined;

  /**
   * Provides information on how the retriever used for your Amazon Q Business application is configured.
   *
   * @public
   */
  configuration?: RetrieverConfiguration | undefined;

  /**
   * The name of your retriever.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role with permission to access the retriever and required resources.
   *
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
   * The identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM Identity Center instance you are either creating for—or connecting to—your Amazon Q Business application.
   *
   * @public
   */
  identityCenterInstanceArn?: string | undefined;

  /**
   * A name for the Amazon Q Business application.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description for the Amazon Q Business application.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An Amazon Web Services Identity and Access Management (IAM) role that gives Amazon Q Business permission to access Amazon CloudWatch logs and metrics.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * An option to allow end users to upload files directly during chat.
   *
   * @public
   */
  attachmentsConfiguration?: AttachmentsConfiguration | undefined;

  /**
   * An option to allow end users to create and use Amazon Q Apps in the web experience.
   *
   * @public
   */
  qAppsConfiguration?: QAppsConfiguration | undefined;

  /**
   * Configuration information about chat response personalization. For more information, see [Personalizing chat responses](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/personalizing-chat-responses.html).
   *
   * @public
   */
  personalizationConfiguration?: PersonalizationConfiguration | undefined;

  /**
   * An option to enable updating the default subscription type assigned to an Amazon Q Business application using IAM identity federation for user management.
   *
   * @public
   */
  autoSubscriptionConfiguration?: AutoSubscriptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {}

/**
 * The container for browser extension configuration for an Amazon Q Business web experience.
 *
 * @public
 */
export interface BrowserExtensionConfiguration {
  /**
   * Specify the browser extensions allowed for your Amazon Q web experience.
   *
   * - `CHROME` — Enables the extension for Chromium-based browsers (Google Chrome, Microsoft Edge, Opera, etc.).
   * - `FIREFOX` — Enables the extension for Mozilla Firefox.
   * - `CHROME` and `FIREFOX` — Enable the extension for Chromium-based browsers and Mozilla Firefox.
   *
   * @public
   */
  enabledBrowserExtensions: BrowserExtension[] | undefined;
}

/**
 * Contains the configuration information to customize the logo, font, and color of an Amazon Q Business web experience with individual files for each property or a CSS file for them all.
 *
 * @public
 */
export interface CustomizationConfiguration {
  /**
   * Provides the URL where the custom CSS file is hosted for an Amazon Q web experience.
   *
   * @public
   */
  customCSSUrl?: string | undefined;

  /**
   * Provides the URL where the custom logo file is hosted for an Amazon Q web experience.
   *
   * @public
   */
  logoUrl?: string | undefined;

  /**
   * Provides the URL where the custom font file is hosted for an Amazon Q web experience.
   *
   * @public
   */
  fontUrl?: string | undefined;

  /**
   * Provides the URL where the custom favicon file is hosted for an Amazon Q web experience.
   *
   * @public
   */
  faviconUrl?: string | undefined;
}

/**
 * Information about the OIDC-compliant identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
 *
 * @public
 */
export interface OpenIDConnectProviderConfiguration {
  /**
   * The Amazon Resource Name (ARN) of a Secrets Manager secret containing the OIDC client secret.
   *
   * @public
   */
  secretsArn: string | undefined;

  /**
   * An IAM role with permissions to access KMS to decrypt the Secrets Manager secret containing your OIDC client secret.
   *
   * @public
   */
  secretsRole: string | undefined;
}

/**
 * Information about the SAML 2.0-compliant identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
 *
 * @public
 */
export interface SamlProviderConfiguration {
  /**
   * The URL where Amazon Q Business end users will be redirected for authentication.
   *
   * @public
   */
  authenticationUrl: string | undefined;
}

/**
 * Provides information about the identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
 *
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
   * Information about the SAML 2.0-compliant identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
   *
   * @public
   */
  export interface SamlConfigurationMember {
    samlConfiguration: SamlProviderConfiguration;
    openIDConnectConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Information about the OIDC-compliant identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    samlConfiguration: (value: SamlProviderConfiguration) => T;
    openIDConnectConfiguration: (value: OpenIDConnectProviderConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateWebExperienceRequest {
  /**
   * The identifier of the Amazon Q Business web experience.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The title for your Amazon Q Business web experience.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * A subtitle to personalize your Amazon Q Business web experience.
   *
   * @public
   */
  subtitle?: string | undefined;

  /**
   * The customized welcome message for end users of an Amazon Q Business web experience.
   *
   * @public
   */
  welcomeMessage?: string | undefined;

  /**
   * Determines whether sample prompts are enabled in the web experience for an end user.
   *
   * @public
   */
  samplePromptsControlMode?: WebExperienceSamplePromptsControlMode | undefined;

  /**
   * Sets the website domain origins that are allowed to embed the Amazon Q Business web experience. The *domain origin* refers to the base URL for accessing a website including the protocol (`http/https`), the domain name, and the port number (if specified).
   *
   * > **Note:** You must only submit a *base URL* and not a full path. For example, `https://docs.aws.amazon.com`.
   *
   * @public
   */
  origins?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service role attached to your web experience.
   *
   * > **Note:** The `roleArn` parameter is required when your Amazon Q Business application is created with IAM Identity Center. It is not required for SAML-based applications.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * A list of key-value pairs that identify or categorize your Amazon Q Business web experience. You can also use tags to help control access to the web experience. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A token you provide to identify a request to create an Amazon Q Business web experience.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Information about the identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
   *
   * @public
   */
  identityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * The browser extension configuration for an Amazon Q Business web experience.
   *
   * > **Note:** For Amazon Q Business application using external OIDC-compliant identity providers (IdPs). The IdP administrator must add the browser extension sign-in redirect URLs to the IdP application. For more information, see [Configure external OIDC identity provider for your browser extensions.](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/browser-extensions.html).
   *
   * @public
   */
  browserExtensionConfiguration?: BrowserExtensionConfiguration | undefined;

  /**
   * Sets the custom logo, favicon, font, and color used in the Amazon Q web experience.
   *
   * @public
   */
  customizationConfiguration?: CustomizationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateWebExperienceResponse {
  /**
   * The identifier of the Amazon Q Business web experience.
   *
   * @public
   */
  webExperienceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Amazon Q Business web experience.
   *
   * @public
   */
  webExperienceArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebExperienceRequest {
  /**
   * The identifier of the Amazon Q Business application linked to the Amazon Q Business web experience.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the Amazon Q Business web experience being deleted.
   *
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
   * The identifier of the Amazon Q Business application linked to the web experience.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the Amazon Q Business web experience.
   *
   * @public
   */
  webExperienceId: string | undefined;
}

/**
 * Provides the SAML 2.0 compliant identity provider (IdP) configuration information Amazon Q Business needs to deploy a Amazon Q Business web experience.
 *
 * @public
 */
export interface SamlConfiguration {
  /**
   * The metadata XML that your IdP generated.
   *
   * @public
   */
  metadataXML: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role assumed by users when they authenticate into their Amazon Q Business web experience, containing the relevant Amazon Q Business permissions for conversing with Amazon Q Business.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The user attribute name in your IdP that maps to the user email.
   *
   * @public
   */
  userIdAttribute: string | undefined;

  /**
   * The group attribute name in your IdP that maps to user groups.
   *
   * @public
   */
  userGroupAttribute?: string | undefined;
}

/**
 * Provides the authorization configuration information needed to deploy a Amazon Q Business web experience to end users.
 *
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
   * Provides the SAML 2.0 compliant identity provider (IdP) configuration information Amazon Q Business needs to deploy a Amazon Q Business web experience.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    samlConfiguration: (value: SamlConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetWebExperienceResponse {
  /**
   * The identifier of the Amazon Q Business application linked to the web experience.
   *
   * @public
   */
  applicationId?: string | undefined;

  /**
   * The identifier of the Amazon Q Business web experience.
   *
   * @public
   */
  webExperienceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role with the permission to access the Amazon Q Business web experience and required resources.
   *
   * @public
   */
  webExperienceArn?: string | undefined;

  /**
   * The endpoint of your Amazon Q Business web experience.
   *
   * @public
   */
  defaultEndpoint?: string | undefined;

  /**
   * The current status of the Amazon Q Business web experience. When the `Status` field value is `FAILED`, the `ErrorMessage` field contains a description of the error that caused the data source connector to fail.
   *
   * @public
   */
  status?: WebExperienceStatus | undefined;

  /**
   * The Unix timestamp when the Amazon Q Business web experience was last created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp when the Amazon Q Business web experience was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The title for your Amazon Q Business web experience.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The subtitle for your Amazon Q Business web experience.
   *
   * @public
   */
  subtitle?: string | undefined;

  /**
   * The customized welcome message for end users of an Amazon Q Business web experience.
   *
   * @public
   */
  welcomeMessage?: string | undefined;

  /**
   * Determines whether sample prompts are enabled in the web experience for an end user.
   *
   * @public
   */
  samplePromptsControlMode?: WebExperienceSamplePromptsControlMode | undefined;

  /**
   * Gets the website domain origins that are allowed to embed the Amazon Q Business web experience. The *domain origin* refers to the base URL for accessing a website including the protocol (`http/https`), the domain name, and the port number (if specified).
   *
   * @public
   */
  origins?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service role attached to your web experience.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Information about the identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
   *
   * @public
   */
  identityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * The authentication configuration information for your Amazon Q Business web experience.
   *
   * @deprecated Property associated with legacy SAML IdP flow. Deprecated in favor of using AWS IAM Identity Center for user management.
   * @public
   */
  authenticationConfiguration?: WebExperienceAuthConfiguration | undefined;

  /**
   * When the `Status` field value is `FAILED`, the `ErrorMessage` field contains a description of the error that caused the data source connector to fail.
   *
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * The browser extension configuration for an Amazon Q Business web experience.
   *
   * @public
   */
  browserExtensionConfiguration?: BrowserExtensionConfiguration | undefined;

  /**
   * Gets the custom logo, favicon, font, and color used in the Amazon Q web experience.
   *
   * @public
   */
  customizationConfiguration?: CustomizationConfiguration | undefined;
}

/**
 * @public
 */
export interface ListWebExperiencesRequest {
  /**
   * The identifier of the Amazon Q Business application linked to the listed web experiences.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * If the `maxResults` response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business conversations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of Amazon Q Business Web Experiences to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides information for an Amazon Q Business web experience.
 *
 * @public
 */
export interface WebExperience {
  /**
   * The identifier of your Amazon Q Business web experience.
   *
   * @public
   */
  webExperienceId?: string | undefined;

  /**
   * The Unix timestamp when the Amazon Q Business application was last updated.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp when your Amazon Q Business web experience was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The endpoint URLs for your Amazon Q Business web experience. The URLs are unique and fully hosted by Amazon Web Services.
   *
   * @public
   */
  defaultEndpoint?: string | undefined;

  /**
   * The status of your Amazon Q Business web experience.
   *
   * @public
   */
  status?: WebExperienceStatus | undefined;
}

/**
 * @public
 */
export interface ListWebExperiencesResponse {
  /**
   * An array of summary information for one or more Amazon Q Business experiences.
   *
   * @public
   */
  webExperiences?: WebExperience[] | undefined;

  /**
   * If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of messages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWebExperienceRequest {
  /**
   * The identifier of the Amazon Q Business application attached to the web experience.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the Amazon Q Business web experience.
   *
   * @public
   */
  webExperienceId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role with permission to access the Amazon Q Business web experience and required resources.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The authentication configuration of the Amazon Q Business web experience.
   *
   * @deprecated Property associated with legacy SAML IdP flow. Deprecated in favor of using AWS IAM Identity Center for user management.
   * @public
   */
  authenticationConfiguration?: WebExperienceAuthConfiguration | undefined;

  /**
   * The title of the Amazon Q Business web experience.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The subtitle of the Amazon Q Business web experience.
   *
   * @public
   */
  subtitle?: string | undefined;

  /**
   * A customized welcome message for an end user in an Amazon Q Business web experience.
   *
   * @public
   */
  welcomeMessage?: string | undefined;

  /**
   * Determines whether sample prompts are enabled in the web experience for an end user.
   *
   * @public
   */
  samplePromptsControlMode?: WebExperienceSamplePromptsControlMode | undefined;

  /**
   * Information about the identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
   *
   * @public
   */
  identityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * Updates the website domain origins that are allowed to embed the Amazon Q Business web experience. The *domain origin* refers to the *base URL* for accessing a website including the protocol (`http/https`), the domain name, and the port number (if specified).
   *
   * > **Note:**
   * >
   * > - Any values except `null` submitted as part of this update will replace all previous values.
   * > - You must only submit a *base URL* and not a full path. For example, `https://docs.aws.amazon.com`.
   *
   * @public
   */
  origins?: string[] | undefined;

  /**
   * The browser extension configuration for an Amazon Q Business web experience.
   *
   * > **Note:** For Amazon Q Business application using external OIDC-compliant identity providers (IdPs). The IdP administrator must add the browser extension sign-in redirect URLs to the IdP application. For more information, see [Configure external OIDC identity provider for your browser extensions.](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/browser-extensions.html).
   *
   * @public
   */
  browserExtensionConfiguration?: BrowserExtensionConfiguration | undefined;

  /**
   * Updates the custom logo, favicon, font, and color used in the Amazon Q web experience.
   *
   * @public
   */
  customizationConfiguration?: CustomizationConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateWebExperienceResponse {}

/**
 * The creator mode specific admin controls configured for an Amazon Q Business application. Determines whether an end user can generate LLM-only responses when they use the web experience.
 *
 * For more information, see [Admin controls and guardrails](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html) and [Conversation settings](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope).
 *
 * @public
 */
export interface AppliedCreatorModeConfiguration {
  /**
   * Information about whether creator mode is enabled or disabled for an Amazon Q Business application.
   *
   * @public
   */
  creatorModeControl: CreatorModeControl | undefined;
}

/**
 * The chat orchestration specific admin controls configured for an Amazon Q Business application. Determines whether Amazon Q Business automatically routes chat requests across configured plugins and data sources in your Amazon Q Business application.
 *
 * For more information, see [Chat orchestration settings](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails-global-controls.html#guardrails-global-orchestration).
 *
 * @public
 */
export interface AppliedOrchestrationConfiguration {
  /**
   * Information about whether chat orchestration is enabled or disabled for an Amazon Q Business application.
   *
   * @public
   */
  control: OrchestrationControl | undefined;
}

/**
 * Represents a group associated with a given user in the access control system.
 *
 * @public
 */
export interface AssociatedGroup {
  /**
   * The name of the group associated with the user. This is used to identify the group in access control decisions.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of the associated group. This indicates the scope of the group's applicability.
   *
   * @public
   */
  type?: MembershipType | undefined;
}

/**
 * Represents an associated user in the access control system.
 *
 * @public
 */
export interface AssociatedUser {
  /**
   * The unique identifier of the associated user. This is used to identify the user in access control decisions.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The type of the associated user. This indicates the scope of the user's association.
   *
   * @public
   */
  type?: MembershipType | undefined;
}

/**
 * Defines a condition that restricts when a permission is effective. Conditions allow you to control access based on specific attributes of the request.
 *
 * @public
 */
export interface PermissionCondition {
  /**
   * The operator to use for the condition evaluation. This determines how the condition values are compared.
   *
   * @public
   */
  conditionOperator: PermissionConditionOperator | undefined;

  /**
   * The key for the condition. This identifies the attribute that the condition applies to.
   *
   * @public
   */
  conditionKey: string | undefined;

  /**
   * The values to compare against using the specified condition operator.
   *
   * @public
   */
  conditionValues: string[] | undefined;
}

/**
 * @public
 */
export interface AssociatePermissionRequest {
  /**
   * The unique identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * A unique identifier for the policy statement.
   *
   * @public
   */
  statementId: string | undefined;

  /**
   * The list of Amazon Q Business actions that the ISV is allowed to perform.
   *
   * @public
   */
  actions: string[] | undefined;

  /**
   * The conditions that restrict when the permission is effective. These conditions can be used to limit the permission based on specific attributes of the request.
   *
   * @public
   */
  conditions?: PermissionCondition[] | undefined;

  /**
   * The Amazon Resource Name of the IAM role for the ISV that is being granted permission.
   *
   * @public
   */
  principal: string | undefined;
}

/**
 * @public
 */
export interface AssociatePermissionResponse {
  /**
   * The JSON representation of the added permission statement.
   *
   * @public
   */
  statement?: string | undefined;
}

/**
 * The source reference for an existing attachment in an existing conversation.
 *
 * @public
 */
export interface ConversationSource {
  /**
   * The unique identifier of the Amazon Q Business conversation.
   *
   * @public
   */
  conversationId: string | undefined;

  /**
   * The unique identifier of the Amazon Q Business attachment.
   *
   * @public
   */
  attachmentId: string | undefined;
}

/**
 * The source reference for an existing attachment.
 *
 * @public
 */
export type CopyFromSource =
  | CopyFromSource.ConversationMember
  | CopyFromSource.$UnknownMember;

/**
 * @public
 */
export namespace CopyFromSource {
  /**
   * A reference to an attachment in an existing conversation.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    conversation: (value: ConversationSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An attachment in an Amazon Q Business conversation.
 *
 * @public
 */
export interface Attachment {
  /**
   * The identifier of the Amazon Q Business attachment.
   *
   * @public
   */
  attachmentId?: string | undefined;

  /**
   * The identifier of the Amazon Q Business conversation the attachment is associated with.
   *
   * @public
   */
  conversationId?: string | undefined;

  /**
   * Filename of the Amazon Q Business attachment.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A CopyFromSource containing a reference to the original source of the Amazon Q Business attachment.
   *
   * @public
   */
  copyFrom?: CopyFromSource | undefined;

  /**
   * Filetype of the Amazon Q Business attachment.
   *
   * @public
   */
  fileType?: string | undefined;

  /**
   * Size in bytes of the Amazon Q Business attachment.
   *
   * @public
   */
  fileSize?: number | undefined;

  /**
   * MD5 checksum of the Amazon Q Business attachment contents.
   *
   * @public
   */
  md5chksum?: string | undefined;

  /**
   * The Unix timestamp when the Amazon Q Business attachment was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * AttachmentStatus of the Amazon Q Business attachment.
   *
   * @public
   */
  status?: AttachmentStatus | undefined;

  /**
   * ErrorDetail providing information about a Amazon Q Business attachment error.
   *
   * @public
   */
  error?: ErrorDetail | undefined;
}

/**
 * This is either a file directly uploaded into a web experience chat or a reference to an existing attachment that is part of a web experience chat.
 *
 * @public
 */
export interface AttachmentInput {
  /**
   * The contents of the attachment.
   *
   * @public
   */
  data?: Uint8Array | undefined;

  /**
   * The filename of the attachment.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A reference to an existing attachment.
   *
   * @public
   */
  copyFrom?: CopyFromSource | undefined;
}

/**
 * A file input event activated by a end user request to upload files into their web experience chat.
 *
 * @public
 */
export interface AttachmentInputEvent {
  /**
   * This is either a file directly uploaded into a web experience chat or a reference to an existing attachment that is part of a web experience chat.
   *
   * @public
   */
  attachment?: AttachmentInput | undefined;
}

/**
 * The details of a file uploaded during chat.
 *
 * @public
 */
export interface AttachmentOutput {
  /**
   * The name of a file uploaded during chat.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The status of a file uploaded during chat.
   *
   * @public
   */
  status?: AttachmentStatus | undefined;

  /**
   * An error associated with a file uploaded during chat.
   *
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * The unique identifier of the Amazon Q Business attachment.
   *
   * @public
   */
  attachmentId?: string | undefined;

  /**
   * The unique identifier of the Amazon Q Business conversation.
   *
   * @public
   */
  conversationId?: string | undefined;
}

/**
 * Details about an audio source, including its identifier, format, and time information.
 *
 * @public
 */
export interface AudioSourceDetails {
  /**
   * Unique identifier for the audio media file.
   *
   * @public
   */
  mediaId?: string | undefined;

  /**
   * The MIME type of the audio file (e.g., audio/mp3, audio/wav).
   *
   * @public
   */
  mediaMimeType?: string | undefined;

  /**
   * The starting timestamp in milliseconds for the relevant audio segment.
   *
   * @public
   */
  startTimeMilliseconds?: number | undefined;

  /**
   * The ending timestamp in milliseconds for the relevant audio segment.
   *
   * @public
   */
  endTimeMilliseconds?: number | undefined;

  /**
   * The type of audio extraction performed on the content.
   *
   * @public
   */
  audioExtractionType?: AudioExtractionType | undefined;
}

/**
 * A request made by Amazon Q Business to a third paty authentication server to authenticate a custom plugin user.
 *
 * @public
 */
export interface AuthChallengeRequest {
  /**
   * The URL sent by Amazon Q Business to the third party authentication server to authenticate a custom plugin user through an OAuth protocol.
   *
   * @public
   */
  authorizationUrl: string | undefined;
}

/**
 * An authentication verification event activated by an end user request to use a custom plugin.
 *
 * @public
 */
export interface AuthChallengeRequestEvent {
  /**
   * The URL sent by Amazon Q Business to a third party authentication server in response to an authentication verification event activated by an end user request to use a custom plugin.
   *
   * @public
   */
  authorizationUrl: string | undefined;
}

/**
 * Contains details of the authentication information received from a third party authentication server in response to an authentication challenge.
 *
 * @public
 */
export interface AuthChallengeResponse {
  /**
   * The mapping of key-value pairs in an authentication challenge response.
   *
   * @public
   */
  responseMap: Record<string, string> | undefined;
}

/**
 * An authentication verification event response by a third party authentication server to Amazon Q Business.
 *
 * @public
 */
export interface AuthChallengeResponseEvent {
  /**
   * The mapping of key-value pairs in an authentication challenge response.
   *
   * @public
   */
  responseMap: Record<string, string> | undefined;
}

/**
 * A document deleted from an Amazon Q Business data source connector.
 *
 * @public
 */
export interface DeleteDocument {
  /**
   * The identifier of the deleted document.
   *
   * @public
   */
  documentId: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDocumentRequest {
  /**
   * The identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the Amazon Q Business index that contains the documents to delete.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * Documents deleted from the Amazon Q Business index.
   *
   * @public
   */
  documents: DeleteDocument[] | undefined;

  /**
   * The identifier of the data source sync during which the documents were deleted.
   *
   * @public
   */
  dataSourceSyncId?: string | undefined;
}

/**
 * A list of documents that could not be removed from an Amazon Q Business index. Each entry contains an error message that indicates why the document couldn't be removed from the index.
 *
 * @public
 */
export interface FailedDocument {
  /**
   * The identifier of the document that couldn't be removed from the Amazon Q Business index.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * An explanation for why the document couldn't be removed from the index.
   *
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * The identifier of the Amazon Q Business data source connector that contains the failed document.
   *
   * @public
   */
  dataSourceId?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDocumentResponse {
  /**
   * A list of documents that couldn't be removed from the Amazon Q Business index. Each entry contains an error message that indicates why the document couldn't be removed from the index.
   *
   * @public
   */
  failedDocuments?: FailedDocument[] | undefined;
}

/**
 * The contents of a document.
 *
 * > **Note:** Documents have size limitations. The maximum file size for a document is 50 MB. The maximum amount of text that can be extracted from a single document is 5 MB. For more information, see [Supported document formats in Amazon Q Business](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/doc-types.html).
 *
 * @public
 */
export type DocumentContent =
  | DocumentContent.BlobMember
  | DocumentContent.S3Member
  | DocumentContent.$UnknownMember;

/**
 * @public
 */
export namespace DocumentContent {
  /**
   * The contents of the document. Documents passed to the `blob` parameter must be base64 encoded. Your code might not need to encode the document file bytes if you're using an Amazon Web Services SDK to call Amazon Q Business APIs. If you are calling the Amazon Q Business endpoint directly using REST, you must base64 encode the contents before sending.
   *
   * @public
   */
  export interface BlobMember {
    blob: Uint8Array;
    s3?: never;
    $unknown?: never;
  }

  /**
   * The path to the document in an Amazon S3 bucket.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    blob: (value: Uint8Array) => T;
    s3: (value: S3) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A document in an Amazon Q Business application.
 *
 * @public
 */
export interface Document {
  /**
   * The identifier of the document.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Custom attributes to apply to the document for refining Amazon Q Business web experience responses.
   *
   * @public
   */
  attributes?: DocumentAttribute[] | undefined;

  /**
   * The contents of the document.
   *
   * @public
   */
  content?: DocumentContent | undefined;

  /**
   * The file type of the document in the Blob field.
   *
   * If you want to index snippets or subsets of HTML documents instead of the entirety of the HTML documents, you add the `HTML` start and closing tags (`<HTML>content</HTML>`) around the content.
   *
   * @public
   */
  contentType?: ContentType | undefined;

  /**
   * The title of the document.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * Configuration information for access permission to a document.
   *
   * @public
   */
  accessConfiguration?: AccessConfiguration | undefined;

  /**
   * The configuration information for altering document metadata and content during the document ingestion process.
   *
   * @public
   */
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration | undefined;

  /**
   * The configuration for extracting information from media in the document.
   *
   * @public
   */
  mediaExtractionConfiguration?: MediaExtractionConfiguration | undefined;
}

/**
 * @public
 */
export interface BatchPutDocumentRequest {
  /**
   * The identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the Amazon Q Business index to add the documents to.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * One or more documents to add to the index.
   *
   * > **Important:** Ensure that the name of your document doesn't contain any confidential information. Amazon Q Business returns document names in chat responses and citations when relevant.
   *
   * @public
   */
  documents: Document[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role with permission to access your S3 bucket.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The identifier of the data source sync during which the documents were added.
   *
   * @public
   */
  dataSourceSyncId?: string | undefined;
}

/**
 * @public
 */
export interface BatchPutDocumentResponse {
  /**
   * A list of documents that were not added to the Amazon Q Business index because the document failed a validation check. Each document contains an error message that indicates why the document couldn't be added to the index.
   *
   * @public
   */
  failedDocuments?: FailedDocument[] | undefined;
}

/**
 * Provides information about the phrases blocked from chat by your chat control configuration.
 *
 * @public
 */
export interface BlockedPhrasesConfiguration {
  /**
   * A list of phrases blocked from a Amazon Q Business web experience chat.
   *
   * > **Note:** Each phrase can contain a maximum of 36 characters. The list can contain a maximum of 20 phrases.
   *
   * @public
   */
  blockedPhrases?: string[] | undefined;

  /**
   * The configured custom message displayed to an end user informing them that they've used a blocked phrase during chat.
   *
   * @public
   */
  systemMessageOverride?: string | undefined;
}

/**
 * Updates a blocked phrases configuration in your Amazon Q Business application.
 *
 * @public
 */
export interface BlockedPhrasesConfigurationUpdate {
  /**
   * Creates or updates a blocked phrases configuration in your Amazon Q Business application.
   *
   * @public
   */
  blockedPhrasesToCreateOrUpdate?: string[] | undefined;

  /**
   * Deletes a blocked phrases configuration in your Amazon Q Business application.
   *
   * @public
   */
  blockedPhrasesToDelete?: string[] | undefined;

  /**
   * The configured custom message displayed to your end user when they use blocked phrase during chat.
   *
   * @public
   */
  systemMessageOverride?: string | undefined;
}

/**
 * @public
 */
export interface CancelSubscriptionRequest {
  /**
   * The identifier of the Amazon Q Business application for which the subscription is being cancelled.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the Amazon Q Business subscription being cancelled.
   *
   * @public
   */
  subscriptionId: string | undefined;
}

/**
 * The details of an Amazon Q Business subscription.
 *
 * @public
 */
export interface SubscriptionDetails {
  /**
   * The type of an Amazon Q Business subscription.
   *
   * @public
   */
  type?: SubscriptionType | undefined;
}

/**
 * @public
 */
export interface CancelSubscriptionResponse {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Q Business subscription being cancelled.
   *
   * @public
   */
  subscriptionArn?: string | undefined;

  /**
   * The type of your current Amazon Q Business subscription.
   *
   * @public
   */
  currentSubscription?: SubscriptionDetails | undefined;

  /**
   * The type of the Amazon Q Business subscription for the next month.
   *
   * @public
   */
  nextSubscription?: SubscriptionDetails | undefined;
}

/**
 * Configuration information required to invoke chat in `PLUGIN_MODE`.
 *
 * For more information, see [Admin controls and guardrails](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html), [Plugins](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/plugins.html), and [Conversation settings](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope).
 *
 * @public
 */
export interface PluginConfiguration {
  /**
   * The identifier of the plugin you want to use.
   *
   * @public
   */
  pluginId: string | undefined;
}

/**
 * Configuration information for Amazon Q Business conversation modes.
 *
 * For more information, see [Admin controls and guardrails](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html) and [Conversation settings](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope).
 *
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
   * Configuration information required to invoke chat in `PLUGIN_MODE`.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    pluginConfiguration: (value: PluginConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The end of the streaming input for the `Chat` API.
 *
 * @public
 */
export interface EndOfInputEvent {}

/**
 * An input event for a end user message in an Amazon Q Business web experience.
 *
 * @public
 */
export interface TextInputEvent {
  /**
   * A user message in a text message input event.
   *
   * @public
   */
  userMessage: string | undefined;
}

/**
 * A failed file upload during web experience chat.
 *
 * @public
 */
export interface FailedAttachmentEvent {
  /**
   * The identifier of the conversation associated with the failed file upload.
   *
   * @public
   */
  conversationId?: string | undefined;

  /**
   * The identifier of the end user chat message associated with the file upload.
   *
   * @public
   */
  userMessageId?: string | undefined;

  /**
   * The identifier of the AI-generated message associated with the file upload.
   *
   * @public
   */
  systemMessageId?: string | undefined;

  /**
   * The details of a file uploaded during chat.
   *
   * @public
   */
  attachment?: AttachmentOutput | undefined;
}

/**
 * Contains the relevant text excerpt from a source that was used to generate a citation text segment in an Amazon Q Business chat response.
 *
 * @public
 */
export interface SnippetExcerpt {
  /**
   * The relevant text excerpt from a source that was used to generate a citation text segment in an Amazon Q chat response.
   *
   * @public
   */
  text?: string | undefined;
}

/**
 * Details about an image source, including its identifier and format.
 *
 * @public
 */
export interface ImageSourceDetails {
  /**
   * Unique identifier for the image file.
   *
   * @public
   */
  mediaId?: string | undefined;

  /**
   * The MIME type of the image file.
   *
   * @public
   */
  mediaMimeType?: string | undefined;
}

/**
 * Details about a video source, including its identifier, format, and time information.
 *
 * @public
 */
export interface VideoSourceDetails {
  /**
   * Unique identifier for the video media file.
   *
   * @public
   */
  mediaId?: string | undefined;

  /**
   * The MIME type of the video file (e.g., video/mp4, video/avi).
   *
   * @public
   */
  mediaMimeType?: string | undefined;

  /**
   * The starting timestamp in milliseconds for the relevant video segment.
   *
   * @public
   */
  startTimeMilliseconds?: number | undefined;

  /**
   * The ending timestamp in milliseconds for the relevant video segment.
   *
   * @public
   */
  endTimeMilliseconds?: number | undefined;

  /**
   * The type of video extraction performed on the content.
   *
   * @public
   */
  videoExtractionType?: VideoExtractionType | undefined;
}

/**
 * Container for details about different types of media sources (image, audio, or video).
 *
 * @public
 */
export type SourceDetails =
  | SourceDetails.AudioSourceDetailsMember
  | SourceDetails.ImageSourceDetailsMember
  | SourceDetails.VideoSourceDetailsMember
  | SourceDetails.$UnknownMember;

/**
 * @public
 */
export namespace SourceDetails {
  /**
   * Details specific to image content within the source.
   *
   * @public
   */
  export interface ImageSourceDetailsMember {
    imageSourceDetails: ImageSourceDetails;
    audioSourceDetails?: never;
    videoSourceDetails?: never;
    $unknown?: never;
  }

  /**
   * Details specific to audio content within the source.
   *
   * @public
   */
  export interface AudioSourceDetailsMember {
    imageSourceDetails?: never;
    audioSourceDetails: AudioSourceDetails;
    videoSourceDetails?: never;
    $unknown?: never;
  }

  /**
   * Details specific to video content within the source.
   *
   * @public
   */
  export interface VideoSourceDetailsMember {
    imageSourceDetails?: never;
    audioSourceDetails?: never;
    videoSourceDetails: VideoSourceDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    imageSourceDetails?: never;
    audioSourceDetails?: never;
    videoSourceDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    imageSourceDetails: (value: ImageSourceDetails) => T;
    audioSourceDetails: (value: AudioSourceDetails) => T;
    videoSourceDetails: (value: VideoSourceDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Provides information about a text extract in a chat response that can be attributed to a source document.
 *
 * @public
 */
export interface TextSegment {
  /**
   * The zero-based location in the response string where the source attribution starts.
   *
   * @public
   */
  beginOffset?: number | undefined;

  /**
   * The zero-based location in the response string where the source attribution ends.
   *
   * @public
   */
  endOffset?: number | undefined;

  /**
   * The relevant text excerpt from a source that was used to generate a citation text segment in an Amazon Q Business chat response.
   *
   * @public
   */
  snippetExcerpt?: SnippetExcerpt | undefined;

  /**
   * The identifier of the media object associated with the text segment in the source attribution.
   *
   * @deprecated (since 2025-02-28) Deprecated in favor of using mediaId within the respective sourceDetails field.
   * @public
   */
  mediaId?: string | undefined;

  /**
   * The MIME type (image/png) of the media object associated with the text segment in the source attribution.
   *
   * @deprecated (since 2025-02-28) Deprecated in favor of using mediaMimeType within the respective sourceDetails field.
   * @public
   */
  mediaMimeType?: string | undefined;

  /**
   * Source information for a segment of extracted text, including its media type.
   *
   * @public
   */
  sourceDetails?: SourceDetails | undefined;
}

/**
 * The documents used to generate an Amazon Q Business web experience response.
 *
 * @public
 */
export interface SourceAttribution {
  /**
   * The title of the document which is the source for the Amazon Q Business generated response.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The content extract from the document on which the generated response is based.
   *
   * @public
   */
  snippet?: string | undefined;

  /**
   * The URL of the document which is the source for the Amazon Q Business generated response.
   *
   * @public
   */
  url?: string | undefined;

  /**
   * The number attached to a citation in an Amazon Q Business generated response.
   *
   * @public
   */
  citationNumber?: number | undefined;

  /**
   * The Unix timestamp when the Amazon Q Business application was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * A text extract from a source document that is used for source attribution.
   *
   * @public
   */
  textMessageSegments?: TextSegment[] | undefined;

  /**
   * The unique identifier of the source document used in the citation, obtained from the Amazon Q Business index during chat response generation. This ID is used as input to the `GetDocumentContent` API to retrieve the actual document content for user verification.
   *
   * @public
   */
  documentId?: string | undefined;

  /**
   * The identifier of the index containing the source document's metadata and access control information. This links the citation back to the specific Amazon Q Business index where the document's searchable content and permissions are stored.
   *
   * @public
   */
  indexId?: string | undefined;

  /**
   * The identifier of the data source from which the document was ingested. This field is not present if the document is ingested by directly calling the BatchPutDocument API (similar to checkDocumentAccess). If the document is from a file-upload data source, the datasource will be "uploaded-docs-file-stat-datasourceid".
   *
   * @public
   */
  datasourceId?: string | undefined;
}

/**
 * A metadata event for a AI-generated text output message in a Amazon Q Business conversation, containing associated metadata generated.
 *
 * @public
 */
export interface MetadataEvent {
  /**
   * The identifier of the conversation with which the generated metadata is associated.
   *
   * @public
   */
  conversationId?: string | undefined;

  /**
   * The identifier of an Amazon Q Business end user text input message within the conversation.
   *
   * @public
   */
  userMessageId?: string | undefined;

  /**
   * The identifier of an Amazon Q Business AI generated message within the conversation.
   *
   * @public
   */
  systemMessageId?: string | undefined;

  /**
   * The source documents used to generate the conversation response.
   *
   * @public
   */
  sourceAttributions?: (SourceAttribution | null)[] | undefined;

  /**
   * The final text output message generated by the system.
   *
   * @public
   */
  finalTextMessage?: string | undefined;
}

/**
 * An output event for an AI-generated response in an Amazon Q Business web experience.
 *
 * @public
 */
export interface TextOutputEvent {
  /**
   * The type of AI-generated message in a `TextOutputEvent`. Amazon Q Business currently supports two types of messages:
   *
   * - `RESPONSE` - The Amazon Q Business system response.
   * - `GROUNDED_RESPONSE` - The corrected, hallucination-reduced, response returned by Amazon Q Business. Available only if hallucination reduction is supported and configured for the application and detected in the end user chat query by Amazon Q Business.
   *
   * @public
   */
  systemMessageType?: SystemMessageType | undefined;

  /**
   * The identifier of the conversation with which the text output event is associated.
   *
   * @public
   */
  conversationId?: string | undefined;

  /**
   * The identifier of an end user message in a `TextOutputEvent`.
   *
   * @public
   */
  userMessageId?: string | undefined;

  /**
   * The identifier of an AI-generated message in a `TextOutputEvent`.
   *
   * @public
   */
  systemMessageId?: string | undefined;

  /**
   * An AI-generated message in a `TextOutputEvent`.
   *
   * @public
   */
  systemMessage?: string | undefined;
}

/**
 * The streaming output for the `Chat` API.
 *
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
   * Information about the payload of the `ChatOutputStream` event containing the AI-generated message output.
   *
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
   * A metadata event for a AI-generated text output message in a Amazon Q Business conversation.
   *
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
   * A request from Amazon Q Business to the end user for information Amazon Q Business needs to successfully complete a requested plugin action.
   *
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
   * A failed file upload event during a web experience chat.
   *
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
   * An authentication verification event activated by an end user request to use a custom plugin.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    textEvent: (value: TextOutputEvent) => T;
    metadataEvent: (value: MetadataEvent) => T;
    actionReviewEvent: (value: ActionReviewEvent) => T;
    failedAttachmentEvent: (value: FailedAttachmentEvent) => T;
    authChallengeRequestEvent: (value: AuthChallengeRequestEvent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ChatOutput {
  /**
   * The streaming output for the `Chat` API.
   *
   * @public
   */
  outputStream?: AsyncIterable<ChatOutputStream> | undefined;
}

/**
 * Configuration details that define how Amazon Q Business generates and formats responses to user queries in chat interactions. This configuration allows administrators to customize response characteristics to meet specific organizational needs and communication standards.
 *
 * @public
 */
export interface ChatResponseConfiguration {
  /**
   * A unique identifier for your chat response configuration settings, used to reference and manage the configuration within the Amazon Q Business service.
   *
   * @public
   */
  chatResponseConfigurationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the chat response configuration, which uniquely identifies the resource across all Amazon Web Services services and accounts.
   *
   * @public
   */
  chatResponseConfigurationArn: string | undefined;

  /**
   * A human-readable name for the chat response configuration, making it easier to identify and manage multiple configurations within an organization.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * A summary of the response configuration settings, providing a concise overview of the key parameters that define how responses are generated and formatted.
   *
   * @public
   */
  responseConfigurationSummary?: string | undefined;

  /**
   * The current status of the chat response configuration, indicating whether it is active, pending, or in another state that affects its availability for use in chat interactions.
   *
   * @public
   */
  status: ChatResponseConfigurationStatus | undefined;

  /**
   * The timestamp indicating when the chat response configuration was initially created, useful for tracking the lifecycle of configuration resources.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp indicating when the chat response configuration was last modified, helping administrators track changes and maintain version awareness.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * A set of instructions that define how Amazon Q Business should generate and format responses to user queries. This collection includes parameters for controlling response characteristics such as length, audience targeting, perspective, style, identity, tone, and custom instructions.
 *
 * @public
 */
export interface InstructionCollection {
  /**
   * Specifies the desired length of responses generated by Amazon Q Business. This parameter allows administrators to control whether responses are concise and brief or more detailed and comprehensive.
   *
   * @public
   */
  responseLength?: string | undefined;

  /**
   * Defines the intended audience for the responses, allowing Amazon Q Business to tailor its language, terminology, and explanations appropriately. This could range from technical experts to general users with varying levels of domain knowledge.
   *
   * @public
   */
  targetAudience?: string | undefined;

  /**
   * Determines the point of view or perspective from which Amazon Q Business generates responses, such as first-person, second-person, or third-person perspective, affecting how information is presented to users.
   *
   * @public
   */
  perspective?: string | undefined;

  /**
   * Specifies the formatting and structural style of responses, such as bullet points, paragraphs, step-by-step instructions, or other organizational formats that enhance readability and comprehension.
   *
   * @public
   */
  outputStyle?: string | undefined;

  /**
   * Defines the persona or identity that Amazon Q Business should adopt when responding to users, allowing for customization of the assistant's character, role, or representation within an organization.
   *
   * @public
   */
  identity?: string | undefined;

  /**
   * Controls the emotional tone and communication style of responses, such as formal, casual, technical, friendly, or professional, to align with organizational communication standards and user expectations.
   *
   * @public
   */
  tone?: string | undefined;

  /**
   * Allows administrators to provide specific, custom instructions that guide how Amazon Q Business should respond in particular scenarios or to certain types of queries, enabling fine-grained control over response generation.
   *
   * @public
   */
  customInstructions?: string | undefined;

  /**
   * Provides sample responses or templates that Amazon Q Business can reference when generating responses, helping to establish consistent patterns and formats for different types of user queries.
   *
   * @public
   */
  examples?: string | undefined;
}

/**
 * Configuration settings to define how Amazon Q Business generates and formats responses to user queries. This includes customization options for response style, tone, length, and other characteristics.
 *
 * @public
 */
export interface ResponseConfiguration {
  /**
   * A collection of instructions that guide how Amazon Q Business generates responses, including parameters for response length, target audience, perspective, output style, identity, tone, and custom instructions.
   *
   * @public
   */
  instructionCollection?: InstructionCollection | undefined;
}

/**
 * Detailed information about a chat response configuration, including comprehensive settings and parameters that define how Amazon Q Business generates and formats responses.
 *
 * @public
 */
export interface ChatResponseConfigurationDetail {
  /**
   * A collection of specific response configuration settings that collectively define how responses are generated, formatted, and presented to users in chat interactions.
   *
   * @public
   */
  responseConfigurations?: Partial<Record<ResponseConfigurationType, ResponseConfiguration>> | undefined;

  /**
   * A summary of the response configuration details, providing a concise overview of the key parameters and settings that define the response generation behavior.
   *
   * @public
   */
  responseConfigurationSummary?: string | undefined;

  /**
   * The current status of the chat response configuration, indicating whether it is active, pending, or in another state that affects its availability for use.
   *
   * @public
   */
  status?: ChatResponseConfigurationStatus | undefined;

  /**
   * Provides information about a Amazon Q Business request error.
   *
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * The timestamp indicating when the detailed chat response configuration was last modified, helping administrators track changes and maintain version awareness.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ChatSyncOutput {
  /**
   * The identifier of the Amazon Q Business conversation.
   *
   * @public
   */
  conversationId?: string | undefined;

  /**
   * An AI-generated message in a conversation.
   *
   * @public
   */
  systemMessage?: string | undefined;

  /**
   * The identifier of an Amazon Q Business AI generated message within the conversation.
   *
   * @public
   */
  systemMessageId?: string | undefined;

  /**
   * The identifier of an Amazon Q Business end user text input message within the conversation.
   *
   * @public
   */
  userMessageId?: string | undefined;

  /**
   * A request from Amazon Q Business to the end user for information Amazon Q Business needs to successfully complete a requested plugin action.
   *
   * @public
   */
  actionReview?: ActionReview | undefined;

  /**
   * An authentication verification event activated by an end user request to use a custom plugin.
   *
   * @public
   */
  authChallengeRequest?: AuthChallengeRequest | undefined;

  /**
   * The source documents used to generate the conversation response.
   *
   * @public
   */
  sourceAttributions?: (SourceAttribution | null)[] | undefined;

  /**
   * A list of files which failed to upload during chat.
   *
   * @public
   */
  failedAttachments?: AttachmentOutput[] | undefined;
}

/**
 * @public
 */
export interface CheckDocumentAccessRequest {
  /**
   * The unique identifier of the application. This is required to identify the specific Amazon Q Business application context for the document access check.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The unique identifier of the index. Used to locate the correct index within the application where the document is stored.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * The unique identifier of the user. Used to check the access permissions for this specific user against the document's ACL.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * The unique identifier of the document. Specifies which document's access permissions are being checked.
   *
   * @public
   */
  documentId: string | undefined;

  /**
   * The unique identifier of the data source. Identifies the specific data source from which the document originates. Should not be used when a document is uploaded directly with BatchPutDocument, as no dataSourceId is available or necessary.
   *
   * @public
   */
  dataSourceId?: string | undefined;
}

/**
 * Represents a group in the document's ACL, used to define access permissions for multiple users collectively.
 *
 * @public
 */
export interface DocumentAclGroup {
  /**
   * The name of the group in the document's ACL. This is used to identify the group when applying access rules.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of the group. This indicates the scope of the group's applicability in access control.
   *
   * @public
   */
  type?: MembershipType | undefined;
}

/**
 * Represents a user in the document's ACL, used to define access permissions for individual users.
 *
 * @public
 */
export interface DocumentAclUser {
  /**
   * The unique identifier of the user in the document's ACL. This is used to identify the user when applying access rules.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The type of the user. This indicates the scope of the user's applicability in access control.
   *
   * @public
   */
  type?: MembershipType | undefined;
}

/**
 * Represents a condition in the document's ACL, specifying access rules for users and groups.
 *
 * @public
 */
export interface DocumentAclCondition {
  /**
   * The logical relation between members in the condition, determining how multiple user or group conditions are combined.
   *
   * @public
   */
  memberRelation?: MemberRelation | undefined;

  /**
   * An array of user identifiers that this condition applies to. Users listed here are subject to the access rule defined by this condition.
   *
   * @public
   */
  users?: DocumentAclUser[] | undefined;

  /**
   * An array of group identifiers that this condition applies to. Groups listed here are subject to the access rule defined by this condition.
   *
   * @public
   */
  groups?: DocumentAclGroup[] | undefined;
}

/**
 * Represents membership rules in the document's ACL, defining how users or groups are associated with access permissions.
 *
 * @public
 */
export interface DocumentAclMembership {
  /**
   * The logical relation between members in the membership rule, determining how multiple conditions are combined.
   *
   * @public
   */
  memberRelation?: MemberRelation | undefined;

  /**
   * An array of conditions that define the membership rules. Each condition specifies criteria for users or groups to be included in this membership.
   *
   * @public
   */
  conditions?: DocumentAclCondition[] | undefined;
}

/**
 * Represents the Access Control List (ACL) for a document, containing both allowlist and denylist conditions.
 *
 * @public
 */
export interface DocumentAcl {
  /**
   * The allowlist conditions for the document. Users or groups matching these conditions are granted access to the document.
   *
   * @public
   */
  allowlist?: DocumentAclMembership | undefined;

  /**
   * The denylist conditions for the document. Users or groups matching these conditions are denied access to the document, overriding allowlist permissions.
   *
   * @public
   */
  denyList?: DocumentAclMembership | undefined;
}

/**
 * @public
 */
export interface CheckDocumentAccessResponse {
  /**
   * An array of groups the user is part of for the specified data source. Each group has a name and type.
   *
   * @public
   */
  userGroups?: AssociatedGroup[] | undefined;

  /**
   * An array of aliases associated with the user. This includes both global and local aliases, each with a name and type.
   *
   * @public
   */
  userAliases?: AssociatedUser[] | undefined;

  /**
   * A boolean value indicating whether the specified user has access to the document, either direct access or transitive access via groups and aliases attached to the document.
   *
   * @public
   */
  hasAccess?: boolean | undefined;

  /**
   * The Access Control List (ACL) associated with the document. Includes allowlist and denylist conditions that determine user access.
   *
   * @public
   */
  documentAcl?: DocumentAcl | undefined;
}

/**
 * A rule for configuring how Amazon Q Business responds when it encounters a a blocked topic. You can configure a custom message to inform your end users that they have asked about a restricted topic and suggest any next steps they should take.
 *
 * @public
 */
export interface ContentBlockerRule {
  /**
   * The configured custom message displayed to an end user informing them that they've used a blocked phrase during chat.
   *
   * @public
   */
  systemMessageOverride?: string | undefined;
}

/**
 * The identifier of the data source Amazon Q Business will generate responses from.
 *
 * @public
 */
export interface EligibleDataSource {
  /**
   * The identifier of the index the data source is attached to.
   *
   * @public
   */
  indexId?: string | undefined;

  /**
   * The identifier of the data source.
   *
   * @public
   */
  dataSourceId?: string | undefined;
}

/**
 * Rules for retrieving content from data sources connected to a Amazon Q Business application for a specific topic control configuration.
 *
 * @public
 */
export interface ContentRetrievalRule {
  /**
   * Specifies data sources in a Amazon Q Business application to use for content generation.
   *
   * @public
   */
  eligibleDataSources?: EligibleDataSource[] | undefined;
}

/**
 * Specifies a retriever as the content source for a search.
 *
 * @public
 */
export interface RetrieverContentSource {
  /**
   * The unique identifier of the retriever to use as the content source.
   *
   * @public
   */
  retrieverId: string | undefined;
}

/**
 * Specifies the source of content to search in.
 *
 * @public
 */
export type ContentSource =
  | ContentSource.RetrieverMember
  | ContentSource.$UnknownMember;

/**
 * @public
 */
export namespace ContentSource {
  /**
   * The retriever to use as the content source.
   *
   * @public
   */
  export interface RetrieverMember {
    retriever: RetrieverContentSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    retriever?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    retriever: (value: RetrieverContentSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A conversation in an Amazon Q Business application.
 *
 * @public
 */
export interface Conversation {
  /**
   * The identifier of the Amazon Q Business conversation.
   *
   * @public
   */
  conversationId?: string | undefined;

  /**
   * The title of the conversation.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The start time of the conversation.
   *
   * @public
   */
  startTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateAnonymousWebExperienceUrlRequest {
  /**
   * The identifier of the Amazon Q Business application environment attached to the web experience.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the web experience.
   *
   * @public
   */
  webExperienceId: string | undefined;

  /**
   * The duration of the session associated with the unique URL for the web experience.
   *
   * @public
   */
  sessionDurationInMinutes?: number | undefined;
}

/**
 * @public
 */
export interface CreateAnonymousWebExperienceUrlResponse {
  /**
   * The unique URL for accessing the web experience.
   *
   * > **Important:** This URL can only be used once and must be used within 5 minutes after it's generated.
   *
   * @public
   */
  anonymousUrl?: string | undefined;
}

/**
 * @public
 */
export interface CreateChatResponseConfigurationRequest {
  /**
   * The unique identifier of the Amazon Q Business application for which to create the new chat response configuration.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * A human-readable name for the new chat response configuration, making it easier to identify and manage among multiple configurations.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request. This helps prevent the same configuration from being created multiple times if retries occur.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A collection of response configuration settings that define how Amazon Q Business will generate and format responses to user queries in chat interactions.
   *
   * @public
   */
  responseConfigurations: Partial<Record<ResponseConfigurationType, ResponseConfiguration>> | undefined;

  /**
   * A list of key-value pairs to apply as tags to the new chat response configuration, enabling categorization and management of resources across Amazon Web Services services.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateChatResponseConfigurationResponse {
  /**
   * The unique identifier assigned to a newly created chat response configuration, used for subsequent operations on this resource.
   *
   * @public
   */
  chatResponseConfigurationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the newly created chat response configuration, which uniquely identifies the resource across all Amazon Web Services services.
   *
   * @public
   */
  chatResponseConfigurationArn: string | undefined;
}

/**
 * A user or group in the IAM Identity Center instance connected to the Amazon Q Business application.
 *
 * @public
 */
export type SubscriptionPrincipal =
  | SubscriptionPrincipal.GroupMember
  | SubscriptionPrincipal.UserMember
  | SubscriptionPrincipal.$UnknownMember;

/**
 * @public
 */
export namespace SubscriptionPrincipal {
  /**
   * The identifier of a user in the IAM Identity Center instance connected to the Amazon Q Business application.
   *
   * @public
   */
  export interface UserMember {
    user: string;
    group?: never;
    $unknown?: never;
  }

  /**
   * The identifier of a group in the IAM Identity Center instance connected to the Amazon Q Business application.
   *
   * @public
   */
  export interface GroupMember {
    user?: never;
    group: string;
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    user: (value: string) => T;
    group: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateSubscriptionRequest {
  /**
   * The identifier of the Amazon Q Business application the subscription should be added to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The IAM Identity Center `UserId` or `GroupId` of a user or group in the IAM Identity Center instance connected to the Amazon Q Business application.
   *
   * @public
   */
  principal: SubscriptionPrincipal | undefined;

  /**
   * The type of Amazon Q Business subscription you want to create.
   *
   * @public
   */
  type: SubscriptionType | undefined;

  /**
   * A token that you provide to identify the request to create a subscription for your Amazon Q Business application.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionResponse {
  /**
   * The identifier of the Amazon Q Business subscription created.
   *
   * @public
   */
  subscriptionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q Business subscription created.
   *
   * @public
   */
  subscriptionArn?: string | undefined;

  /**
   * The type of your current Amazon Q Business subscription.
   *
   * @public
   */
  currentSubscription?: SubscriptionDetails | undefined;

  /**
   * The type of the Amazon Q Business subscription for the next month.
   *
   * @public
   */
  nextSubscription?: SubscriptionDetails | undefined;
}

/**
 * Aliases attached to a user id within an Amazon Q Business application.
 *
 * @public
 */
export interface UserAlias {
  /**
   * The identifier of the index that the user aliases are associated with.
   *
   * @public
   */
  indexId?: string | undefined;

  /**
   * The identifier of the data source that the user aliases are associated with.
   *
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * The identifier of the user id associated with the user aliases.
   *
   * @public
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * The identifier of the application for which the user mapping will be created.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The user emails attached to a user mapping.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * The list of user aliases in the mapping.
   *
   * @public
   */
  userAliases?: UserAlias[] | undefined;

  /**
   * A token that you provide to identify the request to create your Amazon Q Business user mapping.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {}

/**
 * Configuration information required to invoke chat in `CREATOR_MODE`.
 *
 * For more information, see [Admin controls and guardrails](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html) and [Conversation settings](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope).
 *
 * @public
 */
export interface CreatorModeConfiguration {
  /**
   * Status information about whether `CREATOR_MODE` has been enabled or disabled. The default status is `DISABLED`.
   *
   * @public
   */
  creatorModeControl: CreatorModeControl | undefined;
}

/**
 * Maps a batch delete document request to a specific Amazon Q Business data source connector sync job.
 *
 * @public
 */
export interface DataSourceSyncJobMetrics {
  /**
   * The current count of documents added from the data source during the data source sync.
   *
   * @public
   */
  documentsAdded?: string | undefined;

  /**
   * The current count of documents modified in the data source during the data source sync.
   *
   * @public
   */
  documentsModified?: string | undefined;

  /**
   * The current count of documents deleted from the data source during the data source sync.
   *
   * @public
   */
  documentsDeleted?: string | undefined;

  /**
   * The current count of documents that failed to sync from the data source during the data source sync.
   *
   * @public
   */
  documentsFailed?: string | undefined;

  /**
   * The current count of documents crawled by the ongoing sync job in the data source.
   *
   * @public
   */
  documentsScanned?: string | undefined;
}

/**
 * Provides information about an Amazon Q Business data source connector synchronization job.
 *
 * @public
 */
export interface DataSourceSyncJob {
  /**
   * The identifier of a data source synchronization job.
   *
   * @public
   */
  executionId?: string | undefined;

  /**
   * The Unix time stamp when the data source synchronization job started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The Unix timestamp when the synchronization job completed.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The status of the synchronization job. When the `Status` field is set to `SUCCEEDED`, the synchronization job is done. If the status code is `FAILED`, the `ErrorCode` and `ErrorMessage` fields give you the reason for the failure.
   *
   * @public
   */
  status?: DataSourceSyncJobStatus | undefined;

  /**
   * If the `Status` field is set to `FAILED`, the `ErrorCode` field indicates the reason the synchronization failed.
   *
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * If the reason that the synchronization failed is due to an error with the underlying data source, this field contains a code that identifies the error.
   *
   * @public
   */
  dataSourceErrorCode?: string | undefined;

  /**
   * Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a data source connector.
   *
   * @public
   */
  metrics?: DataSourceSyncJobMetrics | undefined;
}

/**
 * @public
 */
export interface DeleteAttachmentRequest {
  /**
   * The unique identifier for the Amazon Q Business application environment.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The unique identifier of the conversation.
   *
   * @public
   */
  conversationId: string | undefined;

  /**
   * The unique identifier for the attachment.
   *
   * @public
   */
  attachmentId: string | undefined;

  /**
   * The unique identifier of the user involved in the conversation.
   *
   * @public
   */
  userId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAttachmentResponse {}

/**
 * @public
 */
export interface DeleteChatControlsConfigurationRequest {
  /**
   * The identifier of the application the chat controls have been configured for.
   *
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
export interface DeleteChatResponseConfigurationRequest {
  /**
   * The unique identifier of theAmazon Q Business application from which to delete the chat response configuration.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The unique identifier of the chat response configuration to delete from the specified application.
   *
   * @public
   */
  chatResponseConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteChatResponseConfigurationResponse {}

/**
 * @public
 */
export interface DeleteConversationRequest {
  /**
   * The identifier of the Amazon Q Business web experience conversation being deleted.
   *
   * @public
   */
  conversationId: string | undefined;

  /**
   * The identifier of the Amazon Q Business application associated with the conversation.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the user who is deleting the conversation.
   *
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
   * The identifier of the application in which the group mapping belongs.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the index you want to delete the group from.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * The name of the group you want to delete.
   *
   * @public
   */
  groupName: string | undefined;

  /**
   * The identifier of the data source linked to the group
   *
   * A group can be tied to multiple data sources. You can delete a group from accessing documents in a certain data source. For example, the groups "Research", "Engineering", and "Sales and Marketing" are all tied to the company's documents stored in the data sources Confluence and Salesforce. You want to delete "Research" and "Engineering" groups from Salesforce, so that these groups cannot access customer-related documents stored in Salesforce. Only "Sales and Marketing" should access documents in the Salesforce data source.
   *
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
   * The identifier of the application from which the user is being deleted.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The user email being deleted.
   *
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
 */
export interface DisassociatePermissionRequest {
  /**
   * The unique identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The statement ID of the permission to remove.
   *
   * @public
   */
  statementId: string | undefined;
}

/**
 * @public
 */
export interface DisassociatePermissionResponse {}

/**
 * The details of a document within an Amazon Q Business index.
 *
 * @public
 */
export interface DocumentDetails {
  /**
   * The identifier of the document.
   *
   * @public
   */
  documentId?: string | undefined;

  /**
   * The current status of the document.
   *
   * @public
   */
  status?: DocumentStatus | undefined;

  /**
   * An error message associated with the document.
   *
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * The timestamp for when the document was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp for when the document was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetChatControlsConfigurationRequest {
  /**
   * The identifier of the application for which the chat controls are configured.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The maximum number of configured chat controls to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the `maxResults` response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business chat controls configured.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Configuration information required to setup hallucination reduction. For more information, see [hallucination reduction](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/hallucination-reduction.html).
 *
 * > **Note:** The hallucination reduction feature won't work if chat orchestration controls are enabled for your application.
 *
 * @public
 */
export interface HallucinationReductionConfiguration {
  /**
   * Controls whether hallucination reduction has been enabled or disabled for your application. The default status is `DISABLED`.
   *
   * @public
   */
  hallucinationReductionControl?: HallucinationReductionControl | undefined;
}

/**
 * Provides information about users and group names associated with a topic control rule.
 *
 * @public
 */
export interface UsersAndGroups {
  /**
   * The user ids associated with a topic control rule.
   *
   * @public
   */
  userIds?: string[] | undefined;

  /**
   * The user group names associated with a topic control rule.
   *
   * @public
   */
  userGroups?: string[] | undefined;
}

/**
 * Provides configuration information about a rule.
 *
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
   * A rule for configuring how Amazon Q Business responds when it encounters a a blocked topic.
   *
   * @public
   */
  export interface ContentBlockerRuleMember {
    contentBlockerRule: ContentBlockerRule;
    contentRetrievalRule?: never;
    $unknown?: never;
  }

  /**
   * Rules for retrieving content from data sources connected to a Amazon Q Business application for a specific topic control configuration.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    contentBlockerRule: (value: ContentBlockerRule) => T;
    contentRetrievalRule: (value: ContentRetrievalRule) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Guardrail rules for an Amazon Q Business application. Amazon Q Business supports only one rule at a time.
 *
 * @public
 */
export interface Rule {
  /**
   * Users and groups to be included in a rule.
   *
   * @public
   */
  includedUsersAndGroups?: UsersAndGroups | undefined;

  /**
   * Users and groups to be excluded from a rule.
   *
   * @public
   */
  excludedUsersAndGroups?: UsersAndGroups | undefined;

  /**
   * The type of rule.
   *
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * The configuration information for a rule.
   *
   * @public
   */
  ruleConfiguration?: RuleConfiguration | undefined;
}

/**
 * The topic specific controls configured for an Amazon Q Business application.
 *
 * @public
 */
export interface TopicConfiguration {
  /**
   * A name for your topic control configuration.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description for your topic control configuration. Use this to outline how the large language model (LLM) should use this topic control configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of example phrases that you expect the end user to use in relation to the topic.
   *
   * @public
   */
  exampleChatMessages?: string[] | undefined;

  /**
   * Rules defined for a topic configuration.
   *
   * @public
   */
  rules: Rule[] | undefined;
}

/**
 * @public
 */
export interface GetChatControlsConfigurationResponse {
  /**
   * The response scope configured for a Amazon Q Business application. This determines whether your application uses its retrieval augmented generation (RAG) system to generate answers only from your enterprise data, or also uses the large language models (LLM) knowledge to respons to end user questions in chat.
   *
   * @public
   */
  responseScope?: ResponseScope | undefined;

  /**
   * The chat response orchestration settings for your application.
   *
   * > **Note:** Chat orchestration is optimized to work for English language content. For more details on language support in Amazon Q Business, see [Supported languages](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/supported-languages.html).
   *
   * @public
   */
  orchestrationConfiguration?: AppliedOrchestrationConfiguration | undefined;

  /**
   * The phrases blocked from chat by your chat control configuration.
   *
   * @public
   */
  blockedPhrases?: BlockedPhrasesConfiguration | undefined;

  /**
   * The topic specific controls configured for a Amazon Q Business application.
   *
   * @public
   */
  topicConfigurations?: TopicConfiguration[] | undefined;

  /**
   * The configuration details for `CREATOR_MODE`.
   *
   * @public
   */
  creatorModeConfiguration?: AppliedCreatorModeConfiguration | undefined;

  /**
   * If the `maxResults` response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business chat controls configured.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The hallucination reduction settings for your application.
   *
   * @public
   */
  hallucinationReductionConfiguration?: HallucinationReductionConfiguration | undefined;
}

/**
 * @public
 */
export interface GetChatResponseConfigurationRequest {
  /**
   * The unique identifier of the Amazon Q Business application containing the chat response configuration to retrieve.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The unique identifier of the chat response configuration to retrieve from the specified application.
   *
   * @public
   */
  chatResponseConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface GetChatResponseConfigurationResponse {
  /**
   * The unique identifier of the retrieved chat response configuration.
   *
   * @public
   */
  chatResponseConfigurationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the retrieved chat response configuration, which uniquely identifies the resource across all Amazon Web Services services.
   *
   * @public
   */
  chatResponseConfigurationArn?: string | undefined;

  /**
   * The human-readable name of the retrieved chat response configuration, making it easier to identify among multiple configurations.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The timestamp indicating when the chat response configuration was initially created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The currently active configuration settings that are being used to generate responses in the Amazon Q Business application.
   *
   * @public
   */
  inUseConfiguration?: ChatResponseConfigurationDetail | undefined;

  /**
   * Information about the most recent update to the configuration, including timestamp and modification details.
   *
   * @public
   */
  lastUpdateConfiguration?: ChatResponseConfigurationDetail | undefined;
}

/**
 * @public
 */
export interface GetDocumentContentRequest {
  /**
   * The unique identifier of the Amazon Q Business application containing the document. This ensures the request is scoped to the correct application environment and its associated security policies.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the index where documents are indexed.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * The identifier of the data source from which the document was ingested. This field is not present if the document is ingested by directly calling the BatchPutDocument API. If the document is from a file-upload data source, the datasource will be "uploaded-docs-file-stat-datasourceid".
   *
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * The unique identifier of the document that is indexed via BatchPutDocument API or file-upload or connector sync. It is also found in chat or chatSync response.
   *
   * @public
   */
  documentId: string | undefined;

  /**
   * Document outputFormat. Defaults to RAW if not selected.
   *
   * @public
   */
  outputFormat?: OutputFormat | undefined;
}

/**
 * @public
 */
export interface GetDocumentContentResponse {
  /**
   * A pre-signed URL that provides temporary access to download the document content directly from Amazon Q Business. The URL expires after 5 minutes for security purposes. This URL is generated only after successful ACL validation.
   *
   * @public
   */
  presignedUrl: string | undefined;

  /**
   * The MIME type of the document content. When outputFormat is RAW, this corresponds to the original document's MIME type (e.g., application/pdf, text/plain, application/vnd.openxmlformats-officedocument.wordprocessingml.document). When outputFormat is EXTRACTED, the MIME type is always application/json.
   *
   * @public
   */
  mimeType: string | undefined;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * The identifier of the application id the group is attached to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the index the group is attached to.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  groupName: string | undefined;

  /**
   * The identifier of the data source the group is attached to.
   *
   * @public
   */
  dataSourceId?: string | undefined;
}

/**
 * Provides the details of a group's status.
 *
 * @public
 */
export interface GroupStatusDetail {
  /**
   * The status of a group.
   *
   * @public
   */
  status?: GroupStatus | undefined;

  /**
   * The Unix timestamp when the Amazon Q Business application was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The details of an error associated a group status.
   *
   * @public
   */
  errorDetail?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface GetGroupResponse {
  /**
   * The current status of the group.
   *
   * @public
   */
  status?: GroupStatusDetail | undefined;

  /**
   * The status history of the group.
   *
   * @public
   */
  statusHistory?: GroupStatusDetail[] | undefined;
}

/**
 * @public
 */
export interface GetMediaRequest {
  /**
   * The identifier of the Amazon Q Business which contains the media object.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the Amazon Q Business conversation.
   *
   * @public
   */
  conversationId: string | undefined;

  /**
   * The identifier of the Amazon Q Business message.
   *
   * @public
   */
  messageId: string | undefined;

  /**
   * The identifier of the media object. You can find this in the `sourceAttributions` returned by the `Chat`, `ChatSync`, and `ListMessages` API responses.
   *
   * @public
   */
  mediaId: string | undefined;
}

/**
 * @public
 */
export interface GetMediaResponse {
  /**
   * The base64-encoded bytes of the media object.
   *
   * @public
   */
  mediaBytes?: Uint8Array | undefined;

  /**
   * The MIME type of the media object (image/png).
   *
   * @public
   */
  mediaMimeType?: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyRequest {
  /**
   * The unique identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyResponse {
  /**
   * The JSON representation of the permission policy.
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetUserRequest {
  /**
   * The identifier of the application connected to the user.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The user email address attached to the user.
   *
   * @public
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface GetUserResponse {
  /**
   * A list of user aliases attached to a user.
   *
   * @public
   */
  userAliases?: UserAlias[] | undefined;
}

/**
 * @public
 */
export interface ListAttachmentsRequest {
  /**
   * The unique identifier for the Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The unique identifier of the Amazon Q Business web experience conversation.
   *
   * @public
   */
  conversationId?: string | undefined;

  /**
   * The unique identifier of the user involved in the Amazon Q Business web experience conversation.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * If the number of attachments returned exceeds `maxResults`, Amazon Q Business returns a next token as a pagination token to retrieve the next set of attachments.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of attachements to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAttachmentsResponse {
  /**
   * An array of information on one or more attachments.
   *
   * @public
   */
  attachments?: Attachment[] | undefined;

  /**
   * If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of attachments.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChatResponseConfigurationsRequest {
  /**
   * The unique identifier of the Amazon Q Business application for which to list available chat response configurations.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The maximum number of chat response configurations to return in a single response. This parameter helps control pagination of results when many configurations exist.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token used to retrieve the next set of results when the number of configurations exceeds the specified `maxResults` value.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChatResponseConfigurationsResponse {
  /**
   * A list of chat response configuration summaries, each containing key information about an available configuration in the specified application.
   *
   * @public
   */
  chatResponseConfigurations?: ChatResponseConfiguration[] | undefined;

  /**
   * A pagination token that can be used in a subsequent request to retrieve additional chat response configurations if the results were truncated due to the `maxResults` parameter.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConversationsRequest {
  /**
   * The identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the user involved in the Amazon Q Business web experience conversation.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * If the `maxResults` response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business conversations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of Amazon Q Business conversations to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListConversationsResponse {
  /**
   * If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of messages.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of summary information on the configuration of one or more Amazon Q Business web experiences.
   *
   * @public
   */
  conversations?: Conversation[] | undefined;
}

/**
 * @public
 */
export interface ListDataSourceSyncJobsRequest {
  /**
   * The identifier of the data source connector.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The identifier of the Amazon Q Business application connected to the data source.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the index used with the Amazon Q Business data source connector.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * If the `maxResults` response was incpmplete because there is more data to retriever, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of responses.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of synchronization jobs to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The start time of the data source connector sync.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time of the data source connector sync.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Only returns synchronization jobs with the `Status` field equal to the specified status.
   *
   * @public
   */
  statusFilter?: DataSourceSyncJobStatus | undefined;
}

/**
 * @public
 */
export interface ListDataSourceSyncJobsResponse {
  /**
   * A history of synchronization jobs for the data source connector.
   *
   * @public
   */
  history?: DataSourceSyncJob[] | undefined;

  /**
   * If the response is truncated, Amazon Q Business returns this token. You can use this token in any subsequent request to retrieve the next set of jobs.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDocumentsRequest {
  /**
   * The identifier of the application id the documents are attached to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the index the documents are attached to.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * The identifier of the data sources the documents are attached to.
   *
   * @public
   */
  dataSourceIds?: string[] | undefined;

  /**
   * If the `maxResults` response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of documents.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of documents to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDocumentsResponse {
  /**
   * A list of document details.
   *
   * @public
   */
  documentDetailList?: DocumentDetails[] | undefined;

  /**
   * If the `maxResults` response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of documents.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * The identifier of the application for getting a list of groups mapped to users.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the index for getting a list of groups mapped to users.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * The timestamp identifier used for the latest `PUT` or `DELETE` action for mapping users to their groups.
   *
   * @public
   */
  updatedEarlierThan: Date | undefined;

  /**
   * The identifier of the data source for getting a list of groups mapped to users.
   *
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of groups that are mapped to users.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of returned groups that are mapped to users.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information for groups.
 *
 * @public
 */
export interface GroupSummary {
  /**
   * The name of the group the summary information is for.
   *
   * @public
   */
  groupName?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * If the response is truncated, Amazon Q Business returns this token that you can use in the subsequent request to retrieve the next set of groups that are mapped to users.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Summary information for list of groups that are mapped to users.
   *
   * @public
   */
  items?: GroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMessagesRequest {
  /**
   * The identifier of the Amazon Q Business web experience conversation.
   *
   * @public
   */
  conversationId: string | undefined;

  /**
   * The identifier for the Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the user involved in the Amazon Q Business web experience conversation.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * If the number of messages returned exceeds `maxResults`, Amazon Q Business returns a next token as a pagination token to retrieve the next set of messages.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of messages to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A message in an Amazon Q Business web experience.
 *
 * @public
 */
export interface Message {
  /**
   * The identifier of the Amazon Q Business web experience message.
   *
   * @public
   */
  messageId?: string | undefined;

  /**
   * The content of the Amazon Q Business web experience message.
   *
   * @public
   */
  body?: string | undefined;

  /**
   * The timestamp of the first Amazon Q Business web experience message.
   *
   * @public
   */
  time?: Date | undefined;

  /**
   * The type of Amazon Q Business message, whether `HUMAN` or `AI` generated.
   *
   * @public
   */
  type?: MessageType | undefined;

  /**
   * A file directly uploaded into an Amazon Q Business web experience chat.
   *
   * @public
   */
  attachments?: AttachmentOutput[] | undefined;

  /**
   * The source documents used to generate Amazon Q Business web experience message.
   *
   * @public
   */
  sourceAttribution?: (SourceAttribution | null)[] | undefined;

  /**
   * An output event that Amazon Q Business returns to an user who wants to perform a plugin action during a non-streaming chat conversation. It contains information about the selected action with a list of possible user input fields, some pre-populated by Amazon Q Business.
   *
   * @public
   */
  actionReview?: ActionReview | undefined;

  /**
   * Performs an Amazon Q Business plugin action during a non-streaming chat conversation.
   *
   * @public
   */
  actionExecution?: ActionExecution | undefined;
}

/**
 * @public
 */
export interface ListMessagesResponse {
  /**
   * An array of information on one or more messages.
   *
   * @public
   */
  messages?: Message[] | undefined;

  /**
   * If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of messages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPluginActionsRequest {
  /**
   * The identifier of the Amazon Q Business application the plugin is attached to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the Amazon Q Business plugin.
   *
   * @public
   */
  pluginId: string | undefined;

  /**
   * If the number of plugin actions returned exceeds `maxResults`, Amazon Q Business returns a next token as a pagination token to retrieve the next set of plugin actions.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of plugin actions to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPluginActionsResponse {
  /**
   * If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of plugin actions.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of information on one or more plugin actions.
   *
   * @public
   */
  items?: ActionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPluginTypeActionsRequest {
  /**
   * The type of the plugin.
   *
   * @public
   */
  pluginType: PluginType | undefined;

  /**
   * If the number of plugins returned exceeds `maxResults`, Amazon Q Business returns a next token as a pagination token to retrieve the next set of plugins.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of plugins to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPluginTypeActionsResponse {
  /**
   * If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of plugins.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of information on one or more plugins.
   *
   * @public
   */
  items?: ActionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPluginTypeMetadataRequest {
  /**
   * If the metadata returned exceeds `maxResults`, Amazon Q Business returns a next token as a pagination token to retrieve the next set of metadata.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of plugin metadata items to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary metadata information for a Amazon Q Business plugin.
 *
 * @public
 */
export interface PluginTypeMetadataSummary {
  /**
   * The type of the plugin.
   *
   * @public
   */
  type?: PluginType | undefined;

  /**
   * The category of the plugin type.
   *
   * @public
   */
  category?: PluginTypeCategory | undefined;

  /**
   * The description assigned by Amazon Q Business to a plugin. You can't modify this value.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListPluginTypeMetadataResponse {
  /**
   * If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of plugin metadata.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of information on plugin metadata.
   *
   * @public
   */
  items?: PluginTypeMetadataSummary[] | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsRequest {
  /**
   * The identifier of the Amazon Q Business application linked to the subscription.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * If the `maxResults` response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business subscriptions.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of Amazon Q Business subscriptions to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about an Amazon Q Business subscription.
 *
 * Subscriptions are used to provide access for an IAM Identity Center user or a group to an Amazon Q Business application.
 *
 * Amazon Q Business offers two subscription tiers: `Q_LITE` and `Q_BUSINESS`. Subscription tier determines feature access for the user. For more information on subscriptions and pricing tiers, see [Amazon Q Business pricing](https://aws.amazon.com/q/business/pricing/).
 *
 * @public
 */
export interface Subscription {
  /**
   * The identifier of the Amazon Q Business subscription to be updated.
   *
   * @public
   */
  subscriptionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q Business subscription that was updated.
   *
   * @public
   */
  subscriptionArn?: string | undefined;

  /**
   * The IAM Identity Center `UserId` or `GroupId` of a user or group in the IAM Identity Center instance connected to the Amazon Q Business application.
   *
   * @public
   */
  principal?: SubscriptionPrincipal | undefined;

  /**
   * The type of your current Amazon Q Business subscription.
   *
   * @public
   */
  currentSubscription?: SubscriptionDetails | undefined;

  /**
   * The type of the Amazon Q Business subscription for the next month.
   *
   * @public
   */
  nextSubscription?: SubscriptionDetails | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsResponse {
  /**
   * If the response is truncated, Amazon Q Business returns this token. You can use this token in a subsequent request to retrieve the next set of subscriptions.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of summary information on the subscriptions configured for an Amazon Q Business application.
   *
   * @public
   */
  subscriptions?: Subscription[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Q Business application or data source to get a list of tags for.
   *
   * @public
   */
  resourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tags associated with the Amazon Q Business application or data source.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * End user feedback on an AI-generated web experience chat message usefulness.
 *
 * @public
 */
export interface MessageUsefulnessFeedback {
  /**
   * The usefulness value assigned by an end user to a message.
   *
   * @public
   */
  usefulness: MessageUsefulness | undefined;

  /**
   * The reason for a usefulness rating.
   *
   * @public
   */
  reason?: MessageUsefulnessReason | undefined;

  /**
   * A comment given by an end user on the usefulness of an AI-generated chat message.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * The timestamp for when the feedback was submitted.
   *
   * @public
   */
  submittedAt: Date | undefined;
}

/**
 * @public
 */
export interface PutFeedbackRequest {
  /**
   * The identifier of the application associated with the feedback.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the user giving the feedback.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The identifier of the conversation the feedback is attached to.
   *
   * @public
   */
  conversationId: string | undefined;

  /**
   * The identifier of the chat message that the feedback was given for.
   *
   * @public
   */
  messageId: string | undefined;

  /**
   * The timestamp for when the feedback was recorded.
   *
   * @public
   */
  messageCopiedAt?: Date | undefined;

  /**
   * The feedback usefulness value given by the user to the chat message.
   *
   * @public
   */
  messageUsefulness?: MessageUsefulnessFeedback | undefined;
}

/**
 * The sub groups that belong to a group.
 *
 * @public
 */
export interface MemberGroup {
  /**
   * The name of the sub group.
   *
   * @public
   */
  groupName: string | undefined;

  /**
   * The type of the sub group.
   *
   * @public
   */
  type?: MembershipType | undefined;
}

/**
 * The users that belong to a group.
 *
 * @public
 */
export interface MemberUser {
  /**
   * The identifier of the user you want to map to a group.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * The type of the user.
   *
   * @public
   */
  type?: MembershipType | undefined;
}

/**
 * A list of users or sub groups that belong to a group. This is for generating Amazon Q Business chat results only from document a user has access to.
 *
 * @public
 */
export interface GroupMembers {
  /**
   * A list of sub groups that belong to a group. For example, the sub groups "Research", "Engineering", and "Sales and Marketing" all belong to the group "Company".
   *
   * @public
   */
  memberGroups?: MemberGroup[] | undefined;

  /**
   * A list of users that belong to a group. For example, a list of interns all belong to the "Interns" group.
   *
   * @public
   */
  memberUsers?: MemberUser[] | undefined;

  /**
   * Information required for Amazon Q Business to find a specific file in an Amazon S3 bucket.
   *
   * @public
   */
  s3PathForGroupMembers?: S3 | undefined;
}

/**
 * @public
 */
export interface PutGroupRequest {
  /**
   * The identifier of the application in which the user and group mapping belongs.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the index in which you want to map users to their groups.
   *
   * @public
   */
  indexId: string | undefined;

  /**
   * The list that contains your users or sub groups that belong the same group. For example, the group "Company" includes the user "CEO" and the sub groups "Research", "Engineering", and "Sales and Marketing".
   *
   * @public
   */
  groupName: string | undefined;

  /**
   * The identifier of the data source for which you want to map users to their groups. This is useful if a group is tied to multiple data sources, but you only want the group to access documents of a certain data source. For example, the groups "Research", "Engineering", and "Sales and Marketing" are all tied to the company's documents stored in the data sources Confluence and Salesforce. However, "Sales and Marketing" team only needs access to customer-related documents stored in Salesforce.
   *
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * The type of the group.
   *
   * @public
   */
  type: MembershipType | undefined;

  /**
   * A list of users or sub groups that belong to a group. This is for generating Amazon Q Business chat results only from document a user has access to.
   *
   * @public
   */
  groupMembers: GroupMembers | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has access to the S3 file that contains your list of users that belong to a group.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface PutGroupResponse {}

/**
 * Provides information about the relevance score of content.
 *
 * @public
 */
export interface ScoreAttributes {
  /**
   * The confidence level of the relevance score.
   *
   * @public
   */
  scoreConfidence?: ScoreConfidence | undefined;
}

/**
 * Represents a piece of content that is relevant to a search query.
 *
 * @public
 */
export interface RelevantContent {
  /**
   * The actual content of the relevant item.
   *
   * @public
   */
  content?: string | undefined;

  /**
   * The unique identifier of the document containing the relevant content.
   *
   * @public
   */
  documentId?: string | undefined;

  /**
   * The title of the document containing the relevant content.
   *
   * @public
   */
  documentTitle?: string | undefined;

  /**
   * The URI of the document containing the relevant content.
   *
   * @public
   */
  documentUri?: string | undefined;

  /**
   * Additional attributes of the document containing the relevant content.
   *
   * @public
   */
  documentAttributes?: DocumentAttribute[] | undefined;

  /**
   * Attributes related to the relevance score of the content.
   *
   * @public
   */
  scoreAttributes?: ScoreAttributes | undefined;
}

/**
 * @public
 */
export interface SearchRelevantContentResponse {
  /**
   * The list of relevant content items found.
   *
   * @public
   */
  relevantContent?: RelevantContent[] | undefined;

  /**
   * The token to use to retrieve the next set of results, if there are any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDataSourceSyncJobRequest {
  /**
   * The identifier of the data source connector.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The identifier of Amazon Q Business application the data source is connected to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the index used with the data source connector.
   *
   * @public
   */
  indexId: string | undefined;
}

/**
 * @public
 */
export interface StartDataSourceSyncJobResponse {
  /**
   * The identifier for a particular synchronization job.
   *
   * @public
   */
  executionId?: string | undefined;
}

/**
 * @public
 */
export interface StopDataSourceSyncJobRequest {
  /**
   * The identifier of the data source connector.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The identifier of the Amazon Q Business application that the data source is connected to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the index used with the Amazon Q Business data source connector.
   *
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
   * The Amazon Resource Name (ARN) of the Amazon Q Business application or data source to tag.
   *
   * @public
   */
  resourceARN: string | undefined;

  /**
   * A list of tag keys to add to the Amazon Q Business application or data source. If a tag already exists, the existing value is replaced with the new value.
   *
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
   * The Amazon Resource Name (ARN) of the Amazon Q Business application, or data source to remove the tag from.
   *
   * @public
   */
  resourceARN: string | undefined;

  /**
   * A list of tag keys to remove from the Amazon Q Business application or data source. If a tag key does not exist on the resource, it is ignored.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * Configuration information required to enable chat orchestration for your Amazon Q Business application.
 *
 * > **Note:** Chat orchestration is optimized to work for English language content. For more details on language support in Amazon Q Business, see [Supported languages](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/supported-languages.html).
 *
 * @public
 */
export interface OrchestrationConfiguration {
  /**
   * Status information about whether chat orchestration is activated or deactivated for your Amazon Q Business application.
   *
   * @public
   */
  control: OrchestrationControl | undefined;
}

/**
 * @public
 */
export interface UpdateChatControlsConfigurationRequest {
  /**
   * The identifier of the application for which the chat controls are configured.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * A token that you provide to identify the request to update a Amazon Q Business application chat configuration.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The response scope configured for your application. This determines whether your application uses its retrieval augmented generation (RAG) system to generate answers only from your enterprise data, or also uses the large language models (LLM) knowledge to respons to end user questions in chat.
   *
   * @public
   */
  responseScope?: ResponseScope | undefined;

  /**
   * The chat response orchestration settings for your application.
   *
   * @public
   */
  orchestrationConfiguration?: OrchestrationConfiguration | undefined;

  /**
   * The phrases blocked from chat by your chat control configuration.
   *
   * @public
   */
  blockedPhrasesConfigurationUpdate?: BlockedPhrasesConfigurationUpdate | undefined;

  /**
   * The configured topic specific chat controls you want to update.
   *
   * @public
   */
  topicConfigurationsToCreateOrUpdate?: TopicConfiguration[] | undefined;

  /**
   * The configured topic specific chat controls you want to delete.
   *
   * @public
   */
  topicConfigurationsToDelete?: TopicConfiguration[] | undefined;

  /**
   * The configuration details for `CREATOR_MODE`.
   *
   * @public
   */
  creatorModeConfiguration?: CreatorModeConfiguration | undefined;

  /**
   * The hallucination reduction settings for your application.
   *
   * @public
   */
  hallucinationReductionConfiguration?: HallucinationReductionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateChatControlsConfigurationResponse {}
