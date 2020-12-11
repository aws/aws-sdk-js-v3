import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Access Control List files for the documents in a data source. For
 *             the format of the file, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html">Access control for S3 data
 *                 sources</a>.</p>
 */
export interface AccessControlListConfiguration {
  /**
   * <p>Path to the AWS S3 bucket that contains the ACL files.</p>
   */
  KeyPath?: string;
}

export namespace AccessControlListConfiguration {
  export const filterSensitiveLog = (obj: AccessControlListConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the column that should be used for
 *             filtering the query response by groups.</p>
 */
export interface AclConfiguration {
  /**
   * <p>A list of groups, separated by semi-colons, that filters a query
   *             response based on user context. The document is only returned to
   *             users that are in one of the groups specified in the
   *                 <code>UserContext</code> field of the <a>Query</a>
   *             operation.</p>
   */
  AllowedGroupsColumnName: string | undefined;
}

export namespace AclConfiguration {
  export const filterSensitiveLog = (obj: AclConfiguration): any => ({
    ...obj,
  });
}

export enum HighlightType {
  STANDARD = "STANDARD",
  THESAURUS_SYNONYM = "THESAURUS_SYNONYM",
}

/**
 * <p>Provides information that you can use to highlight a search result
 *             so that your users can quickly identify terms in the
 *             response.</p>
 */
export interface Highlight {
  /**
   * <p>The zero-based location in the response string where the highlight
   *             starts.</p>
   */
  BeginOffset: number | undefined;

  /**
   * <p>The zero-based location in the response string where the highlight
   *             ends.</p>
   */
  EndOffset: number | undefined;

  /**
   * <p>Indicates whether the response is the best response. True if this
   *             is the best response; otherwise, false.</p>
   */
  TopAnswer?: boolean;

  /**
   * <p>The highlight type. </p>
   */
  Type?: HighlightType | string;
}

export namespace Highlight {
  export const filterSensitiveLog = (obj: Highlight): any => ({
    ...obj,
  });
}

/**
 * <p>Provides text and information about where to highlight the
 *             text.</p>
 */
export interface TextWithHighlights {
  /**
   * <p>The text to display to the user.</p>
   */
  Text?: string;

  /**
   * <p>The beginning and end of the text that should be
   *             highlighted.</p>
   */
  Highlights?: Highlight[];
}

export namespace TextWithHighlights {
  export const filterSensitiveLog = (obj: TextWithHighlights): any => ({
    ...obj,
  });
}

/**
 * <p>An attribute returned with a document from a search.</p>
 */
export interface AdditionalResultAttributeValue {
  /**
   * <p>The text associated with the attribute and information about the
   *             highlight to apply to the text.</p>
   */
  TextWithHighlightsValue?: TextWithHighlights;
}

export namespace AdditionalResultAttributeValue {
  export const filterSensitiveLog = (obj: AdditionalResultAttributeValue): any => ({
    ...obj,
  });
}

export enum AdditionalResultAttributeValueType {
  TEXT_WITH_HIGHLIGHTS_VALUE = "TEXT_WITH_HIGHLIGHTS_VALUE",
}

/**
 * <p>An attribute returned from an index query.</p>
 */
export interface AdditionalResultAttribute {
  /**
   * <p>The key that identifies the attribute.</p>
   */
  Key: string | undefined;

  /**
   * <p>The data type of the <code>Value</code> property.</p>
   */
  ValueType: AdditionalResultAttributeValueType | string | undefined;

  /**
   * <p>An object that contains the attribute value.</p>
   */
  Value: AdditionalResultAttributeValue | undefined;
}

export namespace AdditionalResultAttribute {
  export const filterSensitiveLog = (obj: AdditionalResultAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>The value of a custom document attribute. You can only provide one
 *             value for a custom attribute.</p>
 */
export type DocumentAttributeValue =
  | DocumentAttributeValue.DateValueMember
  | DocumentAttributeValue.LongValueMember
  | DocumentAttributeValue.StringListValueMember
  | DocumentAttributeValue.StringValueMember
  | DocumentAttributeValue.$UnknownMember;

export namespace DocumentAttributeValue {
  /**
   * <p>A string, such as "department".</p>
   */
  export interface StringValueMember {
    StringValue: string;
    StringListValue?: never;
    LongValue?: never;
    DateValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A list of strings. </p>
   */
  export interface StringListValueMember {
    StringValue?: never;
    StringListValue: string[];
    LongValue?: never;
    DateValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A long integer value.</p>
   */
  export interface LongValueMember {
    StringValue?: never;
    StringListValue?: never;
    LongValue: number;
    DateValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A date expressed as an ISO 8601 string.</p>
   */
  export interface DateValueMember {
    StringValue?: never;
    StringListValue?: never;
    LongValue?: never;
    DateValue: Date;
    $unknown?: never;
  }

  export interface $UnknownMember {
    StringValue?: never;
    StringListValue?: never;
    LongValue?: never;
    DateValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    StringValue: (value: string) => T;
    StringListValue: (value: string[]) => T;
    LongValue: (value: number) => T;
    DateValue: (value: Date) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DocumentAttributeValue, visitor: Visitor<T>): T => {
    if (value.StringValue !== undefined) return visitor.StringValue(value.StringValue);
    if (value.StringListValue !== undefined) return visitor.StringListValue(value.StringListValue);
    if (value.LongValue !== undefined) return visitor.LongValue(value.LongValue);
    if (value.DateValue !== undefined) return visitor.DateValue(value.DateValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: DocumentAttributeValue): any => {
    if (obj.StringValue !== undefined) return { StringValue: obj.StringValue };
    if (obj.StringListValue !== undefined) return { StringListValue: obj.StringListValue };
    if (obj.LongValue !== undefined) return { LongValue: obj.LongValue };
    if (obj.DateValue !== undefined) return { DateValue: obj.DateValue };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>A custom attribute value assigned to a document. </p>
 */
export interface DocumentAttribute {
  /**
   * <p>The identifier for the attribute.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the attribute.</p>
   */
  Value: DocumentAttributeValue | undefined;
}

export namespace DocumentAttribute {
  export const filterSensitiveLog = (obj: DocumentAttribute): any => ({
    ...obj,
    ...(obj.Value && { Value: DocumentAttributeValue.filterSensitiveLog(obj.Value) }),
  });
}

/**
 * <p>Maps a particular data source sync job to a particular data
 *             source.</p>
 */
export interface DataSourceSyncJobMetricTarget {
  /**
   * <p>The ID of the data source that is running the sync job.</p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>The ID of the sync job that is running on the data source.</p>
   */
  DataSourceSyncJobId: string | undefined;
}

export namespace DataSourceSyncJobMetricTarget {
  export const filterSensitiveLog = (obj: DataSourceSyncJobMetricTarget): any => ({
    ...obj,
  });
}

export interface BatchDeleteDocumentRequest {
  /**
   * <p>The identifier of the index that contains the documents to delete.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>One or more identifiers for documents to delete from the index.</p>
   */
  DocumentIdList: string[] | undefined;

  /**
   * <p>Maps a particular data source sync job to a particular data
   *             source.</p>
   */
  DataSourceSyncJobMetricTarget?: DataSourceSyncJobMetricTarget;
}

export namespace BatchDeleteDocumentRequest {
  export const filterSensitiveLog = (obj: BatchDeleteDocumentRequest): any => ({
    ...obj,
  });
}

export enum ErrorCode {
  INTERNAL_ERROR = "InternalError",
  INVALID_REQUEST = "InvalidRequest",
}

/**
 * <p>Provides information about documents that could not be removed
 *             from an index by the <a>BatchDeleteDocument</a>
 *             operation.</p>
 */
export interface BatchDeleteDocumentResponseFailedDocument {
  /**
   * <p>The identifier of the document that couldn't be removed from the
   *             index.</p>
   */
  Id?: string;

  /**
   * <p>The error code for why the document couldn't be removed from the
   *             index.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>An explanation for why the document couldn't be removed from the
   *             index.</p>
   */
  ErrorMessage?: string;
}

export namespace BatchDeleteDocumentResponseFailedDocument {
  export const filterSensitiveLog = (obj: BatchDeleteDocumentResponseFailedDocument): any => ({
    ...obj,
  });
}

export interface BatchDeleteDocumentResponse {
  /**
   * <p>A list of documents that could not be removed from the index. Each entry contains an error
   *       message that indicates why the document couldn't be removed from the index.</p>
   */
  FailedDocuments?: BatchDeleteDocumentResponseFailedDocument[];
}

export namespace BatchDeleteDocumentResponse {
  export const filterSensitiveLog = (obj: BatchDeleteDocumentResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export enum ReadAccessType {
  ALLOW = "ALLOW",
  DENY = "DENY",
}

export enum PrincipalType {
  GROUP = "GROUP",
  USER = "USER",
}

/**
 * <p>Provides user and group information for document access
 *             filtering.</p>
 */
export interface Principal {
  /**
   * <p>The name of the user or group.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of principal.</p>
   */
  Type: PrincipalType | string | undefined;

  /**
   * <p>Whether to allow or deny access to the principal.</p>
   */
  Access: ReadAccessType | string | undefined;
}

export namespace Principal {
  export const filterSensitiveLog = (obj: Principal): any => ({
    ...obj,
  });
}

export enum ContentType {
  HTML = "HTML",
  MS_WORD = "MS_WORD",
  PDF = "PDF",
  PLAIN_TEXT = "PLAIN_TEXT",
  PPT = "PPT",
}

/**
 * <p>Information required to find a specific file in an Amazon S3
 *             bucket.</p>
 */
export interface S3Path {
  /**
   * <p>The name of the S3 bucket that contains the file.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The name of the file.</p>
   */
  Key: string | undefined;
}

export namespace S3Path {
  export const filterSensitiveLog = (obj: S3Path): any => ({
    ...obj,
  });
}

/**
 * <p>A document in an index.</p>
 */
export interface Document {
  /**
   * <p>A unique identifier of the document in the index.</p>
   */
  Id: string | undefined;

  /**
   * <p>The title of the document.</p>
   */
  Title?: string;

  /**
   * <p>The contents of the document. </p>
   *         <p>Documents passed to the <code>Blob</code> parameter must be base64
   *             encoded. Your code might not need to encode the document file bytes
   *             if you're using an AWS SDK to call Amazon Kendra operations. If you are
   *             calling the Amazon Kendra endpoint directly using REST, you must base64
   *             encode the contents before sending.</p>
   */
  Blob?: Uint8Array;

  /**
   * <p>Information required to find a specific file in an Amazon S3
   *             bucket.</p>
   */
  S3Path?: S3Path;

  /**
   * <p>Custom attributes to apply to the document. Use the custom
   *             attributes to provide additional information for searching, to
   *             provide facets for refining searches, and to provide additional
   *             information in the query response.</p>
   */
  Attributes?: DocumentAttribute[];

  /**
   * <p>Information to use for user context filtering.</p>
   */
  AccessControlList?: Principal[];

  /**
   * <p>The file type of the document in the <code>Blob</code>
   *             field.</p>
   */
  ContentType?: ContentType | string;
}

export namespace Document {
  export const filterSensitiveLog = (obj: Document): any => ({
    ...obj,
    ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => DocumentAttribute.filterSensitiveLog(item)) }),
  });
}

export interface BatchPutDocumentRequest {
  /**
   * <p>The identifier of the index to add the documents to. You need to create the index first
   *       using the <a>CreateIndex</a> operation.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a role that is allowed to run the
   *         <code>BatchPutDocument</code> operation. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM Roles for
   *         Amazon Kendra</a>.</p>
   */
  RoleArn?: string;

  /**
   * <p>One or more documents to add to the index. </p>
   *          <p>Documents have the following file size limits.</p>
   *          <ul>
   *             <li>
   *                <p>5 MB total size for inline documents</p>
   *             </li>
   *             <li>
   *                <p>50 MB total size for files from an S3 bucket</p>
   *             </li>
   *             <li>
   *                <p>5 MB extracted text for any file</p>
   *             </li>
   *          </ul>
   *          <p>For more information about file size and transaction per second quotas,
   *       see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas</a>.</p>
   */
  Documents: Document[] | undefined;
}

export namespace BatchPutDocumentRequest {
  export const filterSensitiveLog = (obj: BatchPutDocumentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a document that could not be
 *             indexed.</p>
 */
export interface BatchPutDocumentResponseFailedDocument {
  /**
   * <p>The unique identifier of the document.</p>
   */
  Id?: string;

  /**
   * <p>The type of error that caused the document to fail to be
   *             indexed.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>A description of the reason why the document could not be
   *             indexed.</p>
   */
  ErrorMessage?: string;
}

export namespace BatchPutDocumentResponseFailedDocument {
  export const filterSensitiveLog = (obj: BatchPutDocumentResponseFailedDocument): any => ({
    ...obj,
  });
}

export interface BatchPutDocumentResponse {
  /**
   * <p>A list of documents that were not added to the index because the document failed a
   *       validation check. Each document contains an error message that indicates why the document
   *       couldn't be added to the index.</p>
   *          <p>If there was an error adding a document to an index the error is reported in your AWS
   *       CloudWatch log. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/cloudwatch-logs.html">Monitoring Amazon Kendra with
   *         Amazon CloudWatch Logs</a>
   *          </p>
   */
  FailedDocuments?: BatchPutDocumentResponseFailedDocument[];
}

export namespace BatchPutDocumentResponse {
  export const filterSensitiveLog = (obj: BatchPutDocumentResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

export enum ConfluenceAttachmentFieldName {
  AUTHOR = "AUTHOR",
  CONTENT_TYPE = "CONTENT_TYPE",
  CREATED_DATE = "CREATED_DATE",
  DISPLAY_URL = "DISPLAY_URL",
  FILE_SIZE = "FILE_SIZE",
  ITEM_TYPE = "ITEM_TYPE",
  PARENT_ID = "PARENT_ID",
  SPACE_KEY = "SPACE_KEY",
  SPACE_NAME = "SPACE_NAME",
  URL = "URL",
  VERSION = "VERSION",
}

/**
 * <p>Defines the mapping between a field in the Confluence data source
 *             to a Amazon Kendra index field.</p>
 *         <p>You must first create the index field using the  operation. </p>
 */
export interface ConfluenceAttachmentToIndexFieldMapping {
  /**
   * <p>The name of the field in the data source. </p>
   *         <p>You must first create the index field using the  operation. </p>
   */
  DataSourceFieldName?: ConfluenceAttachmentFieldName | string;

  /**
   * <p>The format for date fields in the data source. If the field
   *             specified in <code>DataSourceFieldName</code> is a date field you
   *             must specify the date format. If the field is not a date field, an
   *             exception is thrown.</p>
   */
  DateFieldFormat?: string;

  /**
   * <p>The name of the index field to map to the Confluence data source
   *             field. The index field type must match the Confluence field
   *             type.</p>
   */
  IndexFieldName?: string;
}

export namespace ConfluenceAttachmentToIndexFieldMapping {
  export const filterSensitiveLog = (obj: ConfluenceAttachmentToIndexFieldMapping): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the attachment settings for the Confluence data source.
 *             Attachment settings are optional, if you don't specify settings
 *             attachments, Amazon Kendra won't index them.</p>
 */
export interface ConfluenceAttachmentConfiguration {
  /**
   * <p>Indicates whether Amazon Kendra indexes attachments to the pages and blogs
   *             in the Confluence data source. </p>
   */
  CrawlAttachments?: boolean;

  /**
   * <p>Defines how attachment metadata fields should be mapped to index
   *             fields. Before you can map a field, you must first create an index
   *             field with a matching type using the console or the
   *                 <code>UpdateIndex</code> operation.</p>
   *         <p>If you specify the <code>AttachentFieldMappings</code> parameter,
   *             you must specify at least one field mapping.</p>
   */
  AttachmentFieldMappings?: ConfluenceAttachmentToIndexFieldMapping[];
}

export namespace ConfluenceAttachmentConfiguration {
  export const filterSensitiveLog = (obj: ConfluenceAttachmentConfiguration): any => ({
    ...obj,
  });
}

export enum ConfluenceBlogFieldName {
  AUTHOR = "AUTHOR",
  DISPLAY_URL = "DISPLAY_URL",
  ITEM_TYPE = "ITEM_TYPE",
  LABELS = "LABELS",
  PUBLISH_DATE = "PUBLISH_DATE",
  SPACE_KEY = "SPACE_KEY",
  SPACE_NAME = "SPACE_NAME",
  URL = "URL",
  VERSION = "VERSION",
}

/**
 * <p>Defines the mapping between a blog field in the Confluence data
 *             source to a Amazon Kendra index field.</p>
 *         <p>You must first create the index field using the  operation. </p>
 */
export interface ConfluenceBlogToIndexFieldMapping {
  /**
   * <p>The name of the field in the data source. </p>
   */
  DataSourceFieldName?: ConfluenceBlogFieldName | string;

  /**
   * <p>The format for date fields in the data source. If the field
   *             specified in <code>DataSourceFieldName</code> is a date field you
   *             must specify the date format. If the field is not a date field, an
   *             exception is thrown.</p>
   */
  DateFieldFormat?: string;

  /**
   * <p>The name of the index field to map to the Confluence data source
   *             field. The index field type must match the Confluence field
   *             type.</p>
   */
  IndexFieldName?: string;
}

export namespace ConfluenceBlogToIndexFieldMapping {
  export const filterSensitiveLog = (obj: ConfluenceBlogToIndexFieldMapping): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the blog settings for the Confluence data source. Blogs
 *             are always indexed unless filtered from the index by the
 *                 <code>ExclusionPatterns</code> or <code>InclusionPatterns</code>
 *             fields in the  data
 *             type.</p>
 */
export interface ConfluenceBlogConfiguration {
  /**
   * <p>Defines how blog metadata fields should be mapped to index fields.
   *             Before you can map a field, you must first create an index field
   *             with a matching type using the console or the
   *                 <code>UpdateIndex</code> operation.</p>
   *         <p>If you specify the <code>BlogFieldMappings</code> parameter, you
   *             must specify at least one field mapping.</p>
   */
  BlogFieldMappings?: ConfluenceBlogToIndexFieldMapping[];
}

export namespace ConfluenceBlogConfiguration {
  export const filterSensitiveLog = (obj: ConfluenceBlogConfiguration): any => ({
    ...obj,
  });
}

export enum ConfluencePageFieldName {
  AUTHOR = "AUTHOR",
  CONTENT_STATUS = "CONTENT_STATUS",
  CREATED_DATE = "CREATED_DATE",
  DISPLAY_URL = "DISPLAY_URL",
  ITEM_TYPE = "ITEM_TYPE",
  LABELS = "LABELS",
  MODIFIED_DATE = "MODIFIED_DATE",
  PARENT_ID = "PARENT_ID",
  SPACE_KEY = "SPACE_KEY",
  SPACE_NAME = "SPACE_NAME",
  URL = "URL",
  VERSION = "VERSION",
}

/**
 * <p>Defines the mapping between a field in the Confluence data source
 *             to a Amazon Kendra index field.</p>
 *         <p>You must first create the index field using the  operation. </p>
 */
export interface ConfluencePageToIndexFieldMapping {
  /**
   * <p>The name of the field in the data source. </p>
   */
  DataSourceFieldName?: ConfluencePageFieldName | string;

  /**
   * <p>The format for date fields in the data source. If the field
   *             specified in <code>DataSourceFieldName</code> is a date field you
   *             must specify the date format. If the field is not a date field, an
   *             exception is thrown.</p>
   */
  DateFieldFormat?: string;

  /**
   * <p>The name of the index field to map to the Confluence data source
   *             field. The index field type must match the Confluence field
   *             type.</p>
   */
  IndexFieldName?: string;
}

export namespace ConfluencePageToIndexFieldMapping {
  export const filterSensitiveLog = (obj: ConfluencePageToIndexFieldMapping): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the page settings for the Confluence data source.</p>
 */
export interface ConfluencePageConfiguration {
  /**
   * <p>Defines how page metadata fields should be mapped to index fields.
   *             Before you can map a field, you must first create an index field
   *             with a matching type using the console or the
   *                 <code>UpdateIndex</code> operation.</p>
   *         <p>If you specify the <code>PageFieldMappings</code> parameter, you
   *             must specify at least one field mapping.</p>
   */
  PageFieldMappings?: ConfluencePageToIndexFieldMapping[];
}

export namespace ConfluencePageConfiguration {
  export const filterSensitiveLog = (obj: ConfluencePageConfiguration): any => ({
    ...obj,
  });
}

export enum ConfluenceSpaceFieldName {
  DISPLAY_URL = "DISPLAY_URL",
  ITEM_TYPE = "ITEM_TYPE",
  SPACE_KEY = "SPACE_KEY",
  URL = "URL",
}

/**
 * <p>Defines the mapping between a field in the Confluence data source
 *             to a Amazon Kendra index field.</p>
 *         <p>You must first create the index field using the  operation. </p>
 */
export interface ConfluenceSpaceToIndexFieldMapping {
  /**
   * <p>The name of the field in the data source. </p>
   */
  DataSourceFieldName?: ConfluenceSpaceFieldName | string;

  /**
   * <p>The format for date fields in the data source. If the field
   *             specified in <code>DataSourceFieldName</code> is a date field you
   *             must specify the date format. If the field is not a date field, an
   *             exception is thrown.</p>
   */
  DateFieldFormat?: string;

  /**
   * <p>The name of the index field to map to the Confluence data source
   *             field. The index field type must match the Confluence field
   *             type.</p>
   */
  IndexFieldName?: string;
}

export namespace ConfluenceSpaceToIndexFieldMapping {
  export const filterSensitiveLog = (obj: ConfluenceSpaceToIndexFieldMapping): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration for indexing Confluence spaces.</p>
 */
export interface ConfluenceSpaceConfiguration {
  /**
   * <p>Specifies whether Amazon Kendra should index personal spaces. Users can
   *             add restrictions to items in personal spaces. If personal spaces are
   *             indexed, queries without user context information may return
   *             restricted items from a personal space in their results. For more
   *             information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">Filtering on
   *                 user context</a>.</p>
   */
  CrawlPersonalSpaces?: boolean;

  /**
   * <p>Specifies whether Amazon Kendra should index archived spaces.</p>
   */
  CrawlArchivedSpaces?: boolean;

  /**
   * <p>A list of space keys for Confluence spaces. If you include a key,
   *             the blogs, documents, and attachments in the space are indexed.
   *             Spaces that aren't in the list aren't indexed. A space in the list
   *             must exist. Otherwise, Amazon Kendra logs an error when the data source is
   *             synchronized. If a space is in both the <code>IncludeSpaces</code>
   *             and the <code>ExcludeSpaces</code> list, the space is
   *             excluded.</p>
   */
  IncludeSpaces?: string[];

  /**
   * <p>A list of space keys of Confluence spaces. If you include a key,
   *             the blogs, documents, and attachments in the space are not indexed.
   *             If a space is in both the <code>ExcludeSpaces</code> and the
   *                 <code>IncludeSpaces</code> list, the space is excluded.</p>
   */
  ExcludeSpaces?: string[];

  /**
   * <p>Defines how space metadata fields should be mapped to index
   *             fields. Before you can map a field, you must first create an index
   *             field with a matching type using the console or the
   *                 <code>UpdateIndex</code> operation.</p>
   *         <p>If you specify the <code>SpaceFieldMappings</code> parameter, you
   *             must specify at least one field mapping.</p>
   */
  SpaceFieldMappings?: ConfluenceSpaceToIndexFieldMapping[];
}

export namespace ConfluenceSpaceConfiguration {
  export const filterSensitiveLog = (obj: ConfluenceSpaceConfiguration): any => ({
    ...obj,
  });
}

export enum ConfluenceVersion {
  CLOUD = "CLOUD",
  SERVER = "SERVER",
}

/**
 * <p>Provides information for connecting to an Amazon VPC.</p>
 */
export interface DataSourceVpcConfiguration {
  /**
   * <p>A list of identifiers for subnets within your Amazon VPC. The
   *             subnets should be able to connect to each other in the VPC, and they
   *             should have outgoing access to the Internet through a NAT
   *             device.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of identifiers of security groups within your Amazon VPC.
   *             The security groups should enable Amazon Kendra to connect to the data
   *             source.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

export namespace DataSourceVpcConfiguration {
  export const filterSensitiveLog = (obj: DataSourceVpcConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information for data sources that connect
 *             to Confluence.</p>
 */
export interface ConfluenceConfiguration {
  /**
   * <p>The URL of your Confluence instance. Use the full URL of the
   *             server. For example, <code>https://server.example.com:port/</code>.
   *             You can also use an IP address, for example,
   *                 <code>https://192.168.1.113/</code>.</p>
   */
  ServerUrl: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Secrets Manager secret
   *             that contains the key/value pairs required to connect to your
   *             Confluence server. The secret must contain a JSON structure with the
   *             following keys:</p>
   *         <ul>
   *             <li>
   *                 <p>username - The user name or email address of a user with
   *                     administrative privileges for the Confluence server.</p>
   *             </li>
   *             <li>
   *                 <p>password - The password associated with the user logging
   *                     in to the Confluence server.</p>
   *             </li>
   *          </ul>
   */
  SecretArn: string | undefined;

  /**
   * <p>Specifies the version of the Confluence installation that you are
   *             connecting to.</p>
   */
  Version: ConfluenceVersion | string | undefined;

  /**
   * <p>Specifies configuration information for indexing Confluence
   *             spaces.</p>
   */
  SpaceConfiguration?: ConfluenceSpaceConfiguration;

  /**
   * <p>Specifies configuration information for indexing Confluence
   *             pages.</p>
   */
  PageConfiguration?: ConfluencePageConfiguration;

  /**
   * <p> Specifies configuration information for indexing Confluence
   *             blogs.</p>
   */
  BlogConfiguration?: ConfluenceBlogConfiguration;

  /**
   * <p>Specifies configuration information for indexing attachments to
   *             Confluence blogs and pages.</p>
   */
  AttachmentConfiguration?: ConfluenceAttachmentConfiguration;

  /**
   * <p>Specifies the information for connecting to an Amazon VPC.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * <p>A list of regular expression patterns that apply to a URL on the
   *             Confluence server. An inclusion pattern can apply to a blog post, a
   *             page, a space, or an attachment. Items that match the patterns are
   *             included in the index. Items that don't match the pattern are
   *             excluded from the index. If an item matches both an inclusion
   *             pattern and an exclusion pattern, the item isn't included in the
   *             index.</p>
   */
  InclusionPatterns?: string[];

  /**
   * <p>A list of regular expression patterns that apply to a URL on the
   *             Confluence server. An exclusion pattern can apply to a blog post, a
   *             page, a space, or an attachment. Items that match the pattern are
   *             excluded from the index. Items that don't match the pattern are
   *             included in the index. If a item matches both an exclusion pattern
   *             and an inclusion pattern, the item isn't included in the
   *             index.</p>
   */
  ExclusionPatterns?: string[];
}

export namespace ConfluenceConfiguration {
  export const filterSensitiveLog = (obj: ConfluenceConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Maps a column or attribute in the data source to an index field.
 *             You must first create the fields in the index using the <a>UpdateIndex</a> operation.</p>
 */
export interface DataSourceToIndexFieldMapping {
  /**
   * <p>The name of the column or attribute in the data source.</p>
   */
  DataSourceFieldName: string | undefined;

  /**
   * <p>The type of data stored in the column or attribute.</p>
   */
  DateFieldFormat?: string;

  /**
   * <p>The name of the field in the index.</p>
   */
  IndexFieldName: string | undefined;
}

export namespace DataSourceToIndexFieldMapping {
  export const filterSensitiveLog = (obj: DataSourceToIndexFieldMapping): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about how Amazon Kendra should use the columns of
 *             a database in an index.</p>
 */
export interface ColumnConfiguration {
  /**
   * <p>The column that provides the document's unique identifier.</p>
   */
  DocumentIdColumnName: string | undefined;

  /**
   * <p>The column that contains the contents of the document.</p>
   */
  DocumentDataColumnName: string | undefined;

  /**
   * <p>The column that contains the title of the document.</p>
   */
  DocumentTitleColumnName?: string;

  /**
   * <p>An array of objects that map database column names to the
   *             corresponding fields in an index. You must first create the fields
   *             in the index using the <a>UpdateIndex</a>
   *             operation.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * <p>One to five columns that indicate when a document in the database
   *             has changed.</p>
   */
  ChangeDetectingColumns: string[] | undefined;
}

export namespace ColumnConfiguration {
  export const filterSensitiveLog = (obj: ColumnConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the information necessary to connect to a
 *             database.</p>
 */
export interface ConnectionConfiguration {
  /**
   * <p>The name of the host for the database. Can be either a string
   *             (host.subdomain.domain.tld) or an IPv4 or IPv6 address.</p>
   */
  DatabaseHost: string | undefined;

  /**
   * <p>The port that the database uses for connections.</p>
   */
  DatabasePort: number | undefined;

  /**
   * <p>The name of the database containing the document data.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table that contains the document data.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of credentials stored in AWS
   *             Secrets Manager. The credentials should be a user/password pair. For
   *             more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-database.html">Using a
   *                 Database Data Source</a>. For more information about AWS
   *             Secrets Manager, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"> What Is AWS
   *                 Secrets Manager </a> in the <i>AWS Secrets
   *                 Manager</i> user guide.</p>
   */
  SecretArn: string | undefined;
}

export namespace ConnectionConfiguration {
  export const filterSensitiveLog = (obj: ConnectionConfiguration): any => ({
    ...obj,
  });
}

export enum DatabaseEngineType {
  RDS_AURORA_MYSQL = "RDS_AURORA_MYSQL",
  RDS_AURORA_POSTGRESQL = "RDS_AURORA_POSTGRESQL",
  RDS_MYSQL = "RDS_MYSQL",
  RDS_POSTGRESQL = "RDS_POSTGRESQL",
}

export enum QueryIdentifiersEnclosingOption {
  DOUBLE_QUOTES = "DOUBLE_QUOTES",
  NONE = "NONE",
}

/**
 * <p>Provides information that configures Amazon Kendra to use a SQL
 *             database.</p>
 */
export interface SqlConfiguration {
  /**
   * <p>Determines whether Amazon Kendra encloses SQL identifiers for tables and
   *             column names in double quotes (") when making a database
   *             query.</p>
   *         <p>By default, Amazon Kendra passes SQL identifiers the way that they are
   *             entered into the data source configuration. It does not change the
   *             case of identifiers or enclose them in quotes.</p>
   *         <p>PostgreSQL internally converts uppercase characters to lower case
   *             characters in identifiers unless they are quoted. Choosing this
   *             option encloses identifiers in quotes so that PostgreSQL does not
   *             convert the character's case.</p>
   *         <p>For MySQL databases, you must enable the <code>ansi_quotes</code>
   *             option when you set this field to <code>DOUBLE_QUOTES</code>.</p>
   */
  QueryIdentifiersEnclosingOption?: QueryIdentifiersEnclosingOption | string;
}

export namespace SqlConfiguration {
  export const filterSensitiveLog = (obj: SqlConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the information necessary to connect a database to an
 *             index. </p>
 */
export interface DatabaseConfiguration {
  /**
   * <p>The type of database engine that runs the database.</p>
   */
  DatabaseEngineType: DatabaseEngineType | string | undefined;

  /**
   * <p>The information necessary to connect to a database.</p>
   */
  ConnectionConfiguration: ConnectionConfiguration | undefined;

  /**
   * <p>Provides information for connecting to an Amazon VPC.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * <p>Information about where the index should get the document
   *             information from the database.</p>
   */
  ColumnConfiguration: ColumnConfiguration | undefined;

  /**
   * <p>Information about the database column that provides information
   *             for user context filtering.</p>
   */
  AclConfiguration?: AclConfiguration;

  /**
   * <p>Provides information about how Amazon Kendra uses quote marks around SQL
   *             identifiers when querying a database data source.</p>
   */
  SqlConfiguration?: SqlConfiguration;
}

export namespace DatabaseConfiguration {
  export const filterSensitiveLog = (obj: DatabaseConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information for data sources that connect
 *             to Google Drive.</p>
 */
export interface GoogleDriveConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of a AWS Secrets Manager secret
   *             that contains the credentials required to connect to Google Drive.
   *             For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-google-drive.html">Using a Google Workspace Drive data
   *                 source</a>.</p>
   */
  SecretArn: string | undefined;

  /**
   * <p>A list of regular expression patterns that apply to path on Google
   *             Drive. Items that match the pattern are included in the index from
   *             both shared drives and users' My Drives. Items that don't match the
   *             pattern are excluded from the index. If an item matches both an
   *             inclusion pattern and an exclusion pattern, it is excluded from the
   *             index.</p>
   */
  InclusionPatterns?: string[];

  /**
   * <p>A list of regular expression patterns that apply to the path on
   *             Google Drive. Items that match the pattern are excluded from the
   *             index from both shared drives and users' My Drives. Items that don't
   *             match the pattern are included in the index. If an item matches both
   *             an exclusion pattern and an inclusion pattern, it is excluded from
   *             the index.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * <p>Defines mapping between a field in the Google Drive and a Amazon Kendra
   *             index field.</p>
   *         <p>If you are using the console, you can define index fields when
   *             creating the mapping. If you are using the API, you must first
   *             create the field using the <a>UpdateIndex</a>
   *             operation.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * <p>A list of MIME types to exclude from the index. All documents
   *             matching the specified MIME type are excluded. </p>
   *         <p>For a list of MIME types, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-google-drive.html">Using a Google Workspace Drive data
   *                 source</a>.</p>
   */
  ExcludeMimeTypes?: string[];

  /**
   * <p>A list of email addresses of the users. Documents owned by these
   *             users are excluded from the index. Documents shared with excluded
   *             users are indexed unless they are excluded in another way.</p>
   */
  ExcludeUserAccounts?: string[];

  /**
   * <p>A list of identifiers or shared drives to exclude from the index.
   *             All files and folders stored on the shared drive are
   *             excluded.</p>
   */
  ExcludeSharedDrives?: string[];
}

export namespace GoogleDriveConfiguration {
  export const filterSensitiveLog = (obj: GoogleDriveConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>User accounts whose documents should be indexed.</p>
 */
export interface OneDriveUsers {
  /**
   * <p>A list of users whose documents should be indexed. Specify the
   *             user names in email format, for example,
   *                 <code>username@tenantdomain</code>. If you need to index the
   *             documents of more than 100 users, use the
   *                 <code>OneDriveUserS3Path</code> field to specify the location of
   *             a file containing a list of users.</p>
   */
  OneDriveUserList?: string[];

  /**
   * <p>The S3 bucket location of a file containing a list of users whose
   *             documents should be indexed.</p>
   */
  OneDriveUserS3Path?: S3Path;
}

export namespace OneDriveUsers {
  export const filterSensitiveLog = (obj: OneDriveUsers): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information for data sources that connect
 *             to OneDrive.</p>
 */
export interface OneDriveConfiguration {
  /**
   * <p>The Azure Active Directory domain of the organization. </p>
   */
  TenantDomain: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Secrets Manager secret
   *             that contains the user name and password to connect to OneDrive. The
   *             user namd should be the application ID for the OneDrive application,
   *             and the password is the application key for the OneDrive
   *             application.</p>
   */
  SecretArn: string | undefined;

  /**
   * <p>A list of user accounts whose documents should be indexed.</p>
   */
  OneDriveUsers: OneDriveUsers | undefined;

  /**
   * <p>A list of regular expression patterns. Documents that match the
   *             pattern are included in the index. Documents that don't match the
   *             pattern are excluded from the index. If a document matches both an
   *             inclusion pattern and an exclusion pattern, the document is not
   *             included in the index. </p>
   *         <p>The exclusion pattern is applied to the file name.</p>
   */
  InclusionPatterns?: string[];

  /**
   * <p>List of regular expressions applied to documents. Items that match
   *             the exclusion pattern are not indexed. If you provide both an
   *             inclusion pattern and an exclusion pattern, any item that matches
   *             the exclusion pattern isn't indexed. </p>
   *         <p>The exclusion pattern is applied to the file name.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that
   *             map Microsoft OneDrive fields to custom fields in the Amazon Kendra
   *             index. You must first create the index fields before you map
   *             OneDrive fields.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * <p>A Boolean value that specifies whether local
   *       groups are disabled (<code>True</code>) or enabled (<code>False</code>).
   *       </p>
   */
  DisableLocalGroups?: boolean;
}

export namespace OneDriveConfiguration {
  export const filterSensitiveLog = (obj: OneDriveConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Document metadata files that contain information such as the
 *             document access control information, source URI, document author,
 *             and custom attributes. Each metadata file contains metadata about a
 *             single document.</p>
 */
export interface DocumentsMetadataConfiguration {
  /**
   * <p>A prefix used to filter metadata configuration files in the AWS S3
   *             bucket. The S3 bucket might contain multiple metadata files. Use
   *                 <code>S3Prefix</code> to include only the desired metadata
   *             files.</p>
   */
  S3Prefix?: string;
}

export namespace DocumentsMetadataConfiguration {
  export const filterSensitiveLog = (obj: DocumentsMetadataConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information for a data source to index
 *             documents in an Amazon S3 bucket.</p>
 */
export interface S3DataSourceConfiguration {
  /**
   * <p>The name of the bucket that contains the documents.</p>
   */
  BucketName: string | undefined;

  /**
   * <p>A list of S3 prefixes for the documents that should be included in
   *             the index.</p>
   */
  InclusionPrefixes?: string[];

  /**
   * <p>A list of glob patterns for documents that should be indexed. If a
   *             document that matches an inclusion pattern also matches an exclusion
   *             pattern, the document is not indexed.</p>
   *         <p>For more information about glob patterns, see <a href="https://en.wikipedia.org/wiki/Glob_(programming)">glob
   *                 (programming)</a> in <i>Wikipedia</i>.</p>
   */
  InclusionPatterns?: string[];

  /**
   * <p>A list of glob patterns for documents that should not be indexed.
   *             If a document that matches an inclusion prefix or inclusion pattern
   *             also matches an exclusion pattern, the document is not
   *             indexed.</p>
   *         <p>For more information about glob patterns, see <a href="https://en.wikipedia.org/wiki/Glob_(programming)">glob
   *                 (programming)</a> in <i>Wikipedia</i>.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * <p>Document metadata files that contain information such as the
   *             document access control information, source URI, document author,
   *             and custom attributes. Each metadata file contains metadata about a
   *             single document.</p>
   */
  DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration;

  /**
   * <p>Provides the path to the S3 bucket that contains the user context
   *             filtering files for the data source. For the format of the file, see
   *                 <a href="https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html">Access control for S3 data sources</a>.</p>
   */
  AccessControlListConfiguration?: AccessControlListConfiguration;
}

export namespace S3DataSourceConfiguration {
  export const filterSensitiveLog = (obj: S3DataSourceConfiguration): any => ({
    ...obj,
  });
}

export enum SalesforceChatterFeedIncludeFilterType {
  ACTIVE_USER = "ACTIVE_USER",
  STANDARD_USER = "STANDARD_USER",
}

/**
 * <p>Defines configuration for syncing a Salesforce chatter feed. The
 *             contents of the object comes from the Salesforce FeedItem
 *             table.</p>
 */
export interface SalesforceChatterFeedConfiguration {
  /**
   * <p>The name of the column in the Salesforce FeedItem table that
   *             contains the content to index. Typically this is the
   *                 <code>Body</code> column.</p>
   */
  DocumentDataFieldName: string | undefined;

  /**
   * <p>The name of the column in the Salesforce FeedItem table that
   *             contains the title of the document. This is typically the
   *                 <code>Title</code> collumn.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * <p>Maps fields from a Salesforce chatter feed into Amazon Kendra index
   *             fields.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * <p>Filters the documents in the feed based on status of the user.
   *             When you specify <code>ACTIVE_USERS</code> only documents from users
   *             who have an active account are indexed. When you specify
   *                 <code>STANDARD_USER</code> only documents for Salesforce
   *             standard users are documented. You can specify both.</p>
   */
  IncludeFilterTypes?: (SalesforceChatterFeedIncludeFilterType | string)[];
}

export namespace SalesforceChatterFeedConfiguration {
  export const filterSensitiveLog = (obj: SalesforceChatterFeedConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information for indexing Salesforce custom
 *             articles.</p>
 */
export interface SalesforceCustomKnowledgeArticleTypeConfiguration {
  /**
   * <p>The name of the configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the field in the custom knowledge article that
   *             contains the document data to index.</p>
   */
  DocumentDataFieldName: string | undefined;

  /**
   * <p>The name of the field in the custom knowledge article that
   *             contains the document title.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * <p>One or more objects that map fields in the custom knowledge
   *             article to fields in the Amazon Kendra index.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

export namespace SalesforceCustomKnowledgeArticleTypeConfiguration {
  export const filterSensitiveLog = (obj: SalesforceCustomKnowledgeArticleTypeConfiguration): any => ({
    ...obj,
  });
}

export enum SalesforceKnowledgeArticleState {
  ARCHIVED = "ARCHIVED",
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}

/**
 * <p>Provides configuration information for standard Salesforce
 *             knowledge articles.</p>
 */
export interface SalesforceStandardKnowledgeArticleTypeConfiguration {
  /**
   * <p>The name of the field that contains the document data to
   *             index.</p>
   */
  DocumentDataFieldName: string | undefined;

  /**
   * <p>The name of the field that contains the document title.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * <p>One or more objects that map fields in the knowledge article to
   *             Amazon Kendra index fields. The index field must exist before you can map
   *             a Salesforce field to it.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

export namespace SalesforceStandardKnowledgeArticleTypeConfiguration {
  export const filterSensitiveLog = (obj: SalesforceStandardKnowledgeArticleTypeConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration information for the knowlege article types
 *             that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles
 *             and the standard fields of knowledge articles, or the custom fields
 *             of custom knowledge articles, but not both </p>
 */
export interface SalesforceKnowledgeArticleConfiguration {
  /**
   * <p>Specifies the document states that should be included when
   *             Amazon Kendra indexes knowledge articles. You must specify at least one
   *             state.</p>
   */
  IncludedStates: (SalesforceKnowledgeArticleState | string)[] | undefined;

  /**
   * <p>Provides configuration information for standard Salesforce
   *             knowledge articles.</p>
   */
  StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration;

  /**
   * <p>Provides configuration information for custom Salesforce knowledge
   *             articles.</p>
   */
  CustomKnowledgeArticleTypeConfigurations?: SalesforceCustomKnowledgeArticleTypeConfiguration[];
}

export namespace SalesforceKnowledgeArticleConfiguration {
  export const filterSensitiveLog = (obj: SalesforceKnowledgeArticleConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information for processing attachments to
 *             Salesforce standard objects. </p>
 */
export interface SalesforceStandardObjectAttachmentConfiguration {
  /**
   * <p>The name of the field used for the document title.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * <p>One or more objects that map fields in attachments to Amazon Kendra
   *             index fields.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

export namespace SalesforceStandardObjectAttachmentConfiguration {
  export const filterSensitiveLog = (obj: SalesforceStandardObjectAttachmentConfiguration): any => ({
    ...obj,
  });
}

export enum SalesforceStandardObjectName {
  ACCOUNT = "ACCOUNT",
  CAMPAIGN = "CAMPAIGN",
  CASE = "CASE",
  CONTACT = "CONTACT",
  CONTRACT = "CONTRACT",
  DOCUMENT = "DOCUMENT",
  GROUP = "GROUP",
  IDEA = "IDEA",
  LEAD = "LEAD",
  OPPORTUNITY = "OPPORTUNITY",
  PARTNER = "PARTNER",
  PRICEBOOK = "PRICEBOOK",
  PRODUCT = "PRODUCT",
  PROFILE = "PROFILE",
  SOLUTION = "SOLUTION",
  TASK = "TASK",
  USER = "USER",
}

/**
 * <p>Specifies confguration information for indexing a single standard
 *             object.</p>
 */
export interface SalesforceStandardObjectConfiguration {
  /**
   * <p>The name of the standard object.</p>
   */
  Name: SalesforceStandardObjectName | string | undefined;

  /**
   * <p>The name of the field in the standard object table that contains
   *             the document contents.</p>
   */
  DocumentDataFieldName: string | undefined;

  /**
   * <p>The name of the field in the standard object table that contains
   *             the document titleB.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * <p>One or more objects that map fields in the standard object to
   *             Amazon Kendra index fields. The index field must exist before you can map
   *             a Salesforce field to it.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

export namespace SalesforceStandardObjectConfiguration {
  export const filterSensitiveLog = (obj: SalesforceStandardObjectConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information for connecting to a Salesforce
 *             data source.</p>
 */
export interface SalesforceConfiguration {
  /**
   * <p>The instance URL for the Salesforce site that you want to
   *             index.</p>
   */
  ServerUrl: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Secrets Manager secret
   *             that contains the key/value pairs required to connect to your
   *             Salesforce instance. The secret must contain a JSON structure with
   *             the following keys:</p>
   *         <ul>
   *             <li>
   *                 <p>authenticationUrl - The OAUTH endpoint that Amazon Kendra
   *                     connects to get an OAUTH token. </p>
   *             </li>
   *             <li>
   *                 <p>consumerKey - The application public key generated when
   *                     you created your Salesforce application.</p>
   *             </li>
   *             <li>
   *                 <p>consumerSecret - The application private key generated
   *                     when you created your Salesforce application.</p>
   *             </li>
   *             <li>
   *                 <p>password - The password associated with the user logging
   *                     in to the Salesforce instance.</p>
   *             </li>
   *             <li>
   *                 <p>securityToken - The token associated with the user account
   *                     logging in to the Salesforce instance.</p>
   *             </li>
   *             <li>
   *                 <p>username - The user name of the user logging in to the
   *                     Salesforce instance.</p>
   *             </li>
   *          </ul>
   */
  SecretArn: string | undefined;

  /**
   * <p>Specifies the Salesforce standard objects that Amazon Kendra
   *             indexes.</p>
   */
  StandardObjectConfigurations?: SalesforceStandardObjectConfiguration[];

  /**
   * <p>Specifies configuration information for the knowlege article types
   *             that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles
   *             and the standard fields of knowledge articles, or the custom fields
   *             of custom knowledge articles, but not both.</p>
   */
  KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration;

  /**
   * <p>Specifies configuration information for Salesforce chatter
   *             feeds.</p>
   */
  ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration;

  /**
   * <p>Indicates whether Amazon Kendra should index attachments to Salesforce
   *             objects.</p>
   */
  CrawlAttachments?: boolean;

  /**
   * <p>Provides configuration information for processing attachments to
   *             Salesforce standard objects. </p>
   */
  StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration;

  /**
   * <p>A list of regular expression patterns. Documents that match the
   *             patterns are included in the index. Documents that don't match the
   *             patterns are excluded from the index. If a document matches both an
   *             inclusion pattern and an exclusion pattern, the document is not
   *             included in the index.</p>
   *         <p>The regex is applied to the name of the attached file.</p>
   */
  IncludeAttachmentFilePatterns?: string[];

  /**
   * <p>A list of regular expression patterns. Documents that match the
   *             patterns are excluded from the index. Documents that don't match the
   *             patterns are included in the index. If a document matches both an
   *             exclusion pattern and an inclusion pattern, the document is not
   *             included in the index.</p>
   *         <p>The regex is applied to the name of the attached file.</p>
   */
  ExcludeAttachmentFilePatterns?: string[];
}

export namespace SalesforceConfiguration {
  export const filterSensitiveLog = (obj: SalesforceConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information for crawling knowledge articles
 *             in the ServiceNow site.</p>
 */
export interface ServiceNowKnowledgeArticleConfiguration {
  /**
   * <p>Indicates whether Amazon Kendra should index attachments to knowledge
   *             articles.</p>
   */
  CrawlAttachments?: boolean;

  /**
   * <p>List of regular expressions applied to knowledge articles. Items
   *             that don't match the inclusion pattern are not indexed. The regex is
   *             applied to the field specified in the
   *                 <code>PatternTargetField</code>.</p>
   */
  IncludeAttachmentFilePatterns?: string[];

  /**
   * <p>List of regular expressions applied to knowledge articles. Items
   *             that don't match the inclusion pattern are not indexed. The regex is
   *             applied to the field specified in the
   *                 <code>PatternTargetField</code>
   *          </p>
   */
  ExcludeAttachmentFilePatterns?: string[];

  /**
   * <p>The name of the ServiceNow field that is mapped to the index
   *             document contents field in the Amazon Kendra index.</p>
   */
  DocumentDataFieldName: string | undefined;

  /**
   * <p>The name of the ServiceNow field that is mapped to the index
   *             document title field.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * <p>Mapping between ServiceNow fields and Amazon Kendra index fields. You
   *             must create the index field before you map the field.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

export namespace ServiceNowKnowledgeArticleConfiguration {
  export const filterSensitiveLog = (obj: ServiceNowKnowledgeArticleConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information for crawling service catalog
 *             items in the ServiceNow site</p>
 */
export interface ServiceNowServiceCatalogConfiguration {
  /**
   * <p>Indicates whether Amazon Kendra should crawl attachments to the service
   *             catalog items. </p>
   */
  CrawlAttachments?: boolean;

  /**
   * <p>Determines the types of file attachments that are included in the
   *             index. </p>
   */
  IncludeAttachmentFilePatterns?: string[];

  /**
   * <p>Determines the types of file attachments that are excluded from
   *             the index.</p>
   */
  ExcludeAttachmentFilePatterns?: string[];

  /**
   * <p>The name of the ServiceNow field that is mapped to the index
   *             document contents field in the Amazon Kendra index.</p>
   */
  DocumentDataFieldName: string | undefined;

  /**
   * <p>The name of the ServiceNow field that is mapped to the index
   *             document title field.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * <p>Mapping between ServiceNow fields and Amazon Kendra index fields. You
   *             must create the index field before you map the field.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

export namespace ServiceNowServiceCatalogConfiguration {
  export const filterSensitiveLog = (obj: ServiceNowServiceCatalogConfiguration): any => ({
    ...obj,
  });
}

export enum ServiceNowBuildVersionType {
  LONDON = "LONDON",
  OTHERS = "OTHERS",
}

/**
 * <p>Provides configuration information required to connect to a
 *             ServiceNow data source.</p>
 */
export interface ServiceNowConfiguration {
  /**
   * <p>The ServiceNow instance that the data source connects to. The host
   *             endpoint should look like the following:
   *                 <code>{instance}.service-now.com.</code>
   *          </p>
   */
  HostUrl: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secret Manager secret
   *             that contains the user name and password required to connect to the
   *             ServiceNow instance.</p>
   */
  SecretArn: string | undefined;

  /**
   * <p>The identifier of the release that the ServiceNow host is running.
   *             If the host is not running the <code>LONDON</code> release, use
   *                 <code>OTHERS</code>.</p>
   */
  ServiceNowBuildVersion: ServiceNowBuildVersionType | string | undefined;

  /**
   * <p>Provides configuration information for crawling knowledge articles
   *             in the ServiceNow site.</p>
   */
  KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration;

  /**
   * <p>Provides configuration information for crawling service catalogs
   *             in the ServiceNow site.</p>
   */
  ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration;
}

export namespace ServiceNowConfiguration {
  export const filterSensitiveLog = (obj: ServiceNowConfiguration): any => ({
    ...obj,
  });
}

export enum SharePointVersion {
  SHAREPOINT_ONLINE = "SHAREPOINT_ONLINE",
}

/**
 * <p>Provides configuration information for connecting to a Microsoft
 *             SharePoint data source.</p>
 */
export interface SharePointConfiguration {
  /**
   * <p>The version of Microsoft SharePoint that you are using as a data
   *             source.</p>
   */
  SharePointVersion: SharePointVersion | string | undefined;

  /**
   * <p>The URLs of the Microsoft SharePoint site that contains the
   *             documents that should be indexed.</p>
   */
  Urls: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of credentials stored in AWS
   *             Secrets Manager. The credentials should be a user/password pair. For
   *             more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-sharepoint.html">Using a
   *                 Microsoft SharePoint Data Source</a>. For more information
   *             about AWS Secrets Manager, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"> What Is AWS
   *                 Secrets Manager </a> in the <i>AWS Secrets
   *                 Manager</i> user guide.</p>
   */
  SecretArn: string | undefined;

  /**
   * <p>
   *             <code>TRUE</code> to include attachments to documents stored in
   *             your Microsoft SharePoint site in the index; otherwise,
   *                 <code>FALSE</code>.</p>
   */
  CrawlAttachments?: boolean;

  /**
   * <p>Set to <code>TRUE</code> to use the Microsoft SharePoint change
   *             log to determine the documents that need to be updated in the index.
   *             Depending on the size of the SharePoint change log, it may take
   *             longer for Amazon Kendra to use the change log than it takes it to
   *             determine the changed documents using the Amazon Kendra document
   *             crawler.</p>
   */
  UseChangeLog?: boolean;

  /**
   * <p>A list of regular expression patterns. Documents that match the
   *             patterns are included in the index. Documents that don't match the
   *             patterns are excluded from the index. If a document matches both an
   *             inclusion pattern and an exclusion pattern, the document is not
   *             included in the index.</p>
   *         <p>The regex is applied to the display URL of the SharePoint
   *             document.</p>
   */
  InclusionPatterns?: string[];

  /**
   * <p>A list of regular expression patterns. Documents that match the
   *             patterns are excluded from the index. Documents that don't match the
   *             patterns are included in the index. If a document matches both an
   *             exclusion pattern and an inclusion pattern, the document is not
   *             included in the index.</p>
   *         <p>The regex is applied to the display URL of the SharePoint
   *             document.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * <p>Provides information for connecting to an Amazon VPC.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that
   *             map Microsoft SharePoint attributes to custom fields in the Amazon Kendra
   *             index. You must first create the index fields using the  operation before you map SharePoint
   *             attributes. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping Data Source
   *                 Fields</a>.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * <p>The Microsoft SharePoint attribute field that contains the title
   *             of the document.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * <p>A Boolean value that specifies whether local
   *          groups are disabled (<code>True</code>) or enabled (<code>False</code>).
   *       </p>
   */
  DisableLocalGroups?: boolean;
}

export namespace SharePointConfiguration {
  export const filterSensitiveLog = (obj: SharePointConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for a Amazon Kendra data source.</p>
 */
export interface DataSourceConfiguration {
  /**
   * <p>Provides information to create a data source connector for a
   *             document repository in an Amazon S3 bucket.</p>
   */
  S3Configuration?: S3DataSourceConfiguration;

  /**
   * <p>Provides information necessary to create a data source connector
   *             for a Microsoft SharePoint site.</p>
   */
  SharePointConfiguration?: SharePointConfiguration;

  /**
   * <p>Provides information necessary to create a data source connector
   *             for a database.</p>
   */
  DatabaseConfiguration?: DatabaseConfiguration;

  /**
   * <p>Provides configuration information for data sources that connect
   *             to a Salesforce site.</p>
   */
  SalesforceConfiguration?: SalesforceConfiguration;

  /**
   * <p>Provides configuration for data sources that connect to Microsoft OneDrive.</p>
   */
  OneDriveConfiguration?: OneDriveConfiguration;

  /**
   * <p>Provides configuration for data sources that connect to ServiceNow
   *             instances.</p>
   */
  ServiceNowConfiguration?: ServiceNowConfiguration;

  /**
   * <p>Provides configuration information for connecting to a Confluence
   *             data source.</p>
   */
  ConfluenceConfiguration?: ConfluenceConfiguration;

  /**
   * <p>Provides configuration for data sources that connect to
   *         Google Drive. </p>
   */
  GoogleDriveConfiguration?: GoogleDriveConfiguration;
}

export namespace DataSourceConfiguration {
  export const filterSensitiveLog = (obj: DataSourceConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values
 *       can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : /
 *       = + - @.</p>
 */
export interface Tag {
  /**
   * <p>The key for the tag. Keys are not case sensitive and must be unique for the index, FAQ, or
   *       data source.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value associated with the tag. The value may be an empty string but it can't be
   *       null.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export enum DataSourceType {
  CONFLUENCE = "CONFLUENCE",
  CUSTOM = "CUSTOM",
  DATABASE = "DATABASE",
  GOOGLEDRIVE = "GOOGLEDRIVE",
  ONEDRIVE = "ONEDRIVE",
  S3 = "S3",
  SALESFORCE = "SALESFORCE",
  SERVICENOW = "SERVICENOW",
  SHAREPOINT = "SHAREPOINT",
}

export interface CreateDataSourceRequest {
  /**
   * <p>A unique name for the data source. A data source name can't be changed without deleting
   *       and recreating the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The identifier of the index that should be associated with this data source.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The type of repository that contains the data source.</p>
   */
  Type: DataSourceType | string | undefined;

  /**
   * <p>The connector configuration information that is required to access the repository.</p>
   *          <p>You can't specify the <code>Configuration</code> parameter when the <code>Type</code>
   *     parameter is set to <code>CUSTOM</code>. If you do, you receive a <code>ValidationException</code>
   *     exception.</p>
   *          <p>The <code>Configuration</code> parameter is required for all other data sources.</p>
   */
  Configuration?: DataSourceConfiguration;

  /**
   * <p>A description for the data source.</p>
   */
  Description?: string;

  /**
   * <p>Sets the frequency that Amazon Kendra will check the documents in your repository and
   *       update the index. If you don't set a schedule Amazon Kendra will not periodically update the
   *       index. You can call the <code>StartDataSourceSyncJob</code> operation to update the
   *       index.</p>
   *          <p>You can't specify the <code>Schedule</code> parameter when the <code>Type</code>
   *       parameter is set to <code>CUSTOM</code>. If you do, you receive a <code>ValidationException</code>
   *       exception.</p>
   */
  Schedule?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a role with permission to access the data source. For
   *       more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM
   *         Roles for Amazon Kendra</a>.</p>
   *          <p>You can't specify the <code>RoleArn</code> parameter when the <code>Type</code>
   *       parameter is set to <code>CUSTOM</code>. If you do, you receive a <code>ValidationException</code>
   *       exception.</p>
   *          <p>The <code>RoleArn</code> parameter is required for all other data sources.</p>
   */
  RoleArn?: string;

  /**
   * <p>A list of key-value pairs that identify the data source. You can use the tags to identify
   *       and organize your resources and to control access to resources.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A token that you provide to identify the request to create a data source. Multiple calls
   *       to the <code>CreateDataSource</code> operation with the same client token will create only one
   *       data source.</p>
   */
  ClientToken?: string;
}

export namespace CreateDataSourceRequest {
  export const filterSensitiveLog = (obj: CreateDataSourceRequest): any => ({
    ...obj,
  });
}

export interface CreateDataSourceResponse {
  /**
   * <p>A unique identifier for the data source.</p>
   */
  Id: string | undefined;
}

export namespace CreateDataSourceResponse {
  export const filterSensitiveLog = (obj: CreateDataSourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ResourceAlreadyExistException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAlreadyExistException {
  export const filterSensitiveLog = (obj: ResourceAlreadyExistException): any => ({
    ...obj,
  });
}

export enum FaqFileFormat {
  CSV = "CSV",
  CSV_WITH_HEADER = "CSV_WITH_HEADER",
  JSON = "JSON",
}

export interface CreateFaqRequest {
  /**
   * <p>The identifier of the index that contains the FAQ.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The name that should be associated with the FAQ.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the FAQ.</p>
   */
  Description?: string;

  /**
   * <p>The S3 location of the FAQ input data.</p>
   */
  S3Path: S3Path | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a role with permission to access the S3 bucket that
   *             contains the FAQs. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM Roles for Amazon Kendra</a>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A list of key-value pairs that identify the FAQ. You can use the tags to identify and
   *             organize your resources and to control access to resources.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The format of the input file. You can choose between a basic CSV format, a CSV format
   *             that includes customs attributes in a header, and a JSON format that includes custom
   *             attributes.</p>
   *         <p>The format must match the format of the file stored in the S3 bucket identified in the
   *                 <code>S3Path</code> parameter.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-creating-faq.html">Adding questions and
   *             answers</a>.</p>
   */
  FileFormat?: FaqFileFormat | string;

  /**
   * <p>A token that you provide to identify the request to create a FAQ. Multiple calls to
   *             the <code>CreateFaqRequest</code> operation with the same client token will create only
   *             one FAQ. </p>
   */
  ClientToken?: string;
}

export namespace CreateFaqRequest {
  export const filterSensitiveLog = (obj: CreateFaqRequest): any => ({
    ...obj,
  });
}

export interface CreateFaqResponse {
  /**
   * <p>The unique identifier of the FAQ.</p>
   */
  Id?: string;
}

export namespace CreateFaqResponse {
  export const filterSensitiveLog = (obj: CreateFaqResponse): any => ({
    ...obj,
  });
}

export enum IndexEdition {
  DEVELOPER_EDITION = "DEVELOPER_EDITION",
  ENTERPRISE_EDITION = "ENTERPRISE_EDITION",
}

/**
 * <p>Provides the identifier of the AWS KMS customer master key (CMK)
 *             used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support
 *             asymmetric CMKs.</p>
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * <p>The identifier of the AWS KMS customer master key (CMK). Amazon Kendra
   *             doesn't support asymmetric CMKs.</p>
   */
  KmsKeyId?: string;
}

export namespace ServerSideEncryptionConfiguration {
  export const filterSensitiveLog = (obj: ServerSideEncryptionConfiguration): any => ({
    ...obj,
    ...(obj.KmsKeyId && { KmsKeyId: SENSITIVE_STRING }),
  });
}

export enum UserContextPolicy {
  ATTRIBUTE_FILTER = "ATTRIBUTE_FILTER",
  USER_TOKEN = "USER_TOKEN",
}

/**
 * <p>Configuration information for the JSON token type.</p>
 */
export interface JsonTokenTypeConfiguration {
  /**
   * <p>The user name attribute field.</p>
   */
  UserNameAttributeField: string | undefined;

  /**
   * <p>The group attribute field.</p>
   */
  GroupAttributeField: string | undefined;
}

export namespace JsonTokenTypeConfiguration {
  export const filterSensitiveLog = (obj: JsonTokenTypeConfiguration): any => ({
    ...obj,
  });
}

export enum KeyLocation {
  SECRET_MANAGER = "SECRET_MANAGER",
  URL = "URL",
}

/**
 * <p>Configuration information for the JWT token type.</p>
 */
export interface JwtTokenTypeConfiguration {
  /**
   * <p>The location of the key.</p>
   */
  KeyLocation: KeyLocation | string | undefined;

  /**
   * <p>The signing key URL.</p>
   */
  URL?: string;

  /**
   * <p>The Amazon Resource Name (arn) of the secret.</p>
   */
  SecretManagerArn?: string;

  /**
   * <p>The user name attribute field.</p>
   */
  UserNameAttributeField?: string;

  /**
   * <p>The group attribute field.</p>
   */
  GroupAttributeField?: string;

  /**
   * <p>The issuer of the token.</p>
   */
  Issuer?: string;

  /**
   * <p>The regular expression that identifies the claim.</p>
   */
  ClaimRegex?: string;
}

export namespace JwtTokenTypeConfiguration {
  export const filterSensitiveLog = (obj: JwtTokenTypeConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information for a token configuration.</p>
 */
export interface UserTokenConfiguration {
  /**
   * <p>Information about the JWT token type configuration.</p>
   */
  JwtTokenTypeConfiguration?: JwtTokenTypeConfiguration;

  /**
   * <p>Information about the JSON token type configuration.</p>
   */
  JsonTokenTypeConfiguration?: JsonTokenTypeConfiguration;
}

export namespace UserTokenConfiguration {
  export const filterSensitiveLog = (obj: UserTokenConfiguration): any => ({
    ...obj,
  });
}

export interface CreateIndexRequest {
  /**
   * <p>The name for the new index.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Kendra edition to use for the index. Choose <code>DEVELOPER_EDITION</code> for
   *       indexes intended for development, testing, or proof of concept. Use
   *         <code>ENTERPRISE_EDITION</code> for your production databases. Once you set the edition for
   *       an index, it can't be changed. </p>
   *          <p>The <code>Edition</code> parameter is optional. If you don't supply a value, the default
   *       is <code>ENTERPRISE_EDITION</code>.</p>
   */
  Edition?: IndexEdition | string;

  /**
   * <p>An AWS Identity and Access Management (IAM) role that gives Amazon Kendra permissions to
   *       access your Amazon CloudWatch logs and metrics. This is also the role used when you use the
   *         <code>BatchPutDocument</code> operation to index documents from an Amazon S3 bucket.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The identifier of the AWS KMS customer managed key (CMK) to use to encrypt data indexed by
   *       Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs.</p>
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>A description for the index.</p>
   */
  Description?: string;

  /**
   * <p>A token that you provide to identify the request to create an index. Multiple calls to the
   *         <code>CreateIndex</code> operation with the same client token will create only one
   *       index.</p>
   */
  ClientToken?: string;

  /**
   * <p>A list of key-value pairs that identify the index. You can use the tags to identify and
   *       organize your resources and to control access to resources.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The user token configuration.</p>
   */
  UserTokenConfigurations?: UserTokenConfiguration[];

  /**
   * <p>The user context policy.</p>
   *          <dl>
   *             <dt>ATTRIBUTE_FILTER</dt>
   *             <dd>
   *                <p>All indexed content is searchable and displayable
   *                   for all users. If there is an access control list, it
   *                   is ignored. You can filter on user and group attributes.
   *                </p>
   *             </dd>
   *             <dt>USER_TOKEN</dt>
   *             <dd>
   *                <p>Enables SSO and token-based user access control.
   *                All documents with no access control and all documents
   *                accessible to the user will be searchable and
   *                displayable.
   *                </p>
   *             </dd>
   *          </dl>
   */
  UserContextPolicy?: UserContextPolicy | string;
}

export namespace CreateIndexRequest {
  export const filterSensitiveLog = (obj: CreateIndexRequest): any => ({
    ...obj,
    ...(obj.ServerSideEncryptionConfiguration && {
      ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(
        obj.ServerSideEncryptionConfiguration
      ),
    }),
  });
}

export interface CreateIndexResponse {
  /**
   * <p>The unique identifier of the index. Use this identifier when you query an index, set up a
   *       data source, or index a document.</p>
   */
  Id?: string;
}

export namespace CreateIndexResponse {
  export const filterSensitiveLog = (obj: CreateIndexResponse): any => ({
    ...obj,
  });
}

export interface CreateThesaurusRequest {
  /**
   * <p>The unique identifier of the index for the new thesaurus.
   *       </p>
   */
  IndexId: string | undefined;

  /**
   * <p>The name for the new thesaurus.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description for the new thesaurus.</p>
   */
  Description?: string;

  /**
   * <p>An AWS Identity and Access Management (IAM) role that gives Amazon Kendra permissions
   *          to access thesaurus file specified in <code>SourceS3Path</code>.
   *       </p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A list of key-value pairs that identify the thesaurus. You can use
   *          the tags to identify and organize your resources and to control
   *          access to resources.
   *       </p>
   */
  Tags?: Tag[];

  /**
   * <p>The thesaurus file Amazon S3 source path.
   *       </p>
   */
  SourceS3Path: S3Path | undefined;

  /**
   * <p>A token that you provide to identify the request to create a
   *          thesaurus. Multiple calls to the <code>CreateThesaurus</code> operation
   *          with the same client token will create only one index.
   *       </p>
   */
  ClientToken?: string;
}

export namespace CreateThesaurusRequest {
  export const filterSensitiveLog = (obj: CreateThesaurusRequest): any => ({
    ...obj,
  });
}

export interface CreateThesaurusResponse {
  /**
   * <p>The unique identifier of the thesaurus.
   *       </p>
   */
  Id?: string;
}

export namespace CreateThesaurusResponse {
  export const filterSensitiveLog = (obj: CreateThesaurusResponse): any => ({
    ...obj,
  });
}

export interface DeleteDataSourceRequest {
  /**
   * <p>The unique identifier of the data source to delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>The unique identifier of the index associated with the data source.</p>
   */
  IndexId: string | undefined;
}

export namespace DeleteDataSourceRequest {
  export const filterSensitiveLog = (obj: DeleteDataSourceRequest): any => ({
    ...obj,
  });
}

export interface DeleteFaqRequest {
  /**
   * <p>The identifier of the FAQ to remove.</p>
   */
  Id: string | undefined;

  /**
   * <p>The index to remove the FAQ from.</p>
   */
  IndexId: string | undefined;
}

export namespace DeleteFaqRequest {
  export const filterSensitiveLog = (obj: DeleteFaqRequest): any => ({
    ...obj,
  });
}

export interface DeleteIndexRequest {
  /**
   * <p>The identifier of the index to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteIndexRequest {
  export const filterSensitiveLog = (obj: DeleteIndexRequest): any => ({
    ...obj,
  });
}

export interface DeleteThesaurusRequest {
  /**
   * <p>The identifier of the thesaurus to delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the index associated with the thesaurus to delete.</p>
   */
  IndexId: string | undefined;
}

export namespace DeleteThesaurusRequest {
  export const filterSensitiveLog = (obj: DeleteThesaurusRequest): any => ({
    ...obj,
  });
}

export interface DescribeDataSourceRequest {
  /**
   * <p>The unique identifier of the data source to describe.</p>
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the index that contains the data source.</p>
   */
  IndexId: string | undefined;
}

export namespace DescribeDataSourceRequest {
  export const filterSensitiveLog = (obj: DescribeDataSourceRequest): any => ({
    ...obj,
  });
}

export enum DataSourceStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

export interface DescribeDataSourceResponse {
  /**
   * <p>The identifier of the data source.</p>
   */
  Id?: string;

  /**
   * <p>The identifier of the index that contains the data source.</p>
   */
  IndexId?: string;

  /**
   * <p>The name that you gave the data source when it was created.</p>
   */
  Name?: string;

  /**
   * <p>The type of the data source.</p>
   */
  Type?: DataSourceType | string;

  /**
   * <p>Information that describes where the data source is located and how the data source is
   *       configured. The specific information in the description depends on the data source
   *       provider.</p>
   */
  Configuration?: DataSourceConfiguration;

  /**
   * <p>The Unix timestamp of when the data source was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The Unix timestamp of when the data source was last updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>The description of the data source.</p>
   */
  Description?: string;

  /**
   * <p>The current status of the data source. When the status is <code>ACTIVE</code> the data
   *       source is ready to use. When the status is <code>FAILED</code>, the <code>ErrorMessage</code>
   *       field contains the reason that the data source failed.</p>
   */
  Status?: DataSourceStatus | string;

  /**
   * <p>The schedule that Amazon Kendra will update the data source.</p>
   */
  Schedule?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that enables the data source to access its
   *       resources.</p>
   */
  RoleArn?: string;

  /**
   * <p>When the <code>Status</code> field value is <code>FAILED</code>, the
   *         <code>ErrorMessage</code> field contains a description of the error that caused the data
   *       source to fail.</p>
   */
  ErrorMessage?: string;
}

export namespace DescribeDataSourceResponse {
  export const filterSensitiveLog = (obj: DescribeDataSourceResponse): any => ({
    ...obj,
  });
}

export interface DescribeFaqRequest {
  /**
   * <p>The unique identifier of the FAQ.</p>
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the index that contains the FAQ.</p>
   */
  IndexId: string | undefined;
}

export namespace DescribeFaqRequest {
  export const filterSensitiveLog = (obj: DescribeFaqRequest): any => ({
    ...obj,
  });
}

export enum FaqStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

export interface DescribeFaqResponse {
  /**
   * <p>The identifier of the FAQ.</p>
   */
  Id?: string;

  /**
   * <p>The identifier of the index that contains the FAQ.</p>
   */
  IndexId?: string;

  /**
   * <p>The name that you gave the FAQ when it was created.</p>
   */
  Name?: string;

  /**
   * <p>The description of the FAQ that you provided when it was created.</p>
   */
  Description?: string;

  /**
   * <p>The date and time that the FAQ was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The date and time that the FAQ was last updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>Information required to find a specific file in an Amazon S3
   *             bucket.</p>
   */
  S3Path?: S3Path;

  /**
   * <p>The status of the FAQ. It is ready to use when the status is
   *             <code>ACTIVE</code>.</p>
   */
  Status?: FaqStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that provides access to the S3 bucket
   *             containing the input files for the FAQ.</p>
   */
  RoleArn?: string;

  /**
   * <p>If the <code>Status</code> field is <code>FAILED</code>, the <code>ErrorMessage</code>
   *             field contains the reason why the FAQ failed.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The file format used by the input files for the FAQ.</p>
   */
  FileFormat?: FaqFileFormat | string;
}

export namespace DescribeFaqResponse {
  export const filterSensitiveLog = (obj: DescribeFaqResponse): any => ({
    ...obj,
  });
}

export interface DescribeIndexRequest {
  /**
   * <p>The name of the index to describe.</p>
   */
  Id: string | undefined;
}

export namespace DescribeIndexRequest {
  export const filterSensitiveLog = (obj: DescribeIndexRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies capacity units configured for your index. You can add
 *             and remove capacity units to tune an index to your
 *             requirements.</p>
 */
export interface CapacityUnitsConfiguration {
  /**
   * <p>The amount of extra storage capacity for an index. Each capacity
   *             unit provides 150 Gb of storage space or 500,000 documents,
   *             whichever is reached first.</p>
   */
  StorageCapacityUnits: number | undefined;

  /**
   * <p>The amount of extra query capacity for an index. Each capacity
   *             unit provides 0.5 queries per second and 40,000 queries per
   *             day.</p>
   */
  QueryCapacityUnits: number | undefined;
}

export namespace CapacityUnitsConfiguration {
  export const filterSensitiveLog = (obj: CapacityUnitsConfiguration): any => ({
    ...obj,
  });
}

export enum Order {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

/**
 * <p>Provides information for manually tuning the relevance of a field
 *             in a search. When a query includes terms that match the field, the
 *             results are given a boost in the response based on these tuning
 *             parameters.</p>
 */
export interface Relevance {
  /**
   * <p>Indicates that this field determines how "fresh" a document is.
   *             For example, if document 1 was created on November 5, and document 2
   *             was created on October 31, document 1 is "fresher" than document 2.
   *             You can only set the <code>Freshness</code> field on one
   *                 <code>DATE</code> type field. Only applies to <code>DATE</code>
   *             fields.</p>
   */
  Freshness?: boolean;

  /**
   * <p>The relative importance of the field in the search. Larger numbers
   *             provide more of a boost than smaller numbers.</p>
   */
  Importance?: number;

  /**
   * <p>Specifies the time period that the boost applies to. For example,
   *             to make the boost apply to documents with the field value within the
   *             last month, you would use "2628000s". Once the field value is beyond
   *             the specified range, the effect of the boost drops off. The higher
   *             the importance, the faster the effect drops off. If you don't
   *             specify a value, the default is 3 months. The value of the field is
   *             a numeric string followed by the character "s", for example "86400s"
   *             for one day, or "604800s" for one week. </p>
   *         <p>Only applies to <code>DATE</code> fields.</p>
   */
  Duration?: string;

  /**
   * <p>Determines how values should be interpreted.</p>
   *         <p>When the <code>RankOrder</code> field is <code>ASCENDING</code>,
   *             higher numbers are better. For example, a document with a rating
   *             score of 10 is higher ranking than a document with a rating score of
   *             1.</p>
   *         <p>When the <code>RankOrder</code> field is <code>DESCENDING</code>,
   *             lower numbers are better. For example, in a task tracking
   *             application, a priority 1 task is more important than a priority 5
   *             task.</p>
   *         <p>Only applies to <code>LONG</code> and <code>DOUBLE</code>
   *             fields.</p>
   */
  RankOrder?: Order | string;

  /**
   * <p>A list of values that should be given a different boost when they
   *             appear in the result list. For example, if you are boosting a field
   *             called "department," query terms that match the department field are
   *             boosted in the result. However, you can add entries from the
   *             department field to boost documents with those values higher. </p>
   *         <p>For example, you can add entries to the map with names of
   *             departments. If you add "HR",5 and "Legal",3 those departments are
   *             given special attention when they appear in the metadata of a
   *             document. When those terms appear they are given the specified
   *             importance instead of the regular importance for the boost.</p>
   */
  ValueImportanceMap?: { [key: string]: number };
}

export namespace Relevance {
  export const filterSensitiveLog = (obj: Relevance): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about how a custom index field is used during
 *             a search.</p>
 */
export interface Search {
  /**
   * <p>Indicates that the field can be used to create search facets, a
   *             count of results for each value in the field. The default is
   *                 <code>false</code> .</p>
   */
  Facetable?: boolean;

  /**
   * <p>Determines whether the field is used in the search. If the
   *                 <code>Searchable</code> field is <code>true</code>, you can use
   *             relevance tuning to manually tune how Amazon Kendra weights the field in
   *             the search. The default is <code>true</code> for string fields and
   *                 <code>false</code> for number and date fields.</p>
   */
  Searchable?: boolean;

  /**
   * <p>Determines whether the field is returned in the query response.
   *             The default is <code>true</code>.</p>
   */
  Displayable?: boolean;

  /**
   * <p>Determines whether the field can be used to sort the results of a
   *             query. If you specify sorting on a field that does not have
   *                 <code>Sortable</code> set to <code>true</code>, Amazon Kendra returns an
   *             exception. The default is <code>false</code>.</p>
   */
  Sortable?: boolean;
}

export namespace Search {
  export const filterSensitiveLog = (obj: Search): any => ({
    ...obj,
  });
}

export enum DocumentAttributeValueType {
  DATE_VALUE = "DATE_VALUE",
  LONG_VALUE = "LONG_VALUE",
  STRING_LIST_VALUE = "STRING_LIST_VALUE",
  STRING_VALUE = "STRING_VALUE",
}

/**
 * <p>Specifies the properties of a custom index field.</p>
 */
export interface DocumentMetadataConfiguration {
  /**
   * <p>The name of the index field.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data type of the index field. </p>
   */
  Type: DocumentAttributeValueType | string | undefined;

  /**
   * <p>Provides manual tuning parameters to determine how the field
   *             affects the search results.</p>
   */
  Relevance?: Relevance;

  /**
   * <p>Provides information about how the field is used during a
   *             search.</p>
   */
  Search?: Search;
}

export namespace DocumentMetadataConfiguration {
  export const filterSensitiveLog = (obj: DocumentMetadataConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides statistical information about the FAQ questions and
 *             answers contained in an index.</p>
 */
export interface FaqStatistics {
  /**
   * <p>The total number of FAQ questions and answers contained in the
   *             index.</p>
   */
  IndexedQuestionAnswersCount: number | undefined;
}

export namespace FaqStatistics {
  export const filterSensitiveLog = (obj: FaqStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about text documents indexed in an
 *             index.</p>
 */
export interface TextDocumentStatistics {
  /**
   * <p>The number of text documents indexed.</p>
   */
  IndexedTextDocumentsCount: number | undefined;

  /**
   * <p>The total size, in bytes, of the indexed documents.</p>
   */
  IndexedTextBytes: number | undefined;
}

export namespace TextDocumentStatistics {
  export const filterSensitiveLog = (obj: TextDocumentStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the number of documents and the number
 *             of questions and answers in an index.</p>
 */
export interface IndexStatistics {
  /**
   * <p>The number of question and answer topics in the index.</p>
   */
  FaqStatistics: FaqStatistics | undefined;

  /**
   * <p>The number of text documents indexed.</p>
   */
  TextDocumentStatistics: TextDocumentStatistics | undefined;
}

export namespace IndexStatistics {
  export const filterSensitiveLog = (obj: IndexStatistics): any => ({
    ...obj,
  });
}

export enum IndexStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  SYSTEM_UPDATING = "SYSTEM_UPDATING",
  UPDATING = "UPDATING",
}

export interface DescribeIndexResponse {
  /**
   * <p>The name of the index.</p>
   */
  Name?: string;

  /**
   * <p>The name of the index.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Kendra edition used for the index. You decide the edition when you create the
   *       index.</p>
   */
  Edition?: IndexEdition | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that gives Amazon Kendra permission to write
   *       to your Amazon Cloudwatch logs.</p>
   */
  RoleArn?: string;

  /**
   * <p>The identifier of the AWS KMS customer master key (CMK) used to encrypt your data.
   *       Amazon Kendra doesn't support asymmetric CMKs.</p>
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>The current status of the index. When the value is <code>ACTIVE</code>, the index is ready
   *       for use. If the <code>Status</code> field value is <code>FAILED</code>, the
   *         <code>ErrorMessage</code> field contains a message that explains why.</p>
   */
  Status?: IndexStatus | string;

  /**
   * <p>The description of the index.</p>
   */
  Description?: string;

  /**
   * <p>The Unix datetime that the index was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The Unix datetime that the index was last updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>Configuration settings for any metadata applied to the documents in the index.</p>
   */
  DocumentMetadataConfigurations?: DocumentMetadataConfiguration[];

  /**
   * <p>Provides information about the number of FAQ questions and answers and the number of text
   *       documents indexed.</p>
   */
  IndexStatistics?: IndexStatistics;

  /**
   * <p>When th e<code>Status</code> field value is <code>FAILED</code>, the
   *         <code>ErrorMessage</code> field contains a message that explains why.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>For enterprise edtion indexes, you can choose to use additional capacity to meet the needs
   *       of your application. This contains the capacity units used for the index. A 0 for the query
   *       capacity or the storage capacity indicates that the index is using the default capacity for
   *       the index.</p>
   */
  CapacityUnits?: CapacityUnitsConfiguration;

  /**
   * <p>The user token configuration for the Amazon Kendra index.</p>
   */
  UserTokenConfigurations?: UserTokenConfiguration[];

  /**
   * <p>The user context policy for the Amazon Kendra index.</p>
   */
  UserContextPolicy?: UserContextPolicy | string;
}

export namespace DescribeIndexResponse {
  export const filterSensitiveLog = (obj: DescribeIndexResponse): any => ({
    ...obj,
    ...(obj.ServerSideEncryptionConfiguration && {
      ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(
        obj.ServerSideEncryptionConfiguration
      ),
    }),
  });
}

export interface DescribeThesaurusRequest {
  /**
   * <p>The identifier of the thesaurus to describe.</p>
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the index associated with the thesaurus to describe.</p>
   */
  IndexId: string | undefined;
}

export namespace DescribeThesaurusRequest {
  export const filterSensitiveLog = (obj: DescribeThesaurusRequest): any => ({
    ...obj,
  });
}

export enum ThesaurusStatus {
  ACTIVE = "ACTIVE",
  ACTIVE_BUT_UPDATE_FAILED = "ACTIVE_BUT_UPDATE_FAILED",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

export interface DescribeThesaurusResponse {
  /**
   * <p>The identifier of the thesaurus.</p>
   */
  Id?: string;

  /**
   * <p>The identifier of the index associated with the thesaurus to describe.</p>
   */
  IndexId?: string;

  /**
   * <p>The thesaurus name.</p>
   */
  Name?: string;

  /**
   * <p>The thesaurus description.</p>
   */
  Description?: string;

  /**
   * <p>The current status of the thesaurus. When the value is <code>ACTIVE</code>,
   *          queries are able to use the thesaurus. If the <code>Status</code> field value
   *          is <code>FAILED</code>, the <code>ErrorMessage</code> field provides
   *          more information.
   *       </p>
   *          <p>If the status is <code>ACTIVE_BUT_UPDATE_FAILED</code>, it means
   *       that Amazon Kendra could not ingest the new thesaurus file. The old
   *       thesaurus file is still active.
   *       </p>
   */
  Status?: ThesaurusStatus | string;

  /**
   * <p>When the <code>Status</code> field value is <code>FAILED</code>, the
   *          <code>ErrorMessage</code> field provides more information.
   *       </p>
   */
  ErrorMessage?: string;

  /**
   * <p>The Unix datetime that the thesaurus was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The Unix datetime that the thesaurus was last updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>An AWS Identity and Access Management (IAM) role that gives Amazon Kendra permissions
   *          to access thesaurus file specified in <code>SourceS3Path</code>.
   *       </p>
   */
  RoleArn?: string;

  /**
   * <p>Information required to find a specific file in an Amazon S3
   *             bucket.</p>
   */
  SourceS3Path?: S3Path;

  /**
   * <p>The size of the thesaurus file in bytes.</p>
   */
  FileSizeBytes?: number;

  /**
   * <p>The number of unique terms in the thesaurus file. For example, the
   *         synonyms <code>a,b,c</code> and <code>a=>d</code>, the term
   *         count would be 4.
   *       </p>
   */
  TermCount?: number;

  /**
   * <p>The number of synonym rules in the thesaurus file.</p>
   */
  SynonymRuleCount?: number;
}

export namespace DescribeThesaurusResponse {
  export const filterSensitiveLog = (obj: DescribeThesaurusResponse): any => ({
    ...obj,
  });
}

export interface ListDataSourcesRequest {
  /**
   * <p>The identifier of the index that contains the data source.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *       Amazon Kendra returns a pagination token in the response. You can use this pagination token to
   *       retrieve the next set of data sources (<code>DataSourceSummaryItems</code>). </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of data sources to return.</p>
   */
  MaxResults?: number;
}

export namespace ListDataSourcesRequest {
  export const filterSensitiveLog = (obj: ListDataSourcesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information for a Amazon Kendra data source. Returned in a call
 *             to .</p>
 */
export interface DataSourceSummary {
  /**
   * <p>The name of the data source.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier for the data source.</p>
   */
  Id?: string;

  /**
   * <p>The type of the data source.</p>
   */
  Type?: DataSourceType | string;

  /**
   * <p>The UNIX datetime that the data source was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The UNIX datetime that the data source was lasted updated. </p>
   */
  UpdatedAt?: Date;

  /**
   * <p>The status of the data source. When the status is
   *                 <code>ATIVE</code> the data source is ready to use.</p>
   */
  Status?: DataSourceStatus | string;
}

export namespace DataSourceSummary {
  export const filterSensitiveLog = (obj: DataSourceSummary): any => ({
    ...obj,
  });
}

export interface ListDataSourcesResponse {
  /**
   * <p>An array of summary information for one or more data sources.</p>
   */
  SummaryItems?: DataSourceSummary[];

  /**
   * <p>If the response is truncated, Amazon Kendra returns this token that you can use in the
   *       subsequent request to retrieve the next set of data sources. </p>
   */
  NextToken?: string;
}

export namespace ListDataSourcesResponse {
  export const filterSensitiveLog = (obj: ListDataSourcesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a range of time.</p>
 */
export interface TimeRange {
  /**
   * <p>The UNIX datetime of the beginning of the time range.</p>
   */
  StartTime?: Date;

  /**
   * <p>The UNIX datetime of the end of the time range.</p>
   */
  EndTime?: Date;
}

export namespace TimeRange {
  export const filterSensitiveLog = (obj: TimeRange): any => ({
    ...obj,
  });
}

export enum DataSourceSyncJobStatus {
  ABORTED = "ABORTED",
  FAILED = "FAILED",
  INCOMPLETE = "INCOMPLETE",
  STOPPING = "STOPPING",
  SUCCEEDED = "SUCCEEDED",
  SYNCING = "SYNCING",
  SYNCING_INDEXING = "SYNCING_INDEXING",
}

export interface ListDataSourceSyncJobsRequest {
  /**
   * <p>The identifier of the data source.</p>
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the index that contains the data source.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>If the result of the previous request to <code>GetDataSourceSyncJobHistory</code> was
   *       truncated, include the <code>NextToken</code> to fetch the next set of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of synchronization jobs to return in the response. If there are fewer
   *       results in the list, this response contains only the actual results.</p>
   */
  MaxResults?: number;

  /**
   * <p>When specified, the synchronization jobs returned in the list are limited to jobs between
   *       the specified dates. </p>
   */
  StartTimeFilter?: TimeRange;

  /**
   * <p>When specified, only returns synchronization jobs with the <code>Status</code> field equal
   *       to the specified status.</p>
   */
  StatusFilter?: DataSourceSyncJobStatus | string;
}

export namespace ListDataSourceSyncJobsRequest {
  export const filterSensitiveLog = (obj: ListDataSourceSyncJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Maps a batch delete document request to a specific data source
 *             sync job. This is optional and should only be supplied when
 *             documents are deleted by a data source connector.</p>
 */
export interface DataSourceSyncJobMetrics {
  /**
   * <p>The number of documents added from the data source up to now in
   *             the data source sync.</p>
   */
  DocumentsAdded?: string;

  /**
   * <p>The number of documents modified in the data source up to now in
   *             the data source sync run.</p>
   */
  DocumentsModified?: string;

  /**
   * <p>The number of documents deleted from the data source up to now in
   *             the data source sync run.</p>
   */
  DocumentsDeleted?: string;

  /**
   * <p>The number of documents that failed to sync from the data source
   *             up to now in the data source sync run.</p>
   */
  DocumentsFailed?: string;

  /**
   * <p>The current number of documents crawled by the current sync job in
   *             the data source.</p>
   */
  DocumentsScanned?: string;
}

export namespace DataSourceSyncJobMetrics {
  export const filterSensitiveLog = (obj: DataSourceSyncJobMetrics): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a synchronization job.</p>
 */
export interface DataSourceSyncJob {
  /**
   * <p>A unique identifier for the synchronization job.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The UNIX datetime that the synchronization job was started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The UNIX datetime that the synchronization job was
   *             completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The execution status of the synchronization job. When the
   *                 <code>Status</code> field is set to <code>SUCCEEDED</code>, the
   *             synchronization job is done. If the status code is set to
   *                 <code>FAILED</code>, the <code>ErrorCode</code> and
   *                 <code>ErrorMessage</code> fields give you the reason for the
   *             failure.</p>
   */
  Status?: DataSourceSyncJobStatus | string;

  /**
   * <p>If the <code>Status</code> field is set to <code>ERROR</code>, the
   *                 <code>ErrorMessage</code> field contains a description of the
   *             error that caused the synchronization to fail.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>If the <code>Status</code> field is set to <code>FAILED</code>,
   *             the <code>ErrorCode</code> field contains a the reason that the
   *             synchronization failed.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>If the reason that the synchronization failed is due to an error
   *             with the underlying data source, this field contains a code that
   *             identifies the error.</p>
   */
  DataSourceErrorCode?: string;

  /**
   * <p>Maps a batch delete document request to a specific data source
   *             sync job. This is optional and should only be supplied when
   *             documents are deleted by a data source connector.</p>
   */
  Metrics?: DataSourceSyncJobMetrics;
}

export namespace DataSourceSyncJob {
  export const filterSensitiveLog = (obj: DataSourceSyncJob): any => ({
    ...obj,
  });
}

export interface ListDataSourceSyncJobsResponse {
  /**
   * <p>A history of synchronization jobs for the data source.</p>
   */
  History?: DataSourceSyncJob[];

  /**
   * <p>The <code>GetDataSourceSyncJobHistory</code> operation returns a page of vocabularies at a
   *       time. The maximum size of the page is set by the <code>MaxResults</code> parameter. If there
   *       are more jobs in the list than the page size, Amazon Kendra returns the NextPage token. Include
   *       the token in the next request to the <code>GetDataSourceSyncJobHistory</code> operation to
   *       return in the next page of jobs.</p>
   */
  NextToken?: string;
}

export namespace ListDataSourceSyncJobsResponse {
  export const filterSensitiveLog = (obj: ListDataSourceSyncJobsResponse): any => ({
    ...obj,
  });
}

export interface ListFaqsRequest {
  /**
   * <p>The index that contains the FAQ lists.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>If the result of the previous request to <code>ListFaqs</code> was truncated, include
   *             the <code>NextToken</code> to fetch the next set of FAQs.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of FAQs to return in the response. If there are fewer results in
   *             the list, this response contains only the actual results.</p>
   */
  MaxResults?: number;
}

export namespace ListFaqsRequest {
  export const filterSensitiveLog = (obj: ListFaqsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a frequently asked questions and answer
 *             contained in an index.</p>
 */
export interface FaqSummary {
  /**
   * <p>The unique identifier of the FAQ.</p>
   */
  Id?: string;

  /**
   * <p>The name that you assigned the FAQ when you created or updated the
   *             FAQ.</p>
   */
  Name?: string;

  /**
   * <p>The current status of the FAQ. When the status is
   *                 <code>ACTIVE</code> the FAQ is ready for use.</p>
   */
  Status?: FaqStatus | string;

  /**
   * <p>The UNIX datetime that the FAQ was added to the index.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The UNIX datetime that the FAQ was last updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>The file type used to create the FAQ. </p>
   */
  FileFormat?: FaqFileFormat | string;
}

export namespace FaqSummary {
  export const filterSensitiveLog = (obj: FaqSummary): any => ({
    ...obj,
  });
}

export interface ListFaqsResponse {
  /**
   * <p>The <code>ListFaqs</code> operation returns a page of FAQs at a time. The maximum size
   *             of the page is set by the <code>MaxResults</code> parameter. If there are more jobs in
   *             the list than the page size, Amazon Kendra returns the <code>NextPage</code> token.
   *             Include the token in the next request to the <code>ListFaqs</code> operation to return
   *             the next page of FAQs.</p>
   */
  NextToken?: string;

  /**
   * <p>information about the FAQs associated with the specified index.</p>
   */
  FaqSummaryItems?: FaqSummary[];
}

export namespace ListFaqsResponse {
  export const filterSensitiveLog = (obj: ListFaqsResponse): any => ({
    ...obj,
  });
}

export interface ListIndicesRequest {
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *       Amazon Kendra returns a pagination token in the response. You can use this pagination token to
   *       retrieve the next set of indexes (<code>DataSourceSummaryItems</code>). </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of data sources to return.</p>
   */
  MaxResults?: number;
}

export namespace ListIndicesRequest {
  export const filterSensitiveLog = (obj: ListIndicesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of information about an index.</p>
 */
export interface IndexConfigurationSummary {
  /**
   * <p>The name of the index.</p>
   */
  Name?: string;

  /**
   * <p>A unique identifier for the index. Use this to identify the index
   *             when you are using operations such as <code>Query</code>,
   *                 <code>DescribeIndex</code>, <code>UpdateIndex</code>, and
   *                 <code>DeleteIndex</code>.</p>
   */
  Id?: string;

  /**
   * <p>Indicates whether the index is a enterprise edition index or a
   *             developer edition index. </p>
   */
  Edition?: IndexEdition | string;

  /**
   * <p>The Unix timestamp when the index was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The Unix timestamp when the index was last updated by the
   *                 <code>UpdateIndex</code> operation.</p>
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The current status of the index. When the status is
   *                 <code>ACTIVE</code>, the index is ready to search.</p>
   */
  Status: IndexStatus | string | undefined;
}

export namespace IndexConfigurationSummary {
  export const filterSensitiveLog = (obj: IndexConfigurationSummary): any => ({
    ...obj,
  });
}

export interface ListIndicesResponse {
  /**
   * <p>An array of summary information for one or more indexes.</p>
   */
  IndexConfigurationSummaryItems?: IndexConfigurationSummary[];

  /**
   * <p>If the response is truncated, Amazon Kendra returns this token that you can use in the
   *       subsequent request to retrieve the next set of indexes.</p>
   */
  NextToken?: string;
}

export namespace ListIndicesResponse {
  export const filterSensitiveLog = (obj: ListIndicesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the index, FAQ, or data source to get a list of tags
   *       for.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags associated with the index, FAQ, or data source.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ResourceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ResourceUnavailableException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceUnavailableException {
  export const filterSensitiveLog = (obj: ResourceUnavailableException): any => ({
    ...obj,
  });
}

export interface ListThesauriRequest {
  /**
   * <p>The identifier of the index associated with the thesaurus to list.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *          Amazon Kendra returns a pagination token in the response. You can use this pagination token to
   *          retrieve the next set of thesauri (<code>ThesaurusSummaryItems</code>).
   *       </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of thesauri to return.</p>
   */
  MaxResults?: number;
}

export namespace ListThesauriRequest {
  export const filterSensitiveLog = (obj: ListThesauriRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An array of summary information for one or more thesauruses.</p>
 */
export interface ThesaurusSummary {
  /**
   * <p>The identifier of the thesaurus.</p>
   */
  Id?: string;

  /**
   * <p>The name of the thesaurus.</p>
   */
  Name?: string;

  /**
   * <p>The status of the thesaurus.</p>
   */
  Status?: ThesaurusStatus | string;

  /**
   * <p>The Unix datetime that the thesaurus was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The Unix datetime that the thesaurus was last updated.</p>
   */
  UpdatedAt?: Date;
}

export namespace ThesaurusSummary {
  export const filterSensitiveLog = (obj: ThesaurusSummary): any => ({
    ...obj,
  });
}

export interface ListThesauriResponse {
  /**
   * <p>If the response is truncated, Amazon Kendra returns this
   *          token that you can use in the subsequent request to
   *          retrieve the next set of thesauri.
   *       </p>
   */
  NextToken?: string;

  /**
   * <p>An array of summary information for one or more thesauruses.</p>
   */
  ThesaurusSummaryItems?: ThesaurusSummary[];
}

export namespace ListThesauriResponse {
  export const filterSensitiveLog = (obj: ListThesauriResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a document attribute</p>
 */
export interface Facet {
  /**
   * <p>The unique key for the document attribute.</p>
   */
  DocumentAttributeKey?: string;
}

export namespace Facet {
  export const filterSensitiveLog = (obj: Facet): any => ({
    ...obj,
  });
}

export enum QueryResultType {
  ANSWER = "ANSWER",
  DOCUMENT = "DOCUMENT",
  QUESTION_ANSWER = "QUESTION_ANSWER",
}

export enum SortOrder {
  ASC = "ASC",
  DESC = "DESC",
}

/**
 * <p>Specifies the document attribute to use to sort the response to a
 *             Amazon Kendra query. You can specify a single attribute for sorting. The
 *             attribute must have the <code>Sortable</code> flag set to
 *                 <code>true</code>, otherwise Amazon Kendra returns an exception.</p>
 *         <p>You can sort attributes of the following types.</p>
 *         <ul>
 *             <li>
 *                 <p>Date value</p>
 *             </li>
 *             <li>
 *                 <p>Long value</p>
 *             </li>
 *             <li>
 *                 <p>String value</p>
 *             </li>
 *          </ul>
 *         <p>You can't sort attributes of the following type.</p>
 *         <ul>
 *             <li>
 *                 <p>String list value</p>
 *             </li>
 *          </ul>
 */
export interface SortingConfiguration {
  /**
   * <p>The name of the document attribute used to sort the response. You
   *             can use any field that has the <code>Sortable</code> flag set to
   *             true.</p>
   *         <p>You can also sort by any of the following built-in
   *             attributes:</p>
   *         <ul>
   *             <li>
   *                 <p>_category</p>
   *             </li>
   *             <li>
   *                 <p>_created_at</p>
   *             </li>
   *             <li>
   *                 <p>_last_updated_at</p>
   *             </li>
   *             <li>
   *                 <p>_version</p>
   *             </li>
   *             <li>
   *                 <p>_view_count</p>
   *             </li>
   *          </ul>
   */
  DocumentAttributeKey: string | undefined;

  /**
   * <p>The order that the results should be returned in. In case of ties,
   *             the relevance assigned to the result by Amazon Kendra is used as the
   *             tie-breaker.</p>
   */
  SortOrder: SortOrder | string | undefined;
}

export namespace SortingConfiguration {
  export const filterSensitiveLog = (obj: SortingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the user context for a Amazon Kendra index.</p>
 */
export interface UserContext {
  /**
   * <p>The user context token. It must be a JWT or a JSON token.</p>
   */
  Token?: string;
}

export namespace UserContext {
  export const filterSensitiveLog = (obj: UserContext): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the count of documents that match a particular attribute
 *             when doing a faceted search.</p>
 */
export interface DocumentAttributeValueCountPair {
  /**
   * <p>The value of the attribute. For example, "HR."</p>
   */
  DocumentAttributeValue?: DocumentAttributeValue;

  /**
   * <p>The number of documents in the response that have the attribute
   *             value for the key.</p>
   */
  Count?: number;
}

export namespace DocumentAttributeValueCountPair {
  export const filterSensitiveLog = (obj: DocumentAttributeValueCountPair): any => ({
    ...obj,
    ...(obj.DocumentAttributeValue && {
      DocumentAttributeValue: DocumentAttributeValue.filterSensitiveLog(obj.DocumentAttributeValue),
    }),
  });
}

/**
 * <p>The facet values for the documents in the response.</p>
 */
export interface FacetResult {
  /**
   * <p>The key for the facet values. This is the same as the
   *             <code>DocumentAttributeKey</code> provided in the query.</p>
   */
  DocumentAttributeKey?: string;

  /**
   * <p>The data type of the facet value. This is the same as the type
   *          defined for the index field when it was created.</p>
   */
  DocumentAttributeValueType?: DocumentAttributeValueType | string;

  /**
   * <p>An array of key/value pairs, where the key is the value of the
   *          attribute and the count is the number of documents that share the key
   *          value.</p>
   */
  DocumentAttributeValueCountPairs?: DocumentAttributeValueCountPair[];
}

export namespace FacetResult {
  export const filterSensitiveLog = (obj: FacetResult): any => ({
    ...obj,
    ...(obj.DocumentAttributeValueCountPairs && {
      DocumentAttributeValueCountPairs: obj.DocumentAttributeValueCountPairs.map((item) =>
        DocumentAttributeValueCountPair.filterSensitiveLog(item)
      ),
    }),
  });
}

export enum ScoreConfidence {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  VERY_HIGH = "VERY_HIGH",
}

/**
 * <p>Provides a relative ranking that indicates how confident Amazon Kendra is
 *          that the response matches the query.</p>
 */
export interface ScoreAttributes {
  /**
   * <p>A relative ranking for how well the response matches the
   *          query.</p>
   */
  ScoreConfidence?: ScoreConfidence | string;
}

export namespace ScoreAttributes {
  export const filterSensitiveLog = (obj: ScoreAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>A single query result.</p>
 *          <p>A query result contains information about a document returned by the
 *          query. This includes the original location of the document, a list of
 *          attributes assigned to the document, and relevant text from the
 *          document that satisfies the query.</p>
 */
export interface QueryResultItem {
  /**
   * <p>The unique identifier for the query result.</p>
   */
  Id?: string;

  /**
   * <p>The type of document. </p>
   */
  Type?: QueryResultType | string;

  /**
   * <p>One or more additional attributes associated with the query
   *          result.</p>
   */
  AdditionalAttributes?: AdditionalResultAttribute[];

  /**
   * <p>The unique identifier for the document.</p>
   */
  DocumentId?: string;

  /**
   * <p>The title of the document. Contains the text of the title and
   *          information for highlighting the relevant terms in the title.</p>
   */
  DocumentTitle?: TextWithHighlights;

  /**
   * <p>An extract of the text in the document. Contains information about
   *          highlighting the relevant terms in the excerpt.</p>
   */
  DocumentExcerpt?: TextWithHighlights;

  /**
   * <p>The URI of the original location of the document.</p>
   */
  DocumentURI?: string;

  /**
   * <p>An array of document attributes for the document that the query
   *          result maps to. For example, the document author (Author) or the source
   *          URI (SourceUri) of the document.</p>
   */
  DocumentAttributes?: DocumentAttribute[];

  /**
   * <p>Indicates the confidence that Amazon Kendra has that a result matches the
   *          query that you provided. Each result is placed into a bin that
   *          indicates the confidence, <code>VERY_HIGH</code>, <code>HIGH</code>,
   *             <code>MEDIUM</code> and <code>LOW</code>. You can use the score to
   *          determine if a response meets the confidence needed for your
   *          application.</p>
   *          <p>The field is only set to <code>LOW</code> when the <code>Type</code>
   *          field is set to <code>DOCUMENT</code> and Amazon Kendra is not confident that
   *          the result matches the query.</p>
   */
  ScoreAttributes?: ScoreAttributes;

  /**
   * <p>A token that identifies a particular result from a particular query.
   *          Use this token to provide click-through feedback for the result. For
   *          more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/submitting-feedback.html"> Submitting feedback
   *          </a>.</p>
   */
  FeedbackToken?: string;
}

export namespace QueryResultItem {
  export const filterSensitiveLog = (obj: QueryResultItem): any => ({
    ...obj,
    ...(obj.DocumentAttributes && {
      DocumentAttributes: obj.DocumentAttributes.map((item) => DocumentAttribute.filterSensitiveLog(item)),
    }),
  });
}

export interface QueryResult {
  /**
   * <p>The unique identifier for the search. You use <code>QueryId</code> to identify the
   *          search when using the feedback API.</p>
   */
  QueryId?: string;

  /**
   * <p>The results of the search.</p>
   */
  ResultItems?: QueryResultItem[];

  /**
   * <p>Contains the facet results. A <code>FacetResult</code> contains the counts for each
   *          attribute key that was specified in the <code>Facets</code> input parameter.</p>
   */
  FacetResults?: FacetResult[];

  /**
   * <p>The total number of items found by the search; however, you can only retrieve up to 100
   *          items. For example, if the search found 192 items, you can only retrieve the first 100 of
   *          the items.</p>
   */
  TotalNumberOfResults?: number;
}

export namespace QueryResult {
  export const filterSensitiveLog = (obj: QueryResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

export interface StartDataSourceSyncJobRequest {
  /**
   * <p>The identifier of the data source to synchronize.</p>
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the index that contains the data source.</p>
   */
  IndexId: string | undefined;
}

export namespace StartDataSourceSyncJobRequest {
  export const filterSensitiveLog = (obj: StartDataSourceSyncJobRequest): any => ({
    ...obj,
  });
}

export interface StartDataSourceSyncJobResponse {
  /**
   * <p>Identifies a particular synchronization job.</p>
   */
  ExecutionId?: string;
}

export namespace StartDataSourceSyncJobResponse {
  export const filterSensitiveLog = (obj: StartDataSourceSyncJobResponse): any => ({
    ...obj,
  });
}

export interface StopDataSourceSyncJobRequest {
  /**
   * <p>The identifier of the data source for which to stop the synchronization jobs.</p>
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the index that contains the data source.</p>
   */
  IndexId: string | undefined;
}

export namespace StopDataSourceSyncJobRequest {
  export const filterSensitiveLog = (obj: StopDataSourceSyncJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Gathers information about when a particular result was clicked by
 *             a user. Your application uses the <a>SubmitFeedback</a>
 *             operation to provide click information.</p>
 */
export interface ClickFeedback {
  /**
   * <p>The unique identifier of the search result that was
   *             clicked.</p>
   */
  ResultId: string | undefined;

  /**
   * <p>The Unix timestamp of the date and time that the result was
   *             clicked.</p>
   */
  ClickTime: Date | undefined;
}

export namespace ClickFeedback {
  export const filterSensitiveLog = (obj: ClickFeedback): any => ({
    ...obj,
  });
}

export enum RelevanceType {
  NOT_RELEVANT = "NOT_RELEVANT",
  RELEVANT = "RELEVANT",
}

/**
 * <p>Provides feedback on how relevant a document is to a search. Your
 *             application uses the <a>SubmitFeedback</a> operation to
 *             provide relevance information.</p>
 */
export interface RelevanceFeedback {
  /**
   * <p>The unique identifier of the search result that the user provided
   *             relevance feedback for.</p>
   */
  ResultId: string | undefined;

  /**
   * <p>Whether to document was relevant or not relevant to the
   *             search.</p>
   */
  RelevanceValue: RelevanceType | string | undefined;
}

export namespace RelevanceFeedback {
  export const filterSensitiveLog = (obj: RelevanceFeedback): any => ({
    ...obj,
  });
}

export interface SubmitFeedbackRequest {
  /**
   * <p>The identifier of the index that was queried.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The identifier of the specific query for which you are submitting feedback. The
   *         query ID is returned in the response to the  operation.</p>
   */
  QueryId: string | undefined;

  /**
   * <p>Tells Amazon Kendra that a particular search result link was chosen by
   *         the user. </p>
   */
  ClickFeedbackItems?: ClickFeedback[];

  /**
   * <p>Provides Amazon Kendra with relevant or not relevant feedback for whether a particular
   *         item was relevant to the search.</p>
   */
  RelevanceFeedbackItems?: RelevanceFeedback[];
}

export namespace SubmitFeedbackRequest {
  export const filterSensitiveLog = (obj: SubmitFeedbackRequest): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the index, FAQ, or data source to tag.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tag keys to add to the index, FAQ, or data source. If a tag already exists, the
   *       existing value is replaced with the new value.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the index, FAQ, or data source to remove the tag
   *       from.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tag keys to remove from the index, FAQ, or data source. If a tag key does not
   *       exist on the resource, it is ignored.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateDataSourceRequest {
  /**
   * <p>The unique identifier of the data source to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the data source to update. The name of the data source can't be updated. To
   *       rename a data source you must delete the data source and re-create it.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the index that contains the data source to update.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>Configuration information for a Amazon Kendra data source.</p>
   */
  Configuration?: DataSourceConfiguration;

  /**
   * <p>The new description for the data source.</p>
   */
  Description?: string;

  /**
   * <p>The new update schedule for the data source.</p>
   */
  Schedule?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the new role to use when the data source is accessing
   *       resources on your behalf.</p>
   */
  RoleArn?: string;
}

export namespace UpdateDataSourceRequest {
  export const filterSensitiveLog = (obj: UpdateDataSourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateIndexRequest {
  /**
   * <p>The identifier of the index to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the index to update.</p>
   */
  Name?: string;

  /**
   * <p>A new IAM role that gives Amazon Kendra permission to access your Amazon CloudWatch
   *       logs.</p>
   */
  RoleArn?: string;

  /**
   * <p>A new description for the index.</p>
   */
  Description?: string;

  /**
   * <p>The document metadata to update. </p>
   */
  DocumentMetadataConfigurationUpdates?: DocumentMetadataConfiguration[];

  /**
   * <p>Sets the number of addtional storage and query capacity units that should be used by the
   *       index. You can change the capacity of the index up to 5 times per day.</p>
   *          <p>If you are using extra storage units, you can't reduce the storage capacity below that
   *       required to meet the storage needs for your index.</p>
   */
  CapacityUnits?: CapacityUnitsConfiguration;

  /**
   * <p>The user token configuration.</p>
   */
  UserTokenConfigurations?: UserTokenConfiguration[];

  /**
   * <p>The user user token context policy.</p>
   */
  UserContextPolicy?: UserContextPolicy | string;
}

export namespace UpdateIndexRequest {
  export const filterSensitiveLog = (obj: UpdateIndexRequest): any => ({
    ...obj,
  });
}

export interface UpdateThesaurusRequest {
  /**
   * <p>The identifier of the thesaurus to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The updated name of the thesaurus.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the index associated with the thesaurus to update.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The updated description of the thesaurus.</p>
   */
  Description?: string;

  /**
   * <p>The updated role ARN of the thesaurus.</p>
   */
  RoleArn?: string;

  /**
   * <p>Information required to find a specific file in an Amazon S3
   *             bucket.</p>
   */
  SourceS3Path?: S3Path;
}

export namespace UpdateThesaurusRequest {
  export const filterSensitiveLog = (obj: UpdateThesaurusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides filtering the query results based on document
 *          attributes.</p>
 *          <p>When you use the <code>AndAllFilters</code> or
 *             <code>OrAllFilters</code>, filters you can use 2 layers under the
 *          first attribute filter. For example, you can use:</p>
 *          <p>
 *             <code><AndAllFilters></code>
 *          </p>
 *          <ol>
 *             <li>
 *                <p>
 *                   <code> <OrAllFilters></code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code> <EqualTo></code>
 *                </p>
 *             </li>
 *          </ol>
 *          <p>If you use more than 2 layers, you receive a
 *             <code>ValidationException</code> exception with the message
 *             "<code>AttributeFilter</code> cannot have a depth of more than
 *          2."</p>
 */
export interface AttributeFilter {
  /**
   * <p>Performs a logical <code>AND</code> operation on all supplied
   *          filters.</p>
   */
  AndAllFilters?: AttributeFilter[];

  /**
   * <p>Performs a logical <code>OR</code> operation on all supplied
   *          filters.</p>
   */
  OrAllFilters?: AttributeFilter[];

  /**
   * <p>Performs a logical <code>NOT</code> operation on all supplied
   *          filters.</p>
   */
  NotFilter?: AttributeFilter;

  /**
   * <p>Performs an equals operation on two document attributes.</p>
   */
  EqualsTo?: DocumentAttribute;

  /**
   * <p>Returns true when a document contains all of the specified document
   *          attributes. This filter is only applicable to
   *             <code>StringListValue</code> metadata.</p>
   */
  ContainsAll?: DocumentAttribute;

  /**
   * <p>Returns true when a document contains any of the specified document
   *          attributes. This filter is only applicable to
   *             <code>StringListValue</code> metadata.</p>
   */
  ContainsAny?: DocumentAttribute;

  /**
   * <p>Performs a greater than operation on two document attributes. Use
   *          with a document attribute of type <code>Integer</code> or
   *             <code>Long</code>.</p>
   */
  GreaterThan?: DocumentAttribute;

  /**
   * <p>Performs a greater or equals than operation on two document
   *          attributes. Use with a document attribute of type <code>Integer</code>
   *          or <code>Long</code>.</p>
   */
  GreaterThanOrEquals?: DocumentAttribute;

  /**
   * <p>Performs a less than operation on two document attributes. Use with
   *          a document attribute of type <code>Integer</code> or
   *          <code>Long</code>.</p>
   */
  LessThan?: DocumentAttribute;

  /**
   * <p>Performs a less than or equals operation on two document attributes.
   *          Use with a document attribute of type <code>Integer</code> or
   *             <code>Long</code>.</p>
   */
  LessThanOrEquals?: DocumentAttribute;
}

export namespace AttributeFilter {
  export const filterSensitiveLog = (obj: AttributeFilter): any => ({
    ...obj,
    ...(obj.AndAllFilters && {
      AndAllFilters: obj.AndAllFilters.map((item) => AttributeFilter.filterSensitiveLog(item)),
    }),
    ...(obj.OrAllFilters && { OrAllFilters: obj.OrAllFilters.map((item) => AttributeFilter.filterSensitiveLog(item)) }),
    ...(obj.NotFilter && { NotFilter: AttributeFilter.filterSensitiveLog(obj.NotFilter) }),
    ...(obj.EqualsTo && { EqualsTo: DocumentAttribute.filterSensitiveLog(obj.EqualsTo) }),
    ...(obj.ContainsAll && { ContainsAll: DocumentAttribute.filterSensitiveLog(obj.ContainsAll) }),
    ...(obj.ContainsAny && { ContainsAny: DocumentAttribute.filterSensitiveLog(obj.ContainsAny) }),
    ...(obj.GreaterThan && { GreaterThan: DocumentAttribute.filterSensitiveLog(obj.GreaterThan) }),
    ...(obj.GreaterThanOrEquals && {
      GreaterThanOrEquals: DocumentAttribute.filterSensitiveLog(obj.GreaterThanOrEquals),
    }),
    ...(obj.LessThan && { LessThan: DocumentAttribute.filterSensitiveLog(obj.LessThan) }),
    ...(obj.LessThanOrEquals && { LessThanOrEquals: DocumentAttribute.filterSensitiveLog(obj.LessThanOrEquals) }),
  });
}

export interface QueryRequest {
  /**
   * <p>The unique identifier of the index to search. The identifier is returned in the response
   *          from the  operation.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The text to search for.</p>
   */
  QueryText: string | undefined;

  /**
   * <p>Enables filtered searches based on document attributes. You can only provide one
   *          attribute filter; however, the <code>AndAllFilters</code>, <code>NotFilter</code>, and
   *             <code>OrAllFilters</code> parameters contain a list of other filters.</p>
   *          <p>The <code>AttributeFilter</code> parameter enables you to create a set of filtering
   *          rules that a document must satisfy to be included in the query results.</p>
   */
  AttributeFilter?: AttributeFilter;

  /**
   * <p>An array of documents attributes. Amazon Kendra returns a count for each attribute key
   *          specified. You can use this information to help narrow the search for your user.</p>
   */
  Facets?: Facet[];

  /**
   * <p>An array of document attributes to include in the response. No other document attributes
   *          are included in the response. By default all document attributes are included in the
   *          response. </p>
   */
  RequestedDocumentAttributes?: string[];

  /**
   * <p>Sets the type of query. Only results for the specified query type are returned.</p>
   */
  QueryResultTypeFilter?: QueryResultType | string;

  /**
   * <p>Query results are returned in pages the size of the <code>PageSize</code> parameter. By
   *          default, Amazon Kendra returns the first page of results. Use this parameter to get result
   *          pages after the first one.</p>
   */
  PageNumber?: number;

  /**
   * <p>Sets the number of results that are returned in each page of results. The default page
   *          size is 10. The maximum number of results returned is 100. If you ask for more than 100
   *          results, only 100 are returned.</p>
   */
  PageSize?: number;

  /**
   * <p>Provides information that determines how the results of the query are sorted. You can
   *          set the field that Amazon Kendra should sort the results on, and specify whether the results should
   *          be sorted in ascending or descending order. In the case of ties in sorting the results, the
   *          results are sorted by relevance.</p>
   *          <p>If you don't provide sorting configuration, the results are sorted by the relevance that
   *          Amazon Kendra determines for the result.</p>
   */
  SortingConfiguration?: SortingConfiguration;

  /**
   * <p>The user context token.</p>
   */
  UserContext?: UserContext;

  /**
   * <p>Provides an identifier for a specific user. The <code>VisitorId</code>
   *       should be a unique identifier, such as a GUID. Don't use personally
   *       identifiable information, such as the user's email address, as the
   *       <code>VisitorId</code>.</p>
   */
  VisitorId?: string;
}

export namespace QueryRequest {
  export const filterSensitiveLog = (obj: QueryRequest): any => ({
    ...obj,
    ...(obj.AttributeFilter && { AttributeFilter: AttributeFilter.filterSensitiveLog(obj.AttributeFilter) }),
  });
}
