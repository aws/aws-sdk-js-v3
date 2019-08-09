import { AppMeshClient } from "./AppMeshClient";
import { BadRequestException } from "./types/BadRequestException";
import { ConflictException } from "./types/ConflictException";
import { CreateMeshInput } from "./types/CreateMeshInput";
import { CreateMeshOutput } from "./types/CreateMeshOutput";
import { CreateRouteInput } from "./types/CreateRouteInput";
import { CreateRouteOutput } from "./types/CreateRouteOutput";
import { CreateVirtualNodeInput } from "./types/CreateVirtualNodeInput";
import { CreateVirtualNodeOutput } from "./types/CreateVirtualNodeOutput";
import { CreateVirtualRouterInput } from "./types/CreateVirtualRouterInput";
import { CreateVirtualRouterOutput } from "./types/CreateVirtualRouterOutput";
import { CreateVirtualServiceInput } from "./types/CreateVirtualServiceInput";
import { CreateVirtualServiceOutput } from "./types/CreateVirtualServiceOutput";
import { DeleteMeshInput } from "./types/DeleteMeshInput";
import { DeleteMeshOutput } from "./types/DeleteMeshOutput";
import { DeleteRouteInput } from "./types/DeleteRouteInput";
import { DeleteRouteOutput } from "./types/DeleteRouteOutput";
import { DeleteVirtualNodeInput } from "./types/DeleteVirtualNodeInput";
import { DeleteVirtualNodeOutput } from "./types/DeleteVirtualNodeOutput";
import { DeleteVirtualRouterInput } from "./types/DeleteVirtualRouterInput";
import { DeleteVirtualRouterOutput } from "./types/DeleteVirtualRouterOutput";
import { DeleteVirtualServiceInput } from "./types/DeleteVirtualServiceInput";
import { DeleteVirtualServiceOutput } from "./types/DeleteVirtualServiceOutput";
import { DescribeMeshInput } from "./types/DescribeMeshInput";
import { DescribeMeshOutput } from "./types/DescribeMeshOutput";
import { DescribeRouteInput } from "./types/DescribeRouteInput";
import { DescribeRouteOutput } from "./types/DescribeRouteOutput";
import { DescribeVirtualNodeInput } from "./types/DescribeVirtualNodeInput";
import { DescribeVirtualNodeOutput } from "./types/DescribeVirtualNodeOutput";
import { DescribeVirtualRouterInput } from "./types/DescribeVirtualRouterInput";
import { DescribeVirtualRouterOutput } from "./types/DescribeVirtualRouterOutput";
import { DescribeVirtualServiceInput } from "./types/DescribeVirtualServiceInput";
import { DescribeVirtualServiceOutput } from "./types/DescribeVirtualServiceOutput";
import { ForbiddenException } from "./types/ForbiddenException";
import { InternalServerErrorException } from "./types/InternalServerErrorException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListMeshesInput } from "./types/ListMeshesInput";
import { ListMeshesOutput } from "./types/ListMeshesOutput";
import { ListRoutesInput } from "./types/ListRoutesInput";
import { ListRoutesOutput } from "./types/ListRoutesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListVirtualNodesInput } from "./types/ListVirtualNodesInput";
import { ListVirtualNodesOutput } from "./types/ListVirtualNodesOutput";
import { ListVirtualRoutersInput } from "./types/ListVirtualRoutersInput";
import { ListVirtualRoutersOutput } from "./types/ListVirtualRoutersOutput";
import { ListVirtualServicesInput } from "./types/ListVirtualServicesInput";
import { ListVirtualServicesOutput } from "./types/ListVirtualServicesOutput";
import { NotFoundException } from "./types/NotFoundException";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { TooManyTagsException } from "./types/TooManyTagsException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateMeshInput } from "./types/UpdateMeshInput";
import { UpdateMeshOutput } from "./types/UpdateMeshOutput";
import { UpdateRouteInput } from "./types/UpdateRouteInput";
import { UpdateRouteOutput } from "./types/UpdateRouteOutput";
import { UpdateVirtualNodeInput } from "./types/UpdateVirtualNodeInput";
import { UpdateVirtualNodeOutput } from "./types/UpdateVirtualNodeOutput";
import { UpdateVirtualRouterInput } from "./types/UpdateVirtualRouterInput";
import { UpdateVirtualRouterOutput } from "./types/UpdateVirtualRouterOutput";
import { UpdateVirtualServiceInput } from "./types/UpdateVirtualServiceInput";
import { UpdateVirtualServiceOutput } from "./types/UpdateVirtualServiceOutput";
import { CreateMeshCommand } from "./commands/CreateMeshCommand";
import { CreateRouteCommand } from "./commands/CreateRouteCommand";
import { CreateVirtualNodeCommand } from "./commands/CreateVirtualNodeCommand";
import { CreateVirtualRouterCommand } from "./commands/CreateVirtualRouterCommand";
import { CreateVirtualServiceCommand } from "./commands/CreateVirtualServiceCommand";
import { DeleteMeshCommand } from "./commands/DeleteMeshCommand";
import { DeleteRouteCommand } from "./commands/DeleteRouteCommand";
import { DeleteVirtualNodeCommand } from "./commands/DeleteVirtualNodeCommand";
import { DeleteVirtualRouterCommand } from "./commands/DeleteVirtualRouterCommand";
import { DeleteVirtualServiceCommand } from "./commands/DeleteVirtualServiceCommand";
import { DescribeMeshCommand } from "./commands/DescribeMeshCommand";
import { DescribeRouteCommand } from "./commands/DescribeRouteCommand";
import { DescribeVirtualNodeCommand } from "./commands/DescribeVirtualNodeCommand";
import { DescribeVirtualRouterCommand } from "./commands/DescribeVirtualRouterCommand";
import { DescribeVirtualServiceCommand } from "./commands/DescribeVirtualServiceCommand";
import { ListMeshesCommand } from "./commands/ListMeshesCommand";
import { ListRoutesCommand } from "./commands/ListRoutesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListVirtualNodesCommand } from "./commands/ListVirtualNodesCommand";
import { ListVirtualRoutersCommand } from "./commands/ListVirtualRoutersCommand";
import { ListVirtualServicesCommand } from "./commands/ListVirtualServicesCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateMeshCommand } from "./commands/UpdateMeshCommand";
import { UpdateRouteCommand } from "./commands/UpdateRouteCommand";
import { UpdateVirtualNodeCommand } from "./commands/UpdateVirtualNodeCommand";
import { UpdateVirtualRouterCommand } from "./commands/UpdateVirtualRouterCommand";
import { UpdateVirtualServiceCommand } from "./commands/UpdateVirtualServiceCommand";

export class AppMesh extends AppMeshClient {
  /**
   * <p>Creates a service mesh. A service mesh is a logical boundary for network traffic between
           the services that reside within it.</p>
           <p>After you create your service mesh, you can create virtual services, virtual nodes,
           virtual routers, and routes to distribute traffic between the applications in your
           mesh.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ConflictException} <p>The request contains a client token that was used for a previous update resource call
           with different specifications. Try the request again with a new client token.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {LimitExceededException} <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service_limits.html">Service
              Limits</a> in the <i>AWS App Mesh User Guide</i>.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createMesh(args: CreateMeshInput): Promise<CreateMeshOutput>;
  public createMesh(
    args: CreateMeshInput,
    cb: (err: any, data?: CreateMeshOutput) => void
  ): void;
  public createMesh(
    args: CreateMeshInput,
    cb?: (err: any, data?: CreateMeshOutput) => void
  ): Promise<CreateMeshOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateMeshCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a route that is associated with a virtual router.</p>
           <p>You can use the <code>prefix</code> parameter in your route specification for path-based
           routing of requests. For example, if your virtual service name is
              <code>my-service.local</code> and you want the route to match requests to
              <code>my-service.local/metrics</code>, your prefix should be
           <code>/metrics</code>.</p>
           <p>If your route matches a request, you can distribute traffic to one or more target
           virtual nodes with relative weighting.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ConflictException} <p>The request contains a client token that was used for a previous update resource call
           with different specifications. Try the request again with a new client token.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {LimitExceededException} <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service_limits.html">Service
              Limits</a> in the <i>AWS App Mesh User Guide</i>.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRoute(args: CreateRouteInput): Promise<CreateRouteOutput>;
  public createRoute(
    args: CreateRouteInput,
    cb: (err: any, data?: CreateRouteOutput) => void
  ): void;
  public createRoute(
    args: CreateRouteInput,
    cb?: (err: any, data?: CreateRouteOutput) => void
  ): Promise<CreateRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a virtual node within a service mesh.</p>
           <p>A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS
           service or a Kubernetes deployment. When you create a virtual node, you can specify the
           service discovery information for your task group.</p>
           <p>Any inbound traffic that your virtual node expects should be specified as a
              <code>listener</code>. Any outbound traffic that your virtual node expects to reach
           should be specified as a <code>backend</code>.</p>
           <p>The response metadata for your new virtual node contains the <code>arn</code> that is
           associated with the virtual node. Set this value (either the full ARN or the truncated
           resource name: for example, <code>mesh/default/virtualNode/simpleapp</code>) as the
              <code>APPMESH_VIRTUAL_NODE_NAME</code> environment variable for your task group's Envoy
           proxy container in your task definition or pod spec. This is then mapped to the
              <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p>
           <note>
              <p>If you require your Envoy stats or tracing to use a different name, you can override
              the <code>node.cluster</code> value that is set by
                 <code>APPMESH_VIRTUAL_NODE_NAME</code> with the
                 <code>APPMESH_VIRTUAL_NODE_CLUSTER</code> environment variable.</p>
           </note>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ConflictException} <p>The request contains a client token that was used for a previous update resource call
           with different specifications. Try the request again with a new client token.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {LimitExceededException} <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service_limits.html">Service
              Limits</a> in the <i>AWS App Mesh User Guide</i>.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVirtualNode(
    args: CreateVirtualNodeInput
  ): Promise<CreateVirtualNodeOutput>;
  public createVirtualNode(
    args: CreateVirtualNodeInput,
    cb: (err: any, data?: CreateVirtualNodeOutput) => void
  ): void;
  public createVirtualNode(
    args: CreateVirtualNodeInput,
    cb?: (err: any, data?: CreateVirtualNodeOutput) => void
  ): Promise<CreateVirtualNodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVirtualNodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a virtual router within a service mesh.</p>
           <p>Any inbound traffic that your virtual router expects should be specified as a
              <code>listener</code>. </p>
           <p>Virtual routers handle traffic for one or more virtual services within your mesh. After
           you create your virtual router, create and associate routes for your virtual router that
           direct incoming requests to different virtual nodes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ConflictException} <p>The request contains a client token that was used for a previous update resource call
           with different specifications. Try the request again with a new client token.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {LimitExceededException} <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service_limits.html">Service
              Limits</a> in the <i>AWS App Mesh User Guide</i>.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVirtualRouter(
    args: CreateVirtualRouterInput
  ): Promise<CreateVirtualRouterOutput>;
  public createVirtualRouter(
    args: CreateVirtualRouterInput,
    cb: (err: any, data?: CreateVirtualRouterOutput) => void
  ): void;
  public createVirtualRouter(
    args: CreateVirtualRouterInput,
    cb?: (err: any, data?: CreateVirtualRouterOutput) => void
  ): Promise<CreateVirtualRouterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVirtualRouterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a virtual service within a service mesh.</p>
           <p>A virtual service is an abstraction of a real service that is provided by a virtual node
           directly or indirectly by means of a virtual router. Dependent services call your virtual
           service by its <code>virtualServiceName</code>, and those requests are routed to the
           virtual node or virtual router that is specified as the provider for the virtual
           service.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ConflictException} <p>The request contains a client token that was used for a previous update resource call
           with different specifications. Try the request again with a new client token.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {LimitExceededException} <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service_limits.html">Service
              Limits</a> in the <i>AWS App Mesh User Guide</i>.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVirtualService(
    args: CreateVirtualServiceInput
  ): Promise<CreateVirtualServiceOutput>;
  public createVirtualService(
    args: CreateVirtualServiceInput,
    cb: (err: any, data?: CreateVirtualServiceOutput) => void
  ): void;
  public createVirtualService(
    args: CreateVirtualServiceInput,
    cb?: (err: any, data?: CreateVirtualServiceOutput) => void
  ): Promise<CreateVirtualServiceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVirtualServiceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing service mesh.</p>
           <p>You must delete all resources (virtual services, routes, virtual routers, and virtual
           nodes) in the service mesh before you can delete the mesh itself.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ResourceInUseException} <p>You can't delete the specified resource because it's in use or required by another
           resource.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteMesh(args: DeleteMeshInput): Promise<DeleteMeshOutput>;
  public deleteMesh(
    args: DeleteMeshInput,
    cb: (err: any, data?: DeleteMeshOutput) => void
  ): void;
  public deleteMesh(
    args: DeleteMeshInput,
    cb?: (err: any, data?: DeleteMeshOutput) => void
  ): Promise<DeleteMeshOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteMeshCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing route.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ResourceInUseException} <p>You can't delete the specified resource because it's in use or required by another
           resource.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRoute(args: DeleteRouteInput): Promise<DeleteRouteOutput>;
  public deleteRoute(
    args: DeleteRouteInput,
    cb: (err: any, data?: DeleteRouteOutput) => void
  ): void;
  public deleteRoute(
    args: DeleteRouteInput,
    cb?: (err: any, data?: DeleteRouteOutput) => void
  ): Promise<DeleteRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing virtual node.</p>
           <p>You must delete any virtual services that list a virtual node as a service provider
           before you can delete the virtual node itself.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ResourceInUseException} <p>You can't delete the specified resource because it's in use or required by another
           resource.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVirtualNode(
    args: DeleteVirtualNodeInput
  ): Promise<DeleteVirtualNodeOutput>;
  public deleteVirtualNode(
    args: DeleteVirtualNodeInput,
    cb: (err: any, data?: DeleteVirtualNodeOutput) => void
  ): void;
  public deleteVirtualNode(
    args: DeleteVirtualNodeInput,
    cb?: (err: any, data?: DeleteVirtualNodeOutput) => void
  ): Promise<DeleteVirtualNodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVirtualNodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing virtual router.</p>
           <p>You must delete any routes associated with the virtual router before you can delete the
           router itself.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ResourceInUseException} <p>You can't delete the specified resource because it's in use or required by another
           resource.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVirtualRouter(
    args: DeleteVirtualRouterInput
  ): Promise<DeleteVirtualRouterOutput>;
  public deleteVirtualRouter(
    args: DeleteVirtualRouterInput,
    cb: (err: any, data?: DeleteVirtualRouterOutput) => void
  ): void;
  public deleteVirtualRouter(
    args: DeleteVirtualRouterInput,
    cb?: (err: any, data?: DeleteVirtualRouterOutput) => void
  ): Promise<DeleteVirtualRouterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVirtualRouterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing virtual service.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVirtualService(
    args: DeleteVirtualServiceInput
  ): Promise<DeleteVirtualServiceOutput>;
  public deleteVirtualService(
    args: DeleteVirtualServiceInput,
    cb: (err: any, data?: DeleteVirtualServiceOutput) => void
  ): void;
  public deleteVirtualService(
    args: DeleteVirtualServiceInput,
    cb?: (err: any, data?: DeleteVirtualServiceOutput) => void
  ): Promise<DeleteVirtualServiceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVirtualServiceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes an existing service mesh.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMesh(args: DescribeMeshInput): Promise<DescribeMeshOutput>;
  public describeMesh(
    args: DescribeMeshInput,
    cb: (err: any, data?: DescribeMeshOutput) => void
  ): void;
  public describeMesh(
    args: DescribeMeshInput,
    cb?: (err: any, data?: DescribeMeshOutput) => void
  ): Promise<DescribeMeshOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMeshCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes an existing route.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRoute(args: DescribeRouteInput): Promise<DescribeRouteOutput>;
  public describeRoute(
    args: DescribeRouteInput,
    cb: (err: any, data?: DescribeRouteOutput) => void
  ): void;
  public describeRoute(
    args: DescribeRouteInput,
    cb?: (err: any, data?: DescribeRouteOutput) => void
  ): Promise<DescribeRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes an existing virtual node.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVirtualNode(
    args: DescribeVirtualNodeInput
  ): Promise<DescribeVirtualNodeOutput>;
  public describeVirtualNode(
    args: DescribeVirtualNodeInput,
    cb: (err: any, data?: DescribeVirtualNodeOutput) => void
  ): void;
  public describeVirtualNode(
    args: DescribeVirtualNodeInput,
    cb?: (err: any, data?: DescribeVirtualNodeOutput) => void
  ): Promise<DescribeVirtualNodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVirtualNodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes an existing virtual router.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVirtualRouter(
    args: DescribeVirtualRouterInput
  ): Promise<DescribeVirtualRouterOutput>;
  public describeVirtualRouter(
    args: DescribeVirtualRouterInput,
    cb: (err: any, data?: DescribeVirtualRouterOutput) => void
  ): void;
  public describeVirtualRouter(
    args: DescribeVirtualRouterInput,
    cb?: (err: any, data?: DescribeVirtualRouterOutput) => void
  ): Promise<DescribeVirtualRouterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVirtualRouterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes an existing virtual service.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVirtualService(
    args: DescribeVirtualServiceInput
  ): Promise<DescribeVirtualServiceOutput>;
  public describeVirtualService(
    args: DescribeVirtualServiceInput,
    cb: (err: any, data?: DescribeVirtualServiceOutput) => void
  ): void;
  public describeVirtualService(
    args: DescribeVirtualServiceInput,
    cb?: (err: any, data?: DescribeVirtualServiceOutput) => void
  ): Promise<DescribeVirtualServiceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVirtualServiceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of existing service meshes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listMeshes(args: ListMeshesInput): Promise<ListMeshesOutput>;
  public listMeshes(
    args: ListMeshesInput,
    cb: (err: any, data?: ListMeshesOutput) => void
  ): void;
  public listMeshes(
    args: ListMeshesInput,
    cb?: (err: any, data?: ListMeshesOutput) => void
  ): Promise<ListMeshesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListMeshesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of existing routes in a service mesh.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRoutes(args: ListRoutesInput): Promise<ListRoutesOutput>;
  public listRoutes(
    args: ListRoutesInput,
    cb: (err: any, data?: ListRoutesOutput) => void
  ): void;
  public listRoutes(
    args: ListRoutesInput,
    cb?: (err: any, data?: ListRoutesOutput) => void
  ): Promise<ListRoutesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRoutesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List the tags for an App Mesh resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of existing virtual nodes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listVirtualNodes(
    args: ListVirtualNodesInput
  ): Promise<ListVirtualNodesOutput>;
  public listVirtualNodes(
    args: ListVirtualNodesInput,
    cb: (err: any, data?: ListVirtualNodesOutput) => void
  ): void;
  public listVirtualNodes(
    args: ListVirtualNodesInput,
    cb?: (err: any, data?: ListVirtualNodesOutput) => void
  ): Promise<ListVirtualNodesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListVirtualNodesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of existing virtual routers in a service mesh.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listVirtualRouters(
    args: ListVirtualRoutersInput
  ): Promise<ListVirtualRoutersOutput>;
  public listVirtualRouters(
    args: ListVirtualRoutersInput,
    cb: (err: any, data?: ListVirtualRoutersOutput) => void
  ): void;
  public listVirtualRouters(
    args: ListVirtualRoutersInput,
    cb?: (err: any, data?: ListVirtualRoutersOutput) => void
  ): Promise<ListVirtualRoutersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListVirtualRoutersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of existing virtual services in a service mesh.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listVirtualServices(
    args: ListVirtualServicesInput
  ): Promise<ListVirtualServicesOutput>;
  public listVirtualServices(
    args: ListVirtualServicesInput,
    cb: (err: any, data?: ListVirtualServicesOutput) => void
  ): void;
  public listVirtualServices(
    args: ListVirtualServicesInput,
    cb?: (err: any, data?: ListVirtualServicesOutput) => void
  ): Promise<ListVirtualServicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListVirtualServicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates the specified tags to a resource with the specified <code>resourceArn</code>.
           If existing tags on a resource aren't specified in the request parameters, they aren't
           changed. When a resource is deleted, the tags associated with that resource are also
           deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyTagsException} <p>The request exceeds the maximum allowed number of tags allowed per resource. The current
           limit is 50 user tags per resource. You must reduce the number of tags in the request. None
           of the tags in this request were applied.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes specified tags from a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing service mesh.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ConflictException} <p>The request contains a client token that was used for a previous update resource call
           with different specifications. Try the request again with a new client token.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateMesh(args: UpdateMeshInput): Promise<UpdateMeshOutput>;
  public updateMesh(
    args: UpdateMeshInput,
    cb: (err: any, data?: UpdateMeshOutput) => void
  ): void;
  public updateMesh(
    args: UpdateMeshInput,
    cb?: (err: any, data?: UpdateMeshOutput) => void
  ): Promise<UpdateMeshOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateMeshCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing route for a specified service mesh and virtual router.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ConflictException} <p>The request contains a client token that was used for a previous update resource call
           with different specifications. Try the request again with a new client token.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {LimitExceededException} <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service_limits.html">Service
              Limits</a> in the <i>AWS App Mesh User Guide</i>.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRoute(args: UpdateRouteInput): Promise<UpdateRouteOutput>;
  public updateRoute(
    args: UpdateRouteInput,
    cb: (err: any, data?: UpdateRouteOutput) => void
  ): void;
  public updateRoute(
    args: UpdateRouteInput,
    cb?: (err: any, data?: UpdateRouteOutput) => void
  ): Promise<UpdateRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing virtual node in a specified service mesh.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ConflictException} <p>The request contains a client token that was used for a previous update resource call
           with different specifications. Try the request again with a new client token.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {LimitExceededException} <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service_limits.html">Service
              Limits</a> in the <i>AWS App Mesh User Guide</i>.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateVirtualNode(
    args: UpdateVirtualNodeInput
  ): Promise<UpdateVirtualNodeOutput>;
  public updateVirtualNode(
    args: UpdateVirtualNodeInput,
    cb: (err: any, data?: UpdateVirtualNodeOutput) => void
  ): void;
  public updateVirtualNode(
    args: UpdateVirtualNodeInput,
    cb?: (err: any, data?: UpdateVirtualNodeOutput) => void
  ): Promise<UpdateVirtualNodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateVirtualNodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing virtual router in a specified service mesh.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ConflictException} <p>The request contains a client token that was used for a previous update resource call
           with different specifications. Try the request again with a new client token.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {LimitExceededException} <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service_limits.html">Service
              Limits</a> in the <i>AWS App Mesh User Guide</i>.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateVirtualRouter(
    args: UpdateVirtualRouterInput
  ): Promise<UpdateVirtualRouterOutput>;
  public updateVirtualRouter(
    args: UpdateVirtualRouterInput,
    cb: (err: any, data?: UpdateVirtualRouterOutput) => void
  ): void;
  public updateVirtualRouter(
    args: UpdateVirtualRouterInput,
    cb?: (err: any, data?: UpdateVirtualRouterOutput) => void
  ): Promise<UpdateVirtualRouterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateVirtualRouterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing virtual service in a specified service mesh.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request syntax was malformed. Check your request syntax and try again.</p>
   *   - {ConflictException} <p>The request contains a client token that was used for a previous update resource call
           with different specifications. Try the request again with a new client token.</p>
   *   - {ForbiddenException} <p>You don't have permissions to perform this action.</p>
   *   - {InternalServerErrorException} <p>The request processing has failed because of an unknown error, exception, or
           failure.</p>
   *   - {LimitExceededException} <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service_limits.html">Service
              Limits</a> in the <i>AWS App Mesh User Guide</i>.</p>
   *   - {NotFoundException} <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the service.</p>
   *   - {TooManyRequestsException} <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
           account. For best results, use an increasing or variable sleep interval between
           requests.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateVirtualService(
    args: UpdateVirtualServiceInput
  ): Promise<UpdateVirtualServiceOutput>;
  public updateVirtualService(
    args: UpdateVirtualServiceInput,
    cb: (err: any, data?: UpdateVirtualServiceOutput) => void
  ): void;
  public updateVirtualService(
    args: UpdateVirtualServiceInput,
    cb?: (err: any, data?: UpdateVirtualServiceOutput) => void
  ): Promise<UpdateVirtualServiceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateVirtualServiceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
