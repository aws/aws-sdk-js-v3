// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { AppMeshClient } from "./AppMeshClient";
import {
  type CreateGatewayRouteCommandInput,
  type CreateGatewayRouteCommandOutput,
  CreateGatewayRouteCommand,
} from "./commands/CreateGatewayRouteCommand";
import {
  type CreateMeshCommandInput,
  type CreateMeshCommandOutput,
  CreateMeshCommand,
} from "./commands/CreateMeshCommand";
import {
  type CreateRouteCommandInput,
  type CreateRouteCommandOutput,
  CreateRouteCommand,
} from "./commands/CreateRouteCommand";
import {
  type CreateVirtualGatewayCommandInput,
  type CreateVirtualGatewayCommandOutput,
  CreateVirtualGatewayCommand,
} from "./commands/CreateVirtualGatewayCommand";
import {
  type CreateVirtualNodeCommandInput,
  type CreateVirtualNodeCommandOutput,
  CreateVirtualNodeCommand,
} from "./commands/CreateVirtualNodeCommand";
import {
  type CreateVirtualRouterCommandInput,
  type CreateVirtualRouterCommandOutput,
  CreateVirtualRouterCommand,
} from "./commands/CreateVirtualRouterCommand";
import {
  type CreateVirtualServiceCommandInput,
  type CreateVirtualServiceCommandOutput,
  CreateVirtualServiceCommand,
} from "./commands/CreateVirtualServiceCommand";
import {
  type DeleteGatewayRouteCommandInput,
  type DeleteGatewayRouteCommandOutput,
  DeleteGatewayRouteCommand,
} from "./commands/DeleteGatewayRouteCommand";
import {
  type DeleteMeshCommandInput,
  type DeleteMeshCommandOutput,
  DeleteMeshCommand,
} from "./commands/DeleteMeshCommand";
import {
  type DeleteRouteCommandInput,
  type DeleteRouteCommandOutput,
  DeleteRouteCommand,
} from "./commands/DeleteRouteCommand";
import {
  type DeleteVirtualGatewayCommandInput,
  type DeleteVirtualGatewayCommandOutput,
  DeleteVirtualGatewayCommand,
} from "./commands/DeleteVirtualGatewayCommand";
import {
  type DeleteVirtualNodeCommandInput,
  type DeleteVirtualNodeCommandOutput,
  DeleteVirtualNodeCommand,
} from "./commands/DeleteVirtualNodeCommand";
import {
  type DeleteVirtualRouterCommandInput,
  type DeleteVirtualRouterCommandOutput,
  DeleteVirtualRouterCommand,
} from "./commands/DeleteVirtualRouterCommand";
import {
  type DeleteVirtualServiceCommandInput,
  type DeleteVirtualServiceCommandOutput,
  DeleteVirtualServiceCommand,
} from "./commands/DeleteVirtualServiceCommand";
import {
  type DescribeGatewayRouteCommandInput,
  type DescribeGatewayRouteCommandOutput,
  DescribeGatewayRouteCommand,
} from "./commands/DescribeGatewayRouteCommand";
import {
  type DescribeMeshCommandInput,
  type DescribeMeshCommandOutput,
  DescribeMeshCommand,
} from "./commands/DescribeMeshCommand";
import {
  type DescribeRouteCommandInput,
  type DescribeRouteCommandOutput,
  DescribeRouteCommand,
} from "./commands/DescribeRouteCommand";
import {
  type DescribeVirtualGatewayCommandInput,
  type DescribeVirtualGatewayCommandOutput,
  DescribeVirtualGatewayCommand,
} from "./commands/DescribeVirtualGatewayCommand";
import {
  type DescribeVirtualNodeCommandInput,
  type DescribeVirtualNodeCommandOutput,
  DescribeVirtualNodeCommand,
} from "./commands/DescribeVirtualNodeCommand";
import {
  type DescribeVirtualRouterCommandInput,
  type DescribeVirtualRouterCommandOutput,
  DescribeVirtualRouterCommand,
} from "./commands/DescribeVirtualRouterCommand";
import {
  type DescribeVirtualServiceCommandInput,
  type DescribeVirtualServiceCommandOutput,
  DescribeVirtualServiceCommand,
} from "./commands/DescribeVirtualServiceCommand";
import {
  type ListGatewayRoutesCommandInput,
  type ListGatewayRoutesCommandOutput,
  ListGatewayRoutesCommand,
} from "./commands/ListGatewayRoutesCommand";
import {
  type ListMeshesCommandInput,
  type ListMeshesCommandOutput,
  ListMeshesCommand,
} from "./commands/ListMeshesCommand";
import {
  type ListRoutesCommandInput,
  type ListRoutesCommandOutput,
  ListRoutesCommand,
} from "./commands/ListRoutesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListVirtualGatewaysCommandInput,
  type ListVirtualGatewaysCommandOutput,
  ListVirtualGatewaysCommand,
} from "./commands/ListVirtualGatewaysCommand";
import {
  type ListVirtualNodesCommandInput,
  type ListVirtualNodesCommandOutput,
  ListVirtualNodesCommand,
} from "./commands/ListVirtualNodesCommand";
import {
  type ListVirtualRoutersCommandInput,
  type ListVirtualRoutersCommandOutput,
  ListVirtualRoutersCommand,
} from "./commands/ListVirtualRoutersCommand";
import {
  type ListVirtualServicesCommandInput,
  type ListVirtualServicesCommandOutput,
  ListVirtualServicesCommand,
} from "./commands/ListVirtualServicesCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateGatewayRouteCommandInput,
  type UpdateGatewayRouteCommandOutput,
  UpdateGatewayRouteCommand,
} from "./commands/UpdateGatewayRouteCommand";
import {
  type UpdateMeshCommandInput,
  type UpdateMeshCommandOutput,
  UpdateMeshCommand,
} from "./commands/UpdateMeshCommand";
import {
  type UpdateRouteCommandInput,
  type UpdateRouteCommandOutput,
  UpdateRouteCommand,
} from "./commands/UpdateRouteCommand";
import {
  type UpdateVirtualGatewayCommandInput,
  type UpdateVirtualGatewayCommandOutput,
  UpdateVirtualGatewayCommand,
} from "./commands/UpdateVirtualGatewayCommand";
import {
  type UpdateVirtualNodeCommandInput,
  type UpdateVirtualNodeCommandOutput,
  UpdateVirtualNodeCommand,
} from "./commands/UpdateVirtualNodeCommand";
import {
  type UpdateVirtualRouterCommandInput,
  type UpdateVirtualRouterCommandOutput,
  UpdateVirtualRouterCommand,
} from "./commands/UpdateVirtualRouterCommand";
import {
  type UpdateVirtualServiceCommandInput,
  type UpdateVirtualServiceCommandOutput,
  UpdateVirtualServiceCommand,
} from "./commands/UpdateVirtualServiceCommand";
import { paginateListGatewayRoutes } from "./pagination/ListGatewayRoutesPaginator";
import { paginateListMeshes } from "./pagination/ListMeshesPaginator";
import { paginateListRoutes } from "./pagination/ListRoutesPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";
import { paginateListVirtualGateways } from "./pagination/ListVirtualGatewaysPaginator";
import { paginateListVirtualNodes } from "./pagination/ListVirtualNodesPaginator";
import { paginateListVirtualRouters } from "./pagination/ListVirtualRoutersPaginator";
import { paginateListVirtualServices } from "./pagination/ListVirtualServicesPaginator";

const commands = {
  CreateGatewayRouteCommand,
  CreateMeshCommand,
  CreateRouteCommand,
  CreateVirtualGatewayCommand,
  CreateVirtualNodeCommand,
  CreateVirtualRouterCommand,
  CreateVirtualServiceCommand,
  DeleteGatewayRouteCommand,
  DeleteMeshCommand,
  DeleteRouteCommand,
  DeleteVirtualGatewayCommand,
  DeleteVirtualNodeCommand,
  DeleteVirtualRouterCommand,
  DeleteVirtualServiceCommand,
  DescribeGatewayRouteCommand,
  DescribeMeshCommand,
  DescribeRouteCommand,
  DescribeVirtualGatewayCommand,
  DescribeVirtualNodeCommand,
  DescribeVirtualRouterCommand,
  DescribeVirtualServiceCommand,
  ListGatewayRoutesCommand,
  ListMeshesCommand,
  ListRoutesCommand,
  ListTagsForResourceCommand,
  ListVirtualGatewaysCommand,
  ListVirtualNodesCommand,
  ListVirtualRoutersCommand,
  ListVirtualServicesCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateGatewayRouteCommand,
  UpdateMeshCommand,
  UpdateRouteCommand,
  UpdateVirtualGatewayCommand,
  UpdateVirtualNodeCommand,
  UpdateVirtualRouterCommand,
  UpdateVirtualServiceCommand,
};
const paginators = {
  paginateListGatewayRoutes,
  paginateListMeshes,
  paginateListRoutes,
  paginateListTagsForResource,
  paginateListVirtualGateways,
  paginateListVirtualNodes,
  paginateListVirtualRouters,
  paginateListVirtualServices,
};

export interface AppMesh {
  /**
   * @see {@link CreateGatewayRouteCommand}
   */
  createGatewayRoute(
    args: CreateGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGatewayRouteCommandOutput>;
  createGatewayRoute(
    args: CreateGatewayRouteCommandInput,
    cb: (err: any, data?: CreateGatewayRouteCommandOutput) => void
  ): void;
  createGatewayRoute(
    args: CreateGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGatewayRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMeshCommand}
   */
  createMesh(
    args: CreateMeshCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMeshCommandOutput>;
  createMesh(
    args: CreateMeshCommandInput,
    cb: (err: any, data?: CreateMeshCommandOutput) => void
  ): void;
  createMesh(
    args: CreateMeshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMeshCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRouteCommand}
   */
  createRoute(
    args: CreateRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRouteCommandOutput>;
  createRoute(
    args: CreateRouteCommandInput,
    cb: (err: any, data?: CreateRouteCommandOutput) => void
  ): void;
  createRoute(
    args: CreateRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVirtualGatewayCommand}
   */
  createVirtualGateway(
    args: CreateVirtualGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVirtualGatewayCommandOutput>;
  createVirtualGateway(
    args: CreateVirtualGatewayCommandInput,
    cb: (err: any, data?: CreateVirtualGatewayCommandOutput) => void
  ): void;
  createVirtualGateway(
    args: CreateVirtualGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVirtualGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVirtualNodeCommand}
   */
  createVirtualNode(
    args: CreateVirtualNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVirtualNodeCommandOutput>;
  createVirtualNode(
    args: CreateVirtualNodeCommandInput,
    cb: (err: any, data?: CreateVirtualNodeCommandOutput) => void
  ): void;
  createVirtualNode(
    args: CreateVirtualNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVirtualNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVirtualRouterCommand}
   */
  createVirtualRouter(
    args: CreateVirtualRouterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVirtualRouterCommandOutput>;
  createVirtualRouter(
    args: CreateVirtualRouterCommandInput,
    cb: (err: any, data?: CreateVirtualRouterCommandOutput) => void
  ): void;
  createVirtualRouter(
    args: CreateVirtualRouterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVirtualRouterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVirtualServiceCommand}
   */
  createVirtualService(
    args: CreateVirtualServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVirtualServiceCommandOutput>;
  createVirtualService(
    args: CreateVirtualServiceCommandInput,
    cb: (err: any, data?: CreateVirtualServiceCommandOutput) => void
  ): void;
  createVirtualService(
    args: CreateVirtualServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVirtualServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGatewayRouteCommand}
   */
  deleteGatewayRoute(
    args: DeleteGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGatewayRouteCommandOutput>;
  deleteGatewayRoute(
    args: DeleteGatewayRouteCommandInput,
    cb: (err: any, data?: DeleteGatewayRouteCommandOutput) => void
  ): void;
  deleteGatewayRoute(
    args: DeleteGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMeshCommand}
   */
  deleteMesh(
    args: DeleteMeshCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMeshCommandOutput>;
  deleteMesh(
    args: DeleteMeshCommandInput,
    cb: (err: any, data?: DeleteMeshCommandOutput) => void
  ): void;
  deleteMesh(
    args: DeleteMeshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMeshCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouteCommand}
   */
  deleteRoute(
    args: DeleteRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteCommandOutput>;
  deleteRoute(
    args: DeleteRouteCommandInput,
    cb: (err: any, data?: DeleteRouteCommandOutput) => void
  ): void;
  deleteRoute(
    args: DeleteRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVirtualGatewayCommand}
   */
  deleteVirtualGateway(
    args: DeleteVirtualGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVirtualGatewayCommandOutput>;
  deleteVirtualGateway(
    args: DeleteVirtualGatewayCommandInput,
    cb: (err: any, data?: DeleteVirtualGatewayCommandOutput) => void
  ): void;
  deleteVirtualGateway(
    args: DeleteVirtualGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVirtualGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVirtualNodeCommand}
   */
  deleteVirtualNode(
    args: DeleteVirtualNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVirtualNodeCommandOutput>;
  deleteVirtualNode(
    args: DeleteVirtualNodeCommandInput,
    cb: (err: any, data?: DeleteVirtualNodeCommandOutput) => void
  ): void;
  deleteVirtualNode(
    args: DeleteVirtualNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVirtualNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVirtualRouterCommand}
   */
  deleteVirtualRouter(
    args: DeleteVirtualRouterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVirtualRouterCommandOutput>;
  deleteVirtualRouter(
    args: DeleteVirtualRouterCommandInput,
    cb: (err: any, data?: DeleteVirtualRouterCommandOutput) => void
  ): void;
  deleteVirtualRouter(
    args: DeleteVirtualRouterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVirtualRouterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVirtualServiceCommand}
   */
  deleteVirtualService(
    args: DeleteVirtualServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVirtualServiceCommandOutput>;
  deleteVirtualService(
    args: DeleteVirtualServiceCommandInput,
    cb: (err: any, data?: DeleteVirtualServiceCommandOutput) => void
  ): void;
  deleteVirtualService(
    args: DeleteVirtualServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVirtualServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGatewayRouteCommand}
   */
  describeGatewayRoute(
    args: DescribeGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGatewayRouteCommandOutput>;
  describeGatewayRoute(
    args: DescribeGatewayRouteCommandInput,
    cb: (err: any, data?: DescribeGatewayRouteCommandOutput) => void
  ): void;
  describeGatewayRoute(
    args: DescribeGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGatewayRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMeshCommand}
   */
  describeMesh(
    args: DescribeMeshCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMeshCommandOutput>;
  describeMesh(
    args: DescribeMeshCommandInput,
    cb: (err: any, data?: DescribeMeshCommandOutput) => void
  ): void;
  describeMesh(
    args: DescribeMeshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMeshCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRouteCommand}
   */
  describeRoute(
    args: DescribeRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRouteCommandOutput>;
  describeRoute(
    args: DescribeRouteCommandInput,
    cb: (err: any, data?: DescribeRouteCommandOutput) => void
  ): void;
  describeRoute(
    args: DescribeRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVirtualGatewayCommand}
   */
  describeVirtualGateway(
    args: DescribeVirtualGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVirtualGatewayCommandOutput>;
  describeVirtualGateway(
    args: DescribeVirtualGatewayCommandInput,
    cb: (err: any, data?: DescribeVirtualGatewayCommandOutput) => void
  ): void;
  describeVirtualGateway(
    args: DescribeVirtualGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVirtualGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVirtualNodeCommand}
   */
  describeVirtualNode(
    args: DescribeVirtualNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVirtualNodeCommandOutput>;
  describeVirtualNode(
    args: DescribeVirtualNodeCommandInput,
    cb: (err: any, data?: DescribeVirtualNodeCommandOutput) => void
  ): void;
  describeVirtualNode(
    args: DescribeVirtualNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVirtualNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVirtualRouterCommand}
   */
  describeVirtualRouter(
    args: DescribeVirtualRouterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVirtualRouterCommandOutput>;
  describeVirtualRouter(
    args: DescribeVirtualRouterCommandInput,
    cb: (err: any, data?: DescribeVirtualRouterCommandOutput) => void
  ): void;
  describeVirtualRouter(
    args: DescribeVirtualRouterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVirtualRouterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVirtualServiceCommand}
   */
  describeVirtualService(
    args: DescribeVirtualServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVirtualServiceCommandOutput>;
  describeVirtualService(
    args: DescribeVirtualServiceCommandInput,
    cb: (err: any, data?: DescribeVirtualServiceCommandOutput) => void
  ): void;
  describeVirtualService(
    args: DescribeVirtualServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVirtualServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewayRoutesCommand}
   */
  listGatewayRoutes(
    args: ListGatewayRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGatewayRoutesCommandOutput>;
  listGatewayRoutes(
    args: ListGatewayRoutesCommandInput,
    cb: (err: any, data?: ListGatewayRoutesCommandOutput) => void
  ): void;
  listGatewayRoutes(
    args: ListGatewayRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewayRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMeshesCommand}
   */
  listMeshes(): Promise<ListMeshesCommandOutput>;
  listMeshes(
    args: ListMeshesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMeshesCommandOutput>;
  listMeshes(
    args: ListMeshesCommandInput,
    cb: (err: any, data?: ListMeshesCommandOutput) => void
  ): void;
  listMeshes(
    args: ListMeshesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMeshesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoutesCommand}
   */
  listRoutes(
    args: ListRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoutesCommandOutput>;
  listRoutes(
    args: ListRoutesCommandInput,
    cb: (err: any, data?: ListRoutesCommandOutput) => void
  ): void;
  listRoutes(
    args: ListRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVirtualGatewaysCommand}
   */
  listVirtualGateways(
    args: ListVirtualGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualGatewaysCommandOutput>;
  listVirtualGateways(
    args: ListVirtualGatewaysCommandInput,
    cb: (err: any, data?: ListVirtualGatewaysCommandOutput) => void
  ): void;
  listVirtualGateways(
    args: ListVirtualGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVirtualNodesCommand}
   */
  listVirtualNodes(
    args: ListVirtualNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualNodesCommandOutput>;
  listVirtualNodes(
    args: ListVirtualNodesCommandInput,
    cb: (err: any, data?: ListVirtualNodesCommandOutput) => void
  ): void;
  listVirtualNodes(
    args: ListVirtualNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVirtualRoutersCommand}
   */
  listVirtualRouters(
    args: ListVirtualRoutersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualRoutersCommandOutput>;
  listVirtualRouters(
    args: ListVirtualRoutersCommandInput,
    cb: (err: any, data?: ListVirtualRoutersCommandOutput) => void
  ): void;
  listVirtualRouters(
    args: ListVirtualRoutersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualRoutersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVirtualServicesCommand}
   */
  listVirtualServices(
    args: ListVirtualServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualServicesCommandOutput>;
  listVirtualServices(
    args: ListVirtualServicesCommandInput,
    cb: (err: any, data?: ListVirtualServicesCommandOutput) => void
  ): void;
  listVirtualServices(
    args: ListVirtualServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewayRouteCommand}
   */
  updateGatewayRoute(
    args: UpdateGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayRouteCommandOutput>;
  updateGatewayRoute(
    args: UpdateGatewayRouteCommandInput,
    cb: (err: any, data?: UpdateGatewayRouteCommandOutput) => void
  ): void;
  updateGatewayRoute(
    args: UpdateGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMeshCommand}
   */
  updateMesh(
    args: UpdateMeshCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMeshCommandOutput>;
  updateMesh(
    args: UpdateMeshCommandInput,
    cb: (err: any, data?: UpdateMeshCommandOutput) => void
  ): void;
  updateMesh(
    args: UpdateMeshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMeshCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRouteCommand}
   */
  updateRoute(
    args: UpdateRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRouteCommandOutput>;
  updateRoute(
    args: UpdateRouteCommandInput,
    cb: (err: any, data?: UpdateRouteCommandOutput) => void
  ): void;
  updateRoute(
    args: UpdateRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVirtualGatewayCommand}
   */
  updateVirtualGateway(
    args: UpdateVirtualGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVirtualGatewayCommandOutput>;
  updateVirtualGateway(
    args: UpdateVirtualGatewayCommandInput,
    cb: (err: any, data?: UpdateVirtualGatewayCommandOutput) => void
  ): void;
  updateVirtualGateway(
    args: UpdateVirtualGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVirtualGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVirtualNodeCommand}
   */
  updateVirtualNode(
    args: UpdateVirtualNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVirtualNodeCommandOutput>;
  updateVirtualNode(
    args: UpdateVirtualNodeCommandInput,
    cb: (err: any, data?: UpdateVirtualNodeCommandOutput) => void
  ): void;
  updateVirtualNode(
    args: UpdateVirtualNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVirtualNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVirtualRouterCommand}
   */
  updateVirtualRouter(
    args: UpdateVirtualRouterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVirtualRouterCommandOutput>;
  updateVirtualRouter(
    args: UpdateVirtualRouterCommandInput,
    cb: (err: any, data?: UpdateVirtualRouterCommandOutput) => void
  ): void;
  updateVirtualRouter(
    args: UpdateVirtualRouterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVirtualRouterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVirtualServiceCommand}
   */
  updateVirtualService(
    args: UpdateVirtualServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVirtualServiceCommandOutput>;
  updateVirtualService(
    args: UpdateVirtualServiceCommandInput,
    cb: (err: any, data?: UpdateVirtualServiceCommandOutput) => void
  ): void;
  updateVirtualService(
    args: UpdateVirtualServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVirtualServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewayRoutesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGatewayRoutesCommandOutput}.
   */
  paginateListGatewayRoutes(
    args: ListGatewayRoutesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGatewayRoutesCommandOutput>;

  /**
   * @see {@link ListMeshesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMeshesCommandOutput}.
   */
  paginateListMeshes(
    args?: ListMeshesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMeshesCommandOutput>;

  /**
   * @see {@link ListRoutesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRoutesCommandOutput}.
   */
  paginateListRoutes(
    args: ListRoutesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRoutesCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsForResourceCommandOutput}.
   */
  paginateListTagsForResource(
    args: ListTagsForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsForResourceCommandOutput>;

  /**
   * @see {@link ListVirtualGatewaysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVirtualGatewaysCommandOutput}.
   */
  paginateListVirtualGateways(
    args: ListVirtualGatewaysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVirtualGatewaysCommandOutput>;

  /**
   * @see {@link ListVirtualNodesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVirtualNodesCommandOutput}.
   */
  paginateListVirtualNodes(
    args: ListVirtualNodesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVirtualNodesCommandOutput>;

  /**
   * @see {@link ListVirtualRoutersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVirtualRoutersCommandOutput}.
   */
  paginateListVirtualRouters(
    args: ListVirtualRoutersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVirtualRoutersCommandOutput>;

  /**
   * @see {@link ListVirtualServicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVirtualServicesCommandOutput}.
   */
  paginateListVirtualServices(
    args: ListVirtualServicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVirtualServicesCommandOutput>;
}

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
 * @public
 */
export class AppMesh extends AppMeshClient implements AppMesh {}
createAggregatedClient(commands, AppMesh, { paginators });
