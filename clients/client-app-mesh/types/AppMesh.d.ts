import { AppMeshClient } from "./AppMeshClient";
import { CreateMeshCommandInput, CreateMeshCommandOutput } from "./commands/CreateMeshCommand";
import { CreateRouteCommandInput, CreateRouteCommandOutput } from "./commands/CreateRouteCommand";
import { CreateVirtualNodeCommandInput, CreateVirtualNodeCommandOutput } from "./commands/CreateVirtualNodeCommand";
import { CreateVirtualRouterCommandInput, CreateVirtualRouterCommandOutput } from "./commands/CreateVirtualRouterCommand";
import { CreateVirtualServiceCommandInput, CreateVirtualServiceCommandOutput } from "./commands/CreateVirtualServiceCommand";
import { DeleteMeshCommandInput, DeleteMeshCommandOutput } from "./commands/DeleteMeshCommand";
import { DeleteRouteCommandInput, DeleteRouteCommandOutput } from "./commands/DeleteRouteCommand";
import { DeleteVirtualNodeCommandInput, DeleteVirtualNodeCommandOutput } from "./commands/DeleteVirtualNodeCommand";
import { DeleteVirtualRouterCommandInput, DeleteVirtualRouterCommandOutput } from "./commands/DeleteVirtualRouterCommand";
import { DeleteVirtualServiceCommandInput, DeleteVirtualServiceCommandOutput } from "./commands/DeleteVirtualServiceCommand";
import { DescribeMeshCommandInput, DescribeMeshCommandOutput } from "./commands/DescribeMeshCommand";
import { DescribeRouteCommandInput, DescribeRouteCommandOutput } from "./commands/DescribeRouteCommand";
import { DescribeVirtualNodeCommandInput, DescribeVirtualNodeCommandOutput } from "./commands/DescribeVirtualNodeCommand";
import { DescribeVirtualRouterCommandInput, DescribeVirtualRouterCommandOutput } from "./commands/DescribeVirtualRouterCommand";
import { DescribeVirtualServiceCommandInput, DescribeVirtualServiceCommandOutput } from "./commands/DescribeVirtualServiceCommand";
import { ListMeshesCommandInput, ListMeshesCommandOutput } from "./commands/ListMeshesCommand";
import { ListRoutesCommandInput, ListRoutesCommandOutput } from "./commands/ListRoutesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListVirtualNodesCommandInput, ListVirtualNodesCommandOutput } from "./commands/ListVirtualNodesCommand";
import { ListVirtualRoutersCommandInput, ListVirtualRoutersCommandOutput } from "./commands/ListVirtualRoutersCommand";
import { ListVirtualServicesCommandInput, ListVirtualServicesCommandOutput } from "./commands/ListVirtualServicesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateMeshCommandInput, UpdateMeshCommandOutput } from "./commands/UpdateMeshCommand";
import { UpdateRouteCommandInput, UpdateRouteCommandOutput } from "./commands/UpdateRouteCommand";
import { UpdateVirtualNodeCommandInput, UpdateVirtualNodeCommandOutput } from "./commands/UpdateVirtualNodeCommand";
import { UpdateVirtualRouterCommandInput, UpdateVirtualRouterCommandOutput } from "./commands/UpdateVirtualRouterCommand";
import { UpdateVirtualServiceCommandInput, UpdateVirtualServiceCommandOutput } from "./commands/UpdateVirtualServiceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS App Mesh is a service mesh based on the Envoy proxy that makes it easy to monitor and
 *          control microservices. App Mesh standardizes how your microservices communicate, giving you
 *          end-to-end visibility and helping to ensure high availability for your applications.</p>
 *          <p>App Mesh gives you consistent visibility and network traffic controls for every
 *          microservice in an application. You can use App Mesh with AWS Fargate, Amazon ECS, Amazon EKS,
 *          Kubernetes on AWS, and Amazon EC2.</p>
 *          <note>
 *             <p>App Mesh supports microservice applications that use service discovery naming for their
 *             components. For more information about service discovery on Amazon ECS, see <a href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a> in the
 *                <i>Amazon Elastic Container Service Developer Guide</i>. Kubernetes <code>kube-dns</code> and
 *                <code>coredns</code> are supported. For more information, see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/">DNS
 *                for Services and Pods</a> in the Kubernetes documentation.</p>
 *          </note>
 */
export declare class AppMesh extends AppMeshClient {
    /**
     * <p>Creates a service mesh. A service mesh is a logical boundary for network traffic between
     *          the services that reside within it.</p>
     *          <p>After you create your service mesh, you can create virtual services, virtual nodes,
     *          virtual routers, and routes to distribute traffic between the applications in your
     *          mesh.</p>
     */
    createMesh(args: CreateMeshCommandInput, options?: __HttpHandlerOptions): Promise<CreateMeshCommandOutput>;
    createMesh(args: CreateMeshCommandInput, cb: (err: any, data?: CreateMeshCommandOutput) => void): void;
    createMesh(args: CreateMeshCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMeshCommandOutput) => void): void;
    /**
     * <p>Creates a route that is associated with a virtual router.</p>
     *          <p>You can use the <code>prefix</code> parameter in your route specification for path-based
     *          routing of requests. For example, if your virtual service name is
     *             <code>my-service.local</code> and you want the route to match requests to
     *             <code>my-service.local/metrics</code>, your prefix should be
     *          <code>/metrics</code>.</p>
     *          <p>If your route matches a request, you can distribute traffic to one or more target
     *          virtual nodes with relative weighting.</p>
     */
    createRoute(args: CreateRouteCommandInput, options?: __HttpHandlerOptions): Promise<CreateRouteCommandOutput>;
    createRoute(args: CreateRouteCommandInput, cb: (err: any, data?: CreateRouteCommandOutput) => void): void;
    createRoute(args: CreateRouteCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRouteCommandOutput) => void): void;
    /**
     * <p>Creates a virtual node within a service mesh.</p>
     *          <p>A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS
     *          service or a Kubernetes deployment. When you create a virtual node, you can specify the
     *          service discovery information for your task group.</p>
     *          <p>Any inbound traffic that your virtual node expects should be specified as a
     *             <code>listener</code>. Any outbound traffic that your virtual node expects to reach
     *          should be specified as a <code>backend</code>.</p>
     *          <p>The response metadata for your new virtual node contains the <code>arn</code> that is
     *          associated with the virtual node. Set this value (either the full ARN or the truncated
     *          resource name: for example, <code>mesh/default/virtualNode/simpleapp</code>) as the
     *             <code>APPMESH_VIRTUAL_NODE_NAME</code> environment variable for your task group's Envoy
     *          proxy container in your task definition or pod spec. This is then mapped to the
     *             <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p>
     *          <note>
     *             <p>If you require your Envoy stats or tracing to use a different name, you can override
     *             the <code>node.cluster</code> value that is set by
     *                <code>APPMESH_VIRTUAL_NODE_NAME</code> with the
     *                <code>APPMESH_VIRTUAL_NODE_CLUSTER</code> environment variable.</p>
     *          </note>
     */
    createVirtualNode(args: CreateVirtualNodeCommandInput, options?: __HttpHandlerOptions): Promise<CreateVirtualNodeCommandOutput>;
    createVirtualNode(args: CreateVirtualNodeCommandInput, cb: (err: any, data?: CreateVirtualNodeCommandOutput) => void): void;
    createVirtualNode(args: CreateVirtualNodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateVirtualNodeCommandOutput) => void): void;
    /**
     * <p>Creates a virtual router within a service mesh.</p>
     *          <p>Any inbound traffic that your virtual router expects should be specified as a
     *             <code>listener</code>. </p>
     *          <p>Virtual routers handle traffic for one or more virtual services within your mesh. After
     *          you create your virtual router, create and associate routes for your virtual router that
     *          direct incoming requests to different virtual nodes.</p>
     */
    createVirtualRouter(args: CreateVirtualRouterCommandInput, options?: __HttpHandlerOptions): Promise<CreateVirtualRouterCommandOutput>;
    createVirtualRouter(args: CreateVirtualRouterCommandInput, cb: (err: any, data?: CreateVirtualRouterCommandOutput) => void): void;
    createVirtualRouter(args: CreateVirtualRouterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateVirtualRouterCommandOutput) => void): void;
    /**
     * <p>Creates a virtual service within a service mesh.</p>
     *          <p>A virtual service is an abstraction of a real service that is provided by a virtual node
     *          directly or indirectly by means of a virtual router. Dependent services call your virtual
     *          service by its <code>virtualServiceName</code>, and those requests are routed to the
     *          virtual node or virtual router that is specified as the provider for the virtual
     *          service.</p>
     */
    createVirtualService(args: CreateVirtualServiceCommandInput, options?: __HttpHandlerOptions): Promise<CreateVirtualServiceCommandOutput>;
    createVirtualService(args: CreateVirtualServiceCommandInput, cb: (err: any, data?: CreateVirtualServiceCommandOutput) => void): void;
    createVirtualService(args: CreateVirtualServiceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateVirtualServiceCommandOutput) => void): void;
    /**
     * <p>Deletes an existing service mesh.</p>
     *          <p>You must delete all resources (virtual services, routes, virtual routers, and virtual
     *          nodes) in the service mesh before you can delete the mesh itself.</p>
     */
    deleteMesh(args: DeleteMeshCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMeshCommandOutput>;
    deleteMesh(args: DeleteMeshCommandInput, cb: (err: any, data?: DeleteMeshCommandOutput) => void): void;
    deleteMesh(args: DeleteMeshCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMeshCommandOutput) => void): void;
    /**
     * <p>Deletes an existing route.</p>
     */
    deleteRoute(args: DeleteRouteCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRouteCommandOutput>;
    deleteRoute(args: DeleteRouteCommandInput, cb: (err: any, data?: DeleteRouteCommandOutput) => void): void;
    deleteRoute(args: DeleteRouteCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRouteCommandOutput) => void): void;
    /**
     * <p>Deletes an existing virtual node.</p>
     *          <p>You must delete any virtual services that list a virtual node as a service provider
     *          before you can delete the virtual node itself.</p>
     */
    deleteVirtualNode(args: DeleteVirtualNodeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVirtualNodeCommandOutput>;
    deleteVirtualNode(args: DeleteVirtualNodeCommandInput, cb: (err: any, data?: DeleteVirtualNodeCommandOutput) => void): void;
    deleteVirtualNode(args: DeleteVirtualNodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteVirtualNodeCommandOutput) => void): void;
    /**
     * <p>Deletes an existing virtual router.</p>
     *          <p>You must delete any routes associated with the virtual router before you can delete the
     *          router itself.</p>
     */
    deleteVirtualRouter(args: DeleteVirtualRouterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVirtualRouterCommandOutput>;
    deleteVirtualRouter(args: DeleteVirtualRouterCommandInput, cb: (err: any, data?: DeleteVirtualRouterCommandOutput) => void): void;
    deleteVirtualRouter(args: DeleteVirtualRouterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteVirtualRouterCommandOutput) => void): void;
    /**
     * <p>Deletes an existing virtual service.</p>
     */
    deleteVirtualService(args: DeleteVirtualServiceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVirtualServiceCommandOutput>;
    deleteVirtualService(args: DeleteVirtualServiceCommandInput, cb: (err: any, data?: DeleteVirtualServiceCommandOutput) => void): void;
    deleteVirtualService(args: DeleteVirtualServiceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteVirtualServiceCommandOutput) => void): void;
    /**
     * <p>Describes an existing service mesh.</p>
     */
    describeMesh(args: DescribeMeshCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMeshCommandOutput>;
    describeMesh(args: DescribeMeshCommandInput, cb: (err: any, data?: DescribeMeshCommandOutput) => void): void;
    describeMesh(args: DescribeMeshCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMeshCommandOutput) => void): void;
    /**
     * <p>Describes an existing route.</p>
     */
    describeRoute(args: DescribeRouteCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRouteCommandOutput>;
    describeRoute(args: DescribeRouteCommandInput, cb: (err: any, data?: DescribeRouteCommandOutput) => void): void;
    describeRoute(args: DescribeRouteCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRouteCommandOutput) => void): void;
    /**
     * <p>Describes an existing virtual node.</p>
     */
    describeVirtualNode(args: DescribeVirtualNodeCommandInput, options?: __HttpHandlerOptions): Promise<DescribeVirtualNodeCommandOutput>;
    describeVirtualNode(args: DescribeVirtualNodeCommandInput, cb: (err: any, data?: DescribeVirtualNodeCommandOutput) => void): void;
    describeVirtualNode(args: DescribeVirtualNodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeVirtualNodeCommandOutput) => void): void;
    /**
     * <p>Describes an existing virtual router.</p>
     */
    describeVirtualRouter(args: DescribeVirtualRouterCommandInput, options?: __HttpHandlerOptions): Promise<DescribeVirtualRouterCommandOutput>;
    describeVirtualRouter(args: DescribeVirtualRouterCommandInput, cb: (err: any, data?: DescribeVirtualRouterCommandOutput) => void): void;
    describeVirtualRouter(args: DescribeVirtualRouterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeVirtualRouterCommandOutput) => void): void;
    /**
     * <p>Describes an existing virtual service.</p>
     */
    describeVirtualService(args: DescribeVirtualServiceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeVirtualServiceCommandOutput>;
    describeVirtualService(args: DescribeVirtualServiceCommandInput, cb: (err: any, data?: DescribeVirtualServiceCommandOutput) => void): void;
    describeVirtualService(args: DescribeVirtualServiceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeVirtualServiceCommandOutput) => void): void;
    /**
     * <p>Returns a list of existing service meshes.</p>
     */
    listMeshes(args: ListMeshesCommandInput, options?: __HttpHandlerOptions): Promise<ListMeshesCommandOutput>;
    listMeshes(args: ListMeshesCommandInput, cb: (err: any, data?: ListMeshesCommandOutput) => void): void;
    listMeshes(args: ListMeshesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMeshesCommandOutput) => void): void;
    /**
     * <p>Returns a list of existing routes in a service mesh.</p>
     */
    listRoutes(args: ListRoutesCommandInput, options?: __HttpHandlerOptions): Promise<ListRoutesCommandOutput>;
    listRoutes(args: ListRoutesCommandInput, cb: (err: any, data?: ListRoutesCommandOutput) => void): void;
    listRoutes(args: ListRoutesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRoutesCommandOutput) => void): void;
    /**
     * <p>List the tags for an App Mesh resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Returns a list of existing virtual nodes.</p>
     */
    listVirtualNodes(args: ListVirtualNodesCommandInput, options?: __HttpHandlerOptions): Promise<ListVirtualNodesCommandOutput>;
    listVirtualNodes(args: ListVirtualNodesCommandInput, cb: (err: any, data?: ListVirtualNodesCommandOutput) => void): void;
    listVirtualNodes(args: ListVirtualNodesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListVirtualNodesCommandOutput) => void): void;
    /**
     * <p>Returns a list of existing virtual routers in a service mesh.</p>
     */
    listVirtualRouters(args: ListVirtualRoutersCommandInput, options?: __HttpHandlerOptions): Promise<ListVirtualRoutersCommandOutput>;
    listVirtualRouters(args: ListVirtualRoutersCommandInput, cb: (err: any, data?: ListVirtualRoutersCommandOutput) => void): void;
    listVirtualRouters(args: ListVirtualRoutersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListVirtualRoutersCommandOutput) => void): void;
    /**
     * <p>Returns a list of existing virtual services in a service mesh.</p>
     */
    listVirtualServices(args: ListVirtualServicesCommandInput, options?: __HttpHandlerOptions): Promise<ListVirtualServicesCommandOutput>;
    listVirtualServices(args: ListVirtualServicesCommandInput, cb: (err: any, data?: ListVirtualServicesCommandOutput) => void): void;
    listVirtualServices(args: ListVirtualServicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListVirtualServicesCommandOutput) => void): void;
    /**
     * <p>Associates the specified tags to a resource with the specified <code>resourceArn</code>.
     *          If existing tags on a resource aren't specified in the request parameters, they aren't
     *          changed. When a resource is deleted, the tags associated with that resource are also
     *          deleted.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Deletes specified tags from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates an existing service mesh.</p>
     */
    updateMesh(args: UpdateMeshCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMeshCommandOutput>;
    updateMesh(args: UpdateMeshCommandInput, cb: (err: any, data?: UpdateMeshCommandOutput) => void): void;
    updateMesh(args: UpdateMeshCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMeshCommandOutput) => void): void;
    /**
     * <p>Updates an existing route for a specified service mesh and virtual router.</p>
     */
    updateRoute(args: UpdateRouteCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRouteCommandOutput>;
    updateRoute(args: UpdateRouteCommandInput, cb: (err: any, data?: UpdateRouteCommandOutput) => void): void;
    updateRoute(args: UpdateRouteCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRouteCommandOutput) => void): void;
    /**
     * <p>Updates an existing virtual node in a specified service mesh.</p>
     */
    updateVirtualNode(args: UpdateVirtualNodeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVirtualNodeCommandOutput>;
    updateVirtualNode(args: UpdateVirtualNodeCommandInput, cb: (err: any, data?: UpdateVirtualNodeCommandOutput) => void): void;
    updateVirtualNode(args: UpdateVirtualNodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateVirtualNodeCommandOutput) => void): void;
    /**
     * <p>Updates an existing virtual router in a specified service mesh.</p>
     */
    updateVirtualRouter(args: UpdateVirtualRouterCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVirtualRouterCommandOutput>;
    updateVirtualRouter(args: UpdateVirtualRouterCommandInput, cb: (err: any, data?: UpdateVirtualRouterCommandOutput) => void): void;
    updateVirtualRouter(args: UpdateVirtualRouterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateVirtualRouterCommandOutput) => void): void;
    /**
     * <p>Updates an existing virtual service in a specified service mesh.</p>
     */
    updateVirtualService(args: UpdateVirtualServiceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVirtualServiceCommandOutput>;
    updateVirtualService(args: UpdateVirtualServiceCommandInput, cb: (err: any, data?: UpdateVirtualServiceCommandOutput) => void): void;
    updateVirtualService(args: UpdateVirtualServiceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateVirtualServiceCommandOutput) => void): void;
}
