// smithy-typescript generated code
import {
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
 * <p>An object that represents the key value pairs for the JSON.</p>
 * @public
 */
export interface JsonFormatRef {
  /**
   * <p>The specified key for the JSON.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The specified value for the JSON.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>An object that represents the format for the logs.</p>
 * @public
 */
export type LoggingFormat = LoggingFormat.JsonMember | LoggingFormat.TextMember | LoggingFormat.$UnknownMember;

/**
 * @public
 */
export namespace LoggingFormat {
  /**
   * <p/>
   * @public
   */
  export interface TextMember {
    text: string;
    json?: never;
    $unknown?: never;
  }

  /**
   * <p/>
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
 * <p>An object that represents an access log file.</p>
 * @public
 */
export interface FileAccessLog {
  /**
   * <p>The file path to write access logs to. You can use <code>/dev/stdout</code> to send
   *          access logs to standard out and configure your Envoy container to use a log driver, such as
   *             <code>awslogs</code>, to export the access logs to a log storage service such as Amazon
   *          CloudWatch Logs. You can also specify a path in the Envoy container's file system to write
   *          the files to disk.</p>
   *          <note>
   *             <p>The Envoy process must have write permissions to the path that you specify here.
   *             Otherwise, Envoy fails to bootstrap properly.</p>
   *          </note>
   * @public
   */
  path: string | undefined;

  /**
   * <p>The specified format for the logs. The format is either <code>json_format</code> or
   *             <code>text_format</code>.</p>
   * @public
   */
  format?: LoggingFormat | undefined;
}

/**
 * <p>An object that represents the access logging information for a virtual node.</p>
 * @public
 */
export type AccessLog = AccessLog.FileMember | AccessLog.$UnknownMember;

/**
 * @public
 */
export namespace AccessLog {
  /**
   * <p>The file object to send virtual node access logs to.</p>
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
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListTagsForResource</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of tag results returned by <code>ListTagsForResource</code> in
   *          paginated output. When this parameter is used, <code>ListTagsForResource</code> returns
   *          only <code>limit</code> results in a single page along with a <code>nextToken</code>
   *          response element. You can see the remaining results of the initial request by sending
   *          another <code>ListTagsForResource</code> request with the returned <code>nextToken</code>
   *          value. This value can be between 1 and 100. If you don't use
   *          this parameter, <code>ListTagsForResource</code> returns up to 100
   *          results and a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>Optional metadata that you apply to a resource to assist with categorization and
 *          organization. Each tag consists of a key and an optional value, both of which you define.
 *          Tag keys can have a maximum character length of 128 characters, and tag values can have
 *             a maximum length of 256 characters.</p>
 * @public
 */
export interface TagRef {
  /**
   * <p>One part of a key-value pair that make up a tag. A <code>key</code> is a general label
   *          that acts like a category for more specific tag values.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A <code>value</code> acts as a
   *          descriptor within a tag category (key).</p>
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
   * <p>The tags for the resource.</p>
   * @public
   */
  tags: TagRef[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListTagsForResource</code>
   *          request. When the results of a <code>ListTagsForResource</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>An object that represents the egress filter rules for a service mesh.</p>
 * @public
 */
export interface EgressFilter {
  /**
   * <p>The egress filter type. By default, the type is <code>DROP_ALL</code>, which allows
   *          egress only from virtual nodes to other defined resources in the service mesh (and any
   *          traffic to <code>*.amazonaws.com</code> for Amazon Web Services API calls). You can set the
   *          egress filter type to <code>ALLOW_ALL</code> to allow egress to any endpoint inside or
   *          outside of the service mesh.</p>
   * @public
   */
  type: EgressFilterType | undefined;
}

/**
 * <p>An object that represents the service discovery information for a service mesh.</p>
 * @public
 */
export interface MeshServiceDiscovery {
  /**
   * <p>The IP version to use to control traffic within the mesh.</p>
   * @public
   */
  ipPreference?: IpPreference | undefined;
}

/**
 * <p>An object that represents the specification of a service mesh.</p>
 * @public
 */
export interface MeshSpec {
  /**
   * <p>The egress filter rules for the service mesh.</p>
   * @public
   */
  egressFilter?: EgressFilter | undefined;

  /**
   * <p>An object that represents the service discovery information for a service mesh.</p>
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
   * <p>The name to use for the service mesh.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The service mesh specification to apply.</p>
   * @public
   */
  spec?: MeshSpec | undefined;

  /**
   * <p>Optional metadata that you can apply to the service mesh to assist with categorization
   *          and organization. Each tag consists of a key and an optional value, both of which you
   *          define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   * @public
   */
  tags?: TagRef[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>An object that represents metadata for a resource.</p>
 * @public
 */
export interface ResourceMetadata {
  /**
   * <p>The full Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   * @public
   */
  version: number | undefined;

  /**
   * <p>The unique identifier for the resource.</p>
   * @public
   */
  uid: string | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  resourceOwner: string | undefined;
}

/**
 * <p>An object that represents the status of a service mesh.</p>
 * @public
 */
export interface MeshStatus {
  /**
   * <p>The current mesh status.</p>
   * @public
   */
  status?: MeshStatusCode | undefined;
}

/**
 * <p>An object that represents a service mesh returned by a describe operation.</p>
 * @public
 */
export interface MeshData {
  /**
   * <p>The name of the service mesh.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The associated specification for the service mesh.</p>
   * @public
   */
  spec: MeshSpec | undefined;

  /**
   * <p>The associated metadata for the service mesh.</p>
   * @public
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The status of the service mesh.</p>
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
   * <p>The full description of your service mesh following the create call.</p>
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
   * <p>The name of the service mesh to delete.</p>
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
   * <p>The service mesh that was deleted.</p>
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
   * <p>The name of the service mesh to describe.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
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
   * <p>The full description of your service mesh.</p>
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
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListMeshes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results returned by <code>ListMeshes</code> in paginated output.
   *          When you use this parameter, <code>ListMeshes</code> returns only <code>limit</code>
   *          results in a single page along with a <code>nextToken</code> response element. You can see
   *          the remaining results of the initial request by sending another <code>ListMeshes</code>
   *          request with the returned <code>nextToken</code> value. This value can be between
   *          1 and 100. If you don't use this parameter,
   *             <code>ListMeshes</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>An object that represents a service mesh returned by a list operation.</p>
 * @public
 */
export interface MeshRef {
  /**
   * <p>The name of the service mesh.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  resourceOwner: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) of the service mesh.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   * @public
   */
  version: number | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
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
   * <p>The list of existing service meshes.</p>
   * @public
   */
  meshes: MeshRef[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListMeshes</code> request.
   *          When the results of a <code>ListMeshes</code> request exceed <code>limit</code>, you can
   *          use this value to retrieve the next page of results. This value is <code>null</code> when
   *          there are no more results to return.</p>
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
   * <p>The name of the service mesh to update.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The service mesh specification to apply.</p>
   * @public
   */
  spec?: MeshSpec | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
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
   * <p>An object that represents a service mesh returned by a describe operation.</p>
   * @public
   */
  mesh: MeshData | undefined;
}

/**
 * <p>An object that represents a local file certificate.
 *          The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
 * @public
 */
export interface VirtualGatewayListenerTlsFileCertificate {
  /**
   * <p>The certificate chain for the certificate.</p>
   * @public
   */
  certificateChain: string | undefined;

  /**
   * <p>The private key for a certificate stored on the file system of the mesh endpoint that
   *          the proxy is running on.</p>
   * @public
   */
  privateKey: string | undefined;
}

/**
 * <p>An object that represents the virtual gateway's listener's Secret Discovery Service
 *          certificate.The proxy must be configured with a local SDS provider via a Unix Domain
 *          Socket. See App Mesh<a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS
 *             documentation</a> for more info. </p>
 * @public
 */
export interface VirtualGatewayListenerTlsSdsCertificate {
  /**
   * <p>A reference to an object that represents the name of the secret secret requested from
   *          the Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or
   *          certificate chain.</p>
   * @public
   */
  secretName: string | undefined;
}

/**
 * <p>An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate.</p>
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
   * <p>An object that represents a local file certificate. The certificate must meet specific
   *          requirements and you must have proxy authorization enabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html"> Transport Layer Security (TLS)
   *          </a>.</p>
   * @public
   */
  export interface FileMember {
    file: VirtualGatewayListenerTlsFileCertificate;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>A reference to an object that represents a virtual gateway's client's Secret Discovery
   *          Service certificate.</p>
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
 * <p>An object that represents the methods by which a subject alternative name on a peer
 *          Transport Layer Security (TLS) certificate can be matched.</p>
 * @public
 */
export interface SubjectAlternativeNameMatchers {
  /**
   * <p>The values sent must match the specified values exactly.</p>
   * @public
   */
  exact: string[] | undefined;
}

/**
 * <p>An object that represents the subject alternative names secured by the
 *          certificate.</p>
 * @public
 */
export interface SubjectAlternativeNames {
  /**
   * <p>An object that represents the criteria for determining a SANs match.</p>
   * @public
   */
  match: SubjectAlternativeNameMatchers | undefined;
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager
 *          certificate.</p>
 * @public
 */
export interface VirtualGatewayTlsValidationContextAcmTrust {
  /**
   * <p>One or more ACM Amazon Resource Name (ARN)s.</p>
   * @public
   */
  certificateAuthorityArns: string[] | undefined;
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
 * @public
 */
export interface VirtualGatewayTlsValidationContextFileTrust {
  /**
   * <p>The certificate trust chain for a certificate stored on the file system of the virtual
   *          node that the proxy is running on.</p>
   * @public
   */
  certificateChain: string | undefined;
}

/**
 * <p>An object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service
 *          validation context trust. The proxy must be configured with a local SDS provider via a Unix
 *          Domain Socket. See App Mesh
 *          <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS
 *             documentation</a> for more info.</p>
 * @public
 */
export interface VirtualGatewayTlsValidationContextSdsTrust {
  /**
   * <p>A reference to an object that represents the name of the secret for a virtual gateway's
   *          Transport Layer Security (TLS) Secret Discovery Service validation context trust.</p>
   * @public
   */
  secretName: string | undefined;
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust.</p>
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
   * <p>A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.</p>
   * @public
   */
  export interface AcmMember {
    acm: VirtualGatewayTlsValidationContextAcmTrust;
    file?: never;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
   * @public
   */
  export interface FileMember {
    acm?: never;
    file: VirtualGatewayTlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>A reference to an object that represents a virtual gateway's Transport Layer Security (TLS) Secret Discovery
   *          Service validation context trust.</p>
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
 * <p>An object that represents a Transport Layer Security (TLS) validation context.</p>
 * @public
 */
export interface VirtualGatewayTlsValidationContext {
  /**
   * <p>A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS)
   *          certificate.</p>
   * @public
   */
  trust: VirtualGatewayTlsValidationContextTrust | undefined;

  /**
   * <p>A reference to an object that represents the SANs for a virtual gateway's listener's
   *          Transport Layer Security (TLS) validation context.</p>
   * @public
   */
  subjectAlternativeNames?: SubjectAlternativeNames | undefined;
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) client policy.</p>
 * @public
 */
export interface VirtualGatewayClientPolicyTls {
  /**
   * <p>Whether the policy is enforced. The default is <code>True</code>, if a value isn't
   *          specified.</p>
   * @public
   */
  enforce?: boolean | undefined;

  /**
   * <p>One or more ports that the policy is enforced for.</p>
   * @public
   */
  ports?: number[] | undefined;

  /**
   * <p>A reference to an object that represents a virtual gateway's client's Transport Layer Security (TLS)
   *          certificate.</p>
   * @public
   */
  certificate?: VirtualGatewayClientTlsCertificate | undefined;

  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) validation context.</p>
   * @public
   */
  validation: VirtualGatewayTlsValidationContext | undefined;
}

/**
 * <p>An object that represents a client policy.</p>
 * @public
 */
export interface VirtualGatewayClientPolicy {
  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) client policy.</p>
   * @public
   */
  tls?: VirtualGatewayClientPolicyTls | undefined;
}

/**
 * <p>An object that represents the default properties for a backend.</p>
 * @public
 */
export interface VirtualGatewayBackendDefaults {
  /**
   * <p>A reference to an object that represents a client policy.</p>
   * @public
   */
  clientPolicy?: VirtualGatewayClientPolicy | undefined;
}

/**
 * <p>An object that represents a type of connection pool.</p>
 * @public
 */
export interface VirtualGatewayGrpcConnectionPool {
  /**
   * <p>Maximum number of inflight requests Envoy can concurrently support across hosts in
   *          upstream cluster.</p>
   * @public
   */
  maxRequests: number | undefined;
}

/**
 * <p>An object that represents a type of connection pool.</p>
 * @public
 */
export interface VirtualGatewayHttpConnectionPool {
  /**
   * <p>Maximum number of outbound TCP connections Envoy can establish concurrently with all
   *          hosts in upstream cluster.</p>
   * @public
   */
  maxConnections: number | undefined;

  /**
   * <p>Number of overflowing requests after <code>max_connections</code> Envoy will queue to
   *          upstream cluster.</p>
   * @public
   */
  maxPendingRequests?: number | undefined;
}

/**
 * <p>An object that represents a type of connection pool.</p>
 * @public
 */
export interface VirtualGatewayHttp2ConnectionPool {
  /**
   * <p>Maximum number of inflight requests Envoy can concurrently support across hosts in
   *          upstream cluster.</p>
   * @public
   */
  maxRequests: number | undefined;
}

/**
 * <p>An object that represents the type of virtual gateway connection pool.</p>
 *          <p>Only one protocol is used at a time and should be the same protocol as the one chosen
 *          under port mapping.</p>
 *          <p>If not present the default value for <code>maxPendingRequests</code> is
 *             <code>2147483647</code>.</p>
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
   * <p>An object that represents a type of connection pool.</p>
   * @public
   */
  export interface HttpMember {
    http: VirtualGatewayHttpConnectionPool;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * <p>An object that represents a type of connection pool.</p>
   * @public
   */
  export interface Http2Member {
    http?: never;
    http2: VirtualGatewayHttp2ConnectionPool;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * <p>An object that represents a type of connection pool. </p>
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
 * <p>An object that represents the health check policy for a virtual gateway's
 *          listener.</p>
 * @public
 */
export interface VirtualGatewayHealthCheckPolicy {
  /**
   * <p>The amount of time to wait when receiving a response from the health check, in
   *          milliseconds.</p>
   * @public
   */
  timeoutMillis: number | undefined;

  /**
   * <p>The time period in milliseconds between each health check execution.</p>
   * @public
   */
  intervalMillis: number | undefined;

  /**
   * <p>The protocol for the health check request. If you specify <code>grpc</code>, then your
   *          service must conform to the <a href="https://github.com/grpc/grpc/blob/master/doc/health-checking.md">GRPC Health
   *             Checking Protocol</a>.</p>
   * @public
   */
  protocol: VirtualGatewayPortProtocol | undefined;

  /**
   * <p>The destination port for the health check request. This port must match the port defined
   *          in the <a>PortMapping</a> for the listener.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The destination path for the health check request. This value is only used if the
   *          specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>The number of consecutive successful health checks that must occur before declaring the
   *          listener healthy.</p>
   * @public
   */
  healthyThreshold: number | undefined;

  /**
   * <p>The number of consecutive failed health checks that must occur before declaring a
   *          virtual gateway unhealthy.</p>
   * @public
   */
  unhealthyThreshold: number | undefined;
}

/**
 * <p>An object that represents a port mapping.</p>
 * @public
 */
export interface VirtualGatewayPortMapping {
  /**
   * <p>The port used for the port mapping. Specify one protocol.</p>
   * @public
   */
  port: number | undefined;

  /**
   * <p>The protocol used for the port mapping.</p>
   * @public
   */
  protocol: VirtualGatewayPortProtocol | undefined;
}

/**
 * <p>An object that represents an Certificate Manager certificate.</p>
 * @public
 */
export interface VirtualGatewayListenerTlsAcmCertificate {
  /**
   * <p>The Amazon Resource Name (ARN) for the certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
   * @public
   */
  certificateArn: string | undefined;
}

/**
 * <p>An object that represents a listener's Transport Layer Security (TLS) certificate.</p>
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
   * <p>A reference to an object that represents an Certificate Manager certificate.</p>
   * @public
   */
  export interface AcmMember {
    acm: VirtualGatewayListenerTlsAcmCertificate;
    file?: never;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>A reference to an object that represents a local file certificate.</p>
   * @public
   */
  export interface FileMember {
    acm?: never;
    file: VirtualGatewayListenerTlsFileCertificate;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>A reference to an object that represents a virtual gateway's listener's Secret Discovery
   *          Service certificate.</p>
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
 * <p>An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context
 *          trust.</p>
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
   * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
   * @public
   */
  export interface FileMember {
    file: VirtualGatewayTlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret
   *          Discovery Service validation context trust.</p>
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
 * <p>An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation
 *          context.</p>
 * @public
 */
export interface VirtualGatewayListenerTlsValidationContext {
  /**
   * <p>A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS)
   *          certificate.</p>
   * @public
   */
  trust: VirtualGatewayListenerTlsValidationContextTrust | undefined;

  /**
   * <p>A reference to an object that represents the SANs for a virtual gateway listener's Transport Layer Security (TLS)
   *          validation context.</p>
   * @public
   */
  subjectAlternativeNames?: SubjectAlternativeNames | undefined;
}

/**
 * <p>An object that represents the Transport Layer Security (TLS) properties for a listener.</p>
 * @public
 */
export interface VirtualGatewayListenerTls {
  /**
   * <p>Specify one of the following modes.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b/>STRICT – Listener only accepts connections with TLS
   *                enabled. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b/>PERMISSIVE – Listener accepts connections with or
   *                without TLS enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b/>DISABLED – Listener only accepts connections without
   *                TLS. </p>
   *             </li>
   *          </ul>
   * @public
   */
  mode: VirtualGatewayListenerTlsMode | undefined;

  /**
   * <p>A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation
   *          context.</p>
   * @public
   */
  validation?: VirtualGatewayListenerTlsValidationContext | undefined;

  /**
   * <p>An object that represents a Transport Layer Security (TLS) certificate.</p>
   * @public
   */
  certificate: VirtualGatewayListenerTlsCertificate | undefined;
}

/**
 * <p>An object that represents a listener for a virtual gateway.</p>
 * @public
 */
export interface VirtualGatewayListener {
  /**
   * <p>The health check information for the listener.</p>
   * @public
   */
  healthCheck?: VirtualGatewayHealthCheckPolicy | undefined;

  /**
   * <p>The port mapping information for the listener.</p>
   * @public
   */
  portMapping: VirtualGatewayPortMapping | undefined;

  /**
   * <p>A reference to an object that represents the Transport Layer Security (TLS) properties for the listener.</p>
   * @public
   */
  tls?: VirtualGatewayListenerTls | undefined;

  /**
   * <p>The connection pool information for the virtual gateway listener.</p>
   * @public
   */
  connectionPool?: VirtualGatewayConnectionPool | undefined;
}

/**
 * <p>An object that represents an access log file.</p>
 * @public
 */
export interface VirtualGatewayFileAccessLog {
  /**
   * <p>The file path to write access logs to. You can use <code>/dev/stdout</code> to send
   *          access logs to standard out and configure your Envoy container to use a log driver, such as
   *             <code>awslogs</code>, to export the access logs to a log storage service such as Amazon
   *          CloudWatch Logs. You can also specify a path in the Envoy container's file system to write
   *          the files to disk.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>The specified format for the virtual gateway access logs. It can be either
   *             <code>json_format</code> or <code>text_format</code>.</p>
   * @public
   */
  format?: LoggingFormat | undefined;
}

/**
 * <p>The access log configuration for a virtual gateway.</p>
 * @public
 */
export type VirtualGatewayAccessLog = VirtualGatewayAccessLog.FileMember | VirtualGatewayAccessLog.$UnknownMember;

/**
 * @public
 */
export namespace VirtualGatewayAccessLog {
  /**
   * <p>The file object to send virtual gateway access logs to.</p>
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
 * <p>An object that represents logging information.</p>
 * @public
 */
export interface VirtualGatewayLogging {
  /**
   * <p>The access log configuration.</p>
   * @public
   */
  accessLog?: VirtualGatewayAccessLog | undefined;
}

/**
 * <p>An object that represents the specification of a service mesh resource.</p>
 * @public
 */
export interface VirtualGatewaySpec {
  /**
   * <p>A reference to an object that represents the defaults for backends.</p>
   * @public
   */
  backendDefaults?: VirtualGatewayBackendDefaults | undefined;

  /**
   * <p>The listeners that the mesh endpoint is expected to receive inbound traffic from. You
   *          can specify one listener.</p>
   * @public
   */
  listeners: VirtualGatewayListener[] | undefined;

  /**
   * <p>An object that represents logging information.</p>
   * @public
   */
  logging?: VirtualGatewayLogging | undefined;
}

/**
 * @public
 */
export interface CreateVirtualGatewayInput {
  /**
   * <p>The name to use for the virtual gateway.</p>
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The name of the service mesh to create the virtual gateway in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The virtual gateway specification to apply.</p>
   * @public
   */
  spec: VirtualGatewaySpec | undefined;

  /**
   * <p>Optional metadata that you can apply to the virtual gateway to assist with
   *          categorization and organization. Each tag consists of a key and an optional value, both of
   *          which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   * @public
   */
  tags?: TagRef[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * <p>An object that represents the status of the mesh resource.</p>
 * @public
 */
export interface VirtualGatewayStatus {
  /**
   * <p>The current status.</p>
   * @public
   */
  status: VirtualGatewayStatusCode | undefined;
}

/**
 * <p>An object that represents a virtual gateway returned by a describe operation.</p>
 * @public
 */
export interface VirtualGatewayData {
  /**
   * <p>The name of the service mesh that the virtual gateway resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual gateway.</p>
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The specifications of the virtual gateway.</p>
   * @public
   */
  spec: VirtualGatewaySpec | undefined;

  /**
   * <p>An object that represents metadata for a resource.</p>
   * @public
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The current status of the virtual gateway.</p>
   * @public
   */
  status: VirtualGatewayStatus | undefined;
}

/**
 * @public
 */
export interface CreateVirtualGatewayOutput {
  /**
   * <p>The full description of your virtual gateway following the create call.</p>
   * @public
   */
  virtualGateway: VirtualGatewayData | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualGatewayInput {
  /**
   * <p>The name of the virtual gateway to delete.</p>
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The name of the service mesh to delete the virtual gateway from.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualGatewayOutput {
  /**
   * <p>The virtual gateway that was deleted.</p>
   * @public
   */
  virtualGateway: VirtualGatewayData | undefined;
}

/**
 * @public
 */
export interface DescribeVirtualGatewayInput {
  /**
   * <p>The name of the virtual gateway to describe.</p>
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The name of the service mesh that the gateway route resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVirtualGatewayOutput {
  /**
   * <p>The full description of your virtual gateway.</p>
   * @public
   */
  virtualGateway: VirtualGatewayData | undefined;
}

/**
 * <p>An object representing the gateway route host name to rewrite.</p>
 * @public
 */
export interface GatewayRouteHostnameRewrite {
  /**
   * <p>The default target host name to write to.</p>
   * @public
   */
  defaultTargetHostname?: DefaultGatewayRouteRewrite | undefined;
}

/**
 * <p>An object that represents the gateway route to rewrite.</p>
 * @public
 */
export interface GrpcGatewayRouteRewrite {
  /**
   * <p>The host name of the gateway route to rewrite.</p>
   * @public
   */
  hostname?: GatewayRouteHostnameRewrite | undefined;
}

/**
 * <p>An object that represents the virtual service that traffic is routed to.</p>
 * @public
 */
export interface GatewayRouteVirtualService {
  /**
   * <p>The name of the virtual service that traffic is routed to.</p>
   * @public
   */
  virtualServiceName: string | undefined;
}

/**
 * <p>An object that represents a gateway route target.</p>
 * @public
 */
export interface GatewayRouteTarget {
  /**
   * <p>An object that represents a virtual service gateway route target.</p>
   * @public
   */
  virtualService: GatewayRouteVirtualService | undefined;

  /**
   * <p>The port number of the gateway route target.</p>
   * @public
   */
  port?: number | undefined;
}

/**
 * <p>An object that represents the action to take if a match is determined.</p>
 * @public
 */
export interface GrpcGatewayRouteAction {
  /**
   * <p>An object that represents the target that traffic is routed to when a request matches the gateway route.</p>
   * @public
   */
  target: GatewayRouteTarget | undefined;

  /**
   * <p>The gateway route action to rewrite.</p>
   * @public
   */
  rewrite?: GrpcGatewayRouteRewrite | undefined;
}

/**
 * <p>An object representing the gateway route host name to match.</p>
 * @public
 */
export interface GatewayRouteHostnameMatch {
  /**
   * <p>The exact host name to match on.</p>
   * @public
   */
  exact?: string | undefined;

  /**
   * <p>The specified ending characters of the host name to match on.</p>
   * @public
   */
  suffix?: string | undefined;
}

/**
 * <p>An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.</p>
 * @public
 */
export interface MatchRange {
  /**
   * <p>The start of the range.</p>
   * @public
   */
  start: number | undefined;

  /**
   * <p>The end of the range.</p>
   * @public
   */
  end: number | undefined;
}

/**
 * <p>An object representing the method header to be matched.</p>
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
   * <p>The exact method header to be matched on.</p>
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
   * <p>The regex used to match the method header.</p>
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
   * <p>An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.</p>
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
   * <p>The specified beginning characters of the method header to be matched on.</p>
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
   * <p>The specified ending characters of the method header to match on.</p>
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
 * <p>An object representing the metadata of the gateway route.</p>
 * @public
 */
export interface GrpcGatewayRouteMetadata {
  /**
   * <p>A name for the gateway route metadata.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specify <code>True</code> to match anything except the match criteria. The default value
   *          is <code>False</code>.</p>
   * @public
   */
  invert?: boolean | undefined;

  /**
   * <p>The criteria for determining a metadata match.</p>
   * @public
   */
  match?: GrpcMetadataMatchMethod | undefined;
}

/**
 * <p>An object that represents the criteria for determining a request match.</p>
 * @public
 */
export interface GrpcGatewayRouteMatch {
  /**
   * <p>The fully qualified domain name for the service to match from the request.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The gateway route host name to be matched on.</p>
   * @public
   */
  hostname?: GatewayRouteHostnameMatch | undefined;

  /**
   * <p>The gateway route metadata to be matched on.</p>
   * @public
   */
  metadata?: GrpcGatewayRouteMetadata[] | undefined;

  /**
   * <p>The gateway route port to be matched on.</p>
   * @public
   */
  port?: number | undefined;
}

/**
 * <p>An object that represents a gRPC gateway route.</p>
 * @public
 */
export interface GrpcGatewayRoute {
  /**
   * <p>An object that represents the criteria for determining a request match.</p>
   * @public
   */
  match: GrpcGatewayRouteMatch | undefined;

  /**
   * <p>An object that represents the action to take if a match is determined.</p>
   * @public
   */
  action: GrpcGatewayRouteAction | undefined;
}

/**
 * <p>An object that represents the path to rewrite.</p>
 * @public
 */
export interface HttpGatewayRoutePathRewrite {
  /**
   * <p>The exact path to rewrite.</p>
   * @public
   */
  exact?: string | undefined;
}

/**
 * <p>An object representing the beginning characters of the route to rewrite.</p>
 * @public
 */
export interface HttpGatewayRoutePrefixRewrite {
  /**
   * <p>The default prefix used to replace the incoming route prefix when rewritten.</p>
   * @public
   */
  defaultPrefix?: DefaultGatewayRouteRewrite | undefined;

  /**
   * <p>The value used to replace the incoming route prefix when rewritten.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>An object representing the gateway route to rewrite.</p>
 * @public
 */
export interface HttpGatewayRouteRewrite {
  /**
   * <p>The specified beginning characters to rewrite.</p>
   * @public
   */
  prefix?: HttpGatewayRoutePrefixRewrite | undefined;

  /**
   * <p>The path to rewrite.</p>
   * @public
   */
  path?: HttpGatewayRoutePathRewrite | undefined;

  /**
   * <p>The host name to rewrite.</p>
   * @public
   */
  hostname?: GatewayRouteHostnameRewrite | undefined;
}

/**
 * <p>An object that represents the action to take if a match is determined.</p>
 * @public
 */
export interface HttpGatewayRouteAction {
  /**
   * <p>An object that represents the target that traffic is routed to when a request matches the gateway route.</p>
   * @public
   */
  target: GatewayRouteTarget | undefined;

  /**
   * <p>The gateway route action to rewrite.</p>
   * @public
   */
  rewrite?: HttpGatewayRouteRewrite | undefined;
}

/**
 * <p>An object that represents the method and value to match with the header value sent in a
 *          request. Specify one match method.</p>
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
   * <p>The value sent by the client must match the specified value exactly.</p>
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
   * <p>The value sent by the client must include the specified characters.</p>
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
   * <p>An object that represents the range of values to match on.</p>
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
   * <p>The value sent by the client must begin with the specified characters.</p>
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
   * <p>The value sent by the client must end with the specified characters.</p>
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
 * <p>An object that represents the HTTP header in the gateway route.</p>
 * @public
 */
export interface HttpGatewayRouteHeader {
  /**
   * <p>A name for the HTTP header in the gateway route that will be matched on.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specify <code>True</code> to match anything except the match criteria. The default value
   *          is <code>False</code>.</p>
   * @public
   */
  invert?: boolean | undefined;

  /**
   * <p>An object that represents the method and value to match with the header value sent in a
   *          request. Specify one match method.</p>
   * @public
   */
  match?: HeaderMatchMethod | undefined;
}

/**
 * <p>An object representing the path to match in the request.</p>
 * @public
 */
export interface HttpPathMatch {
  /**
   * <p>The exact path to match on.</p>
   * @public
   */
  exact?: string | undefined;

  /**
   * <p>The regex used to match the path.</p>
   * @public
   */
  regex?: string | undefined;
}

/**
 * <p>An object representing the query parameter to match.</p>
 * @public
 */
export interface QueryParameterMatch {
  /**
   * <p>The exact query parameter to match on.</p>
   * @public
   */
  exact?: string | undefined;
}

/**
 * <p>An object that represents the query parameter in the request.</p>
 * @public
 */
export interface HttpQueryParameter {
  /**
   * <p>A name for the query parameter that will be matched on.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The query parameter to match on.</p>
   * @public
   */
  match?: QueryParameterMatch | undefined;
}

/**
 * <p>An object that represents the criteria for determining a request match.</p>
 * @public
 */
export interface HttpGatewayRouteMatch {
  /**
   * <p>Specifies the path to match requests with. This parameter must always start with
   *             <code>/</code>, which by itself matches all requests to the virtual service name. You
   *          can also match for path-based routing of requests. For example, if your virtual service
   *          name is <code>my-service.local</code> and you want the route to match requests to
   *             <code>my-service.local/metrics</code>, your prefix should be
   *          <code>/metrics</code>.</p>
   * @public
   */
  prefix?: string | undefined;

  /**
   * <p>The path to match on.</p>
   * @public
   */
  path?: HttpPathMatch | undefined;

  /**
   * <p>The query parameter to match on.</p>
   * @public
   */
  queryParameters?: HttpQueryParameter[] | undefined;

  /**
   * <p>The method to match on.</p>
   * @public
   */
  method?: HttpMethod | undefined;

  /**
   * <p>The host name to match on.</p>
   * @public
   */
  hostname?: GatewayRouteHostnameMatch | undefined;

  /**
   * <p>The client request headers to match on.</p>
   * @public
   */
  headers?: HttpGatewayRouteHeader[] | undefined;

  /**
   * <p>The port number to match on.</p>
   * @public
   */
  port?: number | undefined;
}

/**
 * <p>An object that represents an HTTP gateway route.</p>
 * @public
 */
export interface HttpGatewayRoute {
  /**
   * <p>An object that represents the criteria for determining a request match.</p>
   * @public
   */
  match: HttpGatewayRouteMatch | undefined;

  /**
   * <p>An object that represents the action to take if a match is determined.</p>
   * @public
   */
  action: HttpGatewayRouteAction | undefined;
}

/**
 * <p>An object that represents a gateway route specification. Specify one gateway route
 *          type.</p>
 * @public
 */
export interface GatewayRouteSpec {
  /**
   * <p>The ordering of the gateway routes spec.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>An object that represents the specification of an HTTP gateway route.</p>
   * @public
   */
  httpRoute?: HttpGatewayRoute | undefined;

  /**
   * <p>An object that represents the specification of an HTTP/2 gateway route.</p>
   * @public
   */
  http2Route?: HttpGatewayRoute | undefined;

  /**
   * <p>An object that represents the specification of a gRPC gateway route.</p>
   * @public
   */
  grpcRoute?: GrpcGatewayRoute | undefined;
}

/**
 * @public
 */
export interface CreateGatewayRouteInput {
  /**
   * <p>The name to use for the gateway route.</p>
   * @public
   */
  gatewayRouteName: string | undefined;

  /**
   * <p>The name of the service mesh to create the gateway route in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual gateway to associate the gateway route with. If the virtual
   *          gateway is in a shared mesh, then you must be the owner of the virtual gateway
   *          resource.</p>
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The gateway route specification to apply.</p>
   * @public
   */
  spec: GatewayRouteSpec | undefined;

  /**
   * <p>Optional metadata that you can apply to the gateway route to assist with categorization
   *          and organization. Each tag consists of a key and an optional value, both of which you
   *          define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   * @public
   */
  tags?: TagRef[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * <p>An object that represents the current status of a gateway route.</p>
 * @public
 */
export interface GatewayRouteStatus {
  /**
   * <p>The current status for the gateway route.</p>
   * @public
   */
  status: GatewayRouteStatusCode | undefined;
}

/**
 * <p>An object that represents a gateway route returned by a describe operation.</p>
 * @public
 */
export interface GatewayRouteData {
  /**
   * <p>The name of the service mesh that the resource resides in. </p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the gateway route.</p>
   * @public
   */
  gatewayRouteName: string | undefined;

  /**
   * <p>The virtual gateway that the gateway route is associated with.</p>
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The specifications of the gateway route.</p>
   * @public
   */
  spec: GatewayRouteSpec | undefined;

  /**
   * <p>An object that represents metadata for a resource.</p>
   * @public
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The status of the gateway route.</p>
   * @public
   */
  status: GatewayRouteStatus | undefined;
}

/**
 * @public
 */
export interface CreateGatewayRouteOutput {
  /**
   * <p>The full description of your gateway route following the create call.</p>
   * @public
   */
  gatewayRoute: GatewayRouteData | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRouteInput {
  /**
   * <p>The name of the gateway route to delete.</p>
   * @public
   */
  gatewayRouteName: string | undefined;

  /**
   * <p>The name of the service mesh to delete the gateway route from.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual gateway to delete the route from.</p>
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRouteOutput {
  /**
   * <p>The gateway route that was deleted.</p>
   * @public
   */
  gatewayRoute: GatewayRouteData | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayRouteInput {
  /**
   * <p>The name of the gateway route to describe.</p>
   * @public
   */
  gatewayRouteName: string | undefined;

  /**
   * <p>The name of the service mesh that the gateway route resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual gateway that the gateway route is associated with.</p>
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayRouteOutput {
  /**
   * <p>The full description of your gateway route.</p>
   * @public
   */
  gatewayRoute: GatewayRouteData | undefined;
}

/**
 * @public
 */
export interface ListGatewayRoutesInput {
  /**
   * <p>The name of the service mesh to list gateway routes in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual gateway to list gateway routes in.</p>
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListGatewayRoutes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results returned by <code>ListGatewayRoutes</code> in paginated
   *          output. When you use this parameter, <code>ListGatewayRoutes</code> returns only
   *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
   *          element. You can see the remaining results of the initial request by sending another
   *             <code>ListGatewayRoutes</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If you don't use this
   *          parameter, <code>ListGatewayRoutes</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * <p>An object that represents a gateway route returned by a list operation.</p>
 * @public
 */
export interface GatewayRouteRef {
  /**
   * <p>The name of the service mesh that the resource resides in. </p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the gateway route.</p>
   * @public
   */
  gatewayRouteName: string | undefined;

  /**
   * <p>The virtual gateway that the gateway route is associated with.</p>
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  resourceOwner: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) for the gateway route.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   * @public
   */
  version: number | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListGatewayRoutesOutput {
  /**
   * <p>The list of existing gateway routes for the specified service mesh and virtual
   *          gateway.</p>
   * @public
   */
  gatewayRoutes: GatewayRouteRef[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListGatewayRoutes</code>
   *          request. When the results of a <code>ListGatewayRoutes</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayRouteInput {
  /**
   * <p>The name of the gateway route to update.</p>
   * @public
   */
  gatewayRouteName: string | undefined;

  /**
   * <p>The name of the service mesh that the gateway route resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual gateway that the gateway route is associated with.</p>
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The new gateway route specification to apply. This overwrites the existing data.</p>
   * @public
   */
  spec: GatewayRouteSpec | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayRouteOutput {
  /**
   * <p>A full description of the gateway route that was updated.</p>
   * @public
   */
  gatewayRoute: GatewayRouteData | undefined;
}

/**
 * @public
 */
export interface ListVirtualGatewaysInput {
  /**
   * <p>The name of the service mesh to list virtual gateways in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualGateways</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results returned by <code>ListVirtualGateways</code> in paginated
   *          output. When you use this parameter, <code>ListVirtualGateways</code> returns only
   *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
   *          element. You can see the remaining results of the initial request by sending another
   *             <code>ListVirtualGateways</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If you don't use this
   *          parameter, <code>ListVirtualGateways</code> returns up to 100 results and
   *          a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * <p>An object that represents a virtual gateway returned by a list operation.</p>
 * @public
 */
export interface VirtualGatewayRef {
  /**
   * <p>The name of the service mesh that the resource resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  resourceOwner: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   * @public
   */
  version: number | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListVirtualGatewaysOutput {
  /**
   * <p>The list of existing virtual gateways for the specified service mesh.</p>
   * @public
   */
  virtualGateways: VirtualGatewayRef[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualGateways</code>
   *          request. When the results of a <code>ListVirtualGateways</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVirtualGatewayInput {
  /**
   * <p>The name of the virtual gateway to update.</p>
   * @public
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual gateway resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The new virtual gateway specification to apply. This overwrites the existing
   *          data.</p>
   * @public
   */
  spec: VirtualGatewaySpec | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVirtualGatewayOutput {
  /**
   * <p>A full description of the virtual gateway that was updated.</p>
   * @public
   */
  virtualGateway: VirtualGatewayData | undefined;
}

/**
 * <p>An object that represents a local file certificate.
 *          The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
 * @public
 */
export interface ListenerTlsFileCertificate {
  /**
   * <p>The certificate chain for the certificate.</p>
   * @public
   */
  certificateChain: string | undefined;

  /**
   * <p>The private key for a certificate stored on the file system of the virtual node that the
   *          proxy is running on.</p>
   * @public
   */
  privateKey: string | undefined;
}

/**
 * <p>An object that represents the listener's Secret Discovery Service certificate. The proxy
 *          must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh
 *          <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS
 *             documentation</a> for more info.</p>
 * @public
 */
export interface ListenerTlsSdsCertificate {
  /**
   * <p>A reference to an object that represents the name of the secret requested from the
   *          Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or
   *          certificate chain.</p>
   * @public
   */
  secretName: string | undefined;
}

/**
 * <p>An object that represents the client's certificate.</p>
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
   * <p>An object that represents a local file certificate. The certificate must meet specific
   *          requirements and you must have proxy authorization enabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">Transport Layer Security (TLS)</a>.</p>
   * @public
   */
  export interface FileMember {
    file: ListenerTlsFileCertificate;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>A reference to an object that represents a client's TLS Secret Discovery Service
   *          certificate.</p>
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
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager
 *          certificate.</p>
 * @public
 */
export interface TlsValidationContextAcmTrust {
  /**
   * <p>One or more ACM Amazon Resource Name (ARN)s.</p>
   * @public
   */
  certificateAuthorityArns: string[] | undefined;
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
 * @public
 */
export interface TlsValidationContextFileTrust {
  /**
   * <p>The certificate trust chain for a certificate stored on the file system of the virtual
   *          node that the proxy is running on.</p>
   * @public
   */
  certificateChain: string | undefined;
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust. The
 *          proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh
 *          <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS
 *             documentation</a> for more info.</p>
 * @public
 */
export interface TlsValidationContextSdsTrust {
  /**
   * <p>A reference to an object that represents the name of the secret for a Transport Layer Security (TLS) Secret
   *          Discovery Service validation context trust.</p>
   * @public
   */
  secretName: string | undefined;
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust.</p>
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
   * <p>A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.</p>
   * @public
   */
  export interface AcmMember {
    acm: TlsValidationContextAcmTrust;
    file?: never;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
   * @public
   */
  export interface FileMember {
    acm?: never;
    file: TlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) Secret Discovery Service validation
   *          context trust.</p>
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
 * <p>An object that represents how the proxy will validate its peer during Transport Layer Security (TLS)
 *          negotiation.</p>
 * @public
 */
export interface TlsValidationContext {
  /**
   * <p>A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS)
   *          certificate.</p>
   * @public
   */
  trust: TlsValidationContextTrust | undefined;

  /**
   * <p>A reference to an object that represents the SANs for a Transport Layer Security (TLS) validation context. If you
   *          don't specify SANs on the <i>terminating</i> mesh endpoint, the Envoy proxy
   *          for that node doesn't verify the SAN on a peer client certificate. If you don't specify
   *          SANs on the <i>originating</i> mesh endpoint, the SAN on the certificate
   *          provided by the terminating endpoint must match the mesh endpoint service discovery
   *          configuration. Since SPIRE vended certificates have a SPIFFE ID as a name, you must set the
   *          SAN since the name doesn't match the service discovery name.</p>
   * @public
   */
  subjectAlternativeNames?: SubjectAlternativeNames | undefined;
}

/**
 * <p>A reference to an object that represents a Transport Layer Security (TLS) client policy.</p>
 * @public
 */
export interface ClientPolicyTls {
  /**
   * <p>Whether the policy is enforced. The default is <code>True</code>, if a value isn't specified.</p>
   * @public
   */
  enforce?: boolean | undefined;

  /**
   * <p>One or more ports that the policy is enforced for.</p>
   * @public
   */
  ports?: number[] | undefined;

  /**
   * <p>A reference to an object that represents a client's TLS certificate.</p>
   * @public
   */
  certificate?: ClientTlsCertificate | undefined;

  /**
   * <p>A reference to an object that represents a TLS validation context.</p>
   * @public
   */
  validation: TlsValidationContext | undefined;
}

/**
 * <p>An object that represents a client policy.</p>
 * @public
 */
export interface ClientPolicy {
  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) client policy.</p>
   * @public
   */
  tls?: ClientPolicyTls | undefined;
}

/**
 * <p>An object that represents the default properties for a backend.</p>
 * @public
 */
export interface BackendDefaults {
  /**
   * <p>A reference to an object that represents a client policy.</p>
   * @public
   */
  clientPolicy?: ClientPolicy | undefined;
}

/**
 * <p>An object that represents a virtual service backend for a virtual node.</p>
 * @public
 */
export interface VirtualServiceBackend {
  /**
   * <p>The name of the virtual service that is acting as a virtual node backend.</p>
   * @public
   */
  virtualServiceName: string | undefined;

  /**
   * <p>A reference to an object that represents the client policy for a backend.</p>
   * @public
   */
  clientPolicy?: ClientPolicy | undefined;
}

/**
 * <p>An object that represents the backends that a virtual node is expected to send outbound
 *          traffic to.</p>
 * @public
 */
export type Backend = Backend.VirtualServiceMember | Backend.$UnknownMember;

/**
 * @public
 */
export namespace Backend {
  /**
   * <p>Specifies a virtual service to use as a backend.  </p>
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
 * <p>An object that represents a type of connection pool.</p>
 * @public
 */
export interface VirtualNodeGrpcConnectionPool {
  /**
   * <p>Maximum number of inflight requests Envoy can concurrently support across hosts in
   *          upstream cluster.</p>
   * @public
   */
  maxRequests: number | undefined;
}

/**
 * <p>An object that represents a type of connection pool.</p>
 * @public
 */
export interface VirtualNodeHttpConnectionPool {
  /**
   * <p>Maximum number of outbound TCP connections Envoy can establish concurrently with all
   *          hosts in upstream cluster.</p>
   * @public
   */
  maxConnections: number | undefined;

  /**
   * <p>Number of overflowing requests after <code>max_connections</code> Envoy will queue to
   *          upstream cluster.</p>
   * @public
   */
  maxPendingRequests?: number | undefined;
}

/**
 * <p>An object that represents a type of connection pool.</p>
 * @public
 */
export interface VirtualNodeHttp2ConnectionPool {
  /**
   * <p>Maximum number of inflight requests Envoy can concurrently support across hosts in
   *          upstream cluster.</p>
   * @public
   */
  maxRequests: number | undefined;
}

/**
 * <p>An object that represents a type of connection pool.</p>
 * @public
 */
export interface VirtualNodeTcpConnectionPool {
  /**
   * <p>Maximum number of outbound TCP connections Envoy can establish concurrently with all
   *          hosts in upstream cluster.</p>
   * @public
   */
  maxConnections: number | undefined;
}

/**
 * <p>An object that represents the type of virtual node connection pool.</p>
 *          <p>Only one protocol is used at a time and should be the same protocol as the one chosen
 *          under port mapping.</p>
 *          <p>If not present the default value for <code>maxPendingRequests</code> is
 *             <code>2147483647</code>.</p>
 *          <p/>
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
   * <p>An object that represents a type of connection pool.</p>
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
   * <p>An object that represents a type of connection pool.</p>
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
   * <p>An object that represents a type of connection pool.</p>
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
   * <p>An object that represents a type of connection pool.</p>
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
 * <p>An object that represents the health check policy for a virtual node's listener.</p>
 * @public
 */
export interface HealthCheckPolicy {
  /**
   * <p>The amount of time to wait when receiving a response from the health check, in
   *          milliseconds.</p>
   * @public
   */
  timeoutMillis: number | undefined;

  /**
   * <p>The time period in milliseconds between each health check execution.</p>
   * @public
   */
  intervalMillis: number | undefined;

  /**
   * <p>The protocol for the health check request. If you specify <code>grpc</code>, then your
   *          service must conform to the <a href="https://github.com/grpc/grpc/blob/master/doc/health-checking.md">GRPC Health
   *             Checking Protocol</a>.</p>
   * @public
   */
  protocol: PortProtocol | undefined;

  /**
   * <p>The destination port for the health check request. This port must match the port defined
   *          in the <a>PortMapping</a> for the listener.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The destination path for the health check request. This value is only used if the
   *          specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>The number of consecutive successful health checks that must occur before declaring
   *          listener healthy.</p>
   * @public
   */
  healthyThreshold: number | undefined;

  /**
   * <p>The number of consecutive failed health checks that must occur before declaring a
   *          virtual node unhealthy. </p>
   * @public
   */
  unhealthyThreshold: number | undefined;
}

/**
 * <p>An object that represents a duration of time.</p>
 * @public
 */
export interface Duration {
  /**
   * <p>A number of time units.</p>
   * @public
   */
  value?: number | undefined;

  /**
   * <p>A unit of time.</p>
   * @public
   */
  unit?: DurationUnit | undefined;
}

/**
 * <p>An object that represents the outlier detection for a virtual node's listener.</p>
 * @public
 */
export interface OutlierDetection {
  /**
   * <p>Number of consecutive <code>5xx</code> errors required for ejection. </p>
   * @public
   */
  maxServerErrors: number | undefined;

  /**
   * <p>The time interval between ejection sweep analysis.</p>
   * @public
   */
  interval: Duration | undefined;

  /**
   * <p>The base amount of time for which a host is ejected.</p>
   * @public
   */
  baseEjectionDuration: Duration | undefined;

  /**
   * <p>Maximum percentage of hosts in load balancing pool for upstream service that can be
   *          ejected. Will eject at least one host regardless of the value.</p>
   * @public
   */
  maxEjectionPercent: number | undefined;
}

/**
 * <p>An object that represents a port mapping.</p>
 * @public
 */
export interface PortMapping {
  /**
   * <p>The port used for the port mapping.</p>
   * @public
   */
  port: number | undefined;

  /**
   * <p>The protocol used for the port mapping. Specify one protocol.</p>
   * @public
   */
  protocol: PortProtocol | undefined;
}

/**
 * <p>An object that represents types of timeouts. </p>
 * @public
 */
export interface GrpcTimeout {
  /**
   * <p>An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh
   *                                   resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15
   *                                   seconds for the source and destination virtual node and the route.</p>
   * @public
   */
  perRequest?: Duration | undefined;

  /**
   * <p>An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.</p>
   * @public
   */
  idle?: Duration | undefined;
}

/**
 * <p>An object that represents types of timeouts. </p>
 * @public
 */
export interface HttpTimeout {
  /**
   * <p>An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh
   *                                   resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15
   *                                   seconds for the source and destination virtual node and the route.</p>
   * @public
   */
  perRequest?: Duration | undefined;

  /**
   * <p>An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.</p>
   * @public
   */
  idle?: Duration | undefined;
}

/**
 * <p>An object that represents types of timeouts. </p>
 * @public
 */
export interface TcpTimeout {
  /**
   * <p>An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.</p>
   * @public
   */
  idle?: Duration | undefined;
}

/**
 * <p>An object that represents timeouts for different protocols.</p>
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
   * <p>An object that represents types of timeouts. </p>
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
   * <p>An object that represents types of timeouts. </p>
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
   * <p>An object that represents types of timeouts. </p>
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
   * <p>An object that represents types of timeouts. </p>
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
 * <p>An object that represents an Certificate Manager certificate.</p>
 * @public
 */
export interface ListenerTlsAcmCertificate {
  /**
   * <p>The Amazon Resource Name (ARN) for the certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
   * @public
   */
  certificateArn: string | undefined;
}

/**
 * <p>An object that represents a listener's Transport Layer Security (TLS) certificate.</p>
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
   * <p>A reference to an object that represents an Certificate Manager certificate.</p>
   * @public
   */
  export interface AcmMember {
    acm: ListenerTlsAcmCertificate;
    file?: never;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>A reference to an object that represents a local file certificate.</p>
   * @public
   */
  export interface FileMember {
    acm?: never;
    file: ListenerTlsFileCertificate;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>A reference to an object that represents a listener's Secret Discovery Service
   *          certificate.</p>
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
 * <p>An object that represents a listener's Transport Layer Security (TLS) validation context trust.</p>
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
   * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
   * @public
   */
  export interface FileMember {
    file: TlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>A reference to an object that represents a listener's Transport Layer Security (TLS) Secret Discovery Service
   *          validation context trust.</p>
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
 * <p>An object that represents a listener's Transport Layer Security (TLS) validation context.</p>
 * @public
 */
export interface ListenerTlsValidationContext {
  /**
   * <p>A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS)
   *          certificate.</p>
   * @public
   */
  trust: ListenerTlsValidationContextTrust | undefined;

  /**
   * <p>A reference to an object that represents the SANs for a listener's Transport Layer Security (TLS) validation
   *          context.</p>
   * @public
   */
  subjectAlternativeNames?: SubjectAlternativeNames | undefined;
}

/**
 * <p>An object that represents the Transport Layer Security (TLS) properties for a listener.</p>
 * @public
 */
export interface ListenerTls {
  /**
   * <p>Specify one of the following modes.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b/>STRICT – Listener only accepts connections with TLS
   *                enabled. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b/>PERMISSIVE – Listener accepts connections with or
   *                without TLS enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b/>DISABLED – Listener only accepts connections without
   *                TLS. </p>
   *             </li>
   *          </ul>
   * @public
   */
  mode: ListenerTlsMode | undefined;

  /**
   * <p>A reference to an object that represents a listener's Transport Layer Security (TLS) certificate.</p>
   * @public
   */
  certificate: ListenerTlsCertificate | undefined;

  /**
   * <p>A reference to an object that represents a listener's Transport Layer Security (TLS) validation context.</p>
   * @public
   */
  validation?: ListenerTlsValidationContext | undefined;
}

/**
 * <p>An object that represents a listener for a virtual node.</p>
 * @public
 */
export interface Listener {
  /**
   * <p>The port mapping information for the listener.</p>
   * @public
   */
  portMapping: PortMapping | undefined;

  /**
   * <p>A reference to an object that represents the Transport Layer Security (TLS) properties for a listener.</p>
   * @public
   */
  tls?: ListenerTls | undefined;

  /**
   * <p>The health check information for the listener.</p>
   * @public
   */
  healthCheck?: HealthCheckPolicy | undefined;

  /**
   * <p>An object that represents timeouts for different protocols.</p>
   * @public
   */
  timeout?: ListenerTimeout | undefined;

  /**
   * <p>The outlier detection information for the listener.</p>
   * @public
   */
  outlierDetection?: OutlierDetection | undefined;

  /**
   * <p>The connection pool information for the listener.</p>
   * @public
   */
  connectionPool?: VirtualNodeConnectionPool | undefined;
}

/**
 * <p>An object that represents the logging information for a virtual node.</p>
 * @public
 */
export interface Logging {
  /**
   * <p>The access log configuration for a virtual node.</p>
   * @public
   */
  accessLog?: AccessLog | undefined;
}

/**
 * <p>An object that represents the Cloud Map attribute information for your
 *          virtual node.</p>
 *          <note>
 *             <p>Cloud Map is not available in the eu-south-1 Region.</p>
 *          </note>
 * @public
 */
export interface AwsCloudMapInstanceAttribute {
  /**
   * <p>The name of an Cloud Map service instance attribute key. Any Cloud Map service instance that contains the specified key and value is
   *          returned.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of an Cloud Map service instance attribute key. Any Cloud Map service instance that contains the specified key and value is
   *          returned.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>An object that represents the Cloud Map service discovery information for
 *          your virtual node.</p>
 *          <note>
 *             <p>Cloud Map is not available in the eu-south-1 Region.</p>
 *          </note>
 * @public
 */
export interface AwsCloudMapServiceDiscovery {
  /**
   * <p>The name of the Cloud Map namespace to use.</p>
   * @public
   */
  namespaceName: string | undefined;

  /**
   * <p>The name of the Cloud Map service to use.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>A string map that contains attributes with values that you can use to filter instances
   *          by any custom attribute that you specified when you registered the instance. Only instances
   *          that match all of the specified key/value pairs will be returned.</p>
   * @public
   */
  attributes?: AwsCloudMapInstanceAttribute[] | undefined;

  /**
   * <p>The preferred IP version that this virtual node uses. Setting the IP preference on the
   *          virtual node only overrides the IP preference set for the mesh on this specific
   *          node.</p>
   * @public
   */
  ipPreference?: IpPreference | undefined;
}

/**
 * <p>An object that represents the DNS service discovery information for your virtual
 *          node.</p>
 * @public
 */
export interface DnsServiceDiscovery {
  /**
   * <p>Specifies the DNS service discovery hostname for the virtual node. </p>
   * @public
   */
  hostname: string | undefined;

  /**
   * <p>Specifies the DNS response type for the virtual node.</p>
   * @public
   */
  responseType?: DnsResponseType | undefined;

  /**
   * <p>The preferred IP version that this virtual node uses. Setting the IP preference on the
   *          virtual node only overrides the IP preference set for the mesh on this specific
   *          node.</p>
   * @public
   */
  ipPreference?: IpPreference | undefined;
}

/**
 * <p>An object that represents the service discovery information for a virtual node.</p>
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
   * <p>Specifies the DNS information for the virtual node.</p>
   * @public
   */
  export interface DnsMember {
    dns: DnsServiceDiscovery;
    awsCloudMap?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies any Cloud Map information for the virtual node.</p>
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
 * <p>An object that represents the specification of a virtual node.</p>
 * @public
 */
export interface VirtualNodeSpec {
  /**
   * <p>The service discovery information for the virtual node. If your virtual node does not
   *          expect ingress traffic, you can omit this parameter. If you specify a
   *          <code>listener</code>, then you must specify service discovery information.</p>
   * @public
   */
  serviceDiscovery?: ServiceDiscovery | undefined;

  /**
   * <p>The listener that the virtual node is expected to receive inbound traffic from. You can
   *          specify one listener.</p>
   * @public
   */
  listeners?: Listener[] | undefined;

  /**
   * <p>The backends that the virtual node is expected to send outbound traffic to.</p>
   * @public
   */
  backends?: Backend[] | undefined;

  /**
   * <p>A reference to an object that represents the defaults for backends.</p>
   * @public
   */
  backendDefaults?: BackendDefaults | undefined;

  /**
   * <p>The inbound and outbound access logging information for the virtual node.</p>
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
   * <p>The name to use for the virtual node.</p>
   * @public
   */
  virtualNodeName: string | undefined;

  /**
   * <p>The name of the service mesh to create the virtual node in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The virtual node specification to apply.</p>
   * @public
   */
  spec: VirtualNodeSpec | undefined;

  /**
   * <p>Optional metadata that you can apply to the virtual node to assist with categorization
   *          and organization. Each tag consists of a key and an optional value, both of which you
   *          define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   * @public
   */
  tags?: TagRef[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * <p>An object that represents the current status of the virtual node.</p>
 * @public
 */
export interface VirtualNodeStatus {
  /**
   * <p>The current status of the virtual node.</p>
   * @public
   */
  status: VirtualNodeStatusCode | undefined;
}

/**
 * <p>An object that represents a virtual node returned by a describe operation.</p>
 * @public
 */
export interface VirtualNodeData {
  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual node.</p>
   * @public
   */
  virtualNodeName: string | undefined;

  /**
   * <p>The specifications of the virtual node.</p>
   * @public
   */
  spec: VirtualNodeSpec | undefined;

  /**
   * <p>The associated metadata for the virtual node.</p>
   * @public
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The current status for the virtual node.</p>
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
   * <p>The full description of your virtual node following the create call.</p>
   * @public
   */
  virtualNode: VirtualNodeData | undefined;
}

/**
 * <p>Deletes a virtual node input.</p>
 * @public
 */
export interface DeleteVirtualNodeInput {
  /**
   * <p>The name of the virtual node to delete.</p>
   * @public
   */
  virtualNodeName: string | undefined;

  /**
   * <p>The name of the service mesh to delete the virtual node in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
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
   * <p>The virtual node that was deleted.</p>
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
   * <p>The name of the virtual node to describe.</p>
   * @public
   */
  virtualNodeName: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
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
   * <p>The full description of your virtual node.</p>
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
   * <p>The name of the service mesh to list virtual nodes in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualNodes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results returned by <code>ListVirtualNodes</code> in paginated
   *          output. When you use this parameter, <code>ListVirtualNodes</code> returns only
   *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
   *          element. You can see the remaining results of the initial request by sending another
   *             <code>ListVirtualNodes</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If you don't use this
   *          parameter, <code>ListVirtualNodes</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * <p>An object that represents a virtual node returned by a list operation.</p>
 * @public
 */
export interface VirtualNodeRef {
  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual node.</p>
   * @public
   */
  virtualNodeName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  resourceOwner: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) for the virtual node.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   * @public
   */
  version: number | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
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
   * <p>The list of existing virtual nodes for the specified service mesh.</p>
   * @public
   */
  virtualNodes: VirtualNodeRef[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualNodes</code>
   *          request. When the results of a <code>ListVirtualNodes</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
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
   * <p>The name of the virtual node to update.</p>
   * @public
   */
  virtualNodeName: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The new virtual node specification to apply. This overwrites the existing data.</p>
   * @public
   */
  spec: VirtualNodeSpec | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
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
   * <p>A full description of the virtual node that was updated.</p>
   * @public
   */
  virtualNode: VirtualNodeData | undefined;
}

/**
 * <p>An object that represents a virtual router listener.</p>
 * @public
 */
export interface VirtualRouterListener {
  /**
   * <p>An object that represents a port mapping.</p>
   * @public
   */
  portMapping: PortMapping | undefined;
}

/**
 * <p>An object that represents the specification of a virtual router.</p>
 * @public
 */
export interface VirtualRouterSpec {
  /**
   * <p>The listeners that the virtual router is expected to receive inbound traffic from. You
   *          can specify one listener.</p>
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
   * <p>The name to use for the virtual router.</p>
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The name of the service mesh to create the virtual router in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The virtual router specification to apply.</p>
   * @public
   */
  spec: VirtualRouterSpec | undefined;

  /**
   * <p>Optional metadata that you can apply to the virtual router to assist with categorization
   *          and organization. Each tag consists of a key and an optional value, both of which you
   *          define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   * @public
   */
  tags?: TagRef[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * <p>An object that represents the status of a virtual router. </p>
 * @public
 */
export interface VirtualRouterStatus {
  /**
   * <p>The current status of the virtual router.</p>
   * @public
   */
  status: VirtualRouterStatusCode | undefined;
}

/**
 * <p>An object that represents a virtual router returned by a describe operation.</p>
 * @public
 */
export interface VirtualRouterData {
  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual router.</p>
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The specifications of the virtual router.</p>
   * @public
   */
  spec: VirtualRouterSpec | undefined;

  /**
   * <p>The associated metadata for the virtual router.</p>
   * @public
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The current status of the virtual router.</p>
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
   * <p>The full description of your virtual router following the create call.</p>
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
   * <p>The name of the virtual router to delete.</p>
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The name of the service mesh to delete the virtual router in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
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
   * <p>The virtual router that was deleted.</p>
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
   * <p>The name of the virtual router to describe.</p>
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
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
   * <p>The full description of your virtual router.</p>
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
   * <p>The name of the service mesh to list virtual routers in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualRouters</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results returned by <code>ListVirtualRouters</code> in paginated
   *          output. When you use this parameter, <code>ListVirtualRouters</code> returns only
   *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
   *          element. You can see the remaining results of the initial request by sending another
   *             <code>ListVirtualRouters</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If you don't use this
   *          parameter, <code>ListVirtualRouters</code> returns up to 100 results and
   *          a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * <p>An object that represents a virtual router returned by a list operation.</p>
 * @public
 */
export interface VirtualRouterRef {
  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual router.</p>
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  resourceOwner: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) for the virtual router.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   * @public
   */
  version: number | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
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
   * <p>The list of existing virtual routers for the specified service mesh.</p>
   * @public
   */
  virtualRouters: VirtualRouterRef[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualRouters</code>
   *          request. When the results of a <code>ListVirtualRouters</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>An object that represents a target and its relative weight. Traffic is distributed
 *          across targets according to their relative weight. For example, a weighted target with a
 *          relative weight of 50 receives five times as much traffic as one with a relative weight of
 *          10. The total weight for all targets combined must be less than or equal to 100.</p>
 * @public
 */
export interface WeightedTarget {
  /**
   * <p>The virtual node to associate with the weighted target.</p>
   * @public
   */
  virtualNode: string | undefined;

  /**
   * <p>The relative weight of the weighted target.</p>
   * @public
   */
  weight: number | undefined;

  /**
   * <p>The targeted port of the weighted object.</p>
   * @public
   */
  port?: number | undefined;
}

/**
 * <p>An object that represents the action to take if a match is determined.</p>
 * @public
 */
export interface GrpcRouteAction {
  /**
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   * @public
   */
  weightedTargets: WeightedTarget[] | undefined;
}

/**
 * <p>An object that represents the match method. Specify one of the match values.</p>
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
   * <p>The value sent by the client must match the specified value exactly.</p>
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
   * <p>The value sent by the client must include the specified characters.</p>
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
   * <p>An object that represents the range of values to match on.</p>
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
   * <p>The value sent by the client must begin with the specified characters.</p>
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
   * <p>The value sent by the client must end with the specified characters.</p>
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
 * <p>An object that represents the match metadata for the route.</p>
 * @public
 */
export interface GrpcRouteMetadata {
  /**
   * <p>The name of the route.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specify <code>True</code> to match anything except the match criteria. The default value is <code>False</code>.</p>
   * @public
   */
  invert?: boolean | undefined;

  /**
   * <p>An object that represents the data to match from the request.</p>
   * @public
   */
  match?: GrpcRouteMetadataMatchMethod | undefined;
}

/**
 * <p>An object that represents the criteria for determining a request match.</p>
 * @public
 */
export interface GrpcRouteMatch {
  /**
   * <p>The fully qualified domain name for the service to match from the request.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The method name to match from the request. If you specify a name, you must also specify
   *          a <code>serviceName</code>.</p>
   * @public
   */
  methodName?: string | undefined;

  /**
   * <p>An object that represents the data to match from the request.</p>
   * @public
   */
  metadata?: GrpcRouteMetadata[] | undefined;

  /**
   * <p>The port number to match on.</p>
   * @public
   */
  port?: number | undefined;
}

/**
 * <p>An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>.
 *                Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the
 *                <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>.</p>
 * @public
 */
export interface GrpcRetryPolicy {
  /**
   * <p>The timeout for each retry attempt.</p>
   * @public
   */
  perRetryTimeout: Duration | undefined;

  /**
   * <p>The maximum number of retry attempts.</p>
   * @public
   */
  maxRetries: number | undefined;

  /**
   * <p>Specify at least one of the following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>server-error</b> – HTTP status codes 500, 501,
   *                   502, 503, 504, 505, 506, 507, 508, 510, and 511</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>gateway-error</b> – HTTP status codes 502,
   *                   503, and 504</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>client-error</b> – HTTP status code 409</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>stream-error</b> – Retry on refused
   *                   stream</p>
   *             </li>
   *          </ul>
   * @public
   */
  httpRetryEvents?: string[] | undefined;

  /**
   * <p>Specify a valid value. The event occurs before any processing of a request has started and is encountered when the upstream is temporarily or permanently unavailable.</p>
   * @public
   */
  tcpRetryEvents?: TcpRetryPolicyEvent[] | undefined;

  /**
   * <p>Specify at least one of the valid values.</p>
   * @public
   */
  grpcRetryEvents?: GrpcRetryPolicyEvent[] | undefined;
}

/**
 * <p>An object that represents a gRPC route type.</p>
 * @public
 */
export interface GrpcRoute {
  /**
   * <p>An object that represents the action to take if a match is determined.</p>
   * @public
   */
  action: GrpcRouteAction | undefined;

  /**
   * <p>An object that represents the criteria for determining a request match.</p>
   * @public
   */
  match: GrpcRouteMatch | undefined;

  /**
   * <p>An object that represents a retry policy.</p>
   * @public
   */
  retryPolicy?: GrpcRetryPolicy | undefined;

  /**
   * <p>An object that represents types of timeouts. </p>
   * @public
   */
  timeout?: GrpcTimeout | undefined;
}

/**
 * <p>An object that represents the action to take if a match is determined.</p>
 * @public
 */
export interface HttpRouteAction {
  /**
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   * @public
   */
  weightedTargets: WeightedTarget[] | undefined;
}

/**
 * <p>An object that represents the HTTP header in the request.</p>
 * @public
 */
export interface HttpRouteHeader {
  /**
   * <p>A name for the HTTP header in the client request that will be matched on.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specify <code>True</code> to match anything except the match criteria. The default value is <code>False</code>.</p>
   * @public
   */
  invert?: boolean | undefined;

  /**
   * <p>The <code>HeaderMatchMethod</code> object.</p>
   * @public
   */
  match?: HeaderMatchMethod | undefined;
}

/**
 * <p>An object that represents the requirements for a route to match HTTP requests for a
 *          virtual router.</p>
 * @public
 */
export interface HttpRouteMatch {
  /**
   * <p>Specifies the path to match requests with. This parameter must always start with
   *             <code>/</code>, which by itself matches all requests to the virtual service name. You
   *          can also match for path-based routing of requests. For example, if your virtual service
   *          name is <code>my-service.local</code> and you want the route to match requests to
   *             <code>my-service.local/metrics</code>, your prefix should be
   *          <code>/metrics</code>.</p>
   * @public
   */
  prefix?: string | undefined;

  /**
   * <p>The client request path to match on.</p>
   * @public
   */
  path?: HttpPathMatch | undefined;

  /**
   * <p>The client request query parameters to match on.</p>
   * @public
   */
  queryParameters?: HttpQueryParameter[] | undefined;

  /**
   * <p>The client request method to match on. Specify only one.</p>
   * @public
   */
  method?: HttpMethod | undefined;

  /**
   * <p>The client request scheme to match on. Specify only one. Applicable only for HTTP2
   *          routes.</p>
   * @public
   */
  scheme?: HttpScheme | undefined;

  /**
   * <p>The client request headers to match on.</p>
   * @public
   */
  headers?: HttpRouteHeader[] | undefined;

  /**
   * <p>The port number to match on.</p>
   * @public
   */
  port?: number | undefined;
}

/**
 * <p>An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>.
 *                Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the
 *                <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>.</p>
 * @public
 */
export interface HttpRetryPolicy {
  /**
   * <p>The timeout for each retry attempt.</p>
   * @public
   */
  perRetryTimeout: Duration | undefined;

  /**
   * <p>The maximum number of retry attempts.</p>
   * @public
   */
  maxRetries: number | undefined;

  /**
   * <p>Specify at least one of the following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>server-error</b> – HTTP status codes 500, 501,
   *                   502, 503, 504, 505, 506, 507, 508, 510, and 511</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>gateway-error</b> – HTTP status codes 502,
   *                   503, and 504</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>client-error</b> – HTTP status code 409</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>stream-error</b> – Retry on refused
   *                   stream</p>
   *             </li>
   *          </ul>
   * @public
   */
  httpRetryEvents?: string[] | undefined;

  /**
   * <p>Specify a valid value. The event occurs before any processing of a request has started and is encountered when the upstream is temporarily or permanently unavailable.</p>
   * @public
   */
  tcpRetryEvents?: TcpRetryPolicyEvent[] | undefined;
}

/**
 * <p>An object that represents an HTTP or HTTP/2 route type.</p>
 * @public
 */
export interface HttpRoute {
  /**
   * <p>An object that represents the criteria for determining a request match.</p>
   * @public
   */
  match: HttpRouteMatch | undefined;

  /**
   * <p>An object that represents the action to take if a match is determined.</p>
   * @public
   */
  action: HttpRouteAction | undefined;

  /**
   * <p>An object that represents a retry policy.</p>
   * @public
   */
  retryPolicy?: HttpRetryPolicy | undefined;

  /**
   * <p>An object that represents types of timeouts. </p>
   * @public
   */
  timeout?: HttpTimeout | undefined;
}

/**
 * <p>An object that represents the action to take if a match is determined.</p>
 * @public
 */
export interface TcpRouteAction {
  /**
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   * @public
   */
  weightedTargets: WeightedTarget[] | undefined;
}

/**
 * <p>An object representing the TCP route to match.</p>
 * @public
 */
export interface TcpRouteMatch {
  /**
   * <p>The port number to match on.</p>
   * @public
   */
  port?: number | undefined;
}

/**
 * <p>An object that represents a TCP route type.</p>
 * @public
 */
export interface TcpRoute {
  /**
   * <p>The action to take if a match is determined.</p>
   * @public
   */
  action: TcpRouteAction | undefined;

  /**
   * <p>An object that represents types of timeouts. </p>
   * @public
   */
  timeout?: TcpTimeout | undefined;

  /**
   * <p>An object that represents the criteria for determining a request match.</p>
   * @public
   */
  match?: TcpRouteMatch | undefined;
}

/**
 * <p>An object that represents a route specification. Specify one route type.</p>
 * @public
 */
export interface RouteSpec {
  /**
   * <p>The priority for the route. Routes are matched based on the specified value, where 0 is
   *          the highest priority.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>An object that represents the specification of an HTTP route.</p>
   * @public
   */
  httpRoute?: HttpRoute | undefined;

  /**
   * <p>An object that represents the specification of a TCP route.</p>
   * @public
   */
  tcpRoute?: TcpRoute | undefined;

  /**
   * <p>An object that represents the specification of an HTTP/2 route.</p>
   * @public
   */
  http2Route?: HttpRoute | undefined;

  /**
   * <p>An object that represents the specification of a gRPC route.</p>
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
   * <p>The name to use for the route.</p>
   * @public
   */
  routeName: string | undefined;

  /**
   * <p>The name of the service mesh to create the route in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual router in which to create the route. If the virtual router is in
   *          a shared mesh, then you must be the owner of the virtual router resource.</p>
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The route specification to apply.</p>
   * @public
   */
  spec: RouteSpec | undefined;

  /**
   * <p>Optional metadata that you can apply to the route to assist with categorization and
   *          organization. Each tag consists of a key and an optional value, both of which you define.
   *          Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   * @public
   */
  tags?: TagRef[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * <p>An object that represents the current status of a route.</p>
 * @public
 */
export interface RouteStatus {
  /**
   * <p>The current status for the route.</p>
   * @public
   */
  status: RouteStatusCode | undefined;
}

/**
 * <p>An object that represents a route returned by a describe operation.</p>
 * @public
 */
export interface RouteData {
  /**
   * <p>The name of the service mesh that the route resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The virtual router that the route is associated with.</p>
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The name of the route.</p>
   * @public
   */
  routeName: string | undefined;

  /**
   * <p>The specifications of the route.</p>
   * @public
   */
  spec: RouteSpec | undefined;

  /**
   * <p>The associated metadata for the route.</p>
   * @public
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The status of the route.</p>
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
   * <p>The full description of your mesh following the create call.</p>
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
   * <p>The name of the route to delete.</p>
   * @public
   */
  routeName: string | undefined;

  /**
   * <p>The name of the service mesh to delete the route in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual router to delete the route in.</p>
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
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
   * <p>The route that was deleted.</p>
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
   * <p>The name of the route to describe.</p>
   * @public
   */
  routeName: string | undefined;

  /**
   * <p>The name of the service mesh that the route resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;

  /**
   * <p>The name of the virtual router that the route is associated with.</p>
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
   * <p>The full description of your route.</p>
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
   * <p>The name of the service mesh to list routes in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual router to list routes in.</p>
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListRoutes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results returned by <code>ListRoutes</code> in paginated output.
   *          When you use this parameter, <code>ListRoutes</code> returns only <code>limit</code>
   *          results in a single page along with a <code>nextToken</code> response element. You can see
   *          the remaining results of the initial request by sending another <code>ListRoutes</code>
   *          request with the returned <code>nextToken</code> value. This value can be between
   *          1 and 100. If you don't use this parameter,
   *             <code>ListRoutes</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * <p>An object that represents a route returned by a list operation.</p>
 * @public
 */
export interface RouteRef {
  /**
   * <p>The name of the service mesh that the route resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The virtual router that the route is associated with.</p>
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The name of the route.</p>
   * @public
   */
  routeName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  resourceOwner: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) for the route.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   * @public
   */
  version: number | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
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
   * <p>The list of existing routes for the specified service mesh and virtual router.</p>
   * @public
   */
  routes: RouteRef[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListRoutes</code> request.
   *          When the results of a <code>ListRoutes</code> request exceed <code>limit</code>, you can
   *          use this value to retrieve the next page of results. This value is <code>null</code> when
   *          there are no more results to return.</p>
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
   * <p>The name of the route to update.</p>
   * @public
   */
  routeName: string | undefined;

  /**
   * <p>The name of the service mesh that the route resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual router that the route is associated with.</p>
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The new route specification to apply. This overwrites the existing data.</p>
   * @public
   */
  spec: RouteSpec | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
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
   * <p>A full description of the route that was updated.</p>
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
   * <p>The name of the virtual router to update.</p>
   * @public
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The new virtual router specification to apply. This overwrites the existing data.</p>
   * @public
   */
  spec: VirtualRouterSpec | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
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
   * <p>A full description of the virtual router that was updated.</p>
   * @public
   */
  virtualRouter: VirtualRouterData | undefined;
}

/**
 * <p>An object that represents a virtual node service provider.</p>
 * @public
 */
export interface VirtualNodeServiceProvider {
  /**
   * <p>The name of the virtual node that is acting as a service provider.</p>
   * @public
   */
  virtualNodeName: string | undefined;
}

/**
 * <p>An object that represents a virtual node service provider.</p>
 * @public
 */
export interface VirtualRouterServiceProvider {
  /**
   * <p>The name of the virtual router that is acting as a service provider.</p>
   * @public
   */
  virtualRouterName: string | undefined;
}

/**
 * <p>An object that represents the provider for a virtual service.</p>
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
   * <p>The virtual node associated with a virtual service.</p>
   * @public
   */
  export interface VirtualNodeMember {
    virtualNode: VirtualNodeServiceProvider;
    virtualRouter?: never;
    $unknown?: never;
  }

  /**
   * <p>The virtual router associated with a virtual service.</p>
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
 * <p>An object that represents the specification of a virtual service.</p>
 * @public
 */
export interface VirtualServiceSpec {
  /**
   * <p>The App Mesh object that is acting as the provider for a virtual service. You
   *          can specify a single virtual node or virtual router.</p>
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
   * <p>The name to use for the virtual service.</p>
   * @public
   */
  virtualServiceName: string | undefined;

  /**
   * <p>The name of the service mesh to create the virtual service in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The virtual service specification to apply.</p>
   * @public
   */
  spec: VirtualServiceSpec | undefined;

  /**
   * <p>Optional metadata that you can apply to the virtual service to assist with
   *          categorization and organization. Each tag consists of a key and an optional value, both of
   *          which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   * @public
   */
  tags?: TagRef[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * <p>An object that represents the status of a virtual service.</p>
 * @public
 */
export interface VirtualServiceStatus {
  /**
   * <p>The current status of the virtual service.</p>
   * @public
   */
  status: VirtualServiceStatusCode | undefined;
}

/**
 * <p>An object that represents a virtual service returned by a describe operation.</p>
 * @public
 */
export interface VirtualServiceData {
  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual service.</p>
   * @public
   */
  virtualServiceName: string | undefined;

  /**
   * <p>The specifications of the virtual service.</p>
   * @public
   */
  spec: VirtualServiceSpec | undefined;

  /**
   * <p>An object that represents metadata for a resource.</p>
   * @public
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The current status of the virtual service.</p>
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
   * <p>The full description of your virtual service following the create call.</p>
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
   * <p>The name of the virtual service to delete.</p>
   * @public
   */
  virtualServiceName: string | undefined;

  /**
   * <p>The name of the service mesh to delete the virtual service in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
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
   * <p>The virtual service that was deleted.</p>
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
   * <p>The name of the virtual service to describe.</p>
   * @public
   */
  virtualServiceName: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
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
   * <p>The full description of your virtual service.</p>
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
   * <p>The name of the service mesh to list virtual services in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualServices</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results returned by <code>ListVirtualServices</code> in paginated
   *          output. When you use this parameter, <code>ListVirtualServices</code> returns only
   *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
   *          element. You can see the remaining results of the initial request by sending another
   *             <code>ListVirtualServices</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If you don't use this
   *          parameter, <code>ListVirtualServices</code> returns up to 100 results and
   *          a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner?: string | undefined;
}

/**
 * <p>An object that represents a virtual service returned by a list operation.</p>
 * @public
 */
export interface VirtualServiceRef {
  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual service.</p>
   * @public
   */
  virtualServiceName: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  meshOwner: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   * @public
   */
  resourceOwner: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) for the virtual service.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   * @public
   */
  version: number | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
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
   * <p>The list of existing virtual services for the specified service mesh.</p>
   * @public
   */
  virtualServices: VirtualServiceRef[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualServices</code>
   *          request. When the results of a <code>ListVirtualServices</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
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
   * <p>The name of the virtual service to update.</p>
   * @public
   */
  virtualServiceName: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   * @public
   */
  meshName: string | undefined;

  /**
   * <p>The new virtual service specification to apply. This overwrites the existing
   *          data.</p>
   * @public
   */
  spec: VirtualServiceSpec | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
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
   * <p>A full description of the virtual service that was updated.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource to add tags to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.
   *          Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource to delete tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 *
 * @public
 */
export interface UntagResourceOutput {}
