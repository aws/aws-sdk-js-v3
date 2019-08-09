import { ElasticTranscoderClient } from "./ElasticTranscoderClient";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { CancelJobInput } from "./types/CancelJobInput";
import { CancelJobOutput } from "./types/CancelJobOutput";
import { CreateJobInput } from "./types/CreateJobInput";
import { CreateJobOutput } from "./types/CreateJobOutput";
import { CreatePipelineInput } from "./types/CreatePipelineInput";
import { CreatePipelineOutput } from "./types/CreatePipelineOutput";
import { CreatePresetInput } from "./types/CreatePresetInput";
import { CreatePresetOutput } from "./types/CreatePresetOutput";
import { DeletePipelineInput } from "./types/DeletePipelineInput";
import { DeletePipelineOutput } from "./types/DeletePipelineOutput";
import { DeletePresetInput } from "./types/DeletePresetInput";
import { DeletePresetOutput } from "./types/DeletePresetOutput";
import { IncompatibleVersionException } from "./types/IncompatibleVersionException";
import { InternalServiceException } from "./types/InternalServiceException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListJobsByPipelineInput } from "./types/ListJobsByPipelineInput";
import { ListJobsByPipelineOutput } from "./types/ListJobsByPipelineOutput";
import { ListJobsByStatusInput } from "./types/ListJobsByStatusInput";
import { ListJobsByStatusOutput } from "./types/ListJobsByStatusOutput";
import { ListPipelinesInput } from "./types/ListPipelinesInput";
import { ListPipelinesOutput } from "./types/ListPipelinesOutput";
import { ListPresetsInput } from "./types/ListPresetsInput";
import { ListPresetsOutput } from "./types/ListPresetsOutput";
import { ReadJobInput } from "./types/ReadJobInput";
import { ReadJobOutput } from "./types/ReadJobOutput";
import { ReadPipelineInput } from "./types/ReadPipelineInput";
import { ReadPipelineOutput } from "./types/ReadPipelineOutput";
import { ReadPresetInput } from "./types/ReadPresetInput";
import { ReadPresetOutput } from "./types/ReadPresetOutput";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { TestRoleInput } from "./types/TestRoleInput";
import { TestRoleOutput } from "./types/TestRoleOutput";
import { UpdatePipelineInput } from "./types/UpdatePipelineInput";
import { UpdatePipelineNotificationsInput } from "./types/UpdatePipelineNotificationsInput";
import { UpdatePipelineNotificationsOutput } from "./types/UpdatePipelineNotificationsOutput";
import { UpdatePipelineOutput } from "./types/UpdatePipelineOutput";
import { UpdatePipelineStatusInput } from "./types/UpdatePipelineStatusInput";
import { UpdatePipelineStatusOutput } from "./types/UpdatePipelineStatusOutput";
import { ValidationException } from "./types/ValidationException";
import { CancelJobCommand } from "./commands/CancelJobCommand";
import { CreateJobCommand } from "./commands/CreateJobCommand";
import { CreatePipelineCommand } from "./commands/CreatePipelineCommand";
import { CreatePresetCommand } from "./commands/CreatePresetCommand";
import { DeletePipelineCommand } from "./commands/DeletePipelineCommand";
import { DeletePresetCommand } from "./commands/DeletePresetCommand";
import { ListJobsByPipelineCommand } from "./commands/ListJobsByPipelineCommand";
import { ListJobsByStatusCommand } from "./commands/ListJobsByStatusCommand";
import { ListPipelinesCommand } from "./commands/ListPipelinesCommand";
import { ListPresetsCommand } from "./commands/ListPresetsCommand";
import { ReadJobCommand } from "./commands/ReadJobCommand";
import { ReadPipelineCommand } from "./commands/ReadPipelineCommand";
import { ReadPresetCommand } from "./commands/ReadPresetCommand";
import { TestRoleCommand } from "./commands/TestRoleCommand";
import { UpdatePipelineCommand } from "./commands/UpdatePipelineCommand";
import { UpdatePipelineNotificationsCommand } from "./commands/UpdatePipelineNotificationsCommand";
import { UpdatePipelineStatusCommand } from "./commands/UpdatePipelineStatusCommand";

export class ElasticTranscoder extends ElasticTranscoderClient {
  /**
   * <p>The CancelJob operation cancels an unfinished job.</p> <note> <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a pipeline from starting to process a job while you're getting the job identifier, use <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {ResourceNotFoundException} <p>The requested resource does not exist or is not available. For example, the pipeline to which you're trying to add a job doesn't exist or is still being created.</p>
   *   - {ResourceInUseException} <p>The resource you are attempting to change is in use. For example, you are attempting to delete a pipeline that is currently in use.</p>
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelJob(args: CancelJobInput): Promise<CancelJobOutput>;
  public cancelJob(
    args: CancelJobInput,
    cb: (err: any, data?: CancelJobOutput) => void
  ): void;
  public cancelJob(
    args: CancelJobInput,
    cb?: (err: any, data?: CancelJobOutput) => void
  ): Promise<CancelJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified plus information about the job that is created.</p> <p>If you have specified more than one output for your jobs (for example, one output for the Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to list the jobs (as opposed to the AWS Console).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {ResourceNotFoundException} <p>The requested resource does not exist or is not available. For example, the pipeline to which you're trying to add a job doesn't exist or is still being created.</p>
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {LimitExceededException} <p>Too many operations for a given AWS account. For example, the number of pipelines exceeds the maximum allowed.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createJob(args: CreateJobInput): Promise<CreateJobOutput>;
  public createJob(
    args: CreateJobInput,
    cb: (err: any, data?: CreateJobOutput) => void
  ): void;
  public createJob(
    args: CreateJobInput,
    cb?: (err: any, data?: CreateJobOutput) => void
  ): Promise<CreateJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The CreatePipeline operation creates a pipeline with settings that you specify.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {ResourceNotFoundException} <p>The requested resource does not exist or is not available. For example, the pipeline to which you're trying to add a job doesn't exist or is still being created.</p>
   *   - {LimitExceededException} <p>Too many operations for a given AWS account. For example, the number of pipelines exceeds the maximum allowed.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
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
   * <p>The CreatePreset operation creates a preset with settings that you specify.</p> <important> <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements and to determine whether they comply with H.264 standards. If your settings are not valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message in the response. This helps you determine whether your settings comply with the H.264 standard while giving you greater flexibility with respect to the video that Elastic Transcoder produces.</p> </important> <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding for generic audiovisual services</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {LimitExceededException} <p>Too many operations for a given AWS account. For example, the number of pipelines exceeds the maximum allowed.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPreset(args: CreatePresetInput): Promise<CreatePresetOutput>;
  public createPreset(
    args: CreatePresetInput,
    cb: (err: any, data?: CreatePresetOutput) => void
  ): void;
  public createPreset(
    args: CreatePresetInput,
    cb?: (err: any, data?: CreatePresetOutput) => void
  ): Promise<CreatePresetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePresetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The DeletePipeline operation removes a pipeline.</p> <p> You can only delete a pipeline that has never been used or that is not currently in use (doesn't contain any active jobs). If the pipeline is currently in use, <code>DeletePipeline</code> returns an error. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {ResourceNotFoundException} <p>The requested resource does not exist or is not available. For example, the pipeline to which you're trying to add a job doesn't exist or is still being created.</p>
   *   - {ResourceInUseException} <p>The resource you are attempting to change is in use. For example, you are attempting to delete a pipeline that is currently in use.</p>
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
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
   * <p>The DeletePreset operation removes a preset that you've added in an AWS region.</p> <note> <p>You can't delete the default presets that are included with Elastic Transcoder.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {ResourceNotFoundException} <p>The requested resource does not exist or is not available. For example, the pipeline to which you're trying to add a job doesn't exist or is still being created.</p>
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePreset(args: DeletePresetInput): Promise<DeletePresetOutput>;
  public deletePreset(
    args: DeletePresetInput,
    cb: (err: any, data?: DeletePresetOutput) => void
  ): void;
  public deletePreset(
    args: DeletePresetInput,
    cb?: (err: any, data?: DeletePresetOutput) => void
  ): Promise<DeletePresetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePresetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p> <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains one element for each job that satisfies the search criteria.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {ResourceNotFoundException} <p>The requested resource does not exist or is not available. For example, the pipeline to which you're trying to add a job doesn't exist or is still being created.</p>
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listJobsByPipeline(
    args: ListJobsByPipelineInput
  ): Promise<ListJobsByPipelineOutput>;
  public listJobsByPipeline(
    args: ListJobsByPipelineInput,
    cb: (err: any, data?: ListJobsByPipelineOutput) => void
  ): void;
  public listJobsByPipeline(
    args: ListJobsByPipelineInput,
    cb?: (err: any, data?: ListJobsByPipelineOutput) => void
  ): Promise<ListJobsByPipelineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListJobsByPipelineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The ListJobsByStatus operation gets a list of jobs that have a specified status. The response body contains one element for each job that satisfies the search criteria.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {ResourceNotFoundException} <p>The requested resource does not exist or is not available. For example, the pipeline to which you're trying to add a job doesn't exist or is still being created.</p>
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listJobsByStatus(
    args: ListJobsByStatusInput
  ): Promise<ListJobsByStatusOutput>;
  public listJobsByStatus(
    args: ListJobsByStatusInput,
    cb: (err: any, data?: ListJobsByStatusOutput) => void
  ): void;
  public listJobsByStatus(
    args: ListJobsByStatusInput,
    cb?: (err: any, data?: ListJobsByStatusOutput) => void
  ): Promise<ListJobsByStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListJobsByStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The ListPipelines operation gets a list of the pipelines associated with the current AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
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
   * <p>The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that you've added in an AWS region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPresets(args: ListPresetsInput): Promise<ListPresetsOutput>;
  public listPresets(
    args: ListPresetsInput,
    cb: (err: any, data?: ListPresetsOutput) => void
  ): void;
  public listPresets(
    args: ListPresetsInput,
    cb?: (err: any, data?: ListPresetsOutput) => void
  ): Promise<ListPresetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPresetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The ReadJob operation returns detailed information about a job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {ResourceNotFoundException} <p>The requested resource does not exist or is not available. For example, the pipeline to which you're trying to add a job doesn't exist or is still being created.</p>
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public readJob(args: ReadJobInput): Promise<ReadJobOutput>;
  public readJob(
    args: ReadJobInput,
    cb: (err: any, data?: ReadJobOutput) => void
  ): void;
  public readJob(
    args: ReadJobInput,
    cb?: (err: any, data?: ReadJobOutput) => void
  ): Promise<ReadJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReadJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The ReadPipeline operation gets detailed information about a pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {ResourceNotFoundException} <p>The requested resource does not exist or is not available. For example, the pipeline to which you're trying to add a job doesn't exist or is still being created.</p>
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public readPipeline(args: ReadPipelineInput): Promise<ReadPipelineOutput>;
  public readPipeline(
    args: ReadPipelineInput,
    cb: (err: any, data?: ReadPipelineOutput) => void
  ): void;
  public readPipeline(
    args: ReadPipelineInput,
    cb?: (err: any, data?: ReadPipelineOutput) => void
  ): Promise<ReadPipelineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReadPipelineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The ReadPreset operation gets detailed information about a preset.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {ResourceNotFoundException} <p>The requested resource does not exist or is not available. For example, the pipeline to which you're trying to add a job doesn't exist or is still being created.</p>
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public readPreset(args: ReadPresetInput): Promise<ReadPresetOutput>;
  public readPreset(
    args: ReadPresetInput,
    cb: (err: any, data?: ReadPresetOutput) => void
  ): void;
  public readPreset(
    args: ReadPresetInput,
    cb?: (err: any, data?: ReadPresetOutput) => void
  ): Promise<ReadPresetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReadPresetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The TestRole operation tests the IAM role used to create the pipeline.</p> <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding process. The action attempts to assume the specified IAM role, checks read access to the input and output buckets, and tries to send a test notification to Amazon SNS topics that you specify.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {ResourceNotFoundException} <p>The requested resource does not exist or is not available. For example, the pipeline to which you're trying to add a job doesn't exist or is still being created.</p>
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public testRole(args: TestRoleInput): Promise<TestRoleOutput>;
  public testRole(
    args: TestRoleInput,
    cb: (err: any, data?: TestRoleOutput) => void
  ): void;
  public testRole(
    args: TestRoleInput,
    cb?: (err: any, data?: TestRoleOutput) => void
  ): Promise<TestRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TestRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p> <important> <p>When you change pipeline settings, your changes take effect immediately. Jobs that you have already submitted and that Elastic Transcoder has not started to process are affected in addition to jobs that you submit after you change settings. </p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {ResourceInUseException} <p>The resource you are attempting to change is in use. For example, you are attempting to delete a pipeline that is currently in use.</p>
   *   - {ResourceNotFoundException} <p>The requested resource does not exist or is not available. For example, the pipeline to which you're trying to add a job doesn't exist or is still being created.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
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

  /**
   * <p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p> <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {ResourceNotFoundException} <p>The requested resource does not exist or is not available. For example, the pipeline to which you're trying to add a job doesn't exist or is still being created.</p>
   *   - {ResourceInUseException} <p>The resource you are attempting to change is in use. For example, you are attempting to delete a pipeline that is currently in use.</p>
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updatePipelineNotifications(
    args: UpdatePipelineNotificationsInput
  ): Promise<UpdatePipelineNotificationsOutput>;
  public updatePipelineNotifications(
    args: UpdatePipelineNotificationsInput,
    cb: (err: any, data?: UpdatePipelineNotificationsOutput) => void
  ): void;
  public updatePipelineNotifications(
    args: UpdatePipelineNotificationsInput,
    cb?: (err: any, data?: UpdatePipelineNotificationsOutput) => void
  ): Promise<UpdatePipelineNotificationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdatePipelineNotificationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline stops or restarts the processing of jobs.</p> <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which you submitted the jobs, you have more time to get the job IDs for the jobs that you want to cancel, and to send a <a>CancelJob</a> request. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more required parameter values were not provided in the request.</p>
   *   - {IncompatibleVersionException} IncompatibleVersionException shape
   *   - {ResourceNotFoundException} <p>The requested resource does not exist or is not available. For example, the pipeline to which you're trying to add a job doesn't exist or is still being created.</p>
   *   - {ResourceInUseException} <p>The resource you are attempting to change is in use. For example, you are attempting to delete a pipeline that is currently in use.</p>
   *   - {AccessDeniedException} <p>General authentication failure. The request was not signed correctly.</p>
   *   - {InternalServiceException} <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updatePipelineStatus(
    args: UpdatePipelineStatusInput
  ): Promise<UpdatePipelineStatusOutput>;
  public updatePipelineStatus(
    args: UpdatePipelineStatusInput,
    cb: (err: any, data?: UpdatePipelineStatusOutput) => void
  ): void;
  public updatePipelineStatus(
    args: UpdatePipelineStatusInput,
    cb?: (err: any, data?: UpdatePipelineStatusOutput) => void
  ): Promise<UpdatePipelineStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdatePipelineStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
