// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { KinesisAnalyticsV2Client } from "./KinesisAnalyticsV2Client";

/**
 * <p>Amazon Kinesis Data Analytics is a fully managed service that you can use to process and analyze streaming data using Java, SQL, or Scala. The service
 *       enables you to quickly author and run Java, SQL, or Scala code against streaming sources to perform time
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
   *       Adds a streaming source to your SQL-based Kinesis Data Analytics application.
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
   * <p>Adds an <a>InputProcessingConfiguration</a> to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records
   *       on the input stream before the
   *       application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.</p>
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
   * <p>Adds an external destination to your SQL-based Kinesis Data Analytics application.</p>
   *          <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within
   *       your application to an external destination (such as an Kinesis data stream, a Kinesis Data
   *       Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to
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
   * <p>Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.</p>
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
   * <p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store
   *         and access resources securely.</p>
   *          <p>Note the following about VPC configurations for Kinesis Data Analytics applications:</p>
   *          <ul>
   *             <li>
   *                <p>VPC configurations are not supported for SQL applications.</p>
   *             </li>
   *             <li>
   *                <p>When a VPC is added to a Kinesis Data Analytics application, the application can no longer be accessed from the
   *            Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p>
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
   * <p>Creates a Kinesis Data Analytics application. For information about creating a
   *           Kinesis Data Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html">Creating an
   *         Application</a>.</p>
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
   * <p>Creates and returns a URL that you can use to connect to
   *             an application's extension.</p>
   *         <p>The IAM role or user used to call this API defines the permissions to access the
   *       extension. After the presigned URL is created, no additional permission is required to access
   *       this URL. IAM authorization policies for this API are also enforced for every HTTP request
   *       that attempts to connect to the extension. </p>
   *         <p>You    control the amount of time that the URL will be valid using the <code>SessionExpirationDurationInSeconds</code>
   *         parameter. If you do not provide this parameter, the returned URL is valid for twelve hours.</p>
   *         <note>
   *             <p>The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes
   *             to be valid.
   *             If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.</p>
   *          </note>
   */
  public createApplicationPresignedUrl(
    args: CreateApplicationPresignedUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationPresignedUrlCommandOutput>;
  public createApplicationPresignedUrl(
    args: CreateApplicationPresignedUrlCommandInput,
    cb: (err: any, data?: CreateApplicationPresignedUrlCommandOutput) => void
  ): void;
  public createApplicationPresignedUrl(
    args: CreateApplicationPresignedUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationPresignedUrlCommandOutput) => void
  ): void;
  public createApplicationPresignedUrl(
    args: CreateApplicationPresignedUrlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApplicationPresignedUrlCommandOutput) => void),
    cb?: (err: any, data?: CreateApplicationPresignedUrlCommandOutput) => void
  ): Promise<CreateApplicationPresignedUrlCommandOutput> | void {
    const command = new CreateApplicationPresignedUrlCommand(args);
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
   * <p>Deletes an Amazon CloudWatch log stream from an Kinesis Data Analytics application. </p>
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
   * <p>Deletes the output destination configuration from your SQL-based Kinesis Data Analytics application's configuration.
   *       Kinesis Data Analytics will no longer write data from
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
   * <p>Deletes a reference data source configuration from the specified SQL-based Kinesis Data Analytics application's configuration.</p>
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
   * <p>Returns information about a specific Kinesis Data Analytics application.</p>
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
   * <p>Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the <a>ListApplicationVersions</a> operation.</p>
   *          <note>
   *             <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p>
   *          </note>
   */
  public describeApplicationVersion(
    args: DescribeApplicationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationVersionCommandOutput>;
  public describeApplicationVersion(
    args: DescribeApplicationVersionCommandInput,
    cb: (err: any, data?: DescribeApplicationVersionCommandOutput) => void
  ): void;
  public describeApplicationVersion(
    args: DescribeApplicationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationVersionCommandOutput) => void
  ): void;
  public describeApplicationVersion(
    args: DescribeApplicationVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeApplicationVersionCommandOutput) => void),
    cb?: (err: any, data?: DescribeApplicationVersionCommandOutput) => void
  ): Promise<DescribeApplicationVersionCommandOutput> | void {
    const command = new DescribeApplicationVersionCommand(args);
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
   * <p>Infers a schema for a SQL-based Kinesis Data Analytics application by evaluating
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
   * <p>Returns a list of Kinesis Data Analytics applications in your account. For each
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
   * <p>Lists all the versions for the specified application, including versions that were rolled back. The response also includes a summary of the configuration
   *       associated with each version.</p>
   *
   *          <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p>
   *          <note>
   *             <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p>
   *          </note>
   */
  public listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationVersionsCommandOutput>;
  public listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    cb: (err: any, data?: ListApplicationVersionsCommandOutput) => void
  ): void;
  public listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationVersionsCommandOutput) => void
  ): void;
  public listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationVersionsCommandOutput) => void
  ): Promise<ListApplicationVersionsCommandOutput> | void {
    const command = new ListApplicationVersionsCommand(args);
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
   * <p>Retrieves the list of key-value tags assigned to the application. For more information, see
   *         <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.</p>
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
   * <p>Reverts the application to the previous running version. You can
   *             roll back an application if you suspect it is stuck in a transient status. </p>
   *         <p>You can roll back an application only if it is in the <code>UPDATING</code>
   *             or <code>AUTOSCALING</code> status.</p>
   *         <p>When you rollback an application, it loads state data from the last successful snapshot.
   *         If the application has no snapshots, Kinesis Data Analytics rejects the rollback request.</p>
   *         <p>This action is not supported for Kinesis Data Analytics for SQL applications.</p>
   */
  public rollbackApplication(
    args: RollbackApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RollbackApplicationCommandOutput>;
  public rollbackApplication(
    args: RollbackApplicationCommandInput,
    cb: (err: any, data?: RollbackApplicationCommandOutput) => void
  ): void;
  public rollbackApplication(
    args: RollbackApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RollbackApplicationCommandOutput) => void
  ): void;
  public rollbackApplication(
    args: RollbackApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RollbackApplicationCommandOutput) => void),
    cb?: (err: any, data?: RollbackApplicationCommandOutput) => void
  ): Promise<RollbackApplicationCommandOutput> | void {
    const command = new RollbackApplicationCommand(args);
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
   * <p>Starts the specified Kinesis Data Analytics application. After creating an application, you must exclusively call this operation to
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
   *       an application only if it is in the running status, unless you set the <code>Force</code>
   *         parameter to <code>true</code>.</p>
   *          <p>You can use the <a>DescribeApplication</a> operation to find the application status.
   *        </p>
   *          <p>Kinesis Data Analytics takes a snapshot when the application is stopped, unless <code>Force</code> is set
   *           to <code>true</code>.</p>
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
   * <p>Adds one or more key-value tags to a Kinesis Data Analytics application. Note that the maximum number of application
   *         tags includes system tags. The maximum number of user-defined application tags is 50.
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
   * <p>Removes one or more tags from a Kinesis Data Analytics application. For more information, see
   *         <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.</p>
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
   * <p>Updates an existing Kinesis Data Analytics application. Using this operation, you
   *       can update application code, input configuration, and output configuration. </p>
   *          <p>Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update
   *       your application. </p>
   *          <note>
   *             <p>You cannot update the <code>RuntimeEnvironment</code> of an existing application. If you
   *     need to update an application's <code>RuntimeEnvironment</code>, you must delete the application
   *     and create it again.</p>
   *          </note>
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

  /**
   * <p>Updates the maintenance configuration of the Kinesis Data Analytics application. </p>
   *          <p>You can invoke this operation on an application that is in one of the two following
   *       states: <code>READY</code> or <code>RUNNING</code>. If you invoke it when the application is
   *       in a state other than these two states, it throws a <code>ResourceInUseException</code>. The
   *       service makes use of the updated configuration the next time it schedules maintenance for the
   *       application. If you invoke this operation after the service schedules maintenance, the service
   *       will apply the configuration update the next time it schedules maintenance for the
   *       application. This means that you might not see the maintenance configuration update applied to
   *       the maintenance process that follows a successful invocation of this operation, but to the
   *       following maintenance process instead.</p>
   *          <p>To see the current maintenance configuration of your application, invoke the
   *       <a>DescribeApplication</a> operation.</p>
   *          <p>For information about application maintenance, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/maintenance.html">Kinesis Data Analytics for Apache Flink Maintenance</a>.</p>
   *          <note>
   *             <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p>
   *          </note>
   */
  public updateApplicationMaintenanceConfiguration(
    args: UpdateApplicationMaintenanceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationMaintenanceConfigurationCommandOutput>;
  public updateApplicationMaintenanceConfiguration(
    args: UpdateApplicationMaintenanceConfigurationCommandInput,
    cb: (err: any, data?: UpdateApplicationMaintenanceConfigurationCommandOutput) => void
  ): void;
  public updateApplicationMaintenanceConfiguration(
    args: UpdateApplicationMaintenanceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationMaintenanceConfigurationCommandOutput) => void
  ): void;
  public updateApplicationMaintenanceConfiguration(
    args: UpdateApplicationMaintenanceConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateApplicationMaintenanceConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateApplicationMaintenanceConfigurationCommandOutput) => void
  ): Promise<UpdateApplicationMaintenanceConfigurationCommandOutput> | void {
    const command = new UpdateApplicationMaintenanceConfigurationCommand(args);
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
