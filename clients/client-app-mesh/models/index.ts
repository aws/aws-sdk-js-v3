import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An object that represents the access logging information for a virtual node.</p>
 */
export type AccessLog = AccessLog.FileMember | AccessLog.$UnknownMember;

export namespace AccessLog {
  interface $Base {
    __type?: "AccessLog";
  }
  /**
   * <p>The file object to send virtual node access logs to.</p>
   */
  export interface FileMember extends $Base {
    file: FileAccessLog;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    file?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    file: (value: FileAccessLog) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(value: AccessLog, visitor: Visitor<T>): T {
    if (value.file !== undefined) return visitor.file(value.file);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

/**
 * <p>An object that represents the AWS Cloud Map attribute information for your virtual
 *          node.</p>
 */
export interface AwsCloudMapInstanceAttribute {
  __type?: "AwsCloudMapInstanceAttribute";
  /**
   * <p>The name of an AWS Cloud Map service instance attribute key. Any AWS Cloud Map service
   *          instance that contains the specified key and value is returned.</p>
   */
  key: string | undefined;

  /**
   * <p>The value of an AWS Cloud Map service instance attribute key. Any AWS Cloud Map service
   *          instance that contains the specified key and value is returned.</p>
   */
  value: string | undefined;
}

export namespace AwsCloudMapInstanceAttribute {
  export function isa(o: any): o is AwsCloudMapInstanceAttribute {
    return __isa(o, "AwsCloudMapInstanceAttribute");
  }
}

/**
 * <p>An object that represents the AWS Cloud Map service discovery information for your virtual
 *          node.</p>
 */
export interface AwsCloudMapServiceDiscovery {
  __type?: "AwsCloudMapServiceDiscovery";
  /**
   * <p>A string map that contains attributes with values that you can use to filter instances
   *          by any custom attribute that you specified when you registered the instance. Only instances
   *          that match all of the specified key/value pairs will be returned.</p>
   */
  attributes?: Array<AwsCloudMapInstanceAttribute>;

  /**
   * <p>The name of the AWS Cloud Map namespace to use.</p>
   */
  namespaceName: string | undefined;

  /**
   * <p>The name of the AWS Cloud Map service to use.</p>
   */
  serviceName: string | undefined;
}

export namespace AwsCloudMapServiceDiscovery {
  export function isa(o: any): o is AwsCloudMapServiceDiscovery {
    return __isa(o, "AwsCloudMapServiceDiscovery");
  }
}

/**
 * <p>An object that represents the backends that a virtual node is expected to send outbound
 *          traffic to. </p>
 */
export type Backend = Backend.VirtualServiceMember | Backend.$UnknownMember;

export namespace Backend {
  interface $Base {
    __type?: "Backend";
  }
  /**
   * <p>Specifies a virtual service to use as a backend for a virtual node. </p>
   */
  export interface VirtualServiceMember extends $Base {
    virtualService: VirtualServiceBackend;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    virtualService?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    virtualService: (value: VirtualServiceBackend) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(value: Backend, visitor: Visitor<T>): T {
    if (value.virtualService !== undefined)
      return visitor.virtualService(value.virtualService);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

/**
 * <p>The request syntax was malformed. Check your request syntax and try again.</p>
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return __isa(o, "BadRequestException");
  }
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
  export function isa(o: any): o is ConflictException {
    return __isa(o, "ConflictException");
  }
}

/**
 *
 */
export interface CreateMeshInput {
  __type?: "CreateMeshInput";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

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
  tags?: Array<TagRef>;
}

export namespace CreateMeshInput {
  export function isa(o: any): o is CreateMeshInput {
    return __isa(o, "CreateMeshInput");
  }
}

/**
 *
 */
export interface CreateMeshOutput {
  __type?: "CreateMeshOutput";
  /**
   * <p>The full description of your service mesh following the create call.</p>
   */
  mesh: MeshData | undefined;
}

export namespace CreateMeshOutput {
  export function isa(o: any): o is CreateMeshOutput {
    return __isa(o, "CreateMeshOutput");
  }
}

/**
 *
 */
export interface CreateRouteInput {
  __type?: "CreateRouteInput";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the service mesh to create the route in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name to use for the route.</p>
   */
  routeName: string | undefined;

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
  tags?: Array<TagRef>;

  /**
   * <p>The name of the virtual router in which to create the route.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace CreateRouteInput {
  export function isa(o: any): o is CreateRouteInput {
    return __isa(o, "CreateRouteInput");
  }
}

/**
 *
 */
export interface CreateRouteOutput {
  __type?: "CreateRouteOutput";
  /**
   * <p>The full description of your mesh following the create call.</p>
   */
  route: RouteData | undefined;
}

export namespace CreateRouteOutput {
  export function isa(o: any): o is CreateRouteOutput {
    return __isa(o, "CreateRouteOutput");
  }
}

/**
 *
 */
export interface CreateVirtualNodeInput {
  __type?: "CreateVirtualNodeInput";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

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
  tags?: Array<TagRef>;

  /**
   * <p>The name to use for the virtual node.</p>
   */
  virtualNodeName: string | undefined;
}

export namespace CreateVirtualNodeInput {
  export function isa(o: any): o is CreateVirtualNodeInput {
    return __isa(o, "CreateVirtualNodeInput");
  }
}

/**
 *
 */
export interface CreateVirtualNodeOutput {
  __type?: "CreateVirtualNodeOutput";
  /**
   * <p>The full description of your virtual node following the create call.</p>
   */
  virtualNode: VirtualNodeData | undefined;
}

export namespace CreateVirtualNodeOutput {
  export function isa(o: any): o is CreateVirtualNodeOutput {
    return __isa(o, "CreateVirtualNodeOutput");
  }
}

/**
 *
 */
export interface CreateVirtualRouterInput {
  __type?: "CreateVirtualRouterInput";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

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
  tags?: Array<TagRef>;

  /**
   * <p>The name to use for the virtual router.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace CreateVirtualRouterInput {
  export function isa(o: any): o is CreateVirtualRouterInput {
    return __isa(o, "CreateVirtualRouterInput");
  }
}

/**
 *
 */
export interface CreateVirtualRouterOutput {
  __type?: "CreateVirtualRouterOutput";
  /**
   * <p>The full description of your virtual router following the create call.</p>
   */
  virtualRouter: VirtualRouterData | undefined;
}

export namespace CreateVirtualRouterOutput {
  export function isa(o: any): o is CreateVirtualRouterOutput {
    return __isa(o, "CreateVirtualRouterOutput");
  }
}

/**
 *
 */
export interface CreateVirtualServiceInput {
  __type?: "CreateVirtualServiceInput";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

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
  tags?: Array<TagRef>;

  /**
   * <p>The name to use for the virtual service.</p>
   */
  virtualServiceName: string | undefined;
}

export namespace CreateVirtualServiceInput {
  export function isa(o: any): o is CreateVirtualServiceInput {
    return __isa(o, "CreateVirtualServiceInput");
  }
}

/**
 *
 */
export interface CreateVirtualServiceOutput {
  __type?: "CreateVirtualServiceOutput";
  /**
   * <p>The full description of your virtual service following the create call.</p>
   */
  virtualService: VirtualServiceData | undefined;
}

export namespace CreateVirtualServiceOutput {
  export function isa(o: any): o is CreateVirtualServiceOutput {
    return __isa(o, "CreateVirtualServiceOutput");
  }
}

/**
 *
 */
export interface DeleteMeshInput {
  __type?: "DeleteMeshInput";
  /**
   * <p>The name of the service mesh to delete.</p>
   */
  meshName: string | undefined;
}

export namespace DeleteMeshInput {
  export function isa(o: any): o is DeleteMeshInput {
    return __isa(o, "DeleteMeshInput");
  }
}

/**
 *
 */
export interface DeleteMeshOutput {
  __type?: "DeleteMeshOutput";
  /**
   * <p>The service mesh that was deleted.</p>
   */
  mesh: MeshData | undefined;
}

export namespace DeleteMeshOutput {
  export function isa(o: any): o is DeleteMeshOutput {
    return __isa(o, "DeleteMeshOutput");
  }
}

/**
 *
 */
export interface DeleteRouteInput {
  __type?: "DeleteRouteInput";
  /**
   * <p>The name of the service mesh to delete the route in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the route to delete.</p>
   */
  routeName: string | undefined;

  /**
   * <p>The name of the virtual router to delete the route in.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace DeleteRouteInput {
  export function isa(o: any): o is DeleteRouteInput {
    return __isa(o, "DeleteRouteInput");
  }
}

/**
 *
 */
export interface DeleteRouteOutput {
  __type?: "DeleteRouteOutput";
  /**
   * <p>The route that was deleted.</p>
   */
  route: RouteData | undefined;
}

export namespace DeleteRouteOutput {
  export function isa(o: any): o is DeleteRouteOutput {
    return __isa(o, "DeleteRouteOutput");
  }
}

/**
 *
 */
export interface DeleteVirtualNodeInput {
  __type?: "DeleteVirtualNodeInput";
  /**
   * <p>The name of the service mesh to delete the virtual node in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual node to delete.</p>
   */
  virtualNodeName: string | undefined;
}

export namespace DeleteVirtualNodeInput {
  export function isa(o: any): o is DeleteVirtualNodeInput {
    return __isa(o, "DeleteVirtualNodeInput");
  }
}

/**
 *
 */
export interface DeleteVirtualNodeOutput {
  __type?: "DeleteVirtualNodeOutput";
  /**
   * <p>The virtual node that was deleted.</p>
   */
  virtualNode: VirtualNodeData | undefined;
}

export namespace DeleteVirtualNodeOutput {
  export function isa(o: any): o is DeleteVirtualNodeOutput {
    return __isa(o, "DeleteVirtualNodeOutput");
  }
}

/**
 *
 */
export interface DeleteVirtualRouterInput {
  __type?: "DeleteVirtualRouterInput";
  /**
   * <p>The name of the service mesh to delete the virtual router in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual router to delete.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace DeleteVirtualRouterInput {
  export function isa(o: any): o is DeleteVirtualRouterInput {
    return __isa(o, "DeleteVirtualRouterInput");
  }
}

/**
 *
 */
export interface DeleteVirtualRouterOutput {
  __type?: "DeleteVirtualRouterOutput";
  /**
   * <p>The virtual router that was deleted.</p>
   */
  virtualRouter: VirtualRouterData | undefined;
}

export namespace DeleteVirtualRouterOutput {
  export function isa(o: any): o is DeleteVirtualRouterOutput {
    return __isa(o, "DeleteVirtualRouterOutput");
  }
}

/**
 *
 */
export interface DeleteVirtualServiceInput {
  __type?: "DeleteVirtualServiceInput";
  /**
   * <p>The name of the service mesh to delete the virtual service in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual service to delete.</p>
   */
  virtualServiceName: string | undefined;
}

export namespace DeleteVirtualServiceInput {
  export function isa(o: any): o is DeleteVirtualServiceInput {
    return __isa(o, "DeleteVirtualServiceInput");
  }
}

/**
 *
 */
export interface DeleteVirtualServiceOutput {
  __type?: "DeleteVirtualServiceOutput";
  /**
   * <p>The virtual service that was deleted.</p>
   */
  virtualService: VirtualServiceData | undefined;
}

export namespace DeleteVirtualServiceOutput {
  export function isa(o: any): o is DeleteVirtualServiceOutput {
    return __isa(o, "DeleteVirtualServiceOutput");
  }
}

/**
 *
 */
export interface DescribeMeshInput {
  __type?: "DescribeMeshInput";
  /**
   * <p>The name of the service mesh to describe.</p>
   */
  meshName: string | undefined;
}

export namespace DescribeMeshInput {
  export function isa(o: any): o is DescribeMeshInput {
    return __isa(o, "DescribeMeshInput");
  }
}

/**
 *
 */
export interface DescribeMeshOutput {
  __type?: "DescribeMeshOutput";
  /**
   * <p>The full description of your service mesh.</p>
   */
  mesh: MeshData | undefined;
}

export namespace DescribeMeshOutput {
  export function isa(o: any): o is DescribeMeshOutput {
    return __isa(o, "DescribeMeshOutput");
  }
}

/**
 *
 */
export interface DescribeRouteInput {
  __type?: "DescribeRouteInput";
  /**
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the route to describe.</p>
   */
  routeName: string | undefined;

  /**
   * <p>The name of the virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace DescribeRouteInput {
  export function isa(o: any): o is DescribeRouteInput {
    return __isa(o, "DescribeRouteInput");
  }
}

/**
 *
 */
export interface DescribeRouteOutput {
  __type?: "DescribeRouteOutput";
  /**
   * <p>The full description of your route.</p>
   */
  route: RouteData | undefined;
}

export namespace DescribeRouteOutput {
  export function isa(o: any): o is DescribeRouteOutput {
    return __isa(o, "DescribeRouteOutput");
  }
}

/**
 *
 */
export interface DescribeVirtualNodeInput {
  __type?: "DescribeVirtualNodeInput";
  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual node to describe.</p>
   */
  virtualNodeName: string | undefined;
}

export namespace DescribeVirtualNodeInput {
  export function isa(o: any): o is DescribeVirtualNodeInput {
    return __isa(o, "DescribeVirtualNodeInput");
  }
}

/**
 *
 */
export interface DescribeVirtualNodeOutput {
  __type?: "DescribeVirtualNodeOutput";
  /**
   * <p>The full description of your virtual node.</p>
   */
  virtualNode: VirtualNodeData | undefined;
}

export namespace DescribeVirtualNodeOutput {
  export function isa(o: any): o is DescribeVirtualNodeOutput {
    return __isa(o, "DescribeVirtualNodeOutput");
  }
}

/**
 *
 */
export interface DescribeVirtualRouterInput {
  __type?: "DescribeVirtualRouterInput";
  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual router to describe.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace DescribeVirtualRouterInput {
  export function isa(o: any): o is DescribeVirtualRouterInput {
    return __isa(o, "DescribeVirtualRouterInput");
  }
}

/**
 *
 */
export interface DescribeVirtualRouterOutput {
  __type?: "DescribeVirtualRouterOutput";
  /**
   * <p>The full description of your virtual router.</p>
   */
  virtualRouter: VirtualRouterData | undefined;
}

export namespace DescribeVirtualRouterOutput {
  export function isa(o: any): o is DescribeVirtualRouterOutput {
    return __isa(o, "DescribeVirtualRouterOutput");
  }
}

/**
 *
 */
export interface DescribeVirtualServiceInput {
  __type?: "DescribeVirtualServiceInput";
  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual service to describe.</p>
   */
  virtualServiceName: string | undefined;
}

export namespace DescribeVirtualServiceInput {
  export function isa(o: any): o is DescribeVirtualServiceInput {
    return __isa(o, "DescribeVirtualServiceInput");
  }
}

/**
 *
 */
export interface DescribeVirtualServiceOutput {
  __type?: "DescribeVirtualServiceOutput";
  /**
   * <p>The full description of your virtual service.</p>
   */
  virtualService: VirtualServiceData | undefined;
}

export namespace DescribeVirtualServiceOutput {
  export function isa(o: any): o is DescribeVirtualServiceOutput {
    return __isa(o, "DescribeVirtualServiceOutput");
  }
}

/**
 * <p>An object that represents the DNS service discovery information for your virtual
 *          node.</p>
 */
export interface DnsServiceDiscovery {
  __type?: "DnsServiceDiscovery";
  /**
   * <p>Specifies the DNS service discovery hostname for the virtual node. </p>
   */
  hostname: string | undefined;
}

export namespace DnsServiceDiscovery {
  export function isa(o: any): o is DnsServiceDiscovery {
    return __isa(o, "DnsServiceDiscovery");
  }
}

/**
 * <p>An object that represents a duration of time.</p>
 */
export interface Duration {
  __type?: "Duration";
  /**
   * <p>A unit of time.</p>
   */
  unit?: DurationUnit | string;

  /**
   * <p>A number of time units.</p>
   */
  value?: number;
}

export namespace Duration {
  export function isa(o: any): o is Duration {
    return __isa(o, "Duration");
  }
}

export enum DurationUnit {
  MS = "ms",
  S = "s"
}

/**
 * <p>An object that represents the egress filter rules for a service mesh.</p>
 */
export interface EgressFilter {
  __type?: "EgressFilter";
  /**
   * <p>The egress filter type. By default, the type is <code>DROP_ALL</code>, which allows
   *          egress only from virtual nodes to other defined resources in the service mesh (and any
   *          traffic to <code>*.amazonaws.com</code> for AWS API calls). You can set the egress filter
   *          type to <code>ALLOW_ALL</code> to allow egress to any endpoint inside or outside of the
   *          service mesh.</p>
   */
  type: EgressFilterType | string | undefined;
}

export namespace EgressFilter {
  export function isa(o: any): o is EgressFilter {
    return __isa(o, "EgressFilter");
  }
}

export enum EgressFilterType {
  ALLOW_ALL = "ALLOW_ALL",
  DROP_ALL = "DROP_ALL"
}

/**
 * <p>An object that represents an access log file.</p>
 */
export interface FileAccessLog {
  __type?: "FileAccessLog";
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
  export function isa(o: any): o is FileAccessLog {
    return __isa(o, "FileAccessLog");
  }
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
  export function isa(o: any): o is ForbiddenException {
    return __isa(o, "ForbiddenException");
  }
}

/**
 * <p>An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>.</p>
 */
export interface GrpcRetryPolicy {
  __type?: "GrpcRetryPolicy";
  /**
   * <p>Specify at least one of the valid values.</p>
   */
  grpcRetryEvents?: Array<GrpcRetryPolicyEvent | string>;

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
  httpRetryEvents?: Array<string>;

  /**
   * <p>The maximum number of retry attempts.</p>
   */
  maxRetries: number | undefined;

  /**
   * <p>An object that represents a duration of time.</p>
   */
  perRetryTimeout: Duration | undefined;

  /**
   * <p>Specify a valid value.</p>
   */
  tcpRetryEvents?: Array<TcpRetryPolicyEvent | string>;
}

export namespace GrpcRetryPolicy {
  export function isa(o: any): o is GrpcRetryPolicy {
    return __isa(o, "GrpcRetryPolicy");
  }
}

export enum GrpcRetryPolicyEvent {
  CANCELLED = "cancelled",
  DEADLINE_EXCEEDED = "deadline-exceeded",
  INTERNAL = "internal",
  RESOURCE_EXHAUSTED = "resource-exhausted",
  UNAVAILABLE = "unavailable"
}

/**
 * <p>An object that represents a GRPC route type.</p>
 */
export interface GrpcRoute {
  __type?: "GrpcRoute";
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
}

export namespace GrpcRoute {
  export function isa(o: any): o is GrpcRoute {
    return __isa(o, "GrpcRoute");
  }
}

/**
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface GrpcRouteAction {
  __type?: "GrpcRouteAction";
  /**
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   */
  weightedTargets: Array<WeightedTarget> | undefined;
}

export namespace GrpcRouteAction {
  export function isa(o: any): o is GrpcRouteAction {
    return __isa(o, "GrpcRouteAction");
  }
}

/**
 * <p>An object that represents the criteria for determining a request match.</p>
 */
export interface GrpcRouteMatch {
  __type?: "GrpcRouteMatch";
  /**
   * <p>An object that represents the data to match from the request.</p>
   */
  metadata?: Array<GrpcRouteMetadata>;

  /**
   * <p>The method name to match from the request. If you specify a name, you must also specify a <code>serviceName</code>.</p>
   */
  methodName?: string;

  /**
   * <p>The fully qualified domain name for the service to match from the request.</p>
   */
  serviceName?: string;
}

export namespace GrpcRouteMatch {
  export function isa(o: any): o is GrpcRouteMatch {
    return __isa(o, "GrpcRouteMatch");
  }
}

/**
 * <p>An object that represents the match metadata for the route.</p>
 */
export interface GrpcRouteMetadata {
  __type?: "GrpcRouteMetadata";
  /**
   * <p>Specify <code>True</code> to match anything except the match criteria. The default value is <code>False</code>.</p>
   */
  invert?: boolean;

  /**
   * <p>An object that represents the data to match from the request.</p>
   */
  match?: GrpcRouteMetadataMatchMethod;

  /**
   * <p>The name of the route.</p>
   */
  name: string | undefined;
}

export namespace GrpcRouteMetadata {
  export function isa(o: any): o is GrpcRouteMetadata {
    return __isa(o, "GrpcRouteMetadata");
  }
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
  interface $Base {
    __type?: "GrpcRouteMetadataMatchMethod";
  }
  /**
   * <p>The value sent by the client must match the specified value exactly.</p>
   */
  export interface ExactMember extends $Base {
    exact: string;
    prefix?: never;
    range?: never;
    regex?: never;
    suffix?: never;
    $unknown?: never;
  }
  /**
   * <p>The value sent by the client must begin with the specified characters.</p>
   */
  export interface PrefixMember extends $Base {
    exact?: never;
    prefix: string;
    range?: never;
    regex?: never;
    suffix?: never;
    $unknown?: never;
  }
  /**
   * <p>An object that represents the range of values to match on.</p>
   */
  export interface RangeMember extends $Base {
    exact?: never;
    prefix?: never;
    range: MatchRange;
    regex?: never;
    suffix?: never;
    $unknown?: never;
  }
  /**
   * <p>The value sent by the client must include the specified characters.</p>
   */
  export interface RegexMember extends $Base {
    exact?: never;
    prefix?: never;
    range?: never;
    regex: string;
    suffix?: never;
    $unknown?: never;
  }
  /**
   * <p>The value sent by the client must end with the specified characters.</p>
   */
  export interface SuffixMember extends $Base {
    exact?: never;
    prefix?: never;
    range?: never;
    regex?: never;
    suffix: string;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    exact?: never;
    prefix?: never;
    range?: never;
    regex?: never;
    suffix?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    exact: (value: string) => T;
    prefix: (value: string) => T;
    range: (value: MatchRange) => T;
    regex: (value: string) => T;
    suffix: (value: string) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(
    value: GrpcRouteMetadataMatchMethod,
    visitor: Visitor<T>
  ): T {
    if (value.exact !== undefined) return visitor.exact(value.exact);
    if (value.prefix !== undefined) return visitor.prefix(value.prefix);
    if (value.range !== undefined) return visitor.range(value.range);
    if (value.regex !== undefined) return visitor.regex(value.regex);
    if (value.suffix !== undefined) return visitor.suffix(value.suffix);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
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
  interface $Base {
    __type?: "HeaderMatchMethod";
  }
  /**
   * <p>The value sent by the client must match the specified value exactly.</p>
   */
  export interface ExactMember extends $Base {
    exact: string;
    prefix?: never;
    range?: never;
    regex?: never;
    suffix?: never;
    $unknown?: never;
  }
  /**
   * <p>The value sent by the client must begin with the specified characters.</p>
   */
  export interface PrefixMember extends $Base {
    exact?: never;
    prefix: string;
    range?: never;
    regex?: never;
    suffix?: never;
    $unknown?: never;
  }
  /**
   * <p>An object that represents the range of values to match on.</p>
   */
  export interface RangeMember extends $Base {
    exact?: never;
    prefix?: never;
    range: MatchRange;
    regex?: never;
    suffix?: never;
    $unknown?: never;
  }
  /**
   * <p>The value sent by the client must include the specified characters.</p>
   */
  export interface RegexMember extends $Base {
    exact?: never;
    prefix?: never;
    range?: never;
    regex: string;
    suffix?: never;
    $unknown?: never;
  }
  /**
   * <p>The value sent by the client must end with the specified characters.</p>
   */
  export interface SuffixMember extends $Base {
    exact?: never;
    prefix?: never;
    range?: never;
    regex?: never;
    suffix: string;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    exact?: never;
    prefix?: never;
    range?: never;
    regex?: never;
    suffix?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    exact: (value: string) => T;
    prefix: (value: string) => T;
    range: (value: MatchRange) => T;
    regex: (value: string) => T;
    suffix: (value: string) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(value: HeaderMatchMethod, visitor: Visitor<T>): T {
    if (value.exact !== undefined) return visitor.exact(value.exact);
    if (value.prefix !== undefined) return visitor.prefix(value.prefix);
    if (value.range !== undefined) return visitor.range(value.range);
    if (value.regex !== undefined) return visitor.regex(value.regex);
    if (value.suffix !== undefined) return visitor.suffix(value.suffix);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

/**
 * <p>An object that represents the health check policy for a virtual node's listener.</p>
 */
export interface HealthCheckPolicy {
  __type?: "HealthCheckPolicy";
  /**
   * <p>The number of consecutive successful health checks that must occur before declaring
   *          listener healthy.</p>
   */
  healthyThreshold: number | undefined;

  /**
   * <p>The time period in milliseconds between each health check execution.</p>
   */
  intervalMillis: number | undefined;

  /**
   * <p>The destination path for the health check request. This is required only if the
   *          specified protocol is HTTP. If the protocol is TCP, this parameter is ignored.</p>
   */
  path?: string;

  /**
   * <p>The destination port for the health check request. This port must match the port defined
   *          in the <a>PortMapping</a> for the listener.</p>
   */
  port?: number;

  /**
   * <p>The protocol for the health check request.</p>
   */
  protocol: PortProtocol | string | undefined;

  /**
   * <p>The amount of time to wait when receiving a response from the health check, in
   *          milliseconds.</p>
   */
  timeoutMillis: number | undefined;

  /**
   * <p>The number of consecutive failed health checks that must occur before declaring a
   *          virtual node unhealthy. </p>
   */
  unhealthyThreshold: number | undefined;
}

export namespace HealthCheckPolicy {
  export function isa(o: any): o is HealthCheckPolicy {
    return __isa(o, "HealthCheckPolicy");
  }
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
  TRACE = "TRACE"
}

/**
 * <p>An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>.</p>
 */
export interface HttpRetryPolicy {
  __type?: "HttpRetryPolicy";
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
  httpRetryEvents?: Array<string>;

  /**
   * <p>The maximum number of retry attempts.</p>
   */
  maxRetries: number | undefined;

  /**
   * <p>An object that represents a duration of time.</p>
   */
  perRetryTimeout: Duration | undefined;

  /**
   * <p>Specify a valid value.</p>
   */
  tcpRetryEvents?: Array<TcpRetryPolicyEvent | string>;
}

export namespace HttpRetryPolicy {
  export function isa(o: any): o is HttpRetryPolicy {
    return __isa(o, "HttpRetryPolicy");
  }
}

/**
 * <p>An object that represents an HTTP or HTTP2 route type.</p>
 */
export interface HttpRoute {
  __type?: "HttpRoute";
  /**
   * <p>An object that represents the action to take if a match is determined.</p>
   */
  action: HttpRouteAction | undefined;

  /**
   * <p>An object that represents the criteria for determining a request match.</p>
   */
  match: HttpRouteMatch | undefined;

  /**
   * <p>An object that represents a retry policy.</p>
   */
  retryPolicy?: HttpRetryPolicy;
}

export namespace HttpRoute {
  export function isa(o: any): o is HttpRoute {
    return __isa(o, "HttpRoute");
  }
}

/**
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface HttpRouteAction {
  __type?: "HttpRouteAction";
  /**
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   */
  weightedTargets: Array<WeightedTarget> | undefined;
}

export namespace HttpRouteAction {
  export function isa(o: any): o is HttpRouteAction {
    return __isa(o, "HttpRouteAction");
  }
}

/**
 * <p>An object that represents the HTTP header in the request.</p>
 */
export interface HttpRouteHeader {
  __type?: "HttpRouteHeader";
  /**
   * <p>Specify <code>True</code> to match anything except the match criteria. The default value is <code>False</code>.</p>
   */
  invert?: boolean;

  /**
   * <p>The <code>HeaderMatchMethod</code> object.</p>
   */
  match?: HeaderMatchMethod;

  /**
   * <p>A name for the HTTP header in the client request that will be matched on.</p>
   */
  name: string | undefined;
}

export namespace HttpRouteHeader {
  export function isa(o: any): o is HttpRouteHeader {
    return __isa(o, "HttpRouteHeader");
  }
}

/**
 * <p>An object that represents the requirements for a route to match HTTP requests for a virtual
 *          router.</p>
 */
export interface HttpRouteMatch {
  __type?: "HttpRouteMatch";
  /**
   * <p>An object that represents the client request headers to match on.</p>
   */
  headers?: Array<HttpRouteHeader>;

  /**
   * <p>The client request method to match on. Specify only one.</p>
   */
  method?: HttpMethod | string;

  /**
   * <p>Specifies the path to match requests with. This parameter must always start with
   *             <code>/</code>, which by itself matches all requests to the virtual service name. You
   *          can also match for path-based routing of requests. For example, if your virtual service
   *          name is <code>my-service.local</code> and you want the route to match requests to
   *             <code>my-service.local/metrics</code>, your prefix should be
   *          <code>/metrics</code>.</p>
   */
  prefix: string | undefined;

  /**
   * <p>The client request scheme to match on. Specify only one.</p>
   */
  scheme?: HttpScheme | string;
}

export namespace HttpRouteMatch {
  export function isa(o: any): o is HttpRouteMatch {
    return __isa(o, "HttpRouteMatch");
  }
}

export enum HttpScheme {
  HTTP = "http",
  HTTPS = "https"
}

/**
 * <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 */
export interface InternalServerErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  message?: string;
}

export namespace InternalServerErrorException {
  export function isa(o: any): o is InternalServerErrorException {
    return __isa(o, "InternalServerErrorException");
  }
}

/**
 * <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service_limits.html">Service
 *             Limits</a> in the <i>AWS App Mesh User Guide</i>.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

/**
 *
 */
export interface ListMeshesInput {
  __type?: "ListMeshesInput";
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
}

export namespace ListMeshesInput {
  export function isa(o: any): o is ListMeshesInput {
    return __isa(o, "ListMeshesInput");
  }
}

/**
 *
 */
export interface ListMeshesOutput {
  __type?: "ListMeshesOutput";
  /**
   * <p>The list of existing service meshes.</p>
   */
  meshes: Array<MeshRef> | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListMeshes</code> request.
   *          When the results of a <code>ListMeshes</code> request exceed <code>limit</code>, you can
   *          use this value to retrieve the next page of results. This value is <code>null</code> when
   *          there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListMeshesOutput {
  export function isa(o: any): o is ListMeshesOutput {
    return __isa(o, "ListMeshesOutput");
  }
}

/**
 *
 */
export interface ListRoutesInput {
  __type?: "ListRoutesInput";
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
   * <p>The name of the service mesh to list routes in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListRoutes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the virtual router to list routes in.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace ListRoutesInput {
  export function isa(o: any): o is ListRoutesInput {
    return __isa(o, "ListRoutesInput");
  }
}

/**
 *
 */
export interface ListRoutesOutput {
  __type?: "ListRoutesOutput";
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListRoutes</code> request.
   *          When the results of a <code>ListRoutes</code> request exceed <code>limit</code>, you can
   *          use this value to retrieve the next page of results. This value is <code>null</code> when
   *          there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of existing routes for the specified service mesh and virtual router.</p>
   */
  routes: Array<RouteRef> | undefined;
}

export namespace ListRoutesOutput {
  export function isa(o: any): o is ListRoutesOutput {
    return __isa(o, "ListRoutesOutput");
  }
}

/**
 *
 */
export interface ListTagsForResourceInput {
  __type?: "ListTagsForResourceInput";
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

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListTagsForResource</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceInput {
  export function isa(o: any): o is ListTagsForResourceInput {
    return __isa(o, "ListTagsForResourceInput");
  }
}

/**
 *
 */
export interface ListTagsForResourceOutput {
  __type?: "ListTagsForResourceOutput";
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListTagsForResource</code>
   *          request. When the results of a <code>ListTagsForResource</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The tags for the resource.</p>
   */
  tags: Array<TagRef> | undefined;
}

export namespace ListTagsForResourceOutput {
  export function isa(o: any): o is ListTagsForResourceOutput {
    return __isa(o, "ListTagsForResourceOutput");
  }
}

/**
 *
 */
export interface ListVirtualNodesInput {
  __type?: "ListVirtualNodesInput";
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
}

export namespace ListVirtualNodesInput {
  export function isa(o: any): o is ListVirtualNodesInput {
    return __isa(o, "ListVirtualNodesInput");
  }
}

/**
 *
 */
export interface ListVirtualNodesOutput {
  __type?: "ListVirtualNodesOutput";
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualNodes</code>
   *          request. When the results of a <code>ListVirtualNodes</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of existing virtual nodes for the specified service mesh.</p>
   */
  virtualNodes: Array<VirtualNodeRef> | undefined;
}

export namespace ListVirtualNodesOutput {
  export function isa(o: any): o is ListVirtualNodesOutput {
    return __isa(o, "ListVirtualNodesOutput");
  }
}

/**
 *
 */
export interface ListVirtualRoutersInput {
  __type?: "ListVirtualRoutersInput";
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
}

export namespace ListVirtualRoutersInput {
  export function isa(o: any): o is ListVirtualRoutersInput {
    return __isa(o, "ListVirtualRoutersInput");
  }
}

/**
 *
 */
export interface ListVirtualRoutersOutput {
  __type?: "ListVirtualRoutersOutput";
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualRouters</code>
   *          request. When the results of a <code>ListVirtualRouters</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of existing virtual routers for the specified service mesh.</p>
   */
  virtualRouters: Array<VirtualRouterRef> | undefined;
}

export namespace ListVirtualRoutersOutput {
  export function isa(o: any): o is ListVirtualRoutersOutput {
    return __isa(o, "ListVirtualRoutersOutput");
  }
}

/**
 *
 */
export interface ListVirtualServicesInput {
  __type?: "ListVirtualServicesInput";
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
}

export namespace ListVirtualServicesInput {
  export function isa(o: any): o is ListVirtualServicesInput {
    return __isa(o, "ListVirtualServicesInput");
  }
}

/**
 *
 */
export interface ListVirtualServicesOutput {
  __type?: "ListVirtualServicesOutput";
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualServices</code>
   *          request. When the results of a <code>ListVirtualServices</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of existing virtual services for the specified service mesh.</p>
   */
  virtualServices: Array<VirtualServiceRef> | undefined;
}

export namespace ListVirtualServicesOutput {
  export function isa(o: any): o is ListVirtualServicesOutput {
    return __isa(o, "ListVirtualServicesOutput");
  }
}

/**
 * <p>An object that represents a listener for a virtual node.</p>
 */
export interface Listener {
  __type?: "Listener";
  /**
   * <p>The health check information for the listener.</p>
   */
  healthCheck?: HealthCheckPolicy;

  /**
   * <p>The port mapping information for the listener.</p>
   */
  portMapping: PortMapping | undefined;
}

export namespace Listener {
  export function isa(o: any): o is Listener {
    return __isa(o, "Listener");
  }
}

/**
 * <p>An object that represents the logging information for a virtual node.</p>
 */
export interface Logging {
  __type?: "Logging";
  /**
   * <p>The access log configuration for a virtual node.</p>
   */
  accessLog?: AccessLog;
}

export namespace Logging {
  export function isa(o: any): o is Logging {
    return __isa(o, "Logging");
  }
}

/**
 * <p>An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.</p>
 */
export interface MatchRange {
  __type?: "MatchRange";
  /**
   * <p>The end of the range.</p>
   */
  end: number | undefined;

  /**
   * <p>The start of the range.</p>
   */
  start: number | undefined;
}

export namespace MatchRange {
  export function isa(o: any): o is MatchRange {
    return __isa(o, "MatchRange");
  }
}

/**
 * <p>An object that represents a service mesh returned by a describe operation.</p>
 */
export interface MeshData {
  __type?: "MeshData";
  /**
   * <p>The name of the service mesh.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The associated metadata for the service mesh.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The associated specification for the service mesh.</p>
   */
  spec: MeshSpec | undefined;

  /**
   * <p>The status of the service mesh.</p>
   */
  status: MeshStatus | undefined;
}

export namespace MeshData {
  export function isa(o: any): o is MeshData {
    return __isa(o, "MeshData");
  }
}

/**
 * <p>An object that represents a service mesh returned by a list operation.</p>
 */
export interface MeshRef {
  __type?: "MeshRef";
  /**
   * <p>The full Amazon Resource Name (ARN) of the service mesh.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the service mesh.</p>
   */
  meshName: string | undefined;
}

export namespace MeshRef {
  export function isa(o: any): o is MeshRef {
    return __isa(o, "MeshRef");
  }
}

/**
 * <p>An object that represents the specification of a service mesh.</p>
 */
export interface MeshSpec {
  __type?: "MeshSpec";
  /**
   * <p>The egress filter rules for the service mesh.</p>
   */
  egressFilter?: EgressFilter;
}

export namespace MeshSpec {
  export function isa(o: any): o is MeshSpec {
    return __isa(o, "MeshSpec");
  }
}

/**
 * <p>An object that represents the status of a service mesh.</p>
 */
export interface MeshStatus {
  __type?: "MeshStatus";
  /**
   * <p>The current mesh status.</p>
   */
  status?: MeshStatusCode | string;
}

export namespace MeshStatus {
  export function isa(o: any): o is MeshStatus {
    return __isa(o, "MeshStatus");
  }
}

export enum MeshStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE"
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
  export function isa(o: any): o is NotFoundException {
    return __isa(o, "NotFoundException");
  }
}

/**
 * <p>An object that represents a port mapping.</p>
 */
export interface PortMapping {
  __type?: "PortMapping";
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
  export function isa(o: any): o is PortMapping {
    return __isa(o, "PortMapping");
  }
}

export enum PortProtocol {
  GRPC = "grpc",
  HTTP = "http",
  HTTP2 = "http2",
  TCP = "tcp"
}

/**
 * <p>You can't delete the specified resource because it's in use or required by another
 *          resource.</p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  message?: string;
}

export namespace ResourceInUseException {
  export function isa(o: any): o is ResourceInUseException {
    return __isa(o, "ResourceInUseException");
  }
}

/**
 * <p>An object that represents metadata for a resource.</p>
 */
export interface ResourceMetadata {
  __type?: "ResourceMetadata";
  /**
   * <p>The full Amazon Resource Name (ARN) for the resource.</p>
   */
  arn: string | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The unique identifier for the resource.</p>
   */
  uid: string | undefined;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is
   *          incremented each time that they're updated.</p>
   */
  version: number | undefined;
}

export namespace ResourceMetadata {
  export function isa(o: any): o is ResourceMetadata {
    return __isa(o, "ResourceMetadata");
  }
}

/**
 * <p>An object that represents a route returned by a describe operation.</p>
 */
export interface RouteData {
  __type?: "RouteData";
  /**
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The associated metadata for the route.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The name of the route.</p>
   */
  routeName: string | undefined;

  /**
   * <p>The specifications of the route.</p>
   */
  spec: RouteSpec | undefined;

  /**
   * <p>The status of the route.</p>
   */
  status: RouteStatus | undefined;

  /**
   * <p>The virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace RouteData {
  export function isa(o: any): o is RouteData {
    return __isa(o, "RouteData");
  }
}

/**
 * <p>An object that represents a route returned by a list operation.</p>
 */
export interface RouteRef {
  __type?: "RouteRef";
  /**
   * <p>The full Amazon Resource Name (ARN) for the route.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the route.</p>
   */
  routeName: string | undefined;

  /**
   * <p>The virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace RouteRef {
  export function isa(o: any): o is RouteRef {
    return __isa(o, "RouteRef");
  }
}

/**
 * <p>An object that represents a route specification. Specify one route type.</p>
 */
export interface RouteSpec {
  __type?: "RouteSpec";
  /**
   * <p>An object that represents the specification of a GRPC route.</p>
   */
  grpcRoute?: GrpcRoute;

  /**
   * <p>An object that represents the specification of an HTTP2 route.</p>
   */
  http2Route?: HttpRoute;

  /**
   * <p>An object that represents the specification of an HTTP route.</p>
   */
  httpRoute?: HttpRoute;

  /**
   * <p>The priority for the route. Routes are matched based on the specified value, where 0 is
   *          the highest priority.</p>
   */
  priority?: number;

  /**
   * <p>An object that represents the specification of a TCP route.</p>
   */
  tcpRoute?: TcpRoute;
}

export namespace RouteSpec {
  export function isa(o: any): o is RouteSpec {
    return __isa(o, "RouteSpec");
  }
}

/**
 * <p>An object that represents the current status of a route.</p>
 */
export interface RouteStatus {
  __type?: "RouteStatus";
  /**
   * <p>The current status for the route.</p>
   */
  status: RouteStatusCode | string | undefined;
}

export namespace RouteStatus {
  export function isa(o: any): o is RouteStatus {
    return __isa(o, "RouteStatus");
  }
}

export enum RouteStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE"
}

/**
 * <p>An object that represents the service discovery information for a virtual node.</p>
 */
export type ServiceDiscovery =
  | ServiceDiscovery.AwsCloudMapMember
  | ServiceDiscovery.DnsMember
  | ServiceDiscovery.$UnknownMember;

export namespace ServiceDiscovery {
  interface $Base {
    __type?: "ServiceDiscovery";
  }
  /**
   * <p>Specifies any AWS Cloud Map information for the virtual node.</p>
   */
  export interface AwsCloudMapMember extends $Base {
    awsCloudMap: AwsCloudMapServiceDiscovery;
    dns?: never;
    $unknown?: never;
  }
  /**
   * <p>Specifies the DNS information for the virtual node.</p>
   */
  export interface DnsMember extends $Base {
    awsCloudMap?: never;
    dns: DnsServiceDiscovery;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    awsCloudMap?: never;
    dns?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    awsCloudMap: (value: AwsCloudMapServiceDiscovery) => T;
    dns: (value: DnsServiceDiscovery) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(value: ServiceDiscovery, visitor: Visitor<T>): T {
    if (value.awsCloudMap !== undefined)
      return visitor.awsCloudMap(value.awsCloudMap);
    if (value.dns !== undefined) return visitor.dns(value.dns);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

/**
 * <p>The request has failed due to a temporary failure of the service.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return __isa(o, "ServiceUnavailableException");
  }
}

/**
 * <p>Optional metadata that you apply to a resource to assist with categorization and
 *          organization. Each tag consists of a key and an optional value, both of which you define.
 *          Tag keys can have a maximum character length of 128 characters, and tag values can have
 *             a maximum length of 256 characters.</p>
 */
export interface TagRef {
  __type?: "TagRef";
  /**
   * <p>One part of a key-value pair that make up a tag. A <code>key</code> is a general label
   *          that acts like a category for more specific tag values.</p>
   */
  key: string | undefined;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A <code>value</code> acts as a
   *          descriptor within a tag category (key).</p>
   */
  value?: string;
}

export namespace TagRef {
  export function isa(o: any): o is TagRef {
    return __isa(o, "TagRef");
  }
}

/**
 *
 */
export interface TagResourceInput {
  __type?: "TagResourceInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to add tags to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.
   *          Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags: Array<TagRef> | undefined;
}

export namespace TagResourceInput {
  export function isa(o: any): o is TagResourceInput {
    return __isa(o, "TagResourceInput");
  }
}

/**
 *
 */
export interface TagResourceOutput {
  __type?: "TagResourceOutput";
}

export namespace TagResourceOutput {
  export function isa(o: any): o is TagResourceOutput {
    return __isa(o, "TagResourceOutput");
  }
}

export enum TcpRetryPolicyEvent {
  CONNECTION_ERROR = "connection-error"
}

/**
 * <p>An object that represents a TCP route type.</p>
 */
export interface TcpRoute {
  __type?: "TcpRoute";
  /**
   * <p>The action to take if a match is determined.</p>
   */
  action: TcpRouteAction | undefined;
}

export namespace TcpRoute {
  export function isa(o: any): o is TcpRoute {
    return __isa(o, "TcpRoute");
  }
}

/**
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface TcpRouteAction {
  __type?: "TcpRouteAction";
  /**
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   */
  weightedTargets: Array<WeightedTarget> | undefined;
}

export namespace TcpRouteAction {
  export function isa(o: any): o is TcpRouteAction {
    return __isa(o, "TcpRouteAction");
  }
}

/**
 * <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
 *          account. For best results, use an increasing or variable sleep interval between
 *          requests.</p>
 */
export interface TooManyRequestsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  message?: string;
}

export namespace TooManyRequestsException {
  export function isa(o: any): o is TooManyRequestsException {
    return __isa(o, "TooManyRequestsException");
  }
}

/**
 * <p>The request exceeds the maximum allowed number of tags allowed per resource. The current
 *          limit is 50 user tags per resource. You must reduce the number of tags in the request. None
 *          of the tags in this request were applied.</p>
 */
export interface TooManyTagsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  message?: string;
}

export namespace TooManyTagsException {
  export function isa(o: any): o is TooManyTagsException {
    return __isa(o, "TooManyTagsException");
  }
}

/**
 *
 */
export interface UntagResourceInput {
  __type?: "UntagResourceInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to delete tags from.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceInput {
  export function isa(o: any): o is UntagResourceInput {
    return __isa(o, "UntagResourceInput");
  }
}

/**
 *
 */
export interface UntagResourceOutput {
  __type?: "UntagResourceOutput";
}

export namespace UntagResourceOutput {
  export function isa(o: any): o is UntagResourceOutput {
    return __isa(o, "UntagResourceOutput");
  }
}

/**
 *
 */
export interface UpdateMeshInput {
  __type?: "UpdateMeshInput";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the service mesh to update.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The service mesh specification to apply.</p>
   */
  spec?: MeshSpec;
}

export namespace UpdateMeshInput {
  export function isa(o: any): o is UpdateMeshInput {
    return __isa(o, "UpdateMeshInput");
  }
}

/**
 *
 */
export interface UpdateMeshOutput {
  __type?: "UpdateMeshOutput";
  /**
   * <p>An object that represents a service mesh returned by a describe operation.</p>
   */
  mesh: MeshData | undefined;
}

export namespace UpdateMeshOutput {
  export function isa(o: any): o is UpdateMeshOutput {
    return __isa(o, "UpdateMeshOutput");
  }
}

/**
 *
 */
export interface UpdateRouteInput {
  __type?: "UpdateRouteInput";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the route to update.</p>
   */
  routeName: string | undefined;

  /**
   * <p>The new route specification to apply. This overwrites the existing data.</p>
   */
  spec: RouteSpec | undefined;

  /**
   * <p>The name of the virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace UpdateRouteInput {
  export function isa(o: any): o is UpdateRouteInput {
    return __isa(o, "UpdateRouteInput");
  }
}

/**
 *
 */
export interface UpdateRouteOutput {
  __type?: "UpdateRouteOutput";
  /**
   * <p>A full description of the route that was updated.</p>
   */
  route: RouteData | undefined;
}

export namespace UpdateRouteOutput {
  export function isa(o: any): o is UpdateRouteOutput {
    return __isa(o, "UpdateRouteOutput");
  }
}

/**
 *
 */
export interface UpdateVirtualNodeInput {
  __type?: "UpdateVirtualNodeInput";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The new virtual node specification to apply. This overwrites the existing data.</p>
   */
  spec: VirtualNodeSpec | undefined;

  /**
   * <p>The name of the virtual node to update.</p>
   */
  virtualNodeName: string | undefined;
}

export namespace UpdateVirtualNodeInput {
  export function isa(o: any): o is UpdateVirtualNodeInput {
    return __isa(o, "UpdateVirtualNodeInput");
  }
}

/**
 *
 */
export interface UpdateVirtualNodeOutput {
  __type?: "UpdateVirtualNodeOutput";
  /**
   * <p>A full description of the virtual node that was updated.</p>
   */
  virtualNode: VirtualNodeData | undefined;
}

export namespace UpdateVirtualNodeOutput {
  export function isa(o: any): o is UpdateVirtualNodeOutput {
    return __isa(o, "UpdateVirtualNodeOutput");
  }
}

/**
 *
 */
export interface UpdateVirtualRouterInput {
  __type?: "UpdateVirtualRouterInput";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The new virtual router specification to apply. This overwrites the existing data.</p>
   */
  spec: VirtualRouterSpec | undefined;

  /**
   * <p>The name of the virtual router to update.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace UpdateVirtualRouterInput {
  export function isa(o: any): o is UpdateVirtualRouterInput {
    return __isa(o, "UpdateVirtualRouterInput");
  }
}

/**
 *
 */
export interface UpdateVirtualRouterOutput {
  __type?: "UpdateVirtualRouterOutput";
  /**
   * <p>A full description of the virtual router that was updated.</p>
   */
  virtualRouter: VirtualRouterData | undefined;
}

export namespace UpdateVirtualRouterOutput {
  export function isa(o: any): o is UpdateVirtualRouterOutput {
    return __isa(o, "UpdateVirtualRouterOutput");
  }
}

/**
 *
 */
export interface UpdateVirtualServiceInput {
  __type?: "UpdateVirtualServiceInput";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

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
   * <p>The name of the virtual service to update.</p>
   */
  virtualServiceName: string | undefined;
}

export namespace UpdateVirtualServiceInput {
  export function isa(o: any): o is UpdateVirtualServiceInput {
    return __isa(o, "UpdateVirtualServiceInput");
  }
}

/**
 *
 */
export interface UpdateVirtualServiceOutput {
  __type?: "UpdateVirtualServiceOutput";
  /**
   * <p>A full description of the virtual service that was updated.</p>
   */
  virtualService: VirtualServiceData | undefined;
}

export namespace UpdateVirtualServiceOutput {
  export function isa(o: any): o is UpdateVirtualServiceOutput {
    return __isa(o, "UpdateVirtualServiceOutput");
  }
}

/**
 * <p>An object that represents a virtual node returned by a describe operation.</p>
 */
export interface VirtualNodeData {
  __type?: "VirtualNodeData";
  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The associated metadata for the virtual node.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The specifications of the virtual node.</p>
   */
  spec: VirtualNodeSpec | undefined;

  /**
   * <p>The current status for the virtual node.</p>
   */
  status: VirtualNodeStatus | undefined;

  /**
   * <p>The name of the virtual node.</p>
   */
  virtualNodeName: string | undefined;
}

export namespace VirtualNodeData {
  export function isa(o: any): o is VirtualNodeData {
    return __isa(o, "VirtualNodeData");
  }
}

/**
 * <p>An object that represents a virtual node returned by a list operation.</p>
 */
export interface VirtualNodeRef {
  __type?: "VirtualNodeRef";
  /**
   * <p>The full Amazon Resource Name (ARN) for the virtual node.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual node.</p>
   */
  virtualNodeName: string | undefined;
}

export namespace VirtualNodeRef {
  export function isa(o: any): o is VirtualNodeRef {
    return __isa(o, "VirtualNodeRef");
  }
}

/**
 * <p>An object that represents a virtual node service provider.</p>
 */
export interface VirtualNodeServiceProvider {
  __type?: "VirtualNodeServiceProvider";
  /**
   * <p>The name of the virtual node that is acting as a service provider.</p>
   */
  virtualNodeName: string | undefined;
}

export namespace VirtualNodeServiceProvider {
  export function isa(o: any): o is VirtualNodeServiceProvider {
    return __isa(o, "VirtualNodeServiceProvider");
  }
}

/**
 * <p>An object that represents the specification of a virtual node.</p>
 */
export interface VirtualNodeSpec {
  __type?: "VirtualNodeSpec";
  /**
   * <p>The backends that the virtual node is expected to send outbound traffic to.</p>
   */
  backends?: Array<Backend>;

  /**
   * <p>The listeners that the virtual node is expected to receive inbound traffic from.
   *          You can specify one listener.</p>
   */
  listeners?: Array<Listener>;

  /**
   * <p>The inbound and outbound access logging information for the virtual node.</p>
   */
  logging?: Logging;

  /**
   * <p>The service discovery information for the virtual node. If your virtual node does not
   *          expect ingress traffic, you can omit this parameter.</p>
   */
  serviceDiscovery?: ServiceDiscovery;
}

export namespace VirtualNodeSpec {
  export function isa(o: any): o is VirtualNodeSpec {
    return __isa(o, "VirtualNodeSpec");
  }
}

/**
 * <p>An object that represents the current status of the virtual node.</p>
 */
export interface VirtualNodeStatus {
  __type?: "VirtualNodeStatus";
  /**
   * <p>The current status of the virtual node.</p>
   */
  status: VirtualNodeStatusCode | string | undefined;
}

export namespace VirtualNodeStatus {
  export function isa(o: any): o is VirtualNodeStatus {
    return __isa(o, "VirtualNodeStatus");
  }
}

export enum VirtualNodeStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE"
}

/**
 * <p>An object that represents a virtual router returned by a describe operation.</p>
 */
export interface VirtualRouterData {
  __type?: "VirtualRouterData";
  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The associated metadata for the virtual router.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The specifications of the virtual router.</p>
   */
  spec: VirtualRouterSpec | undefined;

  /**
   * <p>The current status of the virtual router.</p>
   */
  status: VirtualRouterStatus | undefined;

  /**
   * <p>The name of the virtual router.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace VirtualRouterData {
  export function isa(o: any): o is VirtualRouterData {
    return __isa(o, "VirtualRouterData");
  }
}

/**
 * <p>An object that represents a virtual router listener.</p>
 */
export interface VirtualRouterListener {
  __type?: "VirtualRouterListener";
  /**
   * <p>An object that represents a port mapping.</p>
   */
  portMapping: PortMapping | undefined;
}

export namespace VirtualRouterListener {
  export function isa(o: any): o is VirtualRouterListener {
    return __isa(o, "VirtualRouterListener");
  }
}

/**
 * <p>An object that represents a virtual router returned by a list operation.</p>
 */
export interface VirtualRouterRef {
  __type?: "VirtualRouterRef";
  /**
   * <p>The full Amazon Resource Name (ARN) for the virtual router.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual router.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace VirtualRouterRef {
  export function isa(o: any): o is VirtualRouterRef {
    return __isa(o, "VirtualRouterRef");
  }
}

/**
 * <p>An object that represents a virtual node service provider.</p>
 */
export interface VirtualRouterServiceProvider {
  __type?: "VirtualRouterServiceProvider";
  /**
   * <p>The name of the virtual router that is acting as a service provider.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace VirtualRouterServiceProvider {
  export function isa(o: any): o is VirtualRouterServiceProvider {
    return __isa(o, "VirtualRouterServiceProvider");
  }
}

/**
 * <p>An object that represents the specification of a virtual router.</p>
 */
export interface VirtualRouterSpec {
  __type?: "VirtualRouterSpec";
  /**
   * <p>The listeners that the virtual router is expected to receive inbound traffic from.
   *          You can specify one listener.</p>
   */
  listeners?: Array<VirtualRouterListener>;
}

export namespace VirtualRouterSpec {
  export function isa(o: any): o is VirtualRouterSpec {
    return __isa(o, "VirtualRouterSpec");
  }
}

/**
 * <p>An object that represents the status of a virtual router. </p>
 */
export interface VirtualRouterStatus {
  __type?: "VirtualRouterStatus";
  /**
   * <p>The current status of the virtual router.</p>
   */
  status: VirtualRouterStatusCode | string | undefined;
}

export namespace VirtualRouterStatus {
  export function isa(o: any): o is VirtualRouterStatus {
    return __isa(o, "VirtualRouterStatus");
  }
}

export enum VirtualRouterStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE"
}

/**
 * <p>An object that represents a virtual service backend for a virtual node.</p>
 */
export interface VirtualServiceBackend {
  __type?: "VirtualServiceBackend";
  /**
   * <p>The name of the virtual service that is acting as a virtual node backend.</p>
   */
  virtualServiceName: string | undefined;
}

export namespace VirtualServiceBackend {
  export function isa(o: any): o is VirtualServiceBackend {
    return __isa(o, "VirtualServiceBackend");
  }
}

/**
 * <p>An object that represents a virtual service returned by a describe operation.</p>
 */
export interface VirtualServiceData {
  __type?: "VirtualServiceData";
  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>An object that represents metadata for a resource.</p>
   */
  metadata: ResourceMetadata | undefined;

  /**
   * <p>The specifications of the virtual service.</p>
   */
  spec: VirtualServiceSpec | undefined;

  /**
   * <p>The current status of the virtual service.</p>
   */
  status: VirtualServiceStatus | undefined;

  /**
   * <p>The name of the virtual service.</p>
   */
  virtualServiceName: string | undefined;
}

export namespace VirtualServiceData {
  export function isa(o: any): o is VirtualServiceData {
    return __isa(o, "VirtualServiceData");
  }
}

/**
 * <p>An object that represents the provider for a virtual service.</p>
 */
export type VirtualServiceProvider =
  | VirtualServiceProvider.VirtualNodeMember
  | VirtualServiceProvider.VirtualRouterMember
  | VirtualServiceProvider.$UnknownMember;

export namespace VirtualServiceProvider {
  interface $Base {
    __type?: "VirtualServiceProvider";
  }
  /**
   * <p>The virtual node associated with a virtual service.</p>
   */
  export interface VirtualNodeMember extends $Base {
    virtualNode: VirtualNodeServiceProvider;
    virtualRouter?: never;
    $unknown?: never;
  }
  /**
   * <p>The virtual router associated with a virtual service.</p>
   */
  export interface VirtualRouterMember extends $Base {
    virtualNode?: never;
    virtualRouter: VirtualRouterServiceProvider;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    virtualNode?: never;
    virtualRouter?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    virtualNode: (value: VirtualNodeServiceProvider) => T;
    virtualRouter: (value: VirtualRouterServiceProvider) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(
    value: VirtualServiceProvider,
    visitor: Visitor<T>
  ): T {
    if (value.virtualNode !== undefined)
      return visitor.virtualNode(value.virtualNode);
    if (value.virtualRouter !== undefined)
      return visitor.virtualRouter(value.virtualRouter);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

/**
 * <p>An object that represents a virtual service returned by a list operation.</p>
 */
export interface VirtualServiceRef {
  __type?: "VirtualServiceRef";
  /**
   * <p>The full Amazon Resource Name (ARN) for the virtual service.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string | undefined;

  /**
   * <p>The name of the virtual service.</p>
   */
  virtualServiceName: string | undefined;
}

export namespace VirtualServiceRef {
  export function isa(o: any): o is VirtualServiceRef {
    return __isa(o, "VirtualServiceRef");
  }
}

/**
 * <p>An object that represents the specification of a virtual service.</p>
 */
export interface VirtualServiceSpec {
  __type?: "VirtualServiceSpec";
  /**
   * <p>The App Mesh object that is acting as the provider for a virtual service. You can specify
   *          a single virtual node or virtual router.</p>
   */
  provider?: VirtualServiceProvider;
}

export namespace VirtualServiceSpec {
  export function isa(o: any): o is VirtualServiceSpec {
    return __isa(o, "VirtualServiceSpec");
  }
}

/**
 * <p>An object that represents the status of a virtual service.</p>
 */
export interface VirtualServiceStatus {
  __type?: "VirtualServiceStatus";
  /**
   * <p>The current status of the virtual service.</p>
   */
  status: VirtualServiceStatusCode | string | undefined;
}

export namespace VirtualServiceStatus {
  export function isa(o: any): o is VirtualServiceStatus {
    return __isa(o, "VirtualServiceStatus");
  }
}

export enum VirtualServiceStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE"
}

/**
 * <p>An object that represents a target and its relative weight. Traffic is distributed across
 *          targets according to their relative weight. For example, a weighted target with a relative
 *          weight of 50 receives five times as much traffic as one with a relative weight of
 *          10. The total weight for all targets combined must be less than or equal to 100.</p>
 */
export interface WeightedTarget {
  __type?: "WeightedTarget";
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
  export function isa(o: any): o is WeightedTarget {
    return __isa(o, "WeightedTarget");
  }
}
