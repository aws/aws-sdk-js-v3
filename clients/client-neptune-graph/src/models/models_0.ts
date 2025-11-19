// smithy-typescript generated code
import { DocumentType as __DocumentType, StreamingBlobTypes } from "@smithy/types";

import {
  BlankNodeHandling,
  ExplainMode,
  ExportFormat,
  ExportTaskStatus,
  Format,
  GraphStatus,
  GraphSummaryMode,
  ImportTaskStatus,
  MultiValueHandlingType,
  ParquetType,
  PlanCacheType,
  PrivateGraphEndpointStatus,
  QueryLanguage,
  QueryState,
  QueryStateInput,
  SnapshotStatus,
} from "./enums";

/**
 * @public
 */
export interface CancelQueryInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the query to cancel.</p>
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface ExecuteQueryInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * <p>The query string to be executed.</p>
   * @public
   */
  queryString: string | undefined;

  /**
   * <p>The query language the query is written in. Currently only openCypher is supported.</p>
   * @public
   */
  language: QueryLanguage | undefined;

  /**
   * <p>The data parameters the query can use in JSON format. For example: \{"name": "john", "age": 20\}. (optional) </p>
   * @public
   */
  parameters?: Record<string, __DocumentType> | undefined;

  /**
   * <p>Query plan cache is a feature that saves the query plan and reuses it on successive executions of the same query. This reduces query latency, and works for both <code>READ</code> and <code>UPDATE</code> queries. The plan cache is an LRU cache with a 5 minute TTL and a capacity of 1000.</p>
   * @public
   */
  planCache?: PlanCacheType | undefined;

  /**
   * <p>The explain mode parameter returns a query explain instead of the actual query results. A query explain can be used to gather insights about the query execution such as planning decisions, time spent on each operator, solutions flowing etc.</p>
   * @public
   */
  explainMode?: ExplainMode | undefined;

  /**
   * <p>Specifies the query timeout duration, in milliseconds. (optional)</p>
   * @public
   */
  queryTimeoutMilliseconds?: number | undefined;
}

/**
 * @public
 */
export interface ExecuteQueryOutput {
  /**
   * <p>The query results.</p>
   * @public
   */
  payload: StreamingBlobTypes | undefined;
}

/**
 * @public
 */
export interface GetGraphSummaryInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * <p>The summary mode can take one of two values: <code>basic</code> (the default), and <code>detailed</code>.</p>
   * @public
   */
  mode?: GraphSummaryMode | undefined;
}

/**
 * <p>Contains information about an edge in a Neptune Analytics graph.</p>
 * @public
 */
export interface EdgeStructure {
  /**
   * <p>The number of instances of the edge in the graph.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>A list of the properties associated with the edge.</p>
   * @public
   */
  edgeProperties?: string[] | undefined;
}

/**
 * <p>Information about a node.</p>
 * @public
 */
export interface NodeStructure {
  /**
   * <p>The number of instances of this node.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>Properties associated with this node.</p>
   * @public
   */
  nodeProperties?: string[] | undefined;

  /**
   * <p>The outgoing edge labels associated with this node.</p>
   * @public
   */
  distinctOutgoingEdgeLabels?: string[] | undefined;
}

/**
 * <p>Summary information about the graph.</p>
 * @public
 */
export interface GraphDataSummary {
  /**
   * <p>The number of nodes in the graph.</p>
   * @public
   */
  numNodes?: number | undefined;

  /**
   * <p>The number of edges in the graph.</p>
   * @public
   */
  numEdges?: number | undefined;

  /**
   * <p>The number of distinct node labels in the graph.</p>
   * @public
   */
  numNodeLabels?: number | undefined;

  /**
   * <p>The number of unique edge labels in the graph.</p>
   * @public
   */
  numEdgeLabels?: number | undefined;

  /**
   * <p>A list of distinct node labels in the graph.</p>
   * @public
   */
  nodeLabels?: string[] | undefined;

  /**
   * <p>A list of the edge labels in the graph.</p>
   * @public
   */
  edgeLabels?: string[] | undefined;

  /**
   * <p>The number of distinct node properties in the graph.</p>
   * @public
   */
  numNodeProperties?: number | undefined;

  /**
   * <p>The number of edge properties in the graph.</p>
   * @public
   */
  numEdgeProperties?: number | undefined;

  /**
   * <p>A list of the distinct node properties in the graph, along with the count of nodes where each property is used.</p>
   * @public
   */
  nodeProperties?: Record<string, number>[] | undefined;

  /**
   * <p>A list of the distinct edge properties in the graph, along with the count of edges where each property is used.</p>
   * @public
   */
  edgeProperties?: Record<string, number>[] | undefined;

  /**
   * <p>The total number of usages of all node properties.</p>
   * @public
   */
  totalNodePropertyValues?: number | undefined;

  /**
   * <p>The total number of usages of all edge properties.</p>
   * @public
   */
  totalEdgePropertyValues?: number | undefined;

  /**
   * <p>This field is only present when the requested mode is DETAILED. It contains a list of node structures.</p>
   * @public
   */
  nodeStructures?: NodeStructure[] | undefined;

  /**
   * <p>This field is only present when the requested mode is DETAILED. It contains a list of edge structures.</p>
   * @public
   */
  edgeStructures?: EdgeStructure[] | undefined;
}

/**
 * @public
 */
export interface GetGraphSummaryOutput {
  /**
   * <p>Display the version of this tool.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The timestamp, in ISO 8601 format, of the time at which Neptune Analytics last computed statistics.</p>
   * @public
   */
  lastStatisticsComputationTime?: Date | undefined;

  /**
   * <p>The graph summary.</p>
   * @public
   */
  graphSummary?: GraphDataSummary | undefined;
}

/**
 * @public
 */
export interface GetQueryInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * <p>The ID of the query in question.</p>
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface GetQueryOutput {
  /**
   * <p>The ID of the query in question.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The query in question.</p>
   * @public
   */
  queryString?: string | undefined;

  /**
   * <p>Indicates how long the query waited, in milliseconds.</p>
   * @public
   */
  waited?: number | undefined;

  /**
   * <p>The number of milliseconds the query has been running.</p>
   * @public
   */
  elapsed?: number | undefined;

  /**
   * <p>State of the query.</p>
   * @public
   */
  state?: QueryState | undefined;
}

/**
 * <p>Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535</p>
 * @public
 */
export interface VectorSearchConfiguration {
  /**
   * <p>The number of dimensions.</p>
   * @public
   */
  dimension: number | undefined;
}

/**
 * @public
 */
export interface CreateGraphInput {
  /**
   * <p>A name for the new Neptune Analytics graph to be created.</p> <p>The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed.</p>
   * @public
   */
  graphName: string | undefined;

  /**
   * <p>Adds metadata tags to the new graph. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated. (<code>true</code> to enable, or <code>false</code> to disable.</p>
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * <p>Specifies a KMS key to use to encrypt data in the new graph.</p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * <p>Specifies the number of dimensions for vector embeddings that will be loaded into the graph. The value is specified as <code>dimension=</code>value. Max = 65,535</p>
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * <p>The number of replicas in other AZs. Min =0, Max = 2, Default = 1.</p> <important> <p> Additional charges equivalent to the m-NCUs selected for the graph apply for each replica. </p> </important>
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * <p>Indicates whether or not to enable deletion protection on the graph. The graph can’t be deleted when deletion protection is enabled. (<code>true</code> or <code>false</code>).</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Min = 16</p>
   * @public
   */
  provisionedMemory: number | undefined;
}

/**
 * @public
 */
export interface CreateGraphOutput {
  /**
   * <p>The ID of the graph.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The graph name. For example: <code>my-graph-1</code>.</p> <p>The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the graph.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The current status of the graph.</p>
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * <p>The reason the status was given.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The time when the graph was created.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.</p> <p>Min = 16</p>
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * <p>The graph endpoint.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated.</p> <note> <p>If enabling public connectivity for the first time, there will be a delay while it is enabled.</p> </note>
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * <p>The vector-search configuration for the graph, which specifies the vector dimension to use in the vector index, if any.</p>
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * <p>The number of replicas in other AZs.</p> <p>Default: If not specified, the default value is 1.</p>
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * <p>Specifies the KMS key used to encrypt data in the new graph.</p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * <p>The ID of the source graph.</p>
   * @public
   */
  sourceSnapshotId?: string | undefined;

  /**
   * <p>A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The build number of the graph software.</p>
   * @public
   */
  buildNumber?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGraphInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * <p>Determines whether a final graph snapshot is created before the graph is deleted. If <code>true</code> is specified, no graph snapshot is created. If <code>false</code> is specified, a graph snapshot is created before the graph is deleted.</p>
   * @public
   */
  skipSnapshot: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteGraphOutput {
  /**
   * <p>The unique identifier of the graph.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the graph.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN associated with the graph.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the graph.</p>
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * <p>The reason for the status of the graph.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The time at which the graph was created.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.</p>
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * <p>The graph endpoint.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>If <code>true</code>, the graph has a public endpoint, otherwise not.</p>
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * <p>Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535</p>
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * <p>The number of replicas for the graph.</p>
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt and decrypt graph data.</p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * <p>The ID of the snapshot from which the graph was created, if the graph was recovered from a snapshot.</p>
   * @public
   */
  sourceSnapshotId?: string | undefined;

  /**
   * <p>If <code>true</code>, deletion protection was enabled for the graph.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The build number associated with the graph.</p>
   * @public
   */
  buildNumber?: string | undefined;
}

/**
 * @public
 */
export interface GetGraphInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetGraphOutput {
  /**
   * <p>The unique identifier of the graph.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the graph.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN associated with the graph.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the graph.</p>
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * <p>The reason that the graph has this status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The time at which the graph was created.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.</p>
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * <p>The graph endpoint.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>If <code>true</code>, the graph has a public endpoint, otherwise not.</p>
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * <p>Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535</p>
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * <p>The number of replicas for the graph.</p>
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt and decrypt graph data.</p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * <p>The ID of the snapshot from which the graph was created, if it was created from a snapshot.</p>
   * @public
   */
  sourceSnapshotId?: string | undefined;

  /**
   * <p>If <code>true</code>, deletion protection is enabled for the graph.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The build number of the graph.</p>
   * @public
   */
  buildNumber?: string | undefined;
}

/**
 * @public
 */
export interface ListGraphsInput {
  /**
   * <p>Pagination token used to paginate output.</p> <p>When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The total number of records to return in the command's output.</p> <p>If the total number of records available is more than the value specified, <code>nextToken</code> is provided in the command's output. To resume pagination, provide the <code>nextToken</code> output value in the <code>nextToken</code> argument of a subsequent command. Do not use the <code>nextToken</code> response element directly outside of the Amazon CLI.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary details about a graph.</p>
 * @public
 */
export interface GraphSummary {
  /**
   * <p>The unique identifier of the graph.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the graph.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN associated with the graph.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the graph.</p>
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * <p>The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.</p>
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * <p>If <code>true</code>, the graph has a public endpoint, otherwise not.</p>
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * <p>The graph endpoint.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>The number of replicas for the graph.</p>
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt and decrypt graph data.</p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * <p>If <code>true</code>, deletion protection is enabled for the graph.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface ListGraphsOutput {
  /**
   * <p>A list of the graphs.</p>
   * @public
   */
  graphs: GraphSummary[] | undefined;

  /**
   * <p>Pagination token used to paginate output.</p> <p>When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ResetGraphInput {
  /**
   * <p>ID of the graph to reset.</p>
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * <p>Determines whether a final graph snapshot is created before the graph data is deleted. If set to <code>true</code>, no graph snapshot is created. If set to <code>false</code>, a graph snapshot is created before the data is deleted.</p>
   * @public
   */
  skipSnapshot: boolean | undefined;
}

/**
 * @public
 */
export interface ResetGraphOutput {
  /**
   * <p>The unique identifier of the graph.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the graph.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN associated with the graph.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the graph.</p>
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * <p>The reason that the graph has this status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The time at which the graph was created.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.</p>
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * <p>The graph endpoint.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>If <code>true</code>, the graph has a public endpoint, otherwise not.</p>
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * <p>Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535</p>
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * <p>The number of replicas for the graph.</p>
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt and decrypt graph data.</p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * <p>The ID of the snapshot from which the graph was created, if any.</p>
   * @public
   */
  sourceSnapshotId?: string | undefined;

  /**
   * <p>If <code>true</code>, deletion protection is enabled for the graph.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The build number of the graph.</p>
   * @public
   */
  buildNumber?: string | undefined;
}

/**
 * @public
 */
export interface RestoreGraphFromSnapshotInput {
  /**
   * <p>The ID of the snapshot in question.</p>
   * @public
   */
  snapshotIdentifier: string | undefined;

  /**
   * <p>A name for the new Neptune Analytics graph to be created from the snapshot.</p> <p>The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed.</p>
   * @public
   */
  graphName: string | undefined;

  /**
   * <p>The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.</p> <p>Min = 16</p>
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * <p>A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>Adds metadata tags to the snapshot. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The number of replicas in other AZs. Min =0, Max = 2, Default =1</p> <important> <p> Additional charges equivalent to the m-NCUs selected for the graph apply for each replica. </p> </important>
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * <p>Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated. (<code>true</code> to enable, or <code>false</code> to disable).</p>
   * @public
   */
  publicConnectivity?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreGraphFromSnapshotOutput {
  /**
   * <p>The unique identifier of the graph.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the graph.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN associated with the graph.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the graph.</p>
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * <p>The reason that the graph has this status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The time at which the graph was created.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.</p>
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * <p>The graph endpoint.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>If <code>true</code>, the graph has a public endpoint, otherwise not.</p>
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * <p>Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535</p>
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * <p>The number of replicas for the graph.</p>
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt and decrypt graph data.</p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * <p>The ID of the snapshot from which the graph was created, if any.</p>
   * @public
   */
  sourceSnapshotId?: string | undefined;

  /**
   * <p>If <code>true</code>, deletion protection is enabled for the graph.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The build number of the graph.</p>
   * @public
   */
  buildNumber?: string | undefined;
}

/**
 * @public
 */
export interface StartGraphInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartGraphOutput {
  /**
   * <p>The unique identifier of the graph.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the graph.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN associated with the graph.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the graph.</p>
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * <p>The reason that the graph has this status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The time at which the graph was created.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.</p>
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * <p>The graph endpoint.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>If <code>true</code>, the graph has a public endpoint, otherwise not.</p>
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * <p>Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535</p>
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * <p>The number of replicas for the graph.</p>
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt and decrypt graph data.</p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * <p>The ID of the snapshot from which the graph was created, if it was created from a snapshot.</p>
   * @public
   */
  sourceSnapshotId?: string | undefined;

  /**
   * <p>If <code>true</code>, deletion protection is enabled for the graph.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The build number of the graph.</p>
   * @public
   */
  buildNumber?: string | undefined;
}

/**
 * @public
 */
export interface StopGraphInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopGraphOutput {
  /**
   * <p>The unique identifier of the graph.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the graph.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN associated with the graph.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the graph.</p>
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * <p>The reason that the graph has this status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The time at which the graph was created.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.</p>
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * <p>The graph endpoint.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>If true, the graph has a public endpoint, otherwise not.</p>
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * <p>Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535</p>
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * <p>The number of replicas for the graph.</p>
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt and decrypt graph data.</p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * <p>The ID of the snapshot from which the graph was created, if it was created from a snapshot.</p>
   * @public
   */
  sourceSnapshotId?: string | undefined;

  /**
   * <p>If <code>true</code>, deletion protection is enabled for the graph.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The build number of the graph.</p>
   * @public
   */
  buildNumber?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGraphInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * <p>Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated. (<code>true</code> to enable, or <code>false</code> to disable.</p>
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * <p>The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.</p> <p>Min = 16</p>
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * <p>A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateGraphOutput {
  /**
   * <p>The unique identifier of the graph.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the graph.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN associated with the graph.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the graph.</p>
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * <p>The reason that the graph has this status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The time at which the graph was created.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.</p>
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * <p>The graph endpoint.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>If <code>true</code>, the graph has a public endpoint, otherwise not.</p>
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * <p>Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535</p>
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * <p>The number of replicas for the graph.</p>
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt and decrypt graph data.</p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * <p>The ID of the snapshot from which the graph was created, if any.</p>
   * @public
   */
  sourceSnapshotId?: string | undefined;

  /**
   * <p>If <code>true</code>, deletion protection is enabled for the graph.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The build number of the graph.</p>
   * @public
   */
  buildNumber?: string | undefined;
}

/**
 * @public
 */
export interface ListQueriesInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to be fetched by the API.</p>
   * @public
   */
  maxResults: number | undefined;

  /**
   * <p>Filtered list of queries based on state.</p>
   * @public
   */
  state?: QueryStateInput | undefined;
}

/**
 * <p>Details of the query listed.</p>
 * @public
 */
export interface QuerySummary {
  /**
   * <p>A string representation of the id of the query.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The actual query text. The <code>queryString</code> may be truncated if the actual query string is too long.</p>
   * @public
   */
  queryString?: string | undefined;

  /**
   * <p>The amount of time, in milliseconds, the query has waited in the queue before being picked up by a worker thread.</p>
   * @public
   */
  waited?: number | undefined;

  /**
   * <p>The running time of the query, in milliseconds.</p>
   * @public
   */
  elapsed?: number | undefined;

  /**
   * <p>State of the query.</p>
   * @public
   */
  state?: QueryState | undefined;
}

/**
 * @public
 */
export interface ListQueriesOutput {
  /**
   * <p>A list of current openCypher queries.</p>
   * @public
   */
  queries: QuerySummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The list of metadata tags associated with the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePrivateGraphEndpointInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * <p> The VPC in which the private graph endpoint needs to be created.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>Subnets in which private graph endpoint ENIs are created.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>Security groups to be attached to the private graph endpoint..</p>
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreatePrivateGraphEndpointOutput {
  /**
   * <p>VPC in which the private graph endpoint is created.</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>Subnets in which the private graph endpoint ENIs are created. </p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>Status of the private graph endpoint.</p>
   * @public
   */
  status: PrivateGraphEndpointStatus | undefined;

  /**
   * <p>Endpoint ID of the prviate grpah endpoint.</p>
   * @public
   */
  vpcEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface DeletePrivateGraphEndpointInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * <p>The ID of the VPC where the private endpoint is located.</p>
   * @public
   */
  vpcId: string | undefined;
}

/**
 * @public
 */
export interface DeletePrivateGraphEndpointOutput {
  /**
   * <p>The ID of the VPC where the private endpoint was deleted.</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>The subnet IDs involved.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The status of the delete operation.</p>
   * @public
   */
  status: PrivateGraphEndpointStatus | undefined;

  /**
   * <p>The ID of the VPC endpoint that was deleted.</p>
   * @public
   */
  vpcEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface GetPrivateGraphEndpointInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * <p>The ID of the VPC where the private endpoint is located.</p>
   * @public
   */
  vpcId: string | undefined;
}

/**
 * @public
 */
export interface GetPrivateGraphEndpointOutput {
  /**
   * <p>The ID of the VPC where the private endpoint is located.</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>The subnet IDs involved.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The current status of the private endpoint.</p>
   * @public
   */
  status: PrivateGraphEndpointStatus | undefined;

  /**
   * <p>The ID of the private endpoint.</p>
   * @public
   */
  vpcEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface ListPrivateGraphEndpointsInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * <p>Pagination token used to paginate output.</p> <p>When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The total number of records to return in the command's output.</p> <p>If the total number of records available is more than the value specified, <code>nextToken</code> is provided in the command's output. To resume pagination, provide the <code>nextToken</code> output value in the <code>nextToken</code> argument of a subsequent command. Do not use the <code>nextToken</code> response element directly outside of the Amazon CLI.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Details about a private graph endpoint.</p>
 * @public
 */
export interface PrivateGraphEndpointSummary {
  /**
   * <p>The ID of the VPC in which the private graph endpoint is located.</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>The subnet IDs associated with the private graph endpoint.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The status of the private graph endpoint.</p>
   * @public
   */
  status: PrivateGraphEndpointStatus | undefined;

  /**
   * <p>The ID of the VPC endpoint.</p>
   * @public
   */
  vpcEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface ListPrivateGraphEndpointsOutput {
  /**
   * <p>A list of private endpoints for the specified Neptune Analytics graph.</p>
   * @public
   */
  privateGraphEndpoints: PrivateGraphEndpointSummary[] | undefined;

  /**
   * <p>Pagination token used to paginate output.</p> <p>When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGraphSnapshotInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * <p>The snapshot name. For example: <code>my-snapshot-1</code>.</p> <p>The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed.</p>
   * @public
   */
  snapshotName: string | undefined;

  /**
   * <p>Adds metadata tags to the new graph. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateGraphSnapshotOutput {
  /**
   * <p>The ID of the snapshot created.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the snapshot created.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the snapshot created.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Id of the Neptune Analytics graph from which the snapshot is created.</p>
   * @public
   */
  sourceGraphId?: string | undefined;

  /**
   * <p>The snapshot creation time</p>
   * @public
   */
  snapshotCreateTime?: Date | undefined;

  /**
   * <p>The current state of the snapshot.</p>
   * @public
   */
  status?: SnapshotStatus | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt and decrypt graph data.</p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGraphSnapshotInput {
  /**
   * <p>ID of the graph snapshot to be deleted.</p>
   * @public
   */
  snapshotIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGraphSnapshotOutput {
  /**
   * <p>The unique identifier of the graph snapshot.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The snapshot name. For example: <code>my-snapshot-1</code>.</p> <p>The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the graph snapshot.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The graph identifier for the graph from which the snapshot was created.</p>
   * @public
   */
  sourceGraphId?: string | undefined;

  /**
   * <p>The time when the snapshot was created.</p>
   * @public
   */
  snapshotCreateTime?: Date | undefined;

  /**
   * <p>The status of the graph snapshot.</p>
   * @public
   */
  status?: SnapshotStatus | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt and decrypt the snapshot.</p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface GetGraphSnapshotInput {
  /**
   * <p>The ID of the snapshot to retrieve.</p>
   * @public
   */
  snapshotIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetGraphSnapshotOutput {
  /**
   * <p>The unique identifier of the graph snapshot.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The snapshot name. For example: <code>my-snapshot-1</code>.</p> <p>The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the graph snapshot.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The graph identifier for the graph for which a snapshot is to be created.</p>
   * @public
   */
  sourceGraphId?: string | undefined;

  /**
   * <p>The time when the snapshot was created.</p>
   * @public
   */
  snapshotCreateTime?: Date | undefined;

  /**
   * <p>The status of the graph snapshot.</p>
   * @public
   */
  status?: SnapshotStatus | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt and decrypt the snapshot.</p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface ListGraphSnapshotsInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier?: string | undefined;

  /**
   * <p>Pagination token used to paginate output.</p> <p>When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The total number of records to return in the command's output.</p> <p>If the total number of records available is more than the value specified, <code>nextToken</code> is provided in the command's output. To resume pagination, provide the <code>nextToken</code> output value in the <code>nextToken</code> argument of a subsequent command. Do not use the <code>nextToken</code> response element directly outside of the Amazon CLI.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Details about a graph snapshot.</p>
 * @public
 */
export interface GraphSnapshotSummary {
  /**
   * <p>The unique identifier of the graph snapshot.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The snapshot name. For example: <code>my-snapshot-1</code>.</p> <p>The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the graph snapshot.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The graph identifier for the graph for which a snapshot is to be created.</p>
   * @public
   */
  sourceGraphId?: string | undefined;

  /**
   * <p>The time when the snapshot was created.</p>
   * @public
   */
  snapshotCreateTime?: Date | undefined;

  /**
   * <p>The status of the graph snapshot.</p>
   * @public
   */
  status?: SnapshotStatus | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt and decrypt the snapshot.</p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface ListGraphSnapshotsOutput {
  /**
   * <p>The requested list of snapshots.</p>
   * @public
   */
  graphSnapshots: GraphSnapshotSummary[] | undefined;

  /**
   * <p>Pagination token used to paginate output.</p> <p>When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>ARN of the resource for which tags need to be added.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to be assigned to the Neptune Analytics resource.</p> <p>The tags are metadata that are specified as a list of key-value pairs:</p> <p> <b>Key</b> (string)   –   A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length. It can't be prefixed with <code>aws:</code> and can only contain the set of Unicode characters specified by this Java regular expression: <code>"^([\p\{L\}\p\{Z\}\p\{N\}_.:/=+\-]*)$")</code>.</p> <p> <b>Value</b> (string)   –   A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length. It can't be prefixed with <code>aws:</code> and can only contain the set of Unicode characters specified by this Java regular expression: <code>"^([\p\{L\}\p\{Z\}\p\{N\}_.:/=+\-]*)$")</code>.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface CancelExportTaskInput {
  /**
   * <p>The unique identifier of the export task.</p>
   * @public
   */
  taskIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CancelExportTaskOutput {
  /**
   * <p>The source graph identifier of the cancelled export task.</p>
   * @public
   */
  graphId: string | undefined;

  /**
   * <p>The ARN of the IAM role that will allow the exporting of data to the destination.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The unique identifier of the export task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The current status of the export task. The status is <code>CANCELLING</code> when the export task is cancelled.</p>
   * @public
   */
  status: ExportTaskStatus | undefined;

  /**
   * <p>The format of the cancelled export task.</p>
   * @public
   */
  format: ExportFormat | undefined;

  /**
   * <p>The Amazon S3 URI of the cancelled export task where data will be exported to.</p>
   * @public
   */
  destination: string | undefined;

  /**
   * <p>The KMS key identifier of the cancelled export task.</p>
   * @public
   */
  kmsKeyIdentifier: string | undefined;

  /**
   * <p>The parquet type of the cancelled export task.</p>
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * <p>The reason that the export task has this status value.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface CancelImportTaskInput {
  /**
   * <p>The unique identifier of the import task.</p>
   * @public
   */
  taskIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CancelImportTaskOutput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphId?: string | undefined;

  /**
   * <p>The unique identifier of the import task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>Specifies the format of S3 data to be imported. Valid values are <code>CSV</code>, which identifies the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html">Gremlin CSV format</a> or <code>OPENCYPHER</code>, which identies the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html">openCypher load format</a>.</p>
   * @public
   */
  format?: Format | undefined;

  /**
   * <p>The parquet type of the cancelled import task.</p>
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * <p>The ARN of the IAM role that will allow access to the data that is to be imported.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Current status of the task. Status is CANCELLING when the import task is cancelled.</p>
   * @public
   */
  status: ImportTaskStatus | undefined;
}

/**
 * <p>Options for how to import Neptune data.</p>
 * @public
 */
export interface NeptuneImportOptions {
  /**
   * <p>The path to an S3 bucket from which to import data.</p>
   * @public
   */
  s3ExportPath: string | undefined;

  /**
   * <p>The KMS key to use to encrypt data in the S3 bucket where the graph data is exported</p>
   * @public
   */
  s3ExportKmsKeyId: string | undefined;

  /**
   * <p>Neptune Analytics supports label-less vertices and no labels are assigned unless one is explicitly provided. Neptune assigns default labels when none is explicitly provided. When importing the data into Neptune Analytics, the default vertex labels can be omitted by setting <i>preserveDefaultVertexLabels</i> to false. Note that if the vertex only has default labels, and has no other properties or edges, then the vertex will effectively not get imported into Neptune Analytics when preserveDefaultVertexLabels is set to false.</p>
   * @public
   */
  preserveDefaultVertexLabels?: boolean | undefined;

  /**
   * <p>Neptune Analytics currently does not support user defined edge ids. The edge ids are not imported by default. They are imported if <i>preserveEdgeIds</i> is set to true, and ids are stored as properties on the relationships with the property name <i>neptuneEdgeId</i>.</p>
   * @public
   */
  preserveEdgeIds?: boolean | undefined;
}

/**
 * <p>Options for how to perform an import.</p>
 * @public
 */
export type ImportOptions = ImportOptions.NeptuneMember | ImportOptions.$UnknownMember;

/**
 * @public
 */
export namespace ImportOptions {
  /**
   * <p>Options for importing data from a Neptune database.</p>
   * @public
   */
  export interface NeptuneMember {
    neptune: NeptuneImportOptions;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    neptune?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    neptune: (value: NeptuneImportOptions) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateGraphUsingImportTaskInput {
  /**
   * <p>A name for the new Neptune Analytics graph to be created.</p> <p>The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed.</p>
   * @public
   */
  graphName: string | undefined;

  /**
   * <p>Adds metadata tags to the new graph. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated. (<code>true</code> to enable, or <code>false</code> to disable).</p>
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * <p>Specifies a KMS key to use to encrypt data imported into the new graph.</p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * <p>Specifies the number of dimensions for vector embeddings that will be loaded into the graph. The value is specified as <code>dimension=</code>value. Max = 65,535 </p>
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * <p>The number of replicas in other AZs to provision on the new graph after import. Default = 0, Min = 0, Max = 2.</p> <important> <p> Additional charges equivalent to the m-NCUs selected for the graph apply for each replica. </p> </important>
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * <p>Indicates whether or not to enable deletion protection on the graph. The graph can’t be deleted when deletion protection is enabled. (<code>true</code> or <code>false</code>).</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>Contains options for controlling the import process. For example, if the <code>failOnError</code> key is set to <code>false</code>, the import skips problem data and attempts to continue (whereas if set to <code>true</code>, the default, or if omitted, the import operation halts immediately when an error is encountered.</p>
   * @public
   */
  importOptions?: ImportOptions | undefined;

  /**
   * <p>The maximum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 1024, or the approved upper limit for your account.</p> <p> If both the minimum and maximum values are specified, the final <code>provisioned-memory</code> will be chosen per the actual size of your imported data. If neither value is specified, 128 m-NCUs are used.</p>
   * @public
   */
  maxProvisionedMemory?: number | undefined;

  /**
   * <p>The minimum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 16</p>
   * @public
   */
  minProvisionedMemory?: number | undefined;

  /**
   * <p>If set to <code>true</code>, the task halts when an import error is encountered. If set to <code>false</code>, the task skips the data that caused the error and continues if possible.</p>
   * @public
   */
  failOnError?: boolean | undefined;

  /**
   * <p>A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>Specifies the format of S3 data to be imported. Valid values are <code>CSV</code>, which identifies the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html">Gremlin CSV format</a>, <code>OPEN_CYPHER</code>, which identifies the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html">openCypher load format</a>, or <code>ntriples</code>, which identifies the <a href="https://docs.aws.amazon.com/neptune-analytics/latest/userguide/using-rdf-data.html">RDF n-triples</a> format.</p>
   * @public
   */
  format?: Format | undefined;

  /**
   * <p>The parquet type of the import task.</p>
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * <p>The method to handle blank nodes in the dataset. Currently, only <code>convertToIri</code> is supported, meaning blank nodes are converted to unique IRIs at load time. Must be provided when format is <code>ntriples</code>. For more information, see <a href="https://docs.aws.amazon.com/neptune-analytics/latest/userguide/using-rdf-data.html#rdf-handling">Handling RDF values</a>.</p>
   * @public
   */
  blankNodeHandling?: BlankNodeHandling | undefined;

  /**
   * <p>The ARN of the IAM role that will allow access to the data that is to be imported.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateGraphUsingImportTaskOutput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphId?: string | undefined;

  /**
   * <p>The unique identifier of the import task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>Specifies the format of S3 data to be imported. Valid values are <code>CSV</code>, which identifies the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html">Gremlin CSV format</a>, <code>OPENCYPHER</code>, which identifies the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html">openCypher load format</a>, or <code>ntriples</code>, which identifies the <a href="https://docs.aws.amazon.com/neptune-analytics/latest/userguide/using-rdf-data.html">RDF n-triples</a> format.</p>
   * @public
   */
  format?: Format | undefined;

  /**
   * <p>The parquet type of the import task.</p>
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * <p>The ARN of the IAM role that will allow access to the data that is to be imported.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The status of the import task.</p>
   * @public
   */
  status: ImportTaskStatus | undefined;

  /**
   * <p>Contains options for controlling the import process. For example, if the <code>failOnError</code> key is set to <code>false</code>, the import skips problem data and attempts to continue (whereas if set to <code>true</code>, the default, or if omitted, the import operation halts immediately when an error is encountered.</p>
   * @public
   */
  importOptions?: ImportOptions | undefined;
}

/**
 * @public
 */
export interface GetExportTaskInput {
  /**
   * <p>The unique identifier of the export task.</p>
   * @public
   */
  taskIdentifier: string | undefined;
}

/**
 * <p>A structure representing a property's attributes. It is a map object of outputType, sourcePropertyName and multiValueHandling.</p>
 * @public
 */
export interface ExportFilterPropertyAttributes {
  /**
   * <p>Specifies the data type to use for the property in the exported data (e.g. "String", "Int", "Float"). If a type is not provided, the export process will determine the type. If a given property is present as multiple types (e.g. one vertex has "height" stored as a double, and another edge has it stored as a string), the type will be of Any type, otherwise, it will be the type of the property as present in vertices.</p>
   * @public
   */
  outputType?: string | undefined;

  /**
   * <p>The name of the property as it exists in the original graph data. If not provided, it is assumed that the key matches the desired sourcePropertyName.</p>
   * @public
   */
  sourcePropertyName?: string | undefined;

  /**
   * <p>Specifies how to handle properties that have multiple values. Can be either <code>TO_LIST</code> to export all values as a list, or <code>PICK_FIRST</code> to export the first value encountered. If not specified, the default value is <code>PICK_FIRST</code>.</p>
   * @public
   */
  multiValueHandling?: MultiValueHandlingType | undefined;
}

/**
 * <p>Specifies whihc properties of that label should be included in the export.</p>
 * @public
 */
export interface ExportFilterElement {
  /**
   * <p>Each property is defined by a key-value pair, where the key is the desired output property name (e.g. "name"), and the value is an object.</p>
   * @public
   */
  properties?: Record<string, ExportFilterPropertyAttributes> | undefined;
}

/**
 * <p>This is the top-level field for specifying vertex or edge filters. If the ExportFilter is not provided, then all properties for all labels will be exported. If the ExportFilter is provided but is an empty object, then no data will be exported.</p>
 * @public
 */
export interface ExportFilter {
  /**
   * <p>Used to specify filters on a per-label basis for vertices. This allows you to control which vertex labels and properties are included in the export.</p>
   * @public
   */
  vertexFilter?: Record<string, ExportFilterElement> | undefined;

  /**
   * <p>Used to specify filters on a per-label basis for edges. This allows you to control which edge labels and properties are included in the export.</p>
   * @public
   */
  edgeFilter?: Record<string, ExportFilterElement> | undefined;
}

/**
 * <p>Contains details about the specified export task.</p>
 * @public
 */
export interface ExportTaskDetails {
  /**
   * <p>The start time of the export task.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The time elapsed, in seconds, since the start time of the export task.</p>
   * @public
   */
  timeElapsedSeconds: number | undefined;

  /**
   * <p>The number of progress percentage of the export task.</p>
   * @public
   */
  progressPercentage: number | undefined;

  /**
   * <p>The number of exported vertices.</p>
   * @public
   */
  numVerticesWritten?: number | undefined;

  /**
   * <p>The number of exported edges.</p>
   * @public
   */
  numEdgesWritten?: number | undefined;
}

/**
 * @public
 */
export interface GetExportTaskOutput {
  /**
   * <p>The source graph identifier of the export task.</p>
   * @public
   */
  graphId: string | undefined;

  /**
   * <p>The ARN of the IAM role that will allow data to be exported to the destination.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The unique identifier of the export task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The current status of the export task.</p>
   * @public
   */
  status: ExportTaskStatus | undefined;

  /**
   * <p>The format of the export task.</p>
   * @public
   */
  format: ExportFormat | undefined;

  /**
   * <p>The Amazon S3 URI of the export task where data will be exported.</p>
   * @public
   */
  destination: string | undefined;

  /**
   * <p>The KMS key identifier of the export task.</p>
   * @public
   */
  kmsKeyIdentifier: string | undefined;

  /**
   * <p>The parquet type of the export task.</p>
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * <p>The reason that the export task has this status value.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The details of the export task.</p>
   * @public
   */
  exportTaskDetails?: ExportTaskDetails | undefined;

  /**
   * <p>The export filter of the export task.</p>
   * @public
   */
  exportFilter?: ExportFilter | undefined;
}

/**
 * @public
 */
export interface GetImportTaskInput {
  /**
   * <p>The unique identifier of the import task.</p>
   * @public
   */
  taskIdentifier: string | undefined;
}

/**
 * <p>Contains details about an import task.</p>
 * @public
 */
export interface ImportTaskDetails {
  /**
   * <p>Status of the import task.</p>
   * @public
   */
  status: string | undefined;

  /**
   * <p>Time at which the import task started.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>Seconds elapsed since the import task started.</p>
   * @public
   */
  timeElapsedSeconds: number | undefined;

  /**
   * <p>The percentage progress so far.</p>
   * @public
   */
  progressPercentage: number | undefined;

  /**
   * <p>The number of errors encountered so far.</p>
   * @public
   */
  errorCount: number | undefined;

  /**
   * <p>Details about the errors that have been encountered.</p>
   * @public
   */
  errorDetails?: string | undefined;

  /**
   * <p>The number of statements in the import task.</p>
   * @public
   */
  statementCount: number | undefined;

  /**
   * <p>The number of dictionary entries in the import task.</p>
   * @public
   */
  dictionaryEntryCount: number | undefined;
}

/**
 * @public
 */
export interface GetImportTaskOutput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphId?: string | undefined;

  /**
   * <p>The unique identifier of the import task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>Specifies the format of S3 data to be imported. Valid values are <code>CSV</code>, which identifies the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html">Gremlin CSV format</a> or <code>OPENCYPHER</code>, which identies the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html">openCypher load format</a>.</p>
   * @public
   */
  format?: Format | undefined;

  /**
   * <p>The parquet type of the import task.</p>
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * <p>The ARN of the IAM role that will allow access to the data that is to be imported.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The status of the import task:</p> <ul> <li> <p> <b>INITIALIZING</b>   –   The necessary resources needed to create the graph are being prepared.</p> </li> <li> <p> <b>ANALYZING_DATA</b>   –   The data is being analyzed to determine the optimal infrastructure configuration for the new graph.</p> </li> <li> <p> <b>RE_PROVISIONING</b>   –   The data did not fit into the provisioned graph, so it is being re-provisioned with more capacity.</p> </li> <li> <p> <b>IMPORTING</b>   –   The data is being loaded.</p> </li> <li> <p> <b>ERROR_ENCOUNTERED</b>   –   An error has been encountered while trying to create the graph and import the data.</p> </li> <li> <p> <b>ERROR_ENCOUNTERED_ROLLING_BACK</b>   –   Because of the error that was encountered, the graph is being rolled back and all its resources released.</p> </li> <li> <p> <b>SUCCEEDED</b>   –   Graph creation and data loading succeeded.</p> </li> <li> <p> <b>FAILED</b>   –   Graph creation or data loading failed. When the status is <code>FAILED</code>, you can use <code>get-graphs</code> to get more information about the state of the graph.</p> </li> <li> <p> <b>CANCELLING</b>   –   Because you cancelled the import task, cancellation is in progress.</p> </li> <li> <p> <b>CANCELLED</b>   –   You have successfully cancelled the import task.</p> </li> </ul>
   * @public
   */
  status: ImportTaskStatus | undefined;

  /**
   * <p>Contains options for controlling the import process. For example, if the <code>failOnError</code> key is set to <code>false</code>, the import skips problem data and attempts to continue (whereas if set to <code>true</code>, the default, or if omitted, the import operation halts immediately when an error is encountered.</p>
   * @public
   */
  importOptions?: ImportOptions | undefined;

  /**
   * <p>Contains details about the specified import task.</p>
   * @public
   */
  importTaskDetails?: ImportTaskDetails | undefined;

  /**
   * <p>The number of the current attempts to execute the import task.</p>
   * @public
   */
  attemptNumber?: number | undefined;

  /**
   * <p>The reason that the import task has this status value.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface ListExportTasksInput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier?: string | undefined;

  /**
   * <p>Pagination token used to paginate input.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of export tasks to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides details about an export task.</p>
 * @public
 */
export interface ExportTaskSummary {
  /**
   * <p>The source graph identifier of the export task.</p>
   * @public
   */
  graphId: string | undefined;

  /**
   * <p>The ARN of the IAM role that will allow the data to be exported to the destination.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The unique identifier of the export task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The current status of the export task.</p>
   * @public
   */
  status: ExportTaskStatus | undefined;

  /**
   * <p>The format of the export task.</p>
   * @public
   */
  format: ExportFormat | undefined;

  /**
   * <p>The Amazon S3 URI of the export task where data will be exported to.</p>
   * @public
   */
  destination: string | undefined;

  /**
   * <p>The KMS key identifier of the export task.</p>
   * @public
   */
  kmsKeyIdentifier: string | undefined;

  /**
   * <p>The parquet type of the export task.</p>
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * <p>The reason that the export task has this status value.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface ListExportTasksOutput {
  /**
   * <p>The requested list of export tasks.</p>
   * @public
   */
  tasks: ExportTaskSummary[] | undefined;

  /**
   * <p>Pagination token used to paginate output.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImportTasksInput {
  /**
   * <p>Pagination token used to paginate output.</p> <p>When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The total number of records to return in the command's output.</p> <p>If the total number of records available is more than the value specified, <code>nextToken</code> is provided in the command's output. To resume pagination, provide the <code>nextToken</code> output value in the <code>nextToken</code> argument of a subsequent command. Do not use the <code>nextToken</code> response element directly outside of the Amazon CLI.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Details about an import task.</p>
 * @public
 */
export interface ImportTaskSummary {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphId?: string | undefined;

  /**
   * <p>The unique identifier of the import task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>Specifies the format of S3 data to be imported. Valid values are <code>CSV</code>, which identifies the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html">Gremlin CSV format</a> or <code>OPENCYPHER</code>, which identies the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html">openCypher load format</a>.</p>
   * @public
   */
  format?: Format | undefined;

  /**
   * <p>The parquet type of the import task.</p>
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * <p>The ARN of the IAM role that will allow access to the data that is to be imported.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Status of the import task.</p>
   * @public
   */
  status: ImportTaskStatus | undefined;
}

/**
 * @public
 */
export interface ListImportTasksOutput {
  /**
   * <p>The requested list of import tasks.</p>
   * @public
   */
  tasks: ImportTaskSummary[] | undefined;

  /**
   * <p>Pagination token used to paginate output.</p> <p>When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartExportTaskInput {
  /**
   * <p>The source graph identifier of the export task.</p>
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * <p>The ARN of the IAM role that will allow data to be exported to the destination.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The format of the export task.</p>
   * @public
   */
  format: ExportFormat | undefined;

  /**
   * <p>The Amazon S3 URI where data will be exported to.</p>
   * @public
   */
  destination: string | undefined;

  /**
   * <p>The KMS key identifier of the export task.</p>
   * @public
   */
  kmsKeyIdentifier: string | undefined;

  /**
   * <p>The parquet type of the export task.</p>
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * <p>The export filter of the export task.</p>
   * @public
   */
  exportFilter?: ExportFilter | undefined;

  /**
   * <p>Tags to be applied to the export task.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartExportTaskOutput {
  /**
   * <p>The source graph identifier of the export task.</p>
   * @public
   */
  graphId: string | undefined;

  /**
   * <p>The ARN of the IAM role that will allow data to be exported to the destination.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The unique identifier of the export task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The current status of the export task.</p>
   * @public
   */
  status: ExportTaskStatus | undefined;

  /**
   * <p>The format of the export task.</p>
   * @public
   */
  format: ExportFormat | undefined;

  /**
   * <p>The Amazon S3 URI of the export task where data will be exported to.</p>
   * @public
   */
  destination: string | undefined;

  /**
   * <p>The KMS key identifier of the export task.</p>
   * @public
   */
  kmsKeyIdentifier: string | undefined;

  /**
   * <p>The parquet type of the export task.</p>
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * <p>The reason that the export task has this status value.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The export filter of the export task.</p>
   * @public
   */
  exportFilter?: ExportFilter | undefined;
}

/**
 * @public
 */
export interface StartImportTaskInput {
  /**
   * <p>Options for how to perform an import.</p>
   * @public
   */
  importOptions?: ImportOptions | undefined;

  /**
   * <p>If set to true, the task halts when an import error is encountered. If set to false, the task skips the data that caused the error and continues if possible.</p>
   * @public
   */
  failOnError?: boolean | undefined;

  /**
   * <p>A URL identifying the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>Specifies the format of Amazon S3 data to be imported. Valid values are CSV, which identifies the Gremlin CSV format or OPENCYPHER, which identies the openCypher load format.</p>
   * @public
   */
  format?: Format | undefined;

  /**
   * <p>The parquet type of the import task.</p>
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * <p>The method to handle blank nodes in the dataset. Currently, only <code>convertToIri</code> is supported, meaning blank nodes are converted to unique IRIs at load time. Must be provided when format is <code>ntriples</code>. For more information, see <a href="https://docs.aws.amazon.com/neptune-analytics/latest/userguide/using-rdf-data.html#rdf-handling">Handling RDF values</a>.</p>
   * @public
   */
  blankNodeHandling?: BlankNodeHandling | undefined;

  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * <p>The ARN of the IAM role that will allow access to the data that is to be imported.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface StartImportTaskOutput {
  /**
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   * @public
   */
  graphId?: string | undefined;

  /**
   * <p>The unique identifier of the import task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>A URL identifying the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>Specifies the format of Amazon S3 data to be imported. Valid values are CSV, which identifies the Gremlin CSV format or OPENCYPHER, which identies the openCypher load format.</p>
   * @public
   */
  format?: Format | undefined;

  /**
   * <p>The parquet type of the import task.</p>
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * <p>The ARN of the IAM role that will allow access to the data that is to be imported.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The status of the import task.</p>
   * @public
   */
  status: ImportTaskStatus | undefined;

  /**
   * <p>Options for how to perform an import.</p>
   * @public
   */
  importOptions?: ImportOptions | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>ARN of the resource whose tag needs to be removed.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Tag keys for the tags to be removed.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
