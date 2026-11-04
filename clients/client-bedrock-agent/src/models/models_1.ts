// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/core/serde";
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AgentStatus,
  EmbeddingDataType,
  EmbeddingModelType,
  FlowNodeType,
  FlowStatus,
  IncludedData,
  IncludeExclude,
  KnowledgeBaseState,
  KnowledgeBaseStatus,
  KnowledgeBaseStorageType,
  KnowledgeBaseType,
  PromptTemplateType,
  QueryEngineType,
  RedshiftProvisionedAuthType,
  RedshiftQueryEngineStorageType,
  RedshiftQueryEngineType,
  RedshiftServerlessAuthType,
  RetrievalInstructionFailureReasonCode,
  RetrievalInstructionFieldName,
  RetrievalInstructionLastTransitionStatus,
  RetrievalInstructionStatus,
  SupplementalDataStorageLocationType,
  VpcConfigurationStatus,
  VpcProtocol,
  VpcResolutionMode,
} from "./enums";
import type {
  AgentFlowNodeConfiguration,
  AgentKnowledgeBase,
  AgentKnowledgeBaseSummary,
  AgentVersion,
  AgentVersionSummary,
  CollectorFlowNodeConfiguration,
  ConditionFlowNodeConfiguration,
  FlowConnection,
  FlowNodeInput,
  FlowNodeOutput,
  FlowValidation,
  InlineCodeFlowNodeConfiguration,
  InputFlowNodeConfiguration,
  IteratorFlowNodeConfiguration,
  KnowledgeBaseDocumentDetail,
  KnowledgeBaseFlowNodeConfiguration,
  LambdaFunctionFlowNodeConfiguration,
  LexFlowNodeConfiguration,
  LoopControllerFlowNodeConfiguration,
  LoopInputFlowNodeConfiguration,
  OutputFlowNodeConfiguration,
  PromptFlowNodeConfiguration,
  PromptInferenceConfiguration,
  PromptTemplateConfiguration,
  RetrievalFlowNodeConfiguration,
  S3Location,
  ServerSideEncryptionConfiguration,
  StorageFlowNodeConfiguration,
} from "./models_0";

/**
 * @public
 */
export interface ListKnowledgeBaseDocumentsRequest {
  /**
   * The unique identifier of the knowledge base that is connected to the data source.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The unique identifier of the data source that contains the documents.
   *
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBaseDocumentsResponse {
  /**
   * A list of objects, each of which contains information about the documents that were retrieved.
   *
   * @public
   */
  documentDetails: KnowledgeBaseDocumentDetail[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAgentKnowledgeBaseRequest {
  /**
   * The unique identifier of the agent with which you want to associate the knowledge base.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The version of the agent with which you want to associate the knowledge base.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The unique identifier of the knowledge base to associate with the agent.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * A description of what the agent should use the knowledge base for.
   *
   * @public
   */
  description: string | undefined;

  /**
   * Specifies whether to use the knowledge base or not when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request.
   *
   * @public
   */
  knowledgeBaseState?: KnowledgeBaseState | undefined;
}

/**
 * @public
 */
export interface AssociateAgentKnowledgeBaseResponse {
  /**
   * Contains details about the knowledge base that has been associated with the agent.
   *
   * @public
   */
  agentKnowledgeBase: AgentKnowledgeBase | undefined;
}

/**
 * Settings for an Amazon Kendra knowledge base.
 *
 * @public
 */
export interface KendraKnowledgeBaseConfiguration {
  /**
   * The ARN of the Amazon Kendra index.
   *
   * @public
   */
  kendraIndexArn: string | undefined;
}

/**
 * Configuration for segmenting audio content during multimodal knowledge base ingestion. Determines how audio files are divided into chunks for processing.
 *
 * @public
 */
export interface AudioSegmentationConfiguration {
  /**
   * The duration in seconds for each audio segment. Audio files will be divided into chunks of this length for processing.
   *
   * @public
   */
  fixedLengthDuration: number | undefined;
}

/**
 * Configuration settings for processing audio content in multimodal knowledge bases.
 *
 * @public
 */
export interface AudioConfiguration {
  /**
   * Configuration for segmenting audio content during processing.
   *
   * @public
   */
  segmentationConfiguration: AudioSegmentationConfiguration | undefined;
}

/**
 * Configuration for segmenting video content during multimodal knowledge base ingestion. Determines how video files are divided into chunks for processing.
 *
 * @public
 */
export interface VideoSegmentationConfiguration {
  /**
   * The duration in seconds for each video segment. Video files will be divided into chunks of this length for processing.
   *
   * @public
   */
  fixedLengthDuration: number | undefined;
}

/**
 * Configuration settings for processing video content in multimodal knowledge bases.
 *
 * @public
 */
export interface VideoConfiguration {
  /**
   * Configuration for segmenting video content during processing.
   *
   * @public
   */
  segmentationConfiguration: VideoSegmentationConfiguration | undefined;
}

/**
 * The vector configuration details for the Bedrock embeddings model.
 *
 * @public
 */
export interface BedrockEmbeddingModelConfiguration {
  /**
   * The dimensions details for the vector configuration used on the Bedrock embeddings model.
   *
   * @public
   */
  dimensions?: number | undefined;

  /**
   * The data type for the vectors when using a model to convert text into vector embeddings. The model must support the specified data type for vector embeddings. Floating-point (float32) is the default data type, and is supported by most models for vector embeddings. See [Supported embeddings models](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-supported.html) for information on the available models and their vector data types.
   *
   * @public
   */
  embeddingDataType?: EmbeddingDataType | undefined;

  /**
   * Configuration settings for processing audio content in multimodal knowledge bases.
   *
   * > **Important:** This field is deprecated. Use `modelConfiguration` instead.
   *
   * @deprecated (since 2026-09-01) Use Managed Knowledge Base's modelConfiguration field. https://docs.aws.amazon.com/bedrock/latest/userguide/kb-build-managed.html.
   * @public
   */
  audio?: AudioConfiguration[] | undefined;

  /**
   * Configuration settings for processing video content in multimodal knowledge bases.
   *
   * > **Important:** This field is deprecated. Use `modelConfiguration` instead.
   *
   * @deprecated (since 2026-09-01) Use Managed Knowledge Base's modelConfiguration field. https://docs.aws.amazon.com/bedrock/latest/userguide/kb-build-managed.html.
   * @public
   */
  video?: VideoConfiguration[] | undefined;

  /**
   * Model-specific configuration for the embedding model, provided as a JSON object. Use this field to specify settings that apply to the embedding model that you selected, such as how audio and video files are divided into segments.
   *
   * The fields that this object accepts depend on the embedding model. For the settings that each model accepts, see the documentation for that model.
   *
   * For an example of a [CreateKnowledgeBase](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateKnowledgeBase.html) request that uses this field to configure a multimodal embedding model, see the [Examples](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateKnowledgeBase.html#API_agent_CreateKnowledgeBase_Examples) section of [CreateKnowledgeBase](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateKnowledgeBase.html).
   *
   * @public
   */
  modelConfiguration?: __DocumentType | undefined;
}

/**
 * The configuration details for the embeddings model.
 *
 * @public
 */
export interface EmbeddingModelConfiguration {
  /**
   * The vector configuration details on the Bedrock embeddings model.
   *
   * @public
   */
  bedrockEmbeddingModelConfiguration?: BedrockEmbeddingModelConfiguration | undefined;
}

/**
 * Contains information about a storage location for multimedia content (images, audio, and video) extracted from multimodal documents in your data source.
 *
 * @public
 */
export interface SupplementalDataStorageLocation {
  /**
   * Specifies the storage service used for this location.
   *
   * @public
   */
  type: SupplementalDataStorageLocationType | undefined;

  /**
   * Contains information about the Amazon S3 location for the extracted multimedia content.
   *
   * @public
   */
  s3Location?: S3Location | undefined;
}

/**
 * Specifies configurations for the storage location of multimedia content (images, audio, and video) extracted from multimodal documents in your data source. This content can be retrieved and returned to the end user with timestamp references for audio and video segments.
 *
 * @public
 */
export interface SupplementalDataStorageConfiguration {
  /**
   * A list of objects specifying storage locations for multimedia content (images, audio, and video) extracted from multimodal documents in your data source.
   *
   * @public
   */
  storageLocations: SupplementalDataStorageLocation[] | undefined;
}

/**
 * Configurations for a managed knowledge base.
 *
 * @public
 */
export interface ManagedKnowledgeBaseConfiguration {
  /**
   * Choose CUSTOM to provide your own Bedrock embedding model ARN. Choose MANAGED to use a service-managed embedding model.
   *
   * @public
   */
  embeddingModelType?: EmbeddingModelType | undefined;

  /**
   * The ARN for the embeddings model.
   *
   * @public
   */
  embeddingModelArn?: string | undefined;

  /**
   * The configuration details for the embeddings model. Not required when choosing the MANAGED embeddingModelType.
   *
   * @public
   */
  embeddingModelConfiguration?: EmbeddingModelConfiguration | undefined;

  /**
   * Contains the configuration for server-side encryption for your managed knowledge base.
   *
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * Use this object to specify the Amazon S3 location that the knowledge base uses to process and ingest multimodal content. This field is required when you use a native multimodal embedding model.
   *
   * @public
   */
  supplementalDataStorageConfiguration?: SupplementalDataStorageConfiguration | undefined;
}

/**
 * Contains configurations for authentication to an Amazon Redshift provisioned data warehouse. Specify the type of authentication to use in the `type` field and include the corresponding field. If you specify IAM authentication, you don't need to include another field.
 *
 * @public
 */
export interface RedshiftProvisionedAuthConfiguration {
  /**
   * The type of authentication to use.
   *
   * @public
   */
  type: RedshiftProvisionedAuthType | undefined;

  /**
   * The database username for authentication to an Amazon Redshift provisioned data warehouse.
   *
   * @public
   */
  databaseUser?: string | undefined;

  /**
   * The ARN of an Secrets Manager secret for authentication.
   *
   * @public
   */
  usernamePasswordSecretArn?: string | undefined;
}

/**
 * Contains configurations for a provisioned Amazon Redshift query engine.
 *
 * @public
 */
export interface RedshiftProvisionedConfiguration {
  /**
   * The ID of the Amazon Redshift cluster.
   *
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * Specifies configurations for authentication to Amazon Redshift.
   *
   * @public
   */
  authConfiguration: RedshiftProvisionedAuthConfiguration | undefined;
}

/**
 * Specifies configurations for authentication to a Redshift Serverless. Specify the type of authentication to use in the `type` field and include the corresponding field. If you specify IAM authentication, you don't need to include another field.
 *
 * @public
 */
export interface RedshiftServerlessAuthConfiguration {
  /**
   * The type of authentication to use.
   *
   * @public
   */
  type: RedshiftServerlessAuthType | undefined;

  /**
   * The ARN of an Secrets Manager secret for authentication.
   *
   * @public
   */
  usernamePasswordSecretArn?: string | undefined;
}

/**
 * Contains configurations for authentication to Amazon Redshift Serverless.
 *
 * @public
 */
export interface RedshiftServerlessConfiguration {
  /**
   * The ARN of the Amazon Redshift workgroup.
   *
   * @public
   */
  workgroupArn: string | undefined;

  /**
   * Specifies configurations for authentication to an Amazon Redshift provisioned data warehouse.
   *
   * @public
   */
  authConfiguration: RedshiftServerlessAuthConfiguration | undefined;
}

/**
 * Contains configurations for an Amazon Redshift query engine. Specify the type of query engine in `type` and include the corresponding field. For more information, see [Build a knowledge base by connecting to a structured data source](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface RedshiftQueryEngineConfiguration {
  /**
   * The type of query engine.
   *
   * @public
   */
  type: RedshiftQueryEngineType | undefined;

  /**
   * Specifies configurations for a serverless Amazon Redshift query engine.
   *
   * @public
   */
  serverlessConfiguration?: RedshiftServerlessConfiguration | undefined;

  /**
   * Specifies configurations for a provisioned Amazon Redshift query engine.
   *
   * @public
   */
  provisionedConfiguration?: RedshiftProvisionedConfiguration | undefined;
}

/**
 * Contains configurations for a query, each of which defines information about example queries to help the query engine generate appropriate SQL queries.
 *
 * @public
 */
export interface CuratedQuery {
  /**
   * An example natural language query.
   *
   * @public
   */
  naturalLanguage: string | undefined;

  /**
   * The SQL equivalent of the natural language query.
   *
   * @public
   */
  sql: string | undefined;
}

/**
 * Contains information about a column in the current table for the query engine to consider.
 *
 * @public
 */
export interface QueryGenerationColumn {
  /**
   * The name of the column for which the other fields in this object apply.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the column that helps the query engine understand the contents of the column.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies whether to include or exclude the column during query generation. If you specify `EXCLUDE`, the column will be ignored. If you specify `INCLUDE`, all other columns in the table will be ignored.
   *
   * @public
   */
  inclusion?: IncludeExclude | undefined;
}

/**
 * Contains information about a table for the query engine to consider.
 *
 * @public
 */
export interface QueryGenerationTable {
  /**
   * The name of the table for which the other fields in this object apply.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the table that helps the query engine understand the contents of the table.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies whether to include or exclude the table during query generation. If you specify `EXCLUDE`, the table will be ignored. If you specify `INCLUDE`, all other tables will be ignored.
   *
   * @public
   */
  inclusion?: IncludeExclude | undefined;

  /**
   * An array of objects, each of which defines information about a column in the table.
   *
   * @public
   */
  columns?: QueryGenerationColumn[] | undefined;
}

/**
 * &gt;Contains configurations for context to use during query generation.
 *
 * @public
 */
export interface QueryGenerationContext {
  /**
   * An array of objects, each of which defines information about a table in the database.
   *
   * @public
   */
  tables?: QueryGenerationTable[] | undefined;

  /**
   * An array of objects, each of which defines information about example queries to help the query engine generate appropriate SQL queries.
   *
   * @public
   */
  curatedQueries?: CuratedQuery[] | undefined;
}

/**
 * Contains configurations for query generation. For more information, see [Build a knowledge base by connecting to a structured data source](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html) in the Amazon Bedrock User Guide..
 *
 * @public
 */
export interface QueryGenerationConfiguration {
  /**
   * The time after which query generation will time out.
   *
   * @public
   */
  executionTimeoutSeconds?: number | undefined;

  /**
   * Specifies configurations for context to use during query generation.
   *
   * @public
   */
  generationContext?: QueryGenerationContext | undefined;
}

/**
 * Contains configurations for storage in Glue Data Catalog.
 *
 * @public
 */
export interface RedshiftQueryEngineAwsDataCatalogStorageConfiguration {
  /**
   * A list of names of the tables to use.
   *
   * @public
   */
  tableNames: string[] | undefined;
}

/**
 * Contains configurations for storage in Amazon Redshift.
 *
 * @public
 */
export interface RedshiftQueryEngineRedshiftStorageConfiguration {
  /**
   * The name of the Amazon Redshift database.
   *
   * @public
   */
  databaseName: string | undefined;
}

/**
 * Contains configurations for Amazon Redshift data storage. Specify the data storage service to use in the `type` field and include the corresponding field. For more information, see [Build a knowledge base by connecting to a structured data source](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface RedshiftQueryEngineStorageConfiguration {
  /**
   * The data storage service to use.
   *
   * @public
   */
  type: RedshiftQueryEngineStorageType | undefined;

  /**
   * Specifies configurations for storage in Glue Data Catalog.
   *
   * @public
   */
  awsDataCatalogConfiguration?: RedshiftQueryEngineAwsDataCatalogStorageConfiguration | undefined;

  /**
   * Specifies configurations for storage in Amazon Redshift.
   *
   * @public
   */
  redshiftConfiguration?: RedshiftQueryEngineRedshiftStorageConfiguration | undefined;
}

/**
 * Contains configurations for an Amazon Redshift database. For more information, see [Build a knowledge base by connecting to a structured data source](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface RedshiftConfiguration {
  /**
   * Specifies configurations for Amazon Redshift database storage.
   *
   * @public
   */
  storageConfigurations: RedshiftQueryEngineStorageConfiguration[] | undefined;

  /**
   * Specifies configurations for an Amazon Redshift query engine.
   *
   * @public
   */
  queryEngineConfiguration: RedshiftQueryEngineConfiguration | undefined;

  /**
   * Specifies configurations for generating queries.
   *
   * @public
   */
  queryGenerationConfiguration?: QueryGenerationConfiguration | undefined;
}

/**
 * Contains configurations for a knowledge base connected to an SQL database. Specify the SQL database type in the `type` field and include the corresponding field. For more information, see [Build a knowledge base by connecting to a structured data source](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface SqlKnowledgeBaseConfiguration {
  /**
   * The type of SQL database to connect to the knowledge base.
   *
   * @public
   */
  type: QueryEngineType | undefined;

  /**
   * Specifies configurations for a knowledge base connected to an Amazon Redshift database.
   *
   * @public
   */
  redshiftConfiguration?: RedshiftConfiguration | undefined;
}

/**
 * Contains details about the model used to create vector embeddings for the knowledge base.
 *
 * @public
 */
export interface VectorKnowledgeBaseConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the model used to create vector embeddings for the knowledge base.
   *
   * @public
   */
  embeddingModelArn: string | undefined;

  /**
   * The embeddings model configuration details for the vector model used in Knowledge Base.
   *
   * @public
   */
  embeddingModelConfiguration?: EmbeddingModelConfiguration | undefined;

  /**
   * If you include multimodal data from your data source, use this object to specify configurations for the storage location of the images extracted from your documents. These images can be retrieved and returned to the end user. They can also be used in generation when using [RetrieveAndGenerate](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html).
   *
   * @public
   */
  supplementalDataStorageConfiguration?: SupplementalDataStorageConfiguration | undefined;
}

/**
 * Contains details about the vector embeddings configuration of the knowledge base.
 *
 * @public
 */
export interface KnowledgeBaseConfiguration {
  /**
   * The type of data that the data source is converted into for the knowledge base. Choose `MANAGED` to create a managed knowledge base.
   *
   * @public
   */
  type: KnowledgeBaseType | undefined;

  /**
   * Contains details about the model that's used to convert the data source into vector embeddings.
   *
   * @public
   */
  vectorKnowledgeBaseConfiguration?: VectorKnowledgeBaseConfiguration | undefined;

  /**
   * Contains configuration details for a knowledge base that uses a vector store fully managed by Amazon Bedrock. Specify this object when the knowledge base type is MANAGED.
   *
   * @public
   */
  managedKnowledgeBaseConfiguration?: ManagedKnowledgeBaseConfiguration | undefined;

  /**
   * Settings for an Amazon Kendra knowledge base.
   *
   * @public
   */
  kendraKnowledgeBaseConfiguration?: KendraKnowledgeBaseConfiguration | undefined;

  /**
   * Specifies configurations for a knowledge base connected to an SQL database.
   *
   * @public
   */
  sqlKnowledgeBaseConfiguration?: SqlKnowledgeBaseConfiguration | undefined;
}

/**
 * Contains the names of the fields to which to map information about the vector store.
 *
 * @public
 */
export interface MongoDbAtlasFieldMapping {
  /**
   * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
   *
   * @public
   */
  vectorField: string | undefined;

  /**
   * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   *
   * @public
   */
  textField: string | undefined;

  /**
   * The name of the field in which Amazon Bedrock stores metadata about the vector store.
   *
   * @public
   */
  metadataField: string | undefined;
}

/**
 * Contains details about the storage configuration of the knowledge base in MongoDB Atlas.
 *
 * @public
 */
export interface MongoDbAtlasConfiguration {
  /**
   * The endpoint URL of your MongoDB Atlas cluster for your knowledge base.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * The database name in your MongoDB Atlas cluster for your knowledge base.
   *
   * @public
   */
  databaseName: string | undefined;

  /**
   * The collection name of the knowledge base in MongoDB Atlas.
   *
   * @public
   */
  collectionName: string | undefined;

  /**
   * The name of the MongoDB Atlas vector search index.
   *
   * @public
   */
  vectorIndexName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the secret that you created in Secrets Manager that contains user credentials for your MongoDB Atlas cluster.
   *
   * @public
   */
  credentialsSecretArn: string | undefined;

  /**
   * Contains the names of the fields to which to map information about the vector store.
   *
   * @public
   */
  fieldMapping: MongoDbAtlasFieldMapping | undefined;

  /**
   * The name of the VPC endpoint service in your account that is connected to your MongoDB Atlas cluster.
   *
   * @public
   */
  endpointServiceName?: string | undefined;

  /**
   * The name of the text search index in the MongoDB collection. This is required for using the hybrid search feature.
   *
   * @public
   */
  textIndexName?: string | undefined;
}

/**
 * Contains the names of the fields to which to map information about the vector store.
 *
 * @public
 */
export interface NeptuneAnalyticsFieldMapping {
  /**
   * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   *
   * @public
   */
  textField: string | undefined;

  /**
   * The name of the field in which Amazon Bedrock stores metadata about the vector store.
   *
   * @public
   */
  metadataField: string | undefined;
}

/**
 * Contains details about the storage configuration of the knowledge base in Amazon Neptune Analytics. For more information, see [Create a vector index in Amazon Neptune Analytics](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-neptune.html).
 *
 * @public
 */
export interface NeptuneAnalyticsConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Neptune Analytics vector store.
   *
   * @public
   */
  graphArn: string | undefined;

  /**
   * Contains the names of the fields to which to map information about the vector store.
   *
   * @public
   */
  fieldMapping: NeptuneAnalyticsFieldMapping | undefined;
}

/**
 * Contains the names of the fields to which to map information about the vector store.
 *
 * @public
 */
export interface OpenSearchManagedClusterFieldMapping {
  /**
   * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
   *
   * @public
   */
  vectorField: string | undefined;

  /**
   * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   *
   * @public
   */
  textField: string | undefined;

  /**
   * The name of the field in which Amazon Bedrock stores metadata about the vector store.
   *
   * @public
   */
  metadataField: string | undefined;
}

/**
 * Contains details about the Managed Cluster configuration of the knowledge base in Amazon OpenSearch Service. For more information, see [Create a vector index in OpenSearch Managed Cluster](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-osm.html).
 *
 * @public
 */
export interface OpenSearchManagedClusterConfiguration {
  /**
   * The endpoint URL the OpenSearch domain.
   *
   * @public
   */
  domainEndpoint: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the OpenSearch domain.
   *
   * @public
   */
  domainArn: string | undefined;

  /**
   * The name of the vector store.
   *
   * @public
   */
  vectorIndexName: string | undefined;

  /**
   * Contains the names of the fields to which to map information about the vector store.
   *
   * @public
   */
  fieldMapping: OpenSearchManagedClusterFieldMapping | undefined;
}

/**
 * Contains the names of the fields to which to map information about the vector store.
 *
 * @public
 */
export interface OpenSearchServerlessFieldMapping {
  /**
   * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
   *
   * @public
   */
  vectorField: string | undefined;

  /**
   * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   *
   * @public
   */
  textField: string | undefined;

  /**
   * The name of the field in which Amazon Bedrock stores metadata about the vector store.
   *
   * @public
   */
  metadataField: string | undefined;
}

/**
 * Contains details about the storage configuration of the knowledge base in Amazon OpenSearch Service. For more information, see [Create a vector index in Amazon OpenSearch Service](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-oss.html).
 *
 * @public
 */
export interface OpenSearchServerlessConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the OpenSearch Service vector store.
   *
   * @public
   */
  collectionArn: string | undefined;

  /**
   * The name of the vector store.
   *
   * @public
   */
  vectorIndexName: string | undefined;

  /**
   * Contains the names of the fields to which to map information about the vector store.
   *
   * @public
   */
  fieldMapping: OpenSearchServerlessFieldMapping | undefined;
}

/**
 * Contains the names of the fields to which to map information about the vector store.
 *
 * @public
 */
export interface PineconeFieldMapping {
  /**
   * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   *
   * @public
   */
  textField: string | undefined;

  /**
   * The name of the field in which Amazon Bedrock stores metadata about the vector store.
   *
   * @public
   */
  metadataField: string | undefined;
}

/**
 * Contains details about the storage configuration of the knowledge base in Pinecone. For more information, see [Create a vector index in Pinecone](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-pinecone.html).
 *
 * @public
 */
export interface PineconeConfiguration {
  /**
   * The endpoint URL for your index management page.
   *
   * @public
   */
  connectionString: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the secret that you created in Secrets Manager that is linked to your Pinecone API key.
   *
   * @public
   */
  credentialsSecretArn: string | undefined;

  /**
   * The namespace to be used to write new data to your database.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * Contains the names of the fields to which to map information about the vector store.
   *
   * @public
   */
  fieldMapping: PineconeFieldMapping | undefined;
}

/**
 * Contains the names of the fields to which to map information about the vector store.
 *
 * @public
 */
export interface RdsFieldMapping {
  /**
   * The name of the field in which Amazon Bedrock stores the ID for each entry.
   *
   * @public
   */
  primaryKeyField: string | undefined;

  /**
   * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
   *
   * @public
   */
  vectorField: string | undefined;

  /**
   * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   *
   * @public
   */
  textField: string | undefined;

  /**
   * The name of the field in which Amazon Bedrock stores metadata about the vector store.
   *
   * @public
   */
  metadataField: string | undefined;

  /**
   * Provide a name for the universal metadata field where Amazon Bedrock will store any custom metadata from your data source.
   *
   * @public
   */
  customMetadataField?: string | undefined;
}

/**
 * Contains details about the storage configuration of the knowledge base in Amazon RDS. For more information, see [Create a vector index in Amazon RDS](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-rds.html).
 *
 * @public
 */
export interface RdsConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the vector store.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the secret that you created in Secrets Manager that is linked to your Amazon RDS database.
   *
   * @public
   */
  credentialsSecretArn: string | undefined;

  /**
   * The name of your Amazon RDS database.
   *
   * @public
   */
  databaseName: string | undefined;

  /**
   * The name of the table in the database.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * Contains the names of the fields to which to map information about the vector store.
   *
   * @public
   */
  fieldMapping: RdsFieldMapping | undefined;
}

/**
 * Contains the names of the fields to which to map information about the vector store.
 *
 * @public
 */
export interface RedisEnterpriseCloudFieldMapping {
  /**
   * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
   *
   * @public
   */
  vectorField: string | undefined;

  /**
   * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   *
   * @public
   */
  textField: string | undefined;

  /**
   * The name of the field in which Amazon Bedrock stores metadata about the vector store.
   *
   * @public
   */
  metadataField: string | undefined;
}

/**
 * Contains details about the storage configuration of the knowledge base in Redis Enterprise Cloud. For more information, see [Create a vector index in Redis Enterprise Cloud](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-oss.html).
 *
 * @public
 */
export interface RedisEnterpriseCloudConfiguration {
  /**
   * The endpoint URL of the Redis Enterprise Cloud database.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * The name of the vector index.
   *
   * @public
   */
  vectorIndexName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the secret that you created in Secrets Manager that is linked to your Redis Enterprise Cloud database.
   *
   * @public
   */
  credentialsSecretArn: string | undefined;

  /**
   * Contains the names of the fields to which to map information about the vector store.
   *
   * @public
   */
  fieldMapping: RedisEnterpriseCloudFieldMapping | undefined;
}

/**
 * Contains the storage configuration of the knowledge base for S3 vectors.
 *
 * @public
 */
export interface S3VectorsConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the S3 bucket where vector embeddings are stored. This bucket contains the vector data used by the knowledge base.
   *
   * @public
   */
  vectorBucketArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vector index used for the knowledge base. This ARN identifies the specific vector index resource within Amazon Bedrock.
   *
   * @public
   */
  indexArn?: string | undefined;

  /**
   * The name of the vector index used for the knowledge base. This name identifies the vector index within the Amazon Bedrock service.
   *
   * @public
   */
  indexName?: string | undefined;
}

/**
 * Contains the storage configuration of the knowledge base.
 *
 * @public
 */
export interface StorageConfiguration {
  /**
   * The vector store service in which the knowledge base is stored.
   *
   * @public
   */
  type: KnowledgeBaseStorageType | undefined;

  /**
   * Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.
   *
   * @public
   */
  opensearchServerlessConfiguration?: OpenSearchServerlessConfiguration | undefined;

  /**
   * Contains details about the storage configuration of the knowledge base in OpenSearch Managed Cluster. For more information, see [Create a vector index in Amazon OpenSearch Service](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-osm.html).
   *
   * @public
   */
  opensearchManagedClusterConfiguration?: OpenSearchManagedClusterConfiguration | undefined;

  /**
   * Contains the storage configuration of the knowledge base in Pinecone.
   *
   * @public
   */
  pineconeConfiguration?: PineconeConfiguration | undefined;

  /**
   * Contains the storage configuration of the knowledge base in Redis Enterprise Cloud.
   *
   * @public
   */
  redisEnterpriseCloudConfiguration?: RedisEnterpriseCloudConfiguration | undefined;

  /**
   * Contains details about the storage configuration of the knowledge base in Amazon RDS. For more information, see [Create a vector index in Amazon RDS](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-rds.html).
   *
   * @public
   */
  rdsConfiguration?: RdsConfiguration | undefined;

  /**
   * Contains the storage configuration of the knowledge base in MongoDB Atlas.
   *
   * @public
   */
  mongoDbAtlasConfiguration?: MongoDbAtlasConfiguration | undefined;

  /**
   * Contains details about the Neptune Analytics configuration of the knowledge base in Amazon Neptune. For more information, see [Create a vector index in Amazon Neptune Analytics.](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-neptune.html).
   *
   * @public
   */
  neptuneAnalyticsConfiguration?: NeptuneAnalyticsConfiguration | undefined;

  /**
   * The configuration settings for storing knowledge base data using S3 vectors. This includes vector index information and S3 bucket details for vector storage.
   *
   * @public
   */
  s3VectorsConfiguration?: S3VectorsConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseRequest {
  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A name for the knowledge base.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the knowledge base.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Contains details about the embeddings model used for the knowledge base.
   *
   * @public
   */
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * Contains details about the configuration of the vector database used for the knowledge base.
   *
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;

  /**
   * Specify the key-value pairs for the tags that you want to attach to your knowledge base in this object.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Contains information about a knowledge base.
 *
 * @public
 */
export interface KnowledgeBase {
  /**
   * The unique identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the knowledge base.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The description of the knowledge base.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Contains details about the embeddings configuration of the knowledge base.
   *
   * @public
   */
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * Contains details about the storage configuration of the knowledge base.
   *
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;

  /**
   * The status of the knowledge base. The following statuses are possible:
   *
   * - CREATING – The knowledge base is being created.
   * - ACTIVE – The knowledge base is ready to be queried.
   * - DELETING – The knowledge base is being deleted.
   * - UPDATING – The knowledge base is being updated.
   * - FAILED – The knowledge base API operation failed.
   *
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * The time the knowledge base was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time the knowledge base was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * A list of reasons that the API operation on the knowledge base failed.
   *
   * @public
   */
  failureReasons?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseResponse {
  /**
   * Contains details about the knowledge base.
   *
   * @public
   */
  knowledgeBase: KnowledgeBase | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseRequest {
  /**
   * The unique identifier of the knowledge base to delete.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseResponse {
  /**
   * The unique identifier of the knowledge base that was deleted.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The status of the knowledge base and whether it has been successfully deleted.
   *
   * @public
   */
  status: KnowledgeBaseStatus | undefined;
}

/**
 * @public
 */
export interface DisassociateAgentKnowledgeBaseRequest {
  /**
   * The unique identifier of the agent from which to disassociate the knowledge base.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The version of the agent from which to disassociate the knowledge base.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The unique identifier of the knowledge base to disassociate.
   *
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
   * The unique identifier of the agent with which the knowledge base is associated.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The version of the agent with which the knowledge base is associated.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The unique identifier of the knowledge base associated with the agent.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentKnowledgeBaseResponse {
  /**
   * Contains details about a knowledge base attached to an agent.
   *
   * @public
   */
  agentKnowledgeBase: AgentKnowledgeBase | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseRequest {
  /**
   * The unique identifier of the knowledge base you want to get information on.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseResponse {
  /**
   * Contains details about the knowledge base.
   *
   * @public
   */
  knowledgeBase: KnowledgeBase | undefined;
}

/**
 * @public
 */
export interface ListAgentKnowledgeBasesRequest {
  /**
   * The unique identifier of the agent for which to return information about knowledge bases associated with it.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The version of the agent for which to return information about knowledge bases associated with it.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentKnowledgeBasesResponse {
  /**
   * A list of objects, each of which contains information about a knowledge base associated with the agent.
   *
   * @public
   */
  agentKnowledgeBaseSummaries: AgentKnowledgeBaseSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesRequest {
  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains details about a knowledge base.
 *
 * @public
 */
export interface KnowledgeBaseSummary {
  /**
   * The unique identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the knowledge base.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the knowledge base.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the knowledge base.
   *
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * The time the knowledge base was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesResponse {
  /**
   * A list of knowledge bases with information about each knowledge base.
   *
   * @public
   */
  knowledgeBaseSummaries: KnowledgeBaseSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentKnowledgeBaseRequest {
  /**
   * The unique identifier of the agent associated with the knowledge base that you want to update.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The version of the agent associated with the knowledge base that you want to update.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The unique identifier of the knowledge base that has been associated with an agent.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Specifies a new description for the knowledge base associated with an agent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies whether the agent uses the knowledge base or not when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request.
   *
   * @public
   */
  knowledgeBaseState?: KnowledgeBaseState | undefined;
}

/**
 * @public
 */
export interface UpdateAgentKnowledgeBaseResponse {
  /**
   * Contains details about the knowledge base that has been associated with an agent.
   *
   * @public
   */
  agentKnowledgeBase: AgentKnowledgeBase | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseRequest {
  /**
   * The unique identifier of the knowledge base to update.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Specifies a new name for the knowledge base.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specifies a new description for the knowledge base.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies a different Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Specifies the configuration for the embeddings model used for the knowledge base. You must use the same configuration as when the knowledge base was created.
   *
   * @public
   */
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * Specifies the configuration for the vector store used for the knowledge base. You must use the same configuration as when the knowledge base was created.
   *
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseResponse {
  /**
   * Contains details about the knowledge base.
   *
   * @public
   */
  knowledgeBase: KnowledgeBase | undefined;
}

/**
 * @public
 */
export interface ListVpcConfigurationsRequest {
  /**
   * The unique identifier of the knowledge base whose VPC configurations you want to list.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The status to filter the results by. Only VPC configurations with the specified status are returned.
   *
   * @public
   */
  statusFilter?: VpcConfigurationStatus | undefined;

  /**
   * The maximum number of results to return in the response. If more results are available, the response returns a `nextToken`.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token to retrieve the next page of results, returned in a previous response when more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of a VPC configuration returned by `ListVpcConfigurations`.
 *
 * @public
 */
export interface VpcConfigurationSummary {
  /**
   * The unique identifier of the VPC configuration.
   *
   * @public
   */
  vpcConfigurationId: string | undefined;

  /**
   * The current lifecycle status of the VPC configuration.
   *
   * @public
   */
  status: VpcConfigurationStatus | undefined;

  /**
   * Additional detail about the current status, such as the cause of a failure.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The identifier of the VPC that the knowledge base connects through to reach the resource.
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * The private IPv4 address or DNS name of the resource.
   *
   * @public
   */
  resourceTarget: string | undefined;

  /**
   * The port on which the resource is reached.
   *
   * @public
   */
  port: number | undefined;

  /**
   * The protocol used to connect to the resource.
   *
   * @public
   */
  protocol: VpcProtocol | undefined;

  /**
   * Specifies how the resource target is resolved.
   *
   * @public
   */
  resolutionMode: VpcResolutionMode | undefined;

  /**
   * The HTTP `Host` header value sent when invoking the resource, if configured.
   *
   * @public
   */
  hostHeader?: string | undefined;

  /**
   * The expected TLS server name that the service matches against the Subject Alternative Names on the resource's TLS certificate. Present when `protocol` is `HTTPS`.
   *
   * @public
   */
  tlsServerName?: string | undefined;

  /**
   * The human-readable name of the VPC configuration, if provided.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the VPC configuration, if provided.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time at which the VPC configuration was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListVpcConfigurationsResponse {
  /**
   * A list of VPC configuration summaries.
   *
   * @public
   */
  items: VpcConfigurationSummary[] | undefined;

  /**
   * A pagination token to retrieve the next page of results, present when the total number of results exceeds the maximum number of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains specifications for an Amazon Bedrock agent with which to use the prompt. For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html) and [Automate tasks in your application using conversational agents](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html).
 *
 * @public
 */
export interface PromptAgentResource {
  /**
   * The ARN of the agent with which to use the prompt.
   *
   * @public
   */
  agentIdentifier: string | undefined;
}

/**
 * Contains specifications for a generative AI resource with which to use the prompt. For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html).
 *
 * @public
 */
export type PromptGenAiResource =
  | PromptGenAiResource.AgentMember
  | PromptGenAiResource.$UnknownMember;

/**
 * @public
 */
export namespace PromptGenAiResource {
  /**
   * Specifies an Amazon Bedrock agent with which to use the prompt.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    agent: (value: PromptAgentResource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains a key-value pair that defines a metadata tag and value to attach to a prompt variant. For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html).
 *
 * @public
 */
export interface PromptMetadataEntry {
  /**
   * The key of a metadata tag for a prompt variant.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of a metadata tag for a prompt variant.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Contains details about a variant of the prompt.
 *
 * @public
 */
export interface PromptVariant {
  /**
   * The name of the prompt variant.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of prompt template to use.
   *
   * @public
   */
  templateType: PromptTemplateType | undefined;

  /**
   * Contains configurations for the prompt template.
   *
   * @public
   */
  templateConfiguration: PromptTemplateConfiguration | undefined;

  /**
   * The unique identifier of the model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) with which to run inference on the prompt.
   *
   * @public
   */
  modelId?: string | undefined;

  /**
   * Contains inference configurations for the prompt variant.
   *
   * @public
   */
  inferenceConfiguration?: PromptInferenceConfiguration | undefined;

  /**
   * An array of objects, each containing a key-value pair that defines a metadata tag and value to attach to a prompt variant.
   *
   * @public
   */
  metadata?: PromptMetadataEntry[] | undefined;

  /**
   * Contains model-specific inference configurations that aren't in the `inferenceConfiguration` field. To see model-specific inference parameters, see [Inference request parameters and response fields for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
   *
   * @public
   */
  additionalModelRequestFields?: __DocumentType | undefined;

  /**
   * Specifies a generative AI resource with which to use the prompt.
   *
   * @public
   */
  genAiResource?: PromptGenAiResource | undefined;
}

/**
 * @public
 */
export interface CreatePromptRequest {
  /**
   * A name for the prompt.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description for the prompt.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to encrypt the prompt.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * The name of the default variant for the prompt. This value must match the `name` field in the relevant [PromptVariant](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html) object.
   *
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * A list of objects, each containing details about a variant of the prompt.
   *
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Any tags that you want to attach to the prompt. For more information, see [Tagging resources in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html).
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePromptResponse {
  /**
   * The name of the prompt.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the prompt.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key that you encrypted the prompt with.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * The name of the default variant for your prompt.
   *
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * A list of objects, each containing details about a variant of the prompt.
   *
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * The unique identifier of the prompt.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the prompt.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The version of the prompt. When you create a prompt, the version created is the `DRAFT` version.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The time at which the prompt was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the prompt was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreatePromptVersionRequest {
  /**
   * The unique identifier of the prompt that you want to create a version of.
   *
   * @public
   */
  promptIdentifier: string | undefined;

  /**
   * A description for the version of the prompt.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Any tags that you want to attach to the version of the prompt. For more information, see [Tagging resources in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html).
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePromptVersionResponse {
  /**
   * The name of the prompt.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description for the version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to encrypt the version of the prompt.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * The name of the default variant for the prompt. This value must match the `name` field in the relevant [PromptVariant](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html) object.
   *
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * A list of objects, each containing details about a variant of the prompt.
   *
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * The unique identifier of the prompt.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the version of the prompt.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The version of the prompt that was created. Versions are numbered incrementally, starting from 1.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The time at which the prompt was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the prompt was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeletePromptRequest {
  /**
   * The unique identifier of the prompt.
   *
   * @public
   */
  promptIdentifier: string | undefined;

  /**
   * The version of the prompt to delete. To delete the prompt, omit this field.
   *
   * @public
   */
  promptVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeletePromptResponse {
  /**
   * The unique identifier of the prompt that was deleted.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The version of the prompt that was deleted.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * @public
 */
export interface GetPromptRequest {
  /**
   * The unique identifier of the prompt.
   *
   * @public
   */
  promptIdentifier: string | undefined;

  /**
   * The version of the prompt about which you want to retrieve information. Omit this field to return information about the working draft of the prompt.
   *
   * @public
   */
  promptVersion?: string | undefined;

  /**
   * Controls the scope of data returned. Set to `METADATA_ONLY` to return only resource metadata. Set to `ALL_DATA` or omit this field to return the full response.
   *
   * @public
   */
  includedData?: IncludedData | undefined;
}

/**
 * @public
 */
export interface GetPromptResponse {
  /**
   * The name of the prompt.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The descriptino of the prompt.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key that the prompt is encrypted with.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * The name of the default variant for the prompt. This value must match the `name` field in the relevant [PromptVariant](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html) object.
   *
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * A list of objects, each containing details about a variant of the prompt.
   *
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * The unique identifier of the prompt.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the prompt or the prompt version (if you specified a version in the request).
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The version of the prompt.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The time at which the prompt was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the prompt was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListPromptsRequest {
  /**
   * The unique identifier of the prompt for whose versions you want to return information. Omit this field to list information about all prompts in an account.
   *
   * @public
   */
  promptIdentifier?: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information about a prompt in your Prompt management tool.
 *
 * This data type is used in the following API operations:
 *
 * - [ListPrompts response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListPrompts.html#API_agent_ListPrompts_ResponseSyntax)
 *
 * @public
 */
export interface PromptSummary {
  /**
   * The name of the prompt.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the prompt.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier of the prompt.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the prompt or the prompt version (if you specified a version in the request).
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The version of the prompt that this summary applies to.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The time at which the prompt was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the prompt was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListPromptsResponse {
  /**
   * A list, each member of which contains information about a prompt using Prompt management.
   *
   * @public
   */
  promptSummaries: PromptSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePromptRequest {
  /**
   * A name for the prompt.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description for the prompt.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to encrypt the prompt.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * The name of the default variant for the prompt. This value must match the `name` field in the relevant [PromptVariant](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html) object.
   *
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * A list of objects, each containing details about a variant of the prompt.
   *
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * The unique identifier of the prompt.
   *
   * @public
   */
  promptIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdatePromptResponse {
  /**
   * The name of the prompt.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the prompt.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to encrypt the prompt.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * The name of the default variant for the prompt. This value must match the `name` field in the relevant [PromptVariant](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html) object.
   *
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * A list of objects, each containing details about a variant of the prompt.
   *
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * The unique identifier of the prompt.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the prompt.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The version of the prompt. When you update a prompt, the version updated is the `DRAFT` version.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The time at which the prompt was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the prompt was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the knowledge base to attach the resource policy to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The JSON-formatted resource policy to associate with the knowledge base.
   *
   * @public
   */
  policy: __AutomaticJsonStringConversion | string | undefined;

  /**
   * The expected revision identifier of the resource policy. Use this to prevent conflicts when multiple users update the same policy concurrently. Specify the `revisionId` from the most recent `GetResourcePolicy` or `PutResourcePolicy` response.
   *
   * @public
   */
  expectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The ARN of the knowledge base that the resource policy was attached to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The revision identifier of the resource policy. Use this value in the `expectedRevisionId` field of a subsequent `PutResourcePolicy` or `DeleteResourcePolicy` request.
   *
   * @public
   */
  revisionId: string | undefined;
}

/**
 * The instruction content, as a set of named fields. Every field is optional; at least one must be present. Service-side validation enforces per-field and aggregate size limits.
 *
 * @public
 */
export interface RetrievalInstructionContent {
  /**
   * How to interpret and decompose the question, and what to prioritise when searching.
   *
   * @public
   */
  retrievalGuidance?: string | undefined;

  /**
   * Who the assistant is: identity, tone and language.
   *
   * @public
   */
  persona?: string | undefined;

  /**
   * How the answer is structured, including how sources are cited.
   *
   * @public
   */
  answerFormat?: string | undefined;

  /**
   * Whether and how to answer: how strongly an answer must be supported, and what to do with questions outside scope.
   *
   * @public
   */
  answerPolicy?: string | undefined;
}

/**
 * @public
 */
export interface CreateRetrievalInstructionRequest {
  /**
   * A caller-supplied token that makes a retried create return the existing resource rather than a second one. The window is 8 hours.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies the name of the retrieval instruction.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The instruction content, as a set of named fields. Get does not return this field until the create review passes.
   *
   * @public
   */
  instruction: RetrievalInstructionContent | undefined;

  /**
   * Specifies a description of the retrieval instruction.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a customer managed AWS Key Management Service (AWS KMS) key used to encrypt the instruction content at rest. If you omit it, the service uses an AWS owned key. You fix the key at create and cannot change it later.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * Tags for the retrieval instruction.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRetrievalInstructionResponse {
  /**
   * The identifier of the newly created retrieval instruction.
   *
   * @public
   */
  retrievalInstructionId: string | undefined;

  /**
   * The ARN of the newly created retrieval instruction.
   *
   * @public
   */
  retrievalInstructionArn: string | undefined;

  /**
   * The name of the retrieval instruction.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Always INACTIVE on this response. The content review has not run when this call returns, so the resource is not yet usable.
   *
   * @public
   */
  status: RetrievalInstructionStatus | undefined;

  /**
   * Always CREATING on this response. Poll GetRetrievalInstruction until this member is neither CREATING nor UPDATING, then read the outcome from it.
   *
   * @public
   */
  lastTransitionStatus: RetrievalInstructionLastTransitionStatus | undefined;

  /**
   * When you created the retrieval instruction.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * When the retrieval instruction was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateRetrievalInstructionVersionRequest {
  /**
   * The identifier of the retrieval instruction to version.
   *
   * @public
   */
  retrievalInstructionId: string | undefined;

  /**
   * A description of this version. Independent of the retrieval instruction's own description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A caller-supplied token that makes a retried call return the version created by the first call rather than a second version. The window is 8 hours.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRetrievalInstructionVersionResponse {
  /**
   * The identifier of the retrieval instruction.
   *
   * @public
   */
  retrievalInstructionId: string | undefined;

  /**
   * The ARN of the retrieval instruction. Versions do not have their own ARN.
   *
   * @public
   */
  retrievalInstructionArn: string | undefined;

  /**
   * The number of the version created. Versions are numbered from 1 and allocated monotonically; a number is never reused, even after the version is deleted.
   *
   * @public
   */
  version: string | undefined;

  /**
   * When this version was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The description of this version, when one was supplied.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRetrievalInstructionRequest {
  /**
   * The identifier of the retrieval instruction to delete.
   *
   * @public
   */
  retrievalInstructionId: string | undefined;

  /**
   * The version to delete. Omit this field to delete the retrieval instruction itself, which you can do only when it has no versions; while any version exists the service rejects the request with ConflictException. You cannot delete DRAFT on its own; deleting the retrieval instruction removes it.
   *
   * @public
   */
  retrievalInstructionVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRetrievalInstructionResponse {
  /**
   * The identifier of the deleted retrieval instruction.
   *
   * @public
   */
  retrievalInstructionId: string | undefined;

  /**
   * The ARN of the retrieval instruction.
   *
   * @public
   */
  retrievalInstructionArn: string | undefined;

  /**
   * The version that you deleted. Absent when you deleted the whole retrieval instruction.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * @public
 */
export interface GetRetrievalInstructionRequest {
  /**
   * The identifier of the retrieval instruction to get.
   *
   * @public
   */
  retrievalInstructionId: string | undefined;

  /**
   * The version to return: a version number, or DRAFT for the retrieval instruction's current reviewed content. When omitted, DRAFT is used. This default is permanent: omitting retrievalInstructionVersion will never resolve to a numbered version.
   *
   * @public
   */
  retrievalInstructionVersion?: string | undefined;
}

/**
 * One reason the most recent create or update did not succeed. code drives programmatic branching (fix the text, fix the configuration, or retry); message carries the specific cause.
 *
 * @public
 */
export interface RetrievalInstructionFailureReason {
  /**
   * The instruction field this entry is about. Present on review rejections of a specific field; absent when the failure applies to the whole review, because a client-side execution failure or a service fault has no single field.
   *
   * @public
   */
  fieldName?: RetrievalInstructionFieldName | undefined;

  /**
   * Stable, machine-readable classification by fault attribution. Valid values:
   *
   * - CONTENT_REJECTED – The review rejected the named field's content; revise the text and resubmit.
   * - CLIENT_ERROR – The review could not run for a customer-side reason, for example the customer managed AWS KMS key could not be used; fix the configuration and resubmit.
   * - INTERNAL_ERROR – The review could not complete due to a service fault; retry the create or update.
   *
   * New values may be added over time; your client should tolerate values it does not recognize and treat them as a failure.
   *
   * @public
   */
  code: RetrievalInstructionFailureReasonCode | undefined;

  /**
   * Human-readable explanation of the specific cause. Never contains the customer's own text.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface GetRetrievalInstructionResponse {
  /**
   * The identifier of the retrieval instruction.
   *
   * @public
   */
  retrievalInstructionId: string | undefined;

  /**
   * The ARN of the retrieval instruction.
   *
   * @public
   */
  retrievalInstructionArn: string | undefined;

  /**
   * The name of the retrieval instruction.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specifies whether you can use the instruction. You can resolve only an ACTIVE instruction at retrieval time. Monotone: INACTIVE to ACTIVE once, never back. Numbered versions are always ACTIVE.
   *
   * @public
   */
  status: RetrievalInstructionStatus | undefined;

  /**
   * The outcome or in-progress state of the most recent create or update. CREATING or UPDATING means the operation is still running. Independent of status. Always has a value from the create 202 onward. On a numbered version this is always CREATE_SUCCESSFUL: a version is created once, from reviewed content, and is immutable.
   *
   * @public
   */
  lastTransitionStatus: RetrievalInstructionLastTransitionStatus | undefined;

  /**
   * The reviewed content this instruction serves — what AgenticRetrieveStream resolves while status is ACTIVE. Absent until the first create review passes. Always present on a numbered version.
   *
   * @public
   */
  instruction?: RetrievalInstructionContent | undefined;

  /**
   * When the retrieval instruction was created. On a numbered version, when that version was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * When the retrieval instruction was last updated. Equal to createdAt on a numbered version, which is immutable.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * A description of the retrieval instruction. On a numbered version, the description of that version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the customer managed KMS key protecting this content, when one was supplied at create.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * Why the most recent create or update was rejected. One entry for each rejected field, or a single entry when the review itself failed. Each entry has a machine-readable code and a message, and names the field when it applies to one. The service includes this field only when lastTransitionStatus is CREATE_FAILED or UPDATE_FAILED. Never present on a numbered version.
   *
   * @public
   */
  lastTransitionStatusReasons?: RetrievalInstructionFailureReason[] | undefined;

  /**
   * The version this response describes: a version number, or DRAFT.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The largest version number that currently exists for this retrieval instruction, that is, the newest version you can retrieve. Present only on a DRAFT read, and only when at least one version exists. Because version numbers are never reused, deleting versions can leave gaps: this is the newest existing version, not a count and not the highest number ever created.
   *
   * @public
   */
  latestVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListRetrievalInstructionsRequest {
  /**
   * Return only instructions with this availability status.
   *
   * @public
   */
  status?: RetrievalInstructionStatus | undefined;

  /**
   * The maximum number of results to return in a single page. The effective upper bound is enforced service-side.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token from a previous ListRetrievalInstructions response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of a retrieval instruction, without the content.
 *
 * @public
 */
export interface RetrievalInstructionSummary {
  /**
   * The identifier of the retrieval instruction.
   *
   * @public
   */
  retrievalInstructionId: string | undefined;

  /**
   * The ARN of the retrieval instruction.
   *
   * @public
   */
  retrievalInstructionArn: string | undefined;

  /**
   * The name of the retrieval instruction.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Whether the instruction can be used. Only ACTIVE is resolvable at retrieval time.
   *
   * @public
   */
  status: RetrievalInstructionStatus | undefined;

  /**
   * The outcome or in-progress state of the most recent create or update of the retrieval instruction.
   *
   * @public
   */
  lastTransitionStatus: RetrievalInstructionLastTransitionStatus | undefined;

  /**
   * When you created the retrieval instruction.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * When the retrieval instruction was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * A description of the retrieval instruction.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListRetrievalInstructionsResponse {
  /**
   * The retrieval instruction summaries in this page.
   *
   * @public
   */
  retrievalInstructionSummaries: RetrievalInstructionSummary[] | undefined;

  /**
   * The pagination token to pass to the next ListRetrievalInstructions call, absent on the last page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRetrievalInstructionVersionsRequest {
  /**
   * The identifier of the retrieval instruction whose versions to list.
   *
   * @public
   */
  retrievalInstructionId: string | undefined;

  /**
   * Specifies the maximum number of versions to return in a single page. The service enforces the effective upper bound.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token from a previous ListRetrievalInstructionVersions response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of one numbered version of a retrieval instruction, without the content.
 *
 * @public
 */
export interface RetrievalInstructionVersionSummary {
  /**
   * The version number.
   *
   * @public
   */
  version: string | undefined;

  /**
   * When this version was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListRetrievalInstructionVersionsResponse {
  /**
   * The version summaries in this page, newest first.
   *
   * @public
   */
  retrievalInstructionVersionSummaries: RetrievalInstructionVersionSummary[] | undefined;

  /**
   * The pagination token to pass to the next ListRetrievalInstructionVersions call, absent on the last page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRetrievalInstructionRequest {
  /**
   * The identifier of the retrieval instruction to update.
   *
   * @public
   */
  retrievalInstructionId: string | undefined;

  /**
   * The replacement instruction content. This is a full replacement of all four fields, not a patch. During UPDATING, Get continues to return the previously-served content until the update review passes.
   *
   * @public
   */
  instruction: RetrievalInstructionContent | undefined;

  /**
   * A replacement description; applied together with the content when the review passes. Omit to clear.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRetrievalInstructionResponse {
  /**
   * The identifier of the retrieval instruction.
   *
   * @public
   */
  retrievalInstructionId: string | undefined;

  /**
   * The ARN of the retrieval instruction.
   *
   * @public
   */
  retrievalInstructionArn: string | undefined;

  /**
   * The name of the retrieval instruction.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Whether the instruction can be used. An update never lowers status. Unchanged from the previous value on this response.
   *
   * @public
   */
  status: RetrievalInstructionStatus | undefined;

  /**
   * Always UPDATING on this response. Poll GetRetrievalInstruction until this member is neither CREATING nor UPDATING, then read the outcome from it.
   *
   * @public
   */
  lastTransitionStatus: RetrievalInstructionLastTransitionStatus | undefined;

  /**
   * When you created the retrieval instruction.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * When the retrieval instruction was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which to list tags.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The key-value pairs for the tags associated with the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * An object containing key-value pairs that define the tags to attach to the resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource from which to remove tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of keys of the tags to remove from the resource.
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
 * @public
 */
export interface ValidateFlowDefinitionResponse {
  /**
   * Contains an array of objects, each of which contains an error identified by validation.
   *
   * @public
   */
  validations: FlowValidation[] | undefined;
}

/**
 * @public
 */
export interface DeleteAgentVersionRequest {
  /**
   * The unique identifier of the agent that the version belongs to.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The version of the agent to delete.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * By default, this value is `false` and deletion is stopped if the resource is in use. If you set it to `true`, the resource will be deleted even if the resource is in use.
   *
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteAgentVersionResponse {
  /**
   * The unique identifier of the agent that the version belongs to.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The version that was deleted.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * The status of the agent version.
   *
   * @public
   */
  agentStatus: AgentStatus | undefined;
}

/**
 * @public
 */
export interface GetAgentVersionRequest {
  /**
   * The unique identifier of the agent.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The version of the agent.
   *
   * @public
   */
  agentVersion: string | undefined;
}

/**
 * @public
 */
export interface GetAgentVersionResponse {
  /**
   * Contains details about the version of the agent.
   *
   * @public
   */
  agentVersion: AgentVersion | undefined;
}

/**
 * @public
 */
export interface ListAgentVersionsRequest {
  /**
   * The unique identifier of the agent.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentVersionsResponse {
  /**
   * A list of objects, each of which contains information about a version of the agent.
   *
   * @public
   */
  agentVersionSummaries: AgentVersionSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The definition of the nodes and connections between nodes in the flow.
 *
 * @public
 */
export interface FlowDefinition {
  /**
   * An array of node definitions in the flow.
   *
   * @public
   */
  nodes?: FlowNode[] | undefined;

  /**
   * An array of connection definitions in the flow.
   *
   * @public
   */
  connections?: FlowConnection[] | undefined;
}

/**
 * Contains configurations about a node in the flow.
 *
 * @public
 */
export interface FlowNode {
  /**
   * A name for the node.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of node. This value must match the name of the key that you provide in the configuration you provide in the `FlowNodeConfiguration` field.
   *
   * @public
   */
  type: FlowNodeType | undefined;

  /**
   * Contains configurations for the node.
   *
   * @public
   */
  configuration?: FlowNodeConfiguration | undefined;

  /**
   * An array of objects, each of which contains information about an input into the node.
   *
   * @public
   */
  inputs?: FlowNodeInput[] | undefined;

  /**
   * A list of objects, each of which contains information about an output from the node.
   *
   * @public
   */
  outputs?: FlowNodeOutput[] | undefined;
}

/**
 * Contains configurations for a node in your flow. For more information, see [Node types in a flow](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export type FlowNodeConfiguration =
  | FlowNodeConfiguration.AgentMember
  | FlowNodeConfiguration.CollectorMember
  | FlowNodeConfiguration.ConditionMember
  | FlowNodeConfiguration.InlineCodeMember
  | FlowNodeConfiguration.InputMember
  | FlowNodeConfiguration.IteratorMember
  | FlowNodeConfiguration.KnowledgeBaseMember
  | FlowNodeConfiguration.LambdaFunctionMember
  | FlowNodeConfiguration.LexMember
  | FlowNodeConfiguration.LoopMember
  | FlowNodeConfiguration.LoopControllerMember
  | FlowNodeConfiguration.LoopInputMember
  | FlowNodeConfiguration.OutputMember
  | FlowNodeConfiguration.PromptMember
  | FlowNodeConfiguration.RetrievalMember
  | FlowNodeConfiguration.StorageMember
  | FlowNodeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace FlowNodeConfiguration {
  /**
   * Contains configurations for an input flow node in your flow. The first node in the flow. `inputs` can't be specified for this node.
   *
   * @public
   */
  export interface InputMember {
    input: InputFlowNodeConfiguration;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    inlineCode?: never;
    loop?: never;
    loopInput?: never;
    loopController?: never;
    $unknown?: never;
  }

  /**
   * Contains configurations for an output flow node in your flow. The last node in the flow. `outputs` can't be specified for this node.
   *
   * @public
   */
  export interface OutputMember {
    input?: never;
    output: OutputFlowNodeConfiguration;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    inlineCode?: never;
    loop?: never;
    loopInput?: never;
    loopController?: never;
    $unknown?: never;
  }

  /**
   * Contains configurations for a knowledge base node in your flow. Queries a knowledge base and returns the retrieved results or generated response.
   *
   * @public
   */
  export interface KnowledgeBaseMember {
    input?: never;
    output?: never;
    knowledgeBase: KnowledgeBaseFlowNodeConfiguration;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    inlineCode?: never;
    loop?: never;
    loopInput?: never;
    loopController?: never;
    $unknown?: never;
  }

  /**
   * Contains configurations for a condition node in your flow. Defines conditions that lead to different branches of the flow.
   *
   * @public
   */
  export interface ConditionMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition: ConditionFlowNodeConfiguration;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    inlineCode?: never;
    loop?: never;
    loopInput?: never;
    loopController?: never;
    $unknown?: never;
  }

  /**
   * Contains configurations for a Lex node in your flow. Invokes an Amazon Lex bot to identify the intent of the input and return the intent as the output.
   *
   * @public
   */
  export interface LexMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex: LexFlowNodeConfiguration;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    inlineCode?: never;
    loop?: never;
    loopInput?: never;
    loopController?: never;
    $unknown?: never;
  }

  /**
   * Contains configurations for a prompt node in your flow. Runs a prompt and generates the model response as the output. You can use a prompt from Prompt management or you can configure one in this node.
   *
   * @public
   */
  export interface PromptMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt: PromptFlowNodeConfiguration;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    inlineCode?: never;
    loop?: never;
    loopInput?: never;
    loopController?: never;
    $unknown?: never;
  }

  /**
   * Contains configurations for a Lambda function node in your flow. Invokes an Lambda function.
   *
   * @public
   */
  export interface LambdaFunctionMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction: LambdaFunctionFlowNodeConfiguration;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    inlineCode?: never;
    loop?: never;
    loopInput?: never;
    loopController?: never;
    $unknown?: never;
  }

  /**
   * Contains configurations for a storage node in your flow. Stores an input in an Amazon S3 location.
   *
   * @public
   */
  export interface StorageMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage: StorageFlowNodeConfiguration;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    inlineCode?: never;
    loop?: never;
    loopInput?: never;
    loopController?: never;
    $unknown?: never;
  }

  /**
   * Contains configurations for an agent node in your flow. Invokes an alias of an agent and returns the response.
   *
   * @public
   */
  export interface AgentMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent: AgentFlowNodeConfiguration;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    inlineCode?: never;
    loop?: never;
    loopInput?: never;
    loopController?: never;
    $unknown?: never;
  }

  /**
   * Contains configurations for a retrieval node in your flow. Retrieves data from an Amazon S3 location and returns it as the output.
   *
   * @public
   */
  export interface RetrievalMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval: RetrievalFlowNodeConfiguration;
    iterator?: never;
    collector?: never;
    inlineCode?: never;
    loop?: never;
    loopInput?: never;
    loopController?: never;
    $unknown?: never;
  }

  /**
   * Contains configurations for an iterator node in your flow. Takes an input that is an array and iteratively sends each item of the array as an output to the following node. The size of the array is also returned in the output.
   *
   * The output flow node at the end of the flow iteration will return a response for each member of the array. To return only one response, you can include a collector node downstream from the iterator node.
   *
   * @public
   */
  export interface IteratorMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator: IteratorFlowNodeConfiguration;
    collector?: never;
    inlineCode?: never;
    loop?: never;
    loopInput?: never;
    loopController?: never;
    $unknown?: never;
  }

  /**
   * Contains configurations for a collector node in your flow. Collects an iteration of inputs and consolidates them into an array of outputs.
   *
   * @public
   */
  export interface CollectorMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector: CollectorFlowNodeConfiguration;
    inlineCode?: never;
    loop?: never;
    loopInput?: never;
    loopController?: never;
    $unknown?: never;
  }

  /**
   * Contains configurations for an inline code node in your flow. Inline code nodes let you write and execute code directly within your flow, enabling data transformations, custom logic, and integrations without needing an external Lambda function.
   *
   * @public
   */
  export interface InlineCodeMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    inlineCode: InlineCodeFlowNodeConfiguration;
    loop?: never;
    loopInput?: never;
    loopController?: never;
    $unknown?: never;
  }

  /**
   * Contains configurations for a DoWhile loop in your flow.
   *
   * @public
   */
  export interface LoopMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    inlineCode?: never;
    loop: LoopFlowNodeConfiguration;
    loopInput?: never;
    loopController?: never;
    $unknown?: never;
  }

  /**
   * Contains input node configurations for a DoWhile loop in your flow.
   *
   * @public
   */
  export interface LoopInputMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    inlineCode?: never;
    loop?: never;
    loopInput: LoopInputFlowNodeConfiguration;
    loopController?: never;
    $unknown?: never;
  }

  /**
   * Contains controller node configurations for a DoWhile loop in your flow.
   *
   * @public
   */
  export interface LoopControllerMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    inlineCode?: never;
    loop?: never;
    loopInput?: never;
    loopController: LoopControllerFlowNodeConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    input?: never;
    output?: never;
    knowledgeBase?: never;
    condition?: never;
    lex?: never;
    prompt?: never;
    lambdaFunction?: never;
    storage?: never;
    agent?: never;
    retrieval?: never;
    iterator?: never;
    collector?: never;
    inlineCode?: never;
    loop?: never;
    loopInput?: never;
    loopController?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    input: (value: InputFlowNodeConfiguration) => T;
    output: (value: OutputFlowNodeConfiguration) => T;
    knowledgeBase: (value: KnowledgeBaseFlowNodeConfiguration) => T;
    condition: (value: ConditionFlowNodeConfiguration) => T;
    lex: (value: LexFlowNodeConfiguration) => T;
    prompt: (value: PromptFlowNodeConfiguration) => T;
    lambdaFunction: (value: LambdaFunctionFlowNodeConfiguration) => T;
    storage: (value: StorageFlowNodeConfiguration) => T;
    agent: (value: AgentFlowNodeConfiguration) => T;
    retrieval: (value: RetrievalFlowNodeConfiguration) => T;
    iterator: (value: IteratorFlowNodeConfiguration) => T;
    collector: (value: CollectorFlowNodeConfiguration) => T;
    inlineCode: (value: InlineCodeFlowNodeConfiguration) => T;
    loop: (value: LoopFlowNodeConfiguration) => T;
    loopInput: (value: LoopInputFlowNodeConfiguration) => T;
    loopController: (value: LoopControllerFlowNodeConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains configurations for the nodes of a DoWhile loop in your flow.
 *
 * A DoWhile loop is made up of the following nodes:
 *
 * - `Loop` - The container node that holds the loop's flow definition. This node encompasses the entire loop structure.
 * - `LoopInput` - The entry point node for the loop. This node receives inputs from nodes outside the loop and from previous loop iterations.
 * - Body nodes - The processing nodes that execute within each loop iteration. These can be nodes for handling data in your flow, such as a prompt or Lambda function nodes. Some node types aren't supported inside a DoWhile loop body. For more information, see [LoopIncompatibleNodeTypeFlowValidationDetails](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_LoopIncompatibleNodeTypeFlowValidationDetails.html).
 * - `LoopController` - The node that evaluates whether the loop should continue or exit based on a condition.
 *
 * These nodes work together to create a loop that runs at least once and continues until a specified condition is met or a maximum number of iterations is reached.
 *
 * @public
 */
export interface LoopFlowNodeConfiguration {
  /**
   * The definition of the DoWhile loop nodes and connections between nodes in the flow.
   *
   * @public
   */
  definition: FlowDefinition | undefined;
}

/**
 * @public
 */
export interface CreateFlowRequest {
  /**
   * A name for the flow.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description for the flow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service role with permissions to create and manage a flow. For more information, see [Create a service role for flows in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html) in the Amazon Bedrock User Guide.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to encrypt the flow.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * A definition of the nodes and connections between nodes in the flow.
   *
   * @public
   */
  definition?: FlowDefinition | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Any tags that you want to attach to the flow. For more information, see [Tagging resources in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html).
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFlowResponse {
  /**
   * The name of the flow.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the flow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see [Create a service role for flows in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html) in the Amazon Bedrock User Guide.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key that you encrypted the flow with.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the flow. When you submit this request, the status will be `NotPrepared`. If creation fails, the status becomes `Failed`.
   *
   * @public
   */
  status: FlowStatus | undefined;

  /**
   * The time at which the flow was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the flow was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The version of the flow. When you create a flow, the version created is the `DRAFT` version.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A definition of the nodes and connections between nodes in the flow.
   *
   * @public
   */
  definition?: FlowDefinition | undefined;
}

/**
 * @public
 */
export interface CreateFlowVersionResponse {
  /**
   * The name of the version.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see [Create a service role for flows in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html) in the Amazon Bedrock User Guide.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The KMS key that the flow is encrypted with.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the flow.
   *
   * @public
   */
  status: FlowStatus | undefined;

  /**
   * The time at which the flow was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The version of the flow that was created. Versions are numbered incrementally, starting from 1.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A definition of the nodes and connections in the flow.
   *
   * @public
   */
  definition?: FlowDefinition | undefined;
}

/**
 * @public
 */
export interface GetFlowResponse {
  /**
   * The name of the flow.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the flow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see [Create a service row for flows](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html) in the Amazon Bedrock User Guide.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key that the flow is encrypted with.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the flow. The following statuses are possible:
   *
   * - NotPrepared – The flow has been created or updated, but hasn't been prepared. If you just created the flow, you can't test it. If you updated the flow, the `DRAFT` version won't contain the latest changes for testing. Send a [PrepareFlow](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PrepareFlow.html) request to package the latest changes into the `DRAFT` version.
   * - Preparing – The flow is being prepared so that the `DRAFT` version contains the latest changes for testing.
   * - Prepared – The flow is prepared and the `DRAFT` version contains the latest changes for testing.
   * - Failed – The last API operation that you invoked on the flow failed. Send a [GetFlow](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlow.html) request and check the error message in the `validations` field.
   *
   * @public
   */
  status: FlowStatus | undefined;

  /**
   * The time at which the flow was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the flow was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The version of the flow for which information was retrieved.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The definition of the nodes and connections between the nodes in the flow.
   *
   * @public
   */
  definition?: FlowDefinition | undefined;

  /**
   * A list of validation error messages related to the last failed operation on the flow.
   *
   * @public
   */
  validations?: FlowValidation[] | undefined;
}

/**
 * @public
 */
export interface GetFlowVersionResponse {
  /**
   * The name of the version.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the flow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see [Create a service role for flows in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html) in the Amazon Bedrock User Guide.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key that the version of the flow is encrypted with.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the flow.
   *
   * @public
   */
  status: FlowStatus | undefined;

  /**
   * The time at which the flow was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The version of the flow for which information was retrieved.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The definition of the nodes and connections between nodes in the flow.
   *
   * @public
   */
  definition?: FlowDefinition | undefined;
}

/**
 * @public
 */
export interface UpdateFlowRequest {
  /**
   * A name for the flow.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description for the flow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service role with permissions to create and manage a flow. For more information, see [Create a service role for flows in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html) in the Amazon Bedrock User Guide.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to encrypt the flow.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * A definition of the nodes and the connections between the nodes in the flow.
   *
   * @public
   */
  definition?: FlowDefinition | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  flowIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowResponse {
  /**
   * The name of the flow.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the flow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see [Create a service role for flows in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html) in the Amazon Bedrock User Guide.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key that the flow was encrypted with.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the flow. When you submit this request, the status will be `NotPrepared`. If updating fails, the status becomes `Failed`.
   *
   * @public
   */
  status: FlowStatus | undefined;

  /**
   * The time at which the flow was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the flow was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The version of the flow. When you update a flow, the version updated is the `DRAFT` version.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A definition of the nodes and the connections between nodes in the flow.
   *
   * @public
   */
  definition?: FlowDefinition | undefined;
}

/**
 * @public
 */
export interface ValidateFlowDefinitionRequest {
  /**
   * The definition of a flow to validate.
   *
   * @public
   */
  definition: FlowDefinition | undefined;
}
