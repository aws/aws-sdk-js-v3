// smithy-typescript generated code
import { DocumentType as __DocumentType } from "@smithy/types";

import {
  AgentStatus,
  EmbeddingDataType,
  FlowNodeType,
  FlowStatus,
  KnowledgeBaseState,
  KnowledgeBaseStatus,
  KnowledgeBaseStorageType,
  KnowledgeBaseType,
  PromptTemplateType,
  SupplementalDataStorageLocationType,
} from "./enums";
import {
  type AgentKnowledgeBase,
  type AgentVersion,
  type KendraKnowledgeBaseConfiguration,
  type PromptInferenceConfiguration,
  type PromptTemplateConfiguration,
  type S3Location,
  type SqlKnowledgeBaseConfiguration,
  AgentFlowNodeConfiguration,
  AgentKnowledgeBaseSummary,
  AgentVersionSummary,
  AudioConfiguration,
  CollectorFlowNodeConfiguration,
  ConditionFlowNodeConfiguration,
  FlowConnection,
  FlowNodeInput,
  FlowNodeOutput,
  FlowValidation,
  InlineCodeFlowNodeConfiguration,
  InputFlowNodeConfiguration,
  IteratorFlowNodeConfiguration,
  KnowledgeBaseFlowNodeConfiguration,
  LambdaFunctionFlowNodeConfiguration,
  LexFlowNodeConfiguration,
  LoopControllerFlowNodeConfiguration,
  LoopInputFlowNodeConfiguration,
  OutputFlowNodeConfiguration,
  PromptFlowNodeConfiguration,
  RetrievalFlowNodeConfiguration,
  StorageFlowNodeConfiguration,
  VideoConfiguration,
} from "./models_0";

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
   * <p>The data type for the vectors when using a model to convert text into vector embeddings. The model must support the specified data type for vector embeddings. Floating-point (float32) is the default data type, and is supported by most models for vector embeddings. See <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-supported.html">Supported embeddings models</a> for information on the available models and their vector data types.</p>
   * @public
   */
  embeddingDataType?: EmbeddingDataType | undefined;

  /**
   * <p>Configuration settings for processing audio content in multimodal knowledge bases.</p>
   * @public
   */
  audio?: AudioConfiguration[] | undefined;

  /**
   * <p>Configuration settings for processing video content in multimodal knowledge bases.</p>
   * @public
   */
  video?: VideoConfiguration[] | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the model used to create vector embeddings for the knowledge base.</p>
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

  /**
   * <p>The name of the text search index in the MongoDB collection. This is required for using the hybrid search feature.</p>
   * @public
   */
  textIndexName?: string | undefined;
}

/**
 * <p>Contains the names of the fields to which to map information about the vector store.</p>
 * @public
 */
export interface NeptuneAnalyticsFieldMapping {
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
 * <p>Contains details about the storage configuration of the knowledge base in Amazon Neptune Analytics. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-neptune.html">Create a vector index in Amazon Neptune Analytics</a>.</p>
 * @public
 */
export interface NeptuneAnalyticsConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Neptune Analytics vector store.</p>
   * @public
   */
  graphArn: string | undefined;

  /**
   * <p>Contains the names of the fields to which to map information about the vector store.</p>
   * @public
   */
  fieldMapping: NeptuneAnalyticsFieldMapping | undefined;
}

/**
 * <p>Contains the names of the fields to which to map information about the vector store.</p>
 * @public
 */
export interface OpenSearchManagedClusterFieldMapping {
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
 * <p>Contains details about the Managed Cluster configuration of the knowledge base in Amazon OpenSearch Service. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-osm.html">Create a vector index in OpenSearch Managed Cluster</a>.</p>
 * @public
 */
export interface OpenSearchManagedClusterConfiguration {
  /**
   * <p>The endpoint URL the OpenSearch domain.</p>
   * @public
   */
  domainEndpoint: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the OpenSearch domain.</p>
   * @public
   */
  domainArn: string | undefined;

  /**
   * <p>The name of the vector store.</p>
   * @public
   */
  vectorIndexName: string | undefined;

  /**
   * <p>Contains the names of the fields to which to map information about the vector store.</p>
   * @public
   */
  fieldMapping: OpenSearchManagedClusterFieldMapping | undefined;
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

  /**
   * <p>Provide a name for the universal metadata field where Amazon Bedrock will store any custom metadata from your data source.</p>
   * @public
   */
  customMetadataField?: string | undefined;
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
 * <p>Contains the storage configuration of the knowledge base for S3 vectors.</p>
 * @public
 */
export interface S3VectorsConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket where vector embeddings are stored. This bucket contains the vector data used by the knowledge base.</p>
   * @public
   */
  vectorBucketArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the vector index used for the knowledge base. This ARN identifies the specific vector index resource within Amazon Bedrock.</p>
   * @public
   */
  indexArn?: string | undefined;

  /**
   * <p>The name of the vector index used for the knowledge base. This name identifies the vector index within the Amazon Bedrock service.</p>
   * @public
   */
  indexName?: string | undefined;
}

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
   * <p>Contains details about the storage configuration of the knowledge base in OpenSearch Managed Cluster. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-osm.html">Create a vector index in Amazon OpenSearch Service</a>.</p>
   * @public
   */
  opensearchManagedClusterConfiguration?: OpenSearchManagedClusterConfiguration | undefined;

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

  /**
   * <p>Contains details about the Neptune Analytics configuration of the knowledge base in Amazon Neptune. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-neptune.html">Create a vector index in Amazon Neptune Analytics.</a>.</p>
   * @public
   */
  neptuneAnalyticsConfiguration?: NeptuneAnalyticsConfiguration | undefined;

  /**
   * <p>The configuration settings for storing knowledge base data using S3 vectors. This includes vector index information and S3 bucket details for vector storage.</p>
   * @public
   */
  s3VectorsConfiguration?: S3VectorsConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
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
   * <p>The status of the knowledge base. The following statuses are possible:</p> <ul> <li> <p>CREATING – The knowledge base is being created.</p> </li> <li> <p>ACTIVE – The knowledge base is ready to be queried.</p> </li> <li> <p>DELETING – The knowledge base is being deleted.</p> </li> <li> <p>UPDATING – The knowledge base is being updated.</p> </li> <li> <p>FAILED – The knowledge base API operation failed.</p> </li> </ul>
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
export type PromptGenAiResource =
  | PromptGenAiResource.AgentMember
  | PromptGenAiResource.$UnknownMember;

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
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
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
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
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
 * <p>Contains information about a prompt in your Prompt management tool.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListPrompts.html#API_agent_ListPrompts_ResponseSyntax">ListPrompts response</a> </p> </li> </ul>
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
 * <p>The definition of the nodes and connections between nodes in the flow.</p>
 * @public
 */
export interface FlowDefinition {
  /**
   * <p>An array of node definitions in the flow.</p>
   * @public
   */
  nodes?: FlowNode[] | undefined;

  /**
   * <p>An array of connection definitions in the flow.</p>
   * @public
   */
  connections?: FlowConnection[] | undefined;
}

/**
 * <p>Contains configurations about a node in the flow.</p>
 * @public
 */
export interface FlowNode {
  /**
   * <p>A name for the node.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of node. This value must match the name of the key that you provide in the configuration you provide in the <code>FlowNodeConfiguration</code> field.</p>
   * @public
   */
  type: FlowNodeType | undefined;

  /**
   * <p>Contains configurations for the node.</p>
   * @public
   */
  configuration?: FlowNodeConfiguration | undefined;

  /**
   * <p>An array of objects, each of which contains information about an input into the node.</p>
   * @public
   */
  inputs?: FlowNodeInput[] | undefined;

  /**
   * <p>A list of objects, each of which contains information about an output from the node.</p>
   * @public
   */
  outputs?: FlowNodeOutput[] | undefined;
}

/**
 * <p>Contains configurations for a node in your flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html">Node types in a flow</a> in the Amazon Bedrock User Guide.</p>
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
   * <p>Contains configurations for an input flow node in your flow. The first node in the flow. <code>inputs</code> can't be specified for this node.</p>
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
   * <p>Contains configurations for an output flow node in your flow. The last node in the flow. <code>outputs</code> can't be specified for this node.</p>
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
   * <p>Contains configurations for a knowledge base node in your flow. Queries a knowledge base and returns the retrieved results or generated response.</p>
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
   * <p>Contains configurations for a condition node in your flow. Defines conditions that lead to different branches of the flow.</p>
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
   * <p>Contains configurations for a Lex node in your flow. Invokes an Amazon Lex bot to identify the intent of the input and return the intent as the output.</p>
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
   * <p>Contains configurations for a prompt node in your flow. Runs a prompt and generates the model response as the output. You can use a prompt from Prompt management or you can configure one in this node.</p>
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
   * <p>Contains configurations for a Lambda function node in your flow. Invokes an Lambda function.</p>
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
   * <p>Contains configurations for a storage node in your flow. Stores an input in an Amazon S3 location.</p>
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
   * <p>Contains configurations for an agent node in your flow. Invokes an alias of an agent and returns the response.</p>
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
   * <p>Contains configurations for a retrieval node in your flow. Retrieves data from an Amazon S3 location and returns it as the output.</p>
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
   * <p>Contains configurations for an iterator node in your flow. Takes an input that is an array and iteratively sends each item of the array as an output to the following node. The size of the array is also returned in the output.</p> <p>The output flow node at the end of the flow iteration will return a response for each member of the array. To return only one response, you can include a collector node downstream from the iterator node.</p>
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
   * <p>Contains configurations for a collector node in your flow. Collects an iteration of inputs and consolidates them into an array of outputs.</p>
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
   * <p>Contains configurations for an inline code node in your flow. Inline code nodes let you write and execute code directly within your flow, enabling data transformations, custom logic, and integrations without needing an external Lambda function.</p>
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
   * <p>Contains configurations for a DoWhile loop in your flow.</p>
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
   * <p>Contains input node configurations for a DoWhile loop in your flow.</p>
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
   * <p>Contains controller node configurations for a DoWhile loop in your flow.</p>
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
 * <p>Contains configurations for the nodes of a DoWhile loop in your flow.</p> <p>A DoWhile loop is made up of the following nodes:</p> <ul> <li> <p> <code>Loop</code> - The container node that holds the loop's flow definition. This node encompasses the entire loop structure.</p> </li> <li> <p> <code>LoopInput</code> - The entry point node for the loop. This node receives inputs from nodes outside the loop and from previous loop iterations.</p> </li> <li> <p>Body nodes - The processing nodes that execute within each loop iteration. These can be nodes for handling data in your flow, such as a prompt or Lambda function nodes. Some node types aren't supported inside a DoWhile loop body. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_LoopIncompatibleNodeTypeFlowValidationDetails.html">LoopIncompatibleNodeTypeFlowValidationDetails</a>.</p> </li> <li> <p> <code>LoopController</code> - The node that evaluates whether the loop should continue or exit based on a condition.</p> </li> </ul> <p>These nodes work together to create a loop that runs at least once and continues until a specified condition is met or a maximum number of iterations is reached.</p>
 * @public
 */
export interface LoopFlowNodeConfiguration {
  /**
   * <p>The definition of the DoWhile loop nodes and connections between nodes in the flow.</p>
   * @public
   */
  definition: FlowDefinition | undefined;
}

/**
 * @public
 */
export interface CreateFlowRequest {
  /**
   * <p>A name for the flow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the flow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to create and manage a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html">Create a service role for flows in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to encrypt the flow.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>A definition of the nodes and connections between nodes in the flow.</p>
   * @public
   */
  definition?: FlowDefinition | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Any tags that you want to attach to the flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html">Tagging resources in Amazon Bedrock</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFlowResponse {
  /**
   * <p>The name of the flow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html">Create a service role for flows in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that you encrypted the flow with.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the flow. When you submit this request, the status will be <code>NotPrepared</code>. If creation fails, the status becomes <code>Failed</code>.</p>
   * @public
   */
  status: FlowStatus | undefined;

  /**
   * <p>The time at which the flow was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the flow was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The version of the flow. When you create a flow, the version created is the <code>DRAFT</code> version.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A definition of the nodes and connections between nodes in the flow.</p>
   * @public
   */
  definition?: FlowDefinition | undefined;
}

/**
 * @public
 */
export interface CreateFlowVersionResponse {
  /**
   * <p>The name of the version.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the version.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html">Create a service role for flows in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The KMS key that the flow is encrypted with.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the flow.</p>
   * @public
   */
  status: FlowStatus | undefined;

  /**
   * <p>The time at which the flow was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The version of the flow that was created. Versions are numbered incrementally, starting from 1.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A definition of the nodes and connections in the flow.</p>
   * @public
   */
  definition?: FlowDefinition | undefined;
}

/**
 * @public
 */
export interface GetFlowResponse {
  /**
   * <p>The name of the flow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html">Create a service row for flows</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that the flow is encrypted with.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the flow. The following statuses are possible:</p> <ul> <li> <p>NotPrepared – The flow has been created or updated, but hasn't been prepared. If you just created the flow, you can't test it. If you updated the flow, the <code>DRAFT</code> version won't contain the latest changes for testing. Send a <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PrepareFlow.html">PrepareFlow</a> request to package the latest changes into the <code>DRAFT</code> version.</p> </li> <li> <p>Preparing – The flow is being prepared so that the <code>DRAFT</code> version contains the latest changes for testing.</p> </li> <li> <p>Prepared – The flow is prepared and the <code>DRAFT</code> version contains the latest changes for testing.</p> </li> <li> <p>Failed – The last API operation that you invoked on the flow failed. Send a <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlow.html">GetFlow</a> request and check the error message in the <code>validations</code> field.</p> </li> </ul>
   * @public
   */
  status: FlowStatus | undefined;

  /**
   * <p>The time at which the flow was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the flow was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The version of the flow for which information was retrieved.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The definition of the nodes and connections between the nodes in the flow.</p>
   * @public
   */
  definition?: FlowDefinition | undefined;

  /**
   * <p>A list of validation error messages related to the last failed operation on the flow.</p>
   * @public
   */
  validations?: FlowValidation[] | undefined;
}

/**
 * @public
 */
export interface GetFlowVersionResponse {
  /**
   * <p>The name of the version.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html">Create a service role for flows in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that the version of the flow is encrypted with.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the flow.</p>
   * @public
   */
  status: FlowStatus | undefined;

  /**
   * <p>The time at which the flow was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The version of the flow for which information was retrieved.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The definition of the nodes and connections between nodes in the flow.</p>
   * @public
   */
  definition?: FlowDefinition | undefined;
}

/**
 * @public
 */
export interface UpdateFlowRequest {
  /**
   * <p>A name for the flow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the flow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to create and manage a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html">Create a service role for flows in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to encrypt the flow.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>A definition of the nodes and the connections between the nodes in the flow.</p>
   * @public
   */
  definition?: FlowDefinition | undefined;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowResponse {
  /**
   * <p>The name of the flow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html">Create a service role for flows in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that the flow was encrypted with.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the flow. When you submit this request, the status will be <code>NotPrepared</code>. If updating fails, the status becomes <code>Failed</code>.</p>
   * @public
   */
  status: FlowStatus | undefined;

  /**
   * <p>The time at which the flow was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the flow was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The version of the flow. When you update a flow, the version updated is the <code>DRAFT</code> version.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A definition of the nodes and the connections between nodes in the flow.</p>
   * @public
   */
  definition?: FlowDefinition | undefined;
}

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
