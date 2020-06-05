import {
  SENSITIVE_STRING,
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
  export const visit = <T>(value: AccessLog, visitor: Visitor<T>): T => {
    if (value.file !== undefined) return visitor.file(value.file);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
  export const filterSensitiveLog = (
    obj: AwsCloudMapInstanceAttribute
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsCloudMapInstanceAttribute =>
    __isa(o, "AwsCloudMapInstanceAttribute");
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
  attributes?: AwsCloudMapInstanceAttribute[];

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
  export const filterSensitiveLog = (
    obj: AwsCloudMapServiceDiscovery
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsCloudMapServiceDiscovery =>
    __isa(o, "AwsCloudMapServiceDiscovery");
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
  export const visit = <T>(value: Backend, visitor: Visitor<T>): T => {
    if (value.virtualService !== undefined)
      return visitor.virtualService(value.virtualService);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>An object that represents the default properties for a backend.</p>
 */
export interface BackendDefaults {
  __type?: "BackendDefaults";
  /**
   * <p>A reference to an object that represents a client policy.</p>
   */
  clientPolicy?: ClientPolicy;
}

export namespace BackendDefaults {
  export const filterSensitiveLog = (obj: BackendDefaults): any => ({
    ...obj
  });
  export const isa = (o: any): o is BackendDefaults =>
    __isa(o, "BackendDefaults");
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
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is BadRequestException =>
    __isa(o, "BadRequestException");
}

/**
 * <p>An object that represents a client policy.</p>
 */
export interface ClientPolicy {
  __type?: "ClientPolicy";
  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) client policy.</p>
   */
  tls?: ClientPolicyTls;
}

export namespace ClientPolicy {
  export const filterSensitiveLog = (obj: ClientPolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClientPolicy => __isa(o, "ClientPolicy");
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) client policy.</p>
 */
export interface ClientPolicyTls {
  __type?: "ClientPolicyTls";
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
   * <p>A reference to an object that represents a TLS validation context.</p>
   */
  validation?: TlsValidationContext;
}

export namespace ClientPolicyTls {
  export const filterSensitiveLog = (obj: ClientPolicyTls): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClientPolicyTls =>
    __isa(o, "ClientPolicyTls");
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
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictException =>
    __isa(o, "ConflictException");
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
  tags?: TagRef[];
}

export namespace CreateMeshInput {
  export const filterSensitiveLog = (obj: CreateMeshInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateMeshInput =>
    __isa(o, "CreateMeshInput");
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
  export const filterSensitiveLog = (obj: CreateMeshOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateMeshOutput =>
    __isa(o, "CreateMeshOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

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
  tags?: TagRef[];

  /**
   * <p>The name of the virtual router in which to create the route. If the virtual router is in
   *          a shared mesh, then you must be the owner of the virtual router resource.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace CreateRouteInput {
  export const filterSensitiveLog = (obj: CreateRouteInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRouteInput =>
    __isa(o, "CreateRouteInput");
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
  export const filterSensitiveLog = (obj: CreateRouteOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRouteOutput =>
    __isa(o, "CreateRouteOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

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
   * <p>The name to use for the virtual node.</p>
   */
  virtualNodeName: string | undefined;
}

export namespace CreateVirtualNodeInput {
  export const filterSensitiveLog = (obj: CreateVirtualNodeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateVirtualNodeInput =>
    __isa(o, "CreateVirtualNodeInput");
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
  export const filterSensitiveLog = (obj: CreateVirtualNodeOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateVirtualNodeOutput =>
    __isa(o, "CreateVirtualNodeOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

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
   * <p>The name to use for the virtual router.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace CreateVirtualRouterInput {
  export const filterSensitiveLog = (obj: CreateVirtualRouterInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateVirtualRouterInput =>
    __isa(o, "CreateVirtualRouterInput");
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
  export const filterSensitiveLog = (obj: CreateVirtualRouterOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateVirtualRouterOutput =>
    __isa(o, "CreateVirtualRouterOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

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
   * <p>The name to use for the virtual service.</p>
   */
  virtualServiceName: string | undefined;
}

export namespace CreateVirtualServiceInput {
  export const filterSensitiveLog = (obj: CreateVirtualServiceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateVirtualServiceInput =>
    __isa(o, "CreateVirtualServiceInput");
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
  export const filterSensitiveLog = (obj: CreateVirtualServiceOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateVirtualServiceOutput =>
    __isa(o, "CreateVirtualServiceOutput");
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
  export const filterSensitiveLog = (obj: DeleteMeshInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMeshInput =>
    __isa(o, "DeleteMeshInput");
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
  export const filterSensitiveLog = (obj: DeleteMeshOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMeshOutput =>
    __isa(o, "DeleteMeshOutput");
}

export interface DeleteMeshPolicyInput {
  __type?: "DeleteMeshPolicyInput";
  meshArn: string | undefined;
}

export namespace DeleteMeshPolicyInput {
  export const filterSensitiveLog = (obj: DeleteMeshPolicyInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMeshPolicyInput =>
    __isa(o, "DeleteMeshPolicyInput");
}

export interface DeleteMeshPolicyOutput {
  __type?: "DeleteMeshPolicyOutput";
}

export namespace DeleteMeshPolicyOutput {
  export const filterSensitiveLog = (obj: DeleteMeshPolicyOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMeshPolicyOutput =>
    __isa(o, "DeleteMeshPolicyOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

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
  export const filterSensitiveLog = (obj: DeleteRouteInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRouteInput =>
    __isa(o, "DeleteRouteInput");
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
  export const filterSensitiveLog = (obj: DeleteRouteOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRouteOutput =>
    __isa(o, "DeleteRouteOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

  /**
   * <p>The name of the virtual node to delete.</p>
   */
  virtualNodeName: string | undefined;
}

export namespace DeleteVirtualNodeInput {
  export const filterSensitiveLog = (obj: DeleteVirtualNodeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteVirtualNodeInput =>
    __isa(o, "DeleteVirtualNodeInput");
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
  export const filterSensitiveLog = (obj: DeleteVirtualNodeOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteVirtualNodeOutput =>
    __isa(o, "DeleteVirtualNodeOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

  /**
   * <p>The name of the virtual router to delete.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace DeleteVirtualRouterInput {
  export const filterSensitiveLog = (obj: DeleteVirtualRouterInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteVirtualRouterInput =>
    __isa(o, "DeleteVirtualRouterInput");
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
  export const filterSensitiveLog = (obj: DeleteVirtualRouterOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteVirtualRouterOutput =>
    __isa(o, "DeleteVirtualRouterOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

  /**
   * <p>The name of the virtual service to delete.</p>
   */
  virtualServiceName: string | undefined;
}

export namespace DeleteVirtualServiceInput {
  export const filterSensitiveLog = (obj: DeleteVirtualServiceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteVirtualServiceInput =>
    __isa(o, "DeleteVirtualServiceInput");
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
  export const filterSensitiveLog = (obj: DeleteVirtualServiceOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteVirtualServiceOutput =>
    __isa(o, "DeleteVirtualServiceOutput");
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

  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}

export namespace DescribeMeshInput {
  export const filterSensitiveLog = (obj: DescribeMeshInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMeshInput =>
    __isa(o, "DescribeMeshInput");
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
  export const filterSensitiveLog = (obj: DescribeMeshOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMeshOutput =>
    __isa(o, "DescribeMeshOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

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
  export const filterSensitiveLog = (obj: DescribeRouteInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRouteInput =>
    __isa(o, "DescribeRouteInput");
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
  export const filterSensitiveLog = (obj: DescribeRouteOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRouteOutput =>
    __isa(o, "DescribeRouteOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

  /**
   * <p>The name of the virtual node to describe.</p>
   */
  virtualNodeName: string | undefined;
}

export namespace DescribeVirtualNodeInput {
  export const filterSensitiveLog = (obj: DescribeVirtualNodeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeVirtualNodeInput =>
    __isa(o, "DescribeVirtualNodeInput");
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
  export const filterSensitiveLog = (obj: DescribeVirtualNodeOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeVirtualNodeOutput =>
    __isa(o, "DescribeVirtualNodeOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

  /**
   * <p>The name of the virtual router to describe.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace DescribeVirtualRouterInput {
  export const filterSensitiveLog = (obj: DescribeVirtualRouterInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeVirtualRouterInput =>
    __isa(o, "DescribeVirtualRouterInput");
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
  export const filterSensitiveLog = (
    obj: DescribeVirtualRouterOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeVirtualRouterOutput =>
    __isa(o, "DescribeVirtualRouterOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

  /**
   * <p>The name of the virtual service to describe.</p>
   */
  virtualServiceName: string | undefined;
}

export namespace DescribeVirtualServiceInput {
  export const filterSensitiveLog = (
    obj: DescribeVirtualServiceInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeVirtualServiceInput =>
    __isa(o, "DescribeVirtualServiceInput");
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
  export const filterSensitiveLog = (
    obj: DescribeVirtualServiceOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeVirtualServiceOutput =>
    __isa(o, "DescribeVirtualServiceOutput");
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
  export const filterSensitiveLog = (obj: DnsServiceDiscovery): any => ({
    ...obj
  });
  export const isa = (o: any): o is DnsServiceDiscovery =>
    __isa(o, "DnsServiceDiscovery");
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
  export const filterSensitiveLog = (obj: Duration): any => ({
    ...obj
  });
  export const isa = (o: any): o is Duration => __isa(o, "Duration");
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
  export const filterSensitiveLog = (obj: EgressFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is EgressFilter => __isa(o, "EgressFilter");
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
  export const filterSensitiveLog = (obj: FileAccessLog): any => ({
    ...obj
  });
  export const isa = (o: any): o is FileAccessLog => __isa(o, "FileAccessLog");
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
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ForbiddenException =>
    __isa(o, "ForbiddenException");
}

export interface GetMeshPolicyInput {
  __type?: "GetMeshPolicyInput";
  meshArn: string | undefined;
}

export namespace GetMeshPolicyInput {
  export const filterSensitiveLog = (obj: GetMeshPolicyInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMeshPolicyInput =>
    __isa(o, "GetMeshPolicyInput");
}

export interface GetMeshPolicyOutput {
  __type?: "GetMeshPolicyOutput";
  policy: string | undefined;
}

export namespace GetMeshPolicyOutput {
  export const filterSensitiveLog = (obj: GetMeshPolicyOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMeshPolicyOutput =>
    __isa(o, "GetMeshPolicyOutput");
}

/**
 * <p>An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>.</p>
 */
export interface GrpcRetryPolicy {
  __type?: "GrpcRetryPolicy";
  /**
   * <p>Specify at least one of the valid values.</p>
   */
  grpcRetryEvents?: (GrpcRetryPolicyEvent | string)[];

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
  tcpRetryEvents?: (TcpRetryPolicyEvent | string)[];
}

export namespace GrpcRetryPolicy {
  export const filterSensitiveLog = (obj: GrpcRetryPolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is GrpcRetryPolicy =>
    __isa(o, "GrpcRetryPolicy");
}

export enum GrpcRetryPolicyEvent {
  CANCELLED = "cancelled",
  DEADLINE_EXCEEDED = "deadline-exceeded",
  INTERNAL = "internal",
  RESOURCE_EXHAUSTED = "resource-exhausted",
  UNAVAILABLE = "unavailable"
}

/**
 * <p>An object that represents a gRPC route type.</p>
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

  timeout?: GrpcTimeout;
}

export namespace GrpcRoute {
  export const filterSensitiveLog = (obj: GrpcRoute): any => ({
    ...obj
  });
  export const isa = (o: any): o is GrpcRoute => __isa(o, "GrpcRoute");
}

/**
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface GrpcRouteAction {
  __type?: "GrpcRouteAction";
  /**
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   */
  weightedTargets: WeightedTarget[] | undefined;
}

export namespace GrpcRouteAction {
  export const filterSensitiveLog = (obj: GrpcRouteAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is GrpcRouteAction =>
    __isa(o, "GrpcRouteAction");
}

/**
 * <p>An object that represents the criteria for determining a request match.</p>
 */
export interface GrpcRouteMatch {
  __type?: "GrpcRouteMatch";
  /**
   * <p>An object that represents the data to match from the request.</p>
   */
  metadata?: GrpcRouteMetadata[];

  /**
   * <p>The method name to match from the request. If you specify a name, you must also specify
   *          a <code>serviceName</code>.</p>
   */
  methodName?: string;

  /**
   * <p>The fully qualified domain name for the service to match from the request.</p>
   */
  serviceName?: string;
}

export namespace GrpcRouteMatch {
  export const filterSensitiveLog = (obj: GrpcRouteMatch): any => ({
    ...obj
  });
  export const isa = (o: any): o is GrpcRouteMatch =>
    __isa(o, "GrpcRouteMatch");
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
  export const filterSensitiveLog = (obj: GrpcRouteMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is GrpcRouteMetadata =>
    __isa(o, "GrpcRouteMetadata");
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
  export const visit = <T>(
    value: GrpcRouteMetadataMatchMethod,
    visitor: Visitor<T>
  ): T => {
    if (value.exact !== undefined) return visitor.exact(value.exact);
    if (value.prefix !== undefined) return visitor.prefix(value.prefix);
    if (value.range !== undefined) return visitor.range(value.range);
    if (value.regex !== undefined) return visitor.regex(value.regex);
    if (value.suffix !== undefined) return visitor.suffix(value.suffix);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export interface GrpcTimeout {
  __type?: "GrpcTimeout";
  /**
   * <p>An object that represents a duration of time.</p>
   */
  idle?: Duration;

  /**
   * <p>An object that represents a duration of time.</p>
   */
  perRequest?: Duration;
}

export namespace GrpcTimeout {
  export const filterSensitiveLog = (obj: GrpcTimeout): any => ({
    ...obj
  });
  export const isa = (o: any): o is GrpcTimeout => __isa(o, "GrpcTimeout");
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
  export const visit = <T>(
    value: HeaderMatchMethod,
    visitor: Visitor<T>
  ): T => {
    if (value.exact !== undefined) return visitor.exact(value.exact);
    if (value.prefix !== undefined) return visitor.prefix(value.prefix);
    if (value.range !== undefined) return visitor.range(value.range);
    if (value.regex !== undefined) return visitor.regex(value.regex);
    if (value.suffix !== undefined) return visitor.suffix(value.suffix);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
   * <p>The destination path for the health check request. This value is only used if the
   *          specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.</p>
   */
  path?: string;

  /**
   * <p>The destination port for the health check request. This port must match the port defined
   *          in the <a>PortMapping</a> for the listener.</p>
   */
  port?: number;

  /**
   * <p>The protocol for the health check request. If you specify <code>grpc</code>, then your
   *          service must conform to the <a href="https://github.com/grpc/grpc/blob/master/doc/health-checking.md">GRPC Health
   *             Checking Protocol</a>.</p>
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
  export const filterSensitiveLog = (obj: HealthCheckPolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is HealthCheckPolicy =>
    __isa(o, "HealthCheckPolicy");
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
  httpRetryEvents?: string[];

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
  tcpRetryEvents?: (TcpRetryPolicyEvent | string)[];
}

export namespace HttpRetryPolicy {
  export const filterSensitiveLog = (obj: HttpRetryPolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpRetryPolicy =>
    __isa(o, "HttpRetryPolicy");
}

/**
 * <p>An object that represents an HTTP or HTTP/2 route type.</p>
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

  timeout?: HttpTimeout;
}

export namespace HttpRoute {
  export const filterSensitiveLog = (obj: HttpRoute): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpRoute => __isa(o, "HttpRoute");
}

/**
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface HttpRouteAction {
  __type?: "HttpRouteAction";
  /**
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   */
  weightedTargets: WeightedTarget[] | undefined;
}

export namespace HttpRouteAction {
  export const filterSensitiveLog = (obj: HttpRouteAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpRouteAction =>
    __isa(o, "HttpRouteAction");
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
  export const filterSensitiveLog = (obj: HttpRouteHeader): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpRouteHeader =>
    __isa(o, "HttpRouteHeader");
}

/**
 * <p>An object that represents the requirements for a route to match HTTP requests for a
 *          virtual router.</p>
 */
export interface HttpRouteMatch {
  __type?: "HttpRouteMatch";
  /**
   * <p>An object that represents the client request headers to match on.</p>
   */
  headers?: HttpRouteHeader[];

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
  export const filterSensitiveLog = (obj: HttpRouteMatch): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpRouteMatch =>
    __isa(o, "HttpRouteMatch");
}

export enum HttpScheme {
  HTTP = "http",
  HTTPS = "https"
}

export interface HttpTimeout {
  __type?: "HttpTimeout";
  /**
   * <p>An object that represents a duration of time.</p>
   */
  idle?: Duration;

  /**
   * <p>An object that represents a duration of time.</p>
   */
  perRequest?: Duration;
}

export namespace HttpTimeout {
  export const filterSensitiveLog = (obj: HttpTimeout): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpTimeout => __isa(o, "HttpTimeout");
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
  $retryable: {};
  message?: string;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (
    obj: InternalServerErrorException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServerErrorException =>
    __isa(o, "InternalServerErrorException");
}

/**
 * <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service-quotas.html">Service
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
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
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
  export const filterSensitiveLog = (obj: Listener): any => ({
    ...obj
  });
  export const isa = (o: any): o is Listener => __isa(o, "Listener");
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

  meshOwner?: string;
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
  export const filterSensitiveLog = (obj: ListMeshesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListMeshesInput =>
    __isa(o, "ListMeshesInput");
}

/**
 *
 */
export interface ListMeshesOutput {
  __type?: "ListMeshesOutput";
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
  export const filterSensitiveLog = (obj: ListMeshesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListMeshesOutput =>
    __isa(o, "ListMeshesOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

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
  export const filterSensitiveLog = (obj: ListRoutesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRoutesInput =>
    __isa(o, "ListRoutesInput");
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
  routes: RouteRef[] | undefined;
}

export namespace ListRoutesOutput {
  export const filterSensitiveLog = (obj: ListRoutesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRoutesOutput =>
    __isa(o, "ListRoutesOutput");
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
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceInput =>
    __isa(o, "ListTagsForResourceInput");
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
  tags: TagRef[] | undefined;
}

export namespace ListTagsForResourceOutput {
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceOutput =>
    __isa(o, "ListTagsForResourceOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualNodes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;
}

export namespace ListVirtualNodesInput {
  export const filterSensitiveLog = (obj: ListVirtualNodesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListVirtualNodesInput =>
    __isa(o, "ListVirtualNodesInput");
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
  virtualNodes: VirtualNodeRef[] | undefined;
}

export namespace ListVirtualNodesOutput {
  export const filterSensitiveLog = (obj: ListVirtualNodesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListVirtualNodesOutput =>
    __isa(o, "ListVirtualNodesOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualRouters</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;
}

export namespace ListVirtualRoutersInput {
  export const filterSensitiveLog = (obj: ListVirtualRoutersInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListVirtualRoutersInput =>
    __isa(o, "ListVirtualRoutersInput");
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
  virtualRouters: VirtualRouterRef[] | undefined;
}

export namespace ListVirtualRoutersOutput {
  export const filterSensitiveLog = (obj: ListVirtualRoutersOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListVirtualRoutersOutput =>
    __isa(o, "ListVirtualRoutersOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualServices</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;
}

export namespace ListVirtualServicesInput {
  export const filterSensitiveLog = (obj: ListVirtualServicesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListVirtualServicesInput =>
    __isa(o, "ListVirtualServicesInput");
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
  virtualServices: VirtualServiceRef[] | undefined;
}

export namespace ListVirtualServicesOutput {
  export const filterSensitiveLog = (obj: ListVirtualServicesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListVirtualServicesOutput =>
    __isa(o, "ListVirtualServicesOutput");
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
  export const filterSensitiveLog = (obj: Logging): any => ({
    ...obj
  });
  export const isa = (o: any): o is Logging => __isa(o, "Logging");
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
  export const filterSensitiveLog = (obj: MatchRange): any => ({
    ...obj
  });
  export const isa = (o: any): o is MatchRange => __isa(o, "MatchRange");
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
  export const filterSensitiveLog = (obj: MeshData): any => ({
    ...obj
  });
  export const isa = (o: any): o is MeshData => __isa(o, "MeshData");
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

export namespace MeshRef {
  export const filterSensitiveLog = (obj: MeshRef): any => ({
    ...obj
  });
  export const isa = (o: any): o is MeshRef => __isa(o, "MeshRef");
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
  export const filterSensitiveLog = (obj: MeshSpec): any => ({
    ...obj
  });
  export const isa = (o: any): o is MeshSpec => __isa(o, "MeshSpec");
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
  export const filterSensitiveLog = (obj: MeshStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is MeshStatus => __isa(o, "MeshStatus");
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
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotFoundException =>
    __isa(o, "NotFoundException");
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
  export const filterSensitiveLog = (obj: PortMapping): any => ({
    ...obj
  });
  export const isa = (o: any): o is PortMapping => __isa(o, "PortMapping");
}

export enum PortProtocol {
  GRPC = "grpc",
  HTTP = "http",
  HTTP2 = "http2",
  TCP = "tcp"
}

export interface PutMeshPolicyInput {
  __type?: "PutMeshPolicyInput";
  meshArn: string | undefined;
  policy: string | undefined;
}

export namespace PutMeshPolicyInput {
  export const filterSensitiveLog = (obj: PutMeshPolicyInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutMeshPolicyInput =>
    __isa(o, "PutMeshPolicyInput");
}

export interface PutMeshPolicyOutput {
  __type?: "PutMeshPolicyOutput";
}

export namespace PutMeshPolicyOutput {
  export const filterSensitiveLog = (obj: PutMeshPolicyOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutMeshPolicyOutput =>
    __isa(o, "PutMeshPolicyOutput");
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
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceInUseException =>
    __isa(o, "ResourceInUseException");
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
  export const filterSensitiveLog = (obj: ResourceMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceMetadata =>
    __isa(o, "ResourceMetadata");
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
  export const filterSensitiveLog = (obj: RouteData): any => ({
    ...obj
  });
  export const isa = (o: any): o is RouteData => __isa(o, "RouteData");
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
   * <p>The name of the route.</p>
   */
  routeName: string | undefined;

  /**
   * <p>The virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace RouteRef {
  export const filterSensitiveLog = (obj: RouteRef): any => ({
    ...obj
  });
  export const isa = (o: any): o is RouteRef => __isa(o, "RouteRef");
}

/**
 * <p>An object that represents a route specification. Specify one route type.</p>
 */
export interface RouteSpec {
  __type?: "RouteSpec";
  /**
   * <p>An object that represents the specification of a gRPC route.</p>
   */
  grpcRoute?: GrpcRoute;

  /**
   * <p>An object that represents the specification of an HTTP/2 route.</p>
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
  export const filterSensitiveLog = (obj: RouteSpec): any => ({
    ...obj
  });
  export const isa = (o: any): o is RouteSpec => __isa(o, "RouteSpec");
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
  export const filterSensitiveLog = (obj: RouteStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is RouteStatus => __isa(o, "RouteStatus");
}

export enum RouteStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE"
}

export type SdsSource =
  | SdsSource.UnixDomainSocketMember
  | SdsSource.$UnknownMember;

export namespace SdsSource {
  interface $Base {
    __type?: "SdsSource";
  }
  export interface UnixDomainSocketMember extends $Base {
    unixDomainSocket: SdsUnixDomainSocketSource;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    unixDomainSocket?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    unixDomainSocket: (value: SdsUnixDomainSocketSource) => T;
    _: (name: string, value: any) => T;
  }
  export const visit = <T>(value: SdsSource, visitor: Visitor<T>): T => {
    if (value.unixDomainSocket !== undefined)
      return visitor.unixDomainSocket(value.unixDomainSocket);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export interface SdsUnixDomainSocketSource {
  __type?: "SdsUnixDomainSocketSource";
  path: string | undefined;
}

export namespace SdsUnixDomainSocketSource {
  export const filterSensitiveLog = (obj: SdsUnixDomainSocketSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is SdsUnixDomainSocketSource =>
    __isa(o, "SdsUnixDomainSocketSource");
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
  export const visit = <T>(value: ServiceDiscovery, visitor: Visitor<T>): T => {
    if (value.awsCloudMap !== undefined)
      return visitor.awsCloudMap(value.awsCloudMap);
    if (value.dns !== undefined) return visitor.dns(value.dns);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The request has failed due to a temporary failure of the service.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  $retryable: {};
  message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (
    obj: ServiceUnavailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceUnavailableException =>
    __isa(o, "ServiceUnavailableException");
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
  export const filterSensitiveLog = (obj: TagRef): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagRef => __isa(o, "TagRef");
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
  tags: TagRef[] | undefined;
}

export namespace TagResourceInput {
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceInput =>
    __isa(o, "TagResourceInput");
}

/**
 *
 */
export interface TagResourceOutput {
  __type?: "TagResourceOutput";
}

export namespace TagResourceOutput {
  export const filterSensitiveLog = (obj: TagResourceOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceOutput =>
    __isa(o, "TagResourceOutput");
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

  timeout?: TcpTimeout;
}

export namespace TcpRoute {
  export const filterSensitiveLog = (obj: TcpRoute): any => ({
    ...obj
  });
  export const isa = (o: any): o is TcpRoute => __isa(o, "TcpRoute");
}

/**
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface TcpRouteAction {
  __type?: "TcpRouteAction";
  /**
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   */
  weightedTargets: WeightedTarget[] | undefined;
}

export namespace TcpRouteAction {
  export const filterSensitiveLog = (obj: TcpRouteAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is TcpRouteAction =>
    __isa(o, "TcpRouteAction");
}

export interface TcpTimeout {
  __type?: "TcpTimeout";
  /**
   * <p>An object that represents a duration of time.</p>
   */
  idle?: Duration;
}

export namespace TcpTimeout {
  export const filterSensitiveLog = (obj: TcpTimeout): any => ({
    ...obj
  });
  export const isa = (o: any): o is TcpTimeout => __isa(o, "TcpTimeout");
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context.</p>
 */
export interface TlsValidationContext {
  __type?: "TlsValidationContext";
  /**
   * <p>A reference to an object that represents a TLS validation context trust.</p>
   */
  trust: TlsValidationContextTrust | undefined;
}

export namespace TlsValidationContext {
  export const filterSensitiveLog = (obj: TlsValidationContext): any => ({
    ...obj
  });
  export const isa = (o: any): o is TlsValidationContext =>
    __isa(o, "TlsValidationContext");
}

/**
 * <p>An object that represents a TLS validation context trust for an AWS Certicate Manager (ACM)
 *          certificate.</p>
 */
export interface TlsValidationContextAcmTrust {
  __type?: "TlsValidationContextAcmTrust";
  /**
   * <p>One or more ACM Amazon Resource Name (ARN)s.</p>
   */
  certificateAuthorityArns: string[] | undefined;
}

export namespace TlsValidationContextAcmTrust {
  export const filterSensitiveLog = (
    obj: TlsValidationContextAcmTrust
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TlsValidationContextAcmTrust =>
    __isa(o, "TlsValidationContextAcmTrust");
}

/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
 */
export interface TlsValidationContextFileTrust {
  __type?: "TlsValidationContextFileTrust";
  /**
   * <p>The certificate trust chain for a certificate stored on the file system of the virtual
   *          node that the proxy is running on.</p>
   */
  certificateChain: string | undefined;
}

export namespace TlsValidationContextFileTrust {
  export const filterSensitiveLog = (
    obj: TlsValidationContextFileTrust
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TlsValidationContextFileTrust =>
    __isa(o, "TlsValidationContextFileTrust");
}

export interface TlsValidationContextSdsTrust {
  __type?: "TlsValidationContextSdsTrust";
  secretName: string | undefined;
  source: SdsSource | undefined;
}

export namespace TlsValidationContextSdsTrust {
  export const filterSensitiveLog = (
    obj: TlsValidationContextSdsTrust
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TlsValidationContextSdsTrust =>
    __isa(o, "TlsValidationContextSdsTrust");
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
  interface $Base {
    __type?: "TlsValidationContextTrust";
  }
  /**
   * <p>A reference to an object that represents a TLS validation context trust for an AWS Certicate Manager (ACM)
   *          certificate.</p>
   */
  export interface AcmMember extends $Base {
    acm: TlsValidationContextAcmTrust;
    file?: never;
    sds?: never;
    $unknown?: never;
  }
  /**
   * <p>An object that represents a TLS validation context trust for a local file.</p>
   */
  export interface FileMember extends $Base {
    acm?: never;
    file: TlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }
  export interface SdsMember extends $Base {
    acm?: never;
    file?: never;
    sds: TlsValidationContextSdsTrust;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
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
  export const visit = <T>(
    value: TlsValidationContextTrust,
    visitor: Visitor<T>
  ): T => {
    if (value.acm !== undefined) return visitor.acm(value.acm);
    if (value.file !== undefined) return visitor.file(value.file);
    if (value.sds !== undefined) return visitor.sds(value.sds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyRequestsException =>
    __isa(o, "TooManyRequestsException");
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
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyTagsException =>
    __isa(o, "TooManyTagsException");
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
  tagKeys: string[] | undefined;
}

export namespace UntagResourceInput {
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceInput =>
    __isa(o, "UntagResourceInput");
}

/**
 *
 */
export interface UntagResourceOutput {
  __type?: "UntagResourceOutput";
}

export namespace UntagResourceOutput {
  export const filterSensitiveLog = (obj: UntagResourceOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceOutput =>
    __isa(o, "UntagResourceOutput");
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
  export const filterSensitiveLog = (obj: UpdateMeshInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateMeshInput =>
    __isa(o, "UpdateMeshInput");
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
  export const filterSensitiveLog = (obj: UpdateMeshOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateMeshOutput =>
    __isa(o, "UpdateMeshOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

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
  export const filterSensitiveLog = (obj: UpdateRouteInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRouteInput =>
    __isa(o, "UpdateRouteInput");
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
  export const filterSensitiveLog = (obj: UpdateRouteOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRouteOutput =>
    __isa(o, "UpdateRouteOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

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
  export const filterSensitiveLog = (obj: UpdateVirtualNodeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateVirtualNodeInput =>
    __isa(o, "UpdateVirtualNodeInput");
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
  export const filterSensitiveLog = (obj: UpdateVirtualNodeOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateVirtualNodeOutput =>
    __isa(o, "UpdateVirtualNodeOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

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
  export const filterSensitiveLog = (obj: UpdateVirtualRouterInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateVirtualRouterInput =>
    __isa(o, "UpdateVirtualRouterInput");
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
  export const filterSensitiveLog = (obj: UpdateVirtualRouterOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateVirtualRouterOutput =>
    __isa(o, "UpdateVirtualRouterOutput");
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
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;

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
  export const filterSensitiveLog = (obj: UpdateVirtualServiceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateVirtualServiceInput =>
    __isa(o, "UpdateVirtualServiceInput");
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
  export const filterSensitiveLog = (obj: UpdateVirtualServiceOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateVirtualServiceOutput =>
    __isa(o, "UpdateVirtualServiceOutput");
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
  export const filterSensitiveLog = (obj: VirtualNodeData): any => ({
    ...obj
  });
  export const isa = (o: any): o is VirtualNodeData =>
    __isa(o, "VirtualNodeData");
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
   * <p>The name of the virtual node.</p>
   */
  virtualNodeName: string | undefined;
}

export namespace VirtualNodeRef {
  export const filterSensitiveLog = (obj: VirtualNodeRef): any => ({
    ...obj
  });
  export const isa = (o: any): o is VirtualNodeRef =>
    __isa(o, "VirtualNodeRef");
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
  export const filterSensitiveLog = (obj: VirtualNodeServiceProvider): any => ({
    ...obj
  });
  export const isa = (o: any): o is VirtualNodeServiceProvider =>
    __isa(o, "VirtualNodeServiceProvider");
}

/**
 * <p>An object that represents the specification of a virtual node.</p>
 */
export interface VirtualNodeSpec {
  __type?: "VirtualNodeSpec";
  /**
   * <p>A reference to an object that represents the defaults for backends.</p>
   */
  backendDefaults?: BackendDefaults;

  /**
   * <p>The backends that the virtual node is expected to send outbound traffic to.</p>
   */
  backends?: Backend[];

  /**
   * <p>The listener that the virtual node is expected to receive inbound traffic from. You can
   *          specify one listener.</p>
   */
  listeners?: Listener[];

  /**
   * <p>The inbound and outbound access logging information for the virtual node.</p>
   */
  logging?: Logging;

  /**
   * <p>The service discovery information for the virtual node. If your virtual node does not
   *          expect ingress traffic, you can omit this parameter. If you specify a
   *          <code>listener</code>, then you must specify service discovery information.</p>
   */
  serviceDiscovery?: ServiceDiscovery;
}

export namespace VirtualNodeSpec {
  export const filterSensitiveLog = (obj: VirtualNodeSpec): any => ({
    ...obj
  });
  export const isa = (o: any): o is VirtualNodeSpec =>
    __isa(o, "VirtualNodeSpec");
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
  export const filterSensitiveLog = (obj: VirtualNodeStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is VirtualNodeStatus =>
    __isa(o, "VirtualNodeStatus");
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
  export const filterSensitiveLog = (obj: VirtualRouterData): any => ({
    ...obj
  });
  export const isa = (o: any): o is VirtualRouterData =>
    __isa(o, "VirtualRouterData");
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
  export const filterSensitiveLog = (obj: VirtualRouterListener): any => ({
    ...obj
  });
  export const isa = (o: any): o is VirtualRouterListener =>
    __isa(o, "VirtualRouterListener");
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
   * <p>The name of the virtual router.</p>
   */
  virtualRouterName: string | undefined;
}

export namespace VirtualRouterRef {
  export const filterSensitiveLog = (obj: VirtualRouterRef): any => ({
    ...obj
  });
  export const isa = (o: any): o is VirtualRouterRef =>
    __isa(o, "VirtualRouterRef");
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
  export const filterSensitiveLog = (
    obj: VirtualRouterServiceProvider
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is VirtualRouterServiceProvider =>
    __isa(o, "VirtualRouterServiceProvider");
}

/**
 * <p>An object that represents the specification of a virtual router.</p>
 */
export interface VirtualRouterSpec {
  __type?: "VirtualRouterSpec";
  /**
   * <p>The listeners that the virtual router is expected to receive inbound traffic from. You
   *          can specify one listener.</p>
   */
  listeners?: VirtualRouterListener[];
}

export namespace VirtualRouterSpec {
  export const filterSensitiveLog = (obj: VirtualRouterSpec): any => ({
    ...obj
  });
  export const isa = (o: any): o is VirtualRouterSpec =>
    __isa(o, "VirtualRouterSpec");
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
  export const filterSensitiveLog = (obj: VirtualRouterStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is VirtualRouterStatus =>
    __isa(o, "VirtualRouterStatus");
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
   * <p>A reference to an object that represents the client policy for a backend.</p>
   */
  clientPolicy?: ClientPolicy;

  /**
   * <p>The name of the virtual service that is acting as a virtual node backend.</p>
   */
  virtualServiceName: string | undefined;
}

export namespace VirtualServiceBackend {
  export const filterSensitiveLog = (obj: VirtualServiceBackend): any => ({
    ...obj
  });
  export const isa = (o: any): o is VirtualServiceBackend =>
    __isa(o, "VirtualServiceBackend");
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
  export const filterSensitiveLog = (obj: VirtualServiceData): any => ({
    ...obj
  });
  export const isa = (o: any): o is VirtualServiceData =>
    __isa(o, "VirtualServiceData");
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
  export const visit = <T>(
    value: VirtualServiceProvider,
    visitor: Visitor<T>
  ): T => {
    if (value.virtualNode !== undefined)
      return visitor.virtualNode(value.virtualNode);
    if (value.virtualRouter !== undefined)
      return visitor.virtualRouter(value.virtualRouter);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
   * <p>The name of the virtual service.</p>
   */
  virtualServiceName: string | undefined;
}

export namespace VirtualServiceRef {
  export const filterSensitiveLog = (obj: VirtualServiceRef): any => ({
    ...obj
  });
  export const isa = (o: any): o is VirtualServiceRef =>
    __isa(o, "VirtualServiceRef");
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
  export const filterSensitiveLog = (obj: VirtualServiceSpec): any => ({
    ...obj
  });
  export const isa = (o: any): o is VirtualServiceSpec =>
    __isa(o, "VirtualServiceSpec");
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
  export const filterSensitiveLog = (obj: VirtualServiceStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is VirtualServiceStatus =>
    __isa(o, "VirtualServiceStatus");
}

export enum VirtualServiceStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE"
}

/**
 * <p>An object that represents a target and its relative weight. Traffic is distributed
 *          across targets according to their relative weight. For example, a weighted target with a
 *          relative weight of 50 receives five times as much traffic as one with a relative weight of
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
  export const filterSensitiveLog = (obj: WeightedTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is WeightedTarget =>
    __isa(o, "WeightedTarget");
}
