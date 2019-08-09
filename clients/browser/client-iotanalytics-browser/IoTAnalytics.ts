import { IoTAnalyticsClient } from "./IoTAnalyticsClient";
import { BatchPutMessageInput } from "./types/BatchPutMessageInput";
import { BatchPutMessageOutput } from "./types/BatchPutMessageOutput";
import { CancelPipelineReprocessingInput } from "./types/CancelPipelineReprocessingInput";
import { CancelPipelineReprocessingOutput } from "./types/CancelPipelineReprocessingOutput";
import { CreateChannelInput } from "./types/CreateChannelInput";
import { CreateChannelOutput } from "./types/CreateChannelOutput";
import { CreateDatasetContentInput } from "./types/CreateDatasetContentInput";
import { CreateDatasetContentOutput } from "./types/CreateDatasetContentOutput";
import { CreateDatasetInput } from "./types/CreateDatasetInput";
import { CreateDatasetOutput } from "./types/CreateDatasetOutput";
import { CreateDatastoreInput } from "./types/CreateDatastoreInput";
import { CreateDatastoreOutput } from "./types/CreateDatastoreOutput";
import { CreatePipelineInput } from "./types/CreatePipelineInput";
import { CreatePipelineOutput } from "./types/CreatePipelineOutput";
import { DeleteChannelInput } from "./types/DeleteChannelInput";
import { DeleteChannelOutput } from "./types/DeleteChannelOutput";
import { DeleteDatasetContentInput } from "./types/DeleteDatasetContentInput";
import { DeleteDatasetContentOutput } from "./types/DeleteDatasetContentOutput";
import { DeleteDatasetInput } from "./types/DeleteDatasetInput";
import { DeleteDatasetOutput } from "./types/DeleteDatasetOutput";
import { DeleteDatastoreInput } from "./types/DeleteDatastoreInput";
import { DeleteDatastoreOutput } from "./types/DeleteDatastoreOutput";
import { DeletePipelineInput } from "./types/DeletePipelineInput";
import { DeletePipelineOutput } from "./types/DeletePipelineOutput";
import { DescribeChannelInput } from "./types/DescribeChannelInput";
import { DescribeChannelOutput } from "./types/DescribeChannelOutput";
import { DescribeDatasetInput } from "./types/DescribeDatasetInput";
import { DescribeDatasetOutput } from "./types/DescribeDatasetOutput";
import { DescribeDatastoreInput } from "./types/DescribeDatastoreInput";
import { DescribeDatastoreOutput } from "./types/DescribeDatastoreOutput";
import { DescribeLoggingOptionsInput } from "./types/DescribeLoggingOptionsInput";
import { DescribeLoggingOptionsOutput } from "./types/DescribeLoggingOptionsOutput";
import { DescribePipelineInput } from "./types/DescribePipelineInput";
import { DescribePipelineOutput } from "./types/DescribePipelineOutput";
import { GetDatasetContentInput } from "./types/GetDatasetContentInput";
import { GetDatasetContentOutput } from "./types/GetDatasetContentOutput";
import { InternalFailureException } from "./types/InternalFailureException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListChannelsInput } from "./types/ListChannelsInput";
import { ListChannelsOutput } from "./types/ListChannelsOutput";
import { ListDatasetContentsInput } from "./types/ListDatasetContentsInput";
import { ListDatasetContentsOutput } from "./types/ListDatasetContentsOutput";
import { ListDatasetsInput } from "./types/ListDatasetsInput";
import { ListDatasetsOutput } from "./types/ListDatasetsOutput";
import { ListDatastoresInput } from "./types/ListDatastoresInput";
import { ListDatastoresOutput } from "./types/ListDatastoresOutput";
import { ListPipelinesInput } from "./types/ListPipelinesInput";
import { ListPipelinesOutput } from "./types/ListPipelinesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { PutLoggingOptionsInput } from "./types/PutLoggingOptionsInput";
import { PutLoggingOptionsOutput } from "./types/PutLoggingOptionsOutput";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { RunPipelineActivityInput } from "./types/RunPipelineActivityInput";
import { RunPipelineActivityOutput } from "./types/RunPipelineActivityOutput";
import { SampleChannelDataInput } from "./types/SampleChannelDataInput";
import { SampleChannelDataOutput } from "./types/SampleChannelDataOutput";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { StartPipelineReprocessingInput } from "./types/StartPipelineReprocessingInput";
import { StartPipelineReprocessingOutput } from "./types/StartPipelineReprocessingOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { ThrottlingException } from "./types/ThrottlingException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateChannelInput } from "./types/UpdateChannelInput";
import { UpdateChannelOutput } from "./types/UpdateChannelOutput";
import { UpdateDatasetInput } from "./types/UpdateDatasetInput";
import { UpdateDatasetOutput } from "./types/UpdateDatasetOutput";
import { UpdateDatastoreInput } from "./types/UpdateDatastoreInput";
import { UpdateDatastoreOutput } from "./types/UpdateDatastoreOutput";
import { UpdatePipelineInput } from "./types/UpdatePipelineInput";
import { UpdatePipelineOutput } from "./types/UpdatePipelineOutput";
import { BatchPutMessageCommand } from "./commands/BatchPutMessageCommand";
import { CancelPipelineReprocessingCommand } from "./commands/CancelPipelineReprocessingCommand";
import { CreateChannelCommand } from "./commands/CreateChannelCommand";
import { CreateDatasetCommand } from "./commands/CreateDatasetCommand";
import { CreateDatasetContentCommand } from "./commands/CreateDatasetContentCommand";
import { CreateDatastoreCommand } from "./commands/CreateDatastoreCommand";
import { CreatePipelineCommand } from "./commands/CreatePipelineCommand";
import { DeleteChannelCommand } from "./commands/DeleteChannelCommand";
import { DeleteDatasetCommand } from "./commands/DeleteDatasetCommand";
import { DeleteDatasetContentCommand } from "./commands/DeleteDatasetContentCommand";
import { DeleteDatastoreCommand } from "./commands/DeleteDatastoreCommand";
import { DeletePipelineCommand } from "./commands/DeletePipelineCommand";
import { DescribeChannelCommand } from "./commands/DescribeChannelCommand";
import { DescribeDatasetCommand } from "./commands/DescribeDatasetCommand";
import { DescribeDatastoreCommand } from "./commands/DescribeDatastoreCommand";
import { DescribeLoggingOptionsCommand } from "./commands/DescribeLoggingOptionsCommand";
import { DescribePipelineCommand } from "./commands/DescribePipelineCommand";
import { GetDatasetContentCommand } from "./commands/GetDatasetContentCommand";
import { ListChannelsCommand } from "./commands/ListChannelsCommand";
import { ListDatasetContentsCommand } from "./commands/ListDatasetContentsCommand";
import { ListDatasetsCommand } from "./commands/ListDatasetsCommand";
import { ListDatastoresCommand } from "./commands/ListDatastoresCommand";
import { ListPipelinesCommand } from "./commands/ListPipelinesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { PutLoggingOptionsCommand } from "./commands/PutLoggingOptionsCommand";
import { RunPipelineActivityCommand } from "./commands/RunPipelineActivityCommand";
import { SampleChannelDataCommand } from "./commands/SampleChannelDataCommand";
import { StartPipelineReprocessingCommand } from "./commands/StartPipelineReprocessingCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateChannelCommand } from "./commands/UpdateChannelCommand";
import { UpdateDatasetCommand } from "./commands/UpdateDatasetCommand";
import { UpdateDatastoreCommand } from "./commands/UpdateDatastoreCommand";
import { UpdatePipelineCommand } from "./commands/UpdatePipelineCommand";

export class IoTAnalytics extends IoTAnalyticsClient {
  /**
   * <p>Sends messages to a channel.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchPutMessage(
    args: BatchPutMessageInput
  ): Promise<BatchPutMessageOutput>;
  public batchPutMessage(
    args: BatchPutMessageInput,
    cb: (err: any, data?: BatchPutMessageOutput) => void
  ): void;
  public batchPutMessage(
    args: BatchPutMessageInput,
    cb?: (err: any, data?: BatchPutMessageOutput) => void
  ): Promise<BatchPutMessageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchPutMessageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels the reprocessing of data through the pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelPipelineReprocessing(
    args: CancelPipelineReprocessingInput
  ): Promise<CancelPipelineReprocessingOutput>;
  public cancelPipelineReprocessing(
    args: CancelPipelineReprocessingInput,
    cb: (err: any, data?: CancelPipelineReprocessingOutput) => void
  ): void;
  public cancelPipelineReprocessing(
    args: CancelPipelineReprocessingInput,
    cb?: (err: any, data?: CancelPipelineReprocessingOutput) => void
  ): Promise<CancelPipelineReprocessingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelPipelineReprocessingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceAlreadyExistsException} <p>A resource with the same name already exists.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {LimitExceededException} <p>The command caused an internal limit to be exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createChannel(args: CreateChannelInput): Promise<CreateChannelOutput>;
  public createChannel(
    args: CreateChannelInput,
    cb: (err: any, data?: CreateChannelOutput) => void
  ): void;
  public createChannel(
    args: CreateChannelInput,
    cb?: (err: any, data?: CreateChannelOutput) => void
  ): Promise<CreateChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a data set. A data set stores data retrieved from a data store by applying a "queryAction" (a SQL query) or a "containerAction" (executing a containerized application). This operation creates the skeleton of a data set. The data set can be populated manually by calling "CreateDatasetContent" or automatically according to a "trigger" you specify.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceAlreadyExistsException} <p>A resource with the same name already exists.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {LimitExceededException} <p>The command caused an internal limit to be exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDataset(args: CreateDatasetInput): Promise<CreateDatasetOutput>;
  public createDataset(
    args: CreateDatasetInput,
    cb: (err: any, data?: CreateDatasetOutput) => void
  ): void;
  public createDataset(
    args: CreateDatasetInput,
    cb?: (err: any, data?: CreateDatasetOutput) => void
  ): Promise<CreateDatasetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDatasetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates the content of a data set by applying a "queryAction" (a SQL query) or a "containerAction" (executing a containerized application).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDatasetContent(
    args: CreateDatasetContentInput
  ): Promise<CreateDatasetContentOutput>;
  public createDatasetContent(
    args: CreateDatasetContentInput,
    cb: (err: any, data?: CreateDatasetContentOutput) => void
  ): void;
  public createDatasetContent(
    args: CreateDatasetContentInput,
    cb?: (err: any, data?: CreateDatasetContentOutput) => void
  ): Promise<CreateDatasetContentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDatasetContentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a data store, which is a repository for messages.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceAlreadyExistsException} <p>A resource with the same name already exists.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {LimitExceededException} <p>The command caused an internal limit to be exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDatastore(
    args: CreateDatastoreInput
  ): Promise<CreateDatastoreOutput>;
  public createDatastore(
    args: CreateDatastoreInput,
    cb: (err: any, data?: CreateDatastoreOutput) => void
  ): void;
  public createDatastore(
    args: CreateDatastoreInput,
    cb?: (err: any, data?: CreateDatastoreOutput) => void
  ): Promise<CreateDatastoreOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDatastoreCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a pipeline. A pipeline consumes messages from one or more channels and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceAlreadyExistsException} <p>A resource with the same name already exists.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {LimitExceededException} <p>The command caused an internal limit to be exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPipeline(
    args: CreatePipelineInput
  ): Promise<CreatePipelineOutput>;
  public createPipeline(
    args: CreatePipelineInput,
    cb: (err: any, data?: CreatePipelineOutput) => void
  ): void;
  public createPipeline(
    args: CreatePipelineInput,
    cb?: (err: any, data?: CreatePipelineOutput) => void
  ): Promise<CreatePipelineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePipelineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified channel.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteChannel(args: DeleteChannelInput): Promise<DeleteChannelOutput>;
  public deleteChannel(
    args: DeleteChannelInput,
    cb: (err: any, data?: DeleteChannelOutput) => void
  ): void;
  public deleteChannel(
    args: DeleteChannelInput,
    cb?: (err: any, data?: DeleteChannelOutput) => void
  ): Promise<DeleteChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified data set.</p> <p>You do not have to delete the content of the data set before you perform this operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDataset(args: DeleteDatasetInput): Promise<DeleteDatasetOutput>;
  public deleteDataset(
    args: DeleteDatasetInput,
    cb: (err: any, data?: DeleteDatasetOutput) => void
  ): void;
  public deleteDataset(
    args: DeleteDatasetInput,
    cb?: (err: any, data?: DeleteDatasetOutput) => void
  ): Promise<DeleteDatasetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDatasetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the content of the specified data set.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDatasetContent(
    args: DeleteDatasetContentInput
  ): Promise<DeleteDatasetContentOutput>;
  public deleteDatasetContent(
    args: DeleteDatasetContentInput,
    cb: (err: any, data?: DeleteDatasetContentOutput) => void
  ): void;
  public deleteDatasetContent(
    args: DeleteDatasetContentInput,
    cb?: (err: any, data?: DeleteDatasetContentOutput) => void
  ): Promise<DeleteDatasetContentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDatasetContentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified data store.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDatastore(
    args: DeleteDatastoreInput
  ): Promise<DeleteDatastoreOutput>;
  public deleteDatastore(
    args: DeleteDatastoreInput,
    cb: (err: any, data?: DeleteDatastoreOutput) => void
  ): void;
  public deleteDatastore(
    args: DeleteDatastoreInput,
    cb?: (err: any, data?: DeleteDatastoreOutput) => void
  ): Promise<DeleteDatastoreOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDatastoreCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePipeline(
    args: DeletePipelineInput
  ): Promise<DeletePipelineOutput>;
  public deletePipeline(
    args: DeletePipelineInput,
    cb: (err: any, data?: DeletePipelineOutput) => void
  ): void;
  public deletePipeline(
    args: DeletePipelineInput,
    cb?: (err: any, data?: DeletePipelineOutput) => void
  ): Promise<DeletePipelineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePipelineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about a channel.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeChannel(
    args: DescribeChannelInput
  ): Promise<DescribeChannelOutput>;
  public describeChannel(
    args: DescribeChannelInput,
    cb: (err: any, data?: DescribeChannelOutput) => void
  ): void;
  public describeChannel(
    args: DescribeChannelInput,
    cb?: (err: any, data?: DescribeChannelOutput) => void
  ): Promise<DescribeChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about a data set.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDataset(
    args: DescribeDatasetInput
  ): Promise<DescribeDatasetOutput>;
  public describeDataset(
    args: DescribeDatasetInput,
    cb: (err: any, data?: DescribeDatasetOutput) => void
  ): void;
  public describeDataset(
    args: DescribeDatasetInput,
    cb?: (err: any, data?: DescribeDatasetOutput) => void
  ): Promise<DescribeDatasetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDatasetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about a data store.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDatastore(
    args: DescribeDatastoreInput
  ): Promise<DescribeDatastoreOutput>;
  public describeDatastore(
    args: DescribeDatastoreInput,
    cb: (err: any, data?: DescribeDatastoreOutput) => void
  ): void;
  public describeDatastore(
    args: DescribeDatastoreInput,
    cb?: (err: any, data?: DescribeDatastoreOutput) => void
  ): Promise<DescribeDatastoreOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDatastoreCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the current settings of the AWS IoT Analytics logging options.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLoggingOptions(
    args: DescribeLoggingOptionsInput
  ): Promise<DescribeLoggingOptionsOutput>;
  public describeLoggingOptions(
    args: DescribeLoggingOptionsInput,
    cb: (err: any, data?: DescribeLoggingOptionsOutput) => void
  ): void;
  public describeLoggingOptions(
    args: DescribeLoggingOptionsInput,
    cb?: (err: any, data?: DescribeLoggingOptionsOutput) => void
  ): Promise<DescribeLoggingOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLoggingOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about a pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePipeline(
    args: DescribePipelineInput
  ): Promise<DescribePipelineOutput>;
  public describePipeline(
    args: DescribePipelineInput,
    cb: (err: any, data?: DescribePipelineOutput) => void
  ): void;
  public describePipeline(
    args: DescribePipelineInput,
    cb?: (err: any, data?: DescribePipelineOutput) => void
  ): Promise<DescribePipelineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePipelineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the contents of a data set as pre-signed URIs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDatasetContent(
    args: GetDatasetContentInput
  ): Promise<GetDatasetContentOutput>;
  public getDatasetContent(
    args: GetDatasetContentInput,
    cb: (err: any, data?: GetDatasetContentOutput) => void
  ): void;
  public getDatasetContent(
    args: GetDatasetContentInput,
    cb?: (err: any, data?: GetDatasetContentOutput) => void
  ): Promise<GetDatasetContentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDatasetContentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of channels.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listChannels(args: ListChannelsInput): Promise<ListChannelsOutput>;
  public listChannels(
    args: ListChannelsInput,
    cb: (err: any, data?: ListChannelsOutput) => void
  ): void;
  public listChannels(
    args: ListChannelsInput,
    cb?: (err: any, data?: ListChannelsOutput) => void
  ): Promise<ListChannelsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListChannelsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists information about data set contents that have been created.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDatasetContents(
    args: ListDatasetContentsInput
  ): Promise<ListDatasetContentsOutput>;
  public listDatasetContents(
    args: ListDatasetContentsInput,
    cb: (err: any, data?: ListDatasetContentsOutput) => void
  ): void;
  public listDatasetContents(
    args: ListDatasetContentsInput,
    cb?: (err: any, data?: ListDatasetContentsOutput) => void
  ): Promise<ListDatasetContentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDatasetContentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about data sets.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDatasets(args: ListDatasetsInput): Promise<ListDatasetsOutput>;
  public listDatasets(
    args: ListDatasetsInput,
    cb: (err: any, data?: ListDatasetsOutput) => void
  ): void;
  public listDatasets(
    args: ListDatasetsInput,
    cb?: (err: any, data?: ListDatasetsOutput) => void
  ): Promise<ListDatasetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDatasetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of data stores.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDatastores(
    args: ListDatastoresInput
  ): Promise<ListDatastoresOutput>;
  public listDatastores(
    args: ListDatastoresInput,
    cb: (err: any, data?: ListDatastoresOutput) => void
  ): void;
  public listDatastores(
    args: ListDatastoresInput,
    cb?: (err: any, data?: ListDatastoresOutput) => void
  ): Promise<ListDatastoresOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDatastoresCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of pipelines.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPipelines(args: ListPipelinesInput): Promise<ListPipelinesOutput>;
  public listPipelines(
    args: ListPipelinesInput,
    cb: (err: any, data?: ListPipelinesOutput) => void
  ): void;
  public listPipelines(
    args: ListPipelinesInput,
    cb?: (err: any, data?: ListPipelinesOutput) => void
  ): Promise<ListPipelinesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPipelinesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tags (metadata) which you have assigned to the resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {LimitExceededException} <p>The command caused an internal limit to be exceeded.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
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
   * <p>Sets or updates the AWS IoT Analytics logging options.</p> <p>Note that if you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the roleArn field (for example, to correct an invalid policy) it takes up to 5 minutes for that change to take effect. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putLoggingOptions(
    args: PutLoggingOptionsInput
  ): Promise<PutLoggingOptionsOutput>;
  public putLoggingOptions(
    args: PutLoggingOptionsInput,
    cb: (err: any, data?: PutLoggingOptionsOutput) => void
  ): void;
  public putLoggingOptions(
    args: PutLoggingOptionsInput,
    cb?: (err: any, data?: PutLoggingOptionsOutput) => void
  ): Promise<PutLoggingOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutLoggingOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Simulates the results of running a pipeline activity on a message payload.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public runPipelineActivity(
    args: RunPipelineActivityInput
  ): Promise<RunPipelineActivityOutput>;
  public runPipelineActivity(
    args: RunPipelineActivityInput,
    cb: (err: any, data?: RunPipelineActivityOutput) => void
  ): void;
  public runPipelineActivity(
    args: RunPipelineActivityInput,
    cb?: (err: any, data?: RunPipelineActivityOutput) => void
  ): Promise<RunPipelineActivityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RunPipelineActivityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sampleChannelData(
    args: SampleChannelDataInput
  ): Promise<SampleChannelDataOutput>;
  public sampleChannelData(
    args: SampleChannelDataInput,
    cb: (err: any, data?: SampleChannelDataOutput) => void
  ): void;
  public sampleChannelData(
    args: SampleChannelDataInput,
    cb?: (err: any, data?: SampleChannelDataOutput) => void
  ): Promise<SampleChannelDataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SampleChannelDataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts the reprocessing of raw message data through the pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {ResourceAlreadyExistsException} <p>A resource with the same name already exists.</p>
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startPipelineReprocessing(
    args: StartPipelineReprocessingInput
  ): Promise<StartPipelineReprocessingOutput>;
  public startPipelineReprocessing(
    args: StartPipelineReprocessingInput,
    cb: (err: any, data?: StartPipelineReprocessingOutput) => void
  ): void;
  public startPipelineReprocessing(
    args: StartPipelineReprocessingInput,
    cb?: (err: any, data?: StartPipelineReprocessingOutput) => void
  ): Promise<StartPipelineReprocessingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartPipelineReprocessingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {LimitExceededException} <p>The command caused an internal limit to be exceeded.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
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
   * <p>Removes the given tags (metadata) from the resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {LimitExceededException} <p>The command caused an internal limit to be exceeded.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
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
   * <p>Updates the settings of a channel.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateChannel(args: UpdateChannelInput): Promise<UpdateChannelOutput>;
  public updateChannel(
    args: UpdateChannelInput,
    cb: (err: any, data?: UpdateChannelOutput) => void
  ): void;
  public updateChannel(
    args: UpdateChannelInput,
    cb?: (err: any, data?: UpdateChannelOutput) => void
  ): Promise<UpdateChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the settings of a data set.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDataset(args: UpdateDatasetInput): Promise<UpdateDatasetOutput>;
  public updateDataset(
    args: UpdateDatasetInput,
    cb: (err: any, data?: UpdateDatasetOutput) => void
  ): void;
  public updateDataset(
    args: UpdateDatasetInput,
    cb?: (err: any, data?: UpdateDatasetOutput) => void
  ): Promise<UpdateDatasetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDatasetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the settings of a data store.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDatastore(
    args: UpdateDatastoreInput
  ): Promise<UpdateDatastoreOutput>;
  public updateDatastore(
    args: UpdateDatastoreInput,
    cb: (err: any, data?: UpdateDatastoreOutput) => void
  ): void;
  public updateDatastore(
    args: UpdateDatastoreInput,
    cb?: (err: any, data?: UpdateDatastoreOutput) => void
  ): Promise<UpdateDatastoreOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDatastoreCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was not valid.</p>
   *   - {ResourceNotFoundException} <p>A resource with the specified name could not be found.</p>
   *   - {InternalFailureException} <p>There was an internal failure.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {ThrottlingException} <p>The request was denied due to request throttling.</p>
   *   - {LimitExceededException} <p>The command caused an internal limit to be exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updatePipeline(
    args: UpdatePipelineInput
  ): Promise<UpdatePipelineOutput>;
  public updatePipeline(
    args: UpdatePipelineInput,
    cb: (err: any, data?: UpdatePipelineOutput) => void
  ): void;
  public updatePipeline(
    args: UpdatePipelineInput,
    cb?: (err: any, data?: UpdatePipelineOutput) => void
  ): Promise<UpdatePipelineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdatePipelineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
