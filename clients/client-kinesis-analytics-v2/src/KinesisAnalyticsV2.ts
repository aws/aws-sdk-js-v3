// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddApplicationCloudWatchLoggingOptionCommand,
  AddApplicationCloudWatchLoggingOptionCommandInput,
  AddApplicationCloudWatchLoggingOptionCommandOutput,
} from "./commands/AddApplicationCloudWatchLoggingOptionCommand";
import {
  AddApplicationInputCommand,
  AddApplicationInputCommandInput,
  AddApplicationInputCommandOutput,
} from "./commands/AddApplicationInputCommand";
import {
  AddApplicationInputProcessingConfigurationCommand,
  AddApplicationInputProcessingConfigurationCommandInput,
  AddApplicationInputProcessingConfigurationCommandOutput,
} from "./commands/AddApplicationInputProcessingConfigurationCommand";
import {
  AddApplicationOutputCommand,
  AddApplicationOutputCommandInput,
  AddApplicationOutputCommandOutput,
} from "./commands/AddApplicationOutputCommand";
import {
  AddApplicationReferenceDataSourceCommand,
  AddApplicationReferenceDataSourceCommandInput,
  AddApplicationReferenceDataSourceCommandOutput,
} from "./commands/AddApplicationReferenceDataSourceCommand";
import {
  AddApplicationVpcConfigurationCommand,
  AddApplicationVpcConfigurationCommandInput,
  AddApplicationVpcConfigurationCommandOutput,
} from "./commands/AddApplicationVpcConfigurationCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateApplicationPresignedUrlCommand,
  CreateApplicationPresignedUrlCommandInput,
  CreateApplicationPresignedUrlCommandOutput,
} from "./commands/CreateApplicationPresignedUrlCommand";
import {
  CreateApplicationSnapshotCommand,
  CreateApplicationSnapshotCommandInput,
  CreateApplicationSnapshotCommandOutput,
} from "./commands/CreateApplicationSnapshotCommand";
import {
  DeleteApplicationCloudWatchLoggingOptionCommand,
  DeleteApplicationCloudWatchLoggingOptionCommandInput,
  DeleteApplicationCloudWatchLoggingOptionCommandOutput,
} from "./commands/DeleteApplicationCloudWatchLoggingOptionCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteApplicationInputProcessingConfigurationCommand,
  DeleteApplicationInputProcessingConfigurationCommandInput,
  DeleteApplicationInputProcessingConfigurationCommandOutput,
} from "./commands/DeleteApplicationInputProcessingConfigurationCommand";
import {
  DeleteApplicationOutputCommand,
  DeleteApplicationOutputCommandInput,
  DeleteApplicationOutputCommandOutput,
} from "./commands/DeleteApplicationOutputCommand";
import {
  DeleteApplicationReferenceDataSourceCommand,
  DeleteApplicationReferenceDataSourceCommandInput,
  DeleteApplicationReferenceDataSourceCommandOutput,
} from "./commands/DeleteApplicationReferenceDataSourceCommand";
import {
  DeleteApplicationSnapshotCommand,
  DeleteApplicationSnapshotCommandInput,
  DeleteApplicationSnapshotCommandOutput,
} from "./commands/DeleteApplicationSnapshotCommand";
import {
  DeleteApplicationVpcConfigurationCommand,
  DeleteApplicationVpcConfigurationCommandInput,
  DeleteApplicationVpcConfigurationCommandOutput,
} from "./commands/DeleteApplicationVpcConfigurationCommand";
import {
  DescribeApplicationCommand,
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
} from "./commands/DescribeApplicationCommand";
import {
  DescribeApplicationSnapshotCommand,
  DescribeApplicationSnapshotCommandInput,
  DescribeApplicationSnapshotCommandOutput,
} from "./commands/DescribeApplicationSnapshotCommand";
import {
  DescribeApplicationVersionCommand,
  DescribeApplicationVersionCommandInput,
  DescribeApplicationVersionCommandOutput,
} from "./commands/DescribeApplicationVersionCommand";
import {
  DiscoverInputSchemaCommand,
  DiscoverInputSchemaCommandInput,
  DiscoverInputSchemaCommandOutput,
} from "./commands/DiscoverInputSchemaCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListApplicationSnapshotsCommand,
  ListApplicationSnapshotsCommandInput,
  ListApplicationSnapshotsCommandOutput,
} from "./commands/ListApplicationSnapshotsCommand";
import {
  ListApplicationVersionsCommand,
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput,
} from "./commands/ListApplicationVersionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RollbackApplicationCommand,
  RollbackApplicationCommandInput,
  RollbackApplicationCommandOutput,
} from "./commands/RollbackApplicationCommand";
import {
  StartApplicationCommand,
  StartApplicationCommandInput,
  StartApplicationCommandOutput,
} from "./commands/StartApplicationCommand";
import {
  StopApplicationCommand,
  StopApplicationCommandInput,
  StopApplicationCommandOutput,
} from "./commands/StopApplicationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateApplicationMaintenanceConfigurationCommand,
  UpdateApplicationMaintenanceConfigurationCommandInput,
  UpdateApplicationMaintenanceConfigurationCommandOutput,
} from "./commands/UpdateApplicationMaintenanceConfigurationCommand";
import { KinesisAnalyticsV2Client, KinesisAnalyticsV2ClientConfig } from "./KinesisAnalyticsV2Client";

const commands = {
  AddApplicationCloudWatchLoggingOptionCommand,
  AddApplicationInputCommand,
  AddApplicationInputProcessingConfigurationCommand,
  AddApplicationOutputCommand,
  AddApplicationReferenceDataSourceCommand,
  AddApplicationVpcConfigurationCommand,
  CreateApplicationCommand,
  CreateApplicationPresignedUrlCommand,
  CreateApplicationSnapshotCommand,
  DeleteApplicationCommand,
  DeleteApplicationCloudWatchLoggingOptionCommand,
  DeleteApplicationInputProcessingConfigurationCommand,
  DeleteApplicationOutputCommand,
  DeleteApplicationReferenceDataSourceCommand,
  DeleteApplicationSnapshotCommand,
  DeleteApplicationVpcConfigurationCommand,
  DescribeApplicationCommand,
  DescribeApplicationSnapshotCommand,
  DescribeApplicationVersionCommand,
  DiscoverInputSchemaCommand,
  ListApplicationsCommand,
  ListApplicationSnapshotsCommand,
  ListApplicationVersionsCommand,
  ListTagsForResourceCommand,
  RollbackApplicationCommand,
  StartApplicationCommand,
  StopApplicationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateApplicationMaintenanceConfigurationCommand,
};

export interface KinesisAnalyticsV2 {
  /**
   * @see {@link AddApplicationCloudWatchLoggingOptionCommand}
   */
  addApplicationCloudWatchLoggingOption(
    args: AddApplicationCloudWatchLoggingOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddApplicationCloudWatchLoggingOptionCommandOutput>;
  addApplicationCloudWatchLoggingOption(
    args: AddApplicationCloudWatchLoggingOptionCommandInput,
    cb: (err: any, data?: AddApplicationCloudWatchLoggingOptionCommandOutput) => void
  ): void;
  addApplicationCloudWatchLoggingOption(
    args: AddApplicationCloudWatchLoggingOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddApplicationCloudWatchLoggingOptionCommandOutput) => void
  ): void;

  /**
   * @see {@link AddApplicationInputCommand}
   */
  addApplicationInput(
    args: AddApplicationInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddApplicationInputCommandOutput>;
  addApplicationInput(
    args: AddApplicationInputCommandInput,
    cb: (err: any, data?: AddApplicationInputCommandOutput) => void
  ): void;
  addApplicationInput(
    args: AddApplicationInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddApplicationInputCommandOutput) => void
  ): void;

  /**
   * @see {@link AddApplicationInputProcessingConfigurationCommand}
   */
  addApplicationInputProcessingConfiguration(
    args: AddApplicationInputProcessingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddApplicationInputProcessingConfigurationCommandOutput>;
  addApplicationInputProcessingConfiguration(
    args: AddApplicationInputProcessingConfigurationCommandInput,
    cb: (err: any, data?: AddApplicationInputProcessingConfigurationCommandOutput) => void
  ): void;
  addApplicationInputProcessingConfiguration(
    args: AddApplicationInputProcessingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddApplicationInputProcessingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link AddApplicationOutputCommand}
   */
  addApplicationOutput(
    args: AddApplicationOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddApplicationOutputCommandOutput>;
  addApplicationOutput(
    args: AddApplicationOutputCommandInput,
    cb: (err: any, data?: AddApplicationOutputCommandOutput) => void
  ): void;
  addApplicationOutput(
    args: AddApplicationOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddApplicationOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link AddApplicationReferenceDataSourceCommand}
   */
  addApplicationReferenceDataSource(
    args: AddApplicationReferenceDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddApplicationReferenceDataSourceCommandOutput>;
  addApplicationReferenceDataSource(
    args: AddApplicationReferenceDataSourceCommandInput,
    cb: (err: any, data?: AddApplicationReferenceDataSourceCommandOutput) => void
  ): void;
  addApplicationReferenceDataSource(
    args: AddApplicationReferenceDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddApplicationReferenceDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link AddApplicationVpcConfigurationCommand}
   */
  addApplicationVpcConfiguration(
    args: AddApplicationVpcConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddApplicationVpcConfigurationCommandOutput>;
  addApplicationVpcConfiguration(
    args: AddApplicationVpcConfigurationCommandInput,
    cb: (err: any, data?: AddApplicationVpcConfigurationCommandOutput) => void
  ): void;
  addApplicationVpcConfiguration(
    args: AddApplicationVpcConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddApplicationVpcConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationPresignedUrlCommand}
   */
  createApplicationPresignedUrl(
    args: CreateApplicationPresignedUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationPresignedUrlCommandOutput>;
  createApplicationPresignedUrl(
    args: CreateApplicationPresignedUrlCommandInput,
    cb: (err: any, data?: CreateApplicationPresignedUrlCommandOutput) => void
  ): void;
  createApplicationPresignedUrl(
    args: CreateApplicationPresignedUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationPresignedUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationSnapshotCommand}
   */
  createApplicationSnapshot(
    args: CreateApplicationSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationSnapshotCommandOutput>;
  createApplicationSnapshot(
    args: CreateApplicationSnapshotCommandInput,
    cb: (err: any, data?: CreateApplicationSnapshotCommandOutput) => void
  ): void;
  createApplicationSnapshot(
    args: CreateApplicationSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCloudWatchLoggingOptionCommand}
   */
  deleteApplicationCloudWatchLoggingOption(
    args: DeleteApplicationCloudWatchLoggingOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCloudWatchLoggingOptionCommandOutput>;
  deleteApplicationCloudWatchLoggingOption(
    args: DeleteApplicationCloudWatchLoggingOptionCommandInput,
    cb: (err: any, data?: DeleteApplicationCloudWatchLoggingOptionCommandOutput) => void
  ): void;
  deleteApplicationCloudWatchLoggingOption(
    args: DeleteApplicationCloudWatchLoggingOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCloudWatchLoggingOptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationInputProcessingConfigurationCommand}
   */
  deleteApplicationInputProcessingConfiguration(
    args: DeleteApplicationInputProcessingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationInputProcessingConfigurationCommandOutput>;
  deleteApplicationInputProcessingConfiguration(
    args: DeleteApplicationInputProcessingConfigurationCommandInput,
    cb: (err: any, data?: DeleteApplicationInputProcessingConfigurationCommandOutput) => void
  ): void;
  deleteApplicationInputProcessingConfiguration(
    args: DeleteApplicationInputProcessingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationInputProcessingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationOutputCommand}
   */
  deleteApplicationOutput(
    args: DeleteApplicationOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationOutputCommandOutput>;
  deleteApplicationOutput(
    args: DeleteApplicationOutputCommandInput,
    cb: (err: any, data?: DeleteApplicationOutputCommandOutput) => void
  ): void;
  deleteApplicationOutput(
    args: DeleteApplicationOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationReferenceDataSourceCommand}
   */
  deleteApplicationReferenceDataSource(
    args: DeleteApplicationReferenceDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationReferenceDataSourceCommandOutput>;
  deleteApplicationReferenceDataSource(
    args: DeleteApplicationReferenceDataSourceCommandInput,
    cb: (err: any, data?: DeleteApplicationReferenceDataSourceCommandOutput) => void
  ): void;
  deleteApplicationReferenceDataSource(
    args: DeleteApplicationReferenceDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationReferenceDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationSnapshotCommand}
   */
  deleteApplicationSnapshot(
    args: DeleteApplicationSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationSnapshotCommandOutput>;
  deleteApplicationSnapshot(
    args: DeleteApplicationSnapshotCommandInput,
    cb: (err: any, data?: DeleteApplicationSnapshotCommandOutput) => void
  ): void;
  deleteApplicationSnapshot(
    args: DeleteApplicationSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationVpcConfigurationCommand}
   */
  deleteApplicationVpcConfiguration(
    args: DeleteApplicationVpcConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationVpcConfigurationCommandOutput>;
  deleteApplicationVpcConfiguration(
    args: DeleteApplicationVpcConfigurationCommandInput,
    cb: (err: any, data?: DeleteApplicationVpcConfigurationCommandOutput) => void
  ): void;
  deleteApplicationVpcConfiguration(
    args: DeleteApplicationVpcConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationVpcConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationCommand}
   */
  describeApplication(
    args: DescribeApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationCommandOutput>;
  describeApplication(
    args: DescribeApplicationCommandInput,
    cb: (err: any, data?: DescribeApplicationCommandOutput) => void
  ): void;
  describeApplication(
    args: DescribeApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationSnapshotCommand}
   */
  describeApplicationSnapshot(
    args: DescribeApplicationSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationSnapshotCommandOutput>;
  describeApplicationSnapshot(
    args: DescribeApplicationSnapshotCommandInput,
    cb: (err: any, data?: DescribeApplicationSnapshotCommandOutput) => void
  ): void;
  describeApplicationSnapshot(
    args: DescribeApplicationSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationVersionCommand}
   */
  describeApplicationVersion(
    args: DescribeApplicationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationVersionCommandOutput>;
  describeApplicationVersion(
    args: DescribeApplicationVersionCommandInput,
    cb: (err: any, data?: DescribeApplicationVersionCommandOutput) => void
  ): void;
  describeApplicationVersion(
    args: DescribeApplicationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DiscoverInputSchemaCommand}
   */
  discoverInputSchema(
    args: DiscoverInputSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DiscoverInputSchemaCommandOutput>;
  discoverInputSchema(
    args: DiscoverInputSchemaCommandInput,
    cb: (err: any, data?: DiscoverInputSchemaCommandOutput) => void
  ): void;
  discoverInputSchema(
    args: DiscoverInputSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DiscoverInputSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationSnapshotsCommand}
   */
  listApplicationSnapshots(
    args: ListApplicationSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationSnapshotsCommandOutput>;
  listApplicationSnapshots(
    args: ListApplicationSnapshotsCommandInput,
    cb: (err: any, data?: ListApplicationSnapshotsCommandOutput) => void
  ): void;
  listApplicationSnapshots(
    args: ListApplicationSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationVersionsCommand}
   */
  listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationVersionsCommandOutput>;
  listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    cb: (err: any, data?: ListApplicationVersionsCommandOutput) => void
  ): void;
  listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationVersionsCommandOutput) => void
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
   * @see {@link RollbackApplicationCommand}
   */
  rollbackApplication(
    args: RollbackApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RollbackApplicationCommandOutput>;
  rollbackApplication(
    args: RollbackApplicationCommandInput,
    cb: (err: any, data?: RollbackApplicationCommandOutput) => void
  ): void;
  rollbackApplication(
    args: RollbackApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RollbackApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartApplicationCommand}
   */
  startApplication(
    args: StartApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartApplicationCommandOutput>;
  startApplication(
    args: StartApplicationCommandInput,
    cb: (err: any, data?: StartApplicationCommandOutput) => void
  ): void;
  startApplication(
    args: StartApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopApplicationCommand}
   */
  stopApplication(
    args: StopApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopApplicationCommandOutput>;
  stopApplication(args: StopApplicationCommandInput, cb: (err: any, data?: StopApplicationCommandOutput) => void): void;
  stopApplication(
    args: StopApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopApplicationCommandOutput) => void
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
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationMaintenanceConfigurationCommand}
   */
  updateApplicationMaintenanceConfiguration(
    args: UpdateApplicationMaintenanceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationMaintenanceConfigurationCommandOutput>;
  updateApplicationMaintenanceConfiguration(
    args: UpdateApplicationMaintenanceConfigurationCommandInput,
    cb: (err: any, data?: UpdateApplicationMaintenanceConfigurationCommandOutput) => void
  ): void;
  updateApplicationMaintenanceConfiguration(
    args: UpdateApplicationMaintenanceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationMaintenanceConfigurationCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Kinesis Data Analytics is a fully managed service that you can use to process and analyze streaming data using Java, SQL, or Scala. The service
 *       enables you to quickly author and run Java, SQL, or Scala code against streaming sources to perform time
 *       series analytics, feed real-time dashboards, and create real-time metrics.</p>
 */
export class KinesisAnalyticsV2 extends KinesisAnalyticsV2Client implements KinesisAnalyticsV2 {}
createAggregatedClient(commands, KinesisAnalyticsV2);
