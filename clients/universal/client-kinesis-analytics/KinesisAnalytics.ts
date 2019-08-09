import { KinesisAnalyticsClient } from "./KinesisAnalyticsClient";
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
import { DescribeApplicationInput } from "./types/DescribeApplicationInput";
import { DescribeApplicationOutput } from "./types/DescribeApplicationOutput";
import { DiscoverInputSchemaInput } from "./types/DiscoverInputSchemaInput";
import { DiscoverInputSchemaOutput } from "./types/DiscoverInputSchemaOutput";
import { InvalidApplicationConfigurationException } from "./types/InvalidApplicationConfigurationException";
import { InvalidArgumentException } from "./types/InvalidArgumentException";
import { LimitExceededException } from "./types/LimitExceededException";
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
import { DeleteApplicationCloudWatchLoggingOptionCommand } from "./commands/DeleteApplicationCloudWatchLoggingOptionCommand";
import { DeleteApplicationCommand } from "./commands/DeleteApplicationCommand";
import { DeleteApplicationInputProcessingConfigurationCommand } from "./commands/DeleteApplicationInputProcessingConfigurationCommand";
import { DeleteApplicationOutputCommand } from "./commands/DeleteApplicationOutputCommand";
import { DeleteApplicationReferenceDataSourceCommand } from "./commands/DeleteApplicationReferenceDataSourceCommand";
import { DescribeApplicationCommand } from "./commands/DescribeApplicationCommand";
import { DiscoverInputSchemaCommand } from "./commands/DiscoverInputSchemaCommand";
import { ListApplicationsCommand } from "./commands/ListApplicationsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { StartApplicationCommand } from "./commands/StartApplicationCommand";
import { StopApplicationCommand } from "./commands/StopApplicationCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommand } from "./commands/UpdateApplicationCommand";

export class KinesisAnalytics extends KinesisAnalyticsClient {
  /**
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a CloudWatch log stream to monitor application configuration errors. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>Application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>Specified input parameter value is invalid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
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
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Adds a streaming source to your Amazon Kinesis application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p> <p>You can add a streaming source either when you create an application or you can use this operation to add a streaming source after you create an application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html">CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationInput</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>Application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>Specified input parameter value is invalid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
   *   - {CodeValidationException} <p>User-provided application code (query) is invalid. This can be a simple syntax error.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
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
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to an application. An input processor preprocesses records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>Application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>Specified input parameter value is invalid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
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
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an external destination to your Amazon Kinesis Analytics application.</p> <p>If you want Amazon Kinesis Analytics to deliver data from an in-application stream within your application to an external destination (such as an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Understanding Application Output (Destination)</a>. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version.</p> <p>For the limits on the number of application inputs and outputs you can configure, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>Application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>Specified input parameter value is invalid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
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
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a reference data source to an existing application.</p> <p>Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table.</p> <p> For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. For the limits on data sources you can add to your application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>Application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>Specified input parameter value is invalid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
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
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Creates an Amazon Kinesis Analytics application. You can configure each application with one streaming source as input, application code to process the input, and up to three destinations where you want Amazon Kinesis Analytics to write the output data from your application. For an overview, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html">How it Works</a>. </p> <p>In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a data element in the streaming source.</p> <p>Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps.</p> <p>In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to three destinations.</p> <p> To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the <code>kinesisanalytics:CreateApplication</code> action. </p> <p> For introductory exercises to create an Amazon Kinesis Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/getting-started.html">Getting Started</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {CodeValidationException} <p>User-provided application code (query) is invalid. This can be a simple syntax error.</p>
   *   - {ResourceInUseException} <p>Application is not available for this operation.</p>
   *   - {LimitExceededException} <p>Exceeded the number of applications allowed.</p>
   *   - {InvalidArgumentException} <p>Specified input parameter value is invalid.</p>
   *   - {TooManyTagsException} <p>Application created with too many tags, or too many tags added to an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
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
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes the specified application. Amazon Kinesis Analytics halts application execution and deletes the application, including any application artifacts (such as in-application streams, reference table, and application code).</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplication</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>Application is not available for this operation.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
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
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a CloudWatch log stream from an application. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>Application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>Specified input parameter value is invalid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
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
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> from an input.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>Application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>Specified input parameter value is invalid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
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
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplicationOutput</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>Application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>Specified input parameter value is invalid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
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
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a reference data source configuration from the specified application configuration.</p> <p>If the application is running, Amazon Kinesis Analytics immediately removes the in-application table that you created using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics.DeleteApplicationReferenceDataSource</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>Application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>Specified input parameter value is invalid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
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
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns information about a specific Amazon Kinesis Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html">ListApplications</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DescribeApplication</code> action. You can use <code>DescribeApplication</code> to get the current application versionId, which you need to call other operations such as <code>Update</code>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
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
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Infers a schema by evaluating sample records on the specified streaming source (Amazon Kinesis stream or Amazon Kinesis Firehose delivery stream) or S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. Note that when you create an application using the Amazon Kinesis Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:DiscoverInputSchema</code> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgumentException} <p>Specified input parameter value is invalid.</p>
   *   - {UnableToDetectSchemaException} <p>Data format is not valid. Amazon Kinesis Analytics is not able to detect schema for the given streaming source.</p>
   *   - {ResourceProvisionedThroughputExceededException} <p>Discovery failed to get a record from the streaming source because of the Amazon Kinesis Streams ProvisionedThroughputExceededException. For more information, see <a href="kinesis/latest/APIReference/API_GetRecords.html">GetRecords</a> in the Amazon Kinesis Streams API Reference.</p>
   *   - {ServiceUnavailableException} <p>The service is unavailable. Back off and retry the operation. </p>
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
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns a list of Amazon Kinesis Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. If the response returns the <code>HasMoreApplications</code> value as true, you can send another request by adding the <code>ExclusiveStartApplicationName</code> in the request body, and set the value of this to the last application name from the previous response. </p> <p>If you want detailed information about a specific application, use <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:ListApplications</code> action.</p>
   *
   * This operation may fail with one of the following errors:
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
   *   - {InvalidArgumentException} <p>Specified input parameter value is invalid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
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
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application.</p> <p>After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination.</p> <p> The application status must be <code>READY</code> for you to start an application. You can get the application status in the console or using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p> <p>After you start the application, you can stop the application from processing the input by calling the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html">StopApplication</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StartApplication</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>Application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>Specified input parameter value is invalid.</p>
   *   - {InvalidApplicationConfigurationException} <p>User-provided application configuration is not valid.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
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
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Stops the application from processing input data. You can stop an application only if it is in the running state. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the application state. After the application is stopped, Amazon Kinesis Analytics stops reading data from the input, the application stops processing data, and there is no output written to the destination. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StopApplication</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>Application is not available for this operation.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
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
   *   - {ResourceInUseException} <p>Application is not available for this operation.</p>
   *   - {TooManyTagsException} <p>Application created with too many tags, or too many tags added to an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
   *   - {InvalidArgumentException} <p>Specified input parameter value is invalid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
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
   *   - {ResourceInUseException} <p>Application is not available for this operation.</p>
   *   - {TooManyTagsException} <p>Application created with too many tags, or too many tags added to an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
   *   - {InvalidArgumentException} <p>Specified input parameter value is invalid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
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
   * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Updates an existing Amazon Kinesis Analytics application. Using this API, you can update application code, input configuration, and output configuration. </p> <p>Note that Amazon Kinesis Analytics updates the <code>CurrentApplicationVersionId</code> each time you update your application. </p> <p>This operation requires permission for the <code>kinesisanalytics:UpdateApplication</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CodeValidationException} <p>User-provided application code (query) is invalid. This can be a simple syntax error.</p>
   *   - {ResourceNotFoundException} <p>Specified application can't be found.</p>
   *   - {ResourceInUseException} <p>Application is not available for this operation.</p>
   *   - {InvalidArgumentException} <p>Specified input parameter value is invalid.</p>
   *   - {ConcurrentModificationException} <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
   *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
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
