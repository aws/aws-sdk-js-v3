// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";
import { DocumentType as __DocumentType } from "@smithy/types";

import { KendraServiceException as __BaseException } from "./KendraServiceException";

/**
 * @public
 * <p>Summary information on an access control configuration that you created for your
 *             documents in an index.</p>
 */
export interface AccessControlConfigurationSummary {
  /**
   * @public
   * <p>The identifier of the access control configuration.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>Access Control List files for the documents in a data source. For the format of the
 *             file, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html">Access control
 *                 for S3 data sources</a>.</p>
 */
export interface AccessControlListConfiguration {
  /**
   * @public
   * <p>Path to the Amazon S3 bucket that contains the ACL files.</p>
   */
  KeyPath?: string;
}

/**
 * @public
 * <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>Provides information about the column that should be used for filtering the query
 *             response by groups.</p>
 */
export interface AclConfiguration {
  /**
   * @public
   * <p>A list of groups, separated by semi-colons, that filters a query response based on
   *             user context. The document is only returned to users that are in one of the groups
   *             specified in the <code>UserContext</code> field of the <code>Query</code> API.</p>
   */
  AllowedGroupsColumnName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HighlightType = {
  STANDARD: "STANDARD",
  THESAURUS_SYNONYM: "THESAURUS_SYNONYM",
} as const;

/**
 * @public
 */
export type HighlightType = (typeof HighlightType)[keyof typeof HighlightType];

/**
 * @public
 * <p>Provides information that you can use to highlight a search result so that your users
 *             can quickly identify terms in the response.</p>
 */
export interface Highlight {
  /**
   * @public
   * <p>The zero-based location in the response string where the highlight starts.</p>
   */
  BeginOffset: number | undefined;

  /**
   * @public
   * <p>The zero-based location in the response string where the highlight ends.</p>
   */
  EndOffset: number | undefined;

  /**
   * @public
   * <p>Indicates whether the response is the best response. True if this is the best
   *             response; otherwise, false.</p>
   */
  TopAnswer?: boolean;

  /**
   * @public
   * <p>The highlight type. </p>
   */
  Type?: HighlightType | string;
}

/**
 * @public
 * <p>Provides text and information about where to highlight the text.</p>
 */
export interface TextWithHighlights {
  /**
   * @public
   * <p>The text to display to the user.</p>
   */
  Text?: string;

  /**
   * @public
   * <p>The beginning and end of the text that should be highlighted.</p>
   */
  Highlights?: Highlight[];
}

/**
 * @public
 * <p>An attribute returned with a document from a search.</p>
 */
export interface AdditionalResultAttributeValue {
  /**
   * @public
   * <p>The text associated with the attribute and information about the highlight to apply to
   *             the text.</p>
   */
  TextWithHighlightsValue?: TextWithHighlights;
}

/**
 * @public
 * @enum
 */
export const AdditionalResultAttributeValueType = {
  TEXT_WITH_HIGHLIGHTS_VALUE: "TEXT_WITH_HIGHLIGHTS_VALUE",
} as const;

/**
 * @public
 */
export type AdditionalResultAttributeValueType =
  (typeof AdditionalResultAttributeValueType)[keyof typeof AdditionalResultAttributeValueType];

/**
 * @public
 * <p>An attribute returned from an index query.</p>
 */
export interface AdditionalResultAttribute {
  /**
   * @public
   * <p>The key that identifies the attribute.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The data type of the <code>Value</code> property.</p>
   */
  ValueType: AdditionalResultAttributeValueType | string | undefined;

  /**
   * @public
   * <p>An object that contains the attribute value.</p>
   */
  Value: AdditionalResultAttributeValue | undefined;
}

/**
 * @public
 * <p>Maps a column or attribute in the data source to an index field. You must first create the
 *       fields in the index using the <code>UpdateIndex</code> API.</p>
 */
export interface DataSourceToIndexFieldMapping {
  /**
   * @public
   * <p>The name of the column or attribute in the data source.</p>
   */
  DataSourceFieldName: string | undefined;

  /**
   * @public
   * <p>The type of data stored in the column or attribute.</p>
   */
  DateFieldFormat?: string;

  /**
   * @public
   * <p>The name of the field in the index.</p>
   */
  IndexFieldName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AlfrescoEntity = {
  blog: "blog",
  documentLibrary: "documentLibrary",
  wiki: "wiki",
} as const;

/**
 * @public
 */
export type AlfrescoEntity = (typeof AlfrescoEntity)[keyof typeof AlfrescoEntity];

/**
 * @public
 * <p>Information required to find a specific file in an Amazon S3 bucket.</p>
 */
export interface S3Path {
  /**
   * @public
   * <p>The name of the S3 bucket that contains the file.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The name of the file.</p>
   */
  Key: string | undefined;
}

/**
 * @public
 * <p>Provides the configuration information to connect to an Amazon VPC.</p>
 */
export interface DataSourceVpcConfiguration {
  /**
   * @public
   * <p>A list of identifiers for subnets within your Amazon VPC. The subnets should be able to
   *       connect to each other in the VPC, and they should have outgoing access to the Internet through
   *       a NAT device.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>A list of identifiers of security groups within your Amazon VPC. The security groups
   *       should enable Amazon Kendra to connect to the data source.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * @public
 * <p>Provides the configuration information to connect to Alfresco as your data
 *             source.</p>
 *          <note>
 *             <p>Support for <code>AlfrescoConfiguration</code> ended May 2023.
 *                 We recommend migrating to or using the Alfresco data source template
 *                 schema / <a href="https://docs.aws.amazon.com/kendra/latest/APIReference/API_TemplateConfiguration.html">TemplateConfiguration</a> API.</p>
 *          </note>
 */
export interface AlfrescoConfiguration {
  /**
   * @public
   * <p>The URL of the Alfresco site. For example,
   *             <i>https://hostname:8080</i>.</p>
   */
  SiteUrl: string | undefined;

  /**
   * @public
   * <p>The identifier of the Alfresco site. For example, <i>my-site</i>.</p>
   */
  SiteId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the
   *             key-value pairs required to connect to your Alfresco data source. The secret must
   *             contain a JSON structure with the following keys:</p>
   *          <ul>
   *             <li>
   *                <p>username—The user name of the Alfresco account.</p>
   *             </li>
   *             <li>
   *                <p>password—The password of the Alfresco account.</p>
   *             </li>
   *          </ul>
   */
  SecretArn: string | undefined;

  /**
   * @public
   * <p>The path to the SSL certificate stored in an Amazon S3 bucket. You use this to
   *             connect to Alfresco if you require a secure SSL connection.</p>
   *          <p>You can simply generate a self-signed X509 certificate on any computer using OpenSSL.
   *             For an example of using OpenSSL to create an X509 certificate, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/configuring-https-ssl.html">Create and sign an X509 certificate</a>.</p>
   */
  SslCertificateS3Path: S3Path | undefined;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index shared files.</p>
   */
  CrawlSystemFolders?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index comments of blogs and other content.</p>
   */
  CrawlComments?: boolean;

  /**
   * @public
   * <p>Specify whether to index document libraries, wikis, or blogs. You can specify one or
   *             more of these options.</p>
   */
  EntityFilter?: (AlfrescoEntity | string)[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of Alfresco document libraries to Amazon Kendra index field names. To create
   *             custom fields, use the <code>UpdateIndex</code> API before you map to Alfresco fields.
   *             For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html"> Mapping data source fields</a>. The
   *             Alfresco data source field names must exist in your Alfresco custom metadata.</p>
   */
  DocumentLibraryFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of Alfresco blogs to Amazon Kendra index field names. To create custom
   *             fields, use the <code>UpdateIndex</code> API before you map to Alfresco fields. For more
   *             information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">
   *                 Mapping data source fields</a>. The Alfresco data source field names must exist
   *             in your Alfresco custom metadata.</p>
   */
  BlogFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of Alfresco wikis to Amazon Kendra index field names. To create custom
   *             fields, use the <code>UpdateIndex</code> API before you map to Alfresco fields. For more
   *             information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">
   *                 Mapping data source fields</a>. The Alfresco data source field names must exist
   *             in your Alfresco custom metadata.</p>
   */
  WikiFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of regular expression patterns to include certain files in your Alfresco data
   *             source. Files that match the patterns are included in the index. Files that don't match
   *             the patterns are excluded from the index. If a file matches both an inclusion pattern
   *             and an exclusion pattern, the exclusion pattern takes precedence and the file isn't
   *             included in the index.</p>
   */
  InclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain files in your Alfresco data
   *             source. Files that match the patterns are excluded from the index. Files that don't
   *             match the patterns are included in the index. If a file matches both an inclusion
   *             pattern and an exclusion pattern, the exclusion pattern takes precedence and the file
   *             isn't included in the index.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * @public
   * <p>Configuration information for an Amazon Virtual Private Cloud to connect to your Alfresco.
   *             For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;
}

/**
 * @public
 * @enum
 */
export const EntityType = {
  GROUP: "GROUP",
  USER: "USER",
} as const;

/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 * <p>Provides the configuration information for users or groups in
 *             your IAM Identity Center identity source to grant access your Amazon Kendra
 *             experience.</p>
 */
export interface EntityConfiguration {
  /**
   * @public
   * <p>The identifier of a user or group in your IAM Identity Center identity
   *             source. For example, a user ID could be an email.</p>
   */
  EntityId: string | undefined;

  /**
   * @public
   * <p>Specifies whether you are configuring a <code>User</code> or a
   *             <code>Group</code>.</p>
   */
  EntityType: EntityType | string | undefined;
}

/**
 * @public
 */
export interface AssociateEntitiesToExperienceRequest {
  /**
   * @public
   * <p>The identifier of your Amazon Kendra experience.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index for your Amazon Kendra experience.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>Lists users or groups in your IAM Identity Center identity source.</p>
   */
  EntityList: EntityConfiguration[] | undefined;
}

/**
 * @public
 * <p>Information on the users or groups in your IAM Identity Center identity
 *             source that failed to properly configure with your Amazon Kendra experience.</p>
 */
export interface FailedEntity {
  /**
   * @public
   * <p>The identifier of the user or group in your IAM Identity Center identity
   *             source. For example, a user ID could be an email.</p>
   */
  EntityId?: string;

  /**
   * @public
   * <p>The reason the user or group in your IAM Identity Center identity source
   *             failed to properly configure with your Amazon Kendra experience.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface AssociateEntitiesToExperienceResponse {
  /**
   * @public
   * <p>Lists the users or groups in your IAM Identity Center identity source that
   *             failed to properly configure with your Amazon Kendra experience.</p>
   */
  FailedEntityList?: FailedEntity[];
}

/**
 * @public
 * <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The resource you want to use already exists. Please check you have provided the
 *             correct resource and try again.</p>
 */
export class ResourceAlreadyExistException extends __BaseException {
  readonly name: "ResourceAlreadyExistException" = "ResourceAlreadyExistException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @enum
 */
export const Persona = {
  OWNER: "OWNER",
  VIEWER: "VIEWER",
} as const;

/**
 * @public
 */
export type Persona = (typeof Persona)[keyof typeof Persona];

/**
 * @public
 * <p>Provides the configuration information for users or groups in your
 *             IAM Identity Center identity source for access to your Amazon Kendra experience.
 *             Specific permissions are defined for each user or group once they are
 *             granted access to your Amazon Kendra experience.</p>
 */
export interface EntityPersonaConfiguration {
  /**
   * @public
   * <p>The identifier of a user or group in your IAM Identity Center identity
   *             source. For example, a user ID could be an email.</p>
   */
  EntityId: string | undefined;

  /**
   * @public
   * <p>The persona that defines the specific permissions of the user or group
   *             in your IAM Identity Center identity source. The available personas or
   *             access roles are <code>Owner</code> and <code>Viewer</code>. For more
   *             information on these personas, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html#access-search-experience">Providing
   *                 access to your search page</a>.</p>
   */
  Persona: Persona | string | undefined;
}

/**
 * @public
 */
export interface AssociatePersonasToEntitiesRequest {
  /**
   * @public
   * <p>The identifier of your Amazon Kendra experience.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index for your Amazon Kendra experience.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The personas that define the specific permissions of users or groups in
   *             your IAM Identity Center identity source. The available personas or access
   *             roles are <code>Owner</code> and <code>Viewer</code>. For more information
   *             on these personas, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html#access-search-experience">Providing
   *                 access to your search page</a>.</p>
   */
  Personas: EntityPersonaConfiguration[] | undefined;
}

/**
 * @public
 */
export interface AssociatePersonasToEntitiesResponse {
  /**
   * @public
   * <p>Lists the users or groups in your IAM Identity Center identity source that
   *             failed to properly configure with your Amazon Kendra experience.</p>
   */
  FailedEntityList?: FailedEntity[];
}

/**
 * @public
 * <p>The value of a document attribute. You can only provide one value for a document
 *             attribute.</p>
 */
export interface DocumentAttributeValue {
  /**
   * @public
   * <p>A string, such as "department".</p>
   */
  StringValue?: string;

  /**
   * @public
   * <p>A list of strings. The default maximum length or number of strings is 10.</p>
   */
  StringListValue?: string[];

  /**
   * @public
   * <p>A long integer value.</p>
   */
  LongValue?: number;

  /**
   * @public
   * <p>A date expressed as an ISO 8601 string.</p>
   *          <p>It is important for the time zone to be included in the ISO 8601 date-time format. For
   *             example, 2012-03-25T12:30:10+01:00 is the ISO 8601 date-time format for March 25th 2012
   *             at 12:30PM (plus 10 seconds) in Central European Time.</p>
   */
  DateValue?: Date;
}

/**
 * @public
 * <p>A document attribute or metadata field. To create custom document attributes, see
 *                 <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-attributes.html">Custom
 *                 attributes</a>.</p>
 */
export interface DocumentAttribute {
  /**
   * @public
   * <p>The identifier for the attribute.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value of the attribute.</p>
   */
  Value: DocumentAttributeValue | undefined;
}

/**
 * @public
 * @enum
 */
export const AttributeSuggestionsMode = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type AttributeSuggestionsMode = (typeof AttributeSuggestionsMode)[keyof typeof AttributeSuggestionsMode];

/**
 * @public
 * <p>Provides the configuration information for a document field/attribute that you want to base query
 *             suggestions on.</p>
 */
export interface SuggestableConfig {
  /**
   * @public
   * <p>The name of the document field/attribute.</p>
   */
  AttributeName?: string;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> means the document field/attribute is suggestible, so the contents within the
   *             field can be used for query suggestions.</p>
   */
  Suggestable?: boolean;
}

/**
 * @public
 * <p>Gets information on the configuration of document fields/attributes that you want to base
 *             query suggestions on. To change your configuration, use <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_AttributeSuggestionsUpdateConfig.html">AttributeSuggestionsUpdateConfig</a> and then call <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateQuerySuggestionsConfig.html">UpdateQuerySuggestionsConfig</a>.</p>
 */
export interface AttributeSuggestionsDescribeConfig {
  /**
   * @public
   * <p>The list of fields/attributes that you want to set as suggestible for query suggestions.</p>
   */
  SuggestableConfigList?: SuggestableConfig[];

  /**
   * @public
   * <p>The mode is set to either <code>ACTIVE</code> or <code>INACTIVE</code>. If the <code>Mode</code>
   *             for query history is set to <code>ENABLED</code> when calling <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateQuerySuggestionsConfig.html">UpdateQuerySuggestionsConfig</a>
   *             and <code>AttributeSuggestionsMode</code> to use fields/attributes is set to <code>ACTIVE</code>,
   *             and you haven't set your <code>SuggestionTypes</code> preference to <code>DOCUMENT_ATTRIBUTES</code>,
   *             then Amazon Kendra uses the query history.</p>
   */
  AttributeSuggestionsMode?: AttributeSuggestionsMode | string;
}

/**
 * @public
 * <p>Data source information for user context filtering.</p>
 */
export interface DataSourceGroup {
  /**
   * @public
   * <p>The identifier of the group you want to add to your list of groups. This is for
   *          filtering search results based on the groups' access to documents.</p>
   */
  GroupId: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source group you want to add to your list of data source
   *          groups. This is for filtering search results based on the groups' access to documents in
   *          that data source.</p>
   */
  DataSourceId: string | undefined;
}

/**
 * @public
 * <p>Provides information about the user context for an Amazon Kendra index.</p>
 *          <p>User context filtering is a kind of personalized search with the benefit of controlling
 *          access to documents. For example, not all teams that search the company portal for
 *          information should access top-secret company documents, nor are these documents relevant to
 *          all users. Only specific users or groups of teams given access to top-secret documents
 *          should see these documents in their search results.</p>
 *          <p>You provide one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>User token</p>
 *             </li>
 *             <li>
 *                <p>User ID, the groups the user belongs to, and any data sources the groups can
 *                access.</p>
 *             </li>
 *          </ul>
 *          <p>If you provide both, an exception is thrown.</p>
 */
export interface UserContext {
  /**
   * @public
   * <p>The user context token for filtering search results for a user. It must be a JWT or a
   *          JSON token.</p>
   */
  Token?: string;

  /**
   * @public
   * <p>The identifier of the user you want to filter search results based on their access to
   *          documents.</p>
   */
  UserId?: string;

  /**
   * @public
   * <p>The list of groups you want to filter search results based on the groups' access to
   *          documents.</p>
   */
  Groups?: string[];

  /**
   * @public
   * <p>The list of data source groups you want to filter search results based on groups' access
   *          to documents in that data source.</p>
   */
  DataSourceGroups?: DataSourceGroup[];
}

/**
 * @public
 * <p>Updates the configuration information for the document fields/attributes that you want
 *             to base query suggestions on.</p>
 *          <p>To deactivate using documents fields for query suggestions, set the mode to
 *             <code>INACTIVE</code>. You must also set <code>SuggestionTypes</code> as either
 *             <code>QUERY</code> or <code>DOCUMENT_ATTRIBUTES</code> and then call <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_GetQuerySuggestions.html">GetQuerySuggestions</a>. If you set to <code>QUERY</code>, then
 *             Amazon Kendra uses the query history to base suggestions on. If you set to
 *             <code>DOCUMENT_ATTRIBUTES</code>, then Amazon Kendra uses the contents of document
 *             fields to base suggestions on.</p>
 */
export interface AttributeSuggestionsUpdateConfig {
  /**
   * @public
   * <p>The list of fields/attributes that you want to set as suggestible for query
   *             suggestions.</p>
   */
  SuggestableConfigList?: SuggestableConfig[];

  /**
   * @public
   * <p>You can set the mode to <code>ACTIVE</code> or <code>INACTIVE</code>. You must also set
   *             <code>SuggestionTypes</code> as either <code>QUERY</code> or <code>DOCUMENT_ATTRIBUTES</code>
   *             and then call <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_GetQuerySuggestions.html">GetQuerySuggestions</a>. If <code>Mode</code> to use query history is set to
   *             <code>ENABLED</code> when calling <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateQuerySuggestionsConfig.html">UpdateQuerySuggestionsConfig</a> and <code>AttributeSuggestionsMode</code> to use
   *             fields/attributes is set to <code>ACTIVE</code>, and you haven't set your
   *             <code>SuggestionTypes</code> preference to <code>DOCUMENT_ATTRIBUTES</code>, then
   *             Amazon Kendra uses the query history.</p>
   */
  AttributeSuggestionsMode?: AttributeSuggestionsMode | string;
}

/**
 * @public
 * <p>Provides the configuration information to connect to websites that require basic user
 *             authentication.</p>
 */
export interface BasicAuthenticationConfiguration {
  /**
   * @public
   * <p>The name of the website host you want to connect to using authentication
   *             credentials.</p>
   *          <p>For example, the host name of https://a.example.com/page1.html is
   *             "a.example.com".</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>The port number of the website host you want to connect to using authentication
   *             credentials.</p>
   *          <p>For example, the port for https://a.example.com/page1.html is 443, the standard port
   *             for HTTPS.</p>
   */
  Port: number | undefined;

  /**
   * @public
   * <p>Your secret ARN, which you can create in <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html">Secrets Manager</a>
   *          </p>
   *          <p>You use a secret if basic authentication credentials are required to connect to a
   *             website. The secret stores your credentials of user name and password.</p>
   */
  Credentials: string | undefined;
}

/**
 * @public
 * <p>Provides the configuration information to connect to websites that require user
 *             authentication.</p>
 */
export interface AuthenticationConfiguration {
  /**
   * @public
   * <p>The list of configuration information that's required to connect to and crawl a
   *             website host using basic authentication credentials.</p>
   *          <p>The list includes the name and port number of the website host.</p>
   */
  BasicAuthentication?: BasicAuthenticationConfiguration[];
}

/**
 * @public
 * <p>Maps a particular data source sync job to a particular data source.</p>
 */
export interface DataSourceSyncJobMetricTarget {
  /**
   * @public
   * <p>The ID of the data source that is running the sync job.</p>
   */
  DataSourceId: string | undefined;

  /**
   * @public
   * <p>The ID of the sync job that is running on the data source.</p>
   *          <p>If the ID of a sync job is not provided and there is a sync job running, then the ID of
   *       this sync job is used and metrics are generated for this sync job.</p>
   *          <p>If the ID of a sync job is not provided and there is no sync job running, then no metrics
   *       are generated and documents are indexed/deleted at the index level without sync job metrics
   *       included.</p>
   */
  DataSourceSyncJobId?: string;
}

/**
 * @public
 */
export interface BatchDeleteDocumentRequest {
  /**
   * @public
   * <p>The identifier of the index that contains the documents to delete.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>One or more identifiers for documents to delete from the index.</p>
   */
  DocumentIdList: string[] | undefined;

  /**
   * @public
   * <p>Maps a particular data source sync job to a particular data source.</p>
   */
  DataSourceSyncJobMetricTarget?: DataSourceSyncJobMetricTarget;
}

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  INTERNAL_ERROR: "InternalError",
  INVALID_REQUEST: "InvalidRequest",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * <p>Provides information about documents that could not be removed from an index by the
 *                 <code>BatchDeleteDocument</code> API.</p>
 */
export interface BatchDeleteDocumentResponseFailedDocument {
  /**
   * @public
   * <p>The identifier of the document that couldn't be removed from the index.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The error code for why the document couldn't be removed from the index.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * @public
   * <p>An explanation for why the document couldn't be removed from the index.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface BatchDeleteDocumentResponse {
  /**
   * @public
   * <p>A list of documents that could not be removed from the index. Each entry contains an
   *             error message that indicates why the document couldn't be removed from the index.</p>
   */
  FailedDocuments?: BatchDeleteDocumentResponseFailedDocument[];
}

/**
 * @public
 * <p>A conflict occurred with the request. Please fix any inconsistences with your
 *             resources and try again.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 */
export interface BatchDeleteFeaturedResultsSetRequest {
  /**
   * @public
   * <p>The identifier of the index used for featuring results.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The identifiers of the featured results sets that you want to delete.</p>
   */
  FeaturedResultsSetIds: string[] | undefined;
}

/**
 * @public
 * <p>Provides information about a set of featured results that couldn't be
 *             removed from an index by the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteFeaturedResultsSet.html">BatchDeleteFeaturedResultsSet</a> API.</p>
 */
export interface BatchDeleteFeaturedResultsSetError {
  /**
   * @public
   * <p>The identifier of the set of featured results that couldn't be removed
   *             from the index.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The error code for why the set of featured results couldn't be removed
   *             from the index.</p>
   */
  ErrorCode: ErrorCode | string | undefined;

  /**
   * @public
   * <p>An explanation for why the set of featured results couldn't be removed
   *             from the index.</p>
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteFeaturedResultsSetResponse {
  /**
   * @public
   * <p>The list of errors for the featured results set IDs, explaining why they
   *             couldn't be removed from the index.</p>
   */
  Errors: BatchDeleteFeaturedResultsSetError[] | undefined;
}

/**
 * @public
 * <p>Identifies a document for which to retrieve status information</p>
 */
export interface DocumentInfo {
  /**
   * @public
   * <p>The identifier of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * @public
   * <p>Attributes that identify a specific version of a document to check.</p>
   *          <p>The only valid attributes are:</p>
   *          <ul>
   *             <li>
   *                <p>version</p>
   *             </li>
   *             <li>
   *                <p>datasourceId</p>
   *             </li>
   *             <li>
   *                <p>jobExecutionId</p>
   *             </li>
   *          </ul>
   *          <p>The attributes follow these rules:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>dataSourceId</code> and <code>jobExecutionId</code> must be used
   *                     together.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>version</code> is ignored if <code>dataSourceId</code> and
   *                         <code>jobExecutionId</code> are not provided.</p>
   *             </li>
   *             <li>
   *                <p>If <code>dataSourceId</code> and <code>jobExecutionId</code> are provided, but
   *                         <code>version</code> is not, the version defaults to "0".</p>
   *             </li>
   *          </ul>
   */
  Attributes?: DocumentAttribute[];
}

/**
 * @public
 */
export interface BatchGetDocumentStatusRequest {
  /**
   * @public
   * <p>The identifier of the index to add documents to. The index ID is returned by the
   *                 <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_CreateIndex.html">CreateIndex
   *             </a> API.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>A list of <code>DocumentInfo</code> objects that identify the documents for which to
   *             get the status. You identify the documents by their document ID and optional
   *             attributes.</p>
   */
  DocumentInfoList: DocumentInfo[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DocumentStatus = {
  FAILED: "FAILED",
  INDEXED: "INDEXED",
  NOT_FOUND: "NOT_FOUND",
  PROCESSING: "PROCESSING",
  UPDATED: "UPDATED",
  UPDATE_FAILED: "UPDATE_FAILED",
} as const;

/**
 * @public
 */
export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus];

/**
 * @public
 * <p>Provides information about the status of documents submitted for indexing.</p>
 */
export interface Status {
  /**
   * @public
   * <p>The identifier of the document.</p>
   */
  DocumentId?: string;

  /**
   * @public
   * <p>The current status of a document.</p>
   *          <p>If the document was submitted for deletion, the status is <code>NOT_FOUND</code> after
   *             the document is deleted.</p>
   */
  DocumentStatus?: DocumentStatus | string;

  /**
   * @public
   * <p>Indicates the source of the error.</p>
   */
  FailureCode?: string;

  /**
   * @public
   * <p>Provides detailed information about why the document couldn't be indexed. Use this
   *             information to correct the error before you resubmit the document for indexing.</p>
   */
  FailureReason?: string;
}

/**
 * @public
 * <p>Provides a response when the status of a document could not be retrieved.</p>
 */
export interface BatchGetDocumentStatusResponseError {
  /**
   * @public
   * <p>The identifier of the document whose status could not be retrieved.</p>
   */
  DocumentId?: string;

  /**
   * @public
   * <p>Indicates the source of the error.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * @public
   * <p>States that the API could not get the status of a document. This could be because the
   *             request is not valid or there is a system error.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface BatchGetDocumentStatusResponse {
  /**
   * @public
   * <p>A list of documents that Amazon Kendra couldn't get the status for. The list
   *             includes the ID of the document and the reason that the status couldn't be found.</p>
   */
  Errors?: BatchGetDocumentStatusResponseError[];

  /**
   * @public
   * <p>The status of documents. The status indicates if the document is waiting to be
   *             indexed, is in the process of indexing, has completed indexing, or failed indexing. If a
   *             document failed indexing, the status provides the reason why.</p>
   */
  DocumentStatusList?: Status[];
}

/**
 * @public
 * @enum
 */
export const ConditionOperator = {
  BeginsWith: "BeginsWith",
  Contains: "Contains",
  Equals: "Equals",
  Exists: "Exists",
  GreaterThan: "GreaterThan",
  GreaterThanOrEquals: "GreaterThanOrEquals",
  LessThan: "LessThan",
  LessThanOrEquals: "LessThanOrEquals",
  NotContains: "NotContains",
  NotEquals: "NotEquals",
  NotExists: "NotExists",
} as const;

/**
 * @public
 */
export type ConditionOperator = (typeof ConditionOperator)[keyof typeof ConditionOperator];

/**
 * @public
 * <p>The condition used for the target document attribute or metadata field when ingesting
 *             documents into Amazon Kendra. You use this with <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeTarget.html">DocumentAttributeTarget to
 *                 apply the condition</a>.</p>
 *          <p>For example, you can create the 'Department' target field and have it prefill
 *             department names associated with the documents based on information in the 'Source_URI'
 *             field. Set the condition that if the 'Source_URI' field contains 'financial' in its URI
 *             value, then prefill the target field 'Department' with the target value 'Finance' for
 *             the document.</p>
 *          <p>Amazon Kendra cannot create a target field if it has not already been created as
 *             an index field. After you create your index field, you can create a document metadata
 *             field using <code>DocumentAttributeTarget</code>. Amazon Kendra then will map your
 *             newly created metadata field to your index field.</p>
 */
export interface DocumentAttributeCondition {
  /**
   * @public
   * <p>The identifier of the document attribute used for the condition.</p>
   *          <p>For example, 'Source_URI' could be an identifier for the attribute or metadata field
   *             that contains source URIs associated with the documents.</p>
   *          <p>Amazon Kendra currently does not support <code>_document_body</code> as an
   *             attribute key used for the condition.</p>
   */
  ConditionDocumentAttributeKey: string | undefined;

  /**
   * @public
   * <p>The condition operator.</p>
   *          <p>For example, you can use 'Contains' to partially match a string.</p>
   */
  Operator: ConditionOperator | string | undefined;

  /**
   * @public
   * <p>The value used by the operator.</p>
   *          <p>For example, you can specify the value 'financial' for strings in the 'Source_URI'
   *             field that partially match or contain this value.</p>
   */
  ConditionOnValue?: DocumentAttributeValue;
}

/**
 * @public
 * <p>The target document attribute or metadata field you want to alter when ingesting
 *             documents into Amazon Kendra.</p>
 *          <p>For example, you can delete customer identification numbers associated with the
 *             documents, stored in the document metadata field called 'Customer_ID'. You set the
 *             target key as 'Customer_ID' and the deletion flag to <code>TRUE</code>. This removes all
 *             customer ID values in the field 'Customer_ID'. This would scrub personally identifiable
 *             information from each document's metadata.</p>
 *          <p>Amazon Kendra cannot create a target field if it has not already been created as
 *             an index field. After you create your index field, you can create a document metadata
 *             field using <code>DocumentAttributeTarget</code>. Amazon Kendra then will map your
 *             newly created metadata field to your index field.</p>
 *          <p>You can also use this with <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeCondition.html">DocumentAttributeCondition</a>.</p>
 */
export interface DocumentAttributeTarget {
  /**
   * @public
   * <p>The identifier of the target document attribute or metadata field.</p>
   *          <p>For example, 'Department' could be an identifier for the target attribute or metadata
   *             field that includes the department names associated with the documents.</p>
   */
  TargetDocumentAttributeKey?: string;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to delete the existing target value for your specified target
   *             attribute key. You cannot create a target value and set this to <code>TRUE</code>. To
   *             create a target value (<code>TargetDocumentAttributeValue</code>), set this to
   *                 <code>FALSE</code>.</p>
   */
  TargetDocumentAttributeValueDeletion?: boolean;

  /**
   * @public
   * <p>The target value you want to create for the target attribute.</p>
   *          <p>For example, 'Finance' could be the target value for the target attribute key
   *             'Department'.</p>
   */
  TargetDocumentAttributeValue?: DocumentAttributeValue;
}

/**
 * @public
 * <p>Provides the configuration information for applying basic logic to alter document
 *             metadata and content when ingesting documents into Amazon Kendra. To apply advanced
 *             logic, to go beyond what you can do with basic logic, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_HookConfiguration.html">HookConfiguration</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata
 *                 during the ingestion process</a>.</p>
 */
export interface InlineCustomDocumentEnrichmentConfiguration {
  /**
   * @public
   * <p>Configuration of the condition used for the target document attribute or metadata
   *             field when ingesting documents into Amazon Kendra.</p>
   */
  Condition?: DocumentAttributeCondition;

  /**
   * @public
   * <p>Configuration of the target document attribute or metadata field when ingesting
   *             documents into Amazon Kendra. You can also include a value.</p>
   */
  Target?: DocumentAttributeTarget;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to delete content if the condition used for the target attribute is
   *             met.</p>
   */
  DocumentContentDeletion?: boolean;
}

/**
 * @public
 * <p>Provides the configuration information for invoking a Lambda function in Lambda to alter document metadata and content when ingesting documents into
 *                 Amazon Kendra. You can configure your Lambda function using <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html">PreExtractionHookConfiguration</a> if you want to apply advanced alterations on
 *             the original or raw documents. If you want to apply advanced alterations on the Amazon Kendra structured documents, you must configure your Lambda function using
 *                 <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html">PostExtractionHookConfiguration</a>. You can only invoke one Lambda function.
 *             However, this function can invoke other functions it requires.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata
 *                 during the ingestion process</a>.</p>
 */
export interface HookConfiguration {
  /**
   * @public
   * <p>The condition used for when a Lambda function should be invoked.</p>
   *          <p>For example, you can specify a condition that if there are empty date-time values,
   *             then Amazon Kendra should invoke a function that inserts the current
   *             date-time.</p>
   */
  InvocationCondition?: DocumentAttributeCondition;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a role with permission to run a Lambda function
   *             during ingestion. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM roles for Amazon Kendra</a>.</p>
   */
  LambdaArn: string | undefined;

  /**
   * @public
   * <p>Stores the original, raw documents or the structured, parsed documents before and
   *             after altering them. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#cde-data-contracts-lambda">Data contracts for Lambda functions</a>.</p>
   */
  S3Bucket: string | undefined;
}

/**
 * @public
 * <p>Provides the configuration information for altering document metadata and content
 *             during the document ingestion process.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata
 *                 during the ingestion process</a>.</p>
 */
export interface CustomDocumentEnrichmentConfiguration {
  /**
   * @public
   * <p>Configuration information to alter document attributes or metadata fields and content
   *             when ingesting documents into Amazon Kendra.</p>
   */
  InlineConfigurations?: InlineCustomDocumentEnrichmentConfiguration[];

  /**
   * @public
   * <p>Configuration information for invoking a Lambda function in Lambda on
   *             the original or raw documents before extracting their metadata and text. You can use a
   *             Lambda function to apply advanced logic for creating, modifying, or deleting document
   *             metadata and content. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#advanced-data-manipulation">Advanced data manipulation</a>.</p>
   */
  PreExtractionHookConfiguration?: HookConfiguration;

  /**
   * @public
   * <p>Configuration information for invoking a Lambda function in Lambda on
   *             the structured documents with their metadata and text extracted. You can use a Lambda
   *             function to apply advanced logic for creating, modifying, or deleting document metadata
   *             and content. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#advanced-data-manipulation">Advanced data manipulation</a>.</p>
   */
  PostExtractionHookConfiguration?: HookConfiguration;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a role with permission to run
   *                 <code>PreExtractionHookConfiguration</code> and
   *                 <code>PostExtractionHookConfiguration</code> for altering document metadata and
   *             content during the document ingestion process. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM roles for Amazon Kendra</a>.</p>
   */
  RoleArn?: string;
}

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
export const PrincipalType = {
  GROUP: "GROUP",
  USER: "USER",
} as const;

/**
 * @public
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

/**
 * @public
 * <p>Provides user and group information for <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">user context
 *             filtering</a>.</p>
 */
export interface Principal {
  /**
   * @public
   * <p>The name of the user or group.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The type of principal.</p>
   */
  Type: PrincipalType | string | undefined;

  /**
   * @public
   * <p>Whether to allow or deny document access to the principal.</p>
   */
  Access: ReadAccessType | string | undefined;

  /**
   * @public
   * <p>The identifier of the data source the principal should access documents from.</p>
   */
  DataSourceId?: string;
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
 * <p> Information to define the hierarchy for which documents users should have access to.
 *         </p>
 */
export interface HierarchicalPrincipal {
  /**
   * @public
   * <p>A list of <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Principal.html">principal</a> lists that define the hierarchy for which documents users should
   *             have access to. Each hierarchical list specifies which user or group has allow or deny
   *             access for each document.</p>
   */
  PrincipalList: Principal[] | undefined;
}

/**
 * @public
 * <p>A document in an index.</p>
 */
export interface Document {
  /**
   * @public
   * <p>A identifier of the document in the index.</p>
   *          <p>Note, each document ID must be unique per index. You cannot create a data source to
   *             index your documents with their unique IDs and then use the
   *                 <code>BatchPutDocument</code> API to index the same documents, or vice versa. You
   *             can delete a data source and then use the <code>BatchPutDocument</code> API to index the
   *             same documents, or vice versa.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The title of the document.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>The contents of the document. </p>
   *          <p>Documents passed to the <code>Blob</code> parameter must be base64 encoded. Your code
   *             might not need to encode the document file bytes if you're using an Amazon Web Services
   *             SDK to call Amazon Kendra APIs. If you are calling the Amazon Kendra endpoint
   *             directly using REST, you must base64 encode the contents before sending.</p>
   */
  Blob?: Uint8Array;

  /**
   * @public
   * <p>Information required to find a specific file in an Amazon S3 bucket.</p>
   */
  S3Path?: S3Path;

  /**
   * @public
   * <p>Custom attributes to apply to the document. Use the custom attributes to provide
   *             additional information for searching, to provide facets for refining searches, and to
   *             provide additional information in the query response.</p>
   *          <p>For example, 'DataSourceId' and 'DataSourceSyncJobId' are custom attributes that
   *             provide information on the synchronization of documents running on a data source. Note,
   *             'DataSourceSyncJobId' could be an optional custom attribute as Amazon Kendra will use the ID of
   *             a running sync job.</p>
   */
  Attributes?: DocumentAttribute[];

  /**
   * @public
   * <p>Information on principals (users and/or groups) and which documents they should have
   *             access to. This is useful for user context filtering, where search results are filtered
   *             based on the user or their group access to documents.</p>
   */
  AccessControlList?: Principal[];

  /**
   * @public
   * <p>The list of <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Principal.html">principal</a> lists that define the hierarchy for which documents users should
   *             have access to.</p>
   */
  HierarchicalAccessControlList?: HierarchicalPrincipal[];

  /**
   * @public
   * <p>The file type of the document in the <code>Blob</code> field.</p>
   *          <p>If you want to index snippets or subsets of HTML documents instead of the entirety
   *             of the HTML documents, you must add the <code>HTML</code> start and closing tags
   *             (<code><HTML>content</HTML></code>) around the content.</p>
   */
  ContentType?: ContentType | string;

  /**
   * @public
   * <p>The identifier of the access control configuration that you want to apply to the
   *             document.</p>
   */
  AccessControlConfigurationId?: string;
}

/**
 * @public
 */
export interface BatchPutDocumentRequest {
  /**
   * @public
   * <p>The identifier of the index to add the documents to. You need to create the index
   *             first using the <code>CreateIndex</code> API.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to access
   *             your S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM access roles for Amazon Kendra</a>.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>One or more documents to add to the index.</p>
   *          <p>Documents have the following file size limits.</p>
   *          <ul>
   *             <li>
   *                <p>50 MB total size for any file</p>
   *             </li>
   *             <li>
   *                <p>5 MB extracted text for any file</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas</a>.</p>
   */
  Documents: Document[] | undefined;

  /**
   * @public
   * <p>Configuration information for altering your document metadata and content during the
   *             document ingestion process when you use the <code>BatchPutDocument</code> API.</p>
   *          <p>For more information on how to create, modify and delete document metadata, or make
   *             other content alterations when you ingest documents into Amazon Kendra, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>
   */
  CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
}

/**
 * @public
 * <p>Provides information about a document that could not be indexed.</p>
 */
export interface BatchPutDocumentResponseFailedDocument {
  /**
   * @public
   * <p>The identifier of the document.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The type of error that caused the document to fail to be indexed.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * @public
   * <p>A description of the reason why the document could not be indexed.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface BatchPutDocumentResponse {
  /**
   * @public
   * <p>A list of documents that were not added to the index because the document failed a
   *             validation check. Each document contains an error message that indicates why the
   *             document couldn't be added to the index.</p>
   *          <p>If there was an error adding a document to an index the error is reported in your
   *                 Amazon Web Services CloudWatch log. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/cloudwatch-logs.html">Monitoring Amazon
   *                 Kendra with Amazon CloudWatch Logs</a>
   *          </p>
   */
  FailedDocuments?: BatchPutDocumentResponseFailedDocument[];
}

/**
 * @public
 * <p>You have exceeded the set limits for your Amazon Kendra service. Please see
 *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas</a> for
 *             more information, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> to inquire about
 *             an increase of limits.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 */
export interface ClearQuerySuggestionsRequest {
  /**
   * @public
   * <p>The identifier of the index you want to clear query suggestions from.</p>
   */
  IndexId: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessControlConfigurationRequest {
  /**
   * @public
   * <p>The identifier of the index to create an access control configuration for your
   *             documents.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>A name for the access control configuration.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description for the access control configuration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Information on principals (users and/or groups) and which documents they should have
   *             access to. This is useful for user context filtering, where search results are filtered
   *             based on the user or their group access to documents.</p>
   */
  AccessControlList?: Principal[];

  /**
   * @public
   * <p>The list of <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Principal.html">principal</a> lists that define the hierarchy for which documents users should
   *             have access to.</p>
   */
  HierarchicalAccessControlList?: HierarchicalPrincipal[];

  /**
   * @public
   * <p>A token that you provide to identify the request to create an access control
   *             configuration. Multiple calls to the <code>CreateAccessControlConfiguration</code> API
   *             with the same client token will create only one access control configuration.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateAccessControlConfigurationResponse {
  /**
   * @public
   * <p>The identifier of the access control configuration for your documents in an
   *             index.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>Provides the configuration information to connect to Box as
 *             your data source.</p>
 */
export interface BoxConfiguration {
  /**
   * @public
   * <p>The identifier of the Box Enterprise platform. You can find the enterprise
   *             ID in the Box Developer Console settings or when you create an app in Box and
   *             download your authentication credentials. For example, <i>801234567</i>.</p>
   */
  EnterpriseId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Secrets Manager secret that contains
   *             the key-value pairs required to connect to your Box platform. The secret must
   *             contain a JSON structure with the following keys:</p>
   *          <ul>
   *             <li>
   *                <p>clientID—The identifier of the client OAuth 2.0 authentication
   *                     application created in Box.</p>
   *             </li>
   *             <li>
   *                <p>clientSecret—A set of characters known only to the OAuth 2.0
   *                     authentication application created in Box.</p>
   *             </li>
   *             <li>
   *                <p>publicKeyId—The identifier of the public key contained within an
   *                     identity certificate.</p>
   *             </li>
   *             <li>
   *                <p>privateKey—A set of characters that make up an encryption key.</p>
   *             </li>
   *             <li>
   *                <p>passphrase—A set of characters that act like a password.</p>
   *             </li>
   *          </ul>
   *          <p>You create an application in Box to generate the keys or credentials required
   *             for the secret. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-box.html">Using a Box data source</a>.</p>
   */
  SecretArn: string | undefined;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to use the Slack change log to determine which documents require
   *             updating in the index. Depending on the data source change log's size, it may take
   *             longer for Amazon Kendra to use the change log than to scan all of your
   *             documents.</p>
   */
  UseChangeLog?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index comments.</p>
   */
  CrawlComments?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index the contents of tasks.</p>
   */
  CrawlTasks?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index web links.</p>
   */
  CrawlWebLinks?: boolean;

  /**
   * @public
   * <p>A
   *             list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of Box files to Amazon Kendra index field names. To create custom
   *             fields, use the <code>UpdateIndex</code> API before you map to Box fields. For more
   *             information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>.
   *             The Box field names must exist in your Box custom metadata.</p>
   */
  FileFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes
   *             or field names of Box tasks to Amazon Kendra index field names. To create
   *             custom fields, use the <code>UpdateIndex</code> API before you map to Box fields.
   *             For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>.
   *             The Box field names must exist in your Box custom metadata.</p>
   */
  TaskFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes
   *             or field names of Box comments to Amazon Kendra index field names. To create
   *             custom fields, use the <code>UpdateIndex</code> API before you map to Box fields.
   *             For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>.
   *             The Box field names must exist in your Box custom metadata.</p>
   */
  CommentFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes
   *             or field names of Box web links to Amazon Kendra index field names. To create
   *             custom fields, use the <code>UpdateIndex</code> API before you map to Box fields.
   *             For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>.
   *             The Box field names must exist in your Box custom metadata.</p>
   */
  WebLinkFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of regular expression patterns to include certain files and folders in your
   *             Box platform. Files and folders that match the patterns are included in the index.
   *             Files and folders that don't match the patterns are excluded from the index. If a
   *             file or folder matches both an inclusion and exclusion pattern, the exclusion pattern
   *             takes precedence and the file or folder isn't included in the index.</p>
   */
  InclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain files and folders from
   *             your Box platform. Files and folders that match the patterns are excluded from the
   *             index.Files and folders that don't match the patterns are included in the index.
   *             If a file or folder matches both an inclusion and exclusion pattern, the exclusion
   *             pattern takes precedence and the file or folder isn't included in the index.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * @public
   * <p>Configuration information for an Amazon VPC to connect to your Box. For
   *             more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;
}

/**
 * @public
 * @enum
 */
export const ConfluenceAttachmentFieldName = {
  AUTHOR: "AUTHOR",
  CONTENT_TYPE: "CONTENT_TYPE",
  CREATED_DATE: "CREATED_DATE",
  DISPLAY_URL: "DISPLAY_URL",
  FILE_SIZE: "FILE_SIZE",
  ITEM_TYPE: "ITEM_TYPE",
  PARENT_ID: "PARENT_ID",
  SPACE_KEY: "SPACE_KEY",
  SPACE_NAME: "SPACE_NAME",
  URL: "URL",
  VERSION: "VERSION",
} as const;

/**
 * @public
 */
export type ConfluenceAttachmentFieldName =
  (typeof ConfluenceAttachmentFieldName)[keyof typeof ConfluenceAttachmentFieldName];

/**
 * @public
 * <p>Maps attributes or field names of Confluence attachments to Amazon Kendra index
 *             field names. To create custom fields, use the <code>UpdateIndex</code> API before you
 *             map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
 *             Confuence data source field names must exist in your Confluence custom metadata.</p>
 */
export interface ConfluenceAttachmentToIndexFieldMapping {
  /**
   * @public
   * <p>The name of the field in the data source. </p>
   *          <p>You must first create the index field using the <code>UpdateIndex</code> API. </p>
   */
  DataSourceFieldName?: ConfluenceAttachmentFieldName | string;

  /**
   * @public
   * <p>The format for date fields in the data source. If the field specified in
   *                 <code>DataSourceFieldName</code> is a date field you must specify the date format.
   *             If the field is not a date field, an exception is thrown.</p>
   */
  DateFieldFormat?: string;

  /**
   * @public
   * <p>The name of the index field to map to the Confluence data source field. The index
   *             field type must match the Confluence field type.</p>
   */
  IndexFieldName?: string;
}

/**
 * @public
 * <p>Configuration of attachment settings for the Confluence data source. Attachment
 *             settings are optional, if you don't specify settings attachments, Amazon Kendra
 *             won't index them.</p>
 */
export interface ConfluenceAttachmentConfiguration {
  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index attachments of pages and blogs in Confluence.</p>
   */
  CrawlAttachments?: boolean;

  /**
   * @public
   * <p>Maps attributes or field names of Confluence attachments to Amazon Kendra index
   *             field names. To create custom fields, use the <code>UpdateIndex</code> API before you
   *             map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             Confluence data source field names must exist in your Confluence custom metadata.</p>
   *          <p>If you specify the <code>AttachentFieldMappings</code> parameter, you must specify at
   *             least one field mapping.</p>
   */
  AttachmentFieldMappings?: ConfluenceAttachmentToIndexFieldMapping[];
}

/**
 * @public
 * @enum
 */
export const ConfluenceAuthenticationType = {
  HTTP_BASIC: "HTTP_BASIC",
  PAT: "PAT",
} as const;

/**
 * @public
 */
export type ConfluenceAuthenticationType =
  (typeof ConfluenceAuthenticationType)[keyof typeof ConfluenceAuthenticationType];

/**
 * @public
 * @enum
 */
export const ConfluenceBlogFieldName = {
  AUTHOR: "AUTHOR",
  DISPLAY_URL: "DISPLAY_URL",
  ITEM_TYPE: "ITEM_TYPE",
  LABELS: "LABELS",
  PUBLISH_DATE: "PUBLISH_DATE",
  SPACE_KEY: "SPACE_KEY",
  SPACE_NAME: "SPACE_NAME",
  URL: "URL",
  VERSION: "VERSION",
} as const;

/**
 * @public
 */
export type ConfluenceBlogFieldName = (typeof ConfluenceBlogFieldName)[keyof typeof ConfluenceBlogFieldName];

/**
 * @public
 * <p>Maps attributes or field names of Confluence blog to Amazon Kendra index field
 *             names. To create custom fields, use the <code>UpdateIndex</code> API before you map to
 *             Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
 *             Confluence data source field names must exist in your Confluence custom metadata.</p>
 */
export interface ConfluenceBlogToIndexFieldMapping {
  /**
   * @public
   * <p>The name of the field in the data source. </p>
   */
  DataSourceFieldName?: ConfluenceBlogFieldName | string;

  /**
   * @public
   * <p>The format for date fields in the data source. If the field specified in
   *                 <code>DataSourceFieldName</code> is a date field you must specify the date format.
   *             If the field is not a date field, an exception is thrown.</p>
   */
  DateFieldFormat?: string;

  /**
   * @public
   * <p>The name of the index field to map to the Confluence data source field. The index
   *             field type must match the Confluence field type.</p>
   */
  IndexFieldName?: string;
}

/**
 * @public
 * <p>Configuration of blog settings for the Confluence data source. Blogs are always
 *             indexed unless filtered from the index by the <code>ExclusionPatterns</code> or
 *                 <code>InclusionPatterns</code> fields in the <code>ConfluenceConfiguration</code>
 *             object.</p>
 */
export interface ConfluenceBlogConfiguration {
  /**
   * @public
   * <p>Maps attributes or field names of Confluence blogs to Amazon Kendra index field
   *             names. To create custom fields, use the <code>UpdateIndex</code> API before you map to
   *             Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             Confluence data source field names must exist in your Confluence custom metadata.</p>
   *          <p>If you specify the <code>BlogFieldMappings</code> parameter, you must specify at least
   *             one field mapping.</p>
   */
  BlogFieldMappings?: ConfluenceBlogToIndexFieldMapping[];
}

/**
 * @public
 * @enum
 */
export const ConfluencePageFieldName = {
  AUTHOR: "AUTHOR",
  CONTENT_STATUS: "CONTENT_STATUS",
  CREATED_DATE: "CREATED_DATE",
  DISPLAY_URL: "DISPLAY_URL",
  ITEM_TYPE: "ITEM_TYPE",
  LABELS: "LABELS",
  MODIFIED_DATE: "MODIFIED_DATE",
  PARENT_ID: "PARENT_ID",
  SPACE_KEY: "SPACE_KEY",
  SPACE_NAME: "SPACE_NAME",
  URL: "URL",
  VERSION: "VERSION",
} as const;

/**
 * @public
 */
export type ConfluencePageFieldName = (typeof ConfluencePageFieldName)[keyof typeof ConfluencePageFieldName];

/**
 * @public
 * <p>Maps attributes or field names of Confluence pages to Amazon Kendra index field
 *             names. To create custom fields, use the <code>UpdateIndex</code> API before you map to
 *             Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
 *             Confluence data source field names must exist in your Confluence custom metadata.</p>
 */
export interface ConfluencePageToIndexFieldMapping {
  /**
   * @public
   * <p>The name of the field in the data source.</p>
   */
  DataSourceFieldName?: ConfluencePageFieldName | string;

  /**
   * @public
   * <p>The format for date fields in the data source. If the field specified in
   *                 <code>DataSourceFieldName</code> is a date field you must specify the date format.
   *             If the field is not a date field, an exception is thrown.</p>
   */
  DateFieldFormat?: string;

  /**
   * @public
   * <p>The name of the index field to map to the Confluence data source field. The index
   *             field type must match the Confluence field type.</p>
   */
  IndexFieldName?: string;
}

/**
 * @public
 * <p>Configuration of the page settings for the Confluence data source.</p>
 */
export interface ConfluencePageConfiguration {
  /**
   * @public
   * <p>Maps attributes or field names of Confluence pages to Amazon Kendra index field
   *             names. To create custom fields, use the <code>UpdateIndex</code> API before you map to
   *             Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             Confluence data source field names must exist in your Confluence custom metadata.</p>
   *          <p>If you specify the <code>PageFieldMappings</code> parameter, you must specify at least
   *             one field mapping.</p>
   */
  PageFieldMappings?: ConfluencePageToIndexFieldMapping[];
}

/**
 * @public
 * <p>Provides the configuration information for a web proxy to connect to website
 *             hosts.</p>
 */
export interface ProxyConfiguration {
  /**
   * @public
   * <p>The name of the website host you want to connect to via a web proxy server.</p>
   *          <p>For example, the host name of https://a.example.com/page1.html is
   *             "a.example.com".</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>The port number of the website host you want to connect to via a web proxy server. </p>
   *          <p>For example, the port for https://a.example.com/page1.html is 443, the standard port
   *             for HTTPS.</p>
   */
  Port: number | undefined;

  /**
   * @public
   * <p>Your secret ARN, which you can create in <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html">Secrets Manager</a>
   *          </p>
   *          <p>The credentials are optional. You use a secret if web proxy credentials are required
   *             to connect to a website host. Amazon Kendra currently support basic authentication
   *             to connect to a web proxy server. The secret stores your credentials.</p>
   */
  Credentials?: string;
}

/**
 * @public
 * @enum
 */
export const ConfluenceSpaceFieldName = {
  DISPLAY_URL: "DISPLAY_URL",
  ITEM_TYPE: "ITEM_TYPE",
  SPACE_KEY: "SPACE_KEY",
  URL: "URL",
} as const;

/**
 * @public
 */
export type ConfluenceSpaceFieldName = (typeof ConfluenceSpaceFieldName)[keyof typeof ConfluenceSpaceFieldName];

/**
 * @public
 * <p>Maps attributes or field names of Confluence spaces to Amazon Kendra index field
 *             names. To create custom fields, use the <code>UpdateIndex</code> API before you map to
 *             Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
 *             Confluence data source field names must exist in your Confluence custom metadata.</p>
 */
export interface ConfluenceSpaceToIndexFieldMapping {
  /**
   * @public
   * <p>The name of the field in the data source. </p>
   */
  DataSourceFieldName?: ConfluenceSpaceFieldName | string;

  /**
   * @public
   * <p>The format for date fields in the data source. If the field specified in
   *                 <code>DataSourceFieldName</code> is a date field you must specify the date format.
   *             If the field is not a date field, an exception is thrown.</p>
   */
  DateFieldFormat?: string;

  /**
   * @public
   * <p>The name of the index field to map to the Confluence data source field. The index
   *             field type must match the Confluence field type.</p>
   */
  IndexFieldName?: string;
}

/**
 * @public
 * <p>Configuration information for indexing Confluence spaces.</p>
 */
export interface ConfluenceSpaceConfiguration {
  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index personal spaces. You can add restrictions to items in
   *             personal spaces. If personal spaces are indexed, queries without user context
   *             information may return restricted items from a personal space in their results. For more
   *             information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">Filtering on user
   *             context</a>.</p>
   */
  CrawlPersonalSpaces?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index archived spaces.</p>
   */
  CrawlArchivedSpaces?: boolean;

  /**
   * @public
   * <p>A list of space keys for Confluence spaces. If you include a key, the blogs,
   *             documents, and attachments in the space are indexed. Spaces that aren't in the list
   *             aren't indexed. A space in the list must exist. Otherwise, Amazon Kendra logs an
   *             error when the data source is synchronized. If a space is in both the
   *                 <code>IncludeSpaces</code> and the <code>ExcludeSpaces</code> list, the space is
   *             excluded.</p>
   */
  IncludeSpaces?: string[];

  /**
   * @public
   * <p>A list of space keys of Confluence spaces. If you include a key, the blogs, documents,
   *             and attachments in the space are not indexed. If a space is in both the
   *                 <code>ExcludeSpaces</code> and the <code>IncludeSpaces</code> list, the space is
   *             excluded.</p>
   */
  ExcludeSpaces?: string[];

  /**
   * @public
   * <p>Maps attributes or field names of Confluence spaces to Amazon Kendra index field
   *             names. To create custom fields, use the <code>UpdateIndex</code> API before you map to
   *             Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             Confluence data source field names must exist in your Confluence custom metadata.</p>
   *          <p>If you specify the <code>SpaceFieldMappings</code> parameter, you must specify at
   *             least one field mapping.</p>
   */
  SpaceFieldMappings?: ConfluenceSpaceToIndexFieldMapping[];
}

/**
 * @public
 * @enum
 */
export const ConfluenceVersion = {
  CLOUD: "CLOUD",
  SERVER: "SERVER",
} as const;

/**
 * @public
 */
export type ConfluenceVersion = (typeof ConfluenceVersion)[keyof typeof ConfluenceVersion];

/**
 * @public
 * <p>Provides the configuration information to connect to Confluence as your data
 *             source.</p>
 */
export interface ConfluenceConfiguration {
  /**
   * @public
   * <p>The URL of your Confluence instance. Use the full URL of the server. For example,
   *                 <i>https://server.example.com:port/</i>. You can also use an IP
   *             address, for example, <i>https://192.168.1.113/</i>.</p>
   */
  ServerUrl: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the
   *             user name and password required to connect to the Confluence instance. If you use
   *             Confluence Cloud, you use a generated API token as the password.</p>
   *          <p>You can also provide authentication credentials in the form of a personal access
   *             token. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-confluence.html">Using a Confluence data
   *                 source</a>.</p>
   */
  SecretArn: string | undefined;

  /**
   * @public
   * <p>The version or the type of Confluence installation to connect to.</p>
   */
  Version: ConfluenceVersion | string | undefined;

  /**
   * @public
   * <p>Configuration information for indexing Confluence spaces.</p>
   */
  SpaceConfiguration?: ConfluenceSpaceConfiguration;

  /**
   * @public
   * <p>Configuration information for indexing Confluence pages.</p>
   */
  PageConfiguration?: ConfluencePageConfiguration;

  /**
   * @public
   * <p>Configuration information for indexing Confluence blogs.</p>
   */
  BlogConfiguration?: ConfluenceBlogConfiguration;

  /**
   * @public
   * <p>Configuration information for indexing attachments to Confluence blogs and
   *             pages.</p>
   */
  AttachmentConfiguration?: ConfluenceAttachmentConfiguration;

  /**
   * @public
   * <p>Configuration information for an Amazon Virtual Private Cloud to connect to your Confluence.
   *             For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * @public
   * <p>A list of regular expression patterns to include certain blog posts, pages, spaces, or
   *             attachments in your Confluence. Content that matches the patterns are included in the
   *             index. Content that doesn't match the patterns is excluded from the index. If content
   *             matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence
   *             and the content isn't included in the index.</p>
   */
  InclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain blog posts, pages, spaces, or
   *             attachments in your Confluence. Content that matches the patterns are excluded from the
   *             index. Content that doesn't match the patterns is included in the index. If content
   *             matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence
   *             and the content isn't included in the index.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * @public
   * <p>Configuration information to connect to your Confluence URL instance via a web proxy.
   *             You can use this option for Confluence Server.</p>
   *          <p>You must provide the website host name and port number. For example, the host name of
   *                 <i>https://a.example.com/page1.html</i> is "a.example.com" and the
   *             port is 443, the standard port for HTTPS.</p>
   *          <p>Web proxy credentials are optional and you can use them to connect to a web proxy
   *             server that requires basic authentication of user name and password. To store web proxy
   *             credentials, you use a secret in Secrets Manager.</p>
   *          <p>It is recommended that you follow best security practices when configuring your web
   *             proxy. This includes setting up throttling, setting up logging and monitoring, and
   *             applying security patches on a regular basis. If you use your web proxy with multiple
   *             data sources, sync jobs that occur at the same time could strain the load on your proxy.
   *             It is recommended you prepare your proxy beforehand for any security and load
   *             requirements.</p>
   */
  ProxyConfiguration?: ProxyConfiguration;

  /**
   * @public
   * <p>Whether you want to connect to Confluence using basic authentication of user name and
   *             password, or a personal access token. You can use a personal access token for Confluence
   *             Server.</p>
   */
  AuthenticationType?: ConfluenceAuthenticationType | string;
}

/**
 * @public
 * <p>Provides information about how Amazon Kendra should use the columns of a database
 *             in an index.</p>
 */
export interface ColumnConfiguration {
  /**
   * @public
   * <p>The column that provides the document's identifier.</p>
   */
  DocumentIdColumnName: string | undefined;

  /**
   * @public
   * <p>The column that contains the contents of the document.</p>
   */
  DocumentDataColumnName: string | undefined;

  /**
   * @public
   * <p>The column that contains the title of the document.</p>
   */
  DocumentTitleColumnName?: string;

  /**
   * @public
   * <p>An array of objects that map database column names to the corresponding fields in an
   *             index. You must first create the fields in the index using the <code>UpdateIndex</code>
   *             API.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>One to five columns that indicate when a document in the database has changed.</p>
   */
  ChangeDetectingColumns: string[] | undefined;
}

/**
 * @public
 * <p>Provides the configuration information that's required to connect to a
 *             database.</p>
 */
export interface ConnectionConfiguration {
  /**
   * @public
   * <p>The name of the host for the database. Can be either a string
   *             (host.subdomain.domain.tld) or an IPv4 or IPv6 address.</p>
   */
  DatabaseHost: string | undefined;

  /**
   * @public
   * <p>The port that the database uses for connections.</p>
   */
  DatabasePort: number | undefined;

  /**
   * @public
   * <p>The name of the database containing the document data.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the table that contains the document data.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of credentials stored in Secrets Manager. The
   *             credentials should be a user/password pair. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-database.html">Using a
   *                 Database Data Source</a>. For more information about Secrets Manager, see
   *                 <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"> What
   *                 Is Secrets Manager</a> in the <i>
   *                 Secrets Manager
   *             </i> user guide.</p>
   */
  SecretArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DatabaseEngineType = {
  RDS_AURORA_MYSQL: "RDS_AURORA_MYSQL",
  RDS_AURORA_POSTGRESQL: "RDS_AURORA_POSTGRESQL",
  RDS_MYSQL: "RDS_MYSQL",
  RDS_POSTGRESQL: "RDS_POSTGRESQL",
} as const;

/**
 * @public
 */
export type DatabaseEngineType = (typeof DatabaseEngineType)[keyof typeof DatabaseEngineType];

/**
 * @public
 * @enum
 */
export const QueryIdentifiersEnclosingOption = {
  DOUBLE_QUOTES: "DOUBLE_QUOTES",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type QueryIdentifiersEnclosingOption =
  (typeof QueryIdentifiersEnclosingOption)[keyof typeof QueryIdentifiersEnclosingOption];

/**
 * @public
 * <p>Provides the configuration information to use a SQL database.</p>
 */
export interface SqlConfiguration {
  /**
   * @public
   * <p>Determines whether Amazon Kendra encloses SQL identifiers for tables and column
   *             names in double quotes (") when making a database query.</p>
   *          <p>By default, Amazon Kendra passes SQL identifiers the way that they are entered
   *             into the data source configuration. It does not change the case of identifiers or
   *             enclose them in quotes.</p>
   *          <p>PostgreSQL internally converts uppercase characters to lower case characters in
   *             identifiers unless they are quoted. Choosing this option encloses identifiers in quotes
   *             so that PostgreSQL does not convert the character's case.</p>
   *          <p>For MySQL databases, you must enable the <code>ansi_quotes</code> option when you set
   *             this field to <code>DOUBLE_QUOTES</code>.</p>
   */
  QueryIdentifiersEnclosingOption?: QueryIdentifiersEnclosingOption | string;
}

/**
 * @public
 * <p>Provides the configuration information to connect to a index. </p>
 */
export interface DatabaseConfiguration {
  /**
   * @public
   * <p>The type of database engine that runs the database.</p>
   */
  DatabaseEngineType: DatabaseEngineType | string | undefined;

  /**
   * @public
   * <p>Configuration information that's required to connect to a database.</p>
   */
  ConnectionConfiguration: ConnectionConfiguration | undefined;

  /**
   * @public
   * <p>Provides the configuration information to connect to an Amazon VPC.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * @public
   * <p>Information about where the index should get the document information from the
   *             database.</p>
   */
  ColumnConfiguration: ColumnConfiguration | undefined;

  /**
   * @public
   * <p>Information about the database column that provides information for user context
   *             filtering.</p>
   */
  AclConfiguration?: AclConfiguration;

  /**
   * @public
   * <p>Provides information about how Amazon Kendra uses quote marks around SQL
   *             identifiers when querying a database data source.</p>
   */
  SqlConfiguration?: SqlConfiguration;
}

/**
 * @public
 * @enum
 */
export const FsxFileSystemType = {
  WINDOWS: "WINDOWS",
} as const;

/**
 * @public
 */
export type FsxFileSystemType = (typeof FsxFileSystemType)[keyof typeof FsxFileSystemType];

/**
 * @public
 * <p>Provides the configuration information to connect to Amazon FSx as your data
 *             source.</p>
 */
export interface FsxConfiguration {
  /**
   * @public
   * <p>The identifier of the Amazon FSx file system.</p>
   *          <p>You can find your file system ID on the file system dashboard in the Amazon FSx console. For information on how to create a file system in Amazon FSx
   *             console, using Windows File Server as an example, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/getting-started-step1.html">Amazon FSx Getting
   *                 started guide</a>.</p>
   */
  FileSystemId: string | undefined;

  /**
   * @public
   * <p>The Amazon FSx file system type. Windows is currently the only supported
   *             type.</p>
   */
  FileSystemType: FsxFileSystemType | string | undefined;

  /**
   * @public
   * <p>Configuration information for an Amazon Virtual Private Cloud to connect to your Amazon FSx. Your Amazon FSx instance must reside inside your VPC.</p>
   */
  VpcConfiguration: DataSourceVpcConfiguration | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the
   *             key-value pairs required to connect to your Amazon FSx file system. Windows is
   *             currently the only supported type. The secret must contain a JSON structure with the
   *             following keys:</p>
   *          <ul>
   *             <li>
   *                <p>username—The Active Directory user name, along with the Domain Name
   *                     System (DNS) domain name. For example,
   *                         <i>user@corp.example.com</i>. The Active Directory user
   *                     account must have read and mounting access to the Amazon FSx file system
   *                     for Windows.</p>
   *             </li>
   *             <li>
   *                <p>password—The password of the Active Directory user account with read
   *                     and mounting access to the Amazon FSx Windows file system.</p>
   *             </li>
   *          </ul>
   */
  SecretArn?: string;

  /**
   * @public
   * <p>A list of regular expression patterns to include certain files in your Amazon FSx file system. Files that match the patterns are included in the index.
   *             Files that don't match the patterns are excluded from the index. If a file matches both
   *             an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file
   *             isn't included in the index.</p>
   */
  InclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain files in your Amazon FSx file system. Files that match the patterns are excluded from the index.
   *             Files that don't match the patterns are included in the index. If a file matches both an
   *             inclusion and exclusion pattern, the exclusion pattern takes precedence and the file
   *             isn't included in the index.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map Amazon FSx data source attributes or field names to Amazon Kendra index field names. To
   *             create custom fields, use the <code>UpdateIndex</code> API before you map to Amazon FSx fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *                 Amazon FSx data source field names must exist in your Amazon FSx
   *             custom metadata.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

/**
 * @public
 * <p>Provides the configuration information to include certain types of GitHub content. You
 *             can configure to index repository files only, or also include issues and pull requests,
 *             comments, and comment attachments.</p>
 */
export interface GitHubDocumentCrawlProperties {
  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index all files with a repository.</p>
   */
  CrawlRepositoryDocuments?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index all issues within a repository.</p>
   */
  CrawlIssue?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index all comments on issues.</p>
   */
  CrawlIssueComment?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to include all comment attachments for issues.</p>
   */
  CrawlIssueCommentAttachment?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index all pull requests within a repository.</p>
   */
  CrawlPullRequest?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index all comments on pull requests.</p>
   */
  CrawlPullRequestComment?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to include all comment attachments for pull requests.</p>
   */
  CrawlPullRequestCommentAttachment?: boolean;
}

/**
 * @public
 * <p>Provides the configuration information to connect to GitHub Enterprise Server (on
 *             premises).</p>
 */
export interface OnPremiseConfiguration {
  /**
   * @public
   * <p>The GitHub host URL or API endpoint URL. For example,
   *                 <i>https://on-prem-host-url/api/v3/</i>
   *          </p>
   */
  HostUrl: string | undefined;

  /**
   * @public
   * <p>The name of the organization of the GitHub Enterprise Server (in-premise) account you
   *             want to connect to. You can find your organization name by logging into GitHub desktop
   *             and selecting <b>Your organizations</b> under your profile
   *             picture dropdown.</p>
   */
  OrganizationName: string | undefined;

  /**
   * @public
   * <p>The path to the SSL certificate stored in an Amazon S3 bucket. You use this to
   *             connect to GitHub if you require a secure SSL connection.</p>
   *          <p>You can simply generate a self-signed X509 certificate on any computer using OpenSSL.
   *             For an example of using OpenSSL to create an X509 certificate, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/configuring-https-ssl.html">Create and sign an X509 certificate</a>.</p>
   */
  SslCertificateS3Path: S3Path | undefined;
}

/**
 * @public
 * <p>Provides the configuration information to connect to GitHub Enterprise Cloud
 *             (SaaS).</p>
 */
export interface SaaSConfiguration {
  /**
   * @public
   * <p>The name of the organization of the GitHub Enterprise Cloud (SaaS) account you want to
   *             connect to. You can find your organization name by logging into GitHub desktop and
   *             selecting <b>Your organizations</b> under your profile picture
   *             dropdown.</p>
   */
  OrganizationName: string | undefined;

  /**
   * @public
   * <p>The GitHub host URL or API endpoint URL. For example,
   *                 <i>https://api.github.com</i>.</p>
   */
  HostUrl: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Type = {
  ON_PREMISE: "ON_PREMISE",
  SAAS: "SAAS",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * <p>Provides the configuration information to connect to GitHub as your data
 *             source.</p>
 */
export interface GitHubConfiguration {
  /**
   * @public
   * <p>Configuration information to connect to GitHub Enterprise Cloud (SaaS).</p>
   */
  SaaSConfiguration?: SaaSConfiguration;

  /**
   * @public
   * <p>Configuration information to connect to GitHub Enterprise Server (on premises).</p>
   */
  OnPremiseConfiguration?: OnPremiseConfiguration;

  /**
   * @public
   * <p>The type of GitHub service you want to connect to—GitHub Enterprise Cloud
   *             (SaaS) or GitHub Enterprise Server (on premises).</p>
   */
  Type?: Type | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the
   *             key-value pairs required to connect to your GitHub. The secret must contain a JSON
   *             structure with the following keys:</p>
   *          <ul>
   *             <li>
   *                <p>personalToken—The access token created in GitHub. For more information
   *                     on creating a token in GitHub, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-github.html">Using a GitHub data
   *                         source</a>.</p>
   *             </li>
   *          </ul>
   */
  SecretArn: string | undefined;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to use the GitHub change log to determine which documents require
   *             updating in the index. Depending on the GitHub change log's size, it may take longer for
   *                 Amazon Kendra to use the change log than to scan all of your documents in
   *             GitHub.</p>
   */
  UseChangeLog?: boolean;

  /**
   * @public
   * <p>Configuration information to include certain types of GitHub content. You can
   *             configure to index repository files only, or also include issues and pull requests,
   *             comments, and comment attachments.</p>
   */
  GitHubDocumentCrawlProperties?: GitHubDocumentCrawlProperties;

  /**
   * @public
   * <p>A list of names of the specific repositories you want to index.</p>
   */
  RepositoryFilter?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to include certain folder names in your GitHub
   *             repository or repositories. Folder names that match the patterns are included in the
   *             index. Folder names that don't match the patterns are excluded from the index. If a
   *             folder matches both an inclusion and exclusion pattern, the exclusion pattern takes
   *             precedence and the folder isn't included in the index.</p>
   */
  InclusionFolderNamePatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to include certain file types in your GitHub
   *             repository or repositories. File types that match the patterns are included in the
   *             index. File types that don't match the patterns are excluded from the index. If a file
   *             matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence
   *             and the file isn't included in the index.</p>
   */
  InclusionFileTypePatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to include certain file names in your GitHub
   *             repository or repositories. File names that match the patterns are included in the
   *             index. File names that don't match the patterns are excluded from the index. If a file
   *             matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence
   *             and the file isn't included in the index.</p>
   */
  InclusionFileNamePatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain folder names in your GitHub
   *             repository or repositories. Folder names that match the patterns are excluded from the
   *             index. Folder names that don't match the patterns are included in the index. If a folder
   *             matches both an exclusion and inclusion pattern, the exclusion pattern takes precedence
   *             and the folder isn't included in the index.</p>
   */
  ExclusionFolderNamePatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain file types in your GitHub
   *             repository or repositories. File types that match the patterns are excluded from the
   *             index. File types that don't match the patterns are included in the index. If a file
   *             matches both an exclusion and inclusion pattern, the exclusion pattern takes precedence
   *             and the file isn't included in the index.</p>
   */
  ExclusionFileTypePatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain file names in your GitHub
   *             repository or repositories. File names that match the patterns are excluded from the
   *             index. File names that don't match the patterns are included in the index. If a file
   *             matches both an exclusion and inclusion pattern, the exclusion pattern takes precedence
   *             and the file isn't included in the index.</p>
   */
  ExclusionFileNamePatterns?: string[];

  /**
   * @public
   * <p>Configuration information of an Amazon Virtual Private Cloud to connect to your GitHub. For
   *             more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map GitHub
   *             repository attributes or field names to Amazon Kendra index field names. To create
   *             custom fields, use the <code>UpdateIndex</code> API before you map to GitHub fields. For
   *             more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             GitHub data source field names must exist in your GitHub custom metadata.</p>
   */
  GitHubRepositoryConfigurationFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of GitHub commits to Amazon Kendra index field names. To create custom
   *             fields, use the <code>UpdateIndex</code> API before you map to GitHub fields. For more
   *             information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The GitHub data source field names must exist
   *             in your GitHub custom metadata.</p>
   */
  GitHubCommitConfigurationFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of GitHub issues to Amazon Kendra index field names. To create custom
   *             fields, use the <code>UpdateIndex</code> API before you map to GitHub fields. For more
   *             information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The GitHub data source field names must exist
   *             in your GitHub custom metadata.</p>
   */
  GitHubIssueDocumentConfigurationFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of GitHub issue comments to Amazon Kendra index field names. To create
   *             custom fields, use the <code>UpdateIndex</code> API before you map to GitHub fields. For
   *             more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             GitHub data source field names must exist in your GitHub custom metadata.</p>
   */
  GitHubIssueCommentConfigurationFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of GitHub issue attachments to Amazon Kendra index field names. To
   *             create custom fields, use the <code>UpdateIndex</code> API before you map to GitHub
   *             fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             GitHub data source field names must exist in your GitHub custom metadata.</p>
   */
  GitHubIssueAttachmentConfigurationFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of GitHub pull request comments to Amazon Kendra index field names. To
   *             create custom fields, use the <code>UpdateIndex</code> API before you map to GitHub
   *             fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             GitHub data source field names must exist in your GitHub custom metadata.</p>
   */
  GitHubPullRequestCommentConfigurationFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of GitHub pull requests to Amazon Kendra index field names. To create
   *             custom fields, use the <code>UpdateIndex</code> API before you map to GitHub fields. For
   *             more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             GitHub data source field names must exist in your GitHub custom metadata.</p>
   */
  GitHubPullRequestDocumentConfigurationFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of GitHub pull request attachments to Amazon Kendra index field names.
   *             To create custom fields, use the <code>UpdateIndex</code> API before you map to GitHub
   *             fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             GitHub data source field names must exist in your GitHub custom metadata.</p>
   */
  GitHubPullRequestDocumentAttachmentConfigurationFieldMappings?: DataSourceToIndexFieldMapping[];
}

/**
 * @public
 * <p>Provides the configuration information to connect to Google Drive as your data
 *             source.</p>
 */
export interface GoogleDriveConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a Secrets Managersecret that contains the
   *             credentials required to connect to Google Drive. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-google-drive.html">Using a
   *                 Google Workspace Drive data source</a>.</p>
   */
  SecretArn: string | undefined;

  /**
   * @public
   * <p>A list of regular expression patterns to include certain items in your Google Drive,
   *             including shared drives and users' My Drives. Items that match the patterns are included
   *             in the index. Items that don't match the patterns are excluded from the index. If an
   *             item matches both an inclusion and exclusion pattern, the exclusion pattern takes
   *             precedence and the item isn't included in the index.</p>
   */
  InclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain items in your Google Drive,
   *             including shared drives and users' My Drives. Items that match the patterns are excluded
   *             from the index. Items that don't match the patterns are included in the index. If an
   *             item matches both an inclusion and exclusion pattern, the exclusion pattern takes
   *             precedence and the item isn't included in the index.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * @public
   * <p>Maps Google Drive data source attributes or field names to Amazon Kendra index
   *             field names. To create custom fields, use the <code>UpdateIndex</code> API before you
   *             map to Google Drive fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             Google Drive data source field names must exist in your Google Drive custom
   *             metadata.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of MIME types to exclude from the index. All documents matching the specified
   *             MIME type are excluded. </p>
   *          <p>For a list of MIME types, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-google-drive.html">Using a
   *                 Google Workspace Drive data source</a>.</p>
   */
  ExcludeMimeTypes?: string[];

  /**
   * @public
   * <p>A list of email addresses of the users. Documents owned by these users are excluded
   *             from the index. Documents shared with excluded users are indexed unless they are
   *             excluded in another way.</p>
   */
  ExcludeUserAccounts?: string[];

  /**
   * @public
   * <p>A list of identifiers or shared drives to exclude from the index. All files and
   *             folders stored on the shared drive are excluded.</p>
   */
  ExcludeSharedDrives?: string[];
}

/**
 * @public
 * @enum
 */
export const IssueSubEntity = {
  ATTACHMENTS: "ATTACHMENTS",
  COMMENTS: "COMMENTS",
  WORKLOGS: "WORKLOGS",
} as const;

/**
 * @public
 */
export type IssueSubEntity = (typeof IssueSubEntity)[keyof typeof IssueSubEntity];

/**
 * @public
 * <p>Provides the configuration information to connect to Jira as your data source.</p>
 */
export interface JiraConfiguration {
  /**
   * @public
   * <p>The URL of the Jira account. For example,
   *             <i>company.atlassian.net</i>.</p>
   */
  JiraAccountUrl: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a secret in Secrets Manager contains the
   *             key-value pairs required to connect to your Jira data source. The secret must contain a
   *             JSON structure with the following keys:</p>
   *          <ul>
   *             <li>
   *                <p>jiraId—The Jira user name or email.</p>
   *             </li>
   *             <li>
   *                <p>jiraCredentials—The Jira API token. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-jira.html">Using a
   *                         Jira data source</a>.</p>
   *             </li>
   *          </ul>
   */
  SecretArn: string | undefined;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to use the Jira change log to determine which documents require
   *             updating in the index. Depending on the change log's size, it may take longer for
   *                 Amazon Kendra to use the change log than to scan all of your documents in
   *             Jira.</p>
   */
  UseChangeLog?: boolean;

  /**
   * @public
   * <p>Specify which projects to crawl in your Jira data source. You can specify one or more
   *             Jira project IDs.</p>
   */
  Project?: string[];

  /**
   * @public
   * <p>Specify which issue types to crawl in your Jira data source. You can specify one or
   *             more of these options to crawl.</p>
   */
  IssueType?: string[];

  /**
   * @public
   * <p>Specify which statuses to crawl in your Jira data source. You can specify one or more
   *             of these options to crawl.</p>
   */
  Status?: string[];

  /**
   * @public
   * <p>Specify whether to crawl comments, attachments, and work logs. You can specify one or
   *             more of these options.</p>
   */
  IssueSubEntityFilter?: (IssueSubEntity | string)[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of Jira attachments to Amazon Kendra index field names. To create
   *             custom fields, use the <code>UpdateIndex</code> API before you map to Jira fields. For
   *             more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html"> Mapping data source fields</a>. The
   *             Jira data source field names must exist in your Jira custom metadata.</p>
   */
  AttachmentFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of Jira comments to Amazon Kendra index field names. To create custom
   *             fields, use the <code>UpdateIndex</code> API before you map to Jira fields. For more
   *             information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">
   *                 Mapping data source fields</a>. The Jira data source field names must exist in
   *             your Jira custom metadata.</p>
   */
  CommentFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of Jira issues to Amazon Kendra index field names. To create custom
   *             fields, use the <code>UpdateIndex</code> API before you map to Jira fields. For more
   *             information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">
   *                 Mapping data source fields</a>. The Jira data source field names must exist in
   *             your Jira custom metadata.</p>
   */
  IssueFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of Jira projects to Amazon Kendra index field names. To create custom
   *             fields, use the <code>UpdateIndex</code> API before you map to Jira fields. For more
   *             information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">
   *                 Mapping data source fields</a>. The Jira data source field names must exist in
   *             your Jira custom metadata.</p>
   */
  ProjectFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of Jira work logs to Amazon Kendra index field names. To create custom
   *             fields, use the <code>UpdateIndex</code> API before you map to Jira fields. For more
   *             information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">
   *                 Mapping data source fields</a>. The Jira data source field names must exist in
   *             your Jira custom metadata.</p>
   */
  WorkLogFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of regular expression patterns to include certain file paths, file names, and
   *             file types in your Jira data source. Files that match the patterns are included in the
   *             index. Files that don't match the patterns are excluded from the index. If a file
   *             matches both an inclusion pattern and an exclusion pattern, the exclusion pattern takes
   *             precedence and the file isn't included in the index.</p>
   */
  InclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain file paths, file names, and
   *             file types in your Jira data source. Files that match the patterns are excluded from the
   *             index. Files that don’t match the patterns are included in the index. If a file matches
   *             both an inclusion pattern and an exclusion pattern, the exclusion pattern takes
   *             precedence and the file isn't included in the index.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * @public
   * <p>Configuration information for an Amazon Virtual Private Cloud to connect to your Jira. For
   *             more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;
}

/**
 * @public
 * <p>User accounts whose documents should be indexed.</p>
 */
export interface OneDriveUsers {
  /**
   * @public
   * <p>A list of users whose documents should be indexed. Specify the user names in email
   *             format, for example, <code>username@tenantdomain</code>. If you need to index the
   *             documents of more than 100 users, use the <code>OneDriveUserS3Path</code> field to
   *             specify the location of a file containing a list of users.</p>
   */
  OneDriveUserList?: string[];

  /**
   * @public
   * <p>The S3 bucket location of a file containing a list of users whose documents should be
   *             indexed.</p>
   */
  OneDriveUserS3Path?: S3Path;
}

/**
 * @public
 * <p>Provides the configuration information to connect to OneDrive as your data
 *             source.</p>
 */
export interface OneDriveConfiguration {
  /**
   * @public
   * <p>The Azure Active Directory domain of the organization. </p>
   */
  TenantDomain: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Secrets Managersecret that contains the
   *             user name and password to connect to OneDrive. The user name should be the application
   *             ID for the OneDrive application, and the password is the application key for the
   *             OneDrive application.</p>
   */
  SecretArn: string | undefined;

  /**
   * @public
   * <p>A list of user accounts whose documents should be indexed.</p>
   */
  OneDriveUsers: OneDriveUsers | undefined;

  /**
   * @public
   * <p>A list of regular expression patterns to include certain documents in your OneDrive.
   *             Documents that match the patterns are included in the index. Documents that don't match
   *             the patterns are excluded from the index. If a document matches both an inclusion and
   *             exclusion pattern, the exclusion pattern takes precedence and the document isn't
   *             included in the index.</p>
   *          <p>The pattern is applied to the file name.</p>
   */
  InclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain documents in your OneDrive.
   *             Documents that match the patterns are excluded from the index. Documents that don't
   *             match the patterns are included in the index. If a document matches both an inclusion
   *             and exclusion pattern, the exclusion pattern takes precedence and the document isn't
   *             included in the index.</p>
   *          <p>The pattern is applied to the file name.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map OneDrive data
   *             source attributes or field names to Amazon Kendra index field names. To create
   *             custom fields, use the <code>UpdateIndex</code> API before you map to OneDrive fields.
   *             For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             OneDrive data source field names must exist in your OneDrive custom metadata.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to disable local groups information.</p>
   */
  DisableLocalGroups?: boolean;
}

/**
 * @public
 * <p>Provides the configuration information to connect to Quip as your data source.</p>
 */
export interface QuipConfiguration {
  /**
   * @public
   * <p>The Quip site domain. For example,
   *                 <i>https://quip-company.quipdomain.com/browse</i>. The domain in this
   *             example is "quipdomain".</p>
   */
  Domain: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the
   *             key-value pairs that are required to connect to your Quip. The secret must contain a
   *             JSON structure with the following keys:</p>
   *          <ul>
   *             <li>
   *                <p>accessToken—The token created in Quip. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-slack.html">Using a
   *                         Quip data source</a>.</p>
   *             </li>
   *          </ul>
   */
  SecretArn: string | undefined;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index file comments.</p>
   */
  CrawlFileComments?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index the contents of chat rooms.</p>
   */
  CrawlChatRooms?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index attachments.</p>
   */
  CrawlAttachments?: boolean;

  /**
   * @public
   * <p>The identifiers of the Quip folders you want to index. You can find the folder ID in
   *             your browser URL when you access your folder in Quip. For example,
   *                 <i>https://quip-company.quipdomain.com/zlLuOVNSarTL/folder-name</i>.
   *             The folder ID in this example is "zlLuOVNSarTL".</p>
   */
  FolderIds?: string[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of Quip threads to Amazon Kendra index field names. To create custom
   *             fields, use the <code>UpdateIndex</code> API before you map to Quip fields. For more
   *             information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Quip field names must exist in your Quip
   *             custom metadata.</p>
   */
  ThreadFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of Quip messages to Amazon Kendra index field names. To create custom
   *             fields, use the <code>UpdateIndex</code> API before you map to Quip fields. For more
   *             information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Quip field names must exist in your Quip
   *             custom metadata.</p>
   */
  MessageFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map attributes or
   *             field names of Quip attachments to Amazon Kendra index field names. To create
   *             custom fields, use the <code>UpdateIndex</code> API before you map to Quip fields. For
   *             more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             Quip field names must exist in your Quip custom metadata.</p>
   */
  AttachmentFieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A list of regular expression patterns to include certain files in your Quip file
   *             system. Files that match the patterns are included in the index. Files that don't match
   *             the patterns are excluded from the index. If a file matches both an inclusion pattern
   *             and an exclusion pattern, the exclusion pattern takes precedence, and the file isn't
   *             included in the index.</p>
   */
  InclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain files in your Quip file
   *             system. Files that match the patterns are excluded from the index. Files that don’t
   *             match the patterns are included in the index. If a file matches both an inclusion
   *             pattern and an exclusion pattern, the exclusion pattern takes precedence, and the file
   *             isn't included in the index.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * @public
   * <p>Configuration information for an Amazon Virtual Private Cloud (VPC) to connect to your Quip.
   *             For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;
}

/**
 * @public
 * <p>Document metadata files that contain information such as the document access control
 *             information, source URI, document author, and custom attributes. Each metadata file
 *             contains metadata about a single document.</p>
 */
export interface DocumentsMetadataConfiguration {
  /**
   * @public
   * <p>A prefix used to filter metadata configuration files in the Amazon Web Services S3
   *             bucket. The S3 bucket might contain multiple metadata files. Use <code>S3Prefix</code>
   *             to include only the desired metadata files.</p>
   */
  S3Prefix?: string;
}

/**
 * @public
 * <p>Provides the configuration information to connect to an Amazon S3
 *             bucket.</p>
 */
export interface S3DataSourceConfiguration {
  /**
   * @public
   * <p>The name of the bucket that contains the documents.</p>
   */
  BucketName: string | undefined;

  /**
   * @public
   * <p>A list of S3 prefixes for the documents that should be included in the index.</p>
   */
  InclusionPrefixes?: string[];

  /**
   * @public
   * <p>A list of glob patterns for documents that should be indexed. If a document that
   *             matches an inclusion pattern also matches an exclusion pattern, the document is not
   *             indexed.</p>
   *          <p>Some <a href="https://docs.aws.amazon.com/cli/latest/reference/s3/#use-of-exclude-and-include-filters">examples</a>
   *             are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>*.txt</i> will include all text files in a directory (files
   *                     with the extension .txt).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>**\/*.txt</i> will include all text files in a directory and
   *                     its subdirectories.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>*tax*</i> will include all files in a directory that contain
   *                     'tax' in the file name, such as 'tax', 'taxes', 'income_tax'.</p>
   *             </li>
   *          </ul>
   */
  InclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of glob patterns for documents that should not be indexed. If a document that
   *             matches an inclusion prefix or inclusion pattern also matches an exclusion pattern, the
   *             document is not indexed.</p>
   *          <p>Some <a href="https://docs.aws.amazon.com/cli/latest/reference/s3/#use-of-exclude-and-include-filters">examples</a>
   *             are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>*.png , *.jpg</i> will exclude all PNG and JPEG image files
   *                     in a directory (files with the extensions .png and .jpg).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>*internal*</i> will exclude all files in a directory that
   *                     contain 'internal' in the file name, such as 'internal', 'internal_only',
   *                     'company_internal'.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>**\/*internal*</i> will exclude all internal-related files in
   *                     a directory and its subdirectories.</p>
   *             </li>
   *          </ul>
   */
  ExclusionPatterns?: string[];

  /**
   * @public
   * <p>Document metadata files that contain information such as the document access control
   *             information, source URI, document author, and custom attributes. Each metadata file
   *             contains metadata about a single document.</p>
   */
  DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration;

  /**
   * @public
   * <p>Provides the path to the S3 bucket that contains the user context filtering files for
   *             the data source. For the format of the file, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html">Access control for S3 data
   *             sources</a>.</p>
   */
  AccessControlListConfiguration?: AccessControlListConfiguration;
}

/**
 * @public
 * @enum
 */
export const SalesforceChatterFeedIncludeFilterType = {
  ACTIVE_USER: "ACTIVE_USER",
  STANDARD_USER: "STANDARD_USER",
} as const;

/**
 * @public
 */
export type SalesforceChatterFeedIncludeFilterType =
  (typeof SalesforceChatterFeedIncludeFilterType)[keyof typeof SalesforceChatterFeedIncludeFilterType];

/**
 * @public
 * <p>The configuration information for syncing a Salesforce chatter feed. The contents of
 *             the object comes from the Salesforce FeedItem table.</p>
 */
export interface SalesforceChatterFeedConfiguration {
  /**
   * @public
   * <p>The name of the column in the Salesforce FeedItem table that contains the content to
   *             index. Typically this is the <code>Body</code> column.</p>
   */
  DocumentDataFieldName: string | undefined;

  /**
   * @public
   * <p>The name of the column in the Salesforce FeedItem table that contains the title of the
   *             document. This is typically the <code>Title</code> column.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * @public
   * <p>Maps fields from a Salesforce chatter feed into Amazon Kendra index
   *             fields.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>Filters the documents in the feed based on status of the user. When you specify
   *                 <code>ACTIVE_USERS</code> only documents from users who have an active account are
   *             indexed. When you specify <code>STANDARD_USER</code> only documents for Salesforce
   *             standard users are documented. You can specify both.</p>
   */
  IncludeFilterTypes?: (SalesforceChatterFeedIncludeFilterType | string)[];
}

/**
 * @public
 * <p>Provides the configuration information for indexing Salesforce custom articles.</p>
 */
export interface SalesforceCustomKnowledgeArticleTypeConfiguration {
  /**
   * @public
   * <p>The name of the configuration.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name of the field in the custom knowledge article that contains the document data
   *             to index.</p>
   */
  DocumentDataFieldName: string | undefined;

  /**
   * @public
   * <p>The name of the field in the custom knowledge article that contains the document
   *             title.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * @public
   * <p>Maps attributes or field names of the custom knowledge article to Amazon Kendra
   *             index field names. To create custom fields, use the <code>UpdateIndex</code> API before
   *             you map to Salesforce fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             Salesforce data source field names must exist in your Salesforce custom metadata.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

/**
 * @public
 * @enum
 */
export const SalesforceKnowledgeArticleState = {
  ARCHIVED: "ARCHIVED",
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
} as const;

/**
 * @public
 */
export type SalesforceKnowledgeArticleState =
  (typeof SalesforceKnowledgeArticleState)[keyof typeof SalesforceKnowledgeArticleState];

/**
 * @public
 * <p>Provides the configuration information for standard Salesforce knowledge
 *             articles.</p>
 */
export interface SalesforceStandardKnowledgeArticleTypeConfiguration {
  /**
   * @public
   * <p>The name of the field that contains the document data to index.</p>
   */
  DocumentDataFieldName: string | undefined;

  /**
   * @public
   * <p>The name of the field that contains the document title.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * @public
   * <p>Maps attributes or field names of the knowledge article to Amazon Kendra index
   *             field names. To create custom fields, use the <code>UpdateIndex</code> API before you
   *             map to Salesforce fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             Salesforce data source field names must exist in your Salesforce custom metadata.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

/**
 * @public
 * <p>Provides the configuration information for the knowledge article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the
 *             standard fields of knowledge articles, or the custom fields of custom knowledge
 *             articles, but not both </p>
 */
export interface SalesforceKnowledgeArticleConfiguration {
  /**
   * @public
   * <p>Specifies the document states that should be included when Amazon Kendra indexes
   *             knowledge articles. You must specify at least one state.</p>
   */
  IncludedStates: (SalesforceKnowledgeArticleState | string)[] | undefined;

  /**
   * @public
   * <p>Configuration information for standard Salesforce knowledge articles.</p>
   */
  StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration;

  /**
   * @public
   * <p>Configuration information for custom Salesforce knowledge articles.</p>
   */
  CustomKnowledgeArticleTypeConfigurations?: SalesforceCustomKnowledgeArticleTypeConfiguration[];
}

/**
 * @public
 * <p>Provides the configuration information for processing attachments to Salesforce
 *             standard objects.</p>
 */
export interface SalesforceStandardObjectAttachmentConfiguration {
  /**
   * @public
   * <p>The name of the field used for the document title.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * @public
   * <p>One or more objects that map fields in attachments to Amazon Kendra index
   *             fields.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

/**
 * @public
 * @enum
 */
export const SalesforceStandardObjectName = {
  ACCOUNT: "ACCOUNT",
  CAMPAIGN: "CAMPAIGN",
  CASE: "CASE",
  CONTACT: "CONTACT",
  CONTRACT: "CONTRACT",
  DOCUMENT: "DOCUMENT",
  GROUP: "GROUP",
  IDEA: "IDEA",
  LEAD: "LEAD",
  OPPORTUNITY: "OPPORTUNITY",
  PARTNER: "PARTNER",
  PRICEBOOK: "PRICEBOOK",
  PRODUCT: "PRODUCT",
  PROFILE: "PROFILE",
  SOLUTION: "SOLUTION",
  TASK: "TASK",
  USER: "USER",
} as const;

/**
 * @public
 */
export type SalesforceStandardObjectName =
  (typeof SalesforceStandardObjectName)[keyof typeof SalesforceStandardObjectName];

/**
 * @public
 * <p>Provides the configuration information for indexing a single standard object.</p>
 */
export interface SalesforceStandardObjectConfiguration {
  /**
   * @public
   * <p>The name of the standard object.</p>
   */
  Name: SalesforceStandardObjectName | string | undefined;

  /**
   * @public
   * <p>The name of the field in the standard object table that contains the document
   *             contents.</p>
   */
  DocumentDataFieldName: string | undefined;

  /**
   * @public
   * <p>The name of the field in the standard object table that contains the document
   *             title.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * @public
   * <p>Maps attributes or field names of the standard object to Amazon Kendra index
   *             field names. To create custom fields, use the <code>UpdateIndex</code> API before you
   *             map to Salesforce fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             Salesforce data source field names must exist in your Salesforce custom metadata.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

/**
 * @public
 * <p>Provides the configuration information to connect to Salesforce as your data
 *             source.</p>
 */
export interface SalesforceConfiguration {
  /**
   * @public
   * <p>The instance URL for the Salesforce site that you want to index.</p>
   */
  ServerUrl: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Secrets Managersecret that contains the
   *             key/value pairs required to connect to your Salesforce instance. The secret must contain
   *             a JSON structure with the following keys:</p>
   *          <ul>
   *             <li>
   *                <p>authenticationUrl - The OAUTH endpoint that Amazon Kendra connects to get
   *                     an OAUTH token. </p>
   *             </li>
   *             <li>
   *                <p>consumerKey - The application public key generated when you created your
   *                     Salesforce application.</p>
   *             </li>
   *             <li>
   *                <p>consumerSecret - The application private key generated when you created your
   *                     Salesforce application.</p>
   *             </li>
   *             <li>
   *                <p>password - The password associated with the user logging in to the Salesforce
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>securityToken - The token associated with the user logging in to the
   *                     Salesforce instance.</p>
   *             </li>
   *             <li>
   *                <p>username - The user name of the user logging in to the Salesforce
   *                     instance.</p>
   *             </li>
   *          </ul>
   */
  SecretArn: string | undefined;

  /**
   * @public
   * <p>Configuration of the Salesforce standard objects that Amazon Kendra
   *             indexes.</p>
   */
  StandardObjectConfigurations?: SalesforceStandardObjectConfiguration[];

  /**
   * @public
   * <p>Configuration information for the knowledge article types that Amazon Kendra
   *             indexes. Amazon Kendra indexes standard knowledge articles and the standard fields
   *             of knowledge articles, or the custom fields of custom knowledge articles, but not
   *             both.</p>
   */
  KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration;

  /**
   * @public
   * <p>Configuration information for Salesforce chatter feeds.</p>
   */
  ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration;

  /**
   * @public
   * <p>Indicates whether Amazon Kendra should index attachments to Salesforce
   *             objects.</p>
   */
  CrawlAttachments?: boolean;

  /**
   * @public
   * <p>Configuration information for processing attachments to Salesforce standard objects.
   *         </p>
   */
  StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration;

  /**
   * @public
   * <p>A list of regular expression patterns to include certain documents in your Salesforce.
   *             Documents that match the patterns are included in the index. Documents that don't match
   *             the patterns are excluded from the index. If a document matches both an inclusion and
   *             exclusion pattern, the exclusion pattern takes precedence and the document isn't
   *             included in the index.</p>
   *          <p>The pattern is applied to the name of the attached file.</p>
   */
  IncludeAttachmentFilePatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain documents in your Salesforce.
   *             Documents that match the patterns are excluded from the index. Documents that don't
   *             match the patterns are included in the index. If a document matches both an inclusion
   *             and exclusion pattern, the exclusion pattern takes precedence and the document isn't
   *             included in the index.</p>
   *          <p>The pattern is applied to the name of the attached file.</p>
   */
  ExcludeAttachmentFilePatterns?: string[];
}

/**
 * @public
 * @enum
 */
export const ServiceNowAuthenticationType = {
  HTTP_BASIC: "HTTP_BASIC",
  OAUTH2: "OAUTH2",
} as const;

/**
 * @public
 */
export type ServiceNowAuthenticationType =
  (typeof ServiceNowAuthenticationType)[keyof typeof ServiceNowAuthenticationType];

/**
 * @public
 * <p>Provides the configuration information for crawling knowledge articles in the
 *             ServiceNow site.</p>
 */
export interface ServiceNowKnowledgeArticleConfiguration {
  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index attachments to knowledge articles.</p>
   */
  CrawlAttachments?: boolean;

  /**
   * @public
   * <p>A list of regular expression patterns applied to include knowledge article
   *             attachments. Attachments that match the patterns are included in the index. Items that
   *             don't match the patterns are excluded from the index. If an item matches both an
   *             inclusion and exclusion pattern, the exclusion pattern takes precedence and the item
   *             isn't included in the index.</p>
   */
  IncludeAttachmentFilePatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns applied to exclude certain knowledge article
   *             attachments. Attachments that match the patterns are excluded from the index. Items that
   *             don't match the patterns are included in the index. If an item matches both an inclusion
   *             and exclusion pattern, the exclusion pattern takes precedence and the item isn't
   *             included in the index.</p>
   */
  ExcludeAttachmentFilePatterns?: string[];

  /**
   * @public
   * <p>The name of the ServiceNow field that is mapped to the index document contents field
   *             in the Amazon Kendra index.</p>
   */
  DocumentDataFieldName: string | undefined;

  /**
   * @public
   * <p>The name of the ServiceNow field that is mapped to the index document title
   *             field.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * @public
   * <p>Maps attributes or field names of knoweldge articles to Amazon Kendra index field
   *             names. To create custom fields, use the <code>UpdateIndex</code> API before you map to
   *             ServiceNow fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             ServiceNow data source field names must exist in your ServiceNow custom metadata.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>A query that selects the knowledge articles to index. The query can return articles
   *             from multiple knowledge bases, and the knowledge bases can be public or private.</p>
   *          <p>The query string must be one generated by the ServiceNow console. For more
   *             information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/servicenow-query.html">Specifying documents to index with a
   *                 query</a>. </p>
   */
  FilterQuery?: string;
}

/**
 * @public
 * <p>Provides the configuration information for crawling service catalog items in the
 *             ServiceNow site</p>
 */
export interface ServiceNowServiceCatalogConfiguration {
  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index attachments to service catalog items.</p>
   */
  CrawlAttachments?: boolean;

  /**
   * @public
   * <p>A list of regular expression patterns to include certain attachments of catalogs in
   *             your ServiceNow. Item that match the patterns are included in the index. Items that
   *             don't match the patterns are excluded from the index. If an item matches both an
   *             inclusion and exclusion pattern, the exclusion pattern takes precedence and the item
   *             isn't included in the index.</p>
   *          <p>The regex is applied to the file name of the attachment.</p>
   */
  IncludeAttachmentFilePatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain attachments of catalogs in
   *             your ServiceNow. Item that match the patterns are excluded from the index. Items that
   *             don't match the patterns are included in the index. If an item matches both an inclusion
   *             and exclusion pattern, the exclusion pattern takes precedence and the item isn't
   *             included in the index.</p>
   *          <p>The regex is applied to the file name of the attachment.</p>
   */
  ExcludeAttachmentFilePatterns?: string[];

  /**
   * @public
   * <p>The name of the ServiceNow field that is mapped to the index document contents field
   *             in the Amazon Kendra index.</p>
   */
  DocumentDataFieldName: string | undefined;

  /**
   * @public
   * <p>The name of the ServiceNow field that is mapped to the index document title
   *             field.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * @public
   * <p>Maps attributes or field names of catalogs to Amazon Kendra index field names. To
   *             create custom fields, use the <code>UpdateIndex</code> API before you map to ServiceNow
   *             fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             ServiceNow data source field names must exist in your ServiceNow custom metadata.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

/**
 * @public
 * @enum
 */
export const ServiceNowBuildVersionType = {
  LONDON: "LONDON",
  OTHERS: "OTHERS",
} as const;

/**
 * @public
 */
export type ServiceNowBuildVersionType = (typeof ServiceNowBuildVersionType)[keyof typeof ServiceNowBuildVersionType];

/**
 * @public
 * <p>Provides the configuration information to connect to ServiceNow as your data
 *             source.</p>
 */
export interface ServiceNowConfiguration {
  /**
   * @public
   * <p>The ServiceNow instance that the data source connects to. The host endpoint should
   *             look like the following: <i>\{instance\}.service-now.com.</i>
   *          </p>
   */
  HostUrl: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the
   *             user name and password required to connect to the ServiceNow instance. You can also
   *             provide OAuth authentication credentials of user name, password, client ID, and client
   *             secret. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-servicenow.html">Using a ServiceNow data
   *                 source</a>.</p>
   */
  SecretArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the release that the ServiceNow host is running. If the host is not
   *             running the <code>LONDON</code> release, use <code>OTHERS</code>.</p>
   */
  ServiceNowBuildVersion: ServiceNowBuildVersionType | string | undefined;

  /**
   * @public
   * <p>Configuration information for crawling knowledge articles in the ServiceNow
   *             site.</p>
   */
  KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration;

  /**
   * @public
   * <p>Configuration information for crawling service catalogs in the ServiceNow site.</p>
   */
  ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration;

  /**
   * @public
   * <p>The type of authentication used to connect to the ServiceNow instance. If you choose
   *                 <code>HTTP_BASIC</code>, Amazon Kendra is authenticated using the user name and
   *             password provided in the Secrets Manager secret in the <code>SecretArn</code>
   *             field. If you choose <code>OAUTH2</code>, Amazon Kendra is authenticated using the
   *             credentials of client ID, client secret, user name and password.</p>
   *          <p>When you use <code>OAUTH2</code> authentication, you must generate a token and a
   *             client secret using the ServiceNow console. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-servicenow.html">Using a
   *                 ServiceNow data source</a>.</p>
   */
  AuthenticationType?: ServiceNowAuthenticationType | string;
}

/**
 * @public
 * @enum
 */
export const SharePointOnlineAuthenticationType = {
  HTTP_BASIC: "HTTP_BASIC",
  OAUTH2: "OAUTH2",
} as const;

/**
 * @public
 */
export type SharePointOnlineAuthenticationType =
  (typeof SharePointOnlineAuthenticationType)[keyof typeof SharePointOnlineAuthenticationType];

/**
 * @public
 * @enum
 */
export const SharePointVersion = {
  SHAREPOINT_2013: "SHAREPOINT_2013",
  SHAREPOINT_2016: "SHAREPOINT_2016",
  SHAREPOINT_2019: "SHAREPOINT_2019",
  SHAREPOINT_ONLINE: "SHAREPOINT_ONLINE",
} as const;

/**
 * @public
 */
export type SharePointVersion = (typeof SharePointVersion)[keyof typeof SharePointVersion];

/**
 * @public
 * <p>Provides the configuration information to connect to Microsoft SharePoint as your data
 *             source.</p>
 */
export interface SharePointConfiguration {
  /**
   * @public
   * <p>The version of Microsoft SharePoint that you use.</p>
   */
  SharePointVersion: SharePointVersion | string | undefined;

  /**
   * @public
   * <p>The Microsoft SharePoint site URLs for the documents you want to index.</p>
   */
  Urls: string[] | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the
   *             user name and password required to connect to the SharePoint instance. For more
   *             information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-sharepoint.html">Microsoft
   *             SharePoint</a>.</p>
   */
  SecretArn: string | undefined;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index document attachments.</p>
   */
  CrawlAttachments?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to use the SharePoint change log to determine which documents
   *             require updating in the index. Depending on the change log's size, it may take longer
   *             for Amazon Kendra to use the change log than to scan all of your documents in
   *             SharePoint.</p>
   */
  UseChangeLog?: boolean;

  /**
   * @public
   * <p>A list of regular expression patterns to include certain documents in your SharePoint.
   *             Documents that match the patterns are included in the index. Documents that don't match
   *             the patterns are excluded from the index. If a document matches both an inclusion and
   *             exclusion pattern, the exclusion pattern takes precedence and the document isn't
   *             included in the index.</p>
   *          <p>The regex applies to the display URL of the SharePoint document.</p>
   */
  InclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain documents in your SharePoint.
   *             Documents that match the patterns are excluded from the index. Documents that don't
   *             match the patterns are included in the index. If a document matches both an inclusion
   *             and exclusion pattern, the exclusion pattern takes precedence and the document isn't
   *             included in the index.</p>
   *          <p>The regex applies to the display URL of the SharePoint document.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * @public
   * <p>Configuration information for an Amazon Virtual Private Cloud to connect to your Microsoft
   *             SharePoint. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map SharePoint data
   *             source attributes or field names to Amazon Kendra index field names. To create
   *             custom fields, use the <code>UpdateIndex</code> API before you map to SharePoint fields.
   *             For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             SharePoint data source field names must exist in your SharePoint custom metadata.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * @public
   * <p>The Microsoft SharePoint attribute field that contains the title of the
   *             document.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to disable local groups information.</p>
   */
  DisableLocalGroups?: boolean;

  /**
   * @public
   * <p>The path to the SSL certificate stored in an Amazon S3 bucket. You use this to
   *             connect to SharePoint Server if you require a secure SSL connection.</p>
   *          <p>You can generate a self-signed X509 certificate on any computer using OpenSSL. For an
   *             example of using OpenSSL to create an X509 certificate, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/configuring-https-ssl.html">Create and sign an X509
   *                 certificate</a>.</p>
   */
  SslCertificateS3Path?: S3Path;

  /**
   * @public
   * <p>Whether you want to connect to SharePoint Online using basic authentication of user
   *             name and password, or OAuth authentication of user name, password, client ID, and client
   *             secret, or AD App-only authentication of client secret.</p>
   */
  AuthenticationType?: SharePointOnlineAuthenticationType | string;

  /**
   * @public
   * <p>Configuration information to connect to your Microsoft SharePoint site URLs via
   *             instance via a web proxy. You can use this option for SharePoint Server.</p>
   *          <p>You must provide the website host name and port number. For example, the host name of
   *                 <i>https://a.example.com/page1.html</i> is "a.example.com" and the
   *             port is 443, the standard port for HTTPS.</p>
   *          <p>Web proxy credentials are optional and you can use them to connect to a web proxy
   *             server that requires basic authentication of user name and password. To store web proxy
   *             credentials, you use a secret in Secrets Manager.</p>
   *          <p>It is recommended that you follow best security practices when configuring your web
   *             proxy. This includes setting up throttling, setting up logging and monitoring, and
   *             applying security patches on a regular basis. If you use your web proxy with multiple
   *             data sources, sync jobs that occur at the same time could strain the load on your proxy.
   *             It is recommended you prepare your proxy beforehand for any security and load
   *             requirements.</p>
   */
  ProxyConfiguration?: ProxyConfiguration;
}

/**
 * @public
 * @enum
 */
export const SlackEntity = {
  DIRECT_MESSAGE: "DIRECT_MESSAGE",
  GROUP_MESSAGE: "GROUP_MESSAGE",
  PRIVATE_CHANNEL: "PRIVATE_CHANNEL",
  PUBLIC_CHANNEL: "PUBLIC_CHANNEL",
} as const;

/**
 * @public
 */
export type SlackEntity = (typeof SlackEntity)[keyof typeof SlackEntity];

/**
 * @public
 * <p>Provides the configuration information to connect to Slack as your data source.</p>
 */
export interface SlackConfiguration {
  /**
   * @public
   * <p>The identifier of the team in the Slack workspace. For example,
   *                 <i>T0123456789</i>.</p>
   *          <p>You can find your team ID in the URL of the main page of your Slack workspace. When
   *             you log in to Slack via a browser, you are directed to the URL of the main page. For
   *             example, <i>https://app.slack.com/client/<b>T0123456789</b>/...</i>.</p>
   */
  TeamId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the
   *             key-value pairs required to connect to your Slack workspace team. The secret must
   *             contain a JSON structure with the following keys:</p>
   *          <ul>
   *             <li>
   *                <p>slackToken—The user or bot token created in Slack. For more information
   *                     on creating a token in Slack, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-slack.html#slack-authentication">Authentication for a Slack data source</a>.</p>
   *             </li>
   *          </ul>
   */
  SecretArn: string | undefined;

  /**
   * @public
   * <p>Configuration information for an Amazon Virtual Private Cloud to connect to your Slack. For
   *             more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * @public
   * <p>Specify whether to index public channels, private channels, group messages, and direct
   *             messages. You can specify one or more of these options.</p>
   */
  SlackEntityList: (SlackEntity | string)[] | undefined;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to use the Slack change log to determine which documents require
   *             updating in the index. Depending on the Slack change log's size, it may take longer for
   *                 Amazon Kendra to use the change log than to scan all of your documents in
   *             Slack.</p>
   */
  UseChangeLog?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to index bot messages from your Slack workspace team.</p>
   */
  CrawlBotMessage?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to exclude archived messages to index from your Slack workspace
   *             team.</p>
   */
  ExcludeArchived?: boolean;

  /**
   * @public
   * <p>The date to start crawling your data from your Slack workspace team. The date must
   *             follow this format: <code>yyyy-mm-dd</code>.</p>
   */
  SinceCrawlDate: string | undefined;

  /**
   * @public
   * <p>The number of hours for change log to look back from when you last synchronized your
   *             data. You can look back up to 7 days or 168 hours.</p>
   *          <p>Change log updates your index only if new content was added since you last synced your
   *             data. Updated or deleted content from before you last synced does not get updated in
   *             your index. To capture updated or deleted content before you last synced, set the
   *                 <code>LookBackPeriod</code> to the number of hours you want change log to look
   *             back.</p>
   */
  LookBackPeriod?: number;

  /**
   * @public
   * <p>The list of private channel names from your Slack workspace team. You use this if you
   *             want to index specific private channels, not all private channels. You can also use
   *             regular expression patterns to filter private channels.</p>
   */
  PrivateChannelFilter?: string[];

  /**
   * @public
   * <p>The list of public channel names to index from your Slack workspace team. You use this
   *             if you want to index specific public channels, not all public channels. You can also use
   *             regular expression patterns to filter public channels.</p>
   */
  PublicChannelFilter?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to include certain attached files in your Slack
   *             workspace team. Files that match the patterns are included in the index. Files that
   *             don't match the patterns are excluded from the index. If a file matches both an
   *             inclusion and exclusion pattern, the exclusion pattern takes precedence and the file
   *             isn't included in the index.</p>
   */
  InclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain attached files in your Slack
   *             workspace team. Files that match the patterns are excluded from the index. Files that
   *             don’t match the patterns are included in the index. If a file matches both an inclusion
   *             and exclusion pattern, the exclusion pattern takes precedence and the file isn't
   *             included in the index.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map Slack data
   *             source attributes or field names to Amazon Kendra index field names. To create
   *             custom fields, use the <code>UpdateIndex</code> API before you map to Slack fields. For
   *             more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The
   *             Slack data source field names must exist in your Slack custom metadata.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

/**
 * @public
 * <p>Provides a template for the configuration information to connect to your data
 *       source.</p>
 */
export interface TemplateConfiguration {
  /**
   * @public
   * <p>The template schema used for the data source, where templates schemas are
   *       supported.</p>
   *          <p>See <a href="https://docs.aws.amazon.com/kendra/latest/dg/ds-schemas.html">Data source
   *         template schemas</a>.</p>
   */
  Template?: __DocumentType;
}

/**
 * @public
 * @enum
 */
export const WebCrawlerMode = {
  EVERYTHING: "EVERYTHING",
  HOST_ONLY: "HOST_ONLY",
  SUBDOMAINS: "SUBDOMAINS",
} as const;

/**
 * @public
 */
export type WebCrawlerMode = (typeof WebCrawlerMode)[keyof typeof WebCrawlerMode];

/**
 * @public
 * <p>Provides the configuration information for the seed or starting point URLs to
 *             crawl.</p>
 *          <p>
 *             <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all
 *                 other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler
 *                 to index your own web pages, or web pages that you have authorization to
 *                 index.</i>
 *          </p>
 */
export interface SeedUrlConfiguration {
  /**
   * @public
   * <p>The list of seed or starting point URLs of the websites you want to crawl.</p>
   *          <p>The list can include a maximum of 100 seed URLs.</p>
   */
  SeedUrls: string[] | undefined;

  /**
   * @public
   * <p>You can choose one of the following modes:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HOST_ONLY</code>—crawl only the website host names. For
   *                     example, if the seed URL is "abc.example.com", then only URLs with host name
   *                     "abc.example.com" are crawled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUBDOMAINS</code>—crawl the website host names with subdomains.
   *                     For example, if the seed URL is "abc.example.com", then "a.abc.example.com" and
   *                     "b.abc.example.com" are also crawled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EVERYTHING</code>—crawl the website host names with subdomains
   *                     and other domains that the web pages link to.</p>
   *             </li>
   *          </ul>
   *          <p>The default mode is set to <code>HOST_ONLY</code>.</p>
   */
  WebCrawlerMode?: WebCrawlerMode | string;
}

/**
 * @public
 * <p>Provides the configuration information for the sitemap URLs to crawl.</p>
 *          <p>
 *             <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all
 *                 other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler
 *                 to index your own web pages, or web pages that you have authorization to
 *                 index.</i>
 *          </p>
 */
export interface SiteMapsConfiguration {
  /**
   * @public
   * <p>The list of sitemap URLs of the websites you want to crawl.</p>
   *          <p>The list can include a maximum of three sitemap URLs.</p>
   */
  SiteMaps: string[] | undefined;
}

/**
 * @public
 * <p>Provides the configuration information of the URLs to crawl.</p>
 *          <p>You can only crawl websites that use the secure communication protocol, Hypertext
 *             Transfer Protocol Secure (HTTPS). If you receive an error when crawling a website, it
 *             could be that the website is blocked from crawling.</p>
 *          <p>
 *             <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all
 *                 other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler
 *                 to index your own web pages, or web pages that you have authorization to
 *                 index.</i>
 *          </p>
 */
export interface Urls {
  /**
   * @public
   * <p>Configuration of the seed or starting point URLs of the websites you want to
   *             crawl.</p>
   *          <p>You can choose to crawl only the website host names, or the website host names with
   *             subdomains, or the website host names with subdomains and other domains that the
   *             web pages link to.</p>
   *          <p>You can list up to 100 seed URLs.</p>
   */
  SeedUrlConfiguration?: SeedUrlConfiguration;

  /**
   * @public
   * <p>Configuration of the sitemap URLs of the websites you want to crawl.</p>
   *          <p>Only URLs belonging to the same website host names are crawled. You can list up to
   *             three sitemap URLs.</p>
   */
  SiteMapsConfiguration?: SiteMapsConfiguration;
}

/**
 * @public
 * <p>Provides the configuration information required for Amazon Kendra Web
 *             Crawler.</p>
 */
export interface WebCrawlerConfiguration {
  /**
   * @public
   * <p>Specifies the seed or starting point URLs of the websites or the sitemap URLs of the
   *             websites you want to crawl.</p>
   *          <p>You can include website subdomains. You can list up to 100 seed URLs and up to three
   *             sitemap URLs.</p>
   *          <p>You can only crawl websites that use the secure communication protocol, Hypertext
   *             Transfer Protocol Secure (HTTPS). If you receive an error when crawling a website, it
   *             could be that the website is blocked from crawling.</p>
   *          <p>
   *             <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all
   *                 other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler
   *                 to index your own web pages, or web pages that you have authorization to
   *                 index.</i>
   *          </p>
   */
  Urls: Urls | undefined;

  /**
   * @public
   * <p>The 'depth' or number of levels from the seed level to crawl. For example, the seed
   *             URL page is depth 1 and any hyperlinks on this page that are also crawled are depth 2.</p>
   */
  CrawlDepth?: number;

  /**
   * @public
   * <p>The maximum number of URLs on a web page to include when crawling a website. This
   *             number is per web page.</p>
   *          <p>As a website’s web pages are crawled, any URLs the web pages link to are also crawled.
   *             URLs on a web page are crawled in order of appearance.</p>
   *          <p>The default maximum links per page is 100.</p>
   */
  MaxLinksPerPage?: number;

  /**
   * @public
   * <p>The maximum size (in MB) of a web page or attachment to crawl.</p>
   *          <p>Files larger than this size (in MB) are skipped/not crawled.</p>
   *          <p>The default maximum size of a web page or attachment is set to 50 MB.</p>
   */
  MaxContentSizePerPageInMegaBytes?: number;

  /**
   * @public
   * <p>The maximum number of URLs crawled per website host per minute.</p>
   *          <p>A minimum of one URL is required.</p>
   *          <p>The default maximum number of URLs crawled per website host per minute is 300.</p>
   */
  MaxUrlsPerMinuteCrawlRate?: number;

  /**
   * @public
   * <p>A list of regular expression patterns to include certain URLs to crawl. URLs that
   *             match the patterns are included in the index. URLs that don't match the patterns are
   *             excluded from the index. If a URL matches both an inclusion and exclusion pattern, the
   *             exclusion pattern takes precedence and the URL file isn't included in the index.</p>
   */
  UrlInclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain URLs to crawl. URLs that
   *             match the patterns are excluded from the index. URLs that don't match the patterns are
   *             included in the index. If a URL matches both an inclusion and exclusion pattern, the
   *             exclusion pattern takes precedence and the URL file isn't included in the index.</p>
   */
  UrlExclusionPatterns?: string[];

  /**
   * @public
   * <p>Configuration information required to connect to your internal websites via a web
   *             proxy.</p>
   *          <p>You must provide the website host name and port number. For example, the host name of
   *             https://a.example.com/page1.html is "a.example.com" and the port is 443, the standard
   *             port for HTTPS.</p>
   *          <p>Web proxy credentials are optional and you can use them to connect to a web proxy
   *             server that requires basic authentication. To store web proxy credentials, you use a
   *             secret in <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html">Secrets Manager</a>.</p>
   */
  ProxyConfiguration?: ProxyConfiguration;

  /**
   * @public
   * <p>Configuration information required to connect to websites using authentication.</p>
   *          <p>You can connect to websites using basic authentication of user name and password. You
   *             use a secret in <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html">Secrets Manager</a> to
   *             store your authentication credentials.</p>
   *          <p>You must provide the website host name and port number. For example, the host name of
   *             https://a.example.com/page1.html is "a.example.com" and the port is 443, the standard
   *             port for HTTPS.</p>
   */
  AuthenticationConfiguration?: AuthenticationConfiguration;
}

/**
 * @public
 * <p>Provides the configuration information to connect to Amazon WorkDocs
 *             as your data source.</p>
 *          <p>Amazon WorkDocs connector is available in Oregon, North Virginia, Sydney, Singapore and Ireland
 *             regions.</p>
 */
export interface WorkDocsConfiguration {
  /**
   * @public
   * <p>The identifier of the directory corresponding to your
   *             Amazon WorkDocs site repository.</p>
   *          <p>You can find the organization ID in the
   *             <a href="https://console.aws.amazon.com/directoryservicev2/">Directory Service</a> by going to
   *             <b>Active Directory</b>, then
   *             <b>Directories</b>. Your Amazon WorkDocs site directory has an
   *             ID, which is the organization ID. You can also set up a new Amazon WorkDocs
   *             directory in the Directory Service console and enable a Amazon WorkDocs site
   *             for the directory in the Amazon WorkDocs console.</p>
   */
  OrganizationId: string | undefined;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to include comments on documents
   *             in your index. Including comments in your index means each comment
   *             is a document that can be searched on.</p>
   *          <p>The default is set to <code>FALSE</code>.</p>
   */
  CrawlComments?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to use the Amazon WorkDocs change log to determine
   *             which documents require updating in the index. Depending on the change log's
   *             size, it may take longer for Amazon Kendra to use the change log than to
   *             scan all of your documents in Amazon WorkDocs.</p>
   */
  UseChangeLog?: boolean;

  /**
   * @public
   * <p>A list of regular expression patterns to include certain files
   *             in your Amazon WorkDocs site repository. Files that match the patterns
   *             are included in the index. Files that don't match the patterns are
   *             excluded from the index. If a file matches both an inclusion and exclusion
   *             pattern, the exclusion pattern takes precedence and the file isn't included
   *             in the index.</p>
   */
  InclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of regular expression patterns to exclude certain files
   *             in your Amazon WorkDocs site repository. Files that match the patterns
   *             are excluded from the index. Files that don’t match the patterns
   *             are included in the index. If a file matches both an inclusion and exclusion
   *             pattern, the exclusion pattern takes precedence and the file isn't included
   *             in the index.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * @public
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that
   *             map Amazon WorkDocs data source attributes or field names to Amazon Kendra
   *             index field names. To create custom fields, use the
   *             <code>UpdateIndex</code> API before you map to Amazon WorkDocs fields.
   *             For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping
   *                 data source fields</a>. The Amazon WorkDocs data source field names
   *             must exist in your Amazon WorkDocs custom metadata.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

/**
 * @public
 * <p>Provides the configuration information for an Amazon Kendra data source.</p>
 */
export interface DataSourceConfiguration {
  /**
   * @public
   * <p>Provides the configuration information to connect to an Amazon S3 bucket as your
   *       data source.</p>
   */
  S3Configuration?: S3DataSourceConfiguration;

  /**
   * @public
   * <p>Provides the configuration information to connect to Microsoft SharePoint as your data
   *       source.</p>
   */
  SharePointConfiguration?: SharePointConfiguration;

  /**
   * @public
   * <p>Provides the configuration information to connect to a database as your data
   *       source.</p>
   */
  DatabaseConfiguration?: DatabaseConfiguration;

  /**
   * @public
   * <p>Provides the configuration information to connect to Salesforce as your data
   *       source.</p>
   */
  SalesforceConfiguration?: SalesforceConfiguration;

  /**
   * @public
   * <p>Provides the configuration information to connect to Microsoft OneDrive as your data
   *       source.</p>
   */
  OneDriveConfiguration?: OneDriveConfiguration;

  /**
   * @public
   * <p>Provides the configuration information to connect to ServiceNow as your data
   *       source.</p>
   */
  ServiceNowConfiguration?: ServiceNowConfiguration;

  /**
   * @public
   * <p>Provides the configuration information to connect to Confluence as your data
   *       source.</p>
   */
  ConfluenceConfiguration?: ConfluenceConfiguration;

  /**
   * @public
   * <p>Provides the configuration information to connect to Google Drive as your data
   *       source.</p>
   */
  GoogleDriveConfiguration?: GoogleDriveConfiguration;

  /**
   * @public
   * <p>Provides the configuration information required for Amazon Kendra Web
   *             Crawler.</p>
   */
  WebCrawlerConfiguration?: WebCrawlerConfiguration;

  /**
   * @public
   * <p>Provides the configuration information to connect to Amazon WorkDocs as your data
   *       source.</p>
   */
  WorkDocsConfiguration?: WorkDocsConfiguration;

  /**
   * @public
   * <p>Provides the configuration information to connect to Amazon FSx as your data
   *       source.</p>
   */
  FsxConfiguration?: FsxConfiguration;

  /**
   * @public
   * <p>Provides the configuration information to connect to Slack as your data source.</p>
   */
  SlackConfiguration?: SlackConfiguration;

  /**
   * @public
   * <p>Provides the configuration information to connect to Box as your data source.</p>
   */
  BoxConfiguration?: BoxConfiguration;

  /**
   * @public
   * <p>Provides the configuration information to connect to Quip as your data source.</p>
   */
  QuipConfiguration?: QuipConfiguration;

  /**
   * @public
   * <p>Provides the configuration information to connect to Jira as your data source.</p>
   */
  JiraConfiguration?: JiraConfiguration;

  /**
   * @public
   * <p>Provides the configuration information to connect to GitHub as your data source.</p>
   */
  GitHubConfiguration?: GitHubConfiguration;

  /**
   * @public
   * @deprecated
   *
   * <p>Provides the configuration information to connect to Alfresco as your data source.</p>
   *          <p>Support for <code>AlfrescoConfiguration</code> ended May 2023.
   *       We recommend migrating to or using the Alfresco data source template
   *       schema / <a href="https://docs.aws.amazon.com/kendra/latest/APIReference/API_TemplateConfiguration.html">TemplateConfiguration</a> API.</p>
   */
  AlfrescoConfiguration?: AlfrescoConfiguration;

  /**
   * @public
   * <p>Provides a template for the configuration information to connect to your data
   *       source.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;
}

/**
 * @public
 * <p>A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values
 *       can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : /
 *       = + - @.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key for the tag. Keys are not case sensitive and must be unique for the index, FAQ, or
   *       data source.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value associated with the tag. The value may be an empty string but it can't be
   *       null.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  ALFRESCO: "ALFRESCO",
  BOX: "BOX",
  CONFLUENCE: "CONFLUENCE",
  CUSTOM: "CUSTOM",
  DATABASE: "DATABASE",
  FSX: "FSX",
  GITHUB: "GITHUB",
  GOOGLEDRIVE: "GOOGLEDRIVE",
  JIRA: "JIRA",
  ONEDRIVE: "ONEDRIVE",
  QUIP: "QUIP",
  S3: "S3",
  SALESFORCE: "SALESFORCE",
  SERVICENOW: "SERVICENOW",
  SHAREPOINT: "SHAREPOINT",
  SLACK: "SLACK",
  TEMPLATE: "TEMPLATE",
  WEBCRAWLER: "WEBCRAWLER",
  WORKDOCS: "WORKDOCS",
} as const;

/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

/**
 * @public
 */
export interface CreateDataSourceRequest {
  /**
   * @public
   * <p>A name for the data source connector.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The identifier of the index you want to use with the data source connector.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The type of data source repository. For example, <code>SHAREPOINT</code>.</p>
   */
  Type: DataSourceType | string | undefined;

  /**
   * @public
   * <p>Configuration information to connect to your data source repository.</p>
   *          <p>You can't specify the <code>Configuration</code> parameter when the <code>Type</code>
   *       parameter is set to <code>CUSTOM</code>. If you do, you receive a
   *         <code>ValidationException</code> exception.</p>
   *          <p>The <code>Configuration</code> parameter is required for all other data sources.</p>
   */
  Configuration?: DataSourceConfiguration;

  /**
   * @public
   * <p>Configuration information for an Amazon Virtual Private Cloud to connect to your data source.
   *       For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * @public
   * <p>A description for the data source connector.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Sets the frequency for Amazon Kendra to check the documents in your data source
   *       repository and update the index. If you don't set a schedule Amazon Kendra will not
   *       periodically update the index. You can call the <code>StartDataSourceSyncJob</code> API to
   *       update the index.</p>
   *          <p>Specify a <code>cron-</code> format schedule string or an empty string to indicate that
   *       the index is updated on demand.</p>
   *          <p>You can't specify the <code>Schedule</code> parameter when the <code>Type</code> parameter
   *       is set to <code>CUSTOM</code>. If you do, you receive a <code>ValidationException</code>
   *       exception.</p>
   */
  Schedule?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to access
   *       the data source and required resources. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM access roles for Amazon Kendra.</a>.</p>
   *          <p>You can't specify the <code>RoleArn</code> parameter when the <code>Type</code> parameter
   *       is set to <code>CUSTOM</code>. If you do, you receive a <code>ValidationException</code>
   *       exception.</p>
   *          <p>The <code>RoleArn</code> parameter is required for all other data sources.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>A list of key-value pairs that identify or categorize the data source connector. You
   *       can also use tags to help control access to the data source connector. Tag keys and values
   *       can consist of Unicode letters, digits, white space, and any of the following symbols:
   *       _ . : / = + - @.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A token that you provide to identify the request to create a data source connector.
   *       Multiple calls to the <code>CreateDataSource</code> API with the same client token will create
   *       only one data source connector.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The code for a language. This allows you to support a language for all
   *             documents when creating the data source connector. English is supported
   *             by default. For more information on supported languages, including their codes,
   *             see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding
   *                 documents in languages other than English</a>.</p>
   */
  LanguageCode?: string;

  /**
   * @public
   * <p>Configuration information for altering document metadata and content during the
   *             document ingestion process.</p>
   *          <p>For more information on how to create, modify and delete document metadata, or make
   *             other content alterations when you ingest documents into Amazon Kendra, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>
   */
  CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
}

/**
 * @public
 */
export interface CreateDataSourceResponse {
  /**
   * @public
   * <p>The identifier of the data source connector.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>Provides the configuration information for your content sources, such as data sources,
 *             FAQs, and content indexed directly via <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a>.</p>
 */
export interface ContentSourceConfiguration {
  /**
   * @public
   * <p>The identifier of the data sources you want to use for your Amazon Kendra experience.</p>
   */
  DataSourceIds?: string[];

  /**
   * @public
   * <p>The identifier of the FAQs that you want to use for your Amazon Kendra experience.</p>
   */
  FaqIds?: string[];

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to use documents you indexed directly using the
   *                 <code>BatchPutDocument</code> API.</p>
   */
  DirectPutContent?: boolean;
}

/**
 * @public
 * <p>Provides the configuration information for the identifiers of your users.</p>
 */
export interface UserIdentityConfiguration {
  /**
   * @public
   * <p>The IAM Identity Center field name that contains the identifiers of your users,
   *             such as their emails. This is used for <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">user context filtering</a>
   *             and for granting access to your Amazon Kendra experience. You must set up IAM Identity Center
   *             with Amazon Kendra. You must include your users and groups in your Access Control List when
   *             you ingest documents into your index. For more information, see
   *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/getting-started-aws-sso.html">Getting
   *                 started with an IAM Identity Center identity source</a>.</p>
   */
  IdentityAttributeName?: string;
}

/**
 * @public
 * <p>Provides the configuration information for your Amazon Kendra experience. This includes
 *             the data source IDs and/or FAQ IDs, and user or group information to grant access
 *             to your Amazon Kendra experience.</p>
 */
export interface ExperienceConfiguration {
  /**
   * @public
   * <p>The identifiers of your data sources and FAQs. Or, you can specify
   *             that you want to use documents indexed via the <code>BatchPutDocument</code>
   *             API. This is the content you want to use for your Amazon Kendra experience.</p>
   */
  ContentSourceConfiguration?: ContentSourceConfiguration;

  /**
   * @public
   * <p>The IAM Identity Center field name that contains the identifiers of your users,
   *             such as their emails.</p>
   */
  UserIdentityConfiguration?: UserIdentityConfiguration;
}

/**
 * @public
 */
export interface CreateExperienceRequest {
  /**
   * @public
   * <p>A name for your Amazon Kendra experience.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The identifier of the index for your Amazon Kendra experience.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to access
   *             <code>Query</code> API, <code>GetQuerySuggestions</code> API, and other required APIs.
   *             The role also must include permission to access IAM Identity Center (successor to Single Sign-On) that stores your
   *             user and group information. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM access roles for Amazon Kendra</a>.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>Configuration information for your Amazon Kendra experience. This includes
   *             <code>ContentSourceConfiguration</code>, which specifies the data source IDs
   *             and/or FAQ IDs, and <code>UserIdentityConfiguration</code>, which specifies the
   *             user or group information to grant access to your Amazon Kendra experience.</p>
   */
  Configuration?: ExperienceConfiguration;

  /**
   * @public
   * <p>A description for your Amazon Kendra experience.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A token that you provide to identify the request to create your Amazon Kendra experience.
   *             Multiple calls to the <code>CreateExperience</code> API with the same client
   *             token creates only one Amazon Kendra experience.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateExperienceResponse {
  /**
   * @public
   * <p>The identifier of your Amazon Kendra experience.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FaqFileFormat = {
  CSV: "CSV",
  CSV_WITH_HEADER: "CSV_WITH_HEADER",
  JSON: "JSON",
} as const;

/**
 * @public
 */
export type FaqFileFormat = (typeof FaqFileFormat)[keyof typeof FaqFileFormat];

/**
 * @public
 */
export interface CreateFaqRequest {
  /**
   * @public
   * <p>The identifier of the index for the FAQ.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>A name for the FAQ.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description for the FAQ.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The path to the FAQ file in S3.</p>
   */
  S3Path: S3Path | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to access
   *             the S3 bucket that contains the FAQs. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM access roles for
   *                 Amazon Kendra</a>.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>A list of key-value pairs that identify the FAQ. You can use the tags to identify and
   *             organize your resources and to control access to resources.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The format of the FAQ input file. You can choose between a basic CSV format, a CSV
   *             format that includes customs attributes in a header, and a JSON format that includes
   *             custom attributes.</p>
   *          <p>The default format is CSV.</p>
   *          <p>The format must match the format of the file stored in the S3 bucket identified in
   *             the <code>S3Path</code> parameter.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-creating-faq.html">Adding questions and
   *             answers</a>.</p>
   */
  FileFormat?: FaqFileFormat | string;

  /**
   * @public
   * <p>A token that you provide to identify the request to create a FAQ. Multiple calls to
   *             the <code>CreateFaqRequest</code> API with the same client token will create only one
   *             FAQ. </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The code for a language. This allows you to support a language
   *             for the FAQ document. English is supported by default.
   *             For more information on supported languages, including their codes,
   *             see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding
   *                 documents in languages other than English</a>.</p>
   */
  LanguageCode?: string;
}

/**
 * @public
 */
export interface CreateFaqResponse {
  /**
   * @public
   * <p>The identifier of the FAQ.</p>
   */
  Id?: string;
}

/**
 * @public
 * <p>A featured document. This document is displayed at the top of the search
 *             results page, placed above all other results for certain queries. If there's
 *             an exact match of a query, then the document is featured in the search results.</p>
 */
export interface FeaturedDocument {
  /**
   * @public
   * <p>The identifier of the document to feature in the search results. You can
   *             use the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html">Query</a> API to search for
   *             specific documents with their document IDs included in the result items,
   *             or you can use the console.</p>
   */
  Id?: string;
}

/**
 * @public
 * @enum
 */
export const FeaturedResultsSetStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type FeaturedResultsSetStatus = (typeof FeaturedResultsSetStatus)[keyof typeof FeaturedResultsSetStatus];

/**
 * @public
 */
export interface CreateFeaturedResultsSetRequest {
  /**
   * @public
   * <p>The identifier of the index that you want to use for featuring results.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>A name for the set of featured results.</p>
   */
  FeaturedResultsSetName: string | undefined;

  /**
   * @public
   * <p>A description for the set of featured results.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A token that you provide to identify the request to create a set of
   *             featured results. Multiple calls to the <code>CreateFeaturedResultsSet</code>
   *             API with the same client token will create only one featured results set.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The current status of the set of featured results. When the value is
   *             <code>ACTIVE</code>, featured results are ready for use. You can still
   *             configure your settings before setting the status to <code>ACTIVE</code>.
   *             You can set the status to <code>ACTIVE</code> or <code>INACTIVE</code>
   *             using the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateFeaturedResultsSet.html">UpdateFeaturedResultsSet</a> API. The queries you specify for
   *             featured results must be unique per featured results set for each index,
   *             whether the status is <code>ACTIVE</code> or <code>INACTIVE</code>.</p>
   */
  Status?: FeaturedResultsSetStatus | string;

  /**
   * @public
   * <p>A list of queries for featuring results. For more information on the
   *             list of queries, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_FeaturedResultsSet.html">FeaturedResultsSet</a>.</p>
   */
  QueryTexts?: string[];

  /**
   * @public
   * <p>A list of document IDs for the documents you want to feature at the
   *             top of the search results page. For more information on the list of
   *             documents, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_FeaturedResultsSet.html">FeaturedResultsSet</a>.</p>
   */
  FeaturedDocuments?: FeaturedDocument[];

  /**
   * @public
   * <p>A list of key-value pairs that identify or categorize the featured results set. You
   *             can also use tags to help control access to the featured results set. Tag keys and
   *             values can consist of Unicode letters, digits, white space, and any of the following
   *             symbols:_ . : / = + - @.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>A set of featured results that are displayed at the top of your search results.
 *             Featured results are placed above all other results for certain queries. If there's
 *             an exact match of a query, then one or more specific documents are featured in the
 *             search results.</p>
 */
export interface FeaturedResultsSet {
  /**
   * @public
   * <p>The identifier of the set of featured results.</p>
   */
  FeaturedResultsSetId?: string;

  /**
   * @public
   * <p>The name for the set of featured results.</p>
   */
  FeaturedResultsSetName?: string;

  /**
   * @public
   * <p>The description for the set of featured results.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The current status of the set of featured results. When the value is
   *             <code>ACTIVE</code>, featured results are ready for use. You can still
   *             configure your settings before setting the status to <code>ACTIVE</code>.
   *             You can set the status to <code>ACTIVE</code> or <code>INACTIVE</code>
   *             using the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateFeaturedResultsSet.html">UpdateFeaturedResultsSet</a> API. The queries you specify for
   *             featured results must be unique per featured results set for each index,
   *             whether the status is <code>ACTIVE</code> or <code>INACTIVE</code>.</p>
   */
  Status?: FeaturedResultsSetStatus | string;

  /**
   * @public
   * <p>The list of queries for featuring results.</p>
   *          <p>Specific queries are mapped to specific documents for featuring in
   *             the results. If a query contains an exact match, then one or more
   *             specific documents are featured in the results. The exact match applies
   *             to the full query. For example, if you only specify 'Kendra', queries
   *             such as 'How does kendra semantically rank results?' will not render the
   *             featured results. Featured results are designed for specific queries,
   *             rather than queries that are too broad in scope.</p>
   */
  QueryTexts?: string[];

  /**
   * @public
   * <p>The list of document IDs for the documents you want to feature at the
   *             top of the search results page. You can use the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html">Query</a> API to search for
   *             specific documents with their document IDs included in the result items,
   *             or you can use the console.</p>
   *          <p>You can add up to four featured documents. You can request to increase this
   *             limit by contacting <a href="http://aws.amazon.com/contact-us/">Support</a>.</p>
   *          <p>Specific queries are mapped to specific documents for featuring in the
   *             results. If a query contains an exact match, then one or more specific
   *             documents are featured in the results. The exact match applies to the full
   *             query. For example, if you only specify 'Kendra', queries such as 'How does
   *             kendra semantically rank results?' will not render the featured results.
   *             Featured results are designed for specific queries, rather than queries
   *             that are too broad in scope.</p>
   */
  FeaturedDocuments?: FeaturedDocument[];

  /**
   * @public
   * <p>The Unix timestamp when the set of featured results was last updated.</p>
   */
  LastUpdatedTimestamp?: number;

  /**
   * @public
   * <p>The Unix timestamp when the set of featured results was created.</p>
   */
  CreationTimestamp?: number;
}

/**
 * @public
 */
export interface CreateFeaturedResultsSetResponse {
  /**
   * @public
   * <p>Information on the set of featured results. This includes the identifier of
   *             the featured results set, whether the featured results set is active or inactive,
   *             when the featured results set was created, and more.</p>
   */
  FeaturedResultsSet?: FeaturedResultsSet;
}

/**
 * @public
 * <p>Information about a conflicting query used across different sets of
 *             featured results. When you create a featured results set, you must check
 *             that the queries are unique per featured results set for each index.</p>
 */
export interface ConflictingItem {
  /**
   * @public
   * <p>The text of the conflicting query.</p>
   */
  QueryText?: string;

  /**
   * @public
   * <p>The name for the set of featured results that the conflicting query
   *             belongs to.</p>
   */
  SetName?: string;

  /**
   * @public
   * <p>The identifier of the set of featured results that the conflicting
   *             query belongs to.</p>
   */
  SetId?: string;
}

/**
 * @public
 * <p>An error message with a list of conflicting queries used across different sets
 *             of featured results. This occurred with the request for a new featured results set.
 *             Check that the queries you specified for featured results are unique per featured
 *             results set for each index.</p>
 */
export class FeaturedResultsConflictException extends __BaseException {
  readonly name: "FeaturedResultsConflictException" = "FeaturedResultsConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>An explanation for the conflicting queries.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>A list of the conflicting queries, including the query text, the name for
   *             the featured results set, and the identifier of the featured results set.</p>
   */
  ConflictingItems?: ConflictingItem[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FeaturedResultsConflictException, __BaseException>) {
    super({
      name: "FeaturedResultsConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FeaturedResultsConflictException.prototype);
    this.Message = opts.Message;
    this.ConflictingItems = opts.ConflictingItems;
  }
}

/**
 * @public
 * @enum
 */
export const IndexEdition = {
  DEVELOPER_EDITION: "DEVELOPER_EDITION",
  ENTERPRISE_EDITION: "ENTERPRISE_EDITION",
} as const;

/**
 * @public
 */
export type IndexEdition = (typeof IndexEdition)[keyof typeof IndexEdition];

/**
 * @public
 * <p>Provides the identifier of the KMS key used to encrypt data
 *             indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric
 *             keys.</p>
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * @public
   * <p>The identifier of the KMS key. Amazon Kendra doesn't support
   *             asymmetric keys.</p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 * @enum
 */
export const UserContextPolicy = {
  ATTRIBUTE_FILTER: "ATTRIBUTE_FILTER",
  USER_TOKEN: "USER_TOKEN",
} as const;

/**
 * @public
 */
export type UserContextPolicy = (typeof UserContextPolicy)[keyof typeof UserContextPolicy];

/**
 * @public
 * @enum
 */
export const UserGroupResolutionMode = {
  AWS_SSO: "AWS_SSO",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type UserGroupResolutionMode = (typeof UserGroupResolutionMode)[keyof typeof UserGroupResolutionMode];

/**
 * @public
 * <p>Provides the configuration information to get users and groups from
 *          an IAM Identity Center (successor to Single Sign-On) identity source. This is useful for user context filtering, where
 *          search results are filtered based on the user or their group access to documents. You can
 *          also use the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_PutPrincipalMapping.html">PutPrincipalMapping</a> API to
 *          map users to their groups so that you only need to provide the user ID when you issue the
 *          query.</p>
 *          <p>To set up an IAM Identity Center identity source in the console to use with Amazon Kendra, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/getting-started-aws-sso.html">Getting started with an IAM Identity Center identity source</a>. You must also grant the required permissions to
 *          use IAM Identity Center with Amazon Kendra. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html#iam-roles-aws-sso">IAM roles for IAM Identity Center</a>.</p>
 *          <p>Amazon Kendra currently does not support using
 *             <code>UserGroupResolutionConfiguration</code> with an Amazon Web Services organization
 *          member account for your IAM Identity Center identify source. You must create your index in
 *          the management account for the organization in order to use
 *             <code>UserGroupResolutionConfiguration</code>.</p>
 */
export interface UserGroupResolutionConfiguration {
  /**
   * @public
   * <p>The identity store provider (mode) you want to use to get users and groups.
   *          IAM Identity Center (successor to Single Sign-On) is currently the only available mode. Your users and groups
   *          must exist in an IAM Identity Center identity source in order to use this mode.</p>
   */
  UserGroupResolutionMode: UserGroupResolutionMode | string | undefined;
}

/**
 * @public
 * <p>Provides the configuration information for the JSON token type.</p>
 */
export interface JsonTokenTypeConfiguration {
  /**
   * @public
   * <p>The user name attribute field.</p>
   */
  UserNameAttributeField: string | undefined;

  /**
   * @public
   * <p>The group attribute field.</p>
   */
  GroupAttributeField: string | undefined;
}

/**
 * @public
 * @enum
 */
export const KeyLocation = {
  SECRET_MANAGER: "SECRET_MANAGER",
  URL: "URL",
} as const;

/**
 * @public
 */
export type KeyLocation = (typeof KeyLocation)[keyof typeof KeyLocation];

/**
 * @public
 * <p>Provides the configuration information for the JWT token type.</p>
 */
export interface JwtTokenTypeConfiguration {
  /**
   * @public
   * <p>The location of the key.</p>
   */
  KeyLocation: KeyLocation | string | undefined;

  /**
   * @public
   * <p>The signing key URL.</p>
   */
  URL?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the secret.</p>
   */
  SecretManagerArn?: string;

  /**
   * @public
   * <p>The user name attribute field.</p>
   */
  UserNameAttributeField?: string;

  /**
   * @public
   * <p>The group attribute field.</p>
   */
  GroupAttributeField?: string;

  /**
   * @public
   * <p>The issuer of the token.</p>
   */
  Issuer?: string;

  /**
   * @public
   * <p>The regular expression that identifies the claim.</p>
   */
  ClaimRegex?: string;
}

/**
 * @public
 * <p>Provides the configuration information for a token.</p>
 */
export interface UserTokenConfiguration {
  /**
   * @public
   * <p>Information about the JWT token type configuration.</p>
   */
  JwtTokenTypeConfiguration?: JwtTokenTypeConfiguration;

  /**
   * @public
   * <p>Information about the JSON token type configuration.</p>
   */
  JsonTokenTypeConfiguration?: JsonTokenTypeConfiguration;
}

/**
 * @public
 */
export interface CreateIndexRequest {
  /**
   * @public
   * <p>A name for the index.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The Amazon Kendra edition to use for the index. Choose <code>DEVELOPER_EDITION</code>
   *       for indexes intended for development, testing, or proof of concept. Use
   *         <code>ENTERPRISE_EDITION</code> for production. Once you set the edition for
   *       an index, it can't be changed.</p>
   *          <p>The <code>Edition</code> parameter is optional. If you don't supply a value, the default
   *       is <code>ENTERPRISE_EDITION</code>.</p>
   *          <p>For more information on quota limits for Enterprise and Developer editions, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas</a>.</p>
   */
  Edition?: IndexEdition | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to access your
   *       Amazon CloudWatch logs and metrics. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM access roles for
   *       Amazon Kendra</a>.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the KMS customer managed key (CMK) that's used to encrypt
   *       data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs.</p>
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * @public
   * <p>A description for the index.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A token that you provide to identify the request to create an index. Multiple calls to the
   *         <code>CreateIndex</code> API with the same client token will create only one index.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>A list of key-value pairs that identify or categorize the index. You can also use tags to
   *       help control access to the index. Tag keys and values can consist of Unicode letters, digits,
   *       white space, and any of the following symbols: _ . : / = + - @.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The user token configuration.</p>
   */
  UserTokenConfigurations?: UserTokenConfiguration[];

  /**
   * @public
   * <p>The user context policy.</p>
   *          <dl>
   *             <dt>ATTRIBUTE_FILTER</dt>
   *             <dd>
   *                <p>All indexed content is searchable and displayable for all users. If you want to
   *                   filter search results on user context, you can use the attribute filters of
   *                      <code>_user_id</code> and <code>_group_ids</code> or you can provide user and
   *                   group information in <code>UserContext</code>. </p>
   *             </dd>
   *             <dt>USER_TOKEN</dt>
   *             <dd>
   *                <p>Enables token-based user access control to filter search results on user
   *                   context. All documents with no access control and all documents accessible to the
   *                   user will be searchable and displayable. </p>
   *             </dd>
   *          </dl>
   */
  UserContextPolicy?: UserContextPolicy | string;

  /**
   * @public
   * <p>Gets users and groups from IAM Identity Center (successor to Single Sign-On)
   *          identity source. To configure this, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UserGroupResolutionConfiguration.html">UserGroupResolutionConfiguration</a>.</p>
   */
  UserGroupResolutionConfiguration?: UserGroupResolutionConfiguration;
}

/**
 * @public
 */
export interface CreateIndexResponse {
  /**
   * @public
   * <p>The identifier of the index. Use this identifier when you query an index, set up a data
   *       source, or index a document.</p>
   */
  Id?: string;
}

/**
 * @public
 */
export interface CreateQuerySuggestionsBlockListRequest {
  /**
   * @public
   * <p>The identifier of the index you want to create a query suggestions block list for.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>A name for the block list.</p>
   *          <p>For example, the name 'offensive-words', which includes all
   *             offensive words that could appear in user queries and need to be
   *             blocked from suggestions.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description for the block list.</p>
   *          <p>For example, the description "List of all offensive words that can
   *             appear in user queries and need to be blocked from suggestions."</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The S3 path to your block list text file in your S3 bucket.</p>
   *          <p>Each block word or phrase should be on a separate line in a text file.</p>
   *          <p>For information on the current quota limits for block lists, see
   *                 <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas
   *                     for Amazon Kendra</a>.</p>
   */
  SourceS3Path: S3Path | undefined;

  /**
   * @public
   * <p>A token that you provide to identify the request to create a
   *             query suggestions block list.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to
   *             access your S3 bucket that contains the block list text file. For more information,
   *             see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM access roles for
   *                 Amazon Kendra</a>.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>A list of key-value pairs that identify or categorize the block list.
   *             Tag keys and values can consist of Unicode letters, digits, white space,
   *             and any of the following symbols: _ . : / = + - @.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateQuerySuggestionsBlockListResponse {
  /**
   * @public
   * <p>The identifier of the block list.</p>
   */
  Id?: string;
}

/**
 * @public
 */
export interface CreateThesaurusRequest {
  /**
   * @public
   * <p>The identifier of the index for the thesaurus.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>A name for the thesaurus.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description for the thesaurus.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission
   *          to access your S3 bucket that contains the thesaurus file. For more information,
   *          see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM
   *             access roles for Amazon Kendra</a>.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>A list of key-value pairs that identify or categorize the thesaurus. You can
   *          also use tags to help control access to the thesaurus. Tag keys and values can
   *          consist of Unicode letters, digits, white space, and any of the following
   *          symbols: _ . : / = + - @.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The path to the thesaurus file in S3.</p>
   */
  SourceS3Path: S3Path | undefined;

  /**
   * @public
   * <p>A token that you provide to identify the request to create a
   *          thesaurus. Multiple calls to the <code>CreateThesaurus</code> API
   *          with the same client token will create only one thesaurus.
   *       </p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateThesaurusResponse {
  /**
   * @public
   * <p>The identifier of the thesaurus.
   *       </p>
   */
  Id?: string;
}

/**
 * @public
 */
export interface DeleteAccessControlConfigurationRequest {
  /**
   * @public
   * <p>The identifier of the index for an access control configuration.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the access control configuration you want to delete.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessControlConfigurationResponse {}

/**
 * @public
 */
export interface DeleteDataSourceRequest {
  /**
   * @public
   * <p>The identifier of the data source connector you want to delete.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index used with the data source connector.</p>
   */
  IndexId: string | undefined;
}

/**
 * @public
 */
export interface DeleteExperienceRequest {
  /**
   * @public
   * <p>The identifier of your Amazon Kendra experience you want to delete.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index for your Amazon Kendra experience.</p>
   */
  IndexId: string | undefined;
}

/**
 * @public
 */
export interface DeleteExperienceResponse {}

/**
 * @public
 */
export interface DeleteFaqRequest {
  /**
   * @public
   * <p>The identifier of the FAQ you want to remove.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index for the FAQ.</p>
   */
  IndexId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIndexRequest {
  /**
   * @public
   * <p>The identifier of the index you want to delete.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeletePrincipalMappingRequest {
  /**
   * @public
   * <p>The identifier of the index you want to delete a group from.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source you want to delete a group from.</p>
   *          <p>A group can be tied to multiple data sources. You can delete a group from accessing
   *             documents in a certain data source. For example, the groups "Research", "Engineering",
   *             and "Sales and Marketing" are all tied to the company's documents stored in the data
   *             sources Confluence and Salesforce. You want to delete "Research" and "Engineering"
   *             groups from Salesforce, so that these groups cannot access customer-related documents
   *             stored in Salesforce. Only "Sales and Marketing" should access documents in the
   *             Salesforce data source.</p>
   */
  DataSourceId?: string;

  /**
   * @public
   * <p>The identifier of the group you want to delete.</p>
   */
  GroupId: string | undefined;

  /**
   * @public
   * <p>The timestamp identifier you specify to ensure Amazon Kendra does not override
   *             the latest <code>DELETE</code> action with previous actions. The highest number ID,
   *             which is the ordering ID, is the latest action you want to process and apply on top of
   *             other actions with lower number IDs. This prevents previous actions with lower number
   *             IDs from possibly overriding the latest action.</p>
   *          <p>The ordering ID can be the Unix time of the last update you made to a group members
   *             list. You would then provide this list when calling <code>PutPrincipalMapping</code>.
   *             This ensures your <code>DELETE</code> action for that updated group with the latest
   *             members list doesn't get overwritten by earlier <code>DELETE</code> actions for the same
   *             group which are yet to be processed.</p>
   *          <p>The default ordering ID is the current Unix time in milliseconds that the action was
   *             received by Amazon Kendra. </p>
   */
  OrderingId?: number;
}

/**
 * @public
 */
export interface DeleteQuerySuggestionsBlockListRequest {
  /**
   * @public
   * <p>The identifier of the index for the block list.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the block list you want to delete.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteThesaurusRequest {
  /**
   * @public
   * <p>The identifier of the thesaurus you want to delete.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index for the thesaurus.</p>
   */
  IndexId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccessControlConfigurationRequest {
  /**
   * @public
   * <p>The identifier of the index for an access control configuration.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the access control configuration you want to get information
   *             on.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccessControlConfigurationResponse {
  /**
   * @public
   * <p>The name for the access control configuration.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description for the access control configuration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The error message containing details if there are issues processing the access control
   *             configuration.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>Information on principals (users and/or groups) and which documents they should have
   *             access to. This is useful for user context filtering, where search results are filtered
   *             based on the user or their group access to documents.</p>
   */
  AccessControlList?: Principal[];

  /**
   * @public
   * <p>The list of <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Principal.html">principal</a> lists that define the hierarchy for which documents users should
   *             have access to.</p>
   */
  HierarchicalAccessControlList?: HierarchicalPrincipal[];
}

/**
 * @public
 */
export interface DescribeDataSourceRequest {
  /**
   * @public
   * <p>The identifier of the data source connector.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index used with the data source connector.</p>
   */
  IndexId: string | undefined;
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
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type DataSourceStatus = (typeof DataSourceStatus)[keyof typeof DataSourceStatus];

/**
 * @public
 */
export interface DescribeDataSourceResponse {
  /**
   * @public
   * <p>The identifier of the data source connector.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The identifier of the index used with the data source connector.</p>
   */
  IndexId?: string;

  /**
   * @public
   * <p>The name for the data source connector.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of the data source. For example, <code>SHAREPOINT</code>.</p>
   */
  Type?: DataSourceType | string;

  /**
   * @public
   * <p>Configuration details for the data source connector. This shows how the data source is
   *       configured. The configuration options for a data source depend on the data source
   *       provider.</p>
   */
  Configuration?: DataSourceConfiguration;

  /**
   * @public
   * <p>Configuration information for an Amazon Virtual Private Cloud to connect to your data source.
   *       For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * @public
   * <p>The Unix timestamp when the data source connector was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the data source connector was last updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>The description for the data source connector.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The current status of the data source connector. When the status is <code>ACTIVE</code>
   *       the data source is ready to use. When the status is <code>FAILED</code>, the
   *         <code>ErrorMessage</code> field contains the reason that the data source failed.</p>
   */
  Status?: DataSourceStatus | string;

  /**
   * @public
   * <p>The schedule for Amazon Kendra to update the index.</p>
   */
  Schedule?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role with permission to access the data source and
   *       required resources.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>When the <code>Status</code> field value is <code>FAILED</code>, the
   *         <code>ErrorMessage</code> field contains a description of the error that caused the data
   *       source to fail.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The code for a language. This shows a supported language for all
   *             documents in the data source. English is supported by
   *             default. For more information on supported languages, including their codes,
   *             see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding
   *                 documents in languages other than English</a>.</p>
   */
  LanguageCode?: string;

  /**
   * @public
   * <p>Configuration information for altering document metadata and content during the
   *             document ingestion process when you describe a data source.</p>
   *          <p>For more information on how to create, modify and delete document metadata, or make
   *             other content alterations when you ingest documents into Amazon Kendra, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>
   */
  CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
}

/**
 * @public
 */
export interface DescribeExperienceRequest {
  /**
   * @public
   * <p>The identifier of your Amazon Kendra experience you want to get information on.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index for your Amazon Kendra experience.</p>
   */
  IndexId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointType = {
  HOME: "HOME",
} as const;

/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * @public
 * <p>Provides the configuration information for the endpoint for your Amazon Kendra
 *             experience.</p>
 */
export interface ExperienceEndpoint {
  /**
   * @public
   * <p>The type of endpoint for your Amazon Kendra experience. The type currently available
   *             is <code>HOME</code>, which is a unique and fully hosted URL to the home page
   *             of your Amazon Kendra experience.</p>
   */
  EndpointType?: EndpointType | string;

  /**
   * @public
   * <p>The endpoint of your Amazon Kendra experience.</p>
   */
  Endpoint?: string;
}

/**
 * @public
 * @enum
 */
export const ExperienceStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type ExperienceStatus = (typeof ExperienceStatus)[keyof typeof ExperienceStatus];

/**
 * @public
 */
export interface DescribeExperienceResponse {
  /**
   * @public
   * <p>Shows the identifier of your Amazon Kendra experience.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>Shows the identifier of the index for your Amazon Kendra experience.</p>
   */
  IndexId?: string;

  /**
   * @public
   * <p>Shows the name of your Amazon Kendra experience.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Shows the endpoint URLs for your Amazon Kendra experiences. The URLs are unique and fully
   *             hosted by Amazon Web Services.</p>
   */
  Endpoints?: ExperienceEndpoint[];

  /**
   * @public
   * <p>Shows the configuration information for your Amazon Kendra experience. This includes
   *                 <code>ContentSourceConfiguration</code>, which specifies the data source IDs
   *             and/or FAQ IDs, and <code>UserIdentityConfiguration</code>, which specifies the
   *             user or group information to grant access to your Amazon Kendra experience.</p>
   */
  Configuration?: ExperienceConfiguration;

  /**
   * @public
   * <p>The Unix timestamp when your Amazon Kendra experience was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when your Amazon Kendra experience was last updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>Shows the description for your Amazon Kendra experience.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The current processing status of your Amazon Kendra experience. When the status
   *             is <code>ACTIVE</code>, your Amazon Kendra experience is ready to use. When the
   *             status is <code>FAILED</code>, the <code>ErrorMessage</code> field contains
   *             the reason that this failed.</p>
   */
  Status?: ExperienceStatus | string;

  /**
   * @public
   * <p>Shows the Amazon Resource Name (ARN) of a role with permission to access
   *             <code>Query</code> API, <code>QuerySuggestions</code> API,
   *             <code>SubmitFeedback</code> API, and IAM Identity Center that stores
   *             your user and group information.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The reason your Amazon Kendra experience could not properly process.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface DescribeFaqRequest {
  /**
   * @public
   * <p>The identifier of the FAQ you want to get information on.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index for the FAQ.</p>
   */
  IndexId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FaqStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type FaqStatus = (typeof FaqStatus)[keyof typeof FaqStatus];

/**
 * @public
 */
export interface DescribeFaqResponse {
  /**
   * @public
   * <p>The identifier of the FAQ.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The identifier of the index for the FAQ.</p>
   */
  IndexId?: string;

  /**
   * @public
   * <p>The name that you gave the FAQ when it was created.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the FAQ that you provided when it was created.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Unix timestamp when the FAQ was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the FAQ was last updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>Information required to find a specific file in an Amazon S3 bucket.</p>
   */
  S3Path?: S3Path;

  /**
   * @public
   * <p>The status of the FAQ. It is ready to use when the status is
   *             <code>ACTIVE</code>.</p>
   */
  Status?: FaqStatus | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role that provides access to the S3 bucket
   *             containing the input files for the FAQ.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>If the <code>Status</code> field is <code>FAILED</code>, the <code>ErrorMessage</code>
   *             field contains the reason why the FAQ failed.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The file format used by the input files for the FAQ.</p>
   */
  FileFormat?: FaqFileFormat | string;

  /**
   * @public
   * <p>The code for a language. This shows a supported language
   *             for the FAQ document. English is supported by default.
   *             For more information on supported languages, including their codes,
   *             see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding
   *                 documents in languages other than English</a>.</p>
   */
  LanguageCode?: string;
}

/**
 * @public
 */
export interface DescribeFeaturedResultsSetRequest {
  /**
   * @public
   * <p>The identifier of the index used for featuring results.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the set of featured results that you want to get
   *             information on.</p>
   */
  FeaturedResultsSetId: string | undefined;
}

/**
 * @public
 * <p>A document ID doesn't exist but you have specified as a featured document.
 *             Amazon Kendra cannot feature the document if it doesn't exist in the index.
 *             You can check the status of a document and its ID or check for documents with
 *             status errors using the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchGetDocumentStatus.html">BatchGetDocumentStatus</a>
 *             API.</p>
 */
export interface FeaturedDocumentMissing {
  /**
   * @public
   * <p>The identifier of the document that doesn't exist but you have specified
   *             as a featured document.</p>
   */
  Id?: string;
}

/**
 * @public
 * <p>A featured document with its metadata information. This document is displayed
 *             at the top of the search results page, placed above all other results for certain
 *             queries. If there's an exact match of a query, then the document is featured in
 *             the search results.</p>
 */
export interface FeaturedDocumentWithMetadata {
  /**
   * @public
   * <p>The identifier of the featured document with its metadata. You can use
   *             the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html">Query</a> API to search for
   *             specific documents with their document IDs included in the result items,
   *             or you can use the console.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The main title of the featured document.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>The source URI location of the featured document.</p>
   */
  URI?: string;
}

/**
 * @public
 */
export interface DescribeFeaturedResultsSetResponse {
  /**
   * @public
   * <p>The identifier of the set of featured results.</p>
   */
  FeaturedResultsSetId?: string;

  /**
   * @public
   * <p>The name for the set of featured results.</p>
   */
  FeaturedResultsSetName?: string;

  /**
   * @public
   * <p>The description for the set of featured results.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The current status of the set of featured results. When the value is
   *             <code>ACTIVE</code>, featured results are ready for use. You can still
   *             configure your settings before setting the status to <code>ACTIVE</code>.
   *             You can set the status to <code>ACTIVE</code> or <code>INACTIVE</code>
   *             using the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateFeaturedResultsSet.html">UpdateFeaturedResultsSet</a> API. The queries you specify for
   *             featured results must be unique per featured results set for each index,
   *             whether the status is <code>ACTIVE</code> or <code>INACTIVE</code>.</p>
   */
  Status?: FeaturedResultsSetStatus | string;

  /**
   * @public
   * <p>The list of queries for featuring results. For more information on the
   *             list of queries, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_FeaturedResultsSet.html">FeaturedResultsSet</a>.</p>
   */
  QueryTexts?: string[];

  /**
   * @public
   * <p>The list of document IDs for the documents you want to feature with their
   *             metadata information. For more information on the list of featured documents,
   *             see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_FeaturedResultsSet.html">FeaturedResultsSet</a>.</p>
   */
  FeaturedDocumentsWithMetadata?: FeaturedDocumentWithMetadata[];

  /**
   * @public
   * <p>The list of document IDs that don't exist but you have specified as featured
   *             documents. Amazon Kendra cannot feature these documents if they don't exist
   *             in the index. You can check the status of a document and its ID or check for
   *             documents with status errors using the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchGetDocumentStatus.html">BatchGetDocumentStatus</a> API.</p>
   */
  FeaturedDocumentsMissing?: FeaturedDocumentMissing[];

  /**
   * @public
   * <p>The timestamp when the set of featured results was last updated.</p>
   */
  LastUpdatedTimestamp?: number;

  /**
   * @public
   * <p>The Unix timestamp when the set of the featured results was created.</p>
   */
  CreationTimestamp?: number;
}

/**
 * @public
 */
export interface DescribeIndexRequest {
  /**
   * @public
   * <p>The identifier of the index you want to get information on.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>Specifies additional capacity units configured for your Enterprise Edition index. You can
 *       add and remove capacity units to fit your usage requirements.</p>
 */
export interface CapacityUnitsConfiguration {
  /**
   * @public
   * <p>The amount of extra storage capacity for an index. A single capacity unit provides 30 GB
   *       of storage space or 100,000 documents, whichever is reached first. You can add up to 100 extra
   *       capacity units.</p>
   */
  StorageCapacityUnits: number | undefined;

  /**
   * @public
   * <p>The amount of extra query capacity for an index and <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_GetQuerySuggestions.html">GetQuerySuggestions</a>
   *       capacity.</p>
   *          <p>A single extra capacity unit for an index provides 0.1 queries per second or approximately
   *       8,000 queries per day. You can add up to 100 extra capacity units.</p>
   *          <p>
   *             <code>GetQuerySuggestions</code> capacity is five times the provisioned query capacity for
   *       an index, or the base capacity of 2.5 calls per second, whichever is higher. For example, the
   *       base capacity for an index is 0.1 queries per second, and <code>GetQuerySuggestions</code>
   *       capacity has a base of 2.5 calls per second. If you add another 0.1 queries per second to
   *       total 0.2 queries per second for an index, the <code>GetQuerySuggestions</code> capacity is
   *       2.5 calls per second (higher than five times 0.2 queries per second).</p>
   */
  QueryCapacityUnits: number | undefined;
}

/**
 * @public
 * @enum
 */
export const Order = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * @public
 * <p>Provides information for tuning the relevance of a field in a search. When a query
 *             includes terms that match the field, the results are given a boost in the response based
 *             on these tuning parameters.</p>
 */
export interface Relevance {
  /**
   * @public
   * <p>Indicates that this field determines how "fresh" a document is. For example, if
   *             document 1 was created on November 5, and document 2 was created on October 31, document
   *             1 is "fresher" than document 2. You can only set the <code>Freshness</code> field on one
   *                 <code>DATE</code> type field. Only applies to <code>DATE</code> fields.</p>
   */
  Freshness?: boolean;

  /**
   * @public
   * <p>The relative importance of the field in the search. Larger numbers provide more of a
   *             boost than smaller numbers.</p>
   */
  Importance?: number;

  /**
   * @public
   * <p>Specifies the time period that the boost applies to. For example, to make the boost
   *             apply to documents with the field value within the last month, you would use "2628000s".
   *             Once the field value is beyond the specified range, the effect of the boost drops off.
   *             The higher the importance, the faster the effect drops off. If you don't specify a
   *             value, the default is 3 months. The value of the field is a numeric string followed by
   *             the character "s", for example "86400s" for one day, or "604800s" for one week. </p>
   *          <p>Only applies to <code>DATE</code> fields.</p>
   */
  Duration?: string;

  /**
   * @public
   * <p>Determines how values should be interpreted.</p>
   *          <p>When the <code>RankOrder</code> field is <code>ASCENDING</code>, higher numbers are
   *             better. For example, a document with a rating score of 10 is higher ranking than a
   *             document with a rating score of 1.</p>
   *          <p>When the <code>RankOrder</code> field is <code>DESCENDING</code>, lower numbers are
   *             better. For example, in a task tracking application, a priority 1 task is more important
   *             than a priority 5 task.</p>
   *          <p>Only applies to <code>LONG</code> and <code>DOUBLE</code> fields.</p>
   */
  RankOrder?: Order | string;

  /**
   * @public
   * <p>A list of values that should be given a different boost when they appear in the result
   *             list. For example, if you are boosting a field called "department," query terms that
   *             match the department field are boosted in the result. However, you can add entries from
   *             the department field to boost documents with those values higher. </p>
   *          <p>For example, you can add entries to the map with names of departments. If you add
   *             "HR",5 and "Legal",3 those departments are given special attention when they appear in
   *             the metadata of a document. When those terms appear they are given the specified
   *             importance instead of the regular importance for the boost.</p>
   */
  ValueImportanceMap?: Record<string, number>;
}

/**
 * @public
 * <p>Provides information about how a custom index field is used during a search.</p>
 */
export interface Search {
  /**
   * @public
   * <p>Indicates that the field can be used to create search facets, a count of results for
   *             each value in the field. The default is <code>false</code> .</p>
   */
  Facetable?: boolean;

  /**
   * @public
   * <p>Determines whether the field is used in the search. If the <code>Searchable</code>
   *             field is <code>true</code>, you can use relevance tuning to manually tune how Amazon Kendra weights the field in the search. The default is <code>true</code> for
   *             string fields and <code>false</code> for number and date fields.</p>
   */
  Searchable?: boolean;

  /**
   * @public
   * <p>Determines whether the field is returned in the query response. The default is
   *                 <code>true</code>.</p>
   */
  Displayable?: boolean;

  /**
   * @public
   * <p>Determines whether the field can be used to sort the results of a query. If you
   *             specify sorting on a field that does not have <code>Sortable</code> set to
   *                 <code>true</code>, Amazon Kendra returns an exception. The default is
   *             <code>false</code>.</p>
   */
  Sortable?: boolean;
}

/**
 * @public
 * @enum
 */
export const DocumentAttributeValueType = {
  DATE_VALUE: "DATE_VALUE",
  LONG_VALUE: "LONG_VALUE",
  STRING_LIST_VALUE: "STRING_LIST_VALUE",
  STRING_VALUE: "STRING_VALUE",
} as const;

/**
 * @public
 */
export type DocumentAttributeValueType = (typeof DocumentAttributeValueType)[keyof typeof DocumentAttributeValueType];

/**
 * @public
 * <p>Specifies the properties, such as relevance tuning and searchability, of an index
 *             field.</p>
 */
export interface DocumentMetadataConfiguration {
  /**
   * @public
   * <p>The name of the index field.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The data type of the index field. </p>
   */
  Type: DocumentAttributeValueType | string | undefined;

  /**
   * @public
   * <p>Provides tuning parameters to determine how the field affects the search
   *             results.</p>
   */
  Relevance?: Relevance;

  /**
   * @public
   * <p>Provides information about how the field is used during a search.</p>
   */
  Search?: Search;
}

/**
 * @public
 * <p>Provides statistical information about the FAQ questions and answers contained in an
 *             index.</p>
 */
export interface FaqStatistics {
  /**
   * @public
   * <p>The total number of FAQ questions and answers contained in the index.</p>
   */
  IndexedQuestionAnswersCount: number | undefined;
}

/**
 * @public
 * <p>Provides information about text documents indexed in an index.</p>
 */
export interface TextDocumentStatistics {
  /**
   * @public
   * <p>The number of text documents indexed.</p>
   */
  IndexedTextDocumentsCount: number | undefined;

  /**
   * @public
   * <p>The total size, in bytes, of the indexed documents.</p>
   */
  IndexedTextBytes: number | undefined;
}

/**
 * @public
 * <p>Provides information about the number of documents and the number of questions and answers
 *       in an index.</p>
 */
export interface IndexStatistics {
  /**
   * @public
   * <p>The number of question and answer topics in the index.</p>
   */
  FaqStatistics: FaqStatistics | undefined;

  /**
   * @public
   * <p>The number of text documents indexed.</p>
   */
  TextDocumentStatistics: TextDocumentStatistics | undefined;
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
  SYSTEM_UPDATING: "SYSTEM_UPDATING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type IndexStatus = (typeof IndexStatus)[keyof typeof IndexStatus];

/**
 * @public
 */
export interface DescribeIndexResponse {
  /**
   * @public
   * <p>The name of the index.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The identifier of the index.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Kendra edition used for the index. You decide the edition when you create
   *       the index.</p>
   */
  Edition?: IndexEdition | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that gives Amazon Kendra permission to
   *       write to your Amazon Cloudwatch logs.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The identifier of the KMScustomer master key (CMK) that is used to encrypt
   *       your data. Amazon Kendra doesn't support asymmetric CMKs.</p>
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * @public
   * <p>The current status of the index. When the value is <code>ACTIVE</code>, the index is ready
   *       for use. If the <code>Status</code> field value is <code>FAILED</code>, the
   *         <code>ErrorMessage</code> field contains a message that explains why.</p>
   */
  Status?: IndexStatus | string;

  /**
   * @public
   * <p>The description for the index.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Unix timestamp when the index was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The Unix when the index was last updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>Configuration information for document metadata or fields. Document metadata are fields or
   *       attributes associated with your documents. For example, the company department name associated
   *       with each document.</p>
   */
  DocumentMetadataConfigurations?: DocumentMetadataConfiguration[];

  /**
   * @public
   * <p>Provides information about the number of FAQ questions and answers and the number of text
   *       documents indexed.</p>
   */
  IndexStatistics?: IndexStatistics;

  /**
   * @public
   * <p>When the <code>Status</code> field value is <code>FAILED</code>, the
   *         <code>ErrorMessage</code> field contains a message that explains why.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>For Enterprise Edition indexes, you can choose to use additional capacity to meet the
   *       needs of your application. This contains the capacity units used for the index. A query or
   *       document storage capacity of zero indicates that the index is using the default capacity. For
   *       more information on the default capacity for an index and adjusting this, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/adjusting-capacity.html">Adjusting
   *         capacity</a>.</p>
   */
  CapacityUnits?: CapacityUnitsConfiguration;

  /**
   * @public
   * <p>The user token configuration for the Amazon Kendra index.</p>
   */
  UserTokenConfigurations?: UserTokenConfiguration[];

  /**
   * @public
   * <p>The user context policy for the Amazon Kendra index.</p>
   */
  UserContextPolicy?: UserContextPolicy | string;

  /**
   * @public
   * <p>Whether you have enabled the configuration for fetching access levels of groups and
   *          users from an IAM Identity Center (successor to Single Sign-On) identity source.</p>
   */
  UserGroupResolutionConfiguration?: UserGroupResolutionConfiguration;
}

/**
 * @public
 */
export interface DescribePrincipalMappingRequest {
  /**
   * @public
   * <p>The identifier of the index required to check the processing of <code>PUT</code> and
   *                 <code>DELETE</code> actions for mapping users to their groups.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source to check the processing of <code>PUT</code> and
   *                 <code>DELETE</code> actions for mapping users to their groups.</p>
   */
  DataSourceId?: string;

  /**
   * @public
   * <p>The identifier of the group required to check the processing of <code>PUT</code> and
   *                 <code>DELETE</code> actions for mapping users to their groups.</p>
   */
  GroupId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PrincipalMappingStatus = {
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type PrincipalMappingStatus = (typeof PrincipalMappingStatus)[keyof typeof PrincipalMappingStatus];

/**
 * @public
 * <p>Summary information on the processing of <code>PUT</code> and <code>DELETE</code>
 *             actions for mapping users to their groups.</p>
 */
export interface GroupOrderingIdSummary {
  /**
   * @public
   * <p>The current processing status of actions for mapping users to their groups. The status
   *             can be either <code>PROCESSING</code>, <code>SUCCEEDED</code>, <code>DELETING</code>,
   *                 <code>DELETED</code>, or <code>FAILED</code>.</p>
   */
  Status?: PrincipalMappingStatus | string;

  /**
   * @public
   * <p>The Unix timestamp when an action was last updated. An action can be a <code>PUT</code>
   *             or <code>DELETE</code> action for mapping users to their groups.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when an action was received by Amazon Kendra. An action can
   *             be a <code>PUT</code> or <code>DELETE</code> action for mapping users to their groups.</p>
   */
  ReceivedAt?: Date;

  /**
   * @public
   * <p>The order in which actions should complete processing. An action can be a
   *                 <code>PUT</code> or <code>DELETE</code> action for mapping users to their
   *             groups.</p>
   */
  OrderingId?: number;

  /**
   * @public
   * <p>The reason an action could not be processed. An action can be a <code>PUT</code> or
   *                 <code>DELETE</code> action for mapping users to their groups.</p>
   */
  FailureReason?: string;
}

/**
 * @public
 */
export interface DescribePrincipalMappingResponse {
  /**
   * @public
   * <p>Shows the identifier of the index to see information on the processing of
   *                 <code>PUT</code> and <code>DELETE</code> actions for mapping users to their
   *             groups.</p>
   */
  IndexId?: string;

  /**
   * @public
   * <p>Shows the identifier of the data source to see information on the processing of
   *                 <code>PUT</code> and <code>DELETE</code> actions for mapping users to their
   *             groups.</p>
   */
  DataSourceId?: string;

  /**
   * @public
   * <p>Shows the identifier of the group to see information on the processing of
   *                 <code>PUT</code> and <code>DELETE</code> actions for mapping users to their
   *             groups.</p>
   */
  GroupId?: string;

  /**
   * @public
   * <p>Shows the following information on the processing of <code>PUT</code> and
   *                 <code>DELETE</code> actions for mapping users to their groups:</p>
   *          <ul>
   *             <li>
   *                <p>Status—the status can be either <code>PROCESSING</code>,
   *                         <code>SUCCEEDED</code>, <code>DELETING</code>, <code>DELETED</code>, or
   *                         <code>FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>Last updated—the last date-time an action was updated.</p>
   *             </li>
   *             <li>
   *                <p>Received—the last date-time an action was received or
   *                     submitted.</p>
   *             </li>
   *             <li>
   *                <p>Ordering ID—the latest action that should process and apply after
   *                     other actions.</p>
   *             </li>
   *             <li>
   *                <p>Failure reason—the reason an action could not be processed.</p>
   *             </li>
   *          </ul>
   */
  GroupOrderingIdSummaries?: GroupOrderingIdSummary[];
}

/**
 * @public
 */
export interface DescribeQuerySuggestionsBlockListRequest {
  /**
   * @public
   * <p>The identifier of the index for the block list.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the block list you want to get information on.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QuerySuggestionsBlockListStatus = {
  ACTIVE: "ACTIVE",
  ACTIVE_BUT_UPDATE_FAILED: "ACTIVE_BUT_UPDATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type QuerySuggestionsBlockListStatus =
  (typeof QuerySuggestionsBlockListStatus)[keyof typeof QuerySuggestionsBlockListStatus];

/**
 * @public
 */
export interface DescribeQuerySuggestionsBlockListResponse {
  /**
   * @public
   * <p>The identifier of the index for the block list.</p>
   */
  IndexId?: string;

  /**
   * @public
   * <p>The identifier of the block list.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the block list.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description for the block list.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The current status of the block list. When the value is
   *             <code>ACTIVE</code>, the block list is ready for use.</p>
   */
  Status?: QuerySuggestionsBlockListStatus | string;

  /**
   * @public
   * <p>The error message containing details if there are issues processing
   *             the block list.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The Unix timestamp when a block list for query suggestions was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when a block list for query suggestions was last updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>Shows the current S3 path to your block list text file in your S3 bucket.</p>
   *          <p>Each block word or phrase should be on a separate line in a text file.</p>
   *          <p>For information on the current quota limits for block lists, see
   *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas
   *                 for Amazon Kendra</a>.</p>
   */
  SourceS3Path?: S3Path;

  /**
   * @public
   * <p>The current number of valid, non-empty words or phrases in
   *             the block list text file.</p>
   */
  ItemCount?: number;

  /**
   * @public
   * <p>The current size of the block list text file in S3.</p>
   */
  FileSizeBytes?: number;

  /**
   * @public
   * <p>The IAM (Identity and Access Management) role used by
   *             Amazon Kendra to access the block list text file in S3.</p>
   *          <p>The role needs S3 read permissions to your file in S3 and needs to
   *             give STS (Security Token Service) assume role permissions to
   *             Amazon Kendra.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface DescribeQuerySuggestionsConfigRequest {
  /**
   * @public
   * <p>The identifier of the index with query suggestions that you want to get
   *             information on.</p>
   */
  IndexId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Mode = {
  ENABLED: "ENABLED",
  LEARN_ONLY: "LEARN_ONLY",
} as const;

/**
 * @public
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

/**
 * @public
 * @enum
 */
export const QuerySuggestionsStatus = {
  ACTIVE: "ACTIVE",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type QuerySuggestionsStatus = (typeof QuerySuggestionsStatus)[keyof typeof QuerySuggestionsStatus];

/**
 * @public
 */
export interface DescribeQuerySuggestionsConfigResponse {
  /**
   * @public
   * <p>Whether query suggestions are currently in
   *             <code>ENABLED</code> mode or <code>LEARN_ONLY</code> mode.</p>
   *          <p>By default, Amazon Kendra enables query suggestions.<code>LEARN_ONLY</code>
   *             turns off query suggestions for your users. You can change the mode using
   *             the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateQuerySuggestionsConfig.html">UpdateQuerySuggestionsConfig</a>
   *             API.</p>
   */
  Mode?: Mode | string;

  /**
   * @public
   * <p>Whether the status of query suggestions settings is currently
   *             <code>ACTIVE</code> or <code>UPDATING</code>.</p>
   *          <p>Active means the current settings apply and Updating means your
   *             changed settings are in the process of applying.</p>
   */
  Status?: QuerySuggestionsStatus | string;

  /**
   * @public
   * <p>How recent your queries are in your query log time
   *             window (in days).</p>
   */
  QueryLogLookBackWindowInDays?: number;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to use all queries, otherwise use only queries that include
   *             user information to generate the query suggestions.</p>
   */
  IncludeQueriesWithoutUserInformation?: boolean;

  /**
   * @public
   * <p>The minimum number of unique users who must search a query in
   *             order for the query to be eligible to suggest to your users.</p>
   */
  MinimumNumberOfQueryingUsers?: number;

  /**
   * @public
   * <p>The minimum number of times a query must be searched in order for
   *             the query to be eligible to suggest to your users.</p>
   */
  MinimumQueryCount?: number;

  /**
   * @public
   * <p>The Unix timestamp when query suggestions for an index was last updated.</p>
   *          <p>Amazon Kendra automatically updates suggestions every 24 hours, after you
   *             change a setting or after you apply a <a href="https://docs.aws.amazon.com/kendra/latest/dg/query-suggestions.html#query-suggestions-blocklist">block list</a>.</p>
   */
  LastSuggestionsBuildTime?: Date;

  /**
   * @public
   * <p>The Unix timestamp when query suggestions for an index was last cleared.</p>
   *          <p>After you clear suggestions, Amazon Kendra learns new suggestions based
   *             on new queries added to the query log from the time you cleared suggestions.
   *             Amazon Kendra only considers re-occurences of a query from the time you cleared
   *             suggestions. </p>
   */
  LastClearTime?: Date;

  /**
   * @public
   * <p>The current total count of query suggestions for an index.</p>
   *          <p>This count can change when you update your query suggestions settings,
   *             if you filter out certain queries from suggestions using a block list,
   *             and as the query log accumulates more queries for Amazon Kendra to learn from.</p>
   *          <p>If the count is much lower than you expected, it could be because Amazon Kendra
   *             needs more queries in the query history to learn from or your current query suggestions
   *             settings are too strict.</p>
   */
  TotalSuggestionsCount?: number;

  /**
   * @public
   * <p>Configuration information for the document fields/attributes that you want to base query
   *             suggestions on.</p>
   */
  AttributeSuggestionsConfig?: AttributeSuggestionsDescribeConfig;
}

/**
 * @public
 */
export interface DescribeThesaurusRequest {
  /**
   * @public
   * <p>The identifier of the thesaurus you want to get information on.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index for the thesaurus.</p>
   */
  IndexId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ThesaurusStatus = {
  ACTIVE: "ACTIVE",
  ACTIVE_BUT_UPDATE_FAILED: "ACTIVE_BUT_UPDATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ThesaurusStatus = (typeof ThesaurusStatus)[keyof typeof ThesaurusStatus];

/**
 * @public
 */
export interface DescribeThesaurusResponse {
  /**
   * @public
   * <p>The identifier of the thesaurus.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The identifier of the index for the thesaurus.</p>
   */
  IndexId?: string;

  /**
   * @public
   * <p>The thesaurus name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The thesaurus description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The current status of the thesaurus. When the value is <code>ACTIVE</code>,
   *          queries are able to use the thesaurus. If the <code>Status</code> field value
   *          is <code>FAILED</code>, the <code>ErrorMessage</code> field provides
   *          more information.
   *       </p>
   *          <p>If the status is <code>ACTIVE_BUT_UPDATE_FAILED</code>, it means
   *          that Amazon Kendra could not ingest the new thesaurus file. The old
   *       thesaurus file is still active.
   *       </p>
   */
  Status?: ThesaurusStatus | string;

  /**
   * @public
   * <p>When the <code>Status</code> field value is <code>FAILED</code>, the
   *          <code>ErrorMessage</code> field provides more information.
   *       </p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The Unix timestamp when the thesaurus was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the thesaurus was last updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>An IAM role that gives Amazon Kendra permissions
   *          to access thesaurus file specified in <code>SourceS3Path</code>.
   *       </p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>Information required to find a specific file in an Amazon S3 bucket.</p>
   */
  SourceS3Path?: S3Path;

  /**
   * @public
   * <p>The size of the thesaurus file in bytes.</p>
   */
  FileSizeBytes?: number;

  /**
   * @public
   * <p>The number of unique terms in the thesaurus file. For example, the
   *         synonyms <code>a,b,c</code> and <code>a=>d</code>, the term
   *         count would be 4.
   *       </p>
   */
  TermCount?: number;

  /**
   * @public
   * <p>The number of synonym rules in the thesaurus file.</p>
   */
  SynonymRuleCount?: number;
}

/**
 * @public
 */
export interface DisassociateEntitiesFromExperienceRequest {
  /**
   * @public
   * <p>The identifier of your Amazon Kendra experience.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index for your Amazon Kendra experience.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>Lists users or groups in your IAM Identity Center identity source.</p>
   */
  EntityList: EntityConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DisassociateEntitiesFromExperienceResponse {
  /**
   * @public
   * <p>Lists the users or groups in your IAM Identity Center identity source that
   *             failed to properly remove access to your Amazon Kendra experience.</p>
   */
  FailedEntityList?: FailedEntity[];
}

/**
 * @public
 */
export interface DisassociatePersonasFromEntitiesRequest {
  /**
   * @public
   * <p>The identifier of your Amazon Kendra experience.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index for your Amazon Kendra experience.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The identifiers of users or groups in your IAM Identity Center identity
   *             source. For example, user IDs could be user emails.</p>
   */
  EntityIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePersonasFromEntitiesResponse {
  /**
   * @public
   * <p>Lists the users or groups in your IAM Identity Center identity source that
   *             failed to properly remove access to your Amazon Kendra experience.</p>
   */
  FailedEntityList?: FailedEntity[];
}

/**
 * @public
 * @enum
 */
export const SuggestionType = {
  DOCUMENT_ATTRIBUTES: "DOCUMENT_ATTRIBUTES",
  QUERY: "QUERY",
} as const;

/**
 * @public
 */
export type SuggestionType = (typeof SuggestionType)[keyof typeof SuggestionType];

/**
 * @public
 * <p>The document ID and its fields/attributes that are used for a query suggestion, if
 *             document fields set to use for query suggestions.</p>
 */
export interface SourceDocument {
  /**
   * @public
   * <p>The identifier of the document used for a query suggestion.</p>
   */
  DocumentId?: string;

  /**
   * @public
   * <p>The document fields/attributes used for a query suggestion.</p>
   */
  SuggestionAttributes?: string[];

  /**
   * @public
   * <p>The additional fields/attributes to include in the response. You can use additional
   *             fields to provide extra information in the response. Additional fields are not used
   *             to based suggestions on.</p>
   */
  AdditionalAttributes?: DocumentAttribute[];
}

/**
 * @public
 * <p>The text highlights for a single query suggestion.</p>
 */
export interface SuggestionHighlight {
  /**
   * @public
   * <p>The zero-based location in the response string where the highlight starts.</p>
   */
  BeginOffset?: number;

  /**
   * @public
   * <p>The zero-based location in the response string where the highlight ends.</p>
   */
  EndOffset?: number;
}

/**
 * @public
 * <p>Provides text and information about where to highlight the query suggestion text.</p>
 */
export interface SuggestionTextWithHighlights {
  /**
   * @public
   * <p>The query suggestion text to display to the user.</p>
   */
  Text?: string;

  /**
   * @public
   * <p>The beginning and end of the query suggestion text that should be highlighted.</p>
   */
  Highlights?: SuggestionHighlight[];
}

/**
 * @public
 * <p>The <code>SuggestionTextWithHighlights</code> structure information.</p>
 */
export interface SuggestionValue {
  /**
   * @public
   * <p>The <code>SuggestionTextWithHighlights</code> structure that contains
   *             the query suggestion text and highlights.</p>
   */
  Text?: SuggestionTextWithHighlights;
}

/**
 * @public
 * <p>A single query suggestion.</p>
 */
export interface Suggestion {
  /**
   * @public
   * <p>The UUID (universally unique identifier) of a single
   *             query suggestion.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The value for the UUID (universally unique identifier)
   *             of a single query suggestion.</p>
   *          <p>The value is the text string of a suggestion.</p>
   */
  Value?: SuggestionValue;

  /**
   * @public
   * <p>The list of document IDs and their fields/attributes that are used for a
   *             single query suggestion, if document fields set to use for query suggestions.</p>
   */
  SourceDocuments?: SourceDocument[];
}

/**
 * @public
 */
export interface GetQuerySuggestionsResponse {
  /**
   * @public
   * <p>The identifier for a list of query suggestions for an index.</p>
   */
  QuerySuggestionsId?: string;

  /**
   * @public
   * <p>A list of query suggestions for an index.</p>
   */
  Suggestions?: Suggestion[];
}

/**
 * @public
 * @enum
 */
export const Interval = {
  ONE_MONTH_AGO: "ONE_MONTH_AGO",
  ONE_WEEK_AGO: "ONE_WEEK_AGO",
  THIS_MONTH: "THIS_MONTH",
  THIS_WEEK: "THIS_WEEK",
  TWO_MONTHS_AGO: "TWO_MONTHS_AGO",
  TWO_WEEKS_AGO: "TWO_WEEKS_AGO",
} as const;

/**
 * @public
 */
export type Interval = (typeof Interval)[keyof typeof Interval];

/**
 * @public
 * @enum
 */
export const MetricType = {
  AGG_QUERY_DOC_METRICS: "AGG_QUERY_DOC_METRICS",
  DOCS_BY_CLICK_COUNT: "DOCS_BY_CLICK_COUNT",
  QUERIES_BY_COUNT: "QUERIES_BY_COUNT",
  QUERIES_BY_ZERO_CLICK_RATE: "QUERIES_BY_ZERO_CLICK_RATE",
  QUERIES_BY_ZERO_RESULT_RATE: "QUERIES_BY_ZERO_RESULT_RATE",
  TREND_QUERY_DOC_METRICS: "TREND_QUERY_DOC_METRICS",
} as const;

/**
 * @public
 */
export type MetricType = (typeof MetricType)[keyof typeof MetricType];

/**
 * @public
 */
export interface GetSnapshotsRequest {
  /**
   * @public
   * <p>The identifier of the index to get search metrics data.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The time interval or time window to get search metrics data. The time interval uses
   *             the time zone of your index. You can view data in the following time windows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>THIS_WEEK</code>: The current week, starting on the Sunday and ending on
   *                     the day before the current date.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ONE_WEEK_AGO</code>: The previous week, starting on the Sunday and
   *                     ending on the following Saturday.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TWO_WEEKS_AGO</code>: The week before the previous week, starting on the
   *                     Sunday and ending on the following Saturday.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>THIS_MONTH</code>: The current month, starting on the first day of the
   *                     month and ending on the day before the current date.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ONE_MONTH_AGO</code>: The previous month, starting on the first day of
   *                     the month and ending on the last day of the month.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TWO_MONTHS_AGO</code>: The month before the previous month, starting on
   *                     the first day of the month and ending on last day of the month.</p>
   *             </li>
   *          </ul>
   */
  Interval: Interval | string | undefined;

  /**
   * @public
   * <p>The metric you want to retrieve. You can specify only one metric per call.</p>
   *          <p>For more information about the metrics you can view, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/search-analytics.html">Gaining insights with search
   *                 analytics</a>.</p>
   */
  MetricType: MetricType | string | undefined;

  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *                 Amazon Kendra returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of search metrics data.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of returned data for the metric.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Provides a range of time.</p>
 */
export interface TimeRange {
  /**
   * @public
   * <p>The Unix timestamp for the beginning of the time range.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The Unix timestamp for the end of the time range.</p>
   */
  EndTime?: Date;
}

/**
 * @public
 */
export interface GetSnapshotsResponse {
  /**
   * @public
   * <p>The Unix timestamp for the beginning and end of the time window for the
   *             search metrics data.</p>
   */
  SnapShotTimeFilter?: TimeRange;

  /**
   * @public
   * <p>The column headers for the search metrics data.</p>
   */
  SnapshotsDataHeader?: string[];

  /**
   * @public
   * <p>The search metrics data. The data returned depends on the metric type you
   *             requested.</p>
   */
  SnapshotsData?: string[][];

  /**
   * @public
   * <p>If the response is truncated, Amazon Kendra returns this token, which you can use
   *             in a later request to retrieve the next set of search metrics data.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The input to the request is not valid. Please provide the correct input and try
 *             again.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListAccessControlConfigurationsRequest {
  /**
   * @public
   * <p>The identifier of the index for the access control configuration.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>If the previous response was incomplete (because there's more data to retrieve),
   *                 Amazon Kendra returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of access control configurations.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of access control configurations to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAccessControlConfigurationsResponse {
  /**
   * @public
   * <p>If the response is truncated, Amazon Kendra returns this token, which you can use
   *             in the subsequent request to retrieve the next set of access control
   *             configurations.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The details of your access control configurations.</p>
   */
  AccessControlConfigurations: AccessControlConfigurationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesRequest {
  /**
   * @public
   * <p>The identifier of the index used with one or more data source connectors.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to
   *       retrieve the next set of data source connectors. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of data source connectors to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Summary information for a Amazon Kendra data source.</p>
 */
export interface DataSourceSummary {
  /**
   * @public
   * <p>The name of the data source.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The identifier for the data source.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The type of the data source.</p>
   */
  Type?: DataSourceType | string;

  /**
   * @public
   * <p>The Unix timestamp when the data source connector was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the data source connector was last updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>The status of the data source. When the status is <code>ACTIVE</code> the data source is
   *       ready to use.</p>
   */
  Status?: DataSourceStatus | string;

  /**
   * @public
   * <p>The code for a language. This shows a supported language for all documents
   *             in the data source. English is supported by default.
   *             For more information on supported languages, including their codes,
   *             see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding
   *                 documents in languages other than English</a>.</p>
   */
  LanguageCode?: string;
}

/**
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * @public
   * <p>An array of summary information for one or more data source connector.</p>
   */
  SummaryItems?: DataSourceSummary[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Kendra returns this token that you can use in
   *       the subsequent request to retrieve the next set of data source connectors.</p>
   */
  NextToken?: string;
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
 */
export interface ListDataSourceSyncJobsRequest {
  /**
   * @public
   * <p>The identifier of the data source connector.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index used with the data source connector.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to
   *       retrieve the next set of jobs.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of synchronization jobs to return in the response. If there are fewer
   *       results in the list, this response contains only the actual results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>When specified, the synchronization jobs returned in the list are limited to jobs between
   *       the specified dates.</p>
   */
  StartTimeFilter?: TimeRange;

  /**
   * @public
   * <p>Only returns synchronization jobs with the <code>Status</code> field equal to the
   *       specified status.</p>
   */
  StatusFilter?: DataSourceSyncJobStatus | string;
}

/**
 * @public
 * <p>Maps a batch delete document request to a specific data source sync job. This is optional
 *       and should only be supplied when documents are deleted by a data source connector.</p>
 */
export interface DataSourceSyncJobMetrics {
  /**
   * @public
   * <p>The number of documents added from the data source up to now in the data source
   *       sync.</p>
   */
  DocumentsAdded?: string;

  /**
   * @public
   * <p>The number of documents modified in the data source up to now in the data source sync
   *       run.</p>
   */
  DocumentsModified?: string;

  /**
   * @public
   * <p>The number of documents deleted from the data source up to now in the data source sync
   *       run.</p>
   */
  DocumentsDeleted?: string;

  /**
   * @public
   * <p>The number of documents that failed to sync from the data source up to now in the data
   *       source sync run.</p>
   */
  DocumentsFailed?: string;

  /**
   * @public
   * <p>The current number of documents crawled by the current sync job in the data source.</p>
   */
  DocumentsScanned?: string;
}

/**
 * @public
 * <p>Provides information about a data source synchronization job.</p>
 */
export interface DataSourceSyncJob {
  /**
   * @public
   * <p>A identifier for the synchronization job.</p>
   */
  ExecutionId?: string;

  /**
   * @public
   * <p>The Unix timestamp when the synchronization job started.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the synchronization job completed.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The execution status of the synchronization job. When the <code>Status</code> field is set
   *       to <code>SUCCEEDED</code>, the synchronization job is done. If the status code is set to
   *         <code>FAILED</code>, the <code>ErrorCode</code> and <code>ErrorMessage</code> fields give
   *       you the reason for the failure.</p>
   */
  Status?: DataSourceSyncJobStatus | string;

  /**
   * @public
   * <p>If the <code>Status</code> field is set to <code>ERROR</code>, the
   *         <code>ErrorMessage</code> field contains a description of the error that caused the
   *       synchronization to fail.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>If the <code>Status</code> field is set to <code>FAILED</code>, the <code>ErrorCode</code>
   *       field indicates the reason the synchronization failed.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * @public
   * <p>If the reason that the synchronization failed is due to an error with the underlying data
   *       source, this field contains a code that identifies the error.</p>
   */
  DataSourceErrorCode?: string;

  /**
   * @public
   * <p>Maps a batch delete document request to a specific data source sync job. This is optional
   *       and should only be supplied when documents are deleted by a data source connector.</p>
   */
  Metrics?: DataSourceSyncJobMetrics;
}

/**
 * @public
 */
export interface ListDataSourceSyncJobsResponse {
  /**
   * @public
   * <p>A history of synchronization jobs for the data source connector.</p>
   */
  History?: DataSourceSyncJob[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Kendra returns this token that you can use in
   *       the subsequent request to retrieve the next set of jobs.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEntityPersonasRequest {
  /**
   * @public
   * <p>The identifier of your Amazon Kendra experience.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index for your Amazon Kendra experience.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *             Amazon Kendra returns a pagination token in the response. You can use this pagination
   *             token to retrieve the next set of users or groups.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of returned users or groups.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Summary information for users or groups in your IAM Identity Center identity
 *             source. This applies to users and groups with specific permissions that define
 *             their level of access to your Amazon Kendra experience. You can create an Amazon Kendra experience
 *             such as a search application. For more information on creating a search application
 *             experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a
 *                 search experience with no code</a>.</p>
 */
export interface PersonasSummary {
  /**
   * @public
   * <p>The identifier of a user or group in your IAM Identity Center identity source.
   *             For example, a user ID could be an email.</p>
   */
  EntityId?: string;

  /**
   * @public
   * <p>The persona that defines the specific permissions of the user or group in
   *             your IAM Identity Center identity source. The available personas or access
   *             roles are <code>Owner</code> and <code>Viewer</code>. For more information on
   *             these personas, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html#access-search-experience">Providing
   *                 access to your search page</a>.</p>
   */
  Persona?: Persona | string;

  /**
   * @public
   * <p>The Unix timestamp when the summary information was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the summary information was last updated.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface ListEntityPersonasResponse {
  /**
   * @public
   * <p>An array of summary information for one or more users or groups.</p>
   */
  SummaryItems?: PersonasSummary[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Kendra returns this token, which you can use in
   *             a later request to retrieve the next set of users or groups.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListExperienceEntitiesRequest {
  /**
   * @public
   * <p>The identifier of your Amazon Kendra experience.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index for your Amazon Kendra experience.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *             Amazon Kendra returns a pagination token in the response. You can use this pagination
   *             token to retrieve the next set of users or groups.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Information about the user entity.</p>
 */
export interface EntityDisplayData {
  /**
   * @public
   * <p>The name of the user.</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>The name of the group.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The user name of the user.</p>
   */
  IdentifiedUserName?: string;

  /**
   * @public
   * <p>The first name of the user.</p>
   */
  FirstName?: string;

  /**
   * @public
   * <p>The last name of the user.</p>
   */
  LastName?: string;
}

/**
 * @public
 * <p>Summary information for users or groups in your IAM Identity Center identity
 *             source with granted access to your Amazon Kendra experience. You can create an Amazon Kendra
 *             experience such as a search application. For more information on creating a
 *             search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building
 *                 a search experience with no code</a>.</p>
 */
export interface ExperienceEntitiesSummary {
  /**
   * @public
   * <p>The identifier of a user or group in your IAM Identity Center identity source.
   *             For example, a user ID could be an email.</p>
   */
  EntityId?: string;

  /**
   * @public
   * <p>Shows the type as <code>User</code> or <code>Group</code>.</p>
   */
  EntityType?: EntityType | string;

  /**
   * @public
   * <p>Information about the user entity.</p>
   */
  DisplayData?: EntityDisplayData;
}

/**
 * @public
 */
export interface ListExperienceEntitiesResponse {
  /**
   * @public
   * <p>An array of summary information for one or more users or groups.</p>
   */
  SummaryItems?: ExperienceEntitiesSummary[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Kendra returns this token, which you can use in
   *             a later request to retrieve the next set of users or groups.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListExperiencesRequest {
  /**
   * @public
   * <p>The identifier of the index for your Amazon Kendra experience.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data
   *             to retrieve), Amazon Kendra returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of Amazon Kendra experiences.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of returned Amazon Kendra experiences.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Summary information for your Amazon Kendra experience. You can create an Amazon Kendra
 *             experience such as a search application. For more information on creating
 *             a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building
 *                 a search experience with no code</a>.</p>
 */
export interface ExperiencesSummary {
  /**
   * @public
   * <p>The name of your Amazon Kendra experience.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The identifier of your Amazon Kendra experience.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Unix timestamp when your Amazon Kendra experience was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The processing status of your Amazon Kendra experience.</p>
   */
  Status?: ExperienceStatus | string;

  /**
   * @public
   * <p>The endpoint URLs for your Amazon Kendra experiences. The URLs are unique
   *             and fully hosted by Amazon Web Services.</p>
   */
  Endpoints?: ExperienceEndpoint[];
}

/**
 * @public
 */
export interface ListExperiencesResponse {
  /**
   * @public
   * <p>An array of summary information for one or more Amazon Kendra experiences.</p>
   */
  SummaryItems?: ExperiencesSummary[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Kendra returns this token, which you can use
   *             in a later request to retrieve the next set of Amazon Kendra experiences.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFaqsRequest {
  /**
   * @public
   * <p>The index that contains the FAQ lists.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *                 Amazon Kendra returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of FAQs.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of FAQs to return in the response. If there are fewer results in
   *             the list, this response contains only the actual results.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Summary information for frequently asked questions and answers included in an
 *             index.</p>
 */
export interface FaqSummary {
  /**
   * @public
   * <p>The identifier of the FAQ.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name that you assigned the FAQ when you created or updated the FAQ.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The current status of the FAQ. When the status is <code>ACTIVE</code> the FAQ is ready
   *             for use.</p>
   */
  Status?: FaqStatus | string;

  /**
   * @public
   * <p>The Unix timestamp when the FAQ was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the FAQ was last updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>The file type used to create the FAQ. </p>
   */
  FileFormat?: FaqFileFormat | string;

  /**
   * @public
   * <p>The code for a language. This shows a supported language for the FAQ document
   *             as part of the summary information for FAQs. English is supported by default.
   *             For more information on supported languages, including their codes,
   *             see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding
   *                 documents in languages other than English</a>.</p>
   */
  LanguageCode?: string;
}

/**
 * @public
 */
export interface ListFaqsResponse {
  /**
   * @public
   * <p>If the response is truncated, Amazon Kendra returns this token that you can use
   *             in the subsequent request to retrieve the next set of FAQs.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>information about the FAQs associated with the specified index.</p>
   */
  FaqSummaryItems?: FaqSummary[];
}

/**
 * @public
 */
export interface ListFeaturedResultsSetsRequest {
  /**
   * @public
   * <p>The identifier of the index used for featuring results.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>If the response is truncated, Amazon Kendra returns a pagination token
   *             in the response. You can use this pagination token to retrieve the next set
   *             of featured results sets.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of featured results sets to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Summary information for a set of featured results. Featured results are placed
 *             above all other results for certain queries. If there's an exact match of a query,
 *             then one or more specific documents are featured in the search results.</p>
 */
export interface FeaturedResultsSetSummary {
  /**
   * @public
   * <p>The identifier of the set of featured results.</p>
   */
  FeaturedResultsSetId?: string;

  /**
   * @public
   * <p>The name for the set of featured results.</p>
   */
  FeaturedResultsSetName?: string;

  /**
   * @public
   * <p>The current status of the set of featured results. When the value is
   *             <code>ACTIVE</code>, featured results are ready for use. You can still
   *             configure your settings before setting the status to <code>ACTIVE</code>.
   *             You can set the status to <code>ACTIVE</code> or <code>INACTIVE</code>
   *             using the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateFeaturedResultsSet.html">UpdateFeaturedResultsSet</a> API. The queries you specify for
   *             featured results must be unique per featured results set for each index,
   *             whether the status is <code>ACTIVE</code> or <code>INACTIVE</code>.</p>
   */
  Status?: FeaturedResultsSetStatus | string;

  /**
   * @public
   * <p>The Unix timestamp when the set of featured results was last updated.</p>
   */
  LastUpdatedTimestamp?: number;

  /**
   * @public
   * <p>The Unix timestamp when the set of featured results was created.</p>
   */
  CreationTimestamp?: number;
}

/**
 * @public
 */
export interface ListFeaturedResultsSetsResponse {
  /**
   * @public
   * <p>An array of summary information for one or more featured results sets.</p>
   */
  FeaturedResultsSetSummaryItems?: FeaturedResultsSetSummary[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Kendra returns a pagination token
   *             in the response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGroupsOlderThanOrderingIdRequest {
  /**
   * @public
   * <p>The identifier of the index for getting a list of groups mapped to users before a
   *             given ordering or timestamp identifier.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source for getting a list of groups mapped to users before
   *             a given ordering timestamp identifier.</p>
   */
  DataSourceId?: string;

  /**
   * @public
   * <p>The timestamp identifier used for the latest <code>PUT</code> or <code>DELETE</code>
   *             action for mapping users to their groups.</p>
   */
  OrderingId: number | undefined;

  /**
   * @public
   * <p> If the previous response was incomplete (because there is more data to retrieve),
   *                 Amazon Kendra returns a pagination token in the response. You can use this
   *             pagination token to retrieve the next set of groups that are mapped to users before a
   *             given ordering or timestamp identifier. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> The maximum number of returned groups that are mapped to users before a given
   *             ordering or timestamp identifier. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Summary information for groups.</p>
 */
export interface GroupSummary {
  /**
   * @public
   * <p>The identifier of the group you want group summary information on.</p>
   */
  GroupId?: string;

  /**
   * @public
   * <p>The timestamp identifier used for the latest <code>PUT</code> or <code>DELETE</code>
   *             action.</p>
   */
  OrderingId?: number;
}

/**
 * @public
 */
export interface ListGroupsOlderThanOrderingIdResponse {
  /**
   * @public
   * <p> Summary information for list of groups that are mapped to users before a given
   *             ordering or timestamp identifier. </p>
   */
  GroupsSummaries?: GroupSummary[];

  /**
   * @public
   * <p> If the response is truncated, Amazon Kendra returns this token that you can use
   *             in the subsequent request to retrieve the next set of groups that are mapped to users
   *             before a given ordering or timestamp identifier. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListIndicesRequest {
  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to
   *       retrieve the next set of indexes. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of indices to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Summary information on the configuration of an index.</p>
 */
export interface IndexConfigurationSummary {
  /**
   * @public
   * <p>The name of the index.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A identifier for the index. Use this to identify the index when you are using APIs such as
   *         <code>Query</code>, <code>DescribeIndex</code>, <code>UpdateIndex</code>, and
   *         <code>DeleteIndex</code>.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>Indicates whether the index is a Enterprise Edition index or a Developer Edition index.
   *     </p>
   */
  Edition?: IndexEdition | string;

  /**
   * @public
   * <p>The Unix timestamp when the index was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * @public
   * <p>The Unix timestamp when the index was last updated.</p>
   */
  UpdatedAt: Date | undefined;

  /**
   * @public
   * <p>The current status of the index. When the status is <code>ACTIVE</code>, the index is
   *       ready to search.</p>
   */
  Status: IndexStatus | string | undefined;
}

/**
 * @public
 */
export interface ListIndicesResponse {
  /**
   * @public
   * <p>An array of summary information on the configuration of one or more indexes.</p>
   */
  IndexConfigurationSummaryItems?: IndexConfigurationSummary[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Kendra returns this token that you can use in
   *       the subsequent request to retrieve the next set of indexes.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListQuerySuggestionsBlockListsRequest {
  /**
   * @public
   * <p>The identifier of the index for a list of all block lists that exist for
   *             that index.</p>
   *          <p>For information on the current quota limits for block lists, see
   *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas
   *                 for Amazon Kendra</a>.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *             Amazon Kendra returns a pagination token in the response. You can use this pagination
   *             token to retrieve the next set of block lists (<code>BlockListSummaryItems</code>).</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of block lists to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Summary information on a query suggestions block list.</p>
 *          <p>This includes information on the block list ID, block list name, when the
 *             block list was created, when the block list was last updated, and the count
 *             of block words/phrases in the block list.</p>
 *          <p>For information on the current quota limits for block lists, see
 *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas
 *                 for Amazon Kendra</a>.</p>
 */
export interface QuerySuggestionsBlockListSummary {
  /**
   * @public
   * <p>The identifier of a block list.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the block list.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The status of the block list.</p>
   */
  Status?: QuerySuggestionsBlockListStatus | string;

  /**
   * @public
   * <p>The Unix timestamp when the block list was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the block list was last updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>The number of items in the block list file.</p>
   */
  ItemCount?: number;
}

/**
 * @public
 */
export interface ListQuerySuggestionsBlockListsResponse {
  /**
   * @public
   * <p>Summary items for a block list.</p>
   *          <p>This includes summary items on the block list ID, block list name, when the
   *             block list was created, when the block list was last updated, and the count
   *             of block words/phrases in the block list.</p>
   *          <p>For information on the current quota limits for block lists, see
   *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas
   *                 for Amazon Kendra</a>.</p>
   */
  BlockListSummaryItems?: QuerySuggestionsBlockListSummary[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Kendra returns this token that you can use
   *             in the subsequent request to retrieve the next set of block lists.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the index, FAQ, or data source to get a list of tags
   *       for.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of tags associated with the index, FAQ, or data source.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The resource you want to use isn't available. Please check you have provided the
 *             correct resource and try again.</p>
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListThesauriRequest {
  /**
   * @public
   * <p>The identifier of the index with one or more thesauri.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *          Amazon Kendra returns a pagination token in the response. You can use this pagination token to
   *          retrieve the next set of thesauri (<code>ThesaurusSummaryItems</code>).
   *       </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of thesauri to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>An array of summary information for a thesaurus or multiple thesauri.</p>
 */
export interface ThesaurusSummary {
  /**
   * @public
   * <p>The identifier of the thesaurus.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the thesaurus.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The status of the thesaurus.</p>
   */
  Status?: ThesaurusStatus | string;

  /**
   * @public
   * <p>The Unix timestamp when the thesaurus was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp when the thesaurus was last updated.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface ListThesauriResponse {
  /**
   * @public
   * <p>If the response is truncated, Amazon Kendra returns this
   *          token that you can use in the subsequent request to
   *          retrieve the next set of thesauri.
   *       </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of summary information for a thesaurus or multiple thesauri.</p>
   */
  ThesaurusSummaryItems?: ThesaurusSummary[];
}

/**
 * @public
 * <p>The sub groups that belong to a group.</p>
 */
export interface MemberGroup {
  /**
   * @public
   * <p>The identifier of the sub group you want to map to a group.</p>
   */
  GroupId: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source for the sub group you want to map to a group.</p>
   */
  DataSourceId?: string;
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
  UserId: string | undefined;
}

/**
 * @public
 * <p>A list of users or sub groups that belong to a group. This is useful for user context
 *             filtering, where search results are filtered based on the user or their group access to
 *             documents.</p>
 */
export interface GroupMembers {
  /**
   * @public
   * <p>A list of sub groups that belong to a group. For example, the sub groups "Research",
   *             "Engineering", and "Sales and Marketing" all belong to the group "Company".</p>
   */
  MemberGroups?: MemberGroup[];

  /**
   * @public
   * <p>A list of users that belong to a group. For example, a list of interns all belong to
   *             the "Interns" group.</p>
   */
  MemberUsers?: MemberUser[];

  /**
   * @public
   * <p>If you have more than 1000 users and/or sub groups for a single group, you need to
   *             provide the path to the S3 file that lists your users and sub groups for a group. Your
   *             sub groups can contain more than 1000 users, but the list of sub groups that belong to a
   *             group (and/or users) must be no more than 1000.</p>
   *          <p>You can download this <a href="https://docs.aws.amazon.com/kendra/latest/dg/samples/group_members.zip">example
   *                 S3 file</a> that uses the correct format for listing group members. Note,
   *                 <code>dataSourceId</code> is optional. The value of <code>type</code> for a group is
   *             always <code>GROUP</code> and for a user it is always <code>USER</code>.</p>
   */
  S3PathforGroupMembers?: S3Path;
}

/**
 * @public
 */
export interface PutPrincipalMappingRequest {
  /**
   * @public
   * <p>The identifier of the index you want to map users to their groups.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the data source you want to map users to their groups.</p>
   *          <p>This is useful if a group is tied to multiple data sources, but you only want the
   *             group to access documents of a certain data source. For example, the groups "Research",
   *             "Engineering", and "Sales and Marketing" are all tied to the company's documents stored
   *             in the data sources Confluence and Salesforce. However, "Sales and Marketing" team only
   *             needs access to customer-related documents stored in Salesforce.</p>
   */
  DataSourceId?: string;

  /**
   * @public
   * <p>The identifier of the group you want to map its users to.</p>
   */
  GroupId: string | undefined;

  /**
   * @public
   * <p>The list that contains your users or sub groups that belong the same group.</p>
   *          <p>For example, the group "Company" includes the user "CEO" and the sub groups
   *             "Research", "Engineering", and "Sales and Marketing".</p>
   *          <p>If you have more than 1000 users and/or sub groups for a single group, you need to
   *             provide the path to the S3 file that lists your users and sub groups for a group. Your
   *             sub groups can contain more than 1000 users, but the list of sub groups that belong to a
   *             group (and/or users) must be no more than 1000.</p>
   */
  GroupMembers: GroupMembers | undefined;

  /**
   * @public
   * <p>The timestamp identifier you specify to ensure Amazon Kendra does not override
   *             the latest <code>PUT</code> action with previous actions. The highest number ID, which
   *             is the ordering ID, is the latest action you want to process and apply on top of other
   *             actions with lower number IDs. This prevents previous actions with lower number IDs from
   *             possibly overriding the latest action.</p>
   *          <p>The ordering ID can be the Unix time of the last update you made to a group members
   *             list. You would then provide this list when calling <code>PutPrincipalMapping</code>.
   *             This ensures your <code>PUT</code> action for that updated group with the latest members
   *             list doesn't get overwritten by earlier <code>PUT</code> actions for the same group
   *             which are yet to be processed.</p>
   *          <p>The default ordering ID is the current Unix time in milliseconds that the action was
   *             received by Amazon Kendra.</p>
   */
  OrderingId?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a role that has access to the S3 file that contains
   *             your list of users or sub groups that belong to a group.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html#iam-roles-ds">IAM roles for Amazon Kendra</a>.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 * <p>Overrides the document relevance properties of a custom index field.</p>
 */
export interface DocumentRelevanceConfiguration {
  /**
   * @public
   * <p>The name of the index field.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Provides information for tuning the relevance of a field in a search. When a query
   *          includes terms that match the field, the results are given a boost in the response based on
   *          these tuning parameters.</p>
   */
  Relevance: Relevance | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryResultType = {
  ANSWER: "ANSWER",
  DOCUMENT: "DOCUMENT",
  QUESTION_ANSWER: "QUESTION_ANSWER",
} as const;

/**
 * @public
 */
export type QueryResultType = (typeof QueryResultType)[keyof typeof QueryResultType];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * <p>Specifies the document attribute to use to sort the response to a Amazon Kendra
 *             query. You can specify a single attribute for sorting. The attribute must have the
 *                 <code>Sortable</code> flag set to <code>true</code>, otherwise Amazon Kendra
 *             returns an exception.</p>
 *          <p>You can sort attributes of the following types.</p>
 *          <ul>
 *             <li>
 *                <p>Date value</p>
 *             </li>
 *             <li>
 *                <p>Long value</p>
 *             </li>
 *             <li>
 *                <p>String value</p>
 *             </li>
 *          </ul>
 *          <p>You can't sort attributes of the following type.</p>
 *          <ul>
 *             <li>
 *                <p>String list value</p>
 *             </li>
 *          </ul>
 */
export interface SortingConfiguration {
  /**
   * @public
   * <p>The name of the document attribute used to sort the response. You can use any field
   *             that has the <code>Sortable</code> flag set to true.</p>
   *          <p>You can also sort by any of the following built-in attributes:</p>
   *          <ul>
   *             <li>
   *                <p>_category</p>
   *             </li>
   *             <li>
   *                <p>_created_at</p>
   *             </li>
   *             <li>
   *                <p>_last_updated_at</p>
   *             </li>
   *             <li>
   *                <p>_version</p>
   *             </li>
   *             <li>
   *                <p>_view_count</p>
   *             </li>
   *          </ul>
   */
  DocumentAttributeKey: string | undefined;

  /**
   * @public
   * <p>The order that the results should be returned in. In case of ties, the relevance
   *             assigned to the result by Amazon Kendra is used as the tie-breaker.</p>
   */
  SortOrder: SortOrder | string | undefined;
}

/**
 * @public
 * <p>Provides the configuration information for suggested query spell corrections.</p>
 *          <p>Suggested spell corrections are based on words that appear in your indexed documents
 *             and how closely a corrected word matches a misspelled word.</p>
 *          <p>This feature is designed with certain defaults or limits. For information on the
 *             current limits and how to request more support for some limits, see the
 *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/query-spell-check.html">Spell
 *                 Checker documentation</a>.</p>
 */
export interface SpellCorrectionConfiguration {
  /**
   * @public
   * <p>
   *             <code>TRUE</code> to suggest spell corrections for queries.</p>
   */
  IncludeQuerySpellCheckSuggestions: boolean | undefined;
}

/**
 * @public
 * <p>A single featured result item. A featured result is displayed at the top of
 *             the search results page, placed above all other results for certain queries. If
 *             there's an exact match of a query, then certain documents are featured in the
 *             search results.</p>
 */
export interface FeaturedResultsItem {
  /**
   * @public
   * <p>The identifier of the featured result.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The type of document within the featured result response. For example,
   *             a response could include a question-answer type that's relevant to the
   *             query.</p>
   */
  Type?: QueryResultType | string;

  /**
   * @public
   * <p>One or more additional attributes associated with the featured result.</p>
   */
  AdditionalAttributes?: AdditionalResultAttribute[];

  /**
   * @public
   * <p>The identifier of the featured document.</p>
   */
  DocumentId?: string;

  /**
   * @public
   * <p>Provides text and information about where to highlight the text.</p>
   */
  DocumentTitle?: TextWithHighlights;

  /**
   * @public
   * <p>Provides text and information about where to highlight the text.</p>
   */
  DocumentExcerpt?: TextWithHighlights;

  /**
   * @public
   * <p>The source URI location of the featured document.</p>
   */
  DocumentURI?: string;

  /**
   * @public
   * <p>An array of document attributes assigned to a featured document in the
   *             search results. For example, the document author (<code>_author</code>) or
   *             the source URI (<code>_source_uri</code>) of the document.</p>
   */
  DocumentAttributes?: DocumentAttribute[];

  /**
   * @public
   * <p>A token that identifies a particular featured result from a particular
   *             query. Use this token to provide click-through feedback for the result.
   *             For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/submitting-feedback.html">Submitting feedback</a>.</p>
   */
  FeedbackToken?: string;
}

/**
 * @public
 * @enum
 */
export const QueryResultFormat = {
  TABLE: "TABLE",
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type QueryResultFormat = (typeof QueryResultFormat)[keyof typeof QueryResultFormat];

/**
 * @public
 * @enum
 */
export const ScoreConfidence = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  VERY_HIGH: "VERY_HIGH",
} as const;

/**
 * @public
 */
export type ScoreConfidence = (typeof ScoreConfidence)[keyof typeof ScoreConfidence];

/**
 * @public
 * <p>Provides a relative ranking that indicates how confident Amazon Kendra is that the
 *          response is relevant to the query.</p>
 */
export interface ScoreAttributes {
  /**
   * @public
   * <p>A relative ranking for how relevant the response is to the query.</p>
   */
  ScoreConfidence?: ScoreConfidence | string;
}

/**
 * @public
 * <p>Provides information about a table cell in a table excerpt.</p>
 */
export interface TableCell {
  /**
   * @public
   * <p>The actual value or content within a table cell. A table cell could contain a date
   *             value of a year, or a string value of text, for example.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> if the response of the table cell is the top answer. This is the
   *             cell value or content with the highest confidence score or is the most relevant to the
   *             query.</p>
   */
  TopAnswer?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> means that the table cell has a high enough confidence and is
   *             relevant to the query, so the value or content should be highlighted.</p>
   */
  Highlighted?: boolean;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> means that the table cell should be treated as a header.</p>
   */
  Header?: boolean;
}

/**
 * @public
 * <p>Information about a row in a table excerpt.</p>
 */
export interface TableRow {
  /**
   * @public
   * <p>A list of table cells in a row.</p>
   */
  Cells?: TableCell[];
}

/**
 * @public
 * <p>An excerpt from a table within a document. The table excerpt displays up to five
 *             columns and three rows, depending on how many table cells are relevant to the query and
 *             how many columns are available in the original table. The top most relevant cell is
 *             displayed in the table excerpt, along with the next most relevant cells.</p>
 */
export interface TableExcerpt {
  /**
   * @public
   * <p>A list of rows in the table excerpt.</p>
   */
  Rows?: TableRow[];

  /**
   * @public
   * <p>A count of the number of rows in the original table within the document.</p>
   */
  TotalNumberOfRows?: number;
}

/**
 * @internal
 */
export const ServerSideEncryptionConfigurationFilterSensitiveLog = (obj: ServerSideEncryptionConfiguration): any => ({
  ...obj,
  ...(obj.KmsKeyId && { KmsKeyId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateIndexRequestFilterSensitiveLog = (obj: CreateIndexRequest): any => ({
  ...obj,
  ...(obj.ServerSideEncryptionConfiguration && {
    ServerSideEncryptionConfiguration: ServerSideEncryptionConfigurationFilterSensitiveLog(
      obj.ServerSideEncryptionConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const DescribeIndexResponseFilterSensitiveLog = (obj: DescribeIndexResponse): any => ({
  ...obj,
  ...(obj.ServerSideEncryptionConfiguration && {
    ServerSideEncryptionConfiguration: ServerSideEncryptionConfigurationFilterSensitiveLog(
      obj.ServerSideEncryptionConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const EntityDisplayDataFilterSensitiveLog = (obj: EntityDisplayData): any => ({
  ...obj,
  ...(obj.UserName && { UserName: SENSITIVE_STRING }),
  ...(obj.GroupName && { GroupName: SENSITIVE_STRING }),
  ...(obj.IdentifiedUserName && { IdentifiedUserName: SENSITIVE_STRING }),
  ...(obj.FirstName && { FirstName: SENSITIVE_STRING }),
  ...(obj.LastName && { LastName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExperienceEntitiesSummaryFilterSensitiveLog = (obj: ExperienceEntitiesSummary): any => ({
  ...obj,
  ...(obj.DisplayData && { DisplayData: EntityDisplayDataFilterSensitiveLog(obj.DisplayData) }),
});

/**
 * @internal
 */
export const ListExperienceEntitiesResponseFilterSensitiveLog = (obj: ListExperienceEntitiesResponse): any => ({
  ...obj,
  ...(obj.SummaryItems && {
    SummaryItems: obj.SummaryItems.map((item) => ExperienceEntitiesSummaryFilterSensitiveLog(item)),
  }),
});
