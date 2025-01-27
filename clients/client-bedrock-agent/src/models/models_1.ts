// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import {
  AgentKnowledgeBase,
  AgentKnowledgeBaseSummary,
  AgentStatus,
  AgentVersion,
  AgentVersionFilterSensitiveLog,
  AgentVersionSummary,
  ContentDataSourceType,
  CustomDocumentIdentifier,
  DocumentIdentifier,
  FlowDefinition,
  FlowValidation,
  FlowValidationFilterSensitiveLog,
  KnowledgeBaseDocumentDetail,
  KnowledgeBaseState,
  PromptInferenceConfiguration,
  PromptTemplateConfiguration,
  PromptTemplateConfigurationFilterSensitiveLog,
  PromptTemplateType,
  S3Location,
} from "./models_0";

/**
 * @public
 */
export interface DeleteKnowledgeBaseDocumentsResponse {
  /**
   * <p>A list of objects, each of which contains information about the documents that were deleted.</p>
   * @public
   */
  documentDetails?: KnowledgeBaseDocumentDetail[] | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseDocumentsRequest {
  /**
   * <p>The unique identifier of the knowledge base that is connected to the data source.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source that contains the documents.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>A list of objects, each of which contains information to identify a document for which to retrieve information.</p>
   * @public
   */
  documentIdentifiers: DocumentIdentifier[] | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseDocumentsResponse {
  /**
   * <p>A list of objects, each of which contains information about the documents that were retrieved.</p>
   * @public
   */
  documentDetails?: KnowledgeBaseDocumentDetail[] | undefined;
}

/**
 * <p>Contains information about content defined inline in bytes.</p>
 * @public
 */
export interface ByteContentDoc {
  /**
   * <p>The MIME type of the content. For a list of MIME types, see <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. The following MIME types are supported:</p>
   *          <ul>
   *             <li>
   *                <p>text/plain</p>
   *             </li>
   *             <li>
   *                <p>text/html</p>
   *             </li>
   *             <li>
   *                <p>text/csv</p>
   *             </li>
   *             <li>
   *                <p>text/vtt</p>
   *             </li>
   *             <li>
   *                <p>message/rfc822</p>
   *             </li>
   *             <li>
   *                <p>application/xhtml+xml</p>
   *             </li>
   *             <li>
   *                <p>application/pdf</p>
   *             </li>
   *             <li>
   *                <p>application/msword</p>
   *             </li>
   *             <li>
   *                <p>application/vnd.ms-word.document.macroenabled.12</p>
   *             </li>
   *             <li>
   *                <p>application/vnd.ms-word.template.macroenabled.12</p>
   *             </li>
   *             <li>
   *                <p>application/vnd.ms-excel</p>
   *             </li>
   *             <li>
   *                <p>application/vnd.ms-excel.addin.macroenabled.12</p>
   *             </li>
   *             <li>
   *                <p>application/vnd.ms-excel.sheet.macroenabled.12</p>
   *             </li>
   *             <li>
   *                <p>application/vnd.ms-excel.template.macroenabled.12</p>
   *             </li>
   *             <li>
   *                <p>application/vnd.ms-excel.sheet.binary.macroenabled.12</p>
   *             </li>
   *             <li>
   *                <p>application/vnd.ms-spreadsheetml</p>
   *             </li>
   *             <li>
   *                <p>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</p>
   *             </li>
   *             <li>
   *                <p>application/vnd.openxmlformats-officedocument.spreadsheetml.template</p>
   *             </li>
   *             <li>
   *                <p>application/vnd.openxmlformats-officedocument.wordprocessingml.document</p>
   *             </li>
   *             <li>
   *                <p>application/vnd.openxmlformats-officedocument.wordprocessingml.template</p>
   *             </li>
   *          </ul>
   * @public
   */
  mimeType: string | undefined;

  /**
   * <p>The base64-encoded string of the content.</p>
   * @public
   */
  data: Uint8Array | undefined;
}

/**
 * <p>Contains information about content defined inline in text.</p>
 * @public
 */
export interface TextContentDoc {
  /**
   * <p>The text of the content.</p>
   * @public
   */
  data: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InlineContentType = {
  BYTE: "BYTE",
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type InlineContentType = (typeof InlineContentType)[keyof typeof InlineContentType];

/**
 * <p>Contains information about content defined inline to ingest into a data source. Choose a <code>type</code> and include the field that corresponds to it.</p>
 * @public
 */
export interface InlineContent {
  /**
   * <p>The type of inline content to define.</p>
   * @public
   */
  type: InlineContentType | undefined;

  /**
   * <p>Contains information about content defined inline in bytes.</p>
   * @public
   */
  byteContent?: ByteContentDoc | undefined;

  /**
   * <p>Contains information about content defined inline in text.</p>
   * @public
   */
  textContent?: TextContentDoc | undefined;
}

/**
 * <p>Contains information about the Amazon S3 location of the file containing the content to ingest into a knowledge base connected to a custom data source.</p>
 * @public
 */
export interface CustomS3Location {
  /**
   * <p>The S3 URI of the file containing the content to ingest.</p>
   * @public
   */
  uri: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the S3 bucket containing the content to ingest.</p>
   * @public
   */
  bucketOwnerAccountId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CustomSourceType = {
  IN_LINE: "IN_LINE",
  S3_LOCATION: "S3_LOCATION",
} as const;

/**
 * @public
 */
export type CustomSourceType = (typeof CustomSourceType)[keyof typeof CustomSourceType];

/**
 * <p>Contains information about the content to ingest into a knowledge base connected to a custom data source. Choose a <code>sourceType</code> and include the field that corresponds to it.</p>
 * @public
 */
export interface CustomContent {
  /**
   * <p>A unique identifier for the document.</p>
   * @public
   */
  customDocumentIdentifier: CustomDocumentIdentifier | undefined;

  /**
   * <p>The source of the data to ingest.</p>
   * @public
   */
  sourceType: CustomSourceType | undefined;

  /**
   * <p>Contains information about the Amazon S3 location of the file from which to ingest data.</p>
   * @public
   */
  s3Location?: CustomS3Location | undefined;

  /**
   * <p>Contains information about content defined inline to ingest into a knowledge base.</p>
   * @public
   */
  inlineContent?: InlineContent | undefined;
}

/**
 * <p>Contains information about the content to ingest into a knowledge base connected to an Amazon S3 data source.</p>
 * @public
 */
export interface S3Content {
  /**
   * <p>The S3 location of the file containing the content to ingest.</p>
   * @public
   */
  s3Location: S3Location | undefined;
}

/**
 * <p>Contains information about the content of a document. Choose a <code>dataSourceType</code> and include the field that corresponds to it.</p>
 * @public
 */
export interface DocumentContent {
  /**
   * <p>The type of data source that is connected to the knowledge base to which to ingest this document.</p>
   * @public
   */
  dataSourceType: ContentDataSourceType | undefined;

  /**
   * <p>Contains information about the content to ingest into a knowledge base connected to a custom data source.</p>
   * @public
   */
  custom?: CustomContent | undefined;

  /**
   * <p>Contains information about the content to ingest into a knowledge base connected to an Amazon S3 data source</p>
   * @public
   */
  s3?: S3Content | undefined;
}

/**
 * @public
 * @enum
 */
export const MetadataValueType = {
  BOOLEAN: "BOOLEAN",
  NUMBER: "NUMBER",
  STRING: "STRING",
  STRING_LIST: "STRING_LIST",
} as const;

/**
 * @public
 */
export type MetadataValueType = (typeof MetadataValueType)[keyof typeof MetadataValueType];

/**
 * <p>Contains the value of the metadata attribute. Choose a <code>type</code> and include the field that corresponds to it.</p>
 * @public
 */
export interface MetadataAttributeValue {
  /**
   * <p>The type of the metadata attribute.</p>
   * @public
   */
  type: MetadataValueType | undefined;

  /**
   * <p>The value of the numeric metadata attribute.</p>
   * @public
   */
  numberValue?: number | undefined;

  /**
   * <p>The value of the Boolean metadata attribute.</p>
   * @public
   */
  booleanValue?: boolean | undefined;

  /**
   * <p>The value of the string metadata attribute.</p>
   * @public
   */
  stringValue?: string | undefined;

  /**
   * <p>An array of strings that define the value of the metadata attribute.</p>
   * @public
   */
  stringListValue?: string[] | undefined;
}

/**
 * <p>Contains information about a metadata attribute.</p>
 * @public
 */
export interface MetadataAttribute {
  /**
   * <p>The key of the metadata attribute.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>Contains the value of the metadata attribute.</p>
   * @public
   */
  value: MetadataAttributeValue | undefined;
}

/**
 * @public
 * @enum
 */
export const MetadataSourceType = {
  IN_LINE_ATTRIBUTE: "IN_LINE_ATTRIBUTE",
  S3_LOCATION: "S3_LOCATION",
} as const;

/**
 * @public
 */
export type MetadataSourceType = (typeof MetadataSourceType)[keyof typeof MetadataSourceType];

/**
 * <p>Contains information about the metadata associate with the content to ingest into a knowledge base. Choose a <code>type</code> and include the field that corresponds to it.</p>
 * @public
 */
export interface DocumentMetadata {
  /**
   * <p>The type of the source source from which to add metadata.</p>
   * @public
   */
  type: MetadataSourceType | undefined;

  /**
   * <p>An array of objects, each of which defines a metadata attribute to associate with the content to ingest. You define the attributes inline.</p>
   * @public
   */
  inlineAttributes?: MetadataAttribute[] | undefined;

  /**
   * <p>The Amazon S3 location of the file containing metadata to associate with the content to ingest.</p>
   * @public
   */
  s3Location?: CustomS3Location | undefined;
}

/**
 * <p>Contains information about a document to ingest into a knowledge base and metadata to associate with it.</p>
 * @public
 */
export interface KnowledgeBaseDocument {
  /**
   * <p>Contains the metadata to associate with the document.</p>
   * @public
   */
  metadata?: DocumentMetadata | undefined;

  /**
   * <p>Contains the content of the document.</p>
   * @public
   */
  content: DocumentContent | undefined;
}

/**
 * @public
 */
export interface IngestKnowledgeBaseDocumentsRequest {
  /**
   * <p>The unique identifier of the knowledge base to ingest the documents into.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source connected to the knowledge base that you're adding documents to.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A list of objects, each of which contains information about the documents to add.</p>
   * @public
   */
  documents: KnowledgeBaseDocument[] | undefined;
}

/**
 * @public
 */
export interface IngestKnowledgeBaseDocumentsResponse {
  /**
   * <p>A list of objects, each of which contains information about the documents that were ingested.</p>
   * @public
   */
  documentDetails?: KnowledgeBaseDocumentDetail[] | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBaseDocumentsRequest {
  /**
   * <p>The unique identifier of the knowledge base that is connected to the data source.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The unique identifier of the data source that contains the documents.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBaseDocumentsResponse {
  /**
   * <p>A list of objects, each of which contains information about the documents that were retrieved.</p>
   * @public
   */
  documentDetails: KnowledgeBaseDocumentDetail[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAgentKnowledgeBaseRequest {
  /**
   * <p>The unique identifier of the agent with which you want to associate the knowledge base.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent with which you want to associate the knowledge base.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The unique identifier of the knowledge base to associate with the agent.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>A description of what the agent should use the knowledge base for.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>Specifies whether to use the knowledge base or not when sending an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request.</p>
   * @public
   */
  knowledgeBaseState?: KnowledgeBaseState | undefined;
}

/**
 * @public
 */
export interface AssociateAgentKnowledgeBaseResponse {
  /**
   * <p>Contains details about the knowledge base that has been associated with the agent.</p>
   * @public
   */
  agentKnowledgeBase: AgentKnowledgeBase | undefined;
}

/**
 * <p>Settings for an Amazon Kendra knowledge base.</p>
 * @public
 */
export interface KendraKnowledgeBaseConfiguration {
  /**
   * <p>The ARN of the Amazon Kendra index.</p>
   * @public
   */
  kendraIndexArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RedshiftProvisionedAuthType = {
  IAM: "IAM",
  USERNAME: "USERNAME",
  USERNAME_PASSWORD: "USERNAME_PASSWORD",
} as const;

/**
 * @public
 */
export type RedshiftProvisionedAuthType =
  (typeof RedshiftProvisionedAuthType)[keyof typeof RedshiftProvisionedAuthType];

/**
 * <p>Contains configurations for authentication to an Amazon Redshift provisioned data warehouse. Specify the type of authentication to use in the <code>type</code> field and include the corresponding field. If you specify IAM authentication, you don't need to include another field.</p>
 * @public
 */
export interface RedshiftProvisionedAuthConfiguration {
  /**
   * <p>The type of authentication to use.</p>
   * @public
   */
  type: RedshiftProvisionedAuthType | undefined;

  /**
   * <p>The database username for authentication to an Amazon Redshift provisioned data warehouse.</p>
   * @public
   */
  databaseUser?: string | undefined;

  /**
   * <p>The ARN of an Secrets Manager secret for authentication.</p>
   * @public
   */
  usernamePasswordSecretArn?: string | undefined;
}

/**
 * <p>Contains configurations for a provisioned Amazon Redshift query engine.</p>
 * @public
 */
export interface RedshiftProvisionedConfiguration {
  /**
   * <p>The ID of the Amazon Redshift cluster.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>Specifies configurations for authentication to Amazon Redshift.</p>
   * @public
   */
  authConfiguration: RedshiftProvisionedAuthConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const RedshiftServerlessAuthType = {
  IAM: "IAM",
  USERNAME_PASSWORD: "USERNAME_PASSWORD",
} as const;

/**
 * @public
 */
export type RedshiftServerlessAuthType = (typeof RedshiftServerlessAuthType)[keyof typeof RedshiftServerlessAuthType];

/**
 * <p>Specifies configurations for authentication to a Redshift Serverless. Specify the type of authentication to use in the <code>type</code> field and include the corresponding field. If you specify IAM authentication, you don't need to include another field.</p>
 * @public
 */
export interface RedshiftServerlessAuthConfiguration {
  /**
   * <p>The type of authentication to use.</p>
   * @public
   */
  type: RedshiftServerlessAuthType | undefined;

  /**
   * <p>The ARN of an Secrets Manager secret for authentication.</p>
   * @public
   */
  usernamePasswordSecretArn?: string | undefined;
}

/**
 * <p>Contains configurations for authentication to Amazon Redshift Serverless.</p>
 * @public
 */
export interface RedshiftServerlessConfiguration {
  /**
   * <p>The ARN of the Amazon Redshift workgroup.</p>
   * @public
   */
  workgroupArn: string | undefined;

  /**
   * <p>Specifies configurations for authentication to an Amazon Redshift provisioned data warehouse.</p>
   * @public
   */
  authConfiguration: RedshiftServerlessAuthConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const RedshiftQueryEngineType = {
  PROVISIONED: "PROVISIONED",
  SERVERLESS: "SERVERLESS",
} as const;

/**
 * @public
 */
export type RedshiftQueryEngineType = (typeof RedshiftQueryEngineType)[keyof typeof RedshiftQueryEngineType];

/**
 * <p>Contains configurations for an Amazon Redshift query engine. Specify the type of query engine in <code>type</code> and include the corresponding field. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html">Build a knowledge base by connecting to a structured data source</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface RedshiftQueryEngineConfiguration {
  /**
   * <p>The type of query engine.</p>
   * @public
   */
  type: RedshiftQueryEngineType | undefined;

  /**
   * <p>Specifies configurations for a serverless Amazon Redshift query engine.</p>
   * @public
   */
  serverlessConfiguration?: RedshiftServerlessConfiguration | undefined;

  /**
   * <p>Specifies configurations for a provisioned Amazon Redshift query engine.</p>
   * @public
   */
  provisionedConfiguration?: RedshiftProvisionedConfiguration | undefined;
}

/**
 * <p>Contains configurations for a query, each of which defines information about example queries to help the query engine generate appropriate SQL queries.</p>
 * @public
 */
export interface CuratedQuery {
  /**
   * <p>An example natural language query.</p>
   * @public
   */
  naturalLanguage: string | undefined;

  /**
   * <p>The SQL equivalent of the natural language query.</p>
   * @public
   */
  sql: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IncludeExclude = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type IncludeExclude = (typeof IncludeExclude)[keyof typeof IncludeExclude];

/**
 * <p>Contains information about a column in the current table for the query engine to consider.</p>
 * @public
 */
export interface QueryGenerationColumn {
  /**
   * <p>The name of the column for which the other fields in this object apply.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the column that helps the query engine understand the contents of the column.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies whether to include or exclude the column during query generation. If you specify <code>EXCLUDE</code>, the column will be ignored. If you specify <code>INCLUDE</code>, all other columns in the table will be ignored.</p>
   * @public
   */
  inclusion?: IncludeExclude | undefined;
}

/**
 * <p>Contains information about a table for the query engine to consider.</p>
 * @public
 */
export interface QueryGenerationTable {
  /**
   * <p>The name of the table for which the other fields in this object apply.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the table that helps the query engine understand the contents of the table.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies whether to include or exclude the table during query generation. If you specify <code>EXCLUDE</code>, the table will be ignored. If you specify <code>INCLUDE</code>, all other tables will be ignored.</p>
   * @public
   */
  inclusion?: IncludeExclude | undefined;

  /**
   * <p>An array of objects, each of which defines information about a column in the table.</p>
   * @public
   */
  columns?: QueryGenerationColumn[] | undefined;
}

/**
 * <p>&gt;Contains configurations for context to use during query generation.</p>
 * @public
 */
export interface QueryGenerationContext {
  /**
   * <p>An array of objects, each of which defines information about a table in the database.</p>
   * @public
   */
  tables?: QueryGenerationTable[] | undefined;

  /**
   * <p>An array of objects, each of which defines information about example queries to help the query engine generate appropriate SQL queries.</p>
   * @public
   */
  curatedQueries?: CuratedQuery[] | undefined;
}

/**
 * <p>Contains configurations for query generation. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html">Build a knowledge base by connecting to a structured data source</a> in the Amazon Bedrock User Guide..</p>
 * @public
 */
export interface QueryGenerationConfiguration {
  /**
   * <p>The time after which query generation will time out.</p>
   * @public
   */
  executionTimeoutSeconds?: number | undefined;

  /**
   * <p>Specifies configurations for context to use during query generation.</p>
   * @public
   */
  generationContext?: QueryGenerationContext | undefined;
}

/**
 * <p>Contains configurations for storage in Glue Data Catalog.</p>
 * @public
 */
export interface RedshiftQueryEngineAwsDataCatalogStorageConfiguration {
  /**
   * <p>A list of names of the tables to use.</p>
   * @public
   */
  tableNames: string[] | undefined;
}

/**
 * <p>Contains configurations for storage in Amazon Redshift.</p>
 * @public
 */
export interface RedshiftQueryEngineRedshiftStorageConfiguration {
  /**
   * <p>The name of the Amazon Redshift database.</p>
   * @public
   */
  databaseName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RedshiftQueryEngineStorageType = {
  AWS_DATA_CATALOG: "AWS_DATA_CATALOG",
  REDSHIFT: "REDSHIFT",
} as const;

/**
 * @public
 */
export type RedshiftQueryEngineStorageType =
  (typeof RedshiftQueryEngineStorageType)[keyof typeof RedshiftQueryEngineStorageType];

/**
 * <p>Contains configurations for Amazon Redshift data storage. Specify the data storage service to use in the <code>type</code> field and include the corresponding field. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html">Build a knowledge base by connecting to a structured data source</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface RedshiftQueryEngineStorageConfiguration {
  /**
   * <p>The data storage service to use.</p>
   * @public
   */
  type: RedshiftQueryEngineStorageType | undefined;

  /**
   * <p>Specifies configurations for storage in Glue Data Catalog.</p>
   * @public
   */
  awsDataCatalogConfiguration?: RedshiftQueryEngineAwsDataCatalogStorageConfiguration | undefined;

  /**
   * <p>Specifies configurations for storage in Amazon Redshift.</p>
   * @public
   */
  redshiftConfiguration?: RedshiftQueryEngineRedshiftStorageConfiguration | undefined;
}

/**
 * <p>Contains configurations for an Amazon Redshift database. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html">Build a knowledge base by connecting to a structured data source</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface RedshiftConfiguration {
  /**
   * <p>Specifies configurations for Amazon Redshift database storage.</p>
   * @public
   */
  storageConfigurations: RedshiftQueryEngineStorageConfiguration[] | undefined;

  /**
   * <p>Specifies configurations for an Amazon Redshift query engine.</p>
   * @public
   */
  queryEngineConfiguration: RedshiftQueryEngineConfiguration | undefined;

  /**
   * <p>Specifies configurations for generating queries.</p>
   * @public
   */
  queryGenerationConfiguration?: QueryGenerationConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryEngineType = {
  REDSHIFT: "REDSHIFT",
} as const;

/**
 * @public
 */
export type QueryEngineType = (typeof QueryEngineType)[keyof typeof QueryEngineType];

/**
 * <p>Contains configurations for a knowledge base connected to an SQL database. Specify the SQL database type in the <code>type</code> field and include the corresponding field. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html">Build a knowledge base by connecting to a structured data source</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface SqlKnowledgeBaseConfiguration {
  /**
   * <p>The type of SQL database to connect to the knowledge base.</p>
   * @public
   */
  type: QueryEngineType | undefined;

  /**
   * <p>Specifies configurations for a knowledge base connected to an Amazon Redshift database.</p>
   * @public
   */
  redshiftConfiguration?: RedshiftConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const KnowledgeBaseType = {
  KENDRA: "KENDRA",
  SQL: "SQL",
  VECTOR: "VECTOR",
} as const;

/**
 * @public
 */
export type KnowledgeBaseType = (typeof KnowledgeBaseType)[keyof typeof KnowledgeBaseType];

/**
 * @public
 * @enum
 */
export const EmbeddingDataType = {
  BINARY: "BINARY",
  FLOAT32: "FLOAT32",
} as const;

/**
 * @public
 */
export type EmbeddingDataType = (typeof EmbeddingDataType)[keyof typeof EmbeddingDataType];

/**
 * <p>The vector configuration details for the Bedrock embeddings model.</p>
 * @public
 */
export interface BedrockEmbeddingModelConfiguration {
  /**
   * <p>The dimensions details for the vector configuration used on the Bedrock embeddings model.</p>
   * @public
   */
  dimensions?: number | undefined;

  /**
   * <p>The data type for the vectors when using a model to convert text into vector
   *       embeddings. The model must support the specified data type for vector embeddings.
   *       Floating-point (float32) is the default data type, and is supported by most models
   *       for vector embeddings. See <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-supported.html">Supported embeddings
   *         models</a> for information on the available models and their vector data types.</p>
   * @public
   */
  embeddingDataType?: EmbeddingDataType | undefined;
}

/**
 * <p>The configuration details for the embeddings model.</p>
 * @public
 */
export interface EmbeddingModelConfiguration {
  /**
   * <p>The vector configuration details on the Bedrock embeddings model.</p>
   * @public
   */
  bedrockEmbeddingModelConfiguration?: BedrockEmbeddingModelConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const SupplementalDataStorageLocationType = {
  S3: "S3",
} as const;

/**
 * @public
 */
export type SupplementalDataStorageLocationType =
  (typeof SupplementalDataStorageLocationType)[keyof typeof SupplementalDataStorageLocationType];

/**
 * <p>Contains information about a storage location for images extracted from multimodal documents in your data source.</p>
 * @public
 */
export interface SupplementalDataStorageLocation {
  /**
   * <p>Specifies the storage service used for this location.</p>
   * @public
   */
  type: SupplementalDataStorageLocationType | undefined;

  /**
   * <p>Contains information about the Amazon S3 location for the extracted images.</p>
   * @public
   */
  s3Location?: S3Location | undefined;
}

/**
 * <p>Specifies configurations for the storage location of the images extracted from multimodal documents in your data source. These images can be retrieved and returned to the end user.</p>
 * @public
 */
export interface SupplementalDataStorageConfiguration {
  /**
   * <p>A list of objects specifying storage locations for images extracted from multimodal documents in your data source.</p>
   * @public
   */
  storageLocations: SupplementalDataStorageLocation[] | undefined;
}

/**
 * <p>Contains details about the model used to create vector embeddings for the knowledge base.</p>
 * @public
 */
export interface VectorKnowledgeBaseConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the model or inference profile used to create vector embeddings for the knowledge base.</p>
   * @public
   */
  embeddingModelArn: string | undefined;

  /**
   * <p>The embeddings model configuration details for the vector model used in Knowledge Base.</p>
   * @public
   */
  embeddingModelConfiguration?: EmbeddingModelConfiguration | undefined;

  /**
   * <p>If you include multimodal data from your data source, use this object to specify configurations for the storage location of the images extracted from your documents. These images can be retrieved and returned to the end user. They can also be used in generation when using <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html">RetrieveAndGenerate</a>.</p>
   * @public
   */
  supplementalDataStorageConfiguration?: SupplementalDataStorageConfiguration | undefined;
}

/**
 * <p>Contains details about the vector embeddings configuration of the knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseConfiguration {
  /**
   * <p>The type of data that the data source is converted into for the knowledge base.</p>
   * @public
   */
  type: KnowledgeBaseType | undefined;

  /**
   * <p>Contains details about the model that's used to convert the data source into vector embeddings.</p>
   * @public
   */
  vectorKnowledgeBaseConfiguration?: VectorKnowledgeBaseConfiguration | undefined;

  /**
   * <p>Settings for an Amazon Kendra knowledge base.</p>
   * @public
   */
  kendraKnowledgeBaseConfiguration?: KendraKnowledgeBaseConfiguration | undefined;

  /**
   * <p>Specifies configurations for a knowledge base connected to an SQL database.</p>
   * @public
   */
  sqlKnowledgeBaseConfiguration?: SqlKnowledgeBaseConfiguration | undefined;
}

/**
 * <p>Contains the names of the fields to which to map information about the vector store.</p>
 * @public
 */
export interface MongoDbAtlasFieldMapping {
  /**
   * <p>The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.</p>
   * @public
   */
  vectorField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.</p>
   * @public
   */
  textField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores metadata about the vector store.</p>
   * @public
   */
  metadataField: string | undefined;
}

/**
 * <p>Contains details about the storage configuration of the knowledge base in MongoDB Atlas. </p>
 * @public
 */
export interface MongoDbAtlasConfiguration {
  /**
   * <p>The endpoint URL of your MongoDB Atlas cluster for your knowledge base.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The database name in your MongoDB Atlas cluster for your knowledge base.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>The collection name of the knowledge base in MongoDB Atlas.</p>
   * @public
   */
  collectionName: string | undefined;

  /**
   * <p>The name of the MongoDB Atlas vector search index.</p>
   * @public
   */
  vectorIndexName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret that you created in Secrets Manager that contains user credentials for your MongoDB Atlas cluster.</p>
   * @public
   */
  credentialsSecretArn: string | undefined;

  /**
   * <p>Contains the names of the fields to which to map information about the vector store.</p>
   * @public
   */
  fieldMapping: MongoDbAtlasFieldMapping | undefined;

  /**
   * <p>The name of the VPC endpoint service in your account that is connected to your MongoDB Atlas cluster.</p>
   * @public
   */
  endpointServiceName?: string | undefined;
}

/**
 * <p>Contains the names of the fields to which to map information about the vector store.</p>
 * @public
 */
export interface OpenSearchServerlessFieldMapping {
  /**
   * <p>The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.</p>
   * @public
   */
  vectorField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.</p>
   * @public
   */
  textField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores metadata about the vector store.</p>
   * @public
   */
  metadataField: string | undefined;
}

/**
 * <p>Contains details about the storage configuration of the knowledge base in Amazon OpenSearch Service. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-oss.html">Create a vector index in Amazon OpenSearch Service</a>.</p>
 * @public
 */
export interface OpenSearchServerlessConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the OpenSearch Service vector store.</p>
   * @public
   */
  collectionArn: string | undefined;

  /**
   * <p>The name of the vector store.</p>
   * @public
   */
  vectorIndexName: string | undefined;

  /**
   * <p>Contains the names of the fields to which to map information about the vector store.</p>
   * @public
   */
  fieldMapping: OpenSearchServerlessFieldMapping | undefined;
}

/**
 * <p>Contains the names of the fields to which to map information about the vector store.</p>
 * @public
 */
export interface PineconeFieldMapping {
  /**
   * <p>The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.</p>
   * @public
   */
  textField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores metadata about the vector store.</p>
   * @public
   */
  metadataField: string | undefined;
}

/**
 * <p>Contains details about the storage configuration of the knowledge base in Pinecone. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-pinecone.html">Create a vector index in Pinecone</a>.</p>
 * @public
 */
export interface PineconeConfiguration {
  /**
   * <p>The endpoint URL for your index management page.</p>
   * @public
   */
  connectionString: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret that you created in Secrets Manager that is linked to your Pinecone API key.</p>
   * @public
   */
  credentialsSecretArn: string | undefined;

  /**
   * <p>The namespace to be used to write new data to your database.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>Contains the names of the fields to which to map information about the vector store.</p>
   * @public
   */
  fieldMapping: PineconeFieldMapping | undefined;
}

/**
 * <p>Contains the names of the fields to which to map information about the vector store.</p>
 * @public
 */
export interface RdsFieldMapping {
  /**
   * <p>The name of the field in which Amazon Bedrock stores the ID for each entry.</p>
   * @public
   */
  primaryKeyField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.</p>
   * @public
   */
  vectorField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.</p>
   * @public
   */
  textField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores metadata about the vector store.</p>
   * @public
   */
  metadataField: string | undefined;
}

/**
 * <p>Contains details about the storage configuration of the knowledge base in Amazon RDS. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-rds.html">Create a vector index in Amazon RDS</a>.</p>
 * @public
 */
export interface RdsConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the vector store.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret that you created in Secrets Manager that is linked to your Amazon RDS database.</p>
   * @public
   */
  credentialsSecretArn: string | undefined;

  /**
   * <p>The name of your Amazon RDS database.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>The name of the table in the database.</p>
   * @public
   */
  tableName: string | undefined;

  /**
   * <p>Contains the names of the fields to which to map information about the vector store.</p>
   * @public
   */
  fieldMapping: RdsFieldMapping | undefined;
}

/**
 * <p>Contains the names of the fields to which to map information about the vector store.</p>
 * @public
 */
export interface RedisEnterpriseCloudFieldMapping {
  /**
   * <p>The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.</p>
   * @public
   */
  vectorField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.</p>
   * @public
   */
  textField: string | undefined;

  /**
   * <p>The name of the field in which Amazon Bedrock stores metadata about the vector store.</p>
   * @public
   */
  metadataField: string | undefined;
}

/**
 * <p>Contains details about the storage configuration of the knowledge base in Redis Enterprise Cloud. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-oss.html">Create a vector index in Redis Enterprise Cloud</a>.</p>
 * @public
 */
export interface RedisEnterpriseCloudConfiguration {
  /**
   * <p>The endpoint URL of the Redis Enterprise Cloud database.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The name of the vector index.</p>
   * @public
   */
  vectorIndexName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret that you created in Secrets Manager that is linked to your Redis Enterprise Cloud database.</p>
   * @public
   */
  credentialsSecretArn: string | undefined;

  /**
   * <p>Contains the names of the fields to which to map information about the vector store.</p>
   * @public
   */
  fieldMapping: RedisEnterpriseCloudFieldMapping | undefined;
}

/**
 * @public
 * @enum
 */
export const KnowledgeBaseStorageType = {
  MONGO_DB_ATLAS: "MONGO_DB_ATLAS",
  OPENSEARCH_SERVERLESS: "OPENSEARCH_SERVERLESS",
  PINECONE: "PINECONE",
  RDS: "RDS",
  REDIS_ENTERPRISE_CLOUD: "REDIS_ENTERPRISE_CLOUD",
} as const;

/**
 * @public
 */
export type KnowledgeBaseStorageType = (typeof KnowledgeBaseStorageType)[keyof typeof KnowledgeBaseStorageType];

/**
 * <p>Contains the storage configuration of the knowledge base.</p>
 * @public
 */
export interface StorageConfiguration {
  /**
   * <p>The vector store service in which the knowledge base is stored.</p>
   * @public
   */
  type: KnowledgeBaseStorageType | undefined;

  /**
   * <p>Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.</p>
   * @public
   */
  opensearchServerlessConfiguration?: OpenSearchServerlessConfiguration | undefined;

  /**
   * <p>Contains the storage configuration of the knowledge base in Pinecone.</p>
   * @public
   */
  pineconeConfiguration?: PineconeConfiguration | undefined;

  /**
   * <p>Contains the storage configuration of the knowledge base in Redis Enterprise Cloud.</p>
   * @public
   */
  redisEnterpriseCloudConfiguration?: RedisEnterpriseCloudConfiguration | undefined;

  /**
   * <p>Contains details about the storage configuration of the knowledge base in Amazon RDS. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-rds.html">Create a vector index in Amazon RDS</a>.</p>
   * @public
   */
  rdsConfiguration?: RdsConfiguration | undefined;

  /**
   * <p>Contains the storage configuration of the knowledge base in MongoDB Atlas.</p>
   * @public
   */
  mongoDbAtlasConfiguration?: MongoDbAtlasConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A name for the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the knowledge base.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Contains details about the embeddings model used for the knowledge base.</p>
   * @public
   */
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * <p>Contains details about the configuration of the vector database used for the knowledge base.</p>
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;

  /**
   * <p>Specify the key-value pairs for the tags that you want to attach to your knowledge base in this object.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const KnowledgeBaseStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETE_UNSUCCESSFUL: "DELETE_UNSUCCESSFUL",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type KnowledgeBaseStatus = (typeof KnowledgeBaseStatus)[keyof typeof KnowledgeBaseStatus];

/**
 * <p>Contains information about a knowledge base.</p>
 * @public
 */
export interface KnowledgeBase {
  /**
   * <p>The unique identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The description of the knowledge base.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Contains details about the embeddings configuration of the knowledge base.</p>
   * @public
   */
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * <p>Contains details about the storage configuration of the knowledge base.</p>
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;

  /**
   * <p>The status of the knowledge base. The following statuses are possible:</p>
   *          <ul>
   *             <li>
   *                <p>CREATING – The knowledge base is being created.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE – The knowledge base is ready to be queried.</p>
   *             </li>
   *             <li>
   *                <p>DELETING – The knowledge base is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>UPDATING – The knowledge base is being updated.</p>
   *             </li>
   *             <li>
   *                <p>FAILED – The knowledge base API operation failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * <p>The time the knowledge base was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time the knowledge base was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>A list of reasons that the API operation on the knowledge base failed.</p>
   * @public
   */
  failureReasons?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseResponse {
  /**
   * <p>Contains details about the knowledge base.</p>
   * @public
   */
  knowledgeBase: KnowledgeBase | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseRequest {
  /**
   * <p>The unique identifier of the knowledge base to delete.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseResponse {
  /**
   * <p>The unique identifier of the knowledge base that was deleted.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The status of the knowledge base and whether it has been successfully deleted.</p>
   * @public
   */
  status: KnowledgeBaseStatus | undefined;
}

/**
 * @public
 */
export interface DisassociateAgentKnowledgeBaseRequest {
  /**
   * <p>The unique identifier of the agent from which to disassociate the knowledge base.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent from which to disassociate the knowledge base.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The unique identifier of the knowledge base to disassociate.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAgentKnowledgeBaseResponse {}

/**
 * @public
 */
export interface GetAgentKnowledgeBaseRequest {
  /**
   * <p>The unique identifier of the agent with which the knowledge base is associated.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent with which the knowledge base is associated.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The unique identifier of the knowledge base associated with the agent.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentKnowledgeBaseResponse {
  /**
   * <p>Contains details about a knowledge base attached to an agent.</p>
   * @public
   */
  agentKnowledgeBase: AgentKnowledgeBase | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseRequest {
  /**
   * <p>The unique identifier of the knowledge base you want to get information on.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseResponse {
  /**
   * <p>Contains details about the knowledge base.</p>
   * @public
   */
  knowledgeBase: KnowledgeBase | undefined;
}

/**
 * @public
 */
export interface ListAgentKnowledgeBasesRequest {
  /**
   * <p>The unique identifier of the agent for which to return information about knowledge bases associated with it.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent for which to return information about knowledge bases associated with it.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentKnowledgeBasesResponse {
  /**
   * <p>A list of objects, each of which contains information about a knowledge base associated with the agent.</p>
   * @public
   */
  agentKnowledgeBaseSummaries: AgentKnowledgeBaseSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesRequest {
  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains details about a knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseSummary {
  /**
   * <p>The unique identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the knowledge base.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the knowledge base.</p>
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * <p>The time the knowledge base was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesResponse {
  /**
   * <p>A list of knowledge bases with information about each knowledge base.</p>
   * @public
   */
  knowledgeBaseSummaries: KnowledgeBaseSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentKnowledgeBaseRequest {
  /**
   * <p>The unique identifier of the agent associated with the knowledge base that you want to update.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent associated with the knowledge base that you want to update.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The unique identifier of the knowledge base that has been associated with an agent.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>Specifies a new description for the knowledge base associated with an agent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies whether the agent uses the knowledge base or not when sending an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request.</p>
   * @public
   */
  knowledgeBaseState?: KnowledgeBaseState | undefined;
}

/**
 * @public
 */
export interface UpdateAgentKnowledgeBaseResponse {
  /**
   * <p>Contains details about the knowledge base that has been associated with an agent.</p>
   * @public
   */
  agentKnowledgeBase: AgentKnowledgeBase | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseRequest {
  /**
   * <p>The unique identifier of the knowledge base to update.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>Specifies a new name for the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies a new description for the knowledge base.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies a different Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Specifies the configuration for the embeddings model used for the knowledge base. You must use the same configuration as when the knowledge base was created.</p>
   * @public
   */
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * <p>Specifies the configuration for the vector store used for the knowledge base. You must use the same configuration as when the knowledge base was created.</p>
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseResponse {
  /**
   * <p>Contains details about the knowledge base.</p>
   * @public
   */
  knowledgeBase: KnowledgeBase | undefined;
}

/**
 * <p>Contains specifications for an Amazon Bedrock agent with which to use the prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html">Create a prompt using Prompt management</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html">Automate tasks in your application using conversational agents</a>.</p>
 * @public
 */
export interface PromptAgentResource {
  /**
   * <p>The ARN of the agent with which to use the prompt.</p>
   * @public
   */
  agentIdentifier: string | undefined;
}

/**
 * <p>Contains specifications for a generative AI resource with which to use the prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html">Create a prompt using Prompt management</a>.</p>
 * @public
 */
export type PromptGenAiResource = PromptGenAiResource.AgentMember | PromptGenAiResource.$UnknownMember;

/**
 * @public
 */
export namespace PromptGenAiResource {
  /**
   * <p>Specifies an Amazon Bedrock agent with which to use the prompt.</p>
   * @public
   */
  export interface AgentMember {
    agent: PromptAgentResource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    agent?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    agent: (value: PromptAgentResource) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PromptGenAiResource, visitor: Visitor<T>): T => {
    if (value.agent !== undefined) return visitor.agent(value.agent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains a key-value pair that defines a metadata tag and value to attach to a prompt variant. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html">Create a prompt using Prompt management</a>.</p>
 * @public
 */
export interface PromptMetadataEntry {
  /**
   * <p>The key of a metadata tag for a prompt variant.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of a metadata tag for a prompt variant.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Contains details about a variant of the prompt.</p>
 * @public
 */
export interface PromptVariant {
  /**
   * <p>The name of the prompt variant.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of prompt template to use.</p>
   * @public
   */
  templateType: PromptTemplateType | undefined;

  /**
   * <p>Contains configurations for the prompt template.</p>
   * @public
   */
  templateConfiguration: PromptTemplateConfiguration | undefined;

  /**
   * <p>The unique identifier of the model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a> with which to run inference on the prompt.</p>
   * @public
   */
  modelId?: string | undefined;

  /**
   * <p>Contains inference configurations for the prompt variant.</p>
   * @public
   */
  inferenceConfiguration?: PromptInferenceConfiguration | undefined;

  /**
   * <p>An array of objects, each containing a key-value pair that defines a metadata tag and value to attach to a prompt variant.</p>
   * @public
   */
  metadata?: PromptMetadataEntry[] | undefined;

  /**
   * <p>Contains model-specific inference configurations that aren't in the <code>inferenceConfiguration</code> field. To see model-specific inference parameters, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference request parameters and response fields for foundation models</a>.</p>
   * @public
   */
  additionalModelRequestFields?: __DocumentType | undefined;

  /**
   * <p>Specifies a generative AI resource with which to use the prompt.</p>
   * @public
   */
  genAiResource?: PromptGenAiResource | undefined;
}

/**
 * @public
 */
export interface CreatePromptRequest {
  /**
   * <p>A name for the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the prompt.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to encrypt the prompt.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The name of the default variant for the prompt. This value must match the <code>name</code> field in the relevant <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html">PromptVariant</a> object.</p>
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Any tags that you want to attach to the prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html">Tagging resources in Amazon Bedrock</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePromptResponse {
  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the prompt.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that you encrypted the prompt with.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The name of the default variant for your prompt.</p>
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the prompt. When you create a prompt, the version created is the <code>DRAFT</code> version.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The time at which the prompt was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the prompt was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreatePromptVersionRequest {
  /**
   * <p>The unique identifier of the prompt that you want to create a version of.</p>
   * @public
   */
  promptIdentifier: string | undefined;

  /**
   * <p>A description for the version of the prompt.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Any tags that you want to attach to the version of the prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html">Tagging resources in Amazon Bedrock</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePromptVersionResponse {
  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the version.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to encrypt the version of the prompt.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The name of the default variant for the prompt. This value must match the <code>name</code> field in the relevant <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html">PromptVariant</a> object.</p>
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the version of the prompt.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the prompt that was created. Versions are numbered incrementally, starting from 1.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The time at which the prompt was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the prompt was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeletePromptRequest {
  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  promptIdentifier: string | undefined;

  /**
   * <p>The version of the prompt to delete. To delete the prompt, omit this field.</p>
   * @public
   */
  promptVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeletePromptResponse {
  /**
   * <p>The unique identifier of the prompt that was deleted.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The version of the prompt that was deleted.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * @public
 */
export interface GetPromptRequest {
  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  promptIdentifier: string | undefined;

  /**
   * <p>The version of the prompt about which you want to retrieve information. Omit this field to return information about the working draft of the prompt.</p>
   * @public
   */
  promptVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetPromptResponse {
  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The descriptino of the prompt.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that the prompt is encrypted with.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The name of the default variant for the prompt. This value must match the <code>name</code> field in the relevant <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html">PromptVariant</a> object.</p>
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt or the prompt version (if you specified a version in the request).</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the prompt.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The time at which the prompt was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the prompt was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListPromptsRequest {
  /**
   * <p>The unique identifier of the prompt for whose versions you want to return information. Omit this field to list information about all prompts in an account.</p>
   * @public
   */
  promptIdentifier?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains information about a prompt in your Prompt management tool.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListPrompts.html#API_agent_ListPrompts_ResponseSyntax">ListPrompts response</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface PromptSummary {
  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the prompt.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt or the prompt version (if you specified a version in the request).</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the prompt that this summary applies to.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The time at which the prompt was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the prompt was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListPromptsResponse {
  /**
   * <p>A list, each member of which contains information about a prompt using Prompt management.</p>
   * @public
   */
  promptSummaries: PromptSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePromptRequest {
  /**
   * <p>A name for the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the prompt.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to encrypt the prompt.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The name of the default variant for the prompt. This value must match the <code>name</code> field in the relevant <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html">PromptVariant</a> object.</p>
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  promptIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdatePromptResponse {
  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the prompt.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to encrypt the prompt.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The name of the default variant for the prompt. This value must match the <code>name</code> field in the relevant <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html">PromptVariant</a> object.</p>
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the prompt. When you update a prompt, the version updated is the <code>DRAFT</code> version.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The time at which the prompt was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the prompt was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to list tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The key-value pairs for the tags associated with the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>An object containing key-value pairs that define the tags to attach to the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of keys of the tags to remove from the resource.</p>
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
export interface ValidateFlowDefinitionRequest {
  /**
   * <p>The definition of a flow to validate.</p>
   * @public
   */
  definition: FlowDefinition | undefined;
}

/**
 * @public
 */
export interface ValidateFlowDefinitionResponse {
  /**
   * <p>Contains an array of objects, each of which contains an error identified by validation.</p>
   * @public
   */
  validations: FlowValidation[] | undefined;
}

/**
 * @public
 */
export interface DeleteAgentVersionRequest {
  /**
   * <p>The unique identifier of the agent that the version belongs to.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent to delete.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>By default, this value is <code>false</code> and deletion is stopped if the resource is in use. If you set it to <code>true</code>, the resource will be deleted even if the resource is in use.</p>
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteAgentVersionResponse {
  /**
   * <p>The unique identifier of the agent that the version belongs to.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version that was deleted.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The status of the agent version.</p>
   * @public
   */
  agentStatus: AgentStatus | undefined;
}

/**
 * @public
 */
export interface GetAgentVersionRequest {
  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent.</p>
   * @public
   */
  agentVersion: string | undefined;
}

/**
 * @public
 */
export interface GetAgentVersionResponse {
  /**
   * <p>Contains details about the version of the agent.</p>
   * @public
   */
  agentVersion: AgentVersion | undefined;
}

/**
 * @public
 */
export interface ListAgentVersionsRequest {
  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentVersionsResponse {
  /**
   * <p>A list of objects, each of which contains information about a version of the agent.</p>
   * @public
   */
  agentVersionSummaries: AgentVersionSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @internal
 */
export const ByteContentDocFilterSensitiveLog = (obj: ByteContentDoc): any => ({
  ...obj,
  ...(obj.data && { data: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TextContentDocFilterSensitiveLog = (obj: TextContentDoc): any => ({
  ...obj,
  ...(obj.data && { data: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InlineContentFilterSensitiveLog = (obj: InlineContent): any => ({
  ...obj,
  ...(obj.byteContent && { byteContent: ByteContentDocFilterSensitiveLog(obj.byteContent) }),
  ...(obj.textContent && { textContent: TextContentDocFilterSensitiveLog(obj.textContent) }),
});

/**
 * @internal
 */
export const CustomContentFilterSensitiveLog = (obj: CustomContent): any => ({
  ...obj,
  ...(obj.inlineContent && { inlineContent: InlineContentFilterSensitiveLog(obj.inlineContent) }),
});

/**
 * @internal
 */
export const DocumentContentFilterSensitiveLog = (obj: DocumentContent): any => ({
  ...obj,
  ...(obj.custom && { custom: CustomContentFilterSensitiveLog(obj.custom) }),
});

/**
 * @internal
 */
export const MetadataAttributeValueFilterSensitiveLog = (obj: MetadataAttributeValue): any => ({
  ...obj,
  ...(obj.numberValue && { numberValue: SENSITIVE_STRING }),
  ...(obj.stringValue && { stringValue: SENSITIVE_STRING }),
  ...(obj.stringListValue && { stringListValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MetadataAttributeFilterSensitiveLog = (obj: MetadataAttribute): any => ({
  ...obj,
  ...(obj.key && { key: SENSITIVE_STRING }),
  ...(obj.value && { value: MetadataAttributeValueFilterSensitiveLog(obj.value) }),
});

/**
 * @internal
 */
export const DocumentMetadataFilterSensitiveLog = (obj: DocumentMetadata): any => ({
  ...obj,
  ...(obj.inlineAttributes && {
    inlineAttributes: obj.inlineAttributes.map((item) => MetadataAttributeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const KnowledgeBaseDocumentFilterSensitiveLog = (obj: KnowledgeBaseDocument): any => ({
  ...obj,
  ...(obj.metadata && { metadata: DocumentMetadataFilterSensitiveLog(obj.metadata) }),
  ...(obj.content && { content: DocumentContentFilterSensitiveLog(obj.content) }),
});

/**
 * @internal
 */
export const IngestKnowledgeBaseDocumentsRequestFilterSensitiveLog = (
  obj: IngestKnowledgeBaseDocumentsRequest
): any => ({
  ...obj,
  ...(obj.documents && { documents: obj.documents.map((item) => KnowledgeBaseDocumentFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const QueryGenerationContextFilterSensitiveLog = (obj: QueryGenerationContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryGenerationConfigurationFilterSensitiveLog = (obj: QueryGenerationConfiguration): any => ({
  ...obj,
  ...(obj.generationContext && { generationContext: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RedshiftConfigurationFilterSensitiveLog = (obj: RedshiftConfiguration): any => ({
  ...obj,
  ...(obj.queryGenerationConfiguration && {
    queryGenerationConfiguration: QueryGenerationConfigurationFilterSensitiveLog(obj.queryGenerationConfiguration),
  }),
});

/**
 * @internal
 */
export const SqlKnowledgeBaseConfigurationFilterSensitiveLog = (obj: SqlKnowledgeBaseConfiguration): any => ({
  ...obj,
  ...(obj.redshiftConfiguration && {
    redshiftConfiguration: RedshiftConfigurationFilterSensitiveLog(obj.redshiftConfiguration),
  }),
});

/**
 * @internal
 */
export const KnowledgeBaseConfigurationFilterSensitiveLog = (obj: KnowledgeBaseConfiguration): any => ({
  ...obj,
  ...(obj.sqlKnowledgeBaseConfiguration && {
    sqlKnowledgeBaseConfiguration: SqlKnowledgeBaseConfigurationFilterSensitiveLog(obj.sqlKnowledgeBaseConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateKnowledgeBaseRequestFilterSensitiveLog = (obj: CreateKnowledgeBaseRequest): any => ({
  ...obj,
  ...(obj.knowledgeBaseConfiguration && {
    knowledgeBaseConfiguration: KnowledgeBaseConfigurationFilterSensitiveLog(obj.knowledgeBaseConfiguration),
  }),
});

/**
 * @internal
 */
export const KnowledgeBaseFilterSensitiveLog = (obj: KnowledgeBase): any => ({
  ...obj,
  ...(obj.knowledgeBaseConfiguration && {
    knowledgeBaseConfiguration: KnowledgeBaseConfigurationFilterSensitiveLog(obj.knowledgeBaseConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateKnowledgeBaseResponseFilterSensitiveLog = (obj: CreateKnowledgeBaseResponse): any => ({
  ...obj,
  ...(obj.knowledgeBase && { knowledgeBase: KnowledgeBaseFilterSensitiveLog(obj.knowledgeBase) }),
});

/**
 * @internal
 */
export const GetKnowledgeBaseResponseFilterSensitiveLog = (obj: GetKnowledgeBaseResponse): any => ({
  ...obj,
  ...(obj.knowledgeBase && { knowledgeBase: KnowledgeBaseFilterSensitiveLog(obj.knowledgeBase) }),
});

/**
 * @internal
 */
export const UpdateKnowledgeBaseRequestFilterSensitiveLog = (obj: UpdateKnowledgeBaseRequest): any => ({
  ...obj,
  ...(obj.knowledgeBaseConfiguration && {
    knowledgeBaseConfiguration: KnowledgeBaseConfigurationFilterSensitiveLog(obj.knowledgeBaseConfiguration),
  }),
});

/**
 * @internal
 */
export const UpdateKnowledgeBaseResponseFilterSensitiveLog = (obj: UpdateKnowledgeBaseResponse): any => ({
  ...obj,
  ...(obj.knowledgeBase && { knowledgeBase: KnowledgeBaseFilterSensitiveLog(obj.knowledgeBase) }),
});

/**
 * @internal
 */
export const PromptAgentResourceFilterSensitiveLog = (obj: PromptAgentResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PromptGenAiResourceFilterSensitiveLog = (obj: PromptGenAiResource): any => {
  if (obj.agent !== undefined) return { agent: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PromptMetadataEntryFilterSensitiveLog = (obj: PromptMetadataEntry): any => ({
  ...obj,
  ...(obj.key && { key: SENSITIVE_STRING }),
  ...(obj.value && { value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PromptVariantFilterSensitiveLog = (obj: PromptVariant): any => ({
  ...obj,
  ...(obj.templateConfiguration && {
    templateConfiguration: PromptTemplateConfigurationFilterSensitiveLog(obj.templateConfiguration),
  }),
  ...(obj.inferenceConfiguration && { inferenceConfiguration: obj.inferenceConfiguration }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
  ...(obj.genAiResource && { genAiResource: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePromptRequestFilterSensitiveLog = (obj: CreatePromptRequest): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePromptResponseFilterSensitiveLog = (obj: CreatePromptResponse): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePromptVersionResponseFilterSensitiveLog = (obj: CreatePromptVersionResponse): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPromptResponseFilterSensitiveLog = (obj: GetPromptResponse): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePromptRequestFilterSensitiveLog = (obj: UpdatePromptRequest): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePromptResponseFilterSensitiveLog = (obj: UpdatePromptResponse): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ValidateFlowDefinitionRequestFilterSensitiveLog = (obj: ValidateFlowDefinitionRequest): any => ({
  ...obj,
  ...(obj.definition && { definition: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ValidateFlowDefinitionResponseFilterSensitiveLog = (obj: ValidateFlowDefinitionResponse): any => ({
  ...obj,
  ...(obj.validations && { validations: obj.validations.map((item) => FlowValidationFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetAgentVersionResponseFilterSensitiveLog = (obj: GetAgentVersionResponse): any => ({
  ...obj,
  ...(obj.agentVersion && { agentVersion: AgentVersionFilterSensitiveLog(obj.agentVersion) }),
});
