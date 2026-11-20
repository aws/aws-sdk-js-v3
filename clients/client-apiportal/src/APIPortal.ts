// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { APIPortalClient } from "./APIPortalClient";
import {
  type AssociateManagedApisCommandInput,
  type AssociateManagedApisCommandOutput,
  AssociateManagedApisCommand,
} from "./commands/AssociateManagedApisCommand";
import {
  type CreateManagedApiCommandInput,
  type CreateManagedApiCommandOutput,
  CreateManagedApiCommand,
} from "./commands/CreateManagedApiCommand";
import {
  type CreatePortalCommandInput,
  type CreatePortalCommandOutput,
  CreatePortalCommand,
} from "./commands/CreatePortalCommand";
import {
  type CreatePortalPreviewCommandInput,
  type CreatePortalPreviewCommandOutput,
  CreatePortalPreviewCommand,
} from "./commands/CreatePortalPreviewCommand";
import {
  type CreateProductApiPageCommandInput,
  type CreateProductApiPageCommandOutput,
  CreateProductApiPageCommand,
} from "./commands/CreateProductApiPageCommand";
import {
  type CreateProductCommandInput,
  type CreateProductCommandOutput,
  CreateProductCommand,
} from "./commands/CreateProductCommand";
import {
  type CreateProductPageCommandInput,
  type CreateProductPageCommandOutput,
  CreateProductPageCommand,
} from "./commands/CreateProductPageCommand";
import {
  type DeleteDiscoveryConfigurationCommandInput,
  type DeleteDiscoveryConfigurationCommandOutput,
  DeleteDiscoveryConfigurationCommand,
} from "./commands/DeleteDiscoveryConfigurationCommand";
import {
  type DeleteManagedApiCommandInput,
  type DeleteManagedApiCommandOutput,
  DeleteManagedApiCommand,
} from "./commands/DeleteManagedApiCommand";
import {
  type DeleteOrganizationDiscoveryConfigurationCommandInput,
  type DeleteOrganizationDiscoveryConfigurationCommandOutput,
  DeleteOrganizationDiscoveryConfigurationCommand,
} from "./commands/DeleteOrganizationDiscoveryConfigurationCommand";
import {
  type DeletePortalCommandInput,
  type DeletePortalCommandOutput,
  DeletePortalCommand,
} from "./commands/DeletePortalCommand";
import {
  type DeleteProductApiPageCommandInput,
  type DeleteProductApiPageCommandOutput,
  DeleteProductApiPageCommand,
} from "./commands/DeleteProductApiPageCommand";
import {
  type DeleteProductCommandInput,
  type DeleteProductCommandOutput,
  DeleteProductCommand,
} from "./commands/DeleteProductCommand";
import {
  type DeleteProductPageCommandInput,
  type DeleteProductPageCommandOutput,
  DeleteProductPageCommand,
} from "./commands/DeleteProductPageCommand";
import {
  type DeleteProductSharingPolicyCommandInput,
  type DeleteProductSharingPolicyCommandOutput,
  DeleteProductSharingPolicyCommand,
} from "./commands/DeleteProductSharingPolicyCommand";
import {
  type DisassociateManagedApisCommandInput,
  type DisassociateManagedApisCommandOutput,
  DisassociateManagedApisCommand,
} from "./commands/DisassociateManagedApisCommand";
import {
  type GetApiInventoryItemCommandInput,
  type GetApiInventoryItemCommandOutput,
  GetApiInventoryItemCommand,
} from "./commands/GetApiInventoryItemCommand";
import {
  type GetDiscoveryConfigurationCommandInput,
  type GetDiscoveryConfigurationCommandOutput,
  GetDiscoveryConfigurationCommand,
} from "./commands/GetDiscoveryConfigurationCommand";
import {
  type GetManagedApiCommandInput,
  type GetManagedApiCommandOutput,
  GetManagedApiCommand,
} from "./commands/GetManagedApiCommand";
import {
  type GetOrganizationDiscoveryConfigurationCommandInput,
  type GetOrganizationDiscoveryConfigurationCommandOutput,
  GetOrganizationDiscoveryConfigurationCommand,
} from "./commands/GetOrganizationDiscoveryConfigurationCommand";
import { type GetPortalCommandInput, type GetPortalCommandOutput, GetPortalCommand } from "./commands/GetPortalCommand";
import {
  type GetProductApiPageCommandInput,
  type GetProductApiPageCommandOutput,
  GetProductApiPageCommand,
} from "./commands/GetProductApiPageCommand";
import {
  type GetProductCommandInput,
  type GetProductCommandOutput,
  GetProductCommand,
} from "./commands/GetProductCommand";
import {
  type GetProductPageCommandInput,
  type GetProductPageCommandOutput,
  GetProductPageCommand,
} from "./commands/GetProductPageCommand";
import {
  type GetProductSharingPolicyCommandInput,
  type GetProductSharingPolicyCommandOutput,
  GetProductSharingPolicyCommand,
} from "./commands/GetProductSharingPolicyCommand";
import {
  type ListApiInventoryItemsCommandInput,
  type ListApiInventoryItemsCommandOutput,
  ListApiInventoryItemsCommand,
} from "./commands/ListApiInventoryItemsCommand";
import {
  type ListDiscoveryStatusesCommandInput,
  type ListDiscoveryStatusesCommandOutput,
  ListDiscoveryStatusesCommand,
} from "./commands/ListDiscoveryStatusesCommand";
import {
  type ListManagedApiEventsCommandInput,
  type ListManagedApiEventsCommandOutput,
  ListManagedApiEventsCommand,
} from "./commands/ListManagedApiEventsCommand";
import {
  type ListManagedApisCommandInput,
  type ListManagedApisCommandOutput,
  ListManagedApisCommand,
} from "./commands/ListManagedApisCommand";
import {
  type ListPortalsCommandInput,
  type ListPortalsCommandOutput,
  ListPortalsCommand,
} from "./commands/ListPortalsCommand";
import {
  type ListProductApiPagesCommandInput,
  type ListProductApiPagesCommandOutput,
  ListProductApiPagesCommand,
} from "./commands/ListProductApiPagesCommand";
import {
  type ListProductPagesCommandInput,
  type ListProductPagesCommandOutput,
  ListProductPagesCommand,
} from "./commands/ListProductPagesCommand";
import {
  type ListProductsCommandInput,
  type ListProductsCommandOutput,
  ListProductsCommand,
} from "./commands/ListProductsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutDiscoveryConfigurationCommandInput,
  type PutDiscoveryConfigurationCommandOutput,
  PutDiscoveryConfigurationCommand,
} from "./commands/PutDiscoveryConfigurationCommand";
import {
  type PutOrganizationDiscoveryConfigurationCommandInput,
  type PutOrganizationDiscoveryConfigurationCommandOutput,
  PutOrganizationDiscoveryConfigurationCommand,
} from "./commands/PutOrganizationDiscoveryConfigurationCommand";
import {
  type PutProductSharingPolicyCommandInput,
  type PutProductSharingPolicyCommandOutput,
  PutProductSharingPolicyCommand,
} from "./commands/PutProductSharingPolicyCommand";
import {
  type StartDiscoveryCommandInput,
  type StartDiscoveryCommandOutput,
  StartDiscoveryCommand,
} from "./commands/StartDiscoveryCommand";
import {
  type StopDiscoveryCommandInput,
  type StopDiscoveryCommandOutput,
  StopDiscoveryCommand,
} from "./commands/StopDiscoveryCommand";
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
  type UpdatePortalCommandInput,
  type UpdatePortalCommandOutput,
  UpdatePortalCommand,
} from "./commands/UpdatePortalCommand";
import {
  type UpdatePortalPublishStatusCommandInput,
  type UpdatePortalPublishStatusCommandOutput,
  UpdatePortalPublishStatusCommand,
} from "./commands/UpdatePortalPublishStatusCommand";
import {
  type UpdateProductApiPageCommandInput,
  type UpdateProductApiPageCommandOutput,
  UpdateProductApiPageCommand,
} from "./commands/UpdateProductApiPageCommand";
import {
  type UpdateProductCommandInput,
  type UpdateProductCommandOutput,
  UpdateProductCommand,
} from "./commands/UpdateProductCommand";
import {
  type UpdateProductPageCommandInput,
  type UpdateProductPageCommandOutput,
  UpdateProductPageCommand,
} from "./commands/UpdateProductPageCommand";
import { paginateListApiInventoryItems } from "./pagination/ListApiInventoryItemsPaginator";
import { paginateListDiscoveryStatuses } from "./pagination/ListDiscoveryStatusesPaginator";
import { paginateListManagedApiEvents } from "./pagination/ListManagedApiEventsPaginator";
import { paginateListManagedApis } from "./pagination/ListManagedApisPaginator";
import { paginateListPortals } from "./pagination/ListPortalsPaginator";
import { paginateListProductApiPages } from "./pagination/ListProductApiPagesPaginator";
import { paginateListProductPages } from "./pagination/ListProductPagesPaginator";
import { paginateListProducts } from "./pagination/ListProductsPaginator";

const commands = {
  AssociateManagedApisCommand,
  CreateManagedApiCommand,
  CreatePortalCommand,
  CreatePortalPreviewCommand,
  CreateProductCommand,
  CreateProductApiPageCommand,
  CreateProductPageCommand,
  DeleteDiscoveryConfigurationCommand,
  DeleteManagedApiCommand,
  DeleteOrganizationDiscoveryConfigurationCommand,
  DeletePortalCommand,
  DeleteProductCommand,
  DeleteProductApiPageCommand,
  DeleteProductPageCommand,
  DeleteProductSharingPolicyCommand,
  DisassociateManagedApisCommand,
  GetApiInventoryItemCommand,
  GetDiscoveryConfigurationCommand,
  GetManagedApiCommand,
  GetOrganizationDiscoveryConfigurationCommand,
  GetPortalCommand,
  GetProductCommand,
  GetProductApiPageCommand,
  GetProductPageCommand,
  GetProductSharingPolicyCommand,
  ListApiInventoryItemsCommand,
  ListDiscoveryStatusesCommand,
  ListManagedApiEventsCommand,
  ListManagedApisCommand,
  ListPortalsCommand,
  ListProductApiPagesCommand,
  ListProductPagesCommand,
  ListProductsCommand,
  ListTagsForResourceCommand,
  PutDiscoveryConfigurationCommand,
  PutOrganizationDiscoveryConfigurationCommand,
  PutProductSharingPolicyCommand,
  StartDiscoveryCommand,
  StopDiscoveryCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdatePortalCommand,
  UpdatePortalPublishStatusCommand,
  UpdateProductCommand,
  UpdateProductApiPageCommand,
  UpdateProductPageCommand,
};
const paginators = {
  paginateListApiInventoryItems,
  paginateListDiscoveryStatuses,
  paginateListManagedApiEvents,
  paginateListManagedApis,
  paginateListPortals,
  paginateListProductApiPages,
  paginateListProductPages,
  paginateListProducts,
};

/**
 * @public
 */
export interface APIPortalRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface APIPortal {
  /**
   * @see {@link AssociateManagedApisCommand}
   */
  associateManagedApis(
    args: AssociateManagedApisCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<AssociateManagedApisCommandOutput>;
  associateManagedApis(
    args: AssociateManagedApisCommandInput,
    cb: (err: any, data?: AssociateManagedApisCommandOutput) => void
  ): void;
  associateManagedApis(
    args: AssociateManagedApisCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: AssociateManagedApisCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateManagedApiCommand}
   */
  createManagedApi(
    args: CreateManagedApiCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<CreateManagedApiCommandOutput>;
  createManagedApi(
    args: CreateManagedApiCommandInput,
    cb: (err: any, data?: CreateManagedApiCommandOutput) => void
  ): void;
  createManagedApi(
    args: CreateManagedApiCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: CreateManagedApiCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePortalCommand}
   */
  createPortal(
    args: CreatePortalCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<CreatePortalCommandOutput>;
  createPortal(
    args: CreatePortalCommandInput,
    cb: (err: any, data?: CreatePortalCommandOutput) => void
  ): void;
  createPortal(
    args: CreatePortalCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: CreatePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePortalPreviewCommand}
   */
  createPortalPreview(
    args: CreatePortalPreviewCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<CreatePortalPreviewCommandOutput>;
  createPortalPreview(
    args: CreatePortalPreviewCommandInput,
    cb: (err: any, data?: CreatePortalPreviewCommandOutput) => void
  ): void;
  createPortalPreview(
    args: CreatePortalPreviewCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: CreatePortalPreviewCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProductCommand}
   */
  createProduct(
    args: CreateProductCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<CreateProductCommandOutput>;
  createProduct(
    args: CreateProductCommandInput,
    cb: (err: any, data?: CreateProductCommandOutput) => void
  ): void;
  createProduct(
    args: CreateProductCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: CreateProductCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProductApiPageCommand}
   */
  createProductApiPage(
    args: CreateProductApiPageCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<CreateProductApiPageCommandOutput>;
  createProductApiPage(
    args: CreateProductApiPageCommandInput,
    cb: (err: any, data?: CreateProductApiPageCommandOutput) => void
  ): void;
  createProductApiPage(
    args: CreateProductApiPageCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: CreateProductApiPageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProductPageCommand}
   */
  createProductPage(
    args: CreateProductPageCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<CreateProductPageCommandOutput>;
  createProductPage(
    args: CreateProductPageCommandInput,
    cb: (err: any, data?: CreateProductPageCommandOutput) => void
  ): void;
  createProductPage(
    args: CreateProductPageCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: CreateProductPageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDiscoveryConfigurationCommand}
   */
  deleteDiscoveryConfiguration(): Promise<DeleteDiscoveryConfigurationCommandOutput>;
  deleteDiscoveryConfiguration(
    args: DeleteDiscoveryConfigurationCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<DeleteDiscoveryConfigurationCommandOutput>;
  deleteDiscoveryConfiguration(
    args: DeleteDiscoveryConfigurationCommandInput,
    cb: (err: any, data?: DeleteDiscoveryConfigurationCommandOutput) => void
  ): void;
  deleteDiscoveryConfiguration(
    args: DeleteDiscoveryConfigurationCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: DeleteDiscoveryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteManagedApiCommand}
   */
  deleteManagedApi(
    args: DeleteManagedApiCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<DeleteManagedApiCommandOutput>;
  deleteManagedApi(
    args: DeleteManagedApiCommandInput,
    cb: (err: any, data?: DeleteManagedApiCommandOutput) => void
  ): void;
  deleteManagedApi(
    args: DeleteManagedApiCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: DeleteManagedApiCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOrganizationDiscoveryConfigurationCommand}
   */
  deleteOrganizationDiscoveryConfiguration(): Promise<DeleteOrganizationDiscoveryConfigurationCommandOutput>;
  deleteOrganizationDiscoveryConfiguration(
    args: DeleteOrganizationDiscoveryConfigurationCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<DeleteOrganizationDiscoveryConfigurationCommandOutput>;
  deleteOrganizationDiscoveryConfiguration(
    args: DeleteOrganizationDiscoveryConfigurationCommandInput,
    cb: (err: any, data?: DeleteOrganizationDiscoveryConfigurationCommandOutput) => void
  ): void;
  deleteOrganizationDiscoveryConfiguration(
    args: DeleteOrganizationDiscoveryConfigurationCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: DeleteOrganizationDiscoveryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePortalCommand}
   */
  deletePortal(
    args: DeletePortalCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<DeletePortalCommandOutput>;
  deletePortal(
    args: DeletePortalCommandInput,
    cb: (err: any, data?: DeletePortalCommandOutput) => void
  ): void;
  deletePortal(
    args: DeletePortalCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: DeletePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProductCommand}
   */
  deleteProduct(
    args: DeleteProductCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<DeleteProductCommandOutput>;
  deleteProduct(
    args: DeleteProductCommandInput,
    cb: (err: any, data?: DeleteProductCommandOutput) => void
  ): void;
  deleteProduct(
    args: DeleteProductCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: DeleteProductCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProductApiPageCommand}
   */
  deleteProductApiPage(
    args: DeleteProductApiPageCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<DeleteProductApiPageCommandOutput>;
  deleteProductApiPage(
    args: DeleteProductApiPageCommandInput,
    cb: (err: any, data?: DeleteProductApiPageCommandOutput) => void
  ): void;
  deleteProductApiPage(
    args: DeleteProductApiPageCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: DeleteProductApiPageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProductPageCommand}
   */
  deleteProductPage(
    args: DeleteProductPageCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<DeleteProductPageCommandOutput>;
  deleteProductPage(
    args: DeleteProductPageCommandInput,
    cb: (err: any, data?: DeleteProductPageCommandOutput) => void
  ): void;
  deleteProductPage(
    args: DeleteProductPageCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: DeleteProductPageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProductSharingPolicyCommand}
   */
  deleteProductSharingPolicy(
    args: DeleteProductSharingPolicyCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<DeleteProductSharingPolicyCommandOutput>;
  deleteProductSharingPolicy(
    args: DeleteProductSharingPolicyCommandInput,
    cb: (err: any, data?: DeleteProductSharingPolicyCommandOutput) => void
  ): void;
  deleteProductSharingPolicy(
    args: DeleteProductSharingPolicyCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: DeleteProductSharingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateManagedApisCommand}
   */
  disassociateManagedApis(
    args: DisassociateManagedApisCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<DisassociateManagedApisCommandOutput>;
  disassociateManagedApis(
    args: DisassociateManagedApisCommandInput,
    cb: (err: any, data?: DisassociateManagedApisCommandOutput) => void
  ): void;
  disassociateManagedApis(
    args: DisassociateManagedApisCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: DisassociateManagedApisCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApiInventoryItemCommand}
   */
  getApiInventoryItem(
    args: GetApiInventoryItemCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<GetApiInventoryItemCommandOutput>;
  getApiInventoryItem(
    args: GetApiInventoryItemCommandInput,
    cb: (err: any, data?: GetApiInventoryItemCommandOutput) => void
  ): void;
  getApiInventoryItem(
    args: GetApiInventoryItemCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: GetApiInventoryItemCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDiscoveryConfigurationCommand}
   */
  getDiscoveryConfiguration(): Promise<GetDiscoveryConfigurationCommandOutput>;
  getDiscoveryConfiguration(
    args: GetDiscoveryConfigurationCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<GetDiscoveryConfigurationCommandOutput>;
  getDiscoveryConfiguration(
    args: GetDiscoveryConfigurationCommandInput,
    cb: (err: any, data?: GetDiscoveryConfigurationCommandOutput) => void
  ): void;
  getDiscoveryConfiguration(
    args: GetDiscoveryConfigurationCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: GetDiscoveryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedApiCommand}
   */
  getManagedApi(
    args: GetManagedApiCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<GetManagedApiCommandOutput>;
  getManagedApi(
    args: GetManagedApiCommandInput,
    cb: (err: any, data?: GetManagedApiCommandOutput) => void
  ): void;
  getManagedApi(
    args: GetManagedApiCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: GetManagedApiCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrganizationDiscoveryConfigurationCommand}
   */
  getOrganizationDiscoveryConfiguration(): Promise<GetOrganizationDiscoveryConfigurationCommandOutput>;
  getOrganizationDiscoveryConfiguration(
    args: GetOrganizationDiscoveryConfigurationCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<GetOrganizationDiscoveryConfigurationCommandOutput>;
  getOrganizationDiscoveryConfiguration(
    args: GetOrganizationDiscoveryConfigurationCommandInput,
    cb: (err: any, data?: GetOrganizationDiscoveryConfigurationCommandOutput) => void
  ): void;
  getOrganizationDiscoveryConfiguration(
    args: GetOrganizationDiscoveryConfigurationCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: GetOrganizationDiscoveryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPortalCommand}
   */
  getPortal(
    args: GetPortalCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<GetPortalCommandOutput>;
  getPortal(
    args: GetPortalCommandInput,
    cb: (err: any, data?: GetPortalCommandOutput) => void
  ): void;
  getPortal(
    args: GetPortalCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: GetPortalCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProductCommand}
   */
  getProduct(
    args: GetProductCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<GetProductCommandOutput>;
  getProduct(
    args: GetProductCommandInput,
    cb: (err: any, data?: GetProductCommandOutput) => void
  ): void;
  getProduct(
    args: GetProductCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: GetProductCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProductApiPageCommand}
   */
  getProductApiPage(
    args: GetProductApiPageCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<GetProductApiPageCommandOutput>;
  getProductApiPage(
    args: GetProductApiPageCommandInput,
    cb: (err: any, data?: GetProductApiPageCommandOutput) => void
  ): void;
  getProductApiPage(
    args: GetProductApiPageCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: GetProductApiPageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProductPageCommand}
   */
  getProductPage(
    args: GetProductPageCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<GetProductPageCommandOutput>;
  getProductPage(
    args: GetProductPageCommandInput,
    cb: (err: any, data?: GetProductPageCommandOutput) => void
  ): void;
  getProductPage(
    args: GetProductPageCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: GetProductPageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProductSharingPolicyCommand}
   */
  getProductSharingPolicy(
    args: GetProductSharingPolicyCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<GetProductSharingPolicyCommandOutput>;
  getProductSharingPolicy(
    args: GetProductSharingPolicyCommandInput,
    cb: (err: any, data?: GetProductSharingPolicyCommandOutput) => void
  ): void;
  getProductSharingPolicy(
    args: GetProductSharingPolicyCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: GetProductSharingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApiInventoryItemsCommand}
   */
  listApiInventoryItems(): Promise<ListApiInventoryItemsCommandOutput>;
  listApiInventoryItems(
    args: ListApiInventoryItemsCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<ListApiInventoryItemsCommandOutput>;
  listApiInventoryItems(
    args: ListApiInventoryItemsCommandInput,
    cb: (err: any, data?: ListApiInventoryItemsCommandOutput) => void
  ): void;
  listApiInventoryItems(
    args: ListApiInventoryItemsCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: ListApiInventoryItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDiscoveryStatusesCommand}
   */
  listDiscoveryStatuses(): Promise<ListDiscoveryStatusesCommandOutput>;
  listDiscoveryStatuses(
    args: ListDiscoveryStatusesCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<ListDiscoveryStatusesCommandOutput>;
  listDiscoveryStatuses(
    args: ListDiscoveryStatusesCommandInput,
    cb: (err: any, data?: ListDiscoveryStatusesCommandOutput) => void
  ): void;
  listDiscoveryStatuses(
    args: ListDiscoveryStatusesCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: ListDiscoveryStatusesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedApiEventsCommand}
   */
  listManagedApiEvents(
    args: ListManagedApiEventsCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<ListManagedApiEventsCommandOutput>;
  listManagedApiEvents(
    args: ListManagedApiEventsCommandInput,
    cb: (err: any, data?: ListManagedApiEventsCommandOutput) => void
  ): void;
  listManagedApiEvents(
    args: ListManagedApiEventsCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: ListManagedApiEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedApisCommand}
   */
  listManagedApis(): Promise<ListManagedApisCommandOutput>;
  listManagedApis(
    args: ListManagedApisCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<ListManagedApisCommandOutput>;
  listManagedApis(
    args: ListManagedApisCommandInput,
    cb: (err: any, data?: ListManagedApisCommandOutput) => void
  ): void;
  listManagedApis(
    args: ListManagedApisCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: ListManagedApisCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPortalsCommand}
   */
  listPortals(): Promise<ListPortalsCommandOutput>;
  listPortals(
    args: ListPortalsCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<ListPortalsCommandOutput>;
  listPortals(
    args: ListPortalsCommandInput,
    cb: (err: any, data?: ListPortalsCommandOutput) => void
  ): void;
  listPortals(
    args: ListPortalsCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: ListPortalsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProductApiPagesCommand}
   */
  listProductApiPages(
    args: ListProductApiPagesCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<ListProductApiPagesCommandOutput>;
  listProductApiPages(
    args: ListProductApiPagesCommandInput,
    cb: (err: any, data?: ListProductApiPagesCommandOutput) => void
  ): void;
  listProductApiPages(
    args: ListProductApiPagesCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: ListProductApiPagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProductPagesCommand}
   */
  listProductPages(
    args: ListProductPagesCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<ListProductPagesCommandOutput>;
  listProductPages(
    args: ListProductPagesCommandInput,
    cb: (err: any, data?: ListProductPagesCommandOutput) => void
  ): void;
  listProductPages(
    args: ListProductPagesCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: ListProductPagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProductsCommand}
   */
  listProducts(): Promise<ListProductsCommandOutput>;
  listProducts(
    args: ListProductsCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<ListProductsCommandOutput>;
  listProducts(
    args: ListProductsCommandInput,
    cb: (err: any, data?: ListProductsCommandOutput) => void
  ): void;
  listProducts(
    args: ListProductsCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: ListProductsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDiscoveryConfigurationCommand}
   */
  putDiscoveryConfiguration(): Promise<PutDiscoveryConfigurationCommandOutput>;
  putDiscoveryConfiguration(
    args: PutDiscoveryConfigurationCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<PutDiscoveryConfigurationCommandOutput>;
  putDiscoveryConfiguration(
    args: PutDiscoveryConfigurationCommandInput,
    cb: (err: any, data?: PutDiscoveryConfigurationCommandOutput) => void
  ): void;
  putDiscoveryConfiguration(
    args: PutDiscoveryConfigurationCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: PutDiscoveryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutOrganizationDiscoveryConfigurationCommand}
   */
  putOrganizationDiscoveryConfiguration(): Promise<PutOrganizationDiscoveryConfigurationCommandOutput>;
  putOrganizationDiscoveryConfiguration(
    args: PutOrganizationDiscoveryConfigurationCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<PutOrganizationDiscoveryConfigurationCommandOutput>;
  putOrganizationDiscoveryConfiguration(
    args: PutOrganizationDiscoveryConfigurationCommandInput,
    cb: (err: any, data?: PutOrganizationDiscoveryConfigurationCommandOutput) => void
  ): void;
  putOrganizationDiscoveryConfiguration(
    args: PutOrganizationDiscoveryConfigurationCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: PutOrganizationDiscoveryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutProductSharingPolicyCommand}
   */
  putProductSharingPolicy(
    args: PutProductSharingPolicyCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<PutProductSharingPolicyCommandOutput>;
  putProductSharingPolicy(
    args: PutProductSharingPolicyCommandInput,
    cb: (err: any, data?: PutProductSharingPolicyCommandOutput) => void
  ): void;
  putProductSharingPolicy(
    args: PutProductSharingPolicyCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: PutProductSharingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDiscoveryCommand}
   */
  startDiscovery(
    args: StartDiscoveryCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<StartDiscoveryCommandOutput>;
  startDiscovery(
    args: StartDiscoveryCommandInput,
    cb: (err: any, data?: StartDiscoveryCommandOutput) => void
  ): void;
  startDiscovery(
    args: StartDiscoveryCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: StartDiscoveryCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDiscoveryCommand}
   */
  stopDiscovery(
    args: StopDiscoveryCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<StopDiscoveryCommandOutput>;
  stopDiscovery(
    args: StopDiscoveryCommandInput,
    cb: (err: any, data?: StopDiscoveryCommandOutput) => void
  ): void;
  stopDiscovery(
    args: StopDiscoveryCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: StopDiscoveryCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePortalCommand}
   */
  updatePortal(
    args: UpdatePortalCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<UpdatePortalCommandOutput>;
  updatePortal(
    args: UpdatePortalCommandInput,
    cb: (err: any, data?: UpdatePortalCommandOutput) => void
  ): void;
  updatePortal(
    args: UpdatePortalCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: UpdatePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePortalPublishStatusCommand}
   */
  updatePortalPublishStatus(
    args: UpdatePortalPublishStatusCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<UpdatePortalPublishStatusCommandOutput>;
  updatePortalPublishStatus(
    args: UpdatePortalPublishStatusCommandInput,
    cb: (err: any, data?: UpdatePortalPublishStatusCommandOutput) => void
  ): void;
  updatePortalPublishStatus(
    args: UpdatePortalPublishStatusCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: UpdatePortalPublishStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProductCommand}
   */
  updateProduct(
    args: UpdateProductCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<UpdateProductCommandOutput>;
  updateProduct(
    args: UpdateProductCommandInput,
    cb: (err: any, data?: UpdateProductCommandOutput) => void
  ): void;
  updateProduct(
    args: UpdateProductCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: UpdateProductCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProductApiPageCommand}
   */
  updateProductApiPage(
    args: UpdateProductApiPageCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<UpdateProductApiPageCommandOutput>;
  updateProductApiPage(
    args: UpdateProductApiPageCommandInput,
    cb: (err: any, data?: UpdateProductApiPageCommandOutput) => void
  ): void;
  updateProductApiPage(
    args: UpdateProductApiPageCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: UpdateProductApiPageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProductPageCommand}
   */
  updateProductPage(
    args: UpdateProductPageCommandInput,
    options?: APIPortalRequestOptions
  ): Promise<UpdateProductPageCommandOutput>;
  updateProductPage(
    args: UpdateProductPageCommandInput,
    cb: (err: any, data?: UpdateProductPageCommandOutput) => void
  ): void;
  updateProductPage(
    args: UpdateProductPageCommandInput,
    options: APIPortalRequestOptions,
    cb: (err: any, data?: UpdateProductPageCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApiInventoryItemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApiInventoryItemsCommandOutput}.
   */
  paginateListApiInventoryItems(
    args?: ListApiInventoryItemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApiInventoryItemsCommandOutput>;

  /**
   * @see {@link ListDiscoveryStatusesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDiscoveryStatusesCommandOutput}.
   */
  paginateListDiscoveryStatuses(
    args?: ListDiscoveryStatusesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDiscoveryStatusesCommandOutput>;

  /**
   * @see {@link ListManagedApiEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedApiEventsCommandOutput}.
   */
  paginateListManagedApiEvents(
    args: ListManagedApiEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedApiEventsCommandOutput>;

  /**
   * @see {@link ListManagedApisCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedApisCommandOutput}.
   */
  paginateListManagedApis(
    args?: ListManagedApisCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedApisCommandOutput>;

  /**
   * @see {@link ListPortalsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPortalsCommandOutput}.
   */
  paginateListPortals(
    args?: ListPortalsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPortalsCommandOutput>;

  /**
   * @see {@link ListProductApiPagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProductApiPagesCommandOutput}.
   */
  paginateListProductApiPages(
    args: ListProductApiPagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProductApiPagesCommandOutput>;

  /**
   * @see {@link ListProductPagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProductPagesCommandOutput}.
   */
  paginateListProductPages(
    args: ListProductPagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProductPagesCommandOutput>;

  /**
   * @see {@link ListProductsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProductsCommandOutput}.
   */
  paginateListProducts(
    args?: ListProductsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProductsCommandOutput>;
}

/**
 * API Portal discovers the APIs running in your AWS accounts and organization, lets you manage them as Managed APIs, and publishes their documentation to developer portals.
 * @public
 */
export class APIPortal extends APIPortalClient implements APIPortal {}
createAggregatedClient(commands, APIPortal, { paginators });
