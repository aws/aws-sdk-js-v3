// smithy-typescript generated code
import type {
  DefaultGatewayRouteRewrite,
  DnsResponseType,
  DurationUnit,
  EgressFilterType,
  GatewayRouteStatusCode,
  GrpcRetryPolicyEvent,
  HttpMethod,
  HttpScheme,
  IpPreference,
  ListenerTlsMode,
  MeshStatusCode,
  PortProtocol,
  RouteStatusCode,
  TcpRetryPolicyEvent,
  VirtualGatewayListenerTlsMode,
  VirtualGatewayPortProtocol,
  VirtualGatewayStatusCode,
  VirtualNodeStatusCode,
  VirtualRouterStatusCode,
  VirtualServiceStatusCode,
} from "./enums";

/**
 * An object that represents the key value pairs for the JSON.
 *
 * @public
 */
export interface JsonFormatRef {
  /**
   * The specified key for the JSON.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The specified value for the JSON.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * An object that represents the format for the logs.
 *
 * @public
 */
export type LoggingFormat =
  | LoggingFormat.JsonMember
  | LoggingFormat.TextMember
  | LoggingFormat.$UnknownMember;

/**
 * @public
 */
export namespace LoggingFormat {
  /**
   * @public
   */
  export interface TextMember {
    text: string;
    json?: never;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface JsonMember {
    text?: never;
    json: JsonFormatRef[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    json?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    json: (value: JsonFormatRef[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents an access log file.
 *
 * @public
 */
export interface FileAccessLog {
  /**
   * The file path to write access logs to. You can use `/dev/stdout` to send access logs to standard out and configure your Envoy container to use a log driver, such as `awslogs`, to export the access logs to a log storage service such as Amazon CloudWatch Logs. You can also specify a path in the Envoy container's file system to write the files to disk.
   *
   * > **Note:** The Envoy process must have write permissions to the path that you specify here. Otherwise, Envoy fails to bootstrap properly.
   *
   * @public
   */
  path: string | undefined;

  /**
   * The specified format for the logs. The format is either `json_format` or `text_format`.
   *
   * @public
   */
  format?: LoggingFormat | undefined;
}

/**
 * An object that represents the access logging information for a virtual node.
 *
 * @public
 */
export type AccessLog =
  | AccessLog.FileMember
  | AccessLog.$UnknownMember;

/**
 * @public
 */
export namespace AccessLog {
  /**
   * The file object to send virtual node access logs to.
   *
   * @public
   */
  export interface FileMember {
    file: FileAccessLog;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    file?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    file: (value: FileAccessLog) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 *
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource to list the tags for.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListTagsForResource` request where `limit` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of tag results returned by `ListTagsForResource` in paginated output. When this parameter is used, `ListTagsForResource` returns only `limit` results in a single page along with a `nextToken` response element. You can see the remaining results of the initial request by sending another `ListTagsForResource` request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, `ListTagsForResource` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * Optional metadata that you apply to a resource to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 *
 * @public
 */
export interface TagRef {
  /**
   * One part of a key-value pair that make up a tag. A `key` is a general label that acts like a category for more specific tag values.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The optional part of a key-value pair that make up a tag. A `value` acts as a descriptor within a tag category (key).
   *
   * @public
   */
  value: string | undefined;
}

/**
 *
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The tags for the resource.
   *
   * @public
   */
  tags: TagRef[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListTagsForResource` request. When the results of a `ListTagsForResource` request exceed `limit`, you can use this value to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object that represents the egress filter rules for a service mesh.
 *
 * @public
 */
export interface EgressFilter {
  /**
   * The egress filter type. By default, the type is `DROP_ALL`, which allows egress only from virtual nodes to other defined resources in the service mesh (and any traffic to `*.amazonaws.com` for Amazon Web Services API calls). You can set the egress filter type to `ALLOW_ALL` to allow egress to any endpoint inside or outside of the service mesh.
   *
   * @public
   */
  type: EgressFilterType | undefined;
}

/**
 * An object that represents the service discovery information for a service mesh.
 *
 * @public
 */
export interface MeshServiceDiscovery {
  /**
   * The IP version to use to control traffic within the mesh.
   *
   * @public
   */
  ipPreference?: IpPreference | undefined;
}

/**
 * An object that represents the specification of a service mesh.
 *
 * @public
 */
export interface MeshSpec {
  /**
   * The egress filter rules for the service mesh.
   *
   * @public
   */
  egressFilter?: EgressFilter | undefined;

  /**
   * An object that represents the service discovery information for a service mesh.
   *
   * @public
   */
  serviceDiscovery?: MeshServiceDiscovery | undefined;
}

/**
 *
 * @public
 */
export interface CreateMeshInput {
  /**
   * The name to use for the service mesh.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The service mesh specification to apply.
   *
   * @public
   */
  spec?: MeshSpec | undefined;

  /**
   * Optional metadata that you can apply to the service mesh to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * @public
   */
  tags?: TagRef[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * An object that represents metadata for a resource.
 *
 * @public
 */
export interface ResourceMetadata {
  /**
   * The full Amazon Resource Name (ARN) for the resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.
   *
   * @public
   */
  version: number | undefined;

  /**
   * The unique identifier for the resource.
   *
   * @public
   */
  uid: string | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the resource was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the resource was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  resourceOwner: string | undefined;
}

/**
 * An object that represents the status of a service mesh.
 *
 * @public
 */
export interface MeshStatus {
  /**
   * The current mesh status.
   *
   * @public
   */
  status?: MeshStatusCode | undefined;
}

/**
 * An object that represents a service mesh returned by a describe operation.
 *
 * @public
 */
export interface MeshData {
  /**
   * The name of the service mesh.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The associated specification for the service mesh.
   *
   * @public
   */
  spec: MeshSpec | undefined;

  /**
   * The associated metadata for the service mesh.
   *
   * @public
   */
  metadata: ResourceMetadata | undefined;

  /**
   * The status of the service mesh.
   *
   * @public
   */
  status: MeshStatus | undefined;
}

/**
 *
 * @public
 */
export interface CreateMeshOutput {
  /**
   * The full description of your service mesh following the create call.
   *
   * @public
   */
  mesh: MeshData | undefined;
}

/**
 *
 * @public
 */
export interface DeleteMeshInput {
  /**
   * The name of the service mesh to delete.
   *
   * @public
   */
  meshName: string | undefined;
}

/**
 *
 * @public
 */
export interface DeleteMeshOutput {
  /**
   * The service mesh that was deleted.
   *
   * @public
   */
  mesh: MeshData | undefined;
}

/**
 *
 * @public
 */
export interface DescribeMeshInput {
  /**
   * The name of the service mesh to describe.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 *
 * @public
 */
export interface DescribeMeshOutput {
  /**
   * The full description of your service mesh.
   *
   * @public
   */
  mesh: MeshData | undefined;
}

/**
 *
 * @public
 */
export interface ListMeshesInput {
  /**
   * The `nextToken` value returned from a previous paginated `ListMeshes` request where `limit` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results returned by `ListMeshes` in paginated output. When you use this parameter, `ListMeshes` returns only `limit` results in a single page along with a `nextToken` response element. You can see the remaining results of the initial request by sending another `ListMeshes` request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, `ListMeshes` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * An object that represents a service mesh returned by a list operation.
 *
 * @public
 */
export interface MeshRef {
  /**
   * The name of the service mesh.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  resourceOwner: string | undefined;

  /**
   * The full Amazon Resource Name (ARN) of the service mesh.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.
   *
   * @public
   */
  version: number | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the resource was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the resource was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 *
 * @public
 */
export interface ListMeshesOutput {
  /**
   * The list of existing service meshes.
   *
   * @public
   */
  meshes: MeshRef[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListMeshes` request. When the results of a `ListMeshes` request exceed `limit`, you can use this value to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 *
 * @public
 */
export interface UpdateMeshInput {
  /**
   * The name of the service mesh to update.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The service mesh specification to apply.
   *
   * @public
   */
  spec?: MeshSpec | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 *
 * @public
 */
export interface UpdateMeshOutput {
  /**
   * An object that represents a service mesh returned by a describe operation.
   *
   * @public
   */
  mesh: MeshData | undefined;
}

/**
 * An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites).
 *
 * @public
 */
export interface VirtualGatewayListenerTlsFileCertificate {
  /**
   * The certificate chain for the certificate.
   *
   * @public
   */
  certificateChain: string | undefined;

  /**
   * The private key for a certificate stored on the file system of the mesh endpoint that the proxy is running on.
   *
   * @public
   */
  privateKey: string | undefined;
}

/**
 * An object that represents the virtual gateway's listener's Secret Discovery Service certificate.The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh[TLS documentation](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) for more info.
 *
 * @public
 */
export interface VirtualGatewayListenerTlsSdsCertificate {
  /**
   * A reference to an object that represents the name of the secret secret requested from the Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or certificate chain.
   *
   * @public
   */
  secretName: string | undefined;
}

/**
 * An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate.
 *
 * @public
 */
export type VirtualGatewayClientTlsCertificate =
  | VirtualGatewayClientTlsCertificate.FileMember
  | VirtualGatewayClientTlsCertificate.SdsMember
  | VirtualGatewayClientTlsCertificate.$UnknownMember;

/**
 * @public
 */
export namespace VirtualGatewayClientTlsCertificate {
  /**
   * An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html).
   *
   * @public
   */
  export interface FileMember {
    file: VirtualGatewayListenerTlsFileCertificate;
    sds?: never;
    $unknown?: never;
  }

  /**
   * A reference to an object that represents a virtual gateway's client's Secret Discovery Service certificate.
   *
   * @public
   */
  export interface SdsMember {
    file?: never;
    sds: VirtualGatewayListenerTlsSdsCertificate;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    file?: never;
    sds?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    file: (value: VirtualGatewayListenerTlsFileCertificate) => T;
    sds: (value: VirtualGatewayListenerTlsSdsCertificate) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents the methods by which a subject alternative name on a peer Transport Layer Security (TLS) certificate can be matched.
 *
 * @public
 */
export interface SubjectAlternativeNameMatchers {
  /**
   * The values sent must match the specified values exactly.
   *
   * @public
   */
  exact: string[] | undefined;
}

/**
 * An object that represents the subject alternative names secured by the certificate.
 *
 * @public
 */
export interface SubjectAlternativeNames {
  /**
   * An object that represents the criteria for determining a SANs match.
   *
   * @public
   */
  match: SubjectAlternativeNameMatchers | undefined;
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.
 *
 * @public
 */
export interface VirtualGatewayTlsValidationContextAcmTrust {
  /**
   * One or more ACM Amazon Resource Name (ARN)s.
   *
   * @public
   */
  certificateAuthorityArns: string[] | undefined;
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
 *
 * @public
 */
export interface VirtualGatewayTlsValidationContextFileTrust {
  /**
   * The certificate trust chain for a certificate stored on the file system of the virtual node that the proxy is running on.
   *
   * @public
   */
  certificateChain: string | undefined;
}

/**
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh [TLS documentation](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) for more info.
 *
 * @public
 */
export interface VirtualGatewayTlsValidationContextSdsTrust {
  /**
   * A reference to an object that represents the name of the secret for a virtual gateway's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
   *
   * @public
   */
  secretName: string | undefined;
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context trust.
 *
 * @public
 */
export type VirtualGatewayTlsValidationContextTrust =
  | VirtualGatewayTlsValidationContextTrust.AcmMember
  | VirtualGatewayTlsValidationContextTrust.FileMember
  | VirtualGatewayTlsValidationContextTrust.SdsMember
  | VirtualGatewayTlsValidationContextTrust.$UnknownMember;

/**
 * @public
 */
export namespace VirtualGatewayTlsValidationContextTrust {
  /**
   * A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.
   *
   * @public
   */
  export interface AcmMember {
    acm: VirtualGatewayTlsValidationContextAcmTrust;
    file?: never;
    sds?: never;
    $unknown?: never;
  }

  /**
   * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
   *
   * @public
   */
  export interface FileMember {
    acm?: never;
    file: VirtualGatewayTlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }

  /**
   * A reference to an object that represents a virtual gateway's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
   *
   * @public
   */
  export interface SdsMember {
    acm?: never;
    file?: never;
    sds: VirtualGatewayTlsValidationContextSdsTrust;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    acm?: never;
    file?: never;
    sds?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    acm: (value: VirtualGatewayTlsValidationContextAcmTrust) => T;
    file: (value: VirtualGatewayTlsValidationContextFileTrust) => T;
    sds: (value: VirtualGatewayTlsValidationContextSdsTrust) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context.
 *
 * @public
 */
export interface VirtualGatewayTlsValidationContext {
  /**
   * A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.
   *
   * @public
   */
  trust: VirtualGatewayTlsValidationContextTrust | undefined;

  /**
   * A reference to an object that represents the SANs for a virtual gateway's listener's Transport Layer Security (TLS) validation context.
   *
   * @public
   */
  subjectAlternativeNames?: SubjectAlternativeNames | undefined;
}

/**
 * An object that represents a Transport Layer Security (TLS) client policy.
 *
 * @public
 */
export interface VirtualGatewayClientPolicyTls {
  /**
   * Whether the policy is enforced. The default is `True`, if a value isn't specified.
   *
   * @public
   */
  enforce?: boolean | undefined;

  /**
   * One or more ports that the policy is enforced for.
   *
   * @public
   */
  ports?: number[] | undefined;

  /**
   * A reference to an object that represents a virtual gateway's client's Transport Layer Security (TLS) certificate.
   *
   * @public
   */
  certificate?: VirtualGatewayClientTlsCertificate | undefined;

  /**
   * A reference to an object that represents a Transport Layer Security (TLS) validation context.
   *
   * @public
   */
  validation: VirtualGatewayTlsValidationContext | undefined;
}

/**
 * An object that represents a client policy.
 *
 * @public
 */
export interface VirtualGatewayClientPolicy {
  /**
   * A reference to an object that represents a Transport Layer Security (TLS) client policy.
   *
   * @public
   */
  tls?: VirtualGatewayClientPolicyTls | undefined;
}

/**
 * An object that represents the default properties for a backend.
 *
 * @public
 */
export interface VirtualGatewayBackendDefaults {
  /**
   * A reference to an object that represents a client policy.
   *
   * @public
   */
  clientPolicy?: VirtualGatewayClientPolicy | undefined;
}

/**
 * An object that represents a type of connection pool.
 *
 * @public
 */
export interface VirtualGatewayGrpcConnectionPool {
  /**
   * Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.
   *
   * @public
   */
  maxRequests: number | undefined;
}

/**
 * An object that represents a type of connection pool.
 *
 * @public
 */
export interface VirtualGatewayHttpConnectionPool {
  /**
   * Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster.
   *
   * @public
   */
  maxConnections: number | undefined;

  /**
   * Number of overflowing requests after `max_connections` Envoy will queue to upstream cluster.
   *
   * @public
   */
  maxPendingRequests?: number | undefined;
}

/**
 * An object that represents a type of connection pool.
 *
 * @public
 */
export interface VirtualGatewayHttp2ConnectionPool {
  /**
   * Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.
   *
   * @public
   */
  maxRequests: number | undefined;
}

/**
 * An object that represents the type of virtual gateway connection pool.
 *
 * Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.
 *
 * If not present the default value for `maxPendingRequests` is `2147483647`.
 *
 * @public
 */
export type VirtualGatewayConnectionPool =
  | VirtualGatewayConnectionPool.GrpcMember
  | VirtualGatewayConnectionPool.HttpMember
  | VirtualGatewayConnectionPool.Http2Member
  | VirtualGatewayConnectionPool.$UnknownMember;

/**
 * @public
 */
export namespace VirtualGatewayConnectionPool {
  /**
   * An object that represents a type of connection pool.
   *
   * @public
   */
  export interface HttpMember {
    http: VirtualGatewayHttpConnectionPool;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * An object that represents a type of connection pool.
   *
   * @public
   */
  export interface Http2Member {
    http?: never;
    http2: VirtualGatewayHttp2ConnectionPool;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * An object that represents a type of connection pool.
   *
   * @public
   */
  export interface GrpcMember {
    http?: never;
    http2?: never;
    grpc: VirtualGatewayGrpcConnectionPool;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    http?: never;
    http2?: never;
    grpc?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    http: (value: VirtualGatewayHttpConnectionPool) => T;
    http2: (value: VirtualGatewayHttp2ConnectionPool) => T;
    grpc: (value: VirtualGatewayGrpcConnectionPool) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents the health check policy for a virtual gateway's listener.
 *
 * @public
 */
export interface VirtualGatewayHealthCheckPolicy {
  /**
   * The amount of time to wait when receiving a response from the health check, in milliseconds.
   *
   * @public
   */
  timeoutMillis: number | undefined;

  /**
   * The time period in milliseconds between each health check execution.
   *
   * @public
   */
  intervalMillis: number | undefined;

  /**
   * The protocol for the health check request. If you specify `grpc`, then your service must conform to the [GRPC Health Checking Protocol](https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
   *
   * @public
   */
  protocol: VirtualGatewayPortProtocol | undefined;

  /**
   * The destination port for the health check request. This port must match the port defined in the PortMapping for the listener.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The destination path for the health check request. This value is only used if the specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The number of consecutive successful health checks that must occur before declaring the listener healthy.
   *
   * @public
   */
  healthyThreshold: number | undefined;

  /**
   * The number of consecutive failed health checks that must occur before declaring a virtual gateway unhealthy.
   *
   * @public
   */
  unhealthyThreshold: number | undefined;
}

/**
 * An object that represents a port mapping.
 *
 * @public
 */
export interface VirtualGatewayPortMapping {
  /**
   * The port used for the port mapping. Specify one protocol.
   *
   * @public
   */
  port: number | undefined;

  /**
   * The protocol used for the port mapping.
   *
   * @public
   */
  protocol: VirtualGatewayPortProtocol | undefined;
}

/**
 * An object that represents an Certificate Manager certificate.
 *
 * @public
 */
export interface VirtualGatewayListenerTlsAcmCertificate {
  /**
   * The Amazon Resource Name (ARN) for the certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites).
   *
   * @public
   */
  certificateArn: string | undefined;
}

/**
 * An object that represents a listener's Transport Layer Security (TLS) certificate.
 *
 * @public
 */
export type VirtualGatewayListenerTlsCertificate =
  | VirtualGatewayListenerTlsCertificate.AcmMember
  | VirtualGatewayListenerTlsCertificate.FileMember
  | VirtualGatewayListenerTlsCertificate.SdsMember
  | VirtualGatewayListenerTlsCertificate.$UnknownMember;

/**
 * @public
 */
export namespace VirtualGatewayListenerTlsCertificate {
  /**
   * A reference to an object that represents an Certificate Manager certificate.
   *
   * @public
   */
  export interface AcmMember {
    acm: VirtualGatewayListenerTlsAcmCertificate;
    file?: never;
    sds?: never;
    $unknown?: never;
  }

  /**
   * A reference to an object that represents a local file certificate.
   *
   * @public
   */
  export interface FileMember {
    acm?: never;
    file: VirtualGatewayListenerTlsFileCertificate;
    sds?: never;
    $unknown?: never;
  }

  /**
   * A reference to an object that represents a virtual gateway's listener's Secret Discovery Service certificate.
   *
   * @public
   */
  export interface SdsMember {
    acm?: never;
    file?: never;
    sds: VirtualGatewayListenerTlsSdsCertificate;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    acm?: never;
    file?: never;
    sds?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    acm: (value: VirtualGatewayListenerTlsAcmCertificate) => T;
    file: (value: VirtualGatewayListenerTlsFileCertificate) => T;
    sds: (value: VirtualGatewayListenerTlsSdsCertificate) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context trust.
 *
 * @public
 */
export type VirtualGatewayListenerTlsValidationContextTrust =
  | VirtualGatewayListenerTlsValidationContextTrust.FileMember
  | VirtualGatewayListenerTlsValidationContextTrust.SdsMember
  | VirtualGatewayListenerTlsValidationContextTrust.$UnknownMember;

/**
 * @public
 */
export namespace VirtualGatewayListenerTlsValidationContextTrust {
  /**
   * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
   *
   * @public
   */
  export interface FileMember {
    file: VirtualGatewayTlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }

  /**
   * A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
   *
   * @public
   */
  export interface SdsMember {
    file?: never;
    sds: VirtualGatewayTlsValidationContextSdsTrust;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    file?: never;
    sds?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    file: (value: VirtualGatewayTlsValidationContextFileTrust) => T;
    sds: (value: VirtualGatewayTlsValidationContextSdsTrust) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context.
 *
 * @public
 */
export interface VirtualGatewayListenerTlsValidationContext {
  /**
   * A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.
   *
   * @public
   */
  trust: VirtualGatewayListenerTlsValidationContextTrust | undefined;

  /**
   * A reference to an object that represents the SANs for a virtual gateway listener's Transport Layer Security (TLS) validation context.
   *
   * @public
   */
  subjectAlternativeNames?: SubjectAlternativeNames | undefined;
}

/**
 * An object that represents the Transport Layer Security (TLS) properties for a listener.
 *
 * @public
 */
export interface VirtualGatewayListenerTls {
  /**
   * Specify one of the following modes.
   *
   * - **STRICT – Listener only accepts connections with TLS enabled.**
   * - **PERMISSIVE – Listener accepts connections with or without TLS enabled.**
   * - **DISABLED – Listener only accepts connections without TLS.**
   *
   * @public
   */
  mode: VirtualGatewayListenerTlsMode | undefined;

  /**
   * A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context.
   *
   * @public
   */
  validation?: VirtualGatewayListenerTlsValidationContext | undefined;

  /**
   * An object that represents a Transport Layer Security (TLS) certificate.
   *
   * @public
   */
  certificate: VirtualGatewayListenerTlsCertificate | undefined;
}

/**
 * An object that represents a listener for a virtual gateway.
 *
 * @public
 */
export interface VirtualGatewayListener {
  /**
   * The health check information for the listener.
   *
   * @public
   */
  healthCheck?: VirtualGatewayHealthCheckPolicy | undefined;

  /**
   * The port mapping information for the listener.
   *
   * @public
   */
  portMapping: VirtualGatewayPortMapping | undefined;

  /**
   * A reference to an object that represents the Transport Layer Security (TLS) properties for the listener.
   *
   * @public
   */
  tls?: VirtualGatewayListenerTls | undefined;

  /**
   * The connection pool information for the virtual gateway listener.
   *
   * @public
   */
  connectionPool?: VirtualGatewayConnectionPool | undefined;
}

/**
 * An object that represents an access log file.
 *
 * @public
 */
export interface VirtualGatewayFileAccessLog {
  /**
   * The file path to write access logs to. You can use `/dev/stdout` to send access logs to standard out and configure your Envoy container to use a log driver, such as `awslogs`, to export the access logs to a log storage service such as Amazon CloudWatch Logs. You can also specify a path in the Envoy container's file system to write the files to disk.
   *
   * @public
   */
  path: string | undefined;

  /**
   * The specified format for the virtual gateway access logs. It can be either `json_format` or `text_format`.
   *
   * @public
   */
  format?: LoggingFormat | undefined;
}

/**
 * The access log configuration for a virtual gateway.
 *
 * @public
 */
export type VirtualGatewayAccessLog =
  | VirtualGatewayAccessLog.FileMember
  | VirtualGatewayAccessLog.$UnknownMember;

/**
 * @public
 */
export namespace VirtualGatewayAccessLog {
  /**
   * The file object to send virtual gateway access logs to.
   *
   * @public
   */
  export interface FileMember {
    file: VirtualGatewayFileAccessLog;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    file?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    file: (value: VirtualGatewayFileAccessLog) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents logging information.
 *
 * @public
 */
export interface VirtualGatewayLogging {
  /**
   * The access log configuration.
   *
   * @public
   */
  accessLog?: VirtualGatewayAccessLog | undefined;
}

/**
 * An object that represents the specification of a service mesh resource.
 *
 * @public
 */
export interface VirtualGatewaySpec {
  /**
   * A reference to an object that represents the defaults for backends.
   *
   * @public
   */
  backendDefaults?: VirtualGatewayBackendDefaults | undefined;

  /**
   * The listeners that the mesh endpoint is expected to receive inbound traffic from. You can specify one listener.
   *
   * @public
   */
  listeners: VirtualGatewayListener[] | undefined;

  /**
   * An object that represents logging information.
   *
   * @public
   */
  logging?: VirtualGatewayLogging | undefined;
}

/**
 * @public
 */
export interface CreateVirtualGatewayInput {
  /**
   * The name to use for the virtual gateway.
   *
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * The name of the service mesh to create the virtual gateway in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The virtual gateway specification to apply.
   *
   * @public
   */
  spec: VirtualGatewaySpec | undefined;

  /**
   * Optional metadata that you can apply to the virtual gateway to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * @public
   */
  tags?: TagRef[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * An object that represents the status of the mesh resource.
 *
 * @public
 */
export interface VirtualGatewayStatus {
  /**
   * The current status.
   *
   * @public
   */
  status: VirtualGatewayStatusCode | undefined;
}

/**
 * An object that represents a virtual gateway returned by a describe operation.
 *
 * @public
 */
export interface VirtualGatewayData {
  /**
   * The name of the service mesh that the virtual gateway resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the virtual gateway.
   *
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * The specifications of the virtual gateway.
   *
   * @public
   */
  spec: VirtualGatewaySpec | undefined;

  /**
   * An object that represents metadata for a resource.
   *
   * @public
   */
  metadata: ResourceMetadata | undefined;

  /**
   * The current status of the virtual gateway.
   *
   * @public
   */
  status: VirtualGatewayStatus | undefined;
}

/**
 * @public
 */
export interface CreateVirtualGatewayOutput {
  /**
   * The full description of your virtual gateway following the create call.
   *
   * @public
   */
  virtualGateway: VirtualGatewayData | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualGatewayInput {
  /**
   * The name of the virtual gateway to delete.
   *
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * The name of the service mesh to delete the virtual gateway from.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualGatewayOutput {
  /**
   * The virtual gateway that was deleted.
   *
   * @public
   */
  virtualGateway: VirtualGatewayData | undefined;
}

/**
 * @public
 */
export interface DescribeVirtualGatewayInput {
  /**
   * The name of the virtual gateway to describe.
   *
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * The name of the service mesh that the gateway route resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVirtualGatewayOutput {
  /**
   * The full description of your virtual gateway.
   *
   * @public
   */
  virtualGateway: VirtualGatewayData | undefined;
}

/**
 * An object representing the gateway route host name to rewrite.
 *
 * @public
 */
export interface GatewayRouteHostnameRewrite {
  /**
   * The default target host name to write to.
   *
   * @public
   */
  defaultTargetHostname?: DefaultGatewayRouteRewrite | undefined;
}

/**
 * An object that represents the gateway route to rewrite.
 *
 * @public
 */
export interface GrpcGatewayRouteRewrite {
  /**
   * The host name of the gateway route to rewrite.
   *
   * @public
   */
  hostname?: GatewayRouteHostnameRewrite | undefined;
}

/**
 * An object that represents the virtual service that traffic is routed to.
 *
 * @public
 */
export interface GatewayRouteVirtualService {
  /**
   * The name of the virtual service that traffic is routed to.
   *
   * @public
   */
  virtualServiceName: string | undefined;
}

/**
 * An object that represents a gateway route target.
 *
 * @public
 */
export interface GatewayRouteTarget {
  /**
   * An object that represents a virtual service gateway route target.
   *
   * @public
   */
  virtualService: GatewayRouteVirtualService | undefined;

  /**
   * The port number of the gateway route target.
   *
   * @public
   */
  port?: number | undefined;
}

/**
 * An object that represents the action to take if a match is determined.
 *
 * @public
 */
export interface GrpcGatewayRouteAction {
  /**
   * An object that represents the target that traffic is routed to when a request matches the gateway route.
   *
   * @public
   */
  target: GatewayRouteTarget | undefined;

  /**
   * The gateway route action to rewrite.
   *
   * @public
   */
  rewrite?: GrpcGatewayRouteRewrite | undefined;
}

/**
 * An object representing the gateway route host name to match.
 *
 * @public
 */
export interface GatewayRouteHostnameMatch {
  /**
   * The exact host name to match on.
   *
   * @public
   */
  exact?: string | undefined;

  /**
   * The specified ending characters of the host name to match on.
   *
   * @public
   */
  suffix?: string | undefined;
}

/**
 * An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.
 *
 * @public
 */
export interface MatchRange {
  /**
   * The start of the range.
   *
   * @public
   */
  start: number | undefined;

  /**
   * The end of the range.
   *
   * @public
   */
  end: number | undefined;
}

/**
 * An object representing the method header to be matched.
 *
 * @public
 */
export type GrpcMetadataMatchMethod =
  | GrpcMetadataMatchMethod.ExactMember
  | GrpcMetadataMatchMethod.PrefixMember
  | GrpcMetadataMatchMethod.RangeMember
  | GrpcMetadataMatchMethod.RegexMember
  | GrpcMetadataMatchMethod.SuffixMember
  | GrpcMetadataMatchMethod.$UnknownMember;

/**
 * @public
 */
export namespace GrpcMetadataMatchMethod {
  /**
   * The exact method header to be matched on.
   *
   * @public
   */
  export interface ExactMember {
    exact: string;
    regex?: never;
    range?: never;
    prefix?: never;
    suffix?: never;
    $unknown?: never;
  }

  /**
   * The regex used to match the method header.
   *
   * @public
   */
  export interface RegexMember {
    exact?: never;
    regex: string;
    range?: never;
    prefix?: never;
    suffix?: never;
    $unknown?: never;
  }

  /**
   * An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.
   *
   * @public
   */
  export interface RangeMember {
    exact?: never;
    regex?: never;
    range: MatchRange;
    prefix?: never;
    suffix?: never;
    $unknown?: never;
  }

  /**
   * The specified beginning characters of the method header to be matched on.
   *
   * @public
   */
  export interface PrefixMember {
    exact?: never;
    regex?: never;
    range?: never;
    prefix: string;
    suffix?: never;
    $unknown?: never;
  }

  /**
   * The specified ending characters of the method header to match on.
   *
   * @public
   */
  export interface SuffixMember {
    exact?: never;
    regex?: never;
    range?: never;
    prefix?: never;
    suffix: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    exact?: never;
    regex?: never;
    range?: never;
    prefix?: never;
    suffix?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    exact: (value: string) => T;
    regex: (value: string) => T;
    range: (value: MatchRange) => T;
    prefix: (value: string) => T;
    suffix: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object representing the metadata of the gateway route.
 *
 * @public
 */
export interface GrpcGatewayRouteMetadata {
  /**
   * A name for the gateway route metadata.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specify `True` to match anything except the match criteria. The default value is `False`.
   *
   * @public
   */
  invert?: boolean | undefined;

  /**
   * The criteria for determining a metadata match.
   *
   * @public
   */
  match?: GrpcMetadataMatchMethod | undefined;
}

/**
 * An object that represents the criteria for determining a request match.
 *
 * @public
 */
export interface GrpcGatewayRouteMatch {
  /**
   * The fully qualified domain name for the service to match from the request.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The gateway route host name to be matched on.
   *
   * @public
   */
  hostname?: GatewayRouteHostnameMatch | undefined;

  /**
   * The gateway route metadata to be matched on.
   *
   * @public
   */
  metadata?: GrpcGatewayRouteMetadata[] | undefined;

  /**
   * The gateway route port to be matched on.
   *
   * @public
   */
  port?: number | undefined;
}

/**
 * An object that represents a gRPC gateway route.
 *
 * @public
 */
export interface GrpcGatewayRoute {
  /**
   * An object that represents the criteria for determining a request match.
   *
   * @public
   */
  match: GrpcGatewayRouteMatch | undefined;

  /**
   * An object that represents the action to take if a match is determined.
   *
   * @public
   */
  action: GrpcGatewayRouteAction | undefined;
}

/**
 * An object that represents the path to rewrite.
 *
 * @public
 */
export interface HttpGatewayRoutePathRewrite {
  /**
   * The exact path to rewrite.
   *
   * @public
   */
  exact?: string | undefined;
}

/**
 * An object representing the beginning characters of the route to rewrite.
 *
 * @public
 */
export interface HttpGatewayRoutePrefixRewrite {
  /**
   * The default prefix used to replace the incoming route prefix when rewritten.
   *
   * @public
   */
  defaultPrefix?: DefaultGatewayRouteRewrite | undefined;

  /**
   * The value used to replace the incoming route prefix when rewritten.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * An object representing the gateway route to rewrite.
 *
 * @public
 */
export interface HttpGatewayRouteRewrite {
  /**
   * The specified beginning characters to rewrite.
   *
   * @public
   */
  prefix?: HttpGatewayRoutePrefixRewrite | undefined;

  /**
   * The path to rewrite.
   *
   * @public
   */
  path?: HttpGatewayRoutePathRewrite | undefined;

  /**
   * The host name to rewrite.
   *
   * @public
   */
  hostname?: GatewayRouteHostnameRewrite | undefined;
}

/**
 * An object that represents the action to take if a match is determined.
 *
 * @public
 */
export interface HttpGatewayRouteAction {
  /**
   * An object that represents the target that traffic is routed to when a request matches the gateway route.
   *
   * @public
   */
  target: GatewayRouteTarget | undefined;

  /**
   * The gateway route action to rewrite.
   *
   * @public
   */
  rewrite?: HttpGatewayRouteRewrite | undefined;
}

/**
 * An object that represents the method and value to match with the header value sent in a request. Specify one match method.
 *
 * @public
 */
export type HeaderMatchMethod =
  | HeaderMatchMethod.ExactMember
  | HeaderMatchMethod.PrefixMember
  | HeaderMatchMethod.RangeMember
  | HeaderMatchMethod.RegexMember
  | HeaderMatchMethod.SuffixMember
  | HeaderMatchMethod.$UnknownMember;

/**
 * @public
 */
export namespace HeaderMatchMethod {
  /**
   * The value sent by the client must match the specified value exactly.
   *
   * @public
   */
  export interface ExactMember {
    exact: string;
    regex?: never;
    range?: never;
    prefix?: never;
    suffix?: never;
    $unknown?: never;
  }

  /**
   * The value sent by the client must include the specified characters.
   *
   * @public
   */
  export interface RegexMember {
    exact?: never;
    regex: string;
    range?: never;
    prefix?: never;
    suffix?: never;
    $unknown?: never;
  }

  /**
   * An object that represents the range of values to match on.
   *
   * @public
   */
  export interface RangeMember {
    exact?: never;
    regex?: never;
    range: MatchRange;
    prefix?: never;
    suffix?: never;
    $unknown?: never;
  }

  /**
   * The value sent by the client must begin with the specified characters.
   *
   * @public
   */
  export interface PrefixMember {
    exact?: never;
    regex?: never;
    range?: never;
    prefix: string;
    suffix?: never;
    $unknown?: never;
  }

  /**
   * The value sent by the client must end with the specified characters.
   *
   * @public
   */
  export interface SuffixMember {
    exact?: never;
    regex?: never;
    range?: never;
    prefix?: never;
    suffix: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    exact?: never;
    regex?: never;
    range?: never;
    prefix?: never;
    suffix?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    exact: (value: string) => T;
    regex: (value: string) => T;
    range: (value: MatchRange) => T;
    prefix: (value: string) => T;
    suffix: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents the HTTP header in the gateway route.
 *
 * @public
 */
export interface HttpGatewayRouteHeader {
  /**
   * A name for the HTTP header in the gateway route that will be matched on.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specify `True` to match anything except the match criteria. The default value is `False`.
   *
   * @public
   */
  invert?: boolean | undefined;

  /**
   * An object that represents the method and value to match with the header value sent in a request. Specify one match method.
   *
   * @public
   */
  match?: HeaderMatchMethod | undefined;
}

/**
 * An object representing the path to match in the request.
 *
 * @public
 */
export interface HttpPathMatch {
  /**
   * The exact path to match on.
   *
   * @public
   */
  exact?: string | undefined;

  /**
   * The regex used to match the path.
   *
   * @public
   */
  regex?: string | undefined;
}

/**
 * An object representing the query parameter to match.
 *
 * @public
 */
export interface QueryParameterMatch {
  /**
   * The exact query parameter to match on.
   *
   * @public
   */
  exact?: string | undefined;
}

/**
 * An object that represents the query parameter in the request.
 *
 * @public
 */
export interface HttpQueryParameter {
  /**
   * A name for the query parameter that will be matched on.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The query parameter to match on.
   *
   * @public
   */
  match?: QueryParameterMatch | undefined;
}

/**
 * An object that represents the criteria for determining a request match.
 *
 * @public
 */
export interface HttpGatewayRouteMatch {
  /**
   * Specifies the path to match requests with. This parameter must always start with `/`, which by itself matches all requests to the virtual service name. You can also match for path-based routing of requests. For example, if your virtual service name is `my-service.local` and you want the route to match requests to `my-service.local/metrics`, your prefix should be `/metrics`.
   *
   * @public
   */
  prefix?: string | undefined;

  /**
   * The path to match on.
   *
   * @public
   */
  path?: HttpPathMatch | undefined;

  /**
   * The query parameter to match on.
   *
   * @public
   */
  queryParameters?: HttpQueryParameter[] | undefined;

  /**
   * The method to match on.
   *
   * @public
   */
  method?: HttpMethod | undefined;

  /**
   * The host name to match on.
   *
   * @public
   */
  hostname?: GatewayRouteHostnameMatch | undefined;

  /**
   * The client request headers to match on.
   *
   * @public
   */
  headers?: HttpGatewayRouteHeader[] | undefined;

  /**
   * The port number to match on.
   *
   * @public
   */
  port?: number | undefined;
}

/**
 * An object that represents an HTTP gateway route.
 *
 * @public
 */
export interface HttpGatewayRoute {
  /**
   * An object that represents the criteria for determining a request match.
   *
   * @public
   */
  match: HttpGatewayRouteMatch | undefined;

  /**
   * An object that represents the action to take if a match is determined.
   *
   * @public
   */
  action: HttpGatewayRouteAction | undefined;
}

/**
 * An object that represents a gateway route specification. Specify one gateway route type.
 *
 * @public
 */
export interface GatewayRouteSpec {
  /**
   * The ordering of the gateway routes spec.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * An object that represents the specification of an HTTP gateway route.
   *
   * @public
   */
  httpRoute?: HttpGatewayRoute | undefined;

  /**
   * An object that represents the specification of an HTTP/2 gateway route.
   *
   * @public
   */
  http2Route?: HttpGatewayRoute | undefined;

  /**
   * An object that represents the specification of a gRPC gateway route.
   *
   * @public
   */
  grpcRoute?: GrpcGatewayRoute | undefined;
}

/**
 * @public
 */
export interface CreateGatewayRouteInput {
  /**
   * The name to use for the gateway route.
   *
   * @public
   */
  gatewayRouteName: string | undefined;

  /**
   * The name of the service mesh to create the gateway route in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the virtual gateway to associate the gateway route with. If the virtual gateway is in a shared mesh, then you must be the owner of the virtual gateway resource.
   *
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * The gateway route specification to apply.
   *
   * @public
   */
  spec: GatewayRouteSpec | undefined;

  /**
   * Optional metadata that you can apply to the gateway route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * @public
   */
  tags?: TagRef[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * An object that represents the current status of a gateway route.
 *
 * @public
 */
export interface GatewayRouteStatus {
  /**
   * The current status for the gateway route.
   *
   * @public
   */
  status: GatewayRouteStatusCode | undefined;
}

/**
 * An object that represents a gateway route returned by a describe operation.
 *
 * @public
 */
export interface GatewayRouteData {
  /**
   * The name of the service mesh that the resource resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the gateway route.
   *
   * @public
   */
  gatewayRouteName: string | undefined;

  /**
   * The virtual gateway that the gateway route is associated with.
   *
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * The specifications of the gateway route.
   *
   * @public
   */
  spec: GatewayRouteSpec | undefined;

  /**
   * An object that represents metadata for a resource.
   *
   * @public
   */
  metadata: ResourceMetadata | undefined;

  /**
   * The status of the gateway route.
   *
   * @public
   */
  status: GatewayRouteStatus | undefined;
}

/**
 * @public
 */
export interface CreateGatewayRouteOutput {
  /**
   * The full description of your gateway route following the create call.
   *
   * @public
   */
  gatewayRoute: GatewayRouteData | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRouteInput {
  /**
   * The name of the gateway route to delete.
   *
   * @public
   */
  gatewayRouteName: string | undefined;

  /**
   * The name of the service mesh to delete the gateway route from.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the virtual gateway to delete the route from.
   *
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRouteOutput {
  /**
   * The gateway route that was deleted.
   *
   * @public
   */
  gatewayRoute: GatewayRouteData | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayRouteInput {
  /**
   * The name of the gateway route to describe.
   *
   * @public
   */
  gatewayRouteName: string | undefined;

  /**
   * The name of the service mesh that the gateway route resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the virtual gateway that the gateway route is associated with.
   *
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayRouteOutput {
  /**
   * The full description of your gateway route.
   *
   * @public
   */
  gatewayRoute: GatewayRouteData | undefined;
}

/**
 * @public
 */
export interface ListGatewayRoutesInput {
  /**
   * The name of the service mesh to list gateway routes in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the virtual gateway to list gateway routes in.
   *
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListGatewayRoutes` request where `limit` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results returned by `ListGatewayRoutes` in paginated output. When you use this parameter, `ListGatewayRoutes` returns only `limit` results in a single page along with a `nextToken` response element. You can see the remaining results of the initial request by sending another `ListGatewayRoutes` request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, `ListGatewayRoutes` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * An object that represents a gateway route returned by a list operation.
 *
 * @public
 */
export interface GatewayRouteRef {
  /**
   * The name of the service mesh that the resource resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the gateway route.
   *
   * @public
   */
  gatewayRouteName: string | undefined;

  /**
   * The virtual gateway that the gateway route is associated with.
   *
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  resourceOwner: string | undefined;

  /**
   * The full Amazon Resource Name (ARN) for the gateway route.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.
   *
   * @public
   */
  version: number | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the resource was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the resource was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListGatewayRoutesOutput {
  /**
   * The list of existing gateway routes for the specified service mesh and virtual gateway.
   *
   * @public
   */
  gatewayRoutes: GatewayRouteRef[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListGatewayRoutes` request. When the results of a `ListGatewayRoutes` request exceed `limit`, you can use this value to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayRouteInput {
  /**
   * The name of the gateway route to update.
   *
   * @public
   */
  gatewayRouteName: string | undefined;

  /**
   * The name of the service mesh that the gateway route resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the virtual gateway that the gateway route is associated with.
   *
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * The new gateway route specification to apply. This overwrites the existing data.
   *
   * @public
   */
  spec: GatewayRouteSpec | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayRouteOutput {
  /**
   * A full description of the gateway route that was updated.
   *
   * @public
   */
  gatewayRoute: GatewayRouteData | undefined;
}

/**
 * @public
 */
export interface ListVirtualGatewaysInput {
  /**
   * The name of the service mesh to list virtual gateways in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListVirtualGateways` request where `limit` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results returned by `ListVirtualGateways` in paginated output. When you use this parameter, `ListVirtualGateways` returns only `limit` results in a single page along with a `nextToken` response element. You can see the remaining results of the initial request by sending another `ListVirtualGateways` request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, `ListVirtualGateways` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * An object that represents a virtual gateway returned by a list operation.
 *
 * @public
 */
export interface VirtualGatewayRef {
  /**
   * The name of the service mesh that the resource resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  resourceOwner: string | undefined;

  /**
   * The full Amazon Resource Name (ARN) for the resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.
   *
   * @public
   */
  version: number | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the resource was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the resource was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListVirtualGatewaysOutput {
  /**
   * The list of existing virtual gateways for the specified service mesh.
   *
   * @public
   */
  virtualGateways: VirtualGatewayRef[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListVirtualGateways` request. When the results of a `ListVirtualGateways` request exceed `limit`, you can use this value to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVirtualGatewayInput {
  /**
   * The name of the virtual gateway to update.
   *
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * The name of the service mesh that the virtual gateway resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The new virtual gateway specification to apply. This overwrites the existing data.
   *
   * @public
   */
  spec: VirtualGatewaySpec | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVirtualGatewayOutput {
  /**
   * A full description of the virtual gateway that was updated.
   *
   * @public
   */
  virtualGateway: VirtualGatewayData | undefined;
}

/**
 * An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites).
 *
 * @public
 */
export interface ListenerTlsFileCertificate {
  /**
   * The certificate chain for the certificate.
   *
   * @public
   */
  certificateChain: string | undefined;

  /**
   * The private key for a certificate stored on the file system of the virtual node that the proxy is running on.
   *
   * @public
   */
  privateKey: string | undefined;
}

/**
 * An object that represents the listener's Secret Discovery Service certificate. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh [TLS documentation](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) for more info.
 *
 * @public
 */
export interface ListenerTlsSdsCertificate {
  /**
   * A reference to an object that represents the name of the secret requested from the Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or certificate chain.
   *
   * @public
   */
  secretName: string | undefined;
}

/**
 * An object that represents the client's certificate.
 *
 * @public
 */
export type ClientTlsCertificate =
  | ClientTlsCertificate.FileMember
  | ClientTlsCertificate.SdsMember
  | ClientTlsCertificate.$UnknownMember;

/**
 * @public
 */
export namespace ClientTlsCertificate {
  /**
   * An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html).
   *
   * @public
   */
  export interface FileMember {
    file: ListenerTlsFileCertificate;
    sds?: never;
    $unknown?: never;
  }

  /**
   * A reference to an object that represents a client's TLS Secret Discovery Service certificate.
   *
   * @public
   */
  export interface SdsMember {
    file?: never;
    sds: ListenerTlsSdsCertificate;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    file?: never;
    sds?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    file: (value: ListenerTlsFileCertificate) => T;
    sds: (value: ListenerTlsSdsCertificate) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.
 *
 * @public
 */
export interface TlsValidationContextAcmTrust {
  /**
   * One or more ACM Amazon Resource Name (ARN)s.
   *
   * @public
   */
  certificateAuthorityArns: string[] | undefined;
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
 *
 * @public
 */
export interface TlsValidationContextFileTrust {
  /**
   * The certificate trust chain for a certificate stored on the file system of the virtual node that the proxy is running on.
   *
   * @public
   */
  certificateChain: string | undefined;
}

/**
 * An object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh [TLS documentation](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) for more info.
 *
 * @public
 */
export interface TlsValidationContextSdsTrust {
  /**
   * A reference to an object that represents the name of the secret for a Transport Layer Security (TLS) Secret Discovery Service validation context trust.
   *
   * @public
   */
  secretName: string | undefined;
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context trust.
 *
 * @public
 */
export type TlsValidationContextTrust =
  | TlsValidationContextTrust.AcmMember
  | TlsValidationContextTrust.FileMember
  | TlsValidationContextTrust.SdsMember
  | TlsValidationContextTrust.$UnknownMember;

/**
 * @public
 */
export namespace TlsValidationContextTrust {
  /**
   * A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.
   *
   * @public
   */
  export interface AcmMember {
    acm: TlsValidationContextAcmTrust;
    file?: never;
    sds?: never;
    $unknown?: never;
  }

  /**
   * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
   *
   * @public
   */
  export interface FileMember {
    acm?: never;
    file: TlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }

  /**
   * A reference to an object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust.
   *
   * @public
   */
  export interface SdsMember {
    acm?: never;
    file?: never;
    sds: TlsValidationContextSdsTrust;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    acm?: never;
    file?: never;
    sds?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    acm: (value: TlsValidationContextAcmTrust) => T;
    file: (value: TlsValidationContextFileTrust) => T;
    sds: (value: TlsValidationContextSdsTrust) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents how the proxy will validate its peer during Transport Layer Security (TLS) negotiation.
 *
 * @public
 */
export interface TlsValidationContext {
  /**
   * A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.
   *
   * @public
   */
  trust: TlsValidationContextTrust | undefined;

  /**
   * A reference to an object that represents the SANs for a Transport Layer Security (TLS) validation context. If you don't specify SANs on the *terminating* mesh endpoint, the Envoy proxy for that node doesn't verify the SAN on a peer client certificate. If you don't specify SANs on the *originating* mesh endpoint, the SAN on the certificate provided by the terminating endpoint must match the mesh endpoint service discovery configuration. Since SPIRE vended certificates have a SPIFFE ID as a name, you must set the SAN since the name doesn't match the service discovery name.
   *
   * @public
   */
  subjectAlternativeNames?: SubjectAlternativeNames | undefined;
}

/**
 * A reference to an object that represents a Transport Layer Security (TLS) client policy.
 *
 * @public
 */
export interface ClientPolicyTls {
  /**
   * Whether the policy is enforced. The default is `True`, if a value isn't specified.
   *
   * @public
   */
  enforce?: boolean | undefined;

  /**
   * One or more ports that the policy is enforced for.
   *
   * @public
   */
  ports?: number[] | undefined;

  /**
   * A reference to an object that represents a client's TLS certificate.
   *
   * @public
   */
  certificate?: ClientTlsCertificate | undefined;

  /**
   * A reference to an object that represents a TLS validation context.
   *
   * @public
   */
  validation: TlsValidationContext | undefined;
}

/**
 * An object that represents a client policy.
 *
 * @public
 */
export interface ClientPolicy {
  /**
   * A reference to an object that represents a Transport Layer Security (TLS) client policy.
   *
   * @public
   */
  tls?: ClientPolicyTls | undefined;
}

/**
 * An object that represents the default properties for a backend.
 *
 * @public
 */
export interface BackendDefaults {
  /**
   * A reference to an object that represents a client policy.
   *
   * @public
   */
  clientPolicy?: ClientPolicy | undefined;
}

/**
 * An object that represents a virtual service backend for a virtual node.
 *
 * @public
 */
export interface VirtualServiceBackend {
  /**
   * The name of the virtual service that is acting as a virtual node backend.
   *
   * @public
   */
  virtualServiceName: string | undefined;

  /**
   * A reference to an object that represents the client policy for a backend.
   *
   * @public
   */
  clientPolicy?: ClientPolicy | undefined;
}

/**
 * An object that represents the backends that a virtual node is expected to send outbound traffic to.
 *
 * @public
 */
export type Backend =
  | Backend.VirtualServiceMember
  | Backend.$UnknownMember;

/**
 * @public
 */
export namespace Backend {
  /**
   * Specifies a virtual service to use as a backend.
   *
   * @public
   */
  export interface VirtualServiceMember {
    virtualService: VirtualServiceBackend;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    virtualService?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    virtualService: (value: VirtualServiceBackend) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents a type of connection pool.
 *
 * @public
 */
export interface VirtualNodeGrpcConnectionPool {
  /**
   * Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.
   *
   * @public
   */
  maxRequests: number | undefined;
}

/**
 * An object that represents a type of connection pool.
 *
 * @public
 */
export interface VirtualNodeHttpConnectionPool {
  /**
   * Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster.
   *
   * @public
   */
  maxConnections: number | undefined;

  /**
   * Number of overflowing requests after `max_connections` Envoy will queue to upstream cluster.
   *
   * @public
   */
  maxPendingRequests?: number | undefined;
}

/**
 * An object that represents a type of connection pool.
 *
 * @public
 */
export interface VirtualNodeHttp2ConnectionPool {
  /**
   * Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.
   *
   * @public
   */
  maxRequests: number | undefined;
}

/**
 * An object that represents a type of connection pool.
 *
 * @public
 */
export interface VirtualNodeTcpConnectionPool {
  /**
   * Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster.
   *
   * @public
   */
  maxConnections: number | undefined;
}

/**
 * An object that represents the type of virtual node connection pool.
 *
 * Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.
 *
 * If not present the default value for `maxPendingRequests` is `2147483647`.
 *
 * @public
 */
export type VirtualNodeConnectionPool =
  | VirtualNodeConnectionPool.GrpcMember
  | VirtualNodeConnectionPool.HttpMember
  | VirtualNodeConnectionPool.Http2Member
  | VirtualNodeConnectionPool.TcpMember
  | VirtualNodeConnectionPool.$UnknownMember;

/**
 * @public
 */
export namespace VirtualNodeConnectionPool {
  /**
   * An object that represents a type of connection pool.
   *
   * @public
   */
  export interface TcpMember {
    tcp: VirtualNodeTcpConnectionPool;
    http?: never;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * An object that represents a type of connection pool.
   *
   * @public
   */
  export interface HttpMember {
    tcp?: never;
    http: VirtualNodeHttpConnectionPool;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * An object that represents a type of connection pool.
   *
   * @public
   */
  export interface Http2Member {
    tcp?: never;
    http?: never;
    http2: VirtualNodeHttp2ConnectionPool;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * An object that represents a type of connection pool.
   *
   * @public
   */
  export interface GrpcMember {
    tcp?: never;
    http?: never;
    http2?: never;
    grpc: VirtualNodeGrpcConnectionPool;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    tcp?: never;
    http?: never;
    http2?: never;
    grpc?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    tcp: (value: VirtualNodeTcpConnectionPool) => T;
    http: (value: VirtualNodeHttpConnectionPool) => T;
    http2: (value: VirtualNodeHttp2ConnectionPool) => T;
    grpc: (value: VirtualNodeGrpcConnectionPool) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents the health check policy for a virtual node's listener.
 *
 * @public
 */
export interface HealthCheckPolicy {
  /**
   * The amount of time to wait when receiving a response from the health check, in milliseconds.
   *
   * @public
   */
  timeoutMillis: number | undefined;

  /**
   * The time period in milliseconds between each health check execution.
   *
   * @public
   */
  intervalMillis: number | undefined;

  /**
   * The protocol for the health check request. If you specify `grpc`, then your service must conform to the [GRPC Health Checking Protocol](https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
   *
   * @public
   */
  protocol: PortProtocol | undefined;

  /**
   * The destination port for the health check request. This port must match the port defined in the PortMapping for the listener.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The destination path for the health check request. This value is only used if the specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The number of consecutive successful health checks that must occur before declaring listener healthy.
   *
   * @public
   */
  healthyThreshold: number | undefined;

  /**
   * The number of consecutive failed health checks that must occur before declaring a virtual node unhealthy.
   *
   * @public
   */
  unhealthyThreshold: number | undefined;
}

/**
 * An object that represents a duration of time.
 *
 * @public
 */
export interface Duration {
  /**
   * A number of time units.
   *
   * @public
   */
  value?: number | undefined;

  /**
   * A unit of time.
   *
   * @public
   */
  unit?: DurationUnit | undefined;
}

/**
 * An object that represents the outlier detection for a virtual node's listener.
 *
 * @public
 */
export interface OutlierDetection {
  /**
   * Number of consecutive `5xx` errors required for ejection.
   *
   * @public
   */
  maxServerErrors: number | undefined;

  /**
   * The time interval between ejection sweep analysis.
   *
   * @public
   */
  interval: Duration | undefined;

  /**
   * The base amount of time for which a host is ejected.
   *
   * @public
   */
  baseEjectionDuration: Duration | undefined;

  /**
   * Maximum percentage of hosts in load balancing pool for upstream service that can be ejected. Will eject at least one host regardless of the value.
   *
   * @public
   */
  maxEjectionPercent: number | undefined;
}

/**
 * An object that represents a port mapping.
 *
 * @public
 */
export interface PortMapping {
  /**
   * The port used for the port mapping.
   *
   * @public
   */
  port: number | undefined;

  /**
   * The protocol used for the port mapping. Specify one protocol.
   *
   * @public
   */
  protocol: PortProtocol | undefined;
}

/**
 * An object that represents types of timeouts.
 *
 * @public
 */
export interface GrpcTimeout {
  /**
   * An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15 seconds for the source and destination virtual node and the route.
   *
   * @public
   */
  perRequest?: Duration | undefined;

  /**
   * An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
   *
   * @public
   */
  idle?: Duration | undefined;
}

/**
 * An object that represents types of timeouts.
 *
 * @public
 */
export interface HttpTimeout {
  /**
   * An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15 seconds for the source and destination virtual node and the route.
   *
   * @public
   */
  perRequest?: Duration | undefined;

  /**
   * An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
   *
   * @public
   */
  idle?: Duration | undefined;
}

/**
 * An object that represents types of timeouts.
 *
 * @public
 */
export interface TcpTimeout {
  /**
   * An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
   *
   * @public
   */
  idle?: Duration | undefined;
}

/**
 * An object that represents timeouts for different protocols.
 *
 * @public
 */
export type ListenerTimeout =
  | ListenerTimeout.GrpcMember
  | ListenerTimeout.HttpMember
  | ListenerTimeout.Http2Member
  | ListenerTimeout.TcpMember
  | ListenerTimeout.$UnknownMember;

/**
 * @public
 */
export namespace ListenerTimeout {
  /**
   * An object that represents types of timeouts.
   *
   * @public
   */
  export interface TcpMember {
    tcp: TcpTimeout;
    http?: never;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * An object that represents types of timeouts.
   *
   * @public
   */
  export interface HttpMember {
    tcp?: never;
    http: HttpTimeout;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * An object that represents types of timeouts.
   *
   * @public
   */
  export interface Http2Member {
    tcp?: never;
    http?: never;
    http2: HttpTimeout;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * An object that represents types of timeouts.
   *
   * @public
   */
  export interface GrpcMember {
    tcp?: never;
    http?: never;
    http2?: never;
    grpc: GrpcTimeout;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    tcp?: never;
    http?: never;
    http2?: never;
    grpc?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    tcp: (value: TcpTimeout) => T;
    http: (value: HttpTimeout) => T;
    http2: (value: HttpTimeout) => T;
    grpc: (value: GrpcTimeout) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents an Certificate Manager certificate.
 *
 * @public
 */
export interface ListenerTlsAcmCertificate {
  /**
   * The Amazon Resource Name (ARN) for the certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites).
   *
   * @public
   */
  certificateArn: string | undefined;
}

/**
 * An object that represents a listener's Transport Layer Security (TLS) certificate.
 *
 * @public
 */
export type ListenerTlsCertificate =
  | ListenerTlsCertificate.AcmMember
  | ListenerTlsCertificate.FileMember
  | ListenerTlsCertificate.SdsMember
  | ListenerTlsCertificate.$UnknownMember;

/**
 * @public
 */
export namespace ListenerTlsCertificate {
  /**
   * A reference to an object that represents an Certificate Manager certificate.
   *
   * @public
   */
  export interface AcmMember {
    acm: ListenerTlsAcmCertificate;
    file?: never;
    sds?: never;
    $unknown?: never;
  }

  /**
   * A reference to an object that represents a local file certificate.
   *
   * @public
   */
  export interface FileMember {
    acm?: never;
    file: ListenerTlsFileCertificate;
    sds?: never;
    $unknown?: never;
  }

  /**
   * A reference to an object that represents a listener's Secret Discovery Service certificate.
   *
   * @public
   */
  export interface SdsMember {
    acm?: never;
    file?: never;
    sds: ListenerTlsSdsCertificate;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    acm?: never;
    file?: never;
    sds?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    acm: (value: ListenerTlsAcmCertificate) => T;
    file: (value: ListenerTlsFileCertificate) => T;
    sds: (value: ListenerTlsSdsCertificate) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents a listener's Transport Layer Security (TLS) validation context trust.
 *
 * @public
 */
export type ListenerTlsValidationContextTrust =
  | ListenerTlsValidationContextTrust.FileMember
  | ListenerTlsValidationContextTrust.SdsMember
  | ListenerTlsValidationContextTrust.$UnknownMember;

/**
 * @public
 */
export namespace ListenerTlsValidationContextTrust {
  /**
   * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
   *
   * @public
   */
  export interface FileMember {
    file: TlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }

  /**
   * A reference to an object that represents a listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
   *
   * @public
   */
  export interface SdsMember {
    file?: never;
    sds: TlsValidationContextSdsTrust;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    file?: never;
    sds?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    file: (value: TlsValidationContextFileTrust) => T;
    sds: (value: TlsValidationContextSdsTrust) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents a listener's Transport Layer Security (TLS) validation context.
 *
 * @public
 */
export interface ListenerTlsValidationContext {
  /**
   * A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.
   *
   * @public
   */
  trust: ListenerTlsValidationContextTrust | undefined;

  /**
   * A reference to an object that represents the SANs for a listener's Transport Layer Security (TLS) validation context.
   *
   * @public
   */
  subjectAlternativeNames?: SubjectAlternativeNames | undefined;
}

/**
 * An object that represents the Transport Layer Security (TLS) properties for a listener.
 *
 * @public
 */
export interface ListenerTls {
  /**
   * Specify one of the following modes.
   *
   * - **STRICT – Listener only accepts connections with TLS enabled.**
   * - **PERMISSIVE – Listener accepts connections with or without TLS enabled.**
   * - **DISABLED – Listener only accepts connections without TLS.**
   *
   * @public
   */
  mode: ListenerTlsMode | undefined;

  /**
   * A reference to an object that represents a listener's Transport Layer Security (TLS) certificate.
   *
   * @public
   */
  certificate: ListenerTlsCertificate | undefined;

  /**
   * A reference to an object that represents a listener's Transport Layer Security (TLS) validation context.
   *
   * @public
   */
  validation?: ListenerTlsValidationContext | undefined;
}

/**
 * An object that represents a listener for a virtual node.
 *
 * @public
 */
export interface Listener {
  /**
   * The port mapping information for the listener.
   *
   * @public
   */
  portMapping: PortMapping | undefined;

  /**
   * A reference to an object that represents the Transport Layer Security (TLS) properties for a listener.
   *
   * @public
   */
  tls?: ListenerTls | undefined;

  /**
   * The health check information for the listener.
   *
   * @public
   */
  healthCheck?: HealthCheckPolicy | undefined;

  /**
   * An object that represents timeouts for different protocols.
   *
   * @public
   */
  timeout?: ListenerTimeout | undefined;

  /**
   * The outlier detection information for the listener.
   *
   * @public
   */
  outlierDetection?: OutlierDetection | undefined;

  /**
   * The connection pool information for the listener.
   *
   * @public
   */
  connectionPool?: VirtualNodeConnectionPool | undefined;
}

/**
 * An object that represents the logging information for a virtual node.
 *
 * @public
 */
export interface Logging {
  /**
   * The access log configuration for a virtual node.
   *
   * @public
   */
  accessLog?: AccessLog | undefined;
}

/**
 * An object that represents the Cloud Map attribute information for your virtual node.
 *
 * > **Note:** Cloud Map is not available in the eu-south-1 Region.
 *
 * @public
 */
export interface AwsCloudMapInstanceAttribute {
  /**
   * The name of an Cloud Map service instance attribute key. Any Cloud Map service instance that contains the specified key and value is returned.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of an Cloud Map service instance attribute key. Any Cloud Map service instance that contains the specified key and value is returned.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * An object that represents the Cloud Map service discovery information for your virtual node.
 *
 * > **Note:** Cloud Map is not available in the eu-south-1 Region.
 *
 * @public
 */
export interface AwsCloudMapServiceDiscovery {
  /**
   * The name of the Cloud Map namespace to use.
   *
   * @public
   */
  namespaceName: string | undefined;

  /**
   * The name of the Cloud Map service to use.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * A string map that contains attributes with values that you can use to filter instances by any custom attribute that you specified when you registered the instance. Only instances that match all of the specified key/value pairs will be returned.
   *
   * @public
   */
  attributes?: AwsCloudMapInstanceAttribute[] | undefined;

  /**
   * The preferred IP version that this virtual node uses. Setting the IP preference on the virtual node only overrides the IP preference set for the mesh on this specific node.
   *
   * @public
   */
  ipPreference?: IpPreference | undefined;
}

/**
 * An object that represents the DNS service discovery information for your virtual node.
 *
 * @public
 */
export interface DnsServiceDiscovery {
  /**
   * Specifies the DNS service discovery hostname for the virtual node.
   *
   * @public
   */
  hostname: string | undefined;

  /**
   * Specifies the DNS response type for the virtual node.
   *
   * @public
   */
  responseType?: DnsResponseType | undefined;

  /**
   * The preferred IP version that this virtual node uses. Setting the IP preference on the virtual node only overrides the IP preference set for the mesh on this specific node.
   *
   * @public
   */
  ipPreference?: IpPreference | undefined;
}

/**
 * An object that represents the service discovery information for a virtual node.
 *
 * @public
 */
export type ServiceDiscovery =
  | ServiceDiscovery.AwsCloudMapMember
  | ServiceDiscovery.DnsMember
  | ServiceDiscovery.$UnknownMember;

/**
 * @public
 */
export namespace ServiceDiscovery {
  /**
   * Specifies the DNS information for the virtual node.
   *
   * @public
   */
  export interface DnsMember {
    dns: DnsServiceDiscovery;
    awsCloudMap?: never;
    $unknown?: never;
  }

  /**
   * Specifies any Cloud Map information for the virtual node.
   *
   * @public
   */
  export interface AwsCloudMapMember {
    dns?: never;
    awsCloudMap: AwsCloudMapServiceDiscovery;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    dns?: never;
    awsCloudMap?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    dns: (value: DnsServiceDiscovery) => T;
    awsCloudMap: (value: AwsCloudMapServiceDiscovery) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents the specification of a virtual node.
 *
 * @public
 */
export interface VirtualNodeSpec {
  /**
   * The service discovery information for the virtual node. If your virtual node does not expect ingress traffic, you can omit this parameter. If you specify a `listener`, then you must specify service discovery information.
   *
   * @public
   */
  serviceDiscovery?: ServiceDiscovery | undefined;

  /**
   * The listener that the virtual node is expected to receive inbound traffic from. You can specify one listener.
   *
   * @public
   */
  listeners?: Listener[] | undefined;

  /**
   * The backends that the virtual node is expected to send outbound traffic to.
   *
   * @public
   */
  backends?: Backend[] | undefined;

  /**
   * A reference to an object that represents the defaults for backends.
   *
   * @public
   */
  backendDefaults?: BackendDefaults | undefined;

  /**
   * The inbound and outbound access logging information for the virtual node.
   *
   * @public
   */
  logging?: Logging | undefined;
}

/**
 *
 * @public
 */
export interface CreateVirtualNodeInput {
  /**
   * The name to use for the virtual node.
   *
   * @public
   */
  virtualNodeName: string | undefined;

  /**
   * The name of the service mesh to create the virtual node in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The virtual node specification to apply.
   *
   * @public
   */
  spec: VirtualNodeSpec | undefined;

  /**
   * Optional metadata that you can apply to the virtual node to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * @public
   */
  tags?: TagRef[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * An object that represents the current status of the virtual node.
 *
 * @public
 */
export interface VirtualNodeStatus {
  /**
   * The current status of the virtual node.
   *
   * @public
   */
  status: VirtualNodeStatusCode | undefined;
}

/**
 * An object that represents a virtual node returned by a describe operation.
 *
 * @public
 */
export interface VirtualNodeData {
  /**
   * The name of the service mesh that the virtual node resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the virtual node.
   *
   * @public
   */
  virtualNodeName: string | undefined;

  /**
   * The specifications of the virtual node.
   *
   * @public
   */
  spec: VirtualNodeSpec | undefined;

  /**
   * The associated metadata for the virtual node.
   *
   * @public
   */
  metadata: ResourceMetadata | undefined;

  /**
   * The current status for the virtual node.
   *
   * @public
   */
  status: VirtualNodeStatus | undefined;
}

/**
 *
 * @public
 */
export interface CreateVirtualNodeOutput {
  /**
   * The full description of your virtual node following the create call.
   *
   * @public
   */
  virtualNode: VirtualNodeData | undefined;
}

/**
 * Deletes a virtual node input.
 *
 * @public
 */
export interface DeleteVirtualNodeInput {
  /**
   * The name of the virtual node to delete.
   *
   * @public
   */
  virtualNodeName: string | undefined;

  /**
   * The name of the service mesh to delete the virtual node in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 *
 * @public
 */
export interface DeleteVirtualNodeOutput {
  /**
   * The virtual node that was deleted.
   *
   * @public
   */
  virtualNode: VirtualNodeData | undefined;
}

/**
 *
 * @public
 */
export interface DescribeVirtualNodeInput {
  /**
   * The name of the virtual node to describe.
   *
   * @public
   */
  virtualNodeName: string | undefined;

  /**
   * The name of the service mesh that the virtual node resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 *
 * @public
 */
export interface DescribeVirtualNodeOutput {
  /**
   * The full description of your virtual node.
   *
   * @public
   */
  virtualNode: VirtualNodeData | undefined;
}

/**
 *
 * @public
 */
export interface ListVirtualNodesInput {
  /**
   * The name of the service mesh to list virtual nodes in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListVirtualNodes` request where `limit` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results returned by `ListVirtualNodes` in paginated output. When you use this parameter, `ListVirtualNodes` returns only `limit` results in a single page along with a `nextToken` response element. You can see the remaining results of the initial request by sending another `ListVirtualNodes` request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, `ListVirtualNodes` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * An object that represents a virtual node returned by a list operation.
 *
 * @public
 */
export interface VirtualNodeRef {
  /**
   * The name of the service mesh that the virtual node resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the virtual node.
   *
   * @public
   */
  virtualNodeName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  resourceOwner: string | undefined;

  /**
   * The full Amazon Resource Name (ARN) for the virtual node.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.
   *
   * @public
   */
  version: number | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the resource was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the resource was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 *
 * @public
 */
export interface ListVirtualNodesOutput {
  /**
   * The list of existing virtual nodes for the specified service mesh.
   *
   * @public
   */
  virtualNodes: VirtualNodeRef[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListVirtualNodes` request. When the results of a `ListVirtualNodes` request exceed `limit`, you can use this value to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 *
 * @public
 */
export interface UpdateVirtualNodeInput {
  /**
   * The name of the virtual node to update.
   *
   * @public
   */
  virtualNodeName: string | undefined;

  /**
   * The name of the service mesh that the virtual node resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The new virtual node specification to apply. This overwrites the existing data.
   *
   * @public
   */
  spec: VirtualNodeSpec | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 *
 * @public
 */
export interface UpdateVirtualNodeOutput {
  /**
   * A full description of the virtual node that was updated.
   *
   * @public
   */
  virtualNode: VirtualNodeData | undefined;
}

/**
 * An object that represents a virtual router listener.
 *
 * @public
 */
export interface VirtualRouterListener {
  /**
   * An object that represents a port mapping.
   *
   * @public
   */
  portMapping: PortMapping | undefined;
}

/**
 * An object that represents the specification of a virtual router.
 *
 * @public
 */
export interface VirtualRouterSpec {
  /**
   * The listeners that the virtual router is expected to receive inbound traffic from. You can specify one listener.
   *
   * @public
   */
  listeners?: VirtualRouterListener[] | undefined;
}

/**
 *
 * @public
 */
export interface CreateVirtualRouterInput {
  /**
   * The name to use for the virtual router.
   *
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * The name of the service mesh to create the virtual router in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The virtual router specification to apply.
   *
   * @public
   */
  spec: VirtualRouterSpec | undefined;

  /**
   * Optional metadata that you can apply to the virtual router to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * @public
   */
  tags?: TagRef[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * An object that represents the status of a virtual router.
 *
 * @public
 */
export interface VirtualRouterStatus {
  /**
   * The current status of the virtual router.
   *
   * @public
   */
  status: VirtualRouterStatusCode | undefined;
}

/**
 * An object that represents a virtual router returned by a describe operation.
 *
 * @public
 */
export interface VirtualRouterData {
  /**
   * The name of the service mesh that the virtual router resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the virtual router.
   *
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * The specifications of the virtual router.
   *
   * @public
   */
  spec: VirtualRouterSpec | undefined;

  /**
   * The associated metadata for the virtual router.
   *
   * @public
   */
  metadata: ResourceMetadata | undefined;

  /**
   * The current status of the virtual router.
   *
   * @public
   */
  status: VirtualRouterStatus | undefined;
}

/**
 *
 * @public
 */
export interface CreateVirtualRouterOutput {
  /**
   * The full description of your virtual router following the create call.
   *
   * @public
   */
  virtualRouter: VirtualRouterData | undefined;
}

/**
 *
 * @public
 */
export interface DeleteVirtualRouterInput {
  /**
   * The name of the virtual router to delete.
   *
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * The name of the service mesh to delete the virtual router in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 *
 * @public
 */
export interface DeleteVirtualRouterOutput {
  /**
   * The virtual router that was deleted.
   *
   * @public
   */
  virtualRouter: VirtualRouterData | undefined;
}

/**
 *
 * @public
 */
export interface DescribeVirtualRouterInput {
  /**
   * The name of the virtual router to describe.
   *
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * The name of the service mesh that the virtual router resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 *
 * @public
 */
export interface DescribeVirtualRouterOutput {
  /**
   * The full description of your virtual router.
   *
   * @public
   */
  virtualRouter: VirtualRouterData | undefined;
}

/**
 *
 * @public
 */
export interface ListVirtualRoutersInput {
  /**
   * The name of the service mesh to list virtual routers in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListVirtualRouters` request where `limit` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results returned by `ListVirtualRouters` in paginated output. When you use this parameter, `ListVirtualRouters` returns only `limit` results in a single page along with a `nextToken` response element. You can see the remaining results of the initial request by sending another `ListVirtualRouters` request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, `ListVirtualRouters` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * An object that represents a virtual router returned by a list operation.
 *
 * @public
 */
export interface VirtualRouterRef {
  /**
   * The name of the service mesh that the virtual router resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the virtual router.
   *
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  resourceOwner: string | undefined;

  /**
   * The full Amazon Resource Name (ARN) for the virtual router.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.
   *
   * @public
   */
  version: number | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the resource was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the resource was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 *
 * @public
 */
export interface ListVirtualRoutersOutput {
  /**
   * The list of existing virtual routers for the specified service mesh.
   *
   * @public
   */
  virtualRouters: VirtualRouterRef[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListVirtualRouters` request. When the results of a `ListVirtualRouters` request exceed `limit`, you can use this value to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object that represents a target and its relative weight. Traffic is distributed across targets according to their relative weight. For example, a weighted target with a relative weight of 50 receives five times as much traffic as one with a relative weight of 10. The total weight for all targets combined must be less than or equal to 100.
 *
 * @public
 */
export interface WeightedTarget {
  /**
   * The virtual node to associate with the weighted target.
   *
   * @public
   */
  virtualNode: string | undefined;

  /**
   * The relative weight of the weighted target.
   *
   * @public
   */
  weight: number | undefined;

  /**
   * The targeted port of the weighted object.
   *
   * @public
   */
  port?: number | undefined;
}

/**
 * An object that represents the action to take if a match is determined.
 *
 * @public
 */
export interface GrpcRouteAction {
  /**
   * An object that represents the targets that traffic is routed to when a request matches the route.
   *
   * @public
   */
  weightedTargets: WeightedTarget[] | undefined;
}

/**
 * An object that represents the match method. Specify one of the match values.
 *
 * @public
 */
export type GrpcRouteMetadataMatchMethod =
  | GrpcRouteMetadataMatchMethod.ExactMember
  | GrpcRouteMetadataMatchMethod.PrefixMember
  | GrpcRouteMetadataMatchMethod.RangeMember
  | GrpcRouteMetadataMatchMethod.RegexMember
  | GrpcRouteMetadataMatchMethod.SuffixMember
  | GrpcRouteMetadataMatchMethod.$UnknownMember;

/**
 * @public
 */
export namespace GrpcRouteMetadataMatchMethod {
  /**
   * The value sent by the client must match the specified value exactly.
   *
   * @public
   */
  export interface ExactMember {
    exact: string;
    regex?: never;
    range?: never;
    prefix?: never;
    suffix?: never;
    $unknown?: never;
  }

  /**
   * The value sent by the client must include the specified characters.
   *
   * @public
   */
  export interface RegexMember {
    exact?: never;
    regex: string;
    range?: never;
    prefix?: never;
    suffix?: never;
    $unknown?: never;
  }

  /**
   * An object that represents the range of values to match on.
   *
   * @public
   */
  export interface RangeMember {
    exact?: never;
    regex?: never;
    range: MatchRange;
    prefix?: never;
    suffix?: never;
    $unknown?: never;
  }

  /**
   * The value sent by the client must begin with the specified characters.
   *
   * @public
   */
  export interface PrefixMember {
    exact?: never;
    regex?: never;
    range?: never;
    prefix: string;
    suffix?: never;
    $unknown?: never;
  }

  /**
   * The value sent by the client must end with the specified characters.
   *
   * @public
   */
  export interface SuffixMember {
    exact?: never;
    regex?: never;
    range?: never;
    prefix?: never;
    suffix: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    exact?: never;
    regex?: never;
    range?: never;
    prefix?: never;
    suffix?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    exact: (value: string) => T;
    regex: (value: string) => T;
    range: (value: MatchRange) => T;
    prefix: (value: string) => T;
    suffix: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents the match metadata for the route.
 *
 * @public
 */
export interface GrpcRouteMetadata {
  /**
   * The name of the route.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specify `True` to match anything except the match criteria. The default value is `False`.
   *
   * @public
   */
  invert?: boolean | undefined;

  /**
   * An object that represents the data to match from the request.
   *
   * @public
   */
  match?: GrpcRouteMetadataMatchMethod | undefined;
}

/**
 * An object that represents the criteria for determining a request match.
 *
 * @public
 */
export interface GrpcRouteMatch {
  /**
   * The fully qualified domain name for the service to match from the request.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The method name to match from the request. If you specify a name, you must also specify a `serviceName`.
   *
   * @public
   */
  methodName?: string | undefined;

  /**
   * An object that represents the data to match from the request.
   *
   * @public
   */
  metadata?: GrpcRouteMetadata[] | undefined;

  /**
   * The port number to match on.
   *
   * @public
   */
  port?: number | undefined;
}

/**
 * An object that represents a retry policy. Specify at least one value for at least one of the types of `RetryEvents`, a value for `maxRetries`, and a value for `perRetryTimeout`. Both `server-error` and `gateway-error` under `httpRetryEvents` include the Envoy `reset` policy. For more information on the `reset` policy, see the [Envoy documentation](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on).
 *
 * @public
 */
export interface GrpcRetryPolicy {
  /**
   * The timeout for each retry attempt.
   *
   * @public
   */
  perRetryTimeout: Duration | undefined;

  /**
   * The maximum number of retry attempts.
   *
   * @public
   */
  maxRetries: number | undefined;

  /**
   * Specify at least one of the following values.
   *
   * - **server-error** – HTTP status codes 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, and 511
   * - **gateway-error** – HTTP status codes 502, 503, and 504
   * - **client-error** – HTTP status code 409
   * - **stream-error** – Retry on refused stream
   *
   * @public
   */
  httpRetryEvents?: string[] | undefined;

  /**
   * Specify a valid value. The event occurs before any processing of a request has started and is encountered when the upstream is temporarily or permanently unavailable.
   *
   * @public
   */
  tcpRetryEvents?: TcpRetryPolicyEvent[] | undefined;

  /**
   * Specify at least one of the valid values.
   *
   * @public
   */
  grpcRetryEvents?: GrpcRetryPolicyEvent[] | undefined;
}

/**
 * An object that represents a gRPC route type.
 *
 * @public
 */
export interface GrpcRoute {
  /**
   * An object that represents the action to take if a match is determined.
   *
   * @public
   */
  action: GrpcRouteAction | undefined;

  /**
   * An object that represents the criteria for determining a request match.
   *
   * @public
   */
  match: GrpcRouteMatch | undefined;

  /**
   * An object that represents a retry policy.
   *
   * @public
   */
  retryPolicy?: GrpcRetryPolicy | undefined;

  /**
   * An object that represents types of timeouts.
   *
   * @public
   */
  timeout?: GrpcTimeout | undefined;
}

/**
 * An object that represents the action to take if a match is determined.
 *
 * @public
 */
export interface HttpRouteAction {
  /**
   * An object that represents the targets that traffic is routed to when a request matches the route.
   *
   * @public
   */
  weightedTargets: WeightedTarget[] | undefined;
}

/**
 * An object that represents the HTTP header in the request.
 *
 * @public
 */
export interface HttpRouteHeader {
  /**
   * A name for the HTTP header in the client request that will be matched on.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specify `True` to match anything except the match criteria. The default value is `False`.
   *
   * @public
   */
  invert?: boolean | undefined;

  /**
   * The `HeaderMatchMethod` object.
   *
   * @public
   */
  match?: HeaderMatchMethod | undefined;
}

/**
 * An object that represents the requirements for a route to match HTTP requests for a virtual router.
 *
 * @public
 */
export interface HttpRouteMatch {
  /**
   * Specifies the path to match requests with. This parameter must always start with `/`, which by itself matches all requests to the virtual service name. You can also match for path-based routing of requests. For example, if your virtual service name is `my-service.local` and you want the route to match requests to `my-service.local/metrics`, your prefix should be `/metrics`.
   *
   * @public
   */
  prefix?: string | undefined;

  /**
   * The client request path to match on.
   *
   * @public
   */
  path?: HttpPathMatch | undefined;

  /**
   * The client request query parameters to match on.
   *
   * @public
   */
  queryParameters?: HttpQueryParameter[] | undefined;

  /**
   * The client request method to match on. Specify only one.
   *
   * @public
   */
  method?: HttpMethod | undefined;

  /**
   * The client request scheme to match on. Specify only one. Applicable only for HTTP2 routes.
   *
   * @public
   */
  scheme?: HttpScheme | undefined;

  /**
   * The client request headers to match on.
   *
   * @public
   */
  headers?: HttpRouteHeader[] | undefined;

  /**
   * The port number to match on.
   *
   * @public
   */
  port?: number | undefined;
}

/**
 * An object that represents a retry policy. Specify at least one value for at least one of the types of `RetryEvents`, a value for `maxRetries`, and a value for `perRetryTimeout`. Both `server-error` and `gateway-error` under `httpRetryEvents` include the Envoy `reset` policy. For more information on the `reset` policy, see the [Envoy documentation](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on).
 *
 * @public
 */
export interface HttpRetryPolicy {
  /**
   * The timeout for each retry attempt.
   *
   * @public
   */
  perRetryTimeout: Duration | undefined;

  /**
   * The maximum number of retry attempts.
   *
   * @public
   */
  maxRetries: number | undefined;

  /**
   * Specify at least one of the following values.
   *
   * - **server-error** – HTTP status codes 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, and 511
   * - **gateway-error** – HTTP status codes 502, 503, and 504
   * - **client-error** – HTTP status code 409
   * - **stream-error** – Retry on refused stream
   *
   * @public
   */
  httpRetryEvents?: string[] | undefined;

  /**
   * Specify a valid value. The event occurs before any processing of a request has started and is encountered when the upstream is temporarily or permanently unavailable.
   *
   * @public
   */
  tcpRetryEvents?: TcpRetryPolicyEvent[] | undefined;
}

/**
 * An object that represents an HTTP or HTTP/2 route type.
 *
 * @public
 */
export interface HttpRoute {
  /**
   * An object that represents the criteria for determining a request match.
   *
   * @public
   */
  match: HttpRouteMatch | undefined;

  /**
   * An object that represents the action to take if a match is determined.
   *
   * @public
   */
  action: HttpRouteAction | undefined;

  /**
   * An object that represents a retry policy.
   *
   * @public
   */
  retryPolicy?: HttpRetryPolicy | undefined;

  /**
   * An object that represents types of timeouts.
   *
   * @public
   */
  timeout?: HttpTimeout | undefined;
}

/**
 * An object that represents the action to take if a match is determined.
 *
 * @public
 */
export interface TcpRouteAction {
  /**
   * An object that represents the targets that traffic is routed to when a request matches the route.
   *
   * @public
   */
  weightedTargets: WeightedTarget[] | undefined;
}

/**
 * An object representing the TCP route to match.
 *
 * @public
 */
export interface TcpRouteMatch {
  /**
   * The port number to match on.
   *
   * @public
   */
  port?: number | undefined;
}

/**
 * An object that represents a TCP route type.
 *
 * @public
 */
export interface TcpRoute {
  /**
   * The action to take if a match is determined.
   *
   * @public
   */
  action: TcpRouteAction | undefined;

  /**
   * An object that represents types of timeouts.
   *
   * @public
   */
  timeout?: TcpTimeout | undefined;

  /**
   * An object that represents the criteria for determining a request match.
   *
   * @public
   */
  match?: TcpRouteMatch | undefined;
}

/**
 * An object that represents a route specification. Specify one route type.
 *
 * @public
 */
export interface RouteSpec {
  /**
   * The priority for the route. Routes are matched based on the specified value, where 0 is the highest priority.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * An object that represents the specification of an HTTP route.
   *
   * @public
   */
  httpRoute?: HttpRoute | undefined;

  /**
   * An object that represents the specification of a TCP route.
   *
   * @public
   */
  tcpRoute?: TcpRoute | undefined;

  /**
   * An object that represents the specification of an HTTP/2 route.
   *
   * @public
   */
  http2Route?: HttpRoute | undefined;

  /**
   * An object that represents the specification of a gRPC route.
   *
   * @public
   */
  grpcRoute?: GrpcRoute | undefined;
}

/**
 *
 * @public
 */
export interface CreateRouteInput {
  /**
   * The name to use for the route.
   *
   * @public
   */
  routeName: string | undefined;

  /**
   * The name of the service mesh to create the route in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the virtual router in which to create the route. If the virtual router is in a shared mesh, then you must be the owner of the virtual router resource.
   *
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * The route specification to apply.
   *
   * @public
   */
  spec: RouteSpec | undefined;

  /**
   * Optional metadata that you can apply to the route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * @public
   */
  tags?: TagRef[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * An object that represents the current status of a route.
 *
 * @public
 */
export interface RouteStatus {
  /**
   * The current status for the route.
   *
   * @public
   */
  status: RouteStatusCode | undefined;
}

/**
 * An object that represents a route returned by a describe operation.
 *
 * @public
 */
export interface RouteData {
  /**
   * The name of the service mesh that the route resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The virtual router that the route is associated with.
   *
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * The name of the route.
   *
   * @public
   */
  routeName: string | undefined;

  /**
   * The specifications of the route.
   *
   * @public
   */
  spec: RouteSpec | undefined;

  /**
   * The associated metadata for the route.
   *
   * @public
   */
  metadata: ResourceMetadata | undefined;

  /**
   * The status of the route.
   *
   * @public
   */
  status: RouteStatus | undefined;
}

/**
 *
 * @public
 */
export interface CreateRouteOutput {
  /**
   * The full description of your mesh following the create call.
   *
   * @public
   */
  route: RouteData | undefined;
}

/**
 *
 * @public
 */
export interface DeleteRouteInput {
  /**
   * The name of the route to delete.
   *
   * @public
   */
  routeName: string | undefined;

  /**
   * The name of the service mesh to delete the route in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the virtual router to delete the route in.
   *
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 *
 * @public
 */
export interface DeleteRouteOutput {
  /**
   * The route that was deleted.
   *
   * @public
   */
  route: RouteData | undefined;
}

/**
 *
 * @public
 */
export interface DescribeRouteInput {
  /**
   * The name of the route to describe.
   *
   * @public
   */
  routeName: string | undefined;

  /**
   * The name of the service mesh that the route resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;

  /**
   * The name of the virtual router that the route is associated with.
   *
   * @public
   */
  virtualRouterName: string | undefined;
}

/**
 *
 * @public
 */
export interface DescribeRouteOutput {
  /**
   * The full description of your route.
   *
   * @public
   */
  route: RouteData | undefined;
}

/**
 *
 * @public
 */
export interface ListRoutesInput {
  /**
   * The name of the service mesh to list routes in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the virtual router to list routes in.
   *
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListRoutes` request where `limit` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results returned by `ListRoutes` in paginated output. When you use this parameter, `ListRoutes` returns only `limit` results in a single page along with a `nextToken` response element. You can see the remaining results of the initial request by sending another `ListRoutes` request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, `ListRoutes` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * An object that represents a route returned by a list operation.
 *
 * @public
 */
export interface RouteRef {
  /**
   * The name of the service mesh that the route resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The virtual router that the route is associated with.
   *
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * The name of the route.
   *
   * @public
   */
  routeName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  resourceOwner: string | undefined;

  /**
   * The full Amazon Resource Name (ARN) for the route.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.
   *
   * @public
   */
  version: number | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the resource was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the resource was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 *
 * @public
 */
export interface ListRoutesOutput {
  /**
   * The list of existing routes for the specified service mesh and virtual router.
   *
   * @public
   */
  routes: RouteRef[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListRoutes` request. When the results of a `ListRoutes` request exceed `limit`, you can use this value to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 *
 * @public
 */
export interface UpdateRouteInput {
  /**
   * The name of the route to update.
   *
   * @public
   */
  routeName: string | undefined;

  /**
   * The name of the service mesh that the route resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the virtual router that the route is associated with.
   *
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * The new route specification to apply. This overwrites the existing data.
   *
   * @public
   */
  spec: RouteSpec | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 *
 * @public
 */
export interface UpdateRouteOutput {
  /**
   * A full description of the route that was updated.
   *
   * @public
   */
  route: RouteData | undefined;
}

/**
 *
 * @public
 */
export interface UpdateVirtualRouterInput {
  /**
   * The name of the virtual router to update.
   *
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * The name of the service mesh that the virtual router resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The new virtual router specification to apply. This overwrites the existing data.
   *
   * @public
   */
  spec: VirtualRouterSpec | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 *
 * @public
 */
export interface UpdateVirtualRouterOutput {
  /**
   * A full description of the virtual router that was updated.
   *
   * @public
   */
  virtualRouter: VirtualRouterData | undefined;
}

/**
 * An object that represents a virtual node service provider.
 *
 * @public
 */
export interface VirtualNodeServiceProvider {
  /**
   * The name of the virtual node that is acting as a service provider.
   *
   * @public
   */
  virtualNodeName: string | undefined;
}

/**
 * An object that represents a virtual node service provider.
 *
 * @public
 */
export interface VirtualRouterServiceProvider {
  /**
   * The name of the virtual router that is acting as a service provider.
   *
   * @public
   */
  virtualRouterName: string | undefined;
}

/**
 * An object that represents the provider for a virtual service.
 *
 * @public
 */
export type VirtualServiceProvider =
  | VirtualServiceProvider.VirtualNodeMember
  | VirtualServiceProvider.VirtualRouterMember
  | VirtualServiceProvider.$UnknownMember;

/**
 * @public
 */
export namespace VirtualServiceProvider {
  /**
   * The virtual node associated with a virtual service.
   *
   * @public
   */
  export interface VirtualNodeMember {
    virtualNode: VirtualNodeServiceProvider;
    virtualRouter?: never;
    $unknown?: never;
  }

  /**
   * The virtual router associated with a virtual service.
   *
   * @public
   */
  export interface VirtualRouterMember {
    virtualNode?: never;
    virtualRouter: VirtualRouterServiceProvider;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    virtualNode?: never;
    virtualRouter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    virtualNode: (value: VirtualNodeServiceProvider) => T;
    virtualRouter: (value: VirtualRouterServiceProvider) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that represents the specification of a virtual service.
 *
 * @public
 */
export interface VirtualServiceSpec {
  /**
   * The App Mesh object that is acting as the provider for a virtual service. You can specify a single virtual node or virtual router.
   *
   * @public
   */
  provider?: VirtualServiceProvider | undefined;
}

/**
 *
 * @public
 */
export interface CreateVirtualServiceInput {
  /**
   * The name to use for the virtual service.
   *
   * @public
   */
  virtualServiceName: string | undefined;

  /**
   * The name of the service mesh to create the virtual service in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The virtual service specification to apply.
   *
   * @public
   */
  spec: VirtualServiceSpec | undefined;

  /**
   * Optional metadata that you can apply to the virtual service to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * @public
   */
  tags?: TagRef[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * An object that represents the status of a virtual service.
 *
 * @public
 */
export interface VirtualServiceStatus {
  /**
   * The current status of the virtual service.
   *
   * @public
   */
  status: VirtualServiceStatusCode | undefined;
}

/**
 * An object that represents a virtual service returned by a describe operation.
 *
 * @public
 */
export interface VirtualServiceData {
  /**
   * The name of the service mesh that the virtual service resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the virtual service.
   *
   * @public
   */
  virtualServiceName: string | undefined;

  /**
   * The specifications of the virtual service.
   *
   * @public
   */
  spec: VirtualServiceSpec | undefined;

  /**
   * An object that represents metadata for a resource.
   *
   * @public
   */
  metadata: ResourceMetadata | undefined;

  /**
   * The current status of the virtual service.
   *
   * @public
   */
  status: VirtualServiceStatus | undefined;
}

/**
 *
 * @public
 */
export interface CreateVirtualServiceOutput {
  /**
   * The full description of your virtual service following the create call.
   *
   * @public
   */
  virtualService: VirtualServiceData | undefined;
}

/**
 *
 * @public
 */
export interface DeleteVirtualServiceInput {
  /**
   * The name of the virtual service to delete.
   *
   * @public
   */
  virtualServiceName: string | undefined;

  /**
   * The name of the service mesh to delete the virtual service in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 *
 * @public
 */
export interface DeleteVirtualServiceOutput {
  /**
   * The virtual service that was deleted.
   *
   * @public
   */
  virtualService: VirtualServiceData | undefined;
}

/**
 *
 * @public
 */
export interface DescribeVirtualServiceInput {
  /**
   * The name of the virtual service to describe.
   *
   * @public
   */
  virtualServiceName: string | undefined;

  /**
   * The name of the service mesh that the virtual service resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 *
 * @public
 */
export interface DescribeVirtualServiceOutput {
  /**
   * The full description of your virtual service.
   *
   * @public
   */
  virtualService: VirtualServiceData | undefined;
}

/**
 *
 * @public
 */
export interface ListVirtualServicesInput {
  /**
   * The name of the service mesh to list virtual services in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListVirtualServices` request where `limit` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results returned by `ListVirtualServices` in paginated output. When you use this parameter, `ListVirtualServices` returns only `limit` results in a single page along with a `nextToken` response element. You can see the remaining results of the initial request by sending another `ListVirtualServices` request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, `ListVirtualServices` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * An object that represents a virtual service returned by a list operation.
 *
 * @public
 */
export interface VirtualServiceRef {
  /**
   * The name of the service mesh that the virtual service resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The name of the virtual service.
   *
   * @public
   */
  virtualServiceName: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  resourceOwner: string | undefined;

  /**
   * The full Amazon Resource Name (ARN) for the virtual service.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.
   *
   * @public
   */
  version: number | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the resource was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the resource was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 *
 * @public
 */
export interface ListVirtualServicesOutput {
  /**
   * The list of existing virtual services for the specified service mesh.
   *
   * @public
   */
  virtualServices: VirtualServiceRef[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListVirtualServices` request. When the results of a `ListVirtualServices` request exceed `limit`, you can use this value to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 *
 * @public
 */
export interface UpdateVirtualServiceInput {
  /**
   * The name of the virtual service to update.
   *
   * @public
   */
  virtualServiceName: string | undefined;

  /**
   * The name of the service mesh that the virtual service resides in.
   *
   * @public
   */
  meshName: string | undefined;

  /**
   * The new virtual service specification to apply. This overwrites the existing data.
   *
   * @public
   */
  spec: VirtualServiceSpec | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 *
 * @public
 */
export interface UpdateVirtualServiceOutput {
  /**
   * A full description of the virtual service that was updated.
   *
   * @public
   */
  virtualService: VirtualServiceData | undefined;
}

/**
 *
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource to add tags to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * @public
   */
  tags: TagRef[] | undefined;
}

/**
 *
 * @public
 */
export interface TagResourceOutput {}

/**
 *
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource to delete tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags to be removed.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 *
 * @public
 */
export interface UntagResourceOutput {}
