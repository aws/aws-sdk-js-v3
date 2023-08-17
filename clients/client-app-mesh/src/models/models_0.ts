// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AppMeshServiceException as __BaseException } from "./AppMeshServiceException";

/**
 * @public
 * <p>An object that represents the key value pairs for the JSON.</p>
 */
export interface JsonFormatRef {
  /**
   * @public
   * <p>The specified key for the JSON.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The specified value for the JSON.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>An object that represents the format for the logs.</p>
 */
export type LoggingFormat = LoggingFormat.JsonMember | LoggingFormat.TextMember | LoggingFormat.$UnknownMember;

/**
 * @public
 */
export namespace LoggingFormat {
  /**
   * @public
   * <p/>
   */
  export interface TextMember {
    text: string;
    json?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p/>
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

  export interface Visitor<T> {
    text: (value: string) => T;
    json: (value: JsonFormatRef[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: LoggingFormat, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    if (value.json !== undefined) return visitor.json(value.json);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>An object that represents an access log file.</p>
 */
export interface FileAccessLog {
  /**
   * @public
   * <p>The file path to write access logs to. You can use <code>/dev/stdout</code> to send
   *          access logs to standard out and configure your Envoy container to use a log driver, such as
   *             <code>awslogs</code>, to export the access logs to a log storage service such as Amazon
   *          CloudWatch Logs. You can also specify a path in the Envoy container's file system to write
   *          the files to disk.</p>
   *
   *          <note>
   *             <p>The Envoy process must have write permissions to the path that you specify here.
   *             Otherwise, Envoy fails to bootstrap properly.</p>
   *          </note>
   */
  path: string | undefined;

  /**
   * @public
   * <p>The specified format for the logs. The format is either <code>json_format</code> or
   *             <code>text_format</code>.</p>
   */
  format?: LoggingFormat;
}

/**
 * @public
 * <p>An object that represents the access logging information for a virtual node.</p>
 */
export type AccessLog = AccessLog.FileMember | AccessLog.$UnknownMember;

/**
 * @public
 */
export namespace AccessLog {
  /**
   * @public
   * <p>The file object to send virtual node access logs to.</p>
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

  export interface Visitor<T> {
    file: (value: FileAccessLog) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AccessLog, visitor: Visitor<T>): T => {
    if (value.file !== undefined) return visitor.file(value.file);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The request syntax was malformed. Check your request syntax and try again.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * @public
 * <p>You don't have permissions to perform this action.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
  }
}

/**
 * @public
 * <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
  }
}

/**
 * @public
 *
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListTagsForResource</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of tag results returned by <code>ListTagsForResource</code> in
   *          paginated output. When this parameter is used, <code>ListTagsForResource</code> returns
   *          only <code>limit</code> results in a single page along with a <code>nextToken</code>
   *          response element. You can see the remaining results of the initial request by sending
   *          another <code>ListTagsForResource</code> request with the returned <code>nextToken</code>
   *          value. This value can be between 1 and 100. If you don't use
   *          this parameter, <code>ListTagsForResource</code> returns up to 100
   *          results and a <code>nextToken</code> value if applicable.</p>
   */
  limit?: number;
}

/**
 * @public
 * <p>Optional metadata that you apply to a resource to assist with categorization and
 *          organization. Each tag consists of a key and an optional value, both of which you define.
 *          Tag keys can have a maximum character length of 128 characters, and tag values can have
 *             a maximum length of 256 characters.</p>
 */
export interface TagRef {
  /**
   * @public
   * <p>One part of a key-value pair that make up a tag. A <code>key</code> is a general label
   *          that acts like a category for more specific tag values.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The optional part of a key-value pair that make up a tag. A <code>value</code> acts as a
   *          descriptor within a tag category (key).</p>
   */
  value: string | undefined;
}

/**
 * @public
 *
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>The tags for the resource.</p>
   */
  tags: TagRef[] | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value to include in a future <code>ListTagsForResource</code>
   *          request. When the results of a <code>ListTagsForResource</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * @public
 * <p>The request has failed due to a temporary failure of the service.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * @public
 * <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for
 *          your account. For best results, use an increasing or variable sleep interval between
 *          requests.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
  }
}

/**
 * @public
 * <p>The request contains a client token that was used for a previous update resource call
 *          with different specifications. Try the request again with a new client token.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * @enum
 */
export const EgressFilterType = {
  ALLOW_ALL: "ALLOW_ALL",
  DROP_ALL: "DROP_ALL",
} as const;

/**
 * @public
 */
export type EgressFilterType = (typeof EgressFilterType)[keyof typeof EgressFilterType];

/**
 * @public
 * <p>An object that represents the egress filter rules for a service mesh.</p>
 */
export interface EgressFilter {
  /**
   * @public
   * <p>The egress filter type. By default, the type is <code>DROP_ALL</code>, which allows
   *          egress only from virtual nodes to other defined resources in the service mesh (and any
   *          traffic to <code>*.amazonaws.com</code> for Amazon Web Services API calls). You can set the
   *          egress filter type to <code>ALLOW_ALL</code> to allow egress to any endpoint inside or
   *          outside of the service mesh.</p>
   */
  type: EgressFilterType | string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpPreference = {
  IPv4_ONLY: "IPv4_ONLY",
  IPv4_PREFERRED: "IPv4_PREFERRED",
  IPv6_ONLY: "IPv6_ONLY",
  IPv6_PREFERRED: "IPv6_PREFERRED",
} as const;

/**
 * @public
 */
export type IpPreference = (typeof IpPreference)[keyof typeof IpPreference];

/**
 * @public
 * <p>An object that represents the service discovery information for a service mesh.</p>
 */
export interface MeshServiceDiscovery {
  /**
   * @public
   * <p>The IP version to use to control traffic within the mesh.</p>
   */
  ipPreference?: IpPreference | string;
}

/**
 * @public
 * <p>An object that represents the specification of a service mesh.</p>
 */
export interface MeshSpec {
  /**
   * @public
   * <p>The egress filter rules for the service mesh.</p>
   */
  egressFilter?: EgressFilter;

  /**
   * @public
   * <p>An object that represents the service discovery information for a service mesh.</p>
   */
  serviceDiscovery?: MeshServiceDiscovery;
}

/**
 * @public
 *
 */
export interface CreateMeshInput {
  /**
   * @public
   * <p>The name to use for the service mesh.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The service mesh specification to apply.</p>
   */
  spec?: MeshSpec;

  /**
   * @public
   * <p>Optional metadata that you can apply to the service mesh to assist with categorization
   *          and organization. Each tag consists of a key and an optional value, both of which you
   *          define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>An object that represents metadata for a resource.</p>
 */
export interface ResourceMetadata {
  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) for the resource.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;

  /**
   * @public
   * <p>The unique identifier for the resource.</p>
   */
  uid: string | undefined;

  /**
   * @public
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MeshStatusCode = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type MeshStatusCode = (typeof MeshStatusCode)[keyof typeof MeshStatusCode];

/**
 * @public
 * <p>An object that represents the status of a service mesh.</p>
 */
export interface MeshStatus {
  /**
   * @public
   * <p>The current mesh status.</p>
   */
  status?: MeshStatusCode | string;
}

/**
 * @public
 * <p>An object that represents a service mesh returned by a describe operation.</p>
 */
export interface MeshData {
  /**
   * @public
   * <p>The name of the service mesh.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The associated specification for the service mesh.</p>
   */
  spec: MeshSpec | undefined;

  /**
   * @public
   * <p>The associated metadata for the service mesh.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * @public
   * <p>The status of the service mesh.</p>
   */
  status: MeshStatus | undefined;
}

/**
 * @public
 *
 */
export interface CreateMeshOutput {
  /**
   * @public
   * <p>The full description of your service mesh following the create call.</p>
   */
  mesh: MeshData | undefined;
}

/**
 * @public
 * <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service-quotas.html">Service
 *             Limits</a> in the <i>App Mesh User Guide</i>.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * @public
 *
 */
export interface DeleteMeshInput {
  /**
   * @public
   * <p>The name of the service mesh to delete.</p>
   */
  meshName: string | undefined;
}

/**
 * @public
 *
 */
export interface DeleteMeshOutput {
  /**
   * @public
   * <p>The service mesh that was deleted.</p>
   */
  mesh: MeshData | undefined;
}

/**
 * @public
 * <p>You can't delete the specified resource because it's in use or required by another
 *          resource.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

/**
 * @public
 *
 */
export interface DescribeMeshInput {
  /**
   * @public
   * <p>The name of the service mesh to describe.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 *
 */
export interface DescribeMeshOutput {
  /**
   * @public
   * <p>The full description of your service mesh.</p>
   */
  mesh: MeshData | undefined;
}

/**
 * @public
 *
 */
export interface ListMeshesInput {
  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListMeshes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results returned by <code>ListMeshes</code> in paginated output.
   *          When you use this parameter, <code>ListMeshes</code> returns only <code>limit</code>
   *          results in a single page along with a <code>nextToken</code> response element. You can see
   *          the remaining results of the initial request by sending another <code>ListMeshes</code>
   *          request with the returned <code>nextToken</code> value. This value can be between
   *          1 and 100. If you don't use this parameter,
   *             <code>ListMeshes</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable.</p>
   */
  limit?: number;
}

/**
 * @public
 * <p>An object that represents a service mesh returned by a list operation.</p>
 */
export interface MeshRef {
  /**
   * @public
   * <p>The name of the service mesh.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) of the service mesh.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;

  /**
   * @public
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 *
 */
export interface ListMeshesOutput {
  /**
   * @public
   * <p>The list of existing service meshes.</p>
   */
  meshes: MeshRef[] | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value to include in a future <code>ListMeshes</code> request.
   *          When the results of a <code>ListMeshes</code> request exceed <code>limit</code>, you can
   *          use this value to retrieve the next page of results. This value is <code>null</code> when
   *          there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 *
 */
export interface UpdateMeshInput {
  /**
   * @public
   * <p>The name of the service mesh to update.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The service mesh specification to apply.</p>
   */
  spec?: MeshSpec;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
}

/**
 * @public
 *
 */
export interface UpdateMeshOutput {
  /**
   * @public
   * <p>An object that represents a service mesh returned by a describe operation.</p>
   */
  mesh: MeshData | undefined;
}

/**
 * @public
 * <p>An object that represents a local file certificate.
 *          The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
 */
export interface VirtualGatewayListenerTlsFileCertificate {
  /**
   * @public
   * <p>The certificate chain for the certificate.</p>
   */
  certificateChain: string | undefined;

  /**
   * @public
   * <p>The private key for a certificate stored on the file system of the mesh endpoint that
   *          the proxy is running on.</p>
   */
  privateKey: string | undefined;
}

/**
 * @public
 * <p>An object that represents the virtual gateway's listener's Secret Discovery Service
 *          certificate.The proxy must be configured with a local SDS provider via a Unix Domain
 *          Socket. See App Mesh<a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS
 *             documentation</a> for more info. </p>
 */
export interface VirtualGatewayListenerTlsSdsCertificate {
  /**
   * @public
   * <p>A reference to an object that represents the name of the secret secret requested from
   *          the Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or
   *          certificate chain.</p>
   */
  secretName: string | undefined;
}

/**
 * @public
 * <p>An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate.</p>
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
   * @public
   * <p>An object that represents a local file certificate. The certificate must meet specific
   *          requirements and you must have proxy authorization enabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html"> Transport Layer Security (TLS)
   *          </a>.</p>
   */
  export interface FileMember {
    file: VirtualGatewayListenerTlsFileCertificate;
    sds?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A reference to an object that represents a virtual gateway's client's Secret Discovery
   *          Service certificate.</p>
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

  export interface Visitor<T> {
    file: (value: VirtualGatewayListenerTlsFileCertificate) => T;
    sds: (value: VirtualGatewayListenerTlsSdsCertificate) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: VirtualGatewayClientTlsCertificate, visitor: Visitor<T>): T => {
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>An object that represents the methods by which a subject alternative name on a peer
 *          Transport Layer Security (TLS) certificate can be matched.</p>
 */
export interface SubjectAlternativeNameMatchers {
  /**
   * @public
   * <p>The values sent must match the specified values exactly.</p>
   */
  exact: string[] | undefined;
}

/**
 * @public
 * <p>An object that represents the subject alternative names secured by the
 *          certificate.</p>
 */
export interface SubjectAlternativeNames {
  /**
   * @public
   * <p>An object that represents the criteria for determining a SANs match.</p>
   */
  match: SubjectAlternativeNameMatchers | undefined;
}

/**
 * @public
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager
 *          certificate.</p>
 */
export interface VirtualGatewayTlsValidationContextAcmTrust {
  /**
   * @public
   * <p>One or more ACM Amazon Resource Name (ARN)s.</p>
   */
  certificateAuthorityArns: string[] | undefined;
}

/**
 * @public
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
 */
export interface VirtualGatewayTlsValidationContextFileTrust {
  /**
   * @public
   * <p>The certificate trust chain for a certificate stored on the file system of the virtual
   *          node that the proxy is running on.</p>
   */
  certificateChain: string | undefined;
}

/**
 * @public
 * <p>An object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service
 *          validation context trust. The proxy must be configured with a local SDS provider via a Unix
 *          Domain Socket. See App Mesh
 *          <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS
 *             documentation</a> for more info.</p>
 */
export interface VirtualGatewayTlsValidationContextSdsTrust {
  /**
   * @public
   * <p>A reference to an object that represents the name of the secret for a virtual gateway's
   *          Transport Layer Security (TLS) Secret Discovery Service validation context trust.</p>
   */
  secretName: string | undefined;
}

/**
 * @public
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust.</p>
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
   * @public
   * <p>A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.</p>
   */
  export interface AcmMember {
    acm: VirtualGatewayTlsValidationContextAcmTrust;
    file?: never;
    sds?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
   */
  export interface FileMember {
    acm?: never;
    file: VirtualGatewayTlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A reference to an object that represents a virtual gateway's Transport Layer Security (TLS) Secret Discovery
   *          Service validation context trust.</p>
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

  export interface Visitor<T> {
    acm: (value: VirtualGatewayTlsValidationContextAcmTrust) => T;
    file: (value: VirtualGatewayTlsValidationContextFileTrust) => T;
    sds: (value: VirtualGatewayTlsValidationContextSdsTrust) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: VirtualGatewayTlsValidationContextTrust, visitor: Visitor<T>): T => {
    if (value.acm !== undefined) return visitor.acm(value.acm);
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>An object that represents a Transport Layer Security (TLS) validation context.</p>
 */
export interface VirtualGatewayTlsValidationContext {
  /**
   * @public
   * <p>A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS)
   *          certificate.</p>
   */
  trust: VirtualGatewayTlsValidationContextTrust | undefined;

  /**
   * @public
   * <p>A reference to an object that represents the SANs for a virtual gateway's listener's
   *          Transport Layer Security (TLS) validation context.</p>
   */
  subjectAlternativeNames?: SubjectAlternativeNames;
}

/**
 * @public
 * <p>An object that represents a Transport Layer Security (TLS) client policy.</p>
 */
export interface VirtualGatewayClientPolicyTls {
  /**
   * @public
   * <p>Whether the policy is enforced. The default is <code>True</code>, if a value isn't
   *          specified.</p>
   */
  enforce?: boolean;

  /**
   * @public
   * <p>One or more ports that the policy is enforced for.</p>
   */
  ports?: number[];

  /**
   * @public
   * <p>A reference to an object that represents a virtual gateway's client's Transport Layer Security (TLS)
   *          certificate.</p>
   */
  certificate?: VirtualGatewayClientTlsCertificate;

  /**
   * @public
   * <p>A reference to an object that represents a Transport Layer Security (TLS) validation context.</p>
   */
  validation: VirtualGatewayTlsValidationContext | undefined;
}

/**
 * @public
 * <p>An object that represents a client policy.</p>
 */
export interface VirtualGatewayClientPolicy {
  /**
   * @public
   * <p>A reference to an object that represents a Transport Layer Security (TLS) client policy.</p>
   */
  tls?: VirtualGatewayClientPolicyTls;
}

/**
 * @public
 * <p>An object that represents the default properties for a backend.</p>
 */
export interface VirtualGatewayBackendDefaults {
  /**
   * @public
   * <p>A reference to an object that represents a client policy.</p>
   */
  clientPolicy?: VirtualGatewayClientPolicy;
}

/**
 * @public
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualGatewayGrpcConnectionPool {
  /**
   * @public
   * <p>Maximum number of inflight requests Envoy can concurrently support across hosts in
   *          upstream cluster.</p>
   */
  maxRequests: number | undefined;
}

/**
 * @public
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualGatewayHttpConnectionPool {
  /**
   * @public
   * <p>Maximum number of outbound TCP connections Envoy can establish concurrently with all
   *          hosts in upstream cluster.</p>
   */
  maxConnections: number | undefined;

  /**
   * @public
   * <p>Number of overflowing requests after <code>max_connections</code> Envoy will queue to
   *          upstream cluster.</p>
   */
  maxPendingRequests?: number;
}

/**
 * @public
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualGatewayHttp2ConnectionPool {
  /**
   * @public
   * <p>Maximum number of inflight requests Envoy can concurrently support across hosts in
   *          upstream cluster.</p>
   */
  maxRequests: number | undefined;
}

/**
 * @public
 * <p>An object that represents the type of virtual gateway connection pool.</p>
 *          <p>Only one protocol is used at a time and should be the same protocol as the one chosen
 *          under port mapping.</p>
 *          <p>If not present the default value for <code>maxPendingRequests</code> is
 *             <code>2147483647</code>.</p>
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
   * @public
   * <p>An object that represents a type of connection pool.</p>
   */
  export interface HttpMember {
    http: VirtualGatewayHttpConnectionPool;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An object that represents a type of connection pool.</p>
   */
  export interface Http2Member {
    http?: never;
    http2: VirtualGatewayHttp2ConnectionPool;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An object that represents a type of connection pool. </p>
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

  export interface Visitor<T> {
    http: (value: VirtualGatewayHttpConnectionPool) => T;
    http2: (value: VirtualGatewayHttp2ConnectionPool) => T;
    grpc: (value: VirtualGatewayGrpcConnectionPool) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: VirtualGatewayConnectionPool, visitor: Visitor<T>): T => {
    if (value.http !== undefined) return visitor.http(value.http);
    if (value.http2 !== undefined) return visitor.http2(value.http2);
    if (value.grpc !== undefined) return visitor.grpc(value.grpc);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const VirtualGatewayPortProtocol = {
  GRPC: "grpc",
  HTTP: "http",
  HTTP2: "http2",
} as const;

/**
 * @public
 */
export type VirtualGatewayPortProtocol = (typeof VirtualGatewayPortProtocol)[keyof typeof VirtualGatewayPortProtocol];

/**
 * @public
 * <p>An object that represents the health check policy for a virtual gateway's
 *          listener.</p>
 */
export interface VirtualGatewayHealthCheckPolicy {
  /**
   * @public
   * <p>The amount of time to wait when receiving a response from the health check, in
   *          milliseconds.</p>
   */
  timeoutMillis: number | undefined;

  /**
   * @public
   * <p>The time period in milliseconds between each health check execution.</p>
   */
  intervalMillis: number | undefined;

  /**
   * @public
   * <p>The protocol for the health check request. If you specify <code>grpc</code>, then your
   *          service must conform to the <a href="https://github.com/grpc/grpc/blob/master/doc/health-checking.md">GRPC Health
   *             Checking Protocol</a>.</p>
   */
  protocol: VirtualGatewayPortProtocol | string | undefined;

  /**
   * @public
   * <p>The destination port for the health check request. This port must match the port defined
   *          in the <a>PortMapping</a> for the listener.</p>
   */
  port?: number;

  /**
   * @public
   * <p>The destination path for the health check request. This value is only used if the
   *          specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.</p>
   */
  path?: string;

  /**
   * @public
   * <p>The number of consecutive successful health checks that must occur before declaring the
   *          listener healthy.</p>
   */
  healthyThreshold: number | undefined;

  /**
   * @public
   * <p>The number of consecutive failed health checks that must occur before declaring a
   *          virtual gateway unhealthy.</p>
   */
  unhealthyThreshold: number | undefined;
}

/**
 * @public
 * <p>An object that represents a port mapping.</p>
 */
export interface VirtualGatewayPortMapping {
  /**
   * @public
   * <p>The port used for the port mapping. Specify one protocol.</p>
   */
  port: number | undefined;

  /**
   * @public
   * <p>The protocol used for the port mapping.</p>
   */
  protocol: VirtualGatewayPortProtocol | string | undefined;
}

/**
 * @public
 * <p>An object that represents an Certificate Manager certificate.</p>
 */
export interface VirtualGatewayListenerTlsAcmCertificate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
   */
  certificateArn: string | undefined;
}

/**
 * @public
 * <p>An object that represents a listener's Transport Layer Security (TLS) certificate.</p>
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
   * @public
   * <p>A reference to an object that represents an Certificate Manager certificate.</p>
   */
  export interface AcmMember {
    acm: VirtualGatewayListenerTlsAcmCertificate;
    file?: never;
    sds?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A reference to an object that represents a local file certificate.</p>
   */
  export interface FileMember {
    acm?: never;
    file: VirtualGatewayListenerTlsFileCertificate;
    sds?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A reference to an object that represents a virtual gateway's listener's Secret Discovery
   *          Service certificate.</p>
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

  export interface Visitor<T> {
    acm: (value: VirtualGatewayListenerTlsAcmCertificate) => T;
    file: (value: VirtualGatewayListenerTlsFileCertificate) => T;
    sds: (value: VirtualGatewayListenerTlsSdsCertificate) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: VirtualGatewayListenerTlsCertificate, visitor: Visitor<T>): T => {
    if (value.acm !== undefined) return visitor.acm(value.acm);
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const VirtualGatewayListenerTlsMode = {
  DISABLED: "DISABLED",
  PERMISSIVE: "PERMISSIVE",
  STRICT: "STRICT",
} as const;

/**
 * @public
 */
export type VirtualGatewayListenerTlsMode =
  (typeof VirtualGatewayListenerTlsMode)[keyof typeof VirtualGatewayListenerTlsMode];

/**
 * @public
 * <p>An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context
 *          trust.</p>
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
   * @public
   * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
   */
  export interface FileMember {
    file: VirtualGatewayTlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret
   *          Discovery Service validation context trust.</p>
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

  export interface Visitor<T> {
    file: (value: VirtualGatewayTlsValidationContextFileTrust) => T;
    sds: (value: VirtualGatewayTlsValidationContextSdsTrust) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: VirtualGatewayListenerTlsValidationContextTrust, visitor: Visitor<T>): T => {
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation
 *          context.</p>
 */
export interface VirtualGatewayListenerTlsValidationContext {
  /**
   * @public
   * <p>A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS)
   *          certificate.</p>
   */
  trust: VirtualGatewayListenerTlsValidationContextTrust | undefined;

  /**
   * @public
   * <p>A reference to an object that represents the SANs for a virtual gateway listener's Transport Layer Security (TLS)
   *          validation context.</p>
   */
  subjectAlternativeNames?: SubjectAlternativeNames;
}

/**
 * @public
 * <p>An object that represents the Transport Layer Security (TLS) properties for a listener.</p>
 */
export interface VirtualGatewayListenerTls {
  /**
   * @public
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
   */
  mode: VirtualGatewayListenerTlsMode | string | undefined;

  /**
   * @public
   * <p>A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation
   *          context.</p>
   */
  validation?: VirtualGatewayListenerTlsValidationContext;

  /**
   * @public
   * <p>An object that represents a Transport Layer Security (TLS) certificate.</p>
   */
  certificate: VirtualGatewayListenerTlsCertificate | undefined;
}

/**
 * @public
 * <p>An object that represents a listener for a virtual gateway.</p>
 */
export interface VirtualGatewayListener {
  /**
   * @public
   * <p>The health check information for the listener.</p>
   */
  healthCheck?: VirtualGatewayHealthCheckPolicy;

  /**
   * @public
   * <p>The port mapping information for the listener.</p>
   */
  portMapping: VirtualGatewayPortMapping | undefined;

  /**
   * @public
   * <p>A reference to an object that represents the Transport Layer Security (TLS) properties for the listener.</p>
   */
  tls?: VirtualGatewayListenerTls;

  /**
   * @public
   * <p>The connection pool information for the virtual gateway listener.</p>
   */
  connectionPool?: VirtualGatewayConnectionPool;
}

/**
 * @public
 * <p>An object that represents an access log file.</p>
 */
export interface VirtualGatewayFileAccessLog {
  /**
   * @public
   * <p>The file path to write access logs to. You can use <code>/dev/stdout</code> to send
   *          access logs to standard out and configure your Envoy container to use a log driver, such as
   *             <code>awslogs</code>, to export the access logs to a log storage service such as Amazon
   *          CloudWatch Logs. You can also specify a path in the Envoy container's file system to write
   *          the files to disk.</p>
   */
  path: string | undefined;

  /**
   * @public
   * <p>The specified format for the virtual gateway access logs. It can be either
   *             <code>json_format</code> or <code>text_format</code>.</p>
   */
  format?: LoggingFormat;
}

/**
 * @public
 * <p>The access log configuration for a virtual gateway.</p>
 */
export type VirtualGatewayAccessLog = VirtualGatewayAccessLog.FileMember | VirtualGatewayAccessLog.$UnknownMember;

/**
 * @public
 */
export namespace VirtualGatewayAccessLog {
  /**
   * @public
   * <p>The file object to send virtual gateway access logs to.</p>
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

  export interface Visitor<T> {
    file: (value: VirtualGatewayFileAccessLog) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: VirtualGatewayAccessLog, visitor: Visitor<T>): T => {
    if (value.file !== undefined) return visitor.file(value.file);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>An object that represents logging information.</p>
 */
export interface VirtualGatewayLogging {
  /**
   * @public
   * <p>The access log configuration.</p>
   */
  accessLog?: VirtualGatewayAccessLog;
}

/**
 * @public
 * <p>An object that represents the specification of a service mesh resource.</p>
 */
export interface VirtualGatewaySpec {
  /**
   * @public
   * <p>A reference to an object that represents the defaults for backends.</p>
   */
  backendDefaults?: VirtualGatewayBackendDefaults;

  /**
   * @public
   * <p>The listeners that the mesh endpoint is expected to receive inbound traffic from. You
   *          can specify one listener.</p>
   */
  listeners: VirtualGatewayListener[] | undefined;

  /**
   * @public
   * <p>An object that represents logging information.</p>
   */
  logging?: VirtualGatewayLogging;
}

/**
 * @public
 */
export interface CreateVirtualGatewayInput {
  /**
   * @public
   * <p>The name to use for the virtual gateway.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh to create the virtual gateway in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The virtual gateway specification to apply.</p>
   */
  spec: VirtualGatewaySpec | undefined;

  /**
   * @public
   * <p>Optional metadata that you can apply to the virtual gateway to assist with
   *          categorization and organization. Each tag consists of a key and an optional value, both of
   *          which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 * @enum
 */
export const VirtualGatewayStatusCode = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type VirtualGatewayStatusCode = (typeof VirtualGatewayStatusCode)[keyof typeof VirtualGatewayStatusCode];

/**
 * @public
 * <p>An object that represents the status of the mesh resource.</p>
 */
export interface VirtualGatewayStatus {
  /**
   * @public
   * <p>The current status.</p>
   */
  status: VirtualGatewayStatusCode | string | undefined;
}

/**
 * @public
 * <p>An object that represents a virtual gateway returned by a describe operation.</p>
 */
export interface VirtualGatewayData {
  /**
   * @public
   * <p>The name of the service mesh that the virtual gateway resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual gateway.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * @public
   * <p>The specifications of the virtual gateway.</p>
   */
  spec: VirtualGatewaySpec | undefined;

  /**
   * @public
   * <p>An object that represents metadata for a resource.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * @public
   * <p>The current status of the virtual gateway.</p>
   */
  status: VirtualGatewayStatus | undefined;
}

/**
 * @public
 */
export interface CreateVirtualGatewayOutput {
  /**
   * @public
   * <p>The full description of your virtual gateway following the create call.</p>
   */
  virtualGateway: VirtualGatewayData | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualGatewayInput {
  /**
   * @public
   * <p>The name of the virtual gateway to delete.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh to delete the virtual gateway from.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 */
export interface DeleteVirtualGatewayOutput {
  /**
   * @public
   * <p>The virtual gateway that was deleted.</p>
   */
  virtualGateway: VirtualGatewayData | undefined;
}

/**
 * @public
 */
export interface DescribeVirtualGatewayInput {
  /**
   * @public
   * <p>The name of the virtual gateway to describe.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh that the gateway route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 */
export interface DescribeVirtualGatewayOutput {
  /**
   * @public
   * <p>The full description of your virtual gateway.</p>
   */
  virtualGateway: VirtualGatewayData | undefined;
}

/**
 * @public
 * @enum
 */
export const DefaultGatewayRouteRewrite = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DefaultGatewayRouteRewrite = (typeof DefaultGatewayRouteRewrite)[keyof typeof DefaultGatewayRouteRewrite];

/**
 * @public
 * <p>An object representing the gateway route host name to rewrite.</p>
 */
export interface GatewayRouteHostnameRewrite {
  /**
   * @public
   * <p>The default target host name to write to.</p>
   */
  defaultTargetHostname?: DefaultGatewayRouteRewrite | string;
}

/**
 * @public
 * <p>An object that represents the gateway route to rewrite.</p>
 */
export interface GrpcGatewayRouteRewrite {
  /**
   * @public
   * <p>The host name of the gateway route to rewrite.</p>
   */
  hostname?: GatewayRouteHostnameRewrite;
}

/**
 * @public
 * <p>An object that represents the virtual service that traffic is routed to.</p>
 */
export interface GatewayRouteVirtualService {
  /**
   * @public
   * <p>The name of the virtual service that traffic is routed to.</p>
   */
  virtualServiceName: string | undefined;
}

/**
 * @public
 * <p>An object that represents a gateway route target.</p>
 */
export interface GatewayRouteTarget {
  /**
   * @public
   * <p>An object that represents a virtual service gateway route target.</p>
   */
  virtualService: GatewayRouteVirtualService | undefined;

  /**
   * @public
   * <p>The port number of the gateway route target.</p>
   */
  port?: number;
}

/**
 * @public
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface GrpcGatewayRouteAction {
  /**
   * @public
   * <p>An object that represents the target that traffic is routed to when a request matches the gateway route.</p>
   */
  target: GatewayRouteTarget | undefined;

  /**
   * @public
   * <p>The gateway route action to rewrite.</p>
   */
  rewrite?: GrpcGatewayRouteRewrite;
}

/**
 * @public
 * <p>An object representing the gateway route host name to match.</p>
 */
export interface GatewayRouteHostnameMatch {
  /**
   * @public
   * <p>The exact host name to match on.</p>
   */
  exact?: string;

  /**
   * @public
   * <p>The specified ending characters of the host name to match on.</p>
   */
  suffix?: string;
}

/**
 * @public
 * <p>An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.</p>
 */
export interface MatchRange {
  /**
   * @public
   * <p>The start of the range.</p>
   */
  start: number | undefined;

  /**
   * @public
   * <p>The end of the range.</p>
   */
  end: number | undefined;
}

/**
 * @public
 * <p>An object representing the method header to be matched.</p>
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
   * @public
   * <p>The exact method header to be matched on.</p>
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
   * @public
   * <p>The regex used to match the method header.</p>
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
   * @public
   * <p>An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.</p>
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
   * @public
   * <p>The specified beginning characters of the method header to be matched on.</p>
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
   * @public
   * <p>The specified ending characters of the method header to match on.</p>
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

  export interface Visitor<T> {
    exact: (value: string) => T;
    regex: (value: string) => T;
    range: (value: MatchRange) => T;
    prefix: (value: string) => T;
    suffix: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: GrpcMetadataMatchMethod, visitor: Visitor<T>): T => {
    if (value.exact !== undefined) return visitor.exact(value.exact);
    if (value.regex !== undefined) return visitor.regex(value.regex);
    if (value.range !== undefined) return visitor.range(value.range);
    if (value.prefix !== undefined) return visitor.prefix(value.prefix);
    if (value.suffix !== undefined) return visitor.suffix(value.suffix);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>An object representing the metadata of the gateway route.</p>
 */
export interface GrpcGatewayRouteMetadata {
  /**
   * @public
   * <p>A name for the gateway route metadata.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Specify <code>True</code> to match anything except the match criteria. The default value
   *          is <code>False</code>.</p>
   */
  invert?: boolean;

  /**
   * @public
   * <p>The criteria for determining a metadata match.</p>
   */
  match?: GrpcMetadataMatchMethod;
}

/**
 * @public
 * <p>An object that represents the criteria for determining a request match.</p>
 */
export interface GrpcGatewayRouteMatch {
  /**
   * @public
   * <p>The fully qualified domain name for the service to match from the request.</p>
   */
  serviceName?: string;

  /**
   * @public
   * <p>The gateway route host name to be matched on.</p>
   */
  hostname?: GatewayRouteHostnameMatch;

  /**
   * @public
   * <p>The gateway route metadata to be matched on.</p>
   */
  metadata?: GrpcGatewayRouteMetadata[];

  /**
   * @public
   * <p>The port number to match from the request.</p>
   */
  port?: number;
}

/**
 * @public
 * <p>An object that represents a gRPC gateway route.</p>
 */
export interface GrpcGatewayRoute {
  /**
   * @public
   * <p>An object that represents the criteria for determining a request match.</p>
   */
  match: GrpcGatewayRouteMatch | undefined;

  /**
   * @public
   * <p>An object that represents the action to take if a match is determined.</p>
   */
  action: GrpcGatewayRouteAction | undefined;
}

/**
 * @public
 * <p>An object that represents the path to rewrite.</p>
 */
export interface HttpGatewayRoutePathRewrite {
  /**
   * @public
   * <p>The exact path to rewrite.</p>
   */
  exact?: string;
}

/**
 * @public
 * <p>An object representing the beginning characters of the route to rewrite.</p>
 */
export interface HttpGatewayRoutePrefixRewrite {
  /**
   * @public
   * <p>The default prefix used to replace the incoming route prefix when rewritten.</p>
   */
  defaultPrefix?: DefaultGatewayRouteRewrite | string;

  /**
   * @public
   * <p>The value used to replace the incoming route prefix when rewritten.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>An object representing the gateway route to rewrite.</p>
 */
export interface HttpGatewayRouteRewrite {
  /**
   * @public
   * <p>The specified beginning characters to rewrite.</p>
   */
  prefix?: HttpGatewayRoutePrefixRewrite;

  /**
   * @public
   * <p>The path to rewrite.</p>
   */
  path?: HttpGatewayRoutePathRewrite;

  /**
   * @public
   * <p>The host name to rewrite.</p>
   */
  hostname?: GatewayRouteHostnameRewrite;
}

/**
 * @public
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface HttpGatewayRouteAction {
  /**
   * @public
   * <p>An object that represents the target that traffic is routed to when a request matches the gateway route.</p>
   */
  target: GatewayRouteTarget | undefined;

  /**
   * @public
   * <p>The gateway route action to rewrite.</p>
   */
  rewrite?: HttpGatewayRouteRewrite;
}

/**
 * @public
 * <p>An object that represents the method and value to match with the header value sent in a
 *          request. Specify one match method.</p>
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
   * @public
   * <p>The value sent by the client must match the specified value exactly.</p>
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
   * @public
   * <p>The value sent by the client must include the specified characters.</p>
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
   * @public
   * <p>An object that represents the range of values to match on.</p>
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
   * @public
   * <p>The value sent by the client must begin with the specified characters.</p>
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
   * @public
   * <p>The value sent by the client must end with the specified characters.</p>
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

  export interface Visitor<T> {
    exact: (value: string) => T;
    regex: (value: string) => T;
    range: (value: MatchRange) => T;
    prefix: (value: string) => T;
    suffix: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: HeaderMatchMethod, visitor: Visitor<T>): T => {
    if (value.exact !== undefined) return visitor.exact(value.exact);
    if (value.regex !== undefined) return visitor.regex(value.regex);
    if (value.range !== undefined) return visitor.range(value.range);
    if (value.prefix !== undefined) return visitor.prefix(value.prefix);
    if (value.suffix !== undefined) return visitor.suffix(value.suffix);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>An object that represents the HTTP header in the gateway route.</p>
 */
export interface HttpGatewayRouteHeader {
  /**
   * @public
   * <p>A name for the HTTP header in the gateway route that will be matched on.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Specify <code>True</code> to match anything except the match criteria. The default value
   *          is <code>False</code>.</p>
   */
  invert?: boolean;

  /**
   * @public
   * <p>An object that represents the method and value to match with the header value sent in a
   *          request. Specify one match method.</p>
   */
  match?: HeaderMatchMethod;
}

/**
 * @public
 * @enum
 */
export const HttpMethod = {
  CONNECT: "CONNECT",
  DELETE: "DELETE",
  GET: "GET",
  HEAD: "HEAD",
  OPTIONS: "OPTIONS",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
  TRACE: "TRACE",
} as const;

/**
 * @public
 */
export type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod];

/**
 * @public
 * <p>An object representing the path to match in the request.</p>
 */
export interface HttpPathMatch {
  /**
   * @public
   * <p>The exact path to match on.</p>
   */
  exact?: string;

  /**
   * @public
   * <p>The regex used to match the path.</p>
   */
  regex?: string;
}

/**
 * @public
 * <p>An object representing the query parameter to match.</p>
 */
export interface QueryParameterMatch {
  /**
   * @public
   * <p>The exact query parameter to match on.</p>
   */
  exact?: string;
}

/**
 * @public
 * <p>An object that represents the query parameter in the request.</p>
 */
export interface HttpQueryParameter {
  /**
   * @public
   * <p>A name for the query parameter that will be matched on.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The query parameter to match on.</p>
   */
  match?: QueryParameterMatch;
}

/**
 * @public
 * <p>An object that represents the criteria for determining a request match.</p>
 */
export interface HttpGatewayRouteMatch {
  /**
   * @public
   * <p>Specifies the path to match requests with. This parameter must always start with
   *             <code>/</code>, which by itself matches all requests to the virtual service name. You
   *          can also match for path-based routing of requests. For example, if your virtual service
   *          name is <code>my-service.local</code> and you want the route to match requests to
   *             <code>my-service.local/metrics</code>, your prefix should be
   *          <code>/metrics</code>.</p>
   */
  prefix?: string;

  /**
   * @public
   * <p>The path to match on.</p>
   */
  path?: HttpPathMatch;

  /**
   * @public
   * <p>The query parameter to match on.</p>
   */
  queryParameters?: HttpQueryParameter[];

  /**
   * @public
   * <p>The method to match on.</p>
   */
  method?: HttpMethod | string;

  /**
   * @public
   * <p>The host name to match on.</p>
   */
  hostname?: GatewayRouteHostnameMatch;

  /**
   * @public
   * <p>The client request headers to match on.</p>
   */
  headers?: HttpGatewayRouteHeader[];

  /**
   * @public
   * <p>The port number to match on.</p>
   */
  port?: number;
}

/**
 * @public
 * <p>An object that represents an HTTP gateway route.</p>
 */
export interface HttpGatewayRoute {
  /**
   * @public
   * <p>An object that represents the criteria for determining a request match.</p>
   */
  match: HttpGatewayRouteMatch | undefined;

  /**
   * @public
   * <p>An object that represents the action to take if a match is determined.</p>
   */
  action: HttpGatewayRouteAction | undefined;
}

/**
 * @public
 * <p>An object that represents a gateway route specification. Specify one gateway route
 *          type.</p>
 */
export interface GatewayRouteSpec {
  /**
   * @public
   * <p>The ordering of the gateway routes spec.</p>
   */
  priority?: number;

  /**
   * @public
   * <p>An object that represents the specification of an HTTP gateway route.</p>
   */
  httpRoute?: HttpGatewayRoute;

  /**
   * @public
   * <p>An object that represents the specification of an HTTP/2 gateway route.</p>
   */
  http2Route?: HttpGatewayRoute;

  /**
   * @public
   * <p>An object that represents the specification of a gRPC gateway route.</p>
   */
  grpcRoute?: GrpcGatewayRoute;
}

/**
 * @public
 */
export interface CreateGatewayRouteInput {
  /**
   * @public
   * <p>The name to use for the gateway route.</p>
   */
  gatewayRouteName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh to create the gateway route in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual gateway to associate the gateway route with. If the virtual
   *          gateway is in a shared mesh, then you must be the owner of the virtual gateway
   *          resource.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * @public
   * <p>The gateway route specification to apply.</p>
   */
  spec: GatewayRouteSpec | undefined;

  /**
   * @public
   * <p>Optional metadata that you can apply to the gateway route to assist with categorization
   *          and organization. Each tag consists of a key and an optional value, both of which you
   *          define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 * @enum
 */
export const GatewayRouteStatusCode = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type GatewayRouteStatusCode = (typeof GatewayRouteStatusCode)[keyof typeof GatewayRouteStatusCode];

/**
 * @public
 * <p>An object that represents the current status of a gateway route.</p>
 */
export interface GatewayRouteStatus {
  /**
   * @public
   * <p>The current status for the gateway route.</p>
   */
  status: GatewayRouteStatusCode | string | undefined;
}

/**
 * @public
 * <p>An object that represents a gateway route returned by a describe operation.</p>
 */
export interface GatewayRouteData {
  /**
   * @public
   * <p>The name of the service mesh that the resource resides in. </p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the gateway route.</p>
   */
  gatewayRouteName: string | undefined;

  /**
   * @public
   * <p>The virtual gateway that the gateway route is associated with.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * @public
   * <p>The specifications of the gateway route.</p>
   */
  spec: GatewayRouteSpec | undefined;

  /**
   * @public
   * <p>An object that represents metadata for a resource.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * @public
   * <p>The status of the gateway route.</p>
   */
  status: GatewayRouteStatus | undefined;
}

/**
 * @public
 */
export interface CreateGatewayRouteOutput {
  /**
   * @public
   * <p>The full description of your gateway route following the create call.</p>
   */
  gatewayRoute: GatewayRouteData | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRouteInput {
  /**
   * @public
   * <p>The name of the gateway route to delete.</p>
   */
  gatewayRouteName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh to delete the gateway route from.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual gateway to delete the route from.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 */
export interface DeleteGatewayRouteOutput {
  /**
   * @public
   * <p>The gateway route that was deleted.</p>
   */
  gatewayRoute: GatewayRouteData | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayRouteInput {
  /**
   * @public
   * <p>The name of the gateway route to describe.</p>
   */
  gatewayRouteName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh that the gateway route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual gateway that the gateway route is associated with.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 */
export interface DescribeGatewayRouteOutput {
  /**
   * @public
   * <p>The full description of your gateway route.</p>
   */
  gatewayRoute: GatewayRouteData | undefined;
}

/**
 * @public
 */
export interface ListGatewayRoutesInput {
  /**
   * @public
   * <p>The name of the service mesh to list gateway routes in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual gateway to list gateway routes in.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListGatewayRoutes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results returned by <code>ListGatewayRoutes</code> in paginated
   *          output. When you use this parameter, <code>ListGatewayRoutes</code> returns only
   *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
   *          element. You can see the remaining results of the initial request by sending another
   *             <code>ListGatewayRoutes</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If you don't use this
   *          parameter, <code>ListGatewayRoutes</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 * <p>An object that represents a gateway route returned by a list operation.</p>
 */
export interface GatewayRouteRef {
  /**
   * @public
   * <p>The name of the service mesh that the resource resides in. </p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the gateway route.</p>
   */
  gatewayRouteName: string | undefined;

  /**
   * @public
   * <p>The virtual gateway that the gateway route is associated with.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) for the gateway route.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;

  /**
   * @public
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListGatewayRoutesOutput {
  /**
   * @public
   * <p>The list of existing gateway routes for the specified service mesh and virtual
   *          gateway.</p>
   */
  gatewayRoutes: GatewayRouteRef[] | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value to include in a future <code>ListGatewayRoutes</code>
   *          request. When the results of a <code>ListGatewayRoutes</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateGatewayRouteInput {
  /**
   * @public
   * <p>The name of the gateway route to update.</p>
   */
  gatewayRouteName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh that the gateway route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual gateway that the gateway route is associated with.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * @public
   * <p>The new gateway route specification to apply. This overwrites the existing data.</p>
   */
  spec: GatewayRouteSpec | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 */
export interface UpdateGatewayRouteOutput {
  /**
   * @public
   * <p>A full description of the gateway route that was updated.</p>
   */
  gatewayRoute: GatewayRouteData | undefined;
}

/**
 * @public
 */
export interface ListVirtualGatewaysInput {
  /**
   * @public
   * <p>The name of the service mesh to list virtual gateways in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualGateways</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results returned by <code>ListVirtualGateways</code> in paginated
   *          output. When you use this parameter, <code>ListVirtualGateways</code> returns only
   *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
   *          element. You can see the remaining results of the initial request by sending another
   *             <code>ListVirtualGateways</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If you don't use this
   *          parameter, <code>ListVirtualGateways</code> returns up to 100 results and
   *          a <code>nextToken</code> value if applicable.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 * <p>An object that represents a virtual gateway returned by a list operation.</p>
 */
export interface VirtualGatewayRef {
  /**
   * @public
   * <p>The name of the service mesh that the resource resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the resource.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) for the resource.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;

  /**
   * @public
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListVirtualGatewaysOutput {
  /**
   * @public
   * <p>The list of existing virtual gateways for the specified service mesh.</p>
   */
  virtualGateways: VirtualGatewayRef[] | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualGateways</code>
   *          request. When the results of a <code>ListVirtualGateways</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateVirtualGatewayInput {
  /**
   * @public
   * <p>The name of the virtual gateway to update.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh that the virtual gateway resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The new virtual gateway specification to apply. This overwrites the existing
   *          data.</p>
   */
  spec: VirtualGatewaySpec | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 */
export interface UpdateVirtualGatewayOutput {
  /**
   * @public
   * <p>A full description of the virtual gateway that was updated.</p>
   */
  virtualGateway: VirtualGatewayData | undefined;
}

/**
 * @public
 * <p>An object that represents a local file certificate.
 *          The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
 */
export interface ListenerTlsFileCertificate {
  /**
   * @public
   * <p>The certificate chain for the certificate.</p>
   */
  certificateChain: string | undefined;

  /**
   * @public
   * <p>The private key for a certificate stored on the file system of the virtual node that the
   *          proxy is running on.</p>
   */
  privateKey: string | undefined;
}

/**
 * @public
 * <p>An object that represents the listener's Secret Discovery Service certificate. The proxy
 *          must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh
 *          <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS
 *             documentation</a> for more info.</p>
 */
export interface ListenerTlsSdsCertificate {
  /**
   * @public
   * <p>A reference to an object that represents the name of the secret requested from the
   *          Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or
   *          certificate chain.</p>
   */
  secretName: string | undefined;
}

/**
 * @public
 * <p>An object that represents the client's certificate.</p>
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
   * @public
   * <p>An object that represents a local file certificate. The certificate must meet specific
   *          requirements and you must have proxy authorization enabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">Transport Layer Security (TLS)</a>.</p>
   */
  export interface FileMember {
    file: ListenerTlsFileCertificate;
    sds?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A reference to an object that represents a client's TLS Secret Discovery Service
   *          certificate.</p>
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

  export interface Visitor<T> {
    file: (value: ListenerTlsFileCertificate) => T;
    sds: (value: ListenerTlsSdsCertificate) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ClientTlsCertificate, visitor: Visitor<T>): T => {
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager
 *          certificate.</p>
 */
export interface TlsValidationContextAcmTrust {
  /**
   * @public
   * <p>One or more ACM Amazon Resource Name (ARN)s.</p>
   */
  certificateAuthorityArns: string[] | undefined;
}

/**
 * @public
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
 */
export interface TlsValidationContextFileTrust {
  /**
   * @public
   * <p>The certificate trust chain for a certificate stored on the file system of the virtual
   *          node that the proxy is running on.</p>
   */
  certificateChain: string | undefined;
}

/**
 * @public
 * <p>An object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust. The
 *          proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh
 *          <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS
 *             documentation</a> for more info.</p>
 */
export interface TlsValidationContextSdsTrust {
  /**
   * @public
   * <p>A reference to an object that represents the name of the secret for a Transport Layer Security (TLS) Secret
   *          Discovery Service validation context trust.</p>
   */
  secretName: string | undefined;
}

/**
 * @public
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust.</p>
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
   * @public
   * <p>A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.</p>
   */
  export interface AcmMember {
    acm: TlsValidationContextAcmTrust;
    file?: never;
    sds?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
   */
  export interface FileMember {
    acm?: never;
    file: TlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A reference to an object that represents a Transport Layer Security (TLS) Secret Discovery Service validation
   *          context trust.</p>
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

  export interface Visitor<T> {
    acm: (value: TlsValidationContextAcmTrust) => T;
    file: (value: TlsValidationContextFileTrust) => T;
    sds: (value: TlsValidationContextSdsTrust) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TlsValidationContextTrust, visitor: Visitor<T>): T => {
    if (value.acm !== undefined) return visitor.acm(value.acm);
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>An object that represents how the proxy will validate its peer during Transport Layer Security (TLS)
 *          negotiation.</p>
 */
export interface TlsValidationContext {
  /**
   * @public
   * <p>A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS)
   *          certificate.</p>
   */
  trust: TlsValidationContextTrust | undefined;

  /**
   * @public
   * <p>A reference to an object that represents the SANs for a Transport Layer Security (TLS) validation context. If you
   *          don't specify SANs on the <i>terminating</i> mesh endpoint, the Envoy proxy
   *          for that node doesn't verify the SAN on a peer client certificate. If you don't specify
   *          SANs on the <i>originating</i> mesh endpoint, the SAN on the certificate
   *          provided by the terminating endpoint must match the mesh endpoint service discovery
   *          configuration. Since SPIRE vended certificates have a SPIFFE ID as a name, you must set the
   *          SAN since the name doesn't match the service discovery name.</p>
   */
  subjectAlternativeNames?: SubjectAlternativeNames;
}

/**
 * @public
 * <p>A reference to an object that represents a Transport Layer Security (TLS) client policy.</p>
 */
export interface ClientPolicyTls {
  /**
   * @public
   * <p>Whether the policy is enforced. The default is <code>True</code>, if a value isn't specified.</p>
   */
  enforce?: boolean;

  /**
   * @public
   * <p>One or more ports that the policy is enforced for.</p>
   */
  ports?: number[];

  /**
   * @public
   * <p>A reference to an object that represents a client's TLS certificate.</p>
   */
  certificate?: ClientTlsCertificate;

  /**
   * @public
   * <p>A reference to an object that represents a TLS validation context.</p>
   */
  validation: TlsValidationContext | undefined;
}

/**
 * @public
 * <p>An object that represents a client policy.</p>
 */
export interface ClientPolicy {
  /**
   * @public
   * <p>A reference to an object that represents a Transport Layer Security (TLS) client policy.</p>
   */
  tls?: ClientPolicyTls;
}

/**
 * @public
 * <p>An object that represents the default properties for a backend.</p>
 */
export interface BackendDefaults {
  /**
   * @public
   * <p>A reference to an object that represents a client policy.</p>
   */
  clientPolicy?: ClientPolicy;
}

/**
 * @public
 * <p>An object that represents a virtual service backend for a virtual node.</p>
 */
export interface VirtualServiceBackend {
  /**
   * @public
   * <p>The name of the virtual service that is acting as a virtual node backend.</p>
   */
  virtualServiceName: string | undefined;

  /**
   * @public
   * <p>A reference to an object that represents the client policy for a backend.</p>
   */
  clientPolicy?: ClientPolicy;
}

/**
 * @public
 * <p>An object that represents the backends that a virtual node is expected to send outbound
 *          traffic to.</p>
 */
export type Backend = Backend.VirtualServiceMember | Backend.$UnknownMember;

/**
 * @public
 */
export namespace Backend {
  /**
   * @public
   * <p>Specifies a virtual service to use as a backend.  </p>
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

  export interface Visitor<T> {
    virtualService: (value: VirtualServiceBackend) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Backend, visitor: Visitor<T>): T => {
    if (value.virtualService !== undefined) return visitor.virtualService(value.virtualService);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualNodeGrpcConnectionPool {
  /**
   * @public
   * <p>Maximum number of inflight requests Envoy can concurrently support across hosts in
   *          upstream cluster.</p>
   */
  maxRequests: number | undefined;
}

/**
 * @public
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualNodeHttpConnectionPool {
  /**
   * @public
   * <p>Maximum number of outbound TCP connections Envoy can establish concurrently with all
   *          hosts in upstream cluster.</p>
   */
  maxConnections: number | undefined;

  /**
   * @public
   * <p>Number of overflowing requests after <code>max_connections</code> Envoy will queue to
   *          upstream cluster.</p>
   */
  maxPendingRequests?: number;
}

/**
 * @public
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualNodeHttp2ConnectionPool {
  /**
   * @public
   * <p>Maximum number of inflight requests Envoy can concurrently support across hosts in
   *          upstream cluster.</p>
   */
  maxRequests: number | undefined;
}

/**
 * @public
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualNodeTcpConnectionPool {
  /**
   * @public
   * <p>Maximum number of outbound TCP connections Envoy can establish concurrently with all
   *          hosts in upstream cluster.</p>
   */
  maxConnections: number | undefined;
}

/**
 * @public
 * <p>An object that represents the type of virtual node connection pool.</p>
 *          <p>Only one protocol is used at a time and should be the same protocol as the one chosen
 *          under port mapping.</p>
 *          <p>If not present the default value for <code>maxPendingRequests</code> is
 *             <code>2147483647</code>.</p>
 *          <p/>
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
   * @public
   * <p>An object that represents a type of connection pool.</p>
   */
  export interface TcpMember {
    tcp: VirtualNodeTcpConnectionPool;
    http?: never;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An object that represents a type of connection pool.</p>
   */
  export interface HttpMember {
    tcp?: never;
    http: VirtualNodeHttpConnectionPool;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An object that represents a type of connection pool.</p>
   */
  export interface Http2Member {
    tcp?: never;
    http?: never;
    http2: VirtualNodeHttp2ConnectionPool;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An object that represents a type of connection pool.</p>
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

  export interface Visitor<T> {
    tcp: (value: VirtualNodeTcpConnectionPool) => T;
    http: (value: VirtualNodeHttpConnectionPool) => T;
    http2: (value: VirtualNodeHttp2ConnectionPool) => T;
    grpc: (value: VirtualNodeGrpcConnectionPool) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: VirtualNodeConnectionPool, visitor: Visitor<T>): T => {
    if (value.tcp !== undefined) return visitor.tcp(value.tcp);
    if (value.http !== undefined) return visitor.http(value.http);
    if (value.http2 !== undefined) return visitor.http2(value.http2);
    if (value.grpc !== undefined) return visitor.grpc(value.grpc);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const PortProtocol = {
  GRPC: "grpc",
  HTTP: "http",
  HTTP2: "http2",
  TCP: "tcp",
} as const;

/**
 * @public
 */
export type PortProtocol = (typeof PortProtocol)[keyof typeof PortProtocol];

/**
 * @public
 * <p>An object that represents the health check policy for a virtual node's listener.</p>
 */
export interface HealthCheckPolicy {
  /**
   * @public
   * <p>The amount of time to wait when receiving a response from the health check, in
   *          milliseconds.</p>
   */
  timeoutMillis: number | undefined;

  /**
   * @public
   * <p>The time period in milliseconds between each health check execution.</p>
   */
  intervalMillis: number | undefined;

  /**
   * @public
   * <p>The protocol for the health check request. If you specify <code>grpc</code>, then your
   *          service must conform to the <a href="https://github.com/grpc/grpc/blob/master/doc/health-checking.md">GRPC Health
   *             Checking Protocol</a>.</p>
   */
  protocol: PortProtocol | string | undefined;

  /**
   * @public
   * <p>The destination port for the health check request. This port must match the port defined
   *          in the <a>PortMapping</a> for the listener.</p>
   */
  port?: number;

  /**
   * @public
   * <p>The destination path for the health check request. This value is only used if the
   *          specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.</p>
   */
  path?: string;

  /**
   * @public
   * <p>The number of consecutive successful health checks that must occur before declaring
   *          listener healthy.</p>
   */
  healthyThreshold: number | undefined;

  /**
   * @public
   * <p>The number of consecutive failed health checks that must occur before declaring a
   *          virtual node unhealthy. </p>
   */
  unhealthyThreshold: number | undefined;
}

/**
 * @public
 * @enum
 */
export const DurationUnit = {
  MS: "ms",
  S: "s",
} as const;

/**
 * @public
 */
export type DurationUnit = (typeof DurationUnit)[keyof typeof DurationUnit];

/**
 * @public
 * <p>An object that represents a duration of time.</p>
 */
export interface Duration {
  /**
   * @public
   * <p>A number of time units.</p>
   */
  value?: number;

  /**
   * @public
   * <p>A unit of time.</p>
   */
  unit?: DurationUnit | string;
}

/**
 * @public
 * <p>An object that represents the outlier detection for a virtual node's listener.</p>
 */
export interface OutlierDetection {
  /**
   * @public
   * <p>Number of consecutive <code>5xx</code> errors required for ejection. </p>
   */
  maxServerErrors: number | undefined;

  /**
   * @public
   * <p>The time interval between ejection sweep analysis.</p>
   */
  interval: Duration | undefined;

  /**
   * @public
   * <p>The base amount of time for which a host is ejected.</p>
   */
  baseEjectionDuration: Duration | undefined;

  /**
   * @public
   * <p>Maximum percentage of hosts in load balancing pool for upstream service that can be
   *          ejected. Will eject at least one host regardless of the value.</p>
   */
  maxEjectionPercent: number | undefined;
}

/**
 * @public
 * <p>An object that represents a port mapping.</p>
 */
export interface PortMapping {
  /**
   * @public
   * <p>The port used for the port mapping.</p>
   */
  port: number | undefined;

  /**
   * @public
   * <p>The protocol used for the port mapping. Specify one protocol.</p>
   */
  protocol: PortProtocol | string | undefined;
}

/**
 * @public
 * <p>An object that represents types of timeouts. </p>
 */
export interface GrpcTimeout {
  /**
   * @public
   * <p>An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh
   *                                   resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15
   *                                   seconds for the source and destination virtual node and the route.</p>
   */
  perRequest?: Duration;

  /**
   * @public
   * <p>An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.</p>
   */
  idle?: Duration;
}

/**
 * @public
 * <p>An object that represents types of timeouts. </p>
 */
export interface HttpTimeout {
  /**
   * @public
   * <p>An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh
   *                                   resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15
   *                                   seconds for the source and destination virtual node and the route.</p>
   */
  perRequest?: Duration;

  /**
   * @public
   * <p>An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.</p>
   */
  idle?: Duration;
}

/**
 * @public
 * <p>An object that represents types of timeouts. </p>
 */
export interface TcpTimeout {
  /**
   * @public
   * <p>An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.</p>
   */
  idle?: Duration;
}

/**
 * @public
 * <p>An object that represents timeouts for different protocols.</p>
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
   * @public
   * <p>An object that represents types of timeouts. </p>
   */
  export interface TcpMember {
    tcp: TcpTimeout;
    http?: never;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An object that represents types of timeouts. </p>
   */
  export interface HttpMember {
    tcp?: never;
    http: HttpTimeout;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An object that represents types of timeouts. </p>
   */
  export interface Http2Member {
    tcp?: never;
    http?: never;
    http2: HttpTimeout;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An object that represents types of timeouts. </p>
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

  export interface Visitor<T> {
    tcp: (value: TcpTimeout) => T;
    http: (value: HttpTimeout) => T;
    http2: (value: HttpTimeout) => T;
    grpc: (value: GrpcTimeout) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ListenerTimeout, visitor: Visitor<T>): T => {
    if (value.tcp !== undefined) return visitor.tcp(value.tcp);
    if (value.http !== undefined) return visitor.http(value.http);
    if (value.http2 !== undefined) return visitor.http2(value.http2);
    if (value.grpc !== undefined) return visitor.grpc(value.grpc);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>An object that represents an Certificate Manager certificate.</p>
 */
export interface ListenerTlsAcmCertificate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
   */
  certificateArn: string | undefined;
}

/**
 * @public
 * <p>An object that represents a listener's Transport Layer Security (TLS) certificate.</p>
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
   * @public
   * <p>A reference to an object that represents an Certificate Manager certificate.</p>
   */
  export interface AcmMember {
    acm: ListenerTlsAcmCertificate;
    file?: never;
    sds?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A reference to an object that represents a local file certificate.</p>
   */
  export interface FileMember {
    acm?: never;
    file: ListenerTlsFileCertificate;
    sds?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A reference to an object that represents a listener's Secret Discovery Service
   *          certificate.</p>
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

  export interface Visitor<T> {
    acm: (value: ListenerTlsAcmCertificate) => T;
    file: (value: ListenerTlsFileCertificate) => T;
    sds: (value: ListenerTlsSdsCertificate) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ListenerTlsCertificate, visitor: Visitor<T>): T => {
    if (value.acm !== undefined) return visitor.acm(value.acm);
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ListenerTlsMode = {
  DISABLED: "DISABLED",
  PERMISSIVE: "PERMISSIVE",
  STRICT: "STRICT",
} as const;

/**
 * @public
 */
export type ListenerTlsMode = (typeof ListenerTlsMode)[keyof typeof ListenerTlsMode];

/**
 * @public
 * <p>An object that represents a listener's Transport Layer Security (TLS) validation context trust.</p>
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
   * @public
   * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
   */
  export interface FileMember {
    file: TlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A reference to an object that represents a listener's Transport Layer Security (TLS) Secret Discovery Service
   *          validation context trust.</p>
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

  export interface Visitor<T> {
    file: (value: TlsValidationContextFileTrust) => T;
    sds: (value: TlsValidationContextSdsTrust) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ListenerTlsValidationContextTrust, visitor: Visitor<T>): T => {
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>An object that represents a listener's Transport Layer Security (TLS) validation context.</p>
 */
export interface ListenerTlsValidationContext {
  /**
   * @public
   * <p>A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS)
   *          certificate.</p>
   */
  trust: ListenerTlsValidationContextTrust | undefined;

  /**
   * @public
   * <p>A reference to an object that represents the SANs for a listener's Transport Layer Security (TLS) validation
   *          context.</p>
   */
  subjectAlternativeNames?: SubjectAlternativeNames;
}

/**
 * @public
 * <p>An object that represents the Transport Layer Security (TLS) properties for a listener.</p>
 */
export interface ListenerTls {
  /**
   * @public
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
   */
  mode: ListenerTlsMode | string | undefined;

  /**
   * @public
   * <p>A reference to an object that represents a listener's Transport Layer Security (TLS) certificate.</p>
   */
  certificate: ListenerTlsCertificate | undefined;

  /**
   * @public
   * <p>A reference to an object that represents a listener's Transport Layer Security (TLS) validation context.</p>
   */
  validation?: ListenerTlsValidationContext;
}

/**
 * @public
 * <p>An object that represents a listener for a virtual node.</p>
 */
export interface Listener {
  /**
   * @public
   * <p>The port mapping information for the listener.</p>
   */
  portMapping: PortMapping | undefined;

  /**
   * @public
   * <p>A reference to an object that represents the Transport Layer Security (TLS) properties for a listener.</p>
   */
  tls?: ListenerTls;

  /**
   * @public
   * <p>The health check information for the listener.</p>
   */
  healthCheck?: HealthCheckPolicy;

  /**
   * @public
   * <p>An object that represents timeouts for different protocols.</p>
   */
  timeout?: ListenerTimeout;

  /**
   * @public
   * <p>The outlier detection information for the listener.</p>
   */
  outlierDetection?: OutlierDetection;

  /**
   * @public
   * <p>The connection pool information for the listener.</p>
   */
  connectionPool?: VirtualNodeConnectionPool;
}

/**
 * @public
 * <p>An object that represents the logging information for a virtual node.</p>
 */
export interface Logging {
  /**
   * @public
   * <p>The access log configuration for a virtual node.</p>
   */
  accessLog?: AccessLog;
}

/**
 * @public
 * <p>An object that represents the Cloud Map attribute information for your
 *          virtual node.</p>
 *          <note>
 *             <p>Cloud Map is not available in the eu-south-1 Region.</p>
 *          </note>
 */
export interface AwsCloudMapInstanceAttribute {
  /**
   * @public
   * <p>The name of an Cloud Map service instance attribute key. Any Cloud Map service instance that contains the specified key and value is
   *          returned.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The value of an Cloud Map service instance attribute key. Any Cloud Map service instance that contains the specified key and value is
   *          returned.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>An object that represents the Cloud Map service discovery information for
 *          your virtual node.</p>
 *          <note>
 *             <p>Cloud Map is not available in the eu-south-1 Region.</p>
 *          </note>
 */
export interface AwsCloudMapServiceDiscovery {
  /**
   * @public
   * <p>The name of the Cloud Map namespace to use.</p>
   */
  namespaceName: string | undefined;

  /**
   * @public
   * <p>The name of the Cloud Map service to use.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>A string map that contains attributes with values that you can use to filter instances
   *          by any custom attribute that you specified when you registered the instance. Only instances
   *          that match all of the specified key/value pairs will be returned.</p>
   */
  attributes?: AwsCloudMapInstanceAttribute[];

  /**
   * @public
   * <p>The preferred IP version that this virtual node uses. Setting the IP preference on the
   *          virtual node only overrides the IP preference set for the mesh on this specific
   *          node.</p>
   */
  ipPreference?: IpPreference | string;
}

/**
 * @public
 * @enum
 */
export const DnsResponseType = {
  ENDPOINTS: "ENDPOINTS",
  LOADBALANCER: "LOADBALANCER",
} as const;

/**
 * @public
 */
export type DnsResponseType = (typeof DnsResponseType)[keyof typeof DnsResponseType];

/**
 * @public
 * <p>An object that represents the DNS service discovery information for your virtual
 *          node.</p>
 */
export interface DnsServiceDiscovery {
  /**
   * @public
   * <p>Specifies the DNS service discovery hostname for the virtual node. </p>
   */
  hostname: string | undefined;

  /**
   * @public
   * <p>Specifies the DNS response type for the virtual node.</p>
   */
  responseType?: DnsResponseType | string;

  /**
   * @public
   * <p>The preferred IP version that this virtual node uses. Setting the IP preference on the
   *          virtual node only overrides the IP preference set for the mesh on this specific
   *          node.</p>
   */
  ipPreference?: IpPreference | string;
}

/**
 * @public
 * <p>An object that represents the service discovery information for a virtual node.</p>
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
   * @public
   * <p>Specifies the DNS information for the virtual node.</p>
   */
  export interface DnsMember {
    dns: DnsServiceDiscovery;
    awsCloudMap?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Specifies any Cloud Map information for the virtual node.</p>
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

  export interface Visitor<T> {
    dns: (value: DnsServiceDiscovery) => T;
    awsCloudMap: (value: AwsCloudMapServiceDiscovery) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ServiceDiscovery, visitor: Visitor<T>): T => {
    if (value.dns !== undefined) return visitor.dns(value.dns);
    if (value.awsCloudMap !== undefined) return visitor.awsCloudMap(value.awsCloudMap);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>An object that represents the specification of a virtual node.</p>
 */
export interface VirtualNodeSpec {
  /**
   * @public
   * <p>The service discovery information for the virtual node. If your virtual node does not
   *          expect ingress traffic, you can omit this parameter. If you specify a
   *          <code>listener</code>, then you must specify service discovery information.</p>
   */
  serviceDiscovery?: ServiceDiscovery;

  /**
   * @public
   * <p>The listener that the virtual node is expected to receive inbound traffic from. You can
   *          specify one listener.</p>
   */
  listeners?: Listener[];

  /**
   * @public
   * <p>The backends that the virtual node is expected to send outbound traffic to.</p>
   */
  backends?: Backend[];

  /**
   * @public
   * <p>A reference to an object that represents the defaults for backends.</p>
   */
  backendDefaults?: BackendDefaults;

  /**
   * @public
   * <p>The inbound and outbound access logging information for the virtual node.</p>
   */
  logging?: Logging;
}

/**
 * @public
 *
 */
export interface CreateVirtualNodeInput {
  /**
   * @public
   * <p>The name to use for the virtual node.</p>
   */
  virtualNodeName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh to create the virtual node in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The virtual node specification to apply.</p>
   */
  spec: VirtualNodeSpec | undefined;

  /**
   * @public
   * <p>Optional metadata that you can apply to the virtual node to assist with categorization
   *          and organization. Each tag consists of a key and an optional value, both of which you
   *          define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 * @enum
 */
export const VirtualNodeStatusCode = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type VirtualNodeStatusCode = (typeof VirtualNodeStatusCode)[keyof typeof VirtualNodeStatusCode];

/**
 * @public
 * <p>An object that represents the current status of the virtual node.</p>
 */
export interface VirtualNodeStatus {
  /**
   * @public
   * <p>The current status of the virtual node.</p>
   */
  status: VirtualNodeStatusCode | string | undefined;
}

/**
 * @public
 * <p>An object that represents a virtual node returned by a describe operation.</p>
 */
export interface VirtualNodeData {
  /**
   * @public
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual node.</p>
   */
  virtualNodeName: string | undefined;

  /**
   * @public
   * <p>The specifications of the virtual node.</p>
   */
  spec: VirtualNodeSpec | undefined;

  /**
   * @public
   * <p>The associated metadata for the virtual node.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * @public
   * <p>The current status for the virtual node.</p>
   */
  status: VirtualNodeStatus | undefined;
}

/**
 * @public
 *
 */
export interface CreateVirtualNodeOutput {
  /**
   * @public
   * <p>The full description of your virtual node following the create call.</p>
   */
  virtualNode: VirtualNodeData | undefined;
}

/**
 * @public
 * <p>Deletes a virtual node input.</p>
 */
export interface DeleteVirtualNodeInput {
  /**
   * @public
   * <p>The name of the virtual node to delete.</p>
   */
  virtualNodeName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh to delete the virtual node in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 *
 */
export interface DeleteVirtualNodeOutput {
  /**
   * @public
   * <p>The virtual node that was deleted.</p>
   */
  virtualNode: VirtualNodeData | undefined;
}

/**
 * @public
 *
 */
export interface DescribeVirtualNodeInput {
  /**
   * @public
   * <p>The name of the virtual node to describe.</p>
   */
  virtualNodeName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 *
 */
export interface DescribeVirtualNodeOutput {
  /**
   * @public
   * <p>The full description of your virtual node.</p>
   */
  virtualNode: VirtualNodeData | undefined;
}

/**
 * @public
 *
 */
export interface ListVirtualNodesInput {
  /**
   * @public
   * <p>The name of the service mesh to list virtual nodes in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualNodes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results returned by <code>ListVirtualNodes</code> in paginated
   *          output. When you use this parameter, <code>ListVirtualNodes</code> returns only
   *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
   *          element. You can see the remaining results of the initial request by sending another
   *             <code>ListVirtualNodes</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If you don't use this
   *          parameter, <code>ListVirtualNodes</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 * <p>An object that represents a virtual node returned by a list operation.</p>
 */
export interface VirtualNodeRef {
  /**
   * @public
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual node.</p>
   */
  virtualNodeName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) for the virtual node.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;

  /**
   * @public
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 *
 */
export interface ListVirtualNodesOutput {
  /**
   * @public
   * <p>The list of existing virtual nodes for the specified service mesh.</p>
   */
  virtualNodes: VirtualNodeRef[] | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualNodes</code>
   *          request. When the results of a <code>ListVirtualNodes</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 *
 */
export interface UpdateVirtualNodeInput {
  /**
   * @public
   * <p>The name of the virtual node to update.</p>
   */
  virtualNodeName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The new virtual node specification to apply. This overwrites the existing data.</p>
   */
  spec: VirtualNodeSpec | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 *
 */
export interface UpdateVirtualNodeOutput {
  /**
   * @public
   * <p>A full description of the virtual node that was updated.</p>
   */
  virtualNode: VirtualNodeData | undefined;
}

/**
 * @public
 * <p>An object that represents a virtual router listener.</p>
 */
export interface VirtualRouterListener {
  /**
   * @public
   * <p>An object that represents a port mapping.</p>
   */
  portMapping: PortMapping | undefined;
}

/**
 * @public
 * <p>An object that represents the specification of a virtual router.</p>
 */
export interface VirtualRouterSpec {
  /**
   * @public
   * <p>The listeners that the virtual router is expected to receive inbound traffic from. You
   *          can specify one listener.</p>
   */
  listeners?: VirtualRouterListener[];
}

/**
 * @public
 *
 */
export interface CreateVirtualRouterInput {
  /**
   * @public
   * <p>The name to use for the virtual router.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh to create the virtual router in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The virtual router specification to apply.</p>
   */
  spec: VirtualRouterSpec | undefined;

  /**
   * @public
   * <p>Optional metadata that you can apply to the virtual router to assist with categorization
   *          and organization. Each tag consists of a key and an optional value, both of which you
   *          define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 * @enum
 */
export const VirtualRouterStatusCode = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type VirtualRouterStatusCode = (typeof VirtualRouterStatusCode)[keyof typeof VirtualRouterStatusCode];

/**
 * @public
 * <p>An object that represents the status of a virtual router. </p>
 */
export interface VirtualRouterStatus {
  /**
   * @public
   * <p>The current status of the virtual router.</p>
   */
  status: VirtualRouterStatusCode | string | undefined;
}

/**
 * @public
 * <p>An object that represents a virtual router returned by a describe operation.</p>
 */
export interface VirtualRouterData {
  /**
   * @public
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual router.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * @public
   * <p>The specifications of the virtual router.</p>
   */
  spec: VirtualRouterSpec | undefined;

  /**
   * @public
   * <p>The associated metadata for the virtual router.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * @public
   * <p>The current status of the virtual router.</p>
   */
  status: VirtualRouterStatus | undefined;
}

/**
 * @public
 *
 */
export interface CreateVirtualRouterOutput {
  /**
   * @public
   * <p>The full description of your virtual router following the create call.</p>
   */
  virtualRouter: VirtualRouterData | undefined;
}

/**
 * @public
 *
 */
export interface DeleteVirtualRouterInput {
  /**
   * @public
   * <p>The name of the virtual router to delete.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh to delete the virtual router in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 *
 */
export interface DeleteVirtualRouterOutput {
  /**
   * @public
   * <p>The virtual router that was deleted.</p>
   */
  virtualRouter: VirtualRouterData | undefined;
}

/**
 * @public
 *
 */
export interface DescribeVirtualRouterInput {
  /**
   * @public
   * <p>The name of the virtual router to describe.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 *
 */
export interface DescribeVirtualRouterOutput {
  /**
   * @public
   * <p>The full description of your virtual router.</p>
   */
  virtualRouter: VirtualRouterData | undefined;
}

/**
 * @public
 *
 */
export interface ListVirtualRoutersInput {
  /**
   * @public
   * <p>The name of the service mesh to list virtual routers in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualRouters</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results returned by <code>ListVirtualRouters</code> in paginated
   *          output. When you use this parameter, <code>ListVirtualRouters</code> returns only
   *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
   *          element. You can see the remaining results of the initial request by sending another
   *             <code>ListVirtualRouters</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If you don't use this
   *          parameter, <code>ListVirtualRouters</code> returns up to 100 results and
   *          a <code>nextToken</code> value if applicable.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 * <p>An object that represents a virtual router returned by a list operation.</p>
 */
export interface VirtualRouterRef {
  /**
   * @public
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual router.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) for the virtual router.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;

  /**
   * @public
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 *
 */
export interface ListVirtualRoutersOutput {
  /**
   * @public
   * <p>The list of existing virtual routers for the specified service mesh.</p>
   */
  virtualRouters: VirtualRouterRef[] | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualRouters</code>
   *          request. When the results of a <code>ListVirtualRouters</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>An object that represents a target and its relative weight. Traffic is distributed
 *          across targets according to their relative weight. For example, a weighted target with a
 *          relative weight of 50 receives five times as much traffic as one with a relative weight of
 *          10. The total weight for all targets combined must be less than or equal to 100.</p>
 */
export interface WeightedTarget {
  /**
   * @public
   * <p>The virtual node to associate with the weighted target.</p>
   */
  virtualNode: string | undefined;

  /**
   * @public
   * <p>The relative weight of the weighted target.</p>
   */
  weight: number | undefined;

  /**
   * @public
   * <p>The targeted port of the weighted object.</p>
   */
  port?: number;
}

/**
 * @public
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface GrpcRouteAction {
  /**
   * @public
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   */
  weightedTargets: WeightedTarget[] | undefined;
}

/**
 * @public
 * <p>An object that represents the match method. Specify one of the match values.</p>
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
   * @public
   * <p>The value sent by the client must match the specified value exactly.</p>
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
   * @public
   * <p>The value sent by the client must include the specified characters.</p>
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
   * @public
   * <p>An object that represents the range of values to match on.</p>
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
   * @public
   * <p>The value sent by the client must begin with the specified characters.</p>
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
   * @public
   * <p>The value sent by the client must end with the specified characters.</p>
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

  export interface Visitor<T> {
    exact: (value: string) => T;
    regex: (value: string) => T;
    range: (value: MatchRange) => T;
    prefix: (value: string) => T;
    suffix: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: GrpcRouteMetadataMatchMethod, visitor: Visitor<T>): T => {
    if (value.exact !== undefined) return visitor.exact(value.exact);
    if (value.regex !== undefined) return visitor.regex(value.regex);
    if (value.range !== undefined) return visitor.range(value.range);
    if (value.prefix !== undefined) return visitor.prefix(value.prefix);
    if (value.suffix !== undefined) return visitor.suffix(value.suffix);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>An object that represents the match metadata for the route.</p>
 */
export interface GrpcRouteMetadata {
  /**
   * @public
   * <p>The name of the route.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Specify <code>True</code> to match anything except the match criteria. The default value is <code>False</code>.</p>
   */
  invert?: boolean;

  /**
   * @public
   * <p>An object that represents the data to match from the request.</p>
   */
  match?: GrpcRouteMetadataMatchMethod;
}

/**
 * @public
 * <p>An object that represents the criteria for determining a request match.</p>
 */
export interface GrpcRouteMatch {
  /**
   * @public
   * <p>The fully qualified domain name for the service to match from the request.</p>
   */
  serviceName?: string;

  /**
   * @public
   * <p>The method name to match from the request. If you specify a name, you must also specify
   *          a <code>serviceName</code>.</p>
   */
  methodName?: string;

  /**
   * @public
   * <p>An object that represents the data to match from the request.</p>
   */
  metadata?: GrpcRouteMetadata[];

  /**
   * @public
   * <p>The port number to match on.</p>
   */
  port?: number;
}

/**
 * @public
 * @enum
 */
export const GrpcRetryPolicyEvent = {
  CANCELLED: "cancelled",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  INTERNAL: "internal",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  UNAVAILABLE: "unavailable",
} as const;

/**
 * @public
 */
export type GrpcRetryPolicyEvent = (typeof GrpcRetryPolicyEvent)[keyof typeof GrpcRetryPolicyEvent];

/**
 * @public
 * @enum
 */
export const TcpRetryPolicyEvent = {
  CONNECTION_ERROR: "connection-error",
} as const;

/**
 * @public
 */
export type TcpRetryPolicyEvent = (typeof TcpRetryPolicyEvent)[keyof typeof TcpRetryPolicyEvent];

/**
 * @public
 * <p>An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>.
 *                Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the
 *                <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>.</p>
 */
export interface GrpcRetryPolicy {
  /**
   * @public
   * <p>The timeout for each retry attempt.</p>
   */
  perRetryTimeout: Duration | undefined;

  /**
   * @public
   * <p>The maximum number of retry attempts.</p>
   */
  maxRetries: number | undefined;

  /**
   * @public
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
   */
  httpRetryEvents?: string[];

  /**
   * @public
   * <p>Specify a valid value. The event occurs before any processing of a request has started and is encountered when the upstream is temporarily or permanently unavailable.</p>
   */
  tcpRetryEvents?: (TcpRetryPolicyEvent | string)[];

  /**
   * @public
   * <p>Specify at least one of the valid values.</p>
   */
  grpcRetryEvents?: (GrpcRetryPolicyEvent | string)[];
}

/**
 * @public
 * <p>An object that represents a gRPC route type.</p>
 */
export interface GrpcRoute {
  /**
   * @public
   * <p>An object that represents the action to take if a match is determined.</p>
   */
  action: GrpcRouteAction | undefined;

  /**
   * @public
   * <p>An object that represents the criteria for determining a request match.</p>
   */
  match: GrpcRouteMatch | undefined;

  /**
   * @public
   * <p>An object that represents a retry policy.</p>
   */
  retryPolicy?: GrpcRetryPolicy;

  /**
   * @public
   * <p>An object that represents types of timeouts. </p>
   */
  timeout?: GrpcTimeout;
}

/**
 * @public
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface HttpRouteAction {
  /**
   * @public
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   */
  weightedTargets: WeightedTarget[] | undefined;
}

/**
 * @public
 * <p>An object that represents the HTTP header in the request.</p>
 */
export interface HttpRouteHeader {
  /**
   * @public
   * <p>A name for the HTTP header in the client request that will be matched on.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Specify <code>True</code> to match anything except the match criteria. The default value is <code>False</code>.</p>
   */
  invert?: boolean;

  /**
   * @public
   * <p>The <code>HeaderMatchMethod</code> object.</p>
   */
  match?: HeaderMatchMethod;
}

/**
 * @public
 * @enum
 */
export const HttpScheme = {
  HTTP: "http",
  HTTPS: "https",
} as const;

/**
 * @public
 */
export type HttpScheme = (typeof HttpScheme)[keyof typeof HttpScheme];

/**
 * @public
 * <p>An object that represents the requirements for a route to match HTTP requests for a
 *          virtual router.</p>
 */
export interface HttpRouteMatch {
  /**
   * @public
   * <p>Specifies the path to match requests with. This parameter must always start with
   *             <code>/</code>, which by itself matches all requests to the virtual service name. You
   *          can also match for path-based routing of requests. For example, if your virtual service
   *          name is <code>my-service.local</code> and you want the route to match requests to
   *             <code>my-service.local/metrics</code>, your prefix should be
   *          <code>/metrics</code>.</p>
   */
  prefix?: string;

  /**
   * @public
   * <p>The client request path to match on.</p>
   */
  path?: HttpPathMatch;

  /**
   * @public
   * <p>The client request query parameters to match on.</p>
   */
  queryParameters?: HttpQueryParameter[];

  /**
   * @public
   * <p>The client request method to match on. Specify only one.</p>
   */
  method?: HttpMethod | string;

  /**
   * @public
   * <p>The client request scheme to match on. Specify only one. Applicable only for HTTP2
   *          routes.</p>
   */
  scheme?: HttpScheme | string;

  /**
   * @public
   * <p>The client request headers to match on.</p>
   */
  headers?: HttpRouteHeader[];

  /**
   * @public
   * <p>The port number to match on.</p>
   */
  port?: number;
}

/**
 * @public
 * <p>An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>.
 *                Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the
 *                <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>.</p>
 */
export interface HttpRetryPolicy {
  /**
   * @public
   * <p>The timeout for each retry attempt.</p>
   */
  perRetryTimeout: Duration | undefined;

  /**
   * @public
   * <p>The maximum number of retry attempts.</p>
   */
  maxRetries: number | undefined;

  /**
   * @public
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
   */
  httpRetryEvents?: string[];

  /**
   * @public
   * <p>Specify a valid value. The event occurs before any processing of a request has started and is encountered when the upstream is temporarily or permanently unavailable.</p>
   */
  tcpRetryEvents?: (TcpRetryPolicyEvent | string)[];
}

/**
 * @public
 * <p>An object that represents an HTTP or HTTP/2 route type.</p>
 */
export interface HttpRoute {
  /**
   * @public
   * <p>An object that represents the criteria for determining a request match.</p>
   */
  match: HttpRouteMatch | undefined;

  /**
   * @public
   * <p>An object that represents the action to take if a match is determined.</p>
   */
  action: HttpRouteAction | undefined;

  /**
   * @public
   * <p>An object that represents a retry policy.</p>
   */
  retryPolicy?: HttpRetryPolicy;

  /**
   * @public
   * <p>An object that represents types of timeouts. </p>
   */
  timeout?: HttpTimeout;
}

/**
 * @public
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface TcpRouteAction {
  /**
   * @public
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   */
  weightedTargets: WeightedTarget[] | undefined;
}

/**
 * @public
 * <p>An object representing the TCP route to match.</p>
 */
export interface TcpRouteMatch {
  /**
   * @public
   * <p>The port number to match on.</p>
   */
  port?: number;
}

/**
 * @public
 * <p>An object that represents a TCP route type.</p>
 */
export interface TcpRoute {
  /**
   * @public
   * <p>The action to take if a match is determined.</p>
   */
  action: TcpRouteAction | undefined;

  /**
   * @public
   * <p>An object that represents types of timeouts. </p>
   */
  timeout?: TcpTimeout;

  /**
   * @public
   * <p>An object that represents the criteria for determining a request match.</p>
   */
  match?: TcpRouteMatch;
}

/**
 * @public
 * <p>An object that represents a route specification. Specify one route type.</p>
 */
export interface RouteSpec {
  /**
   * @public
   * <p>The priority for the route. Routes are matched based on the specified value, where 0 is
   *          the highest priority.</p>
   */
  priority?: number;

  /**
   * @public
   * <p>An object that represents the specification of an HTTP route.</p>
   */
  httpRoute?: HttpRoute;

  /**
   * @public
   * <p>An object that represents the specification of a TCP route.</p>
   */
  tcpRoute?: TcpRoute;

  /**
   * @public
   * <p>An object that represents the specification of an HTTP/2 route.</p>
   */
  http2Route?: HttpRoute;

  /**
   * @public
   * <p>An object that represents the specification of a gRPC route.</p>
   */
  grpcRoute?: GrpcRoute;
}

/**
 * @public
 *
 */
export interface CreateRouteInput {
  /**
   * @public
   * <p>The name to use for the route.</p>
   */
  routeName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh to create the route in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual router in which to create the route. If the virtual router is in
   *          a shared mesh, then you must be the owner of the virtual router resource.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * @public
   * <p>The route specification to apply.</p>
   */
  spec: RouteSpec | undefined;

  /**
   * @public
   * <p>Optional metadata that you can apply to the route to assist with categorization and
   *          organization. Each tag consists of a key and an optional value, both of which you define.
   *          Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 * @enum
 */
export const RouteStatusCode = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type RouteStatusCode = (typeof RouteStatusCode)[keyof typeof RouteStatusCode];

/**
 * @public
 * <p>An object that represents the current status of a route.</p>
 */
export interface RouteStatus {
  /**
   * @public
   * <p>The current status for the route.</p>
   */
  status: RouteStatusCode | string | undefined;
}

/**
 * @public
 * <p>An object that represents a route returned by a describe operation.</p>
 */
export interface RouteData {
  /**
   * @public
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * @public
   * <p>The name of the route.</p>
   */
  routeName: string | undefined;

  /**
   * @public
   * <p>The specifications of the route.</p>
   */
  spec: RouteSpec | undefined;

  /**
   * @public
   * <p>The associated metadata for the route.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * @public
   * <p>The status of the route.</p>
   */
  status: RouteStatus | undefined;
}

/**
 * @public
 *
 */
export interface CreateRouteOutput {
  /**
   * @public
   * <p>The full description of your mesh following the create call.</p>
   */
  route: RouteData | undefined;
}

/**
 * @public
 *
 */
export interface DeleteRouteInput {
  /**
   * @public
   * <p>The name of the route to delete.</p>
   */
  routeName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh to delete the route in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual router to delete the route in.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 *
 */
export interface DeleteRouteOutput {
  /**
   * @public
   * <p>The route that was deleted.</p>
   */
  route: RouteData | undefined;
}

/**
 * @public
 *
 */
export interface DescribeRouteInput {
  /**
   * @public
   * <p>The name of the route to describe.</p>
   */
  routeName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

  /**
   * @public
   * <p>The name of the virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;
}

/**
 * @public
 *
 */
export interface DescribeRouteOutput {
  /**
   * @public
   * <p>The full description of your route.</p>
   */
  route: RouteData | undefined;
}

/**
 * @public
 *
 */
export interface ListRoutesInput {
  /**
   * @public
   * <p>The name of the service mesh to list routes in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual router to list routes in.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListRoutes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results returned by <code>ListRoutes</code> in paginated output.
   *          When you use this parameter, <code>ListRoutes</code> returns only <code>limit</code>
   *          results in a single page along with a <code>nextToken</code> response element. You can see
   *          the remaining results of the initial request by sending another <code>ListRoutes</code>
   *          request with the returned <code>nextToken</code> value. This value can be between
   *          1 and 100. If you don't use this parameter,
   *             <code>ListRoutes</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 * <p>An object that represents a route returned by a list operation.</p>
 */
export interface RouteRef {
  /**
   * @public
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * @public
   * <p>The name of the route.</p>
   */
  routeName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) for the route.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;

  /**
   * @public
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 *
 */
export interface ListRoutesOutput {
  /**
   * @public
   * <p>The list of existing routes for the specified service mesh and virtual router.</p>
   */
  routes: RouteRef[] | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value to include in a future <code>ListRoutes</code> request.
   *          When the results of a <code>ListRoutes</code> request exceed <code>limit</code>, you can
   *          use this value to retrieve the next page of results. This value is <code>null</code> when
   *          there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 *
 */
export interface UpdateRouteInput {
  /**
   * @public
   * <p>The name of the route to update.</p>
   */
  routeName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * @public
   * <p>The new route specification to apply. This overwrites the existing data.</p>
   */
  spec: RouteSpec | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 *
 */
export interface UpdateRouteOutput {
  /**
   * @public
   * <p>A full description of the route that was updated.</p>
   */
  route: RouteData | undefined;
}

/**
 * @public
 *
 */
export interface UpdateVirtualRouterInput {
  /**
   * @public
   * <p>The name of the virtual router to update.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The new virtual router specification to apply. This overwrites the existing data.</p>
   */
  spec: VirtualRouterSpec | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 *
 */
export interface UpdateVirtualRouterOutput {
  /**
   * @public
   * <p>A full description of the virtual router that was updated.</p>
   */
  virtualRouter: VirtualRouterData | undefined;
}

/**
 * @public
 * <p>An object that represents a virtual node service provider.</p>
 */
export interface VirtualNodeServiceProvider {
  /**
   * @public
   * <p>The name of the virtual node that is acting as a service provider.</p>
   */
  virtualNodeName: string | undefined;
}

/**
 * @public
 * <p>An object that represents a virtual node service provider.</p>
 */
export interface VirtualRouterServiceProvider {
  /**
   * @public
   * <p>The name of the virtual router that is acting as a service provider.</p>
   */
  virtualRouterName: string | undefined;
}

/**
 * @public
 * <p>An object that represents the provider for a virtual service.</p>
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
   * @public
   * <p>The virtual node associated with a virtual service.</p>
   */
  export interface VirtualNodeMember {
    virtualNode: VirtualNodeServiceProvider;
    virtualRouter?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The virtual router associated with a virtual service.</p>
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

  export interface Visitor<T> {
    virtualNode: (value: VirtualNodeServiceProvider) => T;
    virtualRouter: (value: VirtualRouterServiceProvider) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: VirtualServiceProvider, visitor: Visitor<T>): T => {
    if (value.virtualNode !== undefined) return visitor.virtualNode(value.virtualNode);
    if (value.virtualRouter !== undefined) return visitor.virtualRouter(value.virtualRouter);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>An object that represents the specification of a virtual service.</p>
 */
export interface VirtualServiceSpec {
  /**
   * @public
   * <p>The App Mesh object that is acting as the provider for a virtual service. You
   *          can specify a single virtual node or virtual router.</p>
   */
  provider?: VirtualServiceProvider;
}

/**
 * @public
 *
 */
export interface CreateVirtualServiceInput {
  /**
   * @public
   * <p>The name to use for the virtual service.</p>
   */
  virtualServiceName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh to create the virtual service in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The virtual service specification to apply.</p>
   */
  spec: VirtualServiceSpec | undefined;

  /**
   * @public
   * <p>Optional metadata that you can apply to the virtual service to assist with
   *          categorization and organization. Each tag consists of a key and an optional value, both of
   *          which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 * @enum
 */
export const VirtualServiceStatusCode = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type VirtualServiceStatusCode = (typeof VirtualServiceStatusCode)[keyof typeof VirtualServiceStatusCode];

/**
 * @public
 * <p>An object that represents the status of a virtual service.</p>
 */
export interface VirtualServiceStatus {
  /**
   * @public
   * <p>The current status of the virtual service.</p>
   */
  status: VirtualServiceStatusCode | string | undefined;
}

/**
 * @public
 * <p>An object that represents a virtual service returned by a describe operation.</p>
 */
export interface VirtualServiceData {
  /**
   * @public
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual service.</p>
   */
  virtualServiceName: string | undefined;

  /**
   * @public
   * <p>The specifications of the virtual service.</p>
   */
  spec: VirtualServiceSpec | undefined;

  /**
   * @public
   * <p>An object that represents metadata for a resource.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * @public
   * <p>The current status of the virtual service.</p>
   */
  status: VirtualServiceStatus | undefined;
}

/**
 * @public
 *
 */
export interface CreateVirtualServiceOutput {
  /**
   * @public
   * <p>The full description of your virtual service following the create call.</p>
   */
  virtualService: VirtualServiceData | undefined;
}

/**
 * @public
 *
 */
export interface DeleteVirtualServiceInput {
  /**
   * @public
   * <p>The name of the virtual service to delete.</p>
   */
  virtualServiceName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh to delete the virtual service in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 *
 */
export interface DeleteVirtualServiceOutput {
  /**
   * @public
   * <p>The virtual service that was deleted.</p>
   */
  virtualService: VirtualServiceData | undefined;
}

/**
 * @public
 *
 */
export interface DescribeVirtualServiceInput {
  /**
   * @public
   * <p>The name of the virtual service to describe.</p>
   */
  virtualServiceName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 *
 */
export interface DescribeVirtualServiceOutput {
  /**
   * @public
   * <p>The full description of your virtual service.</p>
   */
  virtualService: VirtualServiceData | undefined;
}

/**
 * @public
 *
 */
export interface ListVirtualServicesInput {
  /**
   * @public
   * <p>The name of the service mesh to list virtual services in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualServices</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results returned by <code>ListVirtualServices</code> in paginated
   *          output. When you use this parameter, <code>ListVirtualServices</code> returns only
   *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
   *          element. You can see the remaining results of the initial request by sending another
   *             <code>ListVirtualServices</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If you don't use this
   *          parameter, <code>ListVirtualServices</code> returns up to 100 results and
   *          a <code>nextToken</code> value if applicable.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 * <p>An object that represents a virtual service returned by a list operation.</p>
 */
export interface VirtualServiceRef {
  /**
   * @public
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The name of the virtual service.</p>
   */
  virtualServiceName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) for the virtual service.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;

  /**
   * @public
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 *
 */
export interface ListVirtualServicesOutput {
  /**
   * @public
   * <p>The list of existing virtual services for the specified service mesh.</p>
   */
  virtualServices: VirtualServiceRef[] | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualServices</code>
   *          request. When the results of a <code>ListVirtualServices</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 *
 */
export interface UpdateVirtualServiceInput {
  /**
   * @public
   * <p>The name of the virtual service to update.</p>
   */
  virtualServiceName: string | undefined;

  /**
   * @public
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string | undefined;

  /**
   * @public
   * <p>The new virtual service specification to apply. This overwrites the existing
   *          data.</p>
   */
  spec: VirtualServiceSpec | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

/**
 * @public
 *
 */
export interface UpdateVirtualServiceOutput {
  /**
   * @public
   * <p>A full description of the virtual service that was updated.</p>
   */
  virtualService: VirtualServiceData | undefined;
}

/**
 * @public
 *
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to add tags to.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.
   *          Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags: TagRef[] | undefined;
}

/**
 * @public
 *
 */
export interface TagResourceOutput {}

/**
 * @public
 * <p>The request exceeds the maximum allowed number of tags allowed per resource. The current
 *          limit is 50 user tags per resource. You must reduce the number of tags in the request. None
 *          of the tags in this request were applied.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

/**
 * @public
 *
 */
export interface UntagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to delete tags from.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The keys of the tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 *
 */
export interface UntagResourceOutput {}
