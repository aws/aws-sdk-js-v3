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
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
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
  DescribeApplicationCommand,
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
} from "./commands/DescribeApplicationCommand";
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
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
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
import { KinesisAnalyticsClient, KinesisAnalyticsClientConfig } from "./KinesisAnalyticsClient";

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
}

/**
 * @public
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
 */
export class KinesisAnalytics extends KinesisAnalyticsClient implements KinesisAnalytics {}
createAggregatedClient(commands, KinesisAnalytics);
