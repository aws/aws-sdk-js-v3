import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
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
  export const filterSensitiveLog = (obj: AccessControlListConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessControlListConfiguration => __isa(o, "AccessControlListConfiguration");
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
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
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
  export const filterSensitiveLog = (obj: AclConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AclConfiguration => __isa(o, "AclConfiguration");
}

/**
 * <p>An attribute returned from an index query.</p>
 */
export interface AdditionalResultAttribute {
  __type?: "AdditionalResultAttribute";
  /**
   * <p>The key that identifies the attribute.</p>
   */
  Key: string | undefined;

  /**
   * <p>An object that contains the attribute value.</p>
   */
  Value: AdditionalResultAttributeValue | undefined;

  /**
   * <p>The data type of the <code>Value</code> property.</p>
   */
  ValueType: AdditionalResultAttributeValueType | string | undefined;
}

export namespace AdditionalResultAttribute {
  export const filterSensitiveLog = (obj: AdditionalResultAttribute): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AdditionalResultAttribute => __isa(o, "AdditionalResultAttribute");
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
  export const filterSensitiveLog = (obj: AdditionalResultAttributeValue): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AdditionalResultAttributeValue => __isa(o, "AdditionalResultAttributeValue");
}

export enum AdditionalResultAttributeValueType {
  TEXT_WITH_HIGHLIGHTS_VALUE = "TEXT_WITH_HIGHLIGHTS_VALUE",
}

/**
 * <p>Provides filtering the query results based on document attributes.</p>
 *          <p>When you use the <code>AndAllFilters</code> or <code>OrAllFilters</code>, filters you
 *          can use 2 layers under the first attribute filter. For example, you can use:</p>
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
 *          <p>If you use more than 2 layers, you receive a <code>ValidationException</code> exception
 *          with the message "<code>AttributeFilter</code> cannot have a depth of more than 2."</p>
 */
export interface AttributeFilter {
  __type?: "AttributeFilter";
  /**
   * <p>Performs an equals operation on two document attributes.</p>
   */
  EqualsTo?: DocumentAttribute;

  /**
   * <p>Performs a logical <code>AND</code> operation on all supplied filters.</p>
   */
  AndAllFilters?: AttributeFilter[];

  /**
   * <p>Performs a greater than operation on two document attributes. Use with a document
   *          attribute of type <code>Integer</code> or <code>Long</code>.</p>
   */
  GreaterThan?: DocumentAttribute;

  /**
   * <p>Returns true when a document contains any of the specified document attributes.This
   *          filter is only appicable to <code>StringListValue</code> metadata.</p>
   */
  ContainsAny?: DocumentAttribute;

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
   * <p>Performs a greater or equals than operation on two document attributes. Use with a
   *          document attribute of type <code>Integer</code> or <code>Long</code>.</p>
   */
  GreaterThanOrEquals?: DocumentAttribute;

  /**
   * <p>Performs a logical <code>OR</code> operation on all supplied filters.</p>
   */
  OrAllFilters?: AttributeFilter[];

  /**
   * <p>Returns true when a document contains all of the specified document attributes. This
   *          filter is only appicable to <code>StringListValue</code> metadata.</p>
   */
  ContainsAll?: DocumentAttribute;

  /**
   * <p>Performs a less than operation on two document attributes. Use with a document attribute
   *          of type <code>Integer</code> or <code>Long</code>.</p>
   */
  LessThan?: DocumentAttribute;
}

export namespace AttributeFilter {
  export const filterSensitiveLog = (obj: AttributeFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AttributeFilter => __isa(o, "AttributeFilter");
}

export interface BatchDeleteDocumentRequest {
  __type?: "BatchDeleteDocumentRequest";
  /**
   * <p>The identifier of the index that contains the documents to delete.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>Maps a particular data source sync job to a particular data source.</p>
   */
  DataSourceSyncJobMetricTarget?: DataSourceSyncJobMetricTarget;

  /**
   * <p>One or more identifiers for documents to delete from the index.</p>
   */
  DocumentIdList: string[] | undefined;
}

export namespace BatchDeleteDocumentRequest {
  export const filterSensitiveLog = (obj: BatchDeleteDocumentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDeleteDocumentRequest => __isa(o, "BatchDeleteDocumentRequest");
}

export interface BatchDeleteDocumentResponse {
  __type?: "BatchDeleteDocumentResponse";
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
  export const isa = (o: any): o is BatchDeleteDocumentResponse => __isa(o, "BatchDeleteDocumentResponse");
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
  export const filterSensitiveLog = (obj: BatchDeleteDocumentResponseFailedDocument): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDeleteDocumentResponseFailedDocument =>
    __isa(o, "BatchDeleteDocumentResponseFailedDocument");
}

export interface BatchPutDocumentRequest {
  __type?: "BatchPutDocumentRequest";
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

  /**
   * <p>The Amazon Resource Name (ARN) of a role that is allowed to run the
   *         <code>BatchPutDocument</code> operation. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM Roles for
   *         Amazon Kendra</a>.</p>
   */
  RoleArn?: string;

  /**
   * <p>The identifier of the index to add the documents to. You need to create the index first
   *       using the <a>CreateIndex</a> operation.</p>
   */
  IndexId: string | undefined;
}

export namespace BatchPutDocumentRequest {
  export const filterSensitiveLog = (obj: BatchPutDocumentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchPutDocumentRequest => __isa(o, "BatchPutDocumentRequest");
}

export interface BatchPutDocumentResponse {
  __type?: "BatchPutDocumentResponse";
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
  export const isa = (o: any): o is BatchPutDocumentResponse => __isa(o, "BatchPutDocumentResponse");
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
  export const filterSensitiveLog = (obj: BatchPutDocumentResponseFailedDocument): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchPutDocumentResponseFailedDocument =>
    __isa(o, "BatchPutDocumentResponseFailedDocument");
}

/**
 * <p>Specifies capacity units configured for your index. You can add and remove capacity
 *             units to tune an index to your requirements.</p>
 */
export interface CapacityUnitsConfiguration {
  __type?: "CapacityUnitsConfiguration";
  /**
   * <p>The amount of extra query capacity for an index. Each capacity unit provides 0.5
   *             queries per second and 40,000 queries per day.</p>
   */
  QueryCapacityUnits: number | undefined;

  /**
   * <p>The amount of extra storage capacity for an index. Each capacity unit provides 150 Gb
   *             of storage space or 500,000 documents, whichever is reached first.</p>
   */
  StorageCapacityUnits: number | undefined;
}

export namespace CapacityUnitsConfiguration {
  export const filterSensitiveLog = (obj: CapacityUnitsConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CapacityUnitsConfiguration => __isa(o, "CapacityUnitsConfiguration");
}

/**
 * <p>Gathers information about when a particular result was clicked by a user. Your
 *             application uses the <a>SubmitFeedback</a> operation to provide click
 *             information.</p>
 */
export interface ClickFeedback {
  __type?: "ClickFeedback";
  /**
   * <p>The Unix timestamp of the date and time that the result was clicked.</p>
   */
  ClickTime: Date | undefined;

  /**
   * <p>The unique identifier of the search result that was clicked.</p>
   */
  ResultId: string | undefined;
}

export namespace ClickFeedback {
  export const filterSensitiveLog = (obj: ClickFeedback): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ClickFeedback => __isa(o, "ClickFeedback");
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
  ChangeDetectingColumns: string[] | undefined;

  /**
   * <p>The column that contains the contents of the document.</p>
   */
  DocumentDataColumnName: string | undefined;

  /**
   * <p>The column that contains the title of the document.</p>
   */
  DocumentTitleColumnName?: string;

  /**
   * <p>The column that provides the document's unique identifier.</p>
   */
  DocumentIdColumnName: string | undefined;

  /**
   * <p>An array of objects that map database column names to the corresponding fields in an
   *             index. You must first create the fields in the index using the <a>UpdateIndex</a> operation.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

export namespace ColumnConfiguration {
  export const filterSensitiveLog = (obj: ColumnConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ColumnConfiguration => __isa(o, "ColumnConfiguration");
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
  export const isa = (o: any): o is ConflictException => __isa(o, "ConflictException");
}

/**
 * <p>Provides the information necessary to connect to a database.</p>
 */
export interface ConnectionConfiguration {
  __type?: "ConnectionConfiguration";
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
   * <p>The name of the database containing the document data.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The port that the database uses for connections.</p>
   */
  DatabasePort: number | undefined;

  /**
   * <p>The name of the host for the database. Can be either a string
   *             (host.subdomain.domain.tld) or an IPv4 or IPv6 address.</p>
   */
  DatabaseHost: string | undefined;

  /**
   * <p>The name of the table that contains the document data.</p>
   */
  TableName: string | undefined;
}

export namespace ConnectionConfiguration {
  export const filterSensitiveLog = (obj: ConnectionConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConnectionConfiguration => __isa(o, "ConnectionConfiguration");
}

export enum ContentType {
  HTML = "HTML",
  MS_WORD = "MS_WORD",
  PDF = "PDF",
  PLAIN_TEXT = "PLAIN_TEXT",
  PPT = "PPT",
}

export interface CreateDataSourceRequest {
  __type?: "CreateDataSourceRequest";
  /**
   * <p>A description for the data source.</p>
   */
  Description?: string;

  /**
   * <p>The type of repository that contains the data source.</p>
   */
  Type: DataSourceType | string | undefined;

  /**
   * <p>A list of key-value pairs that identify the data source. You can use the tags
   *     to identify and organize your resources and to control access to resources.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of a role with permission to access the data source. For
   *       more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM
   *         Roles for Amazon Kendra</a>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A unique name for the data source. A data source name can't be changed without deleting
   *       and recreating the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>Sets the frequency that Amazon Kendra will check the documents in your repository and
   *       update the index. If you don't set a schedule Amazon Kendra will not periodically update the
   *       index. You can call the <code>StartDataSourceSyncJob</code> operation to update the
   *       index.</p>
   */
  Schedule?: string;

  /**
   * <p>The identifier of the index that should be associated with this data source.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The connector configuration information that is required to access the repository.</p>
   */
  Configuration: DataSourceConfiguration | undefined;
}

export namespace CreateDataSourceRequest {
  export const filterSensitiveLog = (obj: CreateDataSourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDataSourceRequest => __isa(o, "CreateDataSourceRequest");
}

export interface CreateDataSourceResponse {
  __type?: "CreateDataSourceResponse";
  /**
   * <p>A unique identifier for the data source.</p>
   */
  Id: string | undefined;
}

export namespace CreateDataSourceResponse {
  export const filterSensitiveLog = (obj: CreateDataSourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDataSourceResponse => __isa(o, "CreateDataSourceResponse");
}

export interface CreateFaqRequest {
  __type?: "CreateFaqRequest";
  /**
   * <p>The name that should be associated with the FAQ.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of key-value pairs that identify the FAQ. You can use the tags
   *             to identify and organize your resources and to control access to resources.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The identifier of the index that contains the FAQ.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The S3 location of the FAQ input data.</p>
   */
  S3Path: S3Path | undefined;

  /**
   * <p>A description of the FAQ.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a role with permission to
   *             access the S3 bucket that contains the FAQs. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM Roles for
   *                 Amazon Kendra</a>.</p>
   */
  RoleArn: string | undefined;
}

export namespace CreateFaqRequest {
  export const filterSensitiveLog = (obj: CreateFaqRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateFaqRequest => __isa(o, "CreateFaqRequest");
}

export interface CreateFaqResponse {
  __type?: "CreateFaqResponse";
  /**
   * <p>The unique identifier of the FAQ.</p>
   */
  Id?: string;
}

export namespace CreateFaqResponse {
  export const filterSensitiveLog = (obj: CreateFaqResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateFaqResponse => __isa(o, "CreateFaqResponse");
}

export interface CreateIndexRequest {
  __type?: "CreateIndexRequest";
  /**
   * <p>The identifier of the AWS KMS customer managed key (CMK) to use to encrypt data indexed by
   *       Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs.</p>
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>The name for the new index.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of key-value pairs that identify the index. You can use the tags to identify and
   *       organize your resources and to control access to resources.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Kendra edition to use for the index. Choose <code>DEVELOPER_EDITION</code> for
   *       indexes intended for development, testing, or proof of concept. Use
   *         <code>ENTERPRISE_EDITION</code> for your production databases. Once you set the edition for
   *       an index, it can't be changed. </p>
   */
  Edition?: IndexEdition | string;

  /**
   * <p>A description for the index.</p>
   */
  Description?: string;

  /**
   * <p>An IAM role that gives Amazon Kendra permissions to access your Amazon CloudWatch logs and
   *       metrics. This is also the role used when you use the <code>BatchPutDocument</code> operation
   *       to index documents from an Amazon S3 bucket.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A token that you provide to identify the request to create an index. Multiple calls to the
   *         <code>CreateIndex</code> operation with the same client token will create only one
   *       index.”</p>
   */
  ClientToken?: string;
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
  export const isa = (o: any): o is CreateIndexRequest => __isa(o, "CreateIndexRequest");
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
  export const filterSensitiveLog = (obj: CreateIndexResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateIndexResponse => __isa(o, "CreateIndexResponse");
}

/**
 * <p>Provides the information necessary to connect a database to an index. </p>
 */
export interface DatabaseConfiguration {
  __type?: "DatabaseConfiguration";
  /**
   * <p>The information necessary to connect to a database.</p>
   */
  ConnectionConfiguration: ConnectionConfiguration | undefined;

  /**
   * <p>Information about where the index should get the document information from the
   *             database.</p>
   */
  ColumnConfiguration: ColumnConfiguration | undefined;

  /**
   * <p>Provides information for connecting to an Amazon VPC.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * <p>Information about the database column that provides information for user context
   *             filtering.</p>
   */
  AclConfiguration?: AclConfiguration;

  /**
   * <p>The type of database engine that runs the database.</p>
   */
  DatabaseEngineType: DatabaseEngineType | string | undefined;

  /**
   * <p>Provides information about how Amazon Kendra uses quote marks around SQL identifiers when
   *             querying a database data source.</p>
   */
  SqlConfiguration?: SqlConfiguration;
}

export namespace DatabaseConfiguration {
  export const filterSensitiveLog = (obj: DatabaseConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DatabaseConfiguration => __isa(o, "DatabaseConfiguration");
}

export enum DatabaseEngineType {
  RDS_AURORA_MYSQL = "RDS_AURORA_MYSQL",
  RDS_AURORA_POSTGRESQL = "RDS_AURORA_POSTGRESQL",
  RDS_MYSQL = "RDS_MYSQL",
  RDS_POSTGRESQL = "RDS_POSTGRESQL",
}

/**
 * <p>Configuration information for a Amazon Kendra data source.</p>
 */
export interface DataSourceConfiguration {
  __type?: "DataSourceConfiguration";
  /**
   * <p>Provides information necessary to create a connector for a Microsoft SharePoint
   *             site.</p>
   */
  SharePointConfiguration?: SharePointConfiguration;

  /**
   * <p>Provides configuration information for data sources that connect to a Salesforce
   *             site.</p>
   */
  SalesforceConfiguration?: SalesforceConfiguration;

  /**
   * <p>Provides configuration for data sources that connect to ServiceNow instances.</p>
   */
  ServiceNowConfiguration?: ServiceNowConfiguration;

  /**
   * <p>Provided configuration for data sources that connect to Microsoft OneDrive.</p>
   */
  OneDriveConfiguration?: OneDriveConfiguration;

  /**
   * <p>Provides information necessary to create a connector for a database.</p>
   */
  DatabaseConfiguration?: DatabaseConfiguration;

  /**
   * <p>Provides information to create a connector for a document repository in an Amazon S3
   *             bucket.</p>
   */
  S3Configuration?: S3DataSourceConfiguration;
}

export namespace DataSourceConfiguration {
  export const filterSensitiveLog = (obj: DataSourceConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataSourceConfiguration => __isa(o, "DataSourceConfiguration");
}

export enum DataSourceStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

/**
 * <p>Summary information for a Amazon Kendra data source. Returned in a call to .</p>
 */
export interface DataSourceSummary {
  __type?: "DataSourceSummary";
  /**
   * <p>The unique identifier for the data source.</p>
   */
  Id?: string;

  /**
   * <p>The UNIX datetime that the data source was lasted updated. </p>
   */
  UpdatedAt?: Date;

  /**
   * <p>The name of the data source.</p>
   */
  Name?: string;

  /**
   * <p>The type of the data source.</p>
   */
  Type?: DataSourceType | string;

  /**
   * <p>The status of the data source. When the status is <code>ATIVE</code> the data source
   *             is ready to use.</p>
   */
  Status?: DataSourceStatus | string;

  /**
   * <p>The UNIX datetime that the data source was created.</p>
   */
  CreatedAt?: Date;
}

export namespace DataSourceSummary {
  export const filterSensitiveLog = (obj: DataSourceSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataSourceSummary => __isa(o, "DataSourceSummary");
}

/**
 * <p>Provides information about a synchronization job.</p>
 */
export interface DataSourceSyncJob {
  __type?: "DataSourceSyncJob";
  /**
   * <p>The UNIX datetime that the synchronization job was started.</p>
   */
  StartTime?: Date;

  /**
   * <p>A unique identifier for the synchronization job.</p>
   */
  ExecutionId?: string;

  /**
   * <p>If the reason that the synchronization failed is due to an error with the underlying
   *             data source, this field contains a code that identifies the error.</p>
   */
  DataSourceErrorCode?: string;

  /**
   * <p>If the <code>Status</code> field is set to <code>ERROR</code>, the
   *                 <code>ErrorMessage</code> field contains a description of the error that caused the
   *             synchronization to fail.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>Maps a batch delete document request to a specific data source sync job. This is
   *             optional and should only be supplied when documents are deleted by a connector.</p>
   */
  Metrics?: DataSourceSyncJobMetrics;

  /**
   * <p>The execution status of the synchronization job. When the <code>Status</code> field is
   *             set to <code>SUCCEEDED</code>, the synchronization job is done. If the status code is
   *             set to <code>FAILED</code>, the <code>ErrorCode</code> and <code>ErrorMessage</code>
   *             fields give you the reason for the failure.</p>
   */
  Status?: DataSourceSyncJobStatus | string;

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
}

export namespace DataSourceSyncJob {
  export const filterSensitiveLog = (obj: DataSourceSyncJob): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataSourceSyncJob => __isa(o, "DataSourceSyncJob");
}

/**
 * <p>Maps a batch delete document request to a specific data source sync job. This is
 *             optional and should only be supplied when documents are deleted by a connector.</p>
 */
export interface DataSourceSyncJobMetrics {
  __type?: "DataSourceSyncJobMetrics";
  /**
   * <p>The number of documents that failed to sync from the data source up to now in the data
   *             source sync run.</p>
   */
  DocumentsFailed?: string;

  /**
   * <p>The number of documents modified in the data source up to now in the data source sync
   *             run.</p>
   */
  DocumentsModified?: string;

  /**
   * <p>The current number of documents crawled by the current sync job in the data
   *             source.</p>
   */
  DocumentsScanned?: string;

  /**
   * <p>The number of documents deleted from the data source up to now in the data source sync
   *             run.</p>
   */
  DocumentsDeleted?: string;

  /**
   * <p>The number of documents added from the data source up to now in the data source
   *             sync.</p>
   */
  DocumentsAdded?: string;
}

export namespace DataSourceSyncJobMetrics {
  export const filterSensitiveLog = (obj: DataSourceSyncJobMetrics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataSourceSyncJobMetrics => __isa(o, "DataSourceSyncJobMetrics");
}

/**
 * <p>Maps a particular data source sync job to a particular data source.</p>
 */
export interface DataSourceSyncJobMetricTarget {
  __type?: "DataSourceSyncJobMetricTarget";
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
  export const isa = (o: any): o is DataSourceSyncJobMetricTarget => __isa(o, "DataSourceSyncJobMetricTarget");
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
  export const filterSensitiveLog = (obj: DataSourceToIndexFieldMapping): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataSourceToIndexFieldMapping => __isa(o, "DataSourceToIndexFieldMapping");
}

export enum DataSourceType {
  DATABASE = "DATABASE",
  ONEDRIVE = "ONEDRIVE",
  S3 = "S3",
  SALESFORCE = "SALESFORCE",
  SERVICENOW = "SERVICENOW",
  SHAREPOINT = "SHAREPOINT",
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
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>A list of identifiers for subnets within your Amazon VPC. The subnets should be able
   *             to connect to each other in the VPC, and they should have outgoing access to the
   *             Internet through a NAT device.</p>
   */
  SubnetIds: string[] | undefined;
}

export namespace DataSourceVpcConfiguration {
  export const filterSensitiveLog = (obj: DataSourceVpcConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataSourceVpcConfiguration => __isa(o, "DataSourceVpcConfiguration");
}

export interface DeleteDataSourceRequest {
  __type?: "DeleteDataSourceRequest";
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
  export const isa = (o: any): o is DeleteDataSourceRequest => __isa(o, "DeleteDataSourceRequest");
}

export interface DeleteFaqRequest {
  __type?: "DeleteFaqRequest";
  /**
   * <p>The index to remove the FAQ from.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The identifier of the FAQ to remove.</p>
   */
  Id: string | undefined;
}

export namespace DeleteFaqRequest {
  export const filterSensitiveLog = (obj: DeleteFaqRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteFaqRequest => __isa(o, "DeleteFaqRequest");
}

export interface DeleteIndexRequest {
  __type?: "DeleteIndexRequest";
  /**
   * <p>The identifier of the index to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteIndexRequest {
  export const filterSensitiveLog = (obj: DeleteIndexRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteIndexRequest => __isa(o, "DeleteIndexRequest");
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
  export const filterSensitiveLog = (obj: DescribeDataSourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDataSourceRequest => __isa(o, "DescribeDataSourceRequest");
}

export interface DescribeDataSourceResponse {
  __type?: "DescribeDataSourceResponse";
  /**
   * <p>The identifier of the index that contains the data source.</p>
   */
  IndexId?: string;

  /**
   * <p>The current status of the data source. When the status is <code>ACTIVE</code> the data
   *       source is ready to use. When the status is <code>FAILED</code>, the <code>ErrorMessage</code>
   *       field contains the reason that the data source failed.</p>
   */
  Status?: DataSourceStatus | string;

  /**
   * <p>The description of the data source.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the data source.</p>
   */
  Id?: string;

  /**
   * <p>The schedule that Amazon Kendra will update the data source.</p>
   */
  Schedule?: string;

  /**
   * <p>The Unix timestamp of when the data source was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>Information that describes where the data source is located and how the data source is
   *       configured. The specific information in the description depends on the data source
   *       provider.</p>
   */
  Configuration?: DataSourceConfiguration;

  /**
   * <p>When the <code>Status</code> field value is <code>FAILED</code>, the
   *         <code>ErrorMessage</code> field contains a description of the error that caused the data
   *       source to fail.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The Unix timestamp of when the data source was last updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>The name that you gave the data source when it was created.</p>
   */
  Name?: string;

  /**
   * <p>The type of the data source.</p>
   */
  Type?: DataSourceType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that enables the data source to access its
   *       resources.</p>
   */
  RoleArn?: string;
}

export namespace DescribeDataSourceResponse {
  export const filterSensitiveLog = (obj: DescribeDataSourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDataSourceResponse => __isa(o, "DescribeDataSourceResponse");
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
  export const filterSensitiveLog = (obj: DescribeFaqRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeFaqRequest => __isa(o, "DescribeFaqRequest");
}

export interface DescribeFaqResponse {
  __type?: "DescribeFaqResponse";
  /**
   * <p>The identifier of the FAQ.</p>
   */
  Id?: string;

  /**
   * <p>The description of the FAQ that you provided when it was created.</p>
   */
  Description?: string;

  /**
   * <p>Information required to find a specific file in an Amazon S3 bucket.</p>
   */
  S3Path?: S3Path;

  /**
   * <p>The date and time that the FAQ was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The identifier of the index that contains the FAQ.</p>
   */
  IndexId?: string;

  /**
   * <p>The status of the FAQ. It is ready to use when the status is
   *             <code>ACTIVE</code>.</p>
   */
  Status?: FaqStatus | string;

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
   * <p>If the <code>Status</code> field is <code>FAILED</code>, the <code>ErrorMessage</code>
   *             field contains the reason why the FAQ failed.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The date and time that the FAQ was last updated.</p>
   */
  UpdatedAt?: Date;
}

export namespace DescribeFaqResponse {
  export const filterSensitiveLog = (obj: DescribeFaqResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeFaqResponse => __isa(o, "DescribeFaqResponse");
}

export interface DescribeIndexRequest {
  __type?: "DescribeIndexRequest";
  /**
   * <p>The name of the index to describe.</p>
   */
  Id: string | undefined;
}

export namespace DescribeIndexRequest {
  export const filterSensitiveLog = (obj: DescribeIndexRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeIndexRequest => __isa(o, "DescribeIndexRequest");
}

export interface DescribeIndexResponse {
  __type?: "DescribeIndexResponse";
  /**
   * <p>When th e<code>Status</code> field value is <code>FAILED</code>, the
   *         <code>ErrorMessage</code> field contains a message that explains why.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that gives Amazon Kendra permission to write
   *       to your Amazon Cloudwatch logs.</p>
   */
  RoleArn?: string;

  /**
   * <p>Configuration settings for any metadata applied to the documents in the index.</p>
   */
  DocumentMetadataConfigurations?: DocumentMetadataConfiguration[];

  /**
   * <p>the name of the index.</p>
   */
  Id?: string;

  /**
   * <p>The description of the index.</p>
   */
  Description?: string;

  /**
   * <p>For enterprise edtion indexes, you can choose to use additional capacity to meet the needs
   *       of your application. This contains the capacity units used for the index. A 0 for the query
   *       capacity or the storage capacity indicates that the index is using the default capacity for
   *       the index.</p>
   */
  CapacityUnits?: CapacityUnitsConfiguration;

  /**
   * <p>Provides information about the number of FAQ questions and answers and the number of text
   *       documents indexed.</p>
   */
  IndexStatistics?: IndexStatistics;

  /**
   * <p>The Unix datetime that the index was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The Unix datetime that the index was last updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>The name of the index.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Kendra edition used for the index. You decide the edition when you create the
   *       index.</p>
   */
  Edition?: IndexEdition | string;

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
  export const isa = (o: any): o is DescribeIndexResponse => __isa(o, "DescribeIndexResponse");
}

/**
 * <p>A document in an index.</p>
 */
export interface Document {
  __type?: "Document";
  /**
   * <p>Information to use for user context filtering.</p>
   */
  AccessControlList?: Principal[];

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
   * <p>The contents of the document. </p>
   *         <p>Documents passed to the <code>Blob</code> parameter must be base64 encoded. Your code
   *             might not need to encode the document file bytes if you're using an AWS SDK to call
   *             Amazon Kendra operations. If you are calling the Amazon Kendra endpoint directly using REST, you
   *             must base64 encode the contents before sending.</p>
   */
  Blob?: Uint8Array;

  /**
   * <p>Custom attributes to apply to the document. Use the custom attributes to provide
   *             additional information for searching, to provide facets for refining searches, and to
   *             provide additional information in the query response.</p>
   */
  Attributes?: DocumentAttribute[];

  /**
   * <p>The title of the document.</p>
   */
  Title?: string;
}

export namespace Document {
  export const filterSensitiveLog = (obj: Document): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Document => __isa(o, "Document");
}

/**
 * <p>A custom attribute value assigned to a document. </p>
 */
export interface DocumentAttribute {
  __type?: "DocumentAttribute";
  /**
   * <p>The value of the attribute.</p>
   */
  Value: DocumentAttributeValue | undefined;

  /**
   * <p>The identifier for the attribute.</p>
   */
  Key: string | undefined;
}

export namespace DocumentAttribute {
  export const filterSensitiveLog = (obj: DocumentAttribute): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DocumentAttribute => __isa(o, "DocumentAttribute");
}

/**
 * <p>The value of a custom document attribute. You can only provide one value for a custom
 *             attribute.</p>
 */
export interface DocumentAttributeValue {
  __type?: "DocumentAttributeValue";
  /**
   * <p>A string, such as "department".</p>
   */
  StringValue?: string;

  /**
   * <p>A date expressed as an ISO 8601 string.</p>
   */
  DateValue?: Date;

  /**
   * <p>A long integer value.</p>
   */
  LongValue?: number;

  /**
   * <p>A list of strings. </p>
   */
  StringListValue?: string[];
}

export namespace DocumentAttributeValue {
  export const filterSensitiveLog = (obj: DocumentAttributeValue): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DocumentAttributeValue => __isa(o, "DocumentAttributeValue");
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
  export const filterSensitiveLog = (obj: DocumentAttributeValueCountPair): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DocumentAttributeValueCountPair => __isa(o, "DocumentAttributeValueCountPair");
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
  __type?: "DocumentMetadataConfiguration";
  /**
   * <p>Provides information about how the field is used during a search.</p>
   */
  Search?: Search;

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
   * <p>The data type of the index field. </p>
   */
  Type: DocumentAttributeValueType | string | undefined;
}

export namespace DocumentMetadataConfiguration {
  export const filterSensitiveLog = (obj: DocumentMetadataConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DocumentMetadataConfiguration => __isa(o, "DocumentMetadataConfiguration");
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
  export const filterSensitiveLog = (obj: DocumentsMetadataConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DocumentsMetadataConfiguration => __isa(o, "DocumentsMetadataConfiguration");
}

export enum ErrorCode {
  INTERNAL_ERROR = "InternalError",
  INVALID_REQUEST = "InvalidRequest",
}

/**
 * <p>Information about a document attribute</p>
 */
export interface Facet {
  __type?: "Facet";
  /**
   * <p>The unique key for the document attribute.</p>
   */
  DocumentAttributeKey?: string;
}

export namespace Facet {
  export const filterSensitiveLog = (obj: Facet): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Facet => __isa(o, "Facet");
}

/**
 * <p>The facet values for the documents in the response.</p>
 */
export interface FacetResult {
  __type?: "FacetResult";
  /**
   * <p>An array of key/value pairs, where the key is the value of the attribute and the count
   *          is the number of documents that share the key value.</p>
   */
  DocumentAttributeValueCountPairs?: DocumentAttributeValueCountPair[];

  /**
   * <p>The key for the facet values. This is the same as the <code>DocumentAttributeKey</code>
   *          provided in the query.</p>
   */
  DocumentAttributeKey?: string;
}

export namespace FacetResult {
  export const filterSensitiveLog = (obj: FacetResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FacetResult => __isa(o, "FacetResult");
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
  export const filterSensitiveLog = (obj: FaqStatistics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FaqStatistics => __isa(o, "FaqStatistics");
}

export enum FaqStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

/**
 * <p>Provides information about a frequently asked questions and answer contained in an
 *             index.</p>
 */
export interface FaqSummary {
  __type?: "FaqSummary";
  /**
   * <p>The UNIX datetime that the FAQ was last updated.</p>
   */
  UpdatedAt?: Date;

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
   * <p>The UNIX datetime that the FAQ was added to the index.</p>
   */
  CreatedAt?: Date;
}

export namespace FaqSummary {
  export const filterSensitiveLog = (obj: FaqSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FaqSummary => __isa(o, "FaqSummary");
}

/**
 * <p>Provides information that you can use to highlight a search result so that your users
 *             can quickly identify terms in the response.</p>
 */
export interface Highlight {
  __type?: "Highlight";
  /**
   * <p>Indicates whether the response is the best response. True if this is the best
   *             response; otherwise, false.</p>
   */
  TopAnswer?: boolean;

  /**
   * <p>The zero-based location in the response string where the highlight ends.</p>
   */
  EndOffset: number | undefined;

  /**
   * <p>The zero-based location in the response string where the highlight starts.</p>
   */
  BeginOffset: number | undefined;
}

export namespace Highlight {
  export const filterSensitiveLog = (obj: Highlight): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Highlight => __isa(o, "Highlight");
}

/**
 * <p>A summary of information about an index.</p>
 */
export interface IndexConfigurationSummary {
  __type?: "IndexConfigurationSummary";
  /**
   * <p>A unique identifier for the index. Use this to identify the index when you are using
   *             operations such as <code>Query</code>, <code>DescribeIndex</code>,
   *                 <code>UpdateIndex</code>, and <code>DeleteIndex</code>.</p>
   */
  Id?: string;

  /**
   * <p>The Unix timestamp when the index was last updated by the <code>UpdateIndex</code>
   *             operation.</p>
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>Indicates whether the index is a enterprise edition index or a developer edition
   *             index. </p>
   */
  Edition?: IndexEdition | string;

  /**
   * <p>The name of the index.</p>
   */
  Name?: string;

  /**
   * <p>The Unix timestamp when the index was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The current status of the index. When the status is <code>ACTIVE</code>, the index is
   *             ready to search.</p>
   */
  Status: IndexStatus | string | undefined;
}

export namespace IndexConfigurationSummary {
  export const filterSensitiveLog = (obj: IndexConfigurationSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IndexConfigurationSummary => __isa(o, "IndexConfigurationSummary");
}

export enum IndexEdition {
  DEVELOPER_EDITION = "DEVELOPER_EDITION",
  ENTERPRISE_EDITION = "ENTERPRISE_EDITION",
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
  export const filterSensitiveLog = (obj: IndexStatistics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IndexStatistics => __isa(o, "IndexStatistics");
}

export enum IndexStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  SYSTEM_UPDATING = "SYSTEM_UPDATING",
  UPDATING = "UPDATING",
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
  export const isa = (o: any): o is InternalServerException => __isa(o, "InternalServerException");
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
  export const filterSensitiveLog = (obj: ListDataSourcesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDataSourcesRequest => __isa(o, "ListDataSourcesRequest");
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
  SummaryItems?: DataSourceSummary[];
}

export namespace ListDataSourcesResponse {
  export const filterSensitiveLog = (obj: ListDataSourcesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDataSourcesResponse => __isa(o, "ListDataSourcesResponse");
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
  export const isa = (o: any): o is ListDataSourceSyncJobsRequest => __isa(o, "ListDataSourceSyncJobsRequest");
}

export interface ListDataSourceSyncJobsResponse {
  __type?: "ListDataSourceSyncJobsResponse";
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
  export const isa = (o: any): o is ListDataSourceSyncJobsResponse => __isa(o, "ListDataSourceSyncJobsResponse");
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
  export const filterSensitiveLog = (obj: ListFaqsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListFaqsRequest => __isa(o, "ListFaqsRequest");
}

export interface ListFaqsResponse {
  __type?: "ListFaqsResponse";
  /**
   * <p>information about the FAQs associated with the specified index.</p>
   */
  FaqSummaryItems?: FaqSummary[];

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
  export const filterSensitiveLog = (obj: ListFaqsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListFaqsResponse => __isa(o, "ListFaqsResponse");
}

export interface ListIndicesRequest {
  __type?: "ListIndicesRequest";
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
  export const isa = (o: any): o is ListIndicesRequest => __isa(o, "ListIndicesRequest");
}

export interface ListIndicesResponse {
  __type?: "ListIndicesResponse";
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
  export const isa = (o: any): o is ListIndicesResponse => __isa(o, "ListIndicesResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
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
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>A list of tags associated with the index, FAQ, or data source.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

/**
 * <p>Provides configuration information for data sources that connect to OneDrive.</p>
 */
export interface OneDriveConfiguration {
  __type?: "OneDriveConfiguration";
  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that contains the user
   *             name and password to connect to OneDrive. The user namd should be the application ID for
   *             the OneDrive application, and the password is the application key for the OneDrive
   *             application.</p>
   */
  SecretArn: string | undefined;

  /**
   * <p>Tha Azure Active Directory domain of the organization. </p>
   */
  TenantDomain: string | undefined;

  /**
   * <p>List of regular expressions applied to documents. Items that match the exclusion
   *             pattern are not indexed. If you provide both an inclusion pattern and an exclusion
   *             pattern, any item that matches the exclusion pattern isn't indexed. </p>
   *         <p>The exclusion pattern is applied to the file name.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * <p>A list of user accounts whose documents should be indexed.</p>
   */
  OneDriveUsers: OneDriveUsers | undefined;

  /**
   * <p>A list of regular expression patterns. Documents that match the pattern are included
   *             in the index. Documents that don't match the pattern are excluded from the index. If a
   *             document matches both an inclusion pattern and an exclusion pattern, the document is not
   *             included in the index. </p>
   *         <p>The exclusion pattern is applied to the file name.</p>
   */
  InclusionPatterns?: string[];

  /**
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map Microsoft
   *             OneDrive fields to custom fields in the Amazon Kendra index. You must first create the index
   *             fields before you map OneDrive fields.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

export namespace OneDriveConfiguration {
  export const filterSensitiveLog = (obj: OneDriveConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OneDriveConfiguration => __isa(o, "OneDriveConfiguration");
}

/**
 * <p>User accounts whose documents should be indexed.</p>
 */
export interface OneDriveUsers {
  __type?: "OneDriveUsers";
  /**
   * <p>A list of users whose documents should be indexed. Specify the user names in email
   *             format, for example, <code>username@tenantdomain</code>. If you need to index the
   *             documents of more than 100 users, use the <code>OneDriveUserS3Path</code> field to
   *             specify the location of a file containing a list of users.</p>
   */
  OneDriveUserList?: string[];

  /**
   * <p>The S3 bucket location of a file containing a list of users whose documents should be
   *             indexed.</p>
   */
  OneDriveUserS3Path?: S3Path;
}

export namespace OneDriveUsers {
  export const filterSensitiveLog = (obj: OneDriveUsers): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OneDriveUsers => __isa(o, "OneDriveUsers");
}

export enum Order {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

/**
 * <p>Provides user and group information for document access filtering.</p>
 */
export interface Principal {
  __type?: "Principal";
  /**
   * <p>The type of principal.</p>
   */
  Type: PrincipalType | string | undefined;

  /**
   * <p>The name of the user or group.</p>
   */
  Name: string | undefined;

  /**
   * <p>Whether to allow or deny access to the principal.</p>
   */
  Access: ReadAccessType | string | undefined;
}

export namespace Principal {
  export const filterSensitiveLog = (obj: Principal): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Principal => __isa(o, "Principal");
}

export enum PrincipalType {
  GROUP = "GROUP",
  USER = "USER",
}

export enum QueryIdentifiersEnclosingOption {
  DOUBLE_QUOTES = "DOUBLE_QUOTES",
  NONE = "NONE",
}

export interface QueryRequest {
  __type?: "QueryRequest";
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
   * <p>An array of documents attributes. Amazon Kendra returns a count for each attribute key
   *          specified. You can use this information to help narrow the search for your user.</p>
   */
  Facets?: Facet[];

  /**
   * <p>Sets the type of query. Only results for the specified query type are returned.</p>
   */
  QueryResultTypeFilter?: QueryResultType | string;

  /**
   * <p>An array of document attributes to include in the response. No other document attributes
   *          are included in the response. By default all document attributes are included in the
   *          response. </p>
   */
  RequestedDocumentAttributes?: string[];
}

export namespace QueryRequest {
  export const filterSensitiveLog = (obj: QueryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QueryRequest => __isa(o, "QueryRequest");
}

export interface QueryResult {
  __type?: "QueryResult";
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
   * <p>The number of items returned by the search. Use this to determine when you have
   *          requested the last set of results.</p>
   */
  TotalNumberOfResults?: number;

  /**
   * <p>The unique identifier for the search. You use <code>QueryId</code> to identify the
   *          search when using the feedback API.</p>
   */
  QueryId?: string;
}

export namespace QueryResult {
  export const filterSensitiveLog = (obj: QueryResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QueryResult => __isa(o, "QueryResult");
}

/**
 * <p>A single query result.</p>
 *          <p>A query result contains information about a document returned by the query. This
 *          includes the original location of the document, a list of attributes assigned to the
 *          document, and relevant text from the document that satisfies the query.</p>
 */
export interface QueryResultItem {
  __type?: "QueryResultItem";
  /**
   * <p>The unique identifier for the query result.</p>
   */
  Id?: string;

  /**
   * <p>The title of the document. Contains the text of the title and information for
   *          highlighting the relevant terms in the title.</p>
   */
  DocumentTitle?: TextWithHighlights;

  /**
   * <p>The URI of the original location of the document.</p>
   */
  DocumentURI?: string;

  /**
   * <p>An array of document attributes for the document that the query result maps to. For
   *          example, the document author (Author) or the source URI (SourceUri) of the document.</p>
   */
  DocumentAttributes?: DocumentAttribute[];

  /**
   * <p>The type of document. </p>
   */
  Type?: QueryResultType | string;

  /**
   * <p>The unique identifier for the document.</p>
   */
  DocumentId?: string;

  /**
   * <p>One or more additional attribues associated with the query result.</p>
   */
  AdditionalAttributes?: AdditionalResultAttribute[];

  /**
   * <p>An extract of the text in the document. Contains information about highlighting the
   *          relevant terms in the excerpt.</p>
   */
  DocumentExcerpt?: TextWithHighlights;
}

export namespace QueryResultItem {
  export const filterSensitiveLog = (obj: QueryResultItem): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QueryResultItem => __isa(o, "QueryResultItem");
}

export enum QueryResultType {
  ANSWER = "ANSWER",
  DOCUMENT = "DOCUMENT",
  QUESTION_ANSWER = "QUESTION_ANSWER",
}

export enum ReadAccessType {
  ALLOW = "ALLOW",
  DENY = "DENY",
}

/**
 * <p>Provides information for manually tuning the relevance of a field in a search. When a
 *             query includes terms that match the field, the results are given a boost in the response
 *             based on these tuning parameters.</p>
 */
export interface Relevance {
  __type?: "Relevance";
  /**
   * <p>Indicates that this field determines how "fresh" a document is. For example, if
   *             document 1 was created on November 5, and document 2 was created on October 31, document
   *             1 is "fresher" than document 2. You can only set the <code>Freshness</code> field on one
   *                 <code>DATE</code> type field. Only applies to <code>DATE</code> fields.</p>
   */
  Freshness?: boolean;

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
   * <p>The relative importance of the field in the search. Larger numbers provide more of a
   *             boost than smaller numbers.</p>
   */
  Importance?: number;
}

export namespace Relevance {
  export const filterSensitiveLog = (obj: Relevance): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Relevance => __isa(o, "Relevance");
}

/**
 * <p>Provides feedback on how relevant a document is to a search. Your application uses the
 *                 <a>SubmitFeedback</a> operation to provide relevance information.</p>
 */
export interface RelevanceFeedback {
  __type?: "RelevanceFeedback";
  /**
   * <p>The unique identifier of the search result that the user provided relevance feedback
   *             for.</p>
   */
  ResultId: string | undefined;

  /**
   * <p>Whether to document was relevant or not relevant to the search.</p>
   */
  RelevanceValue: RelevanceType | string | undefined;
}

export namespace RelevanceFeedback {
  export const filterSensitiveLog = (obj: RelevanceFeedback): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RelevanceFeedback => __isa(o, "RelevanceFeedback");
}

export enum RelevanceType {
  NOT_RELEVANT = "NOT_RELEVANT",
  RELEVANT = "RELEVANT",
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
  export const isa = (o: any): o is ResourceAlreadyExistException => __isa(o, "ResourceAlreadyExistException");
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
  export const isa = (o: any): o is ResourceInUseException => __isa(o, "ResourceInUseException");
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
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
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
  export const isa = (o: any): o is ResourceUnavailableException => __isa(o, "ResourceUnavailableException");
}

/**
 * <p>Provides configuration information for a data source to index documents in an Amazon
 *             S3 bucket.</p>
 */
export interface S3DataSourceConfiguration {
  __type?: "S3DataSourceConfiguration";
  /**
   * <p>A list of glob patterns for documents that should not be indexed. If a document that
   *             matches an inclusion prefix also matches an exclusion pattern, the document is not
   *             indexed.</p>
   *         <p>For more information about glob patterns, see <a href="https://en.wikipedia.org/wiki/Glob_(programming)">glob (programming)</a> in
   *                 <i>Wikipedia</i>.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * <p>A list of S3 prefixes for the documents that should be included in the index.</p>
   */
  InclusionPrefixes?: string[];

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
}

export namespace S3DataSourceConfiguration {
  export const filterSensitiveLog = (obj: S3DataSourceConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3DataSourceConfiguration => __isa(o, "S3DataSourceConfiguration");
}

/**
 * <p>Information required to find a specific file in an Amazon S3 bucket.</p>
 */
export interface S3Path {
  __type?: "S3Path";
  /**
   * <p>The name of the file.</p>
   */
  Key: string | undefined;

  /**
   * <p>The name of the S3 bucket that contains the file.</p>
   */
  Bucket: string | undefined;
}

export namespace S3Path {
  export const filterSensitiveLog = (obj: S3Path): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3Path => __isa(o, "S3Path");
}

/**
 * <p>Defines configuration for syncing a Salesforce chatter feed. The contents of the
 *             object comes from the Salesforce FeedItem table.</p>
 */
export interface SalesforceChatterFeedConfiguration {
  __type?: "SalesforceChatterFeedConfiguration";
  /**
   * <p>Filters the documents in the feed based on status of the user. When you specify
   *                 <code>ACTIVE_USERS</code> only documents from users who have an active account are
   *             indexed. When you specify <code>STANDARD_USER</code> only documents for Salesforce
   *             standard users are documented. You can specify both.</p>
   */
  IncludeFilterTypes?: (SalesforceChatterFeedIncludeFilterType | string)[];

  /**
   * <p>The name of the column in the Salesforce FeedItem table that contains the content to
   *             index. Typically this is the <code>Body</code> column.</p>
   */
  DocumentDataFieldName: string | undefined;

  /**
   * <p>The name of the column in the Salesforce FeedItem table that contains the title of the
   *             document. This is typically the <code>Title</code> collumn.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * <p>Maps fields from a Salesforce chatter feed into Amazon Kendra index fields.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

export namespace SalesforceChatterFeedConfiguration {
  export const filterSensitiveLog = (obj: SalesforceChatterFeedConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SalesforceChatterFeedConfiguration =>
    __isa(o, "SalesforceChatterFeedConfiguration");
}

export enum SalesforceChatterFeedIncludeFilterType {
  ACTIVE_USER = "ACTIVE_USER",
  STANDARD_USER = "STANDARD_USER",
}

/**
 * <p>Provides configuration information for connecting to a Salesforce data source.</p>
 */
export interface SalesforceConfiguration {
  __type?: "SalesforceConfiguration";
  /**
   * <p>A list of regular expression patterns. Documents that match the patterns are included
   *             in the index. Documents that don't match the patterns are excluded from the index. If a
   *             document matches both an inclusion pattern and an exclusion pattern, the document is not
   *             included in the index.</p>
   *         <p>The regex is applied to the name of the attached file.</p>
   */
  IncludeAttachmentFilePatterns?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that contains the
   *             key/value pairs required to connect to your Salesforce instance. The secret must contain
   *             a JSON structure with the following keys:</p>
   *         <ul>
   *             <li>
   *                 <p>authenticationUrl - The OAUTH endpoint that Amazon Kendra connects to get an OAUTH
   *                     token. </p>
   *             </li>
   *             <li>
   *                 <p>consumerKey - The application public key generated when you created your
   *                     Salesforce application.</p>
   *             </li>
   *             <li>
   *                 <p>consumerSecret - The application private key generated when you created your
   *                     Salesforce application.</p>
   *             </li>
   *             <li>
   *                 <p>password - The password associated with the user logging in to the Salesforce
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>securityToken - The token associated with the user account logging in to the
   *                     Salesforce instance.</p>
   *             </li>
   *             <li>
   *                 <p>username - The user name of the user logging in to the Salesforce
   *                     instance.</p>
   *             </li>
   *          </ul>
   */
  SecretArn: string | undefined;

  /**
   * <p>The instance URL for the Salesforce site that you want to index.</p>
   */
  ServerUrl: string | undefined;

  /**
   * <p>Indicates whether Amazon Kendra should index attachments to Salesforce objects.</p>
   */
  CrawlAttachments?: boolean;

  /**
   * <p>Specifies configuration information for the knowlege article types that Amazon Kendra
   *             indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of
   *             knowledge articles, or the custom fields of custom knowledge articles, but not
   *             both.</p>
   */
  KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration;

  /**
   * <p>Provides configuration information for processing attachments to Salesforce standard
   *             objects. </p>
   */
  StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration;

  /**
   * <p>A list of regular expression patterns. Documents that match the patterns are excluded
   *             from the index. Documents that don't match the patterns are included in the index. If a
   *             document matches both an exclusion pattern and an inclusion pattern, the document is not
   *             included in the index.</p>
   *         <p>The regex is applied to the name of the attached file.</p>
   */
  ExcludeAttachmentFilePatterns?: string[];

  /**
   * <p>Specifies the Salesforce standard objects that Amazon Kendra indexes.</p>
   */
  StandardObjectConfigurations?: SalesforceStandardObjectConfiguration[];

  /**
   * <p>Specifies configuration information for Salesforce chatter feeds.</p>
   */
  ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration;
}

export namespace SalesforceConfiguration {
  export const filterSensitiveLog = (obj: SalesforceConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SalesforceConfiguration => __isa(o, "SalesforceConfiguration");
}

/**
 * <p>Provides configuration information for indexing Salesforce custom articles.</p>
 */
export interface SalesforceCustomKnowledgeArticleTypeConfiguration {
  __type?: "SalesforceCustomKnowledgeArticleTypeConfiguration";
  /**
   * <p>One or more objects that map fields in the custom knowledge article to fields in the
   *             Amazon Kendra index.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * <p>The name of the field in the custom knowledge article that contains the document data
   *             to index.</p>
   */
  DocumentDataFieldName: string | undefined;

  /**
   * <p>The name of the configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the field in the custom knowledge article that contains the document
   *             title.</p>
   */
  DocumentTitleFieldName?: string;
}

export namespace SalesforceCustomKnowledgeArticleTypeConfiguration {
  export const filterSensitiveLog = (obj: SalesforceCustomKnowledgeArticleTypeConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SalesforceCustomKnowledgeArticleTypeConfiguration =>
    __isa(o, "SalesforceCustomKnowledgeArticleTypeConfiguration");
}

/**
 * <p>Specifies configuration information for the knowlege article types that Amazon Kendra
 *             indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of
 *             knowledge articles, or the custom fields of custom knowledge articles, but not both
 *         </p>
 */
export interface SalesforceKnowledgeArticleConfiguration {
  __type?: "SalesforceKnowledgeArticleConfiguration";
  /**
   * <p>Provides configuration information for standard Salesforce knowledge articles.</p>
   */
  StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration;

  /**
   * <p>Specifies the document states that should be included when Amazon Kendra indexes knowledge
   *             articles. You must specify at least one state.</p>
   */
  IncludedStates: (SalesforceKnowledgeArticleState | string)[] | undefined;

  /**
   * <p>Provides configuration information for custom Salesforce knowledge articles.</p>
   */
  CustomKnowledgeArticleTypeConfigurations?: SalesforceCustomKnowledgeArticleTypeConfiguration[];
}

export namespace SalesforceKnowledgeArticleConfiguration {
  export const filterSensitiveLog = (obj: SalesforceKnowledgeArticleConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SalesforceKnowledgeArticleConfiguration =>
    __isa(o, "SalesforceKnowledgeArticleConfiguration");
}

export enum SalesforceKnowledgeArticleState {
  ARCHIVED = "ARCHIVED",
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}

/**
 * <p>Provides configuration information for standard Salesforce knowledge articles.</p>
 */
export interface SalesforceStandardKnowledgeArticleTypeConfiguration {
  __type?: "SalesforceStandardKnowledgeArticleTypeConfiguration";
  /**
   * <p>The name of the field that contains the document title.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * <p>One or more objects that map fields in the knowledge article to Amazon Kendra index fields.
   *             The index field must exist before you can map a Salesforce field to it.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * <p>The name of the field that contains the document data to index.</p>
   */
  DocumentDataFieldName: string | undefined;
}

export namespace SalesforceStandardKnowledgeArticleTypeConfiguration {
  export const filterSensitiveLog = (obj: SalesforceStandardKnowledgeArticleTypeConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SalesforceStandardKnowledgeArticleTypeConfiguration =>
    __isa(o, "SalesforceStandardKnowledgeArticleTypeConfiguration");
}

/**
 * <p>Provides configuration information for processing attachments to Salesforce standard
 *             objects. </p>
 */
export interface SalesforceStandardObjectAttachmentConfiguration {
  __type?: "SalesforceStandardObjectAttachmentConfiguration";
  /**
   * <p>The name of the field used for the document title.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * <p>One or more objects that map fields in attachments to Amazon Kendra index fields.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

export namespace SalesforceStandardObjectAttachmentConfiguration {
  export const filterSensitiveLog = (obj: SalesforceStandardObjectAttachmentConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SalesforceStandardObjectAttachmentConfiguration =>
    __isa(o, "SalesforceStandardObjectAttachmentConfiguration");
}

/**
 * <p>Specifies confguration information for indexing a single standard object.</p>
 */
export interface SalesforceStandardObjectConfiguration {
  __type?: "SalesforceStandardObjectConfiguration";
  /**
   * <p>The name of the field in the standard object table that contains the document
   *             titleB.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * <p>One or more objects that map fields in the standard object to Amazon Kendra index fields.
   *             The index field must exist before you can map a Salesforce field to it.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * <p>The name of the standard object.</p>
   */
  Name: SalesforceStandardObjectName | string | undefined;

  /**
   * <p>The name of the field in the standard object table that contains the document
   *             contents.</p>
   */
  DocumentDataFieldName: string | undefined;
}

export namespace SalesforceStandardObjectConfiguration {
  export const filterSensitiveLog = (obj: SalesforceStandardObjectConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SalesforceStandardObjectConfiguration =>
    __isa(o, "SalesforceStandardObjectConfiguration");
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
 * <p>Provides information about how a custom index field is used during a search.</p>
 */
export interface Search {
  __type?: "Search";
  /**
   * <p>Indicates that the field can be used to create search facets, a count of results for
   *             each value in the field. The default is <code>false</code> .</p>
   */
  Facetable?: boolean;

  /**
   * <p>Determines whether the field is returned in the query response. The default is
   *                 <code>true</code>.</p>
   */
  Displayable?: boolean;

  /**
   * <p>Determines whether the field can be used to sort the results of a query. If you
   *             specify sorting on a field that does not have <code>Sortable</code> set to
   *                 <code>true</code>, Amazon Kendra returns an exception. The default is
   *             <code>false</code>.</p>
   */
  Sortable?: boolean;

  /**
   * <p>Determines whether the field is used in the search. If the <code>Searchable</code>
   *             field is <code>true</code>, you can use relevance tuning to manually tune how Amazon Kendra
   *             weights the field in the search. The default is <code>true</code> for string fields and
   *                 <code>false</code> for number and date fields.</p>
   */
  Searchable?: boolean;
}

export namespace Search {
  export const filterSensitiveLog = (obj: Search): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Search => __isa(o, "Search");
}

/**
 * <p>Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt data
 *             indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs.</p>
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
  export const filterSensitiveLog = (obj: ServerSideEncryptionConfiguration): any => ({
    ...obj,
    ...(obj.KmsKeyId && { KmsKeyId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is ServerSideEncryptionConfiguration => __isa(o, "ServerSideEncryptionConfiguration");
}

export enum ServiceNowBuildVersionType {
  LONDON = "LONDON",
  OTHERS = "OTHERS",
}

/**
 * <p>Provides configuration information required to connect to a ServiceNow data
 *             source.</p>
 */
export interface ServiceNowConfiguration {
  __type?: "ServiceNowConfiguration";
  /**
   * <p>The identifier of the release that the ServiceNow host is running. If the host is not
   *             running the <code>LONDON</code> release, use <code>OTHERS</code>.</p>
   */
  ServiceNowBuildVersion: ServiceNowBuildVersionType | string | undefined;

  /**
   * <p>Provides configuration information for crawling service catalogs in the ServiceNow
   *             site.</p>
   */
  ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secret Manager secret that contains the user
   *             name and password required to connect to the ServiceNow instance.</p>
   */
  SecretArn: string | undefined;

  /**
   * <p>The ServiceNow instance that the data source connects to. The host endpoint should
   *             look like the following: <code>{instance}.service-now.com.</code>
   *          </p>
   */
  HostUrl: string | undefined;

  /**
   * <p>Provides configuration information for crawling knowledge articles in the ServiceNow
   *             site.</p>
   */
  KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration;
}

export namespace ServiceNowConfiguration {
  export const filterSensitiveLog = (obj: ServiceNowConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceNowConfiguration => __isa(o, "ServiceNowConfiguration");
}

/**
 * <p>Provides configuration information for crawling knowledge articles in the ServiceNow
 *             site.</p>
 */
export interface ServiceNowKnowledgeArticleConfiguration {
  __type?: "ServiceNowKnowledgeArticleConfiguration";
  /**
   * <p>The name of the ServiceNow field that is mapped to the index document title
   *             field.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * <p>List of regular expressions applied to knowledge articles. Items that don't match the
   *             inclusion pattern are not indexed. The regex is applied to the field specified in the
   *                 <code>PatternTargetField</code>
   *          </p>
   */
  ExcludeAttachmentFilePatterns?: string[];

  /**
   * <p>The name of the ServiceNow field that is mapped to the index document contents field
   *             in the Amazon Kendra index.</p>
   */
  DocumentDataFieldName: string | undefined;

  /**
   * <p>Indicates whether Amazon Kendra should index attachments to knowledge articles.</p>
   */
  CrawlAttachments?: boolean;

  /**
   * <p>Mapping between ServiceNow fields and Amazon Kendra index fields. You must create the index
   *             field before you map the field.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * <p>List of regular expressions applied to knowledge articles. Items that don't match the
   *             inclusion pattern are not indexed. The regex is applied to the field specified in the
   *                 <code>PatternTargetField</code>.</p>
   */
  IncludeAttachmentFilePatterns?: string[];
}

export namespace ServiceNowKnowledgeArticleConfiguration {
  export const filterSensitiveLog = (obj: ServiceNowKnowledgeArticleConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceNowKnowledgeArticleConfiguration =>
    __isa(o, "ServiceNowKnowledgeArticleConfiguration");
}

/**
 * <p>Provides configuration information for crawling service catalog items in the
 *             ServiceNow site</p>
 */
export interface ServiceNowServiceCatalogConfiguration {
  __type?: "ServiceNowServiceCatalogConfiguration";
  /**
   * <p>The name of the ServiceNow field that is mapped to the index document title
   *             field.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * <p>The name of the ServiceNow field that is mapped to the index document contents field
   *             in the Amazon Kendra index.</p>
   */
  DocumentDataFieldName: string | undefined;

  /**
   * <p>Indicates whether Amazon Kendra should crawl attachments to the service catalog items.
   *         </p>
   */
  CrawlAttachments?: boolean;

  /**
   * <p>Determines the types of file attachments that are excluded from the index.</p>
   */
  ExcludeAttachmentFilePatterns?: string[];

  /**
   * <p>Determines the types of file attachments that are included in the index. </p>
   */
  IncludeAttachmentFilePatterns?: string[];

  /**
   * <p>Mapping between ServiceNow fields and Amazon Kendra index fields. You must create the index
   *             field before you map the field.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
}

export namespace ServiceNowServiceCatalogConfiguration {
  export const filterSensitiveLog = (obj: ServiceNowServiceCatalogConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceNowServiceCatalogConfiguration =>
    __isa(o, "ServiceNowServiceCatalogConfiguration");
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
  export const isa = (o: any): o is ServiceQuotaExceededException => __isa(o, "ServiceQuotaExceededException");
}

/**
 * <p>Provides configuration information for connecting to a Microsoft SharePoint data
 *             source.</p>
 */
export interface SharePointConfiguration {
  __type?: "SharePointConfiguration";
  /**
   * <p>A list of regular expression patterns. Documents that match the patterns are excluded
   *             from the index. Documents that don't match the patterns are included in the index. If a
   *             document matches both an exclusion pattern and an inclusion pattern, the document is not
   *             included in the index.</p>
   *         <p>The regex is applied to the display URL of the SharePoint document.</p>
   */
  ExclusionPatterns?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of credentials stored in AWS Secrets Manager. The
   *             credentials should be a user/password pair. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-sharepoint.html">Using a
   *                 Microsoft SharePoint Data Source</a>. For more information about AWS Secrets
   *             Manager, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"> What Is AWS Secrets Manager
   *             </a> in the <i>AWS Secrets Manager</i> user guide.</p>
   */
  SecretArn: string | undefined;

  /**
   * <p>The URLs of the Microsoft SharePoint site that contains the documents that should be
   *             indexed.</p>
   */
  Urls: string[] | undefined;

  /**
   * <p>
   *             <code>TRUE</code> to include attachments to documents stored in your Microsoft
   *             SharePoint site in the index; otherwise, <code>FALSE</code>.</p>
   */
  CrawlAttachments?: boolean;

  /**
   * <p>Set to <code>TRUE</code> to use the Microsoft SharePoint change log to determine the
   *             documents that need to be updated in the index. Depending on the size of the SharePoint
   *             change log, it may take longer for Amazon Kendra to use the change log than it takes it
   *             to determine the changed documents using the Amazon Kendra document crawler.</p>
   */
  UseChangeLog?: boolean;

  /**
   * <p>A list of <code>DataSourceToIndexFieldMapping</code> objects that map Microsoft
   *             SharePoint attributes to custom fields in the Amazon Kendra index. You must first create the
   *             index fields using the  operation before you map
   *             SharePoint attributes. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping Data Source Fields</a>.</p>
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];

  /**
   * <p>The version of Microsoft SharePoint that you are using as a data source.</p>
   */
  SharePointVersion: SharePointVersion | string | undefined;

  /**
   * <p>The Microsoft SharePoint attribute field that contains the title of the
   *             document.</p>
   */
  DocumentTitleFieldName?: string;

  /**
   * <p>Provides information for connecting to an Amazon VPC.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * <p>A list of regular expression patterns. Documents that match the patterns are included
   *             in the index. Documents that don't match the patterns are excluded from the index. If a
   *             document matches both an inclusion pattern and an exclusion pattern, the document is not
   *             included in the index.</p>
   *         <p>The regex is applied to the display URL of the SharePoint document.</p>
   */
  InclusionPatterns?: string[];
}

export namespace SharePointConfiguration {
  export const filterSensitiveLog = (obj: SharePointConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SharePointConfiguration => __isa(o, "SharePointConfiguration");
}

export enum SharePointVersion {
  SHAREPOINT_ONLINE = "SHAREPOINT_ONLINE",
}

/**
 * <p>Specifies the document attribute to use to sort the response to a Amazon Kendra query. You can
 *             specify a single attribute for sorting. The attribute must have the
 *                 <code>Sortable</code> flag set to <code>true</code>, otherwise Amazon Kendra returns an
 *             exception.</p>
 */
export interface SortingConfiguration {
  __type?: "SortingConfiguration";
  /**
   * <p>The order that the results should be returned in. In case of ties, the relevance
   *             assigned to the result by Amazon Kendra is used as the tie-breaker.</p>
   */
  SortOrder: SortOrder | string | undefined;

  /**
   * <p>The name of the document attribute used to sort the response. You can use any field
   *             that has the <code>Sortable</code> flag set to true.</p>
   *         <p>You can also sort by any of the following built-in attributes:</p>
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
}

export namespace SortingConfiguration {
  export const filterSensitiveLog = (obj: SortingConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SortingConfiguration => __isa(o, "SortingConfiguration");
}

export enum SortOrder {
  ASC = "ASC",
  DESC = "DESC",
}

/**
 * <p>Provides information that configures Amazon Kendra to use a SQL database.</p>
 */
export interface SqlConfiguration {
  __type?: "SqlConfiguration";
  /**
   * <p>Determines whether Amazon Kendra encloses SQL identifiers in double quotes (") when making a
   *             database query.</p>
   *         <p>By default, Amazon Kendra passes SQL identifiers the way that they are entered into the data
   *             source configuration. It does not change the case of identifiers or enclose them in
   *             quotes.</p>
   *         <p>PostgreSQL internally converts uppercase characters to lower case characters in
   *             identifiers unless they are quoted. Choosing this option encloses identifiers in quotes
   *             so that PostgreSQL does not convert the character's case.</p>
   *         <p>For MySQL databases, you must enable the <code>ansi_quotes</code> option when you
   *             choose this option.</p>
   */
  QueryIdentifiersEnclosingOption?: QueryIdentifiersEnclosingOption | string;
}

export namespace SqlConfiguration {
  export const filterSensitiveLog = (obj: SqlConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SqlConfiguration => __isa(o, "SqlConfiguration");
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
  export const filterSensitiveLog = (obj: StartDataSourceSyncJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartDataSourceSyncJobRequest => __isa(o, "StartDataSourceSyncJobRequest");
}

export interface StartDataSourceSyncJobResponse {
  __type?: "StartDataSourceSyncJobResponse";
  /**
   * <p>Identifies a particular synchronization job.</p>
   */
  ExecutionId?: string;
}

export namespace StartDataSourceSyncJobResponse {
  export const filterSensitiveLog = (obj: StartDataSourceSyncJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartDataSourceSyncJobResponse => __isa(o, "StartDataSourceSyncJobResponse");
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
  export const filterSensitiveLog = (obj: StopDataSourceSyncJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopDataSourceSyncJobRequest => __isa(o, "StopDataSourceSyncJobRequest");
}

export interface SubmitFeedbackRequest {
  __type?: "SubmitFeedbackRequest";
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
  RelevanceFeedbackItems?: RelevanceFeedback[];

  /**
   * <p>Tells Amazon Kendra that a particular search result link was chosen by
   *         the user. </p>
   */
  ClickFeedbackItems?: ClickFeedback[];
}

export namespace SubmitFeedbackRequest {
  export const filterSensitiveLog = (obj: SubmitFeedbackRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SubmitFeedbackRequest => __isa(o, "SubmitFeedbackRequest");
}

/**
 * <p>A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values
 *       can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : /
 *       = + - @.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The value associated with the tag. The value may be an empty string but it can't be
   *       null.</p>
   */
  Value: string | undefined;

  /**
   * <p>The key for the tag. Keys are not case sensitive and must be unique for the index, FAQ, or
   *       data source.</p>
   */
  Key: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
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
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
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

  /**
   * <p>The total size, in bytes, of the indexed documents.</p>
   */
  IndexedTextBytes: number | undefined;
}

export namespace TextDocumentStatistics {
  export const filterSensitiveLog = (obj: TextDocumentStatistics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TextDocumentStatistics => __isa(o, "TextDocumentStatistics");
}

/**
 * <p>Provides text and information about where to highlight the text.</p>
 */
export interface TextWithHighlights {
  __type?: "TextWithHighlights";
  /**
   * <p>The beginning and end of the text that should be highlighted.</p>
   */
  Highlights?: Highlight[];

  /**
   * <p>The text to display to the user.</p>
   */
  Text?: string;
}

export namespace TextWithHighlights {
  export const filterSensitiveLog = (obj: TextWithHighlights): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TextWithHighlights => __isa(o, "TextWithHighlights");
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
  export const isa = (o: any): o is ThrottlingException => __isa(o, "ThrottlingException");
}

/**
 * <p>Provides a range of time.</p>
 */
export interface TimeRange {
  __type?: "TimeRange";
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
  export const isa = (o: any): o is TimeRange => __isa(o, "TimeRange");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
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
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
}

export interface UpdateDataSourceRequest {
  __type?: "UpdateDataSourceRequest";
  /**
   * <p>The unique identifier of the data source to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the new role to use when the data source is accessing
   *       resources on your behalf.</p>
   */
  RoleArn?: string;

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
   * <p>The new description for the data source.</p>
   */
  Description?: string;

  /**
   * <p>Configuration information for a Amazon Kendra data source.</p>
   */
  Configuration?: DataSourceConfiguration;

  /**
   * <p>The new update schedule for the data source.</p>
   */
  Schedule?: string;
}

export namespace UpdateDataSourceRequest {
  export const filterSensitiveLog = (obj: UpdateDataSourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDataSourceRequest => __isa(o, "UpdateDataSourceRequest");
}

export interface UpdateIndexRequest {
  __type?: "UpdateIndexRequest";
  /**
   * <p>Sets the number of addtional storage and query capacity units that should be
   *     used by the index. You can change the capacity of the index up to 5 times per day.</p>
   *          <p>If you are using extra storage units, you can't reduce the storage capacity
   *     below that required to meet the storage needs for your index.</p>
   */
  CapacityUnits?: CapacityUnitsConfiguration;

  /**
   * <p>The identifier of the index to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The document metadata to update. </p>
   */
  DocumentMetadataConfigurationUpdates?: DocumentMetadataConfiguration[];

  /**
   * <p>A new description for the index.</p>
   */
  Description?: string;

  /**
   * <p>A new IAM role that gives Amazon Kendra permission to access your Amazon CloudWatch
   *       logs.</p>
   */
  RoleArn?: string;

  /**
   * <p>The name of the index to update.</p>
   */
  Name?: string;
}

export namespace UpdateIndexRequest {
  export const filterSensitiveLog = (obj: UpdateIndexRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateIndexRequest => __isa(o, "UpdateIndexRequest");
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
  export const isa = (o: any): o is ValidationException => __isa(o, "ValidationException");
}
