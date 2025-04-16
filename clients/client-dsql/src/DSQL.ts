// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import {
  CreateMultiRegionClustersCommand,
  CreateMultiRegionClustersCommandInput,
  CreateMultiRegionClustersCommandOutput,
} from "./commands/CreateMultiRegionClustersCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
} from "./commands/DeleteClusterCommand";
import {
  DeleteMultiRegionClustersCommand,
  DeleteMultiRegionClustersCommandInput,
  DeleteMultiRegionClustersCommandOutput,
} from "./commands/DeleteMultiRegionClustersCommand";
import { GetClusterCommand, GetClusterCommandInput, GetClusterCommandOutput } from "./commands/GetClusterCommand";
import {
  GetVpcEndpointServiceNameCommand,
  GetVpcEndpointServiceNameCommandInput,
  GetVpcEndpointServiceNameCommandOutput,
} from "./commands/GetVpcEndpointServiceNameCommand";
import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "./commands/ListClustersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateClusterCommand,
  UpdateClusterCommandInput,
  UpdateClusterCommandOutput,
} from "./commands/UpdateClusterCommand";
import { DSQLClient, DSQLClientConfig } from "./DSQLClient";

const commands = {
  CreateClusterCommand,
  CreateMultiRegionClustersCommand,
  DeleteClusterCommand,
  DeleteMultiRegionClustersCommand,
  GetClusterCommand,
  GetVpcEndpointServiceNameCommand,
  ListClustersCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateClusterCommand,
};

export interface DSQL {
  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(): Promise<CreateClusterCommandOutput>;
  createCluster(args: CreateClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterCommandOutput>;
  createCluster(args: CreateClusterCommandInput, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMultiRegionClustersCommand}
   */
  createMultiRegionClusters(
    args: CreateMultiRegionClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMultiRegionClustersCommandOutput>;
  createMultiRegionClusters(
    args: CreateMultiRegionClustersCommandInput,
    cb: (err: any, data?: CreateMultiRegionClustersCommandOutput) => void
  ): void;
  createMultiRegionClusters(
    args: CreateMultiRegionClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMultiRegionClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(args: DeleteClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterCommandOutput>;
  deleteCluster(args: DeleteClusterCommandInput, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMultiRegionClustersCommand}
   */
  deleteMultiRegionClusters(
    args: DeleteMultiRegionClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMultiRegionClustersCommandOutput>;
  deleteMultiRegionClusters(
    args: DeleteMultiRegionClustersCommandInput,
    cb: (err: any, data?: DeleteMultiRegionClustersCommandOutput) => void
  ): void;
  deleteMultiRegionClusters(
    args: DeleteMultiRegionClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMultiRegionClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClusterCommand}
   */
  getCluster(args: GetClusterCommandInput, options?: __HttpHandlerOptions): Promise<GetClusterCommandOutput>;
  getCluster(args: GetClusterCommandInput, cb: (err: any, data?: GetClusterCommandOutput) => void): void;
  getCluster(
    args: GetClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVpcEndpointServiceNameCommand}
   */
  getVpcEndpointServiceName(
    args: GetVpcEndpointServiceNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVpcEndpointServiceNameCommandOutput>;
  getVpcEndpointServiceName(
    args: GetVpcEndpointServiceNameCommandInput,
    cb: (err: any, data?: GetVpcEndpointServiceNameCommandOutput) => void
  ): void;
  getVpcEndpointServiceName(
    args: GetVpcEndpointServiceNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpcEndpointServiceNameCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(): Promise<ListClustersCommandOutput>;
  listClusters(args: ListClustersCommandInput, options?: __HttpHandlerOptions): Promise<ListClustersCommandOutput>;
  listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
  listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
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
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterCommand}
   */
  updateCluster(args: UpdateClusterCommandInput, options?: __HttpHandlerOptions): Promise<UpdateClusterCommandOutput>;
  updateCluster(args: UpdateClusterCommandInput, cb: (err: any, data?: UpdateClusterCommandOutput) => void): void;
  updateCluster(
    args: UpdateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;
}

/**
 * <p>This is an interface reference for Amazon Aurora DSQL.
 *          It contains documentation for one of the programming or
 *          command line interfaces you can use to manage Amazon Aurora DSQL.</p>
 *          <p>Amazon Aurora DSQL is a serverless, distributed SQL
 *          database suitable for workloads of any size. Aurora DSQL
 *          is available in both single-Region and multi-Region configurations,
 *          so your clusters and databases are always available even if an
 *          Availability Zone or an Amazon Web Services Region are unavailable. Aurora DSQL
 *          lets you focus on using your data to acquire new insights for your
 *          business and customers.</p>
 * @public
 */
export class DSQL extends DSQLClient implements DSQL {}
createAggregatedClient(commands, DSQL);
