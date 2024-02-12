// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DocumentType as __DocumentType, StreamingBlobTypes } from "@smithy/types";

import { NeptuneGraphServiceException as __BaseException } from "./NeptuneGraphServiceException";

/**
 * @public
 * <p>Raised in case of an authentication or authorization failure.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface CancelQueryInput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphIdentifier: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the query to cancel.</p>
   */
  queryId: string | undefined;
}

/**
 * @public
 * <p>A failure occurred on the server.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
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
  }
}

/**
 * @public
 * <p>A specified resource could not be located.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * <p>The exception was interrupted by throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
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
  }
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  BAD_REQUEST: "BAD_REQUEST",
  CONSTRAINT_VIOLATION: "CONSTRAINT_VIOLATION",
  ILLEGAL_ARGUMENT: "ILLEGAL_ARGUMENT",
  MALFORMED_QUERY: "MALFORMED_QUERY",
  QUERY_CANCELLED: "QUERY_CANCELLED",
  QUERY_TOO_LARGE: "QUERY_TOO_LARGE",
  UNSUPPORTED_OPERATION: "UNSUPPORTED_OPERATION",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>A resource could not be validated.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason that the resource could not be validated.</p>
   */
  reason?: ValidationExceptionReason;

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
    this.reason = opts.reason;
  }
}

/**
 * @public
 * @enum
 */
export const ConflictExceptionReason = {
  CONCURRENT_MODIFICATION: "CONCURRENT_MODIFICATION",
} as const;

/**
 * @public
 */
export type ConflictExceptionReason = (typeof ConflictExceptionReason)[keyof typeof ConflictExceptionReason];

/**
 * @public
 * <p>Raised when a conflict is encountered.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason for the conflict exception.</p>
   */
  reason?: ConflictExceptionReason;

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
    this.reason = opts.reason;
  }
}

/**
 * @public
 * @enum
 */
export const ExplainMode = {
  DETAILS: "DETAILS",
  STATIC: "STATIC",
} as const;

/**
 * @public
 */
export type ExplainMode = (typeof ExplainMode)[keyof typeof ExplainMode];

/**
 * @public
 * @enum
 */
export const QueryLanguage = {
  OPEN_CYPHER: "OPEN_CYPHER",
} as const;

/**
 * @public
 */
export type QueryLanguage = (typeof QueryLanguage)[keyof typeof QueryLanguage];

/**
 * @public
 * @enum
 */
export const PlanCacheType = {
  AUTO: "AUTO",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type PlanCacheType = (typeof PlanCacheType)[keyof typeof PlanCacheType];

/**
 * @public
 */
export interface ExecuteQueryInput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphIdentifier: string | undefined;

  /**
   * @public
   * <p>The query string to be executed.</p>
   */
  queryString: string | undefined;

  /**
   * @public
   * <p>The query language the query is written in. Currently only openCypher is supported.</p>
   */
  language: QueryLanguage | undefined;

  /**
   * @public
   * <p>The data parameters the query can use in JSON format. For example: \{"name": "john", "age": 20\}. (optional) </p>
   */
  parameters?: Record<string, __DocumentType>;

  /**
   * @public
   * <p>Query plan cache is a feature that saves the query plan and reuses it on successive executions of the same query.
   *       This reduces query latency, and works for both <code>READ</code> and <code>UPDATE</code> queries. The plan cache is an
   *       LRU cache with a 5 minute TTL and a capacity of 1000.</p>
   */
  planCache?: PlanCacheType;

  /**
   * @public
   * <p>The explain mode parameter returns a query explain instead of the actual query results. A query explain can
   *       be used to gather insights about the query execution such as planning decisions, time spent on each operator, solutions
   *       flowing etc.</p>
   */
  explainMode?: ExplainMode;

  /**
   * @public
   * <p>Specifies the query timeout duration, in milliseconds. (optional)</p>
   */
  queryTimeoutMilliseconds?: number;
}

/**
 * @public
 */
export interface ExecuteQueryOutput {
  /**
   * @public
   * <p>The query results.</p>
   */
  payload: StreamingBlobTypes | undefined;
}

/**
 * @public
 * @enum
 */
export const UnprocessableExceptionReason = {
  INTERNAL_LIMIT_EXCEEDED: "INTERNAL_LIMIT_EXCEEDED",
  MEMORY_LIMIT_EXCEEDED: "MEMORY_LIMIT_EXCEEDED",
  PARTITION_FULL: "PARTITION_FULL",
  QUERY_TIMEOUT: "QUERY_TIMEOUT",
  STORAGE_LIMIT_EXCEEDED: "STORAGE_LIMIT_EXCEEDED",
} as const;

/**
 * @public
 */
export type UnprocessableExceptionReason =
  (typeof UnprocessableExceptionReason)[keyof typeof UnprocessableExceptionReason];

/**
 * @public
 * <p>Request cannot be processed due to known reasons. Eg. partition full.</p>
 */
export class UnprocessableException extends __BaseException {
  readonly name: "UnprocessableException" = "UnprocessableException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason for the unprocessable exception.</p>
   */
  reason: UnprocessableExceptionReason | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnprocessableException, __BaseException>) {
    super({
      name: "UnprocessableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnprocessableException.prototype);
    this.reason = opts.reason;
  }
}

/**
 * @public
 * @enum
 */
export const GraphSummaryMode = {
  BASIC: "BASIC",
  DETAILED: "DETAILED",
} as const;

/**
 * @public
 */
export type GraphSummaryMode = (typeof GraphSummaryMode)[keyof typeof GraphSummaryMode];

/**
 * @public
 */
export interface GetGraphSummaryInput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphIdentifier: string | undefined;

  /**
   * @public
   * <p>The summary mode can take one of two values: <code>basic</code> (the default), and
   *    <code>detailed</code>.</p>
   */
  mode?: GraphSummaryMode;
}

/**
 * @public
 * <p>Contains information about an edge in a Neptune Analytics graph.</p>
 */
export interface EdgeStructure {
  /**
   * @public
   * <p>The number of instances of the edge in the graph.</p>
   */
  count?: number;

  /**
   * @public
   * <p>A list of the properties associated with the edge.</p>
   */
  edgeProperties?: string[];
}

/**
 * @public
 * <p>Information about a node.</p>
 */
export interface NodeStructure {
  /**
   * @public
   * <p>The number of instances of this node.</p>
   */
  count?: number;

  /**
   * @public
   * <p>Properties associated with this node.</p>
   */
  nodeProperties?: string[];

  /**
   * @public
   * <p>The outgoing edge labels associated with this node.</p>
   */
  distinctOutgoingEdgeLabels?: string[];
}

/**
 * @public
 * <p>Summary information about the graph.</p>
 */
export interface GraphDataSummary {
  /**
   * @public
   * <p>The number of nodes in the graph.</p>
   */
  numNodes?: number;

  /**
   * @public
   * <p>The number of edges in the graph.</p>
   */
  numEdges?: number;

  /**
   * @public
   * <p>The number of distinct node labels in the graph.</p>
   */
  numNodeLabels?: number;

  /**
   * @public
   * <p>The number of unique edge labels in the graph.</p>
   */
  numEdgeLabels?: number;

  /**
   * @public
   * <p>A list of distinct node labels in the graph.</p>
   */
  nodeLabels?: string[];

  /**
   * @public
   * <p>A list of the edge labels in the graph.</p>
   */
  edgeLabels?: string[];

  /**
   * @public
   * <p>The number of distinct node properties in the graph.</p>
   */
  numNodeProperties?: number;

  /**
   * @public
   * <p>The number of edge properties in the graph.</p>
   */
  numEdgeProperties?: number;

  /**
   * @public
   * <p>A list of the distinct node properties in the graph, along with the count of nodes where each property is used.</p>
   */
  nodeProperties?: Record<string, number>[];

  /**
   * @public
   * <p>A list of the distinct edge properties in the graph, along with the count of edges
   *       where each property is used.</p>
   */
  edgeProperties?: Record<string, number>[];

  /**
   * @public
   * <p>The total number of usages of all node properties.</p>
   */
  totalNodePropertyValues?: number;

  /**
   * @public
   * <p>The total number of usages of all edge properties.</p>
   */
  totalEdgePropertyValues?: number;

  /**
   * @public
   * <p>This field is only present when the requested mode is DETAILED. It contains a list of node structures.</p>
   */
  nodeStructures?: NodeStructure[];

  /**
   * @public
   * <p>This field is only present when the requested mode is DETAILED. It contains a list of edge structures.</p>
   */
  edgeStructures?: EdgeStructure[];
}

/**
 * @public
 */
export interface GetGraphSummaryOutput {
  /**
   * @public
   * <p>Display the version of this tool.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The timestamp, in ISO 8601 format, of the time at which Neptune Analytics last computed statistics.</p>
   */
  lastStatisticsComputationTime?: Date;

  /**
   * @public
   * <p>The graph summary.</p>
   */
  graphSummary?: GraphDataSummary;
}

/**
 * @public
 */
export interface GetQueryInput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the query in question.</p>
   */
  queryId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryState = {
  CANCELLING: "CANCELLING",
  RUNNING: "RUNNING",
  WAITING: "WAITING",
} as const;

/**
 * @public
 */
export type QueryState = (typeof QueryState)[keyof typeof QueryState];

/**
 * @public
 */
export interface GetQueryOutput {
  /**
   * @public
   * <p>The ID of the query in question.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The query in question.</p>
   */
  queryString?: string;

  /**
   * @public
   * <p>Indicates how long the query waited, in milliseconds.</p>
   */
  waited?: number;

  /**
   * @public
   * <p>The number of milliseconds the query has been running.</p>
   */
  elapsed?: number;

  /**
   * @public
   * <p>State of the query.</p>
   */
  state?: QueryState;
}

/**
 * @public
 * <p>Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535</p>
 */
export interface VectorSearchConfiguration {
  /**
   * @public
   * <p>The number of dimensions.</p>
   */
  dimension: number | undefined;
}

/**
 * @public
 */
export interface CreateGraphInput {
  /**
   * @public
   * <p>A name for the new Neptune Analytics graph to be created.</p>
   *          <p>The name must contain from 1 to 63 letters, numbers, or hyphens, and its
   *       first character must be a letter. It cannot end with a hyphen or contain two
   *       consecutive hyphens. </p>
   */
  graphName: string | undefined;

  /**
   * @public
   * <p>Adds metadata tags to the new graph.
   *         These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated.
   *        (<code>true</code> to enable, or <code>false</code> to disable.</p>
   */
  publicConnectivity?: boolean;

  /**
   * @public
   * <p>Specifies a KMS key to use to encrypt data in the new graph.</p>
   */
  kmsKeyIdentifier?: string;

  /**
   * @public
   * <p>Specifies the number of dimensions for vector embeddings that will be loaded into the graph.
   *       The value is specified as <code>dimension=</code>value. Max = 65,535</p>
   */
  vectorSearchConfiguration?: VectorSearchConfiguration;

  /**
   * @public
   * <p>The number of replicas in other AZs. Min =0, Max = 2, Default = 1.</p>
   */
  replicaCount?: number;

  /**
   * @public
   * <p>Indicates whether or not to enable deletion protection on the graph. The graph can’t be deleted when deletion protection is enabled.
   *       (<code>true</code> or <code>false</code>).</p>
   */
  deletionProtection?: boolean;

  /**
   * @public
   * <p>The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Min = 128</p>
   */
  provisionedMemory: number | undefined;
}

/**
 * @public
 * @enum
 */
export const GraphStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  RESETTING: "RESETTING",
  SNAPSHOTTING: "SNAPSHOTTING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type GraphStatus = (typeof GraphStatus)[keyof typeof GraphStatus];

/**
 * @public
 */
export interface CreateGraphOutput {
  /**
   * @public
   * <p>The ID of the graph.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The graph name. For example: <code>my-graph-1</code>.</p>
   *          <p>The name must contain from 1 to 63 letters, numbers, or hyphens, and its
   *       first character must be a letter. It cannot end with a hyphen or contain two
   *       consecutive hyphens. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ARN of the graph.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The current status of the graph.</p>
   */
  status?: GraphStatus;

  /**
   * @public
   * <p>The reason the status was given.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The time when the graph was created.</p>
   */
  createTime?: Date;

  /**
   * @public
   * <p>The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Min = 128</p>
   */
  provisionedMemory?: number;

  /**
   * @public
   * <p>The graph endpoint.</p>
   */
  endpoint?: string;

  /**
   * @public
   * <p>Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated.</p>
   */
  publicConnectivity?: boolean;

  /**
   * @public
   * <p>The vector-search configuration for the graph, which specifies the vector dimension
   *       to use in the vector index, if any.</p>
   */
  vectorSearchConfiguration?: VectorSearchConfiguration;

  /**
   * @public
   * <p>The number of replicas in other AZs.</p>
   */
  replicaCount?: number;

  /**
   * @public
   * <p>Specifies the KMS key used to encrypt data in the new graph.</p>
   */
  kmsKeyIdentifier?: string;

  /**
   * @public
   * <p>The ID of the source graph.</p>
   */
  sourceSnapshotId?: string;

  /**
   * @public
   * <p>A value that indicates whether the graph has deletion protection enabled.
   *       The graph can't be deleted when deletion protection is enabled.</p>
   */
  deletionProtection?: boolean;

  /**
   * @public
   * <p>The build number of the graph software.</p>
   */
  buildNumber?: string;
}

/**
 * @public
 * <p>A service quota was exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier of the resource that exceeded quota.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The type of the resource that exceeded quota. Ex: Graph, Snapshot</p>
   */
  resourceType?: string;

  /**
   * @public
   * <p>The service code that exceeded quota.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>Service quota code of the resource for which quota was exceeded.</p>
   */
  quotaCode?: string;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * @public
 */
export interface DeleteGraphInput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphIdentifier: string | undefined;

  /**
   * @public
   * <p>Determines whether a final graph snapshot is created before the graph is deleted.
   *       If <code>true</code> is specified, no graph snapshot is created. If <code>false</code>
   *       is specified, a graph snapshot is created before the graph is deleted.</p>
   */
  skipSnapshot: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteGraphOutput {
  /**
   * @public
   * <p>The unique identifier of the graph.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the graph.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ARN associated with the graph.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The status of the graph.</p>
   */
  status?: GraphStatus;

  /**
   * @public
   * <p>The reason for the status of the graph.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The time at which the graph was created.</p>
   */
  createTime?: Date;

  /**
   * @public
   * <p>The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.</p>
   */
  provisionedMemory?: number;

  /**
   * @public
   * <p>The graph endpoint.</p>
   */
  endpoint?: string;

  /**
   * @public
   * <p>If <code>true</code>, the graph has a public endpoint, otherwise not.</p>
   */
  publicConnectivity?: boolean;

  /**
   * @public
   * <p>Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535</p>
   */
  vectorSearchConfiguration?: VectorSearchConfiguration;

  /**
   * @public
   * <p>The number of replicas for the graph.</p>
   */
  replicaCount?: number;

  /**
   * @public
   * <p>The ID of the KMS key used to encrypt and decrypt graph data.</p>
   */
  kmsKeyIdentifier?: string;

  /**
   * @public
   * <p>The ID of the snapshot from which the graph was created, if the graph was recovered from a snapshot.</p>
   */
  sourceSnapshotId?: string;

  /**
   * @public
   * <p>If <code>true</code>, deletion protection was enabled for the graph.</p>
   */
  deletionProtection?: boolean;

  /**
   * @public
   * <p>The build number associated with the graph.</p>
   */
  buildNumber?: string;
}

/**
 * @public
 */
export interface GetGraphInput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetGraphOutput {
  /**
   * @public
   * <p>The unique identifier of the graph.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the graph.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ARN associated with the graph.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The status of the graph.</p>
   */
  status?: GraphStatus;

  /**
   * @public
   * <p>The reason that the graph has this status.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The time at which the graph was created.</p>
   */
  createTime?: Date;

  /**
   * @public
   * <p>The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.</p>
   */
  provisionedMemory?: number;

  /**
   * @public
   * <p>The graph endpoint.</p>
   */
  endpoint?: string;

  /**
   * @public
   * <p>If <code>true</code>, the graph has a public endpoint, otherwise not.</p>
   */
  publicConnectivity?: boolean;

  /**
   * @public
   * <p>Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535</p>
   */
  vectorSearchConfiguration?: VectorSearchConfiguration;

  /**
   * @public
   * <p>The number of replicas for the graph.</p>
   */
  replicaCount?: number;

  /**
   * @public
   * <p>The ID of the KMS key used to encrypt and decrypt graph data.</p>
   */
  kmsKeyIdentifier?: string;

  /**
   * @public
   * <p>The ID of the snapshot from which the graph was created, if it was created from a snapshot.</p>
   */
  sourceSnapshotId?: string;

  /**
   * @public
   * <p>If <code>true</code>, deletion protection is enabled for the graph.</p>
   */
  deletionProtection?: boolean;

  /**
   * @public
   * <p>The build number of the graph.</p>
   */
  buildNumber?: string;
}

/**
 * @public
 */
export interface ListGraphsInput {
  /**
   * @public
   * <p>Pagination token used to paginate output.</p>
   *          <p>When this value is provided as input, the service returns results from where
   *       the previous response left off. When this value is present in output, it indicates
   *       that there are more results to retrieve.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The total number of records to return in the command's output.</p>
   *          <p>If the total number of records available is more than the value specified,
   *       <code>nextToken</code> is provided in the command's output. To resume pagination,
   *       provide the <code>nextToken</code> output value in the <code>nextToken</code> argument
   *       of a subsequent command. Do not use the <code>nextToken</code> response element directly
   *       outside of the Amazon CLI.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary details about a graph.</p>
 */
export interface GraphSummary {
  /**
   * @public
   * <p>The unique identifier of the graph.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the graph.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ARN associated with the graph.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The status of the graph.</p>
   */
  status?: GraphStatus;

  /**
   * @public
   * <p>The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.</p>
   */
  provisionedMemory?: number;

  /**
   * @public
   * <p>If <code>true</code>, the graph has a public endpoint, otherwise not.</p>
   */
  publicConnectivity?: boolean;

  /**
   * @public
   * <p>The graph endpoint.</p>
   */
  endpoint?: string;

  /**
   * @public
   * <p>The number of replicas for the graph.</p>
   */
  replicaCount?: number;

  /**
   * @public
   * <p>The ID of the KMS key used to encrypt and decrypt graph data.</p>
   */
  kmsKeyIdentifier?: string;

  /**
   * @public
   * <p>If <code>true</code>, deletion protection is enabled for the graph.</p>
   */
  deletionProtection?: boolean;
}

/**
 * @public
 */
export interface ListGraphsOutput {
  /**
   * @public
   * <p>A list of the graphs.</p>
   */
  graphs: GraphSummary[] | undefined;

  /**
   * @public
   * <p>Pagination token used to paginate output.</p>
   *          <p>When this value is provided as input, the service returns results from where
   *       the previous response left off. When this value is present in output, it indicates
   *       that there are more results to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ResetGraphInput {
  /**
   * @public
   * <p>ID of the graph to reset.</p>
   */
  graphIdentifier: string | undefined;

  /**
   * @public
   * <p>Determines whether a final graph snapshot is created before the graph data is deleted.
   *       If set to <code>true</code>, no graph snapshot is created. If set to <code>false</code>,
   *       a graph snapshot is created before the data is deleted.</p>
   */
  skipSnapshot: boolean | undefined;
}

/**
 * @public
 */
export interface ResetGraphOutput {
  /**
   * @public
   * <p>The unique identifier of the graph.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the graph.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ARN associated with the graph.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The status of the graph.</p>
   */
  status?: GraphStatus;

  /**
   * @public
   * <p>The reason that the graph has this status.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The time at which the graph was created.</p>
   */
  createTime?: Date;

  /**
   * @public
   * <p>The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.</p>
   */
  provisionedMemory?: number;

  /**
   * @public
   * <p>The graph endpoint.</p>
   */
  endpoint?: string;

  /**
   * @public
   * <p>If <code>true</code>, the graph has a public endpoint, otherwise not.</p>
   */
  publicConnectivity?: boolean;

  /**
   * @public
   * <p>Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535</p>
   */
  vectorSearchConfiguration?: VectorSearchConfiguration;

  /**
   * @public
   * <p>The number of replicas for the graph.</p>
   */
  replicaCount?: number;

  /**
   * @public
   * <p>The ID of the KMS key used to encrypt and decrypt graph data.</p>
   */
  kmsKeyIdentifier?: string;

  /**
   * @public
   * <p>The ID of the snapshot from which the graph was created, if any.</p>
   */
  sourceSnapshotId?: string;

  /**
   * @public
   * <p>If <code>true</code>, deletion protection is enabled for the graph.</p>
   */
  deletionProtection?: boolean;

  /**
   * @public
   * <p>The build number of the graph.</p>
   */
  buildNumber?: string;
}

/**
 * @public
 */
export interface RestoreGraphFromSnapshotInput {
  /**
   * @public
   * <p>The ID of the snapshot in question.</p>
   */
  snapshotIdentifier: string | undefined;

  /**
   * @public
   * <p>A name for the new Neptune Analytics graph to be created from the snapshot.</p>
   *          <p>The name must contain from 1 to 63 letters, numbers, or hyphens, and its
   *       first character must be a letter. It cannot end with a hyphen or contain two
   *       consecutive hyphens. </p>
   */
  graphName: string | undefined;

  /**
   * @public
   * <p>The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Min = 128</p>
   */
  provisionedMemory?: number;

  /**
   * @public
   * <p>A value that indicates whether the graph has deletion protection enabled.
   *       The graph can't be deleted when deletion protection is enabled.</p>
   */
  deletionProtection?: boolean;

  /**
   * @public
   * <p>Adds metadata tags to the snapshot.
   *         These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The number of replicas in other AZs. Min =0, Max = 2, Default =1</p>
   */
  replicaCount?: number;

  /**
   * @public
   * <p>Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated.
   *       (<code>true</code> to enable, or <code>false</code> to disable).</p>
   */
  publicConnectivity?: boolean;
}

/**
 * @public
 */
export interface RestoreGraphFromSnapshotOutput {
  /**
   * @public
   * <p>The unique identifier of the graph.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the graph.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ARN associated with the graph.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The status of the graph.</p>
   */
  status?: GraphStatus;

  /**
   * @public
   * <p>The reason that the graph has this status.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The time at which the graph was created.</p>
   */
  createTime?: Date;

  /**
   * @public
   * <p>The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.</p>
   */
  provisionedMemory?: number;

  /**
   * @public
   * <p>The graph endpoint.</p>
   */
  endpoint?: string;

  /**
   * @public
   * <p>If <code>true</code>, the graph has a public endpoint, otherwise not.</p>
   */
  publicConnectivity?: boolean;

  /**
   * @public
   * <p>Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535</p>
   */
  vectorSearchConfiguration?: VectorSearchConfiguration;

  /**
   * @public
   * <p>The number of replicas for the graph.</p>
   */
  replicaCount?: number;

  /**
   * @public
   * <p>The ID of the KMS key used to encrypt and decrypt graph data.</p>
   */
  kmsKeyIdentifier?: string;

  /**
   * @public
   * <p>The ID of the snapshot from which the graph was created, if any.</p>
   */
  sourceSnapshotId?: string;

  /**
   * @public
   * <p>If <code>true</code>, deletion protection is enabled for the graph.</p>
   */
  deletionProtection?: boolean;

  /**
   * @public
   * <p>The build number of the graph.</p>
   */
  buildNumber?: string;
}

/**
 * @public
 */
export interface UpdateGraphInput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphIdentifier: string | undefined;

  /**
   * @public
   * <p>Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated.
   *       (<code>true</code> to enable, or <code>false</code> to disable.</p>
   */
  publicConnectivity?: boolean;

  /**
   * @public
   * <p>The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Min = 128</p>
   */
  provisionedMemory?: number;

  /**
   * @public
   * <p>A value that indicates whether the graph has deletion protection enabled.
   *       The graph can't be deleted when deletion protection is enabled.</p>
   */
  deletionProtection?: boolean;
}

/**
 * @public
 */
export interface UpdateGraphOutput {
  /**
   * @public
   * <p>The unique identifier of the graph.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the graph.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ARN associated with the graph.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The status of the graph.</p>
   */
  status?: GraphStatus;

  /**
   * @public
   * <p>The reason that the graph has this status.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The time at which the graph was created.</p>
   */
  createTime?: Date;

  /**
   * @public
   * <p>The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.</p>
   */
  provisionedMemory?: number;

  /**
   * @public
   * <p>The graph endpoint.</p>
   */
  endpoint?: string;

  /**
   * @public
   * <p>If <code>true</code>, the graph has a public endpoint, otherwise not.</p>
   */
  publicConnectivity?: boolean;

  /**
   * @public
   * <p>Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535</p>
   */
  vectorSearchConfiguration?: VectorSearchConfiguration;

  /**
   * @public
   * <p>The number of replicas for the graph.</p>
   */
  replicaCount?: number;

  /**
   * @public
   * <p>The ID of the KMS key used to encrypt and decrypt graph data.</p>
   */
  kmsKeyIdentifier?: string;

  /**
   * @public
   * <p>The ID of the snapshot from which the graph was created, if any.</p>
   */
  sourceSnapshotId?: string;

  /**
   * @public
   * <p>If <code>true</code>, deletion protection is enabled for the graph.</p>
   */
  deletionProtection?: boolean;

  /**
   * @public
   * <p>The build number of the graph.</p>
   */
  buildNumber?: string;
}

/**
 * @public
 * @enum
 */
export const QueryStateInput = {
  ALL: "ALL",
  CANCELLING: "CANCELLING",
  RUNNING: "RUNNING",
  WAITING: "WAITING",
} as const;

/**
 * @public
 */
export type QueryStateInput = (typeof QueryStateInput)[keyof typeof QueryStateInput];

/**
 * @public
 */
export interface ListQueriesInput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphIdentifier: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to be fetched by the API.</p>
   */
  maxResults: number | undefined;

  /**
   * @public
   * <p>Filtered list of queries based on state.</p>
   */
  state?: QueryStateInput;
}

/**
 * @public
 * <p>Details of the query listed.</p>
 */
export interface QuerySummary {
  /**
   * @public
   * <p>A string representation of the id of the query.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The actual query text. The <code>queryString</code> may be truncated if the actual query string is too long.</p>
   */
  queryString?: string;

  /**
   * @public
   * <p>The amount of time, in milliseconds, the query has waited in the queue before being picked up by a worker thread.</p>
   */
  waited?: number;

  /**
   * @public
   * <p>The running time of the query, in milliseconds.</p>
   */
  elapsed?: number;

  /**
   * @public
   * <p>State of the query.</p>
   */
  state?: QueryState;
}

/**
 * @public
 */
export interface ListQueriesOutput {
  /**
   * @public
   * <p>A list of current openCypher queries.</p>
   */
  queries: QuerySummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>The list of metadata tags associated with the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePrivateGraphEndpointInput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphIdentifier: string | undefined;

  /**
   * @public
   * <p> The VPC in which the private graph endpoint needs to be created.</p>
   */
  vpcId?: string;

  /**
   * @public
   * <p>Subnets in which private graph endpoint ENIs are created.</p>
   */
  subnetIds?: string[];

  /**
   * @public
   * <p>Security groups to be attached to the private graph endpoint..</p>
   */
  vpcSecurityGroupIds?: string[];
}

/**
 * @public
 * @enum
 */
export const PrivateGraphEndpointStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type PrivateGraphEndpointStatus = (typeof PrivateGraphEndpointStatus)[keyof typeof PrivateGraphEndpointStatus];

/**
 * @public
 */
export interface CreatePrivateGraphEndpointOutput {
  /**
   * @public
   * <p>VPC in which the private graph endpoint is created.</p>
   */
  vpcId: string | undefined;

  /**
   * @public
   * <p>Subnets in which the private graph endpoint ENIs are created. </p>
   */
  subnetIds: string[] | undefined;

  /**
   * @public
   * <p>Status of the private graph endpoint.</p>
   */
  status: PrivateGraphEndpointStatus | undefined;

  /**
   * @public
   * <p>Endpoint ID of the prviate grpah endpoint.</p>
   */
  vpcEndpointId?: string;
}

/**
 * @public
 */
export interface DeletePrivateGraphEndpointInput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC where the private endpoint is located.</p>
   */
  vpcId: string | undefined;
}

/**
 * @public
 */
export interface DeletePrivateGraphEndpointOutput {
  /**
   * @public
   * <p>The ID of the VPC where the private endpoint was deleted.</p>
   */
  vpcId: string | undefined;

  /**
   * @public
   * <p>The subnet IDs involved.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * @public
   * <p>The status of the delete operation.</p>
   */
  status: PrivateGraphEndpointStatus | undefined;

  /**
   * @public
   * <p>The ID of the VPC endpoint that was deleted.</p>
   */
  vpcEndpointId?: string;
}

/**
 * @public
 */
export interface GetPrivateGraphEndpointInput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC where the private endpoint is located.</p>
   */
  vpcId: string | undefined;
}

/**
 * @public
 */
export interface GetPrivateGraphEndpointOutput {
  /**
   * @public
   * <p>The ID of the VPC where the private endpoint is located.</p>
   */
  vpcId: string | undefined;

  /**
   * @public
   * <p>The subnet IDs involved.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * @public
   * <p>The current status of the private endpoint.</p>
   */
  status: PrivateGraphEndpointStatus | undefined;

  /**
   * @public
   * <p>The ID of the private endpoint.</p>
   */
  vpcEndpointId?: string;
}

/**
 * @public
 */
export interface ListPrivateGraphEndpointsInput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphIdentifier: string | undefined;

  /**
   * @public
   * <p>Pagination token used to paginate output.</p>
   *          <p>When this value is provided as input, the service returns results from where
   *       the previous response left off. When this value is present in output, it indicates
   *       that there are more results to retrieve.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The total number of records to return in the command's output.</p>
   *          <p>If the total number of records available is more than the value specified,
   *       <code>nextToken</code> is provided in the command's output. To resume pagination,
   *       provide the <code>nextToken</code> output value in the <code>nextToken</code> argument
   *       of a subsequent command. Do not use the <code>nextToken</code> response element directly
   *       outside of the Amazon CLI.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Details about a private graph endpoint.</p>
 */
export interface PrivateGraphEndpointSummary {
  /**
   * @public
   * <p>The ID of the VPC in which the private graph endpoint is located.</p>
   */
  vpcId: string | undefined;

  /**
   * @public
   * <p>The subnet IDs associated with the private graph endpoint.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * @public
   * <p>The status of the private graph endpoint.</p>
   */
  status: PrivateGraphEndpointStatus | undefined;

  /**
   * @public
   * <p>The ID of the VPC endpoint.</p>
   */
  vpcEndpointId?: string;
}

/**
 * @public
 */
export interface ListPrivateGraphEndpointsOutput {
  /**
   * @public
   * <p>A list of private endpoints for the specified Neptune Analytics graph.</p>
   */
  privateGraphEndpoints: PrivateGraphEndpointSummary[] | undefined;

  /**
   * @public
   * <p>Pagination token used to paginate output.</p>
   *          <p>When this value is provided as input, the service returns results from where
   *       the previous response left off. When this value is present in output, it indicates
   *       that there are more results to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface CreateGraphSnapshotInput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphIdentifier: string | undefined;

  /**
   * @public
   * <p>The snapshot name. For example: <code>my-snapshot-1</code>.</p>
   *          <p>The name must contain from 1 to 63 letters, numbers, or hyphens, and its
   *       first character must be a letter. It cannot end with a hyphen or contain two
   *       consecutive hyphens.</p>
   */
  snapshotName: string | undefined;

  /**
   * @public
   * <p>Adds metadata tags to the new graph.
   *         These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const SnapshotStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type SnapshotStatus = (typeof SnapshotStatus)[keyof typeof SnapshotStatus];

/**
 * @public
 */
export interface CreateGraphSnapshotOutput {
  /**
   * @public
   * <p>The ID of the snapshot created.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the snapshot created.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ARN of the snapshot created.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The Id of the Neptune Analytics graph from which the snapshot is created.</p>
   */
  sourceGraphId?: string;

  /**
   * @public
   * <p>The snapshot creation time</p>
   */
  snapshotCreateTime?: Date;

  /**
   * @public
   * <p>The current state of the snapshot.</p>
   */
  status?: SnapshotStatus;

  /**
   * @public
   * <p>The ID of the KMS key used to encrypt and decrypt graph data.</p>
   */
  kmsKeyIdentifier?: string;
}

/**
 * @public
 */
export interface DeleteGraphSnapshotInput {
  /**
   * @public
   * <p>ID of the graph snapshot to be deleted.</p>
   */
  snapshotIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGraphSnapshotOutput {
  /**
   * @public
   * <p>The unique identifier of the graph snapshot.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The snapshot name. For example: <code>my-snapshot-1</code>.</p>
   *          <p>The name must contain from 1 to 63 letters, numbers, or hyphens, and its
   *       first character must be a letter. It cannot end with a hyphen or contain two
   *       consecutive hyphens.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ARN of the graph snapshot.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The graph identifier for the graph from which the snapshot was created.</p>
   */
  sourceGraphId?: string;

  /**
   * @public
   * <p>The time when the snapshot was created.</p>
   */
  snapshotCreateTime?: Date;

  /**
   * @public
   * <p>The status of the graph snapshot.</p>
   */
  status?: SnapshotStatus;

  /**
   * @public
   * <p>The ID of the KMS key used to encrypt and decrypt the snapshot.</p>
   */
  kmsKeyIdentifier?: string;
}

/**
 * @public
 */
export interface GetGraphSnapshotInput {
  /**
   * @public
   * <p>The ID of the snapshot to retrieve.</p>
   */
  snapshotIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetGraphSnapshotOutput {
  /**
   * @public
   * <p>The unique identifier of the graph snapshot.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The snapshot name. For example: <code>my-snapshot-1</code>.</p>
   *          <p>The name must contain from 1 to 63 letters, numbers, or hyphens, and its
   *       first character must be a letter. It cannot end with a hyphen or contain two
   *       consecutive hyphens.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ARN of the graph snapshot.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The graph identifier for the graph for which a snapshot is to be created.</p>
   */
  sourceGraphId?: string;

  /**
   * @public
   * <p>The time when the snapshot was created.</p>
   */
  snapshotCreateTime?: Date;

  /**
   * @public
   * <p>The status of the graph snapshot.</p>
   */
  status?: SnapshotStatus;

  /**
   * @public
   * <p>The ID of the KMS key used to encrypt and decrypt the snapshot.</p>
   */
  kmsKeyIdentifier?: string;
}

/**
 * @public
 */
export interface ListGraphSnapshotsInput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphIdentifier?: string;

  /**
   * @public
   * <p>Pagination token used to paginate output.</p>
   *          <p>When this value is provided as input, the service returns results from where
   *       the previous response left off. When this value is present in output, it indicates
   *       that there are more results to retrieve.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The total number of records to return in the command's output.</p>
   *          <p>If the total number of records available is more than the value specified,
   *       <code>nextToken</code> is provided in the command's output. To resume pagination,
   *       provide the <code>nextToken</code> output value in the <code>nextToken</code> argument
   *       of a subsequent command. Do not use the <code>nextToken</code> response element directly
   *       outside of the Amazon CLI.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Details about a graph snapshot.</p>
 */
export interface GraphSnapshotSummary {
  /**
   * @public
   * <p>The unique identifier of the graph snapshot.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The snapshot name. For example: <code>my-snapshot-1</code>.</p>
   *          <p>The name must contain from 1 to 63 letters, numbers, or hyphens, and its
   *       first character must be a letter. It cannot end with a hyphen or contain two
   *       consecutive hyphens.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ARN of the graph snapshot.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The graph identifier for the graph for which a snapshot is to be created.</p>
   */
  sourceGraphId?: string;

  /**
   * @public
   * <p>The time when the snapshot was created.</p>
   */
  snapshotCreateTime?: Date;

  /**
   * @public
   * <p>The status of the graph snapshot.</p>
   */
  status?: SnapshotStatus;

  /**
   * @public
   * <p>The ID of the KMS key used to encrypt and decrypt the snapshot.</p>
   */
  kmsKeyIdentifier?: string;
}

/**
 * @public
 */
export interface ListGraphSnapshotsOutput {
  /**
   * @public
   * <p>The requested list of snapshots.</p>
   */
  graphSnapshots: GraphSnapshotSummary[] | undefined;

  /**
   * @public
   * <p>Pagination token used to paginate output.</p>
   *          <p>When this value is provided as input, the service returns results from where
   *       the previous response left off. When this value is present in output, it indicates
   *       that there are more results to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>ARN of the resource for which tags need to be added.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the Neptune Analytics resource.</p>
   *          <p>The tags are metadata that are specified as a list of key-value pairs:</p>
   *          <p>
   *             <b>Key</b> (string)   –
   *        A key is the required name of the tag. The string value can be
   *        from 1 to 128 Unicode characters in length. It can't be
   *        prefixed with <code>aws:</code> and can only contain the
   *        set of Unicode characters specified by this Java regular expression:
   *      <code>"^([\p\{L\}\p\{Z\}\p\{N\}_.:/=+\-]*)$")</code>.</p>
   *          <p>
   *             <b>Value</b> (string)   –
   *        A value is the optional value of the tag. The string value can
   *        be from 1 to 256 Unicode characters in length. It can't be
   *        prefixed with <code>aws:</code> and can only contain the
   *        set of Unicode characters specified by this Java regular expression:
   *      <code>"^([\p\{L\}\p\{Z\}\p\{N\}_.:/=+\-]*)$")</code>.</p>
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
export interface CancelImportTaskInput {
  /**
   * @public
   * <p>The unique identifier of the import task.</p>
   */
  taskIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Format = {
  CSV: "CSV",
  OPEN_CYPHER: "OPEN_CYPHER",
} as const;

/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * @enum
 */
export const ImportTaskStatus = {
  ANALYZING_DATA: "ANALYZING_DATA",
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  EXPORTING: "EXPORTING",
  FAILED: "FAILED",
  IMPORTING: "IMPORTING",
  INITIALIZING: "INITIALIZING",
  REPROVISIONING: "REPROVISIONING",
  ROLLING_BACK: "ROLLING_BACK",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ImportTaskStatus = (typeof ImportTaskStatus)[keyof typeof ImportTaskStatus];

/**
 * @public
 */
export interface CancelImportTaskOutput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphId?: string;

  /**
   * @public
   * <p>The unique identifier of the import task.</p>
   */
  taskId: string | undefined;

  /**
   * @public
   * <p>A URL identifying to the location of the data to be imported. This can be an Amazon S3 path,
   *       or can point to a Neptune database endpoint or snapshot.</p>
   */
  source: string | undefined;

  /**
   * @public
   * <p>Specifies the format of S3 data to be imported. Valid values are <code>CSV</code>, which identifies
   *       the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html">Gremlin
   *       CSV format</a> or <code>OPENCYPHER</code>, which identies the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html">openCypher
   *       load format</a>.</p>
   */
  format?: Format;

  /**
   * @public
   * <p>The ARN of the IAM role that will allow access to the data that is to be imported.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>Current status of the task. Status is CANCELLING when the import task is cancelled.</p>
   */
  status: ImportTaskStatus | undefined;
}

/**
 * @public
 * <p>Options for how to import Neptune data.</p>
 */
export interface NeptuneImportOptions {
  /**
   * @public
   * <p>The path to an S3 bucket from which to import data.</p>
   */
  s3ExportPath: string | undefined;

  /**
   * @public
   * <p>The KMS key to use to encrypt data in the S3 bucket where the graph data is exported</p>
   */
  s3ExportKmsKeyId: string | undefined;

  /**
   * @public
   * <p>Neptune Analytics supports label-less vertices and no labels are assigned unless one is explicitly
   *            provided. Neptune assigns default labels when none is explicitly provided. When importing the data into
   *            Neptune Analytics, the default vertex labels can be omitted by setting
   *            <i>preserveDefaultVertexLabels</i> to false. Note that if the vertex only has default labels,
   *            and has no other properties or edges, then the vertex will effectively not get
   *            imported into Neptune Analytics when preserveDefaultVertexLabels is set to false.</p>
   */
  preserveDefaultVertexLabels?: boolean;

  /**
   * @public
   * <p>Neptune Analytics currently does not support user defined edge ids. The edge ids are not imported by
   *           default. They are imported if <i>preserveEdgeIds</i> is set to true, and ids are stored as
   *           properties on the relationships with the property name <i>neptuneEdgeId</i>.</p>
   */
  preserveEdgeIds?: boolean;
}

/**
 * @public
 * <p>Options for how to perform an import.</p>
 */
export type ImportOptions = ImportOptions.NeptuneMember | ImportOptions.$UnknownMember;

/**
 * @public
 */
export namespace ImportOptions {
  /**
   * @public
   * <p>Options for importing data from a Neptune database.</p>
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

  export interface Visitor<T> {
    neptune: (value: NeptuneImportOptions) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ImportOptions, visitor: Visitor<T>): T => {
    if (value.neptune !== undefined) return visitor.neptune(value.neptune);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateGraphUsingImportTaskInput {
  /**
   * @public
   * <p>A name for the new Neptune Analytics graph to be created.</p>
   *          <p>The name must contain from 1 to 63 letters, numbers, or hyphens, and its
   *       first character must be a letter. It cannot end with a hyphen or contain two
   *       consecutive hyphens. </p>
   */
  graphName: string | undefined;

  /**
   * @public
   * <p>Adds metadata tags to the new graph. These tags can also be used with cost allocation
   *      reporting, or used in a Condition statement in an IAM policy.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated.
   *        (<code>true</code> to enable, or <code>false</code> to disable).</p>
   */
  publicConnectivity?: boolean;

  /**
   * @public
   * <p>Specifies a KMS key to use to encrypt data imported into the new graph.</p>
   */
  kmsKeyIdentifier?: string;

  /**
   * @public
   * <p>Specifies the number of dimensions for vector embeddings that will be loaded into the graph.
   *     The value is specified as <code>dimension=</code>value. Max = 65,535 </p>
   */
  vectorSearchConfiguration?: VectorSearchConfiguration;

  /**
   * @public
   * <p>The number of replicas in other AZs to provision on the new graph after import. Default = 0, Min = 0, Max = 2.</p>
   */
  replicaCount?: number;

  /**
   * @public
   * <p>Indicates whether or not to enable deletion protection on the graph. The graph can’t be deleted when deletion protection is enabled.
   *       (<code>true</code> or <code>false</code>).</p>
   */
  deletionProtection?: boolean;

  /**
   * @public
   * <p>Contains options for controlling the import process. For example, if the <code>failOnError</code> key
   *       is set to <code>false</code>, the import skips problem data and attempts to continue (whereas if set to
   *     <code>true</code>, the default, or if omitted, the import operation halts immediately when an error is
   *       encountered.</p>
   */
  importOptions?: ImportOptions;

  /**
   * @public
   * <p>The maximum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 1024,
   *        or the approved upper limit for your account.</p>
   *          <p> If both the minimum and maximum values are specified, the max of the
   *     <code>min-provisioned-memory</code> and <code>max-provisioned memory</code> is
   *       used to create the graph. If neither value is specified 128 m-NCUs are used.</p>
   */
  maxProvisionedMemory?: number;

  /**
   * @public
   * <p>The minimum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 128</p>
   */
  minProvisionedMemory?: number;

  /**
   * @public
   * <p>If set to <code>true</code>, the task halts when an import error is encountered. If set to <code>false</code>,
   *       the task skips the data that caused the error and continues if possible.</p>
   */
  failOnError?: boolean;

  /**
   * @public
   * <p>A URL identifying to the location of the data to be imported. This can be an Amazon S3 path,
   *       or can point to a Neptune database endpoint or snapshot.</p>
   */
  source: string | undefined;

  /**
   * @public
   * <p>Specifies the format of S3 data to be imported. Valid values are <code>CSV</code>, which identifies
   *       the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html">Gremlin
   *       CSV format</a> or <code>OPENCYPHER</code>, which identies the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html">openCypher
   *       load format</a>.</p>
   */
  format?: Format;

  /**
   * @public
   * <p>The ARN of the IAM role that will allow access to the data that is to be imported.</p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateGraphUsingImportTaskOutput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphId?: string;

  /**
   * @public
   * <p>The unique identifier of the import task.</p>
   */
  taskId: string | undefined;

  /**
   * @public
   * <p>A URL identifying to the location of the data to be imported. This can be an Amazon S3 path,
   *       or can point to a Neptune database endpoint or snapshot.</p>
   */
  source: string | undefined;

  /**
   * @public
   * <p>Specifies the format of S3 data to be imported. Valid values are <code>CSV</code>, which identifies
   *       the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html">Gremlin
   *       CSV format</a> or <code>OPENCYPHER</code>, which identies the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html">openCypher
   *       load format</a>.</p>
   */
  format?: Format;

  /**
   * @public
   * <p>The ARN of the IAM role that will allow access to the data that is to be imported.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The status of the import task.</p>
   */
  status: ImportTaskStatus | undefined;

  /**
   * @public
   * <p>Contains options for controlling the import process. For example, if the <code>failOnError</code> key
   *       is set to <code>false</code>, the import skips problem data and attempts to continue (whereas if set to
   *     <code>true</code>, the default, or if omitted, the import operation halts immediately when an error is
   *       encountered.</p>
   */
  importOptions?: ImportOptions;
}

/**
 * @public
 */
export interface GetImportTaskInput {
  /**
   * @public
   * <p>The unique identifier of the import task.</p>
   */
  taskIdentifier: string | undefined;
}

/**
 * @public
 * <p>Contains details about an import task.</p>
 */
export interface ImportTaskDetails {
  /**
   * @public
   * <p>Status of the import task.</p>
   */
  status: string | undefined;

  /**
   * @public
   * <p>Time at which the import task started.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>Seconds elapsed since the import task started.</p>
   */
  timeElapsedSeconds: number | undefined;

  /**
   * @public
   * <p>The percentage progress so far.</p>
   */
  progressPercentage: number | undefined;

  /**
   * @public
   * <p>The number of errors encountered so far.</p>
   */
  errorCount: number | undefined;

  /**
   * @public
   * <p>Details about the errors that have been encountered.</p>
   */
  errorDetails?: string;

  /**
   * @public
   * <p>The number of statements in the import task.</p>
   */
  statementCount: number | undefined;

  /**
   * @public
   * <p>The number of dictionary entries in the import task.</p>
   */
  dictionaryEntryCount: number | undefined;
}

/**
 * @public
 */
export interface GetImportTaskOutput {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphId?: string;

  /**
   * @public
   * <p>The unique identifier of the import task.</p>
   */
  taskId: string | undefined;

  /**
   * @public
   * <p>A URL identifying to the location of the data to be imported. This can be an Amazon S3 path,
   *       or can point to a Neptune database endpoint or snapshot</p>
   */
  source: string | undefined;

  /**
   * @public
   * <p>Specifies the format of S3 data to be imported. Valid values are <code>CSV</code>, which identifies
   *       the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html">Gremlin
   *       CSV format</a> or <code>OPENCYPHER</code>, which identies the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html">openCypher
   *       load format</a>.</p>
   */
  format?: Format;

  /**
   * @public
   * <p>The ARN of the IAM role that will allow access to the data that is to be imported.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The status of the import task:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>INITIALIZING</b>   –
   *         The necessary resources needed to create the graph are being prepared.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ANALYZING_DATA</b>   –
   *         The data is being analyzed to determine the optimal infrastructure configuration
   *         for the new graph.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>RE_PROVISIONING</b>   –
   *         The data did not fit into the provisioned graph, so it is being re-provisioned
   *         with more capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IMPORTING</b>   –
   *         The data is being loaded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ERROR_ENCOUNTERED</b>   –
   *         An error has been encountered while trying to create the graph and import the data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ERROR_ENCOUNTERED_ROLLING_BACK</b>   –
   *         Because of the error that was encountered, the graph is being rolled back and all
   *         its resources released.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SUCCEEDED</b>   –
   *         Graph creation and data loading succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAILED</b>   –
   *         Graph creation or data loading failed. When the status is <code>FAILED</code>,
   *         you can use <code>get-graphs</code> to get more information about the state of
   *         the graph.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELLING</b>   –
   *         Because you cancelled the import task, cancellation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELLED</b>   –
   *         You have successfully cancelled the import task.</p>
   *             </li>
   *          </ul>
   */
  status: ImportTaskStatus | undefined;

  /**
   * @public
   * <p>Contains options for controlling the import process. For example, if the <code>failOnError</code> key
   *       is set to <code>false</code>, the import skips problem data and attempts to continue (whereas if set to
   *     <code>true</code>, the default, or if omitted, the import operation halts immediately when an error is
   *       encountered.</p>
   */
  importOptions?: ImportOptions;

  /**
   * @public
   * <p>Contains details about the specified import task.</p>
   */
  importTaskDetails?: ImportTaskDetails;

  /**
   * @public
   * <p>The number of the current attempt to execute the import task.</p>
   */
  attemptNumber?: number;

  /**
   * @public
   * <p>The reason that the import task has this status value.</p>
   */
  statusReason?: string;
}

/**
 * @public
 */
export interface ListImportTasksInput {
  /**
   * @public
   * <p>Pagination token used to paginate output.</p>
   *          <p>When this value is provided as input, the service returns results from where
   *       the previous response left off. When this value is present in output, it indicates
   *       that there are more results to retrieve.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The total number of records to return in the command's output.</p>
   *          <p>If the total number of records available is more than the value specified,
   *       <code>nextToken</code> is provided in the command's output. To resume pagination,
   *       provide the <code>nextToken</code> output value in the <code>nextToken</code> argument
   *       of a subsequent command. Do not use the <code>nextToken</code> response element directly
   *       outside of the Amazon CLI.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Details about an import task.</p>
 */
export interface ImportTaskSummary {
  /**
   * @public
   * <p>The unique identifier of the Neptune Analytics graph.</p>
   */
  graphId?: string;

  /**
   * @public
   * <p>The unique identifier of the import task.</p>
   */
  taskId: string | undefined;

  /**
   * @public
   * <p>A URL identifying to the location of the data to be imported. This can be an Amazon S3 path,
   *       or can point to a Neptune database endpoint or snapshot</p>
   */
  source: string | undefined;

  /**
   * @public
   * <p>Specifies the format of S3 data to be imported. Valid values are <code>CSV</code>, which identifies
   *       the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html">Gremlin
   *       CSV format</a> or <code>OPENCYPHER</code>, which identies the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html">openCypher
   *       load format</a>.</p>
   */
  format?: Format;

  /**
   * @public
   * <p>The ARN of the IAM role that will allow access to the data that is to be imported.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>Status of the import task.</p>
   */
  status: ImportTaskStatus | undefined;
}

/**
 * @public
 */
export interface ListImportTasksOutput {
  /**
   * @public
   * <p>The requested list of import tasks.</p>
   */
  tasks: ImportTaskSummary[] | undefined;

  /**
   * @public
   * <p>Pagination token used to paginate output.</p>
   *          <p>When this value is provided as input, the service returns results from where
   *       the previous response left off. When this value is present in output, it indicates
   *       that there are more results to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * @public
   * <p>ARN of the resource whose tag needs to be removed.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Tag keys for the tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @internal
 */
export const ExecuteQueryOutputFilterSensitiveLog = (obj: ExecuteQueryOutput): any => ({
  ...obj,
});
