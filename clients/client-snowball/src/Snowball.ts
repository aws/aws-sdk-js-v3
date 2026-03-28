// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CancelClusterCommandInput,
  type CancelClusterCommandOutput,
  CancelClusterCommand,
} from "./commands/CancelClusterCommand";
import { type CancelJobCommandInput, type CancelJobCommandOutput, CancelJobCommand } from "./commands/CancelJobCommand";
import {
  type CreateAddressCommandInput,
  type CreateAddressCommandOutput,
  CreateAddressCommand,
} from "./commands/CreateAddressCommand";
import {
  type CreateClusterCommandInput,
  type CreateClusterCommandOutput,
  CreateClusterCommand,
} from "./commands/CreateClusterCommand";
import { type CreateJobCommandInput, type CreateJobCommandOutput, CreateJobCommand } from "./commands/CreateJobCommand";
import {
  type CreateLongTermPricingCommandInput,
  type CreateLongTermPricingCommandOutput,
  CreateLongTermPricingCommand,
} from "./commands/CreateLongTermPricingCommand";
import {
  type CreateReturnShippingLabelCommandInput,
  type CreateReturnShippingLabelCommandOutput,
  CreateReturnShippingLabelCommand,
} from "./commands/CreateReturnShippingLabelCommand";
import {
  type DescribeAddressCommandInput,
  type DescribeAddressCommandOutput,
  DescribeAddressCommand,
} from "./commands/DescribeAddressCommand";
import {
  type DescribeAddressesCommandInput,
  type DescribeAddressesCommandOutput,
  DescribeAddressesCommand,
} from "./commands/DescribeAddressesCommand";
import {
  type DescribeClusterCommandInput,
  type DescribeClusterCommandOutput,
  DescribeClusterCommand,
} from "./commands/DescribeClusterCommand";
import {
  type DescribeJobCommandInput,
  type DescribeJobCommandOutput,
  DescribeJobCommand,
} from "./commands/DescribeJobCommand";
import {
  type DescribeReturnShippingLabelCommandInput,
  type DescribeReturnShippingLabelCommandOutput,
  DescribeReturnShippingLabelCommand,
} from "./commands/DescribeReturnShippingLabelCommand";
import {
  type GetJobManifestCommandInput,
  type GetJobManifestCommandOutput,
  GetJobManifestCommand,
} from "./commands/GetJobManifestCommand";
import {
  type GetJobUnlockCodeCommandInput,
  type GetJobUnlockCodeCommandOutput,
  GetJobUnlockCodeCommand,
} from "./commands/GetJobUnlockCodeCommand";
import {
  type GetSnowballUsageCommandInput,
  type GetSnowballUsageCommandOutput,
  GetSnowballUsageCommand,
} from "./commands/GetSnowballUsageCommand";
import {
  type GetSoftwareUpdatesCommandInput,
  type GetSoftwareUpdatesCommandOutput,
  GetSoftwareUpdatesCommand,
} from "./commands/GetSoftwareUpdatesCommand";
import {
  type ListClusterJobsCommandInput,
  type ListClusterJobsCommandOutput,
  ListClusterJobsCommand,
} from "./commands/ListClusterJobsCommand";
import {
  type ListClustersCommandInput,
  type ListClustersCommandOutput,
  ListClustersCommand,
} from "./commands/ListClustersCommand";
import {
  type ListCompatibleImagesCommandInput,
  type ListCompatibleImagesCommandOutput,
  ListCompatibleImagesCommand,
} from "./commands/ListCompatibleImagesCommand";
import { type ListJobsCommandInput, type ListJobsCommandOutput, ListJobsCommand } from "./commands/ListJobsCommand";
import {
  type ListLongTermPricingCommandInput,
  type ListLongTermPricingCommandOutput,
  ListLongTermPricingCommand,
} from "./commands/ListLongTermPricingCommand";
import {
  type ListPickupLocationsCommandInput,
  type ListPickupLocationsCommandOutput,
  ListPickupLocationsCommand,
} from "./commands/ListPickupLocationsCommand";
import {
  type ListServiceVersionsCommandInput,
  type ListServiceVersionsCommandOutput,
  ListServiceVersionsCommand,
} from "./commands/ListServiceVersionsCommand";
import {
  type UpdateClusterCommandInput,
  type UpdateClusterCommandOutput,
  UpdateClusterCommand,
} from "./commands/UpdateClusterCommand";
import { type UpdateJobCommandInput, type UpdateJobCommandOutput, UpdateJobCommand } from "./commands/UpdateJobCommand";
import {
  type UpdateJobShipmentStateCommandInput,
  type UpdateJobShipmentStateCommandOutput,
  UpdateJobShipmentStateCommand,
} from "./commands/UpdateJobShipmentStateCommand";
import {
  type UpdateLongTermPricingCommandInput,
  type UpdateLongTermPricingCommandOutput,
  UpdateLongTermPricingCommand,
} from "./commands/UpdateLongTermPricingCommand";
import { paginateDescribeAddresses } from "./pagination/DescribeAddressesPaginator";
import { paginateListClusterJobs } from "./pagination/ListClusterJobsPaginator";
import { paginateListClusters } from "./pagination/ListClustersPaginator";
import { paginateListCompatibleImages } from "./pagination/ListCompatibleImagesPaginator";
import { paginateListJobs } from "./pagination/ListJobsPaginator";
import { paginateListLongTermPricing } from "./pagination/ListLongTermPricingPaginator";
import { paginateListPickupLocations } from "./pagination/ListPickupLocationsPaginator";
import { SnowballClient } from "./SnowballClient";

const commands = {
  CancelClusterCommand,
  CancelJobCommand,
  CreateAddressCommand,
  CreateClusterCommand,
  CreateJobCommand,
  CreateLongTermPricingCommand,
  CreateReturnShippingLabelCommand,
  DescribeAddressCommand,
  DescribeAddressesCommand,
  DescribeClusterCommand,
  DescribeJobCommand,
  DescribeReturnShippingLabelCommand,
  GetJobManifestCommand,
  GetJobUnlockCodeCommand,
  GetSnowballUsageCommand,
  GetSoftwareUpdatesCommand,
  ListClusterJobsCommand,
  ListClustersCommand,
  ListCompatibleImagesCommand,
  ListJobsCommand,
  ListLongTermPricingCommand,
  ListPickupLocationsCommand,
  ListServiceVersionsCommand,
  UpdateClusterCommand,
  UpdateJobCommand,
  UpdateJobShipmentStateCommand,
  UpdateLongTermPricingCommand,
};
const paginators = {
  paginateDescribeAddresses,
  paginateListClusterJobs,
  paginateListClusters,
  paginateListCompatibleImages,
  paginateListJobs,
  paginateListLongTermPricing,
  paginateListPickupLocations,
};

export interface Snowball {
  /**
   * @see {@link CancelClusterCommand}
   */
  cancelCluster(
    args: CancelClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelClusterCommandOutput>;
  cancelCluster(
    args: CancelClusterCommandInput,
    cb: (err: any, data?: CancelClusterCommandOutput) => void
  ): void;
  cancelCluster(
    args: CancelClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelJobCommand}
   */
  cancelJob(
    args: CancelJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelJobCommandOutput>;
  cancelJob(
    args: CancelJobCommandInput,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;
  cancelJob(
    args: CancelJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAddressCommand}
   */
  createAddress(
    args: CreateAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAddressCommandOutput>;
  createAddress(
    args: CreateAddressCommandInput,
    cb: (err: any, data?: CreateAddressCommandOutput) => void
  ): void;
  createAddress(
    args: CreateAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(
    args: CreateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterCommandOutput>;
  createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobCommand}
   */
  createJob(): Promise<CreateJobCommandOutput>;
  createJob(
    args: CreateJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateJobCommandOutput>;
  createJob(
    args: CreateJobCommandInput,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;
  createJob(
    args: CreateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLongTermPricingCommand}
   */
  createLongTermPricing(
    args: CreateLongTermPricingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLongTermPricingCommandOutput>;
  createLongTermPricing(
    args: CreateLongTermPricingCommandInput,
    cb: (err: any, data?: CreateLongTermPricingCommandOutput) => void
  ): void;
  createLongTermPricing(
    args: CreateLongTermPricingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLongTermPricingCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReturnShippingLabelCommand}
   */
  createReturnShippingLabel(
    args: CreateReturnShippingLabelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReturnShippingLabelCommandOutput>;
  createReturnShippingLabel(
    args: CreateReturnShippingLabelCommandInput,
    cb: (err: any, data?: CreateReturnShippingLabelCommandOutput) => void
  ): void;
  createReturnShippingLabel(
    args: CreateReturnShippingLabelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReturnShippingLabelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAddressCommand}
   */
  describeAddress(
    args: DescribeAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAddressCommandOutput>;
  describeAddress(
    args: DescribeAddressCommandInput,
    cb: (err: any, data?: DescribeAddressCommandOutput) => void
  ): void;
  describeAddress(
    args: DescribeAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAddressesCommand}
   */
  describeAddresses(): Promise<DescribeAddressesCommandOutput>;
  describeAddresses(
    args: DescribeAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAddressesCommandOutput>;
  describeAddresses(
    args: DescribeAddressesCommandInput,
    cb: (err: any, data?: DescribeAddressesCommandOutput) => void
  ): void;
  describeAddresses(
    args: DescribeAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAddressesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterCommand}
   */
  describeCluster(
    args: DescribeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterCommandOutput>;
  describeCluster(
    args: DescribeClusterCommandInput,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;
  describeCluster(
    args: DescribeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobCommand}
   */
  describeJob(
    args: DescribeJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobCommandOutput>;
  describeJob(
    args: DescribeJobCommandInput,
    cb: (err: any, data?: DescribeJobCommandOutput) => void
  ): void;
  describeJob(
    args: DescribeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReturnShippingLabelCommand}
   */
  describeReturnShippingLabel(
    args: DescribeReturnShippingLabelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReturnShippingLabelCommandOutput>;
  describeReturnShippingLabel(
    args: DescribeReturnShippingLabelCommandInput,
    cb: (err: any, data?: DescribeReturnShippingLabelCommandOutput) => void
  ): void;
  describeReturnShippingLabel(
    args: DescribeReturnShippingLabelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReturnShippingLabelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobManifestCommand}
   */
  getJobManifest(
    args: GetJobManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobManifestCommandOutput>;
  getJobManifest(
    args: GetJobManifestCommandInput,
    cb: (err: any, data?: GetJobManifestCommandOutput) => void
  ): void;
  getJobManifest(
    args: GetJobManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobManifestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobUnlockCodeCommand}
   */
  getJobUnlockCode(
    args: GetJobUnlockCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobUnlockCodeCommandOutput>;
  getJobUnlockCode(
    args: GetJobUnlockCodeCommandInput,
    cb: (err: any, data?: GetJobUnlockCodeCommandOutput) => void
  ): void;
  getJobUnlockCode(
    args: GetJobUnlockCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobUnlockCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSnowballUsageCommand}
   */
  getSnowballUsage(): Promise<GetSnowballUsageCommandOutput>;
  getSnowballUsage(
    args: GetSnowballUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSnowballUsageCommandOutput>;
  getSnowballUsage(
    args: GetSnowballUsageCommandInput,
    cb: (err: any, data?: GetSnowballUsageCommandOutput) => void
  ): void;
  getSnowballUsage(
    args: GetSnowballUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSnowballUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSoftwareUpdatesCommand}
   */
  getSoftwareUpdates(
    args: GetSoftwareUpdatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSoftwareUpdatesCommandOutput>;
  getSoftwareUpdates(
    args: GetSoftwareUpdatesCommandInput,
    cb: (err: any, data?: GetSoftwareUpdatesCommandOutput) => void
  ): void;
  getSoftwareUpdates(
    args: GetSoftwareUpdatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSoftwareUpdatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClusterJobsCommand}
   */
  listClusterJobs(
    args: ListClusterJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClusterJobsCommandOutput>;
  listClusterJobs(
    args: ListClusterJobsCommandInput,
    cb: (err: any, data?: ListClusterJobsCommandOutput) => void
  ): void;
  listClusterJobs(
    args: ListClusterJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClusterJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(): Promise<ListClustersCommandOutput>;
  listClusters(
    args: ListClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClustersCommandOutput>;
  listClusters(
    args: ListClustersCommandInput,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;
  listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCompatibleImagesCommand}
   */
  listCompatibleImages(): Promise<ListCompatibleImagesCommandOutput>;
  listCompatibleImages(
    args: ListCompatibleImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCompatibleImagesCommandOutput>;
  listCompatibleImages(
    args: ListCompatibleImagesCommandInput,
    cb: (err: any, data?: ListCompatibleImagesCommandOutput) => void
  ): void;
  listCompatibleImages(
    args: ListCompatibleImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCompatibleImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLongTermPricingCommand}
   */
  listLongTermPricing(): Promise<ListLongTermPricingCommandOutput>;
  listLongTermPricing(
    args: ListLongTermPricingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLongTermPricingCommandOutput>;
  listLongTermPricing(
    args: ListLongTermPricingCommandInput,
    cb: (err: any, data?: ListLongTermPricingCommandOutput) => void
  ): void;
  listLongTermPricing(
    args: ListLongTermPricingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLongTermPricingCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPickupLocationsCommand}
   */
  listPickupLocations(): Promise<ListPickupLocationsCommandOutput>;
  listPickupLocations(
    args: ListPickupLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPickupLocationsCommandOutput>;
  listPickupLocations(
    args: ListPickupLocationsCommandInput,
    cb: (err: any, data?: ListPickupLocationsCommandOutput) => void
  ): void;
  listPickupLocations(
    args: ListPickupLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPickupLocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceVersionsCommand}
   */
  listServiceVersions(
    args: ListServiceVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceVersionsCommandOutput>;
  listServiceVersions(
    args: ListServiceVersionsCommandInput,
    cb: (err: any, data?: ListServiceVersionsCommandOutput) => void
  ): void;
  listServiceVersions(
    args: ListServiceVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterCommand}
   */
  updateCluster(
    args: UpdateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterCommandOutput>;
  updateCluster(
    args: UpdateClusterCommandInput,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;
  updateCluster(
    args: UpdateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJobCommand}
   */
  updateJob(
    args: UpdateJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobCommandOutput>;
  updateJob(
    args: UpdateJobCommandInput,
    cb: (err: any, data?: UpdateJobCommandOutput) => void
  ): void;
  updateJob(
    args: UpdateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJobShipmentStateCommand}
   */
  updateJobShipmentState(
    args: UpdateJobShipmentStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobShipmentStateCommandOutput>;
  updateJobShipmentState(
    args: UpdateJobShipmentStateCommandInput,
    cb: (err: any, data?: UpdateJobShipmentStateCommandOutput) => void
  ): void;
  updateJobShipmentState(
    args: UpdateJobShipmentStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobShipmentStateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLongTermPricingCommand}
   */
  updateLongTermPricing(
    args: UpdateLongTermPricingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLongTermPricingCommandOutput>;
  updateLongTermPricing(
    args: UpdateLongTermPricingCommandInput,
    cb: (err: any, data?: UpdateLongTermPricingCommandOutput) => void
  ): void;
  updateLongTermPricing(
    args: UpdateLongTermPricingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLongTermPricingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAddressesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAddressesCommandOutput}.
   */
  paginateDescribeAddresses(
    args?: DescribeAddressesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAddressesCommandOutput>;

  /**
   * @see {@link ListClusterJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListClusterJobsCommandOutput}.
   */
  paginateListClusterJobs(
    args: ListClusterJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListClusterJobsCommandOutput>;

  /**
   * @see {@link ListClustersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListClustersCommandOutput}.
   */
  paginateListClusters(
    args?: ListClustersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListClustersCommandOutput>;

  /**
   * @see {@link ListCompatibleImagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCompatibleImagesCommandOutput}.
   */
  paginateListCompatibleImages(
    args?: ListCompatibleImagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCompatibleImagesCommandOutput>;

  /**
   * @see {@link ListJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListJobsCommandOutput}.
   */
  paginateListJobs(
    args?: ListJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListJobsCommandOutput>;

  /**
   * @see {@link ListLongTermPricingCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLongTermPricingCommandOutput}.
   */
  paginateListLongTermPricing(
    args?: ListLongTermPricingCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLongTermPricingCommandOutput>;

  /**
   * @see {@link ListPickupLocationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPickupLocationsCommandOutput}.
   */
  paginateListPickupLocations(
    args?: ListPickupLocationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPickupLocationsCommandOutput>;
}

/**
 * <p>The Amazon Web Services Snow Family provides a petabyte-scale data transport solution that uses
 *       secure devices to transfer large amounts of data between your on-premises data centers and
 *       Amazon Simple Storage Service (Amazon S3). The Snow Family commands described here provide access to the same
 *       functionality that is available in the Amazon Web Services Snow Family Management Console, which enables you to create
 *       and manage jobs for a Snow Family device. To transfer data locally with a Snow Family device,
 *       you'll need to use the Snowball Edge client or the Amazon S3 API Interface for Snowball or OpsHub for Snow Family. For more information, see the <a href="https://docs.aws.amazon.com/AWSImportExport/latest/ug/api-reference.html">User Guide</a>.</p>
 * @public
 */
export class Snowball extends SnowballClient implements Snowball {}
createAggregatedClient(commands, Snowball, { paginators });
