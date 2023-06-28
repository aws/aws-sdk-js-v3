// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CancelClusterCommand,
  CancelClusterCommandInput,
  CancelClusterCommandOutput,
} from "./commands/CancelClusterCommand";
import { CancelJobCommand, CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import {
  CreateAddressCommand,
  CreateAddressCommandInput,
  CreateAddressCommandOutput,
} from "./commands/CreateAddressCommand";
import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import { CreateJobCommand, CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import {
  CreateLongTermPricingCommand,
  CreateLongTermPricingCommandInput,
  CreateLongTermPricingCommandOutput,
} from "./commands/CreateLongTermPricingCommand";
import {
  CreateReturnShippingLabelCommand,
  CreateReturnShippingLabelCommandInput,
  CreateReturnShippingLabelCommandOutput,
} from "./commands/CreateReturnShippingLabelCommand";
import {
  DescribeAddressCommand,
  DescribeAddressCommandInput,
  DescribeAddressCommandOutput,
} from "./commands/DescribeAddressCommand";
import {
  DescribeAddressesCommand,
  DescribeAddressesCommandInput,
  DescribeAddressesCommandOutput,
} from "./commands/DescribeAddressesCommand";
import {
  DescribeClusterCommand,
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput,
} from "./commands/DescribeClusterCommand";
import { DescribeJobCommand, DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import {
  DescribeReturnShippingLabelCommand,
  DescribeReturnShippingLabelCommandInput,
  DescribeReturnShippingLabelCommandOutput,
} from "./commands/DescribeReturnShippingLabelCommand";
import {
  GetJobManifestCommand,
  GetJobManifestCommandInput,
  GetJobManifestCommandOutput,
} from "./commands/GetJobManifestCommand";
import {
  GetJobUnlockCodeCommand,
  GetJobUnlockCodeCommandInput,
  GetJobUnlockCodeCommandOutput,
} from "./commands/GetJobUnlockCodeCommand";
import {
  GetSnowballUsageCommand,
  GetSnowballUsageCommandInput,
  GetSnowballUsageCommandOutput,
} from "./commands/GetSnowballUsageCommand";
import {
  GetSoftwareUpdatesCommand,
  GetSoftwareUpdatesCommandInput,
  GetSoftwareUpdatesCommandOutput,
} from "./commands/GetSoftwareUpdatesCommand";
import {
  ListClusterJobsCommand,
  ListClusterJobsCommandInput,
  ListClusterJobsCommandOutput,
} from "./commands/ListClusterJobsCommand";
import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "./commands/ListClustersCommand";
import {
  ListCompatibleImagesCommand,
  ListCompatibleImagesCommandInput,
  ListCompatibleImagesCommandOutput,
} from "./commands/ListCompatibleImagesCommand";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListLongTermPricingCommand,
  ListLongTermPricingCommandInput,
  ListLongTermPricingCommandOutput,
} from "./commands/ListLongTermPricingCommand";
import {
  ListServiceVersionsCommand,
  ListServiceVersionsCommandInput,
  ListServiceVersionsCommandOutput,
} from "./commands/ListServiceVersionsCommand";
import {
  UpdateClusterCommand,
  UpdateClusterCommandInput,
  UpdateClusterCommandOutput,
} from "./commands/UpdateClusterCommand";
import { UpdateJobCommand, UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand";
import {
  UpdateJobShipmentStateCommand,
  UpdateJobShipmentStateCommandInput,
  UpdateJobShipmentStateCommandOutput,
} from "./commands/UpdateJobShipmentStateCommand";
import {
  UpdateLongTermPricingCommand,
  UpdateLongTermPricingCommandInput,
  UpdateLongTermPricingCommandOutput,
} from "./commands/UpdateLongTermPricingCommand";
import { SnowballClient, SnowballClientConfig } from "./SnowballClient";

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
  ListServiceVersionsCommand,
  UpdateClusterCommand,
  UpdateJobCommand,
  UpdateJobShipmentStateCommand,
  UpdateLongTermPricingCommand,
};

export interface Snowball {
  /**
   * @see {@link CancelClusterCommand}
   */
  cancelCluster(args: CancelClusterCommandInput, options?: __HttpHandlerOptions): Promise<CancelClusterCommandOutput>;
  cancelCluster(args: CancelClusterCommandInput, cb: (err: any, data?: CancelClusterCommandOutput) => void): void;
  cancelCluster(
    args: CancelClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelJobCommand}
   */
  cancelJob(args: CancelJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobCommandOutput>;
  cancelJob(args: CancelJobCommandInput, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
  cancelJob(
    args: CancelJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAddressCommand}
   */
  createAddress(args: CreateAddressCommandInput, options?: __HttpHandlerOptions): Promise<CreateAddressCommandOutput>;
  createAddress(args: CreateAddressCommandInput, cb: (err: any, data?: CreateAddressCommandOutput) => void): void;
  createAddress(
    args: CreateAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(args: CreateClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterCommandOutput>;
  createCluster(args: CreateClusterCommandInput, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobCommand}
   */
  createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
  createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
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
  describeAddress(args: DescribeAddressCommandInput, cb: (err: any, data?: DescribeAddressCommandOutput) => void): void;
  describeAddress(
    args: DescribeAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAddressesCommand}
   */
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
  describeCluster(args: DescribeClusterCommandInput, cb: (err: any, data?: DescribeClusterCommandOutput) => void): void;
  describeCluster(
    args: DescribeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobCommand}
   */
  describeJob(args: DescribeJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobCommandOutput>;
  describeJob(args: DescribeJobCommandInput, cb: (err: any, data?: DescribeJobCommandOutput) => void): void;
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
  getJobManifest(args: GetJobManifestCommandInput, cb: (err: any, data?: GetJobManifestCommandOutput) => void): void;
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
  listClusterJobs(args: ListClusterJobsCommandInput, cb: (err: any, data?: ListClusterJobsCommandOutput) => void): void;
  listClusterJobs(
    args: ListClusterJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClusterJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(args: ListClustersCommandInput, options?: __HttpHandlerOptions): Promise<ListClustersCommandOutput>;
  listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
  listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCompatibleImagesCommand}
   */
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
  listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLongTermPricingCommand}
   */
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
  updateCluster(args: UpdateClusterCommandInput, options?: __HttpHandlerOptions): Promise<UpdateClusterCommandOutput>;
  updateCluster(args: UpdateClusterCommandInput, cb: (err: any, data?: UpdateClusterCommandOutput) => void): void;
  updateCluster(
    args: UpdateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJobCommand}
   */
  updateJob(args: UpdateJobCommandInput, options?: __HttpHandlerOptions): Promise<UpdateJobCommandOutput>;
  updateJob(args: UpdateJobCommandInput, cb: (err: any, data?: UpdateJobCommandOutput) => void): void;
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
}

/**
 * @public
 * <p>The Amazon Web Services Snow Family provides a petabyte-scale data transport solution that uses
 *       secure devices to transfer large amounts of data between your on-premises data centers and
 *       Amazon Simple Storage Service (Amazon S3). The Snow Family commands described here provide access to the same
 *       functionality that is available in the Amazon Web Services Snow Family Management Console, which enables you to create
 *       and manage jobs for a Snow Family device. To transfer data locally with a Snow Family device,
 *       you'll need to use the Snowball Edge client or the Amazon S3 API Interface for Snowball or OpsHub for Snow Family. For more information, see the <a href="https://docs.aws.amazon.com/AWSImportExport/latest/ug/api-reference.html">User Guide</a>.</p>
 */
export class Snowball extends SnowballClient implements Snowball {}
createAggregatedClient(commands, Snowball);
