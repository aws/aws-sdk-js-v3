// smithy-typescript generated code
import type { DocumentType as __DocumentType, StreamingBlobTypes } from "@smithy/types";

import type {
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
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * The unique identifier of the query to cancel.
   *
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface ExecuteQueryInput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * The query string to be executed.
   *
   * @public
   */
  queryString: string | undefined;

  /**
   * The query language the query is written in. Currently only openCypher is supported.
   *
   * @public
   */
  language: QueryLanguage | undefined;

  /**
   * The data parameters the query can use in JSON format. For example: \{"name": "john", "age": 20\}. (optional)
   *
   * @public
   */
  parameters?: Record<string, __DocumentType> | undefined;

  /**
   * Query plan cache is a feature that saves the query plan and reuses it on successive executions of the same query. This reduces query latency, and works for both `READ` and `UPDATE` queries. The plan cache is an LRU cache with a 5 minute TTL and a capacity of 1000.
   *
   * @public
   */
  planCache?: PlanCacheType | undefined;

  /**
   * The explain mode parameter returns a query explain instead of the actual query results. A query explain can be used to gather insights about the query execution such as planning decisions, time spent on each operator, solutions flowing etc.
   *
   * @public
   */
  explainMode?: ExplainMode | undefined;

  /**
   * Specifies the query timeout duration, in milliseconds. (optional)
   *
   * @public
   */
  queryTimeoutMilliseconds?: number | undefined;
}

/**
 * @public
 */
export interface ExecuteQueryOutput {
  /**
   * The query results.
   *
   * @public
   */
  payload: StreamingBlobTypes | undefined;
}

/**
 * @public
 */
export interface GetGraphSummaryInput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * The summary mode can take one of two values: `basic` (the default), and `detailed`.
   *
   * @public
   */
  mode?: GraphSummaryMode | undefined;
}

/**
 * Contains information about an edge in a Neptune Analytics graph.
 *
 * @public
 */
export interface EdgeStructure {
  /**
   * The number of instances of the edge in the graph.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * A list of the properties associated with the edge.
   *
   * @public
   */
  edgeProperties?: string[] | undefined;
}

/**
 * Information about a node.
 *
 * @public
 */
export interface NodeStructure {
  /**
   * The number of instances of this node.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * Properties associated with this node.
   *
   * @public
   */
  nodeProperties?: string[] | undefined;

  /**
   * The outgoing edge labels associated with this node.
   *
   * @public
   */
  distinctOutgoingEdgeLabels?: string[] | undefined;
}

/**
 * Summary information about the graph.
 *
 * @public
 */
export interface GraphDataSummary {
  /**
   * The number of nodes in the graph.
   *
   * @public
   */
  numNodes?: number | undefined;

  /**
   * The number of edges in the graph.
   *
   * @public
   */
  numEdges?: number | undefined;

  /**
   * The number of distinct node labels in the graph.
   *
   * @public
   */
  numNodeLabels?: number | undefined;

  /**
   * The number of unique edge labels in the graph.
   *
   * @public
   */
  numEdgeLabels?: number | undefined;

  /**
   * A list of distinct node labels in the graph.
   *
   * @public
   */
  nodeLabels?: string[] | undefined;

  /**
   * A list of the edge labels in the graph.
   *
   * @public
   */
  edgeLabels?: string[] | undefined;

  /**
   * The number of distinct node properties in the graph.
   *
   * @public
   */
  numNodeProperties?: number | undefined;

  /**
   * The number of edge properties in the graph.
   *
   * @public
   */
  numEdgeProperties?: number | undefined;

  /**
   * A list of the distinct node properties in the graph, along with the count of nodes where each property is used.
   *
   * @public
   */
  nodeProperties?: Record<string, number>[] | undefined;

  /**
   * A list of the distinct edge properties in the graph, along with the count of edges where each property is used.
   *
   * @public
   */
  edgeProperties?: Record<string, number>[] | undefined;

  /**
   * The total number of usages of all node properties.
   *
   * @public
   */
  totalNodePropertyValues?: number | undefined;

  /**
   * The total number of usages of all edge properties.
   *
   * @public
   */
  totalEdgePropertyValues?: number | undefined;

  /**
   * This field is only present when the requested mode is DETAILED. It contains a list of node structures.
   *
   * @public
   */
  nodeStructures?: NodeStructure[] | undefined;

  /**
   * This field is only present when the requested mode is DETAILED. It contains a list of edge structures.
   *
   * @public
   */
  edgeStructures?: EdgeStructure[] | undefined;
}

/**
 * @public
 */
export interface GetGraphSummaryOutput {
  /**
   * Display the version of this tool.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The timestamp, in ISO 8601 format, of the time at which Neptune Analytics last computed statistics.
   *
   * @public
   */
  lastStatisticsComputationTime?: Date | undefined;

  /**
   * The graph summary.
   *
   * @public
   */
  graphSummary?: GraphDataSummary | undefined;
}

/**
 * @public
 */
export interface GetQueryInput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * The ID of the query in question.
   *
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface GetQueryOutput {
  /**
   * The ID of the query in question.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The query in question.
   *
   * @public
   */
  queryString?: string | undefined;

  /**
   * Indicates how long the query waited, in milliseconds.
   *
   * @public
   */
  waited?: number | undefined;

  /**
   * The number of milliseconds the query has been running.
   *
   * @public
   */
  elapsed?: number | undefined;

  /**
   * State of the query.
   *
   * @public
   */
  state?: QueryState | undefined;
}

/**
 * Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535
 *
 * @public
 */
export interface VectorSearchConfiguration {
  /**
   * The number of dimensions.
   *
   * @public
   */
  dimension: number | undefined;
}

/**
 * @public
 */
export interface CreateGraphInput {
  /**
   * A name for the new Neptune Analytics graph to be created.
   *
   * The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed.
   *
   * @public
   */
  graphName: string | undefined;

  /**
   * Adds metadata tags to the new graph. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated. (`true` to enable, or `false` to disable.
   *
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * Specifies a KMS key to use to encrypt data in the new graph.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * Specifies the number of dimensions for vector embeddings that will be loaded into the graph. The value is specified as `dimension=`value. Max = 65,535
   *
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * The number of replicas in other AZs. Min =0, Max = 2, Default = 1.
   *
   * > **Important:** Additional charges equivalent to the m-NCUs selected for the graph apply for each replica.
   *
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * Indicates whether or not to enable deletion protection on the graph. The graph can’t be deleted when deletion protection is enabled. (`true` or `false`).
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Min = 16
   *
   * @public
   */
  provisionedMemory: number | undefined;
}

/**
 * @public
 */
export interface CreateGraphOutput {
  /**
   * The ID of the graph.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The graph name. For example: `my-graph-1`.
   *
   * The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the graph.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The current status of the graph.
   *
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * The reason the status was given.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The time when the graph was created.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.
   *
   * Min = 16
   *
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * The graph endpoint.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated.
   *
   * > **Note:** If enabling public connectivity for the first time, there will be a delay while it is enabled.
   *
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * The vector-search configuration for the graph, which specifies the vector dimension to use in the vector index, if any.
   *
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * The number of replicas in other AZs.
   *
   * Default: If not specified, the default value is 1.
   *
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * Specifies the KMS key used to encrypt data in the new graph.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * The ID of the source graph.
   *
   * @public
   */
  sourceSnapshotId?: string | undefined;

  /**
   * A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The build number of the graph software.
   *
   * @public
   */
  buildNumber?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGraphInput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * Determines whether a final graph snapshot is created before the graph is deleted. If `true` is specified, no graph snapshot is created. If `false` is specified, a graph snapshot is created before the graph is deleted.
   *
   * @public
   */
  skipSnapshot: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteGraphOutput {
  /**
   * The unique identifier of the graph.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the graph.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN associated with the graph.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the graph.
   *
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * The reason for the status of the graph.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The time at which the graph was created.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.
   *
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * The graph endpoint.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * If `true`, the graph has a public endpoint, otherwise not.
   *
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535
   *
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * The number of replicas for the graph.
   *
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * The ID of the KMS key used to encrypt and decrypt graph data.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * The ID of the snapshot from which the graph was created, if the graph was recovered from a snapshot.
   *
   * @public
   */
  sourceSnapshotId?: string | undefined;

  /**
   * If `true`, deletion protection was enabled for the graph.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The build number associated with the graph.
   *
   * @public
   */
  buildNumber?: string | undefined;
}

/**
 * @public
 */
export interface GetGraphInput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetGraphOutput {
  /**
   * The unique identifier of the graph.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the graph.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN associated with the graph.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the graph.
   *
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * The reason that the graph has this status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The time at which the graph was created.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.
   *
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * The graph endpoint.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * If `true`, the graph has a public endpoint, otherwise not.
   *
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535
   *
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * The number of replicas for the graph.
   *
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * The ID of the KMS key used to encrypt and decrypt graph data.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * The ID of the snapshot from which the graph was created, if it was created from a snapshot.
   *
   * @public
   */
  sourceSnapshotId?: string | undefined;

  /**
   * If `true`, deletion protection is enabled for the graph.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The build number of the graph.
   *
   * @public
   */
  buildNumber?: string | undefined;
}

/**
 * @public
 */
export interface ListGraphsInput {
  /**
   * Pagination token used to paginate output.
   *
   * When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The total number of records to return in the command's output.
   *
   * If the total number of records available is more than the value specified, `nextToken` is provided in the command's output. To resume pagination, provide the `nextToken` output value in the `nextToken` argument of a subsequent command. Do not use the `nextToken` response element directly outside of the Amazon CLI.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary details about a graph.
 *
 * @public
 */
export interface GraphSummary {
  /**
   * The unique identifier of the graph.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the graph.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN associated with the graph.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the graph.
   *
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.
   *
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * If `true`, the graph has a public endpoint, otherwise not.
   *
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * The graph endpoint.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The number of replicas for the graph.
   *
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * The ID of the KMS key used to encrypt and decrypt graph data.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * If `true`, deletion protection is enabled for the graph.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface ListGraphsOutput {
  /**
   * A list of the graphs.
   *
   * @public
   */
  graphs: GraphSummary[] | undefined;

  /**
   * Pagination token used to paginate output.
   *
   * When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ResetGraphInput {
  /**
   * ID of the graph to reset.
   *
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * Determines whether a final graph snapshot is created before the graph data is deleted. If set to `true`, no graph snapshot is created. If set to `false`, a graph snapshot is created before the data is deleted.
   *
   * @public
   */
  skipSnapshot: boolean | undefined;
}

/**
 * @public
 */
export interface ResetGraphOutput {
  /**
   * The unique identifier of the graph.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the graph.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN associated with the graph.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the graph.
   *
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * The reason that the graph has this status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The time at which the graph was created.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.
   *
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * The graph endpoint.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * If `true`, the graph has a public endpoint, otherwise not.
   *
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535
   *
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * The number of replicas for the graph.
   *
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * The ID of the KMS key used to encrypt and decrypt graph data.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * The ID of the snapshot from which the graph was created, if any.
   *
   * @public
   */
  sourceSnapshotId?: string | undefined;

  /**
   * If `true`, deletion protection is enabled for the graph.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The build number of the graph.
   *
   * @public
   */
  buildNumber?: string | undefined;
}

/**
 * @public
 */
export interface RestoreGraphFromSnapshotInput {
  /**
   * The ID of the snapshot in question.
   *
   * @public
   */
  snapshotIdentifier: string | undefined;

  /**
   * A name for the new Neptune Analytics graph to be created from the snapshot.
   *
   * The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed.
   *
   * @public
   */
  graphName: string | undefined;

  /**
   * The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.
   *
   * Min = 16
   *
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * Adds metadata tags to the snapshot. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The number of replicas in other AZs. Min =0, Max = 2, Default =1
   *
   * > **Important:** Additional charges equivalent to the m-NCUs selected for the graph apply for each replica.
   *
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated. (`true` to enable, or `false` to disable).
   *
   * @public
   */
  publicConnectivity?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreGraphFromSnapshotOutput {
  /**
   * The unique identifier of the graph.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the graph.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN associated with the graph.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the graph.
   *
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * The reason that the graph has this status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The time at which the graph was created.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.
   *
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * The graph endpoint.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * If `true`, the graph has a public endpoint, otherwise not.
   *
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535
   *
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * The number of replicas for the graph.
   *
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * The ID of the KMS key used to encrypt and decrypt graph data.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * The ID of the snapshot from which the graph was created, if any.
   *
   * @public
   */
  sourceSnapshotId?: string | undefined;

  /**
   * If `true`, deletion protection is enabled for the graph.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The build number of the graph.
   *
   * @public
   */
  buildNumber?: string | undefined;
}

/**
 * @public
 */
export interface StartGraphInput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartGraphOutput {
  /**
   * The unique identifier of the graph.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the graph.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN associated with the graph.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the graph.
   *
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * The reason that the graph has this status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The time at which the graph was created.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.
   *
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * The graph endpoint.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * If `true`, the graph has a public endpoint, otherwise not.
   *
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535
   *
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * The number of replicas for the graph.
   *
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * The ID of the KMS key used to encrypt and decrypt graph data.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * The ID of the snapshot from which the graph was created, if it was created from a snapshot.
   *
   * @public
   */
  sourceSnapshotId?: string | undefined;

  /**
   * If `true`, deletion protection is enabled for the graph.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The build number of the graph.
   *
   * @public
   */
  buildNumber?: string | undefined;
}

/**
 * @public
 */
export interface StopGraphInput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopGraphOutput {
  /**
   * The unique identifier of the graph.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the graph.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN associated with the graph.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the graph.
   *
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * The reason that the graph has this status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The time at which the graph was created.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.
   *
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * The graph endpoint.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * If true, the graph has a public endpoint, otherwise not.
   *
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535
   *
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * The number of replicas for the graph.
   *
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * The ID of the KMS key used to encrypt and decrypt graph data.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * The ID of the snapshot from which the graph was created, if it was created from a snapshot.
   *
   * @public
   */
  sourceSnapshotId?: string | undefined;

  /**
   * If `true`, deletion protection is enabled for the graph.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The build number of the graph.
   *
   * @public
   */
  buildNumber?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGraphInput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated. (`true` to enable, or `false` to disable.
   *
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.
   *
   * Min = 16
   *
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateGraphOutput {
  /**
   * The unique identifier of the graph.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the graph.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN associated with the graph.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the graph.
   *
   * @public
   */
  status?: GraphStatus | undefined;

  /**
   * The reason that the graph has this status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The time at which the graph was created.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.
   *
   * @public
   */
  provisionedMemory?: number | undefined;

  /**
   * The graph endpoint.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * If `true`, the graph has a public endpoint, otherwise not.
   *
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535
   *
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * The number of replicas for the graph.
   *
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * The ID of the KMS key used to encrypt and decrypt graph data.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * The ID of the snapshot from which the graph was created, if any.
   *
   * @public
   */
  sourceSnapshotId?: string | undefined;

  /**
   * If `true`, deletion protection is enabled for the graph.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The build number of the graph.
   *
   * @public
   */
  buildNumber?: string | undefined;
}

/**
 * @public
 */
export interface ListQueriesInput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * The maximum number of results to be fetched by the API.
   *
   * @public
   */
  maxResults: number | undefined;

  /**
   * Filtered list of queries based on state.
   *
   * @public
   */
  state?: QueryStateInput | undefined;
}

/**
 * Details of the query listed.
 *
 * @public
 */
export interface QuerySummary {
  /**
   * A string representation of the id of the query.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The actual query text. The `queryString` may be truncated if the actual query string is too long.
   *
   * @public
   */
  queryString?: string | undefined;

  /**
   * The amount of time, in milliseconds, the query has waited in the queue before being picked up by a worker thread.
   *
   * @public
   */
  waited?: number | undefined;

  /**
   * The running time of the query, in milliseconds.
   *
   * @public
   */
  elapsed?: number | undefined;

  /**
   * State of the query.
   *
   * @public
   */
  state?: QueryState | undefined;
}

/**
 * @public
 */
export interface ListQueriesOutput {
  /**
   * A list of current openCypher queries.
   *
   * @public
   */
  queries: QuerySummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The list of metadata tags associated with the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePrivateGraphEndpointInput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * The VPC in which the private graph endpoint needs to be created.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * Subnets in which private graph endpoint ENIs are created.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * Security groups to be attached to the private graph endpoint.
   *
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreatePrivateGraphEndpointOutput {
  /**
   * VPC in which the private graph endpoint is created.
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * Subnets in which the private graph endpoint ENIs are created.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * Status of the private graph endpoint.
   *
   * @public
   */
  status: PrivateGraphEndpointStatus | undefined;

  /**
   * Endpoint ID of the private graph endpoint.
   *
   * @public
   */
  vpcEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface DeletePrivateGraphEndpointInput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * The ID of the VPC where the private endpoint is located.
   *
   * @public
   */
  vpcId: string | undefined;
}

/**
 * @public
 */
export interface DeletePrivateGraphEndpointOutput {
  /**
   * The ID of the VPC where the private endpoint was deleted.
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * The subnet IDs involved.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The status of the delete operation.
   *
   * @public
   */
  status: PrivateGraphEndpointStatus | undefined;

  /**
   * The ID of the VPC endpoint that was deleted.
   *
   * @public
   */
  vpcEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface GetPrivateGraphEndpointInput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * The ID of the VPC where the private endpoint is located.
   *
   * @public
   */
  vpcId: string | undefined;
}

/**
 * @public
 */
export interface GetPrivateGraphEndpointOutput {
  /**
   * The ID of the VPC where the private endpoint is located.
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * The subnet IDs involved.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The current status of the private endpoint.
   *
   * @public
   */
  status: PrivateGraphEndpointStatus | undefined;

  /**
   * The ID of the private endpoint.
   *
   * @public
   */
  vpcEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface ListPrivateGraphEndpointsInput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * Pagination token used to paginate output.
   *
   * When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The total number of records to return in the command's output.
   *
   * If the total number of records available is more than the value specified, `nextToken` is provided in the command's output. To resume pagination, provide the `nextToken` output value in the `nextToken` argument of a subsequent command. Do not use the `nextToken` response element directly outside of the Amazon CLI.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Details about a private graph endpoint.
 *
 * @public
 */
export interface PrivateGraphEndpointSummary {
  /**
   * The ID of the VPC in which the private graph endpoint is located.
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * The subnet IDs associated with the private graph endpoint.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The status of the private graph endpoint.
   *
   * @public
   */
  status: PrivateGraphEndpointStatus | undefined;

  /**
   * The ID of the VPC endpoint.
   *
   * @public
   */
  vpcEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface ListPrivateGraphEndpointsOutput {
  /**
   * A list of private endpoints for the specified Neptune Analytics graph.
   *
   * @public
   */
  privateGraphEndpoints: PrivateGraphEndpointSummary[] | undefined;

  /**
   * Pagination token used to paginate output.
   *
   * When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGraphSnapshotInput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * The snapshot name. For example: `my-snapshot-1`.
   *
   * The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed.
   *
   * @public
   */
  snapshotName: string | undefined;

  /**
   * Adds metadata tags to the new graph. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateGraphSnapshotOutput {
  /**
   * The ID of the snapshot created.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the snapshot created.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the snapshot created.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Id of the Neptune Analytics graph from which the snapshot is created.
   *
   * @public
   */
  sourceGraphId?: string | undefined;

  /**
   * The snapshot creation time
   *
   * @public
   */
  snapshotCreateTime?: Date | undefined;

  /**
   * The current state of the snapshot.
   *
   * @public
   */
  status?: SnapshotStatus | undefined;

  /**
   * The ID of the KMS key used to encrypt and decrypt graph data.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGraphSnapshotInput {
  /**
   * ID of the graph snapshot to be deleted.
   *
   * @public
   */
  snapshotIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGraphSnapshotOutput {
  /**
   * The unique identifier of the graph snapshot.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The snapshot name. For example: `my-snapshot-1`.
   *
   * The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the graph snapshot.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The graph identifier for the graph from which the snapshot was created.
   *
   * @public
   */
  sourceGraphId?: string | undefined;

  /**
   * The time when the snapshot was created.
   *
   * @public
   */
  snapshotCreateTime?: Date | undefined;

  /**
   * The status of the graph snapshot.
   *
   * @public
   */
  status?: SnapshotStatus | undefined;

  /**
   * The ID of the KMS key used to encrypt and decrypt the snapshot.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface GetGraphSnapshotInput {
  /**
   * The ID of the snapshot to retrieve.
   *
   * @public
   */
  snapshotIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetGraphSnapshotOutput {
  /**
   * The unique identifier of the graph snapshot.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The snapshot name. For example: `my-snapshot-1`.
   *
   * The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the graph snapshot.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The graph identifier for the graph for which a snapshot is to be created.
   *
   * @public
   */
  sourceGraphId?: string | undefined;

  /**
   * The time when the snapshot was created.
   *
   * @public
   */
  snapshotCreateTime?: Date | undefined;

  /**
   * The status of the graph snapshot.
   *
   * @public
   */
  status?: SnapshotStatus | undefined;

  /**
   * The ID of the KMS key used to encrypt and decrypt the snapshot.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface ListGraphSnapshotsInput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier?: string | undefined;

  /**
   * Pagination token used to paginate output.
   *
   * When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The total number of records to return in the command's output.
   *
   * If the total number of records available is more than the value specified, `nextToken` is provided in the command's output. To resume pagination, provide the `nextToken` output value in the `nextToken` argument of a subsequent command. Do not use the `nextToken` response element directly outside of the Amazon CLI.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Details about a graph snapshot.
 *
 * @public
 */
export interface GraphSnapshotSummary {
  /**
   * The unique identifier of the graph snapshot.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The snapshot name. For example: `my-snapshot-1`.
   *
   * The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the graph snapshot.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The graph identifier for the graph for which a snapshot is to be created.
   *
   * @public
   */
  sourceGraphId?: string | undefined;

  /**
   * The time when the snapshot was created.
   *
   * @public
   */
  snapshotCreateTime?: Date | undefined;

  /**
   * The status of the graph snapshot.
   *
   * @public
   */
  status?: SnapshotStatus | undefined;

  /**
   * The ID of the KMS key used to encrypt and decrypt the snapshot.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface ListGraphSnapshotsOutput {
  /**
   * The requested list of snapshots.
   *
   * @public
   */
  graphSnapshots: GraphSnapshotSummary[] | undefined;

  /**
   * Pagination token used to paginate output.
   *
   * When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * ARN of the resource for which tags need to be added.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to be assigned to the Neptune Analytics resource.
   *
   * The tags are metadata that are specified as a list of key-value pairs:
   *
   * **Key** (string)   –   A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length. It can't be prefixed with `aws:` and can only contain the set of Unicode characters specified by this Java regular expression: `"^([\p\{L\}\p\{Z\}\p\{N\}_.:/=+\-]*)$")`.
   *
   * **Value** (string)   –   A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length. It can't be prefixed with `aws:` and can only contain the set of Unicode characters specified by this Java regular expression: `"^([\p\{L\}\p\{Z\}\p\{N\}_.:/=+\-]*)$")`.
   *
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
   * The unique identifier of the export task.
   *
   * @public
   */
  taskIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CancelExportTaskOutput {
  /**
   * The source graph identifier of the cancelled export task.
   *
   * @public
   */
  graphId: string | undefined;

  /**
   * The ARN of the IAM role that will allow the exporting of data to the destination.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The unique identifier of the export task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * The current status of the export task. The status is `CANCELLING` when the export task is cancelled.
   *
   * @public
   */
  status: ExportTaskStatus | undefined;

  /**
   * The format of the cancelled export task.
   *
   * @public
   */
  format: ExportFormat | undefined;

  /**
   * The Amazon S3 URI of the cancelled export task where data will be exported to.
   *
   * @public
   */
  destination: string | undefined;

  /**
   * The KMS key identifier of the cancelled export task.
   *
   * @public
   */
  kmsKeyIdentifier: string | undefined;

  /**
   * The parquet type of the cancelled export task.
   *
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * The reason that the export task has this status value.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface CancelImportTaskInput {
  /**
   * The unique identifier of the import task.
   *
   * @public
   */
  taskIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CancelImportTaskOutput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphId?: string | undefined;

  /**
   * The unique identifier of the import task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.
   *
   * @public
   */
  source: string | undefined;

  /**
   * Specifies the format of S3 data to be imported. Valid values are `CSV`, which identifies the [Gremlin CSV format](https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html) or `OPENCYPHER`, which identifies the [openCypher load format](https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html).
   *
   * @public
   */
  format?: Format | undefined;

  /**
   * The parquet type of the cancelled import task.
   *
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * The ARN of the IAM role that will allow access to the data that is to be imported.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Current status of the task. Status is CANCELLING when the import task is cancelled.
   *
   * @public
   */
  status: ImportTaskStatus | undefined;
}

/**
 * Options for how to import Neptune data.
 *
 * @public
 */
export interface NeptuneImportOptions {
  /**
   * The path to an S3 bucket from which to import data.
   *
   * @public
   */
  s3ExportPath: string | undefined;

  /**
   * The KMS key to use to encrypt data in the S3 bucket where the graph data is exported
   *
   * @public
   */
  s3ExportKmsKeyId: string | undefined;

  /**
   * Neptune Analytics supports label-less vertices and no labels are assigned unless one is explicitly provided. Neptune assigns default labels when none is explicitly provided. When importing the data into Neptune Analytics, the default vertex labels can be omitted by setting *preserveDefaultVertexLabels* to false. Note that if the vertex only has default labels, and has no other properties or edges, then the vertex will effectively not get imported into Neptune Analytics when preserveDefaultVertexLabels is set to false.
   *
   * @public
   */
  preserveDefaultVertexLabels?: boolean | undefined;

  /**
   * Neptune Analytics currently does not support user defined edge ids. The edge ids are not imported by default. They are imported if *preserveEdgeIds* is set to true, and ids are stored as properties on the relationships with the property name *neptuneEdgeId*.
   *
   * @public
   */
  preserveEdgeIds?: boolean | undefined;
}

/**
 * Options for how to perform an import.
 *
 * @public
 */
export type ImportOptions =
  | ImportOptions.NeptuneMember
  | ImportOptions.$UnknownMember;

/**
 * @public
 */
export namespace ImportOptions {
  /**
   * Options for importing data from a Neptune database.
   *
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
   * A name for the new Neptune Analytics graph to be created.
   *
   * The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. Only lowercase letters are allowed.
   *
   * @public
   */
  graphName: string | undefined;

  /**
   * Adds metadata tags to the new graph. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated. (`true` to enable, or `false` to disable).
   *
   * @public
   */
  publicConnectivity?: boolean | undefined;

  /**
   * Specifies a KMS key to use to encrypt data imported into the new graph.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;

  /**
   * Specifies the number of dimensions for vector embeddings that will be loaded into the graph. The value is specified as `dimension=`value. Max = 65,535
   *
   * @public
   */
  vectorSearchConfiguration?: VectorSearchConfiguration | undefined;

  /**
   * The number of replicas in other AZs to provision on the new graph after import. Default = 1, Min = 0, Max = 2.
   *
   * > **Important:** Additional charges equivalent to the m-NCUs selected for the graph apply for each replica.
   *
   * @public
   */
  replicaCount?: number | undefined;

  /**
   * Indicates whether or not to enable deletion protection on the graph. The graph can’t be deleted when deletion protection is enabled. (`true` or `false`).
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * Contains options for controlling the import process. For example, if the `failOnError` key is set to `false`, the import skips problem data and attempts to continue (whereas if set to `true`, the default, or if omitted, the import operation halts immediately when an error is encountered.
   *
   * @public
   */
  importOptions?: ImportOptions | undefined;

  /**
   * The maximum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 1024, or the approved upper limit for your account.
   *
   * If both the minimum and maximum values are specified, the final `provisioned-memory` will be chosen per the actual size of your imported data. If neither value is specified, 128 m-NCUs are used.
   *
   * @public
   */
  maxProvisionedMemory?: number | undefined;

  /**
   * The minimum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 16
   *
   * @public
   */
  minProvisionedMemory?: number | undefined;

  /**
   * If set to `true`, the task halts when an import error is encountered. If set to `false`, the task skips the data that caused the error and continues if possible.
   *
   * @public
   */
  failOnError?: boolean | undefined;

  /**
   * A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.
   *
   * @public
   */
  source: string | undefined;

  /**
   * Specifies the format of S3 data to be imported. Valid values are `CSV`, which identifies the [Gremlin CSV format](https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html), `OPEN_CYPHER`, which identifies the [openCypher load format](https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html), or `ntriples`, which identifies the [RDF n-triples](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/using-rdf-data.html) format.
   *
   * @public
   */
  format?: Format | undefined;

  /**
   * The parquet type of the import task.
   *
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * The method to handle blank nodes in the dataset. Currently, only `convertToIri` is supported, meaning blank nodes are converted to unique IRIs at load time. Must be provided when format is `ntriples`. For more information, see [Handling RDF values](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/using-rdf-data.html#rdf-handling).
   *
   * @public
   */
  blankNodeHandling?: BlankNodeHandling | undefined;

  /**
   * The ARN of the IAM role that will allow access to the data that is to be imported.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateGraphUsingImportTaskOutput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphId?: string | undefined;

  /**
   * The unique identifier of the import task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.
   *
   * @public
   */
  source: string | undefined;

  /**
   * Specifies the format of S3 data to be imported. Valid values are `CSV`, which identifies the [Gremlin CSV format](https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html), `OPENCYPHER`, which identifies the [openCypher load format](https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html), or `ntriples`, which identifies the [RDF n-triples](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/using-rdf-data.html) format.
   *
   * @public
   */
  format?: Format | undefined;

  /**
   * The parquet type of the import task.
   *
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * The ARN of the IAM role that will allow access to the data that is to be imported.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The status of the import task.
   *
   * @public
   */
  status: ImportTaskStatus | undefined;

  /**
   * Contains options for controlling the import process. For example, if the `failOnError` key is set to `false`, the import skips problem data and attempts to continue (whereas if set to `true`, the default, or if omitted, the import operation halts immediately when an error is encountered.
   *
   * @public
   */
  importOptions?: ImportOptions | undefined;
}

/**
 * @public
 */
export interface GetExportTaskInput {
  /**
   * The unique identifier of the export task.
   *
   * @public
   */
  taskIdentifier: string | undefined;
}

/**
 * A structure representing a property's attributes. It is a map object of outputType, sourcePropertyName and multiValueHandling.
 *
 * @public
 */
export interface ExportFilterPropertyAttributes {
  /**
   * Specifies the data type to use for the property in the exported data (e.g. "String", "Int", "Float"). If a type is not provided, the export process will determine the type. If a given property is present as multiple types (e.g. one vertex has "height" stored as a double, and another edge has it stored as a string), the type will be of Any type, otherwise, it will be the type of the property as present in vertices.
   *
   * @public
   */
  outputType?: string | undefined;

  /**
   * The name of the property as it exists in the original graph data. If not provided, it is assumed that the key matches the desired sourcePropertyName.
   *
   * @public
   */
  sourcePropertyName?: string | undefined;

  /**
   * Specifies how to handle properties that have multiple values. Can be either `TO_LIST` to export all values as a list, or `PICK_FIRST` to export the first value encountered. If not specified, the default value is `PICK_FIRST`.
   *
   * @public
   */
  multiValueHandling?: MultiValueHandlingType | undefined;
}

/**
 * Specifies which properties of that label should be included in the export.
 *
 * @public
 */
export interface ExportFilterElement {
  /**
   * Each property is defined by a key-value pair, where the key is the desired output property name (e.g. "name"), and the value is an object.
   *
   * @public
   */
  properties?: Record<string, ExportFilterPropertyAttributes> | undefined;
}

/**
 * This is the top-level field for specifying vertex or edge filters. If the ExportFilter is not provided, then all properties for all labels will be exported. If the ExportFilter is provided but is an empty object, then no data will be exported.
 *
 * @public
 */
export interface ExportFilter {
  /**
   * Used to specify filters on a per-label basis for vertices. This allows you to control which vertex labels and properties are included in the export.
   *
   * @public
   */
  vertexFilter?: Record<string, ExportFilterElement> | undefined;

  /**
   * Used to specify filters on a per-label basis for edges. This allows you to control which edge labels and properties are included in the export.
   *
   * @public
   */
  edgeFilter?: Record<string, ExportFilterElement> | undefined;
}

/**
 * Contains details about the specified export task.
 *
 * @public
 */
export interface ExportTaskDetails {
  /**
   * The start time of the export task.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The time elapsed, in seconds, since the start time of the export task.
   *
   * @public
   */
  timeElapsedSeconds: number | undefined;

  /**
   * The number of progress percentage of the export task.
   *
   * @public
   */
  progressPercentage: number | undefined;

  /**
   * The number of exported vertices.
   *
   * @public
   */
  numVerticesWritten?: number | undefined;

  /**
   * The number of exported edges.
   *
   * @public
   */
  numEdgesWritten?: number | undefined;
}

/**
 * @public
 */
export interface GetExportTaskOutput {
  /**
   * The source graph identifier of the export task.
   *
   * @public
   */
  graphId: string | undefined;

  /**
   * The ARN of the IAM role that will allow data to be exported to the destination.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The unique identifier of the export task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * The current status of the export task.
   *
   * @public
   */
  status: ExportTaskStatus | undefined;

  /**
   * The format of the export task.
   *
   * @public
   */
  format: ExportFormat | undefined;

  /**
   * The Amazon S3 URI of the export task where data will be exported.
   *
   * @public
   */
  destination: string | undefined;

  /**
   * The KMS key identifier of the export task.
   *
   * @public
   */
  kmsKeyIdentifier: string | undefined;

  /**
   * The parquet type of the export task.
   *
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * The reason that the export task has this status value.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The details of the export task.
   *
   * @public
   */
  exportTaskDetails?: ExportTaskDetails | undefined;

  /**
   * The export filter of the export task.
   *
   * @public
   */
  exportFilter?: ExportFilter | undefined;
}

/**
 * @public
 */
export interface GetImportTaskInput {
  /**
   * The unique identifier of the import task.
   *
   * @public
   */
  taskIdentifier: string | undefined;
}

/**
 * Contains details about an import task.
 *
 * @public
 */
export interface ImportTaskDetails {
  /**
   * Status of the import task.
   *
   * @public
   */
  status: string | undefined;

  /**
   * Time at which the import task started.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * Seconds elapsed since the import task started.
   *
   * @public
   */
  timeElapsedSeconds: number | undefined;

  /**
   * The percentage progress so far.
   *
   * @public
   */
  progressPercentage: number | undefined;

  /**
   * The number of errors encountered so far.
   *
   * @public
   */
  errorCount: number | undefined;

  /**
   * Details about the errors that have been encountered.
   *
   * @public
   */
  errorDetails?: string | undefined;

  /**
   * The number of statements in the import task.
   *
   * @public
   */
  statementCount: number | undefined;

  /**
   * The number of dictionary entries in the import task.
   *
   * @public
   */
  dictionaryEntryCount: number | undefined;
}

/**
 * @public
 */
export interface GetImportTaskOutput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphId?: string | undefined;

  /**
   * The unique identifier of the import task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot
   *
   * @public
   */
  source: string | undefined;

  /**
   * Specifies the format of S3 data to be imported. Valid values are `CSV`, which identifies the [Gremlin CSV format](https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html) or `OPENCYPHER`, which identifies the [openCypher load format](https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html).
   *
   * @public
   */
  format?: Format | undefined;

  /**
   * The parquet type of the import task.
   *
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * The ARN of the IAM role that will allow access to the data that is to be imported.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The status of the import task:
   *
   * - **INITIALIZING**   –   The necessary resources needed to create the graph are being prepared.
   * - **ANALYZING_DATA**   –   The data is being analyzed to determine the optimal infrastructure configuration for the new graph.
   * - **RE_PROVISIONING**   –   The data did not fit into the provisioned graph, so it is being re-provisioned with more capacity.
   * - **IMPORTING**   –   The data is being loaded.
   * - **ERROR_ENCOUNTERED**   –   An error has been encountered while trying to create the graph and import the data.
   * - **ERROR_ENCOUNTERED_ROLLING_BACK**   –   Because of the error that was encountered, the graph is being rolled back and all its resources released.
   * - **SUCCEEDED**   –   Graph creation and data loading succeeded.
   * - **FAILED**   –   Graph creation or data loading failed. When the status is `FAILED`, you can use `get-graphs` to get more information about the state of the graph.
   * - **CANCELLING**   –   Because you cancelled the import task, cancellation is in progress.
   * - **CANCELLED**   –   You have successfully cancelled the import task.
   *
   * @public
   */
  status: ImportTaskStatus | undefined;

  /**
   * Contains options for controlling the import process. For example, if the `failOnError` key is set to `false`, the import skips problem data and attempts to continue (whereas if set to `true`, the default, or if omitted, the import operation halts immediately when an error is encountered.
   *
   * @public
   */
  importOptions?: ImportOptions | undefined;

  /**
   * Contains details about the specified import task.
   *
   * @public
   */
  importTaskDetails?: ImportTaskDetails | undefined;

  /**
   * The number of the current attempts to execute the import task.
   *
   * @public
   */
  attemptNumber?: number | undefined;

  /**
   * The reason that the import task has this status value.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface ListExportTasksInput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier?: string | undefined;

  /**
   * Pagination token used to paginate input.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of export tasks to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides details about an export task.
 *
 * @public
 */
export interface ExportTaskSummary {
  /**
   * The source graph identifier of the export task.
   *
   * @public
   */
  graphId: string | undefined;

  /**
   * The ARN of the IAM role that will allow the data to be exported to the destination.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The unique identifier of the export task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * The current status of the export task.
   *
   * @public
   */
  status: ExportTaskStatus | undefined;

  /**
   * The format of the export task.
   *
   * @public
   */
  format: ExportFormat | undefined;

  /**
   * The Amazon S3 URI of the export task where data will be exported to.
   *
   * @public
   */
  destination: string | undefined;

  /**
   * The KMS key identifier of the export task.
   *
   * @public
   */
  kmsKeyIdentifier: string | undefined;

  /**
   * The parquet type of the export task.
   *
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * The reason that the export task has this status value.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface ListExportTasksOutput {
  /**
   * The requested list of export tasks.
   *
   * @public
   */
  tasks: ExportTaskSummary[] | undefined;

  /**
   * Pagination token used to paginate output.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImportTasksInput {
  /**
   * The unique identifier of the Neptune Analytics graph. When provided, the service returns only import tasks associated with this graph. If not specified, the service returns all import tasks.
   *
   * @public
   */
  graphIdentifier?: string | undefined;

  /**
   * Pagination token used to paginate output.
   *
   * When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The total number of records to return in the command's output.
   *
   * If the total number of records available is more than the value specified, `nextToken` is provided in the command's output. To resume pagination, provide the `nextToken` output value in the `nextToken` argument of a subsequent command. Do not use the `nextToken` response element directly outside of the Amazon CLI.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Details about an import task.
 *
 * @public
 */
export interface ImportTaskSummary {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphId?: string | undefined;

  /**
   * The unique identifier of the import task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot
   *
   * @public
   */
  source: string | undefined;

  /**
   * Specifies the format of S3 data to be imported. Valid values are `CSV`, which identifies the [Gremlin CSV format](https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html) or `OPENCYPHER`, which identies the [openCypher load format](https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html).
   *
   * @public
   */
  format?: Format | undefined;

  /**
   * The parquet type of the import task.
   *
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * The ARN of the IAM role that will allow access to the data that is to be imported.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Status of the import task.
   *
   * @public
   */
  status: ImportTaskStatus | undefined;
}

/**
 * @public
 */
export interface ListImportTasksOutput {
  /**
   * The requested list of import tasks.
   *
   * @public
   */
  tasks: ImportTaskSummary[] | undefined;

  /**
   * Pagination token used to paginate output.
   *
   * When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartExportTaskInput {
  /**
   * The source graph identifier of the export task.
   *
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * The ARN of the IAM role that will allow data to be exported to the destination.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The format of the export task.
   *
   * @public
   */
  format: ExportFormat | undefined;

  /**
   * The Amazon S3 URI where data will be exported to.
   *
   * @public
   */
  destination: string | undefined;

  /**
   * The KMS key identifier of the export task.
   *
   * @public
   */
  kmsKeyIdentifier: string | undefined;

  /**
   * The parquet type of the export task.
   *
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * The export filter of the export task.
   *
   * @public
   */
  exportFilter?: ExportFilter | undefined;

  /**
   * Tags to be applied to the export task.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartExportTaskOutput {
  /**
   * The source graph identifier of the export task.
   *
   * @public
   */
  graphId: string | undefined;

  /**
   * The ARN of the IAM role that will allow data to be exported to the destination.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The unique identifier of the export task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * The current status of the export task.
   *
   * @public
   */
  status: ExportTaskStatus | undefined;

  /**
   * The format of the export task.
   *
   * @public
   */
  format: ExportFormat | undefined;

  /**
   * The Amazon S3 URI of the export task where data will be exported to.
   *
   * @public
   */
  destination: string | undefined;

  /**
   * The KMS key identifier of the export task.
   *
   * @public
   */
  kmsKeyIdentifier: string | undefined;

  /**
   * The parquet type of the export task.
   *
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * The reason that the export task has this status value.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The export filter of the export task.
   *
   * @public
   */
  exportFilter?: ExportFilter | undefined;
}

/**
 * @public
 */
export interface StartImportTaskInput {
  /**
   * Options for how to perform an import.
   *
   * @public
   */
  importOptions?: ImportOptions | undefined;

  /**
   * If set to true, the task halts when an import error is encountered. If set to false, the task skips the data that caused the error and continues if possible.
   *
   * @public
   */
  failOnError?: boolean | undefined;

  /**
   * A URL identifying the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.
   *
   * @public
   */
  source: string | undefined;

  /**
   * Specifies the format of Amazon S3 data to be imported. Valid values are CSV, which identifies the Gremlin CSV format or OPENCYPHER, which identifies the openCypher load format.
   *
   * @public
   */
  format?: Format | undefined;

  /**
   * The parquet type of the import task.
   *
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * The method to handle blank nodes in the dataset. Currently, only `convertToIri` is supported, meaning blank nodes are converted to unique IRIs at load time. Must be provided when format is `ntriples`. For more information, see [Handling RDF values](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/using-rdf-data.html#rdf-handling).
   *
   * @public
   */
  blankNodeHandling?: BlankNodeHandling | undefined;

  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphIdentifier: string | undefined;

  /**
   * The ARN of the IAM role that will allow access to the data that is to be imported.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface StartImportTaskOutput {
  /**
   * The unique identifier of the Neptune Analytics graph.
   *
   * @public
   */
  graphId?: string | undefined;

  /**
   * The unique identifier of the import task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * A URL identifying the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.
   *
   * @public
   */
  source: string | undefined;

  /**
   * Specifies the format of Amazon S3 data to be imported. Valid values are CSV, which identifies the Gremlin CSV format or OPENCYPHER, which identifies the openCypher load format.
   *
   * @public
   */
  format?: Format | undefined;

  /**
   * The parquet type of the import task.
   *
   * @public
   */
  parquetType?: ParquetType | undefined;

  /**
   * The ARN of the IAM role that will allow access to the data that is to be imported.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The status of the import task.
   *
   * @public
   */
  status: ImportTaskStatus | undefined;

  /**
   * Options for how to perform an import.
   *
   * @public
   */
  importOptions?: ImportOptions | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * ARN of the resource whose tag needs to be removed.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Tag keys for the tags to be removed.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
