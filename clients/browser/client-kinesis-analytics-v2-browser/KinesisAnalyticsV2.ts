import { KinesisAnalyticsV2Client } from "./KinesisAnalyticsV2Client";
import { AddApplicationCloudWatchLoggingOptionInput } from "./types/AddApplicationCloudWatchLoggingOptionInput";
import { AddApplicationCloudWatchLoggingOptionOutput } from "./types/AddApplicationCloudWatchLoggingOptionOutput";
import { AddApplicationInputInput } from "./types/AddApplicationInputInput";
import { AddApplicationInputOutput } from "./types/AddApplicationInputOutput";
import { AddApplicationInputProcessingConfigurationInput } from "./types/AddApplicationInputProcessingConfigurationInput";
import { AddApplicationInputProcessingConfigurationOutput } from "./types/AddApplicationInputProcessingConfigurationOutput";
import { AddApplicationOutputInput } from "./types/AddApplicationOutputInput";
import { AddApplicationOutputOutput } from "./types/AddApplicationOutputOutput";
import { AddApplicationReferenceDataSourceInput } from "./types/AddApplicationReferenceDataSourceInput";
import { AddApplicationReferenceDataSourceOutput } from "./types/AddApplicationReferenceDataSourceOutput";
import { CodeValidationException } from "./types/CodeValidationException";
import { ConcurrentModificationException } from "./types/ConcurrentModificationException";
import { CreateApplicationInput } from "./types/CreateApplicationInput";
import { CreateApplicationOutput } from "./types/CreateApplicationOutput";
import { CreateApplicationSnapshotInput } from "./types/CreateApplicationSnapshotInput";
import { CreateApplicationSnapshotOutput } from "./types/CreateApplicationSnapshotOutput";
import { DeleteApplicationCloudWatchLoggingOptionInput } from "./types/DeleteApplicationCloudWatchLoggingOptionInput";
import { DeleteApplicationCloudWatchLoggingOptionOutput } from "./types/DeleteApplicationCloudWatchLoggingOptionOutput";
import { DeleteApplicationInput } from "./types/DeleteApplicationInput";
import { DeleteApplicationInputProcessingConfigurationInput } from "./types/DeleteApplicationInputProcessingConfigurationInput";
import { DeleteApplicationInputProcessingConfigurationOutput } from "./types/DeleteApplicationInputProcessingConfigurationOutput";
import { DeleteApplicationOutput } from "./types/DeleteApplicationOutput";
import { DeleteApplicationOutputInput } from "./types/DeleteApplicationOutputInput";
import { DeleteApplicationOutputOutput } from "./types/DeleteApplicationOutputOutput";
import { DeleteApplicationReferenceDataSourceInput } from "./types/DeleteApplicationReferenceDataSourceInput";
import { DeleteApplicationReferenceDataSourceOutput } from "./types/DeleteApplicationReferenceDataSourceOutput";
import { DeleteApplicationSnapshotInput } from "./types/DeleteApplicationSnapshotInput";
import { DeleteApplicationSnapshotOutput } from "./types/DeleteApplicationSnapshotOutput";
import { DescribeApplicationInput } from "./types/DescribeApplicationInput";
import { DescribeApplicationOutput } from "./types/DescribeApplicationOutput";
import { DescribeApplicationSnapshotInput } from "./types/DescribeApplicationSnapshotInput";
import { DescribeApplicationSnapshotOutput } from "./types/DescribeApplicationSnapshotOutput";
import { DiscoverInputSchemaInput } from "./types/DiscoverInputSchemaInput";
import { DiscoverInputSchemaOutput } from "./types/DiscoverInputSchemaOutput";
import { InvalidApplicationConfigurationException } from "./types/InvalidApplicationConfigurationException";
import { InvalidArgumentException } from "./types/InvalidArgumentException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListApplicationSnapshotsInput } from "./types/ListApplicationSnapshotsInput";
import { ListApplicationSnapshotsOutput } from "./types/ListApplicationSnapshotsOutput";
import { ListApplicationsInput } from "./types/ListApplicationsInput";
import { ListApplicationsOutput } from "./types/ListApplicationsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ResourceProvisionedThroughputExceededException } from "./types/ResourceProvisionedThroughputExceededException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { StartApplicationInput } from "./types/StartApplicationInput";
import { StartApplicationOutput } from "./types/StartApplicationOutput";
import { StopApplicationInput } from "./types/StopApplicationInput";
import { StopApplicationOutput } from "./types/StopApplicationOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyTagsException } from "./types/TooManyTagsException";
import { UnableToDetectSchemaException } from "./types/UnableToDetectSchemaException";
import { UnsupportedOperationException } from "./types/UnsupportedOperationException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateApplicationInput } from "./types/UpdateApplicationInput";
import { UpdateApplicationOutput } from "./types/UpdateApplicationOutput";
import { AddApplicationCloudWatchLoggingOptionCommand } from "./commands/AddApplicationCloudWatchLoggingOptionCommand";
import { AddApplicationInputCommand } from "./commands/AddApplicationInputCommand";
import { AddApplicationInputProcessingConfigurationCommand } from "./commands/AddApplicationInputProcessingConfigurationCommand";
import { AddApplicationOutputCommand } from "./commands/AddApplicationOutputCommand";
import { AddApplicationReferenceDataSourceCommand } from "./commands/AddApplicationReferenceDataSourceCommand";
import { CreateApplicationCommand } from "./commands/CreateApplicationCommand";
import { CreateApplicationSnapshotCommand } from "./commands/CreateApplicationSnapshotCommand";
import { DeleteApplicationCloudWatchLoggingOptionCommand } from "./commands/DeleteApplicationCloudWatchLoggingOptionCommand";
import { DeleteApplicationCommand } from "./commands/DeleteApplicationCommand";
import { DeleteApplicationInputProcessingConfigurationCommand } from "./commands/DeleteApplicationInputProcessingConfigurationCommand";
import { DeleteApplicationOutputCommand } from "./commands/DeleteApplicationOutputCommand";
import { DeleteApplicationReferenceDataSourceCommand } from "./commands/DeleteApplicationReferenceDataSourceCommand";
import { DeleteApplicationSnapshotCommand } from "./commands/DeleteApplicationSnapshotCommand";
import { DescribeApplicationCommand } from "./commands/DescribeApplicationCommand";
import { DescribeApplicationSnapshotCommand } from "./commands/DescribeApplicationSnapshotCommand";
import { DiscoverInputSchemaCommand } from "./commands/DiscoverInputSchemaCommand";
import { ListApplicationSnapshotsCommand } from "./commands/ListApplicationSnapshotsCommand";
import { ListApplicationsCommand } from "./commands/ListApplicationsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { StartApplicationCommand } from "./commands/StartApplicationCommand";
import { StopApplicationCommand } from "./commands/StopApplicationCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommand } from "./commands/UpdateApplicationCommand";

export class KinesisAnalyticsV2 extends KinesisAnalyticsV2Client {
  /**
   * <p>Adds an Amazon CloudWatch log stream to monitor application configuration errors.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.</p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {InvalidApplicationConfigurationException} <p>The user-provided application configuration is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addApplicationCloudWatchLoggingOption(
    args: AddApplicationCloudWatchLoggingOptionInput
  ): Promise<AddApplicationCloudWatchLoggingOptionOutput>;
  public addApplicationCloudWatchLoggingOption(
    args: AddApplicationCloudWatchLoggingOptionInput,
    cb: (err: any, data?: AddApplicationCloudWatchLoggingOptionOutput) => void
  ): void;
  public addApplicationCloudWatchLoggingOption(
    args: AddApplicationCloudWatchLoggingOptionInput,
    cb?: (err: any, data?: AddApplicationCloudWatchLoggingOptionOutput) => void
  ): Promise<AddApplicationCloudWatchLoggingOptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddApplicationCloudWatchLoggingOptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Adds a streaming source to your SQL-based Amazon Kinesis Data Analytics application. </p> <p>You can add a streaming source when you create an application, or you can use this operation to add a streaming source after you create an application. For more information, see <a>CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.</p>
   *   - {CodeValidationException} <p>The user-provided application code (query) is not valid. This can be a simple syntax error.</p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addApplicationInput(
    args: AddApplicationInputInput
  ): Promise<AddApplicationInputOutput>;
  public addApplicationInput(
    args: AddApplicationInputInput,
    cb: (err: any, data?: AddApplicationInputOutput) => void
  ): void;
  public addApplicationInput(
    args: AddApplicationInputInput,
    cb?: (err: any, data?: AddApplicationInputOutput) => void
  ): Promise<AddApplicationInputOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddApplicationInputCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds an <a>InputProcessingConfiguration</a> to an SQL-based Kinesis Data Analytics application. An input processor pre-processes records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.</p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addApplicationInputProcessingConfiguration(
    args: AddApplicationInputProcessingConfigurationInput
  ): Promise<AddApplicationInputProcessingConfigurationOutput>;
  public addApplicationInputProcessingConfiguration(
    args: AddApplicationInputProcessingConfigurationInput,
    cb: (
      err: any,
      data?: AddApplicationInputProcessingConfigurationOutput
    ) => void
  ): void;
  public addApplicationInputProcessingConfiguration(
    args: AddApplicationInputProcessingConfigurationInput,
    cb?: (
      err: any,
      data?: AddApplicationInputProcessingConfigurationOutput
    ) => void
  ): Promise<AddApplicationInputProcessingConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddApplicationInputProcessingConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds an external destination to your SQL-based Amazon Kinesis Data Analytics application.</p> <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within your application to an external destination (such as an Kinesis data stream, a Kinesis Data Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.</p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addApplicationOutput(
    args: AddApplicationOutputInput
  ): Promise<AddApplicationOutputOutput>;
  public addApplicationOutput(
    args: AddApplicationOutputInput,
    cb: (err: any, data?: AddApplicationOutputOutput) => void
  ): void;
  public addApplicationOutput(
    args: AddApplicationOutputInput,
    cb?: (err: any, data?: AddApplicationOutputOutput) => void
  ): Promise<AddApplicationOutputOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddApplicationOutputCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a reference data source to an existing SQL-based Amazon Kinesis Data Analytics application.</p> <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in an Amazon S3 object maps to columns in the resulting in-application table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.</p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addApplicationReferenceDataSource(
    args: AddApplicationReferenceDataSourceInput
  ): Promise<AddApplicationReferenceDataSourceOutput>;
  public addApplicationReferenceDataSource(
    args: AddApplicationReferenceDataSourceInput,
    cb: (err: any, data?: AddApplicationReferenceDataSourceOutput) => void
  ): void;
  public addApplicationReferenceDataSource(
    args: AddApplicationReferenceDataSourceInput,
    cb?: (err: any, data?: AddApplicationReferenceDataSourceOutput) => void
  ): Promise<AddApplicationReferenceDataSourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddApplicationReferenceDataSourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an Amazon Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html">Creating an Application</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {CodeValidationException} <p>The user-provided application code (query) is not valid. This can be a simple syntax error.</p>
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {LimitExceededException} <p>The number of allowed resources has been exceeded.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {TooManyTagsException} <p>Application created with too many tags, or too many tags added to an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createApplication(
    args: CreateApplicationInput
  ): Promise<CreateApplicationOutput>;
  public createApplication(
    args: CreateApplicationInput,
    cb: (err: any, data?: CreateApplicationOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationInput,
    cb?: (err: any, data?: CreateApplicationOutput) => void
  ): Promise<CreateApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a snapshot of the application's state data.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {LimitExceededException} <p>The number of allowed resources has been exceeded.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createApplicationSnapshot(
    args: CreateApplicationSnapshotInput
  ): Promise<CreateApplicationSnapshotOutput>;
  public createApplicationSnapshot(
    args: CreateApplicationSnapshotInput,
    cb: (err: any, data?: CreateApplicationSnapshotOutput) => void
  ): void;
  public createApplicationSnapshot(
    args: CreateApplicationSnapshotInput,
    cb?: (err: any, data?: CreateApplicationSnapshotOutput) => void
  ): Promise<CreateApplicationSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateApplicationSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified application. Kinesis Data Analytics halts application execution and deletes the application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.</p>
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {InvalidApplicationConfigurationException} <p>The user-provided application configuration is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApplication(
    args: DeleteApplicationInput
  ): Promise<DeleteApplicationOutput>;
  public deleteApplication(
    args: DeleteApplicationInput,
    cb: (err: any, data?: DeleteApplicationOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationInput,
    cb?: (err: any, data?: DeleteApplicationOutput) => void
  ): Promise<DeleteApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an Amazon CloudWatch log stream from an Amazon Kinesis Data Analytics application. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.</p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {InvalidApplicationConfigurationException} <p>The user-provided application configuration is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApplicationCloudWatchLoggingOption(
    args: DeleteApplicationCloudWatchLoggingOptionInput
  ): Promise<DeleteApplicationCloudWatchLoggingOptionOutput>;
  public deleteApplicationCloudWatchLoggingOption(
    args: DeleteApplicationCloudWatchLoggingOptionInput,
    cb: (
      err: any,
      data?: DeleteApplicationCloudWatchLoggingOptionOutput
    ) => void
  ): void;
  public deleteApplicationCloudWatchLoggingOption(
    args: DeleteApplicationCloudWatchLoggingOptionInput,
    cb?: (
      err: any,
      data?: DeleteApplicationCloudWatchLoggingOptionOutput
    ) => void
  ): Promise<DeleteApplicationCloudWatchLoggingOptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApplicationCloudWatchLoggingOptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an <a>InputProcessingConfiguration</a> from an input.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.</p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApplicationInputProcessingConfiguration(
    args: DeleteApplicationInputProcessingConfigurationInput
  ): Promise<DeleteApplicationInputProcessingConfigurationOutput>;
  public deleteApplicationInputProcessingConfiguration(
    args: DeleteApplicationInputProcessingConfigurationInput,
    cb: (
      err: any,
      data?: DeleteApplicationInputProcessingConfigurationOutput
    ) => void
  ): void;
  public deleteApplicationInputProcessingConfiguration(
    args: DeleteApplicationInputProcessingConfigurationInput,
    cb?: (
      err: any,
      data?: DeleteApplicationInputProcessingConfigurationOutput
    ) => void
  ): Promise<DeleteApplicationInputProcessingConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApplicationInputProcessingConfigurationCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the output destination configuration from your SQL-based Amazon Kinesis Data Analytics application's configuration. Kinesis Data Analytics will no longer write data from the corresponding in-application stream to the external output destination.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.</p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApplicationOutput(
    args: DeleteApplicationOutputInput
  ): Promise<DeleteApplicationOutputOutput>;
  public deleteApplicationOutput(
    args: DeleteApplicationOutputInput,
    cb: (err: any, data?: DeleteApplicationOutputOutput) => void
  ): void;
  public deleteApplicationOutput(
    args: DeleteApplicationOutputInput,
    cb?: (err: any, data?: DeleteApplicationOutputOutput) => void
  ): Promise<DeleteApplicationOutputOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApplicationOutputCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a reference data source configuration from the specified SQL-based Amazon Kinesis Data Analytics application's configuration.</p> <p>If the application is running, Kinesis Data Analytics immediately removes the in-application table that you created using the <a>AddApplicationReferenceDataSource</a> operation. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.</p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApplicationReferenceDataSource(
    args: DeleteApplicationReferenceDataSourceInput
  ): Promise<DeleteApplicationReferenceDataSourceOutput>;
  public deleteApplicationReferenceDataSource(
    args: DeleteApplicationReferenceDataSourceInput,
    cb: (err: any, data?: DeleteApplicationReferenceDataSourceOutput) => void
  ): void;
  public deleteApplicationReferenceDataSource(
    args: DeleteApplicationReferenceDataSourceInput,
    cb?: (err: any, data?: DeleteApplicationReferenceDataSourceOutput) => void
  ): Promise<DeleteApplicationReferenceDataSourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApplicationReferenceDataSourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a snapshot of application state.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApplicationSnapshot(
    args: DeleteApplicationSnapshotInput
  ): Promise<DeleteApplicationSnapshotOutput>;
  public deleteApplicationSnapshot(
    args: DeleteApplicationSnapshotInput,
    cb: (err: any, data?: DeleteApplicationSnapshotOutput) => void
  ): void;
  public deleteApplicationSnapshot(
    args: DeleteApplicationSnapshotInput,
    cb?: (err: any, data?: DeleteApplicationSnapshotOutput) => void
  ): Promise<DeleteApplicationSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApplicationSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specific Amazon Kinesis Data Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a>ListApplications</a> operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeApplication(
    args: DescribeApplicationInput
  ): Promise<DescribeApplicationOutput>;
  public describeApplication(
    args: DescribeApplicationInput,
    cb: (err: any, data?: DescribeApplicationOutput) => void
  ): void;
  public describeApplication(
    args: DescribeApplicationInput,
    cb?: (err: any, data?: DescribeApplicationOutput) => void
  ): Promise<DescribeApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a snapshot of application state data.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeApplicationSnapshot(
    args: DescribeApplicationSnapshotInput
  ): Promise<DescribeApplicationSnapshotOutput>;
  public describeApplicationSnapshot(
    args: DescribeApplicationSnapshotInput,
    cb: (err: any, data?: DescribeApplicationSnapshotOutput) => void
  ): void;
  public describeApplicationSnapshot(
    args: DescribeApplicationSnapshotInput,
    cb?: (err: any, data?: DescribeApplicationSnapshotOutput) => void
  ): Promise<DescribeApplicationSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeApplicationSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Infers a schema for an SQL-based Amazon Kinesis Data Analytics application by evaluating sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose delivery stream) or Amazon S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. When you create an application using the Kinesis Data Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {UnableToDetectSchemaException} <p>The data format is not valid. Amazon Kinesis Data Analytics cannot detect the schema for the given streaming source.</p>
   *   - {ResourceProvisionedThroughputExceededException} <p>Discovery failed to get a record from the streaming source because of the Amazon Kinesis Streams <code>ProvisionedThroughputExceededException</code>. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html">GetRecords</a> in the Amazon Kinesis Streams API Reference.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public discoverInputSchema(
    args: DiscoverInputSchemaInput
  ): Promise<DiscoverInputSchemaOutput>;
  public discoverInputSchema(
    args: DiscoverInputSchemaInput,
    cb: (err: any, data?: DiscoverInputSchemaOutput) => void
  ): void;
  public discoverInputSchema(
    args: DiscoverInputSchemaInput,
    cb?: (err: any, data?: DiscoverInputSchemaOutput) => void
  ): Promise<DiscoverInputSchemaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DiscoverInputSchemaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists information about the current application snapshots.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listApplicationSnapshots(
    args: ListApplicationSnapshotsInput
  ): Promise<ListApplicationSnapshotsOutput>;
  public listApplicationSnapshots(
    args: ListApplicationSnapshotsInput,
    cb: (err: any, data?: ListApplicationSnapshotsOutput) => void
  ): void;
  public listApplicationSnapshots(
    args: ListApplicationSnapshotsInput,
    cb?: (err: any, data?: ListApplicationSnapshotsOutput) => void
  ): Promise<ListApplicationSnapshotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListApplicationSnapshotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of Amazon Kinesis Data Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. </p> <p>If you want detailed information about a specific application, use <a>DescribeApplication</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listApplications(
    args: ListApplicationsInput
  ): Promise<ListApplicationsOutput>;
  public listApplications(
    args: ListApplicationsInput,
    cb: (err: any, data?: ListApplicationsOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsInput,
    cb?: (err: any, data?: ListApplicationsOutput) => void
  ): Promise<ListApplicationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListApplicationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the list of key-value tags assigned to the application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts the specified Amazon Kinesis Data Analytics application. After creating an application, you must exclusively call this operation to start your application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {InvalidApplicationConfigurationException} <p>The user-provided application configuration is not valid.</p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startApplication(
    args: StartApplicationInput
  ): Promise<StartApplicationOutput>;
  public startApplication(
    args: StartApplicationInput,
    cb: (err: any, data?: StartApplicationOutput) => void
  ): void;
  public startApplication(
    args: StartApplicationInput,
    cb?: (err: any, data?: StartApplicationOutput) => void
  ): Promise<StartApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops the application from processing data. You can stop an application only if it is in the running state. You can use the <a>DescribeApplication</a> operation to find the application state. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {InvalidApplicationConfigurationException} <p>The user-provided application configuration is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopApplication(
    args: StopApplicationInput
  ): Promise<StopApplicationOutput>;
  public stopApplication(
    args: StopApplicationInput,
    cb: (err: any, data?: StopApplicationOutput) => void
  ): void;
  public stopApplication(
    args: StopApplicationInput,
    cb?: (err: any, data?: StopApplicationOutput) => void
  ): Promise<StopApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds one or more key-value tags to a Kinesis Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {TooManyTagsException} <p>Application created with too many tags, or too many tags added to an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes one or more tags from a Kinesis Analytics application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {TooManyTagsException} <p>Application created with too many tags, or too many tags added to an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing Amazon Kinesis Data Analytics application. Using this operation, you can update application code, input configuration, and output configuration. </p> <p>Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update your application. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {CodeValidationException} <p>The user-provided application code (query) is not valid. This can be a simple syntax error.</p>
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>The application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>The specified input parameter value is not valid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.</p>
   *   - {InvalidRequestException} <p>The request JSON is not valid for the operation.</p>
   *   - {InvalidApplicationConfigurationException} <p>The user-provided application configuration is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateApplication(
    args: UpdateApplicationInput
  ): Promise<UpdateApplicationOutput>;
  public updateApplication(
    args: UpdateApplicationInput,
    cb: (err: any, data?: UpdateApplicationOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationInput,
    cb?: (err: any, data?: UpdateApplicationOutput) => void
  ): Promise<UpdateApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
