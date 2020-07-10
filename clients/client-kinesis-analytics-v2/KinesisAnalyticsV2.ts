import { KinesisAnalyticsV2Client } from "./KinesisAnalyticsV2Client";
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
  DiscoverInputSchemaCommand,
  DiscoverInputSchemaCommandInput,
  DiscoverInputSchemaCommandOutput,
} from "./commands/DiscoverInputSchemaCommand";
import {
  ListApplicationSnapshotsCommand,
  ListApplicationSnapshotsCommandInput,
  ListApplicationSnapshotsCommandOutput,
} from "./commands/ListApplicationSnapshotsCommand";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon Kinesis Data Analytics is a fully managed service that you can use to process and analyze streaming data using SQL or Java. The service
 *       enables you to quickly author and run SQL or Java code against streaming sources to perform time
 *       series analytics, feed real-time dashboards, and create real-time metrics.</p>
 */
export class KinesisAnalyticsV2 extends KinesisAnalyticsV2Client {
  /**
   * <p>Adds an Amazon CloudWatch log stream to monitor application configuration errors.</p>
   */
  public addApplicationCloudWatchLoggingOption(
    args: AddApplicationCloudWatchLoggingOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddApplicationCloudWatchLoggingOptionCommandOutput>;
  public addApplicationCloudWatchLoggingOption(
    args: AddApplicationCloudWatchLoggingOptionCommandInput,
    cb: (err: any, data?: AddApplicationCloudWatchLoggingOptionCommandOutput) => void
  ): void;
  public addApplicationCloudWatchLoggingOption(
    args: AddApplicationCloudWatchLoggingOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddApplicationCloudWatchLoggingOptionCommandOutput) => void
  ): void;
  public addApplicationCloudWatchLoggingOption(
    args: AddApplicationCloudWatchLoggingOptionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AddApplicationCloudWatchLoggingOptionCommandOutput) => void),
    cb?: (err: any, data?: AddApplicationCloudWatchLoggingOptionCommandOutput) => void
  ): Promise<AddApplicationCloudWatchLoggingOptionCommandOutput> | void {
    const command = new AddApplicationCloudWatchLoggingOptionCommand(args);
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
   * <p>
   *       Adds a streaming source to your SQL-based Amazon Kinesis Data Analytics application.
   *     </p>
   *          <p>You can add a streaming source when you create an application, or you can use this
   *       operation to add a streaming source after you create an application. For more information, see
   *         <a>CreateApplication</a>.</p>
   *          <p>Any configuration update, including adding a streaming source using this operation,
   *       results in a new version of the application. You can use the <a>DescribeApplication</a> operation
   *       to find the current application version.
   *     </p>
   */
  public addApplicationInput(
    args: AddApplicationInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddApplicationInputCommandOutput>;
  public addApplicationInput(
    args: AddApplicationInputCommandInput,
    cb: (err: any, data?: AddApplicationInputCommandOutput) => void
  ): void;
  public addApplicationInput(
    args: AddApplicationInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddApplicationInputCommandOutput) => void
  ): void;
  public addApplicationInput(
    args: AddApplicationInputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddApplicationInputCommandOutput) => void),
    cb?: (err: any, data?: AddApplicationInputCommandOutput) => void
  ): Promise<AddApplicationInputCommandOutput> | void {
    const command = new AddApplicationInputCommand(args);
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
   * <p>Adds an <a>InputProcessingConfiguration</a> to an SQL-based Kinesis Data
   *       Analytics application. An input processor pre-processes records on the input stream before the
   *       application's SQL code executes. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>.</p>
   */
  public addApplicationInputProcessingConfiguration(
    args: AddApplicationInputProcessingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddApplicationInputProcessingConfigurationCommandOutput>;
  public addApplicationInputProcessingConfiguration(
    args: AddApplicationInputProcessingConfigurationCommandInput,
    cb: (err: any, data?: AddApplicationInputProcessingConfigurationCommandOutput) => void
  ): void;
  public addApplicationInputProcessingConfiguration(
    args: AddApplicationInputProcessingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddApplicationInputProcessingConfigurationCommandOutput) => void
  ): void;
  public addApplicationInputProcessingConfiguration(
    args: AddApplicationInputProcessingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AddApplicationInputProcessingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: AddApplicationInputProcessingConfigurationCommandOutput) => void
  ): Promise<AddApplicationInputProcessingConfigurationCommandOutput> | void {
    const command = new AddApplicationInputProcessingConfigurationCommand(args);
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
   * <p>Adds an external destination to your SQL-based Amazon Kinesis Data Analytics application.</p>
   *          <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within
   *       your application to an external destination (such as an Kinesis data stream, a Kinesis Data
   *       Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to
   *       your application using this operation. You can configure one or more outputs for your
   *       application. Each output configuration maps an in-application stream and an external
   *       destination.</p>
   *          <p> You can use one of the output configurations to deliver data from your
   *       in-application error stream to an external destination so that you can analyze the
   *       errors.  </p>
   *          <p> Any configuration update, including adding a streaming source using this
   *       operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application
   *       version.</p>
   */
  public addApplicationOutput(
    args: AddApplicationOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddApplicationOutputCommandOutput>;
  public addApplicationOutput(
    args: AddApplicationOutputCommandInput,
    cb: (err: any, data?: AddApplicationOutputCommandOutput) => void
  ): void;
  public addApplicationOutput(
    args: AddApplicationOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddApplicationOutputCommandOutput) => void
  ): void;
  public addApplicationOutput(
    args: AddApplicationOutputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddApplicationOutputCommandOutput) => void),
    cb?: (err: any, data?: AddApplicationOutputCommandOutput) => void
  ): Promise<AddApplicationOutputCommandOutput> | void {
    const command = new AddApplicationOutputCommand(args);
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
   * <p>Adds a reference data source to an existing SQL-based Amazon Kinesis Data Analytics application.</p>
   *          <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an
   *       in-application table within your application. In the request, you provide the source (S3
   *       bucket name and object key name), name of the in-application table to create, and the
   *       necessary mapping information that describes how data in an Amazon S3 object maps to columns
   *       in the resulting in-application table.</p>
   */
  public addApplicationReferenceDataSource(
    args: AddApplicationReferenceDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddApplicationReferenceDataSourceCommandOutput>;
  public addApplicationReferenceDataSource(
    args: AddApplicationReferenceDataSourceCommandInput,
    cb: (err: any, data?: AddApplicationReferenceDataSourceCommandOutput) => void
  ): void;
  public addApplicationReferenceDataSource(
    args: AddApplicationReferenceDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddApplicationReferenceDataSourceCommandOutput) => void
  ): void;
  public addApplicationReferenceDataSource(
    args: AddApplicationReferenceDataSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddApplicationReferenceDataSourceCommandOutput) => void),
    cb?: (err: any, data?: AddApplicationReferenceDataSourceCommandOutput) => void
  ): Promise<AddApplicationReferenceDataSourceCommandOutput> | void {
    const command = new AddApplicationReferenceDataSourceCommand(args);
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
   * <p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store and access resources securely.</p>
   *          <p>Note the following about VPC configurations for Kinesis Data Analytics applications:</p>
   *          <ul>
   *             <li>
   *                <p>VPC configurations are not supported for SQL applications.</p>
   *             </li>
   *             <li>
   *                <p>When a VPC is added to a Kinesis Data Analytics application, the application can no longer be accessed from the Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p>
   *             </li>
   *          </ul>
   */
  public addApplicationVpcConfiguration(
    args: AddApplicationVpcConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddApplicationVpcConfigurationCommandOutput>;
  public addApplicationVpcConfiguration(
    args: AddApplicationVpcConfigurationCommandInput,
    cb: (err: any, data?: AddApplicationVpcConfigurationCommandOutput) => void
  ): void;
  public addApplicationVpcConfiguration(
    args: AddApplicationVpcConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddApplicationVpcConfigurationCommandOutput) => void
  ): void;
  public addApplicationVpcConfiguration(
    args: AddApplicationVpcConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddApplicationVpcConfigurationCommandOutput) => void),
    cb?: (err: any, data?: AddApplicationVpcConfigurationCommandOutput) => void
  ): Promise<AddApplicationVpcConfigurationCommandOutput> | void {
    const command = new AddApplicationVpcConfigurationCommand(args);
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
   * <p>Creates an Amazon Kinesis Data Analytics application. For information about creating a
   *       Kinesis Data Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html">Creating an
   *         Application</a>.
   *       </p>
   */
  public createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  public createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApplicationCommandOutput) => void),
    cb?: (err: any, data?: CreateApplicationCommandOutput) => void
  ): Promise<CreateApplicationCommandOutput> | void {
    const command = new CreateApplicationCommand(args);
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
   * <p>Creates a snapshot of the application's state data.</p>
   */
  public createApplicationSnapshot(
    args: CreateApplicationSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationSnapshotCommandOutput>;
  public createApplicationSnapshot(
    args: CreateApplicationSnapshotCommandInput,
    cb: (err: any, data?: CreateApplicationSnapshotCommandOutput) => void
  ): void;
  public createApplicationSnapshot(
    args: CreateApplicationSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationSnapshotCommandOutput) => void
  ): void;
  public createApplicationSnapshot(
    args: CreateApplicationSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApplicationSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CreateApplicationSnapshotCommandOutput) => void
  ): Promise<CreateApplicationSnapshotCommandOutput> | void {
    const command = new CreateApplicationSnapshotCommand(args);
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
   * <p>Deletes the specified application. Kinesis Data Analytics halts application execution and deletes the application.</p>
   */
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApplicationCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): Promise<DeleteApplicationCommandOutput> | void {
    const command = new DeleteApplicationCommand(args);
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
   * <p>Deletes an Amazon CloudWatch log stream from an Amazon Kinesis Data Analytics application. </p>
   */
  public deleteApplicationCloudWatchLoggingOption(
    args: DeleteApplicationCloudWatchLoggingOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCloudWatchLoggingOptionCommandOutput>;
  public deleteApplicationCloudWatchLoggingOption(
    args: DeleteApplicationCloudWatchLoggingOptionCommandInput,
    cb: (err: any, data?: DeleteApplicationCloudWatchLoggingOptionCommandOutput) => void
  ): void;
  public deleteApplicationCloudWatchLoggingOption(
    args: DeleteApplicationCloudWatchLoggingOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCloudWatchLoggingOptionCommandOutput) => void
  ): void;
  public deleteApplicationCloudWatchLoggingOption(
    args: DeleteApplicationCloudWatchLoggingOptionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteApplicationCloudWatchLoggingOptionCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationCloudWatchLoggingOptionCommandOutput) => void
  ): Promise<DeleteApplicationCloudWatchLoggingOptionCommandOutput> | void {
    const command = new DeleteApplicationCloudWatchLoggingOptionCommand(args);
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
   * <p>Deletes an <a>InputProcessingConfiguration</a> from an input.</p>
   */
  public deleteApplicationInputProcessingConfiguration(
    args: DeleteApplicationInputProcessingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationInputProcessingConfigurationCommandOutput>;
  public deleteApplicationInputProcessingConfiguration(
    args: DeleteApplicationInputProcessingConfigurationCommandInput,
    cb: (err: any, data?: DeleteApplicationInputProcessingConfigurationCommandOutput) => void
  ): void;
  public deleteApplicationInputProcessingConfiguration(
    args: DeleteApplicationInputProcessingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationInputProcessingConfigurationCommandOutput) => void
  ): void;
  public deleteApplicationInputProcessingConfiguration(
    args: DeleteApplicationInputProcessingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteApplicationInputProcessingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationInputProcessingConfigurationCommandOutput) => void
  ): Promise<DeleteApplicationInputProcessingConfigurationCommandOutput> | void {
    const command = new DeleteApplicationInputProcessingConfigurationCommand(args);
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
   * <p>Deletes the output destination configuration from your SQL-based Amazon Kinesis Data
   *       Analytics application's configuration. Kinesis Data Analytics will no longer write data from
   *       the corresponding in-application stream to the external output destination.</p>
   */
  public deleteApplicationOutput(
    args: DeleteApplicationOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationOutputCommandOutput>;
  public deleteApplicationOutput(
    args: DeleteApplicationOutputCommandInput,
    cb: (err: any, data?: DeleteApplicationOutputCommandOutput) => void
  ): void;
  public deleteApplicationOutput(
    args: DeleteApplicationOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationOutputCommandOutput) => void
  ): void;
  public deleteApplicationOutput(
    args: DeleteApplicationOutputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApplicationOutputCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationOutputCommandOutput) => void
  ): Promise<DeleteApplicationOutputCommandOutput> | void {
    const command = new DeleteApplicationOutputCommand(args);
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
   * <p>Deletes a reference data source configuration from the specified SQL-based Amazon Kinesis Data Analytics application's configuration.</p>
   *          <p>If the application is running, Kinesis Data Analytics immediately removes the in-application table
   *       that you created using the <a>AddApplicationReferenceDataSource</a> operation.  </p>
   */
  public deleteApplicationReferenceDataSource(
    args: DeleteApplicationReferenceDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationReferenceDataSourceCommandOutput>;
  public deleteApplicationReferenceDataSource(
    args: DeleteApplicationReferenceDataSourceCommandInput,
    cb: (err: any, data?: DeleteApplicationReferenceDataSourceCommandOutput) => void
  ): void;
  public deleteApplicationReferenceDataSource(
    args: DeleteApplicationReferenceDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationReferenceDataSourceCommandOutput) => void
  ): void;
  public deleteApplicationReferenceDataSource(
    args: DeleteApplicationReferenceDataSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApplicationReferenceDataSourceCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationReferenceDataSourceCommandOutput) => void
  ): Promise<DeleteApplicationReferenceDataSourceCommandOutput> | void {
    const command = new DeleteApplicationReferenceDataSourceCommand(args);
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
   * <p>Deletes a snapshot of application state.</p>
   */
  public deleteApplicationSnapshot(
    args: DeleteApplicationSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationSnapshotCommandOutput>;
  public deleteApplicationSnapshot(
    args: DeleteApplicationSnapshotCommandInput,
    cb: (err: any, data?: DeleteApplicationSnapshotCommandOutput) => void
  ): void;
  public deleteApplicationSnapshot(
    args: DeleteApplicationSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationSnapshotCommandOutput) => void
  ): void;
  public deleteApplicationSnapshot(
    args: DeleteApplicationSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApplicationSnapshotCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationSnapshotCommandOutput) => void
  ): Promise<DeleteApplicationSnapshotCommandOutput> | void {
    const command = new DeleteApplicationSnapshotCommand(args);
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
   * <p>Removes a VPC configuration from a Kinesis Data Analytics application.</p>
   */
  public deleteApplicationVpcConfiguration(
    args: DeleteApplicationVpcConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationVpcConfigurationCommandOutput>;
  public deleteApplicationVpcConfiguration(
    args: DeleteApplicationVpcConfigurationCommandInput,
    cb: (err: any, data?: DeleteApplicationVpcConfigurationCommandOutput) => void
  ): void;
  public deleteApplicationVpcConfiguration(
    args: DeleteApplicationVpcConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationVpcConfigurationCommandOutput) => void
  ): void;
  public deleteApplicationVpcConfiguration(
    args: DeleteApplicationVpcConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApplicationVpcConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationVpcConfigurationCommandOutput) => void
  ): Promise<DeleteApplicationVpcConfigurationCommandOutput> | void {
    const command = new DeleteApplicationVpcConfigurationCommand(args);
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
   * <p>Returns information about a specific Amazon Kinesis Data Analytics application.</p>
   *          <p>If you want to retrieve a list of all applications in your account,
   *       use the <a>ListApplications</a> operation.</p>
   */
  public describeApplication(
    args: DescribeApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationCommandOutput>;
  public describeApplication(
    args: DescribeApplicationCommandInput,
    cb: (err: any, data?: DescribeApplicationCommandOutput) => void
  ): void;
  public describeApplication(
    args: DescribeApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationCommandOutput) => void
  ): void;
  public describeApplication(
    args: DescribeApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeApplicationCommandOutput) => void),
    cb?: (err: any, data?: DescribeApplicationCommandOutput) => void
  ): Promise<DescribeApplicationCommandOutput> | void {
    const command = new DescribeApplicationCommand(args);
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
   * <p>Returns information about a snapshot of application state data.</p>
   */
  public describeApplicationSnapshot(
    args: DescribeApplicationSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationSnapshotCommandOutput>;
  public describeApplicationSnapshot(
    args: DescribeApplicationSnapshotCommandInput,
    cb: (err: any, data?: DescribeApplicationSnapshotCommandOutput) => void
  ): void;
  public describeApplicationSnapshot(
    args: DescribeApplicationSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationSnapshotCommandOutput) => void
  ): void;
  public describeApplicationSnapshot(
    args: DescribeApplicationSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeApplicationSnapshotCommandOutput) => void),
    cb?: (err: any, data?: DescribeApplicationSnapshotCommandOutput) => void
  ): Promise<DescribeApplicationSnapshotCommandOutput> | void {
    const command = new DescribeApplicationSnapshotCommand(args);
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
   * <p>Infers a schema for an SQL-based Amazon Kinesis Data Analytics application by evaluating
   *       sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose
   *       delivery stream) or Amazon S3 object. In the response, the operation returns the inferred
   *       schema and also the sample records that the operation used to infer the schema.</p>
   *          <p> You can use the inferred schema when configuring a streaming source for your application.
   *       When you create an application using the Kinesis Data Analytics console, the console uses this
   *       operation to infer a schema and show it in the console user interface. </p>
   */
  public discoverInputSchema(
    args: DiscoverInputSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DiscoverInputSchemaCommandOutput>;
  public discoverInputSchema(
    args: DiscoverInputSchemaCommandInput,
    cb: (err: any, data?: DiscoverInputSchemaCommandOutput) => void
  ): void;
  public discoverInputSchema(
    args: DiscoverInputSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DiscoverInputSchemaCommandOutput) => void
  ): void;
  public discoverInputSchema(
    args: DiscoverInputSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DiscoverInputSchemaCommandOutput) => void),
    cb?: (err: any, data?: DiscoverInputSchemaCommandOutput) => void
  ): Promise<DiscoverInputSchemaCommandOutput> | void {
    const command = new DiscoverInputSchemaCommand(args);
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
   * <p>Returns a list of Amazon Kinesis Data Analytics applications in your account. For each
   *       application, the response includes the application name, Amazon Resource Name (ARN), and
   *       status. </p>
   *          <p>If you want detailed information about a specific application, use
   *       <a>DescribeApplication</a>.</p>
   */
  public listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  public listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationsCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationsCommandOutput) => void
  ): Promise<ListApplicationsCommandOutput> | void {
    const command = new ListApplicationsCommand(args);
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
   * <p>Lists information about the current application snapshots.</p>
   */
  public listApplicationSnapshots(
    args: ListApplicationSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationSnapshotsCommandOutput>;
  public listApplicationSnapshots(
    args: ListApplicationSnapshotsCommandInput,
    cb: (err: any, data?: ListApplicationSnapshotsCommandOutput) => void
  ): void;
  public listApplicationSnapshots(
    args: ListApplicationSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationSnapshotsCommandOutput) => void
  ): void;
  public listApplicationSnapshots(
    args: ListApplicationSnapshotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationSnapshotsCommandOutput) => void
  ): Promise<ListApplicationSnapshotsCommandOutput> | void {
    const command = new ListApplicationSnapshotsCommand(args);
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
   * <p>Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.</p>
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
   * <p>Starts the specified Amazon Kinesis Data Analytics application. After creating an application, you must exclusively call this operation to
   *       start your application.</p>
   */
  public startApplication(
    args: StartApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartApplicationCommandOutput>;
  public startApplication(
    args: StartApplicationCommandInput,
    cb: (err: any, data?: StartApplicationCommandOutput) => void
  ): void;
  public startApplication(
    args: StartApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartApplicationCommandOutput) => void
  ): void;
  public startApplication(
    args: StartApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartApplicationCommandOutput) => void),
    cb?: (err: any, data?: StartApplicationCommandOutput) => void
  ): Promise<StartApplicationCommandOutput> | void {
    const command = new StartApplicationCommand(args);
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
   * <p>Stops the application from processing data. You can stop
   *       an application only if it is in the running state.
   *       You can use the <a>DescribeApplication</a> operation to find the application state.
   *        </p>
   */
  public stopApplication(
    args: StopApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopApplicationCommandOutput>;
  public stopApplication(
    args: StopApplicationCommandInput,
    cb: (err: any, data?: StopApplicationCommandOutput) => void
  ): void;
  public stopApplication(
    args: StopApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopApplicationCommandOutput) => void
  ): void;
  public stopApplication(
    args: StopApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopApplicationCommandOutput) => void),
    cb?: (err: any, data?: StopApplicationCommandOutput) => void
  ): Promise<StopApplicationCommandOutput> | void {
    const command = new StopApplicationCommand(args);
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
   * <p>Adds one or more key-value tags to a Kinesis Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
   *       For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.</p>
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
   * <p>Removes one or more tags from a Kinesis Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.</p>
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
   * <p>Updates an existing Amazon Kinesis Data Analytics application. Using this operation, you
   *       can update application code, input configuration, and output configuration. </p>
   *          <p>Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update
   *       your application. </p>
   */
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApplicationCommandOutput) => void),
    cb?: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): Promise<UpdateApplicationCommandOutput> | void {
    const command = new UpdateApplicationCommand(args);
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
