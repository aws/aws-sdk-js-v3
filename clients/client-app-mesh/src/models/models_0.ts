import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>An object that represents an access log file.</p>
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
   */
  path: string | undefined;
}

export namespace FileAccessLog {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileAccessLog): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the access logging information for a virtual node.</p>
 */
export type AccessLog = AccessLog.FileMember | AccessLog.$UnknownMember;

export namespace AccessLog {
  /**
   * <p>The file object to send virtual node access logs to.</p>
   */
  export interface FileMember {
    file: FileAccessLog;
    $unknown?: never;
  }

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessLog): any => {
    if (obj.file !== undefined) return { file: FileAccessLog.filterSensitiveLog(obj.file) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>The request syntax was malformed. Check your request syntax and try again.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
}

export namespace BadRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>You don't have permissions to perform this action.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  message?: string;
}

export namespace ForbiddenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
}

/**
 * <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  $retryable: {};
  message?: string;
}

export namespace InternalServerErrorException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListTagsForResource</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
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

export namespace ListTagsForResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj,
  });
}

/**
 * <p>Optional metadata that you apply to a resource to assist with categorization and
 *          organization. Each tag consists of a key and an optional value, both of which you define.
 *          Tag keys can have a maximum character length of 128 characters, and tag values can have
 *             a maximum length of 256 characters.</p>
 */
export interface TagRef {
  /**
   * <p>One part of a key-value pair that make up a tag. A <code>key</code> is a general label
   *          that acts like a category for more specific tag values.</p>
   */
  key: string | undefined;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A <code>value</code> acts as a
   *          descriptor within a tag category (key).</p>
   */
  value: string | undefined;
}

export namespace TagRef {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagRef): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The tags for the resource.</p>
   */
  tags: TagRef[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListTagsForResource</code>
   *          request. When the results of a <code>ListTagsForResource</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListTagsForResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  message?: string;
}

export namespace NotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request has failed due to a temporary failure of the service.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  $retryable: {};
  message?: string;
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
 *          account. For best results, use an increasing or variable sleep interval between
 *          requests.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  $retryable: {
    throttling: true;
  };
  message?: string;
}

export namespace TooManyRequestsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

/**
 * <p>The request contains a client token that was used for a previous update resource call
 *          with different specifications. Try the request again with a new client token.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export enum EgressFilterType {
  ALLOW_ALL = "ALLOW_ALL",
  DROP_ALL = "DROP_ALL",
}

/**
 * <p>An object that represents the egress filter rules for a service mesh.</p>
 */
export interface EgressFilter {
  /**
   * <p>The egress filter type. By default, the type is <code>DROP_ALL</code>, which allows
   *          egress only from virtual nodes to other defined resources in the service mesh (and any
   *          traffic to <code>*.amazonaws.com</code> for Amazon Web Services API calls). You can set the egress filter
   *          type to <code>ALLOW_ALL</code> to allow egress to any endpoint inside or outside of the
   *          service mesh.</p>
   */
  type: EgressFilterType | string | undefined;
}

export namespace EgressFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EgressFilter): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the specification of a service mesh.</p>
 */
export interface MeshSpec {
  /**
   * <p>The egress filter rules for the service mesh.</p>
   */
  egressFilter?: EgressFilter;
}

export namespace MeshSpec {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MeshSpec): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface CreateMeshInput {
  /**
   * <p>The name to use for the service mesh.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The service mesh specification to apply.</p>
   */
  spec?: MeshSpec;

  /**
   * <p>Optional metadata that you can apply to the service mesh to assist with categorization
   *          and organization. Each tag consists of a key and an optional value, both of which you
   *          define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
}

export namespace CreateMeshInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeshInput): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents metadata for a resource.</p>
 */
export interface ResourceMetadata {
  /**
   * <p>The full Amazon Resource Name (ARN) for the resource.</p>
   */
  arn: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;

  /**
   * <p>The unique identifier for the resource.</p>
   */
  uid: string | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;

  /**
   * <p>The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;
}

export namespace ResourceMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceMetadata): any => ({
    ...obj,
  });
}

export enum MeshStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE",
}

/**
 * <p>An object that represents the status of a service mesh.</p>
 */
export interface MeshStatus {
  /**
   * <p>The current mesh status.</p>
   */
  status?: MeshStatusCode | string;
}

export namespace MeshStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MeshStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a service mesh returned by a describe operation.</p>
 */
export interface MeshData {
  /**
   * <p>The name of the service mesh.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The associated specification for the service mesh.</p>
   */
  spec: MeshSpec | undefined;

  /**
   * <p>The associated metadata for the service mesh.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The status of the service mesh.</p>
   */
  status: MeshStatus | undefined;
}

export namespace MeshData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MeshData): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface CreateMeshOutput {
  /**
   * <p>The full description of your service mesh following the create call.</p>
   */
  mesh: MeshData | undefined;
}

export namespace CreateMeshOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeshOutput): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service-quotas.html">Service
 *             Limits</a> in the <i>AWS App Mesh User Guide</i>.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface DeleteMeshInput {
  /**
   * <p>The name of the service mesh to delete.</p>
   */
  meshName: string | undefined;
}

export namespace DeleteMeshInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMeshInput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface DeleteMeshOutput {
  /**
   * <p>The service mesh that was deleted.</p>
   */
  mesh: MeshData | undefined;
}

export namespace DeleteMeshOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMeshOutput): any => ({
    ...obj,
  });
}

/**
 * <p>You can't delete the specified resource because it's in use or required by another
 *          resource.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  message?: string;
}

export namespace ResourceInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface DescribeMeshInput {
  /**
   * <p>The name of the service mesh to describe.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace DescribeMeshInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMeshInput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface DescribeMeshOutput {
  /**
   * <p>The full description of your service mesh.</p>
   */
  mesh: MeshData | undefined;
}

export namespace DescribeMeshOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMeshOutput): any => ({
    ...obj,
  });
}

/**
 *
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
   *         </note>
   */
  nextToken?: string;

  /**
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

export namespace ListMeshesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMeshesInput): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a service mesh returned by a list operation.</p>
 */
export interface MeshRef {
  /**
   * <p>The name of the service mesh.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;

  /**
   * <p>The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) of the service mesh.</p>
   */
  arn: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}

export namespace MeshRef {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MeshRef): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface ListMeshesOutput {
  /**
   * <p>The list of existing service meshes.</p>
   */
  meshes: MeshRef[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListMeshes</code> request.
   *          When the results of a <code>ListMeshes</code> request exceed <code>limit</code>, you can
   *          use this value to retrieve the next page of results. This value is <code>null</code> when
   *          there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListMeshesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMeshesOutput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface UpdateMeshInput {
  /**
   * <p>The name of the service mesh to update.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The service mesh specification to apply.</p>
   */
  spec?: MeshSpec;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
}

export namespace UpdateMeshInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMeshInput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface UpdateMeshOutput {
  /**
   * <p>An object that represents a service mesh returned by a describe operation.</p>
   */
  mesh: MeshData | undefined;
}

export namespace UpdateMeshOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMeshOutput): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a local file certificate.
 *          The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
 */
export interface VirtualGatewayListenerTlsFileCertificate {
  /**
   * <p>The certificate chain for the certificate.</p>
   */
  certificateChain: string | undefined;

  /**
   * <p>The private key for a certificate stored on the file system of the mesh endpoint that
   *          the proxy is running on.</p>
   */
  privateKey: string | undefined;
}

export namespace VirtualGatewayListenerTlsFileCertificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayListenerTlsFileCertificate): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the virtual gateway's listener's Secret Discovery Service
 *          certificate.The proxy must be configured with a local SDS provider via a Unix Domain
 *          Socket. See App Mesh<a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS
 *             documentation</a> for more info. </p>
 */
export interface VirtualGatewayListenerTlsSdsCertificate {
  /**
   * <p>A reference to an object that represents the name of the secret secret requested from
   *          the Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or
   *          certificate chain.</p>
   */
  secretName: string | undefined;
}

export namespace VirtualGatewayListenerTlsSdsCertificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayListenerTlsSdsCertificate): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate.</p>
 */
export type VirtualGatewayClientTlsCertificate =
  | VirtualGatewayClientTlsCertificate.FileMember
  | VirtualGatewayClientTlsCertificate.SdsMember
  | VirtualGatewayClientTlsCertificate.$UnknownMember;

export namespace VirtualGatewayClientTlsCertificate {
  /**
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
   * <p>A reference to an object that represents a virtual gateway's client's Secret Discovery
   *          Service certificate.</p>
   */
  export interface SdsMember {
    file?: never;
    sds: VirtualGatewayListenerTlsSdsCertificate;
    $unknown?: never;
  }

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayClientTlsCertificate): any => {
    if (obj.file !== undefined) return { file: VirtualGatewayListenerTlsFileCertificate.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: VirtualGatewayListenerTlsSdsCertificate.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>An object that represents the methods by which a subject alternative name on a peer
 *          Transport Layer Security (TLS) certificate can be matched.</p>
 */
export interface SubjectAlternativeNameMatchers {
  /**
   * <p>The values sent must match the specified values exactly.</p>
   */
  exact: string[] | undefined;
}

export namespace SubjectAlternativeNameMatchers {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubjectAlternativeNameMatchers): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the subject alternative names secured by the
 *          certificate.</p>
 */
export interface SubjectAlternativeNames {
  /**
   * <p>An object that represents the criteria for determining a SANs match.</p>
   */
  match: SubjectAlternativeNameMatchers | undefined;
}

export namespace SubjectAlternativeNames {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubjectAlternativeNames): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager
 *          certificate.</p>
 */
export interface VirtualGatewayTlsValidationContextAcmTrust {
  /**
   * <p>One or more ACM Amazon Resource Name (ARN)s.</p>
   */
  certificateAuthorityArns: string[] | undefined;
}

export namespace VirtualGatewayTlsValidationContextAcmTrust {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayTlsValidationContextAcmTrust): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
 */
export interface VirtualGatewayTlsValidationContextFileTrust {
  /**
   * <p>The certificate trust chain for a certificate stored on the file system of the virtual
   *          node that the proxy is running on.</p>
   */
  certificateChain: string | undefined;
}

export namespace VirtualGatewayTlsValidationContextFileTrust {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayTlsValidationContextFileTrust): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service
 *          validation context trust. The proxy must be configured with a local SDS provider via a Unix
 *          Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info.</p>
 */
export interface VirtualGatewayTlsValidationContextSdsTrust {
  /**
   * <p>A reference to an object that represents the name of the secret for a virtual gateway's
   *          Transport Layer Security (TLS) Secret Discovery Service validation context trust.</p>
   */
  secretName: string | undefined;
}

export namespace VirtualGatewayTlsValidationContextSdsTrust {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayTlsValidationContextSdsTrust): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust.</p>
 */
export type VirtualGatewayTlsValidationContextTrust =
  | VirtualGatewayTlsValidationContextTrust.AcmMember
  | VirtualGatewayTlsValidationContextTrust.FileMember
  | VirtualGatewayTlsValidationContextTrust.SdsMember
  | VirtualGatewayTlsValidationContextTrust.$UnknownMember;

export namespace VirtualGatewayTlsValidationContextTrust {
  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an
   *          Certificate Manager certificate.</p>
   */
  export interface AcmMember {
    acm: VirtualGatewayTlsValidationContextAcmTrust;
    file?: never;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
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
   */
  export interface SdsMember {
    acm?: never;
    file?: never;
    sds: VirtualGatewayTlsValidationContextSdsTrust;
    $unknown?: never;
  }

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayTlsValidationContextTrust): any => {
    if (obj.acm !== undefined) return { acm: VirtualGatewayTlsValidationContextAcmTrust.filterSensitiveLog(obj.acm) };
    if (obj.file !== undefined)
      return { file: VirtualGatewayTlsValidationContextFileTrust.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: VirtualGatewayTlsValidationContextSdsTrust.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context.</p>
 */
export interface VirtualGatewayTlsValidationContext {
  /**
   * <p>A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS)
   *          certificate.</p>
   */
  trust: VirtualGatewayTlsValidationContextTrust | undefined;

  /**
   * <p>A reference to an object that represents the SANs for a virtual gateway's listener's
   *          Transport Layer Security (TLS) validation context.</p>
   */
  subjectAlternativeNames?: SubjectAlternativeNames;
}

export namespace VirtualGatewayTlsValidationContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayTlsValidationContext): any => ({
    ...obj,
    ...(obj.trust && { trust: VirtualGatewayTlsValidationContextTrust.filterSensitiveLog(obj.trust) }),
  });
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) client policy.</p>
 */
export interface VirtualGatewayClientPolicyTls {
  /**
   * <p>Whether the policy is enforced. The default is <code>True</code>, if a value isn't
   *          specified.</p>
   */
  enforce?: boolean;

  /**
   * <p>One or more ports that the policy is enforced for.</p>
   */
  ports?: number[];

  /**
   * <p>A reference to an object that represents a virtual gateway's client's Transport Layer Security (TLS)
   *          certificate.</p>
   */
  certificate?: VirtualGatewayClientTlsCertificate;

  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) validation context.</p>
   */
  validation: VirtualGatewayTlsValidationContext | undefined;
}

export namespace VirtualGatewayClientPolicyTls {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayClientPolicyTls): any => ({
    ...obj,
    ...(obj.certificate && { certificate: VirtualGatewayClientTlsCertificate.filterSensitiveLog(obj.certificate) }),
    ...(obj.validation && { validation: VirtualGatewayTlsValidationContext.filterSensitiveLog(obj.validation) }),
  });
}

/**
 * <p>An object that represents a client policy.</p>
 */
export interface VirtualGatewayClientPolicy {
  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) client policy.</p>
   */
  tls?: VirtualGatewayClientPolicyTls;
}

export namespace VirtualGatewayClientPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayClientPolicy): any => ({
    ...obj,
    ...(obj.tls && { tls: VirtualGatewayClientPolicyTls.filterSensitiveLog(obj.tls) }),
  });
}

/**
 * <p>An object that represents the default properties for a backend.</p>
 */
export interface VirtualGatewayBackendDefaults {
  /**
   * <p>A reference to an object that represents a client policy.</p>
   */
  clientPolicy?: VirtualGatewayClientPolicy;
}

export namespace VirtualGatewayBackendDefaults {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayBackendDefaults): any => ({
    ...obj,
    ...(obj.clientPolicy && { clientPolicy: VirtualGatewayClientPolicy.filterSensitiveLog(obj.clientPolicy) }),
  });
}

/**
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualGatewayGrpcConnectionPool {
  /**
   * <p>Maximum number of inflight requests Envoy can concurrently support across hosts in
   *          upstream cluster.</p>
   */
  maxRequests: number | undefined;
}

export namespace VirtualGatewayGrpcConnectionPool {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayGrpcConnectionPool): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualGatewayHttpConnectionPool {
  /**
   * <p>Maximum number of outbound TCP connections Envoy can establish concurrently with all
   *          hosts in upstream cluster.</p>
   */
  maxConnections: number | undefined;

  /**
   * <p>Number of overflowing requests after <code>max_connections</code> Envoy will queue to
   *          upstream cluster.</p>
   */
  maxPendingRequests?: number;
}

export namespace VirtualGatewayHttpConnectionPool {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayHttpConnectionPool): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualGatewayHttp2ConnectionPool {
  /**
   * <p>Maximum number of inflight requests Envoy can concurrently support across hosts in
   *          upstream cluster.</p>
   */
  maxRequests: number | undefined;
}

export namespace VirtualGatewayHttp2ConnectionPool {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayHttp2ConnectionPool): any => ({
    ...obj,
  });
}

/**
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

export namespace VirtualGatewayConnectionPool {
  /**
   * <p>An object that represents a type of connection pool.</p>
   */
  export interface HttpMember {
    http: VirtualGatewayHttpConnectionPool;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * <p>An object that represents a type of connection pool.</p>
   */
  export interface Http2Member {
    http?: never;
    http2: VirtualGatewayHttp2ConnectionPool;
    grpc?: never;
    $unknown?: never;
  }

  /**
   * <p>An object that represents a type of connection pool. </p>
   */
  export interface GrpcMember {
    http?: never;
    http2?: never;
    grpc: VirtualGatewayGrpcConnectionPool;
    $unknown?: never;
  }

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayConnectionPool): any => {
    if (obj.http !== undefined) return { http: VirtualGatewayHttpConnectionPool.filterSensitiveLog(obj.http) };
    if (obj.http2 !== undefined) return { http2: VirtualGatewayHttp2ConnectionPool.filterSensitiveLog(obj.http2) };
    if (obj.grpc !== undefined) return { grpc: VirtualGatewayGrpcConnectionPool.filterSensitiveLog(obj.grpc) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export enum VirtualGatewayPortProtocol {
  GRPC = "grpc",
  HTTP = "http",
  HTTP2 = "http2",
}

/**
 * <p>An object that represents the health check policy for a virtual gateway's
 *          listener.</p>
 */
export interface VirtualGatewayHealthCheckPolicy {
  /**
   * <p>The amount of time to wait when receiving a response from the health check, in
   *          milliseconds.</p>
   */
  timeoutMillis: number | undefined;

  /**
   * <p>The time period in milliseconds between each health check execution.</p>
   */
  intervalMillis: number | undefined;

  /**
   * <p>The protocol for the health check request. If you specify <code>grpc</code>, then your
   *          service must conform to the <a href="https://github.com/grpc/grpc/blob/master/doc/health-checking.md">GRPC Health
   *             Checking Protocol</a>.</p>
   */
  protocol: VirtualGatewayPortProtocol | string | undefined;

  /**
   * <p>The destination port for the health check request. This port must match the port defined
   *          in the <a>PortMapping</a> for the listener.</p>
   */
  port?: number;

  /**
   * <p>The destination path for the health check request. This value is only used if the
   *          specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.</p>
   */
  path?: string;

  /**
   * <p>The number of consecutive successful health checks that must occur before declaring the
   *          listener healthy.</p>
   */
  healthyThreshold: number | undefined;

  /**
   * <p>The number of consecutive failed health checks that must occur before declaring a
   *          virtual gateway unhealthy.</p>
   */
  unhealthyThreshold: number | undefined;
}

export namespace VirtualGatewayHealthCheckPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayHealthCheckPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a port mapping.</p>
 */
export interface VirtualGatewayPortMapping {
  /**
   * <p>The port used for the port mapping. Specify one protocol.</p>
   */
  port: number | undefined;

  /**
   * <p>The protocol used for the port mapping.</p>
   */
  protocol: VirtualGatewayPortProtocol | string | undefined;
}

export namespace VirtualGatewayPortMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayPortMapping): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents an Certificate Manager certificate.</p>
 */
export interface VirtualGatewayListenerTlsAcmCertificate {
  /**
   * <p>The Amazon Resource Name (ARN) for the certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
   */
  certificateArn: string | undefined;
}

export namespace VirtualGatewayListenerTlsAcmCertificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayListenerTlsAcmCertificate): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a listener's Transport Layer Security (TLS) certificate.</p>
 */
export type VirtualGatewayListenerTlsCertificate =
  | VirtualGatewayListenerTlsCertificate.AcmMember
  | VirtualGatewayListenerTlsCertificate.FileMember
  | VirtualGatewayListenerTlsCertificate.SdsMember
  | VirtualGatewayListenerTlsCertificate.$UnknownMember;

export namespace VirtualGatewayListenerTlsCertificate {
  /**
   * <p>A reference to an object that represents an Certificate Manager certificate.</p>
   */
  export interface AcmMember {
    acm: VirtualGatewayListenerTlsAcmCertificate;
    file?: never;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>A reference to an object that represents a local file certificate.</p>
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
   */
  export interface SdsMember {
    acm?: never;
    file?: never;
    sds: VirtualGatewayListenerTlsSdsCertificate;
    $unknown?: never;
  }

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayListenerTlsCertificate): any => {
    if (obj.acm !== undefined) return { acm: VirtualGatewayListenerTlsAcmCertificate.filterSensitiveLog(obj.acm) };
    if (obj.file !== undefined) return { file: VirtualGatewayListenerTlsFileCertificate.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: VirtualGatewayListenerTlsSdsCertificate.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export enum VirtualGatewayListenerTlsMode {
  DISABLED = "DISABLED",
  PERMISSIVE = "PERMISSIVE",
  STRICT = "STRICT",
}

/**
 * <p>An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context
 *          trust.</p>
 */
export type VirtualGatewayListenerTlsValidationContextTrust =
  | VirtualGatewayListenerTlsValidationContextTrust.FileMember
  | VirtualGatewayListenerTlsValidationContextTrust.SdsMember
  | VirtualGatewayListenerTlsValidationContextTrust.$UnknownMember;

export namespace VirtualGatewayListenerTlsValidationContextTrust {
  /**
   * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
   */
  export interface FileMember {
    file: VirtualGatewayTlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret
   *          Discovery Service validation context trust.</p>
   */
  export interface SdsMember {
    file?: never;
    sds: VirtualGatewayTlsValidationContextSdsTrust;
    $unknown?: never;
  }

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayListenerTlsValidationContextTrust): any => {
    if (obj.file !== undefined)
      return { file: VirtualGatewayTlsValidationContextFileTrust.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: VirtualGatewayTlsValidationContextSdsTrust.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation
 *          context.</p>
 */
export interface VirtualGatewayListenerTlsValidationContext {
  /**
   * <p>A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS)
   *          certificate.</p>
   */
  trust: VirtualGatewayListenerTlsValidationContextTrust | undefined;

  /**
   * <p>A reference to an object that represents the SANs for a virtual gateway listener's Transport Layer Security (TLS)
   *          validation context.</p>
   */
  subjectAlternativeNames?: SubjectAlternativeNames;
}

export namespace VirtualGatewayListenerTlsValidationContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayListenerTlsValidationContext): any => ({
    ...obj,
    ...(obj.trust && { trust: VirtualGatewayListenerTlsValidationContextTrust.filterSensitiveLog(obj.trust) }),
  });
}

/**
 * <p>An object that represents the Transport Layer Security (TLS) properties for a listener.</p>
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
   */
  mode: VirtualGatewayListenerTlsMode | string | undefined;

  /**
   * <p>A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation
   *          context.</p>
   */
  validation?: VirtualGatewayListenerTlsValidationContext;

  /**
   * <p>An object that represents a Transport Layer Security (TLS) certificate.</p>
   */
  certificate: VirtualGatewayListenerTlsCertificate | undefined;
}

export namespace VirtualGatewayListenerTls {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayListenerTls): any => ({
    ...obj,
    ...(obj.validation && {
      validation: VirtualGatewayListenerTlsValidationContext.filterSensitiveLog(obj.validation),
    }),
    ...(obj.certificate && { certificate: VirtualGatewayListenerTlsCertificate.filterSensitiveLog(obj.certificate) }),
  });
}

/**
 * <p>An object that represents a listener for a virtual gateway.</p>
 */
export interface VirtualGatewayListener {
  /**
   * <p>The health check information for the listener.</p>
   */
  healthCheck?: VirtualGatewayHealthCheckPolicy;

  /**
   * <p>The port mapping information for the listener.</p>
   */
  portMapping: VirtualGatewayPortMapping | undefined;

  /**
   * <p>A reference to an object that represents the Transport Layer Security (TLS) properties for the listener.</p>
   */
  tls?: VirtualGatewayListenerTls;

  /**
   * <p>The connection pool information for the virtual gateway listener.</p>
   */
  connectionPool?: VirtualGatewayConnectionPool;
}

export namespace VirtualGatewayListener {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayListener): any => ({
    ...obj,
    ...(obj.tls && { tls: VirtualGatewayListenerTls.filterSensitiveLog(obj.tls) }),
    ...(obj.connectionPool && { connectionPool: VirtualGatewayConnectionPool.filterSensitiveLog(obj.connectionPool) }),
  });
}

/**
 * <p>An object that represents an access log file.</p>
 */
export interface VirtualGatewayFileAccessLog {
  /**
   * <p>The file path to write access logs to. You can use <code>/dev/stdout</code> to send
   *          access logs to standard out and configure your Envoy container to use a log driver, such as
   *             <code>awslogs</code>, to export the access logs to a log storage service such as Amazon
   *          CloudWatch Logs. You can also specify a path in the Envoy container's file system to write
   *          the files to disk.</p>
   */
  path: string | undefined;
}

export namespace VirtualGatewayFileAccessLog {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayFileAccessLog): any => ({
    ...obj,
  });
}

/**
 * <p>The access log configuration for a virtual gateway.</p>
 */
export type VirtualGatewayAccessLog = VirtualGatewayAccessLog.FileMember | VirtualGatewayAccessLog.$UnknownMember;

export namespace VirtualGatewayAccessLog {
  /**
   * <p>The file object to send virtual gateway access logs to.</p>
   */
  export interface FileMember {
    file: VirtualGatewayFileAccessLog;
    $unknown?: never;
  }

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayAccessLog): any => {
    if (obj.file !== undefined) return { file: VirtualGatewayFileAccessLog.filterSensitiveLog(obj.file) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>An object that represents logging information.</p>
 */
export interface VirtualGatewayLogging {
  /**
   * <p>The access log configuration.</p>
   */
  accessLog?: VirtualGatewayAccessLog;
}

export namespace VirtualGatewayLogging {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayLogging): any => ({
    ...obj,
    ...(obj.accessLog && { accessLog: VirtualGatewayAccessLog.filterSensitiveLog(obj.accessLog) }),
  });
}

/**
 * <p>An object that represents the specification of a service mesh resource.</p>
 */
export interface VirtualGatewaySpec {
  /**
   * <p>A reference to an object that represents the defaults for backends.</p>
   */
  backendDefaults?: VirtualGatewayBackendDefaults;

  /**
   * <p>The listeners that the mesh endpoint is expected to receive inbound traffic from. You
   *          can specify one listener.</p>
   */
  listeners: VirtualGatewayListener[] | undefined;

  /**
   * <p>An object that represents logging information.</p>
   */
  logging?: VirtualGatewayLogging;
}

export namespace VirtualGatewaySpec {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewaySpec): any => ({
    ...obj,
    ...(obj.backendDefaults && {
      backendDefaults: VirtualGatewayBackendDefaults.filterSensitiveLog(obj.backendDefaults),
    }),
    ...(obj.listeners && { listeners: obj.listeners.map((item) => VirtualGatewayListener.filterSensitiveLog(item)) }),
    ...(obj.logging && { logging: VirtualGatewayLogging.filterSensitiveLog(obj.logging) }),
  });
}

export interface CreateVirtualGatewayInput {
  /**
   * <p>The name to use for the virtual gateway.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The name of the service mesh to create the virtual gateway in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The virtual gateway specification to apply.</p>
   */
  spec: VirtualGatewaySpec | undefined;

  /**
   * <p>Optional metadata that you can apply to the virtual gateway to assist with
   *          categorization and organization. Each tag consists of a key and an optional value, both of
   *          which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace CreateVirtualGatewayInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVirtualGatewayInput): any => ({
    ...obj,
    ...(obj.spec && { spec: VirtualGatewaySpec.filterSensitiveLog(obj.spec) }),
  });
}

export enum VirtualGatewayStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE",
}

/**
 * <p>An object that represents the status of the mesh resource.</p>
 */
export interface VirtualGatewayStatus {
  /**
   * <p>The current status.</p>
   */
  status: VirtualGatewayStatusCode | string | undefined;
}

export namespace VirtualGatewayStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a virtual gateway returned by a describe operation.</p>
 */
export interface VirtualGatewayData {
  /**
   * <p>The name of the service mesh that the virtual gateway resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual gateway.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The specifications of the virtual gateway.</p>
   */
  spec: VirtualGatewaySpec | undefined;

  /**
   * <p>An object that represents metadata for a resource.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The current status of the virtual gateway.</p>
   */
  status: VirtualGatewayStatus | undefined;
}

export namespace VirtualGatewayData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayData): any => ({
    ...obj,
    ...(obj.spec && { spec: VirtualGatewaySpec.filterSensitiveLog(obj.spec) }),
  });
}

export interface CreateVirtualGatewayOutput {
  /**
   * <p>The full description of your virtual gateway following the create call.</p>
   */
  virtualGateway: VirtualGatewayData | undefined;
}

export namespace CreateVirtualGatewayOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVirtualGatewayOutput): any => ({
    ...obj,
    ...(obj.virtualGateway && { virtualGateway: VirtualGatewayData.filterSensitiveLog(obj.virtualGateway) }),
  });
}

export interface DeleteVirtualGatewayInput {
  /**
   * <p>The name of the virtual gateway to delete.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The name of the service mesh to delete the virtual gateway from.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace DeleteVirtualGatewayInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVirtualGatewayInput): any => ({
    ...obj,
  });
}

export interface DeleteVirtualGatewayOutput {
  /**
   * <p>The virtual gateway that was deleted.</p>
   */
  virtualGateway: VirtualGatewayData | undefined;
}

export namespace DeleteVirtualGatewayOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVirtualGatewayOutput): any => ({
    ...obj,
    ...(obj.virtualGateway && { virtualGateway: VirtualGatewayData.filterSensitiveLog(obj.virtualGateway) }),
  });
}

export interface DescribeVirtualGatewayInput {
  /**
   * <p>The name of the virtual gateway to describe.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The name of the service mesh that the gateway route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace DescribeVirtualGatewayInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVirtualGatewayInput): any => ({
    ...obj,
  });
}

export interface DescribeVirtualGatewayOutput {
  /**
   * <p>The full description of your virtual gateway.</p>
   */
  virtualGateway: VirtualGatewayData | undefined;
}

export namespace DescribeVirtualGatewayOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVirtualGatewayOutput): any => ({
    ...obj,
    ...(obj.virtualGateway && { virtualGateway: VirtualGatewayData.filterSensitiveLog(obj.virtualGateway) }),
  });
}

export enum DefaultGatewayRouteRewrite {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>An object representing the gateway route host name to rewrite.</p>
 */
export interface GatewayRouteHostnameRewrite {
  /**
   * <p>The default target host name to write to.</p>
   */
  defaultTargetHostname?: DefaultGatewayRouteRewrite | string;
}

export namespace GatewayRouteHostnameRewrite {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GatewayRouteHostnameRewrite): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the gateway route to rewrite.</p>
 */
export interface GrpcGatewayRouteRewrite {
  /**
   * <p>The host name of the gateway route to rewrite.</p>
   */
  hostname?: GatewayRouteHostnameRewrite;
}

export namespace GrpcGatewayRouteRewrite {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrpcGatewayRouteRewrite): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the virtual service that traffic is routed to.</p>
 */
export interface GatewayRouteVirtualService {
  /**
   * <p>The name of the virtual service that traffic is routed to.</p>
   */
  virtualServiceName: string | undefined;
}

export namespace GatewayRouteVirtualService {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GatewayRouteVirtualService): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a gateway route target.</p>
 */
export interface GatewayRouteTarget {
  /**
   * <p>An object that represents a virtual service gateway route target.</p>
   */
  virtualService: GatewayRouteVirtualService | undefined;
}

export namespace GatewayRouteTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GatewayRouteTarget): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface GrpcGatewayRouteAction {
  /**
   * <p>An object that represents the target that traffic is routed to when a request matches the gateway route.</p>
   */
  target: GatewayRouteTarget | undefined;

  /**
   * <p>The gateway route action to rewrite.</p>
   */
  rewrite?: GrpcGatewayRouteRewrite;
}

export namespace GrpcGatewayRouteAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrpcGatewayRouteAction): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the gateway route host name to match.</p>
 */
export interface GatewayRouteHostnameMatch {
  /**
   * <p>The exact host name to match on.</p>
   */
  exact?: string;

  /**
   * <p>The specified ending characters of the host name to match on.</p>
   */
  suffix?: string;
}

export namespace GatewayRouteHostnameMatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GatewayRouteHostnameMatch): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.</p>
 */
export interface MatchRange {
  /**
   * <p>The start of the range.</p>
   */
  start: number | undefined;

  /**
   * <p>The end of the range.</p>
   */
  end: number | undefined;
}

export namespace MatchRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MatchRange): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the method header to be matched.</p>
 */
export type GrpcMetadataMatchMethod =
  | GrpcMetadataMatchMethod.ExactMember
  | GrpcMetadataMatchMethod.PrefixMember
  | GrpcMetadataMatchMethod.RangeMember
  | GrpcMetadataMatchMethod.RegexMember
  | GrpcMetadataMatchMethod.SuffixMember
  | GrpcMetadataMatchMethod.$UnknownMember;

export namespace GrpcMetadataMatchMethod {
  /**
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrpcMetadataMatchMethod): any => {
    if (obj.exact !== undefined) return { exact: obj.exact };
    if (obj.regex !== undefined) return { regex: obj.regex };
    if (obj.range !== undefined) return { range: MatchRange.filterSensitiveLog(obj.range) };
    if (obj.prefix !== undefined) return { prefix: obj.prefix };
    if (obj.suffix !== undefined) return { suffix: obj.suffix };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>An object representing the metadata of the gateway route.</p>
 */
export interface GrpcGatewayRouteMetadata {
  /**
   * <p>A name for the gateway route metadata.</p>
   */
  name: string | undefined;

  /**
   * <p>Specify <code>True</code> to match anything except the match criteria. The default value is <code>False</code>.</p>
   */
  invert?: boolean;

  /**
   * <p>The criteria for determining a metadata match.</p>
   */
  match?: GrpcMetadataMatchMethod;
}

export namespace GrpcGatewayRouteMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrpcGatewayRouteMetadata): any => ({
    ...obj,
    ...(obj.match && { match: GrpcMetadataMatchMethod.filterSensitiveLog(obj.match) }),
  });
}

/**
 * <p>An object that represents the criteria for determining a request match.</p>
 */
export interface GrpcGatewayRouteMatch {
  /**
   * <p>The fully qualified domain name for the service to match from the request.</p>
   */
  serviceName?: string;

  /**
   * <p>The gateway route host name to be matched on.</p>
   */
  hostname?: GatewayRouteHostnameMatch;

  /**
   * <p>The gateway route metadata to be matched on.</p>
   */
  metadata?: GrpcGatewayRouteMetadata[];
}

export namespace GrpcGatewayRouteMatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrpcGatewayRouteMatch): any => ({
    ...obj,
    ...(obj.metadata && { metadata: obj.metadata.map((item) => GrpcGatewayRouteMetadata.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>An object that represents a gRPC gateway route.</p>
 */
export interface GrpcGatewayRoute {
  /**
   * <p>An object that represents the criteria for determining a request match.</p>
   */
  match: GrpcGatewayRouteMatch | undefined;

  /**
   * <p>An object that represents the action to take if a match is determined.</p>
   */
  action: GrpcGatewayRouteAction | undefined;
}

export namespace GrpcGatewayRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrpcGatewayRoute): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the path to rewrite.</p>
 */
export interface HttpGatewayRoutePathRewrite {
  /**
   * <p>The exact path to rewrite.</p>
   */
  exact?: string;
}

export namespace HttpGatewayRoutePathRewrite {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpGatewayRoutePathRewrite): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the beginning characters of the route to rewrite.</p>
 */
export interface HttpGatewayRoutePrefixRewrite {
  /**
   * <p>The default prefix used to replace the incoming route prefix when rewritten.</p>
   */
  defaultPrefix?: DefaultGatewayRouteRewrite | string;

  /**
   * <p>The value used to replace the incoming route prefix when rewritten.</p>
   */
  value?: string;
}

export namespace HttpGatewayRoutePrefixRewrite {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpGatewayRoutePrefixRewrite): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the gateway route to rewrite.</p>
 */
export interface HttpGatewayRouteRewrite {
  /**
   * <p>The specified beginning characters to rewrite.</p>
   */
  prefix?: HttpGatewayRoutePrefixRewrite;

  /**
   * <p>The path to rewrite.</p>
   */
  path?: HttpGatewayRoutePathRewrite;

  /**
   * <p>The host name to rewrite.</p>
   */
  hostname?: GatewayRouteHostnameRewrite;
}

export namespace HttpGatewayRouteRewrite {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpGatewayRouteRewrite): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface HttpGatewayRouteAction {
  /**
   * <p>An object that represents the target that traffic is routed to when a request matches the gateway route.</p>
   */
  target: GatewayRouteTarget | undefined;

  /**
   * <p>The gateway route action to rewrite.</p>
   */
  rewrite?: HttpGatewayRouteRewrite;
}

export namespace HttpGatewayRouteAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpGatewayRouteAction): any => ({
    ...obj,
  });
}

/**
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

export namespace HeaderMatchMethod {
  /**
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HeaderMatchMethod): any => {
    if (obj.exact !== undefined) return { exact: obj.exact };
    if (obj.regex !== undefined) return { regex: obj.regex };
    if (obj.range !== undefined) return { range: MatchRange.filterSensitiveLog(obj.range) };
    if (obj.prefix !== undefined) return { prefix: obj.prefix };
    if (obj.suffix !== undefined) return { suffix: obj.suffix };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>An object that represents the HTTP header in the gateway route.</p>
 */
export interface HttpGatewayRouteHeader {
  /**
   * <p>A name for the HTTP header in the gateway route that will be matched on.</p>
   */
  name: string | undefined;

  /**
   * <p>Specify <code>True</code> to match anything except the match criteria. The default value is <code>False</code>.</p>
   */
  invert?: boolean;

  /**
   * <p>An object that represents the method and value to match with the header value sent in a
   *          request. Specify one match method.</p>
   */
  match?: HeaderMatchMethod;
}

export namespace HttpGatewayRouteHeader {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpGatewayRouteHeader): any => ({
    ...obj,
    ...(obj.match && { match: HeaderMatchMethod.filterSensitiveLog(obj.match) }),
  });
}

export enum HttpMethod {
  CONNECT = "CONNECT",
  DELETE = "DELETE",
  GET = "GET",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  PATCH = "PATCH",
  POST = "POST",
  PUT = "PUT",
  TRACE = "TRACE",
}

/**
 * <p>An object representing the path to match in the request.</p>
 */
export interface HttpPathMatch {
  /**
   * <p>The exact path to match on.</p>
   */
  exact?: string;

  /**
   * <p>The regex used to match the path.</p>
   */
  regex?: string;
}

export namespace HttpPathMatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpPathMatch): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the query parameter to match.</p>
 */
export interface QueryParameterMatch {
  /**
   * <p>The exact query parameter to match on.</p>
   */
  exact?: string;
}

export namespace QueryParameterMatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryParameterMatch): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the query parameter in the request.</p>
 */
export interface HttpQueryParameter {
  /**
   * <p>A name for the query parameter that will be matched on.</p>
   */
  name: string | undefined;

  /**
   * <p>The query parameter to match on.</p>
   */
  match?: QueryParameterMatch;
}

export namespace HttpQueryParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpQueryParameter): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the criteria for determining a request match.</p>
 */
export interface HttpGatewayRouteMatch {
  /**
   * <p>Specifies the path to match requests with. This parameter must always start with
   *             <code>/</code>, which by itself matches all requests to the virtual service name. You
   *          can also match for path-based routing of requests. For example, if your virtual service
   *          name is <code>my-service.local</code> and you want the route to match requests to
   *             <code>my-service.local/metrics</code>, your prefix should be
   *          <code>/metrics</code>.</p>
   */
  prefix?: string;

  /**
   * <p>The path to match on.</p>
   */
  path?: HttpPathMatch;

  /**
   * <p>The query parameter to match on.</p>
   */
  queryParameters?: HttpQueryParameter[];

  /**
   * <p>The method to match on.</p>
   */
  method?: HttpMethod | string;

  /**
   * <p>The host name to match on.</p>
   */
  hostname?: GatewayRouteHostnameMatch;

  /**
   * <p>The client request headers to match on.</p>
   */
  headers?: HttpGatewayRouteHeader[];
}

export namespace HttpGatewayRouteMatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpGatewayRouteMatch): any => ({
    ...obj,
    ...(obj.headers && { headers: obj.headers.map((item) => HttpGatewayRouteHeader.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>An object that represents an HTTP gateway route.</p>
 */
export interface HttpGatewayRoute {
  /**
   * <p>An object that represents the criteria for determining a request match.</p>
   */
  match: HttpGatewayRouteMatch | undefined;

  /**
   * <p>An object that represents the action to take if a match is determined.</p>
   */
  action: HttpGatewayRouteAction | undefined;
}

export namespace HttpGatewayRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpGatewayRoute): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a gateway route specification. Specify one gateway route
 *          type.</p>
 */
export interface GatewayRouteSpec {
  /**
   * <p>The ordering of the gateway routes spec.</p>
   */
  priority?: number;

  /**
   * <p>An object that represents the specification of an HTTP gateway route.</p>
   */
  httpRoute?: HttpGatewayRoute;

  /**
   * <p>An object that represents the specification of an HTTP/2 gateway route.</p>
   */
  http2Route?: HttpGatewayRoute;

  /**
   * <p>An object that represents the specification of a gRPC gateway route.</p>
   */
  grpcRoute?: GrpcGatewayRoute;
}

export namespace GatewayRouteSpec {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GatewayRouteSpec): any => ({
    ...obj,
  });
}

export interface CreateGatewayRouteInput {
  /**
   * <p>The name to use for the gateway route.</p>
   */
  gatewayRouteName: string | undefined;

  /**
   * <p>The name of the service mesh to create the gateway route in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual gateway to associate the gateway route with. If the virtual
   *          gateway is in a shared mesh, then you must be the owner of the virtual gateway
   *          resource.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The gateway route specification to apply.</p>
   */
  spec: GatewayRouteSpec | undefined;

  /**
   * <p>Optional metadata that you can apply to the gateway route to assist with categorization
   *          and organization. Each tag consists of a key and an optional value, both of which you
   *          define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace CreateGatewayRouteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGatewayRouteInput): any => ({
    ...obj,
  });
}

export enum GatewayRouteStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE",
}

/**
 * <p>An object that represents the current status of a gateway route.</p>
 */
export interface GatewayRouteStatus {
  /**
   * <p>The current status for the gateway route.</p>
   */
  status: GatewayRouteStatusCode | string | undefined;
}

export namespace GatewayRouteStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GatewayRouteStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a gateway route returned by a describe operation.</p>
 */
export interface GatewayRouteData {
  /**
   * <p>The name of the service mesh that the resource resides in. </p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the gateway route.</p>
   */
  gatewayRouteName: string | undefined;

  /**
   * <p>The virtual gateway that the gateway route is associated with.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The specifications of the gateway route.</p>
   */
  spec: GatewayRouteSpec | undefined;

  /**
   * <p>An object that represents metadata for a resource.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The status of the gateway route.</p>
   */
  status: GatewayRouteStatus | undefined;
}

export namespace GatewayRouteData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GatewayRouteData): any => ({
    ...obj,
  });
}

export interface CreateGatewayRouteOutput {
  /**
   * <p>The full description of your gateway route following the create call.</p>
   */
  gatewayRoute: GatewayRouteData | undefined;
}

export namespace CreateGatewayRouteOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGatewayRouteOutput): any => ({
    ...obj,
  });
}

export interface DeleteGatewayRouteInput {
  /**
   * <p>The name of the gateway route to delete.</p>
   */
  gatewayRouteName: string | undefined;

  /**
   * <p>The name of the service mesh to delete the gateway route from.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual gateway to delete the route from.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace DeleteGatewayRouteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGatewayRouteInput): any => ({
    ...obj,
  });
}

export interface DeleteGatewayRouteOutput {
  /**
   * <p>The gateway route that was deleted.</p>
   */
  gatewayRoute: GatewayRouteData | undefined;
}

export namespace DeleteGatewayRouteOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGatewayRouteOutput): any => ({
    ...obj,
  });
}

export interface DescribeGatewayRouteInput {
  /**
   * <p>The name of the gateway route to describe.</p>
   */
  gatewayRouteName: string | undefined;

  /**
   * <p>The name of the service mesh that the gateway route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual gateway that the gateway route is associated with.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace DescribeGatewayRouteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGatewayRouteInput): any => ({
    ...obj,
  });
}

export interface DescribeGatewayRouteOutput {
  /**
   * <p>The full description of your gateway route.</p>
   */
  gatewayRoute: GatewayRouteData | undefined;
}

export namespace DescribeGatewayRouteOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGatewayRouteOutput): any => ({
    ...obj,
  });
}

export interface ListGatewayRoutesInput {
  /**
   * <p>The name of the service mesh to list gateway routes in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual gateway to list gateway routes in.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListGatewayRoutes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace ListGatewayRoutesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGatewayRoutesInput): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a gateway route returned by a list operation.</p>
 */
export interface GatewayRouteRef {
  /**
   * <p>The name of the service mesh that the resource resides in. </p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the gateway route.</p>
   */
  gatewayRouteName: string | undefined;

  /**
   * <p>The virtual gateway that the gateway route is associated with.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;

  /**
   * <p>The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) for the gateway route.</p>
   */
  arn: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}

export namespace GatewayRouteRef {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GatewayRouteRef): any => ({
    ...obj,
  });
}

export interface ListGatewayRoutesOutput {
  /**
   * <p>The list of existing gateway routes for the specified service mesh and virtual
   *          gateway.</p>
   */
  gatewayRoutes: GatewayRouteRef[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListGatewayRoutes</code>
   *          request. When the results of a <code>ListGatewayRoutes</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListGatewayRoutesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGatewayRoutesOutput): any => ({
    ...obj,
  });
}

export interface UpdateGatewayRouteInput {
  /**
   * <p>The name of the gateway route to update.</p>
   */
  gatewayRouteName: string | undefined;

  /**
   * <p>The name of the service mesh that the gateway route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual gateway that the gateway route is associated with.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The new gateway route specification to apply. This overwrites the existing data.</p>
   */
  spec: GatewayRouteSpec | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace UpdateGatewayRouteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGatewayRouteInput): any => ({
    ...obj,
  });
}

export interface UpdateGatewayRouteOutput {
  /**
   * <p>A full description of the gateway route that was updated.</p>
   */
  gatewayRoute: GatewayRouteData | undefined;
}

export namespace UpdateGatewayRouteOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGatewayRouteOutput): any => ({
    ...obj,
  });
}

export interface ListVirtualGatewaysInput {
  /**
   * <p>The name of the service mesh to list virtual gateways in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualGateways</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace ListVirtualGatewaysInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVirtualGatewaysInput): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a virtual gateway returned by a list operation.</p>
 */
export interface VirtualGatewayRef {
  /**
   * <p>The name of the service mesh that the resource resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the resource.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;

  /**
   * <p>The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) for the resource.</p>
   */
  arn: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}

export namespace VirtualGatewayRef {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualGatewayRef): any => ({
    ...obj,
  });
}

export interface ListVirtualGatewaysOutput {
  /**
   * <p>The list of existing virtual gateways for the specified service mesh.</p>
   */
  virtualGateways: VirtualGatewayRef[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualGateways</code>
   *          request. When the results of a <code>ListVirtualGateways</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListVirtualGatewaysOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVirtualGatewaysOutput): any => ({
    ...obj,
  });
}

export interface UpdateVirtualGatewayInput {
  /**
   * <p>The name of the virtual gateway to update.</p>
   */
  virtualGatewayName: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual gateway resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The new virtual gateway specification to apply. This overwrites the existing
   *          data.</p>
   */
  spec: VirtualGatewaySpec | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace UpdateVirtualGatewayInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVirtualGatewayInput): any => ({
    ...obj,
    ...(obj.spec && { spec: VirtualGatewaySpec.filterSensitiveLog(obj.spec) }),
  });
}

export interface UpdateVirtualGatewayOutput {
  /**
   * <p>A full description of the virtual gateway that was updated.</p>
   */
  virtualGateway: VirtualGatewayData | undefined;
}

export namespace UpdateVirtualGatewayOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVirtualGatewayOutput): any => ({
    ...obj,
    ...(obj.virtualGateway && { virtualGateway: VirtualGatewayData.filterSensitiveLog(obj.virtualGateway) }),
  });
}

/**
 * <p>An object that represents a local file certificate.
 *          The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
 */
export interface ListenerTlsFileCertificate {
  /**
   * <p>The certificate chain for the certificate.</p>
   */
  certificateChain: string | undefined;

  /**
   * <p>The private key for a certificate stored on the file system of the virtual node that the
   *          proxy is running on.</p>
   */
  privateKey: string | undefined;
}

export namespace ListenerTlsFileCertificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListenerTlsFileCertificate): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the listener's Secret Discovery Service certificate. The proxy
 *          must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a>
 *          for more info.</p>
 */
export interface ListenerTlsSdsCertificate {
  /**
   * <p>A reference to an object that represents the name of the secret requested from the
   *          Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or
   *          certificate chain.</p>
   */
  secretName: string | undefined;
}

export namespace ListenerTlsSdsCertificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListenerTlsSdsCertificate): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the client's certificate.</p>
 */
export type ClientTlsCertificate =
  | ClientTlsCertificate.FileMember
  | ClientTlsCertificate.SdsMember
  | ClientTlsCertificate.$UnknownMember;

export namespace ClientTlsCertificate {
  /**
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
   * <p>A reference to an object that represents a client's TLS Secret Discovery Service
   *          certificate.</p>
   */
  export interface SdsMember {
    file?: never;
    sds: ListenerTlsSdsCertificate;
    $unknown?: never;
  }

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientTlsCertificate): any => {
    if (obj.file !== undefined) return { file: ListenerTlsFileCertificate.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: ListenerTlsSdsCertificate.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager
 *          certificate.</p>
 */
export interface TlsValidationContextAcmTrust {
  /**
   * <p>One or more ACM Amazon Resource Name (ARN)s.</p>
   */
  certificateAuthorityArns: string[] | undefined;
}

export namespace TlsValidationContextAcmTrust {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TlsValidationContextAcmTrust): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
 */
export interface TlsValidationContextFileTrust {
  /**
   * <p>The certificate trust chain for a certificate stored on the file system of the virtual
   *          node that the proxy is running on.</p>
   */
  certificateChain: string | undefined;
}

export namespace TlsValidationContextFileTrust {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TlsValidationContextFileTrust): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust. The
 *          proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh
 *             <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS
 *             documentation</a> for more info.</p>
 */
export interface TlsValidationContextSdsTrust {
  /**
   * <p>A reference to an object that represents the name of the secret for a Transport Layer Security (TLS) Secret
   *          Discovery Service validation context trust.</p>
   */
  secretName: string | undefined;
}

export namespace TlsValidationContextSdsTrust {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TlsValidationContextSdsTrust): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust.</p>
 */
export type TlsValidationContextTrust =
  | TlsValidationContextTrust.AcmMember
  | TlsValidationContextTrust.FileMember
  | TlsValidationContextTrust.SdsMember
  | TlsValidationContextTrust.$UnknownMember;

export namespace TlsValidationContextTrust {
  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an
   *          Certificate Manager certificate.</p>
   */
  export interface AcmMember {
    acm: TlsValidationContextAcmTrust;
    file?: never;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
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
   */
  export interface SdsMember {
    acm?: never;
    file?: never;
    sds: TlsValidationContextSdsTrust;
    $unknown?: never;
  }

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TlsValidationContextTrust): any => {
    if (obj.acm !== undefined) return { acm: TlsValidationContextAcmTrust.filterSensitiveLog(obj.acm) };
    if (obj.file !== undefined) return { file: TlsValidationContextFileTrust.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: TlsValidationContextSdsTrust.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>An object that represents how the proxy will validate its peer during Transport Layer Security (TLS)
 *          negotiation.</p>
 */
export interface TlsValidationContext {
  /**
   * <p>A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS)
   *          certificate.</p>
   */
  trust: TlsValidationContextTrust | undefined;

  /**
   * <p>A reference to an object that represents the SANs for a Transport Layer Security (TLS) validation context.</p>
   */
  subjectAlternativeNames?: SubjectAlternativeNames;
}

export namespace TlsValidationContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TlsValidationContext): any => ({
    ...obj,
    ...(obj.trust && { trust: TlsValidationContextTrust.filterSensitiveLog(obj.trust) }),
  });
}

/**
 * <p>A reference to an object that represents a Transport Layer Security (TLS) client policy.</p>
 */
export interface ClientPolicyTls {
  /**
   * <p>Whether the policy is enforced. The default is <code>True</code>, if a value isn't specified.</p>
   */
  enforce?: boolean;

  /**
   * <p>One or more ports that the policy is enforced for.</p>
   */
  ports?: number[];

  /**
   * <p>A reference to an object that represents a client's TLS certificate.</p>
   */
  certificate?: ClientTlsCertificate;

  /**
   * <p>A reference to an object that represents a TLS validation context.</p>
   */
  validation: TlsValidationContext | undefined;
}

export namespace ClientPolicyTls {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientPolicyTls): any => ({
    ...obj,
    ...(obj.certificate && { certificate: ClientTlsCertificate.filterSensitiveLog(obj.certificate) }),
    ...(obj.validation && { validation: TlsValidationContext.filterSensitiveLog(obj.validation) }),
  });
}

/**
 * <p>An object that represents a client policy.</p>
 */
export interface ClientPolicy {
  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) client policy.</p>
   */
  tls?: ClientPolicyTls;
}

export namespace ClientPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientPolicy): any => ({
    ...obj,
    ...(obj.tls && { tls: ClientPolicyTls.filterSensitiveLog(obj.tls) }),
  });
}

/**
 * <p>An object that represents the default properties for a backend.</p>
 */
export interface BackendDefaults {
  /**
   * <p>A reference to an object that represents a client policy.</p>
   */
  clientPolicy?: ClientPolicy;
}

export namespace BackendDefaults {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackendDefaults): any => ({
    ...obj,
    ...(obj.clientPolicy && { clientPolicy: ClientPolicy.filterSensitiveLog(obj.clientPolicy) }),
  });
}

/**
 * <p>An object that represents a virtual service backend for a virtual node.</p>
 */
export interface VirtualServiceBackend {
  /**
   * <p>The name of the virtual service that is acting as a virtual node backend.</p>
   */
  virtualServiceName: string | undefined;

  /**
   * <p>A reference to an object that represents the client policy for a backend.</p>
   */
  clientPolicy?: ClientPolicy;
}

export namespace VirtualServiceBackend {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualServiceBackend): any => ({
    ...obj,
    ...(obj.clientPolicy && { clientPolicy: ClientPolicy.filterSensitiveLog(obj.clientPolicy) }),
  });
}

/**
 * <p>An object that represents the backends that a virtual node is expected to send outbound
 *          traffic to.</p>
 */
export type Backend = Backend.VirtualServiceMember | Backend.$UnknownMember;

export namespace Backend {
  /**
   * <p>Specifies a virtual service to use as a backend.  </p>
   */
  export interface VirtualServiceMember {
    virtualService: VirtualServiceBackend;
    $unknown?: never;
  }

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Backend): any => {
    if (obj.virtualService !== undefined)
      return { virtualService: VirtualServiceBackend.filterSensitiveLog(obj.virtualService) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualNodeGrpcConnectionPool {
  /**
   * <p>Maximum number of inflight requests Envoy can concurrently support across hosts in
   *          upstream cluster.</p>
   */
  maxRequests: number | undefined;
}

export namespace VirtualNodeGrpcConnectionPool {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualNodeGrpcConnectionPool): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualNodeHttpConnectionPool {
  /**
   * <p>Maximum number of outbound TCP connections Envoy can establish concurrently with all
   *          hosts in upstream cluster.</p>
   */
  maxConnections: number | undefined;

  /**
   * <p>Number of overflowing requests after <code>max_connections</code> Envoy will queue to
   *          upstream cluster.</p>
   */
  maxPendingRequests?: number;
}

export namespace VirtualNodeHttpConnectionPool {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualNodeHttpConnectionPool): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualNodeHttp2ConnectionPool {
  /**
   * <p>Maximum number of inflight requests Envoy can concurrently support across hosts in
   *          upstream cluster.</p>
   */
  maxRequests: number | undefined;
}

export namespace VirtualNodeHttp2ConnectionPool {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualNodeHttp2ConnectionPool): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualNodeTcpConnectionPool {
  /**
   * <p>Maximum number of outbound TCP connections Envoy can establish concurrently with all
   *          hosts in upstream cluster.</p>
   */
  maxConnections: number | undefined;
}

export namespace VirtualNodeTcpConnectionPool {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualNodeTcpConnectionPool): any => ({
    ...obj,
  });
}

/**
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

export namespace VirtualNodeConnectionPool {
  /**
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
   * <p>An object that represents a type of connection pool.</p>
   */
  export interface GrpcMember {
    tcp?: never;
    http?: never;
    http2?: never;
    grpc: VirtualNodeGrpcConnectionPool;
    $unknown?: never;
  }

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualNodeConnectionPool): any => {
    if (obj.tcp !== undefined) return { tcp: VirtualNodeTcpConnectionPool.filterSensitiveLog(obj.tcp) };
    if (obj.http !== undefined) return { http: VirtualNodeHttpConnectionPool.filterSensitiveLog(obj.http) };
    if (obj.http2 !== undefined) return { http2: VirtualNodeHttp2ConnectionPool.filterSensitiveLog(obj.http2) };
    if (obj.grpc !== undefined) return { grpc: VirtualNodeGrpcConnectionPool.filterSensitiveLog(obj.grpc) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export enum PortProtocol {
  GRPC = "grpc",
  HTTP = "http",
  HTTP2 = "http2",
  TCP = "tcp",
}

/**
 * <p>An object that represents the health check policy for a virtual node's listener.</p>
 */
export interface HealthCheckPolicy {
  /**
   * <p>The amount of time to wait when receiving a response from the health check, in
   *          milliseconds.</p>
   */
  timeoutMillis: number | undefined;

  /**
   * <p>The time period in milliseconds between each health check execution.</p>
   */
  intervalMillis: number | undefined;

  /**
   * <p>The protocol for the health check request. If you specify <code>grpc</code>, then your
   *          service must conform to the <a href="https://github.com/grpc/grpc/blob/master/doc/health-checking.md">GRPC Health
   *             Checking Protocol</a>.</p>
   */
  protocol: PortProtocol | string | undefined;

  /**
   * <p>The destination port for the health check request. This port must match the port defined
   *          in the <a>PortMapping</a> for the listener.</p>
   */
  port?: number;

  /**
   * <p>The destination path for the health check request. This value is only used if the
   *          specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.</p>
   */
  path?: string;

  /**
   * <p>The number of consecutive successful health checks that must occur before declaring
   *          listener healthy.</p>
   */
  healthyThreshold: number | undefined;

  /**
   * <p>The number of consecutive failed health checks that must occur before declaring a
   *          virtual node unhealthy. </p>
   */
  unhealthyThreshold: number | undefined;
}

export namespace HealthCheckPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HealthCheckPolicy): any => ({
    ...obj,
  });
}

export enum DurationUnit {
  MS = "ms",
  S = "s",
}

/**
 * <p>An object that represents a duration of time.</p>
 */
export interface Duration {
  /**
   * <p>A number of time units.</p>
   */
  value?: number;

  /**
   * <p>A unit of time.</p>
   */
  unit?: DurationUnit | string;
}

export namespace Duration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Duration): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the outlier detection for a virtual node's listener.</p>
 */
export interface OutlierDetection {
  /**
   * <p>Number of consecutive <code>5xx</code> errors required for ejection. </p>
   */
  maxServerErrors: number | undefined;

  /**
   * <p>The time interval between ejection sweep analysis.</p>
   */
  interval: Duration | undefined;

  /**
   * <p>The base amount of time for which a host is ejected.</p>
   */
  baseEjectionDuration: Duration | undefined;

  /**
   * <p>Maximum percentage of hosts in load balancing pool for upstream service that can be
   *          ejected. Will eject at least one host regardless of the value.</p>
   */
  maxEjectionPercent: number | undefined;
}

export namespace OutlierDetection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutlierDetection): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a port mapping.</p>
 */
export interface PortMapping {
  /**
   * <p>The port used for the port mapping.</p>
   */
  port: number | undefined;

  /**
   * <p>The protocol used for the port mapping. Specify one protocol.</p>
   */
  protocol: PortProtocol | string | undefined;
}

export namespace PortMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortMapping): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents types of timeouts. </p>
 */
export interface GrpcTimeout {
  /**
   * <p>An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh
   *                                   resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15
   *                                   seconds for the source and destination virtual node and the route.</p>
   */
  perRequest?: Duration;

  /**
   * <p>An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.</p>
   */
  idle?: Duration;
}

export namespace GrpcTimeout {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrpcTimeout): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents types of timeouts. </p>
 */
export interface HttpTimeout {
  /**
   * <p>An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh
   *                                   resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15
   *                                   seconds for the source and destination virtual node and the route.</p>
   */
  perRequest?: Duration;

  /**
   * <p>An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.</p>
   */
  idle?: Duration;
}

export namespace HttpTimeout {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpTimeout): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents types of timeouts. </p>
 */
export interface TcpTimeout {
  /**
   * <p>An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.</p>
   */
  idle?: Duration;
}

export namespace TcpTimeout {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TcpTimeout): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents timeouts for different protocols.</p>
 */
export type ListenerTimeout =
  | ListenerTimeout.GrpcMember
  | ListenerTimeout.HttpMember
  | ListenerTimeout.Http2Member
  | ListenerTimeout.TcpMember
  | ListenerTimeout.$UnknownMember;

export namespace ListenerTimeout {
  /**
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
   * <p>An object that represents types of timeouts. </p>
   */
  export interface GrpcMember {
    tcp?: never;
    http?: never;
    http2?: never;
    grpc: GrpcTimeout;
    $unknown?: never;
  }

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListenerTimeout): any => {
    if (obj.tcp !== undefined) return { tcp: TcpTimeout.filterSensitiveLog(obj.tcp) };
    if (obj.http !== undefined) return { http: HttpTimeout.filterSensitiveLog(obj.http) };
    if (obj.http2 !== undefined) return { http2: HttpTimeout.filterSensitiveLog(obj.http2) };
    if (obj.grpc !== undefined) return { grpc: GrpcTimeout.filterSensitiveLog(obj.grpc) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>An object that represents an AWS Certicate Manager (ACM) certificate.</p>
 */
export interface ListenerTlsAcmCertificate {
  /**
   * <p>The Amazon Resource Name (ARN) for the certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
   */
  certificateArn: string | undefined;
}

export namespace ListenerTlsAcmCertificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListenerTlsAcmCertificate): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a listener's Transport Layer Security (TLS) certificate.</p>
 */
export type ListenerTlsCertificate =
  | ListenerTlsCertificate.AcmMember
  | ListenerTlsCertificate.FileMember
  | ListenerTlsCertificate.SdsMember
  | ListenerTlsCertificate.$UnknownMember;

export namespace ListenerTlsCertificate {
  /**
   * <p>A reference to an object that represents an AWS Certicate Manager (ACM) certificate.</p>
   */
  export interface AcmMember {
    acm: ListenerTlsAcmCertificate;
    file?: never;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>A reference to an object that represents a local file certificate.</p>
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
   */
  export interface SdsMember {
    acm?: never;
    file?: never;
    sds: ListenerTlsSdsCertificate;
    $unknown?: never;
  }

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListenerTlsCertificate): any => {
    if (obj.acm !== undefined) return { acm: ListenerTlsAcmCertificate.filterSensitiveLog(obj.acm) };
    if (obj.file !== undefined) return { file: ListenerTlsFileCertificate.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: ListenerTlsSdsCertificate.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export enum ListenerTlsMode {
  DISABLED = "DISABLED",
  PERMISSIVE = "PERMISSIVE",
  STRICT = "STRICT",
}

/**
 * <p>An object that represents a listener's Transport Layer Security (TLS) validation context trust.</p>
 */
export type ListenerTlsValidationContextTrust =
  | ListenerTlsValidationContextTrust.FileMember
  | ListenerTlsValidationContextTrust.SdsMember
  | ListenerTlsValidationContextTrust.$UnknownMember;

export namespace ListenerTlsValidationContextTrust {
  /**
   * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
   */
  export interface FileMember {
    file: TlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }

  /**
   * <p>A reference to an object that represents a listener's Transport Layer Security (TLS) Secret Discovery Service
   *          validation context trust.</p>
   */
  export interface SdsMember {
    file?: never;
    sds: TlsValidationContextSdsTrust;
    $unknown?: never;
  }

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListenerTlsValidationContextTrust): any => {
    if (obj.file !== undefined) return { file: TlsValidationContextFileTrust.filterSensitiveLog(obj.file) };
    if (obj.sds !== undefined) return { sds: TlsValidationContextSdsTrust.filterSensitiveLog(obj.sds) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>An object that represents a listener's Transport Layer Security (TLS) validation context.</p>
 */
export interface ListenerTlsValidationContext {
  /**
   * <p>A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS)
   *          certificate.</p>
   */
  trust: ListenerTlsValidationContextTrust | undefined;

  /**
   * <p>A reference to an object that represents the SANs for a listener's Transport Layer Security (TLS) validation
   *          context.</p>
   */
  subjectAlternativeNames?: SubjectAlternativeNames;
}

export namespace ListenerTlsValidationContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListenerTlsValidationContext): any => ({
    ...obj,
    ...(obj.trust && { trust: ListenerTlsValidationContextTrust.filterSensitiveLog(obj.trust) }),
  });
}

/**
 * <p>An object that represents the Transport Layer Security (TLS) properties for a listener.</p>
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
   */
  mode: ListenerTlsMode | string | undefined;

  /**
   * <p>A reference to an object that represents a listener's Transport Layer Security (TLS) certificate.</p>
   */
  certificate: ListenerTlsCertificate | undefined;

  /**
   * <p>A reference to an object that represents a listener's Transport Layer Security (TLS) validation context.</p>
   */
  validation?: ListenerTlsValidationContext;
}

export namespace ListenerTls {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListenerTls): any => ({
    ...obj,
    ...(obj.certificate && { certificate: ListenerTlsCertificate.filterSensitiveLog(obj.certificate) }),
    ...(obj.validation && { validation: ListenerTlsValidationContext.filterSensitiveLog(obj.validation) }),
  });
}

/**
 * <p>An object that represents a listener for a virtual node.</p>
 */
export interface Listener {
  /**
   * <p>The port mapping information for the listener.</p>
   */
  portMapping: PortMapping | undefined;

  /**
   * <p>A reference to an object that represents the Transport Layer Security (TLS) properties for a listener.</p>
   */
  tls?: ListenerTls;

  /**
   * <p>The health check information for the listener.</p>
   */
  healthCheck?: HealthCheckPolicy;

  /**
   * <p>An object that represents timeouts for different protocols.</p>
   */
  timeout?: ListenerTimeout;

  /**
   * <p>The outlier detection information for the listener.</p>
   */
  outlierDetection?: OutlierDetection;

  /**
   * <p>The connection pool information for the listener.</p>
   */
  connectionPool?: VirtualNodeConnectionPool;
}

export namespace Listener {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Listener): any => ({
    ...obj,
    ...(obj.tls && { tls: ListenerTls.filterSensitiveLog(obj.tls) }),
    ...(obj.timeout && { timeout: ListenerTimeout.filterSensitiveLog(obj.timeout) }),
    ...(obj.connectionPool && { connectionPool: VirtualNodeConnectionPool.filterSensitiveLog(obj.connectionPool) }),
  });
}

/**
 * <p>An object that represents the logging information for a virtual node.</p>
 */
export interface Logging {
  /**
   * <p>The access log configuration for a virtual node.</p>
   */
  accessLog?: AccessLog;
}

export namespace Logging {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Logging): any => ({
    ...obj,
    ...(obj.accessLog && { accessLog: AccessLog.filterSensitiveLog(obj.accessLog) }),
  });
}

/**
 * <p>An object that represents the Cloud Map attribute information for your virtual
 *          node.</p>
 *          <note>
 *             <p>AWS Cloud Map is not available in the eu-south-1 Region.</p>
 *          </note>
 */
export interface AwsCloudMapInstanceAttribute {
  /**
   * <p>The name of an Cloud Map service instance attribute key. Any Cloud Map service
   *          instance that contains the specified key and value is returned.</p>
   */
  key: string | undefined;

  /**
   * <p>The value of an Cloud Map service instance attribute key. Any Cloud Map service
   *          instance that contains the specified key and value is returned.</p>
   */
  value: string | undefined;
}

export namespace AwsCloudMapInstanceAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudMapInstanceAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the Cloud Map service discovery information for your virtual
 *          node.</p>
 *          <note>
 *             <p>Cloud Map is not available in the eu-south-1 Region.</p>
 *          </note>
 */
export interface AwsCloudMapServiceDiscovery {
  /**
   * <p>The name of the Cloud Map namespace to use.</p>
   */
  namespaceName: string | undefined;

  /**
   * <p>The name of the Cloud Map service to use.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>A string map that contains attributes with values that you can use to filter instances
   *          by any custom attribute that you specified when you registered the instance. Only instances
   *          that match all of the specified key/value pairs will be returned.</p>
   */
  attributes?: AwsCloudMapInstanceAttribute[];
}

export namespace AwsCloudMapServiceDiscovery {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudMapServiceDiscovery): any => ({
    ...obj,
  });
}

export enum DnsResponseType {
  ENDPOINTS = "ENDPOINTS",
  LOADBALANCER = "LOADBALANCER",
}

/**
 * <p>An object that represents the DNS service discovery information for your virtual
 *          node.</p>
 */
export interface DnsServiceDiscovery {
  /**
   * <p>Specifies the DNS service discovery hostname for the virtual node. </p>
   */
  hostname: string | undefined;

  /**
   * <p>Specifies the DNS response type for the virtual node.</p>
   */
  responseType?: DnsResponseType | string;
}

export namespace DnsServiceDiscovery {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DnsServiceDiscovery): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the service discovery information for a virtual node.</p>
 */
export type ServiceDiscovery =
  | ServiceDiscovery.AwsCloudMapMember
  | ServiceDiscovery.DnsMember
  | ServiceDiscovery.$UnknownMember;

export namespace ServiceDiscovery {
  /**
   * <p>Specifies the DNS information for the virtual node.</p>
   */
  export interface DnsMember {
    dns: DnsServiceDiscovery;
    awsCloudMap?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies any Cloud Map information for the virtual node.</p>
   */
  export interface AwsCloudMapMember {
    dns?: never;
    awsCloudMap: AwsCloudMapServiceDiscovery;
    $unknown?: never;
  }

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceDiscovery): any => {
    if (obj.dns !== undefined) return { dns: DnsServiceDiscovery.filterSensitiveLog(obj.dns) };
    if (obj.awsCloudMap !== undefined)
      return { awsCloudMap: AwsCloudMapServiceDiscovery.filterSensitiveLog(obj.awsCloudMap) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>An object that represents the specification of a virtual node.</p>
 */
export interface VirtualNodeSpec {
  /**
   * <p>The service discovery information for the virtual node. If your virtual node does not
   *          expect ingress traffic, you can omit this parameter. If you specify a
   *          <code>listener</code>, then you must specify service discovery information.</p>
   */
  serviceDiscovery?: ServiceDiscovery;

  /**
   * <p>The listener that the virtual node is expected to receive inbound traffic from. You can
   *          specify one listener.</p>
   */
  listeners?: Listener[];

  /**
   * <p>The backends that the virtual node is expected to send outbound traffic to.</p>
   */
  backends?: Backend[];

  /**
   * <p>A reference to an object that represents the defaults for backends.</p>
   */
  backendDefaults?: BackendDefaults;

  /**
   * <p>The inbound and outbound access logging information for the virtual node.</p>
   */
  logging?: Logging;
}

export namespace VirtualNodeSpec {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualNodeSpec): any => ({
    ...obj,
    ...(obj.serviceDiscovery && { serviceDiscovery: ServiceDiscovery.filterSensitiveLog(obj.serviceDiscovery) }),
    ...(obj.listeners && { listeners: obj.listeners.map((item) => Listener.filterSensitiveLog(item)) }),
    ...(obj.backends && { backends: obj.backends.map((item) => Backend.filterSensitiveLog(item)) }),
    ...(obj.backendDefaults && { backendDefaults: BackendDefaults.filterSensitiveLog(obj.backendDefaults) }),
    ...(obj.logging && { logging: Logging.filterSensitiveLog(obj.logging) }),
  });
}

/**
 *
 */
export interface CreateVirtualNodeInput {
  /**
   * <p>The name to use for the virtual node.</p>
   */
  virtualNodeName: string | undefined;

  /**
   * <p>The name of the service mesh to create the virtual node in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The virtual node specification to apply.</p>
   */
  spec: VirtualNodeSpec | undefined;

  /**
   * <p>Optional metadata that you can apply to the virtual node to assist with categorization
   *          and organization. Each tag consists of a key and an optional value, both of which you
   *          define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace CreateVirtualNodeInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVirtualNodeInput): any => ({
    ...obj,
    ...(obj.spec && { spec: VirtualNodeSpec.filterSensitiveLog(obj.spec) }),
  });
}

export enum VirtualNodeStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE",
}

/**
 * <p>An object that represents the current status of the virtual node.</p>
 */
export interface VirtualNodeStatus {
  /**
   * <p>The current status of the virtual node.</p>
   */
  status: VirtualNodeStatusCode | string | undefined;
}

export namespace VirtualNodeStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualNodeStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a virtual node returned by a describe operation.</p>
 */
export interface VirtualNodeData {
  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual node.</p>
   */
  virtualNodeName: string | undefined;

  /**
   * <p>The specifications of the virtual node.</p>
   */
  spec: VirtualNodeSpec | undefined;

  /**
   * <p>The associated metadata for the virtual node.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The current status for the virtual node.</p>
   */
  status: VirtualNodeStatus | undefined;
}

export namespace VirtualNodeData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualNodeData): any => ({
    ...obj,
    ...(obj.spec && { spec: VirtualNodeSpec.filterSensitiveLog(obj.spec) }),
  });
}

/**
 *
 */
export interface CreateVirtualNodeOutput {
  /**
   * <p>The full description of your virtual node following the create call.</p>
   */
  virtualNode: VirtualNodeData | undefined;
}

export namespace CreateVirtualNodeOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVirtualNodeOutput): any => ({
    ...obj,
    ...(obj.virtualNode && { virtualNode: VirtualNodeData.filterSensitiveLog(obj.virtualNode) }),
  });
}

/**
 * <p>Deletes a virtual node input.</p>
 */
export interface DeleteVirtualNodeInput {
  /**
   * <p>The name of the virtual node to delete.</p>
   */
  virtualNodeName: string | undefined;

  /**
   * <p>The name of the service mesh to delete the virtual node in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace DeleteVirtualNodeInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVirtualNodeInput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface DeleteVirtualNodeOutput {
  /**
   * <p>The virtual node that was deleted.</p>
   */
  virtualNode: VirtualNodeData | undefined;
}

export namespace DeleteVirtualNodeOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVirtualNodeOutput): any => ({
    ...obj,
    ...(obj.virtualNode && { virtualNode: VirtualNodeData.filterSensitiveLog(obj.virtualNode) }),
  });
}

/**
 *
 */
export interface DescribeVirtualNodeInput {
  /**
   * <p>The name of the virtual node to describe.</p>
   */
  virtualNodeName: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace DescribeVirtualNodeInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVirtualNodeInput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface DescribeVirtualNodeOutput {
  /**
   * <p>The full description of your virtual node.</p>
   */
  virtualNode: VirtualNodeData | undefined;
}

export namespace DescribeVirtualNodeOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVirtualNodeOutput): any => ({
    ...obj,
    ...(obj.virtualNode && { virtualNode: VirtualNodeData.filterSensitiveLog(obj.virtualNode) }),
  });
}

/**
 *
 */
export interface ListVirtualNodesInput {
  /**
   * <p>The name of the service mesh to list virtual nodes in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualNodes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace ListVirtualNodesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVirtualNodesInput): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a virtual node returned by a list operation.</p>
 */
export interface VirtualNodeRef {
  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual node.</p>
   */
  virtualNodeName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;

  /**
   * <p>The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) for the virtual node.</p>
   */
  arn: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}

export namespace VirtualNodeRef {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualNodeRef): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface ListVirtualNodesOutput {
  /**
   * <p>The list of existing virtual nodes for the specified service mesh.</p>
   */
  virtualNodes: VirtualNodeRef[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualNodes</code>
   *          request. When the results of a <code>ListVirtualNodes</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListVirtualNodesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVirtualNodesOutput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface UpdateVirtualNodeInput {
  /**
   * <p>The name of the virtual node to update.</p>
   */
  virtualNodeName: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The new virtual node specification to apply. This overwrites the existing data.</p>
   */
  spec: VirtualNodeSpec | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace UpdateVirtualNodeInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVirtualNodeInput): any => ({
    ...obj,
    ...(obj.spec && { spec: VirtualNodeSpec.filterSensitiveLog(obj.spec) }),
  });
}

/**
 *
 */
export interface UpdateVirtualNodeOutput {
  /**
   * <p>A full description of the virtual node that was updated.</p>
   */
  virtualNode: VirtualNodeData | undefined;
}

export namespace UpdateVirtualNodeOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVirtualNodeOutput): any => ({
    ...obj,
    ...(obj.virtualNode && { virtualNode: VirtualNodeData.filterSensitiveLog(obj.virtualNode) }),
  });
}

/**
 * <p>An object that represents a virtual router listener.</p>
 */
export interface VirtualRouterListener {
  /**
   * <p>An object that represents a port mapping.</p>
   */
  portMapping: PortMapping | undefined;
}

export namespace VirtualRouterListener {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualRouterListener): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the specification of a virtual router.</p>
 */
export interface VirtualRouterSpec {
  /**
   * <p>The listeners that the virtual router is expected to receive inbound traffic from. You
   *          can specify one listener.</p>
   */
  listeners?: VirtualRouterListener[];
}

export namespace VirtualRouterSpec {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualRouterSpec): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface CreateVirtualRouterInput {
  /**
   * <p>The name to use for the virtual router.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The name of the service mesh to create the virtual router in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The virtual router specification to apply.</p>
   */
  spec: VirtualRouterSpec | undefined;

  /**
   * <p>Optional metadata that you can apply to the virtual router to assist with categorization
   *          and organization. Each tag consists of a key and an optional value, both of which you
   *          define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace CreateVirtualRouterInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVirtualRouterInput): any => ({
    ...obj,
  });
}

export enum VirtualRouterStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE",
}

/**
 * <p>An object that represents the status of a virtual router. </p>
 */
export interface VirtualRouterStatus {
  /**
   * <p>The current status of the virtual router.</p>
   */
  status: VirtualRouterStatusCode | string | undefined;
}

export namespace VirtualRouterStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualRouterStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a virtual router returned by a describe operation.</p>
 */
export interface VirtualRouterData {
  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual router.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The specifications of the virtual router.</p>
   */
  spec: VirtualRouterSpec | undefined;

  /**
   * <p>The associated metadata for the virtual router.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The current status of the virtual router.</p>
   */
  status: VirtualRouterStatus | undefined;
}

export namespace VirtualRouterData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualRouterData): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface CreateVirtualRouterOutput {
  /**
   * <p>The full description of your virtual router following the create call.</p>
   */
  virtualRouter: VirtualRouterData | undefined;
}

export namespace CreateVirtualRouterOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVirtualRouterOutput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface DeleteVirtualRouterInput {
  /**
   * <p>The name of the virtual router to delete.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The name of the service mesh to delete the virtual router in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace DeleteVirtualRouterInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVirtualRouterInput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface DeleteVirtualRouterOutput {
  /**
   * <p>The virtual router that was deleted.</p>
   */
  virtualRouter: VirtualRouterData | undefined;
}

export namespace DeleteVirtualRouterOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVirtualRouterOutput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface DescribeVirtualRouterInput {
  /**
   * <p>The name of the virtual router to describe.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace DescribeVirtualRouterInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVirtualRouterInput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface DescribeVirtualRouterOutput {
  /**
   * <p>The full description of your virtual router.</p>
   */
  virtualRouter: VirtualRouterData | undefined;
}

export namespace DescribeVirtualRouterOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVirtualRouterOutput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface ListVirtualRoutersInput {
  /**
   * <p>The name of the service mesh to list virtual routers in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualRouters</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace ListVirtualRoutersInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVirtualRoutersInput): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a virtual router returned by a list operation.</p>
 */
export interface VirtualRouterRef {
  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual router.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;

  /**
   * <p>The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) for the virtual router.</p>
   */
  arn: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}

export namespace VirtualRouterRef {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualRouterRef): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface ListVirtualRoutersOutput {
  /**
   * <p>The list of existing virtual routers for the specified service mesh.</p>
   */
  virtualRouters: VirtualRouterRef[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualRouters</code>
   *          request. When the results of a <code>ListVirtualRouters</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListVirtualRoutersOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVirtualRoutersOutput): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a target and its relative weight. Traffic is distributed
 *          across targets according to their relative weight. For example, a weighted target with a
 *          relative weight of 50 receives five times as much traffic as one with a relative weight of
 *          10. The total weight for all targets combined must be less than or equal to 100.</p>
 */
export interface WeightedTarget {
  /**
   * <p>The virtual node to associate with the weighted target.</p>
   */
  virtualNode: string | undefined;

  /**
   * <p>The relative weight of the weighted target.</p>
   */
  weight: number | undefined;
}

export namespace WeightedTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WeightedTarget): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface GrpcRouteAction {
  /**
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   */
  weightedTargets: WeightedTarget[] | undefined;
}

export namespace GrpcRouteAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrpcRouteAction): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the match method. Specify one of the match values.</p>
 */
export type GrpcRouteMetadataMatchMethod =
  | GrpcRouteMetadataMatchMethod.ExactMember
  | GrpcRouteMetadataMatchMethod.PrefixMember
  | GrpcRouteMetadataMatchMethod.RangeMember
  | GrpcRouteMetadataMatchMethod.RegexMember
  | GrpcRouteMetadataMatchMethod.SuffixMember
  | GrpcRouteMetadataMatchMethod.$UnknownMember;

export namespace GrpcRouteMetadataMatchMethod {
  /**
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrpcRouteMetadataMatchMethod): any => {
    if (obj.exact !== undefined) return { exact: obj.exact };
    if (obj.regex !== undefined) return { regex: obj.regex };
    if (obj.range !== undefined) return { range: MatchRange.filterSensitiveLog(obj.range) };
    if (obj.prefix !== undefined) return { prefix: obj.prefix };
    if (obj.suffix !== undefined) return { suffix: obj.suffix };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>An object that represents the match metadata for the route.</p>
 */
export interface GrpcRouteMetadata {
  /**
   * <p>The name of the route.</p>
   */
  name: string | undefined;

  /**
   * <p>Specify <code>True</code> to match anything except the match criteria. The default value is <code>False</code>.</p>
   */
  invert?: boolean;

  /**
   * <p>An object that represents the data to match from the request.</p>
   */
  match?: GrpcRouteMetadataMatchMethod;
}

export namespace GrpcRouteMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrpcRouteMetadata): any => ({
    ...obj,
    ...(obj.match && { match: GrpcRouteMetadataMatchMethod.filterSensitiveLog(obj.match) }),
  });
}

/**
 * <p>An object that represents the criteria for determining a request match.</p>
 */
export interface GrpcRouteMatch {
  /**
   * <p>The fully qualified domain name for the service to match from the request.</p>
   */
  serviceName?: string;

  /**
   * <p>The method name to match from the request. If you specify a name, you must also specify
   *          a <code>serviceName</code>.</p>
   */
  methodName?: string;

  /**
   * <p>An object that represents the data to match from the request.</p>
   */
  metadata?: GrpcRouteMetadata[];
}

export namespace GrpcRouteMatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrpcRouteMatch): any => ({
    ...obj,
    ...(obj.metadata && { metadata: obj.metadata.map((item) => GrpcRouteMetadata.filterSensitiveLog(item)) }),
  });
}

export enum GrpcRetryPolicyEvent {
  CANCELLED = "cancelled",
  DEADLINE_EXCEEDED = "deadline-exceeded",
  INTERNAL = "internal",
  RESOURCE_EXHAUSTED = "resource-exhausted",
  UNAVAILABLE = "unavailable",
}

export enum TcpRetryPolicyEvent {
  CONNECTION_ERROR = "connection-error",
}

/**
 * <p>An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>.
 *                Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the
 *                <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>.</p>
 */
export interface GrpcRetryPolicy {
  /**
   * <p>The timeout for each retry attempt.</p>
   */
  perRetryTimeout: Duration | undefined;

  /**
   * <p>The maximum number of retry attempts.</p>
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
   */
  httpRetryEvents?: string[];

  /**
   * <p>Specify a valid value. The event occurs before any processing of a request has started and is encountered when the upstream is temporarily or permanently unavailable.</p>
   */
  tcpRetryEvents?: (TcpRetryPolicyEvent | string)[];

  /**
   * <p>Specify at least one of the valid values.</p>
   */
  grpcRetryEvents?: (GrpcRetryPolicyEvent | string)[];
}

export namespace GrpcRetryPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrpcRetryPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a gRPC route type.</p>
 */
export interface GrpcRoute {
  /**
   * <p>An object that represents the action to take if a match is determined.</p>
   */
  action: GrpcRouteAction | undefined;

  /**
   * <p>An object that represents the criteria for determining a request match.</p>
   */
  match: GrpcRouteMatch | undefined;

  /**
   * <p>An object that represents a retry policy.</p>
   */
  retryPolicy?: GrpcRetryPolicy;

  /**
   * <p>An object that represents types of timeouts. </p>
   */
  timeout?: GrpcTimeout;
}

export namespace GrpcRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrpcRoute): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface HttpRouteAction {
  /**
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   */
  weightedTargets: WeightedTarget[] | undefined;
}

export namespace HttpRouteAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpRouteAction): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the HTTP header in the request.</p>
 */
export interface HttpRouteHeader {
  /**
   * <p>A name for the HTTP header in the client request that will be matched on.</p>
   */
  name: string | undefined;

  /**
   * <p>Specify <code>True</code> to match anything except the match criteria. The default value is <code>False</code>.</p>
   */
  invert?: boolean;

  /**
   * <p>The <code>HeaderMatchMethod</code> object.</p>
   */
  match?: HeaderMatchMethod;
}

export namespace HttpRouteHeader {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpRouteHeader): any => ({
    ...obj,
    ...(obj.match && { match: HeaderMatchMethod.filterSensitiveLog(obj.match) }),
  });
}

export enum HttpScheme {
  HTTP = "http",
  HTTPS = "https",
}

/**
 * <p>An object that represents the requirements for a route to match HTTP requests for a
 *          virtual router.</p>
 */
export interface HttpRouteMatch {
  /**
   * <p>Specifies the path to match requests with. This parameter must always start with
   *             <code>/</code>, which by itself matches all requests to the virtual service name. You
   *          can also match for path-based routing of requests. For example, if your virtual service
   *          name is <code>my-service.local</code> and you want the route to match requests to
   *             <code>my-service.local/metrics</code>, your prefix should be
   *          <code>/metrics</code>.</p>
   */
  prefix?: string;

  /**
   * <p>The client request path to match on.</p>
   */
  path?: HttpPathMatch;

  /**
   * <p>The client request query parameters to match on.</p>
   */
  queryParameters?: HttpQueryParameter[];

  /**
   * <p>The client request method to match on. Specify only one.</p>
   */
  method?: HttpMethod | string;

  /**
   * <p>The client request scheme to match on. Specify only one. Applicable only for HTTP2
   *          routes.</p>
   */
  scheme?: HttpScheme | string;

  /**
   * <p>The client request headers to match on.</p>
   */
  headers?: HttpRouteHeader[];
}

export namespace HttpRouteMatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpRouteMatch): any => ({
    ...obj,
    ...(obj.headers && { headers: obj.headers.map((item) => HttpRouteHeader.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>.
 *                Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the
 *                <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>.</p>
 */
export interface HttpRetryPolicy {
  /**
   * <p>The timeout for each retry attempt.</p>
   */
  perRetryTimeout: Duration | undefined;

  /**
   * <p>The maximum number of retry attempts.</p>
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
   */
  httpRetryEvents?: string[];

  /**
   * <p>Specify a valid value. The event occurs before any processing of a request has started and is encountered when the upstream is temporarily or permanently unavailable.</p>
   */
  tcpRetryEvents?: (TcpRetryPolicyEvent | string)[];
}

export namespace HttpRetryPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpRetryPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents an HTTP or HTTP/2 route type.</p>
 */
export interface HttpRoute {
  /**
   * <p>An object that represents the criteria for determining a request match.</p>
   */
  match: HttpRouteMatch | undefined;

  /**
   * <p>An object that represents the action to take if a match is determined.</p>
   */
  action: HttpRouteAction | undefined;

  /**
   * <p>An object that represents a retry policy.</p>
   */
  retryPolicy?: HttpRetryPolicy;

  /**
   * <p>An object that represents types of timeouts. </p>
   */
  timeout?: HttpTimeout;
}

export namespace HttpRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpRoute): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface TcpRouteAction {
  /**
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   */
  weightedTargets: WeightedTarget[] | undefined;
}

export namespace TcpRouteAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TcpRouteAction): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a TCP route type.</p>
 */
export interface TcpRoute {
  /**
   * <p>The action to take if a match is determined.</p>
   */
  action: TcpRouteAction | undefined;

  /**
   * <p>An object that represents types of timeouts. </p>
   */
  timeout?: TcpTimeout;
}

export namespace TcpRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TcpRoute): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a route specification. Specify one route type.</p>
 */
export interface RouteSpec {
  /**
   * <p>The priority for the route. Routes are matched based on the specified value, where 0 is
   *          the highest priority.</p>
   */
  priority?: number;

  /**
   * <p>An object that represents the specification of an HTTP route.</p>
   */
  httpRoute?: HttpRoute;

  /**
   * <p>An object that represents the specification of a TCP route.</p>
   */
  tcpRoute?: TcpRoute;

  /**
   * <p>An object that represents the specification of an HTTP/2 route.</p>
   */
  http2Route?: HttpRoute;

  /**
   * <p>An object that represents the specification of a gRPC route.</p>
   */
  grpcRoute?: GrpcRoute;
}

export namespace RouteSpec {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteSpec): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface CreateRouteInput {
  /**
   * <p>The name to use for the route.</p>
   */
  routeName: string | undefined;

  /**
   * <p>The name of the service mesh to create the route in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual router in which to create the route. If the virtual router is in
   *          a shared mesh, then you must be the owner of the virtual router resource.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The route specification to apply.</p>
   */
  spec: RouteSpec | undefined;

  /**
   * <p>Optional metadata that you can apply to the route to assist with categorization and
   *          organization. Each tag consists of a key and an optional value, both of which you define.
   *          Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace CreateRouteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRouteInput): any => ({
    ...obj,
  });
}

export enum RouteStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE",
}

/**
 * <p>An object that represents the current status of a route.</p>
 */
export interface RouteStatus {
  /**
   * <p>The current status for the route.</p>
   */
  status: RouteStatusCode | string | undefined;
}

export namespace RouteStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a route returned by a describe operation.</p>
 */
export interface RouteData {
  /**
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The name of the route.</p>
   */
  routeName: string | undefined;

  /**
   * <p>The specifications of the route.</p>
   */
  spec: RouteSpec | undefined;

  /**
   * <p>The associated metadata for the route.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The status of the route.</p>
   */
  status: RouteStatus | undefined;
}

export namespace RouteData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteData): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface CreateRouteOutput {
  /**
   * <p>The full description of your mesh following the create call.</p>
   */
  route: RouteData | undefined;
}

export namespace CreateRouteOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRouteOutput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface DeleteRouteInput {
  /**
   * <p>The name of the route to delete.</p>
   */
  routeName: string | undefined;

  /**
   * <p>The name of the service mesh to delete the route in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual router to delete the route in.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace DeleteRouteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRouteInput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface DeleteRouteOutput {
  /**
   * <p>The route that was deleted.</p>
   */
  route: RouteData | undefined;
}

export namespace DeleteRouteOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRouteOutput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface DescribeRouteInput {
  /**
   * <p>The name of the route to describe.</p>
   */
  routeName: string | undefined;

  /**
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

  /**
   * <p>The name of the virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace DescribeRouteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRouteInput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface DescribeRouteOutput {
  /**
   * <p>The full description of your route.</p>
   */
  route: RouteData | undefined;
}

export namespace DescribeRouteOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRouteOutput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface ListRoutesInput {
  /**
   * <p>The name of the service mesh to list routes in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual router to list routes in.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListRoutes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace ListRoutesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRoutesInput): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a route returned by a list operation.</p>
 */
export interface RouteRef {
  /**
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The name of the route.</p>
   */
  routeName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;

  /**
   * <p>The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) for the route.</p>
   */
  arn: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}

export namespace RouteRef {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteRef): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface ListRoutesOutput {
  /**
   * <p>The list of existing routes for the specified service mesh and virtual router.</p>
   */
  routes: RouteRef[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListRoutes</code> request.
   *          When the results of a <code>ListRoutes</code> request exceed <code>limit</code>, you can
   *          use this value to retrieve the next page of results. This value is <code>null</code> when
   *          there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListRoutesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRoutesOutput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface UpdateRouteInput {
  /**
   * <p>The name of the route to update.</p>
   */
  routeName: string | undefined;

  /**
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The new route specification to apply. This overwrites the existing data.</p>
   */
  spec: RouteSpec | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace UpdateRouteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRouteInput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface UpdateRouteOutput {
  /**
   * <p>A full description of the route that was updated.</p>
   */
  route: RouteData | undefined;
}

export namespace UpdateRouteOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRouteOutput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface UpdateVirtualRouterInput {
  /**
   * <p>The name of the virtual router to update.</p>
   */
  virtualRouterName: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The new virtual router specification to apply. This overwrites the existing data.</p>
   */
  spec: VirtualRouterSpec | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace UpdateVirtualRouterInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVirtualRouterInput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface UpdateVirtualRouterOutput {
  /**
   * <p>A full description of the virtual router that was updated.</p>
   */
  virtualRouter: VirtualRouterData | undefined;
}

export namespace UpdateVirtualRouterOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVirtualRouterOutput): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a virtual node service provider.</p>
 */
export interface VirtualNodeServiceProvider {
  /**
   * <p>The name of the virtual node that is acting as a service provider.</p>
   */
  virtualNodeName: string | undefined;
}

export namespace VirtualNodeServiceProvider {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualNodeServiceProvider): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a virtual node service provider.</p>
 */
export interface VirtualRouterServiceProvider {
  /**
   * <p>The name of the virtual router that is acting as a service provider.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace VirtualRouterServiceProvider {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualRouterServiceProvider): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents the provider for a virtual service.</p>
 */
export type VirtualServiceProvider =
  | VirtualServiceProvider.VirtualNodeMember
  | VirtualServiceProvider.VirtualRouterMember
  | VirtualServiceProvider.$UnknownMember;

export namespace VirtualServiceProvider {
  /**
   * <p>The virtual node associated with a virtual service.</p>
   */
  export interface VirtualNodeMember {
    virtualNode: VirtualNodeServiceProvider;
    virtualRouter?: never;
    $unknown?: never;
  }

  /**
   * <p>The virtual router associated with a virtual service.</p>
   */
  export interface VirtualRouterMember {
    virtualNode?: never;
    virtualRouter: VirtualRouterServiceProvider;
    $unknown?: never;
  }

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualServiceProvider): any => {
    if (obj.virtualNode !== undefined)
      return { virtualNode: VirtualNodeServiceProvider.filterSensitiveLog(obj.virtualNode) };
    if (obj.virtualRouter !== undefined)
      return { virtualRouter: VirtualRouterServiceProvider.filterSensitiveLog(obj.virtualRouter) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>An object that represents the specification of a virtual service.</p>
 */
export interface VirtualServiceSpec {
  /**
   * <p>The App Mesh object that is acting as the provider for a virtual service. You can specify
   *          a single virtual node or virtual router.</p>
   */
  provider?: VirtualServiceProvider;
}

export namespace VirtualServiceSpec {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualServiceSpec): any => ({
    ...obj,
    ...(obj.provider && { provider: VirtualServiceProvider.filterSensitiveLog(obj.provider) }),
  });
}

/**
 *
 */
export interface CreateVirtualServiceInput {
  /**
   * <p>The name to use for the virtual service.</p>
   */
  virtualServiceName: string | undefined;

  /**
   * <p>The name of the service mesh to create the virtual service in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The virtual service specification to apply.</p>
   */
  spec: VirtualServiceSpec | undefined;

  /**
   * <p>Optional metadata that you can apply to the virtual service to assist with
   *          categorization and organization. Each tag consists of a key and an optional value, both of
   *          which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace CreateVirtualServiceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVirtualServiceInput): any => ({
    ...obj,
    ...(obj.spec && { spec: VirtualServiceSpec.filterSensitiveLog(obj.spec) }),
  });
}

export enum VirtualServiceStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE",
}

/**
 * <p>An object that represents the status of a virtual service.</p>
 */
export interface VirtualServiceStatus {
  /**
   * <p>The current status of the virtual service.</p>
   */
  status: VirtualServiceStatusCode | string | undefined;
}

export namespace VirtualServiceStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualServiceStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a virtual service returned by a describe operation.</p>
 */
export interface VirtualServiceData {
  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual service.</p>
   */
  virtualServiceName: string | undefined;

  /**
   * <p>The specifications of the virtual service.</p>
   */
  spec: VirtualServiceSpec | undefined;

  /**
   * <p>An object that represents metadata for a resource.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The current status of the virtual service.</p>
   */
  status: VirtualServiceStatus | undefined;
}

export namespace VirtualServiceData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualServiceData): any => ({
    ...obj,
    ...(obj.spec && { spec: VirtualServiceSpec.filterSensitiveLog(obj.spec) }),
  });
}

/**
 *
 */
export interface CreateVirtualServiceOutput {
  /**
   * <p>The full description of your virtual service following the create call.</p>
   */
  virtualService: VirtualServiceData | undefined;
}

export namespace CreateVirtualServiceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVirtualServiceOutput): any => ({
    ...obj,
    ...(obj.virtualService && { virtualService: VirtualServiceData.filterSensitiveLog(obj.virtualService) }),
  });
}

/**
 *
 */
export interface DeleteVirtualServiceInput {
  /**
   * <p>The name of the virtual service to delete.</p>
   */
  virtualServiceName: string | undefined;

  /**
   * <p>The name of the service mesh to delete the virtual service in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace DeleteVirtualServiceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVirtualServiceInput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface DeleteVirtualServiceOutput {
  /**
   * <p>The virtual service that was deleted.</p>
   */
  virtualService: VirtualServiceData | undefined;
}

export namespace DeleteVirtualServiceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVirtualServiceOutput): any => ({
    ...obj,
    ...(obj.virtualService && { virtualService: VirtualServiceData.filterSensitiveLog(obj.virtualService) }),
  });
}

/**
 *
 */
export interface DescribeVirtualServiceInput {
  /**
   * <p>The name of the virtual service to describe.</p>
   */
  virtualServiceName: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace DescribeVirtualServiceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVirtualServiceInput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface DescribeVirtualServiceOutput {
  /**
   * <p>The full description of your virtual service.</p>
   */
  virtualService: VirtualServiceData | undefined;
}

export namespace DescribeVirtualServiceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVirtualServiceOutput): any => ({
    ...obj,
    ...(obj.virtualService && { virtualService: VirtualServiceData.filterSensitiveLog(obj.virtualService) }),
  });
}

/**
 *
 */
export interface ListVirtualServicesInput {
  /**
   * <p>The name of the service mesh to list virtual services in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualServices</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace ListVirtualServicesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVirtualServicesInput): any => ({
    ...obj,
  });
}

/**
 * <p>An object that represents a virtual service returned by a list operation.</p>
 */
export interface VirtualServiceRef {
  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual service.</p>
   */
  virtualServiceName: string | undefined;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;

  /**
   * <p>The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) for the virtual service.</p>
   */
  arn: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}

export namespace VirtualServiceRef {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualServiceRef): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface ListVirtualServicesOutput {
  /**
   * <p>The list of existing virtual services for the specified service mesh.</p>
   */
  virtualServices: VirtualServiceRef[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualServices</code>
   *          request. When the results of a <code>ListVirtualServices</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListVirtualServicesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVirtualServicesOutput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface UpdateVirtualServiceInput {
  /**
   * <p>The name of the virtual service to update.</p>
   */
  virtualServiceName: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The new virtual service specification to apply. This overwrites the existing
   *          data.</p>
   */
  spec: VirtualServiceSpec | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace UpdateVirtualServiceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVirtualServiceInput): any => ({
    ...obj,
    ...(obj.spec && { spec: VirtualServiceSpec.filterSensitiveLog(obj.spec) }),
  });
}

/**
 *
 */
export interface UpdateVirtualServiceOutput {
  /**
   * <p>A full description of the virtual service that was updated.</p>
   */
  virtualService: VirtualServiceData | undefined;
}

export namespace UpdateVirtualServiceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVirtualServiceOutput): any => ({
    ...obj,
    ...(obj.virtualService && { virtualService: VirtualServiceData.filterSensitiveLog(obj.virtualService) }),
  });
}

/**
 *
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to add tags to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.
   *          Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags: TagRef[] | undefined;
}

export namespace TagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface TagResourceOutput {}

export namespace TagResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The request exceeds the maximum allowed number of tags allowed per resource. The current
 *          limit is 50 user tags per resource. You must reduce the number of tags in the request. None
 *          of the tags in this request were applied.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  message?: string;
}

export namespace TooManyTagsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to delete tags from.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
  });
}

/**
 *
 */
export interface UntagResourceOutput {}

export namespace UntagResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceOutput): any => ({
    ...obj,
  });
}
