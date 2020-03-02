import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Access Control List files for the documents in a data source.</p>
 */
export interface AccessControlListConfiguration {
  __type?: "AccessControlListConfiguration";
  /**
   * <p>Path to the AWS S3 bucket that contains the ACL files.</p>
   */
  KeyPath?: string;
}

export namespace AccessControlListConfiguration {
  export function isa(o: any): o is AccessControlListConfiguration {
    return __isa(o, "AccessControlListConfiguration");
  }
}

/**
 * <p></p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return __isa(o, "AccessDeniedException");
  }
}

/**
 * <p>Provides information about the column that should be used for filtering the query
 *             response by groups.</p>
 */
export interface AclConfiguration {
  __type?: "AclConfiguration";
  /**
   * <p>A list of groups, separated by semi-colons, that filters a query response based on
   *             user context. The document is only returned to users that are in one of the groups
   *             specified in the <code>UserContext</code> field of the <a>Query</a>
   *             operation.</p>
   */
  AllowedGroupsColumnName: string | undefined;
}

export namespace AclConfiguration {
  export function isa(o: any): o is AclConfiguration {
    return __isa(o, "AclConfiguration");
  }
}

/**
 * <p></p>
 */
export interface AdditionalResultAttribute {
  __type?: "AdditionalResultAttribute";
  /**
   * <p></p>
   */
  Key: string | undefined;

  /**
   * <p></p>
   */
  Value: AdditionalResultAttributeValue | undefined;

  /**
   * <p></p>
   */
  ValueType: AdditionalResultAttributeValueType | string | undefined;
}

export namespace AdditionalResultAttribute {
  export function isa(o: any): o is AdditionalResultAttribute {
    return __isa(o, "AdditionalResultAttribute");
  }
}

/**
 * <p>An attribute returned with a document from a search.</p>
 */
export interface AdditionalResultAttributeValue {
  __type?: "AdditionalResultAttributeValue";
  /**
   * <p>The text associated with the attribute and information about the highlight to apply to
   *             the text.</p>
   */
  TextWithHighlightsValue?: TextWithHighlights;
}

export namespace AdditionalResultAttributeValue {
  export function isa(o: any): o is AdditionalResultAttributeValue {
    return __isa(o, "AdditionalResultAttributeValue");
  }
}

export enum AdditionalResultAttributeValueType {
  TEXT_WITH_HIGHLIGHTS_VALUE = "TEXT_WITH_HIGHLIGHTS_VALUE"
}

/**
 * <p>Provides filtering the query results based on document attributes.</p>
 */
export interface AttributeFilter {
  __type?: "AttributeFilter";
  /**
   * <p>Performs a logical <code>AND</code> operation on all supplied filters.</p>
   */
  AndAllFilters?: Array<AttributeFilter>;

  /**
   * <p>Returns true when a document contains all of the specified document attributes.</p>
   */
  ContainsAll?: DocumentAttribute;

  /**
   * <p>Returns true when a document contains any of the specified document attributes.</p>
   */
  ContainsAny?: DocumentAttribute;

  /**
   * <p>Performs an equals operation on two document attributes.</p>
   */
  EqualsTo?: DocumentAttribute;

  /**
   * <p>Performs a greater than operation on two document attributes. Use with a document
   *          attribute of type <code>Integer</code> or <code>Long</code>.</p>
   */
  GreaterThan?: DocumentAttribute;

  /**
   * <p>Performs a greater or equals than operation on two document attributes. Use with a
   *          document attribute of type <code>Integer</code> or <code>Long</code>.</p>
   */
  GreaterThanOrEquals?: DocumentAttribute;

  /**
   * <p>Performs a less than operation on two document attributes. Use with a document attribute
   *          of type <code>Integer</code> or <code>Long</code>.</p>
   */
  LessThan?: DocumentAttribute;

  /**
   * <p>Performs a less than or equals operation on two document attributes. Use with a document
   *          attribute of type <code>Integer</code> or <code>Long</code>.</p>
   */
  LessThanOrEquals?: DocumentAttribute;

  /**
   * <p>Performs a logical <code>NOT</code> operation on all supplied filters.</p>
   */
  NotFilter?: AttributeFilter;

  /**
   * <p>Performs a logical <code>OR</code> operation on all supplied filters.</p>
   */
  OrAllFilters?: Array<AttributeFilter>;
}

export namespace AttributeFilter {
  export function isa(o: any): o is AttributeFilter {
    return __isa(o, "AttributeFilter");
  }
}

export interface BatchDeleteDocumentRequest {
  __type?: "BatchDeleteDocumentRequest";
  /**
   * <p>One or more identifiers for documents to delete from the index.</p>
   */
  DocumentIdList: Array<string> | undefined;

  /**
   * <p>The identifier of the index that contains the documents to delete.</p>
   */
  IndexId: string | undefined;
}

export namespace BatchDeleteDocumentRequest {
  export function isa(o: any): o is BatchDeleteDocumentRequest {
    return __isa(o, "BatchDeleteDocumentRequest");
  }
}

export interface BatchDeleteDocumentResponse {
  __type?: "BatchDeleteDocumentResponse";
  /**
   * <p>A list of documents that could not be removed from the index. Each entry contains an error
   *       message that indicates why the document couldn't be removed from the index.</p>
   */
  FailedDocuments?: Array<BatchDeleteDocumentResponseFailedDocument>;
}

export namespace BatchDeleteDocumentResponse {
  export function isa(o: any): o is BatchDeleteDocumentResponse {
    return __isa(o, "BatchDeleteDocumentResponse");
  }
}

/**
 * <p>Provides information about documents that could not be removed from an index by the
 *                 <a>BatchDeleteDocument</a> operation.</p>
 */
export interface BatchDeleteDocumentResponseFailedDocument {
  __type?: "BatchDeleteDocumentResponseFailedDocument";
  /**
   * <p>The error code for why the document couldn't be removed from the index.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>An explanation for why the document couldn't be removed from the index.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The identifier of the document that couldn't be removed from the index.</p>
   */
  Id?: string;
}

export namespace BatchDeleteDocumentResponseFailedDocument {
  export function isa(o: any): o is BatchDeleteDocumentResponseFailedDocument {
    return __isa(o, "BatchDeleteDocumentResponseFailedDocument");
  }
}

export interface BatchPutDocumentRequest {
  __type?: "BatchPutDocumentRequest";
  /**
   * <p>One or more documents to add to the index. </p>
   *          <p>Each document is limited to 5 Mb, the total size of the list is limited to 50 Mb.</p>
   */
  Documents: Array<Document> | undefined;

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
}

export namespace BatchPutDocumentRequest {
  export function isa(o: any): o is BatchPutDocumentRequest {
    return __isa(o, "BatchPutDocumentRequest");
  }
}

export interface BatchPutDocumentResponse {
  __type?: "BatchPutDocumentResponse";
  /**
   * <p>A list of documents that were not added to the index because the document failed a
   *       validation check. Each document contains an error message that indicates why the document
   *       couldn't be added to the index.</p>
   *          <p>If there was an error adding a document to an index the error is reported in your AWS
   *       CloudWatch log.</p>
   */
  FailedDocuments?: Array<BatchPutDocumentResponseFailedDocument>;
}

export namespace BatchPutDocumentResponse {
  export function isa(o: any): o is BatchPutDocumentResponse {
    return __isa(o, "BatchPutDocumentResponse");
  }
}

/**
 * <p>Provides information about a document that could not be indexed.</p>
 */
export interface BatchPutDocumentResponseFailedDocument {
  __type?: "BatchPutDocumentResponseFailedDocument";
  /**
   * <p>The type of error that caused the document to fail to be indexed.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>A description of the reason why the document could not be indexed.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The unique identifier of the document.</p>
   */
  Id?: string;
}

export namespace BatchPutDocumentResponseFailedDocument {
  export function isa(o: any): o is BatchPutDocumentResponseFailedDocument {
    return __isa(o, "BatchPutDocumentResponseFailedDocument");
  }
}

/**
 * <p>Gathers information about when a particular result was clicked by a user. Your
 *             application uses the <a>SubmitFeedback</a> operation to provide click
 *             information.</p>
 */
export interface ClickFeedback {
  __type?: "ClickFeedback";
  /**
   * <p>The Unix timestamp of the data and time that the result was clicked.</p>
   */
  ClickTime: Date | undefined;

  /**
   * <p>The unique identifier of the search result that was clicked.</p>
   */
  ResultId: string | undefined;
}

export namespace ClickFeedback {
  export function isa(o: any): o is ClickFeedback {
    return __isa(o, "ClickFeedback");
  }
}

/**
 * <p>Provides information about how Amazon Kendra should use the columns of a database in an
 *             index.</p>
 */
export interface ColumnConfiguration {
  __type?: "ColumnConfiguration";
  /**
   * <p>One to five columns that indicate when a document in the database has changed.</p>
   */
  ChangeDetectingColumns: Array<string> | undefined;

  /**
   * <p>The column that contains the contents of the document.</p>
   */
  DocumentDataColumnName: string | undefined;

  /**
   * <p>The column that provides the document's unique identifier.</p>
   */
  DocumentIdColumnName: string | undefined;

  /**
   * <p>The column that contains the title of the document.</p>
   */
  DocumentTitleColumnName?: string;

  /**
   * <p>An array of objects that map database column names to the corresponding fields in an
   *             index. You must first create the fields in the index using the <a>UpdateIndex</a> operation.</p>
   */
  FieldMappings?: Array<DataSourceToIndexFieldMapping>;
}

export namespace ColumnConfiguration {
  export function isa(o: any): o is ColumnConfiguration {
    return __isa(o, "ColumnConfiguration");
  }
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
  export function isa(o: any): o is ConflictException {
    return __isa(o, "ConflictException");
  }
}

/**
 * <p>Provides the information necessary to connect to a database.</p>
 */
export interface ConnectionConfiguration {
  __type?: "ConnectionConfiguration";
  /**
   * <p>The name of the host for the database. Can be either a string
   *             (host.subdomain.domain.tld) or an IPv4 or IPv6 address.</p>
   */
  DatabaseHost: string | undefined;

  /**
   * <p>The name of the database containing the document data.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The port that the database uses for connections.</p>
   */
  DatabasePort: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of credentials stored in AWS Secrets Manager. The
   *             credentials should be a user/password pair. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-database.html">Using a
   *                 Database Data Source</a>. For more information about AWS Secrets Manager, see
   *                 <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"> What
   *                 Is AWS Secrets Manager </a> in the <i>AWS Secrets Manager</i> user
   *             guide.</p>
   */
  SecretArn: string | undefined;

  /**
   * <p>The name of the table that contains the document data.</p>
   */
  TableName: string | undefined;
}

export namespace ConnectionConfiguration {
  export function isa(o: any): o is ConnectionConfiguration {
    return __isa(o, "ConnectionConfiguration");
  }
}

export enum ContentType {
  HTML = "HTML",
  MS_WORD = "MS_WORD",
  PDF = "PDF",
  PLAIN_TEXT = "PLAIN_TEXT",
  PPT = "PPT"
}

export interface CreateDataSourceRequest {
  __type?: "CreateDataSourceRequest";
  /**
   * <p>The connector configuration information that is required to access the repository.</p>
   */
  Configuration: DataSourceConfiguration | undefined;

  /**
   * <p>A description for the data source.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the index that should be associated with this data source.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>A unique name for the data source. A data source name can't be changed without deleting
   *       and recreating the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a role with permission to access the data source. For
   *       more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM
   *         Roles for Amazon Kendra</a>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Sets the frequency that Amazon Kendra will check the documents in your repository and
   *       update the index. If you don't set a schedule Amazon Kendra will not periodically update the
   *       index. You can call the <code>StartDataSourceSyncJob</code> operation to update the
   *       index.</p>
   */
  Schedule?: string;

  /**
   * <p>The type of repository that contains the data source.</p>
   */
  Type: DataSourceType | string | undefined;
}

export namespace CreateDataSourceRequest {
  export function isa(o: any): o is CreateDataSourceRequest {
    return __isa(o, "CreateDataSourceRequest");
  }
}

export interface CreateDataSourceResponse {
  __type?: "CreateDataSourceResponse";
  /**
   * <p>A unique identifier for the data source.</p>
   */
  Id: string | undefined;
}

export namespace CreateDataSourceResponse {
  export function isa(o: any): o is CreateDataSourceResponse {
    return __isa(o, "CreateDataSourceResponse");
  }
}

export interface CreateFaqRequest {
  __type?: "CreateFaqRequest";
  /**
   * <p>A description of the FAQ.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the index that contains the FAQ.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The name that should be associated with the FAQ.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a role with permission to
   *             access the S3 bucket that contains the FAQs. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM Roles for
   *                 Amazon Kendra</a>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The S3 location of the FAQ input data.</p>
   */
  S3Path: S3Path | undefined;
}

export namespace CreateFaqRequest {
  export function isa(o: any): o is CreateFaqRequest {
    return __isa(o, "CreateFaqRequest");
  }
}

export interface CreateFaqResponse {
  __type?: "CreateFaqResponse";
  /**
   * <p>The unique identifier of the FAQ.</p>
   */
  Id?: string;
}

export namespace CreateFaqResponse {
  export function isa(o: any): o is CreateFaqResponse {
    return __isa(o, "CreateFaqResponse");
  }
}

export interface CreateIndexRequest {
  __type?: "CreateIndexRequest";
  /**
   * <p>A description for the index.</p>
   */
  Description?: string;

  /**
   * <p>The name for the new index.</p>
   */
  Name: string | undefined;

  /**
   * <p>An IAM role that gives Amazon Kendra permissions to access your Amazon CloudWatch logs and
   *       metrics. This is also the role used when you use the <code>BatchPutDocument</code> operation
   *       to index documents from an Amazon S3 bucket.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The identifier of the AWS KMS customer managed key (CMK) to use to encrypt data indexed by Amazon Kendra.
   *     Amazon Kendra doesn't support asymmetric CMKs.</p>
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}

export namespace CreateIndexRequest {
  export function isa(o: any): o is CreateIndexRequest {
    return __isa(o, "CreateIndexRequest");
  }
}

export interface CreateIndexResponse {
  __type?: "CreateIndexResponse";
  /**
   * <p>The unique identifier of the index. Use this identifier when you query an index, set up a
   *       data source, or index a document.</p>
   */
  Id?: string;
}

export namespace CreateIndexResponse {
  export function isa(o: any): o is CreateIndexResponse {
    return __isa(o, "CreateIndexResponse");
  }
}

/**
 * <p>Configuration information for a Amazon Kendra data source.</p>
 */
export interface DataSourceConfiguration {
  __type?: "DataSourceConfiguration";
  /**
   * <p>Provides information necessary to create a connector for a database.</p>
   */
  DatabaseConfiguration?: DatabaseConfiguration;

  /**
   * <p>Provides information to create a connector for a document repository in an Amazon S3
   *             bucket.</p>
   */
  S3Configuration?: S3DataSourceConfiguration;

  /**
   * <p>Provides information necessary to create a connector for a Microsoft SharePoint
   *             site.</p>
   */
  SharePointConfiguration?: SharePointConfiguration;
}

export namespace DataSourceConfiguration {
  export function isa(o: any): o is DataSourceConfiguration {
    return __isa(o, "DataSourceConfiguration");
  }
}

export enum DataSourceStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING"
}

/**
 * <p>Summary information for a Amazon Kendra data source. Returned in a call to .</p>
 */
export interface DataSourceSummary {
  __type?: "DataSourceSummary";
  /**
   * <p>The UNIX datetime that the data source was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data source.</p>
   */
  Id?: string;

  /**
   * <p>The name of the data source.</p>
   */
  Name?: string;

  /**
   * <p>The status of the data source. When the status is <code>ATIVE</code> the data source
   *             is ready to use.</p>
   */
  Status?: DataSourceStatus | string;

  /**
   * <p>The type of the data source.</p>
   */
  Type?: DataSourceType | string;

  /**
   * <p>The UNIX datetime that the data source was lasted updated. </p>
   */
  UpdatedAt?: Date;
}

export namespace DataSourceSummary {
  export function isa(o: any): o is DataSourceSummary {
    return __isa(o, "DataSourceSummary");
  }
}

/**
 * <p>Provides information about a synchronization job.</p>
 */
export interface DataSourceSyncJob {
  __type?: "DataSourceSyncJob";
  /**
   * <p>If the reason that the synchronization failed is due to an error with the underlying
   *             data source, this field contains a code that identifies the error.</p>
   */
  DataSourceErrorCode?: string;

  /**
   * <p>The UNIX datetime that the synchronization job was completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>If the <code>Status</code> field is set to <code>FAILED</code>, the
   *                 <code>ErrorCode</code> field contains a the reason that the synchronization
   *             failed.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>If the <code>Status</code> field is set to <code>ERROR</code>, the
   *                 <code>ErrorMessage</code> field contains a description of the error that caused the
   *             synchronization to fail.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>A unique identifier for the synchronization job.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The UNIX datetime that the synchronization job was started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The execution status of the synchronization job. When the <code>Status</code> field is
   *             set to <code>SUCCEEDED</code>, the synchronization job is done. If the status code is
   *             set to <code>FAILED</code>, the <code>ErrorCode</code> and <code>ErrorMessage</code>
   *             fields give you the reason for the failure.</p>
   */
  Status?: DataSourceSyncJobStatus | string;
}

export namespace DataSourceSyncJob {
  export function isa(o: any): o is DataSourceSyncJob {
    return __isa(o, "DataSourceSyncJob");
  }
}

export enum DataSourceSyncJobStatus {
  ABORTED = "ABORTED",
  FAILED = "FAILED",
  INCOMPLETE = "INCOMPLETE",
  STOPPING = "STOPPING",
  SUCCEEDED = "SUCCEEDED",
  SYNCING = "SYNCING"
}

/**
 * <p>Maps a column or attribute in the data source to an index field. You must first create
 *             the fields in the index using the <a>UpdateIndex</a> operation.</p>
 */
export interface DataSourceToIndexFieldMapping {
  __type?: "DataSourceToIndexFieldMapping";
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
  export function isa(o: any): o is DataSourceToIndexFieldMapping {
    return __isa(o, "DataSourceToIndexFieldMapping");
  }
}

export enum DataSourceType {
  DATABASE = "DATABASE",
  S3 = "S3",
  SHAREPOINT = "SHAREPOINT"
}

/**
 * <p>Provides information for connecting to an Amazon VPC.</p>
 */
export interface DataSourceVpcConfiguration {
  __type?: "DataSourceVpcConfiguration";
  /**
   * <p>A list of identifiers of security groups within your Amazon VPC. The security groups
   *             should enable Amazon Kendra to connect to the data source.</p>
   */
  SecurityGroupIds: Array<string> | undefined;

  /**
   * <p>A list of identifiers for subnets within your Amazon VPC. The subnets should be able
   *             to connect to each other in the VPC, and they should have outgoing access to the
   *             Internet through a NAT device.</p>
   */
  SubnetIds: Array<string> | undefined;
}

export namespace DataSourceVpcConfiguration {
  export function isa(o: any): o is DataSourceVpcConfiguration {
    return __isa(o, "DataSourceVpcConfiguration");
  }
}

/**
 * <p>Provides the information necessary to connect a database to an index. </p>
 */
export interface DatabaseConfiguration {
  __type?: "DatabaseConfiguration";
  /**
   * <p>Information about the database column that provides information for user context
   *             filtering.</p>
   */
  AclConfiguration?: AclConfiguration;

  /**
   * <p>Information about where the index should get the document information from the
   *             database.</p>
   */
  ColumnConfiguration: ColumnConfiguration | undefined;

  /**
   * <p>The information necessary to connect to a database.</p>
   */
  ConnectionConfiguration: ConnectionConfiguration | undefined;

  /**
   * <p>The type of database engine that runs the database.</p>
   */
  DatabaseEngineType: DatabaseEngineType | string | undefined;

  /**
   * <p>Provides information for connecting to an Amazon VPC.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;
}

export namespace DatabaseConfiguration {
  export function isa(o: any): o is DatabaseConfiguration {
    return __isa(o, "DatabaseConfiguration");
  }
}

export enum DatabaseEngineType {
  RDS_AURORA_MYSQL = "RDS_AURORA_MYSQL",
  RDS_AURORA_POSTGRESQL = "RDS_AURORA_POSTGRESQL",
  RDS_MYSQL = "RDS_MYSQL",
  RDS_POSTGRESQL = "RDS_POSTGRESQL"
}

export interface DeleteFaqRequest {
  __type?: "DeleteFaqRequest";
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
  export function isa(o: any): o is DeleteFaqRequest {
    return __isa(o, "DeleteFaqRequest");
  }
}

export interface DeleteIndexRequest {
  __type?: "DeleteIndexRequest";
  /**
   * <p>The identifier of the index to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteIndexRequest {
  export function isa(o: any): o is DeleteIndexRequest {
    return __isa(o, "DeleteIndexRequest");
  }
}

export interface DescribeDataSourceRequest {
  __type?: "DescribeDataSourceRequest";
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
  export function isa(o: any): o is DescribeDataSourceRequest {
    return __isa(o, "DescribeDataSourceRequest");
  }
}

export interface DescribeDataSourceResponse {
  __type?: "DescribeDataSourceResponse";
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
   * <p>The description of the data source.</p>
   */
  Description?: string;

  /**
   * <p>When the <code>Status</code> field value is <code>FAILED</code>, the
   *         <code>ErrorMessage</code> field contains a description of the error that caused the data
   *       source to fail.</p>
   */
  ErrorMessage?: string;

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
   * <p>The Amazon Resource Name (ARN) of the role that enables the data source to access its
   *       resources.</p>
   */
  RoleArn?: string;

  /**
   * <p>The schedule that Amazon Kendra will update the data source.</p>
   */
  Schedule?: string;

  /**
   * <p>The current status of the data source. When the status is <code>ACTIVE</code> the data
   *       source is ready to use. When the status is <code>FAILED</code>, the <code>ErrorMessage</code>
   *       field contains the reason that the data source failed.</p>
   */
  Status?: DataSourceStatus | string;

  /**
   * <p>The type of the data source.</p>
   */
  Type?: DataSourceType | string;

  /**
   * <p>The Unix timestamp of when the data source was last updated.</p>
   */
  UpdatedAt?: Date;
}

export namespace DescribeDataSourceResponse {
  export function isa(o: any): o is DescribeDataSourceResponse {
    return __isa(o, "DescribeDataSourceResponse");
  }
}

export interface DescribeFaqRequest {
  __type?: "DescribeFaqRequest";
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
  export function isa(o: any): o is DescribeFaqRequest {
    return __isa(o, "DescribeFaqRequest");
  }
}

export interface DescribeFaqResponse {
  __type?: "DescribeFaqResponse";
  /**
   * <p>The date and time that the FAQ was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description of the FAQ that you provided when it was created.</p>
   */
  Description?: string;

  /**
   * <p>If the <code>Status</code> field is <code>FAILED</code>, the <code>ErrorMessage</code>
   *             field contains the reason why the FAQ failed.</p>
   */
  ErrorMessage?: string;

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
   * <p>The Amazon Resource Name (ARN) of the role that provides access to
   *         the S3 bucket containing the input files for the FAQ.</p>
   */
  RoleArn?: string;

  /**
   * <p>Information required to find a specific file in an Amazon S3 bucket.</p>
   */
  S3Path?: S3Path;

  /**
   * <p>The status of the FAQ. It is ready to use when the status is
   *             <code>ACTIVE</code>.</p>
   */
  Status?: FaqStatus | string;

  /**
   * <p>The date and time that the FAQ was last updated.</p>
   */
  UpdatedAt?: Date;
}

export namespace DescribeFaqResponse {
  export function isa(o: any): o is DescribeFaqResponse {
    return __isa(o, "DescribeFaqResponse");
  }
}

export interface DescribeIndexRequest {
  __type?: "DescribeIndexRequest";
  /**
   * <p>The name of the index to describe.</p>
   */
  Id: string | undefined;
}

export namespace DescribeIndexRequest {
  export function isa(o: any): o is DescribeIndexRequest {
    return __isa(o, "DescribeIndexRequest");
  }
}

export interface DescribeIndexResponse {
  __type?: "DescribeIndexResponse";
  /**
   * <p>The Unix datetime that the index was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description of the index.</p>
   */
  Description?: string;

  /**
   * <p>Configuration settings for any metadata applied to the documents in the index.</p>
   */
  DocumentMetadataConfigurations?: Array<DocumentMetadataConfiguration>;

  /**
   * <p>When th e<code>Status</code> field value is <code>FAILED</code>, the
   *     <code>ErrorMessage</code> field contains a message that explains why.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>the name of the index.</p>
   */
  Id?: string;

  /**
   * <p>Provides information about the number of FAQ questions and answers and the number of text
   *       documents indexed.</p>
   */
  IndexStatistics?: IndexStatistics;

  /**
   * <p>The name of the index.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that gives Amazon Kendra permission
   *       to write to your Amazon Cloudwatch logs.</p>
   */
  RoleArn?: string;

  /**
   * <p>The identifier of the AWS KMS customer master key (CMK) used to encrypt your data.
   *       Amazon Kendra doesn't support asymmetric CMKs.</p>
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>The current status of the index. When the value is <code>ACTIVE</code>, the index
   *     is ready for use. If the <code>Status</code> field value is <code>FAILED</code>, the
   *     <code>ErrorMessage</code> field contains a message that explains why.</p>
   */
  Status?: IndexStatus | string;

  /**
   * <p>The Unix datetime that the index was last updated.</p>
   */
  UpdatedAt?: Date;
}

export namespace DescribeIndexResponse {
  export function isa(o: any): o is DescribeIndexResponse {
    return __isa(o, "DescribeIndexResponse");
  }
}

/**
 * <p>A document in an index.</p>
 */
export interface Document {
  __type?: "Document";
  /**
   * <p>Information to use for user context filtering.</p>
   */
  AccessControlList?: Array<Principal>;

  /**
   * <p>Custom attributes to apply to the document. Use the custom attributes to provide
   *             additional information for searching, to provide facets for refining searches, and to
   *             provide additional information in the query response.</p>
   */
  Attributes?: Array<DocumentAttribute>;

  /**
   * <p>The contents of the document as a base-64 encoded string.</p>
   */
  Blob?: Uint8Array;

  /**
   * <p>The file type of the document in the <code>Blob</code> field.</p>
   */
  ContentType?: ContentType | string;

  /**
   * <p>A unique identifier of the document in the index.</p>
   */
  Id: string | undefined;

  /**
   * <p>Information required to find a specific file in an Amazon S3 bucket.</p>
   */
  S3Path?: S3Path;

  /**
   * <p>The title of the document.</p>
   */
  Title?: string;
}

export namespace Document {
  export function isa(o: any): o is Document {
    return __isa(o, "Document");
  }
}

/**
 * <p>A custom attribute value assigned to a document. </p>
 */
export interface DocumentAttribute {
  __type?: "DocumentAttribute";
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
  export function isa(o: any): o is DocumentAttribute {
    return __isa(o, "DocumentAttribute");
  }
}

/**
 * <p>The value of a custom document attribute. You can only provide one value for a custom
 *             attribute.</p>
 */
export interface DocumentAttributeValue {
  __type?: "DocumentAttributeValue";
  /**
   * <p>A date value expressed as seconds from the Unix epoch.</p>
   */
  DateValue?: Date;

  /**
   * <p>A long integer value.</p>
   */
  LongValue?: number;

  /**
   * <p>A list of strings. </p>
   */
  StringListValue?: Array<string>;

  /**
   * <p>A string, such as "department".</p>
   */
  StringValue?: string;
}

export namespace DocumentAttributeValue {
  export function isa(o: any): o is DocumentAttributeValue {
    return __isa(o, "DocumentAttributeValue");
  }
}

/**
 * <p>Provides the count of documents that match a particular attribute when doing a faceted
 *             search.</p>
 */
export interface DocumentAttributeValueCountPair {
  __type?: "DocumentAttributeValueCountPair";
  /**
   * <p>The number of documents in the response that have the attribute value for the
   *             key.</p>
   */
  Count?: number;

  /**
   * <p>The value of the attribute. For example, "HR."</p>
   */
  DocumentAttributeValue?: DocumentAttributeValue;
}

export namespace DocumentAttributeValueCountPair {
  export function isa(o: any): o is DocumentAttributeValueCountPair {
    return __isa(o, "DocumentAttributeValueCountPair");
  }
}

export enum DocumentAttributeValueType {
  DATE_VALUE = "DATE_VALUE",
  LONG_VALUE = "LONG_VALUE",
  STRING_LIST_VALUE = "STRING_LIST_VALUE",
  STRING_VALUE = "STRING_VALUE"
}

/**
 * <p>Specifies the properties of a custom index field.</p>
 */
export interface DocumentMetadataConfiguration {
  __type?: "DocumentMetadataConfiguration";
  /**
   * <p>The name of the index field.</p>
   */
  Name: string | undefined;

  /**
   * <p>Provides manual tuning parameters to determine how the field affects the search
   *             results.</p>
   */
  Relevance?: Relevance;

  /**
   * <p>Provides information about how the field is used during a search.</p>
   */
  Search?: Search;

  /**
   * <p>The data type of the index field. </p>
   */
  Type: DocumentAttributeValueType | string | undefined;
}

export namespace DocumentMetadataConfiguration {
  export function isa(o: any): o is DocumentMetadataConfiguration {
    return __isa(o, "DocumentMetadataConfiguration");
  }
}

/**
 * <p>Document metadata files that contain information such as the document access control
 *             information, source URI, document author, and custom attributes. Each metadata file
 *             contains metadata about a single document.</p>
 */
export interface DocumentsMetadataConfiguration {
  __type?: "DocumentsMetadataConfiguration";
  /**
   * <p>A prefix used to filter metadata configuration files in the AWS S3 bucket. The S3
   *             bucket might contain multiple metadata files. Use <code>S3Prefix</code> to include only
   *             the desired metadata files.</p>
   */
  S3Prefix?: string;
}

export namespace DocumentsMetadataConfiguration {
  export function isa(o: any): o is DocumentsMetadataConfiguration {
    return __isa(o, "DocumentsMetadataConfiguration");
  }
}

export enum ErrorCode {
  INTERNAL_ERROR = "InternalError",
  INVALID_REQUEST = "InvalidRequest"
}

/**
 * <p>Information a document attribute</p>
 */
export interface Facet {
  __type?: "Facet";
  /**
   * <p>The unique key for the document attribute.</p>
   */
  DocumentAttributeKey?: string;
}

export namespace Facet {
  export function isa(o: any): o is Facet {
    return __isa(o, "Facet");
  }
}

/**
 * <p>The facet values for the documents in the response.</p>
 */
export interface FacetResult {
  __type?: "FacetResult";
  /**
   * <p>The key for the facet values. This is the same as the <code>DocumentAttributeKey</code>
   *       provided in the query.</p>
   */
  DocumentAttributeKey?: string;

  /**
   * <p>An array of key/value pairs, where the key is the value of the attribute
   *       and the count is the number of documents that share the key value.</p>
   */
  DocumentAttributeValueCountPairs?: Array<DocumentAttributeValueCountPair>;
}

export namespace FacetResult {
  export function isa(o: any): o is FacetResult {
    return __isa(o, "FacetResult");
  }
}

/**
 * <p>Provides statistical information about the FAQ questions and answers contained in an
 *             index.</p>
 */
export interface FaqStatistics {
  __type?: "FaqStatistics";
  /**
   * <p>The total number of FAQ questions and answers contained in the index.</p>
   */
  IndexedQuestionAnswersCount: number | undefined;
}

export namespace FaqStatistics {
  export function isa(o: any): o is FaqStatistics {
    return __isa(o, "FaqStatistics");
  }
}

export enum FaqStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING"
}

/**
 * <p>Provides information about a frequently asked questions and answer contained in an
 *             index.</p>
 */
export interface FaqSummary {
  __type?: "FaqSummary";
  /**
   * <p>The UNIX datetime that the FAQ was added to the index.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier of the FAQ.</p>
   */
  Id?: string;

  /**
   * <p>The name that you assigned the FAQ when you created or updated the FAQ.</p>
   */
  Name?: string;

  /**
   * <p>The current status of the FAQ. When the status is <code>ACTIVE</code> the FAQ is ready
   *             for use.</p>
   */
  Status?: FaqStatus | string;

  /**
   * <p>The UNIX datetime that the FAQ was last updated.</p>
   */
  UpdatedAt?: Date;
}

export namespace FaqSummary {
  export function isa(o: any): o is FaqSummary {
    return __isa(o, "FaqSummary");
  }
}

/**
 * <p>Provides information that you can use to highlight a search result so that your users
 *             can quickly identify terms in the response.</p>
 */
export interface Highlight {
  __type?: "Highlight";
  /**
   * <p>The zero-based location in the response string where the highlight starts.</p>
   */
  BeginOffset: number | undefined;

  /**
   * <p>The zero-based location in the response string where the highlight ends.</p>
   */
  EndOffset: number | undefined;

  /**
   * <p>Indicates whether the response is the best response. True if this is the best
   *             response; otherwise, false.</p>
   */
  TopAnswer?: boolean;
}

export namespace Highlight {
  export function isa(o: any): o is Highlight {
    return __isa(o, "Highlight");
  }
}

/**
 * <p>A summary of information about an index.</p>
 */
export interface IndexConfigurationSummary {
  __type?: "IndexConfigurationSummary";
  /**
   * <p>The Unix timestamp when the index was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>A unique identifier for the index. Use this to identify the index when you are using
   *             operations such as <code>Query</code>, <code>DescribeIndex</code>,
   *                 <code>UpdateIndex</code>, and <code>DeleteIndex</code>.</p>
   */
  Id?: string;

  /**
   * <p>The name of the index.</p>
   */
  Name?: string;

  /**
   * <p>The current status of the index. When the status is <code>ACTIVE</code>, the index is
   *             ready to search.</p>
   */
  Status: IndexStatus | string | undefined;

  /**
   * <p>The Unix timestamp when the index was last updated by the <code>UpdateIndex</code>
   *             operation.</p>
   */
  UpdatedAt: Date | undefined;
}

export namespace IndexConfigurationSummary {
  export function isa(o: any): o is IndexConfigurationSummary {
    return __isa(o, "IndexConfigurationSummary");
  }
}

/**
 * <p>Provides information about the number of documents and the number of questions and
 *             answers in an index.</p>
 */
export interface IndexStatistics {
  __type?: "IndexStatistics";
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
  export function isa(o: any): o is IndexStatistics {
    return __isa(o, "IndexStatistics");
  }
}

export enum IndexStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  SYSTEM_UPDATING = "SYSTEM_UPDATING"
}

/**
 * <p></p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return __isa(o, "InternalServerException");
  }
}

export interface ListDataSourceSyncJobsRequest {
  __type?: "ListDataSourceSyncJobsRequest";
  /**
   * <p>The identifier of the data source.</p>
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the index that contains the data source.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The maximum number of synchronization jobs to return in the response. If there are fewer
   *       results in the list, this response contains only the actual results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous request to <code>GetDataSourceSyncJobHistory</code> was
   *       truncated, include the <code>NextToken</code> to fetch the next set of jobs.</p>
   */
  NextToken?: string;

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
  export function isa(o: any): o is ListDataSourceSyncJobsRequest {
    return __isa(o, "ListDataSourceSyncJobsRequest");
  }
}

export interface ListDataSourceSyncJobsResponse {
  __type?: "ListDataSourceSyncJobsResponse";
  /**
   * <p>A history of synchronization jobs for the data source.</p>
   */
  History?: Array<DataSourceSyncJob>;

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
  export function isa(o: any): o is ListDataSourceSyncJobsResponse {
    return __isa(o, "ListDataSourceSyncJobsResponse");
  }
}

export interface ListDataSourcesRequest {
  __type?: "ListDataSourcesRequest";
  /**
   * <p>The identifier of the index that contains the data source.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The maximum number of data sources to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *       Amazon Kendra returns a pagination token in the response. You can use this pagination token to
   *       retrieve the next set of data sources (<code>DataSourceSummaryItems</code>). </p>
   */
  NextToken?: string;
}

export namespace ListDataSourcesRequest {
  export function isa(o: any): o is ListDataSourcesRequest {
    return __isa(o, "ListDataSourcesRequest");
  }
}

export interface ListDataSourcesResponse {
  __type?: "ListDataSourcesResponse";
  /**
   * <p>If the response is truncated, Amazon Kendra returns this token that you can use in the
   *       subsequent request to retrieve the next set of data sources. </p>
   */
  NextToken?: string;

  /**
   * <p>An array of summary information for one or more data sources.</p>
   */
  SummaryItems?: Array<DataSourceSummary>;
}

export namespace ListDataSourcesResponse {
  export function isa(o: any): o is ListDataSourcesResponse {
    return __isa(o, "ListDataSourcesResponse");
  }
}

export interface ListFaqsRequest {
  __type?: "ListFaqsRequest";
  /**
   * <p>The index that contains the FAQ lists.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The maximum number of FAQs to return in the response. If there are fewer results in
   *             the list, this response contains only the actual results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous request to <code>ListFaqs</code> was truncated, include
   *             the <code>NextToken</code> to fetch the next set of FAQs.</p>
   */
  NextToken?: string;
}

export namespace ListFaqsRequest {
  export function isa(o: any): o is ListFaqsRequest {
    return __isa(o, "ListFaqsRequest");
  }
}

export interface ListFaqsResponse {
  __type?: "ListFaqsResponse";
  /**
   * <p>information about the FAQs associated with the specified index.</p>
   */
  FaqSummaryItems?: Array<FaqSummary>;

  /**
   * <p>The <code>ListFaqs</code> operation returns a page of FAQs at a time. The maximum size
   *             of the page is set by the <code>MaxResults</code> parameter. If there are more jobs in
   *             the list than the page size, Amazon Kendra returns the <code>NextPage</code> token.
   *             Include the token in the next request to the <code>ListFaqs</code> operation to return
   *             the next page of FAQs.</p>
   */
  NextToken?: string;
}

export namespace ListFaqsResponse {
  export function isa(o: any): o is ListFaqsResponse {
    return __isa(o, "ListFaqsResponse");
  }
}

export interface ListIndicesRequest {
  __type?: "ListIndicesRequest";
  /**
   * <p>The maximum number of data sources to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *       Amazon Kendra returns a pagination token in the response. You can use this pagination token to
   *       retrieve the next set of indexes (<code>DataSourceSummaryItems</code>). </p>
   */
  NextToken?: string;
}

export namespace ListIndicesRequest {
  export function isa(o: any): o is ListIndicesRequest {
    return __isa(o, "ListIndicesRequest");
  }
}

export interface ListIndicesResponse {
  __type?: "ListIndicesResponse";
  /**
   * <p>An array of summary information for one or more indexes.</p>
   */
  IndexConfigurationSummaryItems?: Array<IndexConfigurationSummary>;

  /**
   * <p>If the response is truncated, Amazon Kendra returns this token that you can use in the
   *       subsequent request to retrieve the next set of indexes.</p>
   */
  NextToken?: string;
}

export namespace ListIndicesResponse {
  export function isa(o: any): o is ListIndicesResponse {
    return __isa(o, "ListIndicesResponse");
  }
}

export enum Order {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING"
}

/**
 * <p>Provides user and group information for document access filtering.</p>
 */
export interface Principal {
  __type?: "Principal";
  /**
   * <p>Whether to allow or deny access to the principal.</p>
   */
  Access: ReadAccessType | string | undefined;

  /**
   * <p>The name of the user or group.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of principal.</p>
   */
  Type: PrincipalType | string | undefined;
}

export namespace Principal {
  export function isa(o: any): o is Principal {
    return __isa(o, "Principal");
  }
}

export enum PrincipalType {
  GROUP = "GROUP",
  USER = "USER"
}

export interface QueryRequest {
  __type?: "QueryRequest";
  /**
   * <p>Enables filtered searches based on document attributes. You can only provide one
   *          attribute filter; however, the <code>AndAllFilters</code>, <code>NotFilter</code>, and
   *             <code>OrAllFilters</code> parameters contain a list of other filters.</p>
   *          <p>The <code>AttributeFilter</code> parameter enables you to create a set of filtering
   *          rules that a document must satisfy to be included in the query results.</p>
   */
  AttributeFilter?: AttributeFilter;

  /**
   * <p>An array of documents attributes. Amazon Kendra returns a count for each attribute
   *          key specified. You can use this information to help narrow the search for your user.</p>
   */
  Facets?: Array<Facet>;

  /**
   * <p>The unique identifier of the index to search. The identifier is returned in the
   *       response from the  operation.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>Query results are returned in pages the size of the <code>PageSize</code> parameter. By
   *          default, Amazon Kendra returns the first page of results. Use this parameter to get result
   *          pages after the first one.</p>
   */
  PageNumber?: number;

  /**
   * <p>Sets the number of results that are returned in each page of results. The default
   *       page size is 100.</p>
   */
  PageSize?: number;

  /**
   * <p>Sets the type of query. Only results for the specified query type are returned.</p>
   */
  QueryResultTypeFilter?: QueryResultType | string;

  /**
   * <p>The text to search for.</p>
   */
  QueryText: string | undefined;

  /**
   * <p>An array of document attributes to include in the response. No other document attributes
   *          are included in the response. By default all document attributes are included in the
   *          response. </p>
   */
  RequestedDocumentAttributes?: Array<string>;
}

export namespace QueryRequest {
  export function isa(o: any): o is QueryRequest {
    return __isa(o, "QueryRequest");
  }
}

export interface QueryResult {
  __type?: "QueryResult";
  /**
   * <p>Contains the facet results. A <code>FacetResult</code> contains the counts for each
   *          attribute key that was specified in the <code>Facets</code> input parameter.</p>
   */
  FacetResults?: Array<FacetResult>;

  /**
   * <p>The unique identifier for the search. You use <code>QueryId</code> to identify the
   *          search when using the feedback API.</p>
   */
  QueryId?: string;

  /**
   * <p>The results of the search.</p>
   */
  ResultItems?: Array<QueryResultItem>;

  /**
   * <p>The number of items returned by the search. Use this to determine when you have
   *          requested the last set of results.</p>
   */
  TotalNumberOfResults?: number;
}

export namespace QueryResult {
  export function isa(o: any): o is QueryResult {
    return __isa(o, "QueryResult");
  }
}

/**
 * <p>A single query result.</p>
 *          <p>A query result contains information about a document returned by the query. This
 *       includes the original location of the document, a list of attributes assigned to the
 *       document, and relevant text from the document that satisfies the query.</p>
 */
export interface QueryResultItem {
  __type?: "QueryResultItem";
  /**
   * <p></p>
   */
  AdditionalAttributes?: Array<AdditionalResultAttribute>;

  /**
   * <p>An array of document attributes for the document that the query result maps to. For
   *          example, the document author (Author) or the source URI (SourceUri) of the document.</p>
   */
  DocumentAttributes?: Array<DocumentAttribute>;

  /**
   * <p>An extract of the text in the document. Contains information about highlighting
   *       the relevant terms in the excerpt.</p>
   */
  DocumentExcerpt?: TextWithHighlights;

  /**
   * <p>The unique identifier for the document.</p>
   */
  DocumentId?: string;

  /**
   * <p>The title of the document. Contains the text of the title and information
   *       for highlighting the relevant terms in the title.</p>
   */
  DocumentTitle?: TextWithHighlights;

  /**
   * <p>The URI of the original location of the document.</p>
   */
  DocumentURI?: string;

  /**
   * <p>The unique identifier for the query result.</p>
   */
  Id?: string;

  /**
   * <p>The type of document. </p>
   */
  Type?: QueryResultType | string;
}

export namespace QueryResultItem {
  export function isa(o: any): o is QueryResultItem {
    return __isa(o, "QueryResultItem");
  }
}

export enum QueryResultType {
  ANSWER = "ANSWER",
  DOCUMENT = "DOCUMENT",
  QUESTION_ANSWER = "QUESTION_ANSWER"
}

export enum ReadAccessType {
  ALLOW = "ALLOW",
  DENY = "DENY"
}

/**
 * <p>Provides information for manually tuning the relevance of a field in a search. When a
 *             query includes terms that match the field, the results are given a boost in the response
 *             based on these tuning parameters.</p>
 */
export interface Relevance {
  __type?: "Relevance";
  /**
   * <p>Specifies the time period that the boost applies to. For example, to make the boost
   *             apply to documents with the field value within the last month, you would use "2628000s".
   *             Once the field value is beyond the specified range, the effect of the boost drops off.
   *             The higher the importance, the faster the effect drops off. If you don't specify a
   *             value, the default is 3 months. The value of the field is a numeric string followed by
   *             the character "s", for example "86400s" for one day, or "604800s" for one week. </p>
   *         <p>Only applies to <code>DATE</code> fields.</p>
   */
  Duration?: string;

  /**
   * <p>Indicates that this field determines how "fresh" a document is. For example, if
   *             document 1 was created on November 5, and document 2 was created on October 31, document
   *             1 is "fresher" than document 2. You can only set the <code>Freshness</code> field on one
   *                 <code>DATE</code> type field. Only applies to <code>DATE</code> fields.</p>
   */
  Freshness?: boolean;

  /**
   * <p>The relative importance of the field in the search. Larger numbers provide more of a
   *             boost than smaller numbers.</p>
   */
  Importance?: number;

  /**
   * <p>Determines how values should be interpreted.</p>
   *         <p>When the <code>RankOrder</code> field is <code>ASCENDING</code>, higher numbers are
   *             better. For example, a document with a rating score of 10 is higher ranking than a
   *             document with a rating score of 1.</p>
   *         <p>When the <code>RankOrder</code> field is <code>DESCENDING</code>, lower numbers are
   *             better. For example, in a task tracking application, a priority 1 task is more important
   *             than a priority 5 task.</p>
   *         <p>Only applies to <code>LONG</code> and <code>DOUBLE</code> fields.</p>
   */
  RankOrder?: Order | string;

  /**
   * <p>A list of values that should be given a different boost when they appear in the result
   *             list. For example, if you are boosting a field called "department," query terms that
   *             match the department field are boosted in the result. However, you can add entries from
   *             the department field to boost documents with those values higher. </p>
   *         <p>For example, you can add entries to the map with names of departments. If you add
   *             "HR",5 and "Legal",3 those departments are given special attention when they appear in
   *             the metadata of a document. When those terms appear they are given the specified
   *             importance instead of the regular importance for the boost.</p>
   */
  ValueImportanceMap?: { [key: string]: number };
}

export namespace Relevance {
  export function isa(o: any): o is Relevance {
    return __isa(o, "Relevance");
  }
}

/**
 * <p>Provides feedback on how relevant a document is to a search. Your application uses the
 *                 <a>SubmitFeedback</a> operation to provide relevance information.</p>
 */
export interface RelevanceFeedback {
  __type?: "RelevanceFeedback";
  /**
   * <p>Whether to document was relevant or not relevant to the search.</p>
   */
  RelevanceValue: RelevanceType | string | undefined;

  /**
   * <p>The unique identifier of the search result that the user provided relevance feedback
   *             for.</p>
   */
  ResultId: string | undefined;
}

export namespace RelevanceFeedback {
  export function isa(o: any): o is RelevanceFeedback {
    return __isa(o, "RelevanceFeedback");
  }
}

export enum RelevanceType {
  NOT_RELEVANT = "NOT_RELEVANT",
  RELEVANT = "RELEVANT"
}

/**
 * <p></p>
 */
export interface ResourceAlreadyExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAlreadyExistException {
  export function isa(o: any): o is ResourceAlreadyExistException {
    return __isa(o, "ResourceAlreadyExistException");
  }
}

/**
 * <p></p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  export function isa(o: any): o is ResourceInUseException {
    return __isa(o, "ResourceInUseException");
  }
}

/**
 * <p></p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p></p>
 */
export interface ResourceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceUnavailableException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceUnavailableException {
  export function isa(o: any): o is ResourceUnavailableException {
    return __isa(o, "ResourceUnavailableException");
  }
}

/**
 * <p>Provides configuration information for a data source to index documents in an Amazon
 *             S3 bucket.</p>
 */
export interface S3DataSourceConfiguration {
  __type?: "S3DataSourceConfiguration";
  /**
   * <p>Provides the path to the S3 bucket that contains the user context filtering files for
   *             the data source.</p>
   */
  AccessControlListConfiguration?: AccessControlListConfiguration;

  /**
   * <p>The name of the bucket that contains the documents.</p>
   */
  BucketName: string | undefined;

  /**
   * <p>Document metadata files that contain information such as the document access control
   *             information, source URI, document author, and custom attributes. Each metadata file
   *             contains metadata about a single document.</p>
   */
  DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration;

  /**
   * <p>A list of glob patterns for documents that should not be indexed. If a document that
   *             matches an inclusion prefix also matches an exclusion pattern, the document is not
   *             indexed.</p>
   *         <p>For more information about glob patterns, see <a href="http://wikipedia.org/wiki/Glob_%28programming%29">glob (programming)</a> in
   *                 <i>Wikipedia</i>.</p>
   */
  ExclusionPatterns?: Array<string>;

  /**
   * <p>A list of S3 prefixes for the documents that should be included in the index.</p>
   */
  InclusionPrefixes?: Array<string>;
}

export namespace S3DataSourceConfiguration {
  export function isa(o: any): o is S3DataSourceConfiguration {
    return __isa(o, "S3DataSourceConfiguration");
  }
}

/**
 * <p>Information required to find a specific file in an Amazon S3 bucket.</p>
 */
export interface S3Path {
  __type?: "S3Path";
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
  export function isa(o: any): o is S3Path {
    return __isa(o, "S3Path");
  }
}

/**
 * <p>Provides information about how a custom index field is used during a search.</p>
 */
export interface Search {
  __type?: "Search";
  /**
   * <p>Determines whether the field is returned in the query response. The default is
   *                 <code>true</code>.</p>
   */
  Displayable?: boolean;

  /**
   * <p>Indicates that the field can be used to create search facets, a count of results for
   *             each value in the field. The default is <code>false</code> .</p>
   */
  Facetable?: boolean;

  /**
   * <p>Determines whether the field is used in the search. If the <code>Searchable</code>
   *             field is <code>true</code>, you can use relevance tuning to manually tune how Amazon Kendra
   *             weights the field in the search. The default is <code>true</code> for string fields and
   *                 <code>false</code> for number and date fields.</p>
   */
  Searchable?: boolean;
}

export namespace Search {
  export function isa(o: any): o is Search {
    return __isa(o, "Search");
  }
}

/**
 * <p>Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt data indexed by
 *             Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs.</p>
 */
export interface ServerSideEncryptionConfiguration {
  __type?: "ServerSideEncryptionConfiguration";
  /**
   * <p>The identifier of the AWS KMS customer master key (CMK). Amazon Kendra doesn't support
   *             asymmetric CMKs.</p>
   */
  KmsKeyId?: string;
}

export namespace ServerSideEncryptionConfiguration {
  export function isa(o: any): o is ServerSideEncryptionConfiguration {
    return __isa(o, "ServerSideEncryptionConfiguration");
  }
}

/**
 * <p></p>
 */
export interface ServiceQuotaExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaExceededException {
  export function isa(o: any): o is ServiceQuotaExceededException {
    return __isa(o, "ServiceQuotaExceededException");
  }
}

/**
 * <p>Provides configuration information for connecting to a Microsoft SharePoint data
 *             source.</p>
 */
export interface SharePointConfiguration {
  __type?: "SharePointConfiguration";
  /**
   * <p>
   *             <code>TRUE</code> to include attachments to documents stored in your Microsoft
   *             SharePoint site in the index; otherwise, <code>FALSE</code>.</p>
   */
  CrawlAttachments?: boolean;

  /**
   * <p>The Microsoft SharePoint attribute field that contains the title of the
   *             document.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map Microsoft
   *             SharePoint attributes to custom fields in the Amazon Kendra index. You must first create the
   *             index fields using the  operation before you map
   *             SharePoint attributes. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping Data Source Fields</a>.</p>
   */
  FieldMappings?: Array<DataSourceToIndexFieldMapping>;

  /**
   * <p>The Amazon Resource Name (ARN) of credentials stored in AWS Secrets Manager. The
   *             credentials should be a user/password pair. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-sharepoint.html">Using a
   *                 Microsoft SharePoint Data Source</a>. For more information about AWS Secrets
   *             Manager, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"> What Is AWS Secrets Manager
   *             </a> in the <i>AWS Secrets Manager</i> user guide.</p>
   */
  SecretArn: string | undefined;

  /**
   * <p>The version of Microsoft SharePoint that you are using as a data source.</p>
   */
  SharePointVersion: SharePointVersion | string | undefined;

  /**
   * <p>The URLs of the Microsoft SharePoint site that contains the documents that should be
   *             indexed.</p>
   */
  Urls: Array<string> | undefined;

  /**
   * <p>Provides information for connecting to an Amazon VPC.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;
}

export namespace SharePointConfiguration {
  export function isa(o: any): o is SharePointConfiguration {
    return __isa(o, "SharePointConfiguration");
  }
}

export enum SharePointVersion {
  SHAREPOINT_ONLINE = "SHAREPOINT_ONLINE"
}

export interface StartDataSourceSyncJobRequest {
  __type?: "StartDataSourceSyncJobRequest";
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
  export function isa(o: any): o is StartDataSourceSyncJobRequest {
    return __isa(o, "StartDataSourceSyncJobRequest");
  }
}

export interface StartDataSourceSyncJobResponse {
  __type?: "StartDataSourceSyncJobResponse";
  /**
   * <p>Identifies a particular synchronization job.</p>
   */
  ExecutionId?: string;
}

export namespace StartDataSourceSyncJobResponse {
  export function isa(o: any): o is StartDataSourceSyncJobResponse {
    return __isa(o, "StartDataSourceSyncJobResponse");
  }
}

export interface StopDataSourceSyncJobRequest {
  __type?: "StopDataSourceSyncJobRequest";
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
  export function isa(o: any): o is StopDataSourceSyncJobRequest {
    return __isa(o, "StopDataSourceSyncJobRequest");
  }
}

export interface SubmitFeedbackRequest {
  __type?: "SubmitFeedbackRequest";
  /**
   * <p>Tells Amazon Kendra that a particular search result link was chosen by
   *         the user. </p>
   */
  ClickFeedbackItems?: Array<ClickFeedback>;

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
   * <p>Provides Amazon Kendra with relevant or not relevant feedback for whether a particular
   *         item was relevant to the search.</p>
   */
  RelevanceFeedbackItems?: Array<RelevanceFeedback>;
}

export namespace SubmitFeedbackRequest {
  export function isa(o: any): o is SubmitFeedbackRequest {
    return __isa(o, "SubmitFeedbackRequest");
  }
}

/**
 * <p>Provides information about text documents indexed in an index.</p>
 */
export interface TextDocumentStatistics {
  __type?: "TextDocumentStatistics";
  /**
   * <p>The number of text documents indexed.</p>
   */
  IndexedTextDocumentsCount: number | undefined;
}

export namespace TextDocumentStatistics {
  export function isa(o: any): o is TextDocumentStatistics {
    return __isa(o, "TextDocumentStatistics");
  }
}

/**
 * <p>Provides text and information about where to highlight the text.</p>
 */
export interface TextWithHighlights {
  __type?: "TextWithHighlights";
  /**
   * <p>The beginning and end of the text that should be highlighted.</p>
   */
  Highlights?: Array<Highlight>;

  /**
   * <p>The text to display to the user.</p>
   */
  Text?: string;
}

export namespace TextWithHighlights {
  export function isa(o: any): o is TextWithHighlights {
    return __isa(o, "TextWithHighlights");
  }
}

/**
 * <p></p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return __isa(o, "ThrottlingException");
  }
}

/**
 * <p>Provides a range of time.</p>
 */
export interface TimeRange {
  __type?: "TimeRange";
  /**
   * <p>The UNIX datetime of the end of the time range.</p>
   */
  EndTime?: Date;

  /**
   * <p>The UNIX datetime of the beginning of the time range.</p>
   */
  StartTime?: Date;
}

export namespace TimeRange {
  export function isa(o: any): o is TimeRange {
    return __isa(o, "TimeRange");
  }
}

export interface UpdateDataSourceRequest {
  __type?: "UpdateDataSourceRequest";
  /**
   * <p>Configuration information for a Amazon Kendra data source.</p>
   */
  Configuration?: DataSourceConfiguration;

  /**
   * <p>The new description for the data source.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier of the data source to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the index that contains the data source to update.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The name of the data source to update. The name of the data source can't be updated. To
   *       rename a data source you must delete the data source and re-create it.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the new role to use when the data source is accessing
   *       resources on your behalf.</p>
   */
  RoleArn?: string;

  /**
   * <p>The new update schedule for the data source.</p>
   */
  Schedule?: string;
}

export namespace UpdateDataSourceRequest {
  export function isa(o: any): o is UpdateDataSourceRequest {
    return __isa(o, "UpdateDataSourceRequest");
  }
}

export interface UpdateIndexRequest {
  __type?: "UpdateIndexRequest";
  /**
   * <p>A new description for the index.</p>
   */
  Description?: string;

  /**
   * <p>The document metadata to update. </p>
   */
  DocumentMetadataConfigurationUpdates?: Array<DocumentMetadataConfiguration>;

  /**
   * <p>The identifier of the index to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the index to update.</p>
   */
  Name?: string;

  /**
   * <p>A new IAM role that gives Amazon Kendra permission to access your Amazon CloudWatch logs.</p>
   */
  RoleArn?: string;
}

export namespace UpdateIndexRequest {
  export function isa(o: any): o is UpdateIndexRequest {
    return __isa(o, "UpdateIndexRequest");
  }
}

/**
 * <p></p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export function isa(o: any): o is ValidationException {
    return __isa(o, "ValidationException");
  }
}
