// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AppMeshClient } from "./AppMeshClient";
import {
  CreateGatewayRouteCommand,
  CreateGatewayRouteCommandInput,
  CreateGatewayRouteCommandOutput,
} from "./commands/CreateGatewayRouteCommand";
import { CreateMeshCommand, CreateMeshCommandInput, CreateMeshCommandOutput } from "./commands/CreateMeshCommand";
import { CreateRouteCommand, CreateRouteCommandInput, CreateRouteCommandOutput } from "./commands/CreateRouteCommand";
import {
  CreateVirtualGatewayCommand,
  CreateVirtualGatewayCommandInput,
  CreateVirtualGatewayCommandOutput,
} from "./commands/CreateVirtualGatewayCommand";
import {
  CreateVirtualNodeCommand,
  CreateVirtualNodeCommandInput,
  CreateVirtualNodeCommandOutput,
} from "./commands/CreateVirtualNodeCommand";
import {
  CreateVirtualRouterCommand,
  CreateVirtualRouterCommandInput,
  CreateVirtualRouterCommandOutput,
} from "./commands/CreateVirtualRouterCommand";
import {
  CreateVirtualServiceCommand,
  CreateVirtualServiceCommandInput,
  CreateVirtualServiceCommandOutput,
} from "./commands/CreateVirtualServiceCommand";
import {
  DeleteGatewayRouteCommand,
  DeleteGatewayRouteCommandInput,
  DeleteGatewayRouteCommandOutput,
} from "./commands/DeleteGatewayRouteCommand";
import { DeleteMeshCommand, DeleteMeshCommandInput, DeleteMeshCommandOutput } from "./commands/DeleteMeshCommand";
import { DeleteRouteCommand, DeleteRouteCommandInput, DeleteRouteCommandOutput } from "./commands/DeleteRouteCommand";
import {
  DeleteVirtualGatewayCommand,
  DeleteVirtualGatewayCommandInput,
  DeleteVirtualGatewayCommandOutput,
} from "./commands/DeleteVirtualGatewayCommand";
import {
  DeleteVirtualNodeCommand,
  DeleteVirtualNodeCommandInput,
  DeleteVirtualNodeCommandOutput,
} from "./commands/DeleteVirtualNodeCommand";
import {
  DeleteVirtualRouterCommand,
  DeleteVirtualRouterCommandInput,
  DeleteVirtualRouterCommandOutput,
} from "./commands/DeleteVirtualRouterCommand";
import {
  DeleteVirtualServiceCommand,
  DeleteVirtualServiceCommandInput,
  DeleteVirtualServiceCommandOutput,
} from "./commands/DeleteVirtualServiceCommand";
import {
  DescribeGatewayRouteCommand,
  DescribeGatewayRouteCommandInput,
  DescribeGatewayRouteCommandOutput,
} from "./commands/DescribeGatewayRouteCommand";
import {
  DescribeMeshCommand,
  DescribeMeshCommandInput,
  DescribeMeshCommandOutput,
} from "./commands/DescribeMeshCommand";
import {
  DescribeRouteCommand,
  DescribeRouteCommandInput,
  DescribeRouteCommandOutput,
} from "./commands/DescribeRouteCommand";
import {
  DescribeVirtualGatewayCommand,
  DescribeVirtualGatewayCommandInput,
  DescribeVirtualGatewayCommandOutput,
} from "./commands/DescribeVirtualGatewayCommand";
import {
  DescribeVirtualNodeCommand,
  DescribeVirtualNodeCommandInput,
  DescribeVirtualNodeCommandOutput,
} from "./commands/DescribeVirtualNodeCommand";
import {
  DescribeVirtualRouterCommand,
  DescribeVirtualRouterCommandInput,
  DescribeVirtualRouterCommandOutput,
} from "./commands/DescribeVirtualRouterCommand";
import {
  DescribeVirtualServiceCommand,
  DescribeVirtualServiceCommandInput,
  DescribeVirtualServiceCommandOutput,
} from "./commands/DescribeVirtualServiceCommand";
import {
  ListGatewayRoutesCommand,
  ListGatewayRoutesCommandInput,
  ListGatewayRoutesCommandOutput,
} from "./commands/ListGatewayRoutesCommand";
import { ListMeshesCommand, ListMeshesCommandInput, ListMeshesCommandOutput } from "./commands/ListMeshesCommand";
import { ListRoutesCommand, ListRoutesCommandInput, ListRoutesCommandOutput } from "./commands/ListRoutesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVirtualGatewaysCommand,
  ListVirtualGatewaysCommandInput,
  ListVirtualGatewaysCommandOutput,
} from "./commands/ListVirtualGatewaysCommand";
import {
  ListVirtualNodesCommand,
  ListVirtualNodesCommandInput,
  ListVirtualNodesCommandOutput,
} from "./commands/ListVirtualNodesCommand";
import {
  ListVirtualRoutersCommand,
  ListVirtualRoutersCommandInput,
  ListVirtualRoutersCommandOutput,
} from "./commands/ListVirtualRoutersCommand";
import {
  ListVirtualServicesCommand,
  ListVirtualServicesCommandInput,
  ListVirtualServicesCommandOutput,
} from "./commands/ListVirtualServicesCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateGatewayRouteCommand,
  UpdateGatewayRouteCommandInput,
  UpdateGatewayRouteCommandOutput,
} from "./commands/UpdateGatewayRouteCommand";
import { UpdateMeshCommand, UpdateMeshCommandInput, UpdateMeshCommandOutput } from "./commands/UpdateMeshCommand";
import { UpdateRouteCommand, UpdateRouteCommandInput, UpdateRouteCommandOutput } from "./commands/UpdateRouteCommand";
import {
  UpdateVirtualGatewayCommand,
  UpdateVirtualGatewayCommandInput,
  UpdateVirtualGatewayCommandOutput,
} from "./commands/UpdateVirtualGatewayCommand";
import {
  UpdateVirtualNodeCommand,
  UpdateVirtualNodeCommandInput,
  UpdateVirtualNodeCommandOutput,
} from "./commands/UpdateVirtualNodeCommand";
import {
  UpdateVirtualRouterCommand,
  UpdateVirtualRouterCommandInput,
  UpdateVirtualRouterCommandOutput,
} from "./commands/UpdateVirtualRouterCommand";
import {
  UpdateVirtualServiceCommand,
  UpdateVirtualServiceCommandInput,
  UpdateVirtualServiceCommandOutput,
} from "./commands/UpdateVirtualServiceCommand";

/**
 * <p>App Mesh is a service mesh based on the Envoy proxy that makes it easy to
 *          monitor and control microservices. App Mesh standardizes how your microservices
 *          communicate, giving you end-to-end visibility and helping to ensure high availability for
 *          your applications.</p>
 *          <p>App Mesh gives you consistent visibility and network traffic controls for
 *          every microservice in an application. You can use App Mesh with Amazon Web Services Fargate, Amazon ECS, Amazon EKS, Kubernetes on Amazon Web Services, and
 *             Amazon EC2.</p>
 *          <note>
 *             <p>App Mesh supports microservice applications that use service discovery
 *             naming for their components. For more information about service discovery on Amazon ECS, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service
 *                Discovery</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. Kubernetes
 *                <code>kube-dns</code> and <code>coredns</code> are supported. For more information,
 *             see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/">DNS
 *                for Services and Pods</a> in the Kubernetes documentation.</p>
 *          </note>
 */
export class AppMesh extends AppMeshClient {
  /**
   * <p>Creates a gateway route.</p>
   *          <p>A gateway route is attached to a virtual gateway and routes traffic to an existing
   *          virtual service. If a route matches a request, it can distribute traffic to a target
   *          virtual service.</p>
   *          <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>
   */
  public createGatewayRoute(
    args: CreateGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGatewayRouteCommandOutput>;
  public createGatewayRoute(
    args: CreateGatewayRouteCommandInput,
    cb: (err: any, data?: CreateGatewayRouteCommandOutput) => void
  ): void;
  public createGatewayRoute(
    args: CreateGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGatewayRouteCommandOutput) => void
  ): void;
  public createGatewayRoute(
    args: CreateGatewayRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGatewayRouteCommandOutput) => void),
    cb?: (err: any, data?: CreateGatewayRouteCommandOutput) => void
  ): Promise<CreateGatewayRouteCommandOutput> | void {
    const command = new CreateGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a service mesh.</p>
   *          <p> A service mesh is a logical boundary for network traffic between services that are
   *          represented by resources within the mesh. After you create your service mesh, you can
   *          create virtual services, virtual nodes, virtual routers, and routes to distribute traffic
   *          between the applications in your mesh.</p>
   *          <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
   */
  public createMesh(args: CreateMeshCommandInput, options?: __HttpHandlerOptions): Promise<CreateMeshCommandOutput>;
  public createMesh(args: CreateMeshCommandInput, cb: (err: any, data?: CreateMeshCommandOutput) => void): void;
  public createMesh(
    args: CreateMeshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMeshCommandOutput) => void
  ): void;
  public createMesh(
    args: CreateMeshCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMeshCommandOutput) => void),
    cb?: (err: any, data?: CreateMeshCommandOutput) => void
  ): Promise<CreateMeshCommandOutput> | void {
    const command = new CreateMeshCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a route that is associated with a virtual router.</p>
   *          <p> You can route several different protocols and define a retry policy for a route.
   *          Traffic can be routed to one or more virtual nodes.</p>
   *          <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>
   */
  public createRoute(args: CreateRouteCommandInput, options?: __HttpHandlerOptions): Promise<CreateRouteCommandOutput>;
  public createRoute(args: CreateRouteCommandInput, cb: (err: any, data?: CreateRouteCommandOutput) => void): void;
  public createRoute(
    args: CreateRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteCommandOutput) => void
  ): void;
  public createRoute(
    args: CreateRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRouteCommandOutput) => void),
    cb?: (err: any, data?: CreateRouteCommandOutput) => void
  ): Promise<CreateRouteCommandOutput> | void {
    const command = new CreateRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a virtual gateway.</p>
   *          <p>A virtual gateway allows resources outside your mesh to communicate to resources that
   *          are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a
   *          virtual node, which represents an Envoy running with an application, a virtual gateway
   *          represents Envoy deployed by itself.</p>
   *          <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>
   */
  public createVirtualGateway(
    args: CreateVirtualGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVirtualGatewayCommandOutput>;
  public createVirtualGateway(
    args: CreateVirtualGatewayCommandInput,
    cb: (err: any, data?: CreateVirtualGatewayCommandOutput) => void
  ): void;
  public createVirtualGateway(
    args: CreateVirtualGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVirtualGatewayCommandOutput) => void
  ): void;
  public createVirtualGateway(
    args: CreateVirtualGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVirtualGatewayCommandOutput) => void),
    cb?: (err: any, data?: CreateVirtualGatewayCommandOutput) => void
  ): Promise<CreateVirtualGatewayCommandOutput> | void {
    const command = new CreateVirtualGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a virtual node within a service mesh.</p>
   *          <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can
   *          specify the service discovery information for your task group, and whether the proxy
   *          running in a task group will communicate with other proxies using Transport Layer Security
   *          (TLS).</p>
   *          <p>You define a <code>listener</code> for any inbound traffic that your virtual node
   *          expects. Any virtual service that your virtual node expects to communicate to is specified
   *          as a <code>backend</code>.</p>
   *          <p>The response metadata for your new virtual node contains the <code>arn</code> that is
   *          associated with the virtual node. Set this value to the full ARN; for example,
   *             <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>)
   *          as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy
   *          proxy container in your task definition or pod spec. This is then mapped to the
   *             <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p>
   *          <note>
   *             <p>By default, App Mesh uses the name of the resource you specified in
   *                <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and
   *             traces. You can override this behavior by setting the
   *                <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p>
   *          </note>
   *          <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when
   *          setting these variables. For more information aboutApp Mesh Envoy variables, see
   *             <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy
   *             image</a> in the App Mesh User Guide.</p>
   */
  public createVirtualNode(
    args: CreateVirtualNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVirtualNodeCommandOutput>;
  public createVirtualNode(
    args: CreateVirtualNodeCommandInput,
    cb: (err: any, data?: CreateVirtualNodeCommandOutput) => void
  ): void;
  public createVirtualNode(
    args: CreateVirtualNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVirtualNodeCommandOutput) => void
  ): void;
  public createVirtualNode(
    args: CreateVirtualNodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVirtualNodeCommandOutput) => void),
    cb?: (err: any, data?: CreateVirtualNodeCommandOutput) => void
  ): Promise<CreateVirtualNodeCommandOutput> | void {
    const command = new CreateVirtualNodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a virtual router within a service mesh.</p>
   *          <p>Specify a <code>listener</code> for any inbound traffic that your virtual router
   *          receives. Create a virtual router for each protocol and port that you need to route.
   *          Virtual routers handle traffic for one or more virtual services within your mesh. After you
   *          create your virtual router, create and associate routes for your virtual router that direct
   *          incoming requests to different virtual nodes.</p>
   *          <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>
   */
  public createVirtualRouter(
    args: CreateVirtualRouterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVirtualRouterCommandOutput>;
  public createVirtualRouter(
    args: CreateVirtualRouterCommandInput,
    cb: (err: any, data?: CreateVirtualRouterCommandOutput) => void
  ): void;
  public createVirtualRouter(
    args: CreateVirtualRouterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVirtualRouterCommandOutput) => void
  ): void;
  public createVirtualRouter(
    args: CreateVirtualRouterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVirtualRouterCommandOutput) => void),
    cb?: (err: any, data?: CreateVirtualRouterCommandOutput) => void
  ): Promise<CreateVirtualRouterCommandOutput> | void {
    const command = new CreateVirtualRouterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a virtual service within a service mesh.</p>
   *          <p>A virtual service is an abstraction of a real service that is provided by a virtual node
   *          directly or indirectly by means of a virtual router. Dependent services call your virtual
   *          service by its <code>virtualServiceName</code>, and those requests are routed to the
   *          virtual node or virtual router that is specified as the provider for the virtual
   *          service.</p>
   *          <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
   */
  public createVirtualService(
    args: CreateVirtualServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVirtualServiceCommandOutput>;
  public createVirtualService(
    args: CreateVirtualServiceCommandInput,
    cb: (err: any, data?: CreateVirtualServiceCommandOutput) => void
  ): void;
  public createVirtualService(
    args: CreateVirtualServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVirtualServiceCommandOutput) => void
  ): void;
  public createVirtualService(
    args: CreateVirtualServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVirtualServiceCommandOutput) => void),
    cb?: (err: any, data?: CreateVirtualServiceCommandOutput) => void
  ): Promise<CreateVirtualServiceCommandOutput> | void {
    const command = new CreateVirtualServiceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing gateway route.</p>
   */
  public deleteGatewayRoute(
    args: DeleteGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGatewayRouteCommandOutput>;
  public deleteGatewayRoute(
    args: DeleteGatewayRouteCommandInput,
    cb: (err: any, data?: DeleteGatewayRouteCommandOutput) => void
  ): void;
  public deleteGatewayRoute(
    args: DeleteGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayRouteCommandOutput) => void
  ): void;
  public deleteGatewayRoute(
    args: DeleteGatewayRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGatewayRouteCommandOutput) => void),
    cb?: (err: any, data?: DeleteGatewayRouteCommandOutput) => void
  ): Promise<DeleteGatewayRouteCommandOutput> | void {
    const command = new DeleteGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing service mesh.</p>
   *          <p>You must delete all resources (virtual services, routes, virtual routers, and virtual
   *          nodes) in the service mesh before you can delete the mesh itself.</p>
   */
  public deleteMesh(args: DeleteMeshCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMeshCommandOutput>;
  public deleteMesh(args: DeleteMeshCommandInput, cb: (err: any, data?: DeleteMeshCommandOutput) => void): void;
  public deleteMesh(
    args: DeleteMeshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMeshCommandOutput) => void
  ): void;
  public deleteMesh(
    args: DeleteMeshCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMeshCommandOutput) => void),
    cb?: (err: any, data?: DeleteMeshCommandOutput) => void
  ): Promise<DeleteMeshCommandOutput> | void {
    const command = new DeleteMeshCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing route.</p>
   */
  public deleteRoute(args: DeleteRouteCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRouteCommandOutput>;
  public deleteRoute(args: DeleteRouteCommandInput, cb: (err: any, data?: DeleteRouteCommandOutput) => void): void;
  public deleteRoute(
    args: DeleteRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteCommandOutput) => void
  ): void;
  public deleteRoute(
    args: DeleteRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRouteCommandOutput) => void),
    cb?: (err: any, data?: DeleteRouteCommandOutput) => void
  ): Promise<DeleteRouteCommandOutput> | void {
    const command = new DeleteRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway
   *          routes are associated to it.</p>
   */
  public deleteVirtualGateway(
    args: DeleteVirtualGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVirtualGatewayCommandOutput>;
  public deleteVirtualGateway(
    args: DeleteVirtualGatewayCommandInput,
    cb: (err: any, data?: DeleteVirtualGatewayCommandOutput) => void
  ): void;
  public deleteVirtualGateway(
    args: DeleteVirtualGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVirtualGatewayCommandOutput) => void
  ): void;
  public deleteVirtualGateway(
    args: DeleteVirtualGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVirtualGatewayCommandOutput) => void),
    cb?: (err: any, data?: DeleteVirtualGatewayCommandOutput) => void
  ): Promise<DeleteVirtualGatewayCommandOutput> | void {
    const command = new DeleteVirtualGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing virtual node.</p>
   *          <p>You must delete any virtual services that list a virtual node as a service provider
   *          before you can delete the virtual node itself.</p>
   */
  public deleteVirtualNode(
    args: DeleteVirtualNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVirtualNodeCommandOutput>;
  public deleteVirtualNode(
    args: DeleteVirtualNodeCommandInput,
    cb: (err: any, data?: DeleteVirtualNodeCommandOutput) => void
  ): void;
  public deleteVirtualNode(
    args: DeleteVirtualNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVirtualNodeCommandOutput) => void
  ): void;
  public deleteVirtualNode(
    args: DeleteVirtualNodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVirtualNodeCommandOutput) => void),
    cb?: (err: any, data?: DeleteVirtualNodeCommandOutput) => void
  ): Promise<DeleteVirtualNodeCommandOutput> | void {
    const command = new DeleteVirtualNodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing virtual router.</p>
   *          <p>You must delete any routes associated with the virtual router before you can delete the
   *          router itself.</p>
   */
  public deleteVirtualRouter(
    args: DeleteVirtualRouterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVirtualRouterCommandOutput>;
  public deleteVirtualRouter(
    args: DeleteVirtualRouterCommandInput,
    cb: (err: any, data?: DeleteVirtualRouterCommandOutput) => void
  ): void;
  public deleteVirtualRouter(
    args: DeleteVirtualRouterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVirtualRouterCommandOutput) => void
  ): void;
  public deleteVirtualRouter(
    args: DeleteVirtualRouterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVirtualRouterCommandOutput) => void),
    cb?: (err: any, data?: DeleteVirtualRouterCommandOutput) => void
  ): Promise<DeleteVirtualRouterCommandOutput> | void {
    const command = new DeleteVirtualRouterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing virtual service.</p>
   */
  public deleteVirtualService(
    args: DeleteVirtualServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVirtualServiceCommandOutput>;
  public deleteVirtualService(
    args: DeleteVirtualServiceCommandInput,
    cb: (err: any, data?: DeleteVirtualServiceCommandOutput) => void
  ): void;
  public deleteVirtualService(
    args: DeleteVirtualServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVirtualServiceCommandOutput) => void
  ): void;
  public deleteVirtualService(
    args: DeleteVirtualServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVirtualServiceCommandOutput) => void),
    cb?: (err: any, data?: DeleteVirtualServiceCommandOutput) => void
  ): Promise<DeleteVirtualServiceCommandOutput> | void {
    const command = new DeleteVirtualServiceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an existing gateway route.</p>
   */
  public describeGatewayRoute(
    args: DescribeGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGatewayRouteCommandOutput>;
  public describeGatewayRoute(
    args: DescribeGatewayRouteCommandInput,
    cb: (err: any, data?: DescribeGatewayRouteCommandOutput) => void
  ): void;
  public describeGatewayRoute(
    args: DescribeGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGatewayRouteCommandOutput) => void
  ): void;
  public describeGatewayRoute(
    args: DescribeGatewayRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGatewayRouteCommandOutput) => void),
    cb?: (err: any, data?: DescribeGatewayRouteCommandOutput) => void
  ): Promise<DescribeGatewayRouteCommandOutput> | void {
    const command = new DescribeGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an existing service mesh.</p>
   */
  public describeMesh(
    args: DescribeMeshCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMeshCommandOutput>;
  public describeMesh(args: DescribeMeshCommandInput, cb: (err: any, data?: DescribeMeshCommandOutput) => void): void;
  public describeMesh(
    args: DescribeMeshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMeshCommandOutput) => void
  ): void;
  public describeMesh(
    args: DescribeMeshCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMeshCommandOutput) => void),
    cb?: (err: any, data?: DescribeMeshCommandOutput) => void
  ): Promise<DescribeMeshCommandOutput> | void {
    const command = new DescribeMeshCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an existing route.</p>
   */
  public describeRoute(
    args: DescribeRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRouteCommandOutput>;
  public describeRoute(
    args: DescribeRouteCommandInput,
    cb: (err: any, data?: DescribeRouteCommandOutput) => void
  ): void;
  public describeRoute(
    args: DescribeRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRouteCommandOutput) => void
  ): void;
  public describeRoute(
    args: DescribeRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRouteCommandOutput) => void),
    cb?: (err: any, data?: DescribeRouteCommandOutput) => void
  ): Promise<DescribeRouteCommandOutput> | void {
    const command = new DescribeRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an existing virtual gateway.</p>
   */
  public describeVirtualGateway(
    args: DescribeVirtualGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVirtualGatewayCommandOutput>;
  public describeVirtualGateway(
    args: DescribeVirtualGatewayCommandInput,
    cb: (err: any, data?: DescribeVirtualGatewayCommandOutput) => void
  ): void;
  public describeVirtualGateway(
    args: DescribeVirtualGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVirtualGatewayCommandOutput) => void
  ): void;
  public describeVirtualGateway(
    args: DescribeVirtualGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVirtualGatewayCommandOutput) => void),
    cb?: (err: any, data?: DescribeVirtualGatewayCommandOutput) => void
  ): Promise<DescribeVirtualGatewayCommandOutput> | void {
    const command = new DescribeVirtualGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an existing virtual node.</p>
   */
  public describeVirtualNode(
    args: DescribeVirtualNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVirtualNodeCommandOutput>;
  public describeVirtualNode(
    args: DescribeVirtualNodeCommandInput,
    cb: (err: any, data?: DescribeVirtualNodeCommandOutput) => void
  ): void;
  public describeVirtualNode(
    args: DescribeVirtualNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVirtualNodeCommandOutput) => void
  ): void;
  public describeVirtualNode(
    args: DescribeVirtualNodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVirtualNodeCommandOutput) => void),
    cb?: (err: any, data?: DescribeVirtualNodeCommandOutput) => void
  ): Promise<DescribeVirtualNodeCommandOutput> | void {
    const command = new DescribeVirtualNodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an existing virtual router.</p>
   */
  public describeVirtualRouter(
    args: DescribeVirtualRouterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVirtualRouterCommandOutput>;
  public describeVirtualRouter(
    args: DescribeVirtualRouterCommandInput,
    cb: (err: any, data?: DescribeVirtualRouterCommandOutput) => void
  ): void;
  public describeVirtualRouter(
    args: DescribeVirtualRouterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVirtualRouterCommandOutput) => void
  ): void;
  public describeVirtualRouter(
    args: DescribeVirtualRouterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVirtualRouterCommandOutput) => void),
    cb?: (err: any, data?: DescribeVirtualRouterCommandOutput) => void
  ): Promise<DescribeVirtualRouterCommandOutput> | void {
    const command = new DescribeVirtualRouterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an existing virtual service.</p>
   */
  public describeVirtualService(
    args: DescribeVirtualServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVirtualServiceCommandOutput>;
  public describeVirtualService(
    args: DescribeVirtualServiceCommandInput,
    cb: (err: any, data?: DescribeVirtualServiceCommandOutput) => void
  ): void;
  public describeVirtualService(
    args: DescribeVirtualServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVirtualServiceCommandOutput) => void
  ): void;
  public describeVirtualService(
    args: DescribeVirtualServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVirtualServiceCommandOutput) => void),
    cb?: (err: any, data?: DescribeVirtualServiceCommandOutput) => void
  ): Promise<DescribeVirtualServiceCommandOutput> | void {
    const command = new DescribeVirtualServiceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of existing gateway routes that are associated to a virtual
   *          gateway.</p>
   */
  public listGatewayRoutes(
    args: ListGatewayRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGatewayRoutesCommandOutput>;
  public listGatewayRoutes(
    args: ListGatewayRoutesCommandInput,
    cb: (err: any, data?: ListGatewayRoutesCommandOutput) => void
  ): void;
  public listGatewayRoutes(
    args: ListGatewayRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewayRoutesCommandOutput) => void
  ): void;
  public listGatewayRoutes(
    args: ListGatewayRoutesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGatewayRoutesCommandOutput) => void),
    cb?: (err: any, data?: ListGatewayRoutesCommandOutput) => void
  ): Promise<ListGatewayRoutesCommandOutput> | void {
    const command = new ListGatewayRoutesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of existing service meshes.</p>
   */
  public listMeshes(args: ListMeshesCommandInput, options?: __HttpHandlerOptions): Promise<ListMeshesCommandOutput>;
  public listMeshes(args: ListMeshesCommandInput, cb: (err: any, data?: ListMeshesCommandOutput) => void): void;
  public listMeshes(
    args: ListMeshesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMeshesCommandOutput) => void
  ): void;
  public listMeshes(
    args: ListMeshesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMeshesCommandOutput) => void),
    cb?: (err: any, data?: ListMeshesCommandOutput) => void
  ): Promise<ListMeshesCommandOutput> | void {
    const command = new ListMeshesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of existing routes in a service mesh.</p>
   */
  public listRoutes(args: ListRoutesCommandInput, options?: __HttpHandlerOptions): Promise<ListRoutesCommandOutput>;
  public listRoutes(args: ListRoutesCommandInput, cb: (err: any, data?: ListRoutesCommandOutput) => void): void;
  public listRoutes(
    args: ListRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoutesCommandOutput) => void
  ): void;
  public listRoutes(
    args: ListRoutesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRoutesCommandOutput) => void),
    cb?: (err: any, data?: ListRoutesCommandOutput) => void
  ): Promise<ListRoutesCommandOutput> | void {
    const command = new ListRoutesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the tags for an App Mesh resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of existing virtual gateways in a service mesh.</p>
   */
  public listVirtualGateways(
    args: ListVirtualGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualGatewaysCommandOutput>;
  public listVirtualGateways(
    args: ListVirtualGatewaysCommandInput,
    cb: (err: any, data?: ListVirtualGatewaysCommandOutput) => void
  ): void;
  public listVirtualGateways(
    args: ListVirtualGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualGatewaysCommandOutput) => void
  ): void;
  public listVirtualGateways(
    args: ListVirtualGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVirtualGatewaysCommandOutput) => void),
    cb?: (err: any, data?: ListVirtualGatewaysCommandOutput) => void
  ): Promise<ListVirtualGatewaysCommandOutput> | void {
    const command = new ListVirtualGatewaysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of existing virtual nodes.</p>
   */
  public listVirtualNodes(
    args: ListVirtualNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualNodesCommandOutput>;
  public listVirtualNodes(
    args: ListVirtualNodesCommandInput,
    cb: (err: any, data?: ListVirtualNodesCommandOutput) => void
  ): void;
  public listVirtualNodes(
    args: ListVirtualNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualNodesCommandOutput) => void
  ): void;
  public listVirtualNodes(
    args: ListVirtualNodesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVirtualNodesCommandOutput) => void),
    cb?: (err: any, data?: ListVirtualNodesCommandOutput) => void
  ): Promise<ListVirtualNodesCommandOutput> | void {
    const command = new ListVirtualNodesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of existing virtual routers in a service mesh.</p>
   */
  public listVirtualRouters(
    args: ListVirtualRoutersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualRoutersCommandOutput>;
  public listVirtualRouters(
    args: ListVirtualRoutersCommandInput,
    cb: (err: any, data?: ListVirtualRoutersCommandOutput) => void
  ): void;
  public listVirtualRouters(
    args: ListVirtualRoutersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualRoutersCommandOutput) => void
  ): void;
  public listVirtualRouters(
    args: ListVirtualRoutersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVirtualRoutersCommandOutput) => void),
    cb?: (err: any, data?: ListVirtualRoutersCommandOutput) => void
  ): Promise<ListVirtualRoutersCommandOutput> | void {
    const command = new ListVirtualRoutersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of existing virtual services in a service mesh.</p>
   */
  public listVirtualServices(
    args: ListVirtualServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualServicesCommandOutput>;
  public listVirtualServices(
    args: ListVirtualServicesCommandInput,
    cb: (err: any, data?: ListVirtualServicesCommandOutput) => void
  ): void;
  public listVirtualServices(
    args: ListVirtualServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualServicesCommandOutput) => void
  ): void;
  public listVirtualServices(
    args: ListVirtualServicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVirtualServicesCommandOutput) => void),
    cb?: (err: any, data?: ListVirtualServicesCommandOutput) => void
  ): Promise<ListVirtualServicesCommandOutput> | void {
    const command = new ListVirtualServicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates the specified tags to a resource with the specified <code>resourceArn</code>.
   *          If existing tags on a resource aren't specified in the request parameters, they aren't
   *          changed. When a resource is deleted, the tags associated with that resource are also
   *          deleted.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes specified tags from a resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing gateway route that is associated to a specified virtual gateway in a
   *          service mesh.</p>
   */
  public updateGatewayRoute(
    args: UpdateGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayRouteCommandOutput>;
  public updateGatewayRoute(
    args: UpdateGatewayRouteCommandInput,
    cb: (err: any, data?: UpdateGatewayRouteCommandOutput) => void
  ): void;
  public updateGatewayRoute(
    args: UpdateGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayRouteCommandOutput) => void
  ): void;
  public updateGatewayRoute(
    args: UpdateGatewayRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGatewayRouteCommandOutput) => void),
    cb?: (err: any, data?: UpdateGatewayRouteCommandOutput) => void
  ): Promise<UpdateGatewayRouteCommandOutput> | void {
    const command = new UpdateGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing service mesh.</p>
   */
  public updateMesh(args: UpdateMeshCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMeshCommandOutput>;
  public updateMesh(args: UpdateMeshCommandInput, cb: (err: any, data?: UpdateMeshCommandOutput) => void): void;
  public updateMesh(
    args: UpdateMeshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMeshCommandOutput) => void
  ): void;
  public updateMesh(
    args: UpdateMeshCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMeshCommandOutput) => void),
    cb?: (err: any, data?: UpdateMeshCommandOutput) => void
  ): Promise<UpdateMeshCommandOutput> | void {
    const command = new UpdateMeshCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing route for a specified service mesh and virtual router.</p>
   */
  public updateRoute(args: UpdateRouteCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRouteCommandOutput>;
  public updateRoute(args: UpdateRouteCommandInput, cb: (err: any, data?: UpdateRouteCommandOutput) => void): void;
  public updateRoute(
    args: UpdateRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRouteCommandOutput) => void
  ): void;
  public updateRoute(
    args: UpdateRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRouteCommandOutput) => void),
    cb?: (err: any, data?: UpdateRouteCommandOutput) => void
  ): Promise<UpdateRouteCommandOutput> | void {
    const command = new UpdateRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing virtual gateway in a specified service mesh.</p>
   */
  public updateVirtualGateway(
    args: UpdateVirtualGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVirtualGatewayCommandOutput>;
  public updateVirtualGateway(
    args: UpdateVirtualGatewayCommandInput,
    cb: (err: any, data?: UpdateVirtualGatewayCommandOutput) => void
  ): void;
  public updateVirtualGateway(
    args: UpdateVirtualGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVirtualGatewayCommandOutput) => void
  ): void;
  public updateVirtualGateway(
    args: UpdateVirtualGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVirtualGatewayCommandOutput) => void),
    cb?: (err: any, data?: UpdateVirtualGatewayCommandOutput) => void
  ): Promise<UpdateVirtualGatewayCommandOutput> | void {
    const command = new UpdateVirtualGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing virtual node in a specified service mesh.</p>
   */
  public updateVirtualNode(
    args: UpdateVirtualNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVirtualNodeCommandOutput>;
  public updateVirtualNode(
    args: UpdateVirtualNodeCommandInput,
    cb: (err: any, data?: UpdateVirtualNodeCommandOutput) => void
  ): void;
  public updateVirtualNode(
    args: UpdateVirtualNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVirtualNodeCommandOutput) => void
  ): void;
  public updateVirtualNode(
    args: UpdateVirtualNodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVirtualNodeCommandOutput) => void),
    cb?: (err: any, data?: UpdateVirtualNodeCommandOutput) => void
  ): Promise<UpdateVirtualNodeCommandOutput> | void {
    const command = new UpdateVirtualNodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing virtual router in a specified service mesh.</p>
   */
  public updateVirtualRouter(
    args: UpdateVirtualRouterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVirtualRouterCommandOutput>;
  public updateVirtualRouter(
    args: UpdateVirtualRouterCommandInput,
    cb: (err: any, data?: UpdateVirtualRouterCommandOutput) => void
  ): void;
  public updateVirtualRouter(
    args: UpdateVirtualRouterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVirtualRouterCommandOutput) => void
  ): void;
  public updateVirtualRouter(
    args: UpdateVirtualRouterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVirtualRouterCommandOutput) => void),
    cb?: (err: any, data?: UpdateVirtualRouterCommandOutput) => void
  ): Promise<UpdateVirtualRouterCommandOutput> | void {
    const command = new UpdateVirtualRouterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing virtual service in a specified service mesh.</p>
   */
  public updateVirtualService(
    args: UpdateVirtualServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVirtualServiceCommandOutput>;
  public updateVirtualService(
    args: UpdateVirtualServiceCommandInput,
    cb: (err: any, data?: UpdateVirtualServiceCommandOutput) => void
  ): void;
  public updateVirtualService(
    args: UpdateVirtualServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVirtualServiceCommandOutput) => void
  ): void;
  public updateVirtualService(
    args: UpdateVirtualServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVirtualServiceCommandOutput) => void),
    cb?: (err: any, data?: UpdateVirtualServiceCommandOutput) => void
  ): Promise<UpdateVirtualServiceCommandOutput> | void {
    const command = new UpdateVirtualServiceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
