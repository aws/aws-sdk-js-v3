// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type AddApplicationCloudWatchLoggingOptionCommandInput,
  type AddApplicationCloudWatchLoggingOptionCommandOutput,
  AddApplicationCloudWatchLoggingOptionCommand,
} from "./commands/AddApplicationCloudWatchLoggingOptionCommand";
import {
  type AddApplicationInputCommandInput,
  type AddApplicationInputCommandOutput,
  AddApplicationInputCommand,
} from "./commands/AddApplicationInputCommand";
import {
  type AddApplicationInputProcessingConfigurationCommandInput,
  type AddApplicationInputProcessingConfigurationCommandOutput,
  AddApplicationInputProcessingConfigurationCommand,
} from "./commands/AddApplicationInputProcessingConfigurationCommand";
import {
  type AddApplicationOutputCommandInput,
  type AddApplicationOutputCommandOutput,
  AddApplicationOutputCommand,
} from "./commands/AddApplicationOutputCommand";
import {
  type AddApplicationReferenceDataSourceCommandInput,
  type AddApplicationReferenceDataSourceCommandOutput,
  AddApplicationReferenceDataSourceCommand,
} from "./commands/AddApplicationReferenceDataSourceCommand";
import {
  type CreateApplicationCommandInput,
  type CreateApplicationCommandOutput,
  CreateApplicationCommand,
} from "./commands/CreateApplicationCommand";
import {
  type DeleteApplicationCloudWatchLoggingOptionCommandInput,
  type DeleteApplicationCloudWatchLoggingOptionCommandOutput,
  DeleteApplicationCloudWatchLoggingOptionCommand,
} from "./commands/DeleteApplicationCloudWatchLoggingOptionCommand";
import {
  type DeleteApplicationCommandInput,
  type DeleteApplicationCommandOutput,
  DeleteApplicationCommand,
} from "./commands/DeleteApplicationCommand";
import {
  type DeleteApplicationInputProcessingConfigurationCommandInput,
  type DeleteApplicationInputProcessingConfigurationCommandOutput,
  DeleteApplicationInputProcessingConfigurationCommand,
} from "./commands/DeleteApplicationInputProcessingConfigurationCommand";
import {
  type DeleteApplicationOutputCommandInput,
  type DeleteApplicationOutputCommandOutput,
  DeleteApplicationOutputCommand,
} from "./commands/DeleteApplicationOutputCommand";
import {
  type DeleteApplicationReferenceDataSourceCommandInput,
  type DeleteApplicationReferenceDataSourceCommandOutput,
  DeleteApplicationReferenceDataSourceCommand,
} from "./commands/DeleteApplicationReferenceDataSourceCommand";
import {
  type DescribeApplicationCommandInput,
  type DescribeApplicationCommandOutput,
  DescribeApplicationCommand,
} from "./commands/DescribeApplicationCommand";
import {
  type DiscoverInputSchemaCommandInput,
  type DiscoverInputSchemaCommandOutput,
  DiscoverInputSchemaCommand,
} from "./commands/DiscoverInputSchemaCommand";
import {
  type ListApplicationsCommandInput,
  type ListApplicationsCommandOutput,
  ListApplicationsCommand,
} from "./commands/ListApplicationsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type StartApplicationCommandInput,
  type StartApplicationCommandOutput,
  StartApplicationCommand,
} from "./commands/StartApplicationCommand";
import {
  type StopApplicationCommandInput,
  type StopApplicationCommandOutput,
  StopApplicationCommand,
} from "./commands/StopApplicationCommand";
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
  type UpdateApplicationCommandInput,
  type UpdateApplicationCommandOutput,
  UpdateApplicationCommand,
} from "./commands/UpdateApplicationCommand";
import { KinesisAnalyticsClient } from "./KinesisAnalyticsClient";

const commands = {
  AddApplicationCloudWatchLoggingOptionCommand,
  AddApplicationInputCommand,
  AddApplicationInputProcessingConfigurationCommand,
  AddApplicationOutputCommand,
  AddApplicationReferenceDataSourceCommand,
  CreateApplicationCommand,
  DeleteApplicationCommand,
  DeleteApplicationCloudWatchLoggingOptionCommand,
  DeleteApplicationInputProcessingConfigurationCommand,
  DeleteApplicationOutputCommand,
  DeleteApplicationReferenceDataSourceCommand,
  DescribeApplicationCommand,
  DiscoverInputSchemaCommand,
  ListApplicationsCommand,
  ListTagsForResourceCommand,
  StartApplicationCommand,
  StopApplicationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
};

export interface KinesisAnalytics {
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
   * @see {@link DiscoverInputSchemaCommand}
   */
  discoverInputSchema(): Promise<DiscoverInputSchemaCommandOutput>;
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
  listApplications(): Promise<ListApplicationsCommandOutput>;
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
  stopApplication(
    args: StopApplicationCommandInput,
    cb: (err: any, data?: StopApplicationCommandOutput) => void
  ): void;
  stopApplication(
    args: StopApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopApplicationCommandOutput) => void
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
}

/**
 * <fullname>Amazon Kinesis Analytics</fullname>
 *         <p>
 *             <b>Overview</b>
 *          </p>
 *         <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>This is the <i>Amazon Kinesis Analytics v1 API Reference</i>.
 *             The Amazon Kinesis Analytics Developer Guide provides additional information.
 *             </p>
 * @public
 */
export class KinesisAnalytics extends KinesisAnalyticsClient implements KinesisAnalytics {}
createAggregatedClient(commands, KinesisAnalytics);
